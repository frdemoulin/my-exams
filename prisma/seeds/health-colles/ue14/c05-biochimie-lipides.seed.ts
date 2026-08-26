import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C05_QUESTIONS } from "../authoring/health-colle-ue14-c05-biochimie-lipides.author.seed";
import { seedHealthColleUE14 } from "./seed-health-colle-ue14";

export async function seedHealthColleUE14C05(prisma: PrismaClient) {
  return seedHealthColleUE14(prisma, {
    code: "C05", title: "Biochimie — Lipides", description: "Biochimie · Lipides + rappels glucides",
    durationSeconds: 2250, order: 5,
    sections: [
    { title: "Biochimie — Lipides", teachingElementKey: "BIOCHIMIE", questions: UE14_COLLE_C05_QUESTIONS }
    ],
  });
}
