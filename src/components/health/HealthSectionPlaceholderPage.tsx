import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  type HealthSectionSlug,
  healthSectionDefinitions,
} from './health-content';

type HealthSectionPlaceholderPageProps = {
  section: HealthSectionSlug;
};

export function HealthSectionPlaceholderPage({
  section,
}: HealthSectionPlaceholderPageProps) {
  const definition = healthSectionDefinitions[section];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-4 pb-16 pt-10">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Santé', href: '/sante' },
            { label: definition.title },
          ]}
        />

        <section className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="space-y-6 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.14),_transparent_35%),linear-gradient(180deg,rgba(16,185,129,0.08),transparent_60%)] p-6 md:p-8">
            <div className="space-y-3">
              <Badge variant="secondary" className="w-fit">
                {definition.eyebrow}
              </Badge>
              <h1 className="text-3xl font-semibold tracking-tight text-heading md:text-4xl">
                {definition.title}
              </h1>
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
                {definition.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/sante">
                  <ArrowLeft className="h-4 w-4" />
                  Revenir à la page Santé
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">
                  Retour à l’accueil
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Card className="rounded-3xl border-border bg-card hover:bg-card">
          <CardHeader className="space-y-3">
            <Badge variant="outline" className="w-fit">
              Sous-route branchée
            </Badge>
            <CardTitle className="text-xl text-heading">
              Routage prêt pour la suite
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
            <p>
              Cette page valide déjà l’accès via <code>{definition.href}</code>{' '}
              et via le sous-domaine local Santé.
            </p>
            <p>
              Les contenus détaillés arriveront plus tard, sans changer
              l’architecture générale de l’application Next.js.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border bg-card hover:bg-card">
          <CardHeader className="space-y-3">
            <Badge variant="secondary" className="w-fit">
              Périmètre visé
            </Badge>
            <CardTitle className="text-xl text-heading">
              Ce que couvrira cette section
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
            {definition.highlights.map((highlight) => (
              <p key={highlight}>{highlight}</p>
            ))}
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}
