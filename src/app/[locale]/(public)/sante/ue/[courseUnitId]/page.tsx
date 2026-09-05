import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { Badge } from '@/components/ui/badge';
import { HealthCourseUnitTabs } from '@/components/health/HealthCourseUnitTabs';
import { fetchHealthStudentCourseUnitDetail } from '@/core/health';
import { fetchHealthCourseUnitEvaluationsProgress } from '@/core/health-mock-exam/health-mock-exam.service';
import { fetchHealthCourseUnitProgressSummary } from '@/core/health/health-progress.service';
import { assertUserCanAccessHealthCourseUnit } from '@/lib/auth/assert-pedagogical-access';
import { handlePedagogicalPageAccessError } from '@/core/academic-enrollment';
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

  if (!effectiveUserId) {
    redirect(`/log-in?callbackUrl=${encodeURIComponent(`/sante/ue/${courseUnitId}`)}`);
  }

  try {
    await assertUserCanAccessHealthCourseUnit({
      userId: effectiveUserId,
      courseUnitId,
    });
  } catch (err) {
    handlePedagogicalPageAccessError(err, `/sante/ue/${courseUnitId}`);
  }

  const [courseUnit, evaluationsProgress] = await Promise.all([
    fetchHealthStudentCourseUnitDetail(courseUnitId, {
      userId: effectiveUserId,
    }),
    fetchHealthCourseUnitEvaluationsProgress({
      courseUnitId,
      userId: effectiveUserId,
    }),
  ]);

  if (!courseUnit) {
    notFound();
  }

  const progressSummary = await fetchHealthCourseUnitProgressSummary({
    courseUnit,
    evaluationsProgress,
    userId: effectiveUserId,
  });

  const subtitle = buildCourseUnitSubtitle(
    courseUnit.institutionName,
    courseUnit.programVersionLabel,
  );
  const teachingElementCount = courseUnit.teachingElements.length;
  const quizCount = courseUnit.teachingElements.reduce(
    (teachingElementTotal, teachingElement) =>
      teachingElementTotal +
      teachingElement.chapters.reduce((chapterTotal, chapter) => chapterTotal + chapter.quizCount, 0),
    0
  );
  const questionCount = courseUnit.teachingElements.reduce(
    (teachingElementTotal, teachingElement) =>
      teachingElementTotal +
      teachingElement.chapters.reduce(
        (chapterTotal, chapter) => chapterTotal + chapter.questionCount,
        0
      ),
    0
  );

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-4 pb-16 pt-10">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Pass PASS / L.AS', href: '/sante' },
            { label: courseUnit.title },
          ]}
        />

        <section className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{courseUnit.blockTitle}</Badge>
            {courseUnit.semester != null ? (
              <Badge variant="outline">Semestre {courseUnit.semester}</Badge>
            ) : null}
            {courseUnit.ects != null ? (
              <Badge variant="outline">{courseUnit.ects} ECTS</Badge>
            ) : null}
            <Badge variant="outline">{teachingElementCount} EC</Badge>
            <Badge variant="outline">{quizCount} quiz</Badge>
            <Badge variant="outline">{questionCount} questions</Badge>
          </div>
          <h1 className="text-3xl font-bold text-heading">
            {courseUnit.code ? `${courseUnit.code} · ${courseUnit.title}` : courseUnit.title}
          </h1>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:gap-2">
            <p>{subtitle}</p>
            {courseUnit.description ? (
              <>
                <span className="hidden md:inline" aria-hidden="true">
                  ·
                </span>
                <p>{courseUnit.description}</p>
              </>
            ) : null}
          </div>
        </section>

        <HealthCourseUnitTabs
          courseUnit={courseUnit}
          activeTeachingElementId={resolvedSearchParams?.ec ?? null}
          evaluationsProgress={evaluationsProgress}
          progressSummary={progressSummary}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
