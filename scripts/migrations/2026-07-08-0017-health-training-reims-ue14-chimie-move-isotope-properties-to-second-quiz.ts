import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14 } from "../../prisma/seeds/health-training-ue14.seed";

export const description =
  "Déplace la question sur les propriétés des isotopes du premier au deuxième quiz UE14 Chimie Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14(prisma);
}
