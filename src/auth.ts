import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import Resend from "next-auth/providers/resend";
import type { Provider } from "next-auth/providers";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/db";
import { sendVerificationRequest } from "@/lib/auth-send-request";

// définition des providers
const providers: Provider[] = [
    // Credentials({}),
    GitHubProvider({
        clientId: process.env.AUTH_GITHUB_ID!,
        clientSecret: process.env.AUTH_GITHUB_SECRET!,
        allowDangerousEmailAccountLinking: true,
    }),
    GoogleProvider({
        clientId: process.env.AUTH_GOOGLE_ID!,
        clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        allowDangerousEmailAccountLinking: true,
    }),
    FacebookProvider({
        clientId: process.env.AUTH_FACEBOOK_ID!,
        clientSecret: process.env.AUTH_FACEBOOK_SECRET!,
        allowDangerousEmailAccountLinking: true,
    }),
    Resend({
        from: "no-reply@musicband.ovh",
        // sendVerificationRequest({
        //     identifier: email,
        //     url,
        //     provider: { server, from },
        // }) {
        //     sendVerificationRequest
        // },
        sendVerificationRequest
    })
];

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
    adapter: PrismaAdapter(prisma),
    // à chaque ouverture de session, on sette le rôle de l'utilisateur sur sa session
    callbacks: {
        session({ session, user }) {
            // session.user.role = user.role;
            return session;
        }
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
