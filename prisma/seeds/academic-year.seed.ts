import type { PrismaClient } from '@prisma/client';

export async function seedAcademicYears(prisma: PrismaClient) {
  console.log('📅 Seeding Academic Years...');

  const academicYears = [
    {
      code: '2025-2026',
      label: 'Année scolaire 2025-2026',
      startsAt: new Date('2025-09-01T00:00:00.000Z'),
      endsAt: new Date('2026-09-01T00:00:00.000Z'),
    },
    {
      code: '2026-2027',
      label: 'Année scolaire 2026-2027',
      startsAt: new Date('2026-09-01T00:00:00.000Z'),
      endsAt: new Date('2027-09-01T00:00:00.000Z'),
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

  const unused2027 = await prisma.academicYear.findUnique({
    where: { code: '2027-2028' },
    include: { _count: { select: { enrollments: true } } },
  });
  if (unused2027 && unused2027._count.enrollments === 0) {
    await prisma.academicYear.delete({ where: { id: unused2027.id } });
  }

  console.log(`   ✓ ${academicYears.length} années scolaires créées (2025-2026, 2026-2027)`);
}
