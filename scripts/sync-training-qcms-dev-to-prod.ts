import { Prisma, PrismaClient } from "@prisma/client";

import { loadProjectEnv } from "./lib/load-env";

type SubjectRef = {
  longDescription: string;
  shortDescription: string;
};

type DomainRef = {
  subjectLongDescription: string;
  subjectShortDescription: string;
  longDescription: string;
};

type ThemeRef = {
  subjectLongDescription: string;
  subjectShortDescription: string;
  domainLongDescription: string;
  longDescription: string;
};

type ExportQuizQuestion = {
  order: number;
  difficulty: string;
  question: string;
  choices: Prisma.JsonValue;
  correctChoiceIndex: number;
  explanation: string;
  isPublished: boolean;
  themeRefs: ThemeRef[];
};

type ExportTrainingQuizQuestionGroup = {
  order: number;
  title: string | null;
  sharedStatement: string;
};

type ExportTrainingQuizQuestionLink = {
  order: number;
  questionOrder: number;
  groupOrder: number | null;
};

type ExportTrainingQuiz = {
  order: number;
  slug: string;
  title: string;
  description: string | null;
  stage: string | null;
  isPublished: boolean;
  questionGroups: ExportTrainingQuizQuestionGroup[];
  questionLinks: ExportTrainingQuizQuestionLink[];
};

type ExportChapterSection = {
  order: number;
  title: string;
  description: string | null;
  kind: string;
  isPublished: boolean;
  themeRefs: ThemeRef[];
  quizzes: ExportTrainingQuiz[];
};

type ExportChapter = {
  title: string;
  slug: string;
  level: string;
  order: number;
  isActive: boolean;
  isPublished: boolean;
  subject: SubjectRef;
  domainRefs: DomainRef[];
  themeRefs: ThemeRef[];
  questions: ExportQuizQuestion[];
  sections: ExportChapterSection[];
};

type ScriptOptions = {
  chapterSlugs: string[];
  confirmed: boolean;
  dryRun: boolean;
};

type SyncStats = {
  chaptersCreated: number;
  chaptersUpdated: number;
  questionsCreated: number;
  questionsUpdated: number;
  questionsDeleted: number;
  sectionsCreated: number;
  sectionsUpdated: number;
  sectionsDeleted: number;
  quizzesCreated: number;
  quizzesUpdated: number;
  quizzesDeleted: number;
  questionGroupsCreated: number;
  questionGroupsUpdated: number;
  questionGroupsDeleted: number;
  questionLinksCreated: number;
  questionLinksUpdated: number;
  questionLinksDeleted: number;
  progressEntriesDeleted: number;
};

type ProdReferenceMaps = {
  subjectIdByKey: Map<string, string>;
  domainIdByKey: Map<string, string>;
  themeIdByKey: Map<string, string>;
};

const emptyStats = (): SyncStats => ({
  chaptersCreated: 0,
  chaptersUpdated: 0,
  questionsCreated: 0,
  questionsUpdated: 0,
  questionsDeleted: 0,
  sectionsCreated: 0,
  sectionsUpdated: 0,
  sectionsDeleted: 0,
  quizzesCreated: 0,
  quizzesUpdated: 0,
  quizzesDeleted: 0,
  questionGroupsCreated: 0,
  questionGroupsUpdated: 0,
  questionGroupsDeleted: 0,
  questionLinksCreated: 0,
  questionLinksUpdated: 0,
  questionLinksDeleted: 0,
  progressEntriesDeleted: 0,
});

loadProjectEnv();

function printHelp() {
  console.log(
    [
      "Sync training QCM content from dev to prod.",
      "",
      "Usage:",
      "  tsx scripts/sync-training-qcms-dev-to-prod.ts --yes",
      "  tsx scripts/sync-training-qcms-dev-to-prod.ts --yes --chapter transformation-nucleaire",
      "",
      "Options:",
      "  --yes              confirm prod writes",
      "  --dry-run          validate payload and prod mappings without writing",
      "  --chapter <slug>   sync only one chapter slug (repeatable)",
      "  --help             show this help",
    ].join("\n")
  );
}

function parseArgs(argv: string[]): ScriptOptions {
  const chapterSlugs: string[] = [];
  let confirmed = false;
  let dryRun = false;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    }

    if (arg === "--yes") {
      confirmed = true;
      continue;
    }

    if (arg === "--dry-run") {
      dryRun = true;
      continue;
    }

    if (arg === "--chapter") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("Missing value after --chapter.");
      }
      chapterSlugs.push(value);
      index += 1;
      continue;
    }

    if (arg.startsWith("--chapter=")) {
      chapterSlugs.push(arg.slice("--chapter=".length));
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  return {
    chapterSlugs,
    confirmed,
    dryRun,
  };
}

function ensureUrls() {
  const prodUrl = process.env.DATABASE_URL_PROD ?? process.env.MONGODB_URI_PROD;
  if (!prodUrl) {
    throw new Error(
      "DATABASE_URL_PROD (or MONGODB_URI_PROD) is required to write prod data."
    );
  }

  const devUrl =
    process.env.DATABASE_URL_DEV ??
    process.env.MONGODB_URI_DEV ??
    process.env.DATABASE_URL ??
    process.env.MONGODB_URI;

  if (!devUrl) {
    throw new Error(
      "DATABASE_URL_DEV, DATABASE_URL, MONGODB_URI_DEV or MONGODB_URI is required to read dev data."
    );
  }

  if (devUrl === prodUrl) {
    throw new Error("Refuse to run: dev and prod URLs are identical.");
  }

  return { devUrl, prodUrl };
}

function buildSubjectKey(subject: SubjectRef) {
  return `${subject.longDescription}::${subject.shortDescription}`;
}

function buildDomainKey(domain: DomainRef) {
  return `${domain.subjectLongDescription}::${domain.subjectShortDescription}::${domain.longDescription}`;
}

function buildThemeKey(theme: ThemeRef) {
  return `${theme.subjectLongDescription}::${theme.subjectShortDescription}::${theme.domainLongDescription}::${theme.longDescription}`;
}

function getRequiredMapValue<K, T>(
  map: Map<K, T>,
  key: K,
  label: string
): T {
  const value = map.get(key);
  if (value === undefined) {
    throw new Error(label);
  }
  return value;
}

function createUniqueStringMap<T>(
  values: T[],
  getKey: (value: T) => string,
  getId: (value: T) => string,
  label: string
) {
  const result = new Map<string, string>();

  for (const value of values) {
    const key = getKey(value);
    if (result.has(key)) {
      throw new Error(`Duplicate ${label} key in prod: ${key}`);
    }
    result.set(key, getId(value));
  }

  return result;
}

function toInputJson(value: Prisma.JsonValue): Prisma.InputJsonValue {
  return value as Prisma.InputJsonValue;
}

function sortChapters(chapters: ExportChapter[]) {
  return [...chapters].sort((left, right) => {
    const bySubject = left.subject.longDescription.localeCompare(
      right.subject.longDescription
    );
    if (bySubject !== 0) {
      return bySubject;
    }
    return left.order - right.order;
  });
}

async function exportFromDev(
  prisma: PrismaClient,
  chapterSlugs: string[]
): Promise<ExportChapter[]> {
  const [domains, themes, chapters] = await Promise.all([
    prisma.domain.findMany({
      select: {
        id: true,
        longDescription: true,
        subject: {
          select: {
            longDescription: true,
            shortDescription: true,
          },
        },
      },
    }),
    prisma.theme.findMany({
      select: {
        id: true,
        longDescription: true,
        domain: {
          select: {
            longDescription: true,
            subject: {
              select: {
                longDescription: true,
                shortDescription: true,
              },
            },
          },
        },
      },
    }),
    prisma.chapter.findMany({
      where: {
        ...(chapterSlugs.length > 0 ? { slug: { in: chapterSlugs } } : {}),
        OR: [{ quizQuestions: { some: {} } }, { trainingQuizzes: { some: {} } }],
      },
      select: {
        title: true,
        slug: true,
        level: true,
        order: true,
        isActive: true,
        isPublished: true,
        domainIds: true,
        themeIds: true,
        subject: {
          select: {
            longDescription: true,
            shortDescription: true,
          },
        },
        quizQuestions: {
          orderBy: {
            order: "asc",
          },
          select: {
            order: true,
            difficulty: true,
            question: true,
            choices: true,
            correctChoiceIndex: true,
            explanation: true,
            isPublished: true,
            themeIds: true,
          },
        },
        sections: {
          orderBy: {
            order: "asc",
          },
          select: {
            order: true,
            title: true,
            description: true,
            kind: true,
            isPublished: true,
            themeIds: true,
            quizzes: {
              orderBy: {
                order: "asc",
              },
              select: {
                order: true,
                slug: true,
                title: true,
                description: true,
                stage: true,
                isPublished: true,
                questionGroups: {
                  orderBy: {
                    order: "asc",
                  },
                  select: {
                    order: true,
                    title: true,
                    sharedStatement: true,
                  },
                },
                questionLinks: {
                  orderBy: {
                    order: "asc",
                  },
                  select: {
                    order: true,
                    question: {
                      select: {
                        order: true,
                      },
                    },
                    group: {
                      select: {
                        order: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }),
  ]);

  const domainRefById = new Map<string, DomainRef>(
    domains.map((domain) => [
      domain.id,
      {
        longDescription: domain.longDescription,
        subjectLongDescription: domain.subject.longDescription,
        subjectShortDescription: domain.subject.shortDescription,
      },
    ])
  );

  const themeRefById = new Map<string, ThemeRef>(
    themes.map((theme) => [
      theme.id,
      {
        longDescription: theme.longDescription,
        domainLongDescription: theme.domain.longDescription,
        subjectLongDescription: theme.domain.subject.longDescription,
        subjectShortDescription: theme.domain.subject.shortDescription,
      },
    ])
  );

  const toDomainRefs = (ids: string[], owner: string) =>
    ids.map((id) =>
      getRequiredMapValue(
        domainRefById,
        id,
        `Missing dev domain reference ${id} for ${owner}.`
      )
    );

  const toThemeRefs = (ids: string[], owner: string) =>
    ids.map((id) =>
      getRequiredMapValue(
        themeRefById,
        id,
        `Missing dev theme reference ${id} for ${owner}.`
      )
    );

  return sortChapters(
    chapters.map((chapter) => ({
      title: chapter.title,
      slug: chapter.slug,
      level: chapter.level,
      order: chapter.order,
      isActive: chapter.isActive,
      isPublished: chapter.isPublished,
      subject: {
        longDescription: chapter.subject.longDescription,
        shortDescription: chapter.subject.shortDescription,
      },
      domainRefs: toDomainRefs(
        chapter.domainIds,
        `chapter ${chapter.slug} domainIds`
      ),
      themeRefs: toThemeRefs(
        chapter.themeIds,
        `chapter ${chapter.slug} themeIds`
      ),
      questions: chapter.quizQuestions.map((question) => ({
        order: question.order,
        difficulty: question.difficulty,
        question: question.question,
        choices: question.choices,
        correctChoiceIndex: question.correctChoiceIndex,
        explanation: question.explanation,
        isPublished: question.isPublished,
        themeRefs: toThemeRefs(
          question.themeIds,
          `question ${chapter.slug}#${question.order}`
        ),
      })),
      sections: chapter.sections.map((section) => ({
        order: section.order,
        title: section.title,
        description: section.description ?? null,
        kind: section.kind,
        isPublished: section.isPublished,
        themeRefs: toThemeRefs(
          section.themeIds,
          `section ${chapter.slug}#${section.order}`
        ),
        quizzes: section.quizzes.map((quiz) => ({
          order: quiz.order,
          slug: quiz.slug,
          title: quiz.title,
          description: quiz.description ?? null,
          stage: quiz.stage ?? null,
          isPublished: quiz.isPublished,
          questionGroups: quiz.questionGroups.map((group) => ({
            order: group.order,
            title: group.title?.trim() || null,
            sharedStatement: group.sharedStatement,
          })),
          questionLinks: quiz.questionLinks.map((link) => ({
            order: link.order,
            questionOrder: link.question.order,
            groupOrder: link.group?.order ?? null,
          })),
        })),
      })),
    }))
  );
}

async function loadProdReferenceMaps(
  prisma: PrismaClient
): Promise<ProdReferenceMaps> {
  const [subjects, domains, themes] = await Promise.all([
    prisma.subject.findMany({
      select: {
        id: true,
        longDescription: true,
        shortDescription: true,
      },
    }),
    prisma.domain.findMany({
      select: {
        id: true,
        longDescription: true,
        subject: {
          select: {
            longDescription: true,
            shortDescription: true,
          },
        },
      },
    }),
    prisma.theme.findMany({
      select: {
        id: true,
        longDescription: true,
        domain: {
          select: {
            longDescription: true,
            subject: {
              select: {
                longDescription: true,
                shortDescription: true,
              },
            },
          },
        },
      },
    }),
  ]);

  return {
    subjectIdByKey: createUniqueStringMap(
      subjects,
      (subject) =>
        buildSubjectKey({
          longDescription: subject.longDescription,
          shortDescription: subject.shortDescription,
        }),
      (subject) => subject.id,
      "subject"
    ),
    domainIdByKey: createUniqueStringMap(
      domains,
      (domain) =>
        buildDomainKey({
          longDescription: domain.longDescription,
          subjectLongDescription: domain.subject.longDescription,
          subjectShortDescription: domain.subject.shortDescription,
        }),
      (domain) => domain.id,
      "domain"
    ),
    themeIdByKey: createUniqueStringMap(
      themes,
      (theme) =>
        buildThemeKey({
          longDescription: theme.longDescription,
          domainLongDescription: theme.domain.longDescription,
          subjectLongDescription: theme.domain.subject.longDescription,
          subjectShortDescription: theme.domain.subject.shortDescription,
        }),
      (theme) => theme.id,
      "theme"
    ),
  };
}

function resolveSubjectId(chapter: ExportChapter, refs: ProdReferenceMaps) {
  return getRequiredMapValue(
    refs.subjectIdByKey,
    buildSubjectKey(chapter.subject),
    `Missing prod subject for chapter ${chapter.slug} (${chapter.subject.longDescription}).`
  );
}

function resolveDomainIds(
  domainRefs: DomainRef[],
  refs: ProdReferenceMaps,
  owner: string
) {
  return domainRefs.map((domainRef) =>
    getRequiredMapValue(
      refs.domainIdByKey,
      buildDomainKey(domainRef),
      `Missing prod domain mapping for ${owner}: ${domainRef.longDescription}.`
    )
  );
}

function resolveThemeIds(
  themeRefs: ThemeRef[],
  refs: ProdReferenceMaps,
  owner: string
) {
  return themeRefs.map((themeRef) =>
    getRequiredMapValue(
      refs.themeIdByKey,
      buildThemeKey(themeRef),
      `Missing prod theme mapping for ${owner}: ${themeRef.longDescription}.`
    )
  );
}

async function syncChapterToProd(
  prisma: PrismaClient,
  chapter: ExportChapter,
  refs: ProdReferenceMaps,
  stats: SyncStats
) {
  const subjectId = resolveSubjectId(chapter, refs);
  const chapterDomainIds = resolveDomainIds(
    chapter.domainRefs,
    refs,
    `chapter ${chapter.slug}`
  );
  const chapterThemeIds = resolveThemeIds(
    chapter.themeRefs,
    refs,
    `chapter ${chapter.slug}`
  );

  await prisma.$transaction(async (transaction) => {
    const existingChapter = await transaction.chapter.findUnique({
      where: {
        subjectId_slug: {
          subjectId,
          slug: chapter.slug,
        },
      },
      select: {
        id: true,
      },
    });

    const prodChapter = existingChapter
      ? await transaction.chapter.update({
          where: {
            id: existingChapter.id,
          },
          data: {
            title: chapter.title,
            slug: chapter.slug,
            level: chapter.level,
            order: chapter.order,
            isActive: chapter.isActive,
            isPublished: chapter.isPublished,
            domainIds: chapterDomainIds,
            themeIds: chapterThemeIds,
          },
          select: {
            id: true,
          },
        })
      : await transaction.chapter.create({
          data: {
            title: chapter.title,
            slug: chapter.slug,
            level: chapter.level,
            order: chapter.order,
            isActive: chapter.isActive,
            isPublished: chapter.isPublished,
            subjectId,
            domainIds: chapterDomainIds,
            themeIds: chapterThemeIds,
          },
          select: {
            id: true,
          },
        });

    if (existingChapter) {
      stats.chaptersUpdated += 1;
    } else {
      stats.chaptersCreated += 1;
    }

    const chapterId = prodChapter.id;

    const [existingQuestions, existingSections, existingQuizzes] = await Promise.all([
      transaction.quizQuestion.findMany({
        where: {
          chapterId,
        },
        select: {
          id: true,
          order: true,
        },
      }),
      transaction.chapterSection.findMany({
        where: {
          chapterId,
        },
        select: {
          id: true,
          order: true,
        },
      }),
      transaction.trainingQuiz.findMany({
        where: {
          chapterId,
        },
        select: {
          id: true,
          slug: true,
        },
      }),
    ]);

    const existingQuestionByOrder = new Map(
      existingQuestions.map((question) => [question.order, question])
    );
    const existingSectionByOrder = new Map(
      existingSections.map((section) => [section.order, section])
    );
    const existingQuizBySlug = new Map(
      existingQuizzes.map((quiz) => [quiz.slug, quiz])
    );

    const questionIdByOrder = new Map<number, string>();
    const keptQuestionOrders = new Set<number>();
    const keptSectionIds = new Set<string>();
    const keptQuizIds = new Set<string>();

    for (const question of chapter.questions) {
      const existingQuestion = existingQuestionByOrder.get(question.order);
      const questionThemeIds = resolveThemeIds(
        question.themeRefs,
        refs,
        `question ${chapter.slug}#${question.order}`
      );

      keptQuestionOrders.add(question.order);

      if (existingQuestion) {
        await transaction.quizQuestion.update({
          where: {
            id: existingQuestion.id,
          },
          data: {
            difficulty: question.difficulty as never,
            question: question.question,
            choices: toInputJson(question.choices),
            correctChoiceIndex: question.correctChoiceIndex,
            explanation: question.explanation,
            isPublished: question.isPublished,
            themeIds: questionThemeIds,
          },
        });
        questionIdByOrder.set(question.order, existingQuestion.id);
        stats.questionsUpdated += 1;
        continue;
      }

      const createdQuestion = await transaction.quizQuestion.create({
        data: {
          chapterId,
          order: question.order,
          difficulty: question.difficulty as never,
          question: question.question,
          choices: toInputJson(question.choices),
          correctChoiceIndex: question.correctChoiceIndex,
          explanation: question.explanation,
          isPublished: question.isPublished,
          themeIds: questionThemeIds,
        },
        select: {
          id: true,
        },
      });

      questionIdByOrder.set(question.order, createdQuestion.id);
      stats.questionsCreated += 1;
    }

    for (const section of chapter.sections) {
      const existingSection = existingSectionByOrder.get(section.order);
      const sectionThemeIds = resolveThemeIds(
        section.themeRefs,
        refs,
        `section ${chapter.slug}#${section.order}`
      );

      const prodSection = existingSection
        ? await transaction.chapterSection.update({
            where: {
              id: existingSection.id,
            },
            data: {
              title: section.title,
              description: section.description,
              kind: section.kind as never,
              isPublished: section.isPublished,
              themeIds: sectionThemeIds,
            },
            select: {
              id: true,
            },
          })
        : await transaction.chapterSection.create({
            data: {
              chapterId,
              order: section.order,
              title: section.title,
              description: section.description,
              kind: section.kind as never,
              isPublished: section.isPublished,
              themeIds: sectionThemeIds,
            },
            select: {
              id: true,
            },
          });

      keptSectionIds.add(prodSection.id);

      if (existingSection) {
        stats.sectionsUpdated += 1;
      } else {
        stats.sectionsCreated += 1;
      }

      for (const quiz of section.quizzes) {
        const existingQuiz = existingQuizBySlug.get(quiz.slug);
        const prodQuiz = existingQuiz
          ? await transaction.trainingQuiz.update({
              where: {
                id: existingQuiz.id,
              },
              data: {
                sectionId: prodSection.id,
                title: quiz.title,
                description: quiz.description,
                order: quiz.order,
                stage: quiz.stage as never,
                isPublished: quiz.isPublished,
              },
              select: {
                id: true,
              },
            })
          : await transaction.trainingQuiz.create({
              data: {
                chapterId,
                sectionId: prodSection.id,
                slug: quiz.slug,
                title: quiz.title,
                description: quiz.description,
                order: quiz.order,
                stage: quiz.stage as never,
                isPublished: quiz.isPublished,
              },
              select: {
                id: true,
              },
            });

        keptQuizIds.add(prodQuiz.id);

        if (existingQuiz) {
          stats.quizzesUpdated += 1;
        } else {
          stats.quizzesCreated += 1;
        }

        const [existingGroups, existingLinks] = await Promise.all([
          transaction.trainingQuizQuestionGroup.findMany({
            where: {
              quizId: prodQuiz.id,
            },
            select: {
              id: true,
              order: true,
            },
          }),
          transaction.trainingQuizQuestion.findMany({
            where: {
              quizId: prodQuiz.id,
            },
            select: {
              id: true,
              questionId: true,
            },
          }),
        ]);

        const existingGroupByOrder = new Map(
          existingGroups.map((group) => [group.order, group])
        );
        const existingLinkByQuestionId = new Map(
          existingLinks.map((link) => [link.questionId, link])
        );
        const keptGroupIds = new Set<string>();
        const keptLinkIds = new Set<string>();
        const groupIdByOrder = new Map<number, string>();

        for (const questionGroup of quiz.questionGroups) {
          const existingGroup = existingGroupByOrder.get(questionGroup.order);
          const prodGroup = existingGroup
            ? await transaction.trainingQuizQuestionGroup.update({
                where: {
                  id: existingGroup.id,
                },
                data: {
                  title: questionGroup.title,
                  sharedStatement: questionGroup.sharedStatement,
                },
                select: {
                  id: true,
                },
              })
            : await transaction.trainingQuizQuestionGroup.create({
                data: {
                  quizId: prodQuiz.id,
                  order: questionGroup.order,
                  title: questionGroup.title,
                  sharedStatement: questionGroup.sharedStatement,
                },
                select: {
                  id: true,
                },
              });

          keptGroupIds.add(prodGroup.id);
          groupIdByOrder.set(questionGroup.order, prodGroup.id);

          if (existingGroup) {
            stats.questionGroupsUpdated += 1;
          } else {
            stats.questionGroupsCreated += 1;
          }
        }

        for (const questionLink of quiz.questionLinks) {
          const questionId = questionIdByOrder.get(questionLink.questionOrder);
          if (!questionId) {
            throw new Error(
              `Missing prod question for ${chapter.slug}/${quiz.slug} question order ${questionLink.questionOrder}.`
            );
          }

          const groupId =
            questionLink.groupOrder === null
              ? null
              : getRequiredMapValue(
                  groupIdByOrder,
                  questionLink.groupOrder,
                  `Missing prod question group for ${chapter.slug}/${quiz.slug} group order ${questionLink.groupOrder}.`
                );

          const existingLink = existingLinkByQuestionId.get(questionId);
          if (existingLink) {
            await transaction.trainingQuizQuestion.update({
              where: {
                id: existingLink.id,
              },
              data: {
                order: questionLink.order,
                groupId,
              },
            });
            keptLinkIds.add(existingLink.id);
            stats.questionLinksUpdated += 1;
            continue;
          }

          const createdLink = await transaction.trainingQuizQuestion.create({
            data: {
              quizId: prodQuiz.id,
              questionId,
              groupId,
              order: questionLink.order,
            },
            select: {
              id: true,
            },
          });

          keptLinkIds.add(createdLink.id);
          stats.questionLinksCreated += 1;
        }

        const staleLinkIds = existingLinks
          .filter((link) => !keptLinkIds.has(link.id))
          .map((link) => link.id);

        if (staleLinkIds.length > 0) {
          await transaction.trainingQuizQuestion.deleteMany({
            where: {
              id: {
                in: staleLinkIds,
              },
            },
          });
          stats.questionLinksDeleted += staleLinkIds.length;
        }

        const staleGroupIds = existingGroups
          .filter((group) => !keptGroupIds.has(group.id))
          .map((group) => group.id);

        if (staleGroupIds.length > 0) {
          await transaction.trainingQuizQuestionGroup.deleteMany({
            where: {
              id: {
                in: staleGroupIds,
              },
            },
          });
          stats.questionGroupsDeleted += staleGroupIds.length;
        }
      }
    }

    const staleQuizIds = existingQuizzes
      .filter((quiz) => !keptQuizIds.has(quiz.id))
      .map((quiz) => quiz.id);

    if (staleQuizIds.length > 0) {
      const progressDeleteResult = await transaction.userTrainingQuizProgress.deleteMany({
        where: {
          quizId: {
            in: staleQuizIds,
          },
        },
      });

      await transaction.trainingQuizQuestion.deleteMany({
        where: {
          quizId: {
            in: staleQuizIds,
          },
        },
      });
      await transaction.trainingQuizQuestionGroup.deleteMany({
        where: {
          quizId: {
            in: staleQuizIds,
          },
        },
      });
      await transaction.trainingQuiz.deleteMany({
        where: {
          id: {
            in: staleQuizIds,
          },
        },
      });

      stats.progressEntriesDeleted += progressDeleteResult.count;
      stats.quizzesDeleted += staleQuizIds.length;
    }

    const staleSectionIds = existingSections
      .filter((section) => !keptSectionIds.has(section.id))
      .map((section) => section.id);

    if (staleSectionIds.length > 0) {
      await transaction.chapterSection.deleteMany({
        where: {
          id: {
            in: staleSectionIds,
          },
        },
      });
      stats.sectionsDeleted += staleSectionIds.length;
    }

    const staleQuestionIds = existingQuestions
      .filter((question) => !keptQuestionOrders.has(question.order))
      .map((question) => question.id);

    if (staleQuestionIds.length > 0) {
      await transaction.trainingQuizQuestion.deleteMany({
        where: {
          questionId: {
            in: staleQuestionIds,
          },
        },
      });
      await transaction.quizQuestion.deleteMany({
        where: {
          id: {
            in: staleQuestionIds,
          },
        },
      });
      stats.questionsDeleted += staleQuestionIds.length;
    }
  }, {
    maxWait: 10_000,
    timeout: 120_000,
  });
}

function printSummary(stats: SyncStats) {
  console.log(
    [
      "Sync summary:",
      `  chapters: +${stats.chaptersCreated} / ~${stats.chaptersUpdated}`,
      `  questions: +${stats.questionsCreated} / ~${stats.questionsUpdated} / -${stats.questionsDeleted}`,
      `  sections: +${stats.sectionsCreated} / ~${stats.sectionsUpdated} / -${stats.sectionsDeleted}`,
      `  quizzes: +${stats.quizzesCreated} / ~${stats.quizzesUpdated} / -${stats.quizzesDeleted}`,
      `  groups: +${stats.questionGroupsCreated} / ~${stats.questionGroupsUpdated} / -${stats.questionGroupsDeleted}`,
      `  links: +${stats.questionLinksCreated} / ~${stats.questionLinksUpdated} / -${stats.questionLinksDeleted}`,
      `  progress entries deleted for removed quizzes: ${stats.progressEntriesDeleted}`,
    ].join("\n")
  );
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const { devUrl, prodUrl } = ensureUrls();

  const devPrisma = new PrismaClient({
    datasources: {
      db: {
        url: devUrl,
      },
    },
  });
  const prodPrisma = new PrismaClient({
    datasources: {
      db: {
        url: prodUrl,
      },
    },
  });

  try {
    const chapters = await exportFromDev(devPrisma, options.chapterSlugs);
    if (chapters.length === 0) {
      throw new Error("No training chapters found to sync.");
    }

    console.log(
      `Training chapters to sync: ${chapters.map((chapter) => chapter.slug).join(", ")}`
    );

    const prodRefs = await loadProdReferenceMaps(prodPrisma);

    for (const chapter of chapters) {
      resolveSubjectId(chapter, prodRefs);
      resolveDomainIds(chapter.domainRefs, prodRefs, `chapter ${chapter.slug}`);
      resolveThemeIds(chapter.themeRefs, prodRefs, `chapter ${chapter.slug}`);
      for (const question of chapter.questions) {
        resolveThemeIds(
          question.themeRefs,
          prodRefs,
          `question ${chapter.slug}#${question.order}`
        );
      }
      for (const section of chapter.sections) {
        resolveThemeIds(
          section.themeRefs,
          prodRefs,
          `section ${chapter.slug}#${section.order}`
        );
      }
    }

    if (options.dryRun) {
      console.log("Dry-run completed: dev payload and prod taxonomy mappings are valid.");
      return;
    }

    if (!options.confirmed) {
      throw new Error(
        "Refuse to write to prod without --yes. Use --dry-run first if needed."
      );
    }

    const stats = emptyStats();

    for (const chapter of chapters) {
      console.log(`Syncing ${chapter.slug}...`);
      await syncChapterToProd(prodPrisma, chapter, prodRefs, stats);
    }

    printSummary(stats);
    console.log("Training QCM sync completed.");
  } finally {
    await Promise.all([devPrisma.$disconnect(), prodPrisma.$disconnect()]);
  }
}

void main().catch((error: unknown) => {
  console.error("Training QCM sync failed:", error);
  process.exitCode = 1;
});