export type Resource = {
  id: string;
  name: string;
  phone: string;
  phoneHref: string;
  hours: string;
  description: string;
  tag?: string;
};

export const resources: Resource[] = [
  {
    id: "crisis_line",
    name: "Monarch Services",
    phone: "1-888-900-4232",
    phoneHref: "tel:+18889004232",
    hours: "24/7",
    description:
      "Bilingual crisis line for domestic violence, sexual assault, and trafficking survivors",
    tag: "24/7",
  },
  {
    id: "shelter",
    name: "Walnut Avenue Family & Women's Center",
    phone: "1-866-269-2559",
    phoneHref: "tel:+18662692559",
    hours: "24/7 helpline",
    description: "Emergency shelter, safety planning, peer counseling",
    tag: "24/7",
  },
  {
    id: "legal",
    name: "Santa Cruz County Victim/Witness Program",
    phone: "831-454-2050",
    phoneHref: "tel:+18314542050",
    hours: "Business hours",
    description: "Restraining order help, court accompaniment",
  },
  {
    id: "counseling",
    name: "Walnut Avenue Support Groups",
    phone: "831-426-3062",
    phoneHref: "tel:+18314263062",
    hours: "Weekday 10am-1pm",
    description: "Free support groups",
  },
];

export type ChatMessage =
  | { id: string; role: "assistant" | "user"; kind: "text"; content: string }
  | { id: string; role: "assistant"; kind: "resource"; resourceId: string }
  | {
      id: string;
      role: "assistant";
      kind: "handoff";
      resourceId: string;
    };

export const initialMessages: ChatMessage[] = [
  {
    id: "m1",
    role: "assistant",
    kind: "text",
    content:
      "Hi. I'm really glad you're here. There's no rush — take your time, and share only what feels okay to share.",
  },
  {
    id: "m2",
    role: "assistant",
    kind: "text",
    content:
      "If it helps, you can tell me a little about what's going on, or just how you're feeling right now.",
  },
];

// Hardcoded placeholder assistant replies cycled through for the prototype.
export const cannedReplies: string[] = [
  "Thank you for trusting me with that. What you're feeling makes sense.",
  "That sounds really heavy to carry. You don't have to have it all figured out right now.",
  "I hear you. Would it help to talk through what feels most pressing today?",
  "You're doing something brave by reaching out. I'm here for as long as you need.",
];

// Legacy prototype helper — chat now uses the Gemma server function.
export const suggestsResourceFor = (_text: string): string | null => null;
