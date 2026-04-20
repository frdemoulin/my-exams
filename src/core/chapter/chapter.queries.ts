import { Prisma } from "@prisma/client";
import prisma from "@/lib/db/prisma";
import { Option } from "@/types/option";
import {
  ChapterDetail,
  chapterDetailInclude,
  ChapterListItem,
  chapterListInclude,
  QuizQuestionListItem,
  quizQuestionListInclude,
  QuizQuestionFormData,
} from "./chapter.types";

function normalizeChoices(value: Prisma.JsonValue): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((choice): choice is string => typeof choice === "string");
}

const normalizeCatchAllChoice = (choice: string) =>
  choice
    .trim()
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.!?]/g, "")
    .replace(/\s+/g, " ");

const isCatchAllChoice = (choice: string) => {
  const normalizedChoice = normalizeCatchAllChoice(choice);

  return (
    normalizedChoice === "aucune de ces reponses" ||
    normalizedChoice === "toutes ces reponses"
  );
};

const reorderCatchAllChoices = (
  choices: string[],
  correctChoiceIndex: number
) => {
  if (choices.length <= 1) {
    return { choices, correctChoiceIndex };
  }

  const indexedChoices = choices.map((choice, index) => ({
    choice,
    index,
    isCatchAllChoice: isCatchAllChoice(choice),
  }));

  if (!indexedChoices.some((entry) => entry.isCatchAllChoice)) {
    return { choices, correctChoiceIndex };
  }

  const reorderedChoices = [
    ...indexedChoices.filter((entry) => !entry.isCatchAllChoice),
    ...indexedChoices.filter((entry) => entry.isCatchAllChoice),
  ];

  const reorderedCorrectChoiceIndex = reorderedChoices.findIndex(
    (entry) => entry.index === correctChoiceIndex
  );

  return {
    choices: reorderedChoices.map((entry) => entry.choice),
    correctChoiceIndex:
      reorderedCorrectChoiceIndex >= 0
        ? reorderedCorrectChoiceIndex
        : correctChoiceIndex,
  };
};

type ChapterQueryOptions = {
  includeInactive?: boolean;
};

type QuizQuestionQueryOptions = {
  chapterId?: string;
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
    sections: [...chapter.sections]
      .sort((left, right) => left.order - right.order)
      .map((section) => ({
        ...section,
        quizzes: [...section.quizzes]
          .sort((left, right) => left.order - right.order)
          .map((quiz) => ({
            ...quiz,
            questionGroups: [...quiz.questionGroups]
              .sort((left, right) => left.order - right.order)
              .map((group) => ({
                ...group,
                questionLinks: [...group.questionLinks].sort((left, right) => left.order - right.order),
              })),
            questionLinks: [...quiz.questionLinks].sort((left, right) => left.order - right.order),
          })),
      })),
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

    const normalizedQuestionChoices = reorderCatchAllChoices(
      normalizeChoices(question.choices),
      question.correctChoiceIndex
    );

    return {
      ...question,
      choices: normalizedQuestionChoices.choices,
      correctChoiceIndex: normalizedQuestionChoices.correctChoiceIndex,
    };
  });
}

export async function fetchQuizQuestions(
  options: QuizQuestionQueryOptions = {}
): Promise<QuizQuestionListItem[]> {
  if (options.chapterId && !isObjectId(options.chapterId)) {
    return [];
  }

  const questions = await prisma.quizQuestion.findMany({
    where: options.chapterId ? { chapterId: options.chapterId } : undefined,
    include: quizQuestionListInclude,
  });

  return questions.sort((left, right) => {
    const bySubject = left.chapter.subject.longDescription.localeCompare(
      right.chapter.subject.longDescription,
      "fr",
      { sensitivity: "base" }
    );
    if (bySubject !== 0) return bySubject;

    const byChapter = left.chapter.title.localeCompare(right.chapter.title, "fr", {
      sensitivity: "base",
      numeric: true,
    });
    if (byChapter !== 0) return byChapter;

    if (left.order !== right.order) {
      return left.order - right.order;
    }

    return left.question.localeCompare(right.question, "fr", {
      sensitivity: "base",
      numeric: true,
    });
  });
}

export async function fetchQuizQuestionChapterOptions(): Promise<Option[]> {
  const chapters = await prisma.chapter.findMany({
    include: {
      subject: {
        select: {
          id: true,
          longDescription: true,
        },
      },
    },
  });

  return chapters
    .sort((left, right) => {
      const bySubject = left.subject.longDescription.localeCompare(
        right.subject.longDescription,
        "fr",
        { sensitivity: "base" }
      );
      if (bySubject !== 0) return bySubject;

      if (left.order !== right.order) {
        return left.order - right.order;
      }

      return left.title.localeCompare(right.title, "fr", {
        sensitivity: "base",
        numeric: true,
      });
    })
    .map((chapter) => ({
      value: chapter.id,
      label: `${chapter.title} · ${chapter.subject.longDescription}`,
    }));
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