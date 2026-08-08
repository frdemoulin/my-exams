import type { PrismaClient } from '@prisma/client';

import { seedHealthHistologyChapters } from '../../prisma/seeds/health-chapters.seed';
import { seedHealthTeachingElements } from '../../prisma/seeds/health-teaching-elements.seed';
import { seedHealthTrainingUe13HistologieContent } from '../../prisma/seeds/health-training-ue13.seed';

export const description =
  "Ajoute les questions et quiz des cinq chapitres d'histologie de l'UE13 Santé de Reims.";

export async function up(prisma: PrismaClient) {
  await seedHealthTeachingElements(prisma);
  await seedHealthHistologyChapters(prisma);
  await seedHealthTrainingUe13HistologieContent(prisma);
}
