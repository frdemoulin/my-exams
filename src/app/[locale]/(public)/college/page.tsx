import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { BookOpen, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { buildCanonicalUrl } from '@/lib/seo';

export const dynamic = 'force-dynamic';
const canonical = buildCanonicalUrl('/college');

export const metadata: Metadata = {
  title: 'Collège — Annales & Sujets Brevet des collèges',
  description: 'Prépare le Diplôme National du Brevet (DNB) avec des sujets d’annales et corrections détaillées.',
  alternates: canonical ? { canonical } : undefined,
};

export default function CollegePage() {
  noStore();

  const collegeFeatures = [
    {
      title: 'Annales officielles',
      description: 'Accède aux sujets d’examen du Diplôme National du Brevet (DNB) pour t’entraîner en conditions réelles.',
      icon: BookOpen,
    },
    {
      title: 'Corrections détaillées',
      description: 'Chaque exercice est accompagné d’une proposition de correction pour comprendre la méthode attendue.',
      icon: CheckCircle2,
    },
  ];

  const subjects = [
    { name: 'Mathématiques', grade: 'Classe de 3e' },
    { name: 'Français', grade: 'Classe de 3e' },
    { name: 'Histoire-Géographie & EMC', grade: 'Classe de 3e' },
    { name: 'Sciences (SVT / Physique-Chimie)', grade: 'Classe de 3e' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-8">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Collège' },
          ]}
        />

        {/* HERO SECTION */}
        <section className="overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_260px]">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">Niveau Collège</Badge>
                <Badge variant="outline">Diplôme National du Brevet (DNB)</Badge>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-heading md:text-4xl">
                Révisions du Brevet des collèges
              </h1>

              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Retrouve les sujets d’annales officiels du Brevet et leurs corrections pour réviser efficacement ton année de 3<sup>e</sup> et aborder l’examen en toute sérénité.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/annales?diploma=Brevet+des+coll%C3%A8ges">
                    Rechercher les annales Brevet <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/diplomes">
                    Parcourir par diplôme
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-2xl border border-border bg-background p-6">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-brand/10 text-fg-brand">
                <GraduationCap className="h-14 w-14" />
              </div>
            </div>
          </div>
        </section>

        {/* FONCTIONNALITÉS DISPONIBLES */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-heading">Ce qui est disponible pour le Collège</h2>
            <p className="text-sm text-muted-foreground">
              Des ressources ciblées pour la préparation aux épreuves écrites.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {collegeFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="flex flex-col justify-between">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-fg-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription className="text-sm leading-normal">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="text-xs">
                      Disponible
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* MATIÈRES CLÉS */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-heading">Matières du Brevet</h2>
            <p className="text-sm text-muted-foreground">
              Explore les sujets d’examen par discipline.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.map((subject, idx) => (
              <Link
                key={idx}
                href={`/annales?diploma=Brevet+des+coll%C3%A8ges&subject=${encodeURIComponent(subject.name)}`}
                className="group block h-full rounded-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Card className="flex h-full flex-col justify-between transition-colors group-hover:border-brand/50">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">{subject.name}</CardTitle>
                    <CardDescription className="text-xs">{subject.grade}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 text-xs text-fg-brand font-medium flex items-center justify-between">
                    <span>Voir les annales</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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

