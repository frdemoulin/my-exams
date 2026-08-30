import assert from "node:assert/strict";
import test from "node:test";

import {
  formatSharedQuestionRange,
  formatSharedQuestionGroupTitle,
} from "../../src/core/questions/shared-question-group";

test("formatSharedQuestionRange - cas nominaux et ordonnancement", () => {
  // 1 question
  assert.equal(
    formatSharedQuestionRange([4]),
    "Données communes à la question 4"
  );

  // 2 questions
  assert.equal(
    formatSharedQuestionRange([1, 2]),
    "Données communes aux questions 1 et 2"
  );
  assert.equal(
    formatSharedQuestionRange([17, 19]),
    "Données communes aux questions 17 et 19"
  );

  // 3+ questions contiguës
  assert.equal(
    formatSharedQuestionRange([17, 18, 19]),
    "Données communes aux questions 17 à 19"
  );
  assert.equal(
    formatSharedQuestionRange([27, 28, 29, 30]),
    "Données communes aux questions 27 à 30"
  );
  assert.equal(
    formatSharedQuestionRange([40, 41, 42, 43]),
    "Données communes aux questions 40 à 43"
  );

  // 3+ questions non contiguës
  assert.equal(
    formatSharedQuestionRange([3, 5, 7]),
    "Données communes aux questions 3, 5 et 7"
  );
  assert.equal(
    formatSharedQuestionRange([3, 5, 7, 9]),
    "Données communes aux questions 3, 5, 7 et 9"
  );
});

test("formatSharedQuestionRange - cas défensifs, doublons et désordre", () => {
  // Entrée non triée
  assert.equal(
    formatSharedQuestionRange([19, 17, 18]),
    "Données communes aux questions 17 à 19"
  );
  assert.equal(
    formatSharedQuestionRange([2, 1]),
    "Données communes aux questions 1 et 2"
  );
  assert.equal(
    formatSharedQuestionRange([9, 3, 7, 5]),
    "Données communes aux questions 3, 5, 7 et 9"
  );

  // Doublons
  assert.equal(
    formatSharedQuestionRange([1, 2, 1, 2]),
    "Données communes aux questions 1 et 2"
  );
  assert.equal(
    formatSharedQuestionRange([17, 18, 19, 18, 17]),
    "Données communes aux questions 17 à 19"
  );

  // Liste vide ou invalide
  assert.equal(formatSharedQuestionRange([]), "");
  assert.equal(formatSharedQuestionRange([-1, 0]), "");
});

test("formatSharedQuestionGroupTitle - nettoyage des préfixes et conservation du titre", () => {
  // Préfixes standards avec tirets cadratin, demi-cadratin ou simple
  assert.equal(
    formatSharedQuestionGroupTitle("Données communes — Isotopes du chlore"),
    "Isotopes du chlore"
  );
  assert.equal(
    formatSharedQuestionGroupTitle("Données communes - Isotopes du chlore"),
    "Isotopes du chlore"
  );
  assert.equal(
    formatSharedQuestionGroupTitle("Données communes – Isotopes du chlore"),
    "Isotopes du chlore"
  );
  assert.equal(
    formatSharedQuestionGroupTitle("DONNÉES COMMUNES — Isotopes du chlore"),
    "Isotopes du chlore"
  );
  assert.equal(
    formatSharedQuestionGroupTitle("donnees communes - Isotopes du chlore"),
    "Isotopes du chlore"
  );

  // Énoncé commun
  assert.equal(
    formatSharedQuestionGroupTitle("Énoncé commun — Isotopes du chlore"),
    "Isotopes du chlore"
  );
  assert.equal(
    formatSharedQuestionGroupTitle("Énoncé commun : Isotopes du chlore"),
    "Isotopes du chlore"
  );

  // Titre sans préfixe (inchangé)
  assert.equal(
    formatSharedQuestionGroupTitle("Isotopes du chlore"),
    "Isotopes du chlore"
  );
  assert.equal(
    formatSharedQuestionGroupTitle("Tableau périodique et éléments représentatifs"),
    "Tableau périodique et éléments représentatifs"
  );

  // Cas null, undefined ou vide
  assert.equal(formatSharedQuestionGroupTitle(null), "");
  assert.equal(formatSharedQuestionGroupTitle(undefined), "");
  assert.equal(formatSharedQuestionGroupTitle(""), "");
  assert.equal(formatSharedQuestionGroupTitle("   "), "");
  assert.equal(formatSharedQuestionGroupTitle("Données communes — "), "");
});
