import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C02_QUESTIONS } from "../authoring/health-colle-ue14-c02-biochimie-glucides.author.seed";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";
import { UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID } from "./health-colle-ue14-theme-mapping.final";

const normalize = (value: string | null | undefined) =>
  (value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export async function seedHealthColleUE14C02(prisma: PrismaClient) {
  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: { OR: [{ slug: "ue14" }, { slug: { startsWith: "ue14" } }], isActive: true },
    include: { teachingElements: true },
  });
  if (!courseUnit) throw new Error("Impossible de trouver l'UE14 pour C02.");

  const biochemistryElement = courseUnit.teachingElements.find((te) => {
    const hay = [te.slug, te.code, te.title].map(normalize).join(" ");
    return hay.includes("biochimie");
  });
  if (!biochemistryElement) throw new Error("Élément pédagogique BIOCHIMIE introuvable pour C02.");

  const existingColle = await prisma.healthMockExam.findFirst({
    where: { courseUnitId: courseUnit.id, slug: "c02" },
  });

  if (existingColle) {
    const attemptCount = await prisma.userHealthMockExamAttempt.count({
      where: { mockExamId: existingColle.id },
    });
    if (attemptCount === 0) {
      await prisma.healthMockExam.delete({ where: { id: existingColle.id } });
    } else {
      console.warn(`[SEED C02] ${attemptCount} tentative(s) conservée(s). Mise à jour du contenu.`);
      await prisma.healthMockExamSection.deleteMany({
        where: { mockExamId: existingColle.id },
      });
    }
  }

  const compiledQuestions = UE14_COLLE_C02_QUESTIONS.map((q) =>
    compileHealthTrainingAuthorQuestion(q)
  );

  // Groupes de questions C02
  const groupsData = [
    {
      key: "group-glucose-family",
      order: 1,
      title: "Données communes — Autour du D-glucose",
      sharedStatement:
        "Le D-glucose peut être comparé à certains de ses stéréoisomères et transformé en plusieurs dérivés biologiquement importants. Le schéma ci-dessous servira aux trois questions suivantes.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c02/glucose-family-linked-q01-q03.svg",
        alt: "Comparaison des projections de Fischer du D-mannose, du D-glucose et du D-galactose, avec deux transformations du D-glucose conduisant aux produits A et B.",
      },
      questionOrders: [1, 2, 3],
    },
    {
      key: "group-diholosides-reducing",
      order: 2,
      title: "Données communes — Diholosides et pouvoir réducteur",
      sharedStatement:
        "On compare le lactose et le saccharose. Les représentations cycliques ci-dessous permettent d’examiner l’engagement de leurs carbones anomériques et les conséquences sur leur pouvoir réducteur.",
      sharedMedia: {
        type: "image",
        src: "/images/training/ue14/colles/c02/diholosides-reducing-linked-q17-q19.svg",
        alt: "Représentations cycliques simplifiées du lactose et du saccharose montrant leurs deux résidus osidiques et leur liaison glycosidique.",
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
            title: "Biochimie — Glucides",
            slug: "c02",
            description: "Biochimie · Ch. 1 à 3",
            instructions: "Colle UE14 Reims — 20 questions — 30 min — Notation UNESS",
            durationMinutes: 30,
            durationSeconds: 1800,
            questionCount: 20,
            version: 1,
            order: 2,
            isPublished: true,
          },
        });

  // Création de la section
  const section = await prisma.healthMockExamSection.create({
    data: {
      mockExamId: mockExam.id,
      teachingElementId: biochemistryElement.id,
      title: "Biochimie — Glucides",
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
    const stableId = `c02-q${String(questionOrder).padStart(2, "0")}`;
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
