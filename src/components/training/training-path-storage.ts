import type { TrainingPathProgress } from '@/core/training';

const STORAGE_PREFIX = 'my-exams:training-path:';
const STORAGE_VERSION = 1 as const;
const TRAINING_PATH_PROGRESS_EVENT = 'my-exams:training-path-progress-changed';

type TrainingPathProgressEventDetail = {
  chapterSlug: string;
  progress: TrainingPathProgress;
};

type TrainingPathProgressSyncPayload = {
  quizId: string;
  quizSlug: string;
  score: number;
  totalQuestions: number;
};

type ApplyTrainingQuizAttemptParams = {
  progress: TrainingPathProgress;
  quizSlug: string;
  score: number;
  targetScore: number;
  totalQuestions: number;
  completedAt?: string;
};

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

const getTrainingPathStorageKey = (chapterSlug: string) => {
  return `${STORAGE_PREFIX}${chapterSlug}`;
};

const getEmptyTrainingPathProgressIfNeeded = (
  chapterSlug: string,
  progress?: TrainingPathProgress
) => progress ?? createEmptyTrainingPathProgress(chapterSlug);

const hasQuizProgressEntries = (progress: TrainingPathProgress) => {
  return Object.keys(progress.quizProgressBySlug).length > 0;
};

const toIsoStringOrFallback = (value: string | null | undefined, fallback: string) => {
  return typeof value === 'string' && value.length > 0 ? value : fallback;
};

const getEarliestIsoString = (left: string | null, right: string | null) => {
  if (!left) {
    return right;
  }

  if (!right) {
    return left;
  }

  return left <= right ? left : right;
};

const getLatestIsoString = (left: string, right: string) => {
  return left >= right ? left : right;
};

export const emitTrainingPathProgressChange = ({
  chapterSlug,
  progress,
}: TrainingPathProgressEventDetail) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.dispatchEvent(
    new CustomEvent<TrainingPathProgressEventDetail>(TRAINING_PATH_PROGRESS_EVENT, {
      detail: {
        chapterSlug,
        progress,
      },
    })
  );
};

export const createEmptyTrainingPathProgress = (
  chapterSlug: string
): TrainingPathProgress => ({
  version: STORAGE_VERSION,
  chapterSlug,
  quizProgressBySlug: {},
  validatedQuizSlugs: [],
  updatedAt: new Date().toISOString(),
});

const sanitizeTrainingPathProgress = (
  chapterSlug: string,
  rawValue: unknown
): TrainingPathProgress => {
  const emptyProgress = createEmptyTrainingPathProgress(chapterSlug);

  if (!isRecord(rawValue)) {
    return emptyProgress;
  }

  const quizProgressBySlug = isRecord(rawValue.quizProgressBySlug)
    ? Object.fromEntries(
        Object.entries(rawValue.quizProgressBySlug).flatMap(([quizSlug, value]) => {
          if (!isRecord(value)) {
            return [];
          }

          const bestScore = Number(value.bestScore);
          const totalQuestions = Number(value.totalQuestions);
          const successRate = Number(value.successRate);
          const completedAt =
            typeof value.completedAt === 'string' ? value.completedAt : null;
          const validatedAt =
            typeof value.validatedAt === 'string' ? value.validatedAt : null;

          if (
            !Number.isFinite(bestScore) ||
            !Number.isFinite(totalQuestions) ||
            !Number.isFinite(successRate) ||
            !completedAt
          ) {
            return [];
          }

          return [
            [
              quizSlug,
              {
                bestScore,
                totalQuestions,
                successRate,
                completedAt,
                validatedAt,
              },
            ],
          ];
        })
      )
    : {};

  const validatedQuizSlugs = Array.isArray(rawValue.validatedQuizSlugs)
    ? rawValue.validatedQuizSlugs.filter(
        (quizSlug): quizSlug is string => typeof quizSlug === 'string'
      )
    : [];

  return {
    version: STORAGE_VERSION,
    chapterSlug,
    quizProgressBySlug,
    validatedQuizSlugs: Array.from(new Set(validatedQuizSlugs)),
    updatedAt:
      typeof rawValue.updatedAt === 'string'
        ? rawValue.updatedAt
        : emptyProgress.updatedAt,
  };
};

export const clearStoredTrainingPathProgress = (chapterSlug: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem(getTrainingPathStorageKey(chapterSlug));
  } catch {
    return;
  }
};

export const readTrainingPathProgress = (
  chapterSlug: string
): TrainingPathProgress => {
  if (typeof window === 'undefined') {
    return createEmptyTrainingPathProgress(chapterSlug);
  }

  try {
    const rawValue = localStorage.getItem(getTrainingPathStorageKey(chapterSlug));

    if (!rawValue) {
      return createEmptyTrainingPathProgress(chapterSlug);
    }

    return sanitizeTrainingPathProgress(chapterSlug, JSON.parse(rawValue));
  } catch {
    return createEmptyTrainingPathProgress(chapterSlug);
  }
};

export const resetTrainingPathProgress = (chapterSlug: string) => {
  const emptyProgress = createEmptyTrainingPathProgress(chapterSlug);

  if (typeof window === 'undefined') {
    return emptyProgress;
  }

  try {
    localStorage.removeItem(getTrainingPathStorageKey(chapterSlug));
  } catch {
    return emptyProgress;
  }

  emitTrainingPathProgressChange({
    chapterSlug,
    progress: emptyProgress,
  });

  return emptyProgress;
};

export const applyTrainingQuizAttempt = ({
  progress,
  quizSlug,
  score,
  targetScore,
  totalQuestions,
  completedAt = new Date().toISOString(),
}: ApplyTrainingQuizAttemptParams): TrainingPathProgress => {
  const previousQuizProgress = progress.quizProgressBySlug[quizSlug];
  const successRate =
    totalQuestions === 0 ? 0 : Math.round((score / totalQuestions) * 100);
  const bestScore = Math.max(previousQuizProgress?.bestScore ?? 0, score);
  const bestSuccessRate = Math.max(
    previousQuizProgress?.successRate ?? 0,
    successRate
  );
  const shouldValidate =
    bestSuccessRate >= targetScore || Boolean(previousQuizProgress?.validatedAt);

  return {
    ...progress,
    quizProgressBySlug: {
      ...progress.quizProgressBySlug,
      [quizSlug]: {
        bestScore,
        totalQuestions,
        successRate: bestSuccessRate,
        completedAt,
        validatedAt: shouldValidate
          ? previousQuizProgress?.validatedAt ?? completedAt
          : null,
      },
    },
    validatedQuizSlugs: shouldValidate
      ? Array.from(new Set([...progress.validatedQuizSlugs, quizSlug]))
      : progress.validatedQuizSlugs,
    updatedAt: completedAt,
  };
};

export const mergeTrainingPathProgress = ({
  chapterSlug,
  baseProgress,
  incomingProgress,
}: {
  chapterSlug: string;
  baseProgress?: TrainingPathProgress;
  incomingProgress?: TrainingPathProgress;
}): TrainingPathProgress => {
  const nextBaseProgress = getEmptyTrainingPathProgressIfNeeded(
    chapterSlug,
    baseProgress
  );
  const nextIncomingProgress = getEmptyTrainingPathProgressIfNeeded(
    chapterSlug,
    incomingProgress
  );
  const fallbackCompletedAt = getLatestIsoString(
    nextBaseProgress.updatedAt,
    nextIncomingProgress.updatedAt
  );
  const mergedQuizProgressBySlug = {
    ...nextBaseProgress.quizProgressBySlug,
  };

  for (const [quizSlug, incomingEntry] of Object.entries(
    nextIncomingProgress.quizProgressBySlug
  )) {
    const existingEntry = mergedQuizProgressBySlug[quizSlug];

    if (!existingEntry) {
      mergedQuizProgressBySlug[quizSlug] = incomingEntry;
      continue;
    }

    mergedQuizProgressBySlug[quizSlug] = {
      bestScore: Math.max(existingEntry.bestScore, incomingEntry.bestScore),
      totalQuestions: Math.max(
        existingEntry.totalQuestions,
        incomingEntry.totalQuestions
      ),
      successRate: Math.max(existingEntry.successRate, incomingEntry.successRate),
      completedAt: getLatestIsoString(
        toIsoStringOrFallback(existingEntry.completedAt, fallbackCompletedAt),
        toIsoStringOrFallback(incomingEntry.completedAt, fallbackCompletedAt)
      ),
      validatedAt: getEarliestIsoString(
        existingEntry.validatedAt,
        incomingEntry.validatedAt
      ),
    };
  }

  return {
    version: STORAGE_VERSION,
    chapterSlug,
    quizProgressBySlug: mergedQuizProgressBySlug,
    validatedQuizSlugs: Array.from(
      new Set([
        ...nextBaseProgress.validatedQuizSlugs,
        ...nextIncomingProgress.validatedQuizSlugs,
      ])
    ),
    updatedAt: fallbackCompletedAt,
  };
};

const getTrainingPathProgressSyncPayloads = ({
  guestProgress,
  serverProgress,
  quizIdBySlug,
}: {
  guestProgress: TrainingPathProgress;
  serverProgress: TrainingPathProgress;
  quizIdBySlug: Map<string, string>;
}): TrainingPathProgressSyncPayload[] => {
  return Object.entries(guestProgress.quizProgressBySlug).flatMap(
    ([quizSlug, guestEntry]) => {
      const quizId = quizIdBySlug.get(quizSlug);

      if (!quizId) {
        return [];
      }

      const serverEntry = serverProgress.quizProgressBySlug[quizSlug];
      const shouldSync =
        !serverEntry ||
        guestEntry.bestScore > serverEntry.bestScore ||
        guestEntry.successRate > serverEntry.successRate ||
        guestEntry.totalQuestions > serverEntry.totalQuestions ||
        (Boolean(guestEntry.validatedAt) && !serverEntry.validatedAt);

      if (!shouldSync) {
        return [];
      }

      return [
        {
          quizId,
          quizSlug,
          score: guestEntry.bestScore,
          totalQuestions: guestEntry.totalQuestions,
        },
      ];
    }
  );
};

export const syncGuestTrainingPathProgressToAccount = async ({
  chapterId,
  chapterSlug,
  quizIdBySlug,
  serverProgress,
  targetScore,
}: {
  chapterId: string;
  chapterSlug: string;
  quizIdBySlug: Map<string, string>;
  serverProgress?: TrainingPathProgress;
  targetScore: number;
}): Promise<TrainingPathProgress> => {
  const nextServerProgress = getEmptyTrainingPathProgressIfNeeded(
    chapterSlug,
    serverProgress
  );
  const guestProgress = readTrainingPathProgress(chapterSlug);

  if (!hasQuizProgressEntries(guestProgress)) {
    return nextServerProgress;
  }

  const syncPayloads = getTrainingPathProgressSyncPayloads({
    guestProgress,
    serverProgress: nextServerProgress,
    quizIdBySlug,
  });

  if (syncPayloads.length === 0) {
    clearStoredTrainingPathProgress(chapterSlug);
    return nextServerProgress;
  }

  let syncedProgress = nextServerProgress;

  for (const syncPayload of syncPayloads) {
    const response = await fetch('/api/training/path-progress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chapterId,
        chapterSlug,
        quizId: syncPayload.quizId,
        score: syncPayload.score,
        targetScore,
        totalQuestions: syncPayload.totalQuestions,
      }),
    });

    if (!response.ok) {
      throw new Error('Impossible de synchroniser la progression locale.');
    }

    const payload = (await response.json()) as {
      progress?: TrainingPathProgress;
    };

    if (payload.progress) {
      syncedProgress = payload.progress;
    }
  }

  clearStoredTrainingPathProgress(chapterSlug);

  return syncedProgress;
};

export const updateTrainingPathProgress = ({
  chapterSlug,
  quizSlug,
  score,
  targetScore,
  totalQuestions,
}: {
  chapterSlug: string;
  quizSlug: string;
  score: number;
  targetScore: number;
  totalQuestions: number;
}) => {
  const currentProgress = readTrainingPathProgress(chapterSlug);
  const nextProgress = applyTrainingQuizAttempt({
    progress: currentProgress,
    quizSlug,
    score,
    targetScore,
    totalQuestions,
  });

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(
        getTrainingPathStorageKey(chapterSlug),
        JSON.stringify(nextProgress)
      );
      emitTrainingPathProgressChange({
        chapterSlug,
        progress: nextProgress,
      });
    } catch {
      return nextProgress;
    }
  }

  return nextProgress;
};

export const getNextAvailableTrainingQuizSlug = ({
  orderedQuizSlugs,
  progress,
}: {
  orderedQuizSlugs: string[];
  progress: TrainingPathProgress;
}) => {
  const validatedQuizSlugs = new Set(progress.validatedQuizSlugs);

  return orderedQuizSlugs.find((quizSlug) => !validatedQuizSlugs.has(quizSlug)) ?? null;
};

export const isTrainingQuizAccessible = ({
  orderedQuizSlugs,
  progress,
  quizSlug,
}: {
  orderedQuizSlugs: string[];
  progress: TrainingPathProgress;
  quizSlug: string;
}) => {
  const validatedQuizSlugs = new Set(progress.validatedQuizSlugs);

  if (validatedQuizSlugs.has(quizSlug)) {
    return true;
  }

  return getNextAvailableTrainingQuizSlug({ orderedQuizSlugs, progress }) === quizSlug;
};

export const subscribeToTrainingPathProgress = ({
  chapterSlug,
  onProgressChange,
}: {
  chapterSlug: string;
  onProgressChange: (progress: TrainingPathProgress) => void;
}) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const storageKey = getTrainingPathStorageKey(chapterSlug);

  const handleStorage = (event: StorageEvent) => {
    if (event.key !== null && event.key !== storageKey) {
      return;
    }

    onProgressChange(readTrainingPathProgress(chapterSlug));
  };

  const handleCustomProgressChange = (event: Event) => {
    const customEvent = event as CustomEvent<TrainingPathProgressEventDetail>;

    if (customEvent.detail?.chapterSlug !== chapterSlug) {
      return;
    }

    onProgressChange(customEvent.detail.progress);
  };

  window.addEventListener('storage', handleStorage);
  window.addEventListener(TRAINING_PATH_PROGRESS_EVENT, handleCustomProgressChange);

  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(
      TRAINING_PATH_PROGRESS_EVENT,
      handleCustomProgressChange
    );
  };
};