import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("fr-FR")
}

export function formatDateTime(date: Date) {
  // retourne la date au format dd/mm/yyyy hh:mm:ss
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function getRecentYears(count: number = 4): string[] {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: count }, (_, i) => String(currentYear - i));
};

export function getInternalOrigin(): string | null {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return null;

  try {
    return new URL(siteUrl).origin;
  } catch {
    return null;
  }
}

export function isExternalUrl(url?: string | null, internalOrigin?: string | null): boolean {
  if (!url) return false;
  if (url.startsWith("/")) return false;
  if (!url.startsWith("http://") && !url.startsWith("https://")) return false;

  const origin = internalOrigin ?? getInternalOrigin();
  if (!origin) return true;

  try {
    return new URL(url).origin !== origin;
  } catch {
    return true;
  }
}
