import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as cannedReplies } from "./mockData-C1GxrP5G.mjs";
import { i as stringType, n as enumType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
import { n as Type, t as GoogleGenAI } from "../_libs/google__genai+p-retry+retry.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/sendChatMessage-DqXgy23E.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var GEMMA_MODEL_ID = "gemma-4-26b-a4b-it";
var SYSTEM_INSTRUCTION = "You are a calm, trauma-informed support assistant for Santa Cruz. Respond with warmth, and never judge or diagnose. Core Behavior Rules:\n1. Urgency Detection: Silently assess when the user's messages indicate a serious situation (active abuse, sexual assault, or immediate danger). Do NOT state or narrate this assessment back to the user.\n2. Resource Suggestion: When you detect a serious situation, immediately and proactively call the `getLocalResource` tool with the category 'crisis' (or other category if more appropriate) to fetch support details. Do not wait to be asked.\n3. Consent-Gated Agentic Calling: If the situation is serious, ask the user directly: \"Would you like me to help you call [Resource Name] right now?\" (substituting the correct resource name, e.g., 'Monarch Services'). ONLY call the `initiateCall` tool with the phone number and name of the resource if the user explicitly confirms \"yes\" in their immediate response.\n4. Emergency Services Guardrail: Never suggest or mention calling emergency services (like 911) unless the user brings it up first.\n5. Urgency Guardrail: Never assume urgency or danger just because the user goes silent, gives short answers, or stops replying.\n6. Prioritize User Preference: Always prioritize the user's stated preferences and comfort over your own risk assessment. Offer support resources, but never insist or act without explicit consent.";
var client;
function getGeminiClient() {
	const apiKey = processModule.env.GEMINI_API_KEY;
	if (!apiKey) throw new Error("GEMINI_API_KEY is not configured on the server.");
	client ??= new GoogleGenAI({ apiKey });
	return client;
}
var localResources = [
	{
		category: "crisis",
		id: "crisis_line",
		name: "Monarch Services",
		phone: "1-888-900-4232",
		phoneHref: "tel:+18889004232",
		hours: "24/7",
		description: "Bilingual crisis line for domestic violence, sexual assault, and trafficking survivors",
		tag: "24/7"
	},
	{
		category: "shelter",
		id: "shelter",
		name: "Walnut Avenue Family & Women's Center",
		phone: "1-866-269-2559",
		phoneHref: "tel:+18662692559",
		hours: "24/7 helpline",
		description: "Emergency shelter, safety planning, peer counseling",
		tag: "24/7"
	},
	{
		category: "legal",
		id: "legal",
		name: "Santa Cruz County Victim/Witness Program",
		phone: "831-454-2050",
		phoneHref: "tel:+18314542050",
		hours: "Business hours",
		description: "Restraining order help, court accompaniment"
	},
	{
		category: "counseling",
		id: "counseling",
		name: "Walnut Avenue Support Groups",
		phone: "831-426-3062",
		phoneHref: "tel:+18314263062",
		hours: "Weekday 10am-1pm",
		description: "Free support groups"
	}
];
function getLocalResourceByCategory(category) {
	return localResources.find((entry) => entry.category === category);
}
var getLocalResourceDeclaration = {
	name: "getLocalResource",
	description: "Look up a trusted Santa Cruz support resource by category when the user needs a specific type of help.",
	parameters: {
		type: Type.OBJECT,
		properties: { category: {
			type: Type.STRING,
			description: "The type of support needed.",
			enum: [
				"crisis",
				"shelter",
				"legal",
				"counseling"
			]
		} },
		required: ["category"]
	}
};
var CATEGORIES = /* @__PURE__ */ new Set([
	"crisis",
	"shelter",
	"legal",
	"counseling"
]);
function executeGetLocalResource(category) {
	if (typeof category !== "string" || !CATEGORIES.has(category)) return { error: "Invalid category. Use crisis, shelter, legal, or counseling." };
	const resource = getLocalResourceByCategory(category);
	if (!resource) return { error: `No resource found for category: ${category}` };
	const { category: _category, ...resourceData } = resource;
	return resourceData;
}
var initiateCallDeclaration = {
	name: "initiateCall",
	description: "Prepare a phone call link for the user to a specific support resource when they give consent to call. Returns a tel: link that the user must physically tap.",
	parameters: {
		type: Type.OBJECT,
		properties: {
			phone: {
				type: Type.STRING,
				description: "The phone number to dial, e.g., '1-888-900-4232'."
			},
			resourceName: {
				type: Type.STRING,
				description: "The name of the resource, e.g., 'Monarch Services'."
			}
		},
		required: ["phone", "resourceName"]
	}
};
function executeInitiateCall(phone, resourceName) {
	const cleanPhone = phone.replace(/[^\d+]/g, "");
	return {
		callLink: phone.startsWith("tel:") ? phone : `tel:${phone.startsWith("+") ? "" : "+1"}${cleanPhone}`,
		resourceName,
		requiresUserTap: true
	};
}
var MAX_TOOL_ROUNDS = 3;
function toGeminiHistory(history) {
	return history.map((item) => ({
		role: item.role === "assistant" ? "model" : "user",
		parts: [{ text: item.content }]
	}));
}
function extractText(parts) {
	if (!parts) return "";
	return parts.map((part) => part.text ?? "").join("").trim();
}
function extractResourceId(result) {
	if (!result || typeof result !== "object" || "error" in result) return void 0;
	const id = result.id;
	return typeof id === "string" ? id : void 0;
}
async function runChat(message, history) {
	const client = getGeminiClient();
	const contents = [...toGeminiHistory(history), {
		role: "user",
		parts: [{ text: message }]
	}];
	let resourceId;
	let callLink;
	let callResourceName;
	for (let round = 0; round < MAX_TOOL_ROUNDS; round += 1) {
		const modelContent = ((await client.models.generateContent({
			model: GEMMA_MODEL_ID,
			contents,
			config: {
				systemInstruction: SYSTEM_INSTRUCTION,
				tools: [{ functionDeclarations: [getLocalResourceDeclaration, initiateCallDeclaration] }]
			}
		})).candidates?.[0])?.content;
		if (!modelContent?.parts?.length) throw new Error("The model returned an empty response.");
		contents.push(modelContent);
		const functionCalls = modelContent.parts.filter((part) => part.functionCall);
		if (functionCalls.length === 0) {
			const reply = extractText(modelContent.parts);
			if (!reply) throw new Error("The model returned no text.");
			return {
				reply,
				resourceId,
				callLink,
				callResourceName
			};
		}
		const functionResponseParts = functionCalls.map((part) => {
			const call = part.functionCall;
			const args = call.args ?? {};
			let result;
			if (call.name === "getLocalResource") {
				result = executeGetLocalResource("category" in args ? args.category : void 0);
				resourceId ??= extractResourceId(result);
			} else if (call.name === "initiateCall") {
				result = executeInitiateCall("phone" in args ? String(args.phone) : "", "resourceName" in args ? String(args.resourceName) : "");
				callLink ??= result.callLink;
				callResourceName ??= result.resourceName;
			} else result = { error: `Unknown tool: ${call.name}` };
			return { functionResponse: {
				name: call.name,
				response: result
			} };
		});
		contents.push({
			role: "user",
			parts: functionResponseParts
		});
	}
	throw new Error("Tool-calling loop exceeded the maximum number of rounds.");
}
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
