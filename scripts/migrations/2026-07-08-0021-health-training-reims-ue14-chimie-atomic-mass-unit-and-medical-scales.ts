import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14 } from "../../prisma/seeds/health-training-ue14.seed";

export const description =
  "Ajoute au deuxième quiz UE14 Chimie Reims une question sur l’unité de masse atomique et une autre sur les ordres de grandeur en contexte médical.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14(prisma);
}
