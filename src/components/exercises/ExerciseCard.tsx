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
import Link from 'next/link';
import type { ExerciseWithRelations } from '@/core/exercise';

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
            dot <= value ? 'bg-primary' : 'bg-muted'
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

  const baseTitle = `Exercice ${exerciseNumber}`;
  const displayTitleRaw = title || label || baseTitle;
  const normalize = (s: string) =>
    s
      .replace(/\s+/g, ' ')
      .replace(/–/g, '-')
      .trim()
      .toLowerCase();
  const difficultyLabel = (() => {
    if (!estimatedDifficulty) return 'Non évaluée';
    if (estimatedDifficulty >= 4) return '⚡ Difficile';
    if (estimatedDifficulty === 3) return '⚡ Moyenne';
    if (estimatedDifficulty === 2) return '⚡ Facile';
    return '⚡ Très facile';
  })();
  const notions = themes.map((t) => ({
    short: t.shortDescription || t.longDescription,
    long: t.longDescription,
    key: t.id,
  }));
  const durationLabel = estimatedDuration
    ? estimatedDuration >= 60
      ? `${Math.floor(estimatedDuration / 60)}h${estimatedDuration % 60 ? ` ${estimatedDuration % 60}min` : ''}`
      : `${estimatedDuration} min`
    : null;
  const summaryText =
    exercise.summary ||
    exercise.statement?.slice(0, 220).replace(/\s+/g, ' ').trim() ||
    '';
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

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-1">
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
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg text-blue-600 dark:text-blue-400 hover:underline">
                <Link href={`/exercises/${id}`}>
                  {fullTitle}
                </Link>
              </CardTitle>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">Session {sessionYear}</Badge>
            <Badge
              variant="secondary"
              className="text-xs dark:bg-amber-600 dark:hover:bg-amber-700 dark:text-white dark:border-transparent"
            >
              {difficultyLabel}
            </Badge>
            {typeof points === 'number' && (
              <Badge
                variant="secondary"
                className="text-xs dark:bg-amber-600 dark:hover:bg-amber-700 dark:text-white dark:border-transparent"
              >
                {points} pts
              </Badge>
            )}
            {sourceUrl ? (
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                <Badge variant="outline" className="text-xs hover:bg-muted">
                  {sourceLabel}
                </Badge>
              </a>
            ) : (
              <Badge variant="outline" className="text-xs">
                {sourceLabel}
              </Badge>
            )}
            {durationLabel && (
              <Badge
                variant="secondary"
                className="text-xs flex items-center gap-1 dark:bg-purple-700 dark:hover:bg-purple-800 dark:text-white dark:border-transparent"
              >
                <Clock className="h-4 w-4" />
                <span className="hidden md:inline">Durée estimée : {durationLabel}</span>
                <span className="md:hidden">{durationLabel}</span>
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 p-4 pt-0">
        {summaryText && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {summaryText}
          </p>
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
              <Button asChild size="sm" className="h-9">
                <a href={preferredPdfUrl} target="_blank" rel="noopener noreferrer">
                  Sujet (PDF)
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            )}
            {correctionUrl && (
              <Button asChild variant="outline" size="sm" className="h-9">
                <a href={correctionUrl} target="_blank" rel="noopener noreferrer">
                  Correction
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
