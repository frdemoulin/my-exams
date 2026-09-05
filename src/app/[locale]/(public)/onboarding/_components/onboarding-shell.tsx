'use client';

import type { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type OnboardingShellProps = {
  step: 1 | 2 | 3;
  totalSteps?: number;
  academicYearCode: string;
  badge?: string;
  badgeVariant?: 'secondary' | 'outline' | 'default';
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function OnboardingShell({
  step,
  totalSteps = 3,
  academicYearCode,
  badge,
  badgeVariant = 'secondary',
  title,
  description,
  children,
  footer,
}: OnboardingShellProps) {
  const progressPercent = Math.min(Math.max((step / totalSteps) * 100, 0), 100);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 sm:space-y-8">
      {/* INDICATEUR D'ÉTAPE RESPONSIVE */}
      <div className="space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <span>
            Étape {step} sur {totalSteps}
          </span>
          <span>Année {academicYearCode}</span>
        </div>
        <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-brand h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* CARTE PRINCIPALE DE L'ÉTAPE */}
      <Card className="border-border bg-card">
        <CardHeader className="space-y-3 p-6 sm:p-8 lg:p-10 pb-4 sm:pb-6 lg:pb-6">
          {badge ? (
            <Badge variant={badgeVariant} className="w-fit">
              {badge}
            </Badge>
          ) : null}
          <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-heading">
            {title}
          </CardTitle>
          {description ? (
            <CardDescription className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
              {description}
            </CardDescription>
          ) : null}
        </CardHeader>
        <CardContent className="p-6 sm:p-8 lg:p-10 pt-2 sm:pt-2 lg:pt-2">
          {children}
          {footer ? <div className="mt-8 pt-6 border-t border-border">{footer}</div> : null}
        </CardContent>
      </Card>
    </div>
  );
}
