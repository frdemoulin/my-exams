import prisma from "@/lib/db/prisma";
import type {
  FetchHealthCourseUnitProgressInput,
  HealthCourseUnitProgressSummary,
} from "./health-progress.types";

export async function fetchHealthCourseUnitProgressSummary(
  input: FetchHealthCourseUnitProgressInput,
): Promise<HealthCourseUnitProgressSummary> {
  const { courseUnit, evaluationsProgress, userId } = input;

  // 1. Collect all published quiz IDs per Teaching Element (EC)
  const ecQuizIdsMap = new Map<string, string[]>(); // ecId -> quizIds
  const allChapterIds: string[] = [];

  for (const te of courseUnit.teachingElements) {
    for (const ch of te.chapters) {
      allChapterIds.push(ch.id);
    }
  }

  const publishedQuizzes = allChapterIds.length > 0
    ? await prisma.trainingQuiz.findMany({
        where: {
          chapterId: { in: allChapterIds },
          isPublished: true,
        },
        select: {
          id: true,
          chapterId: true,
        },
      })
    : [];

  const quizzesByChapterId = new Map<string, string[]>();
  for (const quiz of publishedQuizzes) {
    const list = quizzesByChapterId.get(quiz.chapterId) ?? [];
    list.push(quiz.id);
    quizzesByChapterId.set(quiz.chapterId, list);
  }

  const allQuizIds: string[] = [];
  for (const te of courseUnit.teachingElements) {
    const ecQuizzes: string[] = [];
    for (const ch of te.chapters) {
      const qList = quizzesByChapterId.get(ch.id) ?? [];
      ecQuizzes.push(...qList);
    }
    const distinctEcQuizzes = Array.from(new Set(ecQuizzes));
    ecQuizIdsMap.set(te.id, distinctEcQuizzes);
    allQuizIds.push(...distinctEcQuizzes);
  }
  const uniqueAllQuizIds = Array.from(new Set(allQuizIds));

  // 2. Fetch User Training Progress & Completed Attempts if userId is present
  const completedQuizSet = new Set<string>();
  const masteredQuizSet = new Set<string>();

  if (userId && uniqueAllQuizIds.length > 0) {
    const [completedAttempts, masteredProgress] = await Promise.all([
      prisma.userTrainingQuizAttempt.findMany({
        where: {
          userId,
          quizId: { in: uniqueAllQuizIds },
          status: "COMPLETED",
        },
        select: {
          quizId: true,
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
        },
      }),
    ]);

    for (const att of completedAttempts) {
      completedQuizSet.add(att.quizId);
    }
    for (const prog of masteredProgress) {
      masteredQuizSet.add(prog.quizId);
    }
  }

  // 3. Build Training EC breakdown
  let totalUECompletedQuizzes = 0;
  let totalUEMasteredQuizzes = 0;
  let totalUEQuizzes = 0;

  const trainingByTeachingElement = courseUnit.teachingElements.map((te) => {
    const quizIds = ecQuizIdsMap.get(te.id) ?? [];
    const totalQuizzes = quizIds.length;

    let completedQuizzes = 0;
    let masteredQuizzes = 0;

    for (const qId of quizIds) {
      if (completedQuizSet.has(qId)) completedQuizzes++;
      if (masteredQuizSet.has(qId)) masteredQuizzes++;
    }

    totalUECompletedQuizzes += completedQuizzes;
    totalUEMasteredQuizzes += masteredQuizzes;
    totalUEQuizzes += totalQuizzes;

    const completionPercentage =
      totalQuizzes > 0 ? Math.round((completedQuizzes / totalQuizzes) * 100) : 0;
    const masteryPercentage =
      totalQuizzes > 0 ? Math.round((masteredQuizzes / totalQuizzes) * 100) : 0;

    return {
      teachingElementId: te.id,
      code: te.code ?? te.shortTitle ?? te.title,
      title: te.title,
      completedQuizzes,
      masteredQuizzes,
      totalQuizzes,
      completionPercentage,
      masteryPercentage,
    };
  });

  const trainingOverviewPercentage =
    totalUEQuizzes > 0 ? Math.round((totalUECompletedQuizzes / totalUEQuizzes) * 100) : 0;

  // 4. Colles Section (from evaluationsProgress)
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
          (evaluationsProgress.completedCollesCount / evaluationsProgress.totalCollesCount) * 100
        )
      : 0;

  // 5. Mock Exams Section (EB)
  const mockExamSummaries = courseUnit.mockExams; // already type MOCK_EXAM
  const totalMockExamsCount = mockExamSummaries.length;
  const mockExamIds = mockExamSummaries.map((e) => e.id);

  // Fetch best attempt for each completed mock exam (deterministic: highest percentage, latest submittedAt)
  const completedAttemptsMap = new Map<
    string,
    {
      attemptId: string;
      percentage: number;
    }
  >();

  if (userId && mockExamIds.length > 0) {
    const attempts = await prisma.userHealthMockExamAttempt.findMany({
      where: {
        userId,
        mockExamId: { in: mockExamIds },
        status: { in: ["SUBMITTED", "EXPIRED"] },
        score: { not: null },
        percentage: { not: null },
      },
      orderBy: [
        { percentage: "desc" },
        { submittedAt: "desc" },
        { createdAt: "desc" },
      ],
      select: {
        id: true,
        mockExamId: true,
        percentage: true,
      },
    });

    for (const att of attempts) {
      if (!completedAttemptsMap.has(att.mockExamId) && att.percentage !== null) {
        completedAttemptsMap.set(att.mockExamId, {
          attemptId: att.id,
          percentage: att.percentage,
        });
      }
    }
  }

  // Fetch section results for the best attempt of each completed mock exam
  const bestAttemptIds = Array.from(completedAttemptsMap.values()).map((a) => a.attemptId);
  const sectionResultsByAttemptId = new Map<
    string,
    Map<string, number> // teachingElementId -> percentage
  >();

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

  let ebCompletedCount = 0;
  let ebBestScoresSum = 0;
  let ebBestScoreMax: number | null = null;

  const mockExamResults = mockExamSummaries.map((exam) => {
    const bestAttemptInfo = completedAttemptsMap.get(exam.id);
    const isCompleted = !!bestAttemptInfo || (exam.latestPercentage !== null && exam.latestPercentage !== undefined);

    if (isCompleted) {
      ebCompletedCount++;
      const bestPct = exam.bestPercentage ?? bestAttemptInfo?.percentage ?? 0;
      ebBestScoresSum += bestPct;
      if (ebBestScoreMax === null || bestPct > ebBestScoreMax) {
        ebBestScoreMax = bestPct;
      }
    }

    const tePercentageMap = bestAttemptInfo
      ? sectionResultsByAttemptId.get(bestAttemptInfo.attemptId)
      : undefined;

    const bySection = exam.sections.map((sec) => {
      const matchingTe = courseUnit.teachingElements.find((te) => te.id === sec.teachingElementId);
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
      bestPercentage: exam.bestPercentage ?? null,
      bySection,
    };
  });

  const ebAverageScorePercentage =
    ebCompletedCount > 0 ? Math.round(ebBestScoresSum / ebCompletedCount) : null;

  const mockExamsOverviewPercentage =
    totalMockExamsCount > 0 ? Math.round((ebCompletedCount / totalMockExamsCount) * 100) : 0;

  return {
    courseUnitId: courseUnit.id,
    overview: {
      trainingQuizzes: {
        completed: totalUECompletedQuizzes,
        total: totalUEQuizzes,
        percentage: trainingOverviewPercentage,
      },
      colles: {
        completed: evaluationsProgress.completedCollesCount,
        total: evaluationsProgress.totalCollesCount,
        percentage: collesOverviewPercentage,
      },
      mockExams: {
        completed: ebCompletedCount,
        total: totalMockExamsCount,
        percentage: mockExamsOverviewPercentage,
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
      completedCount: ebCompletedCount,
      totalCount: totalMockExamsCount,
      averageScorePercentage: ebAverageScorePercentage,
      bestScorePercentage: ebBestScoreMax,
      examResults: mockExamResults,
    },
  };
}
