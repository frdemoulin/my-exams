import fs from "node:fs";
import path from "node:path";

import type { DomainDiscipline, PrismaClient } from "@prisma/client";

import { loadProjectEnv } from "./lib/load-env";

type ExportDomain = {
  longDescription: string;
  shortDescription: string;
  order: number | null;
  discipline: DomainDiscipline | null;
  subjectLongDescription: string;
  subjectShortDescription: string;
};

type ExportTheme = {
  title: string;
  shortTitle: string | null;
  longDescription: string;
  shortDescription: string | null;
  domainLongDescription: string;
  subjectLongDescription: string;
  subjectShortDescription: string;
  chapterSlugs?: string[];
};

type ExportPayload = {
  version: number;
  exportedAt: string;
  domains: ExportDomain[];
  themes: ExportTheme[];
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

function ensureUrls() {
  const prodUrl = process.env.DATABASE_URL_PROD ?? process.env.MONGODB_URI_PROD;
  if (!prodUrl) {
    throw new Error(
      "DATABASE_URL_PROD (or MONGODB_URI_PROD) is required to read prod data."
    );
  }

  const devUrl = process.env.DATABASE_URL ?? process.env.MONGODB_URI;
  if (!devUrl) {
    throw new Error(
      "DATABASE_URL (or MONGODB_URI) is required to write dev data."
    );
  }

  if (devUrl === prodUrl) {
    throw new Error("Refuse to run: dev and prod URLs are identical.");
  }

  return { prodUrl, devUrl };
}

function printHelp() {
  console.log(
    [
      "Sync domains/themes from prod to dev.",
      "",
      "Usage:",
      "  tsx scripts/sync-domains-themes-from-prod.ts --yes",
      "",
      "Options:",
      "  --yes         confirm destructive sync",
      "  --dry-run     do not write to dev (export only)",
      "  --skip-clear  keep existing dev domains/themes",
      "  --out         export JSON path (default: ./exports/domains-themes.json)",
      "  --seed        also write ./prisma/seeds/data/domains-themes.json",
      "  --seed-out    custom seed output path",
      "  --pretty      pretty JSON output (default)",
      "  --compact     compact JSON output",
    ].join("\n")
  );
}

function writePayload(filePath: string, payload: ExportPayload, pretty: boolean) {
  const absolutePath = path.resolve(process.cwd(), filePath);
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
  fs.writeFileSync(
    absolutePath,
    JSON.stringify(payload, null, pretty ? 2 : 0),
    "utf-8"
  );
  console.log(`Output: ${absolutePath}`);
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

function resolveThemeTitle(theme: ExportTheme) {
  return normalizeText(theme.title) ?? theme.longDescription.trim();
}

function resolveThemeShortTitle(theme: ExportTheme) {
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

async function exportFromProd(prisma: PrismaClient): Promise<ExportPayload> {
  const domains = await prisma.domain.findMany({
    select: {
      longDescription: true,
      shortDescription: true,
      order: true,
      discipline: true,
      subject: {
        select: {
          longDescription: true,
          shortDescription: true,
        },
      },
    },
  });

  const themes = await prisma.theme.findMany({
    select: {
      title: true,
      shortTitle: true,
      domains: {
        select: {
          longDescription: true,
          subject: {
            select: {
              longDescription: true,
              shortDescription: true,
            },
          },
        },
      },
      chapters: {
        select: {
          slug: true,
        },
      },
    },
  });

  const domainExports: ExportDomain[] = domains.map((domain) => ({
    longDescription: domain.longDescription,
    shortDescription: domain.shortDescription,
    order: domain.order ?? null,
    discipline: domain.discipline ?? null,
    subjectLongDescription: domain.subject.longDescription,
    subjectShortDescription: domain.subject.shortDescription,
  }));

  domainExports.sort((a, b) => {
    const bySubject = a.subjectLongDescription.localeCompare(b.subjectLongDescription);
    if (bySubject !== 0) return bySubject;
    return a.longDescription.localeCompare(b.longDescription);
  });

  const themeExports: ExportTheme[] = themes.flatMap((theme) =>
    theme.domains.map((domain) => ({
      title: theme.title,
      shortTitle: theme.shortTitle ?? null,
      longDescription: theme.title,
      shortDescription: theme.shortTitle ?? null,
      domainLongDescription: domain.longDescription,
      subjectLongDescription: domain.subject.longDescription,
      subjectShortDescription: domain.subject.shortDescription,
      chapterSlugs: [...theme.chapters]
        .map((chapter) => chapter.slug)
        .sort((left, right) => left.localeCompare(right, "fr", { sensitivity: "base" })),
    }))
  );

  themeExports.sort((a, b) => {
    const bySubject = a.subjectLongDescription.localeCompare(b.subjectLongDescription);
    if (bySubject !== 0) return bySubject;
    const byDomain = a.domainLongDescription.localeCompare(b.domainLongDescription);
    if (byDomain !== 0) return byDomain;
    return a.title.localeCompare(b.title);
  });

  return {
    version: 2,
    exportedAt: new Date().toISOString(),
    domains: domainExports,
    themes: themeExports,
  };
}

async function clearDev(prisma: PrismaClient, dryRun: boolean) {
  const themeCount = await prisma.theme.count();
  const domainCount = await prisma.domain.count();
  const domainScopeCount = await prisma.domainScope.count();
  const exerciseCount = await prisma.exercise.count();
  const examPaperCount = await prisma.examPaper.count();

  console.log(`Dev cleanup: themes=${themeCount}, domains=${domainCount}`);
  console.log(`Dev cleanup: domainScopes=${domainScopeCount}`);
  console.log(`Dev cleanup: exercises=${exerciseCount}, examPapers=${examPaperCount}`);

  if (dryRun) {
    console.log("Dry-run: skip dev cleanup.");
    return;
  }

  await prisma.exercise.updateMany({
    data: {
      themeIds: [],
    },
  });

  await prisma.examPaper.updateMany({
    data: {
      domainIds: [],
      themeIds: [],
    },
  });

  await prisma.domainScope.deleteMany();
  await prisma.theme.deleteMany();
  await prisma.domain.deleteMany();
}

async function importIntoDev(
  prisma: PrismaClient,
  payload: ExportPayload,
  dryRun: boolean
) {
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

  const resolveSubjectId = (entry: ExportDomain | ExportTheme): string | null => {
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
      dryRun ? "Dry-run: no changes applied." : "Sync complete.",
    ].join("\n")
  );
}

async function main() {
  const args = process.argv.slice(2);
  let outFile = "exports/domains-themes.json";
  let seedFile: string | null = null;
  let pretty = true;
  let dryRun = false;
  let skipClear = false;
  let confirmed = false;

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--out") {
      outFile = args[i + 1] ?? outFile;
      i += 1;
      continue;
    }
    if (arg === "--seed") {
      seedFile = "prisma/seeds/data/domains-themes.json";
      continue;
    }
    if (arg === "--seed-out") {
      seedFile = args[i + 1] ?? seedFile;
      i += 1;
      continue;
    }
    if (arg === "--pretty") {
      pretty = true;
      continue;
    }
    if (arg === "--compact") {
      pretty = false;
      continue;
    }
    if (arg === "--dry-run") {
      dryRun = true;
      continue;
    }
    if (arg === "--skip-clear") {
      skipClear = true;
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

  if (!dryRun) {
    const envConfirmed =
      process.env.CONFIRM_SYNC_DOMAINS_THEMES === "1" ||
      process.env.CONFIRM_SYNC_DOMAINS_THEMES === "true";
    if (!confirmed && !envConfirmed) {
      throw new Error(
        "Refuse to run without --yes (or CONFIRM_SYNC_DOMAINS_THEMES=1)."
      );
    }
  }

  const { prodUrl, devUrl } = ensureUrls();
  const { PrismaClient } = require("@prisma/client") as typeof import("@prisma/client");

  const prodPrisma = new PrismaClient({
    datasources: { db: { url: prodUrl } },
  });
  const devPrisma = new PrismaClient({
    datasources: { db: { url: devUrl } },
  });

  try {
    const payload = await exportFromProd(prodPrisma);
    console.log(
      `Exported: domains=${payload.domains.length}, themes=${payload.themes.length}`
    );

    if (outFile) {
      writePayload(outFile, payload, pretty);
    }

    if (seedFile) {
      writePayload(seedFile, payload, true);
    }

    if (dryRun) {
      console.log("Dry-run: skip dev sync.");
      return;
    }

    if (!skipClear) {
      await clearDev(devPrisma, dryRun);
    }

    await importIntoDev(devPrisma, payload, dryRun);
  } finally {
    await prodPrisma.$disconnect();
    await devPrisma.$disconnect();
  }
}

main().catch((error) => {
  console.error("Sync failed:", error);
  process.exit(1);
});
