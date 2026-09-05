import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import prisma from '@/lib/db/prisma';
import { auth } from '@/lib/auth/auth';
import { getCurrentInternalSessionContext } from '@/lib/auth/current-session';
import { isAdminRole } from '@/lib/auth/roles';
import { getEnabledAuthProviders } from '@/lib/auth/auth-config-validator';

import { SecurityDashboardView } from './_components/security-dashboard-view';

export const metadata: Metadata = {
  title: 'Sécurité du compte — My Exams',
  description: 'Gérez vos sessions, méthodes de connexion et données personnelles.',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardSecurityPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/log-in?callbackUrl=%2Fdashboard%2Fsecurite');
  }

  const sessionContext = await getCurrentInternalSessionContext();
  if (!sessionContext) {
    redirect('/log-in?callbackUrl=%2Fdashboard%2Fsecurite');
  }

  const [accounts, activeSessionsCount] = await Promise.all([
    prisma.account.findMany({
      where: { userId: sessionContext.actorId },
      select: { provider: true },
    }),
    prisma.session.count({
      where: { userId: sessionContext.actorId },
    }),
  ]);

  const linkedOAuthProviders = accounts.map((a) => a.provider);
  const isEmailProviderEnabled = getEnabledAuthProviders().has('email');
  const isImpersonating = Boolean(sessionContext.impersonation?.isActive);
  const isAdmin = isAdminRole(sessionContext.actorRole);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10">
        <div className="space-y-6">
          <PublicBreadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Tableau de bord', href: '/dashboard' },
              { label: 'Sécurité du compte' },
            ]}
          />

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-heading">Sécurité du compte</h1>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              Consultez vos méthodes d&apos;authentification, révoquez vos sessions distantes et gérez vos données personnelles.
            </p>
          </div>

          <SecurityDashboardView
            user={{
              id: sessionContext.actorId,
              name: sessionContext.actorName,
              email: sessionContext.actorEmail,
              role: sessionContext.actorRole,
            }}
            linkedOAuthProviders={linkedOAuthProviders}
            isEmailProviderEnabled={isEmailProviderEnabled}
            activeSessionsCount={activeSessionsCount}
            currentSession={{
              createdAt: sessionContext.createdAt.toISOString(),
              expiresAt: sessionContext.expires.toISOString(),
            }}
            isImpersonating={isImpersonating}
            isAdmin={isAdmin}
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
