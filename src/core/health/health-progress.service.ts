import prisma from "@/lib/db/prisma";
import { fetchHealthCourseUnitThemeProgress } from "./health-theme-progress.service";
import type {
  FetchHealthCourseUnitProgressInput,
  HealthCourseUnitProgressSummary,
} from "./health-progress.types";

// ============================================================================
// PURE LOGIC HELPERS (Exported for unit testing & clean production reuse)
// ============================================================================

/**
 * Filtre les identifiants uniques de quiz ayant au moins une tentative COMPLETED.
 * Exclut strictement IN_PROGRESS et ABANDONED.
 */
export function filterCompletedQuizIds(
  attempts: Array<{ quizId: string; status: string }>,
): Set<string> {
  const completedQuizSet = new Set<string>();
  for (const att of attempts) {
    if (att.status === "COMPLETED") {
      completedQuizSet.add(att.quizId);
    }
  }
  return completedQuizSet;
}

/**
 * Filtre les identifiants de quiz dont l'état canonique indique une maîtrise (masteredAt !== null).
 */
export function filterMasteredQuizIds(
  progressEntries: Array<{ quizId: string; masteredAt: Date | string | null }>,
): Set<string> {
  const masteredQuizSet = new Set<string>();
  for (const prog of progressEntries) {
    if (prog.masteredAt !== null) {
      masteredQuizSet.add(prog.quizId);
    }
  }
  return masteredQuizSet;
}

/**
 * Calcule les métriques globales d'entraînement à l'échelle UE.
 * Utilise la collection dédupliquée des quiz de l'UE pour éviter tout double comptage inter-EC.
 */
export function computeTrainingOverviewMetrics(
  allUniqueQuizIds: string[],
  completedQuizSet: Set<string>,
): { completed: number; total: number; percentage: number } {
  const total = allUniqueQuizIds.length;
  let completed = 0;
  for (const quizId of allUniqueQuizIds) {
    if (completedQuizSet.has(quizId)) {
      completed++;
    }
  }
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { completed, total, percentage };
}

/**
 * Calcule les métriques d'entraînement pour un EC spécifique.
 */
export function computeTrainingElementMetrics(
  quizIds: string[],
  completedQuizSet: Set<string>,
  masteredQuizSet: Set<string>,
): {
  completedQuizzes: number;
  masteredQuizzes: number;
  totalQuizzes: number;
  completionPercentage: number;
  masteryPercentage: number;
} {
  const totalQuizzes = quizIds.length;
  let completedQuizzes = 0;
  let masteredQuizzes = 0;

  for (const qId of quizIds) {
    if (completedQuizSet.has(qId)) completedQuizzes++;
    if (masteredQuizSet.has(qId)) masteredQuizzes++;
  }

  const completionPercentage =
    totalQuizzes > 0 ? Math.round((completedQuizzes / totalQuizzes) * 100) : 0;
  const masteryPercentage =
    totalQuizzes > 0 ? Math.round((masteredQuizzes / totalQuizzes) * 100) : 0;

  return {
    completedQuizzes,
    masteredQuizzes,
    totalQuizzes,
    completionPercentage,
    masteryPercentage,
  };
}

/**
 * Sélectionne de façon déterministe la meilleure tentative d'un examen blanc :
 * 1. percentage décroissant
 * 2. submittedAt décroissant
 * 3. createdAt décroissant
 * 4. tie-break stable sur id décroissant
 */
export function selectBestMockExamAttempt<
  T extends {
    id: string;
    percentage: number | null;
    submittedAt?: Date | string | null;
    createdAt?: Date | string | null;
  },
>(attempts: T[]): T | null {
  const eligible = attempts.filter(
    (a) => a.percentage !== null && a.percentage !== undefined,
  );
  if (eligible.length === 0) return null;

  return eligible.slice().sort((a, b) => {
    // 1. Percentage décroissant
    if (b.percentage! !== a.percentage!) {
      return b.percentage! - a.percentage!;
    }
    // 2. submittedAt décroissant
    const aSub = a.submittedAt ? new Date(a.submittedAt).getTime() : 0;
    const bSub = b.submittedAt ? new Date(b.submittedAt).getTime() : 0;
    if (bSub !== aSub) {
      return bSub - aSub;
    }
    // 3. createdAt décroissant
    const aCreate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const bCreate = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    if (bCreate !== aCreate) {
      return bCreate - aCreate;
    }
    // 4. Tie-break stable sur l'identifiant
    return b.id.localeCompare(a.id);
  })[0];
}

/**
 * Calcule les métriques d'ensemble pour les examens blancs :
 * - Avancement : exam.attemptCount > 0 => réalisé
 * - Performance : moyenne calculée exclusivement sur les EB réalisés disposant d'un pourcentage
 * - Dénominateur de la moyenne = nombre d'EB avec score exploitable (1 seul poids max par EB)
 */
export function computeMockExamOverviewMetrics(
  exams: Array<{ id?: string; examId?: string; attemptCount: number; bestPercentage?: number | null }>,
): {
  completedCount: number;
  totalCount: number;
  averageScorePercentage: number | null;
  bestScorePercentage: number | null;
  percentage: number;
} {
  const totalCount = exams.length;
  let completedCount = 0;
  let scoredExamsCount = 0;
  let sumBestPercentages = 0;
  let maxBestPercentage: number | null = null;

  for (const exam of exams) {
    if (exam.attemptCount > 0) {
      completedCount++;
      if (exam.bestPercentage !== null && exam.bestPercentage !== undefined) {
        scoredExamsCount++;
        sumBestPercentages += exam.bestPercentage;
        if (maxBestPercentage === null || exam.bestPercentage > maxBestPercentage) {
          maxBestPercentage = exam.bestPercentage;
        }
      }
    }
  }

  const averageScorePercentage =
    scoredExamsCount > 0 ? Math.round(sumBestPercentages / scoredExamsCount) : null;
  const percentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return {
    completedCount,
    totalCount,
    averageScorePercentage,
    bestScorePercentage: maxBestPercentage,
    percentage,
  };
}

// ============================================================================
// MAIN SERVICE FUNCTION
// ============================================================================

export async function fetchHealthCourseUnitProgressSummary(
  input: FetchHealthCourseUnitProgressInput,
): Promise<HealthCourseUnitProgressSummary> {
  const { courseUnit, evaluationsProgress, userId } = input;

  // 1. Résolution stricte des quiz éligibles réellement exposés par EC
  const activeTeachingElements = courseUnit.teachingElements;
  const activeTeIds = activeTeachingElements.map((te) => te.id);

  const assignments = activeTeIds.length > 0
    ? await prisma.chapterAssignment.findMany({
        where: {
          contextType: "HEALTH_TEACHING_ELEMENT",
          contextId: { in: activeTeIds },
          isActive: true,
        },
        select: {
          contextId: true,
          chapter: {
            select: {
              id: true,
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

  const ecQuizIdsMap = new Map<string, Set<string>>();
  for (const te of activeTeachingElements) {
    ecQuizIdsMap.set(te.id, new Set<string>());
  }

  const allUniqueQuizIdsSet = new Set<string>();

  for (const assignment of assignments) {
    const teSet = ecQuizIdsMap.get(assignment.contextId);
    for (const section of assignment.chapter.sections) {
      for (const quiz of section.quizzes) {
        if (quiz.questionLinks.length > 0) {
          if (teSet) {
            teSet.add(quiz.id);
          }
          allUniqueQuizIdsSet.add(quiz.id);
        }
      }
    }
  }

  const uniqueAllQuizIds = Array.from(allUniqueQuizIdsSet);

  // 2. Récupération des tentatives et progressions pour l'utilisateur
  let completedQuizSet = new Set<string>();
  let masteredQuizSet = new Set<string>();

  if (userId && uniqueAllQuizIds.length > 0) {
    const [rawAttempts, rawProgress] = await Promise.all([
      prisma.userTrainingQuizAttempt.findMany({
        where: {
          userId,
          quizId: { in: uniqueAllQuizIds },
          status: "COMPLETED",
        },
        select: {
          quizId: true,
          status: true,
        },
      }),
      prisma.userTrainingQuizProgress.findMany({
        where: {
          userId,
          quizId: { in: uniqueAllQuizIds },
          masteredAt: { not: null },
        },
        select: {
          quizId: true,
          masteredAt: true,
        },
      }),
    ]);

    completedQuizSet = filterCompletedQuizIds(rawAttempts);
    masteredQuizSet = filterMasteredQuizIds(rawProgress);
  }

  // 3. Déduplication réelle du KPI global Training UE (aucun cumul par somme d'EC)
  const trainingOverview = computeTrainingOverviewMetrics(
    uniqueAllQuizIds,
    completedQuizSet,
  );

  // 4. Synthèse Entraînement par EC
  const trainingByTeachingElement = activeTeachingElements.map((te) => {
    const quizIds = Array.from(ecQuizIdsMap.get(te.id) ?? []);
    const metrics = computeTrainingElementMetrics(
      quizIds,
      completedQuizSet,
      masteredQuizSet,
    );

    return {
      teachingElementId: te.id,
      code: te.code ?? te.shortTitle ?? te.title,
      title: te.title,
      ...metrics,
    };
  });

  // 5. Section Colles (issue de evaluationsProgress)
  const collesList = Object.values(evaluationsProgress.colles);
  const colleResults = collesList.map((c) => ({
    colleId: c.colleId,
    code: c.colleSlug.toUpperCase(),
    title: `Colle ${c.colleSlug.toUpperCase()}`,
    attemptCount: c.attemptCount,
    latestPercentage: c.latestAttempt?.percentage ?? null,
    bestPercentage: c.bestAttempt?.percentage ?? null,
  }));

  const collesOverviewPercentage =
    evaluationsProgress.totalCollesCount > 0
      ? Math.round(
          (evaluationsProgress.completedCollesCount / evaluationsProgress.totalCollesCount) * 100,
        )
      : 0;

  // 6. Section Examens blancs (EB)
  const mockExamSummaries = courseUnit.mockExams;
  const mockExamIds = mockExamSummaries.map((e) => e.id);

  // Récupération de toutes les tentatives terminées (SUBMITTED / EXPIRED)
  const bestAttemptByExamId = new Map<
    string,
    {
      id: string;
      percentage: number;
    }
  >();

  if (userId && mockExamIds.length > 0) {
    const attempts = await prisma.userHealthMockExamAttempt.findMany({
      where: {
        userId,
        mockExamId: { in: mockExamIds },
        status: { in: ["SUBMITTED", "EXPIRED"] },
      },
      select: {
        id: true,
        mockExamId: true,
        percentage: true,
        submittedAt: true,
        createdAt: true,
      },
    });

    const attemptsByExamId = new Map<string, typeof attempts>();
    for (const att of attempts) {
      const list = attemptsByExamId.get(att.mockExamId) ?? [];
      list.push(att);
      attemptsByExamId.set(att.mockExamId, list);
    }

    for (const [examId, examAttempts] of attemptsByExamId.entries()) {
      const best = selectBestMockExamAttempt(examAttempts);
      if (best && best.percentage !== null) {
        bestAttemptByExamId.set(examId, {
          id: best.id,
          percentage: best.percentage,
        });
      }
    }
  }

  // Récupération des résultats par section sur l'unique attemptId retenu
  const bestAttemptIds = Array.from(bestAttemptByExamId.values()).map((a) => a.id);
  const sectionResultsByAttemptId = new Map<string, Map<string, number>>();

  if (bestAttemptIds.length > 0) {
    const sectionResults = await prisma.userHealthMockExamAttemptSectionResult.findMany({
      where: {
        attemptId: { in: bestAttemptIds },
      },
      select: {
        attemptId: true,
        percentage: true,
        examSection: {
          select: {
            teachingElementId: true,
          },
        },
      },
    });

    for (const sr of sectionResults) {
      let teMap = sectionResultsByAttemptId.get(sr.attemptId);
      if (!teMap) {
        teMap = new Map<string, number>();
        sectionResultsByAttemptId.set(sr.attemptId, teMap);
      }
      teMap.set(sr.examSection.teachingElementId, sr.percentage);
    }
  }

  const mockExamResults = mockExamSummaries.map((exam) => {
    const bestAttemptInfo = bestAttemptByExamId.get(exam.id);
    const bestPercentage =
      bestAttemptInfo?.percentage ?? exam.bestPercentage ?? null;

    const tePercentageMap = bestAttemptInfo
      ? sectionResultsByAttemptId.get(bestAttemptInfo.id)
      : undefined;

    const bySection = exam.sections.map((sec) => {
      const matchingTe = courseUnit.teachingElements.find(
        (te) => te.id === sec.teachingElementId,
      );
      const code = matchingTe?.code ?? matchingTe?.shortTitle ?? sec.title;
      return {
        sectionId: sec.teachingElementId,
        code,
        title: sec.title,
        percentageOnBestAttempt: tePercentageMap?.get(sec.teachingElementId) ?? null,
      };
    });

    return {
      examId: exam.id,
      slug: exam.slug,
      title: exam.title,
      attemptCount: exam.attemptCount,
      latestPercentage: exam.latestPercentage ?? null,
      bestPercentage,
      bySection,
    };
  });

  const mockExamsOverview = computeMockExamOverviewMetrics(mockExamResults);

  return {
    courseUnitId: courseUnit.id,
    overview: {
      trainingQuizzes: trainingOverview,
      colles: {
        completed: evaluationsProgress.completedCollesCount,
        total: evaluationsProgress.totalCollesCount,
        percentage: collesOverviewPercentage,
      },
      mockExams: {
        completed: mockExamsOverview.completedCount,
        total: mockExamsOverview.totalCount,
        percentage: mockExamsOverview.percentage,
      },
    },
    training: {
      byTeachingElement: trainingByTeachingElement,
    },
    colles: {
      completedCount: evaluationsProgress.completedCollesCount,
      totalCount: evaluationsProgress.totalCollesCount,
      averageScorePercentage: evaluationsProgress.averageScorePercentage,
      bestScorePercentage: evaluationsProgress.bestScorePercentage,
      colleResults,
    },
    mockExams: {
      completedCount: mockExamsOverview.completedCount,
      totalCount: mockExamsOverview.totalCount,
      averageScorePercentage: mockExamsOverview.averageScorePercentage,
      bestScorePercentage: mockExamsOverview.bestScorePercentage,
      examResults: mockExamResults,
    },
    themeProgress: await fetchHealthCourseUnitThemeProgress({
      courseUnitId: courseUnit.id,
      teachingElements: activeTeachingElements,
      colleIds: collesList.map((c) => c.colleId),
      mockExamIds,
      userId,
    }),
  };
}
