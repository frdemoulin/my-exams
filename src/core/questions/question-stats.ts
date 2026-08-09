import type { EvaluationResult, Question } from "./question.types";
import {
  getQuestionFormatDefinition,
  getQuestionFormatDisplayLabel,
  normalizeQuestionFormat,
  type QuestionFormatCode,
} from "./question-format";

export type UnessFormatStatItem = {
  format: QuestionFormatCode;
  formatDisplayLabel: string;
  shortLabel: string;
  totalCount: number;
  answeredCount: number;
  correctCount: number;
  score: number;
  maxScore: number;
  successRate: number;
};

export type CalculateUnessFormatStatsInput = {
  question: Question;
  evaluation?: EvaluationResult | null;
  answered?: boolean;
};

export function calculateUnessFormatStats(
  items: CalculateUnessFormatStatsInput[],
): UnessFormatStatItem[] {
  const statsMap = new Map<
    QuestionFormatCode,
    {
      totalCount: number;
      answeredCount: number;
      correctCount: number;
      score: number;
      maxScore: number;
    }
  >();

  items.forEach(({ question, evaluation, answered = true }) => {
    const format = normalizeQuestionFormat(question.format);
    const stat = statsMap.get(format) ?? {
      totalCount: 0,
      answeredCount: 0,
      correctCount: 0,
      score: 0,
      maxScore: 0,
    };

    stat.totalCount += 1;
    const maxScore = evaluation?.maxScore ?? question.points ?? 1;
    stat.maxScore += maxScore;

    if (answered && evaluation && evaluation.status !== "unanswered") {
      stat.answeredCount += 1;
      const score = evaluation.score ?? (evaluation.status === "correct" ? maxScore : 0);
      stat.score += score;
      if (evaluation.status === "correct") {
        stat.correctCount += 1;
      }
    }

    statsMap.set(format, stat);
  });

  return Array.from(statsMap.entries())
    .map(([format, stat]) => {
      const definition = getQuestionFormatDefinition(format);
      const successRate =
        stat.maxScore > 0 ? Math.round((stat.score / stat.maxScore) * 100) : 0;

      return {
        format,
        formatDisplayLabel: getQuestionFormatDisplayLabel(format),
        shortLabel: definition.shortLabel,
        totalCount: stat.totalCount,
        answeredCount: stat.answeredCount,
        correctCount: stat.correctCount,
        score: stat.score,
        maxScore: stat.maxScore,
        successRate,
      };
    })
    .sort((left, right) => right.totalCount - left.totalCount);
}
