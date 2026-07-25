import type { PrismaClient } from '@prisma/client';
import { seedHealthTrainingUe14ElementsChimiquesClassificationPeriodique } from './health-training-ue14-elements-chimiques-classification-periodique.seed';
import { seedHealthTrainingUe14ForcesIntermoleculaires } from './health-training-ue14-forces-intermoleculaires.seed';
import { seedHealthTrainingUe14FormationIonsElectronegativiteLiaisonsChimiques } from './health-training-ue14-formation-ions-electronegativite-liaisons-chimiques.seed';
import { seedHealthTrainingUe14NomenclatureChimiqueFonctionsOrganiques } from './health-training-ue14-nomenclature-chimique-fonctions-organiques.seed';
import { seedHealthTrainingUe14OrbitalesMoleculaires } from './health-training-ue14-orbitales-moleculaires.seed';

export async function seedHealthTrainingUe14ChimieGenerale(prisma: PrismaClient) {
  await seedHealthTrainingUe14ElementsChimiquesClassificationPeriodique(prisma);
  await seedHealthTrainingUe14FormationIonsElectronegativiteLiaisonsChimiques(prisma);
  await seedHealthTrainingUe14OrbitalesMoleculaires(prisma);
  await seedHealthTrainingUe14ForcesIntermoleculaires(prisma);
}

export async function seedHealthTrainingUe14ChimieOrganique(prisma: PrismaClient) {
  await seedHealthTrainingUe14NomenclatureChimiqueFonctionsOrganiques(prisma);
}

export async function seedHealthTrainingUe14(prisma: PrismaClient) {
  await seedHealthTrainingUe14ChimieGenerale(prisma);
  await seedHealthTrainingUe14ChimieOrganique(prisma);
}
