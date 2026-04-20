"use strict";

import { loadProjectEnv } from "./lib/load-env";

loadProjectEnv();

const { PrismaClient } = require("@prisma/client") as typeof import("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const quizTitleUpdates = [
    {
      from: "Quiz de synthèse",
      to: "QCM de synthèse",
    },
  ];

  const sectionTitleUpdates = [
    {
      from: "Quiz du chapitre",
      to: "QCM du chapitre",
    },
  ];

  let updatedQuizCount = 0;
  let updatedSectionCount = 0;

  for (const update of quizTitleUpdates) {
    const result = await prisma.trainingQuiz.updateMany({
      where: { title: update.from },
      data: { title: update.to },
    });

    updatedQuizCount += result.count;
    console.log(`TrainingQuiz: ${update.from} -> ${update.to} (${result.count})`);
  }

  for (const update of sectionTitleUpdates) {
    const result = await prisma.chapterSection.updateMany({
      where: { title: update.from },
      data: { title: update.to },
    });

    updatedSectionCount += result.count;
    console.log(`ChapterSection: ${update.from} -> ${update.to} (${result.count})`);
  }

  console.log(
    `Remédiation terminée: ${updatedQuizCount} QCM et ${updatedSectionCount} sections mis à jour.`
  );
}

main()
  .catch((error) => {
    console.error("Erreur durant la remédiation des libellés QCM :", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });