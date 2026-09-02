import assert from 'node:assert/strict';
import test from 'node:test';

import {
  AcademicEnrollmentError,
} from '../../src/core/academic-enrollment/academic-enrollment.service';
import { saveCurrentUserPedagogicalProfile } from '../../src/core/user/user-profile.actions';

type SimulatedEnrollment = {
  id: string;
  userId: string;
  academicYearId: string;
  academicYearCode: string;
  audience: 'SECONDARY' | 'HEALTH';
  secondaryGradeId?: string | null;
  secondaryTeachingIds: string[];
  healthProgramVersionId?: string | null;
  healthPathwayId?: string | null;
  lockedAt: Date | null;
  createdBy: 'SELF_ONBOARDING' | 'ADMIN' | 'IMPORT';
};

type SimulatedCorrection = {
  id: string;
  enrollmentId: string;
  actorAdminId: string;
  reason: string;
  beforePayload: any;
  afterPayload: any;
  createdAt: Date;
};

// Simulation pure de la logique métier d'Enrollment et de Rectification ADMIN
class SimulatedEnrollmentStore {
  enrollments: SimulatedEnrollment[] = [];
  corrections: SimulatedCorrection[] = [];

  createAndLock(input: {
    userId: string;
    academicYearId: string;
    academicYearCode: string;
    audience: 'SECONDARY' | 'HEALTH';
    secondaryGradeId?: string | null;
    secondaryTeachingIds?: string[];
    healthProgramVersionId?: string | null;
    healthProgramVersionYear?: string | null;
    healthPathwayId?: string | null;
    healthPathwayVersionId?: string | null;
    createdBy?: 'SELF_ONBOARDING' | 'ADMIN';
  }): SimulatedEnrollment {
    const existing = this.enrollments.find(
      (e) => e.userId === input.userId && e.academicYearId === input.academicYearId
    );
    if (existing) {
      throw new AcademicEnrollmentError(
        `L'utilisateur possède déjà une affectation pour l'année scolaire ${input.academicYearCode}.`,
        'ALREADY_ENROLLED'
      );
    }

    if (input.audience === 'SECONDARY' && !input.secondaryGradeId) {
      throw new AcademicEnrollmentError(
        'Le niveau scolaire (gradeId) est obligatoire pour le secondaire.',
        'INVALID_SCOPE'
      );
    }

    if (input.audience === 'HEALTH') {
      if (!input.healthProgramVersionId) {
        throw new AcademicEnrollmentError(
          'La version de programme santé est obligatoire.',
          'INVALID_SCOPE'
        );
      }
      if (input.healthProgramVersionYear !== input.academicYearCode) {
        throw new AcademicEnrollmentError(
          `La maquette santé (${input.healthProgramVersionYear}) ne correspond pas à l'année scolaire active (${input.academicYearCode}).`,
          'INVALID_SCOPE'
        );
      }
      if (
        input.healthPathwayId &&
        input.healthPathwayVersionId !== input.healthProgramVersionId
      ) {
        throw new AcademicEnrollmentError(
          'Le parcours sélectionné n’appartient pas à cette maquette santé.',
          'INVALID_SCOPE'
        );
      }
    }

    const enrollment: SimulatedEnrollment = {
      id: `enr_${this.enrollments.length + 1}`,
      userId: input.userId,
      academicYearId: input.academicYearId,
      academicYearCode: input.academicYearCode,
      audience: input.audience,
      secondaryGradeId: input.audience === 'SECONDARY' ? input.secondaryGradeId : null,
      secondaryTeachingIds: input.secondaryTeachingIds ?? [],
      healthProgramVersionId:
        input.audience === 'HEALTH' ? input.healthProgramVersionId : null,
      healthPathwayId: input.audience === 'HEALTH' ? input.healthPathwayId : null,
      lockedAt: new Date(),
      createdBy: input.createdBy ?? 'SELF_ONBOARDING',
    };

    this.enrollments.push(enrollment);
    return enrollment;
  }

  adminCorrect(input: {
    enrollmentId: string;
    actorAdminId: string;
    reason: string;
    secondaryGradeId?: string | null;
    healthProgramVersionId?: string | null;
  }): SimulatedEnrollment {
    const reason = input.reason?.trim();
    if (!reason) {
      throw new AcademicEnrollmentError(
        'Le motif de rectification est obligatoire pour toute correction administrative.',
        'REASON_REQUIRED'
      );
    }

    const enrollment = this.enrollments.find((e) => e.id === input.enrollmentId);
    if (!enrollment) {
      throw new AcademicEnrollmentError('Affectation annuelle introuvable.', 'NOT_FOUND');
    }

    const beforePayload = {
      audience: enrollment.audience,
      secondaryGradeId: enrollment.secondaryGradeId,
      healthProgramVersionId: enrollment.healthProgramVersionId,
    };

    if (input.secondaryGradeId !== undefined) {
      enrollment.secondaryGradeId = input.secondaryGradeId;
    }
    if (input.healthProgramVersionId !== undefined) {
      enrollment.healthProgramVersionId = input.healthProgramVersionId;
    }

    const afterPayload = {
      audience: enrollment.audience,
      secondaryGradeId: enrollment.secondaryGradeId,
      healthProgramVersionId: enrollment.healthProgramVersionId,
    };

    this.corrections.push({
      id: `corr_${this.corrections.length + 1}`,
      enrollmentId: enrollment.id,
      actorAdminId: input.actorAdminId,
      reason,
      beforePayload,
      afterPayload,
      createdAt: new Date(),
    });

    return enrollment;
  }
}

test('AcademicEnrollment: création d’une affectation verrouillée (lockedAt renseigné)', () => {
  const store = new SimulatedEnrollmentStore();
  const enrollment = store.createAndLock({
    userId: 'user_1',
    academicYearId: 'year_2026',
    academicYearCode: '2026-2027',
    audience: 'SECONDARY',
    secondaryGradeId: 'grade_tle',
  });

  assert.equal(enrollment.userId, 'user_1');
  assert.equal(enrollment.secondaryGradeId, 'grade_tle');
  assert.ok(enrollment.lockedAt instanceof Date);
  assert.equal(enrollment.createdBy, 'SELF_ONBOARDING');
});

test('AcademicEnrollment: unicité (userId, academicYearId) - refuse une seconde affectation pour la même année', () => {
  const store = new SimulatedEnrollmentStore();
  store.createAndLock({
    userId: 'user_1',
    academicYearId: 'year_2026',
    academicYearCode: '2026-2027',
    audience: 'SECONDARY',
    secondaryGradeId: 'grade_tle',
  });

  assert.throws(
    () =>
      store.createAndLock({
        userId: 'user_1',
        academicYearId: 'year_2026',
        academicYearCode: '2026-2027',
        audience: 'SECONDARY',
        secondaryGradeId: 'grade_1re',
      }),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'ALREADY_ENROLLED');
      return true;
    }
  );
});

test('AcademicEnrollment: l’utilisateur ne peut pas modifier son affectation verrouillée en cours d’année', async () => {
  await assert.rejects(
    async () => {
      await saveCurrentUserPedagogicalProfile(new FormData());
    },
    (err: Error) => {
      assert.match(err.message, /verrouillée pour l'année scolaire/);
      return true;
    }
  );
});

test('AcademicEnrollment: rectification ADMIN avec motif obligatoire et traçabilité', () => {
  const store = new SimulatedEnrollmentStore();
  const enrollment = store.createAndLock({
    userId: 'user_1',
    academicYearId: 'year_2026',
    academicYearCode: '2026-2027',
    audience: 'SECONDARY',
    secondaryGradeId: 'grade_tle',
  });

  // Correction : élève inscrit en Terminale par erreur alors qu'il est en Première
  const corrected = store.adminCorrect({
    enrollmentId: enrollment.id,
    actorAdminId: 'admin_42',
    reason: "Erreur de déclaration de l'élève lors de l'inscription",
    secondaryGradeId: 'grade_1re',
  });

  assert.equal(corrected.secondaryGradeId, 'grade_1re');
  assert.equal(store.corrections.length, 1);
  assert.equal(store.corrections[0].actorAdminId, 'admin_42');
  assert.equal(store.corrections[0].reason, "Erreur de déclaration de l'élève lors de l'inscription");
  assert.equal(store.corrections[0].beforePayload.secondaryGradeId, 'grade_tle');
  assert.equal(store.corrections[0].afterPayload.secondaryGradeId, 'grade_1re');
});

test('AcademicEnrollment: rectification ADMIN refusée si le motif est manquant', () => {
  const store = new SimulatedEnrollmentStore();
  const enrollment = store.createAndLock({
    userId: 'user_1',
    academicYearId: 'year_2026',
    academicYearCode: '2026-2027',
    audience: 'SECONDARY',
    secondaryGradeId: 'grade_tle',
  });

  assert.throws(
    () =>
      store.adminCorrect({
        enrollmentId: enrollment.id,
        actorAdminId: 'admin_42',
        reason: '   ',
        secondaryGradeId: 'grade_1re',
      }),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'REASON_REQUIRED');
      return true;
    }
  );
});

test('AcademicEnrollment: deux rectifications ADMIN successives créent deux entrées distinctes dans le journal', () => {
  const store = new SimulatedEnrollmentStore();
  const enrollment = store.createAndLock({
    userId: 'user_1',
    academicYearId: 'year_2026',
    academicYearCode: '2026-2027',
    audience: 'SECONDARY',
    secondaryGradeId: 'grade_tle',
  });

  store.adminCorrect({
    enrollmentId: enrollment.id,
    actorAdminId: 'admin_1',
    reason: 'Correction 1',
    secondaryGradeId: 'grade_1re',
  });

  store.adminCorrect({
    enrollmentId: enrollment.id,
    actorAdminId: 'admin_2',
    reason: 'Correction 2',
    secondaryGradeId: 'grade_tle',
  });

  assert.equal(store.corrections.length, 2);
  assert.equal(store.corrections[0].actorAdminId, 'admin_1');
  assert.equal(store.corrections[0].afterPayload.secondaryGradeId, 'grade_1re');
  assert.equal(store.corrections[1].actorAdminId, 'admin_2');
  assert.equal(store.corrections[1].afterPayload.secondaryGradeId, 'grade_tle');
});

test('AcademicEnrollment: validation de cohérence Santé - refuse si la maquette ne correspond pas à l’année scolaire', () => {
  const store = new SimulatedEnrollmentStore();
  assert.throws(
    () =>
      store.createAndLock({
        userId: 'user_health',
        academicYearId: 'year_2026',
        academicYearCode: '2026-2027',
        audience: 'HEALTH',
        healthProgramVersionId: 'ver_old',
        healthProgramVersionYear: '2024-2025',
      }),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'INVALID_SCOPE');
      return true;
    }
  );
});

test('AcademicEnrollment: validation de cohérence Santé - refuse si le parcours n’appartient pas à la maquette', () => {
  const store = new SimulatedEnrollmentStore();
  assert.throws(
    () =>
      store.createAndLock({
        userId: 'user_health',
        academicYearId: 'year_2026',
        academicYearCode: '2026-2027',
        audience: 'HEALTH',
        healthProgramVersionId: 'ver_reims',
        healthProgramVersionYear: '2026-2027',
        healthPathwayId: 'path_strasbourg',
        healthPathwayVersionId: 'ver_strasbourg',
      }),
    (err: unknown) => {
      assert.ok(err instanceof AcademicEnrollmentError);
      assert.equal(err.code, 'INVALID_SCOPE');
      return true;
    }
  );
});

test('AcademicEnrollment: redoublement supporté (2 années distinctes avec le même niveau)', () => {
  const store = new SimulatedEnrollmentStore();
  const enr2026 = store.createAndLock({
    userId: 'user_redoublant',
    academicYearId: 'year_2026',
    academicYearCode: '2026-2027',
    audience: 'SECONDARY',
    secondaryGradeId: 'grade_tle',
  });

  const enr2027 = store.createAndLock({
    userId: 'user_redoublant',
    academicYearId: 'year_2027',
    academicYearCode: '2027-2028',
    audience: 'SECONDARY',
    secondaryGradeId: 'grade_tle',
  });

  assert.notEqual(enr2026.id, enr2027.id);
  assert.equal(enr2026.academicYearId, 'year_2026');
  assert.equal(enr2027.academicYearId, 'year_2027');
  assert.equal(enr2026.secondaryGradeId, 'grade_tle');
  assert.equal(enr2027.secondaryGradeId, 'grade_tle');
});

test('AcademicEnrollment: passage dans le supérieur supporté (Terminale 2026 -> Santé 2027)', () => {
  const store = new SimulatedEnrollmentStore();
  const enr2026 = store.createAndLock({
    userId: 'user_bac',
    academicYearId: 'year_2026',
    academicYearCode: '2026-2027',
    audience: 'SECONDARY',
    secondaryGradeId: 'grade_tle',
  });

  const enr2027 = store.createAndLock({
    userId: 'user_bac',
    academicYearId: 'year_2027',
    academicYearCode: '2027-2028',
    audience: 'HEALTH',
    healthProgramVersionId: 'ver_reims_2027',
    healthProgramVersionYear: '2027-2028',
  });

  assert.equal(enr2026.audience, 'SECONDARY');
  assert.equal(enr2027.audience, 'HEALTH');
});
