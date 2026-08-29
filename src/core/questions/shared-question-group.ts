/**
 * Utilitaires pour le formatage et l'affichage harmonisé des groupes de questions liées
 * (données communes) dans les quiz, colles et examens blancs.
 */

/**
 * Formate le libellé fonctionnel de périmètre des questions d'un groupe de questions liées
 * à partir d'une liste de positions globales (1-based) affichées à l'étudiant.
 *
 * Algorithme :
 * 1. Dédupliquer les numéros.
 * 2. Trier par ordre croissant.
 * 3. Formater selon le nombre et la contiguïté :
 *    - [4] -> "Données communes à la question 4"
 *    - [1, 2] -> "Données communes aux questions 1 et 2"
 *    - [17, 18, 19] -> "Données communes aux questions 17 à 19"
 *    - [27, 28, 29, 30] -> "Données communes aux questions 27 à 30"
 *    - [17, 19] -> "Données communes aux questions 17 et 19"
 *    - [3, 5, 7] -> "Données communes aux questions 3, 5 et 7"
 *    - [3, 5, 7, 9] -> "Données communes aux questions 3, 5, 7 et 9"
 */
export function formatSharedQuestionRange(
  globalQuestionNumbers: readonly number[] | number[]
): string {
  if (!globalQuestionNumbers || globalQuestionNumbers.length === 0) {
    return "";
  }

  // 1. Dédupliquer et 2. Trier par ordre croissant
  const sortedNumbers = Array.from(
    new Set(
      globalQuestionNumbers.filter(
        (n) => typeof n === "number" && Number.isFinite(n) && n > 0
      )
    )
  ).sort((a, b) => a - b);

  if (sortedNumbers.length === 0) {
    return "";
  }

  // Cas 1 seule question (défensif)
  if (sortedNumbers.length === 1) {
    return `Données communes à la question ${sortedNumbers[0]}`;
  }

  // Cas 2 questions
  if (sortedNumbers.length === 2) {
    return `Données communes aux questions ${sortedNumbers[0]} et ${sortedNumbers[1]}`;
  }

  // Cas 3 questions ou plus : vérifier la contiguïté
  const isContiguous = sortedNumbers.every(
    (val, i) => i === 0 || val === sortedNumbers[i - 1] + 1
  );

  if (isContiguous) {
    return `Données communes aux questions ${sortedNumbers[0]} à ${sortedNumbers[sortedNumbers.length - 1]}`;
  }

  // Cas 3 questions ou plus non contiguës (défensif)
  const allExceptLast = sortedNumbers.slice(0, -1).join(", ");
  const last = sortedNumbers[sortedNumbers.length - 1];
  return `Données communes aux questions ${allExceptLast} et ${last}`;
}

/**
 * Nettoie le titre thématique d'un groupe pour l'affichage en retirant un préfixe redondant éventuel
 * tel que « Données communes — », « Données communes - » ou « Énoncé commun — » (insensible à la casse).
 *
 * Exemples :
 * - "Données communes — Isotopes du chlore" -> "Isotopes du chlore"
 * - "Données communes - Isotopes du chlore" -> "Isotopes du chlore"
 * - "DONNÉES COMMUNES — Isotopes du chlore" -> "Isotopes du chlore"
 * - "Énoncé commun — Isotopes du chlore" -> "Isotopes du chlore"
 * - "Isotopes du chlore" -> "Isotopes du chlore"
 */
export function formatSharedQuestionGroupTitle(
  title: string | null | undefined
): string {
  if (!title) {
    return "";
  }

  const trimmed = title.trim();
  if (!trimmed) {
    return "";
  }

  // Retirer un préfixe initial "Données communes —", "Données communes -", "Énoncé commun —", etc.
  const cleaned = trimmed
    .replace(/^(?:donn[ée]es\s+communes|énonc[ée]\s+commun)\s*(?:[—–-]|:)\s*/iu, "")
    .trim();

  return cleaned;
}
