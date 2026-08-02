import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "91": [
    "le caractère amphiphile des phospholipides"
  ],
  "92": [
    "la bicouche phospholipidique"
  ],
  "93": [
    "les micelles et les liposomes"
  ],
  "94": [
    "les phospholipases"
  ],
  "95": [
    "les phospholipases A1 et A2"
  ],
  "96": [
    "les phospholipases C et D"
  ],
  "97": [
    "la voie PIP2-PLC"
  ],
  "98": [
    "les fonctions du DAG et de l’IP3"
  ],
  "99": [
    "la voie PI3K-AKT"
  ],
  "100": [
    "les plasmalogènes et le PAF"
  ],
  "101": [
    "le caractère amphiphile des phospholipides"
  ],
  "102": [
    "la bicouche phospholipidique"
  ],
  "103": [
    "les micelles et les liposomes"
  ],
  "104": [
    "les phospholipases"
  ],
  "105": [
    "les phospholipases A1 et A2"
  ],
  "106": [
    "les phospholipases C et D"
  ],
  "107": [
    "la voie PIP2-PLC"
  ],
  "108": [
    "les fonctions du DAG et de l’IP3"
  ],
  "109": [
    "la voie PI3K-AKT"
  ],
  "110": [
    "les plasmalogènes et le PAF"
  ],
  "111": [
    "le caractère amphiphile des phospholipides"
  ],
  "112": [
    "la bicouche phospholipidique"
  ],
  "113": [
    "les micelles et les liposomes"
  ],
  "114": [
    "les phospholipases"
  ],
  "115": [
    "les phospholipases A1 et A2"
  ],
  "116": [
    "les phospholipases C et D"
  ],
  "117": [
    "la voie PIP2-PLC"
  ],
  "118": [
    "les fonctions du DAG et de l’IP3"
  ],
  "119": [
    "la voie PI3K-AKT"
  ],
  "120": [
    "les plasmalogènes et le PAF"
  ]
};

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "membranes-signaling-fondamentaux",
    "title": "Bicouches et liposomes",
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
    "slug": "membranes-signaling-applications",
    "title": "Phospholipases et seconds messagers",
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
    "slug": "membranes-signaling-raisonnement",
    "title": "Signalisation, cancérologie et PAF",
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
    "question": "À propos de le caractère amphiphile des phospholipides :",
    "choices": [
      "Ils s’auto-assemblent en milieu aqueux.",
      "Les phospholipides sont amphiphiles.",
      "La tête contient glycérol, phosphate et alcool polaire.",
      "Ils ne forment aucune structure supramoléculaire."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La séparation tête-queues explique l’auto-assemblage.",
    "choiceExplanations": [
      "Vrai. Ils s’auto-assemblent en milieu aqueux.",
      "Vrai. Les phospholipides sont amphiphiles.",
      "Vrai. La tête contient glycérol, phosphate et alcool polaire.",
      "Faux. Ils forment des bicouches et vésicules."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bilayer"
    }
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la bicouche phospholipidique :",
    "choices": [
      "Elle constitue la base des membranes.",
      "Elle est totalement rigide.",
      "Elle est stable en milieu aqueux.",
      "Elle reste fluide et déformable."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La bicouche possède un cœur hydrophobe et des surfaces polaires.",
    "choiceExplanations": [
      "Vrai. Elle constitue la base des membranes.",
      "Faux. Elle est fluide et déformable.",
      "Vrai. Elle est stable en milieu aqueux.",
      "Vrai. Elle reste fluide et déformable."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bilayer"
    }
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les micelles et les liposomes :",
    "choices": [
      "Ils peuvent former des liposomes.",
      "Un liposome délimite un compartiment aqueux.",
      "Les liposomes peuvent transporter des médicaments.",
      "Un liposome est une enzyme."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les liposomes sont des vésicules utilisables en vectorisation.",
    "choiceExplanations": [
      "Vrai. Ils peuvent former des liposomes.",
      "Vrai. Un liposome délimite un compartiment aqueux.",
      "Vrai. Les liposomes peuvent transporter des médicaments.",
      "Faux. C’est une vésicule lipidique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "micelle-liposome"
    }
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les phospholipases :",
    "choices": [
      "Elles sont spécifiques de position.",
      "Elles clivent des liaisons par addition d’eau.",
      "Ce sont des hydrolases.",
      "Ce sont exclusivement des kinases."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les phospholipases hydrolysent sélectivement les phospholipides.",
    "choiceExplanations": [
      "Vrai. Elles sont spécifiques de position.",
      "Vrai. Elles clivent des liaisons par addition d’eau.",
      "Vrai. Ce sont des hydrolases.",
      "Faux. Ce sont des hydrolases."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les phospholipases A1 et A2 :",
    "choices": [
      "A2 produit aussi un lysophospholipide.",
      "A1 hydrolyse l’ester en C1.",
      "A2 peut libérer l’acide arachidonique.",
      "A2 agit seulement en C3."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "A1 et A2 se distinguent par le carbone hydrolysé.",
    "choiceExplanations": [
      "Vrai. A2 produit aussi un lysophospholipide.",
      "Vrai. A1 hydrolyse l’ester en C1.",
      "Vrai. A2 peut libérer l’acide arachidonique.",
      "Faux. A2 agit en C2."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 96,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les phospholipases C et D :",
    "choices": [
      "D coupe la liaison phosphate-alcool de tête.",
      "C peut produire un diacylglycérol.",
      "D coupe l’ester C2.",
      "Le site de coupure détermine les produits."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "C et D hydrolysent deux liaisons distinctes autour du phosphate.",
    "choiceExplanations": [
      "Vrai. D coupe la liaison phosphate-alcool de tête.",
      "Vrai. C peut produire un diacylglycérol.",
      "Faux. Ce rôle appartient à A2.",
      "Vrai. Le site de coupure détermine les produits."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 97,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la voie PIP2-PLC :",
    "choices": [
      "Le PIP2 est un triglycéride sans phosphate.",
      "La réaction libère DAG et IP3.",
      "Le PIP2 est phosphorylé en positions 4 et 5.",
      "DAG et IP3 sont des seconds messagers."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La PLC scinde le PIP2 en DAG et IP3.",
    "choiceExplanations": [
      "Faux. C’est un phosphatidylinositol bisphosphate.",
      "Vrai. La réaction libère DAG et IP3.",
      "Vrai. Le PIP2 est phosphorylé en positions 4 et 5.",
      "Vrai. DAG et IP3 sont des seconds messagers."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pip2-plc"
    }
  },
  {
    "order": 98,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les fonctions du DAG et de l’IP3 :",
    "choices": [
      "Le DAG reste associé à la membrane.",
      "Les deux participent à la signalisation.",
      "L’IP3 déclenche une libération de calcium.",
      "La PKC est activée seulement par le cholestérol."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "DAG et IP3 transmettent le signal par PKC et calcium.",
    "choiceExplanations": [
      "Vrai. Le DAG reste associé à la membrane.",
      "Vrai. Les deux participent à la signalisation.",
      "Vrai. L’IP3 déclenche une libération de calcium.",
      "Faux. Le DAG participe à son activation."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pip2-plc"
    }
  },
  {
    "order": 99,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la voie PI3K-AKT :",
    "choices": [
      "Elle forme le PIP3.",
      "La PI3K phosphoryle le PIP2 en C3.",
      "Le PIP3 est uniquement nucléaire.",
      "La voie intervient dans prolifération et migration."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La voie PI3K-PIP3-AKT contrôle de nombreuses fonctions cellulaires.",
    "choiceExplanations": [
      "Vrai. Elle forme le PIP3.",
      "Vrai. La PI3K phosphoryle le PIP2 en C3.",
      "Faux. Il est sur la face interne de la membrane.",
      "Vrai. La voie intervient dans prolifération et migration."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pi3k-akt"
    }
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les plasmalogènes et le PAF :",
    "choices": [
      "Le PAF est un dérivé actif.",
      "Le C1 porte un alcool gras lié par éther.",
      "La liaison éther est plus résistante qu’un ester.",
      "Le PAF inhibe toute inflammation."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les plasmalogènes portent une liaison éther ; le PAF a des effets plaquettaires et bronchiques.",
    "choiceExplanations": [
      "Vrai. Le PAF est un dérivé actif.",
      "Vrai. Le C1 porte un alcool gras lié par éther.",
      "Vrai. La liaison éther est plus résistante qu’un ester.",
      "Faux. Il est pro-inflammatoire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "plasmalogen-paf"
    }
  },
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le caractère amphiphile des phospholipides, quelles propositions sont exactes ?",
    "choices": [
      "Ils ne forment aucune structure supramoléculaire.",
      "La tête contient glycérol, phosphate et alcool polaire.",
      "Ils sont totalement apolaires.",
      "Les phospholipides sont amphiphiles."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La séparation tête-queues explique l’auto-assemblage.",
    "choiceExplanations": [
      "Faux. Ils forment des bicouches et vésicules.",
      "Vrai. La tête contient glycérol, phosphate et alcool polaire.",
      "Faux. Ils sont amphiphiles.",
      "Vrai. Les phospholipides sont amphiphiles."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bilayer"
    }
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la bicouche phospholipidique, quelles propositions sont exactes ?",
    "choices": [
      "Elle ne contient aucun phospholipide.",
      "Elle reste fluide et déformable.",
      "Elle ne se forme qu’en milieu anhydre.",
      "Elle est stable en milieu aqueux."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La bicouche possède un cœur hydrophobe et des surfaces polaires.",
    "choiceExplanations": [
      "Faux. Les phospholipides en sont la base.",
      "Vrai. Elle reste fluide et déformable.",
      "Faux. Elle se forme en milieu aqueux.",
      "Vrai. Elle est stable en milieu aqueux."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bilayer"
    }
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les micelles et les liposomes, quelles propositions sont exactes ?",
    "choices": [
      "Les phospholipides ne s’auto-assemblent jamais.",
      "Ils peuvent former des liposomes.",
      "Les phospholipides peuvent former des micelles.",
      "Un liposome est une enzyme."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les liposomes sont des vésicules utilisables en vectorisation.",
    "choiceExplanations": [
      "Faux. Ils s’auto-assemblent spontanément.",
      "Vrai. Ils peuvent former des liposomes.",
      "Vrai. Les phospholipides peuvent former des micelles.",
      "Faux. C’est une vésicule lipidique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "micelle-liposome"
    }
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les phospholipases, quelles propositions sont exactes ?",
    "choices": [
      "Ce sont des hydrolases.",
      "Elles agissent sans spécificité.",
      "Elles ajoutent toujours un phosphate.",
      "Elles peuvent libérer des médiateurs."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les phospholipases hydrolysent sélectivement les phospholipides.",
    "choiceExplanations": [
      "Vrai. Ce sont des hydrolases.",
      "Faux. Elles ont une spécificité de position.",
      "Faux. Elles hydrolysent des liaisons.",
      "Vrai. Elles peuvent libérer des médiateurs."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les phospholipases A1 et A2, quelles propositions sont exactes ?",
    "choices": [
      "A2 peut libérer l’acide arachidonique.",
      "A2 produit aussi un lysophospholipide.",
      "A2 agit seulement en C3.",
      "A2 ne libère jamais d’acide gras."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "A1 et A2 se distinguent par le carbone hydrolysé.",
    "choiceExplanations": [
      "Vrai. A2 peut libérer l’acide arachidonique.",
      "Vrai. A2 produit aussi un lysophospholipide.",
      "Faux. A2 agit en C2.",
      "Faux. Elle libère celui du C2."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les phospholipases C et D, quelles propositions sont exactes ?",
    "choices": [
      "C n’intervient jamais en signalisation.",
      "C et D ont le même site.",
      "D coupe la liaison phosphate-alcool de tête.",
      "C coupe la liaison glycérol-phosphate."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "C et D hydrolysent deux liaisons distinctes autour du phosphate.",
    "choiceExplanations": [
      "Faux. Elle intervient dans la voie PIP2.",
      "Faux. Leurs sites diffèrent.",
      "Vrai. D coupe la liaison phosphate-alcool de tête.",
      "Vrai. C coupe la liaison glycérol-phosphate."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la voie PIP2-PLC, quelles propositions sont exactes ?",
    "choices": [
      "La PLC hydrolyse le PIP2.",
      "Le PIP2 est un triglycéride sans phosphate.",
      "Le PIP2 est phosphorylé en positions 4 et 5.",
      "Le DAG est un acide nucléique."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La PLC scinde le PIP2 en DAG et IP3.",
    "choiceExplanations": [
      "Vrai. La PLC hydrolyse le PIP2.",
      "Faux. C’est un phosphatidylinositol bisphosphate.",
      "Vrai. Le PIP2 est phosphorylé en positions 4 et 5.",
      "Faux. C’est un diacylglycérol."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pip2-plc"
    }
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les fonctions du DAG et de l’IP3, quelles propositions sont exactes ?",
    "choices": [
      "DAG et IP3 sont inactifs.",
      "Le DAG reste associé à la membrane.",
      "Le DAG active notamment la PKC.",
      "Le DAG est un gaz diffusible."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "DAG et IP3 transmettent le signal par PKC et calcium.",
    "choiceExplanations": [
      "Faux. Ce sont des seconds messagers.",
      "Vrai. Le DAG reste associé à la membrane.",
      "Vrai. Le DAG active notamment la PKC.",
      "Faux. C’est un lipide membranaire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pip2-plc"
    }
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la voie PI3K-AKT, quelles propositions sont exactes ?",
    "choices": [
      "La voie intervient dans prolifération et migration.",
      "AKT n’a aucun lien avec PIP3.",
      "La voie est sans intérêt en cancérologie.",
      "Elle forme le PIP3."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La voie PI3K-PIP3-AKT contrôle de nombreuses fonctions cellulaires.",
    "choiceExplanations": [
      "Vrai. La voie intervient dans prolifération et migration.",
      "Faux. PIP3 recrute AKT.",
      "Faux. Elle est très impliquée en cancérologie.",
      "Vrai. Elle forme le PIP3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pi3k-akt"
    }
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les plasmalogènes et le PAF, quelles propositions sont exactes ?",
    "choices": [
      "Le C1 porte toujours un acide gras lié par amide.",
      "Le PAF inhibe toute inflammation.",
      "Le PAF est un dérivé actif.",
      "Le C1 porte un alcool gras lié par éther."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les plasmalogènes portent une liaison éther ; le PAF a des effets plaquettaires et bronchiques.",
    "choiceExplanations": [
      "Faux. Il porte un alcool gras lié par éther.",
      "Faux. Il est pro-inflammatoire.",
      "Vrai. Le PAF est un dérivé actif.",
      "Vrai. Le C1 porte un alcool gras lié par éther."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "plasmalogen-paf"
    }
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le caractère amphiphile des phospholipides, quelles propositions sont exactes ?",
    "choices": [
      "Les deux acides gras forment les bras hydrophobes.",
      "La tête contient glycérol, phosphate et alcool polaire.",
      "Les acides gras forment la tête polaire.",
      "La tête est exclusivement hydrophobe."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La séparation tête-queues explique l’auto-assemblage.",
    "choiceExplanations": [
      "Vrai. Les deux acides gras forment les bras hydrophobes.",
      "Vrai. La tête contient glycérol, phosphate et alcool polaire.",
      "Faux. Ils forment les bras hydrophobes.",
      "Faux. Elle est hydrophile."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bilayer"
    }
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la bicouche phospholipidique, quelles propositions sont exactes ?",
    "choices": [
      "Elle constitue la base des membranes.",
      "Elle reste fluide et déformable.",
      "Les queues sont exposées à l’eau.",
      "Elle ne se forme qu’en milieu anhydre."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La bicouche possède un cœur hydrophobe et des surfaces polaires.",
    "choiceExplanations": [
      "Vrai. Elle constitue la base des membranes.",
      "Vrai. Elle reste fluide et déformable.",
      "Faux. Elles se regroupent au cœur.",
      "Faux. Elle se forme en milieu aqueux."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bilayer"
    }
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un médicament est encapsulé dans un liposome. Quelles propositions sont exactes ?",
    "choices": [
      "Une micelle est toujours une bicouche cellulaire complète.",
      "Les liposomes sont inutilisables comme véhicules.",
      "Un liposome délimite un compartiment aqueux.",
      "Les phospholipides peuvent former des micelles."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les liposomes sont des vésicules utilisables en vectorisation.",
    "choiceExplanations": [
      "Faux. Une micelle est un assemblage plus simple.",
      "Faux. Ils peuvent transporter des substances actives.",
      "Vrai. Un liposome délimite un compartiment aqueux.",
      "Vrai. Les phospholipides peuvent former des micelles."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "micelle-liposome"
    }
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les phospholipases, quelles propositions sont exactes ?",
    "choices": [
      "Elles agissent sans spécificité.",
      "Elles sont spécifiques de position.",
      "Elles peuvent libérer des médiateurs.",
      "Ce sont exclusivement des kinases."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les phospholipases hydrolysent sélectivement les phospholipides.",
    "choiceExplanations": [
      "Faux. Elles ont une spécificité de position.",
      "Vrai. Elles sont spécifiques de position.",
      "Vrai. Elles peuvent libérer des médiateurs.",
      "Faux. Ce sont des hydrolases."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les phospholipases A1 et A2, quelles propositions sont exactes ?",
    "choices": [
      "A1 hydrolyse l’ester en C1.",
      "A2 agit seulement en C3.",
      "A2 produit du cholestérol.",
      "A2 peut libérer l’acide arachidonique."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "A1 et A2 se distinguent par le carbone hydrolysé.",
    "choiceExplanations": [
      "Vrai. A1 hydrolyse l’ester en C1.",
      "Faux. A2 agit en C2.",
      "Faux. Elle produit un lysophospholipide et un acide gras.",
      "Vrai. A2 peut libérer l’acide arachidonique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les phospholipases C et D, quelles propositions sont exactes ?",
    "choices": [
      "C coupe l’ester C1.",
      "D coupe la liaison phosphate-alcool de tête.",
      "Le site de coupure détermine les produits.",
      "C n’intervient jamais en signalisation."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "C et D hydrolysent deux liaisons distinctes autour du phosphate.",
    "choiceExplanations": [
      "Faux. Ce rôle appartient à A1.",
      "Vrai. D coupe la liaison phosphate-alcool de tête.",
      "Vrai. Le site de coupure détermine les produits.",
      "Faux. Elle intervient dans la voie PIP2."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la voie PIP2-PLC, quelles propositions sont exactes ?",
    "choices": [
      "Le DAG est un acide nucléique.",
      "Le PIP2 est un triglycéride sans phosphate.",
      "La réaction libère DAG et IP3.",
      "La PLC hydrolyse le PIP2."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La PLC scinde le PIP2 en DAG et IP3.",
    "choiceExplanations": [
      "Faux. C’est un diacylglycérol.",
      "Faux. C’est un phosphatidylinositol bisphosphate.",
      "Vrai. La réaction libère DAG et IP3.",
      "Vrai. La PLC hydrolyse le PIP2."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pip2-plc"
    }
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les fonctions du DAG et de l’IP3, quelles propositions sont exactes ?",
    "choices": [
      "Le DAG reste associé à la membrane.",
      "L’IP3 bloque toute libération de calcium.",
      "La PKC est activée seulement par le cholestérol.",
      "Les deux participent à la signalisation."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "DAG et IP3 transmettent le signal par PKC et calcium.",
    "choiceExplanations": [
      "Vrai. Le DAG reste associé à la membrane.",
      "Faux. Il la déclenche.",
      "Faux. Le DAG participe à son activation.",
      "Vrai. Les deux participent à la signalisation."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pip2-plc"
    }
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une tumeur, la voie PI3K-AKT est hyperactivée. Quelles propositions sont exactes ?",
    "choices": [
      "Le PIP3 est uniquement nucléaire.",
      "La voie intervient dans prolifération et migration.",
      "AKT n’a aucun lien avec PIP3.",
      "Le PIP3 recrute AKT à la membrane."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La voie PI3K-PIP3-AKT contrôle de nombreuses fonctions cellulaires.",
    "choiceExplanations": [
      "Faux. Il est sur la face interne de la membrane.",
      "Vrai. La voie intervient dans prolifération et migration.",
      "Faux. PIP3 recrute AKT.",
      "Vrai. Le PIP3 recrute AKT à la membrane."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pi3k-akt"
    }
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Chez un patient asthmatique, un médiateur favorise bronchoconstriction et agrégation plaquettaire. Quelles propositions sont exactes ?",
    "choices": [
      "La liaison éther est plus résistante qu’un ester.",
      "Les plasmalogènes sont des stéroïdes.",
      "Le PAF inhibe toute inflammation.",
      "Le PAF favorise agrégation plaquettaire et bronchoconstriction."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les plasmalogènes portent une liaison éther ; le PAF a des effets plaquettaires et bronchiques.",
    "choiceExplanations": [
      "Vrai. La liaison éther est plus résistante qu’un ester.",
      "Faux. Ils sont apparentés aux phospholipides.",
      "Faux. Il est pro-inflammatoire.",
      "Vrai. Le PAF favorise agrégation plaquettaire et bronchoconstriction."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "plasmalogen-paf"
    }
  }
];
