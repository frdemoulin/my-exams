import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

import { fetchExamPaperById } from '@/core/exam-paper';
import { fetchExercisesByExamPaperId } from '@/core/exercise';
import { Button } from '@/components/ui/button';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { ExamPaperComposition } from '@/components/exam-papers/ExamPaperComposition';
import { ExamPaperDocumentsCard } from '@/components/exam-papers/ExamPaperDocumentsCard';
import { ExamPaperPdfPreview } from '@/components/exam-papers/ExamPaperPdfPreview';
import { buildCanonicalUrl } from '@/lib/seo';
import { normalizeExamPaperLabel } from '@/lib/utils';

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
  const diplomaLong =
    examPaper.diploma.longDescription || examPaper.diploma.shortDescription;
  const teachingLong =
    examPaper.teaching.longDescription || examPaper.teaching.shortDescription || subjectLabel;
  const normalizedLabel = normalizeExamPaperLabel(examPaper.label) ?? examPaper.label;
  const subjectId = examPaper.teaching.subjectId;
  const backHref =
    subjectId
      ? `/diplomes/${examPaper.diplomaId}/matieres/${subjectId}/sessions/${examPaper.sessionYear}`
      : '/diplomes';

  const corrections = examPaper.corrections ?? [];
  const officialStatementUrl = examPaper.subjectUrl ?? null;
  const previewPdfUrl = examPaper.subjectUrl ?? null;

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
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">{subjectLabel}</h1>
            <p className="text-sm text-muted-foreground">{normalizedLabel}</p>
          </div>
        </div>

        <ExamPaperDocumentsCard
          officialStatementUrl={officialStatementUrl}
          corrections={corrections}
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            <ExamPaperPdfPreview
              pdfUrl={previewPdfUrl}
              fallbackUrl={examPaper.sourceUrl ?? null}
              frameTitle={`Sujet ${subjectLabel}`}
            />
          </div>

          <ExamPaperComposition
            exercises={exercises ?? []}
            returnTo={`/sujets/${examPaper.id}`}
          />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
