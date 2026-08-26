import type { PrismaClient } from "@prisma/client";
import { UE14_COLLE_C04_QUESTIONS } from "../authoring/health-colle-ue14-c04-chimie-des-atomes-aux-molecules-organiques.author.seed";
import { seedHealthColleUE14 } from "./seed-health-colle-ue14";

export async function seedHealthColleUE14C04(prisma: PrismaClient) {
  return seedHealthColleUE14(prisma, {
    code: "C04", title: "Chimie — Des atomes aux molécules organiques", description: "Chimie générale + Chimie organique 2.1 à 2.3",
    durationSeconds: 2250, order: 4,
    sections: [
    { title: "Chimie — Des atomes aux molécules organiques", teachingElementKey: "CHIMIE", questions: UE14_COLLE_C04_QUESTIONS }
    ],
  });
}
