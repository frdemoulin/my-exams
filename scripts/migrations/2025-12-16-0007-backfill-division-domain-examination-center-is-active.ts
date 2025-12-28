import type { PrismaClient } from "@prisma/client";

export const description =
  "Backfill Division/Domain/ExaminationCenter.isActive (missing or null -> true).";

export async function up(prisma: PrismaClient) {
  const divisionResult = await prisma.$runCommandRaw({
    update: "Division",
    updates: [
      {
        q: {
          $or: [{ isActive: { $exists: false } }, { isActive: null }],
        },
        u: { $set: { isActive: true } },
        multi: true,
      },
    ],
  });

  console.log("Division isActive backfill:", divisionResult);

  const domainResult = await prisma.$runCommandRaw({
    update: "Domain",
    updates: [
      {
        q: {
          $or: [{ isActive: { $exists: false } }, { isActive: null }],
        },
        u: { $set: { isActive: true } },
        multi: true,
      },
    ],
  });

  console.log("Domain isActive backfill:", domainResult);

  const examinationCenterResult = await prisma.$runCommandRaw({
    update: "ExaminationCenter",
    updates: [
      {
        q: {
          $or: [{ isActive: { $exists: false } }, { isActive: null }],
        },
        u: { $set: { isActive: true } },
        multi: true,
      },
    ],
  });

  console.log("ExaminationCenter isActive backfill:", examinationCenterResult);
}
