import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "31": [
    "les phosphosphingolipides"
  ],
  "32": [
    "la composition de la sphingomyéline"
  ],
  "33": [
    "l’abondance de la sphingomyéline"
  ],
  "34": [
    "la dégradation de la sphingomyéline"
  ],
  "35": [
    "les localisations de la sphingomyéline"
  ],
  "36": [
    "les rôles fonctionnels de la sphingomyéline"
  ],
  "37": [
    "la sclérose en plaques"
  ],
  "38": [
    "le caractère amphiphile de la sphingomyéline"
  ],
  "39": [
    "le céramide fréquent de la sphingomyéline"
  ],
  "40": [
    "la comparaison sphingomyéline-glycérophospholipide"
  ],
  "41": [
    "les phosphosphingolipides"
  ],
  "42": [
    "la composition de la sphingomyéline"
  ],
  "43": [
    "l’abondance de la sphingomyéline"
  ],
  "44": [
    "la dégradation de la sphingomyéline"
  ],
  "45": [
    "les localisations de la sphingomyéline"
  ],
  "46": [
    "les rôles fonctionnels de la sphingomyéline"
  ],
  "47": [
    "la sclérose en plaques"
  ],
  "48": [
    "le caractère amphiphile de la sphingomyéline"
  ],
  "49": [
    "le céramide fréquent de la sphingomyéline"
  ],
  "50": [
    "la comparaison sphingomyéline-glycérophospholipide"
  ],
  "51": [
    "les phosphosphingolipides"
  ],
  "52": [
    "la composition de la sphingomyéline"
  ],
  "53": [
    "l’abondance de la sphingomyéline"
  ],
  "54": [
    "la dégradation de la sphingomyéline"
  ],
  "55": [
    "les localisations de la sphingomyéline"
  ],
  "56": [
    "les rôles fonctionnels de la sphingomyéline"
  ],
  "57": [
    "la sclérose en plaques"
  ],
  "58": [
    "le caractère amphiphile de la sphingomyéline"
  ],
  "59": [
    "le céramide fréquent de la sphingomyéline"
  ],
  "60": [
    "la comparaison sphingomyéline-glycérophospholipide"
  ]
};

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "sphingomyelin-fondamentaux",
    "title": "Structure de la sphingomyéline",
    "description": "Acquérir les notions fondamentales de la section.",
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
    "slug": "sphingomyelin-applications",
    "title": "Myéline et fonctions neuronales",
    "description": "Appliquer et comparer les notions de la section.",
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
    "slug": "sphingomyelin-raisonnement",
    "title": "Raisonnement sur les phosphosphingolipides",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 2,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères structuraux",
        "sharedStatement": "Les questions suivantes mobilisent les principaux repères structuraux de la section.",
        "questionOrders": [
          51,
          52,
          53
        ]
      },
      {
        "type": "GROUP",
        "title": "Propriétés et fonctions",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          54,
          55,
          56
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques et médicales",
        "sharedStatement": "Les questions suivantes replacent les notions dans leur contexte biologique ou médical.",
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
    "question": "À propos de les phosphosphingolipides :",
    "choices": [
      "La tête se fixe sur l’alcool primaire C1.",
      "Ils contiennent un phosphate.",
      "Ils dérivent d’un céramide.",
      "La tête se fixe sur l’amine C2."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les phosphosphingolipides ajoutent une tête phosphatée au céramide.",
    "choiceExplanations": [
      "Vrai. La tête se fixe sur l’alcool primaire C1.",
      "Vrai. Ils contiennent un phosphate.",
      "Vrai. Ils dérivent d’un céramide.",
      "Faux. Elle se fixe sur l’alcool C1."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la composition de la sphingomyéline :",
    "choices": [
      "Elle est un triacylglycérol.",
      "La tête est polaire.",
      "Elle porte généralement choline ou éthanolamine.",
      "Elle associe céramide et acide phosphorique."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La sphingomyéline associe céramide, phosphate et alcool aminé.",
    "choiceExplanations": [
      "Faux. C’est un phosphosphingolipide.",
      "Vrai. La tête est polaire.",
      "Vrai. Elle porte généralement choline ou éthanolamine.",
      "Vrai. Elle associe céramide et acide phosphorique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’abondance de la sphingomyéline :",
    "choices": [
      "Elle est absente des membranes.",
      "Elle est le phosphosphingolipide majeur.",
      "Elle est importante dans le tissu nerveux.",
      "La fiche lui attribue environ 85 % des sphingolipides."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La sphingomyéline est le sphingolipide phosphaté majeur.",
    "choiceExplanations": [
      "Faux. Elle est un constituant majeur.",
      "Vrai. Elle est le phosphosphingolipide majeur.",
      "Vrai. Elle est importante dans le tissu nerveux.",
      "Vrai. La fiche lui attribue environ 85 % des sphingolipides."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la dégradation de la sphingomyéline :",
    "choices": [
      "Elle produit un céramide.",
      "Un défaut de dégradation peut provoquer une accumulation.",
      "La sphingomyélinase hydrolyse la sphingomyéline.",
      "La sphingomyélinase synthétise du cholestérol."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La sphingomyélinase libère un céramide.",
    "choiceExplanations": [
      "Vrai. Elle produit un céramide.",
      "Vrai. Un défaut de dégradation peut provoquer une accumulation.",
      "Vrai. La sphingomyélinase hydrolyse la sphingomyéline.",
      "Faux. Elle hydrolyse la sphingomyéline."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "catabolism"
    }
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les localisations de la sphingomyéline :",
    "choices": [
      "Elle ne participe jamais à la myéline.",
      "Elle est présente dans la matière grise.",
      "Elle est présente dans la cornée.",
      "Elle participe à la gaine de myéline."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La sphingomyéline est abondante dans le cerveau, la myéline et la cornée.",
    "choiceExplanations": [
      "Faux. Elle en est un constituant.",
      "Vrai. Elle est présente dans la matière grise.",
      "Vrai. Elle est présente dans la cornée.",
      "Vrai. Elle participe à la gaine de myéline."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les rôles fonctionnels de la sphingomyéline :",
    "choices": [
      "Elle contribue à l’activité neuronale.",
      "Elle participe à la transduction du signal.",
      "Son métabolisme peut libérer du céramide signal.",
      "Elle n’a aucune fonction neuronale."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La sphingomyéline relie structure de la myéline et signalisation.",
    "choiceExplanations": [
      "Vrai. Elle contribue à l’activité neuronale.",
      "Vrai. Elle participe à la transduction du signal.",
      "Vrai. Son métabolisme peut libérer du céramide signal.",
      "Faux. Elle est importante dans le tissu nerveux."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la sclérose en plaques :",
    "choices": [
      "C’est une maladie de démyélinisation.",
      "Une atteinte de la myéline perturbe la conduction nerveuse.",
      "La fiche relie sphingomyéline et activité neuronale.",
      "C’est une maladie du stockage des triglycérides."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La richesse de la myéline en sphingomyéline explique l’intérêt neurologique.",
    "choiceExplanations": [
      "Vrai. C’est une maladie de démyélinisation.",
      "Vrai. Une atteinte de la myéline perturbe la conduction nerveuse.",
      "Vrai. La fiche relie sphingomyéline et activité neuronale.",
      "Faux. C’est une maladie démyélinisante."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le caractère amphiphile de la sphingomyéline :",
    "choices": [
      "La molécule est amphiphile.",
      "Elle est dépourvue de groupe polaire.",
      "La tête phosphocholine porte des charges.",
      "La tête interagit avec le milieu aqueux."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La sphingomyéline possède une tête polaire et deux longues portions hydrophobes.",
    "choiceExplanations": [
      "Vrai. La molécule est amphiphile.",
      "Faux. Elle contient une tête phosphatée.",
      "Vrai. La tête phosphocholine porte des charges.",
      "Vrai. La tête interagit avec le milieu aqueux."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le céramide fréquent de la sphingomyéline :",
    "choices": [
      "Le céramide forme la base hydrophobe.",
      "L’acide lignocérique est 24:0.",
      "La fiche cite souvent sphingosine et acide lignocérique.",
      "Il est noté 4:0."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La sphingomyéline peut contenir un céramide à acide lignocérique.",
    "choiceExplanations": [
      "Vrai. Le céramide forme la base hydrophobe.",
      "Vrai. L’acide lignocérique est 24:0.",
      "Vrai. La fiche cite souvent sphingosine et acide lignocérique.",
      "Faux. Il est noté 24:0."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la comparaison sphingomyéline-glycérophospholipide :",
    "choices": [
      "Les glycérophospholipides dérivent du glycérol.",
      "Les deux peuvent porter une tête phosphocholine.",
      "Les deux sont amphiphiles et membranaires.",
      "Ils sont totalement identiques."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Ils partagent une tête phosphocholine mais diffèrent par le squelette.",
    "choiceExplanations": [
      "Vrai. Les glycérophospholipides dérivent du glycérol.",
      "Vrai. Les deux peuvent porter une tête phosphocholine.",
      "Vrai. Les deux sont amphiphiles et membranaires.",
      "Faux. Ils diffèrent par le squelette et les liaisons."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "family-tree"
    }
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les phosphosphingolipides, quelles propositions sont exactes ?",
    "choices": [
      "Ils dérivent d’un céramide.",
      "Ils dérivent exclusivement du glycérol.",
      "Ils peuvent contenir un alcool aminé.",
      "La tête se fixe sur l’amine C2."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les phosphosphingolipides ajoutent une tête phosphatée au céramide.",
    "choiceExplanations": [
      "Vrai. Ils dérivent d’un céramide.",
      "Faux. Ils dérivent du céramide.",
      "Vrai. Ils peuvent contenir un alcool aminé.",
      "Faux. Elle se fixe sur l’alcool C1."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la composition de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "Elle est un triacylglycérol.",
      "Elle ne contient aucune sphingosine.",
      "Elle associe céramide et acide phosphorique.",
      "La tête est polaire."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La sphingomyéline associe céramide, phosphate et alcool aminé.",
    "choiceExplanations": [
      "Faux. C’est un phosphosphingolipide.",
      "Faux. Le céramide en contient une.",
      "Vrai. Elle associe céramide et acide phosphorique.",
      "Vrai. La tête est polaire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’abondance de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "Elle est un composant membranaire.",
      "Elle est une enzyme.",
      "Elle est spécifique du tissu adipeux.",
      "Elle est le phosphosphingolipide majeur."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La sphingomyéline est le sphingolipide phosphaté majeur.",
    "choiceExplanations": [
      "Vrai. Elle est un composant membranaire.",
      "Faux. C’est un lipide.",
      "Faux. Elle est très présente dans le tissu nerveux.",
      "Vrai. Elle est le phosphosphingolipide majeur."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la dégradation de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "Un défaut de dégradation peut provoquer une accumulation.",
      "La dégradation n’a aucun lien avec les accumulations.",
      "Elle produit glycérol et trois acides gras.",
      "La réaction appartient au catabolisme."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La sphingomyélinase libère un céramide.",
    "choiceExplanations": [
      "Vrai. Un défaut de dégradation peut provoquer une accumulation.",
      "Faux. Les déficits enzymatiques peuvent en provoquer.",
      "Faux. Elle produit notamment un céramide.",
      "Vrai. La réaction appartient au catabolisme."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "catabolism"
    }
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les localisations de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "Elle n’existe que dans le foie.",
      "Elle ne participe jamais à la myéline.",
      "Elle est présente dans la matière grise.",
      "Elle est présente dans la cornée."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La sphingomyéline est abondante dans le cerveau, la myéline et la cornée.",
    "choiceExplanations": [
      "Faux. Elle a plusieurs localisations.",
      "Faux. Elle en est un constituant.",
      "Vrai. Elle est présente dans la matière grise.",
      "Vrai. Elle est présente dans la cornée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les rôles fonctionnels de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "Elle a un rôle structural membranaire.",
      "Elle n’a aucune fonction neuronale.",
      "Son métabolisme peut libérer du céramide signal.",
      "Elle ne peut jamais être hydrolysée."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La sphingomyéline relie structure de la myéline et signalisation.",
    "choiceExplanations": [
      "Vrai. Elle a un rôle structural membranaire.",
      "Faux. Elle est importante dans le tissu nerveux.",
      "Vrai. Son métabolisme peut libérer du céramide signal.",
      "Faux. La sphingomyélinase l’hydrolyse."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la sclérose en plaques, quelles propositions sont exactes ?",
    "choices": [
      "C’est une maladie du stockage des triglycérides.",
      "La myéline est dépourvue de lipides.",
      "Une atteinte de la myéline perturbe la conduction nerveuse.",
      "La fiche relie sphingomyéline et activité neuronale."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La richesse de la myéline en sphingomyéline explique l’intérêt neurologique.",
    "choiceExplanations": [
      "Faux. C’est une maladie démyélinisante.",
      "Faux. Elle est riche en lipides.",
      "Vrai. Une atteinte de la myéline perturbe la conduction nerveuse.",
      "Vrai. La fiche relie sphingomyéline et activité neuronale."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le caractère amphiphile de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "La tête phosphocholine porte des charges.",
      "Le phosphate est la partie la plus hydrophobe.",
      "Ses chaînes hydrophobes sont uniquement des oses.",
      "La tête interagit avec le milieu aqueux."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La sphingomyéline possède une tête polaire et deux longues portions hydrophobes.",
    "choiceExplanations": [
      "Vrai. La tête phosphocholine porte des charges.",
      "Faux. Il participe à la tête polaire.",
      "Faux. Elles proviennent de sphingosine et acide gras.",
      "Vrai. La tête interagit avec le milieu aqueux."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le céramide fréquent de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "L’acide gras est lié par amide.",
      "Le céramide est toute la tête hydrophile.",
      "L’acide lignocérique est 24:0.",
      "Il est fixé par liaison osidique."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La sphingomyéline peut contenir un céramide à acide lignocérique.",
    "choiceExplanations": [
      "Vrai. L’acide gras est lié par amide.",
      "Faux. Il constitue surtout la partie hydrophobe.",
      "Vrai. L’acide lignocérique est 24:0.",
      "Faux. Il est fixé par amide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la comparaison sphingomyéline-glycérophospholipide, quelles propositions sont exactes ?",
    "choices": [
      "Les glycérophospholipides dérivent du glycérol.",
      "Ils sont totalement identiques.",
      "Les deux ont nécessairement un squelette glycérol.",
      "Les deux peuvent porter une tête phosphocholine."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Ils partagent une tête phosphocholine mais diffèrent par le squelette.",
    "choiceExplanations": [
      "Vrai. Les glycérophospholipides dérivent du glycérol.",
      "Faux. Ils diffèrent par le squelette et les liaisons.",
      "Faux. La sphingomyéline a un squelette sphingosine.",
      "Vrai. Les deux peuvent porter une tête phosphocholine."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "family-tree"
    }
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les phosphosphingolipides, quelles propositions sont exactes ?",
    "choices": [
      "La tête se fixe sur l’amine C2.",
      "La tête se fixe sur l’alcool primaire C1.",
      "Ils peuvent contenir un alcool aminé.",
      "Ils sont des polysaccharides."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les phosphosphingolipides ajoutent une tête phosphatée au céramide.",
    "choiceExplanations": [
      "Faux. Elle se fixe sur l’alcool C1.",
      "Vrai. La tête se fixe sur l’alcool primaire C1.",
      "Vrai. Ils peuvent contenir un alcool aminé.",
      "Faux. Ce sont des lipides."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la composition de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "Elle ne contient aucune sphingosine.",
      "Elle contient obligatoirement un oligosaccharide en C1.",
      "Elle porte généralement choline ou éthanolamine.",
      "Elle associe céramide et acide phosphorique."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La sphingomyéline associe céramide, phosphate et alcool aminé.",
    "choiceExplanations": [
      "Faux. Le céramide en contient une.",
      "Faux. Elle porte une tête phosphatée.",
      "Vrai. Elle porte généralement choline ou éthanolamine.",
      "Vrai. Elle associe céramide et acide phosphorique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’abondance de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "Elle est une enzyme.",
      "Elle est importante dans le tissu nerveux.",
      "Elle est spécifique du tissu adipeux.",
      "Elle est le phosphosphingolipide majeur."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La sphingomyéline est le sphingolipide phosphaté majeur.",
    "choiceExplanations": [
      "Faux. C’est un lipide.",
      "Vrai. Elle est importante dans le tissu nerveux.",
      "Faux. Elle est très présente dans le tissu nerveux.",
      "Vrai. Elle est le phosphosphingolipide majeur."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la dégradation de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "La réaction appartient au catabolisme.",
      "Un défaut de dégradation peut provoquer une accumulation.",
      "Elle produit glycérol et trois acides gras.",
      "La sphingomyéline est indégradable."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La sphingomyélinase libère un céramide.",
    "choiceExplanations": [
      "Vrai. La réaction appartient au catabolisme.",
      "Vrai. Un défaut de dégradation peut provoquer une accumulation.",
      "Faux. Elle produit notamment un céramide.",
      "Faux. Elle est dégradée enzymatiquement."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "catabolism"
    }
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les localisations de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "Elle est absente du cerveau.",
      "Elle participe à la gaine de myéline.",
      "Elle n’existe que dans le foie.",
      "Elle est présente dans la cornée."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La sphingomyéline est abondante dans le cerveau, la myéline et la cornée.",
    "choiceExplanations": [
      "Faux. Elle est présente dans les tissus nerveux.",
      "Vrai. Elle participe à la gaine de myéline.",
      "Faux. Elle a plusieurs localisations.",
      "Vrai. Elle est présente dans la cornée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les rôles fonctionnels de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "Elle ne peut jamais être hydrolysée.",
      "Elle n’a aucune fonction neuronale.",
      "Elle participe à la transduction du signal.",
      "Elle contribue à l’activité neuronale."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La sphingomyéline relie structure de la myéline et signalisation.",
    "choiceExplanations": [
      "Faux. La sphingomyélinase l’hydrolyse.",
      "Faux. Elle est importante dans le tissu nerveux.",
      "Vrai. Elle participe à la transduction du signal.",
      "Vrai. Elle contribue à l’activité neuronale."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une sclérose en plaques. Quelles propositions sont exactes ?",
    "choices": [
      "C’est une maladie du stockage des triglycérides.",
      "C’est une maladie de démyélinisation.",
      "La myéline contient des sphingomyélines.",
      "La démyélinisation améliore la conduction."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La richesse de la myéline en sphingomyéline explique l’intérêt neurologique.",
    "choiceExplanations": [
      "Faux. C’est une maladie démyélinisante.",
      "Vrai. C’est une maladie de démyélinisation.",
      "Vrai. La myéline contient des sphingomyélines.",
      "Faux. Elle la perturbe."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 58,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le caractère amphiphile de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "La tête interagit avec le milieu aqueux.",
      "Les longues chaînes sont hydrophobes.",
      "Ses chaînes hydrophobes sont uniquement des oses.",
      "Elle est soluble comme le glucose."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La sphingomyéline possède une tête polaire et deux longues portions hydrophobes.",
    "choiceExplanations": [
      "Vrai. La tête interagit avec le milieu aqueux.",
      "Vrai. Les longues chaînes sont hydrophobes.",
      "Faux. Elles proviennent de sphingosine et acide gras.",
      "Faux. Elle s’insère surtout dans les membranes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 59,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le céramide fréquent de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "Il est noté 4:0.",
      "Il est fixé par liaison osidique.",
      "Le céramide forme la base hydrophobe.",
      "La fiche cite souvent sphingosine et acide lignocérique."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La sphingomyéline peut contenir un céramide à acide lignocérique.",
    "choiceExplanations": [
      "Faux. Il est noté 24:0.",
      "Faux. Il est fixé par amide.",
      "Vrai. Le céramide forme la base hydrophobe.",
      "Vrai. La fiche cite souvent sphingosine et acide lignocérique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la comparaison sphingomyéline-glycérophospholipide, quelles propositions sont exactes ?",
    "choices": [
      "Ils sont totalement identiques.",
      "Les deux sont amphiphiles et membranaires.",
      "Les deux peuvent porter une tête phosphocholine.",
      "La sphingomyéline porte trois acides gras estérifiés."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Ils partagent une tête phosphocholine mais diffèrent par le squelette.",
    "choiceExplanations": [
      "Faux. Ils diffèrent par le squelette et les liaisons.",
      "Vrai. Les deux sont amphiphiles et membranaires.",
      "Vrai. Les deux peuvent porter une tête phosphocholine.",
      "Faux. Elle porte un acide gras amidifié."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "family-tree"
    }
  }
];
