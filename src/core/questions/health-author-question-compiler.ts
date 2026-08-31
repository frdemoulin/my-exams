import type { PersistedQuestionInput } from "./question-persistence";
import {
  isHealthTrainingAuthorQuestion,
  type HealthSeedQuestion,
  type LegacySeedQuestionInput,
} from "./health-author-question.types";
import {
  assertHealthTrainingAuthorQuestionIsValid,
  type HealthAuthorQuestionValidationContext,
} from "./health-author-question-validation";

export type CompiledHealthSeedQuestion = Omit<PersistedQuestionInput, "id"> & {
  id?: string;
  order: number;
  difficulty: string;
  question: string;
  questionDiagram?: unknown;
};

export function compileHealthTrainingAuthorQuestion(
  question: HealthSeedQuestion,
  context?: HealthAuthorQuestionValidationContext,
): CompiledHealthSeedQuestion {
  if (!isHealthTrainingAuthorQuestion(question)) {
    return question as CompiledHealthSeedQuestion;
  }

  assertHealthTrainingAuthorQuestionIsValid(question, context);

  const baseCompiled = {
    order: question.order,
    difficulty: question.difficulty,
    question: question.question,
    statement: question.question,
    explanation: question.explanation ?? null,
    questionDiagram: question.questionDiagram,
    points: question.points ?? 1,
    tags: question.tags,
    source: question.source,
  };

  switch (question.format) {
    case "QRU":
    case "QRM":
    case "QRP":
    case "QRPL": {
      const choices = question.choices.map((c) => c.content);
      const correctChoiceIndexes = question.choices
        .map((c, idx) => (c.correct ? idx : -1))
        .filter((idx) => idx !== -1);
      const choiceExplanations = question.choices.map((c) => c.explanation ?? "");
      const answerFormat = question.format === "QRU" ? ("SINGLE" as const) : ("MULTIPLE" as const);
      const requiredSelectionCount =
        question.format === "QRP" || question.format === "QRPL"
          ? question.requiredSelectionCount
          : undefined;

      const answerPayload = {
        ...(requiredSelectionCount !== undefined ? { requiredSelectionCount } : {}),
        ...(question.points !== undefined ? { points: question.points } : {}),
        ...(question.tags !== undefined ? { tags: question.tags } : {}),
        ...(question.source !== undefined ? { source: question.source } : {}),
      };

      return {
        ...baseCompiled,
        format: question.format,
        questionFormat: question.format,
        questionType: "mcq",
        answerFormat,
        choices,
        correctChoiceIndexes,
        choiceExplanations,
        requiredSelectionCount,
        answerPayload: Object.keys(answerPayload).length > 0 ? answerPayload : undefined,
      };
    }

    case "QROC": {
      const basePayload =
        question.answer.type === "text"
          ? {
              answerType: "text" as const,
              acceptedAnswers: question.answer.acceptedAnswers.map((val) => ({ value: val })),
              normalization: question.answer.normalization,
            }
          : {
              answerType: "number" as const,
              numericAnswer: {
                value:
                  question.answer.value !== undefined
                    ? question.answer.value
                    : (question.answer as any).numericAnswer?.value,
                tolerance:
                  question.answer.tolerance !== undefined
                    ? question.answer.tolerance
                    : (question.answer as any).numericAnswer?.tolerance,
                unit:
                  question.answer.unit !== undefined
                    ? question.answer.unit
                    : (question.answer as any).numericAnswer?.unit,
                displayUnit:
                  question.answer.displayUnit !== undefined
                    ? question.answer.displayUnit
                    : (question.answer as any).numericAnswer?.displayUnit,
                acceptedUnits:
                  question.answer.acceptedUnits !== undefined
                    ? question.answer.acceptedUnits
                    : (question.answer as any).numericAnswer?.acceptedUnits,
              },
            };

      const answerPayload = {
        ...basePayload,
        ...(question.points !== undefined ? { points: question.points } : {}),
        ...(question.tags !== undefined ? { tags: question.tags } : {}),
        ...(question.source !== undefined ? { source: question.source } : {}),
      };

      return {
        ...baseCompiled,
        format: "QROC",
        questionFormat: "QROC",
        questionType: "short-answer",
        answerFormat: "SINGLE" as const,
        choices: [],
        correctChoiceIndexes: [],
        choiceExplanations: [],
        answerPayload,
      };
    }

    case "QZONE": {
      const expectedZones = question.expectedZones.map((z, idx) => ({
        id: z.id ?? `target-${idx + 1}`,
        label: z.label,
        x: z.x,
        y: z.y,
        tolerance: z.tolerance ?? question.defaultTolerance,
      }));

      const answerPayload = {
        image: question.image,
        expectedZones,
        defaultTolerance: question.defaultTolerance,
        ...(question.points !== undefined ? { points: question.points } : {}),
        ...(question.tags !== undefined ? { tags: question.tags } : {}),
        ...(question.source !== undefined ? { source: question.source } : {}),
      };

      return {
        ...baseCompiled,
        format: "QZONE",
        questionFormat: "QZONE",
        questionType: "hotspot",
        answerFormat: "SINGLE" as const,
        choices: [],
        correctChoiceIndexes: [],
        choiceExplanations: [],
        answerPayload,
      };
    }

    default:
      return question as CompiledHealthSeedQuestion;
  }
}
