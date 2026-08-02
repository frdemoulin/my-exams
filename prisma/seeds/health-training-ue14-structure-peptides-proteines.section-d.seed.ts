import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "91": [
    "la structure quaternaire"
  ],
  "92": [
    "les homo- et hétéropolymères"
  ],
  "93": [
    "les créatine kinases CK-MM et CK-MB"
  ],
  "94": [
    "les protéines G hétérotrimériques"
  ],
  "95": [
    "les tétramères LDH et hémoglobine"
  ],
  "96": [
    "la structure quaternaire"
  ],
  "97": [
    "les homo- et hétéropolymères"
  ],
  "98": [
    "les créatine kinases CK-MM et CK-MB"
  ],
  "99": [
    "les protéines G hétérotrimériques"
  ],
  "100": [
    "les tétramères LDH et hémoglobine"
  ],
  "101": [
    "la structure quaternaire"
  ],
  "102": [
    "les homo- et hétéropolymères"
  ],
  "103": [
    "les créatine kinases CK-MM et CK-MB"
  ],
  "104": [
    "les protéines G hétérotrimériques"
  ],
  "105": [
    "les tétramères LDH et hémoglobine"
  ],
  "106": [
    "la structure quaternaire"
  ],
  "107": [
    "les homo- et hétéropolymères"
  ],
  "108": [
    "les créatine kinases CK-MM et CK-MB"
  ],
  "109": [
    "les protéines G hétérotrimériques"
  ],
  "110": [
    "les tétramères LDH et hémoglobine"
  ],
  "111": [
    "la structure quaternaire"
  ],
  "112": [
    "les homo- et hétéropolymères"
  ],
  "113": [
    "les créatine kinases CK-MM et CK-MB"
  ],
  "114": [
    "les protéines G hétérotrimériques"
  ],
  "115": [
    "les tétramères LDH et hémoglobine"
  ],
  "116": [
    "la structure quaternaire"
  ],
  "117": [
    "les homo- et hétéropolymères"
  ],
  "118": [
    "les créatine kinases CK-MM et CK-MB"
  ],
  "119": [
    "les protéines G hétérotrimériques"
  ],
  "120": [
    "les tétramères LDH et hémoglobine"
  ]
};

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "quaternaire-complexes-1",
    "title": "Assemblage des sous-unités",
    "description": "Identifier les notions essentielles.",
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
    "slug": "quaternaire-complexes-2",
    "title": "Dimères, trimères et tétramères",
    "description": "Appliquer et comparer les notions du cours.",
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
    "slug": "quaternaire-complexes-3",
    "title": "Identification des complexes protéiques",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 4,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères essentiels",
        "sharedStatement": "Les questions suivantes portent sur les principaux repères de la section.",
        "questionOrders": [
          111,
          112,
          113
        ]
      },
      {
        "type": "GROUP",
        "title": "Structure et fonction",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          114,
          115,
          116
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications",
        "sharedStatement": "Les questions suivantes mobilisent les notions dans des situations biologiques ou médicales.",
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
    "question": "À propos de la structure quaternaire :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-structure"
    },
    "choices": [
      "Toute protéine monomérique possède obligatoirement une structure quaternaire.",
      "Chaque chaîne possède sa propre structure tertiaire.",
      "Les sous-unités sont souvent unies par des interactions non covalentes.",
      "Elle associe plusieurs chaînes polypeptidiques."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La structure quaternaire décrit l’association fonctionnelle de plusieurs sous-unités.",
    "choiceExplanations": [
      "Faux. Elle nécessite plusieurs sous-unités.",
      "Vrai. Chaque chaîne possède sa propre structure tertiaire.",
      "Vrai. Les sous-unités sont souvent unies par des interactions non covalentes.",
      "Vrai. Elle associe plusieurs chaînes polypeptidiques."
    ]
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les homo- et hétéropolymères :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-assemblies"
    },
    "choices": [
      "Homo et hétéro décrivent uniquement la masse moléculaire.",
      "Le préfixe homo renseigne sur l’identité des sous-unités.",
      "Un hétéropolymère comporte des sous-unités différentes.",
      "Un homopolymère comporte obligatoirement des sous-unités différentes."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La composition en sous-unités permet de distinguer homo- et hétéro-assemblages.",
    "choiceExplanations": [
      "Faux. Ils décrivent l’identité des sous-unités.",
      "Vrai. Le préfixe homo renseigne sur l’identité des sous-unités.",
      "Vrai. Un hétéropolymère comporte des sous-unités différentes.",
      "Faux. Ses sous-unités sont identiques."
    ]
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les créatine kinases CK-MM et CK-MB :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ck-dimers"
    },
    "choices": [
      "CK-MM comporte une sous-unité M et une B.",
      "CK-MB associe une sous-unité M et une sous-unité B.",
      "CK-MM est un homodimère.",
      "CK-MM possède deux sous-unités M."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les isoformes CK illustrent la distinction entre homo- et hétérodimères.",
    "choiceExplanations": [
      "Faux. Cette composition correspond à CK-MB.",
      "Vrai. CK-MB associe une sous-unité M et une sous-unité B.",
      "Vrai. CK-MM est un homodimère.",
      "Vrai. CK-MM possède deux sous-unités M."
    ]
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les protéines G hétérotrimériques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-g-trimer"
    },
    "choices": [
      "Une protéine G hétérotrimérique possède trois sous-unités.",
      "Une protéine G hétérotrimérique ne possède que deux sous-unités.",
      "Les trois sous-unités sont différentes.",
      "Elle ne possède aucune structure quaternaire."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les protéines G illustrent un hétérotrimère αβγ.",
    "choiceExplanations": [
      "Vrai. Une protéine G hétérotrimérique possède trois sous-unités.",
      "Faux. Elle en possède trois.",
      "Vrai. Les trois sous-unités sont différentes.",
      "Faux. L’association des trois sous-unités constitue cette structure."
    ]
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les tétramères LDH et hémoglobine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tetramer-examples"
    },
    "choices": [
      "L’hémoglobine possède une structure α2β2.",
      "LD M4 est une isoforme hépatique et musculaire.",
      "LD H4 est l’isoforme hépatique et musculaire dans la fiche.",
      "LD H4 est une isoforme cardiaque."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "LDH et hémoglobine illustrent plusieurs compositions tétramériques.",
    "choiceExplanations": [
      "Vrai. L’hémoglobine possède une structure α2β2.",
      "Vrai. LD M4 est une isoforme hépatique et musculaire.",
      "Faux. La fiche l’associe au cœur.",
      "Vrai. LD H4 est une isoforme cardiaque."
    ]
  },
  {
    "order": 96,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la structure quaternaire :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-structure"
    },
    "choices": [
      "Chaque chaîne possède sa propre structure tertiaire.",
      "Elle détruit nécessairement toute fonction.",
      "Les sous-unités sont souvent unies par des interactions non covalentes.",
      "Les sous-unités ne peuvent jamais interagir."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La structure quaternaire décrit l’association fonctionnelle de plusieurs sous-unités.",
    "choiceExplanations": [
      "Vrai. Chaque chaîne possède sa propre structure tertiaire.",
      "Faux. Elle peut être indispensable à la fonction.",
      "Vrai. Les sous-unités sont souvent unies par des interactions non covalentes.",
      "Faux. Leur association forme le complexe."
    ]
  },
  {
    "order": 97,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les homo- et hétéropolymères :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-assemblies"
    },
    "choices": [
      "Le préfixe homo renseigne sur l’identité des sous-unités.",
      "Un hétéropolymère ne comporte qu’une seule chaîne.",
      "Un hétéropolymère comporte des sous-unités différentes.",
      "Le préfixe hétéro renseigne sur leur diversité."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La composition en sous-unités permet de distinguer homo- et hétéro-assemblages.",
    "choiceExplanations": [
      "Vrai. Le préfixe homo renseigne sur l’identité des sous-unités.",
      "Faux. Il comporte plusieurs sous-unités différentes.",
      "Vrai. Un hétéropolymère comporte des sous-unités différentes.",
      "Vrai. Le préfixe hétéro renseigne sur leur diversité."
    ]
  },
  {
    "order": 98,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les créatine kinases CK-MM et CK-MB :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ck-dimers"
    },
    "choices": [
      "CK-MB associe deux sous-unités B uniquement.",
      "CK-MM ne possède qu’une seule chaîne.",
      "CK-MB est un hétérodimère.",
      "CK-MM est un homodimère."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les isoformes CK illustrent la distinction entre homo- et hétérodimères.",
    "choiceExplanations": [
      "Faux. Elle associe M et B.",
      "Faux. Elle possède deux sous-unités M.",
      "Vrai. CK-MB est un hétérodimère.",
      "Vrai. CK-MM est un homodimère."
    ]
  },
  {
    "order": 99,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les protéines G hétérotrimériques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-g-trimer"
    },
    "choices": [
      "Les trois sous-unités sont différentes.",
      "Les sous-unités sont α, β et γ.",
      "Une protéine G hétérotrimérique ne possède que deux sous-unités.",
      "Une protéine G hétérotrimérique possède trois sous-unités."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les protéines G illustrent un hétérotrimère αβγ.",
    "choiceExplanations": [
      "Vrai. Les trois sous-unités sont différentes.",
      "Vrai. Les sous-unités sont α, β et γ.",
      "Faux. Elle en possède trois.",
      "Vrai. Une protéine G hétérotrimérique possède trois sous-unités."
    ]
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les tétramères LDH et hémoglobine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tetramer-examples"
    },
    "choices": [
      "LD M4 est une isoforme hépatique et musculaire.",
      "L’hémoglobine est un homodimère α2.",
      "La LDH est un monomère unique.",
      "LD H4 est une isoforme cardiaque."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "LDH et hémoglobine illustrent plusieurs compositions tétramériques.",
    "choiceExplanations": [
      "Vrai. LD M4 est une isoforme hépatique et musculaire.",
      "Faux. Elle est un hétérotétramère α2β2.",
      "Faux. Elle est formée de quatre sous-unités.",
      "Vrai. LD H4 est une isoforme cardiaque."
    ]
  },
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure quaternaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-structure"
    },
    "choices": [
      "Toute protéine monomérique possède obligatoirement une structure quaternaire.",
      "Les sous-unités ne peuvent jamais interagir.",
      "Elle associe plusieurs chaînes polypeptidiques.",
      "L’assemblage forme un complexe fonctionnel."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La structure quaternaire décrit l’association fonctionnelle de plusieurs sous-unités.",
    "choiceExplanations": [
      "Faux. Elle nécessite plusieurs sous-unités.",
      "Faux. Leur association forme le complexe.",
      "Vrai. Elle associe plusieurs chaînes polypeptidiques.",
      "Vrai. L’assemblage forme un complexe fonctionnel."
    ]
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les homo- et hétéropolymères, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-assemblies"
    },
    "choices": [
      "Un hétéropolymère ne comporte qu’une seule chaîne.",
      "Le préfixe homo renseigne sur l’identité des sous-unités.",
      "Un homopolymère comporte des sous-unités identiques.",
      "Un homopolymère comporte obligatoirement des sous-unités différentes."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La composition en sous-unités permet de distinguer homo- et hétéro-assemblages.",
    "choiceExplanations": [
      "Faux. Il comporte plusieurs sous-unités différentes.",
      "Vrai. Le préfixe homo renseigne sur l’identité des sous-unités.",
      "Vrai. Un homopolymère comporte des sous-unités identiques.",
      "Faux. Ses sous-unités sont identiques."
    ]
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les créatine kinases CK-MM et CK-MB, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ck-dimers"
    },
    "choices": [
      "CK-MB associe une sous-unité M et une sous-unité B.",
      "CK-MB associe deux sous-unités B uniquement.",
      "CK-MM est un homodimère.",
      "CK-MB est un homotétramère."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les isoformes CK illustrent la distinction entre homo- et hétérodimères.",
    "choiceExplanations": [
      "Vrai. CK-MB associe une sous-unité M et une sous-unité B.",
      "Faux. Elle associe M et B.",
      "Vrai. CK-MM est un homodimère.",
      "Faux. C’est un hétérodimère."
    ]
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les protéines G hétérotrimériques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-g-trimer"
    },
    "choices": [
      "Une protéine G hétérotrimérique ne possède que deux sous-unités.",
      "Elle constitue un exemple de structure quaternaire.",
      "Les sous-unités sont α, β et γ.",
      "Les trois sous-unités sont toutes α."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les protéines G illustrent un hétérotrimère αβγ.",
    "choiceExplanations": [
      "Faux. Elle en possède trois.",
      "Vrai. Elle constitue un exemple de structure quaternaire.",
      "Vrai. Les sous-unités sont α, β et γ.",
      "Faux. Elles sont α, β et γ."
    ]
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les tétramères LDH et hémoglobine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tetramer-examples"
    },
    "choices": [
      "LD H4 est une isoforme cardiaque.",
      "LD M4 comporte uniquement des sous-unités H.",
      "LD H4 est l’isoforme hépatique et musculaire dans la fiche.",
      "La lactate déshydrogénase est tétramérique."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "LDH et hémoglobine illustrent plusieurs compositions tétramériques.",
    "choiceExplanations": [
      "Vrai. LD H4 est une isoforme cardiaque.",
      "Faux. Elle comporte quatre sous-unités M.",
      "Faux. La fiche l’associe au cœur.",
      "Vrai. La lactate déshydrogénase est tétramérique."
    ]
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure quaternaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-structure"
    },
    "choices": [
      "Elle associe plusieurs chaînes polypeptidiques.",
      "L’assemblage forme un complexe fonctionnel.",
      "Toute protéine monomérique possède obligatoirement une structure quaternaire.",
      "Elle détruit nécessairement toute fonction."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La structure quaternaire décrit l’association fonctionnelle de plusieurs sous-unités.",
    "choiceExplanations": [
      "Vrai. Elle associe plusieurs chaînes polypeptidiques.",
      "Vrai. L’assemblage forme un complexe fonctionnel.",
      "Faux. Elle nécessite plusieurs sous-unités.",
      "Faux. Elle peut être indispensable à la fonction."
    ]
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les homo- et hétéropolymères, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-assemblies"
    },
    "choices": [
      "Un homopolymère comporte obligatoirement des sous-unités différentes.",
      "Homo et hétéro décrivent uniquement la masse moléculaire.",
      "Un homopolymère comporte des sous-unités identiques.",
      "Le préfixe homo renseigne sur l’identité des sous-unités."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La composition en sous-unités permet de distinguer homo- et hétéro-assemblages.",
    "choiceExplanations": [
      "Faux. Ses sous-unités sont identiques.",
      "Faux. Ils décrivent l’identité des sous-unités.",
      "Vrai. Un homopolymère comporte des sous-unités identiques.",
      "Vrai. Le préfixe homo renseigne sur l’identité des sous-unités."
    ]
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les créatine kinases CK-MM et CK-MB, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ck-dimers"
    },
    "choices": [
      "CK-MB associe une sous-unité M et une sous-unité B.",
      "CK-MM comporte une sous-unité M et une B.",
      "CK-MB associe deux sous-unités B uniquement.",
      "CK-MM est un homodimère."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les isoformes CK illustrent la distinction entre homo- et hétérodimères.",
    "choiceExplanations": [
      "Vrai. CK-MB associe une sous-unité M et une sous-unité B.",
      "Faux. Cette composition correspond à CK-MB.",
      "Faux. Elle associe M et B.",
      "Vrai. CK-MM est un homodimère."
    ]
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les protéines G hétérotrimériques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-g-trimer"
    },
    "choices": [
      "Une protéine G hétérotrimérique ne possède que deux sous-unités.",
      "Les sous-unités sont α, β et γ.",
      "Les trois sous-unités sont toutes α.",
      "Elle constitue un exemple de structure quaternaire."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les protéines G illustrent un hétérotrimère αβγ.",
    "choiceExplanations": [
      "Faux. Elle en possède trois.",
      "Vrai. Les sous-unités sont α, β et γ.",
      "Faux. Elles sont α, β et γ.",
      "Vrai. Elle constitue un exemple de structure quaternaire."
    ]
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les tétramères LDH et hémoglobine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tetramer-examples"
    },
    "choices": [
      "LD H4 est l’isoforme hépatique et musculaire dans la fiche.",
      "La LDH est un monomère unique.",
      "LD M4 est une isoforme hépatique et musculaire.",
      "L’hémoglobine possède une structure α2β2."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "LDH et hémoglobine illustrent plusieurs compositions tétramériques.",
    "choiceExplanations": [
      "Faux. La fiche l’associe au cœur.",
      "Faux. Elle est formée de quatre sous-unités.",
      "Vrai. LD M4 est une isoforme hépatique et musculaire.",
      "Vrai. L’hémoglobine possède une structure α2β2."
    ]
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la structure quaternaire. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-structure"
    },
    "choices": [
      "Toute protéine monomérique possède obligatoirement une structure quaternaire.",
      "L’assemblage forme un complexe fonctionnel.",
      "Elle détruit nécessairement toute fonction.",
      "Chaque chaîne possède sa propre structure tertiaire."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La structure quaternaire décrit l’association fonctionnelle de plusieurs sous-unités.",
    "choiceExplanations": [
      "Faux. Elle nécessite plusieurs sous-unités.",
      "Vrai. L’assemblage forme un complexe fonctionnel.",
      "Faux. Elle peut être indispensable à la fonction.",
      "Vrai. Chaque chaîne possède sa propre structure tertiaire."
    ]
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les homo- et hétéropolymères. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-assemblies"
    },
    "choices": [
      "Le préfixe hétéro renseigne sur leur diversité.",
      "Homo et hétéro décrivent uniquement la masse moléculaire.",
      "Deux sous-unités identiques forment toujours un hétérodimère.",
      "Un hétéropolymère comporte des sous-unités différentes."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La composition en sous-unités permet de distinguer homo- et hétéro-assemblages.",
    "choiceExplanations": [
      "Vrai. Le préfixe hétéro renseigne sur leur diversité.",
      "Faux. Ils décrivent l’identité des sous-unités.",
      "Faux. Elles forment un homodimère.",
      "Vrai. Un hétéropolymère comporte des sous-unités différentes."
    ]
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les créatine kinases CK-MM et CK-MB. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ck-dimers"
    },
    "choices": [
      "CK-MM comporte une sous-unité M et une B.",
      "CK-MM ne possède qu’une seule chaîne.",
      "CK-MB est un hétérodimère.",
      "CK-MB associe une sous-unité M et une sous-unité B."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les isoformes CK illustrent la distinction entre homo- et hétérodimères.",
    "choiceExplanations": [
      "Faux. Cette composition correspond à CK-MB.",
      "Faux. Elle possède deux sous-unités M.",
      "Vrai. CK-MB est un hétérodimère.",
      "Vrai. CK-MB associe une sous-unité M et une sous-unité B."
    ]
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les protéines G hétérotrimériques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-g-trimer"
    },
    "choices": [
      "Elle est un homopolymère.",
      "Une protéine G hétérotrimérique ne possède que deux sous-unités.",
      "Elle constitue un exemple de structure quaternaire.",
      "Les sous-unités sont α, β et γ."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les protéines G illustrent un hétérotrimère αβγ.",
    "choiceExplanations": [
      "Faux. Elle est un hétéropolymère.",
      "Faux. Elle en possède trois.",
      "Vrai. Elle constitue un exemple de structure quaternaire.",
      "Vrai. Les sous-unités sont α, β et γ."
    ]
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les tétramères LDH et hémoglobine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tetramer-examples"
    },
    "choices": [
      "LD H4 est l’isoforme hépatique et musculaire dans la fiche.",
      "L’hémoglobine possède une structure α2β2.",
      "La LDH est un monomère unique.",
      "LD H4 est une isoforme cardiaque."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "LDH et hémoglobine illustrent plusieurs compositions tétramériques.",
    "choiceExplanations": [
      "Faux. La fiche l’associe au cœur.",
      "Vrai. L’hémoglobine possède une structure α2β2.",
      "Faux. Elle est formée de quatre sous-unités.",
      "Vrai. LD H4 est une isoforme cardiaque."
    ]
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la structure quaternaire. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-structure"
    },
    "choices": [
      "Chaque chaîne possède sa propre structure tertiaire.",
      "Elle associe plusieurs chaînes polypeptidiques.",
      "La structure quaternaire est la simple séquence d’une chaîne.",
      "Elle détruit nécessairement toute fonction."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La structure quaternaire décrit l’association fonctionnelle de plusieurs sous-unités.",
    "choiceExplanations": [
      "Vrai. Chaque chaîne possède sa propre structure tertiaire.",
      "Vrai. Elle associe plusieurs chaînes polypeptidiques.",
      "Faux. Cela correspond à la structure primaire.",
      "Faux. Elle peut être indispensable à la fonction."
    ]
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les homo- et hétéropolymères. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-assemblies"
    },
    "choices": [
      "Un hétéropolymère comporte des sous-unités différentes.",
      "Homo et hétéro décrivent uniquement la masse moléculaire.",
      "Un hétéropolymère ne comporte qu’une seule chaîne.",
      "Le préfixe homo renseigne sur l’identité des sous-unités."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La composition en sous-unités permet de distinguer homo- et hétéro-assemblages.",
    "choiceExplanations": [
      "Vrai. Un hétéropolymère comporte des sous-unités différentes.",
      "Faux. Ils décrivent l’identité des sous-unités.",
      "Faux. Il comporte plusieurs sous-unités différentes.",
      "Vrai. Le préfixe homo renseigne sur l’identité des sous-unités."
    ]
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les créatine kinases CK-MM et CK-MB. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ck-dimers"
    },
    "choices": [
      "CK-MM est un homodimère.",
      "CK-MB est un homotétramère.",
      "CK-MB associe deux sous-unités B uniquement.",
      "CK-MB est un hétérodimère."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les isoformes CK illustrent la distinction entre homo- et hétérodimères.",
    "choiceExplanations": [
      "Vrai. CK-MM est un homodimère.",
      "Faux. C’est un hétérodimère.",
      "Faux. Elle associe M et B.",
      "Vrai. CK-MB est un hétérodimère."
    ]
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les protéines G hétérotrimériques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-g-trimer"
    },
    "choices": [
      "Elle constitue un exemple de structure quaternaire.",
      "Les trois sous-unités sont toutes α.",
      "Les trois sous-unités sont différentes.",
      "Elle est un homopolymère."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les protéines G illustrent un hétérotrimère αβγ.",
    "choiceExplanations": [
      "Vrai. Elle constitue un exemple de structure quaternaire.",
      "Faux. Elles sont α, β et γ.",
      "Vrai. Les trois sous-unités sont différentes.",
      "Faux. Elle est un hétéropolymère."
    ]
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les tétramères LDH et hémoglobine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tetramer-examples"
    },
    "choices": [
      "LD H4 est une isoforme cardiaque.",
      "LD H4 est l’isoforme hépatique et musculaire dans la fiche.",
      "La lactate déshydrogénase est tétramérique.",
      "La LDH est un monomère unique."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "LDH et hémoglobine illustrent plusieurs compositions tétramériques.",
    "choiceExplanations": [
      "Vrai. LD H4 est une isoforme cardiaque.",
      "Faux. La fiche l’associe au cœur.",
      "Vrai. La lactate déshydrogénase est tétramérique.",
      "Faux. Elle est formée de quatre sous-unités."
    ]
  }
];
