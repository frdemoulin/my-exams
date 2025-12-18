import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import MicrosoftEntraIDProvider from "next-auth/providers/microsoft-entra-id";
import EmailProvider from "next-auth/providers/email";
import type { Provider } from "next-auth/providers";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/db/prisma";
import { sendVerificationRequest } from "@/lib/auth/auth-send-request";

const MAGIC_LINK_MAX_AGE_SECONDS = 15 * 60;

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
export const { handlers, signIn, signOut, auth } = NextAuth({
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
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.sub ?? session.user.id;
                // @ts-expect-error role is added to the session user
                session.user.role = token.role ?? session.user.role;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).roles ?? token.role;
            }
            return token;
        },
    },
    pages: {
        signIn: "/log-in",
    },
    providers,
    session: {
        strategy: "jwt",
    },
    trustHost: true,
});
