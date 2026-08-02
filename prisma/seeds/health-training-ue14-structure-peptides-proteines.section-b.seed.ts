import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "31": [
    "la structure primaire"
  ],
  "32": [
    "la rigidité de la liaison peptidique"
  ],
  "33": [
    "les angles phi et psi"
  ],
  "34": [
    "les hydroxylations et carboxylations"
  ],
  "35": [
    "le clivage protéolytique et les ponts disulfure"
  ],
  "36": [
    "la structure primaire"
  ],
  "37": [
    "la rigidité de la liaison peptidique"
  ],
  "38": [
    "les angles phi et psi"
  ],
  "39": [
    "les hydroxylations et carboxylations"
  ],
  "40": [
    "le clivage protéolytique et les ponts disulfure"
  ],
  "41": [
    "la structure primaire"
  ],
  "42": [
    "la rigidité de la liaison peptidique"
  ],
  "43": [
    "les angles phi et psi"
  ],
  "44": [
    "les hydroxylations et carboxylations"
  ],
  "45": [
    "le clivage protéolytique et les ponts disulfure"
  ],
  "46": [
    "la structure primaire"
  ],
  "47": [
    "la rigidité de la liaison peptidique"
  ],
  "48": [
    "les angles phi et psi"
  ],
  "49": [
    "les hydroxylations et carboxylations"
  ],
  "50": [
    "le clivage protéolytique et les ponts disulfure"
  ],
  "51": [
    "la structure primaire"
  ],
  "52": [
    "la rigidité de la liaison peptidique"
  ],
  "53": [
    "les angles phi et psi"
  ],
  "54": [
    "les hydroxylations et carboxylations"
  ],
  "55": [
    "le clivage protéolytique et les ponts disulfure"
  ],
  "56": [
    "la structure primaire"
  ],
  "57": [
    "la rigidité de la liaison peptidique"
  ],
  "58": [
    "les angles phi et psi"
  ],
  "59": [
    "les hydroxylations et carboxylations"
  ],
  "60": [
    "le clivage protéolytique et les ponts disulfure"
  ]
};

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "primaire-modifications-1",
    "title": "Structure primaire et traduction",
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
    "slug": "primaire-modifications-2",
    "title": "Angles et rigidité de la chaîne",
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
    "slug": "primaire-modifications-3",
    "title": "Modifications post-traductionnelles",
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
    "question": "À propos de la structure primaire :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "four-levels-primary"
    },
    "choices": [
      "La séquence influence la structure spatiale et l’activité.",
      "Elle se forme au cours de la traduction de l’ARNm.",
      "L’ordre dépend de l’information génétique.",
      "La structure primaire correspond uniquement à une hélice α."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La structure primaire est la séquence génétiquement déterminée des résidus.",
    "choiceExplanations": [
      "Vrai. La séquence influence la structure spatiale et l’activité.",
      "Vrai. Elle se forme au cours de la traduction de l’ARNm.",
      "Vrai. L’ordre dépend de l’information génétique.",
      "Faux. Elle correspond à la séquence."
    ]
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la rigidité de la liaison peptidique :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond-rigidity"
    },
    "choices": [
      "La liaison peptidique est plane.",
      "La liaison peptidique tourne librement autour de C–N.",
      "La résonance contribue au caractère partiellement double de la liaison.",
      "La liaison peptidique n’est jamais plane."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La délocalisation électronique donne à la liaison peptidique une géométrie plane et rigide.",
    "choiceExplanations": [
      "Vrai. La liaison peptidique est plane.",
      "Faux. La rotation C–N est bloquée.",
      "Vrai. La résonance contribue au caractère partiellement double de la liaison.",
      "Faux. Elle est décrite comme plane."
    ]
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les angles phi et psi :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "phi-psi-angles"
    },
    "choices": [
      "La rotation reste possible autour des liaisons voisines du carbone α.",
      "Ces angles participent à la conformation de la chaîne.",
      "Les angles φ et ψ mesurent uniquement la longueur de la chaîne.",
      "L’angle φ concerne la liaison N–Cα."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La conformation du squelette dépend des rotations φ et ψ autour du carbone α.",
    "choiceExplanations": [
      "Vrai. La rotation reste possible autour des liaisons voisines du carbone α.",
      "Vrai. Ces angles participent à la conformation de la chaîne.",
      "Faux. Ils décrivent des rotations conformationnelles.",
      "Vrai. L’angle φ concerne la liaison N–Cα."
    ]
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les hydroxylations et carboxylations :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "posttranslational-modifications"
    },
    "choices": [
      "La proline peut devenir 4-hydroxyproline.",
      "La proline devient toujours de la glycine.",
      "Le glutamate peut devenir γ-carboxyglutamate.",
      "Le γ-carboxyglutamate empêche toute fixation du calcium."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les modifications des chaînes latérales créent des résidus spécialisés comme hydroxyproline et γ-carboxyglutamate.",
    "choiceExplanations": [
      "Vrai. La proline peut devenir 4-hydroxyproline.",
      "Faux. Elle peut devenir hydroxyproline.",
      "Vrai. Le glutamate peut devenir γ-carboxyglutamate.",
      "Faux. Il permet sa complexation."
    ]
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le clivage protéolytique et les ponts disulfure :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "disulfide-proteolysis"
    },
    "choices": [
      "La trypsine est citée comme exemple de protéine activée par clivage.",
      "L’insuline ne comporte aucun pont disulfure.",
      "Un pont disulfure résulte de l’oxydation de deux cystéines.",
      "Un clivage protéolytique peut activer un précurseur."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Clivage et ponts disulfure sont deux modifications majeures de maturation et stabilisation.",
    "choiceExplanations": [
      "Vrai. La trypsine est citée comme exemple de protéine activée par clivage.",
      "Faux. Ses chaînes A et B sont reliées par des ponts disulfure.",
      "Vrai. Un pont disulfure résulte de l’oxydation de deux cystéines.",
      "Vrai. Un clivage protéolytique peut activer un précurseur."
    ]
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la structure primaire :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "four-levels-primary"
    },
    "choices": [
      "La séquence influence la structure spatiale et l’activité.",
      "Elle se forme au cours de la traduction de l’ARNm.",
      "La traduction ne produit aucune chaîne polypeptidique.",
      "L’ordre des acides aminés est aléatoire."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La structure primaire est la séquence génétiquement déterminée des résidus.",
    "choiceExplanations": [
      "Vrai. La séquence influence la structure spatiale et l’activité.",
      "Vrai. Elle se forme au cours de la traduction de l’ARNm.",
      "Faux. Elle forme la structure primaire.",
      "Faux. Il dépend du gène et de l’ARNm."
    ]
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la rigidité de la liaison peptidique :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond-rigidity"
    },
    "choices": [
      "Elle est rigide.",
      "La liaison peptidique n’est jamais plane.",
      "La liaison peptidique est plane.",
      "La rotation autour de la liaison C–N est bloquée."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La délocalisation électronique donne à la liaison peptidique une géométrie plane et rigide.",
    "choiceExplanations": [
      "Vrai. Elle est rigide.",
      "Faux. Elle est décrite comme plane.",
      "Vrai. La liaison peptidique est plane.",
      "Vrai. La rotation autour de la liaison C–N est bloquée."
    ]
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les angles phi et psi :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "phi-psi-angles"
    },
    "choices": [
      "Aucune rotation n’est possible de part et d’autre de la liaison peptidique.",
      "Ces angles participent à la conformation de la chaîne.",
      "La rotation reste possible autour des liaisons voisines du carbone α.",
      "Les angles φ et ψ mesurent uniquement la longueur de la chaîne."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La conformation du squelette dépend des rotations φ et ψ autour du carbone α.",
    "choiceExplanations": [
      "Faux. Les liaisons simples autour de Cα peuvent tourner.",
      "Vrai. Ces angles participent à la conformation de la chaîne.",
      "Vrai. La rotation reste possible autour des liaisons voisines du carbone α.",
      "Faux. Ils décrivent des rotations conformationnelles."
    ]
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les hydroxylations et carboxylations :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "posttranslational-modifications"
    },
    "choices": [
      "Le γ-carboxyglutamate participe à la fixation du calcium en coagulation.",
      "Le glutamate peut devenir γ-carboxyglutamate.",
      "La lysine peut devenir hydroxylysine.",
      "L’hydroxylation retire un groupement OH."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les modifications des chaînes latérales créent des résidus spécialisés comme hydroxyproline et γ-carboxyglutamate.",
    "choiceExplanations": [
      "Vrai. Le γ-carboxyglutamate participe à la fixation du calcium en coagulation.",
      "Vrai. Le glutamate peut devenir γ-carboxyglutamate.",
      "Vrai. La lysine peut devenir hydroxylysine.",
      "Faux. Elle ajoute un groupement hydroxyle."
    ]
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le clivage protéolytique et les ponts disulfure :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "disulfide-proteolysis"
    },
    "choices": [
      "Les ponts disulfure peuvent être intra- ou interchaînes.",
      "Le clivage protéolytique ajoute une chaîne complète sans coupure.",
      "Un clivage protéolytique peut activer un précurseur.",
      "Un pont disulfure est formé entre deux glycines."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Clivage et ponts disulfure sont deux modifications majeures de maturation et stabilisation.",
    "choiceExplanations": [
      "Vrai. Les ponts disulfure peuvent être intra- ou interchaînes.",
      "Faux. Il retire un fragment du précurseur.",
      "Vrai. Un clivage protéolytique peut activer un précurseur.",
      "Faux. Il est formé entre deux cystéines."
    ]
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure primaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "four-levels-primary"
    },
    "choices": [
      "L’ordre des acides aminés est aléatoire.",
      "La séquence n’a aucun effet sur la fonction.",
      "Elle se forme au cours de la traduction de l’ARNm.",
      "Elle correspond à l’enchaînement des acides aminés."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La structure primaire est la séquence génétiquement déterminée des résidus.",
    "choiceExplanations": [
      "Faux. Il dépend du gène et de l’ARNm.",
      "Faux. Elle influence conformation et activité.",
      "Vrai. Elle se forme au cours de la traduction de l’ARNm.",
      "Vrai. Elle correspond à l’enchaînement des acides aminés."
    ]
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la rigidité de la liaison peptidique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond-rigidity"
    },
    "choices": [
      "La rotation autour de la liaison C–N est bloquée.",
      "Elle est rigide.",
      "Elle est une liaison ionique sans résonance.",
      "La liaison peptidique n’est jamais plane."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La délocalisation électronique donne à la liaison peptidique une géométrie plane et rigide.",
    "choiceExplanations": [
      "Vrai. La rotation autour de la liaison C–N est bloquée.",
      "Vrai. Elle est rigide.",
      "Faux. La résonance explique sa rigidité.",
      "Faux. Elle est décrite comme plane."
    ]
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les angles phi et psi, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "phi-psi-angles"
    },
    "choices": [
      "Ces angles participent à la conformation de la chaîne.",
      "Aucune rotation n’est possible de part et d’autre de la liaison peptidique.",
      "L’angle ψ concerne N–Cα.",
      "La rotation reste possible autour des liaisons voisines du carbone α."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La conformation du squelette dépend des rotations φ et ψ autour du carbone α.",
    "choiceExplanations": [
      "Vrai. Ces angles participent à la conformation de la chaîne.",
      "Faux. Les liaisons simples autour de Cα peuvent tourner.",
      "Faux. Il concerne Cα–CO.",
      "Vrai. La rotation reste possible autour des liaisons voisines du carbone α."
    ]
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les hydroxylations et carboxylations, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "posttranslational-modifications"
    },
    "choices": [
      "La carboxylation retire tout COOH.",
      "La lysine peut devenir hydroxylysine.",
      "La proline peut devenir 4-hydroxyproline.",
      "L’hydroxylation retire un groupement OH."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les modifications des chaînes latérales créent des résidus spécialisés comme hydroxyproline et γ-carboxyglutamate.",
    "choiceExplanations": [
      "Faux. Elle ajoute un groupement carboxyle.",
      "Vrai. La lysine peut devenir hydroxylysine.",
      "Vrai. La proline peut devenir 4-hydroxyproline.",
      "Faux. Elle ajoute un groupement hydroxyle."
    ]
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le clivage protéolytique et les ponts disulfure, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "disulfide-proteolysis"
    },
    "choices": [
      "Un pont disulfure résulte de l’oxydation de deux cystéines.",
      "Les ponts disulfure sont toujours non covalents.",
      "L’insuline ne comporte aucun pont disulfure.",
      "Un clivage protéolytique peut activer un précurseur."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Clivage et ponts disulfure sont deux modifications majeures de maturation et stabilisation.",
    "choiceExplanations": [
      "Vrai. Un pont disulfure résulte de l’oxydation de deux cystéines.",
      "Faux. Ce sont des liaisons covalentes.",
      "Faux. Ses chaînes A et B sont reliées par des ponts disulfure.",
      "Vrai. Un clivage protéolytique peut activer un précurseur."
    ]
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure primaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "four-levels-primary"
    },
    "choices": [
      "La séquence n’a aucun effet sur la fonction.",
      "La structure primaire correspond uniquement à une hélice α.",
      "Elle correspond à l’enchaînement des acides aminés.",
      "La séquence influence la structure spatiale et l’activité."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La structure primaire est la séquence génétiquement déterminée des résidus.",
    "choiceExplanations": [
      "Faux. Elle influence conformation et activité.",
      "Faux. Elle correspond à la séquence.",
      "Vrai. Elle correspond à l’enchaînement des acides aminés.",
      "Vrai. La séquence influence la structure spatiale et l’activité."
    ]
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la rigidité de la liaison peptidique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond-rigidity"
    },
    "choices": [
      "Elle est une liaison ionique sans résonance.",
      "La liaison peptidique n’est jamais plane.",
      "La liaison peptidique est plane.",
      "La rotation autour de la liaison C–N est bloquée."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La délocalisation électronique donne à la liaison peptidique une géométrie plane et rigide.",
    "choiceExplanations": [
      "Faux. La résonance explique sa rigidité.",
      "Faux. Elle est décrite comme plane.",
      "Vrai. La liaison peptidique est plane.",
      "Vrai. La rotation autour de la liaison C–N est bloquée."
    ]
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les angles phi et psi, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "phi-psi-angles"
    },
    "choices": [
      "L’angle φ concerne la liaison N–Cα.",
      "Les angles φ et ψ mesurent uniquement la longueur de la chaîne.",
      "L’angle ψ concerne la liaison Cα–CO.",
      "L’angle ψ concerne N–Cα."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La conformation du squelette dépend des rotations φ et ψ autour du carbone α.",
    "choiceExplanations": [
      "Vrai. L’angle φ concerne la liaison N–Cα.",
      "Faux. Ils décrivent des rotations conformationnelles.",
      "Vrai. L’angle ψ concerne la liaison Cα–CO.",
      "Faux. Il concerne Cα–CO."
    ]
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les hydroxylations et carboxylations, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "posttranslational-modifications"
    },
    "choices": [
      "La proline peut devenir 4-hydroxyproline.",
      "La carboxylation retire tout COOH.",
      "L’hydroxylation retire un groupement OH.",
      "La lysine peut devenir hydroxylysine."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les modifications des chaînes latérales créent des résidus spécialisés comme hydroxyproline et γ-carboxyglutamate.",
    "choiceExplanations": [
      "Vrai. La proline peut devenir 4-hydroxyproline.",
      "Faux. Elle ajoute un groupement carboxyle.",
      "Faux. Elle ajoute un groupement hydroxyle.",
      "Vrai. La lysine peut devenir hydroxylysine."
    ]
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le clivage protéolytique et les ponts disulfure, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "disulfide-proteolysis"
    },
    "choices": [
      "Un pont disulfure résulte de l’oxydation de deux cystéines.",
      "Le clivage protéolytique ajoute une chaîne complète sans coupure.",
      "Les ponts disulfure peuvent être intra- ou interchaînes.",
      "Les ponts disulfure sont toujours non covalents."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Clivage et ponts disulfure sont deux modifications majeures de maturation et stabilisation.",
    "choiceExplanations": [
      "Vrai. Un pont disulfure résulte de l’oxydation de deux cystéines.",
      "Faux. Il retire un fragment du précurseur.",
      "Vrai. Les ponts disulfure peuvent être intra- ou interchaînes.",
      "Faux. Ce sont des liaisons covalentes."
    ]
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la structure primaire. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "four-levels-primary"
    },
    "choices": [
      "La séquence influence la structure spatiale et l’activité.",
      "L’ordre des acides aminés est aléatoire.",
      "Elle se forme au cours de la traduction de l’ARNm.",
      "La structure primaire correspond uniquement à une hélice α."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La structure primaire est la séquence génétiquement déterminée des résidus.",
    "choiceExplanations": [
      "Vrai. La séquence influence la structure spatiale et l’activité.",
      "Faux. Il dépend du gène et de l’ARNm.",
      "Vrai. Elle se forme au cours de la traduction de l’ARNm.",
      "Faux. Elle correspond à la séquence."
    ]
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la rigidité de la liaison peptidique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond-rigidity"
    },
    "choices": [
      "Elle est une liaison ionique sans résonance.",
      "La résonance contribue au caractère partiellement double de la liaison.",
      "La rotation autour de la liaison C–N est bloquée.",
      "La liaison peptidique tourne librement autour de C–N."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La délocalisation électronique donne à la liaison peptidique une géométrie plane et rigide.",
    "choiceExplanations": [
      "Faux. La résonance explique sa rigidité.",
      "Vrai. La résonance contribue au caractère partiellement double de la liaison.",
      "Vrai. La rotation autour de la liaison C–N est bloquée.",
      "Faux. La rotation C–N est bloquée."
    ]
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les angles phi et psi. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "phi-psi-angles"
    },
    "choices": [
      "Aucune rotation n’est possible de part et d’autre de la liaison peptidique.",
      "Ces angles participent à la conformation de la chaîne.",
      "L’angle ψ concerne N–Cα.",
      "L’angle ψ concerne la liaison Cα–CO."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La conformation du squelette dépend des rotations φ et ψ autour du carbone α.",
    "choiceExplanations": [
      "Faux. Les liaisons simples autour de Cα peuvent tourner.",
      "Vrai. Ces angles participent à la conformation de la chaîne.",
      "Faux. Il concerne Cα–CO.",
      "Vrai. L’angle ψ concerne la liaison Cα–CO."
    ]
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les hydroxylations et carboxylations. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "posttranslational-modifications"
    },
    "choices": [
      "La proline peut devenir 4-hydroxyproline.",
      "La proline devient toujours de la glycine.",
      "La carboxylation retire tout COOH.",
      "Le γ-carboxyglutamate participe à la fixation du calcium en coagulation."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les modifications des chaînes latérales créent des résidus spécialisés comme hydroxyproline et γ-carboxyglutamate.",
    "choiceExplanations": [
      "Vrai. La proline peut devenir 4-hydroxyproline.",
      "Faux. Elle peut devenir hydroxyproline.",
      "Faux. Elle ajoute un groupement carboxyle.",
      "Vrai. Le γ-carboxyglutamate participe à la fixation du calcium en coagulation."
    ]
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le clivage protéolytique et les ponts disulfure. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "disulfide-proteolysis"
    },
    "choices": [
      "Les ponts disulfure peuvent être intra- ou interchaînes.",
      "L’insuline ne comporte aucun pont disulfure.",
      "Un pont disulfure résulte de l’oxydation de deux cystéines.",
      "Les ponts disulfure sont toujours non covalents."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Clivage et ponts disulfure sont deux modifications majeures de maturation et stabilisation.",
    "choiceExplanations": [
      "Vrai. Les ponts disulfure peuvent être intra- ou interchaînes.",
      "Faux. Ses chaînes A et B sont reliées par des ponts disulfure.",
      "Vrai. Un pont disulfure résulte de l’oxydation de deux cystéines.",
      "Faux. Ce sont des liaisons covalentes."
    ]
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la structure primaire. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "four-levels-primary"
    },
    "choices": [
      "Elle se forme au cours de la traduction de l’ARNm.",
      "La traduction ne produit aucune chaîne polypeptidique.",
      "La structure primaire correspond uniquement à une hélice α.",
      "Elle correspond à l’enchaînement des acides aminés."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La structure primaire est la séquence génétiquement déterminée des résidus.",
    "choiceExplanations": [
      "Vrai. Elle se forme au cours de la traduction de l’ARNm.",
      "Faux. Elle forme la structure primaire.",
      "Faux. Elle correspond à la séquence.",
      "Vrai. Elle correspond à l’enchaînement des acides aminés."
    ]
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la rigidité de la liaison peptidique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond-rigidity"
    },
    "choices": [
      "Elle est rigide.",
      "Elle est une liaison ionique sans résonance.",
      "La liaison peptidique tourne librement autour de C–N.",
      "La résonance contribue au caractère partiellement double de la liaison."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La délocalisation électronique donne à la liaison peptidique une géométrie plane et rigide.",
    "choiceExplanations": [
      "Vrai. Elle est rigide.",
      "Faux. La résonance explique sa rigidité.",
      "Faux. La rotation C–N est bloquée.",
      "Vrai. La résonance contribue au caractère partiellement double de la liaison."
    ]
  },
  {
    "order": 58,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les angles phi et psi. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "phi-psi-angles"
    },
    "choices": [
      "L’angle ψ concerne la liaison Cα–CO.",
      "Les angles φ et ψ mesurent uniquement la longueur de la chaîne.",
      "L’angle ψ concerne N–Cα.",
      "La rotation reste possible autour des liaisons voisines du carbone α."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La conformation du squelette dépend des rotations φ et ψ autour du carbone α.",
    "choiceExplanations": [
      "Vrai. L’angle ψ concerne la liaison Cα–CO.",
      "Faux. Ils décrivent des rotations conformationnelles.",
      "Faux. Il concerne Cα–CO.",
      "Vrai. La rotation reste possible autour des liaisons voisines du carbone α."
    ]
  },
  {
    "order": 59,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les hydroxylations et carboxylations. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "posttranslational-modifications"
    },
    "choices": [
      "Le glutamate peut devenir γ-carboxyglutamate.",
      "Le γ-carboxyglutamate empêche toute fixation du calcium.",
      "L’hydroxylation retire un groupement OH.",
      "Le γ-carboxyglutamate participe à la fixation du calcium en coagulation."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les modifications des chaînes latérales créent des résidus spécialisés comme hydroxyproline et γ-carboxyglutamate.",
    "choiceExplanations": [
      "Vrai. Le glutamate peut devenir γ-carboxyglutamate.",
      "Faux. Il permet sa complexation.",
      "Faux. Elle ajoute un groupement hydroxyle.",
      "Vrai. Le γ-carboxyglutamate participe à la fixation du calcium en coagulation."
    ]
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le clivage protéolytique et les ponts disulfure. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "disulfide-proteolysis"
    },
    "choices": [
      "L’insuline ne comporte aucun pont disulfure.",
      "Les ponts disulfure peuvent être intra- ou interchaînes.",
      "La trypsine est citée comme exemple de protéine activée par clivage.",
      "Un pont disulfure est formé entre deux glycines."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Clivage et ponts disulfure sont deux modifications majeures de maturation et stabilisation.",
    "choiceExplanations": [
      "Faux. Ses chaînes A et B sont reliées par des ponts disulfure.",
      "Vrai. Les ponts disulfure peuvent être intra- ou interchaînes.",
      "Vrai. La trypsine est citée comme exemple de protéine activée par clivage.",
      "Faux. Il est formé entre deux cystéines."
    ]
  }
];
