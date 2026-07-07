import type { Role } from '@prisma/client';
import { encode } from 'next-auth/jwt';
import type { NextResponse } from 'next/server';

const USER_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;
const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;
const sharedCookieDomain = process.env.AUTH_COOKIE_DOMAIN?.trim() || undefined;

export const AUTH_SESSION_COOKIE_SALT = 'authjs.session-token';
export const AUTH_SESSION_COOKIE_NAMES = [
  'next-auth.session-token',
  'authjs.session-token',
];

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
  if (!sharedCookieDomain) return undefined;

  const parentDomain = sharedCookieDomain.replace(/^\./, '').toLowerCase();
  const belongsToParentDomain =
    hostname === parentDomain || hostname.endsWith(`.${parentDomain}`);

  return belongsToParentDomain ? sharedCookieDomain : undefined;
};

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

export async function encodeAppSessionToken(payload: AppSessionTokenPayload) {
  const authSecret = process.env.AUTH_SECRET;

  if (!authSecret) {
    throw new Error('AUTH_SECRET manquant.');
  }

  return encode({
    token: payload,
    secret: authSecret,
    salt: AUTH_SESSION_COOKIE_SALT,
    maxAge: USER_SESSION_MAX_AGE_SECONDS,
  });
}

export function applySessionTokenCookies(
  response: NextResponse,
  jwt: string,
  requestUrl?: string
) {
  const secure = process.env.NODE_ENV === 'production';
  const hostname = requestUrl ? normalizeHostname(new URL(requestUrl).hostname) : '';
  const domain = getSharedCookieDomain(hostname);

  const cookieOptions = {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure,
    path: '/',
    maxAge: USER_SESSION_MAX_AGE_SECONDS,
    ...(domain ? { domain } : {}),
  };

  for (const cookieName of AUTH_SESSION_COOKIE_NAMES) {
    response.cookies.set(cookieName, jwt, cookieOptions);

    if (secure) {
      response.cookies.set(`__Secure-${cookieName}`, jwt, cookieOptions);
    }
  }
}
