import type { PrismaClient } from "@prisma/client";

import { seedHealth } from "../../prisma/seeds/health.seed";
import { seedHealthCourseUnits } from "../../prisma/seeds/health-course-units.seed";
import { seedHealthTeachingElements } from "../../prisma/seeds/health-teaching-elements.seed";
import { seedHealthChapters } from "../../prisma/seeds/health-chapters.seed";

export const description =
  "Ajoute les EC santé Reims UE14 et les chapitres de chimie avec groupes d'affichage.";

export async function up(prisma: PrismaClient) {
  await seedHealth(prisma);
  await seedHealthCourseUnits(prisma);
  await seedHealthTeachingElements(prisma);
  await seedHealthChapters(prisma);
}
