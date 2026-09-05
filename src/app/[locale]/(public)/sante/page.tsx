import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import prisma from '@/lib/db/prisma';
import { getCurrentUserAcademicEnrollment } from '@/core/academic-enrollment';
import { resolveEnrollmentHomePath } from '@/core/academic-enrollment/academic-enrollment.routing';
import { fetchHealthStudentHomeContext } from '@/core/health';
import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import { HealthHomePage } from '@/components/health/HealthHomePage';
import { buildCanonicalUrl } from '@/lib/seo';

export const dynamic = 'force-dynamic';
const canonical = buildCanonicalUrl('/sante');

export const metadata: Metadata = {
  title: 'L1 Santé — Entraînement universitaire, quiz, colles et examens blancs',
  description:
    'Entraîne-toi pour réussir ta L1 Santé : quiz par chapitre, corrections détaillées, colles et examens blancs, avec des contenus pouvant être adaptés au programme de ton université.',
  alternates: canonical ? { canonical } : undefined,
};

export default async function HealthPage() {
  const session = await auth();
  const effectiveUserId = getSessionEffectiveUserId(session);

  // 1. Visiteur non authentifié : landing publique multi-universités pure
  if (!effectiveUserId) {
    return <HealthHomePage isAuthenticated={false} />;
  }

  // 2. Utilisateur authentifié : autorité stricte de l'affectation annuelle
  const enrollment = await getCurrentUserAcademicEnrollment(effectiveUserId);

  // 2.1. Utilisateur connecté sans affectation active -> onboarding obligatoire
  if (!enrollment) {
    redirect('/onboarding?callbackUrl=%2Fsante');
  }

  // 2.2. Utilisateur connecté Secondaire -> redirection canonique vers son univers
  if (enrollment.audience === 'SECONDARY') {
    const destination = await resolveEnrollmentHomePath(enrollment);
    redirect(destination);
  }

  // 2.3. Utilisateur connecté Santé -> chargement de l'espace applicatif adapté
  let studentHome = null;
  if (enrollment.healthProgramVersionId) {
    const programVersion = await prisma.healthProgramVersion.findUnique({
      where: { id: enrollment.healthProgramVersionId },
      select: { institutionId: true },
    });
    if (programVersion?.institutionId) {
      studentHome = await fetchHealthStudentHomeContext({
        institutionId: programVersion.institutionId,
        programVersionId: enrollment.healthProgramVersionId,
        pathwayId: enrollment.healthPathwayId || null,
      });
    }
  }

  return (
    <HealthHomePage
      isAuthenticated={true}
      enrollment={enrollment}
      studentHome={studentHome}
    />
  );
}
