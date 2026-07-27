import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_DISCOVERY_QUIZ_SLUG =
  'section-c-discovery-additions-alcenes';
export const SECTION_C_PRACTICE_QUIZ_SLUG =
  'section-c-practice-markovnikov-hydratation';

export const SECTION_C_DISCOVERY_QUESTION_ORDERS: number[] = [
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];
export const SECTION_C_PRACTICE_QUESTION_ORDERS: number[] = [
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
];

const FIGURE_BASE_PATH = '/images/training/ue14/hydrocarbures';

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_C_DISCOVERY_QUIZ_SLUG,
    title: `Réactions d'addition sur les alcènes`,
    description: `Comprendre le principe d'une addition sur une double liaison et reconnaître les produits d'une hydrogénation ou d'une halogénation.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_C_ORDER,
    items: [
      {
        type: 'GROUP',
        title: `Principe d'une addition`,
        sharedStatement: `Les questions 41 à 43 s'appuient sur la figure ci-dessous, qui schématise une réaction d'addition sur une double liaison carbone-carbone.

![Principe d'une addition sur une double liaison](${FIGURE_BASE_PATH}/figure-c1-principe-addition.svg)`,
        questionOrders: [41, 42, 43],
      },
      {
        type: 'GROUP',
        title: `Hydrogénation catalytique`,
        sharedStatement: `Les questions 44 à 46 s'appuient sur la figure ci-dessous. Lors de la synthèse d'un intermédiaire pharmaceutique, une double liaison est réduite par hydrogénation catalytique.

![Hydrogénation du but-2-ène](${FIGURE_BASE_PATH}/figure-c2-hydrogenation-but-2-ene.svg)`,
        questionOrders: [44, 45, 46],
      },
      {
        type: 'GROUP',
        title: `Addition de dibrome`,
        sharedStatement: `Les questions 47 à 49 s'appuient sur la figure ci-dessous. Un dérivé dibromé est préparé comme intermédiaire de synthèse par addition de $\\mathrm{Br_2}$ sur l'éthène.

![Bromation de l'éthène](${FIGURE_BASE_PATH}/figure-c3-bromation-ethene.svg)`,
        questionOrders: [47, 48, 49],
      },
      { type: 'QUESTION', questionOrder: 50 },
    ],
  },
  {
    order: 2,
    slug: SECTION_C_PRACTICE_QUIZ_SLUG,
    title: `Hydrohalogénation, règle de Markovnikov et hydratation`,
    description: `Prévoir l'orientation d'une addition sur un alcène asymétrique, comparer plusieurs réactifs et relier hydratation et déshydratation.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_C_ORDER,
    items: [
      {
        type: 'GROUP',
        title: `Addition de HBr sur le propène`,
        sharedStatement: `Les questions 51 à 54 s'appuient sur la figure ci-dessous. On fait réagir le propène avec $\\mathrm{HBr}$ et l'on applique la règle de Markovnikov dans le cadre simplifié du cours.

![Addition de HBr sur le propène](${FIGURE_BASE_PATH}/figure-c4-propene-hbr-markovnikov.svg)`,
        questionOrders: [51, 52, 53, 54],
      },
      {
        type: 'GROUP',
        title: `Comparaison Br2/HBr`,
        sharedStatement: `Les questions 55 et 56 s'appuient sur la figure ci-dessous, qui compare l'addition de $\\mathrm{Br_2}$ et de $\\mathrm{HBr}$ sur le propène.

![Comparaison des additions de Br2 et HBr](${FIGURE_BASE_PATH}/figure-c5-comparaison-br2-hbr.svg)`,
        questionOrders: [55, 56],
      },
      {
        type: 'GROUP',
        title: `Hydratation et déshydratation`,
        sharedStatement: `Les questions 57 et 58 s'appuient sur la figure ci-dessous. Dans une étape de synthèse pharmaceutique, le propène est hydraté afin d'obtenir un alcool.

![Hydratation et déshydratation](${FIGURE_BASE_PATH}/figure-c6-hydratation-deshydratation.svg)`,
        questionOrders: [57, 58],
      },
      { type: 'QUESTION', questionOrder: 59 },
      { type: 'QUESTION', questionOrder: 60 },
    ],
  },
];

export const SECTION_C_QUESTIONS: SeedQuestion[] = [
  {
    order: 41,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos d'une réaction d'addition sur une double liaison carbone-carbone :`,
    choices: [
      `La liaison $\\pi$ de la double liaison est rompue.`,
      `Deux nouvelles liaisons simples peuvent se former sur les deux carbones de l'ancienne double liaison.`,
      `Le squelette carboné est nécessairement coupé en deux fragments.`,
      `La réaction transforme généralement l'alcène en un composé plus saturé.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Une addition consomme la liaison $\\pi$ d'une double liaison $\\mathrm{C{=}C}$. Les deux carbones restent liés entre eux, mais chacun reçoit un nouvel atome ou groupement : le produit est plus saturé.`,
    choiceExplanations: [
      `La liaison $\\pi$ est la partie réactive de la double liaison.`,
      `C'est le bilan caractéristique d'une addition.`,
      `Une coupure du squelette correspondrait à une autre transformation, comme certaines oxydations fortes.`,
      `La disparition d'une insaturation augmente le degré de saturation.`,
    ],
  },
  {
    order: 42,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente :`,
    choices: [
      `La liaison $\\mathrm{C{=}C}$ devient une liaison $\\mathrm{C{-}C}$.`,
      `Le nombre d'atomes de carbone du squelette est conservé.`,
      `Toute addition libère obligatoirement une molécule d'eau.`,
      `Une addition est l'inverse conceptuel d'une réaction d'élimination.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'addition et l'élimination sont deux transformations opposées : l'addition consomme une insaturation, tandis qu'une élimination peut créer une double liaison en retirant de petits groupes.`,
    choiceExplanations: [
      `La composante $\\pi$ disparaît, mais la liaison $\\sigma$ entre les carbones demeure.`,
      `Aucun carbone n'est retiré lors des additions étudiées ici.`,
      `L'eau n'est pas un produit obligatoire d'une addition.`,
      `Cette comparaison aide notamment à relier hydratation et déshydratation.`,
    ],
  },
  {
    order: 43,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les réactifs suivants, lesquels peuvent participer aux additions sur les alcènes étudiées dans cette section ?`,
    choices: [
      `$\\mathrm{H_2}$ en présence d'un catalyseur.`,
      `$\\mathrm{Br_2}$ ou $\\mathrm{Cl_2}$.`,
      `$\\mathrm{HBr}$ ou $\\mathrm{HCl}$.`,
      `Un réactif destiné uniquement à retirer $\\mathrm{H_2O}$ d'un alcool.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le cours présente l'hydrogénation catalytique, l'addition d'un dihalogène $\\mathrm{X_2}$ et l'addition d'un hydracide $\\mathrm{HX}$. La déshydratation d'un alcool est au contraire une élimination préparant un alcène.`,
    choiceExplanations: [
      `L'hydrogénation ajoute un hydrogène sur chacun des deux carbones.`,
      `L'halogénation ajoute un atome d'halogène sur chaque carbone.`,
      `L'hydrohalogénation ajoute $\\mathrm{H}$ et $\\mathrm{X}$.`,
      `Ce type de réactif appartient à la préparation des alcènes par élimination.`,
    ],
  },
  {
    order: 44,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de cette hydrogénation catalytique :`,
    choices: [
      `Le réactif ajouté est $\\mathrm{H_2}$.`,
      `Un catalyseur est nécessaire dans le cadre de la réaction présentée.`,
      `Le produit appartient à la famille des alcanes.`,
      `Le produit comporte une double liaison supplémentaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'hydrogénation catalytique transforme un alcène en alcane par addition de deux atomes d'hydrogène sur l'ancienne double liaison.`,
    choiceExplanations: [
      `La molécule de dihydrogène fournit les deux hydrogènes ajoutés.`,
      `Le support précise la présence d'un catalyseur.`,
      `La disparition de la double liaison conduit à un hydrocarbure saturé.`,
      `La réaction consomme au contraire une double liaison.`,
    ],
  },
  {
    order: 45,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Toujours à propos de l'hydrogénation représentée ci-dessus :`,
    choices: [
      `Un atome d'hydrogène est ajouté sur chacun des carbones de l'ancienne double liaison.`,
      `Deux atomes d'hydrogène sont ajoutés au total.`,
      `Le nombre de carbones est inchangé.`,
      `Une molécule de $\\mathrm{H_2O}$ est éliminée.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le bilan est une addition de $\\mathrm{H_2}$ : un $\\mathrm{H}$ sur chaque carbone de la double liaison, sans perte de carbone ni élimination d'eau.`,
    choiceExplanations: [
      `C'est la répartition attendue de l'hydrogène.`,
      `Une molécule de $\\mathrm{H_2}$ contient deux atomes d'hydrogène.`,
      `Le squelette carboné est conservé.`,
      `L'élimination d'eau correspondrait à une déshydratation.`,
    ],
  },
  {
    order: 46,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La figure précédente représente l'hydrogénation du but-2-ène :`,
    choices: [
      `Le produit est le butane.`,
      `Le produit possède la formule brute $\\mathrm{C_4H_{10}}$.`,
      `Le produit est le but-1-yne.`,
      `Les configurations E et Z de départ donnent le même alcane après hydrogénation complète.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'hydrogénation complète du but-2-ène conduit au butane $\\mathrm{C_4H_{10}}$. La double liaison disparaissant, la distinction E/Z n'existe plus dans le produit.`,
    choiceExplanations: [
      `Le squelette à quatre carbones est saturé.`,
      `Un alcane à quatre carbones répond à $\\mathrm{C_4H_{10}}$.`,
      `Un alcyne serait plus insaturé, pas plus saturé.`,
      `Les deux géométries convergent vers la même constitution saturée.`,
    ],
  },
  {
    order: 47,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de cette addition de $\\mathrm{Br_2}$ sur l'éthène :`,
    choices: [
      `La double liaison disparaît.`,
      `Un atome de brome est ajouté sur chacun des deux carbones.`,
      `Le produit est un dérivé dihalogéné vicinal.`,
      `Le produit ne contient qu'un seul atome de brome.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'addition de $\\mathrm{X_2}$ place un halogène sur chaque extrémité de l'ancienne double liaison. Les deux halogènes se retrouvent sur deux carbones voisins : le produit est vicinal.`,
    choiceExplanations: [
      `La liaison $\\pi$ est consommée.`,
      `Les deux atomes de $\\mathrm{Br_2}$ sont répartis entre les deux carbones.`,
      `Les deux carbones porteurs de $\\mathrm{Br}$ sont adjacents.`,
      `Deux atomes de brome sont incorporés.`,
    ],
  },
  {
    order: 48,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos du produit représenté ci-dessus :`,
    choices: [
      `Sa formule semi-développée est $\\mathrm{CH_2Br{-}CH_2Br}$.`,
      `Il peut être nommé 1,2-dibromoéthane.`,
      `Il s'agit du 1-bromoéthane.`,
      `Il possède une chaîne à deux carbones.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'éthène conserve ses deux carbones et reçoit un $\\mathrm{Br}$ sur chacun d'eux. Le produit est donc le 1,2-dibromoéthane.`,
    choiceExplanations: [
      `Chaque carbone devient un groupe $\\mathrm{CH_2Br}$.`,
      `Les indices 1 et 2 localisent les deux bromes.`,
      `Ce nom ne signalerait qu'un seul brome.`,
      `Le squelette de l'éthène est conservé.`,
    ],
  },
  {
    order: 49,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Pour distinguer les trois additions étudiées :`,
    choices: [
      `Avec $\\mathrm{H_2}$, deux hydrogènes sont ajoutés.`,
      `Avec $\\mathrm{Br_2}$, deux bromes sont ajoutés.`,
      `Avec $\\mathrm{HBr}$, un hydrogène et un brome sont ajoutés.`,
      `Avec $\\mathrm{HBr}$, deux bromes sont toujours ajoutés.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le nom du réactif permet de prévoir les atomes incorporés : $\\mathrm{H/H}$ pour $\\mathrm{H_2}$, $\\mathrm{Br/Br}$ pour $\\mathrm{Br_2}$ et $\\mathrm{H/Br}$ pour $\\mathrm{HBr}$.`,
    choiceExplanations: [
      `C'est le bilan de l'hydrogénation.`,
      `C'est le bilan de l'halogénation.`,
      `C'est le bilan de l'hydrohalogénation.`,
      `$\\mathrm{HBr}$ ne fournit qu'un seul atome de brome.`,
    ],
  },
  {
    order: 50,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos des réactions d'addition sur les alcènes :`,
    choices: [
      `Elles consomment la double liaison.`,
      `L'hydrogénation catalytique conduit à un alcane.`,
      `L'addition de $\\mathrm{X_2}$ place un halogène sur chacun des carbones de l'ancienne double liaison.`,
      `Toute addition sur un alcène produit nécessairement un alcool.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le produit dépend du réactif employé. L'alcool n'est obtenu que dans une hydratation ; les autres additions conduisent à d'autres familles.`,
    choiceExplanations: [
      `C'est le point commun des réactions étudiées.`,
      `Deux $\\mathrm{H}$ saturent la double liaison.`,
      `C'est la répartition de $\\mathrm{X_2}$.`,
      `Seule l'addition de $\\mathrm{H}$ et $\\mathrm{OH}$ forme un alcool.`,
    ],
  },
  {
    order: 51,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos de cette addition de $\\mathrm{HBr}$ :`,
    choices: [
      `Un hydrogène et un brome s'ajoutent sur l'ancienne double liaison.`,
      `La double liaison disparaît.`,
      `Le produit attendu est un dérivé monobromé.`,
      `Il s'agit de la même réaction que l'addition de $\\mathrm{Br_2}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'addition de $\\mathrm{HBr}$ est une hydrohalogénation : $\\mathrm{H}$ et $\\mathrm{Br}$ se répartissent sur les deux carbones de la double liaison, conduisant à un bromure d'alkyle.`,
    choiceExplanations: [
      `Les deux atomes du réactif sont incorporés.`,
      `La composante $\\pi$ est consommée.`,
      `Un seul atome de brome est fourni par $\\mathrm{HBr}$.`,
      `$\\mathrm{Br_2}$ fournirait deux bromes.`,
    ],
  },
  {
    order: 52,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Avant d'appliquer la règle de Markovnikov au propène, deux orientations de constitution peuvent être envisagées :`,
    choices: [
      `Le 1-bromopropane.`,
      `Le 2-bromopropane.`,
      `Le 1,2-dibromopropane.`,
      `Une règle d'orientation est nécessaire parce que les deux carbones de la double liaison ne sont pas équivalents.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Avec un alcène asymétrique et un réactif asymétrique $\\mathrm{HX}$, deux orientations sont envisageables avant de tenir compte de la régiosélectivité. Le produit dibromé correspondrait à $\\mathrm{Br_2}$, pas à $\\mathrm{HBr}$.`,
    choiceExplanations: [
      `Cette orientation place $\\mathrm{Br}$ sur le carbone terminal.`,
      `Cette orientation place $\\mathrm{Br}$ sur le carbone central.`,
      `Il faudrait ajouter deux $\\mathrm{Br}$ pour obtenir ce composé.`,
      `La dissymétrie du propène crée la question de la régiosélectivité.`,
    ],
  },
  {
    order: 53,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Dans le cadre simplifié de la règle de Markovnikov appliquée au propène et à $\\mathrm{HBr}$ :`,
    choices: [
      `$\\mathrm{H}$ se fixe sur le carbone terminal, déjà le plus hydrogéné.`,
      `$\\mathrm{Br}$ se fixe sur le carbone central, le plus substitué.`,
      `Le produit attendu est le 2-bromopropane.`,
      `Le produit attendu est nécessairement le 1,2-dibromopropane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La règle de Markovnikov conduit ici à placer $\\mathrm{H}$ sur le carbone terminal et $\\mathrm{Br}$ sur le carbone central. Le produit obtenu est le 2-bromopropane.`,
    choiceExplanations: [
      `Le carbone terminal $\\mathrm{CH_2}$ reçoit l'hydrogène.`,
      `L'halogène se retrouve sur le carbone le plus substitué.`,
      `Sa formule semi-développée est $\\mathrm{CH_3{-}CHBr{-}CH_3}$.`,
      `Un dibromé résulterait d'une addition de $\\mathrm{Br_2}$.`,
    ],
  },
  {
    order: 54,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos du produit principal représenté ci-dessus :`,
    choices: [
      `Sa formule semi-développée est $\\mathrm{CH_3{-}CHBr{-}CH_3}$.`,
      `Il se nomme 2-bromopropane.`,
      `Il comporte trois atomes de carbone.`,
      `Il conserve une double liaison carbone-carbone.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le produit de Markovnikov conserve les trois carbones du propène, porte $\\mathrm{Br}$ sur le carbone 2 et ne contient plus de double liaison.`,
    choiceExplanations: [
      `Cette formule place $\\mathrm{Br}$ sur le carbone central.`,
      `L'indice 2 localise le brome.`,
      `Le squelette carboné du propène est conservé.`,
      `La double liaison a été consommée par l'addition.`,
    ],
  },
  {
    order: 55,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' partir de la comparaison représentée ci-dessus :`,
    choices: [
      `Avec $\\mathrm{Br_2}$, deux atomes de brome sont incorporés.`,
      `Avec $\\mathrm{HBr}$, un seul atome de brome est incorporé.`,
      `Les deux réactions consomment la double liaison.`,
      `Les deux réactions donnent exactement le même produit.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `$\\mathrm{Br_2}$ donne un dibromé vicinal, tandis que $\\mathrm{HBr}$ donne un monobromé selon l'orientation de Markovnikov.`,
    choiceExplanations: [
      `Chaque $\\mathrm{Br}$ se fixe sur un carbone différent.`,
      `$\\mathrm{HBr}$ ne contient qu'un $\\mathrm{Br}$.`,
      `C'est le point commun des deux additions.`,
      `La nature et le nombre des substituants ajoutés diffèrent.`,
    ],
  },
  {
    order: 56,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente :`,
    choices: [
      `Le produit de $\\mathrm{Br_2}$ est un 1,2-dibromure.`,
      `Le produit attendu avec $\\mathrm{HBr}$ est le 2-bromopropane dans le cadre du cours.`,
      `L'addition de $\\mathrm{Br_2}$ nécessite la règle de Markovnikov pour choisir entre deux orientations différentes.`,
      `Le produit de $\\mathrm{HBr}$ contient un hydrogène de plus que l'alcène de départ.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'addition du réactif symétrique $\\mathrm{Br_2}$ place un $\\mathrm{Br}$ sur chaque carbone sans problème de régiosélectivité. En revanche, $\\mathrm{HBr}$ est asymétrique et son orientation est déterminée par Markovnikov.`,
    choiceExplanations: [
      `Les deux bromes occupent deux carbones voisins.`,
      `C'est l'orientation attendue sur le propène.`,
      `Le réactif $\\mathrm{Br_2}$ est symétrique ; aucune orientation $\\mathrm{H/Br}$ n'est à choisir.`,
      `Le $\\mathrm{H}$ du réactif est incorporé au produit.`,
    ],
  },
  {
    order: 57,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos de cette hydratation du propène :`,
    choices: [
      `L'hydratation ajoute $\\mathrm{H}$ et $\\mathrm{OH}$ sur les deux carbones de la double liaison.`,
      `La double liaison disparaît.`,
      `Le produit appartient à la famille des alcools.`,
      `L'hydratation élimine une molécule d'eau.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'hydratation est une addition d'eau : $\\mathrm{H}$ et $\\mathrm{OH}$ sont incorporés au produit. Elle est l'opération inverse de la déshydratation d'un alcool étudiée dans la section précédente.`,
    choiceExplanations: [
      `Ce sont les deux fragments de l'eau ajoutée.`,
      `La liaison $\\pi$ est consommée.`,
      `La présence de $\\mathrm{OH}$ sur un carbone saturé caractérise un alcool.`,
      `L'élimination d'eau correspond à la déshydratation.`,
    ],
  },
  {
    order: 58,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la relation entre hydratation et déshydratation représentée ci-dessus :`,
    choices: [
      `L'hydratation transforme un alcène en alcool.`,
      `La déshydratation transforme un alcool en alcène avec départ de $\\mathrm{H_2O}$.`,
      `Ces deux transformations sont conceptuellement inverses.`,
      `L'hydratation d'un alcène forme nécessairement un alcyne.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'hydratation ajoute les éléments de l'eau, tandis que la déshydratation les retire. Les deux transformations permettent de relier alcène et alcool.`,
    choiceExplanations: [
      `$\\mathrm{H}$ et $\\mathrm{OH}$ s'ajoutent à la double liaison.`,
      `La perte de $\\mathrm{H}$ et $\\mathrm{OH}$ produit une molécule d'eau et une double liaison.`,
      `Le bilan atomique de l'une est l'inverse de celui de l'autre.`,
      `Un alcyne comporterait une triple liaison et n'est pas le produit de cette réaction.`,
    ],
  },
  {
    order: 59,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Un chimiste souhaite modifier sélectivement un alcène utilisé comme intermédiaire de synthèse. Quelles associations objectif''�réactif sont correctes ?`,
    choices: [
      `Obtenir un alcane : $\\mathrm{H_2}$ et catalyseur.`,
      `Obtenir un dérivé dibromé vicinal : $\\mathrm{Br_2}$.`,
      `Obtenir un bromure d'alkyle : $\\mathrm{HBr}$.`,
      `Obtenir un alcool par hydratation : retirer $\\mathrm{H_2O}$ de l'alcène.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le choix du réactif détermine la famille obtenue. L'hydratation ajoute l'eau ; elle ne la retire pas.`,
    choiceExplanations: [
      `L'hydrogénation sature la double liaison.`,
      `Le dihalogène fournit les deux bromes.`,
      `L'hydracide fournit $\\mathrm{H}$ et $\\mathrm{Br}$.`,
      `Retirer de l'eau correspondrait à une déshydratation d'alcool.`,
    ],
  },
  {
    order: 60,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On considère le propène $\\mathrm{CH_3{-}CH{=}CH_2}$. �' propos de ses réactions d'addition :`,
    choices: [
      `Avec $\\mathrm{H_2}$ et un catalyseur, il donne du propane.`,
      `Avec $\\mathrm{Br_2}$, il donne un dérivé portant un $\\mathrm{Br}$ sur chacun des carbones de l'ancienne double liaison.`,
      `Avec $\\mathrm{HBr}$, le produit attendu selon Markovnikov est le 2-bromopropane.`,
      `Avec chacun de ces réactifs, le produit conserve obligatoirement une double liaison.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les trois réactions consomment la double liaison du propène. Elles diffèrent par les atomes ajoutés et par la famille du produit final.`,
    choiceExplanations: [
      `Deux $\\mathrm{H}$ conduisent à l'alcane correspondant.`,
      `Les deux $\\mathrm{Br}$ se répartissent sur les carbones 1 et 2 de l'ancienne double liaison.`,
      `$\\mathrm{Br}$ se place sur le carbone central dans le cadre de Markovnikov.`,
      `La double liaison disparaît dans chaque addition étudiée.`,
    ],
  },
];
