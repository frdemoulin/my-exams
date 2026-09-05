import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { BookOpen, FlaskConical, School, ArrowRight, CheckCircle2 } from 'lucide-react';
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
  title: 'Collège — Quiz, entraînements et annales du Brevet',
  description: 'De la 6e à la 3e, entraîne-toi avec des quiz par chapitre, des exercices progressifs et des corrections détaillées. En 3e, complète ta préparation avec les annales officielles du Brevet.',
  alternates: canonical ? { canonical } : undefined,
};

export default function CollegePage() {
  noStore();

  const collegeFeatures = [
    {
      title: 'Quiz & Entraînements par chapitre',
      description: 'Quiz interactifs de la 6e à la 3e pour consolider les notions et progresser chapitre après chapitre.',
      icon: FlaskConical,
      badge: 'Quiz & Entraînements',
      href: '/entrainement',
      cta: 'Accéder aux entraînements',
    },
    {
      title: 'Corrections détaillées',
      description: 'Retrouve des résolutions détaillées et des explications étape par étape pour les exercices et sujets corrigés.',
      icon: CheckCircle2,
      badge: 'Corrections',
      href: '/annales',
      cta: 'Consulter les corrections',
    },
    {
      title: 'Annales officielles du Brevet',
      description: 'En 3e, entraîne-toi sur des sujets officiels du Brevet pour te préparer progressivement aux conditions de l’examen.',
      icon: BookOpen,
      badge: 'Annales',
      href: '/annales?diploma=Brevet+des+coll%C3%A8ges',
      cta: 'Explorer les annales',
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
                <Badge variant="secondary">6e · 5e · 4e · 3e</Badge>
                <Badge variant="outline">Brevet</Badge>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-heading md:text-4xl">
                Progresse au Collège, chapitre après chapitre
              </h1>

              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base text-balance">
                De la 6e à la 3e, entraîne-toi avec des quiz par chapitre, des exercices progressifs et des corrections détaillées. En 3e, complète ta préparation avec les annales officielles du Brevet.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/entrainement">
                    Commencer à s’entraîner <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/annales?diploma=Brevet+des+coll%C3%A8ges">
                    Consulter les annales du Brevet
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-2xl border border-border bg-background p-6">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-brand/10 text-fg-brand">
                <School className="h-14 w-14" />
              </div>
            </div>
          </div>
        </section>

        {/* FONCTIONNALITÉS DISPONIBLES */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-heading">Fonctionnalités Collège</h2>
            <p className="text-sm text-muted-foreground">
              Des outils complémentaires pour consolider le cours et réussir les épreuves.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {collegeFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="flex flex-col justify-between">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-fg-brand">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription className="text-sm leading-normal">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button asChild variant="outline" size="sm" className="w-full justify-center">
                      <Link href={feature.href}>{feature.cta} &rarr;</Link>
                    </Button>
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

