import type { PrismaClient } from "@prisma/client";

import { seedHealthCellularBiologyChapters } from "../../prisma/seeds/health-chapters.seed";
import { seedHealthTeachingElements } from "../../prisma/seeds/health-teaching-elements.seed";
import { seedHealthTrainingUe14BiologieCellulaireMembranePlasmique } from "../../prisma/seeds/health-training-ue14-biologie-cellulaire-membrane-plasmique.seed";

export const description =
  "Ajoute les sections, questions et quiz du chapitre 2 de biologie cellulaire de l'UE14 Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTeachingElements(prisma);
  await seedHealthCellularBiologyChapters(prisma);
  await seedHealthTrainingUe14BiologieCellulaireMembranePlasmique(prisma);
}
