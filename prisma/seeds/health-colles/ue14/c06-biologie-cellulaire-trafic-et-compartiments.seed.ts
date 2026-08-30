import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C06_QUESTIONS } from "../authoring/health-colle-ue14-c06-biologie-cellulaire-trafic-et-compartiments.author.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";
import { UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID } from "./health-colle-ue14-theme-mapping.final";

const normalize = (value: string | null | undefined) =>
  (value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export async function seedHealthColleUE14C06(prisma: PrismaClient) {
  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: { OR: [{ slug: "ue14" }, { slug: { startsWith: "ue14" } }], isActive: true },
    include: { teachingElements: true },
  });
  if (!courseUnit) throw new Error("Impossible de trouver l'UE14 pour C06.");

  const bioCellElement = courseUnit.teachingElements.find((te) => {
    const hay = [te.slug, te.code, te.title].map(normalize).join(" ");
    return hay.includes("biologie cellulaire") || hay.includes("biologie-cellulaire");
  });
  if (!bioCellElement) throw new Error("Élément pédagogique BIOLOGIE_CELLULAIRE introuvable pour C06.");

  const existingColle = await prisma.healthMockExam.findFirst({
    where: { courseUnitId: courseUnit.id, slug: "c06" },
    include: {
      sections: {
        include: {
          questionGroups: true,
          questions: true,
        },
      },
    },
  });

  const compiledQuestions = UE14_COLLE_C06_QUESTIONS.map((q) =>
    compileHealthTrainingAuthorQuestion(q)
  );

  // Groupes de questions C06
  const groupsData = [
    {
      key: "group-secretory-pathway",
      order: 1,
      title: "Données communes — Voie sécrétoire et tri intracellulaire",
      sharedStatement:
        "Le schéma résume une partie de la voie sécrétoire. Une protéine soluble A est destinée à être sécrétée hors de la cellule, tandis qu’une protéine soluble B est une hydrolase destinée au compartiment lysosomal. Les deux protéines commencent leur trajet dans le réticulum endoplasmique avant de rejoindre l’appareil de Golgi.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c06/secretory-pathway-linked-q05-q07.svg",
        alt: "Schéma simplifié de la voie sécrétoire montrant le réticulum endoplasmique, l’appareil de Golgi, le réseau trans-golgien, la membrane plasmique, un endosome et un lysosome.",
      },
      questionOrders: [5, 6, 7],
    },
    {
      key: "group-endolysosomal-pathway",
      order: 2,
      title: "Données communes — Voie endolysosomale",
      sharedStatement:
        "Le schéma représente plusieurs flux qui convergent vers la voie endolysosomale : endocytose depuis la membrane plasmique, arrivée d’hydrolases depuis le réseau trans-golgien et apport de matériel cytoplasmique par macroautophagie. Les compartiments de la voie sont volontairement représentés sans donner le nom du compartiment terminal dégradatif.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c06/endolysosomal-pathway-linked-q19-q20.svg",
        alt: "Schéma de la voie endolysosomale montrant l’endocytose, le recyclage membranaire, la maturation endosomale, l’arrivée d’hydrolases depuis le TGN et la macroautophagie.",
      },
      questionOrders: [19, 20],
    },
  ];

  if (existingColle) {
    const attemptCount = await prisma.userHealthMockExamAttempt.count({
      where: { mockExamId: existingColle.id },
    });

    if (attemptCount > 0) {
      console.warn(`[SEED C06] ${attemptCount} tentative(s) conservée(s). Mise à jour du contenu des questions en place.`);
      const section = existingColle.sections[0];
      if (!section) throw new Error("Section introuvable pour C06.");

      for (const groupSeed of groupsData) {
        const existingGroup = section.questionGroups.find((g) => g.order === groupSeed.order);
        if (existingGroup) {
          await prisma.healthMockExamQuestionGroup.update({
            where: { id: existingGroup.id },
            data: {
              title: groupSeed.title,
              sharedStatement: groupSeed.sharedStatement,
              sharedMedia: groupSeed.sharedMedia as any,
            },
          });
        }
      }

      for (let index = 0; index < compiledQuestions.length; index++) {
        const q = compiledQuestions[index];
        const questionOrder = index + 1;
        const stableId = `c06-q${String(questionOrder).padStart(2, "0")}`;
        const existingQ = section.questions.find((sq) => sq.slug === stableId || sq.order === questionOrder);
        const themeIds = [
          ...((UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID as Record<string, readonly string[]>)[stableId] ?? []),
        ];

        if (existingQ) {
          await prisma.healthMockExamQuestion.update({
            where: { id: existingQ.id },
            data: {
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
      title: "Biologie cellulaire — Trafic et compartiments",
      slug: "c06",
      description: "Biologie cellulaire · Ch. 4 à 6 + rappels",
      instructions: "Colle UE14 Reims — 20 questions — 30 min — Notation UNESS",
      durationMinutes: 30,
      durationSeconds: 1800,
      questionCount: 20,
      version: 1,
      order: 6,
      isPublished: true,
    },
  });

  const section = await prisma.healthMockExamSection.create({
    data: {
      mockExamId: mockExam.id,
      teachingElementId: bioCellElement.id,
      title: "Biologie cellulaire — Trafic et compartiments",
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
    const stableId = `c06-q${String(questionOrder).padStart(2, "0")}`;
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
