import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchDiplomaById } from '@/core/diploma';
import { fetchActiveSubjectsByDiplomaId } from '@/core/exam-paper';
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

type PageProps = {
  params: {
    diplomaId: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const diploma = await fetchDiplomaById(params.diplomaId);

  if (!diploma) {
    return {
      title: 'Diplôme introuvable | My Exams',
    };
  }

  return {
    title: `${diploma.longDescription} | My Exams`,
    description: `Matières disponibles pour ${diploma.longDescription}.`,
  };
}

export default async function DiplomaPage({ params }: PageProps) {
  noStore();
  const diploma = await fetchDiplomaById(params.diplomaId);

  if (!diploma || !diploma.isActive) {
    notFound();
  }

  const subjects = await fetchActiveSubjectsByDiplomaId(diploma.id);

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
              <BreadcrumbPage>{diploma.longDescription}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">{diploma.longDescription}</h1>
          <p className="text-sm text-muted-foreground">
            Sélectionne une matière pour afficher les sessions disponibles.
          </p>
        </div>

        {subjects.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            Aucune matière n&apos;est disponible pour ce diplôme.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                href={`/diplomes/${diploma.id}/matieres/${subject.id}`}
                className="group"
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
                    Voir les sessions disponibles →
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
