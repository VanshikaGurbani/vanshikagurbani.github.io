"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ boxed = false }: { boxed?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={boxed ? "w-11 h-11" : "w-9 h-9"} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={
        boxed
          ? "relative flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card/40 transition-colors duration-200 hover:border-accent/50"
          : "relative flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 hover:bg-foreground/5"
      }
      aria-label="Toggle theme"
    >
      <Sun
        className={`w-[18px] h-[18px] transition-all duration-300 absolute
          ${isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}
      />
      <Moon
        className={`w-[18px] h-[18px] transition-all duration-300 absolute
          ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}
      />
    </button>
  );
}
