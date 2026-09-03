import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C04_QUESTIONS } from "../authoring/health-colle-ue14-c04-chimie-des-atomes-aux-molecules-organiques.author.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";
import { UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID } from "./health-colle-ue14-theme-mapping.final";

const normalize = (value: string | null | undefined) =>
  (value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export async function seedHealthColleUE14C04(prisma: PrismaClient) {
  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: { OR: [{ slug: "ue14" }, { slug: { startsWith: "ue14" } }], isActive: true },
    include: { teachingElements: true },
  });
  if (!courseUnit) throw new Error("Impossible de trouver l'UE14 pour C04.");

  const chemistryElement = courseUnit.teachingElements.find((te) => {
    const hay = [te.slug, te.code, te.title].map(normalize).join(" ");
    return hay.includes("chimie");
  });
  if (!chemistryElement) throw new Error("Élément pédagogique CHIMIE introuvable pour C04.");

  const existingColle = await prisma.healthMockExam.findFirst({
    where: { courseUnitId: courseUnit.id, slug: "c04" },
    include: {
      sections: {
        include: {
          questionGroups: true,
          questions: true,
        },
      },
    },
  });

  const compiledQuestions = UE14_COLLE_C04_QUESTIONS.map((q) =>
    compileHealthTrainingAuthorQuestion(q)
  );

  // Groupes de questions C04
  const groupsData = [
    {
      key: "group-amino-acid-chirality",
      order: 1,
      title: "Données communes — Glycine, alanine et chiralité",
      sharedStatement:
        "On compare la glycine et l’alanine pour étudier la chiralité. Le schéma présente la structure de la glycine et deux représentations tridimensionnelles de l’alanine, notées A et B, images l’une de l’autre dans un miroir.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c04/amino-acid-chirality-linked-q18-q20.svg",
        alt: "Comparaison de la glycine et de deux représentations tridimensionnelles de l’alanine.",
      },
      questionOrders: [18, 19, 20],
    },
    {
      key: "group-hydrocarbons-c6",
      order: 2,
      title: "Données communes — Quatre hydrocarbures à six carbones",
      sharedStatement:
        "Le schéma présente quatre hydrocarbures A à D comportant chacun six atomes de carbone. Ils diffèrent par leur caractère acyclique ou cyclique et par la présence éventuelle d’une double ou d’une triple liaison.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c04/hydrocarbons-c6-linked-q21-q24.svg",
        alt: "Quatre représentations topologiques d’hydrocarbures à six atomes de carbone, notées A à D.",
      },
      questionOrders: [21, 22, 23, 24],
    },
  ];

  if (existingColle) {
    const attemptCount = await prisma.userHealthMockExamAttempt.count({
      where: { mockExamId: existingColle.id },
    });

    if (attemptCount > 0) {
      console.warn(`[SEED C04] ${attemptCount} tentative(s) conservée(s). Mise à jour du contenu des questions en place.`);
      const section = existingColle.sections[0];
      if (!section) throw new Error("Section introuvable pour C04.");

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
        const stableId = `c04-q${String(questionOrder).padStart(2, "0")}`;
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
      title: "Chimie — Des atomes aux molécules organiques",
      slug: "c04",
      description: "Chimie générale + Chimie organique 2.1 à 2.3",
      instructions: "Colle UE14 Reims — 25 questions — 30 min — Notation UNESS",
      durationMinutes: 30,
      durationSeconds: 1800,
      questionCount: 25,
      version: 1,
      order: 4,
      isPublished: true,
    },
  });

  const section = await prisma.healthMockExamSection.create({
    data: {
      mockExamId: mockExam.id,
      teachingElementId: chemistryElement.id,
      title: "Chimie — Des atomes aux molécules organiques",
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
    const stableId = `c04-q${String(questionOrder).padStart(2, "0")}`;
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
