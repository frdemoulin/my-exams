const FRENCH_HIGH_PUNCTUATION_SPACING = /[ \t\u00a0\u202f]+(?=[:;!?])/g;

export const normalizeFrenchPunctuationSpacing = (value: string) =>
  value.replace(FRENCH_HIGH_PUNCTUATION_SPACING, '\u202f');
