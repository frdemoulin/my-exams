import type { PrismaClient } from "@prisma/client";
import { seedHealthColleUE14 } from "./ue14/seed-health-colle-ue14";
import { UE14_HEALTH_COLLE_SEEDS } from "./ue14/health-colle-ue14.catalog";

export async function seedHealthColles(prisma: PrismaClient) {
  console.log("Seeding des colles Santé (UE14)...");
  for (const colleSeed of UE14_HEALTH_COLLE_SEEDS) {
    const colle = await seedHealthColleUE14(prisma, colleSeed);
    console.log(`Colle ${colleSeed.code} « ${colle.title} » seedée.`);
  }
}
