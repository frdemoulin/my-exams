import { expect, test } from "@playwright/test";
import { loadProjectEnv } from "../../scripts/lib/load-env";
import { formatTeachingElementBreadcrumbLabel } from "../../src/app/[locale]/(public)/sante/ue/[courseUnitId]/chapitres/[chapterSlug]/chapter-page.utils";

loadProjectEnv();

const prisma = require("../../src/lib/db/prisma").default;

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";
const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;
const e2eEmail = process.env.E2E_TEST_EMAIL ?? "admin-e2e@example.com";
const chapterSlug = "elements-chimiques-classification-periodique";

type HealthQcmFixture = {
  courseUnitId: string;
  courseUnitTitle: string;
  teachingElementTitle: string;
  teachingElementShortTitle?: string | null;
  teachingElementCode: string | null;
  teachingElementOrder: number | null;
  chapterTitle: string;
  quizId: string;
  quizSlug: string;
  quizQuestionCount: number;
};

type PublishedQuiz = {
  id: string;
  slug: string;
  questionLinks: Array<{ id: string }>;
};

type PublishedSection = {
  quizzes: PublishedQuiz[];
};

async function getFixture(): Promise<HealthQcmFixture> {
  const activeVersion = await prisma.healthProgramVersion.findFirstOrThrow({
    where: { isCurrent: true, institution: { uaiCode: "0511296G" } },
    select: { id: true },
  });

  const activeTeachingElements = await prisma.healthTeachingElement.findMany({
    where: { courseUnit: { programVersionId: activeVersion.id } },
    select: { id: true },
  });
  const activeTeIds = activeTeachingElements.map((te: { id: string }) => te.id);

  const chapter = await prisma.chapter.findFirst({
    where: { slug: chapterSlug },
    select: {
      title: true,
      assignments: {
        where: {
          contextType: "HEALTH_TEACHING_ELEMENT",
          contextId: { in: activeTeIds },
        },
        select: { contextId: true },
        take: 1,
      },
      sections: {
        where: { isPublished: true },
        orderBy: [{ order: "asc" }],
        select: {
          quizzes: {
            where: { isPublished: true },
            orderBy: [{ order: "asc" }],
            select: {
              id: true,
              slug: true,
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

  if (!chapter?.assignments[0]) {
    throw new Error(`Aucun rattachement HEALTH_TEACHING_ELEMENT actif trouvé pour ${chapterSlug}.`);
  }

  const teachingElement = await prisma.healthTeachingElement.findUnique({
    where: { id: chapter.assignments[0].contextId },
    select: {
      code: true,
      title: true,
      shortTitle: true,
      order: true,
      courseUnit: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  });

  if (!teachingElement?.courseUnit) {
    throw new Error(`EC introuvable pour le chapitre ${chapterSlug}.`);
  }

  const quiz = chapter.sections
    .flatMap((section: PublishedSection) => section.quizzes)
    .find((item: PublishedQuiz) => item.questionLinks.length > 0);

  if (!quiz) {
    throw new Error(`Aucun quiz publié avec questions trouvé pour ${chapterSlug}.`);
  }

  return {
    courseUnitId: teachingElement.courseUnit.id,
    courseUnitTitle: teachingElement.courseUnit.title,
    teachingElementTitle: teachingElement.title,
    teachingElementShortTitle: teachingElement.shortTitle ?? null,
    teachingElementCode: teachingElement.code ?? null,
    teachingElementOrder: teachingElement.order ?? null,
    chapterTitle: chapter.title,
    quizId: quiz.id,
    quizSlug: quiz.slug,
    quizQuestionCount: quiz.questionLinks.length,
  };
}

async function resetQuizProgress(quizId: string) {
  const user = await prisma.user.findUnique({
    where: { email: e2eEmail },
    select: { id: true },
  });

  if (!user) {
    return;
  }

  await prisma.userTrainingQuizAttempt.deleteMany({
    where: { userId: user.id, quizId },
  });
  await prisma.userTrainingQuizProgress.deleteMany({
    where: { userId: user.id, quizId },
  });
}

test.describe.serial("Santé - QCM publics", () => {
  test("la page UE affiche l'EC et le chapitre de chimie", async ({ page }) => {
    const fixture = await getFixture();

    await page.goto(`${appBaseUrl}/sante/ue/${fixture.courseUnitId}`);

    await expect(
      page.getByRole("heading", { name: new RegExp(fixture.courseUnitTitle, "i") }),
    ).toBeVisible();
    const expectedTabLabel = fixture.teachingElementShortTitle ?? fixture.teachingElementTitle;
    await expect(
      page.getByRole("tab", { name: expectedTabLabel, exact: true }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: fixture.chapterTitle })).toBeVisible();
    await expect(page.getByRole("link", { name: /^Voir$/i }).first()).toBeVisible();
  });

  test("l'onglet Évaluations expose les colles, le popover d'aide compact et la section examens blancs", async ({ page }) => {
    const fixture = await getFixture();

    await page.goto(`${appBaseUrl}/sante/ue/${fixture.courseUnitId}?ec=evaluations`);

    await expect(page.getByRole("tab", { name: /Évaluations\s*14/i })).toBeVisible();
    await expect(page.getByText("Colles réalisées")).toHaveCount(0);
    await expect(page.getByText("Score moyen")).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Colles" })).toBeVisible();

    const helpButton = page.getByRole("button", { name: "Aide aux évaluations" });
    await expect(helpButton).toBeVisible();
    await helpButton.click();

    await expect(page.getByRole("link", { name: /Découvrir/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Formats et notation/i })).toBeVisible();

    await expect(page.getByRole("heading", { name: "Examens blancs" })).toBeVisible();
    const mockExamsSection = page.locator('section[aria-labelledby="health-mock-exams-heading"]');
    await expect(mockExamsSection).toBeVisible();
  });

  test("la page chapitre expose les sections, le retour à l'EC et les QCM", async ({
    page,
  }) => {
    const fixture = await getFixture();
    const teachingElementBreadcrumbLabel = formatTeachingElementBreadcrumbLabel({
      code: fixture.teachingElementCode,
      order: fixture.teachingElementOrder,
      title: fixture.teachingElementTitle,
    });

    await page.goto(
      `${appBaseUrl}/sante/ue/${fixture.courseUnitId}/chapitres/${chapterSlug}`,
    );

    await expect(page.getByRole("heading", { name: fixture.chapterTitle })).toBeVisible();
    await expect(
      page.getByRole("link", { name: teachingElementBreadcrumbLabel, exact: true }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Retour à l'EC" })).toBeVisible();
    await expect(page.getByText("Parcours du chapitre")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Section A – Atomes" })).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Section B – Organisation et configuration électronique",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Section C – Classification périodique des éléments",
      }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Synthèse" })).toBeVisible();
    await expect(page.getByRole("link", { name: /Démarrer/i }).first()).toBeVisible();
  });

  test.describe("session et stats d'un QCM", () => {
    test.use({ storageState: authFile });

    test("un étudiant peut terminer un QCM puis revoir la correction", async ({ page }) => {
      const fixture = await getFixture();
      await resetQuizProgress(fixture.quizId);

      await page.goto(
        `${appBaseUrl}/sante/ue/${fixture.courseUnitId}/chapitres/${chapterSlug}/qcm/${fixture.quizSlug}`,
      );

      await expect(page.getByRole("heading", { name: "Quiz 1" })).toBeVisible();
      await expect(page.getByRole("link", { name: "Retour au chapitre" })).toBeVisible();
      await expect(page.getByTestId("quiz-taking")).toBeVisible();

      for (let index = 0; index < fixture.quizQuestionCount; index += 1) {
        await expect(page.getByTestId("quiz-question-counter")).toContainText(
          `Question ${index + 1} / ${fixture.quizQuestionCount}`,
        );
        if (await page.getByTestId("quiz-choice-0").isVisible()) {
          await page.getByTestId("quiz-choice-0").click();
        } else if (await page.getByTestId("quiz-short-answer-input").isVisible()) {
          await page.getByTestId("quiz-short-answer-input").fill("78");
        }

        if (index < fixture.quizQuestionCount - 1) {
          await page.getByTestId("quiz-next").click();
        }
      }

      await page.getByTestId("quiz-open-summary").click();

      await expect(page.getByTestId("quiz-summary")).toBeVisible();
      await expect(page.getByText("Bilan du quiz")).toBeVisible();
      await expect(page.getByTestId("quiz-open-review")).toBeVisible();
      await expect(page.getByTestId("quiz-restart")).toBeVisible();

      await page.getByTestId("quiz-open-review").click();

      await expect(page.getByTestId("quiz-review")).toBeVisible();
      await expect(page.getByText("Ta réponse")).toBeVisible();
      await expect(page.getByText("Réponse attendue")).toBeVisible();
      await expect(page.getByTestId("quiz-back-to-summary")).toBeVisible();
    });

    test("la page chapitre remonte les statistiques de tentative d'un quiz", async ({
      page,
    }) => {
      const fixture = await getFixture();
      await resetQuizProgress(fixture.quizId);

      await page.goto(
        `${appBaseUrl}/sante/ue/${fixture.courseUnitId}/chapitres/${chapterSlug}/qcm/${fixture.quizSlug}`,
      );

      for (let index = 0; index < fixture.quizQuestionCount; index += 1) {
        if (await page.getByTestId("quiz-choice-0").isVisible()) {
          await page.getByTestId("quiz-choice-0").click();
        } else if (await page.getByTestId("quiz-short-answer-input").isVisible()) {
          await page.getByTestId("quiz-short-answer-input").fill("78");
        }

        if (index < fixture.quizQuestionCount - 1) {
          await page.getByTestId("quiz-next").click();
        }
      }

      await page.getByTestId("quiz-open-summary").click();
      await expect(page.getByTestId("quiz-summary")).toBeVisible();

      await page.goto(
        `${appBaseUrl}/sante/ue/${fixture.courseUnitId}/chapitres/${chapterSlug}`,
      );

      await expect
        .poll(async () => page.getByText(/1 tentative|1 tentatives/).first().textContent())
        .toContain("1 tentative");
      await expect(page.getByText(/Min \d+% · Moy \d+% · Max \d+%/).first()).toBeVisible();
    });
  });
});
