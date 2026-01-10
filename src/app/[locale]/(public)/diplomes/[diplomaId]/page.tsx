import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchDiplomaById } from '@/core/diploma';
import { fetchActiveSubjectsByDiplomaId } from '@/core/exam-paper';
import { buildCanonicalUrl } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';

type PageProps = {
  params: Promise<{
    diplomaId: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { diplomaId } = await params;
  const diploma = await fetchDiplomaById(diplomaId);

  if (!diploma) {
    return {
      title: 'Diplôme introuvable',
    };
  }

  const canonical = buildCanonicalUrl(`/diplomes/${diploma.id}`);

  return {
    title: diploma.longDescription,
    description: `Matières disponibles pour ${diploma.longDescription}.`,
    alternates: canonical ? { canonical } : undefined,
  };
}

export default async function DiplomaPage({ params }: PageProps) {
  noStore();
  const { diplomaId } = await params;
  const diploma = await fetchDiplomaById(diplomaId);

  if (!diploma || !diploma.isActive) {
    notFound();
  }

  const subjects = await fetchActiveSubjectsByDiplomaId(diploma.id);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-16 pt-10">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: <>Dipl&ocirc;mes</>, href: '/diplomes' },
            { label: diploma.longDescription },
          ]}
        />

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">{diploma.longDescription}</h1>
          <p className="text-sm text-muted-foreground">
            S&eacute;lectionne une mati&egrave;re pour afficher les sessions disponibles.
          </p>
        </div>

        {subjects.length === 0 ? (
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            <p>Aucune mati&egrave;re n&apos;est disponible pour ce dipl&ocirc;me.</p>
            <Button asChild variant="outline" size="sm" className="w-fit">
              <Link href="/diplomes">Revenir aux dipl&ocirc;mes</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                href={`/diplomes/${diploma.id}/matieres/${subject.id}`}
                className="group block h-full rounded-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Card className="h-full transition-colors group-hover:border-brand/50">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg">
                      {subject.longDescription}
                    </CardTitle>
                    <CardDescription>
                      {subject.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs text-muted-foreground">
                    Voir les sessions disponibles &rarr;
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
