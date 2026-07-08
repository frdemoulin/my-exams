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

type SeedQuestion = {
  order: number;
  difficulty: QuizDifficulty;
  answerFormat: QuizAnswerFormat;
  question: string;
  choices: string[];
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
      `La couche $M$ comporte les sous-couches $3s$, $3p$ et $3d$.`,
      `Une sous-couche $p$ contient trois orbitales.`,
      `Une orbitale peut contenir au maximum deux électrons.`,
      `Une sous-couche $s$ correspond à $\\ell = 1$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Pour une sous-couche $s$, $\\ell = 0$. Une sous-couche $p$ compte 3 orbitales et chaque orbitale peut accueillir 2 électrons.`,
  },
  {
    order: 6,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `À propos des nombres quantiques et du remplissage :`,
    choices: [
      `Le nombre quantique principal $n$ définit la couche électronique.`,
      `Une couche $n$ comporte $n$ sous-couches.`,
      `En cas d'égalité de $n + \\ell$, la sous-couche de plus grand $n$ se remplit d'abord.`,
      `La règle de Hund conduit d'abord à placer un électron par orbitale dans une sous-couche donnée.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le critère énergétique retient d'abord le plus petit $n + \\ell$, puis le plus petit $n$ en cas d'égalité. La règle de Hund privilégie l'occupation simple avant l'appariement.`,
  },
  {
    order: 7,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `À propos des configurations électroniques données dans le cours :`,
    choices: [
      `$\\ce{H}$ a pour configuration $1s^1$.`,
      `$\\ce{Ne}$ a pour configuration $K^2L^8$.`,
      `$\\ce{Li}$ possède deux électrons sur sa couche de valence.`,
      `Pour $\\ce{Fe}$ dans le cours, la couche de valence est $4s^2$.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le lithium a une couche de valence $2s^1$. Le cours identifie la valence du fer par $4s^2$.`,
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
      `Un électron est environ 1000 fois moins massif qu'un nucléon.`,
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
const secondQuizQuestionOrders = [14, 16, 17, 18, 19, 20, 23, 24];

const quizSeeds: SeedQuiz[] = [
  {
    order: FIRST_QUIZ_ORDER,
    slug: FIRST_QUIZ_SLUG,
    title: `Découvrir - Atomes`,
    description:
      `Premier niveau d'entraînement limité à la section A - Atomes, au format UE1 avec 4 items par question.`,
    stage: 'DISCOVER',
    sectionOrder: FIRST_SECTION_ORDER,
    questionOrders: firstQuizQuestionOrders,
  },
  {
    order: SECOND_QUIZ_ORDER,
    slug: SECOND_QUIZ_SLUG,
    title: `S'entraîner - Généralités sur l'atome`,
    description:
      `Niveau 2 d'entraînement sur la section A - Atomes, centré sur les généralités, les nucléides et les isotopes.`,
    stage: 'PRACTICE',
    sectionOrder: FIRST_SECTION_ORDER,
    questionOrders: secondQuizQuestionOrders,
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
    select: { id: true, title: true, isActive: true },
  });

  if (!chapter?.isActive) {
    console.warn(`   ⚠️  Chapitre introuvable ou inactif : ${CHAPTER_SLUG}`);
    return;
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
      choices: entry.choices,
      answerFormat: entry.answerFormat,
      correctChoiceIndexes: entry.correctChoiceIndexes,
      correctChoiceIndex: entry.correctChoiceIndexes[0] ?? 0,
      explanation: entry.explanation,
      order: entry.order,
      isPublished: true,
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
