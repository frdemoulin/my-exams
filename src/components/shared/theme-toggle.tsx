"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type ThemeToggleProps = React.ComponentPropsWithoutRef<"button">;

export const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, onClick, ...props }, ref) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        {...props}
        type="button"
        disabled
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-base border border-default bg-neutral-primary-soft text-body shadow-xs text-sm p-2.5",
          className
        )}
        ref={ref}
      >
        <Sun className="w-5 h-5" />
        <span className="sr-only">Changer le thème</span>
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    toggleTheme();
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={handleClick}
      {...props}
      type="button"
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-base border border-default bg-neutral-primary-soft text-body shadow-xs text-sm p-2.5 transition-colors hover:bg-neutral-secondary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1",
        className
      )}
      ref={ref}
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
);

ThemeToggle.displayName = "ThemeToggle";
