import type {
  ChapterSectionKind,
  PrismaClient,
  QuizAnswerFormat,
  QuizDifficulty,
  TrainingQuizStage,
} from '@prisma/client';

export type QuantumBoxesDiagram = {
  type: 'quantum-boxes';
  orbitals: Array<{
    label: string;
    boxes: Array<'empty' | 'up' | 'down' | 'pair'>;
  }>;
};

export type LewisAtomDiagram = {
  type: 'lewis-atom';
  element: string;
  charge?: number;
  electrons: {
    top: 'none' | 'single' | 'pair';
    right: 'none' | 'single' | 'pair';
    bottom: 'none' | 'single' | 'pair';
    left: 'none' | 'single' | 'pair';
  };
};

export type LewisResonanceDiagram = {
  type: 'lewis-resonance';
  forms: Array<{
    atoms: Array<{
      element: string;
      charge?: number;
      lonePairs: Array<'top' | 'right' | 'bottom' | 'left'>;
    }>;
    bonds: Array<'single' | 'double' | 'triple'>;
  }>;
};

export type BenzeneKekuleDiagram = {
  type: 'benzene-kekule';
  showAromaticHybrid?: boolean;
};

export type SeedQuestion = {
  order: number;
  difficulty: QuizDifficulty;
  answerFormat: QuizAnswerFormat;
  question: string;
  questionDiagram?: QuantumBoxesDiagram | LewisResonanceDiagram | BenzeneKekuleDiagram;
  choices: Array<string | QuantumBoxesDiagram | LewisAtomDiagram>;
  correctChoiceIndexes: number[];
  explanation: string | null;
  choiceExplanations?: string[];
};

export type SeedSection = {
  order: number;
  title: string;
  description: string;
  kind: ChapterSectionKind;
};

export type SeedQuiz = {
  order: number;
  slug: string;
  title: string;
  description: string;
  stage: TrainingQuizStage;
  sectionOrder: number;
  questionOrders?: number[];
  questionGroups?: Array<{
    title?: string;
    order: number;
    sharedStatement: string;
    questionOrders: number[];
  }>;
  items?: SeedQuizItem[];
};

type SeedQuizItem =
  | {
      type: 'QUESTION';
      questionOrder: number;
    }
  | {
      type: 'GROUP';
      title?: string;
      sharedStatement: string;
      questionOrders: number[];
    };

type NormalizedSeedQuizItem = SeedQuizItem & { order: number };

const normalizeSeedQuizItems = (quizSeed: SeedQuiz): NormalizedSeedQuizItem[] => {
  if (quizSeed.items?.length) {
    return quizSeed.items.map((item, index) => ({ ...item, order: index + 1 }));
  }

  let itemOrder = 1;
  const items: NormalizedSeedQuizItem[] = [];

  for (const questionOrder of quizSeed.questionOrders ?? []) {
    items.push({
      type: 'QUESTION',
      questionOrder,
      order: itemOrder,
    });
    itemOrder += 1;
  }

  for (const questionGroup of [...(quizSeed.questionGroups ?? [])].sort(
    (left, right) => left.order - right.order
  )) {
    items.push({
      type: 'GROUP',
      title: questionGroup.title,
      sharedStatement: questionGroup.sharedStatement,
      questionOrders: questionGroup.questionOrders,
      order: itemOrder,
    });
    itemOrder += 1;
  }

  return items;
};

type SeedHealthTrainingChapterParams = {
  prisma: PrismaClient;
  subjectLongDescription: string;
  chapterSlug: string;
  logLabel: string;
  questionThemeLabelsByOrder: Record<number, string[]>;
  questions: SeedQuestion[];
  sections: SeedSection[];
  quizSeeds: SeedQuiz[];
  masterCleanupSectionOrders?: number[];
  cleanupSectionOrders?: number[];
};

export async function seedHealthTrainingChapter({
  prisma,
  subjectLongDescription,
  chapterSlug,
  logLabel,
  questionThemeLabelsByOrder,
  questions,
  sections,
  quizSeeds,
  masterCleanupSectionOrders = [],
  cleanupSectionOrders = [],
}: SeedHealthTrainingChapterParams) {
  console.log(`Seeding health training quiz (${logLabel})...`);

  const subject = await prisma.subject.findFirst({
    where: { longDescription: subjectLongDescription },
    select: { id: true },
  });

  if (!subject) {
    console.warn(`   ⚠️  Matière introuvable : ${subjectLongDescription}`);
    return;
  }

  const chapter = await prisma.chapter.findUnique({
    where: {
      subjectId_slug: {
        subjectId: subject.id,
        slug: chapterSlug,
      },
    },
    select: { id: true, title: true, isActive: true, domainIds: true },
  });

  if (!chapter?.isActive) {
    console.warn(`   ⚠️  Chapitre introuvable ou inactif : ${chapterSlug}`);
    return;
  }

  if (chapter.domainIds.length === 0) {
    throw new Error(
      `Le chapitre ${chapterSlug} doit être rattaché au domaine Chimie avant le seed des thèmes.`
    );
  }

  const questionThemeLabels = Array.from(
    new Set(Object.values(questionThemeLabelsByOrder).flat())
  );
  const existingThemes =
    questionThemeLabels.length > 0
      ? await prisma.theme.findMany({
          where: { title: { in: questionThemeLabels } },
          select: { id: true, title: true, chapterIds: true, domainIds: true },
        })
      : [];
  const existingThemeByTitle = new Map(
    existingThemes.map((theme) => [theme.title, theme] as const)
  );
  const themeIdByLabel = new Map<string, string>();

  for (const label of questionThemeLabels) {
    const existingTheme = existingThemeByTitle.get(label);

    if (existingTheme) {
      const missingDomainIds = chapter.domainIds.filter(
        (domainId) => !existingTheme.domainIds.includes(domainId)
      );

      if (!existingTheme.chapterIds.includes(chapter.id) || missingDomainIds.length > 0) {
        await prisma.theme.update({
          where: { id: existingTheme.id },
          data: {
            chapters: { connect: [{ id: chapter.id }] },
            domains: {
              connect: missingDomainIds.map((domainId) => ({ id: domainId })),
            },
          },
        });
      }

      themeIdByLabel.set(label, existingTheme.id);
      continue;
    }

    const createdTheme = await prisma.theme.create({
      data: {
        title: label,
        shortTitle: label,
        chapters: { connect: [{ id: chapter.id }] },
        domains: {
          connect: chapter.domainIds.map((domainId) => ({ id: domainId })),
        },
      },
      select: { id: true },
    });
    themeIdByLabel.set(label, createdTheme.id);
  }

  for (const entry of questions) {
    const existingQuestion = await prisma.quizQuestion.findUnique({
      where: {
        chapterId_order: {
          chapterId: chapter.id,
          order: entry.order,
        },
      },
      select: { id: true },
    });

    const data = {
      chapterId: chapter.id,
      difficulty: entry.difficulty,
      question: entry.question,
      questionDiagram: entry.questionDiagram,
      choices: entry.choices,
      answerFormat: entry.answerFormat,
      correctChoiceIndexes: entry.correctChoiceIndexes,
      correctChoiceIndex: entry.correctChoiceIndexes[0] ?? 0,
      explanation: entry.explanation ?? '',
      choiceExplanations: entry.choiceExplanations ?? [],
      order: entry.order,
      isPublished: true,
      themeIds: (questionThemeLabelsByOrder[entry.order] ?? [])
        .map((label) => themeIdByLabel.get(label))
        .filter((themeId): themeId is string => Boolean(themeId)),
    };

    if (existingQuestion) {
      await prisma.quizQuestion.update({
        where: { id: existingQuestion.id },
        data,
      });
    } else {
      await prisma.quizQuestion.create({ data });
    }
  }

  const sectionIdByOrder = new Map<number, string>();

  for (const sectionSeed of sections) {
    const section = await prisma.chapterSection.upsert({
      where: {
        chapterId_order: {
          chapterId: chapter.id,
          order: sectionSeed.order,
        },
      },
      update: {
        title: sectionSeed.title,
        description: sectionSeed.description,
        kind: sectionSeed.kind,
        isPublished: true,
      },
      create: {
        chapterId: chapter.id,
        title: sectionSeed.title,
        description: sectionSeed.description,
        order: sectionSeed.order,
        kind: sectionSeed.kind,
        isPublished: true,
        themeIds: [],
      },
      select: { id: true },
    });

    sectionIdByOrder.set(sectionSeed.order, section.id);
  }

  const declaredSectionOrders = sections.map((section) => section.order);
  const obsoleteSections = await prisma.chapterSection.findMany({
    where: {
      chapterId: chapter.id,
      order: { notIn: declaredSectionOrders },
    },
    select: { id: true },
  });

  if (obsoleteSections.length > 0) {
    const obsoleteSectionIds = obsoleteSections.map((section) => section.id);

    await prisma.trainingQuiz.deleteMany({
      where: { sectionId: { in: obsoleteSectionIds } },
    });

    await prisma.chapterSection.deleteMany({
      where: { id: { in: obsoleteSectionIds } },
    });
  }

  const chapterQuestions =
    questions.length > 0
      ? await prisma.quizQuestion.findMany({
          where: { chapterId: chapter.id, order: { in: questions.map((item) => item.order) } },
          select: { id: true, order: true },
          orderBy: { order: 'asc' },
        })
      : [];
  const declaredQuizSlugs = quizSeeds.map((quizSeed) => quizSeed.slug);

  if (cleanupSectionOrders.length > 0) {
    await prisma.trainingQuiz.deleteMany({
      where: {
        chapterId: chapter.id,
        slug: { notIn: declaredQuizSlugs },
        section: {
          order: { in: cleanupSectionOrders },
        },
      },
    });
  }

  if (masterCleanupSectionOrders.length > 0) {
    await prisma.trainingQuiz.deleteMany({
      where: {
        chapterId: chapter.id,
        slug: { notIn: declaredQuizSlugs },
        stage: 'MASTER',
        section: {
          order: { in: masterCleanupSectionOrders },
        },
      },
    });
  }

  const questionIdByOrder = new Map(
    chapterQuestions.map((question) => [question.order, question.id] as const)
  );

  for (const quizSeed of quizSeeds) {
    const sectionId = sectionIdByOrder.get(quizSeed.sectionOrder);

    if (!sectionId) {
      console.warn(
        `   ⚠️  Section introuvable pour ${chapter.title} (ordre ${quizSeed.sectionOrder})`
      );
      continue;
    }

    const quiz = await prisma.trainingQuiz.upsert({
      where: {
        chapterId_slug: {
          chapterId: chapter.id,
          slug: quizSeed.slug,
        },
      },
      update: {
        sectionId,
        title: quizSeed.title,
        description: quizSeed.description,
        order: quizSeed.order,
        stage: quizSeed.stage,
        isPublished: true,
      },
      create: {
        chapterId: chapter.id,
        sectionId,
        slug: quizSeed.slug,
        title: quizSeed.title,
        description: quizSeed.description,
        order: quizSeed.order,
        stage: quizSeed.stage,
        isPublished: true,
      },
      select: { id: true },
    });

    await prisma.trainingQuizQuestion.deleteMany({
      where: { quizId: quiz.id },
    });

    await prisma.trainingQuizQuestionGroup.deleteMany({
      where: { quizId: quiz.id },
    });

    let linkedQuestionCount = 0;
    let quizQuestionOrder = 1;

    for (const item of normalizeSeedQuizItems(quizSeed)) {
      if (item.type === 'QUESTION') {
        const questionId = questionIdByOrder.get(item.questionOrder);

        if (!questionId) {
          console.warn(
            `   ⚠️  Question introuvable pour ${chapter.title} (ordre ${item.questionOrder})`
          );
          continue;
        }

        await prisma.trainingQuizQuestion.create({
          data: {
            quizId: quiz.id,
            questionId,
            order: quizQuestionOrder,
          },
        });

        quizQuestionOrder += 1;
        linkedQuestionCount += 1;
        continue;
      }

      const questionGroup = await prisma.trainingQuizQuestionGroup.create({
        data: {
          quizId: quiz.id,
          title: item.title?.trim() || null,
          sharedStatement: item.sharedStatement,
          order: item.order,
        },
        select: { id: true },
      });

      for (const questionOrder of item.questionOrders) {
        const questionId = questionIdByOrder.get(questionOrder);

        if (!questionId) {
          console.warn(`   ⚠️  Question introuvable pour ${chapter.title} (ordre ${questionOrder})`);
          continue;
        }

        await prisma.trainingQuizQuestion.create({
          data: {
            quizId: quiz.id,
            groupId: questionGroup.id,
            questionId,
            order: quizQuestionOrder,
          },
        });

        quizQuestionOrder += 1;
        linkedQuestionCount += 1;
      }
    }

    console.log(
      `   ✓ Quiz "${quizSeed.title}" publié pour ${chapter.title} (${linkedQuestionCount} questions liées, format MULTIPLE)`
    );
  }
}
