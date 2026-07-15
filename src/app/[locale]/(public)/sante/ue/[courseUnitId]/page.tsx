import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { Badge } from '@/components/ui/badge';
import { HealthCourseUnitTabs } from '@/components/health/HealthCourseUnitTabs';
import { fetchHealthStudentCourseUnitDetail } from '@/core/health';
import { fetchUserPedagogicalProfileSummary } from '@/core/user';
import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';

type PageProps = {
  params: Promise<{
    courseUnitId: string;
  }>;
  searchParams?: Promise<{
    ec?: string;
  }>;
};

const buildCourseUnitSubtitle = (institutionName: string, programVersionLabel: string) => {
  const normalizedInstitution = institutionName.trim();
  const normalizedProgramVersion = programVersionLabel.trim();

  if (
    normalizedProgramVersion
      .toLocaleLowerCase('fr-FR')
      .startsWith(normalizedInstitution.toLocaleLowerCase('fr-FR'))
  ) {
    return normalizedProgramVersion;
  }

  return `${normalizedInstitution} · ${normalizedProgramVersion}`;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courseUnitId } = await params;
  const courseUnit = await fetchHealthStudentCourseUnitDetail(courseUnitId);

  if (!courseUnit) {
    return {
      title: 'UE Santé introuvable',
    };
  }

  return {
    title: `${courseUnit.code ? `${courseUnit.code} · ` : ''}${courseUnit.title} - Santé`,
  };
}

export default async function HealthCourseUnitDetailPage({
  params,
  searchParams,
}: PageProps) {
  const { courseUnitId } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  const session = await auth();
  const effectiveUserId = getSessionEffectiveUserId(session);

  if (effectiveUserId) {
    const viewerProfile = await fetchUserPedagogicalProfileSummary(effectiveUserId);

    if (viewerProfile?.audience === 'SECONDARY') {
      redirect('/dashboard');
    }
  }

  const courseUnit = await fetchHealthStudentCourseUnitDetail(courseUnitId);

  if (!courseUnit) {
    notFound();
  }

  const subtitle = buildCourseUnitSubtitle(
    courseUnit.institutionName,
    courseUnit.programVersionLabel,
  );

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-4 pb-16 pt-10">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Santé', href: '/sante' },
            { label: courseUnit.code ? `${courseUnit.code} · ${courseUnit.title}` : courseUnit.title },
          ]}
        />

        <section className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{courseUnit.blockTitle}</Badge>
            {courseUnit.semester ? <Badge variant="secondary">S{courseUnit.semester}</Badge> : null}
            {courseUnit.ects ? <Badge variant="secondary">{courseUnit.ects} ECTS</Badge> : null}
            {courseUnit.pathwayName ? <Badge variant="secondary">{courseUnit.pathwayName}</Badge> : null}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-heading">
            {courseUnit.code ? `${courseUnit.code} · ${courseUnit.title}` : courseUnit.title}
          </h1>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
          {courseUnit.description ? (
            <p className="max-w-3xl text-sm text-muted-foreground">
              {courseUnit.description}
            </p>
          ) : null}
        </section>

        <HealthCourseUnitTabs
          courseUnit={courseUnit}
          activeTeachingElementId={resolvedSearchParams?.ec ?? null}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
