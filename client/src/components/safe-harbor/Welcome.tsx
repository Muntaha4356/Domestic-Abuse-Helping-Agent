import { motion } from "framer-motion";
import { Lock, Heart, MessageCircle, Cloud } from "lucide-react";

type Props = { onStart: () => void; onStealth: () => void };

export function Welcome({ onStart, onStealth }: Props) {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden">
      {/* Soft ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 10%, oklch(0.92 0.04 200 / 0.55), transparent 70%), radial-gradient(50% 40% at 90% 20%, oklch(0.9 0.04 235 / 0.5), transparent 70%), radial-gradient(60% 50% at 50% 100%, oklch(0.94 0.03 85 / 0.7), transparent 70%)",
        }}
      />

      <main className="mx-auto flex min-h-[100dvh] max-w-xl flex-col items-center justify-center px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
          Santa Cruz, California
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-6 font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl"
        >
          A calm place to be heard.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground text-balance sm:text-base"
        >
          Safe Harbor is a private, trauma-informed space to talk things through at your own pace.
          Share as much or as little as you'd like. There's no right way to begin.
        </motion.p>

        <motion.button
          type="button"
          onClick={onStart}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Start chat
        </motion.button>

        <motion.button
          type="button"
          onClick={onStealth}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-5 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Cloud className="h-4 w-4" aria-hidden />
          Open disguised as weather
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary/70 px-3.5 py-1.5 text-xs font-medium text-secondary-foreground"
        >
          <Lock className="h-3.5 w-3.5" aria-hidden />
          Nothing you type is saved
        </motion.div>

        {/* Reassurance row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {[
            { icon: Heart, label: "Trauma-informed" },
            { icon: Lock, label: "Private by default" },
            { icon: MessageCircle, label: "At your pace" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 rounded-2xl border border-border/50 bg-card/50 px-3 py-2.5 text-xs text-muted-foreground backdrop-blur"
            >
              <Icon className="h-3.5 w-3.5 text-primary/70" aria-hidden />
              {label}
            </div>
          ))}
        </motion.div>

        <p className="mt-10 max-w-sm text-[11px] leading-relaxed text-muted-foreground/80">
          If you're in immediate danger, please call 911. Safe Harbor is a supportive space, not a
          crisis line.
        </p>
      </main>
    </div>
  );
}
