import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 5;

export const SYNTHESIS_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "121": [
    "le noyau stérane"
  ],
  "122": [
    "la définition des stérides"
  ],
  "123": [
    "la structure du cholestérol"
  ],
  "124": [
    "les rôles membranaires du cholestérol"
  ],
  "125": [
    "la vitamine D"
  ],
  "126": [
    "le noyau estrane"
  ],
  "127": [
    "le noyau prégnane"
  ],
  "128": [
    "les effets rénaux de l’aldostérone"
  ],
  "129": [
    "les effets anti-inflammatoires du cortisol"
  ],
  "130": [
    "la progestérone"
  ],
  "131": [
    "le noyau stérane"
  ],
  "132": [
    "la définition des stérides"
  ],
  "133": [
    "la structure du cholestérol"
  ],
  "134": [
    "les rôles membranaires du cholestérol"
  ],
  "135": [
    "la vitamine D"
  ],
  "136": [
    "le noyau estrane"
  ],
  "137": [
    "le noyau prégnane"
  ],
  "138": [
    "les effets rénaux de l’aldostérone"
  ],
  "139": [
    "les effets anti-inflammatoires du cortisol"
  ],
  "140": [
    "la progestérone"
  ]
};

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "sterols-steroides-et-sterides-synthese-1",
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
    "slug": "sterols-steroides-et-sterides-synthese-2",
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
    "question": "Dans une question transversale sur le noyau stérane, quelles propositions sont exactes ?",
    "choices": [
      "Les cycles A, B et C ont six carbones.",
      "Il comporte quatre cycles fusionnés.",
      "Il ne contient aucun cycle saturé.",
      "Les quatre cycles ont six carbones."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le noyau stérane associe trois cycles C6 et un cycle C5.",
    "choiceExplanations": [
      "Vrai. Les cycles A, B et C ont six carbones.",
      "Vrai. Il comporte quatre cycles fusionnés.",
      "Faux. Le noyau de référence est saturé.",
      "Faux. Le cycle D en a cinq."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane"
    }
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la définition des stérides, quelles propositions sont exactes ?",
    "choices": [
      "Ils ne peuvent exister dans les cellules.",
      "Un stéride est un stérol libre amphiphile.",
      "Ils sont hydrophobes.",
      "Les stérides servent au stockage et au transport des stérols."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’estérification du C3 produit une forme hydrophobe de stockage.",
    "choiceExplanations": [
      "Faux. Ils sont présents dans de nombreuses cellules.",
      "Faux. Il est estérifié et très hydrophobe.",
      "Vrai. Ils sont hydrophobes.",
      "Vrai. Les stérides servent au stockage et au transport des stérols."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 123,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      "Le cholestérol comporte 27 carbones.",
      "Il porte un OH en C3.",
      "Il possède uniquement une double liaison C17-C20.",
      "Il est dépourvu de noyau stérane."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le cholestérol est un stérol C27 avec OH C3 et double liaison C5-C6.",
    "choiceExplanations": [
      "Vrai. Le cholestérol comporte 27 carbones.",
      "Vrai. Il porte un OH en C3.",
      "Faux. La fiche indique C5-C6.",
      "Faux. Son noyau est stéranique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-structure"
    }
  },
  {
    "order": 124,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les rôles membranaires du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      "Il est absent des membranes animales.",
      "Son noyau rigide modifie l’organisation lipidique.",
      "Il est un constituant des membranes.",
      "Il n’interagit avec aucune protéine."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le cholestérol module structure et fluidité membranaires.",
    "choiceExplanations": [
      "Faux. Il en est un constituant important.",
      "Vrai. Son noyau rigide modifie l’organisation lipidique.",
      "Vrai. Il est un constituant des membranes.",
      "Faux. Il en régule l’activité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-roles"
    }
  },
  {
    "order": 125,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une fragilité osseuse par déficit en vitamine D. Quelles propositions sont exactes ?",
    "choices": [
      "Elle n’a aucun lien avec le cholestérol.",
      "Elle favorise l’absorption du calcium.",
      "Elle favorise l’absorption du phosphore.",
      "Elle favorise seulement sodium et potassium."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La vitamine D participe à l’homéostasie phosphocalcique.",
    "choiceExplanations": [
      "Faux. Elle en est un dérivé.",
      "Vrai. Elle favorise l’absorption du calcium.",
      "Vrai. Elle favorise l’absorption du phosphore.",
      "Faux. La fiche cite calcium et phosphore."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bile-vitd"
    }
  },
  {
    "order": 126,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le noyau estrane, quelles propositions sont exactes ?",
    "choices": [
      "Il comporte 18 carbones.",
      "Il possède deux chaînes C8.",
      "Il caractérise les œstrogènes.",
      "Il caractérise l’aldostérone."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le noyau estrane C18 caractérise les œstrogènes.",
    "choiceExplanations": [
      "Vrai. Il comporte 18 carbones.",
      "Faux. Il est le plus court des trois noyaux.",
      "Vrai. Il caractérise les œstrogènes.",
      "Faux. L’aldostérone est prégnane."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "steroid-nuclei"
    }
  },
  {
    "order": 127,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le noyau prégnane, quelles propositions sont exactes ?",
    "choices": [
      "Il caractérise le cortisol.",
      "Il caractérise l’aldostérone.",
      "Il caractérise exclusivement les œstrogènes.",
      "Il est dépourvu de méthyles C10 et C13."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le prégnane C21 est commun aux progestagènes et corticostéroïdes.",
    "choiceExplanations": [
      "Vrai. Il caractérise le cortisol.",
      "Vrai. Il caractérise l’aldostérone.",
      "Faux. Les œstrogènes sont estranes.",
      "Faux. La fiche en mentionne deux."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "steroid-nuclei"
    }
  },
  {
    "order": 128,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente hypertension et hypokaliémie par excès d’aldostérone. Quelles propositions sont exactes ?",
    "choices": [
      "Elle n’agit jamais au rein.",
      "Elle favorise l’élimination des protons.",
      "Elle provoque uniquement une perte de sodium.",
      "Elle favorise l’élimination du potassium."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’aldostérone favorise rétention sodée et excrétion K+/H+.",
    "choiceExplanations": [
      "Faux. Le rein est sa cible majeure.",
      "Vrai. Elle favorise l’élimination des protons.",
      "Faux. Elle favorise sa réabsorption.",
      "Vrai. Elle favorise l’élimination du potassium."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-kidney"
    }
  },
  {
    "order": 129,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient reçoit une corticothérapie prolongée. Quelles propositions sont exactes ?",
    "choices": [
      "Il stimule toujours toutes les réponses immunitaires.",
      "Il peut inhiber certains lymphocytes T.",
      "Ils augmentent toujours les lymphocytes T.",
      "Il a une action immunosuppressive."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les glucocorticoïdes sont utilisés pour leurs effets anti-inflammatoires.",
    "choiceExplanations": [
      "Faux. Il est immunosuppresseur.",
      "Vrai. Il peut inhiber certains lymphocytes T.",
      "Faux. Ils peuvent en inhiber la prolifération.",
      "Vrai. Il a une action immunosuppressive."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cortisol"
    }
  },
  {
    "order": 130,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une patiente suit sa température basale après l’ovulation. Quelles propositions sont exactes ?",
    "choices": [
      "Elle n’a aucun rôle mammaire.",
      "Elle stimule les sécrétions et le développement de l’endomètre.",
      "Elle augmente la température centrale après l’ovulation.",
      "Elle diminue toujours la température post-ovulatoire."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La progestérone soutient la phase lutéale et augmente la température basale.",
    "choiceExplanations": [
      "Faux. Elle participe au développement des canaux mammaires.",
      "Vrai. Elle stimule les sécrétions et le développement de l’endomètre.",
      "Vrai. Elle augmente la température centrale après l’ovulation.",
      "Faux. Elle l’augmente."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "progesterone"
    }
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le noyau stérane, quelles propositions sont exactes ?",
    "choices": [
      "Il comporte cinq cycles indépendants.",
      "Il est un monosaccharide.",
      "Il comporte quatre cycles fusionnés.",
      "Le cycle D a cinq carbones."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le noyau stérane associe trois cycles C6 et un cycle C5.",
    "choiceExplanations": [
      "Faux. Il comporte quatre cycles fusionnés.",
      "Faux. C’est un noyau hydrocarboné polycyclique.",
      "Vrai. Il comporte quatre cycles fusionnés.",
      "Vrai. Le cycle D a cinq carbones."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "sterane"
    }
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la définition des stérides, quelles propositions sont exactes ?",
    "choices": [
      "Ils ne peuvent exister dans les cellules.",
      "Ils sont hydrophobes.",
      "Un stéride est un stérol libre amphiphile.",
      "L’acide gras estérifie l’OH du C3."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’estérification du C3 produit une forme hydrophobe de stockage.",
    "choiceExplanations": [
      "Faux. Ils sont présents dans de nombreuses cellules.",
      "Vrai. Ils sont hydrophobes.",
      "Faux. Il est estérifié et très hydrophobe.",
      "Vrai. L’acide gras estérifie l’OH du C3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "families"
    }
  },
  {
    "order": 133,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      "Il possède quatre cycles A à D.",
      "Il porte un OH en C3.",
      "Il possède uniquement une double liaison C17-C20.",
      "Il comporte 18 carbones."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le cholestérol est un stérol C27 avec OH C3 et double liaison C5-C6.",
    "choiceExplanations": [
      "Vrai. Il possède quatre cycles A à D.",
      "Vrai. Il porte un OH en C3.",
      "Faux. La fiche indique C5-C6.",
      "Faux. Il en comporte 27."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-structure"
    }
  },
  {
    "order": 134,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les rôles membranaires du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      "Il augmente toujours la fluidité sans nuance.",
      "Il contrôle la fluidité.",
      "Son noyau rigide modifie l’organisation lipidique.",
      "Il n’interagit avec aucune protéine."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le cholestérol module structure et fluidité membranaires.",
    "choiceExplanations": [
      "Faux. Il la régule.",
      "Vrai. Il contrôle la fluidité.",
      "Vrai. Son noyau rigide modifie l’organisation lipidique.",
      "Faux. Il en régule l’activité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cholesterol-roles"
    }
  },
  {
    "order": 135,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une fragilité osseuse par déficit en vitamine D. Quelles propositions sont exactes ?",
    "choices": [
      "Elle favorise l’absorption du calcium.",
      "Elle participe à la minéralisation osseuse.",
      "Elle n’a aucun lien avec le cholestérol.",
      "Elle favorise seulement sodium et potassium."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La vitamine D participe à l’homéostasie phosphocalcique.",
    "choiceExplanations": [
      "Vrai. Elle favorise l’absorption du calcium.",
      "Vrai. Elle participe à la minéralisation osseuse.",
      "Faux. Elle en est un dérivé.",
      "Faux. La fiche cite calcium et phosphore."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "bile-vitd"
    }
  },
  {
    "order": 136,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le noyau estrane, quelles propositions sont exactes ?",
    "choices": [
      "Il caractérise les œstrogènes.",
      "Il caractérise l’aldostérone.",
      "Il porte un méthyle en C13β dans la fiche.",
      "Il caractérise la testostérone."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le noyau estrane C18 caractérise les œstrogènes.",
    "choiceExplanations": [
      "Vrai. Il caractérise les œstrogènes.",
      "Faux. L’aldostérone est prégnane.",
      "Vrai. Il porte un méthyle en C13β dans la fiche.",
      "Faux. La testostérone est androstane."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "steroid-nuclei"
    }
  },
  {
    "order": 137,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le noyau prégnane, quelles propositions sont exactes ?",
    "choices": [
      "Il caractérise la progestérone.",
      "Il caractérise le cortisol.",
      "Il comporte 18 carbones.",
      "Il ne possède aucun maillon en C17."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le prégnane C21 est commun aux progestagènes et corticostéroïdes.",
    "choiceExplanations": [
      "Vrai. Il caractérise la progestérone.",
      "Vrai. Il caractérise le cortisol.",
      "Faux. Il en comporte 21.",
      "Faux. Il comporte un maillon dicarboné en C17β."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "steroid-nuclei"
    }
  },
  {
    "order": 138,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente hypertension et hypokaliémie par excès d’aldostérone. Quelles propositions sont exactes ?",
    "choices": [
      "Elle diminue nécessairement le volume plasmatique.",
      "Elle participe au maintien de la pression artérielle.",
      "Elle favorise la réabsorption du sodium.",
      "Elle provoque uniquement une perte de sodium."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’aldostérone favorise rétention sodée et excrétion K+/H+.",
    "choiceExplanations": [
      "Faux. Elle contribue à le maintenir.",
      "Vrai. Elle participe au maintien de la pression artérielle.",
      "Vrai. Elle favorise la réabsorption du sodium.",
      "Faux. Elle favorise sa réabsorption."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-kidney"
    }
  },
  {
    "order": 139,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient reçoit une corticothérapie prolongée. Quelles propositions sont exactes ?",
    "choices": [
      "Il a une action anti-inflammatoire.",
      "Ils augmentent toujours les lymphocytes T.",
      "Il peut inhiber certains lymphocytes T.",
      "Il est exclusivement pro-inflammatoire."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les glucocorticoïdes sont utilisés pour leurs effets anti-inflammatoires.",
    "choiceExplanations": [
      "Vrai. Il a une action anti-inflammatoire.",
      "Faux. Ils peuvent en inhiber la prolifération.",
      "Vrai. Il peut inhiber certains lymphocytes T.",
      "Faux. Il est anti-inflammatoire."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cortisol"
    }
  },
  {
    "order": 140,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une patiente suit sa température basale après l’ovulation. Quelles propositions sont exactes ?",
    "choices": [
      "Elle est produite uniquement par Leydig.",
      "Elle augmente la température centrale après l’ovulation.",
      "Elle détruit l’endomètre en phase lutéale.",
      "Elle stimule les sécrétions et le développement de l’endomètre."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La progestérone soutient la phase lutéale et augmente la température basale.",
    "choiceExplanations": [
      "Faux. Elle est produite par ovaire et placenta.",
      "Vrai. Elle augmente la température centrale après l’ovulation.",
      "Faux. Elle favorise son développement.",
      "Vrai. Elle stimule les sécrétions et le développement de l’endomètre."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "progesterone"
    }
  }
];
