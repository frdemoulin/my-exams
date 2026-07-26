import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_CARBON_DEGREE_DISCOVERY_QUIZ_SLUG =
  'section-d-discovery-degre-carbones';
export const SECTION_D_CARBON_FUNCTIONS_PRACTICE_QUIZ_SLUG =
  'section-d-practice-degre-carbones-fonctions';
export const SECTION_D_CHAIN_PREFIXES_DISCOVERY_QUIZ_SLUG =
  'section-d-discovery-prefixes-chaines-carbonees';
export const SECTION_D_ALKYL_ALKANES_DISCOVERY_QUIZ_SLUG =
  'section-d-discovery-groupes-alkyles-alcanes';
export const SECTION_D_CHAIN_NOMENCLATURE_PRACTICE_QUIZ_SLUG =
  'section-d-practice-nomenclature-chaines-carbonees';
export const SECTION_D_CHAIN_NOMENCLATURE_MASTER_QUIZ_SLUG =
  'section-d-master-nomenclature-chaines-carbonees';

export const SECTION_D_CARBON_DEGREE_DISCOVERY_QUESTION_ORDERS: number[] = [
  161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
];
export const SECTION_D_CARBON_FUNCTIONS_PRACTICE_QUESTION_ORDERS: number[] = [
  171, 172, 173, 174, 175, 176, 177, 178, 179, 180,
];
export const SECTION_D_CHAIN_PREFIXES_DISCOVERY_QUESTION_ORDERS: number[] = [
  181, 182, 183, 184, 185, 186, 187, 188, 189, 190,
];
export const SECTION_D_ALKYL_ALKANES_DISCOVERY_QUESTION_ORDERS: number[] = [
  191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
];
export const SECTION_D_CHAIN_NOMENCLATURE_PRACTICE_QUESTION_ORDERS: number[] = [
  201, 202, 203, 204, 205, 206, 207, 208, 209, 210,
];
export const SECTION_D_CHAIN_NOMENCLATURE_MASTER_QUESTION_ORDERS: number[] = [
  211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
];

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_D_CARBON_DEGREE_DISCOVERY_QUIZ_SLUG,
    title: `Degré des atomes de carbone`,
    description: `Reconnaître les carbones primaire, secondaire, tertiaire et quaternaire selon le nombre d'hydrogènes qu'ils portent, à partir de formules développées, semi-développées et topologiques.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_D_ORDER,
    questionOrders: SECTION_D_CARBON_DEGREE_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 2,
    slug: SECTION_D_CARBON_FUNCTIONS_PRACTICE_QUIZ_SLUG,
    title: `Degré des carbones et fonctions chimiques`,
    description: `Distinguer le degré d'un atome de carbone de la classe d'une fonction, en particulier dans les alcools et les molécules comportant un groupe carbonyle.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_D_ORDER,
    questionOrders: SECTION_D_CARBON_FUNCTIONS_PRACTICE_QUESTION_ORDERS,
  },
  {
    order: 3,
    slug: SECTION_D_CHAIN_PREFIXES_DISCOVERY_QUIZ_SLUG,
    title: `Préfixes des chaînes carbonées`,
    description: `Mémoriser et utiliser les préfixes méth-, éth-, prop-, but-, pent-, hex-, hept-, oct-, non- et déc- dans les deux sens de lecture.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_D_ORDER,
    questionOrders: SECTION_D_CHAIN_PREFIXES_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 4,
    slug: SECTION_D_ALKYL_ALKANES_DISCOVERY_QUIZ_SLUG,
    title: `Groupes alkyles et alcanes`,
    description: `Distinguer une molécule d'alcane du groupe alkyle correspondant et associer noms, formules et abréviations usuelles.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_D_ORDER,
    questionOrders: SECTION_D_ALKYL_ALKANES_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 5,
    slug: SECTION_D_CHAIN_NOMENCLATURE_PRACTICE_QUIZ_SLUG,
    title: `Nomenclature des chaînes carbonées`,
    description: `Choisir la chaîne principale, numéroter les substituants et passer entre noms, formules semi-développées et représentations topologiques de chaînes ramifiées simples.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_D_ORDER,
    questionOrders: SECTION_D_CHAIN_NOMENCLATURE_PRACTICE_QUESTION_ORDERS,
  },
  {
    order: 6,
    slug: SECTION_D_CHAIN_NOMENCLATURE_MASTER_QUIZ_SLUG,
    title: `Nomenclature des chaînes carbonées`,
    description: `Mobiliser conjointement le degré des carbones, les préfixes, les groupes alkyles et la nomenclature de molécules ramifiées ou polyfonctionnelles dans des situations proches de l'examen.`,
    stage: 'MASTER',
    sectionOrder: SECTION_D_ORDER,
    questionOrders: SECTION_D_CHAIN_NOMENCLATURE_MASTER_QUESTION_ORDERS,
  },
];

export const SECTION_D_QUESTIONS: SeedQuestion[] = [
  {
    order: 161,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Dans la convention utilisée par la fiche de cours, le degré d'un atome de carbone dépend du nombre d'hydrogènes qu'il porte. Ainsi :`,
    choices: [
      `Un carbone primaire porte trois hydrogènes.`,
      `Un carbone secondaire porte deux hydrogènes.`,
      `Un carbone tertiaire porte un hydrogène.`,
      `Un carbone quaternaire ne porte aucun hydrogène.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `La fiche classe les carbones à partir du nombre d'hydrogènes directement liés : trois, deux, un ou zéro. Cette convention doit être distinguée de la classe d'une fonction alcool.`,
    choiceExplanations: [
      `Un motif $\\mathrm{CH_3-X}$ contient un carbone primaire.`,
      `Un motif $\\mathrm{R-CH_2-X}$ contient un carbone secondaire.`,
      `Un motif $\\mathrm{R-CH(X)-R'}$ contient un carbone tertiaire.`,
      `Un carbone sans hydrogène est qualifié de quaternaire dans la convention du chapitre.`,
    ],
  },
  {
    order: 162,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos du propane $\\mathrm{CH_3-CH_2-CH_3}$ :`,
    choices: [
      `Il possède deux carbones primaires.`,
      `Il possède un carbone secondaire.`,
      `Il possède un carbone tertiaire.`,
      `Il ne possède aucun carbone quaternaire.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Les deux carbones terminaux sont des groupes $\\mathrm{CH_3}$, donc primaires. Le carbone central est un groupe $\\mathrm{CH_2}$, donc secondaire.`,
    choiceExplanations: [
      `Chaque carbone terminal porte trois hydrogènes.`,
      `Le carbone central porte deux hydrogènes.`,
      `Aucun carbone ne porte un seul hydrogène.`,
      `Tous les carbones portent au moins deux hydrogènes.`,
    ],
  },
  {
    order: 163,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos du butane $\\mathrm{CH_3-CH_2-CH_2-CH_3}$ :`,
    choices: [
      `Il possède deux carbones primaires.`,
      `Il possède deux carbones secondaires.`,
      `Ses quatre carbones sont primaires.`,
      `Il ne possède ni carbone tertiaire ni carbone quaternaire.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Les extrémités $\\mathrm{CH_3}$ sont primaires et les deux groupes internes $\\mathrm{CH_2}$ sont secondaires.`,
    choiceExplanations: [
      `Les deux extrémités portent chacune trois hydrogènes.`,
      `Les deux carbones internes portent chacun deux hydrogènes.`,
      `Les carbones internes ne sont pas primaires.`,
      `Aucun carbone ne porte un seul hydrogène ou aucun hydrogène.`,
    ],
  },
  {
    order: 164,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `La formule topologique du 2-méthylpropane est représentée ci-dessous : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: '2-methylpropane-topological',
    },
    choices: [
      `La molécule possède trois carbones primaires.`,
      `Le carbone central est tertiaire selon la convention du cours.`,
      `La molécule possède un carbone secondaire.`,
      `La molécule ne possède aucun carbone quaternaire.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La structure correspond à $\\mathrm{CH_3-CH(CH_3)-CH_3}$. Les trois groupes $\\mathrm{CH_3}$ sont primaires et le carbone central $\\mathrm{CH}$ est tertiaire.`,
    choiceExplanations: [
      `Chacun des trois groupes méthyle porte trois hydrogènes.`,
      `Le carbone central ne porte qu'un seul hydrogène.`,
      `Aucun groupe $\\mathrm{CH_2}$ n'est présent.`,
      `Tous les carbones portent au moins un hydrogène.`,
    ],
  },
  {
    order: 165,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `La formule topologique du 2,2-diméthylpropane est représentée ci-dessous : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: '2-2-dimethylpropane-topological',
    },
    choices: [
      `La molécule possède quatre carbones primaires.`,
      `Le carbone central ne porte aucun hydrogène.`,
      `Le carbone central est quaternaire selon la convention du cours.`,
      `Le carbone central est tertiaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La structure peut s'écrire $\\mathrm{C(CH_3)_4}$. Les quatre carbones périphériques sont primaires et le carbone central, qui ne porte aucun hydrogène, est quaternaire.`,
    choiceExplanations: [
      `Les quatre carbones périphériques sont des groupes $\\mathrm{CH_3}$.`,
      `Ses quatre liaisons sont établies avec des carbones.`,
      `L'absence d'hydrogène conduit à cette classification dans le chapitre.`,
      `Un carbone tertiaire porterait un hydrogène.`,
    ],
  },
  {
    order: 166,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de la propanone $\\mathrm{CH_3-CO-CH_3}$ :`,
    choices: [
      `Les deux carbones des groupes méthyle sont primaires.`,
      `Le carbone du groupe carbonyle ne porte aucun hydrogène.`,
      `Le carbone du groupe carbonyle est quaternaire selon la convention du cours.`,
      `Le carbone du groupe carbonyle est secondaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Une liaison multiple n'empêche pas d'appliquer la convention du cours. Le carbone carbonylé ne porte aucun hydrogène : il est donc classé comme quaternaire dans ce chapitre.`,
    choiceExplanations: [
      `Chaque groupe $\\mathrm{CH_3}$ porte trois hydrogènes.`,
      `Le carbone central est lié aux deux méthyles et à l'oxygène par une double liaison.`,
      `Le critère retenu est l'absence d'hydrogène.`,
      `Un carbone secondaire porterait deux hydrogènes.`,
    ],
  },
  {
    order: 167,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'éthène $\\mathrm{CH_2=CH_2}$ :`,
    choices: [
      `Chaque carbone porte deux hydrogènes.`,
      `Les deux carbones sont secondaires selon la convention du cours.`,
      `La présence d'une double liaison n'empêche pas de compter les hydrogènes portés par chaque carbone.`,
      `La molécule possède un carbone primaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Chaque carbone de l'éthène est un groupe $\\mathrm{CH_2}$. Il est donc secondaire dans la convention fondée sur le nombre d'hydrogènes.`,
    choiceExplanations: [
      `La formule $\\mathrm{CH_2=CH_2}$ l'indique directement.`,
      `Deux hydrogènes correspondent à un carbone secondaire.`,
      `Il faut tenir compte des hydrogènes, quel que soit le type de liaison carbone-carbone.`,
      `Aucun groupe $\\mathrm{CH_3}$ n'est présent.`,
    ],
  },
  {
    order: 168,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'éthanal $\\mathrm{CH_3-CHO}$ :`,
    choices: [
      `Le carbone du groupe $\\mathrm{CH_3}$ est primaire.`,
      `Le carbone du groupe aldéhyde porte un hydrogène et est donc tertiaire selon la convention du cours.`,
      `Le carbone du groupe aldéhyde est quaternaire.`,
      `La molécule contient deux atomes de carbone.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le carbone terminal $\\mathrm{CH_3}$ porte trois hydrogènes. Le carbone du motif $\\mathrm{-CHO}$ porte un hydrogène : il est tertiaire selon la convention de cette fiche.`,
    choiceExplanations: [
      `Trois hydrogènes sont liés au carbone du groupe méthyle.`,
      `Un carbone portant un hydrogène est tertiaire dans la convention du chapitre.`,
      `Un carbone quaternaire ne porterait aucun hydrogène.`,
      `Le groupe méthyle et le carbone aldéhydique donnent deux carbones.`,
    ],
  },
  {
    order: 169,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La molécule $\\mathrm{CH_3-CH(CH_3)-CH_2-CH_3}$ possède :`,
    choices: [
      `Trois carbones primaires.`,
      `Un carbone secondaire.`,
      `Un carbone tertiaire.`,
      `Un carbone quaternaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Cette molécule est le 2-méthylbutane. Elle comporte trois groupes $\\mathrm{CH_3}$, un groupe $\\mathrm{CH_2}$ et un groupe $\\mathrm{CH}$.`,
    choiceExplanations: [
      `Les deux extrémités et le substituant méthyle sont primaires.`,
      `Le groupe $\\mathrm{CH_2}$ est secondaire.`,
      `Le carbone ramifié $\\mathrm{CH}$ est tertiaire.`,
      `Aucun carbone n'est dépourvu d'hydrogène.`,
    ],
  },
  {
    order: 170,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `À propos de la lecture d'une formule topologique comme celle du 2-méthylbutane : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: '2-methylbutane-topological',
    },
    choices: [
      `Chaque extrémité et chaque sommet non étiqueté représente un carbone.`,
      `Les hydrogènes portés par les carbones sont généralement implicites.`,
      `Les hétéroatomes éventuels, comme O ou N, restent explicitement écrits.`,
      `Une formule topologique ne permet jamais de déterminer le degré des carbones.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La formule topologique masque les symboles C et les hydrogènes liés aux carbones, mais elle conserve l'enchaînement et les liaisons. On peut donc reconstituer le nombre d'hydrogènes de chaque carbone.`,
    choiceExplanations: [
      `C'est la règle de lecture fondamentale de cette représentation.`,
      `Ils sont déduits de la tétravalence du carbone.`,
      `Les hétéroatomes ne sont pas omis.`,
      `Le degré peut être retrouvé en complétant mentalement les valences.`,
    ],
  },
  {
    order: 171,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On considère le tert-butanol $\\mathrm{(CH_3)_3C-OH}$.`,
    choices: [
      `Le carbone portant le groupe $\\mathrm{-OH}$ ne porte aucun hydrogène.`,
      `Ce carbone est quaternaire selon la convention de la fiche.`,
      `La fonction alcool est tertiaire.`,
      `Les trois carbones des groupes méthyle sont primaires.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Le même carbone peut être qualifié de quaternaire d'après le nombre d'hydrogènes qu'il porte, tout en portant une fonction alcool tertiaire parce qu'il est lié à trois autres carbones. Les deux classifications ne répondent pas au même critère.`,
    choiceExplanations: [
      `Le carbone fonctionnel est lié à trois méthyles et à l'oxygène.`,
      `Il ne porte aucun hydrogène.`,
      `Le carbone fonctionnel est lié à trois carbones.`,
      `Chaque méthyle porte trois hydrogènes.`,
    ],
  },
  {
    order: 172,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On considère le propan-2-ol $\\mathrm{CH_3-CH(OH)-CH_3}$.`,
    choices: [
      `Le carbone portant le groupe $\\mathrm{-OH}$ porte un hydrogène.`,
      `Ce carbone est tertiaire selon la convention du cours.`,
      `La fonction alcool est secondaire.`,
      `Les expressions « carbone tertiaire » et « alcool tertiaire » sont toujours équivalentes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le carbone fonctionnel est un groupe $\\mathrm{CH}$ : il est tertiaire selon le nombre d'hydrogènes. Mais il n'est lié qu'à deux autres carbones : la fonction alcool est secondaire.`,
    choiceExplanations: [
      `Le motif central est $\\mathrm{CH(OH)}$.`,
      `Un carbone portant un hydrogène est tertiaire dans la fiche.`,
      `Deux voisins carbonés définissent un alcool secondaire.`,
      `Les critères de classification ne sont pas les mêmes.`,
    ],
  },
  {
    order: 173,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On considère le propan-1-ol $\\mathrm{CH_3-CH_2-CH_2-OH}$.`,
    choices: [
      `Le carbone portant le groupe $\\mathrm{-OH}$ est secondaire selon la convention du cours.`,
      `La fonction alcool est primaire.`,
      `Le carbone terminal opposé au groupe $\\mathrm{-OH}$ est primaire.`,
      `La fonction alcool est secondaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le carbone fonctionnel est un groupe $\\mathrm{CH_2}$ et porte donc deux hydrogènes : il est secondaire dans la convention de la fiche. Cependant, il n'est lié qu'à un seul carbone : l'alcool est primaire.`,
    choiceExplanations: [
      `Deux hydrogènes sont directement liés au carbone fonctionnel.`,
      `Un seul voisin carboné définit un alcool primaire.`,
      `Le groupe opposé est un $\\mathrm{CH_3}$.`,
      `La classe de l'alcool ne dépend pas du nombre d'hydrogènes porté par le carbone.`,
    ],
  },
  {
    order: 174,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'acide éthanoïque $\\mathrm{CH_3-COOH}$ :`,
    choices: [
      `Le carbone du groupe méthyle est primaire.`,
      `Le carbone du groupe carboxyle ne porte aucun hydrogène.`,
      `Le carbone du groupe carboxyle est quaternaire selon la convention du cours.`,
      `Le groupe $\\mathrm{-OH}$ du carboxyle constitue une fonction alcool indépendante.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le carbone carbonylé du groupe $\\mathrm{-COOH}$ ne porte aucun hydrogène. Le groupe hydroxyle appartient à la fonction acide carboxylique et ne constitue pas une fonction alcool indépendante.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{CH_3}$ porte trois hydrogènes.`,
      `Il est lié au méthyle et à deux oxygènes.`,
      `L'absence d'hydrogène conduit à cette classification.`,
      `Le motif entier $\\mathrm{-COOH}$ définit l'acide carboxylique.`,
    ],
  },
  {
    order: 175,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `L'acide lactique peut être représenté par $\\mathrm{CH_3-CH(OH)-COOH}$.`,
    choices: [
      `Le carbone portant la fonction alcool est tertiaire selon la convention du cours.`,
      `La fonction alcool est secondaire.`,
      `Le carbone du groupe carboxyle est quaternaire selon la convention du cours.`,
      `Le carbone portant la fonction alcool est quaternaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le carbone $\\mathrm{CH(OH)}$ porte un hydrogène mais est lié à deux carbones : il est tertiaire selon la fiche et porte un alcool secondaire. Le carbone carboxylique ne porte aucun hydrogène. Dans l'organisme, l'acide lactique est surtout présent sous forme de lactate, impliqué dans le métabolisme énergétique.`,
    choiceExplanations: [
      `Le carbone fonctionnel est un groupe $\\mathrm{CH}$.`,
      `Il possède deux voisins carbonés.`,
      `Le carbone carbonylé est dépourvu d'hydrogène.`,
      `Un carbone quaternaire ne porte aucun hydrogène.`,
    ],
  },
  {
    order: 176,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de la propanone $\\mathrm{CH_3-CO-CH_3}$ :`,
    choices: [
      `Le carbone carbonylé ne porte aucun hydrogène.`,
      `Il est quaternaire selon la convention de la fiche.`,
      `Les deux autres carbones sont primaires.`,
      `La molécule possède une fonction alcool tertiaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le carbone du groupe cétone est sans hydrogène et les deux méthyles sont primaires. La molécule ne possède aucun groupe hydroxyle.`,
    choiceExplanations: [
      `La formule $\\mathrm{-CO-}$ ne comporte aucun H sur le carbone central.`,
      `C'est la catégorie retenue pour un carbone sans hydrogène.`,
      `Les groupes $\\mathrm{CH_3}$ portent trois hydrogènes.`,
      `La fonction présente est une cétone.`,
    ],
  },
  {
    order: 177,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `La valine est un acide aminé entrant dans la composition des protéines. Sa formule topologique est représentée ci-dessous : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'valine-topological',
    },
    choices: [
      `Le carbone du groupe carboxyle est quaternaire selon la convention du cours.`,
      `Le carbone portant le groupe amine porte un hydrogène et est tertiaire selon cette convention.`,
      `Le carbone ramifié de la chaîne latérale porte un hydrogène et est également tertiaire.`,
      `Les deux carbones des groupes méthyle sont secondaires.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La valine comporte un carbone carboxylique sans hydrogène, deux carbones $\\mathrm{CH}$ et deux groupes $\\mathrm{CH_3}$. Son contexte biologique n'est qu'une illustration : la question porte sur la lecture de la chaîne carbonée.`,
    choiceExplanations: [
      `Le carbone carbonylé ne porte aucun hydrogène.`,
      `Le carbone central est un groupe $\\mathrm{CH}$.`,
      `Le centre de la ramification est également un groupe $\\mathrm{CH}$.`,
      `Les groupes méthyle sont primaires.`,
    ],
  },
  {
    order: 178,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On considère l'acide 2-méthylpropanoïque $\\mathrm{(CH_3)_2CH-COOH}$.`,
    choices: [
      `Il possède deux carbones primaires.`,
      `Le carbone ramifié $\\mathrm{CH}$ est tertiaire selon la convention du cours.`,
      `Le carbone du groupe carboxyle est quaternaire selon cette convention.`,
      `Il possède un carbone secondaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les deux méthyles sont primaires, le carbone $\\mathrm{CH}$ est tertiaire et le carbone carboxylique sans hydrogène est quaternaire. Aucun groupe $\\mathrm{CH_2}$ n'est présent.`,
    choiceExplanations: [
      `Les deux groupes $\\mathrm{CH_3}$ sont primaires.`,
      `Il ne porte qu'un hydrogène.`,
      `Le carbone carbonylé ne porte aucun hydrogène.`,
      `Un carbone secondaire devrait être un groupe $\\mathrm{CH_2}$.`,
    ],
  },
  {
    order: 179,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Concernant les carbones qualifiés de quaternaires dans cette fiche :`,
    choices: [
      `Un carbone carbonylé peut appartenir à cette catégorie s'il ne porte aucun hydrogène.`,
      `Il n'est pas nécessaire qu'il soit lié par quatre liaisons simples à quatre autres carbones.`,
      `Il doit toujours être au centre d'un motif $\\mathrm{C(CH_3)_4}$.`,
      `Cette classification doit être distinguée de la classe primaire, secondaire ou tertiaire d'un alcool.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le cours emploie ici une classification fondée sur le nombre d'hydrogènes portés par le carbone. Un carbone sans hydrogène peut donc être carbonylé ou engagé dans d'autres motifs.`,
    choiceExplanations: [
      `La propanone en fournit un exemple.`,
      `Le nombre d'hydrogènes, et non le seul nombre de liaisons carbone-carbone, est le critère présenté.`,
      `Il existe de nombreux autres carbones sans hydrogène.`,
      `La classe de l'alcool dépend du nombre de carbones liés au carbone fonctionnel.`,
    ],
  },
  {
    order: 180,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les associations suivantes :`,
    choices: [
      `Dans $\\mathrm{CH_3-CH_2-OH}$, le carbone portant $\\mathrm{-OH}$ est secondaire selon le cours.`,
      `Dans $\\mathrm{CH_3-CO-CH_3}$, le carbone carbonylé est quaternaire selon le cours.`,
      `Dans $\\mathrm{CH_3-CH(OH)-CH_3}$, le carbone portant $\\mathrm{-OH}$ est tertiaire selon le cours.`,
      `Le premier composé est un alcool secondaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les trois classifications de carbones sont correctes selon le nombre d'hydrogènes. En revanche, l'éthanol est un alcool primaire, car le carbone fonctionnel n'est lié qu'à un seul autre carbone.`,
    choiceExplanations: [
      `Le carbone est un groupe $\\mathrm{CH_2}$.`,
      `Le carbone du carbonyle ne porte aucun hydrogène.`,
      `Le carbone fonctionnel est un groupe $\\mathrm{CH}$.`,
      `La classe de l'alcool dépend de ses voisins carbonés.`,
    ],
  },
  {
    order: 181,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des premiers préfixes de nomenclature :`,
    choices: [
      `Méth- correspond à un carbone.`,
      `Éth- correspond à deux carbones.`,
      `Prop- correspond à trois carbones.`,
      `Pent- correspond à quatre carbones.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La série commence par méth-, éth-, prop-, but- et pent- pour respectivement un, deux, trois, quatre et cinq carbones.`,
    choiceExplanations: [
      `Exemple : méthane.`,
      `Exemple : éthane.`,
      `Exemple : propane.`,
      `Quatre carbones correspondent à but- ; pent- correspond à cinq.`,
    ],
  },
  {
    order: 182,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les associations suivantes :`,
    choices: [
      `Pent- : cinq carbones.`,
      `Hex- : six carbones.`,
      `Hept- : sept carbones.`,
      `Oct- : huit carbones.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Les préfixes de cinq à huit carbones sont pent-, hex-, hept- et oct-.`,
    choiceExplanations: [
      `Pent- correspond à cinq.`,
      `Hex- correspond à six.`,
      `Hept- correspond à sept.`,
      `Oct- correspond à huit.`,
    ],
  },
  {
    order: 183,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant les préfixes correspondant aux chaînes les plus longues du tableau du cours :`,
    choices: [
      `Non- correspond à neuf carbones.`,
      `Déc- correspond à dix carbones.`,
      `Oct- correspond à huit carbones.`,
      `Hex- correspond à sept carbones.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La fin de la série étudiée est hept- pour sept, oct- pour huit, non- pour neuf et déc- pour dix.`,
    choiceExplanations: [
      `C'est l'association correcte.`,
      `C'est l'association correcte.`,
      `C'est l'association correcte.`,
      `Sept carbones correspondent à hept-.`,
    ],
  },
  {
    order: 184,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Quel préfixe indique une chaîne principale comportant six atomes de carbone ?`,
    choices: [
      `Pent-.`,
      `Hex-.`,
      `Hept-.`,
      `Oct-.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `Une chaîne de six carbones utilise le préfixe hex-, comme dans hexane.`,
    choiceExplanations: [
      `Pent- correspond à cinq carbones.`,
      `C'est la bonne réponse.`,
      `Hept- correspond à sept carbones.`,
      `Oct- correspond à huit carbones.`,
    ],
  },
  {
    order: 185,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `La formule topologique de l'heptane est représentée ci-dessous : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'heptane-topological',
    },
    choices: [
      `Elle comporte sept atomes de carbone.`,
      `Le préfixe approprié est hept-.`,
      `Sa formule brute est $\\mathrm{C_7H_{16}}$.`,
      `Il s'agit de l'octane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Chaque extrémité et chaque sommet du zigzag représente un carbone. Le comptage donne sept carbones, donc l'heptane, de formule $\\mathrm{C_7H_{16}}$.`,
    choiceExplanations: [
      `Le comptage des sommets et extrémités donne sept.`,
      `Hept- est le préfixe de sept carbones.`,
      `Un alcane saturé à sept carbones possède seize hydrogènes.`,
      `L'octane comporterait huit carbones.`,
    ],
  },
  {
    order: 186,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Dans le nom 2-méthylbutane :`,
    choices: [
      `Le préfixe but- indique une chaîne principale de quatre carbones.`,
      `Le substituant méthyle apporte un carbone supplémentaire.`,
      `La molécule comporte au total cinq carbones.`,
      `La chaîne principale utilise le préfixe pent-.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le nom distingue la chaîne principale de quatre carbones et le substituant méthyle d'un carbone. Le total est donc de cinq carbones, mais la chaîne principale reste un butane.`,
    choiceExplanations: [
      `But- correspond à quatre carbones.`,
      `Méthyle correspond à $\\mathrm{CH_3-}$.`,
      `Quatre plus un donnent cinq.`,
      `La plus longue chaîne de cette structure ne comporte que quatre carbones.`,
    ],
  },
  {
    order: 187,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `La valine, acide aminé présent dans les protéines, peut s'écrire $\\mathrm{HOOC-CH(NH_2)-CH(CH_3)_2}$.`,
    choices: [
      `La chaîne principale contenant le groupe carboxyle comporte quatre carbones.`,
      `Le nom systématique utilise donc le préfixe but-.`,
      `Un substituant méthyle est porté par cette chaîne.`,
      `La chaîne principale comporte cinq carbones.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La plus longue chaîne contenant le carbone du groupe carboxyle compte quatre carbones. La valine est ainsi nommée à partir de l'acide butanoïque, avec des substituants amino et méthyle.`,
    choiceExplanations: [
      `Le carbone du carboxyle appartient à la chaîne principale.`,
      `Quatre carbones correspondent à but-.`,
      `L'un des deux méthyles de la ramification appartient à la chaîne et l'autre devient substituant.`,
      `La molécule possède cinq carbones au total, mais pas dans une seule chaîne continue.`,
    ],
  },
  {
    order: 188,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos du préfixe oct- :`,
    choices: [
      `Il correspond à huit carbones.`,
      `L'octane est un alcane à huit carbones.`,
      `Un groupe octyle possède huit carbones.`,
      `Il correspond à neuf carbones.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le préfixe oct- reste associé à huit carbones, qu'il soit utilisé dans le nom d'un alcane ou d'un groupe alkyle.`,
    choiceExplanations: [
      `C'est la valeur du préfixe.`,
      `Le suffixe -ane indique l'alcane.`,
      `Le suffixe -yle indique le groupe alkyle.`,
      `Neuf carbones correspondent à non-.`,
    ],
  },
  {
    order: 189,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La formule brute $\\mathrm{C_7H_{16}}$ peut correspondre à un alcane acyclique saturé. À son sujet :`,
    choices: [
      `Son nom non ramifié est heptane.`,
      `Il contient sept carbones.`,
      `Il utilise le préfixe hept-.`,
      `Il s'agit du groupe heptyle.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'heptane est la molécule d'alcane à sept carbones. Le groupe heptyle aurait perdu un hydrogène et s'écrirait $\\mathrm{C_7H_{15}-}$.`,
    choiceExplanations: [
      `Hept- associé à -ane donne heptane.`,
      `L'indice 7 indique le nombre de carbones.`,
      `C'est le préfixe correspondant.`,
      `Un groupe alkyle n'est pas une molécule d'alcane complète.`,
    ],
  },
  {
    order: 190,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les associations suivantes :`,
    choices: [
      `Méth- : un carbone.`,
      `Non- : neuf carbones.`,
      `Déc- : dix carbones.`,
      `Tous les items précédents sont vrais.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Les trois associations sont correctes ; l'item attrape-tout est donc également vrai.`,
    choiceExplanations: [
      `Méth- correspond au premier terme de la série.`,
      `Non- correspond à neuf.`,
      `Déc- correspond à dix.`,
      `Les items A, B et C sont tous vrais.`,
    ],
  },
  {
    order: 191,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos d'un groupe alkyle :`,
    choices: [
      `Il peut être obtenu formellement en retirant un hydrogène à un alcane.`,
      `Son nom utilise le suffixe -yle.`,
      `Il possède une valence disponible pour se lier au reste d'une molécule.`,
      `Il possède toujours exactement la même formule que l'alcane correspondant.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Un groupe alkyle contient un hydrogène de moins que l'alcane correspondant et représente un fragment lié au reste de la molécule.`,
    choiceExplanations: [
      `Méthane devient méthyle après retrait formel d'un H.`,
      `Exemples : méthyle, éthyle, propyle.`,
      `Le tiret dans $\\mathrm{CH_3-}$ représente la liaison au reste de la structure.`,
      `Le groupe alkyle possède un hydrogène de moins.`,
    ],
  },
  {
    order: 192,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `On compare le méthane $\\mathrm{CH_4}$ et le groupe méthyle $\\mathrm{CH_3-}$.`,
    choices: [
      `Le méthane est un alcane.`,
      `Le méthyle est un groupe alkyle.`,
      `Le groupe méthyle possède un hydrogène de moins que le méthane.`,
      `Le méthane et le méthyle désignent deux molécules autonomes identiques.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le méthane est une molécule complète, tandis que le méthyle représente un fragment lié à une autre partie de molécule.`,
    choiceExplanations: [
      `Le suffixe -ane caractérise l'alcane.`,
      `Le suffixe -yle caractérise le substituant.`,
      `Les formules sont $\\mathrm{CH_4}$ et $\\mathrm{CH_3-}$.`,
      `Le groupe méthyle possède une liaison disponible.`,
    ],
  },
  {
    order: 193,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'éthane et du groupe éthyle :`,
    choices: [
      `L'éthane possède la formule $\\mathrm{C_2H_6}$.`,
      `Le groupe éthyle possède la formule $\\mathrm{C_2H_5-}$.`,
      `Le groupe éthyle peut être abrégé Et.`,
      `Le groupe éthyle est un alcane complet.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le passage de l'éthane à l'éthyle correspond à la perte formelle d'un hydrogène et à l'apparition d'une liaison disponible.`,
    choiceExplanations: [
      `C'est la formule de l'alcane à deux carbones.`,
      `Le groupe alkyle possède un hydrogène de moins.`,
      `Et est l'abréviation usuelle du groupe éthyle.`,
      `L'éthyle est un fragment substituant.`,
    ],
  },
  {
    order: 194,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les abréviations usuelles du cours :`,
    choices: [
      `Me désigne méthyle.`,
      `Et désigne éthyle.`,
      `Pr désigne propyle.`,
      `Bu désigne butyle.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Les abréviations Me, Et, Pr et Bu correspondent respectivement aux groupes méthyle, éthyle, propyle et butyle.`,
    choiceExplanations: [
      `Me correspond à $\\mathrm{CH_3-}$.`,
      `Et correspond à $\\mathrm{C_2H_5-}$.`,
      `Pr correspond à $\\mathrm{C_3H_7-}$.`,
      `Bu correspond à $\\mathrm{C_4H_9-}$.`,
    ],
  },
  {
    order: 195,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les associations formule–groupe :`,
    choices: [
      `$\\mathrm{CH_3-}$ : méthyle.`,
      `$\\mathrm{C_2H_5-}$ : éthyle.`,
      `$\\mathrm{C_3H_7-}$ : propyle.`,
      `$\\mathrm{C_4H_9-}$ : butane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le groupe $\\mathrm{C_4H_9-}$ est le butyle. Le butane complet possède la formule $\\mathrm{C_4H_{10}}$.`,
    choiceExplanations: [
      `C'est le groupe à un carbone.`,
      `C'est le groupe à deux carbones.`,
      `C'est le groupe à trois carbones.`,
      `Le suffixe et la formule correspondent au butyle, pas au butane.`,
    ],
  },
  {
    order: 196,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les associations nom–formule :`,
    choices: [
      `Méthane : $\\mathrm{CH_4}$.`,
      `Éthane : $\\mathrm{C_2H_6}$.`,
      `Propane : $\\mathrm{C_3H_8}$.`,
      `Butane : $\\mathrm{C_4H_{10}}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Ces quatre formules sont celles des premiers alcanes acycliques saturés.`,
    choiceExplanations: [
      `Un carbone donne le méthane.`,
      `Deux carbones donnent l'éthane.`,
      `Trois carbones donnent le propane.`,
      `Quatre carbones donnent le butane.`,
    ],
  },
  {
    order: 197,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Pour les alcanes acycliques saturés simples :`,
    choices: [
      `La formule générale est $\\mathrm{C_nH_{2n+2}}$.`,
      `Le pentane possède la formule $\\mathrm{C_5H_{12}}$.`,
      `L'hexane possède la formule $\\mathrm{C_6H_{14}}$.`,
      `Le butane possède la formule $\\mathrm{C_4H_9}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La formule $\\mathrm{C_nH_{2n+2}}$ permet de retrouver les formules des alcanes. $\\mathrm{C_4H_9-}$ correspond à un groupe butyle, pas au butane.`,
    choiceExplanations: [
      `Cette relation est vérifiée par les premiers alcanes.`,
      `Pour $n=5$, on obtient douze hydrogènes.`,
      `Pour $n=6$, on obtient quatorze hydrogènes.`,
      `Le butane complet est $\\mathrm{C_4H_{10}}$.`,
    ],
  },
  {
    order: 198,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `On compare le propane $\\mathrm{C_3H_8}$ et le groupe propyle $\\mathrm{C_3H_7-}$.`,
    choices: [
      `Le propane est un alcane.`,
      `Le propyle est un groupe alkyle.`,
      `Le propyle possède une liaison disponible vers le reste d'une molécule.`,
      `Les deux noms utilisent le même suffixe.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le radical propyle dérive formellement du propane après retrait d'un hydrogène. Les suffixes -ane et -yle permettent de les distinguer.`,
    choiceExplanations: [
      `Le suffixe -ane l'indique.`,
      `Le suffixe -yle l'indique.`,
      `Le tiret final représente cette liaison.`,
      `Les suffixes sont différents.`,
    ],
  },
  {
    order: 199,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Le propyle linéaire $\\mathrm{CH_3-CH_2-CH_2-}$ et l'isopropyle $\\mathrm{(CH_3)_2CH-}$ :`,
    choices: [
      `Possèdent tous deux trois atomes de carbone.`,
      `Possèdent tous deux la formule globale $\\mathrm{C_3H_7-}$.`,
      `Diffèrent par le carbone utilisé pour la liaison au reste de la molécule.`,
      `Représentent exactement le même enchaînement atomique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Ces deux groupes sont des isomères de constitution : la liaison au reste de la molécule se fait à l'extrémité pour le propyle et sur le carbone central pour l'isopropyle.`,
    choiceExplanations: [
      `Le nombre total de carbones est identique.`,
      `Ils dérivent tous deux du propane par perte formelle d'un H.`,
      `Le point d'attache n'est pas le même.`,
      `Leur ramification diffère.`,
    ],
  },
  {
    order: 200,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les affirmations suivantes :`,
    choices: [
      `Le groupe méthyle dérive du méthane.`,
      `Le groupe butyle possède la formule $\\mathrm{C_4H_9-}$.`,
      `Le suffixe -ane désigne un alcane complet.`,
      `Tous les items précédents sont vrais.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Les trois propositions sont correctes ; l'item attrape-tout est donc vrai.`,
    choiceExplanations: [
      `Le méthyle correspond à $\\mathrm{CH_3-}$.`,
      `Il possède un hydrogène de moins que le butane.`,
      `Exemples : méthane, éthane, propane.`,
      `Les items A, B et C sont vrais.`,
    ],
  },
  {
    order: 201,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de $\\mathrm{CH_3-CH(CH_3)-CH_2-CH_3}$ :`,
    choices: [
      `La chaîne principale la plus longue comporte quatre carbones.`,
      `Un substituant méthyle est porté par le carbone 2.`,
      `Le nom correct est 2-méthylbutane.`,
      `Le nom 3-méthylbutane doit être préféré.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La numérotation part de l'extrémité la plus proche du substituant, ce qui lui attribue l'indice 2 plutôt que 3.`,
    choiceExplanations: [
      `Aucune chaîne continue de cinq carbones n'est possible.`,
      `Le substituant est rencontré sur le deuxième carbone.`,
      `Le nom associe l'indice, le substituant et la chaîne principale.`,
      `La règle des plus petits indices impose 2.`,
    ],
  },
  {
    order: 202,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `La formule topologique suivante représente le 2-méthylbutane : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: '2-methylbutane-topological',
    },
    choices: [
      `La molécule possède cinq carbones au total.`,
      `La chaîne principale la plus longue comporte quatre carbones.`,
      `Elle possède un substituant méthyle.`,
      `La chaîne principale est un pentane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La structure comporte cinq carbones au total, mais la plus longue chaîne continue n'en contient que quatre. Le cinquième carbone constitue un substituant méthyle.`,
    choiceExplanations: [
      `Quatre carbones de chaîne et un substituant donnent cinq.`,
      `Il n'existe pas de parcours continu de cinq carbones.`,
      `La ramification d'un carbone est un méthyle.`,
      `Le parent est le butane.`,
    ],
  },
  {
    order: 203,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La formule $\\mathrm{C(CH_3)_4}$ correspond au 2,2-diméthylpropane.`,
    choices: [
      `La chaîne principale est un propane.`,
      `Deux substituants méthyle sont portés par le carbone 2.`,
      `La molécule possède cinq carbones au total.`,
      `La molécule est le pentane linéaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La plus longue chaîne comporte trois carbones. Les deux autres méthyles sont tous deux liés au carbone central, d'où le nom 2,2-diméthylpropane.`,
    choiceExplanations: [
      `La chaîne la plus longue relie deux méthyles en passant par le carbone central.`,
      `Les deux ramifications sont sur le même carbone.`,
      `Un carbone central et quatre méthyles donnent cinq carbones.`,
      `Le pentane linéaire ne possède aucune ramification.`,
    ],
  },
  {
    order: 204,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On considère $\\mathrm{CH_3-CH(CH_3)-CH(CH_3)-CH_3}$.`,
    choices: [
      `La chaîne principale comporte quatre carbones.`,
      `Deux substituants méthyle sont présents.`,
      `Les substituants occupent les positions 2 et 3.`,
      `Le nom correct est 2,3-diméthylbutane.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `La plus longue chaîne est un butane. Deux méthyles sont portés par les carbones 2 et 3, ce qui conduit au nom 2,3-diméthylbutane.`,
    choiceExplanations: [
      `Aucune chaîne continue de cinq carbones n'existe.`,
      `Les deux groupes latéraux sont des méthyles.`,
      `La numérotation est identique depuis les deux extrémités.`,
      `Le nom rassemble correctement tous les éléments.`,
    ],
  },
  {
    order: 205,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `La formule topologique suivante représente une chaîne ramifiée : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: '3-methylhexane-topological',
    },
    choices: [
      `La chaîne principale la plus longue comporte six carbones.`,
      `Le substituant méthyle est porté par le carbone 3.`,
      `La molécule possède sept carbones au total.`,
      `Le nom 4-méthylhexane doit être préféré.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La numérotation depuis l'extrémité la plus proche de la ramification donne l'indice 3. La molécule est donc le 3-méthylhexane.`,
    choiceExplanations: [
      `La plus longue chaîne continue contient six sommets et extrémités.`,
      `La ramification est rencontrée au troisième carbone.`,
      `Six carbones de chaîne plus un méthyle donnent sept.`,
      `L'indice 3 est plus petit que 4.`,
    ],
  },
  {
    order: 206,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `L'isooctane, utilisé comme composé de référence pour l'indice d'octane des carburants, possède la formule topologique suivante : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'isooctane-topological',
    },
    choices: [
      `La molécule comporte huit carbones.`,
      `La chaîne principale est un pentane.`,
      `Trois substituants méthyle occupent les positions 2, 2 et 4.`,
      `Son nom systématique est 2,2,4-triméthylpentane.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `L'isooctane est un exemple classique de chaîne très ramifiée. La plus longue chaîne compte cinq carbones et porte trois méthyles aux positions 2, 2 et 4.`,
    choiceExplanations: [
      `Cinq carbones de chaîne et trois méthyles donnent huit.`,
      `Aucune chaîne continue plus longue n'est possible.`,
      `Le comptage des ramifications donne ces trois indices.`,
      `C'est le nom systématique correct.`,
    ],
  },
  {
    order: 207,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Pour nommer une chaîne carbonée ramifiée simple :`,
    choices: [
      `On recherche d'abord la chaîne carbonée principale la plus longue.`,
      `On numérote de façon à obtenir les indices de position les plus petits.`,
      `Les substituants différents sont cités par ordre alphabétique.`,
      `On choisit volontairement la chaîne principale la plus courte.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La nomenclature suit un ordre logique : choix de la chaîne principale, numérotation, identification puis classement des substituants.`,
    choiceExplanations: [
      `La longueur de la chaîne détermine le nom du parent.`,
      `La numérotation minimise les indices.`,
      `Par exemple, éthyl- est cité avant méthyl-.`,
      `La règle impose au contraire la chaîne la plus longue.`,
    ],
  },
  {
    order: 208,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `La leucine est un acide aminé entrant dans la composition des protéines. Sa formule topologique est représentée ci-dessous : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'leucine-topological',
    },
    choices: [
      `La chaîne principale contenant le groupe carboxyle comporte cinq carbones.`,
      `Le groupe amine est porté par le carbone 2.`,
      `Un substituant méthyle est porté par le carbone 4.`,
      `Le nom systématique est l'acide 2-amino-3-méthylpentanoïque.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La leucine est l'acide 2-amino-4-méthylpentanoïque. Le contexte biologique aide à donner du sens à la molécule, mais la compétence évaluée reste la lecture de la chaîne carbonée.`,
    choiceExplanations: [
      `Le carbone du groupe carboxyle est inclus dans la chaîne principale.`,
      `La numérotation commence au carbone carboxylique.`,
      `La ramification se trouve sur le carbone 4.`,
      `L'indice correct du méthyle est 4.`,
    ],
  },
  {
    order: 209,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On considère $\\mathrm{CH_3-CH(CH_3)-CH(CH_2CH_3)-CH_2-CH_3}$.`,
    choices: [
      `La chaîne principale la plus longue comporte cinq carbones.`,
      `Les substituants sont éthyle en position 3 et méthyle en position 2.`,
      `Le substituant éthyle est cité avant le substituant méthyle.`,
      `Le nom correct est 2-éthyl-3-méthylpentane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La chaîne principale est un pentane. La numérotation donne les indices 2 et 3, et l'ordre alphabétique impose d'écrire éthyl avant méthyl : 3-éthyl-2-méthylpentane.`,
    choiceExplanations: [
      `Aucun chemin continu de six carbones n'est possible.`,
      `La numérotation la plus favorable donne 2 au méthyle et 3 à l'éthyle.`,
      `La lettre E précède la lettre M.`,
      `Les indices sont associés aux mauvais substituants.`,
    ],
  },
  {
    order: 210,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos d'une formule topologique :`,
    choices: [
      `Elle permet de retrouver l'enchaînement des atomes de carbone.`,
      `Les symboles C et les hydrogènes portés par les carbones sont généralement omis.`,
      `Elle peut fournir les mêmes informations de connectivité qu'une formule semi-développée.`,
      `Chaque segment représente obligatoirement un atome.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Un segment représente une liaison ; les atomes de carbone sont situés aux extrémités et aux sommets. La représentation reste donc très informative malgré ses simplifications.`,
    choiceExplanations: [
      `Les liaisons permettent de suivre la chaîne.`,
      `C'est le principe de la notation topologique.`,
      `On peut reconstruire les groupes $\\mathrm{CH_3}$, $\\mathrm{CH_2}$, etc.`,
      `Un segment relie deux atomes ; il ne représente pas lui-même un atome.`,
    ],
  },
  {
    order: 211,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `L'isooctane, ou 2,2,4-triméthylpentane, est représenté ci-dessous : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'isooctane-topological',
    },
    choices: [
      `Il possède cinq carbones primaires.`,
      `Il possède un carbone secondaire.`,
      `Il possède un carbone tertiaire.`,
      `Il possède un carbone quaternaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `La formule semi-développée est $\\mathrm{CH_3-C(CH_3)_2-CH_2-CH(CH_3)-CH_3}$. On y compte cinq groupes $\\mathrm{CH_3}$, un $\\mathrm{CH_2}$, un $\\mathrm{CH}$ et un carbone sans hydrogène.`,
    choiceExplanations: [
      `Les cinq groupes méthyle sont primaires.`,
      `Le groupe $\\mathrm{CH_2}$ est secondaire.`,
      `Le groupe $\\mathrm{CH}$ est tertiaire.`,
      `Le carbone $\\mathrm{C(CH_3)_3}$ ne porte aucun hydrogène.`,
    ],
  },
  {
    order: 212,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `La valine est l'un des acides aminés à chaîne ramifiée présents dans les protéines : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'valine-topological',
    },
    choices: [
      `La molécule possède cinq carbones au total.`,
      `Elle possède deux carbones primaires.`,
      `Elle possède deux carbones tertiaires selon la convention du cours.`,
      `Le carbone du groupe carboxyle est secondaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La valine contient deux groupes $\\mathrm{CH_3}$, deux groupes $\\mathrm{CH}$ et un carbone carboxylique sans hydrogène. Elle comporte donc deux carbones primaires, deux tertiaires et un quaternaire selon la fiche.`,
    choiceExplanations: [
      `Quatre carbones forment la chaîne et un méthyle constitue la ramification.`,
      `Les deux méthyles sont primaires.`,
      `Le carbone portant l'amine et le carbone ramifié portent chacun un hydrogène.`,
      `Le carbone carboxylique ne porte aucun hydrogène.`,
    ],
  },
  {
    order: 213,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `La leucine est représentée ci-dessous : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'leucine-topological',
    },
    choices: [
      `Elle possède six carbones au total.`,
      `Elle possède deux carbones primaires.`,
      `Elle possède un carbone secondaire.`,
      `Elle ne possède aucun carbone quaternaire selon la convention du cours.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La leucine comporte deux groupes $\\mathrm{CH_3}$, un groupe $\\mathrm{CH_2}$, deux groupes $\\mathrm{CH}$ et un carbone carboxylique sans hydrogène.`,
    choiceExplanations: [
      `Le comptage inclut le carbone du groupe carboxyle.`,
      `Les deux méthyles terminaux sont primaires.`,
      `Le groupe $\\mathrm{CH_2}$ de la chaîne latérale est secondaire.`,
      `Le carbone carboxylique est quaternaire selon la convention du chapitre.`,
    ],
  },
  {
    order: 214,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On compare la leucine et l'isoleucine, deux acides aminés à chaîne ramifiée. L'isoleucine est représentée ci-dessous : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'isoleucine-topological',
    },
    choices: [
      `La leucine et l'isoleucine ont la même formule brute $\\mathrm{C_6H_{13}NO_2}$.`,
      `Elles possèdent un enchaînement différent des atomes de carbone.`,
      `Elles sont des isomères de constitution.`,
      `Elles possèdent, selon la convention du cours, le même nombre de carbones primaires, secondaires, tertiaires et quaternaires.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `La leucine et l'isoleucine ont la même composition mais des ramifications différentes. Dans les deux cas, on compte deux $\\mathrm{CH_3}$, un $\\mathrm{CH_2}$, deux $\\mathrm{CH}$ et un carbone carboxylique sans hydrogène.`,
    choiceExplanations: [
      `Les deux molécules comportent six carbones, treize hydrogènes, un azote et deux oxygènes.`,
      `La position de la ramification change.`,
      `Même formule brute et connectivité différente définissent l'isomérie de constitution.`,
      `Le bilan est 2 primaires, 1 secondaire, 2 tertiaires et 1 quaternaire.`,
    ],
  },
  {
    order: 215,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On compare le tert-butanol $\\mathrm{(CH_3)_3C-OH}$ et le 2-méthylpropan-1-ol $\\mathrm{(CH_3)_2CH-CH_2OH}$.`,
    choices: [
      `Les deux molécules ont la même formule brute $\\mathrm{C_4H_{10}O}$.`,
      `La première possède une fonction alcool tertiaire.`,
      `La seconde possède une fonction alcool primaire.`,
      `Les carbones portant le groupe $\\mathrm{-OH}$ ont le même degré selon la convention du cours.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Dans le tert-butanol, le carbone fonctionnel ne porte aucun hydrogène : il est quaternaire selon la fiche. Dans le 2-méthylpropan-1-ol, le carbone fonctionnel est un $\\mathrm{CH_2}$ : il est secondaire selon la fiche.`,
    choiceExplanations: [
      `Ce sont des isomères de position de même formule brute et de même fonction alcool.`,
      `Le carbone fonctionnel possède trois voisins carbonés.`,
      `Le carbone fonctionnel ne possède qu'un voisin carboné.`,
      `Le premier est sans hydrogène, le second en porte deux.`,
    ],
  },
  {
    order: 216,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `À propos du 2,2-diméthylpropane $\\mathrm{C(CH_3)_4}$ :`,
    choices: [
      `Sa formule brute est $\\mathrm{C_5H_{12}}$.`,
      `Il possède quatre carbones primaires.`,
      `Il possède un carbone quaternaire selon la convention du cours.`,
      `Il possède un carbone tertiaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les quatre méthyles apportent douze hydrogènes et le carbone central n'en porte aucun. Aucun groupe $\\mathrm{CH}$ n'est présent.`,
    choiceExplanations: [
      `Cinq carbones et douze hydrogènes sont comptés.`,
      `Les quatre groupes $\\mathrm{CH_3}$ sont primaires.`,
      `Le carbone central ne porte aucun hydrogène.`,
      `Un carbone tertiaire serait un groupe $\\mathrm{CH}$.`,
    ],
  },
  {
    order: 217,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On considère $\\mathrm{CH_3-CH(CH_3)-CH(CH_2CH_3)-CH_2-CH_2-CH_3}$.`,
    choices: [
      `La chaîne principale la plus longue comporte six carbones.`,
      `Les substituants occupent les positions 2 et 3.`,
      `La formule brute de l'alcane est $\\mathrm{C_9H_{20}}$.`,
      `Le nom doit citer méthyl avant éthyl.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La chaîne principale est un hexane. Les substituants sont méthyle en 2 et éthyle en 3, mais l'ordre alphabétique conduit au nom 3-éthyl-2-méthylhexane.`,
    choiceExplanations: [
      `Un chemin continu de six carbones est identifiable.`,
      `La numérotation inverse donnerait des indices plus élevés.`,
      `Un alcane acyclique à neuf carbones a pour formule $\\mathrm{C_9H_{20}}$.`,
      `Éthyl doit être cité avant méthyl.`,
    ],
  },
  {
    order: 218,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Le propofol est un médicament utilisé pour provoquer ou entretenir une anesthésie générale et pour certaines sédations. Sa formule topologique est représentée ci-dessous : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'propofol-topological',
    },
    choices: [
      `La molécule possède deux groupes isopropyle.`,
      `Chaque groupe isopropyle possède trois carbones.`,
      `Le nom 2,6-diisopropylphénol décrit la position de ces deux groupes autour du cycle.`,
      `La chaîne principale de la molécule est un octane linéaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le propofol comporte deux substituants $\\mathrm{(CH_3)_2CH-}$ placés de part et d'autre du groupe hydroxyle sur un cycle aromatique. Le contexte médical est fourni pour situer la molécule ; l'évaluation porte sur la lecture des groupes carbonés.`,
    choiceExplanations: [
      `Deux ramifications en forme de Y sont visibles.`,
      `Un carbone central et deux méthyles donnent trois carbones par groupe.`,
      `Les indices 2 et 6 repèrent les deux substituants sur le cycle.`,
      `Le squelette principal est aromatique et cyclique.`,
    ],
  },
  {
    order: 219,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `À propos de la valine, de la leucine et de l'isoleucine :`,
    choices: [
      `La valine utilise une chaîne principale dérivée de l'acide butanoïque.`,
      `La leucine utilise une chaîne principale dérivée de l'acide pentanoïque.`,
      `L'isoleucine utilise également une chaîne principale dérivée de l'acide pentanoïque.`,
      `Ces trois acides aminés possèdent tous la même formule brute.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La valine possède cinq carbones au total, tandis que la leucine et l'isoleucine en possèdent six. Ce sont trois acides aminés à chaîne ramifiée, mais leurs formules brutes ne sont pas toutes identiques.`,
    choiceExplanations: [
      `Sa chaîne principale contenant le carboxyle compte quatre carbones.`,
      `La chaîne principale de la leucine compte cinq carbones.`,
      `La chaîne principale de l'isoleucine compte aussi cinq carbones.`,
      `La leucine et l'isoleucine partagent une formule, mais pas la valine.`,
    ],
  },
  {
    order: 220,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Parmi les principes suivants :`,
    choices: [
      `Dans cette fiche, le degré d'un carbone est déterminé par le nombre d'hydrogènes qu'il porte.`,
      `La classe d'un alcool dépend du nombre de carbones liés au carbone portant le groupe $\\mathrm{-OH}$.`,
      `Un groupe alkyle possède un hydrogène de moins que l'alcane correspondant.`,
      `Tous les items précédents sont vrais.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Les trois principes sont corrects et résument les pièges majeurs de la section : ne pas confondre les deux classifications du carbone et distinguer un alcane du groupe alkyle correspondant.`,
    choiceExplanations: [
      `C'est la convention explicitement utilisée dans le chapitre.`,
      `C'est le critère des alcools primaire, secondaire et tertiaire.`,
      `Exemple : éthane $\\mathrm{C_2H_6}$ et éthyle $\\mathrm{C_2H_5-}$.`,
      `Les trois items précédents sont vrais.`,
    ],
  },
];
