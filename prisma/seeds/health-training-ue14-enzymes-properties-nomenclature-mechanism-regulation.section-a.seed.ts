import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "1": [
    "les catalyseurs"
  ],
  "2": [
    "la nature des enzymes"
  ],
  "3": [
    "la puissance catalytique"
  ],
  "4": [
    "la spécificité des protéases"
  ],
  "5": [
    "l’affinité enzyme-substrat"
  ],
  "6": [
    "les catalyseurs"
  ],
  "7": [
    "la nature des enzymes"
  ],
  "8": [
    "la puissance catalytique"
  ],
  "9": [
    "la spécificité des protéases"
  ],
  "10": [
    "l’affinité enzyme-substrat"
  ],
  "11": [
    "les catalyseurs"
  ],
  "12": [
    "la nature des enzymes"
  ],
  "13": [
    "la puissance catalytique"
  ],
  "14": [
    "la spécificité des protéases"
  ],
  "15": [
    "l’affinité enzyme-substrat"
  ],
  "16": [
    "les catalyseurs"
  ],
  "17": [
    "la nature des enzymes"
  ],
  "18": [
    "la puissance catalytique"
  ],
  "19": [
    "la spécificité des protéases"
  ],
  "20": [
    "l’affinité enzyme-substrat"
  ],
  "21": [
    "les catalyseurs"
  ],
  "22": [
    "la nature des enzymes"
  ],
  "23": [
    "la puissance catalytique"
  ],
  "24": [
    "la spécificité des protéases"
  ],
  "25": [
    "l’affinité enzyme-substrat"
  ],
  "26": [
    "les catalyseurs"
  ],
  "27": [
    "la nature des enzymes"
  ],
  "28": [
    "la puissance catalytique"
  ],
  "29": [
    "la spécificité des protéases"
  ],
  "30": [
    "l’affinité enzyme-substrat"
  ]
};

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "catalyseurs-proprietes-specificite-1",
    "title": "Catalyseurs et enzymes",
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
    "slug": "catalyseurs-proprietes-specificite-2",
    "title": "Spécificité et affinité enzymatiques",
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
    "slug": "catalyseurs-proprietes-specificite-3",
    "title": "Comparaison des propriétés enzymatiques",
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
    "question": "À propos de les catalyseurs :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalyst-types"
    },
    "choices": [
      "Un catalyseur accélère une réaction chimique.",
      "Les catalyseurs insolubles relèvent d’une catalyse hétérogène.",
      "Les catalyseurs peuvent être minéraux ou organiques.",
      "Un catalyseur impose nécessairement une réaction impossible thermodynamiquement."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les catalyseurs accélèrent les réactions; leur solubilité permet de distinguer catalyses homogène et hétérogène.",
    "choiceExplanations": [
      "Vrai. Un catalyseur accélère une réaction chimique.",
      "Vrai. Les catalyseurs insolubles relèvent d’une catalyse hétérogène.",
      "Vrai. Les catalyseurs peuvent être minéraux ou organiques.",
      "Faux. Il accélère une réaction possible sans modifier sa faisabilité thermodynamique."
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la nature des enzymes :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nature"
    },
    "choices": [
      "Les enzymes sont dépourvues de spécificité.",
      "Les enzymes possèdent un pouvoir catalytique élevé.",
      "Un ribozyme est une protéine contenant du ribose.",
      "La plupart des enzymes sont des protéines."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les enzymes sont des catalyseurs biologiques, principalement protéiques, capables de reconnaître sélectivement leurs substrats.",
    "choiceExplanations": [
      "Faux. La spécificité est une propriété majeure.",
      "Vrai. Les enzymes possèdent un pouvoir catalytique élevé.",
      "Faux. C’est un ARN doté d’une activité catalytique.",
      "Vrai. La plupart des enzymes sont des protéines."
    ]
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la puissance catalytique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-power"
    },
    "choices": [
      "La puissance catalytique indique la quantité d’enzyme consommée.",
      "L’OMP décarboxylase est donnée comme exemple d’une accélération de 10¹⁷.",
      "Les enzymes accélèrent les réactions biologiques d’un facteur au moins égal à 10⁶ selon la fiche.",
      "La nucléase staphylococcique est associée à un facteur de 10¹⁴."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La catalyse enzymatique peut accélérer une réaction de plusieurs millions à plusieurs milliards de milliards de fois.",
    "choiceExplanations": [
      "Faux. Elle décrit l’accélération de la réaction.",
      "Vrai. L’OMP décarboxylase est donnée comme exemple d’une accélération de 10¹⁷.",
      "Vrai. Les enzymes accélèrent les réactions biologiques d’un facteur au moins égal à 10⁶ selon la fiche.",
      "Vrai. La nucléase staphylococcique est associée à un facteur de 10¹⁴."
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la spécificité des protéases :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "protease-specificity"
    },
    "choices": [
      "La trypsine clive après une arginine ou une lysine.",
      "La trypsine coupe uniquement les liaisons Phe-X.",
      "La spécificité enzymatique est relative et varie selon l’enzyme.",
      "Toutes les protéases reconnaissent exactement la même liaison."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les protéases illustrent un continuum allant d’une spécificité large à une reconnaissance très précise.",
    "choiceExplanations": [
      "Vrai. La trypsine clive après une arginine ou une lysine.",
      "Faux. La fiche indique Arg-X et Lys-X.",
      "Vrai. La spécificité enzymatique est relative et varie selon l’enzyme.",
      "Faux. Leurs spécificités diffèrent."
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’affinité enzyme-substrat :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-substrate-affinity"
    },
    "choices": [
      "Des liaisons ioniques et hydrogène peuvent stabiliser le complexe enzyme-substrat.",
      "Des interactions hydrophobes peuvent participer à la fixation.",
      "La complémentarité du site actif contribue à l’affinité.",
      "Les interactions hydrophobes sont impossibles dans un site actif."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La somme de nombreuses interactions faibles permet une fixation efficace et sélective du substrat.",
    "choiceExplanations": [
      "Vrai. Des liaisons ioniques et hydrogène peuvent stabiliser le complexe enzyme-substrat.",
      "Vrai. Des interactions hydrophobes peuvent participer à la fixation.",
      "Vrai. La complémentarité du site actif contribue à l’affinité.",
      "Faux. Elles peuvent participer à la reconnaissance."
    ]
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les catalyseurs :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalyst-types"
    },
    "choices": [
      "Les catalyseurs peuvent être minéraux ou organiques.",
      "Le nickel et le platine sont des ribozymes.",
      "Les catalyseurs solubles, dont les enzymes, relèvent d’une catalyse homogène.",
      "Un catalyseur impose nécessairement une réaction impossible thermodynamiquement."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les catalyseurs accélèrent les réactions; leur solubilité permet de distinguer catalyses homogène et hétérogène.",
    "choiceExplanations": [
      "Vrai. Les catalyseurs peuvent être minéraux ou organiques.",
      "Faux. Ce sont des catalyseurs minéraux solides.",
      "Vrai. Les catalyseurs solubles, dont les enzymes, relèvent d’une catalyse homogène.",
      "Faux. Il accélère une réaction possible sans modifier sa faisabilité thermodynamique."
    ]
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la nature des enzymes :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nature"
    },
    "choices": [
      "Une enzyme est consommée stœchiométriquement à chaque réaction.",
      "Les enzymes possèdent un pouvoir catalytique élevé.",
      "Les enzymes présentent une spécificité de réaction et de substrat.",
      "La plupart des enzymes sont des protéines."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les enzymes sont des catalyseurs biologiques, principalement protéiques, capables de reconnaître sélectivement leurs substrats.",
    "choiceExplanations": [
      "Faux. Elle agit comme catalyseur et peut participer à plusieurs cycles.",
      "Vrai. Les enzymes possèdent un pouvoir catalytique élevé.",
      "Vrai. Les enzymes présentent une spécificité de réaction et de substrat.",
      "Vrai. La plupart des enzymes sont des protéines."
    ]
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la puissance catalytique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-power"
    },
    "choices": [
      "Les enzymes n’ont qu’un effet négligeable sur la vitesse.",
      "L’anhydrase carbonique est associée à un facteur de 10⁶.",
      "La nucléase staphylococcique est associée à un facteur de 10¹⁴.",
      "L’anhydrase carbonique est donnée comme exemple d’un facteur 10⁻⁶."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La catalyse enzymatique peut accélérer une réaction de plusieurs millions à plusieurs milliards de milliards de fois.",
    "choiceExplanations": [
      "Faux. Leur pouvoir catalytique peut être considérable.",
      "Vrai. L’anhydrase carbonique est associée à un facteur de 10⁶.",
      "Vrai. La nucléase staphylococcique est associée à un facteur de 10¹⁴.",
      "Faux. La valeur indiquée est 10⁶."
    ]
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la spécificité des protéases :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "protease-specificity"
    },
    "choices": [
      "La subtilisine peut couper entre deux acides aminés quelconques dans l’exemple du cours.",
      "La thrombine possède une spécificité plus faible que la subtilisine.",
      "La spécificité enzymatique est relative et varie selon l’enzyme.",
      "La trypsine clive après une arginine ou une lysine."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les protéases illustrent un continuum allant d’une spécificité large à une reconnaissance très précise.",
    "choiceExplanations": [
      "Vrai. La subtilisine peut couper entre deux acides aminés quelconques dans l’exemple du cours.",
      "Faux. Elle est présentée comme très spécifique.",
      "Vrai. La spécificité enzymatique est relative et varie selon l’enzyme.",
      "Vrai. La trypsine clive après une arginine ou une lysine."
    ]
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’affinité enzyme-substrat :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-substrate-affinity"
    },
    "choices": [
      "Une forte affinité exige toujours des concentrations molaires très élevées.",
      "L’affinité dépend uniquement de liaisons covalentes irréversibles.",
      "Des liaisons ioniques et hydrogène peuvent stabiliser le complexe enzyme-substrat.",
      "Des interactions hydrophobes peuvent participer à la fixation."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La somme de nombreuses interactions faibles permet une fixation efficace et sélective du substrat.",
    "choiceExplanations": [
      "Faux. La fixation peut avoir lieu à quelques micromoles par litre.",
      "Faux. De nombreuses interactions non covalentes participent à la fixation.",
      "Vrai. Des liaisons ioniques et hydrogène peuvent stabiliser le complexe enzyme-substrat.",
      "Vrai. Des interactions hydrophobes peuvent participer à la fixation."
    ]
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les catalyseurs, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalyst-types"
    },
    "choices": [
      "Une enzyme soluble réalise une catalyse hétérogène.",
      "Les catalyseurs peuvent être minéraux ou organiques.",
      "Un catalyseur impose nécessairement une réaction impossible thermodynamiquement.",
      "Un catalyseur accélère une réaction chimique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les catalyseurs accélèrent les réactions; leur solubilité permet de distinguer catalyses homogène et hétérogène.",
    "choiceExplanations": [
      "Faux. La fiche la classe dans la catalyse homogène.",
      "Vrai. Les catalyseurs peuvent être minéraux ou organiques.",
      "Faux. Il accélère une réaction possible sans modifier sa faisabilité thermodynamique.",
      "Vrai. Un catalyseur accélère une réaction chimique."
    ]
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la nature des enzymes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nature"
    },
    "choices": [
      "Les enzymes sont dépourvues de spécificité.",
      "Une enzyme est consommée stœchiométriquement à chaque réaction.",
      "Les enzymes présentent une spécificité de réaction et de substrat.",
      "Un ribozyme est une protéine contenant du ribose."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "Les enzymes sont des catalyseurs biologiques, principalement protéiques, capables de reconnaître sélectivement leurs substrats.",
    "choiceExplanations": [
      "Faux. La spécificité est une propriété majeure.",
      "Faux. Elle agit comme catalyseur et peut participer à plusieurs cycles.",
      "Vrai. Les enzymes présentent une spécificité de réaction et de substrat.",
      "Faux. C’est un ARN doté d’une activité catalytique."
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la puissance catalytique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-power"
    },
    "choices": [
      "Les enzymes n’ont qu’un effet négligeable sur la vitesse.",
      "Les enzymes accélèrent les réactions biologiques d’un facteur au moins égal à 10⁶ selon la fiche.",
      "L’OMP décarboxylase est donnée comme exemple d’une accélération de 10¹⁷.",
      "La puissance catalytique indique la quantité d’enzyme consommée."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La catalyse enzymatique peut accélérer une réaction de plusieurs millions à plusieurs milliards de milliards de fois.",
    "choiceExplanations": [
      "Faux. Leur pouvoir catalytique peut être considérable.",
      "Vrai. Les enzymes accélèrent les réactions biologiques d’un facteur au moins égal à 10⁶ selon la fiche.",
      "Vrai. L’OMP décarboxylase est donnée comme exemple d’une accélération de 10¹⁷.",
      "Faux. Elle décrit l’accélération de la réaction."
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la spécificité des protéases, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "protease-specificity"
    },
    "choices": [
      "La trypsine coupe uniquement les liaisons Phe-X.",
      "La subtilisine ne peut couper qu’une liaison Arg-Gly.",
      "La thrombine reconnaît la liaison Arg-Gly dans l’exemple donné.",
      "La trypsine clive après une arginine ou une lysine."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les protéases illustrent un continuum allant d’une spécificité large à une reconnaissance très précise.",
    "choiceExplanations": [
      "Faux. La fiche indique Arg-X et Lys-X.",
      "Faux. Cet exemple correspond à la thrombine.",
      "Vrai. La thrombine reconnaît la liaison Arg-Gly dans l’exemple donné.",
      "Vrai. La trypsine clive après une arginine ou une lysine."
    ]
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’affinité enzyme-substrat, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-substrate-affinity"
    },
    "choices": [
      "L’affinité et la spécificité sont sans lien avec la structure tridimensionnelle.",
      "Une enzyme peut fixer son substrat à de très faibles concentrations.",
      "Les interactions hydrophobes sont impossibles dans un site actif.",
      "Une forte affinité exige toujours des concentrations molaires très élevées."
    ],
    "correctChoiceIndexes": [
      1
    ],
    "explanation": "La somme de nombreuses interactions faibles permet une fixation efficace et sélective du substrat.",
    "choiceExplanations": [
      "Faux. La géométrie et les interactions du site actif sont déterminantes.",
      "Vrai. Une enzyme peut fixer son substrat à de très faibles concentrations.",
      "Faux. Elles peuvent participer à la reconnaissance.",
      "Faux. La fixation peut avoir lieu à quelques micromoles par litre."
    ]
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les catalyseurs, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalyst-types"
    },
    "choices": [
      "Les catalyseurs solubles, dont les enzymes, relèvent d’une catalyse homogène.",
      "Les catalyseurs peuvent être minéraux ou organiques.",
      "Un catalyseur impose nécessairement une réaction impossible thermodynamiquement.",
      "Une enzyme soluble réalise une catalyse hétérogène."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les catalyseurs accélèrent les réactions; leur solubilité permet de distinguer catalyses homogène et hétérogène.",
    "choiceExplanations": [
      "Vrai. Les catalyseurs solubles, dont les enzymes, relèvent d’une catalyse homogène.",
      "Vrai. Les catalyseurs peuvent être minéraux ou organiques.",
      "Faux. Il accélère une réaction possible sans modifier sa faisabilité thermodynamique.",
      "Faux. La fiche la classe dans la catalyse homogène."
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la nature des enzymes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nature"
    },
    "choices": [
      "Toutes les enzymes sont exclusivement des lipides.",
      "La plupart des enzymes sont des protéines.",
      "Les enzymes possèdent un pouvoir catalytique élevé.",
      "Un ribozyme est une protéine contenant du ribose."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les enzymes sont des catalyseurs biologiques, principalement protéiques, capables de reconnaître sélectivement leurs substrats.",
    "choiceExplanations": [
      "Faux. Les enzymes sont surtout protéiques, avec le cas particulier des ribozymes.",
      "Vrai. La plupart des enzymes sont des protéines.",
      "Vrai. Les enzymes possèdent un pouvoir catalytique élevé.",
      "Faux. C’est un ARN doté d’une activité catalytique."
    ]
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la puissance catalytique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-power"
    },
    "choices": [
      "L’anhydrase carbonique est associée à un facteur de 10⁶.",
      "L’OMP décarboxylase ralentit la réaction d’un facteur 10¹⁷.",
      "Les enzymes n’ont qu’un effet négligeable sur la vitesse.",
      "La puissance catalytique indique la quantité d’enzyme consommée."
    ],
    "correctChoiceIndexes": [
      0
    ],
    "explanation": "La catalyse enzymatique peut accélérer une réaction de plusieurs millions à plusieurs milliards de milliards de fois.",
    "choiceExplanations": [
      "Vrai. L’anhydrase carbonique est associée à un facteur de 10⁶.",
      "Faux. Elle l’accélère fortement.",
      "Faux. Leur pouvoir catalytique peut être considérable.",
      "Faux. Elle décrit l’accélération de la réaction."
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la spécificité des protéases, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "protease-specificity"
    },
    "choices": [
      "La thrombine reconnaît la liaison Arg-Gly dans l’exemple donné.",
      "Toutes les protéases reconnaissent exactement la même liaison.",
      "La subtilisine ne peut couper qu’une liaison Arg-Gly.",
      "La trypsine clive après une arginine ou une lysine."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les protéases illustrent un continuum allant d’une spécificité large à une reconnaissance très précise.",
    "choiceExplanations": [
      "Vrai. La thrombine reconnaît la liaison Arg-Gly dans l’exemple donné.",
      "Faux. Leurs spécificités diffèrent.",
      "Faux. Cet exemple correspond à la thrombine.",
      "Vrai. La trypsine clive après une arginine ou une lysine."
    ]
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’affinité enzyme-substrat, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-substrate-affinity"
    },
    "choices": [
      "Des interactions hydrophobes peuvent participer à la fixation.",
      "Une forte affinité exige toujours des concentrations molaires très élevées.",
      "L’affinité dépend uniquement de liaisons covalentes irréversibles.",
      "La complémentarité du site actif contribue à l’affinité."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La somme de nombreuses interactions faibles permet une fixation efficace et sélective du substrat.",
    "choiceExplanations": [
      "Vrai. Des interactions hydrophobes peuvent participer à la fixation.",
      "Faux. La fixation peut avoir lieu à quelques micromoles par litre.",
      "Faux. De nombreuses interactions non covalentes participent à la fixation.",
      "Vrai. La complémentarité du site actif contribue à l’affinité."
    ]
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les catalyseurs. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalyst-types"
    },
    "choices": [
      "Les catalyseurs insolubles relèvent d’une catalyse hétérogène.",
      "Un catalyseur impose nécessairement une réaction impossible thermodynamiquement.",
      "Les catalyseurs peuvent être minéraux ou organiques.",
      "Le nickel et le platine sont des ribozymes."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les catalyseurs accélèrent les réactions; leur solubilité permet de distinguer catalyses homogène et hétérogène.",
    "choiceExplanations": [
      "Vrai. Les catalyseurs insolubles relèvent d’une catalyse hétérogène.",
      "Faux. Il accélère une réaction possible sans modifier sa faisabilité thermodynamique.",
      "Vrai. Les catalyseurs peuvent être minéraux ou organiques.",
      "Faux. Ce sont des catalyseurs minéraux solides."
    ]
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la nature des enzymes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nature"
    },
    "choices": [
      "Une enzyme est consommée stœchiométriquement à chaque réaction.",
      "Les ribozymes sont des ARN catalytiques.",
      "Un ribozyme est une protéine contenant du ribose.",
      "Les enzymes possèdent un pouvoir catalytique élevé."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les enzymes sont des catalyseurs biologiques, principalement protéiques, capables de reconnaître sélectivement leurs substrats.",
    "choiceExplanations": [
      "Faux. Elle agit comme catalyseur et peut participer à plusieurs cycles.",
      "Vrai. Les ribozymes sont des ARN catalytiques.",
      "Faux. C’est un ARN doté d’une activité catalytique.",
      "Vrai. Les enzymes possèdent un pouvoir catalytique élevé."
    ]
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la puissance catalytique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-power"
    },
    "choices": [
      "L’anhydrase carbonique est donnée comme exemple d’un facteur 10⁻⁶.",
      "Les enzymes accélèrent les réactions biologiques d’un facteur au moins égal à 10⁶ selon la fiche.",
      "La nucléase staphylococcique est associée à un facteur de 10¹⁴.",
      "Les enzymes n’ont qu’un effet négligeable sur la vitesse."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La catalyse enzymatique peut accélérer une réaction de plusieurs millions à plusieurs milliards de milliards de fois.",
    "choiceExplanations": [
      "Faux. La valeur indiquée est 10⁶.",
      "Vrai. Les enzymes accélèrent les réactions biologiques d’un facteur au moins égal à 10⁶ selon la fiche.",
      "Vrai. La nucléase staphylococcique est associée à un facteur de 10¹⁴.",
      "Faux. Leur pouvoir catalytique peut être considérable."
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la spécificité des protéases. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "protease-specificity"
    },
    "choices": [
      "La spécificité enzymatique est relative et varie selon l’enzyme.",
      "La trypsine clive après une arginine ou une lysine.",
      "La thrombine reconnaît la liaison Arg-Gly dans l’exemple donné.",
      "La subtilisine ne peut couper qu’une liaison Arg-Gly."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les protéases illustrent un continuum allant d’une spécificité large à une reconnaissance très précise.",
    "choiceExplanations": [
      "Vrai. La spécificité enzymatique est relative et varie selon l’enzyme.",
      "Vrai. La trypsine clive après une arginine ou une lysine.",
      "Vrai. La thrombine reconnaît la liaison Arg-Gly dans l’exemple donné.",
      "Faux. Cet exemple correspond à la thrombine."
    ]
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’affinité enzyme-substrat. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-substrate-affinity"
    },
    "choices": [
      "Une enzyme peut fixer son substrat à de très faibles concentrations.",
      "L’affinité dépend uniquement de liaisons covalentes irréversibles.",
      "L’affinité et la spécificité sont sans lien avec la structure tridimensionnelle.",
      "Des interactions hydrophobes peuvent participer à la fixation."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La somme de nombreuses interactions faibles permet une fixation efficace et sélective du substrat.",
    "choiceExplanations": [
      "Vrai. Une enzyme peut fixer son substrat à de très faibles concentrations.",
      "Faux. De nombreuses interactions non covalentes participent à la fixation.",
      "Faux. La géométrie et les interactions du site actif sont déterminantes.",
      "Vrai. Des interactions hydrophobes peuvent participer à la fixation."
    ]
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les catalyseurs. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalyst-types"
    },
    "choices": [
      "Tous les catalyseurs sont des protéines.",
      "Une enzyme soluble réalise une catalyse hétérogène.",
      "Les catalyseurs insolubles relèvent d’une catalyse hétérogène.",
      "Un catalyseur accélère une réaction chimique."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les catalyseurs accélèrent les réactions; leur solubilité permet de distinguer catalyses homogène et hétérogène.",
    "choiceExplanations": [
      "Faux. Il existe aussi des catalyseurs minéraux et organiques non protéiques.",
      "Faux. La fiche la classe dans la catalyse homogène.",
      "Vrai. Les catalyseurs insolubles relèvent d’une catalyse hétérogène.",
      "Vrai. Un catalyseur accélère une réaction chimique."
    ]
  },
  {
    "order": 27,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la nature des enzymes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nature"
    },
    "choices": [
      "La plupart des enzymes sont des protéines.",
      "Un ribozyme est une protéine contenant du ribose.",
      "Une enzyme est consommée stœchiométriquement à chaque réaction.",
      "Les enzymes présentent une spécificité de réaction et de substrat."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les enzymes sont des catalyseurs biologiques, principalement protéiques, capables de reconnaître sélectivement leurs substrats.",
    "choiceExplanations": [
      "Vrai. La plupart des enzymes sont des protéines.",
      "Faux. C’est un ARN doté d’une activité catalytique.",
      "Faux. Elle agit comme catalyseur et peut participer à plusieurs cycles.",
      "Vrai. Les enzymes présentent une spécificité de réaction et de substrat."
    ]
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la puissance catalytique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-power"
    },
    "choices": [
      "La puissance catalytique indique la quantité d’enzyme consommée.",
      "Les enzymes accélèrent les réactions biologiques d’un facteur au moins égal à 10⁶ selon la fiche.",
      "L’OMP décarboxylase est donnée comme exemple d’une accélération de 10¹⁷.",
      "L’anhydrase carbonique est associée à un facteur de 10⁶."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La catalyse enzymatique peut accélérer une réaction de plusieurs millions à plusieurs milliards de milliards de fois.",
    "choiceExplanations": [
      "Faux. Elle décrit l’accélération de la réaction.",
      "Vrai. Les enzymes accélèrent les réactions biologiques d’un facteur au moins égal à 10⁶ selon la fiche.",
      "Vrai. L’OMP décarboxylase est donnée comme exemple d’une accélération de 10¹⁷.",
      "Vrai. L’anhydrase carbonique est associée à un facteur de 10⁶."
    ]
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la spécificité des protéases. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "protease-specificity"
    },
    "choices": [
      "La spécificité enzymatique est relative et varie selon l’enzyme.",
      "La thrombine possède une spécificité plus faible que la subtilisine.",
      "La subtilisine ne peut couper qu’une liaison Arg-Gly.",
      "La thrombine reconnaît la liaison Arg-Gly dans l’exemple donné."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les protéases illustrent un continuum allant d’une spécificité large à une reconnaissance très précise.",
    "choiceExplanations": [
      "Vrai. La spécificité enzymatique est relative et varie selon l’enzyme.",
      "Faux. Elle est présentée comme très spécifique.",
      "Faux. Cet exemple correspond à la thrombine.",
      "Vrai. La thrombine reconnaît la liaison Arg-Gly dans l’exemple donné."
    ]
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’affinité enzyme-substrat. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-substrate-affinity"
    },
    "choices": [
      "Une forte affinité exige toujours des concentrations molaires très élevées.",
      "L’affinité et la spécificité sont sans lien avec la structure tridimensionnelle.",
      "Des liaisons ioniques et hydrogène peuvent stabiliser le complexe enzyme-substrat.",
      "Des interactions hydrophobes peuvent participer à la fixation."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La somme de nombreuses interactions faibles permet une fixation efficace et sélective du substrat.",
    "choiceExplanations": [
      "Faux. La fixation peut avoir lieu à quelques micromoles par litre.",
      "Faux. La géométrie et les interactions du site actif sont déterminantes.",
      "Vrai. Des liaisons ioniques et hydrogène peuvent stabiliser le complexe enzyme-substrat.",
      "Vrai. Des interactions hydrophobes peuvent participer à la fixation."
    ]
  }
];
