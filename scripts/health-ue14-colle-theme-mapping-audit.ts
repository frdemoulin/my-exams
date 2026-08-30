import fs from "node:fs/promises";
import path from "node:path";

import { PrismaClient, type TrainingQuizStage } from "@prisma/client";

import { UE14_HEALTH_COLLE_SEEDS } from "../prisma/seeds/health-colles/ue14/health-colle-ue14.catalog";
import type { UE14ColleTeachingElementKey } from "../prisma/seeds/health-colles/ue14/health-colle-ue14.catalog";
import {
  UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID,
  UE14_COLLE_THEME_TITLES_BY_QUESTION_STABLE_ID,
} from "../prisma/seeds/health-colles/ue14/health-colle-ue14-theme-mapping";
import { loadProjectEnv } from "./lib/load-env";

const EXPECTED_TOTAL_QUESTION_COUNT = 315;
const MAX_THEMES_PER_QUESTION = 2;
const OBJECT_ID_PATTERN = /^[0-9a-f]{24}$/i;

type ExpectedQuestion = {
  stableId: string;
  colle: string;
  questionNumber: number;
  sectionTitle: string;
  teachingElement: UE14ColleTeachingElementKey;
  legacyThemeTags: string[];
};

type TeachingElementSummary = {
  id: string;
  slug: string;
  code: string | null;
  title: string;
  shortTitle: string | null;
  order: number;
};

type ChapterSummary = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string | null;
  order: number;
  teachingElements: TeachingElementSummary[];
  quizQuestionCount: number;
};

type QuizSummary = {
  id: string;
  slug: string;
  title: string;
  stage: TrainingQuizStage | null;
  chapterId: string;
  chapterSlug: string;
  chapterTitle: string;
  quizQuestionCount: number;
};

type QuizQuestionExample = {
  id: string;
  order: number;
  chapterSlug: string | null;
  quizSlug: string | null;
  preview: string;
};

type ThemeSummary = {
  id: string;
  title: string;
  shortTitle: string | null;
  quizQuestionCount: number;
  chapters: ChapterSummary[];
  quizzes: QuizSummary[];
  teachingElementKeys: UE14ColleTeachingElementKey[];
  examples: QuizQuestionExample[];
};

function normalizeStableId(value: string) {
  return value.trim().toLowerCase();
}

function normalizeThemeReference(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeForSearch(value: string | null | undefined) {
  return (value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function resolveTeachingElementKey(
  teachingElement: Pick<TeachingElementSummary, "slug" | "code" | "title">
): UE14ColleTeachingElementKey | null {
  const haystack = normalizeForSearch(
    [teachingElement.slug, teachingElement.code, teachingElement.title].join(" ")
  );

  if (haystack.includes("biochimie")) {
    return "BIOCHIMIE";
  }
  if (
    haystack.includes("biologie cellulaire") ||
    haystack.includes("biologie-cellulaire")
  ) {
    return "BIOLOGIE_CELLULAIRE";
  }
  if (haystack.includes("chimie")) {
    return "CHIMIE";
  }

  return null;
}

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

function normalizePreview(value: string, maxLength = 160) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }
  return `${normalized.slice(0, maxLength - 1).trimEnd()}...`;
}

function collectLegacyThemeTags(question: { tags?: string[] }) {
  return (question.tags ?? [])
    .filter((tag) => tag.startsWith("theme:"))
    .sort((left, right) => left.localeCompare(right, "fr"));
}

function buildExpectedQuestions() {
  return UE14_HEALTH_COLLE_SEEDS.flatMap<ExpectedQuestion>((seed) => {
    let globalOrder = 0;

    return seed.sections.flatMap((section) =>
      section.questions.map((question) => {
        globalOrder += 1;

        return {
          stableId: `${seed.code.toLowerCase()}-q${String(globalOrder).padStart(2, "0")}`,
          colle: seed.code,
          questionNumber: globalOrder,
          sectionTitle: section.title,
          teachingElement: section.teachingElementKey,
          legacyThemeTags: collectLegacyThemeTags(question),
        };
      })
    );
  });
}

function collectMappingEntries(mapping: Record<string, readonly string[]>) {
  return Object.entries(mapping).map(([stableId, themeRefs]) => ({
    stableId,
    normalizedStableId: normalizeStableId(stableId),
    themeRefs: Array.from(new Set(themeRefs.map(normalizeThemeReference))).filter(
      (themeRef) => themeRef.length > 0
    ),
  }));
}

async function resolveCourseUnitContext(prisma: PrismaClient) {
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
    throw new Error("UE14 introuvable pour l'audit du mapping Theme des colles.");
  }

  const teachingElementById = new Map(
    courseUnit.teachingElements.map((item) => [item.id, item] as const)
  );
  const assignments = await prisma.chapterAssignment.findMany({
    where: {
      vertical: "HEALTH",
      contextType: "HEALTH_TEACHING_ELEMENT",
      contextId: { in: courseUnit.teachingElements.map((item) => item.id) },
      chapter: { isActive: { not: false } },
    },
    select: {
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
  const chapterById = new Map<string, Omit<ChapterSummary, "quizQuestionCount">>();

  assignments.forEach((assignment) => {
    const existing = chapterById.get(assignment.chapter.id) ?? {
      ...assignment.chapter,
      teachingElements: [],
    };
    const teachingElement = teachingElementById.get(assignment.contextId);

    if (teachingElement) {
      existing.teachingElements = uniqueById([
        ...existing.teachingElements,
        teachingElement,
      ]).sort(sortByOrderThenTitle);
    }

    chapterById.set(assignment.chapter.id, existing);
  });

  return { courseUnit, chapterById };
}

async function buildQuizUsageByThemeId(
  prisma: PrismaClient,
  chapterById: Map<string, Omit<ChapterSummary, "quizQuestionCount">>,
  themeIds: string[]
) {
  const requestedThemeIds = new Set(themeIds);
  const usageByThemeId = new Map<
    string,
    {
      questionIds: Set<string>;
      chapterQuestionIds: Map<string, Set<string>>;
      quizzes: Map<
        string,
        Omit<QuizSummary, "quizQuestionCount"> & { questionIds: Set<string> }
      >;
      examples: QuizQuestionExample[];
    }
  >();

  const quizzes = await prisma.trainingQuiz.findMany({
    where: {
      chapterId: { in: [...chapterById.keys()] },
      isPublished: true,
      section: { isPublished: true },
      chapter: { isActive: { not: false } },
    },
    select: {
      id: true,
      slug: true,
      title: true,
      order: true,
      stage: true,
      chapterId: true,
      questionLinks: {
        where: { question: { isPublished: true } },
        orderBy: { order: "asc" },
        select: {
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

  quizzes
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
    .forEach((quiz) => {
      const chapter = chapterById.get(quiz.chapterId);
      if (!chapter) {
        return;
      }

      quiz.questionLinks.forEach((link) => {
        const matchingThemeIds = link.question.themeIds.filter((themeId) =>
          requestedThemeIds.has(themeId)
        );

        matchingThemeIds.forEach((themeId) => {
          const current = usageByThemeId.get(themeId) ?? {
            questionIds: new Set<string>(),
            chapterQuestionIds: new Map<string, Set<string>>(),
            quizzes: new Map<
              string,
              Omit<QuizSummary, "quizQuestionCount"> & {
                questionIds: Set<string>;
              }
            >(),
            examples: [],
          };

          current.questionIds.add(link.question.id);
          current.chapterQuestionIds.set(
            chapter.id,
            current.chapterQuestionIds.get(chapter.id) ?? new Set<string>()
          );
          current.chapterQuestionIds.get(chapter.id)?.add(link.question.id);
          current.quizzes.set(
            quiz.id,
            current.quizzes.get(quiz.id) ?? {
              id: quiz.id,
              slug: quiz.slug,
              title: quiz.title,
              stage: quiz.stage ?? null,
              chapterId: chapter.id,
              chapterSlug: chapter.slug,
              chapterTitle: chapter.title,
              questionIds: new Set<string>(),
            }
          );
          current.quizzes.get(quiz.id)?.questionIds.add(link.question.id);

          if (
            current.examples.length < 5 &&
            !current.examples.some((example) => example.id === link.question.id)
          ) {
            current.examples.push({
              id: link.question.id,
              order: link.question.order,
              chapterSlug: chapter.slug,
              quizSlug: quiz.slug,
              preview: normalizePreview(link.question.question),
            });
          }

          usageByThemeId.set(themeId, current);
        });
      });
    });

  return usageByThemeId;
}

async function resolveMappedThemes(
  requestedThemeIds: string[],
  requestedThemeTitles: string[]
) {
  loadProjectEnv();
  const prisma = new PrismaClient();

  try {
    const { courseUnit, chapterById } = await resolveCourseUnitContext(prisma);
    const themesById =
      requestedThemeIds.length > 0
        ? await prisma.theme.findMany({
            where: { id: { in: requestedThemeIds } },
            select: {
              id: true,
              title: true,
              shortTitle: true,
              chapters: {
                select: {
                  id: true,
                  slug: true,
                  title: true,
                  shortTitle: true,
                  order: true,
                },
              },
              healthTeachingElements: {
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
          })
        : [];
    const themesByTitle =
      requestedThemeTitles.length > 0
        ? await prisma.theme.findMany({
            where: { title: { in: requestedThemeTitles } },
            select: {
              id: true,
              title: true,
              shortTitle: true,
              chapters: {
                select: {
                  id: true,
                  slug: true,
                  title: true,
                  shortTitle: true,
                  order: true,
                },
              },
              healthTeachingElements: {
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
          })
        : [];
    const themesGroupedByTitle = new Map<string, typeof themesByTitle>();

    themesByTitle.forEach((theme) => {
      themesGroupedByTitle.set(theme.title, [
        ...(themesGroupedByTitle.get(theme.title) ?? []),
        theme,
      ]);
    });

    const unknownThemeIds = requestedThemeIds.filter(
      (themeId) => !themesById.some((theme) => theme.id === themeId)
    );
    const unknownThemeTitles = requestedThemeTitles.filter(
      (title) => !themesGroupedByTitle.has(title)
    );
    const ambiguousThemeTitles = [...themesGroupedByTitle.entries()]
      .filter(([, themes]) => themes.length > 1)
      .map(([title, themes]) => ({ title, count: themes.length }));
    const resolvedThemes = uniqueById([
      ...themesById,
      ...[...themesGroupedByTitle.values()]
        .filter((themes) => themes.length === 1)
        .map((themes) => themes[0]),
    ]);
    const usageByThemeId = await buildQuizUsageByThemeId(
      prisma,
      chapterById,
      resolvedThemes.map((theme) => theme.id)
    );
    const themeSummaryById = new Map<string, ThemeSummary>();

    resolvedThemes.forEach((theme) => {
      const usage = usageByThemeId.get(theme.id);
      const chapters = uniqueById(theme.chapters)
        .sort(sortByOrderThenTitle)
        .map((chapter) => {
          const chapterContext = chapterById.get(chapter.id);

          return {
            id: chapter.id,
            slug: chapter.slug,
            title: chapter.title,
            shortTitle: chapter.shortTitle,
            order: chapter.order,
            teachingElements: chapterContext?.teachingElements ?? [],
            quizQuestionCount:
              usage?.chapterQuestionIds.get(chapter.id)?.size ?? 0,
          };
        });
      const teachingElements = uniqueById([
        ...theme.healthTeachingElements,
        ...chapters.flatMap((chapter) => chapter.teachingElements),
      ]).sort(sortByOrderThenTitle);

      themeSummaryById.set(theme.id, {
        id: theme.id,
        title: theme.title,
        shortTitle: theme.shortTitle,
        quizQuestionCount: usage?.questionIds.size ?? 0,
        chapters,
        quizzes: [...(usage?.quizzes.values() ?? [])].map((quiz) => ({
          id: quiz.id,
          slug: quiz.slug,
          title: quiz.title,
          stage: quiz.stage,
          chapterId: quiz.chapterId,
          chapterSlug: quiz.chapterSlug,
          chapterTitle: quiz.chapterTitle,
          quizQuestionCount: quiz.questionIds.size,
        })),
        teachingElementKeys: Array.from(
          new Set(
            teachingElements
              .map(resolveTeachingElementKey)
              .filter((key): key is UE14ColleTeachingElementKey => Boolean(key))
          )
        ),
        examples: usage?.examples ?? [],
      });
    });

    return {
      courseUnit,
      themeSummaryById,
      titleToThemeId: new Map(
        [...themesGroupedByTitle.entries()]
          .filter(([, themes]) => themes.length === 1)
          .map(([title, themes]) => [title, themes[0].id] as const)
      ),
      unknownThemeIds,
      unknownThemeTitles,
      ambiguousThemeTitles,
    };
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  const expectedQuestions = buildExpectedQuestions();
  const expectedStableIds = expectedQuestions.map((question) => question.stableId);
  const expectedStableIdSet = new Set(expectedStableIds);
  const idEntries = collectMappingEntries(
    UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID
  );
  const titleEntries = collectMappingEntries(
    UE14_COLLE_THEME_TITLES_BY_QUESTION_STABLE_ID
  );
  const allEntries = [...idEntries, ...titleEntries];
  const mappingStableIds = new Set(
    allEntries.map((entry) => entry.normalizedStableId)
  );
  const requestedThemeIds = Array.from(
    new Set(idEntries.flatMap((entry) => entry.themeRefs))
  );
  const requestedThemeTitles = Array.from(
    new Set(titleEntries.flatMap((entry) => entry.themeRefs))
  );
  const mappingEntryCount = allEntries.length;
  const invalidThemeIds = requestedThemeIds.filter(
    (themeId) => !OBJECT_ID_PATTERN.test(themeId)
  );
  const unknownStableIds = [...mappingStableIds].filter(
    (stableId) => !expectedStableIdSet.has(stableId)
  );
  const missingStableIds = expectedStableIds.filter(
    (stableId) => !mappingStableIds.has(stableId)
  );
  const emptyThemeRefs = allEntries
    .filter((entry) => entry.themeRefs.length === 0)
    .map((entry) => entry.stableId);
  const themeRefCountByStableId = new Map<string, number>();

  allEntries.forEach((entry) => {
    themeRefCountByStableId.set(
      entry.normalizedStableId,
      (themeRefCountByStableId.get(entry.normalizedStableId) ?? 0) +
        entry.themeRefs.length
    );
  });

  const stableIdsWithTooManyThemeRefs = [...themeRefCountByStableId.entries()]
    .filter(([, themeRefCount]) => themeRefCount > MAX_THEMES_PER_QUESTION)
    .map(([stableId, themeRefCount]) => ({ stableId, themeRefCount }));
  const dbResolution =
    mappingEntryCount > 0 && invalidThemeIds.length === 0
      ? await resolveMappedThemes(requestedThemeIds, requestedThemeTitles)
      : null;
  const themeIdsByStableId = new Map<string, string[]>();
  const themeTitlesByStableId = new Map<string, string[]>();

  idEntries.forEach((entry) => {
    themeIdsByStableId.set(entry.normalizedStableId, entry.themeRefs);
  });
  titleEntries.forEach((entry) => {
    themeTitlesByStableId.set(entry.normalizedStableId, entry.themeRefs);
  });

  const questions = expectedQuestions.map((question) => {
    const themeIds = [
      ...(themeIdsByStableId.get(question.stableId) ?? []),
      ...(themeTitlesByStableId.get(question.stableId) ?? [])
        .map((title) => dbResolution?.titleToThemeId.get(title))
        .filter((themeId): themeId is string => Boolean(themeId)),
    ];
    const resolvedThemeIds = Array.from(new Set(themeIds));
    const resolvedThemes = resolvedThemeIds
      .map((themeId) => dbResolution?.themeSummaryById.get(themeId))
      .filter((theme): theme is ThemeSummary => Boolean(theme));
    const ecValidation =
      resolvedThemes.length === 0
        ? "UNMAPPED"
        : resolvedThemes.every(
            (theme) =>
              theme.teachingElementKeys.length === 0 ||
              theme.teachingElementKeys.includes(question.teachingElement)
          )
          ? "OK"
          : "SUSPICIOUS";

    return {
      stableId: question.stableId,
      colle: question.colle,
      questionNumber: question.questionNumber,
      sectionTitle: question.sectionTitle,
      teachingElement: question.teachingElement,
      themeIds: resolvedThemeIds,
      themeTitles: themeTitlesByStableId.get(question.stableId) ?? [],
      resolvedThemes,
      themeCount: resolvedThemeIds.length,
      ecValidation,
      legacyThemeTags: question.legacyThemeTags,
    };
  });

  const distinctThemeIds = Array.from(
    new Set(questions.flatMap((question) => question.themeIds))
  );
  const questionsWithTheme = questions.filter(
    (question) => question.themeIds.length > 0
  );
  const multiThemeQuestions = questions.filter((question) => question.themeCount === 2);
  const overTaggedQuestions = questions.filter(
    (question) => question.themeCount > MAX_THEMES_PER_QUESTION
  );
  const themeUsage = distinctThemeIds
    .map((themeId) => {
      const theme = dbResolution?.themeSummaryById.get(themeId);
      const colleQuestionCount = questions.filter((question) =>
        question.themeIds.includes(themeId)
      ).length;

      return theme
        ? { ...theme, colleQuestionCount }
        : { id: themeId, colleQuestionCount };
    })
    .sort((left, right) => right.colleQuestionCount - left.colleQuestionCount);
  const status =
    mappingEntryCount === 0
      ? "MAPPING_REQUIRED"
      : [
          unknownStableIds.length,
          missingStableIds.length,
          emptyThemeRefs.length,
          invalidThemeIds.length,
          stableIdsWithTooManyThemeRefs.length,
          dbResolution?.unknownThemeIds.length ?? 0,
          dbResolution?.unknownThemeTitles.length ?? 0,
          dbResolution?.ambiguousThemeTitles.length ?? 0,
          overTaggedQuestions.length,
        ].some((count) => count > 0)
        ? "BLOCKED"
        : "READY";
  const audit = {
    generatedAt: new Date().toISOString(),
    status,
    note:
      status === "MAPPING_REQUIRED"
        ? "Infrastructure prête. Mapping éditorial requis avant intégration."
        : null,
    themeIdStability: {
      prismaSchema: "Theme.id String @id @default(auto()) @map(\"_id\") @db.ObjectId",
      healthTrainingSeedBehavior:
        "Les Theme UE14 sont créés par prisma.theme.create quand le titre exact n'existe pas déjà.",
      conclusion:
        "Les ObjectId peuvent différer entre environnements ou réensemencements ; le mapping massif en ObjectId est donc suspendu sauf preuve de stabilité.",
      stableResolutionMechanism:
        "Le fichier versionné peut fournir des Theme.title exacts résolus en Theme.id au moment du seed.",
    },
    totals: {
      expectedQuestionCount: expectedQuestions.length,
      expectedQuestionCountMatchesCadrage:
        expectedQuestions.length === EXPECTED_TOTAL_QUESTION_COUNT,
      mappingEntryCount,
      questionsWithAtLeastOneTheme: questionsWithTheme.length,
      questionsWithoutTheme: expectedQuestions.length - questionsWithTheme.length,
      distinctThemesReferenced: distinctThemeIds.length,
      oneThemeQuestionCount: questions.filter((question) => question.themeCount === 1)
        .length,
      twoThemeQuestionCount: multiThemeQuestions.length,
      moreThanTwoThemeQuestionCount: overTaggedQuestions.length,
    },
    coverageByColle: Object.fromEntries(
      UE14_HEALTH_COLLE_SEEDS.map((seed) => {
        const colleQuestions = questions.filter(
          (question) => question.colle === seed.code
        );

        return [
          seed.code,
          {
            total: colleQuestions.length,
            withTheme: colleQuestions.filter(
              (question) => question.themeIds.length > 0
            ).length,
          },
        ];
      })
    ),
    controls: {
      unknownStableIds,
      missingStableIds,
      emptyThemeRefs,
      invalidThemeIds,
      stableIdsWithTooManyThemeRefs,
      unknownThemeIds: dbResolution?.unknownThemeIds ?? [],
      unknownThemeTitles: dbResolution?.unknownThemeTitles ?? [],
      ambiguousThemeTitles: dbResolution?.ambiguousThemeTitles ?? [],
      suspiciousEcMappings: questions
        .filter((question) => question.ecValidation === "SUSPICIOUS")
        .map((question) => ({
          stableId: question.stableId,
          teachingElement: question.teachingElement,
          themeIds: question.themeIds,
        })),
      verySpecificThemes: themeUsage.filter(
        (theme) => "quizQuestionCount" in theme && theme.quizQuestionCount <= 1
      ),
    },
    themeUsage: {
      mostUsed: themeUsage.slice(0, 20),
      usedOnceInColles: themeUsage.filter((theme) => theme.colleQuestionCount === 1),
      multiThemeQuestions: multiThemeQuestions.map((question) => ({
        stableId: question.stableId,
        themeIds: question.themeIds,
      })),
    },
    questions,
    courseUnit: dbResolution?.courseUnit ?? null,
  };
  const outputDirectory = path.resolve(process.cwd(), "tmp");
  const proposedOutputPath = path.join(
    outputDirectory,
    "UE14-COLLES-THEME-MAPPING-PROPOSED.json"
  );
  const finalOutputPath = path.join(
    outputDirectory,
    "UE14-COLLES-THEME-MAPPING-FINAL-AUDIT.json"
  );

  await fs.mkdir(outputDirectory, { recursive: true });
  await fs.writeFile(proposedOutputPath, `${JSON.stringify(audit, null, 2)}\n`, "utf8");

  if (status === "READY") {
    await fs.writeFile(finalOutputPath, `${JSON.stringify(audit, null, 2)}\n`, "utf8");
  }

  console.log(
    JSON.stringify(
      {
        status,
        proposedOutputPath,
        finalOutputPath: status === "READY" ? finalOutputPath : null,
        expectedQuestionCount: audit.totals.expectedQuestionCount,
        questionsWithAtLeastOneTheme: audit.totals.questionsWithAtLeastOneTheme,
        questionsWithoutTheme: audit.totals.questionsWithoutTheme,
        distinctThemesReferenced: audit.totals.distinctThemesReferenced,
      },
      null,
      2
    )
  );

  if (status === "BLOCKED") {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
