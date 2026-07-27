import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14DerivesMonofonctionnelsAlcoolsAminesHalogenes } from "../../prisma/seeds/health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.seed";

export const description =
  "Câble les sections A-E et les QCM du quatrième chapitre de chimie organique de l'UE14 Chimie Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14DerivesMonofonctionnelsAlcoolsAminesHalogenes(prisma);
}
