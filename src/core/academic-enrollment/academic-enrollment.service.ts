import prisma from '@/lib/db/prisma';
import { getActiveAcademicYear } from '@/core/academic-year';
import { assertAdminFromSession } from '@/lib/auth/assert-admin-session';
import type {
  AcademicEnrollmentSource,
  Prisma,
  UserAcademicEnrollment,
  UserPedagogicalAudience,
} from '@prisma/client';

export class AcademicEnrollmentError extends Error {
  readonly code:
    | 'ONBOARDING_REQUIRED'
    | 'ALREADY_ENROLLED'
    | 'LOCKED'
    | 'INVALID_SCOPE'
    | 'NOT_FOUND'
    | 'REASON_REQUIRED'
    | 'UNAUTHENTICATED';

  constructor(
    message: string,
    code:
      | 'ONBOARDING_REQUIRED'
      | 'ALREADY_ENROLLED'
      | 'LOCKED'
      | 'INVALID_SCOPE'
      | 'NOT_FOUND'
      | 'REASON_REQUIRED'
      | 'UNAUTHENTICATED'
  ) {
    super(message);
    this.name = 'AcademicEnrollmentError';
    this.code = code;
  }
}

export type CreateEnrollmentInput = {
  userId: string;
  audience: UserPedagogicalAudience;
  secondaryGradeId?: string | null;
  secondaryTeachingIds?: string[];
  healthProgramVersionId?: string | null;
  healthPathwayId?: string | null;
  createdBy: AcademicEnrollmentSource;
  date?: Date;
};

export type OnboardingEnrollmentChoicesInput = {
  audience: UserPedagogicalAudience;
  secondaryGradeId?: string | null;
  secondaryTeachingIds?: string[];
  healthProgramVersionId?: string | null;
  healthPathwayId?: string | null;
  date?: Date;
};

export type AdminCorrectEnrollmentInput = {
  enrollmentId: string;
  reason: string;
  audience?: UserPedagogicalAudience;
  secondaryGradeId?: string | null;
  secondaryTeachingIds?: string[];
  healthProgramVersionId?: string | null;
  healthPathwayId?: string | null;
  actorAdminId?: string;
};

/**
 * Résout l'affectation pédagogique annuelle active d'un utilisateur pour l'année scolaire courante.
 * Retourne null si aucune affectation n'est trouvée (déclencheur pour ONBOARDING_REQUIRED).
 */
export async function getCurrentUserAcademicEnrollment(
  userId: string,
  date: Date = new Date()
): Promise<UserAcademicEnrollment | null> {
  const activeYear = await getActiveAcademicYear(date);

  return prisma.userAcademicEnrollment.findUnique({
    where: {
      userId_academicYearId: {
        userId,
        academicYearId: activeYear.id,
      },
    },
    include: {
      academicYear: true,
    },
  });
}


/**
 * Valide et crée une affectation pédagogique annuelle verrouillée pour l'utilisateur.
 * L'affectation est immédiatement verrouillée (lockedAt = new Date()).
 */
export async function createAndLockUserAcademicEnrollment(
  input: CreateEnrollmentInput
): Promise<UserAcademicEnrollment> {
  const activeYear = await getActiveAcademicYear(input.date ?? new Date());

  const existing = await prisma.userAcademicEnrollment.findUnique({
    where: {
      userId_academicYearId: {
        userId: input.userId,
        academicYearId: activeYear.id,
      },
    },
  });

  if (existing) {
    throw new AcademicEnrollmentError(
      `L'utilisateur possède déjà une affectation pour l'année scolaire ${activeYear.code}.`,
      'ALREADY_ENROLLED'
    );
  }

  // Validation du périmètre SECONDARY
  if (input.audience === 'SECONDARY') {
    if (!input.secondaryGradeId) {
      throw new AcademicEnrollmentError(
        'Le niveau scolaire (gradeId) est obligatoire pour le secondaire.',
        'INVALID_SCOPE'
      );
    }

    const grade = await prisma.grade.findUnique({
      where: { id: input.secondaryGradeId },
      select: { id: true },
    });

    if (!grade) {
      throw new AcademicEnrollmentError(
        'Le niveau scolaire sélectionné est introuvable.',
        'INVALID_SCOPE'
      );
    }
  }

  // Validation du périmètre HEALTH
  if (input.audience === 'HEALTH') {
    if (!input.healthProgramVersionId) {
      throw new AcademicEnrollmentError(
        'La version de programme santé est obligatoire pour la filière Santé.',
        'INVALID_SCOPE'
      );
    }

    const programVersion = await prisma.healthProgramVersion.findUnique({
      where: { id: input.healthProgramVersionId },
      select: { id: true, academicYear: true, institutionId: true },
    });

    if (!programVersion) {
      throw new AcademicEnrollmentError(
        'La version de programme santé est introuvable.',
        'INVALID_SCOPE'
      );
    }

    if (programVersion.academicYear !== activeYear.code) {
      throw new AcademicEnrollmentError(
        `La maquette santé (${programVersion.academicYear}) ne correspond pas à l'année scolaire active (${activeYear.code}).`,
        'INVALID_SCOPE'
      );
    }

    if (input.healthPathwayId) {
      const pathway = await prisma.healthPathway.findUnique({
        where: { id: input.healthPathwayId },
        select: { id: true, programVersionId: true },
      });

      if (!pathway || pathway.programVersionId !== input.healthProgramVersionId) {
        throw new AcademicEnrollmentError(
          'Le parcours sélectionné n’appartient pas à cette maquette santé.',
          'INVALID_SCOPE'
        );
      }
    }
  }

  return prisma.userAcademicEnrollment.create({
    data: {
      userId: input.userId,
      academicYearId: activeYear.id,
      audience: input.audience,
      secondaryGradeId:
        input.audience === 'SECONDARY' ? input.secondaryGradeId ?? null : null,
      secondaryTeachingIds:
        input.audience === 'SECONDARY' ? input.secondaryTeachingIds ?? [] : [],
      healthProgramVersionId:
        input.audience === 'HEALTH' ? input.healthProgramVersionId ?? null : null,
      healthPathwayId:
        input.audience === 'HEALTH' ? input.healthPathwayId ?? null : null,
      lockedAt: new Date(),
      createdBy: input.createdBy ?? 'SELF_ONBOARDING',
    },
    include: {
      academicYear: true,
    },
  });
}

/**
 * Rectification administrative tracée d'une affectation annuelle (ADMIN uniquement).
 * Met à jour l'affectation et crée une entrée immuable dans le journal d'audit append-only.
 */
export async function correctUserAcademicEnrollmentByAdmin(
  input: AdminCorrectEnrollmentInput,
  session?: any
): Promise<UserAcademicEnrollment> {
  const reason = input.reason?.trim();
  if (!reason) {
    throw new AcademicEnrollmentError(
      'Le motif de rectification est obligatoire pour toute correction administrative.',
      'REASON_REQUIRED'
    );
  }

  const { actorId } = assertAdminFromSession(session);
  const actorAdminId = actorId;

  const enrollment = await prisma.userAcademicEnrollment.findUnique({
    where: { id: input.enrollmentId },
    include: { academicYear: true },
  });

  if (!enrollment) {
    throw new AcademicEnrollmentError(
      'Affectation annuelle introuvable.',
      'NOT_FOUND'
    );
  }

  const targetAudience = input.audience ?? enrollment.audience;

  // Validation SECONDARY
  if (targetAudience === 'SECONDARY') {
    const gradeId = input.secondaryGradeId ?? enrollment.secondaryGradeId;
    if (!gradeId) {
      throw new AcademicEnrollmentError(
        'Le niveau scolaire (gradeId) est obligatoire pour le secondaire.',
        'INVALID_SCOPE'
      );
    }
    const grade = await prisma.grade.findUnique({
      where: { id: gradeId },
      select: { id: true },
    });
    if (!grade) {
      throw new AcademicEnrollmentError('Niveau scolaire introuvable.', 'INVALID_SCOPE');
    }
  }

  // Validation HEALTH
  if (targetAudience === 'HEALTH') {
    const versionId =
      input.healthProgramVersionId ?? enrollment.healthProgramVersionId;
    if (!versionId) {
      throw new AcademicEnrollmentError(
        'La version de programme santé est obligatoire.',
        'INVALID_SCOPE'
      );
    }
    const version = await prisma.healthProgramVersion.findUnique({
      where: { id: versionId },
      select: { id: true, academicYear: true },
    });
    if (!version) {
      throw new AcademicEnrollmentError(
        'Maquette santé introuvable.',
        'INVALID_SCOPE'
      );
    }
    if (version.academicYear !== enrollment.academicYear.code) {
      throw new AcademicEnrollmentError(
        `La maquette santé (${version.academicYear}) ne correspond pas à l'année de l'affectation (${enrollment.academicYear.code}).`,
        'INVALID_SCOPE'
      );
    }

    const pathwayId =
      input.healthPathwayId !== undefined
        ? input.healthPathwayId
        : enrollment.healthPathwayId;

    if (pathwayId) {
      const pathway = await prisma.healthPathway.findUnique({
        where: { id: pathwayId },
        select: { id: true, programVersionId: true },
      });
      if (!pathway || pathway.programVersionId !== versionId) {
        throw new AcademicEnrollmentError(
          'Le parcours sélectionné n’appartient pas à cette maquette santé.',
          'INVALID_SCOPE'
        );
      }
    }
  }

  const beforePayload: Prisma.JsonObject = {
    audience: enrollment.audience,
    secondaryGradeId: enrollment.secondaryGradeId,
    secondaryTeachingIds: enrollment.secondaryTeachingIds,
    healthProgramVersionId: enrollment.healthProgramVersionId,
    healthPathwayId: enrollment.healthPathwayId,
  };

  const updatedData = {
    audience: targetAudience,
    secondaryGradeId:
      targetAudience === 'SECONDARY'
        ? input.secondaryGradeId !== undefined
        ? input.secondaryGradeId
        : enrollment.secondaryGradeId
        : null,
    secondaryTeachingIds:
      targetAudience === 'SECONDARY'
        ? input.secondaryTeachingIds !== undefined
        ? input.secondaryTeachingIds
        : enrollment.secondaryTeachingIds
        : [],
    healthProgramVersionId:
      targetAudience === 'HEALTH'
        ? input.healthProgramVersionId !== undefined
        ? input.healthProgramVersionId
        : enrollment.healthProgramVersionId
        : null,
    healthPathwayId:
      targetAudience === 'HEALTH'
        ? input.healthPathwayId !== undefined
        ? input.healthPathwayId
        : enrollment.healthPathwayId
        : null,
  };

  const afterPayload: Prisma.JsonObject = {
    audience: updatedData.audience,
    secondaryGradeId: updatedData.secondaryGradeId,
    secondaryTeachingIds: updatedData.secondaryTeachingIds,
    healthProgramVersionId: updatedData.healthProgramVersionId,
    healthPathwayId: updatedData.healthPathwayId,
  };

  const [updatedEnrollment] = await prisma.$transaction([
    prisma.userAcademicEnrollment.update({
      where: { id: enrollment.id },
      data: updatedData,
      include: { academicYear: true },
    }),
    prisma.userAcademicEnrollmentCorrection.create({
      data: {
        enrollmentId: enrollment.id,
        actorAdminId,
        reason,
        beforePayload,
        afterPayload,
      },
    }),
  ]);

  return updatedEnrollment;
}

/**
 * Suppression administrative d'une affectation annuelle (ADMIN uniquement).
 * Bloquée si l'affectation possède un historique pédagogique ou des corrections.
 */
export async function deleteUserAcademicEnrollmentByAdmin(
  input: { enrollmentId: string },
  session?: any
): Promise<void> {
  assertAdminFromSession(session);

  const enrollment = await prisma.userAcademicEnrollment.findUnique({
    where: { id: input.enrollmentId },
  });

  if (!enrollment) {
    throw new AcademicEnrollmentError('Affectation annuelle introuvable.', 'NOT_FOUND');
  }

  const [trainingAttempts, trainingProgress, mockExamAttempts, corrections] = await Promise.all([
    prisma.userTrainingQuizAttempt.count({ where: { academicEnrollmentId: input.enrollmentId } }),
    prisma.userTrainingQuizProgress.count({ where: { academicEnrollmentId: input.enrollmentId } }),
    prisma.userHealthMockExamAttempt.count({ where: { academicEnrollmentId: input.enrollmentId } }),
    prisma.userAcademicEnrollmentCorrection.count({ where: { enrollmentId: input.enrollmentId } }),
  ]);

  if (trainingAttempts > 0 || trainingProgress > 0 || mockExamAttempts > 0 || corrections > 0) {
    throw new AcademicEnrollmentError(
      'Impossible de supprimer une affectation possédant un historique pédagogique ou des corrections.',
      'LOCKED'
    );
  }

  await prisma.userAcademicEnrollment.delete({
    where: { id: input.enrollmentId },
  });
}
