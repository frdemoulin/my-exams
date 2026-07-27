import type { PrismaClient } from '@prisma/client';
import { seedHealthTrainingUe14AcidesDivers } from './health-training-ue14-acides-divers.seed';
import { seedHealthTrainingUe14AldehydesCetones } from './health-training-ue14-aldehydes-cetones.seed';
import { seedHealthTrainingUe14ElementsChimiquesClassificationPeriodique } from './health-training-ue14-elements-chimiques-classification-periodique.seed';
import { seedHealthTrainingUe14DerivesMonofonctionnelsAlcoolsAminesHalogenes } from './health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.seed';
import { seedHealthTrainingUe14EstersAmides } from './health-training-ue14-esters-amides.seed';
import { seedHealthTrainingUe14ForcesIntermoleculaires } from './health-training-ue14-forces-intermoleculaires.seed';
import { seedHealthTrainingUe14FormationIonsElectronegativiteLiaisonsChimiques } from './health-training-ue14-formation-ions-electronegativite-liaisons-chimiques.seed';
import { seedHealthTrainingUe14Hydrocarbures } from './health-training-ue14-hydrocarbures.seed';
import { seedHealthTrainingUe14IsomerieEnantiomerie } from './health-training-ue14-isomerie-enantiomerie.seed';
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
  await seedHealthTrainingUe14IsomerieEnantiomerie(prisma);
  await seedHealthTrainingUe14Hydrocarbures(prisma);
  await seedHealthTrainingUe14DerivesMonofonctionnelsAlcoolsAminesHalogenes(prisma);
  await seedHealthTrainingUe14EstersAmides(prisma);
  await seedHealthTrainingUe14AldehydesCetones(prisma);
  await seedHealthTrainingUe14AcidesDivers(prisma);
}

export async function seedHealthTrainingUe14(prisma: PrismaClient) {
  await seedHealthTrainingUe14ChimieGenerale(prisma);
  await seedHealthTrainingUe14ChimieOrganique(prisma);
}
