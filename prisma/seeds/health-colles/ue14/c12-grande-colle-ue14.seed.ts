import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C12_QUESTIONS } from "../authoring/health-colle-ue14-c12-grande-colle-ue14.author.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";
import { UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID } from "./health-colle-ue14-theme-mapping.final";

const normalize = (value: string | null | undefined) =>
  (value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export async function seedHealthColleUE14C12(prisma: PrismaClient, programVersionSlug = "las-sps-2026-2027") {
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
  if (!courseUnit) throw new Error(`Impossible de trouver l'UE14 pour C12 (${programVersionSlug}).`);

  const chimieElement = courseUnit.teachingElements.find((te) => {
    const hay = [te.slug, te.code, te.title].map(normalize).join(" ");
    return hay.includes("chimie") && !hay.includes("biochimie");
  });
  const biochimieElement = courseUnit.teachingElements.find((te) => {
    const hay = [te.slug, te.code, te.title].map(normalize).join(" ");
    return hay.includes("biochimie");
  });
  const biocellElement = courseUnit.teachingElements.find((te) => {
    const hay = [te.slug, te.code, te.title].map(normalize).join(" ");
    return hay.includes("biologie cellulaire") || hay.includes("biologie-cellulaire");
  });

  if (!chimieElement || !biochimieElement || !biocellElement) {
    throw new Error("Éléments pédagogiques introuvables pour C12.");
  }

  const existingColle = await prisma.healthMockExam.findFirst({
    where: { courseUnitId: courseUnit.id, slug: "c12" },
    include: {
      sections: {
        include: {
          questionGroups: true,
          questions: true,
        },
      },
    },
  });

  const compiledQuestions = UE14_COLLE_C12_QUESTIONS.map((q) =>
    compileHealthTrainingAuthorQuestion(q)
  );

  const group1Seed = {
    order: 1,
    title: "Données communes — Molécule polyfonctionnelle et transformations",
    sharedStatement:
      "Le panneau A présente une molécule M portant simultanément une fonction acide carboxylique, une cétone et une amine. Le panneau B rassemble plusieurs transformations simples de fonctions oxygénées. Les deux panneaux servent aux quatre questions suivantes.",
    sharedMedia: {
      type: "image",
      src: "/images/training/ue14/colles/c12/polyfunctional-reactivity-linked-q13-q16.svg",
      alt: "Molécule polyfonctionnelle M portant un acide carboxylique, une cétone et une amine, accompagnée de plusieurs transformations simples entre alcool, aldéhyde, acide carboxylique et cétone.",
    },
    questionOrders: [13, 14, 15, 16],
  };

  const group2Seed = {
    order: 1,
    title: "Données communes — Noyau et mitochondrie",
    sharedStatement:
      "Le schéma représente une cellule eucaryote avec un noyau et une mitochondrie. Deux agrandissements montrent l’organisation de la chromatine au voisinage de l’enveloppe nucléaire et les membranes mitochondriales. Le même support sert aux quatre questions suivantes.",
    sharedMedia: {
      type: "image",
      src: "/images/training/ue14/colles/c12/nucleus-mitochondrion-linked-q40-q43.svg",
      alt: "Schéma d’une cellule eucaryote montrant un noyau avec nucléole, pores, chromatine et lamines, ainsi qu’une mitochondrie à double membrane avec complexe TOM et ADN mitochondrial.",
    },
    questionOrders: [40, 41, 42, 43],
  };

  if (existingColle) {
    const attemptCount = await prisma.userHealthMockExamAttempt.count({
      where: { mockExamId: existingColle.id },
    });

    if (attemptCount > 0) {
      console.warn(`[SEED C12] ${attemptCount} tentative(s) conservée(s). Mise à jour du contenu des questions en place.`);

      const chimieSection = existingColle.sections.find((s) => s.title === "Chimie" || s.order === 1);
      const biocellSection = existingColle.sections.find((s) => s.title === "Biologie cellulaire" || s.order === 3);

      let group1Id: string | null = null;
      let group2Id: string | null = null;

      if (chimieSection) {
        const existingG1 = chimieSection.questionGroups.find((g) => (g.title ?? "").includes("polyfonctionnelle") || g.order === 1);
        if (existingG1) {
          group1Id = existingG1.id;
          await prisma.healthMockExamQuestionGroup.update({
            where: { id: existingG1.id },
            data: {
              title: group1Seed.title,
              sharedStatement: group1Seed.sharedStatement,
              sharedMedia: group1Seed.sharedMedia as any,
            },
          });
        }
      }

      if (biocellSection) {
        const existingG2 = biocellSection.questionGroups.find((g) => (g.title ?? "").includes("Noyau") || g.order === 1);
        if (existingG2) {
          group2Id = existingG2.id;
          await prisma.healthMockExamQuestionGroup.update({
            where: { id: existingG2.id },
            data: {
              title: group2Seed.title,
              sharedStatement: group2Seed.sharedStatement,
              sharedMedia: group2Seed.sharedMedia as any,
            },
          });
        }
      }

      const groupIdsMap = new Map<number, string | null>();
      [13, 14, 15, 16].forEach((o) => groupIdsMap.set(o, group1Id));
      [40, 41, 42, 43].forEach((o) => groupIdsMap.set(o, group2Id));

      const allQuestions = existingColle.sections.flatMap((s) => s.questions);

      // Update questions
      for (let index = 0; index < compiledQuestions.length; index++) {
        const q = compiledQuestions[index];
        const globalOrder = index + 1;
        const stableId = `c12-q${String(globalOrder).padStart(2, "0")}`;
        const existingQ = allQuestions.find((sq) => sq.slug === stableId || sq.globalOrder === globalOrder);
        const themeIds = [
          ...((UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID as Record<string, readonly string[]>)[stableId] ?? []),
        ];
        const targetGroupId = groupIdsMap.has(globalOrder) ? groupIdsMap.get(globalOrder) : undefined;

        if (existingQ) {
          await prisma.healthMockExamQuestion.update({
            where: { id: existingQ.id },
            data: {
              groupId: targetGroupId !== undefined ? targetGroupId : existingQ.groupId,
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
      title: "Grande colle UE14",
      slug: "c12",
      description: "3 EC · Chimie + Biochimie + Biologie cellulaire",
      instructions: "Colle UE14 Reims — 50 questions — 75 min — Notation UNESS",
      durationMinutes: 75,
      durationSeconds: 4500,
      questionCount: 50,
      version: 1,
      order: 12,
      isPublished: true,
    },
  });

  // Section 1: Chimie (Q1 à Q16)
  const sectionChimie = await prisma.healthMockExamSection.create({
    data: {
      mockExamId: mockExam.id,
      teachingElementId: chimieElement.id,
      title: "Chimie",
      order: 1,
      questionCount: 16,
      firstQuestion: 1,
      lastQuestion: 16,
    },
  });

  // Section 2: Biochimie (Q17 à Q33)
  const sectionBiochimie = await prisma.healthMockExamSection.create({
    data: {
      mockExamId: mockExam.id,
      teachingElementId: biochimieElement.id,
      title: "Biochimie",
      order: 2,
      questionCount: 17,
      firstQuestion: 17,
      lastQuestion: 33,
    },
  });

  // Section 3: Biologie cellulaire (Q34 à Q50)
  const sectionBiocell = await prisma.healthMockExamSection.create({
    data: {
      mockExamId: mockExam.id,
      teachingElementId: biocellElement.id,
      title: "Biologie cellulaire",
      order: 3,
      questionCount: 17,
      firstQuestion: 34,
      lastQuestion: 50,
    },
  });

  // Groupe 1 (Chimie - Q13 à Q16)
  const group1 = await prisma.healthMockExamQuestionGroup.create({
    data: {
      examSectionId: sectionChimie.id,
      title: group1Seed.title,
      sharedStatement: group1Seed.sharedStatement,
      sharedMedia: group1Seed.sharedMedia as any,
      order: 1,
    },
  });

  // Groupe 2 (Biologie cellulaire - Q40 à Q43)
  const group2 = await prisma.healthMockExamQuestionGroup.create({
    data: {
      examSectionId: sectionBiocell.id,
      title: group2Seed.title,
      sharedStatement: group2Seed.sharedStatement,
      sharedMedia: group2Seed.sharedMedia as any,
      order: 1,
    },
  });

  const groupIdsByQuestionOrder = new Map<number, string>();
  group1Seed.questionOrders.forEach((o) => groupIdsByQuestionOrder.set(o, group1.id));
  group2Seed.questionOrders.forEach((o) => groupIdsByQuestionOrder.set(o, group2.id));

  const sectionByQuestionOrder = (o: number) => {
    if (o <= 16) return sectionChimie;
    if (o <= 33) return sectionBiochimie;
    return sectionBiocell;
  };

  const sectionQuestionOrder = (o: number) => {
    if (o <= 16) return o;
    if (o <= 33) return o - 16;
    return o - 33;
  };

  for (let index = 0; index < compiledQuestions.length; index++) {
    const q = compiledQuestions[index];
    const globalOrder = index + 1;
    const stableId = `c12-q${String(globalOrder).padStart(2, "0")}`;
    const targetSection = sectionByQuestionOrder(globalOrder);
    const order = sectionQuestionOrder(globalOrder);
    const groupId = groupIdsByQuestionOrder.get(globalOrder) ?? null;

    const themeIds = [
      ...((UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID as Record<string, readonly string[]>)[stableId] ?? []),
    ];

    await prisma.healthMockExamQuestion.create({
      data: {
        examSectionId: targetSection.id,
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
        order,
        globalOrder,
        isPublished: true,
        themeIds,
      },
    });
  }

  return mockExam;
}
