import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_DISCOVERY_QUIZ_SLUG =
  'section-b-discovery-alcenes-structure-nomenclature';
export const SECTION_B_PRACTICE_QUIZ_SLUG =
  'section-b-practice-preparation-alcenes';

export const SECTION_B_DISCOVERY_QUESTION_ORDERS: number[] = [
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
];
export const SECTION_B_PRACTICE_QUESTION_ORDERS: number[] = [
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];

const FIGURE_BASE_PATH = '/images/training/ue14/hydrocarbures';

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_B_DISCOVERY_QUIZ_SLUG,
    title: `Alcènes : structure et nomenclature`,
    description: `Reconnaître un alcène, appliquer sa formule générale, nommer les premiers représentants et distinguer position de la double liaison et isomérie E/Z.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_B_ORDER,
    items: [
      {
        type: 'GROUP',
        title: `Reconnaissance des hydrocarbures`,
        sharedStatement: `Les questions 21 à 23 s'appuient sur la figure ci-dessous, qui présente quatre hydrocarbures A à D.

![Quatre hydrocarbures](${FIGURE_BASE_PATH}/figure-b1-quatre-hydrocarbures.svg)`,
        questionOrders: [21, 22, 23],
      },
      { type: 'QUESTION', questionOrder: 24 },
      { type: 'QUESTION', questionOrder: 25 },
      { type: 'QUESTION', questionOrder: 26 },
      { type: 'QUESTION', questionOrder: 27 },
      {
        type: 'GROUP',
        title: `Position de la double liaison`,
        sharedStatement: `Les questions 28 à 30 s'appuient sur la figure ci-dessous, qui présente les alcènes A, B et C.

![Position de la double liaison](${FIGURE_BASE_PATH}/figure-b2-position-double-liaison.svg)`,
        questionOrders: [28, 29, 30],
      },
    ],
  },
  {
    order: 2,
    slug: SECTION_B_PRACTICE_QUIZ_SLUG,
    title: `Préparation des alcènes`,
    description: `Identifier une déshydratation, une déshydrohalogénation ou une hydrogénation partielle, puis prévoir les familles et produits formés.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_B_ORDER,
    items: [
      {
        type: 'GROUP',
        title: `Déshydratation d'un alcool`,
        sharedStatement: `Les questions 31 à 33 s'appuient sur la figure ci-dessous. Dans une synthèse d'intermédiaire pharmaceutique, le propan-2-ol est transformé en propène.

![Déshydratation du propan-2-ol](${FIGURE_BASE_PATH}/figure-b3-deshydratation-alcool.svg)`,
        questionOrders: [31, 32, 33],
      },
      {
        type: 'GROUP',
        title: `Déshydrohalogénation`,
        sharedStatement: `Les questions 34 à 36 s'appuient sur la figure ci-dessous, qui montre la transformation du 2-bromopropane en propène.

![Déshydrohalogénation du 2-bromopropane](${FIGURE_BASE_PATH}/figure-b4-deshydrohalogenation.svg)`,
        questionOrders: [34, 35, 36],
      },
      {
        type: 'GROUP',
        title: `Hydrogénation partielle`,
        sharedStatement: `Les questions 37 et 38 s'appuient sur la figure ci-dessous. Lors de la préparation d'un motif destiné à un candidat médicament, l'éthyne peut être hydrogéné successivement.

![Hydrogénation partielle puis complète](${FIGURE_BASE_PATH}/figure-b5-hydrogenation-partielle.svg)`,
        questionOrders: [37, 38],
      },
      { type: 'QUESTION', questionOrder: 39 },
      { type: 'QUESTION', questionOrder: 40 },
    ],
  },
];

export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  {
    order: 21,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de ces structures :`,
    choices: [
      `A est un hydrocarbure saturé.`,
      `B contient une double liaison carbone-carbone.`,
      `C est un hydrocarbure cyclique sans double liaison.`,
      `D est un alcène.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Dans la figure précédente, A est le propane, B le propène, C le cyclopropane et D le propyne. D possède une triple liaison et appartient donc aux alcynes.`,
    choiceExplanations: [
      `Le propane ne comporte que des liaisons simples.`,
      `Le propène comporte une liaison $\\mathrm{C{=}C}$.`,
      `Le cyclopropane est un cycle saturé à trois carbones.`,
      `Le propyne est un alcyne car il contient une liaison $\\mathrm{C{\\equiv}C}$.`,
    ],
  },
  {
    order: 22,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente :`,
    choices: [
      `B appartient à la famille des alcènes.`,
      `B est un hydrocarbure insaturé.`,
      `La formule générale d'un monoalcène acyclique est $\\mathrm{C_nH_{2n}}$.`,
      `Tout composé de formule $\\mathrm{C_nH_{2n}}$ est nécessairement un alcène.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Un monoalcène acyclique possède une double liaison et répond à $\\mathrm{C_nH_{2n}}$. Cette formule peut toutefois aussi correspondre à un cyclane saturé, comme le montre C.`,
    choiceExplanations: [
      `B est bien le propène.`,
      `La double liaison traduit une insaturation.`,
      `C'est la formule générale retenue pour les monoalcènes acycliques.`,
      `Un cyclane peut avoir la même formule générale sans comporter de double liaison.`,
    ],
  },
  {
    order: 23,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La figure précédente permet de comparer B, le propène, et C, le cyclopropane :`,
    choices: [
      `Ils peuvent tous deux avoir pour formule brute $\\mathrm{C_3H_6}$.`,
      `La formule brute seule suffit à distinguer un alcène d'un cyclane.`,
      `B possède une double liaison alors que C possède un cycle saturé.`,
      `B et C sont deux représentations de la même molécule.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Le propène et le cyclopropane répondent tous deux à $\\mathrm{C_3H_6}$, mais leur connectivité diffère. La formule brute ne suffit donc pas à déterminer si l'insaturation provient d'une double liaison ou d'un cycle.`,
    choiceExplanations: [
      `Dans les deux cas, $n=3$ et $H=2n=6$.`,
      `Il faut connaître la structure ou disposer d'informations complémentaires.`,
      `C'est la différence structurale essentielle.`,
      `Leur enchaînement des atomes est différent.`,
    ],
  },
  {
    order: 24,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la nomenclature des premiers alcènes :`,
    choices: [
      `L'éthène comporte deux atomes de carbone.`,
      `Le propène comporte trois atomes de carbone.`,
      `Le butène comporte quatre atomes de carbone.`,
      `L'éthylène est un nom usuel de l'éthyne.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les préfixes éth-, prop- et but- indiquent respectivement deux, trois et quatre carbones. Le nom usuel éthylène désigne l'éthène, et non l'éthyne.`,
    choiceExplanations: [
      `Le préfixe éth- correspond à deux carbones.`,
      `Le préfixe prop- correspond à trois carbones.`,
      `Le préfixe but- correspond à quatre carbones.`,
      `L'éthyne est aussi appelé acétylène.`,
    ],
  },
  {
    order: 25,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Un laboratoire de chimie médicinale utilise un hexène acyclique comportant une seule double liaison comme intermédiaire de synthèse. �' propos de sa formule brute :`,
    choices: [
      `Il comporte six atomes de carbone.`,
      `Il répond à la formule $\\mathrm{C_6H_{12}}$.`,
      `Il répond à la formule $\\mathrm{C_6H_{14}}$.`,
      `La présence d'un contexte pharmaceutique ne change pas sa famille chimique.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Pour un monoalcène acyclique, $H=2n$. Avec $n=6$, on obtient $\\mathrm{C_6H_{12}}$. L'usage de la molécule ne modifie pas sa classification chimique.`,
    choiceExplanations: [
      `Le préfixe hex- indique six carbones.`,
      `On applique $H=2n=12$.`,
      `$\\mathrm{C_6H_{14}}$ correspondrait à un alcane acyclique saturé.`,
      `La famille dépend de la structure, non de l'utilisation.`,
    ],
  },
  {
    order: 26,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Un monoalcène acyclique a pour formule générale $\\mathrm{C_nH_{2n}}$ et comporte 18 atomes d'hydrogène :`,
    choices: [
      `Il comporte neuf atomes de carbone.`,
      `Sa formule brute est $\\mathrm{C_9H_{18}}$.`,
      `Il peut être nommé nonène si sa chaîne principale comporte neuf carbones.`,
      `Il s'agit nécessairement d'un nonane.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La relation $2n=18$ donne $n=9$. Un monoalcène à neuf carbones appartient à la famille des nonènes. Le nonane aurait pour formule $\\mathrm{C_9H_{20}}$.`,
    choiceExplanations: [
      `On résout $n=18/2=9$.`,
      `La formule est directement $\\mathrm{C_9H_{18}}$.`,
      `Le préfixe non- correspond à neuf carbones et le suffixe -ène à la double liaison.`,
      `Le nonane est un alcane saturé.`,
    ],
  },
  {
    order: 27,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos des hydrocarbures comportant plusieurs doubles liaisons :`,
    choices: [
      `Un diène possède deux doubles liaisons.`,
      `Un triène possède trois doubles liaisons.`,
      `Le préfixe di- indique ici deux atomes de carbone.`,
      `La formule $\\mathrm{C_nH_{2n}}$ présentée pour les alcènes simples ne doit pas être appliquée sans réflexion à un diène acyclique.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Diène et triène indiquent respectivement deux et trois doubles liaisons. Chaque insaturation supplémentaire diminue encore le nombre d'hydrogènes par rapport au monoalcène.`,
    choiceExplanations: [
      `C'est la définition d'un diène.`,
      `C'est la définition d'un triène.`,
      `Le préfixe di- porte ici sur le nombre de doubles liaisons.`,
      `Un diène acyclique comporte deux insaturations et ne suit pas la formule du monoalcène.`,
    ],
  },
  {
    order: 28,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' partir de la figure précédente :`,
    choices: [
      `A est le but-1-ène.`,
      `B est le but-2-ène.`,
      `C est le 2-méthylpropène.`,
      `A et B ont des formules brutes différentes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `A et B possèdent la même chaîne linéaire à quatre carbones, avec la double liaison en position 1 ou 2. C possède une chaîne ramifiée mais conserve la formule brute $\\mathrm{C_4H_8}$.`,
    choiceExplanations: [
      `La double liaison commence au carbone 1.`,
      `La double liaison se situe entre les carbones 2 et 3.`,
      `Le carbone central est lié à deux groupes méthyle.`,
      `A et B ont tous deux pour formule $\\mathrm{C_4H_8}$.`,
    ],
  },
  {
    order: 29,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente :`,
    choices: [
      `A et B sont des isomères de position.`,
      `A et B conservent la même chaîne carbonée.`,
      `A et C sont des isomères de position au sens strict.`,
      `La numérotation d'un alcène doit donner le plus petit indice possible à la double liaison.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le but-1-ène et le but-2-ène ne diffèrent que par la position de la double liaison. Le 2-méthylpropène possède un squelette carboné différent et ne constitue donc pas un simple isomère de position du but-1-ène.`,
    choiceExplanations: [
      `La fonction alcène se déplace sur la même chaîne.`,
      `Le squelette linéaire à quatre carbones est conservé.`,
      `Le squelette est ramifié dans C.`,
      `Cette règle fixe le sens de numérotation.`,
    ],
  },
  {
    order: 30,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de l'isomérie géométrique des alcènes représentés ci-dessus :`,
    choices: [
      `Il n'existe pas de libre rotation autour de la double liaison.`,
      `Le but-2-ène peut présenter deux configurations géométriques E et Z.`,
      `Le but-1-ène présente nécessairement deux configurations E et Z.`,
      `Pour définir E/Z, chacun des carbones de la double liaison doit porter deux substituants différents.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La double liaison bloque la rotation. Le but-2-ène remplit la condition E/Z, tandis que le carbone terminal $\\mathrm{CH_2}$ du but-1-ène porte deux hydrogènes identiques.`,
    choiceExplanations: [
      `La liaison $\\pi$ empêche la rotation libre.`,
      `Chaque carbone de la double liaison porte $\\mathrm{H}$ et $\\mathrm{CH_3}$.`,
      `Le carbone terminal porte deux H identiques.`,
      `C'est la condition nécessaire pour distinguer deux configurations.`,
    ],
  },
  {
    order: 31,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos de cette transformation :`,
    choices: [
      `Le réactif de départ est un alcool.`,
      `Le produit organique est un alcène.`,
      `La transformation est une déshydratation.`,
      `La réaction consomme une molécule d'eau.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La déshydratation d'un alcool élimine une molécule d'eau et forme une double liaison. Ici, le propan-2-ol donne du propène et de l'eau.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{OH}$ caractérise l'alcool.`,
      `Le propène comporte une double liaison $\\mathrm{C{=}C}$.`,
      `La perte de $\\mathrm{H_2O}$ définit une déshydratation.`,
      `L'eau est formée, et non consommée.`,
    ],
  },
  {
    order: 32,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à propos de cette transformation :`,
    choices: [
      `Un hydrogène et le groupe $\\mathrm{OH}$ sont éliminés sur deux carbones voisins.`,
      `Une double liaison se forme entre ces deux carbones.`,
      `Le bilan comprend la formation de $\\mathrm{H_2O}$.`,
      `Le nombre d'atomes de carbone du produit diminue d'une unité.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'élimination de $\\mathrm{H}$ et $\\mathrm{OH}$ sur deux carbones voisins forme $\\mathrm{H_2O}$ et crée une double liaison, sans modifier le squelette carboné.`,
    choiceExplanations: [
      `C'est le principe de l'élimination conduisant à l'alcène.`,
      `La nouvelle liaison $\\pi$ apparaît entre les carbones concernés.`,
      `$\\mathrm{H}$ et $\\mathrm{OH}$ constituent ensemble une molécule d'eau.`,
      `Les trois carbones du propan-2-ol sont conservés dans le propène.`,
    ],
  },
  {
    order: 33,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' partir du propan-2-ol représenté ci-dessus :`,
    choices: [
      `Le produit alcénique compatible est le propène.`,
      `Le produit alcénique compatible est l'éthène.`,
      `La formule brute du produit organique est $\\mathrm{C_3H_6}$.`,
      `La formule brute du produit organique est $\\mathrm{C_3H_8O}$.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Le squelette à trois carbones est conservé et la perte d'eau transforme $\\mathrm{C_3H_8O}$ en $\\mathrm{C_3H_6}$. Le produit est donc le propène.`,
    choiceExplanations: [
      `Trois carbones et une double liaison correspondent au propène.`,
      `L'éthène ne contient que deux carbones.`,
      `La formule d'un monoalcène à trois carbones est $\\mathrm{C_3H_6}$.`,
      `Cette formule est celle de l'alcool de départ.`,
    ],
  },
  {
    order: 34,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos de cette transformation :`,
    choices: [
      `Le réactif de départ est un dérivé halogéné.`,
      `La transformation est une déshydrohalogénation.`,
      `Le produit organique est un alcène.`,
      `La transformation est une hydrogénation catalytique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La déshydrohalogénation élimine un hydrogène et un halogène sur deux carbones voisins afin de former une double liaison.`,
    choiceExplanations: [
      `Le 2-bromopropane contient un atome de brome lié à la chaîne carbonée.`,
      `La réaction élimine $\\mathrm{HBr}$.`,
      `La nouvelle double liaison donne le propène.`,
      `Une hydrogénation ajouterait du dihydrogène au lieu d'éliminer $\\mathrm{HBr}$.`,
    ],
  },
  {
    order: 35,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure précédente :`,
    choices: [
      `Le petit produit éliminé est $\\mathrm{HBr}$.`,
      `Dans l'écriture générale, le produit éliminé est $\\mathrm{HX}$ avec $\\mathrm{X}$ un halogène.`,
      `Le petit produit éliminé est obligatoirement $\\mathrm{H_2O}$.`,
      `Une double liaison se forme dans le produit organique.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Dans une déshydrohalogénation, $\\mathrm{H}$ et $\\mathrm{X}$ sont éliminés sous forme $\\mathrm{HX}$. Avec le brome, il s'agit de $\\mathrm{HBr}$.`,
    choiceExplanations: [
      `Le halogène présent est Br.`,
      `La notation $\\mathrm{X}$ représente un halogène.`,
      `$\\mathrm{H_2O}$ est éliminée lors d'une déshydratation d'alcool.`,
      `L'élimination crée la liaison $\\mathrm{C{=}C}$.`,
    ],
  },
  {
    order: 36,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Comparaison de la déshydratation et de la déshydrohalogénation :`,
    choices: [
      `La déshydratation et la déshydrohalogénation peuvent toutes deux conduire à un alcène.`,
      `La première élimine $\\mathrm{H_2O}$, la seconde élimine $\\mathrm{HX}$.`,
      `Les deux transformations partent nécessairement d'un alcyne.`,
      `Les substrats de départ appartiennent à des familles chimiques différentes.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Les deux réactions sont des éliminations conduisant à une double liaison, mais la déshydratation part d'un alcool et élimine de l'eau, tandis que la déshydrohalogénation part d'un dérivé halogéné et élimine $\\mathrm{HX}$.`,
    choiceExplanations: [
      `Le produit organique peut être un alcène dans les deux cas.`,
      `C'est la différence essentielle entre les deux bilans.`,
      `Aucune des deux réactions ne part nécessairement d'un alcyne.`,
      `Alcool et dérivé halogéné ne sont pas la même famille.`,
    ],
  },
  {
    order: 37,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos de cette suite d'hydrogénations :`,
    choices: [
      `L'éthyne est un alcyne.`,
      `L'éthène est l'alcène intermédiaire.`,
      `L'éthane est l'alcane obtenu après hydrogénation complète.`,
      `L'ordre des familles est alcane '�� alcène '�� alcyne.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'ajout progressif de dihydrogène réduit d'abord la triple liaison en double liaison, puis la double liaison en liaison simple : alcyne '�� alcène '�� alcane.`,
    choiceExplanations: [
      `L'éthyne contient une triple liaison.`,
      `Une première réduction conduit à l'éthène.`,
      `Une seconde addition de $\\mathrm{H_2}$ conduit à l'éthane.`,
      `L'ordre réel est l'inverse.`,
    ],
  },
  {
    order: 38,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à propos de l'hydrogénation illustrée ci-dessus :`,
    choices: [
      `Le choix du catalyseur et des conditions est important pour s'arrêter au stade alcène.`,
      `Une hydrogénation partielle ajoute une quantité limitée de dihydrogène.`,
      `Il peut être plus facile d'aller jusqu'à l'alcane que de s'arrêter à l'alcène.`,
      `L'hydrogénation partielle transforme directement un alcane en alcyne.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le support souligne la difficulté de contrôler l'hydrogénation partielle d'un alcyne. Le catalyseur et les conditions doivent limiter la réaction au stade de la double liaison.`,
    choiceExplanations: [
      `Ces paramètres contrôlent la sélectivité de la réduction.`,
      `Une seule étape d'addition est recherchée.`,
      `La réduction complète est souvent plus facile à obtenir.`,
      `Le sens de transformation est opposé.`,
    ],
  },
  {
    order: 39,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Dans une stratégie de synthèse organique appliquée à une molécule d'intérêt médical :`,
    choices: [
      `Pour obtenir un alcène à partir d'un alcool, une déshydratation peut être envisagée.`,
      `Pour obtenir un alcène à partir d'un dérivé halogéné, une déshydrohalogénation peut être envisagée.`,
      `Pour obtenir un alcène à partir d'un alcyne, une hydrogénation partielle peut être envisagée.`,
      `Pour obtenir un alcène à partir d'un alcane, une hydrogénation catalytique est la voie présentée dans le cours.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les trois voies de préparation étudiées sont la déshydratation d'un alcool, la déshydrohalogénation d'un dérivé halogéné et l'hydrogénation partielle d'un alcyne. Une hydrogénation d'alcane ne crée pas de double liaison.`,
    choiceExplanations: [
      `L'élimination d'eau crée la double liaison.`,
      `L'élimination de $\\mathrm{HX}$ crée la double liaison.`,
      `La réduction partielle de la triple liaison donne une double liaison.`,
      `Un alcane est déjà saturé et ne peut pas être davantage hydrogéné pour former un alcène.`,
    ],
  },
  {
    order: 40,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos des alcènes et de leur préparation :`,
    choices: [
      `Un monoalcène acyclique répond à la formule générale $\\mathrm{C_nH_{2n}}$.`,
      `Un alcène peut être préparé par déshydratation d'un alcool.`,
      `Une déshydrohalogénation élimine $\\mathrm{HX}$.`,
      `Une hydrogénation complète d'un alcyne s'arrête nécessairement au stade alcène.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les trois premières propositions résument les notions essentielles de la section. L'hydrogénation complète d'un alcyne conduit au contraire à un alcane.`,
    choiceExplanations: [
      `C'est la formule générale du monoalcène acyclique.`,
      `La perte d'eau forme la double liaison.`,
      `$\\mathrm{H}$ et l'halogène $\\mathrm{X}$ sont éliminés ensemble.`,
      `Le stade alcène correspond à une hydrogénation partielle.`,
    ],
  },
];
