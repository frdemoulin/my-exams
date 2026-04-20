'use client';

import { useEffect, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import {
  type TrainingPathOverviewSection,
  type TrainingPathProgress,
} from '@/core/training';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ConfirmDeleteDialog } from '@/components/shared/confirm-delete-dialog';
import { cn } from '@/lib/utils';
import { deriveTrainingPathState } from './training-path-state';
import {
  createEmptyTrainingPathProgress,
  emitTrainingPathProgressChange,
  mergeTrainingPathProgress,
  readTrainingPathProgress,
  resetTrainingPathProgress,
  subscribeToTrainingPathProgress,
} from './training-path-storage';

type TrainingPathProgressCardProps = {
  chapterId: string;
  chapterSlug: string;
  className?: string;
  initialProgress?: TrainingPathProgress;
  isAuthenticated: boolean;
  sections: TrainingPathOverviewSection[];
};

export function TrainingPathProgressCard({
  chapterId,
  chapterSlug,
  className,
  initialProgress,
  isAuthenticated,
  sections,
}: TrainingPathProgressCardProps) {
  const [isResetting, setIsResetting] = useState(false);
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

    return subscribeToTrainingPathProgress({
      chapterSlug,
      onProgressChange: setProgress,
    });
  }, [chapterSlug, initialProgress, isAuthenticated]);

  const {
    activeSection,
    completedQuizCount,
    completionRate,
    masteredSectionCount,
    sections: sectionPreviews,
    totalQuizCount,
  } = deriveTrainingPathState({
    isAuthenticated,
    progress,
    sections,
  });
  const resetDescription = isAuthenticated
    ? 'Cette action effacera ta progression enregistrée pour ce chapitre. Tu recommenceras le parcours depuis le début.'
    : 'Cette action effacera ta progression enregistrée sur ce navigateur pour ce chapitre.';

  const handleReset = async () => {
    if (!isAuthenticated) {
      setProgress(resetTrainingPathProgress(chapterSlug));
      return;
    }

    setIsResetting(true);

    try {
      const response = await fetch('/api/training/path-progress', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chapterId,
          chapterSlug,
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
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex items-baseline justify-between gap-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <span aria-hidden="true" className="text-lg leading-none">📈</span>
            <span>Progression du parcours</span>
          </CardTitle>
          {completedQuizCount > 0 ? (
            <ConfirmDeleteDialog
              onConfirm={handleReset}
              title="Réinitialiser mon parcours ?"
              description={resetDescription}
              confirmLabel="Réinitialiser"
              confirmLoadingLabel="Réinitialisation..."
              confirmVariant="destructive"
              tooltip="Réinitialiser mon parcours"
              trigger={
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  disabled={isResetting}
                  className="self-baseline"
                  aria-label="Réinitialiser mon parcours"
                >
                  <RotateCcw
                    className={cn('h-4 w-4', isResetting ? 'animate-spin' : undefined)}
                  />
                </Button>
              }
            />
          ) : null}
        </div>
        <CardDescription>
          {isAuthenticated
            ? 'Tous les QCM publiés sont accessibles. La progression te sert de repère pour avancer si tu veux être guidé.'
            : 'Aperçu gratuit du chapitre avec progression visible.'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div className="space-y-3 rounded-xl border border-default bg-neutral-primary-soft p-4 shadow-xs">
          <div className="flex items-center justify-between gap-3">
            <p className="font-medium text-heading">Progression dans le chapitre</p>
            <span className="text-sm font-semibold text-heading">{completionRate}%</span>
          </div>
          <div
            role="progressbar"
            aria-label="Progression dans le chapitre"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={completionRate}
            className="h-2.5 overflow-hidden rounded-full bg-neutral-secondary-medium"
          >
            <div
              className={cn(
                'h-full rounded-full transition-[width] duration-500 ease-out',
                completionRate === 100 ? 'bg-success-medium' : 'bg-brand'
              )}
              style={{ width: `${completionRate}%` }}
            />
          </div>
          <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>
              {completedQuizCount}/{totalQuizCount} QCM validés
            </span>
            <span>
              {masteredSectionCount}/{sectionPreviews.length} sections maîtrisées
            </span>
          </div>
        </div>
        {activeSection ? (
          <p className="text-sm text-muted-foreground">
            Section recommandée actuellement: {activeSection.label} - {activeSection.title}
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            Toutes les sections du chapitre sont maintenant maîtrisées.
          </p>
        )}
      </CardContent>
    </Card>
  );
}