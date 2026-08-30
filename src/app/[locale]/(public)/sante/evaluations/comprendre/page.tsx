import type { Metadata } from 'next';
import { HealthEvaluationsGuide } from '@/components/health/HealthEvaluationsGuide';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';

export const metadata: Metadata = {
  title: 'Comprendre les évaluations Santé · Formats UNESS & Notation',
  description:
    'Guide des formats de questions Santé (QRU, QRM, QRP, QRPL, QROC, QZONE) et explications du principe de notation par discordances UNESS.',
};

export default function HealthEvaluationsComprendrePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 pb-16 pt-8">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Santé', href: '/sante' },
            { label: 'Évaluations', href: '/sante' },
            { label: 'Comprendre les évaluations' },
          ]}
        />
        <HealthEvaluationsGuide />
      </main>
      <SiteFooter />
    </div>
  );
}
