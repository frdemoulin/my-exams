/**
 * Seed "prod" pour MongoDB Atlas.
 *
 * - Ne committe pas tes secrets : mets-les plutôt dans `.env.local` (ignoré par git) ou dans ton shell.
 * - Ce script vérifie que l'URL ressemble à une URI Atlas (mongodb+srv / mongodb.net).
 *
 * Exemples :
 *   DATABASE_URL="mongodb+srv://USER:PASSWORD@cluster.mongodb.net/my-exams?retryWrites=true&w=majority" \
 *   CONFIRM_PROD_SEED=1 \
 *   npm run db:seed:prod
 *
 * Options :
 *   --yes            confirme l'exécution (sinon refus)
 *   --skip-generate  saute `prisma generate`
 *   --skip-push      saute `prisma db push`
 *   --skip-seed      saute `prisma db seed`
 *
 * Note : si tu préfères définir `MONGODB_URI`, ce script le copie vers `DATABASE_URL`.
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import dotenv from "dotenv";

function loadEnvIfExists(relativePath: string) {
  const filePath = path.resolve(process.cwd(), relativePath);
  if (fs.existsSync(filePath)) {
    dotenv.config({ path: filePath });
  }
}

// Priorité : shell > env prod local > env local > env
// Astuce : tu peux créer un `.env.prod.local` (ignoré par git) avec DATABASE_URL_PROD=...
loadEnvIfExists(".env.prod.local");
loadEnvIfExists(".env.production.local");
loadEnvIfExists(".env.local");
loadEnvIfExists(".env");

function ensureDatabaseUrl(): string {
  // Convention recommandée : conserver `DATABASE_URL` pour le dev, et utiliser `DATABASE_URL_PROD` pour Atlas.
  const prodUrl = process.env.DATABASE_URL_PROD ?? process.env.MONGODB_URI_PROD;

  if (prodUrl) {
    process.env.DATABASE_URL = prodUrl;
  } else if (!process.env.DATABASE_URL && process.env.MONGODB_URI) {
    process.env.DATABASE_URL = process.env.MONGODB_URI;
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error(
      'DATABASE_URL manquant. Renseigne-le (ou MONGODB_URI) dans ton shell ou dans `.env.local`.'
    );
  }

  if (!prodUrl) {
    console.warn(
      "⚠️ DATABASE_URL_PROD absent : utilisation de DATABASE_URL/MONGODB_URI. Si c'est ta DB de dev, définis DATABASE_URL_PROD pour éviter toute confusion."
    );
  }

  if (/localhost|127\\.0\\.0\\.1|0\\.0\\.0\\.0/.test(databaseUrl)) {
    throw new Error(
      "Par sécurité, ce script refuse un DATABASE_URL qui pointe vers localhost."
    );
  }

  const looksLikeAtlas =
    databaseUrl.startsWith("mongodb+srv://") || databaseUrl.includes("mongodb.net");
  if (!looksLikeAtlas) {
    throw new Error(
      "Par sécurité, ce script attend une URI MongoDB Atlas (mongodb+srv / mongodb.net)."
    );
  }

  const { db } = describeMongoUrl(databaseUrl);
  if (!db || db === "(non spécifié)" || db.trim().length === 0) {
    throw new Error(
      "Ton URI MongoDB Atlas ne contient pas de nom de base. Prisma (MongoDB) requiert un chemin `/<db>`.\n" +
        "Exemple attendu : mongodb+srv://USER:PASSWORD@cluster0.xxx.mongodb.net/my-exams?retryWrites=true&w=majority"
    );
  }

  return databaseUrl;
}

function describeMongoUrl(databaseUrl: string) {
  const match = databaseUrl.match(
    /^mongodb(?:\+srv)?:\/\/(?:[^@]*@)?([^/]+)(?:\/([^?]+))?/
  );
  const host = match?.[1] ?? "inconnu";
  const db = match?.[2] ?? "(non spécifié)";
  return { host, db };
}

function run(cmd: string, args: string[]) {
  console.log(`\n▶ ${cmd} ${args.join(" ")}`);
  const res = spawnSync(cmd, args, { stdio: "inherit", env: process.env });
  if (res.status !== 0) {
    throw new Error(`Commande échouée: ${cmd} (exit ${res.status ?? "?"})`);
  }
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const confirmed =
    args.has("--yes") ||
    args.has("-y") ||
    process.env.CONFIRM_PROD_SEED === "1" ||
    process.env.CONFIRM_PROD_SEED === "true";

  if (!confirmed) {
    console.error(
      "Refus par sécurité: ajoute `--yes` (ou `CONFIRM_PROD_SEED=1`) pour lancer le seeding de prod."
    );
    process.exit(1);
  }

  const databaseUrl = ensureDatabaseUrl();
  const { host, db } = describeMongoUrl(databaseUrl);
  console.log(`\n🎯 Cible MongoDB Atlas: ${host}/${db}`);

  const skipGenerate = args.has("--skip-generate");
  const skipPush = args.has("--skip-push");
  const skipSeed = args.has("--skip-seed");

  // Sécurité absolue : interdiction formelle de tout flag de fixtures dev pour le seed de production
  delete process.env.SEED_DEV_FIXTURES;
  process.env.SEED_DEV_FIXTURES = "0";

  if (!skipGenerate) run("npx", ["prisma", "generate"]);
  if (!skipPush) run("npx", ["prisma", "db", "push"]);
  if (!skipSeed) run("npx", ["prisma", "db", "seed"]);

  console.log("\n✅ Seed prod terminé (données de référence uniquement, zéro compte de test).");
}

main().catch((err) => {
  console.error("❌ Erreur seed-prod:", err);
  process.exit(1);
});
