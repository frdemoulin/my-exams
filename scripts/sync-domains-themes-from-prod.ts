import fs from "node:fs";
import path from "node:path";

import dotenv from "dotenv";
import { PrismaClient, type DomainDiscipline } from "@prisma/client";

type ExportDomain = {
  longDescription: string;
  shortDescription: string;
  order: number | null;
  discipline: DomainDiscipline | null;
  subjectLongDescription: string;
  subjectShortDescription: string;
};

type ExportTheme = {
  title?: string | null;
  shortTitle?: string | null;
  longDescription: string;
  shortDescription: string | null;
  domainLongDescription: string;
  subjectLongDescription: string;
  subjectShortDescription: string;
};

type ExportPayload = {
  version: 1;
  exportedAt: string;
  domains: ExportDomain[];
  themes: ExportTheme[];
};

function loadEnvIfExists(relativePath: string) {
  const filePath = path.resolve(process.cwd(), relativePath);
  if (fs.existsSync(filePath)) {
    dotenv.config({ path: filePath });
  }
}

// Priority: shell > prod local env > local env > env
loadEnvIfExists(".env.prod.local");
loadEnvIfExists(".env.production.local");
loadEnvIfExists(".env.local");
loadEnvIfExists(".env");

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
      longDescription: true,
      shortDescription: true,
      domain: {
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

  const themeExports: ExportTheme[] = themes.map((theme) => ({
    title: theme.title ?? null,
    shortTitle: theme.shortTitle ?? null,
    longDescription: theme.longDescription,
    shortDescription: theme.shortDescription ?? null,
    domainLongDescription: theme.domain.longDescription,
    subjectLongDescription: theme.domain.subject.longDescription,
    subjectShortDescription: theme.domain.subject.shortDescription,
  }));

  themeExports.sort((a, b) => {
    const bySubject = a.subjectLongDescription.localeCompare(b.subjectLongDescription);
    if (bySubject !== 0) return bySubject;
    const byDomain = a.domainLongDescription.localeCompare(b.domainLongDescription);
    if (byDomain !== 0) return byDomain;
    return a.longDescription.localeCompare(b.longDescription);
  });

  return {
    version: 1,
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
    if (direct) return direct;
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

  const domainByKey = new Map<string, typeof existingDomains[number]>();
  for (const domain of existingDomains) {
    domainByKey.set(`${domain.subjectId}::${domain.longDescription}`, domain);
  }

  let domainsCreated = 0;
  let domainsUpdated = 0;
  let domainsSkipped = 0;

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
        if (!dryRun) {
          const updated = await prisma.domain.update({
            where: { id: existing.id },
            data: {
              shortDescription: domain.shortDescription,
              order: nextOrder,
              discipline: nextDiscipline,
            },
          });
          domainByKey.set(key, updated);
        }
        domainsUpdated += 1;
      }
    } else {
      if (!dryRun) {
        const created = await prisma.domain.create({
          data: {
            longDescription: domain.longDescription,
            shortDescription: domain.shortDescription,
            order: nextOrder,
            discipline: nextDiscipline,
            subjectId,
          },
        });
        domainByKey.set(key, created);
      }
      domainsCreated += 1;
    }
  }

  const existingThemes = await prisma.theme.findMany({
    select: {
      id: true,
      domainId: true,
      title: true,
      shortTitle: true,
      longDescription: true,
      shortDescription: true,
    },
  });

  const themeByKey = new Map<string, typeof existingThemes[number]>();
  for (const theme of existingThemes) {
    themeByKey.set(`${theme.domainId}::${theme.longDescription}`, theme);
  }

  let themesCreated = 0;
  let themesUpdated = 0;
  let themesSkipped = 0;

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

    const key = `${domain.id}::${theme.longDescription}`;
    const existing = themeByKey.get(key);
    const nextTitle = theme.title?.trim() || theme.longDescription;
    const nextShortTitle = theme.shortTitle?.trim() || null;
    const nextShort = theme.shortDescription?.trim() || theme.longDescription;

    if (existing) {
      const needsUpdate =
        existing.title !== nextTitle ||
        existing.shortTitle !== nextShortTitle ||
        existing.shortDescription !== nextShort;
      if (needsUpdate) {
        if (!dryRun) {
          const updated = await prisma.theme.update({
            where: { id: existing.id },
            data: {
              title: nextTitle,
              shortTitle: nextShortTitle,
              shortDescription: nextShort,
            },
          });
          themeByKey.set(key, updated);
        }
        themesUpdated += 1;
      }
    } else {
      if (!dryRun) {
        const created = await prisma.theme.create({
          data: {
            title: nextTitle,
            shortTitle: nextShortTitle,
            longDescription: theme.longDescription,
            shortDescription: nextShort,
            domainId: domain.id,
          },
        });
        themeByKey.set(key, created);
      }
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
