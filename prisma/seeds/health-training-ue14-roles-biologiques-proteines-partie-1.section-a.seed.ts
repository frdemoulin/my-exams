import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "1": [
    "les antigènes et épitopes"
  ],
  "2": [
    "la structure H2L2 des immunoglobulines"
  ],
  "3": [
    "les classes d’immunoglobulines"
  ],
  "4": [
    "les formes monomériques et multimériques"
  ],
  "5": [
    "les domaines et fragments Fab/Fc"
  ],
  "6": [
    "les antigènes et épitopes"
  ],
  "7": [
    "la structure H2L2 des immunoglobulines"
  ],
  "8": [
    "les classes d’immunoglobulines"
  ],
  "9": [
    "les formes monomériques et multimériques"
  ],
  "10": [
    "les domaines et fragments Fab/Fc"
  ],
  "11": [
    "les antigènes et épitopes"
  ],
  "12": [
    "la structure H2L2 des immunoglobulines"
  ],
  "13": [
    "les classes d’immunoglobulines"
  ],
  "14": [
    "les formes monomériques et multimériques"
  ],
  "15": [
    "les domaines et fragments Fab/Fc"
  ],
  "16": [
    "les antigènes et épitopes"
  ],
  "17": [
    "la structure H2L2 des immunoglobulines"
  ],
  "18": [
    "les classes d’immunoglobulines"
  ],
  "19": [
    "les formes monomériques et multimériques"
  ],
  "20": [
    "les domaines et fragments Fab/Fc"
  ],
  "21": [
    "les antigènes et épitopes"
  ],
  "22": [
    "la structure H2L2 des immunoglobulines"
  ],
  "23": [
    "les classes d’immunoglobulines"
  ],
  "24": [
    "les formes monomériques et multimériques"
  ],
  "25": [
    "les domaines et fragments Fab/Fc"
  ],
  "26": [
    "les antigènes et épitopes"
  ],
  "27": [
    "la structure H2L2 des immunoglobulines"
  ],
  "28": [
    "les classes d’immunoglobulines"
  ],
  "29": [
    "les formes monomériques et multimériques"
  ],
  "30": [
    "les domaines et fragments Fab/Fc"
  ]
};

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "immunoglobulines-1",
    "title": "Antigènes et structure des anticorps",
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
    "slug": "immunoglobulines-2",
    "title": "Classes et associations des immunoglobulines",
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
    "slug": "immunoglobulines-3",
    "title": "Fragments Fab/Fc et applications",
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
    "question": "À propos de les antigènes et épitopes :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-epitope"
    },
    "choices": [
      "Un antigène ne comporte jamais plusieurs épitopes.",
      "Les immunoglobulines reconnaissent des antigènes variés.",
      "Un épitope peut être une séquence ou une conformation.",
      "Un épitope est la partie reconnue par l’anticorps."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La reconnaissance immunitaire repose sur la liaison d’un anticorps à un épitope.",
    "choiceExplanations": [
      "Faux. Il peut en comporter plusieurs.",
      "Vrai. Les immunoglobulines reconnaissent des antigènes variés.",
      "Vrai. Un épitope peut être une séquence ou une conformation.",
      "Vrai. Un épitope est la partie reconnue par l’anticorps."
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la structure H2L2 des immunoglobulines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-h2l2"
    },
    "choices": [
      "Elle comporte deux chaînes légères identiques.",
      "La structure générale est H2L2.",
      "Les chaînes lourdes ont une masse inférieure à celle des chaînes légères dans la fiche.",
      "Une immunoglobuline ne comporte qu’une chaîne unique."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les anticorps possèdent une architecture symétrique de deux chaînes lourdes et deux légères.",
    "choiceExplanations": [
      "Vrai. Elle comporte deux chaînes légères identiques.",
      "Vrai. La structure générale est H2L2.",
      "Faux. Les chaînes lourdes sont plus massives.",
      "Faux. Elle comporte quatre chaînes."
    ]
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les classes d’immunoglobulines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-classes"
    },
    "choices": [
      "Les chaînes légères humaines sont κ ou λ.",
      "Les chaînes lourdes correspondantes sont α, δ, ε, γ et μ.",
      "IgG possède obligatoirement une chaîne lourde μ.",
      "La classe dépend de la chaîne lourde."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les classes d’anticorps sont définies par la nature de leur chaîne lourde.",
    "choiceExplanations": [
      "Vrai. Les chaînes légères humaines sont κ ou λ.",
      "Vrai. Les chaînes lourdes correspondantes sont α, δ, ε, γ et μ.",
      "Faux. IgG possède une chaîne γ.",
      "Vrai. La classe dépend de la chaîne lourde."
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les formes monomériques et multimériques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-multimers"
    },
    "choices": [
      "IgA peut être dimérique.",
      "IgM peut être pentamérique.",
      "IgA ne peut jamais former de dimère.",
      "IgM est toujours monomérique dans la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les classes diffèrent aussi par leur état d’association.",
    "choiceExplanations": [
      "Vrai. IgA peut être dimérique.",
      "Vrai. IgM peut être pentamérique.",
      "Faux. Elle peut être dimérique.",
      "Faux. Elle est présentée comme pentamérique."
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les domaines et fragments Fab/Fc :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-fab-fc"
    },
    "choices": [
      "Les fragments Fab conservent la liaison à l’antigène.",
      "Les régions V sont variables et les régions C constantes.",
      "La papaïne donne deux fragments Fab et un fragment Fc.",
      "Le fragment Fc contient le site principal de liaison à l’antigène."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le clivage par la papaïne sépare les fonctions de reconnaissance Fab des fonctions effectrices Fc.",
    "choiceExplanations": [
      "Vrai. Les fragments Fab conservent la liaison à l’antigène.",
      "Vrai. Les régions V sont variables et les régions C constantes.",
      "Vrai. La papaïne donne deux fragments Fab et un fragment Fc.",
      "Faux. Ce rôle appartient aux Fab."
    ]
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les antigènes et épitopes :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-epitope"
    },
    "choices": [
      "Un antigène ne comporte jamais plusieurs épitopes.",
      "Un antigène ne peut être qu’une protéine.",
      "Les immunoglobulines reconnaissent des antigènes variés.",
      "Un épitope peut être une séquence ou une conformation."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La reconnaissance immunitaire repose sur la liaison d’un anticorps à un épitope.",
    "choiceExplanations": [
      "Faux. Il peut en comporter plusieurs.",
      "Faux. Il peut aussi être un acide nucléique ou un glycane.",
      "Vrai. Les immunoglobulines reconnaissent des antigènes variés.",
      "Vrai. Un épitope peut être une séquence ou une conformation."
    ]
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la structure H2L2 des immunoglobulines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-h2l2"
    },
    "choices": [
      "Une immunoglobuline ne comporte qu’une chaîne unique.",
      "La structure générale est H2L2.",
      "Une immunoglobuline comporte deux chaînes lourdes identiques.",
      "Les chaînes sont unies par des ponts disulfure."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les anticorps possèdent une architecture symétrique de deux chaînes lourdes et deux légères.",
    "choiceExplanations": [
      "Faux. Elle comporte quatre chaînes.",
      "Vrai. La structure générale est H2L2.",
      "Vrai. Une immunoglobuline comporte deux chaînes lourdes identiques.",
      "Vrai. Les chaînes sont unies par des ponts disulfure."
    ]
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les classes d’immunoglobulines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-classes"
    },
    "choices": [
      "La classe dépend exclusivement de la chaîne légère.",
      "Il n’existe que deux classes d’immunoglobulines.",
      "La classe dépend de la chaîne lourde.",
      "Les chaînes légères humaines sont κ ou λ."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les classes d’anticorps sont définies par la nature de leur chaîne lourde.",
    "choiceExplanations": [
      "Faux. Elle dépend de la chaîne lourde.",
      "Faux. La fiche en cite cinq.",
      "Vrai. La classe dépend de la chaîne lourde.",
      "Vrai. Les chaînes légères humaines sont κ ou λ."
    ]
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les formes monomériques et multimériques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-multimers"
    },
    "choices": [
      "IgA peut être dimérique.",
      "IgA ne peut jamais former de dimère.",
      "Le peptide J participe à l’association de IgA et IgM.",
      "IgM peut être pentamérique."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les classes diffèrent aussi par leur état d’association.",
    "choiceExplanations": [
      "Vrai. IgA peut être dimérique.",
      "Faux. Elle peut être dimérique.",
      "Vrai. Le peptide J participe à l’association de IgA et IgM.",
      "Vrai. IgM peut être pentamérique."
    ]
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les domaines et fragments Fab/Fc :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-fab-fc"
    },
    "choices": [
      "La papaïne donne deux fragments Fab et un fragment Fc.",
      "Le Fc est constitué des parties N-terminales des chaînes légères.",
      "Les lettres V et C signifient volume et concentration.",
      "Les régions V sont variables et les régions C constantes."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le clivage par la papaïne sépare les fonctions de reconnaissance Fab des fonctions effectrices Fc.",
    "choiceExplanations": [
      "Vrai. La papaïne donne deux fragments Fab et un fragment Fc.",
      "Faux. Il est formé par les parties C-terminales des chaînes lourdes.",
      "Faux. Elles signifient variable et constante.",
      "Vrai. Les régions V sont variables et les régions C constantes."
    ]
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les antigènes et épitopes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-epitope"
    },
    "choices": [
      "Un épitope est la partie reconnue par l’anticorps.",
      "Un même antigène peut comporter plusieurs épitopes.",
      "Un anticorps reconnaît nécessairement l’intégralité d’un antigène.",
      "Un épitope est toujours une cellule entière."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La reconnaissance immunitaire repose sur la liaison d’un anticorps à un épitope.",
    "choiceExplanations": [
      "Vrai. Un épitope est la partie reconnue par l’anticorps.",
      "Vrai. Un même antigène peut comporter plusieurs épitopes.",
      "Faux. Il reconnaît un épitope.",
      "Faux. C’est un motif moléculaire."
    ]
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure H2L2 des immunoglobulines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-h2l2"
    },
    "choices": [
      "Les chaînes sont unies par des ponts disulfure.",
      "Les chaînes sont unies uniquement par des liaisons osidiques.",
      "La structure est H1L3.",
      "Elle comporte deux chaînes légères identiques."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les anticorps possèdent une architecture symétrique de deux chaînes lourdes et deux légères.",
    "choiceExplanations": [
      "Vrai. Les chaînes sont unies par des ponts disulfure.",
      "Faux. Des ponts disulfure les relient.",
      "Faux. La structure générale est H2L2.",
      "Vrai. Elle comporte deux chaînes légères identiques."
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les classes d’immunoglobulines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-classes"
    },
    "choices": [
      "La classe dépend de la chaîne lourde.",
      "La classe dépend exclusivement de la chaîne légère.",
      "Il n’existe que deux classes d’immunoglobulines.",
      "Les chaînes lourdes correspondantes sont α, δ, ε, γ et μ."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les classes d’anticorps sont définies par la nature de leur chaîne lourde.",
    "choiceExplanations": [
      "Vrai. La classe dépend de la chaîne lourde.",
      "Faux. Elle dépend de la chaîne lourde.",
      "Faux. La fiche en cite cinq.",
      "Vrai. Les chaînes lourdes correspondantes sont α, δ, ε, γ et μ."
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les formes monomériques et multimériques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-multimers"
    },
    "choices": [
      "IgM peut être pentamérique.",
      "IgA ne peut jamais former de dimère.",
      "Le peptide J coupe les immunoglobulines.",
      "IgA peut être dimérique."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les classes diffèrent aussi par leur état d’association.",
    "choiceExplanations": [
      "Vrai. IgM peut être pentamérique.",
      "Faux. Elle peut être dimérique.",
      "Faux. Il relie les sous-unités multimériques.",
      "Vrai. IgA peut être dimérique."
    ]
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les domaines et fragments Fab/Fc, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-fab-fc"
    },
    "choices": [
      "Le fragment Fc intervient dans le complément et la fixation cellulaire.",
      "Les fragments Fab conservent la liaison à l’antigène.",
      "Le Fc est constitué des parties N-terminales des chaînes légères.",
      "Le fragment Fc contient le site principal de liaison à l’antigène."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le clivage par la papaïne sépare les fonctions de reconnaissance Fab des fonctions effectrices Fc.",
    "choiceExplanations": [
      "Vrai. Le fragment Fc intervient dans le complément et la fixation cellulaire.",
      "Vrai. Les fragments Fab conservent la liaison à l’antigène.",
      "Faux. Il est formé par les parties C-terminales des chaînes lourdes.",
      "Faux. Ce rôle appartient aux Fab."
    ]
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les antigènes et épitopes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-epitope"
    },
    "choices": [
      "Un antigène ne peut être qu’une protéine.",
      "Un épitope est toujours une cellule entière.",
      "Un même antigène peut comporter plusieurs épitopes.",
      "Un épitope est la partie reconnue par l’anticorps."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La reconnaissance immunitaire repose sur la liaison d’un anticorps à un épitope.",
    "choiceExplanations": [
      "Faux. Il peut aussi être un acide nucléique ou un glycane.",
      "Faux. C’est un motif moléculaire.",
      "Vrai. Un même antigène peut comporter plusieurs épitopes.",
      "Vrai. Un épitope est la partie reconnue par l’anticorps."
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure H2L2 des immunoglobulines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-h2l2"
    },
    "choices": [
      "Les chaînes sont unies par des ponts disulfure.",
      "Les chaînes sont unies uniquement par des liaisons osidiques.",
      "Une immunoglobuline ne comporte qu’une chaîne unique.",
      "La structure générale est H2L2."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les anticorps possèdent une architecture symétrique de deux chaînes lourdes et deux légères.",
    "choiceExplanations": [
      "Vrai. Les chaînes sont unies par des ponts disulfure.",
      "Faux. Des ponts disulfure les relient.",
      "Faux. Elle comporte quatre chaînes.",
      "Vrai. La structure générale est H2L2."
    ]
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les classes d’immunoglobulines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-classes"
    },
    "choices": [
      "La classe dépend exclusivement de la chaîne légère.",
      "Les chaînes lourdes correspondantes sont α, δ, ε, γ et μ.",
      "Les chaînes légères sont uniquement α et β.",
      "La classe dépend de la chaîne lourde."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les classes d’anticorps sont définies par la nature de leur chaîne lourde.",
    "choiceExplanations": [
      "Faux. Elle dépend de la chaîne lourde.",
      "Vrai. Les chaînes lourdes correspondantes sont α, δ, ε, γ et μ.",
      "Faux. Elles sont κ ou λ.",
      "Vrai. La classe dépend de la chaîne lourde."
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les formes monomériques et multimériques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-multimers"
    },
    "choices": [
      "IgM est toujours monomérique dans la fiche.",
      "Le peptide J participe à l’association de IgA et IgM.",
      "IgA peut être dimérique.",
      "Le peptide J coupe les immunoglobulines."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les classes diffèrent aussi par leur état d’association.",
    "choiceExplanations": [
      "Faux. Elle est présentée comme pentamérique.",
      "Vrai. Le peptide J participe à l’association de IgA et IgM.",
      "Vrai. IgA peut être dimérique.",
      "Faux. Il relie les sous-unités multimériques."
    ]
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les domaines et fragments Fab/Fc, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-fab-fc"
    },
    "choices": [
      "Les fragments Fab conservent la liaison à l’antigène.",
      "La papaïne donne deux fragments Fab et un fragment Fc.",
      "Les lettres V et C signifient volume et concentration.",
      "Le Fc est constitué des parties N-terminales des chaînes légères."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le clivage par la papaïne sépare les fonctions de reconnaissance Fab des fonctions effectrices Fc.",
    "choiceExplanations": [
      "Vrai. Les fragments Fab conservent la liaison à l’antigène.",
      "Vrai. La papaïne donne deux fragments Fab et un fragment Fc.",
      "Faux. Elles signifient variable et constante.",
      "Faux. Il est formé par les parties C-terminales des chaînes lourdes."
    ]
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les antigènes et épitopes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-epitope"
    },
    "choices": [
      "Un anticorps reconnaît nécessairement l’intégralité d’un antigène.",
      "Les immunoglobulines reconnaissent des antigènes variés.",
      "Un antigène ne comporte jamais plusieurs épitopes.",
      "Un épitope est la partie reconnue par l’anticorps."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La reconnaissance immunitaire repose sur la liaison d’un anticorps à un épitope.",
    "choiceExplanations": [
      "Faux. Il reconnaît un épitope.",
      "Vrai. Les immunoglobulines reconnaissent des antigènes variés.",
      "Faux. Il peut en comporter plusieurs.",
      "Vrai. Un épitope est la partie reconnue par l’anticorps."
    ]
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la structure H2L2 des immunoglobulines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-h2l2"
    },
    "choices": [
      "La structure est H1L3.",
      "Les chaînes lourdes ont une masse inférieure à celle des chaînes légères dans la fiche.",
      "Elle comporte deux chaînes légères identiques.",
      "Une immunoglobuline comporte deux chaînes lourdes identiques."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les anticorps possèdent une architecture symétrique de deux chaînes lourdes et deux légères.",
    "choiceExplanations": [
      "Faux. La structure générale est H2L2.",
      "Faux. Les chaînes lourdes sont plus massives.",
      "Vrai. Elle comporte deux chaînes légères identiques.",
      "Vrai. Une immunoglobuline comporte deux chaînes lourdes identiques."
    ]
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les classes d’immunoglobulines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-classes"
    },
    "choices": [
      "Il n’existe que deux classes d’immunoglobulines.",
      "Les chaînes lourdes correspondantes sont α, δ, ε, γ et μ.",
      "IgG possède obligatoirement une chaîne lourde μ.",
      "Les chaînes légères humaines sont κ ou λ."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les classes d’anticorps sont définies par la nature de leur chaîne lourde.",
    "choiceExplanations": [
      "Faux. La fiche en cite cinq.",
      "Vrai. Les chaînes lourdes correspondantes sont α, δ, ε, γ et μ.",
      "Faux. IgG possède une chaîne γ.",
      "Vrai. Les chaînes légères humaines sont κ ou λ."
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les formes monomériques et multimériques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-multimers"
    },
    "choices": [
      "IgM est toujours monomérique dans la fiche.",
      "Le peptide J coupe les immunoglobulines.",
      "IgD, IgE et IgG sont monomériques.",
      "IgM peut être pentamérique."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les classes diffèrent aussi par leur état d’association.",
    "choiceExplanations": [
      "Faux. Elle est présentée comme pentamérique.",
      "Faux. Il relie les sous-unités multimériques.",
      "Vrai. IgD, IgE et IgG sont monomériques.",
      "Vrai. IgM peut être pentamérique."
    ]
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un laboratoire utilise un fragment d’anticorps pour révéler une protéine en Western blot. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-fab-fc"
    },
    "choices": [
      "Les régions V sont variables et les régions C constantes.",
      "La papaïne produit uniquement quatre fragments Fc.",
      "Le fragment Fc intervient dans le complément et la fixation cellulaire.",
      "Les lettres V et C signifient volume et concentration."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le clivage par la papaïne sépare les fonctions de reconnaissance Fab des fonctions effectrices Fc.",
    "choiceExplanations": [
      "Vrai. Les régions V sont variables et les régions C constantes.",
      "Faux. Elle produit deux Fab et un Fc.",
      "Vrai. Le fragment Fc intervient dans le complément et la fixation cellulaire.",
      "Faux. Elles signifient variable et constante."
    ]
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les antigènes et épitopes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-epitope"
    },
    "choices": [
      "Un épitope est toujours une cellule entière.",
      "Un épitope peut être une séquence ou une conformation.",
      "Un même antigène peut comporter plusieurs épitopes.",
      "Un antigène ne peut être qu’une protéine."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La reconnaissance immunitaire repose sur la liaison d’un anticorps à un épitope.",
    "choiceExplanations": [
      "Faux. C’est un motif moléculaire.",
      "Vrai. Un épitope peut être une séquence ou une conformation.",
      "Vrai. Un même antigène peut comporter plusieurs épitopes.",
      "Faux. Il peut aussi être un acide nucléique ou un glycane."
    ]
  },
  {
    "order": 27,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la structure H2L2 des immunoglobulines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-h2l2"
    },
    "choices": [
      "La structure est H1L3.",
      "Une immunoglobuline comporte deux chaînes lourdes identiques.",
      "Les chaînes lourdes ont une masse inférieure à celle des chaînes légères dans la fiche.",
      "Elle comporte deux chaînes légères identiques."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les anticorps possèdent une architecture symétrique de deux chaînes lourdes et deux légères.",
    "choiceExplanations": [
      "Faux. La structure générale est H2L2.",
      "Vrai. Une immunoglobuline comporte deux chaînes lourdes identiques.",
      "Faux. Les chaînes lourdes sont plus massives.",
      "Vrai. Elle comporte deux chaînes légères identiques."
    ]
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les classes d’immunoglobulines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-classes"
    },
    "choices": [
      "Les cinq classes sont IgA, IgD, IgE, IgG et IgM.",
      "IgG possède obligatoirement une chaîne lourde μ.",
      "Les chaînes lourdes correspondantes sont α, δ, ε, γ et μ.",
      "Les chaînes légères sont uniquement α et β."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les classes d’anticorps sont définies par la nature de leur chaîne lourde.",
    "choiceExplanations": [
      "Vrai. Les cinq classes sont IgA, IgD, IgE, IgG et IgM.",
      "Faux. IgG possède une chaîne γ.",
      "Vrai. Les chaînes lourdes correspondantes sont α, δ, ε, γ et μ.",
      "Faux. Elles sont κ ou λ."
    ]
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les formes monomériques et multimériques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-multimers"
    },
    "choices": [
      "IgG est décrite comme un pentamère.",
      "IgD, IgE et IgG sont monomériques.",
      "Le peptide J participe à l’association de IgA et IgM.",
      "IgM est toujours monomérique dans la fiche."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les classes diffèrent aussi par leur état d’association.",
    "choiceExplanations": [
      "Faux. Elle est monomérique.",
      "Vrai. IgD, IgE et IgG sont monomériques.",
      "Vrai. Le peptide J participe à l’association de IgA et IgM.",
      "Faux. Elle est présentée comme pentamérique."
    ]
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un laboratoire utilise un fragment d’anticorps pour révéler une protéine en Western blot. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-fab-fc"
    },
    "choices": [
      "Les régions V sont variables et les régions C constantes.",
      "Le Fc est constitué des parties N-terminales des chaînes légères.",
      "La papaïne produit uniquement quatre fragments Fc.",
      "La papaïne donne deux fragments Fab et un fragment Fc."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le clivage par la papaïne sépare les fonctions de reconnaissance Fab des fonctions effectrices Fc.",
    "choiceExplanations": [
      "Vrai. Les régions V sont variables et les régions C constantes.",
      "Faux. Il est formé par les parties C-terminales des chaînes lourdes.",
      "Faux. Elle produit deux Fab et un Fc.",
      "Vrai. La papaïne donne deux fragments Fab et un fragment Fc."
    ]
  }
];
