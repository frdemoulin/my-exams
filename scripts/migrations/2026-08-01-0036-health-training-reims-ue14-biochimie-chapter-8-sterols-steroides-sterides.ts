import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14SterolsSteroidesSterides } from "../../prisma/seeds/health-training-ue14-sterols-steroides-sterides.seed";

export const description =
  "Ajoute les sections et QCM du chapitre sur les stérols, stéroïdes et stérides de l'UE14 Biochimie Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14SterolsSteroidesSterides(prisma);
}
