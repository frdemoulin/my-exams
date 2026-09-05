import NextAuth, { type NextAuthConfig } from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import MicrosoftEntraIDProvider from "next-auth/providers/microsoft-entra-id";
import EmailProvider from "next-auth/providers/email";
import type { Provider } from "next-auth/providers";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";

import prisma from "@/lib/db/prisma";
import { sendVerificationRequest } from "@/lib/auth/auth-send-request";
import { isAdminRole, normalizeRole } from "@/lib/auth/roles";
import { createHardenedPrismaAdapter } from "@/lib/auth/adapter-wrapper";
import {
  getEnabledAuthProviders,
  validateAuthConfig,
  isAllowedOrigin,
} from "@/lib/auth/auth-config-validator";
import {
  normalizeHostname,
  getSharedSessionCookieOptions,
} from "@/lib/auth/session-cookie";

const MAGIC_LINK_MAX_AGE_SECONDS = 15 * 60;
const USER_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;
const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

// Validation de la configuration d'authentification au démarrage
validateAuthConfig();

async function getRequestHostname(request?: NextRequest) {
  if (request) return normalizeHostname(request.nextUrl.hostname);

  try {
    const headerList = await headers();
    return normalizeHostname(
      headerList.get("x-forwarded-host") || headerList.get("host")
    );
  } catch {
    return "";
  }
}

function getOrigin(value?: string) {
  if (!value) return null;
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

function getHealthOrigin() {
  const configuredOrigin = getOrigin(process.env.HEALTH_PUBLIC_URL);
  if (configuredOrigin) return configuredOrigin;

  const healthHost = process.env.HEALTH_HOST?.trim();
  const authOrigin = getOrigin(process.env.AUTH_URL ?? process.env.NEXTAUTH_URL);
  if (!healthHost || !authOrigin) return null;

  const url = new URL(authOrigin);
  url.hostname = healthHost;
  return url.origin;
}

const healthOrigin = getHealthOrigin();

// Construction de la liste des providers selon l'allow-list explicite
const enabledProviders = getEnabledAuthProviders();
const providers: Provider[] = [];

if (enabledProviders.has("google") && process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      // allowDangerousEmailAccountLinking FORMELLEMENT SUPPRIMÉ
    })
  );
}

if (enabledProviders.has("apple") && process.env.AUTH_APPLE_ID && process.env.AUTH_APPLE_SECRET) {
  providers.push(
    AppleProvider({
      clientId: process.env.AUTH_APPLE_ID,
      clientSecret: process.env.AUTH_APPLE_SECRET,
      // allowDangerousEmailAccountLinking FORMELLEMENT SUPPRIMÉ
    })
  );
}

if (enabledProviders.has("facebook") && process.env.AUTH_FACEBOOK_ID && process.env.AUTH_FACEBOOK_SECRET) {
  providers.push(
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
      // allowDangerousEmailAccountLinking FORMELLEMENT SUPPRIMÉ
    })
  );
}

if (
  enabledProviders.has("microsoft-entra-id") &&
  process.env.AUTH_MICROSOFT_ENTRA_ID_ID &&
  process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET
) {
  const issuer =
    process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER ||
    (process.env.AUTH_MICROSOFT_ENTRA_ID_TENANT_ID
      ? `https://login.microsoftonline.com/${process.env.AUTH_MICROSOFT_ENTRA_ID_TENANT_ID}/v2.0`
      : undefined);

  providers.push(
    MicrosoftEntraIDProvider({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      issuer,
      // allowDangerousEmailAccountLinking FORMELLEMENT SUPPRIMÉ
    })
  );
}

if (enabledProviders.has("email") && process.env.AUTH_EMAIL_SERVER && process.env.AUTH_EMAIL_FROM) {
  providers.push(
    EmailProvider({
      server: process.env.AUTH_EMAIL_SERVER,
      from: process.env.AUTH_EMAIL_FROM,
      maxAge: MAGIC_LINK_MAX_AGE_SECONDS,
      normalizeIdentifier(identifier) {
        return identifier.trim().toLowerCase();
      },
      sendVerificationRequest,
    })
  );
}

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

const authConfig = {
  adapter: createHardenedPrismaAdapter(prisma),
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return new URL(url, baseUrl).toString();

      try {
        const target = new URL(url);
        // Protection contre redirection externe hostile
        if (target.origin === baseUrl || target.origin === healthOrigin || isAllowedOrigin(target.origin)) {
          return target.toString();
        }
      } catch {
        // Auth.js retombera sur baseUrl
      }

      return baseUrl;
    },

    // En stratégie database, Auth.js transmet { session, user }
    async session({ session, user }: any) {
      if (!user) {
        return null as any;
      }

      const actorRole = normalizeRole(user.roles ?? user.role) ?? "USER";
      const isActorAdmin = isAdminRole(actorRole);

      const sessionCreatedAt = session.createdAt ? new Date(session.createdAt).getTime() : Date.now();
      const adminExpiresAt = isActorAdmin
        ? sessionCreatedAt + ADMIN_SESSION_MAX_AGE_SECONDS * 1000
        : null;

      // Gestion de l'impersonation côté serveur
      let effectiveUser = user;
      let impersonationPayload: any = null;

      const impersonatedUserId = session.impersonatedUserId;
      if (impersonatedUserId) {
        let shouldCleanImpersonation = false;

        if (!isActorAdmin) {
          shouldCleanImpersonation = true;
        } else {
          const startedAtMs = session.impersonationStartedAt
            ? new Date(session.impersonationStartedAt).getTime()
            : null;

          const isExpired = startedAtMs && Date.now() - startedAtMs > 60 * 60 * 1000;

          if (isExpired) {
            shouldCleanImpersonation = true;
          } else {
            const viewer = await prisma.user.findUnique({
              where: { id: impersonatedUserId },
              select: {
                id: true,
                name: true,
                email: true,
                image: true,
                roles: true,
              },
            });

            if (viewer) {
              effectiveUser = viewer;
              impersonationPayload = {
                isActive: true,
                actorId: user.id,
                actorRole: actorRole,
                actorName: user.name ?? null,
                viewerId: viewer.id,
                viewerRole: normalizeRole(viewer.roles) ?? "USER",
                viewerName: viewer.name ?? null,
                viewerEmail: viewer.email ?? null,
                startedAt: startedAtMs,
              };
            } else {
              shouldCleanImpersonation = true;
            }
          }
        }

        if (shouldCleanImpersonation) {
          const sessionToken = session.sessionToken;
          try {
            if (sessionToken) {
              await prisma.session.update({
                where: { sessionToken },
                data: {
                  impersonatedUserId: null,
                  impersonationStartedAt: null,
                  impersonationReason: null,
                },
              });
            } else if (session.id) {
              await prisma.session.update({
                where: { id: session.id },
                data: {
                  impersonatedUserId: null,
                  impersonationStartedAt: null,
                  impersonationReason: null,
                },
              });
            }
          } catch {
            // Non bloquant
          }
        }
      }

      const effectiveRole = normalizeRole(effectiveUser.roles ?? effectiveUser.role) ?? "USER";
      const expiresIso = session.expires instanceof Date
        ? session.expires.toISOString()
        : new Date(session.expires).toISOString();

      // DTO public strict en allow-list : AUCUNE donnée interne de Session (sessionToken, etc.)
      const publicSessionDTO = {
        expires: expiresIso,
        user: {
          id: effectiveUser.id,
          name: effectiveUser.name ?? null,
          email: effectiveUser.email ?? null,
          image: effectiveUser.image ?? null,
          role: effectiveRole,
        },
        actor: {
          id: user.id,
          role: actorRole,
          name: user.name ?? null,
          email: user.email ?? null,
          image: user.image ?? null,
          adminExpiresAt,
        },
        ...(impersonationPayload ? { impersonation: impersonationPayload } : {}),
      };

      return publicSessionDTO as any;
    },
  },
  events: {
    async signIn({ user, account }: any) {
      if (!user?.id) return;
      try {
        await prisma.authLog.create({
          data: {
            userId: user.id,
            action: "SIGN_IN",
            provider: account?.provider ?? null,
          },
        });
      } catch (error) {
        console.error("Auth log sign-in error:", error);
      }
    },
    async signOut(message: any) {
      const session = "session" in message ? message.session : null;
      const userId = session?.userId as string | undefined;
      if (!userId) return;
      try {
        await prisma.authLog.create({
          data: {
            userId,
            action: "SIGN_OUT",
          },
        });
      } catch (error) {
        console.error("Auth log sign-out error:", error);
      }
    },
  },
  pages: {
    signIn: "/log-in",
  },
  providers,
  session: {
    strategy: "database" as const,
    maxAge: USER_SESSION_MAX_AGE_SECONDS,
    updateAge: USER_SESSION_MAX_AGE_SECONDS,
  },
  trustHost: true,
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(async (request) => ({
  ...authConfig,
  cookies: getSharedSessionCookieOptions(await getRequestHostname(request)),
}));
