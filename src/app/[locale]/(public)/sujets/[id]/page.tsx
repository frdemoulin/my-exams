import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

import { fetchExamPaperById } from '@/core/exam-paper';
import { fetchExercisesByExamPaperId } from '@/core/exercise';
import { upsertUserActivity } from '@/core/user-activity';
import { Button } from '@/components/ui/button';
import { PublicHeader } from '@/components/shared/public-header';
import { AccountContinuityCta } from '@/components/shared/account-continuity-cta';
import { SiteFooter } from '@/components/shared/site-footer';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { ExamPaperComposition } from '@/components/exam-papers/ExamPaperComposition';
import { ExamPaperPdfPreview } from '@/components/exam-papers/ExamPaperPdfPreview';
import getSession from '@/lib/auth/get-session';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import { buildCanonicalUrl } from '@/lib/seo';
import { normalizeExamPaperLabel } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams?: {
    returnTo?: string;
  };
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

export default async function ExamPaperPage({ params, searchParams }: PageProps) {
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

  const session = await getSession();
  const effectiveUserId = getSessionEffectiveUserId(session);

  if (effectiveUserId) {
    try {
      await upsertUserActivity({
        userId: effectiveUserId,
        examPaperId: examPaper.id,
        subjectId: examPaper.teaching.subjectId ?? null,
        sessionYear: examPaper.sessionYear,
      });
    } catch (error) {
      console.error('Erreur de suivi activité utilisateur:', error);
    }
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
  const defaultBackHref = subjectId
    ? `/diplomes/${examPaper.diplomaId}/matieres/${subjectId}/sessions/${examPaper.sessionYear}`
    : '/diplomes';
  const returnToParam = searchParams?.returnTo?.trim() ?? null;
  const safeReturnTo =
    returnToParam && returnToParam.startsWith('/') && !returnToParam.startsWith('//')
      ? returnToParam
      : null;
  const backHref = safeReturnTo ?? defaultBackHref;
  const backLabel: ReactNode = (() => {
    if (!safeReturnTo) return <>Retour &agrave; la session</>;
    if (safeReturnTo.startsWith('/exercices/')) return <>Retour &agrave; l&apos;exercice</>;
    if (safeReturnTo.startsWith('/sujets/')) return <>Retour aux sujets</>;
    if (safeReturnTo.includes('/sessions/')) return <>Retour &agrave; la session</>;
    if (safeReturnTo.startsWith('/diplomes')) return <>Retour aux dipl&ocirc;mes</>;
    if (safeReturnTo === '/' || safeReturnTo.startsWith('/?')) return <>Retour aux r&eacute;sultats</>;
    return <>Retour</>;
  })();

  const officialStatementUrl = examPaper.subjectUrl ?? null;
  const previewPdfUrl = examPaper.subjectUrl ?? null;
  const corrections = examPaper.corrections ?? [];
  const actionLinks = [
    officialStatementUrl
      ? {
          label: 'Ouvrir le sujet',
          href: officialStatementUrl,
          external: true,
        }
      : null,
    ...corrections.map((correction) => ({
      label: `Ouvrir le corrigé (${correction.source})`,
      href: correction.url,
      external: true,
    })),
  ].filter((link): link is { label: string; href: string; external: boolean } => Boolean(link));

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
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 pb-16 pt-10">
        <div className="space-y-3">
          <PublicBreadcrumb items={breadcrumbItems} />

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link href={backHref}>
                <ChevronLeft className="h-4 w-4" />
                <span>{backLabel}</span>
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
            {actionLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 md:justify-end">
                {actionLinks.map((link) => (
                  <Button
                    key={`${link.label}-${link.href}`}
                    asChild
                    size="sm"
                    variant={link.label.startsWith('Ouvrir le corrigé') ? 'success' : 'default'}
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      {link.external && <ExternalLink className="ml-2 h-4 w-4" />}
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>

        <AccountContinuityCta kind="examPaper" />

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
