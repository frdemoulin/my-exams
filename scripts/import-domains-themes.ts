import fs from "node:fs";
import path from "node:path";

import type { DomainDiscipline } from "@prisma/client";

import { loadProjectEnv } from "./lib/load-env";

type ImportDomain = {
  longDescription: string;
  shortDescription: string;
  order: number | null;
  discipline: DomainDiscipline | null;
  subjectLongDescription: string;
  subjectShortDescription: string;
};

type ImportTheme = {
  title?: string | null;
  shortTitle?: string | null;
  longDescription: string;
  shortDescription: string | null;
  domainLongDescription: string;
  subjectLongDescription: string;
  subjectShortDescription: string;
  chapterSlugs?: string[];
};

type ImportPayload = {
  version: number;
  exportedAt?: string;
  domains: ImportDomain[];
  themes: ImportTheme[];
};

type DomainRecord = {
  id: string;
  subjectId: string;
  longDescription: string;
  shortDescription: string;
  order: number | null;
  discipline: DomainDiscipline | null;
};

type ThemeRecord = {
  id: string;
  title: string;
  shortTitle: string | null;
  domainIds: string[];
  chapterIds: string[];
  domains: Array<{ subjectId: string }>;
};

loadProjectEnv();

function ensureDatabaseUrl() {
  if (!process.env.DATABASE_URL && process.env.MONGODB_URI) {
    process.env.DATABASE_URL = process.env.MONGODB_URI;
  }

  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL missing. Set DATABASE_URL (or MONGODB_URI) in your shell or .env.local."
    );
  }
}

function printHelp() {
  console.log(
    [
      "Import domains/themes from a JSON export.",
      "",
      "Usage:",
      "  tsx scripts/import-domains-themes.ts --file ./exports/domains-themes.json",
      "",
      "Options:",
      "  --file      input file (default: ./exports/domains-themes.json)",
      "  --dry-run   read + report without writing",
      "  --yes       allow import if NODE_ENV=production",
    ].join("\n")
  );
}

function buildSubjectKey(longDescription: string, shortDescription: string) {
  return `${longDescription}::${shortDescription}`;
}

function normalizeText(value: string | null | undefined) {
  const normalized = value?.trim();
  return normalized ? normalized : null;
}

function arraysEqual(left: string[], right: string[]) {
  if (left.length !== right.length) {
    return false;
  }

  return left.every((value, index) => value === right[index]);
}

function mergeUniqueIds(existingIds: string[], nextIds: string[]) {
  return Array.from(new Set([...existingIds, ...nextIds]));
}

function resolveThemeTitle(theme: ImportTheme) {
  return normalizeText(theme.title) ?? theme.longDescription.trim();
}

function resolveThemeShortTitle(theme: ImportTheme) {
  return normalizeText(theme.shortTitle) ?? normalizeText(theme.shortDescription);
}

function findMatchingTheme(
  subjectThemes: ThemeRecord[],
  nextTitle: string,
  nextShortTitle: string | null
) {
  return subjectThemes.find((candidate) => {
    if (candidate.title !== nextTitle) {
      return false;
    }

    if (nextShortTitle !== null) {
      return candidate.shortTitle === nextShortTitle;
    }

    return candidate.shortTitle === null;
  });
}

function indexThemeBySubjects(
  themesBySubjectId: Map<string, ThemeRecord[]>,
  theme: ThemeRecord
) {
  const subjectIds = new Set(theme.domains.map((domain) => domain.subjectId));

  for (const subjectId of subjectIds) {
    const subjectThemes = themesBySubjectId.get(subjectId);
    if (subjectThemes) {
      if (!subjectThemes.some((candidate) => candidate.id === theme.id)) {
        subjectThemes.push(theme);
      }
      continue;
    }

    themesBySubjectId.set(subjectId, [theme]);
  }
}

async function main() {
  const args = process.argv.slice(2);
  let filePath = "exports/domains-themes.json";
  let dryRun = false;
  let confirmed = false;

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--file") {
      filePath = args[i + 1] ?? filePath;
      i += 1;
      continue;
    }
    if (arg === "--dry-run") {
      dryRun = true;
      continue;
    }
    if (arg === "--yes" || arg === "-y") {
      confirmed = true;
      continue;
    }
    if (arg === "--help" || arg === "-h") {
      printHelp();
      return;
    }
  }

  ensureDatabaseUrl();

  const { PrismaClient } = require("@prisma/client") as typeof import("@prisma/client");

  const isProdTarget = process.env.NODE_ENV === "production";
  if (isProdTarget && !dryRun && !confirmed) {
    throw new Error(
      "Refuse to import on NODE_ENV=production without --yes (or set NODE_ENV=development)."
    );
  }

  const absoluteFile = path.resolve(process.cwd(), filePath);
  const raw = fs.readFileSync(absoluteFile, "utf-8");
  const payload = JSON.parse(raw) as ImportPayload;

  if (!payload || !Array.isArray(payload.domains) || !Array.isArray(payload.themes)) {
    throw new Error("Invalid export file: expected { domains: [], themes: [] }.");
  }

  const prisma = new PrismaClient();

  try {
    const subjects = await prisma.subject.findMany({
      select: {
        id: true,
        longDescription: true,
        shortDescription: true,
      },
    });

    const subjectsByKey = new Map<string, string>();
    const subjectsByLong = new Map<string, string[]>();

    for (const subject of subjects) {
      subjectsByKey.set(
        buildSubjectKey(subject.longDescription, subject.shortDescription),
        subject.id
      );
      const list = subjectsByLong.get(subject.longDescription);
      if (list) {
        list.push(subject.id);
      } else {
        subjectsByLong.set(subject.longDescription, [subject.id]);
      }
    }

    const resolveSubjectId = (entry: ImportDomain | ImportTheme): string | null => {
      const key = buildSubjectKey(entry.subjectLongDescription, entry.subjectShortDescription);
      const direct = subjectsByKey.get(key);
      if (direct) {
        return direct;
      }

      const byLong = subjectsByLong.get(entry.subjectLongDescription);
      if (byLong?.length === 1) {
        return byLong[0];
      }

      return null;
    };

    const existingDomains = await prisma.domain.findMany({
      select: {
        id: true,
        subjectId: true,
        longDescription: true,
        shortDescription: true,
        order: true,
        discipline: true,
      },
    });

    const domainByKey = new Map<string, DomainRecord>();
    for (const domain of existingDomains) {
      domainByKey.set(`${domain.subjectId}::${domain.longDescription}`, domain);
    }

    let domainsCreated = 0;
    let domainsUpdated = 0;
    let domainsSkipped = 0;
    let dryRunDomainCounter = 0;

    for (const domain of payload.domains) {
      const subjectId = resolveSubjectId(domain);
      if (!subjectId) {
        domainsSkipped += 1;
        console.warn(
          `Skip domain: subject not found (${domain.subjectLongDescription} / ${domain.subjectShortDescription})`
        );
        continue;
      }

      const key = `${subjectId}::${domain.longDescription}`;
      const existing = domainByKey.get(key);
      const nextDiscipline = domain.discipline ?? null;
      const nextOrder = domain.order ?? null;

      if (existing) {
        const needsUpdate =
          existing.shortDescription !== domain.shortDescription ||
          (existing.order ?? null) !== nextOrder ||
          (existing.discipline ?? null) !== nextDiscipline;

        if (needsUpdate) {
          const updated: DomainRecord = dryRun
            ? {
                ...existing,
                shortDescription: domain.shortDescription,
                order: nextOrder,
                discipline: nextDiscipline,
              }
            : await prisma.domain.update({
                where: { id: existing.id },
                data: {
                  shortDescription: domain.shortDescription,
                  order: nextOrder,
                  discipline: nextDiscipline,
                },
              });

          domainByKey.set(key, updated);
          domainsUpdated += 1;
        }
      } else {
        const created: DomainRecord = dryRun
          ? {
              id: `dry-run-domain-${++dryRunDomainCounter}`,
              longDescription: domain.longDescription,
              shortDescription: domain.shortDescription,
              order: nextOrder,
              discipline: nextDiscipline,
              subjectId,
            }
          : await prisma.domain.create({
              data: {
                longDescription: domain.longDescription,
                shortDescription: domain.shortDescription,
                order: nextOrder,
                discipline: nextDiscipline,
                subjectId,
              },
            });

        domainByKey.set(key, created);
        domainsCreated += 1;
      }
    }

    const chapters = await prisma.chapter.findMany({
      select: {
        id: true,
        slug: true,
        subjectId: true,
      },
    });

    const chapterIdByKey = new Map<string, string>();
    for (const chapter of chapters) {
      chapterIdByKey.set(`${chapter.subjectId}::${chapter.slug}`, chapter.id);
    }

    const existingThemes = await prisma.theme.findMany({
      select: {
        id: true,
        title: true,
        shortTitle: true,
        domainIds: true,
        chapterIds: true,
        domains: {
          select: {
            subjectId: true,
          },
        },
      },
    });

    const themesBySubjectId = new Map<string, ThemeRecord[]>();
    for (const theme of existingThemes) {
      indexThemeBySubjects(themesBySubjectId, theme);
    }

    let themesCreated = 0;
    let themesUpdated = 0;
    let themesSkipped = 0;
    let dryRunThemeCounter = 0;

    for (const theme of payload.themes) {
      const subjectId = resolveSubjectId(theme);
      if (!subjectId) {
        themesSkipped += 1;
        console.warn(
          `Skip theme: subject not found (${theme.subjectLongDescription} / ${theme.subjectShortDescription})`
        );
        continue;
      }

      const domainKey = `${subjectId}::${theme.domainLongDescription}`;
      const domain = domainByKey.get(domainKey);
      if (!domain) {
        themesSkipped += 1;
        console.warn(
          `Skip theme: domain not found (${theme.domainLongDescription} for ${theme.subjectLongDescription})`
        );
        continue;
      }

      const nextTitle = resolveThemeTitle(theme);
      const nextShortTitle = resolveThemeShortTitle(theme);
      const resolvedChapterIds = (theme.chapterSlugs ?? []).flatMap((chapterSlug) => {
        const chapterId = chapterIdByKey.get(`${subjectId}::${chapterSlug}`);
        if (!chapterId) {
          console.warn(
            `Skip chapter association: chapter not found (${chapterSlug} for ${theme.subjectLongDescription})`
          );
          return [];
        }

        return [chapterId];
      });

      const subjectThemes = themesBySubjectId.get(subjectId) ?? [];
      const existing = findMatchingTheme(subjectThemes, nextTitle, nextShortTitle);

      if (existing) {
        const nextDomainIds = mergeUniqueIds(existing.domainIds, [domain.id]);
        const nextChapterIds = mergeUniqueIds(existing.chapterIds, resolvedChapterIds);
        const nextDomains = existing.domains.some(
          (candidateDomain) => candidateDomain.subjectId === subjectId
        )
          ? existing.domains
          : [...existing.domains, { subjectId }];
        const needsUpdate =
          existing.title !== nextTitle ||
          existing.shortTitle !== nextShortTitle ||
          !arraysEqual(existing.domainIds, nextDomainIds) ||
          !arraysEqual(existing.chapterIds, nextChapterIds);

        if (needsUpdate) {
          const updated: ThemeRecord = dryRun
            ? {
                ...existing,
                title: nextTitle,
                shortTitle: nextShortTitle,
                domainIds: nextDomainIds,
                chapterIds: nextChapterIds,
                domains: nextDomains,
              }
            : await prisma.theme.update({
                where: { id: existing.id },
                data: {
                  title: nextTitle,
                  shortTitle: nextShortTitle,
                  domains: {
                    set: nextDomainIds.map((id) => ({ id })),
                  },
                  chapters: {
                    set: nextChapterIds.map((id) => ({ id })),
                  },
                },
                select: {
                  id: true,
                  title: true,
                  shortTitle: true,
                  domainIds: true,
                  chapterIds: true,
                  domains: {
                    select: {
                      subjectId: true,
                    },
                  },
                },
              });

          existing.title = updated.title;
          existing.shortTitle = updated.shortTitle;
          existing.domainIds = updated.domainIds;
          existing.chapterIds = updated.chapterIds;
          existing.domains = updated.domains;
          indexThemeBySubjects(themesBySubjectId, existing);
          themesUpdated += 1;
        }
      } else {
        const created: ThemeRecord = dryRun
          ? {
              id: `dry-run-theme-${++dryRunThemeCounter}`,
              title: nextTitle,
              shortTitle: nextShortTitle,
              domainIds: [domain.id],
              chapterIds: resolvedChapterIds,
              domains: [{ subjectId }],
            }
          : await prisma.theme.create({
              data: {
                title: nextTitle,
                shortTitle: nextShortTitle,
                domains: {
                  connect: [{ id: domain.id }],
                },
                chapters: {
                  connect: resolvedChapterIds.map((id) => ({ id })),
                },
              },
              select: {
                id: true,
                title: true,
                shortTitle: true,
                domainIds: true,
                chapterIds: true,
                domains: {
                  select: {
                    subjectId: true,
                  },
                },
              },
            });

        indexThemeBySubjects(themesBySubjectId, created);
        themesCreated += 1;
      }
    }

    console.log(
      [
        `Domains: created=${domainsCreated}, updated=${domainsUpdated}, skipped=${domainsSkipped}`,
        `Themes: created=${themesCreated}, updated=${themesUpdated}, skipped=${themesSkipped}`,
        dryRun ? "Dry-run: no changes applied." : "Import complete.",
      ].join("\n")
    );
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error("Import failed:", error);
  process.exit(1);
});
