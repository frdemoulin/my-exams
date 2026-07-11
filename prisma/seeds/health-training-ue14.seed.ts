import type {
  ChapterSectionKind,
  PrismaClient,
  QuizAnswerFormat,
  QuizDifficulty,
  TrainingQuizStage,
} from '@prisma/client';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'elements-chimiques-classification-periodique';
const FIRST_SECTION_ORDER = 1;
const FIRST_QUIZ_ORDER = 1;
const FIRST_QUIZ_SLUG = 'decouvrir-elements-chimiques-classification';
const SECOND_QUIZ_ORDER = 2;
const SECOND_QUIZ_SLUG = 'sentrainer-generalites-atome';
const SECOND_SECTION_ORDER = 2;
const SECOND_SECTION_DISCOVER_QUIZ_ORDER = 1;
const SECOND_SECTION_DISCOVER_QUIZ_SLUG = 'decouvrir-organisation-configuration-electronique';
const SECOND_SECTION_PRACTICE_QUIZ_ORDER = 2;
const SECOND_SECTION_PRACTICE_QUIZ_SLUG = 'sentrainer-organisation-configuration-electronique';
const SECOND_SECTION_MASTER_QUIZ_ORDER = 3;
const SECOND_SECTION_MASTER_QUIZ_SLUG = 'maitriser-organisation-configuration-electronique';
const THIRD_SECTION_ORDER = 3;
const THIRD_SECTION_DISCOVER_QUIZ_ORDER = 1;
const THIRD_SECTION_DISCOVER_QUIZ_SLUG = 'decouvrir-classification-periodique';
const THIRD_SECTION_PRACTICE_QUIZ_ORDER = 2;
const THIRD_SECTION_PRACTICE_QUIZ_SLUG = 'sentrainer-classification-periodique';
const THIRD_SECTION_MASTER_QUIZ_ORDER = 3;
const THIRD_SECTION_MASTER_QUIZ_SLUG = 'maitriser-classification-periodique';
const SYNTHESIS_QUIZ_ORDER = 1;
const SYNTHESIS_QUIZ_SLUG = 'synthese-atomes';

type SeedQuestion = {
  order: number;
  difficulty: QuizDifficulty;
  answerFormat: QuizAnswerFormat;
  question: string;
  questionDiagram?: {
    type: 'quantum-boxes';
    orbitals: Array<{
      label: string;
      boxes: Array<'empty' | 'up' | 'down' | 'pair'>;
    }>;
  };
  choices: Array<
    | string
    | {
        type: 'quantum-boxes';
        orbitals: Array<{
          label: string;
          boxes: Array<'empty' | 'up' | 'down' | 'pair'>;
        }>;
      }
  >;
  correctChoiceIndexes: number[];
  explanation: string;
};

type SeedSection = {
  order: number;
  title: string;
  description: string;
  kind: ChapterSectionKind;
};

type SeedQuiz = {
  order: number;
  slug: string;
  title: string;
  description: string;
  stage: TrainingQuizStage;
  sectionOrder: number;
  questionOrders: number[];
};

const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  1: [`Structure et constituants de l'atome`],
  2: [`Numéro atomique et nombre de masse`],
  3: [`Définition des isotopes`],
  4: [`Unités atomiques et ordres de grandeur`],
  5: [`Couches, sous-couches et orbitales`],
  6: [`Nombres quantiques et règles de remplissage`],
  7: [`Configurations électroniques usuelles`],
  8: [`Organisation de la classification périodique`],
  9: [`Familles d'éléments chimiques`],
  10: [`Éléments chimiques du vivant`],
  11: [`Notation et définition d'un nucléide`],
  12: [`Composition d'un atome à partir de A et Z`],
  13: [`Vocabulaire : atome, élément, nucléide et isotope`],
  14: [`Propriétés physiques et chimiques des isotopes`],
  15: [`Calcul de masse atomique moyenne`],
  16: [`Masse et stabilité du noyau atomique`],
  17: [`Cohérence de la notation d'un nucléide`],
  18: [`Comparaison des nombres de protons, neutrons et électrons`],
  19: [`Ordres de grandeur et masse de l'atome`],
  20: [`Nucléides, isotopes et numéro atomique`],
  21: [`Éléments naturels et éléments artificiels`],
  22: [`Constituants et neutralité de l'atome`],
  23: [`Définition de l'unité de masse atomique`],
  24: [`Ordres de grandeur biologiques et médicaux`],
  25: [`Conversions entre mètre, nanomètre et ångström`],
  26: [`Composition d'un ion à partir de A, Z et de sa charge`],
  27: [`Modèle atomique, radioactivité et défaut de masse`],
  28: [`Signification des quatre nombres quantiques`],
  29: [`Sous-couches, orbitales et capacité électronique`],
  30: [`Notation des quatre nombres quantiques`],
  31: [`Rôle du nombre quantique secondaire ℓ`],
  32: [`Configurations électroniques des premiers éléments`],
  33: [`Rôle du nombre quantique principal n`],
  34: [`Configuration électronique en cases quantiques`],
  35: [`Correspondance entre ℓ et les sous-couches s, p, d, f`],
  36: [`Couche de valence d'un métal de transition`],
  37: [`Valeurs autorisées de ℓ pour une couche donnée`],
  38: [`Définition et capacité d'une orbitale atomique`],
  39: [`Règle de Hund`],
  40: [`Configuration électronique en cases quantiques`],
  41: [`Identification d'une règle de remplissage non respectée`],
  42: [`Orbitale atomique et probabilité de présence`],
  43: [`Forme et symétrie des orbitales atomiques`],
  44: [`Configuration électronique d'un métal de transition`],
  45: [`Couche de valence d'un métal de transition`],
  46: [`Validité d'un quadruplet de nombres quantiques`],
  47: [`Ordre énergétique de remplissage des sous-couches`],
  48: [`Répartition des électrons dans les sous-couches s, p et d`],
  49: [`Forme, symétrie et plans nodaux des orbitales`],
  50: [`Énergie des niveaux électroniques dans le modèle de Bohr`],
  51: [`Configurations électroniques des atomes et des ions`],
  52: [`Configuration électronique d'un métal de transition`],
  53: [`Couche de valence d'un métal de transition`],
  54: [`Détermination d'une formule brute par analyse massique`],
};

const questions: SeedQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de la notion d'atome :`,
    choices: [
      `Le noyau contient des protons et des neutrons.`,
      `Dans un atome, le nombre d'électrons est toujours égal au nombre de protons.`,
      `Le nuage électronique a une dimension de l'ordre de $10^{-15}\\,\\mathrm{m}$.`,
      `La quasi-totalité de la masse de l'atome est concentrée dans le noyau.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le noyau contient protons et neutrons. Dans un atome, $Z$ électrons compensent $Z$ protons. Le nuage électronique est de l'ordre de $10^{-10}\\,\\mathrm{m}$, pas $10^{-15}\\,\\mathrm{m}$.`,
  },
  {
    order: 2,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `À propos du numéro atomique $Z$ et du nombre de masse $A$ :`,
    choices: [
      `$Z$ correspond au nombre de protons du noyau.`,
      `$A$ est égal à $Z + N$.`,
      `Deux éléments chimiques différents peuvent avoir le même $Z$.`,
      `Un nucléide est caractérisé par $Z$ protons et $N$ neutrons.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `$Z$ définit l'élément chimique. Le nombre de masse vaut $A = Z + N$. Deux éléments différents ne peuvent pas partager le même numéro atomique.`,
  },
  {
    order: 3,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des isotopes :`,
    choices: [
      `Des isotopes d'un même élément ont le même numéro atomique.`,
      `Des isotopes d'un même élément ont toujours le même nombre de masse.`,
      `Leurs propriétés chimiques sont voisines car leur nuage électronique est identique.`,
      `Ils diffèrent uniquement par leur nombre de neutrons.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `Des isotopes ont le même $Z$, donc le même cortège électronique pour l'atome. Ils se distinguent par $N$, donc par $A$.`,
  },
  {
    order: 4,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des unités et des ordres de grandeur :`,
    choices: [
      `$1\\,\\text{Å}$ correspond à $0{,}1\\,\\mathrm{nm}$.`,
      `La taille d'un atome est de l'ordre de $10^{-10}\\,\\mathrm{m}$.`,
      `$1\\,\\mathrm{Da}$ est utilisé en biochimie comme synonyme de $1\\,\\mathrm{u}$.`,
      `Le noyau est plus vaste que le nuage électronique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le cours donne $1\\,\\text{Å} = 0{,}1\\,\\mathrm{nm}$ et situe l'atome vers $10^{-10}\\,\\mathrm{m}$. Le Dalton est assimilé à l'unité de masse atomique. Le noyau est beaucoup plus petit que le nuage électronique.`,
  },
  {
    order: 5,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `À propos des couches, sous-couches et orbitales :`,
    choices: [
      `La couche $\\mathrm{M}$ comporte les sous-couches $3\\mathrm{s}$, $3\\mathrm{p}$ et $3\\mathrm{d}$.`,
      `Une sous-couche $\\mathrm{p}$ contient trois orbitales.`,
      `Une orbitale peut contenir au maximum deux électrons.`,
      `Une sous-couche $\\mathrm{s}$ correspond à $\\ell = 1$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Pour une sous-couche $\\mathrm{s}$, $\\ell = 0$. Une sous-couche $\\mathrm{p}$ compte 3 orbitales et chaque orbitale peut accueillir 2 électrons.`,
  },
  {
    order: 6,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `À propos des nombres quantiques et du remplissage :`,
    choices: [
      `Le nombre quantique principal $\\mathrm{n}$ définit la couche électronique.`,
      `Une couche $\\mathrm{n}$ comporte $\\mathrm{n}$ sous-couches.`,
      `En cas d'égalité de $\\mathrm{n} + \\ell$, la sous-couche de plus grand $\\mathrm{n}$ se remplit d'abord.`,
      `La règle de Hund conduit d'abord à placer un électron par orbitale dans une sous-couche donnée.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le critère énergétique retient d'abord le plus petit $\\mathrm{n} + \\ell$, puis le plus petit $\\mathrm{n}$ en cas d'égalité. La règle de Hund privilégie l'occupation simple avant l'appariement.`,
  },
  {
    order: 7,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `À propos des configurations électroniques données dans le cours :`,
    choices: [
      `$\\ce{H}$ a pour configuration $1\\mathrm{s}^1$.`,
      `$\\ce{Ne}$ a pour configuration $\\mathrm{K}\\,\\mathrm{L}$.`,
      `$\\ce{Li}$ possède deux électrons sur sa couche de valence.`,
      `Pour $\\ce{Fe}$ dans le cours, la couche de valence est $4\\mathrm{s}^2$.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le lithium a une couche de valence $2\\mathrm{s}^1$. Le cours identifie la valence du fer par $4\\mathrm{s}^2$.`,
  },
  {
    order: 8,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de la classification périodique :`,
    choices: [
      `Les éléments sont classés par numéro atomique croissant.`,
      `La classification moderne comporte 18 colonnes.`,
      `Les éléments d'une même colonne ont des propriétés chimiques analogues.`,
      `Une période correspond à une colonne.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Une période est une ligne, pas une colonne. Les colonnes regroupent des éléments de configuration externe voisine.`,
  },
  {
    order: 9,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `À propos des familles d'éléments présentées dans le cours :`,
    choices: [
      `Les métalloïdes cités sont $\\ce{B}$, $\\ce{Si}$ et $\\ce{Ge}$.`,
      `Les métaux forment volontiers des cations.`,
      `Les non-métaux sont toujours solides à température ambiante.`,
      `Les gaz rares sont situés dans la colonne 18.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Les non-métaux peuvent être solides, liquides ou gazeux selon l'élément. Le cours cite $\\ce{B}$, $\\ce{Si}$, $\\ce{Ge}$ parmi les métalloïdes et place les gaz rares en colonne 18.`,
  },
  {
    order: 10,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des atomes du vivant :`,
    choices: [
      `$\\ce{C}$, $\\ce{H}$, $\\ce{O}$ et $\\ce{N}$ font partie des éléments de base du vivant.`,
      `$\\ce{Fe}$, $\\ce{Zn}$ et $\\ce{Cu}$ font partie des métaux du vivant cités dans le cours.`,
      `$\\ce{Cd}$, $\\ce{Hg}$ et $\\ce{Pb}$ sont cités comme oligo-éléments indispensables.`,
      `$\\ce{F}$, $\\ce{Br}$ et $\\ce{I}$ sont cités parmi les oligo-éléments non métalliques.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le cours distingue des oligo-éléments indispensables, dont certains halogènes, et cite $\\ce{Cd}$, $\\ce{Hg}$ et $\\ce{Pb}$ parmi les métaux souvent toxiques ou nuisibles.`,
  },
  {
    order: 11,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `À propos du nucléide noté $^A_ZX$ :`,
    choices: [
      `$A$ est le nombre de masse et $Z$ le numéro atomique.`,
      `Écrire $^Z_AX$ revient au même : on a seulement changé la mise en page.`,
      `Un nucléide est défini par son noyau, donc par $Z$ protons et $N = A - Z$ neutrons.`,
      `Le symbole $X$ seul suffit à définir complètement un nucléide.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Un nucléide est défini par la composition de son noyau. Dans $^A_ZX$, $A$ compte les nucléons et $Z$ les protons ; inverser $A$ et $Z$ change donc le sens physique de l'écriture.`,
  },
  {
    order: 12,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'atome $^{23}_{11}\\mathrm{Na}$ :`,
    choices: [
      `Il présente 11 protons, 12 neutrons et 23 nucléons.`,
      `Il présente 12 protons, 11 neutrons et 23 nucléons.`,
      `Comme il s'agit d'un atome, il présente 11 électrons.`,
      `Il présente 44 nucléons en tout.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Pour $^{23}_{11}\\mathrm{Na}$, on lit $Z = 11$ et $A = 23$. L'atome possède donc 11 protons, 11 électrons et $A - Z = 12$ neutrons, soit 23 nucléons au total.`,
  },
  {
    order: 13,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `À propos des termes atome, élément chimique, nucléide et isotope :`,
    choices: [
      `L'élément chimique carbone est défini par $Z = 6$.`,
      `Le nucléide $^{14}_{6}\\mathrm{C}$ et l'atome $^{14}_{6}\\mathrm{C}$ désignent exactement la même réalité.`,
      `Les nucléides $^{12}_{6}\\mathrm{C}$ et $^{14}_{6}\\mathrm{C}$ sont deux isotopes d'un même élément chimique.`,
      `Deux isotopes d'un même élément chimique ont nécessairement le même nombre de neutrons.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Un élément chimique est défini par son numéro atomique $Z$. Un nucléide décrit le noyau, alors qu'un atome ajoute le cortège électronique. Deux isotopes d'un même élément ont le même $Z$ mais des nombres de neutrons, donc des nombres de masse $A$, différents.`,
  },
  {
    order: 14,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des propriétés des isotopes :`,
    choices: [
      `Des isotopes ont des propriétés physiques et des propriétés chimiques voisines.`,
      `Des isotopes ont des propriétés physiques voisines, mais des propriétés chimiques différentes.`,
      `Des isotopes ont des propriétés physiques différentes, mais des propriétés chimiques voisines.`,
      `Des isotopes ont des propriétés physiques et des propriétés chimiques différentes.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `Des isotopes appartiennent au même élément chimique : ils ont le même $Z$ et, pour des atomes, le même cortège électronique. Leurs propriétés chimiques sont donc voisines. En revanche, ils n'ont pas le même nombre de neutrons, donc pas la même masse, ce qui modifie leurs propriétés physiques.`,
  },
  {
    order: 15,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Un échantillon naturel de bore contient environ 20 % de $^{10}\\mathrm{B}$ de masse $10\\,\\mathrm{u}$ et 80 % de $^{11}\\mathrm{B}$ de masse $11\\,\\mathrm{u}$ :`,
    choices: [
      `La masse atomique moyenne vaut environ $10{,}8\\,\\mathrm{u}$.`,
      `La masse atomique moyenne est forcément un nombre entier, car elle correspond au nombre de nucléons.`,
      `La masse atomique moyenne vaut $10{,}5\\,\\mathrm{u}$ car on fait la moyenne simple de 10 et 11.`,
      `La masse moyenne est plus proche de $11\\,\\mathrm{u}$ que de $10\\,\\mathrm{u}$.`,
    ],
    correctChoiceIndexes: [0, 3],
    explanation:
      `Pour un nucléide donné, le nombre de nucléons est entier. En revanche, la masse atomique moyenne d'un élément naturel tient compte du mélange de ses isotopes : $0{,}20 \\times 10 + 0{,}80 \\times 11 = 2 + 8{,}8 = 10{,}8\\,\\mathrm{u}$. Elle n'est donc pas forcément entière et se rapproche de $11\\,\\mathrm{u}$ car l'isotope $^{11}\\mathrm{B}$ est majoritaire.`,
  },
  {
    order: 16,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'atome :`,
    choices: [
      `Le noyau d'un atome, au repos, a une masse toujours plus faible que celle de ses constituants séparés et au repos.`,
      `Un électron est environ $1\\,000$ fois moins massif qu'un nucléon.`,
      `Le noyau d'un atome contient nécessairement au moins un proton et au moins un neutron.`,
      `Un atome contient toujours autant d'électrons que de nucléons.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La masse d'un noyau lié est inférieure à la somme des masses de ses nucléons séparés : c'est le défaut de masse. Un électron est très peu massif devant un nucléon, d'un ordre de grandeur de $10^3$ fois plus léger. Un noyau ne contient pas nécessairement de neutron, et un atome contient autant d'électrons que de protons, pas autant que de nucléons.`,
  },
  {
    order: 17,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos du nucléide $^{1}_{3}\\mathrm{X}$ :`,
    choices: [
      `C'est un isotope de l'élément hydrogène.`,
      `Son noyau contient un proton et deux neutrons.`,
      `Afin de satisfaire à la règle du duet, cet atome a tendance à gagner un électron.`,
      `Toutes les affirmations précédentes sont fausses, le nucléide $^{1}_{3}\\mathrm{X}$ n'existe pas.`,
    ],
    correctChoiceIndexes: [3],
    explanation:
      `Dans $^A_ZX$, $A$ est le nombre de nucléons et $Z$ le nombre de protons. Ici, $A = 1$ et $Z = 3$ : on demanderait 3 protons pour seulement 1 nucléon, ce qui est impossible.`,
  },
  {
    order: 18,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des nombres de protons, neutrons et électrons dans un atome :`,
    choices: [
      `Un atome peut avoir plus de neutrons que de protons.`,
      `Un atome ne peut pas avoir moins de protons que de neutrons.`,
      `Un atome peut avoir plus de neutrons que d'électrons.`,
      `Un atome peut avoir plus de protons que d'électrons.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Dans un atome, le nombre d'électrons est égal au nombre de protons. Le nombre de neutrons, lui, peut être supérieur au nombre de protons, comme dans de nombreux isotopes lourds.`,
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de la masse et de la structure de l'atome :`,
    choices: [
      `La quasi-totalité de la masse d'un atome est concentrée dans son noyau.`,
      `Les électrons de cœur appartiennent au noyau car ils sont proches de lui.`,
      `Un électron est environ 1800 fois moins massif qu'un proton.`,
      `La masse d'un atome est essentiellement déterminée par son nombre de nucléons.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `Les protons et les neutrons portent presque toute la masse de l'atome : la masse atomique dépend donc surtout du nombre de nucléons. Les électrons, même ceux dits de cœur, appartiennent au nuage électronique et non au noyau. Le facteur d'environ 1800 concerne le rapport de masse entre un nucléon et un électron.`,
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des nucléides et des isotopes :`,
    choices: [
      `Le nucléide $^{222}_{86}\\mathrm{Rn}$ est composé de 86 protons, 136 neutrons et 86 électrons.`,
      `Les isotopes d'un élément chimique ont tous le même numéro atomique.`,
      `Tous les nucléides d'un même élément chimique ont les mêmes valeurs du couple de nombres $A$ et $Z$.`,
      `Les nucléides $^{73}_{38}\\mathrm{Sr}$ et $^{97}_{38}\\mathrm{Sr}$ ont des masses différentes.`,
    ],
    correctChoiceIndexes: [1, 3],
    explanation:
      `Un nucléide est défini par son noyau : $^{222}_{86}\\mathrm{Rn}$ possède 86 protons et $222 - 86 = 136$ neutrons, mais les électrons relèvent de l'atome ou de l'ion. Des isotopes ont le même $Z$ et des nombres de masse $A$ différents, donc des masses différentes.`,
  },
  {
    order: 21,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des éléments naturels et artificiels :`,
    choices: [
      `Dans ce cours, les éléments naturels ont un numéro atomique $Z \\leq 92$.`,
      `L'uranium, de numéro atomique $Z = 92$, est présenté comme la limite des éléments naturels.`,
      `Les éléments de numéro atomique $Z > 92$ sont appelés transuraniens et sont artificiels.`,
      `Un élément naturel est nécessairement stable : il ne peut pas être radioactif.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le cours retient les éléments naturels jusqu'à l'uranium, donc $Z \\leq 92$. Les éléments au-delà de l'uranium sont transuraniens, issus de réactions nucléaires, artificiels et instables. Naturel ne signifie pas forcément parfaitement stable : le cours mentionne aussi des durées de vie très longues.`,
  },
  {
    order: 22,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos d'un atome et de ses constituants :`,
    choices: [
      `Un atome contient autant d'électrons que de protons.`,
      `Un électron est beaucoup moins massif qu'un proton ou qu'un neutron.`,
      `Le noyau contient toujours au moins un proton, mais pas forcément un neutron.`,
      `Un atome contient toujours autant d'électrons que de nucléons.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Dans un atome, les électrons compensent la charge des protons : il y a donc autant d'électrons que de protons. Les nucléons sont les protons et les neutrons du noyau ; l'hydrogène $^1\\mathrm{H}$ montre qu'un noyau peut ne contenir aucun neutron. Comme les neutrons s'ajoutent aux protons, le nombre de nucléons n'est généralement pas égal au nombre d'électrons.`,
  },
  {
    order: 23,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'unité de masse atomique :`,
    choices: [
      `Elle est définie comme le douzième de la masse d'un atome de carbone 12.`,
      `Son symbole usuel est $u$.`,
      `Dans ce cours, $1\\,\\mathrm{Da}$ est assimilé à $1\\,u$.`,
      `Elle correspond exactement à la masse d'un proton isolé.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'unité de masse atomique est définie à partir du carbone 12 : $1\\,u = \\dfrac{1}{12}$ de la masse de $^{12}\\mathrm{C}$. Le cours utilise aussi l'équivalence pratique $1\\,\\mathrm{Da} = 1\\,u$. En revanche, un proton n'a pas exactement une masse de $1\\,u$.`,
  },
  {
    order: 24,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de quelques ordres de grandeur utiles en médecine :`,
    choices: [
      `Une cellule animale typique, de diamètre de l'ordre de $10\\,\\mathrm{\\mu m}$, n'est qu'environ dix fois plus grande qu'un petit peptide.`,
      `Une protéine comme l'hémoglobine a une taille caractéristique de l'ordre de $10\\,\\mathrm{nm}$, soit environ $10\\,\\text{Å}$.`,
      `Un petit peptide a une taille caractéristique de l'ordre de $1\\,\\mathrm{nm}$, soit environ $100\\,\\text{Å}$.`,
      `Un globule rouge a un diamètre de l'ordre de $10\\,\\mathrm{\\mu m}$, soit environ $100\\,000\\,\\text{Å}$.`,
    ],
    correctChoiceIndexes: [3],
    explanation:
      `Seule la proposition D est exacte.\n\nUn petit peptide est de l'ordre de $1\\,\\mathrm{nm}$, alors qu'une cellule ou une hématie est de l'ordre de quelques à dix micromètres : le rapport n'est donc pas de $10$, mais plutôt de $10^4$.\n\nPour les conversions, il faut garder en tête que $1\\,\\text{Å} = 0{,}1\\,\\mathrm{nm}$, donc $1\\,\\mathrm{nm} = 10\\,\\text{Å}$. Ainsi, $10\\,\\mathrm{nm}$ correspondent à $100\\,\\text{Å}$, et non à $10\\,\\text{Å}$, tandis que $10\\,\\mathrm{\\mu m} = 10^{-5}\\,\\mathrm{m} = 100\\,000\\,\\text{Å}$.\n\nAutrement dit : A est fausse, B est fausse, C est fausse, et D est vraie.`,
  },
  {
    order: 25,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des conversions de longueur :`,
    choices: [
      `Une longueur de $1\\,\\mathrm{nm}$ correspond à $10\\,\\text{Å}$, soit $10^{-9}\\,\\mathrm{m}$.`,
      `Une longueur de $1\\,\\text{Å}$ correspond à $10\\,\\mathrm{nm}$, soit $10^{-8}\\,\\mathrm{m}$.`,
      `Une longueur de $50\\,\\text{Å}$ correspond à $5\\,\\mathrm{nm}$, soit $5 \\times 10^{-9}\\,\\mathrm{m}$.`,
      `Une longueur de $10^{-10}\\,\\mathrm{m}$ correspond à $1\\,\\mathrm{nm}$, soit $10\\,\\text{Å}$.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La proposition A est vraie : $1\\,\\mathrm{nm} = 10\\,\\text{Å} = 10^{-9}\\,\\mathrm{m}$. La proposition B est fausse car $1\\,\\text{Å} = 0{,}1\\,\\mathrm{nm} = 10^{-10}\\,\\mathrm{m}$. La proposition C est vraie : $50\\,\\text{Å} = 5\\,\\mathrm{nm} = 5 \\times 10^{-9}\\,\\mathrm{m}$. La proposition D est fausse car $10^{-10}\\,\\mathrm{m}$ correspond à $1\\,\\text{Å}$, donc à $0{,}1\\,\\mathrm{nm}$.`,
  },
  {
    order: 26,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'ion $^{27}_{13}\\mathrm{Al}^{3+}$ :`,
    choices: [
      `Il présente 13 protons.`,
      `Il présente 27 nucléons.`,
      `Il présente 13 électrons.`,
      `Il présente 14 neutrons.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Pour $^{27}_{13}\\mathrm{Al}^{3+}$, on lit $Z = 13$ et $A = 27$. Le noyau contient donc 13 protons et $27 - 13 = 14$ neutrons, soit 27 nucléons. Comme l'ion est chargé $3+$, il a perdu 3 électrons : il n'en possède donc que 10, et non 13.`,
  },
  {
    order: 27,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos du modèle atomique :`,
    choices: [
      `Le nucléide $^{1}_{3}\\mathrm{X}$ est un isotope de l'hydrogène.`,
      `La masse d'un noyau au repos est supérieure à la somme des masses des nucléons isolés et au repos qui le constituent.`,
      `Certains nucléides présents dans la nature sont radioactifs.`,
      `Les noyaux atomiques ont une dimension de l'ordre de $1\\,\\mathrm{nm}$.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `La proposition A est fausse : l'écriture $^{1}_{3}\\mathrm{X}$ n'est pas celle d'un isotope de l'hydrogène. Un isotope de l'hydrogène doit avoir $Z = 1$, et ici on lit en plus une écriture incohérente puisque $A < Z$. La proposition B est fausse : à cause du défaut de masse, un noyau lié a au contraire une masse inférieure à la somme des masses des nucléons isolés. La proposition C est vraie : il existe dans la nature des nucléides radioactifs, comme le potassium 40 ou l'uranium 238. La proposition D est fausse : un noyau atomique est bien plus petit qu'un nanomètre ; l'ordre de grandeur de $1\\,\\mathrm{nm}$ est beaucoup trop grand pour un noyau.`,
  },
  {
    order: 28,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des nombres quantiques :`,
    choices: [
      `Le nombre quantique principal $\\mathrm{n}$ repère la couche électronique.`,
      `Pour $\\mathrm{n} = 2$, le nombre quantique $\\ell$ peut prendre les valeurs $0$, $1$ et $2$.`,
      `Pour $\\ell = 1$, le nombre quantique magnétique $\\mathrm{m}$ peut prendre trois valeurs : $-1$, $0$ et $+1$.`,
      `Le spin d'un électron ne peut prendre que la valeur $+\\dfrac{1}{2}$.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La proposition A est vraie : $\\mathrm{n}$ repère la couche électronique. La proposition B est fausse : pour une couche donnée, $\\ell$ varie de $0$ à $\\mathrm{n} - 1$, donc pour $\\mathrm{n} = 2$ on a seulement $\\ell = 0$ ou $1$. La proposition C est vraie : si $\\ell = 1$, alors $\\mathrm{m}$ peut valoir $-1$, $0$ ou $+1$. La proposition D est fausse : le spin de l'électron peut valoir $+\\dfrac{1}{2}$ ou $-\\dfrac{1}{2}$.`,
  },
  {
    order: 29,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des sous-couches et des orbitales :`,
    choices: [
      `L'écriture $4\\mathrm{f}$ signifie que $\\mathrm{n} = 4$ et $\\ell = 3$.`,
      `Une sous-couche $\\mathrm{d}$ contient $2\\ell$ orbitales, soit 4 orbitales.`,
      `Une sous-couche $\\mathrm{p}$ comporte trois orbitales.`,
      `Une orbitale peut contenir au maximum 3 électrons.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La proposition A est vraie : dans $4\\mathrm{f}$, on lit $\\mathrm{n} = 4$ et la lettre $\\mathrm{f}$ correspond à $\\ell = 3$. La proposition B est fausse : une sous-couche de nombre quantique $\\ell$ contient $2\\ell + 1$ orbitales ; pour $\\mathrm{d}$, avec $\\ell = 2$, cela fait 5 orbitales. La proposition C est vraie : une sous-couche $\\mathrm{p}$ contient 3 orbitales. La proposition D est fausse : une orbitale peut accueillir au maximum 2 électrons.`,
  },
  {
    order: 30,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des nombres quantiques :`,
    choices: [
      `Le nombre quantique principal $\\mathrm{n}$ indique la couche électronique occupée par l'électron.`,
      `Le nombre quantique secondaire $\\ell$ indique le nombre total d'électrons de l'atome.`,
      `Le nombre quantique magnétique $\\mathrm{m}$ indique la charge électrique de l'électron.`,
      `Le nombre quantique de spin $\\mathrm{s}$ indique la distance exacte entre l'électron et le noyau.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `La proposition A est vraie : le nombre quantique principal $\\mathrm{n}$ repère la couche électronique. La proposition B est fausse : $\\ell$ renseigne sur la sous-couche, pas sur le nombre total d'électrons de l'atome. La proposition C est fausse : $\\mathrm{m}$ décrit l'orientation de l'orbitale dans l'espace, et non la charge de l'électron. La proposition D est fausse : $\\mathrm{s}$ décrit le spin de l'électron, pas sa distance au noyau.`,
  },
  {
    order: 31,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos du nombre quantique secondaire $\\ell$ :`,
    choices: [
      `Il précise le type de sous-couche occupée par l'électron : $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ ou $\\mathrm{f}$.`,
      `Il intervient dans la forme générale de l'orbitale associée.`,
      `Il donne le nombre de protons contenus dans le noyau.`,
      `Il précise le sens du spin de l'électron.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La proposition A est vraie : le nombre quantique secondaire $\\ell$ détermine la sous-couche, donc le type $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ ou $\\mathrm{f}$. La proposition B est vraie : cette valeur est aussi liée à la forme générale de l'orbitale. La proposition C est fausse : le nombre de protons relève du numéro atomique $Z$, pas des nombres quantiques de l'électron. La proposition D est fausse : le sens du spin est donné par $\\mathrm{m}_{\\mathrm{s}}$, pas par $\\ell$.`,
  },
  {
    order: 32,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les configurations électroniques suivantes :`,
    choices: [
      `$\\mathrm{C}\\,(Z = 6) : \\mathrm{K}\\,2\\mathrm{s}^2\\,2\\mathrm{p}^2$.`,
      `$\\mathrm{F}\\,(Z = 9) : \\mathrm{K}\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6$.`,
      `$\\mathrm{Na}\\,(Z = 11) : \\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^1$.`,
      `$\\mathrm{Al}\\,(Z = 13) : \\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^2\\,3\\mathrm{p}^2$.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Les propositions A et C sont exactes. La proposition A est vraie : le carbone a $Z = 6$, donc sa configuration est bien $\\mathrm{K}\\,2\\mathrm{s}^2\\,2\\mathrm{p}^2$. La proposition B est fausse : le fluor a $Z = 9$, donc sa configuration est $\\mathrm{K}\\,2\\mathrm{s}^2\\,2\\mathrm{p}^5$ ; la configuration $2\\mathrm{p}^6$ correspond au néon. La proposition C est vraie : le sodium a $Z = 11$, donc sa configuration est bien $\\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^1$. La proposition D est fausse : l'aluminium a $Z = 13$, donc sa configuration est $\\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^2\\,3\\mathrm{p}^1$, et non $3\\mathrm{p}^2$. Les pièges classiques ici sont de confondre le fluor avec le néon, ou d'ajouter un électron de trop à l'aluminium.`,
  },
  {
    order: 33,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos du nombre quantique principal $\\mathrm{n}$ :`,
    choices: [
      `Il indique la couche électronique occupée par l'électron.`,
      `Il donne une indication sur le niveau d'énergie de l'électron.`,
      `Il indique la position exacte de l'électron autour du noyau.`,
      `Il donne le nombre de neutrons de l'atome.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La proposition A est vraie : $\\mathrm{n}$ repère la couche électronique. La proposition B est vraie : il est lié au niveau d'énergie de l'électron. La proposition C est fausse : en mécanique quantique, on ne décrit pas une trajectoire ou une position exacte de l'électron. La proposition D est fausse : le nombre de neutrons dépend du noyau, pas des nombres quantiques électroniques.`,
  },
  {
    order: 34,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Choisir la configuration électronique correspondant à un atome d'azote dans son état fondamental :`,
    choices: [
      {
        type: 'quantum-boxes',
        orbitals: [
          { label: '1\\mathrm{s}', boxes: ['pair'] },
          { label: '2\\mathrm{s}', boxes: ['empty'] },
          { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'up'] },
        ],
      },
      {
        type: 'quantum-boxes',
        orbitals: [
          { label: '1\\mathrm{s}', boxes: ['pair'] },
          { label: '2\\mathrm{s}', boxes: ['up'] },
          { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'empty'] },
        ],
      },
      {
        type: 'quantum-boxes',
        orbitals: [
          { label: '1\\mathrm{s}', boxes: ['pair'] },
          { label: '2\\mathrm{s}', boxes: ['pair'] },
          { label: '2\\mathrm{p}', boxes: ['pair', 'up', 'empty'] },
        ],
      },
      {
        type: 'quantum-boxes',
        orbitals: [
          { label: '1\\mathrm{s}', boxes: ['pair'] },
          { label: '2\\mathrm{s}', boxes: ['pair'] },
          { label: '2\\mathrm{p}', boxes: ['up', 'up', 'up'] },
        ],
      },
    ],
    correctChoiceIndexes: [3],
    explanation:
      `La proposition D est correcte : l'azote a pour numéro atomique $Z = 7$, donc 7 électrons, soit la configuration $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^3$. Dans la sous-couche $2\\mathrm{p}$, la règle de Hund impose de placer d'abord un électron dans chacune des trois orbitales, avec des spins parallèles, avant tout appariement : on obtient donc $[↑][↑][↑]$. La proposition A est fausse : la sous-couche $2\\mathrm{s}$ ne peut pas rester vide alors que des électrons occupent déjà $2\\mathrm{p}$. La proposition B est fausse : elle laisse $2\\mathrm{s}$ incomplète et apparie trop tôt les électrons dans $2\\mathrm{p}$. La proposition C est fausse : elle respecte le nombre total d'électrons, mais ne correspond pas à l'état fondamental car elle forme un doublet dans $2\\mathrm{p}$ au lieu d'occuper d'abord séparément les trois orbitales.`,
  },
  {
    order: 35,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des correspondances entre $\\ell$ et les sous-couches :`,
    choices: [
      `$\\ell = 0$ correspond à une sous-couche $\\mathrm{s}$.`,
      `$\\ell = 1$ correspond à une sous-couche $\\mathrm{p}$.`,
      `$\\ell = 2$ correspond à une sous-couche $\\mathrm{d}$.`,
      `Tous les items précédents sont faux.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les propositions A, B et C sont vraies : les correspondances usuelles sont bien $\\ell = 0 \\to \\mathrm{s}$, $\\ell = 1 \\to \\mathrm{p}$, $\\ell = 2 \\to \\mathrm{d}$, puis $\\ell = 3 \\to \\mathrm{f}$. La proposition D est donc fausse. C'est le piège classique de lecture : dès qu'un des items précédents est vrai, une proposition globale comme celle-ci tombe.`,
  },
  {
    order: 36,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `On donne la configuration électronique simplifiée du zinc : $\\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,4\\mathrm{s}^2\\,3\\mathrm{d}^{10}$. À propos de sa couche de valence :`,
    choices: [
      `La couche de valence du zinc est la couche $\\mathrm{N}$.`,
      `La couche de valence du zinc est la couche $\\mathrm{M}$, car la dernière sous-couche remplie est $3\\mathrm{d}^{10}$.`,
      `Dans cette approche, le zinc possède 2 électrons de valence.`,
      `La couche de valence correspond à la couche de nombre $\\mathrm{n}$ le plus élevé.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `Les propositions A, C et D sont exactes. Dans cette approche, la couche de valence correspond à la couche de nombre quantique principal $\\mathrm{n}$ le plus élevé. Ici, les électrons $4\\mathrm{s}^2$ appartiennent à la couche $\\mathrm{n} = 4$, c'est-à-dire à la couche $\\mathrm{N}$ : c'est donc la couche de valence du zinc. Le zinc possède alors 2 électrons de valence. La proposition B est fausse : même si la sous-couche $3\\mathrm{d}^{10}$ est écrite en fin de configuration simplifiée, elle appartient à la couche $\\mathrm{n} = 3$, donc à la couche $\\mathrm{M}$. Elle ne définit donc pas la couche de valence dans cette approche.`,
  },
  {
    order: 37,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Pour une couche de nombre quantique principal $\\mathrm{n} = 2$ :`,
    choices: [
      `La sous-couche $2\\mathrm{s}$ peut exister.`,
      `La sous-couche $2\\mathrm{p}$ peut exister.`,
      `La sous-couche $2\\mathrm{d}$ peut exister.`,
      `Pour $\\mathrm{n} = 2$, $\\ell$ peut valoir $0$ ou $1$.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Pour une couche donnée, $\\ell$ prend les valeurs entières de $0$ à $\\mathrm{n} - 1$. Pour $\\mathrm{n} = 2$, on a donc seulement $\\ell = 0$ et $\\ell = 1$, ce qui correspond aux sous-couches $2\\mathrm{s}$ et $2\\mathrm{p}$. La sous-couche $2\\mathrm{d}$ n'existe donc pas.`,
  },
  {
    order: 38,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos d'une orbitale atomique :`,
    choices: [
      `Elle peut contenir au maximum 2 électrons.`,
      `Elle peut contenir au maximum 6 électrons.`,
      `Elle correspond toujours à une couche complète.`,
      `Elle correspond toujours à un électron célibataire.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `La proposition A est vraie : une orbitale peut contenir au maximum 2 électrons, avec des spins opposés. La proposition B est fausse : 6 électrons correspond à la capacité maximale d'une sous-couche $\\mathrm{p}$, pas d'une orbitale unique. Les propositions C et D sont fausses : une orbitale n'est ni une couche complète, ni nécessairement occupée par un seul électron.`,
  },
  {
    order: 39,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de la règle de Hund :`,
    choices: [
      `Les électrons occupent d'abord séparément les orbitales d'une même sous-couche.`,
      `Les doublets se forment après occupation simple des orbitales disponibles.`,
      `On place obligatoirement deux électrons dans la première orbitale avant de passer à la suivante.`,
      `Une orbitale peut contenir trois électrons si la sous-couche n'est pas pleine.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La proposition A est vraie : dans une même sous-couche, les électrons occupent d'abord séparément les orbitales disponibles. La proposition B est vraie : les doublets ne se forment qu'après cette occupation simple initiale. La proposition C est fausse : ce serait contraire à la règle de Hund. La proposition D est fausse : une orbitale ne peut jamais contenir plus de 2 électrons.`,
  },
  {
    order: 40,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Choisir la configuration électronique correspondant à un atome d'oxygène dans son état fondamental :`,
    choices: [
      {
        type: 'quantum-boxes',
        orbitals: [
          { label: '1\\mathrm{s}', boxes: ['pair'] },
          { label: '2\\mathrm{s}', boxes: ['pair'] },
          { label: '2\\mathrm{p}', boxes: ['pair', 'up', 'up'] },
        ],
      },
      {
        type: 'quantum-boxes',
        orbitals: [
          { label: '1\\mathrm{s}', boxes: ['pair'] },
          { label: '2\\mathrm{s}', boxes: ['pair'] },
          { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'empty'] },
        ],
      },
      {
        type: 'quantum-boxes',
        orbitals: [
          { label: '1\\mathrm{s}', boxes: ['pair'] },
          { label: '2\\mathrm{s}', boxes: ['up'] },
          { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'up'] },
        ],
      },
      {
        type: 'quantum-boxes',
        orbitals: [
          { label: '1\\mathrm{s}', boxes: ['pair'] },
          { label: '2\\mathrm{s}', boxes: ['empty'] },
          { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'pair'] },
        ],
      },
    ],
    correctChoiceIndexes: [0],
    explanation:
      `La proposition A est correcte : l'oxygène possède 8 électrons, soit la configuration $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^4$. Dans les trois orbitales $2\\mathrm{p}$, la règle de Hund impose d'occuper d'abord séparément les orbitales avant de former un doublet, d'où la répartition $[↑↓][↑][↑]$. La proposition B est fausse : elle ne respecte pas l'état fondamental attendu pour $2\\mathrm{p}^4$, car elle forme trop tôt un second doublet. La proposition C est fausse : elle place mal les électrons entre $2\\mathrm{s}$ et $2\\mathrm{p}$ et ne correspond donc pas à la configuration fondamentale. La proposition D est fausse : elle laisse la sous-couche $2\\mathrm{s}$ vide alors qu'elle doit être remplie avant la fin du remplissage de $2\\mathrm{p}$.`,
  },
  {
    order: 41,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Dans l'hypothèse où la configuration électronique $\\mathrm{K}\\,\\mathrm{L}$ [[QUESTION_DIAGRAM]] correspond à un atome dans son état fondamental, quel principe ou quelle règle permettant d'établir une configuration électronique n'est pas respecté(e) ?`,
    questionDiagram: {
      type: 'quantum-boxes',
      orbitals: [
        { label: '3\\mathrm{s}', boxes: ['pair'] },
        { label: '3\\mathrm{p}', boxes: ['pair', 'up', 'empty'] },
      ],
    },
    choices: [
      `Hund`,
      `Klechkowski`,
      `Pauli`,
      `Bohr`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `La bonne réponse est la règle de Hund. Ici, $3\\mathrm{s}$ est correctement rempli, mais la sous-couche $3\\mathrm{p}^3$ ne l'est pas : dans l'état fondamental, les trois électrons doivent d'abord occuper séparément les trois orbitales $\\mathrm{p}$, avec des spins parallèles, avant tout appariement. La représentation $3\\mathrm{p}\\ [↑↓][↑][\\ ]$ forme donc un doublet trop tôt et laisse une orbitale vide : elle viole Hund. Le principe de Pauli n'est pas violé ici, car l'orbitale doublée contient bien deux électrons de spins opposés. La règle de Klechkowski n'est pas non plus en cause, puisque l'ordre global de remplissage $\\mathrm{K}$, $\\mathrm{L}$, $3\\mathrm{s}$, puis $3\\mathrm{p}$ reste cohérent.`,
  },
  {
    order: 42,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos d'une orbitale atomique, quelles propositions sont exactes ?`,
    choices: [
      `Une orbitale atomique correspond à une zone où la probabilité de présence de l'électron est élevée.`,
      `Une orbitale atomique décrit la trajectoire précise suivie par l'électron autour du noyau.`,
      `Une orbitale atomique permet de connaître avec certitude la position exacte de l'électron à chaque instant.`,
      `Une orbitale atomique peut contenir au maximum deux électrons.`,
    ],
    correctChoiceIndexes: [0, 3],
    explanation:
      `La proposition A est vraie : une orbitale atomique correspond à une région de l'espace dans laquelle la probabilité de présence de l'électron est élevée. La proposition B est fausse : une orbitale n'est pas une trajectoire, contrairement à l'image classique d'une planète en orbite. La proposition C est fausse : la mécanique quantique ne permet pas de connaître avec certitude la position exacte de l'électron à chaque instant. La proposition D est vraie : une orbitale peut contenir au maximum deux électrons, qui diffèrent alors par leur spin.`,
  },
  {
    order: 43,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de la forme des orbitales atomiques, quelles propositions sont exactes ?`,
    choices: [
      `Une orbitale $\\mathrm{s}$ a une forme globalement sphérique.`,
      `Une orbitale $\\mathrm{p}$ est généralement représentée par deux lobes orientés dans l'espace.`,
      `Toutes les orbitales atomiques ont exactement la même forme.`,
      `La forme de l'orbitale dépend notamment du type de sous-couche : $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ ou $\\mathrm{f}$.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La proposition A est vraie : une orbitale $\\mathrm{s}$ est globalement sphérique. La proposition B est vraie : une orbitale $\\mathrm{p}$ est classiquement représentée par deux lobes orientés dans l'espace. La proposition C est fausse : les orbitales atomiques n'ont pas toutes la même forme. La proposition D est vraie : la forme dépend notamment de la sous-couche, donc de la valeur de $\\ell$, ce qui distingue les orbitales $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ et $\\mathrm{f}$. Une orbitale reste un volume de l'espace associé à une probabilité de présence de l'électron, et non une trajectoire.`,
  },
  {
    order: 44,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Les énoncés des questions 7 et 8 sont liés, ils concernent l'élément fer ($Z = 26$).\n\nParmi les propositions suivantes, laquelle correspond à la configuration électronique de cet élément dans son état fondamental :`,
    choices: [
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^8\\,4\\mathrm{s}^0$.`,
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2$.`,
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^8\\,3\\mathrm{d}^4\\,4\\mathrm{s}^2$.`,
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^4\\,4\\mathrm{s}^2\\,4\\mathrm{p}^2$.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `La bonne réponse est la proposition B. Le fer a pour numéro atomique $Z = 26$ : il possède donc 26 électrons à répartir. En état fondamental, sa configuration électronique est $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2$, soit $[\\mathrm{Ar}]\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2$. La proposition A est fausse : elle correspondrait à un remplissage $3\\mathrm{d}^8\\,4\\mathrm{s}^0$ qui ne décrit pas l'état fondamental attendu. La proposition C est fausse car une sous-couche $3\\mathrm{p}$ ne peut pas contenir 8 électrons : sa capacité maximale est de 6. La proposition D est fausse : elle fait intervenir $4\\mathrm{p}$ alors que cette sous-couche n'est pas occupée dans l'état fondamental du fer.`,
  },
  {
    order: 45,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Les énoncés des questions 7 et 8 sont liés, ils concernent l'élément fer ($Z = 26$).\n\nParmi les propositions suivantes, quelle est la couche de valence de cet élément ?`,
    choices: [
      `N.`,
      `L.`,
      `K.`,
      `M.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `La bonne réponse est la proposition A : la couche de valence du fer est la couche $\\mathrm{N}$, car le plus grand nombre quantique principal présent dans sa configuration fondamentale est $\\mathrm{n} = 4$ avec les électrons $4\\mathrm{s}^2$. Les couches $\\mathrm{K}$, $\\mathrm{L}$, $\\mathrm{M}$, $\\mathrm{N}$ correspondent respectivement à $\\mathrm{n} = 1$, $2$, $3$, $4$. Même si la sous-couche $3\\mathrm{d}$ intervient aussi dans les propriétés chimiques du fer, la couche la plus externe reste ici la couche $\\mathrm{N}$.`,
  },
  {
    order: 46,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Déterminer le(s) quadruplet(s) $(\\mathrm{n} ; \\ell ; \\mathrm{m} ; \\mathrm{s})$ de nombres quantiques inexact(s) :`,
    choices: [
      `$(5 ; 2 ; -1 ; +\\dfrac{1}{2})$.`,
      `$(3 ; 3 ; 0 ; -\\dfrac{1}{2})$.`,
      `$(4 ; 1 ; 2 ; +\\dfrac{1}{2})$.`,
      `$(2 ; 0 ; 0 ; -\\dfrac{1}{2})$.`,
    ],
    correctChoiceIndexes: [1, 2],
    explanation:
      `Les propositions B et C sont inexactes. Pour un électron, le nombre quantique principal $\\mathrm{n}$ est un entier strictement positif, puis $\\ell$ doit vérifier $0 \\leq \\ell \\leq \\mathrm{n} - 1$. Ensuite, $\\mathrm{m}$ doit être compris entre $-\\ell$ et $+\\ell$. Enfin, le spin $\\mathrm{s}$ ne peut valoir que $+\\dfrac{1}{2}$ ou $-\\dfrac{1}{2}$. La proposition A est donc correcte : avec $\\mathrm{n} = 5$ et $\\ell = 2$, la valeur $\\mathrm{m} = -1$ est possible et le spin aussi. La proposition B est fausse car pour $\\mathrm{n} = 3$, on ne peut pas avoir $\\ell = 3$ ; les valeurs possibles sont $0$, $1$ ou $2$. La proposition C est fausse car si $\\ell = 1$, alors $\\mathrm{m}$ ne peut valoir que $-1$, $0$ ou $+1$, et non $2$. La proposition D est correcte : pour $\\mathrm{n} = 2$, le quadruplet $(2 ; 0 ; 0 ; -\\dfrac{1}{2})$ est parfaitement admissible.`,
  },
  {
    order: 47,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos du remplissage des sous-couches électroniques, quelles propositions sont exactes ?`,
    choices: [
      `Les sous-couches se remplissent toujours dans l'ordre croissant de $\\mathrm{n}$, quelle que soit leur énergie.`,
      `La sous-couche $2\\mathrm{p}$ se remplit avant la sous-couche $3\\mathrm{s}$, car elles ont le même $\\mathrm{n} + \\ell$, mais $2\\mathrm{p}$ a le plus petit $\\mathrm{n}$.`,
      `La sous-couche $4\\mathrm{s}$ se remplit avant la sous-couche $3\\mathrm{d}$, même si $4\\mathrm{s}$ appartient à une couche de nombre $\\mathrm{n}$ plus élevé.`,
      `En cas d'égalité de $\\mathrm{n} + \\ell$, la sous-couche ayant le plus grand $\\mathrm{n}$ est remplie en premier.`,
    ],
    correctChoiceIndexes: [1, 2],
    explanation:
      `Les propositions B et C sont exactes. Le remplissage ne suit pas simplement l'ordre des couches $\\mathrm{n} = 1$, $2$, $3$, $4$, mais l'ordre des niveaux d'énergie. On remplit d'abord la sous-couche ayant le plus petit $\\mathrm{n} + \\ell$. En cas d'égalité, c'est la sous-couche ayant le plus petit $\\mathrm{n}$ qui est remplie en premier. Ainsi, $2\\mathrm{p}$ se remplit avant $3\\mathrm{s}$ car, dans les deux cas, $\\mathrm{n} + \\ell = 3$, mais $2\\mathrm{p}$ a le plus petit $\\mathrm{n}$. De même, $4\\mathrm{s}$ se remplit avant $3\\mathrm{d}$ car $4\\mathrm{s}$ a $\\mathrm{n} + \\ell = 4$, alors que $3\\mathrm{d}$ a $\\mathrm{n} + \\ell = 5$. La proposition A est donc fausse, et la proposition D inverse la règle de départage.`,
  },
  {
    order: 48,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le rhodium ($\\mathrm{Rh}$, $Z = 45$) possède :`,
    choices: [
      `9 électrons $\\mathrm{s}$, 18 électrons $\\mathrm{p}$ et 18 électrons $\\mathrm{d}$.`,
      `10 électrons $\\mathrm{s}$, 18 électrons $\\mathrm{p}$ et 17 électrons $\\mathrm{d}$.`,
      `8 électrons $\\mathrm{s}$, 18 électrons $\\mathrm{p}$ et 19 électrons $\\mathrm{d}$.`,
      `9 électrons $\\mathrm{s}$, 24 électrons $\\mathrm{p}$ et 12 électrons $\\mathrm{d}$.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `La bonne réponse est la proposition A. Le rhodium a pour numéro atomique $Z = 45$, donc 45 électrons. Sa configuration électronique fondamentale s'écrit $[\\mathrm{Kr}]\\,4\\mathrm{d}^8\\,5\\mathrm{s}^1$. En développant, on compte $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,3\\mathrm{s}^2\\,4\\mathrm{s}^2\\,5\\mathrm{s}^1$, soit 9 électrons $\\mathrm{s}$ ; $2\\mathrm{p}^6\\,3\\mathrm{p}^6\\,4\\mathrm{p}^6$, soit 18 électrons $\\mathrm{p}$ ; et $3\\mathrm{d}^{10}\\,4\\mathrm{d}^8$, soit 18 électrons $\\mathrm{d}$. On retrouve bien $9 + 18 + 18 = 45$.`,
  },
  {
    order: 49,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des orbitales atomiques :`,
    choices: [
      `Une orbitale atomique $\\mathrm{s}$ possède une symétrie axiale, alors qu'une orbitale atomique $\\mathrm{p}$ possède une symétrie centrale.`,
      `Une orbitale atomique $\\mathrm{s}$ a une forme sphérique.`,
      `Contrairement à une orbitale $\\mathrm{s}$, une orbitale $\\mathrm{p}$ possède un plan nodal.`,
      `Les orbitales atomiques $2\\mathrm{p}_x$, $2\\mathrm{p}_y$ et $2\\mathrm{p}_z$ possèdent un axe de symétrie en commun.`,
    ],
    correctChoiceIndexes: [1, 2],
    explanation:
      `Les propositions B et C sont exactes. Une orbitale $\\mathrm{s}$ est globalement sphérique ; elle présente donc une symétrie centrale, et non une simple symétrie axiale. Une orbitale $\\mathrm{p}$ est orientée selon un axe donné et présente un plan nodal passant par le noyau. La proposition A inverse donc les propriétés de symétrie de $\\mathrm{s}$ et de $\\mathrm{p}$. La proposition D est fausse : $2\\mathrm{p}_x$, $2\\mathrm{p}_y$ et $2\\mathrm{p}_z$ sont orientées selon trois axes perpendiculaires différents ; elles n'ont pas un axe de symétrie commun.`,
  },
  {
    order: 50,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Dans le modèle de l'atome d'hydrogène de Bohr, l'énergie, exprimée en $\\mathrm{eV}$, d'un électron se trouvant dans la couche de nombre $\\mathrm{n}$ est donnée par la formule $E_{\\mathrm{n}} = -\\dfrac{13{,}6}{\\mathrm{n}^2}$. Un électron de la couche $\\mathrm{L}$ a une énergie égale à :`,
    choices: [
      `$4{,}3\\,\\mathrm{eV}$.`,
      `$3{,}6\\,\\mathrm{eV}$.`,
      `$-4{,}3\\,\\mathrm{eV}$.`,
      `$-3{,}4\\,\\mathrm{eV}$.`,
    ],
    correctChoiceIndexes: [3],
    explanation:
      `La bonne réponse est la proposition D. La couche $\\mathrm{L}$ correspond à $\\mathrm{n} = 2$. On obtient donc $E_{\\mathrm{n}} = -\\dfrac{13{,}6}{2^2} = -\\dfrac{13{,}6}{4} = -3{,}4\\,\\mathrm{eV}$. Les propositions A et B oublient le signe négatif. La proposition C correspond à une valeur numériquement proche, mais le calcul correct donne bien $-3{,}4\\,\\mathrm{eV}$.`,
  },
  {
    order: 51,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On rappelle qu'un édifice atomique désigne un atome ou un ion :`,
    choices: [
      `Deux édifices atomiques ayant des configurations électroniques différentes correspondent obligatoirement à des éléments chimiques différents.`,
      `Deux édifices atomiques correspondant à des éléments chimiques différents ne peuvent pas présenter la même configuration électronique.`,
      `Si deux édifices atomiques présentent la même configuration électronique, alors ils appartiennent forcément au même élément chimique.`,
      `Un édifice atomique peut avoir différentes configurations électroniques.`,
    ],
    correctChoiceIndexes: [3],
    explanation:
      `La seule proposition exacte est D. La proposition A est fausse : un même élément chimique peut donner plusieurs édifices atomiques de configurations différentes, par exemple un atome neutre et l'un de ses ions. La proposition B est fausse : deux éléments chimiques différents peuvent conduire à des espèces isoélectroniques, donc de même configuration électronique, comme $\\mathrm{Ne}$ et $\\mathrm{Na}^+$. La proposition C est donc fausse elle aussi : partager la même configuration électronique n'impose pas d'appartenir au même élément chimique. Enfin, la proposition D est vraie : un même édifice atomique peut être rencontré dans l'état fondamental ou dans un état excité, avec des configurations électroniques différentes selon l'état considéré.`,
  },
  {
    order: 52,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Les énoncés des questions 6 et 7 sont liés, ils concernent l'élément nickel ($Z = 28$).\n\nParmi les propositions suivantes, laquelle correspond à la configuration électronique de cet élément dans son état fondamental :`,
    choices: [
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^{10}\\,4\\mathrm{s}^0$.`,
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^8\\,4\\mathrm{s}^2$.`,
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^8\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2$.`,
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2\\,4\\mathrm{p}^2$.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `La bonne réponse est la proposition B. Le nickel a pour numéro atomique $Z = 28$ : il possède donc 28 électrons. En état fondamental, sa configuration électronique est $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^8\\,4\\mathrm{s}^2$, soit $[\\mathrm{Ar}]\\,3\\mathrm{d}^8\\,4\\mathrm{s}^2$. La proposition A est fausse : elle ferait disparaître les électrons $4\\mathrm{s}$ au profit d'une sous-couche $3\\mathrm{d}$ saturée, ce qui ne correspond pas ici à l'état fondamental. La proposition C est fausse car une sous-couche $3\\mathrm{p}$ ne peut pas contenir 8 électrons : sa capacité maximale est de 6. La proposition D est fausse : elle fait intervenir $4\\mathrm{p}$ alors que cette sous-couche n'est pas occupée dans l'état fondamental du nickel.`,
  },
  {
    order: 53,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Les énoncés des questions 6 et 7 sont liés, ils concernent l'élément nickel ($Z = 28$).\n\nParmi les propositions suivantes, quelle est la couche de valence de cet élément ?`,
    choices: [
      `$\\mathrm{N}$.`,
      `$\\mathrm{L}$.`,
      `$\\mathrm{K}$.`,
      `$\\mathrm{M}$.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `La bonne réponse est la proposition A. Dans la configuration fondamentale du nickel, le plus grand nombre quantique principal présent est $\\mathrm{n} = 4$ avec les électrons $4\\mathrm{s}^2$. La couche de valence est donc la couche $\\mathrm{N}$. Les couches $\\mathrm{K}$, $\\mathrm{L}$, $\\mathrm{M}$, $\\mathrm{N}$ correspondent respectivement à $\\mathrm{n} = 1$, $2$, $3$, $4$. Même si la sous-couche $3\\mathrm{d}$ participe aussi aux propriétés chimiques du nickel, la couche la plus externe reste ici la couche $\\mathrm{N}$.`,
  },
  {
    order: 54,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Un composé organique inconnu est formé des éléments $\\mathrm{C}$, $\\mathrm{H}$ et $\\mathrm{Cl}$. La détermination expérimentale de sa masse molaire donne $M = 50\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et une analyse montre qu'un échantillon de masse quelconque les contient dans les proportions massiques respectives 24 %, 6 % et 70 %. Déterminer la formule brute correspondant à cette espèce chimique.\n\nDonnées : $M_{\\mathrm{C}} = 12\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ ; $M_{\\mathrm{H}} = 1{,}0\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ ; $M_{\\mathrm{Cl}} = 35\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
    choices: [
      `$\\mathrm{C}_2\\mathrm{H}_5\\mathrm{Cl}$.`,
      `$\\mathrm{C}_2\\mathrm{H}_4\\mathrm{Cl}_2$.`,
      `$\\mathrm{CH}_3\\mathrm{Cl}$.`,
      `$\\mathrm{CH}_2\\mathrm{Cl}_2$.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `La bonne réponse est la proposition C. En raisonnant sur 100 g de composé, on obtient 24 g de carbone, 6 g d'hydrogène et 70 g de chlore. Cela correspond à $\\dfrac{24}{12} = 2$ mol de $\\mathrm{C}$, $\\dfrac{6}{1} = 6$ mol de $\\mathrm{H}$ et $\\dfrac{70}{35} = 2$ mol de $\\mathrm{Cl}$. Le rapport molaire est donc $2 : 6 : 2$, soit $1 : 3 : 1$ après simplification : la formule empirique est $\\mathrm{CH}_3\\mathrm{Cl}$. Sa masse molaire vaut $12 + 3 \\times 1 + 35 = 50\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$, exactement la valeur mesurée. La formule brute est donc elle aussi $\\mathrm{CH}_3\\mathrm{Cl}$.`,
  },
];

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Atomes`,
    description:
      `Structure de l'atome, nucléides, isotopes et ordres de grandeur associés.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Organisation et configuration électronique`,
    description:
      `Couches, sous-couches, orbitales, nombres quantiques et configurations électroniques.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Classification périodique des éléments`,
    description:
      `Organisation de la classification, familles chimiques et propriétés associées.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Synthèse`,
    description:
      `Section de consolidation transversale sur les atomes, l'organisation électronique et la classification périodique.`,
    kind: 'SYNTHESIS',
  },
];

const firstQuizQuestionOrders = [1, 22, 2, 11, 12, 13, 21, 15, 3, 4];
const secondQuizQuestionOrders = [25, 14, 26, 16, 17, 18, 19, 20, 23, 24];
const secondSectionDiscoverQuestionOrders = [28, 29];
const secondSectionPracticeQuestionOrders = [28, 29, 40, 41, 42, 43, 44, 45, 46, 47];
const secondSectionSecondDiscoverQuestionOrders = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

const quizSeeds: SeedQuiz[] = [
  {
    order: FIRST_QUIZ_ORDER,
    slug: FIRST_QUIZ_SLUG,
    title: `Découvrir – Atomes`,
    description:
      `Premier niveau d'entraînement limité à la section A – Atomes, au format UE1 avec 4 items par question.`,
    stage: 'DISCOVER',
    sectionOrder: FIRST_SECTION_ORDER,
    questionOrders: firstQuizQuestionOrders,
  },
  {
    order: SECOND_QUIZ_ORDER,
    slug: SECOND_QUIZ_SLUG,
    title: `S'entraîner – Généralités sur l'atome`,
    description:
      `Niveau 2 d'entraînement sur la section A – Atomes, centré sur les généralités, les nucléides et les isotopes.`,
    stage: 'PRACTICE',
    sectionOrder: FIRST_SECTION_ORDER,
    questionOrders: secondQuizQuestionOrders,
  },
  {
    order: SECOND_SECTION_DISCOVER_QUIZ_ORDER,
    slug: SECOND_SECTION_DISCOVER_QUIZ_SLUG,
    title: `Découvrir – Organisation et configuration électronique`,
    description:
      `Premier niveau d'entraînement sur la section B – Organisation et configuration électronique.`,
    stage: 'DISCOVER',
    sectionOrder: SECOND_SECTION_ORDER,
    questionOrders: secondSectionSecondDiscoverQuestionOrders,
  },
  {
    order: SECOND_SECTION_PRACTICE_QUIZ_ORDER,
    slug: SECOND_SECTION_PRACTICE_QUIZ_SLUG,
    title: `S'entraîner – Organisation et configuration électronique`,
    description:
      `Niveau intermédiaire d'entraînement sur la section B – Organisation et configuration électronique.`,
    stage: 'PRACTICE',
    sectionOrder: SECOND_SECTION_ORDER,
    questionOrders: secondSectionPracticeQuestionOrders,
  },
  {
    order: SECOND_SECTION_MASTER_QUIZ_ORDER,
    slug: SECOND_SECTION_MASTER_QUIZ_SLUG,
    title: `Maîtriser – Organisation et configuration électronique`,
    description:
      `Niveau avancé d'entraînement sur la section B – Organisation et configuration électronique.`,
    stage: 'MASTER',
    sectionOrder: SECOND_SECTION_ORDER,
    questionOrders: [],
  },
  {
    order: THIRD_SECTION_DISCOVER_QUIZ_ORDER,
    slug: THIRD_SECTION_DISCOVER_QUIZ_SLUG,
    title: `Découvrir – Classification périodique`,
    description:
      `Premier niveau d'entraînement sur la section C – Classification périodique des éléments.`,
    stage: 'DISCOVER',
    sectionOrder: THIRD_SECTION_ORDER,
    questionOrders: [],
  },
  {
    order: THIRD_SECTION_PRACTICE_QUIZ_ORDER,
    slug: THIRD_SECTION_PRACTICE_QUIZ_SLUG,
    title: `S'entraîner – Classification périodique`,
    description:
      `Niveau intermédiaire d'entraînement sur la section C – Classification périodique des éléments.`,
    stage: 'PRACTICE',
    sectionOrder: THIRD_SECTION_ORDER,
    questionOrders: [],
  },
  {
    order: THIRD_SECTION_MASTER_QUIZ_ORDER,
    slug: THIRD_SECTION_MASTER_QUIZ_SLUG,
    title: `Maîtriser – Classification périodique`,
    description:
      `Niveau avancé d'entraînement sur la section C – Classification périodique des éléments.`,
    stage: 'MASTER',
    sectionOrder: THIRD_SECTION_ORDER,
    questionOrders: [],
  },
  {
    order: SYNTHESIS_QUIZ_ORDER,
    slug: SYNTHESIS_QUIZ_SLUG,
    title: `Synthèse – Atomes`,
    description:
      `QCM de synthèse transversal sur les notions d'atome, de nucléide, d'isotope et d'ordres de grandeur.`,
    stage: 'MASTER',
    sectionOrder: 4,
    questionOrders: [27, 48, 49, 50, 51, 52, 53, 54],
  },
];

export async function seedHealthTrainingUe14(prisma: PrismaClient) {
  console.log('Seeding health training quiz (UE14 chapitre 1)...');

  const subject = await prisma.subject.findFirst({
    where: { longDescription: SUBJECT_LONG_DESCRIPTION },
    select: { id: true },
  });

  if (!subject) {
    console.warn(`   ⚠️  Matière introuvable : ${SUBJECT_LONG_DESCRIPTION}`);
    return;
  }

  const chapter = await prisma.chapter.findUnique({
    where: {
      subjectId_slug: {
        subjectId: subject.id,
        slug: CHAPTER_SLUG,
      },
    },
    select: { id: true, title: true, isActive: true, domainIds: true },
  });

  if (!chapter?.isActive) {
    console.warn(`   ⚠️  Chapitre introuvable ou inactif : ${CHAPTER_SLUG}`);
    return;
  }

  if (chapter.domainIds.length === 0) {
    throw new Error(`Le chapitre ${CHAPTER_SLUG} doit être rattaché au domaine Chimie avant le seed des thèmes.`);
  }

  const questionThemeLabels = Array.from(
    new Set(Object.values(QUESTION_THEME_LABELS_BY_ORDER).flat())
  );
  const existingThemes = await prisma.theme.findMany({
    where: { title: { in: questionThemeLabels } },
    select: { id: true, title: true, chapterIds: true, domainIds: true },
  });
  const existingThemeByTitle = new Map(
    existingThemes.map((theme) => [theme.title, theme] as const)
  );
  const themeIdByLabel = new Map<string, string>();

  for (const label of questionThemeLabels) {
    const existingTheme = existingThemeByTitle.get(label);

    if (existingTheme) {
      const missingDomainIds = chapter.domainIds.filter(
        (domainId) => !existingTheme.domainIds.includes(domainId)
      );

      if (!existingTheme.chapterIds.includes(chapter.id) || missingDomainIds.length > 0) {
        await prisma.theme.update({
          where: { id: existingTheme.id },
          data: {
            chapters: { connect: [{ id: chapter.id }] },
            domains: {
              connect: missingDomainIds.map((domainId) => ({ id: domainId })),
            },
          },
        });
      }

      themeIdByLabel.set(label, existingTheme.id);
      continue;
    }

    const createdTheme = await prisma.theme.create({
      data: {
        title: label,
        shortTitle: label,
        chapters: { connect: [{ id: chapter.id }] },
        domains: {
          connect: chapter.domainIds.map((domainId) => ({ id: domainId })),
        },
      },
      select: { id: true },
    });
    themeIdByLabel.set(label, createdTheme.id);
  }

  for (const entry of questions) {
    const existingQuestion = await prisma.quizQuestion.findUnique({
      where: {
        chapterId_order: {
          chapterId: chapter.id,
          order: entry.order,
        },
      },
      select: { id: true },
    });

    const data = {
      chapterId: chapter.id,
      difficulty: entry.difficulty,
      question: entry.question,
      questionDiagram: entry.questionDiagram,
      choices: entry.choices,
      answerFormat: entry.answerFormat,
      correctChoiceIndexes: entry.correctChoiceIndexes,
      correctChoiceIndex: entry.correctChoiceIndexes[0] ?? 0,
      explanation: entry.explanation,
      order: entry.order,
      isPublished: true,
      themeIds: (QUESTION_THEME_LABELS_BY_ORDER[entry.order] ?? [])
        .map((label) => themeIdByLabel.get(label))
        .filter((themeId): themeId is string => Boolean(themeId)),
    };

    if (existingQuestion) {
      await prisma.quizQuestion.update({
        where: { id: existingQuestion.id },
        data,
      });
    } else {
      await prisma.quizQuestion.create({ data });
    }
  }

  const sectionIdByOrder = new Map<number, string>();

  for (const sectionSeed of sections) {
    const section = await prisma.chapterSection.upsert({
      where: {
        chapterId_order: {
          chapterId: chapter.id,
          order: sectionSeed.order,
        },
      },
      update: {
        title: sectionSeed.title,
        description: sectionSeed.description,
        kind: sectionSeed.kind,
        isPublished: true,
      },
      create: {
        chapterId: chapter.id,
        title: sectionSeed.title,
        description: sectionSeed.description,
        order: sectionSeed.order,
        kind: sectionSeed.kind,
        isPublished: true,
        themeIds: [],
      },
      select: { id: true },
    });

    sectionIdByOrder.set(sectionSeed.order, section.id);
  }

  const chapterQuestions = await prisma.quizQuestion.findMany({
    where: { chapterId: chapter.id, order: { in: questions.map((item) => item.order) } },
    select: { id: true, order: true },
    orderBy: { order: 'asc' },
  });
  const questionIdByOrder = new Map(
    chapterQuestions.map((question) => [question.order, question.id])
  );

  for (const quizSeed of quizSeeds) {
    const sectionId = sectionIdByOrder.get(quizSeed.sectionOrder);

    if (!sectionId) {
      console.warn(
        `   ⚠️  Section introuvable pour ${chapter.title} (ordre ${quizSeed.sectionOrder})`
      );
      continue;
    }

    const quiz = await prisma.trainingQuiz.upsert({
      where: {
        chapterId_slug: {
          chapterId: chapter.id,
          slug: quizSeed.slug,
        },
      },
      update: {
        sectionId,
        title: quizSeed.title,
        description: quizSeed.description,
        order: quizSeed.order,
        stage: quizSeed.stage,
        isPublished: true,
      },
      create: {
        chapterId: chapter.id,
        sectionId,
        slug: quizSeed.slug,
        title: quizSeed.title,
        description: quizSeed.description,
        order: quizSeed.order,
        stage: quizSeed.stage,
        isPublished: true,
      },
      select: { id: true },
    });

    await prisma.trainingQuizQuestion.deleteMany({
      where: { quizId: quiz.id },
    });

    await prisma.trainingQuizQuestionGroup.deleteMany({
      where: { quizId: quiz.id },
    });

    let linkedQuestionCount = 0;

    for (const [index, questionOrder] of quizSeed.questionOrders.entries()) {
      const questionId = questionIdByOrder.get(questionOrder);

      if (!questionId) {
        console.warn(`   ⚠️  Question introuvable pour ${chapter.title} (ordre ${questionOrder})`);
        continue;
      }

      await prisma.trainingQuizQuestion.create({
        data: {
          quizId: quiz.id,
          questionId,
          order: index + 1,
        },
      });

      linkedQuestionCount += 1;
    }

    console.log(
      `   ✓ Quiz "${quizSeed.title}" publié pour ${chapter.title} (${linkedQuestionCount} questions liées, format MULTIPLE)`
    );
  }
}
