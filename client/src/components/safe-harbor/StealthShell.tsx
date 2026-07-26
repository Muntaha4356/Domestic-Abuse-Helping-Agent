import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Sun, CloudRain, Wind, Settings, MapPin } from "lucide-react";

type Props = {
  onReturn: () => void;
};

const forecast = [
  { day: "Tue", icon: Sun, high: 70, low: 54 },
  { day: "Wed", icon: Cloud, high: 68, low: 52 },
  { day: "Thu", icon: CloudRain, high: 64, low: 51 },
  { day: "Fri", icon: Sun, high: 72, low: 55 },
  { day: "Sat", icon: Wind, high: 69, low: 53 },
];

export function StealthShell({ onReturn }: Props) {
  const [showHint, setShowHint] = useState(false);
  const pressTimer = useRef<number | null>(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Santa Cruz Weather";
    const showTimer = window.setTimeout(() => setShowHint(true), 800);
    const hideTimer = window.setTimeout(() => setShowHint(false), 6000);
    return () => {
      document.title = previousTitle;
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
      if (pressTimer.current) window.clearTimeout(pressTimer.current);
    };
  }, []);

  const startPress = () => {
    if (pressTimer.current) window.clearTimeout(pressTimer.current);
    pressTimer.current = window.setTimeout(() => {
      onReturn();
    }, 1600);
  };

  const cancelPress = () => {
    if (pressTimer.current) {
      window.clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  return (
    <div
      className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-gradient-to-br from-sky-soft via-cream to-background"
      onClick={() => setShowHint(false)}
    >
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 py-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden />
            <span>Santa Cruz, CA</span>
          </div>
          <button
            type="button"
            aria-label="Settings"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-foreground/5"
          >
            <Settings className="h-5 w-5" aria-hidden />
          </button>
        </header>

        <div className="mt-10 flex flex-col items-center">
          <button
            type="button"
            onMouseDown={startPress}
            onMouseUp={cancelPress}
            onMouseLeave={cancelPress}
            onTouchStart={startPress}
            onTouchEnd={cancelPress}
            onContextMenu={(e) => e.preventDefault()}
            aria-label="Current weather. Press and hold to return."
            className="relative rounded-full p-4 transition-transform active:scale-95"
          >
            <Sun className="h-24 w-24 text-weather-sun" aria-hidden />
          </button>

          <p className="mt-6 text-6xl font-light tracking-tight text-foreground">68°</p>
          <p className="text-lg text-muted-foreground">Partly Cloudy</p>
          <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
            <span>H: 72°</span>
            <span>L: 53°</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-5 gap-2">
          {forecast.map(({ day, icon: Icon, high, low }) => (
            <div
              key={day}
              className="flex flex-col items-center gap-1 rounded-2xl border border-border/40 bg-card/70 p-3 backdrop-blur"
            >
              <span className="text-xs font-medium text-muted-foreground">{day}</span>
              <Icon className="h-5 w-5 text-foreground" aria-hidden />
              <span className="text-xs font-medium text-foreground">{high}°</span>
              <span className="text-xs text-muted-foreground">{low}°</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex justify-center">
          <AnimatePresence>
            {showHint && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-[16rem] text-center text-xs text-muted-foreground/70"
              >
                Press and hold the weather icon for 2 seconds to return.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
