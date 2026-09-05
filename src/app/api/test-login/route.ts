"use server";

import { NextResponse } from "next/server";
import crypto from "crypto";

import prisma from "@/lib/db/prisma";
import { getAuthSessionCookieConfig } from "@/lib/auth/session-cookie";

const HEADER_NAME = "x-e2e-test-login";
const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

export async function POST(req: Request) {
  const testSecret = process.env.E2E_TEST_LOGIN_SECRET;
  const authSecret = process.env.AUTH_SECRET;

  if (!testSecret || !authSecret) {
    console.error("E2E login disabled - missing secret(s)");
    return NextResponse.json({ error: "E2E login disabled" }, { status: 404 });
  }

  const headerSecret = req.headers.get(HEADER_NAME);
  if (headerSecret !== testSecret) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = (await req.json().catch(() => null)) as { email?: string; name?: string } | null;
    const email = body?.email;
    const name = body?.name || "E2E Admin";

    if (!email) {
      return NextResponse.json({ error: "Email manquant" }, { status: 400 });
    }

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

    const cookieConfig = getAuthSessionCookieConfig({ requestUrl: req.url });
    const sessionToken = crypto.randomUUID();
    const expires = new Date(Date.now() + ADMIN_SESSION_MAX_AGE_SECONDS * 1000);

    await prisma.session.create({
      data: {
        sessionToken,
        userId: user.id,
        expires,
      },
    });

    const res = NextResponse.json({ ok: true, user: { id: user.id, email: user.email } });
    res.cookies.set(cookieConfig.name, sessionToken, cookieConfig.options);

    return res;
  } catch (error) {
    console.error("E2E test-login error", error);
    return NextResponse.json({ error: "internal_error" }, { status: 500 });
  }
}
