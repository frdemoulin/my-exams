import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchDiplomaById } from '@/core/diploma';
import { fetchSubjectById } from '@/core/subject';
import { fetchExamPapersByScope } from '@/core/exam-paper';
import { buildCanonicalUrl } from '@/lib/seo';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { ExamPaperCard } from '@/components/exam-papers/ExamPaperCard';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';

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
      title: 'Session introuvable | My Exams',
    };
  }

  const canonical = buildCanonicalUrl(
    `/diplomes/${diploma.id}/matieres/${subject.id}/sessions/${sessionYear}`
  );

  return {
    title: `${subject.longDescription} - Session ${sessionYear} | My Exams`,
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-16 pt-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Accueil</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/diplomes">Dipl&ocirc;mes</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/diplomes/${diploma.id}`}>{diploma.longDescription}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/diplomes/${diploma.id}/matieres/${subject.id}`}>
                  {subject.longDescription}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Session {sessionYear}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Liste des sujets d&apos;examen</h1>
          <p className="text-sm text-muted-foreground">
            <span className="md:hidden">
              {diplomaShort} - {subjectShort}{teachingShortSuffix} - Session {sessionYear}
            </span>
            <span className="hidden md:inline">
              {diplomaLong} - {subjectLong}{teachingLongSuffix} - Session {sessionYear}
            </span>
          </p>
        </div>

        {examPapers.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            Aucun sujet n&apos;est disponible pour cette session.
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
