import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { clearSafeHarborStorage } from "@/lib/safe-storage";

/**
 * Always-visible safety exit. Instantly navigates away from the app.
 * Uses window.location.replace so the current page isn't left in history.
 * Clears any local Safe Harbor state before leaving.
 */
export function QuickExitButton() {
  const handleExit = () => {
    clearSafeHarborStorage();
    try {
      // Best-effort: clear last visible state before leaving.
      window.history.replaceState(null, "", "/");
    } catch {
      // ignore
    }
    window.location.replace("https://www.google.com/search?q=weather");
  };

  return (
    <motion.button
      type="button"
      onClick={handleExit}
      aria-label="Quick exit — leave this site immediately"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="fixed top-4 right-4 z-[60] inline-flex items-center gap-2 rounded-full bg-exit px-4 py-2.5 text-sm font-medium text-exit-foreground shadow-lg shadow-black/10 ring-1 ring-black/5 backdrop-blur transition-colors hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-exit/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:top-6 sm:right-6"
    >
      <LogOut className="h-4 w-4" aria-hidden />
      <span>Quick exit</span>
    </motion.button>
  );
}
