import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, AlertTriangle } from "lucide-react";

type Props = {
  className?: string;
};

const contacts = [
  {
    name: "Emergency",
    label: "911",
    href: "tel:911",
    note: "Use only if you are in immediate danger.",
  },
  {
    name: "Monarch Services",
    label: "(888) 900-4232",
    href: "tel:+18889004232",
    note: "24/7 confidential support — Santa Cruz County.",
  },
  {
    name: "Crisis Text Line",
    label: "Text HOME to 741741",
    href: "sms:741741?body=HOME",
    note: "Free, 24/7 text support.",
  },
];

export function CrisisDial({ className }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-label="Get help now"
      >
        <Phone className="h-4 w-4" aria-hidden />
        <span>Get help</span>
      </button>

      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-overlay p-4 backdrop-blur-sm sm:items-center"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl border border-border bg-card p-5 shadow-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-serif text-lg font-medium text-foreground">Get help now</h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <div className="mb-4 flex items-start gap-2.5 rounded-2xl bg-destructive/10 p-3 text-sm text-destructive">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>
                  If you are in immediate danger, call 911. Safe Harbor is not a crisis line.
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                {contacts.map((c) => (
                  <a
                    key={c.name}
                    href={c.href}
                    className="flex items-center justify-between rounded-2xl border border-border bg-background p-4 transition-colors hover:bg-muted"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-foreground">{c.name}</p>
                      <p className="text-sm font-medium text-primary">{c.label}</p>
                      <p className="text-xs text-muted-foreground">{c.note}</p>
                    </div>
                    <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
