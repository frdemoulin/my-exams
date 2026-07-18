import type { Prisma, QuizDifficulty, TrainingQuizStage } from '@prisma/client';
import prisma from '@/lib/db/prisma';
import {
  resolveCorrectChoiceIndexes,
  resolveQuizAnswerFormat,
} from '@/core/quiz/quiz-answer-format';
import { slugifyText } from '@/lib/utils';
import {
  chapterLevelValues,
  getChapterLevelLabel,
} from '@/core/chapter/chapter.constants';
import { reorderCatchAllChoices } from './training-choice-ordering';
import { resolveChoiceCorrectionContent } from './training-choice-explanations';
import {
  normalizeTrainingChoiceContents,
  normalizeTrainingQuestionDiagramContent,
} from './training-choice-content';
import { sortTrainingQuizStages } from './training-stage';
import type {
  TrainingChapterDetail,
  TrainingChapterListItem,
  TrainingPathProgress,
  TrainingChapterSection,
  TrainingLevelDetail,
  TrainingLevelListItem,
  TrainingQuestion,
  TrainingQuiz,
} from './training.types';

const TRAINING_SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const DEFAULT_QUESTIONS_PER_QUIZ = 5;

export const SCIENCE_PHYSICS_TRAINING_LEVELS = chapterLevelValues;

const sciencePhysicsTrainingLevelOrder = new Map<string, number>(
  SCIENCE_PHYSICS_TRAINING_LEVELS.map((level, index) => [level, index])
);

const visibleChapterWhere = {
  isPublished: true,
  isActive: { not: false as const },
};

export const formatTrainingLevelLabel = (level: string) => {
  return getChapterLevelLabel(getCanonicalTrainingLevelValue(level));
};

export const toTrainingLevelSlug = (level: string) => slugifyText(level);

export const getSciencePhysicsTrainingLevelPath = (level: string) =>
  `/entrainement/sciences-physiques/niveaux/${toTrainingLevelSlug(level)}`;

const normalizeChoices = (choices: Prisma.JsonValue) =>
  normalizeTrainingChoiceContents(choices);

const getCanonicalTrainingLevelValue = (level: string) => {
  const normalized = level.trim().toLowerCase();
  const matchedLevel = SCIENCE_PHYSICS_TRAINING_LEVELS.find(
    (candidate) => toTrainingLevelSlug(candidate) === toTrainingLevelSlug(normalized)
  );

  return matchedLevel ?? normalized;
};

const createTrainingLevelListItem = (value: string): TrainingLevelListItem => ({
  value,
  slug: toTrainingLevelSlug(value),
  label: formatTrainingLevelLabel(value),
  chapterCount: 0,
  questionCount: 0,
  quizCount: 0,
});

const simplifyTrainingQuizDescription = (description: string | null) => {
  if (!description) {
    return null;
  }

  const trimmedDescription = description.trim();

  if (!/^QCM\b/iu.test(trimmedDescription)) {
    return trimmedDescription;
  }

  const simplifiedDescription = trimmedDescription
    .replace(
      /^QCM(?:(?:\s+de\s+niveau)?\s+(?:facile|moyen|difficile))?(?:\s+avec\s+.+?)?\s+sur\s+/iu,
      ''
    )
    .replace(/(^|,\s+| et\s+)(?:les|la|le|un|une)\s+/giu, '$1')
    .replace(/(^|,\s+| et\s+)l[’']\s*/giu, '$1')
    .replace(/\bet sur (?:les|la|le|un|une)\s+/giu, ' et ')
    .replace(/\bet sur l[’']\s*/giu, ' et ')
    .replace(/\s+/g, ' ')
    .trim();

  if (simplifiedDescription.length === 0) {
    return trimmedDescription;
  }

  return (
    simplifiedDescription.charAt(0).toLocaleUpperCase('fr-FR') +
    simplifiedDescription.slice(1)
  );
};

const getQuestionThemeLabels = ({
  themeIds,
  themeLabelById,
}: {
  themeIds: string[];
  themeLabelById: Map<string, string>;
}) => {
  return Array.from(
    new Set(
      themeIds
        .map((themeId) => themeLabelById.get(themeId) ?? null)
        .filter((label): label is string => Boolean(label))
    )
  );
};

const toTrainingQuestion = (question: {
  id: string;
  difficulty: QuizDifficulty;
  answerFormat: 'SINGLE' | 'MULTIPLE' | null;
  question: string;
  questionDiagram?: Prisma.JsonValue | null;
  choices: Prisma.JsonValue;
  correctChoiceIndexes: number[];
  correctChoiceIndex: number;
  explanation: string;
  choiceExplanations?: Prisma.JsonValue | null;
  order: number;
  themeIds: string[];
}, group?: {
  id: string;
  title: string | null;
  sharedStatement: string;
  order: number;
} | null, themeLabelById: Map<string, string> = new Map()): TrainingQuestion => {
  const resolvedCorrectChoiceIndexes = resolveCorrectChoiceIndexes({
    answerFormat: question.answerFormat,
    correctChoiceIndex: question.correctChoiceIndex,
    correctChoiceIndexes: question.correctChoiceIndexes,
    choiceCount: normalizeChoices(question.choices).length,
  });
  const normalizedQuestionChoices = reorderCatchAllChoices(
    normalizeChoices(question.choices),
    resolvedCorrectChoiceIndexes
  );
  const resolvedCorrectionContent = resolveChoiceCorrectionContent({
    explanation: question.explanation,
    choiceExplanations: question.choiceExplanations,
    choiceCount: normalizedQuestionChoices.choices.length,
  });

  return {
    id: question.id,
    difficulty: question.difficulty,
    answerFormat: resolveQuizAnswerFormat(question.answerFormat),
    question: question.question,
    questionDiagram: normalizeTrainingQuestionDiagramContent(
      question.questionDiagram ?? null
    ),
    choices: normalizedQuestionChoices.choices,
    correctChoiceIndexes: normalizedQuestionChoices.correctChoiceIndexes,
    explanation: resolvedCorrectionContent.explanation,
    choiceExplanations: resolvedCorrectionContent.choiceExplanations,
    order: question.order,
    themeLabels: getQuestionThemeLabels({
      themeIds: question.themeIds,
      themeLabelById,
    }),
    group: group
      ? {
          id: group.id,
          title: group.title,
          sharedStatement: group.sharedStatement,
          order: group.order,
        }
      : null,
  };
};

const toTrainingQuiz = (quiz: {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  order: number;
  stage: TrainingQuizStage | null;
  questionLinks: Array<{
    group: {
      id: string;
      title: string | null;
      sharedStatement: string;
      order: number;
    } | null;
    question: {
      id: string;
      difficulty: QuizDifficulty;
      answerFormat: 'SINGLE' | 'MULTIPLE' | null;
      question: string;
      questionDiagram?: Prisma.JsonValue | null;
      choices: Prisma.JsonValue;
      correctChoiceIndexes: number[];
      correctChoiceIndex: number;
      explanation: string;
      order: number;
      themeIds: string[];
    };
  }>;
}, themeLabelById: Map<string, string> = new Map()): TrainingQuiz => ({
  id: quiz.id,
  slug: quiz.slug,
  title: quiz.title,
  description: simplifyTrainingQuizDescription(quiz.description),
  order: quiz.order,
  stage: quiz.stage ?? null,
  questions: quiz.questionLinks.map((link) =>
    toTrainingQuestion(link.question, link.group, themeLabelById)
  ),
});

const buildLegacyTrainingSections = (
  chapterId: string,
  questions: TrainingQuestion[]
): TrainingChapterSection[] => {
  if (questions.length === 0) {
    return [];
  }

  const quizzes: TrainingQuiz[] = [];

  for (
    let index = 0;
    index < questions.length;
    index += DEFAULT_QUESTIONS_PER_QUIZ
  ) {
    const quizQuestions = questions.slice(index, index + DEFAULT_QUESTIONS_PER_QUIZ);
    const quizNumber = quizzes.length + 1;

    quizzes.push({
      id: `${chapterId}-legacy-quiz-${quizNumber}`,
      slug: `quiz-${quizNumber}`,
      title: `QCM ${quizNumber}`,
      description: `Série de ${quizQuestions.length} question${quizQuestions.length > 1 ? 's' : ''} sur ce chapitre.`,
      order: quizNumber,
      stage: null,
      questions: quizQuestions,
    });
  }

  return [
    {
      id: `${chapterId}-legacy-section`,
      title: 'QCM du chapitre',
      description:
        'Séries générées automatiquement à partir des questions publiées du chapitre.',
      kind: 'THEME',
      order: 1,
      themeIds: [],
      quizzes,
    },
  ];
};

const getStructuredQuestionCount = (
  quizzes: Array<{
    questionLinks: Array<unknown>;
  }>
) => quizzes.reduce((sum, quiz) => sum + quiz.questionLinks.length, 0);

export async function fetchSciencePhysicsTrainingChapters(): Promise<TrainingChapterListItem[]> {
  const subject = await prisma.subject.findFirst({
    where: {
      longDescription: TRAINING_SUBJECT_LONG_DESCRIPTION,
      isActive: true,
    },
    select: {
      id: true,
    },
  });

  if (!subject) return [];

  const chapters = await prisma.chapter.findMany({
    where: {
      subjectId: subject.id,
      ...visibleChapterWhere,
    },
    select: {
      id: true,
      title: true,
      slug: true,
      level: true,
      order: true,
      quizQuestions: {
        where: {
          isPublished: true,
        },
        select: {
          difficulty: true,
        },
      },
      trainingQuizzes: {
        where: {
          isPublished: true,
        },
        select: {
          id: true,
          stage: true,
          questionLinks: {
            select: {
              id: true,
            },
          },
        },
      },
    },
    orderBy: {
      order: 'asc',
    },
  });

  const displayOrderByLevel = new Map<string, number>();

  return chapters.map((chapter) => {
    const level = getCanonicalTrainingLevelValue(chapter.level);
    const displayOrder = (displayOrderByLevel.get(level) ?? 0) + 1;
    displayOrderByLevel.set(level, displayOrder);

    return {
      id: chapter.id,
      title: chapter.title,
      slug: chapter.slug,
      level,
      order: chapter.order,
      displayOrder,
      questionCount:
        chapter.trainingQuizzes.length > 0
          ? getStructuredQuestionCount(chapter.trainingQuizzes)
          : chapter.quizQuestions.length,
      quizCount:
        chapter.trainingQuizzes.length > 0
          ? chapter.trainingQuizzes.length
          : Math.ceil(chapter.quizQuestions.length / DEFAULT_QUESTIONS_PER_QUIZ),
      stages:
        chapter.trainingQuizzes.length > 0
          ? sortTrainingQuizStages(
              Array.from(
                new Set(
                  chapter.trainingQuizzes
                    .map((quiz) => quiz.stage)
                    .filter((stage): stage is TrainingQuizStage => Boolean(stage))
                )
              )
            )
          : [],
    };
  });
}

export async function fetchSciencePhysicsTrainingLevels(): Promise<TrainingLevelListItem[]> {
  const chapters = await fetchSciencePhysicsTrainingChapters();

  const initialLevels = new Map<string, TrainingLevelListItem>(
    SCIENCE_PHYSICS_TRAINING_LEVELS.map((level) => [level, createTrainingLevelListItem(level)])
  );

  return Array.from(
    chapters.reduce((map, chapter) => {
      const levelValue = getCanonicalTrainingLevelValue(chapter.level);
      const current = map.get(levelValue) ?? createTrainingLevelListItem(levelValue);

      current.chapterCount += 1;
      current.questionCount += chapter.questionCount;
      current.quizCount += chapter.quizCount;
      map.set(levelValue, current);

      return map;
    }, initialLevels).values()
  ).sort((left, right) => {
    const leftOrder = sciencePhysicsTrainingLevelOrder.get(left.value);
    const rightOrder = sciencePhysicsTrainingLevelOrder.get(right.value);

    if (leftOrder !== undefined && rightOrder !== undefined) {
      return leftOrder - rightOrder;
    }

    if (leftOrder !== undefined) {
      return -1;
    }

    if (rightOrder !== undefined) {
      return 1;
    }

    return left.label.localeCompare(right.label, 'fr', { sensitivity: 'base' });
  });
}

export async function fetchSciencePhysicsTrainingLevelBySlug(
  levelSlug: string
): Promise<TrainingLevelDetail | null> {
  const chapters = await fetchSciencePhysicsTrainingChapters();
  const matchedChapters = chapters.filter(
    (chapter) => toTrainingLevelSlug(chapter.level) === levelSlug
  );

  const supportedLevel = SCIENCE_PHYSICS_TRAINING_LEVELS.find(
    (level) => toTrainingLevelSlug(level) === levelSlug
  );

  if (matchedChapters.length === 0 && !supportedLevel) {
    return null;
  }

  const level = matchedChapters[0]
    ? getCanonicalTrainingLevelValue(matchedChapters[0].level)
    : supportedLevel;

  if (!level) {
    return null;
  }

  return {
    value: level,
    slug: levelSlug,
    label: formatTrainingLevelLabel(level),
    chapterCount: matchedChapters.length,
    questionCount: matchedChapters.reduce((sum, chapter) => sum + chapter.questionCount, 0),
    quizCount: matchedChapters.reduce((sum, chapter) => sum + chapter.quizCount, 0),
    chapters: matchedChapters,
  };
}

export async function fetchSciencePhysicsTrainingChapterBySlug(
  slug: string
): Promise<TrainingChapterDetail | null> {
  const subject = await prisma.subject.findFirst({
    where: {
      longDescription: TRAINING_SUBJECT_LONG_DESCRIPTION,
      isActive: true,
    },
    select: {
      id: true,
    },
  });

  if (!subject) return null;

  const chapter = await prisma.chapter.findFirst({
    where: {
      subjectId: subject.id,
      slug,
      ...visibleChapterWhere,
    },
    select: {
      id: true,
      title: true,
      slug: true,
      level: true,
      order: true,
      domainIds: true,
      sections: {
        where: {
          isPublished: true,
        },
        select: {
          id: true,
          title: true,
          description: true,
          kind: true,
          order: true,
          themeIds: true,
          quizzes: {
            where: {
              isPublished: true,
            },
            select: {
              id: true,
              slug: true,
              title: true,
              description: true,
              order: true,
              stage: true,
              questionLinks: {
                where: {
                  question: {
                    isPublished: true,
                  },
                },
                select: {
                  group: {
                    select: {
                      id: true,
                      title: true,
                      sharedStatement: true,
                      order: true,
                    },
                  },
                  question: {
                    select: {
                      id: true,
                      difficulty: true,
                      answerFormat: true,
                      question: true,
                      questionDiagram: true,
                      choices: true,
                      correctChoiceIndexes: true,
                      correctChoiceIndex: true,
                      explanation: true,
                      choiceExplanations: true,
                      order: true,
                      themeIds: true,
                    },
                  },
                },
                orderBy: {
                  order: 'asc',
                },
              },
            },
            orderBy: {
              order: 'asc',
            },
          },
        },
        orderBy: {
          order: 'asc',
        },
      },
      quizQuestions: {
        where: {
          isPublished: true,
        },
        select: {
          id: true,
          difficulty: true,
          answerFormat: true,
          question: true,
          questionDiagram: true,
          choices: true,
          correctChoiceIndexes: true,
          correctChoiceIndex: true,
          explanation: true,
          choiceExplanations: true,
          order: true,
          themeIds: true,
        },
        orderBy: {
          order: 'asc',
        },
      },
    },
  });

  if (!chapter) return null;

  const questionThemeIds = Array.from(
    new Set(
      [
        ...chapter.quizQuestions.flatMap((question) => question.themeIds),
        ...chapter.sections.flatMap((section) =>
          section.quizzes.flatMap((quiz) =>
            quiz.questionLinks.flatMap((link) => link.question.themeIds)
          )
        ),
      ].filter((themeId) => themeId.length > 0)
    )
  );
  const questionThemes = questionThemeIds.length
    ? await prisma.theme.findMany({
        where: {
          id: {
            in: questionThemeIds,
          },
        },
        select: {
          id: true,
          title: true,
          shortTitle: true,
        },
      })
    : [];
  const themeLabelById = new Map(
    questionThemes.map((theme) => [theme.id, theme.shortTitle?.trim() || theme.title] as const)
  );

  const publishedQuestions = chapter.quizQuestions.map((question) =>
    toTrainingQuestion(question, undefined, themeLabelById)
  );

  const structuredSections: TrainingChapterSection[] = chapter.sections
    .map((section) => ({
      id: section.id,
      title: section.title,
      description: section.description,
      kind: section.kind,
      order: section.order,
      themeIds: section.themeIds,
      quizzes: section.quizzes
        .map((quiz) => toTrainingQuiz(quiz, themeLabelById))
        .filter((quiz) => quiz.questions.length > 0),
    }))
    .filter((section) => section.quizzes.length > 0);

  const sections =
    structuredSections.length > 0
      ? structuredSections
      : buildLegacyTrainingSections(chapter.id, publishedQuestions);
  const questionCount = structuredSections.length > 0
    ? structuredSections.reduce(
        (sum, section) =>
          sum + section.quizzes.reduce((quizSum, quiz) => quizSum + quiz.questions.length, 0),
        0
      )
    : publishedQuestions.length;
  const canonicalLevel = getCanonicalTrainingLevelValue(chapter.level);
  const displayOrder = await prisma.chapter.count({
    where: {
      subjectId: subject.id,
      level: chapter.level,
      ...visibleChapterWhere,
      order: {
        lte: chapter.order,
      },
    },
  });

  return {
    id: chapter.id,
    title: chapter.title,
    slug: chapter.slug,
    level: canonicalLevel,
    order: chapter.order,
    displayOrder,
    questionCount,
    quizCount: sections.reduce((sum, section) => sum + section.quizzes.length, 0),
    domainIds: chapter.domainIds,
    sections,
  };
}

export async function fetchSciencePhysicsTrainingPathProgressForChapter({
  chapterId,
  chapterSlug,
  userId,
}: {
  chapterId: string;
  chapterSlug: string;
  userId: string;
}): Promise<TrainingPathProgress> {
  const progressEntries = await prisma.userTrainingQuizProgress.findMany({
    where: {
      chapterId,
      userId,
    },
    select: {
      attemptsCount: true,
      bestScore: true,
      cumulativeSuccessRate: true,
      lastAttemptAt: true,
      masteredAt: true,
      minSuccessRate: true,
      successRate: true,
      totalQuestions: true,
      updatedAt: true,
      quiz: {
        select: {
          slug: true,
        },
      },
    },
  });

  if (progressEntries.length === 0) {
    return {
      version: 1,
      chapterSlug,
      quizProgressBySlug: {},
      validatedQuizSlugs: [],
      updatedAt: new Date(0).toISOString(),
    };
  }

  const latestUpdatedAt = progressEntries.reduce((latest, entry) => {
    return entry.updatedAt > latest ? entry.updatedAt : latest;
  }, progressEntries[0].updatedAt);

  return {
    version: 1,
    chapterSlug,
    quizProgressBySlug: Object.fromEntries(
      progressEntries.map((entry) => {
          const fallbackMinSuccessRate = entry.successRate;
          const minSuccessRate =
            entry.attemptsCount > 0 &&
            (entry.minSuccessRate > 0 || entry.successRate === 0)
              ? entry.minSuccessRate
              : fallbackMinSuccessRate;
          const cumulativeSuccessRate =
            entry.attemptsCount > 0 &&
            (entry.cumulativeSuccessRate > 0 || entry.successRate === 0)
              ? entry.cumulativeSuccessRate
              : entry.successRate * entry.attemptsCount;

          return [
            entry.quiz.slug,
            {
              attemptsCount: entry.attemptsCount,
              bestScore: entry.bestScore,
              totalQuestions: entry.totalQuestions,
              successRate: entry.successRate,
              minSuccessRate,
              averageSuccessRate:
                entry.attemptsCount > 0
                  ? Math.round(cumulativeSuccessRate / entry.attemptsCount)
                  : 0,
              cumulativeSuccessRate,
              completedAt: entry.lastAttemptAt.toISOString(),
              validatedAt: entry.masteredAt?.toISOString() ?? null,
            },
          ] as const;
      })
    ),
    validatedQuizSlugs: progressEntries
      .filter((entry) => entry.masteredAt)
      .map((entry) => entry.quiz.slug),
    updatedAt: latestUpdatedAt.toISOString(),
  };
}
