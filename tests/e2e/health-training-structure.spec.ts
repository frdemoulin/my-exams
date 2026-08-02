import { expect, test } from "@playwright/test";
import { loadProjectEnv } from "../../scripts/lib/load-env";

loadProjectEnv();

const prisma = require("../../src/lib/db/prisma").default;

const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

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
  sections: Array<{
    title: string;
    kind: "THEME" | "SYNTHESIS";
    quizzes: Array<{
      title: string;
      questionCount: number;
    }>;
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

type RawQuiz = {
  title: string;
  questionLinks: Array<{ id: string }>;
};

type RawSection = {
  title: string;
  kind: "THEME" | "SYNTHESIS";
  quizzes: RawQuiz[];
};

function formatQuestionCountLabel(count: number) {
  return `${count} question${count > 1 ? "s" : ""}`;
}

function getSectionHeadingLabel(
  section: ChapterFixture["sections"][number],
  sectionIndex: number,
) {
  if (section.kind === "SYNTHESIS") {
    return "Synthèse";
  }

  return `Section ${String.fromCharCode(65 + sectionIndex)} – ${section.title}`;
}

async function getCourseUnitFixture() {
  const courseUnit = await prisma.healthCourseUnit.findUnique({
    where: { id: ue14Id },
    select: {
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
    throw new Error(`UE14 introuvable (${ue14Id}).`);
  }

  return courseUnit;
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

  const assignments = await prisma.chapterAssignment.findMany({
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

  test("le chapitre 1 affiche des badges cohérents avec sa structure seedée", async ({
    page,
  }) => {
    const chapter = await getChapterFixture(chapterOneSlug);

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${chapterOneSlug}`);

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText(`${chapter.sectionCount} sections`)).toBeVisible();
    await expect(page.getByText(`${chapter.quizCount} QCM`)).toBeVisible();
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
    await expect(page.getByText(`${chapter.quizCount} QCM`)).toBeVisible();

    for (const [sectionIndex, section] of chapter.sections.entries()) {
      const sectionHeading = getSectionHeadingLabel(section, sectionIndex);
      await expect(page.getByRole("heading", { name: sectionHeading, exact: true })).toBeVisible();
    }

    await expect(page.getByText("Aucun QCM publié dans cette section.")).toHaveCount(
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
    expect(chapter.quizCount).toBe(14);
    expect(chapter.questionCount).toBe(140);

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${osidesChapterSlug}`);

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText("5 sections")).toBeVisible();
    await expect(page.getByText("14 QCM")).toBeVisible();
    await expect(page.getByText("140 questions")).toBeVisible();

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
    expect(chapter.quizCount).toBe(14);
    expect(chapter.questionCount).toBe(140);

    await page.goto(
      `${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${introductionLipidesChapterSlug}`,
    );

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText("5 sections")).toBeVisible();
    await expect(page.getByText("14 QCM")).toBeVisible();
    await expect(page.getByText("140 questions")).toBeVisible();

    for (const [sectionIndex, section] of chapter.sections.entries()) {
      const sectionHeading = getSectionHeadingLabel(section, sectionIndex);
      await expect(page.getByRole("heading", { name: sectionHeading, exact: true })).toBeVisible();
    }
  });

  test("le chapitre Les eicosanoïdes expose sa structure seedée", async ({ page }) => {
    const chapter = await getChapterFixture(eicosanoidesChapterSlug);

    expect(chapter.sectionCount).toBe(5);
    expect(chapter.quizCount).toBe(14);
    expect(chapter.questionCount).toBe(140);

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${eicosanoidesChapterSlug}`);

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText("5 sections")).toBeVisible();
    await expect(page.getByText("14 QCM")).toBeVisible();
    await expect(page.getByText("140 questions")).toBeVisible();

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
    expect(chapter.quizCount).toBe(14);
    expect(chapter.questionCount).toBe(140);

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${glyceridesChapterSlug}`);

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText("5 sections")).toBeVisible();
    await expect(page.getByText("14 QCM")).toBeVisible();
    await expect(page.getByText("140 questions")).toBeVisible();

    for (const [sectionIndex, section] of chapter.sections.entries()) {
      const sectionHeading = getSectionHeadingLabel(section, sectionIndex);
      await expect(page.getByRole("heading", { name: sectionHeading, exact: true })).toBeVisible();
    }
  });

  test("le chapitre Les sphingolipides expose sa structure seedée", async ({ page }) => {
    const chapter = await getChapterFixture(sphingolipidesChapterSlug);

    expect(chapter.sectionCount).toBe(5);
    expect(chapter.quizCount).toBe(14);
    expect(chapter.questionCount).toBe(140);

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${sphingolipidesChapterSlug}`);

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText("5 sections")).toBeVisible();
    await expect(page.getByText("14 QCM")).toBeVisible();
    await expect(page.getByText("140 questions")).toBeVisible();

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
    expect(chapter.quizCount).toBe(14);
    expect(chapter.questionCount).toBe(140);

    await page.goto(`${appBaseUrl}/sante/ue/${ue14Id}/chapitres/${sterolsChapterSlug}`);

    await expect(page.getByRole("heading", { name: chapter.title })).toBeVisible();
    await expect(page.getByText("5 sections")).toBeVisible();
    await expect(page.getByText("14 QCM")).toBeVisible();
    await expect(page.getByText("140 questions")).toBeVisible();

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
      await expect(page.getByText("14 QCM")).toBeVisible();
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
      await expect(page.getByText("14 QCM")).toBeVisible();
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
