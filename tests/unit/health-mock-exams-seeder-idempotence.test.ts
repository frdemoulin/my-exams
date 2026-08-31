import assert from "node:assert/strict";
import test from "node:test";

import {
  assertHealthMockExamMatchesSeed,
  determineMockExamSeederAction,
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
    questionCount: 3,
    version: 1,
    order: 1,
    isPublished: true,
    sections: [
      {
        teachingElementSlug: "chimie",
        title: "Chimie",
        order: 1,
        questionCount: 3,
        firstQuestion: 1,
        lastQuestion: 3,
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
          {
            slug: "eb-test-q03",
            order: 3,
            globalOrder: 3,
            difficulty: "EASY",
            questionType: "mcq",
            answerFormat: "MULTIPLE",
            question: "Question 3 autonome énoncé",
            choices: ["A", "B", "C", "D", "E"],
            correctChoiceIndexes: [0, 2],
            explanation: "Explication 3",
            choiceExplanations: ["Vrai", "Faux", "Vrai", "Faux", "Faux"],
          },
        ],
      },
    ],
    ...overrides,
  };
}

function createMockDbExam(seed: HealthMockExamSeed, themeIdsByQuestion: Record<string, string[]>) {
  return {
    type: "MOCK_EXAM",
    version: seed.version ?? 1,
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
        questions: sec.questions
          .filter((q) => q.groupKey === grp.key)
          .map((q) => ({ slug: q.slug })),
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
        correctChoiceIndex: q.correctChoiceIndexes[0] ?? -1,
        correctChoiceIndexes: q.correctChoiceIndexes,
        answerPayload: q.answerPayload,
        explanation: q.explanation,
        choiceExplanations: q.choiceExplanations,
        isPublished: true,
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
    ["eb-test-q03", ["theme-4"]],
  ]);
  const dbExam = createMockDbExam(seed, {
    "eb-test-q01": ["theme-2", "theme-1"], // ordre différent en BDD -> géré par tri
    "eb-test-q02": ["theme-3"],
    "eb-test-q03": ["theme-4"],
  });

  assert.doesNotThrow(() => {
    assertHealthMockExamMatchesSeed(dbExam, seed, themeMap);
  });
});

test("assertHealthMockExamMatchesSeed : rejette une divergence d'appartenance des questions aux groupes liés", () => {
  const seed = createMockSeed();
  const themeMap = new Map<string, string[]>();

  // 1. Question retirée du groupe
  const dbExamMissing = createMockDbExam(seed, {});
  dbExamMissing.sections[0].questionGroups[0].questions = [{ slug: "eb-test-q01" }]; // q02 manquante
  assert.throws(
    () => assertHealthMockExamMatchesSeed(dbExamMissing, seed, themeMap),
    /questions rattachées mismatch/
  );

  // 2. Question autonome rattachée par erreur à un groupe
  const dbExamExtra = createMockDbExam(seed, {});
  dbExamExtra.sections[0].questionGroups[0].questions = [
    { slug: "eb-test-q01" },
    { slug: "eb-test-q02" },
    { slug: "eb-test-q03" }, // Q03 ne devrait pas être dans grp-1
  ];
  assert.throws(
    () => assertHealthMockExamMatchesSeed(dbExamExtra, seed, themeMap),
    /questions rattachées mismatch/
  );
});

test("assertHealthMockExamMatchesSeed : rejette une divergence sur type ou version de l'examen", () => {
  const seed = createMockSeed();
  const themeMap = new Map<string, string[]>();

  const dbExamWrongType = createMockDbExam(seed, {});
  dbExamWrongType.type = "TRAINING";
  assert.throws(
    () => assertHealthMockExamMatchesSeed(dbExamWrongType, seed, themeMap),
    /Type mismatch/
  );

  const dbExamWrongVersion = createMockDbExam(seed, {});
  dbExamWrongVersion.version = 2; // seed = 1
  assert.throws(
    () => assertHealthMockExamMatchesSeed(dbExamWrongVersion, seed, themeMap),
    /Version mismatch/
  );
});

test("assertHealthMockExamMatchesSeed : rejette une divergence sur isPublished ou correctChoiceIndex d'une question", () => {
  const seed = createMockSeed();
  const themeMap = new Map<string, string[]>();

  const dbExamUnpublished = createMockDbExam(seed, {});
  dbExamUnpublished.sections[0].questions[0].isPublished = false;
  assert.throws(
    () => assertHealthMockExamMatchesSeed(dbExamUnpublished, seed, themeMap),
    /isPublished mismatch/
  );

  const dbExamWrongCorrectIndex = createMockDbExam(seed, {});
  dbExamWrongCorrectIndex.sections[0].questions[0].correctChoiceIndex = 3; // attendu 0
  assert.throws(
    () => assertHealthMockExamMatchesSeed(dbExamWrongCorrectIndex, seed, themeMap),
    /correctChoiceIndex mismatch/
  );
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

test("assertHealthMockExamMatchesSeed : rejette une divergence sur les groupes liés (énoncé partagé)", () => {
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
    ["eb-test-q02", ["theme-3"]],
    ["eb-test-q03", ["theme-4"]],
  ]);
  const dbExam = createMockDbExam(seed, {
    "eb-test-q01": ["theme-1", "theme-diff"],
    "eb-test-q02": ["theme-3"],
    "eb-test-q03": ["theme-4"],
  });

  assert.throws(
    () => assertHealthMockExamMatchesSeed(dbExam, seed, themeMap),
    /themeIds mismatch/
  );
});

test("determineMockExamSeederAction : calcule fidèlement l'action de dispatch", () => {
  // 1. Examen absent
  assert.deepEqual(determineMockExamSeederAction(null), { action: "CREATE" });
  assert.deepEqual(determineMockExamSeederAction(undefined), { action: "CREATE" });

  // 2. Examen sans tentative
  assert.deepEqual(
    determineMockExamSeederAction({ id: "exam-1", _count: { attempts: 0 } }),
    { action: "REGENERATE", existingExamId: "exam-1" }
  );

  // 3. Examen avec tentatives
  assert.deepEqual(
    determineMockExamSeederAction({ id: "exam-1", _count: { attempts: 12 } }),
    { action: "PRESERVE", existingExamId: "exam-1", attemptsCount: 12 }
  );
});

test("seedHealthMockExams : cycle d'orchestration réel utilisant determineMockExamSeederAction", async () => {
  const executedActions: string[] = [];

  const seed1 = createMockSeed({ slug: "eb01", title: "EB01" });
  const seed2 = createMockSeed({ slug: "eb02", title: "EB02" });
  const seed3 = createMockSeed({ slug: "eb03", title: "EB03" });

  const dbExam1 = createMockDbExam(seed1, {});
  const dbExam2NoAttempts = createMockDbExam(seed2, {});
  dbExam2NoAttempts._count.attempts = 0;

  const mockDb = new Map<string, any>([
    ["eb01", { ...dbExam1, id: "db-eb01" }],
    ["eb02", { ...dbExam2NoAttempts, id: "db-eb02" }],
    // eb03 est absent
  ]);

  // Orchestrateur réel simulant le parcours avec determineMockExamSeederAction
  async function runOrchestrator(seeds: HealthMockExamSeed[]) {
    for (const seed of seeds) {
      const existingExam = mockDb.get(seed.slug);
      const action = determineMockExamSeederAction(existingExam);

      if (action.action === "PRESERVE") {
        assertHealthMockExamMatchesSeed(existingExam, seed, new Map());
        executedActions.push(`PRESERVED:${seed.slug}:${action.attemptsCount}`);
        continue;
      }
      if (action.action === "REGENERATE") {
        executedActions.push(`REGENERATED:${seed.slug}:${action.existingExamId}`);
        continue;
      }
      executedActions.push(`CREATED:${seed.slug}`);
    }
  }

  // 1. Cas nominal : EB01 préservé (10 tentatives) -> EB02 régénéré (0 tentative) -> EB03 créé
  executedActions.length = 0;
  await runOrchestrator([seed1, seed2, seed3]);
  assert.deepEqual(executedActions, [
    "PRESERVED:eb01:5",
    "REGENERATED:eb02:db-eb02",
    "CREATED:eb03",
  ]);

  // 2. Cas divergence sur EB01 : interruption avec throw
  const divergentDbExam = createMockDbExam(seed1, {});
  divergentDbExam.title = "Titre Ancien Modifié";
  mockDb.set("eb01", { ...divergentDbExam, id: "db-eb01" });

  executedActions.length = 0;
  await assert.rejects(
    async () => runOrchestrator([seed1, seed2, seed3]),
    /Titre mismatch/
  );
  assert.deepEqual(executedActions, []); // N'a pas atteint EB02 ni EB03
});
