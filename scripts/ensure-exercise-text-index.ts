import { loadProjectEnv } from './lib/load-env';

loadProjectEnv();

const { PrismaClient } = require('@prisma/client') as typeof import('@prisma/client');

const prisma = new PrismaClient();

const INDEX_NAME = 'Exercise_search_text_idx';
const EXPECTED_KEY = {
  title: 'text',
  label: 'text',
  statement: 'text',
  summary: 'text',
  keywords: 'text',
} as const;

const EXPECTED_WEIGHTS = {
  title: 10,
  label: 8,
  summary: 4,
  statement: 2,
  keywords: 6,
} as const;

type MongoIndex = {
  name: string;
  key: Record<string, unknown>;
  weights?: Record<string, number>;
  default_language?: string;
};

function normalizeKey(value: Record<string, unknown> | undefined) {
  return JSON.stringify(value ?? {}, Object.keys(value ?? {}).sort());
}

function normalizeWeights(value: Record<string, number> | undefined) {
  return JSON.stringify(value ?? {}, Object.keys(value ?? {}).sort());
}

function isExpectedIndex(index: MongoIndex) {
  return (
    normalizeKey(index.key) === normalizeKey(EXPECTED_KEY as unknown as Record<string, unknown>) &&
    normalizeWeights(index.weights) === normalizeWeights(EXPECTED_WEIGHTS)
  );
}

async function listExerciseIndexes() {
  const result = (await prisma.$runCommandRaw({
    listIndexes: 'Exercise',
    cursor: {},
  })) as { cursor?: { firstBatch?: MongoIndex[] } };

  return result.cursor?.firstBatch ?? [];
}

async function createExerciseTextIndex() {
  await prisma.$runCommandRaw({
    createIndexes: 'Exercise',
    indexes: [
      {
        key: EXPECTED_KEY,
        name: INDEX_NAME,
        weights: EXPECTED_WEIGHTS,
        default_language: 'french',
      },
    ],
  });
}

async function dropIndex(name: string) {
  await prisma.$runCommandRaw({
    dropIndexes: 'Exercise',
    index: name,
  });
}

async function main() {
  const replace = process.argv.includes('--replace');
  const indexes = await listExerciseIndexes();
  const existingByName = indexes.find((index) => index.name === INDEX_NAME);

  if (existingByName && isExpectedIndex(existingByName)) {
    console.log(
      JSON.stringify(
        {
          changed: false,
          reason: 'already-up-to-date',
          index: existingByName,
        },
        null,
        2
      )
    );
    return;
  }

  const otherTextIndexes = indexes.filter(
    (index) =>
      index.name !== '_id_' &&
      Object.values(index.key ?? {}).some((value) => value === 'text')
  );

  if (otherTextIndexes.length > 0 && !replace && !existingByName) {
    console.log(
      JSON.stringify(
        {
          changed: false,
          reason: 'existing-text-index-found',
          hint: 'Relance avec --replace pour supprimer l’index texte existant et le recréer.',
          indexes: otherTextIndexes,
        },
        null,
        2
      )
    );
    return;
  }

  if (existingByName && !isExpectedIndex(existingByName)) {
    if (!replace) {
      console.log(
        JSON.stringify(
          {
            changed: false,
            reason: 'index-name-conflict',
            hint: 'Relance avec --replace pour remplacer cet index.',
            index: existingByName,
          },
          null,
          2
        )
      );
      return;
    }

    await dropIndex(existingByName.name);
  }

  if (replace) {
    for (const index of otherTextIndexes) {
      if (index.name === existingByName?.name) continue;
      await dropIndex(index.name);
    }
  }

  await createExerciseTextIndex();

  const refreshedIndexes = await listExerciseIndexes();
  const created = refreshedIndexes.find((index) => index.name === INDEX_NAME);

  console.log(
    JSON.stringify(
      {
        changed: true,
        index: created ?? null,
      },
      null,
      2
    )
  );
}

main()
  .catch((error) => {
    console.error("Erreur lors de la création de l'index texte Exercise :", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
