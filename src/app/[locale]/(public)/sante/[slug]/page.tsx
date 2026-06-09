import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  HealthSectionPlaceholderPage,
} from '@/components/health/HealthSectionPlaceholderPage';
import {
  healthSectionDefinitions,
  healthSectionSlugs,
  isHealthSectionSlug,
} from '@/components/health/health-content';
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

  return <HealthSectionPlaceholderPage section={slug} />;
}
