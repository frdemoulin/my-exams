import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14RolesBiologiquesAcidesAminesPeptides } from "../../prisma/seeds/health-training-ue14-roles-biologiques-acides-amines-peptides.seed";

export const description =
  "Ajoute les sections et QCM du chapitre sur les rôles biologiques des acides aminés et peptides de l'UE14 Biochimie Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14RolesBiologiquesAcidesAminesPeptides(prisma);
}
