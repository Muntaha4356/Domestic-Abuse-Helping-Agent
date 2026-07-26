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
    // Fallback if the environment variable is not defined or is placeholder
    const isMock = !process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "your_key_here";

    if (isMock) {
      console.warn("GEMINI_API_KEY is not configured on the server. Using mock crisis/calling simulations.");
      const msg = data.message.toLowerCase();
      const lastAssistantMsg = data.history.length > 0 ? data.history[data.history.length - 1] : null;

      // 1. Consent Confirmation check
      const wasAskedToCall = lastAssistantMsg?.role === "assistant" && 
        (lastAssistantMsg.content.includes("help you call") || lastAssistantMsg.content.includes("call Monarch Services"));
      
      const userConfirmed = msg === "yes" || msg.includes("yes, please") || msg.includes("yes please") || msg.includes("sure") || msg.includes("call them") || msg.includes("please do");

      if (wasAskedToCall && userConfirmed) {
        return {
          reply: "I've prepared the call for you. Since this is a browser environment, you will need to tap the button below to initiate it. Take your time, and only call when you are ready.",
          callLink: "tel:+18889004232",
          callResourceName: "Monarch Services",
        };
      }

      // 2. Severe situation detection check
      const dangerKeywords = ["danger", "hurt", "abuse", "scared", "crisis", "assault", "hit", "beating", "pain", "violence", "threat"];
      const isDanger = dangerKeywords.some(keyword => msg.includes(keyword));

      if (isDanger) {
        return {
          reply: "I'm so sorry you're going through this, and I want to make sure you are safe. Would you like me to help you call Monarch Services right now?",
          resourceId: "crisis_line",
        };
      }

      const index = Math.floor(Math.random() * cannedReplies.length);
      return { reply: cannedReplies[index] };
    }

    return runChat(data.message, data.history);
  });
