import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 5;

export const SYNTHESIS_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "121": [
    "la structure de la sphingosine"
  ],
  "122": [
    "la formation du céramide"
  ],
  "123": [
    "les rôles cutanés des céramides"
  ],
  "124": [
    "la composition de la sphingomyéline"
  ],
  "125": [
    "la sclérose en plaques"
  ],
  "126": [
    "les glycosphingolipides"
  ],
  "127": [
    "les gangliosides"
  ],
  "128": [
    "la nomenclature des gangliosides"
  ],
  "129": [
    "la maladie de Gaucher"
  ],
  "130": [
    "la maladie de Tay-Sachs"
  ],
  "131": [
    "la structure de la sphingosine"
  ],
  "132": [
    "la formation du céramide"
  ],
  "133": [
    "les rôles cutanés des céramides"
  ],
  "134": [
    "la composition de la sphingomyéline"
  ],
  "135": [
    "la sclérose en plaques"
  ],
  "136": [
    "les glycosphingolipides"
  ],
  "137": [
    "les gangliosides"
  ],
  "138": [
    "la nomenclature des gangliosides"
  ],
  "139": [
    "la maladie de Gaucher"
  ],
  "140": [
    "la maladie de Tay-Sachs"
  ]
};

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "les-sphingolipides-synthese-1",
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
    "slug": "les-sphingolipides-synthese-2",
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
    "question": "Dans une question transversale sur la structure de la sphingosine, quelles propositions sont exactes ?",
    "choices": [
      "Elle comporte trois carbones.",
      "Elle porte des OH en C1 et C3.",
      "Elle possède un seul OH en C2.",
      "La sphingosine comporte 18 carbones."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La sphingosine est un aminodiol C18.",
    "choiceExplanations": [
      "Faux. Elle en comporte 18.",
      "Vrai. Elle porte des OH en C1 et C3.",
      "Faux. Les OH sont en C1 et C3.",
      "Vrai. La sphingosine comporte 18 carbones."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingosine-functions"
    }
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la formation du céramide, quelles propositions sont exactes ?",
    "choices": [
      "Il associe glycérol et trois acides gras.",
      "Le carboxyle de l’acide gras réagit avec l’amine C2.",
      "Le céramide est central dans la famille.",
      "L’acide gras se fixe en C1 par phosphodiester."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La liaison amide entre sphingosine et acide gras forme le céramide.",
    "choiceExplanations": [
      "Faux. Il associe sphingosine et un acide gras.",
      "Vrai. Le carboxyle de l’acide gras réagit avec l’amine C2.",
      "Vrai. Le céramide est central dans la famille.",
      "Faux. Il se fixe à l’amine C2."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-formation"
    }
  },
  {
    "order": 123,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Chez un patient présentant une peau atopique très sèche, quelles propositions sur les céramides sont exactes ?",
    "choices": [
      "Ils sont uniquement des hormones circulantes.",
      "Ils participent à la cohésion cutanée.",
      "Ils contribuent à la barrière de l’épiderme.",
      "Ils augmentent toujours la perte d’eau."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les céramides sont essentiels à la barrière cutanée.",
    "choiceExplanations": [
      "Faux. Ils ont des rôles structuraux et de signalisation.",
      "Vrai. Ils participent à la cohésion cutanée.",
      "Vrai. Ils contribuent à la barrière de l’épiderme.",
      "Faux. Ils contrôlent l’hydratation."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "skin-barrier"
    }
  },
  {
    "order": 124,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la composition de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "Elle contient obligatoirement un oligosaccharide en C1.",
      "Elle ne contient aucune sphingosine.",
      "Elle associe céramide et acide phosphorique.",
      "La tête est polaire."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La sphingomyéline associe céramide, phosphate et alcool aminé.",
    "choiceExplanations": [
      "Faux. Elle porte une tête phosphatée.",
      "Faux. Le céramide en contient une.",
      "Vrai. Elle associe céramide et acide phosphorique.",
      "Vrai. La tête est polaire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 125,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une sclérose en plaques. Quelles propositions sont exactes ?",
    "choices": [
      "C’est une maladie de démyélinisation.",
      "La myéline contient des sphingomyélines.",
      "La démyélinisation améliore la conduction.",
      "C’est une maladie du stockage des triglycérides."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La richesse de la myéline en sphingomyéline explique l’intérêt neurologique.",
    "choiceExplanations": [
      "Vrai. C’est une maladie de démyélinisation.",
      "Vrai. La myéline contient des sphingomyélines.",
      "Faux. Elle la perturbe.",
      "Faux. C’est une maladie démyélinisante."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 126,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les glycosphingolipides, quelles propositions sont exactes ?",
    "choices": [
      "Ils dérivent d’un triglycéride.",
      "Ils ne portent pas de phosphate en C1.",
      "Ils dérivent d’un céramide.",
      "Ils portent toujours phosphate et choline."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les glycosphingolipides portent une tête glucidique sur C1.",
    "choiceExplanations": [
      "Faux. Ils dérivent du céramide.",
      "Vrai. Ils ne portent pas de phosphate en C1.",
      "Vrai. Ils dérivent d’un céramide.",
      "Faux. Cela caractérise la sphingomyéline."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glyco-general"
    }
  },
  {
    "order": 127,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les gangliosides, quelles propositions sont exactes ?",
    "choices": [
      "Ils dérivent souvent d’un lactosylcéramide.",
      "Ils sont toujours monosaccharidiques.",
      "Ils comportent plusieurs oses en C1.",
      "Ils ne contiennent aucun sucre."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les gangliosides portent une chaîne osidique sialylée.",
    "choiceExplanations": [
      "Vrai. Ils dérivent souvent d’un lactosylcéramide.",
      "Faux. Ils contiennent plusieurs oses.",
      "Vrai. Ils comportent plusieurs oses en C1.",
      "Faux. Ils portent une chaîne glycanique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 128,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la nomenclature des gangliosides, quelles propositions sont exactes ?",
    "choices": [
      "G indique un ganglioside.",
      "M signifie quatre acides sialiques.",
      "Le chiffre classe le nombre de résidus osidiques selon la convention.",
      "Le chiffre indique le nombre de carbones du céramide."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La nomenclature combine ganglioside, sialylation et classe osidique.",
    "choiceExplanations": [
      "Vrai. G indique un ganglioside.",
      "Faux. M signifie mono.",
      "Vrai. Le chiffre classe le nombre de résidus osidiques selon la convention.",
      "Faux. Il classe les résidus osidiques."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 129,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un enfant présente une hépatosplénomégalie avec accumulation de glucosylcéramide. Quelles propositions sont exactes ?",
    "choices": [
      "Elle accumule le glucosylcéramide.",
      "Elle ne touche jamais la rate.",
      "Elle est due à un excès de β-glucosidase.",
      "Elle implique un déficit en β-glucosidase."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Gaucher associe déficit en β-glucosidase et accumulation de glucosylcéramide.",
    "choiceExplanations": [
      "Vrai. Elle accumule le glucosylcéramide.",
      "Faux. La rate est citée.",
      "Faux. Elle est due à un déficit.",
      "Vrai. Elle implique un déficit en β-glucosidase."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 130,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un nourrisson présente une régression psychomotrice avec accumulation de GM2. Quelles propositions sont exactes ?",
    "choices": [
      "Elle est due à un déficit en α-galactosidase.",
      "Elle accumule l’acide phosphatidique.",
      "Elle provoque une maladie neurodégénérative.",
      "Elle implique un déficit en β-hexosaminidase."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Tay-Sachs associe déficit en β-hexosaminidase et accumulation de GM2.",
    "choiceExplanations": [
      "Faux. Cela décrit Fabry.",
      "Faux. Elle accumule le ganglioside GM2.",
      "Vrai. Elle provoque une maladie neurodégénérative.",
      "Vrai. Elle implique un déficit en β-hexosaminidase."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure de la sphingosine, quelles propositions sont exactes ?",
    "choices": [
      "La sphingosine comporte 18 carbones.",
      "Elle est un triacylglycérol.",
      "Elle porte une amine en C2.",
      "Elle comporte trois carbones."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La sphingosine est un aminodiol C18.",
    "choiceExplanations": [
      "Vrai. La sphingosine comporte 18 carbones.",
      "Faux. C’est un aminoalcool à longue chaîne.",
      "Vrai. Elle porte une amine en C2.",
      "Faux. Elle en comporte 18."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingosine-functions"
    }
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la formation du céramide, quelles propositions sont exactes ?",
    "choices": [
      "Un céramide associe sphingosine et acide gras.",
      "Le carboxyle de l’acide gras réagit avec l’amine C2.",
      "L’acide gras se fixe en C1 par phosphodiester.",
      "Le céramide ne donne aucun autre sphingolipide."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La liaison amide entre sphingosine et acide gras forme le céramide.",
    "choiceExplanations": [
      "Vrai. Un céramide associe sphingosine et acide gras.",
      "Vrai. Le carboxyle de l’acide gras réagit avec l’amine C2.",
      "Faux. Il se fixe à l’amine C2.",
      "Faux. Il est un précurseur central."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "ceramide-formation"
    }
  },
  {
    "order": 133,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Chez un patient présentant une peau atopique très sèche, quelles propositions sur les céramides sont exactes ?",
    "choices": [
      "Ils participent à la cohésion cutanée.",
      "Ils participent aux membranes.",
      "Ils sont absents de la peau.",
      "Ils n’ont aucun rôle structural."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les céramides sont essentiels à la barrière cutanée.",
    "choiceExplanations": [
      "Vrai. Ils participent à la cohésion cutanée.",
      "Vrai. Ils participent aux membranes.",
      "Faux. Ils participent à la barrière cutanée.",
      "Faux. Ils sont membranaires."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "skin-barrier"
    }
  },
  {
    "order": 134,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la composition de la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      "Elle porte généralement choline ou éthanolamine.",
      "La tête est polaire.",
      "Elle est un triacylglycérol.",
      "La choline est fixée par amide en C2."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La sphingomyéline associe céramide, phosphate et alcool aminé.",
    "choiceExplanations": [
      "Vrai. Elle porte généralement choline ou éthanolamine.",
      "Vrai. La tête est polaire.",
      "Faux. C’est un phosphosphingolipide.",
      "Faux. Elle est reliée via le phosphate en C1."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sphingomyelin-structure"
    }
  },
  {
    "order": 135,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une sclérose en plaques. Quelles propositions sont exactes ?",
    "choices": [
      "Une atteinte de la myéline perturbe la conduction nerveuse.",
      "La myéline est dépourvue de lipides.",
      "La fiche relie sphingomyéline et activité neuronale.",
      "C’est une maladie du stockage des triglycérides."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La richesse de la myéline en sphingomyéline explique l’intérêt neurologique.",
    "choiceExplanations": [
      "Vrai. Une atteinte de la myéline perturbe la conduction nerveuse.",
      "Faux. Elle est riche en lipides.",
      "Vrai. La fiche relie sphingomyéline et activité neuronale.",
      "Faux. C’est une maladie démyélinisante."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "myelin"
    }
  },
  {
    "order": 136,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les glycosphingolipides, quelles propositions sont exactes ?",
    "choices": [
      "La liaison est α-peptidique.",
      "Ils dérivent d’un triglycéride.",
      "La liaison est β-osidique.",
      "Ils ne portent pas de phosphate en C1."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les glycosphingolipides portent une tête glucidique sur C1.",
    "choiceExplanations": [
      "Faux. Elle est β-osidique.",
      "Faux. Ils dérivent du céramide.",
      "Vrai. La liaison est β-osidique.",
      "Vrai. Ils ne portent pas de phosphate en C1."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glyco-general"
    }
  },
  {
    "order": 137,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les gangliosides, quelles propositions sont exactes ?",
    "choices": [
      "Ils ne contiennent aucun sucre.",
      "Ils sont des phosphosphingolipides.",
      "La chaîne peut comporter 2 à 20 résidus.",
      "Ils dérivent souvent d’un lactosylcéramide."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les gangliosides portent une chaîne osidique sialylée.",
    "choiceExplanations": [
      "Faux. Ils portent une chaîne glycanique.",
      "Faux. Ce sont des glycosphingolipides.",
      "Vrai. La chaîne peut comporter 2 à 20 résidus.",
      "Vrai. Ils dérivent souvent d’un lactosylcéramide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 138,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la nomenclature des gangliosides, quelles propositions sont exactes ?",
    "choices": [
      "Le chiffre indique le nombre de carbones du céramide.",
      "G indique un ganglioside.",
      "GM3 est un monosialoganglioside.",
      "G indique un glycéride."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La nomenclature combine ganglioside, sialylation et classe osidique.",
    "choiceExplanations": [
      "Faux. Il classe les résidus osidiques.",
      "Vrai. G indique un ganglioside.",
      "Vrai. GM3 est un monosialoganglioside.",
      "Faux. Ici G indique ganglioside."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 139,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un enfant présente une hépatosplénomégalie avec accumulation de glucosylcéramide. Quelles propositions sont exactes ?",
    "choices": [
      "Elle accumule le glucosylcéramide.",
      "Elle ne touche jamais la rate.",
      "Elle peut toucher foie et rate.",
      "Elle résulte d’un déficit en α-galactosidase."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Gaucher associe déficit en β-glucosidase et accumulation de glucosylcéramide.",
    "choiceExplanations": [
      "Vrai. Elle accumule le glucosylcéramide.",
      "Faux. La rate est citée.",
      "Vrai. Elle peut toucher foie et rate.",
      "Faux. Cela décrit Fabry."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  },
  {
    "order": 140,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un nourrisson présente une régression psychomotrice avec accumulation de GM2. Quelles propositions sont exactes ?",
    "choices": [
      "Un retard psychomoteur peut apparaître.",
      "Elle accumule l’acide phosphatidique.",
      "Elle est une maladie nutritionnelle.",
      "Elle provoque une maladie neurodégénérative."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Tay-Sachs associe déficit en β-hexosaminidase et accumulation de GM2.",
    "choiceExplanations": [
      "Vrai. Un retard psychomoteur peut apparaître.",
      "Faux. Elle accumule le ganglioside GM2.",
      "Faux. C’est une sphingolipidose génétique.",
      "Vrai. Elle provoque une maladie neurodégénérative."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "disease-table"
    }
  }
];
