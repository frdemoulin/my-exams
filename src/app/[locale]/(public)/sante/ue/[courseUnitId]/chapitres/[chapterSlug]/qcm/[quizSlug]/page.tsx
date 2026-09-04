import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

import { HealthChapterQuizSession } from '@/components/health/health-chapter-quiz-session';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { TrainingQuizInstructions } from '@/components/training/training-quiz-instructions';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchHealthStudentChapterDetail } from '@/core/health';
import { startOrResumeTrainingQuizSession } from '@/core/training/training-quiz-session.service';
import {
  getTrainingQuizStageBadgeClassName,
  getTrainingQuizStageLabel,
  getTrainingQuizStageStarsCount,
} from '@/core/training/training-stage';
import { assertUserCanAccessHealthCourseUnit } from '@/lib/auth/assert-pedagogical-access';
import { handlePedagogicalPageAccessError } from '@/core/academic-enrollment';
import { auth } from '@/lib/auth/auth';
import { isAdminRole } from '@/lib/auth/roles';
import { getSessionActorRole, getSessionEffectiveUserId } from '@/lib/auth/session';
import {
  formatCourseUnitLabel,
  formatTeachingElementBreadcrumbLabel,
  getHealthChapterHref,
  getSectionLabel,
} from '../../chapter-page.utils';

type PageProps = {
  params: Promise<{
    courseUnitId: string;
    chapterSlug: string;
    quizSlug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courseUnitId, chapterSlug, quizSlug } = await params;
  const chapter = await fetchHealthStudentChapterDetail({ courseUnitId, chapterSlug });

  if (!chapter) {
    return {
      title: 'Quiz Santé introuvable',
    };
  }

  const selectedQuiz = chapter.sections
    .flatMap((section) => section.quizzes)
    .find((quiz) => quiz.slug === quizSlug);

  return {
    title: selectedQuiz
      ? `Quiz - ${chapter.title} - Santé`
      : `${chapter.title} - Santé`,
  };
}

export default async function HealthChapterQuizPage({ params }: PageProps) {
  const { courseUnitId, chapterSlug, quizSlug } = await params;

  const session = await auth();
  const effectiveUserId = getSessionEffectiveUserId(session);
  const canEditQuestions = isAdminRole(getSessionActorRole(session));

  if (effectiveUserId) {
    try {
      await assertUserCanAccessHealthCourseUnit({
        userId: effectiveUserId,
        courseUnitId,
      });
    } catch (err) {
      handlePedagogicalPageAccessError(
        err,
        `/sante/ue/${courseUnitId}/chapitres/${chapterSlug}/qcm/${quizSlug}`
      );
    }
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
  const teachingElementBreadcrumbLabel = formatTeachingElementBreadcrumbLabel(
    chapter.teachingElement
  );
  const chapterHref = getHealthChapterHref({
    courseUnitId: chapter.courseUnit.id,
    chapterSlug: chapter.slug,
  });
  const courseUnitHref = `/sante/ue/${chapter.courseUnit.id}`;
  const teachingElementHref = `${courseUnitHref}?ec=${chapter.teachingElement.id}`;
  const sectionLabelById = new Map(
    chapter.sections.map((section, index) => [section.id, getSectionLabel(index)])
  );
  const availableQuizzes = chapter.sections.flatMap((section) =>
    section.quizzes.map((quiz, quizIndex) => ({ quiz, quizIndex, section }))
  );
  const selectedQuiz =
    availableQuizzes.find(({ quiz }) => quiz.slug === quizSlug) ?? null;

  if (!selectedQuiz) {
    notFound();
  }

  const quizSessionData = await startOrResumeTrainingQuizSession({
    chapterId: chapter.id,
    quizId: selectedQuiz.quiz.id,
    userId: effectiveUserId,
  });

  const selectedQuizNumber = String(selectedQuiz.quizIndex + 1);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-4 pb-16 pt-10">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Santé', href: '/sante' },
            { label: courseUnitLabel, href: courseUnitHref },
            { label: teachingElementBreadcrumbLabel, href: teachingElementHref },
            { label: chapter.title, href: chapterHref },
            { label: `Quiz ${selectedQuizNumber}` },
          ]}
        />

        <section className="space-y-3">
          <Button asChild variant="outline" size="sm" className="w-fit gap-2">
            <Link href={chapterHref}>
              <ChevronLeft className="h-4 w-4" />
              Retour au chapitre
            </Link>
          </Button>

          <Card className="rounded-3xl border-border bg-card hover:bg-card">
            <CardHeader>
              <div className="space-y-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-xl text-heading">Quiz {selectedQuizNumber}</CardTitle>
                    <p className="text-sm text-muted-foreground">{chapter.title}</p>
                  </div>
                  <div className="flex flex-wrap items-start gap-2 sm:justify-end">
                    <Badge variant="outline" className="w-fit">
                      {selectedQuiz.section.kind === 'SYNTHESIS'
                        ? 'Synthèse'
                        : `Section ${sectionLabelById.get(selectedQuiz.section.id)} – ${selectedQuiz.section.title}`}
                    </Badge>
                    <Badge variant="secondary" className="w-fit">
                      {selectedQuiz.quiz.questionCount} question
                      {selectedQuiz.quiz.questionCount > 1 ? 's' : ''}
                    </Badge>
                    {getTrainingQuizStageLabel(selectedQuiz.quiz.stage) ? (
                      <div className="inline-flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={getTrainingQuizStageBadgeClassName(selectedQuiz.quiz.stage) ?? undefined}
                        >
                          {getTrainingQuizStageLabel(selectedQuiz.quiz.stage)}
                        </Badge>
                        <span
                          className="text-sm tracking-[0.12em] text-yellow-400 dark:text-yellow-300"
                          aria-label={`${getTrainingQuizStageStarsCount(selectedQuiz.quiz.stage)} étoile${getTrainingQuizStageStarsCount(selectedQuiz.quiz.stage) > 1 ? 's' : ''}`}
                        >
                          {'★'.repeat(getTrainingQuizStageStarsCount(selectedQuiz.quiz.stage))}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
                <TrainingQuizInstructions
                  questionCount={selectedQuiz.quiz.questionCount}
                  hasMultipleFormats={
                    new Set(
                      quizSessionData.questions
                        .map((question) => question.canonicalQuestion?.format)
                        .filter(Boolean)
                    ).size > 1
                  }
                />
              </div>
            </CardHeader>
          </Card>

          <HealthChapterQuizSession
            sessionId={quizSessionData.sessionId}
            watermarkCode={quizSessionData.watermarkCode}
            chapterId={chapter.id}
            chapterSlug={chapter.slug}
            quizId={selectedQuiz.quiz.id}
            isAuthenticated={Boolean(effectiveUserId)}
            questions={quizSessionData.questions}
            correctionMode="final"
            canEditQuestions={canEditQuestions}
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
