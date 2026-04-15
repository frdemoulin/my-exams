import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, FileText } from 'lucide-react';
import { fetchSciencePhysicsTrainingChapterBySlug } from '@/core/training';
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
import { QuizSession } from '@/components/training/quiz-session';
import { buildCanonicalUrl } from '@/lib/seo';

type PageProps = {
  params: Promise<{
    chapterSlug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { chapterSlug } = await params;
  const chapter = await fetchSciencePhysicsTrainingChapterBySlug(chapterSlug);

  if (!chapter) {
    return {
      title: 'Chapitre introuvable',
    };
  }

  const canonical = buildCanonicalUrl(
    `/entrainement/sciences-physiques/${chapter.slug}`
  );

  return {
    title: `${chapter.title} - Entraînement`,
    description: `QCM d'entraînement en sciences physiques : ${chapter.title}.`,
    alternates: canonical ? { canonical } : undefined,
  };
}

export default async function SciencePhysicsTrainingChapterPage({ params }: PageProps) {
  noStore();
  const { chapterSlug } = await params;
  const chapter = await fetchSciencePhysicsTrainingChapterBySlug(chapterSlug);

  if (!chapter) {
    notFound();
  }

  const easyCount = chapter.questions.filter((question) => question.difficulty === 'EASY').length;
  const mediumCount = chapter.questions.filter((question) => question.difficulty === 'MEDIUM').length;
  const hardCount = chapter.questions.filter((question) => question.difficulty === 'HARD').length;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 pb-16 pt-10">
        <div className="space-y-3">
          <PublicBreadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Entraînement', href: '/entrainement/sciences-physiques' },
              { label: chapter.title },
            ]}
          />

          <Button asChild variant="ghost" size="sm" className="w-fit gap-2">
            <Link href="/entrainement/sciences-physiques">
              <ChevronLeft className="h-4 w-4" />
              Retour aux chapitres
            </Link>
          </Button>
        </div>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-3">
            <Badge variant="secondary" className="w-fit">
              Chapitre {chapter.order} · Terminale
            </Badge>
            <h1 className="text-3xl font-semibold tracking-tight text-heading md:text-4xl">
              {chapter.title}
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              QCM court avec correction imm&eacute;diate. Les formules sont
              rendues en TeX pour garder une écriture scientifique lisible.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Progression v1</CardTitle>
              <CardDescription>
                D&eacute;marrage volontairement simple.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{chapter.questions.length} QCM</Badge>
                <Badge variant="outline">{easyCount} facile</Badge>
                <Badge variant="outline">{mediumCount} moyen</Badge>
                <Badge variant="outline">{hardCount} difficile</Badge>
              </div>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/diplomes">
                  <FileText className="h-4 w-4" />
                  Voir les annales
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <QuizSession questions={chapter.questions} />
      </main>
      <SiteFooter />
    </div>
  );
}
