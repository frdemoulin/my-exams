import type { HealthTrainingAuthorQuestion, SeedQuestion } from './health-training-ue14.shared';
import { UE14_CH1_ATOMES_PRACTICE_V2_QUESTIONS } from './health-training-ue14-elements-chimiques-classification-periodique.section-a.practice-v2.author.seed';

export const UE14_CH1_ATOMES_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Quelle proposition décrit correctement un atome électriquement neutre ?`,
    choices: [
      {
        content: `Son noyau contient nécessairement autant de neutrons que de protons.`,
        correct: false,
        explanation:
          `Faux : le nombre de neutrons $\\mathrm{N}$ n'est pas nécessairement égal au nombre de protons $\\mathrm{Z}$.`,
      },
      {
        content:
          `Il possède $\\mathrm{Z}$ protons et $\\mathrm{Z}$ électrons, et la quasi-totalité de sa masse est concentrée dans le noyau.`,
        correct: true,
        explanation:
          `Vrai : la neutralité impose autant d'électrons que de protons, tandis que protons et neutrons concentrent presque toute la masse de l'atome.`,
      },
      {
        content:
          `Son nuage électronique a une dimension de l'ordre de $10^{-15}\\,\\mathrm{m}$.`,
        correct: false,
        explanation:
          `Faux : $10^{-15}\\,\\mathrm{m}$ est l'ordre de grandeur du noyau ; l'atome est de l'ordre de $10^{-10}\\,\\mathrm{m}$.`,
      },
      {
        content: `La masse d'un électron est voisine de $1\\,\\mathrm{u}$.`,
        correct: false,
        explanation:
          `Faux : la masse de l'électron est très inférieure à celle d'un nucléon, qui est voisine de $1\\,\\mathrm{u}$.`,
      },
    ],
    explanation:
      `Un atome neutre possède autant d'électrons que de protons. Les nucléons sont beaucoup plus massifs que les électrons : la quasi-totalité de la masse atomique est donc concentrée dans le noyau.`,
  },

  {
    order: 22,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Concernant les constituants de l'atome, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Le proton porte une charge positive $+e$.`,
        correct: true,
        explanation: `Vrai : la charge électrique du proton vaut $+e$.`,
      },
      {
        content:
          `Le neutron est électriquement neutre et sa masse est voisine de $1\\,\\mathrm{u}$.`,
        correct: true,
        explanation:
          `Vrai : le neutron ne porte pas de charge électrique et sa masse est voisine de celle du proton.`,
      },
      {
        content:
          `L'électron porte une charge négative $-e$ et est beaucoup plus léger qu'un nucléon.`,
        correct: true,
        explanation:
          `Vrai : l'électron porte la charge $-e$ et sa masse est très faible devant celle d'un proton ou d'un neutron.`,
      },
      {
        content: `Le noyau d'un atome neutre possède une charge électrique totale nulle.`,
        correct: false,
        explanation:
          `Faux : le noyau porte la charge positive $+\\mathrm{Z}e$. C'est l'ensemble noyau + cortège électronique qui est électriquement neutre.`,
      },
    ],
    explanation:
      `Le noyau contient les protons positifs et les neutrons neutres. Le cortège électronique est négatif. Dans un atome neutre, les charges du noyau et des électrons se compensent.`,
  },

  {
    order: 2,
    difficulty: 'EASY',
    format: 'QROC',
    question: `Combien de neutrons contient le noyau de $\\ce{^{131}_{53}I}$ ?`,
    answer: {
      type: 'number',
      value: 78,
      tolerance: 0,
    },
    explanation:
      `Le nombre de neutrons est $\\mathrm{N}=\\mathrm{A}-\\mathrm{Z}$. Pour $\\ce{^{131}_{53}I}$ : $\\mathrm{N}=131-53=78$.`,
  },

  {
    order: 11,
    difficulty: 'EASY',
    format: 'QRU',
    question:
      `Quelle relation existe entre $\\ce{^{123}_{53}I}$ et $\\ce{^{131}_{53}I}$ ?`,
    choices: [
      {
        content: `Ce sont deux nucléides isotopes d'un même élément chimique.`,
        correct: true,
        explanation:
          `Vrai : ils ont le même numéro atomique $\\mathrm{Z}=53$ mais des nombres de masse différents.`,
      },
      {
        content: `Il s'agit exactement du même nucléide.`,
        correct: false,
        explanation:
          `Faux : deux nucléides identiques doivent avoir le même $\\mathrm{Z}$ et le même $\\mathrm{A}$ ; ici $\\mathrm{A}$ vaut respectivement 123 et 131.`,
      },
      {
        content: `Ils appartiennent à deux éléments chimiques différents.`,
        correct: false,
        explanation:
          `Faux : le numéro atomique $\\mathrm{Z}$ définit l'élément chimique et vaut 53 dans les deux cas.`,
      },
      {
        content: `Ils possèdent nécessairement le même nombre de neutrons.`,
        correct: false,
        explanation:
          `Faux : à $\\mathrm{Z}$ identique, la différence de nombre de masse provient précisément d'un nombre de neutrons différent.`,
      },
    ],
    explanation:
      `Deux isotopes sont des nucléides d'un même élément chimique : ils possèdent le même nombre de protons $\\mathrm{Z}$, mais des nombres de neutrons et donc des nombres de masse $\\mathrm{A}$ différents.`,
  },

  {
    order: 12,
    difficulty: 'EASY',
    format: 'QROC',
    question:
      `Quel terme désigne un type d'atome caractérisé par un nombre $\\mathrm{Z}$ de protons et un nombre $\\mathrm{N}$ de neutrons ?`,
    answer: {
      type: 'text',
      acceptedAnswers: [
        `nucléide`,
        `un nucléide`,
      ],
      normalization: {
        trim: true,
        collapseWhitespace: true,
        caseSensitive: false,
        ignoreAccents: true,
      },
    },
    explanation:
      `Un nucléide est défini par la composition de son noyau, c'est-à-dire par $\\mathrm{Z}$ protons et $\\mathrm{N}$ neutrons. Comme $\\mathrm{A}=\\mathrm{Z}+\\mathrm{N}$, on peut aussi le caractériser par le couple $(\\mathrm{A},\\mathrm{Z})$.`,
  },

  {
    order: 13,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux égalités exactes.`,
    choices: [
      {
        content: `$1\\,\\text{Å} = 10^{-10}\\,\\mathrm{m}$.`,
        correct: true,
        explanation:
          `Vrai : l'ångström vaut $10^{-10}\\,\\mathrm{m}$, soit $0{,}1\\,\\mathrm{nm}$.`,
      },
      {
        content: `$1\\,\\mathrm{Da} = 1\\,\\mathrm{u}$.`,
        correct: true,
        explanation:
          `Vrai : le dalton (Da) et l'unité de masse atomique unifiée (u) désignent la même unité de masse.`,
      },
      {
        content: `$1\\,\\text{Å} = 10^{-15}\\,\\mathrm{m}$.`,
        correct: false,
        explanation:
          `Faux : $10^{-15}\\,\\mathrm{m}$ correspond à l'ordre de grandeur d'un noyau atomique, et non à un ångström.`,
      },
      {
        content: `$1\\,\\mathrm{nm} = 10^{-12}\\,\\mathrm{m}$.`,
        correct: false,
        explanation:
          `Faux : le préfixe nano correspond à $10^{-9}$ ; $1\\,\\mathrm{nm} = 10^{-9}\\,\\mathrm{m}$.`,
      },
    ],
    explanation:
      `Les échelles atomiques sont couramment exprimées en ångströms ou en nanomètres. Pour les masses atomiques, le dalton et l'unité de masse atomique unifiée sont équivalents.`,
  },

  {
    order: 21,
    difficulty: 'EASY',
    format: 'QRU',
    question:
      `Pour deux isotopes d'un même élément considérés sous forme d'atomes neutres, quelle proposition est correcte ?`,
    choices: [
      {
        content:
          `Leurs propriétés chimiques sont très proches, tandis que certaines propriétés physiques peuvent différer.`,
        correct: true,
        explanation:
          `Vrai : le même numéro atomique conduit à la même organisation électronique pour les atomes neutres, alors que la différence de masse peut modifier certaines propriétés physiques.`,
      },
      {
        content:
          `Leurs propriétés physiques sont identiques mais leurs propriétés chimiques sont nécessairement différentes.`,
        correct: false,
        explanation:
          `Faux : leurs propriétés chimiques sont au contraire très proches, tandis que des différences physiques liées à la masse peuvent exister.`,
      },
      {
        content: `Ils possèdent nécessairement la même stabilité nucléaire.`,
        correct: false,
        explanation:
          `Faux : des isotopes d'un même élément peuvent présenter des stabilités nucléaires différentes ; certains sont radioactifs.`,
      },
      {
        content: `Ils se distinguent par leur nombre de protons.`,
        correct: false,
        explanation:
          `Faux : des isotopes possèdent le même nombre de protons et se distinguent par leur nombre de neutrons.`,
      },
    ],
    explanation:
      `Les isotopes possèdent le même numéro atomique. Leur cortège électronique est donc identique à l'état neutre, ce qui explique des propriétés chimiques très proches, mais leur masse et leur stabilité nucléaire peuvent différer.`,
  },

  {
    order: 15,
    difficulty: 'EASY',
    format: 'QRU',
    question:
      `Un noyau a une dimension de l'ordre de $10^{-15}\\,\\mathrm{m}$ et l'atome une dimension de l'ordre de $10^{-10}\\,\\mathrm{m}$. En ordre de grandeur, la dimension de l'atome est combien de fois supérieure à celle de son noyau ?`,
    choices: [
      {
        content: `$10^2$ fois.`,
        correct: false,
        explanation: `Faux : l'écart entre les exposants est de 5, et non de 2.`,
      },
      {
        content: `$10^5$ fois.`,
        correct: true,
        explanation:
          `Vrai : $\\dfrac{10^{-10}}{10^{-15}} = 10^5$.`,
      },
      {
        content: `$10^{10}$ fois.`,
        correct: false,
        explanation:
          `Faux : il faut soustraire les exposants lors de la division : $-10 - (-15) = 5$.`,
      },
      {
        content: `$10^{15}$ fois.`,
        correct: false,
        explanation:
          `Faux : cette valeur ne correspond pas au rapport des deux ordres de grandeur.`,
      },
    ],
    explanation:
      `Le rapport des dimensions vaut $10^{-10}/10^{-15} = 10^5$. L'atome est donc environ cent mille fois plus grand que son noyau en dimension linéaire, ce qui illustre le caractère très lacunaire de la matière.`,
  },

  {
    order: 3,
    difficulty: 'EASY',
    format: 'QRM',
    question:
      `Dans la classification simplifiée des nucléides et éléments retenue dans le cours, quelles propositions sont exactes ?`,
    choices: [
      {
        content:
          `L'uranium, de numéro atomique $\\mathrm{Z}=92$, est classé parmi les éléments naturels.`,
        correct: true,
        explanation:
          `Vrai : le cours retient l'uranium ($\\mathrm{Z}=92$) comme limite supérieure des éléments naturels.`,
      },
      {
        content:
          `Les éléments de numéro atomique $\\mathrm{Z}>92$ sont classés parmi les éléments artificiels transuraniens.`,
        correct: true,
        explanation:
          `Vrai : au-delà de l'uranium, le cours les classe comme éléments artificiels transuraniens.`,
      },
      {
        content: `Tous les nucléides naturels sont stables.`,
        correct: false,
        explanation:
          `Faux : il existe des nucléides naturellement présents qui sont radioactifs.`,
      },
      {
        content: `Tout nucléide radioactif est nécessairement artificiel.`,
        correct: false,
        explanation:
          `Faux : la radioactivité peut être naturelle ; le caractère radioactif ne suffit donc pas à conclure qu'un nucléide est artificiel.`,
      },
    ],
    explanation:
      `Dans le cadrage du cours, les éléments jusqu'à l'uranium ($\\mathrm{Z}=92$) relèvent des éléments naturels et les éléments au-delà de $\\mathrm{Z}=92$ des transuraniens artificiels. Naturel ne signifie toutefois pas stable.`,
  },

  {
    order: 4,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question:
      `Un échantillon de bore contient 20 % de $\\ce{^{10}B}$ de masse $10\\,\\mathrm{u}$ et 80 % de $\\ce{^{11}B}$ de masse $11\\,\\mathrm{u}$. Quelle est sa masse atomique moyenne ? Saisissez uniquement la valeur numérique, la masse étant exprimée en $\\mathrm{u}$.`,
    answer: {
      type: 'number',
      value: 10.8,
      tolerance: 0.01,
    },
    explanation:
      `La masse atomique moyenne est une moyenne pondérée par les abondances isotopiques : $0{,}20 \\times 10 + 0{,}80 \\times 11 = 10{,}8\\,\\mathrm{u}$. Une masse atomique moyenne n'est donc pas nécessairement entière.`,
  },
];

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  ...UE14_CH1_ATOMES_DISCOVER_V2_QUESTIONS,
  ...UE14_CH1_ATOMES_PRACTICE_V2_QUESTIONS,
];
