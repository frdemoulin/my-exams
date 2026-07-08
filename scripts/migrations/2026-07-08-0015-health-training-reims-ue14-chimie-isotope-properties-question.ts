import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14 } from "../../prisma/seeds/health-training-ue14.seed";

export const description =
  "Ajoute une question sur les propriétés physiques et chimiques des isotopes au quiz UE14 Chimie Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14(prisma);
}
