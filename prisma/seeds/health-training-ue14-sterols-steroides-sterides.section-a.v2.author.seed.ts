import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Stérols, stéroïdes et stérides — Section A — Noyau stéroïdien, stérols et stérides */
export const UE14_BIOCH_CH8_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le noyau stéroïdien de base, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le cycle D est un cycle à six chaînons.",
        "correct": false,
        "explanation": "Le cycle D est à cinq chaînons."
      },
      {
        "content": "Le squelette parent comporte 27 carbones.",
        "correct": false,
        "explanation": "Le cholestérol en possède 27 ; le noyau parent est C17."
      },
      {
        "content": "Il comporte quatre cycles fusionnés.",
        "correct": true,
        "explanation": "Le squelette stéroïdien est tétracyclique."
      },
      {
        "content": "Les cycles A, B et C sont à six chaînons et le cycle D à cinq chaînons.",
        "correct": true,
        "explanation": "Cette architecture est un repère majeur."
      },
      {
        "content": "Tous les stéroïdes ont exactement les mêmes substituants.",
        "correct": false,
        "explanation": "Les substituants différencient les familles."
      }
    ],
    "explanation": "Le squelette stéroïdien de base est tétracyclique : trois cycles à six chaînons et un cycle à cinq chaînons."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de cycles fusionnés comporte le noyau stéroïdien ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Le squelette stéroïdien de base comporte quatre cycles fusionnés."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment appelle-t-on un ester formé entre un stérol et un acide gras ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "stéride",
        "stéride",
        "ester de stérol",
        "ester de cholesterol",
        "ester de cholestérol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un stéride est un ester de stérol, particulièrement hydrophobe et adapté au stockage/transport dans un cœur lipidique."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le squalène et la biosynthèse stéroïdienne, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La voie du mévalonate fournit les unités isopréniques conduisant au squalène.",
        "correct": true,
        "explanation": "Elle relie acétyl-CoA et biosynthèse des stérols."
      },
      {
        "content": "Il précède la formation du squelette stéroïdien au cours de la biosynthèse.",
        "correct": true,
        "explanation": "Sa cyclisation intervient après conversion en époxyde."
      },
      {
        "content": "Le squalène est un acide aminé à 30 carbones.",
        "correct": false,
        "explanation": "C'est un hydrocarbure isoprénique."
      },
      {
        "content": "La biosynthèse des stérols ne fait intervenir aucune unité isoprénique.",
        "correct": false,
        "explanation": "Elle en dépend."
      },
      {
        "content": "Le squalène est un hydrocarbure isoprénique à 30 carbones.",
        "correct": true,
        "explanation": "Il appartient à la voie de biosynthèse du cholestérol."
      }
    ],
    "explanation": "Le squalène C30 est un précurseur isoprénique acyclique de la biosynthèse du cholestérol et des stéroïdes."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la distinction stérol, stéride et stéroïde, laquelle est correcte ?",
    "choices": [
      {
        "content": "Un stéride est un ester de stérol.",
        "correct": true,
        "explanation": "Il résulte d'une transformation de la fonction alcool."
      },
      {
        "content": "Le cholestérol libre ne possède aucun groupement polaire.",
        "correct": false,
        "explanation": "Son OH en C3 constitue un petit pôle hydrophile."
      },
      {
        "content": "Tout stéroïde est un ester de stérol.",
        "correct": false,
        "explanation": "Le terme stéroïde est bien plus large."
      },
      {
        "content": "Un stéride est nécessairement une hormone.",
        "correct": false,
        "explanation": "C'est un ester de stérol."
      },
      {
        "content": "Stérol et triacylglycérol sont synonymes.",
        "correct": false,
        "explanation": "Ce sont des classes distinctes."
      }
    ],
    "explanation": "Stéroïde, stérol et stéride ne sont pas synonymes : le cholestérol libre est un stérol et son ester est un stéride."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant la numérotation du squelette stéroïdien, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La numérotation des carbones suit une convention fixe propre au squelette stéroïdien.",
        "correct": true,
        "explanation": "Elle permet de localiser substituants et doubles liaisons."
      },
      {
        "content": "La chaîne latérale du cholestérol est fixée en C3.",
        "correct": false,
        "explanation": "Elle est fixée en C17."
      },
      {
        "content": "C17 porte la chaîne latérale du cholestérol.",
        "correct": true,
        "explanation": "Cette chaîne contribue au total de 27 carbones."
      },
      {
        "content": "La double liaison du cholestérol se situe entre C1 et C2.",
        "correct": false,
        "explanation": "Elle est C5-C6."
      },
      {
        "content": "La numérotation change au hasard selon l'hormone considérée.",
        "correct": false,
        "explanation": "La convention du squelette est stable."
      }
    ],
    "explanation": "La numérotation du squelette stéroïdien permet de repérer l'OH C3, la double liaison C5-C6 et la chaîne latérale C17 du cholestérol.",
    "requiredSelectionCount": 2
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une situation d'application n°2, concernant le noyau stéroïdien de base, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il comporte quatre cycles fusionnés.",
        "correct": true,
        "explanation": "Le squelette stéroïdien est tétracyclique."
      },
      {
        "content": "Les cycles A, B et C sont à six chaînons et le cycle D à cinq chaînons.",
        "correct": true,
        "explanation": "Cette architecture est un repère majeur."
      },
      {
        "content": "Le squelette carboné de référence comporte 17 carbones.",
        "correct": true,
        "explanation": "Le gonane est le parent C17 des stéroïdes."
      },
      {
        "content": "La stéréochimie des jonctions de cycles influence fortement la forme tridimensionnelle.",
        "correct": true,
        "explanation": "Les stéroïdes ne sont pas de simples structures planes."
      },
      {
        "content": "Il comporte trois cycles seulement.",
        "correct": false,
        "explanation": "Le squelette stéroïdien en comporte quatre."
      }
    ],
    "explanation": "Le squelette stéroïdien de base est tétracyclique : trois cycles à six chaînons et un cycle à cinq chaînons."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de carbones comporte le squelette gonane de référence des stéroïdes ?",
    "answer": {
      "type": "number",
      "value": 17,
      "tolerance": 0
    },
    "explanation": "Le gonane est le squelette parent C17 des stéroïdes."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les stérides ou esters de stérol ?",
    "choices": [
      {
        "content": "L'estérification augmente la polarité du cholestérol.",
        "correct": false,
        "explanation": "Elle masque son OH et accroît son hydrophobicité."
      },
      {
        "content": "Ils résultent de l'estérification de la fonction alcool d'un stérol par un acide gras.",
        "correct": true,
        "explanation": "Le cholestérol estérifié en est l'exemple majeur."
      },
      {
        "content": "Un stéride contient obligatoirement du glycérol.",
        "correct": false,
        "explanation": "Ce n'est pas requis."
      },
      {
        "content": "Ils sont des glycosphingolipides.",
        "correct": false,
        "explanation": "Ils appartiennent à une autre famille."
      },
      {
        "content": "La liaison formée est une liaison peptidique.",
        "correct": false,
        "explanation": "C'est une liaison ester."
      }
    ],
    "explanation": "Un stéride est un ester de stérol, particulièrement hydrophobe et adapté au stockage/transport dans un cœur lipidique."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une situation d'application n°2, concernant le squalène et la biosynthèse stéroïdienne, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le squalène est un hydrocarbure isoprénique à 30 carbones.",
        "correct": true,
        "explanation": "Il appartient à la voie de biosynthèse du cholestérol."
      },
      {
        "content": "La biosynthèse des stérols ne fait intervenir aucune unité isoprénique.",
        "correct": false,
        "explanation": "Elle en dépend."
      },
      {
        "content": "Le squalène est un acide aminé à 30 carbones.",
        "correct": false,
        "explanation": "C'est un hydrocarbure isoprénique."
      },
      {
        "content": "Il est un produit final de la glycolyse.",
        "correct": false,
        "explanation": "Il appartient à la voie des isoprénoïdes."
      },
      {
        "content": "Il précède la formation du squelette stéroïdien au cours de la biosynthèse.",
        "correct": true,
        "explanation": "Sa cyclisation intervient après conversion en époxyde."
      }
    ],
    "explanation": "Le squalène C30 est un précurseur isoprénique acyclique de la biosynthèse du cholestérol et des stéroïdes."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le noyau stéroïdien de base, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La stéréochimie des jonctions de cycles influence fortement la forme tridimensionnelle.",
        "correct": true,
        "explanation": "Les stéroïdes ne sont pas de simples structures planes."
      },
      {
        "content": "Tous les stéroïdes ont exactement les mêmes substituants.",
        "correct": false,
        "explanation": "Les substituants différencient les familles."
      },
      {
        "content": "Le squelette parent comporte 27 carbones.",
        "correct": false,
        "explanation": "Le cholestérol en possède 27 ; le noyau parent est C17."
      },
      {
        "content": "Le cycle D est un cycle à six chaînons.",
        "correct": false,
        "explanation": "Le cycle D est à cinq chaînons."
      },
      {
        "content": "Le squelette carboné de référence comporte 17 carbones.",
        "correct": true,
        "explanation": "Le gonane est le parent C17 des stéroïdes."
      }
    ],
    "explanation": "Le squelette stéroïdien de base est tétracyclique : trois cycles à six chaînons et un cycle à cinq chaînons."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle fonction caractéristique porte le cholestérol en C3 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "hydroxyle",
        "fonction alcool",
        "OH",
        "groupement hydroxyle"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les stérols associent un squelette stéroïdien à une fonction alcool, classiquement en C3."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les stérides ou esters de stérol ?",
    "choices": [
      {
        "content": "La liaison formée est une liaison peptidique.",
        "correct": false,
        "explanation": "C'est une liaison ester."
      },
      {
        "content": "L'estérification augmente la polarité du cholestérol.",
        "correct": false,
        "explanation": "Elle masque son OH et accroît son hydrophobicité."
      },
      {
        "content": "Ils sont des glycosphingolipides.",
        "correct": false,
        "explanation": "Ils appartiennent à une autre famille."
      },
      {
        "content": "Un stéride contient obligatoirement du glycérol.",
        "correct": false,
        "explanation": "Ce n'est pas requis."
      },
      {
        "content": "Les esters de cholestérol constituent une forme de stockage du cholestérol.",
        "correct": true,
        "explanation": "Ils sont présents dans des gouttelettes lipidiques et le cœur hydrophobe des lipoprotéines."
      }
    ],
    "explanation": "Un stéride est un ester de stérol, particulièrement hydrophobe et adapté au stockage/transport dans un cœur lipidique."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le squalène et la biosynthèse stéroïdienne, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le cholestérol n'est donc pas synthétisé directement à partir d'un acide gras préformé.",
        "correct": true,
        "explanation": "Sa biosynthèse passe par des unités isopréniques."
      },
      {
        "content": "Le squalène est un hydrocarbure isoprénique à 30 carbones.",
        "correct": true,
        "explanation": "Il appartient à la voie de biosynthèse du cholestérol."
      },
      {
        "content": "Le squalène possède le noyau stéroïdien déjà cyclisé.",
        "correct": false,
        "explanation": "Il est un précurseur acyclique."
      },
      {
        "content": "La voie du mévalonate fournit les unités isopréniques conduisant au squalène.",
        "correct": true,
        "explanation": "Elle relie acétyl-CoA et biosynthèse des stérols."
      },
      {
        "content": "Il est un produit final de la glycolyse.",
        "correct": false,
        "explanation": "Il appartient à la voie des isoprénoïdes."
      }
    ],
    "explanation": "Le squalène C30 est un précurseur isoprénique acyclique de la biosynthèse du cholestérol et des stéroïdes."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la distinction stérol, stéride et stéroïde, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Le cholestérol libre est un stérol.",
        "correct": true,
        "explanation": "Il possède un OH libre en C3."
      },
      {
        "content": "Tout stéroïde est un ester de stérol.",
        "correct": false,
        "explanation": "Le terme stéroïde est bien plus large."
      },
      {
        "content": "Stérol et triacylglycérol sont synonymes.",
        "correct": false,
        "explanation": "Ce sont des classes distinctes."
      },
      {
        "content": "Un stéride est nécessairement une hormone.",
        "correct": false,
        "explanation": "C'est un ester de stérol."
      },
      {
        "content": "Le cholestérol estérifié est plus hydrophobe que le cholestérol libre.",
        "correct": true,
        "explanation": "L'OH libre est masqué."
      }
    ],
    "explanation": "Stéroïde, stérol et stéride ne sont pas synonymes : le cholestérol libre est un stérol et son ester est un stéride.",
    "requiredSelectionCount": 2
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la numérotation du squelette stéroïdien ?",
    "choices": [
      {
        "content": "C3 est la position de l'OH du cholestérol.",
        "correct": true,
        "explanation": "C'est un repère très utilisé."
      },
      {
        "content": "La double liaison du cholestérol se situe entre C1 et C2.",
        "correct": false,
        "explanation": "Elle est C5-C6."
      },
      {
        "content": "La double liaison du cholestérol se situe entre C5 et C6.",
        "correct": true,
        "explanation": "Le cholestérol est un cholest-5-én-3β-ol."
      },
      {
        "content": "C17 porte la chaîne latérale du cholestérol.",
        "correct": true,
        "explanation": "Cette chaîne contribue au total de 27 carbones."
      },
      {
        "content": "La numérotation des carbones suit une convention fixe propre au squelette stéroïdien.",
        "correct": true,
        "explanation": "Elle permet de localiser substituants et doubles liaisons."
      }
    ],
    "explanation": "La numérotation du squelette stéroïdien permet de repérer l'OH C3, la double liaison C5-C6 et la chaîne latérale C17 du cholestérol."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de cycles fusionnés comporte le noyau stéroïdien ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Le squelette stéroïdien de base est tétracyclique : trois cycles à six chaînons et un cycle à cinq chaînons."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nom donne-t-on à l'ester d'un stérol par un acide gras ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "stéride",
        "stéride",
        "ester de stérol",
        "ester de cholestérol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'estérification de l'OH d'un stérol par un acide gras produit un stéride."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les stérides ou esters de stérol ?",
    "choices": [
      {
        "content": "La liaison formée est une liaison peptidique.",
        "correct": false,
        "explanation": "C'est une liaison ester."
      },
      {
        "content": "La liaison formée est une liaison ester.",
        "correct": true,
        "explanation": "Elle unit l'alcool du stérol au carboxyle de l'acide gras."
      },
      {
        "content": "L'estérification augmente la polarité du cholestérol.",
        "correct": false,
        "explanation": "Elle masque son OH et accroît son hydrophobicité."
      },
      {
        "content": "Un stéride contient obligatoirement du glycérol.",
        "correct": false,
        "explanation": "Ce n'est pas requis."
      },
      {
        "content": "Les esters de cholestérol constituent une forme de stockage du cholestérol.",
        "correct": true,
        "explanation": "Ils sont présents dans des gouttelettes lipidiques et le cœur hydrophobe des lipoprotéines."
      }
    ],
    "explanation": "Un stéride est un ester de stérol, particulièrement hydrophobe et adapté au stockage/transport dans un cœur lipidique."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le cholestérol n'est donc pas synthétisé directement à partir d'un acide gras préformé.",
        "correct": true,
        "explanation": "Sa biosynthèse passe par des unités isopréniques."
      },
      {
        "content": "Le cycle D est un cycle à six chaînons.",
        "correct": false,
        "explanation": "Le cycle D est à cinq chaînons."
      },
      {
        "content": "La stéréochimie des jonctions de cycles influence fortement la forme tridimensionnelle.",
        "correct": true,
        "explanation": "Les stéroïdes ne sont pas de simples structures planes."
      },
      {
        "content": "Le squalène est un hydrocarbure isoprénique à 30 carbones.",
        "correct": true,
        "explanation": "Il appartient à la voie de biosynthèse du cholestérol."
      },
      {
        "content": "Tous les stéroïdes ont exactement les mêmes substituants.",
        "correct": false,
        "explanation": "Les substituants différencient les familles."
      },
      {
        "content": "La biosynthèse des stérols ne fait intervenir aucune unité isoprénique.",
        "correct": false,
        "explanation": "Elle en dépend."
      },
      {
        "content": "Le squelette parent comporte 27 carbones.",
        "correct": false,
        "explanation": "Le cholestérol en possède 27 ; le noyau parent est C17."
      },
      {
        "content": "Le squalène est un acide aminé à 30 carbones.",
        "correct": false,
        "explanation": "C'est un hydrocarbure isoprénique."
      },
      {
        "content": "Il comporte quatre cycles fusionnés.",
        "correct": true,
        "explanation": "Le squelette stéroïdien est tétracyclique."
      },
      {
        "content": "La voie du mévalonate fournit les unités isopréniques conduisant au squalène.",
        "correct": true,
        "explanation": "Elle relie acétyl-CoA et biosynthèse des stérols."
      }
    ],
    "explanation": "Le squalène C30 est un précurseur isoprénique acyclique de la biosynthèse du cholestérol et des stéroïdes. Le squelette stéroïdien de base est tétracyclique : trois cycles à six chaînons et un cycle à cinq chaînons."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant la distinction stérol, stéride et stéroïde, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Stérol et triacylglycérol sont synonymes.",
        "correct": false,
        "explanation": "Ce sont des classes distinctes."
      },
      {
        "content": "Tout stéroïde est un ester de stérol.",
        "correct": false,
        "explanation": "Le terme stéroïde est bien plus large."
      },
      {
        "content": "Le cholestérol libre est un stérol.",
        "correct": true,
        "explanation": "Il possède un OH libre en C3."
      },
      {
        "content": "Le cholestérol estérifié est plus hydrophobe que le cholestérol libre.",
        "correct": true,
        "explanation": "L'OH libre est masqué."
      },
      {
        "content": "Un stéride est un ester de stérol.",
        "correct": true,
        "explanation": "Il résulte d'une transformation de la fonction alcool."
      }
    ],
    "explanation": "Stéroïde, stérol et stéride ne sont pas synonymes : le cholestérol libre est un stérol et son ester est un stéride."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Entre quels carbones se trouve la double liaison du cholestérol ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "C5 et C6",
        "5 et 6",
        "C5-C6",
        "entre C5 et C6"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La numérotation du squelette stéroïdien permet de repérer l'OH C3, la double liaison C5-C6 et la chaîne latérale C17 du cholestérol."
  }
];
