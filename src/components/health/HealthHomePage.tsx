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
import {
  UniverseFeaturesSection,
  type UniverseFeatureItem,
} from '@/components/shared/universe-features-section';
import { UniverseHero } from '@/components/shared/universe-hero';

import { healthSectionDefinitions } from './health-content';
import { HealthCourseUnitsTable } from './HealthCourseUnitsTable';

type HealthHomePageProps = {
  viewerProfile?: UserPedagogicalProfileSummary | null;
  enrollment?: UserAcademicEnrollment | null;
  studentHome?: HealthStudentHomeContext | null;
  isAuthenticated?: boolean;
  hasHealthPedagogicalAccess?: boolean;
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

const publicFeatures: UniverseFeatureItem[] = [
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
  hasHealthPedagogicalAccess,
}: HealthHomePageProps) {
  const effectivePedagogicalAccess =
    hasHealthPedagogicalAccess !== undefined
      ? hasHealthPedagogicalAccess
      : Boolean(isAuthenticated && (enrollment?.audience === 'HEALTH' || viewerProfile?.audience === 'HEALTH'));
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

        {effectivePedagogicalAccess ? (
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
            <UniverseHero
              badges={[
                { label: 'L1 Santé', variant: 'secondary' },
                { label: 'Entraînement universitaire en Santé', variant: 'outline' },
              ]}
              title="Entraîne-toi pour réussir ta L1 Santé"
              description="Quiz par chapitre, corrections détaillées, colles et examens blancs pour progresser régulièrement, avec des contenus pouvant être adaptés au programme de ton université."
              primaryCta={
                isAuthenticated
                  ? {
                      label: "Retour à l'administration",
                      href: '/admin',
                    }
                  : {
                      label: 'Créer mon compte gratuit',
                      href: '/log-in?callbackUrl=%2Fsante',
                    }
              }
              secondaryCta={{
                label: 'Découvrir les fonctionnalités',
                href: '#fonctionnalites',
              }}
              note={
                isAuthenticated
                  ? undefined
                  : 'Compte gratuit requis pour accéder aux quiz, colles, examens blancs et à ta progression.'
              }
              icon={Stethoscope}
            />

            {/* FEATURES SECTION */}
            <UniverseFeaturesSection
              id="fonctionnalites"
              title="Tout ce dont tu as besoin pour réussir"
              description="Une boîte à outils complète pour consolider tes connaissances et progresser tout au long du semestre."
              features={publicFeatures}
              centerLastRow
            />

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
