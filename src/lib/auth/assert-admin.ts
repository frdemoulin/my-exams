export * from './assert-admin-session';

import { auth } from '@/lib/auth/auth';
import { assertAdminFromSession } from './assert-admin-session';

/**
 * Guard serveur canonique pour toutes les actions d'administration et mutations CMS.
 * Récupère la session courante côté serveur et délègue à assertAdminFromSession.
 */
export async function assertAdmin(): Promise<{ actorId: string; session: any }> {
  const session = await auth();
  return assertAdminFromSession(session);
}
