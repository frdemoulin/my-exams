import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, ExternalLink, Download } from 'lucide-react';

import { fetchExamPaperById } from '@/core/exam-paper';
import { fetchExercisesByExamPaperId } from '@/core/exercise';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const examPaper = await fetchExamPaperById(id);

  if (!examPaper) {
    return {
      title: 'Sujet introuvable | My Exams',
    };
  }

  const subjectLabel =
    examPaper.teaching.subject.longDescription ||
    examPaper.teaching.subject.shortDescription ||
    examPaper.teaching.longDescription;

  return {
    title: `${subjectLabel} - Session ${examPaper.sessionYear} | My Exams`,
    description: `Sujet ${examPaper.sessionYear} : ${examPaper.label}.`,
  };
}

export default async function ExamPaperPage({ params }: PageProps) {
  noStore();
  const { id } = await params;
  if (!/^[a-f0-9]{24}$/i.test(id)) {
    notFound();
  }

  const [examPaper, exercises] = await Promise.all([
    fetchExamPaperById(id),
    fetchExercisesByExamPaperId(id),
  ]);

  if (!examPaper) {
    notFound();
  }

  const subjectLabel =
    examPaper.teaching.subject.longDescription ||
    examPaper.teaching.subject.shortDescription ||
    examPaper.teaching.longDescription;
  const diplomaLabel =
    examPaper.diploma.shortDescription || examPaper.diploma.longDescription;
  const subjectId = examPaper.teaching.subjectId;
  const backHref =
    subjectId
      ? `/diplomes/${examPaper.diplomaId}/matieres/${subjectId}/sessions/${examPaper.sessionYear}`
      : '/diplomes';

  const corrections = examPaper.corrections ?? [];
  const primaryCorrectionUrl =
    corrections[0]?.url || examPaper.correctionUrl || null;
  type DomainInfo = {
    id: string;
    label: string;
    order: number | null;
  };
  const exercisesWithTags = (exercises ?? []).map((exercise) => {
    const displayTitle =
      exercise.title || exercise.label || `Exercice ${exercise.exerciseNumber}`;
    const subtitle =
      displayTitle === `Exercice ${exercise.exerciseNumber}`
        ? null
        : `Exercice ${exercise.exerciseNumber}`;

    const domainMap = new Map<string, { info: DomainInfo; themes: string[] }>();
    const orphanThemes: string[] = [];

    exercise.themes.forEach((theme) => {
      const themeLabel = theme.shortDescription ?? theme.longDescription;
      if (!themeLabel) return;

      if (!theme.domain) {
        orphanThemes.push(themeLabel);
        return;
      }

      const domainLabel = theme.domain.longDescription;
      const domainEntry =
        domainMap.get(theme.domain.id) ?? {
          info: {
            id: theme.domain.id,
            label: domainLabel,
            order: theme.domain.order ?? null,
          },
          themes: [],
        };

      domainEntry.themes.push(themeLabel);
      domainMap.set(theme.domain.id, domainEntry);
    });

    if (orphanThemes.length > 0) {
      domainMap.set('orphan', {
        info: {
          id: 'orphan',
          label: 'Autres th&egrave;mes',
          order: Number.POSITIVE_INFINITY,
        },
        themes: orphanThemes,
      });
    }

    const groupedDomains = Array.from(domainMap.values())
      .map((entry) => ({
        domainLabel: entry.info.label,
        order: entry.info.order ?? Number.POSITIVE_INFINITY,
        themes: entry.themes.sort((a, b) =>
          a.localeCompare(b, 'fr', { sensitivity: 'base' })
        ),
      }))
      .sort((a, b) => {
        if (a.order !== b.order) return a.order - b.order;
        return a.domainLabel.localeCompare(b.domainLabel, 'fr', { sensitivity: 'base' });
      });

    return {
      id: exercise.id,
      displayTitle,
      subtitle,
      groupedDomains,
    };
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-16 pt-10">
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link href={backHref}>
              <ChevronLeft className="h-4 w-4" />
              Retour &agrave; la liste
            </Link>
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Badge variant="secondary">{diplomaLabel}</Badge>
            <Badge variant="outline">Session {examPaper.sessionYear}</Badge>
            <Badge variant="outline">{examPaper.teaching.longDescription}</Badge>
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">{subjectLabel}</h1>
            <p className="text-sm text-muted-foreground">{examPaper.label}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {examPaper.subjectUrl && (
              <>
                <Button asChild size="sm">
                  <a href={examPaper.subjectUrl} target="_blank" rel="noopener noreferrer">
                    Ouvrir le PDF
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={examPaper.subjectUrl} download>
                    <Download className="h-4 w-4" />
                    T&eacute;l&eacute;charger
                  </a>
                </Button>
              </>
            )}
            {primaryCorrectionUrl && (
              <Button asChild variant="success" size="sm">
                <a href={primaryCorrectionUrl} target="_blank" rel="noopener noreferrer">
                  Voir la correction
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section className="space-y-3">
            <h2 className="text-base font-semibold">Sujet officiel</h2>
            {examPaper.subjectUrl ? (
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <iframe
                  title={`Sujet ${subjectLabel}`}
                  src={examPaper.subjectUrl}
                  className="h-[70vh] w-full"
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
                Aucun PDF n&apos;est encore disponible pour ce sujet.
              </div>
            )}
          </section>

          <section className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-base font-semibold">Exercices & domaines/th&egrave;mes</h2>
              <span className="text-xs text-muted-foreground">
                {exercisesWithTags.length} exercice{exercisesWithTags.length > 1 ? 's' : ''}
              </span>
            </div>
            {exercisesWithTags.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
                Aucun exercice d&eacute;taill&eacute; disponible pour le moment.
              </div>
            ) : (
              <div className="space-y-3">
                {exercisesWithTags.map((exercise) => (
                  <Card key={exercise.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{exercise.displayTitle}</CardTitle>
                      {exercise.subtitle && (
                        <p className="text-xs text-muted-foreground">{exercise.subtitle}</p>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      {exercise.groupedDomains.length > 0 ? (
                        <div className="space-y-3">
                          {exercise.groupedDomains.map((domain) => (
                            <div key={domain.domainLabel} className="space-y-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <Badge variant="secondary">{domain.domainLabel}</Badge>
                              </div>
                              {domain.themes.length > 0 ? (
                                <div className="flex flex-wrap gap-2">
                                  {domain.themes.map((theme) => (
                                    <Badge key={theme} variant="outline">
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
                          Domaines et th&egrave;mes non renseign&eacute;s.
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </section>

          <aside className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Infos sujet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Session</span>
                  <p className="text-sm text-foreground">Session {examPaper.sessionYear}</p>
                </div>
                {examPaper.sessionDay && (
                  <div>
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Session</span>
                    <p className="text-sm text-foreground">{examPaper.sessionDay}</p>
                  </div>
                )}
                <div>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Dipl&ocirc;me</span>
                  <p className="text-sm text-foreground">{examPaper.diploma.longDescription}</p>
                </div>
                {examPaper.division && (
                  <div>
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Fili&egrave;re</span>
                    <p className="text-sm text-foreground">{examPaper.division.longDescription}</p>
                  </div>
                )}
                <div>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Niveau</span>
                  <p className="text-sm text-foreground">{examPaper.grade.shortDescription}</p>
                </div>
                {examPaper.curriculum && (
                  <div>
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Programme</span>
                    <p className="text-sm text-foreground">
                      {examPaper.curriculum.shortDescription || examPaper.curriculum.longDescription}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Corrections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {corrections.length > 0 ? (
                  <div className="space-y-2">
                    {corrections.map((correction) => (
                      <a
                        key={correction.id}
                        href={correction.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-2 rounded-lg border border-border px-3 py-2 text-sm text-fg-brand hover:border-brand/50"
                      >
                        <span>{correction.source}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                ) : examPaper.correctionUrl ? (
                  <a
                    href={examPaper.correctionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 rounded-lg border border-border px-3 py-2 text-sm text-fg-brand hover:border-brand/50"
                  >
                    <span>Corrig&eacute; externe</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Aucun corrig&eacute; r&eacute;f&eacute;renc&eacute; pour le moment.
                  </p>
                )}
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
