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

export const optimisationSyntheseTrainingChapter: TrainingChapterSeed = {
  title: "Optimisation d'une synthèse",
  slug: 'optimisation-d-une-synthese',
  order: 9,
  domainLongDescriptions: ['Constitution et transformations de la matière'],
  questions: [
    {
      difficulty: 'EASY',
      order: 1,
      question:
        'Observe la formule topologique suivante.\n![Exemple de formule topologique organique](/uploads/training/organique-formule-topologique-sommets.svg)\nDans une formule topologique d’une molécule organique, que représentent en général les sommets et les extrémités des segments ?',
      choices: [
        'Des atomes de carbone',
        'Des atomes d’hydrogène',
        'Uniquement des groupes caractéristiques',
        'Des doublets non liants',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Dans une formule topologique, les sommets et extrémités correspondent en général à des atomes de carbone. Les hydrogènes portés par ces carbones sont implicites.',
    },
    {
      difficulty: 'EASY',
      order: 2,
      question:
        'Observe la formule topologique suivante.\n![Exemple de formule topologique avec double liaison](/uploads/training/organique-formule-topologique-double-liaison.svg)\nDans une formule topologique, comment représente-t-on une double liaison ?',
      choices: [
        'Par deux traits',
        'Par un point',
        'Par un triangle',
        'Par une flèche courbe',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Comme dans les autres écritures, une double liaison est représentée par deux traits entre les deux atomes concernés.',
    },
    {
      difficulty: 'MEDIUM',
      order: 3,
      question:
        'Quel suffixe permet en général d’identifier un alcool dans le nom d’une espèce organique ?',
      choices: ['-ol', '-al', '-oate', '-amide'],
      correctChoiceIndex: 0,
      explanation:
        'Le suffixe -ol caractérise la famille des alcools, comme dans propan-1-ol ou éthanol.',
    },
    {
      difficulty: 'EASY',
      order: 4,
      question:
        'Deux espèces chimiques qui ont la même formule brute mais des enchaînements d’atomes différents sont :',
      choices: [
        'Des isomères de constitution',
        'Des énantiomères',
        'Des isotopes',
        'Des allotropes',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’isomérie de constitution correspond à une même formule brute, mais à des connectivités différentes entre les atomes.',
    },
    {
      difficulty: 'MEDIUM',
      order: 5,
      question:
        'Dans le nom « éthanoate de méthyle », à quelle famille fonctionnelle appartient l’espèce ?',
      choices: ['Ester', 'Alcool', 'Amide', 'Aldéhyde'],
      correctChoiceIndex: 0,
      explanation:
        'Le suffixe -oate caractérise ici un ester. L’espèce éthanoate de méthyle appartient donc à la famille des esters.',
    },
    {
      difficulty: 'EASY',
      order: 6,
      question: 'Qu’appelle-t-on motif d’un polymère ?',
      choices: [
        'La plus petite portion répétée le long de la chaîne',
        'Une molécule de solvant piégée dans le matériau',
        'Le groupe caractéristique unique du polymère',
        'Le nom commercial du matériau',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le motif est l’unité structurale qui se répète un grand nombre de fois dans la macromolécule.',
    },
    {
      difficulty: 'EASY',
      order: 7,
      question:
        'Quelle expression donne le rendement $\\eta$ d’une synthèse chimique ?',
      choices: [
        '$\\eta = \\dfrac{n_{obtenu}}{n_{max}} \\times 100$',
        '$\\eta = \\dfrac{n_{max}}{n_{obtenu}} \\times 100$',
        '$\\eta = n_{obtenu} + n_{max}$',
        '$\\eta = \\dfrac{m_{reactif}}{m_{produit}}$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le rendement compare la quantité effectivement obtenue à la quantité maximale théoriquement attendue.',
    },
    {
      difficulty: 'MEDIUM',
      order: 8,
      question:
        'Une synthèse permet d’obtenir $0{,}30\\,\\mathrm{mol}$ de produit alors que la quantité maximale théorique est $0{,}40\\,\\mathrm{mol}$. Quel est le rendement ?',
      choices: ['$75\\%$', '$40\\%$', '$133\\%$', '$30\\%$'],
      correctChoiceIndex: 0,
      explanation:
        'On calcule $\\eta = \\dfrac{0{,}30}{0{,}40} \\times 100 = 75\\%$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 9,
      question:
        'Dans une synthèse limitée par un état d’équilibre, quelle stratégie permet généralement d’augmenter le rendement final ?',
      choices: [
        'Introduire un réactif en excès ou éliminer un produit formé',
        'Ajouter uniquement un catalyseur',
        'Augmenter seulement le volume du solvant',
        'Refroidir brutalement le mélange sans autre modification',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour favoriser les produits, on peut déplacer l’équilibre en introduisant un réactif en excès ou en éliminant un produit au fur et à mesure.',
    },
    {
      difficulty: 'EASY',
      order: 10,
      question:
        'Si, pour une transformation chimique, le quotient de réaction initial vérifie $Q_{r,i} < K$, dans quel sens le système évolue-t-il spontanément ?',
      choices: [
        'Dans le sens direct',
        'Dans le sens inverse',
        'Il est déjà à l’équilibre',
        'Le sens est impossible à prévoir',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Lorsque $Q_{r,i} < K$, le système évolue dans le sens qui augmente $Q_r$, donc vers les produits.',
    },
    {
      difficulty: 'MEDIUM',
      order: 11,
      question:
        'Pour une estérification modélisée par acide + alcool $\\rightleftharpoons$ ester + eau, quel est l’effet de l’élimination de l’eau au fur et à mesure ?',
      choices: [
        'Elle déplace l’équilibre dans le sens de formation de l’ester',
        'Elle déplace l’équilibre dans le sens inverse',
        'Elle ne change pas l’état d’équilibre',
        'Elle bloque immédiatement la réaction',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’eau étant un produit, son élimination favorise le sens direct selon la loi d’évolution spontanée du système.',
    },
    {
      difficulty: 'HARD',
      order: 12,
      question:
        'À propos d’un catalyseur dans une synthèse limitée par un état d’équilibre, quelle affirmation est correcte ?',
      choices: [
        'Il accélère l’atteinte de l’état final sans déplacer l’équilibre',
        'Il augmente la quantité maximale théorique de produit',
        'Il modifie les coefficients stœchiométriques de la réaction',
        'Il rend la transformation totale dans tous les cas',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un catalyseur agit sur la vitesse de transformation. Il ne change ni la stœchiométrie, ni la position de l’équilibre.',
    },
    {
      difficulty: 'EASY',
      order: 13,
      question:
        'À composition initiale identique, quelle modification augmente généralement la vitesse initiale d’une synthèse ?',
      choices: [
        'Élever modérément la température',
        'Refroidir le milieu',
        'Diluer fortement le mélange',
        'Retirer le catalyseur',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une augmentation de la température accroît en général la fréquence des collisions efficaces et donc la vitesse initiale.',
    },
    {
      difficulty: 'MEDIUM',
      order: 14,
      question:
        'Quel effet a en général une dilution du milieu réactionnel sur la vitesse initiale de formation du produit ?',
      choices: [
        'Elle la diminue',
        'Elle l’augmente toujours',
        'Elle la rend nulle dans tous les cas',
        'Elle ne change jamais rien',
      ],
      correctChoiceIndex: 0,
      explanation:
        'En diluant le milieu, on diminue généralement les concentrations des réactifs, donc la fréquence des collisions efficaces.',
    },
    {
      difficulty: 'MEDIUM',
      order: 15,
      question:
        'Quels paramètres sont des facteurs cinétiques classiques lors d’une synthèse ?',
      choices: [
        'La température, la concentration et la présence d’un catalyseur',
        'La couleur, la masse molaire et le nom IUPAC',
        'La formule brute, la densité et l’odeur',
        'Uniquement le rendement final',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Les facteurs cinétiques classiques étudiés au lycée sont notamment la température, la concentration des réactifs et la catalyse.',
    },
    {
      difficulty: 'MEDIUM',
      order: 16,
      question:
        'Pour augmenter surtout la vitesse initiale de formation de l’ester, quelle modification est la plus pertinente ?',
      choices: [
        'Chauffer le mélange et ajouter quelques gouttes de catalyseur acide',
        'Installer uniquement un Dean-Stark',
        'Ajouter un peu d’ester dès le départ',
        'Refroidir le milieu réactionnel',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le chauffage et la catalyse agissent principalement sur la vitesse. Le Dean-Stark agit surtout sur la composition à l’équilibre.',
    },
    {
      difficulty: 'MEDIUM',
      order: 17,
      question:
        'Dans cette estérification, quel dispositif agit principalement sur le rendement final ?',
      choices: [
        'Le Dean-Stark qui retire l’eau formée',
        'Le thermomètre',
        'Le barreau aimanté',
        'Le support élévateur',
      ],
      correctChoiceIndex: 0,
      explanation:
        'En retirant l’eau, le Dean-Stark déplace l’équilibre dans le sens de formation de l’ester et améliore le rendement final.',
    },
    {
      difficulty: 'HARD',
      order: 18,
      question:
        'Pourquoi l’ajout d’un alcool en excès peut-il améliorer la quantité finale d’ester obtenue ?',
      choices: [
        'Parce qu’il favorise l’évolution dans le sens direct et peut déplacer l’équilibre vers les produits',
        'Parce qu’il supprime automatiquement le besoin de catalyseur',
        'Parce qu’il rend la réaction athermique',
        'Parce qu’il diminue toujours la vitesse de réaction',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Introduire un réactif en excès est une façon classique de favoriser les produits dans une synthèse limitée par un équilibre.',
    },
    {
      difficulty: 'MEDIUM',
      order: 19,
      question:
        'Quelle comparaison entre chauffage et Dean-Stark est correcte dans une estérification ?',
      choices: [
        'Le chauffage agit surtout sur la vitesse, le Dean-Stark surtout sur le rendement',
        'Le chauffage agit seulement sur le rendement, le Dean-Stark seulement sur la vitesse',
        'Les deux n’agissent que sur la vitesse',
        'Les deux rendent toujours la transformation totale',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le chauffage accélère en général la transformation, tandis que le Dean-Stark modifie la composition du milieu en retirant l’eau et favorise ainsi les produits.',
    },
    {
      difficulty: 'EASY',
      order: 20,
      question:
        'Dans le nom d’une espèce organique, quelle partie aide le plus souvent à reconnaître la famille organique ?',
      choices: ['Le suffixe', 'Le préfixe', 'Le nombre de carbone seulement', 'La masse molaire'],
      correctChoiceIndex: 0,
      explanation:
        'Au lycée, on repère souvent la famille organique grâce à la fin du nom : -ol, -al, -one, -oate, -amide, etc.',
    },
    {
      difficulty: 'EASY',
      order: 21,
      question:
        'Observe la formule semi-développée suivante.\n![Formule semi-developpee d un alcool](/uploads/training/organique-formule-semi-developpee-alcool.svg)\nQuel groupe caractéristique reconnaît-on sur cette espèce ?',
      choices: ['-OH', '-COOH', '-NH_2', '-COO-'],
      correctChoiceIndex: 0,
      explanation:
        'Cette espèce porte un groupe hydroxyle -OH. C’est ce groupe qui caractérise la famille des alcools.',
    },
    {
      difficulty: 'MEDIUM',
      order: 22,
      question: 'Le nom « propanal » correspond à quelle famille organique ?',
      choices: ['Alcool', 'Aldéhyde', 'Ester', 'Amide'],
      correctChoiceIndex: 1,
      explanation:
        'Le suffixe -al indique un aldéhyde. Propanal appartient donc à la famille des aldéhydes.',
    },
    {
      difficulty: 'MEDIUM',
      order: 23,
      question:
        'Observe la formule semi-développée suivante.\n![Formule semi-developpee d une amine](/uploads/training/organique-formule-semi-developpee-amine.svg)\nÀ quelle famille organique appartient cette espèce ?',
      choices: ['Amine', 'Amide', 'Alcool', 'Cétone'],
      correctChoiceIndex: 0,
      explanation:
        'La présence d’un groupe -NH2 porté par la chaîne carbonée caractérise ici une amine.',
    },
    {
      difficulty: 'MEDIUM',
      order: 24,
      question:
        'Observe la formule semi-développée suivante.\n![Formule semi-developpee d une amide](/uploads/training/organique-formule-semi-developpee-amide.svg)\nÀ quelle famille organique appartient cette espèce ?',
      choices: ['Amide', 'Ester', 'Aldéhyde', 'Acide carboxylique'],
      correctChoiceIndex: 0,
      explanation:
        'On repère ici un groupement carbonyle lié à un atome d’azote : c’est la signature d’une amide.',
    },
    {
      difficulty: 'MEDIUM',
      order: 25,
      question:
        'Observe la formule semi-développée suivante.\n![Formule semi-developpee d un halogenoalcane](/uploads/training/organique-formule-semi-developpee-halogenoalcane.svg)\nÀ quelle famille organique appartient cette espèce ?',
      choices: ['Halogénoalcane', 'Alcool', 'Amine', 'Ester'],
      correctChoiceIndex: 0,
      explanation:
        'La présence d’un atome de chlore porté par une chaîne carbonée caractérise ici un halogénoalcane.',
    },
    {
      difficulty: 'MEDIUM',
      order: 26,
      question:
        'Observe la formule semi-développée suivante.\n![Formule semi-developpee du propan-2-ol](/uploads/training/organique-formule-semi-developpee-propan-2-ol.svg)\nDans le nom « propan-2-ol », à quoi correspond le chiffre 2 ?',
      choices: [
        'La position du groupe caractéristique sur la chaîne carbonée',
        'Le nombre total d’atomes d’oxygène',
        'Le nombre de doubles liaisons',
        'Le nombre de carbones de la molécule',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Dans propan-2-ol, le 2 indique sur quel carbone de la chaîne principale se trouve le groupe -OH : ici le carbone numero 2.',
    },
    {
      difficulty: 'EASY',
      order: 27,
      question:
        'Observe la formule semi-développée suivante.\n![Formule semi-developpee d un acide carboxylique](/uploads/training/organique-formule-semi-developpee-acide.svg)\nÀ quelle famille organique appartient cette espèce ?',
      choices: ['Acide carboxylique', 'Alcool', 'Ester', 'Amine'],
      correctChoiceIndex: 0,
      explanation:
        'Le groupe -COOH est le groupe caractéristique des acides carboxyliques.',
    },
    {
      difficulty: 'MEDIUM',
      order: 28,
      question:
        'Observe la formule semi-développée suivante.\n![Formule semi-developpee d une cetone](/uploads/training/organique-formule-semi-developpee-cetone.svg)\nÀ quelle famille organique appartient cette espèce ?',
      choices: ['Cétone', 'Aldéhyde', 'Alcool', 'Amide'],
      correctChoiceIndex: 0,
      explanation:
        'La présence d’un groupe carbonyle au milieu de la chaîne carbonée caractérise ici une cétone.',
    },
    {
      difficulty: 'EASY',
      order: 29,
      question:
        'Quel suffixe permet en général d’identifier une cétone dans le nom d’une espèce organique ?',
      choices: ['-one', '-ol', '-oate', '-amine'],
      correctChoiceIndex: 0,
      explanation:
        'Le suffixe -one est caractéristique des cétones, comme dans propanone.',
    },
    {
      difficulty: 'EASY',
      order: 30,
      question:
        'Observe la formule semi-développée suivante.\n![Formule semi-developpee d un ester](/uploads/training/organique-formule-semi-developpee-ester.svg)\nÀ quelle famille organique appartient cette espèce ?',
      choices: ['Ester', 'Acide carboxylique', 'Alcool', 'Amine'],
      correctChoiceIndex: 0,
      explanation:
        'La présence du groupe -COO- reliant deux portions carbonées caractérise un ester.',
    },
    {
      difficulty: 'EASY',
      order: 31,
      question:
        'Quel groupe caractéristique est associé à la famille des amides ?',
      choices: ['-CONH_2', '-NH_2', '-COOH', '-COO-'],
      correctChoiceIndex: 0,
      explanation:
        'Une amide comporte un groupe de type -CONH_2, ou plus généralement un carbonyle lié à un atome d’azote.',
    },
    {
      difficulty: 'EASY',
      order: 32,
      question:
        'Quel préfixe du nom peut signaler la présence d’un halogène sur une chaîne carbonée ?',
      choices: ['chloro-', 'hydroxy-', 'oxo-', 'hydro-'],
      correctChoiceIndex: 0,
      explanation:
        'Les préfixes chloro-, bromo-, fluoro- ou iodo- signalent la présence d’un halogène dans un halogénoalcane.',
    },
    {
      difficulty: 'EASY',
      order: 33,
      question:
        'Que signifie un rendement de $100\%$ pour une synthèse donnée ?',
      choices: [
        'La quantité obtenue est égale à la quantité maximale théorique',
        'La réaction est forcément très rapide',
        'Le produit est pur à 100\%',
        'Aucun réactif n’a été utilisé en excès',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un rendement de $100\%$ signifie que la quantité de produit obtenue est égale à la quantité maximale théorique attendue.',
    },
    {
      difficulty: 'EASY',
      order: 34,
      question:
        'Si, pour une transformation chimique, on a initialement $Q_{r,i} = K$, que peut-on dire du système ?',
      choices: [
        'Il est déjà à l’équilibre macroscopique',
        'Il évolue forcément dans le sens direct',
        'Il évolue forcément dans le sens inverse',
        'Le quotient de réaction ne peut plus être calculé',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Lorsque $Q_{r,i} = K$, l’état initial est un état d’équilibre macroscopique : il n’y a pas d’évolution spontanée observable du système.',
    },
    {
      difficulty: 'EASY',
      order: 35,
      question:
        'Quel est l’effet principal d’un catalyseur approprié sur une synthèse chimique ?',
      choices: [
        'Il augmente la vitesse de transformation sans modifier l’état final',
        'Il augmente toujours le rendement final',
        'Il change les coefficients stœchiométriques',
        'Il supprime le besoin de chauffage dans tous les cas',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un catalyseur agit sur la vitesse de transformation. Il permet d’atteindre plus vite l’état final, sans déplacer l’équilibre.',
    },
    {
      difficulty: 'MEDIUM',
      order: 36,
      question:
        'À température constante, quel effet a en général l’augmentation de la concentration d’un réactif sur la vitesse initiale ?',
      choices: [
        'Elle l’augmente',
        'Elle la diminue toujours',
        'Elle ne change rien',
        'Elle annule l’effet d’un catalyseur',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une concentration plus élevée favorise en général les collisions efficaces entre réactifs et augmente donc la vitesse initiale.',
    },
    {
      difficulty: 'EASY',
      order: 37,
      question:
        'Si une transformation est plus rapide, que devient le temps nécessaire pour atteindre une même avancée donnée ?',
      choices: [
        'Il diminue',
        'Il augmente forcément',
        'Il reste identique',
        'Il devient infini',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une transformation plus rapide atteint une même avancée en moins de temps.',
    },
    {
      difficulty: 'MEDIUM',
      order: 38,
      question:
        'Dans un montage de synthèse homogène, pourquoi agite-t-on souvent le mélange réactionnel ?',
      choices: [
        'Pour homogénéiser le milieu et favoriser les rencontres entre réactifs',
        'Pour rendre la réaction totale',
        'Pour diminuer automatiquement la température',
        'Pour changer la nature du produit formé',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’agitation homogénéise le milieu réactionnel et améliore le contact entre les espèces, ce qui facilite la transformation.',
    },
    {
      difficulty: 'MEDIUM',
      order: 39,
      question:
        'Sur deux suivis expérimentaux comparables, quel indice montre qu’une synthèse est plus rapide au début ?',
      choices: [
        'La courbe de formation du produit est plus pentue au départ',
        'La masse molaire du produit est plus grande',
        'Le rendement final vaut 100\%',
        'Le produit est coloré',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une pente initiale plus forte sur une courbe d’évolution traduit une vitesse initiale plus élevée.',
    },
    {
      difficulty: 'MEDIUM',
      order: 40,
      question:
        'Quelle grandeur est directement liée à la rapidité de formation d’un produit au tout début d’une synthèse ?',
      choices: [
        'La vitesse initiale',
        'La masse molaire',
        'Le rendement final uniquement',
        'Le numéro atomique du catalyseur',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La vitesse initiale est la grandeur qui décrit la rapidité de formation du produit au début de la transformation.',
    },
    {
      difficulty: 'MEDIUM',
      order: 41,
      question:
        'Pour la synthèse de l’ammoniac modélisée par $N_2 + 3H_2 \rightleftharpoons 2NH_3$, quel rapport initial $n_{H_2}/n_{N_2}$ correspond aux proportions stœchiométriques ?',
      choices: ['$1$', '$2$', '$3$', '$4$'],
      correctChoiceIndex: 2,
      explanation:
        'Les coefficients stœchiométriques imposent 1 mole de $N_2$ pour 3 moles de $H_2$. Le rapport stœchiométrique vaut donc 3.',
    },
    {
      difficulty: 'MEDIUM',
      order: 42,
      question:
        'La synthèse de l’ammoniac est exothermique. À pression fixée, quel effet a en général une baisse de température sur l’équilibre ?',
      choices: [
        'Elle favorise la formation de $NH_3$',
        'Elle favorise la décomposition de $NH_3$',
        'Elle ne change rien à l’état d’équilibre',
        'Elle annule l’influence de la composition initiale',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour une transformation exothermique, une baisse de température favorise en général le sens qui libère de l’énergie thermique, ici le sens de formation de l’ammoniac.',
    },
    {
      difficulty: 'MEDIUM',
      order: 43,
      question:
        'Si l’on prépare le mélange initial avec trop peu de $H_2$ par rapport à la proportion $1:3$, quel réactif manque pour former davantage d’ammoniac ?',
      choices: ['$N_2$', '$H_2$', '$NH_3$', 'Aucun, le mélange est stœchiométrique'],
      correctChoiceIndex: 1,
      explanation:
        'Si le rapport $n_{H_2}/n_{N_2}$ est inférieur à 3, le dihydrogène est insuffisant par rapport aux proportions stœchiométriques.',
    },
    {
      difficulty: 'MEDIUM',
      order: 44,
      question:
        'À l’équilibre, si la fraction molaire de l’ammoniac vaut $y_{NH_3}=0{,}40$, que signifie cette valeur ?',
      choices: [
        '40 % des moles du mélange gazeux sont de l’ammoniac',
        '40 % de la masse du mélange est forcément de l’ammoniac',
        '40 % du dihydrogène initial a disparu',
        'Le rendement vaut forcément 40 %',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une fraction molaire de 0,40 signifie que l’ammoniac représente 40 % de la quantité totale de matière du mélange gazeux à l’équilibre.',
    },
    {
      difficulty: 'HARD',
      order: 45,
      question:
        'On part de $1{,}0\,\mathrm{mol}$ de $N_2$ et $3{,}0\,\mathrm{mol}$ de $H_2$. À l’équilibre, on mesure $y_{NH_3}=0{,}40$. Quel rendement approché obtient-on pour la synthèse ?',
      choices: ['$40\%$', '$57\%$', '$67\%$', '$80\%$'],
      correctChoiceIndex: 1,
      explanation:
        'Si l’avancement vaut $x$, alors $n_{NH_3}=2x$ et la quantité totale vaut $4-2x$. La relation $\dfrac{2x}{4-2x}=0{,}40$ donne $x\approx 0{,}57$. Comme $x_{max}=1{,}0\,\mathrm{mol}$, le rendement vaut environ 57 %.',
    },
    {
      difficulty: 'EASY',
      order: 46,
      question:
        'Dans une étude de l’effet de la température sur une synthèse organique, quel paramètre expérimental change entre les deux protocoles comparés ?',
      choices: ['La température', 'La nature du produit', 'Le nombre de réactifs', 'La définition du rendement'],
      correctChoiceIndex: 0,
      explanation:
        'Dans cette comparaison, on cherche précisément à isoler l’effet de la température sur la rapidité de la synthèse.',
    },
    {
      difficulty: 'EASY',
      order: 47,
      question:
        'Deux protocoles utilisent les mêmes quantités initiales; le protocole B est réalisé à plus haute température. Quel protocole est en général le plus rapide au début ?',
      choices: ['Le protocole B', 'Le protocole A', 'Les deux ont forcément la même vitesse', 'On ne peut jamais comparer'],
      correctChoiceIndex: 0,
      explanation:
        'À composition identique, une température plus élevée augmente généralement la vitesse initiale de formation du produit.',
    },
    {
      difficulty: 'MEDIUM',
      order: 48,
      question:
        'Sur un graphique donnant la masse de produit isolé en fonction du temps, quel indice montre que le protocole B est plus rapide au départ ?',
      choices: [
        'La courbe B est plus pentue au début',
        'La courbe B commence à l’origine',
        'La courbe B est tracée en rouge',
        'La courbe B coupe l’axe du temps plus loin',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une pente initiale plus forte signifie que la masse de produit augmente plus vite au début : la vitesse initiale est plus grande.',
    },
    {
      difficulty: 'MEDIUM',
      order: 49,
      question:
        'Si les deux protocoles atteignent finalement le même plateau de masse de produit, que peut-on conclure ?',
      choices: [
        'Ils mènent à la même quantité finale de produit, mais pas à la même vitesse',
        'Ils ont la même vitesse initiale',
        'Le protocole le plus chaud a forcément un meilleur rendement final',
        'Le protocole le plus lent est faux',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un même plateau final indique une même quantité finale de produit isolé, même si l’un des protocoles atteint ce plateau plus rapidement.',
    },
    {
      difficulty: 'MEDIUM',
      order: 50,
      question:
        'Pour isoler l’effet de la température dans cette comparaison, quelle précaution est indispensable ?',
      choices: [
        'Conserver les mêmes quantités initiales et les mêmes réactifs',
        'Changer en même temps la température et le catalyseur',
        'Modifier la nature du solvant et du produit',
        'Mesurer seulement la masse molaire du produit',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour attribuer une différence observée à la seule température, les autres paramètres importants doivent rester identiques.',
    },
    {
      difficulty: 'EASY',
      order: 51,
      question:
        'Le produit nommé « éthanoate d’isoamyle » appartient à quelle famille organique ?',
      choices: ['Ester', 'Alcool', 'Amide', 'Aldéhyde'],
      correctChoiceIndex: 0,
      explanation:
        'Le suffixe -oate indique que l’espèce appartient à la famille des esters.',
    },
    {
      difficulty: 'EASY',
      order: 52,
      question:
        'Dans la transformation entre acide éthanoïque et alcool isoamylique, quel réactif appartient à la famille des alcools ?',
      choices: [
        'L’alcool isoamylique',
        'L’acide éthanoïque',
        'L’eau formée',
        'Aucun des deux',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le nom même d’alcool isoamylique indique qu’il appartient à la famille des alcools.',
    },
    {
      difficulty: 'MEDIUM',
      order: 53,
      question:
        'Dans un protocole où l’on ajoute quelques gouttes d’acide sulfurique sans le consommer, quel est son rôle principal ?',
      choices: [
        'Catalyseur',
        'Produit de réaction',
        'Réactif limitant',
        'Solvant inerte',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Ajouté en faible quantité sans être consommé à l’état final, l’acide sulfurique joue ici le rôle de catalyseur.',
    },
    {
      difficulty: 'MEDIUM',
      order: 54,
      question:
        'Pourquoi le retrait progressif de l’eau formée peut-il augmenter la masse finale d’ester isolé ?',
      choices: [
        'Parce qu’il déplace l’équilibre dans le sens de formation de l’ester',
        'Parce qu’il annule le besoin de chauffage',
        'Parce qu’il change la nature du produit',
        'Parce qu’il diminue la masse molaire de l’ester',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’eau est un produit de la transformation. En la retirant, on favorise le sens direct et l’on peut obtenir davantage d’ester.',
    },
    {
      difficulty: 'MEDIUM',
      order: 55,
      question:
        'Si un protocole atteint plus vite le plateau de masse d’ester et que ce plateau est plus élevé, quelle conclusion est correcte ?',
      choices: [
        'Le protocole est à la fois plus rapide et plus favorable au rendement final',
        'Le protocole est seulement plus rapide, sans effet sur la quantité finale',
        'Le protocole donne un produit différent',
        'Le protocole est moins efficace mais mieux agité',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un plateau atteint plus vite traduit une synthèse plus rapide, et un plateau plus haut indique une quantité finale de produit plus grande.',
    },
    {
      difficulty: 'MEDIUM',
      order: 56,
      question:
        'La quantité maximale théorique d’ester est $0{,}50\,\mathrm{mol}$ et l’on en isole finalement $0{,}42\,\mathrm{mol}$. Quel est le rendement ?',
      choices: ['$84\%$', '$42\%$', '$58\%$', '$120\%$'],
      correctChoiceIndex: 0,
      explanation:
        'Le rendement vaut $\eta = \dfrac{0{,}42}{0{,}50} \times 100 = 84\%$.',
    },
    {
      difficulty: 'EASY',
      order: 57,
      question:
        'Dans le nom « butanone », quelle partie du mot permet surtout d’identifier la famille organique ?',
      choices: ['Le suffixe -one', 'Le préfixe but-', 'Le nombre total de lettres', 'L’absence de chiffre'],
      correctChoiceIndex: 0,
      explanation:
        'En nomenclature organique, c’est surtout la fin du nom qui renseigne sur la famille. Ici, le suffixe -one indique une cétone.',
    },
    {
      difficulty: 'EASY',
      order: 58,
      question:
        'Dans le nom « 2-chloropropane », que signale le préfixe « chloro- » ?',
      choices: [
        'La présence d’un atome de chlore sur la chaîne carbonée',
        'La présence d’un groupe hydroxyle',
        'Une double liaison',
        'Une fonction acide',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le préfixe chloro- indique qu’un atome de chlore est fixé sur la chaîne carbonée.',
    },
    {
      difficulty: 'EASY',
      order: 59,
      question:
        'Dans le nom « pentan-1-ol », que signifie la partie « pentan- » ?',
      choices: [
        'La chaîne principale contient cinq atomes de carbone',
        'La molécule contient cinq atomes d’oxygène',
        'Le groupe caractéristique est en position 5',
        'La molécule possède cinq doubles liaisons',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le radical pentan- indique une chaîne principale de cinq atomes de carbone.',
    },
    {
      difficulty: 'MEDIUM',
      order: 60,
      question:
        'Dans le nom « 3-méthylbutan-1-ol », que signifie la partie « 3-méthyl » ?',
      choices: [
        'Un groupe méthyle est fixé sur le carbone 3 de la chaîne principale',
        'Le groupe -OH est fixé sur le carbone 3',
        'La chaîne principale contient trois carbones',
        'La molécule possède trois groupes méthyle isolés',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le fragment 3-méthyl signale une ramification méthyle portée par le carbone 3 de la chaîne principale.',
    },
    {
      difficulty: 'MEDIUM',
      order: 61,
      question:
        'Quelle différence de nomenclature distingue propan-1-ol de propan-2-ol ?',
      choices: [
        'La position du groupe hydroxyle sur la chaîne carbonée',
        'Le nombre total d’atomes de carbone',
        'La présence ou non d’un atome d’oxygène',
        'La famille organique',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Les deux espèces appartiennent à la famille des alcools, mais le groupe -OH n’est pas placé sur le même carbone.',
    },
    {
      difficulty: 'MEDIUM',
      order: 62,
      question:
        'Quand on numérote une chaîne carbonée, de quel côté commence-t-on en priorité ?',
      choices: [
        'Du côté le plus proche du groupe caractéristique principal',
        'Toujours depuis la gauche',
        'Toujours depuis la droite',
        'Depuis le carbone le plus éloigné de toute ramification',
      ],
      correctChoiceIndex: 0,
      explanation:
        'On choisit la numérotation qui donne au groupe caractéristique principal le plus petit numéro possible.',
    },
    {
      difficulty: 'EASY',
      order: 63,
      question:
        'Quel radical de base correspond à une chaîne principale de quatre carbones ?',
      choices: ['butan-', 'méthan-', 'éthan-', 'propan-'],
      correctChoiceIndex: 0,
      explanation:
        'Une chaîne de quatre carbones correspond au radical butan-.',
    },
    {
      difficulty: 'MEDIUM',
      order: 64,
      question:
        'Dans le nom « hexan-2-one », à quoi correspond le chiffre 2 ?',
      choices: [
        'À la position du groupe carbonyle sur la chaîne principale',
        'Au nombre total d’atomes d’oxygène',
        'Au nombre de groupes carbonyle',
        'Au nombre d’atomes de carbone',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Dans hexan-2-one, le 2 indique la position du groupe carbonyle sur la chaîne principale.',
    },
    {
      difficulty: 'EASY',
      order: 65,
      question:
        'À quelle famille organique appartient l’espèce de formule $CH_3-CH_2-OH$ ?',
      choices: ['Alcool', 'Aldéhyde', 'Acide carboxylique', 'Ester'],
      correctChoiceIndex: 0,
      explanation:
        'La formule fait apparaître un groupe hydroxyle -OH porté par une chaîne carbonée : c’est un alcool.',
    },
    {
      difficulty: 'EASY',
      order: 66,
      question:
        'Parmi les noms suivants, lequel correspond à un alcool ?',
      choices: ['Éthanol', 'Propanal', 'Propanone', 'Éthanamide'],
      correctChoiceIndex: 0,
      explanation:
        'Le nom éthanol se termine par -ol, suffixe caractéristique des alcools.',
    },
    {
      difficulty: 'MEDIUM',
      order: 67,
      question:
        'Comment nomme-t-on l’espèce de formule $CH_3-CH(OH)-CH_3$ ?',
      choices: ['Propan-2-ol', 'Propan-1-ol', 'Propanal', 'Propanone'],
      correctChoiceIndex: 0,
      explanation:
        'La chaîne principale comporte trois carbones et le groupe -OH est porté par le carbone 2 : on obtient propan-2-ol.',
    },
    {
      difficulty: 'MEDIUM',
      order: 68,
      question:
        'Dans la formule $CH_3-CH_2-CH_2-OH$, sur quel carbone est porté le groupe hydroxyle si l’on numérote correctement la chaîne ?',
      choices: ['Carbone 1', 'Carbone 2', 'Carbone 3', 'On ne peut pas numéroter'],
      correctChoiceIndex: 0,
      explanation:
        'On numérote à partir de l’extrémité la plus proche du groupe -OH. Celui-ci est donc en position 1.',
    },
    {
      difficulty: 'EASY',
      order: 69,
      question:
        'Quel suffixe complète le nom « butan-2-... » pour former le nom d’un alcool ?',
      choices: ['-ol', '-al', '-one', '-oate'],
      correctChoiceIndex: 0,
      explanation:
        'Le suffixe -ol est le marqueur usuel de la famille des alcools.',
    },
    {
      difficulty: 'MEDIUM',
      order: 70,
      question:
        'Quelle formule correspond à un alcool ?',
      choices: [
        '$CH_3-CH_2-OH$',
        '$CH_3-CHO$',
        '$CH_3-COOH$',
        '$CH_3-COO-CH_3$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La formule $CH_3-CH_2-OH$ contient un groupe hydroxyle -OH porté par une chaîne carbonée : c’est un alcool.',
    },
    {
      difficulty: 'MEDIUM',
      order: 71,
      question:
        'L’espèce nommée « éthane-1,2-diol » contient combien de groupes hydroxyle ?',
      choices: ['Deux', 'Un', 'Trois', 'Aucun'],
      correctChoiceIndex: 0,
      explanation:
        'Le terme diol indique la présence de deux groupes hydroxyle -OH dans la molécule.',
    },
    {
      difficulty: 'MEDIUM',
      order: 72,
      question:
        'Parmi les noms suivants, lequel désigne un alcool ramifié ?',
      choices: [
        '2-méthylpropan-1-ol',
        'Propanal',
        'Éthanoate de méthyle',
        'Propanone',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le nom 2-méthylpropan-1-ol indique à la fois la famille alcool et la présence d’une ramification méthyle.',
    },
    {
      difficulty: 'EASY',
      order: 73,
      question:
        'À quelle famille organique appartient l’espèce de formule $CH_3-CH_2-CHO$ ?',
      choices: ['Aldéhyde', 'Cétone', 'Alcool', 'Amide'],
      correctChoiceIndex: 0,
      explanation:
        'Le groupe carbonyle est ici en bout de chaîne : l’espèce appartient à la famille des aldéhydes.',
    },
    {
      difficulty: 'EASY',
      order: 74,
      question:
        'À quelle famille organique appartient l’espèce de formule $CH_3-CO-CH_2-CH_3$ ?',
      choices: ['Cétone', 'Aldéhyde', 'Alcool', 'Acide carboxylique'],
      correctChoiceIndex: 0,
      explanation:
        'Le groupe carbonyle est situé au milieu de la chaîne carbonée : il s’agit d’une cétone.',
    },
    {
      difficulty: 'EASY',
      order: 75,
      question:
        'Quel suffixe permet en général d’identifier un aldéhyde dans le nom d’une espèce organique ?',
      choices: ['-al', '-ol', '-amide', '-oate'],
      correctChoiceIndex: 0,
      explanation:
        'Le suffixe -al est caractéristique des aldéhydes, comme dans propanal.',
    },
    {
      difficulty: 'MEDIUM',
      order: 76,
      question:
        'Dans quelle famille le groupe carbonyle est-il situé en bout de chaîne carbonée ?',
      choices: ['Les aldéhydes', 'Les cétones', 'Les esters', 'Les alcools'],
      correctChoiceIndex: 0,
      explanation:
        'Un aldéhyde possède un groupe carbonyle terminal, alors qu’une cétone le porte au milieu de la chaîne.',
    },
    {
      difficulty: 'MEDIUM',
      order: 77,
      question:
        'Parmi les noms suivants, lequel correspond à une cétone ?',
      choices: ['Butan-2-one', 'Butanal', 'Butan-1-ol', 'Acide butanoïque'],
      correctChoiceIndex: 0,
      explanation:
        'Le suffixe -one indique une cétone. Butan-2-one appartient donc à cette famille.',
    },
    {
      difficulty: 'MEDIUM',
      order: 78,
      question:
        'Les espèces propanal et propanone ont la même formule brute. Que sont-elles l’une par rapport à l’autre ?',
      choices: [
        'Des isomères de constitution',
        'La même espèce écrite différemment',
        'Des isotopes',
        'Des polymères',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Elles possèdent la même formule brute, mais un enchaînement d’atomes différent : ce sont des isomères de constitution.',
    },
    {
      difficulty: 'MEDIUM',
      order: 79,
      question:
        'Quelle formule correspond à un aldéhyde ?',
      choices: [
        '$CH_3-CH_2-CHO$',
        '$CH_3-CO-CH_3$',
        '$CH_3-CH_2-OH$',
        '$CH_3-CONH_2$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La formule $CH_3-CH_2-CHO$ montre un groupe carbonyle terminal, caractéristique d’un aldéhyde.',
    },
    {
      difficulty: 'EASY',
      order: 80,
      question:
        'À quelle famille organique appartient l’espèce de formule $CH_3-COOH$ ?',
      choices: ['Acide carboxylique', 'Ester', 'Alcool', 'Amine'],
      correctChoiceIndex: 0,
      explanation:
        'La présence du groupe -COOH caractérise un acide carboxylique.',
    },
    {
      difficulty: 'EASY',
      order: 81,
      question:
        'À quelle famille organique appartient l’espèce de formule $CH_3-COO-CH_2-CH_3$ ?',
      choices: ['Ester', 'Acide carboxylique', 'Alcool', 'Amide'],
      correctChoiceIndex: 0,
      explanation:
        'Le groupe -COO- reliant deux fragments carbonés caractérise un ester.',
    },
    {
      difficulty: 'EASY',
      order: 82,
      question:
        'Parmi les noms suivants, lequel correspond à un acide carboxylique ?',
      choices: [
        'Acide propanoïque',
        'Propanoate de méthyle',
        'Propanamide',
        'Propanal',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le mot acide et la terminaison -oïque signalent ici un acide carboxylique.',
    },
    {
      difficulty: 'MEDIUM',
      order: 83,
      question:
        'Parmi les noms suivants, lequel correspond à un ester ?',
      choices: [
        'Propanoate d’éthyle',
        'Acide propanoïque',
        'Propanone',
        'Propylamine',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La tournure en -oate de ... est caractéristique de la nomenclature des esters.',
    },
    {
      difficulty: 'MEDIUM',
      order: 84,
      question:
        'Quel groupe caractéristique permet de reconnaître un acide carboxylique ?',
      choices: ['-COOH', '-COO-', '-OH', '-NH_2'],
      correctChoiceIndex: 0,
      explanation:
        'Le groupe -COOH est la signature d’un acide carboxylique.',
    },
    {
      difficulty: 'MEDIUM',
      order: 85,
      question:
        'Dans la formule d’un ester, quel enchaînement d’atomes repère-t-on ?',
      choices: ['-COO-', '-COOH', '-CONH_2', '-NH_2'],
      correctChoiceIndex: 0,
      explanation:
        'Le groupe -COO- est le motif caractéristique des esters.',
    },
    {
      difficulty: 'MEDIUM',
      order: 86,
      question:
        'Dans le nom « éthanoate de méthyle », quelle partie du nom correspond au groupe porté par l’oxygène de l’ester ?',
      choices: ['de méthyle', 'éthanoate', 'le chiffre 1', 'aucune partie du nom'],
      correctChoiceIndex: 0,
      explanation:
        'Dans un ester, la partie après de correspond au groupe carboné porté par l’oxygène.',
    },
    {
      difficulty: 'EASY',
      order: 87,
      question:
        'À quelle famille organique appartient l’espèce de formule $CH_3-CH_2-NH_2$ ?',
      choices: ['Amine', 'Amide', 'Alcool', 'Ester'],
      correctChoiceIndex: 0,
      explanation:
        'Le groupe -NH_2 porté directement par la chaîne carbonée caractérise une amine.',
    },
    {
      difficulty: 'EASY',
      order: 88,
      question:
        'Parmi les noms suivants, lequel correspond à une amide ?',
      choices: ['Propanamide', 'Propylamine', 'Chloropropane', 'Propanal'],
      correctChoiceIndex: 0,
      explanation:
        'Le suffixe -amide indique que l’espèce appartient à la famille des amides.',
    },
    {
      difficulty: 'MEDIUM',
      order: 89,
      question:
        'Dans la formule $CH_3-CONH_2$, quel groupe caractéristique repère-t-on ?',
      choices: ['-CONH_2', '-NH_2', '-COOH', '-COO-'],
      correctChoiceIndex: 0,
      explanation:
        'Le groupe -CONH_2, ou plus généralement un carbonyle lié à un atome d’azote, caractérise une amide.',
    },
    {
      difficulty: 'EASY',
      order: 90,
      question:
        'Parmi les noms suivants, lequel correspond à un halogénoalcane ?',
      choices: ['1-chloropropane', 'Propan-1-ol', 'Propanamide', 'Propanone'],
      correctChoiceIndex: 0,
      explanation:
        'Le préfixe chloro- signale un halogénoalcane.',
    },
    {
      difficulty: 'MEDIUM',
      order: 91,
      question:
        'Quelle formule correspond à une amine et non à une amide ?',
      choices: [
        '$CH_3-CH_2-NH_2$',
        '$CH_3-CONH_2$',
        '$CH_3-COOH$',
        '$CH_3-COO-CH_3$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Dans une amine, le groupe -NH_2 est lié directement à la chaîne carbonée, sans carbonyle voisin.',
    },
    {
      difficulty: 'EASY',
      order: 92,
      question:
        'Dans une formule topologique, les atomes autres que le carbone et l’hydrogène sont-ils en général écrits explicitement ?',
      choices: ['Oui', 'Non, jamais', 'Seulement l’oxygène', 'Seulement le chlore'],
      correctChoiceIndex: 0,
      explanation:
        'Dans une formule topologique, les hétéroatomes comme O, N ou Cl sont écrits explicitement.',
    },
    {
      difficulty: 'MEDIUM',
      order: 93,
      question:
        'Propan-1-ol et propan-2-ol ont la même formule brute. Que sont-ils ?',
      choices: [
        'Des isomères de constitution',
        'Deux écritures de la même molécule',
        'Des allotropes',
        'Des isotopes',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Les deux espèces ont la même formule brute, mais une connectivité différente liée à la position du groupe -OH.',
    },
    {
      difficulty: 'EASY',
      order: 94,
      question:
        'Dans une formule semi-développée, les liaisons principales entre atomes sont-elles représentées ?',
      choices: [
        'Oui, contrairement à une formule brute',
        'Non, jamais',
        'Seulement les doubles liaisons',
        'Seulement les liaisons vers l’oxygène',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La formule semi-développée rend visibles les principaux enchaînements d’atomes, contrairement à la formule brute.',
    },
    {
      difficulty: 'MEDIUM',
      order: 95,
      question:
        'Quel motif correspond au polymère noté $(-CH_2-CH_2-)_n$ ?',
      choices: ['$-CH_2-CH_2-$', '$-CH_2-$', '$-CH_2-CH_2-CH_2-$', '$-CH=CH-$'],
      correctChoiceIndex: 0,
      explanation:
        'Le motif est l’unité qui se répète le long de la chaîne macromoléculaire. Ici, il s’agit de $-CH_2-CH_2-$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 96,
      question:
        'Quelle écriture est la plus compacte pour faire apparaître rapidement l’enchaînement carboné sans écrire tous les C ni tous les H ?',
      choices: [
        'La formule topologique',
        'La formule brute',
        'Le nom systématique uniquement',
        'Le tableau d’avancement',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La formule topologique allège volontairement l’écriture de la chaîne carbonée en rendant implicites les carbones et les hydrogènes associés.',
    },
    {
      difficulty: 'MEDIUM',
      order: 97,
      question:
        'Dans une formule topologique, comment reconnaît-on un hétéroatome comme O, N ou Cl ?',
      choices: [
        'Son symbole chimique est écrit explicitement',
        'Il est toujours remplacé par un point',
        'Il n’apparaît que dans le titre',
        'Il est caché comme les carbones',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Contrairement aux carbones et aux hydrogènes portés par eux, les hétéroatomes restent écrits explicitement.',
    },
    {
      difficulty: 'EASY',
      order: 98,
      question:
        'À quelle famille organique appartient l’espèce $CH_3-CH_2-CH_2-NH_2$ ?',
      choices: ['Amine', 'Amide', 'Alcool', 'Acide carboxylique'],
      correctChoiceIndex: 0,
      explanation:
        'Le groupe -NH_2 est directement lié à la chaîne carbonée : l’espèce appartient à la famille des amines.',
    },
    {
      difficulty: 'MEDIUM',
      order: 99,
      question:
        'Le nom « pentan-2-one » correspond à quelle famille organique ?',
      choices: ['Cétone', 'Aldéhyde', 'Amide', 'Ester'],
      correctChoiceIndex: 0,
      explanation:
        'Le suffixe -one indique une cétone.',
    },
    {
      difficulty: 'MEDIUM',
      order: 100,
      question:
        'À quelle famille organique appartient l’espèce $CH_3-CH_2-COO-CH_3$ ?',
      choices: ['Ester', 'Acide carboxylique', 'Amine', 'Alcool'],
      correctChoiceIndex: 0,
      explanation:
        'Le groupe -COO- entre deux fragments carbonés caractérise un ester.',
    },
    {
      difficulty: 'MEDIUM',
      order: 101,
      question:
        'Dans le nom « 2-bromobutane », que signifie le chiffre 2 ?',
      choices: [
        'La position de l’atome de brome sur la chaîne carbonée',
        'Le nombre total d’atomes de brome',
        'La longueur de la chaîne principale',
        'Le nombre de doubles liaisons',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le chiffre 2 indique sur quel carbone de la chaîne principale se trouve l’atome de brome.',
    },
    {
      difficulty: 'MEDIUM',
      order: 102,
      question:
        'Les espèces $CH_3-CH_2-CHO$ et $CH_3-CO-CH_3$ sont :',
      choices: [
        'Des isomères de constitution',
        'La même espèce chimique',
        'Deux polymères',
        'Deux alcools',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Elles ont la même formule brute $C_3H_6O$, mais appartiennent à deux familles différentes : ce sont des isomères de constitution.',
    },
    {
      difficulty: 'EASY',
      order: 103,
      question:
        'Parmi les noms suivants, lequel correspond à une amine ?',
      choices: ['Propan-1-amine', 'Propanamide', 'Propanone', 'Acide propanoïque'],
      correctChoiceIndex: 0,
      explanation:
        'Le suffixe -amine indique la famille des amines.',
    },
    {
      difficulty: 'MEDIUM',
      order: 104,
      question:
        'Quelle formule correspond à un acide carboxylique ?',
      choices: [
        '$CH_3-CH_2-COOH$',
        '$CH_3-CH_2-COO-CH_3$',
        '$CH_3-CH_2-NH_2$',
        '$CH_3-CH_2-OH$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le groupe -COOH identifie un acide carboxylique.',
    },
    {
      difficulty: 'MEDIUM',
      order: 105,
      question:
        'Dans une formule topologique, que traduit un segment latéral attaché à la chaîne principale ?',
      choices: [
        'Une ramification de la chaîne carbonée',
        'Une double liaison obligatoire',
        'Un groupe carbonyle caché',
        'Une molécule d’eau liée au composé',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un segment latéral dans une formule topologique signale une ramification de la chaîne carbonée.',
    },
    {
      difficulty: 'MEDIUM',
      order: 106,
      question:
        'Parmi les préfixes suivants, lequel indique la présence d’un atome de brome ?',
      choices: ['bromo-', 'hydroxy-', 'oxo-', 'amino-'],
      correctChoiceIndex: 0,
      explanation:
        'Le préfixe bromo- signale la présence d’un atome de brome sur la chaîne carbonée.',
    },
    {
      difficulty: 'MEDIUM',
      order: 107,
      question:
        'Dans le polymère noté $(-CH_2-CHCl-)_n$, quel est le motif répété ?',
      choices: ['$-CH_2-CHCl-$', '$-CHCl-$', '$-CH_2-CH_2-$', '$-CH_2-Cl-$'],
      correctChoiceIndex: 0,
      explanation:
        'Le motif est l’unité qui se répète le long de la macromolécule. Ici, c’est $-CH_2-CHCl-$.',
    },
    {
      difficulty: 'EASY',
      order: 108,
      question:
        'On obtient $0{,}18\,\mathrm{mol}$ de produit. La valeur théorique maximale est $0{,}24\,\mathrm{mol}$. Quel est le rendement ?',
      choices: ['$75\%$', '$24\%$', '$42\%$', '$133\%$'],
      correctChoiceIndex: 0,
      explanation:
        'On calcule $\eta = \dfrac{0{,}18}{0{,}24} \times 100 = 75\%$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 109,
      question:
        'Tu trouves un rendement de $112\%$. Quelle est la première conclusion ?',
      choices: [
        'Le résultat est incohérent et une donnée ou un calcul doit être revu',
        'La réaction a forcément été catalysée',
        'Le produit a été obtenu à l’équilibre',
        'Le rendement est excellent et forcément correct',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un rendement supérieur à 100 % n’est pas physiquement cohérent pour la quantité de matière de produit réellement obtenue.',
    },
    {
      difficulty: 'MEDIUM',
      order: 110,
      question:
        'Pour obtenir plus de produit final dans une synthèse limitée par l’équilibre, quelle action est la plus utile ?',
      choices: [
        'Retirer un produit au fur et à mesure',
        'Ajouter seulement un agitateur plus puissant',
        'Changer la couleur du ballon',
        'Mesurer plus souvent la température',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Retirer un produit déplace l’équilibre dans le sens direct et favorise une plus grande quantité finale de produit.',
    },
    {
      difficulty: 'MEDIUM',
      order: 111,
      question:
        'En estérification, quelle action améliore le plus directement le rendement final sans changer les réactifs ?',
      choices: [
        'Utiliser un montage qui élimine l’eau formée',
        'Agiter un peu plus vite le mélange',
        'Employer un thermomètre gradué différemment',
        'Changer le support de verrerie',
      ],
      correctChoiceIndex: 0,
      explanation:
        'En retirant l’eau formée, on déplace l’équilibre vers l’ester et on améliore la quantité finale obtenue.',
    },
    {
      difficulty: 'MEDIUM',
      order: 112,
      question:
        'Pourquoi mettre un réactif en excès peut-il augmenter le rendement d’une synthèse limitée par l’équilibre ?',
      choices: [
        'Parce que cela favorise le sens de formation des produits',
        'Parce que cela rend toujours la réaction totale',
        'Parce que cela supprime automatiquement les pertes au filtrage',
        'Parce que cela diminue la quantité maximale théorique',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Ajouter un réactif en excès déplace l’équilibre dans le sens direct et favorise les produits.',
    },
    {
      difficulty: 'MEDIUM',
      order: 113,
      question:
        'Si au départ $Q_{r,i} > K$, dans quel sens le système évolue-t-il spontanément ?',
      choices: [
        'Dans le sens inverse',
        'Dans le sens direct',
        'Il reste forcément bloqué',
        'Le sens dépend uniquement du catalyseur',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Quand $Q_{r,i} > K$, le système évolue dans le sens qui fait diminuer $Q_r$, donc vers les réactifs.',
    },
    {
      difficulty: 'MEDIUM',
      order: 114,
      question:
        'Pour une synthèse exothermique, quel changement favorise en général plus de produits à l’état final ?',
      choices: [
        'Abaisser la température',
        'Augmenter uniquement l’agitation',
        'Ajouter seulement un catalyseur',
        'Diluer fortement sans autre changement',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour une transformation exothermique, une température plus basse favorise en général l’état d’équilibre du côté des produits.',
    },
    {
      difficulty: 'MEDIUM',
      order: 115,
      question:
        'Deux protocoles donnent la même quantité finale de produit, mais le second y arrive plus vite. Que conclure ?',
      choices: [
        'Le second est plus rapide, sans meilleur rendement final',
        'Le second a forcément un meilleur rendement final',
        'Le premier est faux',
        'Le second change la stœchiométrie',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un même plateau final signifie la même quantité finale de produit, tandis qu’un accès plus rapide au plateau traduit une cinétique plus favorable.',
    },
    {
      difficulty: 'MEDIUM',
      order: 116,
      question:
        'Quelle phrase décrit correctement le rôle d’un catalyseur dans une synthèse limitée par l’équilibre ?',
      choices: [
        'Il accélère l’atteinte de l’état final sans modifier la composition d’équilibre',
        'Il augmente le rendement final en toutes circonstances',
        'Il modifie la quantité maximale théorique de produit',
        'Il empêche la réaction inverse',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le catalyseur agit sur la vitesse d’évolution du système, pas sur la position de l’équilibre.',
    },
    {
      difficulty: 'MEDIUM',
      order: 117,
      question:
        'Si la quantité obtenue est égale à la quantité théorique maximale, quelle est la valeur du rendement ?',
      choices: ['$100\%$', '$0\%$', '$50\%$', '$200\%$'],
      correctChoiceIndex: 0,
      explanation:
        'Quand la quantité obtenue est égale à la quantité maximale théorique, le rendement vaut 100 %.',
    },
    {
      difficulty: 'MEDIUM',
      order: 118,
      question:
        'Si on augmente la température, que devient en général le temps nécessaire pour obtenir la même quantité de produit ?',
      choices: [
        'Il diminue',
        'Il augmente toujours',
        'Il reste forcément identique',
        'Il devient infini',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une température plus élevée augmente généralement la vitesse de réaction, donc le temps nécessaire pour atteindre une même quantité de produit diminue.',
    },
    {
      difficulty: 'MEDIUM',
      order: 119,
      question:
        'Quel facteur cinétique peut accélérer une synthèse sans changer les quantités de départ des réactifs ?',
      choices: [
        'Ajouter un catalyseur approprié',
        'Retirer un produit à l’équilibre',
        'Changer le nom de la réaction',
        'Modifier la masse molaire du produit',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un catalyseur agit sur la vitesse de transformation, sans modifier les quantités initiales.',
    },
    {
      difficulty: 'MEDIUM',
      order: 120,
      question:
        'Pourquoi une concentration initiale plus élevée accélère-t-elle souvent la formation du produit ?',
      choices: [
        'Parce que les rencontres efficaces entre réactifs deviennent plus fréquentes',
        'Parce que le rendement final devient forcément plus grand',
        'Parce que le produit change de nature',
        'Parce que l’équilibre disparaît',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une concentration plus élevée favorise les collisions efficaces entre réactifs et augmente ainsi la vitesse initiale.',
    },
    {
      difficulty: 'MEDIUM',
      order: 121,
      question:
        'Dans un mélange homogène, pourquoi l’agitation peut-elle accélérer la synthèse ?',
      choices: [
        'Parce qu’elle homogénéise le milieu et facilite les rencontres entre réactifs',
        'Parce qu’elle rend la réaction totale',
        'Parce qu’elle change le rendement final en toutes circonstances',
        'Parce qu’elle remplace un catalyseur',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L’agitation homogénéise le milieu réactionnel et peut faciliter les rencontres entre les espèces réactives.',
    },
    {
      difficulty: 'MEDIUM',
      order: 122,
      question:
        'Pour une réaction avec un solide divisé, quel changement peut augmenter la vitesse ?',
      choices: [
        'Augmenter la surface de contact du solide',
        'Baisser la température',
        'Retirer un produit à la fin uniquement',
        'Changer la formule brute du solide',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une plus grande surface de contact augmente les possibilités de collision et accélère souvent la transformation.',
    },
    {
      difficulty: 'MEDIUM',
      order: 123,
      question:
        'Sur une courbe quantité de produit en fonction du temps, quel signe indique la plus grande vitesse initiale ?',
      choices: [
        'Une pente plus forte au début',
        'Une ordonnée nulle à l’origine',
        'Une couleur plus sombre de la courbe',
        'Une légende plus longue',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La vitesse initiale est liée à la pente de la courbe au début : plus elle est forte, plus la vitesse initiale est grande.',
    },
    {
      difficulty: 'MEDIUM',
      order: 124,
      question:
        'Deux protocoles atteignent le même état final, mais l’un y arrive plus tôt. Que peut-on conclure ?',
      choices: [
        'Le protocole le plus rapide a une cinétique plus favorable',
        'Le protocole le plus rapide a forcément un meilleur rendement final',
        'Les deux protocoles ont forcément la même vitesse initiale',
        'Le protocole le plus lent est incorrect',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Atteindre plus tôt le même état final signifie que la synthèse est plus rapide, pas que la quantité finale est plus grande.',
    },
    {
      difficulty: 'MEDIUM',
      order: 125,
      question:
        'Quelle modification agit surtout sur la vitesse, sans agir directement sur la composition d’équilibre ?',
      choices: [
        'Ajouter un catalyseur',
        'Retirer un produit formé',
        'Introduire un réactif en excès pour déplacer l’équilibre',
        'Choisir une transformation exothermique différente',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le catalyseur accélère la transformation sans modifier la position de l’équilibre.',
    },
    {
      difficulty: 'MEDIUM',
      order: 126,
      question:
        'Si on refroidit fortement un milieu réactionnel, quel effet observe-t-on en général sur la vitesse ?',
      choices: [
        'La vitesse diminue',
        'La vitesse augmente toujours',
        'La vitesse devient indépendante de la concentration',
        'Le catalyseur devient inutile',
      ],
      correctChoiceIndex: 0,
      explanation:
        'À plus basse température, les collisions efficaces sont généralement moins nombreuses, donc la vitesse diminue.',
    },
    {
      difficulty: 'MEDIUM',
      order: 127,
      question:
        'Quel changement expérimental montre le mieux qu’une synthèse est plus rapide ?',
      choices: [
        'Le temps pour obtenir un même score de conversion est plus court',
        'La masse molaire du produit augmente',
        'Le produit final change de formule brute',
        'Le rendement vaut forcément 100 %',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une synthèse plus rapide atteint une même conversion ou une même quantité de produit en moins de temps.',
    },
    {
      difficulty: 'EASY',
      order: 128,
      question:
        'Avec $n_{obtenu}=0{,}24\,\mathrm{mol}$ et $n_{max}=0{,}30\,\mathrm{mol}$, quel est le rendement ?',
      choices: ['$80\%$', '$24\%$', '$125\%$', '$54\%$'],
      correctChoiceIndex: 0,
      explanation:
        'Le rendement vaut $\eta=\dfrac{0{,}24}{0{,}30}\times 100=80\%$.',
    },
    {
      difficulty: 'EASY',
      order: 129,
      question: 'Quelle grandeur compare directement rendement et theorie ?',
      choices: [
        'Le rapport entre quantite obtenue et quantite maximale',
        'La masse molaire du produit',
        'La temperature du milieu',
        'Le temps de chauffage',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le rendement est defini par le rapport entre quantite obtenue et quantite maximale theorique.',
    },
    {
      difficulty: 'EASY',
      order: 130,
      question: 'Un rendement de $0\%$ signifie que :',
      choices: [
        'Aucun produit attendu n a ete obtenu',
        'La reaction est forcement totale',
        'Le produit est pur',
        'Le calcul de rendement est inutile',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Si la quantite obtenue est nulle, le rendement vaut 0 %.',
    },
    {
      difficulty: 'MEDIUM',
      order: 131,
      question:
        'Si on garde les memes reactifs et la meme theorie maximale, que faut-il faire pour augmenter le rendement ?',
      choices: [
        'Augmenter la quantite effectivement obtenue',
        'Changer le nom de la reaction',
        'Diminuer la masse molaire du produit',
        'Ignorer les pertes experimentales',
      ],
      correctChoiceIndex: 0,
      explanation:
        'A theorie maximale fixee, un meilleur rendement vient d une plus grande quantite de produit obtenue.',
    },
    {
      difficulty: 'EASY',
      order: 132,
      question:
        'Un rendement de $65\%$ veut dire que la quantite obtenue represente :',
      choices: [
        '65 % de la quantite maximale theorique',
        '65 % des reactifs initiaux',
        '65 % de la masse molaire du produit',
        '65 % du temps de reaction',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le pourcentage de rendement se lit par rapport a la quantite maximale theorique.',
    },
    {
      difficulty: 'MEDIUM',
      order: 133,
      question:
        'Lors d une synthese, quel type de probleme peut faire baisser le rendement mesure ?',
      choices: [
        'Des pertes de produit au transfert ou a la purification',
        'Le choix de l unite SI',
        'Le nom IUPAC du produit',
        'La couleur de la verrerie',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Les pertes experimentales font diminuer la quantite de produit recuperee et donc le rendement.',
    },
    {
      difficulty: 'EASY',
      order: 134,
      question:
        'Le rendement est-il une grandeur sans unite quand on l exprime en pourcentage ?',
      choices: ['Oui', 'Non', 'Seulement en phase gazeuse', 'Seulement en solution'],
      correctChoiceIndex: 0,
      explanation:
        'Le rendement est un rapport de deux quantites de meme nature, donc sans unite.',
    },
    {
      difficulty: 'EASY',
      order: 135,
      question: 'Quand $Q_{r,i}<K$, le systeme evolue spontanement :',
      choices: ['Vers les produits', 'Vers les reactifs', 'Pas du tout', 'Au hasard'],
      correctChoiceIndex: 0,
      explanation:
        'Si $Q_{r,i}<K$, le systeme evolue dans le sens direct pour augmenter $Q_r$.',
    },
    {
      difficulty: 'EASY',
      order: 136,
      question: 'Quand $Q_{r,i}>K$, le systeme evolue spontanement :',
      choices: ['Vers les reactifs', 'Vers les produits', 'Pas du tout', 'Vers un catalyseur'],
      correctChoiceIndex: 0,
      explanation:
        'Si $Q_{r,i}>K$, l evolution se fait dans le sens inverse afin de diminuer $Q_r$.',
    },
    {
      difficulty: 'MEDIUM',
      order: 137,
      question:
        'Dans une estérification, retirer l eau formee au fur et a mesure a pour effet principal :',
      choices: [
        'De deplacer l equilibre vers la formation de l ester',
        'D arreter la reaction',
        'De supprimer le besoin de verrerie',
        'De changer la stoichiometrie',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L eau est un produit : son retrait favorise le sens direct.',
    },
    {
      difficulty: 'MEDIUM',
      order: 138,
      question:
        'Introduire un reactif en exces dans une reaction d equilibre sert surtout a :',
      choices: [
        'Favoriser les produits a l etat final',
        'Diminuer forcement la vitesse',
        'Annuler la reaction inverse',
        'Rendre inutile tout calcul',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un exces de reactif deplace l equilibre dans le sens de formation des produits.',
    },
    {
      difficulty: 'MEDIUM',
      order: 139,
      question:
        'Si un systeme est deja a l equilibre, quelle relation est verifiee ?',
      choices: ['$Q_r=K$', '$Q_r<K$', '$Q_r>K$', '$Q_r=0$'],
      correctChoiceIndex: 0,
      explanation:
        'A l equilibre macroscopique, le quotient de reaction est egal a la constante d equilibre.',
    },
    {
      difficulty: 'MEDIUM',
      order: 140,
      question:
        'Pour une synthese exothermique, une baisse de temperature favorise en general :',
      choices: [
        'Les produits a l equilibre',
        'Les reactifs a l equilibre',
        'Aucun cote en particulier',
        'Une baisse systematique de rendement a zero',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour une transformation exothermique, baisser la temperature favorise en general le sens direct.',
    },
    {
      difficulty: 'MEDIUM',
      order: 141,
      question:
        'Quel enonce distingue correctement vitesse et equilibre ?',
      choices: [
        'L equilibre fixe la composition finale, la vitesse fixe le temps pour y arriver',
        'La vitesse fixe la composition finale et l equilibre fixe le temps',
        'Ce sont deux noms pour la meme idee',
        'Aucun lien avec la synthese',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La cinetique traite du rythme de la transformation, l equilibre de l etat final atteint.',
    },
    {
      difficulty: 'MEDIUM',
      order: 142,
      question:
        'Parmi ces actions, laquelle agit d abord sur la composition d equilibre ?',
      choices: [
        'Retirer un produit forme',
        'Agiter plus fort uniquement',
        'Changer la couleur du dispositif',
        'Observer plus souvent la reaction',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Retirer un produit modifie le quotient de reaction et deplace l equilibre.',
    },
    {
      difficulty: 'MEDIUM',
      order: 143,
      question:
        'Parmi ces actions, laquelle agit surtout sur la vitesse ?',
      choices: [
        'Ajouter un catalyseur',
        'Retirer un produit a l equilibre',
        'Introduire un reactif en exces pour deplacer l equilibre',
        'Changer la proportion stoechiometrique theorique',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le catalyseur accelere l evolution mais ne change pas la position de l equilibre.',
    },
    {
      difficulty: 'MEDIUM',
      order: 144,
      question:
        'Dans une estérification, quel couple d actions est le plus coherent pour augmenter la quantite finale d ester ?',
      choices: [
        'Retirer l eau et mettre un reactif en exces',
        'Ajouter un colorant et refroidir brutalement',
        'Changer l unite de masse et de volume',
        'Retirer le reactif limitant des le debut',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Ces deux actions deplacent l equilibre vers les produits.',
    },
    {
      difficulty: 'MEDIUM',
      order: 145,
      question:
        'Si deux protocoles atteignent des plateaux finals differents, que peut-on conclure en premier ?',
      choices: [
        'Leur quantite finale de produit n est pas la meme',
        'Leur vitesse initiale est identique',
        'Leur temperature est forcement egale',
        'Leur rendement est impossible a comparer',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Des plateaux differents indiquent des quantites finales de produit differentes.',
    },
    {
      difficulty: 'EASY',
      order: 146,
      question:
        'Dans une synthese limitee par equilibre, quelle strategie est en general inutile pour le rendement final ?',
      choices: [
        'Changer seulement la vitesse d agitation',
        'Retirer un produit',
        'Mettre un reactif en exces',
        'Adapter la temperature si la reaction est exothermique',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L agitation seule agit surtout sur la vitesse de melange, pas directement sur la composition d equilibre.',
    },
    {
      difficulty: 'MEDIUM',
      order: 147,
      question:
        'Quel indicateur traduit directement un meilleur rendement ?',
      choices: [
        'Une quantite finale obtenue plus proche de la quantite maximale theorique',
        'Une pente initiale plus forte uniquement',
        'Une couleur plus intense du melange',
        'Un montage plus grand',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le rendement compare la quantite obtenue a la quantite maximale theorique.',
    },
    {
      difficulty: 'EASY',
      order: 148,
      question:
        'Dans $N_2+3H_2\rightleftharpoons 2NH_3$, le coefficient de $H_2$ vaut :',
      choices: ['$3$', '$1$', '$2$', '$4$'],
      correctChoiceIndex: 0,
      explanation: 'Le coefficient stoechiometrique de $H_2$ est 3.',
    },
    {
      difficulty: 'MEDIUM',
      order: 149,
      question:
        'Si le melange initial contient trop peu de $H_2$, quel reactif devient limitant pour former $NH_3$ ?',
      choices: ['$H_2$', '$N_2$', '$NH_3$', 'Aucun'],
      correctChoiceIndex: 0,
      explanation:
        'Un deficit de $H_2$ par rapport au ratio 1:3 le rend limitant.',
    },
    {
      difficulty: 'MEDIUM',
      order: 150,
      question:
        'Pour une synthese d ammoniac exothermique, quelle tendance favorise l etat final riche en $NH_3$ ?',
      choices: [
        'Abaisser la temperature',
        'Augmenter seulement l agitation',
        'Retirer le catalyseur',
        'Diminuer le suivi experimental',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une baisse de temperature favorise en general les produits d une transformation exothermique.',
    },
    {
      difficulty: 'MEDIUM',
      order: 151,
      question:
        'Si la fraction molaire d ammoniac vaut $y_{NH_3}=0{,}25$, cela signifie que :',
      choices: [
        '25 % des moles du melange sont du $NH_3$',
        '25 % de la masse est toujours du $NH_3$',
        'Le rendement vaut forcement 25 %',
        '25 % du $N_2$ a disparu exactement',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une fraction molaire concerne la proportion en quantite de matiere.',
    },
    {
      difficulty: 'MEDIUM',
      order: 152,
      question:
        'Dans cette etude, comparer des compositions initiales sert surtout a :',
      choices: [
        'Evaluer quelles conditions donnent plus d ammoniac a l etat final',
        'Changer la formule du produit',
        'Modifier les coefficients stoechiometriques',
        'Supprimer toute notion d equilibre',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La composition initiale influence l evolution et la composition finale a l equilibre.',
    },
    {
      difficulty: 'EASY',
      order: 153,
      question:
        'Quand la temperature augmente, la vitesse de reaction est en general :',
      choices: ['Plus grande', 'Plus petite', 'Identique', 'Nulle'],
      correctChoiceIndex: 0,
      explanation:
        'Une hausse de temperature augmente en general la frequence des collisions efficaces.',
    },
    {
      difficulty: 'EASY',
      order: 154,
      question:
        'Augmenter la concentration d un reactif tend en general a :',
      choices: [
        'Augmenter la vitesse initiale',
        'Diminuer la vitesse initiale',
        'Annuler toute reaction',
        'Ne rien changer jamais',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Des concentrations plus elevees favorisent les rencontres reactives.',
    },
    {
      difficulty: 'MEDIUM',
      order: 155,
      question:
        'Refroidir un milieu reactionnel a composition identique conduit en general a :',
      choices: [
        'Une vitesse plus faible',
        'Une vitesse plus grande',
        'Une vitesse inchangee',
        'Une vitesse infinie',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La baisse de temperature diminue generalement la vitesse de transformation.',
    },
    {
      difficulty: 'MEDIUM',
      order: 156,
      question:
        'Quel lien est correct entre vitesse initiale et pente de courbe produit-temps ?',
      choices: [
        'Plus la pente initiale est forte, plus la vitesse initiale est grande',
        'La pente initiale n a aucun lien',
        'Une pente faible indique toujours un rendement meilleur',
        'La pente depend seulement de l unite choisie',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La pente initiale traduit directement la rapidite initiale de formation du produit.',
    },
    {
      difficulty: 'MEDIUM',
      order: 157,
      question:
        'Si on veut comparer l effet de la concentration seule, il faut surtout :',
      choices: [
        'Garder les autres parametres identiques',
        'Changer aussi la temperature',
        'Changer aussi le catalyseur',
        'Changer le produit suivi',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Pour isoler un facteur, les autres variables doivent rester constantes.',
    },
    {
      difficulty: 'MEDIUM',
      order: 158,
      question:
        'Obtenir la meme quantite de produit en moins de temps signifie :',
      choices: [
        'Une synthese plus rapide',
        'Un rendement final forcement plus grand',
        'Une reaction differente',
        'Une stoichiometrie modifiee',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le critere porte sur le temps pour atteindre un meme niveau de conversion ou de produit.',
    },
    {
      difficulty: 'EASY',
      order: 159,
      question:
        'Une dilution du melange reactionnel agit souvent sur la vitesse en la :',
      choices: ['Diminuant', 'Augmentant', 'Rendant negative', 'Rendant constante'],
      correctChoiceIndex: 0,
      explanation:
        'La dilution diminue en general les collisions efficaces entre reactifs.',
    },
    {
      difficulty: 'EASY',
      order: 160,
      question:
        'Le role principal d un catalyseur est de :',
      choices: [
        'Rendre la reaction plus rapide',
        'Augmenter toujours le rendement final',
        'Changer la nature des reactifs',
        'Supprimer les pertes experimentales',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Un catalyseur accelere l evolution du systeme.',
    },
    {
      difficulty: 'MEDIUM',
      order: 161,
      question:
        'Dans un melange homogene, l agitation aide surtout a :',
      choices: [
        'Faciliter les rencontres entre reactifs',
        'Bloquer la reaction inverse',
        'Rendre la reaction totale',
        'Changer la formule du produit',
      ],
      correctChoiceIndex: 0,
      explanation:
        'L agitation homogeneise le milieu et ameliore les contacts reactifs.',
    },
    {
      difficulty: 'MEDIUM',
      order: 162,
      question:
        'Quel enonce est correct sur catalyseur et equilibre ?',
      choices: [
        'Le catalyseur n impose pas une nouvelle composition d equilibre',
        'Le catalyseur deplace toujours l equilibre vers les produits',
        'Le catalyseur remplace un reactif limitant',
        'Le catalyseur fixe $Q_r=0$',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le catalyseur agit sur la vitesse d atteinte de l etat final, pas sur sa position.',
    },
    {
      difficulty: 'MEDIUM',
      order: 163,
      question:
        'Dans une experience, on ajoute un catalyseur mais le plateau final reste le meme. Interpretation ?',
      choices: [
        'Le systeme atteint le meme etat final plus vite',
        'Le rendement final a forcement double',
        'La reaction devient totale',
        'La stoichiometrie est changee',
      ],
      correctChoiceIndex: 0,
      explanation:
        'C est l effet attendu d un catalyseur dans un systeme limite par equilibre.',
    },
    {
      difficulty: 'MEDIUM',
      order: 164,
      question:
        'Quelle action combinee est la plus logique pour accelerer une synthese homogene ?',
      choices: [
        'Chauffer moderement et agiter',
        'Refroidir et diluer fortement',
        'Retirer le reactif principal',
        'Ajouter uniquement du produit final',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Chauffage et agitation favorisent la cinetique de la transformation.',
    },
    {
      difficulty: 'EASY',
      order: 165,
      question:
        'Une synthese plus rapide se reconnait aussi car :',
      choices: [
        'Le temps pour atteindre le meme niveau de produit est plus court',
        'Le produit change automatiquement de famille',
        'Le rendement devient toujours 100 %',
        'Les reactifs disparaissent instantanement',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le critere temporel est central pour comparer les vitesses de synthese.',
    },
    {
      difficulty: 'MEDIUM',
      order: 166,
      question:
        'On veut accelerer une synthese sans changer l etat final: quelle action est adaptee ?',
      choices: [
        'Ajouter un catalyseur',
        'Retirer un produit pour deplacer l equilibre',
        'Introduire un reactif en exces',
        'Changer la reaction chimique',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le catalyseur agit d abord sur la vitesse.',
    },
    {
      difficulty: 'MEDIUM',
      order: 167,
      question:
        'Parmi ces propositions, laquelle n est pas un facteur cinetique principal au programme ?',
      choices: [
        'Le nom commercial du reactif',
        'La temperature',
        'La concentration',
        'La presence d un catalyseur',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le nom commercial n influence pas la vitesse chimique.',
    },
    {
      difficulty: 'MEDIUM',
      order: 168,
      question:
        'Si deux protocoles ont le meme plateau final mais des pentes initiales differentes, que compare-t-on surtout ?',
      choices: [
        'La cinetique',
        'La formule brute du produit',
        'Le bilan atomique',
        'Le coefficient stoechiometrique',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La difference de pente initiale renseigne sur la rapidite de transformation.',
    },
    {
      difficulty: 'MEDIUM',
      order: 169,
      question:
        'Augmenter la surface d un solide reactif permet souvent de :',
      choices: [
        'Rendre la reaction plus rapide',
        'Rendre la reaction impossible',
        'Changer la nature du produit final',
        'Supprimer l etat d equilibre',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Une plus grande surface de contact augmente les collisions efficaces.',
    },
    {
      difficulty: 'MEDIUM',
      order: 170,
      question:
        'Pour comparer deux protocoles, quel choix experimental est le plus rigoureux ?',
      choices: [
        'Ne faire varier qu un seul parametre a la fois',
        'Modifier plusieurs parametres en meme temps',
        'Changer de reaction entre les essais',
        'Comparer des mesures prises avec des unites differentes',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Cette methode permet d attribuer l effet observe au parametre etudie.',
    },
    {
      difficulty: 'EASY',
      order: 171,
      question:
        'Si le protocole B donne plus vite la meme quantite de produit que A, alors B est :',
      choices: ['Plus rapide', 'Moins rapide', 'Impossible a classer', 'Forcement faux'],
      correctChoiceIndex: 0,
      explanation:
        'Le critere temporel montre directement que B est plus rapide.',
    },
    {
      difficulty: 'EASY',
      order: 172,
      question:
        'Dans le cas etudie, les protocoles A et B diffèrent surtout par :',
      choices: ['La temperature', 'La formule du produit', 'Le nombre de reactifs', 'Le chapitre du cours'],
      correctChoiceIndex: 0,
      explanation:
        'Le cas d etude isole l effet de la temperature.',
    },
    {
      difficulty: 'MEDIUM',
      order: 173,
      question:
        'Si la courbe B atteint plus vite le meme plateau que A, conclusion correcte :',
      choices: [
        'B est plus rapide mais la quantite finale est identique',
        'B a forcement un meilleur rendement final',
        'A est chimiquement impossible',
        'B change la stoichiometrie',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Meme plateau final signifie meme quantite finale ; vitesse differente signifie cinetique differente.',
    },
    {
      difficulty: 'MEDIUM',
      order: 174,
      question:
        'Quel indicateur graphique est le plus utile pour comparer les vitesses initiales ?',
      choices: [
        'La pente au debut des courbes',
        'La longueur de la legende',
        'La couleur du trace',
        'La valeur maximale de l axe des temps',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La pente initiale est directement liee a la vitesse initiale.',
    },
    {
      difficulty: 'MEDIUM',
      order: 175,
      question:
        'Pour attribuer une difference de rapidite a la temperature, il faut verifier que :',
      choices: [
        'Les autres conditions restent identiques',
        'Le produit change de famille',
        'Le reactif limitant est supprime',
        'Le rendement final vaut 100 %',
      ],
      correctChoiceIndex: 0,
      explanation:
        'On doit controler les autres parametres pour isoler l effet temperature.',
    },
    {
      difficulty: 'MEDIUM',
      order: 176,
      question:
        'Une synthese plus rapide correspond a :',
      choices: [
        'Un temps plus court pour une meme conversion',
        'Une masse molaire plus grande du produit',
        'Un changement des coefficients stoechiometriques',
        'Une disparition de l equilibre chimique',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Le critere de rapidite porte sur le temps necessaire pour atteindre un meme etat.',
    },
    {
      difficulty: 'EASY',
      order: 177,
      question:
        'Dans la synthese d un ester, quelle famille organique forme le produit principal ?',
      choices: ['Ester', 'Amine', 'Aldehyde', 'Halogenoalcane'],
      correctChoiceIndex: 0,
      explanation:
        'Le produit vise dans ce cas de synthese est un ester.',
    },
    {
      difficulty: 'MEDIUM',
      order: 178,
      question:
        'Quel couple d actions peut a la fois accelerer et augmenter la quantite finale obtenue ?',
      choices: [
        'Catalyse + retrait d eau',
        'Refroidissement + dilution forte',
        'Suppression de l agitation + baisse de temperature',
        'Ajout du produit final des le debut',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La catalyse agit sur la vitesse, le retrait d eau favorise les produits a l equilibre.',
    },
    {
      difficulty: 'MEDIUM',
      order: 179,
      question:
        'Si un protocole donne un plateau plus haut et atteint ce plateau plus vite, il est :',
      choices: [
        'Plus efficace sur le rendement et sur la vitesse',
        'Seulement plus rapide',
        'Seulement meilleur en nomenclature',
        'Equivalent au protocole de reference',
      ],
      correctChoiceIndex: 0,
      explanation:
        'Plateau plus haut = plus de produit final ; plateau atteint plus vite = cinetique plus favorable.',
    },
    {
      difficulty: 'MEDIUM',
      order: 180,
      question:
        'Pourquoi suivre la masse d ester isolee en fonction du temps est utile ?',
      choices: [
        'Cela renseigne a la fois sur la rapidite et sur la quantite finale obtenue',
        'Cela donne directement la formule topologique',
        'Cela remplace tout calcul de rendement',
        'Cela fixe automatiquement l equilibre',
      ],
      correctChoiceIndex: 0,
      explanation:
        'La courbe masse-temps permet de comparer la vitesse (pente) et l etat final (plateau).',
    },
  ],
  sections: [
    {
      title: 'Nomenclature et familles organiques',
      description:
        'Repartir de repères très simples pour reconnaître une famille organique à partir d’un nom ou d’une formule.',
      order: 1,
      quizzes: [
        {
          title: 'Repères de nomenclature',
          slug: 'reperes-de-nomenclature',
          description:
            'Prendre deux réflexes utiles dès le départ : regarder la fin du nom et repérer le numéro qui localise le groupe caractéristique.',
          order: 1,
          stage: 'DISCOVER',
          items: [
            { type: 'QUESTION', questionOrder: 20 },
            { type: 'QUESTION', questionOrder: 26 },
            { type: 'QUESTION', questionOrder: 57 },
            { type: 'QUESTION', questionOrder: 58 },
            { type: 'QUESTION', questionOrder: 59 },
            { type: 'QUESTION', questionOrder: 60 },
            { type: 'QUESTION', questionOrder: 61 },
            { type: 'QUESTION', questionOrder: 62 },
            { type: 'QUESTION', questionOrder: 63 },
            { type: 'QUESTION', questionOrder: 64 },
          ],
        },
        {
          title: 'Découvrir les alcools',
          slug: 'decouvrir-les-alcools',
          description:
            'Associer le groupe hydroxyle, le suffixe -ol et des noms très simples à la famille des alcools.',
          order: 2,
          stage: 'DISCOVER',
          items: [
            { type: 'QUESTION', questionOrder: 21 },
            { type: 'QUESTION', questionOrder: 3 },
            { type: 'QUESTION', questionOrder: 65 },
            { type: 'QUESTION', questionOrder: 66 },
            { type: 'QUESTION', questionOrder: 67 },
            { type: 'QUESTION', questionOrder: 68 },
            { type: 'QUESTION', questionOrder: 69 },
            { type: 'QUESTION', questionOrder: 70 },
            { type: 'QUESTION', questionOrder: 71 },
            { type: 'QUESTION', questionOrder: 72 },
          ],
        },
        {
          title: 'Découvrir les aldéhydes et les cétones',
          slug: 'decouvrir-aldehydes-et-cetones',
          description:
            'Distinguer deux familles proches en s’aidant de la fin du nom et d’une formule semi-développée simple.',
          order: 3,
          stage: 'DISCOVER',
          items: [
            { type: 'QUESTION', questionOrder: 22 },
            { type: 'QUESTION', questionOrder: 28 },
            { type: 'QUESTION', questionOrder: 29 },
            { type: 'QUESTION', questionOrder: 73 },
            { type: 'QUESTION', questionOrder: 74 },
            { type: 'QUESTION', questionOrder: 75 },
            { type: 'QUESTION', questionOrder: 76 },
            { type: 'QUESTION', questionOrder: 77 },
            { type: 'QUESTION', questionOrder: 78 },
            { type: 'QUESTION', questionOrder: 79 },
          ],
        },
        {
          title: 'Découvrir les acides et les esters',
          slug: 'decouvrir-acides-et-esters',
          description:
            'Identifier les familles très présentes en synthèse d’estérification à partir du nom, du suffixe et de formules semi-développées simples.',
          order: 4,
          stage: 'DISCOVER',
          items: [
            { type: 'QUESTION', questionOrder: 27 },
            { type: 'QUESTION', questionOrder: 5 },
            { type: 'QUESTION', questionOrder: 30 },
            { type: 'QUESTION', questionOrder: 80 },
            { type: 'QUESTION', questionOrder: 81 },
            { type: 'QUESTION', questionOrder: 82 },
            { type: 'QUESTION', questionOrder: 83 },
            { type: 'QUESTION', questionOrder: 84 },
            { type: 'QUESTION', questionOrder: 85 },
            { type: 'QUESTION', questionOrder: 86 },
          ],
        },
        {
          title: 'Découvrir les amines, amides et halogénoalcanes',
          slug: 'decouvrir-amines-amides-halogenoalcanes',
          description:
            'Reconnaître trois familles souvent nouvelles pour les élèves en s’appuyant sur des indices très visibles dans le nom ou dans une formule semi-développée.',
          order: 5,
          stage: 'DISCOVER',
          items: [
            { type: 'QUESTION', questionOrder: 23 },
            { type: 'QUESTION', questionOrder: 24 },
            { type: 'QUESTION', questionOrder: 31 },
            { type: 'QUESTION', questionOrder: 25 },
            { type: 'QUESTION', questionOrder: 32 },
            { type: 'QUESTION', questionOrder: 87 },
            { type: 'QUESTION', questionOrder: 88 },
            { type: 'QUESTION', questionOrder: 89 },
            { type: 'QUESTION', questionOrder: 90 },
            { type: 'QUESTION', questionOrder: 91 },
          ],
        },
        {
          title: 'Formules, isomérie et polymères',
          slug: 'formules-isomerie-et-polymeres',
          description:
            'Consolider les conventions de représentation, l’isomérie de constitution et la notion de motif d’un polymère.',
          order: 6,
          stage: 'PRACTICE',
          items: [
            { type: 'QUESTION', questionOrder: 1 },
            { type: 'QUESTION', questionOrder: 2 },
            { type: 'QUESTION', questionOrder: 4 },
            { type: 'QUESTION', questionOrder: 6 },
            { type: 'QUESTION', questionOrder: 92 },
            { type: 'QUESTION', questionOrder: 93 },
            { type: 'QUESTION', questionOrder: 94 },
            { type: 'QUESTION', questionOrder: 95 },
            { type: 'QUESTION', questionOrder: 96 },
            { type: 'QUESTION', questionOrder: 97 },
          ],
        },
        {
          title: 'Bilan nomenclature et familles organiques',
          slug: 'bilan-nomenclature-et-familles-organiques',
          description:
            'Mobiliser en une seule série les repères de nomenclature et la reconnaissance des principales familles organiques du chapitre.',
          order: 7,
          stage: 'MASTER',
          items: [
            { type: 'QUESTION', questionOrder: 98 },
            { type: 'QUESTION', questionOrder: 99 },
            { type: 'QUESTION', questionOrder: 100 },
            { type: 'QUESTION', questionOrder: 101 },
            { type: 'QUESTION', questionOrder: 102 },
            { type: 'QUESTION', questionOrder: 103 },
            { type: 'QUESTION', questionOrder: 104 },
            { type: 'QUESTION', questionOrder: 105 },
            { type: 'QUESTION', questionOrder: 106 },
            { type: 'QUESTION', questionOrder: 107 },
          ],
        },
      ],
    },
    {
      title: 'Augmentation du rendement',
      description:
        'Calculer un rendement et exploiter l’état d’équilibre pour favoriser les produits d’une synthèse.',
      order: 2,
      quizzes: [
        {
          title: 'Découvrir le rendement',
          slug: 'decouvrir-le-rendement',
          description:
            'Comprendre la définition du rendement et savoir l’interpréter sur des cas numériques très simples.',
          order: 1,
          stage: 'DISCOVER',
          items: [
            { type: 'QUESTION', questionOrder: 7 },
            { type: 'QUESTION', questionOrder: 33 },
            { type: 'QUESTION', questionOrder: 8 },
            { type: 'QUESTION', questionOrder: 128 },
            { type: 'QUESTION', questionOrder: 129 },
            { type: 'QUESTION', questionOrder: 130 },
            { type: 'QUESTION', questionOrder: 131 },
            { type: 'QUESTION', questionOrder: 132 },
            { type: 'QUESTION', questionOrder: 133 },
            { type: 'QUESTION', questionOrder: 134 },
          ],
        },
        {
          title: 'Découvrir l’équilibre d’une synthèse',
          slug: 'decouvrir-equilibre-synthese',
          description:
            'Relier quotient de réaction, état d’équilibre et effet de l’élimination d’un produit formé.',
          order: 2,
          stage: 'DISCOVER',
          items: [
            { type: 'QUESTION', questionOrder: 10 },
            { type: 'QUESTION', questionOrder: 34 },
            { type: 'QUESTION', questionOrder: 11 },
            { type: 'QUESTION', questionOrder: 135 },
            { type: 'QUESTION', questionOrder: 136 },
            { type: 'QUESTION', questionOrder: 137 },
            { type: 'QUESTION', questionOrder: 138 },
            { type: 'QUESTION', questionOrder: 139 },
            { type: 'QUESTION', questionOrder: 140 },
            { type: 'QUESTION', questionOrder: 141 },
          ],
        },
        {
          title: 'Favoriser les produits d’une synthèse',
          slug: 'favoriser-produits-synthese',
          description:
            'Distinguer les actions qui augmentent le rendement final de celles qui n’agissent que sur la vitesse.',
          order: 3,
          stage: 'PRACTICE',
          items: [
            { type: 'QUESTION', questionOrder: 9 },
            { type: 'QUESTION', questionOrder: 12 },
            { type: 'QUESTION', questionOrder: 17 },
            { type: 'QUESTION', questionOrder: 18 },
            { type: 'QUESTION', questionOrder: 142 },
            { type: 'QUESTION', questionOrder: 143 },
            { type: 'QUESTION', questionOrder: 144 },
            { type: 'QUESTION', questionOrder: 145 },
            { type: 'QUESTION', questionOrder: 146 },
            { type: 'QUESTION', questionOrder: 147 },
          ],
        },
        {
          title: 'Bilan rendement et équilibre',
          slug: 'bilan-rendement-et-equilibre',
          description:
            'Réinvestir en une seule série la définition du rendement, la lecture de l’équilibre et les stratégies pour favoriser les produits.',
          order: 4,
          stage: 'MASTER',
          items: [
            { type: 'QUESTION', questionOrder: 108 },
            { type: 'QUESTION', questionOrder: 109 },
            { type: 'QUESTION', questionOrder: 110 },
            { type: 'QUESTION', questionOrder: 111 },
            { type: 'QUESTION', questionOrder: 112 },
            { type: 'QUESTION', questionOrder: 113 },
            { type: 'QUESTION', questionOrder: 114 },
            { type: 'QUESTION', questionOrder: 115 },
            { type: 'QUESTION', questionOrder: 116 },
            { type: 'QUESTION', questionOrder: 117 },
          ],
        },
        {
          title: 'Cas d’étude - Ammoniac à l’équilibre',
          slug: 'cas-etude-ammoniac-a-l-equilibre',
          description:
            'Appliquer les idées de proportions stœchiométriques, température et fraction molaire à une synthèse gazeuse d’ammoniac.',
          order: 5,
          stage: 'MASTER',
          items: [
            {
              type: 'GROUP',
              title: 'Cas d’étude - Synthèse gazeuse d’ammoniac',
              sharedStatement:
                'On modélise une synthèse d’ammoniac par la transformation $N_2 + 3H_2 \rightleftharpoons 2NH_3$. On travaille à pression fixée et l’on sait que la transformation est exothermique. On compare différentes compositions initiales et l’on exploite parfois la fraction molaire de l’ammoniac à l’équilibre pour juger l’efficacité de la synthèse.',
              questionOrders: [41, 42, 43, 44, 45, 148, 149, 150, 151, 152],
            },
          ],
        },
      ],
    },
    {
      title: 'Augmentation de la vitesse',
      description:
        'Reconnaître les facteurs cinétiques et choisir un protocole plus efficace.',
      order: 3,
      quizzes: [
        {
          title: 'Découvrir température et concentration',
          slug: 'decouvrir-temperature-et-concentration',
          description:
            'Identifier l’effet de la température et de la concentration sur la vitesse initiale d’une synthèse.',
          order: 1,
          stage: 'DISCOVER',
          items: [
            { type: 'QUESTION', questionOrder: 13 },
            { type: 'QUESTION', questionOrder: 14 },
            { type: 'QUESTION', questionOrder: 36 },
            { type: 'QUESTION', questionOrder: 153 },
            { type: 'QUESTION', questionOrder: 154 },
            { type: 'QUESTION', questionOrder: 155 },
            { type: 'QUESTION', questionOrder: 156 },
            { type: 'QUESTION', questionOrder: 157 },
            { type: 'QUESTION', questionOrder: 158 },
            { type: 'QUESTION', questionOrder: 159 },
          ],
        },
        {
          title: 'Découvrir catalyse et agitation',
          slug: 'decouvrir-catalyse-et-agitation',
          description:
            'Reconnaître les effets de la catalyse, de l’agitation et d’une vitesse plus grande sur le déroulement expérimental.',
          order: 2,
          stage: 'DISCOVER',
          items: [
            { type: 'QUESTION', questionOrder: 15 },
            { type: 'QUESTION', questionOrder: 35 },
            { type: 'QUESTION', questionOrder: 38 },
            { type: 'QUESTION', questionOrder: 37 },
            { type: 'QUESTION', questionOrder: 160 },
            { type: 'QUESTION', questionOrder: 161 },
            { type: 'QUESTION', questionOrder: 162 },
            { type: 'QUESTION', questionOrder: 163 },
            { type: 'QUESTION', questionOrder: 164 },
            { type: 'QUESTION', questionOrder: 165 },
          ],
        },
        {
          title: 'Choisir un protocole plus rapide',
          slug: 'choisir-protocole-plus-rapide',
          description:
            'Comparer des modifications expérimentales et repérer celles qui accélèrent effectivement la synthèse.',
          order: 3,
          stage: 'PRACTICE',
          items: [
            { type: 'QUESTION', questionOrder: 16 },
            { type: 'QUESTION', questionOrder: 19 },
            { type: 'QUESTION', questionOrder: 39 },
            { type: 'QUESTION', questionOrder: 40 },
            { type: 'QUESTION', questionOrder: 166 },
            { type: 'QUESTION', questionOrder: 167 },
            { type: 'QUESTION', questionOrder: 168 },
            { type: 'QUESTION', questionOrder: 169 },
            { type: 'QUESTION', questionOrder: 170 },
            { type: 'QUESTION', questionOrder: 171 },
          ],
        },
        {
          title: 'Bilan vitesse d’une synthèse',
          slug: 'bilan-vitesse-d-une-synthese',
          description:
            'Réinvestir en une seule série les facteurs cinétiques et les critères permettant de dire qu’une synthèse est plus rapide.',
          order: 4,
          stage: 'MASTER',
          items: [
            { type: 'QUESTION', questionOrder: 118 },
            { type: 'QUESTION', questionOrder: 119 },
            { type: 'QUESTION', questionOrder: 120 },
            { type: 'QUESTION', questionOrder: 121 },
            { type: 'QUESTION', questionOrder: 122 },
            { type: 'QUESTION', questionOrder: 123 },
            { type: 'QUESTION', questionOrder: 124 },
            { type: 'QUESTION', questionOrder: 125 },
            { type: 'QUESTION', questionOrder: 126 },
            { type: 'QUESTION', questionOrder: 127 },
          ],
        },
        {
          title: 'Cas d’étude - Effet de la température',
          slug: 'cas-etude-effet-temperature',
          description:
            'Comparer deux protocoles ne différant que par la température pour interpréter correctement une différence de rapidité.',
          order: 5,
          stage: 'MASTER',
          items: [
            {
              type: 'GROUP',
              title: 'Cas d’étude - Deux protocoles, une seule variable',
              sharedStatement:
                'On réalise une même synthèse organique avec les mêmes quantités initiales de réactifs. Le protocole A est mené à température ambiante, alors que le protocole B est mené à température plus élevée. On suit au cours du temps la masse de produit isolé et l’on observe que la courbe du protocole B monte plus vite avant d’atteindre finalement le même plateau que le protocole A.',
              questionOrders: [46, 47, 48, 49, 50, 172, 173, 174, 175, 176],
            },
          ],
        },
      ],
    },
    {
      title: 'Cas de synthèse complet',
      description:
        'Réinvestir dans une même situation la reconnaissance de la famille organique, les leviers de rendement et les facteurs cinétiques.',
      order: 4,
      quizzes: [
        {
          title: 'Cas d’étude - Synthèse d’un arôme',
          slug: 'cas-etude-synthese-d-un-arome',
          description:
            'Analyser un protocole de synthèse d’ester en mobilisant nomenclature, catalyse, équilibre et rendement.',
          order: 1,
          stage: 'MASTER',
          items: [
            {
              type: 'GROUP',
              title: 'Cas d’étude - Un ester à optimiser',
              sharedStatement:
                'On souhaite préparer un arôme fruité nommé éthanoate d’isoamyle à partir d’acide éthanoïque et d’alcool isoamylique, selon une transformation modélisée par acide + alcool $\rightleftharpoons$ ester + eau. Deux protocoles sont comparés. Le protocole A est mené sans catalyseur et sans retrait de l’eau. Le protocole B utilise quelques gouttes d’acide sulfurique, un chauffage modéré et un dispositif permettant de retirer une partie de l’eau formée. On suit au cours du temps la masse d’ester isolé, et l’on constate que le protocole B atteint plus vite un plateau final plus élevé.',
              questionOrders: [51, 52, 53, 54, 55, 56, 177, 178, 179, 180],
            },
          ],
        },
      ],
    },
  ],
};