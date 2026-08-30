import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  HEALTH_EVALUATION_COLOR_LEGEND,
  resolveChoiceSemanticState,
  resolveQuestionSemanticState,
} from "@/core/health-mock-exam/health-evaluation-colors";

describe("Health Evaluation Color Legend & Semantic Mapping Engine", () => {
  it("expose la légende à 4 états sémantiques avec les libellés exacts", () => {
    assert.equal(HEALTH_EVALUATION_COLOR_LEGEND.length, 4);

    const [vert, rouge, orange, gris] = HEALTH_EVALUATION_COLOR_LEGEND;

    assert.equal(vert.state, "success");
    assert.equal(vert.colorName, "Vert");
    assert.equal(vert.label, "Acquis / réponse correcte");

    assert.equal(rouge.state, "error");
    assert.equal(rouge.colorName, "Rouge");
    assert.equal(rouge.label, "Erreur / notion à retravailler");

    assert.equal(orange.state, "warning");
    assert.equal(orange.colorName, "Orange");
    assert.equal(orange.label, "Réponse attendue omise / à compléter");

    assert.equal(gris.state, "neutral");
    assert.equal(gris.colorName, "Gris");
    assert.equal(gris.label, "Neutre / non sélectionné correctement");
  });

  it("mappe fidèlement les 4 combinaisons de choix aux états sémantiques", () => {
    // 1. Vraie sélectionnée -> success (Vert)
    assert.equal(resolveChoiceSemanticState({ isCorrect: true, isSelected: true }), "success");

    // 2. Fausse sélectionnée -> error (Rouge)
    assert.equal(resolveChoiceSemanticState({ isCorrect: false, isSelected: true }), "error");

    // 3. Vraie omise -> warning (Orange)
    assert.equal(resolveChoiceSemanticState({ isCorrect: true, isSelected: false }), "warning");

    // 4. Fausse non sélectionnée -> neutral (Gris)
    assert.equal(resolveChoiceSemanticState({ isCorrect: false, isSelected: false }), "neutral");
  });

  it("consomme les statuts d'évaluation de question sans recalculer ni réinterpréter le score", () => {
    assert.equal(resolveQuestionSemanticState({ evaluationStatus: "correct" }), "success");
    assert.equal(resolveQuestionSemanticState({ evaluationStatus: "incorrect" }), "error");
    assert.equal(resolveQuestionSemanticState({ evaluationStatus: "partial" }), "warning");
    assert.equal(resolveQuestionSemanticState({ evaluationStatus: "unanswered" }), "neutral");
  });
});
