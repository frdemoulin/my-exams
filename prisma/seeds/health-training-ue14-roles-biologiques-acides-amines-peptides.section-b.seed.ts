import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "31": [
    "les précurseurs de neurotransmetteurs et hormones"
  ],
  "32": [
    "la glycine, la créatine et les nucléotides"
  ],
  "33": [
    "la définition et l’intérêt des peptides"
  ],
  "34": [
    "la maturation de l’insuline"
  ],
  "35": [
    "la POMC et les peptides non ribosomaux"
  ],
  "36": [
    "les précurseurs de neurotransmetteurs et hormones"
  ],
  "37": [
    "la glycine, la créatine et les nucléotides"
  ],
  "38": [
    "la définition et l’intérêt des peptides"
  ],
  "39": [
    "la maturation de l’insuline"
  ],
  "40": [
    "la POMC et les peptides non ribosomaux"
  ],
  "41": [
    "les précurseurs de neurotransmetteurs et hormones"
  ],
  "42": [
    "la glycine, la créatine et les nucléotides"
  ],
  "43": [
    "la définition et l’intérêt des peptides"
  ],
  "44": [
    "la maturation de l’insuline"
  ],
  "45": [
    "la POMC et les peptides non ribosomaux"
  ],
  "46": [
    "les précurseurs de neurotransmetteurs et hormones"
  ],
  "47": [
    "la glycine, la créatine et les nucléotides"
  ],
  "48": [
    "la définition et l’intérêt des peptides"
  ],
  "49": [
    "la maturation de l’insuline"
  ],
  "50": [
    "la POMC et les peptides non ribosomaux"
  ],
  "51": [
    "les précurseurs de neurotransmetteurs et hormones"
  ],
  "52": [
    "la glycine, la créatine et les nucléotides"
  ],
  "53": [
    "la définition et l’intérêt des peptides"
  ],
  "54": [
    "la maturation de l’insuline"
  ],
  "55": [
    "la POMC et les peptides non ribosomaux"
  ],
  "56": [
    "les précurseurs de neurotransmetteurs et hormones"
  ],
  "57": [
    "la glycine, la créatine et les nucléotides"
  ],
  "58": [
    "la définition et l’intérêt des peptides"
  ],
  "59": [
    "la maturation de l’insuline"
  ],
  "60": [
    "la POMC et les peptides non ribosomaux"
  ]
};

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "precurseurs-formation-peptides-1",
    "title": "Précurseurs d’hormones et neurotransmetteurs",
    "description": "Identifier les notions essentielles.",
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
    "slug": "precurseurs-formation-peptides-2",
    "title": "Insuline et clivages protéolytiques",
    "description": "Appliquer et comparer les notions du cours.",
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
    "slug": "precurseurs-formation-peptides-3",
    "title": "Peptides non ribosomaux et glutathion",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 2,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères essentiels",
        "sharedStatement": "Les questions suivantes portent sur les principaux repères de la section.",
        "questionOrders": [
          51,
          52,
          53
        ]
      },
      {
        "type": "GROUP",
        "title": "Structure et fonction",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          54,
          55,
          56
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications",
        "sharedStatement": "Les questions suivantes mobilisent les notions dans des situations biologiques ou médicales.",
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
    "question": "À propos de les précurseurs de neurotransmetteurs et hormones :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-neurotransmitter-precursors"
    },
    "choices": [
      "Le glutamate n’est jamais un neurotransmetteur.",
      "Le glutamate est précurseur du GABA par décarboxylation.",
      "La tyrosine est précurseur de catécholamines.",
      "La tyrosine participe à la formation des hormones thyroïdiennes."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Plusieurs acides aminés sont les précurseurs de médiateurs hormonaux et neuronaux.",
    "choiceExplanations": [
      "Faux. Il est lui-même neurotransmetteur.",
      "Vrai. Le glutamate est précurseur du GABA par décarboxylation.",
      "Vrai. La tyrosine est précurseur de catécholamines.",
      "Vrai. La tyrosine participe à la formation des hormones thyroïdiennes."
    ]
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la glycine, la créatine et les nucléotides :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-biological-precursors"
    },
    "choices": [
      "Glycine et arginine participent à la biosynthèse de la créatine.",
      "La créatine-phosphate est sans intérêt dans le muscle.",
      "Les bases puriques et pyrimidiques ne nécessitent aucun acide aminé.",
      "La glycine participe à la conjugaison de certains acides biliaires."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les acides aminés servent de précurseurs à l’hème, aux nucléotides, aux acides biliaires et à la créatine.",
    "choiceExplanations": [
      "Vrai. Glycine et arginine participent à la biosynthèse de la créatine.",
      "Faux. Elle constitue un donneur d’énergie important.",
      "Faux. Plusieurs acides aminés y participent.",
      "Vrai. La glycine participe à la conjugaison de certains acides biliaires."
    ]
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la définition et l’intérêt des peptides :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-biological-roles"
    },
    "choices": [
      "La fiche retient moins de 100 acides aminés pour un peptide.",
      "Un peptide associe plusieurs acides aminés par des liaisons peptidiques.",
      "Aucune hormone n’est peptidique.",
      "Facteurs de croissance, cytokines et médicaments peuvent être peptidiques."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les peptides sont de petites chaînes d’acides aminés aux fonctions biologiques très variées.",
    "choiceExplanations": [
      "Vrai. La fiche retient moins de 100 acides aminés pour un peptide.",
      "Vrai. Un peptide associe plusieurs acides aminés par des liaisons peptidiques.",
      "Faux. L’insuline et le glucagon sont des exemples.",
      "Vrai. Facteurs de croissance, cytokines et médicaments peuvent être peptidiques."
    ]
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la maturation de l’insuline :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-maturation"
    },
    "choices": [
      "Les chaînes A et B ne sont reliées par aucune liaison.",
      "La préproinsuline est synthétisée à partir d’un gène unique.",
      "L’insuline mature conserve le peptide C au centre.",
      "L’insuline comporte deux chaînes A et B reliées par deux ponts disulfure."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La maturation de l’insuline associe élimination d’une séquence signal puis clivage du peptide C.",
    "choiceExplanations": [
      "Faux. Elles sont reliées par des ponts disulfure.",
      "Vrai. La préproinsuline est synthétisée à partir d’un gène unique.",
      "Faux. Le peptide C est clivé.",
      "Vrai. L’insuline comporte deux chaînes A et B reliées par deux ponts disulfure."
    ]
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la POMC et les peptides non ribosomaux :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "pomc-glutathione"
    },
    "choices": [
      "La synthèse non ribosomale nécessite de l’ATP et concerne surtout de petits peptides.",
      "Le glutathion est un tripeptide γGlu-Cys-Gly.",
      "Le glutathion est un polysaccharide.",
      "La pro-opiomélanocortine est un précurseur protéique."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les peptides peuvent être produits par clivage de précurseurs ou par des synthétases non ribosomales.",
    "choiceExplanations": [
      "Vrai. La synthèse non ribosomale nécessite de l’ATP et concerne surtout de petits peptides.",
      "Vrai. Le glutathion est un tripeptide γGlu-Cys-Gly.",
      "Faux. C’est un tripeptide.",
      "Vrai. La pro-opiomélanocortine est un précurseur protéique."
    ]
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les précurseurs de neurotransmetteurs et hormones :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-neurotransmitter-precursors"
    },
    "choices": [
      "Le glutamate est précurseur du GABA par décarboxylation.",
      "La tyrosine est précurseur direct du GABA dans la fiche.",
      "Le tryptophane donne uniquement l’adrénaline.",
      "La tyrosine est précurseur de catécholamines."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Plusieurs acides aminés sont les précurseurs de médiateurs hormonaux et neuronaux.",
    "choiceExplanations": [
      "Vrai. Le glutamate est précurseur du GABA par décarboxylation.",
      "Faux. Le GABA dérive du glutamate.",
      "Faux. Il donne sérotonine et mélatonine.",
      "Vrai. La tyrosine est précurseur de catécholamines."
    ]
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la glycine, la créatine et les nucléotides :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-biological-precursors"
    },
    "choices": [
      "La glycine participe à la conjugaison de certains acides biliaires.",
      "Glycine et arginine participent à la biosynthèse de la créatine.",
      "L’hème ne contient aucun apport provenant de la glycine.",
      "Glycine, aspartate et glutamine participent à la biosynthèse des bases nucléiques."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les acides aminés servent de précurseurs à l’hème, aux nucléotides, aux acides biliaires et à la créatine.",
    "choiceExplanations": [
      "Vrai. La glycine participe à la conjugaison de certains acides biliaires.",
      "Vrai. Glycine et arginine participent à la biosynthèse de la créatine.",
      "Faux. La glycine participe à sa biosynthèse.",
      "Vrai. Glycine, aspartate et glutamine participent à la biosynthèse des bases nucléiques."
    ]
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la définition et l’intérêt des peptides :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-biological-roles"
    },
    "choices": [
      "Un peptide est un assemblage d’acides gras.",
      "De nombreuses hormones sont peptidiques.",
      "Aucune hormone n’est peptidique.",
      "La fiche retient moins de 100 acides aminés pour un peptide."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les peptides sont de petites chaînes d’acides aminés aux fonctions biologiques très variées.",
    "choiceExplanations": [
      "Faux. Il est formé d’acides aminés.",
      "Vrai. De nombreuses hormones sont peptidiques.",
      "Faux. L’insuline et le glucagon sont des exemples.",
      "Vrai. La fiche retient moins de 100 acides aminés pour un peptide."
    ]
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la maturation de l’insuline :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-maturation"
    },
    "choices": [
      "L’insuline comporte deux chaînes A et B reliées par deux ponts disulfure.",
      "L’élimination de la séquence signal forme la proinsuline.",
      "Le clivage du peptide C forme l’insuline mature.",
      "L’insuline mature conserve le peptide C au centre."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La maturation de l’insuline associe élimination d’une séquence signal puis clivage du peptide C.",
    "choiceExplanations": [
      "Vrai. L’insuline comporte deux chaînes A et B reliées par deux ponts disulfure.",
      "Vrai. L’élimination de la séquence signal forme la proinsuline.",
      "Vrai. Le clivage du peptide C forme l’insuline mature.",
      "Faux. Le peptide C est clivé."
    ]
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la POMC et les peptides non ribosomaux :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "pomc-glutathione"
    },
    "choices": [
      "La synthèse non ribosomale ne consomme aucune énergie.",
      "La synthèse non ribosomale nécessite de l’ATP et concerne surtout de petits peptides.",
      "Le glutathion est un tripeptide γGlu-Cys-Gly.",
      "La POMC ne donne qu’une seule hormone dans tous les tissus."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les peptides peuvent être produits par clivage de précurseurs ou par des synthétases non ribosomales.",
    "choiceExplanations": [
      "Faux. Elle nécessite de l’ATP.",
      "Vrai. La synthèse non ribosomale nécessite de l’ATP et concerne surtout de petits peptides.",
      "Vrai. Le glutathion est un tripeptide γGlu-Cys-Gly.",
      "Faux. Des clivages tissulaires différents donnent plusieurs peptides."
    ]
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les précurseurs de neurotransmetteurs et hormones, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-neurotransmitter-precursors"
    },
    "choices": [
      "La tyrosine est précurseur de catécholamines.",
      "Le tryptophane donne uniquement l’adrénaline.",
      "Le glutamate est précurseur du GABA par décarboxylation.",
      "Les hormones thyroïdiennes dérivent de la glycine dans la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Plusieurs acides aminés sont les précurseurs de médiateurs hormonaux et neuronaux.",
    "choiceExplanations": [
      "Vrai. La tyrosine est précurseur de catécholamines.",
      "Faux. Il donne sérotonine et mélatonine.",
      "Vrai. Le glutamate est précurseur du GABA par décarboxylation.",
      "Faux. La tyrosine est citée."
    ]
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la glycine, la créatine et les nucléotides, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-biological-precursors"
    },
    "choices": [
      "La glycine participe à la biosynthèse de l’hème.",
      "La glycine participe à la conjugaison de certains acides biliaires.",
      "Les bases puriques et pyrimidiques ne nécessitent aucun acide aminé.",
      "La créatine est formée uniquement à partir de glucose."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les acides aminés servent de précurseurs à l’hème, aux nucléotides, aux acides biliaires et à la créatine.",
    "choiceExplanations": [
      "Vrai. La glycine participe à la biosynthèse de l’hème.",
      "Vrai. La glycine participe à la conjugaison de certains acides biliaires.",
      "Faux. Plusieurs acides aminés y participent.",
      "Faux. Glycine et arginine sont citées."
    ]
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la définition et l’intérêt des peptides, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-biological-roles"
    },
    "choices": [
      "Un peptide contient nécessairement plus de 1000 résidus.",
      "La fiche retient moins de 100 acides aminés pour un peptide.",
      "Un peptide associe plusieurs acides aminés par des liaisons peptidiques.",
      "Aucune hormone n’est peptidique."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les peptides sont de petites chaînes d’acides aminés aux fonctions biologiques très variées.",
    "choiceExplanations": [
      "Faux. La fiche retient moins de 100.",
      "Vrai. La fiche retient moins de 100 acides aminés pour un peptide.",
      "Vrai. Un peptide associe plusieurs acides aminés par des liaisons peptidiques.",
      "Faux. L’insuline et le glucagon sont des exemples."
    ]
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la maturation de l’insuline, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-maturation"
    },
    "choices": [
      "L’insuline comporte deux chaînes A et B reliées par deux ponts disulfure.",
      "Le clivage du peptide C forme l’insuline mature.",
      "L’insuline est produite par les cellules α du pancréas.",
      "Les chaînes A et B ne sont reliées par aucune liaison."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La maturation de l’insuline associe élimination d’une séquence signal puis clivage du peptide C.",
    "choiceExplanations": [
      "Vrai. L’insuline comporte deux chaînes A et B reliées par deux ponts disulfure.",
      "Vrai. Le clivage du peptide C forme l’insuline mature.",
      "Faux. Elle est produite par les cellules β.",
      "Faux. Elles sont reliées par des ponts disulfure."
    ]
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la POMC et les peptides non ribosomaux, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "pomc-glutathione"
    },
    "choices": [
      "La synthèse non ribosomale ne consomme aucune énergie.",
      "La POMC ne donne qu’une seule hormone dans tous les tissus.",
      "La pro-opiomélanocortine est un précurseur protéique.",
      "Le glutathion est un tripeptide γGlu-Cys-Gly."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les peptides peuvent être produits par clivage de précurseurs ou par des synthétases non ribosomales.",
    "choiceExplanations": [
      "Faux. Elle nécessite de l’ATP.",
      "Faux. Des clivages tissulaires différents donnent plusieurs peptides.",
      "Vrai. La pro-opiomélanocortine est un précurseur protéique.",
      "Vrai. Le glutathion est un tripeptide γGlu-Cys-Gly."
    ]
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les précurseurs de neurotransmetteurs et hormones, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-neurotransmitter-precursors"
    },
    "choices": [
      "Les hormones thyroïdiennes dérivent de la glycine dans la fiche.",
      "Le tryptophane donne uniquement l’adrénaline.",
      "La tyrosine est précurseur de catécholamines.",
      "La tyrosine participe à la formation des hormones thyroïdiennes."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Plusieurs acides aminés sont les précurseurs de médiateurs hormonaux et neuronaux.",
    "choiceExplanations": [
      "Faux. La tyrosine est citée.",
      "Faux. Il donne sérotonine et mélatonine.",
      "Vrai. La tyrosine est précurseur de catécholamines.",
      "Vrai. La tyrosine participe à la formation des hormones thyroïdiennes."
    ]
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la glycine, la créatine et les nucléotides, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-biological-precursors"
    },
    "choices": [
      "La glycine participe à la biosynthèse de l’hème.",
      "La créatine-phosphate est sans intérêt dans le muscle.",
      "La créatine est formée uniquement à partir de glucose.",
      "La glycine participe à la conjugaison de certains acides biliaires."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les acides aminés servent de précurseurs à l’hème, aux nucléotides, aux acides biliaires et à la créatine.",
    "choiceExplanations": [
      "Vrai. La glycine participe à la biosynthèse de l’hème.",
      "Faux. Elle constitue un donneur d’énergie important.",
      "Faux. Glycine et arginine sont citées.",
      "Vrai. La glycine participe à la conjugaison de certains acides biliaires."
    ]
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la définition et l’intérêt des peptides, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-biological-roles"
    },
    "choices": [
      "Un peptide contient nécessairement plus de 1000 résidus.",
      "Un peptide associe plusieurs acides aminés par des liaisons peptidiques.",
      "Les peptides n’ont aucun intérêt thérapeutique.",
      "De nombreuses hormones sont peptidiques."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les peptides sont de petites chaînes d’acides aminés aux fonctions biologiques très variées.",
    "choiceExplanations": [
      "Faux. La fiche retient moins de 100.",
      "Vrai. Un peptide associe plusieurs acides aminés par des liaisons peptidiques.",
      "Faux. Certains sont des médicaments.",
      "Vrai. De nombreuses hormones sont peptidiques."
    ]
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la maturation de l’insuline, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-maturation"
    },
    "choices": [
      "La préproinsuline est synthétisée à partir d’un gène unique.",
      "Le clivage du peptide C forme l’insuline mature.",
      "L’insuline est synthétisée directement sans précurseur.",
      "Les chaînes A et B ne sont reliées par aucune liaison."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La maturation de l’insuline associe élimination d’une séquence signal puis clivage du peptide C.",
    "choiceExplanations": [
      "Vrai. La préproinsuline est synthétisée à partir d’un gène unique.",
      "Vrai. Le clivage du peptide C forme l’insuline mature.",
      "Faux. Elle passe par préproinsuline et proinsuline.",
      "Faux. Elles sont reliées par des ponts disulfure."
    ]
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la POMC et les peptides non ribosomaux, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "pomc-glutathione"
    },
    "choices": [
      "Le glutathion est un polysaccharide.",
      "Le glutathion est un tripeptide γGlu-Cys-Gly.",
      "La synthèse non ribosomale ne consomme aucune énergie.",
      "La synthèse non ribosomale nécessite de l’ATP et concerne surtout de petits peptides."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les peptides peuvent être produits par clivage de précurseurs ou par des synthétases non ribosomales.",
    "choiceExplanations": [
      "Faux. C’est un tripeptide.",
      "Vrai. Le glutathion est un tripeptide γGlu-Cys-Gly.",
      "Faux. Elle nécessite de l’ATP.",
      "Vrai. La synthèse non ribosomale nécessite de l’ATP et concerne surtout de petits peptides."
    ]
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les précurseurs de neurotransmetteurs et hormones. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-neurotransmitter-precursors"
    },
    "choices": [
      "Les hormones thyroïdiennes dérivent de la glycine dans la fiche.",
      "Le glutamate est précurseur du GABA par décarboxylation.",
      "La tyrosine participe à la formation des hormones thyroïdiennes.",
      "Le glutamate n’est jamais un neurotransmetteur."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Plusieurs acides aminés sont les précurseurs de médiateurs hormonaux et neuronaux.",
    "choiceExplanations": [
      "Faux. La tyrosine est citée.",
      "Vrai. Le glutamate est précurseur du GABA par décarboxylation.",
      "Vrai. La tyrosine participe à la formation des hormones thyroïdiennes.",
      "Faux. Il est lui-même neurotransmetteur."
    ]
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la glycine, la créatine et les nucléotides. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-biological-precursors"
    },
    "choices": [
      "La créatine-phosphate est sans intérêt dans le muscle.",
      "Glycine, aspartate et glutamine participent à la biosynthèse des bases nucléiques.",
      "La créatine est formée uniquement à partir de glucose.",
      "La glycine participe à la biosynthèse de l’hème."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les acides aminés servent de précurseurs à l’hème, aux nucléotides, aux acides biliaires et à la créatine.",
    "choiceExplanations": [
      "Faux. Elle constitue un donneur d’énergie important.",
      "Vrai. Glycine, aspartate et glutamine participent à la biosynthèse des bases nucléiques.",
      "Faux. Glycine et arginine sont citées.",
      "Vrai. La glycine participe à la biosynthèse de l’hème."
    ]
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la définition et l’intérêt des peptides. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-biological-roles"
    },
    "choices": [
      "Les peptides n’ont aucun intérêt thérapeutique.",
      "Facteurs de croissance, cytokines et médicaments peuvent être peptidiques.",
      "De nombreuses hormones sont peptidiques.",
      "Aucune hormone n’est peptidique."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les peptides sont de petites chaînes d’acides aminés aux fonctions biologiques très variées.",
    "choiceExplanations": [
      "Faux. Certains sont des médicaments.",
      "Vrai. Facteurs de croissance, cytokines et médicaments peuvent être peptidiques.",
      "Vrai. De nombreuses hormones sont peptidiques.",
      "Faux. L’insuline et le glucagon sont des exemples."
    ]
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Chez un patient diabétique, le dosage du peptide C est utilisé pour évaluer la sécrétion endogène. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-maturation"
    },
    "choices": [
      "Les chaînes A et B ne sont reliées par aucune liaison.",
      "L’élimination de la séquence signal forme la proinsuline.",
      "Le clivage du peptide C forme l’insuline mature.",
      "L’insuline est produite par les cellules α du pancréas."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La maturation de l’insuline associe élimination d’une séquence signal puis clivage du peptide C.",
    "choiceExplanations": [
      "Faux. Elles sont reliées par des ponts disulfure.",
      "Vrai. L’élimination de la séquence signal forme la proinsuline.",
      "Vrai. Le clivage du peptide C forme l’insuline mature.",
      "Faux. Elle est produite par les cellules β."
    ]
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la POMC et les peptides non ribosomaux. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "pomc-glutathione"
    },
    "choices": [
      "Le glutathion est un polysaccharide.",
      "La synthèse non ribosomale nécessite de l’ATP et concerne surtout de petits peptides.",
      "La POMC ne donne qu’une seule hormone dans tous les tissus.",
      "La pro-opiomélanocortine est un précurseur protéique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les peptides peuvent être produits par clivage de précurseurs ou par des synthétases non ribosomales.",
    "choiceExplanations": [
      "Faux. C’est un tripeptide.",
      "Vrai. La synthèse non ribosomale nécessite de l’ATP et concerne surtout de petits peptides.",
      "Faux. Des clivages tissulaires différents donnent plusieurs peptides.",
      "Vrai. La pro-opiomélanocortine est un précurseur protéique."
    ]
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les précurseurs de neurotransmetteurs et hormones. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-neurotransmitter-precursors"
    },
    "choices": [
      "Le tryptophane donne uniquement l’adrénaline.",
      "Le glutamate est précurseur du GABA par décarboxylation.",
      "Les hormones thyroïdiennes dérivent de la glycine dans la fiche.",
      "La tyrosine est précurseur de catécholamines."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Plusieurs acides aminés sont les précurseurs de médiateurs hormonaux et neuronaux.",
    "choiceExplanations": [
      "Faux. Il donne sérotonine et mélatonine.",
      "Vrai. Le glutamate est précurseur du GABA par décarboxylation.",
      "Faux. La tyrosine est citée.",
      "Vrai. La tyrosine est précurseur de catécholamines."
    ]
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la glycine, la créatine et les nucléotides. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-biological-precursors"
    },
    "choices": [
      "Glycine, aspartate et glutamine participent à la biosynthèse des bases nucléiques.",
      "La créatine est formée uniquement à partir de glucose.",
      "La glycine participe à la biosynthèse de l’hème.",
      "Les bases puriques et pyrimidiques ne nécessitent aucun acide aminé."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les acides aminés servent de précurseurs à l’hème, aux nucléotides, aux acides biliaires et à la créatine.",
    "choiceExplanations": [
      "Vrai. Glycine, aspartate et glutamine participent à la biosynthèse des bases nucléiques.",
      "Faux. Glycine et arginine sont citées.",
      "Vrai. La glycine participe à la biosynthèse de l’hème.",
      "Faux. Plusieurs acides aminés y participent."
    ]
  },
  {
    "order": 58,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la définition et l’intérêt des peptides. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-biological-roles"
    },
    "choices": [
      "De nombreuses hormones sont peptidiques.",
      "Un peptide contient nécessairement plus de 1000 résidus.",
      "La fiche retient moins de 100 acides aminés pour un peptide.",
      "Un peptide est un assemblage d’acides gras."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les peptides sont de petites chaînes d’acides aminés aux fonctions biologiques très variées.",
    "choiceExplanations": [
      "Vrai. De nombreuses hormones sont peptidiques.",
      "Faux. La fiche retient moins de 100.",
      "Vrai. La fiche retient moins de 100 acides aminés pour un peptide.",
      "Faux. Il est formé d’acides aminés."
    ]
  },
  {
    "order": 59,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Chez un patient diabétique, le dosage du peptide C est utilisé pour évaluer la sécrétion endogène. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-maturation"
    },
    "choices": [
      "Les chaînes A et B ne sont reliées par aucune liaison.",
      "L’insuline mature conserve le peptide C au centre.",
      "La préproinsuline est synthétisée à partir d’un gène unique.",
      "L’élimination de la séquence signal forme la proinsuline."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La maturation de l’insuline associe élimination d’une séquence signal puis clivage du peptide C.",
    "choiceExplanations": [
      "Faux. Elles sont reliées par des ponts disulfure.",
      "Faux. Le peptide C est clivé.",
      "Vrai. La préproinsuline est synthétisée à partir d’un gène unique.",
      "Vrai. L’élimination de la séquence signal forme la proinsuline."
    ]
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la POMC et les peptides non ribosomaux. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "pomc-glutathione"
    },
    "choices": [
      "La pro-opiomélanocortine est un précurseur protéique.",
      "Le glutathion est un tripeptide γGlu-Cys-Gly.",
      "Le glutathion est absent des cellules.",
      "La synthèse non ribosomale ne consomme aucune énergie."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les peptides peuvent être produits par clivage de précurseurs ou par des synthétases non ribosomales.",
    "choiceExplanations": [
      "Vrai. La pro-opiomélanocortine est un précurseur protéique.",
      "Vrai. Le glutathion est un tripeptide γGlu-Cys-Gly.",
      "Faux. Il est présent dans toutes les cellules selon la fiche.",
      "Faux. Elle nécessite de l’ATP."
    ]
  }
];
