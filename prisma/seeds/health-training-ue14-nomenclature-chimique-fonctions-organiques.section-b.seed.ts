import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_ALCOHOLS_DISCOVERY_QUIZ_SLUG = 'section-b-discovery-alcools';
export const SECTION_B_ALCOHOLS_PRACTICE_QUIZ_SLUG = 'section-b-practice-alcools';
export const SECTION_B_ALDEHYDES_KETONES_DISCOVERY_QUIZ_SLUG = 'section-b-discovery-aldehydes-cetones';
export const SECTION_B_ALDEHYDES_KETONES_PRACTICE_QUIZ_SLUG = 'section-b-practice-aldehydes-cetones';
export const SECTION_B_CARBOXYLIC_ACIDS_ESTERS_DISCOVERY_QUIZ_SLUG = 'section-b-discovery-acides-esters';
export const SECTION_B_ETHERS_PEROXIDES_CARBONATES_DISCOVERY_QUIZ_SLUG = 'section-b-discovery-ethers-peroxydes-carbonates';
export const SECTION_B_OXYGENATED_FUNCTIONS_PRACTICE_QUIZ_SLUG = 'section-b-practice-fonctions-oxygenees';
export const SECTION_B_OXYGENATED_FUNCTIONS_SYNTHESIS_QUIZ_SLUG = 'section-b-synthesis-fonctions-oxygenees';

export const SECTION_B_ALCOHOLS_DISCOVERY_QUESTION_ORDERS: number[] = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
export const SECTION_B_ALCOHOLS_PRACTICE_QUESTION_ORDERS: number[] = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
export const SECTION_B_ALDEHYDES_KETONES_DISCOVERY_QUESTION_ORDERS: number[] = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
export const SECTION_B_ALDEHYDES_KETONES_PRACTICE_QUESTION_ORDERS: number[] = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
export const SECTION_B_CARBOXYLIC_ACIDS_ESTERS_DISCOVERY_QUESTION_ORDERS: number[] = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
export const SECTION_B_ETHERS_PEROXIDES_CARBONATES_DISCOVERY_QUESTION_ORDERS: number[] = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
export const SECTION_B_OXYGENATED_FUNCTIONS_PRACTICE_QUESTION_ORDERS: number[] = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
export const SECTION_B_OXYGENATED_FUNCTIONS_SYNTHESIS_QUESTION_ORDERS: number[] = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_B_ALCOHOLS_DISCOVERY_QUIZ_SLUG,
    title: `Alcools`,
    description: `Reconnaître la fonction alcool et distinguer progressivement alcools primaires, secondaires et tertiaires à partir de noms et de représentations variées.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_B_ORDER,
    questionOrders: SECTION_B_ALCOHOLS_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 2,
    slug: SECTION_B_ALCOHOLS_PRACTICE_QUIZ_SLUG,
    title: `Alcools`,
    description: `Approfondir la lecture des structures d'alcools, les pièges entre classe de l'alcool et degré du carbone, ainsi que les cas de polyalcools et de molécules mixtes.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_B_ORDER,
    questionOrders: SECTION_B_ALCOHOLS_PRACTICE_QUESTION_ORDERS,
  },
  {
    order: 3,
    slug: SECTION_B_ALDEHYDES_KETONES_DISCOVERY_QUIZ_SLUG,
    title: `Aldéhydes et cétones`,
    description: `Identifier le groupe carbonyle et différencier aldéhydes et cétones à partir de structures simples et de quelques molécules d'intérêt biologique ou médical.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_B_ORDER,
    questionOrders: SECTION_B_ALDEHYDES_KETONES_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 4,
    slug: SECTION_B_ALDEHYDES_KETONES_PRACTICE_QUIZ_SLUG,
    title: `Aldéhydes et cétones`,
    description: `S'exercer sur les isomères, le passage du nom à la formule et les pièges classiques entre aldéhydes, cétones et autres fonctions oxygénées.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_B_ORDER,
    questionOrders: SECTION_B_ALDEHYDES_KETONES_PRACTICE_QUESTION_ORDERS,
  },
  {
    order: 5,
    slug: SECTION_B_CARBOXYLIC_ACIDS_ESTERS_DISCOVERY_QUIZ_SLUG,
    title: `Acides carboxyliques et esters`,
    description: `Reconnaître le groupe carboxyle, le groupe ester et commencer à relier noms, rôles biologiques simples et représentations moléculaires.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_B_ORDER,
    questionOrders: SECTION_B_CARBOXYLIC_ACIDS_ESTERS_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 6,
    slug: SECTION_B_ETHERS_PEROXIDES_CARBONATES_DISCOVERY_QUIZ_SLUG,
    title: `Éthers, peroxydes et carbonates`,
    description: `Apprendre à distinguer trois familles moins familières en première année grâce à des motifs structuraux simples et à quelques exemples concrets.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_B_ORDER,
    questionOrders: SECTION_B_ETHERS_PEROXIDES_CARBONATES_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 7,
    slug: SECTION_B_OXYGENATED_FUNCTIONS_PRACTICE_QUIZ_SLUG,
    title: `Fonctions oxygénées (synthèse)`,
    description: `Quiz transversal de reconnaissance et de distinction des principales fonctions oxygénées étudiées dans la section B, avec plusieurs pièges et quelques molécules du vivant.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_B_ORDER,
    questionOrders: SECTION_B_OXYGENATED_FUNCTIONS_PRACTICE_QUESTION_ORDERS,
  },
  {
    order: 8,
    slug: SECTION_B_OXYGENATED_FUNCTIONS_SYNTHESIS_QUIZ_SLUG,
    title: `Fonctions oxygénées (synthèse)`,
    description: `Mobiliser conjointement la reconnaissance des familles, la lecture des formules, l'isomérie de fonction et l'analyse de molécules polyfonctionnelles dans des situations proches de l'examen.`,
    stage: 'MASTER',
    sectionOrder: SECTION_B_ORDER,
    questionOrders: SECTION_B_OXYGENATED_FUNCTIONS_SYNTHESIS_QUESTION_ORDERS,
  },
];

export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  {
    order: 21,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de la fonction alcool :`,
    choices: [
      `Elle comporte un groupe hydroxyle $\\mathrm{-OH}$.`,
      `Dans un alcool, le groupe $\\mathrm{-OH}$ est porté par un carbone saturé de la chaîne organique.`,
      `Toute molécule contenant un oxygène est un alcool.`,
      `L'eau est classée parmi les alcools.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Un alcool est caractérisé par la présence d'un groupe hydroxyle lié à un carbone saturé. La présence d'un oxygène, à elle seule, ne suffit donc pas à définir cette famille.`,
    choiceExplanations: [
      `Le groupe hydroxyle est le motif caractéristique d'un alcool.`,
      `Dans le cadre du cours, le carbone porteur de $\\mathrm{-OH}$ est un carbone saturé.`,
      `Il existe aussi des éthers, esters, acides carboxyliques, cétones, etc.`,
      `L'eau contient un groupe $\\mathrm{H-O-H}$ mais n'est pas une molécule organique de la famille des alcools.`,
    ],
  },
  {
    order: 22,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les molécules suivantes, lesquelles appartiennent à la famille des alcools ?`,
    choices: [
      `Le méthanol $\\mathrm{CH_3OH}$.`,
      `L'éthanol $\\mathrm{CH_3-CH_2-OH}$.`,
      `L'éther diméthylique $\\mathrm{CH_3-O-CH_3}$.`,
      `La propanone $\\mathrm{CH_3-CO-CH_3}$.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le méthanol et l'éthanol possèdent un groupe $\\mathrm{-OH}$ porté par un carbone saturé. L'éther diméthylique est un éther et la propanone une cétone.`,
    choiceExplanations: [
      `Le méthanol est le plus simple des alcools.`,
      `L'éthanol possède bien une fonction alcool.`,
      `Cette molécule possède un oxygène entre deux carbones : c'est un éther.`,
      `La présence d'un groupe carbonyle interne caractérise une cétone.`,
    ],
  },
  {
    order: 23,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant la classification des alcools en primaire, secondaire ou tertiaire :`,
    choices: [
      `Elle dépend du nombre de carbones liés au carbone portant le groupe $\\mathrm{-OH}$.`,
      `Dans un alcool primaire usuel, le carbone porteur de $\\mathrm{-OH}$ est lié à un seul autre carbone ; le méthanol est généralement rattaché à cette classe par convention.`,
      `Un alcool secondaire possède un carbone porteur de $\\mathrm{-OH}$ lié à deux autres carbones.`,
      `Un alcool tertiaire possède nécessairement trois groupes $\\mathrm{-OH}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La classe d'un alcool est définie par l'environnement du carbone porteur du groupe $\\mathrm{-OH}$, et non par le nombre total de groupes hydroxyle présents dans la molécule.`,
    choiceExplanations: [
      `C'est bien le critère de classification des alcools.`,
      `Le méthanol constitue un cas particulier : son carbone n'est lié à aucun autre carbone, mais il est généralement rattaché aux alcools primaires par convention.`,
      `Le carbone fonctionnel est alors secondaire.`,
      `Un alcool tertiaire ne possède pas trois groupes $\\mathrm{-OH}$ ; son carbone fonctionnel est simplement lié à trois carbones.`,
    ],
  },
  {
    order: 24,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `La molécule $\\mathrm{CH_3-CH_2-CH_2-OH}$ est :`,
    choices: [
      `Un alcool primaire.`,
      `Un alcool secondaire.`,
      `Un alcool tertiaire.`,
      `Un éther.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `Le groupe $\\mathrm{-OH}$ est porté par un carbone terminal lié à un seul autre carbone. Il s'agit donc d'un alcool primaire.`,
    choiceExplanations: [
      `C'est la bonne réponse : il s'agit du propan-1-ol.`,
      `Le carbone porteur du groupe $\\mathrm{-OH}$ n'est pas lié à deux carbones.`,
      `Il n'est pas lié à trois carbones.`,
      `L'oxygène n'est pas entre deux carbones ; la molécule n'est donc pas un éther.`,
    ],
  },
  {
    order: 25,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Le propan-2-ol, utilisé notamment comme antiseptique, correspond à la formule $\\mathrm{CH_3-CH(OH)-CH_3}$. Cette molécule est :`,
    choices: [
      `Un alcool primaire.`,
      `Un alcool secondaire.`,
      `Un alcool tertiaire.`,
      `Un aldéhyde.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `Le carbone portant le groupe $\\mathrm{-OH}$ est lié à deux autres carbones. Il s'agit donc d'un alcool secondaire, le propan-2-ol.`,
    choiceExplanations: [
      `Le carbone fonctionnel n'est pas primaire.`,
      `C'est la bonne réponse.`,
      `Il n'est pas lié à trois carbones.`,
      `La molécule ne comporte pas de groupe carbonyle terminal.`,
    ],
  },
  {
    order: 26,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `La molécule $\\mathrm{(CH_3)_3C{-}OH}$ est :`,
    choices: [
      `Un alcool primaire.`,
      `Un alcool secondaire.`,
      `Un alcool tertiaire.`,
      `Une cétone.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `Le carbone portant le groupe $\\mathrm{-OH}$ est ici lié à trois groupes méthyle. C'est donc un alcool tertiaire.`,
    choiceExplanations: [
      `Le carbone fonctionnel n'est pas primaire.`,
      `Il n'est pas secondaire.`,
      `C'est bien un alcool tertiaire, le tert-butanol.`,
      `La molécule ne possède pas de groupe carbonyle.`,
    ],
  },
  {
    order: 27,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les propositions suivantes à propos de l'éthanol $\\mathrm{CH_3-CH_2-OH}$ :`,
    choices: [
      `Il possède une fonction alcool.`,
      `C'est un alcool primaire.`,
      `Il est utilisé comme antiseptique ou désinfectant en pratique courante.`,
      `Il possède une fonction ester.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'éthanol est un alcool primaire bien connu, utilisé notamment dans des solutions hydroalcooliques. Il ne possède pas de groupe ester.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{-OH}$ porté par le carbone terminal caractérise bien un alcool.`,
      `Le carbone porteur du groupe $\\mathrm{-OH}$ n'est lié qu'à un seul autre carbone.`,
      `C'est un exemple simple de molécule à rôle médical ou paramédical.`,
      `Aucun motif $\\mathrm{-COO-}$ n'est présent.`,
    ],
  },
  {
    order: 28,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Le glycérol est représenté par $\\mathrm{HO{-}CH_2{-}CH(OH){-}CH_2{-}OH}$. À son sujet :`,
    choices: [
      `Il possède trois groupes hydroxyle.`,
      `Il appartient à la famille des alcools.`,
      `C'est un triol.`,
      `Il ne contient aucun oxygène.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le glycérol est un polyalcool, plus précisément un triol, important dans le vivant car il constitue le squelette des triglycérides et des phospholipides.`,
    choiceExplanations: [
      `On compte trois groupes $\\mathrm{-OH}$.`,
      `La présence de plusieurs groupes hydroxyle en fait bien un alcool polyfonctionnel.`,
      `Un triol est un alcool portant trois groupes hydroxyle.`,
      `La molécule contient au contraire trois atomes d'oxygène.`,
    ],
  },
  {
    order: 29,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Quel nom correspond à la formule $\\mathrm{CH_3OH}$ ?`,
    choices: [
      `Le méthanal.`,
      `Le méthanol.`,
      `L'acide méthanoïque.`,
      `Le méthoxy-méthane.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `La formule $\\mathrm{CH_3OH}$ correspond au plus simple des alcools : le méthanol.`,
    choiceExplanations: [
      `Le méthanal est un aldéhyde de formule $\\mathrm{H-CHO}$.`,
      `C'est la bonne réponse.`,
      `L'acide méthanoïque possède la fonction carboxylique $\\mathrm{-COOH}$.`,
      `Le méthoxy-méthane est un éther de formule $\\mathrm{CH_3-O-CH_3}$.`,
    ],
  },
  {
    order: 30,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les assertions suivantes concernant les alcools :`,
    choices: [
      `Le groupe caractéristique est $\\mathrm{-OH}$.`,
      `Tous les alcools sont nécessairement tertiaires.`,
      `Le passage du nom à la formule fait partie des compétences à maîtriser pour reconnaître cette famille.`,
      `Le propan-2-ol et le propan-1-ol appartiennent à la même classe d'alcool.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Les alcools se reconnaissent par la présence d'un groupe hydroxyle et la distinction entre leurs classes est une difficulté classique en début d'apprentissage.`,
    choiceExplanations: [
      `Le motif $\\mathrm{-OH}$ est bien le groupe caractéristique des alcools.`,
      `Il existe des alcools primaires, secondaires et tertiaires.`,
      `La lecture réciproque des noms et des formules est centrale dans ce chapitre.`,
      `Le propan-1-ol est primaire, alors que le propan-2-ol est secondaire.`,
    ],
  },
  {
    order: 31,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On considère les trois molécules $\\mathrm{CH_3{-}CH_2{-}CH_2{-}CH_2{-}OH}$, $\\mathrm{CH_3{-}CH(OH){-}CH_2{-}CH_3}$ et $\\mathrm{(CH_3)_3C{-}OH}$ :`,
    choices: [
      `La première est un alcool primaire.`,
      `La deuxième est un alcool primaire.`,
      `La troisième est un alcool tertiaire.`,
      `Les trois alcools appartiennent à la même classe.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Ces trois structures illustrent précisément les trois classes d'alcools : primaire, secondaire et tertiaire.`,
    choiceExplanations: [
      `Le carbone porteur de $\\mathrm{-OH}$ n'est lié qu'à un seul autre carbone.`,
      `Le carbone porteur de $\\mathrm{-OH}$ est lié à deux autres carbones : la deuxième molécule est secondaire, et non primaire.`,
      `Le carbone porteur de $\\mathrm{-OH}$ est lié à trois autres carbones.`,
      `Chaque structure correspond au contraire à une classe différente.`,
    ],
  },
  {
    order: 32,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de la molécule $\\mathrm{CH_3{-}CH(OH){-}CH_2{-}CH_3}$ :`,
    choices: [
      `Elle appartient à la famille des alcools.`,
      `Le carbone portant le groupe $\\mathrm{-OH}$ est un carbone secondaire.`,
      `Il s'agit du butan-1-ol.`,
      `Il s'agit d'un alcool primaire.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La molécule est le butan-2-ol. Son carbone fonctionnel est lié à deux autres carbones ; c'est donc un alcool secondaire.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{-OH}$ identifie bien un alcool.`,
      `Le carbone fonctionnel porte deux voisins carbonés.`,
      `Le groupe hydroxyle est porté par le carbone 2 : il s'agit du butan-2-ol, et non du butan-1-ol.`,
      `L'alcool n'est pas primaire.`,
    ],
  },
  {
    order: 33,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On considère l'acide lactique, représenté par $\\mathrm{CH_3{-}CH(OH){-}COOH}$. À son sujet :`,
    choices: [
      `Il possède à la fois une fonction alcool et une fonction acide carboxylique.`,
      `Il appartient uniquement à la famille des alcools.`,
      `Il joue un rôle en physiologie et dans le métabolisme énergétique.`,
      `Le groupe $\\mathrm{-OH}$ visible appartient au groupe carboxyle et ne constitue pas une fonction alcool distincte.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'acide lactique est une molécule mixte : il possède une fonction acide carboxylique et une fonction alcool. Dans l'organisme, il est majoritairement présent sous forme lactate, qui participe au métabolisme énergétique ; sa concentration sanguine peut augmenter lors d'un effort intense.`,
    choiceExplanations: [
      `La molécule possède bien les deux fonctions.`,
      `Elle n'appartient pas exclusivement à la famille des alcools.`,
      `C'est un exemple pertinent de molécule du vivant.`,
      `Le groupe $\\mathrm{-OH}$ porté par le carbone central est distinct du groupe $\\mathrm{-COOH}$ : l'affirmation est donc fausse.`,
    ],
  },
  {
    order: 34,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Le glucose, principal sucre circulant et carburant métabolique majeur, peut être représenté sous sa forme ouverte simplifiée par $\\mathrm{CHO{-}CH(OH){-}CH(OH){-}CH(OH){-}CH(OH){-}CH_2OH}$ :`,
    choices: [
      `Cette molécule possède plusieurs fonctions alcool.`,
      `Elle ne possède aucun groupe hydroxyle.`,
      `Sous cette forme, le glucose ne possède aucune autre fonction oxygénée que ses alcools.`,
      `Elle possède aussi une fonction aldéhyde.`,
    ],
    correctChoiceIndexes: [0, 3],
    explanation:
      `Sous forme ouverte, le glucose est un polyhydroxyaldéhyde : il possède plusieurs groupes $\\mathrm{-OH}$ et un groupe aldéhyde terminal.`,
    choiceExplanations: [
      `On repère plusieurs groupes $\\mathrm{-OH}$.`,
      `La molécule contient au contraire de nombreux hydroxyles.`,
      `Le glucose ouvert possède aussi une fonction aldéhyde : l'affirmation est donc fausse.`,
      `L'extrémité $\\mathrm{CHO}$ correspond à une fonction aldéhyde.`,
    ],
  },
  {
    order: 35,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de la formule brute $\\mathrm{C_3H_8O}$ :`,
    choices: [
      `Elle peut correspondre au propan-1-ol.`,
      `Elle peut correspondre au butan-2-ol.`,
      `Elle peut correspondre au méthoxyéthane $\\mathrm{CH_3-O-CH_2-CH_3}$.`,
      `Toutes les molécules de formule brute $\\mathrm{C_3H_8O}$ sont des alcools.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La formule brute $\\mathrm{C_3H_8O}$ illustre bien la diversité structurale : elle peut correspondre à des alcools, mais aussi à un éther.`,
    choiceExplanations: [
      `Le propan-1-ol possède bien cette formule brute.`,
      `Le butan-2-ol possède quatre atomes de carbone et a pour formule brute $\\mathrm{C_4H_{10}O}$.`,
      `Le méthoxyéthane, qui est un éther, partage la même formule brute.`,
      `La présence d'un oxygène n'impose pas la fonction alcool.`,
    ],
  },
  {
    order: 36,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Concernant le cholestérol, souvent représenté de façon topologique mais possédant notamment un seul groupe $\\mathrm{-OH}$ :`,
    choices: [
      `Il appartient à la famille des alcools.`,
      `Il peut être qualifié de stérol, donc de dérivé alcoolique stéroïdien.`,
      `Dans une formule topologique, les hétéroatomes comme l'oxygène sont toujours omis.`,
      `Sa structure topologique interdit de reconnaître sa fonction alcool.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le cholestérol est un stérol : malgré une structure complexe, la présence d'un groupe hydroxyle permet d'identifier une fonction alcool. C'est une molécule importante du vivant.`,
    choiceExplanations: [
      `La présence d'un groupe hydroxyle suffit à identifier une fonction alcool.`,
      `Cette appellation est classique en biochimie.`,
      `Les hétéroatomes sont explicitement représentés dans une formule topologique ; l'affirmation est donc fausse.`,
      `La représentation topologique n'empêche pas la reconnaissance des fonctions si l'on repère correctement les hétéroatomes.`,
    ],
  },
  {
    order: 37,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le groupe $\\mathrm{-OH}$ est présent dans les quatre propositions suivantes. Lesquelles correspondent néanmoins à un alcool au sens du cours ?`,
    choices: [
      `Le propan-2-ol $\\mathrm{CH_3-CH(OH)-CH_3}$.`,
      `Le glycérol $\\mathrm{HO-CH_2-CH(OH)-CH_2-OH}$.`,
      `L'acide éthanoïque $\\mathrm{CH_3-COOH}$.`,
      `Tous les items précédents sont des alcools et uniquement des alcools.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le propan-2-ol et le glycérol sont bien des alcools. En revanche, dans l'acide éthanoïque, le groupe $\\mathrm{-OH}$ fait partie du groupe carboxyle $\\mathrm{-COOH}$, ce qui définit une autre famille.`,
    choiceExplanations: [
      `Le groupe hydroxyle est porté par un carbone saturé : c'est bien un alcool.`,
      `Le glycérol est un triol.`,
      `La molécule appartient avant tout à la famille des acides carboxyliques.`,
      `L'item C est faux ; l'attrape-tout est donc faux également.`,
    ],
  },
  {
    order: 38,
    difficulty: 'MEDIUM',
    answerFormat: 'SINGLE',
    question: `Quel nom correspond à la formule $\\mathrm{CH_3{-}CH_2{-}CH_2{-}CH_2{-}OH}$ ?`,
    choices: [
      `Butan-2-ol.`,
      `Butan-1-ol.`,
      `2-méthylpropan-2-ol.`,
      `Butanal.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `Le groupe $\\mathrm{-OH}$ est situé sur le carbone 1 d'une chaîne à quatre carbones : il s'agit du butan-1-ol.`,
    choiceExplanations: [
      `Dans le butan-2-ol, le groupe $\\mathrm{-OH}$ serait porté par le carbone 2.`,
      `C'est la bonne réponse.`,
      `Cette structure serait ramifiée et tertiaire.`,
      `Le butanal est un aldéhyde.`,
    ],
  },
  {
    order: 39,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des polyalcools :`,
    choices: [
      `Un diol possède deux groupes hydroxyle.`,
      `Un triol possède trois groupes hydroxyle.`,
      `L'éthylène glycol est un triol.`,
      `Un polyalcool ne peut jamais jouer de rôle biologique.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les polyalcools portent plusieurs groupes hydroxyle. Plusieurs molécules du vivant appartiennent à cette catégorie ou en dérivent.`,
    choiceExplanations: [
      `C'est la définition d'un diol.`,
      `C'est la définition d'un triol.`,
      `L'éthylène glycol possède deux groupes hydroxyle : c'est un diol, et non un triol.`,
      `Le glycérol, justement, joue un rôle biologique majeur.`,
    ],
  },
  {
    order: 40,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les affirmations suivantes sur les alcools :`,
    choices: [
      `La classe de l'alcool dépend du carbone portant le groupe $\\mathrm{-OH}$.`,
      `Deux molécules de même formule brute peuvent appartenir à des familles différentes.`,
      `La présence d'un seul oxygène impose toujours la fonction alcool.`,
      `La formule brute seule permet toujours de déterminer la classe de l'alcool.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les alcools sont une bonne porte d'entrée pour comprendre qu'une même formule brute peut correspondre à plusieurs structures et familles différentes.`,
    choiceExplanations: [
      `La classe de l'alcool est définie par l'environnement du carbone fonctionnel.`,
      `Par exemple, $\\mathrm{C_3H_8O}$ peut correspondre à un alcool ou à un éther.`,
      `Un oxygène peut aussi se trouver dans un éther, une cétone, un aldéhyde, etc.`,
      `La formule brute ne précise pas l'enchaînement des atomes et ne permet donc pas toujours de déterminer la classe de l'alcool.`,
    ],
  },
  {
    order: 41,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos du groupe carbonyle $\\mathrm{C=O}$ :`,
    choices: [
      `Il est présent dans les aldéhydes.`,
      `Il est présent dans les cétones.`,
      `Il suffit à distinguer immédiatement un aldéhyde d'une cétone sans regarder sa position.`,
      `Les aldéhydes et les cétones appartiennent à une seule et même famille.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Aldéhydes et cétones possèdent tous deux un groupe carbonyle. La distinction repose sur l'environnement de ce carbonyle : terminal pour un aldéhyde, interne pour une cétone.`,
    choiceExplanations: [
      `L'aldéhyde possède bien une fonction carbonyle.`,
      `La cétone aussi.`,
      `Il faut regarder si le carbonyle est terminal ou non.`,
      `Ils partagent le groupe carbonyle, mais constituent deux familles distinctes.`,
    ],
  },
  {
    order: 42,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant les aldéhydes :`,
    choices: [
      `Le groupe fonctionnel est terminal dans les chaînes usuelles.`,
      `Le carbone du groupe carbonyle est toujours lié à exactement deux hydrogènes.`,
      `La fonction aldéhyde peut être notée $\\mathrm{-CHO}$.`,
      `La propanone est un aldéhyde.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'aldéhyde est généralement repéré par le motif terminal $\\mathrm{-CHO}$. La propanone est en revanche une cétone.`,
    choiceExplanations: [
      `Le carbonyle aldéhydique est en bout de chaîne.`,
      `Seul le méthanal possède deux hydrogènes sur son carbone carbonylé ; les autres aldéhydes n'en possèdent qu'un.`,
      `Cette écriture est très fréquente en formule semi-développée.`,
      `La propanone est un exemple classique de cétone.`,
    ],
  },
  {
    order: 43,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant les cétones :`,
    choices: [
      `Le groupe carbonyle est porté par un carbone lié à deux autres carbones dans les chaînes usuelles.`,
      `Une cétone peut être repérée par le motif simplifié $\\mathrm{R-CHO}$.`,
      `Le méthanal est une cétone.`,
      `La propanone est une cétone.`,
    ],
    correctChoiceIndexes: [0, 3],
    explanation:
      `La cétone possède un carbonyle interne, ce qui la distingue de l'aldéhyde. La propanone, aussi appelée acétone, en est l'exemple simple le plus classique.`,
    choiceExplanations: [
      `C'est le cas d'une chaîne carbonée acyclique classique.`,
      `Le motif $\\mathrm{R-CHO}$ correspond à un aldéhyde ; une cétone simple se note plutôt $\\mathrm{R-CO-R'}$.`,
      `Le méthanal est un aldéhyde.`,
      `C'est bien une cétone.`,
    ],
  },
  {
    order: 44,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Quelle famille correspond à la formule $\\mathrm{CH_3{-}CO{-}CH_3}$ ?`,
    choices: [
      `Alcool.`,
      `Aldéhyde.`,
      `Cétone.`,
      `Acide carboxylique.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `La molécule $\\mathrm{CH_3-CO-CH_3}$ possède un groupe carbonyle interne : c'est une cétone, la propanone.`,
    choiceExplanations: [
      `La molécule ne possède pas de groupe hydroxyle caractéristique d'un alcool.`,
      `Le carbonyle n'est pas terminal.`,
      `C'est la bonne réponse.`,
      `La molécule ne possède pas de groupe $\\mathrm{-COOH}$.`,
    ],
  },
  {
    order: 45,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Quelle famille correspond à la formule $\\mathrm{CH_3{-}CH_2{-}CHO}$ ?`,
    choices: [
      `Aldéhyde.`,
      `Cétone.`,
      `Éther.`,
      `Ester.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `Le motif terminal $\\mathrm{-CHO}$ permet de reconnaître un aldéhyde : ici, le propanal.`,
    choiceExplanations: [
      `C'est la bonne réponse.`,
      `Une cétone aurait un carbonyle non terminal.`,
      `La formule ne correspond pas à un éther.`,
      `Elle ne correspond pas non plus à un ester.`,
    ],
  },
  {
    order: 46,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `L'acétone, un corps cétonique pouvant être détecté lors d'un jeûne prolongé ou d'un diabète déséquilibré, est aussi appelée propanone. À son sujet :`,
    choices: [
      `Elle appartient à la famille des cétones.`,
      `Elle possède la formule semi-développée $\\mathrm{CH_3-CO-CH_3}$.`,
      `Dans l'organisme, elle constitue le principal sucre circulant.`,
      `Elle possède une fonction aldéhyde.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La propanone, ou acétone, est une cétone très connue, employée notamment comme solvant. Elle ne possède pas de fonction aldéhyde.`,
    choiceExplanations: [
      `C'est une cétone simple.`,
      `Cette écriture correspond bien à l'acétone.`,
      `Le principal sucre circulant est le glucose ; la propanone est surtout connue comme solvant.`,
      `Le carbonyle est interne, et non terminal.`,
    ],
  },
  {
    order: 47,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Le méthanal, aussi appelé formaldéhyde :`,
    choices: [
      `Appartient à la famille des aldéhydes.`,
      `Peut être représenté par $\\mathrm{H-COOH}$.`,
      `Possède une fonction cétone.`,
      `Est l'aldéhyde le plus simple.`,
    ],
    correctChoiceIndexes: [0, 3],
    explanation:
      `Le méthanal est le plus simple des aldéhydes. Son groupe carbonyle terminal permet de le reconnaître facilement.`,
    choiceExplanations: [
      `Le méthanal possède bien une fonction aldéhyde.`,
      `$\\mathrm{H-COOH}$ correspond à l'acide méthanoïque ; le méthanal s'écrit $\\mathrm{H-CHO}$ ou $\\mathrm{H_2C=O}$.`,
      `Il ne s'agit pas d'une cétone.`,
      `Aucun aldéhyde ne possède moins d'un atome de carbone.`,
    ],
  },
  {
    order: 48,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `À propos du glucose sous forme ouverte simplifiée $\\mathrm{CHO{-}CH(OH){-}CH(OH){-}CH(OH){-}CH(OH){-}CH_2OH}$ :`,
    choices: [
      `Le glucose possède une fonction aldéhyde sous sa forme ouverte.`,
      `Le glucose possède aussi plusieurs fonctions alcool.`,
      `Le glucose constitue la principale forme de stockage à long terme de l'énergie chez l'humain.`,
      `Le glucose est une cétone sous cette forme.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Sous forme ouverte, le glucose est un aldose, donc un polyhydroxyaldéhyde. C'est évidemment une molécule majeure du vivant.`,
    choiceExplanations: [
      `La fonction $\\mathrm{-CHO}$ est bien présente.`,
      `Les groupes $\\mathrm{-OH}$ sont nombreux.`,
      `Le glucose est un carburant métabolique majeur, mais le stockage énergétique à long terme repose surtout sur les lipides.`,
      `Le glucose ouvert n'est pas une cétone.`,
    ],
  },
  {
    order: 49,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Quel nom correspond à la formule $\\mathrm{CH_3-CHO}$ ?`,
    choices: [
      `Éthanol.`,
      `Éthanal.`,
      `Éthanone.`,
      `Acide éthanoïque.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `La formule $\\mathrm{CH_3-CHO}$ correspond à l'éthanal, le plus simple aldéhyde à deux carbones.`,
    choiceExplanations: [
      `L'éthanol est un alcool.`,
      `C'est la bonne réponse.`,
      `Une cétone à deux carbones n'est pas possible en chaîne ouverte usuelle.`,
      `L'acide éthanoïque possède le groupe $\\mathrm{-COOH}$.`,
    ],
  },
  {
    order: 50,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les affirmations suivantes concernant aldéhydes et cétones :`,
    choices: [
      `Ils possèdent tous deux un groupe carbonyle.`,
      `La position du carbonyle aide à les distinguer.`,
      `Le propanal est une cétone.`,
      `La propanone et le propanal appartiennent à la même famille.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le propanal est un aldéhyde, tandis que la propanone est une cétone. Ils partagent le motif carbonyle mais pas la même famille.`,
    choiceExplanations: [
      `C'est vrai pour les deux familles.`,
      `Terminal pour l'aldéhyde, interne pour la cétone.`,
      `Le propanal est un aldéhyde.`,
      `Ces deux molécules appartiennent à des familles différentes.`,
    ],
  },
  {
    order: 51,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de la formule brute $\\mathrm{C_3H_6O}$ :`,
    choices: [
      `Elle peut correspondre au propanal.`,
      `Elle peut correspondre à la propanone.`,
      `Le propanal et la propanone sont des isomères de position.`,
      `Elle correspond uniquement à des alcools.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La formule brute $\\mathrm{C_3H_6O}$ peut correspondre à un aldéhyde (propanal) ou à une cétone (propanone). C'est un exemple classique d'isomérie de fonction.`,
    choiceExplanations: [
      `Le propanal a bien cette formule brute.`,
      `La propanone aussi.`,
      `Ils ont la même formule brute mais des fonctions différentes : ce sont des isomères de fonction, et non de position.`,
      `Elle ne correspond pas uniquement à des alcools.`,
    ],
  },
  {
    order: 52,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On compare les structures $\\mathrm{CH_3{-}CH_2{-}CHO}$ et $\\mathrm{CH_3{-}CO{-}CH_3}$ :`,
    choices: [
      `La première est un aldéhyde.`,
      `La seconde est une cétone.`,
      `Les deux molécules ont des formules brutes différentes.`,
      `Les deux molécules appartiennent à la même famille.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Ces deux molécules constituent l'exemple de référence pour comparer aldéhydes et cétones à formule brute identique.`,
    choiceExplanations: [
      `Le motif terminal $\\mathrm{-CHO}$ caractérise l'aldéhyde.`,
      `Le carbonyle interne caractérise la cétone.`,
      `Toutes deux ont pour formule brute $\\mathrm{C_3H_6O}$ : l'affirmation est donc fausse.`,
      `Leur famille n'est pas la même.`,
    ],
  },
  {
    order: 53,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Le fructose, un ose présent dans l'alimentation, peut être représenté sous forme ouverte simplifiée par $\\mathrm{CH_2OH{-}CO{-}CH(OH){-}CH(OH){-}CH(OH){-}CH_2OH}$ :`,
    choices: [
      `Il possède une fonction cétone.`,
      `Il possède plusieurs fonctions alcool.`,
      `Sous cette forme, le fructose appartient à la famille des aldéhydes.`,
      `Le groupe carbonyle est situé en bout de chaîne.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le fructose est un cétose, donc un polyhydroxycétone. C'est une molécule importante en biochimie et en nutrition.`,
    choiceExplanations: [
      `Le motif $\\mathrm{-CO-}$ interne correspond à une cétone.`,
      `Plusieurs groupes $\\mathrm{-OH}$ sont visibles.`,
      `Le fructose ouvert est un cétose, et non un aldéhyde.`,
      `Le groupe carbonyle est interne, en position 2.`,
    ],
  },
  {
    order: 54,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les propositions suivantes concernant les cétones :`,
    choices: [
      `Une cétone simple acyclique ne peut pas être portée par un carbone terminal.`,
      `Une cétone à deux carbones est impossible en chaîne ouverte usuelle.`,
      `Le méthanal est une cétone très simple.`,
      `Le suffixe -al désigne une cétone.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Une cétone nécessite que le carbone carbonylé soit lié à deux carbones, ce qui exclut les extrémités de chaîne et rend impossible une cétone à seulement deux carbones en chaîne ouverte.`,
    choiceExplanations: [
      `C'est bien une conséquence de la structure générale d'une cétone.`,
      `Avec seulement deux carbones, le carbonyle ne pourrait pas être interne.`,
      `Le méthanal est un aldéhyde, pas une cétone.`,
      `Le suffixe -al désigne un aldéhyde ; le suffixe -one désigne une cétone.`,
    ],
  },
  {
    order: 55,
    difficulty: 'MEDIUM',
    answerFormat: 'SINGLE',
    question: `Quel nom correspond à la formule $\\mathrm{CH_3{-}CO{-}CH_2{-}CH_3}$ ?`,
    choices: [
      `Butanal.`,
      `Butan-2-ol.`,
      `Butan-2-one.`,
      `Acide butanoïque.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `La chaîne comporte quatre carbones et le groupe carbonyle se situe en position 2 : il s'agit du butan-2-one, aussi appelé 2-butanone.`,
    choiceExplanations: [
      `Le butanal serait un aldéhyde terminal.`,
      `Le butan-2-ol est un alcool.`,
      `C'est la bonne réponse.`,
      `Un acide butanoïque porterait le groupe $\\mathrm{-COOH}$.`,
    ],
  },
  {
    order: 56,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de la molécule $\\mathrm{HO{-}CH_2{-}CO{-}CH_3}$ :`,
    choices: [
      `Elle possède à la fois une fonction alcool et une fonction cétone.`,
      `Elle appartient uniquement à la famille des cétones.`,
      `Elle illustre le fait qu'une molécule peut comporter plusieurs fonctions oxygénées.`,
      `La présence du groupe hydroxyle empêche de reconnaître la fonction cétone.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Cette structure est un bon exemple de molécule polyfonctionnelle : elle possède un groupe hydroxyle et un groupe cétone.`,
    choiceExplanations: [
      `Les deux fonctions sont bien présentes.`,
      `Elle n'appartient pas exclusivement à une seule famille.`,
      `Le chapitre vise précisément cet apprentissage progressif des familles.`,
      `Une molécule peut porter plusieurs fonctions : le groupe hydroxyle n'empêche pas d'identifier le carbonyle cétone.`,
    ],
  },
  {
    order: 57,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le rétinal, molécule impliquée dans la vision, possède une fonction aldéhyde à une extrémité de sa chaîne carbonée. On peut en déduire que :`,
    choices: [
      `Le rétinal appartient à la famille des aldéhydes.`,
      `Sa fonction aldéhyde impose une structure moléculaire très simple.`,
      `Le rétinal est nécessairement une cétone.`,
      `Le monde du vivant fournit aussi des exemples utiles pour mémoriser les familles organiques.`,
    ],
    correctChoiceIndexes: [0, 3],
    explanation:
      `Le rétinal illustre bien l'intérêt de relier fonction organique et rôle biologique : malgré une structure complexe, la fonction aldéhyde reste identifiable.`,
    choiceExplanations: [
      `Une fonction aldéhyde est bien présente.`,
      `Le rétinal possède une structure conjuguée complexe malgré la présence d'un motif aldéhyde simple à reconnaître.`,
      `La présence d'une fonction aldéhyde exclut ici la classification comme cétone.`,
      `Associer la fonction à une molécule connue du vivant est souvent utile pédagogiquement.`,
    ],
  },
  {
    order: 58,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les molécules suivantes, lesquelles sont des aldéhydes ?`,
    choices: [
      `$\\mathrm{H-CHO}$.`,
      `$\\mathrm{CH_3-CH_2-OH}$.`,
      `$\\mathrm{CH_3-CO-CH_3}$.`,
      `$\\mathrm{CH_3-CH_2-CHO}$.`,
    ],
    correctChoiceIndexes: [0, 3],
    explanation:
      `Les trois premières molécules de la série des aldéhydes simples sont le méthanal, l'éthanal et le propanal. L'acétone appartient, elle, à la famille des cétones.`,
    choiceExplanations: [
      `Le méthanal est bien un aldéhyde.`,
      `L'éthanol est un alcool, pas un aldéhyde.`,
      `La propanone est une cétone.`,
      `Le propanal est bien un aldéhyde.`,
    ],
  },
  {
    order: 59,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de la lecture des noms et des structures :`,
    choices: [
      `Le suffixe -al oriente vers une fonction aldéhyde.`,
      `Le suffixe -one oriente vers une fonction cétone.`,
      `Le nom propanal correspond à une fonction alcool.`,
      `Le nom butan-2-ol correspond à une cétone à quatre carbones.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les suffixes constituent un repère très utile pour relier rapidement le nom de la molécule à sa famille organique.`,
    choiceExplanations: [
      `Le suffixe -al est celui des aldéhydes.`,
      `Le suffixe -one est celui des cétones.`,
      `Le propanal est un aldéhyde.`,
      `Le butan-2-ol est un alcool ; le butan-2-one est la cétone correspondante.`,
    ],
  },
  {
    order: 60,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les affirmations suivantes concernant aldéhydes et cétones :`,
    choices: [
      `Ils peuvent apparaître dans des molécules du vivant.`,
      `Une même molécule peut porter une fonction aldéhyde ou cétone et plusieurs fonctions alcool.`,
      `Ils sont impossibles à reconnaître sur une formule semi-développée.`,
      `Tous les items précédents sont vrais.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le glucose, le fructose ou encore le rétinal montrent qu'aldéhydes et cétones apparaissent dans le vivant. Les formules semi-développées permettent précisément de les reconnaître.`,
    choiceExplanations: [
      `De nombreux biomolécules en fournissent des exemples.`,
      `Les oses sous forme ouverte en sont de bons exemples.`,
      `Au contraire, ces formules sont un support utile d'identification.`,
      `L'item C est faux ; l'attrape-tout est donc faux.`,
    ],
  },
  {
    order: 61,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des acides carboxyliques :`,
    choices: [
      `Leur groupe caractéristique est $\\mathrm{-COOH}$.`,
      `Ils possèdent simultanément un carbonyle et un hydroxyle réunis dans un même groupe fonctionnel.`,
      `Dans le groupe $\\mathrm{-COOH}$, le groupe $\\mathrm{-OH}$ constitue toujours une fonction alcool indépendante.`,
      `Ils sont tous des cétones.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le groupe carboxyle $\\mathrm{-COOH}$ définit la famille des acides carboxyliques. Il associe un carbonyle et un hydroxyle dans un même motif structural.`,
    choiceExplanations: [
      `C'est le groupe caractéristique des acides carboxyliques.`,
      `C'est une bonne façon visuelle de reconnaître la fonction.`,
      `Dans un acide carboxylique, le groupe $\\mathrm{-OH}$ appartient au groupe carboxyle et ne constitue pas une fonction alcool indépendante.`,
      `La présence du groupe $\\mathrm{-COOH}$ les distingue des cétones.`,
    ],
  },
  {
    order: 62,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des esters :`,
    choices: [
      `Leur groupe caractéristique peut être repéré par le motif $\\mathrm{-COO-}$.`,
      `Ils dérivent conceptuellement de l'association d'un acide carboxylique et d'un alcool.`,
      `Le groupe caractéristique d'un ester ne contient qu'un seul atome d'oxygène.`,
      `L'acide éthanoïque est un ester.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le motif $\\mathrm{-COO-}$ est caractéristique des esters. Leur reconnaissance est importante car cette famille apparaît dans de nombreuses molécules naturelles ou synthétiques.`,
    choiceExplanations: [
      `Le motif $\\mathrm{-COO-}$ est le bon repère structural.`,
      `C'est une bonne façon mnémotechnique de comprendre la famille.`,
      `Un ester comporte deux oxygènes : un oxygène carbonylé et un oxygène en liaison simple.`,
      `L'acide éthanoïque est un acide carboxylique, pas un ester.`,
    ],
  },
  {
    order: 63,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `L'acide éthanoïque, dont le groupement carboxyle est un motif fréquent en biochimie, peut être écrit $\\mathrm{CH_3{-}COOH}$. À quelle famille appartient-il ?`,
    choices: [
      `Alcool.`,
      `Acide carboxylique.`,
      `Ester.`,
      `Éther.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `Le groupe $\\mathrm{-COOH}$ permet de reconnaître immédiatement un acide carboxylique. Ici, il s'agit de l'acide éthanoïque.`,
    choiceExplanations: [
      `La molécule n'est pas un alcool.`,
      `C'est la bonne réponse.`,
      `Le motif n'est pas celui d'un ester.`,
      `Ce n'est pas non plus un éther.`,
    ],
  },
  {
    order: 64,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `La molécule $\\mathrm{CH_3{-}COO{-}CH_2{-}CH_3}$, utilisée comme exemple de motif ester dans certaines molécules biologiques et pharmaceutiques, appartient à quelle famille ?`,
    choices: [
      `Acide carboxylique.`,
      `Ester.`,
      `Aldéhyde.`,
      `Peroxyde.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `Le motif $\\mathrm{-COO-}$ entre deux fragments carbonés caractérise un ester. La molécule proposée est l'éthanoate d'éthyle.`,
    choiceExplanations: [
      `La molécule ne possède pas de groupe $\\mathrm{-COOH}$.`,
      `C'est la bonne réponse.`,
      `Elle ne possède pas de motif $\\mathrm{-CHO}$.`,
      `Il n'y a pas de liaison $\\mathrm{O-O}$.`,
    ],
  },
  {
    order: 65,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `L'acide lactique, représenté par $\\mathrm{CH_3-CH(OH)-COOH}$ :`,
    choices: [
      `Possède une fonction acide carboxylique.`,
      `Possède aussi une fonction alcool.`,
      `N'existe que pendant un effort intense et disparaît totalement au repos.`,
      `Est un ester.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `L'acide lactique est une molécule mixte, à la fois acide carboxylique et alcool. C'est un exemple important dans le domaine biomédical.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{-COOH}$ est bien présent.`,
      `Le groupe $\\mathrm{-OH}$ porté par un carbone saturé correspond à une fonction alcool.`,
      `Le lactate est produit et utilisé en permanence par l'organisme ; sa concentration peut augmenter pendant un effort, mais il n'est pas absent au repos.`,
      `Il n'y a pas de motif ester $\\mathrm{-COO-}$ entre deux fragments carbonés distincts.`,
    ],
  },
  {
    order: 66,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des triglycérides :`,
    choices: [
      `Ils comportent des fonctions ester.`,
      `Ils dérivent du glycérol et d'acides gras.`,
      `Ils constituent la structure principale des protéines.`,
      `Ils ne contiennent jamais d'oxygène.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les triglycérides sont des triesters du glycérol et d'acides gras. Ils jouent un rôle majeur dans le stockage de l'énergie.`,
    choiceExplanations: [
      `Chaque liaison entre le glycérol et un acide gras est une fonction ester.`,
      `C'est l'idée structurale essentielle à retenir.`,
      `Les protéines sont constituées d'acides aminés reliés par des liaisons amide ; les triglycérides sont surtout des lipides de réserve.`,
      `Les fonctions ester contiennent au contraire des atomes d'oxygène.`,
    ],
  },
  {
    order: 67,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `L'aspirine peut être décrite, de façon simplifiée, comme une molécule possédant à la fois une fonction acide carboxylique et une fonction ester. On peut en déduire que :`,
    choices: [
      `Une même molécule peut posséder plusieurs fonctions oxygénées.`,
      `L'aspirine appartient uniquement à la famille des alcools.`,
      `L'aspirine est un exemple de molécule à intérêt médical.`,
      `Connaître le nom usuel « aspirine » suffit à déterminer sa structure sans représentation.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'aspirine est une molécule emblématique qui montre qu'une même structure peut comporter plusieurs fonctions chimiques, ici un acide carboxylique et un ester.`,
    choiceExplanations: [
      `C'est un message important de cette section.`,
      `L'aspirine n'est pas un simple alcool.`,
      `Son rôle antalgique et antipyrétique en fait un exemple médical évident.`,
      `Le nom usuel ne permet pas, à lui seul, de reconstruire sans ambiguïté tous les motifs de la molécule.`,
    ],
  },
  {
    order: 68,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Quel nom de famille convient à la molécule $\\mathrm{H{-}COOH}$ ?`,
    choices: [
      `Aldéhyde.`,
      `Acide carboxylique.`,
      `Cétone.`,
      `Éther.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `La molécule $\\mathrm{H-COOH}$ est l'acide méthanoïque. Le groupe $\\mathrm{-COOH}$ permet de la classer parmi les acides carboxyliques.`,
    choiceExplanations: [
      `La molécule ne possède pas une simple fonction aldéhyde.`,
      `C'est la bonne réponse.`,
      `Ce n'est pas une cétone.`,
      `Ce n'est pas un éther.`,
    ],
  },
  {
    order: 69,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Pour distinguer visuellement un acide carboxylique d'un ester :`,
    choices: [
      `Un acide carboxylique possède le motif $\\mathrm{-COOH}$.`,
      `Un ester possède le motif $\\mathrm{-COO-}$ entre deux fragments carbonés.`,
      `Un acide carboxylique et un ester se reconnaissent exactement par le même motif terminal.`,
      `Dans un ester, l'oxygène hors carbonyle porte toujours un hydrogène.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La distinction acide/ester est un apprentissage fondamental. Le groupe hydroxyle de l'acide carboxylique constitue un bon repère pour éviter la confusion.`,
    choiceExplanations: [
      `C'est le repère visuel principal de l'acide.`,
      `Le motif ester relie deux fragments carbonés par l'intermédiaire du groupe $\\mathrm{-COO-}$.`,
      `Les motifs sont proches mais pas identiques.`,
      `Dans un ester, l'oxygène hors carbonyle est lié à un fragment carboné, et non à un hydrogène.`,
    ],
  },
  {
    order: 70,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les propositions suivantes concernant acides carboxyliques et esters :`,
    choices: [
      `Ils contiennent chacun deux atomes d'oxygène dans leur groupe caractéristique.`,
      `Ils font partie des fonctions oxygénées importantes à reconnaître en santé et biochimie.`,
      `Tous les acides carboxyliques sont des esters.`,
      `Tous les esters sont des acides carboxyliques.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Acides carboxyliques et esters sont deux familles distinctes, mais proches visuellement et conceptuellement. Elles apparaissent dans de nombreuses molécules biologiques et pharmaceutiques.`,
    choiceExplanations: [
      `C'est vrai pour les motifs $\\mathrm{-COOH}$ et $\\mathrm{-COO-}$.`,
      `Leur reconnaissance est très utile dans ce chapitre.`,
      `Ce sont deux familles différentes.`,
      `Les esters ne possèdent pas de groupe $\\mathrm{-COOH}$.`,
    ],
  },
  {
    order: 71,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Certains médicaments possèdent un motif éther. À propos des éthers :`,
    choices: [
      `Leur motif simplifié est $\\mathrm{R-O-R'}$.`,
      `L'oxygène est placé entre deux fragments carbonés.`,
      `L'éthanol $\\mathrm{CH_3-CH_2-OH}$ est un éther.`,
      `Ils possèdent une liaison $\\mathrm{O-O}$.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Un éther est caractérisé par un oxygène reliant deux fragments carbonés. Il ne doit pas être confondu avec un peroxyde, qui possède une liaison $\\mathrm{O-O}$.`,
    choiceExplanations: [
      `C'est la représentation générale d'un éther.`,
      `Ce point visuel est essentiel pour la reconnaissance.`,
      `L'éthanol possède un groupe hydroxyle : c'est un alcool, pas un éther.`,
      `La liaison $\\mathrm{O-O}$ correspond au motif peroxyde.`,
    ],
  },
  {
    order: 72,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des peroxydes :`,
    choices: [
      `Ils comportent une liaison $\\mathrm{O-O}$.`,
      `Le peroxyde d'hydrogène $\\mathrm{H-O-O-H}$, ou eau oxygénée, illustre ce motif.`,
      `Tous les peroxydes sont des alcools.`,
      `Un éther simple se reconnaît lui aussi à une liaison $\\mathrm{O-O}$.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le motif clé d'un peroxyde est la liaison $\\mathrm{O-O}$. L'eau oxygénée en constitue l'exemple le plus simple et le plus connu en contexte biomédical.`,
    choiceExplanations: [
      `C'est le critère de reconnaissance le plus important.`,
      `L'eau oxygénée est un bon exemple à mémoriser.`,
      `Le motif peroxyde ne correspond pas à la fonction alcool.`,
      `Un éther simple possède un seul oxygène entre deux fragments carbonés et ne comporte pas de liaison $\\mathrm{O-O}$.`,
    ],
  },
  {
    order: 73,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des carbonates organiques :`,
    choices: [
      `Ils possèdent un motif global comportant un carbone lié à trois oxygènes.`,
      `Leur motif peut être schématisé par $\\mathrm{R-O-CO-O-R'}$.`,
      `Un carbonate organique est exactement équivalent à un ester simple.`,
      `Ils ne contiennent jamais de groupe carbonyle.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le carbonate organique contient bien un carbone carbonylé lié à deux oxygènes supplémentaires. Il doit donc être distingué de l'ester, qui ne comporte qu'un seul oxygène hors carbonyle.`,
    choiceExplanations: [
      `C'est un bon moyen de repérer cette famille.`,
      `La notation générale est correcte.`,
      `Le carbonate possède un oxygène supplémentaire dans son motif et constitue une famille distincte de l'ester simple.`,
      `Le carbonate comporte bien un groupe carbonyle.`,
    ],
  },
  {
    order: 74,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Quelle famille correspond à la structure $\\mathrm{CH_3{-}O{-}CH_3}$ ?`,
    choices: [
      `Alcool.`,
      `Éther.`,
      `Peroxyde.`,
      `Aldéhyde.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `L'oxygène relie ici deux groupes méthyle : il s'agit d'un éther, le méthoxy-méthane ou éther diméthylique.`,
    choiceExplanations: [
      `Il n'y a pas de groupe hydroxyle $\\mathrm{-OH}$.`,
      `C'est la bonne réponse.`,
      `Il n'y a pas de liaison $\\mathrm{O-O}$.`,
      `Il n'y a pas de fonction carbonyle terminale.`,
    ],
  },
  {
    order: 75,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Quelle famille correspond à la structure $\\mathrm{H{-}O{-}O{-}H}$ ?`,
    choices: [
      `Éther.`,
      `Peroxyde.`,
      `Ester.`,
      `Cétone.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `La présence de la liaison $\\mathrm{O-O}$ permet de reconnaître un peroxyde. Ici, il s'agit du peroxyde d'hydrogène.`,
    choiceExplanations: [
      `Un éther présenterait un motif $\\mathrm{R-O-R'}$ sans liaison $\\mathrm{O-O}$.`,
      `C'est la bonne réponse.`,
      `La molécule n'est pas un ester.`,
      `Il n'y a pas de groupe carbonyle.`,
    ],
  },
  {
    order: 76,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Le peroxyde de benzoyle, utilisé en dermatologie dans certains traitements anti-acné, appartient à la famille des peroxydes. On peut en déduire que :`,
    choices: [
      `Sa structure comporte une liaison $\\mathrm{O-O}$.`,
      `Il illustre l'intérêt médical de certaines fonctions organiques.`,
      `Il s'agit d'un simple alcool.`,
      `Toute molécule comportant une liaison $\\mathrm{O-O}$ est nécessairement utilisée comme médicament.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le peroxyde de benzoyle montre qu'une fonction apparemment plus rare peut néanmoins apparaître dans des molécules d'intérêt thérapeutique.`,
    choiceExplanations: [
      `La présence d'une liaison $\\mathrm{O-O}$ est inhérente à la famille des peroxydes.`,
      `C'est un exemple concret utile à mémoriser.`,
      `Le motif peroxyde ne correspond pas à un simple alcool.`,
      `La présence d'une liaison $\\mathrm{O-O}$ définit un motif peroxyde, mais ne préjuge pas à elle seule d'un usage thérapeutique.`,
    ],
  },
  {
    order: 77,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les propositions suivantes sur les éthers, peroxydes et carbonates :`,
    choices: [
      `Un éther simple ne possède pas de liaison $\\mathrm{O-O}$.`,
      `Un peroxyde possède une liaison $\\mathrm{O-O}$.`,
      `Un carbonate organique ne possède aucun groupe carbonyle.`,
      `Ces trois familles sont totalement impossibles à distinguer sur une formule semi-développée.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Avec un peu d'entraînement, les motifs structuraux de ces familles deviennent repérables même sur des formules semi-développées.`,
    choiceExplanations: [
      `C'est une différence claire avec les peroxydes.`,
      `C'est le signe distinctif majeur du peroxyde.`,
      `Le carbonate organique comporte au contraire un carbone carbonylé.`,
      `Au contraire, l'entraînement vise précisément à les distinguer.`,
    ],
  },
  {
    order: 78,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Le méthoxyéthane $\\mathrm{CH_3-O-CH_2-CH_3}$ :`,
    choices: [
      `Est un éther.`,
      `Possède une fonction alcool.`,
      `Présente un oxygène reliant deux fragments carbonés.`,
      `Comporte une liaison $\\mathrm{O-O}$.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Le méthoxyéthane illustre bien la confusion classique entre alcool et éther chez les étudiants débutants. L'absence de groupe $\\mathrm{-OH}$ est le point clé.`,
    choiceExplanations: [
      `C'est bien un éther.`,
      `Il ne contient pas de groupe hydroxyle.`,
      `Cette observation définit la famille.`,
      `Le méthoxyéthane ne comporte qu'un seul oxygène : aucune liaison $\\mathrm{O-O}$ n'est présente.`,
    ],
  },
  {
    order: 79,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La structure $\\mathrm{CH_3{-}O{-}CO{-}O{-}CH_3}$ correspond à un carbonate organique. À son sujet :`,
    choices: [
      `Elle possède un groupe carbonyle.`,
      `Elle ne contient que deux atomes d'oxygène.`,
      `Elle appartient à la même famille qu'un éther simple.`,
      `Elle appartient à la famille des carbonates.`,
    ],
    correctChoiceIndexes: [0, 3],
    explanation:
      `Le carbonate organique peut être repéré grâce à son carbone carbonylé relié à deux oxygènes supplémentaires. Il ne doit pas être confondu avec un éther simple.`,
    choiceExplanations: [
      `Le motif $\\mathrm{CO}$ implique un carbonyle.`,
      `La structure contient trois atomes d'oxygène : l'affirmation est donc fausse.`,
      `La présence du carbonyle change complètement la famille.`,
      `C'est bien la bonne famille.`,
    ],
  },
  {
    order: 80,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les associations suivantes entre une formule et une famille :`,
    choices: [
      `$\\mathrm{H-O-O-H}$ : peroxyde.`,
      `$\\mathrm{CH_3-O-CH_3}$ : éther.`,
      `$\\mathrm{CH_3-COO-CH_3}$ : carbonate.`,
      `Tous les items précédents sont vrais.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les deux premières associations sont correctes. $\\mathrm{CH_3-COO-CH_3}$ est un ester, et non un carbonate : l'item attrape-tout est donc faux.`,
    choiceExplanations: [
      `La liaison $\\mathrm{O-O}$ caractérise ici le peroxyde d'hydrogène.`,
      `L'oxygène relie deux groupes méthyle : il s'agit d'un éther.`,
      `Cette structure correspond à l'éthanoate de méthyle, qui est un ester.`,
      `L'item C est faux ; l'attrape-tout l'est également.`,
    ],
  },
  {
    order: 81,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les structures suivantes, lesquelles comportent une fonction alcool ?`,
    choices: [
      `$\\mathrm{CH_3-CH_2-OH}$.`,
      `$\\mathrm{CH_3-O-CH_3}$.`,
      `$\\mathrm{CH_3-CH(OH)-COOH}$.`,
      `$\\mathrm{CH_3-CO-CH_3}$.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La première molécule est un alcool simple. La troisième possède aussi une fonction alcool, même si elle possède en plus une fonction acide carboxylique.`,
    choiceExplanations: [
      `L'éthanol est bien un alcool.`,
      `Cette molécule est un éther.`,
      `L'acide lactique possède une fonction alcool en plus de sa fonction acide.`,
      `L'acétone est une cétone.`,
    ],
  },
  {
    order: 82,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On compare les molécules $\\mathrm{CH_3{-}CHO}$, $\\mathrm{CH_3{-}CO{-}CH_3}$ et $\\mathrm{CH_3{-}COOH}$ :`,
    choices: [
      `La première est un aldéhyde.`,
      `La deuxième est une cétone.`,
      `La troisième est un ester.`,
      `Les trois molécules appartiennent à la même famille.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Cette triade constitue un classique de reconnaissance de fonctions : aldéhyde, cétone et acide carboxylique se distinguent grâce au motif autour du carbonyle.`,
    choiceExplanations: [
      `Le motif $\\mathrm{-CHO}$ terminal identifie l'aldéhyde.`,
      `Le carbonyle interne identifie la cétone.`,
      `Le motif $\\mathrm{-COOH}$ identifie un acide carboxylique, et non un ester.`,
      `Les familles sont au contraire différentes.`,
    ],
  },
  {
    order: 83,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'aspirine, décrite ici comme une molécule possédant une fonction acide carboxylique et une fonction ester :`,
    choices: [
      `Elle est un bon exemple de molécule polyfonctionnelle.`,
      `Elle ne contient aucune fonction oxygénée.`,
      `L'aspirine est principalement utilisée comme antiseptique cutané.`,
      `On peut la classer uniquement comme alcool.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `L'aspirine cumule plusieurs fonctions oxygénées. C'est un excellent exemple de molécule d'intérêt médical pour entraîner la reconnaissance de motifs structuraux.`,
    choiceExplanations: [
      `C'est vrai : elle comporte au moins deux fonctions.`,
      `Elle contient au contraire plusieurs oxygènes.`,
      `L'aspirine est notamment antalgique, antipyrétique, anti-inflammatoire et antiagrégante selon les doses ; ce n'est pas un antiseptique cutané.`,
      `Elle ne se réduit pas à une fonction alcool.`,
    ],
  },
  {
    order: 84,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La formule brute $\\mathrm{C_3H_8O}$ peut correspondre à plusieurs familles. À son sujet :`,
    choices: [
      `Elle peut correspondre au propan-1-ol.`,
      `Elle peut correspondre au butan-2-ol.`,
      `Elle peut correspondre au méthoxyéthane.`,
      `La formule brute suffit à identifier sans ambiguïté la famille organique.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La formule brute seule donne la composition, mais pas l'enchaînement des atomes. Elle peut donc correspondre à plusieurs isomères de fonctions différentes.`,
    choiceExplanations: [
      `Le propan-1-ol possède bien cette formule brute.`,
      `Le butan-2-ol possède quatre carbones et a pour formule brute $\\mathrm{C_4H_{10}O}$.`,
      `Le méthoxyéthane est un éther de même formule brute.`,
      `La formule brute ne donne pas l'enchaînement des atomes et ne suffit donc pas toujours à identifier la famille.`,
    ],
  },
  {
    order: 85,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les structures suivantes, lesquelles comportent une fonction ester ?`,
    choices: [
      `$\\mathrm{CH_3-COO-CH_2-CH_3}$.`,
      `$\\mathrm{CH_3-COOH}$.`,
      `Un triglycéride, constitué de glycérol et d'acides gras, possède des fonctions ester.`,
      `Le cholestérol libre possède nécessairement une fonction ester.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'ester se repère par le motif $\\mathrm{-COO-}$. Les triglycérides et l'aspirine fournissent de bons exemples biologiques ou médicaux.`,
    choiceExplanations: [
      `Le motif $\\mathrm{-COO-}$ est bien présent.`,
      `Cette molécule est un acide carboxylique, pas un ester.`,
      `Les liaisons entre glycérol et acides gras sont des esters.`,
      `Le cholestérol libre possède une fonction alcool ; il ne devient ester que lorsqu'il est estérifié par un acide gras.`,
    ],
  },
  {
    order: 86,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Pour distinguer l'eau oxygénée, utilisée notamment comme antiseptique, d'un éther, on compare le peroxyde d'hydrogène $\\mathrm{H{-}O{-}O{-}H}$ et l'éther diméthylique $\\mathrm{CH_3{-}O{-}CH_3}$ :`,
    choices: [
      `La première est un peroxyde.`,
      `La seconde est un éther.`,
      `La première et la seconde comportent toutes deux une liaison $\\mathrm{O-O}$.`,
      `Les deux molécules possèdent une liaison $\\mathrm{O-O}$.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le peroxyde d'hydrogène et l'éther diméthylique sont des molécules pédagogiquement très utiles pour apprendre à distinguer deux familles souvent confondues au premier regard.`,
    choiceExplanations: [
      `La liaison $\\mathrm{O-O}$ l'identifie comme peroxyde.`,
      `Le motif $\\mathrm{R-O-R'}$ identifie l'éther.`,
      `Seule la première molécule possède une liaison $\\mathrm{O-O}$.`,
      `Seul le peroxyde d'hydrogène possède une liaison $\\mathrm{O-O}$ ; l'éther diméthylique n'en possède pas.`,
    ],
  },
  {
    order: 87,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On considère le glucose ouvert $\\mathrm{CHO{-}CH(OH){-}CH(OH){-}CH(OH){-}CH(OH){-}CH_2OH}$ et le fructose ouvert $\\mathrm{CH_2OH{-}CO{-}CH(OH){-}CH(OH){-}CH(OH){-}CH_2OH}$ :`,
    choices: [
      `La première possède une fonction aldéhyde.`,
      `La seconde possède une fonction cétone.`,
      `Seule la première possède des fonctions alcool.`,
      `Aucune des deux ne contient de fonction oxygénée.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La première structure correspond au glucose ouvert, la seconde au fructose ouvert. Ces deux exemples montrent qu'une molécule peut cumuler plusieurs fonctions alcool et une autre fonction oxygénée.`,
    choiceExplanations: [
      `Le motif $\\mathrm{-CHO}$ est visible au début de la chaîne.`,
      `Le motif $\\mathrm{-CO-}$ interne caractérise la cétone.`,
      `Le glucose et le fructose ouverts possèdent tous deux plusieurs groupes $\\mathrm{-OH}$ : l'affirmation est fausse.`,
      `Ces deux molécules contiennent au contraire de nombreuses fonctions oxygénées.`,
    ],
  },
  {
    order: 88,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les noms suivants, lesquels renvoient à une molécule comportant une fonction oxygénée de la section B ?`,
    choices: [
      `Éthanol.`,
      `Propane.`,
      `Acide éthanoïque.`,
      `Méthane.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'éthanol est un alcool et l'acide éthanoïque un acide carboxylique. Le propane et le méthane sont des hydrocarbures dépourvus d'oxygène.`,
    choiceExplanations: [
      `L'éthanol est un alcool.`,
      `Le propane est un hydrocarbure et ne contient aucun oxygène.`,
      `L'acide éthanoïque est un acide carboxylique.`,
      `Le méthane n'appartient pas à ces familles oxygénées.`,
    ],
  },
  {
    order: 89,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des pièges de reconnaissance des fonctions :`,
    choices: [
      `Un groupe $\\mathrm{-OH}$ isolé sur une chaîne peut orienter vers un alcool, mais le motif $\\mathrm{-COOH}$ correspond à un acide carboxylique.`,
      `Le motif $\\mathrm{-COO-}$ d'un ester est différent du motif $\\mathrm{R-O-R'}$ d'un éther.`,
      `Le suffixe -one désigne un aldéhyde.`,
      `Tous les items précédents sont vrais.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les deux premiers repères sont corrects. En revanche, le suffixe -one désigne une cétone : l'item attrape-tout est donc faux.`,
    choiceExplanations: [
      `C'est un piège classique à connaître.`,
      `Cette différence visuelle est essentielle.`,
      `Le suffixe -one désigne une cétone ; le suffixe -al désigne un aldéhyde.`,
      `L'item C est faux ; l'attrape-tout est donc faux.`,
    ],
  },
  {
    order: 90,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les associations suivantes entre une formule et une fonction :`,
    choices: [
      `$\\mathrm{CH_3{-}CH_2{-}OH}$ : alcool.`,
      `$\\mathrm{CH_3{-}CO{-}CH_3}$ : aldéhyde.`,
      `$\\mathrm{CH_3{-}COO{-}CH_3}$ : ester.`,
      `$\\mathrm{H{-}O{-}O{-}H}$ : éther.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'éthanol est un alcool et l'éthanoate de méthyle est un ester. La propanone est une cétone, tandis que $\\mathrm{H{-}O{-}O{-}H}$ est un peroxyde.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{-OH}$ porté par un carbone saturé caractérise un alcool.`,
      `Le groupe carbonyle est interne : la propanone est une cétone.`,
      `Le motif $\\mathrm{-COO-}$ caractérise un ester.`,
      `La liaison $\\mathrm{O-O}$ caractérise ici un peroxyde, pas un éther.`,
    ],
  },
  {
    order: 91,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `L'aspirine, médicament notamment antalgique et antipyrétique, peut être représentée de façon condensée par $\\mathrm{C_6H_4(COOH)(OCOCH_3)}$. À propos de cette molécule :`,
    choices: [
      `Elle possède une fonction acide carboxylique.`,
      `Elle possède une fonction ester.`,
      `Elle possède une fonction alcool indépendante.`,
      `Elle illustre qu'une molécule d'intérêt médical peut être polyfonctionnelle.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le motif $\\mathrm{-COOH}$ correspond à un acide carboxylique. Le motif $\\mathrm{-O{-}CO{-}CH_3}$ correspond à un ester. Aucun groupe hydroxyle n'est porté par un carbone saturé : il n'existe donc pas de fonction alcool indépendante.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{-COOH}$ est bien présent.`,
      `Le motif $\\mathrm{-O{-}CO-}$ permet d'identifier un ester.`,
      `Le seul groupe $\\mathrm{-OH}$ appartient au groupe carboxyle et ne constitue pas un alcool.`,
      `L'aspirine associe plusieurs fonctions oxygénées dans une même molécule.`,
    ],
  },
  {
    order: 92,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On compare l'éthanol $\\mathrm{CH_3{-}CH_2{-}OH}$, l'éther diméthylique $\\mathrm{CH_3{-}O{-}CH_3}$, l'éthanal $\\mathrm{CH_3{-}CHO}$ et l'acide éthanoïque $\\mathrm{CH_3{-}COOH}$.`,
    choices: [
      `L'éthanol et l'éther diméthylique ont la même formule brute.`,
      `L'éthanal et l'acide éthanoïque ont la même formule brute.`,
      `Les quatre molécules appartiennent à quatre familles organiques différentes.`,
      `La formule brute $\\mathrm{C_2H_6O}$ suffit à distinguer l'éthanol de l'éther diméthylique.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'éthanol et l'éther diméthylique ont pour formule brute $\\mathrm{C_2H_6O}$ mais appartiennent à des familles différentes. L'éthanal a pour formule $\\mathrm{C_2H_4O}$ et l'acide éthanoïque pour formule $\\mathrm{C_2H_4O_2}$.`,
    choiceExplanations: [
      `Ces deux molécules sont des isomères de fonction.`,
      `L'acide éthanoïque possède un oxygène de plus que l'éthanal.`,
      `Il s'agit respectivement d'un alcool, d'un éther, d'un aldéhyde et d'un acide carboxylique.`,
      `La formule brute est identique pour les deux molécules et ne permet donc pas de les distinguer.`,
    ],
  },
  {
    order: 93,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On considère la molécule $\\mathrm{HO{-}CH_2{-}CO{-}CH(OH){-}CH_2OH}$.`,
    choices: [
      `Elle possède trois fonctions alcool.`,
      `Elle possède une fonction cétone.`,
      `Sa formule brute est $\\mathrm{C_4H_8O_4}$.`,
      `Elle possède une fonction aldéhyde.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La structure comporte trois groupes $\\mathrm{-OH}$ portés par des carbones saturés et un groupe carbonyle interne, donc une cétone. Le décompte conduit à la formule brute $\\mathrm{C_4H_8O_4}$.`,
    choiceExplanations: [
      `Les groupes hydroxyle sont portés par les carbones 1, 3 et 4.`,
      `Le motif $\\mathrm{-CO-}$ est interne à la chaîne.`,
      `Le comptage donne quatre carbones, huit hydrogènes et quatre oxygènes.`,
      `Un aldéhyde nécessiterait un motif terminal $\\mathrm{-CHO}$.`,
    ],
  },
  {
    order: 94,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Le propanal $\\mathrm{CH_3{-}CH_2{-}CHO}$ et la propanone $\\mathrm{CH_3{-}CO{-}CH_3}$ sont comparés.`,
    choices: [
      `Ils ont la même formule brute.`,
      `Ils ont la même masse molaire.`,
      `Ils sont isomères de fonction.`,
      `Ils possèdent tous deux un groupe carbonyle terminal.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les deux molécules ont pour formule brute $\\mathrm{C_3H_6O}$ et donc la même masse molaire. Elles diffèrent par la nature de la fonction : aldéhyde pour le propanal, cétone pour la propanone.`,
    choiceExplanations: [
      `Le décompte des atomes conduit à $\\mathrm{C_3H_6O}$ dans les deux cas.`,
      `Une même formule brute implique une même masse molaire.`,
      `Leur enchaînement atomique conduit à deux fonctions différentes.`,
      `Seul le propanal possède un carbonyle terminal.`,
    ],
  },
  {
    order: 95,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Parmi les associations suivantes entre une structure et une famille :`,
    choices: [
      `$\\mathrm{CH_3{-}COO{-}CH_3}$ : ester.`,
      `$\\mathrm{CH_3{-}O{-}CO{-}O{-}CH_3}$ : carbonate.`,
      `$\\mathrm{CH_3{-}O{-}O{-}CH_3}$ : peroxyde.`,
      `$\\mathrm{CH_3{-}O{-}CH_3}$ : alcool.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'ester comporte le motif $\\mathrm{-COO-}$, le carbonate un carbone lié à trois oxygènes, et le peroxyde une liaison $\\mathrm{O-O}$. L'éther diméthylique est un éther et non un alcool.`,
    choiceExplanations: [
      `Le motif $\\mathrm{-COO-}$ est bien celui d'un ester.`,
      `Le carbone carbonylé est lié à deux oxygènes supplémentaires : il s'agit d'un carbonate.`,
      `La liaison $\\mathrm{O-O}$ caractérise un peroxyde.`,
      `L'oxygène relie deux groupes méthyle ; aucun groupe $\\mathrm{-OH}$ n'est présent.`,
    ],
  },
  {
    order: 96,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Dans le tissu adipeux, un triglycéride résulte de l'association du glycérol avec trois acides gras.`,
    choices: [
      `Le glycérol est un triol.`,
      `Chaque acide gras apporte une fonction acide carboxylique avant la formation du triglycéride.`,
      `Le triglycéride formé comporte trois fonctions ester.`,
      `Les trois groupes hydroxyle du glycérol restent inchangés dans le triglycéride.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le glycérol possède trois fonctions alcool et les acides gras une fonction acide carboxylique. Leur association conduit à trois fonctions ester dans le triglycéride ; les groupes hydroxyle initiaux ne restent donc pas sous forme d'alcools libres.`,
    choiceExplanations: [
      `Le glycérol porte trois groupes $\\mathrm{-OH}$.`,
      `Un acide gras est un acide carboxylique à longue chaîne.`,
      `Trois liaisons ester relient le glycérol aux trois acides gras.`,
      `Les groupes hydroxyle participent à la formation des esters.`,
    ],
  },
  {
    order: 97,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Pour comparer deux oses impliqués dans le métabolisme glucidique, on considère le glucose ouvert $\\mathrm{CHO{-}(CHOH)_4{-}CH_2OH}$ et le fructose ouvert $\\mathrm{CH_2OH{-}CO{-}(CHOH)_3{-}CH_2OH}$.`,
    choices: [
      `Le glucose possède une fonction aldéhyde.`,
      `Le fructose possède une fonction cétone.`,
      `Les deux molécules possèdent plusieurs fonctions alcool.`,
      `Les deux molécules appartiennent à la même famille fonctionnelle principale.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le glucose ouvert est un aldose, tandis que le fructose ouvert est un cétose. Tous deux possèdent plusieurs groupes hydroxyle, mais leur fonction carbonylée principale est différente.`,
    choiceExplanations: [
      `Le motif terminal $\\mathrm{-CHO}$ caractérise l'aldéhyde.`,
      `Le carbonyle interne caractérise la cétone.`,
      `Les groupes $\\mathrm{CHOH}$ et $\\mathrm{CH_2OH}$ portent plusieurs hydroxyles.`,
      `Le glucose est un aldéhyde, tandis que le fructose est une cétone sous forme ouverte.`,
    ],
  },
  {
    order: 98,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `À propos de l'acide lactique $\\mathrm{CH_3{-}CH(OH){-}COOH}$, dont la concentration sanguine peut augmenter lors d'un effort intense :`,
    choices: [
      `Sa formule brute est $\\mathrm{C_3H_6O_3}$.`,
      `La fonction alcool qu'il porte est secondaire.`,
      `Il possède une fonction ester.`,
      `Le groupe $\\mathrm{-OH}$ du groupe carboxyle constitue une seconde fonction alcool.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `L'acide lactique contient trois carbones, six hydrogènes et trois oxygènes. Le carbone portant le groupe hydroxyle est lié à deux autres carbones : la fonction alcool est donc secondaire. Le groupe $\\mathrm{-COOH}$ ne constitue pas un ester et son hydroxyle n'est pas une fonction alcool indépendante.`,
    choiceExplanations: [
      `Le décompte conduit bien à $\\mathrm{C_3H_6O_3}$.`,
      `Le carbone fonctionnel est lié au groupe méthyle et au carbone du carboxyle.`,
      `Aucun motif $\\mathrm{-COO-}$ reliant deux fragments carbonés n'est présent.`,
      `Cet hydroxyle appartient au groupe carboxyle.`,
    ],
  },
  {
    order: 99,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On compare l'acide éthanoïque $\\mathrm{CH_3{-}COOH}$ et le méthanoate de méthyle $\\mathrm{H{-}COO{-}CH_3}$.`,
    choices: [
      `Ils ont la même formule brute $\\mathrm{C_2H_4O_2}$.`,
      `Le premier est un acide carboxylique et le second un ester.`,
      `Ils sont isomères de fonction.`,
      `Leur formule brute suffit à déterminer lequel des deux est présent.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Ces deux molécules ont la même composition élémentaire mais des fonctions différentes. Elles constituent donc un nouvel exemple d'isomérie de fonction et montrent les limites de la formule brute.`,
    choiceExplanations: [
      `Le décompte des atomes est identique dans les deux cas.`,
      `Les motifs $\\mathrm{-COOH}$ et $\\mathrm{-COO-}$ permettent de les distinguer.`,
      `Une même formule brute correspond ici à deux fonctions différentes.`,
      `La formule brute ne renseigne pas sur l'enchaînement des atomes.`,
    ],
  },
  {
    order: 100,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On considère la molécule $\\mathrm{CH_3{-}CH(OH){-}COO{-}CH_3}$.`,
    choices: [
      `Elle possède une fonction alcool.`,
      `Elle possède une fonction ester.`,
      `Elle possède une fonction acide carboxylique.`,
      `Sa formule brute est $\\mathrm{C_4H_8O_3}$.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le groupe $\\mathrm{-OH}$ porté par le deuxième carbone correspond à une fonction alcool. Le motif $\\mathrm{-COO{-}CH_3}$ correspond à une fonction ester. Aucun groupe $\\mathrm{-COOH}$ n'est présent. Le décompte conduit à $\\mathrm{C_4H_8O_3}$.`,
    choiceExplanations: [
      `Le groupe hydroxyle est porté par un carbone saturé.`,
      `Le motif $\\mathrm{-COO-}$ est caractéristique d'un ester.`,
      `L'oxygène hors carbonyle est lié à un groupe méthyle, et non à un hydrogène.`,
      `On compte quatre carbones, huit hydrogènes et trois oxygènes.`,
    ],
  },
];
