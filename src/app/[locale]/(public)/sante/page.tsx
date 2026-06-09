import type { Metadata } from 'next';

import { HealthHomePage } from '@/components/health/HealthHomePage';
import { buildCanonicalUrl } from '@/lib/seo';

const canonical = buildCanonicalUrl('/sante');

export const metadata: Metadata = {
  title: 'My Exams Santé',
  description:
    'Une future plateforme d’entraînement pour les études de santé : UE, colles, examens blancs et annales corrigées.',
  alternates: canonical ? { canonical } : undefined,
};

export default function HealthPage() {
  return <HealthHomePage />;
}
