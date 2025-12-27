import { fetchSpecialties } from '@/core/teaching';
import { fetchSubjects } from '@/core/subject';
import { fetchDiplomas } from '@/core/diploma';
import HomePage from '@/components/pages/HomePage';

export default async function Page() {
  // Fetch des données côté serveur
  const subjects = await fetchSubjects();
  const specialties = await fetchSpecialties();
  const diplomas = await fetchDiplomas();
  
  return (
    <HomePage
      initialSubjects={subjects}
      specialties={specialties}
      initialDiplomas={diplomas}
    />
  );
}
