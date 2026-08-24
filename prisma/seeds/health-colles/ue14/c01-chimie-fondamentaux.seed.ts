import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C01_CHIMIE_FONDAMENTAUX_QUESTIONS } from "../authoring/health-colle-ue14-c01-chimie-fondamentaux.author.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";

export async function seedHealthColleUE14C01(prisma: PrismaClient) {
  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: {
      OR: [
        { slug: "ue14" },
        { slug: { startsWith: "ue14" } },
      ],
      isActive: true,
    },
    include: {
      teachingElements: true,
    },
  });

  if (!courseUnit) {
    throw new Error("Impossible de trouver l'UE14 pour le seeding de la colle C01.");
  }

  const chemistryElement = courseUnit.teachingElements.find(
    (te) => te.slug.includes("chimie") || te.code?.includes("CHIMIE")
  ) ?? courseUnit.teachingElements[0];

  if (!chemistryElement) {
    throw new Error("Impossible de trouver l'élément pédagogique Chimie pour l'UE14.");
  }

  const existingColle = await prisma.healthMockExam.findFirst({
    where: {
      courseUnitId: courseUnit.id,
      slug: "c01",
    },
  });

  if (existingColle) {
    await prisma.healthMockExam.delete({
      where: { id: existingColle.id },
    });
  }

  const compiledQuestions = UE14_COLLE_C01_CHIMIE_FONDAMENTAUX_QUESTIONS.map((q) =>
    compileHealthTrainingAuthorQuestion(q)
  );

  const mockExam = await prisma.healthMockExam.create({
    data: {
      courseUnitId: courseUnit.id,
      type: "COLLE",
      title: "Chimie — Fondamentaux",
      slug: "c01",
      description: "Chimie générale · Ch. 1 à 4",
      instructions: "Colle UE14 Reims — 20 questions — 30 min — Notation UNESS",
      durationMinutes: 30,
      questionCount: 20,
      version: 1,
      order: 1,
      isPublished: true,
      sections: {
        create: [
          {
            teachingElementId: chemistryElement.id,
            title: "Chimie — Fondamentaux",
            order: 1,
            questionCount: 20,
            firstQuestion: 1,
            lastQuestion: 20,
            questions: {
              create: compiledQuestions.map((q, index) => ({
                slug: `c01-q${String(index + 1).padStart(2, "0")}`,
                difficulty: (q.difficulty as "EASY" | "MEDIUM" | "HARD") ?? "MEDIUM",
                questionType: q.questionType ?? "mcq",
                question: q.question,
                questionDiagram: (q.questionDiagram as any) ?? undefined,
                choices: (q.choices as any) ?? [],
                answerFormat: q.answerFormat ?? "SINGLE",
                correctChoiceIndexes: q.correctChoiceIndexes ?? [],
                correctChoiceIndex: q.correctChoiceIndexes?.[0] ?? 0,
                answerPayload: (q.answerPayload as any) ?? undefined,
                explanation: q.explanation ?? "",
                choiceExplanations: (q.choiceExplanations as any) ?? [],
                order: index + 1,
                globalOrder: index + 1,
                isPublished: true,
              })),
            },
          },
        ],
      },
    },
  });

  return mockExam;
}
