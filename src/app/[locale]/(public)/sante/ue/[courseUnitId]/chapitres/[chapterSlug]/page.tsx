import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { TrainingQuizActionButton } from '@/components/training/training-quiz-action-button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fetchHealthStudentChapterDetail } from '@/core/health';
import { getTrainingQuizStageBadgeClassName, getTrainingQuizStageLabel } from '@/core/training/training-stage';
import { fetchUserPedagogicalProfileSummary } from '@/core/user';
import { auth } from '@/lib/auth/auth';
import { isAdminRole } from '@/lib/auth/roles';
import { getSessionActorRole, getSessionEffectiveUserId } from '@/lib/auth/session';
import {
  formatCourseUnitLabel,
  formatTeachingElementBreadcrumbLabel,
  formatTeachingElementLabel,
  getHealthChapterHref,
  getHealthChapterQuizHref,
  getSectionLabel,
} from './chapter-page.utils';

type PageProps = {
  params: Promise<{
    courseUnitId: string;
    chapterSlug: string;
  }>;
  searchParams?: Promise<{
    quiz?: string;
  }>;
};

const formatAttemptsLabel = (attemptsCount: number) =>
  `${attemptsCount} tentative${attemptsCount > 1 ? 's' : ''}`;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courseUnitId, chapterSlug } = await params;
  const chapter = await fetchHealthStudentChapterDetail({ courseUnitId, chapterSlug });

  if (!chapter) {
    return {
      title: 'Chapitre Santé introuvable',
    };
  }

  return {
    title: `${chapter.title ?? chapter.shortTitle} - Santé`,
  };
}

export default async function HealthChapterDetailPage({
  params,
  searchParams,
}: PageProps) {
  const { courseUnitId, chapterSlug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  const session = await auth();
  const effectiveUserId = getSessionEffectiveUserId(session);
  const canEditQuestions = isAdminRole(getSessionActorRole(session));

  if (effectiveUserId) {
    const viewerProfile = await fetchUserPedagogicalProfileSummary(effectiveUserId);

    if (viewerProfile?.audience === 'SECONDARY') {
      redirect('/dashboard');
    }
  }

  if (resolvedSearchParams?.quiz) {
    redirect(
      getHealthChapterQuizHref({
        courseUnitId,
        chapterSlug,
        quizSlug: resolvedSearchParams.quiz,
      })
    );
  }

  const chapter = await fetchHealthStudentChapterDetail({
    courseUnitId,
    chapterSlug,
    userId: effectiveUserId,
  });

  if (!chapter) {
    notFound();
  }

  const courseUnitLabel = formatCourseUnitLabel(chapter.courseUnit);
  const teachingElementLabel = formatTeachingElementLabel(chapter.teachingElement);
  const teachingElementBreadcrumbLabel = formatTeachingElementBreadcrumbLabel(
    chapter.teachingElement
  );
  const quizCount = chapter.sections.reduce(
    (total, section) => total + section.quizzes.length,
    0
  );
  const chapterHref = getHealthChapterHref({
    courseUnitId: chapter.courseUnit.id,
    chapterSlug: chapter.slug,
  });
  const courseUnitHref = `/sante/ue/${chapter.courseUnit.id}`;
  const sectionLabelById = new Map(
    chapter.sections.map((section, index) => [section.id, getSectionLabel(index)])
  );

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-4 pb-16 pt-10">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Santé', href: '/sante' },
            { label: courseUnitLabel, href: courseUnitHref },
            { label: teachingElementBreadcrumbLabel },
            { label: chapter.title },
          ]}
        />

        <section className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{teachingElementLabel}</Badge>
            <Badge variant="secondary">
              {chapter.sections.length} section
              {chapter.sections.length > 1 ? 's' : ''}
            </Badge>
            <Badge variant="secondary">{quizCount} QCM</Badge>
            <Badge variant="secondary">
              {chapter.questionCount} question
              {chapter.questionCount > 1 ? 's' : ''}
            </Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-heading md:text-4xl">
            {chapter.title}
          </h1>
          {chapter.description ? (
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              {chapter.description}
            </p>
          ) : (
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              Retrouve les sections du chapitre et ouvre directement le QCM utile pour ta révision.
            </p>
          )}
        </section>

        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight text-heading">
              Parcours du chapitre
            </h2>
            <p className="text-sm text-muted-foreground">
              Les QCM sont regroupés par section pour te permettre d&apos;aller vite vers la bonne partie du cours.
            </p>
          </div>

          {chapter.sections.length > 0 ? (
            chapter.sections.map((section, sectionIndex) => (
              <Card key={section.id} className="rounded-3xl border-border bg-card hover:bg-card">
                <CardHeader>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <CardTitle className="min-w-0 flex-1 text-lg text-heading">
                      {section.kind === 'SYNTHESIS'
                        ? `Synthèse – ${section.title}`
                        : `Section ${sectionLabelById.get(section.id) ?? getSectionLabel(sectionIndex)} – ${section.title}`}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                      <Badge variant="secondary" className="w-fit">
                        {section.quizzes.length} QCM
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {section.quizzes.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[72px] text-center">#</TableHead>
                          <TableHead className="w-[140px] text-center">QUESTIONS</TableHead>
                          <TableHead className="w-[180px] text-center">ÉTAPE</TableHead>
                          <TableHead className="w-[180px] text-center">STATS</TableHead>
                          <TableHead className="w-[160px] text-center">ACTION</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {section.quizzes.map((quiz, quizIndex) => (
                          <TableRow id={`quiz-${quiz.slug}`} key={quiz.id}>
                            <TableCell className="text-center font-medium text-muted-foreground">
                              {quizIndex + 1}
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge variant="outline" className="w-fit">
                                {quiz.questionCount} question
                                {quiz.questionCount > 1 ? 's' : ''}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-center">
                              {getTrainingQuizStageLabel(quiz.stage) ? (
                                <Badge
                                  variant="outline"
                                  className={getTrainingQuizStageBadgeClassName(quiz.stage) ?? undefined}
                                >
                                  {getTrainingQuizStageLabel(quiz.stage)}
                                </Badge>
                              ) : (
                                <span className="text-sm text-muted-foreground">Non définie</span>
                              )}
                            </TableCell>
                            <TableCell className="text-center">
                              {effectiveUserId ? (
                                quiz.progress && quiz.progress.attemptsCount > 0 ? (
                                  <div className="flex flex-col items-center gap-1 text-sm">
                                    <Badge variant="outline" className="w-fit">
                                      {formatAttemptsLabel(quiz.progress.attemptsCount)}
                                    </Badge>
                                    <span className="text-muted-foreground">
                                      {quiz.progress.successRate}% max
                                    </span>
                                  </div>
                                ) : (
                                  <span className="text-sm text-muted-foreground">
                                    Aucune tentative
                                  </span>
                                )
                              ) : (
                                <span className="text-sm text-muted-foreground">
                                  Non connecté
                                </span>
                              )}
                            </TableCell>
                            <TableCell className="text-center">
                              <TrainingQuizActionButton
                                href={getHealthChapterQuizHref({
                                  courseUnitId,
                                  chapterSlug: chapter.slug,
                                  quizSlug: quiz.slug,
                                })}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Aucun QCM publié dans cette section.
                    </p>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">
              Aucune section publiée pour ce chapitre.
            </p>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
