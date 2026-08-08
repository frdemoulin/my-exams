import type { PrismaClient } from "@prisma/client";

import { seedHealthHistologyChapters } from "../../prisma/seeds/health-chapters.seed";
import { seedHealthTeachingElements } from "../../prisma/seeds/health-teaching-elements.seed";

export const description =
  "Ajoute les chapitres et sections d'histologie de l'UE13 Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTeachingElements(prisma);
  await seedHealthHistologyChapters(prisma);
}
