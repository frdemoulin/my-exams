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
    diploma,
    teaching,
    subjectUrl,
  } = examPaper;

  const correctionUrl = exercise.correctionUrl || exercise.corrections[0]?.url || null;

  // Construction du titre d'affichage
  const displayTitle = title || label || `Exercice ${exerciseNumber}`;

  // Construction de la traçabilité
  const traceability = `${paperLabel} ${sessionYear}`;
  const exerciseInfo = label || `Exercice ${exerciseNumber}`;
  const fullTraceability = `${traceability} - ${exerciseInfo}${points ? ` (${points} pts)` : ''}`;

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="space-y-2 pb-3">
        {/* En-tête avec favoris */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 space-y-1">
            <CardTitle className="text-lg leading-tight">
              {displayTitle}
            </CardTitle>
            <CardDescription className="text-xs">
              {fullTraceability}
            </CardDescription>
          </div>

          {/* Bouton favoris */}
          {onToggleFavorite && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0"
              onClick={() => onToggleFavorite(id)}
            >
              <Heart
                className={`h-4 w-4 ${
                  isFavorite
                    ? 'fill-red-500 text-red-500'
                    : 'text-muted-foreground'
                }`}
              />
            </Button>
          )}
        </div>

        {/* Hiérarchie pédagogique */}
        <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
          <span>{diploma.shortDescription}</span>
          <span>›</span>
          <span>{teaching.subject.shortDescription}</span>
        </div>

        {/* Durée et difficulté */}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs md:text-sm">
          {estimatedDuration && (
            <div className="inline-flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>
                {estimatedDuration >= 60
                  ? `${Math.floor(estimatedDuration / 60)}h${
                      estimatedDuration % 60 > 0
                        ? ` ${estimatedDuration % 60}min`
                        : ''
                    }`
                  : `${estimatedDuration}min`}
              </span>
            </div>
          )}
          {estimatedDifficulty && (
            <DifficultyDots value={estimatedDifficulty} />
          )}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 p-4">
        {/* Thèmes */}
        {themes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {themes.map((theme) => (
              <Badge key={theme.id} variant="theme" className="text-xs">
                {theme.shortDescription || theme.longDescription}
              </Badge>
            ))}
          </div>
        )}

        {/* Résumé si disponible */}
        {exercise.summary && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {exercise.summary}
          </p>
        )}

        {/* Actions : liens vers sujet / corrigé */}
        <div className="flex items-center gap-3 pt-2 text-sm">
          {subjectUrl && (
            <a
              href={subjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              Voir le sujet
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {correctionUrl && (
            <a
              href={correctionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
            >
              Corrigé
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {/* Nombre de corrections disponibles */}
          {exercise.corrections.length > 1 && (
            <Badge variant="outline" className="text-xs">
              {exercise.corrections.length} corrections
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
