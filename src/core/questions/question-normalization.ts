import {
  resolveCorrectChoiceIndexes,
  resolveQuizAnswerFormat,
  type QuizAnswerFormatValue,
} from "@/core/quiz/quiz-answer-format";
import {
  normalizeTrainingChoiceContents,
  type TrainingChoiceContent,
} from "@/core/training/training-choice-content";
import { normalizeChoiceExplanations } from "@/core/training/training-choice-explanations";

import {
  inferChoiceQuestionFormat,
  type QuestionFormatCode,
} from "./question-format";
import type {
  McqStudentAnswer,
  MultipleChoiceQuestion,
} from "./question.types";

export type LegacyMcqQuestionInput = {
  id: string;
  question?: string | null;
  statement?: string | null;
  explanation?: string | null;
  choices: unknown;
  answerFormat?: QuizAnswerFormatValue | "SINGLE" | "MULTIPLE" | null;
  correctChoiceIndex?: number | null;
  correctChoiceIndexes?: number[] | null;
  choiceExplanations?: unknown;
  format?: QuestionFormatCode;
  requiredSelectionCount?: number | null;
  points?: number | null;
  tags?: string[];
  source?: string;
};

export function getChoiceIdFromIndex(index: number) {
  if (!Number.isInteger(index) || index < 0) {
    throw new Error("Choice index must be a non-negative integer.");
  }

  let cursor = index;
  let value = "";

  do {
    value = String.fromCharCode(65 + (cursor % 26)) + value;
    cursor = Math.floor(cursor / 26) - 1;
  } while (cursor >= 0);

  return value;
}

export function getChoiceIndexFromId(choiceId: string) {
  const normalizedChoiceId = choiceId.trim().toUpperCase();

  if (!/^[A-Z]+$/.test(normalizedChoiceId)) {
    return -1;
  }

  return normalizedChoiceId.split("").reduce((total, char) => {
    return total * 26 + (char.charCodeAt(0) - 64);
  }, 0) - 1;
}

export function normalizeChoiceIndexes(
  choiceIndexes: readonly number[],
  choiceCount = Number.POSITIVE_INFINITY,
) {
  return Array.from(new Set(choiceIndexes))
    .filter(
      (choiceIndex) =>
        Number.isInteger(choiceIndex) &&
        choiceIndex >= 0 &&
        choiceIndex < choiceCount,
    )
    .sort((left, right) => left - right);
}

export function inferChoiceCountFromIndexes(...choiceIndexGroups: readonly number[][]) {
  const largestIndex = choiceIndexGroups
    .flat()
    .filter((choiceIndex) => Number.isInteger(choiceIndex) && choiceIndex >= 0)
    .reduce((largest, choiceIndex) => Math.max(largest, choiceIndex), -1);

  return largestIndex + 1;
}

export function getCorrectChoiceIds(question: MultipleChoiceQuestion) {
  return question.choices
    .filter((choice) => choice.correct)
    .map((choice) => choice.id);
}

export function getSelectedChoiceIndexesFromAnswer(
  question: MultipleChoiceQuestion,
  answer: McqStudentAnswer,
) {
  const indexByChoiceId = new Map(
    question.choices.map((choice, index) => [choice.id, index] as const),
  );

  return Array.from(new Set(answer.selectedChoiceIds))
    .map((choiceId) => indexByChoiceId.get(choiceId))
    .filter((choiceIndex): choiceIndex is number => choiceIndex !== undefined)
    .sort((left, right) => left - right);
}

export function createMcqStudentAnswerFromIndexes({
  question,
  selectedChoiceIndexes,
}: {
  question: MultipleChoiceQuestion;
  selectedChoiceIndexes: readonly number[];
}): McqStudentAnswer {
  const selectedChoiceIds = normalizeChoiceIndexes(
    selectedChoiceIndexes,
    question.choices.length,
  ).map((choiceIndex) => question.choices[choiceIndex]?.id)
    .filter((choiceId): choiceId is string => Boolean(choiceId));

  return {
    questionId: question.id,
    type: "mcq",
    selectedChoiceIds,
  };
}

export function normalizeLegacyMcqQuestion(
  input: LegacyMcqQuestionInput,
): MultipleChoiceQuestion {
  const choices = normalizeTrainingChoiceContents(input.choices);
  const answerFormat = resolveQuizAnswerFormat(input.answerFormat);
  const correctChoiceIndexes = resolveCorrectChoiceIndexes({
    answerFormat,
    correctChoiceIndex: input.correctChoiceIndex,
    correctChoiceIndexes: input.correctChoiceIndexes,
    choiceCount: choices.length,
  });
  const choiceExplanations = normalizeChoiceExplanations(
    input.choiceExplanations,
    choices.length,
  );
  const requiredSelectionCount =
    input.requiredSelectionCount != null && input.requiredSelectionCount > 0
      ? input.requiredSelectionCount
      : undefined;

  return {
    id: input.id,
    type: "mcq",
    format: input.format ?? inferChoiceQuestionFormat({
      answerFormat: input.answerFormat,
      requiredSelectionCount,
    }),
    statement: input.statement ?? input.question ?? "",
    explanation: input.explanation ?? undefined,
    points: input.points ?? 1,
    tags: input.tags,
    source: input.source,
    selectionMode: answerFormat === "SINGLE" ? "single" : "multiple",
    requiredSelectionCount,
    choices: choices.map((choice: TrainingChoiceContent, choiceIndex) => ({
      id: getChoiceIdFromIndex(choiceIndex),
      content: choice,
      correct: correctChoiceIndexes.includes(choiceIndex),
      explanation: choiceExplanations[choiceIndex] || undefined,
    })),
    scoring: {
      strategy: "all-or-nothing",
    },
  };
}
