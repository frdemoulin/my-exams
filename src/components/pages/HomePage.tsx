'use client';

import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  FlaskConical,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Award,
  Sparkles,
  Search,
} from 'lucide-react';

import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <PublicHeader />

      <main className="mx-auto max-w-6xl w-full flex-1 space-y-16 px-4 py-10 md:py-16">
        {/* 1. HERO */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-neutral-primary-soft px-3.5 py-1 text-xs font-semibold text-muted-foreground shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-fg-brand" />
            <span>Plateforme de r&eacute;vision du coll&egrave;ge &agrave; la L1 Sant&eacute;</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl md:text-5xl lg:text-6xl text-balance">
            Des entra&icirc;nements cibl&eacute;s pour r&eacute;ussir vos{' '}
            <span className="text-fg-brand">&eacute;preuves</span>
          </h1>

          <p className="text-sm md:text-base text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Annales d&apos;examens officielles, corrections d&eacute;taill&eacute;es et parcours d&apos;entra&icirc;nement adapt&eacute;s &agrave; chaque cycle d&apos;apprentissage.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/annales">
                <Search className="mr-2 h-4 w-4" /> Consulter les annales
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/college">
                Explorer par niveau
              </Link>
            </Button>
          </div>
        </section>

        {/* 2. CHOISISSEZ VOTRE UNIVERS */}
        <section className="space-y-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-heading md:text-3xl">
              Choisissez votre univers
            </h2>
            <p className="text-sm text-muted-foreground">
              S&eacute;lectionnez votre niveau pour d&eacute;couvrir les ressources d&eacute;di&eacute;es.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* COLLÈGE */}
            <Card className="flex flex-col justify-between border-border transition-all hover:border-brand/50 hover:shadow-md">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-fg-brand">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs font-semibold">
                    Coll&egrave;ge
                  </Badge>
                </div>

                <div>
                  <CardTitle className="text-xl">Coll&egrave;ge</CardTitle>
                  <CardDescription className="text-xs mt-1">
                    Dipl&ocirc;me National du Brevet (DNB) &bull; Classe de 3<sup>e</sup>
                  </CardDescription>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <Badge variant="secondary" className="text-2xs">
                    Annales
                  </Badge>
                  <Badge variant="secondary" className="text-2xs">
                    Corrections
                  </Badge>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sujets d&apos;examen officiels du Brevet et corrections d&eacute;taill&eacute;es pour consolider les acquis de 3<sup>e</sup> et aborder l&apos;&eacute;preuve en toute confiance.
                </p>
              </CardHeader>

              <CardContent className="pt-0 space-y-2">
                <Button asChild className="w-full justify-center" size="sm">
                  <Link href="/college">
                    D&eacute;couvrir le Coll&egrave;ge <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* LYCÉE */}
            <Card className="flex flex-col justify-between border-border transition-all hover:border-brand/50 hover:shadow-md">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-fg-brand">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs font-semibold">
                    Lyc&eacute;e
                  </Badge>
                </div>

                <div>
                  <CardTitle className="text-xl">Lyc&eacute;e</CardTitle>
                  <CardDescription className="text-xs mt-1">
                    Baccalaur&eacute;at G&eacute;n&eacute;ral &amp; Technologique
                  </CardDescription>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <Badge variant="secondary" className="text-2xs">
                    Annales
                  </Badge>
                  <Badge variant="secondary" className="text-2xs">
                    Quiz / entra&icirc;nements
                  </Badge>
                  <Badge variant="secondary" className="text-2xs">
                    Corrections
                  </Badge>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Exercices d&apos;annales index&eacute;s par sp&eacute;cialit&eacute;, m&eacute;thodes de r&eacute;solution compl&egrave;tes et entra&icirc;nements par quiz de chapitres.
                </p>
              </CardHeader>

              <CardContent className="pt-0 space-y-2">
                <Button asChild className="w-full justify-center" size="sm">
                  <Link href="/lycee">
                    D&eacute;couvrir le Lyc&eacute;e <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* L1 SANTÉ */}
            <Card className="flex flex-col justify-between border-emerald-500/30 bg-emerald-50/10 dark:bg-emerald-950/10 transition-all hover:border-emerald-500/50 hover:shadow-md">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs font-semibold border-emerald-600 text-emerald-800 dark:text-emerald-300">
                    L1 Sant&eacute;
                  </Badge>
                </div>

                <div>
                  <CardTitle className="text-xl">L1 Sant&eacute;</CardTitle>
                  <CardDescription className="text-xs mt-1">
                    PASS &bull; L.AS &bull; Premi&egrave;re ann&eacute;e
                  </CardDescription>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <Badge variant="secondary" className="text-2xs border-emerald-600/30 bg-emerald-600/10 text-emerald-800 dark:text-emerald-300 font-medium">
                    Quiz de chapitres
                  </Badge>
                  <Badge variant="secondary" className="text-2xs border-emerald-600/30 bg-emerald-600/10 text-emerald-800 dark:text-emerald-300 font-medium">
                    Colles
                  </Badge>
                  <Badge variant="secondary" className="text-2xs border-emerald-600/30 bg-emerald-600/10 text-emerald-800 dark:text-emerald-300 font-medium">
                    Bilans de progression
                  </Badge>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Quiz de chapitres, colles progressives et bilans : un environnement pens&eacute; pour accompagner les r&eacute;visions tout au long du semestre.
                </p>
              </CardHeader>

              <CardContent className="pt-0 space-y-2">
                <Button asChild className="w-full justify-center bg-emerald-700 hover:bg-emerald-800 text-white font-semibold" size="sm">
                  <Link href="/sante">
                    D&eacute;couvrir la L1 Sant&eacute; <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 3. DES OUTILS POUR PROGRESSER */}
        <section className="space-y-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-heading md:text-3xl">
              Des outils pour progresser
            </h2>
            <p className="text-sm text-muted-foreground">
              Une m&eacute;thode de travail bas&eacute;e sur la pratique r&eacute;guli&egrave;re et l&apos;analyse des erreurs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* ANNALES */}
            <Card className="flex flex-col justify-between">
              <CardHeader className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-fg-brand">
                  <Search className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Annales d&apos;examens</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Recherchez et filtrez facilement les exercices issus des &eacute;preuves officielles par dipl&ocirc;me, mati&egrave;re, session et th&egrave;me.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="outline" size="sm" className="w-full justify-center text-xs">
                  <Link href="/annales">
                    Consulter les annales <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* QUIZ & ENTRAÎNEMENTS */}
            <Card className="flex flex-col justify-between">
              <CardHeader className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-fg-brand">
                  <FlaskConical className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Quiz &amp; Entra&icirc;nements</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Testez vos connaissances chapitre par chapitre gr&acirc;ce &agrave; des s&eacute;quences de quiz interactives et progressives.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="outline" size="sm" className="w-full justify-center text-xs">
                  <Link href="/entrainement">
                    D&eacute;couvrir les entra&icirc;nements <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* CORRECTIONS */}
            <Card className="flex flex-col justify-between">
              <CardHeader className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-fg-brand">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Corrections d&eacute;taill&eacute;es</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  Comprenez les d&eacute;marches attendues avec des explications &eacute;tape par &eacute;tape et les points cl&eacute;s du bar&egrave;me officiel.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="outline" size="sm" className="w-full justify-center text-xs">
                  <Link href="/annales">
                    Voir les corrig&eacute;s <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 4. UN ESPACE DÉDIÉ À LA L1 SANTÉ */}
        <section className="rounded-3xl border border-border bg-card p-6 md:p-10">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Espace d&eacute;di&eacute;</Badge>
                  <span className="text-xs text-muted-foreground">PASS / L.AS</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-heading">
                  Un espace d&eacute;di&eacute; &agrave; la L1 Sant&eacute;
                </h2>
              </div>
              <Button asChild size="sm" className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold">
                <Link href="/sante">
                  Acc&eacute;der &agrave; l&apos;espace Sant&eacute; <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">
              Quiz de chapitres, colles progressives et bilans : un environnement pens&eacute; pour accompagner les r&eacute;visions tout au long du semestre.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/80 bg-neutral-primary-soft p-4 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-sm text-heading">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Correction d&eacute;taill&eacute;e</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Justifications pas-&agrave;-pas pour chaque proposition afin de ma&icirc;triser les raisonnements et &eacute;viter les pi&egrave;ges.
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-neutral-primary-soft p-4 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-sm text-heading">
                  <TrendingUp className="h-4 w-4 text-brand" />
                  <span>Suivi des tentatives</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Historique complet de vos r&eacute;ponses et suivi de l&apos;&eacute;volution de votre taux de r&eacute;ussite session apr&egrave;s session.
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-neutral-primary-soft p-4 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-sm text-heading">
                  <Award className="h-4 w-4 text-amber-500" />
                  <span>Points forts &amp; &agrave; retravailler</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bilan p&eacute;dagogique cibl&eacute; par notion pour concentrer vos efforts sur les chapitres prioritaires.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
