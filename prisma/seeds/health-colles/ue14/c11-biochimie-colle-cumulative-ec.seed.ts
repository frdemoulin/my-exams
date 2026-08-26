import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C11_QUESTIONS } from "../authoring/health-colle-ue14-c11-biochimie-colle-cumulative-ec.author.seed";
import { seedHealthColleUE14 } from "./seed-health-colle-ue14";

export async function seedHealthColleUE14C11(prisma: PrismaClient) {
  return seedHealthColleUE14(prisma, {
    code: "C11", title: "Biochimie — Colle cumulative EC", description: "Toute la Biochimie · cumulative",
    durationSeconds: 2700, order: 11,
    sections: [
    { title: "Biochimie — Colle cumulative EC", teachingElementKey: "BIOCHIMIE", questions: UE14_COLLE_C11_QUESTIONS }
    ],
  });
}
