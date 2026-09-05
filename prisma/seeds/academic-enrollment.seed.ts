import type { PrismaClient } from '@prisma/client';

export async function seedAcademicEnrollments(prisma: PrismaClient) {
  console.log('📝 Seeding Academic Enrollments...');

  const academicYear2025 = await prisma.academicYear.findUnique({
    where: { code: '2025-2026' },
  });

  const academicYear2026 = await prisma.academicYear.findUnique({
    where: { code: '2026-2027' },
  });

  if (!academicYear2026) {
    console.log('   ⚠️ Année scolaire 2026-2027 introuvable, skipping enrollments');
    return;
  }

  // Résolution stricte de l'établissement URCA (UAI 0511296G)
  const urcaInstitution = await prisma.healthInstitution.findFirst({
    where: {
      OR: [
        { uaiCode: '0511296G' },
        { slug: 'universite-de-reims-champagne-ardenne' },
      ],
    },
  });

  if (!urcaInstitution) {
    throw new Error('Établissement URCA introuvable (UAI 0511296G).');
  }

  // Résolution stricte de la maquette URCA 2026-2027 (las-sps-2026-2027)
  const urcaVersion2026 = await prisma.healthProgramVersion.findUnique({
    where: {
      institutionId_slug: {
        institutionId: urcaInstitution.id,
        slug: 'las-sps-2026-2027',
      },
    },
  });

  if (!urcaVersion2026) {
    throw new Error('Maquette URCA las-sps-2026-2027 introuvable.');
  }

  // Parcours SALSA déterministe
  const salsaPathway = await prisma.healthPathway.findUnique({
    where: {
      programVersionId_slug: {
        programVersionId: urcaVersion2026.id,
        slug: 'sciences-appliquees-a-la-sante-salsa',
      },
    },
  });

  // Résolution de la maquette URCA 2025-2026 (historique)
  const urcaVersion2025 = await prisma.healthProgramVersion.findUnique({
    where: {
      institutionId_slug: {
        institutionId: urcaInstitution.id,
        slug: 'las-2025-2026',
      },
    },
  });

  // Seeding des affectations pour les comptes de test/démonstration (uniquement hors production avec SEED_DEV_FIXTURES=1)
  if (process.env.NODE_ENV === 'production' || process.env.SEED_DEV_FIXTURES !== '1') {
    console.log('   ⏭️ Affectations de test ignorées (activables avec SEED_DEV_FIXTURES=1 hors production)');
    return;
  }

  // Utilisateur de test E2E / Admin technique
  const adminE2E = await prisma.user.findUnique({
    where: { email: 'admin-e2e@example.com' },
  });

  if (adminE2E) {
    // 1. Enrollment historique 2025-2026
    if (academicYear2025 && urcaVersion2025) {
      const enrollment2025 = await prisma.userAcademicEnrollment.upsert({
        where: {
          userId_academicYearId: {
            userId: adminE2E.id,
            academicYearId: academicYear2025.id,
          },
        },
        update: {
          audience: 'HEALTH',
          healthProgramVersionId: urcaVersion2025.id,
          healthPathwayId: null,
          lockedAt: new Date('2026-09-01T00:00:00.000Z'),
          createdBy: 'ADMIN',
        },
        create: {
          userId: adminE2E.id,
          academicYearId: academicYear2025.id,
          audience: 'HEALTH',
          healthProgramVersionId: urcaVersion2025.id,
          healthPathwayId: null,
          lockedAt: new Date('2026-09-01T00:00:00.000Z'),
          createdBy: 'ADMIN',
        },
      });

      // Rattachement garanti des tentatives UE14 2025
      const ue14_2025 = await prisma.healthCourseUnit.findFirst({
        where: { programVersionId: urcaVersion2025.id, code: 'UE14' },
        include: { mockExams: { select: { id: true } } },
      });
      if (ue14_2025) {
        const ue14MockExamIds = ue14_2025.mockExams.map((m) => m.id);
        await prisma.userHealthMockExamAttempt.updateMany({
          where: {
            mockExamId: { in: ue14MockExamIds },
            userId: adminE2E.id,
          },
          data: {
            academicEnrollmentId: enrollment2025.id,
          },
        });
      }
    }

    // 2. Enrollment actif 2026-2027
    await prisma.userAcademicEnrollment.upsert({
      where: {
        userId_academicYearId: {
          userId: adminE2E.id,
          academicYearId: academicYear2026.id,
        },
      },
      update: {
        audience: 'HEALTH',
        healthProgramVersionId: urcaVersion2026.id,
        healthPathwayId: salsaPathway?.id ?? null,
        lockedAt: new Date('2026-09-01T08:00:00.000Z'),
        createdBy: 'ADMIN',
      },
      create: {
        userId: adminE2E.id,
        academicYearId: academicYear2026.id,
        audience: 'HEALTH',
        healthProgramVersionId: urcaVersion2026.id,
        healthPathwayId: salsaPathway?.id ?? null,
        lockedAt: new Date('2026-09-01T08:00:00.000Z'),
        createdBy: 'ADMIN',
      },
    });
  }

  // Compte de démonstration
  const demoUser = await prisma.user.findUnique({
    where: { email: 'demo@example.com' },
  });

  if (demoUser) {
    await prisma.userAcademicEnrollment.upsert({
      where: {
        userId_academicYearId: {
          userId: demoUser.id,
          academicYearId: academicYear2026.id,
        },
      },
      update: {
        audience: 'HEALTH',
        healthProgramVersionId: urcaVersion2026.id,
        healthPathwayId: salsaPathway?.id ?? null,
        lockedAt: new Date('2026-09-01T08:00:00.000Z'),
        createdBy: 'SELF_ONBOARDING',
      },
      create: {
        userId: demoUser.id,
        academicYearId: academicYear2026.id,
        audience: 'HEALTH',
        healthProgramVersionId: urcaVersion2026.id,
        healthPathwayId: salsaPathway?.id ?? null,
        lockedAt: new Date('2026-09-01T08:00:00.000Z'),
        createdBy: 'SELF_ONBOARDING',
      },
    });
  }

  console.log('   ✓ Affectations pédagogiques initialisées (2025-2026 et 2026-2027 normalisées)');
}
