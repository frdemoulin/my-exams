import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14 } from "../../prisma/seeds/health-training-ue14.seed";

export const description =
  "Redécoupe le chapitre UE14 Chimie Reims en sections A-D et limite le premier quiz à la section Atomes.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14(prisma);
}
