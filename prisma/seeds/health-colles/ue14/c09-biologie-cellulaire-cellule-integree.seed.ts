import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C09_QUESTIONS } from "../authoring/health-colle-ue14-c09-biologie-cellulaire-cellule-integree.author.seed";
import { seedHealthColleUE14 } from "./seed-health-colle-ue14";

export async function seedHealthColleUE14C09(prisma: PrismaClient) {
  return seedHealthColleUE14(prisma, {
    code: "C09", title: "Biologie cellulaire — Cellule intégrée", description: "Biologie cellulaire · Ch. 7 à 9 + rappels Ch. 1 à 6",
    durationSeconds: 2250, order: 9,
    sections: [
    { title: "Biologie cellulaire — Cellule intégrée", teachingElementKey: "BIOLOGIE_CELLULAIRE", questions: UE14_COLLE_C09_QUESTIONS }
    ],
  });
}
