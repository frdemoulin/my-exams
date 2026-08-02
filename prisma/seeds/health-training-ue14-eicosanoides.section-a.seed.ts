import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "1": [
    "définition des eicosanoïdes"
  ],
  "2": [
    "familles d’eicosanoïdes"
  ],
  "3": [
    "l’acide arachidonique"
  ],
  "4": [
    "la nomenclature de l’acide arachidonique"
  ],
  "5": [
    "l’origine de l’acide arachidonique"
  ],
  "6": [
    "la voie de la cyclo-oxygénase"
  ],
  "7": [
    "la voie de la 5-lipoxygénase"
  ],
  "8": [
    "la voie de la 15-lipoxygénase"
  ],
  "9": [
    "les abréviations des familles"
  ],
  "10": [
    "l’organisation générale des voies"
  ],
  "11": [
    "définition des eicosanoïdes"
  ],
  "12": [
    "familles d’eicosanoïdes"
  ],
  "13": [
    "l’acide arachidonique"
  ],
  "14": [
    "la nomenclature de l’acide arachidonique"
  ],
  "15": [
    "l’origine de l’acide arachidonique"
  ],
  "16": [
    "la voie de la cyclo-oxygénase"
  ],
  "17": [
    "la voie de la 5-lipoxygénase"
  ],
  "18": [
    "la voie de la 15-lipoxygénase"
  ],
  "19": [
    "les abréviations des familles"
  ],
  "20": [
    "l’organisation générale des voies"
  ],
  "21": [
    "définition des eicosanoïdes"
  ],
  "22": [
    "familles d’eicosanoïdes"
  ],
  "23": [
    "l’acide arachidonique"
  ],
  "24": [
    "la nomenclature de l’acide arachidonique"
  ],
  "25": [
    "l’origine de l’acide arachidonique"
  ],
  "26": [
    "la voie de la cyclo-oxygénase"
  ],
  "27": [
    "la voie de la 5-lipoxygénase"
  ],
  "28": [
    "la voie de la 15-lipoxygénase"
  ],
  "29": [
    "les abréviations des familles"
  ],
  "30": [
    "l’organisation générale des voies"
  ]
};

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "familles-et-acide-arachidonique",
    "title": "Familles et acide arachidonique",
    "description": "Identifier les eicosanoïdes et leur principal précurseur.",
    "stage": "DISCOVER",
    "sectionOrder": 1,
    "questionOrders": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "order": 2,
    "slug": "voies-cox-et-lipoxygenases",
    "title": "Voies COX et lipoxygénases",
    "description": "Distinguer les branches de synthèse et lire la nomenclature du précurseur.",
    "stage": "PRACTICE",
    "sectionOrder": 1,
    "questionOrders": [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "order": 3,
    "slug": "raisonnement-sur-les-voies-des-eicosanoides",
    "title": "Raisonnement sur les voies des eicosanoïdes",
    "description": "Analyser précurseur, enzymes et familles.",
    "stage": "MASTER",
    "sectionOrder": 1,
    "items": [
      {
        "type": "GROUP",
        "title": "Précurseur et nomenclature",
        "sharedStatement": "Les questions suivantes portent sur l’acide arachidonique et ses repères structuraux.",
        "questionOrders": [
          21,
          22,
          23
        ]
      },
      {
        "type": "GROUP",
        "title": "Origine et enzymes",
        "sharedStatement": "Les questions suivantes comparent les sources et les voies enzymatiques.",
        "questionOrders": [
          24,
          25,
          26
        ]
      },
      {
        "type": "GROUP",
        "title": "Arbre des familles",
        "sharedStatement": "Les questions suivantes mobilisent les abréviations et l’organisation générale des voies.",
        "questionOrders": [
          27,
          28,
          29,
          30
        ]
      }
    ]
  }
];

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de définition des eicosanoïdes :",
    "choices": [
      "Ils regroupent des composés à 20 atomes de carbone.",
      "Ils dérivent notamment de l’acide arachidonique ou d’acides gras voisins.",
      "Ils sont définis comme des protéines dépourvues de lipides.",
      "Ils possèdent d’importantes fonctions biologiques."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les eicosanoïdes sont des médiateurs lipidiques C20 dérivés notamment de l’acide arachidonique.",
    "choiceExplanations": [
      "Vrai. Le nombre de 20 carbones est au cœur de la définition donnée.",
      "Vrai. L’acide arachidonique est le précurseur majeur présenté.",
      "Faux. Ils dérivent d’acides gras et appartiennent au domaine lipidique.",
      "Vrai. La fiche souligne explicitement leur importance biologique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-overview"
    }
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de familles d’eicosanoïdes :",
    "choices": [
      "Les prostaglandines et les thromboxanes sont des prostanoïdes.",
      "Les leucotriènes appartiennent aux eicosanoïdes.",
      "Les leucotriènes sont classés parmi les protéines contractiles.",
      "Les lipoxines appartiennent aux eicosanoïdes."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le chapitre distingue prostanoïdes, leucotriènes et lipoxines.",
    "choiceExplanations": [
      "Vrai. Ces deux familles forment l’ensemble des prostanoïdes.",
      "Vrai. Ils sont formés par la voie de la 5-lipoxygénase.",
      "Faux. Ce sont des médiateurs lipidiques.",
      "Vrai. Elles sont rattachées aux voies des lipoxygénases."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-overview"
    }
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’acide arachidonique :",
    "choices": [
      "Il comporte 20 atomes de carbone.",
      "Il possède quatre doubles liaisons.",
      "Il s’agit d’un acide gras saturé.",
      "Il constitue un précurseur majeur des eicosanoïdes."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "L’acide arachidonique est le précurseur polydésaturé C20:4 central du chapitre.",
    "choiceExplanations": [
      "Vrai. La fiche le décrit comme un acide gras C20.",
      "Vrai. Sa notation est 20:4.",
      "Faux. Quatre doubles liaisons le rendent polydésaturé.",
      "Vrai. Il alimente les voies COX et lipoxygénases."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "arachidonic-acid-20-4"
    }
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la nomenclature de l’acide arachidonique :",
    "choices": [
      "Son nom systématique est acide toutes-cis-5,8,11,14-eicosatétraénoïque.",
      "Sa notation peut s’écrire 20:4;5,8,11,14.",
      "La notation 20:4 signifie 20 doubles liaisons et 4 carbones.",
      "Il appartient à la série ω6 ou n-6."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Longueur de chaîne, positions Δ, configuration cis et série oméga décrivent la même molécule.",
    "choiceExplanations": [
      "Vrai. Ce nom est donné dans la fiche.",
      "Vrai. Les quatre positions des doubles liaisons sont précisées.",
      "Faux. Le premier nombre est le nombre de carbones et le second le nombre de doubles liaisons.",
      "Vrai. La fiche donne les deux notations équivalentes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "arachidonic-acid-20-4"
    }
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’origine de l’acide arachidonique :",
    "choices": [
      "Il provient notamment de l’alimentation.",
      "Il peut être libéré par clivage des phospholipides membranaires.",
      "Il provient exclusivement de la dégradation des protéines.",
      "Le précurseur libéré peut ensuite alimenter plusieurs voies enzymatiques."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La fiche retient une origine alimentaire et une origine membranaire de l’acide arachidonique.",
    "choiceExplanations": [
      "Vrai. L’alimentation est l’une des principales sources citées.",
      "Vrai. La source membranaire est explicitement présentée.",
      "Faux. Cette origine n’est pas donnée dans la fiche.",
      "Vrai. La COX et les lipoxygénases utilisent ce précurseur."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la voie de la cyclo-oxygénase :",
    "choices": [
      "La cyclo-oxygénase est abrégée COX.",
      "La voie COX conduit aux prostanoïdes.",
      "La COX forme directement LTA₄ dans le schéma.",
      "La voie utilise l’acide arachidonique comme précurseur dans le schéma."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La voie COX relie l’acide arachidonique aux prostaglandines et aux thromboxanes.",
    "choiceExplanations": [
      "Vrai. Cette abréviation est employée dans le cours.",
      "Vrai. Prostaglandines et thromboxanes appartiennent à cette branche.",
      "Faux. LTA₄ dépend de la 5-lipoxygénase.",
      "Vrai. Il est placé en amont de la COX."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la voie de la 5-lipoxygénase :",
    "choices": [
      "Elle participe à la formation des leucotriènes.",
      "Elle permet la formation de LTA₄ à partir de l’acide arachidonique.",
      "Elle correspond à la thromboxane synthase.",
      "Elle appartient à une voie distincte de la COX."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La 5-lipoxygénase initie la voie des leucotriènes à partir de l’acide arachidonique.",
    "choiceExplanations": [
      "Vrai. La voie leucotriène est rattachée à cette enzyme.",
      "Vrai. Cette étape est détaillée dans la fiche.",
      "Faux. Il s’agit de deux enzymes différentes.",
      "Vrai. Les deux branches enzymatiques sont séparées."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la voie de la 15-lipoxygénase :",
    "choices": [
      "Elle est associée à la formation de lipoxines.",
      "Elle intervient dans la formation de LXA₄ à partir de LTA₄ dans la voie détaillée.",
      "Elle est l’enzyme indiquée pour former TXA₂ à partir de PGH₂.",
      "Elle est distincte de la 5-lipoxygénase."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La 15-lipoxygénase oriente notamment la synthèse vers les lipoxines.",
    "choiceExplanations": [
      "Vrai. Le schéma général relie cette enzyme aux lipoxines.",
      "Vrai. Cette branche est explicitement représentée.",
      "Faux. Cette réaction relève de la thromboxane synthase.",
      "Vrai. Les deux enzymes conduisent à des branches différentes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les abréviations des familles :",
    "choices": [
      "PG désigne les prostaglandines.",
      "TX désigne les thromboxanes.",
      "PG désigne les phospholipides membranaires dans ce chapitre.",
      "LT et LX désignent respectivement leucotriènes et lipoxines."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les abréviations PG, TX, LT et LX permettent d’identifier les principales familles.",
    "choiceExplanations": [
      "Vrai. Cette abréviation est utilisée dans la nomenclature.",
      "Vrai. Le symbole TXA₂ est présenté.",
      "Faux. PG est utilisé pour prostaglandine.",
      "Vrai. Les deux préfixes permettent de distinguer les familles."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-overview"
    }
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’organisation générale des voies :",
    "choices": [
      "L’acide arachidonique se situe en amont de plusieurs branches.",
      "La COX conduit aux prostaglandines et thromboxanes.",
      "Toutes les familles sont formées par une seule enzyme sans ramification.",
      "Les lipoxygénases conduisent aux leucotriènes et lipoxines."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La synthèse des eicosanoïdes s’organise autour d’un précurseur commun et de voies enzymatiques distinctes.",
    "choiceExplanations": [
      "Vrai. Il est le précurseur central représenté.",
      "Vrai. Ces deux familles sont les prostanoïdes.",
      "Faux. Le schéma montre plusieurs enzymes et plusieurs branches.",
      "Vrai. Ces branches sont distinguées de la COX."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur définition des eicosanoïdes, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Ils sont définis comme des protéines dépourvues de lipides.",
      "Ils regroupent des composés à 20 atomes de carbone.",
      "Ils possèdent d’importantes fonctions biologiques.",
      "Ils dérivent notamment de l’acide arachidonique ou d’acides gras voisins."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les eicosanoïdes sont des médiateurs lipidiques C20 dérivés notamment de l’acide arachidonique.",
    "choiceExplanations": [
      "Faux. Ils dérivent d’acides gras et appartiennent au domaine lipidique.",
      "Vrai. Le nombre de 20 carbones est au cœur de la définition donnée.",
      "Vrai. La fiche souligne explicitement leur importance biologique.",
      "Vrai. L’acide arachidonique est le précurseur majeur présenté."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-overview"
    }
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur familles d’eicosanoïdes, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Les leucotriènes sont classés parmi les protéines contractiles.",
      "Les prostaglandines et les thromboxanes sont des prostanoïdes.",
      "Les lipoxines appartiennent aux eicosanoïdes.",
      "Les leucotriènes appartiennent aux eicosanoïdes."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le chapitre distingue prostanoïdes, leucotriènes et lipoxines.",
    "choiceExplanations": [
      "Faux. Ce sont des médiateurs lipidiques.",
      "Vrai. Ces deux familles forment l’ensemble des prostanoïdes.",
      "Vrai. Elles sont rattachées aux voies des lipoxygénases.",
      "Vrai. Ils sont formés par la voie de la 5-lipoxygénase."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-overview"
    }
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur l’acide arachidonique, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Il s’agit d’un acide gras saturé.",
      "Il comporte 20 atomes de carbone.",
      "Il constitue un précurseur majeur des eicosanoïdes.",
      "Il possède quatre doubles liaisons."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’acide arachidonique est le précurseur polydésaturé C20:4 central du chapitre.",
    "choiceExplanations": [
      "Faux. Quatre doubles liaisons le rendent polydésaturé.",
      "Vrai. La fiche le décrit comme un acide gras C20.",
      "Vrai. Il alimente les voies COX et lipoxygénases.",
      "Vrai. Sa notation est 20:4."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "arachidonic-acid-20-4"
    }
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la nomenclature de l’acide arachidonique, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "La notation 20:4 signifie 20 doubles liaisons et 4 carbones.",
      "Son nom systématique est acide toutes-cis-5,8,11,14-eicosatétraénoïque.",
      "Il appartient à la série ω6 ou n-6.",
      "Sa notation peut s’écrire 20:4;5,8,11,14."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Longueur de chaîne, positions Δ, configuration cis et série oméga décrivent la même molécule.",
    "choiceExplanations": [
      "Faux. Le premier nombre est le nombre de carbones et le second le nombre de doubles liaisons.",
      "Vrai. Ce nom est donné dans la fiche.",
      "Vrai. La fiche donne les deux notations équivalentes.",
      "Vrai. Les quatre positions des doubles liaisons sont précisées."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "arachidonic-acid-20-4"
    }
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur l’origine de l’acide arachidonique, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Il provient exclusivement de la dégradation des protéines.",
      "Il provient notamment de l’alimentation.",
      "Le précurseur libéré peut ensuite alimenter plusieurs voies enzymatiques.",
      "Il peut être libéré par clivage des phospholipides membranaires."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La fiche retient une origine alimentaire et une origine membranaire de l’acide arachidonique.",
    "choiceExplanations": [
      "Faux. Cette origine n’est pas donnée dans la fiche.",
      "Vrai. L’alimentation est l’une des principales sources citées.",
      "Vrai. La COX et les lipoxygénases utilisent ce précurseur.",
      "Vrai. La source membranaire est explicitement présentée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Un schéma métabolique place la COX en aval de l’acide arachidonique. Quelles propositions sont exactes ?",
    "choices": [
      "La COX forme directement LTA₄ dans le schéma.",
      "La cyclo-oxygénase est abrégée COX.",
      "La voie utilise l’acide arachidonique comme précurseur dans le schéma.",
      "La voie COX conduit aux prostanoïdes."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La voie COX relie l’acide arachidonique aux prostaglandines et aux thromboxanes.",
    "choiceExplanations": [
      "Faux. LTA₄ dépend de la 5-lipoxygénase.",
      "Vrai. Cette abréviation est employée dans le cours.",
      "Vrai. Il est placé en amont de la COX.",
      "Vrai. Prostaglandines et thromboxanes appartiennent à cette branche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la voie de la 5-lipoxygénase, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Elle correspond à la thromboxane synthase.",
      "Elle participe à la formation des leucotriènes.",
      "Elle appartient à une voie distincte de la COX.",
      "Elle permet la formation de LTA₄ à partir de l’acide arachidonique."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La 5-lipoxygénase initie la voie des leucotriènes à partir de l’acide arachidonique.",
    "choiceExplanations": [
      "Faux. Il s’agit de deux enzymes différentes.",
      "Vrai. La voie leucotriène est rattachée à cette enzyme.",
      "Vrai. Les deux branches enzymatiques sont séparées.",
      "Vrai. Cette étape est détaillée dans la fiche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la voie de la 15-lipoxygénase, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Elle est l’enzyme indiquée pour former TXA₂ à partir de PGH₂.",
      "Elle est associée à la formation de lipoxines.",
      "Elle est distincte de la 5-lipoxygénase.",
      "Elle intervient dans la formation de LXA₄ à partir de LTA₄ dans la voie détaillée."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La 15-lipoxygénase oriente notamment la synthèse vers les lipoxines.",
    "choiceExplanations": [
      "Faux. Cette réaction relève de la thromboxane synthase.",
      "Vrai. Le schéma général relie cette enzyme aux lipoxines.",
      "Vrai. Les deux enzymes conduisent à des branches différentes.",
      "Vrai. Cette branche est explicitement représentée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur les abréviations des familles, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "PG désigne les phospholipides membranaires dans ce chapitre.",
      "PG désigne les prostaglandines.",
      "LT et LX désignent respectivement leucotriènes et lipoxines.",
      "TX désigne les thromboxanes."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les abréviations PG, TX, LT et LX permettent d’identifier les principales familles.",
    "choiceExplanations": [
      "Faux. PG est utilisé pour prostaglandine.",
      "Vrai. Cette abréviation est utilisée dans la nomenclature.",
      "Vrai. Les deux préfixes permettent de distinguer les familles.",
      "Vrai. Le symbole TXA₂ est présenté."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-overview"
    }
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur l’organisation générale des voies, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Toutes les familles sont formées par une seule enzyme sans ramification.",
      "L’acide arachidonique se situe en amont de plusieurs branches.",
      "Les lipoxygénases conduisent aux leucotriènes et lipoxines.",
      "La COX conduit aux prostaglandines et thromboxanes."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La synthèse des eicosanoïdes s’organise autour d’un précurseur commun et de voies enzymatiques distinctes.",
    "choiceExplanations": [
      "Faux. Le schéma montre plusieurs enzymes et plusieurs branches.",
      "Vrai. Il est le précurseur central représenté.",
      "Vrai. Ces branches sont distinguées de la COX.",
      "Vrai. Ces deux familles sont les prostanoïdes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse définition des eicosanoïdes. Quelles conclusions sont exactes ?",
    "choices": [
      "Ils possèdent d’importantes fonctions biologiques.",
      "Ils sont définis comme des protéines dépourvues de lipides.",
      "Ils dérivent notamment de l’acide arachidonique ou d’acides gras voisins.",
      "Ils regroupent des composés à 20 atomes de carbone."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les eicosanoïdes sont des médiateurs lipidiques C20 dérivés notamment de l’acide arachidonique.",
    "choiceExplanations": [
      "Vrai. La fiche souligne explicitement leur importance biologique.",
      "Faux. Ils dérivent d’acides gras et appartiennent au domaine lipidique.",
      "Vrai. L’acide arachidonique est le précurseur majeur présenté.",
      "Vrai. Le nombre de 20 carbones est au cœur de la définition donnée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-overview"
    }
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse familles d’eicosanoïdes. Quelles conclusions sont exactes ?",
    "choices": [
      "Les lipoxines appartiennent aux eicosanoïdes.",
      "Les leucotriènes sont classés parmi les protéines contractiles.",
      "Les leucotriènes appartiennent aux eicosanoïdes.",
      "Les prostaglandines et les thromboxanes sont des prostanoïdes."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le chapitre distingue prostanoïdes, leucotriènes et lipoxines.",
    "choiceExplanations": [
      "Vrai. Elles sont rattachées aux voies des lipoxygénases.",
      "Faux. Ce sont des médiateurs lipidiques.",
      "Vrai. Ils sont formés par la voie de la 5-lipoxygénase.",
      "Vrai. Ces deux familles forment l’ensemble des prostanoïdes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-overview"
    }
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse l’acide arachidonique. Quelles conclusions sont exactes ?",
    "choices": [
      "Il constitue un précurseur majeur des eicosanoïdes.",
      "Il s’agit d’un acide gras saturé.",
      "Il possède quatre doubles liaisons.",
      "Il comporte 20 atomes de carbone."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’acide arachidonique est le précurseur polydésaturé C20:4 central du chapitre.",
    "choiceExplanations": [
      "Vrai. Il alimente les voies COX et lipoxygénases.",
      "Faux. Quatre doubles liaisons le rendent polydésaturé.",
      "Vrai. Sa notation est 20:4.",
      "Vrai. La fiche le décrit comme un acide gras C20."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "arachidonic-acid-20-4"
    }
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la nomenclature de l’acide arachidonique. Quelles conclusions sont exactes ?",
    "choices": [
      "Il appartient à la série ω6 ou n-6.",
      "La notation 20:4 signifie 20 doubles liaisons et 4 carbones.",
      "Sa notation peut s’écrire 20:4;5,8,11,14.",
      "Son nom systématique est acide toutes-cis-5,8,11,14-eicosatétraénoïque."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Longueur de chaîne, positions Δ, configuration cis et série oméga décrivent la même molécule.",
    "choiceExplanations": [
      "Vrai. La fiche donne les deux notations équivalentes.",
      "Faux. Le premier nombre est le nombre de carbones et le second le nombre de doubles liaisons.",
      "Vrai. Les quatre positions des doubles liaisons sont précisées.",
      "Vrai. Ce nom est donné dans la fiche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "arachidonic-acid-20-4"
    }
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse l’origine de l’acide arachidonique. Quelles conclusions sont exactes ?",
    "choices": [
      "Le précurseur libéré peut ensuite alimenter plusieurs voies enzymatiques.",
      "Il provient exclusivement de la dégradation des protéines.",
      "Il peut être libéré par clivage des phospholipides membranaires.",
      "Il provient notamment de l’alimentation."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La fiche retient une origine alimentaire et une origine membranaire de l’acide arachidonique.",
    "choiceExplanations": [
      "Vrai. La COX et les lipoxygénases utilisent ce précurseur.",
      "Faux. Cette origine n’est pas donnée dans la fiche.",
      "Vrai. La source membranaire est explicitement présentée.",
      "Vrai. L’alimentation est l’une des principales sources citées."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une expérimentation bloque la COX. Quelles branches sont directement concernées selon la fiche ?",
    "choices": [
      "La voie utilise l’acide arachidonique comme précurseur dans le schéma.",
      "La COX forme directement LTA₄ dans le schéma.",
      "La voie COX conduit aux prostanoïdes.",
      "La cyclo-oxygénase est abrégée COX."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La voie COX relie l’acide arachidonique aux prostaglandines et aux thromboxanes.",
    "choiceExplanations": [
      "Vrai. Il est placé en amont de la COX.",
      "Faux. LTA₄ dépend de la 5-lipoxygénase.",
      "Vrai. Prostaglandines et thromboxanes appartiennent à cette branche.",
      "Vrai. Cette abréviation est employée dans le cours."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 27,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la voie de la 5-lipoxygénase. Quelles conclusions sont exactes ?",
    "choices": [
      "Elle appartient à une voie distincte de la COX.",
      "Elle correspond à la thromboxane synthase.",
      "Elle permet la formation de LTA₄ à partir de l’acide arachidonique.",
      "Elle participe à la formation des leucotriènes."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La 5-lipoxygénase initie la voie des leucotriènes à partir de l’acide arachidonique.",
    "choiceExplanations": [
      "Vrai. Les deux branches enzymatiques sont séparées.",
      "Faux. Il s’agit de deux enzymes différentes.",
      "Vrai. Cette étape est détaillée dans la fiche.",
      "Vrai. La voie leucotriène est rattachée à cette enzyme."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la voie de la 15-lipoxygénase. Quelles conclusions sont exactes ?",
    "choices": [
      "Elle est distincte de la 5-lipoxygénase.",
      "Elle est l’enzyme indiquée pour former TXA₂ à partir de PGH₂.",
      "Elle intervient dans la formation de LXA₄ à partir de LTA₄ dans la voie détaillée.",
      "Elle est associée à la formation de lipoxines."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La 15-lipoxygénase oriente notamment la synthèse vers les lipoxines.",
    "choiceExplanations": [
      "Vrai. Les deux enzymes conduisent à des branches différentes.",
      "Faux. Cette réaction relève de la thromboxane synthase.",
      "Vrai. Cette branche est explicitement représentée.",
      "Vrai. Le schéma général relie cette enzyme aux lipoxines."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse les abréviations des familles. Quelles conclusions sont exactes ?",
    "choices": [
      "LT et LX désignent respectivement leucotriènes et lipoxines.",
      "PG désigne les phospholipides membranaires dans ce chapitre.",
      "TX désigne les thromboxanes.",
      "PG désigne les prostaglandines."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les abréviations PG, TX, LT et LX permettent d’identifier les principales familles.",
    "choiceExplanations": [
      "Vrai. Les deux préfixes permettent de distinguer les familles.",
      "Faux. PG est utilisé pour prostaglandine.",
      "Vrai. Le symbole TXA₂ est présenté.",
      "Vrai. Cette abréviation est utilisée dans la nomenclature."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-overview"
    }
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse l’organisation générale des voies. Quelles conclusions sont exactes ?",
    "choices": [
      "Les lipoxygénases conduisent aux leucotriènes et lipoxines.",
      "Toutes les familles sont formées par une seule enzyme sans ramification.",
      "La COX conduit aux prostaglandines et thromboxanes.",
      "L’acide arachidonique se situe en amont de plusieurs branches."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La synthèse des eicosanoïdes s’organise autour d’un précurseur commun et de voies enzymatiques distinctes.",
    "choiceExplanations": [
      "Vrai. Ces branches sont distinguées de la COX.",
      "Faux. Le schéma montre plusieurs enzymes et plusieurs branches.",
      "Vrai. Ces deux familles sont les prostanoïdes.",
      "Vrai. Il est le précurseur central représenté."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  }
];
