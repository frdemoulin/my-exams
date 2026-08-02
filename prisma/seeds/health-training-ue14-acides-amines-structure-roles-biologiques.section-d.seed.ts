import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "91": [
    "les séries L et D en projection de Fischer"
  ],
  "92": [
    "la configuration absolue des acides aminés naturels"
  ],
  "93": [
    "l’absorption ultraviolette des acides aminés"
  ],
  "94": [
    "l’ionisation et le point isoélectrique"
  ],
  "95": [
    "la réaction à la ninhydrine"
  ],
  "96": [
    "les séries L et D en projection de Fischer"
  ],
  "97": [
    "la configuration absolue des acides aminés naturels"
  ],
  "98": [
    "l’absorption ultraviolette des acides aminés"
  ],
  "99": [
    "l’ionisation et le point isoélectrique"
  ],
  "100": [
    "la réaction à la ninhydrine"
  ],
  "101": [
    "les séries L et D en projection de Fischer"
  ],
  "102": [
    "la configuration absolue des acides aminés naturels"
  ],
  "103": [
    "l’absorption ultraviolette des acides aminés"
  ],
  "104": [
    "l’ionisation et le point isoélectrique"
  ],
  "105": [
    "la réaction à la ninhydrine"
  ],
  "106": [
    "les séries L et D en projection de Fischer"
  ],
  "107": [
    "la configuration absolue des acides aminés naturels"
  ],
  "108": [
    "l’absorption ultraviolette des acides aminés"
  ],
  "109": [
    "l’ionisation et le point isoélectrique"
  ],
  "110": [
    "la réaction à la ninhydrine"
  ],
  "111": [
    "les séries L et D en projection de Fischer"
  ],
  "112": [
    "la configuration absolue des acides aminés naturels"
  ],
  "113": [
    "l’absorption ultraviolette des acides aminés"
  ],
  "114": [
    "l’ionisation et le point isoélectrique"
  ],
  "115": [
    "la réaction à la ninhydrine"
  ],
  "116": [
    "les séries L et D en projection de Fischer"
  ],
  "117": [
    "la configuration absolue des acides aminés naturels"
  ],
  "118": [
    "l’absorption ultraviolette des acides aminés"
  ],
  "119": [
    "l’ionisation et le point isoélectrique"
  ],
  "120": [
    "la réaction à la ninhydrine"
  ]
};

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "proprietes-ionisation-1",
    "title": "Absorption UV et ionisation",
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
    "slug": "proprietes-ionisation-2",
    "title": "Zwitterion et point isoélectrique",
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
    "slug": "proprietes-ionisation-3",
    "title": "Réactions chimiques et analyse des acides aminés",
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
    "question": "À propos de les séries L et D en projection de Fischer :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "Le COOH est placé en haut dans la projection décrite.",
      "Un NH2 à droite correspond à la série D.",
      "Un NH2 à gauche correspond toujours à la série D.",
      "Un NH2 à gauche correspond à la série L."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La projection de Fischer permet de distinguer les séries L et D par la position du NH2.",
    "choiceExplanations": [
      "Vrai. Le COOH est placé en haut dans la projection décrite.",
      "Vrai. Un NH2 à droite correspond à la série D.",
      "Faux. Dans la convention donnée, il correspond à L.",
      "Vrai. Un NH2 à gauche correspond à la série L."
    ]
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la configuration absolue des acides aminés naturels :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "La série D est associée à la configuration R dans la présentation du cours.",
      "La glycine possède une configuration R ou S bien définie.",
      "Ils sont le plus souvent de configuration S.",
      "Les acides aminés naturels sont toujours de série D."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La série D/L et la configuration R/S sont deux systèmes liés mais distincts.",
    "choiceExplanations": [
      "Vrai. La série D est associée à la configuration R dans la présentation du cours.",
      "Faux. Elle est achirale.",
      "Vrai. Ils sont le plus souvent de configuration S.",
      "Faux. Ils sont de série L."
    ]
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’absorption ultraviolette des acides aminés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "uv-absorption"
    },
    "choices": [
      "Les acides aminés aromatiques absorbent vers 280 nm.",
      "Tous les acides aminés absorbent fortement la lumière visible.",
      "La plupart des acides aminés absorbent à des longueurs d’onde inférieures à 230 nm.",
      "Phénylalanine, tyrosine et tryptophane sont concernés."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les systèmes aromatiques conjugués expliquent l’absorption UV autour de 280 nm.",
    "choiceExplanations": [
      "Vrai. Les acides aminés aromatiques absorbent vers 280 nm.",
      "Faux. La fiche indique qu’ils n’absorbent pas la lumière visible.",
      "Vrai. La plupart des acides aminés absorbent à des longueurs d’onde inférieures à 230 nm.",
      "Vrai. Phénylalanine, tyrosine et tryptophane sont concernés."
    ]
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’ionisation et le point isoélectrique :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-ionization"
    },
    "choices": [
      "Au pH isoélectrique, la charge nette est nulle.",
      "Les acides aminés basiques ont un pHi élevé et les acides un pHi bas.",
      "Les acides aminés acides ont toujours un pHi supérieur à 10.",
      "Au point isoélectrique, la charge nette est toujours +2."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "L’état d’ionisation dépend du pH; le point isoélectrique correspond à une charge nette nulle.",
    "choiceExplanations": [
      "Vrai. Au pH isoélectrique, la charge nette est nulle.",
      "Vrai. Les acides aminés basiques ont un pHi élevé et les acides un pHi bas.",
      "Faux. Leur pHi est bas.",
      "Faux. Elle est nulle."
    ]
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la réaction à la ninhydrine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ninhydrin-reaction"
    },
    "choices": [
      "La coloration obtenue est pourpre ou violette.",
      "La proline et l’hydroxyproline donnent une coloration jaune.",
      "La réaction est utilisée pour la séparation et le dosage des acides aminés.",
      "La ninhydrine ne réagit avec aucun acide aminé."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La ninhydrine révèle les acides aminés, avec une réponse particulière des amines secondaires.",
    "choiceExplanations": [
      "Vrai. La coloration obtenue est pourpre ou violette.",
      "Vrai. La proline et l’hydroxyproline donnent une coloration jaune.",
      "Vrai. La réaction est utilisée pour la séparation et le dosage des acides aminés.",
      "Faux. Elle est utilisée pour les détecter."
    ]
  },
  {
    "order": 96,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les séries L et D en projection de Fischer :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "Un NH2 à gauche correspond toujours à la série D.",
      "Un NH2 à droite correspond à la série D.",
      "Le carbone α est placé au centre.",
      "Le carbone α n’apparaît pas dans la projection."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La projection de Fischer permet de distinguer les séries L et D par la position du NH2.",
    "choiceExplanations": [
      "Faux. Dans la convention donnée, il correspond à L.",
      "Vrai. Un NH2 à droite correspond à la série D.",
      "Vrai. Le carbone α est placé au centre.",
      "Faux. Il occupe la position centrale."
    ]
  },
  {
    "order": 97,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la configuration absolue des acides aminés naturels :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "Les acides aminés naturels sont de série L.",
      "La configuration absolue repose sur un classement des substituants.",
      "Ils sont le plus souvent de configuration S.",
      "Les acides aminés naturels sont toujours de série D."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La série D/L et la configuration R/S sont deux systèmes liés mais distincts.",
    "choiceExplanations": [
      "Vrai. Les acides aminés naturels sont de série L.",
      "Vrai. La configuration absolue repose sur un classement des substituants.",
      "Vrai. Ils sont le plus souvent de configuration S.",
      "Faux. Ils sont de série L."
    ]
  },
  {
    "order": 98,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’absorption ultraviolette des acides aminés :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "uv-absorption"
    },
    "choices": [
      "Les acides aminés aromatiques absorbent vers 280 nm.",
      "L’absorption à 280 nm est due à l’absence de doubles liaisons.",
      "La fiche ajoute l’histidine parmi les exceptions absorbant vers 280 nm.",
      "Seule la glycine absorbe vers 280 nm."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les systèmes aromatiques conjugués expliquent l’absorption UV autour de 280 nm.",
    "choiceExplanations": [
      "Vrai. Les acides aminés aromatiques absorbent vers 280 nm.",
      "Faux. Elle est liée aux cycles et doubles liaisons conjuguées.",
      "Vrai. La fiche ajoute l’histidine parmi les exceptions absorbant vers 280 nm.",
      "Faux. Les aromatiques et l’histidine sont citées."
    ]
  },
  {
    "order": 99,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’ionisation et le point isoélectrique :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-ionization"
    },
    "choices": [
      "Les acides aminés possèdent au moins deux fonctions ionisables.",
      "Les acides aminés acides ont toujours un pHi supérieur à 10.",
      "Les acides aminés basiques ont un pHi élevé et les acides un pHi bas.",
      "Ils sont amphotères."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’état d’ionisation dépend du pH; le point isoélectrique correspond à une charge nette nulle.",
    "choiceExplanations": [
      "Vrai. Les acides aminés possèdent au moins deux fonctions ionisables.",
      "Faux. Leur pHi est bas.",
      "Vrai. Les acides aminés basiques ont un pHi élevé et les acides un pHi bas.",
      "Vrai. Ils sont amphotères."
    ]
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la réaction à la ninhydrine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ninhydrin-reaction"
    },
    "choices": [
      "La ninhydrine réagit avec les acides aminés à amine primaire.",
      "La ninhydrine est uniquement un médicament.",
      "La ninhydrine ne réagit avec aucun acide aminé.",
      "La proline et l’hydroxyproline donnent une coloration jaune."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La ninhydrine révèle les acides aminés, avec une réponse particulière des amines secondaires.",
    "choiceExplanations": [
      "Vrai. La ninhydrine réagit avec les acides aminés à amine primaire.",
      "Faux. Elle sert de réactif analytique.",
      "Faux. Elle est utilisée pour les détecter.",
      "Vrai. La proline et l’hydroxyproline donnent une coloration jaune."
    ]
  },
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les séries L et D en projection de Fischer, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "Un NH2 à gauche correspond toujours à la série D.",
      "Le COOH est placé obligatoirement en bas.",
      "Le COOH est placé en haut dans la projection décrite.",
      "Le carbone α est placé au centre."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La projection de Fischer permet de distinguer les séries L et D par la position du NH2.",
    "choiceExplanations": [
      "Faux. Dans la convention donnée, il correspond à L.",
      "Faux. La fiche le place en haut.",
      "Vrai. Le COOH est placé en haut dans la projection décrite.",
      "Vrai. Le carbone α est placé au centre."
    ]
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la configuration absolue des acides aminés naturels, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "La configuration absolue ne dépend d’aucun ordre de priorité.",
      "La série D est associée à la configuration R dans la présentation du cours.",
      "La glycine possède une configuration R ou S bien définie.",
      "Ils sont le plus souvent de configuration S."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La série D/L et la configuration R/S sont deux systèmes liés mais distincts.",
    "choiceExplanations": [
      "Faux. Elle repose sur un classement des substituants.",
      "Vrai. La série D est associée à la configuration R dans la présentation du cours.",
      "Faux. Elle est achirale.",
      "Vrai. Ils sont le plus souvent de configuration S."
    ]
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’absorption ultraviolette des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "uv-absorption"
    },
    "choices": [
      "La tyrosine n’absorbe jamais les UV.",
      "Phénylalanine, tyrosine et tryptophane sont concernés.",
      "La fiche ajoute l’histidine parmi les exceptions absorbant vers 280 nm.",
      "Seule la glycine absorbe vers 280 nm."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les systèmes aromatiques conjugués expliquent l’absorption UV autour de 280 nm.",
    "choiceExplanations": [
      "Faux. Son noyau aromatique permet une absorption vers 280 nm.",
      "Vrai. Phénylalanine, tyrosine et tryptophane sont concernés.",
      "Vrai. La fiche ajoute l’histidine parmi les exceptions absorbant vers 280 nm.",
      "Faux. Les aromatiques et l’histidine sont citées."
    ]
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’ionisation et le point isoélectrique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-ionization"
    },
    "choices": [
      "La charge d’un acide aminé est indépendante du pH.",
      "Au point isoélectrique, la charge nette est toujours +2.",
      "Au pH isoélectrique, la charge nette est nulle.",
      "Les acides aminés basiques ont un pHi élevé et les acides un pHi bas."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’état d’ionisation dépend du pH; le point isoélectrique correspond à une charge nette nulle.",
    "choiceExplanations": [
      "Faux. Elle dépend du pH.",
      "Faux. Elle est nulle.",
      "Vrai. Au pH isoélectrique, la charge nette est nulle.",
      "Vrai. Les acides aminés basiques ont un pHi élevé et les acides un pHi bas."
    ]
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la réaction à la ninhydrine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ninhydrin-reaction"
    },
    "choices": [
      "La proline donne exactement la coloration violette des amines primaires selon la fiche.",
      "La proline et l’hydroxyproline donnent une coloration jaune.",
      "La ninhydrine ne réagit avec aucun acide aminé.",
      "La réaction est utilisée pour la séparation et le dosage des acides aminés."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La ninhydrine révèle les acides aminés, avec une réponse particulière des amines secondaires.",
    "choiceExplanations": [
      "Faux. Elle donne une coloration jaune.",
      "Vrai. La proline et l’hydroxyproline donnent une coloration jaune.",
      "Faux. Elle est utilisée pour les détecter.",
      "Vrai. La réaction est utilisée pour la séparation et le dosage des acides aminés."
    ]
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les séries L et D en projection de Fischer, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "Un NH2 à droite correspond à la série D.",
      "Le COOH est placé obligatoirement en bas.",
      "Le carbone α est placé au centre.",
      "Un NH2 à gauche correspond toujours à la série D."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La projection de Fischer permet de distinguer les séries L et D par la position du NH2.",
    "choiceExplanations": [
      "Vrai. Un NH2 à droite correspond à la série D.",
      "Faux. La fiche le place en haut.",
      "Vrai. Le carbone α est placé au centre.",
      "Faux. Dans la convention donnée, il correspond à L."
    ]
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la configuration absolue des acides aminés naturels, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "La série D est associée à la configuration R dans la présentation du cours.",
      "Les acides aminés naturels sont toujours de série D.",
      "Ils sont le plus souvent de configuration S.",
      "La glycine possède une configuration R ou S bien définie."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La série D/L et la configuration R/S sont deux systèmes liés mais distincts.",
    "choiceExplanations": [
      "Vrai. La série D est associée à la configuration R dans la présentation du cours.",
      "Faux. Ils sont de série L.",
      "Vrai. Ils sont le plus souvent de configuration S.",
      "Faux. Elle est achirale."
    ]
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’absorption ultraviolette des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "uv-absorption"
    },
    "choices": [
      "Phénylalanine, tyrosine et tryptophane sont concernés.",
      "L’absorption à 280 nm est due à l’absence de doubles liaisons.",
      "La tyrosine n’absorbe jamais les UV.",
      "La plupart des acides aminés absorbent à des longueurs d’onde inférieures à 230 nm."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les systèmes aromatiques conjugués expliquent l’absorption UV autour de 280 nm.",
    "choiceExplanations": [
      "Vrai. Phénylalanine, tyrosine et tryptophane sont concernés.",
      "Faux. Elle est liée aux cycles et doubles liaisons conjuguées.",
      "Faux. Son noyau aromatique permet une absorption vers 280 nm.",
      "Vrai. La plupart des acides aminés absorbent à des longueurs d’onde inférieures à 230 nm."
    ]
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’ionisation et le point isoélectrique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-ionization"
    },
    "choices": [
      "Les acides aminés acides ont toujours un pHi supérieur à 10.",
      "La charge d’un acide aminé est indépendante du pH.",
      "Ils sont amphotères.",
      "Les acides aminés possèdent au moins deux fonctions ionisables."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’état d’ionisation dépend du pH; le point isoélectrique correspond à une charge nette nulle.",
    "choiceExplanations": [
      "Faux. Leur pHi est bas.",
      "Faux. Elle dépend du pH.",
      "Vrai. Ils sont amphotères.",
      "Vrai. Les acides aminés possèdent au moins deux fonctions ionisables."
    ]
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la réaction à la ninhydrine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ninhydrin-reaction"
    },
    "choices": [
      "La ninhydrine réagit avec les acides aminés à amine primaire.",
      "La réaction ne comporte aucune désamination ni décarboxylation.",
      "La proline donne exactement la coloration violette des amines primaires selon la fiche.",
      "La réaction est utilisée pour la séparation et le dosage des acides aminés."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La ninhydrine révèle les acides aminés, avec une réponse particulière des amines secondaires.",
    "choiceExplanations": [
      "Vrai. La ninhydrine réagit avec les acides aminés à amine primaire.",
      "Faux. Ces transformations sont mentionnées.",
      "Faux. Elle donne une coloration jaune.",
      "Vrai. La réaction est utilisée pour la séparation et le dosage des acides aminés."
    ]
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les séries L et D en projection de Fischer. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "Un NH2 à gauche correspond à la série L.",
      "Le carbone α n’apparaît pas dans la projection.",
      "La série L est définie par la position du radical R uniquement.",
      "Un NH2 à droite correspond à la série D."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La projection de Fischer permet de distinguer les séries L et D par la position du NH2.",
    "choiceExplanations": [
      "Vrai. Un NH2 à gauche correspond à la série L.",
      "Faux. Il occupe la position centrale.",
      "Faux. On regarde la position du NH2 par rapport au COOH.",
      "Vrai. Un NH2 à droite correspond à la série D."
    ]
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la configuration absolue des acides aminés naturels. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "Tous les acides aminés L sont obligatoirement R dans la fiche.",
      "La série D est associée à la configuration R dans la présentation du cours.",
      "Les acides aminés naturels sont de série L.",
      "Les acides aminés naturels sont toujours de série D."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La série D/L et la configuration R/S sont deux systèmes liés mais distincts.",
    "choiceExplanations": [
      "Faux. Ils sont le plus souvent S.",
      "Vrai. La série D est associée à la configuration R dans la présentation du cours.",
      "Vrai. Les acides aminés naturels sont de série L.",
      "Faux. Ils sont de série L."
    ]
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’absorption ultraviolette des acides aminés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "uv-absorption"
    },
    "choices": [
      "La tyrosine n’absorbe jamais les UV.",
      "Seule la glycine absorbe vers 280 nm.",
      "La fiche ajoute l’histidine parmi les exceptions absorbant vers 280 nm.",
      "La plupart des acides aminés absorbent à des longueurs d’onde inférieures à 230 nm."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les systèmes aromatiques conjugués expliquent l’absorption UV autour de 280 nm.",
    "choiceExplanations": [
      "Faux. Son noyau aromatique permet une absorption vers 280 nm.",
      "Faux. Les aromatiques et l’histidine sont citées.",
      "Vrai. La fiche ajoute l’histidine parmi les exceptions absorbant vers 280 nm.",
      "Vrai. La plupart des acides aminés absorbent à des longueurs d’onde inférieures à 230 nm."
    ]
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’ionisation et le point isoélectrique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-ionization"
    },
    "choices": [
      "Ils sont amphotères.",
      "Les acides aminés acides ont toujours un pHi supérieur à 10.",
      "Une molécule amphotère ne peut agir ni comme acide ni comme base.",
      "Les acides aminés basiques ont un pHi élevé et les acides un pHi bas."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "L’état d’ionisation dépend du pH; le point isoélectrique correspond à une charge nette nulle.",
    "choiceExplanations": [
      "Vrai. Ils sont amphotères.",
      "Faux. Leur pHi est bas.",
      "Faux. Elle peut agir comme les deux.",
      "Vrai. Les acides aminés basiques ont un pHi élevé et les acides un pHi bas."
    ]
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la réaction à la ninhydrine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ninhydrin-reaction"
    },
    "choices": [
      "La réaction est utilisée pour la séparation et le dosage des acides aminés.",
      "La coloration obtenue est pourpre ou violette.",
      "La proline donne exactement la coloration violette des amines primaires selon la fiche.",
      "La réaction ne comporte aucune désamination ni décarboxylation."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La ninhydrine révèle les acides aminés, avec une réponse particulière des amines secondaires.",
    "choiceExplanations": [
      "Vrai. La réaction est utilisée pour la séparation et le dosage des acides aminés.",
      "Vrai. La coloration obtenue est pourpre ou violette.",
      "Faux. Elle donne une coloration jaune.",
      "Faux. Ces transformations sont mentionnées."
    ]
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les séries L et D en projection de Fischer. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "Le COOH est placé obligatoirement en bas.",
      "Un NH2 à droite correspond à la série D.",
      "Le carbone α n’apparaît pas dans la projection.",
      "Un NH2 à gauche correspond à la série L."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La projection de Fischer permet de distinguer les séries L et D par la position du NH2.",
    "choiceExplanations": [
      "Faux. La fiche le place en haut.",
      "Vrai. Un NH2 à droite correspond à la série D.",
      "Faux. Il occupe la position centrale.",
      "Vrai. Un NH2 à gauche correspond à la série L."
    ]
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la configuration absolue des acides aminés naturels. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "Les acides aminés naturels sont toujours de série D.",
      "Ils sont le plus souvent de configuration S.",
      "Tous les acides aminés L sont obligatoirement R dans la fiche.",
      "Les acides aminés naturels sont de série L."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La série D/L et la configuration R/S sont deux systèmes liés mais distincts.",
    "choiceExplanations": [
      "Faux. Ils sont de série L.",
      "Vrai. Ils sont le plus souvent de configuration S.",
      "Faux. Ils sont le plus souvent S.",
      "Vrai. Les acides aminés naturels sont de série L."
    ]
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’absorption ultraviolette des acides aminés. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "uv-absorption"
    },
    "choices": [
      "L’absorption à 280 nm est due à l’absence de doubles liaisons.",
      "La fiche ajoute l’histidine parmi les exceptions absorbant vers 280 nm.",
      "Les acides aminés aromatiques absorbent vers 280 nm.",
      "Seule la glycine absorbe vers 280 nm."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les systèmes aromatiques conjugués expliquent l’absorption UV autour de 280 nm.",
    "choiceExplanations": [
      "Faux. Elle est liée aux cycles et doubles liaisons conjuguées.",
      "Vrai. La fiche ajoute l’histidine parmi les exceptions absorbant vers 280 nm.",
      "Vrai. Les acides aminés aromatiques absorbent vers 280 nm.",
      "Faux. Les aromatiques et l’histidine sont citées."
    ]
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’ionisation et le point isoélectrique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-ionization"
    },
    "choices": [
      "Les acides aminés basiques ont un pHi élevé et les acides un pHi bas.",
      "Une molécule amphotère ne peut agir ni comme acide ni comme base.",
      "Les acides aminés possèdent au moins deux fonctions ionisables.",
      "Au point isoélectrique, la charge nette est toujours +2."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’état d’ionisation dépend du pH; le point isoélectrique correspond à une charge nette nulle.",
    "choiceExplanations": [
      "Vrai. Les acides aminés basiques ont un pHi élevé et les acides un pHi bas.",
      "Faux. Elle peut agir comme les deux.",
      "Vrai. Les acides aminés possèdent au moins deux fonctions ionisables.",
      "Faux. Elle est nulle."
    ]
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la réaction à la ninhydrine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ninhydrin-reaction"
    },
    "choices": [
      "La réaction ne comporte aucune désamination ni décarboxylation.",
      "La ninhydrine est uniquement un médicament.",
      "La réaction est utilisée pour la séparation et le dosage des acides aminés.",
      "La ninhydrine réagit avec les acides aminés à amine primaire."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La ninhydrine révèle les acides aminés, avec une réponse particulière des amines secondaires.",
    "choiceExplanations": [
      "Faux. Ces transformations sont mentionnées.",
      "Faux. Elle sert de réactif analytique.",
      "Vrai. La réaction est utilisée pour la séparation et le dosage des acides aminés.",
      "Vrai. La ninhydrine réagit avec les acides aminés à amine primaire."
    ]
  }
];
