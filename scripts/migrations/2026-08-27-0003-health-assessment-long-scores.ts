import type { PrismaClient } from "@prisma/client";

export const description =
  "Convertir les scores BSON Long restants des colles/examens blancs vers Double après restauration de la migration 0001.";

async function convertLongScoreFieldToDouble(
  prisma: PrismaClient,
  collection: "UserHealthMockExamAttempt" | "UserHealthMockExamAttemptSectionResult",
) {
  await prisma.$runCommandRaw({
    update: collection,
    updates: [
      {
        q: {
          score: {
            $type: "long",
          },
        },
        u: [
          {
            $set: {
              score: {
                $toDouble: "$score",
              },
            },
          },
        ],
        multi: true,
      },
    ],
  });
}

export async function up(prisma: PrismaClient) {
  await convertLongScoreFieldToDouble(prisma, "UserHealthMockExamAttempt");
  await convertLongScoreFieldToDouble(
    prisma,
    "UserHealthMockExamAttemptSectionResult",
  );
}
