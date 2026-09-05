/**
 * Audit READ-ONLY des comptes de test / fixtures éventuellement présents en base.
 *
 * Ce script ne modifie ni ne supprime aucune donnée.
 *
 * Usage:
 *   # Dev
 *   npx tsx scripts/audit-prod-fixtures.ts
 *
 *   # Production
 *   npx tsx scripts/audit-prod-fixtures.ts --prod
 */
import { loadProjectEnv } from "./lib/load-env";

const FIXTURE_EMAILS = [
  "admin@example.com",
  "demo@example.com",
  "admin-e2e@example.com",
];

async function main() {
  loadProjectEnv();

  const isProdArg = process.argv.includes("--prod");
  if (isProdArg) {
    const prodUrl = process.env.DATABASE_URL_PROD ?? process.env.MONGODB_URI_PROD;
    if (prodUrl) {
      process.env.DATABASE_URL = prodUrl;
    }
  }

  const { PrismaClient } = require("@prisma/client") as typeof import("@prisma/client");
  const prisma = new PrismaClient();

  try {
    console.log("🔍 Démarrage de l'audit READ-ONLY des fixtures...");

    const users = await prisma.user.findMany({
      where: {
        email: { in: FIXTURE_EMAILS },
      },
      include: {
        accounts: { select: { id: true, provider: true } },
        sessions: { select: { id: true } },
        academicEnrollments: { select: { id: true, audience: true } },
        trainingQuizAttempts: { select: { id: true } },
        healthMockExamAttempts: { select: { id: true } },
        trainingQuizProgressEntries: { select: { id: true } },
        authLogs: { select: { id: true } },
      },
    });

    if (users.length === 0) {
      console.log("✅ Aucune fixture de test trouvée parmi la liste ciblée.");
      return;
    }

    console.log(`⚠️ ${users.length} compte(s) fixture trouvé(s) :\n`);

    for (const u of users) {
      console.log(`--------------------------------------------------`);
      console.log(`Email                     : ${u.email}`);
      console.log(`ID                        : ${u.id}`);
      console.log(`Nom                       : ${u.name ?? "(aucun)"}`);
      console.log(`Rôle                      : ${u.roles}`);
      console.log(`Comptes OAuth             : ${u.accounts.length} (${u.accounts.map((a) => a.provider).join(", ") || "aucun"})`);
      console.log(`Sessions actives          : ${u.sessions.length}`);
      console.log(`Affectations annuelles    : ${u.academicEnrollments.length}`);
      console.log(`Tentatives Quiz           : ${u.trainingQuizAttempts.length}`);
      console.log(`Tentatives Santé (EB)     : ${u.healthMockExamAttempts.length}`);
      console.log(`Entrées de progression    : ${u.trainingQuizProgressEntries.length}`);
      console.log(`Entrées AuthLog           : ${u.authLogs.length}`);
    }
    console.log(`--------------------------------------------------\n`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error("❌ Erreur audit fixtures:", err);
  process.exit(1);
});
