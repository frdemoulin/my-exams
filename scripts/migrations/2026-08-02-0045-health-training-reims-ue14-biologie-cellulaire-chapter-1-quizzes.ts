import type { PrismaClient } from "@prisma/client";

import { seedHealthCellularBiologyChapters } from "../../prisma/seeds/health-chapters.seed";
import { seedHealthTeachingElements } from "../../prisma/seeds/health-teaching-elements.seed";
import { seedHealthTrainingUe14BiologieCellulaireOrganisationMethodesEtudeCellule } from "../../prisma/seeds/health-training-ue14-biologie-cellulaire-organisation-methodes-etude-cellule.seed";

export const description =
  "Ajoute les sections, questions et quiz du chapitre 1 de biologie cellulaire de l'UE14 Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTeachingElements(prisma);
  await seedHealthCellularBiologyChapters(prisma);
  await seedHealthTrainingUe14BiologieCellulaireOrganisationMethodesEtudeCellule(prisma);
}
