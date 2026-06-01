'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ExerciseWithRelations } from '@/core/exercise';

type ExerciseChaptersCardProps = {
  exercise: ExerciseWithRelations;
  title?: string;
  emptyLabel?: string;
};

type ChapterGroup = {
  id: string;
  label: string;
  order: number;
  themes: Array<{
    long: string;
    short: string;
  }>;
};

function buildChapterGroups(exercise: ExerciseWithRelations): ChapterGroup[] {
  const chapterMap = new Map<string, ChapterGroup>();
  const orphanThemes: ChapterGroup['themes'] = [];

  exercise.themes.forEach((theme) => {
    const longLabel = theme.title ?? theme.shortTitle;
    const shortLabel = theme.shortTitle ?? theme.title;
    if (!longLabel || !shortLabel) return;

    if (!theme.chapters || theme.chapters.length === 0) {
      orphanThemes.push({ long: longLabel, short: shortLabel });
      return;
    }

    theme.chapters.forEach((chapter) => {
      const entry = chapterMap.get(chapter.id) ?? {
        id: chapter.id,
        label: chapter.title,
        order: chapter.order,
        themes: [],
      };

      entry.themes.push({ long: longLabel, short: shortLabel });
      chapterMap.set(chapter.id, entry);
    });
  });

  if (orphanThemes.length > 0) {
    chapterMap.set('orphan', {
      id: 'orphan',
      label: 'Autres thèmes',
      order: Number.POSITIVE_INFINITY,
      themes: orphanThemes,
    });
  }

  return Array.from(chapterMap.values())
    .map((entry) => ({
      ...entry,
      themes: entry.themes.sort((a, b) =>
        a.long.localeCompare(b.long, 'fr', { sensitivity: 'base' })
      ),
    }))
    .sort((a, b) => {
      if (a.order !== b.order) return a.order - b.order;
      return a.label.localeCompare(b.label, 'fr', { sensitivity: 'base' });
    });
}

export function ExerciseChaptersCard({
  exercise,
  title = 'Chapitres abordés',
  emptyLabel = 'Chapitres et thèmes non renseignés.',
}: ExerciseChaptersCardProps) {
  const chapterGroups = buildChapterGroups(exercise);

  return (
    <section className="space-y-2">
      <h2 className="text-base font-semibold">{title}</h2>

      {chapterGroups.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
          {emptyLabel}
        </div>
      ) : (
        <div className="space-y-3">
          {chapterGroups.map((group) => (
            <Card key={group.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{group.label}</CardTitle>
              </CardHeader>
              <CardContent>
                {group.themes.length > 0 ? (
                  <div className="flex flex-wrap items-baseline gap-2 text-xs md:text-sm">
                    {group.themes.map((theme) => (
                      <Badge key={theme.long} variant="outline" className="text-xs">
                        <span className="hidden md:inline">{theme.long}</span>
                        <span className="md:hidden">{theme.short}</span>
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    Thèmes non renseignés.
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
