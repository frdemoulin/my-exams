import { Prisma } from "@prisma/client";
import prisma from "@/lib/db/prisma";
import { Option } from "@/types/option";
import {
  ChapterDetail,
  chapterDetailInclude,
  ChapterListItem,
  chapterListInclude,
  QuizQuestionFormData,
} from "./chapter.types";

function normalizeChoices(value: Prisma.JsonValue): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((choice): choice is string => typeof choice === "string");
}

type ChapterQueryOptions = {
  includeInactive?: boolean;
};

const activeChapterFilter = {
  isActive: { not: false as const },
};

function isObjectId(value: string) {
  return /^[a-f0-9]{24}$/i.test(value);
}

export async function fetchChapters(
  options: ChapterQueryOptions = {}
): Promise<ChapterListItem[]> {
  return prisma.chapter.findMany({
    where: options.includeInactive ? undefined : activeChapterFilter,
    include: chapterListInclude,
    orderBy: [{ order: "asc" }, { title: "asc" }],
  });
}

export async function fetchChapterById(id: string): Promise<ChapterDetail | null> {
  if (!isObjectId(id)) {
    return null;
  }

  const chapter = await prisma.chapter.findUnique({
    where: { id },
    include: chapterDetailInclude,
  });

  if (!chapter) {
    return null;
  }

  const domains = chapter.domainIds.length
    ? await prisma.domain.findMany({
        where: {
          id: { in: chapter.domainIds },
        },
        select: {
          id: true,
          longDescription: true,
          shortDescription: true,
          order: true,
          isActive: true,
        },
        orderBy: [{ order: "asc" }, { longDescription: "asc" }],
      })
    : [];

  return {
    ...chapter,
    quizQuestions: [...chapter.quizQuestions].sort((a, b) => a.order - b.order),
    domains,
  };
}

export async function fetchQuizQuestionById(
  id: string
): Promise<QuizQuestionFormData | null> {
  if (!isObjectId(id)) {
    return null;
  }

  return prisma.quizQuestion.findUnique({
    where: { id },
    select: {
      id: true,
      chapterId: true,
      difficulty: true,
      question: true,
      choices: true,
      correctChoiceIndex: true,
      explanation: true,
      order: true,
      isPublished: true,
    },
  }).then((question) => {
    if (!question) {
      return null;
    }

    return {
      ...question,
      choices: normalizeChoices(question.choices),
    };
  });
}

export async function fetchChapterSubjectOptions(): Promise<Option[]> {
  const subjects = await prisma.subject.findMany({
    orderBy: [{ longDescription: "asc" }],
    select: {
      id: true,
      longDescription: true,
    },
  });

  return subjects.map((subject) => ({
    value: subject.id,
    label: subject.longDescription,
  }));
}