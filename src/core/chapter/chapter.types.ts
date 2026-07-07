import { Prisma, QuizDifficulty } from "@prisma/client";
import { z } from "zod";

import {
  createChapterAssignmentSchema,
  createChapterSchema,
  createQuizQuestionSchema,
  updateTrainingStructureSchema,
} from "@/lib/validation";
import type { QuizAnswerFormatValue } from "@/core/quiz/quiz-answer-format";
import {
  chapterAssignmentContextTypeLabels,
  contentVerticalLabels,
} from "./chapter.constants";
import { healthCourseUnitCoverageStatusLabels } from "@/core/health/health.schemas";

export type CreateChapterValues = z.infer<typeof createChapterSchema>;
export type CreateChapterErrors = z.inferFormattedError<typeof createChapterSchema>;
export type CreateChapterAssignmentValues = z.infer<typeof createChapterAssignmentSchema>;
export type CreateChapterAssignmentErrors = z.inferFormattedError<
  typeof createChapterAssignmentSchema
>;
export type CreateQuizQuestionValues = z.infer<typeof createQuizQuestionSchema>;
export type CreateQuizQuestionErrors = z.inferFormattedError<typeof createQuizQuestionSchema>;
export type UpdateTrainingStructureValues = z.infer<typeof updateTrainingStructureSchema>;
export type UpdateTrainingStructureErrors = z.inferFormattedError<
  typeof updateTrainingStructureSchema
>;

export const chapterAssignmentEmbeddedSelect = {
  id: true,
  chapterId: true,
  vertical: true,
  contextType: true,
  contextId: true,
  titleOverride: true,
  shortTitleOverride: true,
  slugOverride: true,
  descriptionOverride: true,
  displayGroupKey: true,
  displayGroupLabel: true,
  displayGroupOrder: true,
  order: true,
  coverageStatus: true,
  sourceUrl: true,
  sourceLabel: true,
  sourceCheckedAt: true,
  isActive: true,
  isPublished: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.ChapterAssignmentSelect;

export type ChapterAssignmentEmbedded = Prisma.ChapterAssignmentGetPayload<{
  select: typeof chapterAssignmentEmbeddedSelect;
}>;

export const chapterAssignmentDetailSelect = {
  ...chapterAssignmentEmbeddedSelect,
  chapter: {
    select: {
      id: true,
      title: true,
      slug: true,
      level: true,
      vertical: true,
      subject: {
        select: {
          id: true,
          longDescription: true,
          shortDescription: true,
        },
      },
    },
  },
} satisfies Prisma.ChapterAssignmentSelect;

export type ChapterAssignmentDetail = Prisma.ChapterAssignmentGetPayload<{
  select: typeof chapterAssignmentDetailSelect;
}>;

export type ChapterAssignmentItem = ChapterAssignmentEmbedded & {
  contextLabel: string;
};

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
      answerFormat: true,
      correctChoiceIndexes: true,
      correctChoiceIndex: true,
      order: true,
      isPublished: true,
      updatedAt: true,
    },
  },
  assignments: {
    select: chapterAssignmentEmbeddedSelect,
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
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

export type ChapterDetail = Omit<
  Prisma.ChapterGetPayload<{
    include: typeof chapterDetailInclude;
  }>,
  "assignments"
> & {
  domains: ChapterDomainInfo[];
  assignments: ChapterAssignmentItem[];
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
  answerFormat: QuizAnswerFormatValue;
  question: string;
  choices: string[];
  correctChoiceIndexes: number[];
  correctChoiceIndex: number;
  explanation: string;
  order: number;
  isPublished: boolean;
};

export { chapterAssignmentContextTypeLabels, contentVerticalLabels, healthCourseUnitCoverageStatusLabels };
