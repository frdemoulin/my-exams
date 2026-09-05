import "server-only";
import { cookies, headers } from "next/headers";
import type { Role } from "@prisma/client";
import prisma from "@/lib/db/prisma";
import { isAdminRole } from "./roles";
import { ALL_AUTH_SESSION_COOKIE_NAMES } from "./session-cookie";

const ADMIN_MAX_AGE_MS = 8 * 60 * 60 * 1000; // 8 heures absolues
const USER_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 jours absolus
const IMPERSONATION_MAX_AGE_MS = 60 * 60 * 1000; // 1 heure

export type InternalSessionContext = {
  sessionId: string;
  sessionToken: string; // STRICTEMENT réservé aux opérations serveur internes
  actorId: string;
  actorRole: Role;
  actorName: string | null;
  actorEmail: string | null;
  actorImage: string | null;
  adminExpiresAt: number | null;
  effectiveUserId: string;
  effectiveUserRole: Role;
  effectiveUserName: string | null;
  effectiveUserEmail: string | null;
  effectiveUserImage: string | null;
  createdAt: Date;
  expires: Date;
  impersonation: {
    isActive: boolean;
    actorId: string;
    actorRole: Role;
    actorName: string | null;
    viewerId: string;
    viewerRole: Role;
    viewerName: string | null;
    viewerEmail: string | null;
    startedAt: number | null;
    reason: string | null;
  } | null;
};

/**
 * Récupère le sessionToken depuis les cookies de la requête (HTTPS en priorité, puis HTTP).
 * Utilise la liste canonique définie dans session-cookie.ts sans duplication de chaînes.
 */
export async function getRawSessionTokenFromCookies(request?: Request): Promise<string | null> {
  if (request?.headers) {
    const cookieHeader = request.headers.get('cookie');
    if (cookieHeader) {
      for (const cookieName of ALL_AUTH_SESSION_COOKIE_NAMES) {
        const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${cookieName}=([^;]+)`));
        if (match?.[1]) return decodeURIComponent(match[1].trim());
      }
    }
  }
  try {
    const cookieStore = await cookies();
    for (const cookieName of ALL_AUTH_SESSION_COOKIE_NAMES) {
      const token = cookieStore.get(cookieName)?.value?.trim();
      if (token) return token;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Résout le contexte complet de la session DB courante sans jamais exposer le sessionToken au client.
 */
export async function getCurrentInternalSessionContext(
  explicitTokenOrRequest?: string | Request | null
): Promise<InternalSessionContext | null> {
  const token =
    typeof explicitTokenOrRequest === 'string'
      ? explicitTokenOrRequest
      : await getRawSessionTokenFromCookies(
          explicitTokenOrRequest instanceof Request ? explicitTokenOrRequest : undefined
        );

  if (!token) {
    return null;
  }

  const sessionRecord = await prisma.session.findUnique({
    where: { sessionToken: token },
    include: {
      user: {
        select: {
          id: true,
          roles: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });

  if (!sessionRecord || !sessionRecord.user) {
    return null;
  }

  const now = Date.now();
  const createdAtMs = sessionRecord.createdAt.getTime();
  const isActorAdmin = isAdminRole(sessionRecord.user.roles);

  // Plafonnement absolu de la session selon le rôle ACTUEL du User
  const allowedLifetimeMs = isActorAdmin ? ADMIN_MAX_AGE_MS : USER_MAX_AGE_MS;
  const deadlineMs = createdAtMs + allowedLifetimeMs;

  // Règle absolue P1D : effectiveExpiresMs = min(sessionRecord.expires, roleDeadline)
  const effectiveExpiresMs = Math.min(sessionRecord.expires.getTime(), deadlineMs);

  if (now >= effectiveExpiresMs) {
    // Session expirée : suppression immédiate côté serveur
    try {
      await prisma.session.delete({ where: { sessionToken: token } });
    } catch {
      // Ignorer si déjà supprimée
    }
    return null;
  }

  let effectiveExpires = new Date(effectiveExpiresMs);
  if (sessionRecord.expires.getTime() > deadlineMs) {
    // Mise à jour opportuniste pour que la DB reflète le capping strict
    try {
      await prisma.session.update({
        where: { sessionToken: token },
        data: { expires: effectiveExpires },
      });
    } catch {
      // Non bloquant
    }
  }

  const adminExpiresAt = isActorAdmin ? createdAtMs + ADMIN_MAX_AGE_MS : null;

  // Gestion de l'impersonation côté serveur
  let impersonationContext: InternalSessionContext["impersonation"] = null;
  let effectiveUserId = sessionRecord.user.id;
  let effectiveUserRole = sessionRecord.user.roles;
  let effectiveUserName = sessionRecord.user.name;
  let effectiveUserEmail = sessionRecord.user.email;
  let effectiveUserImage = sessionRecord.user.image;

  if (sessionRecord.impersonatedUserId) {
    if (!isActorAdmin) {
      // Acteur non-admin : nettoyage immédiat en DB
      try {
        await prisma.session.update({
          where: { sessionToken: token },
          data: {
            impersonatedUserId: null,
            impersonationStartedAt: null,
            impersonationReason: null,
          },
        });
      } catch {
        // Non bloquant
      }
    } else {
      const startMs = sessionRecord.impersonationStartedAt?.getTime() ?? 0;
      const isImpersonationExpired = now - startMs > IMPERSONATION_MAX_AGE_MS;

      if (isImpersonationExpired) {
        // Expiration automatique de l'impersonation (> 1h)
        try {
          await prisma.session.update({
            where: { sessionToken: token },
            data: {
              impersonatedUserId: null,
              impersonationStartedAt: null,
              impersonationReason: null,
            },
          });
        } catch {
          // Non bloquant
        }
      } else {
      const viewer = await prisma.user.findUnique({
        where: { id: sessionRecord.impersonatedUserId },
        select: {
          id: true,
          roles: true,
          name: true,
          email: true,
          image: true,
        },
      });

      if (viewer) {
        effectiveUserId = viewer.id;
        effectiveUserRole = viewer.roles;
        effectiveUserName = viewer.name;
        effectiveUserEmail = viewer.email;
        effectiveUserImage = viewer.image;

        impersonationContext = {
          isActive: true,
          actorId: sessionRecord.user.id,
          actorRole: sessionRecord.user.roles,
          actorName: sessionRecord.user.name,
          viewerId: viewer.id,
          viewerRole: viewer.roles,
          viewerName: viewer.name,
          viewerEmail: viewer.email,
          startedAt: startMs,
          reason: sessionRecord.impersonationReason,
        };
      } else {
        // Cible introuvable : nettoyage opportuniste
        try {
          await prisma.session.update({
            where: { sessionToken: token },
            data: {
              impersonatedUserId: null,
              impersonationStartedAt: null,
              impersonationReason: null,
            },
          });
        } catch {
          // Non bloquant
        }
      }
    }
  }
}

  return {
    sessionId: sessionRecord.id,
    sessionToken: token,
    actorId: sessionRecord.user.id,
    actorRole: sessionRecord.user.roles,
    actorName: sessionRecord.user.name,
    actorEmail: sessionRecord.user.email,
    actorImage: sessionRecord.user.image,
    adminExpiresAt,
    effectiveUserId,
    effectiveUserRole,
    effectiveUserName,
    effectiveUserEmail,
    effectiveUserImage,
    createdAt: sessionRecord.createdAt,
    expires: effectiveExpires,
    impersonation: impersonationContext,
  };
}
