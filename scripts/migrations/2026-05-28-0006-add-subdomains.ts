import type { PrismaClient } from "@prisma/client";

import {
  normalizeMatcherText,
  physicsSubdomains,
} from "../../prisma/seeds/data/physics-subdomains";

export const description =
  "Ajoute les sous-domaines de Sciences physiques et rattache automatiquement les thèmes existants.";

type ThemeRecord = {
  id: string;
  title: string;
  shortTitle: string | null;
  subdomainIds: string[];
  domainIds: string[];
  domains: { subjectId: string }[];
};

function sortIds(ids: string[]) {
  return [...ids].sort((left, right) => left.localeCompare(right));
}

function arraysEqual(left: string[], right: string[]) {
  if (left.length !== right.length) return false;
  return left.every((value, index) => value === right[index]);
}

function uniqueIds(values: Array<string | null | undefined>) {
  const ids = new Set<string>();
  for (const value of values) {
    if (value) ids.add(value);
  }
  return [...ids];
}

function buildThemeKeys(theme: { title: string; shortTitle: string | null }) {
  const keys = new Set<string>();
  for (const value of [theme.title, theme.shortTitle]) {
    if (!value) continue;
    keys.add(normalizeMatcherText(value));
  }
  return [...keys];
}

export async function up(prisma: PrismaClient) {
  // 1) S'assurer que les sous-domaines existent (idempotent).
  const subjects = await prisma.subject.findMany({
    select: { id: true, longDescription: true },
  });
  const subjectIdByLong = new Map(subjects.map((s) => [s.longDescription, s.id]));

  const domains = await prisma.domain.findMany({
    select: { id: true, longDescription: true, subjectId: true },
  });
  const domainIdByKey = new Map<string, string>();
  for (const domain of domains) {
    domainIdByKey.set(`${domain.subjectId}::${domain.longDescription}`, domain.id);
  }

  let subdomainsCreated = 0;
  let subdomainsUpdated = 0;
  let subdomainsSkipped = 0;

  type CreatedSubdomain = {
    id: string;
    subjectId: string;
    domainId: string;
    matchers: string[];
  };
  const subdomainsBySubject = new Map<string, CreatedSubdomain[]>();

  for (const entry of physicsSubdomains) {
    const subjectId = subjectIdByLong.get(entry.subjectLongDescription);
    if (!subjectId) {
      subdomainsSkipped += 1;
      console.warn(
        `   ⚠ Sujet introuvable pour le sous-domaine "${entry.title}" (matière: ${entry.subjectLongDescription})`
      );
      continue;
    }
    const domainId = domainIdByKey.get(`${subjectId}::${entry.domainLongDescription}`);
    if (!domainId) {
      subdomainsSkipped += 1;
      console.warn(
        `   ⚠ Domaine introuvable pour le sous-domaine "${entry.title}" (domaine: ${entry.domainLongDescription})`
      );
      continue;
    }

    const existing = await prisma.subdomain.findFirst({
      where: { subjectId, slug: entry.slug },
      select: { id: true },
    });

    let subdomainId: string;
    if (existing) {
      await prisma.subdomain.update({
        where: { id: existing.id },
        data: {
          title: entry.title,
          shortTitle: entry.shortTitle ?? null,
          description: entry.description ?? null,
          order: entry.order,
          domainId,
        },
      });
      subdomainId = existing.id;
      subdomainsUpdated += 1;
    } else {
      const created = await prisma.subdomain.create({
        data: {
          slug: entry.slug,
          title: entry.title,
          shortTitle: entry.shortTitle ?? null,
          description: entry.description ?? null,
          order: entry.order,
          subjectId,
          domainId,
        },
        select: { id: true },
      });
      subdomainId = created.id;
      subdomainsCreated += 1;
    }

    const bucket = subdomainsBySubject.get(subjectId) ?? [];
    bucket.push({
      id: subdomainId,
      subjectId,
      domainId,
      matchers: entry.themeMatchers.map((value) => normalizeMatcherText(value)),
    });
    subdomainsBySubject.set(subjectId, bucket);
  }

  // 2) Rattacher les thèmes existants au(x) sous-domaine(s) correspondant(s).
  const themes = (await prisma.theme.findMany({
    select: {
      id: true,
      title: true,
      shortTitle: true,
      subdomainIds: true,
      domainIds: true,
      domains: { select: { subjectId: true } },
    },
  })) as ThemeRecord[];

  let themesUpdated = 0;
  const unclassifiedThemes: Array<{
    id: string;
    title: string;
    reason: "no-domain" | "no-match";
  }> = [];

  for (const theme of themes) {
    const subjectIds = new Set(theme.domains.map((d) => d.subjectId));
    if (subjectIds.size === 0) {
      unclassifiedThemes.push({ id: theme.id, title: theme.title, reason: "no-domain" });
      continue;
    }

    const themeKeys = buildThemeKeys(theme);
    const matchedSubdomainIds = new Set<string>();

    for (const subjectId of subjectIds) {
      const candidates = subdomainsBySubject.get(subjectId);
      if (!candidates) continue;

      for (const candidate of candidates) {
        const matches = candidate.matchers.some((matcher) =>
          themeKeys.some((key) => key.includes(matcher))
        );
        if (matches) {
          matchedSubdomainIds.add(candidate.id);
        }
      }
    }

    if (matchedSubdomainIds.size === 0) {
      unclassifiedThemes.push({ id: theme.id, title: theme.title, reason: "no-match" });
      continue;
    }

    const currentSorted = sortIds(theme.subdomainIds ?? []);
    const nextSorted = sortIds(
      uniqueIds([...(theme.subdomainIds ?? []), ...matchedSubdomainIds])
    );

    if (arraysEqual(currentSorted, nextSorted)) continue;

    await prisma.theme.update({
      where: { id: theme.id },
      data: {
        subdomains: {
          set: nextSorted.map((id) => ({ id })),
        },
      },
    });
    themesUpdated += 1;
  }

  console.log("Subdomains migration:", {
    subdomainsCreated,
    subdomainsUpdated,
    subdomainsSkipped,
    themesScanned: themes.length,
    themesUpdated,
    themesUnclassified: unclassifiedThemes.length,
  });

  if (unclassifiedThemes.length > 0) {
    console.log("   Thèmes à reprendre manuellement dans le backoffice :");
    for (const item of unclassifiedThemes) {
      console.log(`     - [${item.reason}] ${item.title} (${item.id})`);
    }
  }
}
