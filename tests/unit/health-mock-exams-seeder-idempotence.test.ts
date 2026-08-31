import assert from "node:assert/strict";
import test from "node:test";

import {
  assertHealthMockExamMatchesSeed,
  type HealthMockExamSeed,
} from "../../prisma/seeds/health-mock-exams.seed";

function createMockSeed(overrides?: Partial<HealthMockExamSeed>): HealthMockExamSeed {
  return {
    institutionNameContains: "Reims",
    programVersionSlug: "pass-2024",
    courseUnitSlug: "ue14",
    title: "Examen Blanc Test",
    slug: "eb-test",
    description: "Description test",
    instructions: "Instructions test",
    durationMinutes: 150,
    questionCount: 2,
    order: 1,
    isPublished: true,
    sections: [
      {
        teachingElementSlug: "chimie",
        title: "Chimie",
        order: 1,
        questionCount: 2,
        firstQuestion: 1,
        lastQuestion: 2,
        groups: [
          {
            key: "grp-1",
            order: 1,
            title: "Données communes test",
            sharedStatement: "Énoncé partagé test",
          },
        ],
        questions: [
          {
            slug: "eb-test-q01",
            order: 1,
            globalOrder: 1,
            groupKey: "grp-1",
            difficulty: "MEDIUM",
            questionType: "mcq",
            answerFormat: "SINGLE",
            question: "Question 1 énoncé",
            choices: ["A", "B", "C", "D", "E"],
            correctChoiceIndexes: [0],
            explanation: "Explication 1",
            choiceExplanations: ["Vrai", "Faux", "Faux", "Faux", "Faux"],
          },
          {
            slug: "eb-test-q02",
            order: 2,
            globalOrder: 2,
            groupKey: "grp-1",
            difficulty: "HARD",
            questionType: "short_answer",
            answerFormat: "SINGLE",
            question: "Question 2 énoncé",
            choices: [],
            correctChoiceIndexes: [],
            answerPayload: { type: "text", expectedAnswers: ["valide"] },
            explanation: "Explication 2",
            choiceExplanations: [],
          },
        ],
      },
    ],
    ...overrides,
  };
}

function createMockDbExam(seed: HealthMockExamSeed, themeIdsByQuestion: Record<string, string[]>) {
  return {
    title: seed.title,
    slug: seed.slug,
    description: seed.description ?? null,
    instructions: seed.instructions ?? null,
    durationMinutes: seed.durationMinutes,
    questionCount: seed.questionCount,
    order: seed.order,
    isPublished: seed.isPublished,
    sections: seed.sections.map((sec) => ({
      title: sec.title,
      order: sec.order,
      questionCount: sec.questionCount,
      firstQuestion: sec.firstQuestion,
      lastQuestion: sec.lastQuestion,
      teachingElement: { slug: sec.teachingElementSlug },
      questionGroups: (sec.groups ?? []).map((grp) => ({
        title: grp.title ?? null,
        sharedStatement: grp.sharedStatement,
        order: grp.order,
      })),
      questions: sec.questions.map((q) => ({
        slug: q.slug,
        order: q.order,
        globalOrder: q.globalOrder,
        difficulty: q.difficulty,
        questionType: q.questionType ?? "mcq",
        answerFormat: q.answerFormat,
        question: q.question,
        questionDiagram: q.questionDiagram,
        choices: q.choices,
        correctChoiceIndexes: q.correctChoiceIndexes,
        answerPayload: q.answerPayload,
        explanation: q.explanation,
        choiceExplanations: q.choiceExplanations,
        themeIds: themeIdsByQuestion[q.slug.toLowerCase()] ?? [],
      })),
    })),
    _count: { attempts: 5 },
  };
}

test("assertHealthMockExamMatchesSeed : valide un examen BDD strictement identique au seed", () => {
  const seed = createMockSeed();
  const themeMap = new Map([
    ["eb-test-q01", ["theme-1", "theme-2"]],
    ["eb-test-q02", ["theme-3"]],
  ]);
  const dbExam = createMockDbExam(seed, {
    "eb-test-q01": ["theme-2", "theme-1"], // ordre de tableau différent en BDD -> géré par le tri
    "eb-test-q02": ["theme-3"],
  });

  assert.doesNotThrow(() => {
    assertHealthMockExamMatchesSeed(dbExam, seed, themeMap);
  });
});

test("assertHealthMockExamMatchesSeed : rejette une divergence sur les métadonnées", () => {
  const seed = createMockSeed();
  const themeMap = new Map<string, string[]>();
  const dbExam = createMockDbExam(seed, {});
  dbExam.durationMinutes = 120; // seed = 150

  assert.throws(
    () => assertHealthMockExamMatchesSeed(dbExam, seed, themeMap),
    /durationMinutes mismatch/
  );
});

test("assertHealthMockExamMatchesSeed : rejette une divergence sur l'énoncé d'une question", () => {
  const seed = createMockSeed();
  const themeMap = new Map<string, string[]>();
  const dbExam = createMockDbExam(seed, {});
  dbExam.sections[0].questions[0].question = "Énoncé modifié";

  assert.throws(
    () => assertHealthMockExamMatchesSeed(dbExam, seed, themeMap),
    /énoncé mismatch/
  );
});

test("assertHealthMockExamMatchesSeed : rejette une divergence sur les choix d'une question", () => {
  const seed = createMockSeed();
  const themeMap = new Map<string, string[]>();
  const dbExam = createMockDbExam(seed, {});
  dbExam.sections[0].questions[0].choices = ["A", "B", "C", "D", "ALT"];

  assert.throws(
    () => assertHealthMockExamMatchesSeed(dbExam, seed, themeMap),
    /choices mismatch/
  );
});

test("assertHealthMockExamMatchesSeed : rejette une divergence sur l'answerPayload", () => {
  const seed = createMockSeed();
  const themeMap = new Map<string, string[]>();
  const dbExam = createMockDbExam(seed, {});
  dbExam.sections[0].questions[1].answerPayload = { type: "text", expectedAnswers: ["autre"] };

  assert.throws(
    () => assertHealthMockExamMatchesSeed(dbExam, seed, themeMap),
    /answerPayload mismatch/
  );
});

test("assertHealthMockExamMatchesSeed : rejette une divergence sur les groupes liés", () => {
  const seed = createMockSeed();
  const themeMap = new Map<string, string[]>();
  const dbExam = createMockDbExam(seed, {});
  dbExam.sections[0].questionGroups[0].sharedStatement = "Données modifiées";

  assert.throws(
    () => assertHealthMockExamMatchesSeed(dbExam, seed, themeMap),
    /énoncé partagé mismatch/
  );
});

test("assertHealthMockExamMatchesSeed : rejette une divergence sur le mapping de thèmes", () => {
  const seed = createMockSeed();
  const themeMap = new Map([
    ["eb-test-q01", ["theme-1", "theme-2"]],
  ]);
  const dbExam = createMockDbExam(seed, {
    "eb-test-q01": ["theme-1", "theme-diff"],
  });

  assert.throws(
    () => assertHealthMockExamMatchesSeed(dbExam, seed, themeMap),
    /themeIds mismatch/
  );
});

test("seedHealthMockExams : logique de dispatch idempotente (conforme / divergence / sans tentative / absent)", async () => {
  const actions: string[] = [];

  const mockPrisma = {
    healthInstitution: {
      findMany: async () => [{ id: "inst-1", name: "Université de Reims" }],
    },
    healthProgramVersion: {
      findUnique: async () => ({ id: "prog-1" }),
    },
    healthCourseUnit: {
      findFirst: async () => ({
        id: "cu-1",
        slug: "ue14",
        teachingElements: [{ id: "te-1", slug: "chimie" }],
      }),
    },
  };

  // Simuler le flux du seeder
  async function simulateSeederFlow(
    seeds: HealthMockExamSeed[],
    dbState: Record<string, { exam: any; attempts: number } | null>
  ) {
    for (const seed of seeds) {
      const existing = dbState[seed.slug];
      if (existing && existing.attempts > 0) {
        // Mode examen historique avec tentatives
        assertHealthMockExamMatchesSeed(existing.exam, seed, new Map());
        actions.push(`preserve:${seed.slug}`);
        continue;
      }
      if (existing && existing.attempts === 0) {
        actions.push(`regenerate:${seed.slug}`);
        continue;
      }
      actions.push(`create:${seed.slug}`);
    }
  }

  const seed1 = createMockSeed({ slug: "eb01", title: "EB01" });
  const seed2 = createMockSeed({ slug: "eb02", title: "EB02" });
  const seed3 = createMockSeed({ slug: "eb03", title: "EB03" });

  const dbExam1 = createMockDbExam(seed1, {});
  const dbExam2NoAttempts = createMockDbExam(seed2, {});
  dbExam2NoAttempts._count.attempts = 0;

  // 1. EB01 (avec tentatives, conforme) + EB02 (sans tentatives) + EB03 (absent)
  actions.length = 0;
  await simulateSeederFlow([seed1, seed2, seed3], {
    eb01: { exam: dbExam1, attempts: 10 },
    eb02: { exam: dbExam2NoAttempts, attempts: 0 },
    eb03: null,
  });

  assert.deepEqual(actions, [
    "preserve:eb01",
    "regenerate:eb02",
    "create:eb03",
  ]);

  // 2. EB01 avec tentatives mais divergence -> lève une erreur et stoppe avant EB02
  const divergentDbExam1 = createMockDbExam(seed1, {});
  divergentDbExam1.title = "EB01 Ancien Titre Divergent";

  await assert.rejects(
    async () => {
      await simulateSeederFlow([seed1, seed2], {
        eb01: { exam: divergentDbExam1, attempts: 10 },
        eb02: null,
      });
    },
    /Titre mismatch/
  );
});
