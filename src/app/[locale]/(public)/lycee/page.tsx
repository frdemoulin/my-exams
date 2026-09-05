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
import { UniverseHero } from '@/components/shared/universe-hero';
import {
  UniverseFeaturesSection,
  type UniverseFeatureItem,
} from '@/components/shared/universe-features-section';
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

  const lyceeFeatures: UniverseFeatureItem[] = [
    {
      title: 'Quiz & Entraînements par chapitre',
      description:
        'Quiz interactifs de la Seconde à la Terminale pour consolider les notions et progresser chapitre après chapitre.',
      icon: FlaskConical,
      badge: 'Quiz & Entraînements',
      cta: {
        label: 'Accéder aux entraînements',
        href: '/entrainement',
      },
    },
    {
      title: 'Corrections détaillées',
      description:
        'Retrouve des résolutions détaillées et des explications étape par étape pour les exercices et sujets corrigés.',
      icon: CheckCircle2,
      badge: 'Corrections',
      cta: {
        label: 'Consulter les corrections',
        href: '/annales',
      },
    },
    {
      title: 'Annales officielles du Bac',
      description:
        'En Première et Terminale, entraîne-toi sur des sujets officiels du Bac classés par session, spécialité et thème.',
      icon: BookOpen,
      badge: 'Annales',
      cta: {
        label: 'Explorer les annales',
        href: '/annales?diploma=Baccalaur%C3%A9at+g%C3%A9n%C3%A9ral',
      },
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
        <UniverseHero
          badges={[
            { label: 'Seconde · Première · Terminale', variant: 'secondary' },
            { label: 'Bac Général & Technologique', variant: 'outline' },
          ]}
          title="Progresse au Lycée, chapitre après chapitre"
          description="De la Seconde à la Terminale, entraîne-toi avec des quiz par chapitre, des exercices progressifs et des corrections détaillées. En Première et Terminale, complète ta préparation avec les annales officielles du Bac."
          primaryCta={{
            label: 'Créer mon compte gratuit',
            href: '/log-in?callbackUrl=%2Flycee',
          }}
          secondaryCta={{
            label: 'Découvrir les fonctionnalités',
            href: '#fonctionnalites',
          }}
          note="Compte gratuit requis pour accéder aux quiz, exercices, annales et à ta progression."
          icon={BookOpen}
        />

        {/* FONCTIONNALITÉS DISPONIBLES */}
        <UniverseFeaturesSection
          title="Tout ce dont tu as besoin pour progresser"
          description="Des outils complémentaires pour progresser de la Seconde à la Terminale et préparer progressivement le Bac."
          features={lyceeFeatures}
        />

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

