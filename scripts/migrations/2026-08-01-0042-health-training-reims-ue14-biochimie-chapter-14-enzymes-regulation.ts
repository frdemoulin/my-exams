import type { PrismaClient } from "@prisma/client";

import { seedHealthTrainingUe14EnzymesPropertiesNomenclatureMechanismRegulation } from "../../prisma/seeds/health-training-ue14-enzymes-properties-nomenclature-mechanism-regulation.seed";

export const description =
  "Ajoute les sections et QCM du chapitre sur les propriétés, la nomenclature, le mécanisme d'action et la régulation des enzymes de l'UE14 Biochimie Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTrainingUe14EnzymesPropertiesNomenclatureMechanismRegulation(prisma);
}
