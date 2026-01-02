/**
 * Composant ExerciseCard
 * Affiche un exercice d'annales avec traçabilité du sujet parent
 */

'use client';

import { Heart, Clock, ExternalLink } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
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
import type { ExerciseWithRelations } from '@/core/exercise';
import { getInternalOrigin, isExternalUrl } from '@/lib/utils';

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
    updatedAt,
    diploma,
    teaching,
    subjectUrl,
    grade,
    correctionUrl: paperCorrectionUrl,
  } = examPaper;

  const correctionUrl = exercise.correctionUrl || paperCorrectionUrl || exercise.corrections[0]?.url || null;
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
  const difficultyLabel = (() => {
    if (!estimatedDifficulty) return null;
    if (estimatedDifficulty >= 4) return '⚡ Difficile';
    if (estimatedDifficulty === 3) return '⚡ Moyenne';
    if (estimatedDifficulty === 2) return '⚡ Facile';
    return '⚡ Très facile';
  })();
  const notions = themes
    .map((t) => ({
      short: t.shortDescription || t.longDescription,
      long: t.longDescription,
      key: t.id,
    }))
    .sort((a, b) => a.long.localeCompare(b.long, 'fr', { sensitivity: 'base' }));
  const durationLabel = estimatedDuration
    ? estimatedDuration >= 60
      ? `${Math.floor(estimatedDuration / 60)}h${estimatedDuration % 60 ? ` ${estimatedDuration % 60}min` : ''}`
      : `${estimatedDuration} min`
    : null;
  const summaryText = exercise.summary?.trim() || '';
  const traceabilityFooter = paperLabel
    ? `Issu du sujet ${paperLabel}`
    : `Session ${sessionYear}`;
  const fullTitle =
    normalize(displayTitleRaw).startsWith(normalize(baseTitle))
      ? displayTitleRaw
      : `${baseTitle} – ${displayTitleRaw}`;
  const sourceLabel = (() => {
    const rawSource = source ?? 'OFFICIEL';
    switch (rawSource) {
      case 'APMEP':
        return 'APMEP';
      case 'LABOLYCEE':
        return 'LaboLycée';
      case 'AUTRE':
        return 'Autre source';
      default:
        return 'Officiel';
    }
  })();
  const sourceLabelNode =
    sourceLabel === "Officiel" ? (
      <>
        <span className="md:hidden">Officiel</span>
        <span className="hidden md:inline">Sujet officiel</span>
      </>
    ) : (
      sourceLabel
    );
  const subjectUrlVersioned = (() => {
    if (!subjectUrl) return null;
    const version = updatedAt ? new Date(updatedAt).getTime() : Date.now();
    return subjectUrl.includes('?')
      ? `${subjectUrl}&v=${version}`
      : `${subjectUrl}?v=${version}`;
  })();
  const preferredPdfUrl =
    (source === 'OFFICIEL' && subjectUrlVersioned) ||
    subjectUrlVersioned ||
    sourceUrl ||
    null;
  const preferredPdfIsExternal = isExternalUrl(preferredPdfUrl, internalOrigin);
  const correctionUrlIsExternal = isExternalUrl(correctionUrl, internalOrigin);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
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
            <Button variant="secondary" size="xs" className="rounded-lg">
              <span className="md:hidden">{sessionYear}</span>
              <span className="hidden md:inline">Session {sessionYear}</span>
            </Button>
            {difficultyLabel && (
              <Button variant="secondary" size="xs" className="rounded-lg">
                {difficultyLabel}
              </Button>
            )}
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
            {typeof points === 'number' && (
              <Button variant="secondary" size="xs" className="rounded-lg">
                {points} pts
              </Button>
            )}
            {durationLabel && (
              <Button variant="secondary" size="xs" className="rounded-lg">
                {durationLabel}
              </Button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg text-fg-brand hover:text-heading hover:underline">
            <Link href={`/exercises/${id}`}>
              {fullTitle}
            </Link>
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 p-4 pt-0">
        {summaryText && (
          <div className="flex flex-col gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge
                    variant="outline"
                    className="w-fit cursor-help text-[10px] uppercase"
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

        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
          {notions.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-muted-foreground">Thèmes :</span>
              {notions.map((n) => (
                <Badge key={n.key} variant="theme" className="text-xs">
                  <span className="hidden md:inline">{n.long}</span>
                  <span className="md:hidden">{n.short}</span>
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-baseline justify-between gap-2 pt-1 text-sm">
          <span className="text-muted-foreground font-bold text-xs md:text-sm">{traceabilityFooter}</span>
          <div className="flex items-baseline gap-2">
            {preferredPdfUrl && (
              <Button
                asChild
                size="sm"
                className="h-9 items-center gap-2 border border-brand bg-brand text-white hover:bg-brand hover:text-white focus-visible:ring-brand sm:h-8 sm:px-3 sm:text-xs"
              >
                <a href={preferredPdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Ouvrir le sujet (PDF)
                  {preferredPdfIsExternal && <ExternalLink className="ml-2 h-3 w-3" />}
                </a>
              </Button>
            )}
            {correctionUrl && (
              <Button
                asChild
                variant="success"
                size="sm"
                className="h-9 gap-2 sm:h-8 sm:px-3 sm:text-xs"
              >
                <a href={correctionUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <span className="md:hidden">Correction</span>
                  <span className="hidden md:inline">Correction</span>
                  {correctionUrlIsExternal && <ExternalLink className="ml-2 h-3 w-3" />}
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
