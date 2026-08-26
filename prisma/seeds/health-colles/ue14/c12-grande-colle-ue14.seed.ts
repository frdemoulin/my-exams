import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C12_QUESTIONS } from "../authoring/health-colle-ue14-c12-grande-colle-ue14.author.seed";
import { seedHealthColleUE14 } from "./seed-health-colle-ue14";

export async function seedHealthColleUE14C12(prisma: PrismaClient) {
  return seedHealthColleUE14(prisma, {
    code: "C12", title: "Grande colle UE14", description: "3 EC · Chimie + Biochimie + Biologie cellulaire",
    durationSeconds: 4500, order: 12,
    sections: [
    { title: "Chimie", teachingElementKey: "CHIMIE", questions: UE14_COLLE_C12_QUESTIONS.slice(0, 16) },
    { title: "Biochimie", teachingElementKey: "BIOCHIMIE", questions: UE14_COLLE_C12_QUESTIONS.slice(16, 33) },
    { title: "Biologie cellulaire", teachingElementKey: "BIOLOGIE_CELLULAIRE", questions: UE14_COLLE_C12_QUESTIONS.slice(33, 50) }
    ],
  });
}
