import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as cannedReplies } from "./mockData-C1GxrP5G.mjs";
import { i as stringType, n as enumType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
import { n as Type, t as GoogleGenAI } from "../_libs/google__genai+p-retry+retry.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/sendChatMessage-bfqQGSb4.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var GEMMA_MODEL_ID = "gemma-4-26b-a4b-it";
var SYSTEM_INSTRUCTION = "You are a calm, trauma-informed support assistant for Santa Cruz. Never diagnose. Prioritize safety. Never assume urgency from silence. Use getLocalResource when someone needs a specific type of help, or when you detect the situation is severe, to retrieve and present the corresponding support resource. Never auto-suggest contacting emergency services (like 911) without the user's explicit request.";
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
	for (let round = 0; round < MAX_TOOL_ROUNDS; round += 1) {
		const modelContent = ((await client.models.generateContent({
			model: GEMMA_MODEL_ID,
			contents,
			config: {
				systemInstruction: SYSTEM_INSTRUCTION,
				tools: [{ functionDeclarations: [getLocalResourceDeclaration] }]
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
				resourceId
			};
		}
		const functionResponseParts = functionCalls.map((part) => {
			const call = part.functionCall;
			const args = call.args ?? {};
			const result = executeGetLocalResource("category" in args ? args.category : void 0);
			resourceId ??= extractResourceId(result);
			return { functionResponse: {
				name: call.name ?? "getLocalResource",
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
	if (!processModule.env.GEMINI_API_KEY) {
		console.warn("GEMINI_API_KEY is not configured on the server. Using mock replies.");
		return { reply: cannedReplies[Math.floor(Math.random() * cannedReplies.length)] };
	}
	return runChat(data.message, data.history);
});
//#endregion
export { sendChatMessage_createServerFn_handler };
