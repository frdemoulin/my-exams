import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C08_QUESTIONS } from "../authoring/health-colle-ue14-c08-biochimie-acides-amines-et-proteines.author.seed";
import { seedHealthColleUE14 } from "./seed-health-colle-ue14";

export async function seedHealthColleUE14C08(prisma: PrismaClient) {
  return seedHealthColleUE14(prisma, {
    code: "C08", title: "Biochimie — Acides aminés et protéines", description: "Biochimie · Acides aminés et protéines + acquis antérieurs",
    durationSeconds: 2250, order: 8,
    sections: [
    { title: "Biochimie — Acides aminés et protéines", teachingElementKey: "BIOCHIMIE", questions: UE14_COLLE_C08_QUESTIONS }
    ],
  });
}
