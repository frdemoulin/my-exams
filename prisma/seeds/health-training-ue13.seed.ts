import type { PrismaClient } from '@prisma/client';
import { seedHealth } from './health.seed';
import { seedHealthHistologyChapters } from './health-chapters.seed';
import { seedHealthCourseUnits } from './health-course-units.seed';
import { seedHealthTeachingElements } from './health-teaching-elements.seed';
import { seedHealthTrainingUe13HistologieDefinitionsTechniquesMicroscopie } from './health-training-ue13-histologie-definitions-techniques-microscopie.seed';
import { seedHealthTrainingUe13HistologieEpitheliumsStructuresClassifications } from './health-training-ue13-histologie-epitheliums-structures-classifications.seed';
import { seedHealthTrainingUe13HistologieTissusConjonctifs } from './health-training-ue13-histologie-tissus-conjonctifs.seed';
import { seedHealthTrainingUe13HistologieTissusMusculaires } from './health-training-ue13-histologie-tissus-musculaires.seed';
import { seedHealthTrainingUe13HistologieTissusNerveux } from './health-training-ue13-histologie-tissus-nerveux.seed';

export async function seedHealthTrainingUe13HistologieContent(prisma: PrismaClient) {
  await seedHealthTrainingUe13HistologieDefinitionsTechniquesMicroscopie(prisma);
  await seedHealthTrainingUe13HistologieEpitheliumsStructuresClassifications(prisma);
  await seedHealthTrainingUe13HistologieTissusConjonctifs(prisma);
  await seedHealthTrainingUe13HistologieTissusMusculaires(prisma);
  await seedHealthTrainingUe13HistologieTissusNerveux(prisma);
}

export async function seedHealthTrainingUe13Histologie(prisma: PrismaClient) {
  await seedHealth(prisma);
  await seedHealthCourseUnits(prisma);
  await seedHealthTeachingElements(prisma);
  await seedHealthHistologyChapters(prisma);
  await seedHealthTrainingUe13HistologieContent(prisma);
}
