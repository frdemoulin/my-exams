import { isAdminRole } from '@/lib/auth/roles';
import { getSessionActorId, getSessionActorRole } from '@/lib/auth/session';

export class UnauthorizedAdminError extends Error {
  readonly statusCode: 401 | 403;

  constructor(message = 'Accès administrateur requis.', statusCode: 401 | 403 = 403) {
    super(message);
    this.name = 'UnauthorizedAdminError';
    this.statusCode = statusCode;
  }
}

/**
 * Valide les privilèges administrateur à partir d'un objet session donné.
 *
 * Règles :
 * - Vérifie la présence d'une session active et d'un actorId (401 si manquant).
 * - Vérifie le rôle réel de l'acteur (getSessionActorRole), et non de l'utilisateur impersonné (403 si non-admin).
 *   (Un ADMIN impersonnant un USER conserve ses droits d'administration CMS).
 * - Lève une exception UnauthorizedAdminError avec le code HTTP correspondant (401 ou 403).
 */
export function assertAdminFromSession(session?: any): { actorId: string; session: any } {
  if (!session?.user) {
    throw new UnauthorizedAdminError('Non authentifié.', 401);
  }

  const actorId = getSessionActorId(session);
  if (!actorId) {
    throw new UnauthorizedAdminError('Identité de session invalide.', 401);
  }

  const actorRole = getSessionActorRole(session);
  if (!isAdminRole(actorRole)) {
    throw new UnauthorizedAdminError('Accès administrateur requis.', 403);
  }

  return { actorId, session };
}
