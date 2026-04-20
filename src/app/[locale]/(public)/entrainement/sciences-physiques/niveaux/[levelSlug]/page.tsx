import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import {
  fetchSciencePhysicsTrainingLevelBySlug,
  getSciencePhysicsTrainingLevelPath,
} from '@/core/training';
import { getTrainingQuizStageLabel } from '@/core/training/training-stage';
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

type PageProps = {
  params: Promise<{
    levelSlug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { levelSlug } = await params;
  const level = await fetchSciencePhysicsTrainingLevelBySlug(levelSlug);

  if (!level) {
    return {
      title: 'Niveau introuvable',
    };
  }

  const canonical = buildCanonicalUrl(getSciencePhysicsTrainingLevelPath(level.value));

  return {
    title: `Entraînement Sciences physiques ${level.label}`,
    description: `Chapitres et QCM d'entraînement en sciences physiques pour le niveau ${level.label}.`,
    alternates: canonical ? { canonical } : undefined,
  };
}

export default async function SciencePhysicsTrainingLevelPage({ params }: PageProps) {
  noStore();
  const { levelSlug } = await params;
  const level = await fetchSciencePhysicsTrainingLevelBySlug(levelSlug);

  if (!level) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-10">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Entraînement', href: '/entrainement' },
            { label: 'Sciences physiques', href: '/entrainement/sciences-physiques' },
            { label: level.label },
          ]}
        />

        <Button asChild variant="ghost" size="sm" className="w-fit gap-2">
          <Link href="/entrainement/sciences-physiques">
            <ChevronLeft className="h-4 w-4" />
            Retour aux niveaux
          </Link>
        </Button>

        <section className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1fr)_240px] md:p-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Sciences physiques · {level.label}
              </Badge>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-heading md:text-4xl">
                  Chapitres d&apos;entraînement pour {level.label}
                </h1>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                  Choisis un chapitre pour accéder aux grands thèmes, aux QCM ciblés et à la synthèse quand elle est disponible.
                </p>
              </div>
            </div>
            <div className="grid gap-3 rounded-2xl border border-border bg-background p-5 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Chapitres</p>
                <p className="text-xl font-semibold text-heading">{level.chapterCount}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">QCM</p>
                <p className="text-xl font-semibold text-heading">{level.quizCount}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Questions</p>
                <p className="text-xl font-semibold text-heading">{level.questionCount}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-heading">Chapitres</h2>
              <p className="text-sm text-muted-foreground">
                {level.chapterCount} chapitre{level.chapterCount > 1 ? 's' : ''} publiés pour {level.label}.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {level.chapters.map((chapter) => (
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
                    <CardTitle className="text-base md:text-lg">{chapter.title}</CardTitle>
                    <CardDescription>{level.label} · Sciences physiques</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant={chapter.questionCount > 0 ? 'secondary' : 'outline'}>
                      {chapter.quizCount} QCM
                    </Badge>
                    <Badge variant="outline">
                      {chapter.questionCount} question{chapter.questionCount > 1 ? 's' : ''}
                    </Badge>
                    {chapter.stages.map((stage) => (
                      <Badge key={stage} variant="theme">
                        {getTrainingQuizStageLabel(stage)}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}