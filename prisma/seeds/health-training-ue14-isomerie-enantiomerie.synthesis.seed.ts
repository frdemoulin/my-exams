import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 6;

export const SYNTHESIS_CONSOLIDATION_QUIZ_SLUG =
  'synthese-consolidation-isomerie-enantiomerie';
export const SYNTHESIS_EXAM_QUIZ_SLUG =
  'synthese-entrainement-examen-isomerie-enantiomerie';

export const SYNTHESIS_CONSOLIDATION_QUESTION_ORDERS: number[] = [
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
];
export const SYNTHESIS_EXAM_QUESTION_ORDERS: number[] = [
  111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
];

const FIGURE_BASE_PATH = '/images/training/ue14/isomerie-enantiomerie';

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SYNTHESIS_CONSOLIDATION_QUIZ_SLUG,
    title: `Consolidation transversale`,
    description: `Mobiliser progressivement l'isomérie, les configurations E/Z et R/S, les relations entre stéréoisomères et le pouvoir rotatoire.`,
    stage: 'MASTER',
    sectionOrder: SYNTHESIS_SECTION_ORDER,
    questionOrders: [106, 107, 108, 109, 110],
    questionGroups: [
      {
        order: 1,
        title: `Molécule comportant une double liaison et un carbone asymétrique`,
        sharedStatement: `Les questions 101 à 103 s'appuient sur la figure ci-dessous. Elle représente une même molécule comportant une double liaison et un centre stéréogène repéré par un astérisque.

![Molécule avec double liaison E/Z et centre asymétrique](${FIGURE_BASE_PATH}/figure-s1-ez-et-centre-asymetrique.svg)`,
        questionOrders: [101, 102, 103],
      },
      {
        order: 2,
        title: `Relations entre trois stéréoisomères`,
        sharedStatement: `Les questions 104 et 105 s'appuient sur la figure ci-dessous. Pour une même constitution symétrique à deux centres asymétriques, on considère A = (R,R), B = (S,S) et C = (R,S), la forme C étant méso.

![Trois stéréoisomères dont une forme méso](${FIGURE_BASE_PATH}/figure-s2-trois-stereoisomeres.svg)`,
        questionOrders: [104, 105],
      },
    ],
  },
  {
    order: 2,
    slug: SYNTHESIS_EXAM_QUIZ_SLUG,
    title: `Entraînement type examen`,
    description: `Résoudre des questions plus compactes et piégeuses, proches de l'esprit des annales, sur l'ensemble du chapitre.`,
    stage: 'MASTER',
    sectionOrder: SYNTHESIS_SECTION_ORDER,
    questionOrders: [116, 117, 118, 119, 120],
    questionGroups: [
      {
        order: 1,
        title: `Structure comportant deux centres asymétriques et une double liaison`,
        sharedStatement: `Les questions 111 à 113 s'appuient sur la figure ci-dessous. La chaîne est numérotée à partir du carbone du groupe carboxyle : les centres asymétriques sont C2 et C3, et la double liaison est située entre C4 et C5.

![Structure complexe avec deux centres asymétriques et une double liaison](${FIGURE_BASE_PATH}/figure-s4-structure-complexe.svg)`,
        questionOrders: [111, 112, 113],
      },
      {
        order: 2,
        title: `Famille stéréoisomérique du 2,3-dichlorobutane`,
        sharedStatement: `Les questions 114 et 115 s'appuient sur les projections de Fischer A, B et C de la figure ci-dessous. Les trois représentations possèdent la même constitution.

![Projections de Fischer du 2,3-dichlorobutane](${FIGURE_BASE_PATH}/figure-s5-fischer-2-3-dichlorobutane.svg)`,
        questionOrders: [114, 115],
      },
    ],
  },
];

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    order: 101,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `À propos de la molécule de la figure précédente :`,
    choices: [
      `Elle possède un carbone asymétrique.`,
      `Sa double liaison peut recevoir un descripteur E ou Z.`,
      `Une même molécule peut comporter simultanément un descripteur E/Z et un descripteur R/S.`,
      `Le passage de E à Z résulte d'une simple rotation libre autour de la double liaison.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La figure précédente comporte un centre stéréogène et une double liaison dont chacun des carbones porte deux substituants différents. Deux types de configuration peuvent donc coexister. L'interconversion E/Z ne correspond pas à une simple rotation libre.`,
    choiceExplanations: [
      `Le carbone marqué d'un astérisque porte quatre substituants différents.`,
      `Les conditions d'existence de l'isomérie géométrique sont réunies.`,
      `Les descripteurs concernent deux éléments stéréogènes distincts de la même molécule.`,
      `La liaison pi empêche cette rotation libre.`,
    ],
  },
  {
    order: 102,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant la double liaison de la figure précédente :`,
    choices: [
      `Sur le carbone gauche, Cl est prioritaire sur H.`,
      `Sur le carbone droit, la chaîne portant le carbone asymétrique est prioritaire sur $\mathrm{CH_3}$.`,
      `Les deux substituants prioritaires sont opposés.`,
      `La double liaison est de configuration Z.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `À gauche, Cl l'emporte sur H. À droite, le carbone de la chaîne chirale est comparé à celui du groupe méthyle : la chaîne chirale l'emporte au rang suivant. Les groupes prioritaires sont placés de part et d'autre de la double liaison, qui est donc E.`,
    choiceExplanations: [
      `Le chlore a un numéro atomique supérieur à celui de l'hydrogène.`,
      `Le carbone de la chaîne est lié à O, C et H, contre H, H et H pour $\mathrm{CH_3}$.`,
      `Cl est au-dessus à gauche, tandis que la chaîne prioritaire est en dessous à droite.`,
      `Des groupes prioritaires opposés conduisent à E, pas à Z.`,
    ],
  },
  {
    order: 103,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant le carbone asymétrique de la figure précédente :`,
    choices: [
      `L'ordre de priorité est $\mathrm{OH}$ > groupe alcényl > $\mathrm{CH_3}$ > H.`,
      `Le substituant H est orienté vers l'arrière.`,
      `Le parcours 1→2→3 est antihoraire.`,
      `La configuration représentée est R.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `$\mathrm{OH}$ est prioritaire, puis vient le groupe alcényl, puis $\mathrm{CH_3}$ et enfin H. Le groupe H est dirigé vers l'arrière et le parcours 1→2→3 est antihoraire : le centre représenté est S.`,
    choiceExplanations: [
      `O l'emporte sur C ; entre les deux groupes carbonés, le groupe alcényl est prioritaire sur $\mathrm{CH_3}$.`,
      `La liaison hachurée représente le groupe dirigé vers l'arrière.`,
      `La lecture directe donne un trajet antihoraire.`,
      `Avec le groupe 4 en arrière, un trajet antihoraire donne S.`,
    ],
  },
  {
    order: 104,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `À propos des formes A, B et C de la figure précédente :`,
    choices: [
      `A et B sont énantiomères.`,
      `A et C sont diastéréoisomères.`,
      `B et C sont diastéréoisomères.`,
      `A et C sont images l'une de l'autre dans un miroir.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `A = (R,R) et B = (S,S) diffèrent par inversion de tous les centres : ce sont des énantiomères. La forme C = (R,S) ne diffère de A ou de B que par une partie des centres : les relations sont diastéréoisomériques.`,
    choiceExplanations: [
      `Les deux configurations sont inversées simultanément.`,
      `Un seul centre diffère entre A et C.`,
      `Un seul centre diffère entre B et C.`,
      `C n'est pas l'image miroir non superposable de A.`,
    ],
  },
  {
    order: 105,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Toujours à propos de la famille de la figure précédente :`,
    choices: [
      `Deux centres asymétriques donnent au plus quatre stéréoisomères.`,
      `La présence d'une forme méso peut ramener le nombre réel de stéréoisomères à trois.`,
      `La forme C peut posséder deux centres asymétriques tout en étant achirale.`,
      `La formule 2^n donne toujours exactement le nombre réel de stéréoisomères.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La relation 2^n fournit un maximum. Dans une constitution symétrique, une forme méso peut être achirale malgré plusieurs centres asymétriques et réduire le nombre réel de stéréoisomères distincts.`,
    choiceExplanations: [
      `Pour n = 2, le maximum théorique est 4.`,
      `Le couple d'énantiomères et la forme méso donnent alors trois formes distinctes.`,
      `Un plan de symétrie interne rend la forme méso achirale.`,
      `La formule donne un maximum, non une valeur toujours atteinte.`,
    ],
  },
  {
    order: 106,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous présente quatre couples de structures. Quelles classifications sont correctes ?

![Couples de structures à classer](${FIGURE_BASE_PATH}/figure-s3-couples-isomerie-tautomerie.svg)`,
    choices: [
      `Le couple A, propanal/propanone, illustre une isomérie fonctionnelle.`,
      `Le couple B, propan-1-ol/propan-2-ol, illustre une isomérie de position.`,
      `Le couple C, éthanol/éther diméthylique, illustre une isomérie fonctionnelle.`,
      `Le couple D, forme cétonique/forme énolique, correspond à deux conformères obtenus par rotation.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les couples A et C associent des fonctions différentes pour une même formule brute. Le couple B conserve la fonction alcool mais en change la position. Le couple D correspond à une tautomérie et non à une simple conformation.`,
    choiceExplanations: [
      `Aldéhyde et cétone sont deux fonctions différentes.`,
      `La fonction alcool passe du carbone 1 au carbone 2.`,
      `Alcool et éther sont deux fonctions distinctes.`,
      `La tautomérie implique un déplacement de proton et une réorganisation de liaison pi.`,
    ],
  },
  {
    order: 107,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant une mesure de pouvoir rotatoire au polarimètre :`,
    choices: [
      `L'angle mesuré peut dépendre de la température.`,
      `L'angle mesuré peut dépendre du solvant.`,
      `L'angle mesuré dépend notamment de la concentration et de la longueur de la cuve.`,
      `Une molécule de configuration R est nécessairement dextrogyre.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le pouvoir rotatoire observé dépend des conditions expérimentales, notamment de la température, du solvant, de la concentration, de la longueur du trajet optique et de la longueur d'onde utilisée. Il n'existe pas de correspondance générale entre R/S et le signe du pouvoir rotatoire.`,
    choiceExplanations: [
      `La température fait partie des paramètres à préciser.`,
      `Le milieu peut modifier la valeur mesurée.`,
      `Ces deux grandeurs interviennent dans l'angle observé.`,
      `R/S et (+)/(-) sont deux informations indépendantes.`,
    ],
  },
  {
    order: 108,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'excès énantiomérique (ee) :`,
    choices: [
      `Un ee de 60 % correspond à un mélange 80 % / 20 %.`,
      `Un ee de 90 % correspond à un mélange 95 % / 5 %.`,
      `Un mélange racémique possède un ee nul.`,
      `Un mélange 60 % / 40 % possède un ee de 60 %.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'excès énantiomérique est la différence entre les pourcentages des deux énantiomères. Les deux pourcentages doivent également totaliser 100 %.`,
    choiceExplanations: [
      `80 - 20 = 60.`,
      `95 - 5 = 90.`,
      `50 - 50 = 0.`,
      `60 - 40 = 20, donc l'ee vaut 20 %.`,
    ],
  },
  {
    order: 109,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Un principe actif existe sous deux formes énantiomères dont l'affinité pour une cible biologique chirale est différente. À propos de ces deux formes et de leur mélange racémique :`,
    choices: [
      `Les deux énantiomères ont la même formule brute.`,
      `Ils peuvent présenter des activités pharmacologiques différentes.`,
      `Un mélange équimolaire des deux énantiomères a un pouvoir rotatoire global nul.`,
      `Chaque énantiomère pur possède nécessairement un pouvoir rotatoire nul.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les énantiomères ont la même constitution, mais un environnement biologique chiral peut les distinguer. Dans un racémique, leurs rotations opposées se compensent.`,
    choiceExplanations: [
      `La composition atomique est identique.`,
      `La reconnaissance par une cible chirale peut être différente.`,
      `Les contributions opposées se compensent dans un mélange 50/50.`,
      `Un énantiomère pur est généralement optiquement actif, sauf cas particuliers non pertinents ici.`,
    ],
  },
  {
    order: 110,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `À propos des relations stéréochimiques :`,
    choices: [
      `Deux molécules de même constitution dont toutes les configurations sont inversées sont énantiomères.`,
      `Les formes (R,R) et (R,S) sont énantiomères.`,
      `Une molécule méso peut posséder plusieurs centres asymétriques tout en étant achirale.`,
      `Une molécule R est nécessairement dextrogyre.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'inversion de tous les centres conduit à l'énantiomère. Une inversion partielle conduit à un diastéréoisomère. La forme méso est achirale par symétrie interne et R/S ne prédit pas le signe du pouvoir rotatoire.`,
    choiceExplanations: [
      `C'est le critère général d'énantiomérie pour plusieurs centres.`,
      `Un seul centre est inversé : la relation est diastéréoisomérique.`,
      `C'est la caractéristique d'un composé méso.`,
      `Aucune correspondance générale n'existe entre R et le signe positif.`,
    ],
  },
  {
    order: 111,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `À propos de la structure représentée dans la figure précédente :`,
    choices: [
      `Elle possède deux centres asymétriques.`,
      `Elle peut présenter une isomérie géométrique autour de la double liaison $\mathrm{C4{=}C5}$.`,
      `Elle comporte notamment une fonction acide carboxylique et une fonction alcool.`,
      `Tous les carbones de la chaîne sont asymétriques.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les carbones C2 et C3 portent chacun quatre substituants différents. La double liaison $\mathrm{C4{=}C5}$ répond aux conditions E/Z. La structure comporte bien un groupe $\mathrm{COOH}$ et un groupe $\mathrm{OH}$.`,
    choiceExplanations: [
      `Les centres C2 et C3 sont stéréogènes.`,
      `Chaque carbone de la double liaison porte deux substituants différents.`,
      `Ces deux fonctions sont visibles sur la structure.`,
      `Les carbones de la double liaison, par exemple, ne sont pas des carbones asymétriques sp3.`,
    ],
  },
  {
    order: 112,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant les configurations de la figure précédente :`,
    choices: [
      `Le centre C2 est de configuration S.`,
      `Le centre C3 est de configuration R.`,
      `La double liaison $\mathrm{C4{=}C5}$ est de configuration Z.`,
      `Les descripteurs de la structure sont 2S, 3R et 4E.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le centre C2 a été représenté S et le centre C3 R, avec les groupes de rang 4 vers l'arrière. Sur la double liaison, la chaîne prioritaire du côté C4 et Br du côté C5 sont opposés : la double liaison est E.`,
    choiceExplanations: [
      `Le parcours CIP du centre C2 est antihoraire avec H en arrière.`,
      `Le parcours CIP du centre C3 est horaire avec H en arrière.`,
      `Les groupes prioritaires sont opposés, donc la double liaison est E.`,
      `Cette écriture rassemble correctement les trois descripteurs.`,
    ],
  },
  {
    order: 113,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `On compare la structure de la figure précédente à d'autres molécules de même constitution :`,
    choices: [
      `L'inversion simultanée de C2 et C3, sans changer E, donne l'énantiomère.`,
      `L'inversion du seul centre C2 donne un diastéréoisomère.`,
      `Le remplacement de la configuration E par Z, sans modifier C2 et C3, donne un diastéréoisomère.`,
      `Une représentation tournée dans l'espace mais conservant 2S, 3R et 4E correspond nécessairement à une autre molécule.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'image miroir inverse tous les centres chiraux tout en conservant le descripteur E de la double liaison. Une inversion partielle ou un changement E/Z conduit à une relation diastéréoisomérique. Une simple rotation globale ne change pas la molécule.`,
    choiceExplanations: [
      `Tous les centres chiraux sont inversés.`,
      `Un seul centre change : la relation n'est pas une énantiomérie.`,
      `Les deux formes géométriques sont des stéréoisomères non images miroir.`,
      `Une rotation globale ne modifie aucune configuration.`,
    ],
  },
  {
    order: 114,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `À propos des projections A, B et C de la figure précédente :`,
    choices: [
      `A et B sont énantiomères.`,
      `A et C sont diastéréoisomères.`,
      `B et C sont diastéréoisomères.`,
      `A et C sont énantiomères.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `A et B correspondent au couple (2R,3R)/(2S,3S). La projection C correspond à la forme méso (2R,3S), diastéréoisomère de A comme de B.`,
    choiceExplanations: [
      `Tous les centres sont inversés entre A et B.`,
      `C ne diffère de A que par un centre.`,
      `C ne diffère de B que par un centre.`,
      `A et C ne sont pas images miroir non superposables.`,
    ],
  },
  {
    order: 115,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Toujours à propos de la figure précédente :`,
    choices: [
      `La projection C possède deux centres asymétriques mais représente une molécule achirale.`,
      `La projection C possède un plan de symétrie interne.`,
      `Cette constitution possède trois stéréoisomères distincts et non quatre.`,
      `La projection C a nécessairement un pouvoir rotatoire non nul parce qu'elle possède deux centres asymétriques.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La forme C est méso : ses deux centres asymétriques sont compensés par une symétrie interne. Elle est achirale et n'ajoute qu'une seule forme au couple d'énantiomères A/B.`,
    choiceExplanations: [
      `La chiralité globale peut être absente malgré plusieurs centres stéréogènes.`,
      `Cette symétrie rend la molécule superposable à son image.`,
      `On compte le couple A/B et la forme C.`,
      `Une forme méso possède un pouvoir rotatoire nul.`,
    ],
  },
  {
    order: 116,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Parmi les comparaisons CIP suivantes :`,
    choices: [
      `$\mathrm{CH_2Cl}$ est prioritaire sur $\mathrm{CH_2OH}$.`,
      `$\mathrm{CH_2SH}$ est prioritaire sur $\mathrm{COOH}$.`,
      `$\mathrm{COOH}$ est prioritaire sur $\mathrm{CH_2OH}$.`,
      `$\mathrm{CH_2CH_3}$ est prioritaire sur $\mathrm{CH_2OH}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Après l'égalité du premier carbone, on compare [Cl,H,H] à [O,H,H], [S,H,H] à [O,O,O], puis [O,O,O] à [O,H,H]. Cl, S et le second O déterminent les priorités indiquées.`,
    choiceExplanations: [
      `Cl a un numéro atomique supérieur à O.`,
      `S a un numéro atomique supérieur à O.`,
      `Après le premier O commun, le second O de $\mathrm{COOH}$ l'emporte sur H.`,
      `$\mathrm{CH_2OH}$ est prioritaire sur $\mathrm{CH_2CH_3}$ car O l'emporte sur C.`,
    ],
  },
  {
    order: 117,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `À propos d'un mélange de deux énantiomères :`,
    choices: [
      `Un mélange 86 % / 14 % possède un ee de 72 %.`,
      `Un ee de 72 % correspond à des proportions 86 % / 14 %.`,
      `Un mélange 50 % / 50 % possède un ee nul.`,
      `Un mélange 85 % / 15 % possède un ee de 85 %.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'ee est la différence des deux proportions. Pour retrouver les proportions à partir de l'ee, on utilise aussi leur somme égale à 100 %.`,
    choiceExplanations: [
      `86 - 14 = 72.`,
      `La résolution de x - y = 72 et x + y = 100 donne 86 et 14.`,
      `Les deux proportions sont identiques.`,
      `85 - 15 = 70, et non 85.`,
    ],
  },
  {
    order: 118,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Une solution d'un énantiomère pur est étudiée au polarimètre dans des conditions fixées :`,
    choices: [
      `Son énantiomère pur présente un pouvoir rotatoire de signe opposé dans les mêmes conditions.`,
      `Dans le domaine de validité usuel, doubler la concentration double l'angle observé si les autres paramètres restent constants.`,
      `Un mélange racémique des deux énantiomères donne un angle global nul.`,
      `Le signe de l'angle permet à lui seul d'attribuer la configuration R ou S.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Deux énantiomères ont des pouvoirs rotatoires opposés dans les mêmes conditions. L'angle observé est proportionnel à la concentration et au trajet optique dans le cadre usuel. Le signe ne permet pas de déduire R ou S.`,
    choiceExplanations: [
      `Les rotations ont même amplitude et signes opposés.`,
      `C'est la relation linéaire usuelle de la polarimétrie.`,
      `Les deux contributions se compensent.`,
      `R/S et (+)/(-) sont indépendants.`,
    ],
  },
  {
    order: 119,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous présente plusieurs couples. Quelles associations sont correctes ?

![Couples de structures à classer](${FIGURE_BASE_PATH}/figure-s6-couples-a-classer.svg)`,
    choices: [
      `Butan-1-ol/butan-2-ol : isomérie de position.`,
      `Propanal/propanone : isomérie fonctionnelle.`,
      `E-but-2-ène/Z-but-2-ène : stéréoisomérie géométrique.`,
      `Forme cétonique/forme énolique : simples conformères.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les deux alcools diffèrent par la position de $\mathrm{OH}$ ; propanal et propanone par leur fonction ; E et Z par la disposition autour de la double liaison. Les formes cétonique et énolique sont des tautomères.`,
    choiceExplanations: [
      `La chaîne et la fonction sont conservées.`,
      `Aldéhyde et cétone sont deux fonctions différentes.`,
      `La constitution reste identique mais la géométrie change.`,
      `Le passage céto-énolique implique un réarrangement de liaisons.`,
    ],
  },
  {
    order: 120,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous présente deux molécules P et Q.

![Couple de molécules énantiomères](${FIGURE_BASE_PATH}/figure-s7-couple-enantiomeres.svg)

À propos de ces deux molécules :`,
    choices: [
      `Chaque molécule possède un seul carbone asymétrique.`,
      `L'ordre CIP est Cl > $\mathrm{OH}$ > $\mathrm{CH_3}$ > H.`,
      `P est R, Q est S et les deux molécules sont énantiomères.`,
      `P et Q sont diastéréoisomères.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les deux structures ont la même constitution et un seul centre stéréogène. Elles sont images miroir non superposables. La figure a été construite avec P de configuration R et Q de configuration S.`,
    choiceExplanations: [
      `Le carbone central porte quatre substituants différents.`,
      `Les numéros atomiques donnent Cl > O > C > H.`,
      `Les configurations opposées d'un centre unique forment un couple d'énantiomères.`,
      `Avec un seul centre, les deux configurations opposées sont énantiomères.`,
    ],
  },
];
