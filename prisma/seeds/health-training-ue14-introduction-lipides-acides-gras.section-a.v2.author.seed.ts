import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Chapitre 2.1–2.2 — Lipides et acides gras — Section A — Définitions, structure et numérotation */
export const UE14_BIOCH_CH4_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la définition biochimique générale des lipides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Tous les lipides ont exactement la même structure chimique.",
        "correct": false,
        "explanation": "Le groupe est chimiquement très divers."
      },
      {
        "content": "Les lipides constituent un ensemble chimiquement hétérogène.",
        "correct": true,
        "explanation": "Ils ne partagent pas une structure covalente unique."
      },
      {
        "content": "Une faible solubilité dans l'eau est un caractère fréquent des lipides.",
        "correct": true,
        "explanation": "Leur portion hydrocarbonée importante interagit peu avec l'eau."
      },
      {
        "content": "Les lipides sont tous des polymères d'acides aminés.",
        "correct": false,
        "explanation": "Cela décrit les protéines."
      },
      {
        "content": "Tous les lipides sont très solubles dans l'eau.",
        "correct": false,
        "explanation": "Beaucoup sont peu solubles ou insolubles."
      }
    ],
    "explanation": "Les lipides forment un ensemble chimique hétérogène souvent caractérisé par une faible solubilité dans l'eau."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos d'une classification simplifiée des lipides, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Une classification simplifiée implique que toutes les familles ont la même structure.",
        "correct": false,
        "explanation": "Elle sert seulement à organiser des familles distinctes."
      },
      {
        "content": "Les glycérides sont construits à partir de glycérol et d'acides gras.",
        "correct": true,
        "explanation": "Ils seront étudiés séparément."
      },
      {
        "content": "Les glycérides ne contiennent jamais d'acides gras.",
        "correct": false,
        "explanation": "Ils sont formés par estérification du glycérol par des acides gras."
      },
      {
        "content": "Les sphingolipides sont des acides aminés libres.",
        "correct": false,
        "explanation": "Ils sont des lipides complexes."
      },
      {
        "content": "Les phospholipides sont des glucides simples.",
        "correct": false,
        "explanation": "Ils appartiennent aux lipides."
      }
    ],
    "explanation": "Une classification introductive distingue plusieurs familles lipidiques sans leur attribuer une structure chimique unique."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle fonction organique caractérise la tête polaire d'un acide gras ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide carboxylique",
        "fonction carboxylique",
        "carboxyle",
        "COOH"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un acide gras associe une fonction carboxylique polaire à une chaîne hydrocarbonée hydrophobe."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le caractère amphiphile des acides gras, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Tous les acides gras ont exactement la même solubilité dans l'eau.",
        "correct": false,
        "explanation": "La longueur et l'ionisation la modifient."
      },
      {
        "content": "La chaîne hydrocarbonée est hydrophobe.",
        "correct": true,
        "explanation": "Sa longueur réduit globalement la solubilité aqueuse."
      },
      {
        "content": "La tête carboxylique est hydrophile par rapport à la chaîne hydrocarbonée.",
        "correct": true,
        "explanation": "Elle interagit davantage avec l'eau."
      },
      {
        "content": "Un acide gras ionisé possède une tête carboxylate chargée.",
        "correct": true,
        "explanation": "Cette ionisation augmente le caractère hydrophile de la tête."
      },
      {
        "content": "L'état d'ionisation n'a jamais d'influence sur le comportement aqueux.",
        "correct": false,
        "explanation": "Le carboxylate est plus hydrophile que COOH."
      }
    ],
    "explanation": "Les acides gras possèdent une tête polaire et une queue hydrophobe ; leur comportement dépend aussi de l'ionisation."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos des critères de classification des acides gras, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "La couleur en solution est le critère principal.",
        "correct": false,
        "explanation": "Elle n'est pas utilisée pour classer les acides gras."
      },
      {
        "content": "La longueur de chaîne est sans intérêt.",
        "correct": false,
        "explanation": "Elle influence classification et propriétés."
      },
      {
        "content": "Le nombre d'atomes d'azote définit saturation et insaturation.",
        "correct": false,
        "explanation": "Ce sont les doubles liaisons C=C qui comptent."
      },
      {
        "content": "Un acide gras saturé possède nécessairement une double liaison trans.",
        "correct": false,
        "explanation": "Il ne possède aucune double liaison C=C."
      },
      {
        "content": "La position des doubles liaisons précise la structure d'un acide gras insaturé.",
        "correct": true,
        "explanation": "Elle est indiquée notamment par la notation Δ."
      }
    ],
    "explanation": "La longueur de chaîne et le degré d'insaturation sont deux axes majeurs de classification."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur la numérotation depuis le carboxyle, sélectionnez exactement les deux exactes.",
    "choices": [
      {
        "content": "Le carbone du groupement carboxyle est C1.",
        "correct": true,
        "explanation": "La numérotation systématique part de l'extrémité la plus oxydée."
      },
      {
        "content": "Le carbone alpha est C1.",
        "correct": false,
        "explanation": "Le carbone alpha est C2."
      },
      {
        "content": "La numérotation systématique commence au carbone terminal méthyle.",
        "correct": false,
        "explanation": "Elle commence au carboxyle."
      },
      {
        "content": "Une position Δ9 désigne une double liaison débutant au carbone 9 depuis le carboxyle.",
        "correct": true,
        "explanation": "Elle se situe entre C9 et C10."
      },
      {
        "content": "Δ9 signifie que la chaîne contient exactement neuf carbones.",
        "correct": false,
        "explanation": "La valeur indique une position de double liaison."
      }
    ],
    "explanation": "Le carbone carboxylique est C1 ; le carbone adjacent est C2 et correspond au carbone alpha.",
    "requiredSelectionCount": 2
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la nomenclature alpha et oméga, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone alpha est le dernier carbone de la chaîne.",
        "correct": false,
        "explanation": "Il est adjacent au carboxyle."
      },
      {
        "content": "Les repères alpha et oméga peuvent compléter la numérotation systématique.",
        "correct": true,
        "explanation": "Ils décrivent la même chaîne depuis des conventions différentes."
      },
      {
        "content": "La série n-3 ou oméga-3 se compte depuis l'extrémité méthyle.",
        "correct": true,
        "explanation": "Elle repère la première double liaison depuis cette extrémité."
      },
      {
        "content": "Le carbone alpha est adjacent au carbone carboxylique.",
        "correct": true,
        "explanation": "Il correspond au C2 systématique."
      },
      {
        "content": "Le carbone oméga est le carbone terminal méthyle.",
        "correct": true,
        "explanation": "Il est à l'extrémité opposée au carboxyle."
      }
    ],
    "explanation": "Le carbone alpha est C2 près du carboxyle ; le carbone oméga est le carbone méthyle terminal."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Que signifie le « 0 » dans la notation 18:0 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "aucune double liaison",
        "0 double liaison",
        "zéro double liaison",
        "acide gras saturé"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La notation C:D indique le nombre de carbones puis le nombre de doubles liaisons."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la définition biochimique générale des lipides, laquelle est exacte ?",
    "choices": [
      {
        "content": "Le terme lipide désigne uniquement les triglycérides.",
        "correct": false,
        "explanation": "Il englobe de nombreuses familles."
      },
      {
        "content": "Les lipides sont tous des polymères d'acides aminés.",
        "correct": false,
        "explanation": "Cela décrit les protéines."
      },
      {
        "content": "Tous les lipides ont exactement la même structure chimique.",
        "correct": false,
        "explanation": "Le groupe est chimiquement très divers."
      },
      {
        "content": "Tous les lipides sont très solubles dans l'eau.",
        "correct": false,
        "explanation": "Beaucoup sont peu solubles ou insolubles."
      },
      {
        "content": "Graisses, huiles, cires et stéroïdes appartiennent à des familles lipidiques.",
        "correct": true,
        "explanation": "Le terme lipide regroupe plusieurs classes."
      }
    ],
    "explanation": "Les lipides forment un ensemble chimique hétérogène souvent caractérisé par une faible solubilité dans l'eau."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant une classification simplifiée des lipides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une classification simplifiée implique que toutes les familles ont la même structure.",
        "correct": false,
        "explanation": "Elle sert seulement à organiser des familles distinctes."
      },
      {
        "content": "Les glycérides ne contiennent jamais d'acides gras.",
        "correct": false,
        "explanation": "Ils sont formés par estérification du glycérol par des acides gras."
      },
      {
        "content": "Les sphingolipides dérivent d'une base sphingoïde.",
        "correct": true,
        "explanation": "Ils constituent une autre grande famille de lipides complexes."
      },
      {
        "content": "Les sphingolipides sont des acides aminés libres.",
        "correct": false,
        "explanation": "Ils sont des lipides complexes."
      },
      {
        "content": "Les acides gras peuvent être présentés parmi les lipides simples dans une classification pédagogique.",
        "correct": true,
        "explanation": "Cette organisation sert de repère introductif."
      }
    ],
    "explanation": "Une classification introductive distingue plusieurs familles lipidiques sans leur attribuer une structure chimique unique."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la définition biochimique générale des lipides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Graisses, huiles, cires et stéroïdes appartiennent à des familles lipidiques.",
        "correct": true,
        "explanation": "Le terme lipide regroupe plusieurs classes."
      },
      {
        "content": "Une faible solubilité dans l'eau est un caractère fréquent des lipides.",
        "correct": true,
        "explanation": "Leur portion hydrocarbonée importante interagit peu avec l'eau."
      },
      {
        "content": "Le terme lipide désigne uniquement les triglycérides.",
        "correct": false,
        "explanation": "Il englobe de nombreuses familles."
      },
      {
        "content": "Tous les lipides sont très solubles dans l'eau.",
        "correct": false,
        "explanation": "Beaucoup sont peu solubles ou insolubles."
      },
      {
        "content": "Les lipides sont tous des polymères d'acides aminés.",
        "correct": false,
        "explanation": "Cela décrit les protéines."
      }
    ],
    "explanation": "Les lipides forment un ensemble chimique hétérogène souvent caractérisé par une faible solubilité dans l'eau."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle grande famille lipidique contient un groupement phosphate et joue un rôle membranaire majeur ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "phospholipides",
        "phospholipide",
        "les phospholipides"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Une classification introductive distingue plusieurs familles lipidiques sans leur attribuer une structure chimique unique."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la structure générale d'un acide gras, laquelle est exacte ?",
    "choices": [
      {
        "content": "La chaîne hydrocarbonée constitue la partie la plus hydrophile.",
        "correct": false,
        "explanation": "Elle est hydrophobe."
      },
      {
        "content": "Un acide gras est nécessairement une protéine.",
        "correct": false,
        "explanation": "C'est un acide carboxylique à chaîne hydrocarbonée."
      },
      {
        "content": "Tous les acides gras possèdent obligatoirement plusieurs doubles liaisons.",
        "correct": false,
        "explanation": "Les acides gras saturés n'en possèdent aucune."
      },
      {
        "content": "Un acide gras ne contient jamais de fonction carboxylique.",
        "correct": false,
        "explanation": "Cette fonction définit la famille."
      },
      {
        "content": "La chaîne hydrocarbonée contribue fortement au caractère hydrophobe.",
        "correct": true,
        "explanation": "Elle est essentiellement apolaire."
      }
    ],
    "explanation": "Un acide gras associe une fonction carboxylique polaire à une chaîne hydrocarbonée hydrophobe."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le caractère amphiphile des acides gras, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'état d'ionisation n'a jamais d'influence sur le comportement aqueux.",
        "correct": false,
        "explanation": "Le carboxylate est plus hydrophile que COOH."
      },
      {
        "content": "Un acide gras ionisé possède une tête carboxylate chargée.",
        "correct": true,
        "explanation": "Cette ionisation augmente le caractère hydrophile de la tête."
      },
      {
        "content": "La chaîne hydrocarbonée est hydrophobe.",
        "correct": true,
        "explanation": "Sa longueur réduit globalement la solubilité aqueuse."
      },
      {
        "content": "Le comportement en milieu aqueux dépend de la longueur de chaîne, du pH et de l'état d'ionisation.",
        "correct": true,
        "explanation": "Il ne se résume pas à une règle unique."
      },
      {
        "content": "La tête carboxylique est la région la plus hydrophobe.",
        "correct": false,
        "explanation": "Elle est au contraire la région polaire."
      }
    ],
    "explanation": "Les acides gras possèdent une tête polaire et une queue hydrophobe ; leur comportement dépend aussi de l'ionisation."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos des critères de classification des acides gras, retenez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "La longueur de chaîne est sans intérêt.",
        "correct": false,
        "explanation": "Elle influence classification et propriétés."
      },
      {
        "content": "La position des doubles liaisons précise la structure d'un acide gras insaturé.",
        "correct": true,
        "explanation": "Elle est indiquée notamment par la notation Δ."
      },
      {
        "content": "Le nombre de doubles liaisons est un critère important.",
        "correct": true,
        "explanation": "Il définit saturation, mono- ou polyinsaturation."
      },
      {
        "content": "La couleur en solution est le critère principal.",
        "correct": false,
        "explanation": "Elle n'est pas utilisée pour classer les acides gras."
      },
      {
        "content": "Le nombre d'atomes d'azote définit saturation et insaturation.",
        "correct": false,
        "explanation": "Ce sont les doubles liaisons C=C qui comptent."
      }
    ],
    "explanation": "La longueur de chaîne et le degré d'insaturation sont deux axes majeurs de classification.",
    "requiredSelectionCount": 2
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur la numérotation depuis le carboxyle, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le carbone du groupement carboxyle est C1.",
        "correct": true,
        "explanation": "La numérotation systématique part de l'extrémité la plus oxydée."
      },
      {
        "content": "La numérotation Δ et la série oméga utilisent des extrémités différentes.",
        "correct": true,
        "explanation": "Il faut savoir passer de l'une à l'autre."
      },
      {
        "content": "Le carbone adjacent au carboxyle est C2.",
        "correct": true,
        "explanation": "Il correspond au carbone alpha de la nomenclature traditionnelle."
      },
      {
        "content": "Une position Δ9 désigne une double liaison débutant au carbone 9 depuis le carboxyle.",
        "correct": true,
        "explanation": "Elle se situe entre C9 et C10."
      },
      {
        "content": "Le carbone carboxylique est toujours le carbone oméga.",
        "correct": false,
        "explanation": "Oméga désigne l'extrémité méthyle opposée."
      }
    ],
    "explanation": "Le carbone carboxylique est C1 ; le carbone adjacent est C2 et correspond au carbone alpha."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on le dernier carbone d'une chaîne d'acide gras du côté méthyle ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "carbone oméga",
        "carbone omega",
        "oméga",
        "omega",
        "ω"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le carbone alpha est C2 près du carboxyle ; le carbone oméga est le carbone méthyle terminal."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de saturation et insaturation, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Un acide gras mono-insaturé possède toujours trois doubles liaisons.",
        "correct": false,
        "explanation": "Il en possède une."
      },
      {
        "content": "Le nombre après les deux-points donne le nombre d'atomes d'oxygène.",
        "correct": false,
        "explanation": "Il donne le nombre de doubles liaisons."
      },
      {
        "content": "Un acide gras saturé ne possède pas de double liaison C=C.",
        "correct": true,
        "explanation": "Sa chaîne hydrocarbonée ne comporte que des liaisons simples C-C."
      },
      {
        "content": "18:0 décrit un acide gras à 18 doubles liaisons.",
        "correct": false,
        "explanation": "Le premier nombre est le nombre de carbones."
      },
      {
        "content": "Un acide gras saturé possède au moins une double liaison.",
        "correct": false,
        "explanation": "Il n'en possède aucune."
      }
    ],
    "explanation": "La notation C:D indique le nombre de carbones puis le nombre de doubles liaisons."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur la définition biochimique générale des lipides, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Une faible solubilité dans l'eau est un caractère fréquent des lipides.",
        "correct": true,
        "explanation": "Leur portion hydrocarbonée importante interagit peu avec l'eau."
      },
      {
        "content": "Les lipides constituent un ensemble chimiquement hétérogène.",
        "correct": true,
        "explanation": "Ils ne partagent pas une structure covalente unique."
      },
      {
        "content": "Les lipides sont tous des polymères d'acides aminés.",
        "correct": false,
        "explanation": "Cela décrit les protéines."
      },
      {
        "content": "Tous les lipides ont exactement la même structure chimique.",
        "correct": false,
        "explanation": "Le groupe est chimiquement très divers."
      },
      {
        "content": "Le terme lipide désigne uniquement les triglycérides.",
        "correct": false,
        "explanation": "Il englobe de nombreuses familles."
      }
    ],
    "explanation": "Les lipides forment un ensemble chimique hétérogène souvent caractérisé par une faible solubilité dans l'eau."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La couleur en solution est le critère principal.",
        "correct": false,
        "explanation": "Elle n'est pas utilisée pour classer les acides gras."
      },
      {
        "content": "La longueur de chaîne est sans intérêt.",
        "correct": false,
        "explanation": "Elle influence classification et propriétés."
      },
      {
        "content": "La position des doubles liaisons précise la structure d'un acide gras insaturé.",
        "correct": true,
        "explanation": "Elle est indiquée notamment par la notation Δ."
      },
      {
        "content": "Le nombre de doubles liaisons est un critère important.",
        "correct": true,
        "explanation": "Il définit saturation, mono- ou polyinsaturation."
      },
      {
        "content": "Le nombre d'atomes d'azote définit saturation et insaturation.",
        "correct": false,
        "explanation": "Ce sont les doubles liaisons C=C qui comptent."
      },
      {
        "content": "Les acides gras peuvent être présentés parmi les lipides simples dans une classification pédagogique.",
        "correct": true,
        "explanation": "Cette organisation sert de repère introductif."
      },
      {
        "content": "Les glycérides ne contiennent jamais d'acides gras.",
        "correct": false,
        "explanation": "Ils sont formés par estérification du glycérol par des acides gras."
      },
      {
        "content": "Le nombre total de carbones est un critère important.",
        "correct": true,
        "explanation": "Il décrit la longueur de chaîne."
      },
      {
        "content": "Les phospholipides sont des glucides simples.",
        "correct": false,
        "explanation": "Ils appartiennent aux lipides."
      },
      {
        "content": "Les sphingolipides dérivent d'une base sphingoïde.",
        "correct": true,
        "explanation": "Ils constituent une autre grande famille de lipides complexes."
      }
    ],
    "explanation": "Une classification introductive distingue plusieurs familles lipidiques sans leur attribuer une structure chimique unique. La longueur de chaîne et le degré d'insaturation sont deux axes majeurs de classification."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la structure générale d'un acide gras, quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "Un acide gras est nécessairement une protéine.",
        "correct": false,
        "explanation": "C'est un acide carboxylique à chaîne hydrocarbonée."
      },
      {
        "content": "Un acide gras comporte une fonction carboxylique et une chaîne hydrocarbonée.",
        "correct": true,
        "explanation": "Ces deux régions ont des propriétés différentes."
      },
      {
        "content": "Un acide gras peut être saturé ou insaturé.",
        "correct": true,
        "explanation": "Cela dépend de la présence de doubles liaisons C=C."
      },
      {
        "content": "La chaîne hydrocarbonée contribue fortement au caractère hydrophobe.",
        "correct": true,
        "explanation": "Elle est essentiellement apolaire."
      },
      {
        "content": "Un acide gras ne contient jamais de fonction carboxylique.",
        "correct": false,
        "explanation": "Cette fonction définit la famille."
      }
    ],
    "explanation": "Un acide gras associe une fonction carboxylique polaire à une chaîne hydrocarbonée hydrophobe."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on une molécule possédant à la fois une région hydrophile et une région hydrophobe ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "amphiphile",
        "amphipathique",
        "molécule amphiphile",
        "molecule amphiphile"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les acides gras possèdent une tête polaire et une queue hydrophobe ; leur comportement dépend aussi de l'ionisation."
  }
];
