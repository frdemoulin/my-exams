import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function cleanupAuthLogs() {
  const retentionDays = Number(process.env.AUTH_LOG_RETENTION_DAYS ?? "180");
  if (!Number.isFinite(retentionDays) || retentionDays <= 0) {
    console.error("AUTH_LOG_RETENTION_DAYS doit etre un entier positif.");
    process.exit(1);
  }

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - retentionDays);

  const result = await prisma.authLog.deleteMany({
    where: {
      createdAt: { lt: cutoff },
    },
  });

  console.log(
    `🧹 Auth logs nettoyes: ${result.count} supprimes (retention ${retentionDays} jours, cutoff ${cutoff.toISOString()}).`
  );
}

cleanupAuthLogs()
  .catch((error) => {
    console.error("❌ Erreur nettoyage auth logs:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
