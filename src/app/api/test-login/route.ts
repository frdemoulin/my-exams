"use server";

import { NextResponse } from "next/server";
import crypto from "crypto";

import prisma from "@/lib/db/prisma";
import { DEMO_ACCOUNT_EMAIL_SET } from "@/lib/auth/demo-accounts";
import {
  getAuthSessionCookieConfig,
  ADMIN_SESSION_MAX_AGE_SECONDS,
  USER_SESSION_MAX_AGE_SECONDS,
} from "@/lib/auth/session-cookie";

const HEADER_NAME = "x-e2e-test-login";

export async function POST(req: Request) {
  const testSecret = process.env.E2E_TEST_LOGIN_SECRET;
  const authSecret = process.env.AUTH_SECRET;

  if (process.env.NODE_ENV === "production" || !testSecret || !authSecret) {
    console.error("E2E login disabled - production or missing secret(s)");
    return NextResponse.json({ error: "E2E login disabled" }, { status: 404 });
  }

  const headerSecret = req.headers.get(HEADER_NAME);
  if (headerSecret !== testSecret) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = (await req.json().catch(() => null)) as { email?: string; name?: string } | null;
    const email = body?.email?.trim().toLowerCase();

    if (!email) {
      return NextResponse.json({ error: "Email manquant" }, { status: 400 });
    }

    const adminE2EEmail = (process.env.E2E_TEST_EMAIL || "admin-e2e@example.com").toLowerCase();
    const ALLOWED_TEST_LOGIN_EMAILS = new Set([
      adminE2EEmail,
      ...DEMO_ACCOUNT_EMAIL_SET,
    ]);

    if (!ALLOWED_TEST_LOGIN_EMAILS.has(email)) {
      return NextResponse.json({ error: "Email non autorisé pour test-login" }, { status: 403 });
    }

    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      if (email === adminE2EEmail) {
        user = await prisma.user.create({
          data: {
            email,
            name: body?.name || "E2E Admin",
            roles: "ADMIN",
          },
        });
      } else {
        return NextResponse.json(
          { error: "Utilisateur non initialisé. Exécutez npm run db:seed:demo-accounts." },
          { status: 404 }
        );
      }
    }

    const isAdmin = user.roles === "ADMIN";
    const maxAgeSeconds = isAdmin ? ADMIN_SESSION_MAX_AGE_SECONDS : USER_SESSION_MAX_AGE_SECONDS;
    const expires = new Date(Date.now() + maxAgeSeconds * 1000);

    const cookieConfig = getAuthSessionCookieConfig({ requestUrl: req.url });
    const sessionToken = crypto.randomUUID();

    await prisma.session.create({
      data: {
        sessionToken,
        userId: user.id,
        expires,
      },
    });

    const res = NextResponse.json({
      ok: true,
      user: { id: user.id, email: user.email, role: user.roles },
    });
    res.cookies.set(cookieConfig.name, sessionToken, {
      ...cookieConfig.options,
      maxAge: maxAgeSeconds,
    });

    return res;
  } catch (error) {
    console.error("E2E test-login error", error);
    return NextResponse.json({ error: "internal_error" }, { status: 500 });
  }
}
