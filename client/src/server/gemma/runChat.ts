import type { Content, Part } from "@google/genai";

import type { ChatHistoryItem, SendChatOutput } from "@/lib/chat-api";
import { GEMMA_MODEL_ID, SYSTEM_INSTRUCTION } from "@/server/config";
import { getGeminiClient } from "@/server/gemma/client";
import {
  executeGetLocalResource,
  getLocalResourceDeclaration,
} from "@/server/tools/getLocalResource";

const MAX_TOOL_ROUNDS = 3;

function toGeminiHistory(history: ChatHistoryItem[]): Content[] {
  return history.map((item) => ({
    role: item.role === "assistant" ? "model" : "user",
    parts: [{ text: item.content }],
  }));
}

function extractText(parts: Part[] | undefined): string {
  if (!parts) return "";
  return parts
    .map((part) => part.text ?? "")
    .join("")
    .trim();
}

function extractResourceId(result: unknown): string | undefined {
  if (!result || typeof result !== "object" || "error" in result) return undefined;
  const id = (result as { id?: unknown }).id;
  return typeof id === "string" ? id : undefined;
}

export async function runChat(
  message: string,
  history: ChatHistoryItem[],
): Promise<SendChatOutput> {
  const client = getGeminiClient();
  const contents: Content[] = [...toGeminiHistory(history), { role: "user", parts: [{ text: message }] }];

  let resourceId: string | undefined;

  for (let round = 0; round < MAX_TOOL_ROUNDS; round += 1) {
    const response = await client.models.generateContent({
      model: GEMMA_MODEL_ID,
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ functionDeclarations: [getLocalResourceDeclaration] }],
      },
    });

    const candidate = response.candidates?.[0];
    const modelContent = candidate?.content;
    if (!modelContent?.parts?.length) {
      throw new Error("The model returned an empty response.");
    }

    contents.push(modelContent);

    const functionCalls = modelContent.parts.filter((part) => part.functionCall);
    if (functionCalls.length === 0) {
      const reply = extractText(modelContent.parts);
      if (!reply) {
        throw new Error("The model returned no text.");
      }
      return { reply, resourceId };
    }

    const functionResponseParts: Part[] = functionCalls.map((part) => {
      const call = part.functionCall!;
      const args = call.args ?? {};
      const category = "category" in args ? args.category : undefined;
      const result = executeGetLocalResource(category);

      resourceId ??= extractResourceId(result);

      return {
        functionResponse: {
          name: call.name ?? "getLocalResource",
          response: result,
        },
      };
    });

    contents.push({ role: "user", parts: functionResponseParts });
  }

  throw new Error("Tool-calling loop exceeded the maximum number of rounds.");
}
