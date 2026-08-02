import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "91": [
    "l’aldostérone"
  ],
  "92": [
    "les effets rénaux de l’aldostérone"
  ],
  "93": [
    "la distinction aldostérone-corticostérone"
  ],
  "94": [
    "le cortisol"
  ],
  "95": [
    "les effets anti-inflammatoires du cortisol"
  ],
  "96": [
    "la testostérone"
  ],
  "97": [
    "les effets des androgènes"
  ],
  "98": [
    "les œstrogènes"
  ],
  "99": [
    "les effets des œstrogènes"
  ],
  "100": [
    "la progestérone"
  ],
  "101": [
    "l’aldostérone"
  ],
  "102": [
    "les effets rénaux de l’aldostérone"
  ],
  "103": [
    "la distinction aldostérone-corticostérone"
  ],
  "104": [
    "le cortisol"
  ],
  "105": [
    "les effets anti-inflammatoires du cortisol"
  ],
  "106": [
    "la testostérone"
  ],
  "107": [
    "les effets des androgènes"
  ],
  "108": [
    "les œstrogènes"
  ],
  "109": [
    "les effets des œstrogènes"
  ],
  "110": [
    "la progestérone"
  ],
  "111": [
    "l’aldostérone"
  ],
  "112": [
    "les effets rénaux de l’aldostérone"
  ],
  "113": [
    "la distinction aldostérone-corticostérone"
  ],
  "114": [
    "le cortisol"
  ],
  "115": [
    "les effets anti-inflammatoires du cortisol"
  ],
  "116": [
    "la testostérone"
  ],
  "117": [
    "les effets des androgènes"
  ],
  "118": [
    "les œstrogènes"
  ],
  "119": [
    "les effets des œstrogènes"
  ],
  "120": [
    "la progestérone"
  ]
};

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "steroid-hormone-functions-fondamentaux",
    "title": "Aldostérone et homéostasie",
    "description": "Acquérir les notions fondamentales de la section.",
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
    "slug": "steroid-hormone-functions-applications",
    "title": "Cortisol et inflammation",
    "description": "Appliquer et comparer les notions de la section.",
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
    "slug": "steroid-hormone-functions-raisonnement",
    "title": "Hormones sexuelles et reproduction",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 4,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères structuraux",
        "sharedStatement": "Les questions suivantes mobilisent les principaux repères structuraux de la section.",
        "questionOrders": [
          111,
          112,
          113
        ]
      },
      {
        "type": "GROUP",
        "title": "Propriétés et fonctions",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          114,
          115,
          116
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques et médicales",
        "sharedStatement": "Les questions suivantes replacent les notions dans leur contexte biologique ou médical.",
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
    "question": "À propos de l’aldostérone :",
    "choices": [
      "Elle porte une fonction aldéhyde en C18.",
      "Elle agit principalement au rein.",
      "Elle n’a aucun effet hydro-électrolytique.",
      "Elle est le minéralocorticoïde principal."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "L’aldostérone se distingue par son aldéhyde C18.",
    "choiceExplanations": [
      "Vrai. Elle porte une fonction aldéhyde en C18.",
      "Vrai. Elle agit principalement au rein.",
      "Faux. Elle régule sodium et potassium.",
      "Vrai. Elle est le minéralocorticoïde principal."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les effets rénaux de l’aldostérone :",
    "choices": [
      "Elle favorise l’élimination des protons.",
      "Elle diminue nécessairement le volume plasmatique.",
      "Elle participe au maintien de la pression artérielle.",
      "Elle favorise la réabsorption du sodium."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’aldostérone favorise rétention sodée et excrétion K+/H+.",
    "choiceExplanations": [
      "Vrai. Elle favorise l’élimination des protons.",
      "Faux. Elle contribue à le maintenir.",
      "Vrai. Elle participe au maintien de la pression artérielle.",
      "Vrai. Elle favorise la réabsorption du sodium."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-kidney"
    }
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la distinction aldostérone-corticostérone :",
    "choices": [
      "Les deux sont strictement identiques.",
      "L’aldostérone porte un aldéhyde C18.",
      "La distinction est un piège d’examen.",
      "La corticostérone n’est pas un minéralocorticoïde dans la fiche."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le groupement C18 distingue aldostérone et corticostérone.",
    "choiceExplanations": [
      "Faux. Elles diffèrent en C18.",
      "Vrai. L’aldostérone porte un aldéhyde C18.",
      "Vrai. La distinction est un piège d’examen.",
      "Vrai. La corticostérone n’est pas un minéralocorticoïde dans la fiche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le cortisol :",
    "choices": [
      "Il est hypoglycémiant.",
      "Il est aussi appelé hydrocortisone.",
      "Il possède un noyau prégnane C21.",
      "Il est hyperglycémiant."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le cortisol est un glucocorticoïde C21 hyperglycémiant.",
    "choiceExplanations": [
      "Faux. Il augmente la glycémie.",
      "Vrai. Il est aussi appelé hydrocortisone.",
      "Vrai. Il possède un noyau prégnane C21.",
      "Vrai. Il est hyperglycémiant."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les effets anti-inflammatoires du cortisol :",
    "choices": [
      "Il stimule toujours toutes les réponses immunitaires.",
      "La cortisone est utilisée comme médicament.",
      "Il a une action anti-inflammatoire.",
      "Il a une action immunosuppressive."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les glucocorticoïdes sont utilisés pour leurs effets anti-inflammatoires.",
    "choiceExplanations": [
      "Faux. Il est immunosuppresseur.",
      "Vrai. La cortisone est utilisée comme médicament.",
      "Vrai. Il a une action anti-inflammatoire.",
      "Vrai. Il a une action immunosuppressive."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cortisol"
    }
  },
  {
    "order": 96,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la testostérone :",
    "choices": [
      "Elle n’a aucun effet sexuel masculin.",
      "Elle est un androgène.",
      "Elle possède un noyau androstane C19.",
      "Elle porte un OH en C17β."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La testostérone est l’androgène C19 majeur.",
    "choiceExplanations": [
      "Faux. Elle participe aux caractères masculins.",
      "Vrai. Elle est un androgène.",
      "Vrai. Elle possède un noyau androstane C19.",
      "Vrai. Elle porte un OH en C17β."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "androgen-estrogen"
    }
  },
  {
    "order": 97,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les effets des androgènes :",
    "choices": [
      "Ils favorisent les organes génitaux masculins.",
      "Ils favorisent exclusivement les caractères féminins.",
      "Ils possèdent un effet anabolisant.",
      "Ils favorisent les caractères sexuels secondaires."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les androgènes ont des effets sexuels, osseux et anabolisants.",
    "choiceExplanations": [
      "Vrai. Ils favorisent les organes génitaux masculins.",
      "Faux. Ils favorisent surtout les caractères masculins.",
      "Vrai. Ils possèdent un effet anabolisant.",
      "Vrai. Ils favorisent les caractères sexuels secondaires."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "androgen-estrogen"
    }
  },
  {
    "order": 98,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les œstrogènes :",
    "choices": [
      "Ils favorisent les caractères sexuels féminins.",
      "Ils n’ont aucun effet vasculaire.",
      "L’œstradiol et l’œstrone sont cités.",
      "Ils sont produits par le follicule ovarien."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les œstrogènes C18 ont des effets reproductifs, osseux et vasculaires.",
    "choiceExplanations": [
      "Vrai. Ils favorisent les caractères sexuels féminins.",
      "Faux. La fiche décrit une vasodilatation.",
      "Vrai. L’œstradiol et l’œstrone sont cités.",
      "Vrai. Ils sont produits par le follicule ovarien."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "androgen-estrogen"
    }
  },
  {
    "order": 99,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les effets des œstrogènes :",
    "choices": [
      "Ils ont un effet vasodilatateur.",
      "Ils favorisent la déperdition de chaleur.",
      "Ils n’ont aucun effet central.",
      "Ils participent aux modifications osseuses."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les œstrogènes ont des effets vasculaires, thermiques et osseux.",
    "choiceExplanations": [
      "Vrai. Ils ont un effet vasodilatateur.",
      "Vrai. Ils favorisent la déperdition de chaleur.",
      "Faux. La fiche mentionne des effets psychiques.",
      "Vrai. Ils participent aux modifications osseuses."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "androgen-estrogen"
    }
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la progestérone :",
    "choices": [
      "Elle n’a aucun rôle mammaire.",
      "Elle est produite par le corps jaune.",
      "Elle stimule les sécrétions et le développement de l’endomètre.",
      "Elle est produite par le placenta."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La progestérone soutient la phase lutéale et augmente la température basale.",
    "choiceExplanations": [
      "Faux. Elle participe au développement des canaux mammaires.",
      "Vrai. Elle est produite par le corps jaune.",
      "Vrai. Elle stimule les sécrétions et le développement de l’endomètre.",
      "Vrai. Elle est produite par le placenta."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "progesterone"
    }
  },
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’aldostérone, quelles propositions sont exactes ?",
    "choices": [
      "Elle est un œstrogène C18.",
      "Elle agit principalement au rein.",
      "Elle porte une fonction aldéhyde en C18.",
      "Le C18 porte un méthyle comme dans la corticostérone."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’aldostérone se distingue par son aldéhyde C18.",
    "choiceExplanations": [
      "Faux. C’est un minéralocorticoïde C21.",
      "Vrai. Elle agit principalement au rein.",
      "Vrai. Elle porte une fonction aldéhyde en C18.",
      "Faux. L’aldostérone porte un aldéhyde."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les effets rénaux de l’aldostérone, quelles propositions sont exactes ?",
    "choices": [
      "Elle provoque uniquement une perte de sodium.",
      "Elle diminue nécessairement le volume plasmatique.",
      "Elle favorise l’élimination des protons.",
      "Elle favorise la réabsorption du sodium."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’aldostérone favorise rétention sodée et excrétion K+/H+.",
    "choiceExplanations": [
      "Faux. Elle favorise sa réabsorption.",
      "Faux. Elle contribue à le maintenir.",
      "Vrai. Elle favorise l’élimination des protons.",
      "Vrai. Elle favorise la réabsorption du sodium."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-kidney"
    }
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la distinction aldostérone-corticostérone, quelles propositions sont exactes ?",
    "choices": [
      "L’aldostérone porte un aldéhyde C18.",
      "L’aldostérone porte un méthyle C18.",
      "La corticostérone est une vitamine.",
      "La distinction est un piège d’examen."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le groupement C18 distingue aldostérone et corticostérone.",
    "choiceExplanations": [
      "Vrai. L’aldostérone porte un aldéhyde C18.",
      "Faux. Elle porte un aldéhyde.",
      "Faux. C’est un corticostéroïde.",
      "Vrai. La distinction est un piège d’examen."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le cortisol, quelles propositions sont exactes ?",
    "choices": [
      "Il possède un noyau prégnane C21.",
      "Il est aussi appelé hydrocortisone.",
      "Il ne contient aucun OH.",
      "Il est uniquement ovarien."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le cortisol est un glucocorticoïde C21 hyperglycémiant.",
    "choiceExplanations": [
      "Vrai. Il possède un noyau prégnane C21.",
      "Vrai. Il est aussi appelé hydrocortisone.",
      "Faux. Il porte notamment un OH C17.",
      "Faux. Il est surrénalien."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les effets anti-inflammatoires du cortisol, quelles propositions sont exactes ?",
    "choices": [
      "Ils augmentent toujours les lymphocytes T.",
      "Il stimule toujours toutes les réponses immunitaires.",
      "Il a une action immunosuppressive.",
      "Il peut inhiber certains lymphocytes T."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les glucocorticoïdes sont utilisés pour leurs effets anti-inflammatoires.",
    "choiceExplanations": [
      "Faux. Ils peuvent en inhiber la prolifération.",
      "Faux. Il est immunosuppresseur.",
      "Vrai. Il a une action immunosuppressive.",
      "Vrai. Il peut inhiber certains lymphocytes T."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cortisol"
    }
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la testostérone, quelles propositions sont exactes ?",
    "choices": [
      "Elle possède un noyau androstane C19.",
      "Elle porte un OH en C17β.",
      "Elle n’a aucun effet sexuel masculin.",
      "Elle est un œstrogène C18."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La testostérone est l’androgène C19 majeur.",
    "choiceExplanations": [
      "Vrai. Elle possède un noyau androstane C19.",
      "Vrai. Elle porte un OH en C17β.",
      "Faux. Elle participe aux caractères masculins.",
      "Faux. C’est un androgène C19."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "androgen-estrogen"
    }
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les effets des androgènes, quelles propositions sont exactes ?",
    "choices": [
      "Ils n’ont aucun effet osseux.",
      "Ils stimulent la synthèse protéique musculaire.",
      "Ils inhibent toujours la synthèse musculaire.",
      "Ils possèdent un effet anabolisant."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les androgènes ont des effets sexuels, osseux et anabolisants.",
    "choiceExplanations": [
      "Faux. Ils participent au développement osseux.",
      "Vrai. Ils stimulent la synthèse protéique musculaire.",
      "Faux. Ils la stimulent.",
      "Vrai. Ils possèdent un effet anabolisant."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "androgen-estrogen"
    }
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les œstrogènes, quelles propositions sont exactes ?",
    "choices": [
      "Ils sont produits uniquement par les testicules.",
      "Ils sont produits par le follicule ovarien.",
      "L’œstradiol et l’œstrone sont cités.",
      "Ils n’ont aucun effet vasculaire."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les œstrogènes C18 ont des effets reproductifs, osseux et vasculaires.",
    "choiceExplanations": [
      "Faux. Ovaires et placenta sont des sources majeures.",
      "Vrai. Ils sont produits par le follicule ovarien.",
      "Vrai. L’œstradiol et l’œstrone sont cités.",
      "Faux. La fiche décrit une vasodilatation."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "androgen-estrogen"
    }
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les effets des œstrogènes, quelles propositions sont exactes ?",
    "choices": [
      "Ils augmentent toujours la température centrale.",
      "Ils participent aux modifications osseuses.",
      "Ils sont associés à une protection cardiovasculaire.",
      "Ils n’ont aucun effet osseux."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les œstrogènes ont des effets vasculaires, thermiques et osseux.",
    "choiceExplanations": [
      "Faux. La fiche indique une diminution.",
      "Vrai. Ils participent aux modifications osseuses.",
      "Vrai. Ils sont associés à une protection cardiovasculaire.",
      "Faux. Ils participent aux modifications osseuses."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "androgen-estrogen"
    }
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la progestérone, quelles propositions sont exactes ?",
    "choices": [
      "Elle est produite par le corps jaune.",
      "Elle n’a aucun rôle mammaire.",
      "Elle augmente la température centrale après l’ovulation.",
      "Elle détruit l’endomètre en phase lutéale."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La progestérone soutient la phase lutéale et augmente la température basale.",
    "choiceExplanations": [
      "Vrai. Elle est produite par le corps jaune.",
      "Faux. Elle participe au développement des canaux mammaires.",
      "Vrai. Elle augmente la température centrale après l’ovulation.",
      "Faux. Elle favorise son développement."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "progesterone"
    }
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’aldostérone, quelles propositions sont exactes ?",
    "choices": [
      "Elle est produite uniquement par Leydig.",
      "Le C18 porte un méthyle comme dans la corticostérone.",
      "Elle possède un noyau prégnane C21.",
      "Elle agit principalement au rein."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’aldostérone se distingue par son aldéhyde C18.",
    "choiceExplanations": [
      "Faux. Elle est surrénalienne.",
      "Faux. L’aldostérone porte un aldéhyde.",
      "Vrai. Elle possède un noyau prégnane C21.",
      "Vrai. Elle agit principalement au rein."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente hypertension et hypokaliémie par excès d’aldostérone. Quelles propositions sont exactes ?",
    "choices": [
      "Elle provoque uniquement une perte de sodium.",
      "Elle favorise l’élimination du potassium.",
      "Elle n’agit jamais au rein.",
      "Elle participe au maintien de la pression artérielle."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’aldostérone favorise rétention sodée et excrétion K+/H+.",
    "choiceExplanations": [
      "Faux. Elle favorise sa réabsorption.",
      "Vrai. Elle favorise l’élimination du potassium.",
      "Faux. Le rein est sa cible majeure.",
      "Vrai. Elle participe au maintien de la pression artérielle."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-kidney"
    }
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la distinction aldostérone-corticostérone, quelles propositions sont exactes ?",
    "choices": [
      "L’aldostérone porte un méthyle C18.",
      "La corticostérone n’est pas un minéralocorticoïde dans la fiche.",
      "La corticostérone porte un méthyle C18.",
      "La corticostérone est une vitamine."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le groupement C18 distingue aldostérone et corticostérone.",
    "choiceExplanations": [
      "Faux. Elle porte un aldéhyde.",
      "Vrai. La corticostérone n’est pas un minéralocorticoïde dans la fiche.",
      "Vrai. La corticostérone porte un méthyle C18.",
      "Faux. C’est un corticostéroïde."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le cortisol, quelles propositions sont exactes ?",
    "choices": [
      "Il possède un noyau prégnane C21.",
      "Il est aussi appelé hydrocortisone.",
      "Il est un androgène C19.",
      "Il est hypoglycémiant."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le cortisol est un glucocorticoïde C21 hyperglycémiant.",
    "choiceExplanations": [
      "Vrai. Il possède un noyau prégnane C21.",
      "Vrai. Il est aussi appelé hydrocortisone.",
      "Faux. C’est un glucocorticoïde C21.",
      "Faux. Il augmente la glycémie."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient reçoit une corticothérapie prolongée. Quelles propositions sont exactes ?",
    "choices": [
      "Il a une action immunosuppressive.",
      "Il stimule toujours toutes les réponses immunitaires.",
      "Il est exclusivement pro-inflammatoire.",
      "La cortisone est utilisée comme médicament."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les glucocorticoïdes sont utilisés pour leurs effets anti-inflammatoires.",
    "choiceExplanations": [
      "Vrai. Il a une action immunosuppressive.",
      "Faux. Il est immunosuppresseur.",
      "Faux. Il est anti-inflammatoire.",
      "Vrai. La cortisone est utilisée comme médicament."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cortisol"
    }
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la testostérone, quelles propositions sont exactes ?",
    "choices": [
      "Elle possède un noyau androstane C19.",
      "Elle porte un aldéhyde C18.",
      "Elle porte un OH en C17β.",
      "Elle n’a aucun effet sexuel masculin."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La testostérone est l’androgène C19 majeur.",
    "choiceExplanations": [
      "Vrai. Elle possède un noyau androstane C19.",
      "Faux. Ce caractère concerne l’aldostérone.",
      "Vrai. Elle porte un OH en C17β.",
      "Faux. Elle participe aux caractères masculins."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "androgen-estrogen"
    }
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les effets des androgènes, quelles propositions sont exactes ?",
    "choices": [
      "Ils stimulent la synthèse protéique musculaire.",
      "Ils augmentent systématiquement le stockage lipidique.",
      "Ils favorisent les organes génitaux masculins.",
      "Ils favorisent exclusivement les caractères féminins."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les androgènes ont des effets sexuels, osseux et anabolisants.",
    "choiceExplanations": [
      "Vrai. Ils stimulent la synthèse protéique musculaire.",
      "Faux. La fiche indique une diminution des réserves.",
      "Vrai. Ils favorisent les organes génitaux masculins.",
      "Faux. Ils favorisent surtout les caractères masculins."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "androgen-estrogen"
    }
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les œstrogènes, quelles propositions sont exactes ?",
    "choices": [
      "Ils favorisent les caractères sexuels féminins.",
      "Ils n’ont aucun effet vasculaire.",
      "Ils n’ont aucun effet mammaire.",
      "Ils sont produits par le follicule ovarien."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les œstrogènes C18 ont des effets reproductifs, osseux et vasculaires.",
    "choiceExplanations": [
      "Vrai. Ils favorisent les caractères sexuels féminins.",
      "Faux. La fiche décrit une vasodilatation.",
      "Faux. Ils participent au développement mammaire.",
      "Vrai. Ils sont produits par le follicule ovarien."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "androgen-estrogen"
    }
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les effets des œstrogènes, quelles propositions sont exactes ?",
    "choices": [
      "Ils sont systématiquement vasoconstricteurs.",
      "Ils favorisent la déperdition de chaleur.",
      "Ils sont associés à une protection cardiovasculaire.",
      "Ils n’ont aucun effet osseux."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les œstrogènes ont des effets vasculaires, thermiques et osseux.",
    "choiceExplanations": [
      "Faux. Ils sont vasodilatateurs.",
      "Vrai. Ils favorisent la déperdition de chaleur.",
      "Vrai. Ils sont associés à une protection cardiovasculaire.",
      "Faux. Ils participent aux modifications osseuses."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "androgen-estrogen"
    }
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une patiente suit sa température basale après l’ovulation. Quelles propositions sont exactes ?",
    "choices": [
      "Elle n’a aucun rôle mammaire.",
      "Elle augmente la température centrale après l’ovulation.",
      "Elle stimule les sécrétions et le développement de l’endomètre.",
      "Elle détruit l’endomètre en phase lutéale."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La progestérone soutient la phase lutéale et augmente la température basale.",
    "choiceExplanations": [
      "Faux. Elle participe au développement des canaux mammaires.",
      "Vrai. Elle augmente la température centrale après l’ovulation.",
      "Vrai. Elle stimule les sécrétions et le développement de l’endomètre.",
      "Faux. Elle favorise son développement."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "progesterone"
    }
  }
];
