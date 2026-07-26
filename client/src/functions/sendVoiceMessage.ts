import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { runChat } from "@/server/gemma/runChat";
import { getGeminiClient } from "@/server/gemma/client";
import { GEMMA_MODEL_ID } from "@/server/config";
import type { SendChatOutput } from "@/lib/chat-api";

const sendVoiceInputSchema = z.object({
  base64Audio: z.string(),
  mimeType: z.string(),
  clientTranscript: z.string().optional(),
  history: z.array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string(),
    }),
  ),
});

export type SendVoiceOutput = SendChatOutput & {
  transcription: string;
};

export const sendVoiceMessage = createServerFn({ method: "POST" })
  .validator((data: unknown) => sendVoiceInputSchema.parse(data))
  .handler(async ({ data }): Promise<SendVoiceOutput> => {
    const isMock = !process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "your_key_here";

    let transcription = "";

    if (isMock) {
      console.warn("GEMINI_API_KEY is not configured on the server. Using clientTranscript fallback for mock mode.");
      transcription = data.clientTranscript || "I am in danger, please help me";
    } else {
      try {
        const client = getGeminiClient();
        const response = await client.models.generateContent({
          model: GEMMA_MODEL_ID,
          contents: [
            {
              role: "user",
              parts: [
                {
                  inlineData: {
                    data: data.base64Audio,
                    mimeType: data.mimeType,
                  },
                },
                {
                  text: "Transcribe this audio. Return ONLY the transcribed text, nothing else. Do not add any introductory phrases or formatting. If the audio is silent or contains no speech, return an empty string.",
                },
              ],
            },
          ],
        });

        transcription = response.text?.trim() || "";
      } catch (err) {
        console.error("Failed to transcribe voice via Gemma 4 API:", err);
        // Fallback to client transcript if API fails
        transcription = data.clientTranscript || "";
      }
    }

    if (!transcription) {
      throw new Error("No speech detected in the voice message. Please try speaking louder or typing.");
    }

    // Process the transcribed text using our existing chat handler (mock or live runChat)
    let chatResult: SendChatOutput;

    if (isMock) {
      const msg = transcription.toLowerCase();
      const lastAssistantMsg = data.history.length > 0 ? data.history[data.history.length - 1] : null;

      // Consent check
      const wasAskedToCall = lastAssistantMsg?.role === "assistant" && 
        (lastAssistantMsg.content.includes("help you call") || lastAssistantMsg.content.includes("call Monarch Services"));
      
      const userConfirmed = msg === "yes" || msg.includes("yes, please") || msg.includes("yes please") || msg.includes("sure") || msg.includes("call them") || msg.includes("please do");

      if (wasAskedToCall && userConfirmed) {
        chatResult = {
          reply: "I've prepared the call for you. Since this is a browser environment, you will need to tap the button below to initiate it. Take your time, and only call when you are ready.",
          callLink: "tel:+18889004232",
          callResourceName: "Monarch Services",
        };
      } else {
        const dangerKeywords = ["danger", "hurt", "abuse", "scared", "crisis", "assault", "hit", "beating", "pain", "violence", "threat"];
        const isDanger = dangerKeywords.some(keyword => msg.includes(keyword));

        if (isDanger) {
          chatResult = {
            reply: "I'm so sorry you're going through this, and I want to make sure you are safe. Would you like me to help you call Monarch Services right now?",
            resourceId: "crisis_line",
          };
        } else {
          const { cannedReplies } = await import("@/lib/mockData");
          const index = Math.floor(Math.random() * cannedReplies.length);
          chatResult = { reply: cannedReplies[index] };
        }
      }
    } else {
      chatResult = await runChat(transcription, data.history);
    }

    return {
      ...chatResult,
      transcription,
    };
  });
