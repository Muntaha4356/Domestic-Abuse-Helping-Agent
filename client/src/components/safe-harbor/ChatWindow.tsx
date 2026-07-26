import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Lock, ArrowLeft } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";
import { ResourceCard } from "./ResourceCard";
import { HandoffModal } from "./HandoffModal";
import { CrisisDial } from "./CrisisDial";
import { initialMessages, resources, type ChatMessage, type Resource } from "@/lib/mockData";
import { sendChatMessage } from "@/functions/sendChatMessage";

type Props = {
  onLeave: () => void;
};

const findResource = (id: string) => resources.find((r) => r.id === id)!;

export function ChatWindow({ onLeave }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [handoffResource, setHandoffResource] = useState<Resource | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sendMessage = useServerFn(sendChatMessage);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text || isTyping) return;
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      kind: "text",
      content: text,
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setIsTyping(true);

    const history = messages
      .filter((m): m is Extract<ChatMessage, { kind: "text" }> => m.kind === "text")
      .map((m) => ({
        role: m.role,
        content: m.content,
      }));

    try {
      const result = await sendMessage({ data: { message: text, history } });
      const next: ChatMessage[] = [
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          kind: "text",
          content: result.reply,
        },
      ];
      if (result.resourceId) {
        next.push({
          id: `r-${Date.now()}`,
          role: "assistant",
          kind: "resource",
          resourceId: result.resourceId,
        });
      }
      setMessages((m) => [...m, ...next]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          kind: "text",
          content:
            "I'm having trouble connecting right now. Please try again in a moment, or use the crisis line above if you need immediate help.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const confirmHandoff = () => {
    if (!handoffResource) return;
    const r = handoffResource;
    setHandoffResource(null);
    setMessages((m) => [
      ...m,
      {
        id: `a-${Date.now()}`,
        role: "assistant",
        kind: "text",
        content: `Okay. Here's a draft you could send to ${r.name}: "Hi, I'd like to talk with someone. I'm not in immediate danger, but I could use support." You can change any of it before sending.`,
      },
    ]);
  };

  return (
    <div className="mx-auto flex h-[100dvh] w-full max-w-2xl flex-col">
      {/* Header */}
      <header className="flex items-center justify-between gap-3 px-4 pt-20 pb-3 sm:pt-24 sm:px-6">
        <button
          type="button"
          onClick={onLeave}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <CrisisDial className="inline-flex items-center gap-1.5 rounded-full bg-secondary/70 px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" />
      </header>

      <div className="flex items-center justify-center gap-1.5 px-4 pb-3 text-xs text-muted-foreground sm:px-6">
        <Lock className="h-3.5 w-3.5" aria-hidden />
        <span>Nothing you type is saved</span>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 pb-4 sm:px-6">
        <div className="flex flex-col gap-3 pb-2">
          <AnimatePresence initial={false}>
            {messages.map((m) => {
              if (m.kind === "text") {
                return (
                  <MessageBubble key={m.id} role={m.role}>
                    {m.content}
                  </MessageBubble>
                );
              }
              if (m.kind === "resource") {
                const r = findResource(m.resourceId);
                if (!r) return null;
                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex w-full justify-start"
                  >
                    <ResourceCard resource={r} onOfferHandoff={(res) => setHandoffResource(res)} />
                  </motion.div>
                );
              }
              return null;
            })}
          </AnimatePresence>

          <AnimatePresence>
            {isTyping && (
              <div className="flex w-full justify-start">
                <TypingIndicator />
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Composer */}
      <form
        onSubmit={handleSend}
        className="border-t border-border/60 bg-background/80 px-3 py-3 backdrop-blur sm:px-6 sm:py-4"
      >
        <div className="flex items-end gap-2 rounded-3xl border border-border bg-card px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-ring/60">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            rows={1}
            placeholder="Share what's on your mind…"
            aria-label="Message"
            className="max-h-40 min-h-[40px] flex-1 resize-none bg-transparent px-2 py-2 text-[15px] leading-relaxed text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send message"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          This is a prototype. Not a substitute for emergency services — if you're in immediate
          danger, call 911.
        </p>
      </form>

      <HandoffModal
        open={handoffResource !== null}
        resource={handoffResource}
        onConfirm={confirmHandoff}
        onCancel={() => setHandoffResource(null)}
      />
    </div>
  );
}
