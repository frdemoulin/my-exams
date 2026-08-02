import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "61": [
    "la chaîne alpha du collagène I"
  ],
  "62": [
    "la triple hélice du collagène"
  ],
  "63": [
    "les fibrilles de collagène I"
  ],
  "64": [
    "les liaisons croisées et fibres de collagène"
  ],
  "65": [
    "le collagène de type IV"
  ],
  "66": [
    "la chaîne alpha du collagène I"
  ],
  "67": [
    "la triple hélice du collagène"
  ],
  "68": [
    "les fibrilles de collagène I"
  ],
  "69": [
    "les liaisons croisées et fibres de collagène"
  ],
  "70": [
    "le collagène de type IV"
  ],
  "71": [
    "la chaîne alpha du collagène I"
  ],
  "72": [
    "la triple hélice du collagène"
  ],
  "73": [
    "les fibrilles de collagène I"
  ],
  "74": [
    "les liaisons croisées et fibres de collagène"
  ],
  "75": [
    "le collagène de type IV"
  ],
  "76": [
    "la chaîne alpha du collagène I"
  ],
  "77": [
    "la triple hélice du collagène"
  ],
  "78": [
    "les fibrilles de collagène I"
  ],
  "79": [
    "les liaisons croisées et fibres de collagène"
  ],
  "80": [
    "le collagène de type IV"
  ],
  "81": [
    "la chaîne alpha du collagène I"
  ],
  "82": [
    "la triple hélice du collagène"
  ],
  "83": [
    "les fibrilles de collagène I"
  ],
  "84": [
    "les liaisons croisées et fibres de collagène"
  ],
  "85": [
    "le collagène de type IV"
  ],
  "86": [
    "la chaîne alpha du collagène I"
  ],
  "87": [
    "la triple hélice du collagène"
  ],
  "88": [
    "les fibrilles de collagène I"
  ],
  "89": [
    "les liaisons croisées et fibres de collagène"
  ],
  "90": [
    "le collagène de type IV"
  ]
};

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "collagene-structure-1",
    "title": "Chaîne alpha et triple hélice",
    "description": "Identifier les notions essentielles.",
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
    "slug": "collagene-structure-2",
    "title": "Fibrilles et fibres de collagène I",
    "description": "Appliquer et comparer les notions du cours.",
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
    "slug": "collagene-structure-3",
    "title": "Collagène IV et réseaux",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 3,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères essentiels",
        "sharedStatement": "Les questions suivantes portent sur les principaux repères de la section.",
        "questionOrders": [
          81,
          82,
          83
        ]
      },
      {
        "type": "GROUP",
        "title": "Structure et fonction",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          84,
          85,
          86
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications",
        "sharedStatement": "Les questions suivantes mobilisent les notions dans des situations biologiques ou médicales.",
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
    "question": "À propos de la chaîne alpha du collagène I :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-alpha-chain"
    },
    "choices": [
      "Sa structure secondaire est une hélice gauche.",
      "Elle comporte 3,6 résidus par tour comme l’hélice α.",
      "Elle est de type polyproline II.",
      "Elle n’est pas une hélice α classique."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Chaque chaîne de collagène adopte une hélice gauche particulière riche en proline.",
    "choiceExplanations": [
      "Vrai. Sa structure secondaire est une hélice gauche.",
      "Faux. La fiche indique généralement trois.",
      "Vrai. Elle est de type polyproline II.",
      "Vrai. Elle n’est pas une hélice α classique."
    ]
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la triple hélice du collagène :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-triple-helix"
    },
    "choices": [
      "Elle associe trois chaînes α.",
      "L’hydroxyproline n’intervient dans aucune stabilisation.",
      "La superhélice finale est orientée à gauche dans la fiche.",
      "Le surenroulement forme une superhélice droite."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le surenroulement de trois chaînes forme la triple hélice droite du collagène.",
    "choiceExplanations": [
      "Vrai. Elle associe trois chaînes α.",
      "Faux. Ses OH contribuent aux liaisons hydrogène.",
      "Faux. Elle est droite.",
      "Vrai. Le surenroulement forme une superhélice droite."
    ]
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les fibrilles de collagène I :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-fibril"
    },
    "choices": [
      "Le monomère est appelé tropocollagène.",
      "Il produit un aspect strié en microscopie électronique.",
      "Les fibrilles ne présentent aucune striation.",
      "Les molécules sont décalées d’un quart de leur longueur."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "L’agencement décalé du tropocollagène explique la striation des fibrilles.",
    "choiceExplanations": [
      "Vrai. Le monomère est appelé tropocollagène.",
      "Vrai. Il produit un aspect strié en microscopie électronique.",
      "Faux. Le décalage produit une striation.",
      "Vrai. Les molécules sont décalées d’un quart de leur longueur."
    ]
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les liaisons croisées et fibres de collagène :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-crosslinks"
    },
    "choices": [
      "Les fibres sont plus petites que les molécules de tropocollagène.",
      "Le diamètre augmente au cours de ces niveaux d’assemblage.",
      "La lysyl-oxydase agit exclusivement sur la glycine.",
      "Les liaisons croisées sont covalentes."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La réticulation covalente et l’assemblage hiérarchique donnent la résistance des fibres.",
    "choiceExplanations": [
      "Faux. L’assemblage augmente le diamètre.",
      "Vrai. Le diamètre augmente au cours de ces niveaux d’assemblage.",
      "Faux. Elle transforme des résidus de lysine.",
      "Vrai. Les liaisons croisées sont covalentes."
    ]
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le collagène de type IV :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-type-iv"
    },
    "choices": [
      "Les domaines 7S et NC1 participent à l’organisation du réseau.",
      "Les domaines NC1 et 7S n’ont aucun rôle dans le réseau.",
      "Il forme des réseaux.",
      "Il est présent notamment dans les reins et les poumons."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le collagène IV construit des réseaux spécialisés des membranes basales.",
    "choiceExplanations": [
      "Vrai. Les domaines 7S et NC1 participent à l’organisation du réseau.",
      "Faux. Ils participent à l’assemblage.",
      "Vrai. Il forme des réseaux.",
      "Vrai. Il est présent notamment dans les reins et les poumons."
    ]
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la chaîne alpha du collagène I :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-alpha-chain"
    },
    "choices": [
      "Elle n’est pas une hélice α classique.",
      "Sa structure secondaire est une hélice gauche.",
      "La chaîne est stabilisée uniquement par de nombreux ponts disulfure.",
      "La proline est absente du collagène."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Chaque chaîne de collagène adopte une hélice gauche particulière riche en proline.",
    "choiceExplanations": [
      "Vrai. Elle n’est pas une hélice α classique.",
      "Vrai. Sa structure secondaire est une hélice gauche.",
      "Faux. La répulsion stérique et la composition jouent un rôle important.",
      "Faux. Elle y est fréquente."
    ]
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la triple hélice du collagène :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-triple-helix"
    },
    "choices": [
      "Elle associe trois chaînes α.",
      "Le surenroulement forme une superhélice droite.",
      "La glycine est située au centre en raison de son faible encombrement.",
      "La glycine est trop volumineuse pour le centre."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le surenroulement de trois chaînes forme la triple hélice droite du collagène.",
    "choiceExplanations": [
      "Vrai. Elle associe trois chaînes α.",
      "Vrai. Le surenroulement forme une superhélice droite.",
      "Vrai. La glycine est située au centre en raison de son faible encombrement.",
      "Faux. Elle est la plus petite chaîne latérale."
    ]
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les fibrilles de collagène I :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-fibril"
    },
    "choices": [
      "Les molécules sont décalées d’un quart de leur longueur.",
      "Le décalage correspond à environ 67 nm.",
      "Les fibrilles ne présentent aucune striation.",
      "Le tropocollagène est une enzyme cytosolique."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "L’agencement décalé du tropocollagène explique la striation des fibrilles.",
    "choiceExplanations": [
      "Vrai. Les molécules sont décalées d’un quart de leur longueur.",
      "Vrai. Le décalage correspond à environ 67 nm.",
      "Faux. Le décalage produit une striation.",
      "Faux. C’est le monomère du collagène."
    ]
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les liaisons croisées et fibres de collagène :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-crosslinks"
    },
    "choices": [
      "Elles dérivent de résidus de lysine transformés par la lysyl-oxydase.",
      "Le diamètre augmente au cours de ces niveaux d’assemblage.",
      "Les fibrilles s’associent en fibres puis en faisceaux.",
      "Les fibrilles ne peuvent jamais former de faisceaux."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La réticulation covalente et l’assemblage hiérarchique donnent la résistance des fibres.",
    "choiceExplanations": [
      "Vrai. Elles dérivent de résidus de lysine transformés par la lysyl-oxydase.",
      "Vrai. Le diamètre augmente au cours de ces niveaux d’assemblage.",
      "Vrai. Les fibrilles s’associent en fibres puis en faisceaux.",
      "Faux. Elles s’associent en fibres puis faisceaux."
    ]
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le collagène de type IV :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-type-iv"
    },
    "choices": [
      "Les domaines NC1 et 7S n’ont aucun rôle dans le réseau.",
      "Les domaines 7S et NC1 participent à l’organisation du réseau.",
      "Il forme des réseaux.",
      "Il est absent des membranes basales."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le collagène IV construit des réseaux spécialisés des membranes basales.",
    "choiceExplanations": [
      "Faux. Ils participent à l’assemblage.",
      "Vrai. Les domaines 7S et NC1 participent à l’organisation du réseau.",
      "Vrai. Il forme des réseaux.",
      "Faux. Il en est un composant typique."
    ]
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la chaîne alpha du collagène I, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-alpha-chain"
    },
    "choices": [
      "Sa structure secondaire est une hélice gauche.",
      "La chaîne est stabilisée uniquement par de nombreux ponts disulfure.",
      "La chaîne α de collagène est une hélice α droite classique.",
      "Elle comporte généralement trois résidus par tour."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Chaque chaîne de collagène adopte une hélice gauche particulière riche en proline.",
    "choiceExplanations": [
      "Vrai. Sa structure secondaire est une hélice gauche.",
      "Faux. La répulsion stérique et la composition jouent un rôle important.",
      "Faux. Elle est une hélice gauche de type polyproline II.",
      "Vrai. Elle comporte généralement trois résidus par tour."
    ]
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la triple hélice du collagène, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-triple-helix"
    },
    "choices": [
      "Elle associe trois chaînes α.",
      "La glycine est trop volumineuse pour le centre.",
      "La superhélice finale est orientée à gauche dans la fiche.",
      "Le surenroulement forme une superhélice droite."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le surenroulement de trois chaînes forme la triple hélice droite du collagène.",
    "choiceExplanations": [
      "Vrai. Elle associe trois chaînes α.",
      "Faux. Elle est la plus petite chaîne latérale.",
      "Faux. Elle est droite.",
      "Vrai. Le surenroulement forme une superhélice droite."
    ]
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les fibrilles de collagène I, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-fibril"
    },
    "choices": [
      "Les fibrilles ne présentent aucune striation.",
      "Il produit un aspect strié en microscopie électronique.",
      "La périodicité décrite est de 6,7 µm.",
      "Le décalage correspond à environ 67 nm."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’agencement décalé du tropocollagène explique la striation des fibrilles.",
    "choiceExplanations": [
      "Faux. Le décalage produit une striation.",
      "Vrai. Il produit un aspect strié en microscopie électronique.",
      "Faux. Elle est d’environ 67 nm.",
      "Vrai. Le décalage correspond à environ 67 nm."
    ]
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les liaisons croisées et fibres de collagène, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-crosslinks"
    },
    "choices": [
      "Les fibrilles ne peuvent jamais former de faisceaux.",
      "Le diamètre augmente au cours de ces niveaux d’assemblage.",
      "Elles dérivent de résidus de lysine transformés par la lysyl-oxydase.",
      "La lysyl-oxydase agit exclusivement sur la glycine."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La réticulation covalente et l’assemblage hiérarchique donnent la résistance des fibres.",
    "choiceExplanations": [
      "Faux. Elles s’associent en fibres puis faisceaux.",
      "Vrai. Le diamètre augmente au cours de ces niveaux d’assemblage.",
      "Vrai. Elles dérivent de résidus de lysine transformés par la lysyl-oxydase.",
      "Faux. Elle transforme des résidus de lysine."
    ]
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le collagène de type IV, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-type-iv"
    },
    "choices": [
      "Le collagène IV forme principalement de longues fibrilles striées de type I.",
      "Il est typique des membranes basales.",
      "Les domaines NC1 et 7S n’ont aucun rôle dans le réseau.",
      "Il est présent notamment dans les reins et les poumons."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le collagène IV construit des réseaux spécialisés des membranes basales.",
    "choiceExplanations": [
      "Faux. Il forme des réseaux.",
      "Vrai. Il est typique des membranes basales.",
      "Faux. Ils participent à l’assemblage.",
      "Vrai. Il est présent notamment dans les reins et les poumons."
    ]
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la chaîne alpha du collagène I, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-alpha-chain"
    },
    "choices": [
      "Elle est de type polyproline II.",
      "La chaîne α de collagène est une hélice α droite classique.",
      "Elle comporte 3,6 résidus par tour comme l’hélice α.",
      "Sa structure secondaire est une hélice gauche."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Chaque chaîne de collagène adopte une hélice gauche particulière riche en proline.",
    "choiceExplanations": [
      "Vrai. Elle est de type polyproline II.",
      "Faux. Elle est une hélice gauche de type polyproline II.",
      "Faux. La fiche indique généralement trois.",
      "Vrai. Sa structure secondaire est une hélice gauche."
    ]
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la triple hélice du collagène, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-triple-helix"
    },
    "choices": [
      "Le surenroulement forme une superhélice droite.",
      "La superhélice finale est orientée à gauche dans la fiche.",
      "La triple hélice associe trois hélices α droites identiques à la kératine.",
      "La glycine est située au centre en raison de son faible encombrement."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le surenroulement de trois chaînes forme la triple hélice droite du collagène.",
    "choiceExplanations": [
      "Vrai. Le surenroulement forme une superhélice droite.",
      "Faux. Elle est droite.",
      "Faux. Elle associe trois chaînes collageniques gauches.",
      "Vrai. La glycine est située au centre en raison de son faible encombrement."
    ]
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les fibrilles de collagène I, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-fibril"
    },
    "choices": [
      "La périodicité décrite est de 6,7 µm.",
      "Le monomère est appelé tropocollagène.",
      "Les fibrilles ne présentent aucune striation.",
      "Il produit un aspect strié en microscopie électronique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’agencement décalé du tropocollagène explique la striation des fibrilles.",
    "choiceExplanations": [
      "Faux. Elle est d’environ 67 nm.",
      "Vrai. Le monomère est appelé tropocollagène.",
      "Faux. Le décalage produit une striation.",
      "Vrai. Il produit un aspect strié en microscopie électronique."
    ]
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les liaisons croisées et fibres de collagène, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-crosslinks"
    },
    "choices": [
      "Les fibres sont plus petites que les molécules de tropocollagène.",
      "Le diamètre augmente au cours de ces niveaux d’assemblage.",
      "La lysyl-oxydase agit exclusivement sur la glycine.",
      "Elles dérivent de résidus de lysine transformés par la lysyl-oxydase."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La réticulation covalente et l’assemblage hiérarchique donnent la résistance des fibres.",
    "choiceExplanations": [
      "Faux. L’assemblage augmente le diamètre.",
      "Vrai. Le diamètre augmente au cours de ces niveaux d’assemblage.",
      "Faux. Elle transforme des résidus de lysine.",
      "Vrai. Elles dérivent de résidus de lysine transformés par la lysyl-oxydase."
    ]
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le collagène de type IV, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-type-iv"
    },
    "choices": [
      "Il forme des réseaux.",
      "Il est absent des membranes basales.",
      "Il ne comporte aucune chaîne α.",
      "Les domaines 7S et NC1 participent à l’organisation du réseau."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le collagène IV construit des réseaux spécialisés des membranes basales.",
    "choiceExplanations": [
      "Vrai. Il forme des réseaux.",
      "Faux. Il en est un composant typique.",
      "Faux. Il associe trois chaînes parmi plusieurs possibles.",
      "Vrai. Les domaines 7S et NC1 participent à l’organisation du réseau."
    ]
  },
  {
    "order": 81,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la chaîne alpha du collagène I. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-alpha-chain"
    },
    "choices": [
      "Elle est de type polyproline II.",
      "La proline est absente du collagène.",
      "Elle comporte 3,6 résidus par tour comme l’hélice α.",
      "Sa structure secondaire est une hélice gauche."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Chaque chaîne de collagène adopte une hélice gauche particulière riche en proline.",
    "choiceExplanations": [
      "Vrai. Elle est de type polyproline II.",
      "Faux. Elle y est fréquente.",
      "Faux. La fiche indique généralement trois.",
      "Vrai. Sa structure secondaire est une hélice gauche."
    ]
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la triple hélice du collagène. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-triple-helix"
    },
    "choices": [
      "La triple hélice associe trois hélices α droites identiques à la kératine.",
      "Les OH de l’hydroxyproline contribuent aux liaisons hydrogène.",
      "La glycine est située au centre en raison de son faible encombrement.",
      "La glycine est trop volumineuse pour le centre."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le surenroulement de trois chaînes forme la triple hélice droite du collagène.",
    "choiceExplanations": [
      "Faux. Elle associe trois chaînes collageniques gauches.",
      "Vrai. Les OH de l’hydroxyproline contribuent aux liaisons hydrogène.",
      "Vrai. La glycine est située au centre en raison de son faible encombrement.",
      "Faux. Elle est la plus petite chaîne latérale."
    ]
  },
  {
    "order": 83,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les fibrilles de collagène I. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-fibril"
    },
    "choices": [
      "Le monomère est appelé tropocollagène.",
      "Il produit un aspect strié en microscopie électronique.",
      "La périodicité décrite est de 6,7 µm.",
      "Les molécules de tropocollagène sont parfaitement superposées sans décalage."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "L’agencement décalé du tropocollagène explique la striation des fibrilles.",
    "choiceExplanations": [
      "Vrai. Le monomère est appelé tropocollagène.",
      "Vrai. Il produit un aspect strié en microscopie électronique.",
      "Faux. Elle est d’environ 67 nm.",
      "Faux. Elles sont décalées."
    ]
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les liaisons croisées et fibres de collagène. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-crosslinks"
    },
    "choices": [
      "Les liaisons croisées sont uniquement des liaisons hydrogène.",
      "Les fibrilles ne peuvent jamais former de faisceaux.",
      "Les fibrilles s’associent en fibres puis en faisceaux.",
      "Le diamètre augmente au cours de ces niveaux d’assemblage."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La réticulation covalente et l’assemblage hiérarchique donnent la résistance des fibres.",
    "choiceExplanations": [
      "Faux. Elles sont covalentes.",
      "Faux. Elles s’associent en fibres puis faisceaux.",
      "Vrai. Les fibrilles s’associent en fibres puis en faisceaux.",
      "Vrai. Le diamètre augmente au cours de ces niveaux d’assemblage."
    ]
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le collagène de type IV. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-type-iv"
    },
    "choices": [
      "Les domaines 7S et NC1 participent à l’organisation du réseau.",
      "Il forme des réseaux.",
      "Les domaines NC1 et 7S n’ont aucun rôle dans le réseau.",
      "Le collagène IV forme principalement de longues fibrilles striées de type I."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le collagène IV construit des réseaux spécialisés des membranes basales.",
    "choiceExplanations": [
      "Vrai. Les domaines 7S et NC1 participent à l’organisation du réseau.",
      "Vrai. Il forme des réseaux.",
      "Faux. Ils participent à l’assemblage.",
      "Faux. Il forme des réseaux."
    ]
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la chaîne alpha du collagène I. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-alpha-chain"
    },
    "choices": [
      "Elle n’est pas une hélice α classique.",
      "Sa structure secondaire est une hélice gauche.",
      "La proline est absente du collagène.",
      "La chaîne est stabilisée uniquement par de nombreux ponts disulfure."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Chaque chaîne de collagène adopte une hélice gauche particulière riche en proline.",
    "choiceExplanations": [
      "Vrai. Elle n’est pas une hélice α classique.",
      "Vrai. Sa structure secondaire est une hélice gauche.",
      "Faux. Elle y est fréquente.",
      "Faux. La répulsion stérique et la composition jouent un rôle important."
    ]
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la triple hélice du collagène. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-triple-helix"
    },
    "choices": [
      "L’hydroxyproline n’intervient dans aucune stabilisation.",
      "La triple hélice associe trois hélices α droites identiques à la kératine.",
      "Les OH de l’hydroxyproline contribuent aux liaisons hydrogène.",
      "La glycine est située au centre en raison de son faible encombrement."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le surenroulement de trois chaînes forme la triple hélice droite du collagène.",
    "choiceExplanations": [
      "Faux. Ses OH contribuent aux liaisons hydrogène.",
      "Faux. Elle associe trois chaînes collageniques gauches.",
      "Vrai. Les OH de l’hydroxyproline contribuent aux liaisons hydrogène.",
      "Vrai. La glycine est située au centre en raison de son faible encombrement."
    ]
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les fibrilles de collagène I. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-fibril"
    },
    "choices": [
      "La périodicité décrite est de 6,7 µm.",
      "Le décalage correspond à environ 67 nm.",
      "Le tropocollagène est une enzyme cytosolique.",
      "Le monomère est appelé tropocollagène."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’agencement décalé du tropocollagène explique la striation des fibrilles.",
    "choiceExplanations": [
      "Faux. Elle est d’environ 67 nm.",
      "Vrai. Le décalage correspond à environ 67 nm.",
      "Faux. C’est le monomère du collagène.",
      "Vrai. Le monomère est appelé tropocollagène."
    ]
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les liaisons croisées et fibres de collagène. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-crosslinks"
    },
    "choices": [
      "La lysyl-oxydase agit exclusivement sur la glycine.",
      "Les fibrilles ne peuvent jamais former de faisceaux.",
      "Les fibrilles s’associent en fibres puis en faisceaux.",
      "Le diamètre augmente au cours de ces niveaux d’assemblage."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La réticulation covalente et l’assemblage hiérarchique donnent la résistance des fibres.",
    "choiceExplanations": [
      "Faux. Elle transforme des résidus de lysine.",
      "Faux. Elles s’associent en fibres puis faisceaux.",
      "Vrai. Les fibrilles s’associent en fibres puis en faisceaux.",
      "Vrai. Le diamètre augmente au cours de ces niveaux d’assemblage."
    ]
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le collagène de type IV. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-type-iv"
    },
    "choices": [
      "Il est absent des membranes basales.",
      "Il ne comporte aucune chaîne α.",
      "Il est présent notamment dans les reins et les poumons.",
      "Il forme des réseaux."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le collagène IV construit des réseaux spécialisés des membranes basales.",
    "choiceExplanations": [
      "Faux. Il en est un composant typique.",
      "Faux. Il associe trois chaînes parmi plusieurs possibles.",
      "Vrai. Il est présent notamment dans les reins et les poumons.",
      "Vrai. Il forme des réseaux."
    ]
  }
];
