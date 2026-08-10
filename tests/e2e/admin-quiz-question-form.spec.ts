import { expect, test, type Page } from "@playwright/test";

import prisma from "../../src/lib/db/prisma";

const authFile = process.env.E2E_AUTH_STATE ?? "playwright/.auth/admin.json";

test.use({ storageState: authFile });

const createdChapterIds: string[] = [];
const createdSubjectIds: string[] = [];

async function selectByLabel(page: Page, label: string, option: string) {
  await page.getByLabel(label, { exact: true }).click();
  await page.getByRole("option", { name: option, exact: true }).click();
}

function readAcceptedAnswers(answerPayload: unknown) {
  if (
    !answerPayload ||
    typeof answerPayload !== "object" ||
    Array.isArray(answerPayload)
  ) {
    return [];
  }

  const acceptedAnswers = (answerPayload as { acceptedAnswers?: unknown }).acceptedAnswers;
  if (!Array.isArray(acceptedAnswers)) {
    return [];
  }

  return acceptedAnswers
    .map((entry) =>
      entry && typeof entry === "object" && "value" in entry
        ? String((entry as { value?: unknown }).value ?? "")
        : "",
    )
    .filter(Boolean);
}

async function createQuestionFormFixture() {
  const suffix = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const subject = await prisma.subject.create({
    data: {
      longDescription: `Matiere E2E QROC ${suffix}`,
      shortDescription: `E2E-QROC-${suffix}`,
    },
    select: {
      id: true,
    },
  });
  const chapter = await prisma.chapter.create({
    data: {
      title: `Chapitre E2E QROC ${suffix}`,
      slug: `chapitre-e2e-qroc-${suffix}`,
      level: "terminale",
      order: 1,
      isActive: true,
      isPublished: false,
      subjectId: subject.id,
    },
    select: {
      id: true,
      title: true,
    },
  });

  createdSubjectIds.push(subject.id);
  createdChapterIds.push(chapter.id);

  return {
    chapter,
  };
}

test.afterEach(async () => {
  if (createdChapterIds.length > 0) {
    await prisma.quizQuestion.deleteMany({
      where: {
        chapterId: {
          in: createdChapterIds,
        },
      },
    });
    await prisma.chapter.deleteMany({
      where: {
        id: {
          in: createdChapterIds,
        },
      },
    });
    createdChapterIds.length = 0;
  }

  if (createdSubjectIds.length > 0) {
    await prisma.subject.deleteMany({
      where: {
        id: {
          in: createdSubjectIds,
        },
      },
    });
    createdSubjectIds.length = 0;
  }
});

test.describe("Admin - formulaire question d'entraînement", () => {
  test("filtre la liste par format UNESS", async ({ page }) => {
    const { chapter } = await createQuestionFormFixture();
    const suffix = Date.now();
    const qruQuestion = `Question filtre QRU E2E ${suffix}`;
    const qrocQuestion = `Question filtre QROC E2E ${suffix}`;

    await prisma.quizQuestion.createMany({
      data: [
        {
          chapterId: chapter.id,
          difficulty: "EASY",
          questionType: "QRU",
          answerFormat: "SINGLE",
          question: qruQuestion,
          choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
          correctChoiceIndexes: [0],
          correctChoiceIndex: 0,
          answerPayload: null,
          explanation: "Correction QRU",
          choiceExplanations: ["", "", "", ""],
          order: 1,
          isPublished: true,
        },
        {
          chapterId: chapter.id,
          difficulty: "EASY",
          questionType: "QROC",
          answerFormat: "SINGLE",
          question: qrocQuestion,
          choices: [],
          correctChoiceIndexes: [],
          correctChoiceIndex: 0,
          answerPayload: {
            answerType: "text",
            acceptedAnswers: [{ value: "mitochondrie" }],
          },
          explanation: "Correction QROC",
          choiceExplanations: [],
          order: 2,
          isPublished: true,
        },
      ],
    });

    await page.goto(`/admin/training/quiz-questions?chapterId=${chapter.id}`);

    await expect(page.getByText(qruQuestion)).toBeVisible();
    await expect(page.getByText(qrocQuestion)).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "SÉRIE" })).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "FORMAT UNESS" })).toBeVisible();

    await selectByLabel(
      page,
      "Filtrer par format UNESS",
      "QROC — Question ouverte courte",
    );

    await expect(page.getByText(qrocQuestion)).toBeVisible();
    await expect(page.getByText(qruQuestion)).toHaveCount(0);
  });

  test("création et édition d'une QROC textuelle avec persistance UNESS", async ({
    page,
  }) => {
    const { chapter } = await createQuestionFormFixture();
    const questionText = `Question QROC E2E ${Date.now()}`;

    await page.goto(`/admin/training/quiz-questions/add?chapterId=${chapter.id}`);

    await expect(
      page.getByRole("heading", { name: "Ajouter une question d'entraînement" }),
    ).toBeVisible();
    await expect(page.getByLabel("Chapitre", { exact: true })).toContainText(
      chapter.title,
    );

    await selectByLabel(
      page,
      "Format UNESS",
      "QROC — Question ouverte courte",
    );
    await expect(page.getByText("Réponse attendue QROC", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Réponses acceptées", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Choix A", { exact: true })).toHaveCount(0);

    await page.getByLabel("Question", { exact: true }).fill(questionText);
    await page
      .getByLabel("Réponses acceptées", { exact: true })
      .fill("mitochondrie\nla mitochondrie");
    await page
      .getByLabel("Correction globale", { exact: true })
      .fill("La mitochondrie est l'organite attendu.");

    await page.getByRole("button", { name: "Enregistrer" }).click();
    await expect(page).toHaveURL(/\/admin\/training\/quiz-questions$/, { timeout: 15000 });

    await expect
      .poll(async () => {
        const question = await prisma.quizQuestion.findFirst({
          where: {
            chapterId: chapter.id,
            question: questionText,
          },
          select: {
            questionType: true,
            answerFormat: true,
            choices: true,
            correctChoiceIndexes: true,
            answerPayload: true,
          },
        });

        return {
          questionType: question?.questionType ?? null,
          answerFormat: question?.answerFormat ?? null,
          choices: question?.choices ?? null,
          correctChoiceIndexes: question?.correctChoiceIndexes ?? null,
          acceptedAnswers: readAcceptedAnswers(question?.answerPayload),
        };
      })
      .toEqual({
        questionType: "QROC",
        answerFormat: "SINGLE",
        choices: [],
        correctChoiceIndexes: [],
        acceptedAnswers: ["mitochondrie", "la mitochondrie"],
      });

    const savedQuestion = await prisma.quizQuestion.findFirstOrThrow({
      where: {
        chapterId: chapter.id,
        question: questionText,
      },
      select: {
        id: true,
      },
    });

    await page.goto(`/admin/training/quiz-questions/${savedQuestion.id}/edit`);

    await expect(
      page.getByRole("heading", { name: "Éditer une question d'entraînement" }),
    ).toBeVisible();
    await expect(page.getByLabel("Format UNESS", { exact: true })).toContainText(
      "QROC — Question ouverte courte",
    );
    await expect(page.getByLabel("Question", { exact: true })).toHaveValue(questionText);
    await expect(page.getByLabel("Réponses acceptées", { exact: true })).toHaveValue(
      "mitochondrie\nla mitochondrie",
    );

    await page
      .getByLabel("Réponses acceptées", { exact: true })
      .fill("mitochondrie\norganite énergétique");
    await page.getByRole("button", { name: "Éditer" }).click();
    await expect(page).toHaveURL(/\/admin\/training\/quiz-questions$/, { timeout: 15000 });

    await expect
      .poll(async () => {
        const question = await prisma.quizQuestion.findUnique({
          where: {
            id: savedQuestion.id,
          },
          select: {
            questionType: true,
            answerPayload: true,
          },
        });

        return {
          questionType: question?.questionType ?? null,
          acceptedAnswers: readAcceptedAnswers(question?.answerPayload),
        };
      })
      .toEqual({
        questionType: "QROC",
        acceptedAnswers: ["mitochondrie", "organite énergétique"],
      });
  });
});
