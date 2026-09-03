import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C07_QUESTIONS } from "../authoring/health-colle-ue14-c07-chimie-fonctions-et-reactivite.author.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";
import { UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID } from "./health-colle-ue14-theme-mapping.final";

const normalize = (value: string | null | undefined) =>
  (value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export async function seedHealthColleUE14C07(prisma: PrismaClient) {
  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: { OR: [{ slug: "ue14" }, { slug: { startsWith: "ue14" } }], isActive: true },
    include: { teachingElements: true },
  });
  if (!courseUnit) throw new Error("Impossible de trouver l'UE14 pour C07.");

  const chemistryElement = courseUnit.teachingElements.find((te) => {
    const hay = [te.slug, te.code, te.title].map(normalize).join(" ");
    return hay.includes("chimie");
  });
  if (!chemistryElement) throw new Error("Élément pédagogique CHIMIE introuvable pour C07.");

  const existingColle = await prisma.healthMockExam.findFirst({
    where: { courseUnitId: courseUnit.id, slug: "c07" },
    include: {
      sections: {
        include: {
          questionGroups: true,
          questions: true,
        },
      },
    },
  });

  const compiledQuestions = UE14_COLLE_C07_QUESTIONS.map((q) =>
    compileHealthTrainingAuthorQuestion(q)
  );

  // Groupes de questions C07
  const groupsData = [
    {
      key: "group-carbonyl-reactions",
      order: 1,
      title: "Données communes — Réactivité du groupe carbonyle",
      sharedStatement:
        "On étudie trois transformations. Dans les schémas A et B, le substrat possède une fonction carbonyle ; dans le schéma C, un organomagnésien réagit avec le dioxyde de carbone. Les produits finaux X, Y et Z ne sont pas nommés sur le schéma.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c07/carbonyl-reactions-linked-q12-q14.svg",
        alt: "Trois schémas réactionnels montrant la réduction d’un aldéhyde, l’addition d’un organomagnésien sur une cétone et la carboxylation d’un organomagnésien par le dioxyde de carbone.",
      },
      questionOrders: [12, 13, 14],
    },
    {
      key: "group-acyl-derivatives",
      order: 2,
      title: "Données communes — Dérivés d’acide et centres réactifs",
      sharedStatement:
        "Le schéma compare quatre espèces A à D dérivées d’un même motif acyle. Elles permettent de comparer la fonction ester, la fonction amide, un chlorure d’acyle et un ion carboxylate sans que le nom des fonctions soit indiqué sur le dessin.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c07/acyl-derivatives-linked-q24-q25.svg",
        alt: "Quatre structures organiques A à D montrant respectivement un ester, une amide, un chlorure d’acyle et un ion carboxylate sans nommer les fonctions.",
      },
      questionOrders: [24, 25],
    },
  ];

  if (existingColle) {
    const attemptCount = await prisma.userHealthMockExamAttempt.count({
      where: { mockExamId: existingColle.id },
    });

    if (attemptCount > 0) {
      console.warn(`[SEED C07] ${attemptCount} tentative(s) conservée(s). Mise à jour du contenu des questions en place.`);
      const section = existingColle.sections[0];
      if (!section) throw new Error("Section introuvable pour C07.");

      // Upsert groups
      const groupIdsByOrder = new Map<number, string>();
      for (const groupSeed of groupsData) {
        let targetGroup = section.questionGroups.find((g) => g.order === groupSeed.order);
        if (targetGroup) {
          targetGroup = await prisma.healthMockExamQuestionGroup.update({
            where: { id: targetGroup.id },
            data: {
              title: groupSeed.title,
              sharedStatement: groupSeed.sharedStatement,
              sharedMedia: groupSeed.sharedMedia as any,
            },
          });
        } else {
          targetGroup = await prisma.healthMockExamQuestionGroup.create({
            data: {
              examSectionId: section.id,
              title: groupSeed.title,
              sharedStatement: groupSeed.sharedStatement,
              sharedMedia: groupSeed.sharedMedia as any,
              order: groupSeed.order,
            },
          });
        }
        for (const qOrder of groupSeed.questionOrders) {
          groupIdsByOrder.set(qOrder, targetGroup.id);
        }
      }

      for (let index = 0; index < compiledQuestions.length; index++) {
        const q = compiledQuestions[index];
        const questionOrder = index + 1;
        const stableId = `c07-q${String(questionOrder).padStart(2, "0")}`;
        const existingQ = section.questions.find((sq) => sq.slug === stableId || sq.order === questionOrder);
        const themeIds = [
          ...((UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID as Record<string, readonly string[]>)[stableId] ?? []),
        ];

        if (existingQ) {
          await prisma.healthMockExamQuestion.update({
            where: { id: existingQ.id },
            data: {
              groupId: groupIdsByOrder.get(questionOrder) ?? null,
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
              themeIds,
            },
          });
        }
      }
      return existingColle;
    } else {
      await prisma.healthMockExam.delete({ where: { id: existingColle.id } });
    }
  }

  const mockExam = await prisma.healthMockExam.create({
    data: {
      courseUnitId: courseUnit.id,
      type: "COLLE",
      title: "Chimie — Fonctions et réactivité",
      slug: "c07",
      description: "Chimie générale + Chimie organique",
      instructions: "Colle UE14 Reims — 25 questions — 37.5 min — Notation UNESS",
      durationMinutes: 38,
      durationSeconds: 2250,
      questionCount: 25,
      version: 1,
      order: 7,
      isPublished: true,
    },
  });

  const section = await prisma.healthMockExamSection.create({
    data: {
      mockExamId: mockExam.id,
      teachingElementId: chemistryElement.id,
      title: "Chimie — Fonctions et réactivité",
      order: 1,
      questionCount: 25,
      firstQuestion: 1,
      lastQuestion: 25,
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
    const stableId = `c07-q${String(questionOrder).padStart(2, "0")}`;
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
