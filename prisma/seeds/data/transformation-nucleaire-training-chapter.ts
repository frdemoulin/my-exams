import type {
  ChapterSectionKind,
  QuizDifficulty,
  TrainingQuizStage,
} from '@prisma/client';

type SeedQuizQuestion = {
  difficulty: QuizDifficulty;
  question: string;
  choices: string[];
  correctChoiceIndex: number;
  explanation: string;
  order: number;
};

type SeedTrainingQuizQuestionGroup = {
  title?: string;
  sharedStatement: string;
  order: number;
  questionOrders: number[];
};

type SeedTrainingQuizItem =
  | {
      type: 'QUESTION';
      questionOrder: number;
    }
  | {
      type: 'GROUP';
      title?: string;
      sharedStatement: string;
      questionOrders: number[];
    };

type SeedTrainingQuiz = {
  title: string;
  slug: string;
  description: string;
  order: number;
  stage?: TrainingQuizStage;
  isPublished?: boolean;
  questionOrders?: number[];
  questionGroups?: SeedTrainingQuizQuestionGroup[];
  items?: SeedTrainingQuizItem[];
};

type SeedChapterSection = {
  title: string;
  description: string;
  order: number;
  kind?: ChapterSectionKind;
  quizzes: SeedTrainingQuiz[];
};

type TrainingChapterSeed = {
  title: string;
  slug: string;
  order: number;
  domainLongDescriptions: string[];
  questions: SeedQuizQuestion[];
  sections?: SeedChapterSection[];
};

const createQuestion = (
  order: number,
  difficulty: QuizDifficulty,
  question: string,
  choices: string[],
  correctChoiceIndex: number,
  explanation: string
): SeedQuizQuestion => ({
  order,
  difficulty,
  question,
  choices,
  correctChoiceIndex,
  explanation,
});

const scientificMathCommands = [
  'alpha',
  'approx',
  'bar',
  'beta',
  'cdot',
  'ce',
  'Delta',
  'dfrac',
  'gamma',
  'lambda',
  'left',
  'ln',
  'mathrm',
  'nu',
  'rightarrow',
  'right',
  'times',
] as const;

const scientificMathCommandPatterns = scientificMathCommands.map((command) => ({
  command,
  pattern: new RegExp(
    `(^|[^\\A-Za-z])${command}(?=(?:\\s|\\{|\\}|_|\\^|\\(|\\)|\\[|\\]|$))`,
    'g'
  ),
}));

const normalizeScientificMathContent = (value: string) =>
  scientificMathCommandPatterns.reduce(
    (normalizedValue, { command, pattern }) =>
      normalizedValue.replace(pattern, (_, prefix: string) => `${prefix}\\${command}`),
    value
  );

const normalizeScientificMarkup = (value: string) =>
  value.replace(/(\$\$?|\$)([\s\S]*?)\1/g, (_, delimiter: string, content: string) => {
    return `${delimiter}${normalizeScientificMathContent(content)}${delimiter}`;
  });

const normalizeTrainingChapterSeed = (
  chapter: TrainingChapterSeed
): TrainingChapterSeed => ({
  ...chapter,
  title: normalizeScientificMarkup(chapter.title),
  questions: chapter.questions.map((question) => ({
    ...question,
    question: normalizeScientificMarkup(question.question),
    choices: question.choices.map(normalizeScientificMarkup),
    explanation: normalizeScientificMarkup(question.explanation),
  })),
  sections: chapter.sections?.map((section) => ({
    ...section,
    title: normalizeScientificMarkup(section.title),
    description: normalizeScientificMarkup(section.description),
    quizzes: section.quizzes.map((quiz) => ({
      ...quiz,
      title: normalizeScientificMarkup(quiz.title),
      description: normalizeScientificMarkup(quiz.description),
      questionGroups: quiz.questionGroups?.map((group) => ({
        ...group,
        title: group.title ? normalizeScientificMarkup(group.title) : undefined,
        sharedStatement: normalizeScientificMarkup(group.sharedStatement),
      })),
      items: quiz.items?.map((item) =>
        item.type === 'GROUP'
          ? {
              ...item,
              title: item.title ? normalizeScientificMarkup(item.title) : undefined,
              sharedStatement: normalizeScientificMarkup(item.sharedStatement),
            }
          : item
      ),
    })),
  })),
});

const buildQuestionItems = (
  startOrder: number,
  count = 10
): SeedTrainingQuizItem[] =>
  Array.from({ length: count }, (_, index) => ({
    type: 'QUESTION' as const,
    questionOrder: startOrder + index,
  }));

const buildQuestionOrderRange = (startOrder: number, count = 10): number[] =>
  Array.from({ length: count }, (_, index) => startOrder + index);

export const transformationNucleaireTrainingChapter: TrainingChapterSeed = normalizeTrainingChapterSeed({
  title: 'Transformation nucléaire',
  slug: 'transformation-nucleaire',
  order: 5,
  domainLongDescriptions: ['Constitution et transformations de la matière'],
  questions: [
    createQuestion(
      1,
      'EASY',
      'Observe le schéma simplifié suivant.\n![Diagramme simplifié N-Z des noyaux stables et instables](/uploads/training/nucleaire-diagramme-nz.svg)\nDans un diagramme $(N;Z)$, que représente un point ?',
      [
        'Un noyau défini par un nombre de neutrons $N$ et un nombre de protons $Z$',
        'Une famille chimique entière',
        'Une durée de demi-vie',
        'Une énergie de rayonnement',
      ],
      0,
      'Chaque point correspond à un noyau précis : ses coordonnées donnent son nombre de neutrons $N$ et son nombre de protons $Z$.',
    ),
    createQuestion(
      2,
      'EASY',
      'Dans un diagramme $(N;Z)$ usuel, quelle grandeur est portée en abscisse ?',
      [
        'Le nombre de neutrons $N$',
        'Le nombre de protons $Z$',
        'Le nombre de nucléons $A$',
        'La constante radioactive $\lambda$',
      ],
      0,
      'Par convention, on place en général $N$ en abscisse et $Z$ en ordonnée.',
    ),
    createQuestion(
      3,
      'EASY',
      'Deux noyaux placés sur une même ligne horizontale dans un diagramme $(N;Z)$ ont le même :',
      ['Nombre de protons $Z$', 'Nombre de neutrons $N$', 'Nombre de masse $A$', 'Temps de demi-vie'],
      0,
      'Une ligne horizontale correspond à une ordonnée constante, donc à un même nombre de protons $Z$.',
    ),
    createQuestion(
      4,
      'EASY',
      'Deux noyaux placés sur une même verticale dans un diagramme $(N;Z)$ ont le même :',
      ['Nombre de neutrons $N$', 'Nombre de protons $Z$', 'Nombre de masse $A$', 'Type de radioactivité'],
      0,
      'Une verticale correspond à une abscisse constante, donc à un même nombre de neutrons $N$.',
    ),
    createQuestion(
      5,
      'EASY',
      'Deux noyaux isotopes possèdent nécessairement :',
      [
        'Le même nombre de protons mais des nombres de neutrons différents',
        'Le même nombre de neutrons mais des nombres de protons différents',
        'La même masse mais des charges différentes',
        'Le même temps de demi-vie',
      ],
      0,
      'Des isotopes appartiennent au même élément chimique : ils ont donc le même numéro atomique $Z$, mais pas forcément le même nombre de neutrons.',
    ),
    createQuestion(
      6,
      'EASY',
      'Pour deux isotopes d’un même élément, celui qui est le plus riche en neutrons possède :',
      [
        'Un nombre de masse $A$ plus grand',
        'Un nombre de protons $Z$ plus grand',
        'Une charge électrique plus faible',
        'Toujours une demi-vie plus courte',
      ],
      0,
      'Si $Z$ est identique et que $N$ augmente, alors $A = Z + N$ augmente aussi.',
    ),
    createQuestion(
      7,
      'EASY',
      'Dans un diagramme $(N;Z)$, les noyaux stables se trouvent en général :',
      [
        'Dans une bande de stabilité',
        'Uniquement sur l’axe des abscisses',
        'Uniquement sur la droite $N = 0$',
        'Au hasard, sans organisation particulière',
      ],
      0,
      'Les noyaux stables ne sont pas répartis au hasard : ils occupent une zone spécifique appelée bande de stabilité.',
    ),
    createQuestion(
      8,
      'EASY',
      'Un noyau situé loin de la bande de stabilité est le plus souvent :',
      [
        'Instable et susceptible de se désintégrer',
        'Nécessairement stable',
        'Impossible à observer',
        'Sans protons',
      ],
      0,
      'Plus un noyau s’écarte de la zone de stabilité, plus il a de chances d’être radioactif.',
    ),
    createQuestion(
      9,
      'MEDIUM',
      'Pour les noyaux légers stables, quel ordre de grandeur relie souvent $N$ et $Z$ ?',
      [
        '$N$ est souvent voisin de $Z$',
        '$N$ vaut presque toujours $2Z$',
        '$N$ est presque nul',
        '$N$ est toujours inférieur à $Z/2$',
      ],
      0,
      'Pour les petits noyaux stables, l’équilibre entre protons et neutrons correspond souvent à des valeurs proches de $N \approx Z$.',
    ),
    createQuestion(
      10,
      'MEDIUM',
      'Pour beaucoup de noyaux lourds stables, on observe plutôt :',
      [
        '$N > Z$',
        '$N = Z$',
        '$N < Z$',
        '$N = 0$',
      ],
      0,
      'Quand $Z$ devient grand, il faut souvent davantage de neutrons que de protons pour assurer une meilleure stabilité du noyau.',
    ),
    createQuestion(
      11,
      'EASY',
      'Dire que deux noyaux sont isotopes signifie qu’ils appartiennent :',
      [
        'Au même élément chimique',
        'À deux éléments chimiques différents',
        'À la même famille de rayonnements',
        'À la même réaction chimique',
      ],
      0,
      'Des isotopes ont le même numéro atomique $Z$, donc ils correspondent au même élément chimique.',
    ),
    createQuestion(
      12,
      'EASY',
      'Entre deux isotopes d’un même élément, quelle grandeur change ?',
      [
        'Le nombre de neutrons',
        'Le nombre de protons',
        'La charge du noyau en unités élémentaires',
        'Le symbole chimique',
      ],
      0,
      'Par définition, des isotopes se distinguent par leur nombre de neutrons.',
    ),
    createQuestion(
      13,
      'EASY',
      'Un noyau radioactif est un noyau :',
      [
        'Instable qui peut se transformer spontanément',
        'Toujours stable mais très énergétique',
        'Qui contient forcément plus de neutrons que de protons',
        'Qui ne peut exister qu’en laboratoire',
      ],
      0,
      'La radioactivité correspond à la transformation spontanée d’un noyau instable.',
    ),
    createQuestion(
      14,
      'EASY',
      'À l’échelle d’un noyau isolé, la date exacte de désintégration est :',
      [
        'Impossible à prévoir précisément',
        'Toujours connue à l’avance',
        'Fixée uniquement par la masse du noyau',
        'Égale au temps de demi-vie',
      ],
      0,
      'La désintégration d’un noyau individuel est aléatoire : on décrit statistiquement un grand ensemble de noyaux, pas l’instant exact pour chacun.',
    ),
    createQuestion(
      15,
      'EASY',
      'Le temps de demi-vie d’un radionucléide est :',
      [
        'Une grandeur caractéristique de ce radionucléide',
        'Le même pour tous les noyaux radioactifs',
        'Toujours égal à une seconde',
        'Le temps de disparition complète de l’échantillon',
      ],
      0,
      'Chaque radionucléide possède sa propre constante radioactive et donc son propre temps de demi-vie.',
    ),
    createQuestion(
      16,
      'EASY',
      'La radioactivité dite artificielle concerne des noyaux :',
      [
        'Produits par l’être humain ou en laboratoire',
        'Uniquement présents dans les étoiles',
        'Toujours stables',
        'Obligatoirement plus légers que l’hélium',
      ],
      0,
      'On parle de radioactivité artificielle lorsqu’on étudie des noyaux fabriqués par réactions nucléaires en laboratoire ou dans des installations dédiées.',
    ),
    createQuestion(
      17,
      'EASY',
      'Lors d’une émission $\gamma$, comment évoluent $A$ et $Z$ ?',
      [
        '$A$ et $Z$ ne changent pas',
        '$A$ diminue de 4 et $Z$ diminue de 2',
        '$A$ reste constant et $Z$ augmente de 1',
        '$A$ augmente et $Z$ diminue',
      ],
      0,
      'Le rayonnement $\gamma$ traduit une désexcitation du noyau : il modifie son énergie, pas sa composition en nucléons ni sa charge.',
    ),
    createQuestion(
      18,
      'EASY',
      'La radioactivité $\alpha$ correspond à l’émission :',
      [
        'D’un noyau d’hélium',
        'D’un électron',
        'D’un positon',
        'D’un neutron isolé',
      ],
      0,
      'Une particule $\alpha$ est un noyau d’hélium $^4_2\mathrm{He}$.',
    ),
    createQuestion(
      19,
      'EASY',
      'La radioactivité $\beta^-$ s’accompagne de l’émission :',
      [
        'D’un électron et d’un antineutrino',
        'D’un positon et d’un neutrino',
        'D’un noyau d’hélium',
        'D’un photon gamma uniquement',
      ],
      0,
      'Dans une désintégration $\beta^-$, on observe l’émission d’un électron et d’un antineutrino électronique.',
    ),
    createQuestion(
      20,
      'EASY',
      'La radioactivité $\beta^+$ s’accompagne de l’émission :',
      [
        'D’un positon et d’un neutrino',
        'D’un électron et d’un antineutrino',
        'D’un noyau d’hélium',
        'D’un proton libre uniquement',
      ],
      0,
      'Dans une désintégration $\beta^+$, un positon et un neutrino sont émis.',
    ),
    createQuestion(
      21,
      'EASY',
      'Pour écrire correctement une équation de réaction nucléaire, quelles grandeurs doivent être conservées ?',
      [
        'Le nombre de nucléons et la charge électrique',
        'Le volume et la pression',
        'La masse volumique et le pH',
        'Le temps de demi-vie et la température',
      ],
      0,
      'Une équation nucléaire respecte la conservation du nombre total de nucléons et de la charge électrique.',
    ),
    createQuestion(
      22,
      'MEDIUM',
      'Quelle particule complète l’écriture $^{238}_{92}U \rightarrow ^{234}_{90}Th + \ ?$',
      [
        '$^{4}_{2}He$',
        '$^{0}_{-1}e$',
        '$^{0}_{+1}e$',
        '$^{1}_{0}n$',
      ],
      0,
      'La diminution de 4 unités sur $A$ et de 2 unités sur $Z$ correspond à une émission $\alpha$, donc à $^{4}_{2}He$.',
    ),
    createQuestion(
      23,
      'MEDIUM',
      'Quelle écriture traduit une désintégration $\beta^-$ du carbone 14 ?',
      [
        '$^{14}_{6}C \rightarrow ^{14}_{7}N + ^{0}_{-1}e + \bar{\nu}_e$',
        '$^{14}_{6}C \rightarrow ^{10}_{4}Be + ^{4}_{2}He$',
        '$^{14}_{6}C \rightarrow ^{14}_{5}B + ^{0}_{+1}e + \nu_e$',
        '$^{14}_{6}C \rightarrow ^{13}_{6}C + ^{1}_{0}n$',
      ],
      0,
      'En radioactivité $\beta^-$, le nombre de masse reste constant et le numéro atomique augmente d’une unité.',
    ),
    createQuestion(
      24,
      'MEDIUM',
      'Quelle écriture traduit une désintégration $\beta^+$ du fluor 18 ?',
      [
        '$^{18}_{9}F \rightarrow ^{18}_{8}O + ^{0}_{+1}e + \nu_e$',
        '$^{18}_{9}F \rightarrow ^{14}_{7}N + ^{4}_{2}He$',
        '$^{18}_{9}F \rightarrow ^{18}_{10}Ne + ^{0}_{-1}e + \bar{\nu}_e$',
        '$^{18}_{9}F \rightarrow ^{17}_{8}O + ^{1}_{1}p$',
      ],
      0,
      'En radioactivité $\beta^+$, le nombre de masse reste inchangé et $Z$ diminue de 1.',
    ),
    createQuestion(
      25,
      'EASY',
      'Une émission $\gamma$ après une désintégration traduit le plus souvent :',
      [
        'La désexcitation du noyau formé',
        'La disparition d’un proton',
        'La création d’un nouvel élément chimique',
        'Un changement du nombre de nucléons',
      ],
      0,
      'Le noyau fils peut être créé dans un état excité puis perdre cet excès d’énergie sous forme de rayonnement $\gamma$.',
    ),
    createQuestion(
      26,
      'EASY',
      'Dans toute équation nucléaire correctement écrite, la somme des nombres de masse $A$ :',
      [
        'Est la même de part et d’autre',
        'Diminue toujours',
        'Augmente toujours',
        'N’a pas à être vérifiée',
      ],
      0,
      'Le nombre total de nucléons se conserve : la somme des $A$ doit donc être identique à gauche et à droite.',
    ),
    createQuestion(
      27,
      'EASY',
      'Dans toute équation nucléaire correctement écrite, la somme des numéros atomiques $Z$ :',
      [
        'Est la même de part et d’autre',
        'Doit toujours diminuer',
        'Doit toujours augmenter',
        'Peut changer sans contrainte',
      ],
      0,
      'La charge électrique se conserve, ce qui impose la conservation de la somme des numéros atomiques $Z$.',
    ),
    createQuestion(
      28,
      'EASY',
      'Laquelle de ces écritures représente une particule $\alpha$ ?',
      [
        '$^{4}_{2}He$',
        '$^{0}_{-1}e$',
        '$^{0}_{+1}e$',
        '$^{1}_{0}n$',
      ],
      0,
      'Une particule $\alpha$ est un noyau d’hélium, noté $^{4}_{2}He$.',
    ),
    createQuestion(
      29,
      'MEDIUM',
      'Lors d’une désintégration $\alpha$, le noyau fils possède :',
      [
        '$A - 4$ et $Z - 2$',
        '$A - 2$ et $Z - 4$',
        '$A$ et $Z + 1$',
        '$A - 1$ et $Z$',
      ],
      0,
      'L’émission d’un noyau $^{4}_{2}He$ retire 4 nucléons au total et 2 protons au noyau père.',
    ),
    createQuestion(
      30,
      'MEDIUM',
      'Lors d’une désintégration $\beta^-$, le noyau fils possède :',
      [
        'Le même $A$ et un $Z$ augmenté de 1',
        'Un $A$ diminué de 4 et un $Z$ diminué de 2',
        'Le même $A$ et un $Z$ diminué de 1',
        'Un $A$ augmenté de 1 et le même $Z$',
      ],
      0,
      'Dans le noyau, une transformation de type neutron $\rightarrow$ proton conduit à conserver $A$ tout en augmentant $Z$ de 1.',
    ),
    createQuestion(
      31,
      'EASY',
      'Un noyau stable est un noyau qui :',
      [
        'Ne se désintègre pas spontanément dans les conditions ordinaires',
        'Émet forcément des rayons $\gamma$',
        'Contient uniquement des neutrons',
        'Possède toujours $N = Z$',
      ],
      0,
      'Un noyau stable n’est pas sujet à une désintégration spontanée mesurable dans les conditions usuelles.',
    ),
    createQuestion(
      32,
      'EASY',
      'La désintégration d’un noyau radioactif isolé est :',
      [
        'Spontanée et aléatoire',
        'Toujours déclenchée par un choc',
        'Toujours parfaitement prévisible',
        'Impossible si le noyau est lourd',
      ],
      0,
      'La radioactivité est un phénomène spontané, mais son instant précis pour un noyau donné reste aléatoire.',
    ),
    createQuestion(
      33,
      'EASY',
      'Deux noyaux ayant le même numéro atomique $Z$ mais des nombres de masse différents sont :',
      [
        'Des isotopes',
        'Des isobares',
        'Des isomères d’énergie',
        'Des ions',
      ],
      0,
      'Même $Z$ signifie même élément chimique. Si $A$ diffère, c’est que le nombre de neutrons diffère aussi : ce sont des isotopes.',
    ),
    createQuestion(
      34,
      'EASY',
      'La radioactivité artificielle concerne en particulier :',
      [
        'Des noyaux obtenus par réactions nucléaires provoquées',
        'Uniquement les noyaux présents sur Terre depuis l’origine',
        'Les noyaux d’hélium stables',
        'Toutes les molécules organiques',
      ],
      0,
      'Elle apparaît lorsqu’on produit ou transforme des noyaux par des dispositifs expérimentaux ou industriels.',
    ),
    createQuestion(
      35,
      'MEDIUM',
      'Pourquoi observe-t-on parfois un rayonnement $\gamma$ après une émission $\alpha$ ou $\beta$ ?',
      [
        'Parce que le noyau fils a été créé dans un état excité',
        'Parce qu’un proton a disparu du noyau',
        'Parce que la masse du noyau a augmenté',
        'Parce que la charge du noyau n’est plus conservée',
      ],
      0,
      'L’émission $\gamma$ correspond souvent à une simple désexcitation du noyau formé après la première transformation.',
    ),
    createQuestion(
      36,
      'MEDIUM',
      'Parmi les rayonnements usuels $\alpha$, $\beta$ et $\gamma$, lequel est en général le moins pénétrant ?',
      ['Le rayonnement $\alpha$', 'Le rayonnement $\gamma$', 'Le rayonnement $\beta$', 'Ils sont équivalents'],
      0,
      'Les particules $\alpha$ sont facilement arrêtées par quelques centimètres d’air ou une feuille légère.',
    ),
    createQuestion(
      37,
      'HARD',
      'Dans une désintégration $\beta^-$, quelle transformation microscopique modélise le phénomène dans le noyau ?',
      [
        'Un neutron se transforme en proton',
        'Un proton se transforme en neutron',
        'Deux protons fusionnent en hélium',
        'Un noyau d’hélium absorbe un électron',
      ],
      0,
      'La radioactivité $\beta^-$ correspond à la transformation d’un neutron en proton, avec émission d’un électron et d’un antineutrino.',
    ),
    createQuestion(
      38,
      'HARD',
      'Dans une désintégration $\beta^+$, quelle transformation microscopique modélise le phénomène dans le noyau ?',
      [
        'Un proton se transforme en neutron',
        'Un neutron se transforme en proton',
        'Deux neutrons se transforment en proton',
        'Le noyau perd quatre nucléons',
      ],
      0,
      'La radioactivité $\beta^+$ s’interprète comme la transformation d’un proton en neutron, avec émission d’un positon et d’un neutrino.',
    ),
    createQuestion(
      39,
      'MEDIUM',
      'Pour les noyaux lourds stables, la bande de stabilité se situe en général :',
      [
        'Au-dessus de la droite $N = Z$',
        'Exactement sur la droite $N = Z$',
        'Sous l’axe des abscisses',
        'Sur l’axe des ordonnées',
      ],
      0,
      'Les noyaux lourds stables ont besoin de davantage de neutrons que de protons : on les trouve donc au-dessus de la droite $N = Z$.',
    ),
    createQuestion(
      40,
      'MEDIUM',
      'Une équation nucléaire proposée conserve le nombre de masse mais pas la somme des numéros atomiques. Que faut-il conclure ?',
      [
        'L’équation est incorrecte',
        'L’équation est forcément une émission $\gamma$',
        'L’équation est valable uniquement pour les noyaux lourds',
        'La conservation de la charge n’est pas nécessaire en nucléaire',
      ],
      0,
      'Une équation nucléaire doit vérifier simultanément la conservation du nombre de nucléons et celle de la charge électrique.',
    ),
    createQuestion(
      41,
      'EASY',
      'Un échantillon passe de 5000 à 4970 noyaux radioactifs pendant une courte durée. Combien de noyaux se sont désintégrés pendant cet intervalle ?',
      ['30', '2970', '5000', '4970'],
      0,
      'Le nombre de désintégrations sur l’intervalle vaut la diminution du nombre de noyaux : $5000 - 4970 = 30$.',
    ),
    createQuestion(
      42,
      'EASY',
      'Sur une courte durée $\Delta t$, si 8 noyaux se désintègrent parmi 2000 noyaux présents au départ, la probabilité expérimentale de désintégration pendant cette durée vaut :',
      ['$0{,}004$', '$0{,}04$', '$0{,}4$', '$4$'],
      0,
      'On calcule $p = \dfrac{8}{2000} = 0{,}004$, soit 0,4 %.',
    ),
    createQuestion(
      43,
      'EASY',
      'La probabilité de désintégration d’un noyau par unité de temps est modélisée par :',
      [
        'La constante radioactive $\lambda$',
        'Le nombre de masse $A$',
        'Le numéro atomique $Z$',
        'La température du milieu',
      ],
      0,
      'La constante radioactive $\lambda$ caractérise la probabilité de désintégration par unité de temps.',
    ),
    createQuestion(
      44,
      'EASY',
      'Quelle est l’unité SI de la constante radioactive $\lambda$ ?',
      ['$\mathrm{s^{-1}}$', '$\mathrm{Bq}$', '$\mathrm{s}$', '$\mathrm{J}$'],
      0,
      '$\lambda$ est une probabilité par unité de temps : son unité SI est donc l’inverse d’un temps, soit $\mathrm{s^{-1}}$.',
    ),
    createQuestion(
      45,
      'EASY',
      'Entre deux radionucléides, celui qui possède la plus grande valeur de $\lambda$ se désintègre :',
      [
        'Plus rapidement en moyenne',
        'Plus lentement en moyenne',
        'De façon moins aléatoire',
        'Uniquement par émission $\gamma$',
      ],
      0,
      'Une grande valeur de $\lambda$ signifie une plus forte probabilité de désintégration par unité de temps.',
    ),
    createQuestion(
      46,
      'MEDIUM',
      'À $\lambda$ fixé, si l’on double le nombre de noyaux radioactifs présents dans un échantillon, l’activité initiale :',
      [
        'Double aussi',
        'Est divisée par deux',
        'Reste inchangée',
        'Devient nulle',
      ],
      0,
      'Comme $A = \lambda N$, à constante radioactive identique l’activité est proportionnelle au nombre de noyaux radioactifs.',
    ),
    createQuestion(
      47,
      'MEDIUM',
      'Pendant une même courte durée, deux échantillons d’un même radionucléide sont observés. Lequel subit en moyenne le plus de désintégrations ?',
      [
        'Celui qui contient le plus grand nombre de noyaux radioactifs',
        'Celui qui contient le moins de noyaux radioactifs',
        'Les deux strictement de la même façon quel que soit $N$',
        'Aucun des deux car la radioactivité empêche tout calcul statistique',
      ],
      0,
      'À radionucléide identique, plus il y a de noyaux au départ, plus le nombre moyen de désintégrations sur une courte durée est grand.',
    ),
    createQuestion(
      48,
      'MEDIUM',
      'Le caractère aléatoire de chaque désintégration individuelle empêche-t-il d’obtenir une loi régulière pour un grand nombre de noyaux ?',
      [
        'Non, on obtient une évolution statistique régulière',
        'Oui, toute prévision globale est impossible',
        'Oui, sauf si le noyau émet des rayons $\gamma$',
        'Non, mais seulement pour les noyaux stables',
      ],
      0,
      'L’aléatoire concerne chaque noyau individuellement, alors que l’ensemble d’une grande population suit une loi statistique exploitable.',
    ),
    createQuestion(
      49,
      'MEDIUM',
      'Que peut-on dire de la fonction $N(t)$ modélisant le nombre de noyaux radioactifs restants ?',
      [
        'Elle reste positive et décroît au cours du temps',
        'Elle devient négative après quelques demi-vies',
        'Elle croît quand le temps augmente',
        'Elle est constante pour un radionucléide donné',
      ],
      0,
      'Le nombre de noyaux restants diminue progressivement sans jamais devenir négatif.',
    ),
    createQuestion(
      50,
      'MEDIUM',
      'À un instant donné, un échantillon contient 1000 noyaux radioactifs et 5 se désintègrent pendant une seconde. Quelle est la probabilité expérimentale de désintégration sur cette seconde ?',
      ['$0{,}005$', '$0{,}05$', '$0{,}5$', '$5$'],
      0,
      'La probabilité expérimentale sur l’intervalle vaut $p = \dfrac{5}{1000} = 0{,}005$.',
    ),
    createQuestion(
      51,
      'MEDIUM',
      'Quelle équation différentielle traduit la décroissance radioactive d’une population de noyaux ?',
      [
        '$\dfrac{\mathrm{d}N}{\mathrm{d}t} = -\lambda N$',
        '$\dfrac{\mathrm{d}N}{\mathrm{d}t} = \lambda N$',
        '$\dfrac{\mathrm{d}N}{\mathrm{d}t} = -\dfrac{N}{\lambda}$',
        '$N = \lambda t$',
      ],
      0,
      'Le signe négatif traduit la diminution du nombre de noyaux au cours du temps.',
    ),
    createQuestion(
      52,
      'MEDIUM',
      'Quelle expression est solution du modèle de décroissance radioactive avec $N(0)=N_0$ ?',
      [
        '$N(t) = N_0 e^{-\lambda t}$',
        '$N(t) = N_0 + \lambda t$',
        '$N(t) = N_0 e^{\lambda t}$',
        '$N(t) = \lambda e^{-N_0 t}$',
      ],
      0,
      'La solution d’une équation différentielle de type $y\' = -\lambda y$ est une exponentielle décroissante.',
    ),
    createQuestion(
      53,
      'EASY',
      'Dans l’expression $N(t) = N_0 e^{-\lambda t}$, que représente $N_0$ ?',
      [
        'Le nombre de noyaux radioactifs à la date initiale $t = 0$',
        'Le nombre de noyaux désintégrés après une seconde',
        'La moitié du nombre de noyaux finaux',
        'La valeur de $\lambda$ au carré',
      ],
      0,
      '$N_0$ est la condition initiale du problème, c’est-à-dire le nombre de noyaux présents au début de l’étude.',
    ),
    createQuestion(
      54,
      'MEDIUM',
      'D’après la loi $N(t) = N_0 e^{-\lambda t}$, le quotient $\dfrac{N(t)}{N_0}$ vaut :',
      ['$e^{-\lambda t}$', '$\lambda t$', '$1 - \lambda t$', '$e^{\lambda t}$'],
      0,
      'Il suffit de diviser la loi de décroissance par $N_0$.',
    ),
    createQuestion(
      55,
      'EASY',
      'La courbe représentant $N(t)$ en fonction du temps a l’allure d’une :',
      [
        'Exponentielle décroissante',
        'Droite croissante',
        'Parabole tournée vers le haut',
        'Droite horizontale',
      ],
      0,
      'La décroissance radioactive ne suit pas une loi linéaire mais une loi exponentielle décroissante.',
    ),
    createQuestion(
      56,
      'EASY',
      'D’après le modèle exponentiel, le nombre $N(t)$ de noyaux restants :',
      [
        'Ne peut pas devenir négatif',
        'Change régulièrement de signe',
        'Devient négatif après deux demi-vies',
        'Vaut toujours exactement zéro au bout d’un temps fini',
      ],
      0,
      'Une exponentielle positive reste positive pour tout temps.',
    ),
    createQuestion(
      57,
      'MEDIUM',
      'Si la constante radioactive $\lambda$ est exprimée en $\mathrm{jour^{-1}}$, dans quelle unité doit être exprimé le temps $t$ dans $e^{-\lambda t}$ ?',
      ['En jours', 'En secondes uniquement', 'En mètres', 'En becquerels'],
      0,
      'Le produit $\lambda t$ doit être sans unité, donc $t$ doit être pris dans l’unité de temps compatible avec celle de $\lambda$.',
    ),
    createQuestion(
      58,
      'MEDIUM',
      'Si l’on compare deux radionucléides, celui qui possède la plus grande valeur de $\lambda$ a :',
      [
        'Le plus petit temps de demi-vie',
        'Le plus grand temps de demi-vie',
        'Toujours la plus grande masse',
        'Toujours le plus grand numéro atomique',
      ],
      0,
      'Le temps de demi-vie est inversement lié à $\lambda$ par $t_{1/2} = \ln 2 / \lambda$.',
    ),
    createQuestion(
      59,
      'EASY',
      'À la date $t = t_{1/2}$, le nombre de noyaux restants vaut :',
      ['$N_0/2$', '$N_0$', '$2N_0$', '$N_0/4$'],
      0,
      'Par définition du temps de demi-vie, la population a été divisée par deux.',
    ),
    createQuestion(
      60,
      'EASY',
      'Après deux temps de demi-vie, le nombre de noyaux restants vaut :',
      ['$N_0/4$', '$N_0/2$', '$2N_0$', '$N_0/8$'],
      0,
      'Une première demi-vie divise par 2, puis une seconde demi-vie divise encore par 2 : on obtient $N_0/4$.',
    ),
    createQuestion(
      61,
      'MEDIUM',
      'Quelle expression relie l’activité $A(t)$ d’un échantillon au nombre de noyaux radioactifs restants ?',
      [
        '$A(t) = \lambda N(t)$',
        '$A(t) = \dfrac{N(t)}{\lambda}$',
        '$A(t) = -\lambda / N(t)$',
        '$A(t) = N(t)^2$',
      ],
      0,
      'L’activité est proportionnelle au nombre de noyaux encore radioactifs : $A = \lambda N$.',
    ),
    createQuestion(
      62,
      'EASY',
      'À quoi correspond 1 becquerel (1 Bq) ?',
      [
        'À une désintégration par seconde',
        'À une particule alpha par minute',
        'À un noyau radioactif par litre',
        'À un électron par seconde carrée',
      ],
      0,
      'Le becquerel est l’unité d’activité : 1 Bq correspond à 1 désintégration par seconde.',
    ),
    createQuestion(
      63,
      'MEDIUM',
      'Si le nombre de noyaux radioactifs d’un échantillon est divisé par 2, son activité est :',
      [
        'Divisée par 2',
        'Multipliée par 2',
        'Inchangée',
        'Divisée par 4',
      ],
      0,
      'Comme $A = \lambda N$ pour un radionucléide donné, diviser $N$ par 2 revient aussi à diviser l’activité par 2.',
    ),
    createQuestion(
      64,
      'MEDIUM',
      'Quelle relation lie le temps de demi-vie $t_{1/2}$ à la constante radioactive $\lambda$ ?',
      [
        '$t_{1/2} = \dfrac{\ln 2}{\lambda}$',
        '$t_{1/2} = \lambda \ln 2$',
        '$t_{1/2} = \dfrac{1}{2\lambda^2}$',
        '$t_{1/2} = \dfrac{\lambda}{\ln 2}$',
      ],
      0,
      'Cette relation découle de la condition $N(t_{1/2}) = N_0/2$.',
    ),
    createQuestion(
      65,
      'MEDIUM',
      'Pour un radionucléide de constante radioactive $\lambda = 0{,}693\,\mathrm{h^{-1}}$, le temps de demi-vie vaut environ :',
      ['1 h', '2 h', '0,5 h', '6,93 h'],
      0,
      'On applique $t_{1/2} = \ln 2 / \lambda = 0{,}693 / 0{,}693 = 1\,\mathrm{h}$.',
    ),
    createQuestion(
      66,
      'MEDIUM',
      'Un radionucléide possède un temps de demi-vie de 8 jours. Quelle fraction de la population initiale reste après 24 jours ?',
      ['$1/8$', '$1/2$', '$1/3$', '$1/16$'],
      0,
      '24 jours correspondent à 3 demi-vies, donc la population est multipliée par $(1/2)^3 = 1/8$.',
    ),
    createQuestion(
      67,
      'EASY',
      'L’activité initiale d’un échantillon vaut 160 Bq. Quelle est son activité après une demi-vie ?',
      ['80 Bq', '40 Bq', '160 Bq', '320 Bq'],
      0,
      'L’activité est divisée par deux au bout d’un temps de demi-vie.',
    ),
    createQuestion(
      68,
      'MEDIUM',
      'Pour dater un échantillon ancien, on choisit de préférence un radionucléide dont le temps de demi-vie est :',
      [
        'Du même ordre de grandeur que l’âge recherché',
        'Le plus petit possible',
        'Toujours supérieur à un milliard d’années',
        'Sans importance pour la précision',
      ],
      0,
      'Si le temps de demi-vie est trop court ou trop long devant l’âge étudié, la variation mesurée devient peu exploitable.',
    ),
    createQuestion(
      69,
      'MEDIUM',
      'Pour un examen médical d’imagerie durant quelques heures, on préfère un traceur radioactif dont le temps de demi-vie est :',
      [
        'Court mais suffisant pour la durée de l’examen',
        'Le plus long possible',
        'Toujours supérieur à 100 ans',
        'Nécessairement égal à celui du carbone 14',
      ],
      0,
      'On veut un signal mesurable pendant l’examen, sans prolonger inutilement l’irradiation du patient après celui-ci.',
    ),
    createQuestion(
      70,
      'MEDIUM',
      'Si un échantillon ne possède plus que 25 % de sa population initiale, combien de temps de demi-vie se sont écoulés ?',
      ['2', '1', '3', '4'],
      0,
      '25 % correspond à $1/4 = (1/2)^2$ : il s’est donc écoulé 2 temps de demi-vie.',
    ),
    createQuestion(
      71,
      'MEDIUM',
      'Quelle expression est correcte pour l’activité au cours du temps ?',
      [
        '$A(t) = A_0 e^{-\lambda t}$',
        '$A(t) = A_0 + \lambda t$',
        '$A(t) = \dfrac{A_0}{\lambda t}$',
        '$A(t) = A_0 e^{\lambda t}$',
      ],
      0,
      'Puisque $A = \lambda N$ et que $N(t)$ suit une loi exponentielle décroissante, l’activité suit la même forme.',
    ),
    createQuestion(
      72,
      'EASY',
      'Après trois temps de demi-vie, quelle fraction de l’activité initiale reste ?',
      ['$1/8$', '$1/2$', '$1/3$', '$1/16$'],
      0,
      'L’activité est proportionnelle à $N$. Après 3 demi-vies, il reste $(1/2)^3 = 1/8$ de la valeur initiale.',
    ),
    createQuestion(
      73,
      'MEDIUM',
      'Sur deux courbes de décroissance partant de la même valeur initiale, laquelle descend le plus vite ?',
      [
        'Celle dont la constante radioactive $\lambda$ est la plus grande',
        'Celle dont la constante radioactive $\lambda$ est la plus petite',
        'Elles ont forcément la même pente à tout instant',
        'On ne peut rien dire à partir de $\lambda$',
      ],
      0,
      'Une grande valeur de $\lambda$ signifie une décroissance plus rapide.',
    ),
    createQuestion(
      74,
      'MEDIUM',
      'Dans un problème de datation, connaître $A_0$ ou $N_0$ est utile car cela permet :',
      [
        'De comparer l’état actuel à l’état initial pour estimer le temps écoulé',
        'D’augmenter artificiellement la demi-vie',
        'De rendre le noyau stable',
        'D’éviter toute mesure expérimentale',
      ],
      0,
      'La datation repose sur la comparaison entre la quantité présente aujourd’hui et une référence initiale ou estimée.',
    ),
    createQuestion(
      75,
      'EASY',
      'Pourquoi dit-on que l’activité d’un échantillon est proportionnelle au nombre de noyaux radioactifs qu’il contient ?',
      [
        'Parce que $A = \lambda N$',
        'Parce que $A = N^2$',
        'Parce que $A$ est toujours constante',
        'Parce que l’activité ne dépend jamais du radionucléide',
      ],
      0,
      'Pour un radionucléide donné, $\lambda$ est constante : l’activité est donc directement proportionnelle à $N$.',
    ),
    createQuestion(
      76,
      'MEDIUM',
      'L’activité initiale d’un échantillon vaut 400 Bq. Quelle est son activité après deux temps de demi-vie ?',
      ['100 Bq', '200 Bq', '50 Bq', '25 Bq'],
      0,
      'Deux demi-vies divisent l’activité par 4 : $400 / 4 = 100\,\mathrm{Bq}$.',
    ),
    createQuestion(
      77,
      'HARD',
      'Un radionucléide vérifie $N(t)=N_0 e^{-0{,}231t}$ avec $t$ exprimé en heures. Son temps de demi-vie vaut approximativement :',
      ['3 h', '0,23 h', '6 h', '30 h'],
      0,
      'On applique $t_{1/2} = \ln 2 / 0{,}231 \approx 0{,}693 / 0{,}231 \approx 3\,\mathrm{h}$.',
    ),
    createQuestion(
      78,
      'MEDIUM',
      'Le modèle exponentiel de décroissance est-il contradictoire avec le caractère aléatoire des désintégrations individuelles ?',
      [
        'Non, car il décrit une moyenne statistique sur un grand nombre de noyaux',
        'Oui, car toute loi mathématique est impossible en radioactivité',
        'Oui, sauf pour les émissions $\alpha$',
        'Non, mais seulement si la température reste nulle',
      ],
      0,
      'Le modèle mathématique rend compte du comportement global d’une population de noyaux, pas de l’instant exact de chaque désintégration.',
    ),
    createQuestion(
      79,
      'MEDIUM',
      'Pourquoi la dérivée $\dfrac{\mathrm{d}N}{\mathrm{d}t}$ est-elle négative pendant la décroissance radioactive ?',
      [
        'Parce que le nombre de noyaux restants diminue au cours du temps',
        'Parce que $N$ devient imaginaire',
        'Parce que la charge électrique du noyau change de signe',
        'Parce que $\lambda$ est une longueur',
      ],
      0,
      'Quand une grandeur décroît, sa dérivée est négative. Ici, le nombre de noyaux radioactifs diminue avec le temps.',
    ),
    createQuestion(
      80,
      'HARD',
      'Dans l’approximation $p = \lambda \Delta t$, pourquoi le produit $\lambda \Delta t$ doit-il être sans unité ?',
      [
        'Parce qu’une probabilité est une grandeur sans unité',
        'Parce qu’il représente une masse',
        'Parce qu’il doit être exprimé en becquerels',
        'Parce qu’il s’agit d’une température réduite',
      ],
      0,
      'Une probabilité n’a pas d’unité. Comme $\lambda$ est en inverse d’un temps, il faut que $\Delta t$ soit dans l’unité compatible.',
    ),
    createQuestion(
      81,
      'EASY',
      'Le principe d’une datation radioactive consiste essentiellement à :',
      [
        'Comparer une quantité actuelle de noyaux radioactifs à une référence initiale',
        'Mesurer directement l’année de formation au microscope',
        'Chercher un noyau stable en plus grand nombre',
        'Transformer l’échantillon en noyau artificiel',
      ],
      0,
      'La datation repose sur la diminution prévisible d’une population de noyaux radioactifs au cours du temps.',
    ),
    createQuestion(
      82,
      'MEDIUM',
      'Pour choisir un radionucléide adapté à une datation, on cherche un temps de demi-vie :',
      [
        'Du même ordre de grandeur que l’âge étudié',
        'Toujours très inférieur à l’âge étudié',
        'Toujours très supérieur à l’âge étudié',
        'Sans lien avec l’âge étudié',
      ],
      0,
      'Sinon la variation relative est soit trop faible, soit trop extrême pour être exploitée avec précision.',
    ),
    createQuestion(
      83,
      'MEDIUM',
      'Pourquoi le carbone 14 est-il bien adapté à la datation d’objets en bois ou en tissu ?',
      [
        'Parce qu’il concerne une matière organique issue du vivant',
        'Parce qu’il ne se désintègre jamais',
        'Parce qu’il n’émet aucun rayonnement',
        'Parce qu’il est surtout présent dans les roches magmatiques',
      ],
      0,
      'Les organismes vivants échangent du carbone avec leur environnement. Après leur mort, cet échange cesse et la décroissance du carbone 14 peut être exploitée.',
    ),
    createQuestion(
      84,
      'MEDIUM',
      'Pour dater des roches très anciennes, on préfère souvent utiliser :',
      [
        'Un couple à demi-vie longue comme potassium-argon',
        'Le carbone 14 dans tous les cas',
        'Uniquement l’iode 123',
        'Un rayonnement gamma sans isotope',
      ],
      0,
      'Les roches très anciennes nécessitent un radionucléide dont le temps caractéristique est beaucoup plus grand que celui du carbone 14.',
    ),
    createQuestion(
      85,
      'MEDIUM',
      'Si l’activité d’un échantillon vaut aujourd’hui un quart de son activité initiale, combien de temps de demi-vie se sont écoulés ?',
      ['2', '1', '3', '4'],
      0,
      'Un quart correspond à $(1/2)^2$ : il s’est donc écoulé 2 demi-vies.',
    ),
    createQuestion(
      86,
      'EASY',
      'Quel type d’échantillon est naturellement adapté à une datation au carbone 14 ?',
      [
        'Un morceau de bois ancien',
        'Un lingot de plomb pur',
        'Un bloc de granite sans matière organique',
        'Une feuille d’aluminium',
      ],
      0,
      'Le carbone 14 permet de dater des matières ayant appartenu à un organisme vivant, comme le bois.',
    ),
    createQuestion(
      87,
      'MEDIUM',
      'Dans une datation potassium-argon, l’âge obtenu est lié au moment où :',
      [
        'La roche s’est formée et a commencé à piéger l’argon produit',
        'La roche a été exposée à la lumière',
        'Le laboratoire a mesuré l’échantillon',
        'L’échantillon a été poli',
      ],
      0,
      'Le modèle relie l’âge à l’évolution radioactive depuis la formation et la fermeture du système minéral étudié.',
    ),
    createQuestion(
      88,
      'MEDIUM',
      'Si le temps de demi-vie choisi est beaucoup trop court devant l’âge réel de l’échantillon, quelle difficulté rencontre-t-on ?',
      [
        'Il reste trop peu de noyaux radioactifs pour une mesure précise',
        'Le noyau devient stable au moment de la mesure',
        'L’activité augmente avec le temps',
        'On obtient forcément un âge nul',
      ],
      0,
      'Après un trop grand nombre de demi-vies, la quantité restante peut devenir très faible et donc difficile à mesurer correctement.',
    ),
    createQuestion(
      89,
      'MEDIUM',
      'Si le temps de demi-vie choisi est beaucoup trop long devant l’âge réel de l’échantillon, quelle difficulté apparaît ?',
      [
        'La variation relative mesurée est trop faible',
        'Tous les noyaux ont déjà disparu',
        'Le matériau cesse d’émettre instantanément',
        'La charge électrique du noyau change pendant la mesure',
      ],
      0,
      'Quand la décroissance est trop lente à l’échelle du problème, l’écart entre l’état initial et l’état actuel devient difficile à exploiter.',
    ),
    createQuestion(
      90,
      'HARD',
      'Une datation radioactive fiable suppose généralement que l’échantillon ait constitué approximativement :',
      [
        'Un système fermé vis-à-vis de l’élément étudié',
        'Un système chauffé à température constante',
        'Un système sans neutrons',
        'Un système dépourvu de noyaux stables',
      ],
      0,
      'Si l’échantillon gagne ou perd l’élément étudié après sa formation, l’âge estimé peut être faussé.',
    ),
    createQuestion(
      91,
      'EASY',
      'En médecine nucléaire, un traceur radioactif sert principalement à :',
      [
        'Suivre le fonctionnement d’un organe ou d’un tissu',
        'Remplacer totalement les rayons X en chirurgie',
        'Rendre un organe radioactif de façon permanente',
        'Mesurer directement la température du corps',
      ],
      0,
      'Le traceur émet un rayonnement détectable qui renseigne sur le fonctionnement ou la répartition de l’organe étudié.',
    ),
    createQuestion(
      92,
      'EASY',
      'Quelle différence essentielle distingue la radiographie classique de la médecine nucléaire ?',
      [
        'La radiographie utilise une source externe, la médecine nucléaire un traceur introduit dans l’organisme',
        'La radiographie n’utilise jamais de rayonnement',
        'La médecine nucléaire ne produit aucune image',
        'La radiographie ne concerne que les os et jamais les organes',
      ],
      0,
      'En radiographie, la source de rayonnement est extérieure au patient. En médecine nucléaire, c’est le traceur injecté ou ingéré qui émet le rayonnement détecté.',
    ),
    createQuestion(
      93,
      'MEDIUM',
      'Pour un examen diagnostique d’imagerie, on choisit en général un traceur dont le temps de demi-vie est :',
      [
        'Relativement court',
        'Le plus long possible',
        'Toujours supérieur à 1000 ans',
        'Égal à celui de l’uranium 238',
      ],
      0,
      'Un temps de demi-vie court limite la durée d’irradiation tout en laissant le temps de réaliser l’examen.',
    ),
    createQuestion(
      94,
      'EASY',
      'La radiothérapie a pour objectif principal :',
      [
        'De détruire des cellules cancéreuses',
        'D’augmenter artificiellement la demi-vie des noyaux',
        'De fabriquer des isotopes stables',
        'De mesurer la vitesse de la lumière',
      ],
      0,
      'La radiothérapie exploite le pouvoir ionisant du rayonnement pour endommager ou détruire des cellules tumorales.',
    ),
    createQuestion(
      95,
      'MEDIUM',
      'Dans une scintigraphie, la gamma-caméra détecte principalement :',
      [
        'Les photons émis par le traceur radioactif',
        'Les ondes sonores du patient',
        'Des neutrons thermiques',
        'La masse de l’organe observé',
      ],
      0,
      'La caméra détecte le rayonnement issu du traceur afin de reconstruire une image fonctionnelle.',
    ),
    createQuestion(
      96,
      'MEDIUM',
      'La tomographie par émission de positons (TEP) utilise des radionucléides qui émettent :',
      [
        'Des positons',
        'Uniquement des noyaux d’hélium',
        'Des neutrons lents',
        'Des ions métalliques stables',
      ],
      0,
      'Comme son nom l’indique, la TEP repose sur l’émission de positons par le traceur utilisé.',
    ),
    createQuestion(
      97,
      'MEDIUM',
      'Pourquoi l’activité administrée à un patient pour un examen d’imagerie est-elle choisie avec soin ?',
      [
        'Pour obtenir une image exploitable en limitant l’irradiation',
        'Pour rendre l’organe définitivement radioactif',
        'Pour allonger le temps de demi-vie du radionucléide',
        'Pour empêcher toute émission gamma',
      ],
      0,
      'On recherche un compromis entre qualité du signal mesuré et limitation de la dose reçue.',
    ),
    createQuestion(
      98,
      'MEDIUM',
      'Dans l’écriture chimique $\ce{NaI(aq)}$, l’indication $(aq)$ signifie que l’espèce est :',
      [
        'En solution aqueuse',
        'À l’état solide',
        'À l’état gazeux',
        'Sous forme de plasma',
      ],
      0,
      'La notation $\ce{(aq)}$ désigne une espèce dissoute dans l’eau. Cette écriture relève du formalisme chimique géré par mhchem.',
    ),
    createQuestion(
      99,
      'HARD',
      'Pour un examen diagnostique, pourquoi préfère-t-on souvent l’iode 123 à un isotope de demi-vie beaucoup plus longue ?',
      [
        'Parce qu’il permet l’imagerie tout en limitant l’irradiation prolongée du patient',
        'Parce qu’il est totalement non radioactif',
        'Parce qu’il n’émet jamais de photon détectable',
        'Parce qu’il transforme la thyroïde en écran protecteur',
      ],
      0,
      'Un isotope adapté à l’imagerie doit fournir un signal pendant l’examen, puis décroître assez vite pour éviter une exposition inutilement longue.',
    ),
    createQuestion(
      100,
      'MEDIUM',
      'L’utilisation médicale d’un radionucléide est considérée pertinente lorsque :',
      [
        'Le bénéfice diagnostique ou thérapeutique attendu justifie un risque radiologique maîtrisé',
        'Le rayonnement est forcément sans aucun effet biologique',
        'Le patient reçoit la dose la plus élevée possible',
        'Aucune mesure de protection n’est nécessaire',
      ],
      0,
      'Comme pour tout acte médical, la justification repose sur un rapport bénéfice-risque favorable et sur la maîtrise de l’exposition.',
    ),
    createQuestion(
      101,
      'EASY',
      'Quelles sont les trois grandes stratégies de radioprotection au voisinage d’une source ?',
      [
        'Réduire le temps d’exposition, augmenter la distance, utiliser un écran adapté',
        'Augmenter le temps d’exposition, se rapprocher, retirer l’écran',
        'Mesurer la température, agiter, refroidir',
        'Augmenter la masse de la source, chauffer, comprimer',
      ],
      0,
      'La radioprotection repose classiquement sur le triptyque temps, distance, écran.',
    ),
    createQuestion(
      102,
      'MEDIUM',
      'Si l’on modélise une source ponctuelle, quel effet a un doublement de la distance sur l’intensité reçue ?',
      [
        'Elle est divisée approximativement par 4',
        'Elle est doublée',
        'Elle est divisée par 2',
        'Elle reste identique',
      ],
      0,
      'Dans le modèle de décroissance géométrique en $1/d^2$, doubler la distance divise l’intensité par $2^2 = 4$.',
    ),
    createQuestion(
      103,
      'EASY',
      'Quel rayonnement est en général arrêté par une simple feuille de papier ou par la couche superficielle de la peau ?',
      ['Le rayonnement $\alpha$', 'Le rayonnement $\gamma$', 'Le rayonnement X le plus énergétique', 'Le neutron'],
      0,
      'Les particules $\alpha$ sont peu pénétrantes, même si elles restent dangereuses en cas de contamination interne.',
    ),
    createQuestion(
      104,
      'EASY',
      'Quel type d’écran est souvent adapté pour atténuer efficacement un rayonnement $\beta$ ?',
      [
        'Une plaque mince d’aluminium ou de plastique',
        'Une simple feuille de papier dans tous les cas',
        'Aucun écran ne peut agir',
        'Uniquement un bloc de béton de plusieurs mètres',
      ],
      0,
      'Le rayonnement $\beta$ est plus pénétrant que $\alpha$, mais il peut être atténué par des matériaux légers d’épaisseur modérée.',
    ),
    createQuestion(
      105,
      'EASY',
      'Pour atténuer un rayonnement $\gamma$, on utilise de préférence :',
      [
        'Un matériau dense et suffisamment épais, comme le plomb',
        'Uniquement une feuille de papier',
        'Une vitre très fine',
        'Aucun matériau car le rayonnement $\gamma$ traverse tout sans atténuation',
      ],
      0,
      'Le rayonnement $\gamma$ étant très pénétrant, on privilégie des matériaux denses comme le plomb ou le béton.',
    ),
    createQuestion(
      106,
      'MEDIUM',
      'L’efficacité d’un écran protecteur dépend principalement :',
      [
        'De la nature du matériau et de son épaisseur',
        'Du nom de l’hôpital',
        'De la couleur de l’écran',
        'Uniquement de la température ambiante',
      ],
      0,
      'La capacité à atténuer un rayonnement dépend à la fois du type de particule ou photon concerné, du matériau utilisé et de son épaisseur.',
    ),
    createQuestion(
      107,
      'EASY',
      'À quoi sert un dosimètre porté par un travailleur exposé ?',
      [
        'À suivre la dose reçue au cours du temps',
        'À transformer le rayonnement en lumière visible',
        'À mesurer le nombre de protons du noyau',
        'À rendre la source stable',
      ],
      0,
      'Le dosimètre permet de surveiller l’exposition individuelle afin de respecter les limites et procédures de sécurité.',
    ),
    createQuestion(
      108,
      'EASY',
      'Manipuler une source à l’aide d’une pince ou d’un système télécommandé permet surtout :',
      [
        'D’augmenter la distance à la source',
        'De réduire la masse du radionucléide',
        'D’annuler tout rayonnement émis',
        'De changer le type de radioactivité',
      ],
      0,
      'L’éloignement est l’un des trois leviers fondamentaux de radioprotection.',
    ),
    createQuestion(
      109,
      'EASY',
      'Pourquoi limite-t-on le temps passé au voisinage d’une source radioactive ?',
      [
        'Parce qu’une exposition plus courte réduit la dose reçue',
        'Parce que cela augmente la demi-vie du radionucléide',
        'Parce que le rayonnement s’arrête après quelques minutes',
        'Parce que cela rend le matériau stable',
      ],
      0,
      'À intensité comparable, la dose reçue augmente avec la durée d’exposition.',
    ),
    createQuestion(
      110,
      'MEDIUM',
      'Pourquoi la nature du rayonnement doit-elle être connue avant de choisir une protection ?',
      [
        'Parce qu’un écran efficace contre $\alpha$ ne l’est pas forcément contre $\gamma$',
        'Parce que tous les rayonnements traversent exactement les mêmes matériaux',
        'Parce que la radioprotection ne dépend que de la couleur de la source',
        'Parce que la distance n’a d’effet que pour les particules $\alpha$',
      ],
      0,
      'Les rayonnements n’ont pas le même pouvoir de pénétration : le choix du matériau et de l’épaisseur de l’écran dépend donc du rayonnement considéré.',
    ),
    createQuestion(
      111,
      'MEDIUM',
      'Pour dater une roche volcanique très ancienne, quel choix est le plus pertinent ?',
      [
        'Utiliser un radionucléide à longue demi-vie, comme dans une méthode potassium-argon',
        'Utiliser systématiquement le carbone 14',
        'Choisir un isotope de demi-vie de quelques heures',
        'Ne mesurer que des rayons gamma sans radiochronologie',
      ],
      0,
      'Les temps géologiques exigent des radionucléides dont le temps caractéristique est très grand.',
    ),
    createQuestion(
      112,
      'MEDIUM',
      'Pour un examen diagnostique bref, quel type de radionucléide est le plus approprié ?',
      [
        'Un radionucléide de demi-vie courte mais compatible avec la durée de l’examen',
        'Un radionucléide de demi-vie de plusieurs millions d’années',
        'Un noyau stable non radioactif',
        'N’importe lequel, la demi-vie n’a pas d’importance',
      ],
      0,
      'On veut une activité suffisante pendant l’acquisition, sans exposition prolongée après l’examen.',
    ),
    createQuestion(
      113,
      'MEDIUM',
      'Quelle affirmation est correcte à propos des écrans de protection ?',
      [
        'On n’utilise pas le même type d’écran selon que le rayonnement est $\alpha$, $\beta$ ou $\gamma$',
        'Une feuille de papier convient toujours pour le rayonnement $\gamma$',
        'Le plomb est inutile pour le rayonnement $\gamma$',
        'L’épaisseur d’un écran n’a aucun rôle',
      ],
      0,
      'Chaque rayonnement possède un pouvoir de pénétration différent, d’où des stratégies de protection différentes.',
    ),
    createQuestion(
      114,
      'MEDIUM',
      'Parmi les énoncés suivants, lequel décrit correctement la logique bénéfice-risque en médecine nucléaire ?',
      [
        'On accepte une exposition contrôlée lorsqu’elle apporte une information ou un soin utile',
        'Tout rayonnement médical est sans effet biologique donc sans contrainte',
        'Le meilleur examen est toujours celui qui irradie le plus',
        'La radioprotection n’a plus d’intérêt dès qu’il s’agit d’un acte médical',
      ],
      0,
      'Un acte d’imagerie ou de traitement n’est justifié que si son utilité clinique dépasse le risque radiologique, qui doit être minimisé.',
    ),
    createQuestion(
      115,
      'MEDIUM',
      'À source et distance inchangées, si un opérateur reste deux fois plus longtemps exposé, la dose reçue est en première approximation :',
      [
        'Deux fois plus grande',
        'Quatre fois plus petite',
        'Identique',
        'Divisée par deux',
      ],
      0,
      'À intensité comparable, la dose reçue croît avec la durée d’exposition.',
    ),
    createQuestion(
      116,
      'EASY',
      'Quel matériau est le plus classique pour protéger contre un rayonnement $\gamma$ ?',
      ['Le plomb', 'Le papier fin', 'Le carton léger', 'Le tissu'],
      0,
      'Le plomb est dense et donc efficace pour atténuer un rayonnement très pénétrant comme $\gamma$.',
    ),
    createQuestion(
      117,
      'MEDIUM',
      'Si l’activité actuelle d’un échantillon vaut $A = A_0/8$, combien de temps de demi-vie se sont écoulés ?',
      ['3', '2', '4', '8'],
      0,
      'On a $1/8 = (1/2)^3$, donc 3 demi-vies se sont écoulées.',
    ),
    createQuestion(
      118,
      'MEDIUM',
      'Pourquoi un radionucléide de demi-vie très longue est-il rarement idéal comme traceur diagnostique ?',
      [
        'Parce qu’il peut irradier inutilement le patient longtemps après l’examen',
        'Parce qu’il n’émet jamais de rayonnement',
        'Parce qu’il devient stable avant l’injection',
        'Parce qu’il ne peut être dissous dans l’eau',
      ],
      0,
      'Une demi-vie trop longue maintient une activité résiduelle plus durable que nécessaire.',
    ),
    createQuestion(
      119,
      'MEDIUM',
      'Pourquoi un radionucléide de demi-vie beaucoup trop courte peut-il être inadapté à un examen ?',
      [
        'Parce que l’activité peut devenir trop faible avant la fin des mesures',
        'Parce qu’il protège automatiquement le patient du rayonnement',
        'Parce qu’il devient plus pénétrant avec le temps',
        'Parce qu’il empêche toute détection gamma',
      ],
      0,
      'Si la décroissance est trop rapide, le signal peut chuter avant que l’image ne soit correctement acquise.',
    ),
    createQuestion(
      120,
      'MEDIUM',
      'Quel critère relie une bonne méthode de datation radioactive à l’âge de l’objet étudié ?',
      [
        'Le temps de demi-vie du radionucléide doit être adapté à l’échelle de temps recherchée',
        'Il faut toujours choisir le radionucléide le plus radioactif',
        'Il faut toujours choisir le même isotope pour tous les objets',
        'Le choix de l’isotope ne dépend jamais du matériau',
      ],
      0,
      'Le choix du radionucléide dépend de l’ordre de grandeur de l’âge visé et du type d’échantillon étudié.',
    ),
    createQuestion(
      121,
      'MEDIUM',
      'Dans ce cas d’étude, quel est le rapport $A/A_0$ entre l’activité actuelle et l’activité de référence ?',
      ['$0{,}25$', '$0{,}75$', '$4$', '$3{,}75$'],
      0,
      'On calcule $A/A_0 = 3{,}75 / 15{,}0 = 0{,}25$.',
    ),
    createQuestion(
      122,
      'MEDIUM',
      'Un rapport $A/A_0 = 0{,}25$ correspond à :',
      ['Deux temps de demi-vie', 'Un temps de demi-vie', 'Trois temps de demi-vie', 'Quatre temps de demi-vie'],
      0,
      '0,25 est égal à $1/4 = (1/2)^2$, donc deux demi-vies se sont écoulées.',
    ),
    createQuestion(
      123,
      'HARD',
      'Avec $t_{1/2} = 5730$ ans, l’âge estimé de l’échantillon vaut environ :',
      ['11 460 ans', '5 730 ans', '2 865 ans', '22 920 ans'],
      0,
      'Deux demi-vies correspondent à $2 \times 5730 = 11\,460$ ans.',
    ),
    createQuestion(
      124,
      'EASY',
      'Si l’on avait mesuré $A = A_0/2$ au lieu de $A = A_0/4$, combien de demi-vies se seraient écoulées ?',
      ['Une demi-vie', 'Deux demi-vies', 'Trois demi-vies', 'Aucune'],
      0,
      'Par définition, $A = A_0/2$ correspond à une seule demi-vie.',
    ),
    createQuestion(
      125,
      'EASY',
      'Pourquoi un manche en bois se prête-t-il à une datation au carbone 14 ?',
      [
        'Parce qu’il s’agit d’une matière organique issue du vivant',
        'Parce qu’il contient naturellement du plomb',
        'Parce qu’il est forcément radioactif artificiel',
        'Parce qu’il ne contient aucun carbone stable',
      ],
      0,
      'Le bois a appartenu à un organisme vivant qui échangeait du carbone avec son environnement.',
    ),
    createQuestion(
      126,
      'MEDIUM',
      'Quel phénomène fausserait le plus directement cette datation s’il apportait du carbone récent à l’échantillon ?',
      [
        'Une contamination par de la matière organique plus récente',
        'Un simple nettoyage mécanique de la surface',
        'La mesure de la masse au laboratoire',
        'Le choix d’une verrerie plus grande',
      ],
      0,
      'Un apport de carbone récent augmente artificiellement l’activité mesurée et tend à rajeunir l’âge apparent.',
    ),
    createQuestion(
      127,
      'HARD',
      'Si l’échantillon reçoit du carbone récent après son enfouissement, l’âge estimé sera le plus souvent :',
      [
        'Trop jeune',
        'Trop vieux',
        'Exact dans tous les cas',
        'Nul par définition',
      ],
      0,
      'Un apport de carbone récent augmente la quantité de carbone 14 mesurée, donc l’échantillon paraît moins ancien qu’il ne l’est réellement.',
    ),
    createQuestion(
      128,
      'MEDIUM',
      'Que signifie ici l’hypothèse “le système est fermé pour le carbone depuis l’enfouissement” ?',
      [
        'Que l’échantillon n’a plus échangé significativement de carbone avec l’extérieur',
        'Que l’échantillon est conservé dans une boîte métallique',
        'Que tous les noyaux sont devenus stables',
        'Que la température est restée constante au degré près',
      ],
      0,
      'Sans cette hypothèse, la comparaison entre l’activité actuelle et l’activité de référence perd sa signification chronologique.',
    ),
    createQuestion(
      129,
      'MEDIUM',
      'Pourquoi le carbone 14 convient-il bien à un âge de l’ordre de $10^4$ ans ?',
      [
        'Parce que son temps de demi-vie de 5730 ans est du même ordre de grandeur',
        'Parce que son temps de demi-vie vaut quelques secondes',
        'Parce qu’il est totalement stable',
        'Parce qu’il n’émet aucun rayonnement détectable',
      ],
      0,
      'Un temps de demi-vie de quelques milliers d’années permet de conserver une variation mesurable pour des objets archéologiques.',
    ),
    createQuestion(
      130,
      'HARD',
      'Si l’activité mesurée devient très proche du bruit de fond de l’appareil, quel effet principal cela a-t-il sur la datation ?',
      [
        'L’incertitude sur l’âge estimé augmente',
        'L’âge devient automatiquement égal à zéro',
        'Le radionucléide cesse de se désintégrer',
        'La demi-vie change',
      ],
      0,
      'Quand le signal utile devient trop faible devant le bruit de fond, la précision de la mesure se dégrade fortement.',
    ),
    createQuestion(
      131,
      'MEDIUM',
      'Dans le contexte de la scintigraphie décrite, l’écriture $\ce{NaI(aq)}$ désigne :',
      [
        'Une solution aqueuse d’iodure de sodium',
        'Un gaz d’iode pur',
        'Un alliage solide sodium-iode',
        'Un noyau stable d’iode sans charge',
      ],
      0,
      'La notation chimique $\ce{NaI(aq)}$ signifie que l’iodure de sodium est dissous dans l’eau.',
    ),
    createQuestion(
      132,
      'MEDIUM',
      'Pourquoi une gamma-caméra peut-elle former une image après l’injection du traceur ?',
      [
        'Parce qu’elle détecte les photons émis par le traceur depuis l’intérieur du corps',
        'Parce qu’elle mesure directement le nombre de neutrons de la thyroïde',
        'Parce qu’elle fabrique le traceur au moment de l’examen',
        'Parce qu’elle arrête tous les rayonnements avant qu’ils ne sortent du patient',
      ],
      0,
      'Le traceur émet un rayonnement détectable à l’extérieur, ce qui permet d’obtenir une image fonctionnelle.',
    ),
    createQuestion(
      133,
      'MEDIUM',
      'Pourquoi un traceur de demi-vie d’une dizaine d’heures est-il préférable à un traceur de plusieurs mois pour un examen de quelques heures ?',
      [
        'Parce qu’il reste détectable pendant l’examen tout en limitant l’irradiation prolongée',
        'Parce qu’il ne se désintègre jamais pendant l’examen',
        'Parce qu’il protège naturellement du rayonnement gamma',
        'Parce qu’il dispense de toute radioprotection pour le personnel',
      ],
      0,
      'Le choix du traceur vise un compromis : activité suffisante pendant l’acte, mais décroissance assez rapide ensuite.',
    ),
    createQuestion(
      134,
      'MEDIUM',
      'Dans cet examen, quel est l’intérêt principal d’utiliser un radionucléide adapté à l’imagerie plutôt qu’à la radiothérapie ?',
      [
        'Obtenir une information diagnostique sans chercher à détruire les tissus',
        'Augmenter la dose absorbée par le patient',
        'Rendre le patient émetteur gamma de façon permanente',
        'Supprimer tout besoin de caméra de détection',
      ],
      0,
      'L’objectif d’un examen diagnostique est de voir et d’analyser un fonctionnement, pas de traiter par destruction cellulaire.',
    ),
    createQuestion(
      135,
      'EASY',
      'Après l’injection, quel geste du personnel réduit efficacement l’exposition lorsqu’il n’est plus nécessaire de rester près de la patiente ?',
      [
        'S’éloigner de la source',
        'Rester au plus près pour observer en continu',
        'Retirer tout écran de protection',
        'Augmenter volontairement la durée de présence',
      ],
      0,
      'Augmenter la distance est l’un des moyens les plus simples et les plus efficaces de réduire l’exposition.',
    ),
    createQuestion(
      136,
      'EASY',
      'D’après le schéma simplifié de radioprotection, quel matériau est le plus adapté contre le rayonnement $\gamma$ ?',
      ['Le plomb', 'Le papier', 'Le carton fin', 'Le bois léger'],
      0,
      'Le rayonnement $\gamma$ est très pénétrant : on privilégie des matériaux denses comme le plomb.',
    ),
    createQuestion(
      137,
      'MEDIUM',
      'Quel rayonnement du schéma est généralement arrêté par un obstacle très léger comme une feuille de papier ?',
      ['Le rayonnement $\alpha$', 'Le rayonnement $\gamma$', 'Le rayonnement X très pénétrant', 'Tous les rayonnements de la même façon'],
      0,
      'Le rayonnement $\alpha$ est le moins pénétrant des rayonnements usuels étudiés ici.',
    ),
    createQuestion(
      138,
      'EASY',
      'Quel est le rôle d’un dosimètre porté par le personnel d’un service de médecine nucléaire ?',
      [
        'Suivre l’exposition reçue par chaque travailleur',
        'Remplacer la gamma-caméra pendant l’examen',
        'Stabiliser le noyau radioactif injecté',
        'Mesurer directement la masse de la thyroïde',
      ],
      0,
      'Le dosimètre sert au suivi individuel de l’exposition afin de vérifier le respect des procédures et limites de sécurité.',
    ),
    createQuestion(
      139,
      'MEDIUM',
      'Si un opérateur double sa distance à la patiente après l’injection, l’intensité reçue est en première approximation :',
      [
        'Quatre fois plus faible',
        'Deux fois plus forte',
        'Inchangée',
        'Seulement un peu plus faible sans règle simple',
      ],
      0,
      'Dans un modèle ponctuel simple, l’intensité varie comme l’inverse du carré de la distance.',
    ),
    createQuestion(
      140,
      'MEDIUM',
      'Quelle conclusion résume le mieux ce cas d’imagerie médicale ?',
      [
        'L’examen est pertinent si le bénéfice médical est réel et si le risque radiologique est maîtrisé par le choix du traceur et la radioprotection',
        'Toute exposition médicale est à proscrire sans exception',
        'La radioprotection est inutile dès que le patient reçoit un traceur',
        'Il faut toujours choisir le traceur le plus durable pour améliorer l’image',
      ],
      0,
      'Le cadre médical repose à la fois sur la justification de l’acte et sur l’optimisation de l’exposition pour le patient comme pour le personnel.',
    ),
  ],
  sections: [
    {
      title: 'Stabilité des noyaux',
      description:
        'Lire un diagramme (N;Z), distinguer isotopes et noyaux radioactifs, puis écrire correctement une équation nucléaire.',
      order: 1,
      quizzes: [
        {
          title: 'Lire un diagramme (N;Z)',
          slug: 'lire-un-diagramme-n-z',
          description:
            'Repérer les axes, interpréter les points du diagramme et comprendre où se situe la bande de stabilité.',
          order: 1,
          stage: 'DISCOVER',
          items: buildQuestionItems(1),
        },
        {
          title: 'Isotopes, stabilité et instabilité',
          slug: 'isotopes-stabilite-et-instabilite',
          description:
            'Distinguer isotopes, noyaux stables et noyaux radioactifs, puis reconnaître les grands types de radioactivité.',
          order: 2,
          stage: 'DISCOVER',
          items: buildQuestionItems(11),
        },
        {
          title: 'Écrire une équation nucléaire',
          slug: 'ecrire-une-equation-nucleaire',
          description:
            'Appliquer les lois de conservation pour compléter ou vérifier des équations de désintégration.',
          order: 3,
          stage: 'PRACTICE',
          items: buildQuestionItems(21),
        },
        {
          title: 'Bilan stabilité et radioactivité',
          slug: 'bilan-stabilite-et-radioactivite',
          description:
            'Réinvestir les idées de stabilité, de radioactivité et de conservation dans une série de synthèse.',
          order: 4,
          stage: 'MASTER',
          items: buildQuestionItems(31),
        },
      ],
    },
    {
      title: 'Loi de décroissance radioactive',
      description:
        'Passer du caractère aléatoire d’une désintégration individuelle à une loi statistique sur une population de noyaux.',
      order: 2,
      quizzes: [
        {
          title: 'Compter des désintégrations',
          slug: 'compter-des-desintegrations',
          description:
            'Relier nombre de noyaux, probabilité de désintégration et constante radioactive sur de courtes durées.',
          order: 1,
          stage: 'DISCOVER',
          items: buildQuestionItems(41),
        },
        {
          title: 'Loi de décroissance radioactive',
          slug: 'loi-de-decroissance-radioactive',
          description:
            'Reconnaître l’équation différentielle du modèle et exploiter sa solution exponentielle.',
          order: 2,
          stage: 'DISCOVER',
          items: buildQuestionItems(51),
        },
        {
          title: 'Activité et temps de demi-vie',
          slug: 'activite-et-temps-de-demi-vie',
          description:
            'Manipuler l’activité, le becquerel et le temps de demi-vie sur des calculs courts.',
          order: 3,
          stage: 'PRACTICE',
          items: buildQuestionItems(61),
        },
        {
          title: 'Bilan décroissance radioactive',
          slug: 'bilan-decroissance-radioactive',
          description:
            'Combiner modèle exponentiel, activité et lecture quantitative des demi-vies dans une série de synthèse.',
          order: 4,
          stage: 'MASTER',
          items: buildQuestionItems(71),
        },
      ],
    },
    {
      title: 'Applications de la radioactivité',
      description:
        'Relier la loi de décroissance à la datation, à l’imagerie médicale et aux principes de radioprotection.',
      order: 3,
      quizzes: [
        {
          title: 'Application à la datation',
          slug: 'application-a-la-datation',
          description:
            'Choisir un radionucléide adapté, comprendre le rôle des conditions initiales et interpréter les limites d’une datation.',
          order: 1,
          stage: 'DISCOVER',
          items: buildQuestionItems(81),
        },
        {
          title: 'Applications médicales',
          slug: 'applications-medicales',
          description:
            'Comprendre ce qu’apporte un traceur radioactif en imagerie et distinguer diagnostic et traitement.',
          order: 2,
          stage: 'DISCOVER',
          items: buildQuestionItems(91),
        },
        {
          title: 'Protection contre les rayonnements',
          slug: 'protection-contre-les-rayonnements',
          description:
            'Identifier les leviers de radioprotection et choisir un écran adapté au rayonnement considéré.',
          order: 3,
          stage: 'PRACTICE',
          items: buildQuestionItems(101),
        },
        {
          title: 'Bilan applications et interprétation',
          slug: 'bilan-applications-et-interpretation',
          description:
            'Réinvestir dans une même série le choix d’un isotope, l’interprétation d’une demi-vie et les principes de protection.',
          order: 4,
          stage: 'MASTER',
          items: buildQuestionItems(111),
        },
      ],
    },
    {
      title: 'Cas de synthèse',
      description:
        'Résoudre deux études guidées mobilisant ensemble datation radioactive, imagerie médicale et radioprotection.',
      order: 4,
      quizzes: [
        {
          title: 'Cas d’étude - dater un échantillon',
          slug: 'cas-d-etude-dater-un-echantillon',
          description:
            'Exploiter une activité mesurée, une activité de référence et un temps de demi-vie pour estimer l’âge d’un objet en bois.',
          order: 1,
          stage: 'PRACTICE',
          items: [
            {
              type: 'GROUP',
              title: 'Cas d’étude - Manche en bois archéologique',
              sharedStatement:
                'Un laboratoire étudie un manche en bois retrouvé sur un site archéologique. Après préparation, l’activité due au carbone 14 mesurée aujourd’hui vaut $A = 3{,}75$ désintégrations par minute pour l’échantillon. Un morceau de bois vivant de même masse aurait, dans les mêmes conditions, une activité $A_0 = 15{,}0$ désintégrations par minute. On prend pour le carbone 14 un temps de demi-vie $t_{1/2} = 5730$ ans et l’on suppose que l’échantillon n’a plus échangé de carbone avec l’extérieur depuis son enfouissement.',
              questionOrders: buildQuestionOrderRange(121),
            },
          ],
        },
        {
          title: 'Cas d’étude - imagerie médicale et radioprotection',
          slug: 'cas-d-etude-imagerie-medicale-et-radioprotection',
          description:
            'Analyser un examen de scintigraphie en croisant choix du traceur, lecture d’un schéma de protection et justification médicale.',
          order: 2,
          stage: 'MASTER',
          items: [
            {
              type: 'GROUP',
              title: 'Cas d’étude - Scintigraphie thyroïdienne',
              sharedStatement:
                'Une patiente passe une scintigraphie thyroïdienne. Le traceur est préparé sous forme de $\ce{NaI(aq)}$ contenant l’isotope iode-123, de temps de demi-vie voisin de $13$ heures. Le service rappelle au personnel les règles classiques de radioprotection : limiter le temps passé près de la source, augmenter la distance et utiliser des écrans adaptés.\n![Schéma simplifié de radioprotection selon la nature du rayonnement](/uploads/training/nucleaire-radioprotection-ecrans.svg)\nAprès injection, une gamma-caméra détecte le rayonnement utile pour former l’image.',
              questionOrders: buildQuestionOrderRange(131),
            },
          ],
        },
      ],
    },
  ],
});