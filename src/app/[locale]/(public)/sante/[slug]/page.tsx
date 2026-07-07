import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import {
  HealthSectionPlaceholderPage,
} from '@/components/health/HealthSectionPlaceholderPage';
import {
  healthSectionDefinitions,
  healthSectionSlugs,
  isHealthSectionSlug,
} from '@/components/health/health-content';
import { fetchUserPedagogicalProfileSummary } from '@/core/user';
import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import { buildCanonicalUrl } from '@/lib/seo';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return healthSectionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isHealthSectionSlug(slug)) {
    return {
      title: 'Section Santé introuvable',
    };
  }

  const definition = healthSectionDefinitions[slug];
  const canonical = buildCanonicalUrl(definition.href);

  return {
    title: `${definition.title} - My Exams Santé`,
    description: definition.description,
    alternates: canonical ? { canonical } : undefined,
  };
}

export default async function HealthSectionPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isHealthSectionSlug(slug)) {
    notFound();
  }

  const session = await auth();
  const effectiveUserId = getSessionEffectiveUserId(session);

  if (effectiveUserId) {
    const viewerProfile = await fetchUserPedagogicalProfileSummary(effectiveUserId);

    if (viewerProfile?.audience === 'SECONDARY') {
      redirect('/dashboard');
    }
  }

  return <HealthSectionPlaceholderPage section={slug} />;
}
