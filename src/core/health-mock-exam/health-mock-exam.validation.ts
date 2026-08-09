import {
  resolveCorrectChoiceIndexes,
  resolveQuizAnswerFormat,
  type QuizAnswerFormatValue,
} from "@/core/quiz/quiz-answer-format";
import {
  normalizePersistedQuestion,
  normalizePersistedQuestionType,
} from "@/core/questions";
import { normalizeTrainingChoiceContents } from "@/core/training/training-choice-content";

import { getHealthMockExamBlueprint } from "./health-mock-exam.config";

export type HealthMockExamValidationQuestion = {
  id: string;
  slug: string;
  order: number;
  globalOrder: number;
  groupId: string | null;
  isPublished: boolean;
  questionType?: string | null;
  question: string;
  choices: unknown;
  answerFormat: QuizAnswerFormatValue | null;
  correctChoiceIndex: number;
  correctChoiceIndexes: number[];
  answerPayload?: unknown;
  explanation: string;
  choiceExplanations: unknown;
};

export type HealthMockExamValidationSection = {
  id: string;
  teachingElementId: string;
  teachingElementSlug: string;
  title: string;
  order: number;
  questionCount: number;
  firstQuestion: number;
  lastQuestion: number;
  groups: Array<{ id: string; title?: string | null; sharedStatement: string; order: number }>;
  questions: HealthMockExamValidationQuestion[];
};

export type HealthMockExamValidationInput = {
  courseUnitId: string;
  courseUnitSlug: string;
  durationMinutes: number;
  questionCount: number;
  sections: HealthMockExamValidationSection[];
};

export type HealthMockExamValidationOptions = {
  mediaExists?: (publicPath: string) => boolean;
};

export type HealthMockExamValidationResult = {
  isValid: boolean;
  issues: string[];
};

const publicMarkdownImagePattern = /!\[[^\]]*\]\((\/[^\s)]+)[^)]*\)/g;

export function extractPublicMarkdownImagePaths(value: string) {
  return Array.from(value.matchAll(publicMarkdownImagePattern), (match) => match[1]);
}

function normalizeChoiceExplanations(value: unknown) {
  return Array.isArray(value) ? value.map((entry) => String(entry ?? "").trim()) : [];
}

function addMediaIssues(
  issues: string[],
  label: string,
  content: string,
  mediaExists: ((publicPath: string) => boolean) | undefined,
) {
  if (!mediaExists) return;

  for (const mediaPath of extractPublicMarkdownImagePaths(content)) {
    if (!mediaExists(mediaPath)) {
      issues.push(`${label} référence un média public introuvable : ${mediaPath}.`);
    }
  }
}

export function validateHealthMockExamForPublication(
  input: HealthMockExamValidationInput,
  options: HealthMockExamValidationOptions = {},
): HealthMockExamValidationResult {
  const issues: string[] = [];
  const blueprint = getHealthMockExamBlueprint(input.courseUnitSlug);

  if (!input.courseUnitId) {
    issues.push("L'examen doit être rattaché à une UE.");
  }

  if (!blueprint) {
    issues.push(
      `Aucune maquette d'examen blanc n'est déclarée pour l'UE « ${input.courseUnitSlug} ».`,
    );
  } else {
    if (input.durationMinutes !== blueprint.durationMinutes) {
      issues.push(
        `La durée doit être de ${blueprint.durationMinutes} minutes, pas ${input.durationMinutes}.`,
      );
    }

    if (input.questionCount !== blueprint.questionCount) {
      issues.push(
        `L'examen doit annoncer ${blueprint.questionCount} questions, pas ${input.questionCount}.`,
      );
    }

    if (input.sections.length !== blueprint.sections.length) {
      issues.push(`L'examen doit contenir exactement ${blueprint.sections.length} sections.`);
    }

    for (const expectedSection of blueprint.sections) {
      const section = input.sections.find(
        (entry) => entry.teachingElementSlug === expectedSection.teachingElementSlug,
      );

      if (!section) {
        issues.push(`La section « ${expectedSection.title} » est absente.`);
        continue;
      }

      if (section.order !== blueprint.sections.indexOf(expectedSection) + 1) {
        issues.push(`La section « ${expectedSection.title} » n'est pas dans l'ordre attendu.`);
      }
      if (section.questionCount !== expectedSection.questionCount) {
        issues.push(
          `La section « ${expectedSection.title} » doit contenir ${expectedSection.questionCount} questions.`,
        );
      }
      if (
        section.firstQuestion !== expectedSection.firstQuestion ||
        section.lastQuestion !== expectedSection.lastQuestion
      ) {
        issues.push(
          `La section « ${expectedSection.title} » doit couvrir les questions ${expectedSection.firstQuestion} à ${expectedSection.lastQuestion}.`,
        );
      }
    }
  }

  const allQuestions = input.sections.flatMap((section) =>
    section.questions.map((question) => ({ section, question })),
  );

  if (allQuestions.length !== input.questionCount) {
    issues.push(
      `Le sujet contient ${allQuestions.length} question(s) enregistrée(s), pour ${input.questionCount} annoncée(s).`,
    );
  }

  const orderedGlobalPositions = allQuestions
    .map(({ question }) => question.globalOrder)
    .sort((left, right) => left - right);
  const distinctGlobalPositions = new Set(orderedGlobalPositions);

  if (distinctGlobalPositions.size !== orderedGlobalPositions.length) {
    issues.push("Au moins une position globale est dupliquée.");
  }
  for (let position = 1; position <= input.questionCount; position += 1) {
    if (!distinctGlobalPositions.has(position)) {
      issues.push(`La position globale ${position} est absente.`);
    }
  }

  const questionSlugs = allQuestions.map(({ question }) => question.slug.trim());
  if (new Set(questionSlugs).size !== questionSlugs.length) {
    issues.push("Au moins un slug de question est dupliqué dans le sujet.");
  }

  for (const section of input.sections) {
    if (section.questions.length !== section.questionCount) {
      issues.push(
        `La section « ${section.title} » contient ${section.questions.length} question(s) enregistrée(s), pour ${section.questionCount} annoncée(s).`,
      );
    }
    const expectedOrders = new Set(Array.from({ length: section.questions.length }, (_, index) => index + 1));
    const actualOrders = new Set(section.questions.map((question) => question.order));

    for (const order of expectedOrders) {
      if (!actualOrders.has(order)) {
        issues.push(`La section « ${section.title} » comporte un trou à la position ${order}.`);
      }
    }

    const groupsById = new Map(section.groups.map((group) => [group.id, group]));
    const questionsByGroupId = new Map<string, HealthMockExamValidationQuestion[]>();

    for (const question of section.questions) {
      if (
        question.globalOrder < section.firstQuestion ||
        question.globalOrder > section.lastQuestion
      ) {
        issues.push(
          `La question ${question.globalOrder} n'appartient pas à l'intervalle de la section « ${section.title} ».`,
        );
      }
      if (!question.isPublished) {
        issues.push(`La question ${question.globalOrder} n'est pas publiée.`);
      }
      if (!question.slug.trim()) {
        issues.push(`La question ${question.globalOrder} n'a pas de slug fonctionnel.`);
      }
      if (!question.question.trim()) {
        issues.push(`La question ${question.globalOrder} n'a pas d'énoncé.`);
      }
      if (!question.explanation.trim()) {
        issues.push(`La question ${question.globalOrder} n'a pas d'explication transversale.`);
      }

      const questionType = normalizePersistedQuestionType(question.questionType);
      if (questionType === "mcq") {
        const choices = normalizeTrainingChoiceContents(question.choices);
        if (choices.length !== 4) {
          issues.push(`La question ${question.globalOrder} doit comporter exactement quatre items.`);
        }

        const choiceExplanations = normalizeChoiceExplanations(question.choiceExplanations);
        if (choiceExplanations.length !== 4 || choiceExplanations.some((entry) => !entry)) {
          issues.push(`La question ${question.globalOrder} doit comporter une explication pour chacun des quatre items.`);
        }

        const answerFormat = resolveQuizAnswerFormat(question.answerFormat);
        const correctChoiceIndexes = resolveCorrectChoiceIndexes({
          answerFormat,
          correctChoiceIndex: question.correctChoiceIndex,
          correctChoiceIndexes: question.correctChoiceIndexes,
          choiceCount: choices.length,
        });
        if (correctChoiceIndexes.length === 0) {
          issues.push(`La question ${question.globalOrder} ne possède pas de réponse attendue valide.`);
        }
        if (answerFormat === "SINGLE" && correctChoiceIndexes.length !== 1) {
          issues.push(`La question ${question.globalOrder} est au format réponse unique mais comporte plusieurs réponses attendues.`);
        }
      } else if (questionType === "short-answer") {
        const canonicalQuestion = normalizePersistedQuestion({
          ...question,
          choices: [],
        });

        if (canonicalQuestion.type !== "short-answer") {
          issues.push(`La question ${question.globalOrder} n'a pas de type QROC exploitable.`);
        } else if (
          canonicalQuestion.answerType === "number" &&
          !canonicalQuestion.numericAnswer
        ) {
          issues.push(`La question ${question.globalOrder} n'a pas de réponse numérique attendue valide.`);
        } else if (
          canonicalQuestion.answerType === "text" &&
          (canonicalQuestion.acceptedAnswers ?? []).length === 0
        ) {
          issues.push(`La question ${question.globalOrder} n'a pas de réponse textuelle attendue valide.`);
        }
      } else {
        issues.push(
          `La question ${question.globalOrder} utilise un type « ${questionType} » non pris en charge dans l'examen blanc.`,
        );
      }

      if (question.groupId) {
        if (!groupsById.has(question.groupId)) {
          issues.push(`La question ${question.globalOrder} référence un groupe lié hors de sa section.`);
        }
        const questions = questionsByGroupId.get(question.groupId) ?? [];
        questions.push(question);
        questionsByGroupId.set(question.groupId, questions);
      }

      addMediaIssues(
        issues,
        `La question ${question.globalOrder}`,
        question.question,
        options.mediaExists,
      );
    }

    for (const group of section.groups) {
      if (!group.sharedStatement.trim()) {
        issues.push(`Un groupe lié de la section « ${section.title} » n'a pas d'énoncé commun.`);
      }
      addMediaIssues(
        issues,
        `L'énoncé commun de la section « ${section.title} »`,
        group.sharedStatement,
        options.mediaExists,
      );

      const groupedQuestions = questionsByGroupId.get(group.id) ?? [];
      if (groupedQuestions.length < 2 || groupedQuestions.length > 3) {
        issues.push(
          `Le groupe lié « ${group.title ?? group.order} » de la section « ${section.title} » doit contenir deux ou trois questions.`,
        );
        continue;
      }

      const orders = groupedQuestions
        .map((question) => question.order)
        .sort((left, right) => left - right);
      if (orders.some((order, index) => index > 0 && order !== orders[index - 1] + 1)) {
        issues.push(`Les questions du groupe lié « ${group.title ?? group.order} » doivent être consécutives.`);
      }
    }
  }

  return {
    isValid: issues.length === 0,
    issues,
  };
}

export function assertHealthMockExamCanBePublished(
  input: HealthMockExamValidationInput,
  options?: HealthMockExamValidationOptions,
) {
  const result = validateHealthMockExamForPublication(input, options);

  if (!result.isValid) {
    throw new Error(`Examen blanc invalide :\n- ${result.issues.join("\n- ")}`);
  }
}
