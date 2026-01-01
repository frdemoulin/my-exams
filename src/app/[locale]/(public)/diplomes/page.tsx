import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { fetchActiveDiplomasWithExamPapers } from '@/core/exam-paper';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SiteFooter } from '@/components/shared/site-footer';

export const metadata = {
  title: 'Diplômes | My Exams',
  description: "Choisis ton diplôme pour accéder rapidement aux sujets d'annales.",
};

export default async function DiplomasPage() {
  noStore();
  const diplomas = await fetchActiveDiplomasWithExamPapers();

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
              <BreadcrumbPage>Diplômes</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Parcourir les annales par diplôme</h1>
          <p className="text-sm text-muted-foreground">
            Choisis ton diplôme pour afficher les matières et les sessions disponibles.
          </p>
        </div>

        {diplomas.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            Aucun diplôme actif n&apos;est disponible pour le moment.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {diplomas.map((diploma) => (
              <Link
                key={diploma.id}
                href={`/diplomes/${diploma.id}`}
                className="group"
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
                    Voir les matières disponibles →
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
