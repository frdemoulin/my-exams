import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14EnzymeActivityMeasurement } from "../../prisma/seeds/health-training-ue14-enzyme-activity-measurement.seed";

export const description =
  "Ajoute les sections et QCM du chapitre sur la mesure de l'activité enzymatique de l'UE14 Biochimie Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14EnzymeActivityMeasurement(prisma);
}
