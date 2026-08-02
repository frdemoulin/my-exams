import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "31": [
    "les rôles énergie, influx nerveux et enzymes"
  ],
  "32": [
    "la matrice extracellulaire"
  ],
  "33": [
    "l’abondance et les critères des collagènes"
  ],
  "34": [
    "le motif Gly-X-X’ du collagène"
  ],
  "35": [
    "la classification des collagènes"
  ],
  "36": [
    "les rôles énergie, influx nerveux et enzymes"
  ],
  "37": [
    "la matrice extracellulaire"
  ],
  "38": [
    "l’abondance et les critères des collagènes"
  ],
  "39": [
    "le motif Gly-X-X’ du collagène"
  ],
  "40": [
    "la classification des collagènes"
  ],
  "41": [
    "les rôles énergie, influx nerveux et enzymes"
  ],
  "42": [
    "la matrice extracellulaire"
  ],
  "43": [
    "l’abondance et les critères des collagènes"
  ],
  "44": [
    "le motif Gly-X-X’ du collagène"
  ],
  "45": [
    "la classification des collagènes"
  ],
  "46": [
    "les rôles énergie, influx nerveux et enzymes"
  ],
  "47": [
    "la matrice extracellulaire"
  ],
  "48": [
    "l’abondance et les critères des collagènes"
  ],
  "49": [
    "le motif Gly-X-X’ du collagène"
  ],
  "50": [
    "la classification des collagènes"
  ],
  "51": [
    "les rôles énergie, influx nerveux et enzymes"
  ],
  "52": [
    "la matrice extracellulaire"
  ],
  "53": [
    "l’abondance et les critères des collagènes"
  ],
  "54": [
    "le motif Gly-X-X’ du collagène"
  ],
  "55": [
    "la classification des collagènes"
  ],
  "56": [
    "les rôles énergie, influx nerveux et enzymes"
  ],
  "57": [
    "la matrice extracellulaire"
  ],
  "58": [
    "l’abondance et les critères des collagènes"
  ],
  "59": [
    "le motif Gly-X-X’ du collagène"
  ],
  "60": [
    "la classification des collagènes"
  ]
};

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "matrice-collagenes-1",
    "title": "Rôles énergétiques et matrice extracellulaire",
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
    "slug": "matrice-collagenes-2",
    "title": "Famille des collagènes",
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
    "slug": "matrice-collagenes-3",
    "title": "Identification des protéines matricielles",
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
    "question": "À propos de les rôles énergie, influx nerveux et enzymes :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-role-acronym"
    },
    "choices": [
      "Les enzymes ont des rôles majeurs dans le métabolisme.",
      "Une protéine peut avoir une fonction différente selon sa structure.",
      "En dénutrition, les protéines peuvent fournir des acides aminés énergétiques.",
      "Toutes les protéines ont une fonction identique."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les protéines interviennent dans l’énergie, l’excitabilité et la catalyse.",
    "choiceExplanations": [
      "Vrai. Les enzymes ont des rôles majeurs dans le métabolisme.",
      "Vrai. Une protéine peut avoir une fonction différente selon sa structure.",
      "Vrai. En dénutrition, les protéines peuvent fournir des acides aminés énergétiques.",
      "Faux. Leurs fonctions sont diverses."
    ]
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la matrice extracellulaire :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "extracellular-matrix"
    },
    "choices": [
      "Elle forme un réseau autour des cellules.",
      "La matrice extracellulaire est située uniquement dans le noyau.",
      "Les collagènes sont absents de la matrice.",
      "Plusieurs protéines matricielles ont une longue demi-vie."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La matrice extracellulaire constitue un réseau structural et fonctionnel tissulaire.",
    "choiceExplanations": [
      "Vrai. Elle forme un réseau autour des cellules.",
      "Faux. Elle entoure les cellules.",
      "Faux. Ils en sont des composants majeurs.",
      "Vrai. Plusieurs protéines matricielles ont une longue demi-vie."
    ]
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’abondance et les critères des collagènes :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-overview"
    },
    "choices": [
      "Les collagènes représentent environ un tiers des protéines de l’organisme.",
      "La famille comprend 28 types numérotés I à XXVIII.",
      "Toute protéine à triple hélice est obligatoirement un collagène.",
      "Il forme des assemblages supramoléculaires."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les collagènes sont définis par localisation matricielle, triple hélice et assemblages.",
    "choiceExplanations": [
      "Vrai. Les collagènes représentent environ un tiers des protéines de l’organisme.",
      "Vrai. La famille comprend 28 types numérotés I à XXVIII.",
      "Faux. Certaines protéines possèdent ce domaine sans être classées collagènes.",
      "Vrai. Il forme des assemblages supramoléculaires."
    ]
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le motif Gly-X-X’ du collagène :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-gly-x-y"
    },
    "choices": [
      "La glycine représente environ un résidu sur trois.",
      "Le motif Gly-X-X’ est répété dans la structure primaire.",
      "La 4-hydroxyproline n’existe pas dans le collagène.",
      "Le motif caractéristique est Trp-Lys-Met."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La petite glycine et les résidus proline/hydroxyproline permettent l’architecture de la triple hélice.",
    "choiceExplanations": [
      "Vrai. La glycine représente environ un résidu sur trois.",
      "Vrai. Le motif Gly-X-X’ est répété dans la structure primaire.",
      "Faux. Elle y est caractéristique.",
      "Faux. La fiche indique Gly-X-X’."
    ]
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la classification des collagènes :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-classification"
    },
    "choices": [
      "Les FACIT sont associés aux fibres avec triple hélice interrompue.",
      "Le type VII est un collagène de jonction ou d’ancrage.",
      "Les modes de polymérisation ne servent jamais à la classification.",
      "Le type IV forme des réseaux."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les collagènes sont classés selon leur mode d’assemblage supramoléculaire.",
    "choiceExplanations": [
      "Vrai. Les FACIT sont associés aux fibres avec triple hélice interrompue.",
      "Vrai. Le type VII est un collagène de jonction ou d’ancrage.",
      "Faux. Ils constituent un critère important.",
      "Vrai. Le type IV forme des réseaux."
    ]
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les rôles énergie, influx nerveux et enzymes :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-role-acronym"
    },
    "choices": [
      "Les enzymes ont des rôles majeurs dans le métabolisme.",
      "Les canaux ioniques participent à l’influx nerveux.",
      "Toutes les protéines ont une fonction identique.",
      "L’influx nerveux est indépendant de tout canal ionique."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les protéines interviennent dans l’énergie, l’excitabilité et la catalyse.",
    "choiceExplanations": [
      "Vrai. Les enzymes ont des rôles majeurs dans le métabolisme.",
      "Vrai. Les canaux ioniques participent à l’influx nerveux.",
      "Faux. Leurs fonctions sont diverses.",
      "Faux. Les canaux y participent."
    ]
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la matrice extracellulaire :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "extracellular-matrix"
    },
    "choices": [
      "Elle contient collagènes, élastine, glycoprotéines et protéoglycanes.",
      "Elle soutient l’organisation des cellules en tissus.",
      "La matrice extracellulaire est située uniquement dans le noyau.",
      "Plusieurs protéines matricielles ont une longue demi-vie."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La matrice extracellulaire constitue un réseau structural et fonctionnel tissulaire.",
    "choiceExplanations": [
      "Vrai. Elle contient collagènes, élastine, glycoprotéines et protéoglycanes.",
      "Vrai. Elle soutient l’organisation des cellules en tissus.",
      "Faux. Elle entoure les cellules.",
      "Vrai. Plusieurs protéines matricielles ont une longue demi-vie."
    ]
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’abondance et les critères des collagènes :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-overview"
    },
    "choices": [
      "La famille comprend 28 types numérotés I à XXVIII.",
      "Il n’existe qu’un seul type de collagène.",
      "Un collagène possède des domaines en triple hélice.",
      "Toute protéine à triple hélice est obligatoirement un collagène."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les collagènes sont définis par localisation matricielle, triple hélice et assemblages.",
    "choiceExplanations": [
      "Vrai. La famille comprend 28 types numérotés I à XXVIII.",
      "Faux. La fiche en cite 28.",
      "Vrai. Un collagène possède des domaines en triple hélice.",
      "Faux. Certaines protéines possèdent ce domaine sans être classées collagènes."
    ]
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le motif Gly-X-X’ du collagène :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-gly-x-y"
    },
    "choices": [
      "Le motif Gly-X-X’ est répété dans la structure primaire.",
      "X’ peut être une 4-hydroxyproline.",
      "La glycine est exclue du centre de la triple hélice.",
      "La glycine représente environ un résidu sur trois."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La petite glycine et les résidus proline/hydroxyproline permettent l’architecture de la triple hélice.",
    "choiceExplanations": [
      "Vrai. Le motif Gly-X-X’ est répété dans la structure primaire.",
      "Vrai. X’ peut être une 4-hydroxyproline.",
      "Faux. Son faible encombrement y est essentiel.",
      "Vrai. La glycine représente environ un résidu sur trois."
    ]
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la classification des collagènes :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-classification"
    },
    "choices": [
      "Les collagènes fibrillaires incluent notamment les types I, II et III.",
      "Les modes de polymérisation ne servent jamais à la classification.",
      "Le type IV est le principal collagène fibrillaire du tendon dans la fiche.",
      "Le type VII est un collagène de jonction ou d’ancrage."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les collagènes sont classés selon leur mode d’assemblage supramoléculaire.",
    "choiceExplanations": [
      "Vrai. Les collagènes fibrillaires incluent notamment les types I, II et III.",
      "Faux. Ils constituent un critère important.",
      "Faux. Il forme des réseaux et appartient aux membranes basales.",
      "Vrai. Le type VII est un collagène de jonction ou d’ancrage."
    ]
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les rôles énergie, influx nerveux et enzymes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-role-acronym"
    },
    "choices": [
      "Les enzymes ont des rôles majeurs dans le métabolisme.",
      "Toutes les protéines ont une fonction identique.",
      "En dénutrition, les protéines peuvent fournir des acides aminés énergétiques.",
      "Les enzymes sont sans rôle métabolique."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les protéines interviennent dans l’énergie, l’excitabilité et la catalyse.",
    "choiceExplanations": [
      "Vrai. Les enzymes ont des rôles majeurs dans le métabolisme.",
      "Faux. Leurs fonctions sont diverses.",
      "Vrai. En dénutrition, les protéines peuvent fournir des acides aminés énergétiques.",
      "Faux. Elles catalysent de nombreuses réactions."
    ]
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la matrice extracellulaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "extracellular-matrix"
    },
    "choices": [
      "Elle forme un réseau autour des cellules.",
      "Elle est composée exclusivement de lipides.",
      "Les collagènes sont absents de la matrice.",
      "Plusieurs protéines matricielles ont une longue demi-vie."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La matrice extracellulaire constitue un réseau structural et fonctionnel tissulaire.",
    "choiceExplanations": [
      "Vrai. Elle forme un réseau autour des cellules.",
      "Faux. Elle contient surtout des macromolécules protéiques et glycosylées.",
      "Faux. Ils en sont des composants majeurs.",
      "Vrai. Plusieurs protéines matricielles ont une longue demi-vie."
    ]
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’abondance et les critères des collagènes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-overview"
    },
    "choices": [
      "Toute protéine à triple hélice est obligatoirement un collagène.",
      "Les collagènes ne sont jamais extracellulaires.",
      "La famille comprend 28 types numérotés I à XXVIII.",
      "Les collagènes représentent environ un tiers des protéines de l’organisme."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les collagènes sont définis par localisation matricielle, triple hélice et assemblages.",
    "choiceExplanations": [
      "Faux. Certaines protéines possèdent ce domaine sans être classées collagènes.",
      "Faux. Leur présence matricielle est un critère.",
      "Vrai. La famille comprend 28 types numérotés I à XXVIII.",
      "Vrai. Les collagènes représentent environ un tiers des protéines de l’organisme."
    ]
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le motif Gly-X-X’ du collagène, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-gly-x-y"
    },
    "choices": [
      "La glycine est exclue du centre de la triple hélice.",
      "X’ peut être une 4-hydroxyproline.",
      "X est fréquemment une proline.",
      "Le motif caractéristique est Trp-Lys-Met."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La petite glycine et les résidus proline/hydroxyproline permettent l’architecture de la triple hélice.",
    "choiceExplanations": [
      "Faux. Son faible encombrement y est essentiel.",
      "Vrai. X’ peut être une 4-hydroxyproline.",
      "Vrai. X est fréquemment une proline.",
      "Faux. La fiche indique Gly-X-X’."
    ]
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la classification des collagènes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-classification"
    },
    "choices": [
      "Le type IV est le principal collagène fibrillaire du tendon dans la fiche.",
      "Le type VII est un collagène transmembranaire dans la classification donnée.",
      "Le type VII est un collagène de jonction ou d’ancrage.",
      "Les FACIT sont associés aux fibres avec triple hélice interrompue."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les collagènes sont classés selon leur mode d’assemblage supramoléculaire.",
    "choiceExplanations": [
      "Faux. Il forme des réseaux et appartient aux membranes basales.",
      "Faux. Il est classé jonction/ancrage.",
      "Vrai. Le type VII est un collagène de jonction ou d’ancrage.",
      "Vrai. Les FACIT sont associés aux fibres avec triple hélice interrompue."
    ]
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les rôles énergie, influx nerveux et enzymes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-role-acronym"
    },
    "choices": [
      "Les enzymes ont des rôles majeurs dans le métabolisme.",
      "L’influx nerveux est indépendant de tout canal ionique.",
      "Une protéine peut avoir une fonction différente selon sa structure.",
      "Toutes les protéines ont une fonction identique."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les protéines interviennent dans l’énergie, l’excitabilité et la catalyse.",
    "choiceExplanations": [
      "Vrai. Les enzymes ont des rôles majeurs dans le métabolisme.",
      "Faux. Les canaux y participent.",
      "Vrai. Une protéine peut avoir une fonction différente selon sa structure.",
      "Faux. Leurs fonctions sont diverses."
    ]
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la matrice extracellulaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "extracellular-matrix"
    },
    "choices": [
      "Elle n’a aucun rôle de support.",
      "Elle soutient l’organisation des cellules en tissus.",
      "Plusieurs protéines matricielles ont une longue demi-vie.",
      "Les collagènes sont absents de la matrice."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La matrice extracellulaire constitue un réseau structural et fonctionnel tissulaire.",
    "choiceExplanations": [
      "Faux. Elle organise les tissus.",
      "Vrai. Elle soutient l’organisation des cellules en tissus.",
      "Vrai. Plusieurs protéines matricielles ont une longue demi-vie.",
      "Faux. Ils en sont des composants majeurs."
    ]
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’abondance et les critères des collagènes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-overview"
    },
    "choices": [
      "Les collagènes ne sont jamais extracellulaires.",
      "Les collagènes représentent environ un tiers des protéines de l’organisme.",
      "La famille comprend 28 types numérotés I à XXVIII.",
      "Toute protéine à triple hélice est obligatoirement un collagène."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les collagènes sont définis par localisation matricielle, triple hélice et assemblages.",
    "choiceExplanations": [
      "Faux. Leur présence matricielle est un critère.",
      "Vrai. Les collagènes représentent environ un tiers des protéines de l’organisme.",
      "Vrai. La famille comprend 28 types numérotés I à XXVIII.",
      "Faux. Certaines protéines possèdent ce domaine sans être classées collagènes."
    ]
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le motif Gly-X-X’ du collagène, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-gly-x-y"
    },
    "choices": [
      "La 4-hydroxyproline n’existe pas dans le collagène.",
      "Le motif n’est présent qu’une seule fois.",
      "Le motif Gly-X-X’ est répété dans la structure primaire.",
      "X est fréquemment une proline."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La petite glycine et les résidus proline/hydroxyproline permettent l’architecture de la triple hélice.",
    "choiceExplanations": [
      "Faux. Elle y est caractéristique.",
      "Faux. Il est répété.",
      "Vrai. Le motif Gly-X-X’ est répété dans la structure primaire.",
      "Vrai. X est fréquemment une proline."
    ]
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la classification des collagènes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-classification"
    },
    "choices": [
      "Les modes de polymérisation ne servent jamais à la classification.",
      "Le type IV forme des réseaux.",
      "C1q est obligatoirement classé comme collagène.",
      "Les collagènes fibrillaires incluent notamment les types I, II et III."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les collagènes sont classés selon leur mode d’assemblage supramoléculaire.",
    "choiceExplanations": [
      "Faux. Ils constituent un critère important.",
      "Vrai. Le type IV forme des réseaux.",
      "Faux. Il possède des domaines de type collagène sans être un collagène.",
      "Vrai. Les collagènes fibrillaires incluent notamment les types I, II et III."
    ]
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les rôles énergie, influx nerveux et enzymes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-role-acronym"
    },
    "choices": [
      "Les canaux ioniques participent à l’influx nerveux.",
      "Toutes les protéines ont une fonction identique.",
      "Les enzymes ont des rôles majeurs dans le métabolisme.",
      "Les enzymes sont sans rôle métabolique."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les protéines interviennent dans l’énergie, l’excitabilité et la catalyse.",
    "choiceExplanations": [
      "Vrai. Les canaux ioniques participent à l’influx nerveux.",
      "Faux. Leurs fonctions sont diverses.",
      "Vrai. Les enzymes ont des rôles majeurs dans le métabolisme.",
      "Faux. Elles catalysent de nombreuses réactions."
    ]
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la matrice extracellulaire. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "extracellular-matrix"
    },
    "choices": [
      "Elle est composée exclusivement de lipides.",
      "La matrice extracellulaire est située uniquement dans le noyau.",
      "Plusieurs protéines matricielles ont une longue demi-vie.",
      "Elle forme un réseau autour des cellules."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La matrice extracellulaire constitue un réseau structural et fonctionnel tissulaire.",
    "choiceExplanations": [
      "Faux. Elle contient surtout des macromolécules protéiques et glycosylées.",
      "Faux. Elle entoure les cellules.",
      "Vrai. Plusieurs protéines matricielles ont une longue demi-vie.",
      "Vrai. Elle forme un réseau autour des cellules."
    ]
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’abondance et les critères des collagènes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-overview"
    },
    "choices": [
      "Il n’existe qu’un seul type de collagène.",
      "La famille comprend 28 types numérotés I à XXVIII.",
      "Un collagène possède des domaines en triple hélice.",
      "Les collagènes sont des protéines rares représentant moins de 0,01 %."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les collagènes sont définis par localisation matricielle, triple hélice et assemblages.",
    "choiceExplanations": [
      "Faux. La fiche en cite 28.",
      "Vrai. La famille comprend 28 types numérotés I à XXVIII.",
      "Vrai. Un collagène possède des domaines en triple hélice.",
      "Faux. Ils sont très abondants."
    ]
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le motif Gly-X-X’ du collagène. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-gly-x-y"
    },
    "choices": [
      "X est fréquemment une proline.",
      "La glycine représente environ un résidu sur trois.",
      "La glycine est exclue du centre de la triple hélice.",
      "Le motif n’est présent qu’une seule fois."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La petite glycine et les résidus proline/hydroxyproline permettent l’architecture de la triple hélice.",
    "choiceExplanations": [
      "Vrai. X est fréquemment une proline.",
      "Vrai. La glycine représente environ un résidu sur trois.",
      "Faux. Son faible encombrement y est essentiel.",
      "Faux. Il est répété."
    ]
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la classification des collagènes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-classification"
    },
    "choices": [
      "Le type IV forme des réseaux.",
      "Le type VII est un collagène de jonction ou d’ancrage.",
      "Les modes de polymérisation ne servent jamais à la classification.",
      "C1q est obligatoirement classé comme collagène."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les collagènes sont classés selon leur mode d’assemblage supramoléculaire.",
    "choiceExplanations": [
      "Vrai. Le type IV forme des réseaux.",
      "Vrai. Le type VII est un collagène de jonction ou d’ancrage.",
      "Faux. Ils constituent un critère important.",
      "Faux. Il possède des domaines de type collagène sans être un collagène."
    ]
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les rôles énergie, influx nerveux et enzymes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-role-acronym"
    },
    "choices": [
      "Les protéines ne peuvent jamais être catabolisées en dénutrition.",
      "Les canaux ioniques participent à l’influx nerveux.",
      "Les enzymes ont des rôles majeurs dans le métabolisme.",
      "Les enzymes sont sans rôle métabolique."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les protéines interviennent dans l’énergie, l’excitabilité et la catalyse.",
    "choiceExplanations": [
      "Faux. Elles peuvent fournir des substrats énergétiques.",
      "Vrai. Les canaux ioniques participent à l’influx nerveux.",
      "Vrai. Les enzymes ont des rôles majeurs dans le métabolisme.",
      "Faux. Elles catalysent de nombreuses réactions."
    ]
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la matrice extracellulaire. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "extracellular-matrix"
    },
    "choices": [
      "Les collagènes sont absents de la matrice.",
      "Elle n’a aucun rôle de support.",
      "Elle contient collagènes, élastine, glycoprotéines et protéoglycanes.",
      "Plusieurs protéines matricielles ont une longue demi-vie."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La matrice extracellulaire constitue un réseau structural et fonctionnel tissulaire.",
    "choiceExplanations": [
      "Faux. Ils en sont des composants majeurs.",
      "Faux. Elle organise les tissus.",
      "Vrai. Elle contient collagènes, élastine, glycoprotéines et protéoglycanes.",
      "Vrai. Plusieurs protéines matricielles ont une longue demi-vie."
    ]
  },
  {
    "order": 58,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’abondance et les critères des collagènes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-overview"
    },
    "choices": [
      "Les collagènes ne sont jamais extracellulaires.",
      "Les collagènes sont des protéines rares représentant moins de 0,01 %.",
      "Un collagène possède des domaines en triple hélice.",
      "Il forme des assemblages supramoléculaires."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les collagènes sont définis par localisation matricielle, triple hélice et assemblages.",
    "choiceExplanations": [
      "Faux. Leur présence matricielle est un critère.",
      "Faux. Ils sont très abondants.",
      "Vrai. Un collagène possède des domaines en triple hélice.",
      "Vrai. Il forme des assemblages supramoléculaires."
    ]
  },
  {
    "order": 59,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le motif Gly-X-X’ du collagène. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-gly-x-y"
    },
    "choices": [
      "La 4-hydroxyproline n’existe pas dans le collagène.",
      "La glycine représente environ un résidu sur trois.",
      "X’ peut être une 4-hydroxyproline.",
      "La glycine est exclue du centre de la triple hélice."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La petite glycine et les résidus proline/hydroxyproline permettent l’architecture de la triple hélice.",
    "choiceExplanations": [
      "Faux. Elle y est caractéristique.",
      "Vrai. La glycine représente environ un résidu sur trois.",
      "Vrai. X’ peut être une 4-hydroxyproline.",
      "Faux. Son faible encombrement y est essentiel."
    ]
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la classification des collagènes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-classification"
    },
    "choices": [
      "Les modes de polymérisation ne servent jamais à la classification.",
      "Le type VII est un collagène transmembranaire dans la classification donnée.",
      "Le type VII est un collagène de jonction ou d’ancrage.",
      "Les collagènes fibrillaires incluent notamment les types I, II et III."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les collagènes sont classés selon leur mode d’assemblage supramoléculaire.",
    "choiceExplanations": [
      "Faux. Ils constituent un critère important.",
      "Faux. Il est classé jonction/ancrage.",
      "Vrai. Le type VII est un collagène de jonction ou d’ancrage.",
      "Vrai. Les collagènes fibrillaires incluent notamment les types I, II et III."
    ]
  }
];
