"use strict";

import { inferTrainingQuizStageFromOrder } from "../src/core/training/training-stage";
import { thermalTransfersTrainingChapter } from "../prisma/seeds/data/thermal-transfers-training-chapter";
import { loadProjectEnv } from "./lib/load-env";

loadProjectEnv();

const { PrismaClient } = require("@prisma/client") as typeof import("@prisma/client");
const prisma = new PrismaClient();

const chapterSlug = thermalTransfersTrainingChapter.slug;
const questionSeeds = thermalTransfersTrainingChapter.questions;
const sections = thermalTransfersTrainingChapter.sections ?? [];

function normalizeSeedQuizItems(
  quiz: (typeof sections)[number]["quizzes"][number]
) {
  if (quiz.items?.length) {
    return quiz.items.map((item, index) => ({
      ...item,
      order: index + 1,
    }));
  }

  let itemOrder = 1;

  return [
    ...(quiz.questionOrders ?? []).map((questionOrder) => ({
      type: "QUESTION" as const,
      questionOrder,
      order: itemOrder++,
    })),
    ...[...(quiz.questionGroups ?? [])]
      .sort((left, right) => left.order - right.order)
      .map((group) => ({
        type: "GROUP" as const,
        title: group.title,
        sharedStatement: group.sharedStatement,
        questionOrders: group.questionOrders,
        order: itemOrder++,
      })),
  ];
}

async function main() {
  if (sections.length === 0) {
    throw new Error(`Aucune section définie pour ${chapterSlug}`);
  }

  const chapter = await prisma.chapter.findFirst({
    where: { slug: chapterSlug },
    select: { id: true, title: true },
  });

  if (!chapter) {
    throw new Error(`Chapitre introuvable: ${chapterSlug}`);
  }

  await prisma.$transaction(async (transaction) => {
    const existingQuizzes = await transaction.trainingQuiz.findMany({
      where: { chapterId: chapter.id },
      select: { id: true },
    });

    const quizIds = existingQuizzes.map((quiz) => quiz.id);

    if (quizIds.length > 0) {
      await transaction.trainingQuizQuestion.deleteMany({
        where: {
          quizId: { in: quizIds },
        },
      });
    }

    await transaction.trainingQuiz.deleteMany({
      where: { chapterId: chapter.id },
    });

    await transaction.chapterSection.deleteMany({
      where: { chapterId: chapter.id },
    });

    const expectedQuestionOrders = questionSeeds.map((question) => question.order);

    await transaction.quizQuestion.deleteMany({
      where: {
        chapterId: chapter.id,
        order: { notIn: expectedQuestionOrders },
      },
    });

    for (const questionSeed of questionSeeds) {
      const existingQuestion = await transaction.quizQuestion.findUnique({
        where: {
          chapterId_order: {
            chapterId: chapter.id,
            order: questionSeed.order,
          },
        },
        select: {
          id: true,
        },
      });

      if (existingQuestion) {
        await transaction.quizQuestion.update({
          where: { id: existingQuestion.id },
          data: {
            difficulty: questionSeed.difficulty,
            question: questionSeed.question,
            choices: questionSeed.choices,
            correctChoiceIndex: questionSeed.correctChoiceIndex,
            explanation: questionSeed.explanation,
            isPublished: true,
          },
        });
      } else {
        await transaction.quizQuestion.create({
          data: {
            chapterId: chapter.id,
            difficulty: questionSeed.difficulty,
            question: questionSeed.question,
            choices: questionSeed.choices,
            correctChoiceIndex: questionSeed.correctChoiceIndex,
            explanation: questionSeed.explanation,
            order: questionSeed.order,
            isPublished: true,
          },
        });
      }
    }

    const questions = await transaction.quizQuestion.findMany({
      where: { chapterId: chapter.id },
      select: { id: true, order: true },
      orderBy: { order: "asc" },
    });

    const questionIdByOrder = new Map(
      questions.map((question) => [question.order, question.id])
    );

    for (const sectionSeed of sections) {
      const section = await transaction.chapterSection.create({
        data: {
          chapterId: chapter.id,
          title: sectionSeed.title,
          description: sectionSeed.description,
          order: sectionSeed.order,
          kind: sectionSeed.kind ?? "THEME",
          isPublished: true,
          themeIds: [],
        },
        select: { id: true },
      });

      for (const quizSeed of sectionSeed.quizzes) {
        const quizStage = quizSeed.stage ?? inferTrainingQuizStageFromOrder(quizSeed.order);
        const quiz = await transaction.trainingQuiz.create({
          data: {
            chapterId: chapter.id,
            sectionId: section.id,
            slug: quizSeed.slug,
            title: quizSeed.title,
            description: quizSeed.description,
            order: quizSeed.order,
            stage: quizStage,
            isPublished: quizSeed.isPublished ?? true,
          },
          select: { id: true },
        });

        const normalizedQuizItems = normalizeSeedQuizItems(quizSeed);

        let quizQuestionOrder = 1;

        for (const item of normalizedQuizItems) {
          if (item.type === "QUESTION") {
            const questionId = questionIdByOrder.get(item.questionOrder);

            if (!questionId) {
              throw new Error(
                `Question introuvable pour ${chapterSlug} (ordre ${item.questionOrder})`
              );
            }

            await transaction.trainingQuizQuestion.create({
              data: {
                quizId: quiz.id,
                questionId,
                order: quizQuestionOrder,
              },
            });

            quizQuestionOrder += 1;
            continue;
          }

          const questionGroup = await transaction.trainingQuizQuestionGroup.create({
            data: {
              quizId: quiz.id,
              title: item.title?.trim() || null,
              sharedStatement: item.sharedStatement,
              order: item.order,
            },
            select: { id: true },
          });

          for (const questionOrder of item.questionOrders) {
            const questionId = questionIdByOrder.get(questionOrder);

            if (!questionId) {
              throw new Error(
                `Question introuvable pour ${chapterSlug} (ordre ${questionOrder})`
              );
            }

            await transaction.trainingQuizQuestion.create({
              data: {
                quizId: quiz.id,
                groupId: questionGroup.id,
                questionId,
                order: quizQuestionOrder,
              },
            });

            quizQuestionOrder += 1;
          }
        }
      }
    }
  }, {
    maxWait: 20_000,
    timeout: 30_000,
  });

  console.log(
    `Structure régénérée pour ${chapter.title}: ${questionSeeds.length} questions, ${sections.length} sections et ${sections.reduce(
      (sum, section) => sum + section.quizzes.length,
      0
    )} QCM.`
  );
}

main()
  .catch((error) => {
    console.error(
      "Erreur durant la régénération de la structure d'entraînement des transferts thermiques :",
      error
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });