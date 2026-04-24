import type { ChapterSectionKind, QuizDifficulty, TrainingQuizStage } from '@prisma/client';

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
        'Observe la construction de rayons suivante.\n![Rayons remarquables d une lentille convergente](/uploads/training/lentille-convergente-rayons-remarquables.svg)\nUn objet réel est placé au-delà de la distance focale d’une lentille convergente. Quelle image obtient-on dans ce cas ?',
      choices: [
        'Une image virtuelle et droite uniquement',
        'Aucune image nette',
        'Une image réelle et renversée',
        'Une image toujours de même taille que l’objet',
      ],
      correctChoiceIndex: 2,
      explanation:
        'Sur le schéma, les trois rayons remarquables issus du point $B$ se coupent en $B\'$, sous l’axe optique. L’image obtenue est donc réelle et renversée, et elle peut être recueillie sur un écran.',
    },
    {
      difficulty: 'MEDIUM',
      order: 8,
      question: 'Quelle relation exprime le grandissement d’une lentille mince ?',
      choices: [
        '$\\gamma = \\dfrac{\\overline{AB}}{\\overline{A^{\\prime}B^{\\prime}}}$',
        '$\\gamma = \\dfrac{\\overline{A^{\\prime}B^{\\prime}}}{\\overline{AB}}$',
        '$\\gamma = \\overline{AB} \\times \\overline{A^{\\prime}B^{\\prime}}$ ',
        '$\\gamma = \\dfrac{f\'}{\\overline{AB}}$',
      ],
      correctChoiceIndex: 1,
      explanation:
        'Le grandissement algébrique s’écrit $\\gamma = \\dfrac{\\overline{A^{\\prime}B^{\\prime}}}{\\overline{AB}}$. Il peut aussi s’exprimer avec les distances algébriques par $\\gamma = \\dfrac{\\overline{OA^{\\prime}}}{\\overline{OA}}$.',
    },
    {
      difficulty: 'HARD',
      order: 9,
      question:
        'Un objet de hauteur $\\overline{AB} = 2{,}0\\,\\mathrm{cm}$ donne une image de hauteur $\\overline{A^{\\prime}B^{\\prime}} = -6{,}0\\,\\mathrm{cm}$. Quel est le grandissement ?',
      choices: ['$-3$', '$3$', '$-\\dfrac{1}{3}$', '$\\dfrac{1}{3}$'],
      correctChoiceIndex: 0,
      explanation:
        'On calcule $\\gamma = \\dfrac{\\overline{A^{\\prime}B^{\\prime}}}{\\overline{AB}} = \\dfrac{-6{,}0}{2{,}0} = -3$. Le signe négatif traduit une image renversée.',
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
        'Un objet de hauteur $\\overline{AB} = 4{,}0\\,\\mathrm{cm}$ donne une image avec un grandissement $\\gamma = 0{,}5$. Quelle est la hauteur de l’image ?',
      choices: ['$2{,}0\\,\\mathrm{cm}$', '$4{,}0\\,\\mathrm{cm}$', '$8{,}0\\,\\mathrm{cm}$', '$-2{,}0\\,\\mathrm{cm}$'],
      correctChoiceIndex: 0,
      explanation:
        'On utilise $\\overline{A^{\\prime}B^{\\prime}} = \\gamma \\times \\overline{AB} = 0{,}5 \\times 4{,}0 = 2{,}0\\,\\mathrm{cm}$.',
    },
    {
      difficulty: 'HARD',
      order: 23,
      question:
        'Un objet de hauteur $\\overline{AB} = 4{,}0\\,\\mathrm{cm}$ donne une image de hauteur $\\overline{A^{\\prime}B^{\\prime}} = -2{,}0\\,\\mathrm{cm}$. Quelle est la valeur du grandissement ?',
      choices: ['$-0{,}5$', '$0{,}5$', '$-2$', '$2$'],
      correctChoiceIndex: 0,
      explanation:
        'Le grandissement vaut $\\gamma = \\dfrac{\\overline{A^{\\prime}B^{\\prime}}}{\\overline{AB}} = \\dfrac{-2{,}0}{4{,}0} = -0{,}5$. Le signe négatif traduit l’inversion de l’image.',
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
    {
      difficulty: 'MEDIUM',
      order: 31,
      question:
        'Première étape : une lunette de Kepler afocale possède un objectif de distance focale $f_{objectif}=1{,}20\\,\\mathrm{m}$ et un oculaire de distance focale $f_{oculaire}=25\\,\\mathrm{mm}$. Quelle est la valeur absolue de son grossissement angulaire ?',
      choices: ['48', '25', '30', '$0{,}048$'],
      correctChoiceIndex: 0,
      explanation:
        'On convertit d’abord $1{,}20\\,\\mathrm{m}$ en $1200\\,\\mathrm{mm}$, puis on applique $G = \\dfrac{f_{objectif}}{f_{oculaire}} = \\dfrac{1200}{25} = 48$.',
    },
    {
      difficulty: 'HARD',
      order: 32,
      question:
        'Deuxième étape : avec cette même lunette, un détail lunaire est vu à l’œil nu sous l’angle apparent $\\alpha = 2{,}5 \\times 10^{-4}\\,\\mathrm{rad}$. Sous quel angle apparent est-il vu avec la lunette ?',
      choices: [
        '$1{,}2 \\times 10^{-2}\\,\\mathrm{rad}$',
        '$6{,}0 \\times 10^{-3}\\,\\mathrm{rad}$',
        '$4{,}8 \\times 10^{-4}\\,\\mathrm{rad}$',
        '$1{,}2 \\times 10^{-4}\\,\\mathrm{rad}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'On utilise $\\alpha^{\\prime} = G\\alpha = 48 \\times 2{,}5 \\times 10^{-4} = 1{,}2 \\times 10^{-2}\\,\\mathrm{rad}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 33,
      question:
        'Troisième étape : d’après le schéma de construction des rayons, quelle doit être la distance entre l’objectif et l’oculaire pour conserver le réglage afocal ?',
      choices: ['$1{,}225\\,\\mathrm{m}$', '$1{,}175\\,\\mathrm{m}$', '$1{,}20\\,\\mathrm{m}$', '$0{,}025\\,\\mathrm{m}$'],
      correctChoiceIndex: 0,
      explanation:
        'Pour une lunette afocale, la distance entre les deux lentilles vaut $f_{objectif} + f_{oculaire} = 1{,}20 + 0{,}025 = 1{,}225\\,\\mathrm{m}$.',
    },
    {
      difficulty: 'HARD',
      order: 34,
      question:
        'Quatrième étape : si l’on ne prend plus la valeur absolue du grossissement angulaire d’une lunette de Kepler, quel signe obtient-on ?',
      choices: [
        'Négatif, car l’image finale est renversée',
        'Positif, car l’image finale est à l’infini',
        'Nul, car l’objet est très éloigné',
        'Le signe dépend uniquement du diamètre de l’objectif',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une lunette de Kepler renverse l’image finale par rapport à l’objet. Si l’on conserve le signe dans la définition, le grossissement angulaire est donc négatif.',
    },
    {
      difficulty: 'MEDIUM',
      order: 35,
      question:
        'Cinquième étape : sur le schéma, pourquoi règle-t-on la lunette pour que l’image intermédiaire se forme au foyer objet de l’oculaire ?',
      choices: [
        'Pour que les rayons ressortent parallèles et que l’œil observe sans accommodation',
        'Pour rendre l’image intermédiaire plus lumineuse',
        'Pour redresser l’image finale',
        'Pour supprimer le rôle de l’objectif',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Lorsque l’image intermédiaire est placée au foyer objet de l’oculaire, les rayons émergents sont parallèles. L’image finale est alors à l’infini, ce qui permet une observation sans accommodation.',
    },
    {
      difficulty: 'MEDIUM',
      order: 36,
      question:
        'Première étape : en lisant d’abord le schéma d’une lentille convergente puis celui de l’objectif seul, quelle est la nature de l’image intermédiaire formée par l’objectif ?',
      choices: [
        'Réelle et renversée',
        'Virtuelle et droite',
        'Réelle et droite',
        'Virtuelle et renversée',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour un objet situé à l’infini, l’objectif convergent forme dans son plan focal image une image réelle et renversée, qui sert ensuite d’objet pour l’oculaire.',
    },
    {
      difficulty: 'EASY',
      order: 37,
      question:
        'Deuxième étape : pourquoi l’image intermédiaire formée par l’objectif seul peut-elle être projetée sur un écran ?',
      choices: [
        'Parce qu’elle est réelle',
        'Parce qu’elle est à l’infini',
        'Parce qu’elle est toujours droite',
        'Parce qu’elle n’est pas formée par une lentille',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une image ne peut être recueillie sur un écran que si elle est réelle. C’est précisément le cas de l’image intermédiaire produite par l’objectif d’une lunette de Kepler.',
    },
    {
      difficulty: 'MEDIUM',
      order: 38,
      question:
        'Troisième étape : dans le schéma complet de la lunette, quel rôle joue l’oculaire dans une lunette astronomique de Kepler ?',
      choices: [
        'Il agit comme une loupe qui permet d’observer l’image intermédiaire',
        'Il forme à lui seul l’image réelle intermédiaire',
        'Il modifie la fréquence de la lumière reçue',
        'Il annule le renversement créé par l’objectif',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’oculaire joue le rôle d’une loupe : il permet à l’œil d’observer sous un angle plus grand l’image intermédiaire formée par l’objectif.',
    },
    {
      difficulty: 'HARD',
      order: 39,
      question:
        'Quatrième étape : dans l’expression $G = \\left|\\dfrac{\\alpha^{\\prime}}{\\alpha}\\right|$, pourquoi prend-on souvent la valeur absolue dans les exercices de lycée ?',
      choices: [
        'Parce qu’on veut surtout comparer l’agrandissement de l’angle apparent, indépendamment du renversement',
        'Parce que le signe du grossissement n’existe jamais pour une lunette',
        'Parce que l’oculaire rend toujours le grossissement positif',
        'Parce que la valeur absolue permet de retrouver le diamètre réel de l’objet',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Dans beaucoup d’exercices, on s’intéresse surtout au facteur d’agrandissement de l’angle apparent. La valeur absolue permet donc de se concentrer sur la taille apparente, sans discuter du renversement de l’image.',
    },
    {
      difficulty: 'MEDIUM',
      order: 40,
      question:
        'Cinquième étape : si l’on retire l’oculaire d’une lunette de Kepler pointée vers un objet très lointain, que peut-on encore observer au voisinage du foyer image de l’objectif ?',
      choices: [
        'Une image réelle renversée pouvant être recueillie sur un écran',
        'Une image virtuelle droite observable seulement à l’œil',
        'Aucune image nette',
        'Une image finale déjà à l’infini',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Sans l’oculaire, l’objectif continue à former seul une image réelle et renversée dans son plan focal image. Cette image peut donc être observée sur un écran placé au bon endroit.',
    },
    {
      difficulty: 'HARD',
      order: 41,
      question:
        'Première étape : on compare deux lunettes afocales. La lunette A a $f_{objectif}=900\\,\\mathrm{mm}$ et $f_{oculaire}=30\\,\\mathrm{mm}$. La lunette B a $f_{objectif}=1200\\,\\mathrm{mm}$ et $f_{oculaire}=24\\,\\mathrm{mm}$. Quelle lunette donne le plus grand grossissement angulaire en valeur absolue ?',
      choices: [
        'La lunette B',
        'La lunette A',
        'Les deux ont le même grossissement',
        'On ne peut pas comparer sans connaître le diamètre des objectifs',
      ],
      correctChoiceIndex: 0,
      explanation:
        'On calcule $G_A = \\dfrac{900}{30} = 30$ et $G_B = \\dfrac{1200}{24} = 50$. La lunette B grossit donc davantage.',
    },
    {
      difficulty: 'HARD',
      order: 42,
      question:
        'Deuxième étape : un même détail est vu à l’œil nu sous l’angle apparent $\\alpha = 3{,}0 \\times 10^{-4}\\,\\mathrm{rad}$. Avec la lunette B, sous quel angle apparent est-il vu ?',
      choices: [
        '$1{,}5 \\times 10^{-2}\\,\\mathrm{rad}$',
        '$9{,}0 \\times 10^{-3}\\,\\mathrm{rad}$',
        '$6{,}0 \\times 10^{-4}\\,\\mathrm{rad}$',
        '$5{,}0 \\times 10^{-2}\\,\\mathrm{rad}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La lunette B a un grossissement $G_B = 50$, donc $\\alpha^{\\prime} = G_B\\alpha = 50 \\times 3{,}0 \\times 10^{-4} = 1{,}5 \\times 10^{-2}\\,\\mathrm{rad}$.',
      },
      {
      difficulty: 'MEDIUM',
      order: 43,
      question:
          'Troisième étape : avec l’objectif de la lunette A ($f_{objectif}=900\\,\\mathrm{mm}$), quelle distance focale d’oculaire faut-il choisir pour atteindre un grossissement angulaire en valeur absolue $G = 50$ ?',
      choices: ['$18\\,\\mathrm{mm}$', '$30\\,\\mathrm{mm}$', '$45\\,\\mathrm{mm}$', '$50\\,\\mathrm{mm}$'],
      correctChoiceIndex: 0,
      explanation:
        'On isole la distance focale de l’oculaire : $f_{oculaire} = \\dfrac{f_{objectif}}{G} = \\dfrac{900}{50} = 18\\,\\mathrm{mm}$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 44,
      question:
        'Quatrième étape : un objet garde le même diamètre réel, mais sa distance à l’observateur double. À lunette inchangée, comment évolue l’angle apparent final sous lequel il est vu ?',
      choices: [
        'Il est divisé par deux',
        'Il double',
        'Il reste inchangé',
        'Il est multiplié par quatre',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour les petits angles, on a $\\alpha \\approx D/d$. Si la distance double, $\\alpha$ est divisée par deux. Comme $\\alpha^{\\prime} = G\\alpha$ avec la même lunette, l’angle apparent final est lui aussi divisé par deux.',
    },
    {
      difficulty: 'HARD',
      order: 45,
      question:
        'Cinquième étape : pour un même détail observé dans les mêmes conditions, quel est le rapport des angles apparents obtenus avec les lunettes B et A ?',
      choices: ['$\\dfrac{5}{3}$', '$\\dfrac{3}{5}$', '$\\dfrac{5}{2}$', '$\\dfrac{2}{5}$'],
      correctChoiceIndex: 0,
      explanation:
        'Pour un même objet, l’angle apparent final est proportionnel au grossissement. On a donc $\\dfrac{\\alpha^{\\prime}_B}{\\alpha^{\\prime}_A} = \\dfrac{G_B}{G_A} = \\dfrac{50}{30} = \\dfrac{5}{3}$.',
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
          stage: 'DISCOVER',
          questionOrders: [1, 2, 3, 4, 5],
        },
        {
          title: 'Réglage afocal et rôle des lentilles',
          slug: 'reglage-afocal-et-role-des-lentilles',
          description:
            'Comprendre la formation de l’image intermédiaire, le réglage afocal et la position de l’image finale.',
          order: 2,
          stage: 'PRACTICE',
          questionOrders: [16, 17, 18, 19, 20],
        },
        {
          title: 'Cas guidé - Observer un détail lunaire',
          slug: 'cas-guide-observer-detail-lunaire',
          description:
            'QCM guidé pas à pas : calculer le grossissement, lire un schéma afocal, puis interpréter le signe du grossissement dans une lunette de Kepler.',
          order: 3,
          stage: 'MASTER',
          items: [
            {
              type: 'GROUP',
              title: 'Cas d’étude - Observation d’un détail lunaire',
              sharedStatement:
                'Une lunette de Kepler afocale est utilisée pour observer un détail lunaire. Son objectif a une distance focale $f_{objectif}=1{,}20\\,\\mathrm{m}$ et son oculaire une distance focale $f_{oculaire}=25\\,\\mathrm{mm}$. À l’œil nu, le détail est vu sous l’angle apparent $\\alpha = 2{,}5 \\times 10^{-4}\\,\\mathrm{rad}$. On procède par étapes : calcul du grossissement, lecture de l’angle apparent obtenu, condition afocale, puis interprétation du signe et du confort d’observation.\n![Construction des rayons dans une lunette de Kepler afocale](/uploads/training/lunette-construction-rayons-afocale.svg)',
              questionOrders: [31, 32, 33, 34, 35],
            },
          ],
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
            'Identifier une lentille convergente, lire un schéma de rayons remarquables et prévoir la nature de l’image formée.',
          order: 1,
          stage: 'DISCOVER',
          questionOrders: [6, 7, 8, 9, 10],
        },
        {
          title: 'Grandissement et taille de l’image',
          slug: 'grandissement-et-taille-image',
          description:
            'Exploiter la relation de grandissement et interpréter la taille de l’image formée.',
          order: 2,
          stage: 'PRACTICE',
          questionOrders: [21, 22, 23, 24, 25],
        },
        {
          title: 'Chaîne optique d’une lunette de Kepler',
          slug: 'chaine-optique-lunette-de-kepler',
          description:
            'QCM guidé du plus simple au plus complet : lire d’abord le schéma d’une lentille convergente, puis celui de l’objectif seul, avant de conclure sur la lunette complète.',
          order: 3,
          stage: 'MASTER',
          items: [
            {
              type: 'GROUP',
              title: 'Cas d’étude - De l’objectif à l’oculaire',
              sharedStatement:
                'On analyse la chaîne optique d’une lunette de Kepler pointée vers un objet très lointain. On commence par lire le schéma classique d’une lentille convergente seule, puis on retrouve la même logique pour l’objectif de la lunette, avant de terminer par le rôle de l’oculaire dans la lunette complète.\n![Rayons remarquables d une lentille convergente](/uploads/training/lentille-convergente-rayons-remarquables.svg)\n![Construction des rayons par l objectif d une lunette](/uploads/training/lunette-objectif-image-intermediaire.svg)\n![Construction des rayons dans une lunette de Kepler afocale](/uploads/training/lunette-construction-rayons-afocale.svg)',
              questionOrders: [36, 37, 38, 39, 40],
            },
          ],
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
          stage: 'DISCOVER',
          questionOrders: [11, 12, 13, 14, 15],
        },
        {
          title: 'Effet de la lunette sur l’observation',
          slug: 'effet-lunette-observation',
          description:
            'Analyser comment une lunette modifie l’angle apparent et améliore la perception des détails.',
          order: 2,
          stage: 'PRACTICE',
          questionOrders: [26, 27, 28, 29, 30],
        },
        {
          title: 'Comparer deux lunettes astronomiques',
          slug: 'comparer-deux-lunettes-astronomiques',
          description:
            'QCM guidé pas à pas pour comparer deux instruments : grossissements, angle apparent obtenu, choix d’oculaire, puis bilan.',
          order: 3,
          stage: 'MASTER',
          items: [
            {
              type: 'GROUP',
              title: 'Cas d’étude - Choisir entre deux lunettes',
              sharedStatement:
                'On compare deux lunettes astronomiques afocales utilisées pour observer le même détail lointain. La lunette A a $f_{objectif}=900\\,\\mathrm{mm}$ et $f_{oculaire}=30\\,\\mathrm{mm}$. La lunette B a $f_{objectif}=1200\\,\\mathrm{mm}$ et $f_{oculaire}=24\\,\\mathrm{mm}$. À l’œil nu, le détail est vu sous l’angle apparent $\\alpha = 3{,}0 \\times 10^{-4}\\,\\mathrm{rad}$. On avance ici par comparaison progressive : d’abord les grossissements, puis l’angle obtenu avec la lunette B, puis le choix d’un nouvel oculaire pour la lunette A, avant de terminer par une interprétation globale.',
              questionOrders: [41, 42, 43, 44, 45],
            },
          ],
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
          stage: 'PRACTICE',
          questionOrders: [2, 6, 11, 19, 38],
        },
        {
          title: 'QCM de synthèse - calculs et interprétation',
          slug: 'qcm-de-synthese-calculs-et-interpretation',
          description:
            'Réinvestir les calculs et interprétations physiques autour de la lunette astronomique.',
          order: 2,
          stage: 'MASTER',
          items: [
            {
              type: 'QUESTION',
              questionOrder: 3,
            },
            {
              type: 'GROUP',
              title: 'Cas d’étude - Choisir une lunette pour un détail lointain',
              sharedStatement:
                'On étudie une série de raisonnements autour de deux lunettes astronomiques afocales destinées à observer un même détail très lointain. Les questions suivantes mobilisent le réglage afocal, le calcul du grossissement et la comparaison des angles apparents obtenus.',
              questionOrders: [33, 42, 45],
            },
            {
              type: 'QUESTION',
              questionOrder: 9,
            },
            {
              type: 'QUESTION',
              questionOrder: 39,
            },
          ],
        },
      ],
    },
  ],
};