import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "61": [
    "les peptides antibiotiques"
  ],
  "62": [
    "la cyclosporine et l’aspartame"
  ],
  "63": [
    "les hormones peptidiques"
  ],
  "64": [
    "le glucagon"
  ],
  "65": [
    "les peptides natriurétiques"
  ],
  "66": [
    "les peptides antibiotiques"
  ],
  "67": [
    "la cyclosporine et l’aspartame"
  ],
  "68": [
    "les hormones peptidiques"
  ],
  "69": [
    "le glucagon"
  ],
  "70": [
    "les peptides natriurétiques"
  ],
  "71": [
    "les peptides antibiotiques"
  ],
  "72": [
    "la cyclosporine et l’aspartame"
  ],
  "73": [
    "les hormones peptidiques"
  ],
  "74": [
    "le glucagon"
  ],
  "75": [
    "les peptides natriurétiques"
  ],
  "76": [
    "les peptides antibiotiques"
  ],
  "77": [
    "la cyclosporine et l’aspartame"
  ],
  "78": [
    "les hormones peptidiques"
  ],
  "79": [
    "le glucagon"
  ],
  "80": [
    "les peptides natriurétiques"
  ],
  "81": [
    "les peptides antibiotiques"
  ],
  "82": [
    "la cyclosporine et l’aspartame"
  ],
  "83": [
    "les hormones peptidiques"
  ],
  "84": [
    "le glucagon"
  ],
  "85": [
    "les peptides natriurétiques"
  ],
  "86": [
    "les peptides antibiotiques"
  ],
  "87": [
    "la cyclosporine et l’aspartame"
  ],
  "88": [
    "les hormones peptidiques"
  ],
  "89": [
    "le glucagon"
  ],
  "90": [
    "les peptides natriurétiques"
  ]
};

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "peptides-therapeutiques-hormones-1",
    "title": "Peptides de synthèse et médicaments",
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
    "slug": "peptides-therapeutiques-hormones-2",
    "title": "Hormones peptidiques",
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
    "slug": "peptides-therapeutiques-hormones-3",
    "title": "Raisonnement thérapeutique et endocrinien",
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
    "question": "À propos de les peptides antibiotiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-antibiotics"
    },
    "choices": [
      "La pénicilline est décrite comme une chaîne linéaire de glucose.",
      "Certains peptides bactériens contiennent des acides aminés de série D.",
      "La pénicilline possède une structure cyclique ressemblant à un tripeptide.",
      "Polymyxines et bacitracine sont citées."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Certains antibiotiques possèdent une structure peptidique ou pseudopeptidique particulière.",
    "choiceExplanations": [
      "Faux. Elle possède une structure cyclique ressemblant à un tripeptide.",
      "Vrai. Certains peptides bactériens contiennent des acides aminés de série D.",
      "Vrai. La pénicilline possède une structure cyclique ressemblant à un tripeptide.",
      "Vrai. Polymyxines et bacitracine sont citées."
    ]
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la cyclosporine et l’aspartame :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cyclosporine-aspartame"
    },
    "choices": [
      "La cyclosporine est un monosaccharide.",
      "Elle stimule le rejet de greffe.",
      "Elle est utilisée pour prévenir le rejet de greffe.",
      "L’aspartame est un dipeptide Asp-Phe à fort pouvoir sucrant."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Cyclosporine et aspartame illustrent des applications très différentes de petits peptides.",
    "choiceExplanations": [
      "Faux. C’est un peptide cyclique.",
      "Faux. Elle est immunosuppressive.",
      "Vrai. Elle est utilisée pour prévenir le rejet de greffe.",
      "Vrai. L’aspartame est un dipeptide Asp-Phe à fort pouvoir sucrant."
    ]
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les hormones peptidiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-hormone-signaling"
    },
    "choices": [
      "Une hormone transmet une information à une cellule cible.",
      "La fixation déclenche une transduction intracellulaire.",
      "Insuline, glucagon et peptides issus de la POMC sont des exemples.",
      "La transduction n’a aucun effet sur l’expression des gènes."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les hormones peptidiques déclenchent une signalisation après fixation à leur récepteur.",
    "choiceExplanations": [
      "Vrai. Une hormone transmet une information à une cellule cible.",
      "Vrai. La fixation déclenche une transduction intracellulaire.",
      "Vrai. Insuline, glucagon et peptides issus de la POMC sont des exemples.",
      "Faux. Elle peut la modifier."
    ]
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le glucagon :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucagon-insulin"
    },
    "choices": [
      "Le glucagon possède une chaîne de 29 acides aminés.",
      "Il inhibe la sortie du glucose hépatique.",
      "Il est hyperglycémiant et stimule la glycogénolyse hépatique.",
      "Le glucagon est produit par les cellules β."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le glucagon est une hormone peptidique pancréatique hyperglycémiante.",
    "choiceExplanations": [
      "Vrai. Le glucagon possède une chaîne de 29 acides aminés.",
      "Faux. Il favorise sa libération dans le sang.",
      "Vrai. Il est hyperglycémiant et stimule la glycogénolyse hépatique.",
      "Faux. Il est produit par les cellules α."
    ]
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les peptides natriurétiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "natriuretic-peptides"
    },
    "choices": [
      "ANP et BNP sont produits par les cardiomyocytes.",
      "Le dosage BNP ou NT-proBNP aide au diagnostic d’insuffisance cardiaque.",
      "Ils favorisent la rétention sodée.",
      "ANP comporte 28 acides aminés et BNP 32."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les peptides natriurétiques cardiaques favorisent l’élimination du sodium et servent de biomarqueurs.",
    "choiceExplanations": [
      "Vrai. ANP et BNP sont produits par les cardiomyocytes.",
      "Vrai. Le dosage BNP ou NT-proBNP aide au diagnostic d’insuffisance cardiaque.",
      "Faux. Ils favorisent la natriurèse.",
      "Vrai. ANP comporte 28 acides aminés et BNP 32."
    ]
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les peptides antibiotiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-antibiotics"
    },
    "choices": [
      "Certains peptides bactériens contiennent des acides aminés de série D.",
      "La pénicilline possède une structure cyclique ressemblant à un tripeptide.",
      "Tous les antibiotiques peptidiques sont des protéines de plus de 1000 résidus.",
      "La pénicilline est décrite comme une chaîne linéaire de glucose."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Certains antibiotiques possèdent une structure peptidique ou pseudopeptidique particulière.",
    "choiceExplanations": [
      "Vrai. Certains peptides bactériens contiennent des acides aminés de série D.",
      "Vrai. La pénicilline possède une structure cyclique ressemblant à un tripeptide.",
      "Faux. Plusieurs sont de petits peptides.",
      "Faux. Elle possède une structure cyclique ressemblant à un tripeptide."
    ]
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la cyclosporine et l’aspartame :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cyclosporine-aspartame"
    },
    "choices": [
      "L’aspartame est un dipeptide Asp-Phe à fort pouvoir sucrant.",
      "Elle comporte 11 acides aminés.",
      "La cyclosporine est un peptide cyclique.",
      "Elle stimule le rejet de greffe."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Cyclosporine et aspartame illustrent des applications très différentes de petits peptides.",
    "choiceExplanations": [
      "Vrai. L’aspartame est un dipeptide Asp-Phe à fort pouvoir sucrant.",
      "Vrai. Elle comporte 11 acides aminés.",
      "Vrai. La cyclosporine est un peptide cyclique.",
      "Faux. Elle est immunosuppressive."
    ]
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les hormones peptidiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-hormone-signaling"
    },
    "choices": [
      "Elle se fixe sur un récepteur.",
      "La fixation déclenche une transduction intracellulaire.",
      "Le glucagon est un stérol.",
      "Toutes les hormones sont produites par les globules rouges."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les hormones peptidiques déclenchent une signalisation après fixation à leur récepteur.",
    "choiceExplanations": [
      "Vrai. Elle se fixe sur un récepteur.",
      "Vrai. La fixation déclenche une transduction intracellulaire.",
      "Faux. C’est une hormone peptidique.",
      "Faux. Elles sont produites par des cellules spécialisées."
    ]
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le glucagon :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucagon-insulin"
    },
    "choices": [
      "Il dérive du proglucagon par clivage.",
      "Il est hypoglycémiant comme l’insuline.",
      "Il est synthétisé par les cellules α du pancréas.",
      "Il est hyperglycémiant et stimule la glycogénolyse hépatique."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le glucagon est une hormone peptidique pancréatique hyperglycémiante.",
    "choiceExplanations": [
      "Vrai. Il dérive du proglucagon par clivage.",
      "Faux. Son action est inverse et hyperglycémiante.",
      "Vrai. Il est synthétisé par les cellules α du pancréas.",
      "Vrai. Il est hyperglycémiant et stimule la glycogénolyse hépatique."
    ]
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les peptides natriurétiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "natriuretic-peptides"
    },
    "choices": [
      "ANP et BNP sont produits par les cardiomyocytes.",
      "Le BNP augmente nécessairement la pression artérielle.",
      "Ils favorisent natriurèse et diurèse.",
      "Ils favorisent la rétention sodée."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les peptides natriurétiques cardiaques favorisent l’élimination du sodium et servent de biomarqueurs.",
    "choiceExplanations": [
      "Vrai. ANP et BNP sont produits par les cardiomyocytes.",
      "Faux. Il favorise une baisse de pression.",
      "Vrai. Ils favorisent natriurèse et diurèse.",
      "Faux. Ils favorisent la natriurèse."
    ]
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les peptides antibiotiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-antibiotics"
    },
    "choices": [
      "La bacitracine est une hormone humaine.",
      "Certains peptides bactériens contiennent des acides aminés de série D.",
      "Polymyxines et bacitracine sont citées.",
      "Tous les antibiotiques peptidiques sont des protéines de plus de 1000 résidus."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Certains antibiotiques possèdent une structure peptidique ou pseudopeptidique particulière.",
    "choiceExplanations": [
      "Faux. C’est un antibiotique peptidique cité.",
      "Vrai. Certains peptides bactériens contiennent des acides aminés de série D.",
      "Vrai. Polymyxines et bacitracine sont citées.",
      "Faux. Plusieurs sont de petits peptides."
    ]
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la cyclosporine et l’aspartame, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cyclosporine-aspartame"
    },
    "choices": [
      "Elle stimule le rejet de greffe.",
      "La cyclosporine est un monosaccharide.",
      "L’aspartame est un dipeptide Asp-Phe à fort pouvoir sucrant.",
      "La cyclosporine est un peptide cyclique."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Cyclosporine et aspartame illustrent des applications très différentes de petits peptides.",
    "choiceExplanations": [
      "Faux. Elle est immunosuppressive.",
      "Faux. C’est un peptide cyclique.",
      "Vrai. L’aspartame est un dipeptide Asp-Phe à fort pouvoir sucrant.",
      "Vrai. La cyclosporine est un peptide cyclique."
    ]
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les hormones peptidiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-hormone-signaling"
    },
    "choices": [
      "Une hormone transmet une information à une cellule cible.",
      "Toutes les hormones sont produites par les globules rouges.",
      "Le glucagon est un stérol.",
      "La fixation déclenche une transduction intracellulaire."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les hormones peptidiques déclenchent une signalisation après fixation à leur récepteur.",
    "choiceExplanations": [
      "Vrai. Une hormone transmet une information à une cellule cible.",
      "Faux. Elles sont produites par des cellules spécialisées.",
      "Faux. C’est une hormone peptidique.",
      "Vrai. La fixation déclenche une transduction intracellulaire."
    ]
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le glucagon, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucagon-insulin"
    },
    "choices": [
      "Il dérive du proglucagon par clivage.",
      "Il est hyperglycémiant et stimule la glycogénolyse hépatique.",
      "Le glucagon est produit par les cellules β.",
      "Il possède deux chaînes reliées par ponts disulfure."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le glucagon est une hormone peptidique pancréatique hyperglycémiante.",
    "choiceExplanations": [
      "Vrai. Il dérive du proglucagon par clivage.",
      "Vrai. Il est hyperglycémiant et stimule la glycogénolyse hépatique.",
      "Faux. Il est produit par les cellules α.",
      "Faux. La fiche le décrit comme une chaîne de 29 résidus."
    ]
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les peptides natriurétiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "natriuretic-peptides"
    },
    "choices": [
      "Ils favorisent natriurèse et diurèse.",
      "ANP et BNP sont produits par les cardiomyocytes.",
      "Le NT-proBNP est la forme biologiquement active principale.",
      "Ils favorisent la rétention sodée."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les peptides natriurétiques cardiaques favorisent l’élimination du sodium et servent de biomarqueurs.",
    "choiceExplanations": [
      "Vrai. Ils favorisent natriurèse et diurèse.",
      "Vrai. ANP et BNP sont produits par les cardiomyocytes.",
      "Faux. La fiche le décrit comme biologiquement inactif.",
      "Faux. Ils favorisent la natriurèse."
    ]
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les peptides antibiotiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-antibiotics"
    },
    "choices": [
      "Certains peptides bactériens contiennent des acides aminés de série D.",
      "Les acides aminés de série D sont absents de tous les peptides bactériens.",
      "La pénicilline possède une structure cyclique ressemblant à un tripeptide.",
      "Tous les antibiotiques peptidiques sont des protéines de plus de 1000 résidus."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Certains antibiotiques possèdent une structure peptidique ou pseudopeptidique particulière.",
    "choiceExplanations": [
      "Vrai. Certains peptides bactériens contiennent des acides aminés de série D.",
      "Faux. Ils peuvent y être présents.",
      "Vrai. La pénicilline possède une structure cyclique ressemblant à un tripeptide.",
      "Faux. Plusieurs sont de petits peptides."
    ]
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la cyclosporine et l’aspartame, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cyclosporine-aspartame"
    },
    "choices": [
      "Elle est utilisée pour prévenir le rejet de greffe.",
      "Elle comporte 11 acides aminés.",
      "Elle stimule le rejet de greffe.",
      "La cyclosporine est un monosaccharide."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Cyclosporine et aspartame illustrent des applications très différentes de petits peptides.",
    "choiceExplanations": [
      "Vrai. Elle est utilisée pour prévenir le rejet de greffe.",
      "Vrai. Elle comporte 11 acides aminés.",
      "Faux. Elle est immunosuppressive.",
      "Faux. C’est un peptide cyclique."
    ]
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les hormones peptidiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-hormone-signaling"
    },
    "choices": [
      "La fixation déclenche une transduction intracellulaire.",
      "Insuline, glucagon et peptides issus de la POMC sont des exemples.",
      "Une hormone peptidique agit sans aucun récepteur.",
      "La transduction n’a aucun effet sur l’expression des gènes."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les hormones peptidiques déclenchent une signalisation après fixation à leur récepteur.",
    "choiceExplanations": [
      "Vrai. La fixation déclenche une transduction intracellulaire.",
      "Vrai. Insuline, glucagon et peptides issus de la POMC sont des exemples.",
      "Faux. Elle se fixe sur un récepteur spécifique.",
      "Faux. Elle peut la modifier."
    ]
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le glucagon, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucagon-insulin"
    },
    "choices": [
      "Il dérive du proglucagon par clivage.",
      "Le glucagon possède une chaîne de 29 acides aminés.",
      "Il inhibe la sortie du glucose hépatique.",
      "Il est hypoglycémiant comme l’insuline."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le glucagon est une hormone peptidique pancréatique hyperglycémiante.",
    "choiceExplanations": [
      "Vrai. Il dérive du proglucagon par clivage.",
      "Vrai. Le glucagon possède une chaîne de 29 acides aminés.",
      "Faux. Il favorise sa libération dans le sang.",
      "Faux. Son action est inverse et hyperglycémiante."
    ]
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les peptides natriurétiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "natriuretic-peptides"
    },
    "choices": [
      "ANP et BNP sont produits exclusivement par le foie.",
      "Ils favorisent la rétention sodée.",
      "Ils favorisent natriurèse et diurèse.",
      "ANP et BNP sont produits par les cardiomyocytes."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les peptides natriurétiques cardiaques favorisent l’élimination du sodium et servent de biomarqueurs.",
    "choiceExplanations": [
      "Faux. Ils sont synthétisés par les cardiomyocytes.",
      "Faux. Ils favorisent la natriurèse.",
      "Vrai. Ils favorisent natriurèse et diurèse.",
      "Vrai. ANP et BNP sont produits par les cardiomyocytes."
    ]
  },
  {
    "order": 81,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les peptides antibiotiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-antibiotics"
    },
    "choices": [
      "Certains peptides bactériens contiennent des acides aminés de série D.",
      "Les acides aminés de série D sont absents de tous les peptides bactériens.",
      "Polymyxines et bacitracine sont citées.",
      "Tous les antibiotiques peptidiques sont des protéines de plus de 1000 résidus."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Certains antibiotiques possèdent une structure peptidique ou pseudopeptidique particulière.",
    "choiceExplanations": [
      "Vrai. Certains peptides bactériens contiennent des acides aminés de série D.",
      "Faux. Ils peuvent y être présents.",
      "Vrai. Polymyxines et bacitracine sont citées.",
      "Faux. Plusieurs sont de petits peptides."
    ]
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient transplanté reçoit un peptide cyclique pour prévenir le rejet. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cyclosporine-aspartame"
    },
    "choices": [
      "La cyclosporine est un peptide cyclique.",
      "L’aspartame est dépourvu de pouvoir sucrant.",
      "Elle stimule le rejet de greffe.",
      "L’aspartame est un dipeptide Asp-Phe à fort pouvoir sucrant."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Cyclosporine et aspartame illustrent des applications très différentes de petits peptides.",
    "choiceExplanations": [
      "Vrai. La cyclosporine est un peptide cyclique.",
      "Faux. Il est utilisé comme édulcorant.",
      "Faux. Elle est immunosuppressive.",
      "Vrai. L’aspartame est un dipeptide Asp-Phe à fort pouvoir sucrant."
    ]
  },
  {
    "order": 83,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les hormones peptidiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-hormone-signaling"
    },
    "choices": [
      "Le glucagon est un stérol.",
      "Une hormone transmet une information à une cellule cible.",
      "Insuline, glucagon et peptides issus de la POMC sont des exemples.",
      "Une hormone peptidique agit sans aucun récepteur."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les hormones peptidiques déclenchent une signalisation après fixation à leur récepteur.",
    "choiceExplanations": [
      "Faux. C’est une hormone peptidique.",
      "Vrai. Une hormone transmet une information à une cellule cible.",
      "Vrai. Insuline, glucagon et peptides issus de la POMC sont des exemples.",
      "Faux. Elle se fixe sur un récepteur spécifique."
    ]
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une hypoglycémie sévère et reçoit du glucagon. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucagon-insulin"
    },
    "choices": [
      "Il dérive du proglucagon par clivage.",
      "Il est hypoglycémiant comme l’insuline.",
      "Il est hyperglycémiant et stimule la glycogénolyse hépatique.",
      "Le glucagon est produit par les cellules β."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le glucagon est une hormone peptidique pancréatique hyperglycémiante.",
    "choiceExplanations": [
      "Vrai. Il dérive du proglucagon par clivage.",
      "Faux. Son action est inverse et hyperglycémiante.",
      "Vrai. Il est hyperglycémiant et stimule la glycogénolyse hépatique.",
      "Faux. Il est produit par les cellules α."
    ]
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient dyspnéique est exploré pour une insuffisance cardiaque par dosage du BNP. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "natriuretic-peptides"
    },
    "choices": [
      "Ils favorisent la rétention sodée.",
      "Le NT-proBNP est la forme biologiquement active principale.",
      "Ils favorisent natriurèse et diurèse.",
      "ANP comporte 28 acides aminés et BNP 32."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les peptides natriurétiques cardiaques favorisent l’élimination du sodium et servent de biomarqueurs.",
    "choiceExplanations": [
      "Faux. Ils favorisent la natriurèse.",
      "Faux. La fiche le décrit comme biologiquement inactif.",
      "Vrai. Ils favorisent natriurèse et diurèse.",
      "Vrai. ANP comporte 28 acides aminés et BNP 32."
    ]
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les peptides antibiotiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-antibiotics"
    },
    "choices": [
      "Les acides aminés de série D sont absents de tous les peptides bactériens.",
      "Polymyxines et bacitracine sont citées.",
      "La pénicilline possède une structure cyclique ressemblant à un tripeptide.",
      "La bacitracine est une hormone humaine."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Certains antibiotiques possèdent une structure peptidique ou pseudopeptidique particulière.",
    "choiceExplanations": [
      "Faux. Ils peuvent y être présents.",
      "Vrai. Polymyxines et bacitracine sont citées.",
      "Vrai. La pénicilline possède une structure cyclique ressemblant à un tripeptide.",
      "Faux. C’est un antibiotique peptidique cité."
    ]
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient transplanté reçoit un peptide cyclique pour prévenir le rejet. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cyclosporine-aspartame"
    },
    "choices": [
      "La cyclosporine est un peptide cyclique.",
      "L’aspartame est un triacylglycérol.",
      "Elle stimule le rejet de greffe.",
      "Elle comporte 11 acides aminés."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Cyclosporine et aspartame illustrent des applications très différentes de petits peptides.",
    "choiceExplanations": [
      "Vrai. La cyclosporine est un peptide cyclique.",
      "Faux. C’est un dipeptide.",
      "Faux. Elle est immunosuppressive.",
      "Vrai. Elle comporte 11 acides aminés."
    ]
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les hormones peptidiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-hormone-signaling"
    },
    "choices": [
      "Elle se fixe sur un récepteur.",
      "Le glucagon est un stérol.",
      "Une hormone transmet une information à une cellule cible.",
      "La transduction n’a aucun effet sur l’expression des gènes."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les hormones peptidiques déclenchent une signalisation après fixation à leur récepteur.",
    "choiceExplanations": [
      "Vrai. Elle se fixe sur un récepteur.",
      "Faux. C’est une hormone peptidique.",
      "Vrai. Une hormone transmet une information à une cellule cible.",
      "Faux. Elle peut la modifier."
    ]
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une hypoglycémie sévère et reçoit du glucagon. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucagon-insulin"
    },
    "choices": [
      "Il est hyperglycémiant et stimule la glycogénolyse hépatique.",
      "Le glucagon est produit par les cellules β.",
      "Il est hypoglycémiant comme l’insuline.",
      "Il dérive du proglucagon par clivage."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le glucagon est une hormone peptidique pancréatique hyperglycémiante.",
    "choiceExplanations": [
      "Vrai. Il est hyperglycémiant et stimule la glycogénolyse hépatique.",
      "Faux. Il est produit par les cellules α.",
      "Faux. Son action est inverse et hyperglycémiante.",
      "Vrai. Il dérive du proglucagon par clivage."
    ]
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient dyspnéique est exploré pour une insuffisance cardiaque par dosage du BNP. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "natriuretic-peptides"
    },
    "choices": [
      "ANP et BNP sont produits exclusivement par le foie.",
      "ANP comporte 28 acides aminés et BNP 32.",
      "ANP et BNP sont produits par les cardiomyocytes.",
      "Le NT-proBNP est la forme biologiquement active principale."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les peptides natriurétiques cardiaques favorisent l’élimination du sodium et servent de biomarqueurs.",
    "choiceExplanations": [
      "Faux. Ils sont synthétisés par les cardiomyocytes.",
      "Vrai. ANP comporte 28 acides aminés et BNP 32.",
      "Vrai. ANP et BNP sont produits par les cardiomyocytes.",
      "Faux. La fiche le décrit comme biologiquement inactif."
    ]
  }
];
