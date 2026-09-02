import assert from 'node:assert/strict';
import test from 'node:test';

import {
  AcademicYearError,
} from '../../src/core/academic-year/academic-year.service';

// Simuler la logique de résolution temporelle d'année scolaire
type MockAcademicYear = {
  id: string;
  code: string;
  label: string;
  startsAt: Date;
  endsAt: Date;
};

function resolveActiveYearFromList(years: MockAcademicYear[], date: Date): MockAcademicYear {
  const matching = years.filter(
    (y) => y.startsAt.getTime() <= date.getTime() && y.endsAt.getTime() >= date.getTime()
  );

  if (matching.length === 0) {
    throw new AcademicYearError(
      `Aucune année scolaire active pour la date : ${date.toISOString()}`,
      'NOT_FOUND'
    );
  }

  if (matching.length > 1) {
    throw new AcademicYearError(
      `Plusieurs années scolaires actives détectées pour la date : ${date.toISOString()}`,
      'MULTIPLE_ACTIVE'
    );
  }

  return matching[0];
}

function checkDateOverlap(startsAt: Date, endsAt: Date, existingYears: MockAcademicYear[]): void {
  if (startsAt >= endsAt) {
    throw new AcademicYearError(
      'La date de début doit être strictement antérieure à la date de fin.',
      'INVALID_DATES'
    );
  }

  const overlapping = existingYears.find(
    (y) => startsAt <= y.endsAt && endsAt >= y.startsAt
  );

  if (overlapping) {
    throw new AcademicYearError(
      `Chevauchement détecté avec l'année scolaire ${overlapping.code} (${overlapping.label}).`,
      'OVERLAP'
    );
  }
}

const mockYears: MockAcademicYear[] = [
  {
    id: 'year_2026',
    code: '2026-2027',
    label: 'Année scolaire 2026-2027',
    startsAt: new Date('2026-09-01T00:00:00.000Z'),
    endsAt: new Date('2027-08-31T23:59:59.999Z'),
  },
  {
    id: 'year_2027',
    code: '2027-2028',
    label: 'Année scolaire 2027-2028',
    startsAt: new Date('2027-09-01T00:00:00.000Z'),
    endsAt: new Date('2028-08-31T23:59:59.999Z'),
  },
];

test('AcademicYear: résout l’année 2026-2027 pour une date en octobre 2026', () => {
  const date = new Date('2026-10-15T10:00:00.000Z');
  const year = resolveActiveYearFromList(mockYears, date);
  assert.equal(year.code, '2026-2027');
  assert.equal(year.label, 'Année scolaire 2026-2027');
});

test('AcademicYear: résout l’année 2027-2028 pour une date en octobre 2027 (injection d’horloge)', () => {
  const date = new Date('2027-10-15T10:00:00.000Z');
  const year = resolveActiveYearFromList(mockYears, date);
  assert.equal(year.code, '2027-2028');
  assert.equal(year.label, 'Année scolaire 2027-2028');
});

test('AcademicYear: refuse avec NOT_FOUND si aucune année n’est configurée pour la date', () => {
  const date = new Date('2025-05-01T00:00:00.000Z');
  assert.throws(
    () => resolveActiveYearFromList(mockYears, date),
    (err: unknown) => {
      assert.ok(err instanceof AcademicYearError);
      assert.equal(err.code, 'NOT_FOUND');
      return true;
    }
  );
});

test('AcademicYear: refuse avec MULTIPLE_ACTIVE si deux années se chevauchent pour la même date', () => {
  const corruptedYears: MockAcademicYear[] = [
    ...mockYears,
    {
      id: 'year_overlap',
      code: '2026-BIS',
      label: 'Année doublon',
      startsAt: new Date('2026-01-01T00:00:00.000Z'),
      endsAt: new Date('2026-12-31T23:59:59.999Z'),
    },
  ];

  const date = new Date('2026-10-15T10:00:00.000Z');
  assert.throws(
    () => resolveActiveYearFromList(corruptedYears, date),
    (err: unknown) => {
      assert.ok(err instanceof AcademicYearError);
      assert.equal(err.code, 'MULTIPLE_ACTIVE');
      return true;
    }
  );
});

test('AcademicYear: refuse la création d’une année si startsAt >= endsAt', () => {
  assert.throws(
    () =>
      checkDateOverlap(
        new Date('2028-09-01T00:00:00.000Z'),
        new Date('2028-08-01T00:00:00.000Z'),
        mockYears
      ),
    (err: unknown) => {
      assert.ok(err instanceof AcademicYearError);
      assert.equal(err.code, 'INVALID_DATES');
      return true;
    }
  );
});

test('AcademicYear: refuse la création d’une année si elle chevauche une année existante', () => {
  assert.throws(
    () =>
      checkDateOverlap(
        new Date('2027-01-01T00:00:00.000Z'),
        new Date('2027-12-31T23:59:59.999Z'),
        mockYears
      ),
    (err: unknown) => {
      assert.ok(err instanceof AcademicYearError);
      assert.equal(err.code, 'OVERLAP');
      return true;
    }
  );
});

test('AcademicYear: autorise des années strictement consécutives sans chevauchement', () => {
  assert.doesNotThrow(() => {
    checkDateOverlap(
      new Date('2028-09-01T00:00:00.000Z'),
      new Date('2029-08-31T23:59:59.999Z'),
      mockYears
    );
  });
});
