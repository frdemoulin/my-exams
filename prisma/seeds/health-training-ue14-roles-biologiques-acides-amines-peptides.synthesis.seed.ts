import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 5;

export const SYNTHESIS_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "121": [
    "les besoins en acides aminés indispensables"
  ],
  "122": [
    "le rôle structural des acides aminés"
  ],
  "123": [
    "le cycle de l’uréogenèse"
  ],
  "124": [
    "les interconversions et la méthionine"
  ],
  "125": [
    "le rôle énergétique des acides aminés"
  ],
  "126": [
    "les précurseurs de neurotransmetteurs et hormones"
  ],
  "127": [
    "la glycine, la créatine et les nucléotides"
  ],
  "128": [
    "la définition et l’intérêt des peptides"
  ],
  "129": [
    "la maturation de l’insuline"
  ],
  "130": [
    "la POMC et les peptides non ribosomaux"
  ],
  "131": [
    "les peptides antibiotiques"
  ],
  "132": [
    "la cyclosporine et l’aspartame"
  ],
  "133": [
    "les hormones peptidiques"
  ],
  "134": [
    "le glucagon"
  ],
  "135": [
    "les peptides natriurétiques"
  ],
  "136": [
    "les facteurs de croissance"
  ],
  "137": [
    "les cytokines et interleukines"
  ],
  "138": [
    "les interférons et chimiokines"
  ],
  "139": [
    "les endorphines et encéphalines"
  ],
  "140": [
    "les peptides beta-amyloïdes et APP"
  ]
};

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "roles-biologiques-acides-amines-peptides-synthese-structures-fonctions",
    "title": "Structures et fonctions",
    "description": "Réviser transversalement les structures et leurs conséquences fonctionnelles.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "items": [
      {
        "type": "GROUP",
        "title": "Structure",
        "sharedStatement": "Les questions suivantes portent sur les structures et classifications du chapitre.",
        "questionOrders": [
          121,
          122,
          123
        ]
      },
      {
        "type": "GROUP",
        "title": "Propriétés",
        "sharedStatement": "Les questions suivantes relient structure et propriétés.",
        "questionOrders": [
          124,
          125,
          126
        ]
      },
      {
        "type": "GROUP",
        "title": "Fonctions biologiques",
        "sharedStatement": "Les questions suivantes portent sur les fonctions biologiques et leurs applications.",
        "questionOrders": [
          127,
          128,
          129,
          130
        ]
      }
    ]
  },
  {
    "order": 2,
    "slug": "roles-biologiques-acides-amines-peptides-synthese-raisonnement",
    "title": "Raisonnement transversal",
    "description": "Résoudre des questions transversales proches de l’esprit de l’examen.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "items": [
      {
        "type": "GROUP",
        "title": "Identification",
        "sharedStatement": "Les questions suivantes demandent d’identifier ou de comparer plusieurs notions.",
        "questionOrders": [
          131,
          132,
          133
        ]
      },
      {
        "type": "GROUP",
        "title": "Mécanismes",
        "sharedStatement": "Les questions suivantes mobilisent des mécanismes moléculaires.",
        "questionOrders": [
          134,
          135,
          136
        ]
      },
      {
        "type": "GROUP",
        "title": "Contextes médicaux",
        "sharedStatement": "Les questions suivantes replacent les notions dans des contextes physiologiques ou pathologiques.",
        "questionOrders": [
          137,
          138,
          139,
          140
        ]
      }
    ]
  }
];

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    "order": 121,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les besoins en acides aminés indispensables, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-aa-needs"
    },
    "choices": [
      "Histidine et arginine sont décrites comme inutiles à la croissance.",
      "Les acides aminés essentiels sont synthétisés sans limite par l’Homme.",
      "Leucine, thréonine, lysine et tryptophane sont cités.",
      "Histidine et arginine sont semi-essentielles au cours de la croissance."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les besoins associent synthèse endogène et apport alimentaire, avec un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Faux. Elles sont semi-essentielles pendant la croissance.",
      "Faux. Ils doivent être apportés.",
      "Vrai. Leucine, thréonine, lysine et tryptophane sont cités.",
      "Vrai. Histidine et arginine sont semi-essentielles au cours de la croissance."
    ]
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le rôle structural des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-structural-roles"
    },
    "choices": [
      "La liaison entre résidus est une liaison osidique.",
      "Ils sont les éléments de base des peptides et protéines.",
      "Vingt acides aminés sont pris en compte par le code génétique.",
      "Le code génétique utilise environ 500 acides aminés."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les acides aminés servent à la synthèse protéique et peuvent aussi entrer dans d’autres biomolécules.",
    "choiceExplanations": [
      "Faux. C’est une liaison peptidique.",
      "Vrai. Ils sont les éléments de base des peptides et protéines.",
      "Vrai. Vingt acides aminés sont pris en compte par le code génétique.",
      "Faux. La fiche en retient 20 protéinogènes."
    ]
  },
  {
    "order": 123,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le cycle de l’uréogenèse, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "urea-cycle-aa"
    },
    "choices": [
      "Citrulline, ornithine et arginine participent au cycle de l’urée.",
      "Le cycle permet de détoxifier l’ammoniaque.",
      "L’ornithine est un acide gras.",
      "L’ammoniaque est stocké sans détoxification."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "L’uréogenèse illustre l’utilisation d’acides aminés comme intermédiaires de détoxification.",
    "choiceExplanations": [
      "Vrai. Citrulline, ornithine et arginine participent au cycle de l’urée.",
      "Vrai. Le cycle permet de détoxifier l’ammoniaque.",
      "Faux. C’est un acide aminé intermédiaire.",
      "Faux. Il est toxique et converti en urée."
    ]
  },
  {
    "order": 124,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les interconversions et la méthionine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "transamination-methionine"
    },
    "choices": [
      "La transamination est catalysée par une lipase.",
      "Aspartate et 2-oxoglutarate peuvent donner oxaloacétate et glutamate.",
      "Une transamination est catalysée par une aminotransférase.",
      "La méthionine est dépourvue de rôle dans les transferts de méthyle."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les réactions d’interconversion relient les acides aminés aux intermédiaires du métabolisme.",
    "choiceExplanations": [
      "Faux. Elle est catalysée par une aminotransférase.",
      "Vrai. Aspartate et 2-oxoglutarate peuvent donner oxaloacétate et glutamate.",
      "Vrai. Une transamination est catalysée par une aminotransférase.",
      "Faux. Elle est citée comme donneur de méthyle."
    ]
  },
  {
    "order": 125,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le rôle énergétique des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucogenic-ketogenic-aa"
    },
    "choices": [
      "Un acide aminé glucoformateur ne peut jamais conduire au glucose.",
      "Les acides aminés cétoformateurs peuvent donner acétyl-CoA ou acétoacétyl-CoA.",
      "Les acides aminés glucoformateurs peuvent alimenter la néoglucogenèse.",
      "Les acides aminés sont stockés indéfiniment sous forme libre."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les squelettes carbonés des acides aminés peuvent rejoindre la néoglucogenèse ou la cétogenèse.",
    "choiceExplanations": [
      "Faux. Il peut alimenter la néoglucogenèse.",
      "Vrai. Les acides aminés cétoformateurs peuvent donner acétyl-CoA ou acétoacétyl-CoA.",
      "Vrai. Les acides aminés glucoformateurs peuvent alimenter la néoglucogenèse.",
      "Faux. Ils sont utilisés ou transformés."
    ]
  },
  {
    "order": 126,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les précurseurs de neurotransmetteurs et hormones, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-neurotransmitter-precursors"
    },
    "choices": [
      "Les hormones thyroïdiennes dérivent de la glycine dans la fiche.",
      "Le tryptophane donne uniquement l’adrénaline.",
      "Le glutamate est précurseur du GABA par décarboxylation.",
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
      "Vrai. Le glutamate est précurseur du GABA par décarboxylation.",
      "Vrai. La tyrosine participe à la formation des hormones thyroïdiennes."
    ]
  },
  {
    "order": 127,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la glycine, la créatine et les nucléotides, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aa-biological-precursors"
    },
    "choices": [
      "Glycine, aspartate et glutamine participent à la biosynthèse des bases nucléiques.",
      "L’hème ne contient aucun apport provenant de la glycine.",
      "Les bases puriques et pyrimidiques ne nécessitent aucun acide aminé.",
      "Glycine et arginine participent à la biosynthèse de la créatine."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les acides aminés servent de précurseurs à l’hème, aux nucléotides, aux acides biliaires et à la créatine.",
    "choiceExplanations": [
      "Vrai. Glycine, aspartate et glutamine participent à la biosynthèse des bases nucléiques.",
      "Faux. La glycine participe à sa biosynthèse.",
      "Faux. Plusieurs acides aminés y participent.",
      "Vrai. Glycine et arginine participent à la biosynthèse de la créatine."
    ]
  },
  {
    "order": 128,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la définition et l’intérêt des peptides, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-biological-roles"
    },
    "choices": [
      "Aucune hormone n’est peptidique.",
      "La fiche retient moins de 100 acides aminés pour un peptide.",
      "Un peptide associe plusieurs acides aminés par des liaisons peptidiques.",
      "Un peptide est un assemblage d’acides gras."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les peptides sont de petites chaînes d’acides aminés aux fonctions biologiques très variées.",
    "choiceExplanations": [
      "Faux. L’insuline et le glucagon sont des exemples.",
      "Vrai. La fiche retient moins de 100 acides aminés pour un peptide.",
      "Vrai. Un peptide associe plusieurs acides aminés par des liaisons peptidiques.",
      "Faux. Il est formé d’acides aminés."
    ]
  },
  {
    "order": 129,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Chez un patient diabétique, le dosage du peptide C est utilisé pour évaluer la sécrétion endogène. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-maturation"
    },
    "choices": [
      "L’élimination de la séquence signal forme la proinsuline.",
      "Les chaînes A et B ne sont reliées par aucune liaison.",
      "La préproinsuline est synthétisée à partir d’un gène unique.",
      "L’insuline est synthétisée directement sans précurseur."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La maturation de l’insuline associe élimination d’une séquence signal puis clivage du peptide C.",
    "choiceExplanations": [
      "Vrai. L’élimination de la séquence signal forme la proinsuline.",
      "Faux. Elles sont reliées par des ponts disulfure.",
      "Vrai. La préproinsuline est synthétisée à partir d’un gène unique.",
      "Faux. Elle passe par préproinsuline et proinsuline."
    ]
  },
  {
    "order": 130,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la POMC et les peptides non ribosomaux, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "pomc-glutathione"
    },
    "choices": [
      "La POMC ne donne qu’une seule hormone dans tous les tissus.",
      "Le glutathion est absent des cellules.",
      "Des clivages différents peuvent produire ACTH, γ-lipotropine et β-endorphine.",
      "La pro-opiomélanocortine est un précurseur protéique."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les peptides peuvent être produits par clivage de précurseurs ou par des synthétases non ribosomales.",
    "choiceExplanations": [
      "Faux. Des clivages tissulaires différents donnent plusieurs peptides.",
      "Faux. Il est présent dans toutes les cellules selon la fiche.",
      "Vrai. Des clivages différents peuvent produire ACTH, γ-lipotropine et β-endorphine.",
      "Vrai. La pro-opiomélanocortine est un précurseur protéique."
    ]
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les peptides antibiotiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-antibiotics"
    },
    "choices": [
      "Certains peptides bactériens contiennent des acides aminés de série D.",
      "La pénicilline est décrite comme une chaîne linéaire de glucose.",
      "Certains peptides ralentissent ou empêchent la croissance bactérienne.",
      "Tous les antibiotiques peptidiques sont des protéines de plus de 1000 résidus."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Certains antibiotiques possèdent une structure peptidique ou pseudopeptidique particulière.",
    "choiceExplanations": [
      "Vrai. Certains peptides bactériens contiennent des acides aminés de série D.",
      "Faux. Elle possède une structure cyclique ressemblant à un tripeptide.",
      "Vrai. Certains peptides ralentissent ou empêchent la croissance bactérienne.",
      "Faux. Plusieurs sont de petits peptides."
    ]
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient transplanté reçoit un peptide cyclique pour prévenir le rejet. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cyclosporine-aspartame"
    },
    "choices": [
      "La cyclosporine est un monosaccharide.",
      "L’aspartame est un triacylglycérol.",
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
      "Faux. C’est un dipeptide.",
      "Vrai. Elle est utilisée pour prévenir le rejet de greffe.",
      "Vrai. L’aspartame est un dipeptide Asp-Phe à fort pouvoir sucrant."
    ]
  },
  {
    "order": 133,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les hormones peptidiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-hormone-signaling"
    },
    "choices": [
      "Toutes les hormones sont produites par les globules rouges.",
      "Une hormone transmet une information à une cellule cible.",
      "La transduction n’a aucun effet sur l’expression des gènes.",
      "Insuline, glucagon et peptides issus de la POMC sont des exemples."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les hormones peptidiques déclenchent une signalisation après fixation à leur récepteur.",
    "choiceExplanations": [
      "Faux. Elles sont produites par des cellules spécialisées.",
      "Vrai. Une hormone transmet une information à une cellule cible.",
      "Faux. Elle peut la modifier.",
      "Vrai. Insuline, glucagon et peptides issus de la POMC sont des exemples."
    ]
  },
  {
    "order": 134,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une hypoglycémie sévère et reçoit du glucagon. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "glucagon-insulin"
    },
    "choices": [
      "Il est hyperglycémiant et stimule la glycogénolyse hépatique.",
      "Il inhibe la sortie du glucose hépatique.",
      "Il dérive du proglucagon par clivage.",
      "Il possède deux chaînes reliées par ponts disulfure."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le glucagon est une hormone peptidique pancréatique hyperglycémiante.",
    "choiceExplanations": [
      "Vrai. Il est hyperglycémiant et stimule la glycogénolyse hépatique.",
      "Faux. Il favorise sa libération dans le sang.",
      "Vrai. Il dérive du proglucagon par clivage.",
      "Faux. La fiche le décrit comme une chaîne de 29 résidus."
    ]
  },
  {
    "order": 135,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient dyspnéique est exploré pour une insuffisance cardiaque par dosage du BNP. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "natriuretic-peptides"
    },
    "choices": [
      "Ils favorisent la rétention sodée.",
      "Le dosage BNP ou NT-proBNP aide au diagnostic d’insuffisance cardiaque.",
      "Ils favorisent natriurèse et diurèse.",
      "Le NT-proBNP est la forme biologiquement active principale."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les peptides natriurétiques cardiaques favorisent l’élimination du sodium et servent de biomarqueurs.",
    "choiceExplanations": [
      "Faux. Ils favorisent la natriurèse.",
      "Vrai. Le dosage BNP ou NT-proBNP aide au diagnostic d’insuffisance cardiaque.",
      "Vrai. Ils favorisent natriurèse et diurèse.",
      "Faux. La fiche le décrit comme biologiquement inactif."
    ]
  },
  {
    "order": 136,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les facteurs de croissance, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "growth-factors"
    },
    "choices": [
      "Ils contrôlent la prolifération et l’expression des gènes.",
      "Ils ne modifient jamais l’expression génique.",
      "EGF est un acide gras.",
      "Ils se fixent sur des récepteurs spécifiques."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les facteurs de croissance contrôlent la prolifération par des voies de signalisation.",
    "choiceExplanations": [
      "Vrai. Ils contrôlent la prolifération et l’expression des gènes.",
      "Faux. La signalisation peut la modifier.",
      "Faux. C’est un facteur de croissance.",
      "Vrai. Ils se fixent sur des récepteurs spécifiques."
    ]
  },
  {
    "order": 137,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les cytokines et interleukines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytokines-interleukins"
    },
    "choices": [
      "Interleukines, TNFα, interférons et chimiokines sont cités.",
      "IL10 est citée comme pro-inflammatoire.",
      "IL1 et IL6 sont pro-inflammatoires alors que IL10 est anti-inflammatoire.",
      "Les cytokines n’agissent jamais sur les cellules voisines."
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
      "Faux. Elles régulent leurs fonctions."
    ]
  },
  {
    "order": 138,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les interférons et chimiokines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "interferons-chemokines"
    },
    "choices": [
      "Les interférons de type I comprennent IFN-α et IFN-β.",
      "Les interférons de type I sont produits uniquement par les érythrocytes.",
      "Ils sont induits notamment par virus et bactéries.",
      "Les chimiokines repoussent toujours les cellules immunitaires."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Interférons et chimiokines coordonnent les réponses antivirales et le recrutement cellulaire.",
    "choiceExplanations": [
      "Vrai. Les interférons de type I comprennent IFN-α et IFN-β.",
      "Faux. Presque toutes les cellules peuvent les produire.",
      "Vrai. Ils sont induits notamment par virus et bactéries.",
      "Faux. Elles sont chimiotactiques."
    ]
  },
  {
    "order": 139,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les endorphines et encéphalines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "opioid-peptides"
    },
    "choices": [
      "Ils sont des stéroïdes dérivés du cholestérol.",
      "Ils sont des opioïdes endogènes.",
      "Ils ne peuvent pas interagir avec des récepteurs.",
      "Ce sont de petits peptides neuromédiateurs."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les endorphines et encéphalines sont des peptides opioïdes endogènes.",
    "choiceExplanations": [
      "Faux. Ce sont des peptides.",
      "Vrai. Ils sont des opioïdes endogènes.",
      "Faux. Ils se lient aux récepteurs opioïdes.",
      "Vrai. Ce sont de petits peptides neuromédiateurs."
    ]
  },
  {
    "order": 140,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une perte progressive de mémoire et un bilan du LCR portant sur Aβ40/Aβ42. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amyloid-app"
    },
    "choices": [
      "Ces peptides insolubles s’agrègent en plaques séniles dans la maladie d’Alzheimer.",
      "APP est une enzyme soluble sans domaine transmembranaire.",
      "Un clivage anormal peut libérer des peptides amyloïdes.",
      "La voie amyloïdogénique est décrite comme physiologique et protectrice."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le clivage pathologique d’APP produit Aβ40/Aβ42 susceptibles de s’agréger.",
    "choiceExplanations": [
      "Vrai. Ces peptides insolubles s’agrègent en plaques séniles dans la maladie d’Alzheimer.",
      "Faux. C’est une protéine à une traversée membranaire.",
      "Vrai. Un clivage anormal peut libérer des peptides amyloïdes.",
      "Faux. Elle est pathologique dans la fiche."
    ]
  }
];
