import Link from 'next/link';

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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { healthSectionDefinitions } from './health-content';
import { HealthCourseUnitsTable } from './HealthCourseUnitsTable';

type HealthHomePageProps = {
  viewerProfile?: UserPedagogicalProfileSummary | null;
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
  HEALTH: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200',
  DISCIPLINARY: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-200',
  TRANSVERSAL: 'border-amber-500/30 bg-amber-500/10 text-amber-200',
  SPECIALTY: 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-200',
  OTHER: 'border-border bg-secondary text-secondary-foreground',
};

const quickLinks = [
  healthSectionDefinitions.ue,
  healthSectionDefinitions.colles,
  healthSectionDefinitions['examens-blancs'],
  healthSectionDefinitions.annales,
];

const formatCourseUnitLabel = (courseUnit: HealthStudentHomeBlock['courseUnits'][number]) =>
  courseUnit.code
    ? `${courseUnit.code} · ${courseUnit.shortTitle ?? courseUnit.title}`
    : (courseUnit.shortTitle ?? courseUnit.title);

export function HealthHomePage({
  viewerProfile,
  studentHome,
  isAuthenticated = false,
}: HealthHomePageProps) {
  const isHealthProfile = viewerProfile?.audience === 'HEALTH';
  const hasSpecificContent = Boolean(studentHome?.hasSpecificContent);
  const studentBlocks = studentHome?.blocks ?? [];
  const tableRows = studentBlocks.flatMap((block) =>
    block.courseUnits.map((courseUnit) => ({
      id: courseUnit.id,
      label: formatCourseUnitLabel(courseUnit),
      semester: courseUnit.semester,
      qcmCount: courseUnit.qcmCount,
      blockLabel: block.title,
      blockType: block.type,
      href: `/sante/ue/${courseUnit.id}`,
    }))
  );

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

        <section className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-heading">
            Santé
          </h1>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Accès rapide aux UE, colles, annales et examens blancs.
          </p>
        </section>

        {isAuthenticated ? (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3">
            <div className="flex min-w-0 flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-heading">
                {isHealthProfile && studentHome?.institution
                  ? studentHome.institution.shortName ?? studentHome.institution.name
                  : 'Profil pédagogique à compléter'}
              </span>
              {studentHome?.programVersion ? (
                <Badge variant="secondary">
                  {studentHome.programVersion.programCode} · {studentHome.programVersion.academicYear}
                </Badge>
              ) : null}
              {studentHome?.pathway ? (
                <Badge variant="secondary">{studentHome.pathway.name}</Badge>
              ) : null}
            </div>
            <Button asChild variant="ghost" className="shrink-0">
              <Link href="/dashboard/profil-pedagogique">Modifier le profil</Link>
            </Button>
          </div>
        ) : null}

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
      </main>
      <SiteFooter />
    </div>
  );
}
