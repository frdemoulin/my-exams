import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

import { auth } from '@/lib/auth/auth';
import {
  getSessionActorRole,
  getSessionEffectiveRole,
  getSessionEffectiveUserId,
  isSessionImpersonating,
} from '@/lib/auth/session';
import {
  getCurrentUserAcademicEnrollment,
  getAvailableAcademicEnrollmentOptions,
  getSafeCallbackUrl,
  resolvePostAuthenticationDestination,
} from '@/core/academic-enrollment';
import { AcademicYearError } from '@/core/academic-year';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OnboardingWizard } from './_components/onboarding-wizard';

export const metadata: Metadata = {
  title: 'Choix de votre niveau — My Exams',
  description: 'Définissez votre affectation pédagogique annuelle.',
  robots: {
    index: false,
    follow: false,
  },
};

type OnboardingPageProps = {
  searchParams: Promise<{ callbackUrl?: string | string[] }>;
};

export default async function OnboardingPage({ searchParams }: OnboardingPageProps) {
  const session = await auth();
  const effectiveUserId = getSessionEffectiveUserId(session);
  const actorRole = getSessionActorRole(session);
  const isImpersonating = isSessionImpersonating(session);
  const { callbackUrl } = await searchParams;
  const safeCallback = getSafeCallbackUrl(callbackUrl);

  if (!effectiveUserId) {
    const loginTarget = safeCallback
      ? `/log-in?callbackUrl=${encodeURIComponent(safeCallback)}`
      : '/log-in?callbackUrl=%2Fonboarding';
    redirect(loginTarget);
  }

  // Un ADMIN hors impersonation ne doit jamais accéder au formulaire d'onboarding
  if (actorRole === 'ADMIN' && !isImpersonating) {
    redirect('/admin');
  }

  // Vérifier si l'utilisateur a déjà une affectation active
  const existingEnrollment = await getCurrentUserAcademicEnrollment(effectiveUserId);
  if (existingEnrollment) {
    const { destination } = await resolvePostAuthenticationDestination({
      userId: effectiveUserId,
      role: getSessionEffectiveRole(session),
      callbackUrl: safeCallback,
    });
    redirect(destination);
  }

  // Résoudre les options canoniques
  let options;
  try {
    options = await getAvailableAcademicEnrollmentOptions();
  } catch (error: unknown) {
    if (error instanceof AcademicYearError) {
      console.error('[OnboardingPage] Erreur de configuration de l’année scolaire :', error);
    } else {
      console.error('[OnboardingPage] Erreur inattendue de chargement des options :', error);
    }

    return (
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <PublicHeader />
        <main className="mx-auto flex w-full max-w-xl flex-1 items-center justify-center px-4 py-16">
          <Card className="border-border bg-card w-full text-center p-6 space-y-4">
            <CardHeader className="space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <AlertCircle className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-heading">
                Configuration momentanément indisponible
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                La configuration de l&apos;année scolaire est momentanément indisponible. Notre équipe technique a été notifiée.
              </p>
              <p>
                Veuillez réessayer dans quelques instants ou contacter le support si le problème persiste.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">Contacter le support</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <OnboardingWizard initialOptions={options} callbackUrl={safeCallback} />
      </main>
      <SiteFooter />
    </div>
  );
}
