import type {
  HealthTrainingAuthorQuestion,
} from "./health-author-question.types";

export type HealthAuthorQuestionValidationContext = {
  fileName?: string;
  chapterSlug?: string;
  quizSlug?: string;
};

export type HealthAuthorQuestionValidationResult = {
  isValid: boolean;
  issues: string[];
};

const validDifficulties = new Set(["EASY", "MEDIUM", "HARD"]);

function formatContextPrefix(
  question: HealthTrainingAuthorQuestion,
  context?: HealthAuthorQuestionValidationContext,
) {
  const parts: string[] = [];
  if (context?.fileName) parts.push(context.fileName);
  if (context?.chapterSlug) parts.push(`chapitre « ${context.chapterSlug} »`);
  if (context?.quizSlug) parts.push(`quiz « ${context.quizSlug} »`);
  parts.push(`question order ${question.order} (${question.format})`);
  return `[${parts.join(" > ")}]`;
}

export function validateHealthTrainingAuthorQuestion(
  question: HealthTrainingAuthorQuestion,
  context?: HealthAuthorQuestionValidationContext,
): HealthAuthorQuestionValidationResult {
  const issues: string[] = [];
  const prefix = formatContextPrefix(question, context);

  if (!Number.isInteger(question.order) || question.order <= 0) {
    issues.push(`${prefix} Champ 'order' invalide : doit être un entier positif.`);
  }

  if (typeof question.question !== "string" || !question.question.trim()) {
    issues.push(`${prefix} L'énoncé ('question') ne peut pas être vide.`);
  }

  if (!validDifficulties.has(question.difficulty)) {
    issues.push(
      `${prefix} Difficulté '${question.difficulty}' invalide : doit être EASY, MEDIUM ou HARD.`,
    );
  }

  switch (question.format) {
    case "QRU": {
      if (!Array.isArray(question.choices) || question.choices.length === 0) {
        issues.push(`${prefix} Doit comporter au moins une proposition.`);
        break;
      }

      const correctCount = question.choices.filter((choice) => choice.correct).length;
      if (correctCount !== 1) {
        issues.push(
          `${prefix} Format QRU : doit avoir exactement 1 réponse correcte (${correctCount} trouvée(s)).`,
        );
      }
      break;
    }

    case "QRM": {
      if (!Array.isArray(question.choices) || question.choices.length === 0) {
        issues.push(`${prefix} Doit comporter au moins une proposition.`);
        break;
      }

      const correctCount = question.choices.filter((choice) => choice.correct).length;
      if (correctCount === 0) {
        issues.push(
          `${prefix} Format QRM : doit avoir au moins 1 réponse correcte (0 trouvée).`,
        );
      }
      break;
    }

    case "QRP": {
      if (!Array.isArray(question.choices) || question.choices.length === 0) {
        issues.push(`${prefix} Doit comporter au moins une proposition.`);
        break;
      }

      const reqCount = question.requiredSelectionCount;
      if (
        typeof reqCount !== "number" ||
        !Number.isInteger(reqCount) ||
        reqCount <= 0 ||
        reqCount > question.choices.length
      ) {
        issues.push(
          `${prefix} Format QRP : 'requiredSelectionCount' (${reqCount}) doit être un entier > 0 et <= au nombre de choix (${question.choices.length}).`,
        );
      }

      const correctCount = question.choices.filter((choice) => choice.correct).length;
      if (typeof reqCount === "number" && correctCount !== reqCount) {
        issues.push(
          `${prefix} Format QRP : le nombre de réponses marquées correct=true (${correctCount}) doit être égal à requiredSelectionCount (${reqCount}).`,
        );
      }
      break;
    }

    case "QRPL": {
      if (!Array.isArray(question.choices) || question.choices.length < 6) {
        issues.push(
          `${prefix} Format QRPL : doit comporter une liste longue d'au moins 6 propositions (${question.choices?.length ?? 0} trouvée(s)).`,
        );
        break;
      }

      const reqCount = question.requiredSelectionCount;
      if (
        typeof reqCount !== "number" ||
        !Number.isInteger(reqCount) ||
        reqCount <= 0 ||
        reqCount > question.choices.length
      ) {
        issues.push(
          `${prefix} Format QRPL : 'requiredSelectionCount' (${reqCount}) doit être un entier > 0 et <= au nombre de choix (${question.choices.length}).`,
        );
      }

      const correctCount = question.choices.filter((choice) => choice.correct).length;
      if (typeof reqCount === "number" && correctCount !== reqCount) {
        issues.push(
          `${prefix} Format QRPL : le nombre de réponses marquées correct=true (${correctCount}) doit être égal à requiredSelectionCount (${reqCount}).`,
        );
      }
      break;
    }

    case "QROC": {
      if (!question.answer || typeof question.answer !== "object") {
        issues.push(`${prefix} Format QROC : l'objet 'answer' est requis.`);
        break;
      }

      if (question.answer.type === "text") {
        const accepted = question.answer.acceptedAnswers;
        if (!Array.isArray(accepted) || accepted.length === 0) {
          issues.push(
            `${prefix} Format QROC texte : 'acceptedAnswers' doit comporter au moins 1 réponse non vide.`,
          );
        } else if (accepted.some((ans) => typeof ans !== "string" || !ans.trim())) {
          issues.push(
            `${prefix} Format QROC texte : toutes les réponses dans 'acceptedAnswers' doivent être des chaînes non vides.`,
          );
        }
      } else if (question.answer.type === "number") {
        const val = question.answer.value;
        if (typeof val !== "number" || !Number.isFinite(val)) {
          issues.push(
            `${prefix} Format QROC numérique : 'value' doit être un nombre valide.`,
          );
        }
        if (
          question.answer.tolerance !== undefined &&
          (typeof question.answer.tolerance !== "number" || question.answer.tolerance < 0)
        ) {
          issues.push(
            `${prefix} Format QROC numérique : 'tolerance' doit être un nombre positif ou nul.`,
          );
        }
      } else {
        issues.push(
          `${prefix} Format QROC : le type d'answer doit être 'text' ou 'number'.`,
        );
      }
      break;
    }

    case "QZONE": {
      if (!question.image || typeof question.image !== "object" || !question.image.src?.trim()) {
        issues.push(`${prefix} Format QZONE : l'image et sa source ('image.src') sont requises.`);
      }

      if (!Array.isArray(question.expectedZones) || question.expectedZones.length === 0) {
        issues.push(
          `${prefix} Format QZONE : au moins une zone attendue ('expectedZones') est requise.`,
        );
      } else {
        question.expectedZones.forEach((zone, idx) => {
          if (
            typeof zone.x !== "number" ||
            !Number.isFinite(zone.x) ||
            zone.x < 0 ||
            zone.x > 1
          ) {
            issues.push(
              `${prefix} Format QZONE zone ${idx + 1} : coordonnée x (${zone.x}) doit être comprise entre 0 et 1.`,
            );
          }
          if (
            typeof zone.y !== "number" ||
            !Number.isFinite(zone.y) ||
            zone.y < 0 ||
            zone.y > 1
          ) {
            issues.push(
              `${prefix} Format QZONE zone ${idx + 1} : coordonnée y (${zone.y}) doit être comprise entre 0 et 1.`,
            );
          }
          const tol = zone.tolerance ?? question.defaultTolerance;
          if (tol !== undefined && (typeof tol !== "number" || tol < 0)) {
            issues.push(
              `${prefix} Format QZONE zone ${idx + 1} : tolérance (${tol}) doit être un nombre >= 0.`,
            );
          }
        });
      }
      break;
    }

    default:
      issues.push(`${prefix} Format inconnu '${(question as { format?: string }).format}'.`);
  }

  return {
    isValid: issues.length === 0,
    issues,
  };
}

export function assertHealthTrainingAuthorQuestionIsValid(
  question: HealthTrainingAuthorQuestion,
  context?: HealthAuthorQuestionValidationContext,
) {
  const result = validateHealthTrainingAuthorQuestion(question, context);
  if (!result.isValid) {
    throw new Error(
      `Erreur de validation de question d'auteur Santé :\n- ${result.issues.join("\n- ")}`,
    );
  }
}
