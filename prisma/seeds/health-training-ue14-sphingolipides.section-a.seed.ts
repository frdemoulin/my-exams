import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "1": [
    "la famille des sphingolipides"
  ],
  "2": [
    "la structure de la sphingosine"
  ],
  "3": [
    "le carbone 1 de la sphingosine"
  ],
  "4": [
    "le carbone 2 de la sphingosine"
  ],
  "5": [
    "le carbone 3 et la double liaison"
  ],
  "6": [
    "la formation du céramide"
  ],
  "7": [
    "les acides gras des céramides"
  ],
  "8": [
    "la dégradation des céramides"
  ],
  "9": [
    "les rôles cutanés des céramides"
  ],
  "10": [
    "la signalisation par les céramides"
  ],
  "11": [
    "la famille des sphingolipides"
  ],
  "12": [
    "la structure de la sphingosine"
  ],
  "13": [
    "le carbone 1 de la sphingosine"
  ],
  "14": [
    "le carbone 2 de la sphingosine"
  ],
  "15": [
    "le carbone 3 et la double liaison"
  ],
  "16": [
    "la formation du céramide"
  ],
  "17": [
    "les acides gras des céramides"
  ],
  "18": [
    "la dégradation des céramides"
  ],
  "19": [
    "les rôles cutanés des céramides"
  ],
  "20": [
    "la signalisation par les céramides"
  ],
  "21": [
    "la famille des sphingolipides"
  ],
  "22": [
    "la structure de la sphingosine"
  ],
  "23": [
    "le carbone 1 de la sphingosine"
  ],
  "24": [
    "le carbone 2 de la sphingosine"
  ],
  "25": [
    "le carbone 3 et la double liaison"
  ],
  "26": [
    "la formation du céramide"
  ],
  "27": [
    "les acides gras des céramides"
  ],
  "28": [
    "la dégradation des céramides"
  ],
  "29": [
    "les rôles cutanés des céramides"
  ],
  "30": [
    "la signalisation par les céramides"
  ]
};

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "sphingosine-ceramides-fondamentaux",
    "title": "Sphingosine et fonctions chimiques",
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
    "slug": "sphingosine-ceramides-applications",
    "title": "Formation et dégradation des céramides",
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
    "slug": "sphingosine-ceramides-raisonnement",
    "title": "Céramides, peau et signalisation",
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
    "question": "À propos de la famille des sphingolipides :",
    "choices": [
      "Ils dérivent tous du glycérol.",
      "Ils peuvent être qualifiés d’hétérolipides.",
      "Les sphingolipides sont des lipides complexes.",
      "Leur squelette diffère de celui des glycérophospholipides."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La sphingosine constitue le squelette commun des sphingolipides.",
    "choiceExplanations": [
      "Faux. Ils dérivent de la sphingosine.",
      "Vrai. Ils peuvent être qualifiés d’hétérolipides.",
      "Vrai. Les sphingolipides sont des lipides complexes.",
      "Vrai. Leur squelette diffère de celui des glycérophospholipides."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "family-tree"
    }
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la structure de la sphingosine :",
    "choices": [
      "Elle est un aminodiol.",
      "Elle porte une amine en C2.",
      "La sphingosine comporte 18 carbones.",
      "Elle possède un seul OH en C2."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La sphingosine est un aminodiol C18.",
    "choiceExplanations": [
      "Vrai. Elle est un aminodiol.",
      "Vrai. Elle porte une amine en C2.",
      "Vrai. La sphingosine comporte 18 carbones.",
      "Faux. Les OH sont en C1 et C3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingosine-functions"
    }
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le carbone 1 de la sphingosine :",
    "choices": [
      "Le C1 porte une amide non réactive.",
      "Le substituant en C1 distingue plusieurs familles.",
      "Il peut fixer un groupement glucidique.",
      "Le C1 porte un alcool primaire."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le C1 porte les têtes phosphatées ou glucidiques.",
    "choiceExplanations": [
      "Faux. Il porte un alcool primaire.",
      "Vrai. Le substituant en C1 distingue plusieurs familles.",
      "Vrai. Il peut fixer un groupement glucidique.",
      "Vrai. Le C1 porte un alcool primaire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingosine-functions"
    }
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le carbone 2 de la sphingosine :",
    "choices": [
      "La liaison formée est une amide.",
      "Cette amine peut fixer un acide gras.",
      "L’acylation du C2 forme un céramide.",
      "L’acylation forme un triglycéride."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "L’acylation de l’amine C2 définit le céramide.",
    "choiceExplanations": [
      "Vrai. La liaison formée est une amide.",
      "Vrai. Cette amine peut fixer un acide gras.",
      "Vrai. L’acylation du C2 forme un céramide.",
      "Faux. Elle forme un céramide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-formation"
    }
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le carbone 3 et la double liaison :",
    "choices": [
      "Le C3 est décrit comme non réactif dans la fiche.",
      "La sphingosine est totalement saturée.",
      "Le C3 porte un alcool secondaire.",
      "La sphingosine possède une double liaison C4-C5."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le C3 reste libre et la chaîne contient une double liaison trans.",
    "choiceExplanations": [
      "Vrai. Le C3 est décrit comme non réactif dans la fiche.",
      "Faux. Elle possède une double liaison.",
      "Vrai. Le C3 porte un alcool secondaire.",
      "Vrai. La sphingosine possède une double liaison C4-C5."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingosine-functions"
    }
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la formation du céramide :",
    "choices": [
      "Un céramide associe sphingosine et acide gras.",
      "L’acide gras se fixe en C1 par phosphodiester.",
      "La liaison caractéristique est une amide.",
      "Le céramide est central dans la famille."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La liaison amide entre sphingosine et acide gras forme le céramide.",
    "choiceExplanations": [
      "Vrai. Un céramide associe sphingosine et acide gras.",
      "Faux. Il se fixe à l’amine C2.",
      "Vrai. La liaison caractéristique est une amide.",
      "Vrai. Le céramide est central dans la famille."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-formation"
    }
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides gras des céramides :",
    "choices": [
      "La chaîne acyle contribue à l’hydrophobie.",
      "L’acide lignocérique 24:0 est fréquent.",
      "Ils sont tous oméga 3.",
      "Ils comportent souvent 16 à 24 carbones."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les céramides contiennent souvent un acide gras C16-C24.",
    "choiceExplanations": [
      "Vrai. La chaîne acyle contribue à l’hydrophobie.",
      "Vrai. L’acide lignocérique 24:0 est fréquent.",
      "Faux. La fiche cite surtout le lignocérique saturé.",
      "Vrai. Ils comportent souvent 16 à 24 carbones."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-formation"
    }
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la dégradation des céramides :",
    "choices": [
      "Elle libère de la sphingosine.",
      "La céramidase dégrade les céramides.",
      "Elle hydrolyse la liaison amide.",
      "La céramidase forme un triglycéride."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La céramidase hydrolyse le céramide.",
    "choiceExplanations": [
      "Vrai. Elle libère de la sphingosine.",
      "Vrai. La céramidase dégrade les céramides.",
      "Vrai. Elle hydrolyse la liaison amide.",
      "Faux. Elle hydrolyse le céramide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "catabolism"
    }
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les rôles cutanés des céramides :",
    "choices": [
      "Ils contribuent à la barrière de l’épiderme.",
      "Ils contrôlent l’hydratation.",
      "Ils sont absents de la peau.",
      "Ils participent à la cohésion cutanée."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les céramides sont essentiels à la barrière cutanée.",
    "choiceExplanations": [
      "Vrai. Ils contribuent à la barrière de l’épiderme.",
      "Vrai. Ils contrôlent l’hydratation.",
      "Faux. Ils participent à la barrière cutanée.",
      "Vrai. Ils participent à la cohésion cutanée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "skin-barrier"
    }
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la signalisation par les céramides :",
    "choices": [
      "Les céramides peuvent être des seconds messagers.",
      "Ils interviennent dans la transduction du signal.",
      "Ils stimulent toujours exclusivement la prolifération.",
      "Ils influencent différenciation et prolifération."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les céramides relient structure membranaire et signalisation.",
    "choiceExplanations": [
      "Vrai. Les céramides peuvent être des seconds messagers.",
      "Vrai. Ils interviennent dans la transduction du signal.",
      "Faux. Ils peuvent aussi favoriser l’apoptose.",
      "Vrai. Ils influencent différenciation et prolifération."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-signaling"
    }
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la famille des sphingolipides, quelles propositions sont exactes ?",
    "choices": [
      "Les sphingolipides sont des lipides complexes.",
      "Ils ne contiennent jamais d’acide gras.",
      "Leur squelette diffère de celui des glycérophospholipides.",
      "Ils dérivent tous du glycérol."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La sphingosine constitue le squelette commun des sphingolipides.",
    "choiceExplanations": [
      "Vrai. Les sphingolipides sont des lipides complexes.",
      "Faux. Les céramides en contiennent un.",
      "Vrai. Leur squelette diffère de celui des glycérophospholipides.",
      "Faux. Ils dérivent de la sphingosine."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "family-tree"
    }
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure de la sphingosine, quelles propositions sont exactes ?",
    "choices": [
      "La sphingosine comporte 18 carbones.",
      "Elle porte des OH en C1 et C3.",
      "Elle possède un seul OH en C2.",
      "Elle est un triacylglycérol."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La sphingosine est un aminodiol C18.",
    "choiceExplanations": [
      "Vrai. La sphingosine comporte 18 carbones.",
      "Vrai. Elle porte des OH en C1 et C3.",
      "Faux. Les OH sont en C1 et C3.",
      "Faux. C’est un aminoalcool à longue chaîne."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingosine-functions"
    }
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le carbone 1 de la sphingosine, quelles propositions sont exactes ?",
    "choices": [
      "Le C1 fixe l’acide gras du céramide par amide.",
      "Le C1 ne peut jamais être substitué.",
      "Le C1 porte un alcool primaire.",
      "Il peut fixer un groupement glucidique."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le C1 porte les têtes phosphatées ou glucidiques.",
    "choiceExplanations": [
      "Faux. L’acide gras se fixe sur l’amine C2.",
      "Faux. Il porte les têtes polaires.",
      "Vrai. Le C1 porte un alcool primaire.",
      "Vrai. Il peut fixer un groupement glucidique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingosine-functions"
    }
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le carbone 2 de la sphingosine, quelles propositions sont exactes ?",
    "choices": [
      "Le C2 porte uniquement un phosphate.",
      "Le C2 est non réactif.",
      "L’acylation du C2 forme un céramide.",
      "La liaison formée est une amide."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’acylation de l’amine C2 définit le céramide.",
    "choiceExplanations": [
      "Faux. Il porte une amine.",
      "Faux. Son amine est réactive.",
      "Vrai. L’acylation du C2 forme un céramide.",
      "Vrai. La liaison formée est une amide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-formation"
    }
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le carbone 3 et la double liaison, quelles propositions sont exactes ?",
    "choices": [
      "Le C3 fixe l’acide gras par amide.",
      "La double liaison C4-C5 est trans.",
      "Le C3 porte un alcool secondaire.",
      "La double liaison est C1-C2 cis."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le C3 reste libre et la chaîne contient une double liaison trans.",
    "choiceExplanations": [
      "Faux. L’amide est formée en C2.",
      "Vrai. La double liaison C4-C5 est trans.",
      "Vrai. Le C3 porte un alcool secondaire.",
      "Faux. Elle est C4-C5 trans."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingosine-functions"
    }
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la formation du céramide, quelles propositions sont exactes ?",
    "choices": [
      "Un céramide associe sphingosine et acide gras.",
      "La liaison caractéristique est une amide.",
      "L’acide gras se fixe en C1 par phosphodiester.",
      "La liaison est un pont disulfure."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La liaison amide entre sphingosine et acide gras forme le céramide.",
    "choiceExplanations": [
      "Vrai. Un céramide associe sphingosine et acide gras.",
      "Vrai. La liaison caractéristique est une amide.",
      "Faux. Il se fixe à l’amine C2.",
      "Faux. C’est une amide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-formation"
    }
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides gras des céramides, quelles propositions sont exactes ?",
    "choices": [
      "L’acide lignocérique 24:0 est fréquent.",
      "Ils sont tous oméga 3.",
      "L’acide lignocérique est 4:0.",
      "La chaîne acyle contribue à l’hydrophobie."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les céramides contiennent souvent un acide gras C16-C24.",
    "choiceExplanations": [
      "Vrai. L’acide lignocérique 24:0 est fréquent.",
      "Faux. La fiche cite surtout le lignocérique saturé.",
      "Faux. Il est 24:0.",
      "Vrai. La chaîne acyle contribue à l’hydrophobie."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-formation"
    }
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la dégradation des céramides, quelles propositions sont exactes ?",
    "choices": [
      "Elle libère un acide gras.",
      "Elle libère glycérol et trois acides gras.",
      "Le céramide est indégradable.",
      "Elle hydrolyse la liaison amide."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La céramidase hydrolyse le céramide.",
    "choiceExplanations": [
      "Vrai. Elle libère un acide gras.",
      "Faux. Elle libère sphingosine et un acide gras.",
      "Faux. Il est dégradé enzymatiquement.",
      "Vrai. Elle hydrolyse la liaison amide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "catabolism"
    }
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les rôles cutanés des céramides, quelles propositions sont exactes ?",
    "choices": [
      "Ils augmentent toujours la perte d’eau.",
      "Ils participent à la cohésion cutanée.",
      "Ils n’ont aucun rôle structural.",
      "Ils contribuent à la barrière de l’épiderme."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les céramides sont essentiels à la barrière cutanée.",
    "choiceExplanations": [
      "Faux. Ils contrôlent l’hydratation.",
      "Vrai. Ils participent à la cohésion cutanée.",
      "Faux. Ils sont membranaires.",
      "Vrai. Ils contribuent à la barrière de l’épiderme."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "skin-barrier"
    }
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la signalisation par les céramides, quelles propositions sont exactes ?",
    "choices": [
      "Ils peuvent participer à l’apoptose.",
      "Ils n’ont aucune fonction de signalisation.",
      "Les céramides peuvent être des seconds messagers.",
      "Ils stimulent toujours exclusivement la prolifération."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les céramides relient structure membranaire et signalisation.",
    "choiceExplanations": [
      "Vrai. Ils peuvent participer à l’apoptose.",
      "Faux. Ils peuvent être des seconds messagers.",
      "Vrai. Les céramides peuvent être des seconds messagers.",
      "Faux. Ils peuvent aussi favoriser l’apoptose."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-signaling"
    }
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la famille des sphingolipides, quelles propositions sont exactes ?",
    "choices": [
      "Ils peuvent être qualifiés d’hétérolipides.",
      "Ils dérivent de la sphingosine.",
      "Ils ne contiennent jamais d’acide gras.",
      "Ils dérivent tous du glycérol."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La sphingosine constitue le squelette commun des sphingolipides.",
    "choiceExplanations": [
      "Vrai. Ils peuvent être qualifiés d’hétérolipides.",
      "Vrai. Ils dérivent de la sphingosine.",
      "Faux. Les céramides en contiennent un.",
      "Faux. Ils dérivent de la sphingosine."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "family-tree"
    }
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure de la sphingosine, quelles propositions sont exactes ?",
    "choices": [
      "Elle est un triacylglycérol.",
      "Elle porte une amine en C2.",
      "Elle ne possède aucun azote.",
      "La sphingosine comporte 18 carbones."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La sphingosine est un aminodiol C18.",
    "choiceExplanations": [
      "Faux. C’est un aminoalcool à longue chaîne.",
      "Vrai. Elle porte une amine en C2.",
      "Faux. Elle possède une amine en C2.",
      "Vrai. La sphingosine comporte 18 carbones."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingosine-functions"
    }
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le carbone 1 de la sphingosine, quelles propositions sont exactes ?",
    "choices": [
      "Il peut fixer un groupement glucidique.",
      "Le C1 ne peut jamais être substitué.",
      "Le C1 fixe l’acide gras du céramide par amide.",
      "Le C1 porte un alcool primaire."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le C1 porte les têtes phosphatées ou glucidiques.",
    "choiceExplanations": [
      "Vrai. Il peut fixer un groupement glucidique.",
      "Faux. Il porte les têtes polaires.",
      "Faux. L’acide gras se fixe sur l’amine C2.",
      "Vrai. Le C1 porte un alcool primaire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingosine-functions"
    }
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le carbone 2 de la sphingosine, quelles propositions sont exactes ?",
    "choices": [
      "Le C2 porte uniquement un phosphate.",
      "L’acide gras est fixé par une liaison osidique.",
      "Le C2 porte une fonction amine.",
      "Cette amine peut fixer un acide gras."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’acylation de l’amine C2 définit le céramide.",
    "choiceExplanations": [
      "Faux. Il porte une amine.",
      "Faux. Il est fixé par amide.",
      "Vrai. Le C2 porte une fonction amine.",
      "Vrai. Cette amine peut fixer un acide gras."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-formation"
    }
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le carbone 3 et la double liaison, quelles propositions sont exactes ?",
    "choices": [
      "Le C3 est décrit comme non réactif dans la fiche.",
      "La sphingosine est totalement saturée.",
      "Le C3 fixe l’acide gras par amide.",
      "La sphingosine possède une double liaison C4-C5."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le C3 reste libre et la chaîne contient une double liaison trans.",
    "choiceExplanations": [
      "Vrai. Le C3 est décrit comme non réactif dans la fiche.",
      "Faux. Elle possède une double liaison.",
      "Faux. L’amide est formée en C2.",
      "Vrai. La sphingosine possède une double liaison C4-C5."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingosine-functions"
    }
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la formation du céramide, quelles propositions sont exactes ?",
    "choices": [
      "L’acide gras se fixe en C1 par phosphodiester.",
      "Le carboxyle de l’acide gras réagit avec l’amine C2.",
      "Un céramide associe sphingosine et acide gras.",
      "Il associe glycérol et trois acides gras."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La liaison amide entre sphingosine et acide gras forme le céramide.",
    "choiceExplanations": [
      "Faux. Il se fixe à l’amine C2.",
      "Vrai. Le carboxyle de l’acide gras réagit avec l’amine C2.",
      "Vrai. Un céramide associe sphingosine et acide gras.",
      "Faux. Il associe sphingosine et un acide gras."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-formation"
    }
  },
  {
    "order": 27,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les acides gras des céramides, quelles propositions sont exactes ?",
    "choices": [
      "Ils comportent exclusivement deux carbones.",
      "La chaîne acyle contribue à l’hydrophobie.",
      "Le céramide ne contient aucun acide gras.",
      "L’acide lignocérique 24:0 est fréquent."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les céramides contiennent souvent un acide gras C16-C24.",
    "choiceExplanations": [
      "Faux. Ils sont à longue chaîne.",
      "Vrai. La chaîne acyle contribue à l’hydrophobie.",
      "Faux. Il en contient un.",
      "Vrai. L’acide lignocérique 24:0 est fréquent."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-formation"
    }
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la dégradation des céramides, quelles propositions sont exactes ?",
    "choices": [
      "La céramidase dégrade les céramides.",
      "Elle libère glycérol et trois acides gras.",
      "Le céramide est indégradable.",
      "Elle hydrolyse la liaison amide."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La céramidase hydrolyse le céramide.",
    "choiceExplanations": [
      "Vrai. La céramidase dégrade les céramides.",
      "Faux. Elle libère sphingosine et un acide gras.",
      "Faux. Il est dégradé enzymatiquement.",
      "Vrai. Elle hydrolyse la liaison amide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "catabolism"
    }
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Chez un patient présentant une peau atopique très sèche, quelles propositions sur les céramides sont exactes ?",
    "choices": [
      "Ils participent aux membranes.",
      "Ils contrôlent l’hydratation.",
      "Ils augmentent toujours la perte d’eau.",
      "Ils sont absents de la peau."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les céramides sont essentiels à la barrière cutanée.",
    "choiceExplanations": [
      "Vrai. Ils participent aux membranes.",
      "Vrai. Ils contrôlent l’hydratation.",
      "Faux. Ils contrôlent l’hydratation.",
      "Faux. Ils participent à la barrière cutanée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "skin-barrier"
    }
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la signalisation par les céramides, quelles propositions sont exactes ?",
    "choices": [
      "Ils n’ont aucune fonction de signalisation.",
      "Ils sont uniquement extracellulaires.",
      "Ils peuvent participer à l’apoptose.",
      "Ils interviennent dans la transduction du signal."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les céramides relient structure membranaire et signalisation.",
    "choiceExplanations": [
      "Faux. Ils peuvent être des seconds messagers.",
      "Faux. Ils interviennent dans des signaux intracellulaires.",
      "Vrai. Ils peuvent participer à l’apoptose.",
      "Vrai. Ils interviennent dans la transduction du signal."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-signaling"
    }
  }
];
