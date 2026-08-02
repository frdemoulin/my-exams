import type { PrismaClient } from "@prisma/client";

import { seedHealthCellularBiologyChapters } from "../../prisma/seeds/health-chapters.seed";
import { seedHealthTeachingElements } from "../../prisma/seeds/health-teaching-elements.seed";
import { seedHealthTrainingUe14BiologieCellulaireMitochondrie } from "../../prisma/seeds/health-training-ue14-biologie-cellulaire-mitochondrie.seed";

export const description =
  "Ajoute les sections, questions et quiz du chapitre 7 de biologie cellulaire de l'UE14 Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTeachingElements(prisma);
  await seedHealthCellularBiologyChapters(prisma);
  await seedHealthTrainingUe14BiologieCellulaireMitochondrie(prisma);
}
