import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "1": [
    "les acides aminés du monde vivant"
  ],
  "2": [
    "la structure commune d’un acide aminé"
  ],
  "3": [
    "la nomenclature des acides aminés"
  ],
  "4": [
    "les acides aminés essentiels"
  ],
  "5": [
    "l’arginine et l’histidine au cours de la croissance"
  ],
  "6": [
    "les acides aminés du monde vivant"
  ],
  "7": [
    "la structure commune d’un acide aminé"
  ],
  "8": [
    "la nomenclature des acides aminés"
  ],
  "9": [
    "les acides aminés essentiels"
  ],
  "10": [
    "l’arginine et l’histidine au cours de la croissance"
  ],
  "11": [
    "les acides aminés du monde vivant"
  ],
  "12": [
    "la structure commune d’un acide aminé"
  ],
  "13": [
    "la nomenclature des acides aminés"
  ],
  "14": [
    "les acides aminés essentiels"
  ],
  "15": [
    "l’arginine et l’histidine au cours de la croissance"
  ],
  "16": [
    "les acides aminés du monde vivant"
  ],
  "17": [
    "la structure commune d’un acide aminé"
  ],
  "18": [
    "la nomenclature des acides aminés"
  ],
  "19": [
    "les acides aminés essentiels"
  ],
  "20": [
    "l’arginine et l’histidine au cours de la croissance"
  ],
  "21": [
    "les acides aminés du monde vivant"
  ],
  "22": [
    "la structure commune d’un acide aminé"
  ],
  "23": [
    "la nomenclature des acides aminés"
  ],
  "24": [
    "les acides aminés essentiels"
  ],
  "25": [
    "l’arginine et l’histidine au cours de la croissance"
  ],
  "26": [
    "les acides aminés du monde vivant"
  ],
  "27": [
    "la structure commune d’un acide aminé"
  ],
  "28": [
    "la nomenclature des acides aminés"
  ],
  "29": [
    "les acides aminés essentiels"
  ],
  "30": [
    "l’arginine et l’histidine au cours de la croissance"
  ]
};

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "generalites-structure-nomenclature-1",
    "title": "Structure commune des acides aminés",
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
    "slug": "generalites-structure-nomenclature-2",
    "title": "Nomenclature et acides aminés protéinogènes",
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
    "slug": "generalites-structure-nomenclature-3",
    "title": "Raisonnement sur structure et besoins",
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
    "question": "À propos de les acides aminés du monde vivant :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-overview"
    },
    "choices": [
      "Seuls 20 acides aminés protéinogènes entrent dans les protéines animales.",
      "Le monde vivant compte environ 500 acides aminés différents.",
      "Tous les acides aminés connus sont intégrés aux protéines humaines.",
      "La masse molaire moyenne indiquée est d’environ 110 Da."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les protéines sont constituées de résidus provenant d’un ensemble de 20 acides aminés protéinogènes.",
    "choiceExplanations": [
      "Vrai. Seuls 20 acides aminés protéinogènes entrent dans les protéines animales.",
      "Vrai. Le monde vivant compte environ 500 acides aminés différents.",
      "Faux. Seuls 20 sont protéinogènes dans ce cours.",
      "Vrai. La masse molaire moyenne indiquée est d’environ 110 Da."
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la structure commune d’un acide aminé :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-general-structure"
    },
    "choices": [
      "Le radical R est identique chez tous les acides aminés.",
      "Le radical R différencie les acides aminés.",
      "Le groupement carboxyle est toujours porté par le radical R.",
      "Un hydrogène est également lié au carbone α dans la structure typique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La structure générale associe autour du carbone α une amine, un carboxyle, un hydrogène et un radical R.",
    "choiceExplanations": [
      "Faux. La nature du radical R les différencie.",
      "Vrai. Le radical R différencie les acides aminés.",
      "Faux. La fonction carboxylique commune est liée au carbone α.",
      "Vrai. Un hydrogène est également lié au carbone α dans la structure typique."
    ]
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la nomenclature des acides aminés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-codes"
    },
    "choices": [
      "Un acide aminé possède un nom usuel.",
      "Il peut être désigné par une abréviation à trois lettres.",
      "L’alanine peut être abrégée Ala ou A.",
      "Une abréviation à trois lettres contient toujours le nom complet."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les séquences utilisent les noms ou les codes à trois et à une lettre.",
    "choiceExplanations": [
      "Vrai. Un acide aminé possède un nom usuel.",
      "Vrai. Il peut être désigné par une abréviation à trois lettres.",
      "Vrai. L’alanine peut être abrégée Ala ou A.",
      "Faux. Elle est une forme courte, par exemple Ala."
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés essentiels :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "L’alimentation n’intervient jamais dans l’apport d’acides aminés.",
      "Valine, méthionine, phénylalanine et isoleucine figurent dans la liste du cours.",
      "Leucine, thréonine, lysine et tryptophane figurent dans la liste du cours.",
      "La glycine est classée essentielle dans la liste donnée."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le caractère essentiel est une notion nutritionnelle liée à l’incapacité de synthèse suffisante.",
    "choiceExplanations": [
      "Faux. Elle apporte notamment les acides aminés essentiels.",
      "Vrai. Valine, méthionine, phénylalanine et isoleucine figurent dans la liste du cours.",
      "Vrai. Leucine, thréonine, lysine et tryptophane figurent dans la liste du cours.",
      "Faux. Elle figure parmi les non essentiels dans la fiche."
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’arginine et l’histidine au cours de la croissance :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "L’arginine est essentielle chez le nourrisson et le jeune enfant selon la fiche.",
      "Arginine et histidine ne sont jamais nécessaires à la croissance.",
      "L’histidine est essentielle chez le nourrisson et le jeune enfant selon la fiche.",
      "Leur statut dépend de la période de croissance."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Arginine et histidine ont un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Vrai. L’arginine est essentielle chez le nourrisson et le jeune enfant selon la fiche.",
      "Faux. Elles sont décrites comme essentielles au cours de la croissance.",
      "Vrai. L’histidine est essentielle chez le nourrisson et le jeune enfant selon la fiche.",
      "Vrai. Leur statut dépend de la période de croissance."
    ]
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés du monde vivant :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-overview"
    },
    "choices": [
      "Le monde vivant ne compte que 20 acides aminés au total.",
      "Le monde vivant compte environ 500 acides aminés différents.",
      "La masse molaire moyenne indiquée est d’environ 110 Da.",
      "La masse molaire moyenne est d’environ 110 kDa."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les protéines sont constituées de résidus provenant d’un ensemble de 20 acides aminés protéinogènes.",
    "choiceExplanations": [
      "Faux. Environ 500 acides aminés sont mentionnés, dont 20 protéinogènes.",
      "Vrai. Le monde vivant compte environ 500 acides aminés différents.",
      "Vrai. La masse molaire moyenne indiquée est d’environ 110 Da.",
      "Faux. La valeur donnée est environ 110 Da."
    ]
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la structure commune d’un acide aminé :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-general-structure"
    },
    "choices": [
      "Le carbone α porte une fonction amine.",
      "Le radical R différencie les acides aminés.",
      "Un hydrogène est également lié au carbone α dans la structure typique.",
      "Le carbone α ne porte jamais d’hydrogène."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La structure générale associe autour du carbone α une amine, un carboxyle, un hydrogène et un radical R.",
    "choiceExplanations": [
      "Vrai. Le carbone α porte une fonction amine.",
      "Vrai. Le radical R différencie les acides aminés.",
      "Vrai. Un hydrogène est également lié au carbone α dans la structure typique.",
      "Faux. Il porte un hydrogène dans la structure typique."
    ]
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la nomenclature des acides aminés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-codes"
    },
    "choices": [
      "Un acide aminé possède un nom usuel.",
      "Les abréviations à une lettre sont interdites dans les séquences.",
      "Il peut être désigné par une abréviation à trois lettres.",
      "Les acides aminés ne possèdent que des numéros."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les séquences utilisent les noms ou les codes à trois et à une lettre.",
    "choiceExplanations": [
      "Vrai. Un acide aminé possède un nom usuel.",
      "Faux. Elles sont utilisées pour écrire les séquences.",
      "Vrai. Il peut être désigné par une abréviation à trois lettres.",
      "Faux. Ils possèdent un nom et des abréviations."
    ]
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés essentiels :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "Valine, méthionine, phénylalanine et isoleucine figurent dans la liste du cours.",
      "Un acide aminé essentiel n’est pas synthétisé par l’Homme en quantité suffisante.",
      "Leucine, thréonine, lysine et tryptophane figurent dans la liste du cours.",
      "Un acide aminé essentiel est toujours synthétisé en excès par l’organisme."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le caractère essentiel est une notion nutritionnelle liée à l’incapacité de synthèse suffisante.",
    "choiceExplanations": [
      "Vrai. Valine, méthionine, phénylalanine et isoleucine figurent dans la liste du cours.",
      "Vrai. Un acide aminé essentiel n’est pas synthétisé par l’Homme en quantité suffisante.",
      "Vrai. Leucine, thréonine, lysine et tryptophane figurent dans la liste du cours.",
      "Faux. Il doit être apporté par l’alimentation."
    ]
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’arginine et l’histidine au cours de la croissance :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "Les autres acides aminés non essentiels peuvent être formés par interconversion.",
      "Leur statut dépend de la période de croissance.",
      "Les réactions d’interconversion ne produisent aucun acide aminé.",
      "Leur statut est strictement identique à tout âge dans la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Arginine et histidine ont un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Vrai. Les autres acides aminés non essentiels peuvent être formés par interconversion.",
      "Vrai. Leur statut dépend de la période de croissance.",
      "Faux. Elles participent à la synthèse des non essentiels.",
      "Faux. La fiche distingue le nourrisson et le jeune enfant."
    ]
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés du monde vivant, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-overview"
    },
    "choices": [
      "Les protéines sont les unités de base des acides aminés.",
      "La masse molaire moyenne indiquée est d’environ 110 Da.",
      "Seuls 20 acides aminés protéinogènes entrent dans les protéines animales.",
      "La masse molaire moyenne est d’environ 110 kDa."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les protéines sont constituées de résidus provenant d’un ensemble de 20 acides aminés protéinogènes.",
    "choiceExplanations": [
      "Faux. Les acides aminés constituent les protéines.",
      "Vrai. La masse molaire moyenne indiquée est d’environ 110 Da.",
      "Vrai. Seuls 20 acides aminés protéinogènes entrent dans les protéines animales.",
      "Faux. La valeur donnée est environ 110 Da."
    ]
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure commune d’un acide aminé, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-general-structure"
    },
    "choices": [
      "Le carbone α porte une fonction amine.",
      "Le carbone α ne porte jamais d’hydrogène.",
      "Le carbone α porte une fonction acide carboxylique.",
      "Le groupement carboxyle est toujours porté par le radical R."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La structure générale associe autour du carbone α une amine, un carboxyle, un hydrogène et un radical R.",
    "choiceExplanations": [
      "Vrai. Le carbone α porte une fonction amine.",
      "Faux. Il porte un hydrogène dans la structure typique.",
      "Vrai. Le carbone α porte une fonction acide carboxylique.",
      "Faux. La fonction carboxylique commune est liée au carbone α."
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la nomenclature des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-codes"
    },
    "choices": [
      "Un acide aminé possède un nom usuel.",
      "Les acides aminés ne possèdent que des numéros.",
      "Les abréviations à une lettre sont interdites dans les séquences.",
      "Il peut être désigné par une abréviation à une lettre."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les séquences utilisent les noms ou les codes à trois et à une lettre.",
    "choiceExplanations": [
      "Vrai. Un acide aminé possède un nom usuel.",
      "Faux. Ils possèdent un nom et des abréviations.",
      "Faux. Elles sont utilisées pour écrire les séquences.",
      "Vrai. Il peut être désigné par une abréviation à une lettre."
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés essentiels, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "Il doit être apporté par l’alimentation.",
      "Un acide aminé essentiel est toujours synthétisé en excès par l’organisme.",
      "Leucine, thréonine, lysine et tryptophane figurent dans la liste du cours.",
      "La glycine est classée essentielle dans la liste donnée."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le caractère essentiel est une notion nutritionnelle liée à l’incapacité de synthèse suffisante.",
    "choiceExplanations": [
      "Vrai. Il doit être apporté par l’alimentation.",
      "Faux. Il doit être apporté par l’alimentation.",
      "Vrai. Leucine, thréonine, lysine et tryptophane figurent dans la liste du cours.",
      "Faux. Elle figure parmi les non essentiels dans la fiche."
    ]
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’arginine et l’histidine au cours de la croissance, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "Leur statut est strictement identique à tout âge dans la fiche.",
      "Les autres acides aminés non essentiels peuvent être formés par interconversion.",
      "Arginine et histidine ne sont jamais nécessaires à la croissance.",
      "Leur statut dépend de la période de croissance."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Arginine et histidine ont un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Faux. La fiche distingue le nourrisson et le jeune enfant.",
      "Vrai. Les autres acides aminés non essentiels peuvent être formés par interconversion.",
      "Faux. Elles sont décrites comme essentielles au cours de la croissance.",
      "Vrai. Leur statut dépend de la période de croissance."
    ]
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés du monde vivant, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-overview"
    },
    "choices": [
      "Le monde vivant ne compte que 20 acides aminés au total.",
      "Tous les acides aminés connus sont intégrés aux protéines humaines.",
      "Seuls 20 acides aminés protéinogènes entrent dans les protéines animales.",
      "Le monde vivant compte environ 500 acides aminés différents."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les protéines sont constituées de résidus provenant d’un ensemble de 20 acides aminés protéinogènes.",
    "choiceExplanations": [
      "Faux. Environ 500 acides aminés sont mentionnés, dont 20 protéinogènes.",
      "Faux. Seuls 20 sont protéinogènes dans ce cours.",
      "Vrai. Seuls 20 acides aminés protéinogènes entrent dans les protéines animales.",
      "Vrai. Le monde vivant compte environ 500 acides aminés différents."
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure commune d’un acide aminé, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-general-structure"
    },
    "choices": [
      "La fonction caractéristique unique est un ester.",
      "Le radical R est identique chez tous les acides aminés.",
      "Un hydrogène est également lié au carbone α dans la structure typique.",
      "Le radical R différencie les acides aminés."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La structure générale associe autour du carbone α une amine, un carboxyle, un hydrogène et un radical R.",
    "choiceExplanations": [
      "Faux. La structure associe notamment amine et acide carboxylique.",
      "Faux. La nature du radical R les différencie.",
      "Vrai. Un hydrogène est également lié au carbone α dans la structure typique.",
      "Vrai. Le radical R différencie les acides aminés."
    ]
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la nomenclature des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-codes"
    },
    "choices": [
      "Il peut être désigné par une abréviation à une lettre.",
      "Les acides aminés ne possèdent que des numéros.",
      "Un acide aminé possède un nom usuel.",
      "Les abréviations à une lettre sont interdites dans les séquences."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les séquences utilisent les noms ou les codes à trois et à une lettre.",
    "choiceExplanations": [
      "Vrai. Il peut être désigné par une abréviation à une lettre.",
      "Faux. Ils possèdent un nom et des abréviations.",
      "Vrai. Un acide aminé possède un nom usuel.",
      "Faux. Elles sont utilisées pour écrire les séquences."
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés essentiels, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "Un acide aminé essentiel n’est pas synthétisé par l’Homme en quantité suffisante.",
      "Il doit être apporté par l’alimentation.",
      "Tous les acides aminés sont dits essentiels au sens nutritionnel.",
      "L’alimentation n’intervient jamais dans l’apport d’acides aminés."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le caractère essentiel est une notion nutritionnelle liée à l’incapacité de synthèse suffisante.",
    "choiceExplanations": [
      "Vrai. Un acide aminé essentiel n’est pas synthétisé par l’Homme en quantité suffisante.",
      "Vrai. Il doit être apporté par l’alimentation.",
      "Faux. La fiche distingue essentiels et non essentiels.",
      "Faux. Elle apporte notamment les acides aminés essentiels."
    ]
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’arginine et l’histidine au cours de la croissance, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "Arginine et histidine ne sont jamais nécessaires à la croissance.",
      "Leur statut dépend de la période de croissance.",
      "Les autres acides aminés non essentiels peuvent être formés par interconversion.",
      "Leur statut est strictement identique à tout âge dans la fiche."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Arginine et histidine ont un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Faux. Elles sont décrites comme essentielles au cours de la croissance.",
      "Vrai. Leur statut dépend de la période de croissance.",
      "Vrai. Les autres acides aminés non essentiels peuvent être formés par interconversion.",
      "Faux. La fiche distingue le nourrisson et le jeune enfant."
    ]
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés du monde vivant. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-overview"
    },
    "choices": [
      "La masse molaire moyenne est d’environ 110 kDa.",
      "Seuls 20 acides aminés protéinogènes entrent dans les protéines animales.",
      "Les protéines sont les unités de base des acides aminés.",
      "La masse molaire moyenne indiquée est d’environ 110 Da."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les protéines sont constituées de résidus provenant d’un ensemble de 20 acides aminés protéinogènes.",
    "choiceExplanations": [
      "Faux. La valeur donnée est environ 110 Da.",
      "Vrai. Seuls 20 acides aminés protéinogènes entrent dans les protéines animales.",
      "Faux. Les acides aminés constituent les protéines.",
      "Vrai. La masse molaire moyenne indiquée est d’environ 110 Da."
    ]
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la structure commune d’un acide aminé. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-general-structure"
    },
    "choices": [
      "Un hydrogène est également lié au carbone α dans la structure typique.",
      "Le carbone α ne porte jamais d’hydrogène.",
      "Le carbone α porte une fonction acide carboxylique.",
      "La fonction caractéristique unique est un ester."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La structure générale associe autour du carbone α une amine, un carboxyle, un hydrogène et un radical R.",
    "choiceExplanations": [
      "Vrai. Un hydrogène est également lié au carbone α dans la structure typique.",
      "Faux. Il porte un hydrogène dans la structure typique.",
      "Vrai. Le carbone α porte une fonction acide carboxylique.",
      "Faux. La structure associe notamment amine et acide carboxylique."
    ]
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la nomenclature des acides aminés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-codes"
    },
    "choices": [
      "Les acides aminés ne possèdent que des numéros.",
      "Les abréviations à une lettre sont interdites dans les séquences.",
      "Il peut être désigné par une abréviation à trois lettres.",
      "Il peut être désigné par une abréviation à une lettre."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les séquences utilisent les noms ou les codes à trois et à une lettre.",
    "choiceExplanations": [
      "Faux. Ils possèdent un nom et des abréviations.",
      "Faux. Elles sont utilisées pour écrire les séquences.",
      "Vrai. Il peut être désigné par une abréviation à trois lettres.",
      "Vrai. Il peut être désigné par une abréviation à une lettre."
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés essentiels. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "Valine, méthionine, phénylalanine et isoleucine figurent dans la liste du cours.",
      "L’alimentation n’intervient jamais dans l’apport d’acides aminés.",
      "Un acide aminé essentiel est toujours synthétisé en excès par l’organisme.",
      "Il doit être apporté par l’alimentation."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le caractère essentiel est une notion nutritionnelle liée à l’incapacité de synthèse suffisante.",
    "choiceExplanations": [
      "Vrai. Valine, méthionine, phénylalanine et isoleucine figurent dans la liste du cours.",
      "Faux. Elle apporte notamment les acides aminés essentiels.",
      "Faux. Il doit être apporté par l’alimentation.",
      "Vrai. Il doit être apporté par l’alimentation."
    ]
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’arginine et l’histidine au cours de la croissance. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "Leur statut est strictement identique à tout âge dans la fiche.",
      "Les autres acides aminés non essentiels peuvent être formés par interconversion.",
      "L’histidine est essentielle chez le nourrisson et le jeune enfant selon la fiche.",
      "Les réactions d’interconversion ne produisent aucun acide aminé."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Arginine et histidine ont un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Faux. La fiche distingue le nourrisson et le jeune enfant.",
      "Vrai. Les autres acides aminés non essentiels peuvent être formés par interconversion.",
      "Vrai. L’histidine est essentielle chez le nourrisson et le jeune enfant selon la fiche.",
      "Faux. Elles participent à la synthèse des non essentiels."
    ]
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés du monde vivant. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-overview"
    },
    "choices": [
      "Les acides aminés sont les unités de base des protéines.",
      "Les protéines sont les unités de base des acides aminés.",
      "Seuls 20 acides aminés protéinogènes entrent dans les protéines animales.",
      "Tous les acides aminés connus sont intégrés aux protéines humaines."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les protéines sont constituées de résidus provenant d’un ensemble de 20 acides aminés protéinogènes.",
    "choiceExplanations": [
      "Vrai. Les acides aminés sont les unités de base des protéines.",
      "Faux. Les acides aminés constituent les protéines.",
      "Vrai. Seuls 20 acides aminés protéinogènes entrent dans les protéines animales.",
      "Faux. Seuls 20 sont protéinogènes dans ce cours."
    ]
  },
  {
    "order": 27,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la structure commune d’un acide aminé. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-general-structure"
    },
    "choices": [
      "Le radical R différencie les acides aminés.",
      "Le carbone α porte une fonction acide carboxylique.",
      "Le carbone α ne porte jamais d’hydrogène.",
      "La fonction caractéristique unique est un ester."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La structure générale associe autour du carbone α une amine, un carboxyle, un hydrogène et un radical R.",
    "choiceExplanations": [
      "Vrai. Le radical R différencie les acides aminés.",
      "Vrai. Le carbone α porte une fonction acide carboxylique.",
      "Faux. Il porte un hydrogène dans la structure typique.",
      "Faux. La structure associe notamment amine et acide carboxylique."
    ]
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la nomenclature des acides aminés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-codes"
    },
    "choices": [
      "Une abréviation à trois lettres contient toujours le nom complet.",
      "Les abréviations à une lettre sont interdites dans les séquences.",
      "Il peut être désigné par une abréviation à trois lettres.",
      "L’alanine peut être abrégée Ala ou A."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les séquences utilisent les noms ou les codes à trois et à une lettre.",
    "choiceExplanations": [
      "Faux. Elle est une forme courte, par exemple Ala.",
      "Faux. Elles sont utilisées pour écrire les séquences.",
      "Vrai. Il peut être désigné par une abréviation à trois lettres.",
      "Vrai. L’alanine peut être abrégée Ala ou A."
    ]
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés essentiels. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "L’alimentation n’intervient jamais dans l’apport d’acides aminés.",
      "Un acide aminé essentiel est toujours synthétisé en excès par l’organisme.",
      "Il doit être apporté par l’alimentation.",
      "Leucine, thréonine, lysine et tryptophane figurent dans la liste du cours."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le caractère essentiel est une notion nutritionnelle liée à l’incapacité de synthèse suffisante.",
    "choiceExplanations": [
      "Faux. Elle apporte notamment les acides aminés essentiels.",
      "Faux. Il doit être apporté par l’alimentation.",
      "Vrai. Il doit être apporté par l’alimentation.",
      "Vrai. Leucine, thréonine, lysine et tryptophane figurent dans la liste du cours."
    ]
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’arginine et l’histidine au cours de la croissance. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "L’histidine est essentielle chez le nourrisson et le jeune enfant selon la fiche.",
      "Leur statut dépend de la période de croissance.",
      "Les réactions d’interconversion ne produisent aucun acide aminé.",
      "Arginine et histidine ne sont jamais nécessaires à la croissance."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Arginine et histidine ont un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Vrai. L’histidine est essentielle chez le nourrisson et le jeune enfant selon la fiche.",
      "Vrai. Leur statut dépend de la période de croissance.",
      "Faux. Elles participent à la synthèse des non essentiels.",
      "Faux. Elles sont décrites comme essentielles au cours de la croissance."
    ]
  }
];
