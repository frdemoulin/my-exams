import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "91": [
    "le métabolisme des sphingolipides"
  ],
  "92": [
    "la voie sphingomyéline-céramide-sphingosine"
  ],
  "93": [
    "l’accumulation de céramides"
  ],
  "94": [
    "la sphingosine-1-phosphate"
  ],
  "95": [
    "les sphingolipidoses"
  ],
  "96": [
    "la maladie de Gaucher"
  ],
  "97": [
    "la maladie de Fabry"
  ],
  "98": [
    "la maladie de Krabbe"
  ],
  "99": [
    "la maladie de Tay-Sachs"
  ],
  "100": [
    "la logique enzyme-substrat des sphingolipidoses"
  ],
  "101": [
    "le métabolisme des sphingolipides"
  ],
  "102": [
    "la voie sphingomyéline-céramide-sphingosine"
  ],
  "103": [
    "l’accumulation de céramides"
  ],
  "104": [
    "la sphingosine-1-phosphate"
  ],
  "105": [
    "les sphingolipidoses"
  ],
  "106": [
    "la maladie de Gaucher"
  ],
  "107": [
    "la maladie de Fabry"
  ],
  "108": [
    "la maladie de Krabbe"
  ],
  "109": [
    "la maladie de Tay-Sachs"
  ],
  "110": [
    "la logique enzyme-substrat des sphingolipidoses"
  ],
  "111": [
    "le métabolisme des sphingolipides"
  ],
  "112": [
    "la voie sphingomyéline-céramide-sphingosine"
  ],
  "113": [
    "l’accumulation de céramides"
  ],
  "114": [
    "la sphingosine-1-phosphate"
  ],
  "115": [
    "les sphingolipidoses"
  ],
  "116": [
    "la maladie de Gaucher"
  ],
  "117": [
    "la maladie de Fabry"
  ],
  "118": [
    "la maladie de Krabbe"
  ],
  "119": [
    "la maladie de Tay-Sachs"
  ],
  "120": [
    "la logique enzyme-substrat des sphingolipidoses"
  ]
};

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "sphingolipid-metabolism-fondamentaux",
    "title": "Catabolisme des sphingolipides",
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
    "slug": "sphingolipid-metabolism-applications",
    "title": "Sphingolipidoses et accumulations",
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
    "slug": "sphingolipid-metabolism-raisonnement",
    "title": "Raisonnement clinique sur les déficits enzymatiques",
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
    "question": "À propos de le métabolisme des sphingolipides :",
    "choices": [
      "Il comprend un anabolisme.",
      "Il comprend un catabolisme.",
      "Un déficit enzymatique peut provoquer une accumulation.",
      "Il est totalement non enzymatique."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La balance synthèse-dégradation assure l’homéostasie.",
    "choiceExplanations": [
      "Vrai. Il comprend un anabolisme.",
      "Vrai. Il comprend un catabolisme.",
      "Vrai. Un déficit enzymatique peut provoquer une accumulation.",
      "Faux. Il repose sur des enzymes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "metabolic-pathway"
    }
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la voie sphingomyéline-céramide-sphingosine :",
    "choices": [
      "La céramide kinase forme le céramide-1-phosphate.",
      "La sphingosine kinase forme la sphingosine-1-phosphate.",
      "La céramidase forme sphingosine et acide gras.",
      "Aucune phosphorylation n’existe."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le catabolisme et les kinases interconvertissent plusieurs médiateurs.",
    "choiceExplanations": [
      "Vrai. La céramide kinase forme le céramide-1-phosphate.",
      "Vrai. La sphingosine kinase forme la sphingosine-1-phosphate.",
      "Vrai. La céramidase forme sphingosine et acide gras.",
      "Faux. Deux lipides phosphorylés sont représentés."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "metabolic-pathway"
    }
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’accumulation de céramides :",
    "choices": [
      "Les céramides sont des médiateurs.",
      "Elle peut favoriser l’apoptose.",
      "Elle traduit un déséquilibre métabolique.",
      "Elle est sans effet cellulaire."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "L’accumulation de céramides favorise arrêt de croissance et apoptose.",
    "choiceExplanations": [
      "Vrai. Les céramides sont des médiateurs.",
      "Vrai. Elle peut favoriser l’apoptose.",
      "Vrai. Elle traduit un déséquilibre métabolique.",
      "Faux. Les céramides sont actifs."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-signaling"
    }
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la sphingosine-1-phosphate :",
    "choices": [
      "Elle dérive de la sphingosine par phosphorylation.",
      "Son accumulation est associée à un risque de cancer dans la fiche.",
      "Elle intervient dans la signalisation.",
      "C’est un triglycéride."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La sphingosine-1-phosphate est un signal dont l’excès ou le déficit est pathologique.",
    "choiceExplanations": [
      "Vrai. Elle dérive de la sphingosine par phosphorylation.",
      "Vrai. Son accumulation est associée à un risque de cancer dans la fiche.",
      "Vrai. Elle intervient dans la signalisation.",
      "Faux. C’est un sphingolipide phosphorylé."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-signaling"
    }
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les sphingolipidoses :",
    "choices": [
      "Elles concernent la dégradation des sphingolipides.",
      "Le déficit diminue toujours le substrat.",
      "Elles provoquent des maladies d’accumulation.",
      "Ce sont des maladies génétiques rares."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les sphingolipidoses sont des déficits enzymatiques d’accumulation.",
    "choiceExplanations": [
      "Vrai. Elles concernent la dégradation des sphingolipides.",
      "Faux. Il entraîne son accumulation.",
      "Vrai. Elles provoquent des maladies d’accumulation.",
      "Vrai. Ce sont des maladies génétiques rares."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 96,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la maladie de Gaucher :",
    "choices": [
      "Des troubles neurologiques peuvent survenir.",
      "Elle implique un déficit en β-glucosidase.",
      "Elle ne touche jamais la rate.",
      "Elle accumule le glucosylcéramide."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Gaucher associe déficit en β-glucosidase et accumulation de glucosylcéramide.",
    "choiceExplanations": [
      "Vrai. Des troubles neurologiques peuvent survenir.",
      "Vrai. Elle implique un déficit en β-glucosidase.",
      "Faux. La rate est citée.",
      "Vrai. Elle accumule le glucosylcéramide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 97,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la maladie de Fabry :",
    "choices": [
      "Elle implique un déficit en α-galactosidase.",
      "Elle est une maladie acquise fréquente.",
      "Elle peut provoquer des troubles cardiovasculaires.",
      "Elle accumule le trihexosidécéramide."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Fabry associe déficit en α-galactosidase et accumulation spécifique.",
    "choiceExplanations": [
      "Vrai. Elle implique un déficit en α-galactosidase.",
      "Faux. C’est une maladie génétique rare.",
      "Vrai. Elle peut provoquer des troubles cardiovasculaires.",
      "Vrai. Elle accumule le trihexosidécéramide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 98,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la maladie de Krabbe :",
    "choices": [
      "Elle implique un déficit en β-galactosidase.",
      "Elle ne touche jamais le système nerveux.",
      "Elle provoque des troubles neurologiques.",
      "Elle accumule le galactosylcéramide."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Krabbe associe déficit en β-galactosidase et accumulation de galactosylcéramide.",
    "choiceExplanations": [
      "Vrai. Elle implique un déficit en β-galactosidase.",
      "Faux. Elle provoque des troubles neurologiques.",
      "Vrai. Elle provoque des troubles neurologiques.",
      "Vrai. Elle accumule le galactosylcéramide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 99,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la maladie de Tay-Sachs :",
    "choices": [
      "Elle accumule GM2.",
      "Elle est une maladie nutritionnelle.",
      "Elle provoque une maladie neurodégénérative.",
      "Un retard psychomoteur peut apparaître."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Tay-Sachs associe déficit en β-hexosaminidase et accumulation de GM2.",
    "choiceExplanations": [
      "Vrai. Elle accumule GM2.",
      "Faux. C’est une sphingolipidose génétique.",
      "Vrai. Elle provoque une maladie neurodégénérative.",
      "Vrai. Un retard psychomoteur peut apparaître."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la logique enzyme-substrat des sphingolipidoses :",
    "choices": [
      "Aucune n’a d’atteinte neurologique.",
      "Plusieurs maladies touchent le système nerveux.",
      "Le déficit détermine le lipide accumulé.",
      "Les atteintes dépendent des tissus concernés."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La correspondance enzyme-substrat est le raisonnement central.",
    "choiceExplanations": [
      "Faux. Krabbe et Tay-Sachs en ont.",
      "Vrai. Plusieurs maladies touchent le système nerveux.",
      "Vrai. Le déficit détermine le lipide accumulé.",
      "Vrai. Les atteintes dépendent des tissus concernés."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le métabolisme des sphingolipides, quelles propositions sont exactes ?",
    "choices": [
      "Il est totalement non enzymatique.",
      "Un déficit élimine toujours le substrat.",
      "Il comprend un catabolisme.",
      "Il comprend un anabolisme."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La balance synthèse-dégradation assure l’homéostasie.",
    "choiceExplanations": [
      "Faux. Il repose sur des enzymes.",
      "Faux. Il peut provoquer son accumulation.",
      "Vrai. Il comprend un catabolisme.",
      "Vrai. Il comprend un anabolisme."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "metabolic-pathway"
    }
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la voie sphingomyéline-céramide-sphingosine, quelles propositions sont exactes ?",
    "choices": [
      "La sphingomyélinase forme du glycérol.",
      "La céramide kinase forme le céramide-1-phosphate.",
      "La sphingomyélinase forme du céramide.",
      "La sphingosine kinase retire un phosphate."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le catabolisme et les kinases interconvertissent plusieurs médiateurs.",
    "choiceExplanations": [
      "Faux. Elle forme du céramide.",
      "Vrai. La céramide kinase forme le céramide-1-phosphate.",
      "Vrai. La sphingomyélinase forme du céramide.",
      "Faux. Elle en ajoute un."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "metabolic-pathway"
    }
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’accumulation de céramides, quelles propositions sont exactes ?",
    "choices": [
      "Les céramides ne peuvent jamais s’accumuler.",
      "Les céramides sont des médiateurs.",
      "Elle stimule toujours une prolifération illimitée.",
      "Elle peut arrêter la croissance cellulaire."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’accumulation de céramides favorise arrêt de croissance et apoptose.",
    "choiceExplanations": [
      "Faux. Un défaut métabolique peut les accumuler.",
      "Vrai. Les céramides sont des médiateurs.",
      "Faux. Elle peut freiner la croissance.",
      "Vrai. Elle peut arrêter la croissance cellulaire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-signaling"
    }
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la sphingosine-1-phosphate, quelles propositions sont exactes ?",
    "choices": [
      "Son accumulation est associée à un risque de cancer dans la fiche.",
      "Elle est formée uniquement par une phosphatase.",
      "Elle dérive de la sphingosine par phosphorylation.",
      "Elle n’a aucun effet biologique."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La sphingosine-1-phosphate est un signal dont l’excès ou le déficit est pathologique.",
    "choiceExplanations": [
      "Vrai. Son accumulation est associée à un risque de cancer dans la fiche.",
      "Faux. Elle est formée par une kinase.",
      "Vrai. Elle dérive de la sphingosine par phosphorylation.",
      "Faux. C’est un médiateur actif."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-signaling"
    }
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les sphingolipidoses, quelles propositions sont exactes ?",
    "choices": [
      "Elles provoquent des maladies d’accumulation.",
      "Elles concernent uniquement le glycogène.",
      "Ce sont des maladies génétiques rares.",
      "Le déficit diminue toujours le substrat."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les sphingolipidoses sont des déficits enzymatiques d’accumulation.",
    "choiceExplanations": [
      "Vrai. Elles provoquent des maladies d’accumulation.",
      "Faux. Elles concernent les sphingolipides.",
      "Vrai. Ce sont des maladies génétiques rares.",
      "Faux. Il entraîne son accumulation."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la maladie de Gaucher, quelles propositions sont exactes ?",
    "choices": [
      "Elle est due à un excès de β-glucosidase.",
      "Elle peut toucher foie et rate.",
      "Elle ne touche jamais la rate.",
      "Elle implique un déficit en β-glucosidase."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Gaucher associe déficit en β-glucosidase et accumulation de glucosylcéramide.",
    "choiceExplanations": [
      "Faux. Elle est due à un déficit.",
      "Vrai. Elle peut toucher foie et rate.",
      "Faux. La rate est citée.",
      "Vrai. Elle implique un déficit en β-glucosidase."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la maladie de Fabry, quelles propositions sont exactes ?",
    "choices": [
      "Elle n’a aucune atteinte rénale.",
      "Elle accumule le trihexosidécéramide.",
      "Elle peut provoquer des troubles cardiovasculaires.",
      "Elle accumule le galactosylcéramide."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Fabry associe déficit en α-galactosidase et accumulation spécifique.",
    "choiceExplanations": [
      "Faux. Une insuffisance rénale est citée.",
      "Vrai. Elle accumule le trihexosidécéramide.",
      "Vrai. Elle peut provoquer des troubles cardiovasculaires.",
      "Faux. Cela décrit Krabbe."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la maladie de Krabbe, quelles propositions sont exactes ?",
    "choices": [
      "Elle provoque des troubles neurologiques.",
      "Elle est due à un déficit en α-galactosidase.",
      "Elle accumule le glucosylcéramide.",
      "Elle accumule le galactosylcéramide."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Krabbe associe déficit en β-galactosidase et accumulation de galactosylcéramide.",
    "choiceExplanations": [
      "Vrai. Elle provoque des troubles neurologiques.",
      "Faux. Cela décrit Fabry.",
      "Faux. Cela décrit Gaucher.",
      "Vrai. Elle accumule le galactosylcéramide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la maladie de Tay-Sachs, quelles propositions sont exactes ?",
    "choices": [
      "Elle accumule GM2.",
      "Elle est une maladie nutritionnelle.",
      "Elle est due à un déficit en α-galactosidase.",
      "Un retard psychomoteur peut apparaître."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Tay-Sachs associe déficit en β-hexosaminidase et accumulation de GM2.",
    "choiceExplanations": [
      "Vrai. Elle accumule GM2.",
      "Faux. C’est une sphingolipidose génétique.",
      "Faux. Cela décrit Fabry.",
      "Vrai. Un retard psychomoteur peut apparaître."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la logique enzyme-substrat des sphingolipidoses, quelles propositions sont exactes ?",
    "choices": [
      "Toutes accumulent le même lipide.",
      "Le déficit détermine le lipide accumulé.",
      "L’accumulation améliore toujours la fonction.",
      "Le substrat accumulé oriente vers la maladie."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La correspondance enzyme-substrat est le raisonnement central.",
    "choiceExplanations": [
      "Faux. Chaque déficit entraîne une accumulation spécifique.",
      "Vrai. Le déficit détermine le lipide accumulé.",
      "Faux. Elle perturbe les tissus.",
      "Vrai. Le substrat accumulé oriente vers la maladie."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le métabolisme des sphingolipides, quelles propositions sont exactes ?",
    "choices": [
      "Il n’a aucun lien avec les maladies génétiques.",
      "Il ne comprend aucune dégradation.",
      "Il comprend un anabolisme.",
      "Un déficit enzymatique peut provoquer une accumulation."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La balance synthèse-dégradation assure l’homéostasie.",
    "choiceExplanations": [
      "Faux. Plusieurs sphingolipidoses sont génétiques.",
      "Faux. Il comprend un catabolisme.",
      "Vrai. Il comprend un anabolisme.",
      "Vrai. Un déficit enzymatique peut provoquer une accumulation."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "metabolic-pathway"
    }
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la voie sphingomyéline-céramide-sphingosine, quelles propositions sont exactes ?",
    "choices": [
      "La céramidase ajoute un acide gras.",
      "La sphingosine kinase retire un phosphate.",
      "La céramide kinase forme le céramide-1-phosphate.",
      "La sphingomyélinase forme du céramide."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le catabolisme et les kinases interconvertissent plusieurs médiateurs.",
    "choiceExplanations": [
      "Faux. Elle hydrolyse le céramide.",
      "Faux. Elle en ajoute un.",
      "Vrai. La céramide kinase forme le céramide-1-phosphate.",
      "Vrai. La sphingomyélinase forme du céramide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "metabolic-pathway"
    }
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’accumulation de céramides, quelles propositions sont exactes ?",
    "choices": [
      "Les céramides sont des médiateurs.",
      "Elle est sans effet cellulaire.",
      "Elle peut arrêter la croissance cellulaire.",
      "Elle résulte forcément d’un excès de glycérol."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’accumulation de céramides favorise arrêt de croissance et apoptose.",
    "choiceExplanations": [
      "Vrai. Les céramides sont des médiateurs.",
      "Faux. Les céramides sont actifs.",
      "Vrai. Elle peut arrêter la croissance cellulaire.",
      "Faux. Elle concerne le métabolisme sphingolipidique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-signaling"
    }
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une tumeur présente une activation de signaux pro-survie. Quelles propositions sur la sphingosine-1-phosphate sont exactes ?",
    "choices": [
      "Elle n’a aucun effet biologique.",
      "Elle dérive de la sphingosine par phosphorylation.",
      "Son déficit protège toujours le système nerveux.",
      "Son déficit est associé à un risque neurodégénératif."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La sphingosine-1-phosphate est un signal dont l’excès ou le déficit est pathologique.",
    "choiceExplanations": [
      "Faux. C’est un médiateur actif.",
      "Vrai. Elle dérive de la sphingosine par phosphorylation.",
      "Faux. La fiche évoque un risque neurodégénératif.",
      "Vrai. Son déficit est associé à un risque neurodégénératif."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-signaling"
    }
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les sphingolipidoses, quelles propositions sont exactes ?",
    "choices": [
      "Elles sont toutes bénignes.",
      "Le déficit diminue toujours le substrat.",
      "Ce sont des maladies génétiques rares.",
      "Elles concernent la dégradation des sphingolipides."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les sphingolipidoses sont des déficits enzymatiques d’accumulation.",
    "choiceExplanations": [
      "Faux. Elles peuvent être sévères.",
      "Faux. Il entraîne son accumulation.",
      "Vrai. Ce sont des maladies génétiques rares.",
      "Vrai. Elles concernent la dégradation des sphingolipides."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un enfant présente une hépatosplénomégalie avec accumulation de glucosylcéramide. Quelles propositions sont exactes ?",
    "choices": [
      "Elle ne touche jamais la rate.",
      "Elle résulte d’un déficit en α-galactosidase.",
      "Elle accumule le glucosylcéramide.",
      "Elle peut toucher foie et rate."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Gaucher associe déficit en β-glucosidase et accumulation de glucosylcéramide.",
    "choiceExplanations": [
      "Faux. La rate est citée.",
      "Faux. Cela décrit Fabry.",
      "Vrai. Elle accumule le glucosylcéramide.",
      "Vrai. Elle peut toucher foie et rate."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente atteintes cutanées, cardiovasculaires et rénales. Quelles propositions sont exactes ?",
    "choices": [
      "Elle est due à un déficit en β-hexosaminidase.",
      "Elle accumule le galactosylcéramide.",
      "Elle peut provoquer atteintes cutanées et rénales.",
      "Elle accumule le trihexosidécéramide."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Fabry associe déficit en α-galactosidase et accumulation spécifique.",
    "choiceExplanations": [
      "Faux. Cela décrit Tay-Sachs.",
      "Faux. Cela décrit Krabbe.",
      "Vrai. Elle peut provoquer atteintes cutanées et rénales.",
      "Vrai. Elle accumule le trihexosidécéramide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la maladie de Krabbe, quelles propositions sont exactes ?",
    "choices": [
      "Elle accumule le glucosylcéramide.",
      "Elle appartient aux sphingolipidoses.",
      "Elle ne touche jamais le système nerveux.",
      "Elle implique un déficit en β-galactosidase."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Krabbe associe déficit en β-galactosidase et accumulation de galactosylcéramide.",
    "choiceExplanations": [
      "Faux. Cela décrit Gaucher.",
      "Vrai. Elle appartient aux sphingolipidoses.",
      "Faux. Elle provoque des troubles neurologiques.",
      "Vrai. Elle implique un déficit en β-galactosidase."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un nourrisson présente une régression psychomotrice avec accumulation de GM2. Quelles propositions sont exactes ?",
    "choices": [
      "Elle n’a aucun retentissement neurologique.",
      "Elle est due à un déficit en α-galactosidase.",
      "Elle provoque une maladie neurodégénérative.",
      "Elle accumule GM2."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Tay-Sachs associe déficit en β-hexosaminidase et accumulation de GM2.",
    "choiceExplanations": [
      "Faux. Le retentissement neurologique est majeur.",
      "Faux. Cela décrit Fabry.",
      "Vrai. Elle provoque une maladie neurodégénérative.",
      "Vrai. Elle accumule GM2."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la logique enzyme-substrat des sphingolipidoses, quelles propositions sont exactes ?",
    "choices": [
      "Le type d’enzyme n’a aucun intérêt.",
      "L’accumulation améliore toujours la fonction.",
      "Plusieurs maladies touchent le système nerveux.",
      "Le substrat accumulé oriente vers la maladie."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La correspondance enzyme-substrat est le raisonnement central.",
    "choiceExplanations": [
      "Faux. Il est central.",
      "Faux. Elle perturbe les tissus.",
      "Vrai. Plusieurs maladies touchent le système nerveux.",
      "Vrai. Le substrat accumulé oriente vers la maladie."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  }
];
