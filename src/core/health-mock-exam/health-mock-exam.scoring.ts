export type HealthMockExamScoreQuestion = {
  selectedChoiceIndexes: readonly number[];
  correctChoiceIndexes: readonly number[];
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
  let maxScore = 0;

  const scoredSections = sections.map((section) => {
    let sectionScore = 0;

    for (const question of section.questions) {
      maxScore += 1;

      if (question.selectedChoiceIndexes.length === 0) {
        continue;
      }

      answeredQuestionCount += 1;

      if (
        areChoiceIndexSetsEqual(
          question.selectedChoiceIndexes,
          question.correctChoiceIndexes,
        )
      ) {
        sectionScore += 1;
        correctQuestionCount += 1;
      } else {
        incorrectQuestionCount += 1;
      }
    }

    const sectionMaxScore = section.questions.length;

    return {
      examSectionId: section.examSectionId,
      score: sectionScore,
      maxScore: sectionMaxScore,
      percentage:
        sectionMaxScore === 0 ? 0 : Math.round((sectionScore / sectionMaxScore) * 100),
    };
  });

  return {
    score: correctQuestionCount,
    maxScore,
    percentage: maxScore === 0 ? 0 : Math.round((correctQuestionCount / maxScore) * 100),
    answeredQuestionCount,
    correctQuestionCount,
    incorrectQuestionCount,
    unansweredQuestionCount: maxScore - answeredQuestionCount,
    sections: scoredSections,
  };
}
