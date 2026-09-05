import assert from 'node:assert/strict';
import test from 'node:test';

try {
  process.loadEnvFile('.env.local');
} catch {}

import prisma from '../../src/lib/db/prisma';
import {
  ensureNoAcademicYearOverlap,
  getActiveAcademicYear,
  AcademicYearError,
} from '../../src/core/academic-year/academic-year.service';

test('AcademicYear (réel): résout 2026-2027 pour une date en milieu d’année', async () => {
  const date = new Date('2026-10-15T10:00:00.000Z');
  const year = await getActiveAcademicYear(date);
  assert.equal(year.code, '2026-2027');
  assert.equal(year.label, 'Année scolaire 2026-2027');
});

test('AcademicYear (réel): cas limite 1 - startsAt exact (2026-09-01T00:00:00.000Z) est ACTIF pour 2026-2027', async () => {
  const date = new Date('2026-09-01T00:00:00.000Z');
  const year = await getActiveAcademicYear(date);
  assert.equal(year.code, '2026-2027');
});

test('AcademicYear (réel): 1 ms avant endsAt (2027-08-31T23:59:59.999Z) est ACTIF pour 2026-2027', async () => {
  const date = new Date('2027-08-31T23:59:59.999Z');
  const year = await getActiveAcademicYear(date);
  assert.equal(year.code, '2026-2027');
});

test('AcademicYear (réel): cas limite 2 - endsAt exact bascule sur l’année suivante avec intervalle semi-ouvert (fixture éphémère)', async () => {
  const ephemeralYear = await prisma.academicYear.create({
    data: {
      code: '2027-2028',
      label: 'Année scolaire 2027-2028 (Fixture)',
      startsAt: new Date('2027-09-01T00:00:00.000Z'),
      endsAt: new Date('2028-09-01T00:00:00.000Z'),
    },
  });
  try {
    const date = new Date('2027-09-01T00:00:00.000Z');
    const year = await getActiveAcademicYear(date);
    assert.equal(year.code, '2027-2028');
  } finally {
    await prisma.academicYear.delete({ where: { id: ephemeralYear.id } });
  }
});

test('AcademicYear (réel): endsAt exact de la dernière année (2027-09-01T00:00:00.000Z) lève NOT_FOUND en l’absence de 2027-2028', async () => {
  const date = new Date('2027-09-01T00:00:00.000Z');
  await assert.rejects(
    () => getActiveAcademicYear(date),
    (err: unknown) => {
      assert.ok(err instanceof AcademicYearError);
      assert.equal(err.code, 'NOT_FOUND');
      return true;
    }
  );
});

test('AcademicYear (réel): refuse avec NOT_FOUND pour une date antérieure aux années configurées', async () => {
  const date = new Date('2025-01-01T00:00:00.000Z');
  await assert.rejects(
    () => getActiveAcademicYear(date),
    (err: unknown) => {
      assert.ok(err instanceof AcademicYearError);
      assert.equal(err.code, 'NOT_FOUND');
      return true;
    }
  );
});

test('AcademicYear (réel): ensureNoAcademicYearOverlap refuse si startsAt >= endsAt', async () => {
  await assert.rejects(
    () =>
      ensureNoAcademicYearOverlap(
        new Date('2029-09-01T00:00:00.000Z'),
        new Date('2029-08-01T00:00:00.000Z')
      ),
    (err: unknown) => {
      assert.ok(err instanceof AcademicYearError);
      assert.equal(err.code, 'INVALID_DATES');
      return true;
    }
  );
});

test('AcademicYear (réel): cas limite 3 - années contiguës [2027-09-01, 2028-09-01[ sont valides (aucun chevauchement)', async () => {
  await assert.doesNotReject(() =>
    ensureNoAcademicYearOverlap(
      new Date('2027-09-01T00:00:00.000Z'),
      new Date('2028-09-01T00:00:00.000Z')
    )
  );
});

test('AcademicYear (réel): cas limite 4 - chevauchement 1 ms (startsAt = 2027-08-31T23:59:59.999Z) lève OVERLAP', async () => {
  await assert.rejects(
    () =>
      ensureNoAcademicYearOverlap(
        new Date('2027-08-31T23:59:59.999Z'),
        new Date('2028-09-01T00:00:00.000Z')
      ),
    (err: unknown) => {
      assert.ok(err instanceof AcademicYearError);
      assert.equal(err.code, 'OVERLAP');
      return true;
    }
  );
});

test('AcademicYear (réel): chevauchement interne avec 2026-2027 lève OVERLAP', async () => {
  await assert.rejects(
    () =>
      ensureNoAcademicYearOverlap(
        new Date('2026-11-01T00:00:00.000Z'),
        new Date('2027-02-01T00:00:00.000Z')
      ),
    (err: unknown) => {
      assert.ok(err instanceof AcademicYearError);
      assert.equal(err.code, 'OVERLAP');
      return true;
    }
  );
});

test('AcademicYear (réel): excludeId permet de mettre à jour une année sans s’auto-détecter en chevauchement', async () => {
  const existing = await prisma.academicYear.findUnique({
    where: { code: '2026-2027' },
  });
  assert.ok(existing);

  await assert.doesNotReject(() =>
    ensureNoAcademicYearOverlap(existing.startsAt, existing.endsAt, existing.id)
  );
});
