import type { PrismaClient } from "@prisma/client";

import { seedHealth } from "../../prisma/seeds/health.seed";
import { seedHealthCourseUnits } from "../../prisma/seeds/health-course-units.seed";

export const description =
    "Ajoute les blocs et UE santé Reims / Strasbourg avec traçabilité des sources tutorats.";

export async function up(prisma: PrismaClient) {
    await seedHealth(prisma);
    await seedHealthCourseUnits(prisma);
}
