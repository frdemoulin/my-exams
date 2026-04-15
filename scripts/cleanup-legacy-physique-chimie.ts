import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

const { PrismaClient } = require('@prisma/client') as typeof import('@prisma/client');

const prisma = new PrismaClient();

const CANONICAL_SUBJECT = 'Sciences physiques';
const LEGACY_SUBJECT = 'Physique-Chimie';

const LEGACY_DOMAIN_TARGETS: Record<string, string> = {
  'Mécanique': 'Mouvement et interactions',
  'Ondes et signaux': 'Ondes et signaux',
  'Électricité': 'Électricité',
  'Thermodynamique': 'Énergie',
  'Acide-base et réactions en solution': 'Constitution et transformations de la matière',
  'Oxydoréduction': 'Constitution et transformations de la matière',
  'Cinétique chimique': 'Constitution et transformations de la matière',
};

const LEGACY_THEME_TARGET_OVERRIDES: Record<string, string> = {
  condensateur: 'Énergie',
  'circuit rc': 'Énergie',
  'charge et decharge d un condensateur': 'Énergie',
  'courant alternatif sinusoidal': 'Énergie',
  'valeur efficace': 'Énergie',
  'puissance electrique': 'Énergie',
  'energie electrique': 'Énergie',
  'effet joule': 'Énergie',
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

const buildThemeCandidateKeys = (theme: {
  title: string;
  shortTitle?: string | null;
}) =>
  Array.from(
    new Set(
      [theme.title, theme.shortTitle ?? null]
        .filter((value): value is string => Boolean(value))
        .map((value) => normalizeKey(value))
    )
  );

const resolveTargetDomainName = (legacyDomainName: string, themeTitle: string) =>
  LEGACY_THEME_TARGET_OVERRIDES[normalizeKey(themeTitle)] ?? LEGACY_DOMAIN_TARGETS[legacyDomainName];

async function main() {
  const canonicalSubject = await prisma.subject.findFirst({
    where: { longDescription: CANONICAL_SUBJECT },
    select: { id: true, longDescription: true },
  });
  if (!canonicalSubject) {
    throw new Error(`Sujet canonique introuvable: ${CANONICAL_SUBJECT}`);
  }

  const legacySubject = await prisma.subject.findFirst({
    where: { longDescription: LEGACY_SUBJECT },
    select: { id: true, longDescription: true },
  });
  if (!legacySubject) {
    console.log(`Aucun sujet legacy à nettoyer: ${LEGACY_SUBJECT}`);
    return;
  }

  const [legacyTeachings, legacyExamPapers, legacyExercises, legacyScopes, legacyUserActivityRefs] =
    await Promise.all([
      prisma.teaching.count({ where: { subjectId: legacySubject.id } }),
      prisma.examPaper.count({ where: { teaching: { subjectId: legacySubject.id } } }),
      prisma.exercise.count({ where: { examPaper: { teaching: { subjectId: legacySubject.id } } } }),
      prisma.domainScope.count({ where: { domain: { subjectId: legacySubject.id } } }),
      prisma.userActivity.count({ where: { lastSubjectId: legacySubject.id } }),
    ]);

  const legacyReferenceIds = await prisma.domain.findMany({
    where: { subjectId: legacySubject.id },
    select: {
      id: true,
      themes: {
        select: {
          id: true,
        },
      },
    },
  });
  const legacyDomainIds = legacyReferenceIds.map((domain) => domain.id);
  const legacyThemeIds = legacyReferenceIds.flatMap((domain) => domain.themes.map((theme) => theme.id));
  const [legacyDeprecatedDomainRefs, legacyDeprecatedThemeRefsOnExamPapers, legacyDeprecatedThemeRefsOnExercises] =
    await Promise.all([
      prisma.examPaper.count({ where: { domainIds: { hasSome: legacyDomainIds } } }),
      prisma.examPaper.count({ where: { themeIds: { hasSome: legacyThemeIds } } }),
      prisma.exercise.count({ where: { themeIds: { hasSome: legacyThemeIds } } }),
    ]);

  if (
    legacyTeachings > 0 ||
    legacyExamPapers > 0 ||
    legacyExercises > 0 ||
    legacyScopes > 0 ||
    legacyUserActivityRefs > 0 ||
    legacyDeprecatedDomainRefs > 0 ||
    legacyDeprecatedThemeRefsOnExamPapers > 0 ||
    legacyDeprecatedThemeRefsOnExercises > 0
  ) {
    throw new Error(
      `Le sujet legacy ${LEGACY_SUBJECT} est encore référencé (teachings=${legacyTeachings}, examPapers=${legacyExamPapers}, exercises=${legacyExercises}, scopes=${legacyScopes}, userActivity=${legacyUserActivityRefs}, deprecatedDomainRefs=${legacyDeprecatedDomainRefs}, deprecatedExamPaperThemeRefs=${legacyDeprecatedThemeRefsOnExamPapers}, deprecatedExerciseThemeRefs=${legacyDeprecatedThemeRefsOnExercises}).`
    );
  }

  const canonicalDomains = await prisma.domain.findMany({
    where: { subjectId: canonicalSubject.id },
    select: { id: true, longDescription: true },
  });
  const canonicalDomainByName = new Map(
    canonicalDomains.map((domain) => [domain.longDescription, domain.id])
  );

  const legacyDomains = await prisma.domain.findMany({
    where: { subjectId: legacySubject.id },
    include: {
      themes: {
        select: {
          id: true,
          title: true,
          shortTitle: true,
          shortDescription: true,
          longDescription: true,
          description: true,
          domainId: true,
        },
      },
    },
    orderBy: { longDescription: 'asc' },
  });

  let canonicalThemes = await prisma.theme.findMany({
    where: { domain: { subjectId: canonicalSubject.id } },
    select: {
      id: true,
      title: true,
      shortTitle: true,
      shortDescription: true,
      longDescription: true,
      description: true,
      domainId: true,
    },
  });

  let movedThemes = 0;
  let mergedThemes = 0;
  let deletedDomains = 0;

  for (const legacyDomain of legacyDomains) {
    for (const legacyTheme of legacyDomain.themes) {
      const targetDomainName = resolveTargetDomainName(legacyDomain.longDescription, legacyTheme.title);
      if (!targetDomainName) {
        console.warn(`⚠ theme legacy non mappé, conservé: ${legacyTheme.title}`);
        continue;
      }

      const targetDomainId = canonicalDomainByName.get(targetDomainName);
      if (!targetDomainId) {
        throw new Error(`Domaine cible introuvable: ${targetDomainName}`);
      }

      const legacyKeys = buildThemeCandidateKeys(legacyTheme);
      const canonicalMatch = canonicalThemes.find((candidate) =>
        buildThemeCandidateKeys(candidate).some((candidateKey) => legacyKeys.includes(candidateKey))
      );

      if (canonicalMatch) {
        await prisma.theme.update({
          where: { id: canonicalMatch.id },
          data: {
            domainId: targetDomainId,
            title: legacyTheme.title,
            shortTitle: legacyTheme.shortTitle,
            shortDescription: legacyTheme.shortDescription,
            longDescription: legacyTheme.longDescription,
            description: legacyTheme.description,
          },
        });
        await prisma.theme.delete({ where: { id: legacyTheme.id } });

        canonicalMatch.domainId = targetDomainId;
        canonicalMatch.title = legacyTheme.title;
        canonicalMatch.shortTitle = legacyTheme.shortTitle;
        canonicalMatch.shortDescription = legacyTheme.shortDescription;
        canonicalMatch.longDescription = legacyTheme.longDescription;
        canonicalMatch.description = legacyTheme.description;
        mergedThemes += 1;
        console.log(`⇄ theme fusionné: ${legacyTheme.title} -> ${targetDomainName}`);
        continue;
      }

      await prisma.theme.update({
        where: { id: legacyTheme.id },
        data: { domainId: targetDomainId },
      });
      canonicalThemes.push({ ...legacyTheme, domainId: targetDomainId });
      movedThemes += 1;
      console.log(`↪ theme migré: ${legacyTheme.title} -> ${targetDomainName}`);
    }
  }

  for (const legacyDomain of legacyDomains) {
    const remainingThemes = await prisma.theme.count({
      where: { domainId: legacyDomain.id },
    });
    if (remainingThemes > 0) continue;

    await prisma.domain.delete({ where: { id: legacyDomain.id } });
    deletedDomains += 1;
    console.log(`🗑 domaine legacy supprimé: ${legacyDomain.longDescription}`);
  }

  const remainingDomains = await prisma.domain.count({
    where: { subjectId: legacySubject.id },
  });
  const remainingThemes = await prisma.theme.count({
    where: { domain: { subjectId: legacySubject.id } },
  });

  if (remainingDomains > 0 || remainingThemes > 0) {
    throw new Error(
      `Nettoyage incomplet du sujet legacy ${LEGACY_SUBJECT} (domains=${remainingDomains}, themes=${remainingThemes}).`
    );
  }

  await prisma.subject.delete({ where: { id: legacySubject.id } });
  console.log(`🗑 sujet legacy supprimé: ${LEGACY_SUBJECT}`);

  console.log(
    JSON.stringify(
      {
        movedThemes,
        mergedThemes,
        deletedDomains,
      },
      null,
      2
    )
  );
}

main()
  .catch((error) => {
    console.error('Erreur lors du nettoyage de la taxonomie Physique-Chimie :', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
