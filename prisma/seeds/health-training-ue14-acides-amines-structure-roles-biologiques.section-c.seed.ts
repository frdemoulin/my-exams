import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "61": [
    "les acides aminés aromatiques"
  ],
  "62": [
    "la proline et la 4-hydroxyproline"
  ],
  "63": [
    "la classification selon la polarité"
  ],
  "64": [
    "la solubilité des acides aminés"
  ],
  "65": [
    "la chiralité des acides aminés"
  ],
  "66": [
    "les acides aminés aromatiques"
  ],
  "67": [
    "la proline et la 4-hydroxyproline"
  ],
  "68": [
    "la classification selon la polarité"
  ],
  "69": [
    "la solubilité des acides aminés"
  ],
  "70": [
    "la chiralité des acides aminés"
  ],
  "71": [
    "les acides aminés aromatiques"
  ],
  "72": [
    "la proline et la 4-hydroxyproline"
  ],
  "73": [
    "la classification selon la polarité"
  ],
  "74": [
    "la solubilité des acides aminés"
  ],
  "75": [
    "la chiralité des acides aminés"
  ],
  "76": [
    "les acides aminés aromatiques"
  ],
  "77": [
    "la proline et la 4-hydroxyproline"
  ],
  "78": [
    "la classification selon la polarité"
  ],
  "79": [
    "la solubilité des acides aminés"
  ],
  "80": [
    "la chiralité des acides aminés"
  ],
  "81": [
    "les acides aminés aromatiques"
  ],
  "82": [
    "la proline et la 4-hydroxyproline"
  ],
  "83": [
    "la classification selon la polarité"
  ],
  "84": [
    "la solubilité des acides aminés"
  ],
  "85": [
    "la chiralité des acides aminés"
  ],
  "86": [
    "les acides aminés aromatiques"
  ],
  "87": [
    "la proline et la 4-hydroxyproline"
  ],
  "88": [
    "la classification selon la polarité"
  ],
  "89": [
    "la solubilité des acides aminés"
  ],
  "90": [
    "la chiralité des acides aminés"
  ]
};

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "aromatiques-polarite-chiralite-1",
    "title": "Aromatiques et proline",
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
    "slug": "aromatiques-polarite-chiralite-2",
    "title": "Polarité et solubilité",
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
    "slug": "aromatiques-polarite-chiralite-3",
    "title": "Chiralité et séries D/L",
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
    "question": "À propos de les acides aminés aromatiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aromatic-amino-acids"
    },
    "choices": [
      "La tyrosine porte un groupement phénol.",
      "Le tryptophane porte un noyau indole.",
      "L’indole est un simple alcool aliphatique.",
      "L’indole associe un noyau benzénique et un cycle pyrrole accolés."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Phénylalanine, tyrosine et tryptophane se distinguent par leurs systèmes aromatiques.",
    "choiceExplanations": [
      "Vrai. La tyrosine porte un groupement phénol.",
      "Vrai. Le tryptophane porte un noyau indole.",
      "Faux. C’est un système bicyclique aromatique.",
      "Vrai. L’indole associe un noyau benzénique et un cycle pyrrole accolés."
    ]
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la proline et la 4-hydroxyproline :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-hydroxyproline"
    },
    "choices": [
      "La proline possède une amine primaire identique à tous les autres acides aminés.",
      "La 4-hydroxyproline dérive de l’hydroxylation de la proline.",
      "La proline possède une amine secondaire.",
      "La 4-hydroxyproline dérive de la glycine."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La structure cyclique de la proline explique ses effets particuliers sur les chaînes peptidiques.",
    "choiceExplanations": [
      "Faux. Sa fonction amine est secondaire.",
      "Vrai. La 4-hydroxyproline dérive de l’hydroxylation de la proline.",
      "Vrai. La proline possède une amine secondaire.",
      "Faux. Elle dérive de la proline."
    ]
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la classification selon la polarité :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-classes"
    },
    "choices": [
      "Aspartate et glutamate sont polaires acides et chargés négativement.",
      "Glycine, alanine, valine, leucine et isoleucine figurent parmi les non polaires.",
      "Lysine, arginine et histidine sont polaires basiques et chargés positivement.",
      "L’acide glutamique est classé polaire neutre."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La polarité du radical détermine quatre groupes: non polaires, polaires neutres, acides et basiques.",
    "choiceExplanations": [
      "Vrai. Aspartate et glutamate sont polaires acides et chargés négativement.",
      "Vrai. Glycine, alanine, valine, leucine et isoleucine figurent parmi les non polaires.",
      "Vrai. Lysine, arginine et histidine sont polaires basiques et chargés positivement.",
      "Faux. Il est acide et chargé négativement."
    ]
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la solubilité des acides aminés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-solubility"
    },
    "choices": [
      "Tous les acides aminés ont exactement la même solubilité.",
      "L’eau et l’éthanol sont cités comme solvants polaires.",
      "La solubilité dépend du caractère hydrophile ou hydrophobe du radical.",
      "L’eau est citée comme solvant apolaire."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La polarité du radical conditionne la solubilité dans les solvants polaires.",
    "choiceExplanations": [
      "Faux. Leur radical modifie cette propriété.",
      "Vrai. L’eau et l’éthanol sont cités comme solvants polaires.",
      "Vrai. La solubilité dépend du caractère hydrophile ou hydrophobe du radical.",
      "Faux. L’eau est un solvant polaire."
    ]
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la chiralité des acides aminés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-chirality"
    },
    "choices": [
      "Les acides aminés naturels sont des acides α-aminés.",
      "Un objet chiral n’est pas superposable à son image dans un miroir.",
      "Deux formes miroir sont appelées énantiomères.",
      "Tous les acides aminés, y compris la glycine, sont chiraux."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "À l’exception de la glycine, le carbone α porte quatre substituants différents et constitue un centre chiral.",
    "choiceExplanations": [
      "Vrai. Les acides aminés naturels sont des acides α-aminés.",
      "Vrai. Un objet chiral n’est pas superposable à son image dans un miroir.",
      "Vrai. Deux formes miroir sont appelées énantiomères.",
      "Faux. La glycine est l’exception."
    ]
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés aromatiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aromatic-amino-acids"
    },
    "choices": [
      "La tyrosine est dépourvue de cycle.",
      "Le tryptophane porte un noyau indole.",
      "La phénylalanine porte une fonction thiol.",
      "La phénylalanine porte un noyau benzénique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Phénylalanine, tyrosine et tryptophane se distinguent par leurs systèmes aromatiques.",
    "choiceExplanations": [
      "Faux. Elle possède un noyau aromatique phénolique.",
      "Vrai. Le tryptophane porte un noyau indole.",
      "Faux. La fonction thiol caractérise la cystéine.",
      "Vrai. La phénylalanine porte un noyau benzénique."
    ]
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la proline et la 4-hydroxyproline :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-hydroxyproline"
    },
    "choices": [
      "La 4-hydroxyproline dérive de l’hydroxylation de la proline.",
      "Sa structure cyclique peut anguler une chaîne polypeptidique.",
      "La proline est classée parmi les acides aminés non polaires dans la fiche.",
      "La 4-hydroxyproline dérive de la glycine."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La structure cyclique de la proline explique ses effets particuliers sur les chaînes peptidiques.",
    "choiceExplanations": [
      "Vrai. La 4-hydroxyproline dérive de l’hydroxylation de la proline.",
      "Vrai. Sa structure cyclique peut anguler une chaîne polypeptidique.",
      "Vrai. La proline est classée parmi les acides aminés non polaires dans la fiche.",
      "Faux. Elle dérive de la proline."
    ]
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la classification selon la polarité :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-classes"
    },
    "choices": [
      "L’acide glutamique est classé polaire neutre.",
      "La sérine est classée parmi les non polaires.",
      "Cystéine, tyrosine, sérine et thréonine figurent parmi les polaires neutres.",
      "Aspartate et glutamate sont polaires acides et chargés négativement."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La polarité du radical détermine quatre groupes: non polaires, polaires neutres, acides et basiques.",
    "choiceExplanations": [
      "Faux. Il est acide et chargé négativement.",
      "Faux. Elle est polaire neutre.",
      "Vrai. Cystéine, tyrosine, sérine et thréonine figurent parmi les polaires neutres.",
      "Vrai. Aspartate et glutamate sont polaires acides et chargés négativement."
    ]
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la solubilité des acides aminés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-solubility"
    },
    "choices": [
      "La solubilité dépend du caractère hydrophile ou hydrophobe du radical.",
      "Deux acides aminés différents peuvent avoir des solubilités différentes.",
      "L’eau et l’éthanol sont cités comme solvants polaires.",
      "L’eau est citée comme solvant apolaire."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La polarité du radical conditionne la solubilité dans les solvants polaires.",
    "choiceExplanations": [
      "Vrai. La solubilité dépend du caractère hydrophile ou hydrophobe du radical.",
      "Vrai. Deux acides aminés différents peuvent avoir des solubilités différentes.",
      "Vrai. L’eau et l’éthanol sont cités comme solvants polaires.",
      "Faux. L’eau est un solvant polaire."
    ]
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la chiralité des acides aminés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-chirality"
    },
    "choices": [
      "Un objet chiral n’est pas superposable à son image dans un miroir.",
      "Le carbone α de la glycine porte quatre substituants différents.",
      "Deux énantiomères ont toujours des formules brutes différentes.",
      "La glycine ne possède pas de centre chiral au carbone α."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "À l’exception de la glycine, le carbone α porte quatre substituants différents et constitue un centre chiral.",
    "choiceExplanations": [
      "Vrai. Un objet chiral n’est pas superposable à son image dans un miroir.",
      "Faux. Il porte deux hydrogènes.",
      "Faux. Ils ont la même formule mais une disposition spatiale différente.",
      "Vrai. La glycine ne possède pas de centre chiral au carbone α."
    ]
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés aromatiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aromatic-amino-acids"
    },
    "choices": [
      "La phénylalanine porte une fonction thiol.",
      "L’indole associe un noyau benzénique et un cycle pyrrole accolés.",
      "Le tryptophane porte un noyau indole.",
      "Le tryptophane porte un groupement guanidinium."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Phénylalanine, tyrosine et tryptophane se distinguent par leurs systèmes aromatiques.",
    "choiceExplanations": [
      "Faux. La fonction thiol caractérise la cystéine.",
      "Vrai. L’indole associe un noyau benzénique et un cycle pyrrole accolés.",
      "Vrai. Le tryptophane porte un noyau indole.",
      "Faux. Il porte un indole."
    ]
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la proline et la 4-hydroxyproline, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-hydroxyproline"
    },
    "choices": [
      "La proline favorise toujours une hélice parfaitement rectiligne.",
      "La 4-hydroxyproline dérive de l’hydroxylation de la proline.",
      "La proline est classée parmi les acides aminés non polaires dans la fiche.",
      "La proline est un acide aminé acide chargé négativement."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La structure cyclique de la proline explique ses effets particuliers sur les chaînes peptidiques.",
    "choiceExplanations": [
      "Faux. Elle peut provoquer une angulation.",
      "Vrai. La 4-hydroxyproline dérive de l’hydroxylation de la proline.",
      "Vrai. La proline est classée parmi les acides aminés non polaires dans la fiche.",
      "Faux. Elle est non polaire dans la classification donnée."
    ]
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la classification selon la polarité, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-classes"
    },
    "choices": [
      "La lysine est classée non polaire hydrophobe.",
      "Cystéine, tyrosine, sérine et thréonine figurent parmi les polaires neutres.",
      "L’acide glutamique est classé polaire neutre.",
      "Glycine, alanine, valine, leucine et isoleucine figurent parmi les non polaires."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La polarité du radical détermine quatre groupes: non polaires, polaires neutres, acides et basiques.",
    "choiceExplanations": [
      "Faux. Elle est basique et chargée positivement.",
      "Vrai. Cystéine, tyrosine, sérine et thréonine figurent parmi les polaires neutres.",
      "Faux. Il est acide et chargé négativement.",
      "Vrai. Glycine, alanine, valine, leucine et isoleucine figurent parmi les non polaires."
    ]
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la solubilité des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-solubility"
    },
    "choices": [
      "Une chaîne très hydrophobe augmente toujours la solubilité dans l’eau.",
      "La solubilité dépend du caractère hydrophile ou hydrophobe du radical.",
      "L’eau est citée comme solvant apolaire.",
      "L’eau et l’éthanol sont cités comme solvants polaires."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La polarité du radical conditionne la solubilité dans les solvants polaires.",
    "choiceExplanations": [
      "Faux. Elle tend à la diminuer.",
      "Vrai. La solubilité dépend du caractère hydrophile ou hydrophobe du radical.",
      "Faux. L’eau est un solvant polaire.",
      "Vrai. L’eau et l’éthanol sont cités comme solvants polaires."
    ]
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la chiralité des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-chirality"
    },
    "choices": [
      "Tous les acides aminés, y compris la glycine, sont chiraux.",
      "La glycine ne possède pas de centre chiral au carbone α.",
      "Le carbone α de la glycine porte quatre substituants différents.",
      "Les acides aminés naturels sont des acides α-aminés."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "À l’exception de la glycine, le carbone α porte quatre substituants différents et constitue un centre chiral.",
    "choiceExplanations": [
      "Faux. La glycine est l’exception.",
      "Vrai. La glycine ne possède pas de centre chiral au carbone α.",
      "Faux. Il porte deux hydrogènes.",
      "Vrai. Les acides aminés naturels sont des acides α-aminés."
    ]
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés aromatiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aromatic-amino-acids"
    },
    "choices": [
      "L’indole est un simple alcool aliphatique.",
      "Le tryptophane porte un noyau indole.",
      "La phénylalanine porte un noyau benzénique.",
      "La tyrosine est dépourvue de cycle."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Phénylalanine, tyrosine et tryptophane se distinguent par leurs systèmes aromatiques.",
    "choiceExplanations": [
      "Faux. C’est un système bicyclique aromatique.",
      "Vrai. Le tryptophane porte un noyau indole.",
      "Vrai. La phénylalanine porte un noyau benzénique.",
      "Faux. Elle possède un noyau aromatique phénolique."
    ]
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la proline et la 4-hydroxyproline, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-hydroxyproline"
    },
    "choices": [
      "La proline est un acide aminé acide chargé négativement.",
      "La proline favorise toujours une hélice parfaitement rectiligne.",
      "La proline est classée parmi les acides aminés non polaires dans la fiche.",
      "La proline possède une amine secondaire."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La structure cyclique de la proline explique ses effets particuliers sur les chaînes peptidiques.",
    "choiceExplanations": [
      "Faux. Elle est non polaire dans la classification donnée.",
      "Faux. Elle peut provoquer une angulation.",
      "Vrai. La proline est classée parmi les acides aminés non polaires dans la fiche.",
      "Vrai. La proline possède une amine secondaire."
    ]
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la classification selon la polarité, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-classes"
    },
    "choices": [
      "Aspartate et glutamate sont polaires acides et chargés négativement.",
      "Lysine, arginine et histidine sont polaires basiques et chargés positivement.",
      "L’acide glutamique est classé polaire neutre.",
      "La phénylalanine est classée acide chargée négativement."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La polarité du radical détermine quatre groupes: non polaires, polaires neutres, acides et basiques.",
    "choiceExplanations": [
      "Vrai. Aspartate et glutamate sont polaires acides et chargés négativement.",
      "Vrai. Lysine, arginine et histidine sont polaires basiques et chargés positivement.",
      "Faux. Il est acide et chargé négativement.",
      "Faux. Elle figure parmi les non polaires dans la fiche."
    ]
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la solubilité des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-solubility"
    },
    "choices": [
      "Tous les acides aminés ont exactement la même solubilité.",
      "La solubilité est indépendante de la chaîne latérale.",
      "L’eau et l’éthanol sont cités comme solvants polaires.",
      "La solubilité dépend du caractère hydrophile ou hydrophobe du radical."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La polarité du radical conditionne la solubilité dans les solvants polaires.",
    "choiceExplanations": [
      "Faux. Leur radical modifie cette propriété.",
      "Faux. La chaîne latérale joue un rôle majeur.",
      "Vrai. L’eau et l’éthanol sont cités comme solvants polaires.",
      "Vrai. La solubilité dépend du caractère hydrophile ou hydrophobe du radical."
    ]
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la chiralité des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-chirality"
    },
    "choices": [
      "Un objet chiral n’est pas superposable à son image dans un miroir.",
      "Les acides aminés naturels sont des acides α-aminés.",
      "La chiralité signifie qu’une molécule est superposable à son miroir.",
      "Tous les acides aminés, y compris la glycine, sont chiraux."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "À l’exception de la glycine, le carbone α porte quatre substituants différents et constitue un centre chiral.",
    "choiceExplanations": [
      "Vrai. Un objet chiral n’est pas superposable à son image dans un miroir.",
      "Vrai. Les acides aminés naturels sont des acides α-aminés.",
      "Faux. Elle signifie le contraire.",
      "Faux. La glycine est l’exception."
    ]
  },
  {
    "order": 81,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés aromatiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aromatic-amino-acids"
    },
    "choices": [
      "L’indole est un simple alcool aliphatique.",
      "La tyrosine porte un groupement phénol.",
      "Le tryptophane porte un noyau indole.",
      "Le tryptophane porte un groupement guanidinium."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Phénylalanine, tyrosine et tryptophane se distinguent par leurs systèmes aromatiques.",
    "choiceExplanations": [
      "Faux. C’est un système bicyclique aromatique.",
      "Vrai. La tyrosine porte un groupement phénol.",
      "Vrai. Le tryptophane porte un noyau indole.",
      "Faux. Il porte un indole."
    ]
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la proline et la 4-hydroxyproline. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-hydroxyproline"
    },
    "choices": [
      "La 4-hydroxyproline dérive de l’hydroxylation de la proline.",
      "La proline possède une amine secondaire.",
      "La proline favorise toujours une hélice parfaitement rectiligne.",
      "La 4-hydroxyproline dérive de la glycine."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La structure cyclique de la proline explique ses effets particuliers sur les chaînes peptidiques.",
    "choiceExplanations": [
      "Vrai. La 4-hydroxyproline dérive de l’hydroxylation de la proline.",
      "Vrai. La proline possède une amine secondaire.",
      "Faux. Elle peut provoquer une angulation.",
      "Faux. Elle dérive de la proline."
    ]
  },
  {
    "order": 83,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la classification selon la polarité. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-classes"
    },
    "choices": [
      "La phénylalanine est classée acide chargée négativement.",
      "La sérine est classée parmi les non polaires.",
      "Lysine, arginine et histidine sont polaires basiques et chargés positivement.",
      "Cystéine, tyrosine, sérine et thréonine figurent parmi les polaires neutres."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La polarité du radical détermine quatre groupes: non polaires, polaires neutres, acides et basiques.",
    "choiceExplanations": [
      "Faux. Elle figure parmi les non polaires dans la fiche.",
      "Faux. Elle est polaire neutre.",
      "Vrai. Lysine, arginine et histidine sont polaires basiques et chargés positivement.",
      "Vrai. Cystéine, tyrosine, sérine et thréonine figurent parmi les polaires neutres."
    ]
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la solubilité des acides aminés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-solubility"
    },
    "choices": [
      "L’eau et l’éthanol sont cités comme solvants polaires.",
      "La solubilité est indépendante de la chaîne latérale.",
      "Deux acides aminés différents peuvent avoir des solubilités différentes.",
      "L’eau est citée comme solvant apolaire."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La polarité du radical conditionne la solubilité dans les solvants polaires.",
    "choiceExplanations": [
      "Vrai. L’eau et l’éthanol sont cités comme solvants polaires.",
      "Faux. La chaîne latérale joue un rôle majeur.",
      "Vrai. Deux acides aminés différents peuvent avoir des solubilités différentes.",
      "Faux. L’eau est un solvant polaire."
    ]
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la chiralité des acides aminés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-chirality"
    },
    "choices": [
      "La glycine ne possède pas de centre chiral au carbone α.",
      "Tous les acides aminés, y compris la glycine, sont chiraux.",
      "Les acides aminés naturels sont des acides α-aminés.",
      "Deux énantiomères ont toujours des formules brutes différentes."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "À l’exception de la glycine, le carbone α porte quatre substituants différents et constitue un centre chiral.",
    "choiceExplanations": [
      "Vrai. La glycine ne possède pas de centre chiral au carbone α.",
      "Faux. La glycine est l’exception.",
      "Vrai. Les acides aminés naturels sont des acides α-aminés.",
      "Faux. Ils ont la même formule mais une disposition spatiale différente."
    ]
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés aromatiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aromatic-amino-acids"
    },
    "choices": [
      "L’indole est un simple alcool aliphatique.",
      "La phénylalanine porte un noyau benzénique.",
      "Le tryptophane porte un groupement guanidinium.",
      "La tyrosine porte un groupement phénol."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Phénylalanine, tyrosine et tryptophane se distinguent par leurs systèmes aromatiques.",
    "choiceExplanations": [
      "Faux. C’est un système bicyclique aromatique.",
      "Vrai. La phénylalanine porte un noyau benzénique.",
      "Faux. Il porte un indole.",
      "Vrai. La tyrosine porte un groupement phénol."
    ]
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la proline et la 4-hydroxyproline. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-hydroxyproline"
    },
    "choices": [
      "La 4-hydroxyproline dérive de la glycine.",
      "La proline possède une amine primaire identique à tous les autres acides aminés.",
      "La proline est classée parmi les acides aminés non polaires dans la fiche.",
      "La proline possède une amine secondaire."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La structure cyclique de la proline explique ses effets particuliers sur les chaînes peptidiques.",
    "choiceExplanations": [
      "Faux. Elle dérive de la proline.",
      "Faux. Sa fonction amine est secondaire.",
      "Vrai. La proline est classée parmi les acides aminés non polaires dans la fiche.",
      "Vrai. La proline possède une amine secondaire."
    ]
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la classification selon la polarité. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-classes"
    },
    "choices": [
      "La lysine est classée non polaire hydrophobe.",
      "Lysine, arginine et histidine sont polaires basiques et chargés positivement.",
      "Aspartate et glutamate sont polaires acides et chargés négativement.",
      "La sérine est classée parmi les non polaires."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La polarité du radical détermine quatre groupes: non polaires, polaires neutres, acides et basiques.",
    "choiceExplanations": [
      "Faux. Elle est basique et chargée positivement.",
      "Vrai. Lysine, arginine et histidine sont polaires basiques et chargés positivement.",
      "Vrai. Aspartate et glutamate sont polaires acides et chargés négativement.",
      "Faux. Elle est polaire neutre."
    ]
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la solubilité des acides aminés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-solubility"
    },
    "choices": [
      "La solubilité est indépendante de la chaîne latérale.",
      "La solubilité dépend du caractère hydrophile ou hydrophobe du radical.",
      "Les chaînes polaires favorisent les interactions avec l’eau.",
      "Tous les acides aminés ont exactement la même solubilité."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La polarité du radical conditionne la solubilité dans les solvants polaires.",
    "choiceExplanations": [
      "Faux. La chaîne latérale joue un rôle majeur.",
      "Vrai. La solubilité dépend du caractère hydrophile ou hydrophobe du radical.",
      "Vrai. Les chaînes polaires favorisent les interactions avec l’eau.",
      "Faux. Leur radical modifie cette propriété."
    ]
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la chiralité des acides aminés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-chirality"
    },
    "choices": [
      "Les acides aminés naturels sont des acides α-aminés.",
      "Un objet chiral n’est pas superposable à son image dans un miroir.",
      "Tous les acides aminés, y compris la glycine, sont chiraux.",
      "Le carbone α de la glycine porte quatre substituants différents."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "À l’exception de la glycine, le carbone α porte quatre substituants différents et constitue un centre chiral.",
    "choiceExplanations": [
      "Vrai. Les acides aminés naturels sont des acides α-aminés.",
      "Vrai. Un objet chiral n’est pas superposable à son image dans un miroir.",
      "Faux. La glycine est l’exception.",
      "Faux. Il porte deux hydrogènes."
    ]
  }
];
