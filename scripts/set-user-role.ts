/**
 * Met à jour le rôle (USER/ADMIN) d'un utilisateur.
 *
 * Usage:
 *   # Dev (DATABASE_URL / .env.local)
 *   npm run user:role -- --email "admin@example.com" --role ADMIN
 *
 *   # Prod (DATABASE_URL_PROD / MONGODB_URI_PROD)
 *   CONFIRM_USER_ROLE=1 npm run user:role -- --prod --email "toi@domaine.fr" --role ADMIN
 *
 * Options:
 *   --email <email>     (recommandé) cible par email (unique)
 *   --user-id <id>      cible par ObjectId (fallback)
 *   --role <USER|ADMIN> rôle à appliquer
 *   --prod              utilise DATABASE_URL_PROD / MONGODB_URI_PROD
 *   --yes               confirme en prod (équiv. CONFIRM_USER_ROLE=1)
 */
import fs from "node:fs";
import path from "node:path";

import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

type CliOptions = {
  email?: string;
  userId?: string;
  role: "USER" | "ADMIN";
  useProdUrl: boolean;
  confirmed: boolean;
};

function loadEnvIfExists(relativePath: string) {
  const filePath = path.resolve(process.cwd(), relativePath);
  if (fs.existsSync(filePath)) {
    dotenv.config({ path: filePath });
  }
}

function getArgValue(flag: string): string | undefined {
  const index = process.argv.indexOf(flag);
  if (index === -1) return undefined;
  return process.argv[index + 1];
}

function parseCli(): CliOptions {
  const args = new Set(process.argv.slice(2));

  const email = getArgValue("--email")?.trim();
  const userId = getArgValue("--user-id")?.trim();

  const roleRaw = getArgValue("--role")?.trim().toUpperCase();
  const role = roleRaw === "ADMIN" ? "ADMIN" : "USER";

  const useProdUrl = args.has("--prod") || args.has("--use-prod-url");
  const confirmed =
    args.has("--yes") ||
    args.has("-y") ||
    process.env.CONFIRM_USER_ROLE === "1" ||
    process.env.CONFIRM_USER_ROLE === "true";

  if (!email && !userId) {
    throw new Error("Paramètre manquant: ajoute `--email <email>` (ou `--user-id <id>`).");
  }

  if (!roleRaw || (roleRaw !== "USER" && roleRaw !== "ADMIN")) {
    throw new Error("Paramètre invalide: `--role` doit valoir USER ou ADMIN.");
  }

  return { email, userId, role, useProdUrl, confirmed };
}

function ensureDatabaseUrl(useProdUrl: boolean) {
  if (useProdUrl) {
    const prodUrl = process.env.DATABASE_URL_PROD ?? process.env.MONGODB_URI_PROD;
    if (!prodUrl) {
      throw new Error("Option `--prod` activée mais `DATABASE_URL_PROD` (ou `MONGODB_URI_PROD`) est manquant.");
    }
    process.env.DATABASE_URL = prodUrl;
  }

  if (!process.env.DATABASE_URL && process.env.MONGODB_URI) {
    process.env.DATABASE_URL = process.env.MONGODB_URI;
  }

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL manquant. Renseigne-le (ou MONGODB_URI) dans ton shell ou `.env.local`.");
  }
}

async function main() {
  // Priorité : shell > env prod local > env local > env
  loadEnvIfExists(".env.prod.local");
  loadEnvIfExists(".env.production.local");
  loadEnvIfExists(".env.local");
  loadEnvIfExists(".env");

  const opts = parseCli();
  ensureDatabaseUrl(opts.useProdUrl);

  const isProdTarget = process.env.NODE_ENV === "production" || opts.useProdUrl;
  if (isProdTarget && !opts.confirmed) {
    throw new Error("Refus par sécurité: en prod, lance avec `CONFIRM_USER_ROLE=1` (ou `--yes`).");
  }

  const prisma = new PrismaClient();

  try {
    const where = opts.email ? { email: opts.email.toLowerCase() } : { id: opts.userId! };

    const existing = await prisma.user.findUnique({ where });
    if (!existing) {
      throw new Error(`Utilisateur introuvable (where=${JSON.stringify(where)}).`);
    }

    const updated = await prisma.user.update({
      where,
      data: { roles: opts.role },
    });

    console.log("✅ Rôle mis à jour");
    console.log(`- email: ${updated.email ?? "(sans email)"}`);
    console.log(`- id: ${updated.id}`);
    console.log(`- roles: ${updated.roles}`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error("❌ set-user-role:", err instanceof Error ? err.message : err);
  process.exit(1);
});

