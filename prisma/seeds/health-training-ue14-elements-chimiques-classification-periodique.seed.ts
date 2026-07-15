import type {
  ChapterSectionKind,
  PrismaClient,
  QuizAnswerFormat,
  QuizDifficulty,
  TrainingQuizStage,
} from '@prisma/client';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

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
const THIRD_SECTION_ORDER = 3;
const THIRD_SECTION_DISCOVER_QUIZ_ORDER = 1;
const THIRD_SECTION_DISCOVER_QUIZ_SLUG = 'decouvrir-classification-periodique';
const THIRD_SECTION_PRACTICE_QUIZ_ORDER = 2;
const THIRD_SECTION_PRACTICE_QUIZ_SLUG = 'sentrainer-classification-periodique';
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
  explanation: string | null;
  choiceExplanations?: string[];
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
  55: [`Généralités de la classification périodique`],
  56: [`Ordre des premiers éléments chimiques`],
  57: [`Position des blocs dans la classification périodique`],
  58: [`Position d'un élément dans la classification périodique`],
  59: [`Repérage d'un élément par période et colonne`],
  60: [`Halogènes et propriétés de famille`],
  61: [`Métaux, métalloïdes et non-métaux`],
  62: [`Configuration électronique de valence par colonne`],
  64: [`Iode, halogènes et structure électronique`],
  65: [`Éléments constituant la matière vivante`],
  66: [`Métaux, non-métaux et métalloïdes`],
  67: [`Métaux, non-métaux et métalloïdes`],
  68: [`Position d'un élément dans la classification périodique`],
  69: [`Familles de la classification périodique`],
  70: [`Ordre des éléments d'une période de la classification`],
  71: [`Ordre des éléments d'une période de la classification`],
  72: [`Position et nature d'un métal de transition dans la classification`],
  73: [`Lanthanides, actinides et bloc f`],
  74: [`Configuration électronique, métal de transition et couche de valence`],
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
      `Un atome neutre est constitué d'un noyau positif, formé de protons et de neutrons, entouré d'un cortège électronique. Le noyau a une dimension de l'ordre de $10^{-15}\\,\\mathrm{m}$, contre environ $10^{-10}\\,\\mathrm{m}$ pour l'atome, mais il concentre presque toute sa masse.`,
    choiceExplanations: [
      `Le noyau atomique contient des protons et, sauf pour le noyau de l'hydrogène $^{1}\\mathrm{H}$, des neutrons.`,
      `Un atome est électriquement neutre : sa charge totale impose donc autant d'électrons que de protons.`,
      `La dimension du nuage électronique est de l'ordre de $10^{-10}\\,\\mathrm{m}$. La valeur $10^{-15}\\,\\mathrm{m}$ correspond plutôt à l'ordre de grandeur du noyau.`,
      `Les protons et les neutrons étant beaucoup plus massifs que les électrons, la quasi-totalité de la masse de l'atome est concentrée dans le noyau.`,
    ],
  },
  {
    order: 2,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `À propos du numéro atomique $\\mathrm{Z}$ et du nombre de masse $\\mathrm{A}$ :`,
    choices: [
      `$\\mathrm{Z}$ correspond au nombre de protons du noyau.`,
      `$\\mathrm{A}$ est égal à $\\mathrm{Z} + \\mathrm{N}$.`,
      `Deux éléments chimiques différents peuvent avoir le même $\\mathrm{Z}$.`,
      `Un nucléide est caractérisé par $\\mathrm{Z}$ protons et $\\mathrm{N}$ neutrons.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le numéro atomique $\\mathrm{Z}$ est le nombre de protons et identifie l'élément chimique. Le nombre de masse $\\mathrm{A}$ compte tous les nucléons : $\\mathrm{A} = \\mathrm{Z} + \\mathrm{N}$, avec $\\mathrm{N}$ le nombre de neutrons.`,
    choiceExplanations: [
      `Par définition, le numéro atomique $\\mathrm{Z}$ est égal au nombre de protons du noyau.`,
      `Le noyau contenant $\\mathrm{Z}$ protons et $\\mathrm{N}$ neutrons, son nombre total de nucléons est $\\mathrm{A} = \\mathrm{Z} + \\mathrm{N}$.`,
      `Deux éléments chimiques différents ont nécessairement des numéros atomiques différents, puisque $\\mathrm{Z}$ définit l'élément.`,
      `Un nucléide est caractérisé par la composition de son noyau, c'est-à-dire par ses $\\mathrm{Z}$ protons et ses $\\mathrm{N}$ neutrons.`,
    ],
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
      `Deux isotopes appartiennent au même élément chimique : ils ont donc le même numéro atomique $\\mathrm{Z}$. Ils diffèrent par leur nombre de neutrons, et par conséquent par leur nombre de masse $\\mathrm{A}$.`,
    choiceExplanations: [
      `Des isotopes d'un même élément possèdent le même nombre de protons, donc le même numéro atomique $\\mathrm{Z}$.`,
      `Leur nombre de masse n'est pas le même, puisqu'ils diffèrent précisément par leur nombre de neutrons.`,
      `Pour des atomes neutres, le même $\\mathrm{Z}$ conduit à la même configuration électronique ; leurs propriétés chimiques sont donc très voisines, malgré de possibles effets isotopiques faibles.`,
      `À numéro atomique identique, la différence entre deux isotopes porte sur le nombre de neutrons.`,
    ],
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
      `Les dimensions atomiques sont couramment exprimées en nanomètres ou en ångströms : $1\\,\\text{Å} = 10^{-10}\\,\\mathrm{m} = 0{,}1\\,\\mathrm{nm}$. L'atome mesure typiquement autour de $10^{-10}\\,\\mathrm{m}$, alors que son noyau est environ cent mille fois plus petit.`,
    choiceExplanations: [
      `Comme $1\\,\\text{Å} = 10^{-10}\\,\\mathrm{m}$ et $1\\,\\mathrm{nm} = 10^{-9}\\,\\mathrm{m}$, on a bien $1\\,\\text{Å} = 0{,}1\\,\\mathrm{nm}$.`,
      `Le diamètre d'un atome est typiquement de l'ordre de $10^{-10}\\,\\mathrm{m}$.`,
      `Le dalton, de symbole $\\mathrm{Da}$, est utilisé en biochimie comme unité équivalente à l'unité de masse atomique $\\mathrm{u}$.`,
      `Le noyau est beaucoup plus petit que le nuage électronique : environ $10^{-15}\\,\\mathrm{m}$ contre $10^{-10}\\,\\mathrm{m}$.`,
    ],
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
      `Une couche de nombre quantique principal $\\mathrm{n}$ contient les sous-couches correspondant à $\\ell = 0$ jusqu'à $\\ell = \\mathrm{n}-1$. Une sous-couche contient $2\\ell+1$ orbitales, et chaque orbitale peut accueillir au maximum deux électrons.`,
    choiceExplanations: [
      `La couche $\\mathrm{M}$ correspond à $\\mathrm{n} = 3$ ; elle peut donc contenir les sous-couches $3\\mathrm{s}$, $3\\mathrm{p}$ et $3\\mathrm{d}$.`,
      `Pour une sous-couche $\\mathrm{p}$, $\\ell = 1$ et le nombre d'orbitales vaut $2\\ell+1 = 3$.`,
      `Le principe d'exclusion de Pauli limite l'occupation d'une orbitale à deux électrons de spins opposés.`,
      `La lettre $\\mathrm{s}$ correspond à $\\ell = 0$ ; $\\ell = 1$ correspond à une sous-couche $\\mathrm{p}$.`,
    ],
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
      `Le remplissage électronique suit l'ordre croissant d'énergie des sous-couches. La règle de Klechkowski classe d'abord selon $\\mathrm{n}+\\ell$, puis selon le plus petit $\\mathrm{n}$ en cas d'égalité ; la règle de Hund impose ensuite l'occupation séparée des orbitales dégénérées avant l'appariement.`,
    choiceExplanations: [
      `Le nombre quantique principal $\\mathrm{n}$ identifie la couche électronique.`,
      `Pour une valeur donnée de $\\mathrm{n}$, $\\ell$ peut prendre $\\mathrm{n}$ valeurs, de $0$ à $\\mathrm{n}-1$ : la couche comporte donc $\\mathrm{n}$ sous-couches.`,
      `À égalité de $\\mathrm{n}+\\ell$, la sous-couche de plus petit $\\mathrm{n}$ est la plus basse en énergie et se remplit en premier.`,
      `Dans une même sous-couche, les électrons occupent d'abord les orbitales une par une, avec des spins parallèles, avant de former des doublets.`,
    ],
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
    explanation: null,
    choiceExplanations: [
      `L'hydrogène possède un seul électron ; sa configuration fondamentale est donc $1\\mathrm{s}^1$.`,
      `Le néon possède dix électrons : les couches $\\mathrm{K}$ et $\\mathrm{L}$ sont complètes, soit $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6$.`,
      `Le lithium a pour configuration $1\\mathrm{s}^2\\,2\\mathrm{s}^1$ : il ne possède qu'un électron sur sa couche de valence.`,
      `Dans la convention simplifiée retenue par le cours, les électrons de la couche externe du fer sont les deux électrons $4\\mathrm{s}^2$.`,
    ],
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
      `La classification périodique moderne range les éléments par numéro atomique croissant. Ses lignes sont les périodes et ses 18 colonnes regroupent généralement des éléments ayant une configuration électronique externe et des propriétés chimiques voisines.`,
    choiceExplanations: [
      `Depuis la classification moderne, l'ordre des éléments est déterminé par le numéro atomique $\\mathrm{Z}$ croissant.`,
      `Le tableau périodique moderne comporte 18 colonnes, également appelées groupes.`,
      `Les éléments d'un même groupe ont souvent le même nombre d'électrons de valence, ce qui explique leurs propriétés chimiques analogues.`,
      `Une période est une ligne horizontale ; une colonne correspond à un groupe ou à une famille.`,
    ],
  },
  {
    order: 9,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `À propos des familles d'éléments :`,
    choices: [
      `$\\ce{B}$, $\\ce{Si}$ et $\\ce{Ge}$ sont des métalloïdes semi-conducteurs.`,
      `Les métaux forment volontiers des cations.`,
      `Les non-métaux sont toujours solides à température ambiante.`,
      `Les gaz rares sont situés dans la colonne 18.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: null,
    choiceExplanations: [
      `Dans le périmètre du cours, le bore, le silicium et le germanium sont bien cités parmi les métalloïdes semi-conducteurs.`,
      `Les métaux perdent volontiers un ou plusieurs électrons et forment alors des ions positifs, appelés cations.`,
      `Les non-métaux peuvent être solides, liquides ou gazeux à température ambiante ; ils ne sont donc pas toujours solides.`,
      `Les gaz nobles, ou gaz rares, occupent le groupe 18 de la classification périodique.`,
    ],
  },
  {
    order: 10,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des éléments du vivant :`,
    choices: [
      `$\\ce{C}$, $\\ce{H}$, $\\ce{O}$ et $\\ce{N}$ font partie des éléments de base du vivant.`,
      `$\\ce{Fe}$, $\\ce{Zn}$ et $\\ce{Cu}$ font partie des métaux du vivant.`,
      `$\\ce{Cd}$, $\\ce{Hg}$ et $\\ce{Pb}$ sont des oligo-éléments indispensables au vivant.`,
      `$\\ce{F}$, $\\ce{Br}$ et $\\ce{I}$ sont des oligo-éléments non métalliques.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: null,
    choiceExplanations: [
      `Le carbone, l'hydrogène, l'oxygène et l'azote constituent l'essentiel des molécules du vivant.`,
      `Le fer, le zinc et le cuivre sont des éléments métalliques nécessaires à diverses fonctions biologiques, généralement en faibles quantités.`,
      `Le cadmium, le mercure et le plomb sont surtout connus pour leur toxicité et ne sont pas des oligoéléments indispensables.`,
      `Le fluor, le brome et l'iode figurent parmi les éléments non métalliques présents à l'état de traces dans le vivant.`,
    ],
  },
  {
    order: 11,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `À propos du nucléide noté $^{\\mathrm{A}}_{\\mathrm{Z}}\\mathrm{X}$ :`,
    choices: [
      `$\\mathrm{A}$ est le nombre de masse et $\\mathrm{Z}$ le numéro atomique.`,
      `Écrire $^{\\mathrm{Z}}_{\\mathrm{A}}\\mathrm{X}$ revient au même : on a seulement changé la mise en page.`,
      `Un nucléide est défini par son noyau, donc par $\\mathrm{Z}$ protons et $\\mathrm{N} = \\mathrm{A} - \\mathrm{Z}$ neutrons.`,
      `Le symbole $\\mathrm{X}$ seul suffit à définir complètement un nucléide.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Dans la notation $^{\\mathrm{A}}_{\\mathrm{Z}}\\mathrm{X}$, $\\mathrm{Z}$ indique le nombre de protons et $\\mathrm{A}$ le nombre total de nucléons. Le nombre de neutrons se calcule donc par $\\mathrm{N} = \\mathrm{A}-\\mathrm{Z}$ ; le symbole $\\mathrm{X}$ identifie seulement l'élément chimique.`,
    choiceExplanations: [
      `L'indice inférieur $\\mathrm{Z}$ est le numéro atomique et l'exposant supérieur $\\mathrm{A}$ est le nombre de masse.`,
      `Échanger $\\mathrm{A}$ et $\\mathrm{Z}$ modifie la signification de la notation et peut conduire à une composition nucléaire impossible.`,
      `Le noyau contient $\\mathrm{Z}$ protons et $\\mathrm{A}-\\mathrm{Z}$ neutrons ; ces deux nombres définissent le nucléide.`,
      `Le symbole $\\mathrm{X}$ fixe $\\mathrm{Z}$, mais pas le nombre de neutrons : il ne distingue donc pas les isotopes de l'élément.`,
    ],
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
      `Pour $^{23}_{11}\\mathrm{Na}$, $\\mathrm{Z}=11$ donne 11 protons et $\\mathrm{A}=23$ donne 23 nucléons. Le nombre de neutrons vaut $23-11=12$ et, puisqu'il s'agit d'un atome neutre, le nombre d'électrons vaut 11.`,
    choiceExplanations: [
      `Le noyau contient 11 protons et $23-11=12$ neutrons, soit 23 nucléons au total.`,
      `Cette proposition inverse les nombres de protons et de neutrons : $\\mathrm{Z}$ donne les protons, pas les neutrons.`,
      `Un atome neutre possède autant d'électrons que de protons ; il contient donc 11 électrons.`,
      `Le nombre de nucléons est directement donné par $\\mathrm{A}=23$ ; on ne doit pas additionner $\\mathrm{A}$ et $\\mathrm{Z}$.`,
    ],
  },
  {
    order: 13,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `À propos des termes atome, élément chimique, nucléide et isotope :`,
    choices: [
      `L'élément chimique carbone est défini par $\\mathrm{Z} = 6$.`,
      `Le nucléide $^{14}_{6}\\mathrm{C}$ et l'atome $^{14}_{6}\\mathrm{C}$ désignent exactement la même réalité.`,
      `Les nucléides $^{12}_{6}\\mathrm{C}$ et $^{14}_{6}\\mathrm{C}$ sont deux isotopes d'un même élément chimique.`,
      `Deux isotopes d'un même élément chimique ont nécessairement le même nombre de neutrons.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Un élément chimique est défini par son numéro atomique $\\mathrm{Z}$. Un nucléide précise la composition du noyau par $\\mathrm{A}$ et $\\mathrm{Z}$, tandis qu'un atome comprend ce noyau et son cortège électronique ; deux nucléides de même $\\mathrm{Z}$ mais de $\\mathrm{A}$ différents sont des isotopes.`,
    choiceExplanations: [
      `Tous les noyaux de carbone possèdent six protons : l'élément carbone est donc défini par $\\mathrm{Z}=6$.`,
      `Le terme « nucléide » désigne une espèce nucléaire définie par $\\mathrm{A}$ et $\\mathrm{Z}$, alors que l'atome inclut également les électrons ; les notions sont liées mais ne sont pas strictement synonymes.`,
      `Ces deux nucléides ont le même $\\mathrm{Z}=6$ mais des nombres de masse différents : ce sont deux isotopes du carbone.`,
      `À $\\mathrm{Z}$ identique, des isotopes se distinguent précisément par leur nombre de neutrons.`,
    ],
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
      `Dans le cadre du cours, les isotopes d'un même élément ont des propriétés chimiques très voisines, car leurs configurations électroniques sont identiques pour les atomes neutres. Leurs propriétés physiques peuvent en revanche différer, notamment en raison de leur masse et de leur stabilité nucléaire.`,
    choiceExplanations: [
      `Les propriétés chimiques sont voisines, mais les propriétés physiques ne sont pas considérées comme équivalentes dans la distinction attendue par le cours.`,
      `La différence de masse porte surtout sur les propriétés physiques ; elle ne rend pas les propriétés chimiques radicalement différentes.`,
      `C'est la distinction attendue : les propriétés physiques peuvent différer, tandis que les propriétés chimiques restent très voisines.`,
      `Les isotopes ne diffèrent pas fortement sur les deux plans : leur même configuration électronique conserve des propriétés chimiques proches.`,
    ],
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
      `La masse atomique d'un élément naturel est une moyenne pondérée par les abondances isotopiques. Ici, $\\overline{m}=0{,}20\\times10+0{,}80\\times11=10{,}8\\,\\mathrm{u}$ ; la valeur est logiquement plus proche de $11\\,\\mathrm{u}$, puisque $^{11}\\mathrm{B}$ est majoritaire.`,
    choiceExplanations: [
      `Le calcul pondéré donne $0{,}20\\times10+0{,}80\\times11=10{,}8\\,\\mathrm{u}$.`,
      `La moyenne isotopique dépend des abondances relatives et n'est donc pas nécessairement un entier ni le nombre de nucléons d'un isotope particulier.`,
      `La moyenne simple $10{,}5\\,\\mathrm{u}$ supposerait des abondances égales, ce qui n'est pas le cas ici.`,
      `Comme 80 % des atomes sont du bore 11, la moyenne est davantage influencée par la masse $11\\,\\mathrm{u}$.`,
    ],
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
      `La formation d'un noyau lié s'accompagne d'un défaut de masse : sa masse est inférieure à la somme des masses de ses nucléons séparés, la différence correspondant à l'énergie de liaison. Par ailleurs, la masse d'un électron est environ deux mille fois plus faible que celle d'un nucléon, donc de l'ordre de mille fois plus faible.`,
    choiceExplanations: [
      `Pour un noyau lié, le défaut de masse implique une masse inférieure à celle des protons et neutrons séparés au repos.`,
      `La masse d'un électron est environ $1/1\\,800$ de celle d'un proton ; « environ 1 000 fois moins massif » donne le bon ordre de grandeur.`,
      `Le noyau du protium $^{1}\\mathrm{H}$ ne contient qu'un proton et aucun neutron : un neutron n'est donc pas toujours présent.`,
      `Dans un atome neutre, le nombre d'électrons égale le nombre de protons $\\mathrm{Z}$, et non le nombre total de nucléons $\\mathrm{A}$.`,
    ],
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
      `Une notation nucléaire doit vérifier $\\mathrm{A}\\geq\\mathrm{Z}$, puisque le nombre de neutrons vaut $\\mathrm{N}=\\mathrm{A}-\\mathrm{Z}$ et ne peut pas être négatif. Pour $^{1}_{3}\\mathrm{X}$, on obtiendrait $\\mathrm{N}=-2$ : cette écriture ne correspond donc à aucun nucléide.`,
    choiceExplanations: [
      `Un isotope de l'hydrogène doit avoir $\\mathrm{Z}=1$ ; ici l'indice inférieur vaut 3.`,
      `La proposition attribue trois nucléons au noyau alors que $\\mathrm{A}=1$ ; surtout, $\\mathrm{A}<\\mathrm{Z}$ rend la composition impossible.`,
      `On ne peut pas déduire une tendance électronique d'un nucléide dont la notation est physiquement impossible.`,
      `Comme $\\mathrm{A}<\\mathrm{Z}$, le nombre de neutrons serait négatif : les trois affirmations précédentes sont donc fausses.`,
    ],
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
    explanation: null,
    choiceExplanations: [
      `De nombreux noyaux, notamment parmi les éléments lourds, contiennent davantage de neutrons que de protons.`,
      `Cette impossibilité n'existe pas : un atome peut parfaitement avoir moins de protons que de neutrons.`,
      `Dans un atome neutre, le nombre d'électrons égale celui des protons ; s'il y a plus de neutrons que de protons, il y a aussi plus de neutrons que d'électrons.`,
      `Un atome étant neutre, il possède exactement autant de protons que d'électrons. Une espèce ayant moins d'électrons serait un cation, pas un atome neutre.`,
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de la masse et de la structure de l'atome :`,
    choices: [
      `La quasi-totalité de la masse d'un atome est concentrée dans son noyau.`,
      `Les électrons de cœur appartiennent au noyau car ils sont proches de lui.`,
      `Un électron est environ $1\\,800$ fois moins massif qu'un proton.`,
      `La masse d'un atome est essentiellement déterminée par son nombre de nucléons.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `La masse atomique provient presque entièrement des nucléons du noyau. Les électrons, qu'ils soient de cœur ou de valence, appartiennent tous au cortège électronique et leur masse est négligeable à cette échelle.`,
    choiceExplanations: [
      `Les protons et les neutrons portent presque toute la masse de l'atome ; ils sont regroupés dans le noyau.`,
      `Les électrons de cœur sont proches du noyau, mais ils restent dans le cortège électronique et ne font pas partie du noyau.`,
      `La masse du proton est environ $1\\,800$ fois celle de l'électron ; l'ordre de grandeur proposé est correct.`,
      `Comme la contribution des électrons est très faible, la masse d'un atome dépend principalement de son nombre de nucléons.`,
    ],
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des nucléides et des isotopes :`,
    choices: [
      `Le nucléide $^{222}_{86}\\mathrm{Rn}$ est composé de 86 protons, 136 neutrons et 86 électrons.`,
      `Les isotopes d'un élément chimique ont tous le même numéro atomique.`,
      `Tous les nucléides d'un même élément chimique ont les mêmes valeurs du couple de nombres $\\mathrm{A}$ et $\\mathrm{Z}$.`,
      `Les nucléides $^{73}_{38}\\mathrm{Sr}$ et $^{97}_{38}\\mathrm{Sr}$ ont des masses différentes.`,
    ],
    correctChoiceIndexes: [1, 3],
    explanation:
      `Le terme « nucléide » décrit strictement une espèce nucléaire définie par $\\mathrm{A}$ et $\\mathrm{Z}$ ; les électrons appartiennent à l'atome ou à l'ion associé. Les isotopes d'un élément ont le même $\\mathrm{Z}$ mais des nombres de masse $\\mathrm{A}$ différents.`,
    choiceExplanations: [
      `Le noyau $^{222}_{86}\\mathrm{Rn}$ contient bien 86 protons et $222-86=136$ neutrons, mais les 86 électrons décrivent l'atome neutre de radon, pas le nucléide au sens strict.`,
      `Le numéro atomique identifie l'élément : tous ses isotopes possèdent donc le même $\\mathrm{Z}$.`,
      `Les nucléides d'un même élément ont le même $\\mathrm{Z}$, mais leurs nombres de neutrons et donc leurs nombres de masse $\\mathrm{A}$ peuvent différer.`,
      `Les deux noyaux ont le même $\\mathrm{Z}=38$ mais des nombres de masse 73 et 97 ; leurs masses sont donc différentes.`,
    ],
  },
  {
    order: 21,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des éléments naturels et artificiels :`,
    choices: [
      `Dans ce cours, les éléments naturels ont un numéro atomique $\\mathrm{Z} \\leq 92$.`,
      `L'uranium, de numéro atomique $\\mathrm{Z} = 92$, est présenté comme la limite des éléments naturels.`,
      `Les éléments de numéro atomique $\\mathrm{Z} > 92$ sont appelés transuraniens et sont artificiels.`,
      `Un élément naturel est nécessairement stable : il ne peut pas être radioactif.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le cours adopte la convention simplifiée selon laquelle les éléments naturels s'étendent jusqu'à l'uranium, $\\mathrm{Z}=92$, et les éléments au-delà sont qualifiés de transuraniens artificiels. Cette classification ne signifie pas que tous les éléments naturels sont stables.`,
    choiceExplanations: [
      `Dans la convention retenue par ce cours, la limite des éléments naturels est fixée à $\\mathrm{Z}=92$.`,
      `L'uranium, de numéro atomique 92, est bien présenté comme le dernier élément naturel de cette classification simplifiée.`,
      `Les éléments de numéro atomique supérieur à 92 sont appelés transuraniens et sont obtenus artificiellement dans le cadre du cours.`,
      `Plusieurs éléments naturels sont radioactifs, notamment l'uranium ; naturel ne signifie donc pas stable.`,
    ],
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
    explanation: null,
    choiceExplanations: [
      `La neutralité électrique de l'atome impose autant d'électrons que de protons.`,
      `Un électron est environ $1\\,800$ fois moins massif qu'un proton et d'un ordre de grandeur comparable face au neutron.`,
      `Tout noyau atomique contient au moins un proton ; celui de l'hydrogène $^{1}\\mathrm{H}$ ne contient cependant aucun neutron.`,
      `Le nombre d'électrons d'un atome vaut $\\mathrm{Z}$, tandis que son nombre de nucléons vaut $\\mathrm{A}$ ; ces deux nombres ne sont généralement pas égaux.`,
    ],
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
      `L'unité de masse atomique unifiée, de symbole $\\mathrm{u}$, est définie comme le douzième de la masse d'un atome de carbone 12. Le dalton est utilisé comme unité équivalente, mais la masse d'un proton isolé est seulement proche de $1\\,\\mathrm{u}$, pas exactement égale.`,
    choiceExplanations: [
      `Par définition, $1\\,\\mathrm{u}$ vaut un douzième de la masse d'un atome de carbone 12.`,
      `Le symbole normalisé de l'unité de masse atomique unifiée est $\\mathrm{u}$.`,
      `Dans l'usage biochimique et dans ce cours, $1\\,\\mathrm{Da}$ et $1\\,\\mathrm{u}$ désignent la même valeur de masse.`,
      `La masse d'un proton isolé est voisine de $1\\,\\mathrm{u}$ mais n'est pas exactement égale à cette unité définie à partir du carbone 12.`,
    ],
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
      `Les conversions utiles sont $1\\,\\mathrm{nm}=10\\,\\text{Å}$ et $1\\,\\mathrm{\\mu m}=10^4\\,\\text{Å}$. Ainsi, une cellule ou un globule rouge de l'ordre de $10\\,\\mathrm{\\mu m}$ est environ dix mille fois plus grand qu'un objet de l'ordre du nanomètre.`,
    choiceExplanations: [
      `Le rapport entre $10\\,\\mathrm{\\mu m}=10^{-5}\\,\\mathrm{m}$ et $1\\,\\mathrm{nm}=10^{-9}\\,\\mathrm{m}$ vaut $10^4$, et non 10.`,
      `Comme $1\\,\\mathrm{nm}=10\\,\\text{Å}$, une taille de $10\\,\\mathrm{nm}$ correspond à $100\\,\\text{Å}$.`,
      `Un petit peptide de $1\\,\\mathrm{nm}$ mesure environ $10\\,\\text{Å}$, pas $100\\,\\text{Å}$.`,
      `$10\\,\\mathrm{\\mu m}=10^{-5}\\,\\mathrm{m}$ et $1\\,\\text{Å}=10^{-10}\\,\\mathrm{m}$ ; le rapport vaut donc $10^5$, soit $100\\,000\\,\\text{Å}$.`,
    ],
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
      `On utilise les équivalences $1\\,\\mathrm{nm}=10^{-9}\\,\\mathrm{m}=10\\,\\text{Å}$ et $1\\,\\text{Å}=10^{-10}\\,\\mathrm{m}=0{,}1\\,\\mathrm{nm}$. Elles permettent de convertir directement toutes les longueurs proposées.`,
    choiceExplanations: [
      `Cette égalité reprend directement la définition : $1\\,\\mathrm{nm}=10\\,\\text{Å}=10^{-9}\\,\\mathrm{m}$.`,
      `Les facteurs sont inversés : $1\\,\\text{Å}=0{,}1\\,\\mathrm{nm}=10^{-10}\\,\\mathrm{m}$.`,
      `En divisant par 10, $50\\,\\text{Å}=5\\,\\mathrm{nm}$, soit $5\\times10^{-9}\\,\\mathrm{m}$.`,
      `$10^{-10}\\,\\mathrm{m}$ correspond à $1\\,\\text{Å}$ et donc à $0{,}1\\,\\mathrm{nm}$, pas à $1\\,\\mathrm{nm}$.`,
    ],
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
      `Dans $^{27}_{13}\\mathrm{Al}^{3+}$, $\\mathrm{Z}=13$ donne 13 protons, $\\mathrm{A}=27$ donne 27 nucléons et $\\mathrm{N}=27-13=14$ neutrons. La charge $3+$ indique la perte de trois électrons : l'ion n'en possède donc que 10.`,
    choiceExplanations: [
      `Le numéro atomique $\\mathrm{Z}=13$ fixe le nombre de protons à 13, quelle que soit la charge de l'ion.`,
      `Le nombre de masse $\\mathrm{A}=27$ est le nombre total de protons et de neutrons.`,
      `L'atome neutre d'aluminium aurait 13 électrons, mais l'ion $\\mathrm{Al}^{3+}$ en a perdu trois et n'en possède plus que 10.`,
      `Le nombre de neutrons vaut $\\mathrm{A}-\\mathrm{Z}=27-13=14$.`,
    ],
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
      '',
    choiceExplanations: [
      `Un isotope de l'hydrogène doit avoir $\\mathrm{Z}=1$ ; de plus, $^{1}_{3}\\mathrm{X}$ est impossible car $\\mathrm{A}<\\mathrm{Z}$.`,
      `Le défaut de masse signifie au contraire que la masse d'un noyau lié est inférieure à la somme des masses de ses nucléons isolés.`,
      `Des nucléides naturels comme le potassium 40 ou l'uranium 238 sont radioactifs.`,
      `La dimension d'un noyau est de l'ordre du femtomètre, soit environ $10^{-15}\\,\\mathrm{m}$, et non du nanomètre.`,
    ],
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
      `Les quatre nombres quantiques décrivent l'état d'un électron : $\\mathrm{n}$ pour la couche, $\\ell$ pour la sous-couche, $\\mathrm{m}$ pour l'orbitale et $\\mathrm{s}$ pour le spin. Les valeurs autorisées sont contraintes par $0\\leq\\ell\\leq\\mathrm{n}-1$, $-\\ell\\leq\\mathrm{m}\\leq+\\ell$ et $\\mathrm{s}=\\pm\\dfrac12$.`,
    choiceExplanations: [
      `Le nombre quantique principal $\\mathrm{n}$ repère bien la couche électronique.`,
      `Pour $\\mathrm{n}=2$, $\\ell$ peut seulement valoir 0 ou 1 ; la valeur 2 est interdite car $\\ell\\leq\\mathrm{n}-1$.`,
      `Lorsque $\\ell=1$, $\\mathrm{m}$ prend les trois valeurs entières de $-1$ à $+1$.`,
      `Le nombre quantique de spin peut prendre deux valeurs : $+\\dfrac12$ ou $-\\dfrac12$.`,
    ],
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
      `La lettre de la sous-couche traduit la valeur de $\\ell$ : $\\mathrm{s}=0$, $\\mathrm{p}=1$, $\\mathrm{d}=2$ et $\\mathrm{f}=3$. Une sous-couche contient $2\\ell+1$ orbitales et peut donc accueillir au maximum $2(2\\ell+1)$ électrons.`,
    choiceExplanations: [
      `Dans $4\\mathrm{f}$, le chiffre 4 donne $\\mathrm{n}=4$ et la lettre $\\mathrm{f}$ correspond à $\\ell=3$.`,
      `Le nombre d'orbitales vaut $2\\ell+1$ : pour une sous-couche $\\mathrm{d}$, $\\ell=2$ et il y a donc 5 orbitales, pas 4.`,
      `Une sous-couche $\\mathrm{p}$ possède $2\\times1+1=3$ orbitales.`,
      `Une orbitale individuelle ne peut contenir que deux électrons au maximum, avec des spins opposés.`,
    ],
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
      `Les nombres quantiques ne décrivent ni une trajectoire ni une position exacte. Ils caractérisent la couche $\\mathrm{n}$, la sous-couche $\\ell$, l'orientation de l'orbitale $\\mathrm{m}$ et le spin de l'électron $\\mathrm{s}$.`,
    choiceExplanations: [
      `Le nombre quantique principal $\\mathrm{n}$ indique bien la couche à laquelle appartient l'électron.`,
      `Le nombre quantique secondaire $\\ell$ caractérise la sous-couche et la forme de l'orbitale, pas le nombre total d'électrons de l'atome.`,
      `Le nombre quantique magnétique $\\mathrm{m}$ distingue les orientations orbitalaires possibles ; la charge de l'électron est toujours la même.`,
      `Le spin caractérise un degré de liberté quantique de l'électron et ne fournit aucune distance exacte au noyau.`,
    ],
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
      `Le nombre quantique secondaire $\\ell$ détermine le type de sous-couche et participe à la forme de l'orbitale : $\\ell=0,1,2,3$ correspondent respectivement à $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ et $\\mathrm{f}$. Il ne renseigne ni sur le noyau ni sur le spin.`,
    choiceExplanations: [
      `La valeur de $\\ell$ permet d'identifier la sous-couche $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ ou $\\mathrm{f}$.`,
      `Le nombre quantique $\\ell$ est associé au moment cinétique orbital et à la forme générale de l'orbitale.`,
      `Le nombre de protons est donné par le numéro atomique $\\mathrm{Z}$, indépendamment des nombres quantiques électroniques.`,
      `Le sens du spin est décrit par le nombre quantique de spin $\\mathrm{s}$, et non par $\\ell$.`,
    ],
  },
  {
    order: 32,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les configurations électroniques suivantes :`,
    choices: [
      `$\\mathrm{C}\\,(\\mathrm{Z} = 6) : \\mathrm{K}\\,2\\mathrm{s}^2\\,2\\mathrm{p}^2$.`,
      `$\\mathrm{F}\\,(\\mathrm{Z} = 9) : \\mathrm{K}\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6$.`,
      `$\\mathrm{Na}\\,(\\mathrm{Z} = 11) : \\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^1$.`,
      `$\\mathrm{Al}\\,(\\mathrm{Z} = 13) : \\mathrm{K}\\,\\mathrm{L}\\,3\\mathrm{s}^2\\,3\\mathrm{p}^2$.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Pour un atome neutre, on répartit exactement $\\mathrm{Z}$ électrons selon l'ordre de remplissage. Les configurations attendues sont ici $\\mathrm{C}:1\\mathrm{s}^2 2\\mathrm{s}^2 2\\mathrm{p}^2$, $\\mathrm{F}:1\\mathrm{s}^2 2\\mathrm{s}^2 2\\mathrm{p}^5$, $\\mathrm{Na}:\\mathrm{K}\\mathrm{L}3\\mathrm{s}^1$ et $\\mathrm{Al}:\\mathrm{K}\\mathrm{L}3\\mathrm{s}^2 3\\mathrm{p}^1$.`,
    choiceExplanations: [
      `Le carbone possède six électrons : deux sur $1\\mathrm{s}$, deux sur $2\\mathrm{s}$ et deux sur $2\\mathrm{p}$.`,
      `Cette proposition compte dix électrons et correspond au néon ; le fluor n'en a que neuf et se termine par $2\\mathrm{p}^5$.`,
      `Après les couches $\\mathrm{K}$ et $\\mathrm{L}$ complètes, le onzième électron du sodium occupe $3\\mathrm{s}$.`,
      `L'aluminium possède treize électrons et se termine par $3\\mathrm{s}^2 3\\mathrm{p}^1$ ; $3\\mathrm{p}^2$ donnerait quatorze électrons.`,
    ],
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
    explanation: null,
    choiceExplanations: [
      `Le nombre quantique principal $\\mathrm{n}$ repère la couche électronique.`,
      `En général, une augmentation de $\\mathrm{n}$ correspond à des niveaux électroniques plus élevés et à une extension spatiale plus grande.`,
      `La mécanique quantique ne fournit pas une position exacte ou une trajectoire définie de l'électron.`,
      `Le nombre de neutrons est une propriété du noyau donnée par $\\mathrm{A}-\\mathrm{Z}$, sans lien avec $\\mathrm{n}$.`,
    ],
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
      `L'azote possède sept électrons : sa configuration fondamentale est $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^3$. Dans $2\\mathrm{p}$, la règle de Hund impose un électron dans chacune des trois orbitales, avec des spins parallèles, avant tout appariement : $[\\uparrow][\\uparrow][\\uparrow]$.`,
    choiceExplanations: [
      `Cette représentation laisse $2\\mathrm{s}$ vide alors que cette sous-couche, plus basse en énergie, doit être remplie avant $2\\mathrm{p}$.`,
      `Elle ne remplit pas complètement $2\\mathrm{s}$ avant $2\\mathrm{p}$ et apparie déjà des électrons dans $2\\mathrm{p}$ : elle ne décrit pas l'état fondamental.`,
      `Le nombre total d'électrons est correct, mais le doublet formé dans $2\\mathrm{p}$ viole la règle de Hund puisque la troisième orbitale est encore vide.`,
      `Cette représentation correspond bien à $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^3$ et respecte la règle de Hund.`,
    ],
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
    explanation: null,
    choiceExplanations: [
      `La sous-couche $\\mathrm{s}$ est définie par $\\ell=0$.`,
      `La sous-couche $\\mathrm{p}$ est définie par $\\ell=1$.`,
      `La sous-couche $\\mathrm{d}$ est définie par $\\ell=2$ ; la sous-couche $\\mathrm{f}$ correspondrait à $\\ell=3$.`,
      `Les trois premières correspondances étant exactes, l'affirmation selon laquelle elles seraient toutes fausses est incorrecte.`,
    ],
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
      `Dans la convention simplifiée du cours, la couche de valence est la couche occupée de plus grand nombre quantique principal $\\mathrm{n}$. Pour le zinc, la valeur maximale est $\\mathrm{n}=4$ : la couche de valence est donc $\\mathrm{N}$ et contient les deux électrons $4\\mathrm{s}^2$. Les électrons $3\\mathrm{d}^{10}$ peuvent toutefois intervenir dans une description plus complète de la chimie des métaux de transition.`,
    choiceExplanations: [
      `La couche $\\mathrm{N}$ correspond à $\\mathrm{n}=4$, valeur la plus élevée présente dans la configuration du zinc.`,
      `La dernière sous-couche écrite ou remplie ne suffit pas à définir la couche externe : $3\\mathrm{d}$ appartient à $\\mathrm{n}=3$, alors que $4\\mathrm{s}$ appartient à $\\mathrm{n}=4$.`,
      `Dans l'approche retenue ici, les deux électrons de la couche externe sont les électrons $4\\mathrm{s}^2$.`,
      `La couche de valence est bien identifiée ici par le plus grand nombre quantique principal occupé, soit $\\mathrm{n}=4$.`,
    ],
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
      `Pour une couche donnée, le nombre quantique secondaire vérifie $0\\leq\\ell\\leq\\mathrm{n}-1$. Lorsque $\\mathrm{n}=2$, seules les valeurs $\\ell=0$ et $\\ell=1$ sont possibles, correspondant aux sous-couches $2\\mathrm{s}$ et $2\\mathrm{p}$.`,
    choiceExplanations: [
      `La valeur $\\ell=0$ est autorisée pour $\\mathrm{n}=2$ et correspond à la sous-couche $2\\mathrm{s}$.`,
      `La valeur $\\ell=1$ est autorisée pour $\\mathrm{n}=2$ et correspond à la sous-couche $2\\mathrm{p}$.`,
      `Une sous-couche $\\mathrm{d}$ exige $\\ell=2$, valeur interdite lorsque $\\mathrm{n}=2$ puisque $\\ell$ doit être au plus égal à 1.`,
      `La règle $\\ell=0,\\ldots,\\mathrm{n}-1$ donne bien les deux valeurs 0 et 1.`,
    ],
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
    explanation: null,
    choiceExplanations: [
      `Une orbitale peut accueillir zéro, un ou deux électrons ; deux électrons qui l'occupent doivent avoir des spins opposés.`,
      `Six électrons constituent la capacité maximale d'une sous-couche $\\mathrm{p}$ entière, formée de trois orbitales, et non d'une seule orbitale.`,
      `Une orbitale est une composante d'une sous-couche ; elle ne représente pas à elle seule une couche électronique complète.`,
      `Une orbitale peut être vide, contenir un électron célibataire ou contenir un doublet : elle n'est donc pas toujours associée à un électron célibataire.`,
    ],
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
      `La règle de Hund s'applique aux orbitales de même énergie d'une sous-couche : les électrons les occupent d'abord séparément avec des spins parallèles, puis les doublets se forment. Elle ne modifie pas la limite de deux électrons par orbitale imposée par Pauli.`,
    choiceExplanations: [
      `Les orbitales équivalentes d'une sous-couche reçoivent d'abord chacune un électron avant tout appariement.`,
      `Un doublet n'apparaît qu'une fois toutes les orbitales disponibles occupées individuellement.`,
      `Remplir immédiatement la première orbitale avec deux électrons alors que d'autres sont vides est précisément contraire à la règle de Hund.`,
      `Aucune orbitale ne peut contenir trois électrons, même si la sous-couche n'est pas complète.`,
    ],
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
      `L'oxygène possède huit électrons, soit $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^4$. Après avoir placé un électron dans chacune des trois orbitales $2\\mathrm{p}$, le quatrième forme un premier doublet : la répartition fondamentale est donc $[\\uparrow\\downarrow][\\uparrow][\\uparrow]$, à permutation des orbitales près.`,
    choiceExplanations: [
      `Cette représentation compte bien quatre électrons dans $2\\mathrm{p}$ et respecte la règle de Hund : un seul doublet et deux électrons célibataires.`,
      `Deux orbitales sont déjà appariées alors que la troisième est vide ; cette distribution viole la règle de Hund.`,
      `Le nombre total d'électrons est huit, mais $2\\mathrm{s}$ doit être complète avant que cinq électrons occupent $2\\mathrm{p}$ : ce n'est pas l'état fondamental.`,
      `Cette représentation remplit $2\\mathrm{p}$ tout en laissant $2\\mathrm{s}$ vide, en contradiction avec l'ordre énergétique de remplissage.`,
    ],
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
      `Le diagramme représente $3\\mathrm{p}^3$ sous la forme d'un doublet, d'un électron célibataire et d'une orbitale vide. La règle de Hund exige au contraire trois occupations simples parallèles, une dans chaque orbitale $3\\mathrm{p}$ ; c'est donc cette règle qui est violée.`,
    choiceExplanations: [
      `La règle de Hund n'est pas respectée : les trois électrons $3\\mathrm{p}$ devraient occuper séparément les trois orbitales avant tout appariement.`,
      `Les sous-couches $3\\mathrm{s}$ puis $3\\mathrm{p}$ sont occupées dans le bon ordre énergétique ; la règle de Klechkowski n'est pas en cause.`,
      `Le doublet d'une même orbitale peut respecter Pauli s'il contient deux électrons de spins opposés ; l'anomalie porte ici sur la répartition entre orbitales.`,
      `Le modèle de Bohr décrit des niveaux d'énergie, mais il ne fournit pas la règle de répartition des électrons entre les trois orbitales $\\mathrm{p}$.`,
    ],
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
      `Une orbitale atomique est décrite par une fonction d'onde et correspond, dans une représentation simplifiée, à une région où la probabilité de présence de l'électron est importante. Elle ne constitue ni une trajectoire classique ni une position certaine, et elle peut accueillir au maximum deux électrons.`,
    choiceExplanations: [
      `Une orbitale délimite conventionnellement une région de forte probabilité de présence de l'électron.`,
      `L'électron n'y suit pas une trajectoire précise analogue à l'orbite d'une planète.`,
      `La description quantique ne permet pas d'assigner avec certitude une position exacte à chaque instant.`,
      `Deux électrons au maximum peuvent partager une orbitale, à condition d'avoir des spins opposés.`,
    ],
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
      `La forme d'une orbitale dépend notamment du nombre quantique secondaire $\\ell$. Les orbitales $\\mathrm{s}$ sont globalement sphériques, les orbitales $\\mathrm{p}$ présentent deux lobes séparés par un plan nodal, et les orbitales $\\mathrm{d}$ ou $\\mathrm{f}$ ont des géométries plus complexes.`,
    choiceExplanations: [
      `La densité de probabilité d'une orbitale $\\mathrm{s}$ possède une symétrie sphérique autour du noyau.`,
      `Une orbitale $\\mathrm{p}$ est classiquement représentée par deux lobes orientés selon un axe.`,
      `Les formes varient selon $\\ell$ et, au sein d'une sous-couche, selon l'orientation de l'orbitale ; elles ne sont donc pas toutes identiques.`,
      `Les familles $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ et $\\mathrm{f}$ correspondent à des valeurs différentes de $\\ell$ et à des formes orbitalaires différentes.`,
    ],
  },
  {
    order: 44,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Les deux questions qui suivent sont liées. Elles concernent l'élément fer ($\\mathrm{Z} = 26$).\n\nParmi les propositions suivantes, laquelle correspond à la configuration électronique de cet élément dans son état fondamental :`,
    choices: [
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^8\\,4\\mathrm{s}^0$.`,
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2$.`,
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^8\\,3\\mathrm{d}^4\\,4\\mathrm{s}^2$.`,
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^4\\,4\\mathrm{s}^2\\,4\\mathrm{p}^2$.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `Le fer possède 26 électrons. Après le cœur électronique de l'argon, qui en représente 18, les huit électrons restants occupent $4\\mathrm{s}^2$ puis $3\\mathrm{d}^6$ : la configuration fondamentale est $\\mathrm{K}\\mathrm{L}\\mathrm{M}\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2$.`,
    choiceExplanations: [
      `Cette écriture compte bien 26 électrons, mais la redistribution $3\\mathrm{d}^8\\,4\\mathrm{s}^0$ ne correspond pas à l'état fondamental du fer neutre.`,
      `Le cœur $[\\mathrm{Ar}]$ apporte 18 électrons et $3\\mathrm{d}^6\\,4\\mathrm{s}^2$ en apporte huit : on retrouve bien les 26 électrons du fer.`,
      `Une sous-couche $\\mathrm{p}$ ne contient que trois orbitales et peut donc accueillir au maximum six électrons ; $3\\mathrm{p}^8$ est impossible.`,
      `Dans l'état fondamental du fer, les électrons restant après $4\\mathrm{s}^2$ occupent $3\\mathrm{d}$ ; la sous-couche $4\\mathrm{p}$ reste vide.`,
    ],
  },
  {
    order: 45,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Parmi les propositions suivantes, quelle est la couche de valence de l'élément fer ?`,
    choices: [
      `N.`,
      `L.`,
      `K.`,
      `M.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `Dans la définition simplifiée utilisée ici, la couche de valence est la couche occupée de plus grand $\\mathrm{n}$. Pour le fer $[\\mathrm{Ar}]\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2$, le plus grand nombre quantique principal est $\\mathrm{n}=4$, correspondant à la couche $\\mathrm{N}$. La sous-couche $3\\mathrm{d}$ peut néanmoins participer à la chimie du métal de transition.`,
    choiceExplanations: [
      `La couche $\\mathrm{N}$ correspond à $\\mathrm{n}=4$ et contient ici les électrons externes $4\\mathrm{s}^2$.`,
      `La couche $\\mathrm{L}$ correspond à $\\mathrm{n}=2$ et appartient au cœur électronique du fer.`,
      `La couche $\\mathrm{K}$ correspond à $\\mathrm{n}=1$ et constitue la couche la plus interne.`,
      `La couche $\\mathrm{M}$ contient notamment $3\\mathrm{d}^6$, mais elle n'est pas la couche de plus grand $\\mathrm{n}$ dans la convention demandée.`,
    ],
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
      `Un quadruplet est admissible si $\\mathrm{n}\\geq1$, $0\\leq\\ell\\leq\\mathrm{n}-1$, $\\mathrm{m}$ est un entier compris entre $-\\ell$ et $+\\ell$, et le spin vaut $\\pm\\dfrac12$. Il suffit qu'une seule de ces conditions soit violée pour rendre le quadruplet impossible.`,
    choiceExplanations: [
      `Pour $\\mathrm{n}=5$ et $\\ell=2$, $\\mathrm{m}$ peut varier de $-2$ à $+2$ ; la valeur $-1$ et le spin $+\\dfrac12$ sont autorisés.`,
      `Avec $\\mathrm{n}=3$, la valeur maximale de $\\ell$ est 2 ; $\\ell=3$ est donc impossible.`,
      `Lorsque $\\ell=1$, $\\mathrm{m}$ ne peut valoir que $-1$, 0 ou $+1$ ; la valeur 2 est interdite.`,
      `Pour $\\mathrm{n}=2$ et $\\ell=0$, la seule valeur possible de $\\mathrm{m}$ est 0, et le spin $-\\dfrac12$ est autorisé.`,
    ],
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
      `La règle de Klechkowski ordonne les sous-couches selon la valeur croissante de $\\mathrm{n}+\\ell$ ; en cas d'égalité, celle de plus petit $\\mathrm{n}$ se remplit d'abord. On obtient ainsi notamment $2\\mathrm{p}$ avant $3\\mathrm{s}$ et $4\\mathrm{s}$ avant $3\\mathrm{d}$.`,
    choiceExplanations: [
      `Le nombre quantique principal seul ne suffit pas : l'ordre de remplissage dépend de l'énergie des sous-couches et donc de $\\mathrm{n}+\\ell$ dans cette règle.`,
      `Pour $2\\mathrm{p}$ et $3\\mathrm{s}$, $\\mathrm{n}+\\ell=3$ dans les deux cas ; le plus petit $\\mathrm{n}$ donne la priorité à $2\\mathrm{p}$.`,
      `Pour $4\\mathrm{s}$, $\\mathrm{n}+\\ell=4$, contre 5 pour $3\\mathrm{d}$ ; $4\\mathrm{s}$ se remplit donc d'abord.`,
      `À égalité de $\\mathrm{n}+\\ell$, c'est la sous-couche de plus petit $\\mathrm{n}$, et non de plus grand $\\mathrm{n}$, qui est prioritaire.`,
    ],
  },
  {
    order: 48,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `En mammographie, le rhodium (symbole $\\mathrm{Rh}$) peut entrer dans la composition de la cible ou du filtre du tube à rayons X, afin d’adapter l’énergie du faisceau à l’épaisseur et à la densité du sein examiné. De numéro atomique $\\mathrm{Z} = 45$, il possède :`,
    choices: [
      `9 électrons $\\mathrm{s}$, 18 électrons $\\mathrm{p}$ et 18 électrons $\\mathrm{d}$.`,
      `10 électrons $\\mathrm{s}$, 18 électrons $\\mathrm{p}$ et 17 électrons $\\mathrm{d}$.`,
      `8 électrons $\\mathrm{s}$, 18 électrons $\\mathrm{p}$ et 19 électrons $\\mathrm{d}$.`,
      `9 électrons $\\mathrm{s}$, 24 électrons $\\mathrm{p}$ et 12 électrons $\\mathrm{d}$.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `Le rhodium neutre est décrit ici par $[\\mathrm{Kr}]\\,4\\mathrm{d}^8\\,5\\mathrm{s}^1$. Le cœur $[\\mathrm{Kr}]$ contient 8 électrons $\\mathrm{s}$, 18 électrons $\\mathrm{p}$ et 10 électrons $\\mathrm{d}$ ; l'ajout de $4\\mathrm{d}^8\\,5\\mathrm{s}^1$ conduit donc à 9 électrons $\\mathrm{s}$, 18 électrons $\\mathrm{p}$ et 18 électrons $\\mathrm{d}$.`,
    choiceExplanations: [
      `Le décompte issu de $[\\mathrm{Kr}]\\,4\\mathrm{d}^8\\,5\\mathrm{s}^1$ donne bien $9$ électrons $\\mathrm{s}$, $18$ électrons $\\mathrm{p}$ et $18$ électrons $\\mathrm{d}$, soit 45 électrons au total.`,
      `Cette répartition totalise bien 45 électrons, mais elle correspondrait à dix électrons $\\mathrm{s}$ et seulement dix-sept électrons $\\mathrm{d}$ ; ce n'est pas la répartition de la configuration fondamentale retenue pour le rhodium.`,
      `Cette répartition totalise également 45 électrons, mais elle retire un électron aux sous-couches $\\mathrm{s}$ et en ajoute un aux sous-couches $\\mathrm{d}$ par rapport à $[\\mathrm{Kr}]\\,4\\mathrm{d}^8\\,5\\mathrm{s}^1$.`,
      `Une sous-couche $\\mathrm{p}$ complète apparaît dans les couches 2, 3 et 4, soit $18$ électrons $\\mathrm{p}$ au total, et non 24.`,
    ],
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
      `Une orbitale $\\mathrm{s}$ possède une symétrie sphérique. Une orbitale $\\mathrm{p}$ est orientée selon un axe et présente un plan nodal passant par le noyau ; les orbitales $2\\mathrm{p}_x$, $2\\mathrm{p}_y$ et $2\\mathrm{p}_z$ ont donc des axes d'orientation différents.`,
    choiceExplanations: [
      `La description est inversée : une orbitale $\\mathrm{s}$ est sphérique, tandis qu'une orbitale $\\mathrm{p}$ possède une symétrie axiale et un plan nodal.`,
      `La densité de probabilité d'une orbitale $\\mathrm{s}$ est globalement sphérique autour du noyau.`,
      `Une orbitale $\\mathrm{p}$ possède un plan nodal passant par le noyau, contrairement à l'orbitale $1\\mathrm{s}$ considérée dans ce niveau de cours.`,
      `Les trois orbitales $2\\mathrm{p}$ sont orientées respectivement selon les axes $x$, $y$ et $z$ ; elles n'ont donc pas un même axe de symétrie propre.`,
    ],
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
      `La couche $\\mathrm{L}$ correspond à $\\mathrm{n}=2$. L'application directe de la formule donne : $E_2=-\\dfrac{13{,}6}{2^2}=-\\dfrac{13{,}6}{4}=-3{,}4\\,\\mathrm{eV}$ Le signe négatif traduit un état lié de l'électron.`,
    choiceExplanations: [``, ``, ``, ``],
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
      `La configuration électronique dépend à la fois du nombre d'électrons et de l'état électronique. Des espèces d'éléments différents peuvent être isoélectroniques, tandis qu'un même atome ou ion peut présenter une configuration fondamentale ou une configuration excitée.`,
    choiceExplanations: [
      `Un même élément peut former plusieurs ions et donc plusieurs édifices possédant des nombres d'électrons et des configurations différents.`,
      `Des espèces d'éléments différents peuvent avoir le même nombre d'électrons : par exemple, des ions isoélectroniques partagent une même configuration.`,
      `Une même configuration électronique n'identifie pas à elle seule l'élément, car elle peut appartenir à plusieurs espèces isoélectroniques de charges nucléaires différentes.`,
      `Un même édifice peut se trouver dans son état fondamental ou dans un état excité, auxquels correspondent des configurations électroniques différentes.`,
    ],
  },
  {
    order: 52,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Les deux questions qui suivent sont liées. Elles concernent l'élément nickel ($\\mathrm{Z} = 28$).\n\nParmi les propositions suivantes, laquelle correspond à la configuration électronique de cet élément dans son état fondamental :`,
    choices: [
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^{10}\\,4\\mathrm{s}^0$.`,
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^8\\,4\\mathrm{s}^2$.`,
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^8\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2$.`,
      `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^6\\,4\\mathrm{s}^2\\,4\\mathrm{p}^2$.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `Le nickel possède 28 électrons. Après le cœur $[\\mathrm{Ar}]$ de 18 électrons, les dix électrons restants se répartissent en $3\\mathrm{d}^8\\,4\\mathrm{s}^2$ dans la configuration fondamentale retenue : $[\\mathrm{Ar}]\\,3\\mathrm{d}^8\\,4\\mathrm{s}^2$.`,
    choiceExplanations: [
      `Cette écriture compte 28 électrons, mais $3\\mathrm{d}^{10}\\,4\\mathrm{s}^0$ ne correspond pas à la configuration fondamentale du nickel neutre retenue dans le cours.`,
      `Le cœur $[\\mathrm{Ar}]$ contient 18 électrons et $3\\mathrm{d}^8\\,4\\mathrm{s}^2$ en ajoute dix : on obtient bien les 28 électrons du nickel.`,
      `Une sous-couche $3\\mathrm{p}$ ne peut contenir que six électrons ; l'écriture $3\\mathrm{p}^8$ est impossible.`,
      `La sous-couche $4\\mathrm{p}$ reste vide dans l'état fondamental du nickel ; les électrons concernés occupent $3\\mathrm{d}$.`,
    ],
  },
  {
    order: 53,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Parmi les propositions suivantes, quelle est la couche de valence de l'élément nickel ?`,
    choices: [
      `$\\mathrm{N}$.`,
      `$\\mathrm{L}$.`,
      `$\\mathrm{K}$.`,
      `$\\mathrm{M}$.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `Avec la définition simplifiée du cours, la couche de valence est celle de plus grand nombre quantique principal occupé. Dans $[\\mathrm{Ar}]\\,3\\mathrm{d}^8\\,4\\mathrm{s}^2$, le plus grand $\\mathrm{n}$ est 4 : la couche de valence est donc $\\mathrm{N}$, même si les électrons $3\\mathrm{d}$ participent aussi à la chimie du nickel.`,
    choiceExplanations: [
      `La couche $\\mathrm{N}$ correspond à $\\mathrm{n}=4$ et contient les électrons externes $4\\mathrm{s}^2$.`,
      `La couche $\\mathrm{L}$, de nombre quantique principal 2, appartient au cœur électronique.`,
      `La couche $\\mathrm{K}$, de nombre quantique principal 1, est la couche la plus interne.`,
      `La couche $\\mathrm{M}$ contient $3\\mathrm{d}^8$, mais elle n'est pas la couche de plus grand $\\mathrm{n}$ dans la définition demandée.`,
    ],
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
      `On peut raisonner sur $100\\,\\mathrm{g}$ de composé : $n(\\mathrm{C})=24/12=2\\,\\mathrm{mol}$, $n(\\mathrm{H})=6/1=6\\,\\mathrm{mol}$ et $n(\\mathrm{Cl})=70/35=2\\,\\mathrm{mol}$. Le rapport molaire $2:6:2$ se simplifie en $1:3:1$, d'où la formule $\\mathrm{CH}_3\\mathrm{Cl}$, dont la masse molaire vaut $12+3+35=50\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
    choiceExplanations: [
      `$\\mathrm{C}_2\\mathrm{H}_5\\mathrm{Cl}$ a une masse molaire de $64\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et ne respecte ni la masse molaire ni les proportions indiquées.`,
      `$\\mathrm{C}_2\\mathrm{H}_4\\mathrm{Cl}_2$ a une masse molaire de $98\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et contient une proportion de chlore incompatible avec l'énoncé.`,
      `Le rapport des quantités de matière est $1:3:1$ et la masse molaire de $\\mathrm{CH}_3\\mathrm{Cl}$ est bien $50\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `$\\mathrm{CH}_2\\mathrm{Cl}_2$ a une masse molaire de $84\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et contient beaucoup plus de chlore que les 70 % annoncés.`,
    ],
  },
  {
    order: 55,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de la classification périodique des éléments :`,
    choices: [
      `Les éléments y sont classés selon leur numéro atomique $\\mathrm{Z}$ croissant.`,
      `La classification périodique est couramment appelée tableau de Rutherford.`,
      `Les colonnes du tableau périodique sont appelées des périodes.`,
      `Les lanthanides et les actinides constituent deux colonnes placées à droite des gaz nobles.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `Le tableau périodique moderne, souvent appelé tableau de Mendeleïev, classe les éléments par numéro atomique croissant. Les colonnes sont les groupes ou familles, les lignes sont les périodes, et le bloc $\\mathrm{f}$ est généralement représenté sous le tableau principal.`,
    choiceExplanations: [
      `Le tableau périodique moderne est ordonné par numéro atomique $\\mathrm{Z}$ croissant.`,
      `On parle usuellement du tableau de Mendeleïev, pas d'un tableau de Rutherford.`,
      `Les colonnes sont appelées groupes ou familles ; les périodes correspondent aux lignes horizontales.`,
      `Les lanthanides et les actinides appartiennent au bloc $\\mathrm{f}$ et sont généralement placés sous le tableau principal, non dans deux colonnes à droite des gaz nobles.`,
    ],
  },
  {
    order: 56,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Quel est l'ordre correct des six premiers éléments chimiques, classés par numéro atomique $\\mathrm{Z}$ croissant ?`,
    choices: [
      `$\\ce{H} - \\ce{Li} - \\ce{He} - \\ce{Be} - \\ce{B} - \\ce{C}$.`,
      `$\\ce{He} - \\ce{H} - \\ce{Li} - \\ce{Be} - \\ce{C} - \\ce{B}$.`,
      `$\\ce{H} - \\ce{He} - \\ce{Li} - \\ce{Be} - \\ce{B} - \\ce{C}$.`,
      `$\\ce{H} - \\ce{He} - \\ce{Be} - \\ce{Li} - \\ce{B} - \\ce{C}$.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `Les six premiers éléments sont, dans l'ordre des numéros atomiques croissants, l'hydrogène, l'hélium, le lithium, le béryllium, le bore puis le carbone.`,
    choiceExplanations: [
      `L'hélium ($\\mathrm{Z}=2$) vient avant le lithium ($\\mathrm{Z}=3$) ; cet ordre est donc incorrect.`,
      `L'hydrogène est le premier élément ($\\mathrm{Z}=1$) : il ne peut pas venir après l'hélium.`,
      `L'ordre $\\ce{H}$, $\\ce{He}$, $\\ce{Li}$, $\\ce{Be}$, $\\ce{B}$, $\\ce{C}$ correspond bien à $\\mathrm{Z}=1$ à $\\mathrm{Z}=6$.`,
      `Le lithium ($\\mathrm{Z}=3$) précède le béryllium ($\\mathrm{Z}=4$) ; les deux éléments sont inversés ici.`,
    ],
  },
  {
    order: 57,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de la position des blocs $\\mathrm{s}$, $\\mathrm{p}$, $\\mathrm{d}$ et $\\mathrm{f}$ dans la classification périodique :`,
    choices: [
      `Le bloc $\\mathrm{s}$ correspond exclusivement aux deux premières colonnes du tableau.`,
      `Le bloc $\\mathrm{p}$ occupe les six premières colonnes situées à gauche du tableau.`,
      `Le bloc $\\mathrm{d}$ occupe la partie centrale de la classification périodique.`,
      `Le bloc $\\mathrm{f}$ est généralement représenté par deux lignes placées sous le tableau principal.`,
    ],
    correctChoiceIndexes: [2, 3],
    explanation:
      `Le bloc $\\mathrm{d}$ correspond aux métaux de transition placés au centre du tableau. Le bloc $\\mathrm{f}$, formé des lanthanides et des actinides, est généralement représenté sous la classification principale.`,
    choiceExplanations: [
      `Cette affirmation est fausse à strictement parler, car l'hélium a une configuration $1\\mathrm{s}^2$ tout en étant placé dans la dernière colonne du tableau.`,
      `Le bloc $\\mathrm{p}$ occupe les six colonnes situées à droite du tableau, à l'exception de l'hélium.`,
      `Le bloc $\\mathrm{d}$, correspondant aux métaux de transition, se trouve au centre de la classification périodique.`,
      `Les lanthanides et les actinides du bloc $\\mathrm{f}$ sont habituellement dessinés sur deux lignes sous le tableau principal.`,
    ],
  },
  {
    order: 58,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Le magnésium ($\\mathrm{Z} = 12$) est un élément essentiel au fonctionnement musculaire et nerveux en intervenant notamment dans la contraction musculaire et dans l'activité de nombreuses enzymes. Cochez la ou les réponse(s) exacte(s) :`,
    choices: [
      `Il se trouve dans la troisième période et dans la deuxième colonne du tableau périodique.`,
      `Ce n'est pas un élément du bloc $\\mathrm{d}$.`,
      `C'est un élément du bloc $\\mathrm{s}$.`,
      `Il se trouve dans la deuxième période et dans la troisième colonne du tableau périodique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le magnésium a pour configuration électronique $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2$. Il appartient donc à la troisième période, à la deuxième colonne du tableau, et relève du bloc $\\mathrm{s}$.`,
    choiceExplanations: [
      `Avec une couche externe $3\\mathrm{s}^2$, le magnésium appartient à la troisième période et à la deuxième colonne.`,
      `Le magnésium ne possède pas d'électrons de valence dans une sous-couche $\\mathrm{d}$ : ce n'est pas un élément du bloc $\\mathrm{d}$.`,
      `Sa sous-couche de valence est $3\\mathrm{s}^2$ : le magnésium appartient donc au bloc $\\mathrm{s}$.`,
      `Cette proposition inverse à la fois la période et la colonne : elle est fausse.`,
    ],
  },
  {
    order: 59,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On considère l'élément chimique se trouvant dans la troisième période et dans la dix-septième colonne du tableau périodique :`,
    choices: [
      `Cet élément se trouve dans le bloc $\\mathrm{d}$.`,
      `Il possède dix-sept électrons de valence.`,
      `Son numéro atomique est $\\mathrm{Z} = 17$ : c'est le chlore.`,
      `Sa configuration électronique externe est de la forme $\\mathrm{n}\\mathrm{s}\\,\\mathrm{n}\\mathrm{p}$.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `L'élément de la troisième période et de la dix-septième colonne est le chlore, de numéro atomique $\\mathrm{Z}=17$. C'est un halogène du bloc $\\mathrm{p}$, dont la configuration électronique externe est de la forme $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$.`,
    choiceExplanations: [
      `Le chlore n'appartient pas au bloc $\\mathrm{d}$ mais au bloc $\\mathrm{p}$.`,
      `Le chlore possède sept électrons de valence, pas dix-sept.`,
      `La troisième période et la dix-septième colonne désignent bien le chlore, de numéro atomique $\\mathrm{Z}=17$.`,
      `L'écriture correcte est $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$ pour un halogène, et non la forme incomplète proposée.`,
    ],
  },
  {
    order: 60,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des halogènes :`,
    choices: [
      `Les halogènes représentent une colonne de la classification périodique.`,
      `Les halogènes représentent une ligne de la classification périodique.`,
      `Tous les halogènes ont des configurations électroniques externes semblables.`,
      `Les halogènes donnent tous des anions monoatomiques de charge $-1$ dans leurs composés ioniques usuels.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `Les halogènes constituent la colonne 17 de la classification périodique. Ils possèdent la même structure électronique externe générale $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$ et forment souvent des anions halogénure de charge $-1$.`,
    choiceExplanations: [
      `Les halogènes occupent une même colonne, correspondant au groupe 17.`,
      `Une ligne du tableau correspond à une période, pas à une famille chimique comme les halogènes.`,
      `Leur configuration électronique externe générale est analogue, ce qui explique leurs propriétés chimiques voisines.`,
      `Dans les composés ioniques simples, les halogènes gagnent typiquement un électron et forment des anions de charge $-1$.`,
    ],
  },
  {
    order: 61,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des grandes familles d'éléments de la classification périodique :`,
    choices: [
      `Les métaux sont majoritairement situés à gauche du tableau périodique.`,
      `Les métalloïdes, comme le silicium, présentent souvent des propriétés intermédiaires entre celles des métaux et des non-métaux.`,
      `Les non-métaux forment uniquement des ions positifs appelés cations.`,
      `Les gaz rares de la colonne 18 sont généralement très réactifs chimiquement.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les métaux occupent surtout la partie gauche et centrale du tableau. Les métalloïdes se trouvent à la frontière entre métaux et non-métaux et présentent des propriétés intermédiaires. Les gaz rares sont au contraire très peu réactifs.`,
    choiceExplanations: [
      `La majorité des métaux se situe à gauche et au centre de la classification périodique.`,
      `Le silicium est un métalloïde classique, aux propriétés intermédiaires entre celles des métaux et des non-métaux.`,
      `Les non-métaux forment souvent des ions négatifs, appelés anions, et non uniquement des cations.`,
      `Les gaz rares sont connus pour leur très faible réactivité chimique.`,
    ],
  },
  {
    order: 62,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des éléments des colonnes 14 à 17 de la classification périodique :`,
    choices: [
      `Les éléments d'une même colonne possèdent une configuration électronique de valence analogue.`,
      `Le carbone, de configuration de valence $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^2$, possède quatre électrons de valence.`,
      `L'oxygène, de configuration de valence $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^4$, possède quatre électrons de valence.`,
      `Le chlore, de configuration de valence $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$, possède huit électrons de valence.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les éléments d'une même colonne ont une configuration électronique externe analogue, ce qui explique leurs propriétés communes. Pour les colonnes 14 à 17, on retrouve respectivement $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^2$, $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^3$, $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^4$ et $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^5$.`,
    choiceExplanations: [
      `Les éléments d'un même groupe présentent une configuration de valence analogue, ce qui sous-tend leurs propriétés chimiques voisines.`,
      `La configuration $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^2$ correspond bien à quatre électrons de valence.`,
      `La configuration $\\mathrm{n}\\mathrm{s}^2\\,\\mathrm{n}\\mathrm{p}^4$ correspond à six électrons de valence, et non quatre.`,
      `Le chlore possède sept électrons de valence : $2+5=7$, pas huit.`,
    ],
  },
  {
    order: 64,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `L'iode ($\\mathrm{Z} = 53$) joue un rôle essentiel dans le fonctionnement de la thyroïde. Certains de ses isotopes radioactifs sont également utilisés en médecine nucléaire. Cochez la ou les réponse(s) exacte(s) :`,
    choices: [
      `L'iode appartient à la famille des halogènes.`,
      `Le numéro atomique $\\mathrm{Z} = 53$ signifie que l'iode possède 53 neutrons.`,
      `L'atome d'iode possède 7 électrons sur sa cinquième couche.`,
      `L'iode possède au total 20 électrons dans des sous-couches $\\mathrm{d}$.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `L'iode appartient au groupe 17. Sa configuration électronique fondamentale est $[\\mathrm{Kr}]\\,4\\mathrm{d}^{10}\\,5\\mathrm{s}^2\\,5\\mathrm{p}^5$ : il possède donc 7 électrons de valence sur la couche $\\mathrm{n}=5$, et un total de 20 électrons répartis dans les sous-couches $3\\mathrm{d}^{10}$ et $4\\mathrm{d}^{10}$.`,
    choiceExplanations: [
      `L'iode appartient à la colonne 17 de la classification périodique, celle des halogènes.`,
      `Le numéro atomique $\\mathrm{Z} = 53$ correspond au nombre de protons et, pour un atome neutre, au nombre d'électrons ; il ne donne pas directement le nombre de neutrons.`,
      `La couche externe de l'iode est $5\\mathrm{s}^2\\,5\\mathrm{p}^5$, soit sept électrons sur la cinquième couche.`,
      `L'iode possède $3\\mathrm{d}^{10}$ et $4\\mathrm{d}^{10}$, soit vingt électrons au total dans des sous-couches $\\mathrm{d}$.`,
    ],
  },
  {
    order: 65,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des éléments constituant la matière vivante :`,
    choices: [
      `Le silicium est largement utilisé comme semi-conducteur en électronique ; il ne fait pas partie des éléments constituant la matière vivante.`,
      `L'iode $\\mathrm{I}$ est un oligoélément halogène pouvant se concentrer dans la thyroïde.`,
      `Le cadmium $\\mathrm{Cd}$, le mercure $\\mathrm{Hg}$ et le plomb $\\mathrm{Pb}$ sont indispensables à très faible concentration, mais toxiques à forte dose.`,
      `La majorité des oligoéléments présentés sont des métaux.`,
    ],
    correctChoiceIndexes: [1, 3],
    explanation:
      `La matière vivante comporte des éléments majoritaires et des éléments présents à l'état de traces. Parmi les oligoéléments cités dans le cours, plusieurs sont des métaux, tandis que certains éléments comme le cadmium, le mercure et le plomb sont surtout retenus pour leur toxicité.`,
    choiceExplanations: [
      `L'utilisation du silicium en électronique n'exclut pas sa présence dans le vivant : il figure parmi les éléments constituant la matière vivante, à l'état de traces.`,
      `L'iode est bien un halogène cité parmi les oligoéléments ; il peut notamment se concentrer dans la thyroïde.`,
      `Le cadmium, le mercure et le plomb ne sont pas présentés comme indispensables : ils sont classés parmi les éléments inutiles et souvent toxiques.`,
      `Parmi les quinze oligoéléments cités, neuf sont des métaux, contre trois halogènes et trois métalloïdes.`,
    ],
  },
  {
    order: 66,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Les deux questions qui suivent sont liées. À propos de la distinction entre métaux, non-métaux et métalloïdes :`,
    choices: [
      `Les métaux sont tous solides à température ambiante et conduisent le courant électrique.`,
      `Les non-métaux sont moins nombreux que les métaux ; ils peuvent être solides, liquides ou gazeux et tendent à former des anions.`,
      `Les métalloïdes constituent une famille nettement délimitée occupant une seule colonne de la classification périodique.`,
      `Les métalloïdes présentent des propriétés intermédiaires entre celles des métaux et des non-métaux et peuvent notamment être semi-conducteurs.`,
    ],
    correctChoiceIndexes: [1, 3],
    explanation:
      `Les métaux constituent la catégorie de référence : les non-métaux s'en distinguent nettement, tandis que les métalloïdes n'en possèdent que certaines caractéristiques. Le suffixe « -oïde » signifie « qui ressemble à » : les métalloïdes ont donc des propriétés intermédiaires entre métaux et non-métaux, notamment un comportement de semi-conducteur. La frontière entre ces familles reste toutefois peu nette.`,
    choiceExplanations: [
      `Les métaux sont généralement solides à température ambiante et conducteurs du courant, mais le mercure $\\mathrm{Hg}$ constitue une exception puisqu'il est liquide.`,
      `Les non-métaux sont moins nombreux et peuvent se présenter sous différents états physiques. Ils sont généralement isolants et tendent à gagner des électrons pour former des anions.`,
      `La limite entre métaux et non-métaux est peu nette. Les métalloïdes se situent dans cette zone intermédiaire et ne forment pas une colonne unique.`,
      `Les métalloïdes possèdent des propriétés intermédiaires ; le cours met notamment en avant leur caractère semi-conducteur.`,
    ],
  },
  {
    order: 67,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `En vous appuyant sur les distinctions établies dans la question précédente :`,
    choices: [
      `Le bore $\\mathrm{B}$, le silicium $\\mathrm{Si}$ et le germanium $\\mathrm{Ge}$ sont des métalloïdes situés à la limite entre les métaux et les non-métaux.`,
      `Le fluor $\\mathrm{F}$, le chlore $\\mathrm{Cl}$, le brome $\\mathrm{Br}$ et l'iode $\\mathrm{I}$ sont des métaux situés dans la partie gauche de la classification.`,
      `Le sodium $\\mathrm{Na}$, le magnésium $\\mathrm{Mg}$ et le fer $\\mathrm{Fe}$ sont des métaux situés globalement dans la partie gauche ou centrale de la classification.`,
      `Le soufre $\\mathrm{S}$, le phosphore $\\mathrm{P}$, l'iode $\\mathrm{I}$ et le brome $\\mathrm{Br}$ sont tous gazeux à température ambiante puisqu'ils appartiennent aux non-métaux.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Les exemples cités permettent de repérer les trois familles dans le tableau : les métalloïdes se trouvent dans une zone frontière, les halogènes appartiennent aux non-métaux situés vers la droite, et les métaux occupent principalement la partie gauche et centrale de la classification.`,
    choiceExplanations: [
      `Le cours cite bien $\\mathrm{B}$, $\\mathrm{Si}$ et $\\mathrm{Ge}$ comme métalloïdes semi-conducteurs, placés à la frontière entre les deux grandes familles.`,
      `Le fluor, le chlore, le brome et l'iode sont des non-métaux appartenant à la famille des halogènes, située vers la droite du tableau périodique.`,
      `Le sodium et le magnésium sont placés à gauche, tandis que le fer appartient aux métaux de transition situés dans la partie centrale.`,
      `Les non-métaux n'ont pas tous le même état physique : le soufre, le phosphore et l'iode sont solides, tandis que le dibrome $\\mathrm{Br}_2$ est liquide à température ambiante.`,
    ],
  },
  {
    order: 68,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On considère l'élément chimique situé dans la troisième période et dans la deuxième colonne du tableau périodique :`,
    choices: [
      `Sa configuration électronique externe est de la forme $\\mathrm{n}\\mathrm{s}^2$.`,
      `Il possède deux électrons de valence.`,
      `Cet élément appartient au bloc $\\mathrm{p}$.`,
      `Son numéro atomique est $\\mathrm{Z} = 12$ : il s'agit du magnésium.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `L'élément situé dans la troisième période et dans la deuxième colonne est le magnésium. Sa configuration électronique externe est $3\\mathrm{s}^2$ : il appartient donc au bloc $\\mathrm{s}$ et possède deux électrons de valence sur sa couche externe.`,
    choiceExplanations: [
      `Un élément de la deuxième colonne possède une sous-couche externe $\\mathrm{s}$ remplie à deux électrons ; dans ce cas, on a bien une forme générale $\\mathrm{n}\\mathrm{s}^2$.`,
      `Le magnésium a pour couche externe $3\\mathrm{s}^2$ : il possède donc deux électrons de valence.`,
      `La deuxième colonne du tableau appartient au bloc $\\mathrm{s}$, et non au bloc $\\mathrm{p}$.`,
      `L'élément de la troisième période et de la deuxième colonne est bien le magnésium, de numéro atomique $\\mathrm{Z} = 12$.`,
    ],
  },
  {
    order: 69,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Parmi les appellations suivantes, laquelle ne correspond pas à une famille d'éléments chimiques présentée dans la classification périodique ?`,
    choices: [
      `Les halogènes.`,
      `Les métaux alcalino-terreux.`,
      `Les gaz rares.`,
      `Les métaux semi-conducteurs.`,
    ],
    correctChoiceIndexes: [3],
    explanation:
      `Les halogènes, les métaux alcalino-terreux et les gaz rares sont des familles classiques de la classification périodique. En revanche, l'expression « métaux semi-conducteurs » ne désigne pas une famille du tableau : le caractère semi-conducteur est associé aux métalloïdes, comme le bore, le silicium et le germanium.`,
    choiceExplanations: [
      `Les halogènes constituent bien une famille de la classification, située dans la colonne 17 ; elle comprend notamment le fluor, le chlore, le brome et l'iode.`,
      `Les métaux alcalino-terreux constituent bien la famille située dans la deuxième colonne du tableau périodique.`,
      `Les gaz rares constituent bien la famille de la colonne 18, avec notamment l'hélium, le néon et l'argon.`,
      `L'expression « métaux semi-conducteurs » ne correspond pas à une famille présentée dans le cours. Le caractère semi-conducteur est associé aux métalloïdes, comme le bore, le silicium et le germanium.`,
    ],
  },
  {
    order: 70,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Retrouver l'ordre dans lequel les éléments chimiques formant la troisième période du tableau périodique sont rangés, par numéro atomique croissant :`,
    choices: [
      `$\\mathrm{Mg}$, $\\mathrm{Na}$, $\\mathrm{Al}$, $\\mathrm{Si}$, $\\mathrm{S}$, $\\mathrm{P}$, $\\mathrm{Cl}$ et $\\mathrm{Ar}$.`,
      `$\\mathrm{Al}$, $\\mathrm{Na}$, $\\mathrm{Mg}$, $\\mathrm{Si}$, $\\mathrm{P}$, $\\mathrm{S}$, $\\mathrm{Cl}$ et $\\mathrm{Ar}$.`,
      `$\\mathrm{Na}$, $\\mathrm{Mg}$, $\\mathrm{Al}$, $\\mathrm{Si}$, $\\mathrm{P}$, $\\mathrm{S}$, $\\mathrm{Cl}$ et $\\mathrm{Ar}$.`,
      `$\\mathrm{Na}$, $\\mathrm{Al}$, $\\mathrm{Mg}$, $\\mathrm{Si}$, $\\mathrm{P}$, $\\mathrm{S}$, $\\mathrm{Ar}$ et $\\mathrm{Cl}$.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `Les éléments de la troisième période, classés par numéro atomique croissant, sont : sodium, magnésium, aluminium, silicium, phosphore, soufre, chlore puis argon, soit de $\\mathrm{Z}=11$ à $\\mathrm{Z}=18$.`,
    choiceExplanations: [
      `Le sodium ($\\mathrm{Z}=11$) vient avant le magnésium ($\\mathrm{Z}=12$), et le phosphore ($\\mathrm{Z}=15$) vient avant le soufre ($\\mathrm{Z}=16$) ; cet ordre est donc incorrect.`,
      `L'aluminium ($\\mathrm{Z}=13$) ne peut pas précéder le sodium ($\\mathrm{Z}=11$) ni le magnésium ($\\mathrm{Z}=12$).`,
      `C'est bien l'ordre correct de la troisième période : $\\mathrm{Na}$, $\\mathrm{Mg}$, $\\mathrm{Al}$, $\\mathrm{Si}$, $\\mathrm{P}$, $\\mathrm{S}$, $\\mathrm{Cl}$, $\\mathrm{Ar}$.`,
      `Le magnésium ($\\mathrm{Z}=12$) vient avant l'aluminium ($\\mathrm{Z}=13$), et le chlore ($\\mathrm{Z}=17$) vient avant l'argon ($\\mathrm{Z}=18$).`,
    ],
  },
  {
    order: 71,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Retrouver l'ordre dans lequel les éléments chimiques formant la deuxième période du tableau périodique sont rangés, par numéro atomique croissant :`,
    choices: [
      `$\\mathrm{Be}$, $\\mathrm{Li}$, $\\mathrm{B}$, $\\mathrm{C}$, $\\mathrm{O}$, $\\mathrm{N}$, $\\mathrm{F}$ et $\\mathrm{Ne}$.`,
      `$\\mathrm{B}$, $\\mathrm{Li}$, $\\mathrm{Be}$, $\\mathrm{C}$, $\\mathrm{O}$, $\\mathrm{N}$, $\\mathrm{F}$ et $\\mathrm{Ne}$.`,
      `$\\mathrm{Li}$, $\\mathrm{Be}$, $\\mathrm{B}$, $\\mathrm{C}$, $\\mathrm{N}$, $\\mathrm{O}$, $\\mathrm{F}$ et $\\mathrm{Ne}$.`,
      `$\\mathrm{B}$, $\\mathrm{Li}$, $\\mathrm{Be}$, $\\mathrm{C}$, $\\mathrm{N}$, $\\mathrm{O}$, $\\mathrm{F}$ et $\\mathrm{Ne}$.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `Les éléments de la deuxième période, classés par numéro atomique croissant, sont : lithium, béryllium, bore, carbone, azote, oxygène, fluor puis néon, soit de $\\mathrm{Z}=3$ à $\\mathrm{Z}=10$.`,
    choiceExplanations: [
      `Le lithium ($\\mathrm{Z}=3$) vient avant le béryllium ($\\mathrm{Z}=4$), et l'azote ($\\mathrm{Z}=7$) vient avant l'oxygène ($\\mathrm{Z}=8$) ; cet ordre est donc incorrect.`,
      `Le bore ($\\mathrm{Z}=5$) ne peut pas précéder le lithium ($\\mathrm{Z}=3$) ni le béryllium ($\\mathrm{Z}=4$).`,
      `C'est bien l'ordre correct de la deuxième période : $\\mathrm{Li}$, $\\mathrm{Be}$, $\\mathrm{B}$, $\\mathrm{C}$, $\\mathrm{N}$, $\\mathrm{O}$, $\\mathrm{F}$, $\\mathrm{Ne}$.`,
      `Le bore ($\\mathrm{Z}=5$) ne peut pas venir avant le lithium ($\\mathrm{Z}=3$) et le béryllium ($\\mathrm{Z}=4$).`,
    ],
  },
  {
    order: 72,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On considère l'élément cuivre ($\\mathrm{Z} = 29$) :`,
    choices: [
      `Il se trouve dans la quatrième période et dans la dixième colonne du tableau périodique.`,
      `La dernière sous-couche remplie est la sous-couche $4\\mathrm{s}$.`,
      `Le gaz noble se trouvant dans la même période que l'élément cuivre est l'élément krypton.`,
      `C'est un métal de transition.`,
    ],
    correctChoiceIndexes: [2, 3],
    explanation:
      `Le cuivre, de numéro atomique $\\mathrm{Z}=29$, appartient à la quatrième période et à la onzième colonne du tableau périodique. Sa configuration électronique fondamentale est $[\\mathrm{Ar}]\\,3\\mathrm{d}^{10}\\,4\\mathrm{s}^1$ : il s'agit donc d'un métal de transition du bloc $\\mathrm{d}$.`,
    choiceExplanations: [
      `Le cuivre est bien dans la quatrième période, mais il appartient à la onzième colonne et non à la dixième.`,
      `Dans la configuration fondamentale du cuivre, la sous-couche $3\\mathrm{d}$ est remplie et la sous-couche $4\\mathrm{s}$ ne contient qu'un seul électron.`,
      `Le cuivre appartient à la quatrième période, dont le gaz noble terminal est bien le krypton.`,
      `Le cuivre est un métal de transition appartenant au bloc $\\mathrm{d}$.`,
    ],
  },
  {
    order: 73,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des séries des lanthanides et des actinides :`,
    choices: [
      `Elles sont représentées sous le tableau principal afin de ne pas élargir excessivement la classification périodique.`,
      `Elles s'insèrent entre les colonnes 3 et 4 de la classification moderne.`,
      `Les lanthanides sont également appelés « terres rares ».`,
      `Les actinides appartiennent à la colonne 18 avec les gaz rares.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les lanthanides et les actinides correspondent au bloc $\\mathrm{f}$. Ils sont généralement dessinés sous le tableau principal pour garder une classification plus compacte, bien qu'ils s'insèrent en réalité dans la suite des périodes, entre les colonnes 3 et 4. Les lanthanides sont aussi souvent appelés terres rares.`,
    choiceExplanations: [
      `Les deux séries sont le plus souvent représentées sous le tableau principal afin d'éviter d'élargir excessivement la classification périodique.`,
      `Dans la classification longue, ces deux séries s'insèrent dans la continuité des périodes entre les colonnes 3 et 4.`,
      `Les lanthanides sont aussi désignés sous le nom de terres rares.`,
      `La colonne 18 correspond aux gaz rares ; les actinides appartiennent au bloc $\\mathrm{f}$, pas à cette famille.`,
    ],
  },
  {
    order: 74,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On donne la configuration électronique d'un atome : $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^6\\,3\\mathrm{s}^2\\,3\\mathrm{p}^6\\,3\\mathrm{d}^{10}\\,4\\mathrm{s}^1$.`,
    choices: [
      `Cet atome n'est pas dans son état fondamental.`,
      `Le numéro atomique de cet atome est égal à $\\mathrm{Z} = 29$.`,
      `Cet élément se situe dans la quatrième période, dans la première colonne et dans le bloc $\\mathrm{s}$ du tableau périodique.`,
      `Dans l'approche retenue par le cours, sa couche de valence est la couche $\\mathrm{N}$ et elle contient un électron.`,
    ],
    correctChoiceIndexes: [1, 3],
    explanation:
      `La configuration comporte 29 électrons : elle correspond donc au cuivre $\\mathrm{Cu}$, dont l'état fondamental constitue une exception au remplissage usuel avec $3\\mathrm{d}^{10}\\,4\\mathrm{s}^1$. Le nombre quantique principal le plus élevé est $\\mathrm{n}=4$, ce qui place l'élément dans la quatrième période et définit ici la couche $\\mathrm{N}$ comme couche de valence. Le cuivre appartient toutefois au bloc $\\mathrm{d}$ et à la colonne 11, et non à la première colonne.`,
    choiceExplanations: [
      `Cette configuration est bien celle de l'état fondamental du cuivre : la sous-couche $3\\mathrm{d}$ est complète et la sous-couche $4\\mathrm{s}$ contient un électron.`,
      `La somme des électrons vaut $2+2+6+2+6+10+1=29$. Pour un atome neutre, ce total est égal au numéro atomique $\\mathrm{Z}$.`,
      `Le cuivre appartient à la quatrième période, dans le bloc $\\mathrm{d}$ et est situé dans la colonne 11.`,
      `Selon la définition retenue dans le cours, la couche de valence est celle de plus grand nombre quantique principal. Ici, $\\mathrm{n}=4$ correspond à la couche $\\mathrm{N}$, qui contient l'électron $4\\mathrm{s}^1$.`,
    ],
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
const thirdSectionDiscoverQuestionOrders = [8, 57, 56, 9, 58, 59, 60, 61, 62, 10];
const thirdSectionPracticeQuestionOrders = [55, 64, 66, 67, 65, 68, 69, 70, 72, 73];

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
    order: THIRD_SECTION_DISCOVER_QUIZ_ORDER,
    slug: THIRD_SECTION_DISCOVER_QUIZ_SLUG,
    title: `Découvrir – Classification périodique`,
    description:
      `Premier niveau d'entraînement sur la section C – Classification périodique des éléments.`,
    stage: 'DISCOVER',
    sectionOrder: THIRD_SECTION_ORDER,
    questionOrders: thirdSectionDiscoverQuestionOrders,
  },
  {
    order: THIRD_SECTION_PRACTICE_QUIZ_ORDER,
    slug: THIRD_SECTION_PRACTICE_QUIZ_SLUG,
    title: `S'entraîner – Classification périodique`,
    description:
      `Niveau intermédiaire d'entraînement sur la section C – Classification périodique des éléments.`,
    stage: 'PRACTICE',
    sectionOrder: THIRD_SECTION_ORDER,
    questionOrders: thirdSectionPracticeQuestionOrders,
  },
  {
    order: SYNTHESIS_QUIZ_ORDER,
    slug: SYNTHESIS_QUIZ_SLUG,
    title: `Synthèse – Atomes`,
    description:
      `QCM de synthèse transversal sur les notions d'atome, de nucléide, d'isotope et d'ordres de grandeur.`,
    stage: 'MASTER',
    sectionOrder: 4,
    questionOrders: [27, 48, 49, 50, 51, 52, 53, 54, 71, 74],
  },
];

export async function seedHealthTrainingUe14ElementsChimiquesClassificationPeriodique(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 1',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    masterCleanupSectionOrders: [SECOND_SECTION_ORDER, THIRD_SECTION_ORDER],
  });
}
