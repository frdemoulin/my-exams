import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14Osides } from "../../prisma/seeds/health-training-ue14-osides.seed";

export const description =
  "Ajoute les sections et QCM du troisième chapitre de biochimie de l'UE14 Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14Osides(prisma);
}
