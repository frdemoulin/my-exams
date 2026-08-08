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
    const bestPercentage = completedAttempts.reduce<number | null>((best, attempt) => {
      if (attempt.percentage === null) return best;
      return best === null ? attempt.percentage : Math.max(best, attempt.percentage);
    }, null);

    return {
      ...exam,
      attemptCount: completedAttempts.length,
      bestPercentage,
      latestSubmittedAttemptId: completedAttempts[0]?.id ?? null,
      currentAttemptId: activeAttempt?.id ?? null,
    };
  });
}
