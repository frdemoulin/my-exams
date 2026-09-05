import { normalizeRole } from "./roles";

export type SupportedAuthProvider =
  | "google"
  | "email"
  | "apple"
  | "facebook"
  | "microsoft-entra-id";

const ALL_SUPPORTED_PROVIDERS: readonly SupportedAuthProvider[] = [
  "google",
  "email",
  "apple",
  "facebook",
  "microsoft-entra-id",
];

function isBuildPhase(): boolean {
  return (
    process.env.NEXT_PHASE === "phase-production-build" ||
    process.env.NEXT_PHASE === "phase-export" ||
    (Array.isArray(process.argv) &&
      process.argv.some((arg) => arg.includes("next")) &&
      process.argv.includes("build"))
  );
}

export function getEnabledAuthProviders(isProduction?: boolean): Set<SupportedAuthProvider> {
  const effectiveIsProduction =
    isProduction !== undefined
      ? isProduction
      : process.env.NODE_ENV === "production" && !isBuildPhase();

  const envValue = process.env.AUTH_ENABLED_PROVIDERS?.trim();

  if (!envValue) {
    if (effectiveIsProduction) {
      throw new Error(
        "Configuration production invalide : AUTH_ENABLED_PROVIDERS doit être défini de manière explicite (ex: google,email)."
      );
    }
    // Hors production : par défaut google et email si non renseigné
    return new Set<SupportedAuthProvider>(["google", "email"]);
  }

  const tokens = envValue
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);

  const enabled = new Set<SupportedAuthProvider>();

  for (const token of tokens) {
    if (ALL_SUPPORTED_PROVIDERS.includes(token as SupportedAuthProvider)) {
      enabled.add(token as SupportedAuthProvider);
    } else {
      console.warn(`[auth-config] Provider non reconnu dans AUTH_ENABLED_PROVIDERS : "${token}".`);
    }
  }

  if (enabled.size === 0 && effectiveIsProduction) {
    throw new Error(
      "Configuration production invalide : aucun provider valide n'a été activé dans AUTH_ENABLED_PROVIDERS."
    );
  }

  return enabled;
}

export function validateAuthConfig(isProduction?: boolean): void {
  const effectiveIsProduction =
    isProduction !== undefined
      ? isProduction
      : process.env.NODE_ENV === "production" && !isBuildPhase();

  const authSecret = process.env.AUTH_SECRET?.trim();

  if (!authSecret) {
    throw new Error("Variable AUTH_SECRET manquante.");
  }

  if (effectiveIsProduction && authSecret.length < 32) {
    throw new Error("Configuration production invalide : AUTH_SECRET doit contenir au moins 32 caractères.");
  }

  const authUrl = process.env.AUTH_URL?.trim() || process.env.NEXTAUTH_URL?.trim();

  if (effectiveIsProduction) {
    if (!authUrl) {
      throw new Error("Configuration production invalide : AUTH_URL (ou NEXTAUTH_URL) est obligatoire.");
    }
    try {
      const parsed = new URL(authUrl);
      if (parsed.protocol !== "https:") {
        throw new Error(
          `Configuration production invalide : AUTH_URL doit utiliser HTTPS (reçu : ${parsed.protocol}).`
        );
      }
    } catch (err: any) {
      throw new Error(`Configuration production invalide : AUTH_URL est malformée (${err.message}).`);
    }

    const healthUrl = process.env.HEALTH_PUBLIC_URL?.trim();
    if (healthUrl) {
      try {
        const parsedHealth = new URL(healthUrl);
        if (parsedHealth.protocol !== "https:") {
          throw new Error(
            `Configuration production invalide : HEALTH_PUBLIC_URL doit utiliser HTTPS (reçu : ${parsedHealth.protocol}).`
          );
        }
      } catch (err: any) {
        throw new Error(
          `Configuration production invalide : HEALTH_PUBLIC_URL est malformée (${err.message}).`
        );
      }
    }

    const enabled = getEnabledAuthProviders(effectiveIsProduction);

    for (const provider of enabled) {
      switch (provider) {
        case "google":
          if (!process.env.AUTH_GOOGLE_ID?.trim() || !process.env.AUTH_GOOGLE_SECRET?.trim()) {
            throw new Error(
              "Configuration production invalide : provider google activé mais AUTH_GOOGLE_ID ou AUTH_GOOGLE_SECRET manquant."
            );
          }
          break;
        case "email":
          if (!process.env.AUTH_EMAIL_SERVER?.trim() || !process.env.AUTH_EMAIL_FROM?.trim()) {
            throw new Error(
              "Configuration production invalide : provider email activé mais AUTH_EMAIL_SERVER ou AUTH_EMAIL_FROM manquant."
            );
          }
          break;
        case "apple":
          if (!process.env.AUTH_APPLE_ID?.trim() || !process.env.AUTH_APPLE_SECRET?.trim()) {
            throw new Error(
              "Configuration production invalide : provider apple activé mais AUTH_APPLE_ID ou AUTH_APPLE_SECRET manquant."
            );
          }
          break;
        case "facebook":
          if (!process.env.AUTH_FACEBOOK_ID?.trim() || !process.env.AUTH_FACEBOOK_SECRET?.trim()) {
            throw new Error(
              "Configuration production invalide : provider facebook activé mais AUTH_FACEBOOK_ID ou AUTH_FACEBOOK_SECRET manquant."
            );
          }
          break;
        case "microsoft-entra-id":
          if (
            !process.env.AUTH_MICROSOFT_ENTRA_ID_ID?.trim() ||
            !process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET?.trim()
          ) {
            throw new Error(
              "Configuration production invalide : provider microsoft-entra-id activé mais identifiants manquants."
            );
          }
          break;
      }
    }
  }
}

export function getAllowedOrigins(): Set<string> {
  const origins = new Set<string>();

  const addOrigin = (rawUrl?: string | null) => {
    if (!rawUrl) return;
    try {
      const url = new URL(rawUrl);
      origins.add(url.origin.toLowerCase());
    } catch {
      // Ignorer URL invalide
    }
  };

  addOrigin(process.env.AUTH_URL);
  addOrigin(process.env.NEXTAUTH_URL);
  addOrigin(process.env.HEALTH_PUBLIC_URL);

  if (process.env.HEALTH_HOST) {
    const isProd = process.env.NODE_ENV === "production";
    const proto = isProd ? "https" : "http";
    origins.add(`${proto}://${process.env.HEALTH_HOST.trim().toLowerCase()}`);
  }

  if (process.env.APP_HOST) {
    const isProd = process.env.NODE_ENV === "production";
    const proto = isProd ? "https" : "http";
    origins.add(`${proto}://${process.env.APP_HOST.trim().toLowerCase()}`);
  }

  if (process.env.NODE_ENV !== "production") {
    origins.add("http://localhost:3000");
    origins.add("http://127.0.0.1:3000");
    origins.add("http://sante.lvh.me:3000");
    origins.add("http://app.lvh.me:3000");
  }

  return origins;
}

export function isAllowedOrigin(origin?: string | null): boolean {
  if (!origin) return false;
  try {
    const parsed = new URL(origin);
    const normalized = parsed.origin.toLowerCase();
    const allowed = getAllowedOrigins();
    return allowed.has(normalized);
  } catch {
    return false;
  }
}

export function getAllowedHosts(): Set<string> {
  const hosts = new Set<string>();
  const origins = getAllowedOrigins();

  for (const origin of origins) {
    try {
      const url = new URL(origin);
      if (url.host) hosts.add(url.host.toLowerCase());
      if (url.hostname) hosts.add(url.hostname.toLowerCase());
    } catch {
      // Ignorer URL invalide
    }
  }

  if (process.env.HEALTH_HOST) {
    hosts.add(process.env.HEALTH_HOST.trim().toLowerCase());
  }

  if (process.env.APP_HOST) {
    hosts.add(process.env.APP_HOST.trim().toLowerCase());
  }

  if (process.env.NODE_ENV !== "production") {
    hosts.add("localhost:3000");
    hosts.add("localhost");
    hosts.add("127.0.0.1:3000");
    hosts.add("127.0.0.1");
    hosts.add("sante.lvh.me:3000");
    hosts.add("sante.lvh.me");
    hosts.add("app.lvh.me:3000");
    hosts.add("app.lvh.me");
  }

  return hosts;
}

export function isAllowedHost(host?: string | null): boolean {
  if (!host) return false;
  const cleanHost = host.trim().toLowerCase();
  if (!cleanHost) return false;

  const allowed = getAllowedHosts();
  if (allowed.has(cleanHost)) return true;

  const withoutPort = cleanHost.replace(/:\d+$/, "");
  if (allowed.has(withoutPort)) return true;

  return false;
}

export type SensitiveMutationValidationResult = {
  isValid: boolean;
  error?: string;
};

export function validateSensitiveMutationRequest(
  request: Request,
  isProduction?: boolean
): SensitiveMutationValidationResult {
  const effectiveIsProduction =
    isProduction !== undefined
      ? isProduction
      : process.env.NODE_ENV === "production" && !isBuildPhase();

  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  const forwardedHost = request.headers.get("x-forwarded-host");

  // Protection Origin et Host
  if (effectiveIsProduction) {
    if (!origin || !isAllowedOrigin(origin)) {
      return { isValid: false, error: "Origine non autorisée." };
    }
    if (!host || !isAllowedHost(host)) {
      return { isValid: false, error: "Hôte non autorisé." };
    }
  } else {
    if (origin && !isAllowedOrigin(origin)) {
      return { isValid: false, error: "Origine non autorisée." };
    }
    if (host && !isAllowedHost(host)) {
      return { isValid: false, error: "Hôte non autorisé." };
    }
  }

  // Contrôle de x-forwarded-host (fail-closed si présent)
  if (forwardedHost) {
    const parts = forwardedHost
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (parts.length === 0 && effectiveIsProduction) {
      return { isValid: false, error: "En-tête x-forwarded-host vide." };
    }

    for (const part of parts) {
      if (!isAllowedHost(part)) {
        return { isValid: false, error: "En-tête x-forwarded-host non autorisé." };
      }
    }
  }

  return { isValid: true };
}
