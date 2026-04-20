import type { PrismaClient, DomainDiscipline } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

type SeedDomain = {
  longDescription: string;
  shortDescription: string;
  subjectId: string;
  order: number;
  discipline?: DomainDiscipline;
};

type SeedDomainExport = {
  longDescription: string;
  shortDescription: string;
  order: number | null;
  discipline: DomainDiscipline | null;
  subjectLongDescription: string;
  subjectShortDescription: string;
};

type SeedPayload = {
  domains: SeedDomainExport[];
};

const seedFilePath = path.join(__dirname, 'data', 'domains-themes.json');

const loadSeedDomains = (): SeedDomainExport[] | null => {
  if (!fs.existsSync(seedFilePath)) return null;
  const raw = fs.readFileSync(seedFilePath, 'utf-8');
  const payload = JSON.parse(raw) as SeedPayload;
  if (!payload || !Array.isArray(payload.domains)) {
    throw new Error('Seed file invalid: expected domains array.');
  }
  return payload.domains;
};

export async function seedDomains(prisma: PrismaClient) {
  console.log('📚 Seeding Domains...');

  // Récupérer les matières
  const subjects = await prisma.subject.findMany({
    select: { id: true, longDescription: true, shortDescription: true },
  });

  const subjectByName = Object.fromEntries(
    subjects.map((s) => [s.longDescription, s.id])
  );

  const seedDomains = loadSeedDomains();
  if (seedDomains) {
    const subjectsByKey = new Map(
      subjects.map((s) => [`${s.longDescription}::${s.shortDescription}`, s.id])
    );
    const subjectsByLong = new Map<string, string[]>();

    for (const subject of subjects) {
      const list = subjectsByLong.get(subject.longDescription);
      if (list) {
        list.push(subject.id);
      } else {
        subjectsByLong.set(subject.longDescription, [subject.id]);
      }
    }

    const resolveSubjectId = (domain: SeedDomainExport): string | null => {
      const key = `${domain.subjectLongDescription}::${domain.subjectShortDescription}`;
      const direct = subjectsByKey.get(key);
      if (direct) return direct;
      const byLong = subjectsByLong.get(domain.subjectLongDescription);
      if (byLong?.length === 1) return byLong[0];
      return null;
    };

    let createdCount = 0;

    for (const domain of seedDomains) {
      const subjectId = resolveSubjectId(domain);
      if (!subjectId) {
        console.warn(
          `   ⚠️  Matiere introuvable pour le domaine: ${domain.longDescription} (${domain.subjectLongDescription})`
        );
        continue;
      }

      const existingDomain = await prisma.domain.findFirst({
        where: {
          longDescription: domain.longDescription,
          subjectId,
        },
      });

      if (existingDomain) {
        await prisma.domain.update({
          where: { id: existingDomain.id },
          data: {
            shortDescription: domain.shortDescription,
            order: domain.order ?? null,
            discipline: domain.discipline ?? null,
          },
        });
      } else {
        await prisma.domain.create({
          data: {
            longDescription: domain.longDescription,
            shortDescription: domain.shortDescription,
            order: domain.order ?? null,
            discipline: domain.discipline ?? null,
            subjectId,
          },
        });
      }
      createdCount++;
    }

    console.log(`   ✓ ${createdCount} domaines créés`);
    return;
  }

  const domains: SeedDomain[] = [
    // Mathématiques - Collège
    {
      longDescription: 'Nombres et calculs',
      shortDescription: 'Nombres',
      subjectId: subjectByName['Mathématiques'],
      order: 1,
    },
    {
      longDescription: 'Géométrie plane',
      shortDescription: 'Géométrie',
      subjectId: subjectByName['Mathématiques'],
      order: 2,
    },
    {
      longDescription: 'Gestion de données',
      shortDescription: 'Données',
      subjectId: subjectByName['Mathématiques'],
      order: 3,
    },
    // Mathématiques - Lycée
    {
      longDescription: 'Analyse',
      shortDescription: 'Analyse',
      subjectId: subjectByName['Mathématiques'],
      order: 4,
    },
    {
      longDescription: 'Suites numériques',
      shortDescription: 'Suites',
      subjectId: subjectByName['Mathématiques'],
      order: 5,
    },
    {
      longDescription: 'Fonctions',
      shortDescription: 'Fonctions',
      subjectId: subjectByName['Mathématiques'],
      order: 6,
    },
    {
      longDescription: 'Géométrie analytique',
      shortDescription: 'Géo. analyt.',
      subjectId: subjectByName['Mathématiques'],
      order: 7,
    },
    {
      longDescription: 'Probabilités et statistiques',
      shortDescription: 'Probas/Stats',
      subjectId: subjectByName['Mathématiques'],
      order: 8,
    },
    // Sciences physiques - Collège
    {
      longDescription: 'Matière et ses états',
      shortDescription: 'Matière',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'CHIMIE',
      order: 1,
    },
    {
      longDescription: 'Électricité',
      shortDescription: 'Électricité',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'PHYSIQUE',
      order: 2,
    },
    {
      longDescription: 'Lumière et vision',
      shortDescription: 'Lumière',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'PHYSIQUE',
      order: 3,
    },
    // Sciences physiques - Lycée
    {
      longDescription: 'Mouvement et interactions',
      shortDescription: 'Mouvement et interactions',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'PHYSIQUE',
      order: 4,
    },
    {
      longDescription: 'Ondes et signaux',
      shortDescription: 'Ondes',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'PHYSIQUE',
      order: 5,
    },
    {
      longDescription: 'Constitution et transformations de la matière',
      shortDescription: 'Chimie',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'CHIMIE',
      order: 6,
    },
    {
      longDescription: 'Énergie',
      shortDescription: 'Énergie',
      subjectId: subjectByName['Sciences physiques'],
      discipline: 'TRANSVERSAL',
      order: 7,
    },
  ];

  let createdCount = 0;

  for (const domain of domains) {
    if (!domain.subjectId) continue;

    // Chercher si le domaine existe déjà
    const existingDomain = await prisma.domain.findFirst({
      where: {
        longDescription: domain.longDescription,
        subjectId: domain.subjectId,
      },
    });

    if (existingDomain) {
      // Mettre à jour si existe
      await prisma.domain.update({
        where: { id: existingDomain.id },
        data: {
          shortDescription: domain.shortDescription,
          order: domain.order,
          discipline: domain.discipline ?? null,
        },
      });
    } else {
      // Créer si n'existe pas
      await prisma.domain.create({
        data: domain,
      });
    }
    createdCount++;
  }

  console.log(`   ✓ ${createdCount} domaines créés`);
}
