import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { ChevronLeft, FlaskConical, Layers3 } from 'lucide-react';
import { redirect } from 'next/navigation';
import {
  fetchSciencePhysicsTrainingLevels,
  getSciencePhysicsTrainingLevelPath,
} from '@/core/training';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { buildCanonicalUrl } from '@/lib/seo';

const canonical = buildCanonicalUrl('/entrainement/sciences-physiques');

export const metadata: Metadata = {
  title: 'Entraînement Sciences physiques',
  description: 'QCM courts par chapitre pour réviser la spécialité sciences physiques en terminale.',
  alternates: canonical ? { canonical } : undefined,
};

type ResolvedSearchParams = {
  niveau?: string;
};

type PageProps = {
  searchParams?: Promise<ResolvedSearchParams>;
};

export default async function SciencePhysicsTrainingPage({ searchParams }: PageProps) {
  noStore();
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const requestedLevel = resolvedSearchParams?.niveau?.trim();

  if (requestedLevel) {
    redirect(getSciencePhysicsTrainingLevelPath(requestedLevel));
  }

  const levels = await fetchSciencePhysicsTrainingLevels();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-10">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Entraînement', href: '/entrainement' },
            { label: 'Sciences physiques' },
          ]}
        />

        <Button asChild variant="ghost" size="sm" className="w-fit gap-2">
          <Link href="/entrainement">
            <ChevronLeft className="h-4 w-4" />
            Retour aux matières
          </Link>
        </Button>

        <section className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1fr)_260px] md:p-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Matière · Étape 2
              </Badge>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-heading md:text-4xl">
                  Choisir un niveau en sciences physiques
                </h1>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                  Sélectionne un niveau pour accéder à la liste des chapitres, puis entre dans les grands thèmes et les QCM du chapitre.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-border bg-background p-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand/10 text-fg-brand">
                <FlaskConical className="h-10 w-10" />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-heading">Niveaux</h2>
              <p className="text-sm text-muted-foreground">
                {levels.length} niveau{levels.length > 1 ? 'x' : ''} publiés pour cette matière.
              </p>
            </div>
          </div>

          {levels.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
              Aucun niveau d&apos;entra&icirc;nement n&apos;est publi&eacute; pour le moment.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {levels.map((level) => {
                const href = getSciencePhysicsTrainingLevelPath(level.value);

                return (
                  <Link
                    key={level.value}
                    href={href}
                    className="group block h-full rounded-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Card className="flex h-full flex-col transition-colors group-hover:border-brand/50">
                      <CardHeader>
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <Badge variant="outline">Niveau</Badge>
                          <Layers3 className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <CardTitle className="text-base md:text-lg">{level.label}</CardTitle>
                        <CardDescription>
                          {level.chapterCount} chapitre{level.chapterCount > 1 ? 's' : ''} disponibles.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="mt-auto flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <Badge variant="secondary">{level.quizCount} QCM</Badge>
                        <Badge variant="outline">
                          {level.questionCount} question{level.questionCount > 1 ? 's' : ''}
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
