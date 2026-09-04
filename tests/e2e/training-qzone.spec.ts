import { expect, test, type Page } from "@playwright/test";
import { loadProjectEnv } from "../../scripts/lib/load-env";

loadProjectEnv();

const prisma = require("../../src/lib/db/prisma").default;

const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;
const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";

const chapterSlug = "glucides-generalites-structure";

type PublishedQuiz = {
  id: string;
  slug: string;
  title: string;
  questionLinks: Array<{
    order: number;
    question: {
      id: string;
      order: number;
      questionType: string | null;
    };
  }>;
};

type PublishedSection = {
  quizzes: PublishedQuiz[];
};

async function getQZoneFixture() {
  const chapter = await prisma.chapter.findFirst({
    where: { slug: chapterSlug },
    select: {
      id: true,
      title: true,
      assignments: {
        where: { contextType: "HEALTH_TEACHING_ELEMENT" },
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
              title: true,
              questionLinks: {
                orderBy: [{ order: "asc" }],
                select: {
                  order: true,
                  question: {
                    select: {
                      id: true,
                      order: true,
                      questionType: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  if (!chapter?.assignments[0]) {
    throw new Error(`Aucun rattachement HEALTH_TEACHING_ELEMENT trouvé pour ${chapterSlug}.`);
  }

  const teachingElement = await prisma.healthTeachingElement.findUnique({
    where: { id: chapter.assignments[0].contextId },
    select: {
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

  // Find the quiz containing the QZONE question (order 42)
  const quiz = chapter.sections
    .flatMap((section: PublishedSection) => section.quizzes)
    .find((item: PublishedQuiz) =>
      item.questionLinks.some(
        (link: PublishedQuiz["questionLinks"][number]) =>
          link.question.order === 42 ||
          link.question.questionType === "hotspot" ||
          link.question.questionType === "QZONE",
      ),
    );

  if (!quiz) {
    throw new Error(`Quiz contenant la question QZONE introuvable pour ${chapterSlug}.`);
  }

  // Find index of the QZONE question
  const qzoneIndex = quiz.questionLinks.findIndex(
    (link: PublishedQuiz["questionLinks"][number]) =>
      link.question.order === 42 ||
      link.question.questionType === "hotspot" ||
      link.question.questionType === "QZONE",
  );

  return {
    courseUnitId: teachingElement.courseUnit.id,
    chapterTitle: chapter.title,
    quizTitle: quiz.title,
    quizSlug: quiz.slug,
    quizQuestionCount: quiz.questionLinks.length,
    qzoneIndex,
  };
}

async function answerAllQuizQuestions(
  page: Page,
  fixture: Awaited<ReturnType<typeof getQZoneFixture>>,
  qzoneCoords: { x: number; y: number },
) {
  for (let i = 0; i < fixture.quizQuestionCount; i++) {
    const qNav = page.getByTestId(`quiz-nav-question-${i + 1}`);
    await qNav.click();

    if (i === fixture.qzoneIndex) {
      const surface = page.locator('[data-testid="hotspot-question-surface"]');
      await expect(surface).toBeVisible();
      await page.waitForFunction(() => {
        const img = document.querySelector(
          '[data-testid="hotspot-question-surface"] img',
        ) as HTMLImageElement | null;
        return img && img.complete && img.naturalHeight > 0 && img.clientHeight > 50;
      });

      const box = await surface.boundingBox();
      expect(box).not.toBeNull();
      if (box) {
        await surface.click({
          position: {
            x: box.width * qzoneCoords.x,
            y: box.height * qzoneCoords.y,
          },
        });
      }
      await expect(page.getByText(/Zone sélectionnée :/)).toBeVisible();
    } else {
      const shortAnswerInput = page.locator('[data-testid="quiz-short-answer-input"]');
      if (await shortAnswerInput.isVisible()) {
        await shortAnswerInput.fill("1");
      } else {
        const choice = page.locator('[data-testid^="quiz-choice-"]').first();
        if (await choice.isVisible()) {
          await choice.click();
        }
      }
    }
  }
}

test.describe.serial("Player Santé V2 — QZONE en entraînement", () => {
  test.use({ storageState: authFile });

  test("Passation : sélection, affichage du marqueur, réinitialisation et validation", async ({
    page,
  }) => {
    const fixture = await getQZoneFixture();

    await page.addInitScript(() => window.localStorage.clear());
    await page.goto(
      `${appBaseUrl}/sante/ue/${fixture.courseUnitId}/chapitres/${chapterSlug}/qcm/${fixture.quizSlug}`,
    );

    await expect(page.getByTestId("quiz-question-counter")).toBeVisible();

    // Navigate to the QZONE question
    const questionButton = page.getByTestId(`quiz-nav-question-${fixture.qzoneIndex + 1}`);
    await questionButton.click();

    // 1. Absence du fallback
    await expect(
      page.getByText("Ce type de question n’est pas encore rendu dans le player."),
    ).not.toBeVisible();

    // 2. Affichage de l'image
    const qzoneImage = page.locator('img[src*="ch1-fischer-d-glucose-c5-qzone.svg"]');
    await expect(qzoneImage).toBeVisible();

    // 3. Clic sur la surface interactive à (50%, 50%)
    const surface = page.locator('[data-testid="hotspot-question-surface"]');
    await expect(surface).toBeVisible();
    await page.waitForFunction(() => {
      const img = document.querySelector(
        '[data-testid="hotspot-question-surface"] img',
      ) as HTMLImageElement | null;
      return img && img.complete && img.naturalHeight > 0 && img.clientHeight > 50;
    });

    const box = await surface.boundingBox();
    expect(box).not.toBeNull();
    if (!box) return;

    await surface.click({
      position: {
        x: box.width * 0.5,
        y: box.height * 0.5,
      },
    });

    // 4. Barre de sélection visible avec le point choisi
    await expect(page.getByText(/Zone sélectionnée :/)).toBeVisible();
    const clearButton = page.locator('[data-testid="hotspot-clear-point"]');
    await expect(clearButton).toBeVisible();

    // 5. Réinitialisation du point
    await clearButton.click();
    await expect(clearButton).not.toBeVisible();
    await expect(page.getByText(/Zone sélectionnée :/)).not.toBeVisible();

    // 6. Re-sélection à la zone attendue (C5: x=0.50, y=0.665)
    await surface.click({
      position: {
        x: box.width * 0.5,
        y: box.height * 0.665,
      },
    });
    await expect(page.getByText(/Zone sélectionnée :/)).toBeVisible();
    await expect(clearButton).toBeVisible();
  });

  test("Cycle complet avec réponse correcte, bilan et revue détaillée", async ({ page }) => {
    const fixture = await getQZoneFixture();

    await page.addInitScript(() => window.localStorage.clear());
    await page.goto(
      `${appBaseUrl}/sante/ue/${fixture.courseUnitId}/chapitres/${chapterSlug}/qcm/${fixture.quizSlug}`,
    );

    await expect(page.getByTestId("quiz-question-counter")).toBeVisible();

    // Answer all questions with correct target for QZONE (C5: x=0.50, y=0.665)
    await answerAllQuizQuestions(page, fixture, { x: 0.5, y: 0.665 });

    // Click "Voir les résultats"
    const openSummaryButton = page.getByTestId("quiz-open-summary");
    await expect(openSummaryButton).toBeVisible();
    await openSummaryButton.click();

    // Check summary page
    await expect(page.getByTestId("quiz-summary")).toBeVisible();

    // Click "Consulter la correction" / "Revoir"
    const openReviewButton = page.getByTestId("quiz-open-review");
    await expect(openReviewButton).toBeVisible();
    await openReviewButton.click();

    // Navigate to the QZONE question in review mode
    const qzoneNav = page.getByTestId(`quiz-nav-question-${fixture.qzoneIndex + 1}`);
    await qzoneNav.click();

    // Check review display: Zone correcte, Target pin/circle, explanation
    await expect(page.getByText("Zone correcte !")).toBeVisible();
    await expect(page.locator(".animate-pulse")).toBeVisible();
    await expect(page.getByText("Bonne réponse.")).toBeVisible();
    await expect(
      page.getByText("la série D/L est déterminée par le carbone asymétrique le plus éloigné du carbonyle, ici C5."),
    ).toBeVisible();
  });

  test("Cycle complet avec réponse incorrecte et correction en revue", async ({ page }) => {
    const fixture = await getQZoneFixture();

    await page.addInitScript(() => window.localStorage.clear());
    await page.goto(
      `${appBaseUrl}/sante/ue/${fixture.courseUnitId}/chapitres/${chapterSlug}/qcm/${fixture.quizSlug}`,
    );

    await expect(page.getByTestId("quiz-question-counter")).toBeVisible();

    // Answer all questions with off-target for QZONE
    await answerAllQuizQuestions(page, fixture, { x: 0.15, y: 0.15 });

    // Go to summary then review
    const openSummaryButton = page.getByTestId("quiz-open-summary");
    await expect(openSummaryButton).toBeVisible();
    await openSummaryButton.click();

    const openReviewButton = page.getByTestId("quiz-open-review");
    await expect(openReviewButton).toBeVisible();
    await openReviewButton.click();

    // Navigate to QZONE in review mode
    const qzoneNav = page.getByTestId(`quiz-nav-question-${fixture.qzoneIndex + 1}`);
    await qzoneNav.click();

    // Check review display: Zone incorrecte, animated target zone, explanation
    await expect(page.getByText("Zone incorrecte.")).toBeVisible();
    await expect(page.locator(".animate-pulse")).toBeVisible();
    await expect(page.getByText("Correction.")).toBeVisible();
  });

  test("Comportement sur mobile (largeur 375px)", async ({ page }) => {
    const fixture = await getQZoneFixture();

    await page.setViewportSize({ width: 375, height: 667 });
    await page.addInitScript(() => window.localStorage.clear());
    await page.goto(
      `${appBaseUrl}/sante/ue/${fixture.courseUnitId}/chapitres/${chapterSlug}/qcm/${fixture.quizSlug}`,
    );

    await expect(page.getByTestId("quiz-question-counter")).toBeVisible();

    const questionButton = page.getByTestId(`quiz-nav-question-${fixture.qzoneIndex + 1}`);
    await questionButton.click();

    const surface = page.locator('[data-testid="hotspot-question-surface"]');
    await expect(surface).toBeVisible();
    await page.waitForFunction(() => {
      const img = document.querySelector(
        '[data-testid="hotspot-question-surface"] img',
      ) as HTMLImageElement | null;
      return img && img.complete && img.naturalHeight > 0 && img.clientHeight > 50;
    });

    const box = await surface.boundingBox();
    expect(box).not.toBeNull();
    if (!box) return;

    // Click on mobile
    await surface.click({
      position: {
        x: box.width * 0.5,
        y: box.height * 0.665,
      },
    });

    await expect(page.getByText(/Zone sélectionnée :/)).toBeVisible();
    const clearButton = page.locator('[data-testid="hotspot-clear-point"]');
    await expect(clearButton).toBeVisible();
  });
});
