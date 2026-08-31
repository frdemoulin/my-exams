import assert from "node:assert/strict";
import test from "node:test";
import * as fs from "node:fs";
import * as path from "node:path";

import { UE14_EB01_EDITORIAL_SEED } from "../../prisma/seeds/data/health-eb-ue14-eb01.author.seed";
import { UE14_EB01_THEME_MAPPING } from "../../prisma/seeds/data/health-eb-ue14-eb01-theme-mapping.final";
import { reimsUe14MockExams } from "../../prisma/seeds/data/health-mock-exams-reims-ue14";
import { normalizeHealthMockExamPassageQuestion } from "../../src/core/health-mock-exam/health-mock-exam.question";

test("UE14 EB01 — Structure globale et métadonnées", () => {
  assert.equal(UE14_EB01_EDITORIAL_SEED.exam.code, "EB01");
  assert.equal(UE14_EB01_EDITORIAL_SEED.exam.slug, "eb01");
  assert.equal(UE14_EB01_EDITORIAL_SEED.exam.title, "Examen blanc UE14 — EB01");
  assert.equal(UE14_EB01_EDITORIAL_SEED.exam.courseUnit, "UE14");
  assert.equal(UE14_EB01_EDITORIAL_SEED.exam.durationMinutes, 150);
  assert.equal(UE14_EB01_EDITORIAL_SEED.exam.questionCount, 100);

  const eb01Seed = reimsUe14MockExams.find((exam) => exam.slug === "eb01");
  assert.ok(eb01Seed, "EB01 seed must be declared in reimsUe14MockExams");
  assert.equal(eb01Seed.durationMinutes, 150);
  assert.equal(eb01Seed.questionCount, 100);
  assert.equal(eb01Seed.isPublished, true);
  assert.equal(eb01Seed.sections.length, 3);
});

test("UE14 EB01 — Découpage par élément constitutif (EC)", () => {
  const eb01Seed = reimsUe14MockExams.find((exam) => exam.slug === "eb01")!;
  const [chimie, biochimie, biocell] = eb01Seed.sections;

  assert.equal(chimie.teachingElementSlug, "chimie");
  assert.equal(chimie.title, "Chimie");
  assert.equal(chimie.questionCount, 28);
  assert.equal(chimie.firstQuestion, 1);
  assert.equal(chimie.lastQuestion, 28);
  assert.equal(chimie.questions.length, 28);

  assert.equal(biochimie.teachingElementSlug, "biochimie");
  assert.equal(biochimie.title, "Biochimie");
  assert.equal(biochimie.questionCount, 34);
  assert.equal(biochimie.firstQuestion, 29);
  assert.equal(biochimie.lastQuestion, 62);
  assert.equal(biochimie.questions.length, 34);

  assert.equal(biocell.teachingElementSlug, "biologie-cellulaire");
  assert.equal(biocell.title, "Biologie cellulaire");
  assert.equal(biocell.questionCount, 38);
  assert.equal(biocell.firstQuestion, 63);
  assert.equal(biocell.lastQuestion, 100);
  assert.equal(biocell.questions.length, 38);
});

test("UE14 EB01 — Distribution des formats", () => {
  const counts: Record<string, number> = {};
  for (const q of UE14_EB01_EDITORIAL_SEED.questions) {
    counts[q.format] = (counts[q.format] ?? 0) + 1;
  }

  assert.equal(counts["QRM"], 38, "38 QRM attendus");
  assert.equal(counts["QRU"], 20, "20 QRU attendus");
  assert.equal(counts["QROC"], 18, "18 QROC attendus");
  assert.equal(counts["QRP"], 12, "12 QRP attendus");
  assert.equal(counts["QRPL"], 6, "6 QRPL attendus");
  assert.equal(counts["QZONE"], 6, "6 QZONE attendus");
  assert.equal(UE14_EB01_EDITORIAL_SEED.questions.length, 100);
});

test("UE14 EB01 — Distribution des difficultés", () => {
  const counts: Record<string, number> = {};
  for (const q of UE14_EB01_EDITORIAL_SEED.questions) {
    counts[q.difficulty] = (counts[q.difficulty] ?? 0) + 1;
  }

  assert.equal(counts["EASY"], 18, "18 EASY attendus");
  assert.equal(counts["MEDIUM"], 56, "56 MEDIUM attendus");
  assert.equal(counts["HARD"], 26, "26 HARD attendus");
});

test("UE14 EB01 — Équilibre des bonnes réponses QRM et positions QRU", () => {
  const qrmCorrectCounts: Record<number, number> = {};
  const qruPositions: Record<number, number> = {};

  for (const q of UE14_EB01_EDITORIAL_SEED.questions) {
    if (q.format === "QRM") {
      const correctCount = q.choices.filter((c: any) => c.correct).length;
      qrmCorrectCounts[correctCount] = (qrmCorrectCounts[correctCount] ?? 0) + 1;
    }
    if (q.format === "QRU") {
      const correctIdx = q.choices.findIndex((c: any) => c.correct);
      assert.notEqual(correctIdx, -1, `QRU ${q.stableId} must have 1 correct answer`);
      qruPositions[correctIdx] = (qruPositions[correctIdx] ?? 0) + 1;
    }
  }

  assert.deepEqual(qrmCorrectCounts, { 2: 13, 3: 13, 4: 12 }, "Distribution QRM attendue : 13x2, 13x3, 12x4");
  assert.deepEqual(qruPositions, { 0: 4, 1: 4, 2: 4, 3: 4, 4: 4 }, "Positions QRU attendues : A/B/C/D/E = 4/4/4/4/4");
});

test("UE14 EB01 — Groupes de questions liées (exacts et intra-EC)", () => {
  assert.equal(UE14_EB01_EDITORIAL_SEED.groups.length, 4, "Exactement 4 groupes attendus");

  const [g1, g2, g3, g4] = UE14_EB01_EDITORIAL_SEED.groups;

  assert.equal(g1.id, "G1");
  assert.deepEqual(g1.questionStableIds, ["eb01-q18", "eb01-q19", "eb01-q20"]);

  assert.equal(g2.id, "G2");
  assert.deepEqual(g2.questionStableIds, ["eb01-q42", "eb01-q43", "eb01-q44"]);

  assert.equal(g3.id, "G3");
  assert.deepEqual(g3.questionStableIds, ["eb01-q74", "eb01-q75", "eb01-q76"]);

  assert.equal(g4.id, "G4");
  assert.deepEqual(g4.questionStableIds, ["eb01-q82", "eb01-q83"]);

  const qMap = new Map(UE14_EB01_EDITORIAL_SEED.questions.map((q: any) => [q.stableId, q]));
  for (const group of [g1, g2, g3, g4]) {
    const ecs = group.questionStableIds.map((id) => qMap.get(id)?.ec);
    const uniqueEcs = new Set(ecs);
    assert.equal(uniqueEcs.size, 1, `Groupe ${group.id} doit appartenir strictement à un seul EC`);
  }
});

test("UE14 EB01 — Theme mapping (100 questions, 120 relations, 0 inter-EC)", () => {
  assert.equal(UE14_EB01_THEME_MAPPING.length, 100);

  let singleTheme = 0;
  let doubleTheme = 0;
  let totalThemes = 0;
  const stableIdSet = new Set<string>();

  for (const item of UE14_EB01_THEME_MAPPING) {
    assert.ok(!stableIdSet.has(item.stableId), `Duplicate stableId in mapping: ${item.stableId}`);
    stableIdSet.add(item.stableId);

    const count = item.themeIds.length;
    totalThemes += count;
    if (count === 1) singleTheme++;
    else if (count === 2) doubleTheme++;
    else assert.fail(`Question ${item.stableId} has invalid theme count: ${count}`);
  }

  assert.equal(singleTheme, 80, "80 questions mono-thème");
  assert.equal(doubleTheme, 20, "20 questions bi-thème");
  assert.equal(totalThemes, 120, "120 relations thème au total");
  assert.equal(stableIdSet.size, 100, "100 stableIds uniques");
});

test("UE14 EB01 — Assets QZONE et paramètres de tolérance", () => {
  const qzoneQuestions = UE14_EB01_EDITORIAL_SEED.questions.filter((q: any) => q.format === "QZONE");
  assert.equal(qzoneQuestions.length, 6, "6 QZONE questions");

  const expectedQzones = [
    { order: 9, asset: "/images/training/ue14/exam-blancs/eb01/q09-ethanol-oh-bond.svg", target: "oh-bond", x: 0.76, y: 0.5, tol: 0.075 },
    { order: 20, asset: "/images/training/ue14/exam-blancs/eb01/q20-propanone-electrophilic-carbon.svg", target: "carbonyl-carbon", x: 0.5, y: 0.52, tol: 0.075 },
    { order: 37, asset: "/images/training/ue14/exam-blancs/eb01/q37-glycerophospholipid-phosphate.svg", target: "phosphate", x: 0.66, y: 0.5, tol: 0.085 },
    { order: 56, asset: "/images/training/ue14/exam-blancs/eb01/q56-lineweaver-burk-x-intercept.svg", target: "x-intercept", x: 0.155, y: 0.769, tol: 0.075 },
    { order: 71, asset: "/images/training/ue14/exam-blancs/eb01/q71-migrating-cell-lamellipodium.svg", target: "lamellipodium", x: 0.82, y: 0.46, tol: 0.11 },
    { order: 90, asset: "/images/training/ue14/exam-blancs/eb01/q90-nucleus-nucleolus.svg", target: "nucleolus", x: 0.52, y: 0.48, tol: 0.1 },
  ];

  for (const exp of expectedQzones) {
    const q: any = qzoneQuestions.find((item: any) => item.order === exp.order);
    assert.ok(q, `QZONE Q${exp.order} introuvable`);
    assert.equal(q.image.src, exp.asset);
    assert.equal(q.expectedZones[0].id, exp.target);
    assert.equal(q.expectedZones[0].x, exp.x);
    assert.equal(q.expectedZones[0].y, exp.y);
    assert.equal(q.expectedZones[0].tolerance, exp.tol);

    const publicPath = path.resolve(process.cwd(), "public", exp.asset.replace(/^\//, ""));
    assert.ok(fs.existsSync(publicPath), `Fichier SVG ${publicPath} manquant sur le disque`);
  }
});

test("UE14 EB01 — Sécurité anti-fuite des solutions en mode passation", () => {
  const eb01Seed = reimsUe14MockExams.find((exam) => exam.slug === "eb01")!;
  const allSeedQuestions = eb01Seed.sections.flatMap((s) => s.questions);

  for (const q of allSeedQuestions) {
    const passageQ = normalizeHealthMockExamPassageQuestion(q as any);
    assert.ok(!passageQ.explanation, `Question ${q.slug} ne doit pas exposer explanation avant finalisation`);
    assert.deepEqual((passageQ as any).choiceExplanations ?? [], [], `Question ${q.slug} ne doit pas exposer choiceExplanations`);

    if (passageQ.type === "mcq") {
      for (const choice of passageQ.choices) {
        assert.equal(choice.correct, false, `Question ${q.slug} choice correct doit être false`);
      }
    } else if (passageQ.type === "short-answer") {
      assert.deepEqual(passageQ.acceptedAnswers, [], `Question QROC ${q.slug} ne doit pas exposer acceptedAnswers`);
    } else if (passageQ.type === "hotspot") {
      assert.deepEqual(passageQ.expectedZones, [], `Question QZONE ${q.slug} ne doit pas exposer expectedZones`);
    }

    const serialized = JSON.stringify(passageQ);
    assert.ok(!serialized.includes(q.explanation), `Explication transverse fuitée pour ${q.slug}`);
  }
});
