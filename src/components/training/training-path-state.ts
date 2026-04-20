import type {
  TrainingPathOverviewSection,
  TrainingPathProgress,
  TrainingPathQuizProgress,
  TrainingPathStepStatus,
} from '@/core/training';

export type TrainingPathDerivedQuiz = TrainingPathOverviewSection['quizzes'][number] & {
  isAccessible: boolean;
  isMastered: boolean;
  isStarted: boolean;
  progress: TrainingPathQuizProgress | null;
  status: TrainingPathStepStatus;
};

export type TrainingPathDerivedSection = Omit<TrainingPathOverviewSection, 'quizzes'> & {
  isAccessible: boolean;
  isMastered: boolean;
  quizzes: TrainingPathDerivedQuiz[];
  status: TrainingPathStepStatus;
};

export type TrainingPathDerivedState = {
  activeSection: TrainingPathDerivedSection | null;
  completedQuizCount: number;
  completionRate: number;
  hasLockedSections: boolean;
  masteredSectionCount: number;
  nextRecommendedQuiz: TrainingPathDerivedQuiz | null;
  sections: TrainingPathDerivedSection[];
  totalQuizCount: number;
};

export const deriveTrainingPathState = ({
  isAuthenticated,
  progress,
  sections,
}: {
  isAuthenticated: boolean;
  progress: TrainingPathProgress;
  sections: TrainingPathOverviewSection[];
}): TrainingPathDerivedState => {
  const validatedQuizSlugs = new Set(progress.validatedQuizSlugs);
  let previousSectionMastered = true;

  const derivedSections = sections.map((section, sectionIndex) => {
    const isAccessible = isAuthenticated || sectionIndex === 0;

    const quizzes = section.quizzes.map((quiz) => {
      const quizProgress = progress.quizProgressBySlug[quiz.slug] ?? null;
      const isMastered = validatedQuizSlugs.has(quiz.slug);
      const isStarted = Boolean(quizProgress);
      const status: TrainingPathStepStatus = !isAccessible
        ? 'locked'
        : isMastered
          ? 'mastered'
          : isStarted
            ? 'in-progress'
            : 'available';

      return {
        ...quiz,
        isAccessible,
        isMastered,
        isStarted,
        progress: quizProgress,
        status,
      };
    });

    const isMastered = quizzes.length > 0 && quizzes.every((quiz) => quiz.isMastered);
    const hasStarted = quizzes.some((quiz) => quiz.isStarted || quiz.isMastered);
    const status: TrainingPathStepStatus = !isAccessible
      ? 'locked'
      : isMastered
        ? 'mastered'
        : hasStarted
          ? 'in-progress'
          : 'available';

    previousSectionMastered = isMastered;

    return {
      ...section,
      isAccessible,
      isMastered,
      quizzes,
      status,
    };
  });

  const activeSection =
    derivedSections.find((section) => section.isAccessible && !section.isMastered) ?? null;
  const nextRecommendedQuiz =
    activeSection?.quizzes.find((quiz) => !quiz.isMastered) ?? null;
  const completedQuizCount = derivedSections.reduce(
    (total, section) => total + section.quizzes.filter((quiz) => quiz.isMastered).length,
    0
  );
  const totalQuizCount = derivedSections.reduce(
    (total, section) => total + section.quizzes.length,
    0
  );

  return {
    activeSection,
    completedQuizCount,
    completionRate:
      totalQuizCount === 0
        ? 0
        : Math.round((completedQuizCount / totalQuizCount) * 100),
    hasLockedSections: derivedSections.some((section) => section.status === 'locked'),
    masteredSectionCount: derivedSections.filter((section) => section.isMastered).length,
    nextRecommendedQuiz,
    sections: derivedSections,
    totalQuizCount,
  };
};