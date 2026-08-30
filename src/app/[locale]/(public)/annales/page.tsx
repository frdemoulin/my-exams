import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import { fetchSubjects } from '@/core/subject';
import { fetchDiplomas } from '@/core/diploma';
import { PublicHeader } from '@/components/shared/public-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { PublicBreadcrumb } from '@/components/shared/public-breadcrumb';
import { AnnalesSearchEngine } from '@/components/annales/AnnalesSearchEngine';
import { buildCanonicalUrl } from '@/lib/seo';

export const dynamic = 'force-dynamic';
const canonical = buildCanonicalUrl('/annales');

export const metadata: Metadata = {
  title: "Annales d'examens — Recherche & Sujets corrigés",
  description: "Moteur de recherche d'annales officielles et d'exercices corrigés pour le Brevet, le Baccalauréat et le BTS.",
  alternates: canonical ? { canonical } : undefined,
};

type ResolvedSearchParams = {
  diploma?: string;
  subject?: string;
  search?: string;
};

type PageProps = {
  searchParams?: Promise<ResolvedSearchParams>;
};

export default async function AnnalesPage({ searchParams }: PageProps) {
  noStore();
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const initialDiploma = resolvedSearchParams?.diploma?.trim();
  const initialSubject = resolvedSearchParams?.subject?.trim();
  const initialSearch = resolvedSearchParams?.search?.trim();

  const subjects = await fetchSubjects({ includeInactive: false });
  const diplomas = await fetchDiplomas();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <PublicHeader />

      <main className="mx-auto max-w-6xl w-full flex-1 space-y-6 px-4 py-8">
        <PublicBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Annales' },
          ]}
        />

        <AnnalesSearchEngine
          initialSubjects={subjects}
          initialDiplomas={diplomas}
          initialDiplomaFilter={initialDiploma}
          initialSubjectFilter={initialSubject}
          initialSearchQuery={initialSearch}
          headerTitle="Catalogue & Recherche d'annales"
          headerDescription="Filtre par diplôme, matière, session ou mots-clés pour trouver des exercices officiels avec corrections détaillées."
        />
      </main>

      <SiteFooter />
    </div>
  );
}

