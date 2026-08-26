import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C02_QUESTIONS } from "../authoring/health-colle-ue14-c02-biochimie-glucides.author.seed";
import { seedHealthColleUE14 } from "./seed-health-colle-ue14";

export async function seedHealthColleUE14C02(prisma: PrismaClient) {
  return seedHealthColleUE14(prisma, {
    code: "C02", title: "Biochimie — Glucides", description: "Biochimie · Ch. 1 à 3",
    durationSeconds: 1800, order: 2,
    sections: [
    { title: "Biochimie — Glucides", teachingElementKey: "BIOCHIMIE", questions: UE14_COLLE_C02_QUESTIONS }
    ],
  });
}
