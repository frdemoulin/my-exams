import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

const { PrismaClient } = require('@prisma/client') as typeof import('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const dryRun = process.env.DRY_RUN === '1';
  const confirm = process.env.CONFIRM_CLEAR_DOMAINS_THEMES;
  if (!dryRun && confirm !== '1') {
    console.error(
      '❌ CONFIRM_CLEAR_DOMAINS_THEMES=1 requis pour supprimer domaines et themes.'
    );
    process.exit(1);
  }

  const themeCount = await prisma.theme.count();
  const domainCount = await prisma.domain.count();
  const domainScopeCount = await prisma.domainScope.count();
  const exerciseCount = await prisma.exercise.count();
  const examPaperCount = await prisma.examPaper.count();

  console.log(`🧹 Suppression des themes (${themeCount}) et domaines (${domainCount})`);
  console.log(`ℹ️  DomainScopes: ${domainScopeCount}`);
  console.log(`ℹ️  Exercices: ${exerciseCount}, sujets: ${examPaperCount}`);

  if (dryRun) {
    console.log('✅ DRY RUN: aucune modification appliquee.');
    return;
  }

  const exerciseUpdate = await prisma.exercise.updateMany({
    data: {
      themeIds: [],
    },
  });

  const examPaperUpdate = await prisma.examPaper.updateMany({
    data: {
      domainIds: [],
      themeIds: [],
    },
  });

  console.log(
    `✅ References nettoyees: exercises=${exerciseUpdate.count}, examPapers=${examPaperUpdate.count}`
  );

  const deletedDomainScopes = await prisma.domainScope.deleteMany();
  const deletedThemes = await prisma.theme.deleteMany();
  const deletedDomains = await prisma.domain.deleteMany();

  console.log(
    `✅ Supprime: domainScopes=${deletedDomainScopes.count}, themes=${deletedThemes.count}, domaines=${deletedDomains.count}`
  );
}

main()
  .catch((error) => {
    console.error('❌ Erreur suppression domaines/themes:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
