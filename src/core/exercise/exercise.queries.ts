/**
 * Queries pour les exercices d'annales
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface ExerciseWithRelations {
  id: string;
  exerciseNumber: number;
  label: string | null;
  points: number | null;
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
    sessionMonth: string | null;
    subjectUrl: string | null;
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
  difficulty?: number;
  themes?: string[];
  year?: number;
  search?: string;
  sortBy?: 'year' | 'difficulty' | 'duration';
  sortOrder?: 'asc' | 'desc';
  limit?: number;
}

/**
 * Recherche d'exercices avec filtres
 */
export async function searchExercises(
  params: SearchExercisesParams = {}
): Promise<ExerciseWithRelations[]> {
  const {
    diploma,
    subject,
    difficulty,
    themes: themeFilters = [],
    year,
    search,
    sortBy = 'year',
    sortOrder = 'desc',
    limit,
  } = params;

  // Construction du filtre Prisma
  const where: any = {
    enrichmentStatus: 'completed', // Seulement les exercices enrichis
  };

  // Filtre par diplôme
  if (diploma) {
    where.examPaper = {
      ...where.examPaper,
      diploma: {
        shortDescription: {
          contains: diploma,
          mode: 'insensitive',
        },
      },
    };
  }

  // Filtre par matière
  if (subject) {
    where.examPaper = {
      ...where.examPaper,
      teaching: {
        subject: {
          shortDescription: {
            contains: subject,
            mode: 'insensitive',
          },
        },
      },
    };
  }

  // Filtre par difficulté
  if (difficulty) {
    where.estimatedDifficulty = difficulty;
  }

  // Filtre par thèmes (au moins un thème correspondant)
  if (themeFilters.length > 0) {
    where.themeIds = {
      hasSome: themeFilters,
    };
  }

  // Filtre par année
  if (year) {
    where.examPaper = {
      ...where.examPaper,
      sessionYear: year,
    };
  }

  // Recherche textuelle (label, titre, énoncé, résumé, mots-clés)
  if (search && search.trim()) {
    where.OR = [
      { label: { contains: search, mode: 'insensitive' } },
      { title: { contains: search, mode: 'insensitive' } },
      { statement: { contains: search, mode: 'insensitive' } },
      { summary: { contains: search, mode: 'insensitive' } },
      { keywords: { hasSome: [search.toLowerCase()] } },
    ];
  }

  // Construction du tri
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

  // Exécution de la requête
  const exercises = await prisma.exercise.findMany({
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
    take: limit,
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

  // Enrichissement avec les thèmes
  return exercises.map((exercise) => ({
    ...exercise,
    themes: exercise.themeIds
      .map((id) => themesById.get(id))
      .filter((t): t is NonNullable<typeof t> => t !== undefined),
  })) as unknown as ExerciseWithRelations[];
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
