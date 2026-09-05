import prisma from '@/lib/db/prisma';
import { getCurrentUserAcademicEnrollment } from '@/core/academic-enrollment';
import type { UserAcademicEnrollment } from '@prisma/client';

export class PedagogicalAccessError extends Error {
  readonly code: 'UNAUTHENTICATED' | 'ONBOARDING_REQUIRED' | 'FORBIDDEN_SCOPE';
  readonly statusCode: 401 | 403;

  constructor(
    message: string,
    code: 'UNAUTHENTICATED' | 'ONBOARDING_REQUIRED' | 'FORBIDDEN_SCOPE',
    statusCode: 401 | 403 = 403
  ) {
    super(message);
    this.name = 'PedagogicalAccessError';
    this.code = code;
    this.statusCode = statusCode;
  }
}

/**
 * Mapping canonique entre le champ libre historique chapter.level et le shortDescription du Grade.
 */
const CANONICAL_LEVEL_TO_GRADE_SHORT: Record<string, string> = {
  terminale: 'Tle',
  tle: 'Tle',
  premiere: '1re',
  '1re': '1re',
  seconde: '2de',
  '2de': '2de',
  troisieme: '3e',
  '3e': '3e',
  quatrieme: '4e',
  '4e': '4e',
  cinquieme: '5e',
  '5e': '5e',
  sixieme: '6e',
  '6e': '6e',
};

/**
 * Guard canonique pour les contenus du Secondaire.
 * L'autorité d'accès est le niveau scolaire (gradeId).
 */
export async function assertUserCanAccessSecondaryContent(params: {
  userId: string | null | undefined;
  gradeId: string;
  date?: Date;
}): Promise<UserAcademicEnrollment> {
  if (!params.userId) {
    throw new PedagogicalAccessError(
      'Authentification requise.',
      'UNAUTHENTICATED',
      401
    );
  }

  const enrollment = await getCurrentUserAcademicEnrollment(params.userId, params.date);

  if (!enrollment) {
    throw new PedagogicalAccessError(
      'Affectation scolaire requise pour l’année active.',
      'ONBOARDING_REQUIRED',
      403
    );
  }

  if (enrollment.audience !== 'SECONDARY') {
    throw new PedagogicalAccessError(
      'Accès réservé aux élèves inscrits dans le secondaire.',
      'FORBIDDEN_SCOPE',
      403
    );
  }

  if (enrollment.secondaryGradeId !== params.gradeId) {
    throw new PedagogicalAccessError(
      'Accès non autorisé aux contenus de ce niveau scolaire.',
      'FORBIDDEN_SCOPE',
      403
    );
  }

  return enrollment;
}

/**
 * Guard canonique pour les contenus de la filière Santé.
 * L'autorité d'accès est la maquette (programVersionId) et le parcours (pathwayId).
 */
export async function assertUserCanAccessHealthContent(params: {
  userId: string | null | undefined;
  programVersionId: string;
  pathwayId?: string | null;
  isCommonToAllPathways?: boolean;
  date?: Date;
}): Promise<UserAcademicEnrollment> {
  if (!params.userId) {
    throw new PedagogicalAccessError(
      'Authentification requise.',
      'UNAUTHENTICATED',
      401
    );
  }

  const enrollment = await getCurrentUserAcademicEnrollment(params.userId, params.date);

  if (!enrollment) {
    throw new PedagogicalAccessError(
      'Affectation scolaire requise pour l’année active.',
      'ONBOARDING_REQUIRED',
      403
    );
  }

  if (enrollment.audience !== 'HEALTH') {
    throw new PedagogicalAccessError(
      'Accès réservé aux étudiants de la filière Santé.',
      'FORBIDDEN_SCOPE',
      403
    );
  }

  if (enrollment.healthProgramVersionId !== params.programVersionId) {
    throw new PedagogicalAccessError(
      'Accès non autorisé aux contenus de cette formation Santé.',
      'FORBIDDEN_SCOPE',
      403
    );
  }

  // Règle de parcours (fail-closed strict) :
  // Si isCommonToAllPathways === true -> autorisé, sous réserve de la bonne ProgramVersion.
  // Sinon :
  // - params.pathwayId doit être non null ;
  // - enrollment.healthPathwayId doit être non null ;
  // - les deux doivent être strictement égaux.
  // Dans tous les autres cas -> FORBIDDEN_SCOPE.
  if (!params.isCommonToAllPathways) {
    if (
      !params.pathwayId ||
      !enrollment.healthPathwayId ||
      enrollment.healthPathwayId !== params.pathwayId
    ) {
      throw new PedagogicalAccessError(
        'Accès non autorisé aux contenus de ce parcours spécifique.',
        'FORBIDDEN_SCOPE',
        403
      );
    }
  }

  return enrollment;
}

/**
 * Guard polymorphe pour un Chapitre (Secondaire ou Santé).
 */
export async function assertUserCanAccessChapter(params: {
  userId: string | null | undefined;
  chapterId: string;
  date?: Date;
}): Promise<UserAcademicEnrollment> {
  if (!params.userId) {
    throw new PedagogicalAccessError(
      'Authentification requise.',
      'UNAUTHENTICATED',
      401
    );
  }

  const chapter = await prisma.chapter.findUnique({
    where: { id: params.chapterId },
    include: {
      assignments: true,
    },
  });

  if (!chapter) {
    throw new PedagogicalAccessError('Chapitre introuvable.', 'FORBIDDEN_SCOPE', 403);
  }

  // Vérifier si le chapitre est rattaché à Santé
  const healthAssignments = chapter.assignments.filter(
    (a) =>
      a.vertical === 'HEALTH' &&
      (a.contextType === 'HEALTH_COURSE_UNIT' ||
        a.contextType === 'HEALTH_TEACHING_ELEMENT')
  );

  if (chapter.vertical === 'HEALTH' || healthAssignments.length > 0) {
    const courseUnits: Array<{
      programVersionId: string;
      pathwayId: string | null;
      isCommonToAllPathways: boolean;
    }> = [];

    for (const assignment of healthAssignments) {
      if (assignment.contextType === 'HEALTH_COURSE_UNIT') {
        const cu = await prisma.healthCourseUnit.findUnique({
          where: { id: assignment.contextId },
          select: {
            programVersionId: true,
            pathwayId: true,
            isCommonToAllPathways: true,
          },
        });
        if (cu) courseUnits.push(cu);
      } else if (assignment.contextType === 'HEALTH_TEACHING_ELEMENT') {
        const te = await prisma.healthTeachingElement.findUnique({
          where: { id: assignment.contextId },
          select: {
            courseUnit: {
              select: {
                programVersionId: true,
                pathwayId: true,
                isCommonToAllPathways: true,
              },
            },
          },
        });
        if (te?.courseUnit) courseUnits.push(te.courseUnit);
      }
    }

    if (courseUnits.length > 0) {
      const enrollment = await getCurrentUserAcademicEnrollment(params.userId, params.date);
      if (!enrollment) {
        throw new PedagogicalAccessError(
          'Affectation pédagogique requise pour accéder à cette ressource.',
          'ONBOARDING_REQUIRED',
          403
        );
      }

      if (enrollment.audience !== 'HEALTH' || !enrollment.healthProgramVersionId) {
        throw new PedagogicalAccessError(
          'Accès réservé aux étudiants de la filière Santé.',
          'FORBIDDEN_SCOPE',
          403
        );
      }

      // Chercher l'unité d'enseignement correspondant à la version de programme de l'inscription
      const matchingCu = courseUnits.find(
        (cu) => cu.programVersionId === enrollment.healthProgramVersionId
      );

      if (!matchingCu) {
        throw new PedagogicalAccessError(
          'Accès non autorisé aux contenus de cette formation Santé.',
          'FORBIDDEN_SCOPE',
          403
        );
      }

      return assertUserCanAccessHealthContent({
        userId: params.userId,
        programVersionId: matchingCu.programVersionId,
        pathwayId: matchingCu.pathwayId,
        isCommonToAllPathways: matchingCu.isCommonToAllPathways,
        date: params.date,
      });
    }
  }

  // Sinon, traitement Secondaire
  // Déterminer le gradeId
  let targetGradeId: string | null = null;

  // 1. Déduire d'abord depuis chapter.level (niveau explicite du chapitre)
  if (chapter.level) {
    const normalized = chapter.level.trim().toLowerCase();
    const shortDesc = CANONICAL_LEVEL_TO_GRADE_SHORT[normalized] ?? normalized;
    const grade = await prisma.grade.findFirst({
      where: {
        OR: [
          { shortDescription: { equals: shortDesc, mode: 'insensitive' } },
          { longDescription: { equals: normalized, mode: 'insensitive' } },
        ],
      },
      select: { id: true },
    });
    if (grade) {
      targetGradeId = grade.id;
    }
  }

  // 2. Si non résolu, chercher un assignment vers un Teaching
  if (!targetGradeId) {
    const teachingAssignment = chapter.assignments.find(
      (a) => a.vertical === 'SECONDARY' && a.contextType === 'SUBJECT'
    );

    if (teachingAssignment) {
      const teaching = await prisma.teaching.findFirst({
        where: { subjectId: chapter.subjectId },
        select: { gradeId: true },
      });
      if (teaching) {
        targetGradeId = teaching.gradeId;
      }
    }
  }

  if (!targetGradeId) {
    throw new PedagogicalAccessError(
      'Niveau scolaire du chapitre indéterminé.',
      'FORBIDDEN_SCOPE',
      403
    );
  }

  return assertUserCanAccessSecondaryContent({
    userId: params.userId,
    gradeId: targetGradeId,
    date: params.date,
  });
}

/**
 * Guard pour une Annales / Sujet d'examen (Secondaire).
 */
export async function assertUserCanAccessExamPaper(params: {
  userId: string | null | undefined;
  examPaperId: string;
  date?: Date;
}): Promise<UserAcademicEnrollment> {
  const examPaper = await prisma.examPaper.findUnique({
    where: { id: params.examPaperId },
    select: { gradeId: true },
  });

  if (!examPaper) {
    throw new PedagogicalAccessError('Sujet introuvable.', 'FORBIDDEN_SCOPE', 403);
  }

  return assertUserCanAccessSecondaryContent({
    userId: params.userId,
    gradeId: examPaper.gradeId,
    date: params.date,
  });
}

/**
 * Guard pour un Exercice (Secondaire).
 */
export async function assertUserCanAccessExercise(params: {
  userId: string | null | undefined;
  exerciseId: string;
  date?: Date;
}): Promise<UserAcademicEnrollment> {
  const exercise = await prisma.exercise.findUnique({
    where: { id: params.exerciseId },
    select: {
      examPaper: {
        select: { gradeId: true },
      },
    },
  });

  if (!exercise) {
    throw new PedagogicalAccessError('Exercice introuvable.', 'FORBIDDEN_SCOPE', 403);
  }

  return assertUserCanAccessSecondaryContent({
    userId: params.userId,
    gradeId: exercise.examPaper.gradeId,
    date: params.date,
  });
}

/**
 * Guard pour une UE Santé (résolution par ObjectId ou slug/code).
 */
export async function assertUserCanAccessHealthCourseUnit(params: {
  userId: string | null | undefined;
  courseUnitId: string;
  date?: Date;
}): Promise<UserAcademicEnrollment> {
  const isObjectId = /^[a-f0-9]{24}$/i.test(params.courseUnitId);

  let scopedProgramVersionId: string | undefined;
  if (!isObjectId && params.userId) {
    const userEnrollment = await getCurrentUserAcademicEnrollment(params.userId, params.date);
    if (userEnrollment?.audience === 'HEALTH' && userEnrollment.healthProgramVersionId) {
      scopedProgramVersionId = userEnrollment.healthProgramVersionId;
    }
  }

  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: isObjectId
      ? { id: params.courseUnitId }
      : {
          ...(scopedProgramVersionId ? { programVersionId: scopedProgramVersionId } : {}),
          OR: [
            { slug: params.courseUnitId },
            { slug: { startsWith: params.courseUnitId } },
            { code: { equals: params.courseUnitId, mode: 'insensitive' } },
          ],
        },
    select: {
      programVersionId: true,
      pathwayId: true,
      isCommonToAllPathways: true,
    },
  });

  if (!courseUnit) {
    throw new PedagogicalAccessError('UE Santé introuvable.', 'FORBIDDEN_SCOPE', 403);
  }

  return assertUserCanAccessHealthContent({
    userId: params.userId,
    programVersionId: courseUnit.programVersionId,
    pathwayId: courseUnit.pathwayId,
    isCommonToAllPathways: courseUnit.isCommonToAllPathways,
    date: params.date,
  });
}

/**
 * Guard pour une Colle ou un Examen Blanc Santé (résolution par ObjectId ou slug).
 */
export async function assertUserCanAccessHealthMockExam(params: {
  userId: string | null | undefined;
  mockExamId: string;
  date?: Date;
}): Promise<UserAcademicEnrollment> {
  const isObjectId = /^[a-f0-9]{24}$/i.test(params.mockExamId);

  let scopedProgramVersionId: string | undefined;
  if (!isObjectId && params.userId) {
    const userEnrollment = await getCurrentUserAcademicEnrollment(params.userId, params.date);
    if (userEnrollment?.audience === 'HEALTH' && userEnrollment.healthProgramVersionId) {
      scopedProgramVersionId = userEnrollment.healthProgramVersionId;
    }
  }

  const mockExam = await prisma.healthMockExam.findFirst({
    where: isObjectId
      ? { id: params.mockExamId }
      : {
          ...(scopedProgramVersionId
            ? { courseUnit: { programVersionId: scopedProgramVersionId } }
            : {}),
          OR: [
            { slug: params.mockExamId },
            { slug: { startsWith: params.mockExamId } },
          ],
        },
    select: {
      courseUnit: {
        select: {
          programVersionId: true,
          pathwayId: true,
          isCommonToAllPathways: true,
        },
      },
    },
  });

  if (!mockExam) {
    throw new PedagogicalAccessError(
      'Évaluation Santé introuvable.',
      'FORBIDDEN_SCOPE',
      403
    );
  }

  return assertUserCanAccessHealthContent({
    userId: params.userId,
    programVersionId: mockExam.courseUnit.programVersionId,
    pathwayId: mockExam.courseUnit.pathwayId,
    isCommonToAllPathways: mockExam.courseUnit.isCommonToAllPathways,
    date: params.date,
  });
}
