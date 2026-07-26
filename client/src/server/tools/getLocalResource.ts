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
