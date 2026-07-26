import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { i as stringType, n as enumType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
import { n as getGeminiClient, r as runChat, t as createServerRpc } from "./runChat-DTaJ47Cb.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/sendVoiceMessage-f7V9fmsF.js
var sendVoiceInputSchema = objectType({
	base64Audio: stringType(),
	mimeType: stringType(),
	clientTranscript: stringType().optional(),
	history: arrayType(objectType({
		role: enumType(["user", "assistant"]),
		content: stringType()
	}))
});
var sendVoiceMessage_createServerFn_handler = createServerRpc({
	id: "3f65130c504e802836b3569f9453e2eeeffad12a49b10cc43e243d92d90b36ce",
	name: "sendVoiceMessage",
	filename: "src/functions/sendVoiceMessage.ts"
}, (opts) => sendVoiceMessage.__executeServer(opts));
var sendVoiceMessage = createServerFn({ method: "POST" }).validator((data) => sendVoiceInputSchema.parse(data)).handler(sendVoiceMessage_createServerFn_handler, async ({ data }) => {
	const isMock = !processModule.env.GEMINI_API_KEY || processModule.env.GEMINI_API_KEY === "your_key_here";
	let transcription = "";
	if (isMock) {
		console.warn("GEMINI_API_KEY is not configured on the server. Using clientTranscript fallback for mock mode.");
		transcription = data.clientTranscript || "I am in danger, please help me";
	} else try {
		transcription = (await getGeminiClient().models.generateContent({
			model: "gemma-4-26b-a4b-it",
			contents: [{
				role: "user",
				parts: [{ inlineData: {
					data: data.base64Audio,
					mimeType: data.mimeType
				} }, { text: "Transcribe this audio. Return ONLY the transcribed text, nothing else. Do not add any introductory phrases or formatting. If the audio is silent or contains no speech, return an empty string." }]
			}]
		})).text?.trim() || "";
	} catch (err) {
		console.error("Failed to transcribe voice via Gemma 4 API:", err);
		transcription = data.clientTranscript || "";
	}
	if (!transcription) throw new Error("No speech detected in the voice message. Please try speaking louder or typing.");
	let chatResult;
	if (isMock) {
		const msg = transcription.toLowerCase();
		const lastAssistantMsg = data.history.length > 0 ? data.history[data.history.length - 1] : null;
		const wasAskedToCall = lastAssistantMsg?.role === "assistant" && (lastAssistantMsg.content.includes("help you call") || lastAssistantMsg.content.includes("call Monarch Services"));
		const userConfirmed = msg === "yes" || msg.includes("yes, please") || msg.includes("yes please") || msg.includes("sure") || msg.includes("call them") || msg.includes("please do");
		if (wasAskedToCall && userConfirmed) chatResult = {
			reply: "I've prepared the call for you. Since this is a browser environment, you will need to tap the button below to initiate it. Take your time, and only call when you are ready.",
			callLink: "tel:+18889004232",
			callResourceName: "Monarch Services"
		};
		else if ([
			"danger",
			"hurt",
			"abuse",
			"scared",
			"crisis",
			"assault",
			"hit",
			"beating",
			"pain",
			"violence",
			"threat"
		].some((keyword) => msg.includes(keyword))) chatResult = {
			reply: "I'm so sorry you're going through this, and I want to make sure you are safe. Would you like me to help you call Monarch Services right now?",
			resourceId: "crisis_line"
		};
		else {
			const { cannedReplies } = await import("./mockData-DBQxa0gP.mjs").then((n) => n.r);
			chatResult = { reply: cannedReplies[Math.floor(Math.random() * cannedReplies.length)] };
		}
	} else chatResult = await runChat(transcription, data.history);
	return {
		...chatResult,
		transcription
	};
});
//#endregion
export { sendVoiceMessage_createServerFn_handler };
