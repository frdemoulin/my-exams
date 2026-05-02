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
  level: string;
  order: number;
  domainLongDescriptions: string[];
  questions: SeedQuizQuestion[];
  sections?: SeedChapterSection[];
};

type SeedQuestionInput = Omit<SeedQuizQuestion, 'order'>;

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

const questionsPerQuizBlock = 5;
const extendedQuizQuestionOffset = 75;

const createFiveQuestionQuiz = ({
  title,
  slug,
  description,
  order,
  stage,
  firstQuestionOrder,
}: {
  title: string;
  slug: string;
  description: string;
  order: number;
  stage: TrainingQuizStage;
  firstQuestionOrder: number;
}): SeedTrainingQuiz => ({
  title,
  slug,
  description,
  order,
  stage,
  items: [
    ...range(firstQuestionOrder, firstQuestionOrder + questionsPerQuizBlock - 1),
    ...range(
      firstQuestionOrder + extendedQuizQuestionOffset,
      firstQuestionOrder + extendedQuizQuestionOffset + questionsPerQuizBlock - 1
    ),
  ].map((questionOrder) => ({
    type: 'QUESTION' as const,
    questionOrder,
  })),
});

const questionInputs: SeedQuestionInput[] = [
  {
    difficulty: 'EASY',
    question:
      'La formule brute d’une espèce chimique organique indique principalement :',
    choices: [
      'La nature et le nombre d’atomes présents',
      'La position exacte de tous les atomes dans l’espace',
      'Toutes les liaisons avec les atomes d’hydrogène',
      'Le nom systématique de la molécule',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La formule brute renseigne sur la composition en atomes, mais ni sur leur enchaînement ni sur la géométrie de la molécule.',
  },
  {
    difficulty: 'EASY',
    question:
      'Dans une formule semi-développée, les liaisons avec les atomes d’hydrogène sont généralement :',
    choices: ['Omises', 'Toutes tracées', 'Remplacées par un spectre', 'Numérotées'],
    correctChoiceIndex: 0,
    explanation:
      'Une formule semi-développée représente toutes les liaisons entre atomes autres que l’hydrogène, mais n’écrit pas en détail les liaisons C-H.',
  },
  {
    difficulty: 'EASY',
    question: 'Un modèle moléculaire est surtout utile pour :',
    choices: [
      'Visualiser la géométrie d’une molécule dans l’espace',
      'Donner directement le nom systématique',
      'Calculer automatiquement la masse molaire',
      'Lire un spectre infrarouge',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Les modèles moléculaires permettent de représenter l’agencement spatial des atomes, ce qu’une formule brute ne montre pas.',
  },
  {
    difficulty: 'EASY',
    question: 'Quelle est la formule brute du propane ?',
    choices: ['$\\ce{C3H8}$', '$\\ce{C3H6}$', '$\\ce{C4H10}$', '$\\ce{C2H6}$'],
    correctChoiceIndex: 0,
    explanation:
      'Le propane est un alcane à trois atomes de carbone. Sa formule brute est $\\ce{C3H8}$.',
  },
  {
    difficulty: 'EASY',
    question: 'Une chaîne carbonée saturée possède :',
    choices: [
      'Uniquement des liaisons simples entre atomes de carbone',
      'Au moins une double liaison C=C',
      'Au moins une triple liaison C≡C',
      'Forcément un cycle',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Une chaîne saturée ne comporte ni double ni triple liaison entre atomes de carbone.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'La formule semi-développée $\\ce{CH3-CH2-CH2-CH3}$ correspond à la formule brute :',
    choices: ['$\\ce{C4H10}$', '$\\ce{C4H8}$', '$\\ce{C3H8}$', '$\\ce{C5H12}$'],
    correctChoiceIndex: 0,
    explanation:
      'On compte quatre atomes de carbone et dix atomes d’hydrogène, donc la formule brute est $\\ce{C4H10}$.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'L’écriture $\\ce{CH3-CH2-CH3}$ est une :',
    choices: [
      'Formule semi-développée',
      'Formule brute',
      'Formule topologique',
      'Formule développée',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Cette écriture fait apparaître l’enchaînement des atomes de carbone tout en simplifiant l’écriture des liaisons avec les hydrogènes.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Deux molécules ayant la même formule brute mais un enchaînement différent des atomes sont :',
    choices: [
      'Des isomères de constitution',
      'Des molécules identiques',
      'Toujours de la même famille fonctionnelle',
      'Toujours des alcanes linéaires',
    ],
    correctChoiceIndex: 0,
    explanation:
      'On parle d’isomérie de constitution lorsque la formule brute est la même mais que l’organisation des atomes diffère.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Pour montrer qu’une molécule n’est pas plane, la représentation la plus informative est :',
    choices: [
      'Le modèle moléculaire',
      'La formule brute',
      'Le tableau périodique',
      'Le nom de la famille fonctionnelle',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La représentation en volume est la plus adaptée pour visualiser l’orientation des liaisons dans l’espace.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Dans $\\ce{CH3-CH(CH3)-CH2-CH3}$, la plus longue chaîne carbonée continue contient :',
    choices: ['4 atomes de carbone', '3 atomes de carbone', '5 atomes de carbone', '6 atomes de carbone'],
    correctChoiceIndex: 0,
    explanation:
      'La chaîne principale la plus longue contient quatre atomes de carbone. La molécule est donc ramifiée à partir d’un squelette butane.',
  },
  {
    difficulty: 'HARD',
    question: 'Parmi les espèces suivantes, laquelle possède une chaîne carbonée ramifiée ?',
    choices: [
      '$\\ce{CH3-CH2-CH2-CH3}$',
      '$\\ce{CH3-CH(CH3)-CH3}$',
      '$\\ce{CH3-CH2-CH2-CH2-CH3}$',
      '$\\ce{CH3-CH2-CH3}$',
    ],
    correctChoiceIndex: 1,
    explanation:
      'La formule $\\ce{CH3-CH(CH3)-CH3}$ présente un groupement méthyle porté par le carbone central : la chaîne est ramifiée.',
  },
  {
    difficulty: 'HARD',
    question:
      'Le fait que la formule brute $\\ce{C4H10}$ corresponde à deux enchaînements différents illustre :',
    choices: [
      'L’isomérie de constitution',
      'La spectroscopie infrarouge',
      'La présence d’un groupe carbonyle',
      'Une chaîne forcément cyclique',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Le butane et le 2-méthylpropane ont la même formule brute $\\ce{C4H10}$ mais pas le même enchaînement d’atomes.',
  },
  {
    difficulty: 'HARD',
    question:
      'Dans $\\ce{CH3-CH2-CH(CH3)-CH2-CH3}$, la chaîne principale retenue en nomenclature comporte :',
    choices: ['5 carbones', '4 carbones', '3 carbones', '6 carbones'],
    correctChoiceIndex: 0,
    explanation:
      'La plus longue chaîne continue contient cinq atomes de carbone. Le squelette de référence est donc celui du pentane.',
  },
  {
    difficulty: 'HARD',
    question:
      'Pourquoi la formule brute ne suffit-elle pas à distinguer tous les isomères d’une espèce organique ?',
    choices: [
      'Parce qu’elle ne renseigne pas sur l’enchaînement des atomes',
      'Parce qu’elle ne donne jamais le nombre d’atomes de carbone',
      'Parce qu’elle remplace toutes les liaisons par des couleurs',
      'Parce qu’elle indique déjà la géométrie exacte de la molécule',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Des isomères ont la même formule brute mais des structures différentes. Il faut donc une formule plus descriptive pour les distinguer.',
  },
  {
    difficulty: 'HARD',
    question:
      'Pour repérer rapidement une ramification sur une molécule organique simple, on exploite surtout :',
    choices: [
      'La formule semi-développée',
      'La seule formule brute',
      'Le spectre infrarouge',
      'Le nombre d’onde maximal',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La formule semi-développée montre l’enchaînement des atomes de carbone et permet de voir directement une ramification.',
  },
  {
    difficulty: 'EASY',
    question: 'Le groupe caractéristique $-\\ce{OH}$ est appelé groupe :',
    choices: ['Hydroxyle', 'Carbonyle', 'Carboxyle', 'Alkyle'],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe $-\\ce{OH}$ est le groupe hydroxyle, caractéristique notamment de la famille des alcools.',
  },
  {
    difficulty: 'EASY',
    question: 'L’espèce $\\ce{CH3-CH2-OH}$ appartient à la famille des :',
    choices: ['Alcools', 'Aldéhydes', 'Cétones', 'Acides carboxyliques'],
    correctChoiceIndex: 0,
    explanation:
      'La présence du groupe hydroxyle $-\\ce{OH}$ fait appartenir $\\ce{CH3-CH2-OH}$ à la famille des alcools.',
  },
  {
    difficulty: 'EASY',
    question: 'L’espèce $\\ce{CH3-COOH}$ appartient à la famille des :',
    choices: ['Acides carboxyliques', 'Alcools', 'Aldéhydes', 'Alcanes'],
    correctChoiceIndex: 0,
    explanation:
      'L’espèce $\\ce{CH3-COOH}$ possède un groupe carboxyle $-\\ce{COOH}$, caractéristique des acides carboxyliques.',
  },
  {
    difficulty: 'EASY',
    question: 'Le groupe caractéristique $\\ce{C=O}$ est appelé groupe :',
    choices: ['Carbonyle', 'Hydroxyle', 'Carboxyle', 'Méthyle'],
    correctChoiceIndex: 0,
    explanation:
      'La double liaison carbone-oxygène $\\ce{C=O}$ constitue le groupe carbonyle.',
  },
  {
    difficulty: 'EASY',
    question: 'L’espèce $\\ce{CH3-CHO}$ appartient à la famille des :',
    choices: ['Aldéhydes', 'Alcools', 'Cétones', 'Alcanes'],
    correctChoiceIndex: 0,
    explanation:
      'La molécule $\\ce{CH3-CHO}$ possède un groupe carbonyle en bout de chaîne : c’est un aldéhyde.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'L’espèce $\\ce{CH3-CO-CH3}$ appartient à la famille des :',
    choices: ['Cétones', 'Aldéhydes', 'Alcools', 'Acides carboxyliques'],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe carbonyle est ici situé au milieu de la chaîne carbonée : la molécule appartient à la famille des cétones.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Quelle différence permet de distinguer un aldéhyde d’une cétone ?',
    choices: [
      'Dans un aldéhyde, le groupe carbonyle est en bout de chaîne',
      'Dans une cétone, il y a toujours un groupe hydroxyle',
      'Dans un aldéhyde, il n’y a pas d’atome d’oxygène',
      'Une cétone possède forcément deux groupes carbonyle',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe carbonyle d’un aldéhyde est terminal, alors que celui d’une cétone est porté par un carbone lié à deux autres carbones.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'L’espèce $\\ce{HO-CH2-COOH}$ contient les groupes caractéristiques :',
    choices: [
      'Hydroxyle et carboxyle',
      'Carbonyle et alkyle',
      'Hydroxyle et méthyle',
      'Carbonyle et éthyle uniquement',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Cette molécule possède à la fois un groupe hydroxyle $-\\ce{OH}$ et un groupe carboxyle $-\\ce{COOH}$.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Parmi les espèces suivantes, laquelle appartient à la famille des alcools ?',
    choices: ['$\\ce{CH3-CH2-OH}$', '$\\ce{CH3-CHO}$', '$\\ce{CH3-COOH}$', '$\\ce{CH3-CO-CH3}$'],
    correctChoiceIndex: 0,
    explanation:
      'La présence du groupe hydroxyle $-\\ce{OH}$ porté par la chaîne carbonée caractérise un alcool.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Parmi les espèces suivantes, laquelle appartient à la famille des acides carboxyliques ?',
    choices: ['$\\ce{CH3-COOH}$', '$\\ce{CH3-CH2-OH}$', '$\\ce{CH3-CHO}$', '$\\ce{CH3-CO-CH3}$'],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe carboxyle $-\\ce{COOH}$ permet de reconnaître un acide carboxylique.',
  },
  {
    difficulty: 'HARD',
    question: 'Le composé 3-méthylbutan-2-one appartient à la famille des :',
    choices: ['Cétones', 'Alcools', 'Aldéhydes', 'Acides carboxyliques'],
    correctChoiceIndex: 0,
    explanation:
      'Le suffixe -one indique la présence d’une cétone. Le groupe carbonyle est porté par le carbone numéro 2.',
  },
  {
    difficulty: 'HARD',
    question: 'Dans l’acide éthanoïque, la famille chimique est déterminée par le groupe :',
    choices: ['Carboxyle', 'Hydroxyle', 'Méthyle', 'Alkyle'],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe carboxyle $-\\ce{COOH}$ définit la famille des acides carboxyliques.',
  },
  {
    difficulty: 'HARD',
    question:
      'Une molécule possédant un groupe $\\ce{C=O}$ et un groupe $-\\ce{OH}$ portés par le même carbone appartient à la famille des :',
    choices: ['Acides carboxyliques', 'Cétones', 'Alcools', 'Alcanes'],
    correctChoiceIndex: 0,
    explanation:
      'L’association d’un carbonyle et d’un hydroxyle sur le même carbone constitue le groupe carboxyle.',
  },
  {
    difficulty: 'HARD',
    question: 'À propos des groupes caractéristiques dans une même molécule, quelle affirmation est correcte ?',
    choices: [
      'Une molécule peut porter plusieurs groupes caractéristiques',
      'Une molécule organique ne peut contenir qu’un seul atome d’oxygène',
      'Deux groupes caractéristiques s’excluent toujours',
      'La présence d’un groupe hydroxyle interdit tout groupe carbonyle',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Certaines molécules possèdent plusieurs groupes caractéristiques. On peut alors les analyser en repérant chacun de ces groupes.',
  },
  {
    difficulty: 'HARD',
    question: 'Le suffixe -al dans un nom systématique signale la famille des :',
    choices: ['Aldéhydes', 'Alcools', 'Cétones', 'Acides carboxyliques'],
    correctChoiceIndex: 0,
    explanation:
      'Le suffixe -al est associé aux aldéhydes, alors que -ol correspond aux alcools et -one aux cétones.',
  },
  {
    difficulty: 'EASY',
    question: 'La formule générale d’un alcane est :',
    choices: ['$\\ce{C_{n}H_{2n+2}}$', '$\\ce{C_{n}H_{2n}}$', '$\\ce{C_{n}H_{2n-2}}$', '$\\ce{C_{n}H_{n}}$'],
    correctChoiceIndex: 0,
    explanation:
      'Les alcanes sont des hydrocarbures saturés de formule générale $\\ce{C_{n}H_{2n+2}}$.',
  },
  {
    difficulty: 'EASY',
    question: 'Dans un alcane, chaque atome de carbone forme :',
    choices: ['4 liaisons covalentes', '3 liaisons covalentes', '2 liaisons covalentes', '5 liaisons covalentes'],
    correctChoiceIndex: 0,
    explanation:
      'Le carbone est tétravalent : dans un alcane, il forme quatre liaisons covalentes simples.',
  },
  {
    difficulty: 'EASY',
    question: 'Le nom de l’alcane linéaire de formule brute $\\ce{C5H12}$ est :',
    choices: ['Pentane', 'Butane', 'Hexane', 'Propane'],
    correctChoiceIndex: 0,
    explanation:
      'Une chaîne linéaire de cinq atomes de carbone correspond au pentane.',
  },
  {
    difficulty: 'EASY',
    question: 'Le groupe $-\\ce{CH3}$ porté par une chaîne carbonée est un groupe :',
    choices: ['Méthyle', 'Éthyle', 'Hydroxyle', 'Carbonyle'],
    correctChoiceIndex: 0,
    explanation:
      'Le radical dérivé du méthane est le groupe méthyle $-\\ce{CH3}$.',
  },
  {
    difficulty: 'EASY',
    question: 'Dans le nom 2-méthylpropane, la chaîne principale est celle du :',
    choices: ['Propane', 'Méthane', 'Butane', 'Pentane'],
    correctChoiceIndex: 0,
    explanation:
      'Le nom de base propane indique que la chaîne principale comporte trois atomes de carbone.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Le nom correct de $\\ce{CH3-CH(CH3)-CH2-CH3}$ est :',
    choices: ['2-méthylbutane', '3-méthylbutane', '2-éthylpropane', 'Pentane'],
    correctChoiceIndex: 0,
    explanation:
      'La plus longue chaîne compte quatre carbones et le substituant méthyle porte le carbone 2 : 2-méthylbutane.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Quelle formule semi-développée correspond au 2-méthylpropane ?',
    choices: [
      '$\\ce{CH3-CH(CH3)-CH3}$',
      '$\\ce{CH3-CH2-CH2-CH3}$',
      '$\\ce{CH3-CH2-CH3}$',
      '$\\ce{CH3-CH(CH3)-CH2-CH3}$',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Le 2-méthylpropane possède une chaîne principale à trois carbones et un groupe méthyle sur le carbone 2.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Le groupe éthyle correspond à :',
    choices: ['$-\\ce{C2H5}$', '$-\\ce{CH3}$', '$-\\ce{C3H7}$', '$-\\ce{OH}$'],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe éthyle dérive de l’éthane par perte d’un atome d’hydrogène : il s’écrit $-\\ce{C2H5}$.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Dans le nom 4-méthylhexan-2-one, le nombre 2 localise :',
    choices: ['Le groupe carbonyle', 'Le groupe méthyle', 'Le dernier carbone de la chaîne', 'Le nombre d’atomes d’oxygène'],
    correctChoiceIndex: 0,
    explanation:
      'Le suffixe -one correspond à une cétone et le nombre juste avant ce suffixe indique la position du groupe carbonyle.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Lorsqu’on attribue des numéros à la chaîne principale, on choisit en priorité :',
    choices: [
      'La numérotation donnant le plus petit indice au groupe caractéristique',
      'La numérotation partant toujours de la gauche',
      'La numérotation donnant le plus grand indice au substituant',
      'La numérotation alphabétique des substituants',
    ],
    correctChoiceIndex: 0,
    explanation:
      'En nomenclature, le groupe caractéristique prioritaire doit recevoir l’indice le plus petit possible.',
  },
  {
    difficulty: 'HARD',
    question: 'Le nom correct de $\\ce{CH3-CH2-CH(CH3)-CH2-OH}$ est :',
    choices: [
      '2-méthylbutan-1-ol',
      '3-méthylbutan-1-ol',
      '2-éthylpropan-1-ol',
      '2-méthylbutan-2-ol',
    ],
    correctChoiceIndex: 0,
    explanation:
      'On numérote à partir de l’extrémité portant le groupe hydroxyle. La chaîne principale compte quatre carbones, avec un méthyle en position 2.',
  },
  {
    difficulty: 'HARD',
    question: 'Le nom 2-éthylpropane n’est pas retenu car la plus longue chaîne carbonée compte en réalité :',
    choices: ['4 carbones', '3 carbones', '2 carbones', '5 carbones'],
    correctChoiceIndex: 0,
    explanation:
      'La structure ainsi décrite contient en fait une chaîne principale de quatre carbones. Le nom correct est alors 2-méthylbutane.',
  },
  {
    difficulty: 'HARD',
    question: 'Dans 3-méthylhexan-2-one, le nombre 3 repère :',
    choices: ['Le groupe méthyle', 'Le groupe carbonyle', 'Le nombre d’atomes d’oxygène', 'Une double liaison'],
    correctChoiceIndex: 0,
    explanation:
      'Le nombre placé devant méthyl indique la position du substituant méthyle sur la chaîne principale.',
  },
  {
    difficulty: 'HARD',
    question: 'Le nom systématique de $\\ce{CH3-CH2-CHO}$ est :',
    choices: ['Propanal', 'Propanone', 'Propanol', 'Acide propanoïque'],
    correctChoiceIndex: 0,
    explanation:
      'La molécule possède trois atomes de carbone et un groupe aldéhyde terminal : son nom est propanal.',
  },
  {
    difficulty: 'HARD',
    question: 'Quelle règle de numérotation est correcte en nomenclature organique ?',
    choices: [
      'On part de l’extrémité la plus proche du groupe caractéristique prioritaire',
      'On commence toujours par la gauche',
      'On choisit toujours le numéro le plus grand pour le groupe caractéristique',
      'On ignore la position des substituants alkyles',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La numérotation est choisie pour donner les plus petits indices possibles, d’abord au groupe caractéristique principal.',
  },
  {
    difficulty: 'EASY',
    question: 'Sur un spectre infrarouge, la grandeur portée en ordonnée est :',
    choices: ['La transmittance', 'La masse molaire', 'Le pH', 'La concentration molaire'],
    correctChoiceIndex: 0,
    explanation:
      'Un spectre IR représente généralement la transmittance en fonction du nombre d’onde.',
  },
  {
    difficulty: 'EASY',
    question: 'Le nombre d’onde d’un spectre infrarouge s’exprime en :',
    choices: ['$\\mathrm{cm^{-1}}$', '$\\mathrm{mol.L^{-1}}$', '$\\mathrm{m.s^{-1}}$', '$\\mathrm{kg.m^{-3}}$'],
    correctChoiceIndex: 0,
    explanation:
      'Le nombre d’onde s’exprime en $\\mathrm{cm^{-1}}$.',
  },
  {
    difficulty: 'EASY',
    question: 'Sur un spectre IR, une bande d’absorption correspond à :',
    choices: [
      'Une diminution de la transmittance',
      'Une augmentation du nombre de carbones',
      'Un changement de formule brute',
      'La disparition des atomes d’oxygène',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Lorsque la molécule absorbe un rayonnement, la transmittance diminue. La bande apparaît donc comme un creux sur le spectre.',
  },
  {
    difficulty: 'EASY',
    question: 'Sur la plupart des spectres IR scolaires, quand on va de gauche à droite, le nombre d’onde :',
    choices: ['Diminue', 'Augmente', 'Reste constant', 'Devient négatif'],
    correctChoiceIndex: 0,
    explanation:
      'L’axe des abscisses est généralement orienté avec les grands nombres d’onde à gauche et les petits à droite.',
  },
  {
    difficulty: 'EASY',
    question: 'Une bande large située entre $3200$ et $3650\ \mathrm{cm^{-1}}$ est caractéristique :',
    choices: [
      'D’une liaison O-H d’un alcool',
      'D’une liaison C=O',
      'D’une liaison C-H',
      'D’une chaîne carbonée ramifiée',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Dans le tableau de référence du chapitre, une bande O-H d’alcool apparaît large vers $3200$-$3650\ \mathrm{cm^{-1}}$.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Une bande voisine de $1700\ \mathrm{cm^{-1}}$ révèle généralement la présence :',
    choices: ['D’un groupe carbonyle', 'D’un groupe alkyle', 'D’une liaison C-H', 'D’une liaison C-C simple'],
    correctChoiceIndex: 0,
    explanation:
      'La liaison $\\ce{C=O}$ absorbe typiquement entre $1680$ et $1725\ \mathrm{cm^{-1}}$.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Une bande située entre $2900$ et $3100\ \mathrm{cm^{-1}}$ est associée à :',
    choices: ['Une liaison C-H', 'Une liaison C=O', 'Une liaison O-H d’un alcool', 'Un groupe carboxyle entier'],
    correctChoiceIndex: 0,
    explanation:
      'Le domaine $2900$-$3100\ \mathrm{cm^{-1}}$ correspond aux liaisons C-H.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'L’association d’une très large bande entre $2500$ et $3200\ \mathrm{cm^{-1}}$ et d’une bande vers $1700\ \mathrm{cm^{-1}}$ est typique :',
    choices: [
      'D’un acide carboxylique',
      'D’un alcane',
      'D’une cétone uniquement',
      'D’un groupe alkyle sans oxygène',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Un acide carboxylique combine la signature large O-H acide et celle du groupe carbonyle $\\ce{C=O}$.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'La spectroscopie IR permet surtout de :',
    choices: [
      'Repérer certains types de liaisons dans une molécule',
      'Compter exactement les atomes de carbone',
      'Lire directement le nom systématique',
      'Calculer la vitesse d’une réaction',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Un spectre IR renseigne sur la présence de liaisons caractéristiques, donc sur certains groupes fonctionnels.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Si un spectre ne présente aucune bande autour de $1700\ \mathrm{cm^{-1}}$, on peut conclure qu’il n’y a pas :',
    choices: ['De groupe carbonyle', 'De liaisons C-H', 'D’atomes d’hydrogène', 'De chaîne carbonée'],
    correctChoiceIndex: 0,
    explanation:
      'Sans bande caractéristique vers $1700\ \mathrm{cm^{-1}}$, rien n’indique la présence d’une liaison $\\ce{C=O}$.',
  },
  {
    difficulty: 'HARD',
    question:
      'Quel ensemble de bandes est compatible avec un alcool simple ?',
    choices: [
      'Une large bande vers $3300\ \mathrm{cm^{-1}}$ et des bandes C-H vers $3000\ \mathrm{cm^{-1}}$',
      'Une bande vers $1700\ \mathrm{cm^{-1}}$ uniquement',
      'Une très large bande entre $2500$ et $3200\ \mathrm{cm^{-1}}$ avec une bande vers $1700\ \mathrm{cm^{-1}}$',
      'Une seule bande fine vers $2200\ \mathrm{cm^{-1}}$',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Un alcool présente une bande O-H large vers $3200$-$3650\ \mathrm{cm^{-1}}$ et des bandes C-H vers $2900$-$3100\ \mathrm{cm^{-1}}$.',
  },
  {
    difficulty: 'HARD',
    question:
      'Si un spectre présente une bande intense vers $1700\ \mathrm{cm^{-1}}$ sans large bande O-H, la conclusion la plus sûre est :',
    choices: [
      'La molécule possède un groupe carbonyle',
      'La molécule est nécessairement un acide carboxylique',
      'La molécule est nécessairement un alcool',
      'La molécule ne contient pas d’oxygène',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La bande vers $1700\ \mathrm{cm^{-1}}$ suffit à indiquer un carbonyle. Avec le seul tableau de base, on ne distingue pas forcément aldéhyde et cétone.',
  },
  {
    difficulty: 'HARD',
    question: 'Pourquoi une bande d’absorption apparaît-elle comme un creux de transmittance ?',
    choices: [
      'Parce que le rayonnement est absorbé par la molécule',
      'Parce que la molécule disparaît du milieu',
      'Parce que le nombre de carbones augmente',
      'Parce que le groupe alkyle se fragmente',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Quand une liaison absorbe à un nombre d’onde donné, une plus faible fraction du rayonnement transmis atteint le détecteur.',
  },
  {
    difficulty: 'HARD',
    question:
      'Un spectre présentant une large bande vers $3300\ \mathrm{cm^{-1}}$ et aucune bande vers $1700\ \mathrm{cm^{-1}}$ est compatible avec :',
    choices: ['Un alcool', 'Une cétone', 'Un aldéhyde', 'Un acide carboxylique'],
    correctChoiceIndex: 0,
    explanation:
      'La signature correspond à un groupe O-H sans carbonyle. Cela convient à un alcool mais pas à un acide carboxylique.',
  },
  {
    difficulty: 'HARD',
    question:
      'Lors d’une oxydation d’un alcool en composé carbonylé, l’évolution IR attendue est :',
    choices: [
      'Disparition de la large bande O-H et apparition d’une bande vers $1700\ \mathrm{cm^{-1}}$',
      'Disparition de toutes les bandes C-H',
      'Apparition d’une triple liaison C≡C',
      'Déplacement de toutes les bandes sous $500\ \mathrm{cm^{-1}}$',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La transformation fait disparaître le groupe hydroxyle d’un alcool et apparaître un groupe carbonyle.',
  },
  {
    difficulty: 'EASY',
    question:
      'Un spectre présentant une large bande vers $3300\ \mathrm{cm^{-1}}$ et aucune bande vers $1700\ \mathrm{cm^{-1}}$ correspond le mieux à :',
    choices: ['Un alcool', 'Un acide carboxylique', 'Une cétone', 'Un aldéhyde'],
    correctChoiceIndex: 0,
    explanation:
      'La présence de O-H sans carbonyle oriente vers un alcool.',
  },
  {
    difficulty: 'EASY',
    question:
      'Un spectre présentant une bande vers $1700\ \mathrm{cm^{-1}}$ et aucune large bande O-H met en évidence :',
    choices: [
      'Un groupe carbonyle',
      'Un groupe carboxyle',
      'Une chaîne alkyle seule',
      'Une liaison O-H d’alcool',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La bande vers $1700\ \mathrm{cm^{-1}}$ signe un carbonyle. Sans bande O-H large, on n’est pas dans le cas d’un alcool ou d’un acide.',
  },
  {
    difficulty: 'EASY',
    question:
      'L’association d’une très large bande entre $2500$ et $3200\ \mathrm{cm^{-1}}$ et d’une bande vers $1700\ \mathrm{cm^{-1}}$ correspond à :',
    choices: ['Un acide carboxylique', 'Un alcool', 'Un alcane', 'Une molécule sans oxygène'],
    correctChoiceIndex: 0,
    explanation:
      'Cette double signature est caractéristique d’un acide carboxylique.',
  },
  {
    difficulty: 'EASY',
    question:
      'Pour suivre la transformation d’un alcool en cétone par IR, on surveille surtout :',
    choices: [
      'L’apparition d’une bande vers $1700\ \mathrm{cm^{-1}}$',
      'La disparition de toutes les bandes C-H',
      'La valeur exacte de la masse molaire',
      'Le nombre total d’atomes de carbone',
    ],
    correctChoiceIndex: 0,
    explanation:
      'L’apparition d’un groupe carbonyle se voit par une bande autour de $1700\ \mathrm{cm^{-1}}$.',
  },
  {
    difficulty: 'EASY',
    question:
      'Deux espèces de même formule brute mais de groupes caractéristiques différents peuvent être distinguées grâce à :',
    choices: ['La spectroscopie infrarouge', 'La seule formule brute', 'Le seul nombre de carbones', 'La couleur du liquide'],
    correctChoiceIndex: 0,
    explanation:
      'Le spectre IR met en évidence des liaisons différentes et permet donc de distinguer des espèces isomères de fonctions.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Pour différencier l’éthanol de l’acide éthanoïque à l’aide d’un spectre IR, l’indice décisif est :',
    choices: [
      'La présence d’une bande vers $1700\ \mathrm{cm^{-1}}$ accompagnée d’une très large bande O-H acide',
      'La présence d’une bande C-H vers $3000\ \mathrm{cm^{-1}}$',
      'Le simple nombre de creux sur le spectre',
      'La valeur du pH lue sur le graphe',
    ],
    correctChoiceIndex: 0,
    explanation:
      'L’acide carboxylique présente à la fois un carbonyle et une bande O-H très large, contrairement à l’alcool.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Si le spectre d’un produit ne montre plus la bande vers $1700\ \mathrm{cm^{-1}}$ présente chez le réactif, on peut conclure que :',
    choices: [
      'Le groupe carbonyle du réactif a disparu',
      'La chaîne carbonée a forcément été détruite',
      'Tous les atomes d’hydrogène ont disparu',
      'La molécule est devenue un alcane linéaire',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La disparition de la bande $\\ce{C=O}$ indique que le groupe carbonyle n’est plus présent dans le produit.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Quel spectre n’est pas compatible avec un acide carboxylique ?',
    choices: [
      'Un spectre ne montrant qu’une bande C-H vers $3000\ \mathrm{cm^{-1}}$',
      'Un spectre avec une bande vers $1700\ \mathrm{cm^{-1}}$ et une très large bande O-H acide',
      'Un spectre montrant la signature d’un carbonyle et une large bande entre $2500$ et $3200\ \mathrm{cm^{-1}}$',
      'Un spectre présentant les deux domaines caractéristiques d’un groupe carboxyle',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Un acide carboxylique doit montrer la signature du groupe carboxyle, donc un carbonyle et une très large bande O-H acide.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Un spectre présentant une bande vers $1700\ \mathrm{cm^{-1}}$ et une très large bande O-H entre $2500$ et $3200\ \mathrm{cm^{-1}}$ correspond à :',
    choices: ['Un acide carboxylique', 'Un alcool', 'Un alcane', 'Un groupe alkyle isolé'],
    correctChoiceIndex: 0,
    explanation:
      'Cette combinaison de bandes est propre au groupe carboxyle.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'La spectroscopie IR ne permet pas directement de connaître :',
    choices: [
      'Le nombre exact d’atomes de carbone',
      'La présence d’un groupe O-H',
      'La présence d’un groupe carbonyle',
      'La présence de liaisons C-H',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Le spectre IR renseigne sur des liaisons et des groupes caractéristiques, pas sur le décompte exact des atomes de carbone.',
  },
  {
    difficulty: 'HARD',
    question:
      'On compare deux spectres. Le spectre A montre une large bande O-H vers $3300\ \mathrm{cm^{-1}}$ sans bande vers $1700\ \mathrm{cm^{-1}}$. Le spectre B montre une bande vers $1700\ \mathrm{cm^{-1}}$ sans large bande O-H. Si B est obtenu par oxydation de A, B correspond le mieux à :',
    choices: [
      'Une espèce carbonylée',
      'Un alcane linéaire',
      'Un acide carboxylique',
      'Une molécule sans oxygène',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Le spectre A évoque un alcool et le spectre B un composé possédant un groupe carbonyle sans large bande O-H.',
  },
  {
    difficulty: 'HARD',
    question:
      'Pour valider par IR la réduction d’une cétone en alcool, on doit observer :',
    choices: [
      'La disparition de la bande vers $1700\ \mathrm{cm^{-1}}$ et l’apparition d’une large bande O-H',
      'L’apparition d’une deuxième bande carbonyle',
      'La disparition de toutes les bandes C-H',
      'Le déplacement du spectre entier au-delà de $4000\ \mathrm{cm^{-1}}$',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Une cétone réduite en alcool perd son groupe carbonyle et acquiert un groupe hydroxyle.',
  },
  {
    difficulty: 'HARD',
    question:
      'Avec le seul tableau simplifié des bandes du chapitre, un spectre montrant C-H et C=O sans bande O-H permet d’affirmer :',
    choices: [
      'La présence d’un groupe carbonyle, sans trancher entre aldéhyde et cétone',
      'Qu’il s’agit forcément d’un aldéhyde',
      'Qu’il s’agit forcément d’une cétone',
      'Qu’il s’agit forcément d’un acide carboxylique',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Au niveau du chapitre, la présence de C=O est certaine, mais le tableau simplifié ne suffit pas toujours à départager aldéhyde et cétone.',
  },
  {
    difficulty: 'HARD',
    question:
      'Pour distinguer une cétone d’un acide carboxylique à l’aide d’un spectre IR, on cherche en priorité :',
    choices: [
      'La très large bande O-H acide entre $2500$ et $3200\ \mathrm{cm^{-1}}$',
      'Une bande C-H vers $3000\ \mathrm{cm^{-1}}$',
      'Le nombre total de minima',
      'La position du groupe alkyle le plus long',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Une cétone et un acide ont tous deux un carbonyle, mais seul l’acide présente la très large bande O-H acide.',
  },
  {
    difficulty: 'HARD',
    question:
      'Si deux espèces ont la même formule brute et que l’une présente une bande carbonyle alors que l’autre non, on peut conclure que :',
    choices: [
      'Elles n’appartiennent pas à la même famille fonctionnelle',
      'Elles sont nécessairement identiques',
      'Aucune des deux n’est organique',
      'Leurs chaînes carbonées ont forcément la même géométrie',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La présence ou l’absence d’un groupe carbonyle modifie la famille fonctionnelle. Le spectre IR permet justement de mettre cette différence en évidence.',
  },
  {
    difficulty: 'EASY',
    question: 'Parmi les écritures suivantes, laquelle est une formule brute ?',
    choices: ['$\\ce{C2H6O}$', '$\\ce{CH3-CH2-OH}$', 'Un modèle moléculaire', 'Un spectre IR'],
    correctChoiceIndex: 0,
    explanation:
      'La formule brute donne uniquement la nature et le nombre des atomes. $\\ce{C2H6O}$ est donc une formule brute.',
  },
  {
    difficulty: 'EASY',
    question: 'La formule semi-développée de l’éthane s’écrit :',
    choices: ['$\\ce{CH3-CH3}$', '$\\ce{C2H6}$', '$\\ce{CH2=CH2}$', '$\\ce{CH3-OH}$'],
    correctChoiceIndex: 0,
    explanation:
      'L’éthane comporte deux atomes de carbone liés par une liaison simple : sa formule semi-développée est $\\ce{CH3-CH3}$.',
  },
  {
    difficulty: 'EASY',
    question: 'Un modèle moléculaire permet de visualiser directement :',
    choices: [
      'L’organisation des atomes dans l’espace',
      'La valeur du nombre d’onde',
      'Le nom systématique complet',
      'Le pH de la solution',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Le modèle moléculaire représente la géométrie de la molécule et la disposition relative des atomes.',
  },
  {
    difficulty: 'EASY',
    question: 'Dans une espèce organique simple, les atomes les plus courants sont :',
    choices: ['Le carbone et l’hydrogène', 'Le sodium et le chlore', 'Le fer et le cuivre', 'Le calcium et le magnésium'],
    correctChoiceIndex: 0,
    explanation:
      'Les espèces organiques sont fondées sur un squelette carboné et contiennent très souvent des atomes d’hydrogène.',
  },
  {
    difficulty: 'EASY',
    question:
      'Quelle représentation montre l’enchaînement des atomes sans détailler chaque liaison avec les hydrogènes ?',
    choices: [
      'La formule semi-développée',
      'La formule brute',
      'Le tableau de nombres d’onde',
      'La courbe de transmittance',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La formule semi-développée est précisément conçue pour montrer l’enchaînement des atomes tout en simplifiant l’écriture des liaisons C-H.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'La formule semi-développée $\\ce{CH3-CH2-CH2-OH}$ correspond à la formule brute :',
    choices: ['$\\ce{C3H8O}$', '$\\ce{C3H6O}$', '$\\ce{C2H6O}$', '$\\ce{C4H10O}$'],
    correctChoiceIndex: 0,
    explanation:
      'On compte trois atomes de carbone, huit d’hydrogène et un d’oxygène : la formule brute est $\\ce{C3H8O}$.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Dans $\\ce{CH3-CH(CH3)-CH3}$, combien y a-t-il d’atomes de carbone au total ?',
    choices: ['4', '3', '5', '6'],
    correctChoiceIndex: 0,
    explanation:
      'La chaîne principale en comporte trois et le substituant méthyle en ajoute un : il y a donc quatre atomes de carbone au total.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Les espèces $\\ce{CH3-CH2-CH2-CH3}$ et $\\ce{CH3-CH(CH3)-CH3}$ sont :',
    choices: ['Des isomères de constitution', 'La même molécule', 'Deux alcools', 'Deux acides carboxyliques'],
    correctChoiceIndex: 0,
    explanation:
      'Ces deux espèces ont la même formule brute $\\ce{C4H10}$ mais un enchaînement des atomes différent : ce sont des isomères de constitution.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Quelle formule semi-développée correspond à une chaîne linéaire de cinq atomes de carbone ?',
    choices: [
      '$\\ce{CH3-CH2-CH2-CH2-CH3}$',
      '$\\ce{CH3-CH(CH3)-CH2-CH3}$',
      '$\\ce{CH3-CH(CH3)-CH3}$',
      '$\\ce{CH3-CH2-CH3}$',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Une chaîne linéaire à cinq carbones correspond au pentane, écrit $\\ce{CH3-CH2-CH2-CH2-CH3}$.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Dans $\\ce{HO-CH2-CH2-CH3}$, la plus longue chaîne carbonée contient :',
    choices: ['3 atomes de carbone', '2 atomes de carbone', '4 atomes de carbone', '5 atomes de carbone'],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe hydroxyle n’ajoute pas de carbone. La chaîne carbonée comporte ici trois atomes de carbone.',
  },
  {
    difficulty: 'HARD',
    question:
      'Les espèces $\\ce{CH3-CH2-CH2-CH2-CH3}$ et $\\ce{CH3-CH(CH3)-CH2-CH3}$ ont en commun :',
    choices: [
      'La même formule brute',
      'La même formule semi-développée',
      'Le même caractère ramifié',
      'La présence d’un groupe hydroxyle',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Ces deux molécules correspondent à des isomères de formule brute $\\ce{C5H12}$, l’une linéaire et l’autre ramifiée.',
  },
  {
    difficulty: 'HARD',
    question: 'Dans $\\ce{CH3-CH2-CH(CH3)-CH(CH3)-CH3}$, la chaîne principale la plus longue contient :',
    choices: ['5 carbones', '4 carbones', '6 carbones', '7 carbones'],
    correctChoiceIndex: 0,
    explanation:
      'La plus longue chaîne continue contient cinq atomes de carbone. Les deux groupes méthyle sont donc des ramifications.',
  },
  {
    difficulty: 'HARD',
    question: 'Combien d’isomères de constitution alcaniques correspondent à la formule brute $\\ce{C5H12}$ ?',
    choices: ['3', '2', '4', '5'],
    correctChoiceIndex: 0,
    explanation:
      'Pour $\\ce{C5H12}$, on rencontre le pentane, le 2-méthylbutane et le 2,2-diméthylpropane : il y a donc trois isomères de constitution.',
  },
  {
    difficulty: 'HARD',
    question:
      'Pour distinguer sans ambiguïté les trois isomères de formule brute $\\ce{C5H12}$, la représentation la plus utile est :',
    choices: [
      'La formule semi-développée',
      'La seule formule brute',
      'Le seul nombre d’atomes de carbone',
      'L’unité du nombre d’onde',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La formule brute ne différencie pas les isomères. La formule semi-développée permet, elle, de voir l’enchaînement des atomes de carbone.',
  },
  {
    difficulty: 'HARD',
    question:
      'Parmi les écritures suivantes, laquelle représente un alcane ramifié de formule brute $\\ce{C5H12}$ ?',
    choices: [
      '$\\ce{CH3-CH(CH3)-CH2-CH3}$',
      '$\\ce{CH3-CH2-CH2-CH2-CH3}$',
      '$\\ce{CH3-CH2-CH2-CH3}$',
      '$\\ce{CH3-CH2-CH3}$',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La formule $\\ce{CH3-CH(CH3)-CH2-CH3}$ correspond au 2-méthylbutane, un alcane ramifié de formule brute $\\ce{C5H12}$.',
  },
  {
    difficulty: 'EASY',
    question: 'Le suffixe -one signale la famille des :',
    choices: ['Cétones', 'Alcools', 'Aldéhydes', 'Alcanes'],
    correctChoiceIndex: 0,
    explanation:
      'Le suffixe -one correspond à la famille des cétones.',
  },
  {
    difficulty: 'EASY',
    question: 'Le groupe carboxyle s’écrit :',
    choices: ['$-\\ce{COOH}$', '$-\\ce{OH}$', '$\\ce{C=O}$ seul', '$-\\ce{CH3}$'],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe carboxyle associe un carbonyle et un hydroxyle sur le même carbone. Il s’écrit $-\\ce{COOH}$.',
  },
  {
    difficulty: 'EASY',
    question: 'Le groupe hydroxyle caractéristique d’un alcool s’écrit :',
    choices: ['$-\\ce{OH}$', '$\\ce{C=O}$', '$-\\ce{COOH}$', '$-\\ce{CH2-}$'],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe hydroxyle est le groupe $-\\ce{OH}$.',
  },
  {
    difficulty: 'EASY',
    question: 'L’espèce $\\ce{CH3-CH2-CH2-CHO}$ appartient à la famille des :',
    choices: ['Aldéhydes', 'Alcools', 'Cétones', 'Alcanes'],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe carbonyle est ici terminal : cette molécule appartient à la famille des aldéhydes.',
  },
  {
    difficulty: 'EASY',
    question: 'L’espèce $\\ce{CH3-CH2-CO-CH3}$ appartient à la famille des :',
    choices: ['Cétones', 'Aldéhydes', 'Alcools', 'Acides carboxyliques'],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe carbonyle est porté par un carbone situé à l’intérieur de la chaîne : c’est une cétone.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Parmi les espèces suivantes, laquelle est un aldéhyde ?',
    choices: ['$\\ce{CH3-CH2-CHO}$', '$\\ce{CH3-CO-CH3}$', '$\\ce{CH3-CH2-OH}$', '$\\ce{CH3-COOH}$'],
    correctChoiceIndex: 0,
    explanation:
      'La formule $\\ce{CH3-CH2-CHO}$ porte un groupe carbonyle en bout de chaîne : c’est un aldéhyde.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Parmi les noms suivants, lequel désigne un acide carboxylique ?',
    choices: ['Acide propanoïque', 'Propanal', 'Propanone', 'Propanol'],
    correctChoiceIndex: 0,
    explanation:
      'L’expression acide ...oïque désigne un acide carboxylique.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'L’espèce $\\ce{CH3-CH(OH)-CH3}$ appartient à la famille des :',
    choices: ['Alcools', 'Cétones', 'Aldéhydes', 'Acides carboxyliques'],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe hydroxyle $-\\ce{OH}$ fait appartenir cette espèce à la famille des alcools.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'L’espèce $\\ce{HO-CH2-CH2-COOH}$ appartient d’abord à la famille des :',
    choices: ['Acides carboxyliques', 'Alcools', 'Aldéhydes', 'Alcanes'],
    correctChoiceIndex: 0,
    explanation:
      'Cette molécule possède un groupe carboxyle. Malgré la présence d’un groupe hydroxyle, elle relève ici de la famille des acides carboxyliques.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Une molécule dont le groupe carbonyle est au milieu de la chaîne est :',
    choices: ['Une cétone', 'Un aldéhyde', 'Un alcool', 'Un alcane'],
    correctChoiceIndex: 0,
    explanation:
      'Un carbonyle interne à la chaîne caractérise une cétone.',
  },
  {
    difficulty: 'HARD',
    question: 'L’acide 2-hydroxypropanoïque contient les groupes caractéristiques :',
    choices: [
      'Hydroxyle et carboxyle',
      'Hydroxyle et carbonyle uniquement',
      'Deux groupes carbonyle',
      'Un groupe alkyle et un groupe carboxyle uniquement',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Le nom indique un acide carboxylique, et le préfixe hydroxy- signale en plus la présence d’un groupe hydroxyle.',
  },
  {
    difficulty: 'HARD',
    question: 'Pourquoi $\\ce{CH3-COOH}$ n’est-il pas classé parmi les cétones ?',
    choices: [
      'Parce que le carbonyle fait partie d’un groupe carboxyle',
      'Parce que cette molécule ne contient pas d’oxygène',
      'Parce qu’elle est ramifiée',
      'Parce qu’elle ne contient qu’un seul carbone',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Dans $\\ce{CH3-COOH}$, le carbonyle est associé à un groupe hydroxyle sur le même carbone : il s’agit d’un groupe carboxyle, caractéristique d’un acide.',
  },
  {
    difficulty: 'HARD',
    question: 'Le composé 4-méthylhexan-2-ol appartient à la famille des :',
    choices: ['Alcools', 'Cétones', 'Aldéhydes', 'Acides carboxyliques'],
    correctChoiceIndex: 0,
    explanation:
      'Le suffixe -ol indique la famille des alcools, même si la chaîne est ramifiée par un groupe méthyle.',
  },
  {
    difficulty: 'HARD',
    question: 'Le composé 3-méthylbutanal appartient à la famille des :',
    choices: ['Aldéhydes', 'Alcools', 'Cétones', 'Alcanes'],
    correctChoiceIndex: 0,
    explanation:
      'Le suffixe -al indique un aldéhyde. Le groupe méthyle n’est qu’une ramification de la chaîne principale.',
  },
  {
    difficulty: 'HARD',
    question:
      'Une molécule présentant à la fois une liaison $\\ce{C=O}$ et un groupe $-\\ce{OH}$ porté par le même carbone appartient à la famille des :',
    choices: ['Acides carboxyliques', 'Cétones', 'Alcools', 'Alcanes'],
    correctChoiceIndex: 0,
    explanation:
      'Cette association correspond au groupe carboxyle, caractéristique des acides carboxyliques.',
  },
  {
    difficulty: 'EASY',
    question: 'La formule brute de l’hexane est :',
    choices: ['$\\ce{C6H14}$', '$\\ce{C6H12}$', '$\\ce{C5H12}$', '$\\ce{C6H10}$'],
    correctChoiceIndex: 0,
    explanation:
      'L’hexane est un alcane, de formule générale $\\ce{C_{n}H_{2n+2}}$. Pour $n=6$, on obtient $\\ce{C6H14}$.',
  },
  {
    difficulty: 'EASY',
    question: 'Un alcane comporte 18 atomes d’hydrogène. Il possède donc :',
    choices: ['8 atomes de carbone', '7 atomes de carbone', '9 atomes de carbone', '18 atomes de carbone'],
    correctChoiceIndex: 0,
    explanation:
      'Pour un alcane, $2n + 2 = 18$, donc $2n = 16$ et $n = 8$.',
  },
  {
    difficulty: 'EASY',
    question: 'Le groupe $-\\ce{C2H5}$ est appelé groupe :',
    choices: ['Éthyle', 'Méthyle', 'Propyle', 'Hydroxyle'],
    correctChoiceIndex: 0,
    explanation:
      'Le radical dérivé de l’éthane par perte d’un hydrogène est le groupe éthyle $-\\ce{C2H5}$.',
  },
  {
    difficulty: 'EASY',
    question: 'Le nom de l’alcane linéaire de formule brute $\\ce{C7H16}$ est :',
    choices: ['Heptane', 'Hexane', 'Octane', 'Pentane'],
    correctChoiceIndex: 0,
    explanation:
      'Une chaîne linéaire à sept atomes de carbone correspond à l’heptane.',
  },
  {
    difficulty: 'EASY',
    question: 'Les alcanes sont des hydrocarbures :',
    choices: ['Saturés', 'Aromatiques', 'Toujours cycliques', 'Toujours oxygénés'],
    correctChoiceIndex: 0,
    explanation:
      'Les alcanes ne comportent que des liaisons simples entre atomes de carbone : ce sont des hydrocarbures saturés.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Le nom systématique de $\\ce{CH3-CH2-CH2-OH}$ est :',
    choices: ['Propan-1-ol', 'Propan-2-ol', 'Propanal', 'Propanone'],
    correctChoiceIndex: 0,
    explanation:
      'La chaîne principale comporte trois carbones et le groupe hydroxyle est porté par le carbone 1 : propan-1-ol.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Le nom systématique de $\\ce{CH3-CH(OH)-CH3}$ est :',
    choices: ['Propan-2-ol', 'Propan-1-ol', 'Propanal', 'Propanone'],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe hydroxyle est ici sur le carbone 2 de la chaîne à trois carbones : propan-2-ol.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'L’espèce $\\ce{CH3-CH2-COOH}$ se nomme :',
    choices: ['Acide propanoïque', 'Propanal', 'Propanone', 'Propanol'],
    correctChoiceIndex: 0,
    explanation:
      'La chaîne principale comporte trois carbones et la fonction acide carboxylique donne le nom acide propanoïque.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'L’espèce $\\ce{CH3-CO-CH3}$ se nomme :',
    choices: ['Propanone', 'Propanal', 'Propan-1-ol', 'Acide propanoïque'],
    correctChoiceIndex: 0,
    explanation:
      'La molécule comporte trois carbones et un groupe carbonyle interne : il s’agit de la propanone.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Quelle formule semi-développée correspond au 2-méthylpropane ?',
    choices: [
      '$\\ce{CH3-CH(CH3)-CH3}$',
      '$\\ce{CH3-CH2-CH2-CH3}$',
      '$\\ce{CH3-CH2-CH3}$',
      '$\\ce{CH3-CH2-CH2-OH}$',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Le 2-méthylpropane possède une chaîne principale propane et un groupe méthyle sur le carbone 2.',
  },
  {
    difficulty: 'HARD',
    question: 'Le nom correct de $\\ce{HO-CH2-CH2-CH(CH3)-CH3}$ est :',
    choices: ['3-méthylbutan-1-ol', '2-méthylbutan-4-ol', '2-éthylpropan-1-ol', '3-méthylbutan-4-ol'],
    correctChoiceIndex: 0,
    explanation:
      'On numérote à partir du carbone portant le groupe hydroxyle. On obtient donc une chaîne butane, un alcool en position 1 et un groupe méthyle en position 3.',
  },
  {
    difficulty: 'HARD',
    question: 'Le nom correct de $\\ce{CH3-CO-CH(CH3)-CH2-CH3}$ est :',
    choices: ['3-méthylpentan-2-one', '2-méthylpentan-3-one', '3-méthylpentanal', '2-éthylbutan-2-one'],
    correctChoiceIndex: 0,
    explanation:
      'La chaîne principale compte cinq carbones. Le groupe carbonyle prioritaire reçoit le plus petit indice, soit 2, et le substituant méthyle est en position 3.',
  },
  {
    difficulty: 'HARD',
    question: 'Pourquoi le nom 2-éthylpropan-1-ol n’est-il pas retenu pour cette structure ?',
    choices: [
      'Parce qu’il existe une chaîne principale plus longue à quatre carbones',
      'Parce qu’un alcool ne peut pas avoir de groupe éthyle',
      'Parce que le groupe hydroxyle doit toujours être sur le carbone 2',
      'Parce que les groupes alkyles ne sont jamais nommés',
    ],
    correctChoiceIndex: 0,
    explanation:
      'En nomenclature, on choisit la plus longue chaîne carbonée contenant le groupe caractéristique. On obtient alors un squelette butane, pas propane.',
  },
  {
    difficulty: 'HARD',
    question: 'Le nom correct de $\\ce{CH3-CH2-CH(CH3)-CHO}$ est :',
    choices: ['2-méthylbutanal', '3-méthylbutanal', '2-méthylbutan-1-ol', 'Butan-2-one'],
    correctChoiceIndex: 0,
    explanation:
      'Dans un aldéhyde, le carbone du groupe $\\ce{-CHO}$ est le carbone 1. Le groupe méthyle est donc situé sur le carbone 2.',
  },
  {
    difficulty: 'HARD',
    question: 'Le nom correct de $\\ce{CH3-CH(CH3)-CH(OH)-CH3}$ est :',
    choices: ['3-méthylbutan-2-ol', '2-méthylbutan-3-ol', '2-éthylpropan-2-ol', '3-méthylbutanal'],
    correctChoiceIndex: 0,
    explanation:
      'La numérotation donne l’indice le plus petit au groupe hydroxyle, qui est en position 2. Le groupe méthyle se trouve alors en position 3.',
  },
  {
    difficulty: 'EASY',
    question: 'Sur un spectre infrarouge, la grandeur portée en abscisse est :',
    choices: ['Le nombre d’onde', 'La transmittance', 'La masse molaire', 'La densité'],
    correctChoiceIndex: 0,
    explanation:
      'En spectroscopie IR, on représente la transmittance en fonction du nombre d’onde.',
  },
  {
    difficulty: 'EASY',
    question: 'Une forte absorption sur un spectre IR se traduit par :',
    choices: ['Un creux de transmittance', 'Une augmentation du nombre de carbones', 'La disparition des atomes d’oxygène', 'Un changement de formule brute'],
    correctChoiceIndex: 0,
    explanation:
      'Quand la molécule absorbe le rayonnement, la transmittance diminue : le spectre montre donc un creux.',
  },
  {
    difficulty: 'EASY',
    question: 'Une large bande vers $3300\ \mathrm{cm^{-1}}$ évoque d’abord :',
    choices: ['Une liaison O-H d’alcool', 'Une liaison C=O', 'Une liaison C-H', 'Une liaison C-C'],
    correctChoiceIndex: 0,
    explanation:
      'Au niveau du chapitre, une large bande vers $3200$-$3650\ \mathrm{cm^{-1}}$ est caractéristique d’une liaison O-H d’alcool.',
  },
  {
    difficulty: 'EASY',
    question: 'Une bande vers $1700\ \mathrm{cm^{-1}}$ correspond généralement à :',
    choices: ['Une liaison $\\ce{C=O}$', 'Une liaison O-H', 'Une liaison C-H', 'Une liaison C-C'],
    correctChoiceIndex: 0,
    explanation:
      'La bande autour de $1700\ \mathrm{cm^{-1}}$ est celle du groupe carbonyle $\\ce{C=O}$.',
  },
  {
    difficulty: 'EASY',
    question: 'Les bandes C-H apparaissent typiquement autour de :',
    choices: ['$3000\ \mathrm{cm^{-1}}$', '$1700\ \mathrm{cm^{-1}}$', '$1000\ \mathrm{cm^{-1}}$', '$5000\ \mathrm{cm^{-1}}$'],
    correctChoiceIndex: 0,
    explanation:
      'Dans le tableau de référence du chapitre, les liaisons C-H absorbent entre $2900$ et $3100\ \mathrm{cm^{-1}}$.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Un alcool simple présente en IR :',
    choices: [
      'Une large bande O-H et des bandes C-H',
      'Une bande C=O sans bande O-H',
      'Une très large bande O-H acide et une bande C=O',
      'Aucune bande caractéristique',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Un alcool présente une large bande O-H vers $3200$-$3650\ \mathrm{cm^{-1}}$ ainsi que des bandes C-H.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Un acide carboxylique présente en IR :',
    choices: [
      'Une bande C=O et une très large bande O-H acide',
      'Seulement une bande C-H',
      'Une large bande O-H d’alcool sans carbonyle',
      'Une absence totale de bande',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Le groupe carboxyle se reconnaît par la combinaison d’une bande carbonyle et d’une très large bande O-H acide.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'Avec le tableau simplifié du chapitre, quelle liaison n’est pas directement repérée ?',
    choices: ['Une liaison C-C simple', 'Une liaison C-H', 'Une liaison O-H', 'Une liaison C=O'],
    correctChoiceIndex: 0,
    explanation:
      'Le tableau simplifié donne des repères pour O-H, C-H et C=O, pas pour une simple liaison C-C.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Un spectre montrant des bandes C-H mais aucune bande O-H ni C=O est compatible avec :',
    choices: ['Un alcane', 'Un acide carboxylique', 'Un alcool', 'Une cétone'],
    correctChoiceIndex: 0,
    explanation:
      'Sans groupe O-H ni carbonyle, un hydrocarbure saturé comme un alcane est compatible avec le spectre.',
  },
  {
    difficulty: 'MEDIUM',
    question: 'La large bande O-H d’un acide carboxylique se situe surtout entre :',
    choices: [
      '$2500$ et $3200\ \mathrm{cm^{-1}}$',
      '$1680$ et $1725\ \mathrm{cm^{-1}}$',
      '$2900$ et $3100\ \mathrm{cm^{-1}}$',
      '$400$ et $800\ \mathrm{cm^{-1}}$',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La bande O-H acide est très large et s’étend typiquement entre $2500$ et $3200\ \mathrm{cm^{-1}}$.',
  },
  {
    difficulty: 'HARD',
    question: 'Un spectre présentant une large bande vers $3300\ \mathrm{cm^{-1}}$ mais pas de bande vers $1700\ \mathrm{cm^{-1}}$ est compatible avec :',
    choices: ['Un alcool', 'Une cétone', 'Un acide carboxylique', 'Un aldéhyde'],
    correctChoiceIndex: 0,
    explanation:
      'La présence d’une liaison O-H sans carbonyle est compatible avec un alcool et non avec un acide carboxylique, qui présenterait aussi une bande vers $1700\ \mathrm{cm^{-1}}$.',
  },
  {
    difficulty: 'HARD',
    question:
      'Avec le tableau simplifié du chapitre, un spectre montrant une bande vers $1700\ \mathrm{cm^{-1}}$ sans bande O-H permet d’affirmer :',
    choices: [
      'La présence d’un groupe carbonyle, sans départager aldéhyde et cétone',
      'Qu’il s’agit forcément d’un acide carboxylique',
      'Qu’il s’agit forcément d’un alcool',
      'Qu’il n’y a pas d’oxygène dans la molécule',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La bande vers $1700\ \mathrm{cm^{-1}}$ signe un carbonyle, mais le tableau de base ne suffit pas toujours à choisir entre aldéhyde et cétone.',
  },
  {
    difficulty: 'HARD',
    question: 'Un spectre présentant à la fois une bande vers $1700\ \mathrm{cm^{-1}}$ et une très large bande O-H est celui :',
    choices: ['D’un acide carboxylique', 'D’un alcool', 'D’un alcane', 'D’un hydrocarbure saturé'],
    correctChoiceIndex: 0,
    explanation:
      'La combinaison de ces deux bandes est caractéristique d’un acide carboxylique.',
  },
  {
    difficulty: 'HARD',
    question:
      'Si un spectre A montre une large bande O-H d’alcool et qu’un spectre B montre une bande C=O sans O-H, la transformation de A vers B correspond le mieux à :',
    choices: ['Une oxydation', 'Une réduction', 'Une dilution', 'Une fusion'],
    correctChoiceIndex: 0,
    explanation:
      'La disparition du groupe hydroxyle et l’apparition d’un carbonyle correspondent à une oxydation d’un alcool.',
  },
  {
    difficulty: 'HARD',
    question:
      'Si le spectre d’un produit a perdu la large bande O-H d’un alcool tout en gagnant une bande vers $1700\ \mathrm{cm^{-1}}$, on peut conclure que :',
    choices: [
      'Le produit possède un groupe carbonyle',
      'Le produit est nécessairement un acide carboxylique',
      'Le produit ne contient plus de carbone',
      'Le produit est forcément un alcane',
    ],
    correctChoiceIndex: 0,
    explanation:
      'L’apparition d’une bande vers $1700\ \mathrm{cm^{-1}}$ indique la formation d’un groupe carbonyle.',
  },
  {
    difficulty: 'EASY',
    question: 'Une bande vers $1700\ \mathrm{cm^{-1}}$ met directement en évidence :',
    choices: ['Un groupe carbonyle', 'Un groupe alkyle', 'Une chaîne ramifiée', 'Une liaison C-C simple'],
    correctChoiceIndex: 0,
    explanation:
      'Au niveau du chapitre, une bande vers $1700\ \mathrm{cm^{-1}}$ correspond à une liaison $\\ce{C=O}$.',
  },
  {
    difficulty: 'EASY',
    question:
      'Un spectre présentant une bande vers $1700\ \mathrm{cm^{-1}}$ et une très large bande O-H correspond à :',
    choices: ['Un acide carboxylique', 'Un alcool', 'Un alcane', 'Un hydrocarbure saturé'],
    correctChoiceIndex: 0,
    explanation:
      'Cette combinaison de bandes est caractéristique d’un acide carboxylique.',
  },
  {
    difficulty: 'EASY',
    question:
      'Un spectre montrant une large bande vers $3300\ \mathrm{cm^{-1}}$ sans bande vers $1700\ \mathrm{cm^{-1}}$ est compatible avec :',
    choices: ['Un alcool', 'Une cétone', 'Un aldéhyde', 'Un acide carboxylique'],
    correctChoiceIndex: 0,
    explanation:
      'La présence d’un groupe O-H sans carbonyle oriente vers un alcool.',
  },
  {
    difficulty: 'EASY',
    question: 'Parmi les familles suivantes, laquelle nécessite la présence d’une bande carbonyle ?',
    choices: ['Les cétones', 'Les alcanes', 'Les alcools', 'Les groupes alkyles'],
    correctChoiceIndex: 0,
    explanation:
      'Une cétone contient un groupe carbonyle. Les alcanes et groupes alkyles n’en possèdent pas.',
  },
  {
    difficulty: 'EASY',
    question: 'Pour distinguer un propanone d’un propanol à l’aide d’un spectre IR, on cherche en priorité :',
    choices: [
      'La présence ou l’absence d’une bande vers $1700\ \mathrm{cm^{-1}}$',
      'Le nombre exact d’atomes de carbone',
      'La valeur de la masse molaire',
      'La couleur du composé',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Le propanone possède un carbonyle, visible vers $1700\ \mathrm{cm^{-1}}$, contrairement au propanol.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Le spectre d’un réactif montre une large bande O-H d’alcool, celui du produit montre une bande vers $1700\ \mathrm{cm^{-1}}$ sans O-H. La transformation a conduit à :',
    choices: ['Un composé carbonylé', 'Un acide carboxylique', 'Un alcane', 'Une espèce sans oxygène'],
    correctChoiceIndex: 0,
    explanation:
      'La disparition de la bande O-H et l’apparition d’une bande C=O indiquent la formation d’un composé carbonylé.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Le spectre d’un réactif montre une bande vers $1700\ \mathrm{cm^{-1}}$ ; celui du produit montre une large bande O-H d’alcool et plus de bande carbonyle. La transformation correspond à :',
    choices: ['Une réduction en alcool', 'Une oxydation en acide', 'Une déshydratation', 'Une simple dilution'],
    correctChoiceIndex: 0,
    explanation:
      'La disparition du carbonyle et l’apparition d’un groupe hydroxyle caractérisent une réduction vers un alcool.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Pour passer d’un acide carboxylique à un alcool, l’évolution IR attendue est :',
    choices: [
      'Disparition de la bande C=O et de la très large bande O-H acide, avec apparition d’une bande O-H d’alcool',
      'Apparition d’une seconde bande carbonyle',
      'Disparition de toutes les bandes C-H',
      'Aucune modification des bandes',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Un alcool ne présente pas le groupe carboxyle : on perd donc le carbonyle et la très large bande O-H acide.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Un réactif présente une bande vers $1700\ \mathrm{cm^{-1}}$ et une très large bande O-H acide ; le produit présente encore la bande carbonyle mais plus la large bande acide. Le produit est plutôt :',
    choices: ['Un autre composé carbonylé non acide', 'Un alcane', 'Un alcool simple', 'Un hydrocarbure saturé'],
    correctChoiceIndex: 0,
    explanation:
      'Le produit garde un carbonyle, mais ne montre plus la signature d’un acide carboxylique. Il s’agit donc d’un composé carbonylé non acide.',
  },
  {
    difficulty: 'MEDIUM',
    question:
      'Si les spectres d’un réactif et d’un produit montrent tous deux une large bande O-H d’alcool sans bande C=O, on peut conclure que :',
    choices: [
      'La formation d’un carbonyle n’est pas mise en évidence',
      'Le produit est nécessairement un acide carboxylique',
      'Le produit est nécessairement une cétone',
      'La molécule ne contient plus d’oxygène',
    ],
    correctChoiceIndex: 0,
    explanation:
      'L’absence de bande vers $1700\ \mathrm{cm^{-1}}$ dans les deux spectres n’indique pas la formation d’un carbonyle.',
  },
  {
    difficulty: 'HARD',
    question:
      'Deux espèces de même formule brute présentent des spectres IR différents : l’une montre une large bande O-H d’alcool, l’autre une bande carbonyle. On peut en conclure que :',
    choices: [
      'Elles appartiennent à des familles fonctionnelles différentes',
      'Elles sont nécessairement identiques',
      'Aucune des deux n’est organique',
      'Leurs chaînes carbonées sont forcément linéaires',
    ],
    correctChoiceIndex: 0,
    explanation:
      'La présence d’une liaison O-H dans un cas et d’un carbonyle dans l’autre montre que les fonctions chimiques sont différentes.',
  },
  {
    difficulty: 'HARD',
    question:
      'Pour exclure la famille des acides carboxyliques, l’indice le plus décisif est l’absence :',
    choices: [
      'De la très large bande O-H acide',
      'De toute bande C-H',
      'De tout atome de carbone',
      'De toute formule semi-développée',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Un acide carboxylique doit présenter la très large bande O-H acide, en plus du carbonyle.',
  },
  {
    difficulty: 'HARD',
    question:
      'Si un produit montre une bande carbonyle sans large bande O-H alors que le réactif était un alcool, l’interprétation correcte est :',
    choices: [
      'La transformation vers un composé carbonylé est cohérente',
      'La transformation n’a pas eu lieu',
      'Le produit est forcément un acide carboxylique',
      'Le produit est forcément un alcane',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Le spectre du produit est compatible avec la formation d’un groupe carbonyle après disparition du groupe hydroxyle de l’alcool.',
  },
  {
    difficulty: 'HARD',
    question:
      'Avec le tableau simplifié du chapitre, un spectre montrant seulement des bandes C-H permet au mieux de conclure :',
    choices: [
      'Qu’aucun groupe O-H ni carbonyle n’est mis en évidence',
      'Qu’il s’agit exactement de l’hexane',
      'Qu’il s’agit forcément d’une molécule cyclique',
      'Qu’il s’agit d’un acide carboxylique',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Le spectre ne permet pas d’identifier précisément la molécule, mais il n’indique ni groupe O-H ni groupe carbonyle.',
  },
  {
    difficulty: 'HARD',
    question:
      'Deux spectres présentent tous deux des bandes C-H. L’un montre en plus une large bande O-H, l’autre une bande C=O. La conclusion la plus solide est :',
    choices: [
      'Les deux espèces n’appartiennent pas à la même famille fonctionnelle',
      'Les deux espèces sont forcément le même composé',
      'Les deux espèces sont forcément des acides carboxyliques',
      'Les deux espèces sont dépourvues d’oxygène',
    ],
    correctChoiceIndex: 0,
    explanation:
      'Les bandes supplémentaires révèlent des fonctions chimiques différentes : liaison O-H dans un cas, carbonyle dans l’autre.',
  },
];

const questions: SeedQuizQuestion[] = questionInputs.map((question, index) => ({
  ...question,
  order: index + 1,
}));

export const structureEspecesChimiquesOrganiquesTrainingChapter: TrainingChapterSeed = {
  title: "Structure d'espèces chimiques organiques",
  slug: 'structure-d-especes-chimiques-organiques',
  level: 'premiere',
  order: 107,
  domainLongDescriptions: ['Constitution et transformations de la matière'],
  questions,
  sections: [
    {
      title: 'Formules, représentations et squelette carboné',
      description:
        'Distinguer formule brute, formule semi-développée et modèle moléculaire, puis reconnaître un squelette carboné saturé ou ramifié.',
      order: 1,
      quizzes: [
        createFiveQuestionQuiz({
          title: 'Repérer les différentes représentations',
          slug: 'reperer-differentes-representations',
          description:
            'Identifier ce que montrent la formule brute, la formule semi-développée et le modèle moléculaire.',
          order: 1,
          stage: 'DISCOVER',
          firstQuestionOrder: 1,
        }),
        createFiveQuestionQuiz({
          title: 'Lire une formule semi-développée',
          slug: 'lire-une-formule-semi-developpee',
          description:
            'Compter les atomes et reconnaître l’enchaînement carboné à partir d’une formule semi-développée.',
          order: 2,
          stage: 'PRACTICE',
          firstQuestionOrder: 6,
        }),
        createFiveQuestionQuiz({
          title: 'Distinguer chaîne linéaire et ramifiée',
          slug: 'distinguer-chaine-lineaire-et-ramifiee',
          description:
            'Mobiliser la notion d’isomérie de constitution et de chaîne principale.',
          order: 3,
          stage: 'MASTER',
          firstQuestionOrder: 11,
        }),
      ],
    },
    {
      title: 'Groupes caractéristiques et familles fonctionnelles',
      description:
        'Reconnaître les groupes hydroxyle, carbonyle et carboxyle, puis relier ces groupes aux grandes familles étudiées au chapitre.',
      order: 2,
      quizzes: [
        createFiveQuestionQuiz({
          title: 'Reconnaître les groupes caractéristiques',
          slug: 'reconnaitre-groupes-caracteristiques',
          description:
            'Associer un groupe caractéristique simple à son nom et à la famille correspondante.',
          order: 1,
          stage: 'DISCOVER',
          firstQuestionOrder: 16,
        }),
        createFiveQuestionQuiz({
          title: 'Identifier la bonne famille',
          slug: 'identifier-bonne-famille',
          description:
            'Classer des espèces dans les familles alcools, aldéhydes, cétones et acides carboxyliques.',
          order: 2,
          stage: 'PRACTICE',
          firstQuestionOrder: 21,
        }),
        createFiveQuestionQuiz({
          title: 'Analyser des cas plus ambigus',
          slug: 'analyser-cas-plus-ambigus',
          description:
            'Gérer les cas où plusieurs groupes ou indices de nomenclature doivent être interprétés ensemble.',
          order: 3,
          stage: 'MASTER',
          firstQuestionOrder: 26,
        }),
      ],
    },
    {
      title: 'Alcanes, groupes alkyles et nomenclature',
      description:
        'Utiliser la chaîne principale, les groupes alkyles et les suffixes de fonction pour relier nom systématique et formule semi-développée.',
      order: 3,
      quizzes: [
        createFiveQuestionQuiz({
          title: 'Repères sur les alcanes',
          slug: 'reperes-sur-les-alcanes',
          description:
            'Retrouver la formule générale des alcanes et reconnaître les premiers groupes alkyles usuels.',
          order: 1,
          stage: 'DISCOVER',
          firstQuestionOrder: 31,
        }),
        createFiveQuestionQuiz({
          title: 'Nommer des molécules simples',
          slug: 'nommer-des-molecules-simples',
          description:
            'Passer d’une formule semi-développée à un nom systématique simple.',
          order: 2,
          stage: 'PRACTICE',
          firstQuestionOrder: 36,
        }),
        createFiveQuestionQuiz({
          title: 'Appliquer les règles de numérotation',
          slug: 'appliquer-regles-de-numerotation',
          description:
            'Choisir la bonne chaîne principale et les bons indices en présence de substituants et de fonctions.',
          order: 3,
          stage: 'MASTER',
          firstQuestionOrder: 41,
        }),
      ],
    },
    {
      title: 'Spectroscopie infrarouge : lire un spectre',
      description:
        'Lire les axes d’un spectre IR et relier quelques domaines caractéristiques aux liaisons O-H, C-H et C=O.',
      order: 4,
      quizzes: [
        createFiveQuestionQuiz({
          title: 'Lire les axes et les bandes',
          slug: 'lire-axes-et-bandes',
          description:
            'Comprendre ce que représentent la transmittance, le nombre d’onde et les creux d’absorption.',
          order: 1,
          stage: 'DISCOVER',
          firstQuestionOrder: 46,
        }),
        createFiveQuestionQuiz({
          title: 'Associer une bande à une liaison',
          slug: 'associer-bande-a-liaison',
          description:
            'Exploiter le tableau de référence pour relier un domaine d’absorption à une liaison caractéristique.',
          order: 2,
          stage: 'PRACTICE',
          firstQuestionOrder: 51,
        }),
        createFiveQuestionQuiz({
          title: 'Interpréter un spectre simple',
          slug: 'interpreter-un-spectre-simple',
          description:
            'Formuler la conclusion la plus sûre à partir d’un petit nombre de bandes significatives.',
          order: 3,
          stage: 'MASTER',
          firstQuestionOrder: 56,
        }),
      ],
    },
    {
      title: 'Spectroscopie infrarouge : identifier une espèce ou suivre une transformation',
      description:
        'Réinvestir la lecture des bandes IR pour reconnaître une famille fonctionnelle ou vérifier l’évolution d’une transformation chimique.',
      order: 5,
      kind: 'SYNTHESIS',
      quizzes: [
        createFiveQuestionQuiz({
          title: 'Identifier une famille à partir d’un spectre',
          slug: 'identifier-famille-a-partir-d-un-spectre',
          description:
            'Reconnaître alcool, composé carbonylé ou acide carboxylique à partir de quelques bandes-clés.',
          order: 1,
          stage: 'DISCOVER',
          firstQuestionOrder: 61,
        }),
        createFiveQuestionQuiz({
          title: 'Comparer réactif et produit',
          slug: 'comparer-reactif-et-produit',
          description:
            'Mettre en relation apparition ou disparition de bandes IR avec l’évolution d’un groupe caractéristique.',
          order: 2,
          stage: 'PRACTICE',
          firstQuestionOrder: 66,
        }),
        createFiveQuestionQuiz({
          title: 'Bilan IR du chapitre',
          slug: 'bilan-ir-du-chapitre',
          description:
            'Mobiliser l’ensemble des repères du chapitre sur des comparaisons et des suivis de transformation.',
          order: 3,
          stage: 'MASTER',
          firstQuestionOrder: 71,
        }),
      ],
    },
  ],
};