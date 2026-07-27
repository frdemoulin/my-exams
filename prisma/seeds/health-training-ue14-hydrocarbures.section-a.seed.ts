import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_DISCOVERY_QUIZ_SLUG = 'section-a-discovery-alcanes-cyclanes';
export const SECTION_A_PRACTICE_QUIZ_SLUG = 'section-a-practice-alcanes-cyclanes';

export const SECTION_A_DISCOVERY_QUESTION_ORDERS: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];
export const SECTION_A_PRACTICE_QUESTION_ORDERS: number[] = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const FIGURE_BASE_PATH = '/images/training/ue14/hydrocarbures';

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_A_DISCOVERY_QUIZ_SLUG,
    title: `Alcanes et cyclanes`,
    description:
      `Reconnaître les hydrocarbures saturés, appliquer les formules générales et maîtriser la nomenclature élémentaire des alcanes et des cyclanes.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_A_ORDER,
    items: [
      { type: 'QUESTION', questionOrder: 1 },
      { type: 'QUESTION', questionOrder: 2 },
      { type: 'QUESTION', questionOrder: 3 },
      {
        type: 'GROUP',
        title: `Propane et butane aux urgences`,
        sharedStatement:
          `Les questions 4 à 6 s'appuient sur la situation suivante : dans un service d'urgences, l'étiquette d'une cartouche mentionne un mélange de propane et de butane. Sans traiter ici la toxicologie, on exploite uniquement les informations chimiques.`,
        questionOrders: [4, 5, 6],
      },
      { type: 'QUESTION', questionOrder: 7 },
      { type: 'QUESTION', questionOrder: 8 },
      {
        type: 'GROUP',
        title: `Reconnaissance de cyclanes`,
        sharedStatement: `Les questions 9 et 10 utilisent la figure ci-dessous, où les cycles A à D possèdent respectivement 3, 4, 5 et 6 sommets.

![Quatre cyclanes](${FIGURE_BASE_PATH}/figure-a1-quatre-cyclanes.svg)`,
        questionOrders: [9, 10],
      },
    ],
  },
  {
    order: 2,
    slug: SECTION_A_PRACTICE_QUIZ_SLUG,
    title: `Alcanes et cyclanes`,
    description:
      `Déduire une formule brute, distinguer chaîne ouverte et cycle, puis relier la taille d'un cycle à sa stabilité.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_A_ORDER,
    items: [
      { type: 'QUESTION', questionOrder: 11 },
      { type: 'QUESTION', questionOrder: 12 },
      { type: 'QUESTION', questionOrder: 13 },
      {
        type: 'GROUP',
        title: `Chaîne ouverte, cycle et insaturation`,
        sharedStatement: `Les questions 14 à 16 utilisent la figure ci-dessous, montrant quatre structures A à D.

![Quatre structures carbonées](${FIGURE_BASE_PATH}/figure-a2-quatre-structures.svg)`,
        questionOrders: [14, 15, 16],
      },
      {
        type: 'GROUP',
        title: `Petits cycles et cycles stables`,
        sharedStatement: `Les questions 17 et 18 reprennent la figure ci-dessous pour comparer le cyclopropane, le cyclopentane et le cyclohexane.

![Quatre cyclanes](${FIGURE_BASE_PATH}/figure-a1-quatre-cyclanes.svg)`,
        questionOrders: [17, 18],
      },
      {
        type: 'GROUP',
        title: `Stabilité relative des cyclanes`,
        sharedStatement: `La question 19 s'appuie sur la figure ci-dessous, qui résume l'évolution qualitative de la stabilité des cyclanes selon la taille du cycle.

![Stabilité relative des cyclanes](${FIGURE_BASE_PATH}/figure-a3-stabilite-cyclanes.svg)`,
        questionOrders: [19],
      },
      { type: 'QUESTION', questionOrder: 20 },
    ],
  },
];

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos des hydrocarbures :`,
    choices: [
      `Ils sont constitués uniquement d'atomes de carbone et d'hydrogène.`,
      `Un alcool est nécessairement un hydrocarbure.`,
      `Un alcane est un hydrocarbure saturé.`,
      `La présence d'un atome d'oxygène exclut la molécule de la famille des hydrocarbures.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `Un hydrocarbure ne contient que du carbone et de l'hydrogène. Les alcanes sont des hydrocarbures saturés ; l'introduction d'un hétéroatome comme O fait sortir de cette famille.`,
    choiceExplanations: [
      `C'est la définition générale d'un hydrocarbure.`,
      `Un alcool contient au moins un atome d'oxygène et n'est donc pas un hydrocarbure.`,
      `Un alcane ne comporte que des liaisons simples entre carbones.`,
      `Une molécule contenant O n'est plus constituée uniquement de C et H.`,
    ],
  },
  {
    order: 2,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Pour un alcane acyclique saturé comportant $n$ atomes de carbone :`,
    choices: [
      `La formule générale est $\\mathrm{C_nH_{2n+2}}$.`,
      `La formule générale est $\\mathrm{C_nH_{2n}}$.`,
      `Pour $n=4$, la formule brute est $\\mathrm{C_4H_{10}}$.`,
      `La formule $\\mathrm{C_nH_{2n+2}}$ s'applique également à tous les cyclanes.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Les alcanes acycliques saturés répondent à la formule $\\mathrm{C_nH_{2n+2}}$. Les cyclanes perdent deux hydrogènes lors de la fermeture du cycle et répondent à $\\mathrm{C_nH_{2n}}$.`,
    choiceExplanations: [
      `C'est la formule générale attendue.`,
      `Cette formule correspond notamment aux cyclanes et aux alcènes simples.`,
      `Pour $n=4$, $2n+2=10$.`,
      `Les cyclanes ont pour formule générale $\\mathrm{C_nH_{2n}}$.`,
    ],
  },
  {
    order: 3,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les formules brutes suivantes, lesquelles peuvent correspondre à un alcane acyclique saturé ?`,
    choices: [
      `$\\mathrm{CH_4}$.`,
      `$\\mathrm{C_3H_8}$.`,
      `$\\mathrm{C_5H_{12}}$.`,
      `$\\mathrm{C_4H_8}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `On vérifie la relation $H=2n+2$. Elle est satisfaite pour $\\mathrm{CH_4}$, $\\mathrm{C_3H_8}$ et $\\mathrm{C_5H_{12}}$, mais pas pour $\\mathrm{C_4H_8}$.`,
    choiceExplanations: [
      `Pour $n=1$, on obtient $H=4$.`,
      `Pour $n=3$, on obtient $H=8$.`,
      `Pour $n=5$, on obtient $H=12$.`,
      `Pour un alcane acyclique à quatre carbones, il faudrait $\\mathrm{C_4H_{10}}$.`,
    ],
  },
  {
    order: 4,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant ce mélange :`,
    choices: [
      `Le propane possède trois atomes de carbone.`,
      `Le butane possède quatre atomes de carbone.`,
      `Le propane a pour formule $\\mathrm{C_3H_8}$.`,
      `Le butane a pour formule $\\mathrm{C_4H_8}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les préfixes prop- et but- correspondent respectivement à trois et quatre carbones. Les formules des alcanes sont alors $\\mathrm{C_3H_8}$ et $\\mathrm{C_4H_{10}}$.`,
    choiceExplanations: [
      `Le préfixe prop- indique trois carbones.`,
      `Le préfixe but- indique quatre carbones.`,
      `La formule respecte $H=2n+2$.`,
      `La formule correcte du butane est $\\mathrm{C_4H_{10}}$.`,
    ],
  },
  {
    order: 5,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant le propane et le butane :`,
    choices: [
      `Ce sont deux hydrocarbures saturés.`,
      `Ils appartiennent à la famille des alcanes.`,
      `Leurs molécules contiennent nécessairement un atome d'oxygène.`,
      `Leur usage comme combustibles est cohérent avec les applications industrielles importantes des alcanes.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Propane et butane sont des alcanes, donc des hydrocarbures saturés constitués uniquement de carbone et d'hydrogène. Le support les cite comme combustibles, notamment pour le chauffage.`,
    choiceExplanations: [
      `Ils ne comportent que des liaisons simples entre carbones.`,
      `Le suffixe -ane identifie leur famille.`,
      `Un hydrocarbure ne contient que C et H.`,
      `C'est un exemple d'application industrielle classique.`,
    ],
  },
  {
    order: 6,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Quel raisonnement permet de distinguer chimiquement le butane d'un alcool de formule $\\mathrm{C_4H_{10}O}$ ?`,
    choices: [
      `Le butane ne contient que C et H.`,
      `La présence de O dans $\\mathrm{C_4H_{10}O}$ exclut cette molécule des hydrocarbures.`,
      `Les deux composés sont nécessairement deux alcanes.`,
      `La formule du butane est $\\mathrm{C_4H_{10}}$.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le butane est un hydrocarbure de formule $\\mathrm{C_4H_{10}}$. L'ajout d'un atome d'oxygène correspond à une autre famille chimique, ici un alcool possible.`,
    choiceExplanations: [
      `C'est le critère élémentaire des hydrocarbures.`,
      `La molécule contient alors un hétéroatome.`,
      `Un composé oxygéné n'est pas un alcane.`,
      `La formule découle de $\\mathrm{C_nH_{2n+2}}$ pour $n=4$.`,
    ],
  },
  {
    order: 7,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Une pommade pharmaceutique peut contenir de la paraffine, mélange d'hydrocarbures saturés. Dans ce contexte :`,
    choices: [
      `La paraffine peut être rapprochée chimiquement de la famille des alcanes.`,
      `Des hydrocarbures saturés ne comportent pas de double liaison carbone-carbone.`,
      `La présence d'une utilisation pharmaceutique transforme ces molécules en alcools.`,
      `Une application médicale ponctuelle ne modifie pas la définition chimique d'un alcane.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le contexte d'utilisation ne change pas la famille chimique. Les paraffines sont des mélanges d'hydrocarbures saturés, que l'on rattache aux alcanes.`,
    choiceExplanations: [
      `La saturation et la composition C/H sont cohérentes avec les alcanes.`,
      `Un alcane ne possède que des liaisons simples entre carbones.`,
      `Une fonction alcool nécessiterait un groupe $\\mathrm{OH}$.`,
      `La classification repose sur la structure, non sur l'usage.`,
    ],
  },
  {
    order: 8,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos des cyclanes :`,
    choices: [
      `Ce sont des hydrocarbures cycliques ne comportant pas de double liaison.`,
      `Leur formule générale est $\\mathrm{C_nH_{2n}}$.`,
      `Leurs propriétés sont présentées comme proches de celles des alcanes.`,
      `Le cyclopropane possède nécessairement six atomes de carbone.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les cyclanes sont des hydrocarbures saturés cycliques. La fermeture du cycle conduit à la formule générale $\\mathrm{C_nH_{2n}}$.`,
    choiceExplanations: [
      `C'est la définition retenue dans le support.`,
      `Un cycle saturé possède deux hydrogènes de moins que l'alcane ouvert correspondant.`,
      `Le cours les rapproche des alcanes.`,
      `Le préfixe prop- indique trois carbones.`,
    ],
  },
  {
    order: 9,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' partir de la figure précédente :`,
    choices: [
      `A représente le cyclopropane.`,
      `B représente le cyclobutane.`,
      `C représente le cyclopentane.`,
      `D représente le cyclooctane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le nombre de sommets de la représentation topologique correspond au nombre de carbones du cycle : 3, 4, 5 et 6 donnent cyclopropane, cyclobutane, cyclopentane et cyclohexane.`,
    choiceExplanations: [
      `Le triangle possède trois sommets.`,
      `Le quadrilatère possède quatre sommets.`,
      `Le pentagone possède cinq sommets.`,
      `Le cycle D possède six sommets : c'est un cyclohexane.`,
    ],
  },
  {
    order: 10,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente :`,
    choices: [
      `Le cyclopropane a pour formule brute $\\mathrm{C_3H_6}$.`,
      `Le cyclobutane a pour formule brute $\\mathrm{C_4H_8}$.`,
      `Le cyclopentane a pour formule brute $\\mathrm{C_5H_{10}}$.`,
      `Le cyclohexane a pour formule brute $\\mathrm{C_6H_{14}}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `On applique $\\mathrm{C_nH_{2n}}$ aux quatre cyclanes. Pour le cyclohexane, la formule correcte est $\\mathrm{C_6H_{12}}$.`,
    choiceExplanations: [
      `Pour $n=3$, $H=6$.`,
      `Pour $n=4$, $H=8$.`,
      `Pour $n=5$, $H=10$.`,
      `La formule $\\mathrm{C_6H_{14}}$ correspondrait à l'hexane acyclique.`,
    ],
  },
  {
    order: 11,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les formules suivantes :`,
    choices: [
      `$\\mathrm{C_4H_{10}}$ peut correspondre à un alcane acyclique saturé.`,
      `$\\mathrm{C_6H_{14}}$ peut correspondre à un alcane acyclique saturé.`,
      `$\\mathrm{C_6H_{12}}$ peut correspondre à un cyclane saturé.`,
      `$\\mathrm{C_6H_{10}}$ répond à la formule générale d'un cyclane saturé simple.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les alcanes acycliques répondent à $\\mathrm{C_nH_{2n+2}}$ et les cyclanes simples à $\\mathrm{C_nH_{2n}}$. Pour six carbones, cela donne respectivement $\\mathrm{C_6H_{14}}$ et $\\mathrm{C_6H_{12}}$.`,
    choiceExplanations: [
      `Pour $n=4$, la formule d'un alcane est $\\mathrm{C_4H_{10}}$.`,
      `Pour $n=6$, la formule d'un alcane est $\\mathrm{C_6H_{14}}$.`,
      `Pour $n=6$, la formule d'un cyclane est $\\mathrm{C_6H_{12}}$.`,
      `Pour un cyclane simple à six carbones, deux hydrogènes manquent ici.`,
    ],
  },
  {
    order: 12,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Un alcane acyclique saturé possède 9 atomes de carbone.`,
    choices: [
      `Il possède 20 atomes d'hydrogène.`,
      `Sa formule brute est $\\mathrm{C_9H_{20}}$.`,
      `Il peut être nommé nonane.`,
      `Sa formule brute est $\\mathrm{C_9H_{18}}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Pour $n=9$, $2n+2=20$. L'alcane correspondant se nomme nonane.`,
    choiceExplanations: [
      `Le calcul donne $2 \\times 9+2=20$.`,
      `La formule est donc $\\mathrm{C_9H_{20}}$.`,
      `Le préfixe non- correspond à neuf carbones.`,
      `$\\mathrm{C_9H_{18}}$ correspondrait à la formule générale d'un cyclane ou d'un alcène simple.`,
    ],
  },
  {
    order: 13,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Un alcane acyclique saturé possède une formule de type $\\mathrm{C_nH_{18}}$.`,
    choices: [
      `L'équation à résoudre est $2n+2=18$.`,
      `On obtient $n=8$.`,
      `Le composé appartient à la série des octanes.`,
      `On obtient $n=9$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'application de $H=2n+2$ donne $2n=16$, donc $n=8$. Un alcane à huit carbones se nomme octane.`,
    choiceExplanations: [
      `C'est la relation adaptée aux alcanes acycliques.`,
      `La résolution conduit à huit carbones.`,
      `Le préfixe oct- correspond à huit.`,
      `Neuf carbones donneraient vingt hydrogènes.`,
    ],
  },
  {
    order: 14,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' partir de la figure précédente :`,
    choices: [
      `A est une chaîne saturée ouverte.`,
      `B est un cycle saturé.`,
      `C contient une double liaison dans une chaîne ouverte.`,
      `D est un alcane acyclique saturé.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La structure A correspond à une chaîne ouverte ne comportant que des liaisons simples ; B est un cycle saturé ; C possède une double liaison ; D est un cycle comportant une double liaison.`,
    choiceExplanations: [
      `A peut être classée parmi les alcanes.`,
      `B peut être classée parmi les cyclanes.`,
      `C appartient à la famille des alcènes.`,
      `D est cyclique et insaturée.`,
    ],
  },
  {
    order: 15,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente :`,
    choices: [
      `A est l'alcane de la série.`,
      `B est le cyclane de la série.`,
      `C et D comportent chacune une double liaison.`,
      `B et C possèdent nécessairement la même structure parce qu'elles peuvent avoir la même formule brute.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La formule brute ne suffit pas toujours à identifier la structure. Un cyclane et un alcène peuvent tous deux répondre à $\\mathrm{C_nH_{2n}}$ tout en ayant des structures différentes.`,
    choiceExplanations: [
      `A est saturée et acyclique.`,
      `B est saturée et cyclique.`,
      `Les doubles traits de C et D représentent des doubles liaisons.`,
      `Même formule brute ne signifie pas même structure.`,
    ],
  },
  {
    order: 16,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La figure précédente permet d'illustrer que :`,
    choices: [
      `Une formule $\\mathrm{C_nH_{2n}}$ peut correspondre à un cyclane saturé.`,
      `Une formule $\\mathrm{C_nH_{2n}}$ peut correspondre à un alcène.`,
      `La formule brute seule distingue toujours un cyclane d'un alcène.`,
      `Il faut connaître la structure ou des informations supplémentaires pour trancher entre ces deux familles.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Cyclanes saturés et alcènes simples partagent la formule générale $\\mathrm{C_nH_{2n}}$. La structure est donc nécessaire pour les distinguer.`,
    choiceExplanations: [
      `La fermeture d'un cycle retire deux hydrogènes par rapport à l'alcane ouvert.`,
      `La présence d'une double liaison conduit également à deux hydrogènes de moins.`,
      `Cette formule est ambiguë entre au moins ces deux familles.`,
      `La connectivité et le type de liaisons doivent être connus.`,
    ],
  },
  {
    order: 17,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le cyclopropane a historiquement été étudié comme gaz anesthésique. Sans interroger cet usage médical, que peut-on déduire de sa structure représentée ?`,
    choices: [
      `Il s'agit d'un cycle à trois carbones.`,
      `Le cycle est fortement tendu.`,
      `Il est présenté comme énergétiquement moins stable que le cyclopentane.`,
      `Il est particulièrement stable parce qu'il est le plus petit cyclane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le cyclopropane est un petit cycle à trois carbones. Sa forte tension angulaire le rend énergétiquement moins stable que les cycles à cinq ou six carbones.`,
    choiceExplanations: [
      `Le triangle représente trois sommets carbonés.`,
      `Les angles imposés sont très éloignés de la géométrie tétraédrique idéale.`,
      `Le support classe cyclopentane et cyclohexane parmi les cycles très stables.`,
      `La petite taille augmente ici la tension au lieu de stabiliser le cycle.`,
    ],
  },
  {
    order: 18,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos du cyclopentane et du cyclohexane représentés ci-dessus :`,
    choices: [
      `Ils sont présentés comme très stables dans le support.`,
      `Ils sont plus stables que le cyclopropane et le cyclobutane.`,
      `Ils possèdent respectivement cinq et six carbones.`,
      `Le cyclohexane a pour formule brute $\\mathrm{C_6H_{14}}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le support oppose les cycles tendus à trois ou quatre carbones aux cycles plus stables à cinq ou six carbones. Le cyclohexane a pour formule $\\mathrm{C_6H_{12}}$.`,
    choiceExplanations: [
      `C'est la classification donnée dans la fiche.`,
      `Leur géométrie réduit la tension cyclique.`,
      `Le nombre de sommets donne le nombre de carbones.`,
      `$\\mathrm{C_6H_{14}}$ est la formule de l'hexane ouvert.`,
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Dans le cadre précis du cours sur la stabilité des cyclanes :`,
    choices: [
      `Le cyclopropane et le cyclobutane sont des cycles tendus.`,
      `Le cyclopentane et le cyclohexane sont très stables.`,
      `La stabilité est présentée comme diminuant à nouveau lorsque le nombre de carbones du cycle devient plus grand.`,
      `Tous les cyclanes ont exactement la même stabilité.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La fiche décrit une faible stabilité pour les petits cycles, une stabilité élevée autour de cinq et six carbones, puis une diminution à nouveau pour les cycles plus grands.`,
    choiceExplanations: [
      `Leur forte tension augmente leur énergie.`,
      `Ils occupent la zone de stabilité maximale présentée dans le cours.`,
      `C'est l'évolution générale retenue par le support.`,
      `La taille du cycle modifie sa tension et sa stabilité.`,
    ],
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Une préparation pharmaceutique contient un mélange d'hydrocarbures saturés à longues chaînes, tandis qu'un gaz de chauffage contient du propane. Parmi les affirmations suivantes :`,
    choices: [
      `Les deux produits peuvent contenir des molécules appartenant à la famille des alcanes.`,
      `Le propane possède trois carbones et huit hydrogènes.`,
      `L'usage pharmaceutique ou industriel modifie à lui seul la formule générale des alcanes.`,
      `Un alcane acyclique à dix carbones répond à la formule $\\mathrm{C_{10}H_{22}}$.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La famille chimique dépend de la structure, non de l'usage. Le propane est $\\mathrm{C_3H_8}$ et un alcane à dix carbones est le décane, $\\mathrm{C_{10}H_{22}}$.`,
    choiceExplanations: [
      `Les paraffines et le propane relèvent de la chimie des hydrocarbures saturés.`,
      `Pour $n=3$, $2n+2=8$.`,
      `Le contexte d'utilisation ne change pas la structure moléculaire.`,
      `Pour $n=10$, $2n+2=22$.`,
    ],
  },
];
