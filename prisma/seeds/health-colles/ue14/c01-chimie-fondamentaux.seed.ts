import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C01_CHIMIE_FONDAMENTAUX_QUESTIONS } from "../authoring/health-colle-ue14-c01-chimie-fondamentaux.author.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";
import { UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID } from "./health-colle-ue14-theme-mapping.final";

export async function seedHealthColleUE14C01(prisma: PrismaClient, programVersionSlug = "las-sps-2026-2027") {
  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: {
      programVersion: {
        slug: programVersionSlug,
        institution: { uaiCode: "0511296G" },
      },
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
    throw new Error(`Impossible de trouver l'UE14 pour le seeding de la colle C01 (${programVersionSlug}).`);
  }

  const chemistryElement = courseUnit.teachingElements.find(
    (te) => te.slug.includes("chimie") || te.code?.includes("CHIMIE")
  ) ?? courseUnit.teachingElements[0];

  if (!chemistryElement) {
    throw new Error("Impossible de trouver l'élément pédagogique Chimie pour l'UE14.");
  }

  const compiledQuestions = UE14_COLLE_C01_CHIMIE_FONDAMENTAUX_QUESTIONS.map((q) =>
    compileHealthTrainingAuthorQuestion(q)
  );

  // Groupes de questions C01
  const groupsData = [
    {
      key: "group-chlorine-isotopes",
      order: 1,
      title: "Données communes — Isotopes du chlore",
      sharedStatement: "On considère les deux atomes neutres de chlore $\\ce{^{35}_{17}Cl}$ et $\\ce{^{37}_{17}Cl}$.",
      sharedMedia: null,
      questionOrders: [1, 2],
    },
    {
      key: "group-periodic-table",
      order: 2,
      title: "Données communes — Classification périodique",
      sharedStatement:
        "La classification périodique simplifiée ci-dessous représente les quatre premières périodes. Certaines cases sont volontairement laissées vides ; les symboles présents servent de repères.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c01/periodic-table-linked-q17-q19.svg",
        alt: "Classification périodique simplifiée des quatre premières périodes avec plusieurs éléments repères et certaines cases laissées vides.",
      },
      questionOrders: [17, 18, 19],
    },
  ];

  const existingColle = await prisma.healthMockExam.findFirst({
    where: {
      courseUnitId: courseUnit.id,
      slug: "c01",
    },
  });

  if (existingColle) {
    const attemptCount = await prisma.userHealthMockExamAttempt.count({
      where: { mockExamId: existingColle.id },
    });

    if (attemptCount === 0) {
      // Pas de tentative utilisateur : suppression propre et re-création intégrale
      await prisma.healthMockExam.delete({
        where: { id: existingColle.id },
      });
    } else {
      // Preserver les tentatives utilisateur existantes — mise à jour en place des questions et groupes !
      console.log(
        `[SEED C01] ${attemptCount} tentative(s) utilisateur conservée(s). Mise à jour du contenu des questions en place.`
      );

      let section = await prisma.healthMockExamSection.findFirst({
        where: { mockExamId: existingColle.id },
      });
      if (!section) {
        section = await prisma.healthMockExamSection.create({
          data: {
            mockExamId: existingColle.id,
            teachingElementId: chemistryElement.id,
            title: "Chimie — Fondamentaux",
            order: 1,
            questionCount: 20,
            firstQuestion: 1,
            lastQuestion: 20,
          },
        });
      }

      // Mettre à jour les groupes
      for (const groupSeed of groupsData) {
        const existingGroup = await prisma.healthMockExamQuestionGroup.findFirst({
          where: { examSectionId: section.id, order: groupSeed.order },
        });
        if (existingGroup) {
          await prisma.healthMockExamQuestionGroup.update({
            where: { id: existingGroup.id },
            data: {
              title: groupSeed.title,
              sharedStatement: groupSeed.sharedStatement,
              sharedMedia: groupSeed.sharedMedia as any,
            },
          });
        } else {
          await prisma.healthMockExamQuestionGroup.create({
            data: {
              examSectionId: section.id,
              title: groupSeed.title,
              sharedStatement: groupSeed.sharedStatement,
              sharedMedia: groupSeed.sharedMedia as any,
              order: groupSeed.order,
            },
          });
        }
      }

      // Mettre à jour les 20 questions en place
      const groupMap = new Map<number, string>();
      const currentGroups = await prisma.healthMockExamQuestionGroup.findMany({
        where: { examSectionId: section.id },
      });
      for (const g of currentGroups) {
        const gSeed = groupsData.find((gs) => gs.order === g.order);
        if (gSeed) {
          for (const qOrder of gSeed.questionOrders) {
            groupMap.set(qOrder, g.id);
          }
        }
      }

      for (let index = 0; index < compiledQuestions.length; index++) {
        const q = compiledQuestions[index];
        const questionOrder = index + 1;
        const stableId = `c01-q${String(questionOrder).padStart(2, "0")}`;
        const groupId = groupMap.get(questionOrder) ?? null;
        const themeIds = [
          ...((UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID as Record<string, readonly string[]>)[stableId] ?? []),
        ];

        const existingQuestion = await prisma.healthMockExamQuestion.findFirst({
          where: { examSectionId: section.id, slug: stableId },
        });

        if (existingQuestion) {
          await prisma.healthMockExamQuestion.update({
            where: { id: existingQuestion.id },
            data: {
              groupId,
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
              isPublished: true,
              themeIds,
            },
          });
        } else {
          await prisma.healthMockExamQuestion.create({
            data: {
              examSectionId: section.id,
              groupId,
              slug: stableId,
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
              order: questionOrder,
              globalOrder: questionOrder,
              isPublished: true,
              themeIds,
            },
          });
        }
      }

      return existingColle;
    }
  }

  // Création initiale si n'existait pas du tout
  const mockExam = await prisma.healthMockExam.create({
    data: {
      courseUnitId: courseUnit.id,
      type: "COLLE",
      title: "Chimie — Fondamentaux",
      slug: "c01",
      description: "Chimie générale · Ch. 1 à 4",
      instructions: "Colle UE14 Reims — 20 questions — 30 min — Notation UNESS",
      durationMinutes: 30,
      durationSeconds: 1800,
      questionCount: 20,
      version: 1,
      order: 1,
      isPublished: true,
    },
  });

  const section = await prisma.healthMockExamSection.create({
    data: {
      mockExamId: mockExam.id,
      teachingElementId: chemistryElement.id,
      title: "Chimie — Fondamentaux",
      order: 1,
      questionCount: 20,
      firstQuestion: 1,
      lastQuestion: 20,
    },
  });

  const groupIdsByOrder = new Map<number, string>();
  for (const groupSeed of groupsData) {
    const group = await prisma.healthMockExamQuestionGroup.create({
      data: {
        examSectionId: section.id,
        title: groupSeed.title,
        sharedStatement: groupSeed.sharedStatement,
        sharedMedia: groupSeed.sharedMedia as any,
        order: groupSeed.order,
      },
    });
    for (const qOrder of groupSeed.questionOrders) {
      groupIdsByOrder.set(qOrder, group.id);
    }
  }

  for (let index = 0; index < compiledQuestions.length; index++) {
    const q = compiledQuestions[index];
    const questionOrder = index + 1;
    const stableId = `c01-q${String(questionOrder).padStart(2, "0")}`;
    const groupId = groupIdsByOrder.get(questionOrder) ?? null;
    const themeIds = [
      ...((UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID as Record<string, readonly string[]>)[stableId] ?? []),
    ];

    await prisma.healthMockExamQuestion.create({
      data: {
        examSectionId: section.id,
        groupId,
        slug: stableId,
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
        order: questionOrder,
        globalOrder: questionOrder,
        isPublished: true,
        themeIds,
      },
    });
  }

  return mockExam;
}
