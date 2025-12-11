import React from "react";
import Link from "next/link";
import { Clock, ExternalLink, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DifficultyDots } from "./DifficultyDots";

interface Correction {
  id: string;
  source: string;
  url: string;
  type: string;
  quality?: number | null;
}

interface ExamPaperCardProps {
  id: string;
  label: string;
  sessionYear: number;
  diploma: string;
  subject: string;
  subjectUrl?: string;
  estimatedDuration?: number;
  estimatedDifficulty?: number;
  summary?: string;
  themes?: string[];
  corrections: Correction[];
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function ExamPaperCard({
  id,
  label,
  sessionYear,
  diploma,
  subject,
  subjectUrl,
  estimatedDuration,
  estimatedDifficulty,
  summary,
  themes = [],
  corrections,
  isFavorite = false,
  onToggleFavorite,
}: ExamPaperCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:border-brand/50">
      <CardHeader className="flex flex-col gap-1 border-b md:flex-row md:items-baseline md:justify-between">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <CardTitle className="text-base md:text-lg">
                {diploma} – {subject}
              </CardTitle>
              <CardDescription className="text-sm">
                📄 {label} · {sessionYear}
              </CardDescription>
            </div>
            {onToggleFavorite && (
              <button
                onClick={() => onToggleFavorite(id)}
                className="rounded-full p-1.5 transition-colors hover:bg-accent"
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

      <CardContent className="flex flex-col gap-3 p-4">
        {themes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {themes.map((theme) => (
              <Badge key={theme} variant="secondary">
                🏷️ {theme}
              </Badge>
            ))}
          </div>
        )}

        {summary && (
          <div className="text-xs leading-relaxed text-muted-foreground">
            💡 {summary}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col gap-3 border-t bg-muted/40 p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
          <span className="font-medium">✅ Corrigés :</span>
          {corrections.length === 0 && (
            <span className="text-muted-foreground">
              Aucun corrigé référencé pour le moment.
            </span>
          )}
          {corrections.slice(0, 3).map((c) => (
            <a
              key={c.id}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-fg-brand underline-offset-2 hover:text-fg-brand/80 hover:underline"
            >
              {c.source}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
          {corrections.length > 3 && (
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
              +{corrections.length - 3} autre{corrections.length - 3 > 1 ? 's' : ''}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {subjectUrl && (
            <Button asChild size="sm">
              <a href={subjectUrl} target="_blank" rel="noreferrer">
                📖 Voir le sujet
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
