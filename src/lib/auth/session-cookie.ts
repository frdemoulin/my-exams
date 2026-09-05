import type { NextResponse } from 'next/server';

const USER_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;
const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

export type SessionCookieOptions = {
  secure?: boolean;
  requestUrl?: string;
};

export type AuthSessionCookieConfig = {
  name: string;
  options: {
    httpOnly: boolean;
    sameSite: 'lax';
    secure: boolean;
    path: string;
    maxAge: number;
    domain?: string;
  };
};

export const normalizeHostname = (value?: string | null) =>
  value?.split(',')[0]?.trim().toLowerCase().replace(/:\d+$/, '') ?? '';

export const getSharedCookieDomain = (hostname: string) => {
  const sharedCookieDomain = process.env.AUTH_COOKIE_DOMAIN?.trim();
  if (!sharedCookieDomain) return undefined;

  const parentDomain = sharedCookieDomain.replace(/^\./, '').toLowerCase();
  const belongsToParentDomain =
    hostname === parentDomain || hostname.endsWith(`.${parentDomain}`);

  return belongsToParentDomain ? sharedCookieDomain : undefined;
};

export function getSharedSessionCookieOptions(hostname: string) {
  const sharedCookieDomain = getSharedCookieDomain(hostname);
  return sharedCookieDomain
    ? { sessionToken: { options: { domain: sharedCookieDomain } } }
    : undefined;
}

export const AUTH_SESSION_COOKIE_NAME_INSECURE = 'authjs.session-token';
export const AUTH_SESSION_COOKIE_NAME_SECURE = '__Secure-authjs.session-token';
export const ALL_AUTH_SESSION_COOKIE_NAMES = [
  AUTH_SESSION_COOKIE_NAME_SECURE,
  AUTH_SESSION_COOKIE_NAME_INSECURE,
] as const;

export function getAuthSessionCookieConfig(
  options?: SessionCookieOptions | string
): AuthSessionCookieConfig {
  const opts: SessionCookieOptions =
    typeof options === 'string' ? { requestUrl: options } : (options ?? {});

  let secure = opts.secure;
  if (secure === undefined && opts.requestUrl) {
    try {
      secure = new URL(opts.requestUrl).protocol === 'https:';
    } catch {
      secure = undefined;
    }
  }
  if (secure === undefined) {
    secure = process.env.NODE_ENV === 'production';
  }

  const cookieName = secure ? AUTH_SESSION_COOKIE_NAME_SECURE : AUTH_SESSION_COOKIE_NAME_INSECURE;
  const hostname = opts.requestUrl ? normalizeHostname(new URL(opts.requestUrl).hostname) : '';
  const domain = getSharedCookieDomain(hostname);

  return {
    name: cookieName,
    options: {
      httpOnly: true,
      sameSite: 'lax',
      secure,
      path: '/',
      maxAge: USER_SESSION_MAX_AGE_SECONDS,
      ...(domain ? { domain } : {}),
    },
  };
}

export function getAdminSessionExpiresAt() {
  return Date.now() + ADMIN_SESSION_MAX_AGE_SECONDS * 1000;
}

export function clearSessionCookie(
  response: NextResponse,
  options?: SessionCookieOptions | string
) {
  const config = getAuthSessionCookieConfig(options);
  response.cookies.set(AUTH_SESSION_COOKIE_NAME_SECURE, '', {
    ...config.options,
    maxAge: 0,
  });
  response.cookies.set(AUTH_SESSION_COOKIE_NAME_INSECURE, '', {
    ...config.options,
    maxAge: 0,
  });
}

// Ré-exportation des helpers de fixtures E2E séparés
export * from './session-fixture';
