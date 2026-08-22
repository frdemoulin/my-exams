import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.2 – Section A – Principaux oses simples et propriétés */
export const UE14_BIOCH_CH2_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le glucose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le glucose est majoritairement cyclique en solution aqueuse.",
        "correct": true,
        "explanation": "Le glucopyranose domine."
      },
      {
        "content": "Le glucose est un cétohexose.",
        "correct": false,
        "explanation": "Le fructose est le cétohexose de référence."
      },
      {
        "content": "La glycémie mesure le galactose sanguin.",
        "correct": false,
        "explanation": "Elle mesure le glucose."
      },
      {
        "content": "Le glucose est un substrat énergétique majeur.",
        "correct": true,
        "explanation": "Il alimente notamment la glycolyse."
      },
      {
        "content": "Le glucose est exclusivement sous forme ouverte en eau.",
        "correct": false,
        "explanation": "Les formes cycliques dominent."
      }
    ],
    "explanation": "Le glucose est l'aldohexose énergétique de référence."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos du galactose, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le galactose est absent des glycoconjugués.",
        "correct": false,
        "explanation": "Il peut entrer dans de nombreux glycoconjugués."
      },
      {
        "content": "Le galactose est un cétohexose.",
        "correct": false,
        "explanation": "C'est un aldose."
      },
      {
        "content": "Il est épimère C2 du glucose.",
        "correct": false,
        "explanation": "C2 correspond au mannose."
      },
      {
        "content": "Le lactose est formé de fructose et galactose.",
        "correct": false,
        "explanation": "Il contient glucose et galactose."
      },
      {
        "content": "Il entre dans la composition du lactose.",
        "correct": true,
        "explanation": "Le lactose associe galactose et glucose."
      }
    ],
    "explanation": "Le galactose est un aldohexose épimère C4 du glucose."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "À quel carbone le mannose est-il épimère du glucose ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Le mannose est un aldohexose épimère C2 du glucose."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le fructose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le saccharose ne contient aucun fructose.",
        "correct": false,
        "explanation": "Il en contient un résidu."
      },
      {
        "content": "Il peut adopter une forme furanose.",
        "correct": true,
        "explanation": "Le fructofuranose est courant dans le saccharose."
      },
      {
        "content": "Il entre dans la composition du saccharose.",
        "correct": true,
        "explanation": "Le saccharose associe glucose et fructose."
      },
      {
        "content": "Le fructose est un aldopentose.",
        "correct": false,
        "explanation": "C'est un cétohexose."
      },
      {
        "content": "Le D-fructose est lévogyre malgré sa série D.",
        "correct": true,
        "explanation": "Il illustre l'indépendance D/L et +/−."
      }
    ],
    "explanation": "Le fructose est le cétohexose majeur, présent notamment dans le saccharose."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos du ribose et le 2-désoxyribose, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le 2-désoxyribose est le sucre de l'ADN.",
        "correct": true,
        "explanation": "Il manque l'OH en C2 par rapport au ribose."
      },
      {
        "content": "Le ribose est un cétose.",
        "correct": false,
        "explanation": "C'est un aldopentose."
      },
      {
        "content": "Le ribose est un hexose.",
        "correct": false,
        "explanation": "Il possède cinq carbones."
      },
      {
        "content": "La différence ribose/désoxyribose porte sur C5.",
        "correct": false,
        "explanation": "Elle porte sur C2."
      },
      {
        "content": "L'ADN contient du ribose non désoxygéné.",
        "correct": false,
        "explanation": "Il contient du 2-désoxyribose."
      }
    ],
    "explanation": "Ribose et 2-désoxyribose se distinguent par l'OH porté ou non par C2."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur les propriétés physiques des oses simples, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "La présence d'OH rend les oses apolaires.",
        "correct": false,
        "explanation": "Elle augmente leur polarité."
      },
      {
        "content": "Les oses sont généralement des solides moléculaires peu volatils.",
        "correct": true,
        "explanation": "Leur réseau de liaisons hydrogène renforce la cohésion."
      },
      {
        "content": "Tous les oses sont des gaz à température ambiante.",
        "correct": false,
        "explanation": "Ce sont généralement des solides."
      },
      {
        "content": "La cyclisation n'empêche pas la présence de nombreux groupes hydroxyle.",
        "correct": true,
        "explanation": "Les formes cycliques restent polaires."
      },
      {
        "content": "Le glucose est insoluble dans l'eau.",
        "correct": false,
        "explanation": "Il est très soluble."
      }
    ],
    "explanation": "Les nombreux groupes hydroxyle rendent les oses polaires et hydrosolubles.",
    "requiredSelectionCount": 2
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le pouvoir réducteur des oses, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le fructose peut aussi donner un test de Fehling positif en milieu alcalin.",
        "correct": true,
        "explanation": "Il s'isomérise via des énediols en aldoses réducteurs."
      },
      {
        "content": "Le test de Fehling positif produit du chlorure de sodium.",
        "correct": false,
        "explanation": "Il produit de l'oxyde cuivreux."
      },
      {
        "content": "Un test de Fehling positif forme un précipité rouge brique de $\\ce{Cu2O}$.",
        "correct": true,
        "explanation": "C'est le signal classique du test."
      },
      {
        "content": "Les aldoses réduisent classiquement la liqueur de Fehling en milieu alcalin.",
        "correct": true,
        "explanation": "Le cuivre(II) est réduit en oxyde cuivreux."
      },
      {
        "content": "Un ose possédant un carbone anomérique libre peut présenter un pouvoir réducteur.",
        "correct": true,
        "explanation": "La forme cyclique peut s'ouvrir vers une forme carbonylée."
      }
    ],
    "explanation": "Le pouvoir réducteur dépend de l'accessibilité d'une forme carbonylée ; le fructose peut être positif en milieu alcalin par isomérisation."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle enzyme interconvertit le glycéraldéhyde-3-phosphate et la dihydroxyacétone phosphate ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "triose-phosphate isomérase",
        "triose phosphate isomérase",
        "TPI"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les trioses phosphorylés GAP et DHAP sont des intermédiaires glycolytiques interconvertibles."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur le glucose, laquelle est exacte ?",
    "choices": [
      {
        "content": "Le glucose est exclusivement sous forme ouverte en eau.",
        "correct": false,
        "explanation": "Les formes cycliques dominent."
      },
      {
        "content": "Le glucose est un cétohexose.",
        "correct": false,
        "explanation": "Le fructose est le cétohexose de référence."
      },
      {
        "content": "Le glucose est un pentose.",
        "correct": false,
        "explanation": "Il possède six carbones."
      },
      {
        "content": "Le glucose est majoritairement cyclique en solution aqueuse.",
        "correct": true,
        "explanation": "Le glucopyranose domine."
      },
      {
        "content": "La glycémie mesure le galactose sanguin.",
        "correct": false,
        "explanation": "Elle mesure le glucose."
      }
    ],
    "explanation": "Le glucose est l'aldohexose énergétique de référence."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le galactose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le galactose est un cétohexose.",
        "correct": false,
        "explanation": "C'est un aldose."
      },
      {
        "content": "Il est épimère C2 du glucose.",
        "correct": false,
        "explanation": "C2 correspond au mannose."
      },
      {
        "content": "Le galactose est un aldohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction aldéhyde."
      },
      {
        "content": "Il entre dans la composition du lactose.",
        "correct": true,
        "explanation": "Le lactose associe galactose et glucose."
      },
      {
        "content": "Le lactose est formé de fructose et galactose.",
        "correct": false,
        "explanation": "Il contient glucose et galactose."
      }
    ],
    "explanation": "Le galactose est un aldohexose épimère C4 du glucose."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le glucose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le glucose est un pentose.",
        "correct": false,
        "explanation": "Il possède six carbones."
      },
      {
        "content": "Le glucose est majoritairement cyclique en solution aqueuse.",
        "correct": true,
        "explanation": "Le glucopyranose domine."
      },
      {
        "content": "Le glucose est exclusivement sous forme ouverte en eau.",
        "correct": false,
        "explanation": "Les formes cycliques dominent."
      },
      {
        "content": "La glycémie désigne la concentration de glucose dans le sang.",
        "correct": true,
        "explanation": "Son contrôle est central dans le diabète."
      },
      {
        "content": "La glycémie mesure le galactose sanguin.",
        "correct": false,
        "explanation": "Elle mesure le glucose."
      }
    ],
    "explanation": "Le glucose est l'aldohexose énergétique de référence."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À quel carbone le galactose est-il épimère du glucose ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Le galactose est un aldohexose épimère C4 du glucose."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur le mannose, laquelle est exacte ?",
    "choices": [
      {
        "content": "Sa réduction donne du mannitol.",
        "correct": true,
        "explanation": "La fonction carbonyle est réduite."
      },
      {
        "content": "Le mannose est un cétose.",
        "correct": false,
        "explanation": "C'est un aldose."
      },
      {
        "content": "Il est épimère C4 du glucose.",
        "correct": false,
        "explanation": "C4 correspond au galactose."
      },
      {
        "content": "Sa réduction donne uniquement du xylitol.",
        "correct": false,
        "explanation": "Le mannitol est le polyol attendu."
      },
      {
        "content": "Le mannose est absent des glycoprotéines.",
        "correct": false,
        "explanation": "Il y est fréquent."
      }
    ],
    "explanation": "Le mannose est un aldohexose épimère C2 du glucose."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le fructose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est épimère C4 du glucose.",
        "correct": false,
        "explanation": "Ils diffèrent d'abord par la fonction carbonyle."
      },
      {
        "content": "Le fructose est un aldopentose.",
        "correct": false,
        "explanation": "C'est un cétohexose."
      },
      {
        "content": "D-fructose signifie nécessairement dextrogyre.",
        "correct": false,
        "explanation": "Il est classiquement lévogyre."
      },
      {
        "content": "Il entre dans la composition du saccharose.",
        "correct": true,
        "explanation": "Le saccharose associe glucose et fructose."
      },
      {
        "content": "Le D-fructose est lévogyre malgré sa série D.",
        "correct": true,
        "explanation": "Il illustre l'indépendance D/L et +/−."
      }
    ],
    "explanation": "Le fructose est le cétohexose majeur, présent notamment dans le saccharose."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos du ribose et le 2-désoxyribose, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Le ribose est un hexose.",
        "correct": false,
        "explanation": "Il possède cinq carbones."
      },
      {
        "content": "La différence ribose/désoxyribose porte sur C5.",
        "correct": false,
        "explanation": "Elle porte sur C2."
      },
      {
        "content": "Le 2-désoxyribose est le sucre de l'ADN.",
        "correct": true,
        "explanation": "Il manque l'OH en C2 par rapport au ribose."
      },
      {
        "content": "Le ribose est un pentose de l'ARN.",
        "correct": true,
        "explanation": "Il entre dans les ribonucléotides."
      },
      {
        "content": "Le ribose est un cétose.",
        "correct": false,
        "explanation": "C'est un aldopentose."
      }
    ],
    "explanation": "Ribose et 2-désoxyribose se distinguent par l'OH porté ou non par C2.",
    "requiredSelectionCount": 2
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les propriétés physiques des oses simples, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Les oses sont généralement très hydrophiles.",
        "correct": true,
        "explanation": "Leurs nombreux groupes hydroxyle interagissent avec l'eau."
      },
      {
        "content": "La cyclisation n'empêche pas la présence de nombreux groupes hydroxyle.",
        "correct": true,
        "explanation": "Les formes cycliques restent polaires."
      },
      {
        "content": "Tous les oses sont des gaz à température ambiante.",
        "correct": false,
        "explanation": "Ce sont généralement des solides."
      },
      {
        "content": "Les oses sont généralement très lipophiles.",
        "correct": false,
        "explanation": "Leurs nombreux OH les rendent hydrophiles."
      },
      {
        "content": "Les oses simples sont souvent très solubles dans l'eau.",
        "correct": true,
        "explanation": "Les liaisons hydrogène favorisent leur solvatation."
      }
    ],
    "explanation": "Les nombreux groupes hydroxyle rendent les oses polaires et hydrosolubles."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle couleur caractéristique présente le précipité lors d'un test de Fehling positif ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "rouge brique",
        "rouge",
        "rouge-brique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pouvoir réducteur dépend de l'accessibilité d'une forme carbonylée ; le fructose peut être positif en milieu alcalin par isomérisation."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel solide coloré est observé lors d'un test de Fehling positif ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "oxyde cuivreux",
        "Cu2O",
        "précipité rouge brique d'oxyde cuivreux",
        "precipite rouge brique d'oxyde cuivreux"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le cuivre(II) est réduit en oxyde cuivreux $\\ce{Cu2O}$, précipité rouge brique."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le glucose, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le glucose est majoritairement cyclique en solution aqueuse.",
        "correct": true,
        "explanation": "Le glucopyranose domine."
      },
      {
        "content": "Le glucose est un cétohexose.",
        "correct": false,
        "explanation": "Le fructose est le cétohexose de référence."
      },
      {
        "content": "La glycémie désigne la concentration de glucose dans le sang.",
        "correct": true,
        "explanation": "Son contrôle est central dans le diabète."
      },
      {
        "content": "Le glucose est un aldohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte contient un aldéhyde et six carbones."
      },
      {
        "content": "Le glucose est un substrat énergétique majeur.",
        "correct": true,
        "explanation": "Il alimente notamment la glycolyse."
      }
    ],
    "explanation": "Le glucose est l'aldohexose énergétique de référence."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La différence ribose/désoxyribose porte sur C5.",
        "correct": false,
        "explanation": "Elle porte sur C2."
      },
      {
        "content": "Des anomalies de son métabolisme peuvent provoquer des galactosémies.",
        "correct": true,
        "explanation": "Plusieurs déficits enzymatiques sont possibles."
      },
      {
        "content": "L'ADN contient du ribose non désoxygéné.",
        "correct": false,
        "explanation": "Il contient du 2-désoxyribose."
      },
      {
        "content": "Le galactose est un aldohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction aldéhyde."
      },
      {
        "content": "Il entre dans la composition du lactose.",
        "correct": true,
        "explanation": "Le lactose associe galactose et glucose."
      },
      {
        "content": "Le ribose est un cétose.",
        "correct": false,
        "explanation": "C'est un aldopentose."
      },
      {
        "content": "Dans les nucléotides, ces pentoses sont sous forme furanose.",
        "correct": true,
        "explanation": "Le cycle à cinq sommets est la forme structurale usuelle."
      },
      {
        "content": "Il est épimère C2 du glucose.",
        "correct": false,
        "explanation": "C2 correspond au mannose."
      },
      {
        "content": "Le ribose est un hexose.",
        "correct": false,
        "explanation": "Il possède cinq carbones."
      },
      {
        "content": "Il est épimère C4 du glucose.",
        "correct": true,
        "explanation": "Une seule configuration les distingue."
      }
    ],
    "explanation": "Le galactose est un aldohexose épimère C4 du glucose. Ribose et 2-désoxyribose se distinguent par l'OH porté ou non par C2."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du mannose, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Il est fréquent dans les N-glycanes de glycoprotéines.",
        "correct": true,
        "explanation": "Les oligosaccharides N-liés comportent souvent du mannose."
      },
      {
        "content": "Il est épimère C4 du glucose.",
        "correct": false,
        "explanation": "C4 correspond au galactose."
      },
      {
        "content": "Il est épimère C2 du glucose.",
        "correct": true,
        "explanation": "La configuration de C2 diffère."
      },
      {
        "content": "Le mannose est un cétose.",
        "correct": false,
        "explanation": "C'est un aldose."
      },
      {
        "content": "Sa réduction donne uniquement du xylitol.",
        "correct": false,
        "explanation": "Le mannitol est le polyol attendu."
      }
    ],
    "explanation": "Le mannose est un aldohexose épimère C2 du glucose."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle fonction carbonyle porte le fructose sous forme ouverte ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cétone",
        "cetone",
        "une cétone",
        "une cetone"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le fructose est le cétohexose majeur, présent notamment dans le saccharose."
  }
];
