import { Prisma, QuizDifficulty } from "@prisma/client";
import { z } from "zod";
import {
  createChapterSchema,
  createQuizQuestionSchema,
  updateTrainingStructureSchema,
} from "@/lib/validation";

export type CreateChapterValues = z.infer<typeof createChapterSchema>;
export type CreateChapterErrors = z.inferFormattedError<typeof createChapterSchema>;
export type CreateQuizQuestionValues = z.infer<typeof createQuizQuestionSchema>;
export type CreateQuizQuestionErrors = z.inferFormattedError<typeof createQuizQuestionSchema>;
export type UpdateTrainingStructureValues = z.infer<typeof updateTrainingStructureSchema>;
export type UpdateTrainingStructureErrors = z.inferFormattedError<
  typeof updateTrainingStructureSchema
>;

export const chapterListInclude = {
  subject: {
    select: {
      id: true,
      longDescription: true,
      shortDescription: true,
    },
  },
  _count: {
    select: {
      quizQuestions: true,
    },
  },
} satisfies Prisma.ChapterInclude;

export type ChapterListItem = Prisma.ChapterGetPayload<{
  include: typeof chapterListInclude;
}>;

export const chapterDetailInclude = {
  subject: {
    select: {
      id: true,
      longDescription: true,
      shortDescription: true,
    },
  },
  quizQuestions: {
    select: {
      id: true,
      difficulty: true,
      question: true,
      correctChoiceIndex: true,
      order: true,
      isPublished: true,
      updatedAt: true,
    },
  },
  sections: {
    include: {
      quizzes: {
        include: {
          questionGroups: {
            include: {
              questionLinks: {
                select: {
                  questionId: true,
                  order: true,
                },
              },
            },
          },
          questionLinks: {
            select: {
              questionId: true,
              order: true,
              groupId: true,
            },
          },
        },
      },
    },
  },
} satisfies Prisma.ChapterInclude;

export type ChapterDomainInfo = {
  id: string;
  longDescription: string;
  shortDescription: string;
  order: number | null;
  isActive: boolean;
};

export type ChapterDetail = Prisma.ChapterGetPayload<{
  include: typeof chapterDetailInclude;
}> & {
  domains: ChapterDomainInfo[];
};

export const quizQuestionListInclude = {
  chapter: {
    select: {
      id: true,
      title: true,
      slug: true,
      isActive: true,
      isPublished: true,
      subject: {
        select: {
          id: true,
          longDescription: true,
          shortDescription: true,
        },
      },
    },
  },
} satisfies Prisma.QuizQuestionInclude;

export type QuizQuestionListItem = Prisma.QuizQuestionGetPayload<{
  include: typeof quizQuestionListInclude;
}>;

export type QuizQuestionFormData = {
  id: string;
  chapterId: string;
  difficulty: QuizDifficulty;
  question: string;
  choices: string[];
  correctChoiceIndex: number;
  explanation: string;
  order: number;
  isPublished: boolean;
};