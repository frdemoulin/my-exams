import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "91": [
    "la structure générale des leucotriènes"
  ],
  "92": [
    "les cellules productrices de leucotriènes"
  ],
  "93": [
    "les effets des leucotriènes sur les muscles lisses"
  ],
  "94": [
    "les effets immunitaires des leucotriènes"
  ],
  "95": [
    "la formation de LTA₄"
  ],
  "96": [
    "la structure de LTA₄"
  ],
  "97": [
    "la formation de LXA₄ et LTB₄"
  ],
  "98": [
    "la formation de LTC₄"
  ],
  "99": [
    "la succession LTC₄-LTD₄-LTE₄"
  ],
  "100": [
    "le rôle de carrefour de LTA₄"
  ],
  "101": [
    "la structure générale des leucotriènes"
  ],
  "102": [
    "les cellules productrices de leucotriènes"
  ],
  "103": [
    "les effets des leucotriènes sur les muscles lisses"
  ],
  "104": [
    "les effets immunitaires des leucotriènes"
  ],
  "105": [
    "la formation de LTA₄"
  ],
  "106": [
    "la structure de LTA₄"
  ],
  "107": [
    "la formation de LXA₄ et LTB₄"
  ],
  "108": [
    "la formation de LTC₄"
  ],
  "109": [
    "la succession LTC₄-LTD₄-LTE₄"
  ],
  "110": [
    "le rôle de carrefour de LTA₄"
  ],
  "111": [
    "la structure générale des leucotriènes"
  ],
  "112": [
    "les cellules productrices de leucotriènes"
  ],
  "113": [
    "les effets des leucotriènes sur les muscles lisses"
  ],
  "114": [
    "les effets immunitaires des leucotriènes"
  ],
  "115": [
    "la formation de LTA₄"
  ],
  "116": [
    "la structure de LTA₄"
  ],
  "117": [
    "la formation de LXA₄ et LTB₄"
  ],
  "118": [
    "la formation de LTC₄"
  ],
  "119": [
    "la succession LTC₄-LTD₄-LTE₄"
  ],
  "120": [
    "le rôle de carrefour de LTA₄"
  ]
};

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "structure-et-effets-des-leucotrienes",
    "title": "Structure et effets des leucotriènes",
    "description": "Identifier le système triénique, les cellules productrices et les effets.",
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
    "slug": "voies-de-lta4-et-glutathion",
    "title": "Voies de LTA₄ et glutathion",
    "description": "Suivre les branches vers lipoxines et leucotriènes peptidiques.",
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
    "slug": "raisonnement-sur-les-leucotrienes",
    "title": "Raisonnement sur les leucotriènes",
    "description": "Analyser structure, enzymes, effets bronchiques et immunitaires.",
    "stage": "MASTER",
    "sectionOrder": 4,
    "items": [
      {
        "type": "GROUP",
        "title": "Structure et cellules",
        "sharedStatement": "Les questions suivantes portent sur la structure générale et les cellules productrices.",
        "questionOrders": [
          111,
          112,
          113
        ]
      },
      {
        "type": "GROUP",
        "title": "Effets biologiques",
        "sharedStatement": "Les questions suivantes analysent les effets sur les muscles lisses et l’immunité.",
        "questionOrders": [
          114,
          115,
          116
        ]
      },
      {
        "type": "GROUP",
        "title": "Carrefour LTA₄",
        "sharedStatement": "Les questions suivantes suivent LTA₄ et la branche au glutathion.",
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
    "question": "À propos de la structure générale des leucotriènes :",
    "choices": [
      "Ils dérivent de composés eicosanoïques à 20 carbones.",
      "Ils comportent quatre doubles liaisons.",
      "Ils sont décrits comme des molécules totalement saturées.",
      "Trois de leurs doubles liaisons sont conjuguées et forment un système triénique."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les leucotriènes sont des eicosanoïdes C20 à quatre doubles liaisons, dont trois conjuguées.",
    "choiceExplanations": [
      "Vrai. Le squelette C20 est rappelé.",
      "Vrai. Le nombre total est donné.",
      "Faux. Ils possèdent quatre doubles liaisons.",
      "Vrai. Cette particularité structurelle est mise en avant."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lta4-structure"
    }
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les cellules productrices de leucotriènes :",
    "choices": [
      "Les leucocytes sont cités.",
      "Les mastocytes et les macrophages sont cités.",
      "Seules les cellules musculaires lisses synthétisent les leucotriènes.",
      "Les plaquettes sont également citées."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le cours cite leucocytes, mastocytes, plaquettes et macrophages parmi les cellules productrices.",
    "choiceExplanations": [
      "Vrai. Ils figurent dans la liste des cellules productrices.",
      "Vrai. Ces deux cellules immunitaires sont mentionnées.",
      "Faux. Les muscles lisses sont surtout présentés comme des cibles d’effet.",
      "Vrai. Elles appartiennent à la liste."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-cells-effects"
    }
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les effets des leucotriènes sur les muscles lisses :",
    "choices": [
      "La vasoconstriction est citée.",
      "La bronchoconstriction est citée.",
      "Les leucotriènes sont décrits comme exclusivement bronchodilatateurs.",
      "Ces effets concernent des muscles lisses."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les leucotriènes peuvent provoquer vasoconstriction et bronchoconstriction.",
    "choiceExplanations": [
      "Vrai. Elle figure dans les exemples d’effets.",
      "Vrai. Elle figure également dans la fiche.",
      "Faux. L’effet indiqué est la bronchoconstriction.",
      "Vrai. La fiche les classe dans cette catégorie."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-cells-effects"
    }
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les effets immunitaires des leucotriènes :",
    "choices": [
      "Le chimiotactisme est cité.",
      "Ils augmentent l’activité cytotoxique des lymphocytes dans la fiche.",
      "Ils suppriment toute activité lymphocytaire.",
      "Leurs fonctions immunitaires s’ajoutent à leurs effets sur les muscles lisses."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les leucotriènes possèdent des fonctions immunitaires de recrutement et d’activation.",
    "choiceExplanations": [
      "Vrai. Il appartient aux rôles immunitaires présentés.",
      "Vrai. Cet effet est explicitement donné.",
      "Faux. La fiche indique une augmentation de l’activité cytotoxique.",
      "Vrai. Les deux catégories sont distinctement présentées."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-cells-effects"
    }
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la formation de lta₄ :",
    "choices": [
      "LTA₄ est formé à partir de l’acide arachidonique.",
      "La 5-lipoxygénase intervient dans sa formation.",
      "LTA₄ est formé directement par la COX.",
      "LTA₄ constitue un intermédiaire vers plusieurs produits."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La 5-lipoxygénase transforme l’acide arachidonique en LTA₄.",
    "choiceExplanations": [
      "Vrai. Le précurseur est indiqué.",
      "Vrai. L’enzyme est nommée dans la fiche.",
      "Faux. La COX appartient à la voie des prostanoïdes.",
      "Vrai. Il alimente plusieurs branches."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lta4-structure"
    }
  },
  {
    "order": 96,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la structure de lta₄ :",
    "choices": [
      "LTA₄ possède quatre doubles liaisons.",
      "Trois doubles liaisons sont conjuguées.",
      "LTA₄ possède le cyclopentane C8-C12 de l’acide prostanoïque.",
      "LTA₄ possède un pont époxyde entre C5 et C6."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "LTA₄ est reconnaissable à son système triénique et à son époxyde C5-C6.",
    "choiceExplanations": [
      "Vrai. Le nombre total est donné.",
      "Vrai. Elles forment le système triénique.",
      "Faux. Cette structure concerne les prostanoïdes.",
      "Vrai. Cette particularité structurale est explicitement présentée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lta4-structure"
    }
  },
  {
    "order": 97,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la formation de lxa₄ et ltb₄ :",
    "choices": [
      "LTA₄ peut conduire à LXA₄.",
      "La 15-lipoxygénase intervient dans la formation de LXA₄ à partir de LTA₄.",
      "LXA₄ et LTB₄ sont deux thromboxanes.",
      "LTA₄ peut également conduire à LTB₄."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "LTA₄ constitue un carrefour vers une lipoxine et plusieurs leucotriènes.",
    "choiceExplanations": [
      "Vrai. La branche lipoxine est représentée.",
      "Vrai. L’enzyme est placée sur la flèche.",
      "Faux. LX désigne une lipoxine et LT un leucotriène.",
      "Vrai. Une autre branche est représentée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  },
  {
    "order": 98,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la formation de ltc₄ :",
    "choices": [
      "LTC₄ dérive d’une branche issue de LTA₄.",
      "La fixation du glutathion intervient.",
      "La formation de LTC₄ est indépendante de tout peptide ou acide aminé.",
      "Le glutathion est présenté comme γ-Glu-Cys-Gly."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "LTC₄ est formé par association de LTA₄ avec le glutathion.",
    "choiceExplanations": [
      "Vrai. Le schéma part de cet intermédiaire.",
      "Vrai. Le tripeptide est ajouté dans la branche.",
      "Faux. La présence du glutathion caractérise précisément cette branche.",
      "Vrai. Les trois résidus sont indiqués."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  },
  {
    "order": 99,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la succession ltc₄-ltd₄-lte₄ :",
    "choices": [
      "Le glutathion est progressivement clivé.",
      "Un résidu glutamate est retiré entre LTC₄ et LTD₄ dans le schéma.",
      "La partie peptidique s’allonge à chaque étape.",
      "Un résidu glycine est ensuite retiré entre LTD₄ et LTE₄."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La branche LTC₄ → LTD₄ → LTE₄ correspond à des clivages successifs du glutathion.",
    "choiceExplanations": [
      "Vrai. La fiche décrit un raccourcissement progressif.",
      "Vrai. La mention Glu est portée sur la première étape.",
      "Faux. Elle est au contraire progressivement raccourcie.",
      "Vrai. La mention Gly est portée sur la seconde étape."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le rôle de carrefour de lta₄ :",
    "choices": [
      "LTA₄ peut conduire à LXA₄.",
      "LTA₄ peut conduire à LTB₄.",
      "LTA₄ ne possède qu’un seul devenir, la formation de TXA₂.",
      "LTA₄ peut conduire à LTC₄ puis LTD₄ et LTE₄."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "LTA₄ est un intermédiaire central de la voie leucotriène et lipoxine.",
    "choiceExplanations": [
      "Vrai. Une branche implique la 15-lipoxygénase.",
      "Vrai. Cette branche est représentée.",
      "Faux. Le schéma montre plusieurs devenirs et TXA₂ appartient à une autre voie.",
      "Vrai. La branche au glutathion est détaillée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  },
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la structure générale des leucotriènes, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Ils sont décrits comme des molécules totalement saturées.",
      "Ils dérivent de composés eicosanoïques à 20 carbones.",
      "Trois de leurs doubles liaisons sont conjuguées et forment un système triénique.",
      "Ils comportent quatre doubles liaisons."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les leucotriènes sont des eicosanoïdes C20 à quatre doubles liaisons, dont trois conjuguées.",
    "choiceExplanations": [
      "Faux. Ils possèdent quatre doubles liaisons.",
      "Vrai. Le squelette C20 est rappelé.",
      "Vrai. Cette particularité structurelle est mise en avant.",
      "Vrai. Le nombre total est donné."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lta4-structure"
    }
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur les cellules productrices de leucotriènes, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Seules les cellules musculaires lisses synthétisent les leucotriènes.",
      "Les leucocytes sont cités.",
      "Les plaquettes sont également citées.",
      "Les mastocytes et les macrophages sont cités."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le cours cite leucocytes, mastocytes, plaquettes et macrophages parmi les cellules productrices.",
    "choiceExplanations": [
      "Faux. Les muscles lisses sont surtout présentés comme des cibles d’effet.",
      "Vrai. Ils figurent dans la liste des cellules productrices.",
      "Vrai. Elles appartiennent à la liste.",
      "Vrai. Ces deux cellules immunitaires sont mentionnées."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-cells-effects"
    }
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans un contexte de bronchoconstriction liée à des médiateurs lipidiques, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Les leucotriènes sont décrits comme exclusivement bronchodilatateurs.",
      "La vasoconstriction est citée.",
      "Ces effets concernent des muscles lisses.",
      "La bronchoconstriction est citée."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les leucotriènes peuvent provoquer vasoconstriction et bronchoconstriction.",
    "choiceExplanations": [
      "Faux. L’effet indiqué est la bronchoconstriction.",
      "Vrai. Elle figure dans les exemples d’effets.",
      "Vrai. La fiche les classe dans cette catégorie.",
      "Vrai. Elle figure également dans la fiche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-cells-effects"
    }
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans un contexte de recrutement et d’activation immunitaire, quelles propositions décrivent les leucotriènes ?",
    "choices": [
      "Ils suppriment toute activité lymphocytaire.",
      "Le chimiotactisme est cité.",
      "Leurs fonctions immunitaires s’ajoutent à leurs effets sur les muscles lisses.",
      "Ils augmentent l’activité cytotoxique des lymphocytes dans la fiche."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les leucotriènes possèdent des fonctions immunitaires de recrutement et d’activation.",
    "choiceExplanations": [
      "Faux. La fiche indique une augmentation de l’activité cytotoxique.",
      "Vrai. Il appartient aux rôles immunitaires présentés.",
      "Vrai. Les deux catégories sont distinctement présentées.",
      "Vrai. Cet effet est explicitement donné."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-cells-effects"
    }
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la formation de lta₄, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "LTA₄ est formé directement par la COX.",
      "LTA₄ est formé à partir de l’acide arachidonique.",
      "LTA₄ constitue un intermédiaire vers plusieurs produits.",
      "La 5-lipoxygénase intervient dans sa formation."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La 5-lipoxygénase transforme l’acide arachidonique en LTA₄.",
    "choiceExplanations": [
      "Faux. La COX appartient à la voie des prostanoïdes.",
      "Vrai. Le précurseur est indiqué.",
      "Vrai. Il alimente plusieurs branches.",
      "Vrai. L’enzyme est nommée dans la fiche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lta4-structure"
    }
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la structure de lta₄, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "LTA₄ possède le cyclopentane C8-C12 de l’acide prostanoïque.",
      "LTA₄ possède quatre doubles liaisons.",
      "LTA₄ possède un pont époxyde entre C5 et C6.",
      "Trois doubles liaisons sont conjuguées."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "LTA₄ est reconnaissable à son système triénique et à son époxyde C5-C6.",
    "choiceExplanations": [
      "Faux. Cette structure concerne les prostanoïdes.",
      "Vrai. Le nombre total est donné.",
      "Vrai. Cette particularité structurale est explicitement présentée.",
      "Vrai. Elles forment le système triénique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lta4-structure"
    }
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la formation de lxa₄ et ltb₄, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "LXA₄ et LTB₄ sont deux thromboxanes.",
      "LTA₄ peut conduire à LXA₄.",
      "LTA₄ peut également conduire à LTB₄.",
      "La 15-lipoxygénase intervient dans la formation de LXA₄ à partir de LTA₄."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "LTA₄ constitue un carrefour vers une lipoxine et plusieurs leucotriènes.",
    "choiceExplanations": [
      "Faux. LX désigne une lipoxine et LT un leucotriène.",
      "Vrai. La branche lipoxine est représentée.",
      "Vrai. Une autre branche est représentée.",
      "Vrai. L’enzyme est placée sur la flèche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la formation de ltc₄, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "La formation de LTC₄ est indépendante de tout peptide ou acide aminé.",
      "LTC₄ dérive d’une branche issue de LTA₄.",
      "Le glutathion est présenté comme γ-Glu-Cys-Gly.",
      "La fixation du glutathion intervient."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "LTC₄ est formé par association de LTA₄ avec le glutathion.",
    "choiceExplanations": [
      "Faux. La présence du glutathion caractérise précisément cette branche.",
      "Vrai. Le schéma part de cet intermédiaire.",
      "Vrai. Les trois résidus sont indiqués.",
      "Vrai. Le tripeptide est ajouté dans la branche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la succession ltc₄-ltd₄-lte₄, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "La partie peptidique s’allonge à chaque étape.",
      "Le glutathion est progressivement clivé.",
      "Un résidu glycine est ensuite retiré entre LTD₄ et LTE₄.",
      "Un résidu glutamate est retiré entre LTC₄ et LTD₄ dans le schéma."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La branche LTC₄ → LTD₄ → LTE₄ correspond à des clivages successifs du glutathion.",
    "choiceExplanations": [
      "Faux. Elle est au contraire progressivement raccourcie.",
      "Vrai. La fiche décrit un raccourcissement progressif.",
      "Vrai. La mention Gly est portée sur la seconde étape.",
      "Vrai. La mention Glu est portée sur la première étape."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur le rôle de carrefour de lta₄, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "LTA₄ ne possède qu’un seul devenir, la formation de TXA₂.",
      "LTA₄ peut conduire à LXA₄.",
      "LTA₄ peut conduire à LTC₄ puis LTD₄ et LTE₄.",
      "LTA₄ peut conduire à LTB₄."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "LTA₄ est un intermédiaire central de la voie leucotriène et lipoxine.",
    "choiceExplanations": [
      "Faux. Le schéma montre plusieurs devenirs et TXA₂ appartient à une autre voie.",
      "Vrai. Une branche implique la 15-lipoxygénase.",
      "Vrai. La branche au glutathion est détaillée.",
      "Vrai. Cette branche est représentée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la structure générale des leucotriènes. Quelles conclusions sont exactes ?",
    "choices": [
      "Trois de leurs doubles liaisons sont conjuguées et forment un système triénique.",
      "Ils sont décrits comme des molécules totalement saturées.",
      "Ils comportent quatre doubles liaisons.",
      "Ils dérivent de composés eicosanoïques à 20 carbones."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les leucotriènes sont des eicosanoïdes C20 à quatre doubles liaisons, dont trois conjuguées.",
    "choiceExplanations": [
      "Vrai. Cette particularité structurelle est mise en avant.",
      "Faux. Ils possèdent quatre doubles liaisons.",
      "Vrai. Le nombre total est donné.",
      "Vrai. Le squelette C20 est rappelé."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lta4-structure"
    }
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse les cellules productrices de leucotriènes. Quelles conclusions sont exactes ?",
    "choices": [
      "Les plaquettes sont également citées.",
      "Seules les cellules musculaires lisses synthétisent les leucotriènes.",
      "Les mastocytes et les macrophages sont cités.",
      "Les leucocytes sont cités."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le cours cite leucocytes, mastocytes, plaquettes et macrophages parmi les cellules productrices.",
    "choiceExplanations": [
      "Vrai. Elles appartiennent à la liste.",
      "Faux. Les muscles lisses sont surtout présentés comme des cibles d’effet.",
      "Vrai. Ces deux cellules immunitaires sont mentionnées.",
      "Vrai. Ils figurent dans la liste des cellules productrices."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-cells-effects"
    }
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un médiateur produit par un mastocyte agit sur le muscle lisse bronchique. Quelles conclusions sont cohérentes ?",
    "choices": [
      "Ces effets concernent des muscles lisses.",
      "Les leucotriènes sont décrits comme exclusivement bronchodilatateurs.",
      "La bronchoconstriction est citée.",
      "La vasoconstriction est citée."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les leucotriènes peuvent provoquer vasoconstriction et bronchoconstriction.",
    "choiceExplanations": [
      "Vrai. La fiche les classe dans cette catégorie.",
      "Faux. L’effet indiqué est la bronchoconstriction.",
      "Vrai. Elle figure également dans la fiche.",
      "Vrai. Elle figure dans les exemples d’effets."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-cells-effects"
    }
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant relie chimiotactisme et cytotoxicité lymphocytaire à une famille d’eicosanoïdes. Quelles conclusions sont exactes ?",
    "choices": [
      "Leurs fonctions immunitaires s’ajoutent à leurs effets sur les muscles lisses.",
      "Ils suppriment toute activité lymphocytaire.",
      "Ils augmentent l’activité cytotoxique des lymphocytes dans la fiche.",
      "Le chimiotactisme est cité."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les leucotriènes possèdent des fonctions immunitaires de recrutement et d’activation.",
    "choiceExplanations": [
      "Vrai. Les deux catégories sont distinctement présentées.",
      "Faux. La fiche indique une augmentation de l’activité cytotoxique.",
      "Vrai. Cet effet est explicitement donné.",
      "Vrai. Il appartient aux rôles immunitaires présentés."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-cells-effects"
    }
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la formation de lta₄. Quelles conclusions sont exactes ?",
    "choices": [
      "LTA₄ constitue un intermédiaire vers plusieurs produits.",
      "LTA₄ est formé directement par la COX.",
      "La 5-lipoxygénase intervient dans sa formation.",
      "LTA₄ est formé à partir de l’acide arachidonique."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La 5-lipoxygénase transforme l’acide arachidonique en LTA₄.",
    "choiceExplanations": [
      "Vrai. Il alimente plusieurs branches.",
      "Faux. La COX appartient à la voie des prostanoïdes.",
      "Vrai. L’enzyme est nommée dans la fiche.",
      "Vrai. Le précurseur est indiqué."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lta4-structure"
    }
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la structure de lta₄. Quelles conclusions sont exactes ?",
    "choices": [
      "LTA₄ possède un pont époxyde entre C5 et C6.",
      "LTA₄ possède le cyclopentane C8-C12 de l’acide prostanoïque.",
      "Trois doubles liaisons sont conjuguées.",
      "LTA₄ possède quatre doubles liaisons."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "LTA₄ est reconnaissable à son système triénique et à son époxyde C5-C6.",
    "choiceExplanations": [
      "Vrai. Cette particularité structurale est explicitement présentée.",
      "Faux. Cette structure concerne les prostanoïdes.",
      "Vrai. Elles forment le système triénique.",
      "Vrai. Le nombre total est donné."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lta4-structure"
    }
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la formation de lxa₄ et ltb₄. Quelles conclusions sont exactes ?",
    "choices": [
      "LTA₄ peut également conduire à LTB₄.",
      "LXA₄ et LTB₄ sont deux thromboxanes.",
      "La 15-lipoxygénase intervient dans la formation de LXA₄ à partir de LTA₄.",
      "LTA₄ peut conduire à LXA₄."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "LTA₄ constitue un carrefour vers une lipoxine et plusieurs leucotriènes.",
    "choiceExplanations": [
      "Vrai. Une autre branche est représentée.",
      "Faux. LX désigne une lipoxine et LT un leucotriène.",
      "Vrai. L’enzyme est placée sur la flèche.",
      "Vrai. La branche lipoxine est représentée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la formation de ltc₄. Quelles conclusions sont exactes ?",
    "choices": [
      "Le glutathion est présenté comme γ-Glu-Cys-Gly.",
      "La formation de LTC₄ est indépendante de tout peptide ou acide aminé.",
      "La fixation du glutathion intervient.",
      "LTC₄ dérive d’une branche issue de LTA₄."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "LTC₄ est formé par association de LTA₄ avec le glutathion.",
    "choiceExplanations": [
      "Vrai. Les trois résidus sont indiqués.",
      "Faux. La présence du glutathion caractérise précisément cette branche.",
      "Vrai. Le tripeptide est ajouté dans la branche.",
      "Vrai. Le schéma part de cet intermédiaire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la succession ltc₄-ltd₄-lte₄. Quelles conclusions sont exactes ?",
    "choices": [
      "Un résidu glycine est ensuite retiré entre LTD₄ et LTE₄.",
      "La partie peptidique s’allonge à chaque étape.",
      "Un résidu glutamate est retiré entre LTC₄ et LTD₄ dans le schéma.",
      "Le glutathion est progressivement clivé."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La branche LTC₄ → LTD₄ → LTE₄ correspond à des clivages successifs du glutathion.",
    "choiceExplanations": [
      "Vrai. La mention Gly est portée sur la seconde étape.",
      "Faux. Elle est au contraire progressivement raccourcie.",
      "Vrai. La mention Glu est portée sur la première étape.",
      "Vrai. La fiche décrit un raccourcissement progressif."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse le rôle de carrefour de lta₄. Quelles conclusions sont exactes ?",
    "choices": [
      "LTA₄ peut conduire à LTC₄ puis LTD₄ et LTE₄.",
      "LTA₄ ne possède qu’un seul devenir, la formation de TXA₂.",
      "LTA₄ peut conduire à LTB₄.",
      "LTA₄ peut conduire à LXA₄."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "LTA₄ est un intermédiaire central de la voie leucotriène et lipoxine.",
    "choiceExplanations": [
      "Vrai. La branche au glutathion est détaillée.",
      "Faux. Le schéma montre plusieurs devenirs et TXA₂ appartient à une autre voie.",
      "Vrai. Cette branche est représentée.",
      "Vrai. Une branche implique la 15-lipoxygénase."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  }
];
