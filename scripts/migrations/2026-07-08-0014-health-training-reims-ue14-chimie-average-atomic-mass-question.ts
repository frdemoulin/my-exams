import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14 } from "../../prisma/seeds/health-training-ue14.seed";

export const description =
  "Ajoute une question quantitative sur la masse atomique moyenne au quiz UE14 Chimie Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14(prisma);
}
