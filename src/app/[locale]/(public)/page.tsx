import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import HomePage from '@/components/pages/HomePage';
import { buildCanonicalUrl } from '@/lib/seo';
import { APP_DESCRIPTION, APP_NAME } from '@/config/app';
import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import { resolveHomeTrainingCtaDestination } from '@/core/academic-enrollment';

export const dynamic = 'force-dynamic';
const canonical = buildCanonicalUrl('/');

export const metadata: Metadata = {
  title: {
    absolute: `${APP_NAME} — Plateforme d’entraînement du collège à la L1 Santé`,
  },
  description: APP_DESCRIPTION,
  alternates: canonical ? { canonical } : undefined,
};

export default async function Page() {
  noStore();
  const session = await auth();
  const effectiveUserId = getSessionEffectiveUserId(session);
  const trainingDestination = await resolveHomeTrainingCtaDestination({
    userId: effectiveUserId,
  });

  return <HomePage trainingDestination={trainingDestination} />;
}

