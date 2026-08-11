import type { Role } from '@prisma/client';
import { encode } from 'next-auth/jwt';
import type { NextResponse } from 'next/server';

const USER_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;
const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

export type SessionCookieOptions = {
  secure?: boolean;
  requestUrl?: string;
};

export type AuthSessionCookieConfig = {
  name: string;
  salt: string;
  options: {
    httpOnly: boolean;
    sameSite: 'lax';
    secure: boolean;
    path: string;
    maxAge: number;
    domain?: string;
  };
};

export type SessionIdentity = {
  id: string;
  role: Role;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export type AppSessionTokenPayload = {
  sub: string;
  role: Role;
  name?: string;
  email?: string;
  picture?: string;
  adminExpiresAt?: number;
  actorId?: string;
  actorRole?: Role;
  actorName?: string;
  actorEmail?: string;
  actorImage?: string;
  impersonatedUserId?: string;
  impersonatedUserRole?: Role;
  impersonatedUserName?: string;
  impersonatedUserEmail?: string;
  impersonatedUserImage?: string;
  impersonationStartedAt?: number;
};

const normalizeText = (value?: string | null) => {
  const normalizedValue = value?.trim();
  return normalizedValue ? normalizedValue : undefined;
};

const normalizeHostname = (value?: string | null) =>
  value?.split(',')[0]?.trim().toLowerCase().replace(/:\d+$/, '') ?? '';

const getSharedCookieDomain = (hostname: string) => {
  const sharedCookieDomain = process.env.AUTH_COOKIE_DOMAIN?.trim();
  if (!sharedCookieDomain) return undefined;

  const parentDomain = sharedCookieDomain.replace(/^\./, '').toLowerCase();
  const belongsToParentDomain =
    hostname === parentDomain || hostname.endsWith(`.${parentDomain}`);

  return belongsToParentDomain ? sharedCookieDomain : undefined;
};

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

  const cookieName = secure ? '__Secure-authjs.session-token' : 'authjs.session-token';
  const hostname = opts.requestUrl ? normalizeHostname(new URL(opts.requestUrl).hostname) : '';
  const domain = getSharedCookieDomain(hostname);

  return {
    name: cookieName,
    salt: cookieName,
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

export function buildAppSessionTokenPayload({
  actor,
  viewer,
  adminExpiresAt,
}: {
  actor: SessionIdentity;
  viewer?: SessionIdentity | null;
  adminExpiresAt?: number;
}): AppSessionTokenPayload {
  const effectiveViewer = viewer ?? actor;
  const payload: AppSessionTokenPayload = {
    sub: effectiveViewer.id,
    role: actor.role,
    name: normalizeText(effectiveViewer.name),
    email: normalizeText(effectiveViewer.email),
    picture: normalizeText(effectiveViewer.image),
    adminExpiresAt,
    actorId: actor.id,
    actorRole: actor.role,
    actorName: normalizeText(actor.name),
    actorEmail: normalizeText(actor.email),
    actorImage: normalizeText(actor.image),
  };

  if (viewer && viewer.id !== actor.id) {
    payload.impersonatedUserId = viewer.id;
    payload.impersonatedUserRole = viewer.role;
    payload.impersonatedUserName = normalizeText(viewer.name);
    payload.impersonatedUserEmail = normalizeText(viewer.email);
    payload.impersonatedUserImage = normalizeText(viewer.image);
    payload.impersonationStartedAt = Date.now();
  }

  return payload;
}

export async function encodeAppSessionToken(
  payload: AppSessionTokenPayload,
  options?: SessionCookieOptions | string
) {
  const authSecret = process.env.AUTH_SECRET;

  if (!authSecret) {
    throw new Error('AUTH_SECRET manquant.');
  }

  const config = getAuthSessionCookieConfig(options);

  return encode({
    token: payload,
    secret: authSecret,
    salt: config.salt,
    maxAge: USER_SESSION_MAX_AGE_SECONDS,
  });
}

export function applySessionTokenCookies(
  response: NextResponse,
  jwt: string,
  options?: SessionCookieOptions | string
) {
  const config = getAuthSessionCookieConfig(options);
  response.cookies.set(config.name, jwt, config.options);
}
