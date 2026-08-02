import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 5;

export const SYNTHESIS_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "121": [
    "les myosines"
  ],
  "122": [
    "la structure de l’hémoglobine A"
  ],
  "123": [
    "la fixation de l’oxygène par l’hémoglobine"
  ],
  "124": [
    "le monoxyde de carbone et la méthémoglobine"
  ],
  "125": [
    "la drépanocytose, l’albumine et les apolipoprotéines"
  ],
  "126": [
    "les rôles énergie, influx nerveux et enzymes"
  ],
  "127": [
    "la matrice extracellulaire"
  ],
  "128": [
    "l’abondance et les critères des collagènes"
  ],
  "129": [
    "le motif Gly-X-X’ du collagène"
  ],
  "130": [
    "la classification des collagènes"
  ],
  "131": [
    "la chaîne alpha du collagène I"
  ],
  "132": [
    "la triple hélice du collagène"
  ],
  "133": [
    "les fibrilles de collagène I"
  ],
  "134": [
    "les liaisons croisées et fibres de collagène"
  ],
  "135": [
    "le collagène de type IV"
  ],
  "136": [
    "les glycoprotéines matricielles"
  ],
  "137": [
    "la fibronectine"
  ],
  "138": [
    "la laminine"
  ],
  "139": [
    "les constituants du cytosquelette"
  ],
  "140": [
    "l’actine et les microtubules"
  ]
};

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "roles-biologiques-proteines-partie-2-synthese-structures-fonctions",
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
    "slug": "roles-biologiques-proteines-partie-2-synthese-raisonnement",
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
    "question": "Dans une question transversale sur les myosines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "myosin-cycle"
    },
    "choices": [
      "Les myosines fonctionnent sans aucune énergie.",
      "Les myosines sont des moteurs moléculaires.",
      "Toutes les myosines ont exclusivement un rôle digestif.",
      "Elles interviennent dans migration, adhésion et transport intracellulaire."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les myosines convertissent l’énergie de l’ATP en mouvement sur les filaments d’actine.",
    "choiceExplanations": [
      "Faux. Le cycle dépend de l’ATP.",
      "Vrai. Les myosines sont des moteurs moléculaires.",
      "Faux. Elles interviennent dans motilité et transport.",
      "Vrai. Elles interviennent dans migration, adhésion et transport intracellulaire."
    ]
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure de l’hémoglobine A, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-structure"
    },
    "choices": [
      "Le fer fonctionnel est exclusivement Fe3+.",
      "L’hémoglobine contient un groupement prosthétique hème.",
      "L’hème est un glucide de réserve.",
      "Elle possède quatre hèmes et quatre sites de fixation de l’O2."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’hémoglobine A associe quatre globines et quatre hèmes pour transporter l’oxygène.",
    "choiceExplanations": [
      "Faux. Le fer Fe2+ fixe l’oxygène.",
      "Vrai. L’hémoglobine contient un groupement prosthétique hème.",
      "Faux. C’est un groupement prosthétique porphyrinique.",
      "Vrai. Elle possède quatre hèmes et quatre sites de fixation de l’O2."
    ]
  },
  {
    "order": 123,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la fixation de l’oxygène par l’hémoglobine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-conformations"
    },
    "choices": [
      "Le pH et la pression en CO2 influencent la fixation.",
      "Elle transporte l’O2 des tissus vers les poumons exclusivement.",
      "L’hémoglobine transporte uniquement du glucose.",
      "L’équilibre entre conformations influence l’affinité pour l’O2."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La fixation de l’oxygène est allostérique et dépend de l’environnement.",
    "choiceExplanations": [
      "Vrai. Le pH et la pression en CO2 influencent la fixation.",
      "Faux. Le trajet principal est poumons vers tissus.",
      "Faux. Elle transporte surtout les gaz respiratoires.",
      "Vrai. L’équilibre entre conformations influence l’affinité pour l’O2."
    ]
  },
  {
    "order": 124,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une personne est exposée à des fumées et présente une intoxication au monoxyde de carbone. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hemoglobin-anomalies"
    },
    "choices": [
      "Une intoxication au CO n’affecte pas le transport d’oxygène.",
      "Le CO possède une affinité pour l’hème supérieure à celle de l’O2.",
      "La méthémoglobine ne fixe pas correctement l’O2.",
      "La carboxyhémoglobine contient uniquement du CO2."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "CO et oxydation du fer perturbent la fonction de l’hème.",
    "choiceExplanations": [
      "Faux. Elle l’altère gravement.",
      "Vrai. Le CO possède une affinité pour l’hème supérieure à celle de l’O2.",
      "Vrai. La méthémoglobine ne fixe pas correctement l’O2.",
      "Faux. Elle résulte de la fixation du CO."
    ]
  },
  {
    "order": 125,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une anémie hémolytique avec hématies falciformes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sickle-albumin-lipoprotein"
    },
    "choices": [
      "L’HbS est plus soluble que l’HbA.",
      "L’HbS est moins soluble et peut s’agréger.",
      "L’albumine est synthétisée par les érythrocytes.",
      "L’albumine représente environ 60 % des protéines sériques et régule la pression oncotique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les protéines de transport sanguin illustrent effets structuraux, osmotiques et lipidiques.",
    "choiceExplanations": [
      "Faux. Sa solubilité diminue.",
      "Vrai. L’HbS est moins soluble et peut s’agréger.",
      "Faux. Elle est synthétisée par les hépatocytes.",
      "Vrai. L’albumine représente environ 60 % des protéines sériques et régule la pression oncotique."
    ]
  },
  {
    "order": 126,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les rôles énergie, influx nerveux et enzymes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-role-acronym"
    },
    "choices": [
      "Les canaux ioniques participent à l’influx nerveux.",
      "Les enzymes ont des rôles majeurs dans le métabolisme.",
      "Toutes les protéines ont une fonction identique.",
      "Les protéines ne peuvent jamais être catabolisées en dénutrition."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les protéines interviennent dans l’énergie, l’excitabilité et la catalyse.",
    "choiceExplanations": [
      "Vrai. Les canaux ioniques participent à l’influx nerveux.",
      "Vrai. Les enzymes ont des rôles majeurs dans le métabolisme.",
      "Faux. Leurs fonctions sont diverses.",
      "Faux. Elles peuvent fournir des substrats énergétiques."
    ]
  },
  {
    "order": 127,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la matrice extracellulaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "extracellular-matrix"
    },
    "choices": [
      "Plusieurs protéines matricielles ont une longue demi-vie.",
      "Elle n’a aucun rôle de support.",
      "Elle contient collagènes, élastine, glycoprotéines et protéoglycanes.",
      "La matrice extracellulaire est située uniquement dans le noyau."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La matrice extracellulaire constitue un réseau structural et fonctionnel tissulaire.",
    "choiceExplanations": [
      "Vrai. Plusieurs protéines matricielles ont une longue demi-vie.",
      "Faux. Elle organise les tissus.",
      "Vrai. Elle contient collagènes, élastine, glycoprotéines et protéoglycanes.",
      "Faux. Elle entoure les cellules."
    ]
  },
  {
    "order": 128,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’abondance et les critères des collagènes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-overview"
    },
    "choices": [
      "Il n’existe qu’un seul type de collagène.",
      "Un collagène possède des domaines en triple hélice.",
      "Les collagènes ne sont jamais extracellulaires.",
      "La famille comprend 28 types numérotés I à XXVIII."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les collagènes sont définis par localisation matricielle, triple hélice et assemblages.",
    "choiceExplanations": [
      "Faux. La fiche en cite 28.",
      "Vrai. Un collagène possède des domaines en triple hélice.",
      "Faux. Leur présence matricielle est un critère.",
      "Vrai. La famille comprend 28 types numérotés I à XXVIII."
    ]
  },
  {
    "order": 129,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le motif Gly-X-X’ du collagène, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-gly-x-y"
    },
    "choices": [
      "Le motif Gly-X-X’ est répété dans la structure primaire.",
      "Le motif n’est présent qu’une seule fois.",
      "La glycine est exclue du centre de la triple hélice.",
      "X’ peut être une 4-hydroxyproline."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La petite glycine et les résidus proline/hydroxyproline permettent l’architecture de la triple hélice.",
    "choiceExplanations": [
      "Vrai. Le motif Gly-X-X’ est répété dans la structure primaire.",
      "Faux. Il est répété.",
      "Faux. Son faible encombrement y est essentiel.",
      "Vrai. X’ peut être une 4-hydroxyproline."
    ]
  },
  {
    "order": 130,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la classification des collagènes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-classification"
    },
    "choices": [
      "Le type IV est le principal collagène fibrillaire du tendon dans la fiche.",
      "Le type VII est un collagène de jonction ou d’ancrage.",
      "Le type VII est un collagène transmembranaire dans la classification donnée.",
      "Les FACIT sont associés aux fibres avec triple hélice interrompue."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les collagènes sont classés selon leur mode d’assemblage supramoléculaire.",
    "choiceExplanations": [
      "Faux. Il forme des réseaux et appartient aux membranes basales.",
      "Vrai. Le type VII est un collagène de jonction ou d’ancrage.",
      "Faux. Il est classé jonction/ancrage.",
      "Vrai. Les FACIT sont associés aux fibres avec triple hélice interrompue."
    ]
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la chaîne alpha du collagène I, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-alpha-chain"
    },
    "choices": [
      "Elle comporte 3,6 résidus par tour comme l’hélice α.",
      "Elle n’est pas une hélice α classique.",
      "Elle comporte généralement trois résidus par tour.",
      "La chaîne est stabilisée uniquement par de nombreux ponts disulfure."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Chaque chaîne de collagène adopte une hélice gauche particulière riche en proline.",
    "choiceExplanations": [
      "Faux. La fiche indique généralement trois.",
      "Vrai. Elle n’est pas une hélice α classique.",
      "Vrai. Elle comporte généralement trois résidus par tour.",
      "Faux. La répulsion stérique et la composition jouent un rôle important."
    ]
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la triple hélice du collagène, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-triple-helix"
    },
    "choices": [
      "La superhélice finale est orientée à gauche dans la fiche.",
      "Les OH de l’hydroxyproline contribuent aux liaisons hydrogène.",
      "Le surenroulement forme une superhélice droite.",
      "La glycine est trop volumineuse pour le centre."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le surenroulement de trois chaînes forme la triple hélice droite du collagène.",
    "choiceExplanations": [
      "Faux. Elle est droite.",
      "Vrai. Les OH de l’hydroxyproline contribuent aux liaisons hydrogène.",
      "Vrai. Le surenroulement forme une superhélice droite.",
      "Faux. Elle est la plus petite chaîne latérale."
    ]
  },
  {
    "order": 133,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les fibrilles de collagène I, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-fibril"
    },
    "choices": [
      "Le tropocollagène est une enzyme cytosolique.",
      "Le décalage correspond à environ 67 nm.",
      "Les molécules de tropocollagène sont parfaitement superposées sans décalage.",
      "Il produit un aspect strié en microscopie électronique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’agencement décalé du tropocollagène explique la striation des fibrilles.",
    "choiceExplanations": [
      "Faux. C’est le monomère du collagène.",
      "Vrai. Le décalage correspond à environ 67 nm.",
      "Faux. Elles sont décalées.",
      "Vrai. Il produit un aspect strié en microscopie électronique."
    ]
  },
  {
    "order": 134,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les liaisons croisées et fibres de collagène, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-crosslinks"
    },
    "choices": [
      "La lysyl-oxydase agit exclusivement sur la glycine.",
      "Elles dérivent de résidus de lysine transformés par la lysyl-oxydase.",
      "Les fibrilles ne peuvent jamais former de faisceaux.",
      "Les liaisons croisées sont covalentes."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La réticulation covalente et l’assemblage hiérarchique donnent la résistance des fibres.",
    "choiceExplanations": [
      "Faux. Elle transforme des résidus de lysine.",
      "Vrai. Elles dérivent de résidus de lysine transformés par la lysyl-oxydase.",
      "Faux. Elles s’associent en fibres puis faisceaux.",
      "Vrai. Les liaisons croisées sont covalentes."
    ]
  },
  {
    "order": 135,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le collagène de type IV, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "collagen-type-iv"
    },
    "choices": [
      "Les domaines NC1 et 7S n’ont aucun rôle dans le réseau.",
      "Il est absent des membranes basales.",
      "Les domaines 7S et NC1 participent à l’organisation du réseau.",
      "Il forme des réseaux."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le collagène IV construit des réseaux spécialisés des membranes basales.",
    "choiceExplanations": [
      "Faux. Ils participent à l’assemblage.",
      "Faux. Il en est un composant typique.",
      "Vrai. Les domaines 7S et NC1 participent à l’organisation du réseau.",
      "Vrai. Il forme des réseaux."
    ]
  },
  {
    "order": 136,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les glycoprotéines matricielles, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "matrix-glycoproteins"
    },
    "choices": [
      "Elles possèdent des domaines structuraux communs.",
      "Elles sont toujours de faible masse moléculaire.",
      "Elles participent aux interactions cellule-matrice.",
      "Leur expression est identique dans tous les tissus."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les glycoprotéines matricielles sont des protéines modulaires et glycosylées d’adhérence.",
    "choiceExplanations": [
      "Vrai. Elles possèdent des domaines structuraux communs.",
      "Faux. La fiche les décrit généralement de masse élevée.",
      "Vrai. Elles participent aux interactions cellule-matrice.",
      "Faux. Elle varie selon les tissus."
    ]
  },
  {
    "order": 137,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la fibronectine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fibronectin"
    },
    "choices": [
      "La fibronectine est un monomère de 20 acides aminés.",
      "Elle se lie aux intégrines, à la fibrine et à d’autres protéines matricielles.",
      "Elle est un dimère de deux chaînes d’environ 235 kDa.",
      "Elle ne se lie à aucune cellule."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La fibronectine est une glycoprotéine dimérique reliant cellules, fibrine et matrice.",
    "choiceExplanations": [
      "Faux. Elle est un dimère de grande masse.",
      "Vrai. Elle se lie aux intégrines, à la fibrine et à d’autres protéines matricielles.",
      "Vrai. Elle est un dimère de deux chaînes d’environ 235 kDa.",
      "Faux. Les intégrines constituent des récepteurs cellulaires."
    ]
  },
  {
    "order": 138,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la laminine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "laminin"
    },
    "choices": [
      "La laminine est une petite hormone de 9 acides aminés.",
      "Elle possède trois chaînes α, β et γ.",
      "Elle est principalement une protéine cytosolique.",
      "Les chaînes forment une structure en croix."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La laminine est une glycoprotéine hétérotrimérique en croix des membranes basales.",
    "choiceExplanations": [
      "Faux. C’est une grande glycoprotéine.",
      "Vrai. Elle possède trois chaînes α, β et γ.",
      "Faux. Elle est extracellulaire et matricielle.",
      "Vrai. Les chaînes forment une structure en croix."
    ]
  },
  {
    "order": 139,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les constituants du cytosquelette, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cytoskeleton-overview"
    },
    "choices": [
      "Le cytosquelette est formé uniquement de phospholipides.",
      "Il n’intervient jamais dans la motilité.",
      "Ils participent à l’architecture cellulaire.",
      "Les trois systèmes sont filaments d’actine, filaments intermédiaires et microtubules."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le cytosquelette organise la forme, les forces et les transports intracellulaires.",
    "choiceExplanations": [
      "Faux. Il est constitué de polymères protéiques.",
      "Faux. Il transmet des forces et permet des mouvements.",
      "Vrai. Ils participent à l’architecture cellulaire.",
      "Vrai. Les trois systèmes sont filaments d’actine, filaments intermédiaires et microtubules."
    ]
  },
  {
    "order": 140,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une cellule présente une mutation d’une protéine du cytosquelette associée à une cardiomyopathie. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "actin-microtubules"
    },
    "choices": [
      "L’actine G est monomérique et l’actine F filamenteuse.",
      "L’actine F est le monomère globulaire.",
      "Les microtubules sont totalement statiques.",
      "La polymérisation de l’actine dépend de l’ATP."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Actine et microtubules sont des polymères dynamiques contrôlés par ATP ou GTP.",
    "choiceExplanations": [
      "Vrai. L’actine G est monomérique et l’actine F filamenteuse.",
      "Faux. Le monomère est l’actine G.",
      "Faux. Ils polymérisent et dépolymérisent dynamiquement.",
      "Vrai. La polymérisation de l’actine dépend de l’ATP."
    ]
  }
];
