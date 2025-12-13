import fs from "fs/promises";
import path from "path";
import { execSync } from "child_process";
import type { FullConfig, BrowserContextOptions } from "@playwright/test";
import { encode } from "next-auth/jwt";
import prisma from "../../src/lib/db/prisma";
import dotenv from "dotenv";

// Charge les variables locales avant tout
dotenv.config({ path: ".env.local", override: true });
dotenv.config();

export default async function globalSetup(_config: FullConfig) {
  if (process.env.E2E_RESET_DB === "true") {
    execSync("npm run db:reset", { stdio: "inherit" });
  }

  const authStatePath = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";
  const email = process.env.E2E_TEST_EMAIL ?? "admin-e2e@example.com";
  const name = process.env.E2E_TEST_NAME ?? "E2E Admin";
  const baseURL = process.env.E2E_BASE_URL ?? "http://localhost:3000";
  const authSecret = process.env.AUTH_SECRET?.toString().trim();

  if (!authSecret) {
    throw new Error("AUTH_SECRET manquant : impossible de générer une session e2e.");
  }

  process.env.NEXTAUTH_URL = baseURL;

  await fs.mkdir(path.dirname(authStatePath), { recursive: true });

  let user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        name,
        roles: "ADMIN",
      },
    });
  }

  const token = await encode({
    token: {
      email: user.email || undefined,
      name: user.name || undefined,
      sub: user.id,
    },
    secret: authSecret,
    salt: "authjs.session-token",
    maxAge: 60 * 60 * 24,
  });

  const url = new URL(baseURL);
  const cookieDomain = url.hostname;

  const cookieBase = {
    value: token,
    domain: cookieDomain,
    path: "/",
    httpOnly: true,
    secure: url.protocol === "https:",
    sameSite: "Lax" as const,
    expires: Math.floor(Date.now() / 1000 + 60 * 60 * 24),
  };

  const cookies = [
    { name: "next-auth.session-token", ...cookieBase },
    { name: "authjs.session-token", ...cookieBase },
  ];
  if (cookieBase.secure) {
    cookies.push(
      { name: "__Secure-next-auth.session-token", ...cookieBase },
      { name: "__Secure-authjs.session-token", ...cookieBase },
    );
  }

  const storageState = {
    cookies,
    origins: [],
  };

  await fs.writeFile(authStatePath, JSON.stringify(storageState, null, 2), "utf8");
}
