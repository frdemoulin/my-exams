"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        className="inline-flex h-10 w-10 items-center justify-center rounded-base border border-default bg-neutral-primary-soft text-body shadow-xs text-sm p-2.5"
      >
        <Sun className="w-5 h-5" />
        <span className="sr-only">Changer le thème</span>
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-base border border-default bg-neutral-primary-soft text-body shadow-xs text-sm p-2.5 transition-colors hover:bg-neutral-secondary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1"
    >
      {isDark ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
      <span className="sr-only">Changer le thème</span>
    </button>
  );
}
