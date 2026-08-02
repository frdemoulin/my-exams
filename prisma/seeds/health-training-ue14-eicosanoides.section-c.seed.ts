import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "61": [
    "la voie COX des prostanoïdes de série 2"
  ],
  "62": [
    "l’inhibition de la COX"
  ],
  "63": [
    "les propriétés générales des prostanoïdes"
  ],
  "64": [
    "l’action cellulaire des prostanoïdes"
  ],
  "65": [
    "les effets comparés de PGE₁ et PGE₂"
  ],
  "66": [
    "PGF₂α"
  ],
  "67": [
    "le misoprostol"
  ],
  "68": [
    "l’utilisation obstétricale du misoprostol"
  ],
  "69": [
    "le couple TXA₂-PGI₂"
  ],
  "70": [
    "l’aspirine à faible dose"
  ],
  "71": [
    "la voie COX des prostanoïdes de série 2"
  ],
  "72": [
    "l’inhibition de la COX"
  ],
  "73": [
    "les propriétés générales des prostanoïdes"
  ],
  "74": [
    "l’action cellulaire des prostanoïdes"
  ],
  "75": [
    "les effets comparés de PGE₁ et PGE₂"
  ],
  "76": [
    "PGF₂α"
  ],
  "77": [
    "le misoprostol"
  ],
  "78": [
    "l’utilisation obstétricale du misoprostol"
  ],
  "79": [
    "le couple TXA₂-PGI₂"
  ],
  "80": [
    "l’aspirine à faible dose"
  ],
  "81": [
    "la voie COX des prostanoïdes de série 2"
  ],
  "82": [
    "l’inhibition de la COX"
  ],
  "83": [
    "les propriétés générales des prostanoïdes"
  ],
  "84": [
    "l’action cellulaire des prostanoïdes"
  ],
  "85": [
    "les effets comparés de PGE₁ et PGE₂"
  ],
  "86": [
    "PGF₂α"
  ],
  "87": [
    "le misoprostol"
  ],
  "88": [
    "l’utilisation obstétricale du misoprostol"
  ],
  "89": [
    "le couple TXA₂-PGI₂"
  ],
  "90": [
    "l’aspirine à faible dose"
  ]
};

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "prostanoides-et-effets-biologiques",
    "title": "Prostanoïdes et effets biologiques",
    "description": "Étudier la voie de série 2 et les effets biologiques comparés.",
    "stage": "DISCOVER",
    "sectionOrder": 3,
    "questionOrders": [
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70
    ]
  },
  {
    "order": 2,
    "slug": "therapeutique-et-equilibre-vasculaire",
    "title": "Thérapeutique et équilibre vasculaire",
    "description": "Comprendre les applications pharmacologiques et l’antagonisme TXA₂/PGI₂.",
    "stage": "PRACTICE",
    "sectionOrder": 3,
    "questionOrders": [
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80
    ]
  },
  {
    "order": 3,
    "slug": "situations-medicales-et-pharmacologiques",
    "title": "Situations médicales et pharmacologiques",
    "description": "Mobiliser les prostanoïdes dans des contextes thérapeutiques et vasculaires.",
    "stage": "MASTER",
    "sectionOrder": 3,
    "items": [
      {
        "type": "GROUP",
        "title": "Inhibition de la COX",
        "sharedStatement": "Un traitement agit sur la cyclo-oxygénase.",
        "questionOrders": [
          81,
          82,
          83
        ]
      },
      {
        "type": "GROUP",
        "title": "Effets comparés et obstétrique",
        "sharedStatement": "Les questions suivantes exploitent PGE₁, PGE₂, PGF₂α et le misoprostol.",
        "questionOrders": [
          84,
          85,
          86
        ]
      },
      {
        "type": "GROUP",
        "title": "Plaquettes et endothélium",
        "sharedStatement": "Les questions suivantes analysent TXA₂, PGI₂ et l’aspirine à faible dose.",
        "questionOrders": [
          87,
          88,
          89,
          90
        ]
      }
    ]
  }
];

export const SECTION_C_QUESTIONS: SeedQuestion[] = [
  {
    "order": 61,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la voie cox des prostanoïdes de série 2 :",
    "choices": [
      "L’acide arachidonique est placé en amont de la COX.",
      "PGH₂ est représenté comme un intermédiaire central.",
      "La voie conduit uniquement à LTA₄.",
      "La voie conduit notamment à PGI₂, PGD₂, PGE₂, PGF₂α et TXA₂."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La voie COX de série 2 se ramifie à partir de PGH₂ vers plusieurs prostanoïdes.",
    "choiceExplanations": [
      "Vrai. Il constitue le précurseur du schéma.",
      "Vrai. Plusieurs synthases partent de cet intermédiaire.",
      "Faux. LTA₄ appartient à la voie de la 5-lipoxygénase.",
      "Vrai. Ces produits sont représentés dans la fiche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cox-series2-pathway"
    }
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’inhibition de la cox :",
    "choices": [
      "L’aspirine est citée comme inhibiteur de la COX.",
      "L’ibuprofène est cité comme inhibiteur de la COX.",
      "Le misoprostol est présenté comme l’unique inhibiteur de la COX.",
      "Une inhibition de la COX agit en amont de plusieurs prostanoïdes."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Aspirine et ibuprofène sont placés au niveau de la cyclo-oxygénase.",
    "choiceExplanations": [
      "Vrai. Elle figure sur le schéma.",
      "Vrai. Il figure également sur le schéma.",
      "Faux. Il est présenté comme analogue de PGE₁.",
      "Vrai. L’étape commune précède plusieurs synthases."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cox-series2-pathway"
    }
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les propriétés générales des prostanoïdes :",
    "choices": [
      "Ce sont des médiateurs locaux.",
      "Ils sont synthétisés par de nombreux tissus.",
      "Ils restent stables dans la circulation pendant plusieurs années.",
      "Leur demi-vie est très courte, de l’ordre de quelques minutes."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les prostanoïdes sont des médiateurs tissulaires locaux et fugaces.",
    "choiceExplanations": [
      "Vrai. La fiche emploie cette expression.",
      "Vrai. La production n’est pas limitée à un seul organe.",
      "Faux. Leur demi-vie est au contraire très courte.",
      "Vrai. Cette brièveté est soulignée."
    ]
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’action cellulaire des prostanoïdes :",
    "choices": [
      "Ils agissent par fixation sur des récepteurs cellulaires spécifiques.",
      "Leurs fonctions peuvent être très nombreuses.",
      "Tous les prostanoïdes possèdent obligatoirement un effet biologique identique.",
      "Des prostanoïdes proches peuvent exercer des effets parfois contraires."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les effets des prostanoïdes dépendent du médiateur et de ses récepteurs.",
    "choiceExplanations": [
      "Vrai. Ce mécanisme est explicitement présenté.",
      "Vrai. La diversité des effets est soulignée.",
      "Faux. La fiche insiste sur la diversité et les antagonismes.",
      "Vrai. PGE₁/PGE₂ et PGF₂α/PGE₂ l’illustrent."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pge1-pge2-effects"
    }
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les effets comparés de pge₁ et pge₂ :",
    "choices": [
      "PGE₁ est anti-inflammatoire et PGE₂ pro-inflammatoire dans le tableau.",
      "PGE₁ et PGE₂ sont toutes deux vasodilatatrices dans le tableau.",
      "PGE₁ et PGE₂ sont toutes deux bronchoconstrictrices dans le tableau.",
      "PGE₁ inhibe l’agrégation plaquettaire tandis que PGE₂ la stimule."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le tableau compare des effets communs et des effets opposés de PGE₁ et PGE₂.",
    "choiceExplanations": [
      "Vrai. Les deux effets sont opposés.",
      "Vrai. Cet effet est commun.",
      "Faux. Elles sont indiquées bronchodilatatrices.",
      "Vrai. Les effets plaquettaires sont opposés."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pge1-pge2-effects"
    }
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de pgf₂α :",
    "choices": [
      "Sa structure est très proche de celle de PGE₂.",
      "Ses effets biologiques peuvent être souvent contraires à ceux de PGE₂.",
      "Elle est décrite comme strictement identique à PGE₂ sur le plan fonctionnel.",
      "La vasoconstriction et la bronchoconstriction sont citées parmi ses effets."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "PGF₂α illustre qu’une structure proche n’implique pas des effets identiques.",
    "choiceExplanations": [
      "Vrai. La proximité structurale est explicitement mentionnée.",
      "Vrai. C’est le point pédagogique de l’exemple.",
      "Faux. Le cours insiste au contraire sur des effets souvent opposés.",
      "Vrai. Ces deux exemples figurent dans la fiche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pge1-pge2-effects"
    }
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le misoprostol :",
    "choices": [
      "Il s’agit d’un analogue synthétique de PGE₁.",
      "Il est cité sous le nom commercial ANGUSTA®.",
      "Il s’agit d’un leucotriène naturel produit par les mastocytes.",
      "Sa formule chimique est décrite comme proche de celle de PGE₁."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le misoprostol est l’exemple thérapeutique d’un analogue synthétique de PGE₁.",
    "choiceExplanations": [
      "Vrai. La fiche le présente ainsi.",
      "Vrai. Ce nom est donné.",
      "Faux. C’est un analogue thérapeutique de prostaglandine.",
      "Vrai. La proximité structurale est précisée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "misoprostol-pge1"
    }
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’utilisation obstétricale du misoprostol :",
    "choices": [
      "Il peut faciliter le déclenchement de l’accouchement.",
      "Il provoque une contraction utérine.",
      "Il est utilisé pour bloquer toute contraction utérine.",
      "Il assouplit le col utérin."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le misoprostol facilite le déclenchement par contraction utérine et assouplissement du col.",
    "choiceExplanations": [
      "Vrai. C’est l’indication développée.",
      "Vrai. Cet effet participe au déclenchement.",
      "Faux. La fiche décrit au contraire une stimulation de la contraction.",
      "Vrai. Cet autre effet est également cité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "misoprostol-pge1"
    }
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le couple txa₂-pgi₂ :",
    "choices": [
      "TXA₂ est surtout synthétisé par les plaquettes.",
      "PGI₂ est synthétisée par l’endothélium vasculaire.",
      "TXA₂ et PGI₂ sont tous deux de puissants pro-agrégants.",
      "Leurs effets locaux sur les vaisseaux et l’agrégation sont antagonistes."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "TXA₂ et PGI₂ constituent un couple local antagoniste entre plaquettes et endothélium.",
    "choiceExplanations": [
      "Vrai. Cette source est mise en avant.",
      "Vrai. Cette source est indiquée.",
      "Faux. PGI₂ inhibe l’agrégation plaquettaire.",
      "Vrai. Le cours souligne cet antagonisme."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "txa2-pgi2-balance"
    }
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’aspirine à faible dose :",
    "choices": [
      "Elle possède une action anti-agrégante plaquettaire.",
      "Son action est reliée à l’inhibition de la synthèse des thromboxanes.",
      "Elle augmente la synthèse de TXA₂ et stimule l’agrégation.",
      "Elle est décrite comme très utilisée en pharmacologie."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "L’aspirine à faible dose est reliée à une action anti-agrégante par inhibition des thromboxanes.",
    "choiceExplanations": [
      "Vrai. Cet effet thérapeutique est explicitement cité.",
      "Vrai. Le mécanisme présenté cible les TX.",
      "Faux. Elle inhibe la synthèse des thromboxanes.",
      "Vrai. L’importance de cet usage est soulignée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "txa2-pgi2-balance"
    }
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur la voie cox des prostanoïdes de série 2, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "La voie conduit uniquement à LTA₄.",
      "L’acide arachidonique est placé en amont de la COX.",
      "La voie conduit notamment à PGI₂, PGD₂, PGE₂, PGF₂α et TXA₂.",
      "PGH₂ est représenté comme un intermédiaire central."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La voie COX de série 2 se ramifie à partir de PGH₂ vers plusieurs prostanoïdes.",
    "choiceExplanations": [
      "Faux. LTA₄ appartient à la voie de la 5-lipoxygénase.",
      "Vrai. Il constitue le précurseur du schéma.",
      "Vrai. Ces produits sont représentés dans la fiche.",
      "Vrai. Plusieurs synthases partent de cet intermédiaire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cox-series2-pathway"
    }
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Un patient reçoit un médicament cité comme inhibiteur de la COX. Quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Le misoprostol est présenté comme l’unique inhibiteur de la COX.",
      "L’aspirine est citée comme inhibiteur de la COX.",
      "Une inhibition de la COX agit en amont de plusieurs prostanoïdes.",
      "L’ibuprofène est cité comme inhibiteur de la COX."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Aspirine et ibuprofène sont placés au niveau de la cyclo-oxygénase.",
    "choiceExplanations": [
      "Faux. Il est présenté comme analogue de PGE₁.",
      "Vrai. Elle figure sur le schéma.",
      "Vrai. L’étape commune précède plusieurs synthases.",
      "Vrai. Il figure également sur le schéma."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cox-series2-pathway"
    }
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur les propriétés générales des prostanoïdes, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Ils restent stables dans la circulation pendant plusieurs années.",
      "Ce sont des médiateurs locaux.",
      "Leur demi-vie est très courte, de l’ordre de quelques minutes.",
      "Ils sont synthétisés par de nombreux tissus."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les prostanoïdes sont des médiateurs tissulaires locaux et fugaces.",
    "choiceExplanations": [
      "Faux. Leur demi-vie est au contraire très courte.",
      "Vrai. La fiche emploie cette expression.",
      "Vrai. Cette brièveté est soulignée.",
      "Vrai. La production n’est pas limitée à un seul organe."
    ]
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur l’action cellulaire des prostanoïdes, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Tous les prostanoïdes possèdent obligatoirement un effet biologique identique.",
      "Ils agissent par fixation sur des récepteurs cellulaires spécifiques.",
      "Des prostanoïdes proches peuvent exercer des effets parfois contraires.",
      "Leurs fonctions peuvent être très nombreuses."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les effets des prostanoïdes dépendent du médiateur et de ses récepteurs.",
    "choiceExplanations": [
      "Faux. La fiche insiste sur la diversité et les antagonismes.",
      "Vrai. Ce mécanisme est explicitement présenté.",
      "Vrai. PGE₁/PGE₂ et PGF₂α/PGE₂ l’illustrent.",
      "Vrai. La diversité des effets est soulignée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pge1-pge2-effects"
    }
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur les effets comparés de pge₁ et pge₂, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "PGE₁ et PGE₂ sont toutes deux bronchoconstrictrices dans le tableau.",
      "PGE₁ est anti-inflammatoire et PGE₂ pro-inflammatoire dans le tableau.",
      "PGE₁ inhibe l’agrégation plaquettaire tandis que PGE₂ la stimule.",
      "PGE₁ et PGE₂ sont toutes deux vasodilatatrices dans le tableau."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le tableau compare des effets communs et des effets opposés de PGE₁ et PGE₂.",
    "choiceExplanations": [
      "Faux. Elles sont indiquées bronchodilatatrices.",
      "Vrai. Les deux effets sont opposés.",
      "Vrai. Les effets plaquettaires sont opposés.",
      "Vrai. Cet effet est commun."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pge1-pge2-effects"
    }
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur pgf₂α, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Elle est décrite comme strictement identique à PGE₂ sur le plan fonctionnel.",
      "Sa structure est très proche de celle de PGE₂.",
      "La vasoconstriction et la bronchoconstriction sont citées parmi ses effets.",
      "Ses effets biologiques peuvent être souvent contraires à ceux de PGE₂."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "PGF₂α illustre qu’une structure proche n’implique pas des effets identiques.",
    "choiceExplanations": [
      "Faux. Le cours insiste au contraire sur des effets souvent opposés.",
      "Vrai. La proximité structurale est explicitement mentionnée.",
      "Vrai. Ces deux exemples figurent dans la fiche.",
      "Vrai. C’est le point pédagogique de l’exemple."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pge1-pge2-effects"
    }
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans un contexte de déclenchement de l’accouchement, quelles propositions décrivent le médicament présenté ?",
    "choices": [
      "Il s’agit d’un leucotriène naturel produit par les mastocytes.",
      "Il s’agit d’un analogue synthétique de PGE₁.",
      "Sa formule chimique est décrite comme proche de celle de PGE₁.",
      "Il est cité sous le nom commercial ANGUSTA®."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le misoprostol est l’exemple thérapeutique d’un analogue synthétique de PGE₁.",
    "choiceExplanations": [
      "Faux. C’est un analogue thérapeutique de prostaglandine.",
      "Vrai. La fiche le présente ainsi.",
      "Vrai. La proximité structurale est précisée.",
      "Vrai. Ce nom est donné."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "misoprostol-pge1"
    }
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans une situation portant sur l’utilisation obstétricale du misoprostol, quelles propositions sont conformes à la fiche ?",
    "choices": [
      "Il est utilisé pour bloquer toute contraction utérine.",
      "Il peut faciliter le déclenchement de l’accouchement.",
      "Il assouplit le col utérin.",
      "Il provoque une contraction utérine."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le misoprostol facilite le déclenchement par contraction utérine et assouplissement du col.",
    "choiceExplanations": [
      "Faux. La fiche décrit au contraire une stimulation de la contraction.",
      "Vrai. C’est l’indication développée.",
      "Vrai. Cet autre effet est également cité.",
      "Vrai. Cet effet participe au déclenchement."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "misoprostol-pge1"
    }
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Dans un contexte d’équilibre local entre plaquettes et endothélium, quelles propositions sont exactes ?",
    "choices": [
      "TXA₂ et PGI₂ sont tous deux de puissants pro-agrégants.",
      "TXA₂ est surtout synthétisé par les plaquettes.",
      "Leurs effets locaux sur les vaisseaux et l’agrégation sont antagonistes.",
      "PGI₂ est synthétisée par l’endothélium vasculaire."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "TXA₂ et PGI₂ constituent un couple local antagoniste entre plaquettes et endothélium.",
    "choiceExplanations": [
      "Faux. PGI₂ inhibe l’agrégation plaquettaire.",
      "Vrai. Cette source est mise en avant.",
      "Vrai. Le cours souligne cet antagonisme.",
      "Vrai. Cette source est indiquée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "txa2-pgi2-balance"
    }
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Un patient reçoit de l’aspirine à faible dose pour son effet plaquettaire. Quelles propositions reprennent la fiche ?",
    "choices": [
      "Elle augmente la synthèse de TXA₂ et stimule l’agrégation.",
      "Elle possède une action anti-agrégante plaquettaire.",
      "Elle est décrite comme très utilisée en pharmacologie.",
      "Son action est reliée à l’inhibition de la synthèse des thromboxanes."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’aspirine à faible dose est reliée à une action anti-agrégante par inhibition des thromboxanes.",
    "choiceExplanations": [
      "Faux. Elle inhibe la synthèse des thromboxanes.",
      "Vrai. Cet effet thérapeutique est explicitement cité.",
      "Vrai. L’importance de cet usage est soulignée.",
      "Vrai. Le mécanisme présenté cible les TX."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "txa2-pgi2-balance"
    }
  },
  {
    "order": 81,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la voie cox des prostanoïdes de série 2. Quelles conclusions sont exactes ?",
    "choices": [
      "La voie conduit notamment à PGI₂, PGD₂, PGE₂, PGF₂α et TXA₂.",
      "La voie conduit uniquement à LTA₄.",
      "PGH₂ est représenté comme un intermédiaire central.",
      "L’acide arachidonique est placé en amont de la COX."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La voie COX de série 2 se ramifie à partir de PGH₂ vers plusieurs prostanoïdes.",
    "choiceExplanations": [
      "Vrai. Ces produits sont représentés dans la fiche.",
      "Faux. LTA₄ appartient à la voie de la 5-lipoxygénase.",
      "Vrai. Plusieurs synthases partent de cet intermédiaire.",
      "Vrai. Il constitue le précurseur du schéma."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cox-series2-pathway"
    }
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une expérimentation pharmacologique bloque la COX. Quelles conséquences de voie sont directement cohérentes ?",
    "choices": [
      "Une inhibition de la COX agit en amont de plusieurs prostanoïdes.",
      "Le misoprostol est présenté comme l’unique inhibiteur de la COX.",
      "L’ibuprofène est cité comme inhibiteur de la COX.",
      "L’aspirine est citée comme inhibiteur de la COX."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Aspirine et ibuprofène sont placés au niveau de la cyclo-oxygénase.",
    "choiceExplanations": [
      "Vrai. L’étape commune précède plusieurs synthases.",
      "Faux. Il est présenté comme analogue de PGE₁.",
      "Vrai. Il figure également sur le schéma.",
      "Vrai. Elle figure sur le schéma."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cox-series2-pathway"
    }
  },
  {
    "order": 83,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse les propriétés générales des prostanoïdes. Quelles conclusions sont exactes ?",
    "choices": [
      "Leur demi-vie est très courte, de l’ordre de quelques minutes.",
      "Ils restent stables dans la circulation pendant plusieurs années.",
      "Ils sont synthétisés par de nombreux tissus.",
      "Ce sont des médiateurs locaux."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les prostanoïdes sont des médiateurs tissulaires locaux et fugaces.",
    "choiceExplanations": [
      "Vrai. Cette brièveté est soulignée.",
      "Faux. Leur demi-vie est au contraire très courte.",
      "Vrai. La production n’est pas limitée à un seul organe.",
      "Vrai. La fiche emploie cette expression."
    ]
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse l’action cellulaire des prostanoïdes. Quelles conclusions sont exactes ?",
    "choices": [
      "Des prostanoïdes proches peuvent exercer des effets parfois contraires.",
      "Tous les prostanoïdes possèdent obligatoirement un effet biologique identique.",
      "Leurs fonctions peuvent être très nombreuses.",
      "Ils agissent par fixation sur des récepteurs cellulaires spécifiques."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les effets des prostanoïdes dépendent du médiateur et de ses récepteurs.",
    "choiceExplanations": [
      "Vrai. PGE₁/PGE₂ et PGF₂α/PGE₂ l’illustrent.",
      "Faux. La fiche insiste sur la diversité et les antagonismes.",
      "Vrai. La diversité des effets est soulignée.",
      "Vrai. Ce mécanisme est explicitement présenté."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pge1-pge2-effects"
    }
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse les effets comparés de pge₁ et pge₂. Quelles conclusions sont exactes ?",
    "choices": [
      "PGE₁ inhibe l’agrégation plaquettaire tandis que PGE₂ la stimule.",
      "PGE₁ et PGE₂ sont toutes deux bronchoconstrictrices dans le tableau.",
      "PGE₁ et PGE₂ sont toutes deux vasodilatatrices dans le tableau.",
      "PGE₁ est anti-inflammatoire et PGE₂ pro-inflammatoire dans le tableau."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le tableau compare des effets communs et des effets opposés de PGE₁ et PGE₂.",
    "choiceExplanations": [
      "Vrai. Les effets plaquettaires sont opposés.",
      "Faux. Elles sont indiquées bronchodilatatrices.",
      "Vrai. Cet effet est commun.",
      "Vrai. Les deux effets sont opposés."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pge1-pge2-effects"
    }
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse pgf₂α. Quelles conclusions sont exactes ?",
    "choices": [
      "La vasoconstriction et la bronchoconstriction sont citées parmi ses effets.",
      "Elle est décrite comme strictement identique à PGE₂ sur le plan fonctionnel.",
      "Ses effets biologiques peuvent être souvent contraires à ceux de PGE₂.",
      "Sa structure est très proche de celle de PGE₂."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "PGF₂α illustre qu’une structure proche n’implique pas des effets identiques.",
    "choiceExplanations": [
      "Vrai. Ces deux exemples figurent dans la fiche.",
      "Faux. Le cours insiste au contraire sur des effets souvent opposés.",
      "Vrai. C’est le point pédagogique de l’exemple.",
      "Vrai. La proximité structurale est explicitement mentionnée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pge1-pge2-effects"
    }
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une molécule thérapeutique mime PGE₁. Quelles conclusions sont conformes au cas du cours ?",
    "choices": [
      "Sa formule chimique est décrite comme proche de celle de PGE₁.",
      "Il s’agit d’un leucotriène naturel produit par les mastocytes.",
      "Il est cité sous le nom commercial ANGUSTA®.",
      "Il s’agit d’un analogue synthétique de PGE₁."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le misoprostol est l’exemple thérapeutique d’un analogue synthétique de PGE₁.",
    "choiceExplanations": [
      "Vrai. La proximité structurale est précisée.",
      "Faux. C’est un analogue thérapeutique de prostaglandine.",
      "Vrai. Ce nom est donné.",
      "Vrai. La fiche le présente ainsi."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "misoprostol-pge1"
    }
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse l’utilisation obstétricale du misoprostol. Quelles conclusions sont exactes ?",
    "choices": [
      "Il assouplit le col utérin.",
      "Il est utilisé pour bloquer toute contraction utérine.",
      "Il provoque une contraction utérine.",
      "Il peut faciliter le déclenchement de l’accouchement."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le misoprostol facilite le déclenchement par contraction utérine et assouplissement du col.",
    "choiceExplanations": [
      "Vrai. Cet autre effet est également cité.",
      "Faux. La fiche décrit au contraire une stimulation de la contraction.",
      "Vrai. Cet effet participe au déclenchement.",
      "Vrai. C’est l’indication développée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "misoprostol-pge1"
    }
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant compare le médiateur plaquettaire et le médiateur endothélial. Quelles conclusions sont correctes ?",
    "choices": [
      "Leurs effets locaux sur les vaisseaux et l’agrégation sont antagonistes.",
      "TXA₂ et PGI₂ sont tous deux de puissants pro-agrégants.",
      "PGI₂ est synthétisée par l’endothélium vasculaire.",
      "TXA₂ est surtout synthétisé par les plaquettes."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "TXA₂ et PGI₂ constituent un couple local antagoniste entre plaquettes et endothélium.",
    "choiceExplanations": [
      "Vrai. Le cours souligne cet antagonisme.",
      "Faux. PGI₂ inhibe l’agrégation plaquettaire.",
      "Vrai. Cette source est indiquée.",
      "Vrai. Cette source est mise en avant."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "txa2-pgi2-balance"
    }
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une intervention diminue la synthèse du médiateur plaquettaire pro-agrégant. Quelles conclusions sont cohérentes ?",
    "choices": [
      "Elle est décrite comme très utilisée en pharmacologie.",
      "Elle augmente la synthèse de TXA₂ et stimule l’agrégation.",
      "Son action est reliée à l’inhibition de la synthèse des thromboxanes.",
      "Elle possède une action anti-agrégante plaquettaire."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’aspirine à faible dose est reliée à une action anti-agrégante par inhibition des thromboxanes.",
    "choiceExplanations": [
      "Vrai. L’importance de cet usage est soulignée.",
      "Faux. Elle inhibe la synthèse des thromboxanes.",
      "Vrai. Le mécanisme présenté cible les TX.",
      "Vrai. Cet effet thérapeutique est explicitement cité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "txa2-pgi2-balance"
    }
  }
];
