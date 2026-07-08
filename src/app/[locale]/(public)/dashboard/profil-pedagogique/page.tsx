import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { fetchUserPedagogicalProfileContext } from '@/core/user';
import { auth } from '@/lib/auth/auth';
import { isAdminRole } from '@/lib/auth/roles';

import { PedagogicalProfileForm } from '../_components/pedagogical-profile-form';

export const metadata: Metadata = {
  title: 'Profil pédagogique',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function PedagogicalProfileEditPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/log-in');
  }

  const role = (session.user as any).role;
  const email = session.user.email?.toLowerCase() ?? null;
  const allowlist = process.env.DASHBOARD_BETA_EMAILS?.split(',')
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

  const pedagogicalProfileContext = await fetchUserPedagogicalProfileContext(userId);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <div className="space-y-6">
          <PublicBreadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Tableau de bord', href: '/dashboard' },
              { label: 'Profil pédagogique' },
            ]}
          />

          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-heading">
              Éditer le profil pédagogique
            </h1>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              Cette page permet d’ajuster les informations utilisées pour
              personnaliser les contenus affichés dans l’application.
            </p>
          </div>

          <PedagogicalProfileForm context={pedagogicalProfileContext} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
