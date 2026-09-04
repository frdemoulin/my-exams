import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

const PUBLIC_FILE = /\.[a-z0-9]+$/i;
const DEFAULT_HEALTH_HOST = 'sante.lvh.me';
const SHARED_APP_PATHS = ['/admin', '/log-in'];

function normalizeHost(value?: string | null) {
  return value?.split(',')[0]?.trim().toLowerCase() ?? '';
}

function stripPort(host: string) {
  return host.replace(/:\d+$/, '');
}

function getRequestHost(request: NextRequest) {
  return stripPort(
    normalizeHost(request.headers.get('x-forwarded-host')) ||
      normalizeHost(request.headers.get('host')) ||
      normalizeHost(request.nextUrl.host)
  );
}

function isHealthSubdomainRequest(request: NextRequest) {
  const configuredHealthHost = stripPort(
    normalizeHost(process.env.HEALTH_HOST) || DEFAULT_HEALTH_HOST
  );

  return getRequestHost(request) === configuredHealthHost;
}

function getHealthInternalPath(pathname: string) {
  if (pathname === '/sante' || pathname.startsWith('/sante/')) {
    return pathname;
  }

  return pathname === '/' ? '/sante' : `/sante${pathname}`;
}

function isSharedAppPath(pathname: string) {
  return SHARED_APP_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
}

function isAssessmentPath(pathname: string): boolean {
  return (
    pathname.includes('/qcm/') ||
    pathname.includes('/colles/') ||
    pathname.includes('/examens-blancs/') ||
    pathname.startsWith('/entrainement/') ||
    pathname.startsWith('/api/health/mock-exams/') ||
    pathname.startsWith('/api/training/quiz-session/') ||
    pathname.startsWith('/api/training/path-progress')
  );
}

function applySecurityHeaders(response: NextResponse, pathname: string): NextResponse {
  if (isAssessmentPath(pathname)) {
    response.headers.set('Cache-Control', 'private, no-store, no-cache, must-revalidate');
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  return response;
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Intercepter formellement les téléchargements d'annales pour empêcher Next.js
  // de servir statiquement depuis public/ et garantir le contrôle Hard Wall.
  if (pathname.startsWith('/uploads/exam-papers/')) {
    const file = pathname.replace(/^\/uploads\/exam-papers\//, '');
    const url = request.nextUrl.clone();
    url.pathname = `/api/exam-papers/file/${file}`;
    return NextResponse.rewrite(url);
  }

  // Ne pas appliquer le middleware i18n aux assets Next.js ni aux fichiers statiques,
  // sinon ils sont réécrits vers /{locale}/_next/... et finissent en 404 en prod.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/manifest.json' ||
    PUBLIC_FILE.test(pathname)
  ) {
    const response = NextResponse.next();
    return applySecurityHeaders(response, pathname);
  }

  const localeMatch = pathname.match(/^\/(fr|en)(\/|$)/);
  if (localeMatch) {
    const url = request.nextUrl.clone();
    const trimmed = pathname.replace(/^\/(fr|en)/, '');
    url.pathname = trimmed === '' ? '/' : trimmed;
    return NextResponse.redirect(url);
  }

  if (isHealthSubdomainRequest(request) && !isSharedAppPath(pathname)) {
    request.nextUrl.pathname = getHealthInternalPath(pathname);
  }

  const response = intlMiddleware(request);
  return applySecurityHeaders(response, pathname);
}
