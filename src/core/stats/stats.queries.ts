import prisma from "@/lib/db/prisma";

type CountItem = {
  label: string;
  count: number;
};

export async function fetchUsageStats() {
  const [userCount, exerciseCount, examPaperCount] = await Promise.all([
    prisma.user.count(),
    prisma.exercise.count(),
    prisma.examPaper.count(),
  ]);

  const exercises = await prisma.exercise.findMany({
    select: {
      id: true,
      examPaper: {
        select: {
          diploma: {
            select: {
              shortDescription: true,
              longDescription: true,
            },
          },
          teaching: {
            select: {
              subject: {
                select: {
                  shortDescription: true,
                  longDescription: true,
                },
              },
            },
          },
          sessionYear: true,
        },
      },
    },
  });

  const bySubject: Record<string, number> = {};
  const byDiploma: Record<string, number> = {};
  const byYear: Record<string, number> = {};

  exercises.forEach((ex) => {
    const subjectLabel =
      ex.examPaper?.teaching?.subject?.longDescription ||
      ex.examPaper?.teaching?.subject?.shortDescription ||
      "Inconnu";
    const diplomaLabel =
      ex.examPaper?.diploma?.longDescription ||
      ex.examPaper?.diploma?.shortDescription ||
      "Inconnu";
    const yearLabel = ex.examPaper?.sessionYear
      ? String(ex.examPaper.sessionYear)
      : "Non daté";

    bySubject[subjectLabel] = (bySubject[subjectLabel] || 0) + 1;
    byDiploma[diplomaLabel] = (byDiploma[diplomaLabel] || 0) + 1;
    byYear[yearLabel] = (byYear[yearLabel] || 0) + 1;
  });

  const normalize = (obj: Record<string, number>): CountItem[] =>
    Object.entries(obj)
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count);

  return {
    totals: {
      users: userCount,
      exercises: exerciseCount,
      examPapers: examPaperCount,
    },
    bySubject: normalize(bySubject),
    byDiploma: normalize(byDiploma),
    byYear: normalize(byYear),
  };
}

