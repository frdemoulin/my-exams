import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "61": [
    "l’acide phosphatidique"
  ],
  "62": [
    "le rôle de l’acide phosphatidique"
  ],
  "63": [
    "la structure générale d’un glycérophospholipide"
  ],
  "64": [
    "les fonctions acides du phosphate"
  ],
  "65": [
    "les lysophospholipides"
  ],
  "66": [
    "la phosphatidylsérine"
  ],
  "67": [
    "la phosphatidyléthanolamine"
  ],
  "68": [
    "la phosphatidylcholine"
  ],
  "69": [
    "les phosphatidylglycérols"
  ],
  "70": [
    "les phosphatidylinositols"
  ],
  "71": [
    "l’acide phosphatidique"
  ],
  "72": [
    "le rôle de l’acide phosphatidique"
  ],
  "73": [
    "la structure générale d’un glycérophospholipide"
  ],
  "74": [
    "les fonctions acides du phosphate"
  ],
  "75": [
    "les lysophospholipides"
  ],
  "76": [
    "la phosphatidylsérine"
  ],
  "77": [
    "la phosphatidyléthanolamine"
  ],
  "78": [
    "la phosphatidylcholine"
  ],
  "79": [
    "les phosphatidylglycérols"
  ],
  "80": [
    "les phosphatidylinositols"
  ],
  "81": [
    "l’acide phosphatidique"
  ],
  "82": [
    "le rôle de l’acide phosphatidique"
  ],
  "83": [
    "la structure générale d’un glycérophospholipide"
  ],
  "84": [
    "les fonctions acides du phosphate"
  ],
  "85": [
    "les lysophospholipides"
  ],
  "86": [
    "la phosphatidylsérine"
  ],
  "87": [
    "la phosphatidyléthanolamine"
  ],
  "88": [
    "la phosphatidylcholine"
  ],
  "89": [
    "les phosphatidylglycérols"
  ],
  "90": [
    "les phosphatidylinositols"
  ]
};

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "phosphatidic-phospholipids-fondamentaux",
    "title": "Acide phosphatidique",
    "description": "Acquérir les notions fondamentales de la section.",
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
    "slug": "phosphatidic-phospholipids-applications",
    "title": "Têtes polaires et séries",
    "description": "Appliquer et comparer les notions de la section.",
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
    "slug": "phosphatidic-phospholipids-raisonnement",
    "title": "Raisonnement sur les phospholipides",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 3,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères structuraux",
        "sharedStatement": "Les questions suivantes mobilisent les principaux repères structuraux de la section.",
        "questionOrders": [
          81,
          82,
          83
        ]
      },
      {
        "type": "GROUP",
        "title": "Propriétés et fonctions",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          84,
          85,
          86
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques et médicales",
        "sharedStatement": "Les questions suivantes replacent les notions dans leur contexte biologique ou médical.",
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
    "question": "À propos de l’acide phosphatidique :",
    "choices": [
      "Il est un intermédiaire important de synthèse.",
      "Il contient un glycérol.",
      "Un acide phosphorique estérifie C3.",
      "Le phosphate est fixé en C2."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "L’acide phosphatidique associe glycérol, deux acides gras et phosphate.",
    "choiceExplanations": [
      "Vrai. Il est un intermédiaire important de synthèse.",
      "Vrai. Il contient un glycérol.",
      "Vrai. Un acide phosphorique estérifie C3.",
      "Faux. Il est fixé en C3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phosphatidic-acid"
    }
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le rôle de l’acide phosphatidique :",
    "choices": [
      "Il constitue un carrefour métabolique.",
      "Il participe à la synthèse des triacylglycérols.",
      "Il participe à la synthèse des phospholipides.",
      "Il est uniquement un produit terminal."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "L’acide phosphatidique est un précurseur commun de plusieurs lipides.",
    "choiceExplanations": [
      "Vrai. Il constitue un carrefour métabolique.",
      "Vrai. Il participe à la synthèse des triacylglycérols.",
      "Vrai. Il participe à la synthèse des phospholipides.",
      "Faux. Il est un intermédiaire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phosphatidic-acid"
    }
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la structure générale d’un glycérophospholipide :",
    "choices": [
      "La nature de X détermine la série.",
      "La série dépend seulement de la longueur des acides gras.",
      "Un alcool X est fixé au phosphate.",
      "Il comporte deux chaînes d’acides gras."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les glycérophospholipides ajoutent un alcool polaire à l’acide phosphatidique.",
    "choiceExplanations": [
      "Vrai. La nature de X détermine la série.",
      "Faux. Elle dépend de l’alcool polaire.",
      "Vrai. Un alcool X est fixé au phosphate.",
      "Vrai. Il comporte deux chaînes d’acides gras."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipid-general"
    }
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les fonctions acides du phosphate :",
    "choices": [
      "Le phosphate participe à la tête hydrophile.",
      "Aucun alcool ne peut se fixer au phosphate.",
      "Ils ne sont pas des fonctions alcool.",
      "Un alcool X peut estérifier une fonction acide libre."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le phosphate porte des fonctions acides estérifiables.",
    "choiceExplanations": [
      "Vrai. Le phosphate participe à la tête hydrophile.",
      "Faux. Un alcool X peut l’estérifier.",
      "Vrai. Ils ne sont pas des fonctions alcool.",
      "Vrai. Un alcool X peut estérifier une fonction acide libre."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipid-general"
    }
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les lysophospholipides :",
    "choices": [
      "Il conserve une chaîne acyle et une tête polaire.",
      "Un lysophospholipide manque d’un acide gras.",
      "Il peut dériver d’une hydrolyse enzymatique.",
      "Il porte toujours trois acides gras."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La perte de l’acide gras C2 forme un lysophospholipide.",
    "choiceExplanations": [
      "Vrai. Il conserve une chaîne acyle et une tête polaire.",
      "Vrai. Un lysophospholipide manque d’un acide gras.",
      "Vrai. Il peut dériver d’une hydrolyse enzymatique.",
      "Faux. Il n’en conserve qu’un."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la phosphatidylsérine :",
    "choices": [
      "Elle se fixe par sa fonction alcool.",
      "La sérine est dépourvue d’OH.",
      "Elle donne les phosphatidylsérines.",
      "La série est abrégée PS."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La sérine constitue la tête polaire des PS.",
    "choiceExplanations": [
      "Vrai. Elle se fixe par sa fonction alcool.",
      "Faux. Elle possède un OH.",
      "Vrai. Elle donne les phosphatidylsérines.",
      "Vrai. La série est abrégée PS."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la phosphatidyléthanolamine :",
    "choices": [
      "Elle est dépourvue d’azote.",
      "Elle possède une fonction alcool.",
      "Elle donne les phosphatidyléthanolamines.",
      "L’éthanolamine dérive de la décarboxylation de la sérine."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’éthanolamine constitue la tête des PE.",
    "choiceExplanations": [
      "Faux. Elle possède une amine.",
      "Vrai. Elle possède une fonction alcool.",
      "Vrai. Elle donne les phosphatidyléthanolamines.",
      "Vrai. L’éthanolamine dérive de la décarboxylation de la sérine."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la phosphatidylcholine :",
    "choices": [
      "La choline ne contient aucun azote.",
      "La choline est un dérivé triméthylé de l’éthanolamine.",
      "Elle donne les phosphatidylcholines.",
      "La série est abrégée PC."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La choline forme les phosphatidylcholines ou lécithines.",
    "choiceExplanations": [
      "Faux. Elle contient un ammonium quaternaire.",
      "Vrai. La choline est un dérivé triméthylé de l’éthanolamine.",
      "Vrai. Elle donne les phosphatidylcholines.",
      "Vrai. La série est abrégée PC."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les phosphatidylglycérols :",
    "choices": [
      "Le glycérol peut servir de tête polaire.",
      "Le glycérol donne exclusivement la sphingomyéline.",
      "La série est abrégée PG.",
      "La tête reste reliée par le phosphate."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le glycérol peut constituer la tête polaire des PG.",
    "choiceExplanations": [
      "Vrai. Le glycérol peut servir de tête polaire.",
      "Faux. Il donne les PG dans ce contexte.",
      "Vrai. La série est abrégée PG.",
      "Vrai. La tête reste reliée par le phosphate."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les phosphatidylinositols :",
    "choices": [
      "Les PI jouent un rôle majeur dans la signalisation.",
      "L’inositol est cyclique et comporte six carbones.",
      "Il possède six fonctions alcool.",
      "Les PI sont une réserve majoritaire du tissu adipeux."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les phosphatidylinositols sont minoritaires mais essentiels à la signalisation.",
    "choiceExplanations": [
      "Vrai. Les PI jouent un rôle majeur dans la signalisation.",
      "Vrai. L’inositol est cyclique et comporte six carbones.",
      "Vrai. Il possède six fonctions alcool.",
      "Faux. Ce sont des composants membranaires mineurs mais fonctionnels."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phosphatidylinositol"
    }
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’acide phosphatidique, quelles propositions sont exactes ?",
    "choices": [
      "Un acide phosphorique estérifie C3.",
      "Le phosphate est fixé en C2.",
      "Il contient trois acides gras et aucun phosphate.",
      "Il est un intermédiaire important de synthèse."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "L’acide phosphatidique associe glycérol, deux acides gras et phosphate.",
    "choiceExplanations": [
      "Vrai. Un acide phosphorique estérifie C3.",
      "Faux. Il est fixé en C3.",
      "Faux. Il contient deux acides gras et un phosphate.",
      "Vrai. Il est un intermédiaire important de synthèse."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phosphatidic-acid"
    }
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le rôle de l’acide phosphatidique, quelles propositions sont exactes ?",
    "choices": [
      "Il constitue un carrefour métabolique.",
      "Il est uniquement un produit terminal.",
      "Il participe à la synthèse des phospholipides.",
      "Il conduit uniquement aux protéines."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’acide phosphatidique est un précurseur commun de plusieurs lipides.",
    "choiceExplanations": [
      "Vrai. Il constitue un carrefour métabolique.",
      "Faux. Il est un intermédiaire.",
      "Vrai. Il participe à la synthèse des phospholipides.",
      "Faux. Il conduit à plusieurs lipides."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phosphatidic-acid"
    }
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure générale d’un glycérophospholipide, quelles propositions sont exactes ?",
    "choices": [
      "La tête ne contient jamais de phosphate.",
      "Il comporte un groupement phosphate.",
      "X est fixé directement au C2 sans phosphate.",
      "La nature de X détermine la série."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les glycérophospholipides ajoutent un alcool polaire à l’acide phosphatidique.",
    "choiceExplanations": [
      "Faux. Le phosphate est central.",
      "Vrai. Il comporte un groupement phosphate.",
      "Faux. X est lié au phosphate.",
      "Vrai. La nature de X détermine la série."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipid-general"
    }
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les fonctions acides du phosphate, quelles propositions sont exactes ?",
    "choices": [
      "Tous les OH du phosphate sont des alcools.",
      "Un alcool X peut estérifier une fonction acide libre.",
      "Le phosphate est absent des phospholipides.",
      "Ils ne sont pas des fonctions alcool."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le phosphate porte des fonctions acides estérifiables.",
    "choiceExplanations": [
      "Faux. Ce sont des fonctions acides.",
      "Vrai. Un alcool X peut estérifier une fonction acide libre.",
      "Faux. Il les caractérise.",
      "Vrai. Ils ne sont pas des fonctions alcool."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipid-general"
    }
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les lysophospholipides, quelles propositions sont exactes ?",
    "choices": [
      "Il conserve une chaîne acyle et une tête polaire.",
      "Dans la fiche, l’acide gras manquant est celui du C2.",
      "Il ne peut pas être produit par une phospholipase.",
      "Il porte toujours trois acides gras."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La perte de l’acide gras C2 forme un lysophospholipide.",
    "choiceExplanations": [
      "Vrai. Il conserve une chaîne acyle et une tête polaire.",
      "Vrai. Dans la fiche, l’acide gras manquant est celui du C2.",
      "Faux. La PLA2 peut le produire.",
      "Faux. Il n’en conserve qu’un."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la phosphatidylsérine, quelles propositions sont exactes ?",
    "choices": [
      "La sérine donne les PC.",
      "Elle se fixe par sa fonction alcool.",
      "Elle se fixe uniquement par son carboxyle.",
      "Elle donne les phosphatidylsérines."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La sérine constitue la tête polaire des PS.",
    "choiceExplanations": [
      "Faux. Elle donne les PS.",
      "Vrai. Elle se fixe par sa fonction alcool.",
      "Faux. La fixation se fait par l’alcool.",
      "Vrai. Elle donne les phosphatidylsérines."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la phosphatidyléthanolamine, quelles propositions sont exactes ?",
    "choices": [
      "Elle donne les PI.",
      "PE signifie phosphatidyléthylène.",
      "Elle possède une fonction alcool.",
      "La série est abrégée PE."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’éthanolamine constitue la tête des PE.",
    "choiceExplanations": [
      "Faux. Elle donne les PE.",
      "Faux. PE signifie phosphatidyléthanolamine.",
      "Vrai. Elle possède une fonction alcool.",
      "Vrai. La série est abrégée PE."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la phosphatidylcholine, quelles propositions sont exactes ?",
    "choices": [
      "La série est abrégée PC.",
      "Les lécithines sont des triglycérides.",
      "Les PC sont aussi appelées lécithines.",
      "La choline ne contient aucun azote."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La choline forme les phosphatidylcholines ou lécithines.",
    "choiceExplanations": [
      "Vrai. La série est abrégée PC.",
      "Faux. Ce sont des PC.",
      "Vrai. Les PC sont aussi appelées lécithines.",
      "Faux. Elle contient un ammonium quaternaire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les phosphatidylglycérols, quelles propositions sont exactes ?",
    "choices": [
      "Le glycérol ne possède aucune fonction alcool.",
      "Il donne les phosphatidylglycérols.",
      "PG signifie prostaglandine dans cette classification.",
      "Le glycérol peut servir de tête polaire."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le glycérol peut constituer la tête polaire des PG.",
    "choiceExplanations": [
      "Faux. Il en possède trois.",
      "Vrai. Il donne les phosphatidylglycérols.",
      "Faux. Ici PG signifie phosphatidylglycérol.",
      "Vrai. Le glycérol peut servir de tête polaire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les phosphatidylinositols, quelles propositions sont exactes ?",
    "choices": [
      "L’inositol est cyclique et comporte six carbones.",
      "La liaison utilise obligatoirement C6.",
      "Les PI sont une réserve majoritaire du tissu adipeux.",
      "Il possède six fonctions alcool."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les phosphatidylinositols sont minoritaires mais essentiels à la signalisation.",
    "choiceExplanations": [
      "Vrai. L’inositol est cyclique et comporte six carbones.",
      "Faux. La fiche indique C1.",
      "Faux. Ce sont des composants membranaires mineurs mais fonctionnels.",
      "Vrai. Il possède six fonctions alcool."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phosphatidylinositol"
    }
  },
  {
    "order": 81,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’acide phosphatidique, quelles propositions sont exactes ?",
    "choices": [
      "Il contient trois acides gras et aucun phosphate.",
      "Le phosphate est fixé en C2.",
      "Il contient un glycérol.",
      "Un acide phosphorique estérifie C3."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’acide phosphatidique associe glycérol, deux acides gras et phosphate.",
    "choiceExplanations": [
      "Faux. Il contient deux acides gras et un phosphate.",
      "Faux. Il est fixé en C3.",
      "Vrai. Il contient un glycérol.",
      "Vrai. Un acide phosphorique estérifie C3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phosphatidic-acid"
    }
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le rôle de l’acide phosphatidique, quelles propositions sont exactes ?",
    "choices": [
      "Il participe à la synthèse des diacylglycérols.",
      "Il constitue un carrefour métabolique.",
      "Il est dépourvu de phosphate.",
      "Il ne participe à aucune synthèse lipidique."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "L’acide phosphatidique est un précurseur commun de plusieurs lipides.",
    "choiceExplanations": [
      "Vrai. Il participe à la synthèse des diacylglycérols.",
      "Vrai. Il constitue un carrefour métabolique.",
      "Faux. Il contient un acide phosphorique.",
      "Faux. Il est un précurseur central."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phosphatidic-acid"
    }
  },
  {
    "order": 83,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure générale d’un glycérophospholipide, quelles propositions sont exactes ?",
    "choices": [
      "X est fixé directement au C2 sans phosphate.",
      "La série dépend seulement de la longueur des acides gras.",
      "Il comporte un groupement phosphate.",
      "Il comporte deux chaînes d’acides gras."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les glycérophospholipides ajoutent un alcool polaire à l’acide phosphatidique.",
    "choiceExplanations": [
      "Faux. X est lié au phosphate.",
      "Faux. Elle dépend de l’alcool polaire.",
      "Vrai. Il comporte un groupement phosphate.",
      "Vrai. Il comporte deux chaînes d’acides gras."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipid-general"
    }
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les fonctions acides du phosphate, quelles propositions sont exactes ?",
    "choices": [
      "Le phosphate est absent des phospholipides.",
      "Le phosphate participe à la tête hydrophile.",
      "Le phosphate est la partie la plus hydrophobe.",
      "Les OH de l’acide phosphorique sont des fonctions acides."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le phosphate porte des fonctions acides estérifiables.",
    "choiceExplanations": [
      "Faux. Il les caractérise.",
      "Vrai. Le phosphate participe à la tête hydrophile.",
      "Faux. Il contribue à la tête hydrophile.",
      "Vrai. Les OH de l’acide phosphorique sont des fonctions acides."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipid-general"
    }
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les lysophospholipides, quelles propositions sont exactes ?",
    "choices": [
      "Il porte toujours trois acides gras.",
      "Un lysophospholipide manque d’un acide gras.",
      "Dans la fiche, l’acide gras manquant est celui du C2.",
      "Il manque nécessairement le phosphate."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La perte de l’acide gras C2 forme un lysophospholipide.",
    "choiceExplanations": [
      "Faux. Il n’en conserve qu’un.",
      "Vrai. Un lysophospholipide manque d’un acide gras.",
      "Vrai. Dans la fiche, l’acide gras manquant est celui du C2.",
      "Faux. Il manque l’acide gras C2."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la phosphatidylsérine, quelles propositions sont exactes ?",
    "choices": [
      "La série est abrégée PS.",
      "Elle donne les phosphatidylsérines.",
      "Elle se fixe uniquement par son carboxyle.",
      "La sérine est dépourvue d’OH."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La sérine constitue la tête polaire des PS.",
    "choiceExplanations": [
      "Vrai. La série est abrégée PS.",
      "Vrai. Elle donne les phosphatidylsérines.",
      "Faux. La fixation se fait par l’alcool.",
      "Faux. Elle possède un OH."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la phosphatidyléthanolamine, quelles propositions sont exactes ?",
    "choices": [
      "Elle est dépourvue d’azote.",
      "La série est abrégée PE.",
      "Elle possède une fonction alcool.",
      "Elle donne les PI."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’éthanolamine constitue la tête des PE.",
    "choiceExplanations": [
      "Faux. Elle possède une amine.",
      "Vrai. La série est abrégée PE.",
      "Vrai. Elle possède une fonction alcool.",
      "Faux. Elle donne les PE."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la phosphatidylcholine, quelles propositions sont exactes ?",
    "choices": [
      "La choline ne contient aucun azote.",
      "Les lécithines sont des triglycérides.",
      "La choline est un dérivé triméthylé de l’éthanolamine.",
      "Les PC sont aussi appelées lécithines."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La choline forme les phosphatidylcholines ou lécithines.",
    "choiceExplanations": [
      "Faux. Elle contient un ammonium quaternaire.",
      "Faux. Ce sont des PC.",
      "Vrai. La choline est un dérivé triméthylé de l’éthanolamine.",
      "Vrai. Les PC sont aussi appelées lécithines."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les phosphatidylglycérols, quelles propositions sont exactes ?",
    "choices": [
      "Le glycérol peut servir de tête polaire.",
      "Le glycérol donne exclusivement la sphingomyéline.",
      "Il donne les phosphatidylglycérols.",
      "Le phosphate disparaît lors de la formation."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le glycérol peut constituer la tête polaire des PG.",
    "choiceExplanations": [
      "Vrai. Le glycérol peut servir de tête polaire.",
      "Faux. Il donne les PG dans ce contexte.",
      "Vrai. Il donne les phosphatidylglycérols.",
      "Faux. Il relie la tête au squelette."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les phosphatidylinositols, quelles propositions sont exactes ?",
    "choices": [
      "L’inositol est linéaire à deux carbones.",
      "La liaison utilise obligatoirement C6.",
      "Il possède six fonctions alcool.",
      "Les PI jouent un rôle majeur dans la signalisation."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les phosphatidylinositols sont minoritaires mais essentiels à la signalisation.",
    "choiceExplanations": [
      "Faux. Il est cyclique à six carbones.",
      "Faux. La fiche indique C1.",
      "Vrai. Il possède six fonctions alcool.",
      "Vrai. Les PI jouent un rôle majeur dans la signalisation."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phosphatidylinositol"
    }
  }
];
