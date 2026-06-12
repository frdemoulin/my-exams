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

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
    return NextResponse.next();
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

  return intlMiddleware(request);
}
