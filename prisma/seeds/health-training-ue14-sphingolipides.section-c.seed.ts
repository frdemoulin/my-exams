import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "61": [
    "les glycosphingolipides"
  ],
  "62": [
    "la localisation des glycosphingolipides"
  ],
  "63": [
    "les cérébrosides"
  ],
  "64": [
    "le glucosylcéramide"
  ],
  "65": [
    "le galactosylcéramide"
  ],
  "66": [
    "les gangliosides"
  ],
  "67": [
    "le lactosylcéramide"
  ],
  "68": [
    "la nomenclature des gangliosides"
  ],
  "69": [
    "le ganglioside GM3"
  ],
  "70": [
    "la comparaison cérébrosides-gangliosides"
  ],
  "71": [
    "les glycosphingolipides"
  ],
  "72": [
    "la localisation des glycosphingolipides"
  ],
  "73": [
    "les cérébrosides"
  ],
  "74": [
    "le glucosylcéramide"
  ],
  "75": [
    "le galactosylcéramide"
  ],
  "76": [
    "les gangliosides"
  ],
  "77": [
    "le lactosylcéramide"
  ],
  "78": [
    "la nomenclature des gangliosides"
  ],
  "79": [
    "le ganglioside GM3"
  ],
  "80": [
    "la comparaison cérébrosides-gangliosides"
  ],
  "81": [
    "les glycosphingolipides"
  ],
  "82": [
    "la localisation des glycosphingolipides"
  ],
  "83": [
    "les cérébrosides"
  ],
  "84": [
    "le glucosylcéramide"
  ],
  "85": [
    "le galactosylcéramide"
  ],
  "86": [
    "les gangliosides"
  ],
  "87": [
    "le lactosylcéramide"
  ],
  "88": [
    "la nomenclature des gangliosides"
  ],
  "89": [
    "le ganglioside GM3"
  ],
  "90": [
    "la comparaison cérébrosides-gangliosides"
  ]
};

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "glycosphingolipids-fondamentaux",
    "title": "Glycosphingolipides et cérébrosides",
    "description": "Acquérir les notions fondamentales de la section.",
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
    "slug": "glycosphingolipids-applications",
    "title": "Gangliosides et nomenclature",
    "description": "Appliquer et comparer les notions de la section.",
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
    "slug": "glycosphingolipids-raisonnement",
    "title": "Raisonnement sur les têtes glucidiques",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 3,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères structuraux",
        "sharedStatement": "Les questions suivantes mobilisent les principaux repères structuraux de la section.",
        "questionOrders": [
          81,
          82,
          83
        ]
      },
      {
        "type": "GROUP",
        "title": "Propriétés et fonctions",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          84,
          85,
          86
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques et médicales",
        "sharedStatement": "Les questions suivantes replacent les notions dans leur contexte biologique ou médical.",
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
    "question": "À propos de les glycosphingolipides :",
    "choices": [
      "Ils dérivent d’un céramide.",
      "La liaison est α-peptidique.",
      "Ils ne portent pas de phosphate en C1.",
      "La liaison est β-osidique."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les glycosphingolipides portent une tête glucidique sur C1.",
    "choiceExplanations": [
      "Vrai. Ils dérivent d’un céramide.",
      "Faux. Elle est β-osidique.",
      "Vrai. Ils ne portent pas de phosphate en C1.",
      "Vrai. La liaison est β-osidique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glyco-general"
    }
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la localisation des glycosphingolipides :",
    "choices": [
      "La tête glucidique est enfouie dans le cœur hydrophobe.",
      "Leur tête glucidique participe aux interactions cellulaires.",
      "Ils sont retrouvés dans le cerveau.",
      "Ils sont membranaires."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les glycosphingolipides sont importants dans les membranes nerveuses.",
    "choiceExplanations": [
      "Faux. Elle est exposée au milieu aqueux.",
      "Vrai. Leur tête glucidique participe aux interactions cellulaires.",
      "Vrai. Ils sont retrouvés dans le cerveau.",
      "Vrai. Ils sont membranaires."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glyco-general"
    }
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les cérébrosides :",
    "choices": [
      "Ils comportent un seul ose en C1.",
      "L’ose peut être glucose ou galactose.",
      "La liaison est β-osidique.",
      "Ils comportent vingt oses."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les cérébrosides sont des céramides portant un seul ose.",
    "choiceExplanations": [
      "Vrai. Ils comportent un seul ose en C1.",
      "Vrai. L’ose peut être glucose ou galactose.",
      "Vrai. La liaison est β-osidique.",
      "Faux. Ils en comportent un seul."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cerebrosides"
    }
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le glucosylcéramide :",
    "choices": [
      "Il est une phosphatidylcholine.",
      "Il est présent dans les tissus nerveux.",
      "Il est associé à la substance blanche.",
      "Il contient un glucose."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le glucosylcéramide est un cérébroside nerveux.",
    "choiceExplanations": [
      "Faux. C’est un glycosphingolipide.",
      "Vrai. Il est présent dans les tissus nerveux.",
      "Vrai. Il est associé à la substance blanche.",
      "Vrai. Il contient un glucose."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cerebrosides"
    }
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le galactosylcéramide :",
    "choices": [
      "Il est dépourvu de sphingosine.",
      "Il est un cérébroside.",
      "La fiche cite peau, intestin et vessie.",
      "Il contient un galactose."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le galactosylcéramide est un cérébroside épithélial.",
    "choiceExplanations": [
      "Faux. Il dérive d’un céramide.",
      "Vrai. Il est un cérébroside.",
      "Vrai. La fiche cite peau, intestin et vessie.",
      "Vrai. Il contient un galactose."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cerebrosides"
    }
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les gangliosides :",
    "choices": [
      "Ils comportent plusieurs oses en C1.",
      "Ils dérivent souvent d’un lactosylcéramide.",
      "Ils contiennent un ou plusieurs acides sialiques.",
      "Ils sont des phosphosphingolipides."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les gangliosides portent une chaîne osidique sialylée.",
    "choiceExplanations": [
      "Vrai. Ils comportent plusieurs oses en C1.",
      "Vrai. Ils dérivent souvent d’un lactosylcéramide.",
      "Vrai. Ils contiennent un ou plusieurs acides sialiques.",
      "Faux. Ce sont des glycosphingolipides."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le lactosylcéramide :",
    "choices": [
      "Il possède deux résidus osidiques.",
      "Il associe céramide et phosphate uniquement.",
      "Il associe céramide, glucose et galactose.",
      "Il peut servir de base à des gangliosides."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le lactosylcéramide est un précurseur disaccharidique.",
    "choiceExplanations": [
      "Vrai. Il possède deux résidus osidiques.",
      "Faux. Il porte glucose et galactose.",
      "Vrai. Il associe céramide, glucose et galactose.",
      "Vrai. Il peut servir de base à des gangliosides."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la nomenclature des gangliosides :",
    "choices": [
      "G indique un ganglioside.",
      "Le chiffre classe le nombre de résidus osidiques selon la convention.",
      "G indique un glycéride.",
      "M, D, T et Q indiquent 1, 2, 3 ou 4 acides sialiques."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La nomenclature combine ganglioside, sialylation et classe osidique.",
    "choiceExplanations": [
      "Vrai. G indique un ganglioside.",
      "Vrai. Le chiffre classe le nombre de résidus osidiques selon la convention.",
      "Faux. Ici G indique ganglioside.",
      "Vrai. M, D, T et Q indiquent 1, 2, 3 ou 4 acides sialiques."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le ganglioside GM3 :",
    "choices": [
      "Il contient un seul acide sialique.",
      "GM3 est un monosialoganglioside.",
      "Sa chaîne est céramide-glucose-galactose-NANA.",
      "NANA est un acide gras."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "GM3 est un ganglioside simple contenant un NANA.",
    "choiceExplanations": [
      "Vrai. Il contient un seul acide sialique.",
      "Vrai. GM3 est un monosialoganglioside.",
      "Vrai. Sa chaîne est céramide-glucose-galactose-NANA.",
      "Faux. NANA est un acide sialique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la comparaison cérébrosides-gangliosides :",
    "choices": [
      "Les cérébrosides portent un seul ose.",
      "Les gangliosides ne contiennent aucun glucide.",
      "Les deux dérivent du céramide.",
      "Les gangliosides portent plusieurs oses et de l’acide sialique."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Ils diffèrent par la complexité et la sialylation de la tête.",
    "choiceExplanations": [
      "Vrai. Les cérébrosides portent un seul ose.",
      "Faux. Ils portent une chaîne glycanique.",
      "Vrai. Les deux dérivent du céramide.",
      "Vrai. Les gangliosides portent plusieurs oses et de l’acide sialique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "family-tree"
    }
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les glycosphingolipides, quelles propositions sont exactes ?",
    "choices": [
      "La liaison est β-osidique.",
      "Un ou plusieurs oses se fixent en C1.",
      "Ils portent toujours phosphate et choline.",
      "Le sucre se fixe en C2 sur l’amine."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les glycosphingolipides portent une tête glucidique sur C1.",
    "choiceExplanations": [
      "Vrai. La liaison est β-osidique.",
      "Vrai. Un ou plusieurs oses se fixent en C1.",
      "Faux. Cela caractérise la sphingomyéline.",
      "Faux. Il se fixe en C1."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glyco-general"
    }
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la localisation des glycosphingolipides, quelles propositions sont exactes ?",
    "choices": [
      "Ils sont des enzymes solubles.",
      "Ils sont absents du tissu nerveux.",
      "Ils sont membranaires.",
      "Ils sont retrouvés au niveau des ganglions."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les glycosphingolipides sont importants dans les membranes nerveuses.",
    "choiceExplanations": [
      "Faux. Ce sont des lipides membranaires.",
      "Faux. Ils sont présents dans le cerveau.",
      "Vrai. Ils sont membranaires.",
      "Vrai. Ils sont retrouvés au niveau des ganglions."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glyco-general"
    }
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les cérébrosides, quelles propositions sont exactes ?",
    "choices": [
      "Le sucre est lié par amide.",
      "L’ose peut être glucose ou galactose.",
      "La liaison est β-osidique.",
      "Ils comportent vingt oses."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les cérébrosides sont des céramides portant un seul ose.",
    "choiceExplanations": [
      "Faux. Il est lié par liaison osidique.",
      "Vrai. L’ose peut être glucose ou galactose.",
      "Vrai. La liaison est β-osidique.",
      "Faux. Ils en comportent un seul."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cerebrosides"
    }
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le glucosylcéramide, quelles propositions sont exactes ?",
    "choices": [
      "Il n’est jamais impliqué dans Gaucher.",
      "Il est une phosphatidylcholine.",
      "Il est un cérébroside.",
      "Il est présent dans les tissus nerveux."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le glucosylcéramide est un cérébroside nerveux.",
    "choiceExplanations": [
      "Faux. Son accumulation caractérise Gaucher.",
      "Faux. C’est un glycosphingolipide.",
      "Vrai. Il est un cérébroside.",
      "Vrai. Il est présent dans les tissus nerveux."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cerebrosides"
    }
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le galactosylcéramide, quelles propositions sont exactes ?",
    "choices": [
      "Il est dépourvu de sphingosine.",
      "Il est absent de la peau.",
      "La fiche cite peau, intestin et vessie.",
      "Il contient un galactose."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le galactosylcéramide est un cérébroside épithélial.",
    "choiceExplanations": [
      "Faux. Il dérive d’un céramide.",
      "Faux. La peau est citée.",
      "Vrai. La fiche cite peau, intestin et vessie.",
      "Vrai. Il contient un galactose."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cerebrosides"
    }
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les gangliosides, quelles propositions sont exactes ?",
    "choices": [
      "Ils contiennent un ou plusieurs acides sialiques.",
      "Ils dérivent souvent d’un lactosylcéramide.",
      "Ils ne contiennent aucun sucre.",
      "Ils sont toujours monosaccharidiques."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les gangliosides portent une chaîne osidique sialylée.",
    "choiceExplanations": [
      "Vrai. Ils contiennent un ou plusieurs acides sialiques.",
      "Vrai. Ils dérivent souvent d’un lactosylcéramide.",
      "Faux. Ils portent une chaîne glycanique.",
      "Faux. Ils contiennent plusieurs oses."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le lactosylcéramide, quelles propositions sont exactes ?",
    "choices": [
      "Il appartient aux glycosphingolipides.",
      "Il associe céramide et phosphate uniquement.",
      "Il associe céramide, glucose et galactose.",
      "Il ne contient aucun céramide."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le lactosylcéramide est un précurseur disaccharidique.",
    "choiceExplanations": [
      "Vrai. Il appartient aux glycosphingolipides.",
      "Faux. Il porte glucose et galactose.",
      "Vrai. Il associe céramide, glucose et galactose.",
      "Faux. Le céramide en est la base."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la nomenclature des gangliosides, quelles propositions sont exactes ?",
    "choices": [
      "M signifie quatre acides sialiques.",
      "GM3 est un monosialoganglioside.",
      "Le chiffre classe le nombre de résidus osidiques selon la convention.",
      "G indique un glycéride."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La nomenclature combine ganglioside, sialylation et classe osidique.",
    "choiceExplanations": [
      "Faux. M signifie mono.",
      "Vrai. GM3 est un monosialoganglioside.",
      "Vrai. Le chiffre classe le nombre de résidus osidiques selon la convention.",
      "Faux. Ici G indique ganglioside."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le ganglioside GM3, quelles propositions sont exactes ?",
    "choices": [
      "Sa chaîne est céramide-glucose-galactose-NANA.",
      "GM3 est une sphingomyéline.",
      "Il appartient aux glycosphingolipides.",
      "GM3 contient trois acides sialiques."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "GM3 est un ganglioside simple contenant un NANA.",
    "choiceExplanations": [
      "Vrai. Sa chaîne est céramide-glucose-galactose-NANA.",
      "Faux. C’est un ganglioside.",
      "Vrai. Il appartient aux glycosphingolipides.",
      "Faux. M indique un seul acide sialique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la comparaison cérébrosides-gangliosides, quelles propositions sont exactes ?",
    "choices": [
      "Les deux dérivent du céramide.",
      "Seuls les gangliosides dérivent du glycérol.",
      "Les gangliosides ne contiennent aucun glucide.",
      "Les deux ont une liaison osidique en C1."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Ils diffèrent par la complexité et la sialylation de la tête.",
    "choiceExplanations": [
      "Vrai. Les deux dérivent du céramide.",
      "Faux. Les deux dérivent du céramide.",
      "Faux. Ils portent une chaîne glycanique.",
      "Vrai. Les deux ont une liaison osidique en C1."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "family-tree"
    }
  },
  {
    "order": 81,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les glycosphingolipides, quelles propositions sont exactes ?",
    "choices": [
      "La liaison est β-osidique.",
      "Ils dérivent d’un triglycéride.",
      "Ils dérivent d’un céramide.",
      "La liaison est α-peptidique."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les glycosphingolipides portent une tête glucidique sur C1.",
    "choiceExplanations": [
      "Vrai. La liaison est β-osidique.",
      "Faux. Ils dérivent du céramide.",
      "Vrai. Ils dérivent d’un céramide.",
      "Faux. Elle est β-osidique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glyco-general"
    }
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la localisation des glycosphingolipides, quelles propositions sont exactes ?",
    "choices": [
      "Ils sont des enzymes solubles.",
      "La tête glucidique est enfouie dans le cœur hydrophobe.",
      "Ils sont membranaires.",
      "Ils sont retrouvés dans le cerveau."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les glycosphingolipides sont importants dans les membranes nerveuses.",
    "choiceExplanations": [
      "Faux. Ce sont des lipides membranaires.",
      "Faux. Elle est exposée au milieu aqueux.",
      "Vrai. Ils sont membranaires.",
      "Vrai. Ils sont retrouvés dans le cerveau."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glyco-general"
    }
  },
  {
    "order": 83,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les cérébrosides, quelles propositions sont exactes ?",
    "choices": [
      "Ils comportent un seul ose en C1.",
      "Ils contiennent toujours un phosphate.",
      "Ils sont des triglycérides.",
      "Ils sont des glycosphingolipides simples."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les cérébrosides sont des céramides portant un seul ose.",
    "choiceExplanations": [
      "Vrai. Ils comportent un seul ose en C1.",
      "Faux. Ils sont dépourvus de phosphate en C1.",
      "Faux. Ce sont des glycosphingolipides.",
      "Vrai. Ils sont des glycosphingolipides simples."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cerebrosides"
    }
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le glucosylcéramide, quelles propositions sont exactes ?",
    "choices": [
      "Il contient un glucose.",
      "Il est présent dans les tissus nerveux.",
      "Il contient obligatoirement un galactose.",
      "Il est dépourvu de céramide."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le glucosylcéramide est un cérébroside nerveux.",
    "choiceExplanations": [
      "Vrai. Il contient un glucose.",
      "Vrai. Il est présent dans les tissus nerveux.",
      "Faux. Il contient un glucose.",
      "Faux. Le céramide est son squelette."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cerebrosides"
    }
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le galactosylcéramide, quelles propositions sont exactes ?",
    "choices": [
      "La fiche cite peau, intestin et vessie.",
      "Il est un cérébroside.",
      "Il est absent de la peau.",
      "Il est dépourvu de sphingosine."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le galactosylcéramide est un cérébroside épithélial.",
    "choiceExplanations": [
      "Vrai. La fiche cite peau, intestin et vessie.",
      "Vrai. Il est un cérébroside.",
      "Faux. La peau est citée.",
      "Faux. Il dérive d’un céramide."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cerebrosides"
    }
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les gangliosides, quelles propositions sont exactes ?",
    "choices": [
      "Ils dérivent souvent d’un lactosylcéramide.",
      "La chaîne peut comporter 2 à 20 résidus.",
      "Ils ne contiennent aucun sucre.",
      "Ils sont des phosphosphingolipides."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les gangliosides portent une chaîne osidique sialylée.",
    "choiceExplanations": [
      "Vrai. Ils dérivent souvent d’un lactosylcéramide.",
      "Vrai. La chaîne peut comporter 2 à 20 résidus.",
      "Faux. Ils portent une chaîne glycanique.",
      "Faux. Ce sont des glycosphingolipides."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le lactosylcéramide, quelles propositions sont exactes ?",
    "choices": [
      "Il associe céramide et phosphate uniquement.",
      "Il appartient aux glycosphingolipides.",
      "Il ne contient aucun céramide.",
      "Il possède deux résidus osidiques."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le lactosylcéramide est un précurseur disaccharidique.",
    "choiceExplanations": [
      "Faux. Il porte glucose et galactose.",
      "Vrai. Il appartient aux glycosphingolipides.",
      "Faux. Le céramide en est la base.",
      "Vrai. Il possède deux résidus osidiques."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la nomenclature des gangliosides, quelles propositions sont exactes ?",
    "choices": [
      "GM3 est un monosialoganglioside.",
      "Le chiffre classe le nombre de résidus osidiques selon la convention.",
      "GM3 ne contient aucun acide sialique.",
      "M signifie quatre acides sialiques."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La nomenclature combine ganglioside, sialylation et classe osidique.",
    "choiceExplanations": [
      "Vrai. GM3 est un monosialoganglioside.",
      "Vrai. Le chiffre classe le nombre de résidus osidiques selon la convention.",
      "Faux. Il contient un NANA.",
      "Faux. M signifie mono."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le ganglioside GM3, quelles propositions sont exactes ?",
    "choices": [
      "GM3 est une sphingomyéline.",
      "GM3 est un monosialoganglioside.",
      "NANA est un acide gras.",
      "Il contient un seul acide sialique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "GM3 est un ganglioside simple contenant un NANA.",
    "choiceExplanations": [
      "Faux. C’est un ganglioside.",
      "Vrai. GM3 est un monosialoganglioside.",
      "Faux. NANA est un acide sialique.",
      "Vrai. Il contient un seul acide sialique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "gangliosides"
    }
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la comparaison cérébrosides-gangliosides, quelles propositions sont exactes ?",
    "choices": [
      "Les gangliosides portent plusieurs oses et de l’acide sialique.",
      "Les deux sont des phospholipides à choline.",
      "Les gangliosides ne contiennent aucun glucide.",
      "Les cérébrosides portent un seul ose."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Ils diffèrent par la complexité et la sialylation de la tête.",
    "choiceExplanations": [
      "Vrai. Les gangliosides portent plusieurs oses et de l’acide sialique.",
      "Faux. Ils sont des glycosphingolipides.",
      "Faux. Ils portent une chaîne glycanique.",
      "Vrai. Les cérébrosides portent un seul ose."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "family-tree"
    }
  }
];
