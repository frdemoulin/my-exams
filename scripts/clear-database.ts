import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

async function clearDatabase() {
  console.log('🧹 Nettoyage de la base de données...');

  const { PrismaClient } = await import('@prisma/client');
  const prisma = new PrismaClient();

  try {
    // Relations NextAuth / Authenticator
    await prisma.verificationToken.deleteMany({});
    await prisma.session.deleteMany({});
    await prisma.account.deleteMany({});
    await prisma.authenticator.deleteMany({});
    await prisma.authLog.deleteMany({});
    await prisma.usageEvent.deleteMany({});
    await prisma.errorLog.deleteMany({});
    await prisma.usageDailyStat.deleteMany({});
    await prisma.errorDailyStat.deleteMany({});

    // Données applicatives (ordre inverse des dépendances)
    await prisma.examPaper.deleteMany({});
    await prisma.domainScope.deleteMany({});
    await prisma.theme.deleteMany({});
    await prisma.domain.deleteMany({});
    await prisma.curriculum.deleteMany({});
    await prisma.teaching.deleteMany({});
    await prisma.subject.deleteMany({});
    await prisma.grade.deleteMany({});
    await prisma.examinationCenter.deleteMany({});
    await prisma.division.deleteMany({});
    await prisma.diploma.deleteMany({});

    // Utilisateurs en dernier (cascade déjà configurée sur Account/Session)
    await prisma.user.deleteMany({});

    console.log('✅ Base de données nettoyée !');
  } catch (error) {
    console.error('❌ Erreur lors du nettoyage:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

clearDatabase()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
