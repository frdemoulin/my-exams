import prisma from '@/lib/db/prisma';
import { getActiveAcademicYear } from '@/core/academic-year';
import type { AcademicYear, HealthProgramType, HealthStudyLevel } from '@prisma/client';
import { resolveSecondarySchoolSegment, type SecondarySchoolSegment } from './academic-enrollment.segments';

export type AvailableGradeOption = {
  id: string;
  shortDescription: string;
  longDescription: string;
  segment: SecondarySchoolSegment;
};

export type AvailableHealthPathwayOption = {
  id: string;
  name: string;
  slug: string;
  campus?: string | null;
  order: number;
};

export type AvailableHealthProgramVersionOption = {
  id: string;
  label: string;
  slug: string;
  academicYear: string;
  studyLevel: HealthStudyLevel;
  program: {
    id: string;
    code: string;
    label: string;
    type: HealthProgramType;
  };
  pathways: AvailableHealthPathwayOption[];
};

export type AvailableHealthInstitutionOption = {
  id: string;
  name: string;
  shortName: string | null;
  slug: string;
  uaiCode?: string | null;
  programVersions: AvailableHealthProgramVersionOption[];
};

export type AvailableAcademicEnrollmentOptions = {
  academicYear: AcademicYear;
  secondary: {
    grades: AvailableGradeOption[];
    collegeGrades: AvailableGradeOption[];
    lyceeGrades: AvailableGradeOption[];
  };
  health: {
    institutions: AvailableHealthInstitutionOption[];
  };
};

const SECONDARY_ORDER_MAP: Record<string, number> = {
  '6e': 1,
  '5e': 2,
  '4e': 3,
  '3e': 4,
  '2de': 5,
  '1re': 6,
  'tle': 7,
};

/**
 * Charge les options d'affectation académique canoniques pour l'onboarding et la validation.
 * Garantit que l'UI et la Server Action partagent rigoureusement les mêmes règles de sélection.
 */
export async function getAvailableAcademicEnrollmentOptions(
  date: Date = new Date()
): Promise<AvailableAcademicEnrollmentOptions> {
  const activeYear = await getActiveAcademicYear(date);

  // 1. Niveaux du Secondaire (exclut les niveaux non supportés comme BTS)
  const allGrades = await prisma.grade.findMany({
    select: {
      id: true,
      shortDescription: true,
      longDescription: true,
    },
  });

  const availableGrades: AvailableGradeOption[] = [];
  for (const grade of allGrades) {
    const segment = resolveSecondarySchoolSegment(grade);
    if (segment) {
      availableGrades.push({
        id: grade.id,
        shortDescription: grade.shortDescription,
        longDescription: grade.longDescription,
        segment,
      });
    }
  }

  availableGrades.sort((a, b) => {
    const orderA = SECONDARY_ORDER_MAP[a.shortDescription.toLowerCase()] ?? 99;
    const orderB = SECONDARY_ORDER_MAP[b.shortDescription.toLowerCase()] ?? 99;
    return orderA - orderB;
  });

  const collegeGrades = availableGrades.filter((g) => g.segment === 'COLLEGE');
  const lyceeGrades = availableGrades.filter((g) => g.segment === 'LYCEE');

  // 2. Établissements et formations Santé (L1, année active, actifs et publiés)
  const healthInstitutions = await prisma.healthInstitution.findMany({
    where: {
      isActive: true,
      isPublished: true,
      programVersions: {
        some: {
          isActive: true,
          isPublished: true,
          academicYear: activeYear.code,
          studyLevel: 'L1',
          program: {
            isActive: true,
            isPublished: true,
          },
        },
      },
    },
    select: {
      id: true,
      name: true,
      shortName: true,
      slug: true,
      uaiCode: true,
      programVersions: {
        where: {
          isActive: true,
          isPublished: true,
          academicYear: activeYear.code,
          studyLevel: 'L1',
          program: {
            isActive: true,
            isPublished: true,
          },
        },
        select: {
          id: true,
          label: true,
          slug: true,
          academicYear: true,
          studyLevel: true,
          program: {
            select: {
              id: true,
              code: true,
              label: true,
              type: true,
            },
          },
          pathways: {
            where: {
              isActive: true,
              isPublished: true,
            },
            select: {
              id: true,
              name: true,
              slug: true,
              campus: true,
              order: true,
            },
            orderBy: { order: 'asc' },
          },
        },
      },
    },
    orderBy: [{ shortName: 'asc' }, { name: 'asc' }],
  });

  return {
    academicYear: activeYear,
    secondary: {
      grades: availableGrades,
      collegeGrades,
      lyceeGrades,
    },
    health: {
      institutions: healthInstitutions,
    },
  };
}
