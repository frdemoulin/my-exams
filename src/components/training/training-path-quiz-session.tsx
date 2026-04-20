'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Lock, UserPlus } from 'lucide-react';
import type { TrainingPathProgress } from '@/core/training';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { deriveTrainingPathState } from './training-path-state';
import { QuizSession } from './quiz-session';
import {
  emitTrainingPathProgressChange,
  createEmptyTrainingPathProgress,
  mergeTrainingPathProgress,
  readTrainingPathProgress,
  subscribeToTrainingPathProgress,
  syncGuestTrainingPathProgressToAccount,
  updateTrainingPathProgress,
} from './training-path-storage';
import type { TrainingPathOverviewSection } from '@/core/training';

type TrainingPathQuizSessionProps = {
  chapterId: string;
  chapterHref: string;
  chapterSlug: string;
  initialProgress?: TrainingPathProgress;
  isAuthenticated: boolean;
  sections: TrainingPathOverviewSection[];
  questions: Parameters<typeof QuizSession>[0]['questions'];
  quizId: string;
  quizSlug: string;
  targetScore: number;
};

export function TrainingPathQuizSession({
  chapterId,
  chapterHref,
  chapterSlug,
  initialProgress,
  isAuthenticated,
  sections,
  questions,
  quizId,
  quizSlug,
  targetScore,
}: TrainingPathQuizSessionProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [progress, setProgress] = useState<TrainingPathProgress>(() =>
    initialProgress ?? createEmptyTrainingPathProgress(chapterSlug)
  );

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
    setIsHydrated(true);

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

  const derivedState = useMemo(
    () =>
      deriveTrainingPathState({
        isAuthenticated,
        progress,
        sections,
      }),
    [isAuthenticated, progress, sections]
  );
  const currentSectionIndex = derivedState.sections.findIndex((section) =>
    section.quizzes.some((quiz) => quiz.slug === quizSlug)
  );
  const currentSection =
    currentSectionIndex >= 0 ? derivedState.sections[currentSectionIndex] : null;
  const currentQuiz = currentSection?.quizzes.find((quiz) => quiz.slug === quizSlug) ?? null;
  const remainingCurrentSectionQuiz =
    currentSection?.quizzes.find(
      (quiz) => quiz.slug !== quizSlug && quiz.status !== 'mastered'
    ) ?? null;
  const nextQuizInLaterSections =
    currentSectionIndex >= 0
      ? derivedState.sections
          .slice(currentSectionIndex + 1)
          .filter((section) => section.isAccessible)
          .flatMap((section) => section.quizzes)
          .find((quiz) => quiz.status !== 'mastered') ?? null
      : null;
  const nextQuizHref =
    remainingCurrentSectionQuiz?.href ?? nextQuizInLaterSections?.href ?? null;

  const handleAttemptComplete = async ({
    score,
    totalQuestions,
  }: {
    score: number;
    targetScore: number;
    totalQuestions: number;
  }) => {
    if (!isAuthenticated) {
      const nextProgress = updateTrainingPathProgress({
        chapterSlug,
        quizSlug,
        score,
        targetScore,
        totalQuestions,
      });

      setProgress(nextProgress);
      return;
    }

    try {
      const response = await fetch('/api/training/path-progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chapterId,
          chapterSlug,
          quizId,
          score,
          targetScore,
          totalQuestions,
        }),
      });

      if (!response.ok) {
        return;
      }

      const payload = (await response.json()) as {
        progress?: TrainingPathProgress;
      };

      if (!payload.progress) {
        return;
      }

      setProgress(payload.progress);
      emitTrainingPathProgressChange({
        chapterSlug,
        progress: payload.progress,
      });
    } catch {
      return;
    }
  };

  if (!isHydrated) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground shadow-sm">
        Vérification de la progression du parcours...
      </div>
    );
  }

  const isAccessible = Boolean(currentSection?.isAccessible && currentQuiz);

  if (!isAccessible) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 text-heading">
            <Lock className="h-4 w-4" />
            <CardTitle className="text-base">Section verrouillée</CardTitle>
          </div>
          <CardDescription>
            {isAuthenticated
              ? 'Termine la section en cours pour débloquer la suivante.'
              : 'La première section est accessible gratuitement. Connecte-toi pour débloquer la suite du chapitre.'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2 text-sm">
            <Badge variant="outline">Objectif {targetScore}%</Badge>
            {derivedState.activeSection ? (
              <Badge variant="secondary">Section actuelle du parcours</Badge>
            ) : (
              <Badge variant="secondary">Parcours terminé</Badge>
            )}
          </div>

          {derivedState.activeSection ? (
            <div className="space-y-2 rounded-xl border border-border bg-background/70 p-4">
              <p className="text-sm text-muted-foreground">Section à travailler maintenant</p>
              <p className="font-semibold text-heading">
                {derivedState.activeSection.label} - {derivedState.activeSection.title}
              </p>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-2">
            {derivedState.nextRecommendedQuiz ? (
              <Button asChild className="gap-2">
                <Link href={derivedState.nextRecommendedQuiz.href}>
                  Continuer le parcours
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}
            {!isAuthenticated ? (
              <Button asChild className="gap-2">
                <Link href="/log-in">
                  <UserPlus className="h-4 w-4" />
                  Débloquer la suite
                </Link>
              </Button>
            ) : null}
            <Button asChild variant="outline">
              <Link href={chapterHref}>Retour au parcours</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <QuizSession
      key={quizSlug}
      questions={questions}
      pathContext={{
        chapterHref,
        hasLockedSections: derivedState.hasLockedSections,
        isAuthenticated,
        nextQuizHref,
        onAttemptComplete: handleAttemptComplete,
        targetScore,
        unlockHref: isAuthenticated ? null : '/log-in',
      }}
    />
  );
}