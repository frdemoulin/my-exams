import { fetchSpecialties } from '@/core/teaching';
import { fetchSubjects } from '@/core/subject';
import HomePage from '@/components/pages/HomePage';

export default async function Page() {
  // Fetch des données côté serveur
  const subjects = await fetchSubjects();
  const specialties = await fetchSpecialties();
  
  return <HomePage initialSubjects={subjects} specialties={specialties} />;
}
