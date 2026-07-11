import { Prisma } from "@prisma/client";
import prisma from "@/lib/db/prisma";
import {
  getPrimaryCorrectChoiceIndex,
  resolveCorrectChoiceIndexes,
  resolveQuizAnswerFormat,
} from "@/core/quiz/quiz-answer-format";
import { reorderCatchAllChoices } from "@/core/training/training-choice-ordering";
import {
  getTrainingChoicePlainText,
  normalizeTrainingChoiceContents,
} from "@/core/training/training-choice-content";
import { getTrainingQuizStageLabel } from "@/core/training/training-stage";
import { Option } from "@/types/option";
import { normalizeSearchText } from "@/lib/utils";
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
  return normalizeTrainingChoiceContents(value).map((choice) =>
    getTrainingChoicePlainText(choice)
  );
}

type ChapterQueryOptions = {
  includeInactive?: boolean;
};

type QuizQuestionQueryOptions = {
  chapterId?: string;
};

const activeChapterFilter = {
  isActive: { not: false as const },
};

const quizDifficultyLabels: Record<string, string> = {
  EASY: "Facile",
  MEDIUM: "Moyen",
  HARD: "Difficile",
};

const stripLatexMarkers = (value: string) =>
  value
    .replace(/\$+/g, "")
    .replace(/\\mathrm\{([^}]*)\}/g, "$1")
    .replace(/\\text\{([^}]*)\}/g, "$1")
    .replace(/\\ce\{([^}]*)\}/g, "$1")
    .replace(/\\,/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const toDisplayThemeLabel = (value: string) => {
  const cleaned = stripLatexMarkers(value).replace(/\s*:\s*$/g, "").trim();
  if (!cleaned) {
    return "";
  }

  return cleaned.charAt(0).toLocaleUpperCase("fr-FR") + cleaned.slice(1);
};

const inferQuestionTopicLabel = ({
  question,
  choices,
}: {
  question: string;
  choices: string[];
}) => {
  const sourceText = [question, ...choices].join(" ");
  const normalized = normalizeSearchText(sourceText);

  const explicitPatterns: Array<{ label: string; test: (text: string) => boolean }> = [
    {
      label: "Calcul de masse atomique moyenne",
      test: (text) =>
        text.includes("masse atomique moyenne") ||
        (text.includes("echantillon naturel") && text.includes(" bore ")) ||
        (text.includes("isotope") && text.includes("majoritaire") && text.includes("u")),
    },
    {
      label: "Unité de masse atomique",
      test: (text) =>
        text.includes("unite de masse atomique") ||
        (text.includes("dalton") && text.includes("carbone 12")),
    },
    {
      label: "Ordres de grandeur en médecine",
      test: (text) =>
        text.includes("ordres de grandeur") ||
        text.includes("globule rouge") ||
        text.includes("hemoglobine") ||
        text.includes("peptide"),
    },
    {
      label: "Nombres quantiques et remplissage",
      test: (text) =>
        text.includes("nombres quantiques") ||
        text.includes("remplissage") ||
        text.includes("regle de hund"),
    },
    {
      label: "Couches, sous-couches et orbitales",
      test: (text) =>
        text.includes("couches") ||
        text.includes("sous-couches") ||
        text.includes("sous couches") ||
        text.includes("orbitales"),
    },
    {
      label: "Configuration électronique",
      test: (text) =>
        text.includes("configurations electroniques") ||
        text.includes("configuration electronique") ||
        text.includes("couche de valence"),
    },
    {
      label: "Classification périodique",
      test: (text) =>
        text.includes("classification periodique") ||
        text.includes("periode correspond a une colonne"),
    },
    {
      label: "Familles d'éléments",
      test: (text) =>
        text.includes("familles d elements") ||
        text.includes("metalloides") ||
        text.includes("gaz rares") ||
        text.includes("non-metaux") ||
        text.includes("non metaux"),
    },
    {
      label: "Éléments naturels et artificiels",
      test: (text) =>
        text.includes("elements naturels et artificiels") ||
        text.includes("transuraniens") ||
        text.includes("z <= 92") ||
        text.includes("z > 92"),
    },
    {
      label: "Isotopes",
      test: (text) =>
        text.includes("isotopes") ||
        (text.includes("meme numero atomique") && text.includes("neutrons")),
    },
    {
      label: "Nucléides",
      test: (text) =>
        text.includes("nucleide") ||
        text.includes("^a_zx") ||
        text.includes("nombre de masse"),
    },
    {
      label: "Structure de l'atome",
      test: (text) =>
        text.includes("notion d'atome") ||
        text.includes("constituants") ||
        text.includes("masse et structure de l'atome") ||
        text.includes("quasi-totalite de la masse"),
    },
  ];

  for (const pattern of explicitPatterns) {
    if (pattern.test(normalized)) {
      return pattern.label;
    }
  }

  const aboutMatch = question.match(/^À propos d['e]\s+(.+?)\s*:\s*$/i);
  if (aboutMatch?.[1]) {
    return toDisplayThemeLabel(aboutMatch[1]);
  }

  const aboutPluralMatch = question.match(/^À propos des?\s+(.+?)\s*:\s*$/i);
  if (aboutPluralMatch?.[1]) {
    return toDisplayThemeLabel(aboutPluralMatch[1]);
  }

  return "";
};

export type ChapterQuizQuestionExportRow = {
  quizId: string;
  quizOrder: number;
  questionId: string;
  questionOrderInQuiz: number;
  questionTheme: string;
  answerNature: "single" | "multiple";
  quizDifficulty: string;
  questionDifficulty: string;
  facultyPrecision: string;
  courseUnitPrecision: string;
  teachingElementPrecision: string;
  chapterPrecision: string;
  sectionPrecision: string;
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

export async function fetchChapterQuizQuestionExportRows(
  chapterId: string
): Promise<ChapterQuizQuestionExportRow[]> {
  if (!isObjectId(chapterId)) {
    return [];
  }

  const chapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
    select: {
      id: true,
      title: true,
      domainIds: true,
      assignments: {
        select: {
          contextType: true,
          contextId: true,
        },
      },
      sections: {
        select: {
          title: true,
          order: true,
          quizzes: {
            select: {
              id: true,
              order: true,
              stage: true,
              questionLinks: {
                select: {
                  order: true,
                  question: {
                    select: {
                      id: true,
                      question: true,
                      choices: true,
                      answerFormat: true,
                      difficulty: true,
                      themeIds: true,
                    },
                  },
                },
              },
            },
            orderBy: [{ order: "asc" }],
          },
        },
        orderBy: [{ order: "asc" }],
      },
    },
  });

  if (!chapter) {
    return [];
  }

  const healthCourseUnitIds = Array.from(
    new Set(
      chapter.assignments
        .filter((assignment) => assignment.contextType === "HEALTH_COURSE_UNIT")
        .map((assignment) => assignment.contextId)
    )
  );
  const healthTeachingElementIds = Array.from(
    new Set(
      chapter.assignments
        .filter((assignment) => assignment.contextType === "HEALTH_TEACHING_ELEMENT")
        .map((assignment) => assignment.contextId)
    )
  );

  const [courseUnits, teachingElements] = await Promise.all([
    healthCourseUnitIds.length > 0
      ? prisma.healthCourseUnit.findMany({
          where: { id: { in: healthCourseUnitIds } },
          select: {
            id: true,
            code: true,
            title: true,
            programVersion: {
              select: {
                institution: {
                  select: {
                    name: true,
                    shortName: true,
                  },
                },
              },
            },
          },
        })
      : Promise.resolve([]),
    healthTeachingElementIds.length > 0
      ? prisma.healthTeachingElement.findMany({
          where: { id: { in: healthTeachingElementIds } },
          select: {
            id: true,
            code: true,
            title: true,
            courseUnit: {
              select: {
                id: true,
                code: true,
                title: true,
                programVersion: {
                  select: {
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
        })
      : Promise.resolve([]),
  ]);

  const courseUnitLabelById = new Map(
    courseUnits.map((courseUnit) => [
      courseUnit.id,
      [courseUnit.code?.trim() || null, courseUnit.title.trim()].filter(Boolean).join(" "),
    ])
  );
  const facultyLabelByCourseUnitId = new Map(
    courseUnits.map((courseUnit) => [
      courseUnit.id,
      courseUnit.programVersion.institution.shortName?.trim() ||
        courseUnit.programVersion.institution.name.trim(),
    ])
  );
  const teachingElementById = new Map(
    teachingElements.map((teachingElement) => [
      teachingElement.id,
      {
        teachingElementLabel: [
          teachingElement.code?.trim() || null,
          teachingElement.title.trim(),
        ]
          .filter(Boolean)
          .join(" "),
        courseUnitLabel: [
          teachingElement.courseUnit.code?.trim() || null,
          teachingElement.courseUnit.title.trim(),
        ]
          .filter(Boolean)
          .join(" "),
        facultyLabel:
          teachingElement.courseUnit.programVersion.institution.shortName?.trim() ||
          teachingElement.courseUnit.programVersion.institution.name.trim(),
      },
    ])
  );

  const facultyLabels = Array.from(
    new Set([
      ...healthCourseUnitIds
        .map((courseUnitId) => facultyLabelByCourseUnitId.get(courseUnitId) ?? "")
        .filter((label) => label.length > 0),
      ...healthTeachingElementIds
        .map((teachingElementId) => teachingElementById.get(teachingElementId)?.facultyLabel ?? "")
        .filter((label) => label.length > 0),
    ])
  );
  const courseUnitLabels = Array.from(
    new Set([
      ...healthCourseUnitIds
        .map((courseUnitId) => courseUnitLabelById.get(courseUnitId) ?? "")
        .filter((label) => label.length > 0),
      ...healthTeachingElementIds
        .map((teachingElementId) => teachingElementById.get(teachingElementId)?.courseUnitLabel ?? "")
        .filter((label) => label.length > 0),
    ])
  );
  const teachingElementLabels = Array.from(
    new Set(
      healthTeachingElementIds
        .map(
          (teachingElementId) =>
            teachingElementById.get(teachingElementId)?.teachingElementLabel ?? ""
        )
        .filter((label) => label.length > 0)
    )
  );

  const themeIds = Array.from(
    new Set(
      chapter.sections.flatMap((section) =>
        section.quizzes.flatMap((quiz) =>
          quiz.questionLinks.flatMap((link) => link.question.themeIds)
        )
      )
    )
  );
  const inferredThemeCandidates = chapter.domainIds.length
    ? await prisma.theme.findMany({
        where: {
          domainIds: {
            hasSome: chapter.domainIds,
          },
        },
        select: {
          id: true,
          title: true,
          shortTitle: true,
        },
        orderBy: [{ title: "asc" }],
      })
    : [];
  const themes = themeIds.length
    ? await prisma.theme.findMany({
        where: {
          id: {
            in: themeIds,
          },
        },
        select: {
          id: true,
          title: true,
          shortTitle: true,
        },
      })
    : [];
  const allThemes = Array.from(
    new Map(
      [...themes, ...inferredThemeCandidates].map((theme) => [theme.id, theme] as const)
    ).values()
  );
  const themeLabelById = new Map(
    allThemes.map((theme) => [theme.id, theme.shortTitle?.trim() || theme.title.trim()] as const)
  );

  return chapter.sections.flatMap((section) =>
    section.quizzes.flatMap((quiz) =>
      quiz.questionLinks
        .slice()
        .sort((left, right) => left.order - right.order)
        .map((link) => {
          const normalizedChoices = Array.isArray(link.question.choices)
            ? link.question.choices.filter((choice): choice is string => typeof choice === "string")
            : [];
          const explicitThemeLabels = link.question.themeIds
            .map((themeId) => themeLabelById.get(themeId) ?? themeId)
            .filter((label) => label.length > 0);
          const inferredTopicLabel =
            explicitThemeLabels.length > 0
              ? ""
              : inferQuestionTopicLabel({
                  question: link.question.question,
                  choices: normalizedChoices,
                });

          return {
            quizId: quiz.id,
            quizOrder: quiz.order,
            questionId: link.question.id,
            questionOrderInQuiz: link.order,
            questionTheme: [...explicitThemeLabels, inferredTopicLabel]
              .filter((label, index, array) => array.indexOf(label) === index)
              .filter((label) => label.length > 0)
              .join(" | ") || section.title,
            answerNature:
              resolveQuizAnswerFormat(link.question.answerFormat) === "MULTIPLE"
                ? "multiple"
                : "single",
            quizDifficulty: getTrainingQuizStageLabel(quiz.stage) ?? "",
            questionDifficulty:
              quizDifficultyLabels[link.question.difficulty] ?? link.question.difficulty,
            facultyPrecision: facultyLabels.join(" | "),
            courseUnitPrecision: courseUnitLabels.join(" | "),
            teachingElementPrecision: teachingElementLabels.join(" | "),
            chapterPrecision: chapter.title,
            sectionPrecision: section.title,
          };
        })
    )
  );
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
      answerFormat: true,
      correctChoiceIndexes: true,
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
      resolveCorrectChoiceIndexes({
        answerFormat: question.answerFormat,
        correctChoiceIndex: question.correctChoiceIndex,
        correctChoiceIndexes: question.correctChoiceIndexes,
        choiceCount: normalizeChoices(question.choices).length,
      })
    );

    return {
      ...question,
      answerFormat: resolveQuizAnswerFormat(question.answerFormat),
      choices: normalizedQuestionChoices.choices.map((choice) =>
        getTrainingChoicePlainText(choice)
      ),
      correctChoiceIndexes: normalizedQuestionChoices.correctChoiceIndexes,
      correctChoiceIndex: getPrimaryCorrectChoiceIndex({
        answerFormat: question.answerFormat,
        correctChoiceIndex: question.correctChoiceIndex,
        correctChoiceIndexes: normalizedQuestionChoices.correctChoiceIndexes,
        choiceCount: normalizedQuestionChoices.choices.length,
      }),
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
