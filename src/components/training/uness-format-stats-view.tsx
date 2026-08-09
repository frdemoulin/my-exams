'use client';

import React from 'react';
import { LayoutGrid, CheckCircle2 } from 'lucide-react';
import type { UnessFormatStatItem } from '@/core/questions/question-stats';
import { QuestionFormatBadge } from './question-format-badge';
import { cn } from '@/lib/utils';

interface UnessFormatStatsViewProps {
  stats: UnessFormatStatItem[];
  className?: string;
}

export function UnessFormatStatsView({
  stats,
  className,
}: UnessFormatStatsViewProps) {
  if (stats.length === 0) {
    return null;
  }

  return (
    <div className={cn('space-y-4 rounded-2xl border border-border bg-card p-5 shadow-xs', className)}>
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <LayoutGrid className="w-4 h-4 text-brand" />
          <h3 className="text-sm font-semibold text-heading">
            Performance par format UNESS
          </h3>
        </div>
        <span className="text-xs text-muted-foreground">
          {stats.reduce((acc, curr) => acc + curr.totalCount, 0)} questions évaluées
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const isHighRate = stat.successRate >= 80;
          const isMediumRate = stat.successRate >= 50 && stat.successRate < 80;

          return (
            <div
              key={stat.format}
              className="flex flex-col justify-between p-3.5 rounded-xl border border-border/80 bg-background/80 hover:bg-background transition-colors space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <QuestionFormatBadge format={stat.format} />
                <span
                  className={cn(
                    'text-xs font-bold px-2 py-0.5 rounded-full border',
                    isHighRate
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800'
                      : isMediumRate
                      ? 'bg-sky-50 text-sky-800 border-sky-300 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800'
                      : 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800'
                  )}
                >
                  {stat.successRate}%
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    {stat.correctCount} / {stat.totalCount} réussie{stat.totalCount > 1 ? 's' : ''}
                  </span>
                  <span className="font-semibold text-heading">
                    {stat.score} / {stat.maxScore} pt{stat.maxScore > 1 ? 's' : ''}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-secondary-soft">
                  <div
                    className={cn(
                      'h-full rounded-full transition-all duration-300',
                      isHighRate
                        ? 'bg-emerald-500 dark:bg-emerald-400'
                        : isMediumRate
                        ? 'bg-sky-500 dark:bg-sky-400'
                        : 'bg-amber-500 dark:bg-amber-400'
                    )}
                    style={{ width: `${stat.successRate}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
