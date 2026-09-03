import type { PrismaClient } from "@prisma/client";
import { seedHealthColleUE14C01 } from "./ue14/c01-chimie-fondamentaux.seed";
import { seedHealthColleUE14C02 } from "./ue14/c02-biochimie-glucides.seed";
import { seedHealthColleUE14C03 } from "./ue14/c03-biologie-cellulaire-architecture-cellulaire.seed";
import { seedHealthColleUE14C04 } from "./ue14/c04-chimie-des-atomes-aux-molecules-organiques.seed";
import { seedHealthColleUE14C05 } from "./ue14/c05-biochimie-lipides.seed";
import { seedHealthColleUE14C06 } from "./ue14/c06-biologie-cellulaire-trafic-et-compartiments.seed";
import { seedHealthColleUE14C07 } from "./ue14/c07-chimie-fonctions-et-reactivite.seed";
import { seedHealthColleUE14C08 } from "./ue14/c08-biochimie-acides-amines-et-proteines.seed";
import { seedHealthColleUE14C09 } from "./ue14/c09-biologie-cellulaire-cellule-integree.seed";
import { seedHealthColleUE14C10 } from "./ue14/c10-chimie-colle-cumulative-ec.seed";
import { seedHealthColleUE14C11 } from "./ue14/c11-biochimie-colle-cumulative-ec.seed";
import { seedHealthColleUE14C12 } from "./ue14/c12-grande-colle-ue14.seed";

export async function seedHealthColles(prisma: PrismaClient) {
  console.log("Seeding des colles Santé (UE14)...");
  await seedHealthColleUE14C01(prisma);
  await seedHealthColleUE14C02(prisma);
  await seedHealthColleUE14C03(prisma);
  await seedHealthColleUE14C04(prisma);
  await seedHealthColleUE14C05(prisma);
  await seedHealthColleUE14C06(prisma);
  await seedHealthColleUE14C07(prisma);
  await seedHealthColleUE14C08(prisma);
  await seedHealthColleUE14C09(prisma);
  await seedHealthColleUE14C10(prisma);
  await seedHealthColleUE14C11(prisma);
  await seedHealthColleUE14C12(prisma);
  console.log("Seeding des colles Santé (UE14) terminé.");
}
