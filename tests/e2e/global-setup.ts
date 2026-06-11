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

const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

export default async function globalSetup(_config: FullConfig) {
  if (process.env.E2E_RESET_DB === "true") {
    execSync("npm run db:reset", { stdio: "inherit" });
  }

  const authStatePath = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";
  const healthAuthStatePath =
    process.env.E2E_HEALTH_AUTH_STATE ?? "playwright/.auth/health-admin.json";
  const email = process.env.E2E_TEST_EMAIL ?? "admin-e2e@example.com";
  const name = process.env.E2E_TEST_NAME ?? "E2E Admin";
  const baseURL = process.env.E2E_BASE_URL ?? "http://localhost:3000";
  const healthBaseURL =
    process.env.E2E_HEALTH_BASE_URL ??
    `http://sante.lvh.me:${process.env.E2E_PORT ?? "3000"}`;
  const sharedCookieDomain = process.env.AUTH_COOKIE_DOMAIN?.trim();
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
  } else if (user.roles !== "ADMIN" || user.name !== name) {
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
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
      role: user.roles,
      adminExpiresAt:
        user.roles === "ADMIN"
          ? Date.now() + ADMIN_SESSION_MAX_AGE_SECONDS * 1000
          : undefined,
    },
    secret: authSecret,
    salt: "authjs.session-token",
    maxAge: 60 * 60 * 24,
  });

  async function writeStorageState(
    filePath: string,
    urlValue: string,
    cookieDomain?: string,
  ) {
    const url = new URL(urlValue);
    const cookieBase = {
      value: token,
      domain: cookieDomain || url.hostname,
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

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(
      filePath,
      JSON.stringify({ cookies, origins: [] }, null, 2),
      "utf8",
    );
  }

  await Promise.all([
    writeStorageState(authStatePath, baseURL),
    writeStorageState(healthAuthStatePath, healthBaseURL, sharedCookieDomain),
  ]);
}
