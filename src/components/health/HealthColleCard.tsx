'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { HealthColleV1 } from '@/core/health-colle';

type HealthColleCardProps = {
  colle: HealthColleV1;
  index: number;
  onStartClick: (colle: HealthColleV1) => void;
};

export function HealthColleCard({ colle, onStartClick }: HealthColleCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-default bg-card p-4 transition-colors hover:bg-neutral-secondary-soft sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3 min-w-0 flex-1">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-secondary-soft text-xs font-semibold text-heading">
          {colle.code}
        </span>
        <div className="space-y-1 min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-medium text-heading text-base truncate">{colle.title}</h3>
            <Badge variant="outline">{colle.badgeLabel}</Badge>
            {colle.ecCode ? (
              <Badge variant="secondary" className="text-xs">
                {colle.ecCode}
              </Badge>
            ) : null}
          </div>
          <p className="text-xs italic text-body line-clamp-1">
            {colle.scopeLine}
          </p>
          <p className="text-xs text-muted-foreground line-clamp-1">
            {colle.contentLine}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground pt-0.5">
            <span>{colle.questionCount} questions</span>
            <span>·</span>
            <span>{colle.durationLabel}</span>
            <span>·</span>
            <span>Notation UNESS</span>
          </div>
        </div>
      </div>

      <div className="shrink-0 pt-2 sm:pt-0">
        <Button size="sm" className="w-full sm:w-auto gap-2" onClick={() => onStartClick(colle)}>
          Commencer
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
