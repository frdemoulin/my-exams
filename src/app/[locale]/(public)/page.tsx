import { unstable_noStore as noStore } from 'next/cache';
import { fetchSubjects } from '@/core/subject';
import { fetchDiplomas } from '@/core/diploma';
import HomePage from '@/components/pages/HomePage';

export const dynamic = 'force-dynamic';

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
