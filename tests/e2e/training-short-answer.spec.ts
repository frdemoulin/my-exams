import { expect, test } from "@playwright/test";
import { loadProjectEnv } from "../../scripts/lib/load-env";

loadProjectEnv();

const prisma = require("../../src/lib/db/prisma").default;

const appBaseUrl =
  process.env.E2E_BASE_URL ?? `http://localhost:${process.env.E2E_PORT ?? "3000"}`;
const chapterSlug = "transformation-acide-base-et-ph";
const quizSlug = "calcul-direct-du-ph";

type PublishedQuiz = {
  id: string;
  slug: string;
  title: string;
  questionLinks: Array<{
    order: number;
    question: {
      order: number;
      questionType: string | null;
    };
  }>;
};

type PublishedSection = {
  quizzes: PublishedQuiz[];
};

async function getShortAnswerFixture() {
  const chapter = await prisma.chapter.findFirst({
    where: { slug: chapterSlug },
    select: {
      title: true,
      sections: {
        where: { isPublished: true },
        orderBy: [{ order: "asc" }],
        select: {
          quizzes: {
            where: { isPublished: true, slug: quizSlug },
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

  const quiz = chapter?.sections
    .flatMap((section: PublishedSection) => section.quizzes)
    .find((item: PublishedQuiz) => item.slug === quizSlug);

  if (!chapter || !quiz) {
    throw new Error(`Quiz QROC introuvable pour ${chapterSlug}/${quizSlug}.`);
  }

  const secondQuestion = quiz.questionLinks.find(
    (link: PublishedQuiz["questionLinks"][number]) => link.order === 2,
  );

  if (secondQuestion?.question.questionType !== "short-answer") {
    throw new Error("La deuxième question du quiz QROC doit être une réponse courte.");
  }

  return {
    chapterTitle: chapter.title,
    quizTitle: quiz.title,
    quizQuestionCount: quiz.questionLinks.length,
  };
}

test.describe("Entraînement - réponse courte", () => {
  test("un étudiant peut saisir une QROC, voir la correction puis le résumé", async ({
    page,
  }) => {
    const fixture = await getShortAnswerFixture();

    await page.addInitScript(() => window.localStorage.clear());
    await page.goto(
      `${appBaseUrl}/entrainement/sciences-physiques/${chapterSlug}?quiz=${quizSlug}`,
    );

    await expect(page.getByRole("heading", { name: fixture.chapterTitle })).toBeVisible();
    await expect(page.getByRole("heading", { name: fixture.quizTitle })).toBeVisible();
    await expect(page.getByTestId("quiz-taking")).toBeVisible();
    await expect(page.getByTestId("quiz-question-counter")).toContainText(
      `Question 1 / ${fixture.quizQuestionCount}`,
    );

    await page.getByTestId("quiz-choice-0").click();
    await page.getByTestId("quiz-next").click();

    await expect(page.getByTestId("quiz-question-counter")).toContainText(
      `Question 2 / ${fixture.quizQuestionCount}`,
    );
    await expect(page.getByTestId("quiz-short-answer-input")).toBeVisible();
    await expect(page.getByTestId("quiz-submit-short-answer")).toBeDisabled();

    await page.getByTestId("quiz-short-answer-input").fill("3");
    await page.getByTestId("quiz-submit-short-answer").click();

    await expect(page.getByText("Bonne réponse.", { exact: true })).toBeVisible();
    await expect(page.getByText("Réponse acceptée", { exact: true })).toBeVisible();

    await page.getByTestId("quiz-open-summary").click();
    await expect(page.getByTestId("quiz-summary")).toBeVisible();
    await expect(page.getByText("Bilan du quiz", { exact: true })).toBeVisible();

    await page.getByTestId("quiz-open-review").click();
    await page.getByTestId("quiz-nav-question-2").click();

    await expect(page.getByTestId("quiz-review")).toBeVisible();
    await expect(page.getByTestId("quiz-question-counter")).toContainText(
      `Correction · Question 2 / ${fixture.quizQuestionCount}`,
    );
    await expect(page.getByText("Ta réponse", { exact: true })).toBeVisible();
    await expect(page.getByText("Réponse attendue", { exact: true })).toBeVisible();
    await expect(page.getByText("3", { exact: true }).first()).toBeVisible();
  });
});
