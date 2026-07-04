import { Prisma } from "@prisma/client";
import prisma from "@/lib/db/prisma";
import { Option } from "@/types/option";
import {
  chapterAssignmentContextTypeLabels,
  getChapterLevelLabel,
  contentVerticalLabels,
} from "./chapter.constants";
import {
  ChapterAssignmentEmbedded,
  ChapterAssignmentDetail,
  ChapterAssignmentItem,
  chapterAssignmentDetailSelect,
  chapterAssignmentEmbeddedSelect,
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

export function getContentVerticalLabel(vertical: keyof typeof contentVerticalLabels) {
  return contentVerticalLabels[vertical] ?? vertical;
}

export function getChapterAssignmentContextTypeLabel(
  contextType: keyof typeof chapterAssignmentContextTypeLabels
) {
  return chapterAssignmentContextTypeLabels[contextType] ?? contextType;
}

async function resolveChapterAssignmentContextLabel(
  contextType: ChapterAssignmentEmbedded["contextType"],
  contextId: string
) {
  switch (contextType) {
    case "SUBJECT": {
      const subject = await prisma.subject.findUnique({
        where: { id: contextId },
        select: {
          longDescription: true,
        },
      });

      return subject?.longDescription ?? `Matière introuvable (${contextId})`;
    }
    case "HEALTH_COURSE_UNIT": {
      const courseUnit = await prisma.healthCourseUnit.findUnique({
        where: { id: contextId },
        select: {
          title: true,
          code: true,
          programVersion: {
            select: {
              label: true,
              institution: {
                select: {
                  name: true,
                  shortName: true,
                },
              },
            },
          },
          block: {
            select: {
              title: true,
            },
          },
        },
      });

      if (!courseUnit) {
        return `UE santé introuvable (${contextId})`;
      }

      const institutionLabel =
        courseUnit.programVersion.institution.shortName ??
        courseUnit.programVersion.institution.name;
      const parts = [
        institutionLabel,
        courseUnit.programVersion.label,
        courseUnit.block.title,
        courseUnit.code ? `${courseUnit.code}` : null,
        courseUnit.title,
      ].filter(Boolean);

      return parts.join(" — ");
    }
    case "HEALTH_TEACHING_ELEMENT":
      {
        const teachingElement = await prisma.healthTeachingElement.findUnique({
          where: { id: contextId },
          select: {
            title: true,
            code: true,
            courseUnit: {
              select: {
                title: true,
                code: true,
                programVersion: {
                  select: {
                    label: true,
                    institution: {
                      select: {
                        name: true,
                        shortName: true,
                      },
                    },
                  },
                },
              },
            },
          },
        });

        if (!teachingElement) {
          return `EC santé introuvable (${contextId})`;
        }

        const institutionLabel =
          teachingElement.courseUnit.programVersion.institution.shortName ??
          teachingElement.courseUnit.programVersion.institution.name;
        const parts = [
          institutionLabel,
          teachingElement.courseUnit.programVersion.label,
          teachingElement.courseUnit.code ? `${teachingElement.courseUnit.code}` : null,
          teachingElement.courseUnit.title,
          teachingElement.code ? `${teachingElement.code}` : null,
          teachingElement.title,
        ].filter(Boolean);

        return parts.join(" — ");
      }
    case "BTS_TEACHING":
      return `Enseignement BTS indisponible (${contextId})`;
    case "GENERIC":
      return `Contexte générique (${contextId})`;
    default:
      return `Contexte inconnu (${contextId})`;
  }
}

async function enrichChapterAssignments(
  assignments: ChapterAssignmentEmbedded[]
): Promise<ChapterAssignmentItem[]> {
  const contextLabels = await Promise.all(
    assignments.map((assignment) =>
      resolveChapterAssignmentContextLabel(assignment.contextType, assignment.contextId)
    )
  );

  return assignments.map((assignment, index) => ({
    ...assignment,
    contextLabel: contextLabels[index] ?? assignment.contextId,
  }));
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

  const assignments = await enrichChapterAssignments(
    [...chapter.assignments].sort((left, right) => {
      if (left.order !== right.order) return left.order - right.order;
      return left.createdAt.getTime() - right.createdAt.getTime();
    })
  );

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
    assignments,
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

export async function getChapterAssignmentContextLabel(
  contextType: ChapterAssignmentEmbedded["contextType"],
  contextId: string
) {
  return resolveChapterAssignmentContextLabel(contextType, contextId);
}

export async function fetchChapterAssignments(
  chapterId?: string
): Promise<ChapterAssignmentItem[]> {
  if (chapterId && !isObjectId(chapterId)) {
    return [];
  }

  const assignments = await prisma.chapterAssignment.findMany({
    where: chapterId ? { chapterId } : undefined,
    select: chapterAssignmentEmbeddedSelect,
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
  });

  return enrichChapterAssignments(assignments);
}

export async function fetchChapterAssignmentById(
  id: string
): Promise<(ChapterAssignmentDetail & { contextLabel: string }) | null> {
  if (!isObjectId(id)) {
    return null;
  }

  const assignment = await prisma.chapterAssignment.findUnique({
    where: { id },
    select: chapterAssignmentDetailSelect,
  });

  if (!assignment) {
    return null;
  }

  return {
    ...assignment,
    contextLabel: await resolveChapterAssignmentContextLabel(
      assignment.contextType,
      assignment.contextId
    ),
  };
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

export async function fetchChapterOptions(): Promise<Option[]> {
  const getChapterVerticalLabel = (vertical: string) =>
    getContentVerticalLabel(vertical as keyof typeof contentVerticalLabels);

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
      label: `${chapter.title} - ${chapter.subject.longDescription} - ${getChapterLevelLabel(chapter.level)} - ${getChapterVerticalLabel(chapter.vertical)}`,
    }));
}

export async function fetchQuizQuestionChapterOptions(): Promise<Option[]> {
  return fetchChapterOptions();
}

export async function fetchChapterAssignmentFormOptions(): Promise<{
  subjects: Option[];
  healthCourseUnits: Option[];
  healthTeachingElements: Option[];
}> {
  const [subjects, healthCourseUnits, healthTeachingElements] = await Promise.all([
    prisma.subject.findMany({
      orderBy: [{ longDescription: "asc" }],
      select: {
        id: true,
        longDescription: true,
      },
    }),
    prisma.healthCourseUnit.findMany({
      include: {
        programVersion: {
          include: {
            institution: true,
          },
        },
        block: true,
      },
      orderBy: [{ order: "asc" }, { title: "asc" }],
    }),
    prisma.healthTeachingElement.findMany({
      include: {
        courseUnit: {
          include: {
            programVersion: {
              include: {
                institution: true,
              },
            },
          },
        },
      },
      orderBy: [{ order: "asc" }, { title: "asc" }],
    }),
  ]);

  return {
    subjects: subjects.map((subject) => ({
      value: subject.id,
      label: subject.longDescription,
    })),
    healthCourseUnits: healthCourseUnits
      .sort((left, right) => {
        const byInstitution = (left.programVersion.institution.shortName ?? left.programVersion.institution.name).localeCompare(
          right.programVersion.institution.shortName ?? right.programVersion.institution.name,
          "fr",
          { sensitivity: "base" }
        );
        if (byInstitution !== 0) return byInstitution;

        const byProgram = left.programVersion.label.localeCompare(
          right.programVersion.label,
          "fr",
          { sensitivity: "base", numeric: true }
        );
        if (byProgram !== 0) return byProgram;

        const byBlock = left.block.title.localeCompare(right.block.title, "fr", {
          sensitivity: "base",
          numeric: true,
        });
        if (byBlock !== 0) return byBlock;

        if (left.order !== right.order) {
          return left.order - right.order;
        }

        return left.title.localeCompare(right.title, "fr", {
          sensitivity: "base",
          numeric: true,
        });
      })
      .map((courseUnit) => ({
        value: courseUnit.id,
        label: [
          courseUnit.programVersion.institution.shortName ??
            courseUnit.programVersion.institution.name,
          courseUnit.programVersion.label,
          courseUnit.block.title,
          courseUnit.code ?? null,
          courseUnit.title,
        ]
        .filter(Boolean)
        .join(" — "),
      })),
    healthTeachingElements: healthTeachingElements
      .sort((left, right) => {
        const byInstitution = (left.courseUnit.programVersion.institution.shortName ?? left.courseUnit.programVersion.institution.name).localeCompare(
          right.courseUnit.programVersion.institution.shortName ?? right.courseUnit.programVersion.institution.name,
          "fr",
          { sensitivity: "base" }
        );
        if (byInstitution !== 0) return byInstitution;

        const byProgram = left.courseUnit.programVersion.label.localeCompare(
          right.courseUnit.programVersion.label,
          "fr",
          { sensitivity: "base", numeric: true }
        );
        if (byProgram !== 0) return byProgram;

        const byCourseUnit = left.courseUnit.title.localeCompare(right.courseUnit.title, "fr", {
          sensitivity: "base",
          numeric: true,
        });
        if (byCourseUnit !== 0) return byCourseUnit;

        if (left.order !== right.order) {
          return left.order - right.order;
        }

        return left.title.localeCompare(right.title, "fr", {
          sensitivity: "base",
          numeric: true,
        });
      })
      .map((teachingElement) => ({
        value: teachingElement.id,
        label: [
          teachingElement.courseUnit.programVersion.institution.shortName ??
            teachingElement.courseUnit.programVersion.institution.name,
          teachingElement.courseUnit.programVersion.label,
          teachingElement.courseUnit.code ?? null,
          teachingElement.courseUnit.title,
          teachingElement.code ?? null,
          teachingElement.title,
        ]
          .filter(Boolean)
          .join(" — "),
      })),
  };
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
