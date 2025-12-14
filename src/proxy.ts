import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

import { routing } from "./i18n/routing";

// Force Edge runtime for Cloudflare (Node middleware non supporté)
export const runtime = "edge";

const intlMiddleware = createIntlMiddleware(routing);

export default function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for:
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - /static (static files)
  // - /favicon.ico, /robots.txt (static files)
  matcher: ["/", "/(fr|en)/:path*", "/((?!api|_next|_vercel|static|favicon.ico|robots.txt).*)"],
};
