import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_AMINES_DISCOVERY_QUIZ_SLUG = 'section-c-discovery-amines';
export const SECTION_C_AMINES_AMMONIUMS_PRACTICE_QUIZ_SLUG =
  'section-c-practice-amines-ammoniums-quaternaires';
export const SECTION_C_AMIDES_CARBAMATES_DISCOVERY_QUIZ_SLUG =
  'section-c-discovery-amides-carbamates';
export const SECTION_C_NITRILES_THIOLS_DISCOVERY_QUIZ_SLUG =
  'section-c-discovery-nitriles-thiols';
export const SECTION_C_NITROGEN_SULFUR_PRACTICE_QUIZ_SLUG =
  'section-c-practice-fonctions-azotees-soufrees';
export const SECTION_C_NITROGEN_SULFUR_MASTER_QUIZ_SLUG =
  'section-c-master-fonctions-azotees-soufrees';

export const SECTION_C_AMINES_DISCOVERY_QUESTION_ORDERS: number[] = [
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
];
export const SECTION_C_AMINES_AMMONIUMS_PRACTICE_QUESTION_ORDERS: number[] = [
  111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
];
export const SECTION_C_AMIDES_CARBAMATES_DISCOVERY_QUESTION_ORDERS: number[] = [
  121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
];
export const SECTION_C_NITRILES_THIOLS_DISCOVERY_QUESTION_ORDERS: number[] = [
  131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
];
export const SECTION_C_NITROGEN_SULFUR_PRACTICE_QUESTION_ORDERS: number[] = [
  141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
];
export const SECTION_C_NITROGEN_SULFUR_MASTER_QUESTION_ORDERS: number[] = [
  151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
];

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_C_AMINES_DISCOVERY_QUIZ_SLUG,
    title: `Amines`,
    description: `Reconnaître la fonction amine, distinguer amines primaires, secondaires et tertiaires et passer progressivement des noms aux différentes représentations des molécules.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_C_ORDER,
    questionOrders: SECTION_C_AMINES_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 2,
    slug: SECTION_C_AMINES_AMMONIUMS_PRACTICE_QUIZ_SLUG,
    title: `Amines et ammoniums quaternaires`,
    description: `Approfondir la classification des amines et distinguer un azote trivalent neutre d'un azote tétravalent chargé positivement dans les ammoniums quaternaires.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_C_ORDER,
    questionOrders: SECTION_C_AMINES_AMMONIUMS_PRACTICE_QUESTION_ORDERS,
  },
  {
    order: 3,
    slug: SECTION_C_AMIDES_CARBAMATES_DISCOVERY_QUIZ_SLUG,
    title: `Amides et carbamates`,
    description: `Reconnaître le motif amide, le distinguer d'une amine et d'un ester, puis découvrir le motif carbamate dans des molécules simples, biologiques ou médicamenteuses.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_C_ORDER,
    questionOrders: SECTION_C_AMIDES_CARBAMATES_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 4,
    slug: SECTION_C_NITRILES_THIOLS_DISCOVERY_QUIZ_SLUG,
    title: `Nitriles et thiols`,
    description: `Identifier les motifs nitrile et thiol, les distinguer des fonctions proches et les reconnaître dans des représentations variées, notamment celle de la cystéine.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_C_ORDER,
    questionOrders: SECTION_C_NITRILES_THIOLS_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 5,
    slug: SECTION_C_NITROGEN_SULFUR_PRACTICE_QUIZ_SLUG,
    title: `Fonctions azotées et soufrées`,
    description: `S'entraîner à distinguer amine, amide, nitrile, carbamate, ammonium quaternaire et thiol dans des molécules polyfonctionnelles et des situations comportant davantage de pièges.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_C_ORDER,
    questionOrders: SECTION_C_NITROGEN_SULFUR_PRACTICE_QUESTION_ORDERS,
  },
  {
    order: 6,
    slug: SECTION_C_NITROGEN_SULFUR_MASTER_QUIZ_SLUG,
    title: `Fonctions azotées et soufrées`,
    description: `Mobiliser transversalement la reconnaissance des fonctions, la lecture des formules, les charges, les valences et l'analyse de molécules du vivant ou d'intérêt médical.`,
    stage: 'MASTER',
    sectionOrder: SECTION_C_ORDER,
    questionOrders: SECTION_C_NITROGEN_SULFUR_MASTER_QUESTION_ORDERS,
  },
];

export const SECTION_C_QUESTIONS: SeedQuestion[] = [
  {
    order: 101,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la fonction amine :`,
    choices: [
      `Elle comporte un atome d'azote lié par des liaisons simples à des hydrogènes et/ou à des groupes carbonés.`,
      `Une amine neutre usuelle possède un azote trivalent.`,
      `Toute molécule contenant un atome d'azote est une amine.`,
      `Le motif général peut être noté $\\mathrm{R_nNH_{3-n}}$ avec $0 \\leq n \\leq 3$.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La fonction amine est définie par un azote neutre usuellement trivalent, lié à des hydrogènes et/ou à des groupes carbonés. La présence d'un azote ne suffit pas : il existe aussi des amides, nitriles, carbamates et ammoniums quaternaires.`,
    choiceExplanations: [
      `Cette description correspond aux amines simples étudiées dans le cours.`,
      `L'azote forme généralement trois liaisons dans une amine neutre.`,
      `Un azote peut appartenir à de nombreuses autres fonctions.`,
      `Cette formule générale est celle donnée dans le cours.`,
    ],
  },
  {
    order: 102,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les molécules suivantes, lesquelles sont des amines ?`,
    choices: [
      `$\\mathrm{CH_3-NH_2}$.`,
      `$\\mathrm{CH_3-NH-CH_3}$.`,
      `$\\mathrm{CH_3-CO-NH_2}$.`,
      `$\\mathrm{CH_3-C\\equiv N}$.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La méthylamine et la diméthylamine sont des amines. Le motif $\\mathrm{-CO-NH_2}$ définit une amide, tandis que $\\mathrm{-C\\equiv N}$ définit un nitrile.`,
    choiceExplanations: [
      `L'azote est lié à un groupe méthyle et à deux hydrogènes : c'est une amine primaire.`,
      `L'azote est lié à deux groupes méthyle et à un hydrogène : c'est une amine secondaire.`,
      `Le carbonyle directement lié à l'azote caractérise une amide.`,
      `La triple liaison carbone-azote caractérise un nitrile.`,
    ],
  },
  {
    order: 103,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant la classification des amines :`,
    choices: [
      `Une amine primaire possède un seul groupe carboné lié à l'azote.`,
      `Une amine secondaire possède deux groupes carbonés liés à l'azote.`,
      `Une amine tertiaire possède trois groupes carbonés liés à l'azote.`,
      `Une amine tertiaire possède nécessairement trois atomes d'azote.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La classe d'une amine dépend du nombre de groupes carbonés directement liés à son unique atome d'azote fonctionnel, et non du nombre total d'atomes d'azote de la molécule.`,
    choiceExplanations: [
      `L'azote porte alors généralement deux hydrogènes.`,
      `L'azote porte alors généralement un hydrogène.`,
      `L'azote ne porte alors plus d'hydrogène dans une amine tertiaire simple.`,
      `Le mot « tertiaire » ne désigne pas le nombre d'atomes d'azote.`,
    ],
  },
  {
    order: 104,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question:
      `La formule développée simplifiée suivante représente $\\mathrm{H_3C-NH_2}$. Cette molécule est :`,
    choices: [
      `La méthylamine, une amine primaire.`,
      `La diméthylamine, une amine secondaire.`,
      `Le méthanamide, une amide.`,
      `L'acétonitrile, un nitrile.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `La molécule contient un seul carbone lié à l'azote et deux hydrogènes portés par celui-ci : il s'agit de la méthylamine, une amine primaire.`,
    choiceExplanations: [
      `C'est la bonne association nom, formule et classe.`,
      `La diméthylamine s'écrit $\\mathrm{CH_3-NH-CH_3}$.`,
      `Le méthanamide comporte un groupe carbonyle.`,
      `L'acétonitrile comporte une triple liaison $\\mathrm{C\\equiv N}$.`,
    ],
  },
  {
    order: 105,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Quel nom correspond à la formule $\\mathrm{CH_3-NH-CH_3}$ ?`,
    choices: [
      `Méthylamine.`,
      `Diméthylamine.`,
      `Triméthylamine.`,
      `Méthanamide.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `L'azote est lié à deux groupes méthyle et à un hydrogène : la molécule est la diméthylamine, une amine secondaire.`,
    choiceExplanations: [
      `La méthylamine ne possède qu'un seul groupe méthyle.`,
      `C'est la bonne réponse.`,
      `La triméthylamine possède trois groupes méthyle.`,
      `Le méthanamide contient un groupe carbonyle.`,
    ],
  },
  {
    order: 106,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la triméthylamine $\\mathrm{N(CH_3)_3}$ :`,
    choices: [
      `C'est une amine tertiaire.`,
      `Son azote est lié à trois groupes carbonés.`,
      `Son azote neutre forme quatre liaisons simples.`,
      `Elle ne possède pas d'hydrogène directement lié à l'azote.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La triméthylamine est une amine tertiaire : l'azote neutre forme trois liaisons simples avec trois groupes méthyle et conserve un doublet non liant.`,
    choiceExplanations: [
      `Trois substituants carbonés définissent une amine tertiaire.`,
      `Les trois substituants sont des groupes méthyle.`,
      `Quatre liaisons simples caractériseraient plutôt un ammonium quaternaire chargé positivement.`,
      `Tous les hydrogènes de la molécule sont portés par les carbones.`,
    ],
  },
  {
    order: 107,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `La dopamine, neurotransmetteur impliqué notamment dans le contrôle moteur et les circuits de récompense, possède la formule topologique suivante : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'dopamine-topological',
    },
    choices: [
      `Elle possède une fonction amine primaire.`,
      `Son azote est directement lié à un seul carbone.`,
      `Les deux groupes $\\mathrm{-OH}$ du cycle aromatique sont des fonctions alcool au sens strict du cours.`,
      `La représentation topologique laisse visibles les hétéroatomes comme l'azote et l'oxygène.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La dopamine possède une extrémité $\\mathrm{-CH_2-CH_2-NH_2}$ correspondant à une amine primaire. Ses deux groupes hydroxyle sont portés par un cycle aromatique : ce sont des fonctions phénol, et non des alcools au sens strict retenu dans le cours. La dopamine est un messager chimique du cerveau, notamment impliqué dans le contrôle des mouvements, la motivation et la sensation de récompense.`,
    choiceExplanations: [
      `L'azote porte deux hydrogènes et un substituant carboné.`,
      `La chaîne carbonée constitue l'unique substituant carboné de l'azote.`,
      `Un alcool possède un hydroxyle porté par un carbone saturé ; ici, les hydroxyles sont phénoliques.`,
      `Les hétéroatomes sont explicitement indiqués dans une formule topologique.`,
    ],
  },
  {
    order: 108,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La glycine, le plus simple des acides aminés qui entrent dans la composition des protéines, peut être représentée par $\\mathrm{H_2N-CH_2-COOH}$. �' son sujet :`,
    choices: [
      `Elle possède une fonction amine primaire.`,
      `Elle possède une fonction acide carboxylique.`,
      `Elle possède une fonction amide.`,
      `Elle illustre qu'une molécule du vivant peut être polyfonctionnelle.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La glycine est l'acide aminé le plus simple. Elle associe une fonction amine primaire et une fonction acide carboxylique, mais ne possède pas de motif amide $\\mathrm{-CO-N-}$.`,
    choiceExplanations: [
      `L'azote est lié à un seul carbone.`,
      `Le motif $\\mathrm{-COOH}$ est présent.`,
      `L'azote n'est pas directement lié au carbone du carbonyle.`,
      `Deux fonctions différentes sont présentes dans la même molécule.`,
    ],
  },
  {
    order: 109,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Pour distinguer une amine d'une amide :`,
    choices: [
      `Dans une amide, l'azote est directement lié au carbone d'un groupe carbonyle.`,
      `Le motif $\\mathrm{-CO-N-}$ oriente vers une amide.`,
      `Le motif $\\mathrm{-C\\equiv N}$ oriente vers une amine.`,
      `La méthylamine $\\mathrm{CH_3-NH_2}$ ne possède aucun groupe carbonyle.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le voisinage direct d'un groupe carbonyle est le critère visuel majeur pour différencier une amide d'une amine. Le motif $\\mathrm{-C\\equiv N}$ correspond à un nitrile.`,
    choiceExplanations: [
      `C'est la caractéristique structurale d'une amide.`,
      `Cette écriture condensée est un bon repère.`,
      `La triple liaison carbone-azote appartient à la fonction nitrile.`,
      `La méthylamine est une amine simple.`,
    ],
  },
  {
    order: 110,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les affirmations suivantes concernant les amines :`,
    choices: [
      `Le suffixe ou le terme « amine » aide à identifier la famille.`,
      `Une amine primaire possède nécessairement un carbone primaire.`,
      `Une formule semi-développée permet souvent de déterminer la classe de l'amine.`,
      `Tous les items précédents sont vrais.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La classe de l'amine dépend du nombre de groupes carbonés liés à l'azote, tandis que le degré d'un carbone dépend de son propre environnement. Ces deux classifications ne doivent pas être confondues.`,
    choiceExplanations: [
      `Le nom fournit souvent une information directe sur la famille.`,
      `Le degré du carbone n'est pas le critère de classification de l'amine.`,
      `Il suffit de compter les substituants carbonés directement liés à l'azote.`,
      `L'item B est faux ; l'attrape-tout est donc faux.`,
    ],
  },
  {
    order: 111,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On compare $\\mathrm{CH_3NH_2}$, $\\mathrm{(CH_3)_2NH}$, $\\mathrm{(CH_3)_3N}$ et $\\mathrm{(CH_3)_4N^+}$.`,
    choices: [
      `Les trois premières espèces sont respectivement une amine primaire, secondaire et tertiaire.`,
      `La quatrième espèce est un ammonium quaternaire.`,
      `La quatrième espèce est une amine tertiaire neutre.`,
      `Seule la quatrième espèce possède un azote lié à quatre groupes carbonés.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La progression montre l'ajout successif de groupes méthyle autour de l'azote. Avec quatre substituants carbonés, l'azote devient tétravalent et porte une charge positive : il s'agit d'un ammonium quaternaire.`,
    choiceExplanations: [
      `Le nombre de groupes méthyle liés à l'azote vaut successivement un, deux et trois.`,
      `Quatre substituants carbonés et une charge positive définissent l'ammonium quaternaire.`,
      `Une amine tertiaire neutre ne possède que trois liaisons autour de l'azote.`,
      `Les trois premières espèces ne dépassent pas trois substituants carbonés.`,
    ],
  },
  {
    order: 112,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Concernant l'azote d'un ammonium quaternaire :`,
    choices: [
      `Il est tétravalent.`,
      `Il porte une charge formelle positive.`,
      `Il conserve un doublet non liant disponible comme dans une amine tertiaire neutre.`,
      `Il doit être distingué de l'azote trivalent d'une amine.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Dans un ammonium quaternaire, le doublet de l'azote a servi à former une quatrième liaison. L'azote est donc tétravalent, positivement chargé et ne possède plus le doublet libre caractéristique de l'amine tertiaire.`,
    choiceExplanations: [
      `Quatre liaisons entourent l'azote.`,
      `La quatrième liaison conduit à une charge positive.`,
      `Le doublet a été engagé dans la liaison supplémentaire.`,
      `Cette distinction est explicitement soulignée dans le cours.`,
    ],
  },
  {
    order: 113,
    difficulty: 'MEDIUM',
    answerFormat: 'SINGLE',
    question: `La formule $\\mathrm{(CH_3)_4N^+}$ correspond :`,
    choices: [
      `�' la triméthylamine.`,
      `�' l'ion tétraméthylammonium.`,
      `�' une amide tertiaire.`,
      `�' un nitrile.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `L'azote est lié à quatre groupes méthyle et porte une charge positive : il s'agit de l'ion tétraméthylammonium.`,
    choiceExplanations: [
      `La triméthylamine ne comporte que trois groupes méthyle et reste neutre.`,
      `C'est la bonne réponse.`,
      `Aucun groupe carbonyle n'est présent.`,
      `Aucune triple liaison $\\mathrm{C\\equiv N}$ n'est présente.`,
    ],
  },
  {
    order: 114,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On compare la triméthylamine $\\mathrm{(CH_3)_3N}$ et le tétraméthylammonium $\\mathrm{(CH_3)_4N^+}$.`,
    choices: [
      `La première est une amine tertiaire.`,
      `Le second est un ammonium quaternaire.`,
      `Les deux espèces sont neutres.`,
      `L'azote du second forme une liaison de plus que celui de la première.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La triméthylamine possède trois liaisons autour de l'azote et un doublet libre. Le tétraméthylammonium possède quatre liaisons, plus de doublet libre et une charge positive.`,
    choiceExplanations: [
      `Trois groupes carbonés définissent l'amine tertiaire.`,
      `Quatre groupes carbonés définissent l'ammonium quaternaire.`,
      `Le tétraméthylammonium est chargé positivement.`,
      `Il possède quatre liaisons contre trois pour la triméthylamine.`,
    ],
  },
  {
    order: 115,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La molécule $\\mathrm{CH_3-CH_2-N(CH_3)_2}$ :`,
    choices: [
      `Est une amine tertiaire.`,
      `Possède trois groupes carbonés directement liés à l'azote.`,
      `Est un ammonium quaternaire.`,
      `Son azote porte encore un hydrogène.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `L'azote est lié à un groupe éthyle et à deux groupes méthyle, soit trois substituants carbonés. La molécule est donc une amine tertiaire neutre et l'azote ne porte aucun hydrogène.`,
    choiceExplanations: [
      `Trois substituants carbonés définissent une amine tertiaire.`,
      `Un groupe éthyle et deux groupes méthyle sont liés à l'azote.`,
      `Un ammonium quaternaire nécessiterait quatre substituants et une charge positive.`,
      `Les trois valences de l'azote sont occupées par des groupes carbonés.`,
    ],
  },
  {
    order: 116,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `La choline, nutriment et précurseur de l'acétylcholine, possède la formule topologique suivante : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'choline-topological',
    },
    choices: [
      `Elle possède un ammonium quaternaire.`,
      `Son azote est lié à quatre groupes carbonés.`,
      `Elle possède aussi une fonction alcool.`,
      `Son azote est celui d'une amine primaire neutre.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La choline associe un groupement triméthylammonium à une chaîne hydroxyéthyle. Son azote est tétravalent et positif, tandis que le groupe $\\mathrm{-OH}$ terminal constitue une fonction alcool. Dans l'organisme, la choline sert notamment à fabriquer l'acétylcholine et entre dans la composition de certains lipides des membranes cellulaires.`,
    choiceExplanations: [
      `La charge positive et les quatre substituants caractérisent l'ammonium quaternaire.`,
      `Trois groupes méthyle et la chaîne hydroxyéthyle sont liés à l'azote.`,
      `Le hydroxyle est porté par un carbone saturé.`,
      `Une amine primaire ne possède qu'un seul groupe carboné lié à l'azote.`,
    ],
  },
  {
    order: 117,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La formule condensée de la choline peut s'écrire $\\mathrm{HO-CH_2-CH_2-N^+(CH_3)_3}$.`,
    choices: [
      `La charge positive est portée par l'azote.`,
      `La molécule comporte cinq atomes de carbone.`,
      `L'azote possède un hydrogène directement lié.`,
      `La formule permet d'identifier simultanément une fonction alcool et un ammonium quaternaire.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La chaîne hydroxyéthyle apporte deux carbones et les trois groupes méthyle en apportent trois autres. L'azote est lié à quatre groupes carbonés et ne porte donc aucun hydrogène.`,
    choiceExplanations: [
      `La notation $\\mathrm{N^+}$ indique explicitement la charge.`,
      `Deux carbones de chaîne plus trois carbones méthyle donnent cinq carbones.`,
      `Les quatre liaisons de l'azote sont établies avec des carbones.`,
      `Les deux motifs sont visibles dans la formule.`,
    ],
  },
  {
    order: 118,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `L'acétylcholine, neurotransmetteur, possède la formule topologique suivante : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'acetylcholine-topological',
    },
    choices: [
      `Elle possède un ammonium quaternaire.`,
      `Elle possède une fonction ester.`,
      `Elle possède une fonction amine primaire.`,
      `Son azote porte une charge positive.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'acétylcholine associe un groupement triméthylammonium positif et une fonction ester. Elle ne possède pas d'amine primaire. C'est un messager chimique important : il permet notamment la transmission du signal entre un nerf et un muscle et participe au contrôle de plusieurs fonctions automatiques de l'organisme.`,
    choiceExplanations: [
      `L'azote est lié à quatre groupes carbonés.`,
      `Le motif $\\mathrm{-COO-}$ est présent.`,
      `L'azote ne porte pas deux hydrogènes et n'est pas neutre.`,
      `La charge positive est caractéristique de l'ammonium quaternaire.`,
    ],
  },
  {
    order: 119,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Le chlorure de benzalkonium appartient à une famille de composés utilisés notamment comme agents antiseptiques ou tensioactifs. Il comporte un ammonium quaternaire.`,
    choices: [
      `Son azote est tétravalent.`,
      `La partie ammonium porte une charge positive.`,
      `Il s'agit nécessairement d'une amine tertiaire neutre.`,
      `La présence d'un contre-ion négatif permet d'assurer l'électroneutralité du sel.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Un sel d'ammonium quaternaire associe un cation organique positif à un anion, par exemple chlorure. Il ne doit pas être confondu avec une amine tertiaire neutre. Le chlorure de benzalkonium est notamment utilisé dans certaines préparations antiseptiques ou pharmaceutiques, car il peut endommager des micro-organismes et faciliter la dispersion des substances dans l'eau.`,
    choiceExplanations: [
      `Quatre substituants sont liés à l'azote.`,
      `L'azote porte une charge formelle positive.`,
      `Une amine tertiaire reste trivalente et neutre.`,
      `Le contre-ion compense la charge du cation.`,
    ],
  },
  {
    order: 120,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos des amines et des ammoniums quaternaires :`,
    choices: [
      `Une amine tertiaire et un ammonium quaternaire peuvent tous deux être liés à trois groupes méthyle.`,
      `L'absence ou la présence d'une quatrième liaison autour de l'azote aide à les distinguer.`,
      `Un ammonium quaternaire est toujours dépourvu de charge.`,
      `Tous les items précédents sont vrais.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Une triméthylamine possède trois groupes méthyle et un doublet libre ; la choline possède aussi trois groupes méthyle, mais une quatrième chaîne carbonée remplace le doublet libre et rend l'azote positif.`,
    choiceExplanations: [
      `La différence peut résider dans le quatrième substituant autour de l'azote.`,
      `C'est le critère structural central.`,
      `L'ammonium quaternaire porte au contraire une charge positive.`,
      `L'item C est faux ; l'attrape-tout est donc faux.`,
    ],
  },
  {
    order: 121,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la fonction amide :`,
    choices: [
      `Elle comporte un atome d'azote directement lié au carbone d'un groupe carbonyle.`,
      `Le motif peut être schématisé par $\\mathrm{R-CO-NR'R''}$.`,
      `Elle est identique à la fonction amine.`,
      `Le motif $\\mathrm{-CO-N-}$ constitue un repère visuel utile.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Une amide associe un groupe carbonyle et un azote directement lié au carbone carbonylé. Cette proximité avec le carbonyle la distingue nettement d'une amine.`,
    choiceExplanations: [
      `C'est la définition structurale de l'amide.`,
      `Les groupes $\\mathrm{R'}$ et $\\mathrm{R''}$ peuvent être des hydrogènes ou des groupes carbonés.`,
      `Le comportement et le motif d'une amide diffèrent de ceux d'une amine.`,
      `Ce motif permet une reconnaissance rapide.`,
    ],
  },
  {
    order: 122,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les molécules suivantes, lesquelles possèdent une fonction amide ?`,
    choices: [
      `$\\mathrm{CH_3-CO-NH_2}$.`,
      `$\\mathrm{H-CO-NH-CH_3}$.`,
      `$\\mathrm{CH_3-CH_2-NH_2}$.`,
      `$\\mathrm{CH_3-COO-CH_3}$.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les deux premières structures possèdent un azote directement lié au carbone d'un carbonyle. La troisième est une amine et la quatrième un ester.`,
    choiceExplanations: [
      `Il s'agit de l'éthanamide.`,
      `Il s'agit d'une amide substituée sur l'azote.`,
      `Aucun carbonyle n'est directement lié à l'azote.`,
      `Le motif $\\mathrm{-COO-}$ appartient à un ester.`,
    ],
  },
  {
    order: 123,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Quel nom correspond à la formule $\\mathrm{CH_3-CO-NH_2}$ ?`,
    choices: [
      `Éthylamine.`,
      `Éthanamide.`,
      `Éthanonitrile.`,
      `Éthanoate de méthyle.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `La chaîne comporte deux carbones et le motif terminal $\\mathrm{-CONH_2}$ correspond à une amide : il s'agit de l'éthanamide, aussi appelée acétamide.`,
    choiceExplanations: [
      `L'éthylamine s'écrit $\\mathrm{CH_3-CH_2-NH_2}$.`,
      `C'est la bonne réponse.`,
      `Un nitrile comporterait une triple liaison $\\mathrm{C\\equiv N}$.`,
      `L'éthanoate de méthyle est un ester.`,
    ],
  },
  {
    order: 124,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `L'urée, déchet azoté éliminé dans les urines, peut être représentée par $\\mathrm{H_2N-CO-NH_2}$.`,
    choices: [
      `Elle possède un groupe carbonyle.`,
      `Le carbone carbonylé est directement lié à deux atomes d'azote.`,
      `Elle possède une fonction nitrile.`,
      `L'urée est une molécule azotée importante dans l'élimination de l'azote chez l'humain.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'urée possède un carbonyle lié à deux groupes amino et appartient au domaine des amides. Elle constitue le principal déchet azoté éliminé dans les urines chez l'humain. Le foie la fabrique notamment à partir de l'ammoniac, qui serait toxique s'il s'accumulait.`,
    choiceExplanations: [
      `Le motif $\\mathrm{C=O}$ est visible.`,
      `La formule développée simplifiée le montre directement.`,
      `Aucune triple liaison $\\mathrm{C\\equiv N}$ n'est présente.`,
      `Cette contextualisation biologique aide à mémoriser la structure.`,
    ],
  },
  {
    order: 125,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `Dans les protéines, deux acides aminés peuvent être reliés au sein d'un peptide par le motif $\\mathrm{-CO-NH-}$.`,
    choices: [
      `Ce motif correspond à une fonction amide.`,
      `Il est aussi appelé liaison peptidique dans ce contexte.`,
      `Il correspond à une fonction nitrile.`,
      `La liaison peptidique relie le carbone carbonylé d'un acide aminé à l'azote d'un autre.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La liaison peptidique est une liaison amide formée entre le groupe carboxyle d'un acide aminé et le groupe amine d'un autre.`,
    choiceExplanations: [
      `Le motif $\\mathrm{-CO-NH-}$ est celui d'une amide.`,
      `C'est le nom spécifique employé dans les peptides et les protéines.`,
      `Un nitrile comporte une triple liaison carbone-azote.`,
      `Cette description correspond à la formation de la liaison peptidique.`,
    ],
  },
  {
    order: 126,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `Le paracétamol, antalgique et antipyrétique, possède la formule topologique suivante : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'paracetamol-topological',
    },
    choices: [
      `Il possède une fonction amide.`,
      `Son atome d'azote est directement lié à un carbone carbonylé.`,
      `Il possède une fonction amine libre.`,
      `Le groupe hydroxyle est porté par un carbone aromatique.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le paracétamol contient le motif $\\mathrm{-NH-CO-CH_3}$ correspondant à une amide. Son groupe hydroxyle est phénolique, car il est lié au cycle aromatique. Il est principalement utilisé pour soulager la douleur et faire baisser la fièvre.`,
    choiceExplanations: [
      `Le motif amide est clairement visible.`,
      `C'est le critère permettant de distinguer l'amide d'une amine.`,
      `L'azote appartient à l'amide et ne constitue pas une amine libre.`,
      `Le hydroxyle n'est donc pas une fonction alcool au sens strict du cours.`,
    ],
  },
  {
    order: 127,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `Une écriture condensée du paracétamol est $\\mathrm{HO-C_6H_4-NH-CO-CH_3}$.`,
    choices: [
      `Le motif $\\mathrm{-NH-CO-}$ correspond à une amide.`,
      `La molécule possède un noyau aromatique.`,
      `La molécule possède une amine primaire libre $\\mathrm{-NH_2}$.`,
      `La formule montre qu'une molécule peut contenir plusieurs fonctions oxygénées et azotées.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Cette écriture met en évidence un groupe phénol et une amide attachés à un noyau benzénique. Aucun groupe $\\mathrm{-NH_2}$ libre n'est présent.`,
    choiceExplanations: [
      `L'azote est directement voisin du carbonyle.`,
      `Le fragment $\\mathrm{C_6H_4}$ représente le cycle benzénique substitué.`,
      `L'azote porte un seul hydrogène et appartient au motif amide.`,
      `Le paracétamol est polyfonctionnel.`,
    ],
  },
  {
    order: 128,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la fonction carbamate, aussi appelée uréthane :`,
    choices: [
      `Son motif peut être schématisé par $\\mathrm{R-O-CO-NR'R''}$.`,
      `Elle associe un oxygène et un azote autour d'un même groupe carbonyle.`,
      `Elle est identique à un éther simple.`,
      `Elle peut être vue comme une fonction intermédiaire entre ester et amide sur le plan structural.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le carbamate contient un groupe carbonyle lié d'un côté à un oxygène et de l'autre à un azote. Il combine donc des caractéristiques structurales rappelant l'ester et l'amide.`,
    choiceExplanations: [
      `Cette formule générale correspond au motif présenté dans le cours.`,
      `Le carbone carbonylé est lié à ces deux hétéroatomes.`,
      `Un éther simple ne possède pas de groupe carbonyle.`,
      `Cette comparaison aide à distinguer visuellement les trois familles.`,
    ],
  },
  {
    order: 129,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `On compare les motifs $\\mathrm{R-CO-NH_2}$, $\\mathrm{R-CO-O-R'}$ et $\\mathrm{R-O-CO-NH_2}$.`,
    choices: [
      `Le premier correspond à une amide.`,
      `Le deuxième correspond à un ester.`,
      `Le troisième correspond à un carbamate.`,
      `Les trois motifs appartiennent exactement à la même famille.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La nature des hétéroatomes directement liés au carbone carbonylé permet de distinguer amide, ester et carbamate.`,
    choiceExplanations: [
      `L'azote est directement lié au carbonyle.`,
      `Un oxygène relie le carbonyle à un autre groupe carboné.`,
      `Le carbonyle est relié à un oxygène et à un azote.`,
      `Ces trois familles sont proches mais distinctes.`,
    ],
  },
  {
    order: 130,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `La rivastigmine, utilisée dans la prise en charge symptomatique de certaines maladies neurodégénératives, comporte une fonction carbamate.`,
    choices: [
      `Sa structure doit comporter un motif associant carbonyle, oxygène et azote.`,
      `Elle illustre qu'une fonction carbamate peut apparaître dans un médicament.`,
      `Une fonction carbamate ne contient jamais d'azote.`,
      `La reconnaissance de la famille repose sur le motif structural et non sur le seul nom commercial.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le carbamate est une fonction rencontrée dans plusieurs molécules d'intérêt pharmacologique. Son identification nécessite de repérer l'enchaînement $\\mathrm{-O-CO-N-}$. La rivastigmine ralentit l'action d'enzymes qui dégradent l'acétylcholine. Elle est utilisée pour atténuer certains symptômes de maladies comme la maladie d'Alzheimer.`,
    choiceExplanations: [
      `C'est le motif caractéristique de la fonction.`,
      `Cet exemple apporte une contextualisation médicale.`,
      `L'azote fait partie du motif carbamate.`,
      `Un nom commercial ne renseigne pas directement sur la structure.`,
    ],
  },
  {
    order: 131,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la fonction nitrile :`,
    choices: [
      `Elle comporte une triple liaison carbone-azote.`,
      `Son motif général est $\\mathrm{R-C\\equiv N}$.`,
      `L'atome d'azote est directement lié à trois hydrogènes.`,
      `Le carbone du nitrile appartient à la chaîne carbonée de la molécule.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le nitrile est caractérisé par le groupe cyano $\\mathrm{-C\\equiv N}$. Le carbone de ce groupe est compté dans la chaîne principale lors de la nomenclature.`,
    choiceExplanations: [
      `La triple liaison est le signe distinctif principal.`,
      `Cette écriture correspond au motif général.`,
      `L'azote du nitrile n'est lié à aucun hydrogène dans ce motif.`,
      `Le carbone du groupe fonctionnel est bien un carbone de la molécule.`,
    ],
  },
  {
    order: 132,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `La molécule $\\mathrm{CH_3-C\\equiv N}$ appartient à la famille :`,
    choices: [
      `Des amines.`,
      `Des amides.`,
      `Des nitriles.`,
      `Des thiols.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `La triple liaison $\\mathrm{C\\equiv N}$ permet de reconnaître immédiatement un nitrile. La molécule est l'éthanenitrile, couramment appelé acétonitrile.`,
    choiceExplanations: [
      `Une amine ne possède pas ce motif triple.`,
      `Une amide comporte un carbonyle lié à un azote.`,
      `C'est la bonne réponse.`,
      `Un thiol comporte un groupe $\\mathrm{-SH}$.`,
    ],
  },
  {
    order: 133,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Pour distinguer un nitrile d'une amine :`,
    choices: [
      `Le nitrile comporte une triple liaison $\\mathrm{C\\equiv N}$.`,
      `L'amine comporte généralement des liaisons simples autour de l'azote.`,
      `La formule $\\mathrm{CH_3-CH_2-NH_2}$ correspond à un nitrile.`,
      `La formule $\\mathrm{CH_3-C\\equiv N}$ correspond à un nitrile.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La nature de la liaison carbone-azote constitue le meilleur critère visuel : triple dans un nitrile, simple dans une amine simple.`,
    choiceExplanations: [
      `C'est le motif caractéristique du nitrile.`,
      `Les amines simples ont un azote trivalent relié par des liaisons simples.`,
      `Cette formule correspond à l'éthylamine.`,
      `La triple liaison permet l'identification.`,
    ],
  },
  {
    order: 134,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la fonction thiol :`,
    choices: [
      `Son motif général est $\\mathrm{R-SH}$.`,
      `Elle comporte un groupe sulfhydryle $\\mathrm{-SH}$.`,
      `Elle est l'analogue soufré d'un alcool sur le plan du motif général.`,
      `Elle comporte nécessairement une liaison $\\mathrm{S-S}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le thiol est caractérisé par un groupe $\\mathrm{-SH}$ lié à un groupe carboné. Une liaison $\\mathrm{S-S}$ correspond à un disulfure, et non à un thiol.`,
    choiceExplanations: [
      `Cette formule générale est celle du cours.`,
      `Le nom sulfhydryle désigne le groupe $\\mathrm{-SH}$.`,
      `L'oxygène de l'alcool est remplacé par un soufre.`,
      `Un thiol libre ne possède pas nécessairement de pont disulfure.`,
    ],
  },
  {
    order: 135,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `On compare le méthanol $\\mathrm{CH_3-OH}$ et le méthanethiol $\\mathrm{CH_3-SH}$.`,
    choices: [
      `Le premier est un alcool.`,
      `Le second est un thiol.`,
      `Les deux molécules appartiennent à la même famille.`,
      `Le remplacement de l'oxygène par le soufre modifie la famille chimique.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Les motifs $\\mathrm{-OH}$ et $\\mathrm{-SH}$ sont analogues visuellement, mais définissent respectivement les familles alcool et thiol.`,
    choiceExplanations: [
      `Le hydroxyle est porté par un carbone saturé.`,
      `Le groupe sulfhydryle caractérise le thiol.`,
      `Les familles sont différentes.`,
      `La nature de l'hétéroatome est déterminante.`,
    ],
  },
  {
    order: 136,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `La cystéine, acide aminé soufré, possède la formule topologique suivante : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'cysteine-topological',
    },
    choices: [
      `Elle possède une fonction thiol.`,
      `Elle possède une fonction amine.`,
      `Elle possède une fonction acide carboxylique.`,
      `Elle possède une fonction nitrile.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La cystéine associe un groupe $\\mathrm{-SH}$, une fonction amine et une fonction acide carboxylique. Aucune triple liaison $\\mathrm{C\\equiv N}$ n'est présente. Son groupe thiol peut former des ponts disulfure, c'est-à-dire des liaisons $\\mathrm{S-S}$ qui contribuent à maintenir la forme de nombreuses protéines.`,
    choiceExplanations: [
      `Le groupe sulfhydryle est porté par la chaîne latérale.`,
      `Le groupe amino est lié au carbone central.`,
      `Le groupe $\\mathrm{-COOH}$ est présent.`,
      `Il n'existe pas de motif nitrile.`,
    ],
  },
  {
    order: 137,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Une formule semi-développée de la cystéine est $\\mathrm{HS-CH_2-CH(NH_2)-COOH}$.`,
    choices: [
      `Sa fonction amine est primaire.`,
      `Le groupe $\\mathrm{-SH}$ appartient à la fonction thiol.`,
      `Le groupe $\\mathrm{-COOH}$ est une fonction ester.`,
      `La cystéine est une molécule polyfonctionnelle du vivant.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'azote de la cystéine est lié à un seul carbone, ce qui correspond à une amine primaire. La molécule comporte aussi un thiol et un acide carboxylique.`,
    choiceExplanations: [
      `Un seul substituant carboné est lié à l'azote.`,
      `Le motif $\\mathrm{-SH}$ est explicite.`,
      `Le groupe $\\mathrm{-COOH}$ définit un acide carboxylique.`,
      `Trois fonctions différentes sont réunies dans la même molécule.`,
    ],
  },
  {
    order: 138,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Les ponts disulfure contribuent à la stabilité de certaines protéines. �' propos d'un motif $\\mathrm{R-S-S-R'}$ :`,
    choices: [
      `Il comporte une liaison soufre-soufre.`,
      `Il peut résulter de l'oxydation de deux groupes thiol.`,
      `Il constitue encore deux fonctions thiol libres.`,
      `Les ponts disulfure peuvent contribuer à stabiliser la structure de certaines protéines.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Deux thiols peuvent s'oxyder pour former un disulfure. Les hydrogènes des groupes $\\mathrm{-SH}$ ne sont alors plus présents : il ne subsiste donc plus deux thiols libres.`,
    choiceExplanations: [
      `La liaison $\\mathrm{S-S}$ est le motif central.`,
      `C'est une transformation classique des résidus cystéine.`,
      `Les groupes $\\mathrm{-SH}$ ont été consommés lors de la formation du pont.`,
      `Ces ponts peuvent participer à la stabilité tridimensionnelle des protéines.`,
    ],
  },
  {
    order: 139,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `La N-acétylcystéine peut être représentée par $\\mathrm{HS-CH_2-CH(NH-CO-CH_3)-COOH}$. Elle est notamment utilisée comme mucolytique et comme antidote dans certaines intoxications au paracétamol.`,
    choices: [
      `Elle possède une fonction thiol.`,
      `Elle possède une fonction amide.`,
      `Elle possède une fonction acide carboxylique.`,
      `Elle possède une fonction nitrile.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La N-acétylation transforme le groupe amine de la cystéine en motif amide $\\mathrm{-NH-CO-CH_3}$, tandis que le thiol et l'acide carboxylique restent présents. La N-acétylcystéine peut fluidifier les sécrétions bronchiques. Elle est aussi utilisée comme antidote lors de certaines intoxications au paracétamol.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{HS-}$ est visible.`,
      `L'azote est directement lié à un carbone carbonylé.`,
      `Le motif $\\mathrm{-COOH}$ est conservé.`,
      `Aucune triple liaison carbone-azote n'est présente.`,
    ],
  },
  {
    order: 140,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les associations suivantes :`,
    choices: [
      `$\\mathrm{R-C\\equiv N}$ : nitrile.`,
      `$\\mathrm{R-SH}$ : thiol.`,
      `$\\mathrm{R-S-S-R'}$ : deux thiols libres.`,
      `Tous les items précédents sont vrais.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les deux premiers motifs sont correctement associés. Le motif $\\mathrm{R-S-S-R'}$ correspond à un disulfure et ne comporte plus de groupes $\\mathrm{-SH}$ libres.`,
    choiceExplanations: [
      `La triple liaison carbone-azote définit le nitrile.`,
      `Le groupe sulfhydryle définit le thiol.`,
      `Les hydrogènes des thiols ont disparu lors de la formation du pont disulfure.`,
      `L'item C est faux ; l'attrape-tout est donc faux.`,
    ],
  },
  {
    order: 141,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les formules suivantes, lesquelles correspondent à une amine ?`,
    choices: [
      `$\\mathrm{CH_3-CH_2-NH_2}$.`,
      `$\\mathrm{CH_3-CO-NH-CH_3}$.`,
      `$\\mathrm{(CH_3)_3N}$.`,
      `$\\mathrm{CH_3-C\\equiv N}$.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'éthylamine et la triméthylamine sont des amines. La présence d'un carbonyle directement lié à l'azote définit une amide, tandis que la triple liaison définit un nitrile.`,
    choiceExplanations: [
      `L'azote est lié à un groupe éthyle et à deux hydrogènes.`,
      `Le motif $\\mathrm{-CO-N-}$ appartient à une amide.`,
      `Trois groupes méthyle entourent l'azote neutre.`,
      `Le motif $\\mathrm{-C\\equiv N}$ est un nitrile.`,
    ],
  },
  {
    order: 142,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On compare $\\mathrm{CH_3-NH_2}$ et $\\mathrm{CH_3-CO-NH_2}$.`,
    choices: [
      `La première molécule est une amine.`,
      `La seconde molécule est une amide.`,
      `Les deux atomes d'azote ont exactement le même environnement électronique et chimique.`,
      `La présence du carbonyle dans la seconde modifie la famille fonctionnelle.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'ajout d'un groupe carbonyle directement voisin de l'azote transforme le motif amine en motif amide et modifie fortement ses propriétés chimiques.`,
    choiceExplanations: [
      `Aucun carbonyle n'est lié à l'azote de la méthylamine.`,
      `Le motif $\\mathrm{-CONH_2}$ est celui d'une amide.`,
      `Le voisinage du carbonyle modifie la répartition électronique autour de l'azote.`,
      `C'est précisément le critère de distinction.`,
    ],
  },
  {
    order: 143,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `La N-acétylcystéine, utilisée notamment comme mucolytique et antidote d'un surdosage en paracétamol, peut être écrite $\\mathrm{HS-CH_2-CH(NH-CO-CH_3)-COOH}$. �' son sujet :`,
    choices: [
      `Elle possède un thiol.`,
      `Elle possède une amide.`,
      `Elle possède une amine primaire libre.`,
      `Elle possède un acide carboxylique.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La fonction amine de la cystéine a été acétylée : l'azote appartient désormais à une amide. Les fonctions thiol et acide carboxylique restent présentes.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{-SH}$ est intact.`,
      `Le motif $\\mathrm{-NH-CO-}$ est une amide.`,
      `L'azote n'est plus celui d'une amine libre.`,
      `Le groupe $\\mathrm{-COOH}$ est visible.`,
    ],
  },
  {
    order: 144,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Une espèce possède la formule $\\mathrm{R-N^+(CH_3)_3}$.`,
    choices: [
      `L'azote est lié à quatre groupes carbonés.`,
      `L'espèce comporte un ammonium quaternaire.`,
      `L'azote est trivalent et neutre.`,
      `La charge positive doit être prise en compte lors de la lecture de la formule.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le groupe $\\mathrm{R}$ et les trois groupes méthyle constituent quatre substituants carbonés. L'azote est donc tétravalent et positivement chargé.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{R}$ constitue le quatrième substituant.`,
      `C'est la définition d'un ammonium quaternaire.`,
      `L'azote n'est ni trivalent ni neutre.`,
      `Omettre la charge conduirait à une mauvaise classification.`,
    ],
  },
  {
    order: 145,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Pour distinguer le déchet azoté qu'est l'urée d'un carbamate, on compare l'urée $\\mathrm{H_2N-CO-NH_2}$ et le méthylcarbamate $\\mathrm{CH_3-O-CO-NH_2}$.`,
    choices: [
      `Les deux molécules possèdent un groupe carbonyle.`,
      `Dans l'urée, le carbone carbonylé est lié à deux atomes d'azote.`,
      `Dans le carbamate, le carbone carbonylé est lié à un oxygène et à un azote.`,
      `Les deux molécules sont des nitriles.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'urée et le carbamate sont proches par la présence d'un carbonyle lié à un ou plusieurs azotes, mais le carbamate possède aussi un oxygène directement lié au carbonyle.`,
    choiceExplanations: [
      `Le motif $\\mathrm{C=O}$ est présent dans les deux cas.`,
      `Les deux groupes $\\mathrm{NH_2}$ encadrent le carbonyle.`,
      `Le motif $\\mathrm{-O-CO-NH_2}$ est caractéristique du carbamate.`,
      `Aucune triple liaison $\\mathrm{C\\equiv N}$ n'est présente.`,
    ],
  },
  {
    order: 146,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `La molécule $\\mathrm{H_2N-CH_2-CH_2-SH}$ est représentée sous forme semi-développée.`,
    choices: [
      `Sa formule brute est $\\mathrm{C_2H_7NS}$.`,
      `Elle possède une amine primaire.`,
      `Elle possède une fonction thiol.`,
      `Elle possède une fonction amide.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le décompte conduit à deux carbones, sept hydrogènes, un azote et un soufre. L'azote appartient à une amine primaire et le groupe $\\mathrm{-SH}$ à un thiol.`,
    choiceExplanations: [
      `Les hydrogènes sont : deux sur l'azote, quatre sur les deux $\\mathrm{CH_2}$ et un sur le soufre.`,
      `Un seul groupe carboné est lié à l'azote.`,
      `Le motif $\\mathrm{-SH}$ est présent.`,
      `Aucun carbonyle n'est lié à l'azote.`,
    ],
  },
  {
    order: 147,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos des noms de fonctions :`,
    choices: [
      `Le terme nitrile oriente vers un motif $\\mathrm{-C\\equiv N}$.`,
      `Le terme thiol oriente vers un motif $\\mathrm{-SH}$.`,
      `Le terme amide oriente vers un azote directement lié à un carbonyle.`,
      `Le terme ammonium quaternaire désigne une amine primaire neutre.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les noms de familles donnent des repères structuraux précis. L'ammonium quaternaire comporte un azote tétravalent positif et ne doit pas être assimilé à une amine primaire.`,
    choiceExplanations: [
      `La triple liaison carbone-azote est caractéristique.`,
      `Le groupe sulfhydryle est caractéristique.`,
      `Le motif $\\mathrm{-CO-N-}$ est caractéristique.`,
      `Les deux espèces diffèrent par le nombre de substituants et par la charge.`,
    ],
  },
  {
    order: 148,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Le captopril, médicament antihypertenseur, possède la formule topologique suivante : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'captopril-topological',
    },
    choices: [
      `Il possède une fonction thiol.`,
      `Il possède une fonction amide.`,
      `Il possède une fonction acide carboxylique.`,
      `Il possède un ammonium quaternaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le captopril associe un groupe $\\mathrm{-SH}$, une liaison amide et un groupe $\\mathrm{-COOH}$. Son azote appartient à l'amide cyclique et ne constitue pas un ammonium quaternaire. Le captopril bloque une enzyme qui participe à l'augmentation de la pression artérielle. Il est utilisé notamment contre l'hypertension et dans certaines insuffisances cardiaques.`,
    choiceExplanations: [
      `Le soufre porte un hydrogène dans le groupe thiol.`,
      `L'azote est directement lié à un carbone carbonylé.`,
      `Le groupe carboxyle est présent sur le cycle.`,
      `L'azote n'est ni tétravalent ni chargé positivement.`,
    ],
  },
  {
    order: 149,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Pour repérer une amide dans une formule topologique :`,
    choices: [
      `Il faut rechercher un azote directement relié au carbone d'un groupe $\\mathrm{C=O}$.`,
      `Un azote séparé du carbonyle par un oxygène correspond nécessairement à une amide simple.`,
      `Le motif $\\mathrm{-CO-N-}$ reste visible même lorsque les carbones et hydrogènes implicites ne sont pas écrits.`,
      `La simple présence d'un azote suffit à conclure.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Les formules topologiques omettent beaucoup de carbones et d'hydrogènes, mais les hétéroatomes et les liaisons multiples restent représentés. Le voisinage direct du carbonyle est donc identifiable.`,
    choiceExplanations: [
      `C'est le critère structural essentiel.`,
      `Un motif $\\mathrm{-O-CO-N-}$ correspond plutôt à un carbamate.`,
      `L'azote, l'oxygène et la double liaison sont explicitement visibles.`,
      `Il faut analyser l'environnement de l'azote.`,
    ],
  },
  {
    order: 150,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les affirmations suivantes :`,
    choices: [
      `Une molécule peut contenir simultanément une amide et un thiol.`,
      `Une molécule peut contenir simultanément un ammonium quaternaire et un ester.`,
      `Une molécule comportant un nitrile est nécessairement une amine.`,
      `Tous les items précédents sont vrais.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La N-acétylcystéine ou le captopril illustrent l'association amide-thiol, tandis que l'acétylcholine associe ester et ammonium quaternaire. Le nitrile constitue une famille distincte de l'amine.`,
    choiceExplanations: [
      `Plusieurs molécules d'intérêt médical en fournissent un exemple.`,
      `L'acétylcholine en est un exemple classique.`,
      `Le motif $\\mathrm{-C\\equiv N}$ ne correspond pas à une amine.`,
      `L'item C est faux ; l'attrape-tout est donc faux.`,
    ],
  },
  {
    order: 151,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `La choline, précurseur de l'acétylcholine et constituant de certains lipides membranaires, peut être représentée par $\\mathrm{HO-CH_2-CH_2-N^+(CH_3)_3}$.`,
    choices: [
      `Sa formule brute cationique est $\\mathrm{C_5H_{14}NO^+}$.`,
      `Elle possède un alcool primaire.`,
      `Elle possède une amine tertiaire neutre.`,
      `Son azote est lié à quatre carbones.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La choline comporte cinq carbones et quatorze hydrogènes. Le groupe hydroxyle est terminal, tandis que l'azote tétravalent est un ammonium quaternaire, et non une amine tertiaire neutre. Son intérêt biologique tient notamment au fait qu'elle sert à fabriquer l'acétylcholine et certains lipides des membranes cellulaires.`,
    choiceExplanations: [
      `Le décompte inclut deux carbones de chaîne et trois groupes méthyle.`,
      `Le carbone portant le groupe $\\mathrm{-OH}$ est lié à un seul autre carbone.`,
      `La quatrième liaison et la charge positive excluent cette classification.`,
      `Trois groupes méthyle et la chaîne hydroxyéthyle entourent l'azote.`,
    ],
  },
  {
    order: 152,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Pour produire l'acétylcholine, messager chimique impliqué notamment dans la transmission entre un nerf et un muscle, l'organisme utilise la choline. On compare la choline $\\mathrm{HO-CH_2-CH_2-N^+(CH_3)_3}$ et l'acétylcholine $\\mathrm{CH_3-COO-CH_2-CH_2-N^+(CH_3)_3}$.`,
    choices: [
      `Les deux possèdent un ammonium quaternaire.`,
      `La choline possède une fonction alcool, remplacée par une fonction ester dans l'acétylcholine.`,
      `L'acétylcholine possède une fonction amide.`,
      `L'acétylation modifie la fonction oxygénée sans modifier le caractère quaternaire de l'azote.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'acétylcholine résulte formellement de l'estérification du groupe hydroxyle de la choline. Le groupement ammonium quaternaire reste inchangé. Cette transformation conduit à un messager chimique essentiel, notamment pour transmettre le signal entre un nerf et un muscle et dans certaines voies nerveuses qui contrôlent les fonctions automatiques.`,
    choiceExplanations: [
      `Le motif $\\mathrm{N^+(CH_3)_3}$ est commun aux deux molécules.`,
      `Le groupe $\\mathrm{-OH}$ devient un motif $\\mathrm{-O-CO-CH_3}$.`,
      `L'azote n'est pas lié au carbone du carbonyle.`,
      `La charge positive et les quatre substituants de l'azote sont conservés.`,
    ],
  },
  {
    order: 153,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Au niveau de la jonction neuromusculaire, l'acétylcholine transmet un signal entre le nerf et le muscle. Sa formule topologique est rappelée ci-dessous : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'acetylcholine-topological',
    },
    choices: [
      `La molécule comporte deux atomes d'oxygène dans sa fonction ester.`,
      `L'azote est lié à trois groupes méthyle et à une chaîne carbonée.`,
      `L'azote possède encore un doublet non liant disponible.`,
      `La molécule possède globalement une charge positive.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La fonction ester comporte un oxygène carbonylé et un oxygène en liaison simple. L'azote quaternaire est lié à quatre groupes carbonés, ne conserve pas de doublet libre et confère une charge positive à la molécule.`,
    choiceExplanations: [
      `Les deux oxygènes du motif $\\mathrm{-COO-}$ sont visibles.`,
      `La chaîne éthyle constitue le quatrième substituant.`,
      `Le doublet a servi à établir la quatrième liaison.`,
      `La charge positive est portée par l'azote.`,
    ],
  },
  {
    order: 154,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Le paracétamol, utilisé pour soulager la douleur et faire baisser la fièvre, peut être écrit $\\mathrm{HO-C_6H_4-NH-CO-CH_3}$.`,
    choices: [
      `Sa formule brute est $\\mathrm{C_8H_9NO_2}$.`,
      `Il possède une fonction amide.`,
      `Il possède une amine primaire libre.`,
      `Le groupe hydroxyle est un phénol et non un alcool au sens strict.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le décompte donne huit carbones, neuf hydrogènes, un azote et deux oxygènes. L'azote appartient à une amide, tandis que le groupe hydroxyle est directement lié au cycle aromatique. Le paracétamol est couramment utilisé pour soulager la douleur et faire baisser la fièvre.`,
    choiceExplanations: [
      `Le noyau substitué apporte six carbones, auxquels s'ajoutent le carbonyle et le méthyle.`,
      `Le motif $\\mathrm{-NH-CO-}$ est présent.`,
      `L'azote est directement lié au carbonyle et ne constitue pas une amine libre.`,
      `Le carbone portant le hydroxyle est aromatique.`,
    ],
  },
  {
    order: 155,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `La N-acétylcystéine, utilisée notamment comme mucolytique et antidote d'un surdosage en paracétamol, possède la formule topologique suivante : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'n-acetylcysteine-topological',
    },
    choices: [
      `Elle possède un thiol.`,
      `Elle possède une amide.`,
      `Elle possède une amine primaire libre.`,
      `Elle possède un acide carboxylique.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La N-acétylation transforme l'amine de la cystéine en amide. Le groupe thiol et le groupe acide carboxylique restent présents. Son groupe thiol participe à ses propriétés antioxydantes. La molécule aide aussi l'organisme à reformer du glutathion, une substance qui protège les cellules contre certaines espèces chimiques réactives.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{-SH}$ est visible.`,
      `L'azote est directement lié au carbonyle du groupe acétyle.`,
      `L'azote n'appartient plus à une amine libre.`,
      `Le motif $\\mathrm{-COOH}$ est présent.`,
    ],
  },
  {
    order: 156,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Dans certaines protéines, deux molécules de cystéine peuvent s'oxyder pour former une cystine comportant un pont $\\mathrm{-S-S-}$ qui contribue à leur stabilité.`,
    choices: [
      `Deux fonctions thiol sont consommées lors de la formation du pont disulfure.`,
      `La cystine possède encore deux groupes $\\mathrm{-SH}$ libres au niveau du pont.`,
      `La liaison $\\mathrm{S-S}$ peut participer à la stabilisation de certaines protéines.`,
      `La transformation concerne les fonctions amine des deux cystéines.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La formation du disulfure implique les deux groupes thiol, qui perdent leurs hydrogènes. Les fonctions amine et acide carboxylique ne sont pas directement impliquées dans cette liaison.`,
    choiceExplanations: [
      `Chaque groupe $\\mathrm{-SH}$ contribue un atome de soufre au pont.`,
      `Les hydrogènes ont été retirés lors de l'oxydation.`,
      `Les ponts disulfure sont importants dans la structure de plusieurs protéines.`,
      `La liaison se forme entre les atomes de soufre.`,
    ],
  },
  {
    order: 157,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Un fragment simplifié de protéine peut être représenté par le dipeptide $\\mathrm{H_2N-CH_2-CO-NH-CH_2-COOH}$.`,
    choices: [
      `Il possède une amine primaire libre à une extrémité.`,
      `Il possède une fonction amide correspondant à la liaison peptidique.`,
      `Il possède un acide carboxylique libre à l'autre extrémité.`,
      `Il possède une fonction nitrile.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La formule montre une extrémité amino, une liaison peptidique $\\mathrm{-CO-NH-}$ et une extrémité carboxylique. Aucune triple liaison carbone-azote n'est présente.`,
    choiceExplanations: [
      `Le groupe terminal $\\mathrm{H_2N-}$ est une amine primaire.`,
      `Le motif central est une amide.`,
      `Le groupe terminal $\\mathrm{-COOH}$ est libre.`,
      `Aucun motif $\\mathrm{-C\\equiv N}$ n'apparaît.`,
    ],
  },
  {
    order: 158,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On compare l'acétonitrile $\\mathrm{CH_3-C\\equiv N}$ et l'éthylamine $\\mathrm{CH_3-CH_2-NH_2}$.`,
    choices: [
      `Les deux molécules contiennent deux atomes de carbone et un atome d'azote.`,
      `Elles ont la même formule brute.`,
      `La première est un nitrile et la seconde une amine primaire.`,
      `La nature et le nombre des liaisons autour de l'azote sont différents.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `L'acétonitrile a pour formule $\\mathrm{C_2H_3N}$, tandis que l'éthylamine a pour formule $\\mathrm{C_2H_7N}$. Elles partagent les mêmes types d'atomes mais diffèrent par le nombre d'hydrogènes et par la fonction.`,
    choiceExplanations: [
      `Le décompte C/N est identique.`,
      `Le nombre d'hydrogènes diffère fortement.`,
      `La triple liaison et les liaisons simples permettent la distinction.`,
      `L'azote du nitrile participe à une triple liaison, celui de l'amine à trois liaisons simples.`,
    ],
  },
  {
    order: 159,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Parmi les motifs suivants, lesquels correspondent à un carbamate ?`,
    choices: [
      `$\\mathrm{R-O-CO-NH-R'}$.`,
      `$\\mathrm{R-NH-CO-O-R'}$.`,
      `$\\mathrm{R-CO-NH-R'}$.`,
      `$\\mathrm{R-O-R'}$.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Un carbamate comporte un carbonyle relié à la fois à un oxygène et à un azote. Les écritures A et B décrivent le même type d'enchaînement lu dans des sens opposés.`,
    choiceExplanations: [
      `Le motif $\\mathrm{-O-CO-N-}$ est caractéristique.`,
      `Lu depuis l'azote, le même motif s'écrit $\\mathrm{-N-CO-O-}$.`,
      `Ce motif correspond à une amide simple.`,
      `Ce motif correspond à un éther.`,
    ],
  },
  {
    order: 160,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Le captopril, médicament utilisé notamment contre l'hypertension artérielle, possède la formule topologique suivante : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'captopril-topological',
    },
    choices: [
      `La molécule associe une fonction thiol, une amide et un acide carboxylique.`,
      `Son azote appartient à une amine tertiaire libre.`,
      `La présence d'un cycle n'empêche pas de reconnaître les fonctions portées par la molécule.`,
      `Tous les hétéroatomes sont omis dans la représentation topologique.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Le captopril est une molécule polyfonctionnelle. L'azote du cycle est directement lié à un carbonyle et appartient donc à une amide. Les hétéroatomes restent explicitement représentés dans une formule topologique. Son groupe thiol participe à la fixation du médicament sur son enzyme cible. Le blocage de cette enzyme contribue à diminuer la pression artérielle.`,
    choiceExplanations: [
      `Les trois motifs sont visibles sur la structure.`,
      `Le voisinage direct du carbonyle exclut une amine libre.`,
      `La formule topologique conserve les informations fonctionnelles utiles.`,
      `L'oxygène, l'azote et le soufre sont au contraire affichés.`,
    ],
  },
];
