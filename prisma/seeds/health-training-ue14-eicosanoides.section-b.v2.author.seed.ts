import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Les eicosanoïdes — Section B — Structure et nomenclature des prostanoïdes */
export const UE14_BIOCH_CH5_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le squelette prostanoïde de référence, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il comporte 20 carbones.",
        "correct": true,
        "explanation": "Il dérive d'un squelette eicosanoïde."
      },
      {
        "content": "Il ne comporte que dix carbones.",
        "correct": false,
        "explanation": "Il en comporte vingt."
      },
      {
        "content": "Il contient un cycle à cinq chaînons dans la famille des prostaglandines classiques.",
        "correct": true,
        "explanation": "Le cycle cyclopentane constitue un repère structural."
      },
      {
        "content": "Le squelette prostanoïde est un cycle benzénique C6 sans chaîne latérale.",
        "correct": false,
        "explanation": "Il est différent."
      },
      {
        "content": "L'acide prostanoïque est le principal thromboxane circulant.",
        "correct": false,
        "explanation": "C'est un squelette de référence."
      }
    ],
    "explanation": "Le squelette prostanoïde est un repère C20 comportant un cycle à cinq chaînons et deux chaînes latérales."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos des lettres des prostaglandines, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Les lettres A, B, C, D, E ou F distinguent des motifs d'oxygénation du cycle.",
        "correct": true,
        "explanation": "Elles définissent des groupes structuraux."
      },
      {
        "content": "La lettre E signifie que la molécule possède cinq carbones.",
        "correct": false,
        "explanation": "La lettre décrit un groupe structural."
      },
      {
        "content": "Toutes les lettres correspondent au nombre de doubles liaisons.",
        "correct": false,
        "explanation": "Le chiffre de série porte cette information."
      },
      {
        "content": "La lettre F signifie automatiquement série 2.",
        "correct": false,
        "explanation": "La série est donnée par le chiffre."
      },
      {
        "content": "PGE2 est un leucotriène.",
        "correct": false,
        "explanation": "C'est une prostaglandine."
      }
    ],
    "explanation": "La lettre des prostaglandines distingue le motif structural du cycle ; le chiffre indique la série."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel acide gras C20 n-3 est le précurseur classique des prostanoïdes de série 3 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "EPA",
        "acide eicosapentaénoïque",
        "acide eicosapentaenoique",
        "20:5 n-3"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les séries 1, 2 et 3 dépendent du précurseur C20 et du nombre de doubles liaisons latérales conservées."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant PGE2, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "PGE2 est obligatoirement un médiateur antiagrégant plaquettaire majeur équivalent à PGI2.",
        "correct": false,
        "explanation": "PGI2 est le repère antiagrégant vasculaire majeur."
      },
      {
        "content": "Sa structure et ses effets ne se résument pas à ceux de PGF2α.",
        "correct": true,
        "explanation": "Des prostaglandines proches peuvent avoir des actions différentes."
      },
      {
        "content": "Elle participe à plusieurs réponses inflammatoires et physiologiques.",
        "correct": true,
        "explanation": "Ses effets dépendent des récepteurs EP engagés."
      },
      {
        "content": "PGE2 est un thromboxane.",
        "correct": false,
        "explanation": "C'est une prostaglandine."
      },
      {
        "content": "Elle appartient à la série 2.",
        "correct": true,
        "explanation": "Elle dérive classiquement de l'acide arachidonique."
      }
    ],
    "explanation": "PGE2 est une prostaglandine du groupe E, de série 2, issue de la voie COX."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de PGI2 ou prostacycline, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Elle inhibe l'agrégation plaquettaire.",
        "correct": true,
        "explanation": "Elle s'oppose fonctionnellement au TXA2."
      },
      {
        "content": "PGI2 est un leucotriène.",
        "correct": false,
        "explanation": "C'est un prostanoïde."
      },
      {
        "content": "PGI2 est principalement proagrégante.",
        "correct": false,
        "explanation": "Elle est antiagrégante."
      },
      {
        "content": "Elle est produite uniquement par les plaquettes.",
        "correct": false,
        "explanation": "L'endothélium en est une source majeure."
      },
      {
        "content": "Dans PGI2, I signifie que la molécule appartient à la série 1.",
        "correct": false,
        "explanation": "La série est indiquée par le chiffre 2."
      }
    ],
    "explanation": "PGI2 est la prostacycline endothéliale vasodilatatrice et antiagrégante de série 2."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur TXA2, sélectionnez exactement les deux exactes.",
    "choices": [
      {
        "content": "TXA2 est principalement produit par l'endothélium pour vasodilater.",
        "correct": false,
        "explanation": "Ce rôle correspond à PGI2."
      },
      {
        "content": "Il est produit notamment par les plaquettes activées.",
        "correct": true,
        "explanation": "Les plaquettes disposent de la thromboxane synthase."
      },
      {
        "content": "Il favorise l'agrégation plaquettaire.",
        "correct": true,
        "explanation": "C'est un signal proagrégant."
      },
      {
        "content": "TXA2 est un glucide de stockage.",
        "correct": false,
        "explanation": "C'est un médiateur lipidique."
      },
      {
        "content": "TXA2 est antiagrégant plaquettaire.",
        "correct": false,
        "explanation": "Il est proagrégant."
      }
    ],
    "explanation": "TXA2 est le prostanoïde plaquettaire proagrégant et vasoconstricteur du couple antagoniste TXA2/PGI2.",
    "requiredSelectionCount": 2
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant PGF2alpha, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "PGF2α appartient au groupe F des prostaglandines.",
        "correct": true,
        "explanation": "La lettre F décrit le motif du cycle."
      },
      {
        "content": "Le symbole α décrit une orientation stéréochimique d'un substituant.",
        "correct": true,
        "explanation": "Il ne représente pas la série."
      },
      {
        "content": "Elle peut contracter certains muscles lisses.",
        "correct": true,
        "explanation": "Elle peut notamment favoriser des contractions utérines et bronchiques selon le contexte."
      },
      {
        "content": "PGF2α est toujours vasodilatatrice et antiagrégante comme PGI2.",
        "correct": false,
        "explanation": "Les effets sont différents."
      },
      {
        "content": "Elle peut avoir des effets différents de PGE2 malgré une structure proche.",
        "correct": true,
        "explanation": "Les effets dépendent des récepteurs."
      }
    ],
    "explanation": "Dans le nom d'une prostaglandine, la lettre décrit le groupe, le chiffre la série et α/β une orientation stéréochimique."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans PGI2, quelle partie du nom indique la série ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "2",
        "indice 2",
        "le chiffre 2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La nomenclature des prostanoïdes doit être lue en séparant famille, groupe structural et série."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur le squelette prostanoïde de référence, laquelle est exacte ?",
    "choices": [
      {
        "content": "Toutes les prostaglandines sont dépourvues de cycle.",
        "correct": false,
        "explanation": "Le cycle est caractéristique des prostaglandines classiques."
      },
      {
        "content": "Il contient un cycle à cinq chaînons dans la famille des prostaglandines classiques.",
        "correct": true,
        "explanation": "Le cycle cyclopentane constitue un repère structural."
      },
      {
        "content": "L'acide prostanoïque est le principal thromboxane circulant.",
        "correct": false,
        "explanation": "C'est un squelette de référence."
      },
      {
        "content": "Le squelette prostanoïde est un cycle benzénique C6 sans chaîne latérale.",
        "correct": false,
        "explanation": "Il est différent."
      },
      {
        "content": "Il ne comporte que dix carbones.",
        "correct": false,
        "explanation": "Il en comporte vingt."
      }
    ],
    "explanation": "Le squelette prostanoïde est un repère C20 comportant un cycle à cinq chaînons et deux chaînes latérales."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les lettres des prostaglandines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La lettre ne donne pas le nombre total de carbones.",
        "correct": true,
        "explanation": "Le squelette reste C20."
      },
      {
        "content": "PGE2 est un leucotriène.",
        "correct": false,
        "explanation": "C'est une prostaglandine."
      },
      {
        "content": "Toutes les lettres correspondent au nombre de doubles liaisons.",
        "correct": false,
        "explanation": "Le chiffre de série porte cette information."
      },
      {
        "content": "La lettre F signifie automatiquement série 2.",
        "correct": false,
        "explanation": "La série est donnée par le chiffre."
      },
      {
        "content": "PGE2 appartient au groupe E.",
        "correct": true,
        "explanation": "La lettre E décrit le motif du cycle."
      }
    ],
    "explanation": "La lettre des prostaglandines distingue le motif structural du cycle ; le chiffre indique la série."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le squelette prostanoïde de référence, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il ne comporte que dix carbones.",
        "correct": false,
        "explanation": "Il en comporte vingt."
      },
      {
        "content": "Il contient un cycle à cinq chaînons dans la famille des prostaglandines classiques.",
        "correct": true,
        "explanation": "Le cycle cyclopentane constitue un repère structural."
      },
      {
        "content": "Toutes les prostaglandines sont dépourvues de cycle.",
        "correct": false,
        "explanation": "Le cycle est caractéristique des prostaglandines classiques."
      },
      {
        "content": "Le squelette prostanoïde est un cycle benzénique C6 sans chaîne latérale.",
        "correct": false,
        "explanation": "Il est différent."
      },
      {
        "content": "Il comporte 20 carbones.",
        "correct": true,
        "explanation": "Il dérive d'un squelette eicosanoïde."
      }
    ],
    "explanation": "Le squelette prostanoïde est un repère C20 comportant un cycle à cinq chaînons et deux chaînes latérales."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans le nom PGE2, que désigne principalement la lettre E ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "groupe structural",
        "type de substituants du cycle",
        "motif d'oxygénation du cycle",
        "groupe E"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La lettre des prostaglandines distingue le motif structural du cycle ; le chiffre indique la série."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur les séries 1, 2 et 3 des prostanoïdes, laquelle est exacte ?",
    "choices": [
      {
        "content": "La série 3 dérive directement de l'alpha-linolénique sans conversion en acide gras C20.",
        "correct": false,
        "explanation": "Le précurseur prostanoïde pertinent est l'EPA."
      },
      {
        "content": "La série 2 correspond à deux atomes d'oxygène.",
        "correct": false,
        "explanation": "Elle correspond au nombre de doubles liaisons latérales."
      },
      {
        "content": "Il existe obligatoirement une série 5 pour toute prostaglandine à cinq oxygènes.",
        "correct": false,
        "explanation": "Le chiffre ne compte pas les oxygènes."
      },
      {
        "content": "La série 1 dérive directement de l'acide linoléique sans étape métabolique intermédiaire.",
        "correct": false,
        "explanation": "Le précurseur prostanoïde C20 est le DGLA."
      },
      {
        "content": "Le chiffre de série reflète le nombre de doubles liaisons conservées dans les chaînes latérales du prostanoïde.",
        "correct": true,
        "explanation": "Une série 2 présente deux doubles liaisons latérales."
      }
    ],
    "explanation": "Les séries 1, 2 et 3 dépendent du précurseur C20 et du nombre de doubles liaisons latérales conservées."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide gras C20 n-6 est le précurseur classique des prostanoïdes de série 1 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide dihomo-gamma-linolénique",
        "dihomo-gamma-linolénique",
        "DGLA",
        "20:3 n-6",
        "acide dihomo gamma linolenique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le précurseur pertinent des prostanoïdes de série 1 est le DGLA 20:3 n-6, et non directement l'acide linoléique 18:2 n-6."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide gras C20 n-3 est le précurseur classique des prostanoïdes de série 3 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "EPA",
        "acide eicosapentaénoïque",
        "acide eicosapentaenoique",
        "20:5 n-3"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le précurseur pertinent des prostanoïdes de série 3 est l'EPA 20:5 n-3, et non directement l'alpha-linolénique 18:3 n-3."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur TXA2, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Il favorise l'agrégation plaquettaire.",
        "correct": true,
        "explanation": "C'est un signal proagrégant."
      },
      {
        "content": "Il exerce un effet vasoconstricteur.",
        "correct": true,
        "explanation": "Il s'oppose localement à PGI2."
      },
      {
        "content": "Il est produit notamment par les plaquettes activées.",
        "correct": true,
        "explanation": "Les plaquettes disposent de la thromboxane synthase."
      },
      {
        "content": "TXA2 est un thromboxane de série 2.",
        "correct": true,
        "explanation": "Il dérive de la voie COX à partir de l'acide arachidonique."
      },
      {
        "content": "TXA2 est un glucide de stockage.",
        "correct": false,
        "explanation": "C'est un médiateur lipidique."
      }
    ],
    "explanation": "TXA2 est le prostanoïde plaquettaire proagrégant et vasoconstricteur du couple antagoniste TXA2/PGI2."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Que décrit le symbole α dans PGF2α ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "orientation stéréochimique",
        "orientation du groupement hydroxyle",
        "stéréochimie",
        "orientation par rapport au plan du cycle"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Dans le nom d'une prostaglandine, la lettre décrit le groupe, le chiffre la série et α/β une orientation stéréochimique."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de la lecture combinée du nom d'un prostanoïde, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Une lecture correcte sépare famille, groupe et série.",
        "correct": true,
        "explanation": "Ces éléments ne sont pas interchangeables."
      },
      {
        "content": "La nomenclature ne contient aucune information structurale.",
        "correct": false,
        "explanation": "Elle encode plusieurs informations."
      },
      {
        "content": "Le 2 de PGE2 signifie que la molécule contient deux carbones.",
        "correct": false,
        "explanation": "Le squelette est C20."
      },
      {
        "content": "TXA2 est une prostaglandine du groupe E.",
        "correct": false,
        "explanation": "C'est un thromboxane."
      },
      {
        "content": "Le I de PGI2 est le chiffre romain un indiquant la série 1.",
        "correct": false,
        "explanation": "C'est la lettre I."
      }
    ],
    "explanation": "La nomenclature des prostanoïdes doit être lue en séparant famille, groupe structural et série."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur le squelette prostanoïde de référence, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Toutes les prostaglandines sont dépourvues de cycle.",
        "correct": false,
        "explanation": "Le cycle est caractéristique des prostaglandines classiques."
      },
      {
        "content": "Il contient un cycle à cinq chaînons dans la famille des prostaglandines classiques.",
        "correct": true,
        "explanation": "Le cycle cyclopentane constitue un repère structural."
      },
      {
        "content": "Le squelette prostanoïde est un cycle benzénique C6 sans chaîne latérale.",
        "correct": false,
        "explanation": "Il est différent."
      },
      {
        "content": "Deux chaînes latérales prolongent le cycle.",
        "correct": true,
        "explanation": "Elles portent une partie des doubles liaisons de série."
      },
      {
        "content": "Il ne comporte que dix carbones.",
        "correct": false,
        "explanation": "Il en comporte vingt."
      }
    ],
    "explanation": "Le squelette prostanoïde est un repère C20 comportant un cycle à cinq chaînons et deux chaînes latérales."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La lettre F signifie automatiquement série 2.",
        "correct": false,
        "explanation": "La série est donnée par le chiffre."
      },
      {
        "content": "Les lettres A, B, C, D, E ou F distinguent des motifs d'oxygénation du cycle.",
        "correct": true,
        "explanation": "Elles définissent des groupes structuraux."
      },
      {
        "content": "Elle inhibe l'agrégation plaquettaire.",
        "correct": true,
        "explanation": "Elle s'oppose fonctionnellement au TXA2."
      },
      {
        "content": "PGI2 est un leucotriène.",
        "correct": false,
        "explanation": "C'est un prostanoïde."
      },
      {
        "content": "Elle est produite uniquement par les plaquettes.",
        "correct": false,
        "explanation": "L'endothélium en est une source majeure."
      },
      {
        "content": "PGE2 est un leucotriène.",
        "correct": false,
        "explanation": "C'est une prostaglandine."
      },
      {
        "content": "La lettre ne donne pas le nombre total de carbones.",
        "correct": true,
        "explanation": "Le squelette reste C20."
      },
      {
        "content": "PGI2 est la prostacycline de série 2.",
        "correct": true,
        "explanation": "La lettre I est une lettre de groupe et non le chiffre 1."
      },
      {
        "content": "PGF2α appartient au groupe F.",
        "correct": true,
        "explanation": "La lettre F décrit un autre motif du cycle."
      },
      {
        "content": "Dans PGI2, I signifie que la molécule appartient à la série 1.",
        "correct": false,
        "explanation": "La série est indiquée par le chiffre 2."
      }
    ],
    "explanation": "La lettre des prostaglandines distingue le motif structural du cycle ; le chiffre indique la série. PGI2 est la prostacycline endothéliale vasodilatatrice et antiagrégante de série 2."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des séries 1, 2 et 3 des prostanoïdes, quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "Les prostanoïdes de série 3 peuvent dériver de l'EPA.",
        "correct": true,
        "explanation": "EPA 20:5 n-3 est leur précurseur pertinent."
      },
      {
        "content": "Il existe obligatoirement une série 5 pour toute prostaglandine à cinq oxygènes.",
        "correct": false,
        "explanation": "Le chiffre ne compte pas les oxygènes."
      },
      {
        "content": "Les prostanoïdes de série 2 dérivent classiquement de l'acide arachidonique.",
        "correct": true,
        "explanation": "C'est la série majeure issue du 20:4 n-6."
      },
      {
        "content": "Les prostanoïdes de série 1 peuvent dériver du dihomo-gamma-linolénique.",
        "correct": true,
        "explanation": "DGLA 20:3 n-6 est leur précurseur pertinent."
      },
      {
        "content": "La série 2 correspond à deux atomes d'oxygène.",
        "correct": false,
        "explanation": "Elle correspond au nombre de doubles liaisons latérales."
      }
    ],
    "explanation": "Les séries 1, 2 et 3 dépendent du précurseur C20 et du nombre de doubles liaisons latérales conservées."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À quelle série appartient PGE2 ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "PGE2 est une prostaglandine du groupe E, de série 2, issue de la voie COX."
  }
];
