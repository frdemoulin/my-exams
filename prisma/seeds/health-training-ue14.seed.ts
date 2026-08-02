import type { PrismaClient } from '@prisma/client';
import { seedHealth } from './health.seed';
import { seedHealthBiochemistryChapters } from './health-chapters.seed';
import { seedHealthCourseUnits } from './health-course-units.seed';
import { seedHealthTeachingElements } from './health-teaching-elements.seed';
import { seedHealthTrainingUe14AcidesDivers } from './health-training-ue14-acides-divers.seed';
import { seedHealthTrainingUe14AcidesAminesStructureRolesBiologiques } from './health-training-ue14-acides-amines-structure-roles-biologiques.seed';
import { seedHealthTrainingUe14AldehydesCetones } from './health-training-ue14-aldehydes-cetones.seed';
import { seedHealthTrainingUe14ElementsChimiquesClassificationPeriodique } from './health-training-ue14-elements-chimiques-classification-periodique.seed';
import { seedHealthTrainingUe14DerivesMonofonctionnelsAlcoolsAminesHalogenes } from './health-training-ue14-derives-monofonctionnels-alcools-amines-halogenes.seed';
import { seedHealthTrainingUe14EnzymeActivityMeasurement } from './health-training-ue14-enzyme-activity-measurement.seed';
import { seedHealthTrainingUe14EnzymesPropertiesNomenclatureMechanismRegulation } from './health-training-ue14-enzymes-properties-nomenclature-mechanism-regulation.seed';
import { seedHealthTrainingUe14EstersAmides } from './health-training-ue14-esters-amides.seed';
import { seedHealthTrainingUe14ForcesIntermoleculaires } from './health-training-ue14-forces-intermoleculaires.seed';
import { seedHealthTrainingUe14FormationIonsElectronegativiteLiaisonsChimiques } from './health-training-ue14-formation-ions-electronegativite-liaisons-chimiques.seed';
import { seedHealthTrainingUe14GlucidesGeneralitesStructure } from './health-training-ue14-glucides-generalites-structure.seed';
import { seedHealthTrainingUe14GlyceridesGlycerophospholipides } from './health-training-ue14-glycerides-glycerophospholipides.seed';
import { seedHealthTrainingUe14Eicosanoides } from './health-training-ue14-eicosanoides.seed';
import { seedHealthTrainingUe14Hydrocarbures } from './health-training-ue14-hydrocarbures.seed';
import { seedHealthTrainingUe14IntroductionLipidesAcidesGras } from './health-training-ue14-introduction-lipides-acides-gras.seed';
import { seedHealthTrainingUe14IsomerieEnantiomerie } from './health-training-ue14-isomerie-enantiomerie.seed';
import { seedHealthTrainingUe14NomenclatureChimiqueFonctionsOrganiques } from './health-training-ue14-nomenclature-chimique-fonctions-organiques.seed';
import { seedHealthTrainingUe14OrbitalesMoleculaires } from './health-training-ue14-orbitales-moleculaires.seed';
import { seedHealthTrainingUe14OsesSimplesDerives } from './health-training-ue14-oses-simples-derives.seed';
import { seedHealthTrainingUe14Osides } from './health-training-ue14-osides.seed';
import { seedHealthTrainingUe14RolesBiologiquesAcidesAminesPeptides } from './health-training-ue14-roles-biologiques-acides-amines-peptides.seed';
import { seedHealthTrainingUe14RolesBiologiquesProteinesPartie1 } from './health-training-ue14-roles-biologiques-proteines-partie-1.seed';
import { seedHealthTrainingUe14RolesBiologiquesProteinesPartie2 } from './health-training-ue14-roles-biologiques-proteines-partie-2.seed';
import { seedHealthTrainingUe14Sphingolipides } from './health-training-ue14-sphingolipides.seed';
import { seedHealthTrainingUe14SterolsSteroidesSterides } from './health-training-ue14-sterols-steroides-sterides.seed';
import { seedHealthTrainingUe14StructurePeptidesProteines } from './health-training-ue14-structure-peptides-proteines.seed';

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

export async function seedHealthTrainingUe14Biochimie(prisma: PrismaClient) {
  await seedHealth(prisma);
  await seedHealthCourseUnits(prisma);
  await seedHealthTeachingElements(prisma);
  await seedHealthBiochemistryChapters(prisma);
  await seedHealthTrainingUe14BiochimieContent(prisma);
}

export async function seedHealthTrainingUe14BiochimieContent(prisma: PrismaClient) {
  await seedHealthTrainingUe14GlucidesGeneralitesStructure(prisma);
  await seedHealthTrainingUe14OsesSimplesDerives(prisma);
  await seedHealthTrainingUe14Osides(prisma);
  await seedHealthTrainingUe14IntroductionLipidesAcidesGras(prisma);
  await seedHealthTrainingUe14Eicosanoides(prisma);
  await seedHealthTrainingUe14GlyceridesGlycerophospholipides(prisma);
  await seedHealthTrainingUe14Sphingolipides(prisma);
  await seedHealthTrainingUe14SterolsSteroidesSterides(prisma);
  await seedHealthTrainingUe14AcidesAminesStructureRolesBiologiques(prisma);
  await seedHealthTrainingUe14StructurePeptidesProteines(prisma);
  await seedHealthTrainingUe14RolesBiologiquesAcidesAminesPeptides(prisma);
  await seedHealthTrainingUe14RolesBiologiquesProteinesPartie1(prisma);
  await seedHealthTrainingUe14RolesBiologiquesProteinesPartie2(prisma);
  await seedHealthTrainingUe14EnzymesPropertiesNomenclatureMechanismRegulation(prisma);
  await seedHealthTrainingUe14EnzymeActivityMeasurement(prisma);
}

export async function seedHealthTrainingUe14(prisma: PrismaClient) {
  await seedHealthTrainingUe14ChimieGenerale(prisma);
  await seedHealthTrainingUe14ChimieOrganique(prisma);
  await seedHealthTrainingUe14BiochimieContent(prisma);
}
