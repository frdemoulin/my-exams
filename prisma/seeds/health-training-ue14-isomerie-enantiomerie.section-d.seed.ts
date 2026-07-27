import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_DISCOVERY_QUIZ_SLUG =
  'section-d-discovery-configuration-absolue-r-s-cip';
export const SECTION_D_PRACTICE_QUIZ_SLUG =
  'section-d-practice-configuration-absolue-r-s-cip';

export const SECTION_D_DISCOVERY_QUESTION_ORDERS: number[] = [
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
];
export const SECTION_D_PRACTICE_QUESTION_ORDERS: number[] = [
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
];

const FIGURE_BASE_PATH = '/images/training/ue14/isomerie-enantiomerie';

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_D_DISCOVERY_QUIZ_SLUG,
    title: `Configuration absolue R/S et règles de Cahn-Ingold-Prelog`,
    description: `Appliquer les règles de priorité, placer correctement le substituant de rang 4 et attribuer une configuration R ou S dans les cas simples.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_D_ORDER,
    questionOrders: SECTION_D_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 2,
    slug: SECTION_D_PRACTICE_QUIZ_SLUG,
    title: `Configuration absolue R/S et règles de Cahn-Ingold-Prelog`,
    description: `Comparer des substituants plus complexes, raisonner sur l'alanine, la sérine, la cystéine et une molécule à deux centres asymétriques.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_D_ORDER,
    questionOrders: SECTION_D_PRACTICE_QUESTION_ORDERS,
  },
];

export const SECTION_D_QUESTIONS: SeedQuestion[] = [
  {
    order: 61,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos des notations R et S :`,
    choices: [
      `Elles décrivent la configuration absolue d'un centre stéréogène.`,
      `Elles décrivent directement le sens du pouvoir rotatoire (+) ou (-).`,
      `Elles ne doivent pas être confondues avec les notations E et Z.`,
      `Une même molécule ne peut jamais comporter simultanément une indication R/S et une indication E/Z.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `R et S décrivent la configuration absolue autour d'un centre stéréogène. Elles ne donnent pas directement le signe du pouvoir rotatoire et ne doivent pas être confondues avec les notations E/Z, qui concernent une double liaison.`,
    choiceExplanations: [
      `C'est la définition de ces notations dans le chapitre.`,
      `Le signe (+) ou (-) relève du pouvoir rotatoire, pas des règles CIP.`,
      `R/S et E/Z concernent deux situations stéréochimiques différentes.`,
      `Une molécule assez complexe peut comporter à la fois un centre asymétrique et une double liaison configurée.`,
    ],
  },
  {
    order: 62,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Pour classer des substituants selon Cahn-Ingold-Prelog, on compare d'abord le numéro atomique des atomes directement liés au centre stéréogène. Avec Br ($Z=35$), Cl ($Z=17$), O ($Z=8$), N ($Z=7$), C ($Z=6$) et H ($Z=1$) :`,
    choices: [
      `Br est prioritaire sur Cl.`,
      `O est prioritaire sur N.`,
      `C est prioritaire sur H.`,
      `H est prioritaire sur O car il est plus léger.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La première étape du classement CIP repose sur le numéro atomique : plus il est élevé, plus la priorité est grande.`,
    choiceExplanations: [
      `35 est supérieur à 17.`,
      `8 est supérieur à 7.`,
      `6 est supérieur à 1.`,
      `L'hydrogène est au contraire le moins prioritaire de cette série.`,
    ],
  },
  {
    order: 63,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `On compare les substituants $\mathrm{OH}$, $\mathrm{NH_2}$, $\mathrm{CH_3}$ et H autour d'un centre stéréogène :`,
    choices: [
      `$\mathrm{OH}$ est prioritaire sur $\mathrm{NH_2}$.`,
      `$\mathrm{NH_2}$ est prioritaire sur $\mathrm{CH_3}$.`,
      `$\mathrm{CH_3}$ est prioritaire sur H.`,
      `H est prioritaire sur $\mathrm{OH}$ car il est plus petit.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `On compare les atomes directement liés : O pour $\mathrm{OH}$, N pour $\mathrm{NH_2}$, C pour $\mathrm{CH_3}$ et H pour l'hydrogène. L'ordre est donc O > N > C > H.`,
    choiceExplanations: [
      `L'oxygène ($Z=8$) est prioritaire sur l'azote ($Z=7$).`,
      `L'azote ($Z=7$) est prioritaire sur le carbone ($Z=6$).`,
      `Le carbone ($Z=6$) est prioritaire sur l'hydrogène ($Z=1$).`,
      `La taille apparente n'est pas le critère utilisé.`,
    ],
  },
  {
    order: 64,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos des isotopes dans les règles de Cahn-Ingold-Prelog :`,
    choices: [
      `Si deux substituants ne diffèrent que par l'isotope, celui de masse la plus élevée est prioritaire.`,
      `Le deutérium $^{2}\\mathrm{H}$ est prioritaire sur le protium $^{1}\\mathrm{H}$.`,
      `Deux isotopes d'un même élément sont toujours strictement équivalents en CIP.`,
      `Les isotopes n'interviennent jamais dans le chapitre.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Lorsqu'on compare deux isotopes d'un même élément, c'est la masse de l'isotope qui permet de les départager : le plus lourd est prioritaire.`,
    choiceExplanations: [
      `C'est la règle spécifique des isotopes en CIP.`,
      `Le deutérium est plus lourd que le protium.`,
      `Ils ont le même numéro atomique, mais pas la même masse isotopique.`,
      `Même si ce cas est moins fréquent, il fait partie des règles générales.`,
    ],
  },
  {
    order: 65,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous rappelle la logique de comparaison CIP lorsque les substituants commencent par le même atome.

![Aide de comparaison CIP](${FIGURE_BASE_PATH}/figure-d1-aides-comparaison-cip.svg)

Pour comparer $\mathrm{CH_3}$ et $\mathrm{CH_2OH}$, tous deux liés au centre stéréogène par un atome de carbone :`,
    choices: [
      `Le premier atome comparé est C dans les deux cas.`,
      `Il faut donc poursuivre la comparaison au rang suivant.`,
      `$\mathrm{CH_2OH}$ devient prioritaire sur $\mathrm{CH_3}$.`,
      `$\mathrm{CH_3}$ est prioritaire car le groupe paraît plus simple.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Après l'égalité C/C au premier rang, on compare les atomes liés à ce carbone : [O,H,H] pour $\mathrm{CH_2OH}$ et [H,H,H] pour $\mathrm{CH_3}$. L'oxygène permet de départager en faveur de $\mathrm{CH_2OH}$.`,
    choiceExplanations: [
      `Le premier atome lié est bien un carbone dans les deux cas.`,
      `L'égalité au premier rang impose de poursuivre l'analyse.`,
      `L'oxygène rencontré dans $\mathrm{CH_2OH}$ est prioritaire sur l'hydrogène.`,
      `La simplicité visuelle du groupe n'entre pas en ligne de compte.`,
    ],
  },
  {
    order: 66,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Toujours avec la logique illustrée par la figure précédente, à propos du groupe carboxyle $\mathrm{COOH}$ comparé à $\mathrm{CH_2OH}$ et $\mathrm{CH_3}$ :`,
    choices: [
      `Le carbone de $\mathrm{COOH}$ est traité comme s'il était lié à O, O et O.`,
      `Le groupe $\mathrm{COOH}$ est prioritaire sur $\mathrm{CH_2OH}$.`,
      `Le groupe $\mathrm{CH_2OH}$ est prioritaire sur $\mathrm{CH_3}$.`,
      `Une liaison multiple se traite comme une simple liaison en CIP.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `En CIP, une liaison multiple est traitée par duplication fictive des liaisons. Le carbone du groupe carboxyle est donc comparé comme lié à O, O et O, ce qui le rend prioritaire sur $\mathrm{CH_2OH}$ ([O,H,H]) puis sur $\mathrm{CH_3}$ ([H,H,H]).`,
    choiceExplanations: [
      `C'est la convention utilisée pour les doubles liaisons.`,
      `Le triplet [O,O,O] l'emporte sur [O,H,H].`,
      `Le triplet [O,H,H] l'emporte sur [H,H,H].`,
      `C'est faux : la liaison multiple fait l'objet d'un traitement particulier.`,
    ],
  },
  {
    order: 67,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Avant d'attribuer R ou S, il faut prêter une attention particulière au substituant de rang 4 :`,
    choices: [
      `Il doit être orienté vers l'arrière pour appliquer directement la lecture du parcours 1'��2'��3.`,
      `Si le substituant de rang 4 est orienté vers l'avant, il faut inverser la conclusion finale.`,
      `La position du substituant de rang 4 n'a aucune importance.`,
      `Quand le substituant de rang 4 est vers l'arrière, un sens horaire pour 1'��2'��3 conduit à R.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La méthode standard consiste à observer le centre avec le groupe 4 dirigé vers l'arrière. Dans ces conditions, le sens horaire donne R et le sens antihoraire donne S. Si le groupe 4 est vers l'avant, il faut inverser la conclusion.`,
    choiceExplanations: [
      `C'est l'étape clé de la méthode.`,
      `La conclusion apparente doit alors être renversée.`,
      `Au contraire, c'est un point capital.`,
      `C'est la convention de lecture classique.`,
    ],
  },
  {
    order: 68,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous représente un centre stéréogène simple.

![Centre stéréogène simple pour attribution R/S](${FIGURE_BASE_PATH}/figure-d2-centre-simple-rs.svg)

�' propos des priorités autour du centre représenté :`,
    choices: [
      `Cl est le substituant de rang 1.`,
      `$\mathrm{OH}$ est le substituant de rang 2.`,
      `$\mathrm{CH_3}$ est le substituant de rang 3.`,
      `H est le substituant de rang 1.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Autour du centre représenté, on compare directement Cl (17), O de $\mathrm{OH}$ (8), C de $\mathrm{CH_3}$ (6) et H (1). L'ordre est donc Cl > $\mathrm{OH}$ > $\mathrm{CH_3}$ > H.`,
    choiceExplanations: [
      `Le chlore est l'atome directement lié ayant le numéro atomique le plus élevé.`,
      `L'oxygène de $\mathrm{OH}$ vient ensuite.`,
      `Le carbone de $\mathrm{CH_3}$ précède l'hydrogène.`,
      `L'hydrogène est le moins prioritaire.`,
    ],
  },
  {
    order: 69,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente :`,
    choices: [
      `Le substituant de rang 4 est orienté vers l'arrière.`,
      `Le parcours 1'��2'��3 est horaire.`,
      `La configuration du centre représenté est R.`,
      `La configuration du centre représenté est S.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Dans la figure précédente, H est dirigé vers l'arrière. Une fois l'ordre Cl > $\mathrm{OH}$ > $\mathrm{CH_3}$ > H établi, le parcours 1'��2'��3 est horaire ; la configuration est donc R.`,
    choiceExplanations: [
      `La liaison hachurée de la figure correspond au groupe arrière.`,
      `Le trajet Cl '�� $\mathrm{OH}$ '�� $\mathrm{CH_3}$ tourne dans le sens horaire dans cette vue.`,
      `Horaire avec le groupe 4 en arrière donne R.`,
      `S correspondrait à un trajet antihoraire dans ces conditions.`,
    ],
  },
  {
    order: 70,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la méthode d'attribution R/S :`,
    choices: [
      `Elle suppose de classer les quatre substituants selon les règles de Cahn-Ingold-Prelog.`,
      `Avec le substituant 4 vers l'arrière, un trajet antihoraire 1'��2'��3 conduit à S.`,
      `R correspond toujours à une molécule dextrogyre.`,
      `Si le substituant 4 est vers l'avant, il est souvent plus sûr de conclure d'abord comme s'il était vers l'arrière, puis d'inverser.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La méthode combine un classement CIP et une lecture géométrique. Le signe du pouvoir rotatoire n'est pas déductible directement de R/S.`,
    choiceExplanations: [
      `Le classement est indispensable.`,
      `Antihoraire avec le rang 4 derrière donne S.`,
      `Il n'existe pas de correspondance générale entre R/S et (+)/(-).`,
      `C'est une façon classique d'éviter les erreurs quand le rang 4 est vers l'avant.`,
    ],
  },
  {
    order: 71,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos du classement CIP des groupes $\mathrm{CH_2Cl}$, $\mathrm{CH_2OH}$, $\mathrm{CH_2CH_3}$ et $\mathrm{CH_3}$ :`,
    choices: [
      `$\mathrm{CH_2Cl}$ est prioritaire sur $\mathrm{CH_2OH}$.`,
      `$\mathrm{CH_2OH}$ est prioritaire sur $\mathrm{CH_2CH_3}$.`,
      `$\mathrm{CH_2CH_3}$ est prioritaire sur $\mathrm{CH_3}$.`,
      `$\mathrm{CH_3}$ est prioritaire sur $\mathrm{CH_2Cl}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Après l'égalité C/C au premier rang, on compare respectivement [Cl,H,H], [O,H,H], [C,H,H] et [H,H,H]. On obtient donc $\mathrm{CH_2Cl}$ > $\mathrm{CH_2OH}$ > $\mathrm{CH_2CH_3}$ > $\mathrm{CH_3}$.`,
    choiceExplanations: [
      `Cl l'emporte sur O.`,
      `O l'emporte sur C.`,
      `C l'emporte sur H.`,
      `L'ordre correct est l'inverse.`,
    ],
  },
  {
    order: 72,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Concernant les liaisons multiples et le classement des groupes $\mathrm{COOH}$, $\mathrm{CH_2OH}$ et $\mathrm{CH_3}$ :`,
    choices: [
      `Le carbone du groupe carboxyle est comparé comme lié à O, O et O.`,
      `$\mathrm{COOH}$ est prioritaire sur $\mathrm{CH_2OH}$.`,
      `$\mathrm{CH_2OH}$ est prioritaire sur $\mathrm{CH_3}$.`,
      `$\mathrm{CH_3}$ est prioritaire sur $\mathrm{COOH}$ car il ne comporte pas d'oxygène.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le traitement des liaisons multiples conduit à comparer $\mathrm{COOH}$ via [O,O,O], $\mathrm{CH_2OH}$ via [O,H,H] et $\mathrm{CH_3}$ via [H,H,H]. L'ordre est donc $\mathrm{COOH}$ > $\mathrm{CH_2OH}$ > $\mathrm{CH_3}$.`,
    choiceExplanations: [
      `C'est la règle usuelle de duplication fictive.`,
      `Le triplet [O,O,O] l'emporte sur [O,H,H].`,
      `Le triplet [O,H,H] l'emporte sur [H,H,H].`,
      `Cette conclusion est opposée au classement réel.`,
    ],
  },
  {
    order: 73,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous représente l'alanine.

![Alanine et configuration absolue](${FIGURE_BASE_PATH}/figure-d3-alanine.svg)

�' propos des priorités autour du carbone asymétrique :`,
    choices: [
      `$\mathrm{NH_2}$ est le substituant de rang 1.`,
      `$\mathrm{COOH}$ est le substituant de rang 2.`,
      `$\mathrm{CH_3}$ est le substituant de rang 3.`,
      `H est le substituant de rang 2.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Autour du carbone asymétrique de l'alanine, l'ordre attendu est $\mathrm{NH_2}$ > $\mathrm{COOH}$ > $\mathrm{CH_3}$ > H. $\mathrm{NH_2}$ commence par N, $\mathrm{COOH}$ et $\mathrm{CH_3}$ commencent par C mais $\mathrm{COOH}$ l'emporte au rang suivant, et H reste dernier.`,
    choiceExplanations: [
      `L'azote est prioritaire sur le carbone.`,
      `Le carbone du $\mathrm{COOH}$ l'emporte sur celui du $\mathrm{CH_3}$ grâce aux oxygènes associés.`,
      `$\mathrm{CH_3}$ précède l'hydrogène.`,
      `H est le dernier rang, pas le deuxième.`,
    ],
  },
  {
    order: 74,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente représentant l'alanine :`,
    choices: [
      `Le substituant de rang 4 est dirigé vers l'arrière.`,
      `Le parcours 1'��2'��3 est antihoraire.`,
      `La configuration représentée est S.`,
      `La configuration représentée est R.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Dans la figure précédente, H est dirigé vers l'arrière. Le trajet $\mathrm{NH_2}$ '�� $\mathrm{COOH}$ '�� $\mathrm{CH_3}$ est antihoraire : l'alanine représentée est donc de configuration S.`,
    choiceExplanations: [
      `La liaison hachurée de la figure correspond à H.`,
      `Le sens de parcours est antihoraire.`,
      `Antihoraire avec le rang 4 derrière conduit à S.`,
      `R serait obtenu avec un trajet horaire.`,
    ],
  },
  {
    order: 75,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous représente la sérine.

![Sérine et configuration absolue](${FIGURE_BASE_PATH}/figure-d4-serine.svg)

�' propos de ce centre asymétrique :`,
    choices: [
      `L'ordre des priorités est $\mathrm{NH_2}$ > $\mathrm{COOH}$ > $\mathrm{CH_2OH}$ > H.`,
      `Le substituant H est le moins prioritaire.`,
      `La figure représente ici une configuration S.`,
      `Le groupe $\mathrm{CH_2OH}$ est prioritaire sur $\mathrm{COOH}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Pour la sérine, on classe $\mathrm{NH_2}$ en premier, puis $\mathrm{COOH}$, puis $\mathrm{CH_2OH}$, enfin H. Dans la figure, H est vers l'arrière et le parcours 1'��2'��3 est antihoraire : la configuration représentée est S.`,
    choiceExplanations: [
      `C'est le classement classique attendu pour la sérine.`,
      `H est toujours dernier dans cette série.`,
      `Le schéma a été construit pour illustrer le cas S.`,
      `$\mathrm{COOH}$ l'emporte sur $\mathrm{CH_2OH}$ grâce au traitement de la fonction acide.`,
    ],
  },
  {
    order: 76,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous représente la cystéine.

![Cystéine et configuration absolue](${FIGURE_BASE_PATH}/figure-d5-cysteine.svg)

Concernant l'ordre des priorités autour du carbone asymétrique :`,
    choices: [
      `$\mathrm{NH_2}$ est le substituant de rang 1.`,
      `$\mathrm{CH_2SH}$ est prioritaire sur $\mathrm{COOH}$.`,
      `$\mathrm{COOH}$ est prioritaire sur $\mathrm{CH_2SH}$.`,
      `H est le substituant de rang 4.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Pour la cystéine, $\mathrm{NH_2}$ reste premier. Le groupe $\mathrm{CH_2SH}$ devient prioritaire sur $\mathrm{COOH}$ car, en poursuivant la comparaison, on rencontre un soufre dans $\mathrm{CH_2SH}$, ce qui l'emporte sur les oxygènes du $\mathrm{COOH}$ au point de différence pertinent dans la hiérarchie usuelle présentée au cours. H reste dernier.`,
    choiceExplanations: [
      `L'azote classe $\mathrm{NH_2}$ en tête.`,
      `C'est le piège classique de la cystéine.`,
      `Cette proposition est précisément le piège à éviter.`,
      `L'hydrogène est le moins prioritaire.`,
    ],
  },
  {
    order: 77,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente représentant la cystéine :`,
    choices: [
      `Le substituant de rang 4 est orienté vers l'arrière.`,
      `Le parcours 1'��2'��3 est horaire.`,
      `La configuration représentée est R.`,
      `La configuration représentée est S.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Dans la figure précédente, H est orienté vers l'arrière. En tenant compte du classement $\mathrm{NH_2}$ > $\mathrm{CH_2SH}$ > $\mathrm{COOH}$ > H, le trajet 1'��2'��3 est horaire : la configuration obtenue est R, ce qui constitue le cas particulier classique de la cystéine.`,
    choiceExplanations: [
      `H est bien la liaison arrière sur le schéma.`,
      `Le sens apparent du parcours est horaire.`,
      `Horaire avec le rang 4 en arrière donne R.`,
      `S serait la conclusion inverse.`,
    ],
  },
  {
    order: 78,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous montre un centre asymétrique pour lequel le substituant de rang 4, H, est orienté vers l'avant.

![Centre avec substituant de rang 4 vers l'avant](${FIGURE_BASE_PATH}/figure-d6-rang-4-vers-avant.svg)

�' propos de cette situation :`,
    choices: [
      `Le parcours apparent 1'��2'��3 est horaire.`,
      `Si l'on appliquait la règle sans corriger l'orientation du groupe 4, on conclurait à tort à R.`,
      `Comme le substituant de rang 4 est vers l'avant, il faut inverser la conclusion apparente.`,
      `La configuration finale du centre représenté est S.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `La figure a été choisie pour illustrer le piège du groupe 4 vers l'avant. Le parcours 1'��2'��3 paraît horaire, mais cette conclusion doit être inversée : la configuration réelle est S.`,
    choiceExplanations: [
      `L'observation directe du schéma donne bien un trajet horaire.`,
      `Sans tenir compte de l'orientation du groupe 4, on ferait une erreur.`,
      `C'est la correction indispensable dans ce cas.`,
      `Après inversion de la conclusion apparente, on obtient S.`,
    ],
  },
  {
    order: 79,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous représente une molécule à deux centres asymétriques.

![Molécule à deux centres asymétriques pour attribution R/S](${FIGURE_BASE_PATH}/figure-d7-deux-centres-asymetriques.svg)

�' propos de cette molécule :`,
    choices: [
      `La molécule possède deux centres asymétriques.`,
      `La nomenclature d'ensemble d'une telle molécule s'écrit en précisant la configuration de chaque centre, par exemple (2R,3S).`,
      `Le premier centre de la figure est ici de configuration S.`,
      `Le second centre de la figure est ici de configuration S.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La figure montre deux centres stéréogènes. Le premier a été construit pour illustrer un centre S, tandis que le second correspond à un centre R.`,
    choiceExplanations: [
      `Deux carbones stéréogènes distincts sont présents.`,
      `On indique classiquement la configuration centre par centre.`,
      `Le premier centre suit ici la logique d'un parcours antihoraire avec le groupe 4 à l'arrière.`,
      `Le second centre est au contraire construit comme un centre R.`,
    ],
  },
  {
    order: 80,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à propos de la figure précédente :`,
    choices: [
      `La configuration globale de la molécule représentée peut être notée (2S,3R).`,
      `Les deux centres se déterminent indépendamment l'un de l'autre.`,
      `La mention « conformation (2S,3R) » serait correcte.`,
      `Une molécule à deux centres asymétriques ne peut jamais comporter un centre R et un centre S simultanément.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Chaque centre stéréogène est classé séparément. Dans la figure précédente, le premier centre est S et le second est R ; la notation d'ensemble peut donc être (2S,3R). Il s'agit bien d'une configuration, non d'une conformation.`,
    choiceExplanations: [
      `C'est la notation attendue pour la figure proposée.`,
      `L'analyse se fait centre par centre.`,
      `Le terme correct est « configuration », pas « conformation ».`,
      `Une combinaison mixte R/S est parfaitement possible.`,
    ],
  },
];
