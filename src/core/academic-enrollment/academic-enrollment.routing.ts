import prisma from '@/lib/db/prisma';
import type { UserAcademicEnrollment } from '@prisma/client';
import { resolveSecondarySchoolSegment } from './academic-enrollment.segments';
import { getCurrentUserAcademicEnrollment } from './academic-enrollment.service';
import { redirect } from 'next/navigation';
import {
  assertUserCanAccessExamPaper,
  assertUserCanAccessExercise,
  assertUserCanAccessChapter,
  assertUserCanAccessHealthCourseUnit,
  assertUserCanAccessHealthMockExam,
  PedagogicalAccessError,
} from '@/lib/auth/assert-pedagogical-access';

/**
 * Normalise et sécurise de manière stricte une URL de redirection (callbackUrl).
 * Rejette catégoriquement :
 * - les URLs externes (http://, https://)
 * - les URLs protocol-relative (//evil.example, \/evil.example)
 * - les chaînes contenant un caractère deux-points avant le premier slash (ex: javascript:)
 * - les encodages malicieux
 * Retourne le chemin relatif strict ou null si invalide.
 */
export function getSafeCallbackUrl(
  rawUrl?: string | string[] | null | undefined
): string | null {
  if (!rawUrl) return null;
  const urlCandidate = Array.isArray(rawUrl) ? rawUrl[0] : rawUrl;
  if (typeof urlCandidate !== 'string') return null;

  const trimmed = urlCandidate.trim();
  if (!trimmed) return null;

  // Rejeter les tentatives protocol-relative ou schémas arbitraires
  if (
    trimmed.startsWith('//') ||
    trimmed.startsWith('\\\\') ||
    trimmed.startsWith('/\\') ||
    trimmed.startsWith('\\/')
  ) {
    return null;
  }

  // Doit commencer obligatoirement par un slash simple
  if (!trimmed.startsWith('/')) {
    return null;
  }

  try {
    const parsed = new URL(trimmed, 'http://internal.app');
    if (parsed.origin !== 'http://internal.app') {
      return null;
    }

    // Double vérification sur pathname pour bloquer tout contournement du type "/\\evil.example"
    if (!parsed.pathname.startsWith('/') || parsed.pathname.startsWith('//')) {
      return null;
    }

    // Interdire les boucles vers les pages d'authentification ou d'onboarding
    const cleanPath = parsed.pathname.toLowerCase();
    if (
      cleanPath === '/log-in' ||
      cleanPath === '/onboarding' ||
      cleanPath === '/auth/continue' ||
      cleanPath.endsWith('/log-in') ||
      cleanPath.endsWith('/onboarding') ||
      cleanPath.endsWith('/auth/continue')
    ) {
      return null;
    }

    return `${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return null;
  }
}

/**
 * Résout le hub d'accueil correspondant à l'affectation pédagogique.
 */
export async function resolveEnrollmentHomePath(
  enrollment: UserAcademicEnrollment
): Promise<string> {
  if (enrollment.audience === 'HEALTH') {
    return '/sante';
  }

  if (enrollment.audience === 'SECONDARY' && enrollment.secondaryGradeId) {
    const grade = await prisma.grade.findUnique({
      where: { id: enrollment.secondaryGradeId },
      select: { shortDescription: true },
    });

    const segment = resolveSecondarySchoolSegment(grade);
    if (segment === 'COLLEGE') {
      return '/college';
    }
    return '/lycee';
  }

  return '/dashboard';
}

/**
 * Résout canoniquement la destination du CTA principal d'entraînement de la page d'accueil.
 *
 * Règles :
 * - visiteur non authentifié -> /entrainement
 * - utilisateur authentifié sans Enrollment actif -> /onboarding
 * - Enrollment HEALTH -> /sante
 * - Enrollment SECONDARY collège -> /college
 * - Enrollment SECONDARY lycée -> /lycee
 *
 * S'appuie strictement sur l'affectation annuelle active (UserAcademicEnrollment).
 * Ne recourt JAMAIS au modèle historique UserPedagogicalProfile.
 */
export async function resolveHomeTrainingCtaDestination(params: {
  userId?: string | null;
  date?: Date;
}): Promise<string> {
  if (!params.userId) {
    return '/entrainement';
  }

  const enrollment = await getCurrentUserAcademicEnrollment(params.userId, params.date);
  if (!enrollment) {
    return '/onboarding';
  }

  if (enrollment.audience === 'HEALTH') {
    return '/sante';
  }

  if (enrollment.audience === 'SECONDARY' && enrollment.secondaryGradeId) {
    const grade = await prisma.grade.findUnique({
      where: { id: enrollment.secondaryGradeId },
      select: { shortDescription: true },
    });

    const segment = resolveSecondarySchoolSegment(grade);
    if (segment === 'COLLEGE') {
      return '/college';
    }
    if (segment === 'LYCEE') {
      return '/lycee';
    }
  }

  return '/onboarding';
}


/**
 * Revalide rigoureusement l'autorisation d'accès d'une URL de callback pour une affectation donnée.
 * Appelle les guards P1A canoniques correspondants pour les ressources unitaires.
 * Échoue en fail-closed strict (retourne false).
 */
export async function isPathCompatibleWithEnrollment(params: {
  path: string;
  enrollment: UserAcademicEnrollment;
  date?: Date;
}): Promise<boolean> {
  const safePath = getSafeCallbackUrl(params.path);
  if (!safePath) return false;

  const { pathname } = new URL(safePath, 'http://internal.app');

  // 1. Routes d'administration -> non autorisées en callback pédagogique
  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    return false;
  }

  // 2. Hubs généraux et transverses
  if (
    pathname === '/dashboard' ||
    pathname.startsWith('/dashboard/') ||
    pathname === '/contact' ||
    pathname === '/settings' ||
    pathname === '/mentions-legales' ||
    pathname === '/privacy' ||
    pathname === '/cookies'
  ) {
    return true;
  }

  // 3. Hubs de verticale
  if (pathname === '/college' || pathname === '/college/') {
    if (params.enrollment.audience !== 'SECONDARY' || !params.enrollment.secondaryGradeId) {
      return false;
    }
    const grade = await prisma.grade.findUnique({
      where: { id: params.enrollment.secondaryGradeId },
      select: { shortDescription: true },
    });
    return resolveSecondarySchoolSegment(grade) === 'COLLEGE';
  }

  if (pathname === '/lycee' || pathname === '/lycee/') {
    if (params.enrollment.audience !== 'SECONDARY' || !params.enrollment.secondaryGradeId) {
      return false;
    }
    const grade = await prisma.grade.findUnique({
      where: { id: params.enrollment.secondaryGradeId },
      select: { shortDescription: true },
    });
    return resolveSecondarySchoolSegment(grade) === 'LYCEE';
  }

  if (pathname === '/sante' || pathname === '/sante/') {
    return params.enrollment.audience === 'HEALTH';
  }

  if (pathname === '/annales' || pathname.startsWith('/annales/')) {
    return params.enrollment.audience === 'SECONDARY';
  }

  // 4. Sujets d'examen du Secondaire (/sujets/:id)
  const sujetMatch = pathname.match(/^\/sujets\/([a-f0-9]{24})/i);
  if (sujetMatch) {
    try {
      await assertUserCanAccessExamPaper({
        userId: params.enrollment.userId,
        examPaperId: sujetMatch[1],
        date: params.date,
      });
      return true;
    } catch {
      return false;
    }
  }

  // 5. Exercices du Secondaire (/exercices/:id)
  const exerciceMatch = pathname.match(/^\/exercices\/([a-f0-9]{24})/i);
  if (exerciceMatch) {
    try {
      await assertUserCanAccessExercise({
        userId: params.enrollment.userId,
        exerciseId: exerciceMatch[1],
        date: params.date,
      });
      return true;
    } catch {
      return false;
    }
  }

  // 6. Chapitres d'entraînement Sciences physiques
  const chapterMatch = pathname.match(/^\/entrainement\/sciences-physiques\/([^/]+)$/);
  if (chapterMatch) {
    try {
      const chapter = await prisma.chapter.findFirst({
        where: { slug: chapterMatch[1] },
        select: { id: true },
      });
      if (!chapter) return false;

      await assertUserCanAccessChapter({
        userId: params.enrollment.userId,
        chapterId: chapter.id,
        date: params.date,
      });
      return true;
    } catch {
      return false;
    }
  }

  // 7. Entraînement par niveau (/entrainement/sciences-physiques/niveaux/:levelSlug)
  const niveauMatch = pathname.match(/^\/entrainement\/sciences-physiques\/niveaux\/([^/]+)$/);
  if (niveauMatch) {
    if (params.enrollment.audience !== 'SECONDARY' || !params.enrollment.secondaryGradeId) {
      return false;
    }
    const grade = await prisma.grade.findUnique({
      where: { id: params.enrollment.secondaryGradeId },
      select: { shortDescription: true },
    });
    const levelSlug = niveauMatch[1].toLowerCase();
    const shortDesc = grade?.shortDescription.toLowerCase();
    if (levelSlug === 'terminale' && shortDesc === 'tle') return true;
    if (levelSlug === 'premiere' && shortDesc === '1re') return true;
    if (levelSlug === 'seconde' && shortDesc === '2de') return true;
    return false;
  }

  // 8. Espace Santé : UE et évaluations
  if (pathname.startsWith('/sante/ue/')) {
    if (params.enrollment.audience !== 'HEALTH') {
      return false;
    }

    // Évaluation (colles ou examens blancs)
    const mockExamMatch = pathname.match(
      /^\/sante\/ue\/([^/]+)\/(?:colles|examens-blancs)\/([^/]+)/
    );
    if (mockExamMatch) {
      try {
        await assertUserCanAccessHealthMockExam({
          userId: params.enrollment.userId,
          mockExamId: mockExamMatch[2],
          date: params.date,
        });
        return true;
      } catch {
        return false;
      }
    }

    // Accès UE
    const ueMatch = pathname.match(/^\/sante\/ue\/([^/]+)/);
    if (ueMatch) {
      try {
        await assertUserCanAccessHealthCourseUnit({
          userId: params.enrollment.userId,
          courseUnitId: ueMatch[1],
          date: params.date,
        });
        return true;
      } catch {
        return false;
      }
    }
  }

  // 9. Fail-closed strict pour toute route non reconnue
  return false;
}

/**
 * Résout canoniquement la destination d'un utilisateur après authentification ou onboarding.
 * Détecte l'absence d'affectation pour l'année active et réoriente vers /onboarding.
 */
export async function resolvePostAuthenticationDestination(params: {
  userId: string;
  callbackUrl?: string | null;
  date?: Date;
}): Promise<{ destination: string; isOnboardingRequired: boolean }> {
  const enrollment = await getCurrentUserAcademicEnrollment(params.userId, params.date);
  const safeCallback = getSafeCallbackUrl(params.callbackUrl);

  if (!enrollment) {
    const onboardingUrl = safeCallback
      ? `/onboarding?callbackUrl=${encodeURIComponent(safeCallback)}`
      : '/onboarding';
    return {
      destination: onboardingUrl,
      isOnboardingRequired: true,
    };
  }

  if (safeCallback) {
    const isCompatible = await isPathCompatibleWithEnrollment({
      path: safeCallback,
      enrollment,
      date: params.date,
    });

    if (isCompatible) {
      return {
        destination: safeCallback,
        isOnboardingRequired: false,
      };
    }
  }

  const home = await resolveEnrollmentHomePath(enrollment);
  return {
    destination: home,
    isOnboardingRequired: false,
  };
}

/**
 * Gestionnaire standardisé pour les erreurs de guard dans les pages React Server Components.
 * Redirige vers /onboarding si l'affectation annuelle est absente, ou /dashboard si le niveau est hors-scope.
 */
export function handlePedagogicalPageAccessError(
  error: unknown,
  currentPath: string
): never {
  const safePath = getSafeCallbackUrl(currentPath) ?? currentPath;
  if (
    error instanceof PedagogicalAccessError &&
    error.code === 'UNAUTHENTICATED'
  ) {
    redirect(`/log-in?callbackUrl=${encodeURIComponent(safePath)}`);
  }
  if (
    error instanceof PedagogicalAccessError &&
    error.code === 'ONBOARDING_REQUIRED'
  ) {
    redirect(`/onboarding?callbackUrl=${encodeURIComponent(safePath)}`);
  }
  redirect('/dashboard');
}

