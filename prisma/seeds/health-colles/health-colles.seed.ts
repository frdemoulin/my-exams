import type { PrismaClient } from "@prisma/client";
import { seedHealthColleUE14C01 } from "./ue14/c01-chimie-fondamentaux.seed";

export async function seedHealthColles(prisma: PrismaClient) {
  console.log("Seeding des colles Santé (UE14)...");
  const c01 = await seedHealthColleUE14C01(prisma);
  console.log(`Colle C01 « ${c01.title} » (id: ${c01.id}) seedée avec succès.`);
}
