import type { PrismaClient } from "@prisma/client";

export type ThemeIdsByQuestionStableId = Record<string, string[]>;
export type ThemeTitlesByQuestionStableId = Record<string, string[]>;

export type ThemeMappingCoverageMode = "partial" | "empty-or-complete";

function normalizeStableId(value: string) {
  return value.trim().toLowerCase();
}

function normalizeThemeReference(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isObjectId(value: string) {
  return /^[0-9a-f]{24}$/i.test(value);
}

function countMappingEntries(
  mappings: Array<Record<string, string[]> | undefined>
) {
  return mappings.reduce(
    (total, mapping) => total + Object.keys(mapping ?? {}).length,
    0
  );
}

export async function resolveThemeIdsByQuestionStableId(input: {
  prisma: PrismaClient;
  themeIdsByQuestionStableId?: ThemeIdsByQuestionStableId;
  themeTitlesByQuestionStableId?: ThemeTitlesByQuestionStableId;
  stableIds: readonly string[];
  contextLabel: string;
  coverageMode?: ThemeMappingCoverageMode;
  maxThemesPerQuestion?: number;
}) {
  const {
    prisma,
    themeIdsByQuestionStableId,
    themeTitlesByQuestionStableId,
    stableIds,
    contextLabel,
    coverageMode = "partial",
    maxThemesPerQuestion = 2,
  } = input;
  const allowedStableIds = new Set(stableIds.map(normalizeStableId));
  const themeIdsByStableId = new Map<string, string[]>();
  const themeTitlesByStableId = new Map<string, string[]>();
  const requestedThemeIds = new Set<string>();
  const requestedThemeTitles = new Set<string>();
  const mappingEntryCount = countMappingEntries([
    themeIdsByQuestionStableId,
    themeTitlesByQuestionStableId,
  ]);

  const collectMapping = (
    mapping: Record<string, string[]> | undefined,
    target: Map<string, string[]>,
    requestedReferences: Set<string>,
    referenceLabel: string
  ) => {
    for (const [rawStableId, rawThemeReferences] of Object.entries(mapping ?? {})) {
      const stableId = normalizeStableId(rawStableId);
      if (!stableId) {
        throw new Error(`Question stable ID vide dans ${contextLabel}.`);
      }
      if (!allowedStableIds.has(stableId)) {
        throw new Error(
          `Question stable ID inconnue pour ${contextLabel} : ${rawStableId}.`
        );
      }
      if (target.has(stableId)) {
        throw new Error(
          `Question stable ID dupliquée pour ${contextLabel} : ${rawStableId}.`
        );
      }
      if (!Array.isArray(rawThemeReferences)) {
        throw new Error(
          `Le mapping de thèmes doit être un tableau pour ${rawStableId} dans ${contextLabel}.`
        );
      }

      const themeReferences = Array.from(
        new Set(
          rawThemeReferences
            .map(normalizeThemeReference)
            .filter((value) => value.length > 0)
        )
      );

      if (mappingEntryCount > 0 && themeReferences.length === 0) {
        throw new Error(
          `Aucun ${referenceLabel} fourni pour ${rawStableId} dans ${contextLabel}.`
        );
      }
      if (themeReferences.length > maxThemesPerQuestion) {
        throw new Error(
          `Trop de thèmes pour ${rawStableId} dans ${contextLabel} : ${themeReferences.length} > ${maxThemesPerQuestion}.`
        );
      }

      themeReferences.forEach((themeReference) =>
        requestedReferences.add(themeReference)
      );
      target.set(stableId, themeReferences);
    }
  };

  collectMapping(
    themeIdsByQuestionStableId,
    themeIdsByStableId,
    requestedThemeIds,
    "Theme.id"
  );
  collectMapping(
    themeTitlesByQuestionStableId,
    themeTitlesByStableId,
    requestedThemeTitles,
    "Theme.title"
  );

  if (coverageMode === "empty-or-complete" && mappingEntryCount > 0) {
    const mappedStableIds = new Set([
      ...themeIdsByStableId.keys(),
      ...themeTitlesByStableId.keys(),
    ]);
    const missingStableIds = [...allowedStableIds].filter(
      (stableId) => !mappedStableIds.has(stableId)
    );

    if (missingStableIds.length > 0) {
      throw new Error(
        `Mapping de thèmes incomplet pour ${contextLabel} : ${missingStableIds.length} question(s) sans thème (${missingStableIds
          .slice(0, 20)
          .join(", ")}${missingStableIds.length > 20 ? ", ..." : ""}).`
      );
    }
  }

  if (requestedThemeIds.size === 0 && requestedThemeTitles.size === 0) {
    return new Map<string, string[]>();
  }

  const invalidThemeIds = [...requestedThemeIds].filter(
    (themeId) => !isObjectId(themeId)
  );
  if (invalidThemeIds.length > 0) {
    throw new Error(
      `Theme IDs invalides pour ${contextLabel} : ${invalidThemeIds.join(", ")}.`
    );
  }

  const knownThemesById =
    requestedThemeIds.size > 0
      ? await prisma.theme.findMany({
          where: {
            id: {
              in: [...requestedThemeIds],
            },
          },
          select: { id: true },
        })
      : [];
  const knownThemeIds = new Set(knownThemesById.map((theme) => theme.id));
  const unknownThemeIds = [...requestedThemeIds].filter(
    (themeId) => !knownThemeIds.has(themeId)
  );

  if (unknownThemeIds.length > 0) {
    throw new Error(
      `Theme IDs introuvables pour ${contextLabel} : ${unknownThemeIds.join(", ")}.`
    );
  }

  const themeTitleIdByTitle = new Map<string, string>();

  if (requestedThemeTitles.size > 0) {
    const knownThemesByTitle = await prisma.theme.findMany({
      where: {
        title: {
          in: [...requestedThemeTitles],
        },
      },
      select: { id: true, title: true },
    });
    const themesByTitle = new Map<string, typeof knownThemesByTitle>();

    for (const theme of knownThemesByTitle) {
      themesByTitle.set(theme.title, [
        ...(themesByTitle.get(theme.title) ?? []),
        theme,
      ]);
    }

    const unknownThemeTitles = [...requestedThemeTitles].filter(
      (title) => !themesByTitle.has(title)
    );
    if (unknownThemeTitles.length > 0) {
      throw new Error(
        `Theme.title introuvables pour ${contextLabel} : ${unknownThemeTitles.join(", ")}.`
      );
    }

    const ambiguousThemeTitles = [...themesByTitle.entries()].filter(
      ([title, themes]) => requestedThemeTitles.has(title) && themes.length > 1
    );
    if (ambiguousThemeTitles.length > 0) {
      throw new Error(
        `Theme.title ambigus pour ${contextLabel} : ${ambiguousThemeTitles
          .map(([title, themes]) => `${title} (${themes.length})`)
          .join(", ")}.`
      );
    }

    for (const [title, themes] of themesByTitle.entries()) {
      if (themes.length === 1) {
        themeTitleIdByTitle.set(title, themes[0].id);
      }
    }
  }

  const resolvedEntries = new Map<string, string[]>();

  for (const stableId of new Set([
    ...themeIdsByStableId.keys(),
    ...themeTitlesByStableId.keys(),
  ])) {
    const resolvedThemeIds = [
      ...(themeIdsByStableId.get(stableId) ?? []),
      ...(themeTitlesByStableId.get(stableId) ?? []).map((title) =>
        themeTitleIdByTitle.get(title)
      ),
    ].filter((themeId): themeId is string => Boolean(themeId));
    const uniqueResolvedThemeIds = Array.from(new Set(resolvedThemeIds));

    if (uniqueResolvedThemeIds.length > maxThemesPerQuestion) {
      throw new Error(
        `Trop de thèmes résolus pour ${stableId} dans ${contextLabel} : ${uniqueResolvedThemeIds.length} > ${maxThemesPerQuestion}.`
      );
    }

    resolvedEntries.set(stableId, uniqueResolvedThemeIds);
  }

  return resolvedEntries;
}
