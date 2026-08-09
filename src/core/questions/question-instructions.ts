import type { Question } from "./question.types";

function formatPropositionCount(count: number) {
  return `${count} proposition${count > 1 ? "s" : ""}`;
}

export function getQuestionSelectionLimit(question: Question) {
  if (
    question.type !== "mcq" ||
    question.requiredSelectionCount === undefined ||
    question.requiredSelectionCount <= 0
  ) {
    return null;
  }

  return question.requiredSelectionCount;
}

export function getQuestionFormatStudentInstruction(question: Question) {
  switch (question.format) {
    case "QRU":
      return "Sélectionnez une seule proposition.";
    case "QRM":
      return "Sélectionnez toutes les propositions exactes.";
    case "QRP": {
      const selectionLimit = getQuestionSelectionLimit(question);
      return selectionLimit
        ? `Sélectionnez exactement ${formatPropositionCount(selectionLimit)}.`
        : "Sélectionnez le nombre de propositions demandé dans l'énoncé.";
    }
    case "QRPL": {
      const selectionLimit = getQuestionSelectionLimit(question);
      return selectionLimit
        ? `Sélectionnez exactement ${formatPropositionCount(selectionLimit)} dans la liste longue.`
        : "Sélectionnez le nombre de propositions demandé dans la liste longue.";
    }
    case "QROC":
      return question.type === "short-answer" && question.answerType === "number"
        ? "Saisissez une réponse numérique courte, en chiffres."
        : "Rédigez une réponse courte.";
    case "QROL":
      return "Rédigez une réponse longue.";
    case "QZONE":
      return "Pointez la zone demandée sur le support.";
    case "QTCS":
      return "Répondez selon la concordance de script demandée.";
    case "matching":
      return "Associez chaque élément à la réponse correspondante.";
    default:
      break;
  }

  if (question.type === "mcq") {
    return question.selectionMode === "single"
      ? "Sélectionnez une seule proposition."
      : "Sélectionnez toutes les propositions exactes.";
  }

  if (question.type === "short-answer") {
    return "Rédigez une réponse courte.";
  }

  if (question.type === "hotspot") {
    return "Pointez la zone demandée sur le support.";
  }

  return "Répondez à la question selon la consigne affichée.";
}
