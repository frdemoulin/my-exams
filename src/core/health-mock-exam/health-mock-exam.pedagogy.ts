import type {
  HealthMockExamPedagogicalAssessment,
  HealthMockExamResultQuestion,
  PedagogicalAssessmentTheme,
} from "./health-mock-exam.types";

type GroupAccumulator = {
  id: string;
  label: string;
  score: number;
  maxScore: number;
  questionCount: number;
  questionIds: Set<string>;
};

export function buildHealthMockExamPedagogicalAssessment(
  questions: HealthMockExamResultQuestion[]
): HealthMockExamPedagogicalAssessment {
  if (questions.length === 0) {
    return {
      strengths: [],
      toReview: [],
      neutralMessage: "Aucune question disponible pour établir un bilan pédagogique.",
    };
  }

  const groups = new Map<string, GroupAccumulator>();

  for (const question of questions) {
    const seenThemeIds = new Set<string>();

    for (const theme of question.themes) {
      if (seenThemeIds.has(theme.id)) {
        continue;
      }

      seenThemeIds.add(theme.id);

      let group = groups.get(theme.id);
      if (!group) {
        group = {
          id: theme.id,
          label: theme.label,
          score: 0,
          maxScore: 0,
          questionCount: 0,
          questionIds: new Set<string>(),
        };
        groups.set(theme.id, group);
      }

      if (group.questionIds.has(question.id)) {
        continue;
      }

      group.questionIds.add(question.id);
      group.score += question.score;
      group.maxScore += question.maxScore;
      group.questionCount += 1;
    }
  }

  const validThemes: PedagogicalAssessmentTheme[] = [];
  for (const group of groups.values()) {
    if (group.maxScore <= 0 || group.questionCount <= 0) {
      continue;
    }

    const masteryPercentage = Math.round((group.score / group.maxScore) * 100);
    validThemes.push({
      id: group.id,
      label: group.label,
      masteryPercentage,
      score: Math.round(group.score * 100) / 100,
      maxScore: Math.round(group.maxScore * 100) / 100,
      questionCount: group.questionCount,
    });
  }

  const strengths = validThemes
    .filter((t) => t.masteryPercentage >= 80)
    .sort((a, b) => b.masteryPercentage - a.masteryPercentage || b.questionCount - a.questionCount)
    .slice(0, 3);

  const toReview = validThemes
    .filter((t) => t.masteryPercentage < 60)
    .sort((a, b) => a.masteryPercentage - b.masteryPercentage || b.questionCount - a.questionCount)
    .slice(0, 3);

  const neutralMessage =
    strengths.length === 0 && toReview.length === 0
      ? "Cette tentative ne fait pas émerger de points forts ou de thèmes à retravailler selon les seuils actuels."
      : null;

  return {
    strengths,
    toReview,
    neutralMessage,
  };
}
