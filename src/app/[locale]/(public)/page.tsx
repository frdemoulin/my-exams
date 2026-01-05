import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import { fetchSubjects } from '@/core/subject';
import { fetchDiplomas } from '@/core/diploma';
import HomePage from '@/components/pages/HomePage';
import { buildCanonicalUrl } from '@/lib/seo';

export const dynamic = 'force-dynamic';
const canonical = buildCanonicalUrl('/');

export const metadata: Metadata = {
  alternates: canonical ? { canonical } : undefined,
};

export default async function Page() {
  noStore();
  // Fetch des données côté serveur
  const subjects = await fetchSubjects({ includeInactive: false });
  const diplomas = await fetchDiplomas();
  
  return (
    <HomePage
      initialSubjects={subjects}
      initialDiplomas={diplomas}
    />
  );
}
