'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ExerciseWithRelations } from '@/core/exercise';

type ExerciseDomainsCardProps = {
  exercise: ExerciseWithRelations;
  title?: string;
  emptyLabel?: string;
};

type DomainGroup = {
  id: string;
  label: string;
  order: number | null;
  themes: Array<{
    long: string;
    short: string;
  }>;
};

function buildDomainGroups(exercise: ExerciseWithRelations): DomainGroup[] {
  const domainMap = new Map<string, DomainGroup>();
  const orphanThemes: DomainGroup['themes'] = [];

  exercise.themes.forEach((theme) => {
    const longLabel = theme.longDescription;
    const shortLabel = theme.shortDescription ?? theme.longDescription;
    if (!longLabel || !shortLabel) return;

    if (!theme.domain) {
      orphanThemes.push({ long: longLabel, short: shortLabel });
      return;
    }

    const entry = domainMap.get(theme.domain.id) ?? {
      id: theme.domain.id,
      label: theme.domain.longDescription,
      order: theme.domain.order ?? null,
      themes: [],
    };

    entry.themes.push({ long: longLabel, short: shortLabel });
    domainMap.set(theme.domain.id, entry);
  });

  if (orphanThemes.length > 0) {
    domainMap.set('orphan', {
      id: 'orphan',
      label: 'Autres thèmes',
      order: Number.POSITIVE_INFINITY,
      themes: orphanThemes,
    });
  }

  return Array.from(domainMap.values())
    .map((entry) => ({
      ...entry,
      themes: entry.themes.sort((a, b) =>
        a.long.localeCompare(b.long, 'fr', { sensitivity: 'base' })
      ),
    }))
    .sort((a, b) => {
      const orderA = a.order ?? Number.POSITIVE_INFINITY;
      const orderB = b.order ?? Number.POSITIVE_INFINITY;
      if (orderA !== orderB) return orderA - orderB;
      return a.label.localeCompare(b.label, 'fr', { sensitivity: 'base' });
    });
}

export function ExerciseDomainsCard({
  exercise,
  title = 'Domaines abordés',
  emptyLabel = 'Domaines et thèmes non renseignés.',
}: ExerciseDomainsCardProps) {
  const domainGroups = buildDomainGroups(exercise);

  return (
    <section className="space-y-2">
      <h2 className="text-base font-semibold">{title}</h2>

      {domainGroups.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
          {emptyLabel}
        </div>
      ) : (
        <div className="space-y-3">
          {domainGroups.map((group) => (
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
