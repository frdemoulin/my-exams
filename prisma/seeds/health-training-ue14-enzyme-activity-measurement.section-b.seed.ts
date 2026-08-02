import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "31": [
    "l’unité internationale d’activité enzymatique"
  ],
  "32": [
    "le katal et les conversions"
  ],
  "33": [
    "la concentration d’activité catalytique"
  ],
  "34": [
    "la constante catalytique Kcat"
  ],
  "35": [
    "l’activité spécifique et l’activité molaire spécifique"
  ],
  "36": [
    "l’unité internationale d’activité enzymatique"
  ],
  "37": [
    "le katal et les conversions"
  ],
  "38": [
    "la concentration d’activité catalytique"
  ],
  "39": [
    "la constante catalytique Kcat"
  ],
  "40": [
    "l’activité spécifique et l’activité molaire spécifique"
  ],
  "41": [
    "l’unité internationale d’activité enzymatique"
  ],
  "42": [
    "le katal et les conversions"
  ],
  "43": [
    "la concentration d’activité catalytique"
  ],
  "44": [
    "la constante catalytique Kcat"
  ],
  "45": [
    "l’activité spécifique et l’activité molaire spécifique"
  ],
  "46": [
    "l’unité internationale d’activité enzymatique"
  ],
  "47": [
    "le katal et les conversions"
  ],
  "48": [
    "la concentration d’activité catalytique"
  ],
  "49": [
    "la constante catalytique Kcat"
  ],
  "50": [
    "l’activité spécifique et l’activité molaire spécifique"
  ],
  "51": [
    "l’unité internationale d’activité enzymatique"
  ],
  "52": [
    "le katal et les conversions"
  ],
  "53": [
    "la concentration d’activité catalytique"
  ],
  "54": [
    "la constante catalytique Kcat"
  ],
  "55": [
    "l’activité spécifique et l’activité molaire spécifique"
  ],
  "56": [
    "l’unité internationale d’activité enzymatique"
  ],
  "57": [
    "le katal et les conversions"
  ],
  "58": [
    "la concentration d’activité catalytique"
  ],
  "59": [
    "la constante catalytique Kcat"
  ],
  "60": [
    "l’activité spécifique et l’activité molaire spécifique"
  ]
};

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "unites-parametres-1",
    "title": "UI et katal",
    "description": "Identifier les notions fondamentales de la section.",
    "stage": "DISCOVER",
    "sectionOrder": 2,
    "questionOrders": [
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40
    ]
  },
  {
    "order": 2,
    "slug": "unites-parametres-2",
    "title": "Kcat et concentrations d’activité",
    "description": "Appliquer les définitions, classifications et relations du cours.",
    "stage": "PRACTICE",
    "sectionOrder": 2,
    "questionOrders": [
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50
    ]
  },
  {
    "order": 3,
    "slug": "unites-parametres-3",
    "title": "Activités spécifique et molaire",
    "description": "Mobiliser les notions dans des raisonnements transversaux et des situations biologiques.",
    "stage": "MASTER",
    "sectionOrder": 2,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères fondamentaux",
        "sharedStatement": "Les questions suivantes mobilisent les repères essentiels de la section.",
        "questionOrders": [
          51,
          52,
          53
        ]
      },
      {
        "type": "GROUP",
        "title": "Mécanismes et relations",
        "sharedStatement": "Les questions suivantes relient les notions et mécanismes de la section.",
        "questionOrders": [
          54,
          55,
          56
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques",
        "sharedStatement": "Les questions suivantes replacent les notions dans une situation biologique, analytique ou médicale.",
        "questionOrders": [
          57,
          58,
          59,
          60
        ]
      }
    ]
  }
];

export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  {
    "order": 31,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’unité internationale d’activité enzymatique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal"
    },
    "choices": [
      "Une UI correspond à 1 nmol par heure.",
      "L’activité doit être définie dans des conditions expérimentales données.",
      "L’UI reste très utilisée.",
      "L’unité UI peut aussi être exprimée à partir de la quantité de produit formée."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’UI mesure une quantité de substrat transformée par minute dans des conditions définies.",
    "choiceExplanations": [
      "Faux. Elle vaut 1 µmol par minute.",
      "Vrai. L’activité doit être définie dans des conditions expérimentales données.",
      "Vrai. L’UI reste très utilisée.",
      "Vrai. L’unité UI peut aussi être exprimée à partir de la quantité de produit formée."
    ]
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le katal et les conversions :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal-conversion"
    },
    "choices": [
      "Un katal correspond à 1 µmol par minute.",
      "Une UI vaut environ 16,67 nkat.",
      "Un nkat vaut 60 UI.",
      "Un katal est une unité cohérente du Système international."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La conversion UI-katal exige de convertir micromoles en moles et minutes en secondes.",
    "choiceExplanations": [
      "Faux. Cette définition correspond à l’UI.",
      "Vrai. Une UI vaut environ 16,67 nkat.",
      "Faux. Il vaut 0,060 UI.",
      "Vrai. Un katal est une unité cohérente du Système international."
    ]
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la concentration d’activité catalytique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-concentration"
    },
    "choices": [
      "Elle peut s’exprimer en kat·L⁻¹.",
      "La concentration catalytique rapporte l’activité à un volume de solution enzymatique.",
      "Elle peut s’exprimer en UI·L⁻¹.",
      "Elle est indépendante du volume de solution."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La concentration catalytique exprime l’activité mesurée dans un volume donné de solution.",
    "choiceExplanations": [
      "Vrai. Elle peut s’exprimer en kat·L⁻¹.",
      "Vrai. La concentration catalytique rapporte l’activité à un volume de solution enzymatique.",
      "Vrai. Elle peut s’exprimer en UI·L⁻¹.",
      "Faux. Elle est définie par unité de volume."
    ]
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la constante catalytique Kcat :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "kcat-turnover"
    },
    "choices": [
      "L’anhydrase carbonique est donnée à environ 10⁶ s⁻¹.",
      "La chymotrypsine a un Kcat supérieur à celui de l’anhydrase carbonique dans les exemples.",
      "Kcat est mesurée lorsque l’enzyme n’a aucun substrat.",
      "La chymotrypsine est donnée à environ 100 s⁻¹."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Kcat mesure le nombre de cycles catalytiques réalisés par enzyme et par seconde à saturation.",
    "choiceExplanations": [
      "Vrai. L’anhydrase carbonique est donnée à environ 10⁶ s⁻¹.",
      "Faux. Son Kcat est bien plus faible.",
      "Faux. Elle est définie à saturation.",
      "Vrai. La chymotrypsine est donnée à environ 100 s⁻¹."
    ]
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’activité spécifique et l’activité molaire spécifique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "specific-activities"
    },
    "choices": [
      "L’activité spécifique rapporte l’activité à la masse d’enzyme.",
      "Kcat et activité molaire spécifique sont toujours différentes à saturation.",
      "L’activité molaire spécifique rapporte l’activité à la quantité de matière d’enzyme.",
      "Elle peut s’exprimer en UI·mg⁻¹."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les activités spécifique et molaire normalisent l’activité par la masse ou la quantité de matière d’enzyme.",
    "choiceExplanations": [
      "Vrai. L’activité spécifique rapporte l’activité à la masse d’enzyme.",
      "Faux. Elles sont équivalentes avec des unités cohérentes.",
      "Vrai. L’activité molaire spécifique rapporte l’activité à la quantité de matière d’enzyme.",
      "Vrai. Elle peut s’exprimer en UI·mg⁻¹."
    ]
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’unité internationale d’activité enzymatique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal"
    },
    "choices": [
      "L’activité doit être définie dans des conditions expérimentales données.",
      "Une UI correspond à 1 µmol de substrat transformé par minute.",
      "Une UI correspond à 1 mole de substrat par seconde.",
      "Une UI correspond à 1 nmol par heure."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "L’UI mesure une quantité de substrat transformée par minute dans des conditions définies.",
    "choiceExplanations": [
      "Vrai. L’activité doit être définie dans des conditions expérimentales données.",
      "Vrai. Une UI correspond à 1 µmol de substrat transformé par minute.",
      "Faux. Cette définition correspond au katal.",
      "Faux. Elle vaut 1 µmol par minute."
    ]
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le katal et les conversions :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal-conversion"
    },
    "choices": [
      "Une UI vaut environ 16,67 nkat.",
      "Un katal correspond à 1 mole de substrat transformée par seconde.",
      "Un katal est une unité cohérente du Système international.",
      "Le katal est une unité de masse d’enzyme."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La conversion UI-katal exige de convertir micromoles en moles et minutes en secondes.",
    "choiceExplanations": [
      "Vrai. Une UI vaut environ 16,67 nkat.",
      "Vrai. Un katal correspond à 1 mole de substrat transformée par seconde.",
      "Vrai. Un katal est une unité cohérente du Système international.",
      "Faux. C’est une unité d’activité en mol·s⁻¹."
    ]
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la concentration d’activité catalytique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-concentration"
    },
    "choices": [
      "Elle est indépendante du volume de solution.",
      "UI·L⁻¹ est une unité de Kcat.",
      "La concentration catalytique rapporte l’activité à un volume de solution enzymatique.",
      "Elle correspond finalement à une vitesse initiale par unité de volume."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La concentration catalytique exprime l’activité mesurée dans un volume donné de solution.",
    "choiceExplanations": [
      "Faux. Elle est définie par unité de volume.",
      "Faux. C’est une unité de concentration catalytique.",
      "Vrai. La concentration catalytique rapporte l’activité à un volume de solution enzymatique.",
      "Vrai. Elle correspond finalement à une vitesse initiale par unité de volume."
    ]
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la constante catalytique Kcat :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "kcat-turnover"
    },
    "choices": [
      "Kcat est le nombre de moles de substrat transformées par mole d’enzyme et par seconde à saturation.",
      "La chymotrypsine a un Kcat supérieur à celui de l’anhydrase carbonique dans les exemples.",
      "Kcat s’exprime en s⁻¹.",
      "L’anhydrase carbonique est donnée à environ 10⁶ s⁻¹."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Kcat mesure le nombre de cycles catalytiques réalisés par enzyme et par seconde à saturation.",
    "choiceExplanations": [
      "Vrai. Kcat est le nombre de moles de substrat transformées par mole d’enzyme et par seconde à saturation.",
      "Faux. Son Kcat est bien plus faible.",
      "Vrai. Kcat s’exprime en s⁻¹.",
      "Vrai. L’anhydrase carbonique est donnée à environ 10⁶ s⁻¹."
    ]
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’activité spécifique et l’activité molaire spécifique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "specific-activities"
    },
    "choices": [
      "Elle peut s’exprimer en UI·mg⁻¹.",
      "Kcat et activité molaire spécifique sont toujours différentes à saturation.",
      "L’activité molaire spécifique s’exprime uniquement en UI·L⁻¹.",
      "À saturation, l’activité molaire spécifique exprimée en kat·mol⁻¹ est égale à Kcat."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les activités spécifique et molaire normalisent l’activité par la masse ou la quantité de matière d’enzyme.",
    "choiceExplanations": [
      "Vrai. Elle peut s’exprimer en UI·mg⁻¹.",
      "Faux. Elles sont équivalentes avec des unités cohérentes.",
      "Faux. Elle se rapporte à une mole d’enzyme.",
      "Vrai. À saturation, l’activité molaire spécifique exprimée en kat·mol⁻¹ est égale à Kcat."
    ]
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’unité internationale d’activité enzymatique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal"
    },
    "choices": [
      "L’UI est une unité de concentration massique.",
      "L’UI reste très utilisée.",
      "L’unité UI peut aussi être exprimée à partir de la quantité de produit formée.",
      "Une UI correspond à 1 mole de substrat par seconde."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’UI mesure une quantité de substrat transformée par minute dans des conditions définies.",
    "choiceExplanations": [
      "Faux. C’est une unité d’activité catalytique.",
      "Vrai. L’UI reste très utilisée.",
      "Vrai. L’unité UI peut aussi être exprimée à partir de la quantité de produit formée.",
      "Faux. Cette définition correspond au katal."
    ]
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le katal et les conversions, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal-conversion"
    },
    "choices": [
      "Une UI vaut 16,67 kat.",
      "Le katal est une unité de masse d’enzyme.",
      "Un katal correspond à 1 mole de substrat transformée par seconde.",
      "Un katal correspond à 1 µmol par minute."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "La conversion UI-katal exige de convertir micromoles en moles et minutes en secondes.",
    "choiceExplanations": [
      "Faux. Elle vaut 16,67 nanokatals.",
      "Faux. C’est une unité d’activité en mol·s⁻¹.",
      "Vrai. Un katal correspond à 1 mole de substrat transformée par seconde.",
      "Faux. Cette définition correspond à l’UI."
    ]
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la concentration d’activité catalytique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-concentration"
    },
    "choices": [
      "Elle correspond finalement à une vitesse initiale par unité de volume.",
      "La concentration catalytique rapporte l’activité à une masse d’enzyme.",
      "UI·L⁻¹ est une unité de Kcat.",
      "Elle peut s’exprimer en kat·L⁻¹."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La concentration catalytique exprime l’activité mesurée dans un volume donné de solution.",
    "choiceExplanations": [
      "Vrai. Elle correspond finalement à une vitesse initiale par unité de volume.",
      "Faux. Cela correspond plutôt à l’activité spécifique.",
      "Faux. C’est une unité de concentration catalytique.",
      "Vrai. Elle peut s’exprimer en kat·L⁻¹."
    ]
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la constante catalytique Kcat, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "kcat-turnover"
    },
    "choices": [
      "Kcat s’exprime en mol·L⁻¹.",
      "Kcat est mesurée lorsque l’enzyme n’a aucun substrat.",
      "Kcat est le nombre de moles de substrat transformées par mole d’enzyme et par seconde à saturation.",
      "La chymotrypsine est donnée à environ 100 s⁻¹."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Kcat mesure le nombre de cycles catalytiques réalisés par enzyme et par seconde à saturation.",
    "choiceExplanations": [
      "Faux. Elle s’exprime en s⁻¹.",
      "Faux. Elle est définie à saturation.",
      "Vrai. Kcat est le nombre de moles de substrat transformées par mole d’enzyme et par seconde à saturation.",
      "Vrai. La chymotrypsine est donnée à environ 100 s⁻¹."
    ]
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’activité spécifique et l’activité molaire spécifique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "specific-activities"
    },
    "choices": [
      "L’activité spécifique se rapporte au volume de solution uniquement.",
      "UI·mg⁻¹ est une unité de concentration catalytique.",
      "L’activité molaire spécifique s’exprime uniquement en UI·L⁻¹.",
      "L’activité spécifique rapporte l’activité à la masse d’enzyme."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "Les activités spécifique et molaire normalisent l’activité par la masse ou la quantité de matière d’enzyme.",
    "choiceExplanations": [
      "Faux. Elle se rapporte à la masse d’enzyme.",
      "Faux. C’est une unité d’activité spécifique.",
      "Faux. Elle se rapporte à une mole d’enzyme.",
      "Vrai. L’activité spécifique rapporte l’activité à la masse d’enzyme."
    ]
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’unité internationale d’activité enzymatique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal"
    },
    "choices": [
      "Une UI correspond à 1 mole de substrat par seconde.",
      "L’unité UI peut aussi être exprimée à partir de la quantité de produit formée.",
      "L’activité doit être définie dans des conditions expérimentales données.",
      "L’UI est une unité de concentration massique."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’UI mesure une quantité de substrat transformée par minute dans des conditions définies.",
    "choiceExplanations": [
      "Faux. Cette définition correspond au katal.",
      "Vrai. L’unité UI peut aussi être exprimée à partir de la quantité de produit formée.",
      "Vrai. L’activité doit être définie dans des conditions expérimentales données.",
      "Faux. C’est une unité d’activité catalytique."
    ]
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le katal et les conversions, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal-conversion"
    },
    "choices": [
      "Un katal correspond à 1 µmol par minute.",
      "Le katal est une unité de masse d’enzyme.",
      "Un nkat vaut 60·10⁻³ UI.",
      "Une UI vaut environ 16,67 nkat."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La conversion UI-katal exige de convertir micromoles en moles et minutes en secondes.",
    "choiceExplanations": [
      "Faux. Cette définition correspond à l’UI.",
      "Faux. C’est une unité d’activité en mol·s⁻¹.",
      "Vrai. Un nkat vaut 60·10⁻³ UI.",
      "Vrai. Une UI vaut environ 16,67 nkat."
    ]
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la concentration d’activité catalytique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-concentration"
    },
    "choices": [
      "UI·L⁻¹ est une unité de Kcat.",
      "La concentration catalytique rapporte l’activité à un volume de solution enzymatique.",
      "La concentration catalytique rapporte l’activité à une masse d’enzyme.",
      "Elle s’exprime uniquement en mol·L⁻¹ sans unité de temps."
    ],
    "correctChoiceIndexes": [
      1
    ],
    "explanation": "La concentration catalytique exprime l’activité mesurée dans un volume donné de solution.",
    "choiceExplanations": [
      "Faux. C’est une unité de concentration catalytique.",
      "Vrai. La concentration catalytique rapporte l’activité à un volume de solution enzymatique.",
      "Faux. Cela correspond plutôt à l’activité spécifique.",
      "Faux. Elle comporte une dimension temporelle."
    ]
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la constante catalytique Kcat, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "kcat-turnover"
    },
    "choices": [
      "Kcat s’exprime en s⁻¹.",
      "L’anhydrase carbonique est donnée à environ 10⁶ s⁻¹.",
      "Kcat est une concentration de substrat.",
      "La chymotrypsine a un Kcat supérieur à celui de l’anhydrase carbonique dans les exemples."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Kcat mesure le nombre de cycles catalytiques réalisés par enzyme et par seconde à saturation.",
    "choiceExplanations": [
      "Vrai. Kcat s’exprime en s⁻¹.",
      "Vrai. L’anhydrase carbonique est donnée à environ 10⁶ s⁻¹.",
      "Faux. C’est une fréquence de cycles catalytiques.",
      "Faux. Son Kcat est bien plus faible."
    ]
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’activité spécifique et l’activité molaire spécifique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "specific-activities"
    },
    "choices": [
      "Elle peut s’exprimer en UI·mg⁻¹.",
      "L’activité spécifique rapporte l’activité à la masse d’enzyme.",
      "Kcat et activité molaire spécifique sont toujours différentes à saturation.",
      "UI·mg⁻¹ est une unité de concentration catalytique."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les activités spécifique et molaire normalisent l’activité par la masse ou la quantité de matière d’enzyme.",
    "choiceExplanations": [
      "Vrai. Elle peut s’exprimer en UI·mg⁻¹.",
      "Vrai. L’activité spécifique rapporte l’activité à la masse d’enzyme.",
      "Faux. Elles sont équivalentes avec des unités cohérentes.",
      "Faux. C’est une unité d’activité spécifique."
    ]
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’unité internationale d’activité enzymatique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal"
    },
    "choices": [
      "Une UI correspond à 1 µmol de substrat transformé par minute.",
      "L’UI est une unité de concentration massique.",
      "L’UI reste très utilisée.",
      "Une UI correspond à 1 mole de substrat par seconde."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’UI mesure une quantité de substrat transformée par minute dans des conditions définies.",
    "choiceExplanations": [
      "Vrai. Une UI correspond à 1 µmol de substrat transformé par minute.",
      "Faux. C’est une unité d’activité catalytique.",
      "Vrai. L’UI reste très utilisée.",
      "Faux. Cette définition correspond au katal."
    ]
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le katal et les conversions. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal-conversion"
    },
    "choices": [
      "Une UI vaut environ 16,67 nkat.",
      "Un nkat vaut 60·10⁻³ UI.",
      "Un katal correspond à 1 mole de substrat transformée par seconde.",
      "Une UI vaut 16,67 kat."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La conversion UI-katal exige de convertir micromoles en moles et minutes en secondes.",
    "choiceExplanations": [
      "Vrai. Une UI vaut environ 16,67 nkat.",
      "Vrai. Un nkat vaut 60·10⁻³ UI.",
      "Vrai. Un katal correspond à 1 mole de substrat transformée par seconde.",
      "Faux. Elle vaut 16,67 nanokatals."
    ]
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la concentration d’activité catalytique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-concentration"
    },
    "choices": [
      "UI·L⁻¹ est une unité de Kcat.",
      "Elle peut s’exprimer en UI·L⁻¹.",
      "Elle peut s’exprimer en kat·L⁻¹.",
      "Elle s’exprime uniquement en mol·L⁻¹ sans unité de temps."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La concentration catalytique exprime l’activité mesurée dans un volume donné de solution.",
    "choiceExplanations": [
      "Faux. C’est une unité de concentration catalytique.",
      "Vrai. Elle peut s’exprimer en UI·L⁻¹.",
      "Vrai. Elle peut s’exprimer en kat·L⁻¹.",
      "Faux. Elle comporte une dimension temporelle."
    ]
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la constante catalytique Kcat. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "kcat-turnover"
    },
    "choices": [
      "Kcat est mesurée lorsque l’enzyme n’a aucun substrat.",
      "Kcat s’exprime en mol·L⁻¹.",
      "La chymotrypsine est donnée à environ 100 s⁻¹.",
      "Kcat est le nombre de moles de substrat transformées par mole d’enzyme et par seconde à saturation."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Kcat mesure le nombre de cycles catalytiques réalisés par enzyme et par seconde à saturation.",
    "choiceExplanations": [
      "Faux. Elle est définie à saturation.",
      "Faux. Elle s’exprime en s⁻¹.",
      "Vrai. La chymotrypsine est donnée à environ 100 s⁻¹.",
      "Vrai. Kcat est le nombre de moles de substrat transformées par mole d’enzyme et par seconde à saturation."
    ]
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Au cours d’une purification, un laboratoire compare l’activité par milligramme de protéines entre plusieurs fractions. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "specific-activities"
    },
    "choices": [
      "L’activité spécifique rapporte l’activité à la masse d’enzyme.",
      "Elle peut s’exprimer en UI·mg⁻¹.",
      "UI·mg⁻¹ est une unité de concentration catalytique.",
      "Kcat et activité molaire spécifique sont toujours différentes à saturation."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les activités spécifique et molaire normalisent l’activité par la masse ou la quantité de matière d’enzyme.",
    "choiceExplanations": [
      "Vrai. L’activité spécifique rapporte l’activité à la masse d’enzyme.",
      "Vrai. Elle peut s’exprimer en UI·mg⁻¹.",
      "Faux. C’est une unité d’activité spécifique.",
      "Faux. Elles sont équivalentes avec des unités cohérentes."
    ]
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’unité internationale d’activité enzymatique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal"
    },
    "choices": [
      "L’activité doit être définie dans des conditions expérimentales données.",
      "Une UI correspond à 1 µmol de substrat transformé par minute.",
      "Les conditions expérimentales n’ont aucune importance.",
      "L’unité UI peut aussi être exprimée à partir de la quantité de produit formée."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "L’UI mesure une quantité de substrat transformée par minute dans des conditions définies.",
    "choiceExplanations": [
      "Vrai. L’activité doit être définie dans des conditions expérimentales données.",
      "Vrai. Une UI correspond à 1 µmol de substrat transformé par minute.",
      "Faux. Elles doivent être précisées.",
      "Vrai. L’unité UI peut aussi être exprimée à partir de la quantité de produit formée."
    ]
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le katal et les conversions. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal-conversion"
    },
    "choices": [
      "Une UI vaut 16,67 kat.",
      "Un katal correspond à 1 mole de substrat transformée par seconde.",
      "Une UI vaut environ 16,67 nkat.",
      "Un katal correspond à 1 µmol par minute."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La conversion UI-katal exige de convertir micromoles en moles et minutes en secondes.",
    "choiceExplanations": [
      "Faux. Elle vaut 16,67 nanokatals.",
      "Vrai. Un katal correspond à 1 mole de substrat transformée par seconde.",
      "Vrai. Une UI vaut environ 16,67 nkat.",
      "Faux. Cette définition correspond à l’UI."
    ]
  },
  {
    "order": 58,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la concentration d’activité catalytique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-concentration"
    },
    "choices": [
      "La concentration catalytique rapporte l’activité à un volume de solution enzymatique.",
      "Elle s’exprime uniquement en mol·L⁻¹ sans unité de temps.",
      "UI·L⁻¹ est une unité de Kcat.",
      "Elle peut s’exprimer en UI·L⁻¹."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La concentration catalytique exprime l’activité mesurée dans un volume donné de solution.",
    "choiceExplanations": [
      "Vrai. La concentration catalytique rapporte l’activité à un volume de solution enzymatique.",
      "Faux. Elle comporte une dimension temporelle.",
      "Faux. C’est une unité de concentration catalytique.",
      "Vrai. Elle peut s’exprimer en UI·L⁻¹."
    ]
  },
  {
    "order": 59,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la constante catalytique Kcat. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "kcat-turnover"
    },
    "choices": [
      "La chymotrypsine a un Kcat supérieur à celui de l’anhydrase carbonique dans les exemples.",
      "L’anhydrase carbonique est donnée à environ 10⁶ s⁻¹.",
      "Kcat s’exprime en mol·L⁻¹.",
      "Kcat est le nombre de moles de substrat transformées par mole d’enzyme et par seconde à saturation."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Kcat mesure le nombre de cycles catalytiques réalisés par enzyme et par seconde à saturation.",
    "choiceExplanations": [
      "Faux. Son Kcat est bien plus faible.",
      "Vrai. L’anhydrase carbonique est donnée à environ 10⁶ s⁻¹.",
      "Faux. Elle s’exprime en s⁻¹.",
      "Vrai. Kcat est le nombre de moles de substrat transformées par mole d’enzyme et par seconde à saturation."
    ]
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Au cours d’une purification, un laboratoire compare l’activité par milligramme de protéines entre plusieurs fractions. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "specific-activities"
    },
    "choices": [
      "L’activité spécifique rapporte l’activité à la masse d’enzyme.",
      "À saturation, l’activité molaire spécifique exprimée en kat·mol⁻¹ est égale à Kcat.",
      "L’activité molaire spécifique rapporte l’activité à la quantité de matière d’enzyme.",
      "L’activité molaire spécifique s’exprime uniquement en UI·L⁻¹."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les activités spécifique et molaire normalisent l’activité par la masse ou la quantité de matière d’enzyme.",
    "choiceExplanations": [
      "Vrai. L’activité spécifique rapporte l’activité à la masse d’enzyme.",
      "Vrai. À saturation, l’activité molaire spécifique exprimée en kat·mol⁻¹ est égale à Kcat.",
      "Vrai. L’activité molaire spécifique rapporte l’activité à la quantité de matière d’enzyme.",
      "Faux. Elle se rapporte à une mole d’enzyme."
    ]
  }
];
