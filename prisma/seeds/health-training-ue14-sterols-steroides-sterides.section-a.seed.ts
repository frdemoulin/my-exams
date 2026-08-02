import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "1": [
    "le noyau stérane"
  ],
  "2": [
    "les noms du noyau stérane"
  ],
  "3": [
    "la numérotation du noyau stérane"
  ],
  "4": [
    "les carbones asymétriques du stérane"
  ],
  "5": [
    "la définition des stérols"
  ],
  "6": [
    "la définition des stérides"
  ],
  "7": [
    "la définition des stéroïdes"
  ],
  "8": [
    "la relation stérol-stéride"
  ],
  "9": [
    "la structure polycyclique des stéroïdes"
  ],
  "10": [
    "la distinction entre stérols, stérides et stéroïdes"
  ],
  "11": [
    "le noyau stérane"
  ],
  "12": [
    "les noms du noyau stérane"
  ],
  "13": [
    "la numérotation du noyau stérane"
  ],
  "14": [
    "les carbones asymétriques du stérane"
  ],
  "15": [
    "la définition des stérols"
  ],
  "16": [
    "la définition des stérides"
  ],
  "17": [
    "la définition des stéroïdes"
  ],
  "18": [
    "la relation stérol-stéride"
  ],
  "19": [
    "la structure polycyclique des stéroïdes"
  ],
  "20": [
    "la distinction entre stérols, stérides et stéroïdes"
  ],
  "21": [
    "le noyau stérane"
  ],
  "22": [
    "les noms du noyau stérane"
  ],
  "23": [
    "la numérotation du noyau stérane"
  ],
  "24": [
    "les carbones asymétriques du stérane"
  ],
  "25": [
    "la définition des stérols"
  ],
  "26": [
    "la définition des stérides"
  ],
  "27": [
    "la définition des stéroïdes"
  ],
  "28": [
    "la relation stérol-stéride"
  ],
  "29": [
    "la structure polycyclique des stéroïdes"
  ],
  "30": [
    "la distinction entre stérols, stérides et stéroïdes"
  ]
};

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "sterane-families-fondamentaux",
    "title": "Noyau stérane",
    "description": "Acquérir les notions fondamentales de la section.",
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
    "slug": "sterane-families-applications",
    "title": "Stérols, stérides et stéroïdes",
    "description": "Appliquer et comparer les notions de la section.",
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
    "slug": "sterane-families-raisonnement",
    "title": "Raisonnement structural sur les stéroïdes",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 1,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères structuraux",
        "sharedStatement": "Les questions suivantes mobilisent les principaux repères structuraux de la section.",
        "questionOrders": [
          21,
          22,
          23
        ]
      },
      {
        "type": "GROUP",
        "title": "Propriétés et fonctions",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          24,
          25,
          26
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques et médicales",
        "sharedStatement": "Les questions suivantes replacent les notions dans leur contexte biologique ou médical.",
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
    "question": "À propos de le noyau stérane :",
    "choices": [
      "Le cycle D a cinq carbones.",
      "Il comporte cinq cycles indépendants.",
      "Il est un alcane quadricyclique.",
      "Il comporte quatre cycles fusionnés."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le noyau stérane associe trois cycles C6 et un cycle C5.",
    "choiceExplanations": [
      "Vrai. Le cycle D a cinq carbones.",
      "Faux. Il comporte quatre cycles fusionnés.",
      "Vrai. Il est un alcane quadricyclique.",
      "Vrai. Il comporte quatre cycles fusionnés."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane"
    }
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les noms du noyau stérane :",
    "choices": [
      "Les cycles sont nommés A à D.",
      "Le terme gonane peut être utilisé selon la configuration.",
      "Cyclopentanoperhydrophénanthrène est un autre nom.",
      "Les cycles sont nommés E à H."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le noyau stérane ou gonane est la charpente des stéroïdes.",
    "choiceExplanations": [
      "Vrai. Les cycles sont nommés A à D.",
      "Vrai. Le terme gonane peut être utilisé selon la configuration.",
      "Vrai. Cyclopentanoperhydrophénanthrène est un autre nom.",
      "Faux. Ils sont nommés A à D."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane"
    }
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la numérotation du noyau stérane :",
    "choices": [
      "Le cycle D est parcouru dans le sens antihoraire.",
      "Le cycle C est parcouru dans le sens horaire.",
      "C est parcouru comme A et B.",
      "A et B sont parcourus dans le sens antihoraire."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La numérotation suit un trajet conventionnel différent selon les cycles.",
    "choiceExplanations": [
      "Vrai. Le cycle D est parcouru dans le sens antihoraire.",
      "Vrai. Le cycle C est parcouru dans le sens horaire.",
      "Faux. C est parcouru dans le sens opposé.",
      "Vrai. A et B sont parcourus dans le sens antihoraire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane-numbering"
    }
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les carbones asymétriques du stérane :",
    "choices": [
      "La stéréochimie est sans effet.",
      "Ils se situent aux jonctions des cycles.",
      "La stéréochimie conditionne la géométrie.",
      "Les positions sont 5, 8, 9, 10, 13 et 14."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les jonctions de cycles créent six centres stéréogènes dans le noyau de référence.",
    "choiceExplanations": [
      "Faux. Elle détermine les jonctions.",
      "Vrai. Ils se situent aux jonctions des cycles.",
      "Vrai. La stéréochimie conditionne la géométrie.",
      "Vrai. Les positions sont 5, 8, 9, 10, 13 et 14."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane-numbering"
    }
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la définition des stérols :",
    "choices": [
      "Il peut posséder une ou plusieurs doubles liaisons.",
      "Le cholestérol est un acide aminé.",
      "Le C3 porte un groupement hydroxyle.",
      "Un stérol possède un noyau stérane."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les stérols sont des stéroïdes alcooliques portant un OH en C3.",
    "choiceExplanations": [
      "Vrai. Il peut posséder une ou plusieurs doubles liaisons.",
      "Faux. C’est un stérol.",
      "Vrai. Le C3 porte un groupement hydroxyle.",
      "Vrai. Un stérol possède un noyau stérane."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la définition des stérides :",
    "choices": [
      "Ils sont hydrophobes.",
      "Ils ne peuvent exister dans les cellules.",
      "L’acide gras estérifie l’OH du C3.",
      "Un stéride est un ester de stérol."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’estérification du C3 produit une forme hydrophobe de stockage.",
    "choiceExplanations": [
      "Vrai. Ils sont hydrophobes.",
      "Faux. Ils sont présents dans de nombreuses cellules.",
      "Vrai. L’acide gras estérifie l’OH du C3.",
      "Vrai. Un stéride est un ester de stérol."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la définition des stéroïdes :",
    "choices": [
      "Ils dérivent de terpènes.",
      "Le squalène comporte trois carbones.",
      "Ils possèdent un noyau stérane partiellement ou totalement hydrogéné.",
      "Le squalène C30 est un précurseur majeur."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les stéroïdes dérivent de terpènes et partagent le noyau stérane.",
    "choiceExplanations": [
      "Vrai. Ils dérivent de terpènes.",
      "Faux. Il en comporte 30.",
      "Vrai. Ils possèdent un noyau stérane partiellement ou totalement hydrogéné.",
      "Vrai. Le squalène C30 est un précurseur majeur."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la relation stérol-stéride :",
    "choices": [
      "L’estérification rend plus hydrophile.",
      "L’estérification augmente l’hydrophobie.",
      "La réaction facilite le stockage.",
      "Un stéride résulte de l’estérification de cet OH."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La conversion en stéride masque le pôle OH et favorise le stockage.",
    "choiceExplanations": [
      "Faux. Elle rend plus hydrophobe.",
      "Vrai. L’estérification augmente l’hydrophobie.",
      "Vrai. La réaction facilite le stockage.",
      "Vrai. Un stéride résulte de l’estérification de cet OH."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la structure polycyclique des stéroïdes :",
    "choices": [
      "Les cycles sont reliés par de longues chaînes.",
      "Les cycles sont fusionnés.",
      "Cette rigidité influence les propriétés membranaires du cholestérol.",
      "La stéréochimie des jonctions est importante."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le noyau fusionné et rigide contribue aux propriétés des stéroïdes.",
    "choiceExplanations": [
      "Faux. Ils sont fusionnés.",
      "Vrai. Les cycles sont fusionnés.",
      "Vrai. Cette rigidité influence les propriétés membranaires du cholestérol.",
      "Vrai. La stéréochimie des jonctions est importante."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane"
    }
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la distinction entre stérols, stérides et stéroïdes :",
    "choices": [
      "Le cholestérol ne peut jamais être estérifié.",
      "Le cholestérol existe libre ou estérifié.",
      "Le stéroïde est défini par le noyau stérane et ses dérivés.",
      "Le stérol possède un OH en C3."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les trois termes correspondent à des niveaux structuraux distincts.",
    "choiceExplanations": [
      "Faux. Il existe sous forme estérifiée.",
      "Vrai. Le cholestérol existe libre ou estérifié.",
      "Vrai. Le stéroïde est défini par le noyau stérane et ses dérivés.",
      "Vrai. Le stérol possède un OH en C3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le noyau stérane, quelles propositions sont exactes ?",
    "choices": [
      "Les quatre cycles ont six carbones.",
      "Il est un alcane quadricyclique.",
      "Il comporte cinq cycles indépendants.",
      "Il comporte quatre cycles fusionnés."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le noyau stérane associe trois cycles C6 et un cycle C5.",
    "choiceExplanations": [
      "Faux. Le cycle D en a cinq.",
      "Vrai. Il est un alcane quadricyclique.",
      "Faux. Il comporte quatre cycles fusionnés.",
      "Vrai. Il comporte quatre cycles fusionnés."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane"
    }
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les noms du noyau stérane, quelles propositions sont exactes ?",
    "choices": [
      "Cyclopentanoperhydrophénanthrène est un autre nom.",
      "Il forme la base des stéroïdes.",
      "Il ne se retrouve dans aucun lipide.",
      "Il ne possède aucun autre nom."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le noyau stérane ou gonane est la charpente des stéroïdes.",
    "choiceExplanations": [
      "Vrai. Cyclopentanoperhydrophénanthrène est un autre nom.",
      "Vrai. Il forme la base des stéroïdes.",
      "Faux. Il caractérise stérols et stéroïdes.",
      "Faux. Un nom systématique historique est donné."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane"
    }
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la numérotation du noyau stérane, quelles propositions sont exactes ?",
    "choices": [
      "Tous les cycles sont numérotés dans le même sens.",
      "La numérotation commence sur le cycle A.",
      "C est parcouru comme A et B.",
      "Le cycle D est parcouru dans le sens antihoraire."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La numérotation suit un trajet conventionnel différent selon les cycles.",
    "choiceExplanations": [
      "Faux. Le sens varie selon les cycles.",
      "Vrai. La numérotation commence sur le cycle A.",
      "Faux. C est parcouru dans le sens opposé.",
      "Vrai. Le cycle D est parcouru dans le sens antihoraire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane-numbering"
    }
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les carbones asymétriques du stérane, quelles propositions sont exactes ?",
    "choices": [
      "La fiche indique six carbones asymétriques.",
      "La stéréochimie conditionne la géométrie.",
      "Le noyau ne comporte aucun carbone asymétrique.",
      "Tous les carbones sont asymétriques."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les jonctions de cycles créent six centres stéréogènes dans le noyau de référence.",
    "choiceExplanations": [
      "Vrai. La fiche indique six carbones asymétriques.",
      "Vrai. La stéréochimie conditionne la géométrie.",
      "Faux. Il en comporte six dans la référence.",
      "Faux. Seules certaines positions le sont."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane-numbering"
    }
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la définition des stérols, quelles propositions sont exactes ?",
    "choices": [
      "Un stérol est dépourvu de OH.",
      "Le cholestérol est le stérol humain le plus connu.",
      "Le C3 porte un groupement hydroxyle.",
      "Le C3 porte obligatoirement un phosphate."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les stérols sont des stéroïdes alcooliques portant un OH en C3.",
    "choiceExplanations": [
      "Faux. Il porte un OH en C3.",
      "Vrai. Le cholestérol est le stérol humain le plus connu.",
      "Vrai. Le C3 porte un groupement hydroxyle.",
      "Faux. Il porte un hydroxyle."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la définition des stérides, quelles propositions sont exactes ?",
    "choices": [
      "Ils ne contiennent jamais d’acide gras.",
      "Ils sont hydrophobes.",
      "Ils ne peuvent exister dans les cellules.",
      "Les stérides servent au stockage et au transport des stérols."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’estérification du C3 produit une forme hydrophobe de stockage.",
    "choiceExplanations": [
      "Faux. Ils en contiennent un esterifié.",
      "Vrai. Ils sont hydrophobes.",
      "Faux. Ils sont présents dans de nombreuses cellules.",
      "Vrai. Les stérides servent au stockage et au transport des stérols."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la définition des stéroïdes, quelles propositions sont exactes ?",
    "choices": [
      "Ils dérivent uniquement du glucose.",
      "Les hormones stéroïdiennes appartiennent à cette famille.",
      "Le squalène C30 est un précurseur majeur.",
      "Le squalène comporte trois carbones."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les stéroïdes dérivent de terpènes et partagent le noyau stérane.",
    "choiceExplanations": [
      "Faux. Ils dérivent notamment du squalène.",
      "Vrai. Les hormones stéroïdiennes appartiennent à cette famille.",
      "Vrai. Le squalène C30 est un précurseur majeur.",
      "Faux. Il en comporte 30."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la relation stérol-stéride, quelles propositions sont exactes ?",
    "choices": [
      "Un stéride résulte de l’estérification de cet OH.",
      "Le stéride est obtenu par phosphorylation C17.",
      "L’estérification augmente l’hydrophobie.",
      "Stérol et stéride ne sont pas reliés."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La conversion en stéride masque le pôle OH et favorise le stockage.",
    "choiceExplanations": [
      "Vrai. Un stéride résulte de l’estérification de cet OH.",
      "Faux. Il est obtenu par estérification C3.",
      "Vrai. L’estérification augmente l’hydrophobie.",
      "Faux. Le stéride dérive du stérol."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure polycyclique des stéroïdes, quelles propositions sont exactes ?",
    "choices": [
      "Les cycles sont fusionnés.",
      "Cette rigidité influence les propriétés membranaires du cholestérol.",
      "Les cycles sont reliés par de longues chaînes.",
      "La structure n’influence aucune propriété."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le noyau fusionné et rigide contribue aux propriétés des stéroïdes.",
    "choiceExplanations": [
      "Vrai. Les cycles sont fusionnés.",
      "Vrai. Cette rigidité influence les propriétés membranaires du cholestérol.",
      "Faux. Ils sont fusionnés.",
      "Faux. Elle influence notamment la fluidité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane"
    }
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la distinction entre stérols, stérides et stéroïdes, quelles propositions sont exactes ?",
    "choices": [
      "Le cholestérol existe libre ou estérifié.",
      "Un stéroïde ne peut jamais être une hormone.",
      "Le cholestérol ne peut jamais être estérifié.",
      "Le stéride est un ester d’acide gras et de stérol."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les trois termes correspondent à des niveaux structuraux distincts.",
    "choiceExplanations": [
      "Vrai. Le cholestérol existe libre ou estérifié.",
      "Faux. Les hormones stéroïdiennes existent.",
      "Faux. Il existe sous forme estérifiée.",
      "Vrai. Le stéride est un ester d’acide gras et de stérol."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le noyau stérane, quelles propositions sont exactes ?",
    "choices": [
      "Il comporte quatre cycles fusionnés.",
      "Il comporte cinq cycles indépendants.",
      "Les quatre cycles ont six carbones.",
      "Le cycle D a cinq carbones."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le noyau stérane associe trois cycles C6 et un cycle C5.",
    "choiceExplanations": [
      "Vrai. Il comporte quatre cycles fusionnés.",
      "Faux. Il comporte quatre cycles fusionnés.",
      "Faux. Le cycle D en a cinq.",
      "Vrai. Le cycle D a cinq carbones."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane"
    }
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les noms du noyau stérane, quelles propositions sont exactes ?",
    "choices": [
      "Il ne possède aucun autre nom.",
      "Le noyau est aussi appelé glycogène.",
      "Il forme la base des stéroïdes.",
      "Cyclopentanoperhydrophénanthrène est un autre nom."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le noyau stérane ou gonane est la charpente des stéroïdes.",
    "choiceExplanations": [
      "Faux. Un nom systématique historique est donné.",
      "Faux. Gonane est le terme alternatif.",
      "Vrai. Il forme la base des stéroïdes.",
      "Vrai. Cyclopentanoperhydrophénanthrène est un autre nom."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane"
    }
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la numérotation du noyau stérane, quelles propositions sont exactes ?",
    "choices": [
      "La numérotation commence sur le cycle A.",
      "Le cycle D est parcouru dans le sens antihoraire.",
      "La numérotation commence sur D.",
      "Le noyau ne possède aucun numéro."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La numérotation suit un trajet conventionnel différent selon les cycles.",
    "choiceExplanations": [
      "Vrai. La numérotation commence sur le cycle A.",
      "Vrai. Le cycle D est parcouru dans le sens antihoraire.",
      "Faux. Elle commence sur A.",
      "Faux. Une numérotation précise est utilisée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane-numbering"
    }
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les carbones asymétriques du stérane, quelles propositions sont exactes ?",
    "choices": [
      "Les positions sont seulement 1 et 2.",
      "Le noyau ne comporte aucun carbone asymétrique.",
      "Les positions sont 5, 8, 9, 10, 13 et 14.",
      "La fiche indique six carbones asymétriques."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les jonctions de cycles créent six centres stéréogènes dans le noyau de référence.",
    "choiceExplanations": [
      "Faux. Les positions citées sont 5,8,9,10,13,14.",
      "Faux. Il en comporte six dans la référence.",
      "Vrai. Les positions sont 5, 8, 9, 10, 13 et 14.",
      "Vrai. La fiche indique six carbones asymétriques."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane-numbering"
    }
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la définition des stérols, quelles propositions sont exactes ?",
    "choices": [
      "Le cholestérol est un acide aminé.",
      "Il peut posséder une ou plusieurs doubles liaisons.",
      "Un stérol possède un noyau stérane.",
      "Tous les stérols sont des triglycérides."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les stérols sont des stéroïdes alcooliques portant un OH en C3.",
    "choiceExplanations": [
      "Faux. C’est un stérol.",
      "Vrai. Il peut posséder une ou plusieurs doubles liaisons.",
      "Vrai. Un stérol possède un noyau stérane.",
      "Faux. Ils possèdent un noyau stérane."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la définition des stérides, quelles propositions sont exactes ?",
    "choices": [
      "L’acide gras estérifie l’OH du C3.",
      "Un stéride est un stérol libre amphiphile.",
      "Les stérides servent au stockage et au transport des stérols.",
      "L’estérification se fait en C17."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’estérification du C3 produit une forme hydrophobe de stockage.",
    "choiceExplanations": [
      "Vrai. L’acide gras estérifie l’OH du C3.",
      "Faux. Il est estérifié et très hydrophobe.",
      "Vrai. Les stérides servent au stockage et au transport des stérols.",
      "Faux. Elle concerne l’OH C3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 27,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la définition des stéroïdes, quelles propositions sont exactes ?",
    "choices": [
      "Ils sont dépourvus de cycles.",
      "Le squalène C30 est un précurseur majeur.",
      "Les hormones stéroïdiennes appartiennent à cette famille.",
      "Aucune hormone n’est stéroïdienne."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les stéroïdes dérivent de terpènes et partagent le noyau stérane.",
    "choiceExplanations": [
      "Faux. Ils possèdent un noyau polycyclique.",
      "Vrai. Le squalène C30 est un précurseur majeur.",
      "Vrai. Les hormones stéroïdiennes appartiennent à cette famille.",
      "Faux. Plusieurs hormones le sont."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la relation stérol-stéride, quelles propositions sont exactes ?",
    "choices": [
      "Un stérol libre porte un OH en C3.",
      "Stérol et stéride ne sont pas reliés.",
      "La réaction facilite le stockage.",
      "Le stéride conserve un OH libre C3."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La conversion en stéride masque le pôle OH et favorise le stockage.",
    "choiceExplanations": [
      "Vrai. Un stérol libre porte un OH en C3.",
      "Faux. Le stéride dérive du stérol.",
      "Vrai. La réaction facilite le stockage.",
      "Faux. L’OH est estérifié."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure polycyclique des stéroïdes, quelles propositions sont exactes ?",
    "choices": [
      "Les cycles sont reliés par de longues chaînes.",
      "Les cycles sont fusionnés.",
      "Le noyau est aussi flexible qu’un acide gras.",
      "La stéréochimie des jonctions est importante."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le noyau fusionné et rigide contribue aux propriétés des stéroïdes.",
    "choiceExplanations": [
      "Faux. Ils sont fusionnés.",
      "Vrai. Les cycles sont fusionnés.",
      "Faux. Il est relativement rigide.",
      "Vrai. La stéréochimie des jonctions est importante."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane"
    }
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la distinction entre stérols, stérides et stéroïdes, quelles propositions sont exactes ?",
    "choices": [
      "Stérol et stéride sont synonymes.",
      "Le stéride est un ester d’acide gras et de stérol.",
      "Le cholestérol ne peut jamais être estérifié.",
      "Le stérol possède un OH en C3."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les trois termes correspondent à des niveaux structuraux distincts.",
    "choiceExplanations": [
      "Faux. Le stéride est la forme estérifiée.",
      "Vrai. Le stéride est un ester d’acide gras et de stérol.",
      "Faux. Il existe sous forme estérifiée.",
      "Vrai. Le stérol possède un OH en C3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  }
];
