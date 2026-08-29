import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C01_CHIMIE_FONDAMENTAUX_QUESTIONS } from "../authoring/health-colle-ue14-c01-chimie-fondamentaux.author.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";
import { UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID } from "./health-colle-ue14-theme-mapping.final";

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
    const attemptCount = await prisma.userHealthMockExamAttempt.count({
      where: { mockExamId: existingColle.id },
    });

    if (attemptCount === 0) {
      // Pas de tentative utilisateur : suppression propre et re-création intégrale
      await prisma.healthMockExam.delete({
        where: { id: existingColle.id },
      });
    } else {
      // Preserver les tentatives utilisateur existantes — ne jamais exécuter deleteMany silencieux !
      console.warn(
        `[SEED C01] ${attemptCount} tentative(s) utilisateur conservée(s). Mise à jour du contenu.`
      );
      // Supprimer les sections existantes pour mettre à jour la colle sans purger les attempts
      await prisma.healthMockExamSection.deleteMany({
        where: { mockExamId: existingColle.id },
      });
    }
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

  // Création de l'examen s'il n'existe plus ou mise à jour
  const mockExam = existingColle && (await prisma.userHealthMockExamAttempt.count({ where: { mockExamId: existingColle.id } })) > 0
    ? existingColle
    : await prisma.healthMockExam.create({
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

  // Création de la section
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

  // Création des groupes
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

  // Création des questions avec groupe et themeIds
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
