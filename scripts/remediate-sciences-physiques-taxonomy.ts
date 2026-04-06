import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CANONICAL_SUBJECT = 'Sciences physiques';
const LEGACY_SUBJECT = 'Physique-Chimie';
const DUPLICATE_DOMAIN = 'Constitution et transformations de la matière';

const ACTIVE_THEME_REASSIGNMENTS: Record<string, string> = {
  'mouvement rectiligne': 'Mouvement et interactions',
  'mouvement circulaire': 'Mouvement et interactions',
  'chute libre': 'Mouvement et interactions',
  'mouvement parabolique': 'Mouvement et interactions',
  'forces et interactions': 'Mouvement et interactions',
  'energie cinetique': 'Mouvement et interactions',
  'energie potentielle': 'Mouvement et interactions',
  "conservation de l'energie": 'Mouvement et interactions',
  'ondes mecaniques': 'Ondes et signaux',
  'diffraction et interferences': 'Ondes et signaux',
  'bobine et inductance': 'Énergie',
  'circuit rc': 'Énergie',
  'circuit rl': 'Énergie',
  'circuit rlc': 'Énergie',
  'oscillations electriques': 'Énergie',
  'transferts thermiques': 'Énergie',
  'capacite thermique': 'Énergie',
};

const DUPLICATE_DOMAIN_THEME_TARGETS: Record<string, string> = {
  'quantite de matiere': 'Matière et ses états',
  mole: 'Matière et ses états',
  'nombre d entites chimiques': 'Matière et ses états',
  'masse molaire': 'Matière et ses états',
  'concentration massique et molaire': 'Matière et ses états',
  'transformation chimique': 'Matière et ses états',
  'reaction chimique': 'Matière et ses états',
  'lois de conservation': 'Matière et ses états',
  'avancement d une reaction': 'Constitution et transformations de la matière',
  "avancement d'une reaction": 'Constitution et transformations de la matière',
  'tableau d avancement': 'Constitution et transformations de la matière',
  "tableau d'avancement": 'Constitution et transformations de la matière',
  'reactif limitant': 'Constitution et transformations de la matière',
  'rendement d une transformation': 'Constitution et transformations de la matière',
  "rendement d'une transformation": 'Constitution et transformations de la matière',
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
  longDescription: string;
  shortTitle?: string | null;
  shortDescription: string;
}) => {
  return Array.from(
    new Set(
      [
        normalizeKey(theme.title),
        normalizeKey(theme.longDescription),
        normalizeKey(theme.shortDescription),
        theme.shortTitle ? normalizeKey(theme.shortTitle) : null,
      ].filter((value): value is string => Boolean(value))
    )
  );
};

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

  const canonicalDomains = await prisma.domain.findMany({
    where: { subjectId: canonicalSubject.id },
    select: { id: true, longDescription: true },
  });
  const canonicalDomainByName = new Map(
    canonicalDomains.map((domain) => [domain.longDescription, domain.id])
  );

  let movedActiveThemes = 0;
  let migratedDuplicateThemes = 0;
  let dedupedDuplicateThemes = 0;

  const activeThemes = await prisma.theme.findMany({
    where: { domain: { subjectId: canonicalSubject.id } },
    select: {
      id: true,
      title: true,
      shortTitle: true,
      shortDescription: true,
      longDescription: true,
      domainId: true,
    },
  });

  for (const theme of activeThemes) {
    const keys = buildThemeCandidateKeys(theme);
    const targetDomainName = keys
      .map((key) => ACTIVE_THEME_REASSIGNMENTS[key])
      .find(Boolean);
    if (!targetDomainName) continue;

    const targetDomainId = canonicalDomainByName.get(targetDomainName);
    if (!targetDomainId || targetDomainId === theme.domainId) continue;

    await prisma.theme.update({
      where: { id: theme.id },
      data: { domainId: targetDomainId },
    });
    movedActiveThemes += 1;
    console.log(`↪ theme actif déplacé: ${theme.title} -> ${targetDomainName}`);
  }

  if (legacySubject) {
    const legacyUsage = await Promise.all([
      prisma.teaching.count({ where: { subjectId: legacySubject.id } }),
      prisma.examPaper.count({ where: { teaching: { subjectId: legacySubject.id } } }),
      prisma.exercise.count({ where: { examPaper: { teaching: { subjectId: legacySubject.id } } } }),
    ]);

    if (legacyUsage.some((count) => count > 0)) {
      throw new Error(
        `Le sujet legacy ${LEGACY_SUBJECT} est encore utilisé (teachings=${legacyUsage[0]}, examPapers=${legacyUsage[1]}, exercises=${legacyUsage[2]}).`
      );
    }

    const duplicateDomain = await prisma.domain.findFirst({
      where: {
        subjectId: legacySubject.id,
        longDescription: DUPLICATE_DOMAIN,
      },
      include: {
        themes: {
          select: {
            id: true,
            title: true,
            shortTitle: true,
            shortDescription: true,
            longDescription: true,
            domainId: true,
          },
        },
      },
    });

    if (duplicateDomain) {
      const refreshedCanonicalThemes = await prisma.theme.findMany({
        where: { domain: { subjectId: canonicalSubject.id } },
        select: {
          id: true,
          title: true,
          shortTitle: true,
          shortDescription: true,
          longDescription: true,
          domainId: true,
        },
      });

      for (const theme of duplicateDomain.themes) {
        const keys = buildThemeCandidateKeys(theme);
        const targetDomainName = keys
          .map((key) => DUPLICATE_DOMAIN_THEME_TARGETS[key])
          .find(Boolean);
        if (!targetDomainName) {
          console.warn(`⚠ theme legacy non mappé, conservé: ${theme.title}`);
          continue;
        }

        const targetDomainId = canonicalDomainByName.get(targetDomainName);
        if (!targetDomainId) {
          throw new Error(`Domaine cible introuvable: ${targetDomainName}`);
        }

        const duplicateInCanonical = refreshedCanonicalThemes.find((candidate) => {
          if (candidate.domainId !== targetDomainId) return false;
          const candidateKeys = buildThemeCandidateKeys(candidate);
          return candidateKeys.some((candidateKey) => keys.includes(candidateKey));
        });

        if (duplicateInCanonical) {
          await prisma.theme.delete({ where: { id: theme.id } });
          dedupedDuplicateThemes += 1;
          console.log(`✂ theme legacy dédupliqué: ${theme.title} (gardé: ${duplicateInCanonical.title})`);
          continue;
        }

        await prisma.theme.update({
          where: { id: theme.id },
          data: { domainId: targetDomainId },
        });
        refreshedCanonicalThemes.push({ ...theme, domainId: targetDomainId });
        migratedDuplicateThemes += 1;
        console.log(`➕ theme legacy migré: ${theme.title} -> ${targetDomainName}`);
      }

      const remainingDuplicateThemes = await prisma.theme.count({
        where: { domainId: duplicateDomain.id },
      });
      if (remainingDuplicateThemes === 0) {
        await prisma.domain.delete({ where: { id: duplicateDomain.id } });
        console.log(`🗑 domaine legacy supprimé: ${DUPLICATE_DOMAIN}`);
      }
    }
  }

  console.log(
    JSON.stringify(
      {
        movedActiveThemes,
        migratedDuplicateThemes,
        dedupedDuplicateThemes,
      },
      null,
      2
    )
  );
}

main()
  .catch((error) => {
    console.error('Erreur lors de la remédiation de la taxonomie Sciences physiques :', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
