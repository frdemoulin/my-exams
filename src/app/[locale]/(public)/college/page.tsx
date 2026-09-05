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
import { UniverseHero } from '@/components/shared/universe-hero';
import {
  UniverseFeaturesSection,
  type UniverseFeatureItem,
} from '@/components/shared/universe-features-section';
import { buildCanonicalUrl } from '@/lib/seo';

export const dynamic = 'force-dynamic';
const canonical = buildCanonicalUrl('/college');

export const metadata: Metadata = {
  title: 'Collège — Quiz, entraînements et annales du Brevet | My Exams',
  description:
    'Révise et progresse au Collège de la 6e à la 3e : quiz interactifs par chapitre, résolutions détaillées et annales officielles du Brevet des collèges.',
  alternates: { canonical },
};

export default function CollegePage() {
  noStore();

  const collegeFeatures: UniverseFeatureItem[] = [
    {
      title: 'Quiz & Entraînements par chapitre',
      description:
        'Quiz interactifs de la 6e à la 3e pour consolider les notions et progresser chapitre après chapitre.',
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
      title: 'Annales officielles du Brevet',
      description:
        'En 3e, entraîne-toi sur des sujets officiels du Brevet pour te préparer progressivement aux conditions de l’examen.',
      icon: BookOpen,
      badge: 'Annales',
      cta: {
        label: 'Explorer les annales',
        href: '/annales?diploma=Brevet+des+coll%C3%A8ges',
      },
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
        <UniverseHero
          badges={[
            { label: '6e · 5e · 4e · 3e', variant: 'secondary' },
            { label: 'Brevet', variant: 'outline' },
          ]}
          title="Progresse au Collège, chapitre après chapitre"
          description="De la 6e à la 3e, entraîne-toi avec des quiz par chapitre, des exercices progressifs et des corrections détaillées. En 3e, complète ta préparation avec les annales officielles du Brevet."
          primaryCta={{
            label: 'Créer mon compte gratuit',
            href: '/log-in?callbackUrl=%2Fcollege',
          }}
          secondaryCta={{
            label: 'Découvrir les fonctionnalités',
            href: '#fonctionnalites',
          }}
          note="Compte gratuit requis pour accéder aux quiz, exercices, annales et à ta progression."
          icon={School}
        />

        {/* FONCTIONNALITÉS DISPONIBLES */}
        <UniverseFeaturesSection
          title="Tout ce dont tu as besoin pour progresser"
          description="Des outils complémentaires pour consolider tes connaissances de la 6e à la 3e et préparer progressivement le Brevet."
          features={collegeFeatures}
        />

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

