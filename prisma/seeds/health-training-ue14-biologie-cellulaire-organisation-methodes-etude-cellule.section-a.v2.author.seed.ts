import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

export const UE14_CELL_CH1_SECTION_A_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de « la définition de la cellule », quelles affirmations sont conformes à la fiche ?",
    "choices": [
      {
        "content": "La cellule est présentée comme la plus petite unité vivante.",
        "correct": true,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "La cellule est décrite comme une structure sans frontière avec le milieu extérieur.",
        "correct": false,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "La cellule est limitée par une membrane séparant l’intérieur de l’extérieur.",
        "correct": true,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "Seuls les organismes pluricellulaires sont constitués de cellules.",
        "correct": false,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      }
    ],
    "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi ces propositions sur « les principaux éléments chimiques cellulaires », laquelle est correcte ?",
    "choices": [
      {
        "content": "L’assemblage de ces atomes contribue à former des macromolécules.",
        "correct": true,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      },
      {
        "content": "Le sodium, le potassium, le calcium et le chlore sont les quatre seuls éléments cités.",
        "correct": false,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      },
      {
        "content": "Les macromolécules ne contiennent aucun des quatre éléments principaux.",
        "correct": false,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      },
      {
        "content": "L’hélium remplace l’hydrogène parmi les quatre éléments principaux de la fiche.",
        "correct": false,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      }
    ],
    "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Réponse numérique : quel pourcentage de la cellule est attribué à l’eau dans la fiche ?",
    "answer": {
      "type": "number",
      "value": 70,
      "tolerance": 0
    },
    "explanation": "Le repère local est environ 70 % d’eau."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Selon le support, quelle affirmation concernant « les proportions de macromolécules indiquées dans la fiche » est juste ?",
    "choices": [
      {
        "content": "La fiche cite environ 15 % de protéines.",
        "correct": true,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      },
      {
        "content": "La fiche cite 50 % d’ADN.",
        "correct": false,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      },
      {
        "content": "Les protéines sont données à 1 % et l’ADN à 15 %.",
        "correct": false,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      },
      {
        "content": "La fiche donne 20 % de lipides et 20 % de sucres.",
        "correct": false,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      }
    ],
    "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « les grandes structures cellulaires » ?",
    "choices": [
      {
        "content": "Elle cite centrosomes, appareil de Golgi, REL, RER, lysosomes et mitochondries.",
        "correct": true,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      },
      {
        "content": "Les mitochondries sont présentées comme des structures extracellulaires.",
        "correct": false,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      },
      {
        "content": "Elle cite le noyau parmi les grandes structures cellulaires.",
        "correct": true,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      },
      {
        "content": "Le noyau est décrit comme absent de toute cellule eucaryote.",
        "correct": false,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      }
    ],
    "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle donnée est correcte concernant « les fonctions générales de la cellule » ?",
    "choices": [
      {
        "content": "Réponse aux stimuli, communication et transport intracellulaire sont également cités.",
        "correct": true,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "La cellule ne transporte aucune molécule en son sein.",
        "correct": false,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "La fiche limite les fonctions cellulaires à la seule production d’ADN.",
        "correct": false,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "La communication cellulaire est explicitement exclue.",
        "correct": false,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      }
    ],
    "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Selon la fiche, quelles propositions concernant « les étapes de la vie cellulaire citées » sont correctes ?",
    "choices": [
      {
        "content": "La croissance et la division sont citées.",
        "correct": true,
        "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
      },
      {
        "content": "La fiche ne cite que la division et exclut la différenciation.",
        "correct": false,
        "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
      },
      {
        "content": "La différenciation et la migration sont citées.",
        "correct": true,
        "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
      },
      {
        "content": "La migration est décrite comme impossible pour toute cellule.",
        "correct": false,
        "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
      }
    ],
    "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de « l’hématie et l’entérocyte comme exemples de spécialisation », quelle proposition est juste ?",
    "choices": [
      {
        "content": "L’entérocyte possède un pôle apical bordé de microvillosités.",
        "correct": true,
        "explanation": "La morphologie cellulaire est reliée à la fonction ; l’entérocyte est l’exemple d’une cellule absorbante."
      },
      {
        "content": "L’entérocyte est présenté comme une cellule circulante du sang.",
        "correct": false,
        "explanation": "La morphologie cellulaire est reliée à la fonction ; l’entérocyte est l’exemple d’une cellule absorbante."
      },
      {
        "content": "Les microvillosités diminuent l’absorption des nutriments.",
        "correct": false,
        "explanation": "La morphologie cellulaire est reliée à la fonction ; l’entérocyte est l’exemple d’une cellule absorbante."
      },
      {
        "content": "La fiche attribue les microvillosités intestinales à l’hématie.",
        "correct": false,
        "explanation": "La morphologie cellulaire est reliée à la fonction ; l’entérocyte est l’exemple d’une cellule absorbante."
      }
    ],
    "explanation": "La morphologie cellulaire est reliée à la fonction ; l’entérocyte est l’exemple d’une cellule absorbante."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Au sujet de « la définition de la cellule », quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Les êtres pluricellulaires comportent plusieurs types cellulaires organisés en tissus.",
        "correct": true,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "Un tissu est constitué d’un unique type de macromolécule.",
        "correct": false,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "La cellule est présentée comme la plus petite unité vivante.",
        "correct": true,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "La cellule est décrite comme une structure sans frontière avec le milieu extérieur.",
        "correct": false,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      }
    ],
    "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les énoncés suivants, lequel est exact pour « les principaux éléments chimiques cellulaires » ?",
    "choices": [
      {
        "content": "Les quatre éléments principaux cités sont le carbone, l’hydrogène, l’oxygène et l’azote.",
        "correct": true,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      },
      {
        "content": "L’hélium remplace l’hydrogène parmi les quatre éléments principaux de la fiche.",
        "correct": false,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      },
      {
        "content": "Le sodium, le potassium, le calcium et le chlore sont les quatre seuls éléments cités.",
        "correct": false,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      },
      {
        "content": "Les macromolécules ne contiennent aucun des quatre éléments principaux.",
        "correct": false,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      }
    ],
    "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une situation d’application concernant « la proportion d’eau dans la cellule selon la fiche », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fraction non aqueuse est présentée autour de 30 %.",
        "correct": true,
        "explanation": "Le repère local est environ 70 % d’eau."
      },
      {
        "content": "L’eau représente moins de 5 % de la cellule.",
        "correct": false,
        "explanation": "Le repère local est environ 70 % d’eau."
      },
      {
        "content": "L’eau représente la fraction majoritaire dans le schéma de composition.",
        "correct": true,
        "explanation": "Le repère local est environ 70 % d’eau."
      },
      {
        "content": "La fiche affirme que la cellule ne contient pas d’eau.",
        "correct": false,
        "explanation": "Le repère local est environ 70 % d’eau."
      }
    ],
    "explanation": "Le repère local est environ 70 % d’eau."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte concernant « les proportions de macromolécules indiquées dans la fiche » ?",
    "choices": [
      {
        "content": "Elle cite environ 1 % d’ADN.",
        "correct": true,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      },
      {
        "content": "La fiche donne 20 % de lipides et 20 % de sucres.",
        "correct": false,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      },
      {
        "content": "La fiche cite 50 % d’ADN.",
        "correct": false,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      },
      {
        "content": "Les protéines sont données à 1 % et l’ADN à 15 %.",
        "correct": false,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      }
    ],
    "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour appliquer les notions sur « les grandes structures cellulaires », quelles propositions faut-il retenir ?",
    "choices": [
      {
        "content": "La fiche cite membrane, cytoplasme et cytosquelette.",
        "correct": true,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      },
      {
        "content": "La fiche exclut le cytosquelette de la cellule.",
        "correct": false,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      },
      {
        "content": "Elle cite centrosomes, appareil de Golgi, REL, RER, lysosomes et mitochondries.",
        "correct": true,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      },
      {
        "content": "Les mitochondries sont présentées comme des structures extracellulaires.",
        "correct": false,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      }
    ],
    "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi ces propositions sur « les fonctions générales de la cellule », laquelle est correcte ?",
    "choices": [
      {
        "content": "La production d’énergie et les échanges avec l’extérieur sont cités.",
        "correct": true,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "La communication cellulaire est explicitement exclue.",
        "correct": false,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "La cellule ne transporte aucune molécule en son sein.",
        "correct": false,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "La fiche limite les fonctions cellulaires à la seule production d’ADN.",
        "correct": false,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      }
    ],
    "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels repères sur « les étapes de la vie cellulaire citées » sont utiles dans une situation d’application ?",
    "choices": [
      {
        "content": "La mort cellulaire figure parmi les étapes listées.",
        "correct": true,
        "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
      },
      {
        "content": "La mort cellulaire est exclue de la vie des tissus.",
        "correct": false,
        "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
      },
      {
        "content": "La croissance et la division sont citées.",
        "correct": true,
        "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
      },
      {
        "content": "La fiche ne cite que la division et exclut la différenciation.",
        "correct": false,
        "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
      }
    ],
    "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Application — Quels sont, sous forme de symboles séparés par des virgules, les quatre éléments principaux cités dans la fiche ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "C,H,O,N",
        "C, H, O, N",
        "CHON",
        "C H O N"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Application raisonnée de « la définition de la cellule » : quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "La cellule est limitée par une membrane séparant l’intérieur de l’extérieur.",
        "correct": true,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "Seuls les organismes pluricellulaires sont constitués de cellules.",
        "correct": false,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "Les êtres pluricellulaires comportent plusieurs types cellulaires organisés en tissus.",
        "correct": true,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "Un tissu est constitué d’un unique type de macromolécule.",
        "correct": false,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      }
    ],
    "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle donnée est correcte concernant « les principaux éléments chimiques cellulaires » ?",
    "choices": [
      {
        "content": "La fiche abrège implicitement ce quatuor par les éléments C, H, O et N.",
        "correct": true,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      },
      {
        "content": "Les macromolécules ne contiennent aucun des quatre éléments principaux.",
        "correct": false,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      },
      {
        "content": "L’hélium remplace l’hydrogène parmi les quatre éléments principaux de la fiche.",
        "correct": false,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      },
      {
        "content": "Le sodium, le potassium, le calcium et le chlore sont les quatre seuls éléments cités.",
        "correct": false,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      }
    ],
    "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Application transversale autour de « la définition de la cellule » — sélectionnez exactement les trois affirmations correctes.",
    "requiredSelectionCount": 3,
    "choices": [
      {
        "content": "La cellule est présentée comme la plus petite unité vivante.",
        "correct": true,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "L’assemblage de ces atomes contribue à former des macromolécules.",
        "correct": true,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      },
      {
        "content": "L’eau représente la fraction majoritaire dans le schéma de composition.",
        "correct": true,
        "explanation": "Le repère local est environ 70 % d’eau."
      },
      {
        "content": "La fiche cite 50 % d’ADN.",
        "correct": false,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      },
      {
        "content": "Les mitochondries sont présentées comme des structures extracellulaires.",
        "correct": false,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      },
      {
        "content": "La cellule ne transporte aucune molécule en son sein.",
        "correct": false,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      }
    ],
    "explanation": "Cette question croise plusieurs repères de la section."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de « les proportions de macromolécules indiquées dans la fiche », quelle proposition est juste ?",
    "choices": [
      {
        "content": "Elle cite environ 2 % de lipides et 2 % de sucres.",
        "correct": true,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      },
      {
        "content": "Les protéines sont données à 1 % et l’ADN à 15 %.",
        "correct": false,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      },
      {
        "content": "La fiche donne 20 % de lipides et 20 % de sucres.",
        "correct": false,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      },
      {
        "content": "La fiche cite 50 % d’ADN.",
        "correct": false,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      }
    ],
    "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Mise en application de « les grandes structures cellulaires » : quelles affirmations sont justes ?",
    "choices": [
      {
        "content": "Elle cite le noyau parmi les grandes structures cellulaires.",
        "correct": true,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      },
      {
        "content": "Le noyau est décrit comme absent de toute cellule eucaryote.",
        "correct": false,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      },
      {
        "content": "La fiche cite membrane, cytoplasme et cytosquelette.",
        "correct": true,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      },
      {
        "content": "La fiche exclut le cytosquelette de la cellule.",
        "correct": false,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      }
    ],
    "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Consolidation — « la définition de la cellule » : sélectionnez exactement les cinq affirmations correctes.",
    "requiredSelectionCount": 5,
    "choices": [
      {
        "content": "La fiche cite environ 15 % de protéines.",
        "correct": true,
        "explanation": "Les valeurs 15 % protéines, 2 % lipides, 2 % sucres et 1 % ADN sont des repères propres à la fiche."
      },
      {
        "content": "Elle cite centrosomes, appareil de Golgi, REL, RER, lysosomes et mitochondries.",
        "correct": true,
        "explanation": "La fiche dresse un panorama introductif des grands compartiments et structures."
      },
      {
        "content": "Réponse aux stimuli, communication et transport intracellulaire sont également cités.",
        "correct": true,
        "explanation": "Le support présente plusieurs fonctions générales nécessaires à la vie cellulaire."
      },
      {
        "content": "La croissance et la division sont citées.",
        "correct": true,
        "explanation": "La fiche relie les fonctions cellulaires à croissance, division, différenciation, migration et mort."
      },
      {
        "content": "L’entérocyte possède un pôle apical bordé de microvillosités.",
        "correct": true,
        "explanation": "La morphologie cellulaire est reliée à la fonction ; l’entérocyte est l’exemple d’une cellule absorbante."
      },
      {
        "content": "Un tissu est constitué d’un unique type de macromolécule.",
        "correct": false,
        "explanation": "La fiche définit la cellule comme la plus petite unité vivante, délimitée par une membrane."
      },
      {
        "content": "L’hélium remplace l’hydrogène parmi les quatre éléments principaux de la fiche.",
        "correct": false,
        "explanation": "Le support cite C, H, O et N comme composants chimiques principaux."
      },
      {
        "content": "L’eau représente moins de 5 % de la cellule.",
        "correct": false,
        "explanation": "Le repère local est environ 70 % d’eau."
      }
    ],
    "explanation": "La sélection longue vérifie plusieurs notions de la section simultanément."
  }
];
