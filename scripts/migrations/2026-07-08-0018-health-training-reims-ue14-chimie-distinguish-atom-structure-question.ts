import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14 } from "../../prisma/seeds/health-training-ue14.seed";

export const description =
  "Différencie la question de niveau 2 sur la structure de l’atome de la question de niveau 1 sur les ordres de grandeur.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14(prisma);
}
