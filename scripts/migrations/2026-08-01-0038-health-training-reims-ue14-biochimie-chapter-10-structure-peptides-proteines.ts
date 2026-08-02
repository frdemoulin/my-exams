import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14StructurePeptidesProteines } from "../../prisma/seeds/health-training-ue14-structure-peptides-proteines.seed";

export const description =
  "Ajoute les sections et QCM du chapitre sur la structure des peptides et protéines de l'UE14 Biochimie Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14StructurePeptidesProteines(prisma);
}
