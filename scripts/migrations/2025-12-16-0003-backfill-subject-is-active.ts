import type { PrismaClient } from "@prisma/client";

export const description =
  "Backfill Subject.isActive for existing records (missing or null -> true).";

export async function up(prisma: PrismaClient) {
  const result = await prisma.$runCommandRaw({
    update: "Subject",
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

  console.log("Subject isActive backfill:", result);
}
