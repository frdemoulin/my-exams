import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "61": [
    "les modèles de Fisher et Koshland"
  ],
  "62": [
    "l’énergie d’activation"
  ],
  "63": [
    "les complexes ES et EP"
  ],
  "64": [
    "le site de fixation et le site catalytique"
  ],
  "65": [
    "la chymotrypsine et sa triade catalytique"
  ],
  "66": [
    "les modèles de Fisher et Koshland"
  ],
  "67": [
    "l’énergie d’activation"
  ],
  "68": [
    "les complexes ES et EP"
  ],
  "69": [
    "le site de fixation et le site catalytique"
  ],
  "70": [
    "la chymotrypsine et sa triade catalytique"
  ],
  "71": [
    "les modèles de Fisher et Koshland"
  ],
  "72": [
    "l’énergie d’activation"
  ],
  "73": [
    "les complexes ES et EP"
  ],
  "74": [
    "le site de fixation et le site catalytique"
  ],
  "75": [
    "la chymotrypsine et sa triade catalytique"
  ],
  "76": [
    "les modèles de Fisher et Koshland"
  ],
  "77": [
    "l’énergie d’activation"
  ],
  "78": [
    "les complexes ES et EP"
  ],
  "79": [
    "le site de fixation et le site catalytique"
  ],
  "80": [
    "la chymotrypsine et sa triade catalytique"
  ],
  "81": [
    "les modèles de Fisher et Koshland"
  ],
  "82": [
    "l’énergie d’activation"
  ],
  "83": [
    "les complexes ES et EP"
  ],
  "84": [
    "le site de fixation et le site catalytique"
  ],
  "85": [
    "la chymotrypsine et sa triade catalytique"
  ],
  "86": [
    "les modèles de Fisher et Koshland"
  ],
  "87": [
    "l’énergie d’activation"
  ],
  "88": [
    "les complexes ES et EP"
  ],
  "89": [
    "le site de fixation et le site catalytique"
  ],
  "90": [
    "la chymotrypsine et sa triade catalytique"
  ]
};

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "interaction-energie-site-actif-1",
    "title": "Reconnaissance du substrat",
    "description": "Identifier les notions fondamentales de la section.",
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
    "slug": "interaction-energie-site-actif-2",
    "title": "Énergie d’activation et complexes enzymatiques",
    "description": "Appliquer les définitions, classifications et relations du cours.",
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
    "slug": "interaction-energie-site-actif-3",
    "title": "Site actif et chymotrypsine",
    "description": "Mobiliser les notions dans des raisonnements transversaux et des situations biologiques.",
    "stage": "MASTER",
    "sectionOrder": 3,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères fondamentaux",
        "sharedStatement": "Les questions suivantes mobilisent les repères essentiels de la section.",
        "questionOrders": [
          81,
          82,
          83
        ]
      },
      {
        "type": "GROUP",
        "title": "Mécanismes et relations",
        "sharedStatement": "Les questions suivantes relient les notions et mécanismes de la section.",
        "questionOrders": [
          84,
          85,
          86
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques",
        "sharedStatement": "Les questions suivantes replacent les notions dans une situation biologique, analytique ou médicale.",
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
    "question": "À propos de les modèles de Fisher et Koshland :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "fisher-koshland"
    },
    "choices": [
      "Il suppose une complémentarité géométrique préexistante.",
      "Le modèle de Koshland admet une adaptation conformationnelle de l’enzyme.",
      "Le modèle de Koshland est celui de l’ajustement induit.",
      "Le modèle de Fisher décrit une enzyme qui change toujours de forme après fixation."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le modèle de l’ajustement induit complète le modèle clé-serrure en intégrant la plasticité de l’enzyme.",
    "choiceExplanations": [
      "Vrai. Il suppose une complémentarité géométrique préexistante.",
      "Vrai. Le modèle de Koshland admet une adaptation conformationnelle de l’enzyme.",
      "Vrai. Le modèle de Koshland est celui de l’ajustement induit.",
      "Faux. Il suppose une adaptation parfaite dès le départ."
    ]
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’énergie d’activation :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "activation-energy"
    },
    "choices": [
      "Sans enzyme, le substrat doit franchir une barrière d’énergie d’activation.",
      "Sans enzyme, la transformation du substrat est thermodynamiquement impossible dans tous les cas.",
      "La voie enzymatique comporte plusieurs étapes de plus faible amplitude énergétique.",
      "L’enzyme augmente fortement l’énergie d’activation."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’enzyme accélère une réaction en proposant un chemin réactionnel à plus faible énergie d’activation.",
    "choiceExplanations": [
      "Vrai. Sans enzyme, le substrat doit franchir une barrière d’énergie d’activation.",
      "Faux. Elle peut être possible mais extrêmement lente.",
      "Vrai. La voie enzymatique comporte plusieurs étapes de plus faible amplitude énergétique.",
      "Faux. Elle la diminue."
    ]
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les complexes ES et EP :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "es-ep-cycle"
    },
    "choices": [
      "Le produit peut rester transitoirement associé dans un complexe EP.",
      "L’enzyme disparaît définitivement après la réaction.",
      "Le produit a souvent une affinité plus faible que le substrat pour l’enzyme.",
      "L’enzyme forme d’abord un complexe enzyme-substrat ES."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le cycle catalytique passe par des complexes transitoires puis restitue l’enzyme.",
    "choiceExplanations": [
      "Vrai. Le produit peut rester transitoirement associé dans un complexe EP.",
      "Faux. Elle est régénérée.",
      "Vrai. Le produit a souvent une affinité plus faible que le substrat pour l’enzyme.",
      "Vrai. L’enzyme forme d’abord un complexe enzyme-substrat ES."
    ]
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le site de fixation et le site catalytique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "active-site-parts"
    },
    "choices": [
      "Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Le site catalytique porte les groupements responsables de la transformation chimique.",
      "Le site actif est toujours constitué uniquement d’un cofacteur minéral.",
      "Le site de fixation ne participe pas à la spécificité."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La spécificité et la catalyse reposent sur des fonctions complémentaires du site actif.",
    "choiceExplanations": [
      "Vrai. Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Vrai. Le site catalytique porte les groupements responsables de la transformation chimique.",
      "Faux. Des résidus protéiques y jouent un rôle central.",
      "Faux. Il contribue à la reconnaissance."
    ]
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la chymotrypsine et sa triade catalytique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "chymotrypsin-mechanism"
    },
    "choices": [
      "Le mécanisme ne libère qu’un seul peptide inchangé.",
      "Elle clive notamment les liaisons Phe-X et Trp-X.",
      "La chymotrypsine est une protéase pancréatique.",
      "Le mécanisme passe par un intermédiaire acyl-enzyme puis l’intervention d’une molécule d’eau."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La chymotrypsine est une sérine-protéase dont la triade Ser-His-Asp permet l’hydrolyse d’une liaison peptidique.",
    "choiceExplanations": [
      "Faux. Le substrat peptidique est clivé en deux produits.",
      "Vrai. Elle clive notamment les liaisons Phe-X et Trp-X.",
      "Vrai. La chymotrypsine est une protéase pancréatique.",
      "Vrai. Le mécanisme passe par un intermédiaire acyl-enzyme puis l’intervention d’une molécule d’eau."
    ]
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les modèles de Fisher et Koshland :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "fisher-koshland"
    },
    "choices": [
      "Il suppose une complémentarité géométrique préexistante.",
      "Le modèle actuellement admis exclut tout changement conformationnel.",
      "Le modèle de Koshland est celui de l’ajustement induit.",
      "Le modèle de Koshland est antérieur au modèle clé-serrure."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le modèle de l’ajustement induit complète le modèle clé-serrure en intégrant la plasticité de l’enzyme.",
    "choiceExplanations": [
      "Vrai. Il suppose une complémentarité géométrique préexistante.",
      "Faux. L’ajustement induit repose sur ce changement.",
      "Vrai. Le modèle de Koshland est celui de l’ajustement induit.",
      "Faux. Il est postérieur."
    ]
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’énergie d’activation :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "activation-energy"
    },
    "choices": [
      "Sans enzyme, le substrat doit franchir une barrière d’énergie d’activation.",
      "L’énergie d’activation est identique avec et sans enzyme.",
      "L’enzyme diminue l’énergie d’activation.",
      "La diminution de cette barrière accélère la réaction."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’enzyme accélère une réaction en proposant un chemin réactionnel à plus faible énergie d’activation.",
    "choiceExplanations": [
      "Vrai. Sans enzyme, le substrat doit franchir une barrière d’énergie d’activation.",
      "Faux. La catalyse fournit une voie de plus faible barrière.",
      "Vrai. L’enzyme diminue l’énergie d’activation.",
      "Vrai. La diminution de cette barrière accélère la réaction."
    ]
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les complexes ES et EP :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "es-ep-cycle"
    },
    "choices": [
      "Le produit a toujours une affinité supérieure au substrat.",
      "La libération du produit régénère l’enzyme.",
      "Le produit a souvent une affinité plus faible que le substrat pour l’enzyme.",
      "Le complexe ES se forme après la libération du produit."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le cycle catalytique passe par des complexes transitoires puis restitue l’enzyme.",
    "choiceExplanations": [
      "Faux. La fiche indique qu’elle est souvent plus faible.",
      "Vrai. La libération du produit régénère l’enzyme.",
      "Vrai. Le produit a souvent une affinité plus faible que le substrat pour l’enzyme.",
      "Faux. Il se forme au début de la catalyse."
    ]
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le site de fixation et le site catalytique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "active-site-parts"
    },
    "choices": [
      "Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Le site actif regroupe les fonctions de fixation et de catalyse.",
      "Le site catalytique sert uniquement à ancrer le substrat sans le transformer.",
      "Le site catalytique porte les groupements responsables de la transformation chimique."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La spécificité et la catalyse reposent sur des fonctions complémentaires du site actif.",
    "choiceExplanations": [
      "Vrai. Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Vrai. Le site actif regroupe les fonctions de fixation et de catalyse.",
      "Faux. Il réalise la catalyse chimique.",
      "Vrai. Le site catalytique porte les groupements responsables de la transformation chimique."
    ]
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la chymotrypsine et sa triade catalytique :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "chymotrypsin-mechanism"
    },
    "choices": [
      "Sa triade catalytique associe glycine, valine et leucine.",
      "Le mécanisme passe par un intermédiaire acyl-enzyme puis l’intervention d’une molécule d’eau.",
      "La chymotrypsine est une ligase consommant de l’ATP.",
      "Elle clive notamment les liaisons Phe-X et Trp-X."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La chymotrypsine est une sérine-protéase dont la triade Ser-His-Asp permet l’hydrolyse d’une liaison peptidique.",
    "choiceExplanations": [
      "Faux. Elle associe Ser, His et Asp.",
      "Vrai. Le mécanisme passe par un intermédiaire acyl-enzyme puis l’intervention d’une molécule d’eau.",
      "Faux. C’est une hydrolase protéolytique.",
      "Vrai. Elle clive notamment les liaisons Phe-X et Trp-X."
    ]
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les modèles de Fisher et Koshland, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "fisher-koshland"
    },
    "choices": [
      "Dans le modèle clé-serrure, le substrat constitue la serrure.",
      "Le modèle de Koshland admet une adaptation conformationnelle de l’enzyme.",
      "Le modèle de Fisher décrit une enzyme qui change toujours de forme après fixation.",
      "Il suppose une complémentarité géométrique préexistante."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le modèle de l’ajustement induit complète le modèle clé-serrure en intégrant la plasticité de l’enzyme.",
    "choiceExplanations": [
      "Faux. Le substrat est comparé à la clé.",
      "Vrai. Le modèle de Koshland admet une adaptation conformationnelle de l’enzyme.",
      "Faux. Il suppose une adaptation parfaite dès le départ.",
      "Vrai. Il suppose une complémentarité géométrique préexistante."
    ]
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’énergie d’activation, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "activation-energy"
    },
    "choices": [
      "L’énergie d’activation est identique avec et sans enzyme.",
      "L’enzyme augmente fortement l’énergie d’activation.",
      "Sans enzyme, le substrat doit franchir une barrière d’énergie d’activation.",
      "L’enzyme modifie obligatoirement le bilan énergétique global entre substrat et produit."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "L’enzyme accélère une réaction en proposant un chemin réactionnel à plus faible énergie d’activation.",
    "choiceExplanations": [
      "Faux. La catalyse fournit une voie de plus faible barrière.",
      "Faux. Elle la diminue.",
      "Vrai. Sans enzyme, le substrat doit franchir une barrière d’énergie d’activation.",
      "Faux. Elle modifie la barrière cinétique, pas le bilan global."
    ]
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les complexes ES et EP, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "es-ep-cycle"
    },
    "choices": [
      "L’enzyme disparaît définitivement après la réaction.",
      "Le produit peut rester transitoirement associé dans un complexe EP.",
      "L’enzyme forme d’abord un complexe enzyme-substrat ES.",
      "Le complexe ES se forme après la libération du produit."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le cycle catalytique passe par des complexes transitoires puis restitue l’enzyme.",
    "choiceExplanations": [
      "Faux. Elle est régénérée.",
      "Vrai. Le produit peut rester transitoirement associé dans un complexe EP.",
      "Vrai. L’enzyme forme d’abord un complexe enzyme-substrat ES.",
      "Faux. Il se forme au début de la catalyse."
    ]
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le site de fixation et le site catalytique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "active-site-parts"
    },
    "choices": [
      "Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Le site de fixation assure la reconnaissance spatiale du substrat.",
      "Le site de fixation ne participe pas à la spécificité.",
      "Le site catalytique sert uniquement à ancrer le substrat sans le transformer."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La spécificité et la catalyse reposent sur des fonctions complémentaires du site actif.",
    "choiceExplanations": [
      "Vrai. Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Vrai. Le site de fixation assure la reconnaissance spatiale du substrat.",
      "Faux. Il contribue à la reconnaissance.",
      "Faux. Il réalise la catalyse chimique."
    ]
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la chymotrypsine et sa triade catalytique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "chymotrypsin-mechanism"
    },
    "choices": [
      "Elle clive notamment les liaisons Phe-X et Trp-X.",
      "La sérine n’établit jamais de liaison avec le substrat.",
      "La chymotrypsine est une ligase consommant de l’ATP.",
      "Sa triade catalytique associe glycine, valine et leucine."
    ],
    "correctChoiceIndexes": [
      0
    ],
    "explanation": "La chymotrypsine est une sérine-protéase dont la triade Ser-His-Asp permet l’hydrolyse d’une liaison peptidique.",
    "choiceExplanations": [
      "Vrai. Elle clive notamment les liaisons Phe-X et Trp-X.",
      "Faux. Elle participe à l’intermédiaire acyl-enzyme.",
      "Faux. C’est une hydrolase protéolytique.",
      "Faux. Elle associe Ser, His et Asp."
    ]
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les modèles de Fisher et Koshland, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "fisher-koshland"
    },
    "choices": [
      "Le modèle de Fisher est le modèle clé-serrure.",
      "Dans le modèle clé-serrure, le substrat constitue la serrure.",
      "Le modèle de Koshland est antérieur au modèle clé-serrure.",
      "Le modèle de Koshland est celui de l’ajustement induit."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le modèle de l’ajustement induit complète le modèle clé-serrure en intégrant la plasticité de l’enzyme.",
    "choiceExplanations": [
      "Vrai. Le modèle de Fisher est le modèle clé-serrure.",
      "Faux. Le substrat est comparé à la clé.",
      "Faux. Il est postérieur.",
      "Vrai. Le modèle de Koshland est celui de l’ajustement induit."
    ]
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’énergie d’activation, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "activation-energy"
    },
    "choices": [
      "La voie enzymatique comporte plusieurs étapes de plus faible amplitude énergétique.",
      "L’enzyme modifie obligatoirement le bilan énergétique global entre substrat et produit.",
      "Sans enzyme, le substrat doit franchir une barrière d’énergie d’activation.",
      "L’énergie d’activation est identique avec et sans enzyme."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’enzyme accélère une réaction en proposant un chemin réactionnel à plus faible énergie d’activation.",
    "choiceExplanations": [
      "Vrai. La voie enzymatique comporte plusieurs étapes de plus faible amplitude énergétique.",
      "Faux. Elle modifie la barrière cinétique, pas le bilan global.",
      "Vrai. Sans enzyme, le substrat doit franchir une barrière d’énergie d’activation.",
      "Faux. La catalyse fournit une voie de plus faible barrière."
    ]
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les complexes ES et EP, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "es-ep-cycle"
    },
    "choices": [
      "Le produit a toujours une affinité supérieure au substrat.",
      "L’enzyme forme d’abord un complexe enzyme-substrat ES.",
      "L’enzyme disparaît définitivement après la réaction.",
      "Le produit ne peut jamais être associé à l’enzyme."
    ],
    "correctChoiceIndexes": [
      1
    ],
    "explanation": "Le cycle catalytique passe par des complexes transitoires puis restitue l’enzyme.",
    "choiceExplanations": [
      "Faux. La fiche indique qu’elle est souvent plus faible.",
      "Vrai. L’enzyme forme d’abord un complexe enzyme-substrat ES.",
      "Faux. Elle est régénérée.",
      "Faux. Un complexe enzyme-produit EP peut exister."
    ]
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le site de fixation et le site catalytique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "active-site-parts"
    },
    "choices": [
      "Le site catalytique sert uniquement à ancrer le substrat sans le transformer.",
      "Le site actif regroupe les fonctions de fixation et de catalyse.",
      "Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Les sites de fixation et catalytique sont nécessairement situés sur deux enzymes différentes."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La spécificité et la catalyse reposent sur des fonctions complémentaires du site actif.",
    "choiceExplanations": [
      "Faux. Il réalise la catalyse chimique.",
      "Vrai. Le site actif regroupe les fonctions de fixation et de catalyse.",
      "Vrai. Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Faux. Ils appartiennent au site actif d’une même enzyme."
    ]
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la chymotrypsine et sa triade catalytique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "chymotrypsin-mechanism"
    },
    "choices": [
      "Sa triade catalytique associe sérine, histidine et aspartate.",
      "La chymotrypsine est une ligase consommant de l’ATP.",
      "La sérine n’établit jamais de liaison avec le substrat.",
      "La chymotrypsine est une protéase pancréatique."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La chymotrypsine est une sérine-protéase dont la triade Ser-His-Asp permet l’hydrolyse d’une liaison peptidique.",
    "choiceExplanations": [
      "Vrai. Sa triade catalytique associe sérine, histidine et aspartate.",
      "Faux. C’est une hydrolase protéolytique.",
      "Faux. Elle participe à l’intermédiaire acyl-enzyme.",
      "Vrai. La chymotrypsine est une protéase pancréatique."
    ]
  },
  {
    "order": 81,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les modèles de Fisher et Koshland. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "fisher-koshland"
    },
    "choices": [
      "Le modèle de Fisher décrit une enzyme qui change toujours de forme après fixation.",
      "Il suppose une complémentarité géométrique préexistante.",
      "Dans le modèle clé-serrure, le substrat constitue la serrure.",
      "Le modèle de Fisher est le modèle clé-serrure."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le modèle de l’ajustement induit complète le modèle clé-serrure en intégrant la plasticité de l’enzyme.",
    "choiceExplanations": [
      "Faux. Il suppose une adaptation parfaite dès le départ.",
      "Vrai. Il suppose une complémentarité géométrique préexistante.",
      "Faux. Le substrat est comparé à la clé.",
      "Vrai. Le modèle de Fisher est le modèle clé-serrure."
    ]
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’énergie d’activation. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "activation-energy"
    },
    "choices": [
      "La voie enzymatique comporte plusieurs étapes de plus faible amplitude énergétique.",
      "L’énergie d’activation est identique avec et sans enzyme.",
      "Sans enzyme, la transformation du substrat est thermodynamiquement impossible dans tous les cas.",
      "L’enzyme diminue l’énergie d’activation."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "L’enzyme accélère une réaction en proposant un chemin réactionnel à plus faible énergie d’activation.",
    "choiceExplanations": [
      "Vrai. La voie enzymatique comporte plusieurs étapes de plus faible amplitude énergétique.",
      "Faux. La catalyse fournit une voie de plus faible barrière.",
      "Faux. Elle peut être possible mais extrêmement lente.",
      "Vrai. L’enzyme diminue l’énergie d’activation."
    ]
  },
  {
    "order": 83,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les complexes ES et EP. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "es-ep-cycle"
    },
    "choices": [
      "Le produit ne peut jamais être associé à l’enzyme.",
      "Le produit a toujours une affinité supérieure au substrat.",
      "L’enzyme forme d’abord un complexe enzyme-substrat ES.",
      "Le produit a souvent une affinité plus faible que le substrat pour l’enzyme."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le cycle catalytique passe par des complexes transitoires puis restitue l’enzyme.",
    "choiceExplanations": [
      "Faux. Un complexe enzyme-produit EP peut exister.",
      "Faux. La fiche indique qu’elle est souvent plus faible.",
      "Vrai. L’enzyme forme d’abord un complexe enzyme-substrat ES.",
      "Vrai. Le produit a souvent une affinité plus faible que le substrat pour l’enzyme."
    ]
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le site de fixation et le site catalytique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "active-site-parts"
    },
    "choices": [
      "Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Les sites de fixation et catalytique sont nécessairement situés sur deux enzymes différentes.",
      "Le site catalytique porte les groupements responsables de la transformation chimique.",
      "Le site actif regroupe les fonctions de fixation et de catalyse."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La spécificité et la catalyse reposent sur des fonctions complémentaires du site actif.",
    "choiceExplanations": [
      "Vrai. Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Faux. Ils appartiennent au site actif d’une même enzyme.",
      "Vrai. Le site catalytique porte les groupements responsables de la transformation chimique.",
      "Vrai. Le site actif regroupe les fonctions de fixation et de catalyse."
    ]
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la chymotrypsine et sa triade catalytique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "chymotrypsin-mechanism"
    },
    "choices": [
      "Sa triade catalytique associe glycine, valine et leucine.",
      "Sa triade catalytique associe sérine, histidine et aspartate.",
      "La chymotrypsine est une protéase pancréatique.",
      "La chymotrypsine est une ligase consommant de l’ATP."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La chymotrypsine est une sérine-protéase dont la triade Ser-His-Asp permet l’hydrolyse d’une liaison peptidique.",
    "choiceExplanations": [
      "Faux. Elle associe Ser, His et Asp.",
      "Vrai. Sa triade catalytique associe sérine, histidine et aspartate.",
      "Vrai. La chymotrypsine est une protéase pancréatique.",
      "Faux. C’est une hydrolase protéolytique."
    ]
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les modèles de Fisher et Koshland. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "fisher-koshland"
    },
    "choices": [
      "Il suppose une complémentarité géométrique préexistante.",
      "Le modèle de Koshland admet une adaptation conformationnelle de l’enzyme.",
      "Dans le modèle clé-serrure, le substrat constitue la serrure.",
      "Le modèle de Koshland est antérieur au modèle clé-serrure."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le modèle de l’ajustement induit complète le modèle clé-serrure en intégrant la plasticité de l’enzyme.",
    "choiceExplanations": [
      "Vrai. Il suppose une complémentarité géométrique préexistante.",
      "Vrai. Le modèle de Koshland admet une adaptation conformationnelle de l’enzyme.",
      "Faux. Le substrat est comparé à la clé.",
      "Faux. Il est postérieur."
    ]
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’énergie d’activation. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "activation-energy"
    },
    "choices": [
      "Sans enzyme, le substrat doit franchir une barrière d’énergie d’activation.",
      "La diminution de cette barrière accélère la réaction.",
      "L’énergie d’activation est identique avec et sans enzyme.",
      "L’enzyme modifie obligatoirement le bilan énergétique global entre substrat et produit."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "L’enzyme accélère une réaction en proposant un chemin réactionnel à plus faible énergie d’activation.",
    "choiceExplanations": [
      "Vrai. Sans enzyme, le substrat doit franchir une barrière d’énergie d’activation.",
      "Vrai. La diminution de cette barrière accélère la réaction.",
      "Faux. La catalyse fournit une voie de plus faible barrière.",
      "Faux. Elle modifie la barrière cinétique, pas le bilan global."
    ]
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les complexes ES et EP. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "es-ep-cycle"
    },
    "choices": [
      "Le produit peut rester transitoirement associé dans un complexe EP.",
      "Le complexe ES se forme après la libération du produit.",
      "Le produit a souvent une affinité plus faible que le substrat pour l’enzyme.",
      "La libération du produit régénère l’enzyme."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le cycle catalytique passe par des complexes transitoires puis restitue l’enzyme.",
    "choiceExplanations": [
      "Vrai. Le produit peut rester transitoirement associé dans un complexe EP.",
      "Faux. Il se forme au début de la catalyse.",
      "Vrai. Le produit a souvent une affinité plus faible que le substrat pour l’enzyme.",
      "Vrai. La libération du produit régénère l’enzyme."
    ]
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le site de fixation et le site catalytique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "active-site-parts"
    },
    "choices": [
      "Les sites de fixation et catalytique sont nécessairement situés sur deux enzymes différentes.",
      "Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Le site actif regroupe les fonctions de fixation et de catalyse.",
      "Le site actif est toujours constitué uniquement d’un cofacteur minéral."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La spécificité et la catalyse reposent sur des fonctions complémentaires du site actif.",
    "choiceExplanations": [
      "Faux. Ils appartiennent au site actif d’une même enzyme.",
      "Vrai. Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Vrai. Le site actif regroupe les fonctions de fixation et de catalyse.",
      "Faux. Des résidus protéiques y jouent un rôle central."
    ]
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la chymotrypsine et sa triade catalytique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "chymotrypsin-mechanism"
    },
    "choices": [
      "La chymotrypsine est une protéase pancréatique.",
      "La chymotrypsine est une ligase consommant de l’ATP.",
      "Sa triade catalytique associe sérine, histidine et aspartate.",
      "Le mécanisme ne libère qu’un seul peptide inchangé."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La chymotrypsine est une sérine-protéase dont la triade Ser-His-Asp permet l’hydrolyse d’une liaison peptidique.",
    "choiceExplanations": [
      "Vrai. La chymotrypsine est une protéase pancréatique.",
      "Faux. C’est une hydrolase protéolytique.",
      "Vrai. Sa triade catalytique associe sérine, histidine et aspartate.",
      "Faux. Le substrat peptidique est clivé en deux produits."
    ]
  }
];
