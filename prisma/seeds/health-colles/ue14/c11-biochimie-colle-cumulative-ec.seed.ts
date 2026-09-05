import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C11_QUESTIONS } from "../authoring/health-colle-ue14-c11-biochimie-colle-cumulative-ec.author.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";
import { UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID } from "./health-colle-ue14-theme-mapping.final";

const normalize = (value: string | null | undefined) =>
  (value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export async function seedHealthColleUE14C11(prisma: PrismaClient, programVersionSlug = "las-sps-2026-2027") {
  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: {
      programVersion: {
        slug: programVersionSlug,
        institution: { uaiCode: "0511296G" },
      },
      OR: [{ slug: "ue14" }, { slug: { startsWith: "ue14" } }],
      isActive: true,
    },
    include: { teachingElements: true },
  });
  if (!courseUnit) throw new Error(`Impossible de trouver l'UE14 pour C11 (${programVersionSlug}).`);

  const biochimieElement = courseUnit.teachingElements.find((te) => {
    const hay = [te.slug, te.code, te.title].map(normalize).join(" ");
    return hay.includes("biochimie");
  });
  if (!biochimieElement) throw new Error("Élément pédagogique BIOCHIMIE introuvable pour C11.");

  const existingColle = await prisma.healthMockExam.findFirst({
    where: { courseUnitId: courseUnit.id, slug: "c11" },
    include: {
      sections: {
        include: {
          questionGroups: true,
          questions: true,
        },
      },
    },
  });

  const compiledQuestions = UE14_COLLE_C11_QUESTIONS.map((q) =>
    compileHealthTrainingAuthorQuestion(q)
  );

  // Groupes de questions C11
  const groupsData = [
    {
      key: "group-lipid-integration",
      order: 1,
      title: "Données communes — Lipides membranaires et médiateurs",
      sharedStatement:
        "Le schéma rassemble plusieurs repères de l’EC de Biochimie. Deux acides gras L et A sont décrits par leur notation Δ ; la molécule P est un lipide membranaire portant A en position sn-2 ; les molécules C et S illustrent deux autres grandes architectures lipidiques. Le même support sert aux quatre questions suivantes.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c11/lipid-integration-linked-q05-q08.svg",
        alt: "Schéma intégratif montrant deux acides gras notés L et A, un glycérophospholipide P portant A en sn-2, une structure de céramide C et une structure de cholestérol S accompagnée de sa forme estérifiée.",
      },
      questionOrders: [5, 6, 7, 8],
    },
    {
      key: "group-enzyme-kinetics",
      order: 2,
      title: "Données communes — Cinétique et régulation enzymatiques",
      sharedStatement:
        "Le panneau A présente le suivi d’une réaction enzymatique mesurée par spectrophotométrie. Le panneau B rassemble les représentations de Lineweaver-Burk obtenues pour une condition témoin et pour trois inhibiteurs distincts notés X, Y et Z. Le même support sert aux quatre questions suivantes.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c11/enzyme-kinetics-linked-q26-q29.svg",
        alt: "Étude de cinétique enzymatique avec une courbe d’absorbance en fonction du temps et plusieurs droites de Lineweaver-Burk obtenues avec ou sans inhibiteurs.",
      },
      questionOrders: [26, 27, 28, 29],
    },
  ];

  if (existingColle) {
    const attemptCount = await prisma.userHealthMockExamAttempt.count({
      where: { mockExamId: existingColle.id },
    });

    if (attemptCount > 0) {
      console.warn(`[SEED C11] ${attemptCount} tentative(s) conservée(s). Mise à jour du contenu des questions en place.`);
      const section = existingColle.sections[0];
      if (!section) throw new Error("Section introuvable pour C11.");

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
        const stableId = `c11-q${String(questionOrder).padStart(2, "0")}`;
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
      title: "Biochimie — Colle cumulative EC",
      slug: "c11",
      description: "Biochimie générale et métabolique · Colle cumulative EC",
      instructions: "Colle UE14 Reims — 30 questions — 45 min — Notation UNESS",
      durationMinutes: 45,
      durationSeconds: 2700,
      questionCount: 30,
      version: 1,
      order: 11,
      isPublished: true,
    },
  });

  const section = await prisma.healthMockExamSection.create({
    data: {
      mockExamId: mockExam.id,
      teachingElementId: biochimieElement.id,
      title: "Biochimie — Colle cumulative EC",
      order: 1,
      questionCount: 30,
      firstQuestion: 1,
      lastQuestion: 30,
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
    const stableId = `c11-q${String(questionOrder).padStart(2, "0")}`;
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
