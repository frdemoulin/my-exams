import { expect, test } from "@playwright/test";
import { loadProjectEnv } from "../../scripts/lib/load-env";

loadProjectEnv();

const prisma = require("../../src/lib/db/prisma").default;

const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;

const ue14Id = "6a2c2b111af36bd83ac27ec2";
const chapterOneSlug = "elements-chimiques-classification-periodique";
const chapterTwoSlug = "formation-ions-electronegativite-liaisons-chimiques";

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

  const sections = chapter.sections.map((section) => ({
    title: section.title,
    kind: section.kind,
    quizzes: section.quizzes.map((quiz) => ({
      title: quiz.title,
      questionCount: quiz.questionLinks.length,
    })),
  }));

  return {
    title: chapter.title,
    sectionCount: sections.length,
    quizCount: sections.reduce((total, section) => total + section.quizzes.length, 0),
    questionCount: sections.reduce(
      (total, section) =>
        total + section.quizzes.reduce((quizTotal, quiz) => quizTotal + quiz.questionCount, 0),
      0,
    ),
    sections,
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
    await expect(page.getByRole("link", { name: /Commencer/i })).toHaveCount(chapter.quizCount);
  });
});
