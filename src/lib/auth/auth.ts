import NextAuth, { type NextAuthConfig } from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import MicrosoftEntraIDProvider from "next-auth/providers/microsoft-entra-id";
import EmailProvider from "next-auth/providers/email";
import type { Provider } from "next-auth/providers";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/db/prisma";
import { sendVerificationRequest } from "@/lib/auth/auth-send-request";
import { isAdminRole, normalizeRole } from "@/lib/auth/roles";

const MAGIC_LINK_MAX_AGE_SECONDS = 15 * 60;
const USER_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;
const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;
const sharedCookieDomain = process.env.AUTH_COOKIE_DOMAIN?.trim() || undefined;

function normalizeHostname(value?: string | null) {
    return value?.split(",")[0]?.trim().toLowerCase().replace(/:\d+$/, "") ?? "";
}

async function getRequestHostname(request?: NextRequest) {
    if (request) return normalizeHostname(request.nextUrl.hostname);

    try {
        const headerList = await headers();
        return normalizeHostname(
            headerList.get("x-forwarded-host") || headerList.get("host"),
        );
    } catch {
        return "";
    }
}

function getSharedSessionCookieOptions(hostname: string) {
    if (!sharedCookieDomain) return undefined;

    const parentDomain = sharedCookieDomain.replace(/^\./, "").toLowerCase();
    const belongsToParentDomain =
        hostname === parentDomain || hostname.endsWith(`.${parentDomain}`);

    return belongsToParentDomain
        ? { sessionToken: { options: { domain: sharedCookieDomain } } }
        : undefined;
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

async function getStoredRole(userId?: string | null) {
    if (!userId) return null;

    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { roles: true },
    });

    return user?.roles ?? null;
}

// définition des providers
const providers: Provider[] = [];

if (process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET) {
    providers.push(
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
    );
}

if (process.env.AUTH_APPLE_ID && process.env.AUTH_APPLE_SECRET) {
    providers.push(
        AppleProvider({
            clientId: process.env.AUTH_APPLE_ID,
            clientSecret: process.env.AUTH_APPLE_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
    );
}

if (process.env.AUTH_FACEBOOK_ID && process.env.AUTH_FACEBOOK_SECRET) {
    providers.push(
        FacebookProvider({
            clientId: process.env.AUTH_FACEBOOK_ID,
            clientSecret: process.env.AUTH_FACEBOOK_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
    );
}

if (process.env.AUTH_MICROSOFT_ENTRA_ID_ID && process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET) {
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
            allowDangerousEmailAccountLinking: true,
        }),
    );
}

if (process.env.AUTH_EMAIL_SERVER && process.env.AUTH_EMAIL_FROM) {
    providers.push(
        EmailProvider({
            server: process.env.AUTH_EMAIL_SERVER,
            from: process.env.AUTH_EMAIL_FROM,
            maxAge: MAGIC_LINK_MAX_AGE_SECONDS,
            normalizeIdentifier(identifier) {
                return identifier.trim().toLowerCase();
            },
            sendVerificationRequest,
        }),
    );
}

// find a way to get the name of the provider from the provider object
export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
});

// 
const authConfig = {
    adapter: (() => {
        const baseAdapter = PrismaAdapter(prisma) as any;
        const createVerificationToken = baseAdapter.createVerificationToken?.bind(baseAdapter);

        return {
            ...baseAdapter,
            // Invalide les anciens liens quand un nouveau est demandé pour le même email.
            async createVerificationToken(token: { identifier: string }) {
                await prisma.verificationToken.deleteMany({
                    where: { identifier: token.identifier },
                });

                if (!createVerificationToken) return token as any;
                return createVerificationToken(token as any);
            },
        };
    })(),
    callbacks: {
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return new URL(url, baseUrl).toString();

            try {
                const target = new URL(url);
                if (target.origin === baseUrl || target.origin === healthOrigin) {
                    return target.toString();
                }
            } catch {
                // Auth.js retombera sur l'origine principale.
            }

            return baseUrl;
        },
        async session({ session, token }) {
            const effectiveRole =
                normalizeRole(token.actorRole ?? token.role) ??
                normalizeRole(session.user?.role);

            if (session.user) {
                session.user.id = token.sub ?? session.user.id;
                session.user.role = effectiveRole ?? "USER";
            }

            const actorId = token.actorId ?? token.sub;
            const actorRole = normalizeRole(token.actorRole ?? token.role);
            const adminExpiresAt =
                typeof token.adminExpiresAt === "number" ? token.adminExpiresAt : null;

            if (actorId && actorRole) {
                session.actor = {
                    id: actorId,
                    role: actorRole,
                    name: token.actorName ?? session.user?.name ?? null,
                    email: token.actorEmail ?? session.user?.email ?? null,
                    image: token.actorImage ?? session.user?.image ?? null,
                    adminExpiresAt,
                };
            }

            if (
                token.impersonatedUserId &&
                actorId &&
                token.impersonatedUserId !== actorId
            ) {
                const viewerRole = normalizeRole(token.impersonatedUserRole) ?? "USER";
                session.impersonation = {
                    isActive: true,
                    actorId,
                    actorRole: actorRole ?? "USER",
                    actorName: token.actorName ?? null,
                    viewerId: token.impersonatedUserId,
                    viewerRole,
                    viewerName: token.impersonatedUserName ?? session.user?.name ?? null,
                    viewerEmail: token.impersonatedUserEmail ?? session.user?.email ?? null,
                    startedAt:
                        typeof token.impersonationStartedAt === "number"
                            ? token.impersonationStartedAt
                            : null,
                };
            }

            if (isAdminRole(actorRole)) {
                if (adminExpiresAt && Date.now() > adminExpiresAt) {
                    session.expires = new Date(0) as any;
                }
            }

            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                const normalizedUserRole =
                    normalizeRole((user as any).roles ?? token.role) ?? token.role;

                token.role = normalizedUserRole;
                token.actorId = user.id ?? token.sub;
                token.actorRole = normalizedUserRole;
                token.actorName = user.name ?? token.name ?? null;
                token.actorEmail = user.email ?? token.email ?? null;
                token.actorImage = user.image ?? token.picture ?? null;
                delete token.impersonatedUserId;
                delete token.impersonatedUserRole;
                delete token.impersonatedUserName;
                delete token.impersonatedUserEmail;
                delete token.impersonatedUserImage;
                delete token.impersonationStartedAt;
            }

            const actorId =
                typeof token.actorId === "string" ? token.actorId : token.sub ?? null;
            const actorRole = normalizeRole(token.actorRole);
            const sessionRole = normalizeRole(token.role);

            if (!token.actorId && actorId) {
                token.actorId = actorId;
            }

            if (!token.role && actorRole) {
                token.role = actorRole;
            }

            if (!token.actorRole && sessionRole) {
                token.actorRole = sessionRole;
            }

            if (actorId && (!normalizeRole(token.actorRole) || !normalizeRole(token.role))) {
                const storedActorRole = await getStoredRole(actorId);

                if (storedActorRole) {
                    token.role = storedActorRole;
                    token.actorRole = storedActorRole;
                }
            }

            const impersonatedUserId =
                typeof token.impersonatedUserId === "string"
                    ? token.impersonatedUserId
                    : null;

            if (impersonatedUserId && !normalizeRole(token.impersonatedUserRole)) {
                const storedViewerRole = await getStoredRole(impersonatedUserId);

                if (storedViewerRole) {
                    token.impersonatedUserRole = storedViewerRole;
                }
            }

            if (token.actorId && !token.actorName) {
                token.actorName = token.name ?? null;
                token.actorEmail = token.email ?? null;
                token.actorImage = token.picture ?? null;
            }

            if (isAdminRole(token.actorRole ?? token.role) && !token.adminExpiresAt) {
                token.adminExpiresAt =
                    Date.now() + ADMIN_SESSION_MAX_AGE_SECONDS * 1000;
            }

            return token;
        },
    },
    events: {
        async signIn({ user, account }) {
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
        async signOut(message) {
            const token = "token" in message ? message.token : null;
            const session = "session" in message ? message.session : null;
            const userId =
                (token?.sub as string | undefined) ??
                (session?.userId as string | undefined);
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
        strategy: "jwt",
        maxAge: USER_SESSION_MAX_AGE_SECONDS,
        updateAge: 60 * 60,
    },
    jwt: {
        maxAge: USER_SESSION_MAX_AGE_SECONDS,
    },
    trustHost: true,
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(async (request) => ({
    ...authConfig,
    cookies: getSharedSessionCookieOptions(await getRequestHostname(request)),
}));
