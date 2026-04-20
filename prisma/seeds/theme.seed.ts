import type { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import { mechanicsThemes } from './data/mechanics-themes';
import { wavesAndSignalsThemes } from './data/waves-and-signals-themes';
import { electricityThemes } from './data/electricity-themes';
import { thermodynamicsThemes } from './data/thermodynamics-themes';
import { matterConstitutionThemes } from './data/matter-constitution-themes';
import { acidBaseThemes } from './data/acid-base-themes';
import { redoxThemes } from './data/redox-themes';
import { chemicalKineticsThemes } from './data/chemical-kinetics-themes';

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
  title?: string;
  shortTitle?: string | null;
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

type ManualThemeSeed = {
  title: string;
  shortTitle?: string;
  shortDescription: string;
  longDescription: string;
  description?: string;
};

type ManualThemeGroup = {
  subjectLongDescription: string;
  domainLongDescription: string;
  themes: ManualThemeSeed[];
  resolveDomainLongDescription?: (theme: ManualThemeSeed) => string;
};

const resolveElectricityManualThemeDomain = (theme: ManualThemeSeed) =>
  includesAnyNormalized(theme.title, [
    'condensateur',
    'circuit rc',
    'charge et decharge d un condensateur',
    'courant alternatif sinusoidal',
    'valeur efficace',
    'puissance electrique',
    'energie electrique',
    'effet joule',
  ])
    ? 'Énergie'
    : 'Électricité';

const manualThemeGroups: ManualThemeGroup[] = [
  {
    subjectLongDescription: 'Sciences physiques',
    domainLongDescription: 'Mouvement et interactions',
    themes: mechanicsThemes,
  },
  {
    subjectLongDescription: 'Sciences physiques',
    domainLongDescription: 'Ondes et signaux',
    themes: wavesAndSignalsThemes,
  },
  {
    subjectLongDescription: 'Sciences physiques',
    domainLongDescription: 'Électricité',
    themes: electricityThemes,
    resolveDomainLongDescription: resolveElectricityManualThemeDomain,
  },
  {
    subjectLongDescription: 'Sciences physiques',
    domainLongDescription: 'Énergie',
    themes: thermodynamicsThemes,
  },
  {
    subjectLongDescription: 'Sciences physiques',
    domainLongDescription: 'Constitution et transformations de la matière',
    themes: matterConstitutionThemes,
  },
  {
    subjectLongDescription: 'Sciences physiques',
    domainLongDescription: 'Constitution et transformations de la matière',
    themes: acidBaseThemes,
  },
  {
    subjectLongDescription: 'Sciences physiques',
    domainLongDescription: 'Constitution et transformations de la matière',
    themes: redoxThemes,
  },
  {
    subjectLongDescription: 'Sciences physiques',
    domainLongDescription: 'Constitution et transformations de la matière',
    themes: chemicalKineticsThemes,
  },
];

const loadSeedThemes = (): SeedThemeExport[] | null => {
  if (!fs.existsSync(seedFilePath)) return null;
  const raw = fs.readFileSync(seedFilePath, 'utf-8');
  const payload = JSON.parse(raw) as SeedPayload;
  if (!payload || !Array.isArray(payload.themes)) {
    throw new Error('Seed file invalid: expected themes array.');
  }
  return payload.themes;
};

const normalizeSeedText = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, ' ')
    .replace(/[^a-z0-9]+/gi, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();

const includesAnyNormalized = (value: string, needles: string[]) => {
  const normalizedValue = normalizeSeedText(value);
  return needles.some((needle) => normalizedValue.includes(normalizeSeedText(needle)));
};

const buildThemeCandidateKeys = (theme: {
  title: string;
  shortTitle?: string | null;
}) =>
  Array.from(
    new Set(
      [theme.title, theme.shortTitle ?? null]
        .filter((value): value is string => Boolean(value))
        .map((value) => normalizeSeedText(value))
    )
  );

const resolveMathCollegeDomainName = (label: string) =>
  includesAnyNormalized(label, ['fraction', 'nombre', 'calcul', 'puissance', 'racine', 'equation', 'proportion'])
    ? 'Nombres et calculs'
    : includesAnyNormalized(label, ['thales', 'pythagore', 'triangle', 'cercle', 'symetrie', 'aire', 'volume'])
      ? 'Géométrie plane'
      : includesAnyNormalized(label, ['statistique', 'probabilite', 'fonction'])
        ? 'Gestion de données'
        : 'Nombres et calculs';

const resolveMathLyceeDomainName = (label: string) =>
  includesAnyNormalized(label, ['suite'])
    ? 'Suites numériques'
    : includesAnyNormalized(
          label,
          ['fonction', 'derivation', 'limite', 'primitive', 'integrale', 'exponentielle', 'logarithme']
        )
      ? 'Fonctions'
      : includesAnyNormalized(label, ['vecteur', 'produit scalaire', 'geometrie', 'droite', 'trigonometrie'])
        ? 'Géométrie analytique'
        : includesAnyNormalized(
              label,
              ['probabilite', 'variable aleatoire', 'loi', 'echantillon', 'estimation']
            )
          ? 'Probabilités et statistiques'
          : includesAnyNormalized(
                label,
                ['ensemble', 'intervalle', 'valeur absolue', 'equation', 'complexe', 'algorithme', 'logique']
              )
            ? 'Analyse'
            : 'Analyse';

const resolvePhysicsChemistryCollegeDomainName = (label: string) =>
  includesAnyNormalized(
    label,
    ['etat', 'melange', 'masse', 'atome', 'molecule', 'formule', 'transformation', 'acide', 'ph', 'combustion']
  )
    ? 'Matière et ses états'
    : includesAnyNormalized(
          label,
          ['circuit', 'intensite', 'tension', 'ohm', 'puissance', 'energie electrique']
        )
      ? 'Électricité'
      : includesAnyNormalized(label, ['lumiere', 'couleur', 'spectre', 'lentille'])
        ? 'Lumière et vision'
        : includesAnyNormalized(label, ['energie', 'source'])
          ? 'Énergie'
          : includesAnyNormalized(label, ['mouvement', 'vitesse', 'force', 'poids', 'gravitation'])
            ? 'Mouvement et interactions'
            : 'Matière et ses états';

const resolvePhysicsChemistryLyceeDomainName = (label: string) =>
  includesAnyNormalized(
    label,
    [
      'mouvement',
      'vitesse',
      'acceleration',
      'chute',
      'newton',
      'force',
      'travail',
      'energie cinetique',
      'energie potentielle',
      'quantite de mouvement',
      'kepler',
      'gravitation',
      'orbital',
    ]
  )
    ? 'Mouvement et interactions'
    : includesAnyNormalized(
          label,
          ['onde', 'sonore', 'electromagnetique', 'diffraction', 'doppler', 'interference', 'signal']
        )
      ? 'Ondes et signaux'
      : includesAnyNormalized(
            label,
            [
              'atome',
              'electronique',
              'periodique',
              'liaison',
              'molecule',
              'oxydo',
              'redox',
              'avancement',
              'equilibre',
              'acide',
              'base',
              'bronsted',
              'titrage',
              'tampon',
              'spectro',
              'beer lambert',
              'synthese',
              'alcane',
              'alcool',
              'carbonyle',
              'carboxylique',
              'esterif',
              'polymere',
              'reactif limitant',
              'rendement',
              'mole',
              'quantite de matiere',
              'concentration',
              'masse molaire',
              'tableau d avancement',
              'reaction chimique',
              'transformation chimique',
              'catalyse',
              'cinetique',
            ]
          )
        ? 'Constitution et transformations de la matière'
        : includesAnyNormalized(
              label,
              [
                'circuit',
                'maille',
                'nœud',
                'noeud',
                'condensateur',
                'bobine',
                'oscillation',
                'transfert',
                'capacite thermique',
                'thermodynamique',
                'chaleur',
                'gaz parfait',
                'equation d etat',
                'effet joule',
                'courant alternatif',
                'valeur efficace',
                'energie electrique',
                'tension electrique',
                'puissance electrique',
              ]
            )
          ? 'Énergie'
          : 'Constitution et transformations de la matière';

const seedManualThemeGroups = async (prisma: PrismaClient) => {
  if (manualThemeGroups.length === 0) return;

  const subjects = await prisma.subject.findMany({
    select: { id: true, longDescription: true },
  });
  const subjectIdByLongDescription = new Map(
    subjects.map((subject) => [subject.longDescription, subject.id])
  );

  const domainsByKey = new Map(
    (await prisma.domain.findMany({
      select: { id: true, longDescription: true, subjectId: true },
    })).map((domain) => [`${domain.subjectId}::${domain.longDescription}`, domain.id])
  );

  const existingThemesBySubjectId = new Map(
    subjects.map((subject) => [subject.id, [] as Array<{
      id: string;
      title: string;
      shortTitle: string | null;
      domainId: string;
    }>])
  );

  const existingThemes = await prisma.theme.findMany({
    select: {
      id: true,
      title: true,
      shortTitle: true,
      domainId: true,
      domain: {
        select: {
          subjectId: true,
        },
      },
    },
  });

  for (const theme of existingThemes) {
    const subjectThemes = existingThemesBySubjectId.get(theme.domain.subjectId);
    if (!subjectThemes) continue;
    subjectThemes.push({
      id: theme.id,
      title: theme.title,
      shortTitle: theme.shortTitle,
      domainId: theme.domainId,
    });
  }

  let createdCount = 0;
  let updatedCount = 0;
  let skippedCount = 0;

  for (const group of manualThemeGroups) {
    const subjectId = subjectIdByLongDescription.get(group.subjectLongDescription);
    if (!subjectId) {
      console.warn(
        `   ⚠️  Matiere introuvable pour le groupe: ${group.subjectLongDescription}`
      );
      skippedCount += group.themes.length;
      continue;
    }

    for (const theme of group.themes) {
      const targetDomainLongDescription =
        group.resolveDomainLongDescription?.(theme) ?? group.domainLongDescription;
      const domainId = domainsByKey.get(`${subjectId}::${targetDomainLongDescription}`);

      if (!domainId) {
        console.warn(
          `   ⚠️  Domaine introuvable pour le theme manuel: ${theme.title} (${targetDomainLongDescription})`
        );
        skippedCount += 1;
        continue;
      }

      const title = theme.title.trim();
      const shortTitle = theme.shortTitle?.trim() || null;
      const shortDescription = theme.shortDescription.trim();
      const longDescription = theme.longDescription.trim();
      const description = theme.description?.trim() || null;
      const candidateKeys = buildThemeCandidateKeys({ title, shortTitle });
      const subjectThemes = existingThemesBySubjectId.get(subjectId) ?? [];
      const existing = subjectThemes.find((candidate) =>
        buildThemeCandidateKeys(candidate).some((key) => candidateKeys.includes(key))
      );

      if (existing) {
        await prisma.theme.update({
          where: { id: existing.id },
          data: {
            domainId,
            title,
            shortTitle,
            shortDescription,
            longDescription,
            description,
          },
        });
        existing.title = title;
        existing.shortTitle = shortTitle;
        existing.domainId = domainId;
        updatedCount += 1;
      } else {
        const createdTheme = await prisma.theme.create({
          data: {
            title,
            shortTitle,
            shortDescription,
            longDescription,
            description,
            domainId,
          },
        });
        subjectThemes.push({
          id: createdTheme.id,
          title,
          shortTitle,
          domainId,
        });
        createdCount += 1;
      }
    }
  }

  console.log(
    `   ✓ Thèmes manuels: created=${createdCount}, updated=${updatedCount}, skipped=${skippedCount}`
  );
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

      const title = theme.title?.trim() || theme.longDescription;
      const shortTitle = theme.shortTitle?.trim() || theme.shortDescription?.trim() || null;
      const shortDescription = theme.shortDescription?.trim() || theme.longDescription;

      if (existingTheme) {
        await prisma.theme.update({
          where: { id: existingTheme.id },
          data: {
            title,
            shortTitle,
            shortDescription,
          },
        });
      } else {
        await prisma.theme.create({
          data: {
            title,
            shortTitle,
            longDescription: theme.longDescription,
            shortDescription,
            domainId,
          },
        });
      }
      createdCount++;
    }

    console.log(`   ✓ ${createdCount} thèmes créés (fichier JSON)`);
    await seedManualThemeGroups(prisma);
    return;
  }

  // Charger les données depuis le fichier JSON
  const jsonPath = path.join(__dirname, 'data', 'topics.json');
  const jsonData = fs.readFileSync(jsonPath, 'utf-8');
  const data: TopicsData = JSON.parse(jsonData);

  const subjects = await prisma.subject.findMany({
    select: { id: true, longDescription: true },
  });
  const subjectIdByLongDescription = new Map(
    subjects.map((subject) => [subject.longDescription, subject.id])
  );

  // Récupérer les domaines pour associer les thèmes
  const domains = await prisma.domain.findMany({
    select: { id: true, longDescription: true, subjectId: true },
  });

  const domainByKey = new Map(
    domains.map((domain) => [`${domain.subjectId}::${domain.longDescription}`, domain.id])
  );

  const physicsChemistrySubjectId = subjectIdByLongDescription.get('Sciences physiques');
  const mathematicsSubjectId = subjectIdByLongDescription.get('Mathématiques');

  if (!physicsChemistrySubjectId || !mathematicsSubjectId) {
    throw new Error('Sujets requis introuvables pour le seed des thèmes.');
  }

  // Mapper les thèmes aux domaines appropriés
  const themeMapping: Array<Topic & { domainName: string; subjectId: string }> = [
    // Mathématiques Collège
    ...data.mathematics.college.map((t) => ({
      ...t,
      subjectId: mathematicsSubjectId,
      domainName: resolveMathCollegeDomainName(t.longDescription),
    })),
    // Mathématiques Lycée
    ...data.mathematics.lycee.map((t) => ({
      ...t,
      subjectId: mathematicsSubjectId,
      domainName: resolveMathLyceeDomainName(t.longDescription),
    })),
    // Physique-Chimie Collège
    ...data.physics_chemistry.college.map((t) => ({
      ...t,
      subjectId: physicsChemistrySubjectId,
      domainName: resolvePhysicsChemistryCollegeDomainName(t.longDescription),
    })),
  // Physique-Chimie Lycée
    ...data.physics_chemistry.lycee.map((t) => ({
      ...t,
      subjectId: physicsChemistrySubjectId,
      domainName: resolvePhysicsChemistryLyceeDomainName(t.longDescription),
    })),
  ];

  let createdCount = 0;

  for (const theme of themeMapping) {
    const domainId = domainByKey.get(`${theme.subjectId}::${theme.domainName}`);
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

  const title = theme.longDescription;
  const shortTitle = theme.shortDescription || null;
  const shortDescription = theme.shortDescription || theme.longDescription;

    if (existingTheme) {
      // Mettre à jour si existe
      await prisma.theme.update({
        where: { id: existingTheme.id },
        data: {
          title,
          shortTitle,
          shortDescription,
        },
      });
    } else {
      // Créer si n'existe pas
      await prisma.theme.create({
        data: {
          title,
          shortTitle,
          longDescription: theme.longDescription,
          shortDescription,
          domainId: domainId,
        },
      });
    }
    createdCount++;
  }

  console.log(`   ✓ ${createdCount} thèmes créés`);
  await seedManualThemeGroups(prisma);
}
