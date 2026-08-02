import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "91": [
    "les familles de molécules d’adhérence"
  ],
  "92": [
    "les sélectines et cadhérines"
  ],
  "93": [
    "les Ig-CAM"
  ],
  "94": [
    "les intégrines et plaques d’adhésion focale"
  ],
  "95": [
    "les connexines et connexons"
  ],
  "96": [
    "les familles de molécules d’adhérence"
  ],
  "97": [
    "les sélectines et cadhérines"
  ],
  "98": [
    "les Ig-CAM"
  ],
  "99": [
    "les intégrines et plaques d’adhésion focale"
  ],
  "100": [
    "les connexines et connexons"
  ],
  "101": [
    "les familles de molécules d’adhérence"
  ],
  "102": [
    "les sélectines et cadhérines"
  ],
  "103": [
    "les Ig-CAM"
  ],
  "104": [
    "les intégrines et plaques d’adhésion focale"
  ],
  "105": [
    "les connexines et connexons"
  ],
  "106": [
    "les familles de molécules d’adhérence"
  ],
  "107": [
    "les sélectines et cadhérines"
  ],
  "108": [
    "les Ig-CAM"
  ],
  "109": [
    "les intégrines et plaques d’adhésion focale"
  ],
  "110": [
    "les connexines et connexons"
  ],
  "111": [
    "les familles de molécules d’adhérence"
  ],
  "112": [
    "les sélectines et cadhérines"
  ],
  "113": [
    "les Ig-CAM"
  ],
  "114": [
    "les intégrines et plaques d’adhésion focale"
  ],
  "115": [
    "les connexines et connexons"
  ],
  "116": [
    "les familles de molécules d’adhérence"
  ],
  "117": [
    "les sélectines et cadhérines"
  ],
  "118": [
    "les Ig-CAM"
  ],
  "119": [
    "les intégrines et plaques d’adhésion focale"
  ],
  "120": [
    "les connexines et connexons"
  ]
};

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "adhesion-jonctions-1",
    "title": "Familles de molécules d’adhérence",
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
    "slug": "adhesion-jonctions-2",
    "title": "Intégrines et adhésions focales",
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
    "slug": "adhesion-jonctions-3",
    "title": "Connexines et pathologies",
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
    "question": "À propos de les familles de molécules d’adhérence :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "adhesion-families"
    },
    "choices": [
      "Elles sont importantes dans la communication tissulaire.",
      "Elles assurent des interactions cellule-cellule ou cellule-matrice.",
      "Les quatre familles citées sont sélectines, cadhérines, Ig-CAM et intégrines.",
      "Les molécules d’adhérence sont uniquement des lipides."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les molécules d’adhérence organisent les contacts entre cellules et matrice.",
    "choiceExplanations": [
      "Vrai. Elles sont importantes dans la communication tissulaire.",
      "Vrai. Elles assurent des interactions cellule-cellule ou cellule-matrice.",
      "Vrai. Les quatre familles citées sont sélectines, cadhérines, Ig-CAM et intégrines.",
      "Faux. Ce sont des protéines membranaires."
    ]
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les sélectines et cadhérines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "selectin-cadherin"
    },
    "choices": [
      "La cadhérine E n’a aucun intérêt en cancérologie.",
      "Les cadhérines réalisent des interactions homotypiques.",
      "Les cadhérines nécessitent du Ca2+.",
      "Les cadhérines ne nécessitent aucun calcium."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Sélectines et cadhérines utilisent des mécanismes de reconnaissance différents.",
    "choiceExplanations": [
      "Faux. Elle peut servir de marqueur tumoral.",
      "Vrai. Les cadhérines réalisent des interactions homotypiques.",
      "Vrai. Les cadhérines nécessitent du Ca2+.",
      "Faux. Le Ca2+ est nécessaire."
    ]
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les Ig-CAM :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "igcam"
    },
    "choices": [
      "Elles possèdent des domaines de type immunoglobuline.",
      "Elles réalisent des interactions hétérotypiques.",
      "ICAM-1 participe aux interactions leucocyte-endothélium.",
      "Une interaction hétérotypique associe deux récepteurs identiques."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les Ig-CAM utilisent des domaines apparentés aux immunoglobulines pour l’adhérence.",
    "choiceExplanations": [
      "Vrai. Elles possèdent des domaines de type immunoglobuline.",
      "Vrai. Elles réalisent des interactions hétérotypiques.",
      "Vrai. ICAM-1 participe aux interactions leucocyte-endothélium.",
      "Faux. Elle associe des partenaires différents."
    ]
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les intégrines et plaques d’adhésion focale :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "integrin-focal-adhesion"
    },
    "choices": [
      "Chaque sous-unité possède une traversée membranaire.",
      "Les intégrines sont des homotétramères sans domaine transmembranaire.",
      "Une intégrine est un hétérodimère αβ.",
      "Les plaques focales ne contiennent aucune protéine de signalisation."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les intégrines couplent la matrice extracellulaire au cytosquelette et à la signalisation.",
    "choiceExplanations": [
      "Vrai. Chaque sous-unité possède une traversée membranaire.",
      "Faux. Ce sont des hétérodimères αβ transmembranaires.",
      "Vrai. Une intégrine est un hétérodimère αβ.",
      "Faux. Elles recrutent kinases et protéines de structure."
    ]
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les connexines et connexons :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "connexin-gap-junction"
    },
    "choices": [
      "Deux connexons de cellules voisines forment un canal.",
      "Des mutations de connexines peuvent provoquer des surdités congénitales.",
      "Un connexon est formé par deux connexines uniquement.",
      "Une connexine possède quatre domaines transmembranaires."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les jonctions communicantes résultent de l’assemblage de connexines en deux connexons appariés.",
    "choiceExplanations": [
      "Vrai. Deux connexons de cellules voisines forment un canal.",
      "Vrai. Des mutations de connexines peuvent provoquer des surdités congénitales.",
      "Faux. Il en associe six.",
      "Vrai. Une connexine possède quatre domaines transmembranaires."
    ]
  },
  {
    "order": 96,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les familles de molécules d’adhérence :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "adhesion-families"
    },
    "choices": [
      "Elles sont importantes dans la communication tissulaire.",
      "Elles n’interviennent jamais dans la migration.",
      "Elles participent à la migration cellulaire.",
      "Les molécules d’adhérence sont uniquement des lipides."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les molécules d’adhérence organisent les contacts entre cellules et matrice.",
    "choiceExplanations": [
      "Vrai. Elles sont importantes dans la communication tissulaire.",
      "Faux. Elles y participent.",
      "Vrai. Elles participent à la migration cellulaire.",
      "Faux. Ce sont des protéines membranaires."
    ]
  },
  {
    "order": 97,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les sélectines et cadhérines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "selectin-cadherin"
    },
    "choices": [
      "Les cadhérines réalisent des interactions homotypiques.",
      "Les sélectines reconnaissent des glycanes sialyl-Lewis.",
      "E-, L- et P-sélectines correspondent à endothélium, leucocytes et plaquettes.",
      "Les cadhérines ne nécessitent aucun calcium."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Sélectines et cadhérines utilisent des mécanismes de reconnaissance différents.",
    "choiceExplanations": [
      "Vrai. Les cadhérines réalisent des interactions homotypiques.",
      "Vrai. Les sélectines reconnaissent des glycanes sialyl-Lewis.",
      "Vrai. E-, L- et P-sélectines correspondent à endothélium, leucocytes et plaquettes.",
      "Faux. Le Ca2+ est nécessaire."
    ]
  },
  {
    "order": 98,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les Ig-CAM :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "igcam"
    },
    "choices": [
      "Elles ne possèdent aucun domaine Ig.",
      "ICAM-1 participe aux interactions leucocyte-endothélium.",
      "Elles possèdent des domaines de type immunoglobuline.",
      "Une interaction hétérotypique associe deux récepteurs identiques."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les Ig-CAM utilisent des domaines apparentés aux immunoglobulines pour l’adhérence.",
    "choiceExplanations": [
      "Faux. Ces domaines les caractérisent.",
      "Vrai. ICAM-1 participe aux interactions leucocyte-endothélium.",
      "Vrai. Elles possèdent des domaines de type immunoglobuline.",
      "Faux. Elle associe des partenaires différents."
    ]
  },
  {
    "order": 99,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les intégrines et plaques d’adhésion focale :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "integrin-focal-adhesion"
    },
    "choices": [
      "Chaque sous-unité possède une traversée membranaire.",
      "Elles recrutent des protéines reliant la matrice au cytosquelette d’actine.",
      "Une intégrine est un hétérodimère αβ.",
      "Elles possèdent toujours une activité kinase intrinsèque."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les intégrines couplent la matrice extracellulaire au cytosquelette et à la signalisation.",
    "choiceExplanations": [
      "Vrai. Chaque sous-unité possède une traversée membranaire.",
      "Vrai. Elles recrutent des protéines reliant la matrice au cytosquelette d’actine.",
      "Vrai. Une intégrine est un hétérodimère αβ.",
      "Faux. Elles recrutent des protéines intracellulaires."
    ]
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les connexines et connexons :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "connexin-gap-junction"
    },
    "choices": [
      "Une connexine possède quatre domaines transmembranaires.",
      "Les connexines ne sont jamais impliquées dans une maladie génétique.",
      "Un connexon est formé par deux connexines uniquement.",
      "Deux connexons de cellules voisines forment un canal."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les jonctions communicantes résultent de l’assemblage de connexines en deux connexons appariés.",
    "choiceExplanations": [
      "Vrai. Une connexine possède quatre domaines transmembranaires.",
      "Faux. Certaines mutations provoquent des surdités.",
      "Faux. Il en associe six.",
      "Vrai. Deux connexons de cellules voisines forment un canal."
    ]
  },
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les familles de molécules d’adhérence, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "adhesion-families"
    },
    "choices": [
      "Les quatre familles citées sont sélectines, cadhérines, Ig-CAM et intégrines.",
      "Elles n’interviennent jamais dans la migration.",
      "Elles participent à la migration cellulaire.",
      "Les molécules d’adhérence sont uniquement des lipides."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les molécules d’adhérence organisent les contacts entre cellules et matrice.",
    "choiceExplanations": [
      "Vrai. Les quatre familles citées sont sélectines, cadhérines, Ig-CAM et intégrines.",
      "Faux. Elles y participent.",
      "Vrai. Elles participent à la migration cellulaire.",
      "Faux. Ce sont des protéines membranaires."
    ]
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les sélectines et cadhérines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "selectin-cadherin"
    },
    "choices": [
      "Les cadhérines ne nécessitent aucun calcium.",
      "Une interaction homotypique associe des récepteurs différents.",
      "Les cadhérines réalisent des interactions homotypiques.",
      "Les sélectines reconnaissent des glycanes sialyl-Lewis."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Sélectines et cadhérines utilisent des mécanismes de reconnaissance différents.",
    "choiceExplanations": [
      "Faux. Le Ca2+ est nécessaire.",
      "Faux. Elle associe des récepteurs identiques.",
      "Vrai. Les cadhérines réalisent des interactions homotypiques.",
      "Vrai. Les sélectines reconnaissent des glycanes sialyl-Lewis."
    ]
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les Ig-CAM, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "igcam"
    },
    "choices": [
      "Ig-CAM signifie Immunoglobulin-Cell Adhesion Molecules.",
      "Une interaction hétérotypique associe deux récepteurs identiques.",
      "ICAM-1 empêche toute interaction leucocytaire.",
      "ICAM-1 participe aux interactions leucocyte-endothélium."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les Ig-CAM utilisent des domaines apparentés aux immunoglobulines pour l’adhérence.",
    "choiceExplanations": [
      "Vrai. Ig-CAM signifie Immunoglobulin-Cell Adhesion Molecules.",
      "Faux. Elle associe des partenaires différents.",
      "Faux. Elle participe à leur adhérence endothéliale.",
      "Vrai. ICAM-1 participe aux interactions leucocyte-endothélium."
    ]
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les intégrines et plaques d’adhésion focale, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "integrin-focal-adhesion"
    },
    "choices": [
      "Les intégrines sont des homotétramères sans domaine transmembranaire.",
      "Elles recrutent des protéines reliant la matrice au cytosquelette d’actine.",
      "La liaison au ligand est indépendante de Ca2+ et Mg2+.",
      "Chaque sous-unité possède une traversée membranaire."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les intégrines couplent la matrice extracellulaire au cytosquelette et à la signalisation.",
    "choiceExplanations": [
      "Faux. Ce sont des hétérodimères αβ transmembranaires.",
      "Vrai. Elles recrutent des protéines reliant la matrice au cytosquelette d’actine.",
      "Faux. Les cations divalents sont nécessaires.",
      "Vrai. Chaque sous-unité possède une traversée membranaire."
    ]
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les connexines et connexons, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "connexin-gap-junction"
    },
    "choices": [
      "Deux connexons de cellules voisines forment un canal.",
      "Une connexine possède quatre domaines transmembranaires.",
      "Une connexine possède sept traversées et active une protéine G.",
      "Le canal de jonction est formé dans une seule membrane sans partenaire."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les jonctions communicantes résultent de l’assemblage de connexines en deux connexons appariés.",
    "choiceExplanations": [
      "Vrai. Deux connexons de cellules voisines forment un canal.",
      "Vrai. Une connexine possède quatre domaines transmembranaires.",
      "Faux. Elle possède quatre traversées.",
      "Faux. Deux connexons s’alignent entre deux cellules."
    ]
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les familles de molécules d’adhérence, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "adhesion-families"
    },
    "choices": [
      "La matrice extracellulaire ne possède aucun ligand d’adhérence.",
      "Elles n’interviennent jamais dans la migration.",
      "Elles sont importantes dans la communication tissulaire.",
      "Elles assurent des interactions cellule-cellule ou cellule-matrice."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les molécules d’adhérence organisent les contacts entre cellules et matrice.",
    "choiceExplanations": [
      "Faux. Les intégrines s’y fixent.",
      "Faux. Elles y participent.",
      "Vrai. Elles sont importantes dans la communication tissulaire.",
      "Vrai. Elles assurent des interactions cellule-cellule ou cellule-matrice."
    ]
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les sélectines et cadhérines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "selectin-cadherin"
    },
    "choices": [
      "Les sélectines reconnaissent des glycanes sialyl-Lewis.",
      "Les cadhérines réalisent des interactions homotypiques.",
      "Les cadhérines ne nécessitent aucun calcium.",
      "Une interaction homotypique associe des récepteurs différents."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Sélectines et cadhérines utilisent des mécanismes de reconnaissance différents.",
    "choiceExplanations": [
      "Vrai. Les sélectines reconnaissent des glycanes sialyl-Lewis.",
      "Vrai. Les cadhérines réalisent des interactions homotypiques.",
      "Faux. Le Ca2+ est nécessaire.",
      "Faux. Elle associe des récepteurs identiques."
    ]
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les Ig-CAM, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "igcam"
    },
    "choices": [
      "Elles réalisent des interactions hétérotypiques.",
      "ICAM-1 empêche toute interaction leucocytaire.",
      "Elles possèdent des domaines de type immunoglobuline.",
      "Elles ne possèdent aucun domaine Ig."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les Ig-CAM utilisent des domaines apparentés aux immunoglobulines pour l’adhérence.",
    "choiceExplanations": [
      "Vrai. Elles réalisent des interactions hétérotypiques.",
      "Faux. Elle participe à leur adhérence endothéliale.",
      "Vrai. Elles possèdent des domaines de type immunoglobuline.",
      "Faux. Ces domaines les caractérisent."
    ]
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les intégrines et plaques d’adhésion focale, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "integrin-focal-adhesion"
    },
    "choices": [
      "La liaison au ligand est indépendante de Ca2+ et Mg2+.",
      "Les intégrines sont des homotétramères sans domaine transmembranaire.",
      "Chaque sous-unité possède une traversée membranaire.",
      "Les intégrines reconnaissent notamment la séquence RGD."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les intégrines couplent la matrice extracellulaire au cytosquelette et à la signalisation.",
    "choiceExplanations": [
      "Faux. Les cations divalents sont nécessaires.",
      "Faux. Ce sont des hétérodimères αβ transmembranaires.",
      "Vrai. Chaque sous-unité possède une traversée membranaire.",
      "Vrai. Les intégrines reconnaissent notamment la séquence RGD."
    ]
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les connexines et connexons, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "connexin-gap-junction"
    },
    "choices": [
      "Une connexine possède sept traversées et active une protéine G.",
      "Des mutations de connexines peuvent provoquer des surdités congénitales.",
      "Six connexines forment un connexon.",
      "Le canal de jonction est formé dans une seule membrane sans partenaire."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les jonctions communicantes résultent de l’assemblage de connexines en deux connexons appariés.",
    "choiceExplanations": [
      "Faux. Elle possède quatre traversées.",
      "Vrai. Des mutations de connexines peuvent provoquer des surdités congénitales.",
      "Vrai. Six connexines forment un connexon.",
      "Faux. Deux connexons s’alignent entre deux cellules."
    ]
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les familles de molécules d’adhérence. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "adhesion-families"
    },
    "choices": [
      "Elles sont importantes dans la communication tissulaire.",
      "Les molécules d’adhérence sont uniquement des lipides.",
      "La matrice extracellulaire ne possède aucun ligand d’adhérence.",
      "Les quatre familles citées sont sélectines, cadhérines, Ig-CAM et intégrines."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les molécules d’adhérence organisent les contacts entre cellules et matrice.",
    "choiceExplanations": [
      "Vrai. Elles sont importantes dans la communication tissulaire.",
      "Faux. Ce sont des protéines membranaires.",
      "Faux. Les intégrines s’y fixent.",
      "Vrai. Les quatre familles citées sont sélectines, cadhérines, Ig-CAM et intégrines."
    ]
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les sélectines et cadhérines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "selectin-cadherin"
    },
    "choices": [
      "Une interaction homotypique associe des récepteurs différents.",
      "La cadhérine E n’a aucun intérêt en cancérologie.",
      "E-, L- et P-sélectines correspondent à endothélium, leucocytes et plaquettes.",
      "Les sélectines reconnaissent des glycanes sialyl-Lewis."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Sélectines et cadhérines utilisent des mécanismes de reconnaissance différents.",
    "choiceExplanations": [
      "Faux. Elle associe des récepteurs identiques.",
      "Faux. Elle peut servir de marqueur tumoral.",
      "Vrai. E-, L- et P-sélectines correspondent à endothélium, leucocytes et plaquettes.",
      "Vrai. Les sélectines reconnaissent des glycanes sialyl-Lewis."
    ]
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les Ig-CAM. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "igcam"
    },
    "choices": [
      "Les Ig-CAM sont des immunoglobulines circulantes uniquement.",
      "Ig-CAM signifie Immunoglobulin-Cell Adhesion Molecules.",
      "ICAM-1 participe aux interactions leucocyte-endothélium.",
      "Une interaction hétérotypique associe deux récepteurs identiques."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les Ig-CAM utilisent des domaines apparentés aux immunoglobulines pour l’adhérence.",
    "choiceExplanations": [
      "Faux. Ce sont des molécules d’adhérence.",
      "Vrai. Ig-CAM signifie Immunoglobulin-Cell Adhesion Molecules.",
      "Vrai. ICAM-1 participe aux interactions leucocyte-endothélium.",
      "Faux. Elle associe des partenaires différents."
    ]
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les intégrines et plaques d’adhésion focale. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "integrin-focal-adhesion"
    },
    "choices": [
      "Chaque sous-unité possède une traversée membranaire.",
      "Une intégrine est un hétérodimère αβ.",
      "Elles possèdent toujours une activité kinase intrinsèque.",
      "Les plaques focales ne contiennent aucune protéine de signalisation."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les intégrines couplent la matrice extracellulaire au cytosquelette et à la signalisation.",
    "choiceExplanations": [
      "Vrai. Chaque sous-unité possède une traversée membranaire.",
      "Vrai. Une intégrine est un hétérodimère αβ.",
      "Faux. Elles recrutent des protéines intracellulaires.",
      "Faux. Elles recrutent kinases et protéines de structure."
    ]
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un nouveau-né présente une surdité congénitale liée à une mutation de connexine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "connexin-gap-junction"
    },
    "choices": [
      "Le canal de jonction est formé dans une seule membrane sans partenaire.",
      "Une connexine possède quatre domaines transmembranaires.",
      "Une connexine possède sept traversées et active une protéine G.",
      "Six connexines forment un connexon."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les jonctions communicantes résultent de l’assemblage de connexines en deux connexons appariés.",
    "choiceExplanations": [
      "Faux. Deux connexons s’alignent entre deux cellules.",
      "Vrai. Une connexine possède quatre domaines transmembranaires.",
      "Faux. Elle possède quatre traversées.",
      "Vrai. Six connexines forment un connexon."
    ]
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les familles de molécules d’adhérence. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "adhesion-families"
    },
    "choices": [
      "Les quatre familles citées sont sélectines, cadhérines, Ig-CAM et intégrines.",
      "Il n’existe qu’une seule famille.",
      "Elles n’interviennent jamais dans la migration.",
      "Elles assurent des interactions cellule-cellule ou cellule-matrice."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les molécules d’adhérence organisent les contacts entre cellules et matrice.",
    "choiceExplanations": [
      "Vrai. Les quatre familles citées sont sélectines, cadhérines, Ig-CAM et intégrines.",
      "Faux. La fiche en distingue quatre.",
      "Faux. Elles y participent.",
      "Vrai. Elles assurent des interactions cellule-cellule ou cellule-matrice."
    ]
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les sélectines et cadhérines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "selectin-cadherin"
    },
    "choices": [
      "Les cadhérines nécessitent du Ca2+.",
      "Les sélectines reconnaissent des glycanes sialyl-Lewis.",
      "La cadhérine E n’a aucun intérêt en cancérologie.",
      "Les sélectines reconnaissent uniquement l’ADN."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Sélectines et cadhérines utilisent des mécanismes de reconnaissance différents.",
    "choiceExplanations": [
      "Vrai. Les cadhérines nécessitent du Ca2+.",
      "Vrai. Les sélectines reconnaissent des glycanes sialyl-Lewis.",
      "Faux. Elle peut servir de marqueur tumoral.",
      "Faux. Elles reconnaissent des glycanes de surface."
    ]
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les Ig-CAM. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "igcam"
    },
    "choices": [
      "Ig-CAM signifie Immunoglobulin-Cell Adhesion Molecules.",
      "Les Ig-CAM sont des immunoglobulines circulantes uniquement.",
      "Elles réalisent des interactions hétérotypiques.",
      "ICAM-1 empêche toute interaction leucocytaire."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les Ig-CAM utilisent des domaines apparentés aux immunoglobulines pour l’adhérence.",
    "choiceExplanations": [
      "Vrai. Ig-CAM signifie Immunoglobulin-Cell Adhesion Molecules.",
      "Faux. Ce sont des molécules d’adhérence.",
      "Vrai. Elles réalisent des interactions hétérotypiques.",
      "Faux. Elle participe à leur adhérence endothéliale."
    ]
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les intégrines et plaques d’adhésion focale. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "integrin-focal-adhesion"
    },
    "choices": [
      "Les plaques focales ne contiennent aucune protéine de signalisation.",
      "Les intégrines reconnaissent notamment la séquence RGD.",
      "Elles recrutent des protéines reliant la matrice au cytosquelette d’actine.",
      "Elles possèdent toujours une activité kinase intrinsèque."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les intégrines couplent la matrice extracellulaire au cytosquelette et à la signalisation.",
    "choiceExplanations": [
      "Faux. Elles recrutent kinases et protéines de structure.",
      "Vrai. Les intégrines reconnaissent notamment la séquence RGD.",
      "Vrai. Elles recrutent des protéines reliant la matrice au cytosquelette d’actine.",
      "Faux. Elles recrutent des protéines intracellulaires."
    ]
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un nouveau-né présente une surdité congénitale liée à une mutation de connexine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "connexin-gap-junction"
    },
    "choices": [
      "Un connexon est formé par deux connexines uniquement.",
      "Des mutations de connexines peuvent provoquer des surdités congénitales.",
      "Six connexines forment un connexon.",
      "Une connexine possède sept traversées et active une protéine G."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les jonctions communicantes résultent de l’assemblage de connexines en deux connexons appariés.",
    "choiceExplanations": [
      "Faux. Il en associe six.",
      "Vrai. Des mutations de connexines peuvent provoquer des surdités congénitales.",
      "Vrai. Six connexines forment un connexon.",
      "Faux. Elle possède quatre traversées."
    ]
  }
];
