import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "31": [
    "Formule des acides gras saturés"
  ],
  "32": [
    "Chaînes paires chez les mammifères"
  ],
  "33": [
    "Acide palmitique"
  ],
  "34": [
    "Acide stéarique"
  ],
  "35": [
    "Acide undécylénique"
  ],
  "36": [
    "Classes de longueur"
  ],
  "37": [
    "Origines habituelles par longueur"
  ],
  "38": [
    "Noms des saturés courts et moyens"
  ],
  "39": [
    "Noms des saturés longs"
  ],
  "40": [
    "Très longues chaînes et calculs"
  ],
  "41": [
    "Formule des acides gras saturés"
  ],
  "42": [
    "Chaînes paires chez les mammifères"
  ],
  "43": [
    "Acide palmitique"
  ],
  "44": [
    "Acide stéarique"
  ],
  "45": [
    "Acide undécylénique"
  ],
  "46": [
    "Classes de longueur"
  ],
  "47": [
    "Origines habituelles par longueur"
  ],
  "48": [
    "Noms des saturés courts et moyens"
  ],
  "49": [
    "Noms des saturés longs"
  ],
  "50": [
    "Très longues chaînes et calculs"
  ],
  "51": [
    "Formule des acides gras saturés"
  ],
  "52": [
    "Chaînes paires chez les mammifères"
  ],
  "53": [
    "Acide palmitique"
  ],
  "54": [
    "Acide stéarique"
  ],
  "55": [
    "Acide undécylénique"
  ],
  "56": [
    "Classes de longueur"
  ],
  "57": [
    "Origines habituelles par longueur"
  ],
  "58": [
    "Noms des saturés courts et moyens"
  ],
  "59": [
    "Noms des saturés longs"
  ],
  "60": [
    "Très longues chaînes et calculs"
  ]
};

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "satures-reference",
    "title": "Acides gras saturés de référence",
    "description": "Dix questions ciblées sur cette partie du chapitre.",
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
    "slug": "noms-symboles-longueurs",
    "title": "Noms, symboles et longueurs",
    "description": "Dix questions ciblées sur cette partie du chapitre.",
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
    "slug": "raisonnement-satures",
    "title": "Raisonnement sur les saturés",
    "description": "Dix questions ciblées sur cette partie du chapitre.",
    "stage": "MASTER",
    "sectionOrder": 2,
    "items": [
      {
        "type": "GROUP",
        "title": "Analyse 1",
        "sharedStatement": "Les questions suivantes partagent un même axe de raisonnement.",
        "questionOrders": [
          51,
          52,
          53
        ]
      },
      {
        "type": "GROUP",
        "title": "Analyse 2",
        "sharedStatement": "Les questions suivantes croisent plusieurs notions de la section.",
        "questionOrders": [
          54,
          55,
          56
        ]
      },
      {
        "type": "GROUP",
        "title": "Analyse 3",
        "sharedStatement": "Les questions suivantes concluent le travail transversal.",
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
    "question": "À propos de formule des acides gras saturés :",
    "choices": [
      "H₃C–(CH₂)ₙ–COOH est une formule générale des acides gras saturés.",
      "Le nombre total de carbones vaut toujours n.",
      "COOH représente la fonction carboxylique.",
      "Le symbole :0 indique zéro carbone."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La formule H₃C–(CH₂)ₙ–COOH décrit une chaîne saturée non ramifiée.",
    "choiceExplanations": [
      "Vrai. Aucune double liaison n’y est indiquée.",
      "Faux. Faux : il faut ajouter les deux carbones terminaux.",
      "Vrai. Elle porte le carbone 1.",
      "Faux. Faux : il indique zéro double liaison."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de chaînes paires chez les mammifères :",
    "choices": [
      "Une chaîne impaire est chimiquement impossible.",
      "Les acides palmitique et stéarique illustrent des chaînes paires abondantes.",
      "La parité n’a aucun lien avec les chaînons dicarbonés.",
      "La synthèse peut procéder par ajout de chaînons dicarbonés."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les unités dicarbonées expliquent la prédominance des chaînes paires.",
    "choiceExplanations": [
      "Faux. Faux : une exception à 11 carbones est citée.",
      "Vrai. Ils possèdent 16 et 18 carbones.",
      "Faux. Faux : c’est l’explication donnée.",
      "Vrai. Des unités de deux carbones sont ajoutées."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de acide palmitique :",
    "choices": [
      "Il est l’un des acides gras saturés abondants chez les mammifères.",
      "L’acide palmitique possède 18 carbones.",
      "Son nom systématique est acide hexadécanoïque.",
      "Son nom systématique est acide octadécanoïque."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’acide palmitique est le saturé 16:0, appelé acide hexadécanoïque.",
    "choiceExplanations": [
      "Vrai. La fiche le cite.",
      "Faux. Faux : il en possède 16.",
      "Vrai. C’est le nom donné.",
      "Faux. Faux : ce nom correspond au stéarique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de acide stéarique :",
    "choices": [
      "Son symbole est 18:1.",
      "Il appartient aux acides gras à longue chaîne.",
      "Il appartient aux courtes chaînes.",
      "L’acide stéarique possède 18 carbones."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’acide stéarique est le saturé 18:0, appelé acide octadécanoïque.",
    "choiceExplanations": [
      "Faux. Faux : il est 18:0.",
      "Vrai. La classe 16–20 carbones est longue.",
      "Faux. Faux : 18 carbones est une longue chaîne.",
      "Vrai. Le premier nombre de 18:0 l’indique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de acide undécylénique :",
    "choices": [
      "Il est cité chez les mammifères malgré sa chaîne impaire.",
      "L’acide undécylénique possède 12 carbones.",
      "Il constitue une exception à la prédominance des chaînes paires.",
      "Il est présenté comme un glucide."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’acide undécylénique illustre une chaîne impaire à 11 carbones.",
    "choiceExplanations": [
      "Vrai. Il figure dans la partie correspondante.",
      "Faux. Faux : il en possède 11.",
      "Vrai. Onze est impair.",
      "Faux. Faux : c’est un acide gras."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de classes de longueur :",
    "choices": [
      "14:0 appartient aux très longues chaînes.",
      "Une longue chaîne comporte 16 à 20 carbones.",
      "16:0 appartient aux chaînes moyennes.",
      "Une courte chaîne comporte 4 à 8 carbones."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les saturés sont classés en quatre intervalles de longueur.",
    "choiceExplanations": [
      "Faux. Faux : il appartient aux chaînes moyennes.",
      "Vrai. C’est l’intervalle donné.",
      "Faux. Faux : il appartient aux longues chaînes.",
      "Vrai. C’est l’intervalle donné."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de origines habituelles par longueur :",
    "choices": [
      "Certaines très longues chaînes sont associées aux huiles, graines ou cires.",
      "Les chaînes moyennes sont présentées comme des protéines.",
      "Les chaînes moyennes sont associées aux beurres et graisses végétales.",
      "Les cires ne contiennent jamais de très longues chaînes."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le tableau associe des origines habituelles aux différentes longueurs.",
    "choiceExplanations": [
      "Vrai. Le tableau le montre.",
      "Faux. Faux : ce sont des acides gras.",
      "Vrai. C’est l’origine habituelle indiquée.",
      "Faux. Faux : les plus longues du tableau leur sont associées."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de noms des saturés courts et moyens :",
    "choices": [
      "12:0 appartient aux longues chaînes.",
      "6:0 correspond à l’acide caproïque ou hexanoïque.",
      "8:0 possède huit doubles liaisons.",
      "10:0 correspond à l’acide caprique ou décanoïque."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le tableau associe noms communs, symboles et noms systématiques.",
    "choiceExplanations": [
      "Faux. Faux : il appartient aux chaînes moyennes.",
      "Vrai. Cette correspondance figure dans le tableau.",
      "Faux. Faux : il possède huit carbones et zéro double liaison.",
      "Vrai. Cette correspondance figure dans le tableau."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de noms des saturés longs :",
    "choices": [
      "22:0 correspond à l’acide béhénique ou docosanoïque.",
      "24:0 est un acide gras court.",
      "16:0 correspond à l’acide palmitique ou hexadécanoïque.",
      "18:0 correspond à l’acide palmitoléique."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les principaux saturés longs et très longs possèdent des correspondances précises.",
    "choiceExplanations": [
      "Vrai. Cette correspondance figure dans le tableau.",
      "Faux. Faux : il est à très longue chaîne.",
      "Vrai. Cette correspondance est donnée.",
      "Faux. Faux : le palmitoléique est 16:1."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de très longues chaînes et calculs :",
    "choices": [
      "32:0 correspond à une courte chaîne.",
      "Pour un saturé C18, H₃C–(CH₂)ₙ–COOH donne n = 16.",
      "26:0 est un acide gras à chaîne moyenne.",
      "32:0 correspond à l’acide laccéroïque ou dotriacontanoïque."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les symboles et la formule condensée permettent des calculs simples.",
    "choiceExplanations": [
      "Faux. Faux : il s’agit d’une très longue chaîne.",
      "Vrai. Deux carbones sont déjà dans les extrémités.",
      "Faux. Faux : il est à très longue chaîne.",
      "Vrai. Cette correspondance figure dans le tableau."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant formule des acides gras saturés :",
    "choices": [
      "Le nombre total de carbones vaut n + 2.",
      "COOH est l’extrémité méthyle.",
      "Le symbole :0 indique l’absence de double liaison.",
      "H₃C représente l’extrémité méthyle."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La formule H₃C–(CH₂)ₙ–COOH décrit une chaîne saturée non ramifiée.",
    "choiceExplanations": [
      "Vrai. Les deux extrémités apportent chacune un carbone.",
      "Faux. Faux : c’est la fonction acide.",
      "Vrai. Zéro correspond au nombre de C=C.",
      "Vrai. C’est l’extrémité opposée au COOH."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant chaînes paires chez les mammifères :",
    "choices": [
      "Le palmitique et le stéarique possèdent respectivement 15 et 17 carbones.",
      "La majorité des acides gras des mammifères ont un nombre pair de carbones.",
      "La dégradation peut procéder par clivage de chaînons dicarbonés.",
      "Des exceptions impaires existent."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les unités dicarbonées expliquent la prédominance des chaînes paires.",
    "choiceExplanations": [
      "Faux. Faux : ils en ont 16 et 18.",
      "Vrai. La fiche le précise.",
      "Vrai. Des unités de deux carbones sont retirées.",
      "Vrai. L’acide undécylénique est cité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant acide palmitique :",
    "choices": [
      "Son symbole est 16:0.",
      "Il appartient aux acides gras à longue chaîne.",
      "L’acide palmitique possède 16 carbones.",
      "Il appartient aux très longues chaînes."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "L’acide palmitique est le saturé 16:0, appelé acide hexadécanoïque.",
    "choiceExplanations": [
      "Vrai. Il ne possède aucune double liaison.",
      "Vrai. La classe 16–20 carbones est longue.",
      "Vrai. Le premier nombre de 16:0 l’indique.",
      "Faux. Faux : 16 carbones est une longue chaîne."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant acide stéarique :",
    "choices": [
      "Il diffère du palmitique par deux carbones supplémentaires.",
      "Son symbole est 18:0.",
      "L’acide stéarique possède 16 carbones.",
      "Son nom systématique est acide octadécanoïque."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "L’acide stéarique est le saturé 18:0, appelé acide octadécanoïque.",
    "choiceExplanations": [
      "Vrai. 18 − 16 = 2.",
      "Vrai. Il ne possède aucune double liaison.",
      "Faux. Faux : il en possède 18.",
      "Vrai. C’est le nom donné."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant acide undécylénique :",
    "choices": [
      "Il est associé aux glandes sébacées du cuir chevelu.",
      "Il prouve que toutes les chaînes sont paires.",
      "Son exemple montre que les chaînes impaires existent.",
      "L’acide undécylénique possède 11 carbones."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’acide undécylénique illustre une chaîne impaire à 11 carbones.",
    "choiceExplanations": [
      "Vrai. Cette origine est indiquée.",
      "Faux. Faux : il constitue une exception impaire.",
      "Vrai. Il contredit une impossibilité absolue.",
      "Vrai. La fiche donne cette valeur."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant classes de longueur :",
    "choices": [
      "24:0 appartient aux courtes chaînes.",
      "18:0 appartient aux longues chaînes.",
      "Une chaîne moyenne comporte 10 à 14 carbones.",
      "Une très longue chaîne comporte plus de 20 carbones."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les saturés sont classés en quatre intervalles de longueur.",
    "choiceExplanations": [
      "Faux. Faux : il appartient aux très longues chaînes.",
      "Vrai. Dix-huit est compris entre 16 et 20.",
      "Vrai. C’est l’intervalle donné.",
      "Vrai. C’est le seuil donné."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant origines habituelles par longueur :",
    "choices": [
      "Les courtes chaînes sont notamment retrouvées dans les beurres.",
      "Les longues chaînes sont associées aux graisses animales et végétales.",
      "L’origine habituelle varie avec la longueur de chaîne.",
      "Toutes les longueurs ont exactement la même origine habituelle."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le tableau associe des origines habituelles aux différentes longueurs.",
    "choiceExplanations": [
      "Vrai. C’est l’origine habituelle indiquée.",
      "Vrai. C’est l’origine habituelle indiquée.",
      "Vrai. Le tableau est organisé selon ce critère.",
      "Faux. Faux : le tableau les distingue."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant noms des saturés courts et moyens :",
    "choices": [
      "8:0 correspond à l’acide caprylique ou octanoïque.",
      "12:0 correspond à l’acide laurique ou dodécanoïque.",
      "10:0 est un acide gras polydésaturé.",
      "14:0 correspond à l’acide myristique ou tétradécanoïque."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le tableau associe noms communs, symboles et noms systématiques.",
    "choiceExplanations": [
      "Vrai. Cette correspondance figure dans le tableau.",
      "Vrai. Cette correspondance figure dans le tableau.",
      "Faux. Faux : le symbole :0 indique la saturation.",
      "Vrai. Cette correspondance figure dans le tableau."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant noms des saturés longs :",
    "choices": [
      "18:0 correspond à l’acide stéarique ou octadécanoïque.",
      "16:0 correspond à l’acide linoléique.",
      "20:0 correspond à l’acide arachidique ou eicosanoïque.",
      "24:0 correspond à l’acide lignocérique ou tétracosanoïque."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les principaux saturés longs et très longs possèdent des correspondances précises.",
    "choiceExplanations": [
      "Vrai. Cette correspondance est donnée.",
      "Faux. Faux : le linoléique est 18:2.",
      "Vrai. Cette correspondance figure dans le tableau.",
      "Vrai. Cette correspondance figure dans le tableau."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant très longues chaînes et calculs :",
    "choices": [
      "Le second nombre de 30:0 indique le nombre de carbones.",
      "28:0 correspond à l’acide montanique ou octacosanoïque.",
      "Pour un saturé C16, H₃C–(CH₂)ₙ–COOH donne n = 14.",
      "26:0 correspond à l’acide cérotique ou hexacosanoïque."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les symboles et la formule condensée permettent des calculs simples.",
    "choiceExplanations": [
      "Faux. Faux : il indique le nombre de doubles liaisons.",
      "Vrai. Cette correspondance figure dans le tableau.",
      "Vrai. Deux carbones sont déjà dans les extrémités.",
      "Vrai. Cette correspondance figure dans le tableau."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à formule des acides gras saturés :",
    "choices": [
      "La formule décrit nécessairement un acide aminé.",
      "Le nombre total de carbones vaut toujours n.",
      "COOH est l’extrémité méthyle.",
      "Le symbole :0 indique l’absence de double liaison."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "La formule H₃C–(CH₂)ₙ–COOH décrit une chaîne saturée non ramifiée.",
    "choiceExplanations": [
      "Faux. Faux : elle décrit un acide gras.",
      "Faux. Faux : il faut ajouter les deux carbones terminaux.",
      "Faux. Faux : c’est la fonction acide.",
      "Vrai. Zéro correspond au nombre de C=C."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à chaînes paires chez les mammifères :",
    "choices": [
      "Une chaîne impaire est chimiquement impossible.",
      "Le palmitique et le stéarique possèdent respectivement 15 et 17 carbones.",
      "La majorité des acides gras des mammifères ont un nombre pair de carbones.",
      "Tous les acides gras ont obligatoirement un nombre impair de carbones."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "Les unités dicarbonées expliquent la prédominance des chaînes paires.",
    "choiceExplanations": [
      "Faux. Faux : une exception à 11 carbones est citée.",
      "Faux. Faux : ils en ont 16 et 18.",
      "Vrai. La fiche le précise.",
      "Faux. Faux : les chaînes paires prédominent."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à acide palmitique :",
    "choices": [
      "Il appartient aux très longues chaînes.",
      "Son symbole est 16:0.",
      "Son symbole est 16:3.",
      "Son nom systématique est acide octadécanoïque."
    ],
    "correctChoiceIndexes": [
      1
    ],
    "explanation": "L’acide palmitique est le saturé 16:0, appelé acide hexadécanoïque.",
    "choiceExplanations": [
      "Faux. Faux : 16 carbones est une longue chaîne.",
      "Vrai. Il ne possède aucune double liaison.",
      "Faux. Faux : il est 16:0.",
      "Faux. Faux : ce nom correspond au stéarique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à acide stéarique :",
    "choices": [
      "Son nom systématique est acide octadécanoïque.",
      "Il contient une double liaison cis Δ9.",
      "Il appartient aux courtes chaînes.",
      "L’acide stéarique possède 16 carbones."
    ],
    "correctChoiceIndexes": [
      0
    ],
    "explanation": "L’acide stéarique est le saturé 18:0, appelé acide octadécanoïque.",
    "choiceExplanations": [
      "Vrai. C’est le nom donné.",
      "Faux. Faux : cette description correspond à l’oléique.",
      "Faux. Faux : 18 carbones est une longue chaîne.",
      "Faux. Faux : il en possède 18."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à acide undécylénique :",
    "choices": [
      "Il est associé exclusivement au tissu osseux.",
      "L’acide undécylénique possède 12 carbones.",
      "Il prouve que toutes les chaînes sont paires.",
      "Son exemple montre que les chaînes impaires existent."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "L’acide undécylénique illustre une chaîne impaire à 11 carbones.",
    "choiceExplanations": [
      "Faux. Faux : la fiche cite le cuir chevelu.",
      "Faux. Faux : il en possède 11.",
      "Faux. Faux : il constitue une exception impaire.",
      "Vrai. Il contredit une impossibilité absolue."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à classes de longueur :",
    "choices": [
      "14:0 appartient aux très longues chaînes.",
      "24:0 appartient aux courtes chaînes.",
      "18:0 appartient aux longues chaînes.",
      "La longueur ne sert jamais à classer les acides gras."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "Les saturés sont classés en quatre intervalles de longueur.",
    "choiceExplanations": [
      "Faux. Faux : il appartient aux chaînes moyennes.",
      "Faux. Faux : il appartient aux très longues chaînes.",
      "Vrai. Dix-huit est compris entre 16 et 20.",
      "Faux. Faux : c’est un critère majeur."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à origines habituelles par longueur :",
    "choices": [
      "Toutes les longueurs ont exactement la même origine habituelle.",
      "Les courtes chaînes sont notamment retrouvées dans les beurres.",
      "Les courtes chaînes sont uniquement associées aux métaux.",
      "Les cires ne contiennent jamais de très longues chaînes."
    ],
    "correctChoiceIndexes": [
      1
    ],
    "explanation": "Le tableau associe des origines habituelles aux différentes longueurs.",
    "choiceExplanations": [
      "Faux. Faux : le tableau les distingue.",
      "Vrai. C’est l’origine habituelle indiquée.",
      "Faux. Faux : elles sont notamment associées au beurre.",
      "Faux. Faux : les plus longues du tableau leur sont associées."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 58,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à noms des saturés courts et moyens :",
    "choices": [
      "14:0 correspond à l’acide myristique ou tétradécanoïque.",
      "14:0 est nommé acide octadécanoïque.",
      "8:0 possède huit doubles liaisons.",
      "10:0 est un acide gras polydésaturé."
    ],
    "correctChoiceIndexes": [
      0
    ],
    "explanation": "Le tableau associe noms communs, symboles et noms systématiques.",
    "choiceExplanations": [
      "Vrai. Cette correspondance figure dans le tableau.",
      "Faux. Faux : ce nom correspond à 18:0.",
      "Faux. Faux : il possède huit carbones et zéro double liaison.",
      "Faux. Faux : le symbole :0 indique la saturation."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 59,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à noms des saturés longs :",
    "choices": [
      "20:0 possède vingt doubles liaisons.",
      "24:0 est un acide gras court.",
      "16:0 correspond à l’acide linoléique.",
      "20:0 correspond à l’acide arachidique ou eicosanoïque."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "Les principaux saturés longs et très longs possèdent des correspondances précises.",
    "choiceExplanations": [
      "Faux. Faux : il possède 20 carbones et zéro double liaison.",
      "Faux. Faux : il est à très longue chaîne.",
      "Faux. Faux : le linoléique est 18:2.",
      "Vrai. Cette correspondance figure dans le tableau."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à très longues chaînes et calculs :",
    "choices": [
      "32:0 correspond à une courte chaîne.",
      "Le second nombre de 30:0 indique le nombre de carbones.",
      "28:0 correspond à l’acide montanique ou octacosanoïque.",
      "28:0 possède 28 doubles liaisons."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "Les symboles et la formule condensée permettent des calculs simples.",
    "choiceExplanations": [
      "Faux. Faux : il s’agit d’une très longue chaîne.",
      "Faux. Faux : il indique le nombre de doubles liaisons.",
      "Vrai. Cette correspondance figure dans le tableau.",
      "Faux. Faux : il possède 28 carbones et zéro double liaison."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  }
];
