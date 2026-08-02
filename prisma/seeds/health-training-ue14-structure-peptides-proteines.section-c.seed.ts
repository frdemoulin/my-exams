import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "61": [
    "l’hélice alpha"
  ],
  "62": [
    "les acides aminés de l’hélice alpha"
  ],
  "63": [
    "les feuillets plissés beta"
  ],
  "64": [
    "les coudes et la structure tertiaire"
  ],
  "65": [
    "les domaines et l’organisation globulaire"
  ],
  "66": [
    "l’hélice alpha"
  ],
  "67": [
    "les acides aminés de l’hélice alpha"
  ],
  "68": [
    "les feuillets plissés beta"
  ],
  "69": [
    "les coudes et la structure tertiaire"
  ],
  "70": [
    "les domaines et l’organisation globulaire"
  ],
  "71": [
    "l’hélice alpha"
  ],
  "72": [
    "les acides aminés de l’hélice alpha"
  ],
  "73": [
    "les feuillets plissés beta"
  ],
  "74": [
    "les coudes et la structure tertiaire"
  ],
  "75": [
    "les domaines et l’organisation globulaire"
  ],
  "76": [
    "l’hélice alpha"
  ],
  "77": [
    "les acides aminés de l’hélice alpha"
  ],
  "78": [
    "les feuillets plissés beta"
  ],
  "79": [
    "les coudes et la structure tertiaire"
  ],
  "80": [
    "les domaines et l’organisation globulaire"
  ],
  "81": [
    "l’hélice alpha"
  ],
  "82": [
    "les acides aminés de l’hélice alpha"
  ],
  "83": [
    "les feuillets plissés beta"
  ],
  "84": [
    "les coudes et la structure tertiaire"
  ],
  "85": [
    "les domaines et l’organisation globulaire"
  ],
  "86": [
    "l’hélice alpha"
  ],
  "87": [
    "les acides aminés de l’hélice alpha"
  ],
  "88": [
    "les feuillets plissés beta"
  ],
  "89": [
    "les coudes et la structure tertiaire"
  ],
  "90": [
    "les domaines et l’organisation globulaire"
  ]
};

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "secondaire-tertiaire-1",
    "title": "Hélices alpha et feuillets bêta",
    "description": "Identifier les notions essentielles.",
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
    "slug": "secondaire-tertiaire-2",
    "title": "Coudes et structure tertiaire",
    "description": "Appliquer et comparer les notions du cours.",
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
    "slug": "secondaire-tertiaire-3",
    "title": "Domaines et organisation globulaire",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 3,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères essentiels",
        "sharedStatement": "Les questions suivantes portent sur les principaux repères de la section.",
        "questionOrders": [
          81,
          82,
          83
        ]
      },
      {
        "type": "GROUP",
        "title": "Structure et fonction",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          84,
          85,
          86
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications",
        "sharedStatement": "Les questions suivantes mobilisent les notions dans des situations biologiques ou médicales.",
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
    "question": "À propos de l’hélice alpha :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "Les chaînes latérales sont orientées vers l’extérieur.",
      "Sa stabilité repose sur des liaisons hydrogène parallèles à l’axe.",
      "L’hélice α est un enroulement régulier vers la droite.",
      "Sa stabilité dépend uniquement de liaisons disulfure."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "L’hélice α est une structure secondaire droite stabilisée par un réseau de liaisons hydrogène.",
    "choiceExplanations": [
      "Vrai. Les chaînes latérales sont orientées vers l’extérieur.",
      "Vrai. Sa stabilité repose sur des liaisons hydrogène parallèles à l’axe.",
      "Vrai. L’hélice α est un enroulement régulier vers la droite.",
      "Faux. Les liaisons hydrogène sont essentielles."
    ]
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés de l’hélice alpha :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "La myoglobine ne comporte aucune hélice.",
      "Les immunoglobulines ne comportent pas d’hélice α selon la fiche.",
      "Alanine, leucine, glutamate et méthionine sont fréquemment retrouvés.",
      "La proline est l’acide aminé dominant au centre de toutes les hélices."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La composition en résidus favorise ou défavorise la formation d’une hélice α.",
    "choiceExplanations": [
      "Faux. La fiche en indique huit.",
      "Vrai. Les immunoglobulines ne comportent pas d’hélice α selon la fiche.",
      "Vrai. Alanine, leucine, glutamate et méthionine sont fréquemment retrouvés.",
      "Faux. Elle perturbe l’hélice et est limitée au premier tour."
    ]
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les feuillets plissés beta :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "beta-sheet"
    },
    "choices": [
      "Les liaisons hydrogène sont parallèles à l’axe du feuillet selon la fiche.",
      "Ils sont formés de brins reliés par des liaisons hydrogène.",
      "Les brins peuvent être parallèles ou antiparallèles.",
      "Les chaînes latérales alternent de part et d’autre du feuillet."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les feuillets β associent des brins parallèles ou antiparallèles stabilisés par des liaisons hydrogène.",
    "choiceExplanations": [
      "Faux. Elles sont perpendiculaires à l’axe.",
      "Vrai. Ils sont formés de brins reliés par des liaisons hydrogène.",
      "Vrai. Les brins peuvent être parallèles ou antiparallèles.",
      "Vrai. Les chaînes latérales alternent de part et d’autre du feuillet."
    ]
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les coudes et la structure tertiaire :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tertiary-structure"
    },
    "choices": [
      "Ils impliquent souvent proline ou glycine.",
      "La proline et la glycine sont exclues des coudes.",
      "Les coudes prolongent toujours la chaîne sans angulation.",
      "La structure tertiaire rapproche des résidus éloignés dans la séquence."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La structure tertiaire organise les éléments secondaires grâce à plusieurs types d’interactions.",
    "choiceExplanations": [
      "Vrai. Ils impliquent souvent proline ou glycine.",
      "Faux. Elles y sont fréquentes.",
      "Faux. Ils changent sa direction.",
      "Vrai. La structure tertiaire rapproche des résidus éloignés dans la séquence."
    ]
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les domaines et l’organisation globulaire :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-domains"
    },
    "choices": [
      "Un domaine est une unité structurale et fonctionnelle.",
      "Les protéines globulaires sont totalement rigides.",
      "Les zones charnières permettent des mouvements entre domaines.",
      "Dans une protéine globulaire, les résidus hydrophobes sont plutôt internes et les polaires périphériques."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les domaines modulaires et leur dynamique permettent la fonction des protéines globulaires.",
    "choiceExplanations": [
      "Vrai. Un domaine est une unité structurale et fonctionnelle.",
      "Faux. Elles peuvent changer de conformation.",
      "Vrai. Les zones charnières permettent des mouvements entre domaines.",
      "Vrai. Dans une protéine globulaire, les résidus hydrophobes sont plutôt internes et les polaires périphériques."
    ]
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’hélice alpha :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "L’hélice α du cours est orientée vers la gauche.",
      "Les chaînes latérales sont orientées vers l’extérieur.",
      "Sa stabilité repose sur des liaisons hydrogène parallèles à l’axe.",
      "Elle comporte exactement 20 acides aminés par tour."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’hélice α est une structure secondaire droite stabilisée par un réseau de liaisons hydrogène.",
    "choiceExplanations": [
      "Faux. Elle est orientée vers la droite.",
      "Vrai. Les chaînes latérales sont orientées vers l’extérieur.",
      "Vrai. Sa stabilité repose sur des liaisons hydrogène parallèles à l’axe.",
      "Faux. La valeur donnée est environ 3,6."
    ]
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les acides aminés de l’hélice alpha :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "Les immunoglobulines ne comportent pas d’hélice α selon la fiche.",
      "La proline est limitée au premier tour dans la présentation du cours.",
      "Alanine et leucine sont interdites dans les hélices.",
      "Alanine, leucine, glutamate et méthionine sont fréquemment retrouvés."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La composition en résidus favorise ou défavorise la formation d’une hélice α.",
    "choiceExplanations": [
      "Vrai. Les immunoglobulines ne comportent pas d’hélice α selon la fiche.",
      "Vrai. La proline est limitée au premier tour dans la présentation du cours.",
      "Faux. Elles y sont fréquentes.",
      "Vrai. Alanine, leucine, glutamate et méthionine sont fréquemment retrouvés."
    ]
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les feuillets plissés beta :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "beta-sheet"
    },
    "choices": [
      "Les brins ne peuvent jamais être antiparallèles.",
      "Les immunoglobulines ne comportent aucun feuillet β.",
      "Les immunoglobulines sont riches en feuillets β.",
      "Ils sont formés de brins reliés par des liaisons hydrogène."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les feuillets β associent des brins parallèles ou antiparallèles stabilisés par des liaisons hydrogène.",
    "choiceExplanations": [
      "Faux. Les deux orientations sont possibles.",
      "Faux. Elles en comportent beaucoup.",
      "Vrai. Les immunoglobulines sont riches en feuillets β.",
      "Vrai. Ils sont formés de brins reliés par des liaisons hydrogène."
    ]
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les coudes et la structure tertiaire :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tertiary-structure"
    },
    "choices": [
      "La structure tertiaire rapproche des résidus éloignés dans la séquence.",
      "Elle est stabilisée par interactions non covalentes et ponts disulfure.",
      "Les coudes prolongent toujours la chaîne sans angulation.",
      "Ils impliquent souvent proline ou glycine."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La structure tertiaire organise les éléments secondaires grâce à plusieurs types d’interactions.",
    "choiceExplanations": [
      "Vrai. La structure tertiaire rapproche des résidus éloignés dans la séquence.",
      "Vrai. Elle est stabilisée par interactions non covalentes et ponts disulfure.",
      "Faux. Ils changent sa direction.",
      "Vrai. Ils impliquent souvent proline ou glycine."
    ]
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les domaines et l’organisation globulaire :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-domains"
    },
    "choices": [
      "Dans une protéine globulaire, les résidus hydrophobes sont plutôt internes et les polaires périphériques.",
      "Un même domaine peut exister dans des protéines différentes.",
      "Un domaine n’a jamais de fonction propre.",
      "Les zones charnières rendent toute mobilité impossible."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les domaines modulaires et leur dynamique permettent la fonction des protéines globulaires.",
    "choiceExplanations": [
      "Vrai. Dans une protéine globulaire, les résidus hydrophobes sont plutôt internes et les polaires périphériques.",
      "Vrai. Un même domaine peut exister dans des protéines différentes.",
      "Faux. Il peut conférer une propriété biologique spécifique.",
      "Faux. Elles permettent le mouvement."
    ]
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’hélice alpha, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "Les chaînes latérales sont orientées vers l’extérieur.",
      "Les chaînes latérales sont toutes au centre de l’hélice.",
      "L’hélice α du cours est orientée vers la gauche.",
      "L’hélice α est un enroulement régulier vers la droite."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "L’hélice α est une structure secondaire droite stabilisée par un réseau de liaisons hydrogène.",
    "choiceExplanations": [
      "Vrai. Les chaînes latérales sont orientées vers l’extérieur.",
      "Faux. Elles pointent vers l’extérieur.",
      "Faux. Elle est orientée vers la droite.",
      "Vrai. L’hélice α est un enroulement régulier vers la droite."
    ]
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés de l’hélice alpha, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "La proline est limitée au premier tour dans la présentation du cours.",
      "Les immunoglobulines sont entièrement constituées d’hélices α.",
      "Alanine, leucine, glutamate et méthionine sont fréquemment retrouvés.",
      "La proline est l’acide aminé dominant au centre de toutes les hélices."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La composition en résidus favorise ou défavorise la formation d’une hélice α.",
    "choiceExplanations": [
      "Vrai. La proline est limitée au premier tour dans la présentation du cours.",
      "Faux. Elles sont riches en feuillets β.",
      "Vrai. Alanine, leucine, glutamate et méthionine sont fréquemment retrouvés.",
      "Faux. Elle perturbe l’hélice et est limitée au premier tour."
    ]
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les feuillets plissés beta, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "beta-sheet"
    },
    "choices": [
      "Les feuillets β sont toujours formés d’une seule hélice.",
      "Les chaînes latérales alternent de part et d’autre du feuillet.",
      "Les brins ne peuvent jamais être antiparallèles.",
      "Les brins peuvent être parallèles ou antiparallèles."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les feuillets β associent des brins parallèles ou antiparallèles stabilisés par des liaisons hydrogène.",
    "choiceExplanations": [
      "Faux. Ils associent des brins étendus.",
      "Vrai. Les chaînes latérales alternent de part et d’autre du feuillet.",
      "Faux. Les deux orientations sont possibles.",
      "Vrai. Les brins peuvent être parallèles ou antiparallèles."
    ]
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les coudes et la structure tertiaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tertiary-structure"
    },
    "choices": [
      "La proline et la glycine sont exclues des coudes.",
      "Les coudes permettent un changement de direction de la chaîne.",
      "Aucune interaction hydrophobe ne participe à la structure tertiaire.",
      "Elle est stabilisée par interactions non covalentes et ponts disulfure."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La structure tertiaire organise les éléments secondaires grâce à plusieurs types d’interactions.",
    "choiceExplanations": [
      "Faux. Elles y sont fréquentes.",
      "Vrai. Les coudes permettent un changement de direction de la chaîne.",
      "Faux. Les interactions hydrophobes y jouent un rôle.",
      "Vrai. Elle est stabilisée par interactions non covalentes et ponts disulfure."
    ]
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les domaines et l’organisation globulaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-domains"
    },
    "choices": [
      "Un même domaine peut exister dans des protéines différentes.",
      "Les zones charnières rendent toute mobilité impossible.",
      "Un domaine est une unité structurale et fonctionnelle.",
      "Un domaine n’a jamais de fonction propre."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les domaines modulaires et leur dynamique permettent la fonction des protéines globulaires.",
    "choiceExplanations": [
      "Vrai. Un même domaine peut exister dans des protéines différentes.",
      "Faux. Elles permettent le mouvement.",
      "Vrai. Un domaine est une unité structurale et fonctionnelle.",
      "Faux. Il peut conférer une propriété biologique spécifique."
    ]
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’hélice alpha, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "L’hélice α est un enroulement régulier vers la droite.",
      "Les chaînes latérales sont toutes au centre de l’hélice.",
      "Les chaînes latérales sont orientées vers l’extérieur.",
      "L’hélice α du cours est orientée vers la gauche."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’hélice α est une structure secondaire droite stabilisée par un réseau de liaisons hydrogène.",
    "choiceExplanations": [
      "Vrai. L’hélice α est un enroulement régulier vers la droite.",
      "Faux. Elles pointent vers l’extérieur.",
      "Vrai. Les chaînes latérales sont orientées vers l’extérieur.",
      "Faux. Elle est orientée vers la droite."
    ]
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les acides aminés de l’hélice alpha, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "La myoglobine comporte huit hélices.",
      "La myoglobine ne comporte aucune hélice.",
      "La proline est l’acide aminé dominant au centre de toutes les hélices.",
      "Les immunoglobulines ne comportent pas d’hélice α selon la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La composition en résidus favorise ou défavorise la formation d’une hélice α.",
    "choiceExplanations": [
      "Vrai. La myoglobine comporte huit hélices.",
      "Faux. La fiche en indique huit.",
      "Faux. Elle perturbe l’hélice et est limitée au premier tour.",
      "Vrai. Les immunoglobulines ne comportent pas d’hélice α selon la fiche."
    ]
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les feuillets plissés beta, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "beta-sheet"
    },
    "choices": [
      "Les chaînes latérales alternent de part et d’autre du feuillet.",
      "Les feuillets β sont toujours formés d’une seule hélice.",
      "Les immunoglobulines sont riches en feuillets β.",
      "Les liaisons hydrogène sont parallèles à l’axe du feuillet selon la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les feuillets β associent des brins parallèles ou antiparallèles stabilisés par des liaisons hydrogène.",
    "choiceExplanations": [
      "Vrai. Les chaînes latérales alternent de part et d’autre du feuillet.",
      "Faux. Ils associent des brins étendus.",
      "Vrai. Les immunoglobulines sont riches en feuillets β.",
      "Faux. Elles sont perpendiculaires à l’axe."
    ]
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les coudes et la structure tertiaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tertiary-structure"
    },
    "choices": [
      "Les coudes prolongent toujours la chaîne sans angulation.",
      "La proline et la glycine sont exclues des coudes.",
      "Les coudes permettent un changement de direction de la chaîne.",
      "Elle est stabilisée par interactions non covalentes et ponts disulfure."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La structure tertiaire organise les éléments secondaires grâce à plusieurs types d’interactions.",
    "choiceExplanations": [
      "Faux. Ils changent sa direction.",
      "Faux. Elles y sont fréquentes.",
      "Vrai. Les coudes permettent un changement de direction de la chaîne.",
      "Vrai. Elle est stabilisée par interactions non covalentes et ponts disulfure."
    ]
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les domaines et l’organisation globulaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-domains"
    },
    "choices": [
      "Un domaine n’a jamais de fonction propre.",
      "Dans une protéine globulaire, les résidus hydrophobes sont plutôt internes et les polaires périphériques.",
      "Un même domaine peut exister dans des protéines différentes.",
      "Les résidus hydrophobes sont tous exposés à l’eau."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les domaines modulaires et leur dynamique permettent la fonction des protéines globulaires.",
    "choiceExplanations": [
      "Faux. Il peut conférer une propriété biologique spécifique.",
      "Vrai. Dans une protéine globulaire, les résidus hydrophobes sont plutôt internes et les polaires périphériques.",
      "Vrai. Un même domaine peut exister dans des protéines différentes.",
      "Faux. Ils sont préférentiellement enfouis."
    ]
  },
  {
    "order": 81,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’hélice alpha. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "Les chaînes latérales sont orientées vers l’extérieur.",
      "L’hélice α du cours est orientée vers la gauche.",
      "L’hélice α est un enroulement régulier vers la droite.",
      "Sa stabilité dépend uniquement de liaisons disulfure."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’hélice α est une structure secondaire droite stabilisée par un réseau de liaisons hydrogène.",
    "choiceExplanations": [
      "Vrai. Les chaînes latérales sont orientées vers l’extérieur.",
      "Faux. Elle est orientée vers la droite.",
      "Vrai. L’hélice α est un enroulement régulier vers la droite.",
      "Faux. Les liaisons hydrogène sont essentielles."
    ]
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés de l’hélice alpha. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "Alanine, leucine, glutamate et méthionine sont fréquemment retrouvés.",
      "Les immunoglobulines sont entièrement constituées d’hélices α.",
      "Alanine et leucine sont interdites dans les hélices.",
      "La proline est limitée au premier tour dans la présentation du cours."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La composition en résidus favorise ou défavorise la formation d’une hélice α.",
    "choiceExplanations": [
      "Vrai. Alanine, leucine, glutamate et méthionine sont fréquemment retrouvés.",
      "Faux. Elles sont riches en feuillets β.",
      "Faux. Elles y sont fréquentes.",
      "Vrai. La proline est limitée au premier tour dans la présentation du cours."
    ]
  },
  {
    "order": 83,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les feuillets plissés beta. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "beta-sheet"
    },
    "choices": [
      "Les feuillets β sont toujours formés d’une seule hélice.",
      "Les immunoglobulines sont riches en feuillets β.",
      "Les brins peuvent être parallèles ou antiparallèles.",
      "Les immunoglobulines ne comportent aucun feuillet β."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les feuillets β associent des brins parallèles ou antiparallèles stabilisés par des liaisons hydrogène.",
    "choiceExplanations": [
      "Faux. Ils associent des brins étendus.",
      "Vrai. Les immunoglobulines sont riches en feuillets β.",
      "Vrai. Les brins peuvent être parallèles ou antiparallèles.",
      "Faux. Elles en comportent beaucoup."
    ]
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les coudes et la structure tertiaire. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tertiary-structure"
    },
    "choices": [
      "Elle est stabilisée par interactions non covalentes et ponts disulfure.",
      "La structure tertiaire rapproche des résidus éloignés dans la séquence.",
      "La structure tertiaire correspond uniquement à l’ordre des acides aminés.",
      "Les coudes prolongent toujours la chaîne sans angulation."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La structure tertiaire organise les éléments secondaires grâce à plusieurs types d’interactions.",
    "choiceExplanations": [
      "Vrai. Elle est stabilisée par interactions non covalentes et ponts disulfure.",
      "Vrai. La structure tertiaire rapproche des résidus éloignés dans la séquence.",
      "Faux. Elle correspond au repliement tridimensionnel.",
      "Faux. Ils changent sa direction."
    ]
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les domaines et l’organisation globulaire. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-domains"
    },
    "choices": [
      "Les résidus hydrophobes sont tous exposés à l’eau.",
      "Un domaine n’a jamais de fonction propre.",
      "Les zones charnières permettent des mouvements entre domaines.",
      "Un même domaine peut exister dans des protéines différentes."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les domaines modulaires et leur dynamique permettent la fonction des protéines globulaires.",
    "choiceExplanations": [
      "Faux. Ils sont préférentiellement enfouis.",
      "Faux. Il peut conférer une propriété biologique spécifique.",
      "Vrai. Les zones charnières permettent des mouvements entre domaines.",
      "Vrai. Un même domaine peut exister dans des protéines différentes."
    ]
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’hélice alpha. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "L’hélice α est un enroulement régulier vers la droite.",
      "Sa stabilité dépend uniquement de liaisons disulfure.",
      "Les chaînes latérales sont toutes au centre de l’hélice.",
      "Elle comporte environ 3,6 acides aminés par tour."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "L’hélice α est une structure secondaire droite stabilisée par un réseau de liaisons hydrogène.",
    "choiceExplanations": [
      "Vrai. L’hélice α est un enroulement régulier vers la droite.",
      "Faux. Les liaisons hydrogène sont essentielles.",
      "Faux. Elles pointent vers l’extérieur.",
      "Vrai. Elle comporte environ 3,6 acides aminés par tour."
    ]
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les acides aminés de l’hélice alpha. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "La myoglobine ne comporte aucune hélice.",
      "Les immunoglobulines ne comportent pas d’hélice α selon la fiche.",
      "La myoglobine comporte huit hélices.",
      "Les immunoglobulines sont entièrement constituées d’hélices α."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La composition en résidus favorise ou défavorise la formation d’une hélice α.",
    "choiceExplanations": [
      "Faux. La fiche en indique huit.",
      "Vrai. Les immunoglobulines ne comportent pas d’hélice α selon la fiche.",
      "Vrai. La myoglobine comporte huit hélices.",
      "Faux. Elles sont riches en feuillets β."
    ]
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les feuillets plissés beta. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "beta-sheet"
    },
    "choices": [
      "Les immunoglobulines ne comportent aucun feuillet β.",
      "Les feuillets β sont toujours formés d’une seule hélice.",
      "Les brins peuvent être parallèles ou antiparallèles.",
      "Les chaînes latérales alternent de part et d’autre du feuillet."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les feuillets β associent des brins parallèles ou antiparallèles stabilisés par des liaisons hydrogène.",
    "choiceExplanations": [
      "Faux. Elles en comportent beaucoup.",
      "Faux. Ils associent des brins étendus.",
      "Vrai. Les brins peuvent être parallèles ou antiparallèles.",
      "Vrai. Les chaînes latérales alternent de part et d’autre du feuillet."
    ]
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les coudes et la structure tertiaire. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tertiary-structure"
    },
    "choices": [
      "Elle est stabilisée par interactions non covalentes et ponts disulfure.",
      "Les coudes prolongent toujours la chaîne sans angulation.",
      "La proline et la glycine sont exclues des coudes.",
      "Ils impliquent souvent proline ou glycine."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La structure tertiaire organise les éléments secondaires grâce à plusieurs types d’interactions.",
    "choiceExplanations": [
      "Vrai. Elle est stabilisée par interactions non covalentes et ponts disulfure.",
      "Faux. Ils changent sa direction.",
      "Faux. Elles y sont fréquentes.",
      "Vrai. Ils impliquent souvent proline ou glycine."
    ]
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les domaines et l’organisation globulaire. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-domains"
    },
    "choices": [
      "Les zones charnières rendent toute mobilité impossible.",
      "Les zones charnières permettent des mouvements entre domaines.",
      "Un domaine n’a jamais de fonction propre.",
      "Un même domaine peut exister dans des protéines différentes."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les domaines modulaires et leur dynamique permettent la fonction des protéines globulaires.",
    "choiceExplanations": [
      "Faux. Elles permettent le mouvement.",
      "Vrai. Les zones charnières permettent des mouvements entre domaines.",
      "Faux. Il peut conférer une propriété biologique spécifique.",
      "Vrai. Un même domaine peut exister dans des protéines différentes."
    ]
  }
];
