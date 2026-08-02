import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "1": [
    "la liaison peptidique"
  ],
  "2": [
    "la taille des peptides et protéines"
  ],
  "3": [
    "les extrémités N- et C-terminales"
  ],
  "4": [
    "la proline dans une chaîne peptidique"
  ],
  "5": [
    "la dénaturation et la classification des protéines"
  ],
  "6": [
    "la liaison peptidique"
  ],
  "7": [
    "la taille des peptides et protéines"
  ],
  "8": [
    "les extrémités N- et C-terminales"
  ],
  "9": [
    "la proline dans une chaîne peptidique"
  ],
  "10": [
    "la dénaturation et la classification des protéines"
  ],
  "11": [
    "la liaison peptidique"
  ],
  "12": [
    "la taille des peptides et protéines"
  ],
  "13": [
    "les extrémités N- et C-terminales"
  ],
  "14": [
    "la proline dans une chaîne peptidique"
  ],
  "15": [
    "la dénaturation et la classification des protéines"
  ],
  "16": [
    "la liaison peptidique"
  ],
  "17": [
    "la taille des peptides et protéines"
  ],
  "18": [
    "les extrémités N- et C-terminales"
  ],
  "19": [
    "la proline dans une chaîne peptidique"
  ],
  "20": [
    "la dénaturation et la classification des protéines"
  ],
  "21": [
    "la liaison peptidique"
  ],
  "22": [
    "la taille des peptides et protéines"
  ],
  "23": [
    "les extrémités N- et C-terminales"
  ],
  "24": [
    "la proline dans une chaîne peptidique"
  ],
  "25": [
    "la dénaturation et la classification des protéines"
  ],
  "26": [
    "la liaison peptidique"
  ],
  "27": [
    "la taille des peptides et protéines"
  ],
  "28": [
    "les extrémités N- et C-terminales"
  ],
  "29": [
    "la proline dans une chaîne peptidique"
  ],
  "30": [
    "la dénaturation et la classification des protéines"
  ]
};

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "liaison-classification-1",
    "title": "Liaison peptidique et extrémités",
    "description": "Identifier les notions essentielles.",
    "stage": "DISCOVER",
    "sectionOrder": 1,
    "questionOrders": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "order": 2,
    "slug": "liaison-classification-2",
    "title": "Peptides, protéines et dénaturation",
    "description": "Appliquer et comparer les notions du cours.",
    "stage": "PRACTICE",
    "sectionOrder": 1,
    "questionOrders": [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "order": 3,
    "slug": "liaison-classification-3",
    "title": "Classification structurale des protéines",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 1,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères essentiels",
        "sharedStatement": "Les questions suivantes portent sur les principaux repères de la section.",
        "questionOrders": [
          21,
          22,
          23
        ]
      },
      {
        "type": "GROUP",
        "title": "Structure et fonction",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          24,
          25,
          26
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications",
        "sharedStatement": "Les questions suivantes mobilisent les notions dans des situations biologiques ou médicales.",
        "questionOrders": [
          27,
          28,
          29,
          30
        ]
      }
    ]
  }
];

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la liaison peptidique :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond"
    },
    "choices": [
      "Peptides et protéines comportent des liaisons peptidiques.",
      "Elle relie le carboxyle d’un acide aminé à l’amine du suivant.",
      "La séquence et la conformation influencent la fonction.",
      "Elle relie deux radicaux R par une liaison glycosidique."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La liaison peptidique relie les résidus et construit la chaîne polypeptidique.",
    "choiceExplanations": [
      "Vrai. Peptides et protéines comportent des liaisons peptidiques.",
      "Vrai. Elle relie le carboxyle d’un acide aminé à l’amine du suivant.",
      "Vrai. La séquence et la conformation influencent la fonction.",
      "Faux. Elle relie COOH et NH2."
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la taille des peptides et protéines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-size"
    },
    "choices": [
      "La fiche place les peptides entre plus de 2 et moins de 100 acides aminés.",
      "Un tripeptide ne comporte aucune liaison peptidique.",
      "Un peptide possède toujours plus de 1000 acides aminés.",
      "Un tripeptide contient trois résidus."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La taille et le nombre de chaînes permettent une distinction pratique entre peptides et protéines.",
    "choiceExplanations": [
      "Vrai. La fiche place les peptides entre plus de 2 et moins de 100 acides aminés.",
      "Faux. Il comporte deux liaisons peptidiques.",
      "Faux. La fiche retient une taille inférieure à 100.",
      "Vrai. Un tripeptide contient trois résidus."
    ]
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les extrémités N- et C-terminales :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-termini"
    },
    "choices": [
      "L’extrémité N-terminale possède une fonction amine libre.",
      "L’extrémité C-terminale possède une fonction carboxyle libre.",
      "La chaîne est écrite de l’extrémité N-terminale vers l’extrémité C-terminale.",
      "L’extrémité C-terminale porte toujours une amine libre."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les deux extrémités sont chimiquement distinctes et donnent un sens à la chaîne.",
    "choiceExplanations": [
      "Vrai. L’extrémité N-terminale possède une fonction amine libre.",
      "Vrai. L’extrémité C-terminale possède une fonction carboxyle libre.",
      "Vrai. La chaîne est écrite de l’extrémité N-terminale vers l’extrémité C-terminale.",
      "Faux. Elle porte le carboxyle libre."
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la proline dans une chaîne peptidique :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-peptide-kink"
    },
    "choices": [
      "La proline peut perturber une structure régulière.",
      "La proline possède une chaîne latérale totalement flexible et linéaire.",
      "Les chaînes latérales alternent de part et d’autre de la chaîne.",
      "La proline n’a aucun effet structural."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La proline constitue une exception structurale capable d’anguler la chaîne.",
    "choiceExplanations": [
      "Vrai. La proline peut perturber une structure régulière.",
      "Faux. Elle est cyclique.",
      "Vrai. Les chaînes latérales alternent de part et d’autre de la chaîne.",
      "Faux. Sa présence peut modifier la conformation."
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la dénaturation et la classification des protéines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-denaturation-classification"
    },
    "choices": [
      "La température n’influence jamais la conformation.",
      "Une hétéroprotéine comporte une partie protéique et une partie non protéique.",
      "La dénaturation peut être réversible ou irréversible.",
      "Une holoprotéine est constituée uniquement d’acides aminés."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La conformation est fragile et la composition distingue holo- et hétéroprotéines.",
    "choiceExplanations": [
      "Faux. Elle peut provoquer une dénaturation.",
      "Vrai. Une hétéroprotéine comporte une partie protéique et une partie non protéique.",
      "Vrai. La dénaturation peut être réversible ou irréversible.",
      "Vrai. Une holoprotéine est constituée uniquement d’acides aminés."
    ]
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la liaison peptidique :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond"
    },
    "choices": [
      "Elle relie le carboxyle d’un acide aminé à l’amine du suivant.",
      "Elle est propre aux lipides.",
      "Elle relie deux radicaux R par une liaison glycosidique.",
      "La séquence et la conformation influencent la fonction."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La liaison peptidique relie les résidus et construit la chaîne polypeptidique.",
    "choiceExplanations": [
      "Vrai. Elle relie le carboxyle d’un acide aminé à l’amine du suivant.",
      "Faux. Elle caractérise les chaînes peptidiques.",
      "Faux. Elle relie COOH et NH2.",
      "Vrai. La séquence et la conformation influencent la fonction."
    ]
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la taille des peptides et protéines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-size"
    },
    "choices": [
      "Une protéine comporte plus de 100 acides aminés ou plusieurs chaînes polypeptidiques.",
      "Un tripeptide contient trois résidus.",
      "Un dipeptide contient deux résidus.",
      "Un dipeptide contient trois résidus."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La taille et le nombre de chaînes permettent une distinction pratique entre peptides et protéines.",
    "choiceExplanations": [
      "Vrai. Une protéine comporte plus de 100 acides aminés ou plusieurs chaînes polypeptidiques.",
      "Vrai. Un tripeptide contient trois résidus.",
      "Vrai. Un dipeptide contient deux résidus.",
      "Faux. Il en contient deux."
    ]
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les extrémités N- et C-terminales :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-termini"
    },
    "choices": [
      "L’extrémité C-terminale porte toujours une amine libre.",
      "Les abréviations d’acides aminés ne peuvent pas servir à écrire une séquence.",
      "La chaîne est écrite de l’extrémité N-terminale vers l’extrémité C-terminale.",
      "Les codes à une ou trois lettres peuvent écrire la séquence."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les deux extrémités sont chimiquement distinctes et donnent un sens à la chaîne.",
    "choiceExplanations": [
      "Faux. Elle porte le carboxyle libre.",
      "Faux. Elles sont utilisées pour cela.",
      "Vrai. La chaîne est écrite de l’extrémité N-terminale vers l’extrémité C-terminale.",
      "Vrai. Les codes à une ou trois lettres peuvent écrire la séquence."
    ]
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la proline dans une chaîne peptidique :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-peptide-kink"
    },
    "choices": [
      "Les chaînes latérales sont toutes orientées du même côté.",
      "La proline peut perturber une structure régulière.",
      "Les chaînes latérales alternent de part et d’autre de la chaîne.",
      "Un résidu de proline peut provoquer une angulation."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La proline constitue une exception structurale capable d’anguler la chaîne.",
    "choiceExplanations": [
      "Faux. Elles alternent dans la représentation décrite.",
      "Vrai. La proline peut perturber une structure régulière.",
      "Vrai. Les chaînes latérales alternent de part et d’autre de la chaîne.",
      "Vrai. Un résidu de proline peut provoquer une angulation."
    ]
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la dénaturation et la classification des protéines :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-denaturation-classification"
    },
    "choices": [
      "Une holoprotéine est constituée uniquement d’acides aminés.",
      "Une hétéroprotéine ne contient aucun acide aminé.",
      "Une hétéroprotéine comporte une partie protéique et une partie non protéique.",
      "La dénaturation modifie nécessairement la séquence primaire par hydrolyse complète."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La conformation est fragile et la composition distingue holo- et hétéroprotéines.",
    "choiceExplanations": [
      "Vrai. Une holoprotéine est constituée uniquement d’acides aminés.",
      "Faux. Elle contient une chaîne protéique et une partie non protéique.",
      "Vrai. Une hétéroprotéine comporte une partie protéique et une partie non protéique.",
      "Faux. Elle modifie surtout la conformation."
    ]
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la liaison peptidique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond"
    },
    "choices": [
      "La composition en acides aminés n’influence jamais la fonction.",
      "Elle relie le carboxyle d’un acide aminé à l’amine du suivant.",
      "Peptides et protéines comportent des liaisons peptidiques.",
      "Elle est propre aux lipides."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La liaison peptidique relie les résidus et construit la chaîne polypeptidique.",
    "choiceExplanations": [
      "Faux. Elle participe à la déterminer.",
      "Vrai. Elle relie le carboxyle d’un acide aminé à l’amine du suivant.",
      "Vrai. Peptides et protéines comportent des liaisons peptidiques.",
      "Faux. Elle caractérise les chaînes peptidiques."
    ]
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la taille des peptides et protéines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-size"
    },
    "choices": [
      "Un peptide possède toujours plus de 1000 acides aminés.",
      "Un dipeptide contient deux résidus.",
      "Un dipeptide contient trois résidus.",
      "Un tripeptide contient trois résidus."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La taille et le nombre de chaînes permettent une distinction pratique entre peptides et protéines.",
    "choiceExplanations": [
      "Faux. La fiche retient une taille inférieure à 100.",
      "Vrai. Un dipeptide contient deux résidus.",
      "Faux. Il en contient deux.",
      "Vrai. Un tripeptide contient trois résidus."
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les extrémités N- et C-terminales, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-termini"
    },
    "choices": [
      "Les abréviations d’acides aminés ne peuvent pas servir à écrire une séquence.",
      "L’extrémité N-terminale possède obligatoirement un COOH libre.",
      "L’extrémité C-terminale possède une fonction carboxyle libre.",
      "Les codes à une ou trois lettres peuvent écrire la séquence."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les deux extrémités sont chimiquement distinctes et donnent un sens à la chaîne.",
    "choiceExplanations": [
      "Faux. Elles sont utilisées pour cela.",
      "Faux. Elle possède une amine libre.",
      "Vrai. L’extrémité C-terminale possède une fonction carboxyle libre.",
      "Vrai. Les codes à une ou trois lettres peuvent écrire la séquence."
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la proline dans une chaîne peptidique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-peptide-kink"
    },
    "choices": [
      "La proline rend toujours la chaîne parfaitement rectiligne.",
      "Les chaînes latérales alternent de part et d’autre de la chaîne.",
      "La proline peut perturber une structure régulière.",
      "La proline possède une chaîne latérale totalement flexible et linéaire."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La proline constitue une exception structurale capable d’anguler la chaîne.",
    "choiceExplanations": [
      "Faux. Elle peut introduire une angulation.",
      "Vrai. Les chaînes latérales alternent de part et d’autre de la chaîne.",
      "Vrai. La proline peut perturber une structure régulière.",
      "Faux. Elle est cyclique."
    ]
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la dénaturation et la classification des protéines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-denaturation-classification"
    },
    "choices": [
      "Elle dépend notamment du pH, de la température et de la force ionique.",
      "La dénaturation modifie nécessairement la séquence primaire par hydrolyse complète.",
      "La température n’influence jamais la conformation.",
      "La dénaturation peut être réversible ou irréversible."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La conformation est fragile et la composition distingue holo- et hétéroprotéines.",
    "choiceExplanations": [
      "Vrai. Elle dépend notamment du pH, de la température et de la force ionique.",
      "Faux. Elle modifie surtout la conformation.",
      "Faux. Elle peut provoquer une dénaturation.",
      "Vrai. La dénaturation peut être réversible ou irréversible."
    ]
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la liaison peptidique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond"
    },
    "choices": [
      "La fonction amine du premier acide aminé reste toujours sans réaction.",
      "Elle relie le carboxyle d’un acide aminé à l’amine du suivant.",
      "La composition en acides aminés n’influence jamais la fonction.",
      "Elle permet l’association en chaîne des acides aminés."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La liaison peptidique relie les résidus et construit la chaîne polypeptidique.",
    "choiceExplanations": [
      "Faux. Elle peut participer à une liaison avec l’acide aminé précédent.",
      "Vrai. Elle relie le carboxyle d’un acide aminé à l’amine du suivant.",
      "Faux. Elle participe à la déterminer.",
      "Vrai. Elle permet l’association en chaîne des acides aminés."
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la taille des peptides et protéines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-size"
    },
    "choices": [
      "Une protéine ne peut jamais être formée de plusieurs chaînes.",
      "Une protéine comporte plus de 100 acides aminés ou plusieurs chaînes polypeptidiques.",
      "Un peptide possède toujours plus de 1000 acides aminés.",
      "La fiche place les peptides entre plus de 2 et moins de 100 acides aminés."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La taille et le nombre de chaînes permettent une distinction pratique entre peptides et protéines.",
    "choiceExplanations": [
      "Faux. Une association de chaînes peut former une protéine.",
      "Vrai. Une protéine comporte plus de 100 acides aminés ou plusieurs chaînes polypeptidiques.",
      "Faux. La fiche retient une taille inférieure à 100.",
      "Vrai. La fiche place les peptides entre plus de 2 et moins de 100 acides aminés."
    ]
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les extrémités N- et C-terminales, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-termini"
    },
    "choices": [
      "Les abréviations d’acides aminés ne peuvent pas servir à écrire une séquence.",
      "L’extrémité C-terminale possède une fonction carboxyle libre.",
      "La chaîne est conventionnellement lue de C vers N uniquement.",
      "La chaîne est écrite de l’extrémité N-terminale vers l’extrémité C-terminale."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les deux extrémités sont chimiquement distinctes et donnent un sens à la chaîne.",
    "choiceExplanations": [
      "Faux. Elles sont utilisées pour cela.",
      "Vrai. L’extrémité C-terminale possède une fonction carboxyle libre.",
      "Faux. Elle est écrite de N vers C.",
      "Vrai. La chaîne est écrite de l’extrémité N-terminale vers l’extrémité C-terminale."
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la proline dans une chaîne peptidique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-peptide-kink"
    },
    "choices": [
      "Un résidu de proline peut provoquer une angulation.",
      "Les chaînes latérales alternent de part et d’autre de la chaîne.",
      "La proline n’a aucun effet structural.",
      "La proline rend toujours la chaîne parfaitement rectiligne."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La proline constitue une exception structurale capable d’anguler la chaîne.",
    "choiceExplanations": [
      "Vrai. Un résidu de proline peut provoquer une angulation.",
      "Vrai. Les chaînes latérales alternent de part et d’autre de la chaîne.",
      "Faux. Sa présence peut modifier la conformation.",
      "Faux. Elle peut introduire une angulation."
    ]
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la dénaturation et la classification des protéines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-denaturation-classification"
    },
    "choices": [
      "La température n’influence jamais la conformation.",
      "Une hétéroprotéine comporte une partie protéique et une partie non protéique.",
      "Une holoprotéine est constituée uniquement d’acides aminés.",
      "Une holoprotéine comporte obligatoirement un groupement prosthétique non protéique."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La conformation est fragile et la composition distingue holo- et hétéroprotéines.",
    "choiceExplanations": [
      "Faux. Elle peut provoquer une dénaturation.",
      "Vrai. Une hétéroprotéine comporte une partie protéique et une partie non protéique.",
      "Vrai. Une holoprotéine est constituée uniquement d’acides aminés.",
      "Faux. Elle est uniquement protéique."
    ]
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la liaison peptidique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond"
    },
    "choices": [
      "Elle est propre aux lipides.",
      "Peptides et protéines comportent des liaisons peptidiques.",
      "Elle relie le carboxyle d’un acide aminé à l’amine du suivant.",
      "Elle relie deux radicaux R par une liaison glycosidique."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La liaison peptidique relie les résidus et construit la chaîne polypeptidique.",
    "choiceExplanations": [
      "Faux. Elle caractérise les chaînes peptidiques.",
      "Vrai. Peptides et protéines comportent des liaisons peptidiques.",
      "Vrai. Elle relie le carboxyle d’un acide aminé à l’amine du suivant.",
      "Faux. Elle relie COOH et NH2."
    ]
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la taille des peptides et protéines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-size"
    },
    "choices": [
      "Un dipeptide contient deux résidus.",
      "Une protéine comporte plus de 100 acides aminés ou plusieurs chaînes polypeptidiques.",
      "Un tripeptide ne comporte aucune liaison peptidique.",
      "Un peptide possède toujours plus de 1000 acides aminés."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La taille et le nombre de chaînes permettent une distinction pratique entre peptides et protéines.",
    "choiceExplanations": [
      "Vrai. Un dipeptide contient deux résidus.",
      "Vrai. Une protéine comporte plus de 100 acides aminés ou plusieurs chaînes polypeptidiques.",
      "Faux. Il comporte deux liaisons peptidiques.",
      "Faux. La fiche retient une taille inférieure à 100."
    ]
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les extrémités N- et C-terminales. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-termini"
    },
    "choices": [
      "Les abréviations d’acides aminés ne peuvent pas servir à écrire une séquence.",
      "L’extrémité C-terminale porte toujours une amine libre.",
      "Les codes à une ou trois lettres peuvent écrire la séquence.",
      "L’extrémité C-terminale possède une fonction carboxyle libre."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les deux extrémités sont chimiquement distinctes et donnent un sens à la chaîne.",
    "choiceExplanations": [
      "Faux. Elles sont utilisées pour cela.",
      "Faux. Elle porte le carboxyle libre.",
      "Vrai. Les codes à une ou trois lettres peuvent écrire la séquence.",
      "Vrai. L’extrémité C-terminale possède une fonction carboxyle libre."
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la proline dans une chaîne peptidique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-peptide-kink"
    },
    "choices": [
      "La structure cyclique de la proline explique cet effet.",
      "La proline rend toujours la chaîne parfaitement rectiligne.",
      "La proline n’a aucun effet structural.",
      "Les chaînes latérales alternent de part et d’autre de la chaîne."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La proline constitue une exception structurale capable d’anguler la chaîne.",
    "choiceExplanations": [
      "Vrai. La structure cyclique de la proline explique cet effet.",
      "Faux. Elle peut introduire une angulation.",
      "Faux. Sa présence peut modifier la conformation.",
      "Vrai. Les chaînes latérales alternent de part et d’autre de la chaîne."
    ]
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la dénaturation et la classification des protéines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-denaturation-classification"
    },
    "choices": [
      "Une hétéroprotéine comporte une partie protéique et une partie non protéique.",
      "La dénaturation modifie nécessairement la séquence primaire par hydrolyse complète.",
      "La température n’influence jamais la conformation.",
      "Une holoprotéine est constituée uniquement d’acides aminés."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La conformation est fragile et la composition distingue holo- et hétéroprotéines.",
    "choiceExplanations": [
      "Vrai. Une hétéroprotéine comporte une partie protéique et une partie non protéique.",
      "Faux. Elle modifie surtout la conformation.",
      "Faux. Elle peut provoquer une dénaturation.",
      "Vrai. Une holoprotéine est constituée uniquement d’acides aminés."
    ]
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la liaison peptidique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond"
    },
    "choices": [
      "La fonction amine du premier acide aminé reste toujours sans réaction.",
      "Elle relie deux radicaux R par une liaison glycosidique.",
      "Elle permet l’association en chaîne des acides aminés.",
      "La séquence et la conformation influencent la fonction."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La liaison peptidique relie les résidus et construit la chaîne polypeptidique.",
    "choiceExplanations": [
      "Faux. Elle peut participer à une liaison avec l’acide aminé précédent.",
      "Faux. Elle relie COOH et NH2.",
      "Vrai. Elle permet l’association en chaîne des acides aminés.",
      "Vrai. La séquence et la conformation influencent la fonction."
    ]
  },
  {
    "order": 27,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la taille des peptides et protéines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-size"
    },
    "choices": [
      "Un peptide possède toujours plus de 1000 acides aminés.",
      "Une protéine ne peut jamais être formée de plusieurs chaînes.",
      "Un dipeptide contient deux résidus.",
      "Un tripeptide contient trois résidus."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La taille et le nombre de chaînes permettent une distinction pratique entre peptides et protéines.",
    "choiceExplanations": [
      "Faux. La fiche retient une taille inférieure à 100.",
      "Faux. Une association de chaînes peut former une protéine.",
      "Vrai. Un dipeptide contient deux résidus.",
      "Vrai. Un tripeptide contient trois résidus."
    ]
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les extrémités N- et C-terminales. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-termini"
    },
    "choices": [
      "La chaîne est écrite de l’extrémité N-terminale vers l’extrémité C-terminale.",
      "La chaîne est conventionnellement lue de C vers N uniquement.",
      "L’extrémité N-terminale possède une fonction amine libre.",
      "L’extrémité N-terminale possède obligatoirement un COOH libre."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les deux extrémités sont chimiquement distinctes et donnent un sens à la chaîne.",
    "choiceExplanations": [
      "Vrai. La chaîne est écrite de l’extrémité N-terminale vers l’extrémité C-terminale.",
      "Faux. Elle est écrite de N vers C.",
      "Vrai. L’extrémité N-terminale possède une fonction amine libre.",
      "Faux. Elle possède une amine libre."
    ]
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la proline dans une chaîne peptidique. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-peptide-kink"
    },
    "choices": [
      "La proline possède une chaîne latérale totalement flexible et linéaire.",
      "Les chaînes latérales sont toutes orientées du même côté.",
      "La proline peut perturber une structure régulière.",
      "Un résidu de proline peut provoquer une angulation."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La proline constitue une exception structurale capable d’anguler la chaîne.",
    "choiceExplanations": [
      "Faux. Elle est cyclique.",
      "Faux. Elles alternent dans la représentation décrite.",
      "Vrai. La proline peut perturber une structure régulière.",
      "Vrai. Un résidu de proline peut provoquer une angulation."
    ]
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la dénaturation et la classification des protéines. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-denaturation-classification"
    },
    "choices": [
      "La température n’influence jamais la conformation.",
      "La dénaturation peut être réversible ou irréversible.",
      "La dénaturation modifie nécessairement la séquence primaire par hydrolyse complète.",
      "Une holoprotéine est constituée uniquement d’acides aminés."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La conformation est fragile et la composition distingue holo- et hétéroprotéines.",
    "choiceExplanations": [
      "Faux. Elle peut provoquer une dénaturation.",
      "Vrai. La dénaturation peut être réversible ou irréversible.",
      "Faux. Elle modifie surtout la conformation.",
      "Vrai. Une holoprotéine est constituée uniquement d’acides aminés."
    ]
  }
];
