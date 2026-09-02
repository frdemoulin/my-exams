import { randomUUID } from 'crypto';

if (typeof window !== 'undefined') {
  throw new Error('This module cannot be imported in the browser.');
}
import prisma from '@/lib/db/prisma';
import { assertUserCanAccessChapter } from '@/lib/auth/assert-pedagogical-access';
import { generateWatermarkCode } from '@/lib/watermark.server';
import {
  createMcqStudentAnswerFromIndexes,
  evaluateQuestion,
  normalizePersistedPassageQuestion,
  normalizePersistedQuestion,
  normalizePersistedQuestionType,
  type EvaluationResult,
  type Question,
  type StudentAnswer,
} from '@/core/questions';
import {
  resolveCorrectChoiceIndexes,
  resolveQuizAnswerFormat,
} from '@/core/quiz/quiz-answer-format';
import {
  reorderCatchAllChoices,
} from '@/core/training/training-choice-ordering';
import {
  normalizeTrainingChoiceContents,
  normalizeTrainingQuestionDiagramContent,
} from '@/core/training/training-choice-content';
import {
  resolveChoiceCorrectionContent,
} from '@/core/training/training-choice-explanations';
import {
  buildThemeLabelById,
  getQuestionThemeLabels,
} from '@/core/theme/theme-label';
import type { TrainingQuestion } from '@/core/training/training.types';

export type StartTrainingQuizSessionInput = {
  chapterId: string;
  quizId: string;
  userId?: string | null;
};

export type StartTrainingQuizSessionResult = {
  sessionId: string;
  watermarkCode: string;
  quiz: {
    id: string;
    title: string;
    description: string | null;
    slug: string;
    stage: any;
    questionCount: number;
  };
  questions: TrainingQuestion[];
};

export type SubmitTrainingQuizSessionAnswer = {
  questionId: string;
  selectedChoiceIndexes?: number[];
  shortAnswerRawValue?: string;
  hotspotPoints?: Array<{ x: number; y: number }>;
  responsePayload?: any;
};

export type SubmitTrainingQuizSessionInput = {
  sessionId: string;
  userId?: string | null;
  targetScore?: number;
  answers: SubmitTrainingQuizSessionAnswer[];
};

export type TrainingQuizEvaluatedQuestionResult = TrainingQuestion & {
  evaluation: EvaluationResult;
  selectedChoiceIndexes: number[];
  responsePayload: StudentAnswer | null;
};

export type SubmitTrainingQuizSessionResult = {
  sessionId: string;
  score: number;
  maxScore: number;
  totalQuestions: number;
  percentage: number;
  isSuccess: boolean;
  watermarkCode: string;
  questions: TrainingQuizEvaluatedQuestionResult[];
};

export type DbQuizQuestion = {
  id: string;
  difficulty: any;
  questionType: string | null;
  answerFormat: any;
  question: string;
  questionDiagram: any;
  choices: any;
  correctChoiceIndexes?: number[] | null;
  correctChoiceIndex?: number | null;
  answerPayload?: any;
  explanation?: string | null;
  choiceExplanations?: any;
  order?: number;
  themeIds?: string[];
  updatedAt?: Date;
};

function getUnansweredEval(canonicalQuestion: Question): EvaluationResult {
  return {
    questionId: canonicalQuestion.id,
    status: 'unanswered',
    score: 0,
    maxScore: 1,
  };
}

export function buildCanonicalQuestionFromDb(question: DbQuizQuestion): Question {
  const normalizedChoices = normalizeTrainingChoiceContents(question.choices);
  const resolvedCorrectChoiceIndexes = resolveCorrectChoiceIndexes({
    answerFormat: question.answerFormat,
    correctChoiceIndex: question.correctChoiceIndex,
    correctChoiceIndexes: question.correctChoiceIndexes,
    choiceCount: normalizedChoices.length,
  });

  const reorderedQuestionChoices = reorderCatchAllChoices(
    normalizedChoices,
    resolvedCorrectChoiceIndexes,
  );

  const answerFormat = resolveQuizAnswerFormat(question.answerFormat);
  const resolvedCorrectionContent = resolveChoiceCorrectionContent({
    explanation: question.explanation ?? '',
    choiceExplanations: question.choiceExplanations,
    choiceCount: reorderedQuestionChoices.choices.length,
  });

  const questionType = normalizePersistedQuestionType(question.questionType);

  return normalizePersistedQuestion({
    id: question.id,
    questionType,
    answerPayload: question.answerPayload ?? null,
    question: question.question,
    choices: reorderedQuestionChoices.choices,
    answerFormat,
    correctChoiceIndexes: reorderedQuestionChoices.correctChoiceIndexes,
    explanation: resolvedCorrectionContent.explanation,
    choiceExplanations: resolvedCorrectionContent.choiceExplanations,
  });
}

function buildTrainingQuestionFromDb(
  question: DbQuizQuestion,
  order: number,
  group: { id: string; title: string | null; sharedStatement: string; order: number } | null,
  themeLabelsById: Map<string, string>,
  sanitizeForPassage: boolean,
): TrainingQuestion {
  const normalizedChoices = normalizeTrainingChoiceContents(question.choices);
  const resolvedCorrectChoiceIndexes = resolveCorrectChoiceIndexes({
    answerFormat: question.answerFormat,
    correctChoiceIndex: question.correctChoiceIndex,
    correctChoiceIndexes: question.correctChoiceIndexes,
    choiceCount: normalizedChoices.length,
  });

  const reorderedQuestionChoices = reorderCatchAllChoices(
    normalizedChoices,
    resolvedCorrectChoiceIndexes,
  );

  const answerFormat = resolveQuizAnswerFormat(question.answerFormat);
  const resolvedCorrectionContent = resolveChoiceCorrectionContent({
    explanation: question.explanation ?? '',
    choiceExplanations: question.choiceExplanations,
    choiceCount: reorderedQuestionChoices.choices.length,
  });

  const questionType = normalizePersistedQuestionType(question.questionType);

  const canonicalQuestion = sanitizeForPassage
    ? normalizePersistedPassageQuestion({
        id: question.id,
        questionType,
        answerPayload: question.answerPayload ?? null,
        question: question.question,
        choices: reorderedQuestionChoices.choices,
        answerFormat,
        correctChoiceIndexes: reorderedQuestionChoices.correctChoiceIndexes,
        explanation: resolvedCorrectionContent.explanation,
        choiceExplanations: resolvedCorrectionContent.choiceExplanations,
      })
    : normalizePersistedQuestion({
        id: question.id,
        questionType,
        answerPayload: question.answerPayload ?? null,
        question: question.question,
        choices: reorderedQuestionChoices.choices,
        answerFormat,
        correctChoiceIndexes: reorderedQuestionChoices.correctChoiceIndexes,
        explanation: resolvedCorrectionContent.explanation,
        choiceExplanations: resolvedCorrectionContent.choiceExplanations,
      });

  return {
    id: question.id,
    difficulty: question.difficulty,
    questionType,
    answerFormat,
    question: question.question,
    questionDiagram: normalizeTrainingQuestionDiagramContent(question.questionDiagram ?? null),
    choices: reorderedQuestionChoices.choices,
    correctChoiceIndexes: sanitizeForPassage ? [] : reorderedQuestionChoices.correctChoiceIndexes,
    answerPayload: sanitizeForPassage ? null : (question.answerPayload ?? null),
    canonicalQuestion,
    explanation: sanitizeForPassage ? '' : resolvedCorrectionContent.explanation,
    choiceExplanations: sanitizeForPassage ? [] : resolvedCorrectionContent.choiceExplanations,
    order,
    group: group
      ? {
          id: group.id,
          title: group.title ?? null,
          sharedStatement: group.sharedStatement,
          order: group.order,
        }
      : null,
    themeLabels: getQuestionThemeLabels({
      themeIds: question.themeIds ?? [],
      themeLabelById: themeLabelsById,
    }),
  };
}

export async function startOrResumeTrainingQuizSession(
  input: StartTrainingQuizSessionInput,
): Promise<StartTrainingQuizSessionResult> {
  const { chapterId, quizId, userId } = input;

  const quiz = await prisma.trainingQuiz.findFirst({
    where: {
      id: quizId,
      chapterId,
      isPublished: true,
    },
    select: {
      id: true,
      title: true,
      description: true,
      slug: true,
      stage: true,
      questionLinks: {
        where: {
          question: {
            isPublished: true,
          },
        },
        select: {
          order: true,
          group: {
            select: {
              id: true,
              title: true,
              sharedStatement: true,
              order: true,
            },
          },
          question: {
            select: {
              id: true,
              difficulty: true,
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
              order: true,
              themeIds: true,
              updatedAt: true,
            },
          },
        },
        orderBy: [{ order: 'asc' }],
      },
    },
  });

  if (!quiz) {
    throw new Error('Quiz introuvable ou indisponible.');
  }

  const themeIds = Array.from(
    new Set(
      quiz.questionLinks.flatMap((link) => link.question.themeIds ?? []),
    ),
  );
  const themes = themeIds.length > 0
    ? await prisma.theme.findMany({
        where: { id: { in: themeIds } },
        select: { id: true, title: true, shortTitle: true },
      })
    : [];
  const themeLabelsById = buildThemeLabelById(themes);

  // Authenticated user session persistence
  if (userId) {
    const enrollment = await assertUserCanAccessChapter({ userId, chapterId });

    let attempt = await prisma.userTrainingQuizAttempt.findFirst({
      where: {
        userId,
        academicEnrollmentId: enrollment.id,
        quizId,
        status: 'IN_PROGRESS',
      },
      include: {
        attemptQuestions: {
          orderBy: { order: 'asc' },
          include: {
            question: {
              select: {
                id: true,
                difficulty: true,
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
                order: true,
                themeIds: true,
                updatedAt: true,
              },
            },
          },
        },
      },
    });

    if (!attempt) {
      attempt = await prisma.userTrainingQuizAttempt.create({
        data: {
          userId,
          academicEnrollmentId: enrollment.id,
          chapterId,
          quizId,
          status: 'IN_PROGRESS',
          maxScore: quiz.questionLinks.length,
          attemptQuestions: {
            create: quiz.questionLinks.map((link) => ({
              questionId: link.question.id,
              order: link.order,
              questionUpdatedAt: link.question.updatedAt,
            })),
          },
        },
        include: {
          attemptQuestions: {
            orderBy: { order: 'asc' },
            include: {
              question: {
                select: {
                  id: true,
                  difficulty: true,
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
                  order: true,
                  themeIds: true,
                  updatedAt: true,
                },
              },
            },
          },
        },
      });
    }

    const groupById = new Map(
      quiz.questionLinks.map((link) => [link.question.id, link.group]),
    );

    const watermarkCode = generateWatermarkCode({
      userId,
      sessionId: attempt.id,
    });

    const questions: TrainingQuestion[] = attempt.attemptQuestions.map((attemptQuestion) => {
      const group = groupById.get(attemptQuestion.question.id) ?? null;
      return buildTrainingQuestionFromDb(
        attemptQuestion.question,
        attemptQuestion.order,
        group,
        themeLabelsById,
        true, // sanitizeForPassage
      );
    });

    return {
      sessionId: attempt.id,
      watermarkCode,
      quiz: {
        id: quiz.id,
        title: quiz.title,
        description: quiz.description,
        slug: quiz.slug,
        stage: quiz.stage,
        questionCount: questions.length,
      },
      questions,
    };
  }

  // Guest / Anonymous ephemeral session
  const guestSessionId = `guest_${randomUUID()}`;
  const watermarkCode = generateWatermarkCode({
    userId: 'guest',
    sessionId: guestSessionId,
  });

  const questions: TrainingQuestion[] = quiz.questionLinks.map((link) =>
    buildTrainingQuestionFromDb(
      link.question,
      link.order,
      link.group,
      themeLabelsById,
      true, // sanitizeForPassage
    ),
  );

  return {
    sessionId: guestSessionId,
    watermarkCode,
    quiz: {
      id: quiz.id,
      title: quiz.title,
      description: quiz.description,
      slug: quiz.slug,
      stage: quiz.stage,
      questionCount: questions.length,
    },
    questions,
  };
}

export async function submitTrainingQuizSession(
  input: SubmitTrainingQuizSessionInput,
): Promise<SubmitTrainingQuizSessionResult> {
  const { sessionId, userId, targetScore = 70, answers } = input;

  // Handle Guest / Ephemeral session submission
  if (sessionId.startsWith('guest_')) {
    const answersByQuestionId = new Map(
      answers.map((ans) => [ans.questionId, ans]),
    );
    const questionIds = Array.from(answersByQuestionId.keys());

    const dbQuestions = await prisma.quizQuestion.findMany({
      where: {
        id: { in: questionIds },
        isPublished: true,
      },
      select: {
        id: true,
        difficulty: true,
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
        order: true,
        themeIds: true,
        updatedAt: true,
      },
    });

    const themeIds = Array.from(
      new Set(dbQuestions.flatMap((q) => q.themeIds ?? [])),
    );
    const themes = themeIds.length > 0
      ? await prisma.theme.findMany({
          where: { id: { in: themeIds } },
          select: { id: true, title: true, shortTitle: true },
        })
      : [];
    const themeLabelsById = buildThemeLabelById(themes);

    let totalScore = 0;
    let totalMaxScore = 0;

    const evaluatedQuestions: TrainingQuizEvaluatedQuestionResult[] = dbQuestions.map(
      (dbQuestion, idx) => {
        const canonicalQuestion = buildCanonicalQuestionFromDb(dbQuestion);
        const submitted = answersByQuestionId.get(dbQuestion.id);

        let studentAnswer: StudentAnswer | null = null;
        let selectedChoiceIndexes: number[] = [];

        if (submitted?.responsePayload) {
          studentAnswer = submitted.responsePayload;
          if (
            studentAnswer &&
            studentAnswer.type === 'mcq' &&
            Array.isArray((studentAnswer as any).choiceIds) &&
            canonicalQuestion.type === 'mcq'
          ) {
            selectedChoiceIndexes = (studentAnswer as any).choiceIds
              .map((id: string) =>
                canonicalQuestion.choices.findIndex((c) => c.id === id),
              )
              .filter((i: number) => i !== undefined && i >= 0);
          }
        } else if (submitted?.selectedChoiceIndexes) {
          selectedChoiceIndexes = submitted.selectedChoiceIndexes;
          if (canonicalQuestion.type === 'mcq') {
            studentAnswer = createMcqStudentAnswerFromIndexes({
              question: canonicalQuestion,
              selectedChoiceIndexes,
            });
          }
        } else if (submitted?.shortAnswerRawValue) {
          studentAnswer = {
            questionId: canonicalQuestion.id,
            type: 'short-answer',
            rawValue: submitted.shortAnswerRawValue,
          };
        } else if (submitted?.hotspotPoints) {
          studentAnswer = {
            questionId: canonicalQuestion.id,
            type: 'hotspot',
            points: submitted.hotspotPoints,
          };
        }

        const evaluation: EvaluationResult = studentAnswer
          ? evaluateQuestion(canonicalQuestion, studentAnswer)
          : getUnansweredEval(canonicalQuestion);

        totalScore += evaluation.score;
        totalMaxScore += evaluation.maxScore;

        const trainingQuestion = buildTrainingQuestionFromDb(
          dbQuestion,
          idx + 1,
          null,
          themeLabelsById,
          false, // return with full solution/explanations
        );

        return {
          ...trainingQuestion,
          evaluation,
          selectedChoiceIndexes,
          responsePayload: studentAnswer,
        };
      },
    );

    const percentage = totalMaxScore > 0
      ? Math.round((totalScore / totalMaxScore) * 100)
      : 0;

    return {
      sessionId,
      score: totalScore,
      maxScore: totalMaxScore,
      totalQuestions: evaluatedQuestions.length,
      percentage,
      isSuccess: percentage >= targetScore,
      watermarkCode: generateWatermarkCode({ userId: 'guest', sessionId }),
      questions: evaluatedQuestions,
    };
  }

  // Authenticated Persistent Session Submission
  if (!userId) {
    throw new Error('Session introuvable ou accès non autorisé.');
  }

  const attempt = await prisma.userTrainingQuizAttempt.findFirst({
    where: { id: sessionId, userId },
    include: {
      chapter: true,
      quiz: {
        include: {
          questionLinks: {
            include: {
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
      attemptQuestions: {
        orderBy: { order: 'asc' },
        include: {
          question: {
            select: {
              id: true,
              difficulty: true,
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
              order: true,
              themeIds: true,
              updatedAt: true,
            },
          },
        },
      },
    },
  });

  if (!attempt) {
    throw new Error('Session introuvable ou accès non autorisé.');
  }

  const themeIds = Array.from(
    new Set(
      attempt.attemptQuestions.flatMap(
        (aq) => aq.question.themeIds ?? [],
      ),
    ),
  );
  const themes = themeIds.length > 0
    ? await prisma.theme.findMany({
        where: { id: { in: themeIds } },
        select: { id: true, title: true, shortTitle: true },
      })
    : [];
  const themeLabelsById = buildThemeLabelById(themes);

  const groupByQuestionId = new Map(
    attempt.quiz.questionLinks.map((link) => [link.questionId, link.group]),
  );

  const watermarkCode = generateWatermarkCode({
    userId: attempt.userId,
    sessionId: attempt.id,
  });

  // Idempotency: If attempt is already completed, return existing results without re-incrementing
  if (attempt.status === 'COMPLETED') {
    const evaluatedQuestions: TrainingQuizEvaluatedQuestionResult[] = attempt.attemptQuestions.map(
      (attemptQuestion) => {
        const group = groupByQuestionId.get(attemptQuestion.question.id) ?? null;
        const trainingQuestion = buildTrainingQuestionFromDb(
          attemptQuestion.question,
          attemptQuestion.order,
          group,
          themeLabelsById,
          false,
        );

        const canonicalQuestion = buildCanonicalQuestionFromDb(attemptQuestion.question);
        const studentAnswer = (attemptQuestion.responsePayload as any) as StudentAnswer | null;
        const evaluation: EvaluationResult = studentAnswer
          ? evaluateQuestion(canonicalQuestion, studentAnswer)
          : getUnansweredEval(canonicalQuestion);

        let selectedChoiceIndexes: number[] = [];
        if (
          studentAnswer?.type === 'mcq' &&
          Array.isArray((studentAnswer as any).choiceIds) &&
          canonicalQuestion.type === 'mcq'
        ) {
          selectedChoiceIndexes = (studentAnswer as any).choiceIds
            .map((id: string) => canonicalQuestion.choices.findIndex((c) => c.id === id))
            .filter((i: number) => i !== undefined && i >= 0);
        }

        return {
          ...trainingQuestion,
          evaluation,
          selectedChoiceIndexes,
          responsePayload: studentAnswer,
        };
      },
    );

    const finalScore = attempt.score ?? 0;
    const finalMaxScore = attempt.maxScore ?? 0;
    const finalSuccessRate = attempt.successRate ?? 0;

    return {
      sessionId: attempt.id,
      score: finalScore,
      maxScore: finalMaxScore,
      totalQuestions: attempt.attemptQuestions.length,
      percentage: finalSuccessRate,
      isSuccess: finalSuccessRate >= targetScore,
      watermarkCode,
      questions: evaluatedQuestions,
    };
  }

  if (attempt.status !== 'IN_PROGRESS') {
    throw new Error("Cette session de quiz n'est plus active.");
  }

  const answersByQuestionId = new Map(
    answers.map((ans) => [ans.questionId, ans]),
  );

  let totalScore = 0;
  let totalMaxScore = 0;

  const evaluatedQuestions: TrainingQuizEvaluatedQuestionResult[] = [];
  const attemptQuestionUpdates: Array<{
    id: string;
    responsePayload: any;
  }> = [];

  for (const attemptQuestion of attempt.attemptQuestions) {
    // Refuser la soumission si la question a muté depuis le démarrage de la session
    if (
      attemptQuestion.questionUpdatedAt &&
      attemptQuestion.question.updatedAt &&
      attemptQuestion.questionUpdatedAt.getTime() !== attemptQuestion.question.updatedAt.getTime()
    ) {
      throw new Error(
        'Une ou plusieurs questions ont été modifiées depuis le début de votre session. Veuillez recommencer le quiz.'
      );
    }

    const canonicalQuestion = buildCanonicalQuestionFromDb(
      attemptQuestion.question,
    );
    const submitted = answersByQuestionId.get(attemptQuestion.question.id);

    let studentAnswer: StudentAnswer | null = null;
    let selectedChoiceIndexes: number[] = [];

    if (submitted?.responsePayload) {
      studentAnswer = submitted.responsePayload;
      if (
        studentAnswer &&
        studentAnswer.type === 'mcq' &&
        Array.isArray((studentAnswer as any).choiceIds) &&
        canonicalQuestion.type === 'mcq'
      ) {
        selectedChoiceIndexes = (studentAnswer as any).choiceIds
          .map((id: string) =>
            canonicalQuestion.choices.findIndex((c) => c.id === id),
          )
          .filter((i: number) => i !== undefined && i >= 0);
      }
    } else if (submitted?.selectedChoiceIndexes) {
      selectedChoiceIndexes = submitted.selectedChoiceIndexes;
      if (canonicalQuestion.type === 'mcq') {
        studentAnswer = createMcqStudentAnswerFromIndexes({
          question: canonicalQuestion,
          selectedChoiceIndexes,
        });
      }
    } else if (submitted?.shortAnswerRawValue) {
      studentAnswer = {
        questionId: canonicalQuestion.id,
        type: 'short-answer',
        rawValue: submitted.shortAnswerRawValue,
      };
    } else if (submitted?.hotspotPoints) {
      studentAnswer = {
        questionId: canonicalQuestion.id,
        type: 'hotspot',
        points: submitted.hotspotPoints,
      };
    }

    const evaluation: EvaluationResult = studentAnswer
      ? evaluateQuestion(canonicalQuestion, studentAnswer)
      : getUnansweredEval(canonicalQuestion);

    totalScore += evaluation.score;
    totalMaxScore += evaluation.maxScore;

    attemptQuestionUpdates.push({
      id: attemptQuestion.id,
      responsePayload: (studentAnswer as any) ?? null,
    });

    const group = groupByQuestionId.get(attemptQuestion.question.id) ?? null;
    const trainingQuestion = buildTrainingQuestionFromDb(
      attemptQuestion.question,
      attemptQuestion.order,
      group,
      themeLabelsById,
      false,
    );

    evaluatedQuestions.push({
      ...trainingQuestion,
      evaluation,
      selectedChoiceIndexes,
      responsePayload: studentAnswer,
    });
  }

  const percentage = totalMaxScore > 0
    ? Math.round((totalScore / totalMaxScore) * 100)
    : 0;

  const now = new Date();

  // Atomically update Attempt & Questions
  await prisma.$transaction([
    prisma.userTrainingQuizAttempt.update({
      where: { id: attempt.id },
      data: {
        status: 'COMPLETED',
        score: totalScore,
        maxScore: totalMaxScore,
        successRate: percentage,
        submittedAt: now,
      },
    }),
    ...attemptQuestionUpdates.map((update) =>
      prisma.userTrainingQuizAttemptQuestion.update({
        where: { id: update.id },
        data: {
          responsePayload: update.responsePayload,
          answeredAt: now,
        },
      }),
    ),
  ]);

  // Update UserTrainingQuizProgress aggregate
  const existingProgress = await prisma.userTrainingQuizProgress.findUnique({
    where: {
      userId_academicEnrollmentId_quizId: {
        userId: attempt.userId,
        academicEnrollmentId: attempt.academicEnrollmentId,
        quizId: attempt.quizId,
      },
    },
  });

  const bestScore = Math.max(existingProgress?.bestScore ?? 0, Math.round(totalScore));
  const bestSuccessRate = Math.max(existingProgress?.successRate ?? 0, percentage);
  const currentAttempts = (existingProgress?.attemptsCount ?? 0) + 1;
  const currentCumulative =
    (existingProgress?.cumulativeSuccessRate ?? 0) + percentage;
  const minSuccessRate = existingProgress
    ? Math.min(existingProgress.minSuccessRate, percentage)
    : percentage;
  const masteredAt =
    bestSuccessRate >= targetScore ? existingProgress?.masteredAt ?? now : null;

  await prisma.userTrainingQuizProgress.upsert({
    where: {
      userId_academicEnrollmentId_quizId: {
        userId: attempt.userId,
        academicEnrollmentId: attempt.academicEnrollmentId,
        quizId: attempt.quizId,
      },
    },
    update: {
      attemptsCount: { increment: 1 },
      bestScore,
      chapterId: attempt.chapterId,
      cumulativeSuccessRate: currentCumulative,
      lastAttemptAt: now,
      masteredAt,
      minSuccessRate,
      successRate: bestSuccessRate,
      totalQuestions: evaluatedQuestions.length,
    },
    create: {
      userId: attempt.userId,
      academicEnrollmentId: attempt.academicEnrollmentId,
      chapterId: attempt.chapterId,
      quizId: attempt.quizId,
      attemptsCount: 1,
      bestScore: Math.round(totalScore),
      cumulativeSuccessRate: percentage,
      lastAttemptAt: now,
      masteredAt,
      minSuccessRate: percentage,
      successRate: percentage,
      totalQuestions: evaluatedQuestions.length,
    },
  });

  return {
    sessionId: attempt.id,
    score: totalScore,
    maxScore: totalMaxScore,
    totalQuestions: evaluatedQuestions.length,
    percentage,
    isSuccess: percentage >= targetScore,
    watermarkCode,
    questions: evaluatedQuestions,
  };
}
