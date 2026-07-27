import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 6;

export const SYNTHESIS_CONSOLIDATION_QUIZ_SLUG =
  'synthese-consolidation-hydrocarbures';
export const SYNTHESIS_EXAM_QUIZ_SLUG =
  'synthese-entrainement-examen-hydrocarbures';

export const SYNTHESIS_CONSOLIDATION_QUESTION_ORDERS: number[] = [
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
];
export const SYNTHESIS_EXAM_QUESTION_ORDERS: number[] = [
  111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
];

const FIGURE_BASE_PATH = '/images/training/ue14/hydrocarbures';

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SYNTHESIS_CONSOLIDATION_QUIZ_SLUG,
    title: `Synthèse 1 ''� Consolidation des familles et réactions`,
    description: `Reconnaître les hydrocarbures, mobiliser leurs formules générales et prévoir les principales transformations des alcènes et des alcynes.`,
    stage: 'MASTER',
    sectionOrder: SYNTHESIS_SECTION_ORDER,
    items: [
      {
        type: 'GROUP',
        title: `Reconnaissance des principales familles d'hydrocarbures`,
        sharedStatement: `Les questions 101 à 103 s'appuient sur la figure ci-dessous. Elle présente quatre hydrocarbures A à D sous forme semi-développée ou topologique.

![Familles d'hydrocarbures](${FIGURE_BASE_PATH}/figure-f1-familles-hydrocarbures.svg)`,
        questionOrders: [101, 102, 103],
      },
      {
        type: 'GROUP',
        title: `Carte des transformations vers les alcènes`,
        sharedStatement: `Les questions 104 à 106 s'appuient sur la figure ci-dessous. Dans une chaîne de synthèse pharmaceutique, le chimiste doit former un alcène à partir de plusieurs précurseurs possibles, puis éventuellement poursuivre sa réduction.

![Carte des transformations vers les alcènes](${FIGURE_BASE_PATH}/figure-f2-carte-transformations.svg)`,
        questionOrders: [104, 105, 106],
      },
      {
        type: 'GROUP',
        title: `Réactivité comparée du propène`,
        sharedStatement: `Les questions 107 à 109 s'appuient sur la figure ci-dessous. Le propène est soumis séparément à plusieurs réactifs ; les produits A à G correspondent à des transformations différentes.

![Réactivité comparée du propène](${FIGURE_BASE_PATH}/figure-f3-reactivite-propene.svg)`,
        questionOrders: [107, 108, 109],
      },
      { type: 'QUESTION', questionOrder: 110 },
    ],
  },
  {
    order: 2,
    slug: SYNTHESIS_EXAM_QUIZ_SLUG,
    title: `Synthèse 2 ''� Entraînement type examen`,
    description: `Résoudre des chaînes de transformations, raisonner à rebours après une coupure oxydative et comparer la réactivité des alcynes internes et terminaux.`,
    stage: 'MASTER',
    sectionOrder: SYNTHESIS_SECTION_ORDER,
    items: [
      {
        type: 'GROUP',
        title: `Chaîne alcyne - alcène - diol`,
        sharedStatement: `Les questions 111 à 113 s'appuient sur la figure ci-dessous. Un laboratoire prépare un diol à partir du but-2-yne en passant par un alcène intermédiaire.

![Chaîne alcyne alcène diol](${FIGURE_BASE_PATH}/figure-f4-chaine-alcyne-alcene-diol.svg)`,
        questionOrders: [111, 112, 113],
      },
      {
        type: 'GROUP',
        title: `Raisonnement inverse après coupure oxydative`,
        sharedStatement: `Les questions 114 et 115 s'appuient sur la figure ci-dessous. L'oxydation forte d'un alcène inconnu fournit de l'éthanal et de la propanone dans le modèle simplifié du cours.

![Coupure oxydative inverse](${FIGURE_BASE_PATH}/figure-f5-coupure-oxydative-inverse.svg)`,
        questionOrders: [114, 115],
      },
      {
        type: 'GROUP',
        title: `Hydratation d'alcynes internes et terminaux`,
        sharedStatement: `Les questions 116 et 117 s'appuient sur la figure ci-dessous. On compare l'hydratation du pent-2-yne, alcyne interne non symétrique, et celle du propyne, alcyne vrai terminal.

![Hydratation d'alcynes](${FIGURE_BASE_PATH}/figure-f6-hydratation-alcynes.svg)`,
        questionOrders: [116, 117],
      },
      { type: 'QUESTION', questionOrder: 118 },
      { type: 'QUESTION', questionOrder: 119 },
      {
        type: 'GROUP',
        title: `Pent-1-yne en synthèse`,
        sharedStatement: `La question 120 s'appuie sur la figure ci-dessous. Le pent-1-yne est utilisé comme précurseur dans une synthèse pharmaceutique.

![Pent-1-yne](${FIGURE_BASE_PATH}/figure-f7-pent-1-yne.svg)`,
        questionOrders: [120],
      },
    ],
  },
];

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    order: 101,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `�' propos des composés A à D de la figure précédente :`,
    choices: [
      `A est un alcane acyclique saturé.`,
      `B est un cyclane ne comportant aucune double liaison.`,
      `C est un alcène.`,
      `D est un nitrile car il contient une triple liaison.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `A est le butane, B le cyclopentane, C le but-1-ène et D le but-1-yne. Un alcyne porte une triple liaison carbone-carbone, tandis qu'un nitrile contient une liaison carbone-azote.`,
    choiceExplanations: [
      `A ne comporte que des liaisons simples et sa chaîne est ouverte.`,
      `B est un cycle saturé à cinq carbones.`,
      `C comporte une liaison double carbone-carbone.`,
      `D contient une liaison $\\mathrm{C{\\equiv}C}$, pas une liaison $\\mathrm{C{\\equiv}N}$.`,
    ],
  },
  {
    order: 102,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant les formules des composés de la figure précédente :`,
    choices: [
      `A répond à la formule générale $\\mathrm{C_nH_{2n+2}}$.`,
      `B et C peuvent tous deux répondre à la formule générale $\\mathrm{C_nH_{2n}}$.`,
      `D répond à la formule générale $\\mathrm{C_nH_{2n-2}}$.`,
      `La seule formule brute $\\mathrm{C_5H_{10}}$ permet d'affirmer qu'il s'agit nécessairement d'un alcène.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Un alcane acyclique suit $\\mathrm{C_nH_{2n+2}}$, un cyclane saturé et un monoalcène acyclique peuvent tous deux suivre $\\mathrm{C_nH_{2n}}$, et un monoalcyne acyclique suit $\\mathrm{C_nH_{2n-2}}$. La formule $\\mathrm{C_5H_{10}}$ reste donc compatible avec un cyclane ou un alcène.`,
    choiceExplanations: [
      `Le butane a pour formule $\\mathrm{C_4H_{10}}$.`,
      `Le cyclopentane a pour formule $\\mathrm{C_5H_{10}}$ et le but-1-ène $\\mathrm{C_4H_8}$.`,
      `Le but-1-yne a pour formule $\\mathrm{C_4H_6}$.`,
      `La formule brute ne distingue pas à elle seule cycle saturé et double liaison.`,
    ],
  },
  {
    order: 103,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la nomenclature des structures de la figure précédente :`,
    choices: [
      `A peut être nommé butane.`,
      `B peut être nommé cyclopentane.`,
      `C peut être nommé but-1-ène.`,
      `D peut être nommé but-2-yne et constitue un alcyne interne.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La triple liaison de D est terminale : la structure est le but-1-yne, aussi qualifié d'alcyne vrai. Le but-2-yne aurait sa triple liaison entre les deux carbones centraux.`,
    choiceExplanations: [
      `A comporte quatre carbones en chaîne saturée.`,
      `B est un cycle saturé à cinq sommets.`,
      `La double liaison de C commence au carbone 1.`,
      `D est le but-1-yne, un alcyne terminal, et non le but-2-yne.`,
    ],
  },
  {
    order: 104,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `�' propos des voies A à C de la figure précédente :`,
    choices: [
      `La voie A correspond à la déshydratation d'un alcool.`,
      `La voie B correspond à la déshydrohalogénation d'un dérivé halogéné.`,
      `La voie C permet d'obtenir un alcène par hydrogénation partielle d'un alcyne.`,
      `Les trois voies sont des hydrogénations catalytiques.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Un alcool peut perdre $\\mathrm{H_2O}$, un dérivé halogéné peut perdre $\\mathrm{HX}$, et un alcyne peut recevoir une molécule de $\\mathrm{H_2}$ pour donner un alcène. Ces transformations n'appartiennent donc pas toutes à la même famille réactionnelle.`,
    choiceExplanations: [
      `L'éthanol est transformé en éthène avec élimination d'eau.`,
      `Le bromoéthane forme l'éthène par élimination de $\\mathrm{HBr}$.`,
      `L'éthyne peut être réduit au stade éthène sous conditions contrôlées.`,
      `Seule la voie C fait intervenir ici une hydrogénation.`,
    ],
  },
  {
    order: 105,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant les bilans représentés dans la figure précédente :`,
    choices: [
      `La déshydratation élimine globalement $\\mathrm{H}$ et $\\mathrm{OH}$ sur deux carbones voisins.`,
      `La déshydrohalogénation élimine globalement $\\mathrm{H}$ et $\\mathrm{X}$ sur deux carbones voisins.`,
      `Une hydrogénation partielle transforme une triple liaison en double liaison.`,
      `La formation d'un alcène par élimination augmente le nombre d'hydrogènes de la molécule organique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les deux éliminations retirent respectivement les éléments de l'eau ou d'un hydracide, tandis que l'hydrogénation partielle ajoute une molécule de dihydrogène à l'alcyne. Une élimination diminue, et non augmente, le nombre d'hydrogènes du produit organique.`,
    choiceExplanations: [
      `$\\mathrm{H}$ et $\\mathrm{OH}$ forment la molécule d'eau éliminée.`,
      `$\\mathrm{H}$ et l'halogène $\\mathrm{X}$ forment $\\mathrm{HX}$.`,
      `Une seule des deux liaisons pi de la triple liaison est alors supprimée.`,
      `L'alcène formé par élimination possède deux hydrogènes de moins que l'alcane ou le dérivé saturé correspondant.`,
    ],
  },
  {
    order: 106,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente :`,
    choices: [
      `L'hydrogénation complète de l'éthyne consomme au total deux molécules de $\\mathrm{H_2}$.`,
      `L'éthène peut être hydrogéné en éthane.`,
      `Le choix du catalyseur et des conditions est important pour s'arrêter au stade alcène.`,
      `L'hydratation et la déshydratation désignent exactement la même transformation dans le même sens.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Une triple liaison nécessite deux additions successives de $\\mathrm{H_2}$ pour devenir une liaison simple. Les conditions doivent être contrôlées pour isoler l'alcène intermédiaire. L'hydratation ajoute de l'eau, alors que la déshydratation l'élimine.`,
    choiceExplanations: [
      `Une molécule de $\\mathrm{H_2}$ mène à l'alcène, puis une seconde à l'alcane.`,
      `L'éthène devient l'éthane après addition de $\\mathrm{H_2}$.`,
      `Le cours souligne la difficulté de stopper la réduction au stade alcène.`,
      `Les deux transformations sont de sens opposé.`,
    ],
  },
  {
    order: 107,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Dans la figure précédente, quelles associations entre réactif et produit sont correctes ?`,
    choices: [
      `$\\mathrm{H_2}$ en présence d'un catalyseur conduit au produit A, le propane.`,
      `$\\mathrm{Br_2}$ conduit au produit B, le 1,2-dibromopropane.`,
      `$\\mathrm{HBr}$ selon Markovnikov conduit au produit C, le 2-bromopropane.`,
      `$\\mathrm{H_2O}$ conduit nécessairement au produit B.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'hydrogénation donne le propane, l'addition de dibrome place un $\\mathrm{Br}$ sur chacun des anciens carbones de la double liaison, et l'addition de $\\mathrm{HBr}$ sur le propène conduit au 2-bromopropane selon Markovnikov. L'hydratation conduit à un alcool.`,
    choiceExplanations: [
      `Deux hydrogènes sont ajoutés à la double liaison.`,
      `Les deux bromes se répartissent sur les deux carbones voisins.`,
      `Le brome se fixe sur le carbone le plus substitué dans le cadre de la règle étudiée.`,
      `L'eau ajoute $\\mathrm{H}$ et $\\mathrm{OH}$ et forme ici le propan-2-ol, produit D.`,
    ],
  },
  {
    order: 108,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant les produits d'oxydation du propène présentés dans la figure précédente :`,
    choices: [
      `L'oxydation douce conduit à l'époxyde E.`,
      `L'oxydation modérée conduit au propane-1,2-diol F.`,
      `L'oxydation forte peut conduire à l'éthanal et au méthanal G dans le modèle simplifié du cours.`,
      `Les trois niveaux d'oxydation rompent nécessairement la liaison entre les deux anciens carbones de la double liaison.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'oxydation douce forme un cycle époxyde, l'oxydation modérée ajoute deux groupes $\\mathrm{OH}$ voisins et l'oxydation forte coupe la double liaison. Seule cette dernière rompt le squelette au niveau de l'ancienne double liaison.`,
    choiceExplanations: [
      `L'oxygène relie les deux anciens carbones de la double liaison.`,
      `Un groupe $\\mathrm{OH}$ est ajouté sur chacun des deux carbones.`,
      `Le carbone terminal donne le méthanal et l'autre carbone, porteur de $\\mathrm{H}$ et $\\mathrm{CH_3}$, donne l'éthanal.`,
      `Les oxydations douce et modérée conservent la liaison carbone-carbone.`,
    ],
  },
  {
    order: 109,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Toujours à propos de la figure précédente :`,
    choices: [
      `Les produits A à F conservent les trois carbones dans une seule molécule organique.`,
      `Le produit G illustre une fragmentation du squelette carboné.`,
      `Les produits B et C contiennent respectivement deux et un atome de brome.`,
      `L'hydrogénation et l'oxydation forte conduisent au même type de produit.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les additions, l'époxydation et la formation du diol conservent le squelette à trois carbones. La coupure oxydative le fragmente en deux composés carbonylés. $\\mathrm{Br_2}$ apporte deux bromes alors que $\\mathrm{HBr}$ n'en apporte qu'un.`,
    choiceExplanations: [
      `A à F sont tous dérivés du même squelette de propène sans coupure $\\mathrm{C-C}$.`,
      `La coupure donne deux molécules distinctes.`,
      `C'est la différence essentielle entre l'addition de $\\mathrm{Br_2}$ et celle de $\\mathrm{HBr}$.`,
      `L'hydrogénation donne un alcane, tandis que l'oxydation forte donne des composés carbonylés.`,
    ],
  },
  {
    order: 110,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `�' propos des hydrocarbures et de leur réactivité :`,
    choices: [
      `La formule $\\mathrm{C_5H_{10}}$ peut correspondre à un cyclane ou à un monoalcène acyclique.`,
      `L'addition de $\\mathrm{Br_2}$ sur un alcène ajoute un $\\mathrm{Br}$ sur chacun des anciens carbones de la double liaison.`,
      `L'oxydation modérée d'un alcène conduit à un 1,2-diol.`,
      `L'hydratation d'un alcyne terminal conduit finalement à un alcool stable ne subissant aucune tautomérie.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La formule brute ne distingue pas toujours cyclane et alcène. L'addition de dibrome et l'oxydation modérée donnent respectivement un dérivé vicinal dihalogéné et un diol vicinal. L'hydratation d'un alcyne terminal forme d'abord un énol, puis une méthylcétone par tautomérie.`,
    choiceExplanations: [
      `Les deux familles peuvent suivre $\\mathrm{C_nH_{2n}}$.`,
      `La double liaison est consommée et chaque carbone reçoit un brome.`,
      `Les deux groupes $\\mathrm{OH}$ sont portés par des carbones voisins.`,
      `L'énol intermédiaire se transforme en cétone.`,
    ],
  },
  {
    order: 111,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la chaîne de synthèse représentée en figure précédente :`,
    choices: [
      `Le but-2-yne est un alcyne interne.`,
      `Le but-2-ène est un alcène.`,
      `Le butane-2,3-diol possède deux fonctions alcool sur des carbones voisins.`,
      `La première étape transforme directement l'alcyne en alcane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La triple liaison du but-2-yne est située entre deux chaînes carbonées : l'alcyne est interne. L'hydrogénation partielle donne un alcène, puis l'oxydation modérée forme un 1,2-diol.`,
    choiceExplanations: [
      `Aucun hydrogène terminal n'est directement porté par un carbone de la triple liaison.`,
      `Le but-2-ène comporte une liaison double.`,
      `Les groupes $\\mathrm{OH}$ sont portés par C2 et C3.`,
      `La première étape est volontairement arrêtée au stade alcène.`,
    ],
  },
  {
    order: 112,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Quelles conditions sont compatibles avec la séquence de la figure précédente ?`,
    choices: [
      `Une hydrogénation partielle contrôlée pour la première étape.`,
      `Une oxydation modérée de l'alcène pour la seconde étape.`,
      `Une hydrogénation complète dès la première étape pour obtenir l'intermédiaire représenté.`,
      `Une oxydation forte pour obtenir directement le diol sans rupture de chaîne.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La première étape doit conserver une double liaison et nécessite donc une hydrogénation partielle. La seconde ajoute deux groupes $\\mathrm{OH}$ sans couper le squelette, ce qui correspond à l'oxydation modérée.`,
    choiceExplanations: [
      `Une seule molécule de $\\mathrm{H_2}$ est ajoutée au niveau de la triple liaison.`,
      `L'oxydation modérée donne un diol vicinal.`,
      `L'hydrogénation complète donnerait le butane.`,
      `L'oxydation forte couperait la liaison entre les carbones 2 et 3.`,
    ],
  },
  {
    order: 113,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant les formules brutes au cours de la séquence F4 :`,
    choices: [
      `Le but-2-yne a pour formule $\\mathrm{C_4H_6}$.`,
      `Le but-2-ène a pour formule $\\mathrm{C_4H_8}$.`,
      `Le butane-2,3-diol a pour formule $\\mathrm{C_4H_{10}O_2}$.`,
      `Le passage de l'alcyne à l'alcène ajoute quatre atomes d'hydrogène.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Un monoalcyne à quatre carbones suit $\\mathrm{C_nH_{2n-2}}$, le monoalcène correspondant suit $\\mathrm{C_nH_{2n}}$, et l'addition de deux groupes $\\mathrm{OH}$ et de deux $\\mathrm{H}$ sur l'alcène conduit à $\\mathrm{C_4H_{10}O_2}$. La première étape ajoute seulement une molécule de $\\mathrm{H_2}$.`,
    choiceExplanations: [
      `$2n-2=6$ pour $n=4$.`,
      `$2n=8$ pour $n=4$.`,
      `Le diol saturé comporte dix hydrogènes et deux oxygènes.`,
      `Une molécule de $\\mathrm{H_2}$ n'apporte que deux atomes d'hydrogène.`,
    ],
  },
  {
    order: 114,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `�' propos des produits de coupure présentés en figure précédente :`,
    choices: [
      `L'éthanal est un aldéhyde.`,
      `La propanone est une cétone.`,
      `Le carbone de l'alcène ayant donné l'éthanal portait initialement un hydrogène.`,
      `Le carbone de l'alcène ayant donné la propanone portait initialement deux hydrogènes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Un ancien carbone de la double liaison portant un hydrogène donne ici un aldéhyde. Celui portant deux groupes carbonés et aucun hydrogène donne une cétone.`,
    choiceExplanations: [
      `Le motif terminal CHO caractérise un aldéhyde.`,
      `Le carbonyle de la propanone est lié à deux groupes méthyle.`,
      `Le $\\mathrm{H}$ porté par l'ancien carbone est conservé dans le groupe $\\mathrm{CHO}$.`,
      `Le carbone donnant la propanone portait deux groupes $\\mathrm{CH_3}$ et aucun $\\mathrm{H}$.`,
    ],
  },
  {
    order: 115,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `En reconstituant la double liaison à partir de l'éthanal et de la propanone de la figure précédente :`,
    choices: [
      `L'alcène de départ peut être $\\mathrm{CH_3{-}CH{=}C(CH_3)_2}$.`,
      `Le nom correct de cet alcène est 2-méthylbut-2-ène.`,
      `L'alcène de départ possède cinq atomes de carbone.`,
      `L'alcène de départ est nécessairement le pent-1-ène.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `On remplace les deux liaisons $\\mathrm{C=O}$ par une liaison $\\mathrm{C=C}$ entre les carbones carbonylés. Le carbone de l'éthanal retrouve $\\mathrm{H}$ et $\\mathrm{CH_3}$ ; celui de la propanone retrouve deux groupes $\\mathrm{CH_3}$. On obtient le 2-méthylbut-2-ène.`,
    choiceExplanations: [
      `Cette structure redonne exactement les deux fragments après coupure.`,
      `La chaîne principale comporte quatre carbones et le substituant méthyle reçoit l'indice 2.`,
      `Deux carbones proviennent de l'éthanal et trois de la propanone, soit cinq au total.`,
      `Le pent-1-ène donnerait des produits carbonylés différents.`,
    ],
  },
  {
    order: 116,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `�' propos de l'hydratation des deux alcynes de la figure précédente :`,
    choices: [
      `L'addition d'eau conduit d'abord à un énol.`,
      `L'énol comporte à la fois une double liaison et un groupe $\\mathrm{OH}$.`,
      `L'énol se transforme ensuite en composé carbonylé par tautomérie.`,
      `La tautomérie ajoute un nouvel atome de carbone à la molécule.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'hydratation forme un énol intermédiaire. Un déplacement de proton accompagné d'une réorganisation de la liaison $\\pi$ conduit ensuite à une cétone, sans modifier le nombre d'atomes de carbone.`,
    choiceExplanations: [
      `$\\mathrm{H}$ et $\\mathrm{OH}$ s'ajoutent initialement sur les carbones de la triple liaison.`,
      `C'est la définition structurale du motif énol.`,
      `Le groupe $\\mathrm{C=C-OH}$ devient un groupe $\\mathrm{C=O}$.`,
      `La tautomérie conserve la formule brute et le squelette carboné.`,
    ],
  },
  {
    order: 117,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant les produits finaux présentés dans la figure précédente :`,
    choices: [
      `Le pent-2-yne, alcyne interne non symétrique, peut conduire aux pentan-2-one et pentan-3-one dans le cadrage du cours.`,
      `Le propyne est un alcyne vrai terminal.`,
      `L'hydratation du propyne conduit finalement à la propanone, une méthylcétone.`,
      `L'hydratation du propyne conduit finalement au propanal dans le cadre présenté.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'orientation de l'hydratation d'un alcyne interne non symétrique peut fournir deux énols puis deux cétones. Pour l'alcyne terminal, l'orientation de Markovnikov conduit à une méthylcétone ; le propyne donne donc la propanone.`,
    choiceExplanations: [
      `Les deux orientations conduisent aux deux positions possibles du carbonyle.`,
      `Sa triple liaison se termine par un carbone portant H.`,
      `La formule du produit final est $\\mathrm{CH_3{-}CO{-}CH_3}$.`,
      `Le produit attendu est une cétone, non un aldéhyde.`,
    ],
  },
  {
    order: 118,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `�' propos des cyclanes et de leur stabilité :`,
    choices: [
      `Les cyclanes saturés répondent à la formule générale $\\mathrm{C_nH_{2n}}$.`,
      `Le cyclopropane et le cyclobutane sont des cycles tendus et relativement instables.`,
      `Le cyclopentane et le cyclohexane sont présentés comme particulièrement stables dans le cours.`,
      `Un cyclane saturé possède nécessairement une double liaison.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La fermeture du cycle fait perdre deux hydrogènes par rapport à l'alcane acyclique correspondant, sans créer de double liaison. Les petits cycles sont tendus, tandis que les cycles à cinq et six carbones sont plus stables.`,
    choiceExplanations: [
      `C'est la formule générale retenue pour les monocyclanes saturés.`,
      `Leurs angles sont éloignés de la géométrie tétraédrique idéale.`,
      `Ils minimisent mieux les contraintes géométriques.`,
      `La formule $\\mathrm{C_nH_{2n}}$ peut résulter de la fermeture d'un cycle sans insaturation pi.`,
    ],
  },
  {
    order: 119,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Pour atteindre les objectifs de synthèse suivants :`,
    choices: [
      `Un alcool peut être transformé en alcène par déshydratation.`,
      `Un alcène peut être transformé en alcane par hydrogénation catalytique.`,
      `Un alcyne peut être transformé en alcène par hydrogénation partielle.`,
      `Un alcène peut être transformé en dérivé vicinal dibromé par addition de $\\mathrm{HBr}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les trois premières propositions correspondent aux transformations étudiées. Un dérivé vicinal dibromé nécessite l'addition de $\\mathrm{Br_2}$ ; $\\mathrm{HBr}$ n'apporte qu'un seul atome de brome.`,
    choiceExplanations: [
      `L'élimination de $\\mathrm{H_2O}$ crée la double liaison.`,
      `L'addition de $\\mathrm{H_2}$ sature la double liaison.`,
      `Une seule étape de réduction de la triple liaison donne un alcène.`,
      `$\\mathrm{HBr}$ donne un bromure d'alkyle monobromé.`,
    ],
  },
  {
    order: 120,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `La figure précédente représente le pent-1-yne utilisé comme précurseur dans une synthèse pharmaceutique. �' propos de ce composé :`,
    choices: [
      `Sa formule brute est $\\mathrm{C_5H_8}$.`,
      `Il s'agit d'un alcyne vrai terminal.`,
      `Son hydrogénation partielle peut conduire au pent-1-ène, tandis que son hydrogénation complète conduit au pentane.`,
      `Son hydratation selon le cadrage du cours conduit finalement à la pentan-2-one.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Le pent-1-yne suit la formule $\\mathrm{C_nH_{2n-2}}$, possède une triple liaison terminale, peut être réduit successivement en pent-1-ène puis en pentane et donne une méthylcétone, la pentan-2-one, après hydratation et tautomérie.`,
    choiceExplanations: [
      `Pour $n=5$, $2n-2=8$.`,
      `La triple liaison est située à l'extrémité de la chaîne.`,
      `Une puis deux molécules de $\\mathrm{H_2}$ conduisent respectivement à l'alcène et à l'alcane.`,
      `Un alcyne terminal de type $\\mathrm{R{-}C{\\equiv}CH}$ conduit à $\\mathrm{R{-}CO{-}CH_3}$.`,
    ],
  },
];
