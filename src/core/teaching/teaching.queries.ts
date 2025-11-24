import prisma from '@/lib/db/prisma';
import { Teaching } from '@prisma/client';
import { TeachingWithRelations, TeachingsByGrade } from './teaching.types';
import type { Option } from '@/types/option';

/**
 * Récupère tous les enseignements avec leurs relations Grade et Subject
 */
export async function fetchTeachings(): Promise<TeachingWithRelations[]> {
  return await prisma.teaching.findMany({
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
export async function fetchTeachingsOptions(): Promise<Option[]> {
  const teachings = await prisma.teaching.findMany({
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
  gradeId: string
): Promise<TeachingWithRelations[]> {
  return await prisma.teaching.findMany({
    where: {
      gradeId,
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
      grade: {
        shortDescription: {
          in: ['1re', 'Tle'],
        },
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
