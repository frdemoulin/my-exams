import type { PrismaClient } from '@prisma/client';

export async function seedAcademicEnrollments(prisma: PrismaClient) {
  console.log('📝 Seeding Academic Enrollments...');

  const academicYear = await prisma.academicYear.findUnique({
    where: { code: '2026-2027' },
  });

  if (!academicYear) {
    console.log('   ⚠️ Année scolaire 2026-2027 introuvable, skipping enrollments');
    return;
  }

  // Chercher une version de programme Santé par défaut (Reims de préférence)
  const healthVersion = await prisma.healthProgramVersion.findFirst({
    where: {
      institution: { slug: { contains: 'reims' } },
    },
    include: {
      pathways: { take: 1 },
    },
  });

  const fallbackVersion = healthVersion ?? (await prisma.healthProgramVersion.findFirst({
    include: { pathways: { take: 1 } },
  }));

  const demoUser = await prisma.user.findUnique({
    where: { email: 'demo@example.com' },
  });

  if (demoUser && fallbackVersion) {
    await prisma.userAcademicEnrollment.upsert({
      where: {
        userId_academicYearId: {
          userId: demoUser.id,
          academicYearId: academicYear.id,
        },
      },
      update: {
        audience: 'HEALTH',
        healthProgramVersionId: fallbackVersion.id,
        healthPathwayId: fallbackVersion.pathways[0]?.id ?? null,
        lockedAt: new Date('2026-09-01T08:00:00.000Z'),
        createdBy: 'SELF_ONBOARDING',
      },
      create: {
        userId: demoUser.id,
        academicYearId: academicYear.id,
        audience: 'HEALTH',
        healthProgramVersionId: fallbackVersion.id,
        healthPathwayId: fallbackVersion.pathways[0]?.id ?? null,
        lockedAt: new Date('2026-09-01T08:00:00.000Z'),
        createdBy: 'SELF_ONBOARDING',
      },
    });
  }

  const adminE2E = await prisma.user.findUnique({
    where: { email: 'admin-e2e@example.com' },
  });

  if (adminE2E && fallbackVersion) {
    await prisma.userAcademicEnrollment.upsert({
      where: {
        userId_academicYearId: {
          userId: adminE2E.id,
          academicYearId: academicYear.id,
        },
      },
      update: {
        audience: 'HEALTH',
        healthProgramVersionId: fallbackVersion.id,
        healthPathwayId: fallbackVersion.pathways[0]?.id ?? null,
        lockedAt: new Date('2026-09-01T08:00:00.000Z'),
        createdBy: 'ADMIN',
      },
      create: {
        userId: adminE2E.id,
        academicYearId: academicYear.id,
        audience: 'HEALTH',
        healthProgramVersionId: fallbackVersion.id,
        healthPathwayId: fallbackVersion.pathways[0]?.id ?? null,
        lockedAt: new Date('2026-09-01T08:00:00.000Z'),
        createdBy: 'ADMIN',
      },
    });
  }

  console.log('   ✓ Affectations pédagogiques initialisées');
}
