import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  GraduationCap,
  Layers,
  Sparkles,
  Stethoscope,
} from 'lucide-react';

import type { UserAcademicEnrollment } from '@prisma/client';

import type {
  HealthStudentHomeBlock,
  HealthStudentHomeContext,
} from '@/core/health';
import type { UserPedagogicalProfileSummary } from '@/core/user';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { healthSectionDefinitions } from './health-content';
import { HealthCourseUnitsTable } from './HealthCourseUnitsTable';

type HealthHomePageProps = {
  viewerProfile?: UserPedagogicalProfileSummary | null;
  enrollment?: UserAcademicEnrollment | null;
  studentHome?: HealthStudentHomeContext | null;
  isAuthenticated?: boolean;
};

const blockTypeLabels: Record<HealthStudentHomeBlock['type'], string> = {
  HEALTH: 'Bloc santé',
  DISCIPLINARY: 'Bloc disciplinaire',
  TRANSVERSAL: 'Bloc transversal',
  SPECIALTY: 'Bloc spécifique',
  OTHER: 'Autres UE',
};

const blockTypeBadgeClassNames: Record<HealthStudentHomeBlock['type'], string> = {
  HEALTH: 'border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200',
  DISCIPLINARY: 'border-cyan-300 bg-cyan-50 text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-200',
  TRANSVERSAL: 'border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200',
  SPECIALTY: 'border-fuchsia-300 bg-fuchsia-50 text-fuchsia-700 dark:border-fuchsia-500/30 dark:bg-fuchsia-500/10 dark:text-fuchsia-200',
  OTHER: 'border-border bg-secondary text-secondary-foreground',
};

const quickLinks = [
  healthSectionDefinitions.ue,
  healthSectionDefinitions.colles,
  healthSectionDefinitions['examens-blancs'],
  healthSectionDefinitions.annales,
];

const publicFeatures = [
  {
    title: 'Quiz & entraînements',
    badge: 'Entraînements',
    description:
      'Entraîne-toi par chapitre avec des questions ciblées pour tester et consolider tes connaissances au fil des semaines.',
    icon: Sparkles,
  },
  {
    title: 'Corrections détaillées',
    badge: 'Compréhension',
    description:
      'Comprends tes erreurs grâce à des résolutions détaillées, des explications pas à pas et des rappels méthodologiques immédiats.',
    icon: CheckCircle2,
  },
  {
    title: 'Colles',
    badge: 'Évaluations intermédiaires',
    description:
      'Évalue-toi en conditions d’entraînement pour mesurer ton niveau et tester ta gestion du temps avant les épreuves.',
    icon: Award,
  },
  {
    title: 'Examens blancs',
    badge: 'Conditions réelles',
    description:
      'Simule des épreuves complètes pour te préparer sereinement aux exigences et aux modalités de ta faculté.',
    icon: GraduationCap,
  },
  {
    title: 'Suivi de progression',
    badge: 'Pilotage',
    description:
      'Visualise ta maîtrise par notion, repère immédiatement tes points forts et identifie les thèmes prioritaires à revoir.',
    icon: BarChart3,
  },
];

const formatCourseUnitLabel = (courseUnit: HealthStudentHomeBlock['courseUnits'][number]) =>
  courseUnit.code
    ? `${courseUnit.code} · ${courseUnit.shortTitle ?? courseUnit.title}`
    : (courseUnit.shortTitle ?? courseUnit.title);

export function HealthHomePage({
  viewerProfile,
  enrollment,
  studentHome,
  isAuthenticated = false,
}: HealthHomePageProps) {
  const isHealthProfile = enrollment?.audience === 'HEALTH' || viewerProfile?.audience === 'HEALTH';
  const hasSpecificContent = Boolean(studentHome?.hasSpecificContent);
  const studentBlocks = studentHome?.blocks ?? [];
  const tableRows = studentBlocks.flatMap((block) =>
    block.courseUnits.map((courseUnit) => ({
      id: courseUnit.id,
      label: formatCourseUnitLabel(courseUnit),
      semester: courseUnit.semester,
      teachingElementCount: courseUnit.teachingElementCount,
      qcmCount: courseUnit.qcmCount,
      questionCount: courseUnit.questionCount,
      blockLabel: block.title,
      blockType: block.type,
      href: `/sante/ue/${courseUnit.id}`,
    }))
  );

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-8">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'L1 Santé' },
          ]}
        />

        {isAuthenticated ? (
          /* ================================================================= */
          /* AUTHENTICATED STUDENT SPACE                                       */
          /* ================================================================= */
          <>
            <section className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-heading">
                Mon espace Santé
              </h1>
              <p className="max-w-3xl text-sm text-muted-foreground">
                Accès rapide aux UE, colles, annales et examens blancs.
              </p>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3">
              <div className="flex min-w-0 flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-heading">
                  {isHealthProfile && studentHome?.institution
                    ? studentHome.institution.shortName ?? studentHome.institution.name
                    : 'Profil pédagogique Santé'}
                </span>
                {studentHome?.programVersion ? (
                  <Badge variant="secondary">
                    {studentHome.programVersion.programCode} · {studentHome.programVersion.academicYear}
                  </Badge>
                ) : null}
                {studentHome?.pathway ? (
                  <Badge variant="secondary">{studentHome.pathway.name}</Badge>
                ) : null}
                <Badge variant="outline" className="text-xs">
                  Affectation annuelle verrouillée
                </Badge>
              </div>
              <Button asChild variant="ghost" size="sm" className="shrink-0 text-muted-foreground hover:text-foreground">
                <Link href="/dashboard/profil-pedagogique">Voir mon affectation pédagogique</Link>
              </Button>
            </div>

            {hasSpecificContent ? (
              <section className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight text-heading">
                    UE disponibles
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Contenu ciblé selon la faculté, la maquette et le parcours déclarés.
                  </p>
                </div>

                <Card className="rounded-3xl border-border bg-card hover:bg-card">
                  <CardContent className="p-0">
                    <HealthCourseUnitsTable
                      rows={tableRows}
                      blockTypeBadgeClassNames={blockTypeBadgeClassNames}
                    />
                  </CardContent>
                </Card>
              </section>
            ) : null}

            <section className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight text-heading">
                  {hasSpecificContent ? 'Accès rapides' : 'Contenu générique'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {hasSpecificContent
                    ? 'Les sections génériques restent accessibles pour compléter la navigation.'
                    : 'Aucun contenu spécifique à la fac n’est encore disponible dans cette vue. Fallback sur les entrées génériques.'}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {quickLinks.map((section) => (
                  <Card
                    key={section.href}
                    className="rounded-3xl border-border bg-card hover:bg-card"
                  >
                    <CardHeader className="space-y-2">
                      <CardTitle className="text-lg text-heading">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {section.description}
                      </p>
                      <Button asChild variant="outline" className="w-full justify-center">
                        <Link href={section.href}>{section.ctaLabel}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </>
        ) : (
          /* ================================================================= */
          /* PUBLIC MULTI-FACULTY LANDING (ANONYMOUS VISITORS)                 */
          /* ================================================================= */
          <>
            {/* HERO SECTION */}
            <section className="overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-10">
              <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_260px]">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">L1 Santé</Badge>
                    <Badge variant="outline">Entraînement universitaire en Santé</Badge>
                  </div>

                  <h1 className="text-3xl font-extrabold tracking-tight text-heading md:text-4xl">
                    Entraîne-toi pour réussir ta L1 Santé
                  </h1>

                  <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base text-balance">
                    Quiz par chapitre, corrections détaillées, colles et examens blancs pour progresser régulièrement, avec des contenus pouvant être adaptés au programme de ton université.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button asChild size="lg" className="font-semibold">
                      <Link href="/log-in?callbackUrl=%2Fsante">
                        Créer mon compte gratuit <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a href="#fonctionnalites">Découvrir les fonctionnalités</a>
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Compte gratuit requis pour accéder aux quiz, colles, examens blancs et à ta progression.
                  </p>
                </div>

                <div
                  className="flex items-center justify-center rounded-2xl border border-border bg-background p-6"
                  data-testid="hero-universe-illustration"
                >
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-brand/10 text-fg-brand">
                    <Stethoscope className="h-14 w-14" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </section>

            {/* FEATURES SECTION */}
            <section id="fonctionnalites" className="space-y-6 pt-2 md:pt-4">
              <div className="mx-auto max-w-3xl space-y-2 text-left md:text-center">
                <div>
                  <Badge variant="outline">Fonctionnalités</Badge>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-heading md:text-3xl">
                  Tout ce dont tu as besoin pour réussir
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base text-balance">
                  Une boîte à outils complète pour consolider tes connaissances et progresser tout au long du semestre.
                </p>
              </div>

              <div className="space-y-4">
                {/* Row 1: 3 cards */}
                <div className="grid gap-4 md:grid-cols-3">
                  {publicFeatures.slice(0, 3).map((feat) => {
                    const Icon = feat.icon;
                    return (
                      <Card
                        key={feat.title}
                        className="flex flex-col justify-between rounded-3xl border-border bg-card"
                      >
                        <CardHeader className="space-y-3 pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-fg-brand">
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {feat.badge}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg text-heading">{feat.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                            {feat.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Row 2: 2 cards centered */}
                <div className="health-features-second-row mx-auto grid w-full gap-4 md:grid-cols-2">
                  {publicFeatures.slice(3, 5).map((feat) => {
                    const Icon = feat.icon;
                    return (
                      <Card
                        key={feat.title}
                        className="flex flex-col justify-between rounded-3xl border-border bg-card"
                      >
                        <CardHeader className="space-y-3 pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-fg-brand">
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {feat.badge}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg text-heading">{feat.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                            {feat.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <style>{`
                  @media (min-width: 768px) {
                    .health-features-second-row {
                      max-width: calc((100% - 2rem) / 3 * 2 + 1rem);
                    }
                  }
                `}</style>
              </div>
            </section>

            {/* ADAPTED PATHWAY & ARCHITECTURE SECTION */}
            <section className="space-y-6 pt-4">
              <div className="space-y-2">
                <Badge variant="outline">Personnalisation</Badge>
                <h2 className="text-2xl font-bold tracking-tight text-heading md:text-3xl">
                  Un parcours adapté à ton université
                </h2>
                <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Chaque faculté de Santé possède sa propre organisation des enseignements. My Exams structure ton entraînement autour de la maquette pédagogique de ton établissement.
                </p>
              </div>

              {/* CURRENT COVERAGE BANNER */}
              <div className="rounded-2xl border border-brand/20 bg-brand/5 p-5 md:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-fg-brand" aria-hidden="true" />
                      <span className="font-semibold text-heading">
                        Première université disponible : Université de Reims Champagne-Ardenne
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      La maquette de l’URCA est disponible pour l’année universitaire. D’autres facultés et programmes rejoindront progressivement la plateforme.
                    </p>
                  </div>
                  <Badge variant="outline" className="w-fit shrink-0 border-brand/30 text-fg-brand">
                    Couverture 2026-2027
                  </Badge>
                </div>
              </div>

              {/* 3 ARCHITECTURE PILLARS */}
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="rounded-3xl border-border bg-card">
                  <CardHeader className="space-y-3 pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-fg-brand">
                      <Layers className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base text-heading">
                      Socle de contenus réutilisables
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      Lorsque les programmes se recoupent, My Exams peut réutiliser des notions, chapitres et questions communs tout en les rattachant à la maquette propre à chaque université.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl border-border bg-card">
                  <CardHeader className="space-y-3 pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-fg-brand">
                      <Building2 className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base text-heading">
                      Maquette universitaire
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      UE, éléments constitutifs, organisation annuelle et rattachements adaptés à la structure de chaque établissement.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl border-border bg-card">
                  <CardHeader className="space-y-3 pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-fg-brand">
                      <Award className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base text-heading">
                      Évaluations adaptées
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      Colles et examens blancs pouvant reprendre les formats et modalités utilisés par l’établissement, notamment les formats de questions déjà pris en charge par My Exams.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </section>

          </>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
