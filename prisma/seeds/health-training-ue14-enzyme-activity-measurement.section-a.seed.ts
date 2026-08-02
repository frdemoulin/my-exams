import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "1": [
    "la cinétique enzymatique"
  ],
  "2": [
    "les concentrations E, ES et Et"
  ],
  "3": [
    "les phases de la réaction enzymatique"
  ],
  "4": [
    "la détermination de la vitesse initiale"
  ],
  "5": [
    "la loi de Beer-Lambert appliquée à l’enzymologie"
  ],
  "6": [
    "la cinétique enzymatique"
  ],
  "7": [
    "les concentrations E, ES et Et"
  ],
  "8": [
    "les phases de la réaction enzymatique"
  ],
  "9": [
    "la détermination de la vitesse initiale"
  ],
  "10": [
    "la loi de Beer-Lambert appliquée à l’enzymologie"
  ],
  "11": [
    "la cinétique enzymatique"
  ],
  "12": [
    "les concentrations E, ES et Et"
  ],
  "13": [
    "les phases de la réaction enzymatique"
  ],
  "14": [
    "la détermination de la vitesse initiale"
  ],
  "15": [
    "la loi de Beer-Lambert appliquée à l’enzymologie"
  ],
  "16": [
    "la cinétique enzymatique"
  ],
  "17": [
    "les concentrations E, ES et Et"
  ],
  "18": [
    "les phases de la réaction enzymatique"
  ],
  "19": [
    "la détermination de la vitesse initiale"
  ],
  "20": [
    "la loi de Beer-Lambert appliquée à l’enzymologie"
  ],
  "21": [
    "la cinétique enzymatique"
  ],
  "22": [
    "les concentrations E, ES et Et"
  ],
  "23": [
    "les phases de la réaction enzymatique"
  ],
  "24": [
    "la détermination de la vitesse initiale"
  ],
  "25": [
    "la loi de Beer-Lambert appliquée à l’enzymologie"
  ],
  "26": [
    "la cinétique enzymatique"
  ],
  "27": [
    "les concentrations E, ES et Et"
  ],
  "28": [
    "les phases de la réaction enzymatique"
  ],
  "29": [
    "la détermination de la vitesse initiale"
  ],
  "30": [
    "la loi de Beer-Lambert appliquée à l’enzymologie"
  ]
};

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "reaction-vitesse-initiale-1",
    "title": "Phases d’une réaction enzymatique",
    "description": "Identifier les notions fondamentales de la section.",
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
    "slug": "reaction-vitesse-initiale-2",
    "title": "État stationnaire et vitesse initiale",
    "description": "Appliquer les définitions, classifications et relations du cours.",
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
    "slug": "reaction-vitesse-initiale-3",
    "title": "Mesure spectrophotométrique",
    "description": "Mobiliser les notions dans des raisonnements transversaux et des situations biologiques.",
    "stage": "MASTER",
    "sectionOrder": 1,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères fondamentaux",
        "sharedStatement": "Les questions suivantes mobilisent les repères essentiels de la section.",
        "questionOrders": [
          21,
          22,
          23
        ]
      },
      {
        "type": "GROUP",
        "title": "Mécanismes et relations",
        "sharedStatement": "Les questions suivantes relient les notions et mécanismes de la section.",
        "questionOrders": [
          24,
          25,
          26
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques",
        "sharedStatement": "Les questions suivantes replacent les notions dans une situation biologique, analytique ou médicale.",
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
    "question": "À propos de la cinétique enzymatique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-kinetics-overview"
    },
    "choices": [
      "La vitesse peut être définie par la quantité de substrat transformée par unité de temps.",
      "La disparition du substrat ne reflète jamais l’apparition du produit.",
      "La vitesse peut aussi être définie par la quantité de produit formée par unité de temps.",
      "Elle étudie les paramètres susceptibles de modifier cette vitesse."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La vitesse enzymatique se mesure par la disparition du substrat ou l’apparition du produit au cours du temps.",
    "choiceExplanations": [
      "Vrai. La vitesse peut être définie par la quantité de substrat transformée par unité de temps.",
      "Faux. Les deux évolutions sont liées dans la réaction.",
      "Vrai. La vitesse peut aussi être définie par la quantité de produit formée par unité de temps.",
      "Vrai. Elle étudie les paramètres susceptibles de modifier cette vitesse."
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les concentrations E, ES et Et :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-concentrations"
    },
    "choices": [
      "Pendant l’état stationnaire, [ES] reste approximativement constante.",
      "La concentration totale vérifie [E]t = [S] + [P].",
      "La concentration d’enzyme libre diminue rapidement au début.",
      "L’enzyme libre reste à sa valeur initiale pendant toute la réaction."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’excès de substrat permet l’installation rapide d’un état stationnaire du complexe enzyme-substrat.",
    "choiceExplanations": [
      "Vrai. Pendant l’état stationnaire, [ES] reste approximativement constante.",
      "Faux. Elle est la somme de l’enzyme libre et du complexe ES.",
      "Vrai. La concentration d’enzyme libre diminue rapidement au début.",
      "Faux. Elle diminue rapidement lors de la formation de ES."
    ]
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les phases de la réaction enzymatique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-phases"
    },
    "choices": [
      "La vitesse initiale est mesurée pendant la phase stationnaire.",
      "La phase stationnaire est approximativement linéaire pour la formation du produit.",
      "La réaction accélère indéfiniment en phase post-stationnaire.",
      "La phase post-stationnaire correspond au ralentissement lorsque le substrat s’épuise ou que le produit s’accumule."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La mesure enzymatique exploite la partie initiale linéaire de la réaction, avant le ralentissement.",
    "choiceExplanations": [
      "Vrai. La vitesse initiale est mesurée pendant la phase stationnaire.",
      "Vrai. La phase stationnaire est approximativement linéaire pour la formation du produit.",
      "Faux. Elle ralentit.",
      "Vrai. La phase post-stationnaire correspond au ralentissement lorsque le substrat s’épuise ou que le produit s’accumule."
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la détermination de la vitesse initiale :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "initial-rate-slope"
    },
    "choices": [
      "Les mesures sont faites uniquement après épuisement complet du substrat.",
      "Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes.",
      "Une courbe non linéaire tardive fournit directement la vitesse initiale.",
      "La pente ΔA/Δt permet de suivre l’évolution de l’absorbance."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La vitesse initiale est obtenue à partir de la pente d’un signal mesuré en cinétique.",
    "choiceExplanations": [
      "Faux. Elles sont réalisées précocement.",
      "Vrai. Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes.",
      "Faux. On utilise la phase initiale linéaire.",
      "Vrai. La pente ΔA/Δt permet de suivre l’évolution de l’absorbance."
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la loi de Beer-Lambert appliquée à l’enzymologie :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "beer-lambert-rate"
    },
    "choices": [
      "La vitesse initiale peut s’écrire v₀ = (ΔA/Δt)/(ε·l).",
      "La loi utilisée est A = ε·l·[P].",
      "ε est le coefficient d’absorption molaire.",
      "La relation est A = [P]/(ε·l) dans la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Beer-Lambert permet de convertir une pente d’absorbance en vitesse de formation du produit.",
    "choiceExplanations": [
      "Vrai. La vitesse initiale peut s’écrire v₀ = (ΔA/Δt)/(ε·l).",
      "Vrai. La loi utilisée est A = ε·l·[P].",
      "Vrai. ε est le coefficient d’absorption molaire.",
      "Faux. La relation est A = ε·l·[P]."
    ]
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la cinétique enzymatique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-kinetics-overview"
    },
    "choices": [
      "La cinétique enzymatique étudie la vitesse d’une réaction.",
      "La quantité de produit formée est indépendante du temps.",
      "La disparition du substrat ne reflète jamais l’apparition du produit.",
      "Elle étudie les paramètres susceptibles de modifier cette vitesse."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La vitesse enzymatique se mesure par la disparition du substrat ou l’apparition du produit au cours du temps.",
    "choiceExplanations": [
      "Vrai. La cinétique enzymatique étudie la vitesse d’une réaction.",
      "Faux. La vitesse est une variation par unité de temps.",
      "Faux. Les deux évolutions sont liées dans la réaction.",
      "Vrai. Elle étudie les paramètres susceptibles de modifier cette vitesse."
    ]
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les concentrations E, ES et Et :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-concentrations"
    },
    "choices": [
      "La concentration totale vérifie [E]t = [S] + [P].",
      "La concentration totale d’enzyme vérifie [E]t = [E] + [ES].",
      "La concentration d’enzyme libre diminue rapidement au début.",
      "Le substrat est initialement en excès d’au moins un facteur 10 par rapport à l’enzyme dans le cours."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’excès de substrat permet l’installation rapide d’un état stationnaire du complexe enzyme-substrat.",
    "choiceExplanations": [
      "Faux. Elle est la somme de l’enzyme libre et du complexe ES.",
      "Vrai. La concentration totale d’enzyme vérifie [E]t = [E] + [ES].",
      "Vrai. La concentration d’enzyme libre diminue rapidement au début.",
      "Vrai. Le substrat est initialement en excès d’au moins un facteur 10 par rapport à l’enzyme dans le cours."
    ]
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les phases de la réaction enzymatique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-phases"
    },
    "choices": [
      "La réaction accélère indéfiniment en phase post-stationnaire.",
      "La phase préstationnaire correspond à la mise en charge de l’enzyme.",
      "La vitesse initiale est mesurée au plateau final.",
      "La phase stationnaire est approximativement linéaire pour la formation du produit."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La mesure enzymatique exploite la partie initiale linéaire de la réaction, avant le ralentissement.",
    "choiceExplanations": [
      "Faux. Elle ralentit.",
      "Vrai. La phase préstationnaire correspond à la mise en charge de l’enzyme.",
      "Faux. Elle est mesurée dans la phase linéaire stationnaire.",
      "Vrai. La phase stationnaire est approximativement linéaire pour la formation du produit."
    ]
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la détermination de la vitesse initiale :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "initial-rate-slope"
    },
    "choices": [
      "Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes.",
      "La pente ΔA/Δt permet de suivre l’évolution de l’absorbance.",
      "La vitesse initiale correspond à la pente pendant la phase stationnaire.",
      "Une courbe non linéaire tardive fournit directement la vitesse initiale."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La vitesse initiale est obtenue à partir de la pente d’un signal mesuré en cinétique.",
    "choiceExplanations": [
      "Vrai. Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes.",
      "Vrai. La pente ΔA/Δt permet de suivre l’évolution de l’absorbance.",
      "Vrai. La vitesse initiale correspond à la pente pendant la phase stationnaire.",
      "Faux. On utilise la phase initiale linéaire."
    ]
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la loi de Beer-Lambert appliquée à l’enzymologie :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "beer-lambert-rate"
    },
    "choices": [
      "La vitesse initiale est le produit ΔA/Δt × ε × l.",
      "l correspond à la largeur de la cuve.",
      "ε est le coefficient d’absorption molaire.",
      "La largeur de la cuve n’intervient jamais dans l’absorbance."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Beer-Lambert permet de convertir une pente d’absorbance en vitesse de formation du produit.",
    "choiceExplanations": [
      "Faux. Elle est obtenue en divisant la pente par ε·l.",
      "Vrai. l correspond à la largeur de la cuve.",
      "Vrai. ε est le coefficient d’absorption molaire.",
      "Faux. Elle intervient dans Beer-Lambert."
    ]
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la cinétique enzymatique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-kinetics-overview"
    },
    "choices": [
      "La disparition du substrat ne reflète jamais l’apparition du produit.",
      "La vitesse peut être définie par la quantité de substrat transformée par unité de temps.",
      "La cinétique enzymatique étudie uniquement la structure primaire des enzymes.",
      "Elle étudie les paramètres susceptibles de modifier cette vitesse."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La vitesse enzymatique se mesure par la disparition du substrat ou l’apparition du produit au cours du temps.",
    "choiceExplanations": [
      "Faux. Les deux évolutions sont liées dans la réaction.",
      "Vrai. La vitesse peut être définie par la quantité de substrat transformée par unité de temps.",
      "Faux. Elle étudie la vitesse et ses paramètres.",
      "Vrai. Elle étudie les paramètres susceptibles de modifier cette vitesse."
    ]
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les concentrations E, ES et Et, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-concentrations"
    },
    "choices": [
      "Pendant l’état stationnaire, [ES] reste approximativement constante.",
      "Pendant l’état stationnaire, [ES] augmente sans limite.",
      "La concentration totale vérifie [E]t = [S] + [P].",
      "L’enzyme libre reste à sa valeur initiale pendant toute la réaction."
    ],
    "correctChoiceIndexes": [
      0
    ],
    "explanation": "L’excès de substrat permet l’installation rapide d’un état stationnaire du complexe enzyme-substrat.",
    "choiceExplanations": [
      "Vrai. Pendant l’état stationnaire, [ES] reste approximativement constante.",
      "Faux. Elle reste approximativement constante.",
      "Faux. Elle est la somme de l’enzyme libre et du complexe ES.",
      "Faux. Elle diminue rapidement lors de la formation de ES."
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les phases de la réaction enzymatique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-phases"
    },
    "choices": [
      "La vitesse initiale est mesurée au plateau final.",
      "La réaction accélère indéfiniment en phase post-stationnaire.",
      "La phase stationnaire est approximativement linéaire pour la formation du produit.",
      "La vitesse initiale est mesurée pendant la phase stationnaire."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La mesure enzymatique exploite la partie initiale linéaire de la réaction, avant le ralentissement.",
    "choiceExplanations": [
      "Faux. Elle est mesurée dans la phase linéaire stationnaire.",
      "Faux. Elle ralentit.",
      "Vrai. La phase stationnaire est approximativement linéaire pour la formation du produit.",
      "Vrai. La vitesse initiale est mesurée pendant la phase stationnaire."
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la détermination de la vitesse initiale, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "initial-rate-slope"
    },
    "choices": [
      "Une courbe non linéaire tardive fournit directement la vitesse initiale.",
      "Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes.",
      "ΔA/Δt représente l’ordonnée à l’origine.",
      "La pente ΔA/Δt permet de suivre l’évolution de l’absorbance."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La vitesse initiale est obtenue à partir de la pente d’un signal mesuré en cinétique.",
    "choiceExplanations": [
      "Faux. On utilise la phase initiale linéaire.",
      "Vrai. Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes.",
      "Faux. Il représente la pente d’absorbance.",
      "Vrai. La pente ΔA/Δt permet de suivre l’évolution de l’absorbance."
    ]
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la loi de Beer-Lambert appliquée à l’enzymologie, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "beer-lambert-rate"
    },
    "choices": [
      "La vitesse initiale est le produit ΔA/Δt × ε × l.",
      "La largeur de la cuve n’intervient jamais dans l’absorbance.",
      "ε représente la concentration totale d’enzyme.",
      "La vitesse initiale peut s’écrire v₀ = (ΔA/Δt)/(ε·l)."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "Beer-Lambert permet de convertir une pente d’absorbance en vitesse de formation du produit.",
    "choiceExplanations": [
      "Faux. Elle est obtenue en divisant la pente par ε·l.",
      "Faux. Elle intervient dans Beer-Lambert.",
      "Faux. C’est le coefficient d’absorption.",
      "Vrai. La vitesse initiale peut s’écrire v₀ = (ΔA/Δt)/(ε·l)."
    ]
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la cinétique enzymatique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-kinetics-overview"
    },
    "choices": [
      "La quantité de produit formée est indépendante du temps.",
      "La vitesse peut être définie par la quantité de substrat transformée par unité de temps.",
      "La cinétique enzymatique étudie la vitesse d’une réaction.",
      "La cinétique enzymatique étudie uniquement la structure primaire des enzymes."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La vitesse enzymatique se mesure par la disparition du substrat ou l’apparition du produit au cours du temps.",
    "choiceExplanations": [
      "Faux. La vitesse est une variation par unité de temps.",
      "Vrai. La vitesse peut être définie par la quantité de substrat transformée par unité de temps.",
      "Vrai. La cinétique enzymatique étudie la vitesse d’une réaction.",
      "Faux. Elle étudie la vitesse et ses paramètres."
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les concentrations E, ES et Et, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-concentrations"
    },
    "choices": [
      "Pendant l’état stationnaire, [ES] reste approximativement constante.",
      "Le substrat est initialement dix fois moins concentré que l’enzyme.",
      "La concentration totale d’enzyme vérifie [E]t = [E] + [ES].",
      "L’enzyme libre reste à sa valeur initiale pendant toute la réaction."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’excès de substrat permet l’installation rapide d’un état stationnaire du complexe enzyme-substrat.",
    "choiceExplanations": [
      "Vrai. Pendant l’état stationnaire, [ES] reste approximativement constante.",
      "Faux. Il est au moins dix fois plus concentré.",
      "Vrai. La concentration totale d’enzyme vérifie [E]t = [E] + [ES].",
      "Faux. Elle diminue rapidement lors de la formation de ES."
    ]
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les phases de la réaction enzymatique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-phases"
    },
    "choices": [
      "La phase stationnaire correspond à une absence totale de formation de produit.",
      "La vitesse initiale est mesurée pendant la phase stationnaire.",
      "La phase préstationnaire dure nécessairement plusieurs jours.",
      "La réaction accélère indéfiniment en phase post-stationnaire."
    ],
    "correctChoiceIndexes": [
      1
    ],
    "explanation": "La mesure enzymatique exploite la partie initiale linéaire de la réaction, avant le ralentissement.",
    "choiceExplanations": [
      "Faux. Le produit augmente de façon presque linéaire.",
      "Vrai. La vitesse initiale est mesurée pendant la phase stationnaire.",
      "Faux. Elle est très brève.",
      "Faux. Elle ralentit."
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la détermination de la vitesse initiale, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "initial-rate-slope"
    },
    "choices": [
      "ΔA/Δt représente l’ordonnée à l’origine.",
      "La pente ΔA/Δt permet de suivre l’évolution de l’absorbance.",
      "Les mesures sont faites uniquement après épuisement complet du substrat.",
      "Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La vitesse initiale est obtenue à partir de la pente d’un signal mesuré en cinétique.",
    "choiceExplanations": [
      "Faux. Il représente la pente d’absorbance.",
      "Vrai. La pente ΔA/Δt permet de suivre l’évolution de l’absorbance.",
      "Faux. Elles sont réalisées précocement.",
      "Vrai. Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes."
    ]
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la loi de Beer-Lambert appliquée à l’enzymologie, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "beer-lambert-rate"
    },
    "choices": [
      "La relation est A = [P]/(ε·l) dans la fiche.",
      "La vitesse initiale est le produit ΔA/Δt × ε × l.",
      "l correspond à la largeur de la cuve.",
      "ε est le coefficient d’absorption molaire."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Beer-Lambert permet de convertir une pente d’absorbance en vitesse de formation du produit.",
    "choiceExplanations": [
      "Faux. La relation est A = ε·l·[P].",
      "Faux. Elle est obtenue en divisant la pente par ε·l.",
      "Vrai. l correspond à la largeur de la cuve.",
      "Vrai. ε est le coefficient d’absorption molaire."
    ]
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la cinétique enzymatique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-kinetics-overview"
    },
    "choices": [
      "La cinétique enzymatique étudie la vitesse d’une réaction.",
      "La vitesse peut être définie par la quantité de substrat transformée par unité de temps.",
      "La vitesse ne peut être mesurée qu’à partir de la masse de l’enzyme.",
      "La quantité de produit formée est indépendante du temps."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La vitesse enzymatique se mesure par la disparition du substrat ou l’apparition du produit au cours du temps.",
    "choiceExplanations": [
      "Vrai. La cinétique enzymatique étudie la vitesse d’une réaction.",
      "Vrai. La vitesse peut être définie par la quantité de substrat transformée par unité de temps.",
      "Faux. Elle peut être suivie par le substrat ou le produit.",
      "Faux. La vitesse est une variation par unité de temps."
    ]
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les concentrations E, ES et Et. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-concentrations"
    },
    "choices": [
      "La concentration totale d’enzyme vérifie [E]t = [E] + [ES].",
      "La concentration totale vérifie [E]t = [S] + [P].",
      "Pendant l’état stationnaire, [ES] augmente sans limite.",
      "La concentration d’enzyme libre diminue rapidement au début."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "L’excès de substrat permet l’installation rapide d’un état stationnaire du complexe enzyme-substrat.",
    "choiceExplanations": [
      "Vrai. La concentration totale d’enzyme vérifie [E]t = [E] + [ES].",
      "Faux. Elle est la somme de l’enzyme libre et du complexe ES.",
      "Faux. Elle reste approximativement constante.",
      "Vrai. La concentration d’enzyme libre diminue rapidement au début."
    ]
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les phases de la réaction enzymatique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-phases"
    },
    "choices": [
      "La réaction accélère indéfiniment en phase post-stationnaire.",
      "La phase post-stationnaire correspond au ralentissement lorsque le substrat s’épuise ou que le produit s’accumule.",
      "La phase stationnaire correspond à une absence totale de formation de produit.",
      "La phase préstationnaire correspond à la mise en charge de l’enzyme."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La mesure enzymatique exploite la partie initiale linéaire de la réaction, avant le ralentissement.",
    "choiceExplanations": [
      "Faux. Elle ralentit.",
      "Vrai. La phase post-stationnaire correspond au ralentissement lorsque le substrat s’épuise ou que le produit s’accumule.",
      "Faux. Le produit augmente de façon presque linéaire.",
      "Vrai. La phase préstationnaire correspond à la mise en charge de l’enzyme."
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la détermination de la vitesse initiale. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "initial-rate-slope"
    },
    "choices": [
      "ΔA/Δt représente l’ordonnée à l’origine.",
      "Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes.",
      "Les mesures sont réalisées plusieurs fois par minute.",
      "La vitesse initiale correspond à la pente pendant la phase stationnaire."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La vitesse initiale est obtenue à partir de la pente d’un signal mesuré en cinétique.",
    "choiceExplanations": [
      "Faux. Il représente la pente d’absorbance.",
      "Vrai. Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes.",
      "Vrai. Les mesures sont réalisées plusieurs fois par minute.",
      "Vrai. La vitesse initiale correspond à la pente pendant la phase stationnaire."
    ]
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un laboratoire suit la formation d’un produit absorbant par spectrophotométrie pendant la phase linéaire. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "beer-lambert-rate"
    },
    "choices": [
      "La relation est A = [P]/(ε·l) dans la fiche.",
      "ε est le coefficient d’absorption molaire.",
      "La loi utilisée est A = ε·l·[P].",
      "ε représente la concentration totale d’enzyme."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Beer-Lambert permet de convertir une pente d’absorbance en vitesse de formation du produit.",
    "choiceExplanations": [
      "Faux. La relation est A = ε·l·[P].",
      "Vrai. ε est le coefficient d’absorption molaire.",
      "Vrai. La loi utilisée est A = ε·l·[P].",
      "Faux. C’est le coefficient d’absorption."
    ]
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la cinétique enzymatique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-kinetics-overview"
    },
    "choices": [
      "La quantité de produit formée est indépendante du temps.",
      "La vitesse ne peut être mesurée qu’à partir de la masse de l’enzyme.",
      "La vitesse peut aussi être définie par la quantité de produit formée par unité de temps.",
      "La cinétique enzymatique étudie la vitesse d’une réaction."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La vitesse enzymatique se mesure par la disparition du substrat ou l’apparition du produit au cours du temps.",
    "choiceExplanations": [
      "Faux. La vitesse est une variation par unité de temps.",
      "Faux. Elle peut être suivie par le substrat ou le produit.",
      "Vrai. La vitesse peut aussi être définie par la quantité de produit formée par unité de temps.",
      "Vrai. La cinétique enzymatique étudie la vitesse d’une réaction."
    ]
  },
  {
    "order": 27,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les concentrations E, ES et Et. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-concentrations"
    },
    "choices": [
      "Pendant l’état stationnaire, [ES] reste approximativement constante.",
      "L’enzyme libre reste à sa valeur initiale pendant toute la réaction.",
      "La concentration totale d’enzyme vérifie [E]t = [E] + [ES].",
      "Pendant l’état stationnaire, [ES] augmente sans limite."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’excès de substrat permet l’installation rapide d’un état stationnaire du complexe enzyme-substrat.",
    "choiceExplanations": [
      "Vrai. Pendant l’état stationnaire, [ES] reste approximativement constante.",
      "Faux. Elle diminue rapidement lors de la formation de ES.",
      "Vrai. La concentration totale d’enzyme vérifie [E]t = [E] + [ES].",
      "Faux. Elle reste approximativement constante."
    ]
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les phases de la réaction enzymatique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-phases"
    },
    "choices": [
      "La phase stationnaire correspond à une absence totale de formation de produit.",
      "La phase stationnaire est approximativement linéaire pour la formation du produit.",
      "La vitesse initiale est mesurée pendant la phase stationnaire.",
      "La phase préstationnaire correspond à la mise en charge de l’enzyme."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La mesure enzymatique exploite la partie initiale linéaire de la réaction, avant le ralentissement.",
    "choiceExplanations": [
      "Faux. Le produit augmente de façon presque linéaire.",
      "Vrai. La phase stationnaire est approximativement linéaire pour la formation du produit.",
      "Vrai. La vitesse initiale est mesurée pendant la phase stationnaire.",
      "Vrai. La phase préstationnaire correspond à la mise en charge de l’enzyme."
    ]
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la détermination de la vitesse initiale. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "initial-rate-slope"
    },
    "choices": [
      "Les mesures sont réalisées plusieurs fois par minute.",
      "Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes.",
      "Les mesures sont faites uniquement après épuisement complet du substrat.",
      "ΔA/Δt représente l’ordonnée à l’origine."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La vitesse initiale est obtenue à partir de la pente d’un signal mesuré en cinétique.",
    "choiceExplanations": [
      "Vrai. Les mesures sont réalisées plusieurs fois par minute.",
      "Vrai. Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes.",
      "Faux. Elles sont réalisées précocement.",
      "Faux. Il représente la pente d’absorbance."
    ]
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un laboratoire suit la formation d’un produit absorbant par spectrophotométrie pendant la phase linéaire. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "beer-lambert-rate"
    },
    "choices": [
      "l correspond à la largeur de la cuve.",
      "ε est le coefficient d’absorption molaire.",
      "La relation est A = [P]/(ε·l) dans la fiche.",
      "La largeur de la cuve n’intervient jamais dans l’absorbance."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Beer-Lambert permet de convertir une pente d’absorbance en vitesse de formation du produit.",
    "choiceExplanations": [
      "Vrai. l correspond à la largeur de la cuve.",
      "Vrai. ε est le coefficient d’absorption molaire.",
      "Faux. La relation est A = ε·l·[P].",
      "Faux. Elle intervient dans Beer-Lambert."
    ]
  }
];
