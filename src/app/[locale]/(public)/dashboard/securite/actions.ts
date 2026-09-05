'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

import prisma from '@/lib/db/prisma';
import { getCurrentInternalSessionContext } from '@/lib/auth/current-session';
import { isAdminRole } from '@/lib/auth/roles';

export async function revokeOtherSessionsAction(): Promise<{
  success: boolean;
  error?: string;
  count?: number;
}> {
  const sessionContext = await getCurrentInternalSessionContext();
  if (!sessionContext) {
    return { success: false, error: 'Session non authentifiée.' };
  }

  try {
    const result = await prisma.session.deleteMany({
      where: {
        userId: sessionContext.actorId,
        sessionToken: { not: sessionContext.sessionToken },
      },
    });

    revalidatePath('/dashboard/securite');
    return { success: true, count: result.count };
  } catch (error: any) {
    return { success: false, error: 'Impossible de déconnecter les autres sessions.' };
  }
}

export async function revokeAllSessionsAction(): Promise<void> {
  const sessionContext = await getCurrentInternalSessionContext();
  if (!sessionContext) {
    redirect('/');
  }

  try {
    await prisma.session.deleteMany({
      where: { userId: sessionContext.actorId },
    });

    const cookieStore = await cookies();
    cookieStore.delete('__Secure-authjs.session-token');
    cookieStore.delete('authjs.session-token');
  } catch {
    // Non bloquant
  }

  redirect('/');
}

export async function deleteUserAccountAction(formData: FormData): Promise<{
  success: boolean;
  error?: string;
}> {
  const sessionContext = await getCurrentInternalSessionContext();
  if (!sessionContext) {
    return { success: false, error: 'Session non authentifiée.' };
  }

  // 1. Interdiction stricte pendant impersonation
  if (sessionContext.impersonation?.isActive) {
    return {
      success: false,
      error: 'Action interdite pendant une session de support (impersonation).',
    };
  }

  // 2. Interdiction de self-delete pour un compte ADMIN
  if (isAdminRole(sessionContext.actorRole)) {
    return {
      success: false,
      error: 'Les comptes administrateurs ne peuvent pas être supprimés en libre-service.',
    };
  }

  // 3. Contrôle de confirmation explicite (saisie exacte de SUPPRIMER)
  const confirmation = formData.get('confirmation')?.toString().trim();
  if (confirmation !== 'SUPPRIMER') {
    return {
      success: false,
      error: 'Veuillez saisir exactement le mot "SUPPRIMER" pour confirmer la suppression.',
    };
  }

  // 4. Authentification récente exigée (< 15 minutes)
  const sessionAgeMs = Date.now() - sessionContext.createdAt.getTime();
  const FIFTEEN_MINUTES_MS = 15 * 60 * 1000;
  if (sessionAgeMs > FIFTEEN_MINUTES_MS) {
    return {
      success: false,
      error: 'Pour votre sécurité, votre session est trop ancienne. Veuillez vous reconnecter avant de supprimer votre compte.',
    };
  }

  const userId = sessionContext.actorId;

  // 5. Recherche d'empreintes d'administration historique (ancien ADMIN rétrogradé)
  const [adminCorrectionsCount, adminEnrollmentsCount, adminImpersonationsCount] = await Promise.all([
    prisma.userAcademicEnrollmentCorrection.count({
      where: { actorAdminId: userId },
    }),
    prisma.userAcademicEnrollment.count({
      where: { createdByActorId: userId },
    }),
    prisma.authLog.count({
      where: {
        userId,
        action: { in: ['IMPERSONATION_START', 'IMPERSONATION_STOP'] },
      },
    }),
  ]);

  if (adminCorrectionsCount > 0 || adminEnrollmentsCount > 0 || adminImpersonationsCount > 0) {
    return {
      success: false,
      error:
        "Votre compte possède un historique d'actions administratives. La suppression en libre-service n'est pas autorisée. Veuillez contacter le support pour un traitement administratif spécifique.",
    };
  }

  // 6. Suppression transactionnelle ordonnée du graphe pour respecter les contraintes Restrict
  try {
    await prisma.$transaction(async (tx) => {
      // a. Questions et résultats des tentatives
      const userAttempts = await tx.userTrainingQuizAttempt.findMany({
        where: { userId },
        select: { id: true },
      });
      const userAttemptIds = userAttempts.map((a) => a.id);
      if (userAttemptIds.length > 0) {
        await tx.userTrainingQuizAttemptQuestion.deleteMany({
          where: { attemptId: { in: userAttemptIds } },
        });
      }

      const userHealthAttempts = await tx.userHealthMockExamAttempt.findMany({
        where: { userId },
        select: { id: true },
      });
      const userHealthAttemptIds = userHealthAttempts.map((a) => a.id);
      if (userHealthAttemptIds.length > 0) {
        await tx.userHealthMockExamAttemptQuestion.deleteMany({
          where: { attemptId: { in: userHealthAttemptIds } },
        });
        await tx.userHealthMockExamAttemptSectionResult.deleteMany({
          where: { attemptId: { in: userHealthAttemptIds } },
        });
      }

      // b. Tentatives
      await tx.userTrainingQuizAttempt.deleteMany({ where: { userId } });
      await tx.userHealthMockExamAttempt.deleteMany({ where: { userId } });

      // c. Progressions
      await tx.userTrainingQuizProgress.deleteMany({ where: { userId } });

      // d. Corrections sur les affectations de cet utilisateur
      const userEnrollments = await tx.userAcademicEnrollment.findMany({
        where: { userId },
        select: { id: true },
      });
      const userEnrollmentIds = userEnrollments.map((e) => e.id);
      if (userEnrollmentIds.length > 0) {
        await tx.userAcademicEnrollmentCorrection.deleteMany({
          where: { enrollmentId: { in: userEnrollmentIds } },
        });
      }

      // e. Affectations annuelles
      await tx.userAcademicEnrollment.deleteMany({ where: { userId } });

      // f. Profil, activité, historique et souscriptions
      await tx.userPedagogicalProfile.deleteMany({ where: { userId } });
      await tx.userActivity.deleteMany({ where: { userId } });
      await tx.userExerciseHistory.deleteMany({ where: { userId } });
      await tx.userEntitlement.deleteMany({ where: { userId } });
      await tx.userSubscription.deleteMany({ where: { userId } });

      // g. Données d'authentification
      await tx.account.deleteMany({ where: { userId } });
      await tx.authenticator.deleteMany({ where: { userId } });
      await tx.session.deleteMany({ where: { userId } });
      await tx.authLog.deleteMany({ where: { userId } });

      if (sessionContext.actorEmail) {
        await tx.verificationToken.deleteMany({
          where: { identifier: sessionContext.actorEmail },
        });
      }

      // h. Utilisateur final
      await tx.user.delete({ where: { id: userId } });
    });

    // Nettoyage des cookies de session
    const cookieStore = await cookies();
    cookieStore.delete('__Secure-authjs.session-token');
    cookieStore.delete('authjs.session-token');
  } catch (error: any) {
    console.error('Erreur transactionnelle suppression utilisateur:', error);
    return {
      success: false,
      error: 'Une erreur est survenue lors de la suppression de vos données. Veuillez réessayer.',
    };
  }

  redirect('/');
}
