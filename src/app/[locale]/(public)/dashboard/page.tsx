import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  fetchAuthorizedRecentExercisesForEnrollment,
  fetchUserPedagogicalProfileContext,
} from '@/core/user';
import { getCurrentUserAcademicEnrollment } from '@/core/academic-enrollment';
import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import { buildCanonicalUrl } from '@/lib/seo';

import { PedagogicalProfileCard } from './_components/pedagogical-profile-card';

const canonical = buildCanonicalUrl('/dashboard');

export const metadata: Metadata = {
  title: 'Tableau de bord — My Exams',
  description: 'Tableau de bord et suivi de votre affectation pédagogique.',
  alternates: canonical ? { canonical } : undefined,
  robots: {
    index: false,
    follow: false,
  },
};

const DashboardPage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect('/log-in?callbackUrl=%2Fdashboard');
  }

  const effectiveUserId = getSessionEffectiveUserId(session);
  if (!effectiveUserId) {
    redirect('/log-in?callbackUrl=%2Fdashboard');
  }

  // Vérification de l'affectation active pour l'année scolaire
  const enrollment = await getCurrentUserAcademicEnrollment(effectiveUserId);
  if (!enrollment) {
    redirect('/onboarding?callbackUrl=%2Fdashboard');
  }

  const [recentExercises, pedagogicalProfileContext] = await Promise.all([
    fetchAuthorizedRecentExercisesForEnrollment(effectiveUserId, enrollment, 5),
    fetchUserPedagogicalProfileContext(effectiveUserId),
  ]);

  const exerciseHistory = recentExercises
    .filter((entry) => entry.exercise)
    .map((entry) => {
      const subject = entry.exercise.examPaper?.teaching?.subject;
      const subjectLabel =
        subject?.longDescription || subject?.shortDescription || '';
      const examPaperLabel = entry.exercise.examPaper?.label || '';
      const sessionYear = entry.exercise.examPaper?.sessionYear;
      const returnTo =
        subject && sessionYear && entry.exercise.examPaper?.diplomaId
          ? `/diplomes/${entry.exercise.examPaper.diplomaId}/matieres/${subject.id}/sessions/${sessionYear}`
          : null;
      const href = returnTo
        ? `/exercices/${entry.exercise.id}?returnTo=${encodeURIComponent(returnTo)}`
        : `/exercices/${entry.exercise.id}`;
      const title =
        entry.exercise.title ||
        entry.exercise.label ||
        `Exercice ${entry.exercise.exerciseNumber}`;
      const contextParts = [
        subjectLabel,
        examPaperLabel,
        sessionYear ? `Session ${sessionYear}` : '',
      ].filter(Boolean);

      return {
        href,
        title,
        context: contextParts.join(' · '),
        lastViewedAt: entry.lastViewedAt,
      };
    });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <div className="space-y-6">
          <PublicBreadcrumb
            items={[{ label: 'Accueil', href: '/' }, { label: 'Tableau de bord' }]}
          />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-heading">Tableau de bord</h1>
              <p className="text-sm text-muted-foreground">
                Gestion de votre profil et suivi personnalisé de vos révisions.
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/dashboard/securite">Compte & Sécurité</Link>
            </Button>
          </div>

          <PedagogicalProfileCard context={pedagogicalProfileContext} />

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <Card className="rounded-3xl border-border bg-card hover:bg-card">
              <CardHeader className="space-y-2">
                <Badge variant="secondary" className="w-fit">
                  Historique
                </Badge>
                <CardTitle className="text-xl text-heading">
                  Exercices consultés
                </CardTitle>
              </CardHeader>
              <CardContent>
                {exerciseHistory.length > 0 ? (
                  <ul className="space-y-3 text-sm">
                    {exerciseHistory.map((entry) => (
                      <li key={entry.href} className="space-y-1">
                        <Link
                          className="font-semibold text-heading hover:underline"
                          href={entry.href}
                        >
                          {entry.title}
                        </Link>
                        {entry.context ? (
                          <p className="text-xs text-muted-foreground">
                            {entry.context}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Pas encore d&apos;exercice consulté pour votre niveau actuel.
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border bg-card hover:bg-card">
              <CardHeader className="space-y-2">
                <Badge variant="outline" className="w-fit">
                  Accès rapide
                </Badge>
                <CardTitle className="text-xl text-heading">
                  Votre univers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
                <p>
                  {pedagogicalProfileContext.summary.audience === 'HEALTH'
                    ? 'Accédez directement à vos UE, colles régulières et examens blancs.'
                    : pedagogicalProfileContext.summary.audience === 'SECONDARY'
                      ? 'Accédez aux annales officielles et aux parcours d’entraînement par quiz pour votre classe.'
                      : 'Complétez votre affectation pour activer vos contenus personnalisés.'}
                </p>
                <Button asChild variant="outline">
                  <Link href={pedagogicalProfileContext.summary.primaryHref}>
                    {pedagogicalProfileContext.summary.primaryLabel}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default DashboardPage;
