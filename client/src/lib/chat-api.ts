export type ChatHistoryItem = {
  role: "user" | "assistant";
  content: string;
};

export type SendChatInput = {
  message: string;
  history: ChatHistoryItem[];
};

export type SendChatOutput = {
  reply: string;
  resourceId?: string;
};
