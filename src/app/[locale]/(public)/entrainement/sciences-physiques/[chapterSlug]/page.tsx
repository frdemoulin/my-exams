import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import getSession from '@/lib/auth/get-session';
import {
  fetchSciencePhysicsTrainingChapterBySlug,
  fetchSciencePhysicsTrainingPathProgressForChapter,
  formatTrainingLevelLabel,
  getSciencePhysicsTrainingLevelPath,
  type TrainingChapterSection,
  type TrainingPathOverviewSection,
  type TrainingQuiz,
} from '@/core/training';
import { getTrainingQuizStageLabel } from '@/core/training/training-stage';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { TrainingPathOverview } from '@/components/training/training-path-overview';
import { TrainingPathProgressCard } from '@/components/training/training-path-progress-card';
import { TrainingPathQuizSession } from '@/components/training/training-path-quiz-session';
import { buildCanonicalUrl } from '@/lib/seo';
import { cn } from '@/lib/utils';

type ResolvedSearchParams = {
  quiz?: string;
  qcm?: string;
};

type QuizWithSection = {
  quiz: TrainingQuiz;
  section: TrainingChapterSection;
};

const quizStageBadgeColors = {
  DISCOVER: 'border border-default-medium bg-neutral-secondary-medium text-heading',
  PRACTICE: 'border border-brand/20 bg-brand/10 text-fg-brand',
  MASTER: 'border border-success-subtle bg-success-soft text-fg-success-strong',
} as const;

const getQuizStageBadgeClassName = (stage: TrainingQuiz['stage']) => {
  if (!stage) {
    return undefined;
  }

  return quizStageBadgeColors[stage];
};

const getSectionLabel = (index: number) => {
  let value = index + 1;
  let label = '';

  while (value > 0) {
    const remainder = (value - 1) % 26;
    label = String.fromCharCode(65 + remainder) + label;
    value = Math.floor((value - 1) / 26);
  }

  return label;
};

const getSciencePhysicsTrainingChapterHref = ({
  chapterSlug,
  quizSlug,
}: {
  chapterSlug: string;
  quizSlug?: string;
}) => {
  const searchParams = new URLSearchParams();

  if (quizSlug) {
    searchParams.set('quiz', quizSlug);
  }

  const query = searchParams.toString();

  return query
    ? `/entrainement/sciences-physiques/${chapterSlug}?${query}`
    : `/entrainement/sciences-physiques/${chapterSlug}`;
};

type PageProps = {
  params: Promise<{
    chapterSlug: string;
  }>;
  searchParams?: Promise<ResolvedSearchParams>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { chapterSlug } = await params;
  const chapter = await fetchSciencePhysicsTrainingChapterBySlug(chapterSlug);

  if (!chapter) {
    return {
      title: 'Chapitre introuvable',
    };
  }

  const canonical = buildCanonicalUrl(
    `/entrainement/sciences-physiques/${chapter.slug}`
  );

  return {
    title: `${chapter.title} - Entraînement`,
    description: `QCM d'entraînement en sciences physiques : ${chapter.title}.`,
    alternates: canonical ? { canonical } : undefined,
  };
}

export default async function SciencePhysicsTrainingChapterPage({
  params,
  searchParams,
}: PageProps) {
  noStore();
  const { chapterSlug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const session = await getSession();
  const chapter = await fetchSciencePhysicsTrainingChapterBySlug(chapterSlug);

  if (!chapter) {
    notFound();
  }

  const userId = session?.user?.id ?? null;
  const isAuthenticated = Boolean(userId);

  const availableQuizzes: QuizWithSection[] = chapter.sections.flatMap((section) =>
    section.quizzes.map((quiz) => ({ quiz, section }))
  );
  const selectedQuizNumber = Number.parseInt(resolvedSearchParams?.qcm ?? '', 10);
  const selectedQuizBySlug = resolvedSearchParams?.quiz
    ? availableQuizzes.find(({ quiz }) => quiz.slug === resolvedSearchParams.quiz) ?? null
    : null;
  const selectedQuizByIndex =
    selectedQuizBySlug ||
    !Number.isInteger(selectedQuizNumber) ||
    selectedQuizNumber < 1 ||
    selectedQuizNumber > availableQuizzes.length
      ? null
      : availableQuizzes[selectedQuizNumber - 1];
  const selectedQuiz = selectedQuizBySlug ?? selectedQuizByIndex;
  const selectedQuizQuestions = selectedQuiz?.quiz.questions ?? null;
  const selectedQuizStage = selectedQuiz?.quiz.stage ?? null;
  const chapterHref = getSciencePhysicsTrainingChapterHref({
    chapterSlug: chapter.slug,
  });
  const levelHref = getSciencePhysicsTrainingLevelPath(chapter.level);
  const levelLabel = formatTrainingLevelLabel(chapter.level);
  const pathTargetScore = 70;
  const themeSectionCount = chapter.sections.filter(
    (section) => section.kind === 'THEME'
  ).length;
  const synthesisSectionCount = chapter.sections.filter(
    (section) => section.kind === 'SYNTHESIS'
  ).length;
  const sectionLabelById = new Map(
    chapter.sections.map((section, index) => [section.id, getSectionLabel(index)])
  );
  const pathSections: TrainingPathOverviewSection[] = chapter.sections
    .filter((section) => section.quizzes.length > 0)
    .map((section) => ({
      id: section.id,
      title: section.title,
      description: section.description,
      kind: section.kind,
      order: section.order,
      label: sectionLabelById.get(section.id) ?? getSectionLabel(section.order - 1),
      quizzes: section.quizzes.map((quiz) => ({
        id: quiz.id,
        slug: quiz.slug,
        title: quiz.title,
        description: quiz.description,
        order: quiz.order,
        questionCount: quiz.questions.length,
        stage: quiz.stage,
        href: getSciencePhysicsTrainingChapterHref({
          chapterSlug: chapter.slug,
          quizSlug: quiz.slug,
        }),
      })),
    }));
  const initialProgress = userId
    ? await fetchSciencePhysicsTrainingPathProgressForChapter({
        chapterId: chapter.id,
        chapterSlug: chapter.slug,
        userId,
      })
    : undefined;
  const mainWidthClassName = 'max-w-6xl';

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className={`mx-auto flex w-full ${mainWidthClassName} flex-1 flex-col gap-6 px-4 pb-16 pt-10`}>
        <div className="space-y-3">
          <PublicBreadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Entraînement', href: '/entrainement' },
              { label: 'Sciences physiques', href: '/entrainement/sciences-physiques' },
              { label: levelLabel, href: levelHref },
              { label: chapter.title },
            ]}
          />

          <Button asChild variant="ghost" size="sm" className="w-fit gap-2">
            <Link href={levelHref}>
              <ChevronLeft className="h-4 w-4" />
              Retour au niveau {levelLabel}
            </Link>
          </Button>
        </div>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="max-w-4xl space-y-4">
            <div className="space-y-3">
              <Badge variant="secondary" className="w-fit">
                Chapitre {chapter.order} · {levelLabel}
              </Badge>
              <h1 className="text-3xl font-semibold tracking-tight text-heading md:text-4xl">
                {chapter.title}
              </h1>
              <p className="text-sm leading-6 text-muted-foreground">
                {selectedQuizQuestions
                  ? isAuthenticated
                    ? 'Ce QCM fait partie du parcours recommandé du chapitre, mais tu peux aussi naviguer librement entre les QCM publiés. Les corrections sont immédiates et les formules restent rendues en TeX pour une écriture scientifique lisible.'
                    : 'QCM du parcours du chapitre, avec correction immédiate et formules rendues en TeX pour garder une écriture scientifique lisible.'
                  : isAuthenticated
                    ? 'Tous les QCM publiés sont accessibles à tout moment. Le parcours te recommande un ordre de travail section par section et te permet de suivre ta progression.'
                    : 'Commence par la première section. Les suivantes restent visibles pour te montrer le parcours complet du chapitre.'}
              </p>
              <p className="text-sm font-medium text-heading">
                Règle des QCM : une seule réponse est attendue pour chaque question.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm">
              <Badge variant="secondary">{chapter.quizCount} QCM</Badge>
              <Badge variant="secondary">
                {chapter.questionCount} question{chapter.questionCount > 1 ? 's' : ''}
              </Badge>
              <Badge variant="outline">
                {themeSectionCount} th&egrave;me{themeSectionCount > 1 ? 's' : ''}
              </Badge>
              {synthesisSectionCount > 0 ? (
                <Badge variant="outline">
                  {synthesisSectionCount}{' '}synth&egrave;se{synthesisSectionCount > 1 ? 's' : ''}
                </Badge>
              ) : null}
              {selectedQuizStage ? (
                <Badge
                  variant="outline"
                  className={getQuizStageBadgeClassName(selectedQuizStage)}
                >
                  {getTrainingQuizStageLabel(selectedQuizStage)}
                </Badge>
              ) : null}
            </div>
          </div>

          <TrainingPathProgressCard
            chapterId={chapter.id}
            chapterSlug={chapter.slug}
            initialProgress={initialProgress}
            isAuthenticated={isAuthenticated}
            sections={pathSections}
          />
        </section>

        {selectedQuiz ? (
          <div className="space-y-6">
            <div className="space-y-3">
              <Button asChild variant="outline" size="sm" className="w-fit gap-2">
                <Link href={chapterHref}>
                  <ChevronLeft className="h-4 w-4" />
                  Retour au chapitre
                </Link>
              </Button>

              <Card>
                <CardHeader>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-xl">{selectedQuiz.quiz.title}</CardTitle>
                        {selectedQuiz.quiz.description ? (
                          <CardDescription>
                            {selectedQuiz.quiz.description}
                          </CardDescription>
                        ) : null}
                      </div>
                      <div className="flex flex-wrap items-start gap-2 sm:justify-end">
                        <Badge variant="secondary" className="w-fit">
                          {selectedQuiz.quiz.questions.length} question
                          {selectedQuiz.quiz.questions.length > 1 ? 's' : ''}
                        </Badge>
                        {selectedQuizStage ? (
                          <Badge
                            variant="outline"
                            className={cn(
                              'w-fit',
                              getQuizStageBadgeClassName(selectedQuizStage)
                            )}
                          >
                            {getTrainingQuizStageLabel(selectedQuizStage)}
                          </Badge>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="w-fit">
                        {selectedQuiz.section.kind === 'SYNTHESIS'
                          ? 'Synthèse'
                          : 'Grand thème'}
                      </Badge>
                      <Badge variant="secondary" className="w-fit">
                        {sectionLabelById.get(selectedQuiz.section.id)} - {selectedQuiz.section.title}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <TrainingPathQuizSession
              chapterId={chapter.id}
              chapterHref={chapterHref}
              chapterSlug={chapter.slug}
              initialProgress={initialProgress}
              isAuthenticated={isAuthenticated}
              sections={pathSections}
              questions={selectedQuiz.quiz.questions}
              quizId={selectedQuiz.quiz.id}
              quizSlug={selectedQuiz.quiz.slug}
              targetScore={pathTargetScore}
            />
          </div>
        ) : (
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight text-heading">
                Parcours du chapitre
              </h2>
              <p className="text-sm text-muted-foreground">
                {isAuthenticated
                  ? `Tous les QCM publiés sont accessibles. Si tu veux être guidé, le parcours te recommande un ordre de progression et vise ${pathTargetScore}% par QCM pour valider chaque étape.`
                  : 'La première section est ouverte. Les suivantes restent visibles pour te montrer le chapitre et t’inciter à poursuivre.'}
              </p>
            </div>

            <TrainingPathOverview
              chapterId={chapter.id}
              chapterHref={chapterHref}
              chapterSlug={chapter.slug}
              initialProgress={initialProgress}
              isAuthenticated={isAuthenticated}
              sections={pathSections}
              targetScore={pathTargetScore}
            />
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
