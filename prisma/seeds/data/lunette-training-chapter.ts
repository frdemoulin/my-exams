import type { ChapterSectionKind, QuizDifficulty } from '@prisma/client';

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

export type TrainingChapterSeed = {
  title: string;
  slug: string;
  order: number;
  domainLongDescriptions: string[];
  questions: SeedQuizQuestion[];
  sections?: SeedChapterSection[];
};

export const lunetteTrainingChapter: TrainingChapterSeed = {
  title: "Formation d'images par une lunette astronomique",
  slug: 'formation-d-images-par-une-lunette-astronomique',
  order: 19,
  domainLongDescriptions: ['Ondes et signaux'],
  questions: [
    {
      difficulty: 'HARD',
      order: 1,
      question:
        'Pour une lunette astronomique afocale, quelle expression donne le grossissement angulaire en valeur absolue ?',
      choices: [
        '$G = \\dfrac{f_{objectif}}{f_{oculaire}}$',
        '$G = f_{objectif} + f_{oculaire}$',
        '$G = \\dfrac{1}{f_{objectif}f_{oculaire}}$',
        '$G = \\dfrac{f_{oculaire}}{f_{objectif}}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour une lunette afocale, le grossissement angulaire vaut en valeur absolue $G = f_{objectif}/f_{oculaire}$.',
    },
    {
      difficulty: 'EASY',
      order: 2,
      question:
        'Une lunette astronomique afocale possède un objectif de distance focale $f_{objectif}=900\\,\\mathrm{mm}$ et un oculaire de distance focale $f_{oculaire}=30\\,\\mathrm{mm}$. Quelle est la valeur absolue du grossissement angulaire ?',
      choices: ['30', '15', '300', '$0{,}033$'],
      correctChoiceIndex: 0,
      explanation:
        'On applique $G = \\dfrac{f_{objectif}}{f_{oculaire}} = \\dfrac{900}{30} = 30$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 3,
      question:
        'Dans une lunette astronomique afocale de Kepler, quelle relation lie la distance entre l’objectif et l’oculaire à leurs distances focales ?',
      choices: [
        '$d = f_{objectif} + f_{oculaire}$',
        '$d = f_{objectif} - f_{oculaire}$',
        '$d = \\dfrac{f_{objectif}}{f_{oculaire}}$',
        '$d = 2f_{objectif}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour obtenir une lunette afocale, le foyer image de l’objectif doit coïncider avec le foyer objet de l’oculaire. La distance entre les deux lentilles vaut donc $f_{objectif} + f_{oculaire}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 4,
      question:
        'Quel est le rôle principal de l’objectif dans une lunette astronomique dirigée vers un objet très éloigné ?',
      choices: [
        'Former une image réelle intermédiaire dans son plan focal image',
        'Redresser l’image finale observée',
        'Augmenter la luminosité en modifiant la fréquence de la lumière',
        'Permettre seul l’observation sans accommodation',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour un objet situé à l’infini, l’objectif reçoit un faisceau quasi parallèle et forme une image réelle intermédiaire dans son plan focal image. Cette image est ensuite observée à travers l’oculaire.',
    },
    {
      difficulty: 'HARD',
      order: 5,
      question:
        'Dans les conditions normales d’utilisation d’une lunette astronomique afocale, où se situe l’image finale donnée par l’oculaire ?',
      choices: [
        'À l’infini',
        'Au foyer image de l’objectif',
        'Entre l’objectif et l’oculaire',
        'Sur la rétine de l’observateur',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une lunette afocale est réglée pour que l’image intermédiaire soit placée au foyer objet de l’oculaire. Les rayons ressortent alors parallèles et l’image finale est située à l’infini, ce qui permet une observation sans accommodation.',
    },
    {
      difficulty: 'EASY',
      order: 6,
      question:
        'Observe le schéma suivant.\n![Comparaison entre une lentille A et une lentille B](/uploads/training/lunette-lentilles-a-b.svg)\nQuelle lentille est convergente ?',
      choices: ['La lentille A', 'La lentille B', 'Les deux lentilles', 'Aucune des deux'],
      correctChoiceIndex: 0,
      explanation:
        'Dans l’air, la lentille A est convergente : elle est plus épaisse au centre qu’aux bords. Une lentille convergente fait converger un faisceau incident parallèle vers son foyer image.',
    },
    {
      difficulty: 'MEDIUM',
      order: 7,
      question:
        'Un objet réel est placé au-delà de la distance focale d’une lentille convergente. Quelle image peut-on obtenir ?',
      choices: [
        'Une image virtuelle et droite uniquement',
        'Aucune image nette',
        'Une image réelle et renversée',
        'Une image toujours de même taille que l’objet',
      ],
      correctChoiceIndex: 2,
      explanation:
        'Si l’objet est placé au-delà du foyer objet d’une lentille convergente, l’image formée peut être réelle et renversée, donc observable sur un écran.',
    },
    {
      difficulty: 'MEDIUM',
      order: 8,
      question: 'Quelle relation exprime le grandissement d’une lentille mince ?',
      choices: [
        '$\\gamma = \\dfrac{AB}{A\'B\'}$',
        '$\\gamma = \\dfrac{A\'B\'}{AB}$',
        '$\\gamma = AB \\times A\'B\'$ ',
        '$\\gamma = \\dfrac{f\'}{AB}$',
      ],
      correctChoiceIndex: 1,
      explanation:
        'Le grandissement algébrique s’écrit $\\gamma = \\dfrac{A\'B\'}{AB}$. Il peut aussi s’exprimer avec les distances orientées par $\\gamma = \\dfrac{OA\'}{OA}$.',
    },
    {
      difficulty: 'HARD',
      order: 9,
      question:
        'Un objet de hauteur $AB = 2{,}0\\,\\mathrm{cm}$ donne une image de hauteur $A\'B\' = -6{,}0\\,\\mathrm{cm}$. Quel est le grandissement ?',
      choices: ['$-3$', '$3$', '$-\\dfrac{1}{3}$', '$\\dfrac{1}{3}$'],
      correctChoiceIndex: 0,
      explanation:
        'On calcule $\\gamma = \\dfrac{A\'B\'}{AB} = \\dfrac{-6{,}0}{2{,}0} = -3$. Le signe négatif traduit une image renversée.',
    },
    {
      difficulty: 'EASY',
      order: 10,
      question:
        'Si une image formée par une lentille convergente est plus grande que l’objet, que peut-on dire de la valeur absolue du grandissement ?',
      choices: ['$|\\gamma| < 1$', '$|\\gamma| = 1$', '$|\\gamma| > 1$', '$|\\gamma| = 0$'],
      correctChoiceIndex: 2,
      explanation:
        'Une image plus grande que l’objet correspond à une valeur absolue du grandissement strictement supérieure à 1.',
    },
    {
      difficulty: 'EASY',
      order: 11,
      question: 'À quoi correspond le diamètre apparent d’un objet observé ?',
      choices: [
        'À sa distance à l’observateur',
        'À l’angle sous lequel il est vu',
        'À son diamètre réel uniquement',
        'À la taille de l’image sur la rétine',
      ],
      correctChoiceIndex: 1,
      explanation:
        'Le diamètre apparent est l’angle sous lequel l’objet est vu par l’observateur. Il dépend à la fois de la taille réelle de l’objet et de sa distance.',
    },
    {
      difficulty: 'MEDIUM',
      order: 12,
      question:
        'Pour de petits angles, quelle approximation relie le diamètre apparent $\\alpha$ d’un objet de diamètre $D$ situé à la distance $d$ ?',
      choices: [
        '$\\alpha \\approx \\dfrac{D}{d}$',
        '$\\alpha \\approx \\dfrac{d}{D}$',
        '$\\alpha \\approx D + d$',
        '$\\alpha \\approx Dd$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour les petits angles exprimés en radians, le diamètre apparent vérifie l’approximation $\\alpha \\approx D/d$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 13,
      question:
        'Un objet garde le même diamètre réel mais s’éloigne de l’observateur. Comment évolue son diamètre apparent ?',
      choices: ['Il augmente', 'Il reste constant', 'Il change de signe', 'Il diminue'],
      correctChoiceIndex: 3,
      explanation:
        'Comme $\\alpha \\approx D/d$ pour les petits angles, si la distance $d$ augmente à diamètre réel constant, le diamètre apparent diminue.',
    },
    {
      difficulty: 'HARD',
      order: 14,
      question:
        'Quel effet principal une lunette astronomique produit-elle sur un astre observé ?',
      choices: [
        'Elle augmente son diamètre réel',
        'Elle augmente l’angle apparent sous lequel l’astre est vu',
        'Elle modifie la fréquence de la lumière reçue',
        'Elle rapproche physiquement l’astre de l’observateur',
      ],
      correctChoiceIndex: 1,
      explanation:
        'Une lunette astronomique n’agit pas sur la taille réelle de l’astre. Elle augmente l’angle apparent sous lequel il est observé, ce qui améliore la perception des détails.',
    },
    {
      difficulty: 'HARD',
      order: 15,
      question:
        'Si un détail est vu à l’œil nu sous l’angle apparent $\\alpha$ et qu’une lunette donne un grossissement angulaire en valeur absolue $G = 20$, sous quel angle apparent est-il vu avec la lunette ?',
      choices: ['$20\\alpha$', '$\\dfrac{\\alpha}{20}$', '$\\alpha + 20$', '$\\dfrac{20}{\\alpha}$'],
      correctChoiceIndex: 0,
      explanation:
        'Par définition du grossissement angulaire, l’angle apparent avec l’instrument vaut en valeur absolue $\\alpha\' = G\\alpha$. Ici, on obtient donc $\\alpha\' = 20\\alpha$.',
    },
    {
      difficulty: 'EASY',
      order: 16,
      question:
        'Une lunette astronomique afocale possède un objectif de distance focale $f_{objectif}=1000\\,\\mathrm{mm}$ et un oculaire de distance focale $f_{oculaire}=50\\,\\mathrm{mm}$. Quelle est la valeur absolue du grossissement angulaire ?',
      choices: ['20', '50', '1000', '$0{,}05$'],
      correctChoiceIndex: 0,
      explanation:
        'On applique $G = \\dfrac{f_{objectif}}{f_{oculaire}} = \\dfrac{1000}{50} = 20$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 17,
      question:
        'Pour augmenter la valeur absolue du grossissement angulaire d’une lunette afocale sans changer l’objectif, quelle modification de l’oculaire est la plus efficace ?',
      choices: [
        'Choisir un oculaire de plus petite distance focale',
        'Choisir un oculaire de plus grande distance focale',
        'Éloigner fortement l’oculaire de l’objectif',
        'Supprimer l’oculaire',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Comme $G = f_{objectif}/f_{oculaire}$, à objectif fixé, diminuer $f_{oculaire}$ augmente la valeur absolue du grossissement.',
    },
    {
      difficulty: 'HARD',
      order: 18,
      question:
        'Une lunette astronomique afocale possède un objectif de distance focale $f_{objectif}=800\\,\\mathrm{mm}$ et doit fournir un grossissement angulaire en valeur absolue $G = 40$. Quelle distance focale faut-il choisir pour l’oculaire ?',
      choices: ['$20\\,\\mathrm{mm}$', '$32\\,\\mathrm{mm}$', '$200\\,\\mathrm{mm}$', '$32000\\,\\mathrm{mm}$'],
      correctChoiceIndex: 0,
      explanation:
        'On utilise $f_{oculaire} = \\dfrac{f_{objectif}}{G} = \\dfrac{800}{40} = 20\\,\\mathrm{mm}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 19,
      question:
        'Dans une lunette afocale correctement réglée, où doit se former l’image intermédiaire créée par l’objectif par rapport à l’oculaire ?',
      choices: [
        'Au foyer objet de l’oculaire',
        'Au centre optique de l’oculaire',
        'Sur la rétine de l’observateur',
        'À l’infini derrière l’oculaire',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour que la lunette soit afocale, l’image intermédiaire donnée par l’objectif doit être placée au foyer objet de l’oculaire afin que les rayons ressortent parallèles.',
    },
    {
      difficulty: 'HARD',
      order: 20,
      question:
        'Une lunette de Kepler afocale possède un objectif de distance focale $1{,}20\\,\\mathrm{m}$ et un oculaire de distance focale $30\\,\\mathrm{mm}$. Quelle doit être la distance entre les deux lentilles ?',
      choices: ['$1{,}23\\,\\mathrm{m}$', '$1{,}17\\,\\mathrm{m}$', '$0{,}90\\,\\mathrm{m}$', '$40\\,\\mathrm{m}$'],
      correctChoiceIndex: 0,
      explanation:
        'Pour une lunette afocale, la distance entre l’objectif et l’oculaire vaut $f_{objectif} + f_{oculaire} = 1{,}20 + 0{,}03 = 1{,}23\\,\\mathrm{m}$.',
    },
    {
      difficulty: 'EASY',
      order: 21,
      question:
        'Si le grandissement d’une lentille convergente est négatif, que peut-on conclure sur l’image ?',
      choices: [
        'Elle est renversée',
        'Elle est forcément virtuelle',
        'Elle a la même taille que l’objet',
        'Elle est invisible',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le signe négatif du grandissement indique que l’image est renversée par rapport à l’objet.',
    },
    {
      difficulty: 'MEDIUM',
      order: 22,
      question:
        'Un objet de hauteur $AB = 4{,}0\\,\\mathrm{cm}$ donne une image avec un grandissement $\\gamma = 0{,}5$. Quelle est la hauteur de l’image ?',
      choices: ['$2{,}0\\,\\mathrm{cm}$', '$4{,}0\\,\\mathrm{cm}$', '$8{,}0\\,\\mathrm{cm}$', '$-2{,}0\\,\\mathrm{cm}$'],
      correctChoiceIndex: 0,
      explanation:
        'On utilise $A\'B\' = \\gamma \\times AB = 0{,}5 \\times 4{,}0 = 2{,}0\\,\\mathrm{cm}$.',
    },
    {
      difficulty: 'HARD',
      order: 23,
      question:
        'Un objet de hauteur $AB = 4{,}0\\,\\mathrm{cm}$ donne une image de hauteur $A\'B\' = -2{,}0\\,\\mathrm{cm}$. Quelle est la valeur du grandissement ?',
      choices: ['$-0{,}5$', '$0{,}5$', '$-2$', '$2$'],
      correctChoiceIndex: 0,
      explanation:
        'Le grandissement vaut $\\gamma = \\dfrac{A\'B\'}{AB} = \\dfrac{-2{,}0}{4{,}0} = -0{,}5$. Le signe négatif traduit l’inversion de l’image.',
    },
    {
      difficulty: 'MEDIUM',
      order: 24,
      question:
        'Quelle propriété permet d’identifier directement une image pouvant être projetée sur un écran ?',
      choices: [
        'Elle est réelle',
        'Elle est droite',
        'Elle est virtuelle',
        'Elle a un grandissement positif',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Seule une image réelle peut être recueillie sur un écran. Une image virtuelle ne peut pas être projetée directement.',
    },
    {
      difficulty: 'HARD',
      order: 25,
      question:
        'Lorsqu’un objet est placé entre une lentille convergente et son foyer objet, quelle est la nature de l’image formée ?',
      choices: [
        'Virtuelle, droite et agrandie',
        'Réelle, renversée et agrandie',
        'Réelle, droite et réduite',
        'Virtuelle, renversée et réduite',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Si l’objet est situé entre le centre optique et le foyer objet d’une lentille convergente, l’image est virtuelle, droite et agrandie.',
    },
    {
      difficulty: 'EASY',
      order: 26,
      question:
        'Un objet conserve le même diamètre réel mais sa distance à l’observateur double. Comment évolue son diamètre apparent ?',
      choices: [
        'Il est divisé par deux',
        'Il double',
        'Il reste inchangé',
        'Il est multiplié par quatre',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Comme $\\alpha \\approx D/d$ pour les petits angles, si la distance double à diamètre constant, le diamètre apparent est divisé par deux.',
    },
    {
      difficulty: 'MEDIUM',
      order: 27,
      question:
        'Pour un objet de diamètre $D = 2{,}0\\,\\mathrm{m}$ situé à la distance $d = 1{,}0\\,\\mathrm{km}$, quelle est la valeur approchée du diamètre apparent en radians ?',
      choices: ['$2{,}0 \\times 10^{-3}$', '$5{,}0 \\times 10^{2}$', '$2{,}0 \\times 10^{-6}$', '$5{,}0 \\times 10^{-4}$'],
      correctChoiceIndex: 0,
      explanation:
        'On utilise $\\alpha \\approx D/d = 2{,}0 / 1000 = 2{,}0 \\times 10^{-3}\\,\\mathrm{rad}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 28,
      question:
        'Une lunette astronomique fournit un grossissement angulaire en valeur absolue $G = 12$. Comment évolue l’angle apparent sous lequel un détail est vu ?',
      choices: [
        'Il est multiplié par 12',
        'Il est divisé par 12',
        'Il reste inchangé',
        'Il augmente de 12 radians',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Par définition, le grossissement angulaire multiplie l’angle apparent en valeur absolue par $G$. Ici, il est donc multiplié par 12.',
    },
    {
      difficulty: 'HARD',
      order: 29,
      question:
        'Deux objets sont vus sous le même diamètre apparent. Si le second a un diamètre réel deux fois plus grand que le premier, que peut-on conclure sur sa distance ?',
      choices: [
        'Il est deux fois plus éloigné',
        'Il est deux fois plus proche',
        'Il est quatre fois plus éloigné',
        'On ne peut rien conclure',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Avec l’approximation $\\alpha \\approx D/d$, si $\\alpha$ reste constant et que $D$ est multiplié par 2, alors $d$ doit aussi être multipliée par 2.',
    },
    {
      difficulty: 'HARD',
      order: 30,
      question:
        'Un détail est vu avec une lunette sous l’angle apparent $0{,}060\\,\\mathrm{rad}$, la lunette ayant un grossissement angulaire en valeur absolue $G = 15$. Sous quel angle apparent était-il vu à l’œil nu ?',
      choices: ['$0{,}004\\,\\mathrm{rad}$', '$0{,}90\\,\\mathrm{rad}$', '$0{,}015\\,\\mathrm{rad}$', '$0{,}75\\,\\mathrm{rad}$'],
      correctChoiceIndex: 0,
      explanation:
        'On a $\\alpha\' = G\\alpha$, donc $\\alpha = \\dfrac{\\alpha\'}{G} = \\dfrac{0{,}060}{15} = 0{,}004\\,\\mathrm{rad}$.',
    },
  ],
  sections: [
    {
      title: 'Fonctionnement d’une lunette afocale',
      description:
        'Grossissement angulaire, réglage afocal, rôle de l’objectif et de l’oculaire.',
      order: 1,
      quizzes: [
        {
          title: 'Grossissement d’une lunette afocale',
          slug: 'grossissement-lunette-afocale',
          description:
            'Calculer le grossissement et relier les distances focales de l’objectif et de l’oculaire.',
          order: 1,
          questionOrders: [1, 2, 3, 4, 5],
        },
        {
          title: 'Réglage afocal et rôle des lentilles',
          slug: 'reglage-afocal-et-role-des-lentilles',
          description:
            'Comprendre la formation de l’image intermédiaire, le réglage afocal et la position de l’image finale.',
          order: 2,
          questionOrders: [16, 17, 18, 19, 20],
        },
      ],
    },
    {
      title: 'Lentilles convergentes et grandissement',
      description:
        'Formation d’image, nature de l’image et lecture du grandissement algébrique.',
      order: 2,
      quizzes: [
        {
          title: 'Reconnaître une lentille convergente',
          slug: 'reconnaitre-lentille-convergente',
          description:
            'Identifier une lentille convergente et prévoir la nature de l’image formée.',
          order: 1,
          questionOrders: [6, 7, 8, 9, 10],
        },
        {
          title: 'Grandissement et taille de l’image',
          slug: 'grandissement-et-taille-image',
          description:
            'Exploiter la relation de grandissement et interpréter la taille de l’image formée.',
          order: 2,
          questionOrders: [21, 22, 23, 24, 25],
        },
      ],
    },
    {
      title: 'Angle apparent et diamètre apparent',
      description:
        'Approximation des petits angles et effet réel de la lunette sur l’observation.',
      order: 3,
      quizzes: [
        {
          title: 'Diamètre apparent',
          slug: 'diametre-apparent',
          description:
            'Relier taille, distance et diamètre apparent dans l’approximation des petits angles.',
          order: 1,
          questionOrders: [11, 12, 13, 14, 15],
        },
        {
          title: 'Effet de la lunette sur l’observation',
          slug: 'effet-lunette-observation',
          description:
            'Analyser comment une lunette modifie l’angle apparent et améliore la perception des détails.',
          order: 2,
          questionOrders: [26, 27, 28, 29, 30],
        },
      ],
    },
    {
      title: 'Synthèse du chapitre',
      description: 'Révision transversale des notions clés du chapitre.',
      order: 4,
      kind: 'SYNTHESIS',
      quizzes: [
        {
          title: 'QCM de synthèse - notions fondamentales',
          slug: 'qcm-de-synthese-notions-fondamentales',
          description:
            'Révision transversale des définitions et relations essentielles du chapitre.',
          order: 1,
          questionOrders: [2, 6, 11, 17, 26],
        },
        {
          title: 'QCM de synthèse - calculs et interprétation',
          slug: 'qcm-de-synthese-calculs-et-interpretation',
          description:
            'Réinvestir les calculs et interprétations physiques autour de la lunette astronomique.',
          order: 2,
          items: [
            {
              type: 'QUESTION',
              questionOrder: 3,
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Observation à la lunette',
              sharedStatement:
                'On étudie une série de raisonnements autour d’une lunette astronomique de Kepler utilisée en réglage afocal pour observer un astre très éloigné. Les questions suivantes mobilisent le grossissement angulaire et son effet sur l’angle apparent perçu.',
              questionOrders: [18, 28, 30],
            },
            {
              type: 'QUESTION',
              questionOrder: 9,
            },
          ],
        },
      ],
    },
  ],
};