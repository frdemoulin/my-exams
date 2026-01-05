const DEFAULT_BASE_URL = "http://localhost:3000";

export function getSeoBaseUrl(): string | null {
  const baseUrl =
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.AUTH_URL;

  if (!baseUrl) return null;

  try {
    return new URL(baseUrl).origin.replace(/\/$/, "");
  } catch {
    return null;
  }
}

export function getSeoBaseUrlWithDefault(): string {
  return getSeoBaseUrl() ?? DEFAULT_BASE_URL;
}

export function buildCanonicalUrl(path: string): string | null {
  const baseUrl = getSeoBaseUrl();
  if (!baseUrl) return null;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}
