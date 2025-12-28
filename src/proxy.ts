import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

const PUBLIC_FILE = /\.[a-z0-9]+$/i;

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ne pas appliquer le middleware i18n aux assets Next.js ni aux fichiers statiques,
  // sinon ils sont réécrits vers /{locale}/_next/... et finissent en 404 en prod.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/manifest.json" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const localeMatch = pathname.match(/^\/(fr|en)(\/|$)/);
  if (localeMatch) {
    const url = request.nextUrl.clone();
    const trimmed = pathname.replace(/^\/(fr|en)/, "");
    url.pathname = trimmed === "" ? "/" : trimmed;
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}
