import type { PrismaClient } from "@prisma/client";

export const description =
  "Backfill empty themeIds arrays on HealthMockExamQuestion before Theme relations are activated.";

export async function up(prisma: PrismaClient) {
  await prisma.$runCommandRaw({
    update: "HealthMockExamQuestion",
    updates: [
      {
        q: {
          $or: [
            { themeIds: { $exists: false } },
            { themeIds: null },
          ],
        },
        u: {
          $set: {
            themeIds: [],
          },
        },
        multi: true,
      },
    ],
  });
}
