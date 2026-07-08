import type { TrainingQuizStage } from '@prisma/client';

export const trainingQuizStageOrder: Record<TrainingQuizStage, number> = {
  DISCOVER: 1,
  PRACTICE: 2,
  MASTER: 3,
};

export const trainingQuizStageLabels: Record<TrainingQuizStage, string> = {
  DISCOVER: 'Découvrir',
  PRACTICE: "S'entraîner",
  MASTER: 'Maîtriser',
};

export const trainingQuizStageBadgeClassNames: Record<TrainingQuizStage, string> = {
  DISCOVER:
    'border border-success/30 bg-success/10 text-fg-success-strong dark:border-success/40 dark:bg-success/15 dark:text-success-foreground',
  PRACTICE:
    'border border-warning/30 bg-warning/10 text-fg-warning-strong dark:border-warning/40 dark:bg-warning/15 dark:text-warning-foreground',
  MASTER:
    'border border-danger/30 bg-danger/10 text-fg-danger-strong dark:border-danger/40 dark:bg-danger/15 dark:text-danger-foreground',
};

export const inferTrainingQuizStageFromOrder = (
  order: number
): TrainingQuizStage => {
  if (order <= 1) {
    return 'DISCOVER';
  }

  if (order === 2) {
    return 'PRACTICE';
  }

  return 'MASTER';
};

export const getTrainingQuizStageLabel = (
  stage: TrainingQuizStage | null | undefined
) => {
  if (!stage) {
    return null;
  }

  return trainingQuizStageLabels[stage];
};

export const getTrainingQuizStageBadgeClassName = (
  stage: TrainingQuizStage | null | undefined
) => {
  if (!stage) {
    return null;
  }

  return trainingQuizStageBadgeClassNames[stage];
};

export const sortTrainingQuizStages = (stages: TrainingQuizStage[]) => {
  return [...stages].sort(
    (left, right) => trainingQuizStageOrder[left] - trainingQuizStageOrder[right]
  );
};
