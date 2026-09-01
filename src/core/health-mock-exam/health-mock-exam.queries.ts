import prisma from "@/lib/db/prisma";

import type { HealthMockExamSummary } from "./health-mock-exam.types";

const objectIdPattern = /^[a-f0-9]{24}$/i;

export async function fetchHealthMockExamSummaries(input: {
  courseUnitId: string;
  userId?: string | null;
}): Promise<HealthMockExamSummary[]> {
  if (!objectIdPattern.test(input.courseUnitId)) {
    return [];
  }

  const exams = await prisma.healthMockExam.findMany({
    where: {
      courseUnitId: input.courseUnitId,
      type: "MOCK_EXAM",
      isPublished: true,
    },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      durationMinutes: true,
      questionCount: true,
      order: true,
      sections: {
        orderBy: { order: "asc" },
        select: {
          teachingElementId: true,
          title: true,
          questionCount: true,
          firstQuestion: true,
          lastQuestion: true,
        },
      },
    },
    orderBy: [{ order: "asc" }, { title: "asc" }],
  });

  const attempts =
    input.userId && exams.length > 0
      ? await prisma.userHealthMockExamAttempt.findMany({
          where: {
            userId: input.userId,
            mockExamId: { in: exams.map((exam) => exam.id) },
          },
          select: {
            id: true,
            mockExamId: true,
            status: true,
            deadlineAt: true,
            score: true,
            maxScore: true,
            percentage: true,
            startedAt: true,
          },
          orderBy: { startedAt: "desc" },
        })
      : [];
  const now = Date.now();

  return exams.map((exam) => {
    const examAttempts = attempts.filter((attempt) => attempt.mockExamId === exam.id);
    const completedAttempts = examAttempts.filter(
      (attempt) => attempt.status === "SUBMITTED" || attempt.status === "EXPIRED",
    );
    const activeAttempt = examAttempts.find(
      (attempt) => attempt.status === "IN_PROGRESS" && attempt.deadlineAt.getTime() > now,
    );
    const latestAttempt = completedAttempts[0] ?? null;
    const bestAttempt = completedAttempts.reduce<typeof completedAttempts[0] | null>((best, attempt) => {
      if (attempt.percentage === null) return best;
      if (!best || (best.percentage ?? -1) < (attempt.percentage ?? -1)) return attempt;
      return best;
    }, null);

    return {
      ...exam,
      attemptCount: completedAttempts.length,
      bestPercentage: bestAttempt?.percentage ?? null,
      bestScore: bestAttempt?.score ?? null,
      bestMaxScore: bestAttempt?.maxScore ?? null,
      latestSubmittedAttemptId: latestAttempt?.id ?? null,
      latestScore: latestAttempt?.score ?? null,
      latestMaxScore: latestAttempt?.maxScore ?? null,
      latestPercentage: latestAttempt?.percentage ?? null,
      currentAttemptId: activeAttempt?.id ?? null,
    };
  });
}
