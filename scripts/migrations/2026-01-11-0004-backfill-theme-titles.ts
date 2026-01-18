import type { PrismaClient } from "@prisma/client";

export const description = "Backfill Theme.title/shortTitle and ensure shortDescription is set.";

export async function up(prisma: PrismaClient) {
  await prisma.$runCommandRaw({
    update: "Theme",
    updates: [
      {
        q: {
          $or: [{ title: { $exists: false } }, { title: null }],
        },
        u: [
          {
            $set: {
              title: { $ifNull: ["$shortDescription", "$longDescription"] },
              shortDescription: {
                $ifNull: ["$shortDescription", "$longDescription"],
              },
            },
          },
        ],
        multi: true,
      },
    ],
  });

  const themes = await prisma.theme.findMany({
    select: {
      id: true,
      title: true,
      shortTitle: true,
      longDescription: true,
      shortDescription: true,
    },
  });

  let updated = 0;

  for (const theme of themes) {
    const nextTitle =
      theme.title?.trim() ||
      theme.shortDescription?.trim() ||
      theme.longDescription?.trim() ||
      null;
    const nextShortTitle =
      theme.shortTitle?.trim() || null;
    const nextShortDescription =
      theme.shortDescription?.trim() || theme.longDescription.trim();

    if (!nextTitle) {
      console.warn(`Theme ${theme.id} skipped: no title candidates.`);
      continue;
    }

    const needsUpdate =
      theme.title !== nextTitle ||
      theme.shortTitle !== nextShortTitle ||
      theme.shortDescription !== nextShortDescription;

    if (!needsUpdate) continue;

    await prisma.theme.update({
      where: { id: theme.id },
      data: {
        title: nextTitle,
        shortTitle: nextShortTitle,
        shortDescription: nextShortDescription,
      },
    });
    updated += 1;
  }

  console.log("Theme title backfill:", { updated, total: themes.length });
}
