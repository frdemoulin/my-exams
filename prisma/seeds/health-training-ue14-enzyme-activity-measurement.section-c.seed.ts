import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "61": [
    "les ordres de réaction"
  ],
  "62": [
    "l’équation de Michaelis-Menten"
  ],
  "63": [
    "la saturation enzymatique et Vm"
  ],
  "64": [
    "la signification de Km"
  ],
  "65": [
    "la représentation de Lineweaver-Burk"
  ],
  "66": [
    "les ordres de réaction"
  ],
  "67": [
    "l’équation de Michaelis-Menten"
  ],
  "68": [
    "la saturation enzymatique et Vm"
  ],
  "69": [
    "la signification de Km"
  ],
  "70": [
    "la représentation de Lineweaver-Burk"
  ],
  "71": [
    "les ordres de réaction"
  ],
  "72": [
    "l’équation de Michaelis-Menten"
  ],
  "73": [
    "la saturation enzymatique et Vm"
  ],
  "74": [
    "la signification de Km"
  ],
  "75": [
    "la représentation de Lineweaver-Burk"
  ],
  "76": [
    "les ordres de réaction"
  ],
  "77": [
    "l’équation de Michaelis-Menten"
  ],
  "78": [
    "la saturation enzymatique et Vm"
  ],
  "79": [
    "la signification de Km"
  ],
  "80": [
    "la représentation de Lineweaver-Burk"
  ],
  "81": [
    "les ordres de réaction"
  ],
  "82": [
    "l’équation de Michaelis-Menten"
  ],
  "83": [
    "la saturation enzymatique et Vm"
  ],
  "84": [
    "la signification de Km"
  ],
  "85": [
    "la représentation de Lineweaver-Burk"
  ],
  "86": [
    "les ordres de réaction"
  ],
  "87": [
    "l’équation de Michaelis-Menten"
  ],
  "88": [
    "la saturation enzymatique et Vm"
  ],
  "89": [
    "la signification de Km"
  ],
  "90": [
    "la représentation de Lineweaver-Burk"
  ]
};

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "michaelis-km-vm-1",
    "title": "Ordres et équation de Michaelis-Menten",
    "description": "Identifier les notions fondamentales de la section.",
    "stage": "DISCOVER",
    "sectionOrder": 3,
    "questionOrders": [
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70
    ]
  },
  {
    "order": 2,
    "slug": "michaelis-km-vm-2",
    "title": "Interprétation de Km et Vm",
    "description": "Appliquer les définitions, classifications et relations du cours.",
    "stage": "PRACTICE",
    "sectionOrder": 3,
    "questionOrders": [
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80
    ]
  },
  {
    "order": 3,
    "slug": "michaelis-km-vm-3",
    "title": "Courbes de Michaelis et Lineweaver-Burk",
    "description": "Mobiliser les notions dans des raisonnements transversaux et des situations biologiques.",
    "stage": "MASTER",
    "sectionOrder": 3,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères fondamentaux",
        "sharedStatement": "Les questions suivantes mobilisent les repères essentiels de la section.",
        "questionOrders": [
          81,
          82,
          83
        ]
      },
      {
        "type": "GROUP",
        "title": "Mécanismes et relations",
        "sharedStatement": "Les questions suivantes relient les notions et mécanismes de la section.",
        "questionOrders": [
          84,
          85,
          86
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques",
        "sharedStatement": "Les questions suivantes replacent les notions dans une situation biologique, analytique ou médicale.",
        "questionOrders": [
          87,
          88,
          89,
          90
        ]
      }
    ]
  }
];

export const SECTION_C_QUESTIONS: SeedQuestion[] = [
  {
    "order": 61,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les ordres de réaction :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-orders"
    },
    "choices": [
      "Une réaction d’ordre 1 vérifie v = k[A][B].",
      "Pour une réaction d’ordre 1, v = k[A].",
      "Pour une réaction d’ordre 2 à deux substrats, v = k[A][B].",
      "Le plateau d’une enzyme saturée correspond à un comportement d’ordre 0 vis-à-vis du substrat."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’ordre exprime la dépendance de la vitesse vis-à-vis des concentrations des réactifs.",
    "choiceExplanations": [
      "Faux. Cette relation correspond à un cas d’ordre 2.",
      "Vrai. Pour une réaction d’ordre 1, v = k[A].",
      "Vrai. Pour une réaction d’ordre 2 à deux substrats, v = k[A][B].",
      "Vrai. Le plateau d’une enzyme saturée correspond à un comportement d’ordre 0 vis-à-vis du substrat."
    ]
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’équation de Michaelis-Menten :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-equation"
    },
    "choices": [
      "L’équation est v₀ = Vm·[S]/(Km + [S]).",
      "Vm est indépendante de la concentration totale d’enzyme.",
      "La relation suppose une forte concentration initiale de produit.",
      "La fraction v₀/Vm vaut [S]/(Km + [S])."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "L’équation relie la vitesse initiale à la concentration de substrat, à Km et à Vm.",
    "choiceExplanations": [
      "Vrai. L’équation est v₀ = Vm·[S]/(Km + [S]).",
      "Faux. Vm est proportionnelle à [E]t.",
      "Faux. Le produit est négligeable aux temps initiaux.",
      "Vrai. La fraction v₀/Vm vaut [S]/(Km + [S])."
    ]
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la saturation enzymatique et Vm :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-curve"
    },
    "choices": [
      "Vm augmente si la concentration totale d’enzyme augmente.",
      "Le plateau signifie que la réaction s’est arrêtée dès le début.",
      "Vm est la vitesse maximale atteinte au plateau.",
      "Augmenter encore [S] à saturation modifie peu la vitesse."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La vitesse maximale traduit la capacité catalytique totale de la quantité d’enzyme présente.",
    "choiceExplanations": [
      "Vrai. Vm augmente si la concentration totale d’enzyme augmente.",
      "Faux. Il traduit la saturation de l’enzyme.",
      "Vrai. Vm est la vitesse maximale atteinte au plateau.",
      "Vrai. Augmenter encore [S] à saturation modifie peu la vitesse."
    ]
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la signification de Km :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "km-affinity"
    },
    "choices": [
      "Lorsque [S] = Km, v₀ = Vm/2.",
      "Lorsque [S] = Km, v₀ = Vm.",
      "Un Km élevé correspond à une forte affinité.",
      "Km est caractéristique d’un couple enzyme-substrat dans des conditions données."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Km est la concentration de substrat donnant la demi-vitesse maximale et reflète inversement l’affinité.",
    "choiceExplanations": [
      "Vrai. Lorsque [S] = Km, v₀ = Vm/2.",
      "Faux. La vitesse vaut la moitié de Vm.",
      "Faux. Il correspond à une affinité plus faible.",
      "Vrai. Km est caractéristique d’un couple enzyme-substrat dans des conditions données."
    ]
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la représentation de Lineweaver-Burk :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "lineweaver-burk"
    },
    "choices": [
      "L’ordonnée à l’origine vaut 1/Vm.",
      "L’ordonnée à l’origine vaut Vm.",
      "Elle représente 1/v₀ en fonction de 1/[S].",
      "Le cours indique que l’intersection avec l’axe des abscisses permet d’obtenir l’inverse de Km."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La double inversion transforme la courbe de Michaelis en droite et facilite l’estimation de Km et Vm.",
    "choiceExplanations": [
      "Vrai. L’ordonnée à l’origine vaut 1/Vm.",
      "Faux. Elle vaut 1/Vm.",
      "Vrai. Elle représente 1/v₀ en fonction de 1/[S].",
      "Vrai. Le cours indique que l’intersection avec l’axe des abscisses permet d’obtenir l’inverse de Km."
    ]
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les ordres de réaction :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-orders"
    },
    "choices": [
      "Pour une réaction d’ordre 1, v = k[A].",
      "Le plateau d’une enzyme saturée correspond à un comportement d’ordre 0 vis-à-vis du substrat.",
      "À faible substrat, une enzyme michaelienne est déjà toujours saturée.",
      "Une réaction d’ordre 0 a une vitesse proportionnelle à [A]."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "L’ordre exprime la dépendance de la vitesse vis-à-vis des concentrations des réactifs.",
    "choiceExplanations": [
      "Vrai. Pour une réaction d’ordre 1, v = k[A].",
      "Vrai. Le plateau d’une enzyme saturée correspond à un comportement d’ordre 0 vis-à-vis du substrat.",
      "Faux. La saturation apparaît à forte concentration.",
      "Faux. Sa vitesse est indépendante de [A]."
    ]
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’équation de Michaelis-Menten :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-equation"
    },
    "choices": [
      "La relation suppose une forte concentration initiale de produit.",
      "L’équation est v₀ = Vm·[S]/(Km + [S]).",
      "La fraction v₀/Vm vaut [S]/(Km + [S]).",
      "La relation est établie dans les conditions initiales avec [P] négligeable."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’équation relie la vitesse initiale à la concentration de substrat, à Km et à Vm.",
    "choiceExplanations": [
      "Faux. Le produit est négligeable aux temps initiaux.",
      "Vrai. L’équation est v₀ = Vm·[S]/(Km + [S]).",
      "Vrai. La fraction v₀/Vm vaut [S]/(Km + [S]).",
      "Vrai. La relation est établie dans les conditions initiales avec [P] négligeable."
    ]
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la saturation enzymatique et Vm :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-curve"
    },
    "choices": [
      "Vm est obtenue lorsque [S] est nulle.",
      "Vm est la vitesse maximale atteinte au plateau.",
      "Vm diminue obligatoirement lorsque [E]t augmente.",
      "Augmenter encore [S] à saturation modifie peu la vitesse."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La vitesse maximale traduit la capacité catalytique totale de la quantité d’enzyme présente.",
    "choiceExplanations": [
      "Faux. Elle est obtenue à saturation en substrat.",
      "Vrai. Vm est la vitesse maximale atteinte au plateau.",
      "Faux. Elle est proportionnelle à [E]t.",
      "Vrai. Augmenter encore [S] à saturation modifie peu la vitesse."
    ]
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la signification de Km :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "km-affinity"
    },
    "choices": [
      "Lorsque [S] = Km, v₀ = Vm/2.",
      "Lorsque [S] = Km, v₀ = Vm.",
      "Un Km faible correspond à une forte affinité.",
      "Km dépend notamment du pH et de la température."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Km est la concentration de substrat donnant la demi-vitesse maximale et reflète inversement l’affinité.",
    "choiceExplanations": [
      "Vrai. Lorsque [S] = Km, v₀ = Vm/2.",
      "Faux. La vitesse vaut la moitié de Vm.",
      "Vrai. Un Km faible correspond à une forte affinité.",
      "Vrai. Km dépend notamment du pH et de la température."
    ]
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la représentation de Lineweaver-Burk :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "lineweaver-burk"
    },
    "choices": [
      "Le cours indique que l’intersection avec l’axe des abscisses permet d’obtenir l’inverse de Km.",
      "La pente vaut Km/Vm.",
      "La pente vaut Vm/Km.",
      "La représentation ne permet aucune estimation de Km ou Vm."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La double inversion transforme la courbe de Michaelis en droite et facilite l’estimation de Km et Vm.",
    "choiceExplanations": [
      "Vrai. Le cours indique que l’intersection avec l’axe des abscisses permet d’obtenir l’inverse de Km.",
      "Vrai. La pente vaut Km/Vm.",
      "Faux. Elle vaut Km/Vm.",
      "Faux. Elle est utilisée pour les déterminer précisément."
    ]
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les ordres de réaction, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-orders"
    },
    "choices": [
      "Une réaction d’ordre 0 a une vitesse proportionnelle à [A].",
      "Pour une réaction d’ordre 0, la vitesse est constante par rapport à la concentration du substrat.",
      "Le plateau d’une enzyme saturée correspond à un comportement d’ordre 0 vis-à-vis du substrat.",
      "Une réaction d’ordre 1 vérifie v = k[A][B]."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’ordre exprime la dépendance de la vitesse vis-à-vis des concentrations des réactifs.",
    "choiceExplanations": [
      "Faux. Sa vitesse est indépendante de [A].",
      "Vrai. Pour une réaction d’ordre 0, la vitesse est constante par rapport à la concentration du substrat.",
      "Vrai. Le plateau d’une enzyme saturée correspond à un comportement d’ordre 0 vis-à-vis du substrat.",
      "Faux. Cette relation correspond à un cas d’ordre 2."
    ]
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’équation de Michaelis-Menten, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-equation"
    },
    "choices": [
      "L’équation est v₀ = Km·[S]/(Vm + [S]).",
      "Vm est indépendante de la concentration totale d’enzyme.",
      "Vm = Kcat·[E]t.",
      "La relation suppose une forte concentration initiale de produit."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "L’équation relie la vitesse initiale à la concentration de substrat, à Km et à Vm.",
    "choiceExplanations": [
      "Faux. Km et Vm sont inversés dans cette proposition.",
      "Faux. Vm est proportionnelle à [E]t.",
      "Vrai. Vm = Kcat·[E]t.",
      "Faux. Le produit est négligeable aux temps initiaux."
    ]
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la saturation enzymatique et Vm, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-curve"
    },
    "choices": [
      "Le plateau signifie que la réaction s’est arrêtée dès le début.",
      "Vm augmente si la concentration totale d’enzyme augmente.",
      "À forte concentration de substrat, la plupart des sites actifs sont occupés.",
      "Vm diminue obligatoirement lorsque [E]t augmente."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La vitesse maximale traduit la capacité catalytique totale de la quantité d’enzyme présente.",
    "choiceExplanations": [
      "Faux. Il traduit la saturation de l’enzyme.",
      "Vrai. Vm augmente si la concentration totale d’enzyme augmente.",
      "Vrai. À forte concentration de substrat, la plupart des sites actifs sont occupés.",
      "Faux. Elle est proportionnelle à [E]t."
    ]
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la signification de Km, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "km-affinity"
    },
    "choices": [
      "Km est identique pour tous les substrats d’une enzyme.",
      "Km est caractéristique d’un couple enzyme-substrat dans des conditions données.",
      "Un Km faible correspond à une forte affinité.",
      "Km est une vitesse exprimée en µmol·min⁻¹."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Km est la concentration de substrat donnant la demi-vitesse maximale et reflète inversement l’affinité.",
    "choiceExplanations": [
      "Faux. Il caractérise un couple enzyme-substrat.",
      "Vrai. Km est caractéristique d’un couple enzyme-substrat dans des conditions données.",
      "Vrai. Un Km faible correspond à une forte affinité.",
      "Faux. Km est une concentration."
    ]
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la représentation de Lineweaver-Burk, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "lineweaver-burk"
    },
    "choices": [
      "Elle représente v₀ en fonction de [S] sur une hyperbole.",
      "La pente vaut Vm/Km.",
      "La représentation ne permet aucune estimation de Km ou Vm.",
      "La pente vaut Km/Vm."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "La double inversion transforme la courbe de Michaelis en droite et facilite l’estimation de Km et Vm.",
    "choiceExplanations": [
      "Faux. Cela correspond à la représentation de Michaelis.",
      "Faux. Elle vaut Km/Vm.",
      "Faux. Elle est utilisée pour les déterminer précisément.",
      "Vrai. La pente vaut Km/Vm."
    ]
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les ordres de réaction, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-orders"
    },
    "choices": [
      "Une réaction d’ordre 0 a une vitesse proportionnelle à [A].",
      "Une réaction à deux substrats est nécessairement d’ordre 0.",
      "Pour une réaction d’ordre 0, la vitesse est constante par rapport à la concentration du substrat.",
      "Le plateau d’une enzyme saturée correspond à un comportement d’ordre 0 vis-à-vis du substrat."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’ordre exprime la dépendance de la vitesse vis-à-vis des concentrations des réactifs.",
    "choiceExplanations": [
      "Faux. Sa vitesse est indépendante de [A].",
      "Faux. Elle peut être d’ordre 2 selon la relation donnée.",
      "Vrai. Pour une réaction d’ordre 0, la vitesse est constante par rapport à la concentration du substrat.",
      "Vrai. Le plateau d’une enzyme saturée correspond à un comportement d’ordre 0 vis-à-vis du substrat."
    ]
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’équation de Michaelis-Menten, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-equation"
    },
    "choices": [
      "La relation est établie dans les conditions initiales avec [P] négligeable.",
      "Vm est indépendante de la concentration totale d’enzyme.",
      "L’équation est v₀ = Vm·[S]/(Km + [S]).",
      "v₀/Vm est toujours supérieur à 1."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’équation relie la vitesse initiale à la concentration de substrat, à Km et à Vm.",
    "choiceExplanations": [
      "Vrai. La relation est établie dans les conditions initiales avec [P] négligeable.",
      "Faux. Vm est proportionnelle à [E]t.",
      "Vrai. L’équation est v₀ = Vm·[S]/(Km + [S]).",
      "Faux. Cette fraction d’occupation est comprise entre 0 et 1."
    ]
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la saturation enzymatique et Vm, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-curve"
    },
    "choices": [
      "Vm diminue obligatoirement lorsque [E]t augmente.",
      "Vm est obtenue lorsque [S] est nulle.",
      "Vm est la vitesse maximale atteinte au plateau.",
      "Au plateau, aucun site actif n’est occupé."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "La vitesse maximale traduit la capacité catalytique totale de la quantité d’enzyme présente.",
    "choiceExplanations": [
      "Faux. Elle est proportionnelle à [E]t.",
      "Faux. Elle est obtenue à saturation en substrat.",
      "Vrai. Vm est la vitesse maximale atteinte au plateau.",
      "Faux. La majorité des enzymes est liée au substrat."
    ]
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la signification de Km, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "km-affinity"
    },
    "choices": [
      "Km dépend notamment du pH et de la température.",
      "Km est caractéristique d’un couple enzyme-substrat dans des conditions données.",
      "Km est identique pour tous les substrats d’une enzyme.",
      "Km est une vitesse exprimée en µmol·min⁻¹."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Km est la concentration de substrat donnant la demi-vitesse maximale et reflète inversement l’affinité.",
    "choiceExplanations": [
      "Vrai. Km dépend notamment du pH et de la température.",
      "Vrai. Km est caractéristique d’un couple enzyme-substrat dans des conditions données.",
      "Faux. Il caractérise un couple enzyme-substrat.",
      "Faux. Km est une concentration."
    ]
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la représentation de Lineweaver-Burk, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "lineweaver-burk"
    },
    "choices": [
      "La représentation ne permet aucune estimation de Km ou Vm.",
      "Elle représente 1/v₀ en fonction de 1/[S].",
      "L’ordonnée à l’origine vaut 1/Vm.",
      "Elle représente v₀ en fonction de [S] sur une hyperbole."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La double inversion transforme la courbe de Michaelis en droite et facilite l’estimation de Km et Vm.",
    "choiceExplanations": [
      "Faux. Elle est utilisée pour les déterminer précisément.",
      "Vrai. Elle représente 1/v₀ en fonction de 1/[S].",
      "Vrai. L’ordonnée à l’origine vaut 1/Vm.",
      "Faux. Cela correspond à la représentation de Michaelis."
    ]
  },
  {
    "order": 81,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les ordres de réaction. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-orders"
    },
    "choices": [
      "Une réaction d’ordre 1 vérifie v = k[A][B].",
      "Une réaction d’ordre 0 a une vitesse proportionnelle à [A].",
      "Pour une réaction d’ordre 0, la vitesse est constante par rapport à la concentration du substrat.",
      "Pour une réaction d’ordre 1, v = k[A]."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’ordre exprime la dépendance de la vitesse vis-à-vis des concentrations des réactifs.",
    "choiceExplanations": [
      "Faux. Cette relation correspond à un cas d’ordre 2.",
      "Faux. Sa vitesse est indépendante de [A].",
      "Vrai. Pour une réaction d’ordre 0, la vitesse est constante par rapport à la concentration du substrat.",
      "Vrai. Pour une réaction d’ordre 1, v = k[A]."
    ]
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’équation de Michaelis-Menten. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-equation"
    },
    "choices": [
      "Vm = Kcat·[E]t.",
      "v₀/Vm est toujours supérieur à 1.",
      "La relation suppose une forte concentration initiale de produit.",
      "La relation est établie dans les conditions initiales avec [P] négligeable."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "L’équation relie la vitesse initiale à la concentration de substrat, à Km et à Vm.",
    "choiceExplanations": [
      "Vrai. Vm = Kcat·[E]t.",
      "Faux. Cette fraction d’occupation est comprise entre 0 et 1.",
      "Faux. Le produit est négligeable aux temps initiaux.",
      "Vrai. La relation est établie dans les conditions initiales avec [P] négligeable."
    ]
  },
  {
    "order": 83,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la saturation enzymatique et Vm. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-curve"
    },
    "choices": [
      "Vm diminue obligatoirement lorsque [E]t augmente.",
      "Vm est la vitesse maximale atteinte au plateau.",
      "Vm augmente si la concentration totale d’enzyme augmente.",
      "Le plateau signifie que la réaction s’est arrêtée dès le début."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La vitesse maximale traduit la capacité catalytique totale de la quantité d’enzyme présente.",
    "choiceExplanations": [
      "Faux. Elle est proportionnelle à [E]t.",
      "Vrai. Vm est la vitesse maximale atteinte au plateau.",
      "Vrai. Vm augmente si la concentration totale d’enzyme augmente.",
      "Faux. Il traduit la saturation de l’enzyme."
    ]
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la signification de Km. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "km-affinity"
    },
    "choices": [
      "Km est identique pour tous les substrats d’une enzyme.",
      "Km est caractéristique d’un couple enzyme-substrat dans des conditions données.",
      "Lorsque [S] = Km, v₀ = Vm/2.",
      "Km dépend notamment du pH et de la température."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Km est la concentration de substrat donnant la demi-vitesse maximale et reflète inversement l’affinité.",
    "choiceExplanations": [
      "Faux. Il caractérise un couple enzyme-substrat.",
      "Vrai. Km est caractéristique d’un couple enzyme-substrat dans des conditions données.",
      "Vrai. Lorsque [S] = Km, v₀ = Vm/2.",
      "Vrai. Km dépend notamment du pH et de la température."
    ]
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la représentation de Lineweaver-Burk. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "lineweaver-burk"
    },
    "choices": [
      "La pente vaut Vm/Km.",
      "L’ordonnée à l’origine vaut Vm.",
      "Elle représente 1/v₀ en fonction de 1/[S].",
      "L’ordonnée à l’origine vaut 1/Vm."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La double inversion transforme la courbe de Michaelis en droite et facilite l’estimation de Km et Vm.",
    "choiceExplanations": [
      "Faux. Elle vaut Km/Vm.",
      "Faux. Elle vaut 1/Vm.",
      "Vrai. Elle représente 1/v₀ en fonction de 1/[S].",
      "Vrai. L’ordonnée à l’origine vaut 1/Vm."
    ]
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les ordres de réaction. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-orders"
    },
    "choices": [
      "Une réaction d’ordre 0 a une vitesse proportionnelle à [A].",
      "À faible substrat, une enzyme michaelienne est déjà toujours saturée.",
      "Pour une réaction d’ordre 1, v = k[A].",
      "Pour une réaction d’ordre 2 à deux substrats, v = k[A][B]."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’ordre exprime la dépendance de la vitesse vis-à-vis des concentrations des réactifs.",
    "choiceExplanations": [
      "Faux. Sa vitesse est indépendante de [A].",
      "Faux. La saturation apparaît à forte concentration.",
      "Vrai. Pour une réaction d’ordre 1, v = k[A].",
      "Vrai. Pour une réaction d’ordre 2 à deux substrats, v = k[A][B]."
    ]
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’équation de Michaelis-Menten. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-equation"
    },
    "choices": [
      "v₀/Vm est toujours supérieur à 1.",
      "L’équation est v₀ = Vm·[S]/(Km + [S]).",
      "Vm est indépendante de la concentration totale d’enzyme.",
      "La fraction v₀/Vm vaut [S]/(Km + [S])."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’équation relie la vitesse initiale à la concentration de substrat, à Km et à Vm.",
    "choiceExplanations": [
      "Faux. Cette fraction d’occupation est comprise entre 0 et 1.",
      "Vrai. L’équation est v₀ = Vm·[S]/(Km + [S]).",
      "Faux. Vm est proportionnelle à [E]t.",
      "Vrai. La fraction v₀/Vm vaut [S]/(Km + [S])."
    ]
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la saturation enzymatique et Vm. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-curve"
    },
    "choices": [
      "Augmenter encore [S] à saturation modifie peu la vitesse.",
      "Vm augmente si la concentration totale d’enzyme augmente.",
      "Vm est obtenue lorsque [S] est nulle.",
      "Vm est la vitesse maximale atteinte au plateau."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La vitesse maximale traduit la capacité catalytique totale de la quantité d’enzyme présente.",
    "choiceExplanations": [
      "Vrai. Augmenter encore [S] à saturation modifie peu la vitesse.",
      "Vrai. Vm augmente si la concentration totale d’enzyme augmente.",
      "Faux. Elle est obtenue à saturation en substrat.",
      "Vrai. Vm est la vitesse maximale atteinte au plateau."
    ]
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la signification de Km. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "km-affinity"
    },
    "choices": [
      "Km est identique pour tous les substrats d’une enzyme.",
      "Km dépend notamment du pH et de la température.",
      "Lorsque [S] = Km, v₀ = Vm/2.",
      "Lorsque [S] = Km, v₀ = Vm."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Km est la concentration de substrat donnant la demi-vitesse maximale et reflète inversement l’affinité.",
    "choiceExplanations": [
      "Faux. Il caractérise un couple enzyme-substrat.",
      "Vrai. Km dépend notamment du pH et de la température.",
      "Vrai. Lorsque [S] = Km, v₀ = Vm/2.",
      "Faux. La vitesse vaut la moitié de Vm."
    ]
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la représentation de Lineweaver-Burk. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "lineweaver-burk"
    },
    "choices": [
      "Le cours indique que l’intersection avec l’axe des abscisses permet d’obtenir l’inverse de Km.",
      "L’ordonnée à l’origine vaut Vm.",
      "La représentation ne permet aucune estimation de Km ou Vm.",
      "Elle représente 1/v₀ en fonction de 1/[S]."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La double inversion transforme la courbe de Michaelis en droite et facilite l’estimation de Km et Vm.",
    "choiceExplanations": [
      "Vrai. Le cours indique que l’intersection avec l’axe des abscisses permet d’obtenir l’inverse de Km.",
      "Faux. Elle vaut 1/Vm.",
      "Faux. Elle est utilisée pour les déterminer précisément.",
      "Vrai. Elle représente 1/v₀ en fonction de 1/[S]."
    ]
  }
];
