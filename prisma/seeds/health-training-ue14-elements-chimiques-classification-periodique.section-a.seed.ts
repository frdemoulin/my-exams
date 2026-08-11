import type { HealthTrainingAuthorQuestion, SeedQuestion } from './health-training-ue14.shared';

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
    question: `Combien de neutrons contient le noyau de $^{131}_{53}\\mathrm{I}$ ?`,
    answer: {
      type: 'number',
      value: 78,
      tolerance: 0,
    },
    explanation:
      `Le nombre de neutrons est $\\mathrm{N}=\\mathrm{A}-\\mathrm{Z}$. Pour $^{131}_{53}\\mathrm{I}$ : $\\mathrm{N}=131-53=78$.`,
  },

  {
    order: 11,
    difficulty: 'EASY',
    format: 'QRU',
    question:
      `Quelle relation existe entre $^{123}_{53}\\mathrm{I}$ et $^{131}_{53}\\mathrm{I}$ ?`,
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
      `Un échantillon de bore contient 20 % de $^{10}\\mathrm{B}$ de masse $10\\,\\mathrm{u}$ et 80 % de $^{11}\\mathrm{B}$ de masse $11\\,\\mathrm{u}$. Quelle est sa masse atomique moyenne ? Saisissez uniquement la valeur numérique, la masse étant exprimée en $\\mathrm{u}$.`,
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
      `Les isotopes d'un même élément ont des propriétés chimiques très voisines, car leurs configurations électroniques sont identiques pour les atomes neutres. Leurs propriétés physiques peuvent en revanche différer, notamment en raison de leur masse et de leur stabilité nucléaire.`,
    choiceExplanations: [
      `Les propriétés chimiques sont voisines, mais les propriétés physiques ne sont pas considérées comme équivalentes dans la distinction attendue.`,
      `La différence de masse porte surtout sur les propriétés physiques ; elle ne rend pas les propriétés chimiques radicalement différentes.`,
      `C'est la distinction attendue : les propriétés physiques peuvent différer, tandis que les propriétés chimiques restent très voisines.`,
      `Les isotopes ne diffèrent pas fortement sur les deux plans : leur même configuration électronique conserve des propriétés chimiques proches.`,
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
    order: 23,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'unité de masse atomique :`,
    choices: [
      `Elle est définie comme le douzième de la masse d'un atome de carbone 12.`,
      `Son symbole usuel est $u$.`,
      `Dans l'usage biochimique courant, $1\\,\\mathrm{Da}$ est assimilé à $1\\,u$.`,
      `La masse d'un proton est exactement égale à $1\\,u$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'unité de masse atomique unifiée (u) est égale par définition à $1/12$ de la masse d'un atome de carbone 12. Le dalton (Da) est utilisé comme synonyme en biochimie. La masse d'un proton est très voisine de $1\\,u$, mais lui est légèrement supérieure ($1{,}0073\\,u$).`,
    choiceExplanations: [
      `L'unité de masse atomique unifiée est définie par rapport au carbone 12 : $1\\,u = m(^{12}\\mathrm{C})/12$.`,
      `Le symbole officiel de l'unité de masse atomique unifiée est $u$.`,
      `Le dalton, symbole $\\mathrm{Da}$, est couramment utilisé en biochimie et correspond exactement à la même masse que $1\\,u$.`,
      `La masse du proton est très proche de $1\\,u$, mais vaut $1{,}0073\\,u$ : elle n'est pas strictly égale à $1\\,u$.`,
    ],
  },
  {
    order: 24,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos des ordres de grandeur et des unités :`,
    choices: [
      `La taille d'une cellule eucaryote est de l'ordre de $10\\,\\mathrm{\\mu m}$.`,
      `Une liaison chimique covalente mesure environ $1{,}5\\,\\text{Å}$.`,
      `Un petit peptide a une dimension caractéristique de l'ordre du nanomètre.`,
      `La taille d'une cellule eucaryote vaut environ $100\\,000\\,\\text{Å}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Tous les ordres de grandeur proposés sont exacts : une cellule de $10\\,\\mathrm{\\mu m}$ mesure $10^{-5}\\,\\mathrm{m}$, soit $100\\,000\\,\\text{Å}$ ($10^{-10}\\,\\mathrm{m}$). Une liaison mesure autour de $1{,}5\\,\\text{Å}$ et un petit peptide de quelques acides aminés mesure de l'ordre du nanomètre ($10\\,\\text{Å}$).`,
    choiceExplanations: [
      `Une cellule eucaryote mesure typiquement entre 10 et $100\\,\\mathrm{\\mu m}$ : $10\\,\\mathrm{\\mu m}$ est un ordre de grandeur représentatif.`,
      `Les longueurs de liaison covalente usuelles se situent entre $1{,}0$ et $1{,}8\\,\\text{Å}$ ; $1{,}5\\,\\text{Å}$ est très représentatif.`,
      `Un petit peptide mesure couramment entre 1 et $3\\,\\mathrm{nm}$, ce qui correspond bien à l'ordre de grandeur du nanomètre.`,
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
];
