import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { fetchActiveDiplomasWithExamPapers } from '@/core/exam-paper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { buildCanonicalUrl } from '@/lib/seo';

const canonical = buildCanonicalUrl('/diplomes');

export const metadata: Metadata = {
  title: "Diplômes",
  description: "Choisis ton diplôme pour accéder rapidement aux sujets d'annales.",
  alternates: canonical ? { canonical } : undefined,
};

export default async function DiplomasPage() {
  noStore();
  const diplomas = await fetchActiveDiplomasWithExamPapers();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-16 pt-10">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: <>Dipl&ocirc;mes</> },
          ]}
        />

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Parcourir les annales par dipl&ocirc;me</h1>
          <p className="text-sm text-muted-foreground">
            Choisis ton dipl&ocirc;me pour afficher les mati&egrave;res et les sessions disponibles.
          </p>
        </div>

        {diplomas.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            Aucun dipl&ocirc;me actif n&apos;est disponible pour le moment.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {diplomas.map((diploma) => (
              <Link
                key={diploma.id}
                href={`/diplomes/${diploma.id}`}
                className="group block h-full rounded-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Card className="h-full transition-colors group-hover:border-brand/50">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg">
                      {diploma.longDescription}
                    </CardTitle>
                    <CardDescription>
                      {diploma.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs text-muted-foreground">
                    Voir les mati&egrave;res disponibles &rarr;
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
