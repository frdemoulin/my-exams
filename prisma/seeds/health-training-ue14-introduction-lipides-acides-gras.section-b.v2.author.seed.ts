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
        "explanation": "La synthèse des acides gras procède principalement par ajouts successifs d’unités à deux carbones."
      },
      {
        "content": "Sont liés à des voies de synthèse/dégradation par unités à deux carbones.",
        "correct": true,
        "explanation": "Explication."
      },
      {
        "content": "Peuvent néanmoins présenter des exceptions impaires.",
        "correct": true,
        "explanation": "Des acides gras à nombre impair, notamment C15:0 ou C17:0, existent chez les mammifères."
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
    "question": "Quel est le nom systématique de l’acide palmitique ?",
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
    "question": "À propos de l’acide undécylénique :",
    "choices": [
      {
        "content": "Possède 11 carbones.",
        "correct": true,
        "explanation": "L’acide undécylénique est un acide gras mono-insaturé comportant onze carbones."
      },
      {
        "content": "Constitue un exemple d’acide gras impair.",
        "correct": true,
        "explanation": "Exception au caractère pair dominant."
      },
      {
        "content": "Est utilisé dans certaines préparations antifongiques topiques.",
        "correct": true,
        "explanation": "L’acide undécylénique et certains de ses sels possèdent une activité antifongique."
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
    "question": "À propos des acides gras à chaîne courte :",
    "choices": [
      {
        "content": "Ils comportent généralement jusqu’à six carbones.",
        "correct": true,
        "explanation": "Les acides gras à chaîne courte sont généralement définis par une chaîne ne dépassant pas six carbones."
      },
      {
        "content": "Une catégorie distincte des chaînes moyennes.",
        "correct": true,
        "explanation": "Classification."
      },
      {
        "content": "Ils peuvent être produits par fermentation microbienne dans le côlon.",
        "correct": true,
        "explanation": "Le microbiote colique produit notamment acétate, propionate et butyrate."
      },
      {
        "content": "16 et 20 carbones.",
        "correct": false,
        "explanation": "Chaînes longues."
      }
    ],
    "explanation": "Les acides gras à chaîne courte se distinguent des chaînes moyennes et peuvent provenir de la fermentation colique."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les acides gras à chaîne moyenne :",
    "choices": [
      {
        "content": "Comportent généralement de 6 à 12 carbones.",
        "correct": true,
        "explanation": "Plage."
      },
      {
        "content": "Sont distingués des chaînes courtes et longues.",
        "correct": true,
        "explanation": "Classification."
      },
      {
        "content": "Sont notamment présents dans les matières grasses laitières et certaines huiles tropicales.",
        "correct": true,
        "explanation": "Sources."
      },
      {
        "content": "Ont toujours plus de 20 carbones.",
        "correct": false,
        "explanation": "Très longues chaînes."
      }
    ],
    "explanation": "Les acides gras à chaîne moyenne sont généralement définis par une longueur de 6 à 12 carbones."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les acides gras à longue chaîne :",
    "choices": [
      {
        "content": "Comportent généralement de 13 à 21 carbones.",
        "correct": true,
        "explanation": "Plage."
      },
      {
        "content": "Incluent les acides palmitique et stéarique.",
        "correct": true,
        "explanation": "16C et 18C."
      },
      {
        "content": "Sont présents dans des graisses animales et végétales.",
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
    "question": "Un acide gras comportant au moins 22 carbones est classé comme :",
    "choices": [
      {
        "content": "Très longue chaîne.",
        "correct": true,
        "explanation": "Les acides gras comportant au moins 22 carbones sont qualifiés de très longue chaîne."
      },
      {
        "content": "Courte chaîne.",
        "correct": false,
        "explanation": "Une chaîne courte ne dépasse généralement pas six carbones."
      },
      {
        "content": "Moyenne chaîne.",
        "correct": false,
        "explanation": "Une chaîne moyenne comporte généralement de 6 à 12 carbones."
      },
      {
        "content": "Longue chaîne uniquement.",
        "correct": false,
        "explanation": "À partir de 22 carbones, la catégorie très longue chaîne est utilisée."
      }
    ],
    "explanation": "La catégorie des acides gras à très longue chaîne débute généralement à 22 carbones."
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
        "explanation": "La notation 16:0 correspond à l’acide palmitique."
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
    "explanation": "Le 18:0 correspond à l’acide stéarique."
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
        "explanation": "La synthèse des acides gras allonge la chaîne par unités de deux carbones."
      },
      {
        "content": "Des réactions de dégradation par clivage de chaînons dicarbonés.",
        "correct": true,
        "explanation": "La β-oxydation retire successivement des unités à deux carbones."
      },
      {
        "content": "Un mécanisme cohérent avec l’abondance des 16C et 18C.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "L’impossibilité absolue d’avoir un acide gras impair.",
        "correct": false,
        "explanation": "Des acides gras à nombre impair existent, même s’ils sont minoritaires."
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
        "explanation": "Douze carbones se situent à la borne supérieure des chaînes moyennes."
      },
      {
        "content": "Dans une catégorie distincte du 16:0.",
        "correct": true,
        "explanation": "Le 16:0 appartient aux acides gras à chaîne longue."
      },
      {
        "content": "Par le nombre de carbones indépendamment de son degré d’insaturation.",
        "correct": true,
        "explanation": "Deux critères séparés."
      },
      {
        "content": "À très longue chaîne.",
        "correct": false,
        "explanation": "Une très longue chaîne comporte au moins 22 carbones."
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
        "explanation": "Une chaîne de 22 carbones appartient aux très longues chaînes."
      },
      {
        "content": "Au-delà de la plage usuelle 13–21 des longues chaînes.",
        "correct": true,
        "explanation": "Comparaison."
      },
      {
        "content": "Dans une catégorie comprenant des constituants de cires et de sphingolipides.",
        "correct": true,
        "explanation": "Des acides gras à très longue chaîne sont présents notamment dans certaines cires et sphingolipides."
      },
      {
        "content": "À courte chaîne.",
        "correct": false,
        "explanation": "Une chaîne courte ne comporte que quelques carbones."
      }
    ],
    "explanation": "Un acide gras à 22 carbones appartient à la catégorie des très longues chaînes."
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
    "question": "Sélectionnez exactement les deux acides gras saturés parmi les propositions suivantes.",
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
    "explanation": "Les acides palmitique 16:0 et stéarique 18:0 sont deux acides gras saturés usuels."
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
        "content": "Les chaînes moyennes comportent généralement 6 à 12 carbones.",
        "correct": true,
        "explanation": "Classification."
      },
      {
        "content": "Les chaînes longues comportent généralement 13 à 21 carbones.",
        "correct": true,
        "explanation": "Classification."
      },
      {
        "content": "Les très longues chaînes comportent au moins 22 carbones.",
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
        "explanation": "Une chaîne courte ne comporte généralement pas plus de six carbones."
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
