import type { PrismaClient } from "@prisma/client";

export type ThemeIdsByQuestionStableId = Record<string, string[]>;

function normalizeStableId(value: string) {
  return value.trim().toLowerCase();
}

export async function resolveThemeIdsByQuestionStableId(input: {
  prisma: PrismaClient;
  themeIdsByQuestionStableId?: ThemeIdsByQuestionStableId;
  stableIds: readonly string[];
  contextLabel: string;
}) {
  const { prisma, themeIdsByQuestionStableId, stableIds, contextLabel } = input;
  const allowedStableIds = new Set(stableIds.map(normalizeStableId));
  const resolvedEntries = new Map<string, string[]>();
  const requestedThemeIds = new Set<string>();

  for (const [rawStableId, rawThemeIds] of Object.entries(
    themeIdsByQuestionStableId ?? {}
  )) {
    const stableId = normalizeStableId(rawStableId);
    if (!stableId) {
      throw new Error(`Question stable ID vide dans ${contextLabel}.`);
    }
    if (!allowedStableIds.has(stableId)) {
      throw new Error(
        `Question stable ID inconnue pour ${contextLabel} : ${rawStableId}.`
      );
    }
    if (!Array.isArray(rawThemeIds)) {
      throw new Error(
        `Le mapping de thèmes doit être un tableau pour ${rawStableId} dans ${contextLabel}.`
      );
    }

    const themeIds = Array.from(
      new Set(
        rawThemeIds
          .filter((value): value is string => typeof value === "string")
          .map((value) => value.trim())
          .filter((value) => value.length > 0)
      )
    );

    themeIds.forEach((themeId) => requestedThemeIds.add(themeId));
    resolvedEntries.set(stableId, themeIds);
  }

  if (requestedThemeIds.size === 0) {
    return resolvedEntries;
  }

  const knownThemes = await prisma.theme.findMany({
    where: {
      id: {
        in: [...requestedThemeIds],
      },
    },
    select: { id: true },
  });
  const knownThemeIds = new Set(knownThemes.map((theme) => theme.id));
  const unknownThemeIds = [...requestedThemeIds].filter(
    (themeId) => !knownThemeIds.has(themeId)
  );

  if (unknownThemeIds.length > 0) {
    throw new Error(
      `Theme IDs introuvables pour ${contextLabel} : ${unknownThemeIds.join(", ")}.`
    );
  }

  return resolvedEntries;
}
