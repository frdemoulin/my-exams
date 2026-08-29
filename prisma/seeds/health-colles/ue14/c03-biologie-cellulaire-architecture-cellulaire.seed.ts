import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C03_QUESTIONS } from "../authoring/health-colle-ue14-c03-biologie-cellulaire-architecture-cellulaire.author.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";
import { UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID } from "./health-colle-ue14-theme-mapping.final";

const normalize = (value: string | null | undefined) =>
  (value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export async function seedHealthColleUE14C03(prisma: PrismaClient) {
  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: { OR: [{ slug: "ue14" }, { slug: { startsWith: "ue14" } }], isActive: true },
    include: { teachingElements: true },
  });
  if (!courseUnit) throw new Error("Impossible de trouver l'UE14 pour C03.");

  const bioCellElement = courseUnit.teachingElements.find((te) => {
    const hay = [te.slug, te.code, te.title].map(normalize).join(" ");
    return hay.includes("biologie cellulaire") || hay.includes("biologie-cellulaire");
  });
  if (!bioCellElement) throw new Error("Élément pédagogique BIOLOGIE_CELLULAIRE introuvable pour C03.");

  const existingColle = await prisma.healthMockExam.findFirst({
    where: { courseUnitId: courseUnit.id, slug: "c03" },
  });

  if (existingColle) {
    const attemptCount = await prisma.userHealthMockExamAttempt.count({
      where: { mockExamId: existingColle.id },
    });
    if (attemptCount === 0) {
      await prisma.healthMockExam.delete({ where: { id: existingColle.id } });
    } else {
      console.warn(`[SEED C03] ${attemptCount} tentative(s) conservée(s). Mise à jour du contenu.`);
      await prisma.healthMockExamSection.deleteMany({
        where: { mockExamId: existingColle.id },
      });
    }
  }

  const compiledQuestions = UE14_COLLE_C03_QUESTIONS.map((q) =>
    compileHealthTrainingAuthorQuestion(q)
  );

  // Groupes de questions C03
  const groupsData = [
    {
      key: "group-epithelial-study",
      order: 1,
      title: "Données communes — Étude de cellules épithéliales",
      sharedStatement:
        "Un laboratoire étudie des cellules épithéliales obtenues après dissociation d’un tissu. Les cellules sont mises en culture afin de suivre la localisation d’une protéine X et d’évaluer le maintien de leur polarité apico-basolatérale.",
      sharedMedia: null,
      questionOrders: [1, 2, 3],
    },
    {
      key: "group-polarized-enterocyte",
      order: 2,
      title: "Données communes — Entérocyte polarisé",
      sharedStatement:
        "Le schéma représente un entérocyte différencié. Son pôle apical est orienté vers la lumière intestinale et porte des microvillosités ; son pôle basolatéral est orienté vers l’interstitium. La même cellule servira de support aux trois questions suivantes.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c03/enterocyte-linked-q17-q19.svg",
        alt: "Schéma d’un entérocyte polarisé avec microvillosités apicales, membranes apicale et basolatérale, jonction apico-latérale et agrandissement d’une microvillosité.",
      },
      questionOrders: [17, 18, 19],
    },
  ];

  // Création de l'examen s'il n'existe plus ou mise à jour
  const mockExam =
    existingColle &&
    (await prisma.userHealthMockExamAttempt.count({ where: { mockExamId: existingColle.id } })) > 0
      ? existingColle
      : await prisma.healthMockExam.create({
          data: {
            courseUnitId: courseUnit.id,
            type: "COLLE",
            title: "Biologie cellulaire — Architecture cellulaire",
            slug: "c03",
            description: "Biologie cellulaire · Ch. 1 à 3",
            instructions: "Colle UE14 Reims — 20 questions — 30 min — Notation UNESS",
            durationMinutes: 30,
            durationSeconds: 1800,
            questionCount: 20,
            version: 1,
            order: 3,
            isPublished: true,
          },
        });

  // Création de la section
  const section = await prisma.healthMockExamSection.create({
    data: {
      mockExamId: mockExam.id,
      teachingElementId: bioCellElement.id,
      title: "Biologie cellulaire — Architecture cellulaire",
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
    const stableId = `c03-q${String(questionOrder).padStart(2, "0")}`;
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
