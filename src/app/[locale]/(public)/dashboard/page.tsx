import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchUserPedagogicalProfileContext } from '@/core/user';
import { auth } from '@/lib/auth/auth';
import { isAdminRole } from '@/lib/auth/roles';
import prisma from '@/lib/db/prisma';
import { buildCanonicalUrl } from '@/lib/seo';

import { PedagogicalProfileCard } from './_components/pedagogical-profile-card';

const canonical = buildCanonicalUrl("/dashboard");

export const metadata: Metadata = {
  title: "Tableau de bord",
  description: "Tableau de bord My Exams (bêta).",
  alternates: canonical ? { canonical } : undefined,
  robots: {
    index: false,
    follow: false,
  },
};

const DashboardPage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/log-in");
  }

  const role = (session.user as any).role;
  const email = session.user.email?.toLowerCase() ?? null;
  const allowlist = process.env.DASHBOARD_BETA_EMAILS?.split(",")
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean) ?? [];
  const isAllowed = isAdminRole(role) || (email ? allowlist.includes(email) : false);

  if (!isAllowed) {
    notFound();
  }

  const userId = session.user.id;

  if (!userId) {
    redirect('/log-in');
  }

  const [recentExercises, pedagogicalProfileContext] = await Promise.all([
    prisma.userExerciseHistory.findMany({
      where: { userId },
      orderBy: { lastViewedAt: 'desc' },
      take: 5,
      select: {
        lastViewedAt: true,
        exercise: {
          select: {
            id: true,
            title: true,
            label: true,
            exerciseNumber: true,
            examPaper: {
              select: {
                label: true,
                sessionYear: true,
                diplomaId: true,
                teaching: {
                  select: {
                    subject: {
                      select: {
                        id: true,
                        longDescription: true,
                        shortDescription: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }),
    fetchUserPedagogicalProfileContext(userId),
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
      ]
        .filter(Boolean);
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
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-heading">Tableau de bord</h1>
            <p className="text-sm text-muted-foreground">
              Premiers réglages du compte pour personnaliser les contenus
              pédagogiques visibles côté utilisateur.
            </p>
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
                    Pas encore d&apos;exercice consulté.
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
                  Prochaine zone à vérifier
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
                <p>
                  {pedagogicalProfileContext.summary.audience === 'HEALTH'
                    ? 'Le profil santé permet déjà de vérifier un premier rendu contextualisé selon la faculté et la structure choisies.'
                    : pedagogicalProfileContext.summary.audience === 'SECONDARY'
                      ? 'Le profil secondaire permet de revenir directement vers les annales adaptées au niveau déclaré.'
                      : 'Le profil pédagogique peut encore être ajusté manuellement pour activer le bon ciblage de contenus.'}
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
