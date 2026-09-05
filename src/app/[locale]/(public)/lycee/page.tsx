import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { BookOpen, FlaskConical, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { buildCanonicalUrl } from '@/lib/seo';

export const dynamic = 'force-dynamic';
const canonical = buildCanonicalUrl('/lycee');

export const metadata: Metadata = {
  title: 'Lycée — Quiz, entraînements et annales du Baccalauréat',
  description: 'De la Seconde à la Terminale, entraîne-toi avec des quiz par chapitre, des exercices progressifs et des corrections détaillées. En Première et Terminale, complète ta préparation avec les annales officielles du Bac.',
  alternates: canonical ? { canonical } : undefined,
};

export default function LyceePage() {
  noStore();

  const lyceeFeatures = [
    {
      title: 'Quiz & Entraînements par chapitre',
      description: 'Quiz interactifs de la Seconde à la Terminale pour consolider les notions et progresser chapitre après chapitre.',
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
      title: 'Annales officielles du Bac',
      description: 'En Première et Terminale, entraîne-toi sur des sujets officiels du Bac classés par session, spécialité et thème.',
      icon: BookOpen,
      badge: 'Annales',
      href: '/annales?diploma=Baccalaur%C3%A9at+g%C3%A9n%C3%A9ral',
      cta: 'Explorer les annales',
    },
  ];

  const specialties = [
    {
      name: 'Spécialité Physique-Chimie',
      grade: 'Première & Terminale',
      annalesHref: '/annales?diploma=Baccalaur%C3%A9at+g%C3%A9n%C3%A9ral&subject=Sciences+physiques',
      trainingHref: '/entrainement/sciences-physiques',
    },
    {
      name: 'Spécialité Mathématiques',
      grade: 'Première & Terminale',
      annalesHref: '/annales?diploma=Baccalaur%C3%A9at+g%C3%A9n%C3%A9ral&subject=Math%C3%A9matiques',
    },
    {
      name: 'Spécialité SVT',
      grade: 'Terminale',
      annalesHref: '/annales?diploma=Baccalaur%C3%A9at+g%C3%A9n%C3%A9ral&subject=Sciences+de+la+Vie+et+de+la+Terre',
    },
    {
      name: 'Spécialité SES',
      grade: 'Terminale',
      annalesHref: '/annales?diploma=Baccalaur%C3%A9at+g%C3%A9n%C3%A9ral&subject=Sciences+%C3%89conomiques+et+Sociales',
    },
    {
      name: 'Spécialité NSI',
      grade: 'Terminale',
      annalesHref: '/annales?diploma=Baccalaur%C3%A9at+g%C3%A9n%C3%A9ral&subject=Num%C3%A9rique+et+Sciences+Informatiques',
    },
    {
      name: 'Spécialité HGGSP',
      grade: 'Terminale',
      annalesHref: '/annales?diploma=Baccalaur%C3%A9at+g%C3%A9n%C3%A9ral&subject=Histoire-G%C3%A9ographie%2C+G%C3%A9opolitique+et+Sciences+Politiques',
    },
    {
      name: 'Tronc Commun — Français',
      grade: 'Première',
      annalesHref: '/annales?diploma=Baccalaur%C3%A9at+g%C3%A9n%C3%A9ral&subject=Fran%C3%A7ais',
    },
    {
      name: 'Tronc Commun — Philosophie',
      grade: 'Terminale',
      annalesHref: '/annales?diploma=Baccalaur%C3%A9at+g%C3%A9n%C3%A9ral&subject=Philosophie',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-8">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Lycée' },
          ]}
        />

        {/* HERO SECTION */}
        <section className="overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_260px]">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">Seconde · Première · Terminale</Badge>
                <Badge variant="outline">Bac Général & Technologique</Badge>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-heading md:text-4xl">
                Progresse au Lycée, chapitre après chapitre
              </h1>

              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base text-balance">
                De la Seconde à la Terminale, entraîne-toi avec des quiz par chapitre, des exercices progressifs et des corrections détaillées. En Première et Terminale, complète ta préparation avec les annales officielles du Bac.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/entrainement">
                    Commencer à s’entraîner <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/annales?diploma=Baccalaur%C3%A9at+g%C3%A9n%C3%A9ral">
                    Consulter les annales du Bac
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-2xl border border-border bg-background p-6">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-brand/10 text-fg-brand">
                <BookOpen className="h-14 w-14" />
              </div>
            </div>
          </div>
        </section>

        {/* FONCTIONNALITÉS DISPONIBLES */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-heading">Fonctionnalités Lycée</h2>
            <p className="text-sm text-muted-foreground">
              Des outils complémentaires pour consolider le cours et réussir les épreuves.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {lyceeFeatures.map((feature, idx) => {
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

        {/* MATIÈRES & SPÉCIALITÉS */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-heading">Matières & Spécialités</h2>
            <p className="text-sm text-muted-foreground">
              Accède aux annales et entraînements disponibles par discipline.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((spec, idx) => (
              <Card key={idx} className="flex flex-col justify-between">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">{spec.name}</CardTitle>
                  <CardDescription className="text-xs">{spec.grade}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-2">
                  <Link
                    href={spec.annalesHref}
                    className="group flex items-center justify-between text-xs font-medium text-fg-brand hover:underline"
                  >
                    <span>Annales & corrigés</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  {spec.trainingHref && (
                    <Link
                      href={spec.trainingHref}
                      className="group flex items-center justify-between text-xs font-medium text-success hover:underline"
                    >
                      <span>Quiz d’entraînement</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

