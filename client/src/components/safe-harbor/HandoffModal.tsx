import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Resource } from "@/lib/mockData";

type Props = {
  open: boolean;
  resource: Resource | null;
  onConfirm: () => void;
  onCancel: () => void;
};

export function HandoffModal({ open, resource, onConfirm, onCancel }: Props) {
  return (
    <AnimatePresence>
      {open && resource && (
        <motion.div
          className="fixed inset-0 z-40 flex items-end justify-center bg-foreground/20 p-4 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onCancel}
          role="dialog"
          aria-modal="true"
          aria-labelledby="handoff-title"
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-3xl bg-card p-6 shadow-xl shadow-black/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onCancel}
              aria-label="Close"
              className="absolute top-3 right-3 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>

            <h2 id="handoff-title" className="font-serif text-xl text-foreground">
              Warm handoff
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Would you like me to prepare a short message you could send to{" "}
              <span className="font-medium text-foreground">{resource.name}</span>? You'll see it
              first — nothing sends automatically.
            </p>

            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onCancel}
                className="rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Not right now
              </button>
              <button
                type="button"
                onClick={onConfirm}
                className="rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Yes, prepare it
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
