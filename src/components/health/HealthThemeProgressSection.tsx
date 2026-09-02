'use client';

import { useMemo, useState } from 'react';
import { AlertCircle, CheckCircle2, ChevronDown, ChevronUp, HelpCircle, Info, Sparkles } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type {
  HealthCourseUnitThemeProgressSummary,
  HealthThemeMasteryStatus,
  HealthThemeProgressItem,
} from '@/core/health/health-theme-progress.types';

type HealthThemeProgressSectionProps = {
  themeProgress: HealthCourseUnitThemeProgressSummary;
};

const STATUS_CONFIG: Record<
  Exclude<HealthThemeMasteryStatus, 'INSUFFICIENT_DATA'>,
  {
    label: string;
    badgeVariant: 'destructive' | 'outline' | 'default';
    badgeClass: string;
    icon: typeof AlertCircle;
    containerClass: string;
  }
> = {
  TO_REVIEW: {
    label: 'À revoir',
    badgeVariant: 'outline',
    badgeClass:
      'border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-300',
    icon: AlertCircle,
    containerClass:
      'border-rose-200/70 bg-rose-50/30 dark:border-rose-900/40 dark:bg-rose-950/20',
  },
  TO_CONSOLIDATE: {
    label: 'À consolider',
    badgeVariant: 'outline',
    badgeClass:
      'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-300',
    icon: Sparkles,
    containerClass:
      'border-amber-200/70 bg-amber-50/30 dark:border-amber-900/40 dark:bg-amber-950/20',
  },
  SOLID: {
    label: 'Solide',
    badgeVariant: 'outline',
    badgeClass:
      'border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300',
    icon: CheckCircle2,
    containerClass:
      'border-emerald-200/70 bg-emerald-50/30 dark:border-emerald-900/40 dark:bg-emerald-950/20',
  },
};

const DEFAULT_ITEMS_LIMIT = 5;

export function HealthThemeProgressSection({
  themeProgress,
}: HealthThemeProgressSectionProps) {
  const { themes, teachingElements, hasEnoughDataForAnalysis } = themeProgress;
  const [selectedTeId, setSelectedTeId] = useState<string>('ALL');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Filtrage par Enseignement Coordonné (EC)
  const filteredThemes = useMemo(() => {
    return themes.filter((t) => {
      if (t.status === 'INSUFFICIENT_DATA') return false;
      if (selectedTeId === 'ALL') return true;
      return t.teachingElementIds.includes(selectedTeId);
    });
  }, [themes, selectedTeId]);

  // Regroupement par statut
  const themesToReview = useMemo(
    () => filteredThemes.filter((t) => t.status === 'TO_REVIEW'),
    [filteredThemes],
  );
  const themesToConsolidate = useMemo(
    () => filteredThemes.filter((t) => t.status === 'TO_CONSOLIDATE'),
    [filteredThemes],
  );
  const themesSolid = useMemo(
    () => filteredThemes.filter((t) => t.status === 'SOLID'),
    [filteredThemes],
  );

  const hasExcessThemes =
    themesToReview.length > DEFAULT_ITEMS_LIMIT ||
    themesToConsolidate.length > DEFAULT_ITEMS_LIMIT ||
    themesSolid.length > DEFAULT_ITEMS_LIMIT;

  return (
    <section aria-labelledby="health-progress-theme-heading" data-testid="health-theme-progress-section">
      <Card className="rounded-3xl border-border bg-card">
        <CardHeader className="pb-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle id="health-progress-theme-heading" className="text-lg text-heading">
                Maîtrise par thème
              </CardTitle>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="inline-flex items-center text-muted-foreground hover:text-heading"
                      aria-label="Informations sur la maîtrise par thème"
                    >
                      <Info className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs text-xs">
                    Indicateur basé sur vos dernières évaluations terminées.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* Filtres EC */}
            <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Filtres par matière">
              <Button
                variant={selectedTeId === 'ALL' ? 'default' : 'outline'}
                size="sm"
                className="h-7 text-xs rounded-full px-3"
                onClick={() => setSelectedTeId('ALL')}
                data-testid="theme-filter-all"
              >
                Tous
              </Button>
              {teachingElements.map((te) => (
                <Button
                  key={te.id}
                  variant={selectedTeId === te.id ? 'default' : 'outline'}
                  size="sm"
                  className="h-7 text-xs rounded-full px-3"
                  onClick={() => setSelectedTeId(te.id)}
                  data-testid={`theme-filter-${te.code.toLowerCase()}`}
                >
                  {te.title}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {!hasEnoughDataForAnalysis || filteredThemes.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-default p-8 text-center">
              <HelpCircle className="h-8 w-8 text-muted-foreground/60 mb-2" aria-hidden="true" />
              <p className="text-sm font-medium text-heading">
                Pas encore assez de données pour analyser votre maîtrise par thème.
              </p>
              <p className="text-xs text-muted-foreground mt-1 max-w-md">
                Réalisez des quiz, colles ou examens blancs pour commencer à observer vos points forts et les notions à revoir.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Groupe 1 : À revoir */}
              {themesToReview.length > 0 && (
                <ThemeGroup
                  status="TO_REVIEW"
                  themes={isExpanded ? themesToReview : themesToReview.slice(0, DEFAULT_ITEMS_LIMIT)}
                  totalCount={themesToReview.length}
                />
              )}

              {/* Groupe 2 : À consolider */}
              {themesToConsolidate.length > 0 && (
                <ThemeGroup
                  status="TO_CONSOLIDATE"
                  themes={
                    isExpanded
                      ? themesToConsolidate
                      : themesToConsolidate.slice(0, DEFAULT_ITEMS_LIMIT)
                  }
                  totalCount={themesToConsolidate.length}
                />
              )}

              {/* Groupe 3 : Solide */}
              {themesSolid.length > 0 && (
                <ThemeGroup
                  status="SOLID"
                  themes={isExpanded ? themesSolid : themesSolid.slice(0, DEFAULT_ITEMS_LIMIT)}
                  totalCount={themesSolid.length}
                />
              )}

              {/* Bouton d'expansion si plus de 5 thèmes */}
              {hasExcessThemes && (
                <div className="flex justify-center pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5 rounded-full text-xs"
                    onClick={() => setIsExpanded(!isExpanded)}
                    data-testid="btn-toggle-all-themes"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
                        Réduire la liste
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                        Voir tous les thèmes ({filteredThemes.length})
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}

type ThemeGroupProps = {
  status: Exclude<HealthThemeMasteryStatus, 'INSUFFICIENT_DATA'>;
  themes: HealthThemeProgressItem[];
  totalCount: number;
};

function ThemeGroup({ status, themes, totalCount }: ThemeGroupProps) {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  return (
    <div className="space-y-2.5" data-testid={`theme-group-${status.toLowerCase()}`}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-heading" aria-hidden="true" />
          <h4 className="text-sm font-bold text-heading">{config.label}</h4>
          <Badge variant="outline" className="text-xs px-2 py-0 h-5">
            {totalCount} thème{totalCount > 1 ? 's' : ''}
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        {themes.map((theme) => (
          <ThemeRow key={theme.themeId} theme={theme} />
        ))}
      </div>
    </div>
  );
}

type ThemeRowProps = {
  theme: HealthThemeProgressItem;
};

function ThemeRow({ theme }: ThemeRowProps) {
  const config =
    theme.status !== 'INSUFFICIENT_DATA' ? STATUS_CONFIG[theme.status] : null;

  const quizPart =
    theme.sources.quiz?.percentage !== null &&
    theme.sources.quiz?.percentage !== undefined
      ? `Quiz ${theme.sources.quiz.percentage} %`
      : 'Quiz —';

  const collesPart =
    theme.sources.colles?.percentage !== null &&
    theme.sources.colles?.percentage !== undefined
      ? `Colles ${theme.sources.colles.percentage} %`
      : 'Colles —';

  const mockExamsPart =
    theme.sources.mockExams?.percentage !== null &&
    theme.sources.mockExams?.percentage !== undefined
      ? `EB ${theme.sources.mockExams.percentage} %`
      : 'EB —';

  return (
    <div
      className="flex flex-col gap-1.5 rounded-xl border border-default bg-neutral-secondary-soft/60 px-3.5 py-2.5 transition-colors hover:bg-neutral-secondary-soft sm:flex-row sm:items-center sm:justify-between"
      data-testid={`theme-row-${theme.themeId}`}
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm text-heading truncate">
            {theme.title}
          </span>
          {config && (
            <Badge
              variant={config.badgeVariant}
              className={`text-[11px] font-medium shrink-0 ${config.badgeClass}`}
            >
              {config.label}
            </Badge>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2 pt-0.5 text-xs text-muted-foreground">
          <span>
            {quizPart} · {collesPart} · {mockExamsPart}
          </span>
          <span className="text-muted-foreground/60">·</span>
          <span>
            {theme.totalQuestionsEvaluated} question
            {theme.totalQuestionsEvaluated > 1 ? 's' : ''} évaluée
            {theme.totalQuestionsEvaluated > 1 ? 's' : ''}
          </span>
        </div>
      </div>
    </div>
  );
}
