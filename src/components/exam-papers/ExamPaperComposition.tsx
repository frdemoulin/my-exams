'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ExerciseWithRelations } from '@/core/exercise';

type ExamPaperCompositionProps = {
  exercises: ExerciseWithRelations[];
  returnTo?: string | null;
  currentExerciseId?: string | null;
  showCount?: boolean;
  title?: string;
  emptyLabel?: string;
};

type ChapterInfo = {
  id: string;
  label: string;
  order: number;
};

function buildGroupedChapters(exercise: ExerciseWithRelations) {
  const chapterMap = new Map<string, { info: ChapterInfo; themes: string[] }>();
  const orphanThemes: string[] = [];

  exercise.themes.forEach((theme) => {
    const themeLabel = theme.title ?? theme.shortTitle;
    if (!themeLabel) return;

    if (!theme.chapters || theme.chapters.length === 0) {
      orphanThemes.push(themeLabel);
      return;
    }

    theme.chapters.forEach((chapter) => {
      const chapterEntry =
        chapterMap.get(chapter.id) ?? {
          info: {
            id: chapter.id,
            label: chapter.title,
            order: chapter.order,
          },
          themes: [],
        };

      chapterEntry.themes.push(themeLabel);
      chapterMap.set(chapter.id, chapterEntry);
    });
  });

  if (orphanThemes.length > 0) {
    chapterMap.set('orphan', {
      info: {
        id: 'orphan',
        label: 'Autres thèmes',
        order: Number.POSITIVE_INFINITY,
      },
      themes: orphanThemes,
    });
  }

  return Array.from(chapterMap.values())
    .map((entry) => ({
      chapterLabel: entry.info.label,
      order: entry.info.order,
      themes: entry.themes.sort((a, b) =>
        a.localeCompare(b, 'fr', { sensitivity: 'base' })
      ),
    }))
    .sort((a, b) => {
      if (a.order !== b.order) return a.order - b.order;
      return a.chapterLabel.localeCompare(b.chapterLabel, 'fr', { sensitivity: 'base' });
    });
}

export function ExamPaperComposition({
  exercises,
  returnTo,
  currentExerciseId,
  showCount = true,
  title = 'Composition du sujet',
  emptyLabel = 'Aucun exercice détaillé disponible pour le moment.',
}: ExamPaperCompositionProps) {
  const sortedExercises = [...exercises].sort(
    (a, b) => a.exerciseNumber - b.exerciseNumber
  );

  return (
    <section className="space-y-2">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-base font-semibold">{title}</h2>
        {showCount && (
          <span className="text-xs text-muted-foreground">
            {sortedExercises.length} exercice{sortedExercises.length > 1 ? 's' : ''}
          </span>
        )}
      </div>

      {sortedExercises.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
          {emptyLabel}
        </div>
      ) : (
        <div className="space-y-3">
          {sortedExercises.map((exercise) => {
            const displayTitle =
              exercise.title || exercise.label || `Exercice ${exercise.exerciseNumber}`;
            const subtitle =
              displayTitle === `Exercice ${exercise.exerciseNumber}`
                ? null
                : `Exercice ${exercise.exerciseNumber}`;
            const groupedChapters = buildGroupedChapters(exercise);
            const href = returnTo
              ? {
                  pathname: `/exercices/${exercise.id}`,
                  query: { returnTo },
                }
              : `/exercices/${exercise.id}`;
            const isCurrent = currentExerciseId === exercise.id;

            return (
              <Link
                key={exercise.id}
                href={href}
                aria-label={`Voir le détail de ${displayTitle}`}
                aria-current={isCurrent ? 'page' : undefined}
                className="block rounded-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{displayTitle}</CardTitle>
                    {subtitle && (
                      <p className="text-xs text-muted-foreground">{subtitle}</p>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    {groupedChapters.length > 0 ? (
                      <div className="space-y-3">
                        {groupedChapters.map((chapter) => (
                          <div key={chapter.chapterLabel} className="space-y-1">
                            <div className="flex flex-wrap items-baseline gap-2 text-xs md:text-sm">
                              <span className="font-semibold text-muted-foreground">
                                Chapitre :
                              </span>
                              <Badge variant="outline" className="gap-1.5 text-xs">
                                <span
                                  className="h-1.5 w-1.5 rounded-full bg-brand"
                                  aria-hidden="true"
                                />
                                {chapter.chapterLabel}
                              </Badge>
                            </div>
                            {chapter.themes.length > 0 ? (
                              <div className="flex flex-wrap items-baseline gap-2 text-xs md:text-sm">
                                <span className="font-semibold text-muted-foreground">
                                  Th&egrave;mes :
                                </span>
                                {chapter.themes.map((theme) => (
                                  <Badge key={theme} variant="outline" className="text-xs">
                                    {theme}
                                  </Badge>
                                ))}
                              </div>
                            ) : (
                              <p className="text-xs text-muted-foreground">
                                Th&egrave;mes non renseign&eacute;s.
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        Chapitres et th&egrave;mes non renseign&eacute;s.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
