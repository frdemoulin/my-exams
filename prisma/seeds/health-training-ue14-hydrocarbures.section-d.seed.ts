import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_DISCOVERY_QUIZ_SLUG =
  'section-d-discovery-oxydation-alcenes';
export const SECTION_D_PRACTICE_QUIZ_SLUG =
  'section-d-practice-produits-oxydation-alcenes';

export const SECTION_D_DISCOVERY_QUESTION_ORDERS: number[] = [
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
];
export const SECTION_D_PRACTICE_QUESTION_ORDERS: number[] = [
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
];

const FIGURE_BASE_PATH = '/images/training/ue14/hydrocarbures';

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_D_DISCOVERY_QUIZ_SLUG,
    title: `Oxydation des alcènes`,
    description: `Distinguer oxydations douce, modérée et forte, puis reconnaître un époxyde, un 1,2-diol et les produits carbonylés d'une coupure oxydante.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_D_ORDER,
    items: [
      {
        type: 'GROUP',
        title: `Trois niveaux d'oxydation`,
        sharedStatement: `Les questions 61 à 63 s'appuient sur la figure ci-dessous, qui compare les oxydations douce, modérée et forte d'un alcène.

![Trois niveaux d'oxydation des alcènes](${FIGURE_BASE_PATH}/figure-d1-trois-niveaux-oxydation.svg)`,
        questionOrders: [61, 62, 63],
      },
      {
        type: 'GROUP',
        title: `Formation d'un époxyde`,
        sharedStatement: `Les questions 64 à 66 s'appuient sur la figure ci-dessous. Lors d'une étape de synthèse pharmaceutique, l'éthène est transformé en un cycle oxygéné à trois atomes.

![Formation d'un époxyde à partir de l'éthène](${FIGURE_BASE_PATH}/figure-d2-ethene-epoxyde.svg)`,
        questionOrders: [64, 65, 66],
      },
      {
        type: 'GROUP',
        title: `Formation d'un 1,2-diol`,
        sharedStatement: `Les questions 67 à 69 s'appuient sur la figure ci-dessous. Une oxydation modérée de l'éthène conduit à l'éthane-1,2-diol.

![Formation de l'éthane-1,2-diol](${FIGURE_BASE_PATH}/figure-d3-ethene-diol.svg)`,
        questionOrders: [67, 68, 69],
      },
      { type: 'QUESTION', questionOrder: 70 },
    ],
  },
  {
    order: 2,
    slug: SECTION_D_PRACTICE_QUIZ_SLUG,
    title: `Prévision des produits d'oxydation des alcènes`,
    description: `Appliquer les trois niveaux d'oxydation à des alcènes précis, distinguer aldéhydes et cétones et reconstituer un alcène à partir de ses produits de coupure.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_D_ORDER,
    items: [
      {
        type: 'GROUP',
        title: `But-2-ène soumis à trois oxydations`,
        sharedStatement: `Les questions 71 à 73 s'appuient sur la figure ci-dessous, qui compare les trois niveaux d'oxydation du but-2-ène.

![Trois oxydations du but-2-ène](${FIGURE_BASE_PATH}/figure-d4-but-2-ene-trois-oxydations.svg)`,
        questionOrders: [71, 72, 73],
      },
      {
        type: 'GROUP',
        title: `Aldéhydes, cétones et substitution`,
        sharedStatement: `Les questions 74 à 76 s'appuient sur la figure ci-dessous, qui relie la substitution des carbones de l'alcène aux produits carbonylés d'une coupure oxydante.

![Aldéhydes et cétones selon la substitution](${FIGURE_BASE_PATH}/figure-d5-aldehydes-cetones-substitution.svg)`,
        questionOrders: [74, 75, 76],
      },
      {
        type: 'GROUP',
        title: `Reconstitution de l'alcène`,
        sharedStatement: `Les questions 77 et 78 s'appuient sur la figure ci-dessous. Une coupure oxydante donne de l'éthanal $\\mathrm{CH_3CHO}$ et de la propanone $\\mathrm{CH_3COCH_3}$.

![Reconstitution de l'alcène de départ](${FIGURE_BASE_PATH}/figure-d6-reconstitution-alcene.svg)`,
        questionOrders: [77, 78],
      },
      { type: 'QUESTION', questionOrder: 79 },
      {
        type: 'GROUP',
        title: `Oxydations du 2-méthylbut-2-ène`,
        sharedStatement: `La question 80 reprend le 2-méthylbut-2-ène de la figure ci-dessous.

![Aldéhydes et cétones selon la substitution](${FIGURE_BASE_PATH}/figure-d5-aldehydes-cetones-substitution.svg)`,
        questionOrders: [80],
      },
    ],
  },
];

export const SECTION_D_QUESTIONS: SeedQuestion[] = [
  {
    order: 61,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'oxydation d'un alcène :`,
    choices: [
      `La double liaison constitue le site principal de la transformation étudiée.`,
      `Les deux carbones de l'ancienne double liaison peuvent recevoir de nouvelles liaisons avec l'oxygène.`,
      `Toute oxydation d'un alcène coupe nécessairement la chaîne carbonée.`,
      `Les produits dépendent de l'intensité de l'oxydation.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le cours distingue trois niveaux d'oxydation. Les oxydations douce et modérée conservent la liaison entre les deux carbones, tandis que l'oxydation forte rompt l'ancienne double liaison et forme des composés carbonylés.`,
    choiceExplanations: [
      `La liaison $\\pi$ est la zone réactive de l'alcène.`,
      `C'est le cas dans la formation d'un époxyde ou d'un diol.`,
      `Seule l'oxydation forte étudiée provoque la coupure du squelette à cet endroit.`,
      `Époxyde, diol ou fragments carbonylés sont obtenus selon les conditions.`,
    ],
  },
  {
    order: 62,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente, quelles associations sont correctes ?`,
    choices: [
      `Oxydation douce : formation d'un époxyde.`,
      `Oxydation modérée : formation d'un 1,2-diol.`,
      `Oxydation forte : coupure de la double liaison en composés carbonylés.`,
      `Oxydation douce : hydrogénation de l'alcène en alcane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La progression du cours est nette : époxyde pour l'oxydation douce, diol vicinal pour l'oxydation modérée et rupture oxydante vers des aldéhydes ou des cétones pour l'oxydation forte.`,
    choiceExplanations: [
      `Un oxygène forme un cycle à trois atomes avec les deux anciens carbones de la double liaison.`,
      `Un groupe $\\mathrm{OH}$ est installé sur chacun des deux carbones voisins.`,
      `Chaque carbone de l'ancienne double liaison devient le carbone d'un groupe carbonyle.`,
      `L'hydrogénation est une réduction et non une oxydation.`,
    ],
  },
  {
    order: 63,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant la conservation du squelette carboné lors des trois oxydations représentées ci-dessus :`,
    choices: [
      `La liaison carbone-carbone est conservée lors de l'oxydation douce.`,
      `La liaison carbone-carbone est conservée lors de l'oxydation modérée.`,
      `La liaison entre les deux anciens carbones de la double liaison est rompue lors de l'oxydation forte.`,
      `Les trois oxydations produisent exactement le même nombre de molécules organiques.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'époxydation et la formation du diol modifient la double liaison sans séparer les deux carbones. La coupure oxydante forte peut au contraire transformer une seule molécule d'alcène en deux fragments carbonylés.`,
    choiceExplanations: [
      `Le cycle époxyde conserve la liaison $\\mathrm{C{-}C}$.`,
      `Le 1,2-diol conserve également la chaîne.`,
      `C'est la caractéristique structurale de l'oxydation forte décrite.`,
      `Une coupure peut augmenter le nombre de molécules organiques obtenues.`,
    ],
  },
  {
    order: 64,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de cette transformation de l'éthène en cycle oxygéné à trois atomes :`,
    choices: [
      `Le produit est un époxyde.`,
      `Le cycle contient deux carbones et un oxygène.`,
      `Le produit est un éther cyclique à trois atomes.`,
      `Le produit est un alcane dépourvu d'oxygène.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Un époxyde est un éther cyclique à trois atomes comportant un oxygène et les deux carbones issus de l'ancienne double liaison.`,
    choiceExplanations: [
      `C'est le produit caractéristique de l'oxydation douce étudiée.`,
      `L'oxygène relie les deux anciens carbones de l'alcène.`,
      `Cette description structurale correspond bien à un époxyde.`,
      `Un atome d'oxygène est au contraire incorporé.`,
    ],
  },
  {
    order: 65,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Toujours à propos de la formation de l'époxyde représentée ci-dessus :`,
    choices: [
      `La double liaison disparaît.`,
      `Deux liaisons $\\mathrm{C{-}O}$ sont formées.`,
      `La liaison $\\mathrm{C{-}C}$ entre les deux carbones est conservée.`,
      `La chaîne carbonée est coupée en deux aldéhydes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'oxydation douce convertit la double liaison en un cycle comportant une liaison $\\mathrm{C{-}C}$ et deux liaisons $\\mathrm{C{-}O}$. Elle ne fragmente pas le squelette carboné.`,
    choiceExplanations: [
      `La composante $\\pi$ de la double liaison est consommée.`,
      `Chaque ancien carbone de l'alcène se lie à l'oxygène.`,
      `Cette liaison constitue le troisième côté du petit cycle.`,
      `La formation d'aldéhydes relève d'une coupure oxydante forte.`,
    ],
  },
  {
    order: 66,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À partir de l'éthène, une oxydation douce conduit au produit représenté ci-dessus. Parmi les propositions suivantes :`,
    choices: [
      `Le produit contient toujours deux atomes de carbone.`,
      `Le produit appartient à la famille des époxydes.`,
      `Le produit possède deux fonctions alcool libres.`,
      `Cette transformation se distingue de l'oxydation modérée.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'éthène conserve ses deux carbones et donne l'oxyde d'éthylène, un époxyde. Les deux groupes $\\mathrm{OH}$ libres apparaissent seulement lors de l'oxydation modérée en diol.`,
    choiceExplanations: [
      `Aucun carbone n'est perdu.`,
      `Le cycle $\\mathrm{C{-}C{-}O}$ est caractéristique.`,
      `L'oxygène est inclus dans un éther cyclique et non dans deux groupes $\\mathrm{OH}$.`,
      `Les deux niveaux d'oxydation conduisent à des fonctions différentes.`,
    ],
  },
  {
    order: 67,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de cette oxydation modérée de l'éthène en éthane-1,2-diol :`,
    choices: [
      `Le produit contient deux fonctions alcool.`,
      `Les deux groupes $\\mathrm{OH}$ sont portés par deux carbones voisins.`,
      `Le produit peut être qualifié de 1,2-diol ou diol vicinal.`,
      `Le produit est un aldéhyde.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'oxydation modérée place un groupe hydroxyle sur chacun des deux anciens carbones de la double liaison. Les fonctions alcool sont donc voisines.`,
    choiceExplanations: [
      `Le suffixe diol signale deux groupes $\\mathrm{OH}$.`,
      `Les indices 1 et 2 traduisent leur voisinage.`,
      `Le terme vicinal signifie précisément portés par des carbones adjacents.`,
      `Aucun groupe carbonyle n'est formé à ce stade.`,
    ],
  },
  {
    order: 68,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant le bilan structural de l'oxydation modérée illustrée ci-dessus :`,
    choices: [
      `La double liaison disparaît.`,
      `Un groupe $\\mathrm{OH}$ est ajouté sur chacun des deux anciens carbones de la double liaison.`,
      `La chaîne carbonée demeure intacte.`,
      `Une molécule de dihydrogène est ajoutée pour former un alcane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La transformation de l'alcène en 1,2-diol consomme la double liaison et introduit deux groupes hydroxyle sans coupure du squelette.`,
    choiceExplanations: [
      `La liaison $\\pi$ est consommée.`,
      `C'est la caractéristique de cette oxydation.`,
      `Les deux carbones restent liés l'un à l'autre.`,
      `Cette proposition décrit une hydrogénation, pas une oxydation modérée.`,
    ],
  },
  {
    order: 69,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos du produit $\\mathrm{HO{-}CH_2{-}CH_2{-}OH}$ représenté ci-dessus :`,
    choices: [
      `Il possède la formule brute $\\mathrm{C_2H_6O_2}$.`,
      `Il peut être nommé éthane-1,2-diol.`,
      `Il résulte d'une oxydation modérée de l'éthène dans le cadre du cours.`,
      `Il est identique à l'époxyde obtenu par oxydation douce.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'éthane-1,2-diol comporte deux carbones, six hydrogènes et deux oxygènes. Il est distinct de l'époxyde, qui ne possède qu'un seul oxygène et un cycle à trois atomes.`,
    choiceExplanations: [
      `Le décompte donne bien $\\mathrm{C_2H_6O_2}$.`,
      `La chaîne est un éthane et les $\\mathrm{OH}$ occupent les carbones 1 et 2.`,
      `C'est l'exemple-type de l'oxydation modérée.`,
      `Les fonctions et les formules brutes sont différentes.`,
    ],
  },
  {
    order: 70,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des trois niveaux d'oxydation des alcènes :`,
    choices: [
      `L'oxydation douce conduit à un époxyde.`,
      `L'oxydation modérée conduit à un 1,2-diol.`,
      `L'oxydation forte peut rompre la chaîne au niveau de l'ancienne double liaison.`,
      `Les trois transformations conduisent nécessairement au même produit.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le produit permet d'identifier le niveau d'oxydation : cycle époxyde, diol vicinal ou composés carbonylés après coupure.`,
    choiceExplanations: [
      `C'est le marqueur de l'oxydation douce.`,
      `C'est le marqueur de l'oxydation modérée.`,
      `C'est la transformation structurale de l'oxydation forte.`,
      `La différence de produits constitue justement l'objet de la section.`,
    ],
  },
  {
    order: 71,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Lors de l'oxydation douce du but-2-ène :`,
    choices: [
      `La double liaison est remplacée par un cycle époxyde.`,
      `Les quatre carbones restent dans une seule molécule organique.`,
      `Deux molécules d'éthanal sont formées.`,
      `La liaison entre les carbones 2 et 3 est conservée.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'oxydation douce du but-2-ène forme un époxyde sur les carbones 2 et 3. Le squelette à quatre carbones reste intact.`,
    choiceExplanations: [
      `L'oxygène relie les deux anciens carbones de la double liaison.`,
      `Il n'y a pas de fragmentation.`,
      `Deux éthanals seraient obtenus après oxydation forte.`,
      `Cette liaison forme un côté du cycle époxyde.`,
    ],
  },
  {
    order: 72,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Lors de l'oxydation modérée du but-2-ène représentée ci-dessus :`,
    choices: [
      `Le produit est le butane-2,3-diol.`,
      `Un groupe $\\mathrm{OH}$ est installé sur chacun des carbones 2 et 3.`,
      `Le produit conserve quatre atomes de carbone dans une même chaîne.`,
      `Le produit est le butane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le but-2-ène devient $\\mathrm{CH_3{-}CH(OH){-}CH(OH){-}CH_3}$, soit le butane-2,3-diol.`,
    choiceExplanations: [
      `Les indices correspondent aux anciens carbones de la double liaison.`,
      `C'est le bilan d'une oxydation modérée.`,
      `Aucune coupure n'a lieu.`,
      `Le butane serait obtenu par hydrogénation.`,
    ],
  },
  {
    order: 73,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Lors de l'oxydation forte du but-2-ène représenté ci-dessus :`,
    choices: [
      `La liaison entre les carbones 2 et 3 est rompue.`,
      `Deux molécules d'éthanal sont obtenues.`,
      `Les deux fragments sont identiques en raison de la symétrie du but-2-ène.`,
      `Une seule molécule de butane-2,3-diol est obtenue.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Chaque carbone de la double liaison portait un groupe $\\mathrm{CH_3}$ et un hydrogène. Après coupure, chacun donne donc une molécule de $\\mathrm{CH_3CHO}$, l'éthanal.`,
    choiceExplanations: [
      `C'est le principe de la coupure oxydante forte.`,
      `Un carbone de double liaison portant un $\\mathrm{H}$ conduit ici à un aldéhyde.`,
      `Les deux moitiés de la molécule sont équivalentes.`,
      `Le diol correspond à l'oxydation modérée.`,
    ],
  },
  {
    order: 74,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Lors d'une coupure oxydante forte, un ancien carbone de la double liaison qui portait un hydrogène :`,
    choices: [
      `peut conduire à un aldéhyde dans le cadre du cours.`,
      `devient le carbone du groupe carbonyle.`,
      `donne nécessairement une cétone.`,
      `conserve sur le produit l'hydrogène qu'il portait.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le carbone de l'ancienne double liaison devient un carbone carbonylé. S'il portait un hydrogène, celui-ci reste lié au carbone du carbonyle : le produit est alors un aldéhyde.`,
    choiceExplanations: [
      `C'est la règle de lecture utilisée dans les exercices de cette section.`,
      `La liaison $\\mathrm{C{=}C}$ est remplacée par une liaison $\\mathrm{C{=}O}$ sur chaque fragment.`,
      `Une cétone est obtenue lorsque le carbone ne portait aucun $\\mathrm{H}$.`,
      `Ce $\\mathrm{H}$ distingue précisément l'aldéhyde de la cétone.`,
    ],
  },
  {
    order: 75,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le 2-méthylbut-2-ène $\\mathrm{(CH_3)_2C{=}CH{-}CH_3}$ est également représenté ci-dessus. Après oxydation forte :`,
    choices: [
      `Le carbone portant deux groupes $\\mathrm{CH_3}$ donne une cétone.`,
      `Le carbone portant $\\mathrm{H}$ et $\\mathrm{CH_3}$ donne un aldéhyde.`,
      `Les produits sont la propanone et l'éthanal.`,
      `Les deux produits sont nécessairement des aldéhydes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le carbone sans hydrogène, lié à deux groupes méthyle, donne la propanone. L'autre carbone, lié à $\\mathrm{H}$ et $\\mathrm{CH_3}$, donne l'éthanal.`,
    choiceExplanations: [
      `Un carbonyle lié à deux groupes carbonés est une cétone.`,
      `Un carbonyle conservant un $\\mathrm{H}$ est un aldéhyde.`,
      `Ce sont les deux fragments attendus.`,
      `Un seul des deux carbones portait un hydrogène.`,
    ],
  },
  {
    order: 76,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Pour l'alcène tétrasubstitué $\\mathrm{(CH_3)_2C{=}C(CH_3)_2}$ présenté ci-dessus :`,
    choices: [
      `Aucun des deux carbones de la double liaison ne porte d'hydrogène.`,
      `La coupure oxydante conduit uniquement à des cétones.`,
      `Deux molécules de propanone sont obtenues.`,
      `Deux molécules d'éthanal sont obtenues.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Chaque carbone de la double liaison est lié à deux groupes $\\mathrm{CH_3}$. Après coupure, chacun devient le carbone carbonylé d'une molécule de propanone.`,
    choiceExplanations: [
      `L'alcène est bien tétrasubstitué.`,
      `Sans $\\mathrm{H}$ sur les carbones de la double liaison, aucun aldéhyde n'apparaît.`,
      `Les deux côtés sont identiques.`,
      `L'éthanal nécessiterait un $\\mathrm{H}$ et un $\\mathrm{CH_3}$ sur le carbone initial.`,
    ],
  },
  {
    order: 77,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de ces produits de coupure oxydante :`,
    choices: [
      `Le carbone ayant donné l'éthanal portait $\\mathrm{H}$ et $\\mathrm{CH_3}$ dans l'alcène.`,
      `Le carbone ayant donné la propanone portait deux groupes $\\mathrm{CH_3}$.`,
      `Les deux carbones carbonylés étaient les deux carbones de l'ancienne double liaison.`,
      `L'alcène de départ ne pouvait contenir aucune double liaison.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Pour remonter à l'alcène, on remplace les deux groupes $\\mathrm{C{=}O}$ par une liaison $\\mathrm{C{=}C}$ entre les carbones carbonylés, en conservant leurs substituants.`,
    choiceExplanations: [
      `Le motif $\\mathrm{CH_3{-}CHO}$ révèle les substituants $\\mathrm{CH_3}$ et $\\mathrm{H}$.`,
      `La propanone révèle deux groupes $\\mathrm{CH_3}$ autour de son carbone carbonylé.`,
      `Ce sont eux qu'il faut reconnecter.`,
      `La coupure oxydante provient précisément d'une double liaison.`,
    ],
  },
  {
    order: 78,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À partir des produits représentés ci-dessus, l'alcène de départ peut être reconstitué :`,
    choices: [
      `Sa formule semi-développée est $\\mathrm{CH_3{-}CH{=}C(CH_3)_2}$.`,
      `Il peut être nommé 2-méthylbut-2-ène.`,
      `Il possède cinq atomes de carbone.`,
      `Il s'agit nécessairement du but-2-ène non ramifié.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La réunion des deux carbones carbonylés donne $\\mathrm{CH_3{-}CH{=}C(CH_3)_2}$, soit le 2-méthylbut-2-ène, un alcène ramifié à cinq carbones.`,
    choiceExplanations: [
      `Cette structure réunit correctement les substituants des deux carbonyles.`,
      `La chaîne principale compte quatre carbones et porte un méthyle en position 2.`,
      `Le décompte total donne cinq carbones.`,
      `Le but-2-ène donnerait deux molécules d'éthanal.`,
    ],
  },
  {
    order: 79,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Pour distinguer plusieurs transformations d'un alcène :`,
    choices: [
      `L'hydrogénation conduit à un alcane.`,
      `L'hydratation conduit à un alcool.`,
      `L'oxydation modérée conduit à un 1,2-diol.`,
      `L'oxydation forte peut fragmenter le squelette en composés carbonylés.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Ces quatre transformations ont des bilans distincts. La reconnaissance du produit permet généralement d'identifier la réaction mise en jeu.`,
    choiceExplanations: [
      `Deux hydrogènes saturent la double liaison.`,
      `$\\mathrm{H}$ et $\\mathrm{OH}$ s'ajoutent sur la double liaison.`,
      `Deux groupes $\\mathrm{OH}$ voisins sont formés.`,
      `La coupure conduit à des aldéhydes ou des cétones dans le cadre du cours.`,
    ],
  },
  {
    order: 80,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des réactions d'oxydation de ce 2-méthylbut-2-ène :`,
    choices: [
      `Une oxydation douce conserve les cinq carbones dans un même époxyde.`,
      `Une oxydation modérée conserve les cinq carbones dans un 1,2-diol.`,
      `Une oxydation forte forme notamment une cétone et un aldéhyde.`,
      `Une oxydation forte conduit au butane sans oxygène.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les oxydations douce et modérée conservent le squelette. L'oxydation forte coupe la double liaison et donne ici la propanone et l'éthanal.`,
    choiceExplanations: [
      `La cyclisation époxyde ne retire aucun carbone.`,
      `La formation du diol ne fragmente pas la chaîne.`,
      `Les deux anciens carbones de la double liaison n'avaient pas la même substitution.`,
      `Le butane serait un produit de réduction d'un alcène à quatre carbones, pas d'oxydation.`,
    ],
  },
];
