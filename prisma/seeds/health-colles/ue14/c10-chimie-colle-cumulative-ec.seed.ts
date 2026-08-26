import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C10_QUESTIONS } from "../authoring/health-colle-ue14-c10-chimie-colle-cumulative-ec.author.seed";
import { seedHealthColleUE14 } from "./seed-health-colle-ue14";

export async function seedHealthColleUE14C10(prisma: PrismaClient) {
  return seedHealthColleUE14(prisma, {
    code: "C10", title: "Chimie — Colle cumulative EC", description: "Toute la Chimie · cumulative",
    durationSeconds: 2700, order: 10,
    sections: [
    { title: "Chimie — Colle cumulative EC", teachingElementKey: "CHIMIE", questions: UE14_COLLE_C10_QUESTIONS }
    ],
  });
}
