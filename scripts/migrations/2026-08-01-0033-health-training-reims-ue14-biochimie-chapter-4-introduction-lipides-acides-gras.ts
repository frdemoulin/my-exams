import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14IntroductionLipidesAcidesGras } from "../../prisma/seeds/health-training-ue14-introduction-lipides-acides-gras.seed";

export const description =
  "Ajoute les sections et QCM du chapitre d'introduction aux lipides et acides gras de l'UE14 Biochimie Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14IntroductionLipidesAcidesGras(prisma);
}
