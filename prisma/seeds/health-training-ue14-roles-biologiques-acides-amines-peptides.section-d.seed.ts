import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "91": [
    "les facteurs de croissance"
  ],
  "92": [
    "les cytokines et interleukines"
  ],
  "93": [
    "les interférons et chimiokines"
  ],
  "94": [
    "les endorphines et encéphalines"
  ],
  "95": [
    "les peptides beta-amyloïdes et APP"
  ],
  "96": [
    "les facteurs de croissance"
  ],
  "97": [
    "les cytokines et interleukines"
  ],
  "98": [
    "les interférons et chimiokines"
  ],
  "99": [
    "les endorphines et encéphalines"
  ],
  "100": [
    "les peptides beta-amyloïdes et APP"
  ],
  "101": [
    "les facteurs de croissance"
  ],
  "102": [
    "les cytokines et interleukines"
  ],
  "103": [
    "les interférons et chimiokines"
  ],
  "104": [
    "les endorphines et encéphalines"
  ],
  "105": [
    "les peptides beta-amyloïdes et APP"
  ],
  "106": [
    "les facteurs de croissance"
  ],
  "107": [
    "les cytokines et interleukines"
  ],
  "108": [
    "les interférons et chimiokines"
  ],
  "109": [
    "les endorphines et encéphalines"
  ],
  "110": [
    "les peptides beta-amyloïdes et APP"
  ],
  "111": [
    "les facteurs de croissance"
  ],
  "112": [
    "les cytokines et interleukines"
  ],
  "113": [
    "les interférons et chimiokines"
  ],
  "114": [
    "les endorphines et encéphalines"
  ],
  "115": [
    "les peptides beta-amyloïdes et APP"
  ],
  "116": [
    "les facteurs de croissance"
  ],
  "117": [
    "les cytokines et interleukines"
  ],
  "118": [
    "les interférons et chimiokines"
  ],
  "119": [
    "les endorphines et encéphalines"
  ],
  "120": [
    "les peptides beta-amyloïdes et APP"
  ]
};

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "cytokines-amyloide-1",
    "title": "Facteurs de croissance et cytokines",
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
    "slug": "cytokines-amyloide-2",
    "title": "Neuromédiateurs peptidiques",
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
    "slug": "cytokines-amyloide-3",
    "title": "Peptides amyloïdes et maladie d’Alzheimer",
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
    "question": "À propos de les facteurs de croissance :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "growth-factors"
    },
    "choices": [
      "Ils agissent sans aucun récepteur.",
      "Ils se fixent sur des récepteurs spécifiques.",
      "EGF, TGFβ, IGF et FGF sont cités.",
      "Ils contrôlent la prolifération et l’expression des gènes."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les facteurs de croissance contrôlent la prolifération par des voies de signalisation.",
    "choiceExplanations": [
      "Faux. Ils se fixent à des récepteurs spécifiques.",
      "Vrai. Ils se fixent sur des récepteurs spécifiques.",
      "Vrai. EGF, TGFβ, IGF et FGF sont cités.",
      "Vrai. Ils contrôlent la prolifération et l’expression des gènes."
    ]
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les cytokines et interleukines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytokines-interleukins"
    },
    "choices": [
      "Les cytokines sont de petites protéines ou peptides.",
      "Toutes les cytokines ont exactement la même action.",
      "IL10 est citée comme pro-inflammatoire.",
      "Les interleukines participent à la communication immunitaire."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les cytokines coordonnent la communication entre cellules immunitaires et tissus.",
    "choiceExplanations": [
      "Vrai. Les cytokines sont de petites protéines ou peptides.",
      "Faux. Leurs effets peuvent être opposés.",
      "Faux. Elle est citée comme anti-inflammatoire.",
      "Vrai. Les interleukines participent à la communication immunitaire."
    ]
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les interférons et chimiokines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "interferons-chemokines"
    },
    "choices": [
      "Les interférons de type I comprennent IFN-α et IFN-β.",
      "Les chimiokines sont chimiotactiques pour les cellules immunitaires.",
      "Ils sont induits notamment par virus et bactéries.",
      "L’IFN-γ appartient au type I dans la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Interférons et chimiokines coordonnent les réponses antivirales et le recrutement cellulaire.",
    "choiceExplanations": [
      "Vrai. Les interférons de type I comprennent IFN-α et IFN-β.",
      "Vrai. Les chimiokines sont chimiotactiques pour les cellules immunitaires.",
      "Vrai. Ils sont induits notamment par virus et bactéries.",
      "Faux. Il appartient au type II."
    ]
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les endorphines et encéphalines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "opioid-peptides"
    },
    "choices": [
      "Ils se lient aux récepteurs opioïdes.",
      "Ils sont des stéroïdes dérivés du cholestérol.",
      "Ils sont exclusivement exogènes.",
      "Ce sont de petits peptides neuromédiateurs."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les endorphines et encéphalines sont des peptides opioïdes endogènes.",
    "choiceExplanations": [
      "Vrai. Ils se lient aux récepteurs opioïdes.",
      "Faux. Ce sont des peptides.",
      "Faux. Ils sont produits par l’organisme.",
      "Vrai. Ce sont de petits peptides neuromédiateurs."
    ]
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les peptides beta-amyloïdes et APP :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amyloid-app"
    },
    "choices": [
      "Un clivage anormal peut libérer des peptides amyloïdes.",
      "APP est une protéine transmembranaire à une traversée.",
      "Les peptides Aβ sont parfaitement solubles et ne s’agrègent pas.",
      "Ces peptides insolubles s’agrègent en plaques séniles dans la maladie d’Alzheimer."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le clivage pathologique d’APP produit Aβ40/Aβ42 susceptibles de s’agréger.",
    "choiceExplanations": [
      "Vrai. Un clivage anormal peut libérer des peptides amyloïdes.",
      "Vrai. APP est une protéine transmembranaire à une traversée.",
      "Faux. Ils sont insolubles et forment des plaques.",
      "Vrai. Ces peptides insolubles s’agrègent en plaques séniles dans la maladie d’Alzheimer."
    ]
  },
  {
    "order": 96,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les facteurs de croissance :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "growth-factors"
    },
    "choices": [
      "Ils déclenchent une transduction intracellulaire.",
      "Ils agissent sans aucun récepteur.",
      "EGF, TGFβ, IGF et FGF sont cités.",
      "EGF est un acide gras."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les facteurs de croissance contrôlent la prolifération par des voies de signalisation.",
    "choiceExplanations": [
      "Vrai. Ils déclenchent une transduction intracellulaire.",
      "Faux. Ils se fixent à des récepteurs spécifiques.",
      "Vrai. EGF, TGFβ, IGF et FGF sont cités.",
      "Faux. C’est un facteur de croissance."
    ]
  },
  {
    "order": 97,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les cytokines et interleukines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytokines-interleukins"
    },
    "choices": [
      "Les cytokines sont de petites protéines ou peptides.",
      "Les cytokines n’agissent jamais sur les cellules voisines.",
      "IL1 et IL6 sont pro-inflammatoires alors que IL10 est anti-inflammatoire.",
      "Interleukines, TNFα, interférons et chimiokines sont cités."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les cytokines coordonnent la communication entre cellules immunitaires et tissus.",
    "choiceExplanations": [
      "Vrai. Les cytokines sont de petites protéines ou peptides.",
      "Faux. Elles régulent leurs fonctions.",
      "Vrai. IL1 et IL6 sont pro-inflammatoires alors que IL10 est anti-inflammatoire.",
      "Vrai. Interleukines, TNFα, interférons et chimiokines sont cités."
    ]
  },
  {
    "order": 98,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les interférons et chimiokines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "interferons-chemokines"
    },
    "choices": [
      "Ils sont induits notamment par virus et bactéries.",
      "Les interférons de type I sont produits uniquement par les érythrocytes.",
      "Les interférons de type I comprennent IFN-α et IFN-β.",
      "Les résidus de cystéine n’ont aucun intérêt dans les chimiokines."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Interférons et chimiokines coordonnent les réponses antivirales et le recrutement cellulaire.",
    "choiceExplanations": [
      "Vrai. Ils sont induits notamment par virus et bactéries.",
      "Faux. Presque toutes les cellules peuvent les produire.",
      "Vrai. Les interférons de type I comprennent IFN-α et IFN-β.",
      "Faux. Leurs positions conservées servent à la classification."
    ]
  },
  {
    "order": 99,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les endorphines et encéphalines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "opioid-peptides"
    },
    "choices": [
      "Ils sont des opioïdes endogènes.",
      "Ils se lient aux récepteurs opioïdes.",
      "Ils comportent environ 5 à 30 acides aminés.",
      "Ils sont exclusivement exogènes."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les endorphines et encéphalines sont des peptides opioïdes endogènes.",
    "choiceExplanations": [
      "Vrai. Ils sont des opioïdes endogènes.",
      "Vrai. Ils se lient aux récepteurs opioïdes.",
      "Vrai. Ils comportent environ 5 à 30 acides aminés.",
      "Faux. Ils sont produits par l’organisme."
    ]
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les peptides beta-amyloïdes et APP :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amyloid-app"
    },
    "choices": [
      "Aβ40 et Aβ42 sont cités.",
      "Ces peptides insolubles s’agrègent en plaques séniles dans la maladie d’Alzheimer.",
      "APP est une enzyme soluble sans domaine transmembranaire.",
      "Les peptides Aβ sont parfaitement solubles et ne s’agrègent pas."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le clivage pathologique d’APP produit Aβ40/Aβ42 susceptibles de s’agréger.",
    "choiceExplanations": [
      "Vrai. Aβ40 et Aβ42 sont cités.",
      "Vrai. Ces peptides insolubles s’agrègent en plaques séniles dans la maladie d’Alzheimer.",
      "Faux. C’est une protéine à une traversée membranaire.",
      "Faux. Ils sont insolubles et forment des plaques."
    ]
  },
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les facteurs de croissance, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "growth-factors"
    },
    "choices": [
      "Ils se fixent sur des récepteurs spécifiques.",
      "Ils agissent sans aucun récepteur.",
      "Ils déclenchent une transduction intracellulaire.",
      "Ils inhibent toujours toute prolifération."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les facteurs de croissance contrôlent la prolifération par des voies de signalisation.",
    "choiceExplanations": [
      "Vrai. Ils se fixent sur des récepteurs spécifiques.",
      "Faux. Ils se fixent à des récepteurs spécifiques.",
      "Vrai. Ils déclenchent une transduction intracellulaire.",
      "Faux. Ils la régulent, parfois en la stimulant."
    ]
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les cytokines et interleukines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytokines-interleukins"
    },
    "choices": [
      "Le TNFα est un glucide.",
      "Les cytokines sont de petites protéines ou peptides.",
      "Les interleukines participent à la communication immunitaire.",
      "IL10 est citée comme pro-inflammatoire."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les cytokines coordonnent la communication entre cellules immunitaires et tissus.",
    "choiceExplanations": [
      "Faux. C’est une cytokine.",
      "Vrai. Les cytokines sont de petites protéines ou peptides.",
      "Vrai. Les interleukines participent à la communication immunitaire.",
      "Faux. Elle est citée comme anti-inflammatoire."
    ]
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les interférons et chimiokines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "interferons-chemokines"
    },
    "choices": [
      "L’IFN-γ est un interféron de type II surtout produit par les lymphocytes.",
      "Ils sont induits notamment par virus et bactéries.",
      "Les chimiokines repoussent toujours les cellules immunitaires.",
      "Les résidus de cystéine n’ont aucun intérêt dans les chimiokines."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Interférons et chimiokines coordonnent les réponses antivirales et le recrutement cellulaire.",
    "choiceExplanations": [
      "Vrai. L’IFN-γ est un interféron de type II surtout produit par les lymphocytes.",
      "Vrai. Ils sont induits notamment par virus et bactéries.",
      "Faux. Elles sont chimiotactiques.",
      "Faux. Leurs positions conservées servent à la classification."
    ]
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les endorphines et encéphalines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "opioid-peptides"
    },
    "choices": [
      "Ils comportent environ 5 à 30 acides aminés.",
      "Ils sont des stéroïdes dérivés du cholestérol.",
      "Ils sont exclusivement exogènes.",
      "Ils sont des opioïdes endogènes."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les endorphines et encéphalines sont des peptides opioïdes endogènes.",
    "choiceExplanations": [
      "Vrai. Ils comportent environ 5 à 30 acides aminés.",
      "Faux. Ce sont des peptides.",
      "Faux. Ils sont produits par l’organisme.",
      "Vrai. Ils sont des opioïdes endogènes."
    ]
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les peptides beta-amyloïdes et APP, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amyloid-app"
    },
    "choices": [
      "La voie amyloïdogénique est décrite comme physiologique et protectrice.",
      "Le dosage dans le LCR n’a aucun intérêt diagnostique.",
      "Aβ40 et Aβ42 sont cités.",
      "Un clivage anormal peut libérer des peptides amyloïdes."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le clivage pathologique d’APP produit Aβ40/Aβ42 susceptibles de s’agréger.",
    "choiceExplanations": [
      "Faux. Elle est pathologique dans la fiche.",
      "Faux. Il est utilisé dans le diagnostic de la maladie d’Alzheimer.",
      "Vrai. Aβ40 et Aβ42 sont cités.",
      "Vrai. Un clivage anormal peut libérer des peptides amyloïdes."
    ]
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les facteurs de croissance, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "growth-factors"
    },
    "choices": [
      "Ils contrôlent la prolifération et l’expression des gènes.",
      "Ils déclenchent une transduction intracellulaire.",
      "Ils agissent sans aucun récepteur.",
      "Ils ne modifient jamais l’expression génique."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les facteurs de croissance contrôlent la prolifération par des voies de signalisation.",
    "choiceExplanations": [
      "Vrai. Ils contrôlent la prolifération et l’expression des gènes.",
      "Vrai. Ils déclenchent une transduction intracellulaire.",
      "Faux. Ils se fixent à des récepteurs spécifiques.",
      "Faux. La signalisation peut la modifier."
    ]
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les cytokines et interleukines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytokines-interleukins"
    },
    "choices": [
      "Les cytokines n’agissent jamais sur les cellules voisines.",
      "Le TNFα est un glucide.",
      "IL1 et IL6 sont pro-inflammatoires alors que IL10 est anti-inflammatoire.",
      "Les interleukines participent à la communication immunitaire."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les cytokines coordonnent la communication entre cellules immunitaires et tissus.",
    "choiceExplanations": [
      "Faux. Elles régulent leurs fonctions.",
      "Faux. C’est une cytokine.",
      "Vrai. IL1 et IL6 sont pro-inflammatoires alors que IL10 est anti-inflammatoire.",
      "Vrai. Les interleukines participent à la communication immunitaire."
    ]
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les interférons et chimiokines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "interferons-chemokines"
    },
    "choices": [
      "L’IFN-γ appartient au type I dans la fiche.",
      "Les interférons de type I sont produits uniquement par les érythrocytes.",
      "L’IFN-γ est un interféron de type II surtout produit par les lymphocytes.",
      "Ils sont induits notamment par virus et bactéries."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Interférons et chimiokines coordonnent les réponses antivirales et le recrutement cellulaire.",
    "choiceExplanations": [
      "Faux. Il appartient au type II.",
      "Faux. Presque toutes les cellules peuvent les produire.",
      "Vrai. L’IFN-γ est un interféron de type II surtout produit par les lymphocytes.",
      "Vrai. Ils sont induits notamment par virus et bactéries."
    ]
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les endorphines et encéphalines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "opioid-peptides"
    },
    "choices": [
      "Ils sont exclusivement exogènes.",
      "Ils se lient aux récepteurs opioïdes.",
      "Ils ne peuvent pas interagir avec des récepteurs.",
      "Ce sont de petits peptides neuromédiateurs."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les endorphines et encéphalines sont des peptides opioïdes endogènes.",
    "choiceExplanations": [
      "Faux. Ils sont produits par l’organisme.",
      "Vrai. Ils se lient aux récepteurs opioïdes.",
      "Faux. Ils se lient aux récepteurs opioïdes.",
      "Vrai. Ce sont de petits peptides neuromédiateurs."
    ]
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les peptides beta-amyloïdes et APP, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amyloid-app"
    },
    "choices": [
      "La voie amyloïdogénique est décrite comme physiologique et protectrice.",
      "Le dosage dans le LCR n’a aucun intérêt diagnostique.",
      "Un clivage anormal peut libérer des peptides amyloïdes.",
      "Aβ40 et Aβ42 sont cités."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le clivage pathologique d’APP produit Aβ40/Aβ42 susceptibles de s’agréger.",
    "choiceExplanations": [
      "Faux. Elle est pathologique dans la fiche.",
      "Faux. Il est utilisé dans le diagnostic de la maladie d’Alzheimer.",
      "Vrai. Un clivage anormal peut libérer des peptides amyloïdes.",
      "Vrai. Aβ40 et Aβ42 sont cités."
    ]
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les facteurs de croissance. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "growth-factors"
    },
    "choices": [
      "EGF, TGFβ, IGF et FGF sont cités.",
      "Ils se fixent sur des récepteurs spécifiques.",
      "Ils ne modifient jamais l’expression génique.",
      "EGF est un acide gras."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les facteurs de croissance contrôlent la prolifération par des voies de signalisation.",
    "choiceExplanations": [
      "Vrai. EGF, TGFβ, IGF et FGF sont cités.",
      "Vrai. Ils se fixent sur des récepteurs spécifiques.",
      "Faux. La signalisation peut la modifier.",
      "Faux. C’est un facteur de croissance."
    ]
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les cytokines et interleukines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytokines-interleukins"
    },
    "choices": [
      "Toutes les cytokines ont exactement la même action.",
      "Interleukines, TNFα, interférons et chimiokines sont cités.",
      "Le TNFα est un glucide.",
      "Les cytokines sont de petites protéines ou peptides."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les cytokines coordonnent la communication entre cellules immunitaires et tissus.",
    "choiceExplanations": [
      "Faux. Leurs effets peuvent être opposés.",
      "Vrai. Interleukines, TNFα, interférons et chimiokines sont cités.",
      "Faux. C’est une cytokine.",
      "Vrai. Les cytokines sont de petites protéines ou peptides."
    ]
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les interférons et chimiokines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "interferons-chemokines"
    },
    "choices": [
      "Les interférons de type I comprennent IFN-α et IFN-β.",
      "L’IFN-γ est un interféron de type II surtout produit par les lymphocytes.",
      "Les interférons de type I sont produits uniquement par les érythrocytes.",
      "L’IFN-γ appartient au type I dans la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Interférons et chimiokines coordonnent les réponses antivirales et le recrutement cellulaire.",
    "choiceExplanations": [
      "Vrai. Les interférons de type I comprennent IFN-α et IFN-β.",
      "Vrai. L’IFN-γ est un interféron de type II surtout produit par les lymphocytes.",
      "Faux. Presque toutes les cellules peuvent les produire.",
      "Faux. Il appartient au type II."
    ]
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les endorphines et encéphalines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "opioid-peptides"
    },
    "choices": [
      "Ce sont de petits peptides neuromédiateurs.",
      "Ils sont exclusivement exogènes.",
      "Ils contiennent toujours plus de 1000 résidus.",
      "Ils sont des opioïdes endogènes."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les endorphines et encéphalines sont des peptides opioïdes endogènes.",
    "choiceExplanations": [
      "Vrai. Ce sont de petits peptides neuromédiateurs.",
      "Faux. Ils sont produits par l’organisme.",
      "Faux. Ce sont de petits peptides.",
      "Vrai. Ils sont des opioïdes endogènes."
    ]
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une perte progressive de mémoire et un bilan du LCR portant sur Aβ40/Aβ42. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amyloid-app"
    },
    "choices": [
      "APP est une enzyme soluble sans domaine transmembranaire.",
      "Ces peptides insolubles s’agrègent en plaques séniles dans la maladie d’Alzheimer.",
      "La voie amyloïdogénique est décrite comme physiologique et protectrice.",
      "APP est une protéine transmembranaire à une traversée."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le clivage pathologique d’APP produit Aβ40/Aβ42 susceptibles de s’agréger.",
    "choiceExplanations": [
      "Faux. C’est une protéine à une traversée membranaire.",
      "Vrai. Ces peptides insolubles s’agrègent en plaques séniles dans la maladie d’Alzheimer.",
      "Faux. Elle est pathologique dans la fiche.",
      "Vrai. APP est une protéine transmembranaire à une traversée."
    ]
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les facteurs de croissance. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "growth-factors"
    },
    "choices": [
      "Ils inhibent toujours toute prolifération.",
      "Ils agissent sans aucun récepteur.",
      "Ils contrôlent la prolifération et l’expression des gènes.",
      "EGF, TGFβ, IGF et FGF sont cités."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les facteurs de croissance contrôlent la prolifération par des voies de signalisation.",
    "choiceExplanations": [
      "Faux. Ils la régulent, parfois en la stimulant.",
      "Faux. Ils se fixent à des récepteurs spécifiques.",
      "Vrai. Ils contrôlent la prolifération et l’expression des gènes.",
      "Vrai. EGF, TGFβ, IGF et FGF sont cités."
    ]
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les cytokines et interleukines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytokines-interleukins"
    },
    "choices": [
      "Interleukines, TNFα, interférons et chimiokines sont cités.",
      "IL10 est citée comme pro-inflammatoire.",
      "IL1 et IL6 sont pro-inflammatoires alors que IL10 est anti-inflammatoire.",
      "Toutes les cytokines ont exactement la même action."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les cytokines coordonnent la communication entre cellules immunitaires et tissus.",
    "choiceExplanations": [
      "Vrai. Interleukines, TNFα, interférons et chimiokines sont cités.",
      "Faux. Elle est citée comme anti-inflammatoire.",
      "Vrai. IL1 et IL6 sont pro-inflammatoires alors que IL10 est anti-inflammatoire.",
      "Faux. Leurs effets peuvent être opposés."
    ]
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les interférons et chimiokines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "interferons-chemokines"
    },
    "choices": [
      "Les interférons de type I comprennent IFN-α et IFN-β.",
      "Les résidus de cystéine n’ont aucun intérêt dans les chimiokines.",
      "Les interférons de type I sont produits uniquement par les érythrocytes.",
      "Les chimiokines sont chimiotactiques pour les cellules immunitaires."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Interférons et chimiokines coordonnent les réponses antivirales et le recrutement cellulaire.",
    "choiceExplanations": [
      "Vrai. Les interférons de type I comprennent IFN-α et IFN-β.",
      "Faux. Leurs positions conservées servent à la classification.",
      "Faux. Presque toutes les cellules peuvent les produire.",
      "Vrai. Les chimiokines sont chimiotactiques pour les cellules immunitaires."
    ]
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les endorphines et encéphalines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "opioid-peptides"
    },
    "choices": [
      "Ils sont des stéroïdes dérivés du cholestérol.",
      "Ils contiennent toujours plus de 1000 résidus.",
      "Ce sont de petits peptides neuromédiateurs.",
      "Ils se lient aux récepteurs opioïdes."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les endorphines et encéphalines sont des peptides opioïdes endogènes.",
    "choiceExplanations": [
      "Faux. Ce sont des peptides.",
      "Faux. Ce sont de petits peptides.",
      "Vrai. Ce sont de petits peptides neuromédiateurs.",
      "Vrai. Ils se lient aux récepteurs opioïdes."
    ]
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une perte progressive de mémoire et un bilan du LCR portant sur Aβ40/Aβ42. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amyloid-app"
    },
    "choices": [
      "Aβ40 et Aβ42 sont cités.",
      "La voie amyloïdogénique est décrite comme physiologique et protectrice.",
      "APP est une enzyme soluble sans domaine transmembranaire.",
      "Un clivage anormal peut libérer des peptides amyloïdes."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le clivage pathologique d’APP produit Aβ40/Aβ42 susceptibles de s’agréger.",
    "choiceExplanations": [
      "Vrai. Aβ40 et Aβ42 sont cités.",
      "Faux. Elle est pathologique dans la fiche.",
      "Faux. C’est une protéine à une traversée membranaire.",
      "Vrai. Un clivage anormal peut libérer des peptides amyloïdes."
    ]
  }
];
