import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14Eicosanoides } from "../../prisma/seeds/health-training-ue14-eicosanoides.seed";

export const description =
  "Ajoute les sections et QCM du chapitre sur les eicosanoïdes de l'UE14 Biochimie Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14Eicosanoides(prisma);
}
