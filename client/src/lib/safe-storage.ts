const STORAGE_PREFIX = "safe-harbor-";
const STEALTH_KEY = `${STORAGE_PREFIX}stealth`;

export function getStealthEnabled(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STEALTH_KEY) === "true";
  } catch {
    return false;
  }
}

export function setStealthEnabled(value: boolean): void {
  if (typeof window === "undefined") return;
  try {
    if (value) {
      window.localStorage.setItem(STEALTH_KEY, "true");
    } else {
      window.localStorage.removeItem(STEALTH_KEY);
    }
  } catch {
    // ignore
  }
}

export function clearSafeHarborStorage(): void {
  if (typeof window === "undefined") return;
  try {
    const keys: string[] = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (key?.startsWith(STORAGE_PREFIX)) keys.push(key);
    }
    keys.forEach((key) => window.localStorage.removeItem(key));
  } catch {
    // ignore
  }
}
