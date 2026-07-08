import type { QuizAnswerFormat } from '@prisma/client';

export const quizAnswerFormatValues = ['SINGLE', 'MULTIPLE'] as const;

export type QuizAnswerFormatValue = (typeof quizAnswerFormatValues)[number];

export const DEFAULT_QUIZ_ANSWER_FORMAT: QuizAnswerFormatValue = 'SINGLE';

export const quizAnswerFormatLabels: Record<QuizAnswerFormatValue, string> = {
  SINGLE: 'Une seule bonne réponse',
  MULTIPLE: 'Une ou plusieurs bonnes réponses',
};

export const quizAnswerFormatShortLabels: Record<QuizAnswerFormatValue, string> = {
  SINGLE: 'Réponse unique',
  MULTIPLE: 'Réponses multiples',
};

export const resolveQuizAnswerFormat = (
  value: QuizAnswerFormat | QuizAnswerFormatValue | null | undefined
): QuizAnswerFormatValue => {
  return value === 'MULTIPLE' ? 'MULTIPLE' : DEFAULT_QUIZ_ANSWER_FORMAT;
};

const isValidChoiceIndex = (value: number, choiceCount: number) =>
  Number.isInteger(value) && value >= 0 && value < choiceCount;

export const normalizeChoiceIndexes = (
  values: number[],
  choiceCount = Number.POSITIVE_INFINITY
) => {
  return Array.from(new Set(values))
    .filter((value) => isValidChoiceIndex(value, choiceCount))
    .sort((left, right) => left - right);
};

export const resolveCorrectChoiceIndexes = ({
  answerFormat,
  correctChoiceIndex,
  correctChoiceIndexes,
  choiceCount = Number.POSITIVE_INFINITY,
}: {
  answerFormat: QuizAnswerFormat | QuizAnswerFormatValue | null | undefined;
  correctChoiceIndex?: number | null;
  correctChoiceIndexes?: number[] | null;
  choiceCount?: number;
}) => {
  const normalizedIndexes = normalizeChoiceIndexes(
    correctChoiceIndexes ?? [],
    choiceCount
  );
  const fallbackIndex = isValidChoiceIndex(correctChoiceIndex ?? -1, choiceCount)
    ? [correctChoiceIndex as number]
    : [];
  const resolvedIndexes =
    normalizedIndexes.length > 0 ? normalizedIndexes : fallbackIndex;

  if (resolveQuizAnswerFormat(answerFormat) === 'SINGLE') {
    return resolvedIndexes.length > 0 ? [resolvedIndexes[0] as number] : [];
  }

  return resolvedIndexes;
};

export const getPrimaryCorrectChoiceIndex = ({
  answerFormat,
  correctChoiceIndex,
  correctChoiceIndexes,
  choiceCount = Number.POSITIVE_INFINITY,
  fallbackIndex = 0,
}: {
  answerFormat: QuizAnswerFormat | QuizAnswerFormatValue | null | undefined;
  correctChoiceIndex?: number | null;
  correctChoiceIndexes?: number[] | null;
  choiceCount?: number;
  fallbackIndex?: number;
}) => {
  return (
    resolveCorrectChoiceIndexes({
      answerFormat,
      correctChoiceIndex,
      correctChoiceIndexes,
      choiceCount,
    })[0] ?? fallbackIndex
  );
};

export const areChoiceIndexSetsEqual = (
  left: number[],
  right: number[]
) => {
  const normalizedLeft = normalizeChoiceIndexes(left);
  const normalizedRight = normalizeChoiceIndexes(right);

  return (
    normalizedLeft.length === normalizedRight.length &&
    normalizedLeft.every((value, index) => value === normalizedRight[index])
  );
};
