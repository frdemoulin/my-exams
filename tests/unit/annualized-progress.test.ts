import assert from 'node:assert/strict';
import test from 'node:test';

type SimulatedProgress = {
  id: string;
  userId: string;
  academicEnrollmentId: string;
  quizId: string;
  bestScore: number;
  successRate: number;
  attemptsCount: number;
};

type SimulatedAttempt = {
  id: string;
  userId: string;
  academicEnrollmentId: string;
  quizId: string;
  score: number;
  status: 'COMPLETED';
};

class SimulatedProgressStore {
  attempts: SimulatedAttempt[] = [];
  progresses: SimulatedProgress[] = [];

  recordAttemptAndUpsertProgress({
    userId,
    academicEnrollmentId,
    quizId,
    score,
    maxScore,
  }: {
    userId: string;
    academicEnrollmentId: string;
    quizId: string;
    score: number;
    maxScore: number;
  }) {
    // 1. Enregistrement de la tentative
    const attempt: SimulatedAttempt = {
      id: `att_${this.attempts.length + 1}`,
      userId,
      academicEnrollmentId,
      quizId,
      score,
      status: 'COMPLETED',
    };
    this.attempts.push(attempt);

    // 2. Mise à jour de la progression scopée par [userId, academicEnrollmentId, quizId]
    const percentage = Math.round((score / maxScore) * 100);
    const existingIndex = this.progresses.findIndex(
      (p) =>
        p.userId === userId &&
        p.academicEnrollmentId === academicEnrollmentId &&
        p.quizId === quizId
    );

    if (existingIndex >= 0) {
      const existing = this.progresses[existingIndex];
      existing.attemptsCount += 1;
      existing.bestScore = Math.max(existing.bestScore, score);
      existing.successRate = Math.max(existing.successRate, percentage);
    } else {
      this.progresses.push({
        id: `prog_${this.progresses.length + 1}`,
        userId,
        academicEnrollmentId,
        quizId,
        bestScore: score,
        successRate: percentage,
        attemptsCount: 1,
      });
    }
  }

  fetchProgressForEnrollment(userId: string, academicEnrollmentId: string) {
    return this.progresses.filter(
      (p) => p.userId === userId && p.academicEnrollmentId === academicEnrollmentId
    );
  }
}

test('AnnualizedProgress: deux années scolaires distinctes ont des progressions isolées sans collision pour le même quiz', () => {
  const store = new SimulatedProgressStore();
  const userId = 'user_redoublant';
  const enrollment2026 = 'enr_2026_tle';
  const enrollment2027 = 'enr_2027_tle';
  const quizId = 'quiz_mecanique_newton';

  // Année 2026-2027 : l'élève fait 6/10 (60%)
  store.recordAttemptAndUpsertProgress({
    userId,
    academicEnrollmentId: enrollment2026,
    quizId,
    score: 6,
    maxScore: 10,
  });

  // Année 2027-2028 (redoublement) : l'élève fait 10/10 (100%)
  store.recordAttemptAndUpsertProgress({
    userId,
    academicEnrollmentId: enrollment2027,
    quizId,
    score: 10,
    maxScore: 10,
  });

  // Vérifier la progression de l'année 2026-2027
  const progress2026 = store.fetchProgressForEnrollment(userId, enrollment2026);
  assert.equal(progress2026.length, 1);
  assert.equal(progress2026[0].academicEnrollmentId, enrollment2026);
  assert.equal(progress2026[0].bestScore, 6);
  assert.equal(progress2026[0].successRate, 60);
  assert.equal(progress2026[0].attemptsCount, 1);

  // Vérifier la progression de l'année 2027-2028
  const progress2027 = store.fetchProgressForEnrollment(userId, enrollment2027);
  assert.equal(progress2027.length, 1);
  assert.equal(progress2027[0].academicEnrollmentId, enrollment2027);
  assert.equal(progress2027[0].bestScore, 10);
  assert.equal(progress2027[0].successRate, 100);
  assert.equal(progress2027[0].attemptsCount, 1);
});

test('AnnualizedProgress: la progression de l’année N est strictement invisible dans l’année N+1', () => {
  const store = new SimulatedProgressStore();
  const userId = 'user_transition';
  const enrollment2026 = 'enr_2026_tle';
  const enrollment2027 = 'enr_2027_sante';

  store.recordAttemptAndUpsertProgress({
    userId,
    academicEnrollmentId: enrollment2026,
    quizId: 'quiz_chimie_tle',
    score: 8,
    maxScore: 10,
  });

  // L'élève passe en L1 Santé (enrollment2027) et n'a pas encore fait de quiz
  const progress2027 = store.fetchProgressForEnrollment(userId, enrollment2027);
  assert.equal(progress2027.length, 0, 'La progression 2027-2028 doit être vide initialement');

  // Son historique 2026-2027 existe toujours
  const progress2026 = store.fetchProgressForEnrollment(userId, enrollment2026);
  assert.equal(progress2026.length, 1);
});

test('UserActivity: reprise d’exercice filtrée si le niveau de l’exercice ne correspond plus à l’affectation active', () => {
  type SimulatedActivity = {
    userId: string;
    lastExercise: { id: string; gradeId: string };
  };

  const activity: SimulatedActivity = {
    userId: 'user_bac',
    lastExercise: { id: 'ex_tle_1', gradeId: 'grade_tle' },
  };

  // 1. En 2026-2027, l'élève est en Terminale -> reprise autorisée
  const enrollment2026 = { audience: 'SECONDARY', secondaryGradeId: 'grade_tle' };
  const canResume2026 =
    enrollment2026.audience === 'SECONDARY' &&
    enrollment2026.secondaryGradeId === activity.lastExercise.gradeId;
  assert.equal(canResume2026, true);

  // 2. En 2027-2028, l'élève est en Santé -> reprise filtrée et non réinjectée
  const enrollment2027 = { audience: 'HEALTH', secondaryGradeId: null };
  const canResume2027 =
    enrollment2027.audience === 'SECONDARY' &&
    enrollment2027.secondaryGradeId === activity.lastExercise.gradeId;
  assert.equal(canResume2027, false, 'Un ancien exercice de Terminale ne doit pas être réinjecté pour un étudiant Santé');
});
