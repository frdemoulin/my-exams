"use strict";

import fs from "fs";
import path from "path";

import prisma from "@/lib/db/prisma";

type UpdateEntry = {
  id: string;
  description: string | null;
};

async function main() {
  const [, , relativePath] = process.argv;

  if (!relativePath) {
    console.error("Usage: tsx scripts/update-theme-descriptions.ts <path-to-json>");
    process.exit(1);
  }

  const jsonPath = path.resolve(relativePath);

  if (!fs.existsSync(jsonPath)) {
    console.error(`Fichier introuvable : ${jsonPath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(jsonPath, "utf-8");
  const entries: UpdateEntry[] = JSON.parse(raw);

  console.log(`Traitement de ${entries.length} thèmes…`);

  for (const entry of entries) {
    try {
      await prisma.theme.update({
        where: { id: entry.id },
        data: { description: entry.description?.trim() || null },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        console.warn(`Thème introuvable : ${entry.id} (ignoré)`);
        continue;
      }
      throw error;
    }
  }

  console.log("Mise à jour terminée.");
}

main()
  .catch((error) => {
    console.error("Erreur durant la mise à jour des thèmes :", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
