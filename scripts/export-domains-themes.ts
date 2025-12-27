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

function ensureDatabaseUrl(useProdUrl: boolean) {
  if (useProdUrl) {
    const prodUrl = process.env.DATABASE_URL_PROD ?? process.env.MONGODB_URI_PROD;
    if (!prodUrl) {
      throw new Error(
        "Option --prod active but DATABASE_URL_PROD (or MONGODB_URI_PROD) is missing."
      );
    }
    process.env.DATABASE_URL = prodUrl;
  }

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
      "Export domains/themes to JSON.",
      "",
      "Usage:",
      "  tsx scripts/export-domains-themes.ts --out ./exports/domains-themes.json",
      "  tsx scripts/export-domains-themes.ts --prod --out ./exports/domains-themes.json",
      "",
      "Options:",
      "  --prod       use DATABASE_URL_PROD / MONGODB_URI_PROD",
      "  --out        output path (default: ./exports/domains-themes.json)",
      "  --pretty     pretty JSON output",
      "  --compact    compact JSON output",
    ].join("\n")
  );
}

async function main() {
  const args = process.argv.slice(2);
  let outFile = "exports/domains-themes.json";
  let pretty = true;
  let useProdUrl = false;

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--out") {
      outFile = args[i + 1] ?? outFile;
      i += 1;
      continue;
    }
    if (arg === "--prod" || arg === "--use-prod-url") {
      useProdUrl = true;
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
    if (arg === "--help" || arg === "-h") {
      printHelp();
      return;
    }
  }

  ensureDatabaseUrl(useProdUrl);

  const prisma = new PrismaClient();

  try {
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

    const payload: ExportPayload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      domains: domainExports,
      themes: themeExports,
    };

    const absoluteOut = path.resolve(process.cwd(), outFile);
    fs.mkdirSync(path.dirname(absoluteOut), { recursive: true });
    fs.writeFileSync(
      absoluteOut,
      JSON.stringify(payload, null, pretty ? 2 : 0),
      "utf-8"
    );

    console.log(
      `Export done: domains=${domainExports.length}, themes=${themeExports.length}`
    );
    console.log(`Output: ${absoluteOut}`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error("Export failed:", error);
  process.exit(1);
});
