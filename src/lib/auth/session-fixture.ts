import crypto from 'node:crypto';
import type { Role } from '@prisma/client';
import prisma from '@/lib/db/prisma';

const USER_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;
const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

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
  _options?: any
): Promise<string> {
  const userId = payload.sub || payload.actorId;
  const sessionToken = crypto.randomUUID();
  const isAdmin = (payload.actorRole ?? payload.role) === 'ADMIN';
  const expires = new Date(
    Date.now() + (isAdmin ? ADMIN_SESSION_MAX_AGE_SECONDS * 1000 : USER_SESSION_MAX_AGE_SECONDS * 1000)
  );

  if (userId) {
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
