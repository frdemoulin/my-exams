import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  formatCountMetric,
  formatSingleDuration,
  formatDurationMetric,
} from "@/lib/format-metrics";

describe("Moteur d'harmonisation des métriques de bilan (Formatters X / Y)", () => {
  describe("formatCountMetric — compteurs X / Y", () => {
    it("formate les compteurs avec un dénominateur positif", () => {
      assert.equal(formatCountMetric(7, 20), "7 / 20");
      assert.equal(formatCountMetric(0, 20), "0 / 20");
      assert.equal(formatCountMetric(20, 20), "20 / 20");
      assert.equal(formatCountMetric(9, 50), "9 / 50");
    });

    it("retourne uniquement la valeur isolée lorsqu'aucun total n'est fourni", () => {
      assert.equal(formatCountMetric(7, null), "7");
      assert.equal(formatCountMetric(7, 0), "7");
      assert.equal(formatCountMetric(7, undefined), "7");
    });

    it("gère les cas défensifs et valeurs négatives", () => {
      assert.equal(formatCountMetric(-5, 20), "0 / 20");
      assert.equal(formatCountMetric(NaN as any, 20), "0");
    });
  });

  describe("formatSingleDuration — formatage d'une durée unique", () => {
    it("formate les minutes pures sans afficher 0 s", () => {
      assert.equal(formatSingleDuration(1800), "30 min");
      assert.equal(formatSingleDuration(4500), "75 min");
      assert.equal(formatSingleDuration(9000), "150 min");
    });

    it("formate les durées mixtes minutes + secondes avec padding 2 chiffres", () => {
      assert.equal(formatSingleDuration(2250), "37 min 30 s");
      assert.equal(formatSingleDuration(1458), "24 min 18 s");
      assert.equal(formatSingleDuration(2224), "37 min 04 s");
      assert.equal(formatSingleDuration(4122), "68 min 42 s");
      assert.equal(formatSingleDuration(512), "8 min 32 s");
    });

    it("formate les durées inférieures à 1 minute", () => {
      assert.equal(formatSingleDuration(42), "42 s");
      assert.equal(formatSingleDuration(5), "5 s");
    });

    it("gère 0 s et les valeurs invalides", () => {
      assert.equal(formatSingleDuration(0), "0 s");
      assert.equal(formatSingleDuration(-10), "0 s");
    });
  });

  describe("formatDurationMetric — durée épreuve chronométrée vs non chronométrée", () => {
    it("formate le rapport elapsed / limit pour les épreuves chronométrées", () => {
      assert.equal(formatDurationMetric(1458, 1800), "24 min 18 s / 30 min");
      assert.equal(formatDurationMetric(2224, 2250), "37 min 04 s / 37 min 30 s");
      assert.equal(formatDurationMetric(4122, 4500), "68 min 42 s / 75 min");
      assert.equal(formatDurationMetric(1800, 1800), "30 min / 30 min");
    });

    it("formate le temps écoulé seul sans dénominateur pour les épreuves non chronométrées", () => {
      assert.equal(formatDurationMetric(512, undefined), "8 min 32 s");
      assert.equal(formatDurationMetric(512, null), "8 min 32 s");
      assert.equal(formatDurationMetric(512, 0), "8 min 32 s");
    });

    it("retourne une chaîne vide si le temps écoulé est indisponible", () => {
      assert.equal(formatDurationMetric(null, 1800), "");
      assert.equal(formatDurationMetric(undefined, 1800), "");
    });
  });
});
