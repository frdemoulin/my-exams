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

export const sortTrainingQuizStages = (stages: TrainingQuizStage[]) => {
  return [...stages].sort(
    (left, right) => trainingQuizStageOrder[left] - trainingQuizStageOrder[right]
  );
};