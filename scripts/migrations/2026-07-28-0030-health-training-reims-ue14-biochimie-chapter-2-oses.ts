import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14OsesSimplesDerives } from "../../prisma/seeds/health-training-ue14-oses-simples-derives.seed";

export const description =
  "Ajoute les sections et QCM du deuxième chapitre de biochimie de l'UE14 Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14OsesSimplesDerives(prisma);
}
