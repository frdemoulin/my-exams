import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14AcidesAminesStructureRolesBiologiques } from "../../prisma/seeds/health-training-ue14-acides-amines-structure-roles-biologiques.seed";

export const description =
  "Ajoute les sections et QCM du chapitre sur la structure et les rôles biologiques des acides aminés de l'UE14 Biochimie Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14AcidesAminesStructureRolesBiologiques(prisma);
}
