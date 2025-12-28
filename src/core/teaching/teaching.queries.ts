import prisma from '@/lib/db/prisma';
import { TeachingWithRelations, TeachingsByGrade } from './teaching.types';
import type { Option } from '@/types/option';

type TeachingQueryOptions = {
  includeInactive?: boolean;
};

/**
 * Récupère tous les enseignements avec leurs relations Grade et Subject
 */
export async function fetchTeachings(
  options: TeachingQueryOptions = {}
): Promise<TeachingWithRelations[]> {
  return await prisma.teaching.findMany({
    where: options.includeInactive ? undefined : { isActive: true },
    include: {
      grade: true,
      subject: true,
    },
    orderBy: [
      {
        grade: {
          shortDescription: 'desc',
        },
      },
      {
        longDescription: 'asc',
      },
    ],
  });
}

/**
 * Récupère tous les enseignements sous forme d'options pour les formulaires
 */
export async function fetchTeachingsOptions(
  options: TeachingQueryOptions = {}
): Promise<Option[]> {
  const teachings = await prisma.teaching.findMany({
    where: options.includeInactive ? undefined : { isActive: true },
    include: {
      grade: {
        select: {
          shortDescription: true,
        },
      },
      subject: {
        select: {
          shortDescription: true,
        },
      },
    },
    orderBy: [
      {
        grade: {
          shortDescription: 'desc',
        },
      },
      {
        longDescription: 'asc',
      },
    ],
  });

  return teachings.map((teaching) => ({
    value: teaching.id,
    label: `${teaching.grade.shortDescription} - ${teaching.longDescription}`,
  }));
}

/**
 * Récupère les enseignements groupés par niveau (Grade)
 * Utile pour afficher les enseignements de Première, Terminale, etc.
 */
export async function fetchTeachingsByGrade(): Promise<TeachingsByGrade[]> {
  // Récupérer tous les grades avec leurs enseignements
  const grades = await prisma.grade.findMany({
    include: {
      teachings: {
        where: { isActive: true },
        include: {
          subject: true,
          grade: true,
        },
        orderBy: {
          longDescription: 'asc',
        },
      },
    },
    orderBy: {
      shortDescription: 'asc',
    },
  });

  return grades
    .filter((grade) => grade.teachings.length > 0)
    .map((grade) => ({
      grade: {
        id: grade.id,
        longDescription: grade.longDescription,
        shortDescription: grade.shortDescription,
        createdAt: grade.createdAt,
        updatedAt: grade.updatedAt,
      },
      teachings: grade.teachings,
    }));
}

/**
 * Récupère les enseignements d'un niveau spécifique (ex: Terminale)
 */
export async function fetchTeachingsByGradeId(
  gradeId: string,
  options: TeachingQueryOptions = {}
): Promise<TeachingWithRelations[]> {
  return await prisma.teaching.findMany({
    where: {
      gradeId,
      ...(options.includeInactive ? {} : { isActive: true }),
    },
    include: {
      grade: true,
      subject: true,
    },
    orderBy: {
      longDescription: 'asc',
    },
  });
}

/**
 * Récupère les enseignements de lycée (2de, 1re, Tle) pour l'accueil
 * Filtre les spécialités et options principales
 */
export async function fetchLyceeTeachings(): Promise<TeachingsByGrade[]> {
  const lyceeGrades = await prisma.grade.findMany({
    where: {
      shortDescription: {
        in: ['2de', '1re', 'Tle'],
      },
    },
    include: {
      teachings: {
        where: { isActive: true },
        include: {
          subject: true,
          grade: true,
        },
        orderBy: {
          longDescription: 'asc',
        },
      },
    },
    orderBy: {
      shortDescription: 'desc', // Tle, 1re, 2de
    },
  });

  return lyceeGrades
    .filter((grade) => grade.teachings.length > 0)
    .map((grade) => ({
      grade: {
        id: grade.id,
        longDescription: grade.longDescription,
        shortDescription: grade.shortDescription,
        createdAt: grade.createdAt,
        updatedAt: grade.updatedAt,
      },
      teachings: grade.teachings,
    }));
}

/**
 * Récupère un enseignement par son ID avec ses relations
 */
export async function fetchTeachingById(
  id: string
): Promise<TeachingWithRelations | null> {
  return await prisma.teaching.findUnique({
    where: {
      id,
    },
    include: {
      grade: true,
      subject: true,
    },
  });
}

/**
 * Récupère les spécialités (pour Première et Terminale)
 */
export async function fetchSpecialties(): Promise<TeachingWithRelations[]> {
  return await prisma.teaching.findMany({
    where: {
      longDescription: {
        startsWith: 'Spécialité',
      },
      isActive: true,
      grade: {
        shortDescription: {
          in: ['1re', 'Tle'],
        },
      },
      subject: {
        isActive: true,
      },
    },
    include: {
      grade: true,
      subject: true,
    },
    orderBy: [
      {
        grade: {
          shortDescription: 'desc', // Terminale avant Première
        },
      },
      {
        longDescription: 'asc',
      },
    ],
  });
}
