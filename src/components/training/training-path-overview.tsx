'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Lock, UserPlus } from 'lucide-react';
import {
  type TrainingPathOverviewSection,
  type TrainingPathProgress,
} from '@/core/training';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getTrainingQuizStageLabel } from '@/core/training/training-stage';
import { cn } from '@/lib/utils';
import { deriveTrainingPathState } from './training-path-state';
import {
  createEmptyTrainingPathProgress,
  emitTrainingPathProgressChange,
  mergeTrainingPathProgress,
  readTrainingPathProgress,
  subscribeToTrainingPathProgress,
  syncGuestTrainingPathProgressToAccount,
} from './training-path-storage';

type TrainingPathOverviewProps = {
  chapterId: string;
  chapterHref: string;
  chapterSlug: string;
  initialProgress?: TrainingPathProgress;
  isAuthenticated: boolean;
  sections: TrainingPathOverviewSection[];
  targetScore: number;
};

const stageBadgeClassNames = {
  DISCOVER: 'border border-default-medium bg-neutral-secondary-medium text-heading',
  PRACTICE: 'border border-brand/20 bg-brand/10 text-fg-brand',
  MASTER: 'border border-success-subtle bg-success-soft text-fg-success-strong',
} as const;

const getStageBadgeClassName = (
  stage: TrainingPathOverviewSection['quizzes'][number]['stage']
) => {
  if (!stage) {
    return null;
  }

  return stageBadgeClassNames[stage];
};

const getSectionStatusLabel = (status: ReturnType<typeof deriveTrainingPathState>['sections'][number]['status']) => {
  if (status === 'mastered') {
    return 'Maîtrisée';
  }

  if (status === 'in-progress') {
    return 'En cours';
  }

  if (status === 'available') {
    return 'Accessible';
  }

  return 'Verrouillée';
};

const getQuizStatusLabel = (status: ReturnType<typeof deriveTrainingPathState>['sections'][number]['quizzes'][number]['status']) => {
  if (status === 'mastered') {
    return 'Validé';
  }

  if (status === 'in-progress') {
    return 'En cours';
  }

  if (status === 'available') {
    return 'Accessible';
  }

  return 'Verrouillé';
};

const sectionTimelineClassNames = {
  mastered: {
    marker: 'border-success-subtle bg-success-medium text-fg-success-strong shadow-xs',
    title: 'text-heading',
    detail: 'text-body-subtle',
    line: 'bg-success-medium',
  },
  'in-progress': {
    marker: 'border-brand bg-brand text-white shadow-xs',
    title: 'text-heading',
    detail: 'text-body',
    line: 'bg-brand-medium',
  },
  available: {
    marker: 'border-default-medium bg-neutral-tertiary-medium text-heading shadow-xs',
    title: 'text-heading',
    detail: 'text-body-subtle',
    line: 'bg-neutral-secondary-medium',
  },
  locked: {
    marker: 'border-default-medium bg-neutral-primary-medium text-body shadow-xs',
    title: 'text-body',
    detail: 'text-body-subtle',
    line: 'bg-neutral-tertiary-medium',
  },
} as const;

const getSectionKindLabel = (kind: TrainingPathOverviewSection['kind']) => {
  return kind === 'SYNTHESIS' ? 'Synthèse' : 'Grand thème';
};

const getSectionTimelineConnectorStatus = ({
  previousStatus,
  nextStatus,
}: {
  previousStatus: ReturnType<typeof deriveTrainingPathState>['sections'][number]['status'] | null;
  nextStatus: ReturnType<typeof deriveTrainingPathState>['sections'][number]['status'] | null;
}) => {
  if (!previousStatus || !nextStatus) {
    return 'locked' as const;
  }

  if (nextStatus === 'mastered') {
    return 'mastered' as const;
  }

  if (
    (previousStatus === 'mastered' || previousStatus === 'in-progress') &&
    nextStatus === 'in-progress'
  ) {
    return 'in-progress' as const;
  }

  if (previousStatus === 'mastered' && nextStatus === 'available') {
    return 'available' as const;
  }

  return 'locked' as const;
};

const getSectionTimelineDetail = ({
  completedQuizCount,
  isAuthenticated,
  section,
}: {
  completedQuizCount: number;
  isAuthenticated: boolean;
  section: ReturnType<typeof deriveTrainingPathState>['sections'][number];
}) => {
  const kindLabel = getSectionKindLabel(section.kind);

  if (section.status === 'mastered') {
    return `${kindLabel} · ${completedQuizCount}/${section.quizzes.length} QCM validés`;
  }

  if (section.status === 'in-progress') {
    return `${kindLabel} · ${completedQuizCount}/${section.quizzes.length} QCM validés`;
  }

  if (section.status === 'available') {
    return `${kindLabel} · ${section.quizzes.length} QCM à valider`;
  }

  return isAuthenticated
    ? `${kindLabel} · déblocage après la section précédente`
    : `${kindLabel} · visible mais verrouillée`;
};

const getSectionTimelineHref = (
  section: ReturnType<typeof deriveTrainingPathState>['sections'][number]
) => {
  if (!section.isAccessible) {
    return null;
  }

  const nextUsefulQuiz =
    section.quizzes.find((quiz) => quiz.status !== 'mastered') ?? section.quizzes[0] ?? null;

  return nextUsefulQuiz?.href ?? null;
};

const getSectionTimelineActionLabel = (
  section: ReturnType<typeof deriveTrainingPathState>['sections'][number]
) => {
  return section.status === 'mastered' ? 'Revoir la section' : 'Ouvrir la section';
};

const formatProgressDate = (value: string | null) => {
  if (!value) {
    return null;
  }

  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'medium',
  }).format(parsedDate);
};

export function TrainingPathOverview({
  chapterId,
  chapterHref,
  chapterSlug,
  initialProgress,
  isAuthenticated,
  sections,
  targetScore,
}: TrainingPathOverviewProps) {
  const [progress, setProgress] = useState<TrainingPathProgress>(() =>
    initialProgress ?? createEmptyTrainingPathProgress(chapterSlug)
  );
  const stepperContainerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<Record<string, HTMLLIElement | null>>({});

  useEffect(() => {
    const localProgress = readTrainingPathProgress(chapterSlug);
    const serverProgress = initialProgress ?? createEmptyTrainingPathProgress(chapterSlug);
    const nextProgress = isAuthenticated
      ? mergeTrainingPathProgress({
          chapterSlug,
          baseProgress: serverProgress,
          incomingProgress: localProgress,
        })
      : localProgress;

    setProgress(nextProgress);

    if (isAuthenticated) {
      const quizIdBySlug = new Map(
        sections.flatMap((section) =>
          section.quizzes.map((quiz) => [quiz.slug, quiz.id] as const)
        )
      );

      void syncGuestTrainingPathProgressToAccount({
        chapterId,
        chapterSlug,
        quizIdBySlug,
        serverProgress,
        targetScore,
      })
        .then((syncedProgress) => {
          setProgress(syncedProgress);
          emitTrainingPathProgressChange({
            chapterSlug,
            progress: syncedProgress,
          });
        })
        .catch(() => {});
    }

    return subscribeToTrainingPathProgress({
      chapterSlug,
      onProgressChange: setProgress,
    });
  }, [chapterId, chapterSlug, initialProgress, isAuthenticated, sections, targetScore]);
  const {
    activeSection,
    completedQuizCount,
    hasLockedSections,
    nextRecommendedQuiz,
    sections: sectionPreviews,
  } = deriveTrainingPathState({
    isAuthenticated,
    progress,
    sections,
  });
  const targetStepId = activeSection?.id ?? sectionPreviews[sectionPreviews.length - 1]?.id ?? null;

  useEffect(() => {
    const container = stepperContainerRef.current;

    if (!container || !targetStepId) {
      return;
    }

    if (container.scrollWidth <= container.clientWidth + 1) {
      return;
    }

    const targetStep = stepRefs.current[targetStepId];

    if (!targetStep) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const targetRect = targetStep.getBoundingClientRect();
    const isBeforeViewport = targetRect.left < containerRect.left;
    const isAfterViewport = targetRect.right > containerRect.right;

    if (!isBeforeViewport && !isAfterViewport) {
      return;
    }

    const centeredScrollLeft =
      targetStep.offsetLeft - (container.clientWidth - targetStep.clientWidth) / 2;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    container.scrollTo({
      left: Math.max(0, Math.min(centeredScrollLeft, maxScrollLeft)),
      behavior: 'smooth',
    });
  }, [targetStepId, sectionPreviews.length]);

  if (sections.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
        Aucun QCM n&apos;est publié pour ce chapitre pour le moment.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <span aria-hidden="true" className="text-lg leading-none">🪜</span>
              <span>Étapes du chapitre</span>
            </CardTitle>
            {!isAuthenticated ? (
              <CardDescription>
                La première section est accessible immédiatement. Les suivantes restent visibles pour montrer le parcours.
              </CardDescription>
            ) : null}
          </CardHeader>
          <CardContent>
            <div ref={stepperContainerRef} className="overflow-x-auto pb-2">
              <ol
                className="flex min-w-[68rem] items-start xl:min-w-0 xl:w-full"
                aria-label="Progression par sections"
              >
                {sectionPreviews.map((section, index) => {
                  const classes = sectionTimelineClassNames[section.status];
                  const stepHref = getSectionTimelineHref(section);
                  const previousSection = index > 0 ? sectionPreviews[index - 1] : null;
                  const nextSection = index < sectionPreviews.length - 1 ? sectionPreviews[index + 1] : null;
                  const leftConnectorClasses = sectionTimelineClassNames[
                    getSectionTimelineConnectorStatus({
                      previousStatus: previousSection?.status ?? null,
                      nextStatus: section.status,
                    })
                  ];
                  const rightConnectorClasses = sectionTimelineClassNames[
                    getSectionTimelineConnectorStatus({
                      previousStatus: section.status,
                      nextStatus: nextSection?.status ?? null,
                    })
                  ];
                  const completedQuizCount = section.quizzes.filter(
                    (quiz) => quiz.status === 'mastered'
                  ).length;

                  return (
                    <li
                      key={section.id}
                      ref={(element) => {
                        stepRefs.current[section.id] = element;
                      }}
                      className="w-44 shrink-0 xl:min-w-0 xl:flex-1"
                      aria-current={section.status === 'in-progress' ? 'step' : undefined}
                    >
                      {stepHref ? (
                        <Link
                          href={stepHref}
                          className="group block cursor-pointer rounded-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          aria-label={`${getSectionTimelineActionLabel(section)} : ${section.title}`}
                          title={getSectionTimelineActionLabel(section)}
                        >
                          <div className="flex items-center">
                            <div
                              className={cn(
                                'h-px flex-1',
                                index === 0 ? 'bg-transparent' : leftConnectorClasses.line
                              )}
                            />
                            <span
                              className={cn(
                                'mx-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-transform group-hover:scale-[1.04]',
                                classes.marker
                              )}
                            >
                              {section.label}
                            </span>
                            <div
                              className={cn(
                                'h-px flex-1',
                                index === sectionPreviews.length - 1
                                  ? 'bg-transparent'
                                  : rightConnectorClasses.line
                              )}
                            />
                          </div>
                          <div className="mt-3 rounded-base px-1 text-center transition-colors group-hover:bg-neutral-secondary-soft/40 xl:px-3">
                            <p
                              className={cn(
                                'text-sm font-semibold leading-5 transition-colors group-hover:text-heading',
                                classes.title
                              )}
                            >
                              {section.title}
                            </p>
                            <p className={cn('mt-1 text-[11px] leading-4', classes.detail)}>
                              {getSectionTimelineDetail({
                                completedQuizCount,
                                isAuthenticated,
                                section,
                              })}
                            </p>
                            <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-body transition-colors group-hover:text-heading">
                              <ArrowRight className="h-3 w-3" />
                              <span>{getSectionTimelineActionLabel(section)}</span>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <>
                          <div className="flex items-center">
                            <div
                              className={cn(
                                'h-px flex-1',
                                index === 0 ? 'bg-transparent' : leftConnectorClasses.line
                              )}
                            />
                            <span
                              className={cn(
                                'mx-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold',
                                classes.marker
                              )}
                            >
                              {section.label}
                            </span>
                            <div
                              className={cn(
                                'h-px flex-1',
                                index === sectionPreviews.length - 1
                                  ? 'bg-transparent'
                                  : rightConnectorClasses.line
                              )}
                            />
                          </div>
                          <div className="mt-3 px-1 text-center xl:px-3">
                            <p className={cn('text-sm font-semibold leading-5', classes.title)}>
                              {section.title}
                            </p>
                            <p className={cn('mt-1 text-[11px] leading-4', classes.detail)}>
                              {getSectionTimelineDetail({
                                completedQuizCount,
                                isAuthenticated,
                                section,
                              })}
                            </p>
                          </div>
                        </>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <span aria-hidden="true" className="text-lg leading-none">🎯</span>
              <span>Prochain objectif</span>
            </CardTitle>
            <CardDescription>
              {isAuthenticated
                ? 'Tous les QCM publiés restent accessibles. Ce bloc te recommande simplement la prochaine étape utile.'
                : 'Commence par la première section pour découvrir le parcours.'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {nextRecommendedQuiz ? (
              <>
                <div className="space-y-2 rounded-xl border border-border bg-background/70 p-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{activeSection?.label}</Badge>
                    <Badge variant="outline">
                      {nextRecommendedQuiz.questionCount} question
                      {nextRecommendedQuiz.questionCount > 1 ? 's' : ''}
                    </Badge>
                  </div>
                  <p className="font-semibold text-heading">{nextRecommendedQuiz.title}</p>
                  {nextRecommendedQuiz.description ? (
                    <p className="text-sm text-muted-foreground">
                      {nextRecommendedQuiz.description}
                    </p>
                  ) : null}
                </div>

                <Button asChild className="w-full gap-2">
                  <Link href={nextRecommendedQuiz.href}>
                    {completedQuizCount === 0 ? 'Démarrer le parcours' : 'Continuer le parcours'}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </>
            ) : !isAuthenticated && hasLockedSections ? (
              <div className="space-y-3 rounded-xl border border-brand/20 bg-brand-soft/10 p-4 text-heading">
                <p className="font-semibold">La suite du chapitre est prête</p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Tu as atteint la limite de l&apos;aperçu gratuit. Connecte-toi pour débloquer les prochaines sections.
                </p>
                <Button asChild className="w-full gap-2">
                  <Link href="/log-in">
                    Débloquer la suite
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <p className="font-semibold">Parcours terminé</p>
                </div>
                <p className="text-sm leading-6 opacity-90">
                  Tous les QCM de ce chapitre ont été validés sur ce navigateur.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={chapterHref}>Revenir au chapitre</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {sectionPreviews.map((section) => (
          <Card key={section.id}>
            <CardHeader>
              <div className="space-y-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <CardTitle className="min-w-0 flex-1 text-lg">
                    {section.label} - {section.title}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    <Badge
                      variant={section.status === 'locked' ? 'outline' : 'secondary'}
                      className="w-fit"
                    >
                      {getSectionStatusLabel(section.status)}
                    </Badge>
                    <Badge variant="outline" className="w-fit">
                      {section.kind === 'SYNTHESIS' ? 'Synthèse' : 'Grand thème'}
                    </Badge>
                    <Badge variant="outline" className="w-fit">
                      {section.quizzes.filter((quiz) => quiz.status === 'mastered').length}
                      /{section.quizzes.length} validé
                      {section.quizzes.length > 1 ? 's' : ''}
                    </Badge>
                  </div>
                </div>
                {section.description ? (
                  <CardDescription>{section.description}</CardDescription>
                ) : null}
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[72px] text-center">#</TableHead>
                      <TableHead>QCM</TableHead>
                      <TableHead className="w-[140px] text-center">Questions</TableHead>
                      <TableHead className="w-[180px] text-center">Étape</TableHead>
                      <TableHead className="w-[160px] text-center">Statut</TableHead>
                      <TableHead className="w-[220px]">Progression</TableHead>
                      <TableHead className="w-[160px] text-center">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {section.quizzes.map((quiz, quizIndex) => (
                      <TableRow key={quiz.id}>
                        <TableCell className="text-center font-medium text-muted-foreground">
                          #{quizIndex + 1}
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <p className="font-semibold text-heading">{quiz.title}</p>
                            {quiz.description ? (
                              <p className="text-sm text-muted-foreground">
                                {quiz.description}
                              </p>
                            ) : null}
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline" className="w-fit">
                            {quiz.questionCount} question
                            {quiz.questionCount > 1 ? 's' : ''}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          {quiz.stage ? (
                            <Badge
                              variant="outline"
                              className={getStageBadgeClassName(quiz.stage) ?? undefined}
                            >
                              {getTrainingQuizStageLabel(quiz.stage)}
                            </Badge>
                          ) : (
                            <span className="text-sm text-muted-foreground">
                              Non définie
                            </span>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge
                            variant={
                              quiz.status === 'locked' ? 'outline' : 'secondary'
                            }
                            className="w-fit"
                          >
                            {getQuizStatusLabel(quiz.status)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {quiz.progress ? (
                            <div className="space-y-1 text-xs text-muted-foreground">
                              <p>
                                Meilleur score: {quiz.progress.bestScore}/
                                {quiz.progress.totalQuestions} ({quiz.progress.successRate}%)
                              </p>
                              {formatProgressDate(quiz.progress.completedAt) ? (
                                <p>
                                  Dernière tentative le{' '}
                                  {formatProgressDate(quiz.progress.completedAt)}
                                </p>
                              ) : null}
                              {formatProgressDate(quiz.progress.validatedAt) ? (
                                <p>
                                  Validé le{' '}
                                  {formatProgressDate(quiz.progress.validatedAt)}
                                </p>
                              ) : null}
                            </div>
                          ) : (
                            <span className="text-sm text-muted-foreground">
                              Aucune tentative
                            </span>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {quiz.status === 'locked' ? (
                            <Badge variant="outline" className="w-fit gap-1 px-3 py-2">
                              <Lock className="h-3.5 w-3.5" />
                              Étape suivante
                            </Badge>
                          ) : (
                            <Button
                              asChild
                              size="sm"
                              variant={quiz.status === 'mastered' ? 'outline' : 'default'}
                              className="gap-2"
                            >
                              <Link href={quiz.href}>
                                {quiz.status === 'mastered' ? 'Revoir' : 'Commencer'}
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        ))}
        {!isAuthenticated && hasLockedSections ? (
          <div className="max-w-md">
            <Card className="border-brand/20 bg-neutral-primary-soft">
              <CardHeader>
                <div className="flex items-center gap-2 text-heading">
                  <UserPlus className="h-4 w-4" />
                  <CardTitle className="text-base">Débloque la suite du chapitre</CardTitle>
                </div>
                <CardDescription>
                  La première section est ouverte. Crée un compte gratuit pour continuer le parcours et suivre ta progression.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2 text-sm">
                  <Badge variant="outline">
                    {sectionPreviews.filter((section) => section.status === 'locked').length}{' '}
                    section{sectionPreviews.filter((section) => section.status === 'locked').length > 1 ? 's' : ''} à débloquer
                  </Badge>
                </div>
                <Button asChild className="w-full gap-2">
                  <Link href="/log-in">
                    Créer un compte gratuit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : null}
      </div>
    </div>
  );
}