import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchDiplomaById } from '@/core/diploma';
import { fetchSubjectById } from '@/core/subject';
import { fetchSessionYearsByDiplomaAndSubject } from '@/core/exam-paper';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { SiteFooter } from '@/components/shared/site-footer';

type PageProps = {
  params: {
    diplomaId: string;
    subjectId: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const [diploma, subject] = await Promise.all([
    fetchDiplomaById(params.diplomaId),
    fetchSubjectById(params.subjectId),
  ]);

  if (!diploma || !subject) {
    return {
      title: 'Matière introuvable | My Exams',
    };
  }

  return {
    title: `${subject.longDescription} — ${diploma.longDescription} | My Exams`,
    description: `Sessions disponibles pour ${subject.longDescription} (${diploma.shortDescription}).`,
  };
}

export default async function SubjectPage({ params }: PageProps) {
  noStore();
  const [diploma, subject] = await Promise.all([
    fetchDiplomaById(params.diplomaId),
    fetchSubjectById(params.subjectId),
  ]);

  if (!diploma || !diploma.isActive || !subject || !subject.isActive) {
    notFound();
  }

  const sessions = await fetchSessionYearsByDiplomaAndSubject(diploma.id, subject.id);

  return (
    <div className="min-h-screen bg-background text-foreground">
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
                <Link href="/diplomes">Diplômes</Link>
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
            Choisis une session pour accéder aux sujets d&apos;annales.
          </p>
        </div>

        {sessions.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            Aucune session n&apos;est disponible pour cette matière.
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
