import type { PrismaClient } from "@prisma/client";

export const description =
  "Renomme le groupe d'affichage UE14 Chimie générale / atomistique en Chimie générale.";

export async function up(prisma: PrismaClient) {
  await prisma.chapterAssignment.updateMany({
    where: {
      OR: [
        { displayGroupKey: "chimie-generale-atomistique" },
        { displayGroupLabel: "Chimie générale / atomistique" },
      ],
    },
    data: {
      displayGroupLabel: "Chimie générale",
    },
  });
}
