import assert from "node:assert/strict";
import test from "node:test";

import { UE14_HEALTH_COLLE_SEEDS } from "../../prisma/seeds/health-colles/ue14/health-colle-ue14.catalog";
import {
  UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID,
  UE14_COLLE_THEME_TITLES_BY_QUESTION_STABLE_ID,
} from "../../prisma/seeds/health-colles/ue14/health-colle-ue14-theme-mapping";

const EXPECTED_QUESTION_COUNTS_BY_COLLE = {
  C01: 20,
  C02: 20,
  C03: 20,
  C04: 25,
  C05: 25,
  C06: 20,
  C07: 25,
  C08: 25,
  C09: 25,
  C10: 30,
  C11: 30,
  C12: 50,
} as const;

const EXPECTED_TOTAL_QUESTION_COUNT = 315;
const MAX_THEMES_PER_QUESTION = 2;
const EXPECTED_ONE_THEME_QUESTION_COUNT = 250;
const EXPECTED_TWO_THEME_QUESTION_COUNT = 65;
const OBJECT_ID_PATTERN = /^[0-9a-f]{24}$/i;

function normalizeStableId(value: string) {
  return value.trim().toLowerCase();
}

function normalizeThemeReference(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function buildExpectedStableIds() {
  return UE14_HEALTH_COLLE_SEEDS.flatMap((seed) => {
    let globalOrder = 0;

    return seed.sections.flatMap((section) =>
      section.questions.map(() => {
        globalOrder += 1;
        return `${seed.code.toLowerCase()}-q${String(globalOrder).padStart(2, "0")}`;
      })
    );
  });
}

function collectMappingEntries(mapping: Record<string, readonly string[]>) {
  return Object.entries(mapping).map(([stableId, themeRefs]) => ({
    stableId,
    normalizedStableId: normalizeStableId(stableId),
    themeRefs: Array.from(new Set(themeRefs.map(normalizeThemeReference))).filter(
      (themeRef) => themeRef.length > 0
    ),
  }));
}

test("les colles UE14 C01-C12 exposent exactement 315 questions stables", () => {
  const actualCounts = Object.fromEntries(
    UE14_HEALTH_COLLE_SEEDS.map((seed) => [
      seed.code,
      seed.sections.reduce(
        (total, section) => total + section.questions.length,
        0
      ),
    ])
  );

  assert.deepEqual(actualCounts, EXPECTED_QUESTION_COUNTS_BY_COLLE);
  assert.equal(buildExpectedStableIds().length, EXPECTED_TOTAL_QUESTION_COUNT);
});

test("le mapping Theme C01-C12 couvre exactement 315/315 questions avec la distribution attendue", () => {
  const expectedStableIds = buildExpectedStableIds();
  const expectedStableIdSet = new Set(expectedStableIds);
  const idEntries = collectMappingEntries(
    UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID
  );
  const titleEntries = collectMappingEntries(
    UE14_COLLE_THEME_TITLES_BY_QUESTION_STABLE_ID
  );
  const allEntries = [...idEntries, ...titleEntries];
  const mappedStableIds = new Set(
    allEntries.map((entry) => entry.normalizedStableId)
  );
  const mappingEntryCount = allEntries.length;

  assert.equal(titleEntries.length, 0);
  assert.equal(mappingEntryCount, EXPECTED_TOTAL_QUESTION_COUNT);

  const unknownStableIds = [...mappedStableIds].filter(
    (stableId) => !expectedStableIdSet.has(stableId)
  );
  assert.deepEqual(unknownStableIds, []);

  const invalidThemeIds = idEntries.flatMap((entry) =>
    entry.themeRefs.filter((themeId) => !OBJECT_ID_PATTERN.test(themeId))
  );
  assert.deepEqual(invalidThemeIds, []);

  const missingStableIds = expectedStableIds.filter(
    (stableId) => !mappedStableIds.has(stableId)
  );
  assert.deepEqual(missingStableIds, []);
  assert.equal(mappedStableIds.size, EXPECTED_TOTAL_QUESTION_COUNT);

  const emptyThemeRefs = allEntries
    .filter((entry) => entry.themeRefs.length === 0)
    .map((entry) => entry.stableId);
  assert.deepEqual(emptyThemeRefs, []);

  const themeRefCountByStableId = new Map<string, number>();
  allEntries.forEach((entry) => {
    themeRefCountByStableId.set(
      entry.normalizedStableId,
      (themeRefCountByStableId.get(entry.normalizedStableId) ?? 0) +
        entry.themeRefs.length
    );
  });

  const overloadedStableIds = [...themeRefCountByStableId.entries()]
    .filter(([, themeRefCount]) => themeRefCount > MAX_THEMES_PER_QUESTION)
    .map(([stableId]) => stableId);
  assert.deepEqual(overloadedStableIds, []);

  const oneThemeQuestionCount = [...themeRefCountByStableId.values()].filter(
    (themeRefCount) => themeRefCount === 1
  ).length;
  const twoThemeQuestionCount = [...themeRefCountByStableId.values()].filter(
    (themeRefCount) => themeRefCount === 2
  ).length;

  assert.equal(oneThemeQuestionCount, EXPECTED_ONE_THEME_QUESTION_COUNT);
  assert.equal(twoThemeQuestionCount, EXPECTED_TWO_THEME_QUESTION_COUNT);
});
