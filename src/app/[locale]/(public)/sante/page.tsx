import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { fetchUserPedagogicalProfileContext } from '@/core/user';
import { fetchHealthStudentHomeContext } from '@/core/health';
import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import { HealthHomePage } from '@/components/health/HealthHomePage';
import { buildCanonicalUrl } from '@/lib/seo';

const canonical = buildCanonicalUrl('/sante');

export const metadata: Metadata = {
  title: 'My Exams Santé',
  description:
    'Une future plateforme d’entraînement pour les études de santé : UE, colles, examens blancs et annales corrigées.',
  alternates: canonical ? { canonical } : undefined,
};

export default async function HealthPage() {
  const session = await auth();
  const effectiveUserId = getSessionEffectiveUserId(session);
  const viewerProfile = effectiveUserId
    ? await fetchUserPedagogicalProfileContext(effectiveUserId)
    : null;

  if (viewerProfile?.summary.audience === 'SECONDARY') {
    redirect('/dashboard');
  }

  const studentHome = viewerProfile?.profile.healthInstitutionId
    ? await fetchHealthStudentHomeContext({
        institutionId: viewerProfile.profile.healthInstitutionId,
        programVersionId: viewerProfile.profile.healthProgramVersionId || null,
        pathwayId: viewerProfile.profile.healthPathwayId || null,
      })
    : null;

  return (
    <HealthHomePage
      isAuthenticated={Boolean(effectiveUserId)}
      viewerProfile={viewerProfile?.summary ?? null}
      studentHome={studentHome}
    />
  );
}
