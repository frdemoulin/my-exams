import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { auth } from '@/lib/auth/auth';
import { NextRequest, NextResponse } from 'next/server';

// Créer le middleware i18n
const intlMiddleware = createIntlMiddleware(routing);

// Middleware combiné : Auth + i18n
export default async function proxy(request: NextRequest) {
  // 1. D'abord, gérer l'internationalisation
  const intlResponse = intlMiddleware(request);
  
  // 2. Ensuite, gérer l'authentification
  const authResponse = await auth(request as any);
  
  // Si l'auth retourne une réponse (redirection), l'utiliser
  if (authResponse) {
    return authResponse;
  }
  
  // Sinon, retourner la réponse i18n
  return intlResponse;
}

export const config = {
  // Match all pathnames except for:
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - /static (static files)
  // - /favicon.ico, /robots.txt (static files)
  matcher: ['/', '/(fr|en)/:path*', '/((?!api|_next|_vercel|static|favicon.ico|robots.txt).*)'],
};
