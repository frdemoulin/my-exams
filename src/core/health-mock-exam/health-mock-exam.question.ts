import {
  createMcqStudentAnswerFromIndexes,
  getSelectedChoiceIndexesFromAnswer,
  normalizeChoiceIndexes,
  normalizePersistedQuestion,
  normalizePersistedQuestionType,
  type MultipleChoiceQuestion,
  type Question,
  type QuestionType,
  type ShortAnswerQuestion,
  type StudentAnswer,
} from "@/core/questions";
import type { QuizAnswerFormatValue } from "@/core/quiz/quiz-answer-format";

export type PersistedHealthMockExamQuestion = {
  id: string;
  questionType?: string | null;
  answerPayload?: unknown;
  question: string;
  choices: unknown;
  answerFormat?: QuizAnswerFormatValue | "SINGLE" | "MULTIPLE" | null;
  correctChoiceIndex?: number | null;
  correctChoiceIndexes?: number[] | null;
  explanation: string;
  choiceExplanations?: unknown;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export function normalizeHealthMockExamQuestionType(value: unknown): QuestionType {
  return normalizePersistedQuestionType(value);
}

export function normalizeHealthMockExamQuestion(
  question: PersistedHealthMockExamQuestion,
): Question {
  return normalizePersistedQuestion({
    id: question.id,
    questionType: question.questionType,
    answerPayload: question.answerPayload,
    question: question.question,
    choices: question.choices,
    answerFormat: question.answerFormat,
    correctChoiceIndex: question.correctChoiceIndex,
    correctChoiceIndexes: question.correctChoiceIndexes,
    explanation: question.explanation,
    choiceExplanations: question.choiceExplanations,
  });
}

export function getShortAnswerRawValue(responsePayload: unknown) {
  if (!isRecord(responsePayload)) {
    return "";
  }

  const rawValue = responsePayload.rawValue;

  if (typeof rawValue === "string") {
    return rawValue;
  }

  if (typeof rawValue === "number" && Number.isFinite(rawValue)) {
    return String(rawValue);
  }

  const value = responsePayload.value;

  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }

  return "";
}

export function createHealthMockExamStudentAnswer({
  question,
  selectedChoiceIndexes,
  responsePayload,
}: {
  question: Question;
  selectedChoiceIndexes: readonly number[];
  responsePayload?: unknown;
}): StudentAnswer | null {
  if (question.type === "mcq") {
    return createMcqStudentAnswerFromIndexes({
      question: question as MultipleChoiceQuestion,
      selectedChoiceIndexes,
    });
  }

  if (question.type === "short-answer") {
    return {
      questionId: question.id,
      type: "short-answer",
      rawValue: getShortAnswerRawValue(responsePayload),
    };
  }

  return null;
}

export function normalizeHealthMockExamStudentAnswer({
  question,
  selectedChoiceIndexes,
  responsePayload,
}: {
  question: Question;
  selectedChoiceIndexes: readonly number[];
  responsePayload?: unknown;
}): StudentAnswer | null {
  if (isRecord(responsePayload)) {
    if (question.type === "mcq" && responsePayload.type === "mcq") {
      const selectedChoiceIds = Array.isArray(responsePayload.selectedChoiceIds)
        ? responsePayload.selectedChoiceIds.filter(
            (choiceId): choiceId is string => typeof choiceId === "string",
          )
        : [];

      return {
        questionId: question.id,
        type: "mcq",
        selectedChoiceIds,
      };
    }

    if (question.type === "short-answer" && responsePayload.type === "short-answer") {
      return {
        questionId: question.id,
        type: "short-answer",
        rawValue: getShortAnswerRawValue(responsePayload),
      };
    }
  }

  return createHealthMockExamStudentAnswer({
    question,
    selectedChoiceIndexes,
    responsePayload,
  });
}

export function getSelectedChoiceIndexesForQuestion({
  question,
  selectedChoiceIndexes,
}: {
  question: Question;
  selectedChoiceIndexes: readonly number[];
}) {
  if (question.type !== "mcq") {
    return [];
  }

  return normalizeChoiceIndexes(selectedChoiceIndexes, question.choices.length);
}

export function getSelectedChoiceIndexesFromHealthMockExamAnswer({
  question,
  answer,
  fallbackSelectedChoiceIndexes = [],
}: {
  question: Question;
  answer: StudentAnswer | null;
  fallbackSelectedChoiceIndexes?: readonly number[];
}) {
  if (question.type !== "mcq") {
    return [];
  }

  if (answer?.type === "mcq") {
    return getSelectedChoiceIndexesFromAnswer(question, answer);
  }

  return getSelectedChoiceIndexesForQuestion({
    question,
    selectedChoiceIndexes: fallbackSelectedChoiceIndexes,
  });
}

export function isHealthMockExamQuestionAnswered(
  question: Question,
  answer: StudentAnswer | null,
) {
  if (!answer) {
    return false;
  }

  if (question.type === "mcq" && answer.type === "mcq") {
    return answer.selectedChoiceIds.length > 0;
  }

  if (question.type === "short-answer" && answer.type === "short-answer") {
    return answer.rawValue.trim().length > 0;
  }

  return false;
}

export function formatShortAnswerExpectedAnswer(question: ShortAnswerQuestion) {
  if (question.answerType === "number") {
    if (!question.numericAnswer) {
      return "Réponse numérique non configurée";
    }

    const unit = question.numericAnswer.unit ? ` ${question.numericAnswer.unit}` : "";
    const tolerance =
      question.numericAnswer.tolerance !== undefined
        ? ` (tolérance ±${question.numericAnswer.tolerance})`
        : "";

    return `${question.numericAnswer.value}${unit}${tolerance}`;
  }

  const acceptedAnswers = question.acceptedAnswers?.map((answer) => answer.value) ?? [];

  return acceptedAnswers.length > 0
    ? acceptedAnswers.join(" / ")
    : "Réponse attendue non configurée";
}
