import type { Prisma, PrismaClient } from "@prisma/client";

export const description =
  "Backfill Theme title/shortTitle and domain/chapter relations after Theme simplification.";

type RawThemeDoc = {
  _id?: Prisma.InputJsonValue;
  title?: unknown;
  shortTitle?: unknown;
  longDescription?: unknown;
  shortDescription?: unknown;
  domainId?: unknown;
  domainIds?: unknown;
  chapterIds?: unknown;
};

type RawDomainDoc = {
  _id?: Prisma.InputJsonValue;
  themeIds?: unknown;
};

type RawChapterDoc = {
  _id?: Prisma.InputJsonValue;
  themeIds?: unknown;
};

function normalizeObjectId(value: unknown): string | null {
  if (typeof value === "string") return value;
  if (!value || typeof value !== "object") return null;
  const record = value as {
    $oid?: string;
    toHexString?: () => string;
    toString?: () => string;
  };
  if (record.$oid) return record.$oid;
  if (typeof record.toHexString === "function") return record.toHexString();
  if (typeof record.toString === "function") return record.toString();
  return null;
}

function extractFirstBatch<T>(raw: unknown): T[] {
  if (!raw || typeof raw !== "object") return [];
  const record = raw as { cursor?: { firstBatch?: T[] } };
  return Array.isArray(record.cursor?.firstBatch) ? record.cursor.firstBatch : [];
}

function normalizeText(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const normalized = value.trim();
  return normalized.length > 0 ? normalized : null;
}

function extractObjectIdStrings(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  const uniqueIds = new Set<string>();
  for (const entry of value) {
    const id = normalizeObjectId(entry);
    if (id) uniqueIds.add(id);
  }

  return [...uniqueIds];
}

function sortIds(ids: string[]) {
  return [...ids].sort((left, right) => left.localeCompare(right));
}

function arraysEqual(left: string[], right: string[]) {
  if (left.length !== right.length) return false;
  return left.every((value, index) => value === right[index]);
}

function addToMultiMap(map: Map<string, Set<string>>, key: string, value: string) {
  const existing = map.get(key);
  if (existing) {
    existing.add(value);
    return;
  }

  map.set(key, new Set([value]));
}

function uniqueIds(values: Array<string | null | undefined>) {
  const ids = new Set<string>();
  for (const value of values) {
    if (value) ids.add(value);
  }
  return [...ids];
}

export async function up(prisma: PrismaClient) {
  const [rawDomains, rawChapters, rawThemes] = await Promise.all([
    prisma.$runCommandRaw({
      find: "Domain",
      filter: {},
      projection: { themeIds: 1 },
    }),
    prisma.$runCommandRaw({
      find: "Chapter",
      filter: {},
      projection: { themeIds: 1 },
    }),
    prisma.$runCommandRaw({
      find: "Theme",
      filter: {},
      projection: {
        title: 1,
        shortTitle: 1,
        longDescription: 1,
        shortDescription: 1,
        domainId: 1,
        domainIds: 1,
        chapterIds: 1,
      },
    }),
  ]);

  const domains = extractFirstBatch<RawDomainDoc>(rawDomains);
  const chapters = extractFirstBatch<RawChapterDoc>(rawChapters);
  const themes = extractFirstBatch<RawThemeDoc>(rawThemes);

  const knownDomainIds = new Set<string>();
  const knownChapterIds = new Set<string>();
  const knownThemeIds = new Set<string>();
  const domainIdsByThemeId = new Map<string, Set<string>>();
  const chapterIdsByThemeId = new Map<string, Set<string>>();

  for (const domain of domains) {
    const domainId = normalizeObjectId(domain._id);
    if (!domainId) continue;

    knownDomainIds.add(domainId);
    for (const themeId of extractObjectIdStrings(domain.themeIds)) {
      addToMultiMap(domainIdsByThemeId, themeId, domainId);
    }
  }

  for (const chapter of chapters) {
    const chapterId = normalizeObjectId(chapter._id);
    if (!chapterId) continue;

    knownChapterIds.add(chapterId);
    for (const themeId of extractObjectIdStrings(chapter.themeIds)) {
      addToMultiMap(chapterIdsByThemeId, themeId, chapterId);
    }
  }

  for (const theme of themes) {
    const themeId = normalizeObjectId(theme._id);
    if (themeId) {
      knownThemeIds.add(themeId);
    }
  }

  const themeIdsByDomainId = new Map<string, Set<string>>();
  const themeIdsByChapterId = new Map<string, Set<string>>();

  let themesUpdated = 0;
  let titleBackfills = 0;
  let domainBackfills = 0;
  let chapterBackfills = 0;
  let themesSkipped = 0;

  for (const theme of themes) {
    const themeId = normalizeObjectId(theme._id);
    if (!themeId) {
      themesSkipped += 1;
      continue;
    }

    const currentTitle = normalizeText(theme.title);
    const currentShortTitle = normalizeText(theme.shortTitle);
    const legacyLongDescription = normalizeText(theme.longDescription);
    const legacyShortDescription = normalizeText(theme.shortDescription);
    const legacyDomainId = normalizeObjectId(theme.domainId);

    const currentDomainIds = sortIds(
      extractObjectIdStrings(theme.domainIds).filter((id) => knownDomainIds.has(id))
    );
    const currentChapterIds = sortIds(
      extractObjectIdStrings(theme.chapterIds).filter((id) => knownChapterIds.has(id))
    );

    const nextDomainIds = sortIds(
      uniqueIds([
        ...currentDomainIds,
        legacyDomainId,
        ...[...(domainIdsByThemeId.get(themeId) ?? new Set<string>())],
      ]).filter((id) => knownDomainIds.has(id))
    );
    const nextChapterIds = sortIds(
      uniqueIds([
        ...currentChapterIds,
        ...[...(chapterIdsByThemeId.get(themeId) ?? new Set<string>())],
      ]).filter((id) => knownChapterIds.has(id))
    );

    const nextTitle =
      currentTitle ?? legacyLongDescription ?? legacyShortDescription ?? `Theme ${themeId}`;
    const nextShortTitle = currentShortTitle ?? legacyShortDescription ?? null;

    for (const domainId of nextDomainIds) {
      addToMultiMap(themeIdsByDomainId, domainId, themeId);
    }
    for (const chapterId of nextChapterIds) {
      addToMultiMap(themeIdsByChapterId, chapterId, themeId);
    }

    const titleChanged = currentTitle !== nextTitle || currentShortTitle !== nextShortTitle;
    const domainChanged = !arraysEqual(currentDomainIds, nextDomainIds);
    const chapterChanged = !arraysEqual(currentChapterIds, nextChapterIds);

    if (!titleChanged && !domainChanged && !chapterChanged) {
      continue;
    }

    await prisma.theme.update({
      where: { id: themeId },
      data: {
        title: nextTitle,
        shortTitle: nextShortTitle,
        domains: {
          set: nextDomainIds.map((id) => ({ id })),
        },
        chapters: {
          set: nextChapterIds.map((id) => ({ id })),
        },
      },
    });

    themesUpdated += 1;
    if (titleChanged) titleBackfills += 1;
    if (domainChanged) domainBackfills += 1;
    if (chapterChanged) chapterBackfills += 1;
  }

  let domainsUpdated = 0;
  for (const domain of domains) {
    const domainId = normalizeObjectId(domain._id);
    if (!domainId) continue;

    const currentThemeIds = sortIds(
      extractObjectIdStrings(domain.themeIds).filter((id) => knownThemeIds.has(id))
    );
    const nextThemeIds = sortIds(
      uniqueIds([
        ...currentThemeIds,
        ...[...(themeIdsByDomainId.get(domainId) ?? new Set<string>())],
      ]).filter((id) => knownThemeIds.has(id))
    );

    if (arraysEqual(currentThemeIds, nextThemeIds)) {
      continue;
    }

    await prisma.domain.update({
      where: { id: domainId },
      data: {
        themes: {
          set: nextThemeIds.map((id) => ({ id })),
        },
      },
    });
    domainsUpdated += 1;
  }

  let chaptersUpdated = 0;
  for (const chapter of chapters) {
    const chapterId = normalizeObjectId(chapter._id);
    if (!chapterId) continue;

    const currentThemeIds = sortIds(
      extractObjectIdStrings(chapter.themeIds).filter((id) => knownThemeIds.has(id))
    );
    const nextThemeIds = sortIds(
      uniqueIds([
        ...currentThemeIds,
        ...[...(themeIdsByChapterId.get(chapterId) ?? new Set<string>())],
      ]).filter((id) => knownThemeIds.has(id))
    );

    if (arraysEqual(currentThemeIds, nextThemeIds)) {
      continue;
    }

    await prisma.chapter.update({
      where: { id: chapterId },
      data: {
        themes: {
          set: nextThemeIds.map((id) => ({ id })),
        },
      },
    });
    chaptersUpdated += 1;
  }

  console.log("Theme simplification backfill:", {
    scannedThemes: themes.length,
    themesUpdated,
    titleBackfills,
    domainBackfills,
    chapterBackfills,
    domainsUpdated,
    chaptersUpdated,
    themesSkipped,
  });
}