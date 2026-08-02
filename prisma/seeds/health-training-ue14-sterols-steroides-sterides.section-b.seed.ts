import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "31": [
    "la structure du cholestérol"
  ],
  "32": [
    "les substituants du cholestérol"
  ],
  "33": [
    "le cholestérol libre"
  ],
  "34": [
    "le cholestérol estérifié"
  ],
  "35": [
    "les rôles membranaires du cholestérol"
  ],
  "36": [
    "les rôles de précurseur du cholestérol"
  ],
  "37": [
    "le transport du cholestérol"
  ],
  "38": [
    "les acides biliaires"
  ],
  "39": [
    "la vitamine D"
  ],
  "40": [
    "la comparaison acides biliaires-vitamine D"
  ],
  "41": [
    "la structure du cholestérol"
  ],
  "42": [
    "les substituants du cholestérol"
  ],
  "43": [
    "le cholestérol libre"
  ],
  "44": [
    "le cholestérol estérifié"
  ],
  "45": [
    "les rôles membranaires du cholestérol"
  ],
  "46": [
    "les rôles de précurseur du cholestérol"
  ],
  "47": [
    "le transport du cholestérol"
  ],
  "48": [
    "les acides biliaires"
  ],
  "49": [
    "la vitamine D"
  ],
  "50": [
    "la comparaison acides biliaires-vitamine D"
  ],
  "51": [
    "la structure du cholestérol"
  ],
  "52": [
    "les substituants du cholestérol"
  ],
  "53": [
    "le cholestérol libre"
  ],
  "54": [
    "le cholestérol estérifié"
  ],
  "55": [
    "les rôles membranaires du cholestérol"
  ],
  "56": [
    "les rôles de précurseur du cholestérol"
  ],
  "57": [
    "le transport du cholestérol"
  ],
  "58": [
    "les acides biliaires"
  ],
  "59": [
    "la vitamine D"
  ],
  "60": [
    "la comparaison acides biliaires-vitamine D"
  ]
};

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "cholesterol-derivatives-fondamentaux",
    "title": "Structure et formes du cholestérol",
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
    "slug": "cholesterol-derivatives-applications",
    "title": "Fonctions, transport et stockage",
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
    "slug": "cholesterol-derivatives-raisonnement",
    "title": "Dérivés digestifs et osseux",
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
    "question": "À propos de la structure du cholestérol :",
    "choices": [
      "Le cholestérol comporte 27 carbones.",
      "Il ne porte aucun OH.",
      "Il possède une double liaison C5-C6.",
      "Il possède quatre cycles A à D."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le cholestérol est un stérol C27 avec OH C3 et double liaison C5-C6.",
    "choiceExplanations": [
      "Vrai. Le cholestérol comporte 27 carbones.",
      "Faux. Il porte un OH C3.",
      "Vrai. Il possède une double liaison C5-C6.",
      "Vrai. Il possède quatre cycles A à D."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-structure"
    }
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les substituants du cholestérol :",
    "choices": [
      "Il ne possède aucune chaîne latérale.",
      "La fiche indique huit carbones asymétriques.",
      "Il porte des méthyles en C10 et C13.",
      "Il porte une chaîne de huit carbones en C17."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les méthyles et la chaîne C8 complètent le cholestérol C27.",
    "choiceExplanations": [
      "Faux. Il porte une chaîne C8 en C17.",
      "Vrai. La fiche indique huit carbones asymétriques.",
      "Vrai. Il porte des méthyles en C10 et C13.",
      "Vrai. Il porte une chaîne de huit carbones en C17."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-structure"
    }
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le cholestérol libre :",
    "choices": [
      "Il s’insère dans les membranes.",
      "Il est amphiphile.",
      "L’OH C3 constitue le pôle hydrophile.",
      "Il est totalement hydrosoluble."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le cholestérol libre est amphipathique.",
    "choiceExplanations": [
      "Vrai. Il s’insère dans les membranes.",
      "Vrai. Il est amphiphile.",
      "Vrai. L’OH C3 constitue le pôle hydrophile.",
      "Faux. Il reste majoritairement hydrophobe."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-forms"
    }
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le cholestérol estérifié :",
    "choices": [
      "Un acide gras est fixé sur l’OH C3.",
      "Elle conserve un OH libre C3.",
      "Elle est transportée dans les lipoprotéines.",
      "Elle sert au stockage."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’estérification masque l’OH et produit une forme hydrophobe.",
    "choiceExplanations": [
      "Vrai. Un acide gras est fixé sur l’OH C3.",
      "Faux. L’OH est estérifié.",
      "Vrai. Elle est transportée dans les lipoprotéines.",
      "Vrai. Elle sert au stockage."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-forms"
    }
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les rôles membranaires du cholestérol :",
    "choices": [
      "Il est un constituant des membranes.",
      "Il contrôle la fluidité.",
      "Son noyau rigide modifie l’organisation lipidique.",
      "Seule la forme estérifiée s’insère dans la bicouche."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le cholestérol module structure et fluidité membranaires.",
    "choiceExplanations": [
      "Vrai. Il est un constituant des membranes.",
      "Vrai. Il contrôle la fluidité.",
      "Vrai. Son noyau rigide modifie l’organisation lipidique.",
      "Faux. La forme libre amphiphile s’y insère."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-roles"
    }
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les rôles de précurseur du cholestérol :",
    "choices": [
      "Ses dérivés ont des fonctions endocrines et digestives.",
      "Il est précurseur des hormones stéroïdiennes.",
      "Il est précurseur des acides biliaires.",
      "Il ne donne aucun dérivé actif."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le cholestérol est un carrefour biosynthétique.",
    "choiceExplanations": [
      "Vrai. Ses dérivés ont des fonctions endocrines et digestives.",
      "Vrai. Il est précurseur des hormones stéroïdiennes.",
      "Vrai. Il est précurseur des acides biliaires.",
      "Faux. Il est un précurseur majeur."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-roles"
    }
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le transport du cholestérol :",
    "choices": [
      "Il est transporté dans le sang par des lipoprotéines.",
      "Les lipoprotéines ne contiennent aucun lipide.",
      "Les lipoprotéines transportent les lipides hydrophobes.",
      "LDL signifie low density lipoprotein."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les lipoprotéines assurent le transport sanguin du cholestérol.",
    "choiceExplanations": [
      "Vrai. Il est transporté dans le sang par des lipoprotéines.",
      "Faux. Elles transportent des lipides.",
      "Vrai. Les lipoprotéines transportent les lipides hydrophobes.",
      "Vrai. LDL signifie low density lipoprotein."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-transport"
    }
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides biliaires :",
    "choices": [
      "Ils sont produits par le foie.",
      "Ils possèdent obligatoirement un noyau cholestane C27.",
      "Ils possèdent un noyau cholane C24.",
      "Ils sont excrétés dans la bile."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les acides biliaires C24 facilitent la digestion des lipides.",
    "choiceExplanations": [
      "Vrai. Ils sont produits par le foie.",
      "Faux. La fiche indique cholane C24.",
      "Vrai. Ils possèdent un noyau cholane C24.",
      "Vrai. Ils sont excrétés dans la bile."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bile-vitd"
    }
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la vitamine D :",
    "choices": [
      "Elle participe à la minéralisation osseuse.",
      "Elle agit uniquement sur la peau.",
      "Elle favorise l’absorption du calcium.",
      "Elle favorise l’absorption du phosphore."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La vitamine D participe à l’homéostasie phosphocalcique.",
    "choiceExplanations": [
      "Vrai. Elle participe à la minéralisation osseuse.",
      "Faux. Elle intervient notamment dans intestin et rein.",
      "Vrai. Elle favorise l’absorption du calcium.",
      "Vrai. Elle favorise l’absorption du phosphore."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bile-vitd"
    }
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la comparaison acides biliaires-vitamine D :",
    "choices": [
      "Les acides biliaires participent à la digestion lipidique.",
      "Leur nombre de carbones diffère dans les noyaux décrits.",
      "Les acides biliaires minéralisent directement l’os.",
      "Les deux dérivent du cholestérol."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le cholestérol donne des dérivés digestifs et hormonaux.",
    "choiceExplanations": [
      "Vrai. Les acides biliaires participent à la digestion lipidique.",
      "Vrai. Leur nombre de carbones diffère dans les noyaux décrits.",
      "Faux. Ils facilitent surtout la digestion.",
      "Vrai. Les deux dérivent du cholestérol."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bile-vitd"
    }
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      "Il porte un OH en C3.",
      "Il possède une double liaison C5-C6.",
      "Il possède uniquement une double liaison C17-C20.",
      "Il comporte 18 carbones."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le cholestérol est un stérol C27 avec OH C3 et double liaison C5-C6.",
    "choiceExplanations": [
      "Vrai. Il porte un OH en C3.",
      "Vrai. Il possède une double liaison C5-C6.",
      "Faux. La fiche indique C5-C6.",
      "Faux. Il en comporte 27."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-structure"
    }
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les substituants du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      "La fiche indique huit carbones asymétriques.",
      "Il ne possède aucune chaîne latérale.",
      "Il ne possède aucun centre stéréogène.",
      "Il porte des méthyles en C10 et C13."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les méthyles et la chaîne C8 complètent le cholestérol C27.",
    "choiceExplanations": [
      "Vrai. La fiche indique huit carbones asymétriques.",
      "Faux. Il porte une chaîne C8 en C17.",
      "Faux. La fiche en indique huit.",
      "Vrai. Il porte des méthyles en C10 et C13."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-structure"
    }
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le cholestérol libre, quelles propositions sont exactes ?",
    "choices": [
      "L’OH C3 constitue le pôle hydrophile.",
      "Il ne peut pas interagir avec les phospholipides.",
      "Il est totalement hydrosoluble.",
      "Il est amphiphile."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le cholestérol libre est amphipathique.",
    "choiceExplanations": [
      "Vrai. L’OH C3 constitue le pôle hydrophile.",
      "Faux. Il s’insère entre eux.",
      "Faux. Il reste majoritairement hydrophobe.",
      "Vrai. Il est amphiphile."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-forms"
    }
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le cholestérol estérifié, quelles propositions sont exactes ?",
    "choices": [
      "Elle est transportée dans les lipoprotéines.",
      "Elle conserve un OH libre C3.",
      "Un acide gras est fixé sur l’OH C3.",
      "Elle est obtenue par ajout d’un ose."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’estérification masque l’OH et produit une forme hydrophobe.",
    "choiceExplanations": [
      "Vrai. Elle est transportée dans les lipoprotéines.",
      "Faux. L’OH est estérifié.",
      "Vrai. Un acide gras est fixé sur l’OH C3.",
      "Faux. Elle est obtenue par estérification avec un acide gras."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-forms"
    }
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les rôles membranaires du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      "Il est absent des membranes animales.",
      "Il n’interagit avec aucune protéine.",
      "Il est un constituant des membranes.",
      "Il contrôle la fluidité."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le cholestérol module structure et fluidité membranaires.",
    "choiceExplanations": [
      "Faux. Il en est un constituant important.",
      "Faux. Il en régule l’activité.",
      "Vrai. Il est un constituant des membranes.",
      "Vrai. Il contrôle la fluidité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-roles"
    }
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les rôles de précurseur du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      "Il est lié à la synthèse de vitamine D.",
      "Les acides biliaires dérivent seulement du glucose.",
      "Ses dérivés ont des fonctions endocrines et digestives.",
      "Il ne donne aucun dérivé actif."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le cholestérol est un carrefour biosynthétique.",
    "choiceExplanations": [
      "Vrai. Il est lié à la synthèse de vitamine D.",
      "Faux. Ils dérivent du cholestérol.",
      "Vrai. Ses dérivés ont des fonctions endocrines et digestives.",
      "Faux. Il est un précurseur majeur."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-roles"
    }
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le transport du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      "Les lipoprotéines ne contiennent aucun lipide.",
      "HDL signifie hormone digestive lipidique.",
      "LDL signifie low density lipoprotein.",
      "Les lipoprotéines transportent les lipides hydrophobes."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les lipoprotéines assurent le transport sanguin du cholestérol.",
    "choiceExplanations": [
      "Faux. Elles transportent des lipides.",
      "Faux. HDL signifie high density lipoprotein.",
      "Vrai. LDL signifie low density lipoprotein.",
      "Vrai. Les lipoprotéines transportent les lipides hydrophobes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-transport"
    }
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides biliaires, quelles propositions sont exactes ?",
    "choices": [
      "Ils participent à la digestion intestinale des lipides.",
      "Ils empêchent toute digestion lipidique.",
      "Ils sont excrétés dans la bile.",
      "Ils possèdent obligatoirement un noyau cholestane C27."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les acides biliaires C24 facilitent la digestion des lipides.",
    "choiceExplanations": [
      "Vrai. Ils participent à la digestion intestinale des lipides.",
      "Faux. Ils la facilitent.",
      "Vrai. Ils sont excrétés dans la bile.",
      "Faux. La fiche indique cholane C24."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bile-vitd"
    }
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la vitamine D, quelles propositions sont exactes ?",
    "choices": [
      "Elle favorise seulement sodium et potassium.",
      "Elle n’a aucun lien avec le cholestérol.",
      "Elle favorise l’absorption du phosphore.",
      "Elle participe à la minéralisation osseuse."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La vitamine D participe à l’homéostasie phosphocalcique.",
    "choiceExplanations": [
      "Faux. La fiche cite calcium et phosphore.",
      "Faux. Elle en est un dérivé.",
      "Vrai. Elle favorise l’absorption du phosphore.",
      "Vrai. Elle participe à la minéralisation osseuse."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bile-vitd"
    }
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la comparaison acides biliaires-vitamine D, quelles propositions sont exactes ?",
    "choices": [
      "La vitamine D participe à l’homéostasie phosphocalcique.",
      "Les deux ont exactement la même fonction.",
      "Les deux dérivent du cholestérol.",
      "Les acides biliaires minéralisent directement l’os."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le cholestérol donne des dérivés digestifs et hormonaux.",
    "choiceExplanations": [
      "Vrai. La vitamine D participe à l’homéostasie phosphocalcique.",
      "Faux. Leurs fonctions diffèrent.",
      "Vrai. Les deux dérivent du cholestérol.",
      "Faux. Ils facilitent surtout la digestion."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bile-vitd"
    }
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      "Il possède uniquement une double liaison C17-C20.",
      "Il ne porte aucun OH.",
      "Il possède une double liaison C5-C6.",
      "Le cholestérol comporte 27 carbones."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le cholestérol est un stérol C27 avec OH C3 et double liaison C5-C6.",
    "choiceExplanations": [
      "Faux. La fiche indique C5-C6.",
      "Faux. Il porte un OH C3.",
      "Vrai. Il possède une double liaison C5-C6.",
      "Vrai. Le cholestérol comporte 27 carbones."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-structure"
    }
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les substituants du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      "Les méthyles sont seulement sur C1 et C2.",
      "La chaîne latérale contribue au corps hydrophobe.",
      "La fiche indique huit carbones asymétriques.",
      "Il ne possède aucune chaîne latérale."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les méthyles et la chaîne C8 complètent le cholestérol C27.",
    "choiceExplanations": [
      "Faux. Ils sont sur C10 et C13.",
      "Vrai. La chaîne latérale contribue au corps hydrophobe.",
      "Vrai. La fiche indique huit carbones asymétriques.",
      "Faux. Il porte une chaîne C8 en C17."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-structure"
    }
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le cholestérol libre, quelles propositions sont exactes ?",
    "choices": [
      "Le noyau et la chaîne constituent le corps hydrophobe.",
      "Son noyau est le pôle hydrophile.",
      "L’OH C3 constitue le pôle hydrophile.",
      "Son OH est estérifié dans la forme libre."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le cholestérol libre est amphipathique.",
    "choiceExplanations": [
      "Vrai. Le noyau et la chaîne constituent le corps hydrophobe.",
      "Faux. Le noyau est hydrophobe.",
      "Vrai. L’OH C3 constitue le pôle hydrophile.",
      "Faux. Il reste libre."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-forms"
    }
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le cholestérol estérifié, quelles propositions sont exactes ?",
    "choices": [
      "La forme estérifiée est hydrophobe.",
      "Elle est transportée dans les lipoprotéines.",
      "Elle conserve un OH libre C3.",
      "Elle est plus amphiphile que le libre."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "L’estérification masque l’OH et produit une forme hydrophobe.",
    "choiceExplanations": [
      "Vrai. La forme estérifiée est hydrophobe.",
      "Vrai. Elle est transportée dans les lipoprotéines.",
      "Faux. L’OH est estérifié.",
      "Faux. Elle est plus hydrophobe."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-forms"
    }
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les rôles membranaires du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      "Il régule l’activité de protéines membranaires.",
      "Il n’interagit avec aucune protéine.",
      "Il est un constituant des membranes.",
      "Il est absent des membranes animales."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le cholestérol module structure et fluidité membranaires.",
    "choiceExplanations": [
      "Vrai. Il régule l’activité de protéines membranaires.",
      "Faux. Il en régule l’activité.",
      "Vrai. Il est un constituant des membranes.",
      "Faux. Il en est un constituant important."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-roles"
    }
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les rôles de précurseur du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      "Il est uniquement une réserve énergétique.",
      "Il est lié à la synthèse de vitamine D.",
      "Il est précurseur des acides biliaires.",
      "Les acides biliaires dérivent seulement du glucose."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le cholestérol est un carrefour biosynthétique.",
    "choiceExplanations": [
      "Faux. Il a des rôles structuraux et de précurseur.",
      "Vrai. Il est lié à la synthèse de vitamine D.",
      "Vrai. Il est précurseur des acides biliaires.",
      "Faux. Ils dérivent du cholestérol."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-roles"
    }
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un bilan lipidique mesure LDL et HDL. Quelles propositions sont exactes ?",
    "choices": [
      "LDL et HDL sont des hormones.",
      "LDL signifie low density lipoprotein.",
      "Les lipoprotéines ne contiennent aucun lipide.",
      "Il est transporté dans le sang par des lipoprotéines."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les lipoprotéines assurent le transport sanguin du cholestérol.",
    "choiceExplanations": [
      "Faux. Ce sont des lipoprotéines.",
      "Vrai. LDL signifie low density lipoprotein.",
      "Faux. Elles transportent des lipides.",
      "Vrai. Il est transporté dans le sang par des lipoprotéines."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-transport"
    }
  },
  {
    "order": 58,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les acides biliaires, quelles propositions sont exactes ?",
    "choices": [
      "Ils empêchent toute digestion lipidique.",
      "Ils sont excrétés dans la bile.",
      "Ils sont produits par le foie.",
      "Ils sont produits exclusivement par le pancréas."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les acides biliaires C24 facilitent la digestion des lipides.",
    "choiceExplanations": [
      "Faux. Ils la facilitent.",
      "Vrai. Ils sont excrétés dans la bile.",
      "Vrai. Ils sont produits par le foie.",
      "Faux. Ils sont produits par le foie."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bile-vitd"
    }
  },
  {
    "order": 59,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une fragilité osseuse par déficit en vitamine D. Quelles propositions sont exactes ?",
    "choices": [
      "Elle n’a aucun lien avec le cholestérol.",
      "Elle est décrite à partir d’un noyau cholestane C27.",
      "Elle agit uniquement sur la peau.",
      "Elle favorise l’absorption du calcium."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La vitamine D participe à l’homéostasie phosphocalcique.",
    "choiceExplanations": [
      "Faux. Elle en est un dérivé.",
      "Vrai. Elle est décrite à partir d’un noyau cholestane C27.",
      "Faux. Elle intervient notamment dans intestin et rein.",
      "Vrai. Elle favorise l’absorption du calcium."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bile-vitd"
    }
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la comparaison acides biliaires-vitamine D, quelles propositions sont exactes ?",
    "choices": [
      "La vitamine D participe à l’homéostasie phosphocalcique.",
      "Les deux ont exactement la même fonction.",
      "Les acides biliaires participent à la digestion lipidique.",
      "Aucun n’est un dérivé stéroïdien."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le cholestérol donne des dérivés digestifs et hormonaux.",
    "choiceExplanations": [
      "Vrai. La vitamine D participe à l’homéostasie phosphocalcique.",
      "Faux. Leurs fonctions diffèrent.",
      "Vrai. Les acides biliaires participent à la digestion lipidique.",
      "Faux. Ils dérivent du cholestérol."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bile-vitd"
    }
  }
];
