import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_DISCOVERY_QUIZ_SLUG =
  'section-b-discovery-isomerie-geometrique-e-z';
export const SECTION_B_PRACTICE_QUIZ_SLUG =
  'section-b-practice-isomerie-geometrique-e-z';

export const SECTION_B_DISCOVERY_QUESTION_ORDERS: number[] = [
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
];
export const SECTION_B_PRACTICE_QUESTION_ORDERS: number[] = [
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];

const FIGURE_BASE_PATH = '/images/training/ue14/isomerie-enantiomerie';

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_B_DISCOVERY_QUIZ_SLUG,
    title: `Isomérie géométrique : configurations E et Z`,
    description:
      `Comprendre l'origine de l'isomérie géométrique et reconnaître les configurations E et Z sur des alcènes simples.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_B_ORDER,
    questionOrders: SECTION_B_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 2,
    slug: SECTION_B_PRACTICE_QUIZ_SLUG,
    title: `Isomérie géométrique : configurations E et Z`,
    description:
      `Appliquer les priorités de Cahn-Ingold-Prelog à des alcènes, raisonner sur des configurations E/Z et comparer plusieurs représentations.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_B_ORDER,
    questionOrders: SECTION_B_PRACTICE_QUESTION_ORDERS,
  },
];

export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  {
    order: 21,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de l'isomérie géométrique des alcènes :`,
    choices: [
      `Elle est liée à la rotation empêchée autour d'une double liaison $\\mathrm{C{=}C}$.`,
      `Elle concerne l'agencement des substituants de part et d'autre d'une double liaison.`,
      `Elle peut se décrire de la même manière autour de toute liaison simple $\\mathrm{C{-}C}$.`,
      `Elle peut influencer les propriétés biologiques ou pharmacologiques d'une molécule.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'isomérie géométrique des alcènes provient de l'absence de libre rotation autour de la liaison $\\pi$ d'une double liaison. La disposition spatiale des substituants peut ainsi conduire à des stéréoisomères distincts, parfois dotés de propriétés différentes.`,
    choiceExplanations: [
      `La présence d'une liaison $\\pi$ empêche la rotation libre observée autour d'une liaison simple.`,
      `C'est précisément cette disposition relative qui définit l'isomérie géométrique.`,
      `Autour d'une liaison simple, la rotation conduit à des conformations, pas à des configurations E/Z.`,
      `La stéréochimie peut modifier l'interaction d'une molécule avec une cible biologique.`,
    ],
  },
  {
    order: 22,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Pour qu'un alcène présente une isomérie géométrique E/Z :`,
    choices: [
      `Chacun des deux carbones de la double liaison doit porter deux substituants différents.`,
      `L'éthène $\\mathrm{CH_2{=}CH_2}$ peut être E ou Z.`,
      `Le propène $\\mathrm{CH_3{-}CH{=}CH_2}$ ne peut pas être E ou Z.`,
      `Il suffit qu'un seul des deux carbones de la double liaison porte deux substituants différents.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Une configuration E/Z n'est définissable que si, sur chacun des deux carbones de la double liaison, les deux substituants sont distincts. Sinon, il n'existe qu'une seule disposition pertinente.`,
    choiceExplanations: [
      `Cette condition est indispensable pour distinguer deux configurations.`,
      `Chaque carbone de l'éthène porte deux hydrogènes identiques, donc aucune configuration E/Z n'est possible.`,
      `Le carbone terminal $\\mathrm{CH_2}$ du propène porte deux hydrogènes identiques.`,
      `Si un carbone porte deux groupes identiques, la distinction E/Z devient impossible.`,
    ],
  },
  {
    order: 23,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos des priorités utilisées pour définir E et Z :`,
    choices: [
      `Le brome est prioritaire sur le chlore.`,
      `L'oxygène est prioritaire sur l'azote.`,
      `Le carbone est prioritaire sur l'hydrogène.`,
      `Le groupe $\\mathrm{CH_3}$ est prioritaire sur le chlore.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les règles de Cahn-Ingold-Prelog commencent par comparer les numéros atomiques des atomes directement liés au carbone de la double liaison. Plus le numéro atomique est élevé, plus la priorité est grande.`,
    choiceExplanations: [
      `Le brome ($Z=35$) est prioritaire sur le chlore ($Z=17$).`,
      `L'oxygène ($Z=8$) est prioritaire sur l'azote ($Z=7$).`,
      `Le carbone ($Z=6$) est prioritaire sur l'hydrogène ($Z=1$).`,
      `Le chlore ($Z=17$) est prioritaire sur un groupement dont l'atome directement lié est un carbone ($Z=6$).`,
    ],
  },
  {
    order: 24,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos des notations stéréochimiques :`,
    choices: [
      `La notation E/Z s'applique aux doubles liaisons.`,
      `La notation R/S s'applique aux centres asymétriques.`,
      `E/Z et R/S désignent exactement la même chose.`,
      `Passer de E à Z ne correspond pas à une simple rotation autour d'une liaison simple.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Les notations E/Z et R/S décrivent deux situations stéréochimiques différentes : la première concerne une double liaison, la seconde un centre asymétrique. Une interconversion E/Z suppose de rompre la contrainte de la double liaison.`,
    choiceExplanations: [
      `E/Z est réservé à l'isomérie géométrique autour des doubles liaisons.`,
      `R/S sert à décrire la configuration absolue d'un centre asymétrique.`,
      `Les deux notations n'ont ni le même objet ni le même mode de détermination.`,
      `Une rotation libre n'est pas possible autour de la liaison $\\mathrm{C{=}C}$.`,
    ],
  },
  {
    order: 25,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `On considère le but-2-ène représenté ci-dessous.\n\n![But-2-ène avec les deux groupes méthyle du même côté](${FIGURE_BASE_PATH}/section-b-q05-z-but-2-ene.png)`,
    choices: [
      `Sur chacun des carbones de la double liaison, $\\mathrm{CH_3}$ est prioritaire sur H.`,
      `La molécule est de configuration Z.`,
      `La molécule est de configuration E.`,
      `Dans ce cas particulier, cette molécule peut aussi être qualifiée de cis.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Dans le but-2-ène, chaque carbone de la double liaison porte un groupe $\\mathrm{CH_3}$ et un hydrogène. Les groupes prioritaires sont donc les deux $\\mathrm{CH_3}$, situés ici du même côté : la configuration est Z. Comme les groupes identiques sont du même côté, on peut aussi parler de forme cis.`,
    choiceExplanations: [
      `Le carbone du groupe $\\mathrm{CH_3}$ est prioritaire sur l'hydrogène.`,
      `Z signifie que les substituants prioritaires sont du même côté de la double liaison.`,
      `E signifierait au contraire que les groupes prioritaires sont opposés.`,
      `Pour un alcène disubstitué simple comme le but-2-ène, la terminologie cis/trans est encore pertinente.`,
    ],
  },
  {
    order: 26,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `On considère le but-2-ène représenté ci-dessous.\n\n![But-2-ène avec les deux groupes méthyle opposés](${FIGURE_BASE_PATH}/section-b-q06-q07-e-but-2-ene.png)`,
    choices: [
      `Sur chacun des carbones de la double liaison, $\\mathrm{CH_3}$ est prioritaire sur H.`,
      `La molécule est de configuration E.`,
      `La molécule peut passer à l'autre configuration par simple rotation autour de la double liaison.`,
      `Dans ce cas particulier, cette molécule peut aussi être qualifiée de trans.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Ici encore, les groupes prioritaires sont les deux groupements $\\mathrm{CH_3}$. Comme ils sont placés de part et d'autre de la double liaison, la configuration est E. Dans cette situation simple, le terme trans convient également.`,
    choiceExplanations: [
      `Le carbone l'emporte sur l'hydrogène dans la hiérarchie CIP.`,
      `E correspond à des groupes prioritaires opposés.`,
      `Une interconversion E/Z ne s'obtient pas par simple rotation libre.`,
      `Les deux groupes identiques étant opposés, on peut aussi parler de trans-but-2-ène.`,
    ],
  },
  {
    order: 27,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `On compare deux alcènes bromochlorés. Dans la structure de gauche, les groupes Br et Cl sont du même côté de la double liaison.\n\n![Deux alcènes bromochlorés comparés](${FIGURE_BASE_PATH}/section-b-q17-br-h-cl-h-pair.png)`,
    choices: [
      `Br est prioritaire sur H.`,
      `Cl est prioritaire sur H.`,
      `La structure de gauche est de configuration Z.`,
      `La structure de gauche ne présente aucune isomérie géométrique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Chacun des deux carbones de la double liaison porte deux substituants différents, ce qui autorise une configuration E/Z. Dans la structure de gauche, les groupes prioritaires sont Br et Cl, et ils sont du même côté : la configuration est donc Z.`,
    choiceExplanations: [
      `Le brome est prioritaire sur l'hydrogène.`,
      `Le chlore est prioritaire sur l'hydrogène.`,
      `Les deux groupes prioritaires étant du même côté, l'alcène de gauche est Z.`,
      `Les conditions d'existence de l'isomérie géométrique sont ici réunies.`,
    ],
  },
  {
    order: 28,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la distinction entre configuration et conformation :`,
    choices: [
      `Deux conformères de l'éthane ne sont pas des isomères E/Z.`,
      `Une configuration E/Z correspond à une configuration et non à une conformation.`,
      `Le passage de E à Z nécessite de rompre la contrainte de la double liaison.`,
      `Une simple rotation autour de la double liaison suffit à convertir une forme E en forme Z.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les conformations résultent de rotations autour de liaisons simples. Les configurations E/Z sont au contraire figées par la double liaison et ne s'interconvertissent pas librement.`,
    choiceExplanations: [
      `L'éthane ne possède d'ailleurs pas de double liaison.`,
      `Le vocabulaire correct est bien celui de la configuration.`,
      `La liaison $\\pi$ doit être rompue pour permettre une réorganisation E/Z.`,
      `Une telle rotation libre n'est pas possible autour d'une double liaison.`,
    ],
  },
  {
    order: 29,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `Pour comparer les groupes $\\mathrm{CH_3}$ et $\\mathrm{CH_2OH}$ selon Cahn-Ingold-Prelog :`,
    choices: [
      `L'atome directement lié dans les deux cas est un carbone.`,
      `La comparaison s'arrête forcément au premier atome, donc $\\mathrm{CH_3}$ et $\\mathrm{CH_2OH}$ sont équivalents.`,
      `En poursuivant la comparaison, le groupe $\\mathrm{CH_2OH}$ devient prioritaire sur $\\mathrm{CH_3}$.`,
      `Le groupe $\\mathrm{CH_3}$ est prioritaire sur $\\mathrm{CH_2OH}$.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Lorsque les deux substituants commencent par le même atome, ici un carbone, il faut comparer les atomes liés à ce premier atome. Le carbone du groupe $\\mathrm{CH_2OH}$ est lié notamment à un oxygène, ce qui lui confère la priorité sur $\\mathrm{CH_3}$.`,
    choiceExplanations: [
      `Dans les deux substituants, l'atome directement relié à la double liaison est bien un carbone.`,
      `Il faut poursuivre la comparaison tant qu'aucune différence n'est apparue.`,
      `La présence d'un oxygène au rang suivant favorise $\\mathrm{CH_2OH}$.`,
      `Ce serait l'inverse après application correcte des règles CIP.`,
    ],
  },
  {
    order: 30,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos des configurations E et Z :`,
    choices: [
      `Un alcène n'est E ou Z que si chacun de ses carbones vinyliques porte deux substituants différents.`,
      `La lettre Z signifie que les groupes prioritaires sont opposés.`,
      `La configuration géométrique peut modifier les propriétés d'une molécule.`,
      `La notation E/Z s'applique aussi naturellement aux alcynes.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Les notations E et Z s'appliquent aux doubles liaisons pour lesquelles les priorités peuvent être établies de chaque côté. Z correspond à des groupes prioritaires du même côté, E à des groupes opposés.`,
    choiceExplanations: [
      `Sans cette condition, l'isomérie géométrique n'est pas définie.`,
      `Z vient de zusammen, c'est-à-dire ensemble.`,
      `Des stéréoisomères peuvent avoir des propriétés différentes.`,
      `Un alcyne est linéaire et ne présente pas ce type d'isomérie géométrique.`,
    ],
  },
  {
    order: 31,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Parmi les groupes $\\mathrm{CH_2Cl}$, $\\mathrm{CH_2OH}$, $\\mathrm{CH_3}$ et H, à propos des priorités CIP :`,
    choices: [
      `$\\mathrm{CH_2Cl}$ est prioritaire sur $\\mathrm{CH_2OH}$.`,
      `$\\mathrm{CH_2OH}$ est prioritaire sur $\\mathrm{CH_3}$.`,
      `H est prioritaire sur $\\mathrm{CH_3}$.`,
      `$\\mathrm{CH_2Cl}$ est prioritaire sur $\\mathrm{CH_3}$.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Les trois premiers groupes commencent par un carbone, il faut donc examiner les atomes liés à ce carbone. La présence d'un chlore donne la priorité à $\\mathrm{CH_2Cl}$, puis vient $\\mathrm{CH_2OH}$ grâce à l'oxygène, puis $\\mathrm{CH_3}$. L'hydrogène reste dernier.`,
    choiceExplanations: [
      `Au rang suivant, le chlore ($Z=17$) l'emporte sur l'oxygène ($Z=8$).`,
      `Le groupe $\\mathrm{CH_2OH}$ possède un oxygène au rang suivant, contrairement à $\\mathrm{CH_3}$.`,
      `L'hydrogène est le moins prioritaire de cette série.`,
      `La présence d'un chlore au rang suivant place $\\mathrm{CH_2Cl}$ au-dessus de $\\mathrm{CH_3}$.`,
    ],
  },
  {
    order: 32,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos de l'attribution des priorités autour d'une double liaison :`,
    choices: [
      `Le groupe $\\mathrm{NH_2}$ est prioritaire sur $\\mathrm{CH_3}$.`,
      `Le groupe $\\mathrm{OH}$ est prioritaire sur $\\mathrm{NH_2}$.`,
      `Les groupes $\\mathrm{CHO}$ et $\\mathrm{CH_2OH}$ exigent de poursuivre la comparaison au-delà du premier atome.`,
      `Dès que deux substituants commencent par un carbone, ils sont nécessairement équivalents.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `On compare d'abord les atomes directement liés, puis, en cas d'égalité, les atomes liés à ceux-ci. Un azote est prioritaire sur un carbone, et un oxygène sur un azote. Deux groupes commençant par un carbone peuvent parfaitement être départagés plus loin.`,
    choiceExplanations: [
      `L'azote ($Z=7$) est prioritaire sur le carbone ($Z=6$).`,
      `L'oxygène ($Z=8$) est prioritaire sur l'azote ($Z=7$).`,
      `Dans les deux cas, l'atome directement lié est un carbone.`,
      `Il faut au contraire examiner les atomes suivants pour les départager.`,
    ],
  },
  {
    order: 33,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Quels alcènes suivants peuvent présenter une isomérie E/Z ?`,
    choices: [
      `Le but-2-ène $\\mathrm{CH_3{-}CH{=}CH{-}CH_3}$.`,
      `Le dichloroéthène $\\mathrm{CHCl{=}CHCl}$.`,
      `Le 2-méthylprop-1-ène $\\mathrm{CH_2{=}C(CH_3)_2}$.`,
      `Le 2-méthylbut-2-ène $\\mathrm{CH_3{-}C(CH_3){=}CH{-}CH_3}$.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Une isomérie E/Z n'existe que si chaque carbone vinylique porte deux substituants différents. C'est le cas du but-2-ène et du dichloroéthène, mais pas des deux autres propositions, où l'un des carbones porte deux groupes identiques.`,
    choiceExplanations: [
      `Chaque carbone de la double liaison porte un groupe $\\mathrm{CH_3}$ et un hydrogène.`,
      `Chaque carbone porte un H et un Cl, ce qui permet de définir E/Z.`,
      `Le carbone terminal $\\mathrm{CH_2}$ porte deux hydrogènes identiques.`,
      `Le carbone central porte deux groupes $\\mathrm{CH_3}$ identiques.`,
    ],
  },
  {
    order: 34,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Pour les questions 34 et 35, on considère l'alcène M représenté ci-dessous.\n\n![Alcène M substitué par CH2OH, CH3, CH3 et Cl](${FIGURE_BASE_PATH}/section-b-q14-alkene-ch2oh-ch3-ch3-cl.png)\n\n�' propos des priorités sur chaque carbone de la double liaison :`,
    choices: [
      `Sur le carbone de gauche, $\\mathrm{CH_2OH}$ est prioritaire sur $\\mathrm{CH_3}$.`,
      `Sur le carbone de gauche, $\\mathrm{CH_3}$ est prioritaire sur $\\mathrm{CH_2OH}$.`,
      `Sur le carbone de droite, Cl est prioritaire sur $\\mathrm{CH_3}$.`,
      `Sur le carbone de droite, $\\mathrm{CH_3}$ est prioritaire sur Cl.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `�' gauche, les deux substituants commencent par un carbone, puis la présence d'un oxygène au rang suivant donne la priorité à $\\mathrm{CH_2OH}$ sur $\\mathrm{CH_3}$. �' droite, le chlore est directement lié au carbone vinylique et l'emporte sur le groupe $\\mathrm{CH_3}$.`,
    choiceExplanations: [
      `La comparaison se poursuit au rang suivant : l'oxygène donne la priorité à $\\mathrm{CH_2OH}$.`,
      `Le groupe $\\mathrm{CH_3}$ ne possède que des hydrogènes au rang suivant.`,
      `Le chlore ($Z=17$) est prioritaire sur le carbone du groupe $\\mathrm{CH_3}$ ($Z=6$).`,
      `Ce serait l'inverse des règles CIP.`,
    ],
  },
  {
    order: 35,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On reprend l'alcène M de la question précédente.`,
    choices: [
      `M présente une isomérie géométrique E/Z.`,
      `Les groupes prioritaires sont du même côté de la double liaison.`,
      `M est de configuration E.`,
      `M peut passer à la configuration opposée par simple rotation autour de la double liaison.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Chaque carbone de la double liaison porte deux substituants différents, donc une configuration E/Z peut être définie. Les groupes prioritaires sont $\\mathrm{CH_2OH}$ à gauche et Cl à droite : ils sont de part et d'autre de la double liaison, donc M est E.`,
    choiceExplanations: [
      `Les conditions d'existence de l'isomérie géométrique sont réunies.`,
      `Le groupe prioritaire de gauche est au-dessus, celui de droite au-dessous.`,
      `Des groupes prioritaires opposés conduisent à la configuration E.`,
      `Une simple rotation libre n'est pas possible autour d'une double liaison.`,
    ],
  },
  {
    order: 36,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Pour les questions 36 et 37, on considère l'alcène N : sur le carbone de gauche de la double liaison se trouvent $\\mathrm{CH_2OH}$ en haut et $\\mathrm{CH_3}$ en bas ; sur le carbone de droite se trouvent H en haut et $\\mathrm{CH_2Cl}$ en bas. �' propos des priorités :`,
    choices: [
      `Sur le carbone de gauche, $\\mathrm{CH_2OH}$ est prioritaire sur $\\mathrm{CH_3}$.`,
      `Sur le carbone de droite, H est prioritaire sur $\\mathrm{CH_2Cl}$.`,
      `Sur le carbone de droite, $\\mathrm{CH_2Cl}$ est prioritaire sur H.`,
      `Sur le carbone de gauche, $\\mathrm{CH_3}$ est prioritaire sur $\\mathrm{CH_2OH}$.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `�' gauche, il faut comparer $\\mathrm{CH_2OH}$ et $\\mathrm{CH_3}$ : la présence de l'oxygène donne la priorité à $\\mathrm{CH_2OH}$. �' droite, le carbone du groupe $\\mathrm{CH_2Cl}$ est prioritaire sur H.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{CH_2OH}$ est favorisé par la présence d'un oxygène au rang suivant.`,
      `H est le moins prioritaire.`,
      `Le carbone du groupe $\\mathrm{CH_2Cl}$ l'emporte sur H dès le premier atome.`,
      `C'est l'inverse après application correcte des règles.`,
    ],
  },
  {
    order: 37,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On reprend l'alcène N de la question précédente.`,
    choices: [
      `N est de configuration E.`,
      `N est de configuration Z.`,
      `Les groupes prioritaires sont situés de part et d'autre de la double liaison.`,
      `N ne présente pas d'isomérie géométrique.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Le groupe prioritaire de gauche est $\\mathrm{CH_2OH}$, placé en haut ; celui de droite est $\\mathrm{CH_2Cl}$, placé en bas. Les groupes prioritaires sont donc opposés : la configuration de N est E.`,
    choiceExplanations: [
      `Des groupes prioritaires opposés conduisent à la configuration E.`,
      `Z correspondrait à des groupes prioritaires du même côté.`,
      `Le groupe prioritaire de gauche est au-dessus, celui de droite au-dessous.`,
      `Chaque carbone de la double liaison porte bien deux substituants différents.`,
    ],
  },
  {
    order: 38,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On représente le but-2-ène sous deux formes : X, avec les deux groupes $\\mathrm{CH_3}$ du même côté de la double liaison, et Y, avec les deux groupes $\\mathrm{CH_3}$ de part et d'autre de la double liaison.`,
    choices: [
      `X et Y sont deux stéréoisomères.`,
      `X et Y correspondent respectivement aux configurations Z et E.`,
      `X et Y ne diffèrent que par une conformation.`,
      `X et Y possèdent la même formule brute.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Les deux représentations correspondent aux deux configurations géométriques du but-2-ène. Elles ont la même formule brute et la même connectivité, mais une disposition spatiale différente autour de la double liaison.`,
    choiceExplanations: [
      `Il s'agit de stéréoisomères géométriques.`,
      `Même côté pour les groupes prioritaires : Z ; côtés opposés : E.`,
      `Une simple différence de conformation supposerait une rotation libre, impossible ici.`,
      `L'isomérie géométrique conserve la formule brute.`,
    ],
  },
  {
    order: 39,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos des notations cis/trans et E/Z :`,
    choices: [
      `Pour le but-2-ène, cis correspond à Z et trans à E.`,
      `La notation E/Z est plus générale que la notation cis/trans.`,
      `La notation cis/trans permet toujours de traiter tous les alcènes substitués.`,
      `La notation E/Z repose sur la hiérarchie des priorités des substituants.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Sur un alcène simple comme le but-2-ène, les deux notations coïncident. Mais, de manière générale, E/Z est plus robuste, car elle utilise les priorités CIP et reste applicable à des cas où cis/trans devient ambigu ou peu adapté.`,
    choiceExplanations: [
      `Dans ce cas précis, les groupes identiques permettent l'équivalence cis = Z et trans = E.`,
      `E/Z s'applique à un plus grand nombre d'alcènes.`,
      `Certains alcènes ne se prêtent pas clairement à la notation cis/trans.`,
      `Le choix entre E et Z dépend du côté relatif des substituants prioritaires.`,
    ],
  },
  {
    order: 40,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On considère trois alcènes :\n- A : $\\mathrm{CH_2{=}CHCl}$ ;\n- B : le but-2-ène avec les deux groupes $\\mathrm{CH_3}$ du même côté ;\n- C : l'alcène N des questions 36 et 37.\n\n�' propos de ces trois composés :`,
    choices: [
      `A ne présente pas d'isomérie E/Z.`,
      `B est de configuration Z.`,
      `C est de configuration E.`,
      `Le passage de B à son stéréoisomère géométrique ne nécessite qu'une simple rotation autour d'une liaison simple.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `A ne peut pas être E/Z car le carbone terminal de la double liaison porte deux hydrogènes. B est Z puisque ses groupes prioritaires $\\mathrm{CH_3}$ sont du même côté. C a été établi comme E, car ses groupes prioritaires sont opposés. L'interconversion entre stéréoisomères géométriques ne relève pas d'une simple rotation libre.`,
    choiceExplanations: [
      `Le groupement $\\mathrm{CH_2}$ empêche toute distinction E/Z pour A.`,
      `Même côté pour les groupes prioritaires dans B : configuration Z.`,
      `Les groupes prioritaires de C sont opposés : configuration E.`,
      `Une telle rotation libre n'existe pas autour d'une double liaison.`,
    ],
  },
];
