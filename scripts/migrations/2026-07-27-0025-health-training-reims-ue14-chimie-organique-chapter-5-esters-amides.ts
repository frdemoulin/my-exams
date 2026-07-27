import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14EstersAmides } from "../../prisma/seeds/health-training-ue14-esters-amides.seed";

export const description =
  "Câble les sections A-E et les QCM du cinquième chapitre de chimie organique de l'UE14 Chimie Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14EstersAmides(prisma);
}
