import prisma from '@/lib/db/prisma';
import { Course } from '@prisma/client';
import { CourseWithRelations, CoursesByGrade } from './course.types';

/**
 * Récupère tous les cours avec leurs relations Grade et Subject
 */
export async function fetchCourses(): Promise<CourseWithRelations[]> {
  return await prisma.course.findMany({
    include: {
      grade: true,
      subject: true,
    },
    orderBy: [
      {
        name: 'asc',
      },
    ],
  });
}

/**
 * Récupère les cours groupés par niveau (Grade)
 * Utile pour afficher les cours de Première, Terminale, etc.
 */
export async function fetchCoursesByGrade(): Promise<CoursesByGrade[]> {
  // Récupérer tous les grades avec leurs cours
  const grades = await prisma.grade.findMany({
    include: {
      courses: {
        include: {
          subject: true,
          grade: true,
        },
        orderBy: {
          name: 'asc',
        },
      },
    },
    orderBy: {
      shortDescription: 'asc',
    },
  });

  return grades
    .filter((grade) => grade.courses.length > 0)
    .map((grade) => ({
      grade: {
        id: grade.id,
        longDescription: grade.longDescription,
        shortDescription: grade.shortDescription,
        createdAt: grade.createdAt,
        updatedAt: grade.updatedAt,
      },
      courses: grade.courses,
    }));
}

/**
 * Récupère les cours d'un niveau spécifique (ex: Terminale)
 */
export async function fetchCoursesByGradeId(
  gradeId: string
): Promise<CourseWithRelations[]> {
  return await prisma.course.findMany({
    where: {
      gradeId,
    },
    include: {
      grade: true,
      subject: true,
    },
    orderBy: {
      name: 'asc',
    },
  });
}

/**
 * Récupère les cours de lycée (2de, 1re, Tle) pour l'accueil
 * Filtre les spécialités et options principales
 */
export async function fetchLyceeCourses(): Promise<CoursesByGrade[]> {
  const lyceeGrades = await prisma.grade.findMany({
    where: {
      shortDescription: {
        in: ['2de', '1re', 'Tle'],
      },
    },
    include: {
      courses: {
        include: {
          subject: true,
          grade: true,
        },
        orderBy: {
          name: 'asc',
        },
      },
    },
    orderBy: {
      shortDescription: 'desc', // Tle, 1re, 2de
    },
  });

  return lyceeGrades
    .filter((grade) => grade.courses.length > 0)
    .map((grade) => ({
      grade: {
        id: grade.id,
        longDescription: grade.longDescription,
        shortDescription: grade.shortDescription,
        createdAt: grade.createdAt,
        updatedAt: grade.updatedAt,
      },
      courses: grade.courses,
    }));
}

/**
 * Récupère un cours par son ID avec ses relations
 */
export async function fetchCourseById(
  id: string
): Promise<CourseWithRelations | null> {
  return await prisma.course.findUnique({
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
export async function fetchSpecialties(): Promise<CourseWithRelations[]> {
  return await prisma.course.findMany({
    where: {
      name: {
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
        name: 'asc',
      },
    ],
  });
}
