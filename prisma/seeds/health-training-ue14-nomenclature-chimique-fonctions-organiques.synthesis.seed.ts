import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 5;

export const SYNTHESIS_COMPOSITION_STRUCTURE_QUIZ_SLUG =
  'synthesis-master-composition-structure-moleculaire';
export const SYNTHESIS_POLYFUNCTIONAL_MOLECULES_QUIZ_SLUG =
  'synthesis-master-fonctions-molecules-polyfonctionnelles';
export const SYNTHESIS_MOCK_EXAM_QUIZ_SLUG =
  'synthesis-master-examen-blanc-nomenclature-fonctions-organiques';

export const SYNTHESIS_COMPOSITION_STRUCTURE_QUESTION_ORDERS: number[] = [
  221, 222, 223, 224, 225, 226, 227, 228, 229, 230,
];
export const SYNTHESIS_POLYFUNCTIONAL_MOLECULES_QUESTION_ORDERS: number[] = [
  231, 232, 233, 234, 235, 236, 237, 238, 239, 240,
];
export const SYNTHESIS_MOCK_EXAM_QUESTION_ORDERS: number[] = [
  241, 242, 243, 244, 245, 246, 247, 248, 249, 250,
];

const MICROANALYSIS_CASE_STEM =
  `Un composé organique pur X ne contient que du carbone, de l'hydrogène et de l'oxygène. Sa microanalyse donne $40{,}0\\,\\%$ de carbone, $6{,}7\\,\\%$ d'hydrogène et $53{,}3\\,\\%$ d'oxygène. Sa masse molaire est $90\\,\\mathrm{g\\cdot mol^{-1}}$. Données : $M_{\\mathrm C}=12$, $M_{\\mathrm H}=1$ et $M_{\\mathrm O}=16\\,\\mathrm{g\\cdot mol^{-1}}$.`;

const UREA_CASE_STEM =
  `L'urée est un déchet azoté fabriqué par le foie puis éliminé dans les urines. Sa formule semi-développée est $\\mathrm{H_2N-CO-NH_2}$. Données : $M_{\\mathrm C}=12$, $M_{\\mathrm H}=1$, $M_{\\mathrm N}=14$ et $M_{\\mathrm O}=16\\,\\mathrm{g\\cdot mol^{-1}}$.`;

const CARBONYL_ISOMERS_CASE_STEM =
  `On compare le propanal $\\mathrm{CH_3-CH_2-CHO}$ et la propanone $\\mathrm{CH_3-CO-CH_3}$.`;

const NAC_CASE_STEM =
  `La N-acétylcystéine est utilisée pour fluidifier certaines sécrétions bronchiques et comme antidote lors de certains surdosages en paracétamol. Sa formule topologique sert de support aux questions suivantes.`;

const ACETYLCHOLINE_CASE_STEM =
  `L'acétylcholine est un messager chimique important, notamment pour transmettre un signal entre un nerf et un muscle. Sa formule topologique sert de support aux questions suivantes.`;

const PARACETAMOL_CASE_STEM =
  `Le paracétamol est utilisé pour soulager la douleur et faire baisser la fièvre. Sa formule topologique sert de support aux questions suivantes.`;

const VALINE_CASE_STEM =
  `La valine est un acide aminé entrant dans la composition des protéines. Sa formule topologique sert de support aux questions suivantes.`;

const BRANCHED_ALCOHOL_CASE_STEM =
  `On considère le 3-méthylhexan-2-ol, un alcool ramifié dont la formule topologique sert de support aux questions suivantes.`;

const AMINOALCOHOLS_CASE_STEM =
  `On compare le diméthylaminoéthanol $\\mathrm{HO-CH_2-CH_2-N(CH_3)_2}$ et la choline $\\mathrm{HO-CH_2-CH_2-N^+(CH_3)_3}$.`;

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SYNTHESIS_COMPOSITION_STRUCTURE_QUIZ_SLUG,
    title: `Composition et structure moléculaire`,
    description: `Exploiter une microanalyse, une masse molaire et les valences usuelles pour établir une formule, contrôler une structure et discuter les limites de la formule brute.`,
    stage: 'MASTER',
    sectionOrder: SYNTHESIS_SECTION_ORDER,
    items: [
      {
        type: 'GROUP',
        title: `Microanalyse d'un composé organique oxygéné`,
        sharedStatement: MICROANALYSIS_CASE_STEM,
        questionOrders: [221, 222, 223],
      },
      {
        type: 'GROUP',
        title: `Urée et élimination azotée`,
        sharedStatement: UREA_CASE_STEM,
        questionOrders: [224, 225, 226],
      },
      {
        type: 'GROUP',
        title: `Propanal et propanone`,
        sharedStatement: CARBONYL_ISOMERS_CASE_STEM,
        questionOrders: [227, 228, 229],
      },
      { type: 'QUESTION', questionOrder: 230 },
    ],
  },
  {
    order: 2,
    slug: SYNTHESIS_POLYFUNCTIONAL_MOLECULES_QUIZ_SLUG,
    title: `Fonctions et molécules polyfonctionnelles`,
    description: `Reconnaître simultanément plusieurs fonctions dans des molécules biologiques ou médicamenteuses, puis relier structure, formule brute, valence et charge.`,
    stage: 'MASTER',
    sectionOrder: SYNTHESIS_SECTION_ORDER,
    items: [
      {
        type: 'GROUP',
        title: `N-acétylcystéine`,
        sharedStatement: NAC_CASE_STEM,
        questionOrders: [231, 232, 233],
      },
      {
        type: 'GROUP',
        title: `Acétylcholine`,
        sharedStatement: ACETYLCHOLINE_CASE_STEM,
        questionOrders: [234, 235, 236],
      },
      {
        type: 'GROUP',
        title: `Paracétamol`,
        sharedStatement: PARACETAMOL_CASE_STEM,
        questionOrders: [237, 238],
      },
      { type: 'QUESTION', questionOrder: 239 },
      { type: 'QUESTION', questionOrder: 240 },
    ],
  },
  {
    order: 3,
    slug: SYNTHESIS_MOCK_EXAM_QUIZ_SLUG,
    title: `Nomenclature et fonctions organiques`,
    description: `Mobiliser l'ensemble du chapitre dans des questions proches de l'examen : formules topologiques, chaînes principales, fonctions proches, classes, degrés et contrôles de cohérence.`,
    stage: 'MASTER',
    sectionOrder: SYNTHESIS_SECTION_ORDER,
    items: [
      {
        type: 'GROUP',
        title: `Valine`,
        sharedStatement: VALINE_CASE_STEM,
        questionOrders: [241, 242, 243],
      },
      {
        type: 'GROUP',
        title: `3-méthylhexan-2-ol`,
        sharedStatement: BRANCHED_ALCOHOL_CASE_STEM,
        questionOrders: [244, 245, 246],
      },
      {
        type: 'GROUP',
        title: `Diméthylaminoéthanol et choline`,
        sharedStatement: AMINOALCOHOLS_CASE_STEM,
        questionOrders: [247, 248],
      },
      { type: 'QUESTION', questionOrder: 249 },
      { type: 'QUESTION', questionOrder: 250 },
    ],
  },
];

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    order: 221,
    difficulty: 'HARD',
    answerFormat: 'SINGLE',
    question: `Quelle est la formule empirique de X ?`,
    choices: [
      `$\\mathrm{CHO}$.`,
      `$\\mathrm{CH_2O}$.`,
      `$\\mathrm{C_2H_4O_2}$.`,
      `$\\mathrm{C_3H_6O_3}$.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `Pour $100\\,\\mathrm g$ de composé, on obtient environ $40/12=3{,}33$ moles de C, $6{,}7/1=6{,}7$ moles de H et $53{,}3/16=3{,}33$ moles de O. En divisant par $3{,}33$, le rapport est proche de $1:2:1$, soit $\\mathrm{CH_2O}$.`,
    choiceExplanations: [
      `Le rapport hydrogène/carbone est proche de 2, et non de 1.`,
      `Le rapport molaire réduit est bien $1:2:1$.`,
      `Cette formule possède la même composition relative, mais elle n'est pas réduite au plus petit rapport entier.`,
      `Cette formule peut être la formule brute, mais elle n'est pas la formule empirique réduite.`,
    ],
  },
  {
    order: 222,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la formule brute de X :`,
    choices: [
      `La masse molaire de l'unité empirique $\\mathrm{CH_2O}$ vaut $30\\,\\mathrm{g\\cdot mol^{-1}}$.`,
      `Le facteur multiplicatif vaut 3.`,
      `La formule brute de X est $\\mathrm{C_3H_6O_3}$.`,
      `La formule brute est nécessairement identique à la formule empirique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'unité empirique $\\mathrm{CH_2O}$ a une masse molaire de $12+2+16=30\\,\\mathrm{g\\cdot mol^{-1}}$. Le rapport $90/30=3$ conduit à $\\mathrm{C_3H_6O_3}$.`,
    choiceExplanations: [
      `Le calcul donne bien $30\\,\\mathrm{g\\cdot mol^{-1}}$.`,
      `La masse molaire réelle est trois fois celle de l'unité empirique.`,
      `Les trois indices sont multipliés par 3.`,
      `La formule brute peut être un multiple entier de la formule empirique.`,
    ],
  },
  {
    order: 223,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une analyse structurale complémentaire montre que X est l'acide lactique $\\mathrm{CH_3-CH(OH)-COOH}$.`,
    choices: [
      `La molécule possède une fonction alcool et une fonction acide carboxylique.`,
      `La fonction alcool est secondaire.`,
      `La microanalyse seule suffisait à établir l'enchaînement $\\mathrm{CH_3-CH(OH)-COOH}$.`,
      `Le carbone portant le groupe $\\mathrm{-OH}$ est tertiaire selon la convention du cours, car il porte un seul hydrogène.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'acide lactique associe un alcool secondaire et un acide carboxylique. La microanalyse et la masse molaire donnent la formule brute, mais une autre méthode est nécessaire pour connaître l'enchaînement des atomes. Dans l'organisme, la molécule est surtout présente sous forme de lactate et participe au métabolisme énergétique.`,
    choiceExplanations: [
      `Les motifs $\\mathrm{-OH}$ et $\\mathrm{-COOH}$ sont tous deux présents.`,
      `Le carbone fonctionnel est lié à deux autres carbones.`,
      `La microanalyse ne fournit pas directement la connectivité des atomes.`,
      `Le carbone $\\mathrm{CH(OH)}$ ne porte qu'un hydrogène.`,
    ],
  },
  {
    order: 224,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `�' propos de sa composition et de sa masse molaire :`,
    choices: [
      `Sa formule brute est $\\mathrm{CH_4N_2O}$.`,
      `Sa masse molaire vaut $60\\,\\mathrm{g\\cdot mol^{-1}}$.`,
      `Elle contient deux atomes de carbone.`,
      `Elle contient deux atomes d'azote.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La formule semi-développée contient un carbone, quatre hydrogènes, deux azotes et un oxygène. Sa masse molaire vaut $12+4+2\\times14+16=60\\,\\mathrm{g\\cdot mol^{-1}}$.`,
    choiceExplanations: [
      `Le décompte des atomes conduit bien à cette formule.`,
      `Le calcul complet donne $60\\,\\mathrm{g\\cdot mol^{-1}}$.`,
      `L'urée ne contient qu'un seul carbone, celui du carbonyle.`,
      `Les deux groupes $\\mathrm{NH_2}$ apportent deux azotes.`,
    ],
  },
  {
    order: 225,
    difficulty: 'HARD',
    answerFormat: 'SINGLE',
    question: `Le pourcentage massique d'azote dans l'urée est environ égal à :`,
    choices: [
      `$23{,}3\\,\\%$.`,
      `$40{,}0\\,\\%$.`,
      `$46{,}7\\,\\%$.`,
      `$60{,}0\\,\\%$.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `Les deux atomes d'azote apportent $2\\times14=28\\,\\mathrm{g\\cdot mol^{-1}}$ sur une masse molaire totale de $60\\,\\mathrm{g\\cdot mol^{-1}}$. Ainsi, $28/60\\times100\\approx46{,}7\\,\\%$.`,
    choiceExplanations: [
      `Cette valeur correspondrait approximativement à la contribution d'un seul atome d'azote.`,
      `Cette valeur ne résulte pas du rapport $28/60$.`,
      `Le calcul donne bien environ $46{,}7\\,\\%$.`,
      `La masse molaire totale ne peut pas être assimilée à la seule masse de l'azote.`,
    ],
  },
  {
    order: 226,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant les fonctions et les valences de cette molécule :`,
    choices: [
      `Les deux atomes d'azote sont directement liés au carbone d'un groupe carbonyle.`,
      `Le motif appartient au domaine des amides.`,
      `Chaque azote neutre forme trois liaisons simples.`,
      `L'urée possède une fonction nitrile $\\mathrm{-C\\equiv N}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'urée possède un carbonyle lié à deux azotes. Chaque azote est lié au carbone et à deux hydrogènes, soit trois liaisons simples. Aucune triple liaison carbone-azote n'est présente.`,
    choiceExplanations: [
      `Le motif $\\mathrm{N-CO-N}$ est explicite.`,
      `L'urée est apparentée aux amides.`,
      `La trivalence usuelle de l'azote neutre est respectée.`,
      `Un nitrile nécessiterait une triple liaison $\\mathrm{C\\equiv N}$.`,
    ],
  },
  {
    order: 227,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `�' propos de leur composition :`,
    choices: [
      `Les deux molécules ont pour formule brute $\\mathrm{C_3H_6O}$.`,
      `Les deux molécules ont la même masse molaire.`,
      `La formule brute suffit à les distinguer.`,
      `Une microanalyse élémentaire donnerait les mêmes pourcentages massiques pour les deux molécules pures.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le propanal et la propanone possèdent la même formule brute et donc la même masse molaire et les mêmes pourcentages massiques. Leur différence réside dans l'enchaînement des atomes.`,
    choiceExplanations: [
      `Le décompte conduit à trois carbones, six hydrogènes et un oxygène dans les deux cas.`,
      `Une même formule brute implique une même masse molaire.`,
      `La formule brute ne donne pas la position du carbonyle.`,
      `La composition élémentaire est identique.`,
    ],
  },
  {
    order: 228,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant leurs fonctions chimiques :`,
    choices: [
      `Le propanal possède une fonction aldéhyde.`,
      `La propanone possède une fonction cétone.`,
      `Les deux molécules sont des isomères de fonction.`,
      `La propanone possède un groupe carbonyle terminal $\\mathrm{-CHO}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le propanal possède un carbonyle terminal lié à un hydrogène, tandis que la propanone possède un carbonyle interne lié à deux carbones. Ils constituent des isomères de fonction.`,
    choiceExplanations: [
      `Le motif terminal $\\mathrm{-CHO}$ caractérise l'aldéhyde.`,
      `Le motif interne $\\mathrm{-CO-}$ caractérise la cétone.`,
      `Ils ont la même formule brute mais des fonctions différentes.`,
      `Le groupe carbonyle de la propanone est interne.`,
    ],
  },
  {
    order: 229,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Selon la convention du cours sur le degré des carbones :`,
    choices: [
      `Le carbone du groupe aldéhyde du propanal est tertiaire, car il porte un hydrogène.`,
      `Le carbone carbonylé de la propanone est quaternaire, car il ne porte aucun hydrogène.`,
      `Les trois carbones de la propanone sont primaires.`,
      `Les liaisons autour des deux carbones carbonylés respectent la tétravalence du carbone.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le chapitre classe les carbones selon le nombre d'hydrogènes qu'ils portent : un hydrogène pour un carbone tertiaire et aucun pour un carbone quaternaire. Dans les deux carbonyles, la somme des ordres de liaison autour du carbone vaut quatre.`,
    choiceExplanations: [
      `Le motif $\\mathrm{-CHO}$ contient un hydrogène lié au carbone carbonylé.`,
      `Le carbone de $\\mathrm{-CO-}$ ne porte aucun hydrogène.`,
      `Les deux méthyles sont primaires, mais le carbone carbonylé ne l'est pas.`,
      `La double liaison $\\mathrm{C=O}$ compte pour deux liaisons.`,
    ],
  },
  {
    order: 230,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la microanalyse et de la détermination d'une structure organique :`,
    choices: [
      `La microanalyse permet d'établir des rapports entre les nombres d'atomes.`,
      `La masse molaire peut permettre de passer d'une formule empirique à une formule brute.`,
      `Deux isomères de même formule brute ont la même composition massique.`,
      `La formule brute permet toujours de reconnaître les fonctions chimiques présentes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La microanalyse et la masse molaire renseignent sur la composition, mais pas sur l'enchaînement des atomes. Des isomères peuvent donc partager formule brute, masse molaire et pourcentages massiques tout en possédant des fonctions différentes.`,
    choiceExplanations: [
      `Les pourcentages sont convertis en quantités de matière relatives.`,
      `Le rapport des masses molaires donne un facteur multiplicatif entier.`,
      `Leurs nombres d'atomes de chaque élément sont identiques.`,
      `La reconnaissance des fonctions nécessite une information structurale.`,
    ],
  },
  {
    order: 231,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

Quelles fonctions sont présentes ?`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'n-acetylcysteine-topological',
    },
    choices: [
      `Une fonction thiol.`,
      `Une fonction amide.`,
      `Une fonction acide carboxylique.`,
      `Une fonction amine primaire libre.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La N-acétylcystéine contient un groupe $\\mathrm{-SH}$, un motif $\\mathrm{-NH-CO-}$ et un groupe $\\mathrm{-COOH}$. L'azote appartient à une amide et ne constitue donc plus une amine libre.`,
    choiceExplanations: [
      `Le groupe sulfhydryle $\\mathrm{-SH}$ est visible.`,
      `L'azote est directement lié au carbone d'un carbonyle.`,
      `Le motif $\\mathrm{-COOH}$ est présent.`,
      `La N-acétylation a transformé l'amine de la cystéine en amide.`,
    ],
  },
  {
    order: 232,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

�' propos de sa composition :`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'n-acetylcysteine-topological',
    },
    choices: [
      `Sa formule brute est $\\mathrm{C_5H_9NO_3S}$.`,
      `Elle contient deux carbones carbonylés.`,
      `Elle contient un seul atome d'oxygène.`,
      `Elle contient un atome de soufre.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le décompte donne cinq carbones, neuf hydrogènes, un azote, trois oxygènes et un soufre. Deux carbones appartiennent à des groupes carbonyle : celui de l'amide et celui de l'acide carboxylique.`,
    choiceExplanations: [
      `Le décompte complet conduit à $\\mathrm{C_5H_9NO_3S}$.`,
      `Les motifs amide et carboxyle possèdent chacun un carbonyle.`,
      `La molécule possède trois oxygènes.`,
      `Le groupe thiol apporte un atome de soufre.`,
    ],
  },
  {
    order: 233,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

Concernant les valences et le degré des carbones selon le cours :`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'n-acetylcysteine-topological',
    },
    choices: [
      `L'azote neutre forme trois liaisons simples.`,
      `Le soufre du thiol est lié au carbone et à un hydrogène.`,
      `Les deux carbones carbonylés sont quaternaires selon la convention du cours, car ils ne portent aucun hydrogène.`,
      `Le carbone portant l'azote est secondaire selon la convention du cours.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'azote de l'amide est trivalent, le soufre du thiol forme deux liaisons simples et les carbones carbonylés ne portent aucun hydrogène. Le carbone portant l'azote est un groupe $\\mathrm{CH}$ : il est tertiaire, et non secondaire, selon la convention du chapitre.`,
    choiceExplanations: [
      `Il est lié au carbone central, au carbone carbonylé et à un hydrogène.`,
      `Le motif est bien $\\mathrm{C-S-H}$.`,
      `L'absence d'hydrogène conduit à la catégorie quaternaire dans ce cours.`,
      `Ce carbone ne porte qu'un seul hydrogène : il est tertiaire selon la fiche.`,
    ],
  },
  {
    order: 234,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

�' propos des fonctions présentes :`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'acetylcholine-topological',
    },
    choices: [
      `Elle possède une fonction ester.`,
      `Elle possède un ammonium quaternaire.`,
      `Elle possède une amine tertiaire neutre.`,
      `Elle possède une fonction éther simple à la place de l'ester.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le motif $\\mathrm{-COO-}$ est celui d'un ester. L'azote est lié à quatre groupes carbonés et porte une charge positive : il s'agit d'un ammonium quaternaire.`,
    choiceExplanations: [
      `Les deux oxygènes du motif ester sont visibles.`,
      `L'azote est tétravalent et positif.`,
      `Une amine tertiaire neutre ne forme que trois liaisons autour de l'azote.`,
      `La présence du carbonyle exclut un simple éther.`,
    ],
  },
  {
    order: 235,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

�' propos de sa formule et de sa charge :`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'acetylcholine-topological',
    },
    choices: [
      `La formule du cation est $\\mathrm{C_7H_{16}NO_2^+}$.`,
      `La molécule comporte trois groupes méthyle directement liés à l'azote.`,
      `La charge positive est portée par un oxygène.`,
      `Un contre-ion négatif peut accompagner ce cation dans un sel.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le décompte conduit à sept carbones, seize hydrogènes, un azote et deux oxygènes. La charge positive est portée par l'azote quaternaire. Dans un sel, elle est compensée par un anion.`,
    choiceExplanations: [
      `Le décompte atomique et la charge sont corrects.`,
      `Le groupement triméthylammonium est visible.`,
      `La notation $\\mathrm{N^+}$ indique que la charge est portée par l'azote.`,
      `Un ion chlorure peut par exemple assurer l'électroneutralité du sel.`,
    ],
  },
  {
    order: 236,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

Concernant les valences :`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'acetylcholine-topological',
    },
    choices: [
      `L'azote forme quatre liaisons simples.`,
      `L'azote conserve un doublet non liant disponible comme dans une amine tertiaire.`,
      `Chaque oxygène de l'ester respecte une valence usuelle de deux.`,
      `Le carbone du groupe carbonyle respecte la tétravalence du carbone.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `L'azote quaternaire a engagé son doublet dans une quatrième liaison et porte une charge positive. Les oxygènes sont divalents et le carbone carbonylé possède au total quatre unités de liaison.`,
    choiceExplanations: [
      `Quatre substituants carbonés entourent l'azote.`,
      `Le doublet a servi à former la quatrième liaison.`,
      `L'un forme une double liaison, l'autre deux liaisons simples.`,
      `La double liaison à O compte pour deux et les deux liaisons simples pour deux autres.`,
    ],
  },
  {
    order: 237,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

�' propos de ses fonctions :`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'paracetamol-topological',
    },
    choices: [
      `Il possède une fonction amide.`,
      `Il possède une amine primaire libre.`,
      `Son groupe $\\mathrm{-OH}$ est porté par un carbone aromatique.`,
      `Il possède une fonction ester.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Le paracétamol possède le motif $\\mathrm{-NH-CO-}$ d'une amide et un hydroxyle phénolique lié au cycle aromatique. Il ne contient ni amine primaire libre ni ester.`,
    choiceExplanations: [
      `L'azote est directement lié au carbone d'un carbonyle.`,
      `L'azote appartient à l'amide.`,
      `Le groupe hydroxyle est phénolique, et non alcoolique au sens strict du cours.`,
      `Aucun motif $\\mathrm{-COO-}$ n'est présent.`,
    ],
  },
  {
    order: 238,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

�' propos de sa composition :`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'paracetamol-topological',
    },
    choices: [
      `Sa formule brute est $\\mathrm{C_8H_9NO_2}$.`,
      `Sa masse molaire vaut $151\\,\\mathrm{g\\cdot mol^{-1}}$ avec $M_{\\mathrm C}=12$, $M_{\\mathrm H}=1$, $M_{\\mathrm N}=14$ et $M_{\\mathrm O}=16$.`,
      `Il contient deux atomes d'azote.`,
      `Il contient deux atomes d'oxygène.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le décompte donne $\\mathrm{C_8H_9NO_2}$. La masse molaire vaut $8\\times12+9+14+2\\times16=151\\,\\mathrm{g\\cdot mol^{-1}}$.`,
    choiceExplanations: [
      `Le décompte est correct.`,
      `Le calcul conduit bien à 151.`,
      `La molécule ne contient qu'un seul azote.`,
      `Un oxygène appartient au phénol et l'autre au carbonyle de l'amide.`,
    ],
  },
  {
    order: 239,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `L'aspirine est utilisée notamment contre la douleur et la fièvre ; à faible dose, elle peut aussi limiter l'agrégation des plaquettes. Sa formule topologique est représentée ci-dessous : [[QUESTION_DIAGRAM]]`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'aspirin-topological',
    },
    choices: [
      `Elle possède une fonction acide carboxylique.`,
      `Elle possède une fonction ester.`,
      `Sa formule brute est $\\mathrm{C_9H_8O_4}$.`,
      `Elle possède une fonction amine.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'aspirine associe un groupe $\\mathrm{-COOH}$ et un motif ester $\\mathrm{-O-CO-}$. Le décompte conduit à $\\mathrm{C_9H_8O_4}$. Aucun azote n'est présent.`,
    choiceExplanations: [
      `Le groupe carboxyle est lié au cycle aromatique.`,
      `Le groupe acétyle est relié au cycle par un oxygène.`,
      `La formule brute est correcte.`,
      `La structure ne contient aucun atome d'azote.`,
    ],
  },
  {
    order: 240,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On compare le glucose ouvert $\\mathrm{CHO-(CHOH)_4-CH_2OH}$ et le fructose ouvert $\\mathrm{CH_2OH-CO-(CHOH)_3-CH_2OH}$.`,
    choices: [
      `Les deux molécules ont pour formule brute $\\mathrm{C_6H_{12}O_6}$.`,
      `Le glucose ouvert possède une fonction aldéhyde.`,
      `Le fructose ouvert possède une fonction cétone.`,
      `La formule brute suffit à distinguer le glucose du fructose.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le glucose et le fructose ont la même formule brute mais des groupes carbonyle placés dans des environnements différents. Sous forme ouverte, le glucose est un aldéhyde et le fructose une cétone ; tous deux possèdent plusieurs fonctions alcool.`,
    choiceExplanations: [
      `Le décompte atomique est identique.`,
      `Le motif terminal $\\mathrm{-CHO}$ est présent.`,
      `Le carbonyle du fructose est interne.`,
      `La structure, et non la seule formule brute, permet de les distinguer.`,
    ],
  },
  {
    order: 241,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

�' propos de sa composition et de ses fonctions :`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'valine-topological',
    },
    choices: [
      `Sa formule brute est $\\mathrm{C_5H_{11}NO_2}$.`,
      `Elle possède une fonction amine primaire.`,
      `Elle possède une fonction acide carboxylique.`,
      `Elle possède une fonction amide.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La valine contient cinq carbones, onze hydrogènes, un azote et deux oxygènes. Elle associe une amine primaire et un acide carboxylique ; l'azote n'est pas directement lié à un carbonyle.`,
    choiceExplanations: [
      `Le décompte conduit bien à $\\mathrm{C_5H_{11}NO_2}$.`,
      `L'azote est lié à un seul groupe carboné.`,
      `Le groupe $\\mathrm{-COOH}$ est présent.`,
      `Aucun motif $\\mathrm{-CO-N-}$ n'est présent.`,
    ],
  },
  {
    order: 242,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

Concernant sa nomenclature de base :`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'valine-topological',
    },
    choices: [
      `La chaîne principale contenant le groupe carboxyle comporte quatre carbones.`,
      `Le préfixe de la chaîne principale est but-.`,
      `Un substituant méthyle est porté par le carbone 3.`,
      `Le groupe amine est porté par le carbone 2.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `La valine peut être nommée acide 2-amino-3-méthylbutanoïque. La chaîne principale de quatre carbones inclut le carbone du carboxyle ; les substituants amino et méthyle sont en positions 2 et 3.`,
    choiceExplanations: [
      `La plus longue chaîne contenant le carboxyle compte quatre carbones.`,
      `Quatre carbones correspondent à but-.`,
      `La ramification méthyle est sur le carbone 3.`,
      `La numérotation commence au carbone carboxylique.`,
    ],
  },
  {
    order: 243,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

Selon la convention du cours sur le degré des carbones :`,
    questionDiagram: {
      type: 'molecule',
      molecule: 'valine-topological',
    },
    choices: [
      `La molécule possède deux carbones primaires.`,
      `La molécule possède deux carbones tertiaires.`,
      `Le carbone du groupe carboxyle est quaternaire.`,
      `La molécule possède un carbone secondaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La valine comporte deux groupes $\\mathrm{CH_3}$, deux groupes $\\mathrm{CH}$ et un carbone carbonylé sans hydrogène. Elle possède donc deux carbones primaires, deux tertiaires et un quaternaire, mais aucun secondaire selon la convention du chapitre.`,
    choiceExplanations: [
      `Les deux groupes méthyle portent chacun trois hydrogènes.`,
      `Le carbone portant l'amine et le carbone ramifié portent chacun un hydrogène.`,
      `Le carbone carboxylique ne porte aucun hydrogène.`,
      `Aucun groupe $\\mathrm{CH_2}$ n'est présent.`,
    ],
  },
  {
    order: 244,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

Concernant son nom :`,
    questionDiagram: {
      type: 'molecule',
      molecule: '3-methylhexan-2-ol-topological',
    },
    choices: [
      `La chaîne principale comporte six carbones.`,
      `Le groupe $\\mathrm{-OH}$ reçoit l'indice 2.`,
      `Un substituant méthyle est porté par le carbone 3.`,
      `Le nom correct est 3-méthylhexan-2-ol.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `La plus longue chaîne contenant le groupe hydroxyle est un hexane. La numérotation donne la priorité au plus petit indice du groupe $\\mathrm{-OH}$, soit 2, et place le méthyle en 3.`,
    choiceExplanations: [
      `La chaîne principale compte six carbones.`,
      `La numérotation depuis l'extrémité la plus proche du groupe hydroxyle donne 2.`,
      `La ramification d'un carbone est située en position 3.`,
      `Le nom rassemble correctement chaîne, substituant et position de l'alcool.`,
    ],
  },
  {
    order: 245,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

�' propos de sa composition et de sa fonction :`,
    questionDiagram: {
      type: 'molecule',
      molecule: '3-methylhexan-2-ol-topological',
    },
    choices: [
      `Sa formule brute est $\\mathrm{C_7H_{16}O}$.`,
      `C'est un alcool secondaire.`,
      `Le groupe méthyle est un groupe alkyle à un carbone.`,
      `La molécule est un éther.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La molécule possède sept carbones et correspond à un alcool acyclique saturé de formule $\\mathrm{C_7H_{16}O}$. Le carbone portant $\\mathrm{-OH}$ est lié à deux carbones : l'alcool est secondaire.`,
    choiceExplanations: [
      `Le décompte donne sept carbones, seize hydrogènes et un oxygène.`,
      `Le carbone fonctionnel possède deux voisins carbonés.`,
      `Le substituant $\\mathrm{-CH_3}$ est bien un méthyle.`,
      `L'oxygène n'est pas situé entre deux fragments carbonés.`,
    ],
  },
  {
    order: 246,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `[[QUESTION_DIAGRAM]]

Selon la convention du cours sur le degré des carbones :`,
    questionDiagram: {
      type: 'molecule',
      molecule: '3-methylhexan-2-ol-topological',
    },
    choices: [
      `La molécule possède trois carbones primaires.`,
      `Elle possède deux carbones secondaires.`,
      `Elle possède deux carbones tertiaires.`,
      `Le carbone portant le groupe $\\mathrm{-OH}$ est secondaire selon la convention du cours.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La structure semi-développée est $\\mathrm{CH_3-CH(OH)-CH(CH_3)-CH_2-CH_2-CH_3}$. On compte trois $\\mathrm{CH_3}$, deux $\\mathrm{CH_2}$ et deux $\\mathrm{CH}$. Le carbone fonctionnel est donc tertiaire selon le nombre d'hydrogènes, alors que l'alcool est secondaire.`,
    choiceExplanations: [
      `Les deux extrémités et le substituant méthyle sont primaires.`,
      `Les deux groupes $\\mathrm{CH_2}$ sont secondaires.`,
      `Le carbone portant $\\mathrm{-OH}$ et le carbone ramifié portent chacun un hydrogène.`,
      `Il ne porte qu'un hydrogène : il est tertiaire selon la convention du chapitre.`,
    ],
  },
  {
    order: 247,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant leurs fonctions azotées :`,
    choices: [
      `Le diméthylaminoéthanol possède une amine tertiaire neutre.`,
      `La choline possède un ammonium quaternaire.`,
      `Les deux azotes portent une charge positive.`,
      `L'azote de la choline forme une liaison simple de plus que celui du diméthylaminoéthanol.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le premier azote est lié à trois groupes carbonés et reste neutre : c'est une amine tertiaire. Dans la choline, un troisième groupe méthyle fournit un quatrième substituant ; l'azote devient tétravalent et positif.`,
    choiceExplanations: [
      `Deux méthyles et la chaîne hydroxyéthyle entourent l'azote.`,
      `Trois méthyles et la chaîne hydroxyéthyle entourent l'azote positif.`,
      `Seul l'azote de la choline est chargé.`,
      `Le passage de trois à quatre liaisons distingue les deux espèces.`,
    ],
  },
  {
    order: 248,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `�' propos de leur composition et de leur fonction oxygénée :`,
    choices: [
      `Les deux molécules possèdent une fonction alcool primaire.`,
      `Le diméthylaminoéthanol a pour formule brute $\\mathrm{C_4H_{11}NO}$.`,
      `Le cation choline a pour formule $\\mathrm{C_5H_{14}NO^+}$.`,
      `Les deux molécules possèdent une fonction amide.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Dans les deux molécules, le groupe $\\mathrm{-OH}$ est porté par un carbone terminal lié à un seul autre carbone : l'alcool est primaire. Le décompte donne $\\mathrm{C_4H_{11}NO}$ et $\\mathrm{C_5H_{14}NO^+}$. Aucun carbonyle n'est présent.`,
    choiceExplanations: [
      `Le carbone fonctionnel est un groupe terminal $\\mathrm{CH_2OH}$.`,
      `Le décompte est correct.`,
      `Le groupe méthyle supplémentaire et la charge positive conduisent à cette formule.`,
      `Une amide nécessiterait un motif $\\mathrm{-CO-N-}$.`,
    ],
  },
  {
    order: 249,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Parmi les associations structure''�fonction suivantes :`,
    choices: [
      `$\\mathrm{CH_3-CH_2-CHO}$ : aldéhyde.`,
      `$\\mathrm{CH_3-CO-CH_3}$ : cétone.`,
      `$\\mathrm{CH_3-COO-CH_3}$ : éther.`,
      `$\\mathrm{CH_3-O-CH_3}$ : ester.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le motif terminal $\\mathrm{-CHO}$ définit un aldéhyde et le carbonyle interne une cétone. Le motif $\\mathrm{-COO-}$ appartient à un ester, tandis que l'oxygène entre deux groupes carbonés sans carbonyle appartient à un éther.`,
    choiceExplanations: [
      `Le carbonyle terminal est celui du propanal.`,
      `Le carbonyle interne est celui de la propanone.`,
      `Cette structure est un ester.`,
      `Cette structure est un éther.`,
    ],
  },
  {
    order: 250,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Pour conclure sur l'ensemble du chapitre :`,
    choices: [
      `Une formule brute ne suffit pas toujours à identifier les fonctions présentes.`,
      `Selon la convention du cours, un carbone carbonylé sans hydrogène est classé comme quaternaire.`,
      `Dans une amide, l'azote est directement lié au carbone d'un groupe carbonyle.`,
      `Une amine tertiaire neutre et un ammonium quaternaire se distinguent notamment par le nombre de liaisons autour de l'azote et par la charge.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Ces quatre propositions résument plusieurs pièges majeurs du chapitre : limites de la formule brute, convention particulière sur le degré des carbones, distinction amine/amide et distinction amine tertiaire/ammonium quaternaire.`,
    choiceExplanations: [
      `Des isomères de fonction peuvent partager la même formule brute.`,
      `Le cours classe les carbones d'après le nombre d'hydrogènes qu'ils portent.`,
      `Le motif $\\mathrm{-CO-N-}$ est le repère structural de l'amide.`,
      `L'ammonium quaternaire est tétravalent et positif, contrairement à l'amine tertiaire neutre.`,
    ],
  },
];
