import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14RolesBiologiquesProteinesPartie1 } from "../../prisma/seeds/health-training-ue14-roles-biologiques-proteines-partie-1.seed";

export const description =
  "Ajoute les sections et QCM du chapitre sur les rôles biologiques des protéines, partie 1, de l'UE14 Biochimie Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14RolesBiologiquesProteinesPartie1(prisma);
}
