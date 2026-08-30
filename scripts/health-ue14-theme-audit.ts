import fs from "node:fs/promises";
import path from "node:path";

import { PrismaClient, type TrainingQuizStage } from "@prisma/client";

import { loadProjectEnv } from "./lib/load-env";

loadProjectEnv();

const prisma = new PrismaClient();

type TeachingElementSummary = {
  id: string;
  slug: string;
  code: string | null;
  title: string;
  shortTitle: string | null;
  order: number;
};

type ChapterUsageSummary = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string | null;
  order: number;
  teachingElements: TeachingElementSummary[];
};

type QuizUsageSummary = {
  id: string;
  slug: string;
  title: string;
  order: number;
  stage: TrainingQuizStage | null;
  chapterId: string;
  chapterSlug: string;
  chapterTitle: string;
};

type QuestionUsageSummary = {
  id: string;
  stableId: null;
  order: number;
  question: string;
  themeIds: string[];
  chapters: Map<string, ChapterUsageSummary>;
  quizzes: Map<string, QuizUsageSummary>;
};

function uniqueById<T extends { id: string }>(values: T[]) {
  const seen = new Map<string, T>();
  values.forEach((value) => {
    if (!seen.has(value.id)) {
      seen.set(value.id, value);
    }
  });
  return [...seen.values()];
}

function sortByOrderThenTitle<T extends { order: number; title: string }>(
  left: T,
  right: T
) {
  if (left.order !== right.order) {
    return left.order - right.order;
  }
  return left.title.localeCompare(right.title, "fr", { sensitivity: "base" });
}

function normalizePreview(value: string, maxLength = 180) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }
  return `${normalized.slice(0, maxLength - 1).trimEnd()}...`;
}

async function resolveCourseUnit() {
  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: {
      OR: [{ slug: "ue14" }, { slug: { startsWith: "ue14" } }],
      isActive: true,
    },
    select: {
      id: true,
      slug: true,
      code: true,
      title: true,
      shortTitle: true,
      teachingElements: {
        orderBy: { order: "asc" },
        select: {
          id: true,
          slug: true,
          code: true,
          title: true,
          shortTitle: true,
          order: true,
        },
      },
    },
  });

  if (!courseUnit) {
    throw new Error("UE14 introuvable pour l'audit des thèmes de quiz.");
  }

  return courseUnit;
}

async function resolveUe14Chapters() {
  const courseUnit = await resolveCourseUnit();
  const teachingElementIds = courseUnit.teachingElements.map((item) => item.id);
  const teachingElementById = new Map(
    courseUnit.teachingElements.map((item) => [item.id, item] as const)
  );

  const assignments = await prisma.chapterAssignment.findMany({
    where: {
      vertical: "HEALTH",
      OR: [
        {
          contextType: "HEALTH_COURSE_UNIT",
          contextId: courseUnit.id,
        },
        {
          contextType: "HEALTH_TEACHING_ELEMENT",
          contextId: { in: teachingElementIds },
        },
      ],
      chapter: {
        isActive: { not: false },
      },
    },
    select: {
      contextType: true,
      contextId: true,
      chapter: {
        select: {
          id: true,
          slug: true,
          title: true,
          shortTitle: true,
          order: true,
        },
      },
    },
    orderBy: [{ order: "asc" }, { updatedAt: "desc" }],
  });

  const chapterById = new Map<string, ChapterUsageSummary>();

  assignments.forEach((assignment) => {
    const existing = chapterById.get(assignment.chapter.id) ?? {
      ...assignment.chapter,
      teachingElements: [],
    };

    if (assignment.contextType === "HEALTH_TEACHING_ELEMENT") {
      const teachingElement = teachingElementById.get(assignment.contextId);
      if (teachingElement) {
        existing.teachingElements = uniqueById([
          ...existing.teachingElements,
          teachingElement,
        ]).sort(sortByOrderThenTitle);
      }
    }

    chapterById.set(assignment.chapter.id, existing);
  });

  return { courseUnit, chapterById };
}

async function buildQuizThemeUsageAudit() {
  const { courseUnit, chapterById } = await resolveUe14Chapters();
  const chapterIds = [...chapterById.keys()];

  const quizzes = await prisma.trainingQuiz.findMany({
    where: {
      chapterId: { in: chapterIds },
      isPublished: true,
      section: {
        isPublished: true,
      },
      chapter: {
        isActive: { not: false },
      },
    },
    select: {
      id: true,
      slug: true,
      title: true,
      order: true,
      stage: true,
      chapterId: true,
      questionLinks: {
        where: {
          question: {
            isPublished: true,
          },
        },
        orderBy: { order: "asc" },
        select: {
          order: true,
          question: {
            select: {
              id: true,
              order: true,
              question: true,
              themeIds: true,
            },
          },
        },
      },
    },
  });

  const sortedQuizzes = quizzes.sort((left, right) => {
    const leftChapter = chapterById.get(left.chapterId);
    const rightChapter = chapterById.get(right.chapterId);
    const leftChapterOrder = leftChapter?.order ?? Number.MAX_SAFE_INTEGER;
    const rightChapterOrder = rightChapter?.order ?? Number.MAX_SAFE_INTEGER;

    if (leftChapterOrder !== rightChapterOrder) {
      return leftChapterOrder - rightChapterOrder;
    }
    if (left.order !== right.order) {
      return left.order - right.order;
    }
    return left.title.localeCompare(right.title, "fr", { sensitivity: "base" });
  });

  const questionById = new Map<string, QuestionUsageSummary>();
  let quizQuestionLinkCount = 0;

  sortedQuizzes.forEach((quiz) => {
    const chapter = chapterById.get(quiz.chapterId);
    if (!chapter) {
      return;
    }

    const quizSummary: QuizUsageSummary = {
      id: quiz.id,
      slug: quiz.slug,
      title: quiz.title,
      order: quiz.order,
      stage: quiz.stage ?? null,
      chapterId: chapter.id,
      chapterSlug: chapter.slug,
      chapterTitle: chapter.title,
    };

    quiz.questionLinks.forEach((link) => {
      quizQuestionLinkCount += 1;
      const current = questionById.get(link.question.id) ?? {
        id: link.question.id,
        stableId: null,
        order: link.question.order,
        question: link.question.question,
        themeIds: link.question.themeIds,
        chapters: new Map<string, ChapterUsageSummary>(),
        quizzes: new Map<string, QuizUsageSummary>(),
      };

      current.chapters.set(chapter.id, chapter);
      current.quizzes.set(quiz.id, quizSummary);
      questionById.set(link.question.id, current);
    });
  });

  const questions = [...questionById.values()];
  const questionsWithThemeIds = questions.filter(
    (question) => question.themeIds.length > 0
  );
  const distinctReferencedThemeIds = [
    ...new Set(questionsWithThemeIds.flatMap((question) => question.themeIds)),
  ];

  const referencedThemes =
    distinctReferencedThemeIds.length > 0
      ? await prisma.theme.findMany({
          where: {
            id: { in: distinctReferencedThemeIds },
          },
          select: {
            id: true,
            title: true,
            shortTitle: true,
          },
          orderBy: [{ title: "asc" }, { shortTitle: "asc" }],
        })
      : [];
  const themeById = new Map(
    referencedThemes.map((theme) => [theme.id, theme] as const)
  );
  const unresolvedThemeIds = distinctReferencedThemeIds.filter(
    (themeId) => !themeById.has(themeId)
  );

  const themeUsage = referencedThemes.map((theme) => {
    const matchingQuestions = questionsWithThemeIds.filter((question) =>
      question.themeIds.includes(theme.id)
    );
    const chapters = uniqueById(
      matchingQuestions.flatMap((question) => [...question.chapters.values()])
    )
      .sort(sortByOrderThenTitle)
      .map((chapter) => ({
        id: chapter.id,
        slug: chapter.slug,
        title: chapter.title,
        shortTitle: chapter.shortTitle,
        teachingElements: chapter.teachingElements.map((teachingElement) => ({
          id: teachingElement.id,
          slug: teachingElement.slug,
          code: teachingElement.code,
          title: teachingElement.title,
          shortTitle: teachingElement.shortTitle,
        })),
        quizQuestionCount: matchingQuestions.filter((question) =>
          question.chapters.has(chapter.id)
        ).length,
      }));
    const quizzesForTheme = uniqueById(
      matchingQuestions.flatMap((question) => [...question.quizzes.values()])
    )
      .sort((left, right) => {
        const leftChapter = chapterById.get(left.chapterId);
        const rightChapter = chapterById.get(right.chapterId);
        const leftChapterOrder = leftChapter?.order ?? Number.MAX_SAFE_INTEGER;
        const rightChapterOrder = rightChapter?.order ?? Number.MAX_SAFE_INTEGER;

        if (leftChapterOrder !== rightChapterOrder) {
          return leftChapterOrder - rightChapterOrder;
        }
        if (left.order !== right.order) {
          return left.order - right.order;
        }
        return left.title.localeCompare(right.title, "fr", { sensitivity: "base" });
      })
      .map((quiz) => ({
        id: quiz.id,
        slug: quiz.slug,
        title: quiz.title,
        stage: quiz.stage,
        chapterId: quiz.chapterId,
        chapterSlug: quiz.chapterSlug,
        chapterTitle: quiz.chapterTitle,
        quizQuestionCount: matchingQuestions.filter((question) =>
          question.quizzes.has(quiz.id)
        ).length,
      }));

    return {
      id: theme.id,
      title: theme.title,
      shortTitle: theme.shortTitle,
      quizQuestionCount: matchingQuestions.length,
      chapters,
      quizzes: quizzesForTheme,
      examples: matchingQuestions
        .sort((left, right) => {
          const leftChapter = [...left.chapters.values()][0];
          const rightChapter = [...right.chapters.values()][0];
          const leftChapterOrder = leftChapter?.order ?? Number.MAX_SAFE_INTEGER;
          const rightChapterOrder = rightChapter?.order ?? Number.MAX_SAFE_INTEGER;

          if (leftChapterOrder !== rightChapterOrder) {
            return leftChapterOrder - rightChapterOrder;
          }
          return left.order - right.order;
        })
        .slice(0, 5)
        .map((question) => {
          const firstChapter = [...question.chapters.values()][0] ?? null;
          const firstQuiz = [...question.quizzes.values()][0] ?? null;

          return {
            id: question.id,
            stableId: question.stableId,
            order: question.order,
            chapterSlug: firstChapter?.slug ?? null,
            quizSlug: firstQuiz?.slug ?? null,
            preview: normalizePreview(question.question),
          };
        }),
    };
  });

  return {
    generatedAt: new Date().toISOString(),
    filters: {
      courseUnitSlug: "ue14",
      chapterAssignments: {
        vertical: "HEALTH",
        contextTypes: ["HEALTH_COURSE_UNIT", "HEALTH_TEACHING_ELEMENT"],
        isActive: "not filtered",
        isPublished: "not filtered",
      },
      chapters: {
        isActive: true,
        isPublished: "not filtered",
      },
      sections: {
        isPublished: true,
      },
      quizzes: {
        isPublished: true,
      },
      quizQuestions: {
        isPublished: true,
      },
    },
    courseUnit: {
      id: courseUnit.id,
      slug: courseUnit.slug,
      code: courseUnit.code,
      title: courseUnit.title,
      shortTitle: courseUnit.shortTitle,
    },
    totals: {
      chapters: chapterIds.length,
      quizzes: sortedQuizzes.length,
      quizQuestionLinks: quizQuestionLinkCount,
      quizQuestions: questions.length,
      quizQuestionsWithThemeIds: questionsWithThemeIds.length,
      quizQuestionsWithoutThemeIds: questions.length - questionsWithThemeIds.length,
      distinctThemeIdsReferenced: distinctReferencedThemeIds.length,
      distinctThemesReferenced: referencedThemes.length,
      unresolvedThemeIds,
    },
    themes: themeUsage,
  };
}

async function main() {
  const audit = await buildQuizThemeUsageAudit();
  const outputDirectory = path.resolve(process.cwd(), "tmp");
  const outputPath = path.join(outputDirectory, "UE14-QUIZ-THEME-USAGE-AUDIT.json");

  await fs.mkdir(outputDirectory, { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(audit, null, 2)}\n`, "utf8");

  console.log(
    JSON.stringify(
      {
        outputPath,
        totalQuizQuestions: audit.totals.quizQuestions,
        quizQuestionsWithThemeIds: audit.totals.quizQuestionsWithThemeIds,
        quizQuestionsWithoutThemeIds: audit.totals.quizQuestionsWithoutThemeIds,
        distinctThemesReferenced: audit.totals.distinctThemesReferenced,
      },
      null,
      2
    )
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
