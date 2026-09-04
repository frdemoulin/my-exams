import type { PrismaClient } from '@prisma/client';

export async function seedAcademicYears(prisma: PrismaClient) {
  console.log('📅 Seeding Academic Years...');

  const academicYears = [
    {
      code: '2026-2027',
      label: 'Année scolaire 2026-2027',
      startsAt: new Date('2026-09-01T00:00:00.000Z'),
      endsAt: new Date('2027-09-01T00:00:00.000Z'),
    },
    {
      code: '2027-2028',
      label: 'Année scolaire 2027-2028',
      startsAt: new Date('2027-09-01T00:00:00.000Z'),
      endsAt: new Date('2028-09-01T00:00:00.000Z'),
    },
  ];

  for (const year of academicYears) {
    await prisma.academicYear.upsert({
      where: { code: year.code },
      update: {
        label: year.label,
        startsAt: year.startsAt,
        endsAt: year.endsAt,
      },
      create: year,
    });
  }

  console.log(`   ✓ ${academicYears.length} années scolaires créées`);
}
