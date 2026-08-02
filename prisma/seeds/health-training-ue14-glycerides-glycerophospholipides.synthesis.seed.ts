import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 5;

export const SYNTHESIS_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "121": [
    "la structure du glycérol"
  ],
  "122": [
    "les diacylglycérols"
  ],
  "123": [
    "le point de fusion des triglycérides"
  ],
  "124": [
    "la réserve énergétique des triglycérides"
  ],
  "125": [
    "l’acide phosphatidique"
  ],
  "126": [
    "la phosphatidylcholine"
  ],
  "127": [
    "les phosphatidylinositols"
  ],
  "128": [
    "les phospholipases"
  ],
  "129": [
    "la voie PIP2-PLC"
  ],
  "130": [
    "les plasmalogènes et le PAF"
  ],
  "131": [
    "la structure du glycérol"
  ],
  "132": [
    "les diacylglycérols"
  ],
  "133": [
    "le point de fusion des triglycérides"
  ],
  "134": [
    "la réserve énergétique des triglycérides"
  ],
  "135": [
    "l’acide phosphatidique"
  ],
  "136": [
    "la phosphatidylcholine"
  ],
  "137": [
    "les phosphatidylinositols"
  ],
  "138": [
    "les phospholipases"
  ],
  "139": [
    "la voie PIP2-PLC"
  ],
  "140": [
    "les plasmalogènes et le PAF"
  ]
};

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "glycerides-et-glycerophospholipides-synthese-1",
    "title": "Structures, propriétés et fonctions",
    "description": "Révision transversale du chapitre.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "items": [
      {
        "type": "GROUP",
        "title": "Structures",
        "sharedStatement": "Les questions suivantes portent sur les structures et la nomenclature.",
        "questionOrders": [
          121,
          122,
          123
        ]
      },
      {
        "type": "GROUP",
        "title": "Propriétés",
        "sharedStatement": "Les questions suivantes portent sur les propriétés et transformations.",
        "questionOrders": [
          124,
          125,
          126
        ]
      },
      {
        "type": "GROUP",
        "title": "Fonctions",
        "sharedStatement": "Les questions suivantes portent sur les fonctions biologiques et applications.",
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
    "slug": "glycerides-et-glycerophospholipides-synthese-2",
    "title": "Raisonnement transversal",
    "description": "Questions proches de l’esprit d’examen.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "items": [
      {
        "type": "GROUP",
        "title": "Identification",
        "sharedStatement": "Les questions suivantes demandent d’identifier ou comparer des structures.",
        "questionOrders": [
          131,
          132,
          133
        ]
      },
      {
        "type": "GROUP",
        "title": "Mécanismes",
        "sharedStatement": "Les questions suivantes mobilisent des mécanismes biochimiques.",
        "questionOrders": [
          134,
          135,
          136
        ]
      },
      {
        "type": "GROUP",
        "title": "Contextes médicaux",
        "sharedStatement": "Les questions suivantes exploitent des contextes physiologiques, pathologiques ou thérapeutiques.",
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
    "question": "Dans une question transversale sur la structure du glycérol, quelles propositions sont exactes ?",
    "choices": [
      "Les alcools des C1 et C3 sont primaires.",
      "Il possède trois fonctions alcool.",
      "Le glycérol comporte six carbones.",
      "Le C2 porte un alcool primaire."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le glycérol est un trialcool à trois carbones.",
    "choiceExplanations": [
      "Vrai. Les alcools des C1 et C3 sont primaires.",
      "Vrai. Il possède trois fonctions alcool.",
      "Faux. Il en comporte trois.",
      "Faux. Il porte l’alcool secondaire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-numbering"
    }
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les diacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      "Un diglycéride est un stérol.",
      "Un diacylglycérol porte deux acides gras.",
      "Il porte un seul acide gras.",
      "Le 1,3-diacylglycérol est estérifié sur les deux alcools primaires."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les diglycérides existent notamment sous les formes 1,2 et 1,3.",
    "choiceExplanations": [
      "Faux. C’est un glycéride.",
      "Vrai. Un diacylglycérol porte deux acides gras.",
      "Faux. Il en porte deux.",
      "Vrai. Le 1,3-diacylglycérol est estérifié sur les deux alcools primaires."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "acylglycerol-types"
    }
  },
  {
    "order": 123,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le point de fusion des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "Les doubles liaisons augmentent toujours le point de fusion.",
      "Le point de fusion est indépendant des chaînes.",
      "La composition explique l’état physique.",
      "Les chaînes désaturées diminuent le point de fusion."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La saturation élève le point de fusion, la désaturation l’abaisse.",
    "choiceExplanations": [
      "Faux. Elles le diminuent.",
      "Faux. Il dépend de leur nature.",
      "Vrai. La composition explique l’état physique.",
      "Vrai. Les chaînes désaturées diminuent le point de fusion."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-melting"
    }
  },
  {
    "order": 124,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la réserve énergétique des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "Leur seule fonction est hormonale.",
      "Cette énergie est récupérée sous forme d’ATP.",
      "Les acides gras sont stockés uniquement libres.",
      "Les acides gras peuvent être libérés des triglycérides."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’hydrolyse puis l’oxydation des acides gras libèrent de l’ATP.",
    "choiceExplanations": [
      "Faux. Leur fonction majeure est énergétique.",
      "Vrai. Cette énergie est récupérée sous forme d’ATP.",
      "Faux. Ils sont surtout stockés dans les triglycérides.",
      "Vrai. Les acides gras peuvent être libérés des triglycérides."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 125,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’acide phosphatidique, quelles propositions sont exactes ?",
    "choices": [
      "Il contient un glycérol.",
      "Il est uniquement une forme de stockage abondante.",
      "Il est un intermédiaire important de synthèse.",
      "Le phosphate est fixé en C2."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’acide phosphatidique associe glycérol, deux acides gras et phosphate.",
    "choiceExplanations": [
      "Vrai. Il contient un glycérol.",
      "Faux. Il est peu abondant mais métaboliquement important.",
      "Vrai. Il est un intermédiaire important de synthèse.",
      "Faux. Il est fixé en C3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phosphatidic-acid"
    }
  },
  {
    "order": 126,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la phosphatidylcholine, quelles propositions sont exactes ?",
    "choices": [
      "Les lécithines sont des triglycérides.",
      "La choline donne les PS.",
      "Les PC sont aussi appelées lécithines.",
      "La choline est un dérivé triméthylé de l’éthanolamine."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La choline forme les phosphatidylcholines ou lécithines.",
    "choiceExplanations": [
      "Faux. Ce sont des PC.",
      "Faux. Elle donne les PC.",
      "Vrai. Les PC sont aussi appelées lécithines.",
      "Vrai. La choline est un dérivé triméthylé de l’éthanolamine."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 127,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les phosphatidylinositols, quelles propositions sont exactes ?",
    "choices": [
      "Les PI jouent un rôle majeur dans la signalisation.",
      "Il possède six fonctions alcool.",
      "L’inositol est linéaire à deux carbones.",
      "Les PI sont une réserve majoritaire du tissu adipeux."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les phosphatidylinositols sont minoritaires mais essentiels à la signalisation.",
    "choiceExplanations": [
      "Vrai. Les PI jouent un rôle majeur dans la signalisation.",
      "Vrai. Il possède six fonctions alcool.",
      "Faux. Il est cyclique à six carbones.",
      "Faux. Ce sont des composants membranaires mineurs mais fonctionnels."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phosphatidylinositol"
    }
  },
  {
    "order": 128,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les phospholipases, quelles propositions sont exactes ?",
    "choices": [
      "Elles ne peuvent agir sur un phospholipide.",
      "Elles clivent des liaisons par addition d’eau.",
      "Elles sont spécifiques de position.",
      "Ce sont exclusivement des kinases."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les phospholipases hydrolysent sélectivement les phospholipides.",
    "choiceExplanations": [
      "Faux. Le phospholipide est leur substrat.",
      "Vrai. Elles clivent des liaisons par addition d’eau.",
      "Vrai. Elles sont spécifiques de position.",
      "Faux. Ce sont des hydrolases."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 129,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la voie PIP2-PLC, quelles propositions sont exactes ?",
    "choices": [
      "La réaction libère DAG et IP3.",
      "Le PIP2 est un triglycéride sans phosphate.",
      "DAG et IP3 sont des seconds messagers.",
      "Le DAG est un acide nucléique."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La PLC scinde le PIP2 en DAG et IP3.",
    "choiceExplanations": [
      "Vrai. La réaction libère DAG et IP3.",
      "Faux. C’est un phosphatidylinositol bisphosphate.",
      "Vrai. DAG et IP3 sont des seconds messagers.",
      "Faux. C’est un diacylglycérol."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pip2-plc"
    }
  },
  {
    "order": 130,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Chez un patient asthmatique, un médiateur favorise bronchoconstriction et agrégation plaquettaire. Quelles propositions sont exactes ?",
    "choices": [
      "Le C1 porte un alcool gras lié par éther.",
      "Le PAF est un dérivé actif.",
      "Le C1 porte toujours un acide gras lié par amide.",
      "Les plasmalogènes sont des stéroïdes."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les plasmalogènes portent une liaison éther ; le PAF a des effets plaquettaires et bronchiques.",
    "choiceExplanations": [
      "Vrai. Le C1 porte un alcool gras lié par éther.",
      "Vrai. Le PAF est un dérivé actif.",
      "Faux. Il porte un alcool gras lié par éther.",
      "Faux. Ils sont apparentés aux phospholipides."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "plasmalogen-paf"
    }
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure du glycérol, quelles propositions sont exactes ?",
    "choices": [
      "Les alcools des C1 et C3 sont primaires.",
      "Le glycérol ne possède aucun OH.",
      "Il possède trois fonctions alcool.",
      "Le C2 porte un alcool primaire."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le glycérol est un trialcool à trois carbones.",
    "choiceExplanations": [
      "Vrai. Les alcools des C1 et C3 sont primaires.",
      "Faux. Il possède trois fonctions alcool.",
      "Vrai. Il possède trois fonctions alcool.",
      "Faux. Il porte l’alcool secondaire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-numbering"
    }
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les diacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      "Un diglycéride est un stérol.",
      "Le 1,2-diacylglycérol implique C1 et C2.",
      "Le 1,3-diacylglycérol est estérifié sur les deux alcools primaires.",
      "Il porte un seul acide gras."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les diglycérides existent notamment sous les formes 1,2 et 1,3.",
    "choiceExplanations": [
      "Faux. C’est un glycéride.",
      "Vrai. Le 1,2-diacylglycérol implique C1 et C2.",
      "Vrai. Le 1,3-diacylglycérol est estérifié sur les deux alcools primaires.",
      "Faux. Il en porte deux."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "acylglycerol-types"
    }
  },
  {
    "order": 133,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le point de fusion des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "Les doubles liaisons augmentent toujours le point de fusion.",
      "Le point de fusion dépend de la nature des acides gras.",
      "La composition explique l’état physique.",
      "La saturation n’a aucun effet."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La saturation élève le point de fusion, la désaturation l’abaisse.",
    "choiceExplanations": [
      "Faux. Elles le diminuent.",
      "Vrai. Le point de fusion dépend de la nature des acides gras.",
      "Vrai. La composition explique l’état physique.",
      "Faux. Elle modifie l’empilement des chaînes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-melting"
    }
  },
  {
    "order": 134,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la réserve énergétique des triglycérides, quelles propositions sont exactes ?",
    "choices": [
      "Les triglycérides ne peuvent être hydrolysés.",
      "Les triglycérides forment une réserve concentrée.",
      "Cette énergie est récupérée sous forme d’ATP.",
      "Le catabolisme des acides gras ne produit jamais d’ATP."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’hydrolyse puis l’oxydation des acides gras libèrent de l’ATP.",
    "choiceExplanations": [
      "Faux. Leurs acides gras peuvent être libérés.",
      "Vrai. Les triglycérides forment une réserve concentrée.",
      "Vrai. Cette énergie est récupérée sous forme d’ATP.",
      "Faux. Il en produit une grande quantité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-storage"
    }
  },
  {
    "order": 135,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’acide phosphatidique, quelles propositions sont exactes ?",
    "choices": [
      "Il contient trois acides gras et aucun phosphate.",
      "Le phosphate est fixé en C2.",
      "Il contient un glycérol.",
      "Il est un intermédiaire important de synthèse."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’acide phosphatidique associe glycérol, deux acides gras et phosphate.",
    "choiceExplanations": [
      "Faux. Il contient deux acides gras et un phosphate.",
      "Faux. Il est fixé en C3.",
      "Vrai. Il contient un glycérol.",
      "Vrai. Il est un intermédiaire important de synthèse."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phosphatidic-acid"
    }
  },
  {
    "order": 136,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la phosphatidylcholine, quelles propositions sont exactes ?",
    "choices": [
      "La choline est un dérivé triméthylé de l’éthanolamine.",
      "La choline donne les PS.",
      "Les PC sont aussi appelées lécithines.",
      "PC signifie phosphatidylcéramide."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La choline forme les phosphatidylcholines ou lécithines.",
    "choiceExplanations": [
      "Vrai. La choline est un dérivé triméthylé de l’éthanolamine.",
      "Faux. Elle donne les PC.",
      "Vrai. Les PC sont aussi appelées lécithines.",
      "Faux. PC signifie phosphatidylcholine."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "headgroups"
    }
  },
  {
    "order": 137,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les phosphatidylinositols, quelles propositions sont exactes ?",
    "choices": [
      "L’inositol est cyclique et comporte six carbones.",
      "La liaison utilise obligatoirement C6.",
      "L’inositol est linéaire à deux carbones.",
      "Les PI jouent un rôle majeur dans la signalisation."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les phosphatidylinositols sont minoritaires mais essentiels à la signalisation.",
    "choiceExplanations": [
      "Vrai. L’inositol est cyclique et comporte six carbones.",
      "Faux. La fiche indique C1.",
      "Faux. Il est cyclique à six carbones.",
      "Vrai. Les PI jouent un rôle majeur dans la signalisation."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phosphatidylinositol"
    }
  },
  {
    "order": 138,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les phospholipases, quelles propositions sont exactes ?",
    "choices": [
      "Elles clivent des liaisons par addition d’eau.",
      "Ce sont des hydrolases.",
      "Elles ne peuvent agir sur un phospholipide.",
      "Elles agissent sans spécificité."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les phospholipases hydrolysent sélectivement les phospholipides.",
    "choiceExplanations": [
      "Vrai. Elles clivent des liaisons par addition d’eau.",
      "Vrai. Ce sont des hydrolases.",
      "Faux. Le phospholipide est leur substrat.",
      "Faux. Elles ont une spécificité de position."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "phospholipase-sites"
    }
  },
  {
    "order": 139,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la voie PIP2-PLC, quelles propositions sont exactes ?",
    "choices": [
      "Le PIP2 est un triglycéride sans phosphate.",
      "Le PIP2 est phosphorylé en positions 4 et 5.",
      "DAG et IP3 sont des seconds messagers.",
      "La PLC forme du cholestérol."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La PLC scinde le PIP2 en DAG et IP3.",
    "choiceExplanations": [
      "Faux. C’est un phosphatidylinositol bisphosphate.",
      "Vrai. Le PIP2 est phosphorylé en positions 4 et 5.",
      "Vrai. DAG et IP3 sont des seconds messagers.",
      "Faux. Elle produit DAG et IP3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pip2-plc"
    }
  },
  {
    "order": 140,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Chez un patient asthmatique, un médiateur favorise bronchoconstriction et agrégation plaquettaire. Quelles propositions sont exactes ?",
    "choices": [
      "Le PAF ne peut être produit par des leucocytes.",
      "Le PAF favorise agrégation plaquettaire et bronchoconstriction.",
      "Le C1 porte toujours un acide gras lié par amide.",
      "Le C1 porte un alcool gras lié par éther."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les plasmalogènes portent une liaison éther ; le PAF a des effets plaquettaires et bronchiques.",
    "choiceExplanations": [
      "Faux. Il peut être sécrété par plaquettes et leucocytes.",
      "Vrai. Le PAF favorise agrégation plaquettaire et bronchoconstriction.",
      "Faux. Il porte un alcool gras lié par éther.",
      "Vrai. Le C1 porte un alcool gras lié par éther."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "plasmalogen-paf"
    }
  }
];
