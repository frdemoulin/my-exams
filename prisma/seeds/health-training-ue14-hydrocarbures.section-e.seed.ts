import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_E_ORDER = 5;

export const SECTION_E_DISCOVERY_QUIZ_SLUG =
  'section-e-discovery-alcynes-structure-nomenclature-hydrogenation';
export const SECTION_E_PRACTICE_QUIZ_SLUG =
  'section-e-practice-alcynes-additions-hydratation';

export const SECTION_E_DISCOVERY_QUESTION_ORDERS: number[] = [
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
];
export const SECTION_E_PRACTICE_QUESTION_ORDERS: number[] = [
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
];

const FIGURE_BASE_PATH = '/images/training/ue14/hydrocarbures';

export const SECTION_E_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_E_DISCOVERY_QUIZ_SLUG,
    title: `Alcynes : structure, nomenclature et hydrogénation`,
    description: `Reconnaître un alcyne, appliquer la formule générale, distinguer alcyne interne et alcyne vrai, puis suivre son hydrogénation partielle ou complète.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_E_ORDER,
    items: [
      {
        type: 'GROUP',
        title: `Familles d'hydrocarbures`,
        sharedStatement: `Les questions 81 à 83 s'appuient sur la figure ci-dessous, qui compare les grandes familles d'hydrocarbures et les motifs de liaison.

![Familles d'hydrocarbures](${FIGURE_BASE_PATH}/figure-e1-familles-hydrocarbures.svg)`,
        questionOrders: [81, 82, 83],
      },
      { type: 'QUESTION', questionOrder: 84 },
      { type: 'QUESTION', questionOrder: 85 },
      { type: 'QUESTION', questionOrder: 86 },
      {
        type: 'GROUP',
        title: `But-1-yne et but-2-yne`,
        sharedStatement: `Les questions 87 et 88 s'appuient sur la figure ci-dessous, qui compare le but-1-yne et le but-2-yne.

![But-1-yne et but-2-yne](${FIGURE_BASE_PATH}/figure-e2-but-1-yne-but-2-yne.svg)`,
        questionOrders: [87, 88],
      },
      {
        type: 'GROUP',
        title: `Hydrogénation d'un alcyne`,
        sharedStatement: `Les questions 89 et 90 s'appuient sur la figure ci-dessous. Une hydrogénation catalytique peut réduire progressivement une triple liaison.

![Hydrogénation progressive d'un alcyne](${FIGURE_BASE_PATH}/figure-e3-hydrogenation-alcyne.svg)`,
        questionOrders: [89, 90],
      },
    ],
  },
  {
    order: 2,
    slug: SECTION_E_PRACTICE_QUIZ_SLUG,
    title: `Réactivité des alcynes`,
    description: `Prévoir les produits d'addition d'un dihalogène et d'hydratation, puis relier l'énol intermédiaire à la cétone obtenue par tautomérie.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_E_ORDER,
    items: [
      {
        type: 'GROUP',
        title: `Additions successives de dibrome`,
        sharedStatement: `Les questions 91 à 93 s'appuient sur la figure ci-dessous, qui montre deux additions successives de $\\mathrm{Br_2}$ sur un alcyne.

![Additions successives de dibrome](${FIGURE_BASE_PATH}/figure-e4-additions-successives-br2.svg)`,
        questionOrders: [91, 92, 93],
      },
      {
        type: 'GROUP',
        title: `Hydratation d'un alcyne interne`,
        sharedStatement: `Les questions 94 à 96 s'appuient sur la figure ci-dessous, qui présente l'hydratation d'un alcyne interne et la tautomérie énol-cétone.

![Hydratation d'un alcyne interne](${FIGURE_BASE_PATH}/figure-e5-hydratation-alcyne-interne.svg)`,
        questionOrders: [94, 95, 96],
      },
      {
        type: 'GROUP',
        title: `Hydratation d'un alcyne vrai`,
        sharedStatement: `Les questions 97 à 99 s'appuient sur la figure ci-dessous, qui présente l'hydratation d'un alcyne vrai selon Markovnikov et la formation d'une méthylcétone.

![Hydratation d'un alcyne vrai](${FIGURE_BASE_PATH}/figure-e6-alcyne-vrai-methylcetone.svg)`,
        questionOrders: [97, 98, 99],
      },
      { type: 'QUESTION', questionOrder: 100 },
    ],
  },
];

export const SECTION_E_QUESTIONS: SeedQuestion[] = [
  {
    order: 81,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos des alcynes :`,
    choices: [
      `Ce sont des hydrocarbures insaturés comportant au moins une triple liaison carbone-carbone.`,
      `Ils sont constitués uniquement de carbone et d'hydrogène.`,
      `Toute triple liaison présente dans une molécule définit nécessairement un alcyne, même s'il s'agit de $\\mathrm{C{\equiv}N}$.`,
      `Un alcyne est plus insaturé que l'alcène correspondant possédant le même nombre de carbones.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Un alcyne est un hydrocarbure contenant une triple liaison $\\mathrm{C{\equiv}C}$. Une triple liaison carbone-azote caractérise au contraire une fonction nitrile.`,
    choiceExplanations: [
      `La triple liaison carbone-carbone est le motif caractéristique de la famille.`,
      `Le mot hydrocarbure impose l'absence d'hétéroatome.`,
      `Le motif $\\mathrm{C{\equiv}N}$ appartient à la famille des nitriles.`,
      `Pour un même nombre de carbones, l'alcyne porte deux hydrogènes de moins que le monoalcène acyclique correspondant.`,
    ],
  },
  {
    order: 82,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Pour un monoalcyne acyclique de formule générale $\\mathrm{C_nH_{2n-2}}$ :`,
    choices: [
      `L'éthyne a pour formule brute $\\mathrm{C_2H_2}$.`,
      `Le propyne a pour formule brute $\\mathrm{C_3H_4}$.`,
      `Un butyne a pour formule brute $\\mathrm{C_4H_6}$.`,
      `Un pentyne a pour formule brute $\\mathrm{C_5H_{12}}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'application de $H = 2n - 2$ donne successivement $\\mathrm{C_2H_2}$, $\\mathrm{C_3H_4}$, $\\mathrm{C_4H_6}$ et $\\mathrm{C_5H_8}$.`,
    choiceExplanations: [
      `Pour $n=2$, on obtient $2n-2=2$.`,
      `Pour $n=3$, on obtient $2n-2=4$.`,
      `Pour $n=4$, on obtient $2n-2=6$.`,
      `$\\mathrm{C_5H_{12}}$ correspond à un alcane acyclique ; le pentyne est $\\mathrm{C_5H_8}$.`,
    ],
  },
  {
    order: 83,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La figure précédente montre notamment un alcyne interne et un alcyne vrai :`,
    choices: [
      `Dans un alcyne interne, la triple liaison est située entre deux groupes carbonés.`,
      `Un alcyne vrai possède une triple liaison en extrémité de chaîne.`,
      `Le motif terminal d'un alcyne vrai peut s'écrire $\\mathrm{R{-}C{\equiv}C{-}H}$.`,
      `Le but-2-yne est un alcyne vrai.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le support appelle « alcyne vrai » un alcyne terminal. Le but-2-yne est interne, car chacun des deux carbones de la triple liaison est lié à un groupe méthyle.`,
    choiceExplanations: [
      `La triple liaison ne se trouve alors à aucune extrémité.`,
      `C'est la définition donnée dans le cours.`,
      `Le carbone terminal de la triple liaison porte un hydrogène.`,
      `Le but-2-yne s'écrit $\\mathrm{CH_3{-}C{\equiv}C{-}CH_3}$ : il est interne.`,
    ],
  },
  {
    order: 84,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la nomenclature des alcynes :`,
    choices: [
      `L'éthyne est aussi appelé acétylène.`,
      `Un alcyne à trois carbones est le propyne.`,
      `Le suffixe caractéristique est -yne.`,
      `Un alcyne à cinq carbones se nomme pentène.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La nomenclature reprend le préfixe lié au nombre de carbones et le suffixe -yne : éthyne, propyne, butyne, pentyne, etc.`,
    choiceExplanations: [
      `Acétylène est le nom usuel de l'éthyne.`,
      `Le préfixe prop- signale trois carbones.`,
      `Le suffixe -yne distingue la triple liaison.`,
      `Pentène désigne un alcène ; l'alcyne correspondant est un pentyne.`,
    ],
  },
  {
    order: 85,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Un hexyne acyclique comporte une seule triple liaison :`,
    choices: [
      `Il possède six atomes de carbone.`,
      `Sa formule brute est $\\mathrm{C_6H_{10}}$.`,
      `Sa formule brute est $\\mathrm{C_6H_{14}}$.`,
      `Il peut exister sous plusieurs isomères de position selon l'emplacement de la triple liaison.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Pour $n=6$, la formule $\\mathrm{C_nH_{2n-2}}$ donne $\\mathrm{C_6H_{10}}$. La triple liaison peut occuper plusieurs positions compatibles avec la chaîne.`,
    choiceExplanations: [
      `Le préfixe hex- indique six carbones.`,
      `$2 \\times 6 - 2 = 10$.`,
      `$\\mathrm{C_6H_{14}}$ est la formule d'un hexane acyclique.`,
      `Hex-1-yne, hex-2-yne et hex-3-yne en sont des exemples non ramifiés.`,
    ],
  },
  {
    order: 86,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Un monoalcyne acyclique possède la formule brute $\\mathrm{C_nH_{12}}$ :`,
    choices: [
      `L'équation à résoudre est $2n-2=12$.`,
      `Il possède sept atomes de carbone.`,
      `Il appartient à la famille des heptynes.`,
      `Il s'agit nécessairement d'un hept-1-yne et d'aucun autre isomère.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `$2n - 2 = 12$ conduit à $2n = 14$, donc $n = 7$. La formule brute seule ne permet toutefois pas de localiser la triple liaison ni les éventuelles ramifications.`,
    choiceExplanations: [
      `On applique directement la formule générale.`,
      `La résolution donne $n=7$.`,
      `Le préfixe hept- correspond à sept carbones.`,
      `Plusieurs isomères sont compatibles avec cette même formule brute.`,
    ],
  },
  {
    order: 87,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' partir de la comparaison représentée ci-dessus :`,
    choices: [
      `Le but-1-yne est un alcyne vrai.`,
      `Le but-2-yne est un alcyne interne.`,
      `Les deux molécules possèdent la formule brute $\\mathrm{C_4H_6}$.`,
      `Le but-2-yne doit être renommé but-3-yne afin de donner le plus grand indice possible.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le but-1-yne est terminal, tandis que le but-2-yne est interne. La numérotation doit donner le plus petit indice possible à la triple liaison.`,
    choiceExplanations: [
      `Sa triple liaison commence au carbone 1.`,
      `Sa triple liaison est située entre les carbones 2 et 3.`,
      `Ce sont des isomères de même formule brute.`,
      `Une lecture depuis l'autre extrémité ramène l'indice 3 à l'indice 1 ; on retient toujours le plus petit.`,
    ],
  },
  {
    order: 88,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente :`,
    choices: [
      `Le but-1-yne et le but-2-yne sont des isomères de position.`,
      `Ils appartiennent tous deux à la famille des alcynes.`,
      `Ils diffèrent par la position de la triple liaison.`,
      `Ils sont des énantiomères.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les deux molécules ont le même squelette carboné et la même fonction alcyne, mais la triple liaison occupe une position différente.`,
    choiceExplanations: [
      `C'est la définition d'une isomérie de position.`,
      `Elles contiennent toutes deux une liaison $\\mathrm{C{\equiv}C}$.`,
      `La triple liaison commence au carbone 1 dans l'une et au carbone 2 dans l'autre.`,
      `La différence n'est pas une relation d'image dans un miroir.`,
    ],
  },
  {
    order: 89,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Lors d'une hydrogénation catalytique d'un alcyne :`,
    choices: [
      `Une première addition d'une molécule de $\\mathrm{H_2}$ peut conduire à un alcène.`,
      `Une seconde addition de $\\mathrm{H_2}$ peut conduire à un alcane.`,
      `L'hydrogénation complète d'une triple liaison consomme au total deux molécules de $\\mathrm{H_2}$.`,
      `L'hydrogénation transforme nécessairement l'alcyne en alcool.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La triple liaison possède deux degrés d'insaturation successivement réduits : alcyne '�� alcène '�� alcane. Chaque étape ajoute une molécule de dihydrogène.`,
    choiceExplanations: [
      `La triple liaison est alors réduite en double liaison.`,
      `La double liaison résiduelle peut ensuite être réduite en liaison simple.`,
      `Deux paires d'atomes d'hydrogène sont nécessaires au total.`,
      `Aucun oxygène n'est introduit lors d'une hydrogénation.`,
    ],
  },
  {
    order: 90,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Dans une chaîne de synthèse pharmaceutique, on souhaite arrêter l'hydrogénation d'un alcyne au stade de l'alcène. D'après le cours :`,
    choices: [
      `Le choix du catalyseur est déterminant.`,
      `Les conditions doivent être contrôlées pour éviter l'hydrogénation complète.`,
      `Il est généralement plus facile d'obtenir directement l'alcane que de s'arrêter à l'alcène.`,
      `Le produit intermédiaire alcène ne peut jamais être obtenu.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'hydrogénation partielle est possible, mais le support souligne l'importance des conditions et la difficulté relative à stopper la réduction au stade de l'alcène.`,
    choiceExplanations: [
      `Un catalyseur adapté permet de moduler la sélectivité.`,
      `Une réduction trop poussée conduit à l'alcane.`,
      `C'est le point d'attention formulé dans la fiche.`,
      `L'alcène est accessible si les conditions sont appropriées.`,
    ],
  },
  {
    order: 91,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Lors de la première addition d'une molécule de $\\mathrm{Br_2}$ sur un alcyne :`,
    choices: [
      `La triple liaison est transformée en double liaison.`,
      `Un atome de brome est ajouté sur chacun des deux carbones de l'ancienne triple liaison.`,
      `Le produit possède encore une insaturation.`,
      `Quatre atomes de brome sont ajoutés dès cette première étape.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Une première addition de $\\mathrm{Br_2}$ consomme un degré d'insaturation et conduit à un dibromoalcène. La double liaison résiduelle peut encore réagir.`,
    choiceExplanations: [
      `La triple liaison perd une composante $\\pi$.`,
      `Les deux atomes du dihalogène se répartissent sur les deux carbones.`,
      `Une double liaison demeure après une seule équivalence.`,
      `Une molécule de $\\mathrm{Br_2}$ n'apporte que deux atomes de brome.`,
    ],
  },
  {
    order: 92,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente, la seconde addition d'une molécule de $\\mathrm{Br_2}$ :`,
    choices: [
      `Consomme la double liaison restante.`,
      `Ajoute deux atomes de brome supplémentaires.`,
      `Conduit à un dérivé tétrabromé saturé au niveau des deux carbones concernés.`,
      `Régénère la triple liaison de départ.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La seconde équivalence de dihalogène s'ajoute sur la double liaison du premier produit. Quatre halogènes ont alors été incorporés au total.`,
    choiceExplanations: [
      `Le second degré d'insaturation est supprimé.`,
      `Chaque molécule de $\\mathrm{Br_2}$ apporte deux bromes.`,
      `Chaque ancien carbone de la triple liaison porte alors deux bromes.`,
      `La réaction évolue vers une structure plus saturée, pas vers l'alcyne.`,
    ],
  },
  {
    order: 93,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le but-2-yne $\\mathrm{CH_3{-}C{\\equiv}C{-}CH_3}$ réagit avec deux équivalents de $\\mathrm{Br_2}$ comme indiqué ci-dessus :`,
    choices: [
      `Le produit final comporte quatre atomes de brome.`,
      `Le produit final peut s'écrire $\\mathrm{CH_3{-}CBr_2{-}CBr_2{-}CH_3}$.`,
      `Le produit final possède encore une triple liaison.`,
      `Avec une seule équivalence de $\\mathrm{Br_2}$, un dibromoalcène est attendu avant la seconde addition.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Deux additions successives de dibrome conduisent au dérivé tétrabromé. Après la première équivalence, une double liaison subsiste ; après la seconde, elle disparaît.`,
    choiceExplanations: [
      `Deux molécules de dibrome apportent quatre atomes de brome.`,
      `Cette formule traduit deux bromes sur chacun des carbones initialement engagés dans la triple liaison.`,
      `La triple liaison est entièrement consommée.`,
      `C'est l'intermédiaire logique de la réaction en deux étapes.`,
    ],
  },
  {
    order: 94,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Lors de l'hydratation d'un alcyne interne :`,
    choices: [
      `$\\mathrm{H}$ et $\\mathrm{OH}$ s'ajoutent initialement sur les deux carbones de la triple liaison.`,
      `Le premier produit représenté est un énol.`,
      `Un énol associe une double liaison carbone-carbone et un groupe $\\mathrm{OH}$ porté par l'un des carbones de cette double liaison.`,
      `Le produit initial est nécessairement un alcane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'addition d'eau sur la triple liaison donne d'abord une forme énolique. Cette forme conserve une double liaison et porte un groupe hydroxyle directement lié à l'un de ses carbones.`,
    choiceExplanations: [
      `Les deux éléments de l'eau sont répartis sur l'ancienne triple liaison.`,
      `C'est l'intermédiaire explicitement présenté dans le cours.`,
      `Le mot énol combine précisément alcène et alcool.`,
      `Une double liaison subsiste dans l'intermédiaire énolique.`,
    ],
  },
  {
    order: 95,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente, le passage de l'énol à la cétone :`,
    choices: [
      `Correspond à une tautomérie.`,
      `Implique le déplacement d'un proton et une réorganisation de la liaison $\\pi$.`,
      `Conduit à l'apparition d'un groupe carbonyle $\\mathrm{C{=}O}$.`,
      `Modifie la formule brute de la molécule.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La tautomérie céto-énolique conserve la formule brute tout en réorganisant un proton et une double liaison pour former le groupe carbonyle de la cétone.`,
    choiceExplanations: [
      `Il s'agit de l'équilibre déjà rencontré dans le chapitre sur l'isomérie.`,
      `Cette réorganisation transforme le motif énol en carbonyle.`,
      `La cétone est caractérisée par ce groupe fonctionnel.`,
      `Aucun atome n'est ajouté ni retiré au cours de la tautomérie.`,
    ],
  },
  {
    order: 96,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Un alcyne interne non symétrique, tel que le pent-2-yne $\\mathrm{CH_3{-}C{\equiv}C{-}CH_2CH_3}$, est hydraté dans le cadre simplifié du cours :`,
    choices: [
      `Deux orientations initiales de l'addition peuvent être envisagées.`,
      `Ces orientations peuvent conduire à deux énols différents.`,
      `Après tautomérie, deux cétones de constitution différente peuvent être envisagées.`,
      `Le produit final est nécessairement un aldéhyde unique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Pour un alcyne interne non symétrique, l'orientation de l'hydratation peut placer $\\mathrm{OH}$ sur l'un ou l'autre des carbones de la triple liaison. Les énols correspondants se tautomérisent en cétones différentes.`,
    choiceExplanations: [
      `Les deux carbones de la triple liaison ne portent pas les mêmes groupes.`,
      `Chaque orientation produit un énol distinct.`,
      `La position finale du groupe carbonyle peut différer.`,
      `Le support conclut à des cétones, non à un aldéhyde unique.`,
    ],
  },
  {
    order: 97,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Pour l'hydratation d'un alcyne vrai $\\mathrm{R{-}C{\\equiv}CH}$ selon Markovnikov :`,
    choices: [
      `Le groupe $\\mathrm{OH}$ est placé initialement sur le carbone le plus substitué.`,
      `L'hydrogène est ajouté sur le carbone terminal.`,
      `Un énol est formé avant la tautomérie.`,
      `Le groupe $\\mathrm{OH}$ se fixe nécessairement sur le carbone terminal afin de former directement un aldéhyde.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Dans le schéma du cours, l'hydratation de Markovnikov place $\\mathrm{OH}$ sur le carbone interne et $\\mathrm{H}$ sur le carbone terminal. L'énol obtenu évolue ensuite vers une cétone.`,
    choiceExplanations: [
      `C'est l'orientation retenue par la règle de Markovnikov dans ce cadre.`,
      `Le carbone terminal reçoit alors un second hydrogène.`,
      `La cétone n'apparaît qu'après la tautomérie de cet énol.`,
      `Cette orientation n'est pas celle présentée dans le cours pour l'hydratation usuelle de l'alcyne vrai.`,
    ],
  },
  {
    order: 98,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à propos de la figure précédente, le produit final de l'hydratation d'un alcyne vrai $\\mathrm{R{-}C{\\equiv}CH}$ :`,
    choices: [
      `Est une méthylcétone.`,
      `Peut s'écrire sous la forme générale $\\mathrm{R{-}CO{-}CH_3}$.`,
      `Contient un groupe méthyle directement lié au carbone du groupe carbonyle.`,
      `Est nécessairement un alcool stable et isolé sans tautomérie.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'énol issu de l'alcyne terminal se tautomérise en une méthylcétone de formule générale $\\mathrm{R{-}CO{-}CH_3}$.`,
    choiceExplanations: [
      `C'est le résultat caractéristique à retenir.`,
      `Cette écriture générale montre le motif méthylcétone.`,
      `Le fragment $\\mathrm{-CO{-}CH_3}$ définit précisément ce type de cétone.`,
      `L'énol est un intermédiaire et non le produit final majoritaire présenté.`,
    ],
  },
  {
    order: 99,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Lors de la synthèse d'un précurseur pharmaceutique, le propyne $\\mathrm{CH_3{-}C{\\equiv}CH}$ est hydraté selon cette transformation :`,
    choices: [
      `Le propyne est un alcyne vrai.`,
      `L'énol intermédiaire se tautomérise en propanone.`,
      `Le produit final peut s'écrire $\\mathrm{CH_3{-}CO{-}CH_3}$.`,
      `Le produit final est le propanal $\\mathrm{CH_3{-}CH_2{-}CHO}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le propyne est terminal. Son hydratation de Markovnikov conduit, après tautomérie, à la propanone, qui est bien une méthylcétone.`,
    choiceExplanations: [
      `La triple liaison se termine par $\\mathrm{{\\equiv}CH}$.`,
      `La forme cétonique stable est la propanone.`,
      `Il s'agit de la formule semi-développée de l'acétone ou propanone.`,
      `Le propanal ne correspond pas au produit de cette hydratation dans le cadre du cours.`,
    ],
  },
  {
    order: 100,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos du but-1-yne $\\mathrm{CH_3{-}CH_2{-}C{\\equiv}CH}$ :`,
    choices: [
      `Sa formule brute est $\\mathrm{C_4H_6}$.`,
      `Une hydrogénation partielle peut conduire au but-1-ène.`,
      `Une hydrogénation complète peut conduire au butane.`,
      `Son hydratation selon Markovnikov conduit, après tautomérie, à une méthylcétone : le butan-2-one.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Le but-1-yne réunit les principales notions de la section : formule d'un monoalcyne, réduction progressive de la triple liaison et hydratation d'un alcyne vrai en méthylcétone.`,
    choiceExplanations: [
      `Avec quatre carbones, $2n - 2 = 6$.`,
      `L'ajout contrôlé d'une molécule de $\\mathrm{H_2}$ laisse une double liaison.`,
      `Deux molécules de $\\mathrm{H_2}$ conduisent à l'alcane correspondant.`,
      `La forme générale $\\mathrm{R{-}CO{-}CH_3}$ donne ici $\\mathrm{CH_3CH_2{-}CO{-}CH_3}$.`,
    ],
  },
];
