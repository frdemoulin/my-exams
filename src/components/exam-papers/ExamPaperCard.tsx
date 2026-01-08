import React from "react";
import Link from "next/link";
import { Clock, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DifficultyDots } from "./DifficultyDots";
import { ClickThroughHint } from "@/components/shared/click-through-hint";
import { normalizeExamPaperLabel } from "@/lib/utils";

interface ExamPaperCardProps {
  id: string;
  label: string;
  sessionYear: number;
  diploma: string;
  subject: string;
  estimatedDuration?: number;
  estimatedDifficulty?: number;
  summary?: string;
  domains?: string[];
  exerciseDomains?: Array<{
    exerciseNumber: number;
    label: string | null;
    domains: string[];
  }>;
  returnTo?: string;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function ExamPaperCard({
  id,
  label,
  sessionYear,
  estimatedDuration,
  estimatedDifficulty,
  summary,
  domains = [],
  exerciseDomains,
  returnTo,
  isFavorite = false,
  onToggleFavorite,
}: ExamPaperCardProps) {
  const showExerciseDomains = exerciseDomains !== undefined;
  const hasExerciseDomains = (exerciseDomains ?? []).length > 0;
  const titleLabel = normalizeExamPaperLabel(label) ?? label;
  const examPaperHref = returnTo
    ? { pathname: `/sujets/${id}`, query: { returnTo } }
    : `/sujets/${id}`;

  return (
    <Card className="group relative overflow-hidden transition-all hover:border-brand/50 focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2 focus-within:ring-offset-background">
      <Link
        href={examPaperHref}
        aria-label={`Ouvrir le sujet ${label}`}
        className="absolute inset-0 z-0 focus-visible:outline-none"
      />
      <CardHeader className="pointer-events-none relative z-10 flex flex-col gap-1 border-b md:flex-row md:items-baseline md:justify-between">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <CardTitle className="mb-1 text-base md:text-lg">
                {titleLabel}
              </CardTitle>
            </div>
            {onToggleFavorite && (
              <button
                onClick={() => onToggleFavorite(id)}
                className="pointer-events-auto rounded-full p-1.5 transition-colors hover:bg-accent"
                title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
              >
                <Heart
                  className={`h-5 w-5 ${isFavorite ? 'fill-fg-danger text-fg-danger' : 'text-body'}`}
                />
              </button>
            )}
          </div>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs md:mt-0 md:text-sm">
          {estimatedDuration && (
            <div className="inline-flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{Math.floor(estimatedDuration / 60)}h{estimatedDuration % 60 > 0 ? ` ${estimatedDuration % 60}min` : ''}</span>
            </div>
          )}
          {estimatedDifficulty && <DifficultyDots value={estimatedDifficulty} />}
        </div>
      </CardHeader>

      <CardContent className="pointer-events-none relative z-10 flex flex-col gap-3 p-4">
        {showExerciseDomains ? (
          hasExerciseDomains ? (
            <div className="space-y-3 text-sm">
              {exerciseDomains?.map((exercise) => {
                const normalizedLabel = (exercise.label ?? '')
                  .toLowerCase()
                  .replace(/\s+/g, ' ')
                  .trim();
                const defaultLabel = `exercice ${exercise.exerciseNumber}`;
                const displayLabel =
                  normalizedLabel && normalizedLabel !== defaultLabel ? exercise.label : null;

                return (
                  <div key={`${id}-${exercise.exerciseNumber}`} className="space-y-1">
                    <div className="text-sm font-semibold text-foreground md:text-base">
                      Exercice {exercise.exerciseNumber}
                      {displayLabel ? ` - ${displayLabel}` : ''}
                    </div>
                    <div className="flex flex-wrap items-baseline gap-2 text-[11px] text-muted-foreground">
                      <span className="font-semibold text-muted-foreground">
                        Domaines abord&eacute;s :
                      </span>
                      {exercise.domains.length > 0 ? (
                        exercise.domains.map((domain) => (
                          <Badge
                            key={`${id}-${exercise.exerciseNumber}-${domain}`}
                            variant="outline"
                            className="gap-1.5 text-[11px]"
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full bg-brand"
                              aria-hidden="true"
                            />
                            {domain}
                          </Badge>
                        ))
                      ) : (
                        <span>Non renseign&eacute;s</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">Exercices non renseign&eacute;s.</p>
          )
        ) : domains.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {domains.map((domain) => (
              <Badge key={domain} variant="secondary">
                {domain}
              </Badge>
            ))}
          </div>
        ) : null}

        {summary && (
          <div className="text-xs leading-relaxed text-muted-foreground">
            💡 {summary}
          </div>
        )}

        <ClickThroughHint text="Clique sur la carte pour voir le détail du sujet." />
      </CardContent>

    </Card>
  );
}
