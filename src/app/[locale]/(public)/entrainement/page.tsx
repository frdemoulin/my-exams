import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { ArrowRight, FlaskConical } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
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
import { fetchSciencePhysicsTrainingChapters } from '@/core/training';
import { buildCanonicalUrl } from '@/lib/seo';

const canonical = buildCanonicalUrl('/entrainement');

export const metadata: Metadata = {
  title: 'Entraînement',
  description: 'Choisis une matière puis un niveau pour accéder aux QCM d’entraînement.',
  alternates: canonical ? { canonical } : undefined,
};

export default async function TrainingHomePage() {
  noStore();
  const sciencePhysicsChapters = await fetchSciencePhysicsTrainingChapters();
  const levels = Array.from(new Set(sciencePhysicsChapters.map((chapter) => chapter.level)));
  const totalQuizCount = sciencePhysicsChapters.reduce(
    (sum, chapter) => sum + chapter.quizCount,
    0
  );

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-10">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Entraînement' },
          ]}
        />

        <section className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1fr)_260px] md:p-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Progression visible
              </Badge>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-heading md:text-4xl">
                  Choisir une matière
                </h1>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                  Commence par la matière, puis affine par niveau avant d’entrer dans les chapitres et leur parcours de QCM.
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
          <div>
            <h2 className="text-xl font-semibold text-heading">Matières disponibles</h2>
            <p className="text-sm text-muted-foreground">
              {sciencePhysicsChapters.length > 0 ? 'Choisis une entrée pour accéder au niveau puis aux chapitres.' : 'Aucune matière publiée pour le moment.'}
            </p>
          </div>

          {sciencePhysicsChapters.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
              Aucun contenu d&apos;entraînement n&apos;est publié pour le moment.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <Link
                href="/entrainement/sciences-physiques"
                className="group block h-full rounded-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Card className="flex h-full flex-col transition-colors group-hover:border-brand/50">
                  <CardHeader>
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <Badge variant="outline">Matière</Badge>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </div>
                    <CardTitle className="text-base md:text-lg">Sciences physiques</CardTitle>
                    <CardDescription>
                      Spécialité lycée, organisée par niveau puis chapitre.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary">{levels.length} niveau{levels.length > 1 ? 'x' : ''}</Badge>
                    <Badge variant="outline">{sciencePhysicsChapters.length} chapitre{sciencePhysicsChapters.length > 1 ? 's' : ''}</Badge>
                    <Badge variant="outline">{totalQuizCount} QCM</Badge>
                  </CardContent>
                </Card>
              </Link>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}