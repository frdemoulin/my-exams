import type { PrismaClient } from '@prisma/client';
import type {
  SeedQuestion,
  SeedQuiz,
  SeedSection,
} from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-orbitales-moleculaires.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-orbitales-moleculaires.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-orbitales-moleculaires.section-c.seed';
import {
  SECTION_D_DISCOVER_QUESTION_ORDERS,
  SECTION_D_PRACTICE_QUESTION_ORDERS,
  SECTION_D_QUESTIONS,
} from './health-training-ue14-orbitales-moleculaires.section-d.seed';
import {
  SYNTHESIS_MASTER_QUESTION_ORDERS,
  SYNTHESIS_QUESTIONS,
} from './health-training-ue14-orbitales-moleculaires.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'orbitales-moleculaires';

const DISCOVER_SECTION_A_QUIZ_SLUG =
  'decouvrir-orbitales-moleculaires-liaisons-sigma-pi';
const PRACTICE_SECTION_A_QUIZ_SLUG =
  'sentrainer-orbitales-moleculaires-liaisons-sigma-pi';
const DISCOVER_SECTION_B_QUIZ_SLUG =
  'decouvrir-hybridation-geometrie-molecules-simples';
const PRACTICE_SECTION_B_QUIZ_SLUG =
  'sentrainer-hybridation-geometrie-molecules-simples';
const DISCOVER_SECTION_C_QUIZ_SLUG =
  'decouvrir-liaisons-multiples-carbone-aromaticite';
const PRACTICE_SECTION_C_QUIZ_SLUG =
  'sentrainer-liaisons-multiples-carbone-aromaticite';
const DISCOVER_SECTION_D_QUIZ_SLUG =
  'decouvrir-regle-gillespie-geometrie-moleculaire';
const PRACTICE_SECTION_D_QUIZ_SLUG =
  'sentrainer-regle-gillespie-geometrie-moleculaire';
const MASTER_SYNTHESIS_QUIZ_SLUG = 'maitriser-synthese-orbitales-moleculaires';
const normalizeTrailingCatchAllChoice = (choice: string) =>
  choice
    .trim()
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, ' ')
    .replace(/[.!?]/g, '')
    .replace(/\s+/g, ' ');

const shouldMoveChoiceLast = (choice: string) => {
  const normalizedChoice = normalizeTrailingCatchAllChoice(choice);

  return (
    normalizedChoice === 'tous les items precedents sont faux' ||
    normalizedChoice === 'tous les items precedents sont vrais' ||
    normalizedChoice === 'toutes les propositions precedentes sont fausses' ||
    normalizedChoice === 'toutes les propositions precedentes sont vraies' ||
    normalizedChoice === 'toutes les affirmations precedentes sont fausses' ||
    normalizedChoice === 'toutes les affirmations precedentes sont vraies' ||
    normalizedChoice.startsWith('aucun des items precedents n est') ||
    normalizedChoice.startsWith('aucune des propositions precedentes n est') ||
    normalizedChoice.startsWith('aucune des affirmations precedentes n est')
  );
};

const moveTrailingCatchAllChoiceLast = (question: SeedQuestion): SeedQuestion => {
  const trailingCatchAllChoiceIndex = question.choices.findIndex(
    (choice) => typeof choice === 'string' && shouldMoveChoiceLast(choice)
  );

  if (
    trailingCatchAllChoiceIndex === -1 ||
    trailingCatchAllChoiceIndex === question.choices.length - 1
  ) {
    return question;
  }

  const reorderedIndexes = question.choices
    .map((_, index) => index)
    .filter((index) => index !== trailingCatchAllChoiceIndex);
  reorderedIndexes.push(trailingCatchAllChoiceIndex);

  const newIndexByOldIndex = new Map<number, number>();
  reorderedIndexes.forEach((oldIndex, newIndex) => {
    newIndexByOldIndex.set(oldIndex, newIndex);
  });

  return {
    ...question,
    choices: reorderedIndexes.map((index) => question.choices[index]),
    correctChoiceIndexes: question.correctChoiceIndexes
      .map((index) => newIndexByOldIndex.get(index) ?? index)
      .sort((left, right) => left - right),
    choiceExplanations: question.choiceExplanations
      ? reorderedIndexes.map((index) => question.choiceExplanations?.[index] ?? '')
      : question.choiceExplanations,
  };
};

const normalizeQuestionChoices = (questions: SeedQuestion[]) =>
  questions.map(moveTrailingCatchAllChoiceLast);

const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  1: [`Définition d'une orbitale moléculaire`],
  2: [`Liaison $\\sigma$ et recouvrement axial`],
  3: [`Combinaisons d'orbitales atomiques`],
  4: [`Orbitales moléculaires liantes et antiliantes`],
  5: [`Liaison $\\pi$ et recouvrement latéral`],
  6: [`Comparaison des liaisons $\\sigma$ et $\\pi$`],
  7: [`Liaisons $\\sigma$ et $\\pi$ dans le dioxygène`],
  8: [`Liaisons $\\sigma$ dans le peroxyde d'hydrogène`],
  9: [`Liaison $\\sigma$ dans le chlorure d'hydrogène`],
  10: [`Liaison triple du diazote`],
  11: [`Cyanure d'hydrogène : décompte des liaisons $\\sigma$ et $\\pi$`],
  12: [`Urée : liaisons $\\sigma$, liaison $\\pi$ et quantité de matière`],
  13: [`Méthanamide : comparaison des liaisons avec l'urée`],
  14: [`Diagramme énergétique des orbitales liante et antiliante`],
  15: [`Profil de densité électronique d'une orbitale moléculaire`],
  16: [`Orientation des orbitales atomiques et nature du recouvrement`],
  17: [`Nombre d'orbitales moléculaires issues d'orbitales atomiques`],
  18: [`Diazote : quantité de liaisons $\\sigma$ et $\\pi$`],
  19: [`Dioxyde de carbone : décompte quantitatif des liaisons`],
  20: [`Comparaison transversale de molécules biologiques et toxiques`],
  21: [`Principe général de l'hybridation`],
  22: [`Hybridation $\\mathrm{sp}$ et géométrie linéaire`],
  23: [`Hybridation du béryllium dans $\\mathrm{BeH_2}$`],
  24: [`Hybridation $\\mathrm{sp}^2$ et géométrie trigonale plane`],
  25: [`Hybridation $\\mathrm{sp}^3$ et organisation tétraédrique`],
  26: [`Méthane : hybridation $\\mathrm{sp}^3$ et géométrie tétraédrique`],
  27: [`Ammoniac : doublet non liant et géométrie pyramidale`],
  28: [`Eau : doublets non liants et géométrie coudée`],
  29: [`Comparaison des géométries de $\\mathrm{CH_4}$, $\\mathrm{NH_3}$ et $\\mathrm{H_2O}$`],
  30: [`Correspondance entre hybridation et géométrie`],
  31: [`Acétone : cases quantiques du carbone hybridé $\\mathrm{sp}^2$`],
  32: [`Dioxyde de carbone : hybridation $\\mathrm{sp}$ et orbitales $\\mathrm{p}$ restantes`],
  33: [`Ion ammonium : protonation et hybridation $\\mathrm{sp}^3$`],
  34: [`Cases quantiques de l'ammoniac et de l'eau`],
  35: [`Lecture d'un schéma des géométries $\\mathrm{sp}$, $\\mathrm{sp}^2$ et $\\mathrm{sp}^3$`],
  36: [`Éthanol : hybridation du carbone et de l'oxygène`],
  37: [`Acide lactique : hybridation des carbones et dénombrement d'orbitales`],
  38: [`Ion hydrogénocarbonate : hybridation $\\mathrm{sp}^2$ et géométrie`],
  39: [`Pertinence du modèle d'hybridation`],
  40: [`Ion oxonium : hybridation $\\mathrm{sp}^3$ et géométrie pyramidale`],
  41: [`Composition des doubles et triples liaisons`],
  42: [`Éthylène : hybridation $\\mathrm{sp}^2$ et géométrie plane`],
  43: [`Éthylène : décompte des liaisons $\\sigma$ et $\\pi$`],
  44: [`Liaison $\\pi$ et limitation de la rotation`],
  45: [`Acétylène : hybridation $\\mathrm{sp}$ et géométrie linéaire`],
  46: [`Acétylène : orbitales $\\mathrm{p}$ et liaisons $\\pi$`],
  47: [`Carbone caméléon : correspondance entre hybridation et liaisons`],
  48: [`Benzène : hybridation et squelette $\\sigma$`],
  49: [`Acide salicylique : noyau benzénique et aromaticité`],
  50: [`Comparaison de l'éthane, de l'éthylène et de l'acétylène`],
  51: [`Règle de Gillespie et répulsion des doublets`],
  52: [`Nomenclature de Gillespie $\\mathrm{AX}_m\\mathrm{E}_n`],
  53: [`Géométries $\\mathrm{AX}_2$, $\\mathrm{AX}_3$ et $\\mathrm{AX}_4$`],
  54: [`Dioxyde de carbone : géométrie linéaire`],
  55: [`Borane et dioxyde de soufre : domaines électroniques`],
  56: [`Ion ammonium : géométrie tétraédrique`],
  57: [`Doublets non liants et géométries pyramidale ou coudée`],
  58: [`Ammoniac et ion oxonium : type $\\mathrm{AX}_3\\mathrm{E}_1$`],
  59: [`Géométries $\\mathrm{AX}_5$ et $\\mathrm{AX}_6$`],
  60: [`Correspondances entre molécules et nomenclature de Gillespie`],
  71: [`Aspirine : hybridation des carbones`],
  72: [`Protoxyde d'azote : géométrie, hybridation et mésomérie`],
  73: [`Couple $\\mathrm{CO_2},\\mathrm{H_2O}/\\mathrm{HCO_3^-}$ : géométrie et polarité`],
  74: [`Méthanal : carbone carbonylé et hybridation $\\mathrm{sp}^2$`],
  75: [`Trans-1,2-dichloroéthène : géométrie et polarité`],
  76: [`Cyanure d'hydrogène : cases quantiques après hybridation $\\mathrm{sp}$`],
  77: [`Combinaison de deux orbitales $\\mathrm{p}$ en orbitales $\\sigma$ et $\\sigma^*$`],
  78: [`Espèces acido-basiques : Gillespie et hybridation $\\mathrm{sp}^3$`],
  79: [`$\\mathrm{PCl_5}$ et $\\mathrm{SF_6}$ : géométries hypervalentes`],
  80: [`Comparaison de $\\mathrm{HCN}$, $\\mathrm{C_2H_4}$ et $\\mathrm{C_6H_6}$`],
};

const questions: SeedQuestion[] = normalizeQuestionChoices([
  ...SECTION_A_QUESTIONS,
  ...SECTION_B_QUESTIONS,
  ...SECTION_C_QUESTIONS,
  ...SECTION_D_QUESTIONS,
  ...SYNTHESIS_QUESTIONS,
]);

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Orbitales moléculaires et liaisons σ/π`,
    description:
      `Construction des orbitales moléculaires et distinction entre liaisons $\\sigma$ et $\\pi$.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Hybridation et géométrie des molécules simples`,
    description:
      `Hybridation des orbitales atomiques et géométrie des molécules simples.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Liaisons multiples, carbone et aromaticité`,
    description:
      `Liaisons multiples, carbone insaturé et premières notions d'aromaticité.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Règle de Gillespie et géométrie moléculaire`,
    description:
      `Application de la règle de Gillespie à la géométrie moléculaire.`,
    kind: 'THEME',
  },
  {
    order: 5,
    title: `Synthèse`,
    description:
      `Section de consolidation transversale sur les orbitales moléculaires et la géométrie moléculaire.`,
    kind: 'SYNTHESIS',
  },
];

const quizSeeds: SeedQuiz[] = [
  {
    order: 1,
    slug: DISCOVER_SECTION_A_QUIZ_SLUG,
    title: `Découvrir – Orbitales moléculaires et liaisons σ/π`,
    description:
      `Définitions, vocabulaire et premières applications sur les orbitales moléculaires et les liaisons $\\sigma$ et $\\pi$.`,
    stage: 'DISCOVER',
    sectionOrder: 1,
    questionOrders: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    order: 2,
    slug: PRACTICE_SECTION_A_QUIZ_SLUG,
    title: `S'entraîner – Orbitales moléculaires et liaisons σ/π`,
    description:
      `Situations concrètes, schémas, interprétation de profils et calculs sur les liaisons $\\sigma$ et $\\pi$.`,
    stage: 'PRACTICE',
    sectionOrder: 1,
    questionOrders: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  },
  {
    order: 3,
    slug: DISCOVER_SECTION_B_QUIZ_SLUG,
    title: `Découvrir – Hybridation et géométrie des molécules simples`,
    description:
      `Concepts fondamentaux de l'hybridation $\\mathrm{sp}$, $\\mathrm{sp}^2$ et $\\mathrm{sp}^3$ et premières géométries moléculaires.`,
    stage: 'DISCOVER',
    sectionOrder: 2,
    questionOrders: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  },
  {
    order: 4,
    slug: PRACTICE_SECTION_B_QUIZ_SLUG,
    title: `S'entraîner – Hybridation et géométrie des molécules simples`,
    description:
      `Applications intermédiaires sur l'hybridation $\\mathrm{sp}$, $\\mathrm{sp}^2$, $\\mathrm{sp}^3$ et les géométries moléculaires simples.`,
    stage: 'PRACTICE',
    sectionOrder: 2,
    questionOrders: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  },
  {
    order: 5,
    slug: DISCOVER_SECTION_C_QUIZ_SLUG,
    title: `Découvrir – Liaisons multiples, carbone et aromaticité`,
    description:
      `Premières notions sur les liaisons multiples, le carbone insaturé et l'aromaticité.`,
    stage: 'DISCOVER',
    sectionOrder: 3,
    questionOrders: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  },
  {
    order: 6,
    slug: PRACTICE_SECTION_C_QUIZ_SLUG,
    title: `S'entraîner – Liaisons multiples, carbone et aromaticité`,
    description:
      `Applications intermédiaires sur les liaisons multiples, les structures carbonées et l'aromaticité.`,
    stage: 'PRACTICE',
    sectionOrder: 3,
    questionOrders: [],
  },
  {
    order: 7,
    slug: DISCOVER_SECTION_D_QUIZ_SLUG,
    title: `Découvrir – Règle de Gillespie et géométrie moléculaire`,
    description:
      `Premières notions sur la règle de Gillespie et la géométrie moléculaire.`,
    stage: 'DISCOVER',
    sectionOrder: 4,
    questionOrders: SECTION_D_DISCOVER_QUESTION_ORDERS,
  },
  {
    order: 8,
    slug: PRACTICE_SECTION_D_QUIZ_SLUG,
    title: `S'entraîner – Règle de Gillespie et géométrie moléculaire`,
    description:
      `Applications intermédiaires sur la règle de Gillespie et la géométrie moléculaire.`,
    stage: 'PRACTICE',
    sectionOrder: 4,
    questionOrders: SECTION_D_PRACTICE_QUESTION_ORDERS,
  },
  {
    order: 9,
    slug: MASTER_SYNTHESIS_QUIZ_SLUG,
    title: `Maîtriser – Synthèse`,
    description:
      `Synthèse transversale sur les orbitales moléculaires, l'hybridation et la géométrie moléculaire.`,
    stage: 'MASTER',
    sectionOrder: 5,
    questionOrders: SYNTHESIS_MASTER_QUESTION_ORDERS,
  },
];

export async function seedHealthTrainingUe14OrbitalesMoleculaires(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 3',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
  });
}
