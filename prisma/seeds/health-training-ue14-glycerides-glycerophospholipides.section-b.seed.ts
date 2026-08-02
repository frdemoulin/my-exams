import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "31": [
    "l’abondance des triglycérides"
  ],
  "32": [
    "le point de fusion des triglycérides"
  ],
  "33": [
    "la conduction thermique des triglycérides"
  ],
  "34": [
    "la réserve énergétique des triglycérides"
  ],
  "35": [
    "la protection mécanique par les graisses"
  ],
  "36": [
    "l’huile de palme"
  ],
  "37": [
    "les acides gras de l’huile de palme"
  ],
  "38": [
    "les triglycérides alimentaires"
  ],
  "39": [
    "le tissu adipeux"
  ],
  "40": [
    "la relation structure-propriété des triglycérides"
  ],
  "41": [
    "l’abondance des triglycérides"
  ],
  "42": [
    "le point de fusion des triglycérides"
  ],
  "43": [
    "la conduction thermique des triglycérides"
  ],
  "44": [
    "la réserve énergétique des triglycérides"
  ],
  "45": [
    "la protection mécanique par les graisses"
  ],
  "46": [
    "l’huile de palme"
  ],
  "47": [
    "les acides gras de l’huile de palme"
  ],
  "48": [
    "les triglycérides alimentaires"
  ],
  "49": [
    "le tissu adipeux"
  ],
  "50": [
    "la relation structure-propriété des triglycérides"
  ],
  "51": [
    "l’abondance des triglycérides"
  ],
  "52": [
    "le point de fusion des triglycérides"
  ],
  "53": [
    "la conduction thermique des triglycérides"
  ],
  "54": [
    "la réserve énergétique des triglycérides"
  ],
  "55": [
    "la protection mécanique par les graisses"
  ],
  "56": [
    "l’huile de palme"
  ],
  "57": [
    "les acides gras de l’huile de palme"
  ],
  "58": [
    "les triglycérides alimentaires"
  ],
  "59": [
    "le tissu adipeux"
  ],
  "60": [
    "la relation structure-propriété des triglycérides"
  ]
};

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "triglyceride-properties-fondamentaux",
    "title": "Stockage et énergie",
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
    "slug": "triglyceride-properties-applications",
    "title": "Propriétés et protection",
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
    "slug": "triglyceride-properties-raisonnement",
    "title": "Raisonnement sur les triglycérides",
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
    "question": "À propos de l’abondance des triglycérides :",
    "choices": [
      "Ils ne constituent aucune réserve.",
      "Ils constituent la forme majeure de stockage lipidique.",
      "Ils sont particulièrement stockés dans les adipocytes.",
      "Ils sont les glycérides les plus abondants chez l’Homme."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les triglycérides dominent le stockage lipidique et l’apport alimentaire.",
    "choiceExplanations": [
      "Faux. Ils constituent une réserve énergétique.",
      "Vrai. Ils constituent la forme majeure de stockage lipidique.",
      "Vrai. Ils sont particulièrement stockés dans les adipocytes.",
      "Vrai. Ils sont les glycérides les plus abondants chez l’Homme."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le point de fusion des triglycérides :",
    "choices": [
      "Le point de fusion dépend de la nature des acides gras.",
      "La composition explique l’état physique.",
      "Les triglycérides saturés sont toujours liquides à 37 °C.",
      "Les chaînes désaturées diminuent le point de fusion."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La saturation élève le point de fusion, la désaturation l’abaisse.",
    "choiceExplanations": [
      "Vrai. Le point de fusion dépend de la nature des acides gras.",
      "Vrai. La composition explique l’état physique.",
      "Faux. La fiche les décrit comme solides à 37 °C.",
      "Vrai. Les chaînes désaturées diminuent le point de fusion."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-melting"
    }
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la conduction thermique des triglycérides :",
    "choices": [
      "Cette propriété contribue à la protection thermique.",
      "La graisse augmente obligatoirement les pertes thermiques.",
      "Ils conduisent mal la chaleur.",
      "Le tissu adipeux limite les pertes de chaleur."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La mauvaise conduction de la chaleur explique l’isolation thermique.",
    "choiceExplanations": [
      "Vrai. Cette propriété contribue à la protection thermique.",
      "Faux. Elle les limite.",
      "Vrai. Ils conduisent mal la chaleur.",
      "Vrai. Le tissu adipeux limite les pertes de chaleur."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-roles"
    }
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la réserve énergétique des triglycérides :",
    "choices": [
      "Les triglycérides forment une réserve concentrée.",
      "Les acides gras sont stockés uniquement libres.",
      "Les acides gras peuvent être libérés des triglycérides.",
      "Leur dégradation libère beaucoup d’énergie."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’hydrolyse puis l’oxydation des acides gras libèrent de l’ATP.",
    "choiceExplanations": [
      "Vrai. Les triglycérides forment une réserve concentrée.",
      "Faux. Ils sont surtout stockés dans les triglycérides.",
      "Vrai. Les acides gras peuvent être libérés des triglycérides.",
      "Vrai. Leur dégradation libère beaucoup d’énergie."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la protection mécanique par les graisses :",
    "choices": [
      "Les graisses de lubrification empêchent tout glissement.",
      "Les graisses peuvent soutenir les organes.",
      "Les graisses de lubrification sont riches en acides gras insaturés.",
      "Les graisses de lubrification facilitent le glissement."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les triglycérides assurent soutien et lubrification des organes.",
    "choiceExplanations": [
      "Faux. Elles le facilitent.",
      "Vrai. Les graisses peuvent soutenir les organes.",
      "Vrai. Les graisses de lubrification sont riches en acides gras insaturés.",
      "Vrai. Les graisses de lubrification facilitent le glissement."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-roles"
    }
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’huile de palme :",
    "choices": [
      "Elle est extraite d’Elaeis guineensis.",
      "Son nom rappelle l’acide palmitique.",
      "Elle est riche en acide palmitique.",
      "Elle est extraite d’un animal marin."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "L’huile de palme illustre un mélange de triglycérides riche en palmitique.",
    "choiceExplanations": [
      "Vrai. Elle est extraite d’Elaeis guineensis.",
      "Vrai. Son nom rappelle l’acide palmitique.",
      "Vrai. Elle est riche en acide palmitique.",
      "Faux. Elle provient d’un palmier."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palm-oil"
    }
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides gras de l’huile de palme :",
    "choices": [
      "La composition associe saturés et insaturés.",
      "L’acide oléique est monodésaturé.",
      "Des polyinsaturés sont présents en moindre quantité.",
      "L’huile de palme ne contient aucun insaturé."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "L’huile de palme associe surtout palmitique et oléique.",
    "choiceExplanations": [
      "Vrai. La composition associe saturés et insaturés.",
      "Vrai. L’acide oléique est monodésaturé.",
      "Vrai. Des polyinsaturés sont présents en moindre quantité.",
      "Faux. Elle contient notamment de l’oléique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palm-oil"
    }
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les triglycérides alimentaires :",
    "choices": [
      "La composition influence leurs propriétés nutritionnelles.",
      "Ils peuvent être d’origine végétale ou animale.",
      "Leur digestion libère des acides gras.",
      "Ils ne sont jamais ingérés."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les triglycérides alimentaires apportent différents acides gras.",
    "choiceExplanations": [
      "Vrai. La composition influence leurs propriétés nutritionnelles.",
      "Vrai. Ils peuvent être d’origine végétale ou animale.",
      "Vrai. Leur digestion libère des acides gras.",
      "Faux. Ils dominent les lipides alimentaires."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le tissu adipeux :",
    "choices": [
      "Le tissu adipeux constitue une réserve énergétique.",
      "Le tissu adipeux est dépourvu de lipides.",
      "Il contribue à l’isolation.",
      "Les triglycérides peuvent être mobilisés."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le tissu adipeux stocke et mobilise les triglycérides.",
    "choiceExplanations": [
      "Vrai. Le tissu adipeux constitue une réserve énergétique.",
      "Faux. Il est spécialisé dans leur stockage.",
      "Vrai. Il contribue à l’isolation.",
      "Vrai. Les triglycérides peuvent être mobilisés."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la relation structure-propriété des triglycérides :",
    "choices": [
      "Les chaînes saturées s’empilent plus facilement.",
      "La composition explique la diversité des corps gras.",
      "La désaturation diminue le point de fusion.",
      "Tous les triglycérides ont le même point de fusion."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La nature des chaînes conditionne la fluidité du corps gras.",
    "choiceExplanations": [
      "Vrai. Les chaînes saturées s’empilent plus facilement.",
      "Vrai. La composition explique la diversité des corps gras.",
      "Vrai. La désaturation diminue le point de fusion.",
      "Faux. Il dépend des chaînes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-melting"
    }
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’abondance des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "Ils sont des lipides importants de l’alimentation.",
      "Ils sont absents du tissu adipeux.",
      "Ils sont minoritaires dans l’alimentation.",
      "Ils sont particulièrement stockés dans les adipocytes."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les triglycérides dominent le stockage lipidique et l’apport alimentaire.",
    "choiceExplanations": [
      "Vrai. Ils sont des lipides importants de l’alimentation.",
      "Faux. Ils y sont majoritairement stockés.",
      "Faux. Ils sont les principaux lipides alimentaires.",
      "Vrai. Ils sont particulièrement stockés dans les adipocytes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le point de fusion des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "Le point de fusion dépend de la nature des acides gras.",
      "Le point de fusion est indépendant des chaînes.",
      "Les triglycérides saturés sont toujours liquides à 37 °C.",
      "Les chaînes saturées favorisent un état solide."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La saturation élève le point de fusion, la désaturation l’abaisse.",
    "choiceExplanations": [
      "Vrai. Le point de fusion dépend de la nature des acides gras.",
      "Faux. Il dépend de leur nature.",
      "Faux. La fiche les décrit comme solides à 37 °C.",
      "Vrai. Les chaînes saturées favorisent un état solide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-melting"
    }
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la conduction thermique des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "Cette propriété contribue à la protection thermique.",
      "Ils conduisent mal la chaleur.",
      "Ils n’ont aucun rôle thermique.",
      "La graisse augmente obligatoirement les pertes thermiques."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La mauvaise conduction de la chaleur explique l’isolation thermique.",
    "choiceExplanations": [
      "Vrai. Cette propriété contribue à la protection thermique.",
      "Vrai. Ils conduisent mal la chaleur.",
      "Faux. Ils contribuent à l’isolation.",
      "Faux. Elle les limite."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-roles"
    }
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la réserve énergétique des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "Le catabolisme des acides gras ne produit jamais d’ATP.",
      "Les triglycérides forment une réserve concentrée.",
      "Les acides gras sont stockés uniquement libres.",
      "Leur dégradation libère beaucoup d’énergie."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’hydrolyse puis l’oxydation des acides gras libèrent de l’ATP.",
    "choiceExplanations": [
      "Faux. Il en produit une grande quantité.",
      "Vrai. Les triglycérides forment une réserve concentrée.",
      "Faux. Ils sont surtout stockés dans les triglycérides.",
      "Vrai. Leur dégradation libère beaucoup d’énergie."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la protection mécanique par les graisses, quelles propositions sont exactes ?",
    "choices": [
      "Les graisses de lubrification facilitent le glissement.",
      "Les graisses de soutien sont dépourvues d’acides gras.",
      "Les graisses de lubrification sont riches en acides gras insaturés.",
      "Toutes les graisses ont la même composition."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les triglycérides assurent soutien et lubrification des organes.",
    "choiceExplanations": [
      "Vrai. Les graisses de lubrification facilitent le glissement.",
      "Faux. Elles sont riches en saturés.",
      "Vrai. Les graisses de lubrification sont riches en acides gras insaturés.",
      "Faux. Leur composition dépend du rôle."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-roles"
    }
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’huile de palme, quelles propositions sont exactes ?",
    "choices": [
      "Son principal acide gras est nécessairement le DHA.",
      "Elle est extraite d’un animal marin.",
      "Elle est extraite d’Elaeis guineensis.",
      "Elle est presque exclusivement composée de triglycérides."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’huile de palme illustre un mélange de triglycérides riche en palmitique.",
    "choiceExplanations": [
      "Faux. La fiche met en avant le palmitique.",
      "Faux. Elle provient d’un palmier.",
      "Vrai. Elle est extraite d’Elaeis guineensis.",
      "Vrai. Elle est presque exclusivement composée de triglycérides."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palm-oil"
    }
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides gras de l’huile de palme, quelles propositions sont exactes ?",
    "choices": [
      "Tous ses acides gras sont oméga 3.",
      "Le palmitique possède trois doubles liaisons.",
      "L’acide palmitique est saturé.",
      "L’acide oléique est monodésaturé."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’huile de palme associe surtout palmitique et oléique.",
    "choiceExplanations": [
      "Faux. Les oméga 3 y sont peu abondants.",
      "Faux. Il est saturé 16:0.",
      "Vrai. L’acide palmitique est saturé.",
      "Vrai. L’acide oléique est monodésaturé."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palm-oil"
    }
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les triglycérides alimentaires, quelles propositions sont exactes ?",
    "choices": [
      "Ils ne sont jamais ingérés.",
      "Ils constituent les principaux lipides alimentaires.",
      "La composition influence leurs propriétés nutritionnelles.",
      "Ils ne contiennent aucun acide gras."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les triglycérides alimentaires apportent différents acides gras.",
    "choiceExplanations": [
      "Faux. Ils dominent les lipides alimentaires.",
      "Vrai. Ils constituent les principaux lipides alimentaires.",
      "Vrai. La composition influence leurs propriétés nutritionnelles.",
      "Faux. Ils en contiennent trois."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le tissu adipeux, quelles propositions sont exactes ?",
    "choices": [
      "Le stockage n’a aucun rôle énergétique.",
      "Les adipocytes stockent des triglycérides.",
      "Le tissu adipeux constitue une réserve énergétique.",
      "Le tissu adipeux est dépourvu de lipides."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le tissu adipeux stocke et mobilise les triglycérides.",
    "choiceExplanations": [
      "Faux. Il constitue une réserve majeure.",
      "Vrai. Les adipocytes stockent des triglycérides.",
      "Vrai. Le tissu adipeux constitue une réserve énergétique.",
      "Faux. Il est spécialisé dans leur stockage."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la relation structure-propriété des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "Les doubles liaisons cis introduisent des coudes.",
      "La composition explique la diversité des corps gras.",
      "Les doubles liaisons rendent toujours la chaîne rectiligne.",
      "Les saturés diminuent toujours le point de fusion."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La nature des chaînes conditionne la fluidité du corps gras.",
    "choiceExplanations": [
      "Vrai. Les doubles liaisons cis introduisent des coudes.",
      "Vrai. La composition explique la diversité des corps gras.",
      "Faux. Les cis introduisent des coudes.",
      "Faux. Ils l’augmentent plutôt."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-melting"
    }
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’abondance des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "Ils constituent la forme majeure de stockage lipidique.",
      "Ils ne constituent aucune réserve.",
      "Ils sont des lipides importants de l’alimentation.",
      "Ils sont minoritaires dans l’alimentation."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les triglycérides dominent le stockage lipidique et l’apport alimentaire.",
    "choiceExplanations": [
      "Vrai. Ils constituent la forme majeure de stockage lipidique.",
      "Faux. Ils constituent une réserve énergétique.",
      "Vrai. Ils sont des lipides importants de l’alimentation.",
      "Faux. Ils sont les principaux lipides alimentaires."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le point de fusion des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "La composition explique l’état physique.",
      "Le point de fusion est indépendant des chaînes.",
      "Les chaînes saturées favorisent un état solide.",
      "La saturation n’a aucun effet."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La saturation élève le point de fusion, la désaturation l’abaisse.",
    "choiceExplanations": [
      "Vrai. La composition explique l’état physique.",
      "Faux. Il dépend de leur nature.",
      "Vrai. Les chaînes saturées favorisent un état solide.",
      "Faux. Elle modifie l’empilement des chaînes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-melting"
    }
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la conduction thermique des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "Le tissu adipeux limite les pertes de chaleur.",
      "Cette propriété contribue à la protection thermique.",
      "La protection thermique dépend uniquement des protéines.",
      "La graisse augmente obligatoirement les pertes thermiques."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La mauvaise conduction de la chaleur explique l’isolation thermique.",
    "choiceExplanations": [
      "Vrai. Le tissu adipeux limite les pertes de chaleur.",
      "Vrai. Cette propriété contribue à la protection thermique.",
      "Faux. Les triglycérides y participent.",
      "Faux. Elle les limite."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-roles"
    }
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la réserve énergétique des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "Les acides gras sont stockés uniquement libres.",
      "Les triglycérides ne peuvent être hydrolysés.",
      "Les triglycérides forment une réserve concentrée.",
      "Leur dégradation libère beaucoup d’énergie."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’hydrolyse puis l’oxydation des acides gras libèrent de l’ATP.",
    "choiceExplanations": [
      "Faux. Ils sont surtout stockés dans les triglycérides.",
      "Faux. Leurs acides gras peuvent être libérés.",
      "Vrai. Les triglycérides forment une réserve concentrée.",
      "Vrai. Leur dégradation libère beaucoup d’énergie."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la protection mécanique par les graisses, quelles propositions sont exactes ?",
    "choices": [
      "Les graisses de lubrification empêchent tout glissement.",
      "Les graisses peuvent soutenir les organes.",
      "Toutes les graisses ont la même composition.",
      "Les graisses de lubrification sont riches en acides gras insaturés."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les triglycérides assurent soutien et lubrification des organes.",
    "choiceExplanations": [
      "Faux. Elles le facilitent.",
      "Vrai. Les graisses peuvent soutenir les organes.",
      "Faux. Leur composition dépend du rôle.",
      "Vrai. Les graisses de lubrification sont riches en acides gras insaturés."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-roles"
    }
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient interroge sur la composition de l’huile de palme. Quelles propositions sont exactes ?",
    "choices": [
      "Elle est presque exclusivement composée de triglycérides.",
      "Elle est riche en acide palmitique.",
      "Elle est extraite d’un animal marin.",
      "Elle ne contient aucun saturé."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "L’huile de palme illustre un mélange de triglycérides riche en palmitique.",
    "choiceExplanations": [
      "Vrai. Elle est presque exclusivement composée de triglycérides.",
      "Vrai. Elle est riche en acide palmitique.",
      "Faux. Elle provient d’un palmier.",
      "Faux. L’acide palmitique saturé y est abondant."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palm-oil"
    }
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les acides gras de l’huile de palme, quelles propositions sont exactes ?",
    "choices": [
      "Des polyinsaturés sont présents en moindre quantité.",
      "Le palmitique possède trois doubles liaisons.",
      "L’acide oléique est monodésaturé.",
      "Tous ses acides gras sont oméga 3."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’huile de palme associe surtout palmitique et oléique.",
    "choiceExplanations": [
      "Vrai. Des polyinsaturés sont présents en moindre quantité.",
      "Faux. Il est saturé 16:0.",
      "Vrai. L’acide oléique est monodésaturé.",
      "Faux. Les oméga 3 y sont peu abondants."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palm-oil"
    }
  },
  {
    "order": 58,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les triglycérides alimentaires, quelles propositions sont exactes ?",
    "choices": [
      "Leur digestion libère des acides gras.",
      "Ils ne sont jamais ingérés.",
      "Ils sont absorbés sans hydrolyse possible.",
      "La composition influence leurs propriétés nutritionnelles."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les triglycérides alimentaires apportent différents acides gras.",
    "choiceExplanations": [
      "Vrai. Leur digestion libère des acides gras.",
      "Faux. Ils dominent les lipides alimentaires.",
      "Faux. Ils sont hydrolysés lors de la digestion.",
      "Vrai. La composition influence leurs propriétés nutritionnelles."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 59,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le tissu adipeux, quelles propositions sont exactes ?",
    "choices": [
      "Le tissu adipeux constitue une réserve énergétique.",
      "Le stockage n’a aucun rôle énergétique.",
      "Il contribue à l’isolation.",
      "Le tissu adipeux est dépourvu de lipides."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le tissu adipeux stocke et mobilise les triglycérides.",
    "choiceExplanations": [
      "Vrai. Le tissu adipeux constitue une réserve énergétique.",
      "Faux. Il constitue une réserve majeure.",
      "Vrai. Il contribue à l’isolation.",
      "Faux. Il est spécialisé dans leur stockage."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la relation structure-propriété des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "Les chaînes saturées s’empilent plus facilement.",
      "La désaturation diminue le point de fusion.",
      "Tous les triglycérides ont le même point de fusion.",
      "Les saturés diminuent toujours le point de fusion."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La nature des chaînes conditionne la fluidité du corps gras.",
    "choiceExplanations": [
      "Vrai. Les chaînes saturées s’empilent plus facilement.",
      "Vrai. La désaturation diminue le point de fusion.",
      "Faux. Il dépend des chaînes.",
      "Faux. Ils l’augmentent plutôt."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-melting"
    }
  }
];
