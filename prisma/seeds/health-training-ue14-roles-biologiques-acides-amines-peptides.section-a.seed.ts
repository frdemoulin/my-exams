import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "1": [
    "les besoins en acides aminés indispensables"
  ],
  "2": [
    "le rôle structural des acides aminés"
  ],
  "3": [
    "le cycle de l’uréogenèse"
  ],
  "4": [
    "les interconversions et la méthionine"
  ],
  "5": [
    "le rôle énergétique des acides aminés"
  ],
  "6": [
    "les besoins en acides aminés indispensables"
  ],
  "7": [
    "le rôle structural des acides aminés"
  ],
  "8": [
    "le cycle de l’uréogenèse"
  ],
  "9": [
    "les interconversions et la méthionine"
  ],
  "10": [
    "le rôle énergétique des acides aminés"
  ],
  "11": [
    "les besoins en acides aminés indispensables"
  ],
  "12": [
    "le rôle structural des acides aminés"
  ],
  "13": [
    "le cycle de l’uréogenèse"
  ],
  "14": [
    "les interconversions et la méthionine"
  ],
  "15": [
    "le rôle énergétique des acides aminés"
  ],
  "16": [
    "les besoins en acides aminés indispensables"
  ],
  "17": [
    "le rôle structural des acides aminés"
  ],
  "18": [
    "le cycle de l’uréogenèse"
  ],
  "19": [
    "les interconversions et la méthionine"
  ],
  "20": [
    "le rôle énergétique des acides aminés"
  ],
  "21": [
    "les besoins en acides aminés indispensables"
  ],
  "22": [
    "le rôle structural des acides aminés"
  ],
  "23": [
    "le cycle de l’uréogenèse"
  ],
  "24": [
    "les interconversions et la méthionine"
  ],
  "25": [
    "le rôle énergétique des acides aminés"
  ],
  "26": [
    "les besoins en acides aminés indispensables"
  ],
  "27": [
    "le rôle structural des acides aminés"
  ],
  "28": [
    "le cycle de l’uréogenèse"
  ],
  "29": [
    "les interconversions et la méthionine"
  ],
  "30": [
    "le rôle énergétique des acides aminés"
  ]
};

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "besoins-metabolisme-1",
    "title": "Besoins en acides aminés",
    "description": "Identifier les notions essentielles.",
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
    "slug": "besoins-metabolisme-2",
    "title": "Intermédiaires métaboliques",
    "description": "Appliquer et comparer les notions du cours.",
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
    "slug": "besoins-metabolisme-3",
    "title": "Raisonnement nutritionnel et énergétique",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 1,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères essentiels",
        "sharedStatement": "Les questions suivantes portent sur les principaux repères de la section.",
        "questionOrders": [
          21,
          22,
          23
        ]
      },
      {
        "type": "GROUP",
        "title": "Structure et fonction",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          24,
          25,
          26
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications",
        "sharedStatement": "Les questions suivantes mobilisent les notions dans des situations biologiques ou médicales.",
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
    "question": "À propos de les besoins en acides aminés indispensables :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-aa-needs"
    },
    "choices": [
      "Histidine et arginine sont semi-essentielles au cours de la croissance.",
      "Tous les acides aminés non essentiels sont absents des aliments.",
      "Leucine, thréonine, lysine et tryptophane sont cités.",
      "Les acides aminés essentiels doivent être apportés par l’alimentation."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les besoins associent synthèse endogène et apport alimentaire, avec un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Vrai. Histidine et arginine sont semi-essentielles au cours de la croissance.",
      "Faux. L’alimentation peut aussi les apporter.",
      "Vrai. Leucine, thréonine, lysine et tryptophane sont cités.",
      "Vrai. Les acides aminés essentiels doivent être apportés par l’alimentation."
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le rôle structural des acides aminés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-structural-roles"
    },
    "choices": [
      "Les acides aminés ne participent jamais aux protéines.",
      "Ils sont les éléments de base des peptides et protéines.",
      "Vingt acides aminés sont pris en compte par le code génétique.",
      "Le code génétique utilise environ 500 acides aminés."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les acides aminés servent à la synthèse protéique et peuvent aussi entrer dans d’autres biomolécules.",
    "choiceExplanations": [
      "Faux. Ils en sont les constituants.",
      "Vrai. Ils sont les éléments de base des peptides et protéines.",
      "Vrai. Vingt acides aminés sont pris en compte par le code génétique.",
      "Faux. La fiche en retient 20 protéinogènes."
    ]
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le cycle de l’uréogenèse :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "urea-cycle-aa"
    },
    "choices": [
      "Le cycle permet de détoxifier l’ammoniaque.",
      "Des acides aminés non protéinogènes peuvent être des intermédiaires essentiels.",
      "Citrulline, ornithine et arginine participent au cycle de l’urée.",
      "L’ammoniaque est stocké sans détoxification."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "L’uréogenèse illustre l’utilisation d’acides aminés comme intermédiaires de détoxification.",
    "choiceExplanations": [
      "Vrai. Le cycle permet de détoxifier l’ammoniaque.",
      "Vrai. Des acides aminés non protéinogènes peuvent être des intermédiaires essentiels.",
      "Vrai. Citrulline, ornithine et arginine participent au cycle de l’urée.",
      "Faux. Il est toxique et converti en urée."
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les interconversions et la méthionine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "transamination-methionine"
    },
    "choices": [
      "L’oxaloacétate n’appartient pas au métabolisme intermédiaire.",
      "Une transamination est catalysée par une aminotransférase.",
      "L’homocystéine est transformée en méthionine uniquement dans le sens cité.",
      "La méthionine peut donner un groupement méthyle."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les réactions d’interconversion relient les acides aminés aux intermédiaires du métabolisme.",
    "choiceExplanations": [
      "Faux. Il est un intermédiaire du cycle de Krebs.",
      "Vrai. Une transamination est catalysée par une aminotransférase.",
      "Faux. La fiche présente la transformation méthionine vers homocystéine.",
      "Vrai. La méthionine peut donner un groupement méthyle."
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le rôle énergétique des acides aminés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucogenic-ketogenic-aa"
    },
    "choices": [
      "Les acides aminés cétoformateurs peuvent donner acétyl-CoA ou acétoacétyl-CoA.",
      "Un acide aminé glucoformateur ne peut jamais conduire au glucose.",
      "Leur catabolisme peut participer à la production d’énergie.",
      "Les acides aminés glucoformateurs peuvent alimenter la néoglucogenèse."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les squelettes carbonés des acides aminés peuvent rejoindre la néoglucogenèse ou la cétogenèse.",
    "choiceExplanations": [
      "Vrai. Les acides aminés cétoformateurs peuvent donner acétyl-CoA ou acétoacétyl-CoA.",
      "Faux. Il peut alimenter la néoglucogenèse.",
      "Vrai. Leur catabolisme peut participer à la production d’énergie.",
      "Vrai. Les acides aminés glucoformateurs peuvent alimenter la néoglucogenèse."
    ]
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les besoins en acides aminés indispensables :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-aa-needs"
    },
    "choices": [
      "Leucine, thréonine, lysine et tryptophane sont cités.",
      "La ration alimentaire n’apporte aucun acide aminé.",
      "Les acides aminés essentiels sont synthétisés sans limite par l’Homme.",
      "Histidine et arginine sont semi-essentielles au cours de la croissance."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les besoins associent synthèse endogène et apport alimentaire, avec un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Vrai. Leucine, thréonine, lysine et tryptophane sont cités.",
      "Faux. Elle demeure une source prépondérante.",
      "Faux. Ils doivent être apportés.",
      "Vrai. Histidine et arginine sont semi-essentielles au cours de la croissance."
    ]
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le rôle structural des acides aminés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-structural-roles"
    },
    "choices": [
      "Vingt acides aminés sont pris en compte par le code génétique.",
      "La sérine entre dans la composition de la phosphatidylsérine.",
      "Ils sont reliés par des liaisons peptidiques.",
      "La liaison entre résidus est une liaison osidique."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les acides aminés servent à la synthèse protéique et peuvent aussi entrer dans d’autres biomolécules.",
    "choiceExplanations": [
      "Vrai. Vingt acides aminés sont pris en compte par le code génétique.",
      "Vrai. La sérine entre dans la composition de la phosphatidylsérine.",
      "Vrai. Ils sont reliés par des liaisons peptidiques.",
      "Faux. C’est une liaison peptidique."
    ]
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le cycle de l’uréogenèse :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "urea-cycle-aa"
    },
    "choices": [
      "Seuls les acides aminés codés peuvent avoir un rôle métabolique.",
      "L’ornithine est un acide gras.",
      "Des acides aminés non protéinogènes peuvent être des intermédiaires essentiels.",
      "Citrulline, ornithine et arginine participent au cycle de l’urée."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’uréogenèse illustre l’utilisation d’acides aminés comme intermédiaires de détoxification.",
    "choiceExplanations": [
      "Faux. Des acides aminés non codés y participent.",
      "Faux. C’est un acide aminé intermédiaire.",
      "Vrai. Des acides aminés non protéinogènes peuvent être des intermédiaires essentiels.",
      "Vrai. Citrulline, ornithine et arginine participent au cycle de l’urée."
    ]
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les interconversions et la méthionine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "transamination-methionine"
    },
    "choices": [
      "Elle peut être transformée en homocystéine.",
      "La transamination est catalysée par une lipase.",
      "Aspartate et 2-oxoglutarate peuvent donner oxaloacétate et glutamate.",
      "La méthionine peut donner un groupement méthyle."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les réactions d’interconversion relient les acides aminés aux intermédiaires du métabolisme.",
    "choiceExplanations": [
      "Vrai. Elle peut être transformée en homocystéine.",
      "Faux. Elle est catalysée par une aminotransférase.",
      "Vrai. Aspartate et 2-oxoglutarate peuvent donner oxaloacétate et glutamate.",
      "Vrai. La méthionine peut donner un groupement méthyle."
    ]
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le rôle énergétique des acides aminés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucogenic-ketogenic-aa"
    },
    "choices": [
      "Les acides aminés sont stockés indéfiniment sous forme libre.",
      "Les acides aminés cétoformateurs donnent uniquement du glycogène.",
      "Les acides aminés cétoformateurs peuvent donner acétyl-CoA ou acétoacétyl-CoA.",
      "Leur catabolisme peut participer à la production d’énergie."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les squelettes carbonés des acides aminés peuvent rejoindre la néoglucogenèse ou la cétogenèse.",
    "choiceExplanations": [
      "Faux. Ils sont utilisés ou transformés.",
      "Faux. Ils peuvent donner acétyl-CoA ou acétoacétyl-CoA.",
      "Vrai. Les acides aminés cétoformateurs peuvent donner acétyl-CoA ou acétoacétyl-CoA.",
      "Vrai. Leur catabolisme peut participer à la production d’énergie."
    ]
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les besoins en acides aminés indispensables, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-aa-needs"
    },
    "choices": [
      "Leucine, thréonine, lysine et tryptophane sont cités.",
      "Les acides aminés essentiels sont synthétisés sans limite par l’Homme.",
      "Tous les acides aminés non essentiels sont absents des aliments.",
      "Les acides aminés essentiels doivent être apportés par l’alimentation."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les besoins associent synthèse endogène et apport alimentaire, avec un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Vrai. Leucine, thréonine, lysine et tryptophane sont cités.",
      "Faux. Ils doivent être apportés.",
      "Faux. L’alimentation peut aussi les apporter.",
      "Vrai. Les acides aminés essentiels doivent être apportés par l’alimentation."
    ]
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le rôle structural des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-structural-roles"
    },
    "choices": [
      "Le code génétique utilise environ 500 acides aminés.",
      "La sérine entre dans la composition de la phosphatidylsérine.",
      "La liaison entre résidus est une liaison osidique.",
      "Vingt acides aminés sont pris en compte par le code génétique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les acides aminés servent à la synthèse protéique et peuvent aussi entrer dans d’autres biomolécules.",
    "choiceExplanations": [
      "Faux. La fiche en retient 20 protéinogènes.",
      "Vrai. La sérine entre dans la composition de la phosphatidylsérine.",
      "Faux. C’est une liaison peptidique.",
      "Vrai. Vingt acides aminés sont pris en compte par le code génétique."
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le cycle de l’uréogenèse, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "urea-cycle-aa"
    },
    "choices": [
      "L’ammoniaque est stocké sans détoxification.",
      "Des acides aminés non protéinogènes peuvent être des intermédiaires essentiels.",
      "L’azote est éliminé sous forme d’urée.",
      "Le cycle de l’urée produit du glucose à partir de l’ammoniaque."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’uréogenèse illustre l’utilisation d’acides aminés comme intermédiaires de détoxification.",
    "choiceExplanations": [
      "Faux. Il est toxique et converti en urée.",
      "Vrai. Des acides aminés non protéinogènes peuvent être des intermédiaires essentiels.",
      "Vrai. L’azote est éliminé sous forme d’urée.",
      "Faux. Il produit de l’urée pour éliminer l’azote."
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les interconversions et la méthionine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "transamination-methionine"
    },
    "choices": [
      "Aspartate et 2-oxoglutarate peuvent donner oxaloacétate et glutamate.",
      "L’homocystéine est transformée en méthionine uniquement dans le sens cité.",
      "La méthionine peut donner un groupement méthyle.",
      "La méthionine est dépourvue de rôle dans les transferts de méthyle."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les réactions d’interconversion relient les acides aminés aux intermédiaires du métabolisme.",
    "choiceExplanations": [
      "Vrai. Aspartate et 2-oxoglutarate peuvent donner oxaloacétate et glutamate.",
      "Faux. La fiche présente la transformation méthionine vers homocystéine.",
      "Vrai. La méthionine peut donner un groupement méthyle.",
      "Faux. Elle est citée comme donneur de méthyle."
    ]
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le rôle énergétique des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucogenic-ketogenic-aa"
    },
    "choices": [
      "Les acides aminés en excès ne sont pas stockés comme tels.",
      "Un acide aminé glucoformateur ne peut jamais conduire au glucose.",
      "Leur catabolisme peut participer à la production d’énergie.",
      "Les acides aminés sont stockés indéfiniment sous forme libre."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les squelettes carbonés des acides aminés peuvent rejoindre la néoglucogenèse ou la cétogenèse.",
    "choiceExplanations": [
      "Vrai. Les acides aminés en excès ne sont pas stockés comme tels.",
      "Faux. Il peut alimenter la néoglucogenèse.",
      "Vrai. Leur catabolisme peut participer à la production d’énergie.",
      "Faux. Ils sont utilisés ou transformés."
    ]
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les besoins en acides aminés indispensables, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-aa-needs"
    },
    "choices": [
      "La ration alimentaire n’apporte aucun acide aminé.",
      "Leucine, thréonine, lysine et tryptophane sont cités.",
      "Tous les acides aminés non essentiels sont absents des aliments.",
      "Histidine et arginine sont semi-essentielles au cours de la croissance."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les besoins associent synthèse endogène et apport alimentaire, avec un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Faux. Elle demeure une source prépondérante.",
      "Vrai. Leucine, thréonine, lysine et tryptophane sont cités.",
      "Faux. L’alimentation peut aussi les apporter.",
      "Vrai. Histidine et arginine sont semi-essentielles au cours de la croissance."
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le rôle structural des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-structural-roles"
    },
    "choices": [
      "La liaison entre résidus est une liaison osidique.",
      "Ils sont les éléments de base des peptides et protéines.",
      "Le code génétique utilise environ 500 acides aminés.",
      "Vingt acides aminés sont pris en compte par le code génétique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les acides aminés servent à la synthèse protéique et peuvent aussi entrer dans d’autres biomolécules.",
    "choiceExplanations": [
      "Faux. C’est une liaison peptidique.",
      "Vrai. Ils sont les éléments de base des peptides et protéines.",
      "Faux. La fiche en retient 20 protéinogènes.",
      "Vrai. Vingt acides aminés sont pris en compte par le code génétique."
    ]
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le cycle de l’uréogenèse, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "urea-cycle-aa"
    },
    "choices": [
      "L’ornithine est un acide gras.",
      "Seuls les acides aminés codés peuvent avoir un rôle métabolique.",
      "Des acides aminés non protéinogènes peuvent être des intermédiaires essentiels.",
      "Citrulline, ornithine et arginine participent au cycle de l’urée."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’uréogenèse illustre l’utilisation d’acides aminés comme intermédiaires de détoxification.",
    "choiceExplanations": [
      "Faux. C’est un acide aminé intermédiaire.",
      "Faux. Des acides aminés non codés y participent.",
      "Vrai. Des acides aminés non protéinogènes peuvent être des intermédiaires essentiels.",
      "Vrai. Citrulline, ornithine et arginine participent au cycle de l’urée."
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les interconversions et la méthionine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "transamination-methionine"
    },
    "choices": [
      "Une transamination est catalysée par une aminotransférase.",
      "La transamination est catalysée par une lipase.",
      "La méthionine peut donner un groupement méthyle.",
      "La méthionine est dépourvue de rôle dans les transferts de méthyle."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les réactions d’interconversion relient les acides aminés aux intermédiaires du métabolisme.",
    "choiceExplanations": [
      "Vrai. Une transamination est catalysée par une aminotransférase.",
      "Faux. Elle est catalysée par une aminotransférase.",
      "Vrai. La méthionine peut donner un groupement méthyle.",
      "Faux. Elle est citée comme donneur de méthyle."
    ]
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le rôle énergétique des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucogenic-ketogenic-aa"
    },
    "choices": [
      "Leur catabolisme peut participer à la production d’énergie.",
      "Le catabolisme des acides aminés n’a aucun lien avec l’énergie.",
      "Les acides aminés cétoformateurs peuvent donner acétyl-CoA ou acétoacétyl-CoA.",
      "Les acides aminés cétoformateurs donnent uniquement du glycogène."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les squelettes carbonés des acides aminés peuvent rejoindre la néoglucogenèse ou la cétogenèse.",
    "choiceExplanations": [
      "Vrai. Leur catabolisme peut participer à la production d’énergie.",
      "Faux. Il peut alimenter le métabolisme énergétique.",
      "Vrai. Les acides aminés cétoformateurs peuvent donner acétyl-CoA ou acétoacétyl-CoA.",
      "Faux. Ils peuvent donner acétyl-CoA ou acétoacétyl-CoA."
    ]
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les besoins en acides aminés indispensables. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-aa-needs"
    },
    "choices": [
      "Tous les acides aminés non essentiels sont absents des aliments.",
      "Phénylalanine, valine, méthionine et isoleucine sont citées.",
      "La ration alimentaire n’apporte aucun acide aminé.",
      "Les acides aminés essentiels doivent être apportés par l’alimentation."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les besoins associent synthèse endogène et apport alimentaire, avec un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Faux. L’alimentation peut aussi les apporter.",
      "Vrai. Phénylalanine, valine, méthionine et isoleucine sont citées.",
      "Faux. Elle demeure une source prépondérante.",
      "Vrai. Les acides aminés essentiels doivent être apportés par l’alimentation."
    ]
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le rôle structural des acides aminés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-structural-roles"
    },
    "choices": [
      "La sérine entre dans la composition de la phosphatidylsérine.",
      "Le code génétique utilise environ 500 acides aminés.",
      "Ils sont les éléments de base des peptides et protéines.",
      "Les acides aminés ne participent jamais aux protéines."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les acides aminés servent à la synthèse protéique et peuvent aussi entrer dans d’autres biomolécules.",
    "choiceExplanations": [
      "Vrai. La sérine entre dans la composition de la phosphatidylsérine.",
      "Faux. La fiche en retient 20 protéinogènes.",
      "Vrai. Ils sont les éléments de base des peptides et protéines.",
      "Faux. Ils en sont les constituants."
    ]
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le cycle de l’uréogenèse. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "urea-cycle-aa"
    },
    "choices": [
      "L’azote est éliminé sous forme d’urée.",
      "L’ammoniaque est stocké sans détoxification.",
      "Le cycle permet de détoxifier l’ammoniaque.",
      "L’ornithine est un acide gras."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’uréogenèse illustre l’utilisation d’acides aminés comme intermédiaires de détoxification.",
    "choiceExplanations": [
      "Vrai. L’azote est éliminé sous forme d’urée.",
      "Faux. Il est toxique et converti en urée.",
      "Vrai. Le cycle permet de détoxifier l’ammoniaque.",
      "Faux. C’est un acide aminé intermédiaire."
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les interconversions et la méthionine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "transamination-methionine"
    },
    "choices": [
      "La méthionine est dépourvue de rôle dans les transferts de méthyle.",
      "L’homocystéine est transformée en méthionine uniquement dans le sens cité.",
      "Une transamination est catalysée par une aminotransférase.",
      "Elle peut être transformée en homocystéine."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les réactions d’interconversion relient les acides aminés aux intermédiaires du métabolisme.",
    "choiceExplanations": [
      "Faux. Elle est citée comme donneur de méthyle.",
      "Faux. La fiche présente la transformation méthionine vers homocystéine.",
      "Vrai. Une transamination est catalysée par une aminotransférase.",
      "Vrai. Elle peut être transformée en homocystéine."
    ]
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le rôle énergétique des acides aminés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucogenic-ketogenic-aa"
    },
    "choices": [
      "Les acides aminés cétoformateurs donnent uniquement du glycogène.",
      "Les acides aminés en excès ne sont pas stockés comme tels.",
      "Les acides aminés cétoformateurs peuvent donner acétyl-CoA ou acétoacétyl-CoA.",
      "Un acide aminé glucoformateur ne peut jamais conduire au glucose."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les squelettes carbonés des acides aminés peuvent rejoindre la néoglucogenèse ou la cétogenèse.",
    "choiceExplanations": [
      "Faux. Ils peuvent donner acétyl-CoA ou acétoacétyl-CoA.",
      "Vrai. Les acides aminés en excès ne sont pas stockés comme tels.",
      "Vrai. Les acides aminés cétoformateurs peuvent donner acétyl-CoA ou acétoacétyl-CoA.",
      "Faux. Il peut alimenter la néoglucogenèse."
    ]
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les besoins en acides aminés indispensables. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-aa-needs"
    },
    "choices": [
      "Leucine, thréonine, lysine et tryptophane sont cités.",
      "Phénylalanine, valine, méthionine et isoleucine sont citées.",
      "Histidine et arginine sont décrites comme inutiles à la croissance.",
      "La ration alimentaire n’apporte aucun acide aminé."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les besoins associent synthèse endogène et apport alimentaire, avec un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Vrai. Leucine, thréonine, lysine et tryptophane sont cités.",
      "Vrai. Phénylalanine, valine, méthionine et isoleucine sont citées.",
      "Faux. Elles sont semi-essentielles pendant la croissance.",
      "Faux. Elle demeure une source prépondérante."
    ]
  },
  {
    "order": 27,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le rôle structural des acides aminés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-structural-roles"
    },
    "choices": [
      "La liaison entre résidus est une liaison osidique.",
      "Ils sont reliés par des liaisons peptidiques.",
      "La sérine entre dans la composition de la phosphatidylsérine.",
      "Le code génétique utilise environ 500 acides aminés."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les acides aminés servent à la synthèse protéique et peuvent aussi entrer dans d’autres biomolécules.",
    "choiceExplanations": [
      "Faux. C’est une liaison peptidique.",
      "Vrai. Ils sont reliés par des liaisons peptidiques.",
      "Vrai. La sérine entre dans la composition de la phosphatidylsérine.",
      "Faux. La fiche en retient 20 protéinogènes."
    ]
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le cycle de l’uréogenèse. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "urea-cycle-aa"
    },
    "choices": [
      "Le cycle de l’urée produit du glucose à partir de l’ammoniaque.",
      "Citrulline, ornithine et arginine participent au cycle de l’urée.",
      "Des acides aminés non protéinogènes peuvent être des intermédiaires essentiels.",
      "L’ornithine est un acide gras."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’uréogenèse illustre l’utilisation d’acides aminés comme intermédiaires de détoxification.",
    "choiceExplanations": [
      "Faux. Il produit de l’urée pour éliminer l’azote.",
      "Vrai. Citrulline, ornithine et arginine participent au cycle de l’urée.",
      "Vrai. Des acides aminés non protéinogènes peuvent être des intermédiaires essentiels.",
      "Faux. C’est un acide aminé intermédiaire."
    ]
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les interconversions et la méthionine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "transamination-methionine"
    },
    "choices": [
      "L’oxaloacétate n’appartient pas au métabolisme intermédiaire.",
      "Aspartate et 2-oxoglutarate peuvent donner oxaloacétate et glutamate.",
      "L’homocystéine est transformée en méthionine uniquement dans le sens cité.",
      "Une transamination est catalysée par une aminotransférase."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les réactions d’interconversion relient les acides aminés aux intermédiaires du métabolisme.",
    "choiceExplanations": [
      "Faux. Il est un intermédiaire du cycle de Krebs.",
      "Vrai. Aspartate et 2-oxoglutarate peuvent donner oxaloacétate et glutamate.",
      "Faux. La fiche présente la transformation méthionine vers homocystéine.",
      "Vrai. Une transamination est catalysée par une aminotransférase."
    ]
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le rôle énergétique des acides aminés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucogenic-ketogenic-aa"
    },
    "choices": [
      "Leur catabolisme peut participer à la production d’énergie.",
      "Le catabolisme des acides aminés n’a aucun lien avec l’énergie.",
      "Les acides aminés en excès ne sont pas stockés comme tels.",
      "Un acide aminé glucoformateur ne peut jamais conduire au glucose."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les squelettes carbonés des acides aminés peuvent rejoindre la néoglucogenèse ou la cétogenèse.",
    "choiceExplanations": [
      "Vrai. Leur catabolisme peut participer à la production d’énergie.",
      "Faux. Il peut alimenter le métabolisme énergétique.",
      "Vrai. Les acides aminés en excès ne sont pas stockés comme tels.",
      "Faux. Il peut alimenter la néoglucogenèse."
    ]
  }
];
