import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14GlyceridesGlycerophospholipides } from "../../prisma/seeds/health-training-ue14-glycerides-glycerophospholipides.seed";

export const description =
  "Ajoute les sections et QCM du chapitre sur les glycérides et glycérophospholipides de l'UE14 Biochimie Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14GlyceridesGlycerophospholipides(prisma);
}
