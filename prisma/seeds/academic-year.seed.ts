import type { PrismaClient } from '@prisma/client';

export async function seedAcademicYears(prisma: PrismaClient) {
  console.log('📅 Seeding Academic Years...');

  const academicYears = [
    {
      code: '2026-2027',
      label: 'Année scolaire 2026-2027',
      startsAt: new Date('2026-09-01T00:00:00.000Z'),
      endsAt: new Date('2027-08-31T23:59:59.999Z'),
    },
    {
      code: '2027-2028',
      label: 'Année scolaire 2027-2028',
      startsAt: new Date('2027-09-01T00:00:00.000Z'),
      endsAt: new Date('2028-08-31T23:59:59.999Z'),
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
