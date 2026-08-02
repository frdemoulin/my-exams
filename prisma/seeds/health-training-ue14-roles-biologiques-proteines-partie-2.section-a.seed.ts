import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "1": [
    "les myosines"
  ],
  "2": [
    "la structure de l’hémoglobine A"
  ],
  "3": [
    "la fixation de l’oxygène par l’hémoglobine"
  ],
  "4": [
    "le monoxyde de carbone et la méthémoglobine"
  ],
  "5": [
    "la drépanocytose, l’albumine et les apolipoprotéines"
  ],
  "6": [
    "les myosines"
  ],
  "7": [
    "la structure de l’hémoglobine A"
  ],
  "8": [
    "la fixation de l’oxygène par l’hémoglobine"
  ],
  "9": [
    "le monoxyde de carbone et la méthémoglobine"
  ],
  "10": [
    "la drépanocytose, l’albumine et les apolipoprotéines"
  ],
  "11": [
    "les myosines"
  ],
  "12": [
    "la structure de l’hémoglobine A"
  ],
  "13": [
    "la fixation de l’oxygène par l’hémoglobine"
  ],
  "14": [
    "le monoxyde de carbone et la méthémoglobine"
  ],
  "15": [
    "la drépanocytose, l’albumine et les apolipoprotéines"
  ],
  "16": [
    "les myosines"
  ],
  "17": [
    "la structure de l’hémoglobine A"
  ],
  "18": [
    "la fixation de l’oxygène par l’hémoglobine"
  ],
  "19": [
    "le monoxyde de carbone et la méthémoglobine"
  ],
  "20": [
    "la drépanocytose, l’albumine et les apolipoprotéines"
  ],
  "21": [
    "les myosines"
  ],
  "22": [
    "la structure de l’hémoglobine A"
  ],
  "23": [
    "la fixation de l’oxygène par l’hémoglobine"
  ],
  "24": [
    "le monoxyde de carbone et la méthémoglobine"
  ],
  "25": [
    "la drépanocytose, l’albumine et les apolipoprotéines"
  ],
  "26": [
    "les myosines"
  ],
  "27": [
    "la structure de l’hémoglobine A"
  ],
  "28": [
    "la fixation de l’oxygène par l’hémoglobine"
  ],
  "29": [
    "le monoxyde de carbone et la méthémoglobine"
  ],
  "30": [
    "la drépanocytose, l’albumine et les apolipoprotéines"
  ]
};

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "moteurs-transport-1",
    "title": "Myosines et contraction",
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
    "slug": "moteurs-transport-2",
    "title": "Hémoglobine et transport de l’oxygène",
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
    "slug": "moteurs-transport-3",
    "title": "Albumine, apolipoprotéines et anomalies",
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
    "question": "À propos de les myosines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "myosin-cycle"
    },
    "choices": [
      "Les myosines sont des moteurs moléculaires.",
      "Leur fonctionnement dépend de l’hydrolyse de l’ATP.",
      "Elles interviennent dans migration, adhésion et transport intracellulaire.",
      "La myosine II est absente du muscle."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les myosines convertissent l’énergie de l’ATP en mouvement sur les filaments d’actine.",
    "choiceExplanations": [
      "Vrai. Les myosines sont des moteurs moléculaires.",
      "Vrai. Leur fonctionnement dépend de l’hydrolyse de l’ATP.",
      "Vrai. Elles interviennent dans migration, adhésion et transport intracellulaire.",
      "Faux. Elle participe à la contraction."
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la structure de l’hémoglobine A :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-structure"
    },
    "choices": [
      "L’hémoglobine contient un groupement prosthétique hème.",
      "L’hème est un glucide de réserve.",
      "Le fer Fe2+ de l’hème fixe le dioxygène.",
      "L’hémoglobine A est un homodimère α2."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’hémoglobine A associe quatre globines et quatre hèmes pour transporter l’oxygène.",
    "choiceExplanations": [
      "Vrai. L’hémoglobine contient un groupement prosthétique hème.",
      "Faux. C’est un groupement prosthétique porphyrinique.",
      "Vrai. Le fer Fe2+ de l’hème fixe le dioxygène.",
      "Faux. C’est un hétérotétramère α2β2."
    ]
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la fixation de l’oxygène par l’hémoglobine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-conformations"
    },
    "choices": [
      "L’hémoglobine transporte l’O2 des poumons vers les tissus.",
      "Sa conformation est totalement fixe.",
      "L’équilibre entre conformations influence l’affinité pour l’O2.",
      "Elle participe au retour du CO2 vers les poumons."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La fixation de l’oxygène est allostérique et dépend de l’environnement.",
    "choiceExplanations": [
      "Vrai. L’hémoglobine transporte l’O2 des poumons vers les tissus.",
      "Faux. Elle alterne entre conformations.",
      "Vrai. L’équilibre entre conformations influence l’affinité pour l’O2.",
      "Vrai. Elle participe au retour du CO2 vers les poumons."
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le monoxyde de carbone et la méthémoglobine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-anomalies"
    },
    "choices": [
      "Le fer Fe3+ fixe mieux l’O2 que Fe2+.",
      "La méthémoglobine ne fixe pas correctement l’O2.",
      "La carboxyhémoglobine contient uniquement du CO2.",
      "Le CO possède une affinité pour l’hème supérieure à celle de l’O2."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "CO et oxydation du fer perturbent la fonction de l’hème.",
    "choiceExplanations": [
      "Faux. La méthémoglobine Fe3+ ne le fixe pas.",
      "Vrai. La méthémoglobine ne fixe pas correctement l’O2.",
      "Faux. Elle résulte de la fixation du CO.",
      "Vrai. Le CO possède une affinité pour l’hème supérieure à celle de l’O2."
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la drépanocytose, l’albumine et les apolipoprotéines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sickle-albumin-lipoprotein"
    },
    "choices": [
      "L’albumine représente environ 60 % des protéines sériques et régule la pression oncotique.",
      "La drépanocytose résulte d’une substitution Glu→Val en position 6 de la chaîne β.",
      "L’HbS est moins soluble et peut s’agréger.",
      "L’albumine est synthétisée par les érythrocytes."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les protéines de transport sanguin illustrent effets structuraux, osmotiques et lipidiques.",
    "choiceExplanations": [
      "Vrai. L’albumine représente environ 60 % des protéines sériques et régule la pression oncotique.",
      "Vrai. La drépanocytose résulte d’une substitution Glu→Val en position 6 de la chaîne β.",
      "Vrai. L’HbS est moins soluble et peut s’agréger.",
      "Faux. Elle est synthétisée par les hépatocytes."
    ]
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les myosines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "myosin-cycle"
    },
    "choices": [
      "Elles interviennent dans migration, adhésion et transport intracellulaire.",
      "Elles ne peuvent interagir avec l’actine.",
      "Les myosines fonctionnent sans aucune énergie.",
      "Les myosines sont des moteurs moléculaires."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les myosines convertissent l’énergie de l’ATP en mouvement sur les filaments d’actine.",
    "choiceExplanations": [
      "Vrai. Elles interviennent dans migration, adhésion et transport intracellulaire.",
      "Faux. L’interaction actine-myosine est centrale.",
      "Faux. Le cycle dépend de l’ATP.",
      "Vrai. Les myosines sont des moteurs moléculaires."
    ]
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la structure de l’hémoglobine A :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-structure"
    },
    "choices": [
      "Le fer fonctionnel est exclusivement Fe3+.",
      "Le fer Fe2+ de l’hème fixe le dioxygène.",
      "Elle possède quatre hèmes et quatre sites de fixation de l’O2.",
      "L’hémoglobine A est α2β2."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’hémoglobine A associe quatre globines et quatre hèmes pour transporter l’oxygène.",
    "choiceExplanations": [
      "Faux. Le fer Fe2+ fixe l’oxygène.",
      "Vrai. Le fer Fe2+ de l’hème fixe le dioxygène.",
      "Vrai. Elle possède quatre hèmes et quatre sites de fixation de l’O2.",
      "Vrai. L’hémoglobine A est α2β2."
    ]
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la fixation de l’oxygène par l’hémoglobine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-conformations"
    },
    "choices": [
      "Elle participe au retour du CO2 vers les poumons.",
      "Sa conformation est totalement fixe.",
      "L’hémoglobine transporte l’O2 des poumons vers les tissus.",
      "L’hémoglobine transporte uniquement du glucose."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La fixation de l’oxygène est allostérique et dépend de l’environnement.",
    "choiceExplanations": [
      "Vrai. Elle participe au retour du CO2 vers les poumons.",
      "Faux. Elle alterne entre conformations.",
      "Vrai. L’hémoglobine transporte l’O2 des poumons vers les tissus.",
      "Faux. Elle transporte surtout les gaz respiratoires."
    ]
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le monoxyde de carbone et la méthémoglobine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-anomalies"
    },
    "choices": [
      "La méthémoglobine contient du fer Fe3+.",
      "Le CO possède une affinité pour l’hème supérieure à celle de l’O2.",
      "La méthémoglobine ne fixe pas correctement l’O2.",
      "Le CO augmente la fixation de l’O2 sur le même site."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "CO et oxydation du fer perturbent la fonction de l’hème.",
    "choiceExplanations": [
      "Vrai. La méthémoglobine contient du fer Fe3+.",
      "Vrai. Le CO possède une affinité pour l’hème supérieure à celle de l’O2.",
      "Vrai. La méthémoglobine ne fixe pas correctement l’O2.",
      "Faux. Il la bloque en occupant l’hème."
    ]
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la drépanocytose, l’albumine et les apolipoprotéines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sickle-albumin-lipoprotein"
    },
    "choices": [
      "Les apolipoprotéines transportent uniquement des protéines dans le sang.",
      "La drépanocytose résulte d’une substitution Glu→Val en position 6 de la chaîne β.",
      "Les apolipoprotéines constituent l’enveloppe protéique des lipoprotéines.",
      "La drépanocytose est due à une mutation de la chaîne α en position 100."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les protéines de transport sanguin illustrent effets structuraux, osmotiques et lipidiques.",
    "choiceExplanations": [
      "Faux. Elles participent au transport des lipides.",
      "Vrai. La drépanocytose résulte d’une substitution Glu→Val en position 6 de la chaîne β.",
      "Vrai. Les apolipoprotéines constituent l’enveloppe protéique des lipoprotéines.",
      "Faux. La fiche indique β6 Glu→Val."
    ]
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les myosines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "myosin-cycle"
    },
    "choices": [
      "Toutes les myosines ont exclusivement un rôle digestif.",
      "Elles ne peuvent interagir avec l’actine.",
      "Elles interviennent dans migration, adhésion et transport intracellulaire.",
      "Leur fonctionnement dépend de l’hydrolyse de l’ATP."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les myosines convertissent l’énergie de l’ATP en mouvement sur les filaments d’actine.",
    "choiceExplanations": [
      "Faux. Elles interviennent dans motilité et transport.",
      "Faux. L’interaction actine-myosine est centrale.",
      "Vrai. Elles interviennent dans migration, adhésion et transport intracellulaire.",
      "Vrai. Leur fonctionnement dépend de l’hydrolyse de l’ATP."
    ]
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure de l’hémoglobine A, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-structure"
    },
    "choices": [
      "L’hémoglobine A est α2β2.",
      "Une molécule d’hémoglobine ne possède qu’un seul hème.",
      "Le fer Fe2+ de l’hème fixe le dioxygène.",
      "Le fer fonctionnel est exclusivement Fe3+."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’hémoglobine A associe quatre globines et quatre hèmes pour transporter l’oxygène.",
    "choiceExplanations": [
      "Vrai. L’hémoglobine A est α2β2.",
      "Faux. Chaque chaîne porte un hème.",
      "Vrai. Le fer Fe2+ de l’hème fixe le dioxygène.",
      "Faux. Le fer Fe2+ fixe l’oxygène."
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la fixation de l’oxygène par l’hémoglobine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-conformations"
    },
    "choices": [
      "Sa conformation est totalement fixe.",
      "L’équilibre entre conformations influence l’affinité pour l’O2.",
      "Le pH n’a aucun effet sur l’affinité.",
      "Le pH et la pression en CO2 influencent la fixation."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La fixation de l’oxygène est allostérique et dépend de l’environnement.",
    "choiceExplanations": [
      "Faux. Elle alterne entre conformations.",
      "Vrai. L’équilibre entre conformations influence l’affinité pour l’O2.",
      "Faux. Il influence l’équilibre des formes.",
      "Vrai. Le pH et la pression en CO2 influencent la fixation."
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le monoxyde de carbone et la méthémoglobine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-anomalies"
    },
    "choices": [
      "La méthémoglobine contient du fer Fe3+.",
      "La carboxyhémoglobine contient uniquement du CO2.",
      "La méthémoglobine ne fixe pas correctement l’O2.",
      "Une intoxication au CO n’affecte pas le transport d’oxygène."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "CO et oxydation du fer perturbent la fonction de l’hème.",
    "choiceExplanations": [
      "Vrai. La méthémoglobine contient du fer Fe3+.",
      "Faux. Elle résulte de la fixation du CO.",
      "Vrai. La méthémoglobine ne fixe pas correctement l’O2.",
      "Faux. Elle l’altère gravement."
    ]
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la drépanocytose, l’albumine et les apolipoprotéines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sickle-albumin-lipoprotein"
    },
    "choices": [
      "La drépanocytose résulte d’une substitution Glu→Val en position 6 de la chaîne β.",
      "Les apolipoprotéines transportent uniquement des protéines dans le sang.",
      "L’HbS est plus soluble que l’HbA.",
      "L’HbS est moins soluble et peut s’agréger."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les protéines de transport sanguin illustrent effets structuraux, osmotiques et lipidiques.",
    "choiceExplanations": [
      "Vrai. La drépanocytose résulte d’une substitution Glu→Val en position 6 de la chaîne β.",
      "Faux. Elles participent au transport des lipides.",
      "Faux. Sa solubilité diminue.",
      "Vrai. L’HbS est moins soluble et peut s’agréger."
    ]
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les myosines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "myosin-cycle"
    },
    "choices": [
      "Elles interviennent dans migration, adhésion et transport intracellulaire.",
      "La myosine II participe à la contraction musculaire.",
      "La myosine II est absente du muscle.",
      "Toutes les myosines ont exclusivement un rôle digestif."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les myosines convertissent l’énergie de l’ATP en mouvement sur les filaments d’actine.",
    "choiceExplanations": [
      "Vrai. Elles interviennent dans migration, adhésion et transport intracellulaire.",
      "Vrai. La myosine II participe à la contraction musculaire.",
      "Faux. Elle participe à la contraction.",
      "Faux. Elles interviennent dans motilité et transport."
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure de l’hémoglobine A, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-structure"
    },
    "choices": [
      "Une molécule d’hémoglobine ne possède qu’un seul hème.",
      "Le fer Fe2+ de l’hème fixe le dioxygène.",
      "L’hémoglobine contient un groupement prosthétique hème.",
      "L’hémoglobine A est un homodimère α2."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’hémoglobine A associe quatre globines et quatre hèmes pour transporter l’oxygène.",
    "choiceExplanations": [
      "Faux. Chaque chaîne porte un hème.",
      "Vrai. Le fer Fe2+ de l’hème fixe le dioxygène.",
      "Vrai. L’hémoglobine contient un groupement prosthétique hème.",
      "Faux. C’est un hétérotétramère α2β2."
    ]
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la fixation de l’oxygène par l’hémoglobine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-conformations"
    },
    "choices": [
      "Elle participe au retour du CO2 vers les poumons.",
      "Elle transporte l’O2 des tissus vers les poumons exclusivement.",
      "Sa conformation est totalement fixe.",
      "L’hémoglobine transporte l’O2 des poumons vers les tissus."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La fixation de l’oxygène est allostérique et dépend de l’environnement.",
    "choiceExplanations": [
      "Vrai. Elle participe au retour du CO2 vers les poumons.",
      "Faux. Le trajet principal est poumons vers tissus.",
      "Faux. Elle alterne entre conformations.",
      "Vrai. L’hémoglobine transporte l’O2 des poumons vers les tissus."
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le monoxyde de carbone et la méthémoglobine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-anomalies"
    },
    "choices": [
      "La méthémoglobine contient du fer Fe3+.",
      "Il forme de la carboxyhémoglobine.",
      "Le fer Fe3+ fixe mieux l’O2 que Fe2+.",
      "Une intoxication au CO n’affecte pas le transport d’oxygène."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "CO et oxydation du fer perturbent la fonction de l’hème.",
    "choiceExplanations": [
      "Vrai. La méthémoglobine contient du fer Fe3+.",
      "Vrai. Il forme de la carboxyhémoglobine.",
      "Faux. La méthémoglobine Fe3+ ne le fixe pas.",
      "Faux. Elle l’altère gravement."
    ]
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la drépanocytose, l’albumine et les apolipoprotéines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sickle-albumin-lipoprotein"
    },
    "choices": [
      "L’HbS est plus soluble que l’HbA.",
      "Les apolipoprotéines transportent uniquement des protéines dans le sang.",
      "L’albumine représente environ 60 % des protéines sériques et régule la pression oncotique.",
      "L’HbS est moins soluble et peut s’agréger."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les protéines de transport sanguin illustrent effets structuraux, osmotiques et lipidiques.",
    "choiceExplanations": [
      "Faux. Sa solubilité diminue.",
      "Faux. Elles participent au transport des lipides.",
      "Vrai. L’albumine représente environ 60 % des protéines sériques et régule la pression oncotique.",
      "Vrai. L’HbS est moins soluble et peut s’agréger."
    ]
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les myosines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "myosin-cycle"
    },
    "choices": [
      "Leur fonctionnement dépend de l’hydrolyse de l’ATP.",
      "La myosine II est absente du muscle.",
      "Les myosines fonctionnent sans aucune énergie.",
      "Les myosines sont des moteurs moléculaires."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les myosines convertissent l’énergie de l’ATP en mouvement sur les filaments d’actine.",
    "choiceExplanations": [
      "Vrai. Leur fonctionnement dépend de l’hydrolyse de l’ATP.",
      "Faux. Elle participe à la contraction.",
      "Faux. Le cycle dépend de l’ATP.",
      "Vrai. Les myosines sont des moteurs moléculaires."
    ]
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la structure de l’hémoglobine A. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-structure"
    },
    "choices": [
      "L’hémoglobine A est un homodimère α2.",
      "Le fer fonctionnel est exclusivement Fe3+.",
      "Le fer Fe2+ de l’hème fixe le dioxygène.",
      "L’hémoglobine A est α2β2."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’hémoglobine A associe quatre globines et quatre hèmes pour transporter l’oxygène.",
    "choiceExplanations": [
      "Faux. C’est un hétérotétramère α2β2.",
      "Faux. Le fer Fe2+ fixe l’oxygène.",
      "Vrai. Le fer Fe2+ de l’hème fixe le dioxygène.",
      "Vrai. L’hémoglobine A est α2β2."
    ]
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la fixation de l’oxygène par l’hémoglobine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-conformations"
    },
    "choices": [
      "L’hémoglobine transporte uniquement du glucose.",
      "Elle participe au retour du CO2 vers les poumons.",
      "Sa conformation est totalement fixe.",
      "L’hémoglobine transporte l’O2 des poumons vers les tissus."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La fixation de l’oxygène est allostérique et dépend de l’environnement.",
    "choiceExplanations": [
      "Faux. Elle transporte surtout les gaz respiratoires.",
      "Vrai. Elle participe au retour du CO2 vers les poumons.",
      "Faux. Elle alterne entre conformations.",
      "Vrai. L’hémoglobine transporte l’O2 des poumons vers les tissus."
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une personne est exposée à des fumées et présente une intoxication au monoxyde de carbone. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-anomalies"
    },
    "choices": [
      "La carboxyhémoglobine contient uniquement du CO2.",
      "La méthémoglobine ne fixe pas correctement l’O2.",
      "Le CO augmente la fixation de l’O2 sur le même site.",
      "Le CO possède une affinité pour l’hème supérieure à celle de l’O2."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "CO et oxydation du fer perturbent la fonction de l’hème.",
    "choiceExplanations": [
      "Faux. Elle résulte de la fixation du CO.",
      "Vrai. La méthémoglobine ne fixe pas correctement l’O2.",
      "Faux. Il la bloque en occupant l’hème.",
      "Vrai. Le CO possède une affinité pour l’hème supérieure à celle de l’O2."
    ]
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une anémie hémolytique avec hématies falciformes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sickle-albumin-lipoprotein"
    },
    "choices": [
      "Les apolipoprotéines transportent uniquement des protéines dans le sang.",
      "L’HbS est moins soluble et peut s’agréger.",
      "La drépanocytose est due à une mutation de la chaîne α en position 100.",
      "La drépanocytose résulte d’une substitution Glu→Val en position 6 de la chaîne β."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les protéines de transport sanguin illustrent effets structuraux, osmotiques et lipidiques.",
    "choiceExplanations": [
      "Faux. Elles participent au transport des lipides.",
      "Vrai. L’HbS est moins soluble et peut s’agréger.",
      "Faux. La fiche indique β6 Glu→Val.",
      "Vrai. La drépanocytose résulte d’une substitution Glu→Val en position 6 de la chaîne β."
    ]
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les myosines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "myosin-cycle"
    },
    "choices": [
      "Les myosines sont des moteurs moléculaires.",
      "Toutes les myosines ont exclusivement un rôle digestif.",
      "La myosine II participe à la contraction musculaire.",
      "La myosine II est absente du muscle."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les myosines convertissent l’énergie de l’ATP en mouvement sur les filaments d’actine.",
    "choiceExplanations": [
      "Vrai. Les myosines sont des moteurs moléculaires.",
      "Faux. Elles interviennent dans motilité et transport.",
      "Vrai. La myosine II participe à la contraction musculaire.",
      "Faux. Elle participe à la contraction."
    ]
  },
  {
    "order": 27,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la structure de l’hémoglobine A. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-structure"
    },
    "choices": [
      "L’hémoglobine A est un homodimère α2.",
      "Elle possède quatre hèmes et quatre sites de fixation de l’O2.",
      "L’hème est un glucide de réserve.",
      "L’hémoglobine contient un groupement prosthétique hème."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’hémoglobine A associe quatre globines et quatre hèmes pour transporter l’oxygène.",
    "choiceExplanations": [
      "Faux. C’est un hétérotétramère α2β2.",
      "Vrai. Elle possède quatre hèmes et quatre sites de fixation de l’O2.",
      "Faux. C’est un groupement prosthétique porphyrinique.",
      "Vrai. L’hémoglobine contient un groupement prosthétique hème."
    ]
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la fixation de l’oxygène par l’hémoglobine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-conformations"
    },
    "choices": [
      "L’hémoglobine transporte l’O2 des poumons vers les tissus.",
      "Sa conformation est totalement fixe.",
      "Le pH n’a aucun effet sur l’affinité.",
      "Elle participe au retour du CO2 vers les poumons."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La fixation de l’oxygène est allostérique et dépend de l’environnement.",
    "choiceExplanations": [
      "Vrai. L’hémoglobine transporte l’O2 des poumons vers les tissus.",
      "Faux. Elle alterne entre conformations.",
      "Faux. Il influence l’équilibre des formes.",
      "Vrai. Elle participe au retour du CO2 vers les poumons."
    ]
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une personne est exposée à des fumées et présente une intoxication au monoxyde de carbone. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-anomalies"
    },
    "choices": [
      "La méthémoglobine ne fixe pas correctement l’O2.",
      "Le fer Fe3+ fixe mieux l’O2 que Fe2+.",
      "Il forme de la carboxyhémoglobine.",
      "Le CO augmente la fixation de l’O2 sur le même site."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "CO et oxydation du fer perturbent la fonction de l’hème.",
    "choiceExplanations": [
      "Vrai. La méthémoglobine ne fixe pas correctement l’O2.",
      "Faux. La méthémoglobine Fe3+ ne le fixe pas.",
      "Vrai. Il forme de la carboxyhémoglobine.",
      "Faux. Il la bloque en occupant l’hème."
    ]
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une anémie hémolytique avec hématies falciformes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sickle-albumin-lipoprotein"
    },
    "choices": [
      "L’albumine représente environ 60 % des protéines sériques et régule la pression oncotique.",
      "La drépanocytose résulte d’une substitution Glu→Val en position 6 de la chaîne β.",
      "L’HbS est plus soluble que l’HbA.",
      "La drépanocytose est due à une mutation de la chaîne α en position 100."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les protéines de transport sanguin illustrent effets structuraux, osmotiques et lipidiques.",
    "choiceExplanations": [
      "Vrai. L’albumine représente environ 60 % des protéines sériques et régule la pression oncotique.",
      "Vrai. La drépanocytose résulte d’une substitution Glu→Val en position 6 de la chaîne β.",
      "Faux. Sa solubilité diminue.",
      "Faux. La fiche indique β6 Glu→Val."
    ]
  }
];
