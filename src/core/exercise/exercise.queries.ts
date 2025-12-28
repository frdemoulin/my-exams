/**
 * Queries pour les exercices d'annales
 */

import { PrismaClient, Prisma, ExerciseType } from '@prisma/client';

const prisma = new PrismaClient();

export interface ExerciseWithRelations {
  id: string;
  exerciseNumber: number;
  label: string | null;
  points: number | null;
  pageStart: number | null;
  pageEnd: number | null;
  exerciseType: ExerciseType | null;
  title: string | null;
  statement: string | null;
  exerciseUrl: string | null;
  correctionUrl: string | null;
  estimatedDuration: number | null;
  estimatedDifficulty: number | null;
  summary: string | null;
  keywords: string[];
  enrichmentStatus: string;
  enrichedAt: Date | null;
  
  // Relations
  examPaper: {
    id: string;
    label: string;
    sessionYear: number;
    source: 'OFFICIEL' | 'APMEP' | 'LABOLYCEE' | 'AUTRE';
    sourceUrl: string | null;
    updatedAt: Date;
    subjectUrl: string | null;
    correctionUrl: string | null;
    diploma: {
      id: string;
      longDescription: string;
      shortDescription: string;
    };
    division: {
      id: string;
      longDescription: string;
      shortDescription: string;
    } | null;
    grade: {
      id: string;
      longDescription: string;
      shortDescription: string;
    };
    teaching: {
      id: string;
      longDescription: string;
      shortDescription: string | null;
      grade: {
        id: string;
        longDescription: string;
        shortDescription: string;
      };
      subject: {
        id: string;
        longDescription: string;
        shortDescription: string;
      };
    };
  };
  
  themes: Array<{
    id: string;
    shortDescription: string | null;
    longDescription: string;
  }>;
  
  corrections: Array<{
    id: string;
    source: string;
    url: string;
    type: string;
    quality: number | null;
    author: string | null;
  }>;
}

export interface SearchExercisesParams {
  diploma?: string;
  subject?: string;
  teachingId?: string;
  difficulty?: number;
  themes?: string[];
  year?: number;
  search?: string;
  exerciseType?: ExerciseType;
  sortBy?: 'year' | 'difficulty' | 'duration';
  sortOrder?: 'asc' | 'desc';
  limit?: number;
  page?: number;
  pageSize?: number;
}

export interface SearchExercisesResult {
  items: ExerciseWithRelations[];
  total: number;
  page: number;
  pageSize: number;
}

export type SearchSuggestion =
  | {
      type: 'exercise';
      id: string;
      title: string;
      label: string | null;
      examPaperLabel: string;
      sessionYear: number;
      subject: string;
    }
  | {
      type: 'theme';
      id: string;
      title: string;
    };

// Échappe les caractères spéciaux pour les regex Mongo (protection injection/performances)
function escapeRegex(input: string) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Recherche d'exercices avec filtres
 */
export async function searchExercises(
  params: SearchExercisesParams = {}
): Promise<SearchExercisesResult> {
  const {
    diploma,
    subject,
    teachingId,
    difficulty,
    themes: themeFilters = [],
    year,
    search,
    exerciseType,
    sortBy = 'year',
    sortOrder = 'desc',
    limit,
    page = 1,
    pageSize = 10,
  } = params;

  const safePage = Math.max(1, page);
  const safePageSize = Math.min(Math.max(1, pageSize), 50); // Cap à 50 pour éviter les grosses réponses
  const offset = (safePage - 1) * safePageSize;

  // Construction du filtre Prisma
  const baseWhere: Prisma.ExerciseWhereInput = {
    enrichmentStatus: 'completed', // Seulement les exercices enrichis
  };

  const examPaperFilter: Prisma.ExamPaperWhereInput = {};

  // Filtre par diplôme (toujours actives côté public)
  const diplomaFilter: Prisma.DiplomaWhereInput = { isActive: true };
  if (diploma) {
    diplomaFilter.shortDescription = {
      contains: diploma,
      mode: 'insensitive',
    };
  }
  examPaperFilter.diploma = diplomaFilter;

  const teachingFilter: Prisma.TeachingWhereInput = { isActive: true };

  // Filtre par matière
  if (subject) {
    teachingFilter.subject = {
      shortDescription: {
        contains: subject,
        mode: 'insensitive',
      },
    };
  }

  // Filtre par option/spécialité
  if (teachingId) {
    teachingFilter.id = teachingId;
  }

  if (Object.keys(teachingFilter).length > 0) {
    examPaperFilter.teaching = teachingFilter;
  }

  // Filtre par année
  if (year) {
    examPaperFilter.sessionYear = year;
  }

  if (Object.keys(examPaperFilter).length > 0) {
    baseWhere.examPaper = examPaperFilter;
  }

  // Filtre par difficulté
  if (difficulty) {
    baseWhere.estimatedDifficulty = difficulty;
  }

  if (exerciseType) {
    baseWhere.exerciseType = exerciseType;
  }

  const themeFilterWhere: Prisma.ExerciseWhereInput | undefined =
    themeFilters.length > 0
      ? {
          themeIds: {
            hasEvery: themeFilters,
          },
        }
      : undefined;

  const where: Prisma.ExerciseWhereInput = themeFilterWhere
    ? { ...baseWhere, ...themeFilterWhere }
    : baseWhere;

  // Recherche textuelle (préférence pour l'index text MongoDB, gratuit)
  const hasSearch = Boolean(search && search.trim());
  if (hasSearch) {
    const searchTerm = search!.trim();

    const [commandResult, matchedThemes] = await Promise.all([
      // Pipeline d'aggregation pour utiliser $text et récupérer un scoring
      prisma.$runCommandRaw({
        aggregate: 'Exercise',
        pipeline: [
          {
            $match: {
              $text: { $search: searchTerm },
              enrichmentStatus: 'completed',
              ...(difficulty ? { estimatedDifficulty: difficulty } : {}),
              ...(exerciseType ? { exerciseType } : {}),
              ...(themeFilters.length > 0 ? { themeIds: { $all: themeFilters } } : {}),
            },
          },
          {
            $addFields: { score: { $meta: 'textScore' } },
          },
          {
            $sort: {
              score: -1,
            },
          },
          {
            $project: {
              _id: 1,
              score: 1,
            },
          },
          {
            $limit: 500, // garde-fou pour éviter un résultat trop volumineux
          },
        ],
        cursor: {},
      }),
      prisma.theme.findMany({
        where: {
          OR: [
            { longDescription: { contains: searchTerm, mode: 'insensitive' } },
            { shortDescription: { contains: searchTerm, mode: 'insensitive' } },
          ],
        },
        select: { id: true },
      }),
    ]);

    const rawResults =
      (commandResult as any)?.cursor?.firstBatch ?? (commandResult as any)?.documents ?? [];

    const idsWithScore = (rawResults as Array<{ _id: any; score: number }>).map((doc) => ({
      id: typeof doc._id === 'string' ? doc._id : doc._id?.$oid ?? String(doc._id),
      score: doc.score ?? 0,
    }));

    const idsOrdered = idsWithScore.map((d) => d.id);

    const themeIdsFromSearch = matchedThemes.map((theme) => theme.id);
    let themeExerciseIds: string[] = [];
    if (themeIdsFromSearch.length > 0) {
      const themeSearchWhere: Prisma.ExerciseWhereInput = {
        ...baseWhere,
        AND: [
          { themeIds: { hasSome: themeIdsFromSearch } },
          ...(themeFilterWhere ? [themeFilterWhere] : []),
        ],
      };

      const themeExercises = await prisma.exercise.findMany({
        where: themeSearchWhere,
        select: { id: true },
      });

      themeExerciseIds = themeExercises.map((ex) => ex.id);
    }

    const combinedIds = [
      ...idsOrdered,
      ...themeExerciseIds.filter((id) => !idsOrdered.includes(id)),
    ];

    if (combinedIds.length === 0) {
      return { items: [], total: 0, page: safePage, pageSize: safePageSize };
    }

    // On applique les autres filtres (diplôme, matière, année) via Prisma
    const filteredExercises = await prisma.exercise.findMany({
      where: {
        ...where,
        id: { in: combinedIds },
      },
      include: {
        examPaper: {
          include: {
            diploma: true,
            division: true,
            grade: true,
            teaching: {
              include: {
                subject: true,
              },
            },
          },
        },
        corrections: true,
      },
    });

    // Trie selon l'ordre de score text
    const byId = new Map(filteredExercises.map((ex) => [ex.id, ex]));
    const sorted = combinedIds
      .map((id) => byId.get(id))
      .filter((ex): ex is NonNullable<typeof ex> => ex !== undefined);

    const total = sorted.length;
    const paginated = sorted.slice(offset, offset + safePageSize);

    // Récupération des thèmes en batch
    const allThemeIds = paginated.flatMap((ex) => ex.themeIds);
    const uniqueThemeIds = [...new Set(allThemeIds)];

    const themesList = await prisma.theme.findMany({
      where: {
        id: { in: uniqueThemeIds },
      },
    });

    const themesById = new Map(themesList.map((t) => [t.id, t]));

    const items = paginated.map((exercise) => ({
      ...exercise,
      themes: exercise.themeIds
        .map((id) => themesById.get(id))
        .filter((t): t is NonNullable<typeof t> => t !== undefined),
    })) as unknown as ExerciseWithRelations[];

    return { items, total, page: safePage, pageSize: safePageSize };
  }

  // Construction du tri (cas sans recherche textuelle)
  let orderBy: any = {};
  switch (sortBy) {
    case 'year':
      orderBy = { examPaper: { sessionYear: sortOrder } };
      break;
    case 'difficulty':
      orderBy = { estimatedDifficulty: sortOrder };
      break;
    case 'duration':
      orderBy = { estimatedDuration: sortOrder };
      break;
  }

  const [exercises, total] = await Promise.all([
    prisma.exercise.findMany({
      where,
      include: {
        examPaper: {
          include: {
            diploma: true,
            division: true,
            grade: true,
            teaching: {
              include: {
                subject: true,
              },
            },
          },
        },
        corrections: true,
      },
      orderBy,
      take: limit ?? safePageSize,
      skip: limit ? undefined : offset,
    }),
    prisma.exercise.count({ where }),
  ]);

  // Récupération des thèmes en batch
  const allThemeIds = exercises.flatMap((ex) => ex.themeIds);
  const uniqueThemeIds = [...new Set(allThemeIds)];

  const themesList = await prisma.theme.findMany({
    where: {
      id: { in: uniqueThemeIds },
    },
  });

  const themesById = new Map(themesList.map((t) => [t.id, t]));

  const items = exercises.map((exercise) => ({
    ...exercise,
    themes: exercise.themeIds
      .map((id) => themesById.get(id))
      .filter((t): t is NonNullable<typeof t> => t !== undefined),
  })) as unknown as ExerciseWithRelations[];

  return { items, total, page: safePage, pageSize: safePageSize };
}

/**
 * Suggestions basées sur le titre/label/keywords (autocomplete simplifié)
 */
export async function suggestExercises(
  query: string,
  limit = 8
): Promise<SearchSuggestion[]> {
  const cleaned = query.trim();
  if (cleaned.length < 2) return [];

  const lower = cleaned.toLowerCase();

  const themeLimit =
    limit <= 1 ? 0 : Math.min(3, Math.max(1, Math.round(limit / 4)));
  const exerciseLimit = Math.max(0, limit - themeLimit);

  const [exerciseSuggestions, themeSuggestions] = await Promise.all([
    exerciseLimit > 0
      ? prisma.exercise.findMany({
          where: {
            enrichmentStatus: 'completed',
            OR: [
              { title: { startsWith: cleaned, mode: 'insensitive' } },
              { label: { startsWith: cleaned, mode: 'insensitive' } },
              { keywords: { has: lower } },
            ],
          },
          include: {
            examPaper: {
              include: {
                teaching: {
                  include: {
                    subject: true,
                  },
                },
              },
            },
          },
          take: exerciseLimit,
        })
      : Promise.resolve([]),
    themeLimit > 0
      ? prisma.theme.findMany({
          where: {
            OR: [
              { longDescription: { contains: cleaned, mode: 'insensitive' } },
              { shortDescription: { contains: cleaned, mode: 'insensitive' } },
            ],
          },
          take: themeLimit,
        })
      : Promise.resolve([]),
  ]);

  return [
    ...exerciseSuggestions.map<SearchSuggestion>((s) => ({
      type: 'exercise',
      id: s.id,
      title: s.title ?? s.label ?? 'Exercice',
      label: s.label,
      examPaperLabel: s.examPaper.label,
      sessionYear: s.examPaper.sessionYear,
      subject: s.examPaper.teaching.subject.shortDescription,
    })),
    ...themeSuggestions.map<SearchSuggestion>((theme) => ({
      type: 'theme',
      id: `theme:${theme.id}`,
      title: theme.longDescription || theme.shortDescription || 'Thème',
    })),
  ];
}

/**
 * Récupérer un exercice par son ID
 */
export async function fetchExerciseById(
  id: string
): Promise<ExerciseWithRelations | null> {
  const exercise = await prisma.exercise.findUnique({
    where: { id },
    include: {
      examPaper: {
        include: {
          diploma: true,
          division: true,
          grade: true,
          teaching: {
            include: {
              subject: true,
              grade: true,
            },
          },
        },
      },
      corrections: true,
    },
  });

  if (!exercise) return null;

  // Récupération des thèmes
  const themesList = await prisma.theme.findMany({
    where: {
      id: { in: exercise.themeIds },
    },
  });

  return {
    ...exercise,
    themes: themesList,
  } as ExerciseWithRelations;
}

/**
 * Récupérer tous les exercices d'un sujet
 */
export async function fetchExercisesByExamPaperId(
  examPaperId: string
): Promise<ExerciseWithRelations[]> {
  const exercises = await prisma.exercise.findMany({
    where: { examPaperId },
    include: {
      examPaper: {
        include: {
          diploma: true,
          division: true,
          grade: true,
          teaching: {
            include: {
              subject: true,
              grade: true,
            },
          },
        },
      },
      corrections: true,
    },
    orderBy: { exerciseNumber: 'asc' },
  });

  // Récupération des thèmes en batch
  const allThemeIds = exercises.flatMap((ex) => ex.themeIds);
  const uniqueThemeIds = [...new Set(allThemeIds)];

  const themesList = await prisma.theme.findMany({
    where: {
      id: { in: uniqueThemeIds },
    },
  });

  const themesById = new Map(themesList.map((t) => [t.id, t]));

  return exercises.map((exercise) => ({
    ...exercise,
    themes: exercise.themeIds
      .map((id) => themesById.get(id))
      .filter((t): t is NonNullable<typeof t> => t !== undefined),
  })) as ExerciseWithRelations[];
}
