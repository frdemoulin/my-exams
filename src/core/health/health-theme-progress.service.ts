import prisma from '@/lib/db/prisma';
import { evaluateQuestion } from '@/core/questions/question-evaluation';
import type { Question, StudentAnswer } from '@/core/questions';
import {
  normalizeHealthMockExamQuestion,
  normalizeHealthMockExamStudentAnswer,
} from '@/core/health-mock-exam/health-mock-exam.question';
import { evaluateHealthAssessmentQuestion } from '@/core/health-mock-exam/health-mock-exam.scoring';
import { buildCanonicalQuestionFromDb } from '@/core/training/training-quiz-session.service';
import type {
  FetchHealthThemeProgressInput,
  HealthCourseUnitThemeProgressSummary,
  HealthThemeMasteryStatus,
  HealthThemeProgressItem,
  HealthThemeSourceMetrics,
} from './health-theme-progress.types';

// ============================================================================
// PURE HELPERS (Exported for unit testing & business logic verification)
// ============================================================================

/**
 * Sélectionne de façon déterministe la DERNIÈRE tentative :
 * 1. submittedAt décroissant
 * 2. createdAt décroissant
 * 3. tie-break stable sur id décroissant
 */
export function selectLatestAttempt<
  T extends {
    id: string;
    submittedAt?: Date | string | null;
    createdAt?: Date | string | null;
  },
>(attempts: T[]): T | null {
  if (attempts.length === 0) return null;

  return attempts.slice().sort((a, b) => {
    // 1. submittedAt décroissant
    const aSub = a.submittedAt ? new Date(a.submittedAt).getTime() : 0;
    const bSub = b.submittedAt ? new Date(b.submittedAt).getTime() : 0;
    if (bSub !== aSub) {
      return bSub - aSub;
    }
    // 2. createdAt décroissant
    const aCreate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const bCreate = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    if (bCreate !== aCreate) {
      return bCreate - aCreate;
    }
    // 3. id décroissant
    return b.id.localeCompare(a.id);
  })[0];
}

/**
 * Calcule le statut de maîtrise d'un thème selon les règles de cadrage V2 :
 *
 * 1. Données insuffisantes (INSUFFICIENT_DATA) :
 *    - N_total < 3
 *    - OU aucune source ne possède au moins 3 questions évaluées (ex: 1 Quiz + 1 Colle + 1 EB = 3, mais aucune >= 3 => insuffisant)
 *
 * 2. À revoir (TO_REVIEW) :
 *    - Au moins une source qualifiée (disposant de >= 3 questions) présente une réussite < 60 %
 *
 * 3. Solide (SOLID) :
 *    - Toutes les sources qualifiées présentent une réussite >= 80 %
 *    - ET N_total >= 5
 *
 * 4. À consolider (TO_CONSOLIDATE) :
 *    - Tous les autres cas avec suffisamment de données
 */
export function computeThemeMasteryStatus(
  quiz: HealthThemeSourceMetrics | null,
  colles: HealthThemeSourceMetrics | null,
  mockExams: HealthThemeSourceMetrics | null,
): HealthThemeMasteryStatus {
  const sources = [quiz, colles, mockExams].filter(
    (s): s is HealthThemeSourceMetrics => s !== null && s.questionsEvaluated > 0,
  );
  const totalQuestions = sources.reduce((sum, s) => sum + s.questionsEvaluated, 0);

  // Sources qualifiées : disposant d'au moins 3 questions évaluées
  const qualifiedSources = sources.filter((s) => s.questionsEvaluated >= 3);

  // Règle 1 : Moins de 3 questions au total OU aucune source qualifiée (>= 3 questions)
  if (totalQuestions < 3 || qualifiedSources.length === 0) {
    return 'INSUFFICIENT_DATA';
  }

  // Règle 2 : Au moins une source qualifiée avec réussite < 60 %
  const hasLowSource = qualifiedSources.some(
    (s) => s.percentage !== null && s.percentage < 60,
  );
  if (hasLowSource) {
    return 'TO_REVIEW';
  }

  // Règle 3 : Toutes les sources qualifiées >= 80 % ET total >= 5
  const allHigh = qualifiedSources.every(
    (s) => s.percentage !== null && s.percentage >= 80,
  );
  if (allHigh && totalQuestions >= 5) {
    return 'SOLID';
  }

  // Règle 4 : Tous les autres cas documentés
  return 'TO_CONSOLIDATE';
}

// ============================================================================
// MAIN SERVICE FUNCTION
// ============================================================================

type ThemeAccumulator = {
  themeId: string;
  teachingElementIds: Set<string>;
  quiz: { evaluated: number; correct: number };
  colles: { evaluated: number; score: number; maxScore: number };
  mockExams: { evaluated: number; score: number; maxScore: number };
};

export async function fetchHealthCourseUnitThemeProgress(
  input: FetchHealthThemeProgressInput,
): Promise<HealthCourseUnitThemeProgressSummary> {
  const { courseUnitId, teachingElements, mockExamIds, userId } = input;

  const formattedTeachingElements = teachingElements.map((te) => ({
    id: te.id,
    code: te.code ?? te.shortTitle ?? te.title,
    title: te.title,
  }));

  if (!userId) {
    return {
      themes: [],
      teachingElements: formattedTeachingElements,
      totalFollowedThemes: 0,
      hasEnoughDataForAnalysis: false,
      excludedDivergentQuestionsCount: 0,
    };
  }

  const activeTeIds = teachingElements.map((te) => te.id);

  // 1. Identification des quiz publiés de l'UE
  const assignments = activeTeIds.length > 0
    ? await prisma.chapterAssignment.findMany({
        where: {
          contextType: 'HEALTH_TEACHING_ELEMENT',
          contextId: { in: activeTeIds },
          isActive: true,
        },
        select: {
          contextId: true,
          chapter: {
            select: {
              sections: {
                where: { isPublished: true },
                select: {
                  quizzes: {
                    where: { isPublished: true },
                    select: {
                      id: true,
                      questionLinks: {
                        where: { question: { isPublished: true } },
                        select: { id: true },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      })
    : [];

  const uniqueAllQuizIdsSet = new Set<string>();
  for (const assignment of assignments) {
    for (const section of assignment.chapter.sections) {
      for (const quiz of section.quizzes) {
        if (quiz.questionLinks.length > 0) {
          uniqueAllQuizIdsSet.add(quiz.id);
        }
      }
    }
  }
  const uniqueAllQuizIds = Array.from(uniqueAllQuizIdsSet);

  // 2. Récupération des dernières tentatives utiles
  const [rawQuizAttempts, rawMockAttempts] = await Promise.all([
    uniqueAllQuizIds.length > 0
      ? prisma.userTrainingQuizAttempt.findMany({
          where: {
            userId,
            quizId: { in: uniqueAllQuizIds },
            status: 'COMPLETED',
          },
          select: {
            id: true,
            quizId: true,
            submittedAt: true,
            createdAt: true,
          },
        })
      : [],
    mockExamIds.length > 0
      ? prisma.userHealthMockExamAttempt.findMany({
          where: {
            userId,
            mockExam: { courseUnitId },
            status: { in: ['SUBMITTED', 'EXPIRED'] },
          },
          select: {
            id: true,
            mockExamId: true,
            submittedAt: true,
            createdAt: true,
            mockExam: {
              select: {
                id: true,
                type: true, // MOCK_EXAM or COLLE
              },
            },
          },
        })
      : [],
  ]);

  // Sélection de la DERNIÈRE tentative par quiz
  const quizAttemptsByQuizId = new Map<string, typeof rawQuizAttempts>();
  for (const att of rawQuizAttempts) {
    const list = quizAttemptsByQuizId.get(att.quizId) ?? [];
    list.push(att);
    quizAttemptsByQuizId.set(att.quizId, list);
  }

  const latestQuizAttemptIds: string[] = [];
  for (const attemptsList of quizAttemptsByQuizId.values()) {
    const latest = selectLatestAttempt(attemptsList);
    if (latest) latestQuizAttemptIds.push(latest.id);
  }

  // Sélection de la DERNIÈRE tentative par Colle et par Examen blanc
  const mockAttemptsByExamId = new Map<string, typeof rawMockAttempts>();
  for (const att of rawMockAttempts) {
    const list = mockAttemptsByExamId.get(att.mockExamId) ?? [];
    list.push(att);
    mockAttemptsByExamId.set(att.mockExamId, list);
  }

  const latestColleAttemptIds: string[] = [];
  const latestMockExamAttemptIds: string[] = [];
  for (const attemptsList of mockAttemptsByExamId.values()) {
    const latest = selectLatestAttempt(attemptsList);
    if (latest) {
      if (latest.mockExam.type === 'COLLE') {
        latestColleAttemptIds.push(latest.id);
      } else {
        latestMockExamAttemptIds.push(latest.id);
      }
    }
  }

  // 3. Récupération des questions des dernières tentatives
  const [quizAttemptQuestions, mockAttemptQuestions] = await Promise.all([
    latestQuizAttemptIds.length > 0
      ? prisma.userTrainingQuizAttemptQuestion.findMany({
          where: { attemptId: { in: latestQuizAttemptIds } },
          select: {
            id: true,
            questionUpdatedAt: true,
            responsePayload: true,
            question: {
              select: {
                id: true,
                questionType: true,
                question: true,
                choices: true,
                answerPayload: true,
                answerFormat: true,
                correctChoiceIndex: true,
                correctChoiceIndexes: true,
                explanation: true,
                choiceExplanations: true,
                themeIds: true,
                updatedAt: true,
                chapter: {
                  select: {
                    assignments: {
                      where: {
                        contextType: 'HEALTH_TEACHING_ELEMENT',
                        contextId: { in: activeTeIds },
                        isActive: true,
                      },
                      select: { contextId: true },
                    },
                  },
                },
              },
            },
          },
        })
      : [],
    latestColleAttemptIds.length > 0 || latestMockExamAttemptIds.length > 0
      ? prisma.userHealthMockExamAttemptQuestion.findMany({
          where: {
            attemptId: { in: [...latestColleAttemptIds, ...latestMockExamAttemptIds] },
          },
          select: {
            attemptId: true,
            selectedChoiceIndexes: true,
            responsePayload: true,
            examSection: {
              select: {
                teachingElementId: true,
              },
            },
            question: {
              select: {
                id: true,
                questionType: true,
                question: true,
                choices: true,
                answerPayload: true,
                answerFormat: true,
                correctChoiceIndex: true,
                correctChoiceIndexes: true,
                explanation: true,
                choiceExplanations: true,
                themeIds: true,
              },
            },
          },
        })
      : [],
  ]);

  const accumulatorsByThemeId = new Map<string, ThemeAccumulator>();

  const getOrCreateAccumulator = (themeId: string): ThemeAccumulator => {
    let acc = accumulatorsByThemeId.get(themeId);
    if (!acc) {
      acc = {
        themeId,
        teachingElementIds: new Set(),
        quiz: { evaluated: 0, correct: 0 },
        colles: { evaluated: 0, score: 0, maxScore: 0 },
        mockExams: { evaluated: 0, score: 0, maxScore: 0 },
      };
      accumulatorsByThemeId.set(themeId, acc);
    }
    return acc;
  };

  let excludedDivergentQuestionsCount = 0;

  // 4. Traitement des questions de Quiz
  for (const aq of quizAttemptQuestions) {
    if (!aq.question || aq.question.themeIds.length === 0) continue;

    // Règle 3 : Exclure si questionUpdatedAt diverge de question.updatedAt
    const hasDivergence =
      aq.questionUpdatedAt &&
      aq.question.updatedAt &&
      aq.questionUpdatedAt.getTime() !== aq.question.updatedAt.getTime();

    if (hasDivergence) {
      excludedDivergentQuestionsCount++;
      continue;
    }

    const studentAnswer = aq.responsePayload as StudentAnswer | null;
    if (!studentAnswer) continue;

    const canonicalQuestion = buildCanonicalQuestionFromDb(aq.question as any);
    const evaluation = evaluateQuestion(canonicalQuestion, studentAnswer);

    // Règle 4 : Une question non répondue ne génère aucune évidence
    if (evaluation.status === 'unanswered') continue;

    const isCorrect = evaluation.status === 'correct';
    const associatedTeIds = aq.question.chapter.assignments.map((a) => a.contextId);

    // Règle 5 : Multi-thème (la question contribue à chacun de ses thèmes)
    for (const themeId of aq.question.themeIds) {
      const acc = getOrCreateAccumulator(themeId);
      acc.quiz.evaluated += 1;
      if (isCorrect) acc.quiz.correct += 1;
      for (const teId of associatedTeIds) {
        acc.teachingElementIds.add(teId);
      }
    }
  }

  // 5. Traitement des questions de Colles et Examens Blancs
  const colleAttemptIdSet = new Set(latestColleAttemptIds);

  for (const aq of mockAttemptQuestions) {
    if (!aq.question || aq.question.themeIds.length === 0) continue;

    const isColle = colleAttemptIdSet.has(aq.attemptId);
    const canonicalQuestion = normalizeHealthMockExamQuestion(aq.question as any);
    const answer = normalizeHealthMockExamStudentAnswer({
      question: canonicalQuestion,
      selectedChoiceIndexes: aq.selectedChoiceIndexes,
      responsePayload: aq.responsePayload,
    });
    const evaluation = evaluateHealthAssessmentQuestion(canonicalQuestion, answer);

    // Règle 4 : Une question non répondue ne génère aucune évidence
    if (evaluation.status === 'unanswered') continue;

    const teId = aq.examSection.teachingElementId;

    for (const themeId of aq.question.themeIds) {
      const acc = getOrCreateAccumulator(themeId);
      acc.teachingElementIds.add(teId);

      const target = isColle ? acc.colles : acc.mockExams;
      target.evaluated += 1;
      target.score += evaluation.score;
      target.maxScore += evaluation.maxScore;
    }
  }

  // 6. Récupération des libellés de Thèmes
  const encounteredThemeIds = Array.from(accumulatorsByThemeId.keys());
  const themesMeta = encounteredThemeIds.length > 0
    ? await prisma.theme.findMany({
        where: { id: { in: encounteredThemeIds } },
        select: { id: true, title: true, shortTitle: true },
      })
    : [];

  const themeMetaMap = new Map(themesMeta.map((t) => [t.id, t]));

  // 7. Construction des résultats par thème
  const themeItems: HealthThemeProgressItem[] = [];

  for (const acc of accumulatorsByThemeId.values()) {
    const meta = themeMetaMap.get(acc.themeId);
    const title = meta?.title ?? 'Thème inconnu';
    const shortTitle = meta?.shortTitle ?? null;

    const quizMetrics: HealthThemeSourceMetrics | null =
      acc.quiz.evaluated > 0
        ? {
            questionsEvaluated: acc.quiz.evaluated,
            correctAnswers: acc.quiz.correct,
            percentage: Math.round((acc.quiz.correct / acc.quiz.evaluated) * 100),
          }
        : null;

    const collesMetrics: HealthThemeSourceMetrics | null =
      acc.colles.evaluated > 0
        ? {
            questionsEvaluated: acc.colles.evaluated,
            score: Math.round(acc.colles.score * 100) / 100,
            maxScore: Math.round(acc.colles.maxScore * 100) / 100,
            percentage:
              acc.colles.maxScore > 0
                ? Math.round((acc.colles.score / acc.colles.maxScore) * 100)
                : null,
          }
        : null;

    const mockExamsMetrics: HealthThemeSourceMetrics | null =
      acc.mockExams.evaluated > 0
        ? {
            questionsEvaluated: acc.mockExams.evaluated,
            score: Math.round(acc.mockExams.score * 100) / 100,
            maxScore: Math.round(acc.mockExams.maxScore * 100) / 100,
            percentage:
              acc.mockExams.maxScore > 0
                ? Math.round((acc.mockExams.score / acc.mockExams.maxScore) * 100)
                : null,
          }
        : null;

    const status = computeThemeMasteryStatus(quizMetrics, collesMetrics, mockExamsMetrics);
    const totalQuestionsEvaluated =
      acc.quiz.evaluated + acc.colles.evaluated + acc.mockExams.evaluated;

    themeItems.push({
      themeId: acc.themeId,
      title,
      shortTitle,
      teachingElementIds: Array.from(acc.teachingElementIds),
      status,
      totalQuestionsEvaluated,
      sources: {
        quiz: quizMetrics,
        colles: collesMetrics,
        mockExams: mockExamsMetrics,
      },
    });
  }

  // Tri déterministe des thèmes :
  // D'abord par statut (TO_REVIEW, TO_CONSOLIDATE, SOLID, INSUFFICIENT_DATA),
  // puis par volume décroissant, puis alphabétique sur le titre
  const statusPriority: Record<HealthThemeMasteryStatus, number> = {
    TO_REVIEW: 0,
    TO_CONSOLIDATE: 1,
    SOLID: 2,
    INSUFFICIENT_DATA: 3,
  };

  themeItems.sort((a, b) => {
    const prioDiff = statusPriority[a.status] - statusPriority[b.status];
    if (prioDiff !== 0) return prioDiff;
    if (b.totalQuestionsEvaluated !== a.totalQuestionsEvaluated) {
      return b.totalQuestionsEvaluated - a.totalQuestionsEvaluated;
    }
    return a.title.localeCompare(b.title, 'fr-FR');
  });

  const followedThemes = themeItems.filter((t) => t.status !== 'INSUFFICIENT_DATA');
  const hasEnoughDataForAnalysis = followedThemes.length > 0;

  return {
    themes: themeItems,
    teachingElements: formattedTeachingElements,
    totalFollowedThemes: followedThemes.length,
    hasEnoughDataForAnalysis,
    excludedDivergentQuestionsCount,
  };
}
