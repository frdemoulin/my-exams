import { existsSync } from "node:fs";
import path from "node:path";

import { Prisma, type HealthMockExamAttemptStatus } from "@prisma/client";

import {
  resolveQuizAnswerFormat,
} from "@/core/quiz/quiz-answer-format";
import {
  normalizeTrainingChoiceContents,
  normalizeTrainingQuestionDiagramContent,
} from "@/core/training/training-choice-content";
import { resolveChoiceCorrectionContent } from "@/core/training/training-choice-explanations";
import prisma from "@/lib/db/prisma";

import { evaluateQuestion } from "@/core/questions";

import {
  createHealthMockExamStudentAnswer,
  getSelectedChoiceIndexesForQuestion,
  getSelectedChoiceIndexesFromHealthMockExamAnswer,
  isHealthMockExamQuestionAnswered,
  normalizeHealthMockExamQuestion,
  normalizeHealthMockExamQuestionType,
  normalizeHealthMockExamStudentAnswer,
} from "./health-mock-exam.question";
import { scoreHealthMockExamAttempt } from "./health-mock-exam.scoring";
import type {
  HealthMockExamPassage,
  HealthMockExamResults,
} from "./health-mock-exam.types";
import {
  assertHealthMockExamCanBePublished,
  type HealthMockExamValidationInput,
} from "./health-mock-exam.validation";

const objectIdPattern = /^[a-f0-9]{24}$/i;

export class HealthMockExamError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "HealthMockExamError";
  }
}

type LoadedMockExam = Awaited<ReturnType<typeof loadMockExamForStart>>;

function requireObjectId(value: string, label: string) {
  if (!objectIdPattern.test(value)) {
    throw new HealthMockExamError(`${label} invalide.`, 404);
  }
}

async function resolveCourseUnitId(courseUnitIdOrSlug: string): Promise<string> {
  if (objectIdPattern.test(courseUnitIdOrSlug)) {
    return courseUnitIdOrSlug;
  }

  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: {
      OR: [
        { slug: courseUnitIdOrSlug },
        { slug: { startsWith: courseUnitIdOrSlug } },
      ],
      isActive: true,
    },
    select: { id: true },
  });

  if (!courseUnit) {
    throw new HealthMockExamError("UE introuvable.", 404);
  }

  return courseUnit.id;
}

function calculateElapsedSeconds({
  startedAt,
  deadlineAt,
  now,
}: {
  startedAt: Date;
  deadlineAt: Date;
  now: Date;
}) {
  return Math.max(
    0,
    Math.floor((Math.min(now.getTime(), deadlineAt.getTime()) - startedAt.getTime()) / 1000),
  );
}

function publicMediaExists(publicPath: string) {
  const publicDirectory = path.resolve(process.cwd(), "public");
  const resolvedPath = path.resolve(publicDirectory, `.${publicPath}`);

  return (
    resolvedPath.startsWith(`${publicDirectory}${path.sep}`) &&
    existsSync(resolvedPath)
  );
}

function toPrismaJsonValue(value: unknown): Prisma.InputJsonValue | undefined {
  return value === undefined ? undefined : (value as Prisma.InputJsonValue);
}

async function loadMockExamForStart(courseUnitId: string, examSlug: string) {
  return prisma.healthMockExam.findFirst({
    where: {
      courseUnitId,
      slug: examSlug,
      isPublished: true,
      courseUnit: {
        isActive: true,
        isPublished: true,
      },
    },
    include: {
      courseUnit: {
        select: {
          id: true,
          slug: true,
          title: true,
          teachingElements: {
            select: { id: true, slug: true },
          },
        },
      },
      sections: {
        orderBy: { order: "asc" },
        include: {
          teachingElement: {
            select: { id: true, slug: true },
          },
          questionGroups: {
            orderBy: { order: "asc" },
            select: {
              id: true,
              sharedStatement: true,
              order: true,
            },
          },
          questions: {
            orderBy: { order: "asc" },
            select: {
              id: true,
              slug: true,
              order: true,
              globalOrder: true,
              groupId: true,
              isPublished: true,
              questionType: true,
              question: true,
              questionDiagram: true,
              choices: true,
              answerFormat: true,
              correctChoiceIndex: true,
              correctChoiceIndexes: true,
              answerPayload: true,
              explanation: true,
              choiceExplanations: true,
            },
          },
        },
      },
    },
  });
}

function toValidationInput(exam: NonNullable<LoadedMockExam>): HealthMockExamValidationInput {
  return {
    courseUnitId: exam.courseUnitId,
    courseUnitSlug: exam.courseUnit.slug,
    durationMinutes: exam.durationMinutes,
    questionCount: exam.questionCount,
    sections: exam.sections.map((section) => ({
      id: section.id,
      teachingElementId: section.teachingElementId,
      teachingElementSlug: section.teachingElement.slug,
      title: section.title,
      order: section.order,
      questionCount: section.questionCount,
      firstQuestion: section.firstQuestion,
      lastQuestion: section.lastQuestion,
      groups: section.questionGroups,
      questions: section.questions.map((question) => ({
        ...question,
        groupId: question.groupId ?? null,
        questionType: question.questionType ?? null,
        answerFormat: question.answerFormat ?? null,
        correctChoiceIndexes: question.correctChoiceIndexes,
        answerPayload: question.answerPayload ?? null,
        choiceExplanations: question.choiceExplanations ?? null,
      })),
    })),
  };
}

async function assertPublishedMockExamIsValid(exam: NonNullable<LoadedMockExam>) {
  if (exam.type === "COLLE") {
    return;
  }

  assertHealthMockExamCanBePublished(toValidationInput(exam), {
    mediaExists: publicMediaExists,
  });
}

async function findOwnedAttempt(attemptId: string, userId: string) {
  requireObjectId(attemptId, "Tentative");

  return prisma.userHealthMockExamAttempt.findFirst({
    where: { id: attemptId, userId },
    select: {
      id: true,
      status: true,
      startedAt: true,
      deadlineAt: true,
      mockExamId: true,
    },
  });
}

async function finalizeHealthMockExamAttempt(
  attemptId: string,
  userId: string,
  now = new Date(),
) {
  const attempt = await prisma.userHealthMockExamAttempt.findFirst({
    where: { id: attemptId, userId },
    include: {
      attemptQuestions: {
        orderBy: { globalOrder: "asc" },
        include: {
          question: {
            select: {
              id: true,
              questionType: true,
              question: true,
              choices: true,
              answerFormat: true,
              correctChoiceIndex: true,
              correctChoiceIndexes: true,
              answerPayload: true,
              explanation: true,
              choiceExplanations: true,
            },
          },
        },
      },
    },
  });

  if (!attempt) {
    throw new HealthMockExamError("Tentative introuvable.", 404);
  }

  if (attempt.status !== "IN_PROGRESS") {
    return attempt;
  }

  const hasExpired = now.getTime() >= attempt.deadlineAt.getTime();
  const scoredSections = new Map<
    string,
    Array<{
      question: ReturnType<typeof normalizeHealthMockExamQuestion>;
      answer: ReturnType<typeof normalizeHealthMockExamStudentAnswer>;
    }>
  >();

  for (const attemptQuestion of attempt.attemptQuestions) {
    const question = normalizeHealthMockExamQuestion(attemptQuestion.question);
    const answer = normalizeHealthMockExamStudentAnswer({
      question,
      selectedChoiceIndexes: attemptQuestion.selectedChoiceIndexes,
      responsePayload: attemptQuestion.responsePayload,
    });
    const sectionQuestions = scoredSections.get(attemptQuestion.examSectionId) ?? [];
    sectionQuestions.push({
      question,
      answer,
    });
    scoredSections.set(attemptQuestion.examSectionId, sectionQuestions);
  }

  const scoreResult = scoreHealthMockExamAttempt(
    [...scoredSections.entries()].map(([examSectionId, questions]) => ({
      examSectionId,
      questions,
    })),
  );
  const elapsedSeconds = calculateElapsedSeconds({
    startedAt: attempt.startedAt,
    deadlineAt: attempt.deadlineAt,
    now,
  });
  const status: HealthMockExamAttemptStatus = hasExpired ? "EXPIRED" : "SUBMITTED";

  const updateResult = await prisma.userHealthMockExamAttempt.updateMany({
    where: { id: attempt.id, status: "IN_PROGRESS" },
    data: {
      status,
      submittedAt: now,
      elapsedSeconds,
      score: scoreResult.score,
      maxScore: scoreResult.maxScore,
      percentage: scoreResult.percentage,
      autoSubmitted: hasExpired,
    },
  });

  if (updateResult.count === 1) {
    await prisma.userHealthMockExamAttemptSectionResult.createMany({
      data: scoreResult.sections.map((section) => ({
        attemptId: attempt.id,
        examSectionId: section.examSectionId,
        score: section.score,
        maxScore: section.maxScore,
        percentage: section.percentage,
      })),
    });
  }

  return prisma.userHealthMockExamAttempt.findUniqueOrThrow({
    where: { id: attempt.id },
    include: {
      attemptQuestions: {
        orderBy: { globalOrder: "asc" },
        include: {
          question: {
            select: {
              id: true,
              questionType: true,
              question: true,
              choices: true,
              answerFormat: true,
              correctChoiceIndex: true,
              correctChoiceIndexes: true,
              answerPayload: true,
              explanation: true,
              choiceExplanations: true,
            },
          },
        },
      },
    },
  });
}

export async function startOrResumeHealthMockExamAttempt(input: {
  courseUnitId: string;
  examSlug: string;
  userId: string;
}) {
  const courseUnitId = await resolveCourseUnitId(input.courseUnitId);
  const exam = await loadMockExamForStart(courseUnitId, input.examSlug);

  if (!exam) {
    throw new HealthMockExamError("Examen blanc introuvable.", 404);
  }

  await assertPublishedMockExamIsValid(exam);

  const now = new Date();
  const existingAttempt = await prisma.userHealthMockExamAttempt.findFirst({
    where: {
      userId: input.userId,
      mockExamId: exam.id,
      mockExamVersion: exam.version,
      status: "IN_PROGRESS",
    },
    orderBy: { startedAt: "desc" },
    select: { id: true, deadlineAt: true },
  });

  if (existingAttempt) {
    if (existingAttempt.deadlineAt.getTime() > now.getTime()) {
      return { attemptId: existingAttempt.id, resumed: true };
    }

    await finalizeHealthMockExamAttempt(existingAttempt.id, input.userId, now);
  }

  const durationSeconds = exam.durationSeconds ?? exam.durationMinutes * 60;
  const deadlineAt = new Date(now.getTime() + durationSeconds * 1000);
  const attempt = await prisma.userHealthMockExamAttempt.create({
    data: {
      userId: input.userId,
      mockExamId: exam.id,
      status: "IN_PROGRESS",
      startedAt: now,
      deadlineAt,
      attemptQuestions: {
        create: exam.sections.flatMap((section) =>
          section.questions.map((question) => ({
            examSectionId: section.id,
            questionId: question.id,
            order: question.order,
            globalOrder: question.globalOrder,
          })),
        ),
      },
    },
    select: { id: true },
  });

  return { attemptId: attempt.id, resumed: false };
}

export async function saveHealthMockExamAnswer(input: {
  attemptId: string;
  attemptQuestionId: string;
  userId: string;
  selectedChoiceIndexes: number[];
  responsePayload?: unknown;
  markedForReview: boolean;
}) {
  requireObjectId(input.attemptId, "Tentative");
  requireObjectId(input.attemptQuestionId, "Question");

  const attempt = await findOwnedAttempt(input.attemptId, input.userId);
  if (!attempt) {
    throw new HealthMockExamError("Tentative introuvable.", 404);
  }
  if (attempt.status !== "IN_PROGRESS") {
    throw new HealthMockExamError("Cette tentative est déjà terminée.", 409);
  }

  const now = new Date();
  if (now.getTime() >= attempt.deadlineAt.getTime()) {
    await finalizeHealthMockExamAttempt(attempt.id, input.userId, now);
    throw new HealthMockExamError("Le temps de l'épreuve est écoulé.", 409);
  }

  const submittedChoiceIndexes = [...new Set(input.selectedChoiceIndexes)].sort((a, b) => a - b);
  if (
    submittedChoiceIndexes.some(
      (choiceIndex) => !Number.isInteger(choiceIndex) || choiceIndex < 0,
    )
  ) {
    throw new HealthMockExamError("Les réponses transmises sont invalides.", 400);
  }

  const attemptQuestion = await prisma.userHealthMockExamAttemptQuestion.findFirst({
    where: {
      id: input.attemptQuestionId,
      attemptId: input.attemptId,
    },
    include: {
      question: {
        select: {
          id: true,
          questionType: true,
          question: true,
          choices: true,
          answerFormat: true,
          correctChoiceIndex: true,
          correctChoiceIndexes: true,
          answerPayload: true,
          explanation: true,
          choiceExplanations: true,
        },
      },
    },
  });

  if (!attemptQuestion) {
    throw new HealthMockExamError("La question n'appartient pas à cette tentative.", 404);
  }

  const question = normalizeHealthMockExamQuestion(attemptQuestion.question);
  if (
    question.type !== "mcq" &&
    question.type !== "short-answer" &&
    question.type !== "hotspot"
  ) {
    throw new HealthMockExamError(
      "Ce type de question n'est pas encore pris en charge dans l'examen blanc.",
      400,
    );
  }

  const validSubmittedChoiceIndexes = getSelectedChoiceIndexesForQuestion({
    question,
    selectedChoiceIndexes: submittedChoiceIndexes,
  });
  if (
    question.type === "mcq" &&
    submittedChoiceIndexes.length !== validSubmittedChoiceIndexes.length
  ) {
    throw new HealthMockExamError("Les réponses transmises sont invalides.", 400);
  }
  if (question.type !== "mcq" && submittedChoiceIndexes.length > 0) {
    throw new HealthMockExamError("Les réponses transmises sont invalides.", 400);
  }

  const normalizedAnswer = normalizeHealthMockExamStudentAnswer({
    question,
    selectedChoiceIndexes: validSubmittedChoiceIndexes,
    responsePayload: input.responsePayload,
  });
  const selectedChoiceIndexes = getSelectedChoiceIndexesFromHealthMockExamAnswer({
    question,
    answer: normalizedAnswer,
    fallbackSelectedChoiceIndexes: validSubmittedChoiceIndexes,
  });

  const responsePayload = createHealthMockExamStudentAnswer({
    question,
    selectedChoiceIndexes,
    responsePayload: input.responsePayload,
  });

  await prisma.userHealthMockExamAttemptQuestion.update({
    where: { id: attemptQuestion.id },
    data: {
      selectedChoiceIndexes,
      responsePayload: toPrismaJsonValue(responsePayload),
      markedForReview: input.markedForReview,
      answeredAt: isHealthMockExamQuestionAnswered(question, responsePayload) ? now : null,
    },
  });

  return {
    selectedChoiceIndexes,
    responsePayload,
    markedForReview: input.markedForReview,
  };
}

export async function submitHealthMockExamAttempt(input: {
  attemptId: string;
  userId: string;
}) {
  requireObjectId(input.attemptId, "Tentative");
  const attempt = await findOwnedAttempt(input.attemptId, input.userId);
  if (!attempt) {
    throw new HealthMockExamError("Tentative introuvable.", 404);
  }

  const finalizedAttempt = await finalizeHealthMockExamAttempt(input.attemptId, input.userId);

  return {
    attemptId: finalizedAttempt.id,
    status: finalizedAttempt.status,
  };
}

export async function fetchHealthMockExamTakingState(input: {
  courseUnitId: string;
  examSlug: string;
  userId: string;
}): Promise<
  | { kind: "missing" }
  | { kind: "completed"; attemptId: string }
  | { kind: "in-progress"; passage: HealthMockExamPassage }
> {
  const courseUnitId = await resolveCourseUnitId(input.courseUnitId);

  const attempt = await prisma.userHealthMockExamAttempt.findFirst({
    where: {
      userId: input.userId,
      status: "IN_PROGRESS",
      mockExam: {
        courseUnitId,
        slug: input.examSlug,
        isPublished: true,
      },
    },
    select: { id: true, deadlineAt: true },
    orderBy: { startedAt: "desc" },
  });

  if (!attempt) {
    return { kind: "missing" };
  }

  if (attempt.deadlineAt.getTime() <= Date.now()) {
    await finalizeHealthMockExamAttempt(attempt.id, input.userId);
    return { kind: "completed", attemptId: attempt.id };
  }

  const passageAttempt = await prisma.userHealthMockExamAttempt.findFirst({
    where: { id: attempt.id, userId: input.userId, status: "IN_PROGRESS" },
    include: {
      mockExam: {
        select: {
          title: true,
          slug: true,
          type: true,
          description: true,
          instructions: true,
          questionCount: true,
          courseUnit: {
            select: {
              id: true,
              code: true,
              title: true,
              slug: true,
            },
          },
          sections: {
            orderBy: { order: "asc" },
            select: {
              id: true,
              title: true,
              order: true,
              firstQuestion: true,
              lastQuestion: true,
            },
          },
        },
      },
      attemptQuestions: {
        orderBy: { globalOrder: "asc" },
        include: {
          question: {
            select: {
              id: true,
              order: true,
              globalOrder: true,
              questionType: true,
              answerFormat: true,
              question: true,
              questionDiagram: true,
              choices: true,
              correctChoiceIndex: true,
              correctChoiceIndexes: true,
              answerPayload: true,
              explanation: true,
              choiceExplanations: true,
              group: {
                select: {
                  id: true,
                  title: true,
                  sharedStatement: true,
                  order: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!passageAttempt) {
    return { kind: "completed", attemptId: attempt.id };
  }

  return {
    kind: "in-progress",
    passage: {
      attemptId: passageAttempt.id,
      startedAt: passageAttempt.startedAt.toISOString(),
      deadlineAt: passageAttempt.deadlineAt.toISOString(),
      title: passageAttempt.mockExam.title,
      slug: passageAttempt.mockExam.slug,
      type: passageAttempt.mockExam.type,
      description: passageAttempt.mockExam.description,
      instructions: passageAttempt.mockExam.instructions ?? null,
      questionCount: passageAttempt.mockExam.questionCount,
      courseUnit: passageAttempt.mockExam.courseUnit,
      sections: passageAttempt.mockExam.sections,
      questions: passageAttempt.attemptQuestions.map((attemptQuestion) => {
        const canonicalQuestion = normalizeHealthMockExamQuestion(attemptQuestion.question);
        const responsePayload = normalizeHealthMockExamStudentAnswer({
          question: canonicalQuestion,
          selectedChoiceIndexes: attemptQuestion.selectedChoiceIndexes,
          responsePayload: attemptQuestion.responsePayload,
        });
        const selectedChoiceIndexes = getSelectedChoiceIndexesFromHealthMockExamAnswer({
          question: canonicalQuestion,
          answer: responsePayload,
          fallbackSelectedChoiceIndexes: attemptQuestion.selectedChoiceIndexes,
        });

        return {
          attemptQuestionId: attemptQuestion.id,
          id: attemptQuestion.question.id,
          globalOrder: attemptQuestion.globalOrder,
          order: attemptQuestion.order,
          questionType: normalizeHealthMockExamQuestionType(attemptQuestion.question.questionType),
          answerFormat: resolveQuizAnswerFormat(attemptQuestion.question.answerFormat),
          question: attemptQuestion.question.question,
          questionDiagram: normalizeTrainingQuestionDiagramContent(
            attemptQuestion.question.questionDiagram ?? null,
          ),
          choices: normalizeTrainingChoiceContents(attemptQuestion.question.choices),
          answerPayload: attemptQuestion.question.answerPayload ?? null,
          canonicalQuestion,
          group: attemptQuestion.question.group
            ? {
                id: attemptQuestion.question.group.id,
                title: attemptQuestion.question.group.title ?? null,
                sharedStatement: attemptQuestion.question.group.sharedStatement,
                order: attemptQuestion.question.group.order,
              }
            : null,
          selectedChoiceIndexes,
          responsePayload,
          markedForReview: attemptQuestion.markedForReview,
        };
      }),
    },
  };
}

export async function fetchHealthMockExamResults(input: {
  attemptId: string;
  userId: string;
}): Promise<HealthMockExamResults | null> {
  requireObjectId(input.attemptId, "Tentative");

  const attempt = await prisma.userHealthMockExamAttempt.findFirst({
    where: {
      id: input.attemptId,
      userId: input.userId,
      status: { in: ["SUBMITTED", "EXPIRED", "ABANDONED"] },
    },
    include: {
      mockExam: {
        select: {
          title: true,
          slug: true,
          courseUnit: { select: { id: true, title: true } },
        },
      },
      sectionResults: {
        include: {
          examSection: {
            select: { id: true, title: true, firstQuestion: true, lastQuestion: true },
          },
        },
      },
      attemptQuestions: {
        orderBy: { globalOrder: "asc" },
        include: {
          question: {
            select: {
              id: true,
              questionType: true,
              answerFormat: true,
              question: true,
              questionDiagram: true,
              choices: true,
              correctChoiceIndexes: true,
              correctChoiceIndex: true,
              answerPayload: true,
              explanation: true,
              choiceExplanations: true,
              group: {
                select: {
                  id: true,
                  title: true,
                  sharedStatement: true,
                  order: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!attempt || attempt.score === null || attempt.maxScore === null || attempt.percentage === null) {
    return null;
  }

  return {
    attemptId: attempt.id,
    status: attempt.status as "SUBMITTED" | "EXPIRED" | "ABANDONED",
    submittedAt: attempt.submittedAt?.toISOString() ?? null,
    elapsedSeconds: attempt.elapsedSeconds ?? 0,
    score: attempt.score,
    maxScore: attempt.maxScore,
    percentage: attempt.percentage,
    autoSubmitted: attempt.autoSubmitted,
    title: attempt.mockExam.title,
    slug: attempt.mockExam.slug,
    courseUnitId: attempt.mockExam.courseUnit.id,
    courseUnitTitle: attempt.mockExam.courseUnit.title,
    sections: attempt.sectionResults
      .sort((left, right) => left.examSection.firstQuestion - right.examSection.firstQuestion)
      .map((result) => ({
        id: result.examSection.id,
        title: result.examSection.title,
        firstQuestion: result.examSection.firstQuestion,
        lastQuestion: result.examSection.lastQuestion,
        score: result.score,
        maxScore: result.maxScore,
        percentage: result.percentage,
      })),
    questions: attempt.attemptQuestions.map((attemptQuestion) => {
      const canonicalQuestion = normalizeHealthMockExamQuestion(attemptQuestion.question);
      const responsePayload = normalizeHealthMockExamStudentAnswer({
        question: canonicalQuestion,
        selectedChoiceIndexes: attemptQuestion.selectedChoiceIndexes,
        responsePayload: attemptQuestion.responsePayload,
      });
      const evaluation = evaluateQuestion(canonicalQuestion, responsePayload);
      const choices = normalizeTrainingChoiceContents(attemptQuestion.question.choices);
      const correctChoiceIndexes =
        canonicalQuestion.type === "mcq"
          ? canonicalQuestion.choices
              .map((choice, choiceIndex) => ({ choice, choiceIndex }))
              .filter(({ choice }) => choice.correct)
              .map(({ choiceIndex }) => choiceIndex)
          : [];
      const correction = resolveChoiceCorrectionContent({
        explanation: attemptQuestion.question.explanation,
        choiceExplanations: attemptQuestion.question.choiceExplanations,
        choiceCount: choices.length,
      });
      const selectedChoiceIndexes = getSelectedChoiceIndexesFromHealthMockExamAnswer({
        question: canonicalQuestion,
        answer: responsePayload,
        fallbackSelectedChoiceIndexes: attemptQuestion.selectedChoiceIndexes,
      });

      return {
        attemptQuestionId: attemptQuestion.id,
        id: attemptQuestion.question.id,
        globalOrder: attemptQuestion.globalOrder,
        order: attemptQuestion.order,
        questionType: normalizeHealthMockExamQuestionType(attemptQuestion.question.questionType),
        answerFormat: resolveQuizAnswerFormat(attemptQuestion.question.answerFormat),
        question: attemptQuestion.question.question,
        questionDiagram: normalizeTrainingQuestionDiagramContent(
          attemptQuestion.question.questionDiagram ?? null,
        ),
        choices,
        answerPayload: attemptQuestion.question.answerPayload ?? null,
        canonicalQuestion,
        group: attemptQuestion.question.group
          ? {
              id: attemptQuestion.question.group.id,
              title: attemptQuestion.question.group.title ?? null,
              sharedStatement: attemptQuestion.question.group.sharedStatement,
              order: attemptQuestion.question.group.order,
            }
          : null,
        selectedChoiceIndexes,
        responsePayload,
        markedForReview: attemptQuestion.markedForReview,
        correctChoiceIndexes,
        explanation: correction.explanation,
        choiceExplanations: correction.choiceExplanations,
        evaluationStatus: evaluation.status,
        score: evaluation.score,
        maxScore: evaluation.maxScore,
      };
    }),
  };
}
