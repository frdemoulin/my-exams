export type HealthEvaluationSemanticState =
  | "success"
  | "error"
  | "warning"
  | "neutral";

export const HEALTH_EVALUATION_COLOR_LEGEND = [
  {
    state: "success" as const,
    colorName: "Vert",
    label: "Acquis / réponse correcte",
    details: "Plein crédit, réponse correcte, point fort",
    badgeClassName: "bg-emerald-600 text-white",
    borderClassName: "border-emerald-400 bg-emerald-500/10 dark:border-emerald-800 dark:bg-emerald-950/20",
    dotClassName: "bg-emerald-600",
  },
  {
    state: "error" as const,
    colorName: "Rouge",
    label: "Erreur / notion à retravailler",
    details: "Erreur commise, proposition fausse sélectionnée, à retravailler",
    badgeClassName: "bg-rose-600 text-white",
    borderClassName: "border-rose-400 bg-rose-500/10 dark:border-rose-800 dark:bg-rose-950/20",
    dotClassName: "bg-rose-600",
  },
  {
    state: "warning" as const,
    colorName: "Orange",
    label: "Réponse attendue omise / à compléter",
    details: "Proposition exacte omise, réponse incomplète",
    badgeClassName: "bg-amber-600 text-white",
    borderClassName: "border-amber-400 bg-amber-500/10 dark:border-amber-800 dark:bg-amber-950/20",
    dotClassName: "bg-amber-600",
  },
  {
    state: "neutral" as const,
    colorName: "Gris",
    label: "Neutre / non sélectionné correctement",
    details: "Proposition inexacte non sélectionnée, état neutre",
    badgeClassName: "bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300",
    borderClassName: "border-border/70 bg-card/40 opacity-80",
    dotClassName: "bg-neutral-400 dark:bg-neutral-500",
  },
] as const;

export function resolveChoiceSemanticState(input: {
  isCorrect: boolean;
  isSelected: boolean;
}): HealthEvaluationSemanticState {
  if (input.isCorrect && input.isSelected) {
    return "success";
  }
  if (!input.isCorrect && input.isSelected) {
    return "error";
  }
  if (input.isCorrect && !input.isSelected) {
    return "warning";
  }
  return "neutral";
}

export function resolveQuestionSemanticState(input: {
  evaluationStatus: "correct" | "partial" | "incorrect" | string;
}): HealthEvaluationSemanticState {
  if (input.evaluationStatus === "correct") {
    return "success";
  }
  if (input.evaluationStatus === "incorrect") {
    return "error";
  }
  if (input.evaluationStatus === "partial") {
    return "warning";
  }
  return "neutral";
}
