import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-nomenclature-chimique-fonctions-organiques.section-a.seed';
import {
  SECTION_B_ALCOHOLS_DISCOVERY_QUESTION_ORDERS,
  SECTION_B_ALCOHOLS_PRACTICE_QUESTION_ORDERS,
  SECTION_B_ALDEHYDES_KETONES_DISCOVERY_QUESTION_ORDERS,
  SECTION_B_ALDEHYDES_KETONES_PRACTICE_QUESTION_ORDERS,
  SECTION_B_CARBOXYLIC_ACIDS_ESTERS_DISCOVERY_QUESTION_ORDERS,
  SECTION_B_ETHERS_PEROXIDES_CARBONATES_DISCOVERY_QUESTION_ORDERS,
  SECTION_B_OXYGENATED_FUNCTIONS_PRACTICE_QUESTION_ORDERS,
  SECTION_B_OXYGENATED_FUNCTIONS_SYNTHESIS_QUESTION_ORDERS,
  SECTION_B_QUESTIONS,
  SECTION_B_QUIZZES,
} from './health-training-ue14-nomenclature-chimique-fonctions-organiques.section-b.seed';
import {
  SECTION_C_AMIDES_CARBAMATES_DISCOVERY_QUESTION_ORDERS,
  SECTION_C_AMINES_AMMONIUMS_PRACTICE_QUESTION_ORDERS,
  SECTION_C_AMINES_DISCOVERY_QUESTION_ORDERS,
  SECTION_C_NITRILES_THIOLS_DISCOVERY_QUESTION_ORDERS,
  SECTION_C_NITROGEN_SULFUR_MASTER_QUESTION_ORDERS,
  SECTION_C_NITROGEN_SULFUR_PRACTICE_QUESTION_ORDERS,
  SECTION_C_QUESTIONS,
  SECTION_C_QUIZZES,
} from './health-training-ue14-nomenclature-chimique-fonctions-organiques.section-c.seed';
import {
  SECTION_D_ALKYL_ALKANES_DISCOVERY_QUESTION_ORDERS,
  SECTION_D_CARBON_DEGREE_DISCOVERY_QUESTION_ORDERS,
  SECTION_D_CARBON_FUNCTIONS_PRACTICE_QUESTION_ORDERS,
  SECTION_D_CHAIN_NOMENCLATURE_MASTER_QUESTION_ORDERS,
  SECTION_D_CHAIN_NOMENCLATURE_PRACTICE_QUESTION_ORDERS,
  SECTION_D_CHAIN_PREFIXES_DISCOVERY_QUESTION_ORDERS,
  SECTION_D_QUESTIONS,
  SECTION_D_QUIZZES,
} from './health-training-ue14-nomenclature-chimique-fonctions-organiques.section-d.seed';
import {
  SYNTHESIS_COMPOSITION_STRUCTURE_QUESTION_ORDERS,
  SYNTHESIS_MOCK_EXAM_QUESTION_ORDERS,
  SYNTHESIS_POLYFUNCTIONAL_MOLECULES_QUESTION_ORDERS,
  SYNTHESIS_QUESTIONS,
  SYNTHESIS_QUIZZES,
} from './health-training-ue14-nomenclature-chimique-fonctions-organiques.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'nomenclature-chimique-fonctions-organiques';
const SECTION_A_ORDER = 1;
const SECTION_B_ORDER = 2;
const SECTION_C_ORDER = 3;
const SECTION_D_ORDER = 4;
const SYNTHESIS_SECTION_ORDER = 5;
const SECTION_A_DISCOVER_QUIZ_SLUG =
  'decouvrir-formule-brute-composition-molecules-organiques';
const SECTION_A_PRACTICE_QUIZ_SLUG =
  'sentrainer-formule-brute-composition-molecules-organiques';
const SECTION_A_DISCOVER_QUESTION_ORDERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SECTION_A_PRACTICE_QUESTION_ORDERS = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const buildThemeLabelsByOrder = (
  questionOrders: number[],
  themeLabel: string
): Record<number, string[]> =>
  Object.fromEntries(questionOrders.map((order) => [order, [themeLabel]]));

const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  1: [`Rôle de la nomenclature chimique`],
  2: [`Définition et limites de la formule brute`],
  3: [`Formule brute et isomérie de constitution`],
  4: [`Éléments constitutifs de la matière organique`],
  5: [`Valences usuelles des atomes organiques`],
  6: [`Tétravalence du carbone et ordres de liaison`],
  7: [`Principe de la microanalyse chimique`],
  8: [`Calcul de masse molaire à partir d'une formule brute`],
  9: [`Calcul de pourcentage massique d'un élément`],
  10: [`Détermination d'une formule brute par microanalyse`],
  11: [`Décompte des atomes dans une formule semi-développée`],
  12: [`Formule brute commune et structures distinctes`],
  13: [`Contrôle des valences usuelles dans une structure`],
  14: [`Calcul de masse molaire d'un composé oxygéné`],
  15: [`Passage de la formule empirique à la formule brute`],
  16: [`Détermination d'une formule empirique par microanalyse`],
  17: [`Limites expérimentales de la microanalyse`],
  18: [`Pourcentage massique de l'azote dans une formule brute`],
  19: [`Formule brute à partir d'une formule empirique et d'une masse molaire`],
  20: [`Contrôle de cohérence entre valence et formule brute`],
  ...buildThemeLabelsByOrder(
    SECTION_B_ALCOHOLS_DISCOVERY_QUESTION_ORDERS,
    `Fonction alcool : reconnaissance et classes`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_ALCOHOLS_PRACTICE_QUESTION_ORDERS,
    `Alcools : cas mixtes, polyalcools et pièges de classe`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_ALDEHYDES_KETONES_DISCOVERY_QUESTION_ORDERS,
    `Aldéhydes et cétones : reconnaissance du carbonyle`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_ALDEHYDES_KETONES_PRACTICE_QUESTION_ORDERS,
    `Aldéhydes et cétones : isomérie et distinction`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_CARBOXYLIC_ACIDS_ESTERS_DISCOVERY_QUESTION_ORDERS,
    `Acides carboxyliques et esters : motifs caractéristiques`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_ETHERS_PEROXIDES_CARBONATES_DISCOVERY_QUESTION_ORDERS,
    `Éthers, peroxydes et carbonates : motifs caractéristiques`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_OXYGENATED_FUNCTIONS_PRACTICE_QUESTION_ORDERS,
    `Fonctions oxygénées : reconnaissance transversale`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_B_OXYGENATED_FUNCTIONS_SYNTHESIS_QUESTION_ORDERS,
    `Fonctions oxygénées : synthèse`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_AMINES_DISCOVERY_QUESTION_ORDERS,
    `Amines : reconnaissance et classes`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_AMINES_AMMONIUMS_PRACTICE_QUESTION_ORDERS,
    `Amines et ammoniums quaternaires : distinction`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_AMIDES_CARBAMATES_DISCOVERY_QUESTION_ORDERS,
    `Amides et carbamates : motifs caractéristiques`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_NITRILES_THIOLS_DISCOVERY_QUESTION_ORDERS,
    `Nitriles et thiols : motifs caractéristiques`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_NITROGEN_SULFUR_PRACTICE_QUESTION_ORDERS,
    `Fonctions azotées et soufrées : reconnaissance transversale`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_C_NITROGEN_SULFUR_MASTER_QUESTION_ORDERS,
    `Fonctions azotées et soufrées : synthèse`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_CARBON_DEGREE_DISCOVERY_QUESTION_ORDERS,
    `Chaînes carbonées : degré des atomes de carbone`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_CARBON_FUNCTIONS_PRACTICE_QUESTION_ORDERS,
    `Degré des carbones et fonctions chimiques`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_CHAIN_PREFIXES_DISCOVERY_QUESTION_ORDERS,
    `Chaînes carbonées : préfixes de nomenclature`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_ALKYL_ALKANES_DISCOVERY_QUESTION_ORDERS,
    `Groupes alkyles et alcanes`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_CHAIN_NOMENCLATURE_PRACTICE_QUESTION_ORDERS,
    `Nomenclature des chaînes carbonées`
  ),
  ...buildThemeLabelsByOrder(
    SECTION_D_CHAIN_NOMENCLATURE_MASTER_QUESTION_ORDERS,
    `Chaînes carbonées : synthèse`
  ),
  ...buildThemeLabelsByOrder(
    SYNTHESIS_COMPOSITION_STRUCTURE_QUESTION_ORDERS,
    `Synthèse : composition et structure moléculaire`
  ),
  ...buildThemeLabelsByOrder(
    SYNTHESIS_POLYFUNCTIONAL_MOLECULES_QUESTION_ORDERS,
    `Synthèse : fonctions et molécules polyfonctionnelles`
  ),
  ...buildThemeLabelsByOrder(
    SYNTHESIS_MOCK_EXAM_QUESTION_ORDERS,
    `Synthèse : examen blanc de nomenclature organique`
  ),
};

const questions: SeedQuestion[] = [
  ...SECTION_A_QUESTIONS,
  ...SECTION_B_QUESTIONS,
  ...SECTION_C_QUESTIONS,
  ...SECTION_D_QUESTIONS,
  ...SYNTHESIS_QUESTIONS,
];

const sections: SeedSection[] = [
  {
    order: SECTION_A_ORDER,
    title: `Formule brute et composition des molécules organiques`,
    description:
      `Rôle de la nomenclature, formule brute, éléments constitutifs de la matière organique, valence usuelle de H, des halogènes, de O, de N et de C, microanalyse chimique, calcul de la masse moléculaire et pourcentage massique d'un élément.`,
    kind: 'THEME',
  },
  {
    order: SECTION_B_ORDER,
    title: `Fonctions chimiques oxygénées`,
    description:
      `Reconnaissance des alcools primaire, secondaire et tertiaire, des acides carboxyliques, éthers, esters, cétones, aldéhydes, peroxydes et carbonates.`,
    kind: 'THEME',
  },
  {
    order: SECTION_C_ORDER,
    title: `Fonctions azotées et soufrées`,
    description:
      `Reconnaissance des amines primaire, secondaire et tertiaire, des amides, nitriles, carbamates, ammoniums quaternaires et thiols, avec distinction entre amine et ammonium quaternaire.`,
    kind: 'THEME',
  },
  {
    order: SECTION_D_ORDER,
    title: `Chaînes carbonées et nomenclature de base`,
    description:
      `Carbones primaire, secondaire, tertiaire et quaternaire, distinction entre degré d'un carbone et classe d'un alcool, préfixes méth-, éth-, prop-, groupes alkyles et nomenclature des alcanes simples.`,
    kind: 'THEME',
  },
  {
    order: SYNTHESIS_SECTION_ORDER,
    title: `Synthèse du chapitre`,
    description:
      `Section transversale combinant formule brute et microanalyse, valence des atomes, reconnaissance simultanée de plusieurs fonctions, classe des alcools et degré des carbones, préfixes, groupes alkyles, alcanes et pièges entre fonctions proches.`,
    kind: 'SYNTHESIS',
  },
];

const quizSeeds: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_A_DISCOVER_QUIZ_SLUG,
    title: `Formule brute et composition des molécules organiques`,
    description:
      `Entraînement sur la section A : formule brute, valences usuelles, microanalyse et calculs de composition.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_A_ORDER,
    questionOrders: SECTION_A_DISCOVER_QUESTION_ORDERS,
  },
  {
    order: 2,
    slug: SECTION_A_PRACTICE_QUIZ_SLUG,
    title: `Formule brute et composition des molécules organiques`,
    description:
      `Décompte d'atomes, formule empirique, microanalyse, masse molaire et contrôles de valence.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_A_ORDER,
    questionOrders: SECTION_A_PRACTICE_QUESTION_ORDERS,
  },
  ...SECTION_B_QUIZZES,
  ...SECTION_C_QUIZZES,
  ...SECTION_D_QUIZZES,
  ...SYNTHESIS_QUIZZES,
];

export async function seedHealthTrainingUe14NomenclatureChimiqueFonctionsOrganiques(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 5 (chimie organique 1)',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [
      SECTION_A_ORDER,
      SECTION_B_ORDER,
      SECTION_C_ORDER,
      SECTION_D_ORDER,
      SYNTHESIS_SECTION_ORDER,
    ],
  });
}
