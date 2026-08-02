import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14RolesBiologiquesProteinesPartie2 } from "../../prisma/seeds/health-training-ue14-roles-biologiques-proteines-partie-2.seed";

export const description =
  "Ajoute les sections et QCM du chapitre sur les rôles biologiques des protéines, partie 2, de l'UE14 Biochimie Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14RolesBiologiquesProteinesPartie2(prisma);
}
