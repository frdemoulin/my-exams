import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchDiplomaById } from '@/core/diploma';
import { fetchSubjectById } from '@/core/subject';
import { fetchExamPapersByScope } from '@/core/exam-paper';
import { buildCanonicalUrl } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { ExamPaperCard } from '@/components/exam-papers/ExamPaperCard';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';

type PageProps = {
  params: Promise<{
    diplomaId: string;
    subjectId: string;
    sessionYear: string;
  }>;
};

function parseSessionYear(value: string): number | null {
  const parsed = Number(value);
  if (!Number.isInteger(parsed)) return null;
  return parsed;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { diplomaId, subjectId, sessionYear: sessionParam } = await params;
  const sessionYear = parseSessionYear(sessionParam);
  const [diploma, subject] = await Promise.all([
    fetchDiplomaById(diplomaId),
    fetchSubjectById(subjectId),
  ]);

  if (!diploma || !subject || sessionYear === null) {
    return {
      title: 'Session introuvable',
    };
  }

  const canonical = buildCanonicalUrl(
    `/diplomes/${diploma.id}/matieres/${subject.id}/sessions/${sessionYear}`
  );

  return {
    title: `${subject.longDescription} - Session ${sessionYear}`,
    description: `Sujets ${sessionYear} pour ${subject.longDescription} (${diploma.shortDescription}).`,
    alternates: canonical ? { canonical } : undefined,
  };
}

export default async function SessionPage({ params }: PageProps) {
  noStore();
  const { diplomaId, subjectId, sessionYear: sessionParam } = await params;
  const sessionYear = parseSessionYear(sessionParam);
  const [diploma, subject] = await Promise.all([
    fetchDiplomaById(diplomaId),
    fetchSubjectById(subjectId),
  ]);

  if (!diploma || !diploma.isActive || !subject || !subject.isActive || sessionYear === null) {
    notFound();
  }

  const diplomaShort = diploma.shortDescription || diploma.longDescription;
  const diplomaLong = diploma.longDescription || diploma.shortDescription;
  const subjectShort = subject.shortDescription || subject.longDescription;
  const subjectLong = subject.longDescription || subject.shortDescription;

  const examPapers = await fetchExamPapersByScope({
    diplomaId: diploma.id,
    subjectId: subject.id,
    sessionYear,
  });
  const teachingOptions = Array.from(
    new Map(
      examPapers.map((paper) => {
        const longLabel = paper.teaching.longDescription;
        const shortLabel = paper.teaching.shortDescription || longLabel;
        return [longLabel, { longLabel, shortLabel }];
      })
    ).values()
  );
  const teachingLongLabel = teachingOptions.map((option) => option.longLabel).join(" / ");
  const teachingShortLabel = teachingOptions.map((option) => option.shortLabel).join(" / ");
  const teachingLongSuffix = teachingLongLabel ? ` - ${teachingLongLabel}` : "";
  const teachingShortSuffix = teachingShortLabel ? ` - ${teachingShortLabel}` : "";
  const subjectBreadcrumbLabel = teachingLongLabel
    ? `${subject.longDescription} (${teachingLongLabel})`
    : subject.longDescription;
  const returnTo = `/diplomes/${diploma.id}/matieres/${subject.id}/sessions/${sessionYear}`;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 pb-16 pt-10">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: <>Dipl&ocirc;mes</>, href: '/diplomes' },
            { label: diploma.longDescription, href: `/diplomes/${diploma.id}` },
            {
              label: subjectBreadcrumbLabel,
              href: `/diplomes/${diploma.id}/matieres/${subject.id}`,
            },
            { label: `Session ${sessionYear}` },
          ]}
        />

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Liste des sujets d&apos;examen</h1>
        </div>

        {examPapers.length === 0 ? (
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            <p>Aucun sujet n&apos;est disponible pour cette session.</p>
            <Button asChild variant="outline" size="sm" className="w-fit">
              <Link href="/diplomes">Revenir aux dipl&ocirc;mes</Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {examPapers.map((paper) => {
              const subjectLabel =
                paper.teaching.longDescription ||
                paper.teaching.subject.shortDescription ||
                paper.teaching.subject.longDescription;

              return (
                <ExamPaperCard
                  key={paper.id}
                  id={paper.id}
                  label={paper.label}
                  sessionYear={paper.sessionYear}
                  diploma={paper.diploma.shortDescription || paper.diploma.longDescription}
                  subject={subjectLabel}
                  exerciseDomains={paper.exerciseDomains}
                  returnTo={returnTo}
                />
              );
            })}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
