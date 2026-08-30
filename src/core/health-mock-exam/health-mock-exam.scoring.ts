import {
  areChoiceIdSetsEqual,
  evaluateMcqIndexAnswer,
  evaluateQuestion,
  getCorrectChoiceIds,
  type EvaluationResult,
  type McqStudentAnswer,
  type MultipleChoiceQuestion,
  type Question,
  type QuestionScoringStrategy,
  type StudentAnswer,
} from "@/core/questions";

export type HealthMockExamScoreQuestion = {
  question?: Question;
  answer?: StudentAnswer | null;
  selectedChoiceIndexes?: readonly number[];
  correctChoiceIndexes?: readonly number[];
};

export type HealthMockExamScoreSection = {
  examSectionId: string;
  questions: HealthMockExamScoreQuestion[];
};

export type HealthMockExamScoreResult = {
  score: number;
  maxScore: number;
  percentage: number;
  answeredQuestionCount: number;
  correctQuestionCount: number;
  incorrectQuestionCount: number;
  unansweredQuestionCount: number;
  sections: Array<{
    examSectionId: string;
    score: number;
    maxScore: number;
    percentage: number;
  }>;
};

export function areChoiceIndexSetsEqual(
  left: readonly number[],
  right: readonly number[],
) {
  if (left.length !== right.length) return false;
  const sortedLeft = [...left].sort((a, b) => a - b);
  const sortedRight = [...right].sort((a, b) => a - b);

  return sortedLeft.every((value, index) => value === sortedRight[index]);
}

/**
 * Barème des évaluations sommatives Santé (colles + examens blancs).
 *
 * - QRU : tout ou rien.
 * - QRM : barème UNESS par discordance (100 % / 50 % / 20 % / 0 %).
 * - QRP / QRPL : barème "réponses justes" x/n.
 * - QROC / QZONE : évaluateurs canoniques existants.
 *
 * Les quiz de chapitre ne passent pas par ce résolveur et conservent donc
 * leur notation pédagogique actuelle.
 */
export function resolveHealthAssessmentScoringStrategy(
  question: Question,
): QuestionScoringStrategy | undefined {
  if (question.type !== "mcq") {
    return undefined;
  }

  switch (question.format) {
    case "QRM":
      return "discordance";
    case "QRP":
    case "QRPL":
      return "partial";
    case "QRU":
    default:
      return "all-or-nothing";
  }
}

function evaluateRequiredSelectionQuestion(
  question: MultipleChoiceQuestion,
  answer: McqStudentAnswer | null | undefined,
): EvaluationResult {
  const maxScore = question.points ?? 1;
  const correctChoiceIds = getCorrectChoiceIds(question);
  const selectedChoiceIds = Array.from(
    new Set(answer?.type === "mcq" ? answer.selectedChoiceIds : []),
  ).filter((choiceId) => question.choices.some((choice) => choice.id === choiceId));

  if (selectedChoiceIds.length === 0) {
    return {
      questionId: question.id,
      status: "unanswered",
      score: 0,
      maxScore,
      details: {
        scoringStrategy: "partial",
        selectedChoiceIds,
        correctChoiceIds,
        expectedSelectionCount: question.requiredSelectionCount ?? null,
      },
    };
  }

  const expectedSelectionCount = question.requiredSelectionCount;
  const hasValidConfiguration =
    expectedSelectionCount !== undefined &&
    expectedSelectionCount > 0 &&
    correctChoiceIds.length === expectedSelectionCount;
  const hasExpectedSelectionCount =
    expectedSelectionCount !== undefined &&
    selectedChoiceIds.length === expectedSelectionCount;

  const missingChoiceIds = correctChoiceIds.filter(
    (choiceId) => !selectedChoiceIds.includes(choiceId),
  );
  const extraChoiceIds = selectedChoiceIds.filter(
    (choiceId) => !correctChoiceIds.includes(choiceId),
  );
  const correctlySelectedChoiceIds = selectedChoiceIds.filter((choiceId) =>
    correctChoiceIds.includes(choiceId),
  );

  const isCorrect =
    hasValidConfiguration &&
    hasExpectedSelectionCount &&
    areChoiceIdSetsEqual(selectedChoiceIds, correctChoiceIds);

  if (isCorrect) {
    return {
      questionId: question.id,
      status: "correct",
      score: maxScore,
      maxScore,
      details: {
        scoringStrategy: "partial",
        selectedChoiceIds,
        correctChoiceIds,
        missingChoiceIds,
        extraChoiceIds,
        correctlySelectedChoiceIds,
        expectedSelectionCount,
      },
    };
  }

  if (!hasValidConfiguration || !hasExpectedSelectionCount) {
    return {
      questionId: question.id,
      status: "incorrect",
      score: 0,
      maxScore,
      details: {
        scoringStrategy: "partial",
        selectedChoiceIds,
        correctChoiceIds,
        missingChoiceIds,
        extraChoiceIds,
        correctlySelectedChoiceIds,
        expectedSelectionCount: expectedSelectionCount ?? null,
        reason: !hasValidConfiguration
          ? "invalid-required-selection-configuration"
          : "invalid-selection-count",
      },
    };
  }

  const score =
    maxScore * (correctlySelectedChoiceIds.length / correctChoiceIds.length);

  return {
    questionId: question.id,
    status: score > 0 ? "partial" : "incorrect",
    score,
    maxScore,
    details: {
      scoringStrategy: "partial",
      selectedChoiceIds,
      correctChoiceIds,
      missingChoiceIds,
      extraChoiceIds,
      correctlySelectedChoiceIds,
      expectedSelectionCount,
      correctSelectionRatio:
        correctlySelectedChoiceIds.length / correctChoiceIds.length,
    },
  };
}

export function evaluateHealthAssessmentQuestion(
  question: Question,
  answer: StudentAnswer | null | undefined,
): EvaluationResult {
  const scoringStrategy = resolveHealthAssessmentScoringStrategy(question);

  if (question.type === "mcq" && scoringStrategy === "partial") {
    return evaluateRequiredSelectionQuestion(
      question,
      answer?.type === "mcq" ? answer : null,
    );
  }

  return evaluateQuestion(question, answer, scoringStrategy);
}

const roundScore = (value: number) =>
  Math.round((value + Number.EPSILON) * 10_000) / 10_000;

export function scoreHealthMockExamAttempt(
  sections: readonly HealthMockExamScoreSection[],
): HealthMockExamScoreResult {
  let answeredQuestionCount = 0;
  let correctQuestionCount = 0;
  let incorrectQuestionCount = 0;
  let score = 0;
  let maxScore = 0;
  let questionCount = 0;

  const scoredSections = sections.map((section) => {
    let sectionScore = 0;
    let sectionMaxScore = 0;

    for (const [questionIndex, question] of section.questions.entries()) {
      questionCount += 1;
      const evaluation = question.question
        ? evaluateHealthAssessmentQuestion(question.question, question.answer)
        : evaluateMcqIndexAnswer({
            questionId: `${section.examSectionId}-${questionIndex + 1}`,
            selectedChoiceIndexes: question.selectedChoiceIndexes ?? [],
            correctChoiceIndexes: question.correctChoiceIndexes ?? [],
          });

      maxScore += evaluation.maxScore;
      sectionMaxScore += evaluation.maxScore;

      if (evaluation.status === "unanswered") {
        continue;
      }

      answeredQuestionCount += 1;
      score += evaluation.score;
      sectionScore += evaluation.score;

      if (evaluation.status === "correct") {
        correctQuestionCount += 1;
      } else {
        incorrectQuestionCount += 1;
      }
    }

    return {
      examSectionId: section.examSectionId,
      score: roundScore(sectionScore),
      maxScore: sectionMaxScore,
      percentage:
        sectionMaxScore === 0 ? 0 : Math.round((sectionScore / sectionMaxScore) * 100),
    };
  });

  return {
    score: roundScore(score),
    maxScore,
    percentage: maxScore === 0 ? 0 : Math.round((score / maxScore) * 100),
    answeredQuestionCount,
    correctQuestionCount,
    incorrectQuestionCount,
    unansweredQuestionCount: questionCount - answeredQuestionCount,
    sections: scoredSections,
  };
}
