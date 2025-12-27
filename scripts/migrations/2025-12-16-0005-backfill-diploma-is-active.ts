import type { PrismaClient } from "@prisma/client";

export const description =
  "Backfill Diploma.isActive for existing records (missing or null -> true).";

export async function up(prisma: PrismaClient) {
  const result = await prisma.$runCommandRaw({
    update: "Diploma",
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

  console.log("Diploma isActive backfill:", result);
}
