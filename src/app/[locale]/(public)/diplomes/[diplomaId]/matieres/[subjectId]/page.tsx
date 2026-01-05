import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchDiplomaById } from '@/core/diploma';
import { fetchSubjectById } from '@/core/subject';
import { fetchSessionYearsByDiplomaAndSubject } from '@/core/exam-paper';
import { buildCanonicalUrl } from '@/lib/seo';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';

type PageProps = {
  params: Promise<{
    diplomaId: string;
    subjectId: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { diplomaId, subjectId } = await params;
  const [diploma, subject] = await Promise.all([
    fetchDiplomaById(diplomaId),
    fetchSubjectById(subjectId),
  ]);

  if (!diploma || !subject) {
    return {
      title: 'Matiere introuvable | My Exams',
    };
  }

  const canonical = buildCanonicalUrl(`/diplomes/${diploma.id}/matieres/${subject.id}`);

  return {
    title: `${subject.longDescription} - ${diploma.longDescription} | My Exams`,
    description: `Sessions disponibles pour ${subject.longDescription} (${diploma.shortDescription}).`,
    alternates: canonical ? { canonical } : undefined,
  };
}

export default async function SubjectPage({ params }: PageProps) {
  noStore();
  const { diplomaId, subjectId } = await params;
  const [diploma, subject] = await Promise.all([
    fetchDiplomaById(diplomaId),
    fetchSubjectById(subjectId),
  ]);

  if (!diploma || !diploma.isActive || !subject || !subject.isActive) {
    notFound();
  }

  const sessions = await fetchSessionYearsByDiplomaAndSubject(diploma.id, subject.id);

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
              <BreadcrumbPage>{subject.longDescription}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">
            {subject.longDescription}
          </h1>
          <p className="text-sm text-muted-foreground">
            Choisis une session pour acc&eacute;der aux sujets d&apos;annales.
          </p>
        </div>

        {sessions.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            Aucune session n&apos;est disponible pour cette mati&egrave;re.
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            {sessions.map((sessionYear) => (
              <Button key={sessionYear} asChild variant="outline">
                <Link
                  href={`/diplomes/${diploma.id}/matieres/${subject.id}/sessions/${sessionYear}`}
                >
                  Session {sessionYear}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
