import type { Prisma, QuizDifficulty } from '@prisma/client';
import prisma from '@/lib/db/prisma';
import type {
  TrainingChapterDetail,
  TrainingChapterListItem,
  TrainingQuestion,
} from './training.types';

const TRAINING_SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';

const visibleChapterWhere = {
  isPublished: true,
  isActive: { not: false as const },
};

const normalizeChoices = (choices: Prisma.JsonValue): string[] => {
  if (!Array.isArray(choices)) return [];

  return choices.filter((choice): choice is string => typeof choice === 'string');
};

const toTrainingQuestion = (question: {
  id: string;
  difficulty: QuizDifficulty;
  question: string;
  choices: Prisma.JsonValue;
  correctChoiceIndex: number;
  explanation: string;
  order: number;
}): TrainingQuestion => ({
  id: question.id,
  difficulty: question.difficulty,
  question: question.question,
  choices: normalizeChoices(question.choices),
  correctChoiceIndex: question.correctChoiceIndex,
  explanation: question.explanation,
  order: question.order,
});

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
    },
    orderBy: {
      order: 'asc',
    },
  });

  return chapters.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    slug: chapter.slug,
    level: chapter.level,
    order: chapter.order,
    questionCount: chapter.quizQuestions.length,
    difficulties: Array.from(
      new Set(chapter.quizQuestions.map((question) => question.difficulty))
    ),
  }));
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
      quizQuestions: {
        where: {
          isPublished: true,
        },
        select: {
          id: true,
          difficulty: true,
          question: true,
          choices: true,
          correctChoiceIndex: true,
          explanation: true,
          order: true,
        },
        orderBy: {
          order: 'asc',
        },
      },
    },
  });

  if (!chapter) return null;

  return {
    id: chapter.id,
    title: chapter.title,
    slug: chapter.slug,
    level: chapter.level,
    order: chapter.order,
    domainIds: chapter.domainIds,
    questions: chapter.quizQuestions.map(toTrainingQuestion),
  };
}
