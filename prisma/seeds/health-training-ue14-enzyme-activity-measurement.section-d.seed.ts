import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "91": [
    "l’effet des concentrations de substrat et d’enzyme"
  ],
  "92": [
    "l’effet du pH et de la température"
  ],
  "93": [
    "l’inhibition compétitive"
  ],
  "94": [
    "les inhibitions non compétitive et incompétitive"
  ],
  "95": [
    "l’inhibition mixte et le pourcentage d’inhibition"
  ],
  "96": [
    "l’effet des concentrations de substrat et d’enzyme"
  ],
  "97": [
    "l’effet du pH et de la température"
  ],
  "98": [
    "l’inhibition compétitive"
  ],
  "99": [
    "les inhibitions non compétitive et incompétitive"
  ],
  "100": [
    "l’inhibition mixte et le pourcentage d’inhibition"
  ],
  "101": [
    "l’effet des concentrations de substrat et d’enzyme"
  ],
  "102": [
    "l’effet du pH et de la température"
  ],
  "103": [
    "l’inhibition compétitive"
  ],
  "104": [
    "les inhibitions non compétitive et incompétitive"
  ],
  "105": [
    "l’inhibition mixte et le pourcentage d’inhibition"
  ],
  "106": [
    "l’effet des concentrations de substrat et d’enzyme"
  ],
  "107": [
    "l’effet du pH et de la température"
  ],
  "108": [
    "l’inhibition compétitive"
  ],
  "109": [
    "les inhibitions non compétitive et incompétitive"
  ],
  "110": [
    "l’inhibition mixte et le pourcentage d’inhibition"
  ],
  "111": [
    "l’effet des concentrations de substrat et d’enzyme"
  ],
  "112": [
    "l’effet du pH et de la température"
  ],
  "113": [
    "l’inhibition compétitive"
  ],
  "114": [
    "les inhibitions non compétitive et incompétitive"
  ],
  "115": [
    "l’inhibition mixte et le pourcentage d’inhibition"
  ],
  "116": [
    "l’effet des concentrations de substrat et d’enzyme"
  ],
  "117": [
    "l’effet du pH et de la température"
  ],
  "118": [
    "l’inhibition compétitive"
  ],
  "119": [
    "les inhibitions non compétitive et incompétitive"
  ],
  "120": [
    "l’inhibition mixte et le pourcentage d’inhibition"
  ]
};

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "facteurs-inhibiteurs-1",
    "title": "Facteurs influençant l’activité",
    "description": "Identifier les notions fondamentales de la section.",
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
    "slug": "facteurs-inhibiteurs-2",
    "title": "Inhibitions compétitive et non compétitive",
    "description": "Appliquer les définitions, classifications et relations du cours.",
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
    "slug": "facteurs-inhibiteurs-3",
    "title": "Inhibitions incompétitive, mixte et pourcentage",
    "description": "Mobiliser les notions dans des raisonnements transversaux et des situations biologiques.",
    "stage": "MASTER",
    "sectionOrder": 4,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères fondamentaux",
        "sharedStatement": "Les questions suivantes mobilisent les repères essentiels de la section.",
        "questionOrders": [
          111,
          112,
          113
        ]
      },
      {
        "type": "GROUP",
        "title": "Mécanismes et relations",
        "sharedStatement": "Les questions suivantes relient les notions et mécanismes de la section.",
        "questionOrders": [
          114,
          115,
          116
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques",
        "sharedStatement": "Les questions suivantes replacent les notions dans une situation biologique, analytique ou médicale.",
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
    "question": "À propos de l’effet des concentrations de substrat et d’enzyme :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "substrate-enzyme-effects"
    },
    "choices": [
      "Une plus grande concentration d’enzyme permet d’atteindre plus rapidement le même équilibre.",
      "À conditions identiques, augmenter la concentration d’enzyme augmente la vitesse initiale.",
      "La saturation n’existe pas pour une enzyme michaelienne.",
      "La vitesse initiale augmente avec la concentration de substrat jusqu’à saturation."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Substrat et enzyme modifient la vitesse, mais l’enzyme ne déplace pas l’équilibre final.",
    "choiceExplanations": [
      "Vrai. Une plus grande concentration d’enzyme permet d’atteindre plus rapidement le même équilibre.",
      "Vrai. À conditions identiques, augmenter la concentration d’enzyme augmente la vitesse initiale.",
      "Faux. Elle explique le plateau de vitesse.",
      "Vrai. La vitesse initiale augmente avec la concentration de substrat jusqu’à saturation."
    ]
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’effet du pH et de la température :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ph-temperature-effects"
    },
    "choices": [
      "Le pH optimal varie selon l’enzyme.",
      "Toutes les enzymes ont un pH optimal exactement égal à 7,2.",
      "La température n’a aucun effet sur l’activité enzymatique.",
      "Une température supérieure à environ 60 °C dénature de nombreuses enzymes humaines."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "pH et température modifient l’ionisation, la conformation et donc l’activité des enzymes.",
    "choiceExplanations": [
      "Vrai. Le pH optimal varie selon l’enzyme.",
      "Faux. Le pH optimal varie.",
      "Faux. Elle modifie la vitesse et peut provoquer une dénaturation.",
      "Vrai. Une température supérieure à environ 60 °C dénature de nombreuses enzymes humaines."
    ]
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’inhibition compétitive :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "competitive-inhibition"
    },
    "choices": [
      "Le Km apparent augmente.",
      "Il se fixe nécessairement sur un site totalement distinct du substrat.",
      "Il dispute le site actif au substrat.",
      "L’inhibiteur compétitif se fixe sur l’enzyme libre."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La compétition réduit l’affinité apparente sans modifier la vitesse maximale accessible à forte concentration de substrat.",
    "choiceExplanations": [
      "Vrai. Le Km apparent augmente.",
      "Faux. Il dispute le site actif.",
      "Vrai. Il dispute le site actif au substrat.",
      "Vrai. L’inhibiteur compétitif se fixe sur l’enzyme libre."
    ]
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les inhibitions non compétitive et incompétitive :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "noncompetitive-uncompetitive"
    },
    "choices": [
      "L’inhibiteur non compétitif se fixe sur E et ES avec la même constante d’inhibition.",
      "L’inhibiteur non compétitif se fixe uniquement dans le site actif de l’enzyme libre.",
      "L’inhibition non compétitive augmente Vmax.",
      "Dans l’inhibition non compétitive pure, Km reste inchangé et Vmax diminue."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les inhibitions non compétitive et incompétitive se distinguent par les formes enzymatiques reconnues et leurs effets cinétiques.",
    "choiceExplanations": [
      "Vrai. L’inhibiteur non compétitif se fixe sur E et ES avec la même constante d’inhibition.",
      "Faux. Il se fixe sur un autre site à E et ES.",
      "Faux. Elle la diminue.",
      "Vrai. Dans l’inhibition non compétitive pure, Km reste inchangé et Vmax diminue."
    ]
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’inhibition mixte et le pourcentage d’inhibition :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "mixed-inhibition-percent"
    },
    "choices": [
      "L’inhibition mixte impose toujours des droites parallèles.",
      "Le pourcentage d’inhibition peut se calculer par (v₀ - v₀app)/v₀ × 100.",
      "Dans l’inhibition mixte, Km et Vmax sont modifiés indépendamment.",
      "v₀app correspond à la vitesse initiale mesurée en présence d’inhibiteur."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’inhibition mixte modifie les deux paramètres selon les affinités; le pourcentage quantifie la perte de vitesse.",
    "choiceExplanations": [
      "Faux. Les droites parallèles caractérisent l’inhibition incompétitive.",
      "Vrai. Le pourcentage d’inhibition peut se calculer par (v₀ - v₀app)/v₀ × 100.",
      "Vrai. Dans l’inhibition mixte, Km et Vmax sont modifiés indépendamment.",
      "Vrai. v₀app correspond à la vitesse initiale mesurée en présence d’inhibiteur."
    ]
  },
  {
    "order": 96,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’effet des concentrations de substrat et d’enzyme :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "substrate-enzyme-effects"
    },
    "choices": [
      "La vitesse initiale augmente avec la concentration de substrat jusqu’à saturation.",
      "À conditions identiques, augmenter la concentration d’enzyme augmente la vitesse initiale.",
      "La vitesse initiale diminue toujours lorsque [S] augmente.",
      "Augmenter [E] diminue proportionnellement v₀."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Substrat et enzyme modifient la vitesse, mais l’enzyme ne déplace pas l’équilibre final.",
    "choiceExplanations": [
      "Vrai. La vitesse initiale augmente avec la concentration de substrat jusqu’à saturation.",
      "Vrai. À conditions identiques, augmenter la concentration d’enzyme augmente la vitesse initiale.",
      "Faux. Elle augmente puis atteint un plateau.",
      "Faux. Cela augmente v₀."
    ]
  },
  {
    "order": 97,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’effet du pH et de la température :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ph-temperature-effects"
    },
    "choices": [
      "Une température supérieure à environ 60 °C dénature de nombreuses enzymes humaines.",
      "Le pH optimal varie selon l’enzyme.",
      "La Taq polymérase est adaptée aux températures élevées et utilisée en PCR.",
      "Les kératinocytes ont un optimum indiqué à 37 °C dans la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "pH et température modifient l’ionisation, la conformation et donc l’activité des enzymes.",
    "choiceExplanations": [
      "Vrai. Une température supérieure à environ 60 °C dénature de nombreuses enzymes humaines.",
      "Vrai. Le pH optimal varie selon l’enzyme.",
      "Vrai. La Taq polymérase est adaptée aux températures élevées et utilisée en PCR.",
      "Faux. La fiche cite environ 32 °C pour la peau."
    ]
  },
  {
    "order": 98,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’inhibition compétitive :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "competitive-inhibition"
    },
    "choices": [
      "Il se fixe nécessairement sur un site totalement distinct du substrat.",
      "La Vmax reste inchangée.",
      "Il dispute le site actif au substrat.",
      "L’inhibiteur compétitif se fixe exclusivement sur ES."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La compétition réduit l’affinité apparente sans modifier la vitesse maximale accessible à forte concentration de substrat.",
    "choiceExplanations": [
      "Faux. Il dispute le site actif.",
      "Vrai. La Vmax reste inchangée.",
      "Vrai. Il dispute le site actif au substrat.",
      "Faux. Cela correspond à l’inhibition incompétitive."
    ]
  },
  {
    "order": 99,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les inhibitions non compétitive et incompétitive :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "noncompetitive-uncompetitive"
    },
    "choices": [
      "Dans l’inhibition incompétitive, Km et Vmax diminuent dans les mêmes proportions.",
      "L’inhibiteur non compétitif se fixe uniquement dans le site actif de l’enzyme libre.",
      "L’inhibiteur incompétitif se fixe exclusivement au complexe ES.",
      "L’inhibiteur non compétitif se fixe sur E et ES avec la même constante d’inhibition."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les inhibitions non compétitive et incompétitive se distinguent par les formes enzymatiques reconnues et leurs effets cinétiques.",
    "choiceExplanations": [
      "Vrai. Dans l’inhibition incompétitive, Km et Vmax diminuent dans les mêmes proportions.",
      "Faux. Il se fixe sur un autre site à E et ES.",
      "Vrai. L’inhibiteur incompétitif se fixe exclusivement au complexe ES.",
      "Vrai. L’inhibiteur non compétitif se fixe sur E et ES avec la même constante d’inhibition."
    ]
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’inhibition mixte et le pourcentage d’inhibition :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "mixed-inhibition-percent"
    },
    "choices": [
      "Dans l’inhibition mixte, seul Km peut changer.",
      "Un inhibiteur mixte se fixe sur E et ES avec des affinités différentes.",
      "Dans l’inhibition mixte, Km et Vmax sont modifiés indépendamment.",
      "L’inhibition mixte impose toujours des droites parallèles."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’inhibition mixte modifie les deux paramètres selon les affinités; le pourcentage quantifie la perte de vitesse.",
    "choiceExplanations": [
      "Faux. Km et Vmax peuvent changer.",
      "Vrai. Un inhibiteur mixte se fixe sur E et ES avec des affinités différentes.",
      "Vrai. Dans l’inhibition mixte, Km et Vmax sont modifiés indépendamment.",
      "Faux. Les droites parallèles caractérisent l’inhibition incompétitive."
    ]
  },
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’effet des concentrations de substrat et d’enzyme, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "substrate-enzyme-effects"
    },
    "choices": [
      "La concentration d’enzyme déplace nécessairement l’équilibre thermodynamique.",
      "La vitesse initiale augmente avec la concentration de substrat jusqu’à saturation.",
      "La saturation n’existe pas pour une enzyme michaelienne.",
      "Augmenter la concentration d’enzyme ne modifie pas l’équilibre final de la réaction."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Substrat et enzyme modifient la vitesse, mais l’enzyme ne déplace pas l’équilibre final.",
    "choiceExplanations": [
      "Faux. Elle modifie la vitesse, pas l’équilibre.",
      "Vrai. La vitesse initiale augmente avec la concentration de substrat jusqu’à saturation.",
      "Faux. Elle explique le plateau de vitesse.",
      "Vrai. Augmenter la concentration d’enzyme ne modifie pas l’équilibre final de la réaction."
    ]
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’effet du pH et de la température, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ph-temperature-effects"
    },
    "choices": [
      "Le pH optimal varie selon l’enzyme.",
      "La Taq polymérase est détruite dès 37 °C et inutilisable en PCR.",
      "La température n’a aucun effet sur l’activité enzymatique.",
      "Les kératinocytes ont un optimum indiqué à 37 °C dans la fiche."
    ],
    "correctChoiceIndexes": [
      0
    ],
    "explanation": "pH et température modifient l’ionisation, la conformation et donc l’activité des enzymes.",
    "choiceExplanations": [
      "Vrai. Le pH optimal varie selon l’enzyme.",
      "Faux. Elle est thermostable.",
      "Faux. Elle modifie la vitesse et peut provoquer une dénaturation.",
      "Faux. La fiche cite environ 32 °C pour la peau."
    ]
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’inhibition compétitive, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "competitive-inhibition"
    },
    "choices": [
      "Le Km apparent augmente.",
      "Il dispute le site actif au substrat.",
      "L’inhibiteur compétitif se fixe exclusivement sur ES.",
      "Il se fixe nécessairement sur un site totalement distinct du substrat."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La compétition réduit l’affinité apparente sans modifier la vitesse maximale accessible à forte concentration de substrat.",
    "choiceExplanations": [
      "Vrai. Le Km apparent augmente.",
      "Vrai. Il dispute le site actif au substrat.",
      "Faux. Cela correspond à l’inhibition incompétitive.",
      "Faux. Il dispute le site actif."
    ]
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les inhibitions non compétitive et incompétitive, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "noncompetitive-uncompetitive"
    },
    "choices": [
      "L’inhibiteur incompétitif se fixe uniquement à l’enzyme libre.",
      "Dans l’inhibition incompétitive, Km et Vmax diminuent dans les mêmes proportions.",
      "L’inhibiteur incompétitif se fixe exclusivement au complexe ES.",
      "L’inhibiteur non compétitif se fixe uniquement dans le site actif de l’enzyme libre."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les inhibitions non compétitive et incompétitive se distinguent par les formes enzymatiques reconnues et leurs effets cinétiques.",
    "choiceExplanations": [
      "Faux. Il se fixe à ES.",
      "Vrai. Dans l’inhibition incompétitive, Km et Vmax diminuent dans les mêmes proportions.",
      "Vrai. L’inhibiteur incompétitif se fixe exclusivement au complexe ES.",
      "Faux. Il se fixe sur un autre site à E et ES."
    ]
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’inhibition mixte et le pourcentage d’inhibition, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "mixed-inhibition-percent"
    },
    "choices": [
      "Une inhibition de 100 % signifie que v₀app = v₀.",
      "Le pourcentage d’inhibition est v₀app/v₀ × 100.",
      "L’inhibition mixte impose toujours des droites parallèles.",
      "Le pourcentage d’inhibition peut se calculer par (v₀ - v₀app)/v₀ × 100."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "L’inhibition mixte modifie les deux paramètres selon les affinités; le pourcentage quantifie la perte de vitesse.",
    "choiceExplanations": [
      "Faux. Elle signifie que la vitesse apparente est nulle.",
      "Faux. Il faut calculer la perte relative de vitesse.",
      "Faux. Les droites parallèles caractérisent l’inhibition incompétitive.",
      "Vrai. Le pourcentage d’inhibition peut se calculer par (v₀ - v₀app)/v₀ × 100."
    ]
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’effet des concentrations de substrat et d’enzyme, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "substrate-enzyme-effects"
    },
    "choices": [
      "Une plus grande concentration d’enzyme permet d’atteindre plus rapidement le même équilibre.",
      "La vitesse initiale diminue toujours lorsque [S] augmente.",
      "À conditions identiques, augmenter la concentration d’enzyme augmente la vitesse initiale.",
      "La saturation n’existe pas pour une enzyme michaelienne."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Substrat et enzyme modifient la vitesse, mais l’enzyme ne déplace pas l’équilibre final.",
    "choiceExplanations": [
      "Vrai. Une plus grande concentration d’enzyme permet d’atteindre plus rapidement le même équilibre.",
      "Faux. Elle augmente puis atteint un plateau.",
      "Vrai. À conditions identiques, augmenter la concentration d’enzyme augmente la vitesse initiale.",
      "Faux. Elle explique le plateau de vitesse."
    ]
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’effet du pH et de la température, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ph-temperature-effects"
    },
    "choices": [
      "La température n’a aucun effet sur l’activité enzymatique.",
      "Les kératinocytes ont un optimum indiqué à 37 °C dans la fiche.",
      "La Taq polymérase est adaptée aux températures élevées et utilisée en PCR.",
      "Le pH optimal varie selon l’enzyme."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "pH et température modifient l’ionisation, la conformation et donc l’activité des enzymes.",
    "choiceExplanations": [
      "Faux. Elle modifie la vitesse et peut provoquer une dénaturation.",
      "Faux. La fiche cite environ 32 °C pour la peau.",
      "Vrai. La Taq polymérase est adaptée aux températures élevées et utilisée en PCR.",
      "Vrai. Le pH optimal varie selon l’enzyme."
    ]
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’inhibition compétitive, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "competitive-inhibition"
    },
    "choices": [
      "Il diminue le Km apparent.",
      "L’inhibiteur compétitif se fixe exclusivement sur ES.",
      "Il se fixe nécessairement sur un site totalement distinct du substrat.",
      "La Vmax reste inchangée."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "La compétition réduit l’affinité apparente sans modifier la vitesse maximale accessible à forte concentration de substrat.",
    "choiceExplanations": [
      "Faux. Il l’augmente.",
      "Faux. Cela correspond à l’inhibition incompétitive.",
      "Faux. Il dispute le site actif.",
      "Vrai. La Vmax reste inchangée."
    ]
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les inhibitions non compétitive et incompétitive, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "noncompetitive-uncompetitive"
    },
    "choices": [
      "Dans l’inhibition incompétitive, Km augmente et Vmax ne change pas.",
      "Dans l’inhibition incompétitive, Km et Vmax diminuent dans les mêmes proportions.",
      "L’inhibition non compétitive augmente Vmax.",
      "Dans l’inhibition non compétitive pure, Km reste inchangé et Vmax diminue."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les inhibitions non compétitive et incompétitive se distinguent par les formes enzymatiques reconnues et leurs effets cinétiques.",
    "choiceExplanations": [
      "Faux. Les deux paramètres diminuent proportionnellement.",
      "Vrai. Dans l’inhibition incompétitive, Km et Vmax diminuent dans les mêmes proportions.",
      "Faux. Elle la diminue.",
      "Vrai. Dans l’inhibition non compétitive pure, Km reste inchangé et Vmax diminue."
    ]
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’inhibition mixte et le pourcentage d’inhibition, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "mixed-inhibition-percent"
    },
    "choices": [
      "v₀app correspond à la vitesse initiale mesurée en présence d’inhibiteur.",
      "L’inhibition mixte impose toujours des droites parallèles.",
      "Le pourcentage d’inhibition est v₀app/v₀ × 100.",
      "Un inhibiteur mixte se fixe sur E et ES avec des affinités différentes."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "L’inhibition mixte modifie les deux paramètres selon les affinités; le pourcentage quantifie la perte de vitesse.",
    "choiceExplanations": [
      "Vrai. v₀app correspond à la vitesse initiale mesurée en présence d’inhibiteur.",
      "Faux. Les droites parallèles caractérisent l’inhibition incompétitive.",
      "Faux. Il faut calculer la perte relative de vitesse.",
      "Vrai. Un inhibiteur mixte se fixe sur E et ES avec des affinités différentes."
    ]
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’effet des concentrations de substrat et d’enzyme. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "substrate-enzyme-effects"
    },
    "choices": [
      "La saturation n’existe pas pour une enzyme michaelienne.",
      "La vitesse initiale augmente avec la concentration de substrat jusqu’à saturation.",
      "La vitesse initiale diminue toujours lorsque [S] augmente.",
      "Une plus grande concentration d’enzyme permet d’atteindre plus rapidement le même équilibre."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Substrat et enzyme modifient la vitesse, mais l’enzyme ne déplace pas l’équilibre final.",
    "choiceExplanations": [
      "Faux. Elle explique le plateau de vitesse.",
      "Vrai. La vitesse initiale augmente avec la concentration de substrat jusqu’à saturation.",
      "Faux. Elle augmente puis atteint un plateau.",
      "Vrai. Une plus grande concentration d’enzyme permet d’atteindre plus rapidement le même équilibre."
    ]
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une amplification PCR utilise une polymérase provenant d’une bactérie thermophile. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ph-temperature-effects"
    },
    "choices": [
      "Les kératinocytes ont un optimum indiqué à 37 °C dans la fiche.",
      "Le pH optimal varie selon l’enzyme.",
      "La Taq polymérase est adaptée aux températures élevées et utilisée en PCR.",
      "Une température supérieure à environ 60 °C dénature de nombreuses enzymes humaines."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "pH et température modifient l’ionisation, la conformation et donc l’activité des enzymes.",
    "choiceExplanations": [
      "Faux. La fiche cite environ 32 °C pour la peau.",
      "Vrai. Le pH optimal varie selon l’enzyme.",
      "Vrai. La Taq polymérase est adaptée aux températures élevées et utilisée en PCR.",
      "Vrai. Une température supérieure à environ 60 °C dénature de nombreuses enzymes humaines."
    ]
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un inhibiteur thérapeutique entre en compétition avec le substrat pour le site actif. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "competitive-inhibition"
    },
    "choices": [
      "La Vmax reste inchangée.",
      "L’inhibiteur compétitif se fixe exclusivement sur ES.",
      "Il diminue toujours la Vmax.",
      "L’inhibiteur compétitif se fixe sur l’enzyme libre."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La compétition réduit l’affinité apparente sans modifier la vitesse maximale accessible à forte concentration de substrat.",
    "choiceExplanations": [
      "Vrai. La Vmax reste inchangée.",
      "Faux. Cela correspond à l’inhibition incompétitive.",
      "Faux. La Vmax reste inchangée dans le modèle compétitif.",
      "Vrai. L’inhibiteur compétitif se fixe sur l’enzyme libre."
    ]
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les inhibitions non compétitive et incompétitive. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "noncompetitive-uncompetitive"
    },
    "choices": [
      "L’inhibiteur non compétitif se fixe sur E et ES avec la même constante d’inhibition.",
      "L’inhibiteur non compétitif se fixe uniquement dans le site actif de l’enzyme libre.",
      "Dans l’inhibition incompétitive, Km et Vmax diminuent dans les mêmes proportions.",
      "L’inhibition non compétitive augmente Vmax."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les inhibitions non compétitive et incompétitive se distinguent par les formes enzymatiques reconnues et leurs effets cinétiques.",
    "choiceExplanations": [
      "Vrai. L’inhibiteur non compétitif se fixe sur E et ES avec la même constante d’inhibition.",
      "Faux. Il se fixe sur un autre site à E et ES.",
      "Vrai. Dans l’inhibition incompétitive, Km et Vmax diminuent dans les mêmes proportions.",
      "Faux. Elle la diminue."
    ]
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une activité passe de 100 à 40 unités en présence d’un inhibiteur. Le pourcentage d’inhibition est de 60 %. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "mixed-inhibition-percent"
    },
    "choices": [
      "v₀app correspond à la vitesse initiale mesurée en présence d’inhibiteur.",
      "Une inhibition de 100 % signifie que v₀app = v₀.",
      "Le pourcentage d’inhibition est v₀app/v₀ × 100.",
      "Le pourcentage d’inhibition peut se calculer par (v₀ - v₀app)/v₀ × 100."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "L’inhibition mixte modifie les deux paramètres selon les affinités; le pourcentage quantifie la perte de vitesse.",
    "choiceExplanations": [
      "Vrai. v₀app correspond à la vitesse initiale mesurée en présence d’inhibiteur.",
      "Faux. Elle signifie que la vitesse apparente est nulle.",
      "Faux. Il faut calculer la perte relative de vitesse.",
      "Vrai. Le pourcentage d’inhibition peut se calculer par (v₀ - v₀app)/v₀ × 100."
    ]
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’effet des concentrations de substrat et d’enzyme. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "substrate-enzyme-effects"
    },
    "choices": [
      "La vitesse initiale augmente avec la concentration de substrat jusqu’à saturation.",
      "À conditions identiques, augmenter la concentration d’enzyme augmente la vitesse initiale.",
      "La concentration d’enzyme déplace nécessairement l’équilibre thermodynamique.",
      "Augmenter la concentration d’enzyme ne modifie pas l’équilibre final de la réaction."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Substrat et enzyme modifient la vitesse, mais l’enzyme ne déplace pas l’équilibre final.",
    "choiceExplanations": [
      "Vrai. La vitesse initiale augmente avec la concentration de substrat jusqu’à saturation.",
      "Vrai. À conditions identiques, augmenter la concentration d’enzyme augmente la vitesse initiale.",
      "Faux. Elle modifie la vitesse, pas l’équilibre.",
      "Vrai. Augmenter la concentration d’enzyme ne modifie pas l’équilibre final de la réaction."
    ]
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une amplification PCR utilise une polymérase provenant d’une bactérie thermophile. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ph-temperature-effects"
    },
    "choices": [
      "Les kératinocytes ont un optimum indiqué à 37 °C dans la fiche.",
      "La température n’a aucun effet sur l’activité enzymatique.",
      "Les pH extrêmes inférieurs à 2 ou supérieurs à 10 peuvent dénaturer les enzymes.",
      "La Taq polymérase est adaptée aux températures élevées et utilisée en PCR."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "pH et température modifient l’ionisation, la conformation et donc l’activité des enzymes.",
    "choiceExplanations": [
      "Faux. La fiche cite environ 32 °C pour la peau.",
      "Faux. Elle modifie la vitesse et peut provoquer une dénaturation.",
      "Vrai. Les pH extrêmes inférieurs à 2 ou supérieurs à 10 peuvent dénaturer les enzymes.",
      "Vrai. La Taq polymérase est adaptée aux températures élevées et utilisée en PCR."
    ]
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un inhibiteur thérapeutique entre en compétition avec le substrat pour le site actif. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "competitive-inhibition"
    },
    "choices": [
      "Il dispute le site actif au substrat.",
      "La Vmax reste inchangée.",
      "Il diminue toujours la Vmax.",
      "Il se fixe nécessairement sur un site totalement distinct du substrat."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La compétition réduit l’affinité apparente sans modifier la vitesse maximale accessible à forte concentration de substrat.",
    "choiceExplanations": [
      "Vrai. Il dispute le site actif au substrat.",
      "Vrai. La Vmax reste inchangée.",
      "Faux. La Vmax reste inchangée dans le modèle compétitif.",
      "Faux. Il dispute le site actif."
    ]
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les inhibitions non compétitive et incompétitive. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "noncompetitive-uncompetitive"
    },
    "choices": [
      "Dans l’inhibition incompétitive, Km augmente et Vmax ne change pas.",
      "L’inhibiteur non compétitif se fixe uniquement dans le site actif de l’enzyme libre.",
      "L’inhibiteur non compétitif se fixe sur E et ES avec la même constante d’inhibition.",
      "Dans l’inhibition incompétitive, Km et Vmax diminuent dans les mêmes proportions."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les inhibitions non compétitive et incompétitive se distinguent par les formes enzymatiques reconnues et leurs effets cinétiques.",
    "choiceExplanations": [
      "Faux. Les deux paramètres diminuent proportionnellement.",
      "Faux. Il se fixe sur un autre site à E et ES.",
      "Vrai. L’inhibiteur non compétitif se fixe sur E et ES avec la même constante d’inhibition.",
      "Vrai. Dans l’inhibition incompétitive, Km et Vmax diminuent dans les mêmes proportions."
    ]
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une activité passe de 100 à 40 unités en présence d’un inhibiteur. Le pourcentage d’inhibition est de 60 %. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "mixed-inhibition-percent"
    },
    "choices": [
      "Le pourcentage d’inhibition est v₀app/v₀ × 100.",
      "Dans l’inhibition mixte, Km et Vmax sont modifiés indépendamment.",
      "v₀app correspond à la vitesse initiale mesurée en présence d’inhibiteur.",
      "Un inhibiteur mixte se fixe sur E et ES avec des affinités différentes."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’inhibition mixte modifie les deux paramètres selon les affinités; le pourcentage quantifie la perte de vitesse.",
    "choiceExplanations": [
      "Faux. Il faut calculer la perte relative de vitesse.",
      "Vrai. Dans l’inhibition mixte, Km et Vmax sont modifiés indépendamment.",
      "Vrai. v₀app correspond à la vitesse initiale mesurée en présence d’inhibiteur.",
      "Vrai. Un inhibiteur mixte se fixe sur E et ES avec des affinités différentes."
    ]
  }
];
