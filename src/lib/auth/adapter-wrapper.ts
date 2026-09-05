import type { Adapter, AdapterSession, AdapterUser } from "@auth/core/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { PrismaClient } from "@prisma/client";
import { isAdminRole } from "./roles";

const ADMIN_MAX_AGE_MS = 8 * 60 * 60 * 1000; // 8 heures absolues
const USER_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 jours absolus
const IMPERSONATION_MAX_AGE_MS = 60 * 60 * 1000; // 1 heure

export function createHardenedPrismaAdapter(prisma: PrismaClient): Adapter {
  const baseAdapter = PrismaAdapter(prisma);

  return {
    ...baseAdapter,

    // Invalidation des anciens liens de vérification pour le même email
    async createVerificationToken(token) {
      await prisma.verificationToken.deleteMany({
        where: { identifier: token.identifier },
      });

      if (!baseAdapter.createVerificationToken) {
        return token as any;
      }
      return baseAdapter.createVerificationToken(token);
    },

    // Plafonnement absolu de la session dès sa création
    async createSession(sessionData) {
      const user = await prisma.user.findUnique({
        where: { id: sessionData.userId },
        select: { roles: true },
      });

      const now = Date.now();
      const isAdmin = user ? isAdminRole(user.roles) : false;
      const maxLifetime = isAdmin ? ADMIN_MAX_AGE_MS : USER_MAX_AGE_MS;
      const maxAllowedExpires = new Date(now + maxLifetime);

      const cappedExpires =
        sessionData.expires.getTime() > maxAllowedExpires.getTime()
          ? maxAllowedExpires
          : sessionData.expires;

      if (!baseAdapter.createSession) {
        throw new Error("baseAdapter.createSession non disponible.");
      }

      return baseAdapter.createSession({
        ...sessionData,
        expires: cappedExpires,
      });
    },

    // Contrôle strict de l'expiration et du rôle actuel du User à chaque lecture
    async getSessionAndUser(sessionToken) {
      const userAndSession = await prisma.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });

      if (!userAndSession || !userAndSession.user) {
        return null;
      }

      const { user, ...session } = userAndSession;
      const now = Date.now();
      const createdAtMs = session.createdAt.getTime();
      const isAdmin = isAdminRole(user.roles);

      // Re-calcul déterministe du plafond absolu selon le rôle ACTUEL
      const allowedLifetimeMs = isAdmin ? ADMIN_MAX_AGE_MS : USER_MAX_AGE_MS;
      const deadlineMs = createdAtMs + allowedLifetimeMs;

      // Si l'âge de la session dépasse le plafond du rôle actuel -> suppression immédiate
      if (now >= deadlineMs) {
        try {
          await prisma.session.delete({ where: { sessionToken } });
        } catch {
          // Ignorer si déjà supprimée
        }
        return null;
      }

      // Règle absolue P1D : effectiveExpires = min(session.expires, roleDeadline)
      // Une session ne peut QUE rester identique ou être raccourcie, JAMAIS prolongée
      const boundedExpiresMs = Math.min(session.expires.getTime(), deadlineMs);
      if (now >= boundedExpiresMs) {
        try {
          await prisma.session.delete({ where: { sessionToken } });
        } catch {
          // Ignorer si déjà supprimée
        }
        return null;
      }

      let effectiveExpires = new Date(boundedExpiresMs);
      if (session.expires.getTime() > deadlineMs + 5000) {
        try {
          await prisma.session.update({
            where: { sessionToken },
            data: { expires: effectiveExpires },
          });
        } catch {
          // Non bloquant en cas d'accès concurrent
        }
      }

      // Nettoyage opportuniste d'une impersonation expirée (> 1h)
      if (session.impersonatedUserId && session.impersonationStartedAt) {
        const impersonationAgeMs = now - session.impersonationStartedAt.getTime();
        if (impersonationAgeMs > IMPERSONATION_MAX_AGE_MS) {
          try {
            await prisma.session.update({
              where: { sessionToken },
              data: {
                impersonatedUserId: null,
                impersonationStartedAt: null,
                impersonationReason: null,
              },
            });
            session.impersonatedUserId = null;
            session.impersonationStartedAt = null;
            session.impersonationReason = null;
          } catch {
            // Non bloquant
          }
        }
      }

      return {
        user: user as unknown as AdapterUser,
        session: {
          ...session,
          expires: effectiveExpires,
        } as unknown as AdapterSession,
      };
    },

    // Plafonnement absolu lors du renouvellement : AUCUNE extension au-delà de createdAt + maxAge
    // Règle stricte P1D : nextExpires = min(existing.expires, requestedExpires, roleDeadline)
    async updateSession(sessionData) {
      const existing = await prisma.session.findUnique({
        where: { sessionToken: sessionData.sessionToken },
        include: { user: true },
      });

      if (!existing || !existing.user) {
        return null;
      }

      const now = Date.now();
      const createdAtMs = existing.createdAt.getTime();
      const isAdmin = isAdminRole(existing.user.roles);
      const allowedLifetimeMs = isAdmin ? ADMIN_MAX_AGE_MS : USER_MAX_AGE_MS;
      const deadlineMs = createdAtMs + allowedLifetimeMs;

      // Règle stricte : une session ne peut QUE rester identique ou être raccourcie, JAMAIS prolongée
      const existingExpiresMs = existing.expires ? existing.expires.getTime() : deadlineMs;
      const candidateExpiresMs = sessionData.expires
        ? sessionData.expires.getTime()
        : existingExpiresMs;

      const nextExpiresMs = Math.min(
        existingExpiresMs,
        candidateExpiresMs,
        deadlineMs
      );

      if (now >= nextExpiresMs) {
        try {
          await prisma.session.delete({
            where: { sessionToken: sessionData.sessionToken },
          });
        } catch {
          // Ignorer
        }
        return null;
      }

      const nextExpires = new Date(nextExpiresMs);

      if (!baseAdapter.updateSession) {
        throw new Error("baseAdapter.updateSession non disponible.");
      }

      try {
        return await baseAdapter.updateSession({
          ...sessionData,
          expires: nextExpires,
        });
      } catch (err: any) {
        // En cas de conflit d'écriture concurrent MongoDB sur le document Session,
        // récupérer la session existante pour ne pas bloquer l'utilisateur
        const refreshed = await prisma.session.findUnique({
          where: { sessionToken: sessionData.sessionToken },
        });
        if (refreshed) {
          return refreshed as unknown as AdapterSession;
        }
        throw err;
      }
    },
  };
}
