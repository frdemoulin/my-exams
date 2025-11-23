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

export async function seedThemes(prisma: PrismaClient) {
  console.log('🧩 Seeding Themes...');

  // Charger les données depuis le fichier JSON
  const jsonPath = path.join(__dirname, 'data', 'topics.json');
  const jsonData = fs.readFileSync(jsonPath, 'utf-8');
  const data: TopicsData = JSON.parse(jsonData);

  // Récupérer les chapitres pour associer les thèmes
  const chapters = await prisma.chapter.findMany({
    select: { id: true, longDescription: true },
  });

  const chapterByName = Object.fromEntries(
    chapters.map((c) => [c.longDescription, c.id])
  );

  // Mapper les thèmes aux chapitres appropriés
  const themeMapping: Array<Topic & { chapterName: string }> = [
    // Mathématiques Collège
    ...data.mathematics.college.map((t) => ({
      ...t,
      chapterName: t.longDescription.includes('fraction') || t.longDescription.includes('nombre') || t.longDescription.includes('calcul') || t.longDescription.includes('puissance') || t.longDescription.includes('racine') || t.longDescription.includes('équation') || t.longDescription.includes('proportion')
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
      chapterName: t.longDescription.includes('suite')
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
      chapterName: t.longDescription.includes('état') || t.longDescription.includes('mélange') || t.longDescription.includes('masse') || t.longDescription.includes('atome') || t.longDescription.includes('molécule') || t.longDescription.includes('formule') || t.longDescription.includes('transformation') || t.longDescription.includes('acide') || t.longDescription.includes('pH') || t.longDescription.includes('combustion')
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
      chapterName: t.longDescription.includes('mouvement') || t.longDescription.includes('vitesse') || t.longDescription.includes('accélération') || t.longDescription.includes('chute') || t.longDescription.includes('Newton') || t.longDescription.includes('force') || t.longDescription.includes('travail') || t.longDescription.includes('énergie cinétique') || t.longDescription.includes('énergie potentielle') || t.longDescription.includes('quantité de mouvement')
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
    const chapterId = chapterByName[theme.chapterName];
    if (!chapterId) {
      console.warn(`   ⚠️  Chapitre non trouvé pour le thème: ${theme.longDescription} (cherchait: ${theme.chapterName})`);
      continue;
    }

    // Chercher si le thème existe déjà
    const existingTheme = await prisma.theme.findFirst({
      where: {
        longDescription: theme.longDescription,
        chapterId: chapterId,
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
          chapterId: chapterId,
        },
      });
    }
    createdCount++;
  }

  console.log(`   ✓ ${createdCount} thèmes créés`);
}
