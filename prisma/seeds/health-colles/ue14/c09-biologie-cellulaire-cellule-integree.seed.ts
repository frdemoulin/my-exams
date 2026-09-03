import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C09_QUESTIONS } from "../authoring/health-colle-ue14-c09-biologie-cellulaire-cellule-integree.author.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";
import { UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID } from "./health-colle-ue14-theme-mapping.final";

const normalize = (value: string | null | undefined) =>
  (value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export async function seedHealthColleUE14C09(prisma: PrismaClient) {
  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: { OR: [{ slug: "ue14" }, { slug: { startsWith: "ue14" } }], isActive: true },
    include: { teachingElements: true },
  });
  if (!courseUnit) throw new Error("Impossible de trouver l'UE14 pour C09.");

  const bioCellElement = courseUnit.teachingElements.find((te) => {
    const hay = [te.slug, te.code, te.title].map(normalize).join(" ");
    return hay.includes("biologie") || hay.includes("cellulaire");
  });
  if (!bioCellElement) throw new Error("Élément pédagogique BIOLOGIE CELLULAIRE introuvable pour C09.");

  const existingColle = await prisma.healthMockExam.findFirst({
    where: { courseUnitId: courseUnit.id, slug: "c09" },
    include: {
      sections: {
        include: {
          questionGroups: true,
          questions: true,
        },
      },
    },
  });

  const compiledQuestions = UE14_COLLE_C09_QUESTIONS.map((q) =>
    compileHealthTrainingAuthorQuestion(q)
  );

  // Groupes de questions C09
  const groupsData = [
    {
      key: "group-mitochondrial-chain",
      order: 1,
      title: "Données communes — Mitochondrie et chaîne respiratoire",
      sharedStatement:
        "Le schéma représente une mitochondrie et localise plusieurs éléments impliqués dans l'import des protéines et la chaîne respiratoire. Les complexes I à IV sont représentés dans la membrane interne ; l'accepteur terminal des électrons n'est volontairement pas indiqué.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c09/mitochondrial-chain-linked-q01-q03.svg",
        alt: "Schéma d'une mitochondrie montrant les membranes externe et interne, le complexe TOM, les complexes respiratoires I à IV, l'ubiquinone, le cytochrome c et l'ATP synthase.",
      },
      questionOrders: [1, 2, 3],
    },
    {
      key: "group-integrated-cell-states",
      order: 2,
      title: "Données communes — Une cellule, deux états fonctionnels",
      sharedStatement:
        "Une même lignée de cellules sécrétrices est observée dans deux situations. Le panneau A représente une cellule en interphase avec une forte activité de synthèse et de sécrétion protéique. Le panneau B représente une cellule de la même lignée en métaphase. Les deux panneaux servent aux trois questions suivantes.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c09/integrated-cell-states-linked-q22-q24.svg",
        alt: "Deux panneaux montrant une cellule sécrétrice en interphase avec ses principaux compartiments et une cellule de même lignée en métaphase avec son fuseau mitotique.",
      },
      questionOrders: [22, 23, 24],
    },
  ];

  if (existingColle) {
    const attemptCount = await prisma.userHealthMockExamAttempt.count({
      where: { mockExamId: existingColle.id },
    });

    if (attemptCount > 0) {
      console.warn(`[SEED C09] ${attemptCount} tentative(s) conservée(s). Mise à jour du contenu des questions en place.`);
      const section = existingColle.sections[0];
      if (!section) throw new Error("Section introuvable pour C09.");

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
        const stableId = `c09-q${String(questionOrder).padStart(2, "0")}`;
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
      title: "Biologie cellulaire — Cellule intégrée",
      slug: "c09",
      description: "Biologie cellulaire · Ch. 7 à 9 + rappels Ch. 1 à 6",
      instructions: "Colle UE14 Reims — 25 questions — 37 min 30 s — Notation UNESS",
      durationMinutes: 37.5,
      durationSeconds: 2250,
      questionCount: 25,
      version: 1,
      order: 9,
      isPublished: true,
    },
  });

  const section = await prisma.healthMockExamSection.create({
    data: {
      mockExamId: mockExam.id,
      teachingElementId: bioCellElement.id,
      title: "Biologie cellulaire — Cellule intégrée",
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
    const stableId = `c09-q${String(questionOrder).padStart(2, "0")}`;
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
