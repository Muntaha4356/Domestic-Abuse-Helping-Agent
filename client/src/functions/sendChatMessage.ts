import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import type { SendChatOutput } from "@/lib/chat-api";
import { runChat } from "@/server/gemma/runChat";
import { cannedReplies } from "@/lib/mockData";

const sendChatInputSchema = z.object({
  message: z.string().trim().min(1).max(4000),
  history: z.array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string(),
    }),
  ),
});

export const sendChatMessage = createServerFn({ method: "POST" })
  .validator((data: unknown) => sendChatInputSchema.parse(data))
  .handler(async ({ data }): Promise<SendChatOutput> => {
    // Fallback if the environment variable is not defined
    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY is not configured on the server. Using mock replies.");
      const index = Math.floor(Math.random() * cannedReplies.length);
      return { reply: cannedReplies[index] };
    }

    return runChat(data.message, data.history);
  });
