import crypto from 'node:crypto';
import type { Role } from '@prisma/client';
import type { NextResponse } from 'next/server';
import prisma from '@/lib/db/prisma';

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

/**
 * Crée une session en base pour les tests E2E et retourne le sessionToken brut.
 * Compatible avec la stratégie database de Auth.js.
 */
export async function encodeAppSessionToken(
  payload: AppSessionTokenPayload,
  _options?: SessionCookieOptions | string
): Promise<string> {
  const userId = payload.sub || payload.actorId;
  const sessionToken = crypto.randomUUID();
  const isAdmin = (payload.actorRole ?? payload.role) === 'ADMIN';
  const expires = new Date(
    Date.now() + (isAdmin ? ADMIN_SESSION_MAX_AGE_SECONDS * 1000 : USER_SESSION_MAX_AGE_SECONDS * 1000)
  );

  if (userId) {
    // Upsert utilisateur test si nécessaire
    try {
      await prisma.user.upsert({
        where: { id: userId },
        update: {
          roles: payload.role || 'USER',
          name: payload.name || undefined,
          email: payload.email || undefined,
        },
        create: {
          id: userId,
          roles: payload.role || 'USER',
          name: payload.name || 'Test User',
          email: payload.email || `${userId}@test.local`,
        },
      });

      await prisma.session.create({
        data: {
          sessionToken,
          userId,
          expires,
          impersonatedUserId: payload.impersonatedUserId || null,
          impersonationStartedAt: payload.impersonationStartedAt
            ? new Date(payload.impersonationStartedAt)
            : null,
        },
      });
    } catch {
      // Ignorer si déjà existant
    }
  }

  return sessionToken;
}
