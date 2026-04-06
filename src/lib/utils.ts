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

export function normalizeExamPaperLabel(label?: string | null): string | null {
  if (!label) return label ?? null;
  return label.replace(/\b(?:JOUR|Jour|jour)\b/g, "jour");
}

function toSearchableText(value: unknown): string {
  if (value == null) return "";
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "bigint"
  ) {
    return String(value);
  }
  if (value instanceof Date) {
    return value.toISOString();
  }
  if (Array.isArray(value)) {
    return value.map((item) => toSearchableText(item)).join(" ");
  }
  if (typeof value === "object") {
    return Object.values(value as Record<string, unknown>)
      .map((item) => toSearchableText(item))
      .join(" ");
  }
  return "";
}

export function normalizeSearchText(value: unknown): string {
  return toSearchableText(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

export function includesNormalizedSearch(value: unknown, search: unknown): boolean {
  const normalizedSearch = normalizeSearchText(search);
  if (!normalizedSearch) return true;
  return normalizeSearchText(value).includes(normalizedSearch);
}
