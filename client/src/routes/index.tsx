import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Welcome } from "@/components/safe-harbor/Welcome";
import { ChatWindow } from "@/components/safe-harbor/ChatWindow";
import { QuickExitButton } from "@/components/safe-harbor/QuickExitButton";
import { StealthShell } from "@/components/safe-harbor/StealthShell";
import { getStealthEnabled, setStealthEnabled } from "@/lib/safe-storage";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [started, setStarted] = useState(false);
  const [stealth, setStealth] = useState(false);

  useEffect(() => {
    if (getStealthEnabled()) {
      setStealth(true);
    }
  }, []);

  const enterStealth = () => {
    setStealthEnabled(true);
    setStealth(true);
  };

  const returnFromStealth = () => {
    setStealthEnabled(false);
    setStealth(false);
  };

  return (
    <div className="relative min-h-[100dvh] bg-background">
      <QuickExitButton />

      <AnimatePresence mode="wait">
        {stealth ? (
          <motion.div
            key="stealth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <StealthShell onReturn={returnFromStealth} />
          </motion.div>
        ) : !started ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Welcome onStart={() => setStarted(true)} onStealth={enterStealth} />
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <ChatWindow onLeave={() => setStarted(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
