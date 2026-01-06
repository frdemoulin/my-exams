import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchDiplomaById } from '@/core/diploma';
import { fetchSubjectById } from '@/core/subject';
import { fetchSessionYearsByDiplomaAndSubject } from '@/core/exam-paper';
import { buildCanonicalUrl } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';

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
      title: 'Matiere introuvable',
    };
  }

  const canonical = buildCanonicalUrl(`/diplomes/${diploma.id}/matieres/${subject.id}`);

  return {
    title: `${subject.longDescription} - ${diploma.longDescription}`,
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
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: <>Dipl&ocirc;mes</>, href: '/diplomes' },
            { label: diploma.longDescription, href: `/diplomes/${diploma.id}` },
            { label: subject.longDescription },
          ]}
        />

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">
            {subject.longDescription}
          </h1>
          <p className="text-sm text-muted-foreground">
            Choisis une session pour acc&eacute;der aux sujets d&apos;annales.
          </p>
        </div>

        {sessions.length === 0 ? (
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            <p>Aucune session n&apos;est disponible pour cette mati&egrave;re.</p>
            <Button asChild variant="outline" size="sm" className="w-fit">
              <Link href="/diplomes">Revenir aux dipl&ocirc;mes</Link>
            </Button>
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
