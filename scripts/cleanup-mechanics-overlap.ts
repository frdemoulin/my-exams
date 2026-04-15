import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

const { PrismaClient } = require('@prisma/client') as typeof import('@prisma/client');

const prisma = new PrismaClient();

const SUBJECT = 'Sciences physiques';
const LEGACY_DOMAIN_NAMES = ['Mouvement et interactions', 'Mouvement et forces'];

const THEME_TARGETS: Record<string, string> = {
  'mouvement et vitesse': 'Mouvement et interactions',
  'sources et formes d energie': 'Énergie',
};

const normalizeKey = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, ' ')
    .replace(/[^a-z0-9]+/gi, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();

async function main() {
  const subject = await prisma.subject.findFirst({
    where: { longDescription: SUBJECT },
    select: { id: true },
  });
  if (!subject) {
    throw new Error(`Sujet introuvable: ${SUBJECT}`);
  }

  const [targetDomains, legacyDomains] = await Promise.all([
    prisma.domain.findMany({
      where: {
        subjectId: subject.id,
        longDescription: { in: ['Mouvement et interactions', 'Énergie'] },
      },
      select: { id: true, longDescription: true },
    }),
    prisma.domain.findMany({
      where: {
        subjectId: subject.id,
        longDescription: { in: LEGACY_DOMAIN_NAMES },
      },
      include: {
        themes: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    }),
  ]);

  if (legacyDomains.length === 0) {
    console.log('Aucun domaine Mouvement à nettoyer.');
    return;
  }

  const targetDomainByName = new Map(
    targetDomains.map((domain) => [domain.longDescription, domain.id])
  );

  let movedThemes = 0;
  let deletedDomains = 0;

  for (const legacyDomain of legacyDomains) {
    for (const theme of legacyDomain.themes) {
      const targetDomainName =
        THEME_TARGETS[normalizeKey(theme.title)] ?? 'Mouvement et interactions';
      const targetDomainId = targetDomainByName.get(targetDomainName);

      if (!targetDomainId) {
        throw new Error(`Domaine cible introuvable: ${targetDomainName}`);
      }

      await prisma.theme.update({
        where: { id: theme.id },
        data: { domainId: targetDomainId },
      });
      movedThemes += 1;
      console.log(`↪ theme déplacé: ${theme.title} -> ${targetDomainName}`);
    }

    const remainingThemes = await prisma.theme.count({
      where: { domainId: legacyDomain.id },
    });

    if (remainingThemes > 0) {
      throw new Error(
        `Le domaine ${legacyDomain.longDescription} contient encore ${remainingThemes} thèmes après migration.`
      );
    }

    const scopeCount = await prisma.domainScope.count({
      where: { domainId: legacyDomain.id },
    });
    if (scopeCount > 0) {
      throw new Error(
        `Le domaine ${legacyDomain.longDescription} possède encore ${scopeCount} scopes.`
      );
    }

    await prisma.domain.delete({ where: { id: legacyDomain.id } });
    deletedDomains += 1;
    console.log(`🗑 domaine supprimé: ${legacyDomain.longDescription}`);
  }

  console.log(
    JSON.stringify(
      {
        movedThemes,
        deletedDomains,
      },
      null,
      2
    )
  );
}

main()
  .catch((error) => {
    console.error(
      'Erreur lors du nettoyage du chevauchement Mouvement et interactions :',
      error
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
