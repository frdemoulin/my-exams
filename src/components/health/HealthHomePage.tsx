import Link from 'next/link';
import { ArrowRight, ChevronLeft } from 'lucide-react';

import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  healthAudienceBadges,
  healthCollesPrinciples,
  healthHeroHighlights,
  healthSectionDefinitions,
} from './health-content';
import { HealthFeatureCards } from './HealthFeatureCards';

export function HealthHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-10">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Santé' },
          ]}
        />

        <section className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid gap-8 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.02),rgba(6,182,212,0.06))] p-6 md:grid-cols-[minmax(0,1fr)_320px] md:p-8">
            <div className="space-y-5">
              <Badge variant="secondary" className="w-fit">
                Section expérimentale
              </Badge>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-heading md:text-5xl">
                  My Exams Santé
                </h1>
                <p className="max-w-3xl text-base leading-7 text-foreground/90 md:text-lg">
                  Une future plateforme d’entraînement pour les études de santé :
                  UE, colles, examens blancs et annales corrigées.
                </p>
                <p className="w-full text-sm leading-6 text-muted-foreground md:text-base">
                  Cette section est en cours de construction. Elle servira à
                  tester une expérience dédiée aux étudiants en PASS, LAS et aux
                  futurs parcours d’accès aux études de santé.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={healthSectionDefinitions.ue.href}>
                    Découvrir les UE
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={healthSectionDefinitions.colles.href}>
                    Voir les colles
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={healthSectionDefinitions['examens-blancs'].href}>
                    Voir les examens blancs
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={healthSectionDefinitions.annales.href}>
                    Voir les annales Santé
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/">
                    <ChevronLeft className="h-4 w-4" />
                    Retour à l’accueil
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="rounded-3xl border-emerald-200/70 bg-background/85 shadow-soft backdrop-blur-sm hover:bg-background/85">
              <CardHeader className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {healthAudienceBadges.map((badge) => (
                    <Badge key={badge} variant="outline">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl text-heading">
                  Premier cadrage produit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                {healthHeroHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border bg-card p-4"
                    >
                      <div className="mb-2 flex items-center gap-2 text-heading">
                        <Icon className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />
                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          {item.label}
                        </span>
                      </div>
                      <p className="leading-6">{item.value}</p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-heading">
              Une base technique déjà prête pour la verticale Santé
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
              Cette première itération pose la promesse produit sans introduire
              encore les modèles de données PASS, LAS ou les logiques
              d’abonnement.
            </p>
          </div>
          <HealthFeatureCards />
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <Card className="h-full rounded-3xl border-border bg-card hover:bg-card">
            <CardHeader className="space-y-3">
              <Badge variant="secondary" className="w-fit">
                Format à cadrer
              </Badge>
              <CardTitle className="text-xl text-heading">
                Comment seront pensées les colles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              {healthCollesPrinciples.map((principle) => (
                <p key={principle}>{principle}</p>
              ))}
            </CardContent>
          </Card>

          <Card className="h-full rounded-3xl border-border bg-card hover:bg-card">
            <CardHeader className="space-y-3">
              <Badge variant="outline" className="w-fit">
                Routage prêt
              </Badge>
              <CardTitle className="text-xl text-heading">
                Première entrée prévue
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              <p>
                Une section <code>/sante/colles</code> est déjà préparée pour
                accueillir ce format.
              </p>
              <p>
                Elle pourra ensuite se décliner par UE, puis par chapitres et
                sous-sections d’UE sans changer le principe de routage local par
                sous-domaine.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <Card className="h-full rounded-3xl border-border bg-card hover:bg-card">
            <CardHeader className="space-y-3">
              <Badge variant="secondary" className="w-fit">
                Section expérimentale
              </Badge>
              <CardTitle className="text-xl text-heading">
                Ce qui est testé dans cette branche
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              <p>
                Cette page permet de tester le positionnement Santé et le
                routage par sous-domaine. Les contenus définitifs seront ajoutés
                ultérieurement.
              </p>
              <p>
                En local, <span className="font-medium text-heading">/sante</span> et{' '}
                <span className="font-medium text-heading">
                  sante.lvh.me:3000
                </span>{' '}
                servent la même section sans exposer <code>/sante</code> dans
                l’URL publique du sous-domaine.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full rounded-3xl border-border bg-card hover:bg-card">
            <CardHeader className="space-y-3">
              <Badge variant="outline" className="w-fit">
                Suite logique
              </Badge>
              <CardTitle className="text-xl text-heading">
                Prochaines briques probables
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-6 text-muted-foreground">
              <p>Structure par UE.</p>
              <p>Colles par UE, chapitres et sous-sections d’UE.</p>
              <p>Examens blancs chronométrés.</p>
              <p>Annales réelles et corrigées.</p>
            </CardContent>
          </Card>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
