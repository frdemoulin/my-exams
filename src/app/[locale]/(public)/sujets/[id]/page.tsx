import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, ExternalLink } from 'lucide-react';

import { fetchExamPaperById } from '@/core/exam-paper';
import { fetchExercisesByExamPaperId } from '@/core/exercise';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { buildCanonicalUrl } from '@/lib/seo';
import { getInternalOrigin, isExternalUrl, normalizeExamPaperLabel } from '@/lib/utils';

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
      title: 'Sujet introuvable',
    };
  }

  const subjectLabel =
    examPaper.teaching.subject.longDescription ||
    examPaper.teaching.subject.shortDescription ||
    examPaper.teaching.longDescription;
  const normalizedLabel = normalizeExamPaperLabel(examPaper.label) ?? examPaper.label;
  const canonical = buildCanonicalUrl(`/sujets/${examPaper.id}`);

  return {
    title: `${subjectLabel} - Session ${examPaper.sessionYear}`,
    description: `Sujet ${examPaper.sessionYear} : ${normalizedLabel}.`,
    alternates: canonical ? { canonical } : undefined,
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
  const diplomaShort =
    examPaper.diploma.shortDescription || examPaper.diploma.longDescription;
  const diplomaLong =
    examPaper.diploma.longDescription || examPaper.diploma.shortDescription;
  const teachingShort =
    examPaper.teaching.shortDescription || examPaper.teaching.longDescription;
  const teachingLong =
    examPaper.teaching.longDescription || examPaper.teaching.shortDescription || teachingShort;
  const gradeShort = examPaper.grade.shortDescription || examPaper.grade.longDescription;
  const gradeLong = examPaper.grade.longDescription || examPaper.grade.shortDescription;
  const divisionShort = examPaper.division?.shortDescription || examPaper.division?.longDescription;
  const divisionLong = examPaper.division?.longDescription || examPaper.division?.shortDescription;
  const curriculumShort =
    examPaper.curriculum?.shortDescription || examPaper.curriculum?.longDescription;
  const curriculumLong =
    examPaper.curriculum?.longDescription || examPaper.curriculum?.shortDescription;
  const normalizedLabel = normalizeExamPaperLabel(examPaper.label) ?? examPaper.label;
  const sessionDayLabel =
    normalizeExamPaperLabel(examPaper.sessionDay) ?? examPaper.sessionDay;
  const subjectId = examPaper.teaching.subjectId;
  const backHref =
    subjectId
      ? `/diplomes/${examPaper.diplomaId}/matieres/${subjectId}/sessions/${examPaper.sessionYear}`
      : '/diplomes';

  const corrections = examPaper.corrections ?? [];
  const primaryCorrectionUrl = corrections[0]?.url || null;
  const internalOrigin = getInternalOrigin();
  const subjectUrlIsExternal = isExternalUrl(examPaper.subjectUrl, internalOrigin);
  const primaryCorrectionIsExternal = isExternalUrl(primaryCorrectionUrl, internalOrigin);
  const formatCorrectionType = (value?: string | null) => {
    if (!value) return 'PDF';
    const normalized = value.trim().toLowerCase();
    if (normalized === 'pdf') return 'PDF';
    if (normalized === 'video') return 'Vidéo';
    if (normalized === 'html') return 'Page web';
    return value.toUpperCase();
  };
  const primaryCorrection =
    corrections.find((item) => item.url === primaryCorrectionUrl) ??
    corrections[0] ??
    null;
  const primaryCorrectionLabel = primaryCorrection
    ? `Corrigé ${primaryCorrection.source} (${formatCorrectionType(primaryCorrection.type)})`
    : 'Corrigé externe (PDF)';
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

  const subjectBreadcrumbLabel =
    teachingLong && teachingLong !== subjectLabel
      ? `${subjectLabel} (${teachingLong})`
      : subjectLabel;
  const breadcrumbItems: Array<{ label: ReactNode; href?: string }> = [
    { label: 'Accueil', href: '/' },
    { label: <>Dipl&ocirc;mes</>, href: '/diplomes' },
    { label: diplomaLong, href: `/diplomes/${examPaper.diplomaId}` },
  ];

  if (subjectId) {
    breadcrumbItems.push(
      {
        label: subjectBreadcrumbLabel,
        href: `/diplomes/${examPaper.diplomaId}/matieres/${subjectId}`,
      },
      {
        label: `Session ${examPaper.sessionYear}`,
        href: `/diplomes/${examPaper.diplomaId}/matieres/${subjectId}/sessions/${examPaper.sessionYear}`,
      }
    );
  }

  breadcrumbItems.push({ label: normalizedLabel });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-16 pt-10">
        <div className="space-y-3">
          <PublicBreadcrumb items={breadcrumbItems} />

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link href={backHref}>
                <ChevronLeft className="h-4 w-4" />
                Retour &agrave; la liste
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold">{subjectLabel}</h1>
              <p className="text-sm text-muted-foreground">{normalizedLabel}</p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {examPaper.subjectUrl && (
                <Button asChild size="sm">
                  <a href={examPaper.subjectUrl} target="_blank" rel="noopener noreferrer">
                    Ouvrir le sujet (PDF)
                    {subjectUrlIsExternal && <ExternalLink className="ml-2 h-4 w-4" />}
                  </a>
                </Button>
              )}
              {primaryCorrectionUrl && (
                <Button asChild variant="success" size="sm">
                  <a href={primaryCorrectionUrl} target="_blank" rel="noopener noreferrer">
                    {primaryCorrectionLabel}
                    {primaryCorrectionIsExternal && (
                      <ExternalLink className="ml-2 h-4 w-4" />
                    )}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section className="space-y-2">
            <h2 className="text-base font-semibold">Sujet officiel</h2>
            {examPaper.subjectUrl ? (
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <iframe
                  title={`Sujet ${subjectLabel}`}
                  src={examPaper.subjectUrl}
                  className="h-[100dvh] min-h-[100vh] w-full"
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
                Aucun PDF n&apos;est encore disponible pour ce sujet.
              </div>
            )}
          </section>

          <section className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-base font-semibold">Composition du sujet</h2>
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
                  <Link
                    key={exercise.id}
                    href={{
                      pathname: `/exercises/${exercise.id}`,
                      query: { returnTo: `/sujets/${examPaper.id}` },
                    }}
                    aria-label={`Voir le détail de ${exercise.displayTitle}`}
                    className="block rounded-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Card>
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
                                <div className="flex flex-wrap items-baseline gap-2 text-xs md:text-sm">
                                  <span className="font-semibold text-muted-foreground">
                                    Domaine :
                                  </span>
                                  <Badge variant="outline" className="gap-1.5 text-xs">
                                    <span
                                      className="h-1.5 w-1.5 rounded-full bg-brand"
                                      aria-hidden="true"
                                    />
                                    {domain.domainLabel}
                                  </Badge>
                                </div>
                                {domain.themes.length > 0 ? (
                                  <div className="flex flex-wrap items-baseline gap-2 text-xs md:text-sm">
                                    <span className="font-semibold text-muted-foreground">
                                      Th&egrave;mes :
                                    </span>
                                    {domain.themes.map((theme) => (
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
                            Domaines et th&egrave;mes non renseign&eacute;s.
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </section>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
