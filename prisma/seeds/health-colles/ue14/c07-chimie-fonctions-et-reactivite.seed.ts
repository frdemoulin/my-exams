import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C07_QUESTIONS } from "../authoring/health-colle-ue14-c07-chimie-fonctions-et-reactivite.author.seed";
import { seedHealthColleUE14 } from "./seed-health-colle-ue14";

export async function seedHealthColleUE14C07(prisma: PrismaClient) {
  return seedHealthColleUE14(prisma, {
    code: "C07", title: "Chimie — Fonctions et réactivité", description: "Chimie générale + Chimie organique",
    durationSeconds: 2250, order: 7,
    sections: [
    { title: "Chimie — Fonctions et réactivité", teachingElementKey: "CHIMIE", questions: UE14_COLLE_C07_QUESTIONS }
    ],
  });
}
