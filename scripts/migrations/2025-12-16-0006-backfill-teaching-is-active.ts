import type { PrismaClient } from "@prisma/client";

export const description =
  "Backfill Teaching.isActive for existing records (missing or null -> true).";

export async function up(prisma: PrismaClient) {
  const result = await prisma.$runCommandRaw({
    update: "Teaching",
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

  console.log("Teaching isActive backfill:", result);
}
