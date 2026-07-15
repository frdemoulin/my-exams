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

export type SeedQuestion = {
  order: number;
  difficulty: QuizDifficulty;
  answerFormat: QuizAnswerFormat;
  question: string;
  questionDiagram?: QuantumBoxesDiagram;
  choices: Array<string | QuantumBoxesDiagram>;
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
  questionOrders: number[];
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

  const chapterQuestions =
    questions.length > 0
      ? await prisma.quizQuestion.findMany({
          where: { chapterId: chapter.id, order: { in: questions.map((item) => item.order) } },
          select: { id: true, order: true },
          orderBy: { order: 'asc' },
        })
      : [];
  const declaredQuizSlugs = quizSeeds.map((quizSeed) => quizSeed.slug);

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

    for (const [index, questionOrder] of quizSeed.questionOrders.entries()) {
      const questionId = questionIdByOrder.get(questionOrder);

      if (!questionId) {
        console.warn(`   ⚠️  Question introuvable pour ${chapter.title} (ordre ${questionOrder})`);
        continue;
      }

      await prisma.trainingQuizQuestion.create({
        data: {
          quizId: quiz.id,
          questionId,
          order: index + 1,
        },
      });

      linkedQuestionCount += 1;
    }

    console.log(
      `   ✓ Quiz "${quizSeed.title}" publié pour ${chapter.title} (${linkedQuestionCount} questions liées, format MULTIPLE)`
    );
  }
}
