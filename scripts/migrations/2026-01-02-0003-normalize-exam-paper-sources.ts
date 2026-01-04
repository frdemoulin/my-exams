import type { PrismaClient } from "@prisma/client";

export const description =
  "Normalize ExamPaper.source values and seed standard sources.";

const SOURCE_MAP = [
  { legacy: "OFFICIEL", label: "Officiel" },
  { legacy: "APMEP", label: "APMEP" },
  { legacy: "LABOLYCEE", label: "LaboLycée" },
  { legacy: "AUTRE", label: "Autre" },
];

export async function up(prisma: PrismaClient) {
  for (const { label } of SOURCE_MAP) {
    await prisma.correctionSource.upsert({
      where: { label },
      update: {},
      create: { label, isActive: true },
    });
  }

  const updates = await Promise.all(
    SOURCE_MAP.map(({ legacy, label }) =>
      prisma.examPaper.updateMany({
        where: { source: legacy },
        data: { source: label },
      })
    )
  );

  const emptyUpdate = await prisma.examPaper.updateMany({
    where: { source: "" },
    data: { source: "Officiel" },
  });

  console.log("ExamPaper source normalization:", {
    renamed: updates.reduce((sum, result) => sum + result.count, 0),
    emptyToOfficiel: emptyUpdate.count,
  });
}
