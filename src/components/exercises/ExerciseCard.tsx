/**
 * Composant ExerciseCard
 * Affiche un exercice d'annales avec traçabilité du sujet parent
 */

'use client';

import { ExternalLink } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { ExerciseWithRelations } from '@/core/exercise';
import { getInternalOrigin, isExternalUrl, normalizeExamPaperLabel } from '@/lib/utils';
import { ExerciseMetaLine } from '@/components/exercises/ExerciseMetaLine';
import { ClickThroughHint } from '@/components/shared/click-through-hint';

interface ExerciseCardProps {
  exercise: ExerciseWithRelations;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

function DifficultyDots({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`h-1.5 w-1.5 rounded-full ${
            dot <= value ? 'bg-brand' : 'bg-muted'
          }`}
        />
      ))}
    </div>
  );
}

export function ExerciseCard({
  exercise,
  isFavorite = false,
  onToggleFavorite,
}: ExerciseCardProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {
    id,
    title,
    exerciseNumber,
    label,
    points,
    estimatedDuration,
    estimatedDifficulty,
    themes,
    examPaper,
  } = exercise;

  const {
    label: paperLabel,
    sessionYear,
    source,
    sourceUrl,
    diploma,
    teaching,
    grade,
  } = examPaper;

  const internalOrigin = getInternalOrigin();
  const sourceUrlIsExternal = isExternalUrl(sourceUrl, internalOrigin);

  const baseTitle = `Exercice ${exerciseNumber}`;
  const displayTitleRaw = title || label || baseTitle;
  const normalize = (s: string) =>
    s
      .replace(/\s+/g, ' ')
      .replace(/–/g, '-')
      .trim()
      .toLowerCase();
  const domains = Array.from(
    new Map(
      themes
        .filter((t) => t.domain)
        .map((t) => [
          t.domain!.id,
          {
            short: t.domain!.shortDescription || t.domain!.longDescription,
            long: t.domain!.longDescription,
            key: t.domain!.id,
          },
        ])
    ).values()
  ).sort((a, b) => a.long.localeCompare(b.long, 'fr', { sensitivity: 'base' }));
  const summaryText = exercise.summary?.trim() || '';
  const normalizedPaperLabel = normalizeExamPaperLabel(paperLabel);
  const traceabilityFooter = normalizedPaperLabel
    ? `Issu du sujet ${normalizedPaperLabel}`
    : `Session ${sessionYear}`;
  const fullTitle =
    normalize(displayTitleRaw).startsWith(normalize(baseTitle))
      ? displayTitleRaw
      : `${baseTitle} – ${displayTitleRaw}`;
  const normalizeSourceLabel = (value?: string | null) => {
    const raw = value?.trim();
    if (!raw) return "Officiel";
    switch (raw) {
      case "OFFICIEL":
        return "Officiel";
      case "APMEP":
        return "APMEP";
      case "LABOLYCEE":
        return "LaboLycée";
      case "AUTRE":
        return "Autre";
      default:
        return raw;
    }
  };
  const sourceLabel = normalizeSourceLabel(source);
  const sourceLabelNode =
    sourceLabel.toLowerCase() === "officiel" ? (
      <>
        <span className="md:hidden">Officiel</span>
        <span className="hidden md:inline">Sujet officiel</span>
      </>
    ) : (
      sourceLabel
    );
  const search = searchParams?.toString();
  const returnTo = pathname ? (search ? `${pathname}?${search}` : pathname) : null;
  const exerciseHref = returnTo
    ? { pathname: `/exercices/${id}`, query: { returnTo } }
    : `/exercices/${id}`;

  return (
    <Card className="group relative overflow-hidden transition-all hover:border-brand/50 focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2 focus-within:ring-offset-background">
      <Link
        href={exerciseHref}
        aria-label={`Ouvrir ${fullTitle}`}
        className="absolute inset-0 z-0 focus-visible:outline-none"
        onClick={() => {
          try {
            sessionStorage.setItem('my-exams:search-restore', '1');
          } catch {
            // ignore storage errors
          }
        }}
      />
      <CardHeader className="relative z-10 pb-3 pointer-events-none">
        <div className="flex w-full flex-wrap items-start gap-2 md:flex-nowrap md:items-center">
          <div className="flex flex-wrap items-center gap-1 text-xs font-semibold text-muted-foreground">
            <span>{diploma.shortDescription}</span>
            <span>•</span>
            <span>{teaching.subject.shortDescription}</span>
            {grade?.shortDescription && (
              <>
                <span>•</span>
                <span>{grade.shortDescription}</span>
              </>
            )}
          </div>
          <div className="flex w-full flex-wrap items-center gap-2 md:ml-auto md:w-auto md:justify-end">
            <ExerciseMetaLine
              variant="chips"
              sessionYear={sessionYear}
              duration={estimatedDuration}
              difficulty={estimatedDifficulty}
              points={points ?? null}
            />
            {sourceUrl ? (
              <Button asChild variant="secondary" size="xs" className="rounded-lg">
                <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                  {sourceLabelNode}
                  {sourceUrlIsExternal && <ExternalLink className="ml-1.5 h-3 w-3" />}
                </a>
              </Button>
            ) : (
              <Button variant="secondary" size="xs" className="rounded-lg">
                {sourceLabelNode}
              </Button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg text-fg-brand hover:text-heading hover:underline">
            {fullTitle}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 flex flex-col gap-2 p-4 pt-0 pointer-events-none">
        {summaryText && (
          <div className="flex flex-col gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge
                    variant="outline"
                    className="w-fit cursor-help text-[10px] uppercase pointer-events-auto"
                  >
                    Résumé assisté par IA
                  </Badge>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs text-xs font-normal leading-relaxed">
                  Résumé généré avec l&apos;aide d&apos;une intelligence artificielle et relu par
                  l&apos;équipe My Exams. Résumé indicatif, l&apos;énoncé officiel fait foi.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <p className="text-sm text-muted-foreground">
              {summaryText}
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-baseline gap-2 text-xs md:text-sm">
          {domains.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-muted-foreground">Domaines :</span>
              {domains.map((domain) => (
                <Badge key={domain.key} variant="outline" className="gap-1.5 text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                  <span className="hidden md:inline">{domain.long}</span>
                  <span className="md:hidden">{domain.short}</span>
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-baseline justify-between gap-2 pt-1 text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground font-bold text-xs md:text-sm">{traceabilityFooter}</span>
            <ClickThroughHint text="Clique sur la carte pour voir le détail de l'exercice." />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
