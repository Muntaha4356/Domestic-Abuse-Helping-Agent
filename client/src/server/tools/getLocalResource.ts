import { Type, type FunctionDeclaration } from "@google/genai";

import {
  getLocalResourceByCategory,
  type ResourceCategory,
} from "@/server/data/localResources";

export const getLocalResourceDeclaration: FunctionDeclaration = {
  name: "getLocalResource",
  description:
    "Look up a trusted Santa Cruz support resource by category when the user needs a specific type of help.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      category: {
        type: Type.STRING,
        description: "The type of support needed.",
        enum: ["crisis", "shelter", "legal", "counseling"],
      },
    },
    required: ["category"],
  },
};

const CATEGORIES = new Set<ResourceCategory>(["crisis", "shelter", "legal", "counseling"]);

export function executeGetLocalResource(category: unknown) {
  if (typeof category !== "string" || !CATEGORIES.has(category as ResourceCategory)) {
    return { error: "Invalid category. Use crisis, shelter, legal, or counseling." };
  }

  const resource = getLocalResourceByCategory(category as ResourceCategory);
  if (!resource) {
    return { error: `No resource found for category: ${category}` };
  }

  const { category: _category, ...resourceData } = resource;
  return resourceData;
}

export const initiateCallDeclaration: FunctionDeclaration = {
  name: "initiateCall",
  description:
    "Prepare a phone call link for the user to a specific support resource when they give consent to call. Returns a tel: link that the user must physically tap.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      phone: {
        type: Type.STRING,
        description: "The phone number to dial, e.g., '1-888-900-4232'.",
      },
      resourceName: {
        type: Type.STRING,
        description: "The name of the resource, e.g., 'Monarch Services'.",
      },
    },
    required: ["phone", "resourceName"],
  },
};

export function executeInitiateCall(phone: string, resourceName: string) {
  const cleanPhone = phone.replace(/[^\d+]/g, "");
  const callLink = phone.startsWith("tel:") ? phone : `tel:${phone.startsWith("+") ? "" : "+1"}${cleanPhone}`;
  return {
    callLink,
    resourceName,
    requiresUserTap: true,
  };
}
