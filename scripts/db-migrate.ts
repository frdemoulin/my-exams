/**
 * Runner de migrations applicatives (MongoDB + Prisma).
 *
 * MongoDB n'utilise pas le système de migrations SQL de Prisma.
 * Ce runner sert à versionner et exécuter des migrations "data" (backfill, renommages, normalisations…)
 * de façon idempotente, en traçant l'état dans la collection `migrations`.
 *
 * Usage:
 *   # Dev
 *   npm run db:migrate
 *
 *   # Dry-run (affiche ce qui serait exécuté)
 *   npm run db:migrate -- --dry-run
 *
 *   # Prod (ex: pre-deploy Render) - sécurité
 *   CONFIRM_DB_MIGRATIONS=1 npm run db:deploy
 *
 *   # (ou uniquement les migrations data)
 *   CONFIRM_DB_MIGRATIONS=1 npm run db:migrate
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

import dotenv from "dotenv";

import { DbMigrationStatus, PrismaClient } from "@prisma/client";

type MigrationModule = {
  id?: string;
  description?: string;
  up: (prisma: PrismaClient) => Promise<void>;
};

type Migration = {
  id: string;
  fileName: string;
  filePath: string;
  description?: string;
  checksum: string;
  up: (prisma: PrismaClient) => Promise<void>;
};

function getErrorCode(err: unknown): string | undefined {
  if (typeof err !== "object" || err === null) return undefined;
  const record = err as Record<string, unknown>;
  return typeof record.code === "string" ? record.code : undefined;
}

function loadEnvIfExists(relativePath: string) {
  const filePath = path.resolve(process.cwd(), relativePath);
  if (fs.existsSync(filePath)) {
    dotenv.config({ path: filePath });
  }
}

// Priorité : shell > env prod local > env local > env
loadEnvIfExists(".env.prod.local");
loadEnvIfExists(".env.production.local");
loadEnvIfExists(".env.local");
loadEnvIfExists(".env");

function ensureDatabaseUrl(useProdUrl: boolean) {
  if (useProdUrl) {
    const prodUrl = process.env.DATABASE_URL_PROD ?? process.env.MONGODB_URI_PROD;
    if (!prodUrl) {
      throw new Error(
        "Option `--prod` activée mais `DATABASE_URL_PROD` (ou `MONGODB_URI_PROD`) est manquant."
      );
    }
    process.env.DATABASE_URL = prodUrl;
  }

  if (!process.env.DATABASE_URL && process.env.MONGODB_URI) {
    process.env.DATABASE_URL = process.env.MONGODB_URI;
  }

  if (!process.env.DATABASE_URL) {
    throw new Error(
      'DATABASE_URL manquant. Renseigne-le (ou MONGODB_URI) dans ton shell ou dans `.env.local`.'
    );
  }
}

function sha256(contents: string | Buffer): string {
  return crypto.createHash("sha256").update(contents).digest("hex");
}

async function loadMigrations(migrationsDir: string): Promise<Migration[]> {
  try {
    const entries = await fs.promises.readdir(migrationsDir, {
      withFileTypes: true,
    });

    const migrationFiles = entries
      .filter(
        (entry) =>
          entry.isFile() &&
          !entry.name.startsWith("_") &&
          (entry.name.endsWith(".ts") || entry.name.endsWith(".js"))
      )
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b));

    const migrations: Migration[] = [];

    for (const fileName of migrationFiles) {
      const filePath = path.join(migrationsDir, fileName);
      const checksum = sha256(await fs.promises.readFile(filePath));
      const mod = (await import(pathToFileURL(filePath).href)) as Partial<MigrationModule>;
      const up = mod.up;

      if (typeof up !== "function") {
        throw new Error(
          `Migration invalide: ${fileName}. Attendu: export async function up(prisma) { ... }`
        );
      }

      const id = (mod.id ?? fileName.replace(/\.(ts|js)$/, "")).trim();
      if (!id) throw new Error(`Migration invalide: ${fileName}. id vide.`);

      migrations.push({
        id,
        fileName,
        filePath,
        description: mod.description,
        checksum,
        up,
      });
    }

    return migrations;
  } catch (err: unknown) {
    if (getErrorCode(err) === "ENOENT") return [];
    throw err;
  }
}

function formatError(err: unknown): string {
  if (err instanceof Error) {
    const stack = err.stack ?? err.message;
    // Évite de stocker un champ trop lourd en base
    return stack.length > 10_000 ? `${stack.slice(0, 10_000)}…` : stack;
  }
  return String(err);
}

function printHelp() {
  console.log(
    [
      "db:migrate — migrations applicatives (MongoDB + Prisma)",
      "",
      "Usage:",
      "  npm run db:migrate",
      "  npm run db:migrate -- --dry-run",
      "  npm run db:migrate -- --status",
      "  npm run db:migrate -- --prod",
      "",
      "Options:",
      "  --dry-run   n'écrit rien en base (affiche uniquement)",
      "  --status    affiche les migrations connues/appliquées",
      "  --prod      utilise DATABASE_URL_PROD / MONGODB_URI_PROD",
      "  --yes       confirme en prod (équivalent CONFIRM_DB_MIGRATIONS=1)",
    ].join("\n")
  );
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const dryRun = args.has("--dry-run");
  const showStatus = args.has("--status");
  const useProdUrl = args.has("--prod") || args.has("--use-prod-url");

  if (args.has("--help") || args.has("-h")) {
    printHelp();
    return;
  }

  ensureDatabaseUrl(useProdUrl);

  const isProdTarget = process.env.NODE_ENV === "production" || useProdUrl;
  const confirmed =
    args.has("--yes") ||
    args.has("-y") ||
    process.env.CONFIRM_DB_MIGRATIONS === "1" ||
    process.env.CONFIRM_DB_MIGRATIONS === "true";

  if (isProdTarget && !dryRun && !confirmed) {
    throw new Error(
      "Refus par sécurité: en production, lance avec `CONFIRM_DB_MIGRATIONS=1` (ou `--yes`)."
    );
  }

  const prisma = new PrismaClient();
  const migrationsDir = path.resolve(process.cwd(), "scripts", "migrations");

  try {
    if (showStatus) {
      const rows = await prisma.dbMigration.findMany({
        orderBy: { startedAt: "asc" },
      });

      if (!rows.length) {
        console.log("Aucune migration enregistrée.");
        return;
      }

      console.log("Migrations enregistrées :");
      for (const row of rows) {
        console.log(
          `- ${row.name} [${row.status}] (started: ${row.startedAt.toISOString()})`
        );
      }
      return;
    }

    const migrations = await loadMigrations(migrationsDir);

    if (!migrations.length) {
      console.log(`Aucune migration trouvée dans ${migrationsDir}`);
      return;
    }

    console.log(`\n📦 ${migrations.length} migration(s) détectée(s).`);
    if (dryRun) console.log("🧪 Mode dry-run: aucune écriture en base.");

    for (const migration of migrations) {
      const existing = await prisma.dbMigration.findUnique({
        where: { name: migration.id },
      });

      if (existing?.status === DbMigrationStatus.APPLIED) {
        if (existing.checksum !== migration.checksum) {
          throw new Error(
            `Migration déjà appliquée mais checksum différent: ${migration.id}\n` +
              `- base: ${existing.checksum}\n` +
              `- fichier: ${migration.checksum}\n` +
              "⚠️ Ne modifie pas une migration déjà appliquée. Crée une nouvelle migration."
          );
        }
        console.log(`⏭️  ${migration.id} (déjà appliquée)`);
        continue;
      }

      if (existing?.status === DbMigrationStatus.RUNNING) {
        throw new Error(
          `Migration déjà en cours: ${migration.id}. Vérifie la collection "migrations" (status RUNNING).`
        );
      }

      if (dryRun) {
        const state = existing ? `retry (status=${existing.status})` : "apply";
        console.log(`🟦 ${migration.id} (${state})`);
        continue;
      }

      if (!existing) {
        await prisma.dbMigration.create({
          data: {
            name: migration.id,
            checksum: migration.checksum,
            status: DbMigrationStatus.RUNNING,
          },
        });
      } else {
        await prisma.dbMigration.update({
          where: { name: migration.id },
          data: {
            checksum: migration.checksum,
            status: DbMigrationStatus.RUNNING,
            startedAt: new Date(),
            finishedAt: null,
            error: null,
          },
        });
      }

      console.log(`▶️  ${migration.id}${migration.description ? ` — ${migration.description}` : ""}`);

      try {
        await migration.up(prisma);
        await prisma.dbMigration.update({
          where: { name: migration.id },
          data: {
            status: DbMigrationStatus.APPLIED,
            finishedAt: new Date(),
            error: null,
          },
        });
        console.log(`✅ ${migration.id} (appliquée)`);
      } catch (err) {
        await prisma.dbMigration.update({
          where: { name: migration.id },
          data: {
            status: DbMigrationStatus.FAILED,
            finishedAt: new Date(),
            error: formatError(err),
          },
        });
        throw err;
      }
    }

    console.log("\n✅ Migrations terminées.");
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error("❌ Erreur db:migrate:", err);
  process.exit(1);
});
