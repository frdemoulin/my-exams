import { auth } from '@/lib/auth/auth';
import { isAdminRole } from '@/lib/auth/roles';
import { getSessionActorId, getSessionActorRole } from '@/lib/auth/session';

export class UnauthorizedAdminError extends Error {
  constructor(message = 'Accès administrateur requis.') {
    super(message);
    this.name = 'UnauthorizedAdminError';
  }
}

/**
 * Valide les privilèges administrateur à partir d'un objet session donné.
 *
 * Règles :
 * - Vérifie la présence d'une session active.
 * - Vérifie le rôle réel de l'acteur (getSessionActorRole), et non de l'utilisateur impersonné.
 *   (Un ADMIN impersonnant un USER conserve ses droits d'administration CMS).
 * - Lève une exception UnauthorizedAdminError si non autorisé.
 */
export function assertAdminFromSession(session?: any): { actorId: string; session: any } {
  const actorRole = getSessionActorRole(session);
  const actorId = getSessionActorId(session);

  if (!session?.user || !actorId || !isAdminRole(actorRole)) {
    throw new UnauthorizedAdminError();
  }

  return { actorId, session };
}

/**
 * Guard serveur canonique pour toutes les actions d'administration et mutations CMS.
 * Récupère la session courante côté serveur et délègue à assertAdminFromSession.
 */
export async function assertAdmin(): Promise<{ actorId: string; session: any }> {
  const session = await auth();
  return assertAdminFromSession(session);
}
