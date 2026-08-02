import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14GlucidesGeneralitesStructure } from "../../prisma/seeds/health-training-ue14-glucides-generalites-structure.seed";

export const description =
  "Ajoute les sections et QCM du premier chapitre de biochimie de l'UE14 Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14GlucidesGeneralitesStructure(prisma);
}
