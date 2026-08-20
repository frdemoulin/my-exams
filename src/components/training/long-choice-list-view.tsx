'use client';

import React, { useState, useMemo } from 'react';
import { Search, X, CheckCircle2, XCircle, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { TrainingChoiceContentView } from './training-choice-content-view';
import {
  getTrainingChoicePlainText,
  type TrainingChoiceContent,
} from '@/core/training/training-choice-content';
import { cn } from '@/lib/utils';

interface LongChoiceListViewProps {
  choices: TrainingChoiceContent[];
  selectedIndexes: number[];
  correctIndexes?: number[];
  selectionLimit?: number | null;
  onSelectChoice: (choiceIndex: number) => void;
  isAnswerLocked?: boolean;
  isReviewMode?: boolean;
  isFinalCorrectionOnly?: boolean;
  showCorrection?: boolean;
  choiceExplanations?: string[];
  testIdPrefix?: string;
}

export function LongChoiceListView({
  choices,
  selectedIndexes,
  correctIndexes = [],
  selectionLimit = null,
  onSelectChoice,
  isAnswerLocked = false,
  isReviewMode = false,
  isFinalCorrectionOnly = false,
  showCorrection = false,
  testIdPrefix = 'choice',
}: LongChoiceListViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredChoices = useMemo(() => {
    return choices
      .map((choice, originalIndex) => {
        const textContent = getTrainingChoicePlainText(choice);

        return {
          choice,
          originalIndex,
          textContent,
          matchesSearch: !normalizedQuery || textContent.toLowerCase().includes(normalizedQuery),
        };
      })
      .filter((item) => item.matchesSearch);
  }, [choices, normalizedQuery]);

  const selectedCount = selectedIndexes.length;
  const isLimitReached =
    selectionLimit !== null && selectedCount >= selectionLimit;

  return (
    <div className="space-y-3">
      {/* Search Bar & Counter Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filtrer les propositions..."
            className="!pl-9 !pr-8 h-9 text-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Selection Counter Badge */}
        <div className="flex items-center gap-2">
          {selectionLimit !== null && (
            <Badge
              variant={isLimitReached ? 'default' : 'outline'}
              className={cn(
                'text-xs font-semibold px-2.5 py-1 transition-colors',
                isLimitReached
                  ? 'bg-brand text-white border-brand'
                  : 'text-muted-foreground border-border'
              )}
            >
              {selectedCount} / {selectionLimit} sélectionné{selectionLimit > 1 ? 's' : ''}
            </Badge>
          )}

          {normalizedQuery && (
            <span className="text-xs text-muted-foreground">
              {filteredChoices.length} résultat{filteredChoices.length > 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>

      {/* Choice Items Container */}
      <div className="grid gap-2.5 max-h-[500px] overflow-y-auto pr-1">
        {filteredChoices.length === 0 ? (
          <div className="p-6 text-center text-xs text-muted-foreground border border-dashed rounded-xl bg-card">
            Aucune proposition ne correspond à &quot;{searchQuery}&quot;.
          </div>
        ) : (
          filteredChoices.map(({ choice, originalIndex }) => {
            const isSelected = selectedIndexes.includes(originalIndex);
            const isRightChoice = correctIndexes.includes(originalIndex);
            const isDisabledByLimit =
              !isSelected && isLimitReached && !isAnswerLocked;
            const showSelectedAsIncorrect =
              showCorrection && isSelected && !isRightChoice && (isReviewMode || !isFinalCorrectionOnly);
            const showAsCorrect =
              isRightChoice &&
              ((isReviewMode && isSelected) || (!isReviewMode && !isFinalCorrectionOnly && isAnswerLocked));
            const showAsMissedExpected = isReviewMode && isRightChoice && !isSelected;

            return (
              <button
                key={originalIndex}
                type="button"
                disabled={isAnswerLocked || isDisabledByLimit}
                onClick={() => onSelectChoice(originalIndex)}
                data-testid={`${testIdPrefix}-${originalIndex}`}
                className={cn(
                  'flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3 text-left text-sm transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  !isAnswerLocked && !isDisabledByLimit && 'hover:border-brand/50 hover:bg-neutral-secondary-soft',
                  isDisabledByLimit && 'cursor-not-allowed opacity-50',
                  showAsCorrect && 'border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100',
                  isReviewMode && isSelected && isRightChoice && 'ring-2 ring-emerald-400/70',
                  showAsMissedExpected && 'border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100',
                  showSelectedAsIncorrect && 'border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-100',
                  !isAnswerLocked && isSelected && 'border-brand bg-brand-soft/15 ring-2 ring-brand/20'
                )}
              >
                <span className="flex min-w-0 flex-1 items-baseline gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center self-baseline rounded-full border border-brand bg-brand text-xs font-semibold leading-none text-white shadow-xs">
                    {originalIndex + 1}
                  </span>
                  <span className="min-w-0 flex-1 self-baseline">
                    <TrainingChoiceContentView choice={choice} />
                  </span>
                </span>

                {showAsCorrect ? (
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                ) : showSelectedAsIncorrect ? (
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
                ) : isSelected && !showCorrection ? (
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                ) : null}

                {isReviewMode && (
                  <span className="flex shrink-0 flex-wrap justify-end gap-1 self-start">
                    {isSelected && (
                      <Badge
                        variant="outline"
                        className={cn(
                          'text-[11px]',
                          isRightChoice
                            ? 'border-emerald-400 bg-emerald-100 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-100'
                            : 'border-rose-400 bg-rose-100 text-rose-900 dark:border-rose-800 dark:bg-rose-950 dark:text-rose-100'
                        )}
                      >
                        Ton choix
                      </Badge>
                    )}
                    {isRightChoice && (
                      <Badge
                        variant="outline"
                        className={cn(
                          'text-[11px]',
                          isSelected
                            ? 'border-emerald-400 bg-emerald-100 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-100'
                            : 'border-amber-400 bg-amber-100 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100'
                        )}
                      >
                        Attendue
                      </Badge>
                    )}
                  </span>
                )}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
