import type { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

interface Topic {
  longDescription: string;
  shortDescription: string;
}

interface TopicsData {
  mathematics: {
    college: Topic[];
    lycee: Topic[];
  };
  physics_chemistry: {
    college: Topic[];
    lycee: Topic[];
  };
}

type SeedThemeExport = {
  longDescription: string;
  shortDescription: string | null;
  domainLongDescription: string;
  subjectLongDescription: string;
  subjectShortDescription: string;
};

type SeedPayload = {
  themes: SeedThemeExport[];
};

const seedFilePath = path.join(__dirname, 'data', 'domains-themes.json');

const loadSeedThemes = (): SeedThemeExport[] | null => {
  if (!fs.existsSync(seedFilePath)) return null;
  const raw = fs.readFileSync(seedFilePath, 'utf-8');
  const payload = JSON.parse(raw) as SeedPayload;
  if (!payload || !Array.isArray(payload.themes)) {
    throw new Error('Seed file invalid: expected themes array.');
  }
  return payload.themes;
};

export async function seedThemes(prisma: PrismaClient) {
  console.log('🧩 Seeding Themes...');

  const seedThemes = loadSeedThemes();
  if (seedThemes) {
    const subjects = await prisma.subject.findMany({
      select: { id: true, longDescription: true, shortDescription: true },
    });

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

    const resolveSubjectId = (theme: SeedThemeExport): string | null => {
      const key = `${theme.subjectLongDescription}::${theme.subjectShortDescription}`;
      const direct = subjectsByKey.get(key);
      if (direct) return direct;
      const byLong = subjectsByLong.get(theme.subjectLongDescription);
      if (byLong?.length === 1) return byLong[0];
      return null;
    };

    const domains = await prisma.domain.findMany({
      select: { id: true, longDescription: true, subjectId: true },
    });

    const domainByKey = new Map(
      domains.map((d) => [`${d.subjectId}::${d.longDescription}`, d.id])
    );

    let createdCount = 0;

    for (const theme of seedThemes) {
      const subjectId = resolveSubjectId(theme);
      if (!subjectId) {
        console.warn(
          `   ⚠️  Matiere introuvable pour le theme: ${theme.longDescription} (${theme.subjectLongDescription})`
        );
        continue;
      }

      const domainId = domainByKey.get(`${subjectId}::${theme.domainLongDescription}`);
      if (!domainId) {
        console.warn(
          `   ⚠️  Domaine introuvable pour le theme: ${theme.longDescription} (${theme.domainLongDescription})`
        );
        continue;
      }

      const existingTheme = await prisma.theme.findFirst({
        where: {
          longDescription: theme.longDescription,
          domainId,
        },
      });

      if (existingTheme) {
        await prisma.theme.update({
          where: { id: existingTheme.id },
          data: {
            shortDescription: theme.shortDescription ?? null,
          },
        });
      } else {
        await prisma.theme.create({
          data: {
            longDescription: theme.longDescription,
            shortDescription: theme.shortDescription ?? null,
            domainId,
          },
        });
      }
      createdCount++;
    }

    console.log(`   ✓ ${createdCount} thèmes créés`);
    return;
  }

  // Charger les données depuis le fichier JSON
  const jsonPath = path.join(__dirname, 'data', 'topics.json');
  const jsonData = fs.readFileSync(jsonPath, 'utf-8');
  const data: TopicsData = JSON.parse(jsonData);

  // Récupérer les domaines pour associer les thèmes
  const domains = await prisma.domain.findMany({
    select: { id: true, longDescription: true },
  });

  const domainByName = Object.fromEntries(
    domains.map((d) => [d.longDescription, d.id])
  );

  // Mapper les thèmes aux domaines appropriés
  const themeMapping: Array<Topic & { domainName: string }> = [
    // Mathématiques Collège
    ...data.mathematics.college.map((t) => ({
      ...t,
      domainName: t.longDescription.includes('fraction') || t.longDescription.includes('nombre') || t.longDescription.includes('calcul') || t.longDescription.includes('puissance') || t.longDescription.includes('racine') || t.longDescription.includes('équation') || t.longDescription.includes('proportion')
        ? 'Nombres et calculs'
        : t.longDescription.includes('Thalès') || t.longDescription.includes('Pythagore') || t.longDescription.includes('triangle') || t.longDescription.includes('cercle') || t.longDescription.includes('symétrie') || t.longDescription.includes('aire') || t.longDescription.includes('volume')
        ? 'Géométrie plane'
        : t.longDescription.includes('statistique') || t.longDescription.includes('probabilité') || t.longDescription.includes('fonction')
        ? 'Gestion de données'
        : 'Nombres et calculs',
    })),
    // Mathématiques Lycée
    ...data.mathematics.lycee.map((t) => ({
      ...t,
      domainName: t.longDescription.includes('suite')
        ? 'Suites numériques'
        : t.longDescription.includes('fonction') || t.longDescription.includes('dérivation') || t.longDescription.includes('limite') || t.longDescription.includes('primitive') || t.longDescription.includes('intégrale') || t.longDescription.includes('exponentielle') || t.longDescription.includes('logarithme')
        ? 'Fonctions'
        : t.longDescription.includes('vecteur') || t.longDescription.includes('produit scalaire') || t.longDescription.includes('géométrie') || t.longDescription.includes('droite') || t.longDescription.includes('trigonométrie')
        ? 'Géométrie analytique'
        : t.longDescription.includes('probabilité') || t.longDescription.includes('variable aléatoire') || t.longDescription.includes('loi') || t.longDescription.includes('échantillon') || t.longDescription.includes('estimation')
        ? 'Probabilités et statistiques'
        : t.longDescription.includes('ensemble') || t.longDescription.includes('intervalle') || t.longDescription.includes('valeur absolue') || t.longDescription.includes('équation') || t.longDescription.includes('complexe') || t.longDescription.includes('algorithme') || t.longDescription.includes('logique')
        ? 'Analyse'
        : 'Analyse',
    })),
    // Physique-Chimie Collège
    ...data.physics_chemistry.college.map((t) => ({
      ...t,
      domainName: t.longDescription.includes('état') || t.longDescription.includes('mélange') || t.longDescription.includes('masse') || t.longDescription.includes('atome') || t.longDescription.includes('molécule') || t.longDescription.includes('formule') || t.longDescription.includes('transformation') || t.longDescription.includes('acide') || t.longDescription.includes('pH') || t.longDescription.includes('combustion')
        ? 'Matière et ses états'
        : t.longDescription.includes('circuit') || t.longDescription.includes('intensité') || t.longDescription.includes('tension') || t.longDescription.includes('Ohm') || t.longDescription.includes('puissance') || t.longDescription.includes('énergie électrique')
        ? 'Électricité'
        : t.longDescription.includes('lumière') || t.longDescription.includes('couleur') || t.longDescription.includes('spectre') || t.longDescription.includes('lentille')
        ? 'Lumière et vision'
        : t.longDescription.includes('mouvement') || t.longDescription.includes('vitesse') || t.longDescription.includes('force') || t.longDescription.includes('poids') || t.longDescription.includes('gravitation') || t.longDescription.includes('énergie')
        ? 'Mouvement et forces'
        : 'Matière et ses états',
    })),
    // Physique-Chimie Lycée
    ...data.physics_chemistry.lycee.map((t) => ({
      ...t,
      domainName: t.longDescription.includes('mouvement') || t.longDescription.includes('vitesse') || t.longDescription.includes('accélération') || t.longDescription.includes('chute') || t.longDescription.includes('Newton') || t.longDescription.includes('force') || t.longDescription.includes('travail') || t.longDescription.includes('énergie cinétique') || t.longDescription.includes('énergie potentielle') || t.longDescription.includes('quantité de mouvement')
        ? 'Mécanique'
        : t.longDescription.includes('onde') || t.longDescription.includes('sonore') || t.longDescription.includes('électromagnétique') || t.longDescription.includes('diffraction') || t.longDescription.includes('Doppler')
        ? 'Ondes et signaux'
        : t.longDescription.includes('atome') || t.longDescription.includes('électronique') || t.longDescription.includes('périodique') || t.longDescription.includes('liaison') || t.longDescription.includes('molécule') || t.longDescription.includes('oxydo') || t.longDescription.includes('avancement') || t.longDescription.includes('équilibre') || t.longDescription.includes('acide') || t.longDescription.includes('base') || t.longDescription.includes('Brønsted') || t.longDescription.includes('titrage') || t.longDescription.includes('tampon') || t.longDescription.includes('spectro') || t.longDescription.includes('Beer-Lambert') || t.longDescription.includes('synthèse') || t.longDescription.includes('alcane') || t.longDescription.includes('alcool') || t.longDescription.includes('carbonyle') || t.longDescription.includes('carboxylique') || t.longDescription.includes('estérif') || t.longDescription.includes('polymère')
        ? 'Constitution et transformations de la matière'
        : t.longDescription.includes('circuit') || t.longDescription.includes('maille') || t.longDescription.includes('nœud') || t.longDescription.includes('condensateur') || t.longDescription.includes('bobine') || t.longDescription.includes('oscillation') || t.longDescription.includes('transfert') || t.longDescription.includes('capacité thermique') || t.longDescription.includes('thermodynamique')
        ? 'Énergie'
        : 'Constitution et transformations de la matière',
    })),
  ];

  let createdCount = 0;

  for (const theme of themeMapping) {
    const domainId = domainByName[theme.domainName];
    if (!domainId) {
      console.warn(`   ⚠️  Domaine non trouvé pour le thème: ${theme.longDescription} (cherchait: ${theme.domainName})`);
      continue;
    }

    // Chercher si le thème existe déjà
    const existingTheme = await prisma.theme.findFirst({
      where: {
        longDescription: theme.longDescription,
        domainId: domainId,
      },
    });

    if (existingTheme) {
      // Mettre à jour si existe
      await prisma.theme.update({
        where: { id: existingTheme.id },
        data: {
          shortDescription: theme.shortDescription,
        },
      });
    } else {
      // Créer si n'existe pas
      await prisma.theme.create({
        data: {
          longDescription: theme.longDescription,
          shortDescription: theme.shortDescription,
          domainId: domainId,
        },
      });
    }
    createdCount++;
  }

  console.log(`   ✓ ${createdCount} thèmes créés`);
}
