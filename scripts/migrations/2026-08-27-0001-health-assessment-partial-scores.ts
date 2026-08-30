import type { PrismaClient } from "@prisma/client";

export const description =
  "Convertir les scores existants des colles/examens blancs de BSON Int vers Double avant l'activation des notes partielles UNESS.";

async function convertScoreFieldToDouble(
  prisma: PrismaClient,
  collection: "UserHealthMockExamAttempt" | "UserHealthMockExamAttemptSectionResult",
) {
  await prisma.$runCommandRaw({
    update: collection,
    updates: [
      {
        q: {
          score: {
            $type: "int",
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
  await convertScoreFieldToDouble(prisma, "UserHealthMockExamAttempt");
  await convertScoreFieldToDouble(
    prisma,
    "UserHealthMockExamAttemptSectionResult",
  );
}
