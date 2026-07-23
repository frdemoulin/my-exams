import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-formation-ions-electronegativite-liaisons-chimiques.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-formation-ions-electronegativite-liaisons-chimiques.section-b.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-formation-ions-electronegativite-liaisons-chimiques.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'formation-ions-electronegativite-liaisons-chimiques';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Formation des ions et électronégativité`,
    description:
      `Formation des cations et des anions, énergie d'ionisation, affinité électronique et comparaison de l'aptitude des atomes à attirer les électrons.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Liaisons chimiques`,
    description:
      `Liaisons ioniques, covalentes et premiers repères structuraux autour des liaisons chimiques.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Synthèse`,
    description:
      `Section de consolidation transversale sur les ions, l'électronégativité et les liaisons chimiques.`,
    kind: 'SYNTHESIS',
  },
];

const questions: SeedQuestion[] = [
  ...SECTION_A_QUESTIONS,
  ...SECTION_B_QUESTIONS,
  ...SYNTHESIS_QUESTIONS,
];

const quizSeeds: SeedQuiz[] = [
  {
    order: 1,
    slug: 'decouvrir-formation-ions',
    title: `Découvrir – Formation des ions`,
    description:
      `Premier niveau d'entraînement sur la section A – Formation des ions et électronégativité.`,
    stage: 'DISCOVER',
    sectionOrder: 1,
    questionOrders: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    order: 2,
    slug: 'sentrainer-formation-ions',
    title: `S'entraîner – Formation des ions`,
    description:
      `Niveau intermédiaire d'entraînement sur la section A – Formation des ions et électronégativité.`,
    stage: 'PRACTICE',
    sectionOrder: 1,
    questionOrders: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  },
  {
    order: 1,
    slug: 'decouvrir-liaisons-chimiques',
    title: `Découvrir – Liaisons chimiques`,
    description:
      `Premier niveau d'entraînement sur la section B – Liaisons chimiques.`,
    stage: 'DISCOVER',
    sectionOrder: 2,
    questionOrders: [21, 22, 23, 26, 28, 30, 32, 33, 37, 38],
  },
  {
    order: 2,
    slug: 'sentrainer-liaisons-chimiques',
    title: `S'entraîner – Liaisons chimiques`,
    description:
      `Niveau intermédiaire d'entraînement sur la section B – Liaisons chimiques.`,
    stage: 'PRACTICE',
    sectionOrder: 2,
    questionOrders: [25, 24, 27, 29, 31, 36, 39, 50],
    questionGroups: [
      {
        order: 1,
        title: `Radiolyse de l'eau et formation de radicaux libres`,
        sharedStatement:
          `En radiothérapie, les rayonnements ionisants peuvent interagir avec l'eau, très abondante dans les cellules. Une première étape simplifiée de cette radiolyse correspond à la rupture homolytique d'une liaison $\\mathrm{O-H}$ : $$\\mathrm{H_{2}O} \\xrightarrow{\\gamma} \\mathrm{HO^{\\bullet}} + \\mathrm{H^{\\bullet}}$$ On donne l'énergie moyenne de dissociation d'une liaison $\\mathrm{O-H}$ : $$E_{\\mathrm{O-H}} = 460\\ \\mathrm{kJ \\cdot mol^{-1}}$$`,
        questionOrders: [40, 41],
      },
    ],
  },
  {
    order: 1,
    slug: 'sentrainer-synthese-ions-electronegativite-liaisons-chimiques',
    title: `S'entraîner – Synthèse ions et liaisons chimiques`,
    description:
      `Niveau intermédiaire de synthèse sur les ions, l'électronégativité, les liaisons chimiques et leurs applications médicales.`,
    stage: 'PRACTICE',
    sectionOrder: 3,
    items: [
      {
        type: 'GROUP',
        title: `Sérum physiologique et chlorure de sodium`,
        sharedStatement:
          `Le sérum physiologique est une solution aqueuse contenant notamment du chlorure de sodium. On donne $\\mathrm{Z}(\\mathrm{Na})=11$, $\\mathrm{Z}(\\mathrm{Cl})=17$, $\\mathrm{Z}(\\mathrm{Ne})=10$ et $\\mathrm{Z}(\\mathrm{Ar})=18$. Le sodium, peu électronégatif, tend à perdre un électron, tandis que le chlore tend à en gagner un.`,
        questionOrders: [51, 52],
      },
      { type: 'QUESTION', questionOrder: 53 },
      { type: 'QUESTION', questionOrder: 54 },
      { type: 'QUESTION', questionOrder: 55 },
      { type: 'QUESTION', questionOrder: 56 },
      { type: 'QUESTION', questionOrder: 57 },
      { type: 'QUESTION', questionOrder: 58 },
      {
        type: 'GROUP',
        title: `Radiothérapie et radiolyse de l'eau`,
        sharedStatement:
          `En radiothérapie, les rayonnements ionisants peuvent provoquer la rupture homolytique d'une liaison $\\mathrm{O-H}$ de l'eau : $$\\mathrm{H_{2}O}\\xrightarrow{\\gamma}\\mathrm{HO^{\\bullet}}+\\mathrm{H^{\\bullet}}$$ On donne l'énergie moyenne de dissociation $E_{\\mathrm{O-H}}=460\\ \\mathrm{kJ\\cdot mol^{-1}}$.`,
        questionOrders: [59, 60],
      },
    ],
  },
  {
    order: 2,
    slug: 'synthese-ions-electronegativite-liaisons-chimiques',
    title: `Synthèse – Ions et liaisons chimiques`,
    description:
      `QCM de synthèse transversal et contextualisé sur les ions, l'électronégativité, les liaisons chimiques et leurs applications médicales.`,
    stage: 'MASTER',
    sectionOrder: 3,
    items: [
      { type: 'QUESTION', questionOrder: 34 },
      {
        type: 'GROUP',
        title: `Fluorures et prévention dentaire`,
        sharedStatement:
          `Les ions fluorure sont utilisés dans la prévention de la carie dentaire. On considère notamment le fluorure de sodium $\\mathrm{NaF}$ et l'association du calcium avec le fluor. Données : $\\mathrm{Z}(\\mathrm{Na})=11$, $\\mathrm{Z}(\\mathrm{F})=9$, $\\mathrm{Z}(\\mathrm{Ca})=20$, $\\chi(\\mathrm{Na})\\approx0{,}9$, $\\chi(\\mathrm{Ca})\\approx1{,}0$ et $\\chi(\\mathrm{F})=4{,}0$.`,
        questionOrders: [42, 43],
      },
      { type: 'QUESTION', questionOrder: 44 },
      { type: 'QUESTION', questionOrder: 45 },
      {
        type: 'GROUP',
        title: `Hémoglobine et intoxication au monoxyde de carbone`,
        sharedStatement:
          `Dans l'hémoglobine, l'ion ferreux $\\mathrm{Fe^{2+}}$ constitue le centre métallique de l'hème. Il est coordonné à quatre atomes d'azote de l'hème et à un azote d'une histidine ; une sixième position peut fixer réversiblement $\\mathrm{O_{2}}$. Le monoxyde de carbone $\\mathrm{CO}$ peut entrer en compétition avec le dioxygène pour cette position.`,
        questionOrders: [46, 47],
      },
      { type: 'QUESTION', questionOrder: 35 },
      {
        type: 'GROUP',
        title: `Radiothérapie et radiolyse de l'eau`,
        sharedStatement:
          `En radiothérapie, un rayonnement ionisant peut transférer de l'énergie à l'eau cellulaire et provoquer une rupture homolytique d'une liaison $\\mathrm{O-H}$. On donne l'énergie moyenne de dissociation $E_{\\mathrm{O-H}}=460\\ \\mathrm{kJ \\cdot mol^{-1}}$ et le nombre d'Avogadro $N_{\\mathrm{A}}=6{,}0 \\times 10^{23}\\ \\mathrm{mol^{-1}}$.`,
        questionOrders: [48, 49],
      },
    ],
  },
];

export async function seedHealthTrainingUe14FormationIonsElectronegativiteLiaisonsChimiques(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 2',
    questionThemeLabelsByOrder: {
      1: [`Formation des cations et des anions`],
      2: [`Énergie d'ionisation et formation des cations`],
      3: [`Tendance des métaux à former des cations`],
      4: [`Affinité électronique et formation des anions`],
      5: [`Configuration électronique cible des ions du bloc $\\mathrm{p}$`],
      6: [`Définition et notation de l'électronégativité`],
      7: [`Évolution de l'électronégativité dans la classification périodique`],
      8: [`Électronégativité des éléments du vivant`],
      9: [`Ordre de grandeur de l'électronégativité`],
      10: [`Facilité d'ionisation positive`],
      11: [`Facilité d'ionisation négative`],
      12: [`Configuration électronique d'un cation`],
      13: [`Configuration électronique du gaz rare précédent`],
      14: [`Cations du fer et du cuivre`],
      15: [`Comparaison des électronégativités sur l'échelle de Pauling`],
      16: [`Comparaison d'électronégativités dans la classification périodique`],
      17: [`Électronégativité croissante des métaux alcalins`],
      18: [`Électronégativité la plus faible parmi les éléments du vivant`],
      19: [`Configuration électronique de l'ion ferreux`],
      20: [`Lien entre électronégativité et formation des ions`],
      21: [`Formation du doublet liant en liaison covalente`],
      22: [`Doublets liants et non liants dans quelques molécules`],
      23: [`Représentations de Lewis des atomes`],
      24: [`Liaisons covalentes dans PCl3 et PCl5`],
      25: [`Règles du duet et de l'octet`],
      26: [`Liaison de coordination`],
      27: [`Formation et charge de l'ion ammonium`],
      28: [`Complexes de coordination`],
      29: [`Configuration électronique et coordination du fer dans l'hémoglobine`],
      30: [`Moment dipolaire d'une liaison`],
      31: [`Calcul d'une charge partielle`],
      32: [`Conversion du moment dipolaire en debyes`],
      33: [`Mésomérie et délocalisation électronique`],
      34: [`Élément chlore : structure électronique et électronégativité`],
      35: [`Cisplatine et substitution de ligands sur l'ADN`],
      36: [`Protoxyde d'azote et mésomérie`],
      37: [`Énergie de liaison`],
      38: [`Application à l'éclaircissement dentaire`],
      39: [`Mésomérie dans le cycle benzénique`],
      40: [`Radicaux libres et radiolyse de l'eau`],
      41: [`Énergie de rupture d'une liaison O-H`],
      42: [`Fluorures dentaires et configurations électroniques des ions`],
      43: [`Fluorure de calcium et liaison ionique`],
      44: [`Fonction amide : liaisons sigma, pi et mésomérie`],
      45: [`Moment dipolaire de la liaison H-Cl`],
      46: [`Coordination du fer dans l'hémoglobine`],
      47: [`Substitution de ligand par le monoxyde de carbone`],
      48: [`Énergie microscopique de rupture d'une liaison O-H`],
      49: [`Radiolyse de l'eau et formation de radicaux`],
      50: [`Monoxyde d'azote et espèce radicalaire`],
      51: [`Sérum physiologique et configuration électronique des ions`],
      52: [`Chlorure de sodium, électroneutralité et liaison ionique`],
      53: [`Formation de l'ion ammonium par liaison de coordination`],
      54: [`Peroxyde d'hydrogène : liaisons sigma et doublets non liants`],
      55: [`Moment dipolaire de la liaison H-Cl et charge partielle`],
      56: [`Cisplatine, centre métallique et ligands`],
      57: [`Hémoglobine, dioxygène et substitution de ligand`],
      58: [`Liaison peptidique et mésomérie`],
      59: [`Radiolyse de l'eau et radicaux libres`],
      60: [`Calcul d'énergie de rupture d'une liaison O-H`],
    },
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3],
  });
}
