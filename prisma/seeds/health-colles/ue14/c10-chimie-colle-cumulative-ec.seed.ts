import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C10_QUESTIONS } from "../authoring/health-colle-ue14-c10-chimie-colle-cumulative-ec.author.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";
import { UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID } from "./health-colle-ue14-theme-mapping.final";

const normalize = (value: string | null | undefined) =>
  (value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export async function seedHealthColleUE14C10(prisma: PrismaClient) {
  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: { OR: [{ slug: "ue14" }, { slug: { startsWith: "ue14" } }], isActive: true },
    include: { teachingElements: true },
  });
  if (!courseUnit) throw new Error("Impossible de trouver l'UE14 pour C10.");

  const chimieElement = courseUnit.teachingElements.find((te) => {
    const hay = [te.slug, te.code, te.title].map(normalize).join(" ");
    return hay.includes("chimie");
  });
  if (!chimieElement) throw new Error("Élément pédagogique CHIMIE introuvable pour C10.");

  const existingColle = await prisma.healthMockExam.findFirst({
    where: { courseUnitId: courseUnit.id, slug: "c10" },
  });

  if (existingColle) {
    const attemptCount = await prisma.userHealthMockExamAttempt.count({
      where: { mockExamId: existingColle.id },
    });
    if (attemptCount === 0) {
      await prisma.healthMockExam.delete({ where: { id: existingColle.id } });
    } else {
      console.warn(`[SEED C10] ${attemptCount} tentative(s) conservée(s). Mise à jour du contenu.`);
      await prisma.healthMockExamSection.deleteMany({
        where: { mockExamId: existingColle.id },
      });
    }
  }

  const compiledQuestions = UE14_COLLE_C10_QUESTIONS.map((q) =>
    compileHealthTrainingAuthorQuestion(q)
  );

  // Groupes de questions C10
  const groupsData = [
    {
      key: "group-alkene-stereochemistry",
      order: 1,
      title: "Données communes — Alcènes et stéréochimie",
      sharedStatement:
        "On compare deux représentations A et B du but-2-ène. Elles possèdent la même formule brute et la même connectivité atomique, mais diffèrent par la disposition spatiale des substituants autour de la double liaison. Le même support sert aux quatre questions suivantes.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c10/alkene-stereochemistry-linked-q10-q13.svg",
        alt: "Deux représentations géométriques A et B du but-2-ène montrant des dispositions différentes des groupes méthyle autour de la double liaison.",
      },
      questionOrders: [10, 11, 12, 13],
    },
    {
      key: "group-integrated-reactivity",
      order: 2,
      title: "Données communes — Réactivité et stéréochimie intégrées",
      sharedStatement:
        "Le schéma rassemble plusieurs situations de synthèse et de structure. Les composés A, B et C appartiennent à une même séquence d’oxydation ; la cétone D réagit avec CH3MgBr puis est hydrolysée pour donner le produit E ; la molécule F est un composé polyfonctionnel possédant un unique centre stéréogène.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c10/integrated-reactivity-linked-q27-q30.svg",
        alt: "Schéma de transformations reliant propan-1-ol, propanal et acide propanoïque, addition d’un organomagnésien sur la propanone, et structure d’une molécule polyfonctionnelle chirale F.",
      },
      questionOrders: [27, 28, 29, 30],
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
            title: "Chimie — Colle cumulative EC",
            slug: "c10",
            description: "Toute la Chimie · cumulative",
            instructions: "Colle UE14 Reims — 30 questions — 45 min — Notation UNESS",
            durationMinutes: 45,
            durationSeconds: 2700,
            questionCount: 30,
            version: 1,
            order: 10,
            isPublished: true,
          },
        });

  // Création de la section
  const section = await prisma.healthMockExamSection.create({
    data: {
      mockExamId: mockExam.id,
      teachingElementId: chimieElement.id,
      title: "Chimie — Colle cumulative EC",
      order: 1,
      questionCount: 30,
      firstQuestion: 1,
      lastQuestion: 30,
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
    const stableId = `c10-q${String(questionOrder).padStart(2, "0")}`;
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
