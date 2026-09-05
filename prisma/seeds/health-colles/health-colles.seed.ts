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

const collesSeeders = [
  seedHealthColleUE14C01,
  seedHealthColleUE14C02,
  seedHealthColleUE14C03,
  seedHealthColleUE14C04,
  seedHealthColleUE14C05,
  seedHealthColleUE14C06,
  seedHealthColleUE14C07,
  seedHealthColleUE14C08,
  seedHealthColleUE14C09,
  seedHealthColleUE14C10,
  seedHealthColleUE14C11,
  seedHealthColleUE14C12,
];

export async function seedHealthColles(prisma: PrismaClient, programVersionSlug?: string) {
  const versions = programVersionSlug
    ? [programVersionSlug]
    : ["las-2025-2026", "las-sps-2026-2027"];

  for (const version of versions) {
    console.log(`Seeding des colles Santé (UE14) pour ${version}...`);
    for (const seeder of collesSeeders) {
      await seeder(prisma, version);
    }
    console.log(`Seeding des colles Santé (UE14) pour ${version} terminé.`);
  }
}
