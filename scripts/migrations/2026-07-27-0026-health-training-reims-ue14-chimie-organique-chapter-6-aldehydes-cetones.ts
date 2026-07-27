import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14AldehydesCetones } from "../../prisma/seeds/health-training-ue14-aldehydes-cetones.seed";

export const description =
  "Câble les sections A-E et les QCM du sixième chapitre de chimie organique de l'UE14 Chimie Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14AldehydesCetones(prisma);
}
