import fs from "node:fs";
import path from "node:path";

import dotenv from "dotenv";
import { PrismaClient, type DomainDiscipline } from "@prisma/client";

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
};

type ImportPayload = {
  version: number;
  exportedAt?: string;
  domains: ImportDomain[];
  themes: ImportTheme[];
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

    const resolveSubjectId = (domain: ImportDomain | ImportTheme): string | null => {
      const key = buildSubjectKey(domain.subjectLongDescription, domain.subjectShortDescription);
      const direct = subjectsByKey.get(key);
      if (direct) return direct;
      const byLong = subjectsByLong.get(domain.subjectLongDescription);
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
