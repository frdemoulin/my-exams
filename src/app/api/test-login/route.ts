"use server";

import { NextResponse } from "next/server";
import { encode } from "next-auth/jwt";

import prisma from "@/lib/db/prisma";

const HEADER_NAME = "x-e2e-test-login";
const COOKIE_SALT = "authjs.session-token";
const COOKIE_NAMES = ["next-auth.session-token", "authjs.session-token"];

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
    }

    const jwt = await encode({
      token: {
        email: user.email || undefined,
        name: user.name || undefined,
        sub: user.id,
      },
      secret: authSecret,
      salt: COOKIE_SALT,
      maxAge: 60 * 60 * 24, // 1 jour
    });

    const res = NextResponse.json({ ok: true, user: { id: user.id, email: user.email } });
    const secure = process.env.NODE_ENV === "production";

    for (const cookieName of COOKIE_NAMES) {
      res.cookies.set(cookieName, jwt, {
        httpOnly: true,
        sameSite: "lax",
        secure,
        path: "/",
      });

      if (secure) {
        res.cookies.set(`__Secure-${cookieName}`, jwt, {
          httpOnly: true,
          sameSite: "lax",
          secure,
          path: "/",
        });
      }
    }

    return res;
  } catch (error) {
    console.error("E2E test-login error", error);
    return NextResponse.json({ error: "internal_error" }, { status: 500 });
  }
}
