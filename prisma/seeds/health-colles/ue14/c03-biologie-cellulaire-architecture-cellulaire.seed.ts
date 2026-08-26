import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C03_QUESTIONS } from "../authoring/health-colle-ue14-c03-biologie-cellulaire-architecture-cellulaire.author.seed";
import { seedHealthColleUE14 } from "./seed-health-colle-ue14";

export async function seedHealthColleUE14C03(prisma: PrismaClient) {
  return seedHealthColleUE14(prisma, {
    code: "C03", title: "Biologie cellulaire — Architecture cellulaire", description: "Biologie cellulaire · Ch. 1 à 3",
    durationSeconds: 1800, order: 3,
    sections: [
    { title: "Biologie cellulaire — Architecture cellulaire", teachingElementKey: "BIOLOGIE_CELLULAIRE", questions: UE14_COLLE_C03_QUESTIONS }
    ],
  });
}
