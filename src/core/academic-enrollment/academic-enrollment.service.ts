import prisma from '@/lib/db/prisma';
import { getActiveAcademicYear } from '@/core/academic-year';
import { assertAdminFromSession, type SessionContextLike } from '@/lib/auth/assert-admin-session';
import {
  getSessionActorRole,
  getSessionEffectiveUserId,
  isSessionImpersonating,
} from '@/lib/auth/session';
import type { Session } from 'next-auth';
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
    | 'UNAUTHENTICATED'
    | 'STALE_ENROLLMENT'
    | 'HISTORICAL_ENROLLMENT_IMMUTABLE'
    | 'NO_CHANGE';

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
      | 'STALE_ENROLLMENT'
      | 'HISTORICAL_ENROLLMENT_IMMUTABLE'
      | 'NO_CHANGE'
  ) {
    super(message);
    this.name = 'AcademicEnrollmentError';
    this.code = code;
  }
}

import { getAvailableAcademicEnrollmentOptions } from './academic-enrollment.options';

export type CreateEnrollmentInput = {
  userId: string;
  audience: UserPedagogicalAudience;
  secondaryGradeId?: string | null;
  secondaryTeachingIds?: string[];
  healthProgramVersionId?: string | null;
  healthPathwayId?: string | null;
  createdBy: AcademicEnrollmentSource;
  createdByActorId?: string | null;
  date?: Date;
};

export type OnboardingEnrollmentChoicesInput =
  | {
      audience: 'SECONDARY';
      secondaryGradeId: string;
    }
  | {
      audience: 'HEALTH';
      healthProgramVersionId: string;
      healthPathwayId?: string | null;
    };

export type AdminCorrectSecondaryEnrollmentInput = {
  enrollmentId: string;
  expectedUpdatedAt: string;
  reason: string;
  audience: 'SECONDARY';
  secondaryGradeId: string;
};

export type AdminCorrectHealthEnrollmentInput = {
  enrollmentId: string;
  expectedUpdatedAt: string;
  reason: string;
  audience: 'HEALTH';
  healthProgramVersionId: string;
  healthPathwayId?: string | null;
};

export type AdminCorrectEnrollmentInput =
  | AdminCorrectSecondaryEnrollmentInput
  | AdminCorrectHealthEnrollmentInput;

export type AdminCreateSecondaryEnrollmentInput = {
  userId: string;
  audience: 'SECONDARY';
  secondaryGradeId: string;
};

export type AdminCreateHealthEnrollmentInput = {
  userId: string;
  audience: 'HEALTH';
  healthProgramVersionId: string;
  healthPathwayId?: string | null;
};

export type AdminCreateEnrollmentInput =
  | AdminCreateSecondaryEnrollmentInput
  | AdminCreateHealthEnrollmentInput;

export type SecondaryEnrollmentSnapshot = {
  schemaVersion: 1;
  audience: 'SECONDARY';
  secondaryGrade: {
    id: string;
    code: string;
    label: string;
  };
};

export type HealthEnrollmentSnapshot = {
  schemaVersion: 1;
  audience: 'HEALTH';
  institution: {
    id: string;
    name: string;
  };
  program: {
    id: string;
    label: string;
    code?: string;
  };
  programVersion: {
    id: string;
    label: string;
    academicYear: string;
  };
  pathway: {
    id: string;
    name: string;
  } | null;
};

export type AcademicEnrollmentSnapshot =
  | SecondaryEnrollmentSnapshot
  | HealthEnrollmentSnapshot;

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
 * Gère de façon transparente et idempotente la concurrence (P2002).
 */
export async function createAndLockUserAcademicEnrollment(
  input: CreateEnrollmentInput
): Promise<UserAcademicEnrollment> {
  const referenceDate = input.date ?? new Date();
  const availableOptions = await getAvailableAcademicEnrollmentOptions(referenceDate);
  const activeYear = availableOptions.academicYear;

  const existing = await prisma.userAcademicEnrollment.findUnique({
    where: {
      userId_academicYearId: {
        userId: input.userId,
        academicYearId: activeYear.id,
      },
    },
    include: { academicYear: true },
  });

  if (existing) {
    const isIdentical =
      existing.audience === input.audience &&
      (input.audience === 'SECONDARY'
        ? existing.secondaryGradeId === (input.secondaryGradeId ?? null)
        : existing.healthProgramVersionId === (input.healthProgramVersionId ?? null) &&
          existing.healthPathwayId === (input.healthPathwayId ?? null));

    if (isIdentical) {
      return existing;
    }

    throw new AcademicEnrollmentError(
      `L'utilisateur possède déjà une affectation pour l'année scolaire ${activeYear.code}.`,
      'ALREADY_ENROLLED'
    );
  }

  let effectivePathwayId: string | null = null;

  // Validation du périmètre SECONDARY
  if (input.audience === 'SECONDARY') {
    if (!input.secondaryGradeId) {
      throw new AcademicEnrollmentError(
        'Le niveau scolaire (gradeId) est obligatoire pour le secondaire.',
        'INVALID_SCOPE'
      );
    }

    const proposedGrade = availableOptions.secondary.grades.find(
      (g) => g.id === input.secondaryGradeId
    );

    if (!proposedGrade) {
      throw new AcademicEnrollmentError(
        'Le niveau scolaire sélectionné n’est pas proposé.',
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

    const allVersions = availableOptions.health.institutions.flatMap(
      (inst) => inst.programVersions
    );
    const proposedVersion = allVersions.find(
      (v) => v.id === input.healthProgramVersionId
    );

    if (!proposedVersion) {
      throw new AcademicEnrollmentError(
        'La maquette santé sélectionnée n’est pas proposée pour cette année scolaire.',
        'INVALID_SCOPE'
      );
    }

    if (proposedVersion.academicYear !== activeYear.code) {
      throw new AcademicEnrollmentError(
        `La maquette santé (${proposedVersion.academicYear}) ne correspond pas à l'année scolaire active (${activeYear.code}).`,
        'INVALID_SCOPE'
      );
    }

    if (proposedVersion.pathways.length === 0) {
      if (input.healthPathwayId) {
        throw new AcademicEnrollmentError(
          'Aucun parcours n’est proposé pour cette maquette santé.',
          'INVALID_SCOPE'
        );
      }
      effectivePathwayId = null;
    } else if (proposedVersion.pathways.length === 1) {
      const singlePathway = proposedVersion.pathways[0];
      if (input.healthPathwayId && input.healthPathwayId !== singlePathway.id) {
        throw new AcademicEnrollmentError(
          'Le parcours sélectionné n’appartient pas à cette maquette santé.',
          'INVALID_SCOPE'
        );
      }
      effectivePathwayId = singlePathway.id;
    } else {
      if (!input.healthPathwayId) {
        throw new AcademicEnrollmentError(
          'Le choix d’un parcours est obligatoire pour cette formation santé.',
          'INVALID_SCOPE'
        );
      }
      const matchedPathway = proposedVersion.pathways.find(
        (p) => p.id === input.healthPathwayId
      );
      if (!matchedPathway) {
        throw new AcademicEnrollmentError(
          'Le parcours sélectionné n’appartient pas à cette maquette santé.',
          'INVALID_SCOPE'
        );
      }
      effectivePathwayId = matchedPathway.id;
    }
  }

  try {
    return await prisma.userAcademicEnrollment.create({
      data: {
        userId: input.userId,
        academicYearId: activeYear.id,
        audience: input.audience,
        secondaryGradeId:
          input.audience === 'SECONDARY' ? input.secondaryGradeId ?? null : null,
        secondaryTeachingIds: [],
        healthProgramVersionId:
          input.audience === 'HEALTH' ? input.healthProgramVersionId ?? null : null,
        healthPathwayId:
          input.audience === 'HEALTH' ? effectivePathwayId : null,
        lockedAt: new Date(),
        createdBy: input.createdBy ?? 'SELF_ONBOARDING',
      },
      include: {
        academicYear: true,
      },
    });
  } catch (error: any) {
    if (error?.code === 'P2002') {
      const existingAfterRace = await prisma.userAcademicEnrollment.findUnique({
        where: {
          userId_academicYearId: {
            userId: input.userId,
            academicYearId: activeYear.id,
          },
        },
        include: { academicYear: true },
      });

      if (existingAfterRace) {
        const isIdentical =
          existingAfterRace.audience === input.audience &&
          (input.audience === 'SECONDARY'
            ? existingAfterRace.secondaryGradeId === input.secondaryGradeId
            : existingAfterRace.healthProgramVersionId === input.healthProgramVersionId &&
              existingAfterRace.healthPathwayId === effectivePathwayId);

        if (isIdentical) {
          return existingAfterRace;
        }

        throw new AcademicEnrollmentError(
          `L'utilisateur possède déjà une affectation pour l'année scolaire ${activeYear.code}.`,
          'ALREADY_ENROLLED'
        );
      }
    }
    throw error;
  }
}

/**
 * Construit un snapshot métier enrichi pour l'audit d'une affectation académique.
 */
export async function buildEnrollmentSnapshot(params: {
  audience: UserPedagogicalAudience;
  secondaryGradeId?: string | null;
  healthProgramVersionId?: string | null;
  healthPathwayId?: string | null;
}): Promise<AcademicEnrollmentSnapshot | null> {
  if (params.audience === 'SECONDARY' && params.secondaryGradeId) {
    const grade = await prisma.grade.findUnique({
      where: { id: params.secondaryGradeId },
      select: { id: true, shortDescription: true, longDescription: true },
    });
    if (grade) {
      return {
        schemaVersion: 1,
        audience: 'SECONDARY',
        secondaryGrade: {
          id: grade.id,
          code: grade.shortDescription,
          label: grade.longDescription || grade.shortDescription,
        },
      };
    }
  } else if (params.audience === 'HEALTH' && params.healthProgramVersionId) {
    const version = await prisma.healthProgramVersion.findUnique({
      where: { id: params.healthProgramVersionId },
      include: {
        institution: { select: { id: true, name: true } },
        program: { select: { id: true, label: true, code: true } },
        pathways: { select: { id: true, name: true } },
      },
    });
    if (version) {
      const pathway = params.healthPathwayId
        ? version.pathways.find((p) => p.id === params.healthPathwayId) ?? null
        : null;
      return {
        schemaVersion: 1,
        audience: 'HEALTH',
        institution: {
          id: version.institution.id,
          name: version.institution.name,
        },
        program: {
          id: version.program.id,
          label: version.program.label,
          code: version.program.code,
        },
        programVersion: {
          id: version.id,
          label: version.label,
          academicYear: version.academicYear,
        },
        pathway: pathway ? { id: pathway.id, name: pathway.name } : null,
      };
    }
  }
  return null;
}

/**
 * Formate un payload d'audit pour restitution lisible dans l'interface d'administration.
 */
export function formatEnrollmentPayloadDescription(payload: any): string {
  if (!payload || typeof payload !== 'object') return 'Inconnu';

  if (payload.snapshot && payload.snapshot.schemaVersion === 1) {
    const s = payload.snapshot;
    if (s.audience === 'SECONDARY' && s.secondaryGrade) {
      return s.secondaryGrade.label || s.secondaryGrade.code;
    }
    if (s.audience === 'HEALTH') {
      const parts: string[] = [];
      if (s.institution?.name) parts.push(s.institution.name);
      if (s.program?.label) parts.push(s.program.label);
      if (s.pathway?.name) parts.push(`(${s.pathway.name})`);
      return parts.length > 0 ? parts.join(' — ') : (s.programVersion?.label || 'Santé');
    }
  }

  if (payload.audience === 'SECONDARY') {
    return 'Secondaire';
  }
  if (payload.audience === 'HEALTH') {
    return 'Santé';
  }
  return 'Inconnu';
}

/**
 * Rectification administrative tracée d'une affectation annuelle active (ADMIN uniquement).
 * Applique un contrôle de concurrence optimiste atomique (CAS), valide le nouveau scope contre
 * les options autorisées, interdit les fausses corrections (NO_CHANGE), normalise les verticales,
 * et consigne un snapshot immuable dans le journal d'audit.
 */
export async function correctUserAcademicEnrollmentByAdmin(
  input: AdminCorrectEnrollmentInput,
  session?: Session | SessionContextLike | null
): Promise<UserAcademicEnrollment> {
  // 1. Garde d'autorisation ADMIN en premier
  const { actorId: actorAdminId } = assertAdminFromSession(session);

  // 2. Validation du motif
  const reason = input.reason?.trim();
  if (!reason || reason.length < 5) {
    throw new AcademicEnrollmentError(
      'Le motif de rectification est obligatoire et doit comporter au moins 5 caractères.',
      'REASON_REQUIRED'
    );
  }
  if (reason.length > 500) {
    throw new AcademicEnrollmentError(
      'Le motif de rectification ne doit pas dépasser 500 caractères.',
      'REASON_REQUIRED'
    );
  }

  // 3. Validation du jeton de concurrence
  if (!input.expectedUpdatedAt || typeof input.expectedUpdatedAt !== 'string') {
    throw new AcademicEnrollmentError(
      'Le jeton de concurrence (expectedUpdatedAt) est obligatoire.',
      'STALE_ENROLLMENT'
    );
  }
  const expectedDate = new Date(input.expectedUpdatedAt);
  if (Number.isNaN(expectedDate.getTime())) {
    throw new AcademicEnrollmentError(
      'Le format du jeton de concurrence (expectedUpdatedAt) est invalide.',
      'STALE_ENROLLMENT'
    );
  }

  // 4. Résolution de l'année scolaire active et de l'affectation ciblée
  const activeYear = await getActiveAcademicYear();
  const enrollment = await prisma.userAcademicEnrollment.findUnique({
    where: { id: input.enrollmentId },
    include: { academicYear: true },
  });

  if (!enrollment) {
    throw new AcademicEnrollmentError('Affectation annuelle introuvable.', 'NOT_FOUND');
  }

  // Seule l'affectation de l'année active peut être rectifiée (Directive 4)
  if (enrollment.academicYearId !== activeYear.id) {
    throw new AcademicEnrollmentError(
      'Seule l’affectation de l’année scolaire active peut être rectifiée.',
      'HISTORICAL_ENROLLMENT_IMMUTABLE'
    );
  }

  // Vérification préalable de fraîcheur
  if (enrollment.updatedAt.getTime() !== expectedDate.getTime()) {
    throw new AcademicEnrollmentError(
      'L’affectation a été modifiée par un autre administrateur. Veuillez recharger la page.',
      'STALE_ENROLLMENT'
    );
  }

  // 5. Validation du nouveau scope contre les options autorisées (Directive 5)
  const availableOptions = await getAvailableAcademicEnrollmentOptions();
  let effectivePathwayId: string | null = null;

  if (input.audience === 'SECONDARY') {
    const targetGrade = availableOptions.secondary.grades.find(
      (g) => g.id === input.secondaryGradeId
    );
    if (!targetGrade) {
      throw new AcademicEnrollmentError(
        'Le niveau scolaire sélectionné n’est pas proposé pour cette année.',
        'INVALID_SCOPE'
      );
    }
  } else if (input.audience === 'HEALTH') {
    const allVersions = availableOptions.health.institutions.flatMap(
      (inst) => inst.programVersions
    );
    const targetVersion = allVersions.find(
      (v) => v.id === input.healthProgramVersionId
    );
    if (!targetVersion) {
      throw new AcademicEnrollmentError(
        'La maquette santé sélectionnée n’est pas proposée pour cette année scolaire.',
        'INVALID_SCOPE'
      );
    }
    if (targetVersion.academicYear !== activeYear.code) {
      throw new AcademicEnrollmentError(
        `La maquette santé (${targetVersion.academicYear}) ne correspond pas à l'année scolaire active (${activeYear.code}).`,
        'INVALID_SCOPE'
      );
    }

    if (targetVersion.pathways.length === 0) {
      if (input.healthPathwayId) {
        throw new AcademicEnrollmentError(
          'Aucun parcours n’est proposé pour cette maquette santé.',
          'INVALID_SCOPE'
        );
      }
      effectivePathwayId = null;
    } else if (targetVersion.pathways.length === 1) {
      const single = targetVersion.pathways[0];
      if (input.healthPathwayId && input.healthPathwayId !== single.id) {
        throw new AcademicEnrollmentError(
          'Le parcours sélectionné n’appartient pas à cette maquette santé.',
          'INVALID_SCOPE'
        );
      }
      effectivePathwayId = single.id;
    } else {
      if (!input.healthPathwayId) {
        throw new AcademicEnrollmentError(
          'Le choix d’un parcours est obligatoire pour cette formation santé.',
          'INVALID_SCOPE'
        );
      }
      const matched = targetVersion.pathways.find(
        (p) => p.id === input.healthPathwayId
      );
      if (!matched) {
        throw new AcademicEnrollmentError(
          'Le parcours sélectionné n’appartient pas à cette maquette santé.',
          'INVALID_SCOPE'
        );
      }
      effectivePathwayId = matched.id;
    }
  }

  // 6. Rejeter les fausses corrections (Directive 7)
  const isSecondaryNoChange =
    enrollment.audience === 'SECONDARY' &&
    input.audience === 'SECONDARY' &&
    enrollment.secondaryGradeId === input.secondaryGradeId;

  const isHealthNoChange =
    enrollment.audience === 'HEALTH' &&
    input.audience === 'HEALTH' &&
    enrollment.healthProgramVersionId === input.healthProgramVersionId &&
    (enrollment.healthPathwayId ?? null) === (effectivePathwayId ?? null);

  if (isSecondaryNoChange || isHealthNoChange) {
    throw new AcademicEnrollmentError(
      'Aucune modification détectée : la nouvelle affectation est identique à l’affectation actuelle.',
      'NO_CHANGE'
    );
  }

  // 7. Normalisation stricte de l'état cible (Directive 6)
  const updatedData = {
    audience: input.audience,
    secondaryGradeId:
      input.audience === 'SECONDARY' ? input.secondaryGradeId : null,
    secondaryTeachingIds: [], // Réinitialisation des préférences de spécialités
    healthProgramVersionId:
      input.audience === 'HEALTH' ? input.healthProgramVersionId : null,
    healthPathwayId: input.audience === 'HEALTH' ? effectivePathwayId : null,
  };

  // 8. Construction des snapshots lisibles pour l'audit (Directive 8)
  const [beforeSnapshot, afterSnapshot] = await Promise.all([
    buildEnrollmentSnapshot({
      audience: enrollment.audience,
      secondaryGradeId: enrollment.secondaryGradeId,
      healthProgramVersionId: enrollment.healthProgramVersionId,
      healthPathwayId: enrollment.healthPathwayId,
    }),
    buildEnrollmentSnapshot({
      audience: updatedData.audience,
      secondaryGradeId: updatedData.secondaryGradeId,
      healthProgramVersionId: updatedData.healthProgramVersionId,
      healthPathwayId: updatedData.healthPathwayId,
    }),
  ]);

  const beforePayload: Prisma.JsonObject = {
    audience: enrollment.audience,
    secondaryGradeId: enrollment.secondaryGradeId,
    secondaryTeachingIds: enrollment.secondaryTeachingIds,
    healthProgramVersionId: enrollment.healthProgramVersionId,
    healthPathwayId: enrollment.healthPathwayId,
    snapshot: (beforeSnapshot as unknown as Prisma.JsonObject) ?? null,
  };

  const afterPayload: Prisma.JsonObject = {
    audience: updatedData.audience,
    secondaryGradeId: updatedData.secondaryGradeId,
    secondaryTeachingIds: updatedData.secondaryTeachingIds,
    healthProgramVersionId: updatedData.healthProgramVersionId,
    healthPathwayId: updatedData.healthPathwayId,
    snapshot: (afterSnapshot as unknown as Prisma.JsonObject) ?? null,
  };

  // 9. Compare-and-set atomique dans la transaction (Directives 1 et 14)
  try {
    return await prisma.$transaction(async (tx) => {
      const updateResult = await tx.userAcademicEnrollment.updateMany({
        where: {
          id: enrollment.id,
          updatedAt: expectedDate,
        },
        data: updatedData,
      });

      if (updateResult.count === 0) {
        throw new AcademicEnrollmentError(
          'L’affectation a été modifiée par un autre administrateur. Veuillez recharger la page.',
          'STALE_ENROLLMENT'
        );
      }

      await tx.userAcademicEnrollmentCorrection.create({
        data: {
          enrollmentId: enrollment.id,
          actorAdminId,
          reason,
          beforePayload,
          afterPayload,
        },
      });

      return tx.userAcademicEnrollment.findUniqueOrThrow({
        where: { id: enrollment.id },
        include: { academicYear: true },
      });
    });
  } catch (error: any) {
    if (error instanceof AcademicEnrollmentError) {
      throw error;
    }
    if (
      error?.code === 'P2034' ||
      error?.message?.includes('WriteConflict') ||
      error?.message?.includes('Transaction')
    ) {
      throw new AcademicEnrollmentError(
        'L’affectation a été modifiée par un autre administrateur. Veuillez recharger la page.',
        'STALE_ENROLLMENT'
      );
    }
    throw error;
  }
}

/**
 * Création administrative d'une affectation annuelle pour un utilisateur sans Enrollment (ADMIN uniquement).
 * Enregistre createdBy = 'ADMIN' et trace createdByActorId sans passer par un auto-onboarding.
 */
export async function createUserAcademicEnrollmentByAdmin(
  input: AdminCreateEnrollmentInput,
  session?: Session | SessionContextLike | null
): Promise<UserAcademicEnrollment> {
  // 1. Garde d'autorisation ADMIN en premier
  const { actorId: actorAdminId } = assertAdminFromSession(session);

  // 2. Résolution de l'année scolaire active
  const activeYear = await getActiveAcademicYear();

  // 3. Vérification de l'existence du compte utilisateur
  const user = await prisma.user.findUnique({
    where: { id: input.userId },
  });
  if (!user) {
    throw new AcademicEnrollmentError('Utilisateur introuvable.', 'NOT_FOUND');
  }

  // 4. Vérification d'absence d'affectation préalable pour l'année active
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

  // 5. Validation du scope contre les options autorisées (Directive 5)
  const availableOptions = await getAvailableAcademicEnrollmentOptions();
  let effectivePathwayId: string | null = null;

  if (input.audience === 'SECONDARY') {
    const targetGrade = availableOptions.secondary.grades.find(
      (g) => g.id === input.secondaryGradeId
    );
    if (!targetGrade) {
      throw new AcademicEnrollmentError(
        'Le niveau scolaire sélectionné n’est pas proposé pour cette année.',
        'INVALID_SCOPE'
      );
    }
  } else if (input.audience === 'HEALTH') {
    const allVersions = availableOptions.health.institutions.flatMap(
      (inst) => inst.programVersions
    );
    const targetVersion = allVersions.find(
      (v) => v.id === input.healthProgramVersionId
    );
    if (!targetVersion) {
      throw new AcademicEnrollmentError(
        'La maquette santé sélectionnée n’est pas proposée pour cette année scolaire.',
        'INVALID_SCOPE'
      );
    }
    if (targetVersion.academicYear !== activeYear.code) {
      throw new AcademicEnrollmentError(
        `La maquette santé (${targetVersion.academicYear}) ne correspond pas à l'année scolaire active (${activeYear.code}).`,
        'INVALID_SCOPE'
      );
    }

    if (targetVersion.pathways.length === 0) {
      if (input.healthPathwayId) {
        throw new AcademicEnrollmentError(
          'Aucun parcours n’est proposé pour cette maquette santé.',
          'INVALID_SCOPE'
        );
      }
      effectivePathwayId = null;
    } else if (targetVersion.pathways.length === 1) {
      const single = targetVersion.pathways[0];
      if (input.healthPathwayId && input.healthPathwayId !== single.id) {
        throw new AcademicEnrollmentError(
          'Le parcours sélectionné n’appartient pas à cette maquette santé.',
          'INVALID_SCOPE'
        );
      }
      effectivePathwayId = single.id;
    } else {
      if (!input.healthPathwayId) {
        throw new AcademicEnrollmentError(
          'Le choix d’un parcours est obligatoire pour cette formation santé.',
          'INVALID_SCOPE'
        );
      }
      const matched = targetVersion.pathways.find(
        (p) => p.id === input.healthPathwayId
      );
      if (!matched) {
        throw new AcademicEnrollmentError(
          'Le parcours sélectionné n’appartient pas à cette maquette santé.',
          'INVALID_SCOPE'
        );
      }
      effectivePathwayId = matched.id;
    }
  }

  // 6. Création avec createdBy: 'ADMIN' et createdByActorId tracé
  return await prisma.userAcademicEnrollment.create({
    data: {
      userId: input.userId,
      academicYearId: activeYear.id,
      audience: input.audience,
      secondaryGradeId:
        input.audience === 'SECONDARY' ? input.secondaryGradeId : null,
      secondaryTeachingIds: [],
      healthProgramVersionId:
        input.audience === 'HEALTH' ? input.healthProgramVersionId : null,
      healthPathwayId: input.audience === 'HEALTH' ? effectivePathwayId : null,
      lockedAt: new Date(),
      createdBy: 'ADMIN',
      createdByActorId: actorAdminId,
    },
    include: {
      academicYear: true,
    },
  });
}

/**
 * Suppression administrative d'une affectation annuelle (ADMIN uniquement).
 * Bloquée si l'affectation possède un historique pédagogique ou des corrections.
 */
export async function deleteUserAcademicEnrollmentByAdmin(
  input: { enrollmentId: string },
  session?: Session | SessionContextLike | null
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

/**
 * Helper de service interne permettant de créer un Enrollment à partir d'une session.
 * Utilisé par la Server Action et testable en environnement unitaire.
 * Ce helper N'EST PAS une Server Action exportée au client.
 */
export async function createAcademicEnrollmentFromSession(
  session: Session | null | undefined,
  input: OnboardingEnrollmentChoicesInput
): Promise<UserAcademicEnrollment> {
  if (!session?.user) {
    throw new AcademicEnrollmentError(
      'Authentification requise pour effectuer son affectation pédagogique.',
      'UNAUTHENTICATED'
    );
  }

  if (isSessionImpersonating(session)) {
    throw new AcademicEnrollmentError(
      "L'onboarding personnel ne peut pas être validé sous impersonation administrative.",
      'INVALID_SCOPE'
    );
  }

  if (getSessionActorRole(session) === 'ADMIN') {
    throw new AcademicEnrollmentError(
      "Les administrateurs ne créent pas d'affectation pédagogique d'onboarding.",
      'INVALID_SCOPE'
    );
  }

  const effectiveUserId = getSessionEffectiveUserId(session);
  if (!effectiveUserId) {
    throw new AcademicEnrollmentError(
      'Utilisateur introuvable dans la session.',
      'UNAUTHENTICATED'
    );
  }

  return createAndLockUserAcademicEnrollment({
    userId: effectiveUserId,
    audience: input.audience,
    secondaryGradeId:
      input.audience === 'SECONDARY' ? input.secondaryGradeId : undefined,
    secondaryTeachingIds: [],
    healthProgramVersionId:
      input.audience === 'HEALTH' ? input.healthProgramVersionId : undefined,
    healthPathwayId:
      input.audience === 'HEALTH' ? input.healthPathwayId : undefined,
    createdBy: 'SELF_ONBOARDING',
  });
}
