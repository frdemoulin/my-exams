"use client";

import * as React from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

const STORAGE_KEY = "app-theme";
const COOKIE_KEY = "app-theme";

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

function disableTransitionsTemporarily() {
  const style = document.createElement("style");
  style.appendChild(
    document.createTextNode(
      "*,*::before,*::after{transition:none!important}"
    )
  );
  document.head.appendChild(style);

  return () => {
    void document.body.offsetHeight;
    style.remove();
  };
}

function parseTheme(value: string | null): Theme | null {
  return value === "light" || value === "dark" ? value : null;
}

function getCookieTheme(): Theme | null {
  if (typeof document === "undefined") return null;

  const cookieValue = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${COOKIE_KEY}=`))
    ?.split("=")[1] ?? null;

  return parseTheme(cookieValue);
}

function getStoredTheme(defaultTheme: Theme): Theme {
  if (typeof window === "undefined") return defaultTheme;

  const localStorageTheme = parseTheme(window.localStorage.getItem(STORAGE_KEY));
  if (localStorageTheme) return localStorageTheme;

  return getCookieTheme() ?? defaultTheme;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(() => getStoredTheme(defaultTheme));

  React.useEffect(() => {
    setThemeState(getStoredTheme(defaultTheme));
  }, [defaultTheme]);

  React.useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
    document.cookie = `${COOKIE_KEY}=${theme}; path=/; max-age=31536000; samesite=lax`;
  }, [theme]);

  const setTheme = (nextTheme: Theme) => {
    const cleanupTransitions = disableTransitionsTemporarily();

    setThemeState(nextTheme);
    window.setTimeout(cleanupTransitions, 0);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
