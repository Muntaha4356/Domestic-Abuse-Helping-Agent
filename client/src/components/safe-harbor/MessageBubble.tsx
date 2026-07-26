import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  role: "user" | "assistant";
  children: ReactNode;
};

export function MessageBubble({ role, children }: Props) {
  const isUser = role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={
          isUser
            ? "max-w-[80%] rounded-3xl rounded-br-lg bg-primary px-4 py-3 text-sm leading-relaxed text-primary-foreground shadow-sm sm:text-[15px]"
            : "max-w-[85%] rounded-3xl rounded-bl-lg bg-secondary px-4 py-3 text-sm leading-relaxed text-secondary-foreground shadow-sm sm:text-[15px]"
        }
      >
        {children}
      </div>
    </motion.div>
  );
}
