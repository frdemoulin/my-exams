import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  computeThemeMasteryStatus,
  selectLatestAttempt,
} from '../../src/core/health/health-theme-progress.service';
import type { HealthThemeSourceMetrics } from '../../src/core/health/health-theme-progress.types';

describe('HealthThemeProgressService — Business Rules & Qualification Logic', () => {
  describe('selectLatestAttempt (Deterministic Tie-Break)', () => {
    it('returns null if list is empty', () => {
      assert.equal(selectLatestAttempt([]), null);
    });

    it('selects attempt with most recent submittedAt', () => {
      const attempts = [
        { id: 'att-1', submittedAt: new Date('2026-08-01T10:00:00Z'), createdAt: new Date('2026-08-01T09:00:00Z') },
        { id: 'att-2', submittedAt: new Date('2026-08-03T10:00:00Z'), createdAt: new Date('2026-08-03T09:00:00Z') },
        { id: 'att-3', submittedAt: new Date('2026-08-02T10:00:00Z'), createdAt: new Date('2026-08-02T09:00:00Z') },
      ];
      const selected = selectLatestAttempt(attempts);
      assert.equal(selected?.id, 'att-2');
    });

    it('tie-breaks on createdAt when submittedAt are equal or null', () => {
      const attempts = [
        { id: 'att-a', submittedAt: null, createdAt: new Date('2026-08-01T10:00:00Z') },
        { id: 'att-b', submittedAt: null, createdAt: new Date('2026-08-05T10:00:00Z') },
        { id: 'att-c', submittedAt: null, createdAt: new Date('2026-08-02T10:00:00Z') },
      ];
      const selected = selectLatestAttempt(attempts);
      assert.equal(selected?.id, 'att-b');
    });

    it('tie-breaks stably on id when both submittedAt and createdAt are equal', () => {
      const now = new Date('2026-08-01T10:00:00Z');
      const attempts = [
        { id: 'att-01', submittedAt: now, createdAt: now },
        { id: 'att-99', submittedAt: now, createdAt: now },
        { id: 'att-50', submittedAt: now, createdAt: now },
      ];
      const selected = selectLatestAttempt(attempts);
      assert.equal(selected?.id, 'att-99');
    });
  });

  describe('computeThemeMasteryStatus', () => {
    it('returns INSUFFICIENT_DATA when student has no history (0 questions)', () => {
      const status = computeThemeMasteryStatus(null, null, null);
      assert.equal(status, 'INSUFFICIENT_DATA');
    });

    it('returns INSUFFICIENT_DATA when total questions < 3', () => {
      const quiz: HealthThemeSourceMetrics = { questionsEvaluated: 2, percentage: 100 };
      const status = computeThemeMasteryStatus(quiz, null, null);
      assert.equal(status, 'INSUFFICIENT_DATA');
    });

    it('returns INSUFFICIENT_DATA when total questions >= 3 but no single source has >= 3 questions', () => {
      // 1 question Quiz + 1 Colle + 1 EB = 3 au total, mais 0 source qualifiée (>= 3 questions)
      const quiz: HealthThemeSourceMetrics = { questionsEvaluated: 1, percentage: 100 };
      const colles: HealthThemeSourceMetrics = { questionsEvaluated: 1, percentage: 100 };
      const mockExams: HealthThemeSourceMetrics = { questionsEvaluated: 1, percentage: 100 };

      const status = computeThemeMasteryStatus(quiz, colles, mockExams);
      assert.equal(status, 'INSUFFICIENT_DATA', 'Doit être insuffisant car aucune source ne dispose de >= 3 questions');
    });

    it('returns TO_REVIEW when a single qualified source (Quiz >= 3) has < 60 %', () => {
      const quiz: HealthThemeSourceMetrics = { questionsEvaluated: 3, percentage: 55 };
      const status = computeThemeMasteryStatus(quiz, null, null);
      assert.equal(status, 'TO_REVIEW');
    });

    it('returns TO_CONSOLIDATE when qualified source has >= 80 % but total questions < 5', () => {
      const quiz: HealthThemeSourceMetrics = { questionsEvaluated: 3, percentage: 90 };
      // Total = 3 < 5 pour SOLID, mais >= 60 donc pas TO_REVIEW
      const status = computeThemeMasteryStatus(quiz, null, null);
      assert.equal(status, 'TO_CONSOLIDATE');
    });

    it('returns SOLID when qualified source has >= 80 % and total questions >= 5', () => {
      const quiz: HealthThemeSourceMetrics = { questionsEvaluated: 5, percentage: 80 };
      const status = computeThemeMasteryStatus(quiz, null, null);
      assert.equal(status, 'SOLID');
    });

    it('returns TO_REVIEW when present in Quiz + Colles and Colles < 60 %', () => {
      const quiz: HealthThemeSourceMetrics = { questionsEvaluated: 4, percentage: 90 };
      const colles: HealthThemeSourceMetrics = { questionsEvaluated: 3, percentage: 50 };

      const status = computeThemeMasteryStatus(quiz, colles, null);
      assert.equal(status, 'TO_REVIEW', 'Au moins une source qualifiée < 60 % déclenche À revoir');
    });

    it('does NOT penalize for an unqualified source with < 60 % if it has < 3 questions', () => {
      // Quiz a 5 questions à 90 % (qualifiée)
      // Colles a seulement 1 question à 0 % (non qualifiée car < 3)
      const quiz: HealthThemeSourceMetrics = { questionsEvaluated: 5, percentage: 90 };
      const colles: HealthThemeSourceMetrics = { questionsEvaluated: 1, percentage: 0 };

      const status = computeThemeMasteryStatus(quiz, colles, null);
      assert.equal(
        status,
        'SOLID',
        'Une source avec moins de 3 questions ne doit pas déclencher À revoir',
      );
    });

    it('returns SOLID when present in the three families with all qualified >= 80 % and total >= 5', () => {
      const quiz: HealthThemeSourceMetrics = { questionsEvaluated: 3, percentage: 85 };
      const colles: HealthThemeSourceMetrics = { questionsEvaluated: 3, percentage: 80 };
      const mockExams: HealthThemeSourceMetrics = { questionsEvaluated: 3, percentage: 90 };

      const status = computeThemeMasteryStatus(quiz, colles, mockExams);
      assert.equal(status, 'SOLID');
    });

    it('returns TO_CONSOLIDATE when results are in intermediate zone (60 % - 79 %)', () => {
      const quiz: HealthThemeSourceMetrics = { questionsEvaluated: 4, percentage: 70 };
      const colles: HealthThemeSourceMetrics = { questionsEvaluated: 3, percentage: 75 };

      const status = computeThemeMasteryStatus(quiz, colles, null);
      assert.equal(status, 'TO_CONSOLIDATE');
    });

    it('returns TO_CONSOLIDATE when a source has no exploitable percentage (percentage === null)', () => {
      const quiz: HealthThemeSourceMetrics = { questionsEvaluated: 3, percentage: null };
      const status = computeThemeMasteryStatus(quiz, null, null);
      assert.equal(status, 'TO_CONSOLIDATE');
    });

    it('keeps source metrics strictly separated with no inter-family average', () => {
      const quiz: HealthThemeSourceMetrics = { questionsEvaluated: 10, percentage: 90, correctAnswers: 9 };
      const colles: HealthThemeSourceMetrics = { questionsEvaluated: 5, percentage: 40, score: 2, maxScore: 5 };
      const mockExams: HealthThemeSourceMetrics = { questionsEvaluated: 2, percentage: 50, score: 1, maxScore: 2 };

      // Vérification que les objets sources restent indépendants
      assert.equal(quiz.percentage, 90);
      assert.equal(colles.percentage, 40);
      assert.equal(mockExams.percentage, 50);

      // Le statut est TO_REVIEW car Colles (>= 3 questions) < 60 %
      const status = computeThemeMasteryStatus(quiz, colles, mockExams);
      assert.equal(status, 'TO_REVIEW');
    });
  });
});
