import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C08_QUESTIONS } from "../authoring/health-colle-ue14-c08-biochimie-acides-amines-et-proteines.author.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";
import { UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID } from "./health-colle-ue14-theme-mapping.final";

const normalize = (value: string | null | undefined) =>
  (value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export async function seedHealthColleUE14C08(prisma: PrismaClient) {
  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: { OR: [{ slug: "ue14" }, { slug: { startsWith: "ue14" } }], isActive: true },
    include: { teachingElements: true },
  });
  if (!courseUnit) throw new Error("Impossible de trouver l'UE14 pour C08.");

  const biochimieElement = courseUnit.teachingElements.find((te) => {
    const hay = [te.slug, te.code, te.title].map(normalize).join(" ");
    return hay.includes("biochimie");
  });
  if (!biochimieElement) throw new Error("Élément pédagogique BIOCHIMIE introuvable pour C08.");

  const existingColle = await prisma.healthMockExam.findFirst({
    where: { courseUnitId: courseUnit.id, slug: "c08" },
    include: {
      sections: {
        include: {
          questionGroups: true,
          questions: true,
        },
      },
    },
  });

  const compiledQuestions = UE14_COLLE_C08_QUESTIONS.map((q) =>
    compileHealthTrainingAuthorQuestion(q)
  );

  // Groupes de questions C08
  const groupsData = [
    {
      key: "group-amino-acids-peptide",
      order: 1,
      title: "Données communes — Acides aminés et liaison peptidique",
      sharedStatement:
        "On compare deux acides aminés A et B à pH voisin de 7, puis le dipeptide formé par condensation de A avec B. Le schéma permet d’examiner leurs fonctions ionisables, la chaîne latérale de A et la liaison peptidique formée.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c08/amino-acids-peptide-linked-q01-q03.svg",
        alt: "Structures zwitterioniques de la cystéine A et de la glycine B, puis schéma du dipeptide A–B mettant en évidence son squelette sans nommer la liaison peptidique.",
      },
      questionOrders: [1, 2, 3],
    },
    {
      key: "group-peptide-ionization",
      order: 2,
      title: "Données communes — Chaînes latérales et conformation",
      sharedStatement:
        "Une protéine globulaire contient à sa surface un segment peptidique simplifié Tyr–His–Asp. Le schéma représente ce segment à pH 7,4 ainsi qu’une vue schématique de la protéine native puis de la même protéine après une modification importante de son environnement.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c08/peptide-ionization-linked-q22-q24.svg",
        alt: "Segment peptidique Tyr–His–Asp à pH 7,4 avec extrémités N- et C-terminales, accompagné d’une représentation schématique d’une protéine native et d’une forme dénaturée.",
      },
      questionOrders: [22, 23, 24],
    },
  ];

  if (existingColle) {
    const attemptCount = await prisma.userHealthMockExamAttempt.count({
      where: { mockExamId: existingColle.id },
    });

    if (attemptCount > 0) {
      console.warn(`[SEED C08] ${attemptCount} tentative(s) conservée(s). Mise à jour du contenu des questions en place.`);
      const section = existingColle.sections[0];
      if (!section) throw new Error("Section introuvable pour C08.");

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
        const stableId = `c08-q${String(questionOrder).padStart(2, "0")}`;
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
      title: "Biochimie — Acides aminés et protéines",
      slug: "c08",
      description: "Biochimie · Acides aminés et protéines + acquis antérieurs",
      instructions: "Colle UE14 Reims — 25 questions — 38 min — Notation UNESS",
      durationMinutes: 38,
      durationSeconds: 2250,
      questionCount: 25,
      version: 1,
      order: 8,
      isPublished: true,
    },
  });

  const section = await prisma.healthMockExamSection.create({
    data: {
      mockExamId: mockExam.id,
      teachingElementId: biochimieElement.id,
      title: "Biochimie — Acides aminés et protéines",
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
    const stableId = `c08-q${String(questionOrder).padStart(2, "0")}`;
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
