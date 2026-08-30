"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Flag } from "lucide-react";

import { cn } from "@/lib/utils";

export type SessionQuestionState = "answered" | "marked" | "unanswered";

export type CorrectionQuestionState =
  | "full_credit"
  | "partial_credit"
  | "incorrect"
  | "unanswered";

export type QuestionNavigatorSessionItem = {
  id: string;
  order: number;
  formatCode: string;
  state: SessionQuestionState;
  markedForReview?: boolean;
  ariaLabel?: string;
  testId?: string;
};

export type QuestionNavigatorCorrectionItem = {
  id: string;
  order: number;
  formatCode: string;
  state: CorrectionQuestionState;
  score?: number;
  maxScore?: number;
  ariaLabel?: string;
  testId?: string;
};

export type HealthQuestionNavigatorProps =
  | {
      mode: "session";
      items: QuestionNavigatorSessionItem[];
      currentIndex: number;
      onSelectIndex: (index: number) => void;
      title?: string;
      counterText?: React.ReactNode;
      ariaLabel?: string;
      testId?: string;
    }
  | {
      mode: "correction";
      items: QuestionNavigatorCorrectionItem[];
      currentIndex: number;
      onSelectIndex: (index: number) => void;
      title?: string;
      counterText?: React.ReactNode;
      ariaLabel?: string;
      testId?: string;
    };

function getSessionNavButtonClass(state: SessionQuestionState, isCurrent: boolean): string {
  if (isCurrent) {
    return "border-brand bg-brand text-white hover:bg-brand-strong hover:text-white";
  }
  switch (state) {
    case "marked":
      return "bg-amber-500 text-white shadow-xs hover:bg-amber-600 hover:text-white";
    case "answered":
      return "bg-slate-300 text-slate-950 hover:bg-slate-400 hover:text-slate-950 dark:bg-slate-600 dark:text-white dark:hover:bg-slate-500 dark:hover:text-white";
    case "unanswered":
    default:
      return "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200";
  }
}

function getCorrectionNavButtonClass(
  state: CorrectionQuestionState,
  isCurrent: boolean,
): string {
  if (isCurrent) {
    return "border-brand bg-brand text-white hover:bg-brand-strong hover:text-white";
  }
  switch (state) {
    case "full_credit":
      return "bg-emerald-500/15 text-emerald-800 hover:bg-emerald-500/25 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-950/60 border border-emerald-500/30";
    case "partial_credit":
      return "bg-amber-500/15 text-amber-800 hover:bg-amber-500/25 dark:bg-amber-950/40 dark:text-amber-300 dark:hover:bg-amber-950/60 border border-amber-500/30";
    case "incorrect":
      return "bg-rose-500/15 text-rose-800 hover:bg-rose-500/25 dark:bg-rose-950/40 dark:text-rose-300 dark:hover:bg-rose-950/60 border border-rose-500/30";
    case "unanswered":
    default:
      return "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200";
  }
}

export function HealthQuestionNavigator(props: HealthQuestionNavigatorProps) {
  const {
    mode,
    items,
    currentIndex,
    onSelectIndex,
    title = "Questions",
    counterText,
    ariaLabel = "Navigation des questions",
    testId = "health-question-navigator",
  } = props;

  const [blockSize, setBlockSize] = useState(10);
  const navScrollRef = useRef<HTMLDivElement | null>(null);
  const navItemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setBlockSize(5);
      } else if (width < 1024) {
        setBlockSize(8);
      } else {
        setBlockSize(10);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalBlocks = Math.max(1, Math.ceil(items.length / blockSize));
  const hasMultipleBlocks = totalBlocks > 1;
  const targetBlockIndex = Math.max(
    0,
    Math.min(totalBlocks - 1, Math.floor(currentIndex / blockSize)),
  );

  const [activeBlockIndex, setActiveBlockIndex] = useState(0);

  useEffect(() => {
    setActiveBlockIndex(targetBlockIndex);
  }, [targetBlockIndex]);

  const canGoPreviousBlock = activeBlockIndex > 0;
  const canGoNextBlock = activeBlockIndex < totalBlocks - 1;

  const goToPreviousBlock = () => {
    if (canGoPreviousBlock) {
      setActiveBlockIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const goToNextBlock = () => {
    if (canGoNextBlock) {
      setActiveBlockIndex((prev) => Math.min(totalBlocks - 1, prev + 1));
    }
  };

  const visibleSlice = items.slice(
    activeBlockIndex * blockSize,
    (activeBlockIndex + 1) * blockSize,
  );

  return (
    <nav
      aria-label={ariaLabel}
      data-testid={testId}
      className="rounded-2xl border border-border bg-card p-2 sm:p-3 shadow-xs space-y-3"
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </p>
        {counterText ? (
          <span className="text-xs font-medium text-muted-foreground">
            {counterText}
          </span>
        ) : null}
      </div>

      <div className="flex items-center overflow-hidden rounded-xl border border-border bg-background">
        {hasMultipleBlocks ? (
          <button
            type="button"
            onClick={goToPreviousBlock}
            disabled={!canGoPreviousBlock}
            aria-label="Faire défiler les questions vers la gauche"
            className={cn(
              "shrink-0 flex h-14 w-7 sm:w-8 items-center justify-center text-foreground transition-colors border-r border-border",
              !canGoPreviousBlock
                ? "opacity-30 cursor-not-allowed bg-muted/40"
                : "bg-background hover:bg-neutral-secondary-medium cursor-pointer",
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        ) : null}

        <div ref={navScrollRef} className="flex-1 min-w-0 overflow-x-auto no-scrollbar">
          <ol className="flex min-w-full">
            {visibleSlice.map((item, sliceIndex) => {
              const globalIndex = activeBlockIndex * blockSize + sliceIndex;
              const isCurrent = globalIndex === currentIndex;

              const buttonClass =
                mode === "session"
                  ? getSessionNavButtonClass(
                      (item as QuestionNavigatorSessionItem).state,
                      isCurrent,
                    )
                  : getCorrectionNavButtonClass(
                      (item as QuestionNavigatorCorrectionItem).state,
                      isCurrent,
                    );

              const defaultAriaLabel = `Question ${item.order} sur ${items.length} — ${item.formatCode}`;
              const ariaLabelText = item.ariaLabel ?? defaultAriaLabel;
              const isMarked =
                mode === "session" &&
                (item as QuestionNavigatorSessionItem).markedForReview;

              return (
                <li
                  key={item.id}
                  className="min-w-0 flex-1 border-r border-border last:border-r-0"
                >
                  <button
                    ref={(el) => {
                      navItemRefs.current[globalIndex] = el;
                    }}
                    type="button"
                    onClick={() => onSelectIndex(globalIndex)}
                    aria-current={isCurrent ? "page" : undefined}
                    aria-label={ariaLabelText}
                    data-testid={item.testId ?? `health-question-nav-${item.order}`}
                    className={cn(
                      "flex h-14 w-full flex-col items-center justify-center px-0.5 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset",
                      buttonClass,
                    )}
                  >
                    <div className="flex items-center gap-0.5">
                      <span className="text-base font-bold leading-none">
                        {item.order}
                      </span>
                      {isMarked && !isCurrent ? (
                        <Flag className="h-2.5 w-2.5 fill-current" aria-hidden="true" />
                      ) : null}
                    </div>
                    <span className="mt-1 text-xs font-semibold uppercase font-mono tracking-tight leading-none opacity-90">
                      {item.formatCode}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {hasMultipleBlocks ? (
          <button
            type="button"
            onClick={goToNextBlock}
            disabled={!canGoNextBlock}
            aria-label="Faire défiler les questions vers la droite"
            className={cn(
              "shrink-0 flex h-14 w-7 sm:w-8 items-center justify-center text-foreground transition-colors border-l border-border",
              !canGoNextBlock
                ? "opacity-30 cursor-not-allowed bg-muted/40"
                : "bg-background hover:bg-neutral-secondary-medium cursor-pointer",
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      {mode === "session" ? (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-brand" />
            Question en cours
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-slate-500"
            />
            Réponse enregistrée
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-amber-500" />
            À revoir
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full border border-slate-300 dark:border-slate-600 bg-transparent"
            />
            Non répondue
          </span>
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-brand" />
            Question en cours
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Plein crédit
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-amber-500" />
            Crédit partiel
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-rose-500" />
            Incorrecte
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full border border-slate-300 dark:border-slate-600 bg-transparent"
            />
            Non répondue
          </span>
        </div>
      )}
    </nav>
  );
}
