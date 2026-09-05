import type { PrismaClient } from "@prisma/client";
import { loadProjectEnv } from "./lib/load-env";

export type SeedDemoAccountsResult = {
  college: {
    userId: string;
    email: string;
    role: string;
    academicYear: string;
    enrollmentId: string;
    vertical: string;
    gradeOrProgramVersion: string;
    pathway: string | null;
  };
  lycee: {
    userId: string;
    email: string;
    role: string;
    academicYear: string;
    enrollmentId: string;
    vertical: string;
    gradeOrProgramVersion: string;
    pathway: string | null;
  };
  sante: {
    userId: string;
    email: string;
    role: string;
    academicYear: string;
    enrollmentId: string;
    vertical: string;
    gradeOrProgramVersion: string;
    pathway: string | null;
  };
};

export async function seedDemoAccounts(
  prismaClient?: PrismaClient,
  options?: { resetProgress?: boolean }
): Promise<SeedDemoAccountsResult> {
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "Refus par sécurité : seedDemoAccounts est formellement interdit en environnement de production."
    );
  }

  let prisma = prismaClient;
  let shouldDisconnect = false;
  if (!prisma) {
    loadProjectEnv();
    const { PrismaClient } = await import("@prisma/client");
    prisma = new PrismaClient();
    shouldDisconnect = true;
  }

  try {
    // 1. Résolution stricte de l'année scolaire 2026-2027
    const academicYear = await prisma.academicYear.findUnique({
      where: { code: "2026-2027" },
    });
    if (!academicYear) {
      throw new Error("Année scolaire canonique '2026-2027' introuvable en base.");
    }

    // 2. Résolution des niveaux scolaires du Secondaire
    const grade3e = await prisma.grade.findFirst({
      where: { shortDescription: "3e" },
    });
    if (!grade3e) {
      throw new Error("Niveau scolaire canonique '3e' introuvable en base.");
    }

    const gradeTerminale = await prisma.grade.findFirst({
      where: { shortDescription: "Tle" },
    });
    if (!gradeTerminale) {
      throw new Error("Niveau scolaire canonique 'Terminale' (Tle) introuvable en base.");
    }

    // 3. Résolution des entités universitaires Santé (URCA / LAS-SPS / 2026-2027 / L1 / Physique-Chimie)
    const urca = await prisma.healthInstitution.findFirst({
      where: {
        OR: [
          { uaiCode: "0511296G" },
          { slug: "universite-de-reims-champagne-ardenne-0511296g" },
        ],
      },
    });
    if (!urca) {
      throw new Error("Établissement canonique URCA (UAI '0511296G') introuvable en base.");
    }

    const lasProgram = await prisma.healthProgram.findFirst({
      where: { code: "LAS_SPS" },
    });
    if (!lasProgram) {
      throw new Error("Programme canonique 'LAS_SPS' introuvable en base.");
    }

    const programVersions = await prisma.healthProgramVersion.findMany({
      where: {
        institutionId: urca.id,
        programId: lasProgram.id,
        slug: "las-sps-2026-2027",
      },
    });
    if (programVersions.length !== 1) {
      throw new Error(
        `Attendu exactement 1 ProgramVersion pour 'las-sps-2026-2027', trouvé ${programVersions.length}.`
      );
    }
    const programVersion = programVersions[0];
    if (programVersion.studyLevel !== "L1" || programVersion.academicYear !== "2026-2027") {
      throw new Error(
        `ProgramVersion invalide : attendu L1 / 2026-2027, reçu ${programVersion.studyLevel} / ${programVersion.academicYear}.`
      );
    }

    const pathways = await prisma.healthPathway.findMany({
      where: {
        programVersionId: programVersion.id,
        slug: "physique-chimie",
      },
    });
    if (pathways.length !== 1) {
      throw new Error(
        `Attendu exactement 1 parcours 'physique-chimie', trouvé ${pathways.length}.`
      );
    }
    const pathwayPhysiqueChimie = pathways[0];

    // 4. Nettoyage de l'ancien compte générique demo@example.com (si présent en DEV)
    const oldDemoUser = await prisma.user.findUnique({
      where: { email: "demo@example.com" },
    });
    if (oldDemoUser) {
      await prisma.userAcademicEnrollment.deleteMany({
        where: { userId: oldDemoUser.id },
      });
      await prisma.session.deleteMany({
        where: { userId: oldDemoUser.id },
      });
      await prisma.user.delete({
        where: { id: oldDemoUser.id },
      });
      console.log("   🧹 Ancien compte générique demo@example.com supprimé de la base DEV");
    }

    // 5. Création / Réparation des 3 comptes de démonstration
    const lockedAt = new Date("2026-09-01T08:00:00.000Z");

    // 5.1 Collège
    const userCollege = await prisma.user.upsert({
      where: { email: "demo-college@my-exams.local" },
      update: { name: "Démo Collège", roles: "USER" },
      create: {
        email: "demo-college@my-exams.local",
        name: "Démo Collège",
        roles: "USER",
      },
    });

    const enrollmentCollege = await prisma.userAcademicEnrollment.upsert({
      where: {
        userId_academicYearId: {
          userId: userCollege.id,
          academicYearId: academicYear.id,
        },
      },
      update: {
        audience: "SECONDARY",
        secondaryGradeId: grade3e.id,
        secondaryTeachingIds: [],
        healthProgramVersionId: null,
        healthPathwayId: null,
        lockedAt,
        createdBy: "SELF_ONBOARDING",
      },
      create: {
        userId: userCollege.id,
        academicYearId: academicYear.id,
        audience: "SECONDARY",
        secondaryGradeId: grade3e.id,
        secondaryTeachingIds: [],
        healthProgramVersionId: null,
        healthPathwayId: null,
        lockedAt,
        createdBy: "SELF_ONBOARDING",
      },
    });

    // 5.2 Lycée
    const userLycee = await prisma.user.upsert({
      where: { email: "demo-lycee@my-exams.local" },
      update: { name: "Démo Lycée", roles: "USER" },
      create: {
        email: "demo-lycee@my-exams.local",
        name: "Démo Lycée",
        roles: "USER",
      },
    });

    const enrollmentLycee = await prisma.userAcademicEnrollment.upsert({
      where: {
        userId_academicYearId: {
          userId: userLycee.id,
          academicYearId: academicYear.id,
        },
      },
      update: {
        audience: "SECONDARY",
        secondaryGradeId: gradeTerminale.id,
        secondaryTeachingIds: [],
        healthProgramVersionId: null,
        healthPathwayId: null,
        lockedAt,
        createdBy: "SELF_ONBOARDING",
      },
      create: {
        userId: userLycee.id,
        academicYearId: academicYear.id,
        audience: "SECONDARY",
        secondaryGradeId: gradeTerminale.id,
        secondaryTeachingIds: [],
        healthProgramVersionId: null,
        healthPathwayId: null,
        lockedAt,
        createdBy: "SELF_ONBOARDING",
      },
    });

    // 5.3 Santé
    const userSante = await prisma.user.upsert({
      where: { email: "demo-sante@my-exams.local" },
      update: { name: "Démo Santé", roles: "USER" },
      create: {
        email: "demo-sante@my-exams.local",
        name: "Démo Santé",
        roles: "USER",
      },
    });

    const enrollmentSante = await prisma.userAcademicEnrollment.upsert({
      where: {
        userId_academicYearId: {
          userId: userSante.id,
          academicYearId: academicYear.id,
        },
      },
      update: {
        audience: "HEALTH",
        secondaryGradeId: null,
        secondaryTeachingIds: [],
        healthProgramVersionId: programVersion.id,
        healthPathwayId: pathwayPhysiqueChimie.id,
        lockedAt,
        createdBy: "SELF_ONBOARDING",
      },
      create: {
        userId: userSante.id,
        academicYearId: academicYear.id,
        audience: "HEALTH",
        secondaryGradeId: null,
        secondaryTeachingIds: [],
        healthProgramVersionId: programVersion.id,
        healthPathwayId: pathwayPhysiqueChimie.id,
        lockedAt,
        createdBy: "SELF_ONBOARDING",
      },
    });

    // 6. Réinitialisation explicite de la progression (uniquement avec --reset-progress ou options.resetProgress)
    const shouldResetProgress =
      Boolean(options?.resetProgress) ||
      process.argv.includes("--reset-progress");

    if (shouldResetProgress) {
      const demoUserIds = [userCollege.id, userLycee.id, userSante.id];
      await prisma.userTrainingQuizAttempt.deleteMany({
        where: { userId: { in: demoUserIds } },
      });
      await prisma.userTrainingQuizProgress.deleteMany({
        where: { userId: { in: demoUserIds } },
      });
      await prisma.userHealthMockExamAttempt.deleteMany({
        where: { userId: { in: demoUserIds } },
      });
      await prisma.userExerciseHistory.deleteMany({
        where: { userId: { in: demoUserIds } },
      });
      console.log("   🧹 Progression et tentatives des 3 comptes réinitialisées (--reset-progress)");
    }

    return {
      college: {
        userId: userCollege.id,
        email: userCollege.email!,
        role: userCollege.roles,
        academicYear: academicYear.code,
        enrollmentId: enrollmentCollege.id,
        vertical: enrollmentCollege.audience,
        gradeOrProgramVersion: grade3e.shortDescription,
        pathway: null,
      },
      lycee: {
        userId: userLycee.id,
        email: userLycee.email!,
        role: userLycee.roles,
        academicYear: academicYear.code,
        enrollmentId: enrollmentLycee.id,
        vertical: enrollmentLycee.audience,
        gradeOrProgramVersion: gradeTerminale.shortDescription,
        pathway: null,
      },
      sante: {
        userId: userSante.id,
        email: userSante.email!,
        role: userSante.roles,
        academicYear: academicYear.code,
        enrollmentId: enrollmentSante.id,
        vertical: enrollmentSante.audience,
        gradeOrProgramVersion: `${programVersion.slug} (${programVersion.studyLevel})`,
        pathway: pathwayPhysiqueChimie.name,
      },
    };
  } finally {
    if (shouldDisconnect && prisma) {
      await prisma.$disconnect();
    }
  }
}

// Exécution directe CLI : npx tsx scripts/seed-demo-accounts.ts [--reset-progress]
if (require.main === module) {
  seedDemoAccounts()
    .then((result) => {
      console.log("\n✅ Comptes de démonstration synchronisés avec succès :");
      console.table([
        {
          Compte: "Collège",
          "User.id": result.college.userId,
          Email: result.college.email,
          Rôle: result.college.role,
          "Année académique": result.college.academicYear,
          Vertical: result.college.vertical,
          "Niveau / Maquette": result.college.gradeOrProgramVersion,
          Parcours: result.college.pathway ?? "—",
          "Enrollment.id": result.college.enrollmentId,
        },
        {
          Compte: "Lycée",
          "User.id": result.lycee.userId,
          Email: result.lycee.email,
          Rôle: result.lycee.role,
          "Année académique": result.lycee.academicYear,
          Vertical: result.lycee.vertical,
          "Niveau / Maquette": result.lycee.gradeOrProgramVersion,
          Parcours: result.lycee.pathway ?? "—",
          "Enrollment.id": result.lycee.enrollmentId,
        },
        {
          Compte: "Santé",
          "User.id": result.sante.userId,
          Email: result.sante.email,
          Rôle: result.sante.role,
          "Année académique": result.sante.academicYear,
          Vertical: result.sante.vertical,
          "Niveau / Maquette": result.sante.gradeOrProgramVersion,
          Parcours: result.sante.pathway ?? "—",
          "Enrollment.id": result.sante.enrollmentId,
        },
      ]);
      process.exit(0);
    })
    .catch((error) => {
      console.error("\n❌ Échec du seed des comptes de démonstration :", error);
      process.exit(1);
    });
}
