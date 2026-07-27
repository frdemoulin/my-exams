import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_E_ORDER = 5;

export const SECTION_E_DISCOVERY_QUIZ_SLUG =
  'section-e-discovery-pouvoir-rotatoire-melanges';
export const SECTION_E_PRACTICE_QUIZ_SLUG =
  'section-e-practice-pouvoir-rotatoire-melanges';

export const SECTION_E_DISCOVERY_QUESTION_ORDERS: number[] = [
  81, 82, 85, 86, 90,
];
export const SECTION_E_PRACTICE_QUESTION_ORDERS: number[] = [
  91, 92, 93, 96, 97, 98, 99, 100,
];

const FIGURE_BASE_PATH = '/images/training/ue14/isomerie-enantiomerie';

export const SECTION_E_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_E_DISCOVERY_QUIZ_SLUG,
    title: `Pouvoir rotatoire et composition des mélanges`,
    description: `Comprendre la polarimétrie, distinguer dextrogyre et lévogyre, puis interpréter un mélange racémique et un excès énantiomérique.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_E_ORDER,
    questionOrders: SECTION_E_DISCOVERY_QUESTION_ORDERS,
    questionGroups: [
      {
        order: 1,
        title: `Mesure au polarimètre`,
        sharedStatement: `Les questions 83 et 84 s'appuient sur la figure ci-dessous. Elle schématise une mesure du pouvoir rotatoire d'une solution chirale à l'aide d'un polarimètre.

![Schéma de polarimètre](${FIGURE_BASE_PATH}/figure-e1-polarimetre.svg)`,
        questionOrders: [83, 84],
      },
      {
        order: 2,
        title: `Composition de trois mélanges d'énantiomères`,
        sharedStatement: `Les questions 87 à 89 s'appuient sur la figure ci-dessous. Les mélanges A, B et C contiennent deux énantiomères notés (+) et (-), dans les proportions indiquées.

![Composition de trois mélanges d'énantiomères](${FIGURE_BASE_PATH}/figure-e2-composition-melanges.svg)`,
        questionOrders: [87, 88, 89],
      },
    ],
  },
  {
    order: 2,
    slug: SECTION_E_PRACTICE_QUIZ_SLUG,
    title: `Pouvoir rotatoire et composition des mélanges`,
    description: `Calculer des excès énantiomériques, comparer des expériences de polarimétrie et éviter les confusions entre configuration absolue et signe du pouvoir rotatoire.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_E_ORDER,
    questionOrders: SECTION_E_PRACTICE_QUESTION_ORDERS,
    questionGroups: [
      {
        order: 1,
        title: `Comparaison de mesures polarimétriques`,
        sharedStatement: `Les questions 94 et 95 s'appuient sur la figure ci-dessous. Quatre mesures sont réalisées sur la même substance, mais certains paramètres expérimentaux diffèrent.

![Comparaison de mesures polarimétriques](${FIGURE_BASE_PATH}/figure-e3-comparaison-experiences.svg)`,
        questionOrders: [94, 95],
      },
    ],
  },
];

export const SECTION_E_QUESTIONS: SeedQuestion[] = [
  {
    order: 81,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos du pouvoir rotatoire :`,
    choices: [
      `Il traduit la capacité d'une substance chirale à dévier le plan d'une lumière polarisée.`,
      `Il peut être mesuré à l'aide d'un polarimètre.`,
      `Il correspond directement à la configuration R ou S du carbone asymétrique.`,
      `Son signe peut être positif ou négatif.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le pouvoir rotatoire décrit la déviation du plan de la lumière polarisée par une substance optiquement active. Il se mesure au polarimètre et peut être positif ou négatif, sans correspondance générale avec R ou S.`,
    choiceExplanations: [
      `C'est la définition générale donnée dans le cours.`,
      `Le polarimètre est l'appareil utilisé pour cette mesure.`,
      `R/S et le signe du pouvoir rotatoire sont deux informations indépendantes.`,
      `On distingue ainsi les substances dextrogyres (+) et lévogyres (-).`,
    ],
  },
  {
    order: 82,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Dans des conditions identiques et dans un milieu achiral, deux énantiomères purs :`,
    choices: [
      `ont la même formule brute.`,
      `ont des pouvoirs rotatoires de même valeur absolue mais de signes opposés.`,
      `sont tous deux nécessairement dextrogyres.`,
      `peuvent être distingués par le sens dans lequel ils dévient la lumière polarisée.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Deux énantiomères ont la même constitution. Dans des conditions expérimentales identiques, leurs pouvoirs rotatoires sont opposés : l'un dévie la lumière dans un sens, l'autre dans le sens inverse.`,
    choiceExplanations: [
      `Les énantiomères possèdent la même composition atomique.`,
      `Leurs rotations se compensent exactement dans un mélange équimolaire.`,
      `L'un est dextrogyre et l'autre lévogyre dans les mêmes conditions.`,
      `Le signe de la déviation permet de différencier les deux solutions pures.`,
    ],
  },
  {
    order: 83,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos du montage de la figure précédente :`,
    choices: [
      `Une source fournit une lumière polarisée de longueur d'onde définie.`,
      `La solution chirale est placée dans une cuve de longueur connue.`,
      `L'analyseur permet d'évaluer l'angle de déviation.`,
      `Le polarimètre détermine directement la configuration R ou S de la molécule.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le polarimètre comporte une source lumineuse, un dispositif de polarisation, une cuve contenant la solution et un système de lecture de l'angle. La mesure ne permet pas, à elle seule, d'attribuer R ou S.`,
    choiceExplanations: [
      `La longueur d'onde utilisée doit être précisée ; une lampe au sodium est classiquement mentionnée dans le cours.`,
      `La longueur du trajet optique influence l'angle observé.`,
      `Le dispositif de lecture permet de mesurer la rotation du plan de polarisation.`,
      `R/S nécessite une analyse structurale selon les règles CIP.`,
    ],
  },
  {
    order: 84,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Quels paramètres doivent être contrôlés ou précisés lors d'une mesure comme celle de la figure précédente ?`,
    choices: [
      `La température.`,
      `La nature du solvant.`,
      `La concentration de la solution et la longueur de la cuve.`,
      `La longueur d'onde de la lumière utilisée.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `L'angle observé dépend de la substance, mais aussi des conditions expérimentales : température, solvant, concentration, longueur du trajet optique et longueur d'onde de la lumière.`,
    choiceExplanations: [
      `La température fait partie des paramètres signalés dans le cours.`,
      `Le milieu peut modifier la valeur mesurée.`,
      `Ces deux grandeurs influencent directement la rotation observée.`,
      `La source lumineuse et sa longueur d'onde doivent être connues.`,
    ],
  },
  {
    order: 85,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des termes dextrogyre et lévogyre :`,
    choices: [
      `Une substance dextrogyre possède un pouvoir rotatoire positif.`,
      `Une substance lévogyre possède un pouvoir rotatoire négatif.`,
      `Une substance de configuration R est nécessairement dextrogyre.`,
      `Les signes (+) et (-) décrivent une observation expérimentale.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Dextrogyre correspond au signe (+) et lévogyre au signe (-). Ces signes proviennent de la mesure polarimétrique et ne se déduisent pas de la configuration R ou S.`,
    choiceExplanations: [
      `Le signe positif est associé à la déviation dite dextrogyre.`,
      `Le signe négatif est associé à la déviation dite lévogyre.`,
      `Aucune correspondance générale R/(+) n'existe.`,
      `Le signe est obtenu par l'expérience.`,
    ],
  },
  {
    order: 86,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Un mélange racémique :`,
    choices: [
      `contient 50 % de chaque énantiomère.`,
      `possède un excès énantiomérique nul.`,
      `présente un pouvoir rotatoire global nul par compensation.`,
      `ne contient aucune molécule chirale.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Un racémique est un mélange équimolaire de deux énantiomères. Les rotations opposées se compensent, ce qui donne un pouvoir rotatoire global et un excès énantiomérique nuls.`,
    choiceExplanations: [
      `C'est la définition du mélange racémique.`,
      `50 - 50 = 0 %.`,
      `Les deux contributions opposées s'annulent.`,
      `Les molécules restent chirales ; c'est le mélange global qui est optiquement inactif.`,
    ],
  },
  {
    order: 87,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des trois mélanges de la figure précédente :`,
    choices: [
      `Le mélange A est racémique.`,
      `Le mélange B présente un excès de l'énantiomère (+).`,
      `Le mélange C présente l'excès énantiomérique le plus élevé.`,
      `Les trois mélanges ont un excès énantiomérique nul.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `A contient 50/50, B contient 75/25 et C contient 95/5. L'excès énantiomérique augmente donc de A vers C.`,
    choiceExplanations: [
      `A est constitué de deux proportions égales.`,
      `Dans B, l'énantiomère (+) est majoritaire.`,
      `95 - 5 = 90 %, valeur supérieure aux deux autres mélanges.`,
      `Seul le mélange A possède un excès nul.`,
    ],
  },
  {
    order: 88,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `L'excès énantiomérique correspond :`,
    choices: [
      `à la différence entre les pourcentages des deux énantiomères.`,
      `à la somme des pourcentages des deux énantiomères.`,
      `à 50 % pour le mélange B de la figure précédente.`,
      `à 90 % pour le mélange C de la figure précédente.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `Pour un mélange de deux énantiomères, l'excès énantiomérique est la valeur absolue de la différence entre leurs pourcentages. B donne 75 - 25 = 50 % et C donne 95 - 5 = 90 %.`,
    choiceExplanations: [
      `C'est la définition utilisée dans le cours.`,
      `La somme vaut toujours 100 % et ne mesure pas l'excès.`,
      `Le calcul donne bien 50 %.`,
      `Le calcul donne bien 90 %.`,
    ],
  },
  {
    order: 89,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Un excès énantiomérique de 50 % en faveur de l'énantiomère (+) signifie :`,
    choices: [
      `un mélange contenant 75 % de (+) et 25 % de (-).`,
      `un mélange contenant 50 % de (+) et 50 % de (-).`,
      `une différence de 50 points entre les deux proportions.`,
      `une composition correspondant au mélange B de la figure précédente.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `Les deux proportions totalisent 100 % et leur différence vaut 50 %. On résout donc x + y = 100 et x - y = 50, soit 75 % et 25 %.`,
    choiceExplanations: [
      `75 - 25 = 50 et 75 + 25 = 100.`,
      `Un mélange 50/50 est racémique et possède un ee nul.`,
      `L'excès énantiomérique est bien une différence de proportions.`,
      `La figure B représente précisément la composition 75/25.`,
    ],
  },
  {
    order: 90,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos du pouvoir rotatoire et des mélanges d'énantiomères :`,
    choices: [
      `Un pouvoir rotatoire global nul peut résulter d'un mélange racémique.`,
      `Deux énantiomères purs ont des pouvoirs rotatoires opposés dans les mêmes conditions.`,
      `La configuration S implique nécessairement un pouvoir rotatoire négatif.`,
      `Un mélange non racémique possède un énantiomère majoritaire.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La compensation complète se produit dans un racémique. Un mélange non racémique comporte un énantiomère majoritaire. La notation R/S ne permet pas de prévoir le signe de la rotation.`,
    choiceExplanations: [
      `Les deux rotations opposées peuvent se compenser.`,
      `C'est une propriété fondamentale des énantiomères.`,
      `Il n'existe pas de correspondance générale S/(-).`,
      `Des proportions différentes de 50/50 impliquent nécessairement une majorité.`,
    ],
  },
  {
    order: 91,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Un mélange contient 80 % d'un énantiomère et 20 % de l'autre :`,
    choices: [
      `Son excès énantiomérique vaut 60 %.`,
      `Il est racémique.`,
      `L'énantiomère présent à 80 % est majoritaire.`,
      `Son excès énantiomérique vaut 80 %.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'excès énantiomérique est la différence entre les deux proportions : 80 - 20 = 60 %.`,
    choiceExplanations: [
      `Le calcul donne 60 %.`,
      `Un racémique serait composé de 50 % et 50 %.`,
      `80 % est bien la proportion majoritaire.`,
      `Il ne faut pas confondre la proportion majoritaire et l'excès.`,
    ],
  },
  {
    order: 92,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Un mélange présente un excès énantiomérique de 72 % en faveur de l'énantiomère A :`,
    choices: [
      `Il contient 86 % de A et 14 % de l'autre énantiomère.`,
      `Il contient 72 % de A et 28 % de l'autre énantiomère.`,
      `Les deux proportions diffèrent de 72 points.`,
      `La somme des deux proportions reste égale à 100 %.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `En notant x la proportion de A et y celle de l'autre énantiomère, x - y = 72 et x + y = 100. On obtient x = 86 et y = 14.`,
    choiceExplanations: [
      `86 - 14 = 72 et 86 + 14 = 100.`,
      `72 - 28 ne vaut que 44 %.`,
      `C'est la définition de l'excès énantiomérique.`,
      `Le mélange ne contient que les deux énantiomères considérés.`,
    ],
  },
  {
    order: 93,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Un excès énantiomérique de 90 % signifie :`,
    choices: [
      `un mélange 95 % / 5 %.`,
      `un mélange 90 % / 10 %.`,
      `une différence de 90 points entre les deux proportions.`,
      `un mélange très éloigné du racémique.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `Les proportions doivent totaliser 100 % et différer de 90 points : elles valent donc 95 % et 5 %.`,
    choiceExplanations: [
      `95 - 5 = 90.`,
      `90 - 10 = 80, pas 90.`,
      `C'est exactement la définition du ee.`,
      `Le mélange ne contient que 5 % de l'énantiomère minoritaire.`,
    ],
  },
  {
    order: 94,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À partir des expériences de la figure précédente :`,
    choices: [
      `La comparaison A/B permet d'étudier l'effet de la concentration, les autres paramètres étant identiques.`,
      `La comparaison A/C permet d'étudier l'effet de la longueur de la cuve.`,
      `La comparaison A/D permet d'étudier l'effet de la température.`,
      `Les quatre expériences sont réalisées dans des conditions strictement identiques.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La figure précédente ne modifie qu'un paramètre à la fois par rapport à l'expérience A : la concentration en B, la longueur de cuve en C et la température en D.`,
    choiceExplanations: [
      `Seule la concentration change entre A et B.`,
      `Seule la longueur du trajet optique change entre A et C.`,
      `Seule la température change entre A et D.`,
      `Au contraire, chaque comparaison ciblée fait varier un paramètre.`,
    ],
  },
  {
    order: 95,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à propos de la figure précédente :`,
    choices: [
      `Une valeur mesurée dans l'expérience B ne doit pas être comparée à A sans tenir compte de la concentration.`,
      `Une valeur mesurée dans l'expérience C ne doit pas être comparée à A sans tenir compte de la longueur de cuve.`,
      `Une différence entre A et D peut être liée à la température.`,
      `Le signe du pouvoir rotatoire permet à lui seul de déterminer R ou S dans toutes les expériences.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Une comparaison rigoureuse exige de contrôler les conditions expérimentales. Le signe mesuré renseigne sur le sens de rotation, mais pas directement sur la configuration absolue.`,
    choiceExplanations: [
      `La concentration influence la rotation observée.`,
      `La longueur du trajet optique influence également la mesure.`,
      `La température fait partie des paramètres expérimentaux pertinents.`,
      `R/S ne se déduit pas du signe (+) ou (-).`,
    ],
  },
  {
    order: 96,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Une solution contient majoritairement l'énantiomère (+) et minoritairement son énantiomère (-), dans des conditions où leurs pouvoirs rotatoires purs sont opposés :`,
    choices: [
      `La rotation globale est attendue de signe positif.`,
      `Le mélange est nécessairement racémique.`,
      `L'excès énantiomérique est en faveur de l'énantiomère (+).`,
      `Le signe positif prouve que l'énantiomère majoritaire est de configuration R.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'énantiomère (+) étant majoritaire, sa contribution domine et la rotation globale est positive. Cela ne permet toutefois pas de connaître sa configuration R ou S.`,
    choiceExplanations: [
      `La contribution du composé dextrogyre est majoritaire.`,
      `Un racémique contiendrait des proportions égales.`,
      `La différence de proportions favorise bien l'énantiomère (+).`,
      `Le signe optique et la configuration absolue sont indépendants.`,
    ],
  },
  {
    order: 97,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On considère un composé de configuration R dont le pouvoir rotatoire mesuré est négatif :`,
    choices: [
      `Cette situation est possible.`,
      `Le composé est lévogyre dans les conditions de mesure.`,
      `La notation correcte peut associer R et (-).`,
      `La mesure est nécessairement erronée car R implique (+).`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Il n'existe aucune correspondance générale entre R/S et le signe optique. Un composé R peut donc être lévogyre et être noté, selon le contexte, R et (-).`,
    choiceExplanations: [
      `La configuration et le signe sont deux propriétés distinctes.`,
      `Un pouvoir rotatoire négatif correspond à un composé lévogyre.`,
      `Les deux informations peuvent être précisées indépendamment.`,
      `Cette prétendue correspondance est un piège classique.`,
    ],
  },
  {
    order: 98,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Dans un contexte pharmacologique, un mélange racémique d'un principe actif :`,
    choices: [
      `peut avoir un pouvoir rotatoire global nul.`,
      `contient deux énantiomères pouvant interagir différemment avec une cible chirale.`,
      `est nécessairement dépourvu de toute activité biologique.`,
      `contient les deux énantiomères en proportions égales.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le pouvoir rotatoire nul du racémique résulte d'une compensation optique. Il ne signifie pas que les molécules sont inactives : les deux énantiomères peuvent conserver des activités biologiques différentes.`,
    choiceExplanations: [
      `Les rotations opposées se compensent.`,
      `Une cible biologique est elle-même chirale et peut distinguer les deux formes.`,
      `L'inactivité optique globale ne préjuge pas de l'activité pharmacologique.`,
      `C'est la définition du racémique.`,
    ],
  },
  {
    order: 99,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On compare quatre mélanges d'énantiomères : A = 50/50, B = 60/40, C = 70/30 et D = 85/15.`,
    choices: [
      `Le mélange A possède un ee nul.`,
      `Le mélange B possède un ee de 20 %.`,
      `Le mélange C possède un ee de 40 %.`,
      `Le mélange D possède un ee de 85 %.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `On soustrait la proportion minoritaire de la proportion majoritaire : A = 0 %, B = 20 %, C = 40 % et D = 70 %.`,
    choiceExplanations: [
      `50 - 50 = 0.`,
      `60 - 40 = 20.`,
      `70 - 30 = 40.`,
      `85 - 15 = 70, pas 85.`,
    ],
  },
  {
    order: 100,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos d'une solution d'énantiomères et de sa caractérisation :`,
    choices: [
      `Un ee nul est compatible avec un mélange racémique.`,
      `Un pouvoir rotatoire nul suffit toujours à prouver que la solution est racémique, quelles que soient les autres espèces présentes.`,
      `Un ee de 70 % correspond à des proportions 85 % / 15 %.`,
      `Le signe du pouvoir rotatoire ne permet pas, à lui seul, d'attribuer R ou S.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `Dans le cadre d'un mélange constitué uniquement de deux énantiomères, le racémique possède un ee nul. Un ee de 70 % conduit à 85/15. En revanche, un pouvoir rotatoire nul ne suffit pas toujours à établir une composition racémique si d'autres causes de compensation ou d'autres espèces existent.`,
    choiceExplanations: [
      `50/50 donne bien un ee de 0 %.`,
      `L'absence de rotation globale n'est pas, à elle seule, une preuve universelle de racémicité.`,
      `85 - 15 = 70 et 85 + 15 = 100.`,
      `Cette confusion entre R/S et (+)/(-) doit être évitée.`,
    ],
  },
];
