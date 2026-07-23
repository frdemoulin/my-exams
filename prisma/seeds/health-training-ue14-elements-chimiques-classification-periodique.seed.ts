import type { PrismaClient } from '@prisma/client';
import type {
  SeedQuestion,
  SeedQuiz,
  SeedSection,
} from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-elements-chimiques-classification-periodique.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-elements-chimiques-classification-periodique.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-elements-chimiques-classification-periodique.section-c.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-elements-chimiques-classification-periodique.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'elements-chimiques-classification-periodique';
const FIRST_SECTION_ORDER = 1;
const FIRST_QUIZ_ORDER = 1;
const FIRST_QUIZ_SLUG = 'decouvrir-elements-chimiques-classification';
const SECOND_QUIZ_ORDER = 2;
const SECOND_QUIZ_SLUG = 'sentrainer-generalites-atome';
const SECOND_SECTION_ORDER = 2;
const SECOND_SECTION_DISCOVER_QUIZ_ORDER = 1;
const SECOND_SECTION_DISCOVER_QUIZ_SLUG = 'decouvrir-organisation-configuration-electronique';
const SECOND_SECTION_PRACTICE_QUIZ_ORDER = 2;
const SECOND_SECTION_PRACTICE_QUIZ_SLUG = 'sentrainer-organisation-configuration-electronique';
const THIRD_SECTION_ORDER = 3;
const THIRD_SECTION_DISCOVER_QUIZ_ORDER = 1;
const THIRD_SECTION_DISCOVER_QUIZ_SLUG = 'decouvrir-classification-periodique';
const THIRD_SECTION_PRACTICE_QUIZ_ORDER = 2;
const THIRD_SECTION_PRACTICE_QUIZ_SLUG = 'sentrainer-classification-periodique';
const SYNTHESIS_QUIZ_ORDER = 2;
const SYNTHESIS_QUIZ_SLUG = 'synthese-atomes';

const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  1: [`Structure et constituants de l'atome`],
  2: [`Numéro atomique et nombre de masse`],
  3: [`Définition des isotopes`],
  4: [`Unités atomiques et ordres de grandeur`],
  5: [`Couches, sous-couches et orbitales`],
  6: [`Nombres quantiques et règles de remplissage`],
  7: [`Configurations électroniques usuelles`],
  8: [`Organisation de la classification périodique`],
  9: [`Familles d'éléments chimiques`],
  10: [`Éléments chimiques du vivant`],
  11: [`Notation et définition d'un nucléide`],
  12: [`Composition d'un atome à partir de A et Z`],
  13: [`Vocabulaire : atome, élément, nucléide et isotope`],
  14: [`Propriétés physiques et chimiques des isotopes`],
  15: [`Calcul de masse atomique moyenne`],
  16: [`Masse et stabilité du noyau atomique`],
  17: [`Cohérence de la notation d'un nucléide`],
  18: [`Comparaison des nombres de protons, neutrons et électrons`],
  19: [`Ordres de grandeur et masse de l'atome`],
  20: [`Nucléides, isotopes et numéro atomique`],
  21: [`Éléments naturels et éléments artificiels`],
  22: [`Constituants et neutralité de l'atome`],
  23: [`Définition de l'unité de masse atomique`],
  24: [`Ordres de grandeur biologiques et médicaux`],
  25: [`Conversions entre mètre, nanomètre et ångström`],
  26: [`Composition d'un ion à partir de A, Z et de sa charge`],
  27: [`Modèle atomique, radioactivité et défaut de masse`],
  28: [`Signification des quatre nombres quantiques`],
  29: [`Sous-couches, orbitales et capacité électronique`],
  30: [`Notation des quatre nombres quantiques`],
  31: [`Rôle du nombre quantique secondaire ℓ`],
  32: [`Configurations électroniques des premiers éléments`],
  33: [`Rôle du nombre quantique principal n`],
  34: [`Configuration électronique en cases quantiques`],
  35: [`Correspondance entre ℓ et les sous-couches $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$, $\\mathrm{f}$`],
  36: [`Couche de valence d'un métal de transition`],
  37: [`Valeurs autorisées de ℓ pour une couche donnée`],
  38: [`Définition et capacité d'une orbitale atomique`],
  39: [`Règle de Hund`],
  40: [`Configuration électronique en cases quantiques`],
  41: [`Identification d'une règle de remplissage non respectée`],
  42: [`Orbitale atomique et probabilité de présence`],
  43: [`Forme et symétrie des orbitales atomiques`],
  44: [`Configuration électronique d'un métal de transition`],
  45: [`Couche de valence d'un métal de transition`],
  46: [`Validité d'un quadruplet de nombres quantiques`],
  47: [`Ordre énergétique de remplissage des sous-couches`],
  48: [`Répartition des électrons dans les sous-couches $\\mathrm{s}$, $\\mathrm{p}$ et $\\mathrm{d}$`],
  49: [`Forme, symétrie et plans nodaux des orbitales`],
  50: [`Énergie des niveaux électroniques dans le modèle de Bohr`],
  51: [`Configurations électroniques des atomes et des ions`],
  52: [`Configuration électronique d'un métal de transition`],
  53: [`Couche de valence d'un métal de transition`],
  54: [`Détermination d'une formule brute par analyse massique`],
  55: [`Généralités de la classification périodique`],
  56: [`Ordre des premiers éléments chimiques`],
  57: [`Position des blocs dans la classification périodique`],
  58: [`Position d'un élément dans la classification périodique`],
  59: [`Repérage d'un élément par période et colonne`],
  60: [`Halogènes et propriétés de famille`],
  61: [`Métaux, métalloïdes et non-métaux`],
  62: [`Configuration électronique de valence par colonne`],
  64: [`Iode, halogènes et structure électronique`],
  65: [`Éléments constituant la matière vivante`],
  66: [`Métaux, non-métaux et métalloïdes`],
  67: [`Métaux, non-métaux et métalloïdes`],
  68: [`Position d'un élément dans la classification périodique`],
  69: [`Familles de la classification périodique`],
  70: [`Ordre des éléments d'une période de la classification`],
  71: [`Ordre des éléments d'une période de la classification`],
  72: [`Position et nature d'un métal de transition dans la classification`],
  73: [`Lanthanides, actinides et bloc $\\mathrm{f}$`],
  74: [`Configuration électronique, métal de transition et couche de valence`],
  75: [`Composition de nucléides isotopes de l'iode`],
  76: [`Isotopes, propriétés chimiques et masse atomique moyenne`],
  77: [`Cobalt 60 : nucléide, configuration électronique et classification`],
  78: [`Configuration électronique et couche de valence du calcium`],
  79: [`Nombres quantiques des électrons de valence du calcium`],
  80: [`Configuration électronique du phosphore en cases quantiques`],
  81: [`Capacité de la couche M et règle de Hund pour le phosphore`],
  82: [`Abondance isotopique du bore 10 et application médicale`],
  83: [`Configuration électronique et classification du sélénium`],
  84: [`Gadolinium, lanthanides et configuration électronique`],
};

const questions: SeedQuestion[] = [
  ...SECTION_A_QUESTIONS,
  ...SECTION_B_QUESTIONS,
  ...SECTION_C_QUESTIONS,
  ...SYNTHESIS_QUESTIONS,
];

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Atomes`,
    description:
      `Structure de l'atome, nucléides, isotopes et ordres de grandeur associés.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Organisation et configuration électronique`,
    description:
      `Couches, sous-couches, orbitales, nombres quantiques et configurations électroniques.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Classification périodique des éléments`,
    description:
      `Organisation de la classification, familles chimiques et propriétés associées.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Synthèse`,
    description:
      `Section de consolidation transversale sur les atomes, l'organisation électronique et la classification périodique.`,
    kind: 'SYNTHESIS',
  },
];

const firstQuizQuestionOrders = [1, 22, 2, 11, 12, 13, 21, 15, 3, 4];
const secondQuizQuestionOrders = [25, 14, 26, 16, 17, 18, 19, 20, 23, 24];
const secondSectionDiscoverQuestionOrders = [28, 29];
const secondSectionSecondDiscoverQuestionOrders = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
const thirdSectionDiscoverQuestionOrders = [8, 57, 56, 9, 58, 59, 60, 61, 62, 10];

const quizSeeds: SeedQuiz[] = [
  {
    order: FIRST_QUIZ_ORDER,
    slug: FIRST_QUIZ_SLUG,
    title: `Découvrir – Atomes`,
    description:
      `Premier niveau d'entraînement limité à la section A – Atomes, au format UE1 avec 4 items par question.`,
    stage: 'DISCOVER',
    sectionOrder: FIRST_SECTION_ORDER,
    questionOrders: firstQuizQuestionOrders,
  },
  {
    order: SECOND_QUIZ_ORDER,
    slug: SECOND_QUIZ_SLUG,
    title: `S'entraîner – Généralités sur l'atome`,
    description:
      `Niveau 2 d'entraînement sur la section A – Atomes, centré sur les généralités, les nucléides et les isotopes.`,
    stage: 'PRACTICE',
    sectionOrder: FIRST_SECTION_ORDER,
    questionOrders: secondQuizQuestionOrders,
  },
  {
    order: SECOND_SECTION_DISCOVER_QUIZ_ORDER,
    slug: SECOND_SECTION_DISCOVER_QUIZ_SLUG,
    title: `Découvrir – Organisation et configuration électronique`,
    description:
      `Premier niveau d'entraînement sur la section B – Organisation et configuration électronique.`,
    stage: 'DISCOVER',
    sectionOrder: SECOND_SECTION_ORDER,
    questionOrders: secondSectionSecondDiscoverQuestionOrders,
  },
  {
    order: SECOND_SECTION_PRACTICE_QUIZ_ORDER,
    slug: SECOND_SECTION_PRACTICE_QUIZ_SLUG,
    title: `S'entraîner – Organisation et configuration électronique`,
    description:
      `Niveau intermédiaire d'entraînement sur la section B – Organisation et configuration électronique.`,
    stage: 'PRACTICE',
    sectionOrder: SECOND_SECTION_ORDER,
    items: [
      { type: 'QUESTION', questionOrder: 28 },
      { type: 'QUESTION', questionOrder: 29 },
      { type: 'QUESTION', questionOrder: 40 },
      { type: 'QUESTION', questionOrder: 41 },
      { type: 'QUESTION', questionOrder: 42 },
      { type: 'QUESTION', questionOrder: 43 },
      {
        type: 'GROUP',
        title: `Élément fer`,
        sharedStatement: `On considère l'élément fer ($\\mathrm{Z} = 26$).`,
        questionOrders: [44, 45],
      },
      { type: 'QUESTION', questionOrder: 46 },
      { type: 'QUESTION', questionOrder: 47 },
    ],
  },
  {
    order: THIRD_SECTION_DISCOVER_QUIZ_ORDER,
    slug: THIRD_SECTION_DISCOVER_QUIZ_SLUG,
    title: `Découvrir – Classification périodique`,
    description:
      `Premier niveau d'entraînement sur la section C – Classification périodique des éléments.`,
    stage: 'DISCOVER',
    sectionOrder: THIRD_SECTION_ORDER,
    questionOrders: thirdSectionDiscoverQuestionOrders,
  },
  {
    order: THIRD_SECTION_PRACTICE_QUIZ_ORDER,
    slug: THIRD_SECTION_PRACTICE_QUIZ_SLUG,
    title: `S'entraîner – Classification périodique`,
    description:
      `Niveau intermédiaire d'entraînement sur la section C – Classification périodique des éléments.`,
    stage: 'PRACTICE',
    sectionOrder: THIRD_SECTION_ORDER,
    items: [
      { type: 'QUESTION', questionOrder: 55 },
      { type: 'QUESTION', questionOrder: 64 },
      {
        type: 'GROUP',
        title: `Métaux, non-métaux et métalloïdes`,
        sharedStatement:
          `On distingue les métaux, les non-métaux et les métalloïdes dans la classification périodique.`,
        questionOrders: [66, 67],
      },
      { type: 'QUESTION', questionOrder: 65 },
      { type: 'QUESTION', questionOrder: 68 },
      { type: 'QUESTION', questionOrder: 69 },
      { type: 'QUESTION', questionOrder: 70 },
      { type: 'QUESTION', questionOrder: 72 },
      { type: 'QUESTION', questionOrder: 73 },
    ],
  },
  {
    order: 1,
    slug: 'sentrainer-synthese-atomes',
    title: `S'entraîner – Synthèse éléments et classification`,
    description:
      `Niveau intermédiaire de synthèse transversal sur les nucléides, les ordres de grandeur, l'organisation électronique, la classification périodique et les éléments du vivant.`,
    stage: 'PRACTICE',
    sectionOrder: 4,
    items: [
      {
        type: 'GROUP',
        title: `Iode et isotopes`,
        sharedStatement:
          `L'iode est un oligoélément halogène pouvant se concentrer dans la thyroïde. On considère deux de ses nucléides : $^{127}_{53}\\mathrm{I}$ et $^{131}_{53}\\mathrm{I}$.`,
        questionOrders: [75, 76],
      },
      { type: 'QUESTION', questionOrder: 77 },
      {
        type: 'GROUP',
        title: `Calcium et classification périodique`,
        sharedStatement:
          `Le calcium fait partie des éléments de base du vivant. On considère son atome neutre, de numéro atomique $\\mathrm{Z}=20$.`,
        questionOrders: [78, 79],
      },
      {
        type: 'GROUP',
        title: `Phosphore et organisation électronique`,
        sharedStatement:
          `Le phosphore fait partie des éléments de base du vivant. Son numéro atomique est $\\mathrm{Z}=15$.`,
        questionOrders: [80, 81],
      },
      { type: 'QUESTION', questionOrder: 82 },
      { type: 'QUESTION', questionOrder: 83 },
      { type: 'QUESTION', questionOrder: 84 },
    ],
  },
  {
    order: SYNTHESIS_QUIZ_ORDER,
    slug: SYNTHESIS_QUIZ_SLUG,
    title: `Synthèse – Atomes`,
    description:
      `QCM de synthèse transversal sur les notions d'atome, de nucléide, d'isotope et d'ordres de grandeur.`,
    stage: 'MASTER',
    sectionOrder: 4,
    items: [
      { type: 'QUESTION', questionOrder: 27 },
      { type: 'QUESTION', questionOrder: 48 },
      { type: 'QUESTION', questionOrder: 49 },
      { type: 'QUESTION', questionOrder: 50 },
      { type: 'QUESTION', questionOrder: 51 },
      {
        type: 'GROUP',
        title: `Élément nickel`,
        sharedStatement: `On considère l'élément nickel ($\\mathrm{Z} = 28$).`,
        questionOrders: [52, 53],
      },
      { type: 'QUESTION', questionOrder: 54 },
      { type: 'QUESTION', questionOrder: 71 },
      { type: 'QUESTION', questionOrder: 74 },
    ],
  },
];

export async function seedHealthTrainingUe14ElementsChimiquesClassificationPeriodique(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 1',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    masterCleanupSectionOrders: [SECOND_SECTION_ORDER, THIRD_SECTION_ORDER],
  });
}
