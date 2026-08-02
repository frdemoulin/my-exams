import type { PrismaClient } from "@prisma/client";

import { seedHealthBiochemistryChapters } from "../../prisma/seeds/health-chapters.seed";
import { seedHealthTeachingElements } from "../../prisma/seeds/health-teaching-elements.seed";

export const description =
  "Ajoute les chapitres de biochimie de l'UE14 Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTeachingElements(prisma);
  await seedHealthBiochemistryChapters(prisma);
}
