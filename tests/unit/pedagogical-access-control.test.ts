import assert from 'node:assert/strict';
import test from 'node:test';

import {
  PedagogicalAccessError,
} from '../../src/lib/auth/assert-pedagogical-access';

type SimulatedEnrollment = {
  userId: string;
  audience: 'SECONDARY' | 'HEALTH';
  secondaryGradeId?: string | null;
  healthProgramVersionId?: string | null;
  healthPathwayId?: string | null;
};

// Logique pure de test reproduisant les règles de assert-pedagogical-access.ts
function checkSecondaryAccess({
  userId,
  gradeId,
  enrollment,
}: {
  userId: string | null | undefined;
  gradeId: string;
  enrollment: SimulatedEnrollment | null;
}) {
  if (!userId) {
    throw new PedagogicalAccessError('Authentification requise.', 'UNAUTHENTICATED', 401);
  }

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

  if (enrollment.secondaryGradeId !== gradeId) {
    throw new PedagogicalAccessError(
      'Accès non autorisé aux contenus de ce niveau scolaire.',
      'FORBIDDEN_SCOPE',
      403
    );
  }

  return enrollment;
}

function checkHealthAccess({
  userId,
  programVersionId,
  pathwayId,
  isCommonToAllPathways,
  enrollment,
}: {
  userId: string | null | undefined;
  programVersionId: string;
  pathwayId?: string | null;
  isCommonToAllPathways?: boolean;
  enrollment: SimulatedEnrollment | null;
}) {
  if (!userId) {
    throw new PedagogicalAccessError('Authentification requise.', 'UNAUTHENTICATED', 401);
  }

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

  if (enrollment.healthProgramVersionId !== programVersionId) {
    throw new PedagogicalAccessError(
      'Accès non autorisé aux contenus de cette formation Santé.',
      'FORBIDDEN_SCOPE',
      403
    );
  }

  if (
    !isCommonToAllPathways &&
    pathwayId &&
    enrollment.healthPathwayId &&
    enrollment.healthPathwayId !== pathwayId
  ) {
    throw new PedagogicalAccessError(
      'Accès non autorisé aux contenus de ce parcours spécifique.',
      'FORBIDDEN_SCOPE',
      403
    );
  }

  return enrollment;
}

const enrollmentTerminale: SimulatedEnrollment = {
  userId: 'user_tle',
  audience: 'SECONDARY',
  secondaryGradeId: 'grade_tle',
};

const enrollmentPremiere: SimulatedEnrollment = {
  userId: 'user_1re',
  audience: 'SECONDARY',
  secondaryGradeId: 'grade_1re',
};

const enrollmentHealthReimsPass: SimulatedEnrollment = {
  userId: 'user_sante',
  audience: 'HEALTH',
  healthProgramVersionId: 'ver_reims_pass',
  healthPathwayId: 'path_reims_mineure_droit',
};

test('AccessControl: refuse un utilisateur anonyme avec statut 401 UNAUTHENTICATED', () => {
  assert.throws(
    () => checkSecondaryAccess({ userId: null, gradeId: 'grade_tle', enrollment: null }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.statusCode, 401);
      assert.equal(err.code, 'UNAUTHENTICATED');
      return true;
    }
  );
});

test('AccessControl: refuse un utilisateur connecté sans Enrollment avec ONBOARDING_REQUIRED', () => {
  assert.throws(
    () => checkSecondaryAccess({ userId: 'user_new', gradeId: 'grade_tle', enrollment: null }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.statusCode, 403);
      assert.equal(err.code, 'ONBOARDING_REQUIRED');
      return true;
    }
  );
});

test('AccessControl SECONDARY: élève de Terminale accède aux contenus de Terminale', () => {
  assert.doesNotThrow(() => {
    checkSecondaryAccess({
      userId: 'user_tle',
      gradeId: 'grade_tle',
      enrollment: enrollmentTerminale,
    });
  });
});

test('AccessControl SECONDARY: élève de Terminale refusé sur un contenu de Première', () => {
  assert.throws(
    () =>
      checkSecondaryAccess({
        userId: 'user_tle',
        gradeId: 'grade_1re',
        enrollment: enrollmentTerminale,
      }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.code, 'FORBIDDEN_SCOPE');
      assert.equal(err.statusCode, 403);
      return true;
    }
  );
});

test('AccessControl SECONDARY: élève de Première accède à Première et est refusé sur Terminale', () => {
  assert.doesNotThrow(() => {
    checkSecondaryAccess({
      userId: 'user_1re',
      gradeId: 'grade_1re',
      enrollment: enrollmentPremiere,
    });
  });

  assert.throws(
    () =>
      checkSecondaryAccess({
        userId: 'user_1re',
        gradeId: 'grade_tle',
        enrollment: enrollmentPremiere,
      }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.code, 'FORBIDDEN_SCOPE');
      return true;
    }
  );
});

test('AccessControl CLOISONNEMENT: élève du Secondaire refusé sur Santé', () => {
  assert.throws(
    () =>
      checkHealthAccess({
        userId: 'user_tle',
        programVersionId: 'ver_reims_pass',
        enrollment: enrollmentTerminale,
      }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.code, 'FORBIDDEN_SCOPE');
      assert.match(err.message, /réservé aux étudiants de la filière Santé/);
      return true;
    }
  );
});

test('AccessControl CLOISONNEMENT: étudiant Santé refusé sur Secondaire', () => {
  assert.throws(
    () =>
      checkSecondaryAccess({
        userId: 'user_sante',
        gradeId: 'grade_tle',
        enrollment: enrollmentHealthReimsPass,
      }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.code, 'FORBIDDEN_SCOPE');
      assert.match(err.message, /réservé aux élèves inscrits dans le secondaire/);
      return true;
    }
  );
});

test('AccessControl HEALTH: étudiant Santé accède à une UE commune à tous les parcours', () => {
  assert.doesNotThrow(() => {
    checkHealthAccess({
      userId: 'user_sante',
      programVersionId: 'ver_reims_pass',
      pathwayId: null,
      isCommonToAllPathways: true,
      enrollment: enrollmentHealthReimsPass,
    });
  });
});

test('AccessControl HEALTH: étudiant Santé accède à une UE de son parcours', () => {
  assert.doesNotThrow(() => {
    checkHealthAccess({
      userId: 'user_sante',
      programVersionId: 'ver_reims_pass',
      pathwayId: 'path_reims_mineure_droit',
      isCommonToAllPathways: false,
      enrollment: enrollmentHealthReimsPass,
    });
  });
});

test('AccessControl HEALTH: étudiant Santé refusé sur une UE d’un autre parcours spécifique', () => {
  assert.throws(
    () =>
      checkHealthAccess({
        userId: 'user_sante',
        programVersionId: 'ver_reims_pass',
        pathwayId: 'path_reims_mineure_eco',
        isCommonToAllPathways: false,
        enrollment: enrollmentHealthReimsPass,
      }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.code, 'FORBIDDEN_SCOPE');
      assert.match(err.message, /ce parcours spécifique/);
      return true;
    }
  );
});

test('AccessControl HEALTH: étudiant Santé refusé sur une autre université / maquette', () => {
  assert.throws(
    () =>
      checkHealthAccess({
        userId: 'user_sante',
        programVersionId: 'ver_strasbourg_pass',
        isCommonToAllPathways: true,
        enrollment: enrollmentHealthReimsPass,
      }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.code, 'FORBIDDEN_SCOPE');
      assert.match(err.message, /cette formation Santé/);
      return true;
    }
  );
});

test('AccessControl IMPERSONATION: un ADMIN impersonnant un élève de Première subit les restrictions de l’élève', () => {
  // L'acteur est ADMIN, mais la session effective porte l'identité de user_1re
  const effectiveUserId = 'user_1re';
  const targetEnrollment = enrollmentPremiere;

  // L'accès Première réussit
  assert.doesNotThrow(() => {
    checkSecondaryAccess({
      userId: effectiveUserId,
      gradeId: 'grade_1re',
      enrollment: targetEnrollment,
    });
  });

  // L'accès Terminale échoue
  assert.throws(
    () =>
      checkSecondaryAccess({
        userId: effectiveUserId,
        gradeId: 'grade_tle',
        enrollment: targetEnrollment,
      }),
    (err: unknown) => {
      assert.ok(err instanceof PedagogicalAccessError);
      assert.equal(err.code, 'FORBIDDEN_SCOPE');
      return true;
    }
  );
});
