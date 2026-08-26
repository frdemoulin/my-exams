import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C06_QUESTIONS } from "../authoring/health-colle-ue14-c06-biologie-cellulaire-trafic-et-compartiments.author.seed";
import { seedHealthColleUE14 } from "./seed-health-colle-ue14";

export async function seedHealthColleUE14C06(prisma: PrismaClient) {
  return seedHealthColleUE14(prisma, {
    code: "C06", title: "Biologie cellulaire — Trafic et compartiments", description: "Biologie cellulaire · Ch. 4 à 6 + rappels",
    durationSeconds: 1800, order: 6,
    sections: [
    { title: "Biologie cellulaire — Trafic et compartiments", teachingElementKey: "BIOLOGIE_CELLULAIRE", questions: UE14_COLLE_C06_QUESTIONS }
    ],
  });
}
