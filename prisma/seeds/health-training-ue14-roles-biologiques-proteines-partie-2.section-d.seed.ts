import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "91": [
    "les glycoprotéines matricielles"
  ],
  "92": [
    "la fibronectine"
  ],
  "93": [
    "la laminine"
  ],
  "94": [
    "les constituants du cytosquelette"
  ],
  "95": [
    "l’actine et les microtubules"
  ],
  "96": [
    "les glycoprotéines matricielles"
  ],
  "97": [
    "la fibronectine"
  ],
  "98": [
    "la laminine"
  ],
  "99": [
    "les constituants du cytosquelette"
  ],
  "100": [
    "l’actine et les microtubules"
  ],
  "101": [
    "les glycoprotéines matricielles"
  ],
  "102": [
    "la fibronectine"
  ],
  "103": [
    "la laminine"
  ],
  "104": [
    "les constituants du cytosquelette"
  ],
  "105": [
    "l’actine et les microtubules"
  ],
  "106": [
    "les glycoprotéines matricielles"
  ],
  "107": [
    "la fibronectine"
  ],
  "108": [
    "la laminine"
  ],
  "109": [
    "les constituants du cytosquelette"
  ],
  "110": [
    "l’actine et les microtubules"
  ],
  "111": [
    "les glycoprotéines matricielles"
  ],
  "112": [
    "la fibronectine"
  ],
  "113": [
    "la laminine"
  ],
  "114": [
    "les constituants du cytosquelette"
  ],
  "115": [
    "l’actine et les microtubules"
  ],
  "116": [
    "les glycoprotéines matricielles"
  ],
  "117": [
    "la fibronectine"
  ],
  "118": [
    "la laminine"
  ],
  "119": [
    "les constituants du cytosquelette"
  ],
  "120": [
    "l’actine et les microtubules"
  ]
};

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "glycoproteines-cytosquelette-1",
    "title": "Glycoprotéines de la matrice",
    "description": "Identifier les notions essentielles.",
    "stage": "DISCOVER",
    "sectionOrder": 4,
    "questionOrders": [
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100
    ]
  },
  {
    "order": 2,
    "slug": "glycoproteines-cytosquelette-2",
    "title": "Fibronectine et laminine",
    "description": "Appliquer et comparer les notions du cours.",
    "stage": "PRACTICE",
    "sectionOrder": 4,
    "questionOrders": [
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110
    ]
  },
  {
    "order": 3,
    "slug": "glycoproteines-cytosquelette-3",
    "title": "Cytosquelette, actine et microtubules",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 4,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères essentiels",
        "sharedStatement": "Les questions suivantes portent sur les principaux repères de la section.",
        "questionOrders": [
          111,
          112,
          113
        ]
      },
      {
        "type": "GROUP",
        "title": "Structure et fonction",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          114,
          115,
          116
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications",
        "sharedStatement": "Les questions suivantes mobilisent les notions dans des situations biologiques ou médicales.",
        "questionOrders": [
          117,
          118,
          119,
          120
        ]
      }
    ]
  }
];

export const SECTION_D_QUESTIONS: SeedQuestion[] = [
  {
    "order": 91,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les glycoprotéines matricielles :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "matrix-glycoproteins"
    },
    "choices": [
      "Fibronectines, laminines, tenascines et vitronectine sont citées.",
      "Elles sont toujours de faible masse moléculaire.",
      "Elles participent aux interactions cellule-matrice.",
      "Elles possèdent des domaines structuraux communs."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les glycoprotéines matricielles sont des protéines modulaires et glycosylées d’adhérence.",
    "choiceExplanations": [
      "Vrai. Fibronectines, laminines, tenascines et vitronectine sont citées.",
      "Faux. La fiche les décrit généralement de masse élevée.",
      "Vrai. Elles participent aux interactions cellule-matrice.",
      "Vrai. Elles possèdent des domaines structuraux communs."
    ]
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la fibronectine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fibronectin"
    },
    "choices": [
      "Elle est un dimère de deux chaînes d’environ 235 kDa.",
      "Elle ne se lie à aucune cellule.",
      "Les chaînes sont reliées par leur extrémité C-terminale.",
      "Elle reste exclusivement soluble et ne polymérise jamais."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La fibronectine est une glycoprotéine dimérique reliant cellules, fibrine et matrice.",
    "choiceExplanations": [
      "Vrai. Elle est un dimère de deux chaînes d’environ 235 kDa.",
      "Faux. Les intégrines constituent des récepteurs cellulaires.",
      "Vrai. Les chaînes sont reliées par leur extrémité C-terminale.",
      "Faux. Elle peut former un réseau insoluble à la surface cellulaire."
    ]
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la laminine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "laminin"
    },
    "choices": [
      "Les chaînes forment une structure en croix.",
      "Elle possède trois chaînes α, β et γ.",
      "La laminine est un homodimère de deux chaînes identiques.",
      "Elle est très importante dans les membranes basales."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La laminine est une glycoprotéine hétérotrimérique en croix des membranes basales.",
    "choiceExplanations": [
      "Vrai. Les chaînes forment une structure en croix.",
      "Vrai. Elle possède trois chaînes α, β et γ.",
      "Faux. Elle possède trois chaînes différentes.",
      "Vrai. Elle est très importante dans les membranes basales."
    ]
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les constituants du cytosquelette :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytoskeleton-overview"
    },
    "choices": [
      "Les trois systèmes sont filaments d’actine, filaments intermédiaires et microtubules.",
      "Les mutations du cytosquelette ne provoquent aucune pathologie.",
      "Ils participent à l’architecture cellulaire.",
      "Le cytosquelette est formé uniquement de phospholipides."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le cytosquelette organise la forme, les forces et les transports intracellulaires.",
    "choiceExplanations": [
      "Vrai. Les trois systèmes sont filaments d’actine, filaments intermédiaires et microtubules.",
      "Faux. Elles peuvent causer dystrophies et cardiomyopathies.",
      "Vrai. Ils participent à l’architecture cellulaire.",
      "Faux. Il est constitué de polymères protéiques."
    ]
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’actine et les microtubules :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "actin-microtubules"
    },
    "choices": [
      "La dynamique des microtubules dépend du GTP et diffère entre extrémités + et −.",
      "Les microtubules sont formés de dimères α/β-tubuline.",
      "La tubuline est un homotrimère γγγ.",
      "La polymérisation de l’actine dépend de l’ATP."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Actine et microtubules sont des polymères dynamiques contrôlés par ATP ou GTP.",
    "choiceExplanations": [
      "Vrai. La dynamique des microtubules dépend du GTP et diffère entre extrémités + et −.",
      "Vrai. Les microtubules sont formés de dimères α/β-tubuline.",
      "Faux. Elle forme un hétérodimère αβ.",
      "Vrai. La polymérisation de l’actine dépend de l’ATP."
    ]
  },
  {
    "order": 96,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les glycoprotéines matricielles :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "matrix-glycoproteins"
    },
    "choices": [
      "Elles sont toujours de faible masse moléculaire.",
      "Elles participent aux interactions cellule-matrice.",
      "Elles possèdent des domaines structuraux communs.",
      "Les glycoprotéines matricielles sont dépourvues de glucides."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les glycoprotéines matricielles sont des protéines modulaires et glycosylées d’adhérence.",
    "choiceExplanations": [
      "Faux. La fiche les décrit généralement de masse élevée.",
      "Vrai. Elles participent aux interactions cellule-matrice.",
      "Vrai. Elles possèdent des domaines structuraux communs.",
      "Faux. Elles portent une partie glucidique."
    ]
  },
  {
    "order": 97,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la fibronectine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fibronectin"
    },
    "choices": [
      "Elle est un dimère de deux chaînes d’environ 235 kDa.",
      "Les chaînes sont reliées par leur extrémité C-terminale.",
      "La molécule a une forme de V.",
      "Les chaînes sont reliées par leurs extrémités N-terminales dans la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La fibronectine est une glycoprotéine dimérique reliant cellules, fibrine et matrice.",
    "choiceExplanations": [
      "Vrai. Elle est un dimère de deux chaînes d’environ 235 kDa.",
      "Vrai. Les chaînes sont reliées par leur extrémité C-terminale.",
      "Vrai. La molécule a une forme de V.",
      "Faux. Elles sont reliées en C-terminal."
    ]
  },
  {
    "order": 98,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la laminine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "laminin"
    },
    "choices": [
      "Elle est très importante dans les membranes basales.",
      "La laminine est un homodimère de deux chaînes identiques.",
      "La laminine est une petite hormone de 9 acides aminés.",
      "Elle possède trois chaînes α, β et γ."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La laminine est une glycoprotéine hétérotrimérique en croix des membranes basales.",
    "choiceExplanations": [
      "Vrai. Elle est très importante dans les membranes basales.",
      "Faux. Elle possède trois chaînes différentes.",
      "Faux. C’est une grande glycoprotéine.",
      "Vrai. Elle possède trois chaînes α, β et γ."
    ]
  },
  {
    "order": 99,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les constituants du cytosquelette :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytoskeleton-overview"
    },
    "choices": [
      "Le cytosquelette est formé uniquement de phospholipides.",
      "Ils transmettent des forces mécaniques.",
      "Les trois systèmes sont filaments d’actine, filaments intermédiaires et microtubules.",
      "Ils servent de rails à des moteurs comme myosines, dynéines et kinésines."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le cytosquelette organise la forme, les forces et les transports intracellulaires.",
    "choiceExplanations": [
      "Faux. Il est constitué de polymères protéiques.",
      "Vrai. Ils transmettent des forces mécaniques.",
      "Vrai. Les trois systèmes sont filaments d’actine, filaments intermédiaires et microtubules.",
      "Vrai. Ils servent de rails à des moteurs comme myosines, dynéines et kinésines."
    ]
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’actine et les microtubules :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "actin-microtubules"
    },
    "choices": [
      "La dynamique des microtubules dépend du GTP et diffère entre extrémités + et −.",
      "La tubuline est un homotrimère γγγ.",
      "L’actine G est monomérique et l’actine F filamenteuse.",
      "La dynamique de l’actine est indépendante de tout nucléotide."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Actine et microtubules sont des polymères dynamiques contrôlés par ATP ou GTP.",
    "choiceExplanations": [
      "Vrai. La dynamique des microtubules dépend du GTP et diffère entre extrémités + et −.",
      "Faux. Elle forme un hétérodimère αβ.",
      "Vrai. L’actine G est monomérique et l’actine F filamenteuse.",
      "Faux. Elle dépend de l’ATP."
    ]
  },
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les glycoprotéines matricielles, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "matrix-glycoproteins"
    },
    "choices": [
      "Leur partie glucidique peut résulter de N- ou O-glycosylation.",
      "Leur expression est identique dans tous les tissus.",
      "Elles n’interagissent jamais avec les collagènes ou protéoglycanes.",
      "Fibronectines, laminines, tenascines et vitronectine sont citées."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les glycoprotéines matricielles sont des protéines modulaires et glycosylées d’adhérence.",
    "choiceExplanations": [
      "Vrai. Leur partie glucidique peut résulter de N- ou O-glycosylation.",
      "Faux. Elle varie selon les tissus.",
      "Faux. Elles participent à ces interactions.",
      "Vrai. Fibronectines, laminines, tenascines et vitronectine sont citées."
    ]
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la fibronectine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fibronectin"
    },
    "choices": [
      "Elle se lie aux intégrines, à la fibrine et à d’autres protéines matricielles.",
      "Les chaînes sont reliées par leurs extrémités N-terminales dans la fiche.",
      "Elle est un dimère de deux chaînes d’environ 235 kDa.",
      "Elle ne se lie à aucune cellule."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La fibronectine est une glycoprotéine dimérique reliant cellules, fibrine et matrice.",
    "choiceExplanations": [
      "Vrai. Elle se lie aux intégrines, à la fibrine et à d’autres protéines matricielles.",
      "Faux. Elles sont reliées en C-terminal.",
      "Vrai. Elle est un dimère de deux chaînes d’environ 235 kDa.",
      "Faux. Les intégrines constituent des récepteurs cellulaires."
    ]
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la laminine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "laminin"
    },
    "choices": [
      "Sa masse moléculaire est élevée, autour de 850 kDa dans la fiche.",
      "La laminine est un homodimère de deux chaînes identiques.",
      "Elle possède trois chaînes α, β et γ.",
      "Elle ne participe pas aux membranes basales."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La laminine est une glycoprotéine hétérotrimérique en croix des membranes basales.",
    "choiceExplanations": [
      "Vrai. Sa masse moléculaire est élevée, autour de 850 kDa dans la fiche.",
      "Faux. Elle possède trois chaînes différentes.",
      "Vrai. Elle possède trois chaînes α, β et γ.",
      "Faux. Elle en est un composant majeur."
    ]
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les constituants du cytosquelette, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytoskeleton-overview"
    },
    "choices": [
      "Ils participent à l’architecture cellulaire.",
      "Les moteurs moléculaires se déplacent sans aucun filament.",
      "Le cytosquelette est formé uniquement de phospholipides.",
      "Les trois systèmes sont filaments d’actine, filaments intermédiaires et microtubules."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le cytosquelette organise la forme, les forces et les transports intracellulaires.",
    "choiceExplanations": [
      "Vrai. Ils participent à l’architecture cellulaire.",
      "Faux. Ils utilisent des rails cytosquelettiques.",
      "Faux. Il est constitué de polymères protéiques.",
      "Vrai. Les trois systèmes sont filaments d’actine, filaments intermédiaires et microtubules."
    ]
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’actine et les microtubules, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "actin-microtubules"
    },
    "choices": [
      "La dynamique des microtubules dépend du GTP et diffère entre extrémités + et −.",
      "Les microtubules sont totalement statiques.",
      "L’actine F est le monomère globulaire.",
      "Les microtubules sont formés de dimères α/β-tubuline."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Actine et microtubules sont des polymères dynamiques contrôlés par ATP ou GTP.",
    "choiceExplanations": [
      "Vrai. La dynamique des microtubules dépend du GTP et diffère entre extrémités + et −.",
      "Faux. Ils polymérisent et dépolymérisent dynamiquement.",
      "Faux. Le monomère est l’actine G.",
      "Vrai. Les microtubules sont formés de dimères α/β-tubuline."
    ]
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les glycoprotéines matricielles, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "matrix-glycoproteins"
    },
    "choices": [
      "Fibronectines, laminines, tenascines et vitronectine sont citées.",
      "Elles participent aux interactions cellule-matrice.",
      "Elles sont toujours de faible masse moléculaire.",
      "Les glycoprotéines matricielles sont dépourvues de glucides."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les glycoprotéines matricielles sont des protéines modulaires et glycosylées d’adhérence.",
    "choiceExplanations": [
      "Vrai. Fibronectines, laminines, tenascines et vitronectine sont citées.",
      "Vrai. Elles participent aux interactions cellule-matrice.",
      "Faux. La fiche les décrit généralement de masse élevée.",
      "Faux. Elles portent une partie glucidique."
    ]
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la fibronectine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fibronectin"
    },
    "choices": [
      "Les chaînes sont reliées par leurs extrémités N-terminales dans la fiche.",
      "Elle reste exclusivement soluble et ne polymérise jamais.",
      "Elle se lie aux intégrines, à la fibrine et à d’autres protéines matricielles.",
      "Elle est un dimère de deux chaînes d’environ 235 kDa."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La fibronectine est une glycoprotéine dimérique reliant cellules, fibrine et matrice.",
    "choiceExplanations": [
      "Faux. Elles sont reliées en C-terminal.",
      "Faux. Elle peut former un réseau insoluble à la surface cellulaire.",
      "Vrai. Elle se lie aux intégrines, à la fibrine et à d’autres protéines matricielles.",
      "Vrai. Elle est un dimère de deux chaînes d’environ 235 kDa."
    ]
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la laminine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "laminin"
    },
    "choices": [
      "La laminine est une petite hormone de 9 acides aminés.",
      "Elle ne participe pas aux membranes basales.",
      "Elle possède trois chaînes α, β et γ.",
      "Les chaînes forment une structure en croix."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La laminine est une glycoprotéine hétérotrimérique en croix des membranes basales.",
    "choiceExplanations": [
      "Faux. C’est une grande glycoprotéine.",
      "Faux. Elle en est un composant majeur.",
      "Vrai. Elle possède trois chaînes α, β et γ.",
      "Vrai. Les chaînes forment une structure en croix."
    ]
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les constituants du cytosquelette, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytoskeleton-overview"
    },
    "choices": [
      "Les trois systèmes sont filaments d’actine, filaments intermédiaires et microtubules.",
      "Il n’intervient jamais dans la motilité.",
      "Ils participent à l’architecture cellulaire.",
      "Les mutations du cytosquelette ne provoquent aucune pathologie."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le cytosquelette organise la forme, les forces et les transports intracellulaires.",
    "choiceExplanations": [
      "Vrai. Les trois systèmes sont filaments d’actine, filaments intermédiaires et microtubules.",
      "Faux. Il transmet des forces et permet des mouvements.",
      "Vrai. Ils participent à l’architecture cellulaire.",
      "Faux. Elles peuvent causer dystrophies et cardiomyopathies."
    ]
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’actine et les microtubules, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "actin-microtubules"
    },
    "choices": [
      "La dynamique des microtubules dépend du GTP et diffère entre extrémités + et −.",
      "La dynamique de l’actine est indépendante de tout nucléotide.",
      "Les microtubules sont formés de dimères α/β-tubuline.",
      "La tubuline est un homotrimère γγγ."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Actine et microtubules sont des polymères dynamiques contrôlés par ATP ou GTP.",
    "choiceExplanations": [
      "Vrai. La dynamique des microtubules dépend du GTP et diffère entre extrémités + et −.",
      "Faux. Elle dépend de l’ATP.",
      "Vrai. Les microtubules sont formés de dimères α/β-tubuline.",
      "Faux. Elle forme un hétérodimère αβ."
    ]
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les glycoprotéines matricielles. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "matrix-glycoproteins"
    },
    "choices": [
      "Elles possèdent des domaines structuraux communs.",
      "Les glycoprotéines matricielles sont dépourvues de glucides.",
      "Elles sont toujours de faible masse moléculaire.",
      "Fibronectines, laminines, tenascines et vitronectine sont citées."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les glycoprotéines matricielles sont des protéines modulaires et glycosylées d’adhérence.",
    "choiceExplanations": [
      "Vrai. Elles possèdent des domaines structuraux communs.",
      "Faux. Elles portent une partie glucidique.",
      "Faux. La fiche les décrit généralement de masse élevée.",
      "Vrai. Fibronectines, laminines, tenascines et vitronectine sont citées."
    ]
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la fibronectine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fibronectin"
    },
    "choices": [
      "Elle est un dimère de deux chaînes d’environ 235 kDa.",
      "Elle se lie aux intégrines, à la fibrine et à d’autres protéines matricielles.",
      "Les chaînes sont reliées par leurs extrémités N-terminales dans la fiche.",
      "Elle reste exclusivement soluble et ne polymérise jamais."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La fibronectine est une glycoprotéine dimérique reliant cellules, fibrine et matrice.",
    "choiceExplanations": [
      "Vrai. Elle est un dimère de deux chaînes d’environ 235 kDa.",
      "Vrai. Elle se lie aux intégrines, à la fibrine et à d’autres protéines matricielles.",
      "Faux. Elles sont reliées en C-terminal.",
      "Faux. Elle peut former un réseau insoluble à la surface cellulaire."
    ]
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la laminine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "laminin"
    },
    "choices": [
      "Elle est principalement une protéine cytosolique.",
      "Elle est très importante dans les membranes basales.",
      "La laminine est un homodimère de deux chaînes identiques.",
      "Sa masse moléculaire est élevée, autour de 850 kDa dans la fiche."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La laminine est une glycoprotéine hétérotrimérique en croix des membranes basales.",
    "choiceExplanations": [
      "Faux. Elle est extracellulaire et matricielle.",
      "Vrai. Elle est très importante dans les membranes basales.",
      "Faux. Elle possède trois chaînes différentes.",
      "Vrai. Sa masse moléculaire est élevée, autour de 850 kDa dans la fiche."
    ]
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les constituants du cytosquelette. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytoskeleton-overview"
    },
    "choices": [
      "Ils servent de rails à des moteurs comme myosines, dynéines et kinésines.",
      "Ils participent à l’architecture cellulaire.",
      "Il n’intervient jamais dans la motilité.",
      "Le cytosquelette est formé uniquement de phospholipides."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le cytosquelette organise la forme, les forces et les transports intracellulaires.",
    "choiceExplanations": [
      "Vrai. Ils servent de rails à des moteurs comme myosines, dynéines et kinésines.",
      "Vrai. Ils participent à l’architecture cellulaire.",
      "Faux. Il transmet des forces et permet des mouvements.",
      "Faux. Il est constitué de polymères protéiques."
    ]
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une cellule présente une mutation d’une protéine du cytosquelette associée à une cardiomyopathie. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "actin-microtubules"
    },
    "choices": [
      "La dynamique des microtubules dépend du GTP et diffère entre extrémités + et −.",
      "La dynamique de l’actine est indépendante de tout nucléotide.",
      "Les microtubules sont formés de dimères α/β-tubuline.",
      "L’actine F est le monomère globulaire."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Actine et microtubules sont des polymères dynamiques contrôlés par ATP ou GTP.",
    "choiceExplanations": [
      "Vrai. La dynamique des microtubules dépend du GTP et diffère entre extrémités + et −.",
      "Faux. Elle dépend de l’ATP.",
      "Vrai. Les microtubules sont formés de dimères α/β-tubuline.",
      "Faux. Le monomère est l’actine G."
    ]
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les glycoprotéines matricielles. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "matrix-glycoproteins"
    },
    "choices": [
      "Fibronectines, laminines, tenascines et vitronectine sont citées.",
      "Les glycoprotéines matricielles sont dépourvues de glucides.",
      "Elles possèdent des domaines structuraux communs.",
      "Elles n’interagissent jamais avec les collagènes ou protéoglycanes."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les glycoprotéines matricielles sont des protéines modulaires et glycosylées d’adhérence.",
    "choiceExplanations": [
      "Vrai. Fibronectines, laminines, tenascines et vitronectine sont citées.",
      "Faux. Elles portent une partie glucidique.",
      "Vrai. Elles possèdent des domaines structuraux communs.",
      "Faux. Elles participent à ces interactions."
    ]
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la fibronectine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fibronectin"
    },
    "choices": [
      "Elle reste exclusivement soluble et ne polymérise jamais.",
      "La fibronectine est un monomère de 20 acides aminés.",
      "Elle se lie aux intégrines, à la fibrine et à d’autres protéines matricielles.",
      "Elle est un dimère de deux chaînes d’environ 235 kDa."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La fibronectine est une glycoprotéine dimérique reliant cellules, fibrine et matrice.",
    "choiceExplanations": [
      "Faux. Elle peut former un réseau insoluble à la surface cellulaire.",
      "Faux. Elle est un dimère de grande masse.",
      "Vrai. Elle se lie aux intégrines, à la fibrine et à d’autres protéines matricielles.",
      "Vrai. Elle est un dimère de deux chaînes d’environ 235 kDa."
    ]
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la laminine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "laminin"
    },
    "choices": [
      "Elle est principalement une protéine cytosolique.",
      "Elle est très importante dans les membranes basales.",
      "Sa masse moléculaire est élevée, autour de 850 kDa dans la fiche.",
      "La laminine est un homodimère de deux chaînes identiques."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La laminine est une glycoprotéine hétérotrimérique en croix des membranes basales.",
    "choiceExplanations": [
      "Faux. Elle est extracellulaire et matricielle.",
      "Vrai. Elle est très importante dans les membranes basales.",
      "Vrai. Sa masse moléculaire est élevée, autour de 850 kDa dans la fiche.",
      "Faux. Elle possède trois chaînes différentes."
    ]
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les constituants du cytosquelette. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytoskeleton-overview"
    },
    "choices": [
      "Les moteurs moléculaires se déplacent sans aucun filament.",
      "Le cytosquelette est formé uniquement de phospholipides.",
      "Ils servent de rails à des moteurs comme myosines, dynéines et kinésines.",
      "Ils participent à l’architecture cellulaire."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le cytosquelette organise la forme, les forces et les transports intracellulaires.",
    "choiceExplanations": [
      "Faux. Ils utilisent des rails cytosquelettiques.",
      "Faux. Il est constitué de polymères protéiques.",
      "Vrai. Ils servent de rails à des moteurs comme myosines, dynéines et kinésines.",
      "Vrai. Ils participent à l’architecture cellulaire."
    ]
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une cellule présente une mutation d’une protéine du cytosquelette associée à une cardiomyopathie. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "actin-microtubules"
    },
    "choices": [
      "La polymérisation de l’actine dépend de l’ATP.",
      "Les microtubules sont totalement statiques.",
      "La tubuline est un homotrimère γγγ.",
      "Les microtubules sont formés de dimères α/β-tubuline."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Actine et microtubules sont des polymères dynamiques contrôlés par ATP ou GTP.",
    "choiceExplanations": [
      "Vrai. La polymérisation de l’actine dépend de l’ATP.",
      "Faux. Ils polymérisent et dépolymérisent dynamiquement.",
      "Faux. Elle forme un hétérodimère αβ.",
      "Vrai. Les microtubules sont formés de dimères α/β-tubuline."
    ]
  }
];
