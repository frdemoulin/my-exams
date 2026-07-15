import type { PrismaClient } from '@prisma/client';
import { seedHealthTrainingUe14ElementsChimiquesClassificationPeriodique } from './health-training-ue14-elements-chimiques-classification-periodique.seed';
import { seedHealthTrainingUe14FormationIonsElectronegativiteLiaisonsChimiques } from './health-training-ue14-formation-ions-electronegativite-liaisons-chimiques.seed';

export async function seedHealthTrainingUe14(prisma: PrismaClient) {
  await seedHealthTrainingUe14ElementsChimiquesClassificationPeriodique(prisma);
  await seedHealthTrainingUe14FormationIonsElectronegativiteLiaisonsChimiques(prisma);
}
