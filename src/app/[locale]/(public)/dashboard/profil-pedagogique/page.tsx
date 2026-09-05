import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Lock, ArrowLeft, Mail } from 'lucide-react';

import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { fetchUserPedagogicalProfileContext } from '@/core/user';
import { getCurrentUserAcademicEnrollment } from '@/core/academic-enrollment';
import { getActiveAcademicYear } from '@/core/academic-year';
import { auth } from '@/lib/auth/auth';
import {
  getSessionActorRole,
  getSessionEffectiveUserId,
  isSessionImpersonating,
} from '@/lib/auth/session';

export const metadata: Metadata = {
  title: 'Mon profil pédagogique — My Exams',
  description: 'Détails de votre affectation pédagogique annuelle.',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardPedagogicalProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/log-in?callbackUrl=%2Fdashboard%2Fprofil-pedagogique');
  }

  const effectiveUserId = getSessionEffectiveUserId(session);
  if (!effectiveUserId) {
    redirect('/log-in?callbackUrl=%2Fdashboard%2Fprofil-pedagogique');
  }

  const actorRole = getSessionActorRole(session);
  const isImpersonating = isSessionImpersonating(session);

  if (actorRole === 'ADMIN' && !isImpersonating) {
    redirect('/admin');
  }

  const enrollment = await getCurrentUserAcademicEnrollment(effectiveUserId);
  if (!enrollment) {
    redirect('/onboarding?callbackUrl=%2Fdashboard%2Fprofil-pedagogique');
  }

  const [activeYear, context] = await Promise.all([
    getActiveAcademicYear(),
    fetchUserPedagogicalProfileContext(effectiveUserId),
  ]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10">
        <div className="space-y-6">
          <PublicBreadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Tableau de bord', href: '/dashboard' },
              { label: 'Mon profil' },
            ]}
          />

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-heading">
              Affectation pédagogique
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              Votre profil détermine les contenus auxquels vous avez accès pour l&apos;année scolaire en cours.
            </p>
          </div>

          <Card className="border-border bg-card">
            <CardHeader className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-semibold text-heading">
                    {context.summary.title}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Année scolaire {activeYear.code}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="gap-1.5 w-fit border-muted-foreground/30 text-muted-foreground py-1 px-3">
                  <Lock className="h-3.5 w-3.5" />
                  Niveau verrouillé
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {context.summary.focusBadges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {context.summary.focusBadges.map((badge) => (
                    <Badge key={badge} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="p-4 rounded-xl border border-border bg-background space-y-2 text-sm">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Détail de l&apos;affectation
                </p>
                <p className="text-heading font-medium">
                  {context.summary.description}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-muted bg-neutral-primary-soft text-xs text-muted-foreground space-y-1">
                <p className="font-semibold text-heading">
                  Règle de gestion annuelle
                </p>
                <p>
                  L&apos;affectation pédagogique est fixée pour l&apos;ensemble de l&apos;année scolaire. Seul un administrateur peut rectifier une affectation erronée.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <Link href="/dashboard">
                    <ArrowLeft className="h-4 w-4" />
                    Retour au tableau de bord
                  </Link>
                </Button>

                <Button asChild variant="ghost" size="sm" className="gap-2 text-xs">
                  <Link href="/contact">
                    <Mail className="h-4 w-4" />
                    Signaler une erreur d&apos;affectation
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
