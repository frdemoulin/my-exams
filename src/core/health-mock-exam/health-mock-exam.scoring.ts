import {
  evaluateMcqIndexAnswer,
  evaluateQuestion,
  type Question,
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
        ? evaluateQuestion(question.question, question.answer, "discordance")
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
      score: sectionScore,
      maxScore: sectionMaxScore,
      percentage:
        sectionMaxScore === 0 ? 0 : Math.round((sectionScore / sectionMaxScore) * 100),
    };
  });

  return {
    score,
    maxScore,
    percentage: maxScore === 0 ? 0 : Math.round((score / maxScore) * 100),
    answeredQuestionCount,
    correctQuestionCount,
    incorrectQuestionCount,
    unansweredQuestionCount: questionCount - answeredQuestionCount,
    sections: scoredSections,
  };
}
