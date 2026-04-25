import type {
  ChapterSectionKind,
  QuizDifficulty,
  TrainingQuizStage,
} from '@prisma/client';

type SeedQuizQuestion = {
  difficulty: QuizDifficulty;
  question: string;
  choices: string[];
  correctChoiceIndex: number;
  explanation: string;
  order: number;
};

type SeedTrainingQuizQuestionGroup = {
  title?: string;
  sharedStatement: string;
  order: number;
  questionOrders: number[];
};

type SeedTrainingQuizItem =
  | {
      type: 'QUESTION';
      questionOrder: number;
    }
  | {
      type: 'GROUP';
      title?: string;
      sharedStatement: string;
      questionOrders: number[];
    };

type SeedTrainingQuiz = {
  title: string;
  slug: string;
  description: string;
  order: number;
  stage?: TrainingQuizStage;
  isPublished?: boolean;
  questionOrders?: number[];
  questionGroups?: SeedTrainingQuizQuestionGroup[];
  items?: SeedTrainingQuizItem[];
};

type SeedChapterSection = {
  title: string;
  description: string;
  order: number;
  kind?: ChapterSectionKind;
  quizzes: SeedTrainingQuiz[];
};

type TrainingChapterSeed = {
  title: string;
  slug: string;
  order: number;
  domainLongDescriptions: string[];
  questions: SeedQuizQuestion[];
  sections?: SeedChapterSection[];
};

const createQuestion = (
  order: number,
  difficulty: QuizDifficulty,
  question: string,
  choices: string[],
  correctChoiceIndex: number,
  explanation: string
): SeedQuizQuestion => ({
  order,
  difficulty,
  question,
  choices,
  correctChoiceIndex,
  explanation,
});

const createSingleQuestionQuiz = ({
  title,
  slug,
  description,
  order,
  stage,
  questionOrder,
}: {
  title: string;
  slug: string;
  description: string;
  order: number;
  stage: TrainingQuizStage;
  questionOrder: number;
}): SeedTrainingQuiz => ({
  title,
  slug,
  description,
  order,
  stage,
  items: [
    {
      type: 'QUESTION',
      questionOrder,
    },
  ],
});

export const mouvementsFluideTrainingChapter: TrainingChapterSeed = {
  title: "Mouvements d'un fluide",
  slug: 'mouvements-d-un-fluide',
  order: 14,
  domainLongDescriptions: ['Mouvement et interactions'],
  questions: [
    createQuestion(
      1,
      'EASY',
      'Quelle expression donne le débit volumique $D_v$ lorsqu’un volume $V$ de fluide traverse une section pendant une durée $\\Delta t$ ?',
      [
        '$D_v = \\dfrac{V}{\\Delta t}$',
        '$D_v = V\\Delta t$',
        '$D_v = \\dfrac{\\Delta t}{V}$',
        '$D_v = \\rho V$',
      ],
      0,
      'Par définition, le débit volumique est le volume écoulé par unité de temps : $D_v = \\dfrac{V}{\\Delta t}$. Son unité SI est le $\\mathrm{m^3.s^{-1}}$.',
    ),
    createQuestion(
      2,
      'MEDIUM',
      'Dans une conduite de section $S$ où la vitesse moyenne du fluide vaut $v$, quelle relation relie $D_v$, $S$ et $v$ ?',
      [
        '$D_v = Sv$',
        '$D_v = S + v$',
        '$D_v = \\dfrac{S}{v}$',
        '$D_v = \\rho Sv$',
      ],
      0,
      'Pendant une seconde, le fluide balaie un cylindre de base $S$ et de longueur $v$. Le volume écoulé par seconde vaut donc $Sv$, soit $D_v = Sv$.',
    ),
    createQuestion(
      3,
      'EASY',
      'Pour un fluide incompressible en régime permanent entre deux points 1 et 2 d’une conduite, quelle relation traduit la conservation du débit volumique ?',
      [
        '$S_1v_1 = S_2v_2$',
        '$S_1 + v_1 = S_2 + v_2$',
        '$\\dfrac{S_1}{v_1} = \\dfrac{S_2}{v_2}$',
        '$v_1 = v_2$ quelle que soit la section',
      ],
      0,
      'En écoulement permanent d’un fluide incompressible, le même volume traverse chaque section pendant la même durée. On obtient donc $S_1v_1 = S_2v_2$.',
    ),
    createQuestion(
      4,
      'MEDIUM',
      'Une conduite horizontale passe de $S_1 = 4{,}0\\,\\mathrm{cm^2}$ à $S_2 = 2{,}0\\,\\mathrm{cm^2}$. Si $v_1 = 1{,}5\\,\\mathrm{m.s^{-1}}$, quelle est la vitesse $v_2$ ?',
      ['0,75 m.s$^{-1}$', '1,5 m.s$^{-1}$', '3,0 m.s$^{-1}$', '6,0 m.s$^{-1}$'],
      2,
      'La continuité donne $S_1v_1 = S_2v_2$, donc $v_2 = \\dfrac{S_1}{S_2}v_1 = 2 \\times 1{,}5 = 3{,}0\\,\\mathrm{m.s^{-1}}$.',
    ),
    createQuestion(
      5,
      'EASY',
      'Pour un fluide incompressible parfait en régime permanent, quelle somme se conserve le long d’une ligne de courant ?',
      [
        '$P + \\rho gz + \\dfrac{1}{2}\\rho v^2$',
        '$P + \\rho gv$',
        '$Pz + \\rho g + v$',
        '$P - \\rho gz - \\dfrac{1}{2}\\rho v^2$',
      ],
      0,
      'La relation de Bernoulli s’écrit $P + \\rho gz + \\dfrac{1}{2}\\rho v^2 = \\text{constante}$ le long d’une ligne de courant, lorsqu’on néglige les pertes.',
    ),
    createQuestion(
      6,
      'MEDIUM',
      'Dans une conduite horizontale, si la vitesse du fluide augmente lors du passage dans un étranglement, que devient la pression statique ?',
      [
        'Elle augmente',
        'Elle diminue',
        'Elle reste forcément constante',
        'Elle devient nulle',
      ],
      1,
      'À altitude identique, Bernoulli impose une compensation entre pression et énergie cinétique. Si $v$ augmente, la pression statique diminue.',
    ),
    createQuestion(
      7,
      'HARD',
      'Entre deux points $A$ et $B$ d’une conduite horizontale, on a $\\rho = 1{,}0\\times10^3\\,\\mathrm{kg.m^{-3}}$, $v_A = 2{,}0\\,\\mathrm{m.s^{-1}}$ et $v_B = 4{,}0\\,\\mathrm{m.s^{-1}}$. En négligeant les pertes, quelle valeur obtient-on pour $P_A - P_B$ ?',
      ['2,0 kPa', '6,0 kPa', '12,0 kPa', '24,0 kPa'],
      1,
      'Dans une conduite horizontale, $P_A + \\dfrac{1}{2}\\rho v_A^2 = P_B + \\dfrac{1}{2}\\rho v_B^2$. Donc $P_A - P_B = \\dfrac{1}{2}\\rho (v_B^2 - v_A^2) = 0{,}5 \\times 1000 \\times (16 - 4) = 6000\\,\\mathrm{Pa}$, soit $6{,}0\\,\\mathrm{kPa}$.',
    ),
    createQuestion(
      8,
      'EASY',
      'Pour un liquide s’échappant par un petit orifice situé à une profondeur $h$ sous la surface libre d’un grand réservoir, quelle expression approchée donne la vitesse de sortie ?',
      [
        '$v = \\sqrt{2gh}$',
        '$v = gh$',
        '$v = \\dfrac{h}{g}$',
        '$v = \\sqrt{gh/2}$',
      ],
      0,
      'En appliquant Bernoulli entre la surface libre et l’orifice, on retrouve la loi de Torricelli : $v = \\sqrt{2gh}$.',
    ),
    createQuestion(
      9,
      'MEDIUM',
      'Deux orifices sont percés sur la paroi d’un même réservoir, l’un à $10\\,\\mathrm{cm}$ sous la surface et l’autre à $40\\,\\mathrm{cm}$. Quel jet sort le plus vite ?',
      [
        'Celui de l’orifice à 10 cm',
        'Celui de l’orifice à 40 cm',
        'Les deux jets ont la même vitesse',
        'On ne peut pas conclure sans connaître la masse volumique',
      ],
      1,
      'La loi de Torricelli donne $v = \\sqrt{2gh}$. La vitesse augmente donc avec la profondeur $h$ : l’orifice le plus bas produit le jet le plus rapide.',
    ),
    createQuestion(
      10,
      'MEDIUM',
      'On veut transporter un débit volumique $D_v = 6{,}0\\times10^{-4}\\,\\mathrm{m^3.s^{-1}}$ avec une vitesse moyenne $v = 2{,}0\\,\\mathrm{m.s^{-1}}$. Quelle section de conduite faut-il choisir ?',
      [
        '$1{,}2\\times10^{-3}\\,\\mathrm{m^2}$',
        '$3{,}0\\times10^{-4}\\,\\mathrm{m^2}$',
        '$1{,}2\\times10^{-4}\\,\\mathrm{m^2}$',
        '$3{,}0\\times10^{-6}\\,\\mathrm{m^2}$',
      ],
      1,
      'On utilise $D_v = Sv$, donc $S = \\dfrac{D_v}{v} = \\dfrac{6{,}0\\times10^{-4}}{2{,}0} = 3{,}0\\times10^{-4}\\,\\mathrm{m^2}$.',
    ),
    createQuestion(
      11,
      'EASY',
      'Dans un tube de Venturi horizontal muni de deux prises de pression, où la pression statique est-elle la plus faible ?',
      [
        'Dans la partie la plus large du tube',
        'Au col, là où la section est minimale',
        'Elle est identique partout',
        'Uniquement à l’entrée du tube',
      ],
      1,
      'Au col du Venturi, la section est plus petite, donc la vitesse est plus grande. À altitude identique, Bernoulli impose alors une pression plus faible.',
    ),
    createQuestion(
      12,
      'HARD',
      'Dans une conduite de même section, deux points $A$ et $B$ vérifient $z_B > z_A$. Si la vitesse est la même aux deux points et si l’on néglige les pertes, quelle affirmation est correcte ?',
      [
        '$P_A > P_B$',
        '$P_A = P_B$',
        '$P_A < P_B$',
        'La comparaison est impossible sans connaître le débit',
      ],
      0,
      'Si la vitesse est la même, les termes cinétiques se compensent dans Bernoulli. Comme $z_B > z_A$, il faut alors que la pression diminue quand l’altitude augmente : $P_A > P_B$.',
    ),
  ],
  sections: [
    {
      title: 'Débit volumique',
      description:
        'Définir le débit volumique et relier le volume écoulé à la vitesse moyenne dans une conduite.',
      order: 1,
      quizzes: [
        createSingleQuestionQuiz({
          title: 'Définition du débit volumique',
          slug: 'definition-du-debit-volumique',
          description:
            'Retrouver l’expression du débit volumique à partir d’un volume écoulé pendant une durée donnée.',
          order: 1,
          stage: 'DISCOVER',
          questionOrder: 1,
        }),
        createSingleQuestionQuiz({
          title: 'Débit, section et vitesse',
          slug: 'debit-section-et-vitesse',
          description:
            'Relier le débit volumique à la section de la conduite et à la vitesse moyenne du fluide.',
          order: 2,
          stage: 'PRACTICE',
          questionOrder: 2,
        }),
      ],
    },
    {
      title: 'Continuité de l’écoulement',
      description:
        'Exploiter la conservation du débit volumique pour un fluide incompressible en régime permanent.',
      order: 2,
      quizzes: [
        createSingleQuestionQuiz({
          title: 'Conservation du débit',
          slug: 'conservation-du-debit',
          description:
            'Identifier la relation de continuité entre deux sections d’une même conduite.',
          order: 1,
          stage: 'DISCOVER',
          questionOrder: 3,
        }),
        createSingleQuestionQuiz({
          title: 'Effet d’un rétrécissement',
          slug: 'effet-d-un-retrecissement',
          description:
            'Calculer la vitesse du fluide lorsqu’une conduite se rétrécit.',
          order: 2,
          stage: 'PRACTICE',
          questionOrder: 4,
        }),
      ],
    },
    {
      title: 'Bernoulli et pression',
      description:
        'Relier vitesse, pression et altitude dans un écoulement idéal en régime permanent.',
      order: 3,
      quizzes: [
        createSingleQuestionQuiz({
          title: 'Relation de Bernoulli',
          slug: 'relation-de-bernoulli',
          description:
            'Reconnaître la grandeur conservée le long d’une ligne de courant.',
          order: 1,
          stage: 'DISCOVER',
          questionOrder: 5,
        }),
        createSingleQuestionQuiz({
          title: 'Lire une baisse de pression',
          slug: 'lire-une-baisse-de-pression',
          description:
            'Interpréter qualitativement l’effet d’un étranglement sur la pression.',
          order: 2,
          stage: 'PRACTICE',
          questionOrder: 6,
        }),
        createSingleQuestionQuiz({
          title: 'Calculer un écart de pression',
          slug: 'calculer-un-ecart-de-pression',
          description:
            'Quantifier la différence de pression entre deux points d’une conduite horizontale.',
          order: 3,
          stage: 'MASTER',
          questionOrder: 7,
        }),
      ],
    },
    {
      title: 'Jets et réservoirs',
      description:
        'Exploiter la loi de Torricelli pour comparer des vitesses de sortie à partir d’un réservoir.',
      order: 4,
      quizzes: [
        createSingleQuestionQuiz({
          title: 'Vitesse de sortie d’un réservoir',
          slug: 'vitesse-de-sortie-d-un-reservoir',
          description:
            'Retrouver l’expression de la vitesse d’efflux à partir de la profondeur sous la surface libre.',
          order: 1,
          stage: 'DISCOVER',
          questionOrder: 8,
        }),
        createSingleQuestionQuiz({
          title: 'Comparer deux orifices',
          slug: 'comparer-deux-orifices',
          description:
            'Comparer qualitativement la vitesse de deux jets issus d’un même réservoir.',
          order: 2,
          stage: 'PRACTICE',
          questionOrder: 9,
        }),
      ],
    },
    {
      title: 'Synthèse du chapitre',
      description:
        'Réinvestir les relations de débit et de Bernoulli dans des situations transversales de fin de chapitre.',
      order: 5,
      kind: 'SYNTHESIS',
      quizzes: [
        createSingleQuestionQuiz({
          title: 'Choisir la bonne section',
          slug: 'choisir-la-bonne-section',
          description:
            'Déterminer la section d’une conduite à partir du débit imposé et de la vitesse souhaitée.',
          order: 1,
          stage: 'DISCOVER',
          questionOrder: 10,
        }),
        createSingleQuestionQuiz({
          title: 'Interpréter un Venturi',
          slug: 'interpreter-un-venturi',
          description:
            'Identifier la zone de basse pression dans un Venturi horizontal.',
          order: 2,
          stage: 'PRACTICE',
          questionOrder: 11,
        }),
        createSingleQuestionQuiz({
          title: 'Conduite inclinée sans pertes',
          slug: 'conduite-inclinee-sans-pertes',
          description:
            'Conclure sur l’évolution de la pression entre deux points de même vitesse mais d’altitudes différentes.',
          order: 3,
          stage: 'MASTER',
          questionOrder: 12,
        }),
      ],
    },
  ],
};