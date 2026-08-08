import type { PrismaClient } from "@prisma/client";

import { seedHealthTeachingElements } from "../../prisma/seeds/health-teaching-elements.seed";

export const description =
  "Ajoute les EC Anatomie, Histologie et Physiologie à l'UE13 Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTeachingElements(prisma);
}
