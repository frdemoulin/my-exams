import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "61": [
    "Mono- et polydésaturés"
  ],
  "62": [
    "Description des doubles liaisons"
  ],
  "63": [
    "Notation delta"
  ],
  "64": [
    "Séries oméga"
  ],
  "65": [
    "Acide palmitoléique"
  ],
  "66": [
    "Acide oléique"
  ],
  "67": [
    "Acide linoléique"
  ],
  "68": [
    "Acide linolénique"
  ],
  "69": [
    "Acides gras essentiels"
  ],
  "70": [
    "Conversions et comparaisons Δ/ω"
  ],
  "71": [
    "Mono- et polydésaturés"
  ],
  "72": [
    "Description des doubles liaisons"
  ],
  "73": [
    "Notation delta"
  ],
  "74": [
    "Séries oméga"
  ],
  "75": [
    "Acide palmitoléique"
  ],
  "76": [
    "Acide oléique"
  ],
  "77": [
    "Acide linoléique"
  ],
  "78": [
    "Acide linolénique"
  ],
  "79": [
    "Acides gras essentiels"
  ],
  "80": [
    "Conversions et comparaisons Δ/ω"
  ],
  "81": [
    "Mono- et polydésaturés"
  ],
  "82": [
    "Description des doubles liaisons"
  ],
  "83": [
    "Notation delta"
  ],
  "84": [
    "Séries oméga"
  ],
  "85": [
    "Acide palmitoléique"
  ],
  "86": [
    "Acide oléique"
  ],
  "87": [
    "Acide linoléique"
  ],
  "88": [
    "Acide linolénique"
  ],
  "89": [
    "Acides gras essentiels"
  ],
  "90": [
    "Conversions et comparaisons Δ/ω"
  ]
};

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "doubles-liaisons-series-omega",
    "title": "Doubles liaisons et séries oméga",
    "description": "Dix questions ciblées sur cette partie du chapitre.",
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
    "slug": "desatures-reference",
    "title": "Acides gras désaturés de référence",
    "description": "Dix questions ciblées sur cette partie du chapitre.",
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
    "slug": "raisonnement-delta-omega",
    "title": "Raisonnement delta et oméga",
    "description": "Dix questions ciblées sur cette partie du chapitre.",
    "stage": "MASTER",
    "sectionOrder": 3,
    "items": [
      {
        "type": "GROUP",
        "title": "Analyse 1",
        "sharedStatement": "Les questions suivantes partagent un même axe de raisonnement.",
        "questionOrders": [
          81,
          82,
          83
        ]
      },
      {
        "type": "GROUP",
        "title": "Analyse 2",
        "sharedStatement": "Les questions suivantes croisent plusieurs notions de la section.",
        "questionOrders": [
          84,
          85,
          86
        ]
      },
      {
        "type": "GROUP",
        "title": "Analyse 3",
        "sharedStatement": "Les questions suivantes concluent le travail transversal.",
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
    "question": "À propos de mono- et polydésaturés :",
    "choices": [
      "Un monodésaturé possède une double liaison.",
      "Un polydésaturé possède exactement une double liaison.",
      "Monoénoïque est un terme associé à une double liaison.",
      "Polyénoïque signifie saturé."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le nombre de doubles liaisons distingue monoénoïques et polyénoïques.",
    "choiceExplanations": [
      "Vrai. Mono- signifie une.",
      "Faux. Faux : il en possède plusieurs.",
      "Vrai. Le suffixe décrit la désaturation.",
      "Faux. Faux : cela implique plusieurs C=C."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cis-trans-double-bond"
    }
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de description des doubles liaisons :",
    "choices": [
      "Cis et trans désignent le nombre total de carbones.",
      "Les doubles liaisons naturelles sont majoritairement cis selon la fiche.",
      "Une liaison simple et une double liaison ont toujours la même géométrie.",
      "La position des doubles liaisons doit être précisée."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Nombre, position et configuration décrivent les doubles liaisons.",
    "choiceExplanations": [
      "Faux. Faux : ils décrivent la géométrie.",
      "Vrai. Cette prédominance est indiquée.",
      "Faux. Faux : la C=C impose une géométrie.",
      "Vrai. Elle figure dans la nomenclature."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cis-trans-double-bond"
    }
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de notation delta :",
    "choices": [
      "La position indiquée est celle du premier carbone impliqué dans la double liaison.",
      "Le repère Δ part toujours du carbone oméga.",
      "Dans 18:1, 1 est le nombre de doubles liaisons.",
      "Δ9 signifie neuf carbones au total."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le repère Δ compte depuis le carbone carboxylique.",
    "choiceExplanations": [
      "Vrai. La fiche le précise.",
      "Faux. Faux : il part du COOH.",
      "Vrai. Le second nombre indique la désaturation.",
      "Faux. Faux : il s’agit d’une position."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "delta-omega-numbering"
    }
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de séries oméga :",
    "choices": [
      "La notation n-9 signifie neuf doubles liaisons.",
      "La série est couramment employée en nutrition.",
      "La série ne dépend jamais de la position des doubles liaisons.",
      "Le comptage de la série ω part du carbone oméga."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La série ω se détermine depuis le méthyle terminal.",
    "choiceExplanations": [
      "Faux. Faux : elle indique la série.",
      "Vrai. La fiche le souligne.",
      "Faux. Faux : elle dépend de la première C=C depuis ω.",
      "Vrai. C’est l’origine du repère."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "delta-omega-numbering"
    }
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de acide palmitoléique :",
    "choices": [
      "Son nom systématique est acide cis-9-hexadécamonoénoïque.",
      "L’acide palmitoléique est 16:0.",
      "Il possède une double liaison.",
      "Il possède 18 carbones."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le palmitoléique est le 16:1 Δ9 de série ω7.",
    "choiceExplanations": [
      "Vrai. C’est le nom indiqué.",
      "Faux. Faux : il est 16:1.",
      "Vrai. Le symbole contient :1.",
      "Faux. Faux : il en possède 16."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "oleic-palmitoleic"
    }
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de acide oléique :",
    "choices": [
      "Il appartient à la série ω7.",
      "Sa double liaison est en position Δ9.",
      "Il est polydésaturé à trois doubles liaisons.",
      "L’acide oléique possède 18 carbones."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’oléique est le 18:1 Δ9 de série ω9.",
    "choiceExplanations": [
      "Faux. Faux : il appartient à ω9.",
      "Vrai. La position est donnée.",
      "Faux. Faux : il est monodésaturé.",
      "Vrai. Le symbole commence par 18."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "oleic-palmitoleic"
    }
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de acide linoléique :",
    "choices": [
      "Il appartient à la série ω6 ou n-6.",
      "Ses doubles liaisons sont en positions Δ3 et Δ6.",
      "Il possède deux doubles liaisons.",
      "Il possède une seule double liaison."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le linoléique est le 18:2 Δ9,12 de série ω6.",
    "choiceExplanations": [
      "Vrai. 18 − 12 = 6.",
      "Faux. Faux : elles sont en Δ9 et Δ12.",
      "Vrai. Le symbole contient :2.",
      "Faux. Faux : il en possède deux."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "linoleic-linolenic"
    }
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de acide linolénique :",
    "choices": [
      "L’acide linolénique est 18:1.",
      "Ses doubles liaisons sont en positions Δ9, Δ12 et Δ15.",
      "Il est un acide gras saturé.",
      "Son nom systématique est acide toutes-cis-9,12,15-octadécatriénoïque."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le linolénique est le 18:3 Δ9,12,15 de série ω3.",
    "choiceExplanations": [
      "Faux. Faux : il est 18:3.",
      "Vrai. Les positions sont données.",
      "Faux. Faux : il est polydésaturé.",
      "Vrai. C’est le nom indiqué."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "linoleic-linolenic"
    }
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de acides gras essentiels :",
    "choices": [
      "L’acide linolénique est cité comme essentiel.",
      "Les mammifères synthétisent tous les polydésaturés sans limitation.",
      "Certains polydésaturés ne peuvent pas être synthétisés par les mammifères.",
      "L’acide palmitique est le seul exemple essentiel donné."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Linoléique et linolénique sont cités comme indispensables.",
    "choiceExplanations": [
      "Vrai. Il figure parmi les exemples.",
      "Faux. Faux : certains ne sont pas synthétisés.",
      "Vrai. La fiche le précise.",
      "Faux. Faux : les exemples sont linoléique et linolénique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "linoleic-linolenic"
    }
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de conversions et comparaisons δ/ω :",
    "choices": [
      "16:1 Δ9 appartient à la série ω9.",
      "18:1 Δ9 appartient à la série ω9.",
      "18:2 Δ9,12 appartient à la série ω12.",
      "Deux acides gras de longueurs différentes peuvent partager la même position Δ mais appartenir à des séries ω différentes."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les notations permettent de comparer longueur, position et série.",
    "choiceExplanations": [
      "Faux. Faux : il appartient à ω7.",
      "Vrai. 18 − 9 = 9.",
      "Faux. Faux : il appartient à ω6.",
      "Vrai. Palmitoléique et oléique l’illustrent."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "delta-omega-numbering"
    }
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant mono- et polydésaturés :",
    "choices": [
      "Polyénoïque est un terme associé à plusieurs doubles liaisons.",
      "Monoénoïque signifie trois doubles liaisons.",
      "Les polydésaturés présentés possèdent entre 2 et 6 doubles liaisons.",
      "Un polydésaturé possède plusieurs doubles liaisons."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le nombre de doubles liaisons distingue monoénoïques et polyénoïques.",
    "choiceExplanations": [
      "Vrai. Le suffixe décrit la désaturation.",
      "Faux. Faux : cela signifie une.",
      "Vrai. C’est l’intervalle donné.",
      "Vrai. Poly- signifie plusieurs."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cis-trans-double-bond"
    }
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant description des doubles liaisons :",
    "choices": [
      "La position des doubles liaisons n’intervient jamais dans le nom.",
      "Le nombre de doubles liaisons doit être précisé.",
      "La configuration cis ou trans doit être précisée.",
      "Cis et trans correspondent à des dispositions spatiales différentes."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Nombre, position et configuration décrivent les doubles liaisons.",
    "choiceExplanations": [
      "Faux. Faux : elle est explicitement indiquée.",
      "Vrai. Il distingue mono- et polydésaturation.",
      "Vrai. Elle décrit la géométrie.",
      "Vrai. Les schémas les distinguent."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cis-trans-double-bond"
    }
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant notation delta :",
    "choices": [
      "Dans 18:1, 18 est le nombre total de carbones.",
      "Les positions multiples peuvent s’écrire Δ9,12,15.",
      "Dans Δ9, la double liaison débute au carbone 9 depuis le COOH.",
      "Les positions des doubles liaisons ne peuvent jamais être multiples."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le repère Δ compte depuis le carbone carboxylique.",
    "choiceExplanations": [
      "Vrai. Le premier nombre indique la longueur.",
      "Vrai. Cette notation est utilisée pour le linolénique.",
      "Vrai. Le repère Δ part du C1.",
      "Faux. Faux : plusieurs positions sont indiquées pour les polydésaturés."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "delta-omega-numbering"
    }
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant séries oméga :",
    "choices": [
      "Pour un 18:1 Δ9, la série est ω9.",
      "On repère la première double liaison rencontrée depuis cette extrémité.",
      "La série ω se compte depuis le COOH.",
      "La notation n-9 est équivalente à ω9."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La série ω se détermine depuis le méthyle terminal.",
    "choiceExplanations": [
      "Vrai. 18 − 9 = 9.",
      "Vrai. C’est la définition de la série.",
      "Faux. Faux : elle part du méthyle terminal.",
      "Vrai. Les deux notations sont utilisées."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "delta-omega-numbering"
    }
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant acide palmitoléique :",
    "choices": [
      "Sa double liaison est en position Δ9.",
      "Il appartient à la série ω9.",
      "Il appartient à la série ω7 ou n-7.",
      "L’acide palmitoléique possède 16 carbones."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le palmitoléique est le 16:1 Δ9 de série ω7.",
    "choiceExplanations": [
      "Vrai. La position est donnée.",
      "Faux. Faux : il appartient à ω7.",
      "Vrai. 16 − 9 = 7.",
      "Vrai. Le symbole commence par 16."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "oleic-palmitoleic"
    }
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant acide oléique :",
    "choices": [
      "Il possède 16 carbones.",
      "Son nom systématique est acide cis-9-octadécamonoénoïque.",
      "Il possède une double liaison.",
      "Il appartient à la série ω9 ou n-9."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’oléique est le 18:1 Δ9 de série ω9.",
    "choiceExplanations": [
      "Faux. Faux : il en possède 18.",
      "Vrai. C’est le nom indiqué.",
      "Vrai. Le symbole contient :1.",
      "Vrai. 18 − 9 = 9."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "oleic-palmitoleic"
    }
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant acide linoléique :",
    "choices": [
      "L’acide linoléique possède 18 carbones.",
      "Ses doubles liaisons sont en positions Δ9 et Δ12.",
      "Son nom systématique est acide toutes-cis-9,12-octadécadiénoïque.",
      "Il est saturé."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le linoléique est le 18:2 Δ9,12 de série ω6.",
    "choiceExplanations": [
      "Vrai. Le symbole commence par 18.",
      "Vrai. Les positions sont données.",
      "Vrai. C’est le nom indiqué.",
      "Faux. Faux : il est polydésaturé."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "linoleic-linolenic"
    }
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant acide linolénique :",
    "choices": [
      "Il appartient à la série ω3 ou n-3.",
      "L’acide linolénique possède 18 carbones.",
      "Sa dernière double liaison est en Δ9 seulement.",
      "Il possède trois doubles liaisons."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le linolénique est le 18:3 Δ9,12,15 de série ω3.",
    "choiceExplanations": [
      "Vrai. 18 − 15 = 3.",
      "Vrai. Le symbole commence par 18.",
      "Faux. Faux : les positions sont Δ9,12,15.",
      "Vrai. Le symbole contient :3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "linoleic-linolenic"
    }
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant acides gras essentiels :",
    "choices": [
      "Ces acides gras doivent être apportés par l’alimentation.",
      "Un acide gras essentiel est toujours produit en quantité suffisante par l’organisme.",
      "L’acide linoléique est cité comme essentiel.",
      "Le caractère essentiel concerne ici des acides gras polydésaturés."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Linoléique et linolénique sont cités comme indispensables.",
    "choiceExplanations": [
      "Vrai. C’est la conséquence du caractère essentiel.",
      "Faux. Faux : il doit être apporté.",
      "Vrai. Il figure parmi les exemples.",
      "Vrai. Les deux exemples possèdent plusieurs C=C."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "linoleic-linolenic"
    }
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant conversions et comparaisons δ/ω :",
    "choices": [
      "18:1 Δ9 appartient à la série ω7.",
      "18:3 Δ9,12,15 appartient à la série ω3.",
      "16:1 Δ9 appartient à la série ω7.",
      "18:2 Δ9,12 appartient à la série ω6."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les notations permettent de comparer longueur, position et série.",
    "choiceExplanations": [
      "Faux. Faux : il appartient à ω9.",
      "Vrai. 18 − 15 = 3.",
      "Vrai. 16 − 9 = 7.",
      "Vrai. 18 − 12 = 6."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "delta-omega-numbering"
    }
  },
  {
    "order": 81,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à mono- et polydésaturés :",
    "choices": [
      "Le degré de désaturation diminue lorsque le nombre de doubles liaisons augmente.",
      "Un polydésaturé possède exactement une double liaison.",
      "Monoénoïque signifie trois doubles liaisons.",
      "Les polydésaturés présentés possèdent entre 2 et 6 doubles liaisons."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "Le nombre de doubles liaisons distingue monoénoïques et polyénoïques.",
    "choiceExplanations": [
      "Faux. Faux : il augmente.",
      "Faux. Faux : il en possède plusieurs.",
      "Faux. Faux : cela signifie une.",
      "Vrai. C’est l’intervalle donné."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cis-trans-double-bond"
    }
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à description des doubles liaisons :",
    "choices": [
      "Cis et trans désignent le nombre total de carbones.",
      "La position des doubles liaisons n’intervient jamais dans le nom.",
      "Le nombre de doubles liaisons doit être précisé.",
      "La couleur de la double liaison détermine la série oméga."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "Nombre, position et configuration décrivent les doubles liaisons.",
    "choiceExplanations": [
      "Faux. Faux : ils décrivent la géométrie.",
      "Faux. Faux : elle est explicitement indiquée.",
      "Vrai. Il distingue mono- et polydésaturation.",
      "Faux. Faux : la position depuis ω la détermine."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cis-trans-double-bond"
    }
  },
  {
    "order": 83,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à notation delta :",
    "choices": [
      "Les positions des doubles liaisons ne peuvent jamais être multiples.",
      "Dans 18:1, 18 est le nombre total de carbones.",
      "Dans 18:1, 18 est le nombre de doubles liaisons.",
      "Δ9 signifie neuf carbones au total."
    ],
    "correctChoiceIndexes": [
      1
    ],
    "explanation": "Le repère Δ compte depuis le carbone carboxylique.",
    "choiceExplanations": [
      "Faux. Faux : plusieurs positions sont indiquées pour les polydésaturés.",
      "Vrai. Le premier nombre indique la longueur.",
      "Faux. Faux : c’est le nombre de carbones.",
      "Faux. Faux : il s’agit d’une position."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "delta-omega-numbering"
    }
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à séries oméga :",
    "choices": [
      "La notation n-9 est équivalente à ω9.",
      "Un 18:1 Δ9 appartient à la série ω18.",
      "La série ne dépend jamais de la position des doubles liaisons.",
      "La série ω se compte depuis le COOH."
    ],
    "correctChoiceIndexes": [
      0
    ],
    "explanation": "La série ω se détermine depuis le méthyle terminal.",
    "choiceExplanations": [
      "Vrai. Les deux notations sont utilisées.",
      "Faux. Faux : il appartient à ω9.",
      "Faux. Faux : elle dépend de la première C=C depuis ω.",
      "Faux. Faux : elle part du méthyle terminal."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "delta-omega-numbering"
    }
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à acide palmitoléique :",
    "choices": [
      "Il est un acide gras saturé.",
      "L’acide palmitoléique est 16:0.",
      "Il appartient à la série ω9.",
      "Il appartient à la série ω7 ou n-7."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "Le palmitoléique est le 16:1 Δ9 de série ω7.",
    "choiceExplanations": [
      "Faux. Faux : il possède une C=C.",
      "Faux. Faux : il est 16:1.",
      "Faux. Faux : il appartient à ω7.",
      "Vrai. 16 − 9 = 7."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "oleic-palmitoleic"
    }
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à acide oléique :",
    "choices": [
      "Il appartient à la série ω7.",
      "Il possède 16 carbones.",
      "Son nom systématique est acide cis-9-octadécamonoénoïque.",
      "Son nom systématique est acide octadécanoïque."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "L’oléique est le 18:1 Δ9 de série ω9.",
    "choiceExplanations": [
      "Faux. Faux : il appartient à ω9.",
      "Faux. Faux : il en possède 18.",
      "Vrai. C’est le nom indiqué.",
      "Faux. Faux : ce nom correspond au stéarique saturé."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "oleic-palmitoleic"
    }
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à acide linoléique :",
    "choices": [
      "Il est saturé.",
      "L’acide linoléique possède 18 carbones.",
      "L’acide linoléique est 18:0.",
      "Il possède une seule double liaison."
    ],
    "correctChoiceIndexes": [
      1
    ],
    "explanation": "Le linoléique est le 18:2 Δ9,12 de série ω6.",
    "choiceExplanations": [
      "Faux. Faux : il est polydésaturé.",
      "Vrai. Le symbole commence par 18.",
      "Faux. Faux : il est 18:2.",
      "Faux. Faux : il en possède deux."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "linoleic-linolenic"
    }
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à acide linolénique :",
    "choices": [
      "Il possède trois doubles liaisons.",
      "Il appartient à la série ω6.",
      "Il est un acide gras saturé.",
      "Sa dernière double liaison est en Δ9 seulement."
    ],
    "correctChoiceIndexes": [
      0
    ],
    "explanation": "Le linolénique est le 18:3 Δ9,12,15 de série ω3.",
    "choiceExplanations": [
      "Vrai. Le symbole contient :3.",
      "Faux. Faux : il appartient à ω3.",
      "Faux. Faux : il est polydésaturé.",
      "Faux. Faux : les positions sont Δ9,12,15."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "linoleic-linolenic"
    }
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à acides gras essentiels :",
    "choices": [
      "Un acide gras essentiel est nécessairement saturé.",
      "Les mammifères synthétisent tous les polydésaturés sans limitation.",
      "Un acide gras essentiel est toujours produit en quantité suffisante par l’organisme.",
      "L’acide linoléique est cité comme essentiel."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "Linoléique et linolénique sont cités comme indispensables.",
    "choiceExplanations": [
      "Faux. Faux : les exemples sont polydésaturés.",
      "Faux. Faux : certains ne sont pas synthétisés.",
      "Faux. Faux : il doit être apporté.",
      "Vrai. Il figure parmi les exemples."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "linoleic-linolenic"
    }
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à conversions et comparaisons δ/ω :",
    "choices": [
      "16:1 Δ9 appartient à la série ω9.",
      "18:1 Δ9 appartient à la série ω7.",
      "18:3 Δ9,12,15 appartient à la série ω3.",
      "18:3 Δ9,12,15 appartient à la série ω15."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "Les notations permettent de comparer longueur, position et série.",
    "choiceExplanations": [
      "Faux. Faux : il appartient à ω7.",
      "Faux. Faux : il appartient à ω9.",
      "Vrai. 18 − 15 = 3.",
      "Faux. Faux : il appartient à ω3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "delta-omega-numbering"
    }
  }
];
