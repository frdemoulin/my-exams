import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { ArrowRight, FlaskConical } from 'lucide-react';
import { fetchSciencePhysicsTrainingChapters } from '@/core/training';
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
import { buildCanonicalUrl } from '@/lib/seo';

const canonical = buildCanonicalUrl('/entrainement/sciences-physiques');

export const metadata: Metadata = {
  title: 'Entraînement Sciences physiques',
  description: 'QCM courts par chapitre pour réviser la spécialité sciences physiques en terminale.',
  alternates: canonical ? { canonical } : undefined,
};

export default async function SciencePhysicsTrainingPage() {
  noStore();
  const chapters = await fetchSciencePhysicsTrainingChapters();

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
                Sciences physiques · Spé terminale
              </Badge>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-heading md:text-4xl">
                  Entra&icirc;nement par chapitre
                </h1>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                  Des QCM courts pour revoir les notions clés avant de revenir aux
                  annales. Les questions acceptent les formules scientifiques en
                  TeX.
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
              <h2 className="text-xl font-semibold text-heading">Chapitres</h2>
              <p className="text-sm text-muted-foreground">
                {chapters.length} chapitres disponibles.
              </p>
            </div>
          </div>

          {chapters.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
              Aucun chapitre d&apos;entra&icirc;nement n&apos;est publi&eacute; pour le moment.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.id}
                  href={`/entrainement/sciences-physiques/${chapter.slug}`}
                  className="group block h-full rounded-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Card className="flex h-full flex-col transition-colors group-hover:border-brand/50">
                    <CardHeader>
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <Badge variant="outline">Chapitre {chapter.order}</Badge>
                        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                      </div>
                      <CardTitle className="text-base md:text-lg">
                        {chapter.title}
                      </CardTitle>
                      <CardDescription>Terminale · Sciences physiques</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <Badge variant={chapter.questionCount > 0 ? 'secondary' : 'outline'}>
                        {chapter.questionCount} QCM
                      </Badge>
                      {chapter.difficulties.map((difficulty) => (
                        <Badge key={difficulty} variant="theme">
                          {difficulty === 'EASY'
                            ? 'Facile'
                            : difficulty === 'MEDIUM'
                              ? 'Moyen'
                              : 'Difficile'}
                        </Badge>
                      ))}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
