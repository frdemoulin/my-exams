import assert from "node:assert/strict";
import test from "node:test";

import {
  buildThemeLabelById,
  getQuestionThemeLabels,
  getQuestionThemes,
  getThemeDisplayLabel,
} from "@/core/theme/theme-label";

test("le libelle d'un Theme utilise shortTitle puis title", () => {
  assert.equal(
    getThemeDisplayLabel({
      title: "Hybridation des orbitales atomiques et moleculaires",
      shortTitle: "Hybridation et geometrie moleculaire",
    }),
    "Hybridation et geometrie moleculaire"
  );

  assert.equal(
    getThemeDisplayLabel({
      title: "Titre long du theme",
      shortTitle: null,
    }),
    "Titre long du theme"
  );
});

test("quiz et colle reutilisent exactement le meme libelle de Theme", () => {
  const themeLabelById = buildThemeLabelById([
    {
      id: "theme-shared",
      title: "Hybridation des orbitales atomiques et moleculaires",
      shortTitle: "Hybridation et geometrie moleculaire",
    },
  ]);

  const quizThemeLabels = getQuestionThemeLabels({
    themeIds: ["theme-shared"],
    themeLabelById,
  });
  const colleThemes = getQuestionThemes({
    themeIds: ["theme-shared"],
    themeLabelById,
  });

  assert.deepEqual(quizThemeLabels, ["Hybridation et geometrie moleculaire"]);
  assert.deepEqual(colleThemes, [
    {
      id: "theme-shared",
      label: "Hybridation et geometrie moleculaire",
    },
  ]);
});
