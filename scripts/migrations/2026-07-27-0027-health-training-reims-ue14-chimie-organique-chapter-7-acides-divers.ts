import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14AcidesDivers } from "../../prisma/seeds/health-training-ue14-acides-divers.seed";

export const description =
  "Câble les sections A-E et les QCM du septième chapitre de chimie organique de l'UE14 Chimie Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14AcidesDivers(prisma);
}
