import prisma from '@/lib/db/prisma';
import type { AcademicYear } from '@prisma/client';

export class AcademicYearError extends Error {
  readonly code: 'NOT_FOUND' | 'MULTIPLE_ACTIVE' | 'OVERLAP' | 'INVALID_DATES';

  constructor(
    message: string,
    code: 'NOT_FOUND' | 'MULTIPLE_ACTIVE' | 'OVERLAP' | 'INVALID_DATES'
  ) {
    super(message);
    this.name = 'AcademicYearError';
    this.code = code;
  }
}

/**
 * Valide qu'aucun chevauchement d'intervalles de dates n'existe avec d'autres années scolaires.
 * Deux années scolaires [startsAt, endsAt] ne peuvent se chevaucher.
 */
export async function ensureNoAcademicYearOverlap(
  startsAt: Date,
  endsAt: Date,
  excludeId?: string
): Promise<void> {
  if (startsAt >= endsAt) {
    throw new AcademicYearError(
      'La date de début doit être strictement antérieure à la date de fin.',
      'INVALID_DATES'
    );
  }

  const overlapping = await prisma.academicYear.findFirst({
    where: {
      ...(excludeId ? { id: { not: excludeId } } : {}),
      AND: [
        { startsAt: { lt: endsAt } },
        { endsAt: { gt: startsAt } },
      ],
    },
    select: { id: true, code: true, label: true },
  });

  if (overlapping) {
    throw new AcademicYearError(
      `Chevauchement détecté avec l'année scolaire ${overlapping.code} (${overlapping.label}).`,
      'OVERLAP'
    );
  }
}

/**
 * Résout l'année scolaire active à un instant donné (par défaut `new Date()`).
 *
 * Invariant :
 * - Recherche l'année satisfaisant `startsAt <= date < endsAt` (intervalle semi-ouvert).
 * - Lève une erreur si aucune année n'est active pour la date donnée.
 * - Lève une erreur si plusieurs années couvrent la même date (incohérence temporelle).
 */
export async function getActiveAcademicYear(
  date: Date = new Date()
): Promise<AcademicYear> {
  const matchingYears = await prisma.academicYear.findMany({
    where: {
      startsAt: { lte: date },
      endsAt: { gt: date },
    },
  });

  if (matchingYears.length === 0) {
    throw new AcademicYearError(
      `Aucune année scolaire active pour la date : ${date.toISOString()}`,
      'NOT_FOUND'
    );
  }

  if (matchingYears.length > 1) {
    throw new AcademicYearError(
      `Plusieurs années scolaires actives détectées pour la date : ${date.toISOString()}`,
      'MULTIPLE_ACTIVE'
    );
  }

  return matchingYears[0];
}

/**
 * Crée une nouvelle année scolaire avec vérification de non-chevauchement.
 */
export async function createAcademicYear(input: {
  code: string;
  label: string;
  startsAt: Date;
  endsAt: Date;
}): Promise<AcademicYear> {
  await ensureNoAcademicYearOverlap(input.startsAt, input.endsAt);

  return prisma.academicYear.create({
    data: {
      code: input.code.trim(),
      label: input.label.trim(),
      startsAt: input.startsAt,
      endsAt: input.endsAt,
    },
  });
}
