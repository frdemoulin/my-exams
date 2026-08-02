import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "31": [
    "l’acide prostanoïque"
  ],
  "32": [
    "le cycle du squelette prostanoïde"
  ],
  "33": [
    "l’orientation des chaînes du prostanoïde"
  ],
  "34": [
    "les groupes de prostaglandines"
  ],
  "35": [
    "les séries de prostaglandines"
  ],
  "36": [
    "la série 1 des prostaglandines"
  ],
  "37": [
    "la série 2 des prostaglandines"
  ],
  "38": [
    "la série 3 des prostaglandines"
  ],
  "39": [
    "la lecture de PGE₂"
  ],
  "40": [
    "la lecture de PGF₂α"
  ],
  "41": [
    "l’acide prostanoïque"
  ],
  "42": [
    "le cycle du squelette prostanoïde"
  ],
  "43": [
    "l’orientation des chaînes du prostanoïde"
  ],
  "44": [
    "les groupes de prostaglandines"
  ],
  "45": [
    "les séries de prostaglandines"
  ],
  "46": [
    "la série 1 des prostaglandines"
  ],
  "47": [
    "la série 2 des prostaglandines"
  ],
  "48": [
    "la série 3 des prostaglandines"
  ],
  "49": [
    "la lecture de PGE₂"
  ],
  "50": [
    "la lecture de PGF₂α"
  ],
  "51": [
    "l’acide prostanoïque"
  ],
  "52": [
    "le cycle du squelette prostanoïde"
  ],
  "53": [
    "l’orientation des chaînes du prostanoïde"
  ],
  "54": [
    "les groupes de prostaglandines"
  ],
  "55": [
    "les séries de prostaglandines"
  ],
  "56": [
    "la série 1 des prostaglandines"
  ],
  "57": [
    "la série 2 des prostaglandines"
  ],
  "58": [
    "la série 3 des prostaglandines"
  ],
  "59": [
    "la lecture de PGE₂"
  ],
  "60": [
    "la lecture de PGF₂α"
  ]
};

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "structure-et-nomenclature-des-prostanoides",
    "title": "Structure et nomenclature des prostanoïdes",
    "description": "Comprendre le squelette de référence et la nomenclature.",
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
    "slug": "series-de-prostaglandines",
    "title": "Séries de prostaglandines",
    "description": "Comparer séries 1, 2 et 3, positions et précurseurs.",
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
    "slug": "raisonnement-structure-et-series",
    "title": "Raisonnement sur la structure et les séries",
    "description": "Identifier groupe, série et orientation à partir d’indices.",
    "stage": "MASTER",
    "sectionOrder": 2,
    "items": [
      {
        "type": "GROUP",
        "title": "Squelette de référence",
        "sharedStatement": "Les questions suivantes portent sur l’acide prostanoïque et le noyau C8-C12.",
        "questionOrders": [
          51,
          52,
          53
        ]
      },
      {
        "type": "GROUP",
        "title": "Groupes et séries",
        "sharedStatement": "Les questions suivantes distinguent les critères de nomenclature.",
        "questionOrders": [
          54,
          55,
          56
        ]
      },
      {
        "type": "GROUP",
        "title": "Lecture des prostaglandines",
        "sharedStatement": "Les questions suivantes exploitent les séries 1 à 3 et les noms PGE₂ ou PGF₂α.",
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
    "question": "À propos de l’acide prostanoïque :",
    "choices": [
      "Il sert de référence pour décrire la structure de base des prostanoïdes.",
      "Il n’existe pas à l’état naturel selon la fiche.",
      "Il constitue le principal leucotriène circulant.",
      "Il dérive d’un squelette d’acide gras à 20 carbones."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "L’acide prostanoïque est une référence structurale C20, non un composé naturel.",
    "choiceExplanations": [
      "Vrai. C’est son utilité dans le cours.",
      "Vrai. Cette précision est explicite.",
      "Faux. Il s’agit d’un modèle structural des prostanoïdes.",
      "Vrai. Le nombre de carbones est rappelé."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostanoic-acid-reference"
    }
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le cycle du squelette prostanoïde :",
    "choices": [
      "Il s’agit d’un cyclopentane saturé.",
      "Le cycle est compris entre les carbones 8 et 12.",
      "Il s’agit d’un cycle benzénique aromatique à six carbones.",
      "Les substituants de ce cycle participent à la définition des groupes de prostaglandines."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le noyau cyclopentane C8-C12 constitue le centre structural des prostanoïdes.",
    "choiceExplanations": [
      "Vrai. Le cycle à cinq carbones est décrit comme saturé.",
      "Vrai. Les numéros C8 à C12 sont indiqués.",
      "Faux. Le noyau est un cyclopentane non aromatique.",
      "Vrai. La nature des radicaux oxygénés du noyau définit les groupes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostanoic-acid-reference"
    }
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’orientation des chaînes du prostanoïde :",
    "choices": [
      "La chaîne en C8 est en arrière du plan du cycle.",
      "La chaîne en C12 est en avant du plan.",
      "Les deux chaînes sont obligatoirement dans le même plan sans orientation spatiale.",
      "Les deux chaînes sont disposées de part et d’autre du plan du cycle."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La représentation du squelette prostanoïde comporte une stéréochimie explicite en C8 et C12.",
    "choiceExplanations": [
      "Vrai. Cette orientation est indiquée dans la fiche.",
      "Vrai. La représentation l’oppose à la chaîne en C8.",
      "Faux. Le cours précise des orientations avant/arrière.",
      "Vrai. La structure comporte une information stéréochimique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostanoic-acid-reference"
    }
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les groupes de prostaglandines :",
    "choices": [
      "Les groupes principaux sont A, B, C, D, E et F.",
      "Ils dépendent des substituants du cyclopentane.",
      "Les lettres A à F indiquent directement le nombre de doubles liaisons latérales.",
      "Le type de radicaux oxygénés et leur orientation participent à cette classification."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les groupes de prostaglandines sont définis par les substituants oxygénés du noyau.",
    "choiceExplanations": [
      "Vrai. Six groupes sont listés.",
      "Vrai. Le noyau oxygéné détermine la lettre.",
      "Faux. Ce nombre définit la série, pas le groupe.",
      "Vrai. C’est le critère donné dans la fiche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-nomenclature"
    }
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les séries de prostaglandines :",
    "choices": [
      "Les séries présentées sont 1, 2 et 3.",
      "La série dépend du nombre de doubles liaisons des chaînes latérales.",
      "La série est définie uniquement par l’orientation du groupement hydroxyle en C9.",
      "Le chiffre de série fait partie de la nomenclature d’une prostaglandine."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le chiffre de série traduit le nombre de doubles liaisons des chaînes latérales.",
    "choiceExplanations": [
      "Vrai. Trois séries sont décrites.",
      "Vrai. C’est le critère de définition.",
      "Faux. Cette orientation est décrite par α ou β.",
      "Vrai. Il apparaît notamment dans PGE₂."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-series"
    }
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la série 1 des prostaglandines :",
    "choices": [
      "Elle comporte une double liaison Δ13.",
      "Elle dérive de l’acide linoléique dans la fiche.",
      "Elle comporte les doubles liaisons Δ5,13,17.",
      "Elle est présentée comme plus rare."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La série 1 est une série plus rare à une double liaison, rattachée à l’acide linoléique.",
    "choiceExplanations": [
      "Vrai. Une seule position est donnée.",
      "Vrai. Ce précurseur est explicitement associé à la série 1.",
      "Faux. Ces positions correspondent à la série 3.",
      "Vrai. La fréquence relative est précisée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-series"
    }
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la série 2 des prostaglandines :",
    "choices": [
      "Elle comporte deux doubles liaisons Δ5 et Δ13.",
      "Elle dérive de l’acide arachidonique.",
      "Elle est dépourvue de toute double liaison.",
      "Elle est la plus fréquente dans la nature selon la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La série 2 issue de l’acide arachidonique est la plus développée dans le chapitre.",
    "choiceExplanations": [
      "Vrai. Les deux positions sont données.",
      "Vrai. Ce précurseur central est associé à la série 2.",
      "Faux. La série 2 en comporte deux.",
      "Vrai. La fréquence est mise en avant."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-series"
    }
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la série 3 des prostaglandines :",
    "choices": [
      "Elle comporte trois doubles liaisons Δ5,13,17.",
      "Elle dérive de l’acide α-linolénique.",
      "Elle dérive de l’acide stéarique saturé.",
      "Elle est présentée comme plus rare."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La série 3 est une série plus rare à trois doubles liaisons.",
    "choiceExplanations": [
      "Vrai. Trois positions sont indiquées.",
      "Vrai. Ce précurseur est associé à la série 3.",
      "Faux. Le précurseur indiqué est l’acide α-linolénique.",
      "Vrai. La fiche le précise."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-series"
    }
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la lecture de pge₂ :",
    "choices": [
      "PG indique qu’il s’agit d’une prostaglandine.",
      "E indique le groupe défini par les substituants du noyau.",
      "Le chiffre 2 indique que la molécule possède deux cycles cyclopentane.",
      "2 indique la série comportant deux doubles liaisons latérales."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "PGE₂ combine la famille PG, le groupe E et la série 2.",
    "choiceExplanations": [
      "Vrai. Le préfixe donne la famille.",
      "Vrai. La lettre donne le groupe.",
      "Faux. Il renseigne sur les doubles liaisons latérales.",
      "Vrai. Le chiffre donne la série."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-nomenclature"
    }
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la lecture de pgf₂α :",
    "choices": [
      "F désigne le groupe de prostaglandines.",
      "2 désigne la série.",
      "α indique que la molécule appartient à la série 1.",
      "α indique une orientation en arrière du plan pour le groupement hydroxyle en C9."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "PGF₂α associe un groupe F, une série 2 et une orientation α.",
    "choiceExplanations": [
      "Vrai. La lettre donne le type de noyau oxygéné.",
      "Vrai. Le chiffre donne le nombre de doubles liaisons latérales.",
      "Faux. La série est donnée par le chiffre 2.",
      "Vrai. La convention α est donnée dans la fiche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-nomenclature"
    }
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur l’acide prostanoïque, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Il constitue le principal leucotriène circulant.",
      "Il sert de référence pour décrire la structure de base des prostanoïdes.",
      "Il dérive d’un squelette d’acide gras à 20 carbones.",
      "Il n’existe pas à l’état naturel selon la fiche."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’acide prostanoïque est une référence structurale C20, non un composé naturel.",
    "choiceExplanations": [
      "Faux. Il s’agit d’un modèle structural des prostanoïdes.",
      "Vrai. C’est son utilité dans le cours.",
      "Vrai. Le nombre de carbones est rappelé.",
      "Vrai. Cette précision est explicite."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostanoic-acid-reference"
    }
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur le cycle du squelette prostanoïde, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Il s’agit d’un cycle benzénique aromatique à six carbones.",
      "Il s’agit d’un cyclopentane saturé.",
      "Les substituants de ce cycle participent à la définition des groupes de prostaglandines.",
      "Le cycle est compris entre les carbones 8 et 12."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le noyau cyclopentane C8-C12 constitue le centre structural des prostanoïdes.",
    "choiceExplanations": [
      "Faux. Le noyau est un cyclopentane non aromatique.",
      "Vrai. Le cycle à cinq carbones est décrit comme saturé.",
      "Vrai. La nature des radicaux oxygénés du noyau définit les groupes.",
      "Vrai. Les numéros C8 à C12 sont indiqués."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostanoic-acid-reference"
    }
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur l’orientation des chaînes du prostanoïde, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Les deux chaînes sont obligatoirement dans le même plan sans orientation spatiale.",
      "La chaîne en C8 est en arrière du plan du cycle.",
      "Les deux chaînes sont disposées de part et d’autre du plan du cycle.",
      "La chaîne en C12 est en avant du plan."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La représentation du squelette prostanoïde comporte une stéréochimie explicite en C8 et C12.",
    "choiceExplanations": [
      "Faux. Le cours précise des orientations avant/arrière.",
      "Vrai. Cette orientation est indiquée dans la fiche.",
      "Vrai. La structure comporte une information stéréochimique.",
      "Vrai. La représentation l’oppose à la chaîne en C8."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostanoic-acid-reference"
    }
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur les groupes de prostaglandines, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Les lettres A à F indiquent directement le nombre de doubles liaisons latérales.",
      "Les groupes principaux sont A, B, C, D, E et F.",
      "Le type de radicaux oxygénés et leur orientation participent à cette classification.",
      "Ils dépendent des substituants du cyclopentane."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les groupes de prostaglandines sont définis par les substituants oxygénés du noyau.",
    "choiceExplanations": [
      "Faux. Ce nombre définit la série, pas le groupe.",
      "Vrai. Six groupes sont listés.",
      "Vrai. C’est le critère donné dans la fiche.",
      "Vrai. Le noyau oxygéné détermine la lettre."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-nomenclature"
    }
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur les séries de prostaglandines, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "La série est définie uniquement par l’orientation du groupement hydroxyle en C9.",
      "Les séries présentées sont 1, 2 et 3.",
      "Le chiffre de série fait partie de la nomenclature d’une prostaglandine.",
      "La série dépend du nombre de doubles liaisons des chaînes latérales."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le chiffre de série traduit le nombre de doubles liaisons des chaînes latérales.",
    "choiceExplanations": [
      "Faux. Cette orientation est décrite par α ou β.",
      "Vrai. Trois séries sont décrites.",
      "Vrai. Il apparaît notamment dans PGE₂.",
      "Vrai. C’est le critère de définition."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-series"
    }
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la série 1 des prostaglandines, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Elle comporte les doubles liaisons Δ5,13,17.",
      "Elle comporte une double liaison Δ13.",
      "Elle est présentée comme plus rare.",
      "Elle dérive de l’acide linoléique dans la fiche."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La série 1 est une série plus rare à une double liaison, rattachée à l’acide linoléique.",
    "choiceExplanations": [
      "Faux. Ces positions correspondent à la série 3.",
      "Vrai. Une seule position est donnée.",
      "Vrai. La fréquence relative est précisée.",
      "Vrai. Ce précurseur est explicitement associé à la série 1."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-series"
    }
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la série 2 des prostaglandines, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Elle est dépourvue de toute double liaison.",
      "Elle comporte deux doubles liaisons Δ5 et Δ13.",
      "Elle est la plus fréquente dans la nature selon la fiche.",
      "Elle dérive de l’acide arachidonique."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La série 2 issue de l’acide arachidonique est la plus développée dans le chapitre.",
    "choiceExplanations": [
      "Faux. La série 2 en comporte deux.",
      "Vrai. Les deux positions sont données.",
      "Vrai. La fréquence est mise en avant.",
      "Vrai. Ce précurseur central est associé à la série 2."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-series"
    }
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la série 3 des prostaglandines, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Elle dérive de l’acide stéarique saturé.",
      "Elle comporte trois doubles liaisons Δ5,13,17.",
      "Elle est présentée comme plus rare.",
      "Elle dérive de l’acide α-linolénique."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La série 3 est une série plus rare à trois doubles liaisons.",
    "choiceExplanations": [
      "Faux. Le précurseur indiqué est l’acide α-linolénique.",
      "Vrai. Trois positions sont indiquées.",
      "Vrai. La fiche le précise.",
      "Vrai. Ce précurseur est associé à la série 3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-series"
    }
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la lecture de pge₂, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Le chiffre 2 indique que la molécule possède deux cycles cyclopentane.",
      "PG indique qu’il s’agit d’une prostaglandine.",
      "2 indique la série comportant deux doubles liaisons latérales.",
      "E indique le groupe défini par les substituants du noyau."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "PGE₂ combine la famille PG, le groupe E et la série 2.",
    "choiceExplanations": [
      "Faux. Il renseigne sur les doubles liaisons latérales.",
      "Vrai. Le préfixe donne la famille.",
      "Vrai. Le chiffre donne la série.",
      "Vrai. La lettre donne le groupe."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-nomenclature"
    }
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la lecture de pgf₂α, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "α indique que la molécule appartient à la série 1.",
      "F désigne le groupe de prostaglandines.",
      "α indique une orientation en arrière du plan pour le groupement hydroxyle en C9.",
      "2 désigne la série."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "PGF₂α associe un groupe F, une série 2 et une orientation α.",
    "choiceExplanations": [
      "Faux. La série est donnée par le chiffre 2.",
      "Vrai. La lettre donne le type de noyau oxygéné.",
      "Vrai. La convention α est donnée dans la fiche.",
      "Vrai. Le chiffre donne le nombre de doubles liaisons latérales."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-nomenclature"
    }
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse l’acide prostanoïque. Quelles conclusions sont exactes ?",
    "choices": [
      "Il dérive d’un squelette d’acide gras à 20 carbones.",
      "Il constitue le principal leucotriène circulant.",
      "Il n’existe pas à l’état naturel selon la fiche.",
      "Il sert de référence pour décrire la structure de base des prostanoïdes."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’acide prostanoïque est une référence structurale C20, non un composé naturel.",
    "choiceExplanations": [
      "Vrai. Le nombre de carbones est rappelé.",
      "Faux. Il s’agit d’un modèle structural des prostanoïdes.",
      "Vrai. Cette précision est explicite.",
      "Vrai. C’est son utilité dans le cours."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostanoic-acid-reference"
    }
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse le cycle du squelette prostanoïde. Quelles conclusions sont exactes ?",
    "choices": [
      "Les substituants de ce cycle participent à la définition des groupes de prostaglandines.",
      "Il s’agit d’un cycle benzénique aromatique à six carbones.",
      "Le cycle est compris entre les carbones 8 et 12.",
      "Il s’agit d’un cyclopentane saturé."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le noyau cyclopentane C8-C12 constitue le centre structural des prostanoïdes.",
    "choiceExplanations": [
      "Vrai. La nature des radicaux oxygénés du noyau définit les groupes.",
      "Faux. Le noyau est un cyclopentane non aromatique.",
      "Vrai. Les numéros C8 à C12 sont indiqués.",
      "Vrai. Le cycle à cinq carbones est décrit comme saturé."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostanoic-acid-reference"
    }
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse l’orientation des chaînes du prostanoïde. Quelles conclusions sont exactes ?",
    "choices": [
      "Les deux chaînes sont disposées de part et d’autre du plan du cycle.",
      "Les deux chaînes sont obligatoirement dans le même plan sans orientation spatiale.",
      "La chaîne en C12 est en avant du plan.",
      "La chaîne en C8 est en arrière du plan du cycle."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La représentation du squelette prostanoïde comporte une stéréochimie explicite en C8 et C12.",
    "choiceExplanations": [
      "Vrai. La structure comporte une information stéréochimique.",
      "Faux. Le cours précise des orientations avant/arrière.",
      "Vrai. La représentation l’oppose à la chaîne en C8.",
      "Vrai. Cette orientation est indiquée dans la fiche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostanoic-acid-reference"
    }
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse les groupes de prostaglandines. Quelles conclusions sont exactes ?",
    "choices": [
      "Le type de radicaux oxygénés et leur orientation participent à cette classification.",
      "Les lettres A à F indiquent directement le nombre de doubles liaisons latérales.",
      "Ils dépendent des substituants du cyclopentane.",
      "Les groupes principaux sont A, B, C, D, E et F."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les groupes de prostaglandines sont définis par les substituants oxygénés du noyau.",
    "choiceExplanations": [
      "Vrai. C’est le critère donné dans la fiche.",
      "Faux. Ce nombre définit la série, pas le groupe.",
      "Vrai. Le noyau oxygéné détermine la lettre.",
      "Vrai. Six groupes sont listés."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-nomenclature"
    }
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse les séries de prostaglandines. Quelles conclusions sont exactes ?",
    "choices": [
      "Le chiffre de série fait partie de la nomenclature d’une prostaglandine.",
      "La série est définie uniquement par l’orientation du groupement hydroxyle en C9.",
      "La série dépend du nombre de doubles liaisons des chaînes latérales.",
      "Les séries présentées sont 1, 2 et 3."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le chiffre de série traduit le nombre de doubles liaisons des chaînes latérales.",
    "choiceExplanations": [
      "Vrai. Il apparaît notamment dans PGE₂.",
      "Faux. Cette orientation est décrite par α ou β.",
      "Vrai. C’est le critère de définition.",
      "Vrai. Trois séries sont décrites."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-series"
    }
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la série 1 des prostaglandines. Quelles conclusions sont exactes ?",
    "choices": [
      "Elle est présentée comme plus rare.",
      "Elle comporte les doubles liaisons Δ5,13,17.",
      "Elle dérive de l’acide linoléique dans la fiche.",
      "Elle comporte une double liaison Δ13."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La série 1 est une série plus rare à une double liaison, rattachée à l’acide linoléique.",
    "choiceExplanations": [
      "Vrai. La fréquence relative est précisée.",
      "Faux. Ces positions correspondent à la série 3.",
      "Vrai. Ce précurseur est explicitement associé à la série 1.",
      "Vrai. Une seule position est donnée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-series"
    }
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la série 2 des prostaglandines. Quelles conclusions sont exactes ?",
    "choices": [
      "Elle est la plus fréquente dans la nature selon la fiche.",
      "Elle est dépourvue de toute double liaison.",
      "Elle dérive de l’acide arachidonique.",
      "Elle comporte deux doubles liaisons Δ5 et Δ13."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La série 2 issue de l’acide arachidonique est la plus développée dans le chapitre.",
    "choiceExplanations": [
      "Vrai. La fréquence est mise en avant.",
      "Faux. La série 2 en comporte deux.",
      "Vrai. Ce précurseur central est associé à la série 2.",
      "Vrai. Les deux positions sont données."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-series"
    }
  },
  {
    "order": 58,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la série 3 des prostaglandines. Quelles conclusions sont exactes ?",
    "choices": [
      "Elle est présentée comme plus rare.",
      "Elle dérive de l’acide stéarique saturé.",
      "Elle dérive de l’acide α-linolénique.",
      "Elle comporte trois doubles liaisons Δ5,13,17."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La série 3 est une série plus rare à trois doubles liaisons.",
    "choiceExplanations": [
      "Vrai. La fiche le précise.",
      "Faux. Le précurseur indiqué est l’acide α-linolénique.",
      "Vrai. Ce précurseur est associé à la série 3.",
      "Vrai. Trois positions sont indiquées."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-series"
    }
  },
  {
    "order": 59,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la lecture de pge₂. Quelles conclusions sont exactes ?",
    "choices": [
      "2 indique la série comportant deux doubles liaisons latérales.",
      "Le chiffre 2 indique que la molécule possède deux cycles cyclopentane.",
      "E indique le groupe défini par les substituants du noyau.",
      "PG indique qu’il s’agit d’une prostaglandine."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "PGE₂ combine la famille PG, le groupe E et la série 2.",
    "choiceExplanations": [
      "Vrai. Le chiffre donne la série.",
      "Faux. Il renseigne sur les doubles liaisons latérales.",
      "Vrai. La lettre donne le groupe.",
      "Vrai. Le préfixe donne la famille."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-nomenclature"
    }
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la lecture de pgf₂α. Quelles conclusions sont exactes ?",
    "choices": [
      "α indique une orientation en arrière du plan pour le groupement hydroxyle en C9.",
      "α indique que la molécule appartient à la série 1.",
      "2 désigne la série.",
      "F désigne le groupe de prostaglandines."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "PGF₂α associe un groupe F, une série 2 et une orientation α.",
    "choiceExplanations": [
      "Vrai. La convention α est donnée dans la fiche.",
      "Faux. La série est donnée par le chiffre 2.",
      "Vrai. Le chiffre donne le nombre de doubles liaisons latérales.",
      "Vrai. La lettre donne le type de noyau oxygéné."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-nomenclature"
    }
  }
];
