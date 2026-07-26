import type { Resource } from "@/lib/mockData";

export type ResourceCategory = "crisis" | "shelter" | "legal" | "counseling";

export type LocalResource = Resource & { category: ResourceCategory };

export const localResources: LocalResource[] = [
  {
    category: "crisis",
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
    category: "shelter",
    id: "shelter",
    name: "Walnut Avenue Family & Women's Center",
    phone: "1-866-269-2559",
    phoneHref: "tel:+18662692559",
    hours: "24/7 helpline",
    description: "Emergency shelter, safety planning, peer counseling",
    tag: "24/7",
  },
  {
    category: "legal",
    id: "legal",
    name: "Santa Cruz County Victim/Witness Program",
    phone: "831-454-2050",
    phoneHref: "tel:+18314542050",
    hours: "Business hours",
    description: "Restraining order help, court accompaniment",
  },
  {
    category: "counseling",
    id: "counseling",
    name: "Walnut Avenue Support Groups",
    phone: "831-426-3062",
    phoneHref: "tel:+18314263062",
    hours: "Weekday 10am-1pm",
    description: "Free support groups",
  },
];

export function getLocalResourceByCategory(category: ResourceCategory): LocalResource | undefined {
  return localResources.find((entry) => entry.category === category);
}
