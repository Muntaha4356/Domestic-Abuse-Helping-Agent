import { t as cannedReplies } from "./mockData-DBQxa0gP.mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { i as stringType, n as enumType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
import { r as runChat, t as createServerRpc } from "./runChat-DTaJ47Cb.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/sendChatMessage-DuPuzAO8.js
var sendChatInputSchema = objectType({
	message: stringType().trim().min(1).max(4e3),
	history: arrayType(objectType({
		role: enumType(["user", "assistant"]),
		content: stringType()
	}))
});
var sendChatMessage_createServerFn_handler = createServerRpc({
	id: "a321fe2194a921581fef2414e566f7a5282f648f08f25d41814b7f1c063e265f",
	name: "sendChatMessage",
	filename: "src/functions/sendChatMessage.ts"
}, (opts) => sendChatMessage.__executeServer(opts));
var sendChatMessage = createServerFn({ method: "POST" }).validator((data) => sendChatInputSchema.parse(data)).handler(sendChatMessage_createServerFn_handler, async ({ data }) => {
	if (!processModule.env.GEMINI_API_KEY || processModule.env.GEMINI_API_KEY === "your_key_here") {
		console.warn("GEMINI_API_KEY is not configured on the server. Using mock crisis/calling simulations.");
		const msg = data.message.toLowerCase();
		const lastAssistantMsg = data.history.length > 0 ? data.history[data.history.length - 1] : null;
		const wasAskedToCall = lastAssistantMsg?.role === "assistant" && (lastAssistantMsg.content.includes("help you call") || lastAssistantMsg.content.includes("call Monarch Services"));
		const userConfirmed = msg === "yes" || msg.includes("yes, please") || msg.includes("yes please") || msg.includes("sure") || msg.includes("call them") || msg.includes("please do");
		if (wasAskedToCall && userConfirmed) return {
			reply: "I've prepared the call for you. Since this is a browser environment, you will need to tap the button below to initiate it. Take your time, and only call when you are ready.",
			callLink: "tel:+18889004232",
			callResourceName: "Monarch Services"
		};
		if ([
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
		].some((keyword) => msg.includes(keyword))) return {
			reply: "I'm so sorry you're going through this, and I want to make sure you are safe. Would you like me to help you call Monarch Services right now?",
			resourceId: "crisis_line"
		};
		return { reply: cannedReplies[Math.floor(Math.random() * cannedReplies.length)] };
	}
	return runChat(data.message, data.history);
});
//#endregion
export { sendChatMessage_createServerFn_handler };
