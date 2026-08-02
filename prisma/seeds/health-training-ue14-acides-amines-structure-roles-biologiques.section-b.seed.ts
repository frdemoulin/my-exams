import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "31": [
    "les acides aminés aliphatiques"
  ],
  "32": [
    "les acides aminés branchés"
  ],
  "33": [
    "les acides aminés hydroxylés"
  ],
  "34": [
    "les acides aminés soufrés"
  ],
  "35": [
    "les acides aminés acides, leurs amides et les basiques"
  ],
  "36": [
    "les acides aminés aliphatiques"
  ],
  "37": [
    "les acides aminés branchés"
  ],
  "38": [
    "les acides aminés hydroxylés"
  ],
  "39": [
    "les acides aminés soufrés"
  ],
  "40": [
    "les acides aminés acides, leurs amides et les basiques"
  ],
  "41": [
    "les acides aminés aliphatiques"
  ],
  "42": [
    "les acides aminés branchés"
  ],
  "43": [
    "les acides aminés hydroxylés"
  ],
  "44": [
    "les acides aminés soufrés"
  ],
  "45": [
    "les acides aminés acides, leurs amides et les basiques"
  ],
  "46": [
    "les acides aminés aliphatiques"
  ],
  "47": [
    "les acides aminés branchés"
  ],
  "48": [
    "les acides aminés hydroxylés"
  ],
  "49": [
    "les acides aminés soufrés"
  ],
  "50": [
    "les acides aminés acides, leurs amides et les basiques"
  ],
  "51": [
    "les acides aminés aliphatiques"
  ],
  "52": [
    "les acides aminés branchés"
  ],
  "53": [
    "les acides aminés hydroxylés"
  ],
  "54": [
    "les acides aminés soufrés"
  ],
  "55": [
    "les acides aminés acides, leurs amides et les basiques"
  ],
  "56": [
    "les acides aminés aliphatiques"
  ],
  "57": [
    "les acides aminés branchés"
  ],
  "58": [
    "les acides aminés hydroxylés"
  ],
  "59": [
    "les acides aminés soufrés"
  ],
  "60": [
    "les acides aminés acides, leurs amides et les basiques"
  ]
};

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "classification-radical-1",
    "title": "Familles de chaînes latérales",
    "description": "Identifier les notions essentielles.",
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
    "slug": "classification-radical-2",
    "title": "Fonctions chimiques des radicaux",
    "description": "Appliquer et comparer les notions du cours.",
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
    "slug": "classification-radical-3",
    "title": "Identification des familles d’acides aminés",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 2,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères essentiels",
        "sharedStatement": "Les questions suivantes portent sur les principaux repères de la section.",
        "questionOrders": [
          51,
          52,
          53
        ]
      },
      {
        "type": "GROUP",
        "title": "Structure et fonction",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          54,
          55,
          56
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications",
        "sharedStatement": "Les questions suivantes mobilisent les notions dans des situations biologiques ou médicales.",
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
    "question": "À propos de les acides aminés aliphatiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-families"
    },
    "choices": [
      "Leur chaîne latérale est décrite comme très apolaire et hydrophobe.",
      "L’alanine possède un radical méthyle.",
      "Leur chaîne latérale est carbonée, ouverte et linéaire ou ramifiée.",
      "La glycine possède un radical benzyle."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les acides aminés aliphatiques sont caractérisés par une chaîne latérale hydrocarbonée ouverte.",
    "choiceExplanations": [
      "Vrai. Leur chaîne latérale est décrite comme très apolaire et hydrophobe.",
      "Vrai. L’alanine possède un radical méthyle.",
      "Vrai. Leur chaîne latérale est carbonée, ouverte et linéaire ou ramifiée.",
      "Faux. Son radical est un hydrogène."
    ]
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés branchés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "branched-amino-acids"
    },
    "choices": [
      "La valine possède un radical isopropyle.",
      "Valine, leucine et isoleucine sont des acides aminés ramifiés.",
      "La valine possède un noyau indole.",
      "L’isoleucine est identique à la leucine sans isomérie."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Valine, leucine et isoleucine forment la famille des acides aminés à chaîne ramifiée.",
    "choiceExplanations": [
      "Vrai. La valine possède un radical isopropyle.",
      "Vrai. Valine, leucine et isoleucine sont des acides aminés ramifiés.",
      "Faux. Le noyau indole caractérise le tryptophane.",
      "Faux. Elles sont isomères."
    ]
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés hydroxylés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "Ces chaînes latérales peuvent former des liaisons hydrogène avec l’eau.",
      "Le groupement OH rend nécessairement la chaîne très hydrophobe.",
      "La thréonine porte un alcool secondaire.",
      "La sérine porte un alcool primaire."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Sérine et thréonine sont polaires grâce à leur fonction alcool.",
    "choiceExplanations": [
      "Vrai. Ces chaînes latérales peuvent former des liaisons hydrogène avec l’eau.",
      "Faux. Il favorise la polarité et l’hydrophilie.",
      "Vrai. La thréonine porte un alcool secondaire.",
      "Vrai. La sérine porte un alcool primaire."
    ]
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés soufrés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "La cystéine porte une fonction thiol.",
      "Le soufre appartient à leur chaîne latérale.",
      "La cystéine porte un groupement imidazole.",
      "La méthionine porte une fonction thiol libre selon la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Cystéine et méthionine diffèrent par la forme chimique du soufre dans leur radical.",
    "choiceExplanations": [
      "Vrai. La cystéine porte une fonction thiol.",
      "Vrai. Le soufre appartient à leur chaîne latérale.",
      "Faux. L’imidazole caractérise l’histidine.",
      "Faux. Elle porte un thioéther."
    ]
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés acides, leurs amides et les basiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "acid-basic-amino-acids"
    },
    "choices": [
      "L’asparagine est l’amide dérivé de l’acide aspartique.",
      "L’acide aspartique et l’acide glutamique possèdent un second carboxyle.",
      "La glutamine est l’amide de la phénylalanine.",
      "La glutamine est l’amide dérivé de l’acide glutamique."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les acides aspartique et glutamique donnent respectivement asparagine et glutamine; lysine, arginine et histidine sont basiques.",
    "choiceExplanations": [
      "Vrai. L’asparagine est l’amide dérivé de l’acide aspartique.",
      "Vrai. L’acide aspartique et l’acide glutamique possèdent un second carboxyle.",
      "Faux. Elle est l’amide de l’acide glutamique.",
      "Vrai. La glutamine est l’amide dérivé de l’acide glutamique."
    ]
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés aliphatiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-families"
    },
    "choices": [
      "L’alanine possède un radical méthyle.",
      "Leur chaîne latérale est carbonée, ouverte et linéaire ou ramifiée.",
      "Les acides aminés aliphatiques possèdent obligatoirement un cycle aromatique.",
      "Leur chaîne latérale contient obligatoirement N, O ou S."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les acides aminés aliphatiques sont caractérisés par une chaîne latérale hydrocarbonée ouverte.",
    "choiceExplanations": [
      "Vrai. L’alanine possède un radical méthyle.",
      "Vrai. Leur chaîne latérale est carbonée, ouverte et linéaire ou ramifiée.",
      "Faux. Leur chaîne est ouverte.",
      "Faux. La fiche précise l’absence d’hétéroatome pour cette famille."
    ]
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés branchés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "branched-amino-acids"
    },
    "choices": [
      "Les acides aminés branchés sont sérine, thréonine et cystéine.",
      "Valine, leucine et isoleucine sont des acides aminés ramifiés.",
      "La leucine possède un radical isobutyle.",
      "L’isoleucine est un isomère de la leucine."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Valine, leucine et isoleucine forment la famille des acides aminés à chaîne ramifiée.",
    "choiceExplanations": [
      "Faux. La fiche cite valine, leucine et isoleucine.",
      "Vrai. Valine, leucine et isoleucine sont des acides aminés ramifiés.",
      "Vrai. La leucine possède un radical isobutyle.",
      "Vrai. L’isoleucine est un isomère de la leucine."
    ]
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés hydroxylés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "Le groupement OH rend nécessairement la chaîne très hydrophobe.",
      "Ces chaînes latérales peuvent former des liaisons hydrogène avec l’eau.",
      "La thréonine porte un alcool secondaire.",
      "Sérine et thréonine sont des acides aminés basiques chargés positivement."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Sérine et thréonine sont polaires grâce à leur fonction alcool.",
    "choiceExplanations": [
      "Faux. Il favorise la polarité et l’hydrophilie.",
      "Vrai. Ces chaînes latérales peuvent former des liaisons hydrogène avec l’eau.",
      "Vrai. La thréonine porte un alcool secondaire.",
      "Faux. Elles sont polaires neutres dans la classification donnée."
    ]
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés soufrés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "La méthionine porte une fonction thiol libre selon la fiche.",
      "La cystéine porte une fonction thiol.",
      "La méthionine porte une fonction thioéther.",
      "Le soufre appartient à leur chaîne latérale."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Cystéine et méthionine diffèrent par la forme chimique du soufre dans leur radical.",
    "choiceExplanations": [
      "Faux. Elle porte un thioéther.",
      "Vrai. La cystéine porte une fonction thiol.",
      "Vrai. La méthionine porte une fonction thioéther.",
      "Vrai. Le soufre appartient à leur chaîne latérale."
    ]
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés acides, leurs amides et les basiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "acid-basic-amino-acids"
    },
    "choices": [
      "L’acide aspartique et l’acide glutamique possèdent un second carboxyle.",
      "L’histidine est classée parmi les acides aminés acides chargés négativement.",
      "L’asparagine est l’amide dérivé de l’acide aspartique.",
      "La glutamine est l’amide de la phénylalanine."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les acides aspartique et glutamique donnent respectivement asparagine et glutamine; lysine, arginine et histidine sont basiques.",
    "choiceExplanations": [
      "Vrai. L’acide aspartique et l’acide glutamique possèdent un second carboxyle.",
      "Faux. Elle est classée basique chargée positivement.",
      "Vrai. L’asparagine est l’amide dérivé de l’acide aspartique.",
      "Faux. Elle est l’amide de l’acide glutamique."
    ]
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés aliphatiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-families"
    },
    "choices": [
      "Les acides aminés aliphatiques possèdent obligatoirement un cycle aromatique.",
      "L’alanine porte un groupement guanidinium.",
      "L’alanine possède un radical méthyle.",
      "Leur chaîne latérale est décrite comme très apolaire et hydrophobe."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les acides aminés aliphatiques sont caractérisés par une chaîne latérale hydrocarbonée ouverte.",
    "choiceExplanations": [
      "Faux. Leur chaîne est ouverte.",
      "Faux. Elle porte un méthyle.",
      "Vrai. L’alanine possède un radical méthyle.",
      "Vrai. Leur chaîne latérale est décrite comme très apolaire et hydrophobe."
    ]
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés branchés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "branched-amino-acids"
    },
    "choices": [
      "L’isoleucine est identique à la leucine sans isomérie.",
      "L’isoleucine est un isomère de la leucine.",
      "Les acides aminés branchés sont sérine, thréonine et cystéine.",
      "La leucine possède un radical isobutyle."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Valine, leucine et isoleucine forment la famille des acides aminés à chaîne ramifiée.",
    "choiceExplanations": [
      "Faux. Elles sont isomères.",
      "Vrai. L’isoleucine est un isomère de la leucine.",
      "Faux. La fiche cite valine, leucine et isoleucine.",
      "Vrai. La leucine possède un radical isobutyle."
    ]
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés hydroxylés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "La sérine porte un alcool primaire.",
      "La thréonine est dépourvue d’oxygène.",
      "Le groupement hydroxyle confère un caractère polaire.",
      "Le groupement OH rend nécessairement la chaîne très hydrophobe."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Sérine et thréonine sont polaires grâce à leur fonction alcool.",
    "choiceExplanations": [
      "Vrai. La sérine porte un alcool primaire.",
      "Faux. Elle porte une fonction alcool.",
      "Vrai. Le groupement hydroxyle confère un caractère polaire.",
      "Faux. Il favorise la polarité et l’hydrophilie."
    ]
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés soufrés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "Les ponts disulfure sont formés entre deux méthionines.",
      "La cystéine porte un groupement imidazole.",
      "La cystéine peut participer à la formation de ponts disulfure.",
      "La cystéine porte une fonction thiol."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Cystéine et méthionine diffèrent par la forme chimique du soufre dans leur radical.",
    "choiceExplanations": [
      "Faux. Ils sont formés par oxydation de deux cystéines.",
      "Faux. L’imidazole caractérise l’histidine.",
      "Vrai. La cystéine peut participer à la formation de ponts disulfure.",
      "Vrai. La cystéine porte une fonction thiol."
    ]
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés acides, leurs amides et les basiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "acid-basic-amino-acids"
    },
    "choices": [
      "La glutamine est l’amide de la phénylalanine.",
      "L’histidine est classée parmi les acides aminés acides chargés négativement.",
      "L’asparagine est l’amide dérivé de l’acide aspartique.",
      "Lysine, arginine et histidine sont classées parmi les acides aminés basiques."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les acides aspartique et glutamique donnent respectivement asparagine et glutamine; lysine, arginine et histidine sont basiques.",
    "choiceExplanations": [
      "Faux. Elle est l’amide de l’acide glutamique.",
      "Faux. Elle est classée basique chargée positivement.",
      "Vrai. L’asparagine est l’amide dérivé de l’acide aspartique.",
      "Vrai. Lysine, arginine et histidine sont classées parmi les acides aminés basiques."
    ]
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés aliphatiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-families"
    },
    "choices": [
      "Leur chaîne latérale est carbonée, ouverte et linéaire ou ramifiée.",
      "L’alanine possède un radical méthyle.",
      "Leur chaîne latérale contient obligatoirement N, O ou S.",
      "Les acides aminés aliphatiques possèdent obligatoirement un cycle aromatique."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les acides aminés aliphatiques sont caractérisés par une chaîne latérale hydrocarbonée ouverte.",
    "choiceExplanations": [
      "Vrai. Leur chaîne latérale est carbonée, ouverte et linéaire ou ramifiée.",
      "Vrai. L’alanine possède un radical méthyle.",
      "Faux. La fiche précise l’absence d’hétéroatome pour cette famille.",
      "Faux. Leur chaîne est ouverte."
    ]
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés branchés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "branched-amino-acids"
    },
    "choices": [
      "La leucine possède un radical isobutyle.",
      "La valine possède un radical isopropyle.",
      "La valine possède un noyau indole.",
      "La leucine est un acide aminé hydroxylé."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Valine, leucine et isoleucine forment la famille des acides aminés à chaîne ramifiée.",
    "choiceExplanations": [
      "Vrai. La leucine possède un radical isobutyle.",
      "Vrai. La valine possède un radical isopropyle.",
      "Faux. Le noyau indole caractérise le tryptophane.",
      "Faux. Elle est un acide aminé branché."
    ]
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés hydroxylés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "Le groupement OH rend nécessairement la chaîne très hydrophobe.",
      "La thréonine porte un alcool secondaire.",
      "Sérine et thréonine sont des acides aminés basiques chargés positivement.",
      "La sérine porte un alcool primaire."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Sérine et thréonine sont polaires grâce à leur fonction alcool.",
    "choiceExplanations": [
      "Faux. Il favorise la polarité et l’hydrophilie.",
      "Vrai. La thréonine porte un alcool secondaire.",
      "Faux. Elles sont polaires neutres dans la classification donnée.",
      "Vrai. La sérine porte un alcool primaire."
    ]
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés soufrés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "La méthionine porte une fonction thiol libre selon la fiche.",
      "La cystéine porte une fonction thiol.",
      "Aucun acide aminé protéinogène ne contient de soufre.",
      "Le soufre appartient à leur chaîne latérale."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Cystéine et méthionine diffèrent par la forme chimique du soufre dans leur radical.",
    "choiceExplanations": [
      "Faux. Elle porte un thioéther.",
      "Vrai. La cystéine porte une fonction thiol.",
      "Faux. Cystéine et méthionine en contiennent.",
      "Vrai. Le soufre appartient à leur chaîne latérale."
    ]
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés acides, leurs amides et les basiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "acid-basic-amino-acids"
    },
    "choices": [
      "La glutamine est l’amide de la phénylalanine.",
      "L’histidine est classée parmi les acides aminés acides chargés négativement.",
      "L’asparagine est l’amide dérivé de l’acide aspartique.",
      "La glutamine est l’amide dérivé de l’acide glutamique."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les acides aspartique et glutamique donnent respectivement asparagine et glutamine; lysine, arginine et histidine sont basiques.",
    "choiceExplanations": [
      "Faux. Elle est l’amide de l’acide glutamique.",
      "Faux. Elle est classée basique chargée positivement.",
      "Vrai. L’asparagine est l’amide dérivé de l’acide aspartique.",
      "Vrai. La glutamine est l’amide dérivé de l’acide glutamique."
    ]
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés aliphatiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-families"
    },
    "choices": [
      "Leur chaîne latérale est carbonée, ouverte et linéaire ou ramifiée.",
      "Les acides aminés aliphatiques possèdent obligatoirement un cycle aromatique.",
      "Leur chaîne latérale est décrite comme très apolaire et hydrophobe.",
      "Leur chaîne latérale contient obligatoirement N, O ou S."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les acides aminés aliphatiques sont caractérisés par une chaîne latérale hydrocarbonée ouverte.",
    "choiceExplanations": [
      "Vrai. Leur chaîne latérale est carbonée, ouverte et linéaire ou ramifiée.",
      "Faux. Leur chaîne est ouverte.",
      "Vrai. Leur chaîne latérale est décrite comme très apolaire et hydrophobe.",
      "Faux. La fiche précise l’absence d’hétéroatome pour cette famille."
    ]
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés branchés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "branched-amino-acids"
    },
    "choices": [
      "La valine possède un noyau indole.",
      "La valine possède un radical isopropyle.",
      "L’isoleucine est identique à la leucine sans isomérie.",
      "Valine, leucine et isoleucine sont des acides aminés ramifiés."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Valine, leucine et isoleucine forment la famille des acides aminés à chaîne ramifiée.",
    "choiceExplanations": [
      "Faux. Le noyau indole caractérise le tryptophane.",
      "Vrai. La valine possède un radical isopropyle.",
      "Faux. Elles sont isomères.",
      "Vrai. Valine, leucine et isoleucine sont des acides aminés ramifiés."
    ]
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés hydroxylés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "La sérine porte un alcool primaire.",
      "Ces chaînes latérales peuvent former des liaisons hydrogène avec l’eau.",
      "Sérine et thréonine sont des acides aminés basiques chargés positivement.",
      "La sérine porte un thioéther."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Sérine et thréonine sont polaires grâce à leur fonction alcool.",
    "choiceExplanations": [
      "Vrai. La sérine porte un alcool primaire.",
      "Vrai. Ces chaînes latérales peuvent former des liaisons hydrogène avec l’eau.",
      "Faux. Elles sont polaires neutres dans la classification donnée.",
      "Faux. Le thioéther caractérise la méthionine."
    ]
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés soufrés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "La méthionine porte une fonction thioéther.",
      "Le soufre appartient à leur chaîne latérale.",
      "La méthionine porte une fonction thiol libre selon la fiche.",
      "La cystéine porte un groupement imidazole."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Cystéine et méthionine diffèrent par la forme chimique du soufre dans leur radical.",
    "choiceExplanations": [
      "Vrai. La méthionine porte une fonction thioéther.",
      "Vrai. Le soufre appartient à leur chaîne latérale.",
      "Faux. Elle porte un thioéther.",
      "Faux. L’imidazole caractérise l’histidine."
    ]
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés acides, leurs amides et les basiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "acid-basic-amino-acids"
    },
    "choices": [
      "L’asparagine est l’amide dérivé de l’acide aspartique.",
      "La glutamine est l’amide de la phénylalanine.",
      "La glutamine est l’amide dérivé de l’acide glutamique.",
      "L’arginine porte un noyau benzénique."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les acides aspartique et glutamique donnent respectivement asparagine et glutamine; lysine, arginine et histidine sont basiques.",
    "choiceExplanations": [
      "Vrai. L’asparagine est l’amide dérivé de l’acide aspartique.",
      "Faux. Elle est l’amide de l’acide glutamique.",
      "Vrai. La glutamine est l’amide dérivé de l’acide glutamique.",
      "Faux. Elle porte un groupement guanidinium."
    ]
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés aliphatiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-families"
    },
    "choices": [
      "Leur chaîne latérale est carbonée, ouverte et linéaire ou ramifiée.",
      "La glycine possède un radical réduit à un hydrogène.",
      "La glycine possède un radical benzyle.",
      "Leur chaîne latérale contient obligatoirement N, O ou S."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les acides aminés aliphatiques sont caractérisés par une chaîne latérale hydrocarbonée ouverte.",
    "choiceExplanations": [
      "Vrai. Leur chaîne latérale est carbonée, ouverte et linéaire ou ramifiée.",
      "Vrai. La glycine possède un radical réduit à un hydrogène.",
      "Faux. Son radical est un hydrogène.",
      "Faux. La fiche précise l’absence d’hétéroatome pour cette famille."
    ]
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés branchés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "branched-amino-acids"
    },
    "choices": [
      "Les acides aminés branchés sont sérine, thréonine et cystéine.",
      "L’isoleucine est un isomère de la leucine.",
      "La valine possède un radical isopropyle.",
      "La valine possède un noyau indole."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Valine, leucine et isoleucine forment la famille des acides aminés à chaîne ramifiée.",
    "choiceExplanations": [
      "Faux. La fiche cite valine, leucine et isoleucine.",
      "Vrai. L’isoleucine est un isomère de la leucine.",
      "Vrai. La valine possède un radical isopropyle.",
      "Faux. Le noyau indole caractérise le tryptophane."
    ]
  },
  {
    "order": 58,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés hydroxylés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "La thréonine porte un alcool secondaire.",
      "La thréonine est dépourvue d’oxygène.",
      "Ces chaînes latérales peuvent former des liaisons hydrogène avec l’eau.",
      "Le groupement OH rend nécessairement la chaîne très hydrophobe."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Sérine et thréonine sont polaires grâce à leur fonction alcool.",
    "choiceExplanations": [
      "Vrai. La thréonine porte un alcool secondaire.",
      "Faux. Elle porte une fonction alcool.",
      "Vrai. Ces chaînes latérales peuvent former des liaisons hydrogène avec l’eau.",
      "Faux. Il favorise la polarité et l’hydrophilie."
    ]
  },
  {
    "order": 59,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés soufrés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "La cystéine porte un groupement imidazole.",
      "La méthionine porte une fonction thioéther.",
      "La cystéine peut participer à la formation de ponts disulfure.",
      "La méthionine porte une fonction thiol libre selon la fiche."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Cystéine et méthionine diffèrent par la forme chimique du soufre dans leur radical.",
    "choiceExplanations": [
      "Faux. L’imidazole caractérise l’histidine.",
      "Vrai. La méthionine porte une fonction thioéther.",
      "Vrai. La cystéine peut participer à la formation de ponts disulfure.",
      "Faux. Elle porte un thioéther."
    ]
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés acides, leurs amides et les basiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "acid-basic-amino-acids"
    },
    "choices": [
      "Lysine, arginine et histidine sont classées parmi les acides aminés basiques.",
      "L’arginine porte un noyau benzénique.",
      "La glutamine est l’amide de la phénylalanine.",
      "L’acide aspartique et l’acide glutamique possèdent un second carboxyle."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les acides aspartique et glutamique donnent respectivement asparagine et glutamine; lysine, arginine et histidine sont basiques.",
    "choiceExplanations": [
      "Vrai. Lysine, arginine et histidine sont classées parmi les acides aminés basiques.",
      "Faux. Elle porte un groupement guanidinium.",
      "Faux. Elle est l’amide de l’acide glutamique.",
      "Vrai. L’acide aspartique et l’acide glutamique possèdent un second carboxyle."
    ]
  }
];
