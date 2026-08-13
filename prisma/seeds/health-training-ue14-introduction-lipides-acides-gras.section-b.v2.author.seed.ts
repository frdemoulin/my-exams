import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Introduction générale sur les lipides et acides gras — Section B
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH4_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Chez les mammifères, la majorité des acides gras :",
    "choices": [
      {
        "content": "Possèdent un nombre pair de carbones.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "Sont liés à des voies de synthèse/dégradation par unités à deux carbones.",
        "correct": true,
        "explanation": "Explication."
      },
      {
        "content": "Peuvent néanmoins présenter des exceptions impaires.",
        "correct": true,
        "explanation": "Exemple de l’acide undécylénique."
      },
      {
        "content": "Possèdent obligatoirement 18 carbones.",
        "correct": false,
        "explanation": "Plusieurs longueurs existent."
      }
    ],
    "explanation": "Les chaînons dicarbonés expliquent la prédominance des longueurs paires."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’acide palmitique :",
    "choices": [
      {
        "content": "Possède 16 carbones.",
        "correct": true,
        "explanation": "16:0."
      },
      {
        "content": "Est saturé.",
        "correct": true,
        "explanation": "0 double liaison."
      },
      {
        "content": "A pour symbole 16:0.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Est un acide gras ω3 polydésaturé.",
        "correct": false,
        "explanation": "Il est saturé."
      }
    ],
    "explanation": "L’acide palmitique est le repère saturé 16:0."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’acide stéarique :",
    "choices": [
      {
        "content": "Possède 18 carbones.",
        "correct": true,
        "explanation": "18:0."
      },
      {
        "content": "Est saturé.",
        "correct": true,
        "explanation": "0 double liaison."
      },
      {
        "content": "A pour symbole 18:0.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Possède trois doubles liaisons cis.",
        "correct": false,
        "explanation": "Il n’en possède aucune."
      }
    ],
    "explanation": "L’acide stéarique est le repère saturé 18:0."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom systématique de l’acide palmitique donné dans le support ?",
    "choices": [
      {
        "content": "Acide hexadécanoïque.",
        "correct": true,
        "explanation": "Nom systématique du 16:0."
      },
      {
        "content": "Acide octadécanoïque.",
        "correct": false,
        "explanation": "Acide stéarique."
      },
      {
        "content": "Acide linoléique.",
        "correct": false,
        "explanation": "18:2."
      },
      {
        "content": "Acide oléique.",
        "correct": false,
        "explanation": "18:1."
      }
    ],
    "explanation": "Le 16:0 est l’acide hexadécanoïque, appelé usuellement acide palmitique."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom systématique de l’acide stéarique ?",
    "choices": [
      {
        "content": "Acide octadécanoïque.",
        "correct": true,
        "explanation": "Nom systématique du 18:0."
      },
      {
        "content": "Acide hexadécanoïque.",
        "correct": false,
        "explanation": "Palmitique."
      },
      {
        "content": "Acide cis-9-octadécénoïque.",
        "correct": false,
        "explanation": "Oléique."
      },
      {
        "content": "Acide eicosatétraénoïque.",
        "correct": false,
        "explanation": "Arachidonique."
      }
    ],
    "explanation": "Le 18:0 est l’acide octadécanoïque."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’acide undécylénique cité dans la fiche :",
    "choices": [
      {
        "content": "Possède 11 carbones.",
        "correct": true,
        "explanation": "Longueur impaire citée."
      },
      {
        "content": "Constitue un exemple d’acide gras impair.",
        "correct": true,
        "explanation": "Exception au caractère pair dominant."
      },
      {
        "content": "Est associé à une sécrétion des glandes sébacées du cuir chevelu.",
        "correct": true,
        "explanation": "Contexte du support."
      },
      {
        "content": "Est l’acide palmitique.",
        "correct": false,
        "explanation": "Palmitique = 16:0."
      }
    ],
    "explanation": "L’acide undécylénique illustre qu’un acide gras peut avoir un nombre impair de carbones."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les acides gras à courte chaîne sont classés dans la fiche entre :",
    "choices": [
      {
        "content": "4 et 8 carbones.",
        "correct": true,
        "explanation": "Plage citée."
      },
      {
        "content": "Une catégorie distincte des chaînes moyennes.",
        "correct": true,
        "explanation": "Classification."
      },
      {
        "content": "Une catégorie principalement retrouvée dans les beurres selon le support.",
        "correct": true,
        "explanation": "Exemple de source."
      },
      {
        "content": "16 et 20 carbones.",
        "correct": false,
        "explanation": "Chaînes longues."
      }
    ],
    "explanation": "La fiche fixe des plages simples pour les catégories de longueur."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les acides gras à chaîne moyenne :",
    "choices": [
      {
        "content": "Comportent 10 à 14 carbones.",
        "correct": true,
        "explanation": "Plage."
      },
      {
        "content": "Sont distingués des chaînes courtes et longues.",
        "correct": true,
        "explanation": "Classification."
      },
      {
        "content": "Sont cités dans les beurres et graisses végétales.",
        "correct": true,
        "explanation": "Sources."
      },
      {
        "content": "Ont toujours plus de 20 carbones.",
        "correct": false,
        "explanation": "Très longues chaînes."
      }
    ],
    "explanation": "La catégorie moyenne correspond à 10–14 carbones dans le support."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les acides gras à longue chaîne :",
    "choices": [
      {
        "content": "Comportent 16 à 20 carbones.",
        "correct": true,
        "explanation": "Plage."
      },
      {
        "content": "Incluent les acides palmitique et stéarique.",
        "correct": true,
        "explanation": "16C et 18C."
      },
      {
        "content": "Sont cités dans des graisses animales et végétales.",
        "correct": true,
        "explanation": "Sources."
      },
      {
        "content": "Sont définis par 4 à 8 carbones.",
        "correct": false,
        "explanation": "Chaînes courtes."
      }
    ],
    "explanation": "Palmitique et stéarique appartiennent aux longues chaînes selon cette classification."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Un acide gras comportant plus de 20 carbones est classé comme :",
    "choices": [
      {
        "content": "Très longue chaîne.",
        "correct": true,
        "explanation": "Définition du support."
      },
      {
        "content": "Courte chaîne.",
        "correct": false,
        "explanation": "4–8."
      },
      {
        "content": "Moyenne chaîne.",
        "correct": false,
        "explanation": "10–14."
      },
      {
        "content": "Longue chaîne uniquement.",
        "correct": false,
        "explanation": "La catégorie très longue est réservée à >20."
      }
    ],
    "explanation": "Au-delà de 20 carbones, la fiche parle d’acide gras à très longue chaîne."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un acide gras noté 16:0 :",
    "choices": [
      {
        "content": "Possède 16 carbones.",
        "correct": true,
        "explanation": "Premier nombre."
      },
      {
        "content": "Ne possède aucune double liaison.",
        "correct": true,
        "explanation": "Second nombre."
      },
      {
        "content": "Peut correspondre à l’acide palmitique.",
        "correct": true,
        "explanation": "Repère du support."
      },
      {
        "content": "Est nécessairement un ω6.",
        "correct": false,
        "explanation": "La série ω n’est pas définie ici en l’absence de double liaison."
      }
    ],
    "explanation": "La notation C:D indique nombre de carbones et nombre de doubles liaisons."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un acide gras noté 18:0 :",
    "choices": [
      {
        "content": "Possède 18 carbones.",
        "correct": true,
        "explanation": "Premier nombre."
      },
      {
        "content": "Est saturé.",
        "correct": true,
        "explanation": "0 double liaison."
      },
      {
        "content": "Peut correspondre à l’acide stéarique.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Est l’acide palmitoléique.",
        "correct": false,
        "explanation": "Palmitoléique = 16:1."
      }
    ],
    "explanation": "Le 18:0 correspond à l’acide stéarique dans les exemples du cours."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de doubles liaisons possède l’acide palmitique 16:0 ?",
    "answer": {
      "type": "number",
      "value": 0,
      "tolerance": 0
    },
    "explanation": "Le second nombre du symbole 16:0 donne le nombre de doubles liaisons."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d’atomes de carbone possède l’acide stéarique 18:0 ?",
    "answer": {
      "type": "number",
      "value": 18,
      "tolerance": 0
    },
    "explanation": "Le premier nombre du symbole 18:0 donne le nombre de carbones."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La prédominance d’acides gras à nombre pair chez les mammifères est expliquée par :",
    "choices": [
      {
        "content": "Des réactions de synthèse par ajout de chaînons dicarbonés.",
        "correct": true,
        "explanation": "Explication du support."
      },
      {
        "content": "Des réactions de dégradation par clivage de chaînons dicarbonés.",
        "correct": true,
        "explanation": "Explication du support."
      },
      {
        "content": "Un mécanisme cohérent avec l’abondance des 16C et 18C.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "L’impossibilité absolue d’avoir un acide gras impair.",
        "correct": false,
        "explanation": "L’acide undécylénique est une exception citée."
      }
    ],
    "explanation": "Les unités à deux carbones expliquent la distribution majoritairement paire."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un acide gras à 12 carbones serait classé :",
    "choices": [
      {
        "content": "À chaîne moyenne.",
        "correct": true,
        "explanation": "10–14 C."
      },
      {
        "content": "Dans une catégorie distincte du 16:0.",
        "correct": true,
        "explanation": "Le 16:0 est longue chaîne."
      },
      {
        "content": "Par le nombre de carbones indépendamment de son degré d’insaturation.",
        "correct": true,
        "explanation": "Deux critères séparés."
      },
      {
        "content": "À très longue chaîne.",
        "correct": false,
        "explanation": ">20 C."
      }
    ],
    "explanation": "Le classement par longueur repose seulement sur le nombre de carbones."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un acide gras à 22 carbones serait classé :",
    "choices": [
      {
        "content": "À très longue chaîne.",
        "correct": true,
        "explanation": ">20 C."
      },
      {
        "content": "Au-delà de la plage 16–20 des longues chaînes.",
        "correct": true,
        "explanation": "Comparaison."
      },
      {
        "content": "Dans une catégorie citée notamment pour des huiles et cires.",
        "correct": true,
        "explanation": "Sources du support."
      },
      {
        "content": "À courte chaîne.",
        "correct": false,
        "explanation": "4–8 C."
      }
    ],
    "explanation": "La frontière retenue dans la fiche est >20 carbones pour les très longues chaînes."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une formule topologique d’acide gras saturé :",
    "choices": [
      {
        "content": "Le carbone du carboxyle compte dans le nombre total de carbones.",
        "correct": true,
        "explanation": "C1 officiel."
      },
      {
        "content": "Chaque sommet/angle de la chaîne représente un carbone implicite.",
        "correct": true,
        "explanation": "Rappel de représentation."
      },
      {
        "content": "L’absence de double liaison est cohérente avec un symbole x:0.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Le carbone carboxylique est exclu de la numérotation officielle.",
        "correct": false,
        "explanation": "Il est C1."
      }
    ],
    "explanation": "Le comptage topologique doit inclure le carbone carboxylique."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le nom commun de l’acide gras saturé 16:0 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide palmitique",
        "palmitique",
        "l’acide palmitique",
        "l'acide palmitique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le 16:0 est l’acide palmitique."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le nom commun de l’acide gras saturé 18:0 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide stearique",
        "acide stéarique",
        "stearique",
        "stéarique",
        "l'acide stéarique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le 18:0 est l’acide stéarique."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux acides gras saturés de référence du support.",
    "choices": [
      {
        "content": "Acide palmitique 16:0.",
        "correct": true,
        "explanation": "Saturé."
      },
      {
        "content": "Acide stéarique 18:0.",
        "correct": true,
        "explanation": "Saturé."
      },
      {
        "content": "Acide oléique 18:1.",
        "correct": false,
        "explanation": "Monodésaturé."
      },
      {
        "content": "Acide linoléique 18:2.",
        "correct": false,
        "explanation": "Polydésaturé."
      }
    ],
    "explanation": "Palmitique et stéarique sont les deux repères saturés majeurs du chapitre."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Acides gras saturés et classes de longueur : sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Le 16:0 est l’acide palmitique.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Le 18:0 est l’acide stéarique.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Les chaînes moyennes comportent 10 à 14 carbones.",
        "correct": true,
        "explanation": "Classification."
      },
      {
        "content": "Les chaînes longues comportent 16 à 20 carbones.",
        "correct": true,
        "explanation": "Classification."
      },
      {
        "content": "Les très longues chaînes ont plus de 20 carbones.",
        "correct": true,
        "explanation": "Classification."
      },
      {
        "content": "Le 16:0 possède une double liaison.",
        "correct": false,
        "explanation": "0 DL."
      },
      {
        "content": "L’acide stéarique possède 16 carbones.",
        "correct": false,
        "explanation": "18 C."
      },
      {
        "content": "Les chaînes courtes ont 16 à 20 carbones.",
        "correct": false,
        "explanation": "4–8 C."
      },
      {
        "content": "Tous les acides gras des mammifères ont un nombre pair.",
        "correct": false,
        "explanation": "Il existe des exceptions."
      },
      {
        "content": "L’acide undécylénique possède 18 carbones.",
        "correct": false,
        "explanation": "11 C."
      }
    ],
    "explanation": "Cette QRPL consolide longueurs de chaîne et acides gras saturés de référence."
  }
];
