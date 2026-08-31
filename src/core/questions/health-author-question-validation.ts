import type {
  HealthTrainingAuthorQuestion,
} from "./health-author-question.types";
import { isReimsMigratedChapter } from "./reims-migrated-chapters";

export type HealthAuthorQuestionValidationContext = {
  fileName?: string;
  chapterSlug?: string;
  quizSlug?: string;
  strict5Choices?: boolean;
  checkAutonomy?: boolean;
};

export type HealthAuthorQuestionValidationResult = {
  isValid: boolean;
  issues: string[];
};

const validDifficulties = new Set(["EASY", "MEDIUM", "HARD"]);

const forbiddenAutonomyPatterns = [
  /selon\s+la\s+fiche/i,
  /d['’]après\s+la\s+fiche/i,
  /dans\s+la\s+fiche/i,
  /d['’]après\s+le\s+cours/i,
  /selon\s+le\s+cours/i,
  /dans\s+le\s+cours/i,
  /tutorat\s+précise/i,
  /dans\s+le\s+document/i,
  /selon\s+le\s+document/i,
  /document\s+fourni/i,
];

function checkAutonomyText(text: string, fieldName: string, prefix: string, issues: string[]) {
  for (const pattern of forbiddenAutonomyPatterns) {
    if (pattern.test(text)) {
      issues.push(
        `${prefix} Non-respect de l'autonomie de la question dans '${fieldName}' : contient une référence externe interdite ('${text.match(pattern)?.[0]}').`,
      );
    }
  }
}

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
  const isMigrated = isReimsMigratedChapter(context?.chapterSlug);
  const shouldCheck5Choices = context?.strict5Choices ?? (isMigrated || Boolean(question.reims5Items));
  const shouldCheckAutonomy = context?.checkAutonomy ?? (isMigrated || Boolean(question.reims5Items));

  if (!Number.isInteger(question.order) || question.order <= 0) {
    issues.push(`${prefix} Champ 'order' invalide : doit être un entier positif.`);
  }

  if (typeof question.question !== "string" || !question.question.trim()) {
    issues.push(`${prefix} L'énoncé ('question') ne peut pas être vide.`);
  } else if (shouldCheckAutonomy) {
    checkAutonomyText(question.question, "question", prefix, issues);
  }

  if (question.explanation && shouldCheckAutonomy) {
    checkAutonomyText(question.explanation, "explanation", prefix, issues);
  }

  if (!validDifficulties.has(question.difficulty)) {
    issues.push(
      `${prefix} Difficulté '${question.difficulty}' invalide : doit être EASY, MEDIUM ou HARD.`,
    );
  }

  if ("choices" in question && Array.isArray(question.choices) && shouldCheckAutonomy) {
    question.choices.forEach((choice, idx) => {
      if (typeof choice.content === "string") {
        checkAutonomyText(choice.content, `choices[${idx}].content`, prefix, issues);
      }
      if (choice.explanation) {
        checkAutonomyText(choice.explanation, `choices[${idx}].explanation`, prefix, issues);
      }
    });
  }

  switch (question.format) {
    case "QRU": {
      if (!Array.isArray(question.choices) || question.choices.length === 0) {
        issues.push(`${prefix} Doit comporter au moins une proposition.`);
        break;
      }

      if (shouldCheck5Choices && question.choices.length !== 5) {
        issues.push(
          `${prefix} Format QRU (Reims 5 items) : doit comporter exactement 5 propositions (${question.choices.length} trouvée(s)).`,
        );
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

      if (shouldCheck5Choices && question.choices.length !== 5) {
        issues.push(
          `${prefix} Format QRM (Reims 5 items) : doit comporter exactement 5 propositions (${question.choices.length} trouvée(s)).`,
        );
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

      if (shouldCheck5Choices && question.choices.length !== 5) {
        issues.push(
          `${prefix} Format QRP (Reims 5 items) : doit comporter exactement 5 propositions (${question.choices.length} trouvée(s)).`,
        );
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
      if (
        !Array.isArray(question.choices) ||
        question.choices.length < 6 ||
        question.choices.length > 25
      ) {
        issues.push(
          `${prefix} Format QRPL : doit comporter une liste longue de 6 à 25 propositions (${question.choices?.length ?? 0} trouvée(s)).`,
        );
        break;
      }

      const reqCount = question.requiredSelectionCount;
      if (
        typeof reqCount !== "number" ||
        !Number.isInteger(reqCount) ||
        reqCount < 1 ||
        reqCount > 5 ||
        reqCount > question.choices.length
      ) {
        issues.push(
          `${prefix} Format QRPL : 'requiredSelectionCount' (${reqCount}) doit être compris entre 1 et 5, et <= au nombre de choix (${question.choices.length}).`,
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
        if (question.answer.unit !== undefined) {
          if (typeof question.answer.unit !== "string" || !question.answer.unit.trim()) {
            issues.push(
              `${prefix} Format QROC numérique : 'unit' doit être une chaîne non vide.`,
            );
          }
        }
        if (question.answer.displayUnit !== undefined) {
          if (typeof question.answer.displayUnit !== "string" || !question.answer.displayUnit.trim()) {
            issues.push(
              `${prefix} Format QROC numérique : 'displayUnit' doit être une chaîne non vide.`,
            );
          }
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
