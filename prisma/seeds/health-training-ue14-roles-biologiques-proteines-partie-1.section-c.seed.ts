import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "61": [
    "les récepteurs ionotropiques"
  ],
  "62": [
    "les récepteurs 5-HT3 et GABAA"
  ],
  "63": [
    "la pompe Na+/K+-ATPase"
  ],
  "64": [
    "les transporteurs ABC et la P-glycoprotéine"
  ],
  "65": [
    "le canal CFTR"
  ],
  "66": [
    "les récepteurs ionotropiques"
  ],
  "67": [
    "les récepteurs 5-HT3 et GABAA"
  ],
  "68": [
    "la pompe Na+/K+-ATPase"
  ],
  "69": [
    "les transporteurs ABC et la P-glycoprotéine"
  ],
  "70": [
    "le canal CFTR"
  ],
  "71": [
    "les récepteurs ionotropiques"
  ],
  "72": [
    "les récepteurs 5-HT3 et GABAA"
  ],
  "73": [
    "la pompe Na+/K+-ATPase"
  ],
  "74": [
    "les transporteurs ABC et la P-glycoprotéine"
  ],
  "75": [
    "le canal CFTR"
  ],
  "76": [
    "les récepteurs ionotropiques"
  ],
  "77": [
    "les récepteurs 5-HT3 et GABAA"
  ],
  "78": [
    "la pompe Na+/K+-ATPase"
  ],
  "79": [
    "les transporteurs ABC et la P-glycoprotéine"
  ],
  "80": [
    "le canal CFTR"
  ],
  "81": [
    "les récepteurs ionotropiques"
  ],
  "82": [
    "les récepteurs 5-HT3 et GABAA"
  ],
  "83": [
    "la pompe Na+/K+-ATPase"
  ],
  "84": [
    "les transporteurs ABC et la P-glycoprotéine"
  ],
  "85": [
    "le canal CFTR"
  ],
  "86": [
    "les récepteurs ionotropiques"
  ],
  "87": [
    "les récepteurs 5-HT3 et GABAA"
  ],
  "88": [
    "la pompe Na+/K+-ATPase"
  ],
  "89": [
    "les transporteurs ABC et la P-glycoprotéine"
  ],
  "90": [
    "le canal CFTR"
  ]
};

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "canaux-pompes-abc-1",
    "title": "Récepteurs ionotropiques et canaux",
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
    "slug": "canaux-pompes-abc-2",
    "title": "Pompes et transport actif",
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
    "slug": "canaux-pompes-abc-3",
    "title": "Transporteurs ABC et pathologies",
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
    "question": "À propos de les récepteurs ionotropiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ionotropic-channel"
    },
    "choices": [
      "Les canaux sont sélectifs de certains ions.",
      "Ils utilisent toujours un second messager éloigné pour ouvrir un autre canal.",
      "La fixation du ligand ouvre un canal ionique.",
      "Le flux suit le gradient électrochimique."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les récepteurs ionotropiques couplent directement liaison du ligand et ouverture du canal.",
    "choiceExplanations": [
      "Vrai. Les canaux sont sélectifs de certains ions.",
      "Faux. La même molécule assure réception et canal.",
      "Vrai. La fixation du ligand ouvre un canal ionique.",
      "Vrai. Le flux suit le gradient électrochimique."
    ]
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les récepteurs 5-HT3 et GABAA :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "serotonin-gaba-channels"
    },
    "choices": [
      "Le récepteur GABAA permet une entrée de Cl−.",
      "Il permet une entrée de Na+ et une dépolarisation.",
      "Le GABA est décrit comme un neurotransmetteur excitateur principal.",
      "Le GABAA est un récepteur stimulant une entrée massive de Na+."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les deux canaux illustrent des effets électriques opposés selon l’ion transporté.",
    "choiceExplanations": [
      "Vrai. Le récepteur GABAA permet une entrée de Cl−.",
      "Vrai. Il permet une entrée de Na+ et une dépolarisation.",
      "Faux. Il est inhibiteur.",
      "Faux. Il ouvre un canal chlorure."
    ]
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la pompe Na+/K+-ATPase :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sodium-potassium-pump"
    },
    "choices": [
      "Elle utilise l’énergie de l’ATP.",
      "Elle expulse trois Na+ et fait entrer deux K+.",
      "Elle transporte les ions contre leurs gradients.",
      "Elle n’intervient pas dans les cellules nerveuses ou musculaires."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La Na+/K+-ATPase restaure les gradients ioniques au prix d’ATP.",
    "choiceExplanations": [
      "Vrai. Elle utilise l’énergie de l’ATP.",
      "Vrai. Elle expulse trois Na+ et fait entrer deux K+.",
      "Vrai. Elle transporte les ions contre leurs gradients.",
      "Faux. Elle participe à leur potentiel de repos."
    ]
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les transporteurs ABC et la P-glycoprotéine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "abc-pgp"
    },
    "choices": [
      "La P-glycoprotéine augmente toujours l’accumulation intracellulaire des cytotoxiques.",
      "Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "MDR signifie uniquement maladie métabolique rénale.",
      "ABC signifie ATP Binding Cassette."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les transporteurs ABC participent à l’efflux des xénobiotiques et à la pharmacorésistance.",
    "choiceExplanations": [
      "Faux. Elle peut les expulser.",
      "Vrai. Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "Faux. Il désigne la résistance multiple aux médicaments.",
      "Vrai. ABC signifie ATP Binding Cassette."
    ]
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le canal CFTR :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cftr-channel"
    },
    "choices": [
      "La mucoviscidose n’a aucun lien génétique.",
      "Les mutations de CFTR sont à l’origine de la mucoviscidose.",
      "Il est exprimé dans des cellules épithéliales.",
      "La mutation ΔF508 est citée."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "CFTR est un transporteur chlorure dont les mutations provoquent la mucoviscidose.",
    "choiceExplanations": [
      "Faux. Elle résulte de mutations de CFTR.",
      "Vrai. Les mutations de CFTR sont à l’origine de la mucoviscidose.",
      "Vrai. Il est exprimé dans des cellules épithéliales.",
      "Vrai. La mutation ΔF508 est citée."
    ]
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les récepteurs ionotropiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ionotropic-channel"
    },
    "choices": [
      "Le flux suit le gradient électrochimique.",
      "Ils utilisent toujours un second messager éloigné pour ouvrir un autre canal.",
      "La même molécule assure les fonctions réceptrice et effectrice.",
      "Ils ne possèdent aucun domaine transmembranaire."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les récepteurs ionotropiques couplent directement liaison du ligand et ouverture du canal.",
    "choiceExplanations": [
      "Vrai. Le flux suit le gradient électrochimique.",
      "Faux. La même molécule assure réception et canal.",
      "Vrai. La même molécule assure les fonctions réceptrice et effectrice.",
      "Faux. Ils forment un pore membranaire."
    ]
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les récepteurs 5-HT3 et GABAA :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "serotonin-gaba-channels"
    },
    "choices": [
      "Le récepteur 5-HT3 s’ouvre après fixation de la sérotonine.",
      "Il permet une entrée de Na+ et une dépolarisation.",
      "Le GABA est décrit comme un neurotransmetteur excitateur principal.",
      "Le GABAA provoque une hyperpolarisation et un effet inhibiteur."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les deux canaux illustrent des effets électriques opposés selon l’ion transporté.",
    "choiceExplanations": [
      "Vrai. Le récepteur 5-HT3 s’ouvre après fixation de la sérotonine.",
      "Vrai. Il permet une entrée de Na+ et une dépolarisation.",
      "Faux. Il est inhibiteur.",
      "Vrai. Le GABAA provoque une hyperpolarisation et un effet inhibiteur."
    ]
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la pompe Na+/K+-ATPase :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sodium-potassium-pump"
    },
    "choices": [
      "Elle suit passivement le gradient comme un canal.",
      "Elle contribue au potentiel de repos.",
      "Elle n’intervient pas dans les cellules nerveuses ou musculaires.",
      "Elle expulse trois Na+ et fait entrer deux K+."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La Na+/K+-ATPase restaure les gradients ioniques au prix d’ATP.",
    "choiceExplanations": [
      "Faux. Elle effectue un transport actif.",
      "Vrai. Elle contribue au potentiel de repos.",
      "Faux. Elle participe à leur potentiel de repos.",
      "Vrai. Elle expulse trois Na+ et fait entrer deux K+."
    ]
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les transporteurs ABC et la P-glycoprotéine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "abc-pgp"
    },
    "choices": [
      "Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "Sa surexpression peut provoquer une résistance aux anticancéreux.",
      "La P-glycoprotéine augmente toujours l’accumulation intracellulaire des cytotoxiques.",
      "ABC signifie ATP Binding Cassette."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les transporteurs ABC participent à l’efflux des xénobiotiques et à la pharmacorésistance.",
    "choiceExplanations": [
      "Vrai. Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "Vrai. Sa surexpression peut provoquer une résistance aux anticancéreux.",
      "Faux. Elle peut les expulser.",
      "Vrai. ABC signifie ATP Binding Cassette."
    ]
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le canal CFTR :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cftr-channel"
    },
    "choices": [
      "CFTR est un récepteur nucléaire aux stéroïdes.",
      "Les mutations de CFTR sont à l’origine de la mucoviscidose.",
      "CFTR transporte exclusivement le glucose.",
      "CFTR transporte des ions chlorure."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "CFTR est un transporteur chlorure dont les mutations provoquent la mucoviscidose.",
    "choiceExplanations": [
      "Faux. C’est un canal/transporteur membranaire de Cl−.",
      "Vrai. Les mutations de CFTR sont à l’origine de la mucoviscidose.",
      "Faux. Il transporte des ions chlorure.",
      "Vrai. CFTR transporte des ions chlorure."
    ]
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les récepteurs ionotropiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ionotropic-channel"
    },
    "choices": [
      "Les canaux sont sélectifs de certains ions.",
      "Ils ne possèdent aucun domaine transmembranaire.",
      "La fixation du ligand ouvre un canal ionique.",
      "Ils sont des récepteurs nucléaires."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les récepteurs ionotropiques couplent directement liaison du ligand et ouverture du canal.",
    "choiceExplanations": [
      "Vrai. Les canaux sont sélectifs de certains ions.",
      "Faux. Ils forment un pore membranaire.",
      "Vrai. La fixation du ligand ouvre un canal ionique.",
      "Faux. Ils sont membranaires."
    ]
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les récepteurs 5-HT3 et GABAA, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "serotonin-gaba-channels"
    },
    "choices": [
      "Le GABAA provoque une hyperpolarisation et un effet inhibiteur.",
      "La fixation du ligand ferme toujours le canal.",
      "Le GABAA est un récepteur stimulant une entrée massive de Na+.",
      "Il permet une entrée de Na+ et une dépolarisation."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les deux canaux illustrent des effets électriques opposés selon l’ion transporté.",
    "choiceExplanations": [
      "Vrai. Le GABAA provoque une hyperpolarisation et un effet inhibiteur.",
      "Faux. Elle provoque son ouverture.",
      "Faux. Il ouvre un canal chlorure.",
      "Vrai. Il permet une entrée de Na+ et une dépolarisation."
    ]
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la pompe Na+/K+-ATPase, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sodium-potassium-pump"
    },
    "choices": [
      "Elle utilise l’énergie de l’ATP.",
      "Elle n’intervient pas dans les cellules nerveuses ou musculaires.",
      "Elle expulse trois Na+ et fait entrer deux K+.",
      "Elle fonctionne sans aucune énergie."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La Na+/K+-ATPase restaure les gradients ioniques au prix d’ATP.",
    "choiceExplanations": [
      "Vrai. Elle utilise l’énergie de l’ATP.",
      "Faux. Elle participe à leur potentiel de repos.",
      "Vrai. Elle expulse trois Na+ et fait entrer deux K+.",
      "Faux. Elle hydrolyse l’ATP."
    ]
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les transporteurs ABC et la P-glycoprotéine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "abc-pgp"
    },
    "choices": [
      "Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "La P-glycoprotéine peut excréter des médicaments.",
      "Les transporteurs ABC sont absents des tissus humains.",
      "MDR signifie uniquement maladie métabolique rénale."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les transporteurs ABC participent à l’efflux des xénobiotiques et à la pharmacorésistance.",
    "choiceExplanations": [
      "Vrai. Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "Vrai. La P-glycoprotéine peut excréter des médicaments.",
      "Faux. Ils sont présents dans de nombreux tissus.",
      "Faux. Il désigne la résistance multiple aux médicaments."
    ]
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le canal CFTR, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cftr-channel"
    },
    "choices": [
      "La mucoviscidose n’a aucun lien génétique.",
      "Les mutations de CFTR sont à l’origine de la mucoviscidose.",
      "CFTR transporte des ions chlorure.",
      "CFTR est un récepteur nucléaire aux stéroïdes."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "CFTR est un transporteur chlorure dont les mutations provoquent la mucoviscidose.",
    "choiceExplanations": [
      "Faux. Elle résulte de mutations de CFTR.",
      "Vrai. Les mutations de CFTR sont à l’origine de la mucoviscidose.",
      "Vrai. CFTR transporte des ions chlorure.",
      "Faux. C’est un canal/transporteur membranaire de Cl−."
    ]
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les récepteurs ionotropiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ionotropic-channel"
    },
    "choices": [
      "Ils transportent nécessairement les ions contre leur gradient.",
      "Les canaux sont sélectifs de certains ions.",
      "Ils utilisent toujours un second messager éloigné pour ouvrir un autre canal.",
      "La fixation du ligand ouvre un canal ionique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les récepteurs ionotropiques couplent directement liaison du ligand et ouverture du canal.",
    "choiceExplanations": [
      "Faux. Les canaux facilitent le passage selon le gradient.",
      "Vrai. Les canaux sont sélectifs de certains ions.",
      "Faux. La même molécule assure réception et canal.",
      "Vrai. La fixation du ligand ouvre un canal ionique."
    ]
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les récepteurs 5-HT3 et GABAA, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "serotonin-gaba-channels"
    },
    "choices": [
      "Le récepteur GABAA permet une entrée de Cl−.",
      "Le récepteur 5-HT3 s’ouvre après fixation de la sérotonine.",
      "Le GABAA est un récepteur stimulant une entrée massive de Na+.",
      "Le 5-HT3 permet uniquement une sortie de Cl− et une hyperpolarisation."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les deux canaux illustrent des effets électriques opposés selon l’ion transporté.",
    "choiceExplanations": [
      "Vrai. Le récepteur GABAA permet une entrée de Cl−.",
      "Vrai. Le récepteur 5-HT3 s’ouvre après fixation de la sérotonine.",
      "Faux. Il ouvre un canal chlorure.",
      "Faux. Il provoque une entrée de Na+ et une dépolarisation."
    ]
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la pompe Na+/K+-ATPase, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sodium-potassium-pump"
    },
    "choices": [
      "Elle contribue au potentiel de repos.",
      "Elle n’intervient pas dans les cellules nerveuses ou musculaires.",
      "Elle expulse trois Na+ et fait entrer deux K+.",
      "Elle suit passivement le gradient comme un canal."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La Na+/K+-ATPase restaure les gradients ioniques au prix d’ATP.",
    "choiceExplanations": [
      "Vrai. Elle contribue au potentiel de repos.",
      "Faux. Elle participe à leur potentiel de repos.",
      "Vrai. Elle expulse trois Na+ et fait entrer deux K+.",
      "Faux. Elle effectue un transport actif."
    ]
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les transporteurs ABC et la P-glycoprotéine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "abc-pgp"
    },
    "choices": [
      "MDR signifie uniquement maladie métabolique rénale.",
      "Sa surexpression peut provoquer une résistance aux anticancéreux.",
      "Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "La P-glycoprotéine augmente toujours l’accumulation intracellulaire des cytotoxiques."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les transporteurs ABC participent à l’efflux des xénobiotiques et à la pharmacorésistance.",
    "choiceExplanations": [
      "Faux. Il désigne la résistance multiple aux médicaments.",
      "Vrai. Sa surexpression peut provoquer une résistance aux anticancéreux.",
      "Vrai. Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "Faux. Elle peut les expulser."
    ]
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le canal CFTR, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cftr-channel"
    },
    "choices": [
      "La mucoviscidose n’a aucun lien génétique.",
      "La mutation ΔF508 est citée.",
      "CFTR transporte des ions chlorure.",
      "CFTR transporte exclusivement le glucose."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "CFTR est un transporteur chlorure dont les mutations provoquent la mucoviscidose.",
    "choiceExplanations": [
      "Faux. Elle résulte de mutations de CFTR.",
      "Vrai. La mutation ΔF508 est citée.",
      "Vrai. CFTR transporte des ions chlorure.",
      "Faux. Il transporte des ions chlorure."
    ]
  },
  {
    "order": 81,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les récepteurs ionotropiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ionotropic-channel"
    },
    "choices": [
      "La fixation du ligand ouvre un canal ionique.",
      "La même molécule assure les fonctions réceptrice et effectrice.",
      "Ils ne possèdent aucun domaine transmembranaire.",
      "Ils utilisent toujours un second messager éloigné pour ouvrir un autre canal."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les récepteurs ionotropiques couplent directement liaison du ligand et ouverture du canal.",
    "choiceExplanations": [
      "Vrai. La fixation du ligand ouvre un canal ionique.",
      "Vrai. La même molécule assure les fonctions réceptrice et effectrice.",
      "Faux. Ils forment un pore membranaire.",
      "Faux. La même molécule assure réception et canal."
    ]
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les récepteurs 5-HT3 et GABAA. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "serotonin-gaba-channels"
    },
    "choices": [
      "Le GABAA est un récepteur stimulant une entrée massive de Na+.",
      "Il permet une entrée de Na+ et une dépolarisation.",
      "La fixation du ligand ferme toujours le canal.",
      "Le récepteur GABAA permet une entrée de Cl−."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les deux canaux illustrent des effets électriques opposés selon l’ion transporté.",
    "choiceExplanations": [
      "Faux. Il ouvre un canal chlorure.",
      "Vrai. Il permet une entrée de Na+ et une dépolarisation.",
      "Faux. Elle provoque son ouverture.",
      "Vrai. Le récepteur GABAA permet une entrée de Cl−."
    ]
  },
  {
    "order": 83,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la pompe Na+/K+-ATPase. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sodium-potassium-pump"
    },
    "choices": [
      "Elle transporte les ions contre leurs gradients.",
      "Elle n’intervient pas dans les cellules nerveuses ou musculaires.",
      "Elle transporte deux Na+ vers l’extérieur et trois K+ vers l’intérieur.",
      "Elle expulse trois Na+ et fait entrer deux K+."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La Na+/K+-ATPase restaure les gradients ioniques au prix d’ATP.",
    "choiceExplanations": [
      "Vrai. Elle transporte les ions contre leurs gradients.",
      "Faux. Elle participe à leur potentiel de repos.",
      "Faux. Le rapport est 3 Na+ sortis pour 2 K+ entrés.",
      "Vrai. Elle expulse trois Na+ et fait entrer deux K+."
    ]
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une tumeur surexprime la P-glycoprotéine et devient résistante à plusieurs cytotoxiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "abc-pgp"
    },
    "choices": [
      "Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "Les transporteurs ABC sont des canaux passifs sans ATP.",
      "Sa surexpression peut provoquer une résistance aux anticancéreux.",
      "MDR signifie uniquement maladie métabolique rénale."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les transporteurs ABC participent à l’efflux des xénobiotiques et à la pharmacorésistance.",
    "choiceExplanations": [
      "Vrai. Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "Faux. Ils sont des transporteurs actifs.",
      "Vrai. Sa surexpression peut provoquer une résistance aux anticancéreux.",
      "Faux. Il désigne la résistance multiple aux médicaments."
    ]
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un enfant présente une mucoviscidose liée à la mutation ΔF508. Quelles propositions sur CFTR sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cftr-channel"
    },
    "choices": [
      "La mutation ΔF508 provoque la drépanocytose.",
      "CFTR transporte exclusivement le glucose.",
      "La mutation ΔF508 est citée.",
      "CFTR transporte des ions chlorure."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "CFTR est un transporteur chlorure dont les mutations provoquent la mucoviscidose.",
    "choiceExplanations": [
      "Faux. Elle est associée à la mucoviscidose.",
      "Faux. Il transporte des ions chlorure.",
      "Vrai. La mutation ΔF508 est citée.",
      "Vrai. CFTR transporte des ions chlorure."
    ]
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les récepteurs ionotropiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ionotropic-channel"
    },
    "choices": [
      "La même molécule assure les fonctions réceptrice et effectrice.",
      "La fixation du ligand ouvre un canal ionique.",
      "Ils ne possèdent aucun domaine transmembranaire.",
      "Ils sont des récepteurs nucléaires."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les récepteurs ionotropiques couplent directement liaison du ligand et ouverture du canal.",
    "choiceExplanations": [
      "Vrai. La même molécule assure les fonctions réceptrice et effectrice.",
      "Vrai. La fixation du ligand ouvre un canal ionique.",
      "Faux. Ils forment un pore membranaire.",
      "Faux. Ils sont membranaires."
    ]
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les récepteurs 5-HT3 et GABAA. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "serotonin-gaba-channels"
    },
    "choices": [
      "Le GABAA est un récepteur stimulant une entrée massive de Na+.",
      "Le GABAA provoque une hyperpolarisation et un effet inhibiteur.",
      "Il permet une entrée de Na+ et une dépolarisation.",
      "La fixation du ligand ferme toujours le canal."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les deux canaux illustrent des effets électriques opposés selon l’ion transporté.",
    "choiceExplanations": [
      "Faux. Il ouvre un canal chlorure.",
      "Vrai. Le GABAA provoque une hyperpolarisation et un effet inhibiteur.",
      "Vrai. Il permet une entrée de Na+ et une dépolarisation.",
      "Faux. Elle provoque son ouverture."
    ]
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la pompe Na+/K+-ATPase. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sodium-potassium-pump"
    },
    "choices": [
      "Elle transporte deux Na+ vers l’extérieur et trois K+ vers l’intérieur.",
      "Elle suit passivement le gradient comme un canal.",
      "Elle utilise l’énergie de l’ATP.",
      "Elle contribue au potentiel de repos."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La Na+/K+-ATPase restaure les gradients ioniques au prix d’ATP.",
    "choiceExplanations": [
      "Faux. Le rapport est 3 Na+ sortis pour 2 K+ entrés.",
      "Faux. Elle effectue un transport actif.",
      "Vrai. Elle utilise l’énergie de l’ATP.",
      "Vrai. Elle contribue au potentiel de repos."
    ]
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une tumeur surexprime la P-glycoprotéine et devient résistante à plusieurs cytotoxiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "abc-pgp"
    },
    "choices": [
      "Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "ABC signifie ATP Binding Cassette.",
      "Les transporteurs ABC sont absents des tissus humains.",
      "La P-glycoprotéine augmente toujours l’accumulation intracellulaire des cytotoxiques."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les transporteurs ABC participent à l’efflux des xénobiotiques et à la pharmacorésistance.",
    "choiceExplanations": [
      "Vrai. Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "Vrai. ABC signifie ATP Binding Cassette.",
      "Faux. Ils sont présents dans de nombreux tissus.",
      "Faux. Elle peut les expulser."
    ]
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un enfant présente une mucoviscidose liée à la mutation ΔF508. Quelles propositions sur CFTR sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cftr-channel"
    },
    "choices": [
      "La mutation ΔF508 est citée.",
      "Les mutations de CFTR sont à l’origine de la mucoviscidose.",
      "La mucoviscidose n’a aucun lien génétique.",
      "CFTR est un récepteur nucléaire aux stéroïdes."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "CFTR est un transporteur chlorure dont les mutations provoquent la mucoviscidose.",
    "choiceExplanations": [
      "Vrai. La mutation ΔF508 est citée.",
      "Vrai. Les mutations de CFTR sont à l’origine de la mucoviscidose.",
      "Faux. Elle résulte de mutations de CFTR.",
      "Faux. C’est un canal/transporteur membranaire de Cl−."
    ]
  }
];
