import type { PrismaClient } from "@prisma/client";

import { seedHealthChapters } from "../../prisma/seeds/health-chapters.seed";
import { seedHealthTrainingUe14NomenclatureOrganique } from "../../prisma/seeds/health-training-ue14-nomenclature-organique.seed";

export const description =
  "Enregistre le chapitre 2.8 (Nomenclature organique) de l'UE14 Chimie Reims et câble ses 6 sections, 12 quiz et 132 emplacements de questions.";

export async function up(prisma: PrismaClient) {
  await seedHealthChapters(prisma);
  await seedHealthTrainingUe14NomenclatureOrganique(prisma);
}
