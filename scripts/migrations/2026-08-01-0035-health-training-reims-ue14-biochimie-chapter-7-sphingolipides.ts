import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14Sphingolipides } from "../../prisma/seeds/health-training-ue14-sphingolipides.seed";

export const description =
  "Ajoute les sections et QCM du chapitre sur les sphingolipides de l'UE14 Biochimie Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14Sphingolipides(prisma);
}
