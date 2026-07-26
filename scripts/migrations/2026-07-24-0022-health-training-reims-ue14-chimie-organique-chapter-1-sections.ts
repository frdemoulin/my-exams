import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14NomenclatureChimiqueFonctionsOrganiques } from "../../prisma/seeds/health-training-ue14-nomenclature-chimique-fonctions-organiques.seed";

export const description =
  "Câble les sections A-E du premier chapitre de chimie organique de l'UE14 Chimie Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14NomenclatureChimiqueFonctionsOrganiques(prisma);
}
