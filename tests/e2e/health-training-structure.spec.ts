import { expect, test } from "@playwright/test";
import { loadProjectEnv } from "../../scripts/lib/load-env";

loadProjectEnv();

const prisma = require("../../src/lib/db/prisma").default;

const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

const ue13Slug = "ue13-anatomie-histologie-physiologie";
const ue14Id = "6a2c2b111af36bd83ac27ec2";
const chapterOneSlug = "elements-chimiques-classification-periodique";
const chapterTwoSlug = "formation-ions-electronegativite-liaisons-chimiques";
const osidesChapterSlug = "osides";
const introductionLipidesChapterSlug = "introduction-lipides-acides-gras";
const eicosanoidesChapterSlug = "eicosanoides";
const glyceridesChapterSlug = "glycerides-glycerophospholipides";
const sphingolipidesChapterSlug = "sphingolipides";
const sterolsChapterSlug = "sterols-steroides-sterides";
const acidesAminesChapterSlug = "acides-amines-structure-roles-biologiques";
const structurePeptidesProteinesChapterSlug = "structure-peptides-proteines";
const rolesAcidesAminesPeptidesChapterSlug = "roles-biologiques-acides-amines-peptides";
const rolesProteinesPartie1ChapterSlug = "roles-biologiques-proteines-partie-1";
const rolesProteinesPartie2ChapterSlug = "roles-biologiques-proteines-partie-2";
const enzymesRegulationChapterSlug =
  "enzymes-proprietes-nomenclature-mecanisme-action-regulation";
const mesureActiviteEnzymatiqueChapterSlug = "mesure-activite-enzymatique";

const proteinChapterCases = [
  {
    label: "Structure et rôles biologiques des acides aminés",
    slug: acidesAminesChapterSlug,
  },
  {
    label: "Structure des peptides et protéines",
    slug: structurePeptidesProteinesChapterSlug,
  },
  {
    label: "Rôles biologiques des acides aminés et peptides",
    slug: rolesAcidesAminesPeptidesChapterSlug,
  },
  {
    label: "Rôles biologiques des protéines, partie 1",
    slug: rolesProteinesPartie1ChapterSlug,
  },
  {
    label: "Rôles biologiques des protéines, partie 2",
    slug: rolesProteinesPartie2ChapterSlug,
  },
] as const;

const enzymologyChapterCases = [
  {
    label: "Enzymes et régulation",
    slug: enzymesRegulationChapterSlug,
  },
  {
    label: "Mesure de l'activité enzymatique",
    slug: mesureActiviteEnzymatiqueChapterSlug,
  },
] as const;

type ChapterFixture = {
  title: string;
  sectionCount: number;
  quizCount: number;
  questionCount: number;
  sections: ChapterSectionFixture[];
};

type ChapterSectionFixture = {
  title: string;
  kind: "THEME" | "SYNTHESIS";
  quizzes: Array<{
    title: string;
    questionCount: number;
  }>;
};

type TeachingElementChapterSectionsFixture = {
  id: string;
  title: string;
  chapters: Array<{
    title: string;
    slug: string;
    distinctQuestionCount: number;
    invalidQuestionCount: number;
    sections: ChapterSectionFixture[];
  }>;
};

type TeachingElementChapterGroupsFixture = {
  id: string;
  title: string;
  groups: Array<{
    label: string;
    chapterTitles: string[];
  }>;
};

type CourseUnitFixture = {
  id: string;
  title: string;
  teachingElements: Array<{
    title: string;
  }>;
};

type RawCourseUnitBySlug = CourseUnitFixture & {
  programVersion: {
    slug: string;
    institution: {
      name: string;
      shortName: string | null;
    };
  };
};

type BiochimieCourseUnitCoverageFixture = {
  courseUnitId: string;
  teachingElementId: string | null;
  chapterCount: number;
};

type RawBiochimieCourseUnit = {
  id: string;
  teachingElements: Array<{
    id: string;
  }>;
};

type RawChapterAssignmentContext = {
  contextId: string;
};

type RawChapterGroupAssignment = {
  displayGroupKey: string | null;
  displayGroupLabel: string | null;
  displayGroupOrder: number | null;
  chapter: {
    title: string;
  };
};

type RawChapterSectionsAssignment = {
  chapter: {
    title: string;
    slug: string;
    sections: RawSection[];
  };
};

type RawQuiz = {
  title: string;
  questionLinks: Array<{
    id: string;
    question?: {
      id: string;
      choices: unknown;
      correctChoiceIndexes: number[];
      choiceExplanations: unknown;
    };
  }>;
};

type RawSection = {
  title: string;
  kind: "THEME" | "SYNTHESIS";
  quizzes: RawQuiz[];
};

function formatQuestionCountLabel(count: number) {
  return `${count} question${count > 1 ? "s" : ""}`;
}

function isValidSeededQuestion(question: NonNullable<RawQuiz["questionLinks"][number]["question"]>) {
  const choices = question.choices;

  if (!Array.isArray(choices) || choices.length < 4) {
    return false;
  }

  if (
    question.correctChoiceIndexes.length === 0 ||
    question.correctChoiceIndexes.some(
      (choiceIndex) =>
        !Number.isInteger(choiceIndex) ||
        choiceIndex < 0 ||
        choiceIndex >= choices.length,
    )
  ) {
    return false;
  }

  return (
    Array.isArray(question.choiceExplanations) &&
    question.choiceExplanations.length === choices.length
  );
}

function getSectionHeadingLabel(
  section: ChapterSectionFixture,
  sectionIndex: number,
) {
  if (section.kind === "SYNTHESIS") {
    return "Synthèse";
  }

  return `Section ${String.fromCharCode(65 + sectionIndex)} – ${section.title}`;
}

async function getCourseUnitFixture(
  courseUnitId = ue14Id,
  courseUnitLabel = "UE14",
): Promise<CourseUnitFixture> {
  const courseUnit = await prisma.healthCourseUnit.findUnique({
    where: { id: courseUnitId },
    select: {
      id: true,
      title: true,
      teachingElements: {
        where: { isActive: true },
        orderBy: [{ order: "asc" }, { title: "asc" }],
        select: {
          title: true,
        },
      },
    },
  });

  if (!courseUnit) {
    throw new Error(`${courseUnitLabel} introuvable (${courseUnitId}).`);
  }

  return courseUnit;
}

async function getCourseUnitFixtureBySlug(
  courseUnitSlug: string,
  courseUnitLabel: string,
): Promise<CourseUnitFixture> {
  const courseUnits: RawCourseUnitBySlug[] = await prisma.healthCourseUnit.findMany({
    where: { slug: courseUnitSlug },
    select: {
      id: true,
      title: true,
      programVersion: {
        select: {
          slug: true,
          institution: {
            select: {
              name: true,
              shortName: true,
            },
          },
        },
      },
      teachingElements: {
        where: { isActive: true },
        orderBy: [{ order: "asc" }, { title: "asc" }],
        select: {
          title: true,
        },
      },
    },
  });
  const courseUnit = courseUnits.find((entry) => {
    const institutionName = entry.programVersion.institution.name.toLocaleLowerCase("fr-FR");
    const institutionShortName =
      entry.programVersion.institution.shortName?.toLocaleLowerCase("fr-FR") ?? "";

    return (
      entry.programVersion.slug === "las-2025-2026" &&
      (institutionName.includes("reims champagne-ardenne") ||
        institutionShortName.includes("reims"))
    );
  });

  if (!courseUnit) {
    throw new Error(`${courseUnitLabel} introuvable (${courseUnitSlug}).`);
  }

  return {
    id: courseUnit.id,
    title: courseUnit.title,
    teachingElements: courseUnit.teachingElements,
  };
}

async function getChapterFixture(chapterSlug: string): Promise<ChapterFixture> {
  const chapter = await prisma.chapter.findFirst({
    where: { slug: chapterSlug },
    select: {
      title: true,
      sections: {
        where: { isPublished: true },
        orderBy: [{ order: "asc" }],
        select: {
          title: true,
          kind: true,
          quizzes: {
            where: { isPublished: true },
            orderBy: [{ order: "asc" }],
            select: {
              title: true,
              questionLinks: {
                where: { question: { isPublished: true } },
                select: { id: true },
              },
            },
          },
        },
      },
    },
  });

  if (!chapter) {
    throw new Error(`Chapitre introuvable: ${chapterSlug}`);
  }

  const sections: ChapterFixture["sections"] = chapter.sections.map((section: RawSection) => ({
    title: section.title,
    kind: section.kind,
    quizzes: section.quizzes.map((quiz: RawQuiz) => ({
      title: quiz.title,
      questionCount: quiz.questionLinks.length,
    })),
  }));

  return {
    title: chapter.title,
    sectionCount: sections.length,
    quizCount: sections.reduce((total: number, section) => total + section.quizzes.length, 0),
    questionCount: sections.reduce(
      (total: number, section) =>
        total +
        section.quizzes.reduce(
          (quizTotal: number, quiz) => quizTotal + quiz.questionCount,
          0,
        ),
      0,
    ),
    sections,
  };
}

async function getReimsUe14BiochimieCoverageFixtures(): Promise<
  BiochimieCourseUnitCoverageFixture[]
> {
  const anchorCourseUnit = await prisma.healthCourseUnit.findUnique({
    where: { id: ue14Id },
    select: {
      programVersionId: true,
      slug: true,
    },
  });

  if (!anchorCourseUnit) {
    throw new Error(`UE14 introuvable (${ue14Id}).`);
  }

  const courseUnits: RawBiochimieCourseUnit[] = await prisma.healthCourseUnit.findMany({
    where: {
      programVersionId: anchorCourseUnit.programVersionId,
      slug: anchorCourseUnit.slug,
    },
    select: {
      id: true,
      teachingElements: {
        where: {
          slug: "biochimie",
        },
        select: {
          id: true,
        },
      },
    },
  });

  const teachingElementIds = courseUnits.flatMap((courseUnit) =>
    courseUnit.teachingElements.map((teachingElement) => teachingElement.id),
  );
  const assignments: RawChapterAssignmentContext[] =
    teachingElementIds.length > 0
      ? await prisma.chapterAssignment.findMany({
          where: {
            contextType: "HEALTH_TEACHING_ELEMENT",
            contextId: {
              in: teachingElementIds,
            },
          },
          select: {
            contextId: true,
          },
        })
      : [];
  const chapterCountByTeachingElementId = new Map<string, number>();

  for (const assignment of assignments) {
    chapterCountByTeachingElementId.set(
      assignment.contextId,
      (chapterCountByTeachingElementId.get(assignment.contextId) ?? 0) + 1,
    );
  }

  return courseUnits.map((courseUnit) => {
    const teachingElement = courseUnit.teachingElements[0] ?? null;

    return {
      courseUnitId: courseUnit.id,
      teachingElementId: teachingElement?.id ?? null,
      chapterCount: teachingElement
        ? (chapterCountByTeachingElementId.get(teachingElement.id) ?? 0)
        : 0,
    };
  });
}

async function getTeachingElementChapterGroupsFixture(
  teachingElementSlug: string,
): Promise<TeachingElementChapterGroupsFixture> {
  const teachingElement = await prisma.healthTeachingElement.findFirst({
    where: {
      courseUnitId: ue14Id,
      slug: teachingElementSlug,
    },
    select: {
      id: true,
      title: true,
    },
  });

  if (!teachingElement) {
    throw new Error(`EC introuvable: ${teachingElementSlug}`);
  }

  const assignments: RawChapterGroupAssignment[] = await prisma.chapterAssignment.findMany({
    where: {
      contextType: "HEALTH_TEACHING_ELEMENT",
      contextId: teachingElement.id,
    },
    select: {
      displayGroupKey: true,
      displayGroupLabel: true,
      displayGroupOrder: true,
      order: true,
      chapter: {
        select: {
          title: true,
        },
      },
    },
    orderBy: [{ displayGroupOrder: "asc" }, { order: "asc" }, { updatedAt: "desc" }],
  });

  const groups = new Map<
    string,
    {
      label: string;
      order: number;
      chapterTitles: string[];
    }
  >();

  for (const assignment of assignments) {
    const key = assignment.displayGroupKey ?? "default";
    const label = assignment.displayGroupLabel ?? "Chapitres";
    const order = assignment.displayGroupOrder ?? Number.MAX_SAFE_INTEGER;
    const group: {
      label: string;
      order: number;
      chapterTitles: string[];
    } = groups.get(key) ?? {
      label,
      order,
      chapterTitles: [],
    };

    group.chapterTitles.push(assignment.chapter.title);
    groups.set(key, group);
  }

  return {
    id: teachingElement.id,
    title: teachingElement.title,
    groups: [...groups.values()]
      .sort((left, right) => left.order - right.order)
      .map((group) => ({
        label: group.label,
        chapterTitles: group.chapterTitles,
      })),
  };
}

async function getTeachingElementChapterSectionsFixture({
  courseUnitId,
  teachingElementSlug,
}: {
  courseUnitId: string;
  teachingElementSlug: string;
}): Promise<TeachingElementChapterSectionsFixture> {
  const teachingElement = await prisma.healthTeachingElement.findFirst({
    where: {
      courseUnitId,
      slug: teachingElementSlug,
    },
    select: {
      id: true,
      title: true,
    },
  });

  if (!teachingElement) {
    throw new Error(`EC introuvable: ${teachingElementSlug}`);
  }

  const assignments: RawChapterSectionsAssignment[] = await prisma.chapterAssignment.findMany({
    where: {
      contextType: "HEALTH_TEACHING_ELEMENT",
      contextId: teachingElement.id,
    },
    select: {
      order: true,
      chapter: {
        select: {
          title: true,
          slug: true,
          sections: {
            where: { isPublished: true },
            orderBy: [{ order: "asc" }],
            select: {
              title: true,
              kind: true,
              quizzes: {
                where: { isPublished: true },
                select: {
                  title: true,
                  questionLinks: {
                    where: { question: { isPublished: true } },
                    select: {
                      id: true,
                      question: {
                        select: {
                          id: true,
                          choices: true,
                          correctChoiceIndexes: true,
                          choiceExplanations: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    orderBy: [{ order: "asc" }, { updatedAt: "desc" }],
  });

  return {
    id: teachingElement.id,
    title: teachingElement.title,
    chapters: assignments.map((assignment) => {
      const questionLinks = assignment.chapter.sections.flatMap((section) =>
        section.quizzes.flatMap((quiz) => quiz.questionLinks),
      );

      return {
        title: assignment.chapter.title,
        slug: assignment.chapter.slug,
        distinctQuestionCount: new Set(
          questionLinks.map((questionLink) => questionLink.question?.id),
        ).size,
        invalidQuestionCount: questionLinks.filter(
          (questionLink) =>
            !questionLink.question || !isValidSeededQuestion(questionLink.question),
        ).length,
        sections: assignment.chapter.sections.map((section: RawSection) => ({
          title: section.title,
          kind: section.kind,
          quizzes: section.quizzes.map((quiz: RawQuiz) => ({
            title: quiz.title,
            questionCount: quiz.questionLinks.length,
          })),
        })),
      };
    }),
  };
}

test.describe("Santé - structure UE/EC/chapitres", () => {
  test("la page UE14 expose bien les trois EC attendus", async ({ page }) => {
    const courseUnit = await getCourseUnitFixture();

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}`);

    await expect(
      page.getByRole("heading", { name: new RegExp(courseUnit.title, "i") }),
    ).toBeVisible();

    for (const teachingElement of courseUnit.teachingElements) {
      await expect(
        page.getByRole("tab", { name: teachingElement.title, exact: true }),
      ).toBeVisible();
    }
  });

  test("la page UE13 expose bien les trois EC attendus", async ({ page }) => {
    const courseUnit = await getCourseUnitFixtureBySlug(ue13Slug, "UE13");
    const teachingElementTitles = courseUnit.teachingElements.map(
      (teachingElement) => teachingElement.title,
    );

    expect(teachingElementTitles).toEqual(["Anatomie", "Histologie", "Physiologie"]);

    await page.goto(`${appBaseUrl}/sante/ue/${courseUnit.id}`);

    await expect(
      page.getByRole("heading", { name: new RegExp(courseUnit.title, "i") }),
    ).toBeVisible();
    await expect(page.getByText("3 EC", { exact: true }).first()).toBeVisible();

    for (const teachingElement of courseUnit.teachingElements) {
      await expect(
        page.getByRole("tab", { name: teachingElement.title, exact: true }),
      ).toBeVisible();
    }
  });

  test("l'EC Histologie de l'UE13 expose les chapitres et sections attendus", async ({
    page,
  }) => {
    const courseUnit = await getCourseUnitFixtureBySlug(ue13Slug, "UE13");
    const histology = await getTeachingElementChapterSectionsFixture({
      courseUnitId: courseUnit.id,
      teachingElementSlug: "histologie",
    });
    const expectedChapters = [
      {
        title: "Définitions, techniques et microscopie",
        quizCount: 11,
        questionCount: 110,
        sections: [
          "Généralités sur l’histologie",
          "Technique histologique",
          "Colorations histologiques",
          "Technique cytologique",
          "Microscopie",
          "Synthèse du chapitre",
        ],
      },
      {
        title: "Les épithéliums : structures et classifications",
        quizCount: 9,
        questionCount: 90,
        sections: [
          "Définition et propriétés des épithéliums",
          "Différenciations apicales",
          "Épithéliums de revêtement",
          "Épithéliums glandulaires",
          "Synthèse du chapitre",
        ],
      },
      {
        title: "Les tissus conjonctifs",
        quizCount: 11,
        questionCount: 110,
        sections: [
          "Cellules des tissus conjonctifs",
          "Matrice extracellulaire",
          "Classification et tissus conjonctifs non spécialisés",
          "Tissu cartilagineux",
          "Tissu osseux",
          "Synthèse du chapitre",
        ],
      },
      {
        title: "Les tissus musculaires",
        quizCount: 9,
        questionCount: 90,
        sections: [
          "Généralités et classification",
          "Muscle strié squelettique",
          "Muscle strié cardiaque",
          "Muscle lisse",
          "Synthèse du chapitre",
        ],
      },
      {
        title: "Les tissus nerveux",
        quizCount: 11,
        questionCount: 110,
        sections: [
          "Organisation générale du tissu nerveux",
          "Neurones et synapses",
          "Névroglie du système nerveux central",
          "Névroglie du système nerveux périphérique",
          "Nerfs périphériques",
          "Synthèse du chapitre",
        ],
      },
    ];

    expect(histology.title).toBe("Histologie");
    expect(
      histology.chapters.map((chapter) => ({
        title: chapter.title,
        quizCount: chapter.sections.reduce(
          (total, section) => total + section.quizzes.length,
          0,
        ),
        questionCount: chapter.sections.reduce(
          (total, section) =>
            total +
            section.quizzes.reduce(
              (quizTotal, quiz) => quizTotal + quiz.questionCount,
              0,
            ),
          0,
        ),
        sections: chapter.sections.map((section) => section.title),
      })),
    ).toEqual(expectedChapters);
    expect(histology.chapters.flatMap((chapter) => chapter.sections)).toHaveLength(28);

    for (const [chapterIndex, chapter] of histology.chapters.entries()) {
      expect(chapter.invalidQuestionCount).toBe(0);
      expect(chapter.distinctQuestionCount).toBe(expectedChapters[chapterIndex].questionCount);

      for (const quiz of chapter.sections.flatMap((section) => section.quizzes)) {
        expect(quiz.questionCount).toBe(10);
      }
    }

    await page.goto(`${appBaseUrl}/sante/ue/${courseUnit.id}?ec=${histology.id}`);

    await expect(page.getByRole("tab", { name: "Histologie", exact: true })).toBeVisible();
    await expect(page.getByText("Histologie", { exact: true }).first()).toBeVisible();

    for (const [chapterIndex, chapter] of histology.chapters.entries()) {
      await expect(page.getByRole("link", { name: chapter.title, exact: true })).toBeVisible();
      await expect(
        page
          .getByText(
            `${chapter.sections.length} sections · ${expectedChapters[chapterIndex].quizCount} quiz`,
            { exact: true },
          )
          .first(),
      ).toBeVisible();
    }

    const firstChapter = histology.chapters[0];
    await page.goto(`${appBaseUrl}/sante/ue/${courseUnit.id}/chapitres/${firstChapter.slug}`);

    await expect(page.getByRole("heading", { name: firstChapter.title })).toBeVisible();
    await expect(page.getByText(`${firstChapter.sections.length} sections`)).toBeVisible();
    await expect(page.getByText(`${expectedChapters[0].quizCount} quiz`)).toBeVisible();
    await expect(page.getByText(`${expectedChapters[0].questionCount} questions`)).toBeVisible();
    await expect(page.getByRole("link", { name: /Démarrer/i })).toHaveCount(
      expectedChapters[0].quizCount,
    );

    for (const [sectionIndex, section] of firstChapter.sections.entries()) {
      await expect(
        page.getByRole("heading", {
          name: getSectionHeadingLabel(section, sectionIndex),
          exact: true,
        }),
      ).toBeVisible();
    }
  });

  test("le chapitre 1 affiche des badges cohérents avec sa structure seedée", async ({
    page,
  }) => {
    const chapter = await getChapterFixture(chapterOneSlug);

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${chapterOneSlug}`);

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText(`${chapter.sectionCount} sections`)).toBeVisible();
    await expect(page.getByText(`${chapter.quizCount} quiz`)).toBeVisible();
    await expect(page.getByText(formatQuestionCountLabel(chapter.questionCount))).toBeVisible();

    for (const [sectionIndex, section] of chapter.sections.entries()) {
      const headingLabel = getSectionHeadingLabel(section, sectionIndex);
      await expect(page.getByText(headingLabel, { exact: true })).toBeVisible();
    }
  });

  test("le chapitre 2 expose bien sa structure seedée", async ({ page }) => {
    const chapter = await getChapterFixture(chapterTwoSlug);
    const emptySections = chapter.sections.filter((section) => section.quizzes.length === 0);
    const zeroQuestionQuizCount = chapter.sections.reduce(
      (total, section) =>
        total + section.quizzes.filter((quiz) => quiz.questionCount === 0).length,
      0,
    );

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${chapterTwoSlug}`);

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText(`${chapter.sectionCount} sections`)).toBeVisible();
    await expect(page.getByText(`${chapter.quizCount} quiz`)).toBeVisible();

    for (const [sectionIndex, section] of chapter.sections.entries()) {
      const sectionHeading = getSectionHeadingLabel(section, sectionIndex);
      await expect(page.getByRole("heading", { name: sectionHeading, exact: true })).toBeVisible();
    }

    await expect(page.getByText("Aucun quiz publié dans cette section.")).toHaveCount(
      emptySections.length,
    );
    await expect(page.getByText(formatQuestionCountLabel(0), { exact: true })).toHaveCount(
      zeroQuestionQuizCount,
    );
    await expect(page.getByRole("link", { name: /Démarrer/i })).toHaveCount(chapter.quizCount);
  });

  test("toutes les UE14 Reims ont les chapitres de biochimie rattachés", async () => {
    const coverage = await getReimsUe14BiochimieCoverageFixtures();

    expect(coverage.length).toBeGreaterThan(0);

    for (const courseUnitCoverage of coverage) {
      expect(
        courseUnitCoverage.teachingElementId,
        `EC Biochimie manquant pour l'UE ${courseUnitCoverage.courseUnitId}`,
      ).not.toBeNull();
      expect(
        courseUnitCoverage.chapterCount,
        `Nombre de chapitres Biochimie incorrect pour l'UE ${courseUnitCoverage.courseUnitId}`,
      ).toBe(15);
    }
  });

  test("la page UE14 expose les chapitres de biochimie groupés", async ({ page }) => {
    const teachingElement = await getTeachingElementChapterGroupsFixture("biochimie");
    const chapterCount = teachingElement.groups.reduce(
      (total, group) => total + group.chapterTitles.length,
      0,
    );

    expect(teachingElement.groups.length).toBeGreaterThan(0);
    expect(chapterCount).toBe(15);

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}?ec=${teachingElement.id}`);

    await expect(
      page.getByRole("tab", { name: teachingElement.title, exact: true }),
    ).toBeVisible();

    for (const group of teachingElement.groups) {
      await expect(page.getByText(group.label, { exact: true })).toBeVisible();

      for (const chapterTitle of group.chapterTitles) {
        await expect(page.getByRole("link", { name: chapterTitle, exact: true })).toBeVisible();
      }
    }
  });

  test("le chapitre Les osides expose sa structure seedée", async ({ page }) => {
    const chapter = await getChapterFixture(osidesChapterSlug);

    expect(chapter.sectionCount).toBe(5);
    expect(chapter.quizCount).toBe(11);
    expect(chapter.questionCount).toBe(122);

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${osidesChapterSlug}`);

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText("5 sections")).toBeVisible();
    await expect(page.getByText("11 quiz")).toBeVisible();
    await expect(page.getByText("122 questions")).toBeVisible();

    for (const [sectionIndex, section] of chapter.sections.entries()) {
      const sectionHeading = getSectionHeadingLabel(section, sectionIndex);
      await expect(page.getByRole("heading", { name: sectionHeading, exact: true })).toBeVisible();
    }
  });

  test("le chapitre d'introduction aux lipides expose sa structure seedée", async ({
    page,
  }) => {
    const chapter = await getChapterFixture(introductionLipidesChapterSlug);

    expect(chapter.sectionCount).toBe(5);
    expect(chapter.quizCount).toBe(11);
    expect(chapter.questionCount).toBe(122);

    await page.goto(
      `${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${introductionLipidesChapterSlug}`,
    );

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText("5 sections")).toBeVisible();
    await expect(page.getByText("11 quiz")).toBeVisible();
    await expect(page.getByText("122 questions")).toBeVisible();

    for (const [sectionIndex, section] of chapter.sections.entries()) {
      const sectionHeading = getSectionHeadingLabel(section, sectionIndex);
      await expect(page.getByRole("heading", { name: sectionHeading, exact: true })).toBeVisible();
    }
  });

  test("le chapitre Les eicosanoïdes expose sa structure seedée", async ({ page }) => {
    const chapter = await getChapterFixture(eicosanoidesChapterSlug);

    expect(chapter.sectionCount).toBe(5);
    expect(chapter.quizCount).toBe(11);
    expect(chapter.questionCount).toBe(122);

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${eicosanoidesChapterSlug}`);

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText("5 sections")).toBeVisible();
    await expect(page.getByText("11 quiz")).toBeVisible();
    await expect(page.getByText("122 questions")).toBeVisible();

    for (const [sectionIndex, section] of chapter.sections.entries()) {
      const sectionHeading = getSectionHeadingLabel(section, sectionIndex);
      await expect(page.getByRole("heading", { name: sectionHeading, exact: true })).toBeVisible();
    }
  });

  test("le chapitre Glycérides et glycérophospholipides expose sa structure seedée", async ({
    page,
  }) => {
    const chapter = await getChapterFixture(glyceridesChapterSlug);

    expect(chapter.sectionCount).toBe(5);
    expect(chapter.quizCount).toBe(11);
    expect(chapter.questionCount).toBe(122);

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${glyceridesChapterSlug}`);

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText("5 sections")).toBeVisible();
    await expect(page.getByText("11 quiz")).toBeVisible();
    await expect(page.getByText("122 questions")).toBeVisible();

    for (const [sectionIndex, section] of chapter.sections.entries()) {
      const sectionHeading = getSectionHeadingLabel(section, sectionIndex);
      await expect(page.getByRole("heading", { name: sectionHeading, exact: true })).toBeVisible();
    }
  });

  test("le chapitre Les sphingolipides expose sa structure seedée", async ({ page }) => {
    const chapter = await getChapterFixture(sphingolipidesChapterSlug);

    expect(chapter.sectionCount).toBe(5);
    expect(chapter.quizCount).toBe(11);
    expect(chapter.questionCount).toBe(122);

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${sphingolipidesChapterSlug}`);

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText("5 sections")).toBeVisible();
    await expect(page.getByText("11 quiz")).toBeVisible();
    await expect(page.getByText("122 questions")).toBeVisible();

    for (const [sectionIndex, section] of chapter.sections.entries()) {
      const sectionHeading = getSectionHeadingLabel(section, sectionIndex);
      await expect(page.getByRole("heading", { name: sectionHeading, exact: true })).toBeVisible();
    }
  });

  test("le chapitre Stérols, stéroïdes et stérides expose sa structure seedée", async ({
    page,
  }) => {
    const chapter = await getChapterFixture(sterolsChapterSlug);

    expect(chapter.sectionCount).toBe(5);
    expect(chapter.quizCount).toBe(11);
    expect(chapter.questionCount).toBe(122);

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${sterolsChapterSlug}`);

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText("5 sections")).toBeVisible();
    await expect(page.getByText("11 quiz")).toBeVisible();
    await expect(page.getByText("122 questions")).toBeVisible();

    for (const [sectionIndex, section] of chapter.sections.entries()) {
      const sectionHeading = getSectionHeadingLabel(section, sectionIndex);
      await expect(page.getByRole("heading", { name: sectionHeading, exact: true })).toBeVisible();
    }
  });

  for (const chapterCase of proteinChapterCases) {
    test(`le chapitre ${chapterCase.label} expose sa structure seedée`, async ({ page }) => {
      const chapter = await getChapterFixture(chapterCase.slug);

      expect(chapter.sectionCount).toBe(5);
      expect(chapter.quizCount).toBe(14);
      expect(chapter.questionCount).toBe(140);

      await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${chapterCase.slug}`);

      await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
      await expect(page.getByText("5 sections")).toBeVisible();
      await expect(page.getByText("14 quiz")).toBeVisible();
      await expect(page.getByText("140 questions")).toBeVisible();

      for (const [sectionIndex, section] of chapter.sections.entries()) {
        const sectionHeading = getSectionHeadingLabel(section, sectionIndex);
        await expect(
          page.getByRole("heading", { name: sectionHeading, exact: true }),
        ).toBeVisible();
      }
    });
  }

  for (const chapterCase of enzymologyChapterCases) {
    test(`le chapitre ${chapterCase.label} expose sa structure seedée`, async ({ page }) => {
      const chapter = await getChapterFixture(chapterCase.slug);

      expect(chapter.sectionCount).toBe(5);
      expect(chapter.quizCount).toBe(14);
      expect(chapter.questionCount).toBe(140);

      await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${chapterCase.slug}`);

      await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
      await expect(page.getByText("5 sections")).toBeVisible();
      await expect(page.getByText("14 quiz")).toBeVisible();
      await expect(page.getByText("140 questions")).toBeVisible();

      for (const [sectionIndex, section] of chapter.sections.entries()) {
        const sectionHeading = getSectionHeadingLabel(section, sectionIndex);
        await expect(
          page.getByRole("heading", { name: sectionHeading, exact: true }),
        ).toBeVisible();
      }
    });
  }
});
