'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock3, FileCheck2, ShieldCheck, ArrowRight } from 'lucide-react';
import type { HealthColleV1 } from '@/core/health-colle';

type HealthColleCardProps = {
  colle: HealthColleV1;
  onStartClick: (colle: HealthColleV1) => void;
};

export function HealthColleCard({ colle, onStartClick }: HealthColleCardProps) {
  const getBadgeVariant = (badgeType: HealthColleV1['badgeType']) => {
    switch (badgeType) {
      case 'GRANDE_COLLE':
        return 'default';
      case 'CUMULATIVE_EC':
        return 'secondary';
      case 'CUMULATIVE':
        return 'outline';
      case 'TRANSVERSALE':
      default:
        return 'outline';
    }
  };

  return (
    <Card className="rounded-2xl border-border bg-card transition-all hover:border-brand/40 hover:shadow-sm">
      <CardContent className="p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="font-semibold text-fg-brand border-brand/30">
                {colle.code}
              </Badge>
              <Badge variant={getBadgeVariant(colle.badgeType)}>
                {colle.badgeLabel}
              </Badge>
              {colle.ecCode ? (
                <span className="text-xs font-medium text-muted-foreground">
                  {colle.ecCode}
                </span>
              ) : null}
            </div>

            <h3 className="text-base font-semibold text-heading tracking-tight truncate">
              {colle.title}
            </h3>

            <p className="text-xs text-muted-foreground line-clamp-1">
              Périmètre : <span className="font-medium text-body">{colle.dominantPerimeter}</span>
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <FileCheck2 className="h-3.5 w-3.5 text-fg-brand" aria-hidden="true" />
                {colle.questionCount} questions
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-3.5 w-3.5 text-fg-brand" aria-hidden="true" />
                {colle.durationLabel}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1 font-medium text-heading">
                <ShieldCheck className="h-3.5 w-3.5 text-fg-brand" aria-hidden="true" />
                Notation UNESS
              </span>
            </div>
          </div>

          <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-default">
            <Button
              size="sm"
              className="w-full sm:w-auto gap-1.5"
              onClick={() => onStartClick(colle)}
            >
              Commencer
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
