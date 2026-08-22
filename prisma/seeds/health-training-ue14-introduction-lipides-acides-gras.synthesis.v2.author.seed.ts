import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Chapitre 2.1–2.2 — Lipides et acides gras — Synthèse du chapitre */
export const UE14_BIOCH_CH4_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la définition biochimique générale des lipides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Tous les lipides sont très solubles dans l'eau.",
        "correct": false,
        "explanation": "Beaucoup sont peu solubles ou insolubles."
      },
      {
        "content": "Le terme lipide désigne uniquement les triglycérides.",
        "correct": false,
        "explanation": "Il englobe de nombreuses familles."
      },
      {
        "content": "Une faible solubilité dans l'eau est un caractère fréquent des lipides.",
        "correct": true,
        "explanation": "Leur portion hydrocarbonée importante interagit peu avec l'eau."
      },
      {
        "content": "Graisses, huiles, cires et stéroïdes appartiennent à des familles lipidiques.",
        "correct": true,
        "explanation": "Le terme lipide regroupe plusieurs classes."
      },
      {
        "content": "Tous les lipides ont exactement la même structure chimique.",
        "correct": false,
        "explanation": "Le groupe est chimiquement très divers."
      }
    ],
    "explanation": "Les lipides forment un ensemble chimique hétérogène souvent caractérisé par une faible solubilité dans l'eau."
  },
  {
    "order": 102,
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
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la structure générale d'un acide gras, laquelle est exacte ?",
    "choices": [
      {
        "content": "Un acide gras ne contient jamais de fonction carboxylique.",
        "correct": false,
        "explanation": "Cette fonction définit la famille."
      },
      {
        "content": "Tous les acides gras possèdent obligatoirement plusieurs doubles liaisons.",
        "correct": false,
        "explanation": "Les acides gras saturés n'en possèdent aucune."
      },
      {
        "content": "La chaîne hydrocarbonée constitue la partie la plus hydrophile.",
        "correct": false,
        "explanation": "Elle est hydrophobe."
      },
      {
        "content": "Un acide gras peut être saturé ou insaturé.",
        "correct": true,
        "explanation": "Cela dépend de la présence de doubles liaisons C=C."
      },
      {
        "content": "Un acide gras est nécessairement une protéine.",
        "correct": false,
        "explanation": "C'est un acide carboxylique à chaîne hydrocarbonée."
      }
    ],
    "explanation": "Un acide gras associe une fonction carboxylique polaire à une chaîne hydrocarbonée hydrophobe."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le caractère amphiphile des acides gras, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La tête carboxylique est hydrophile par rapport à la chaîne hydrocarbonée.",
        "correct": true,
        "explanation": "Elle interagit davantage avec l'eau."
      },
      {
        "content": "Le comportement en milieu aqueux dépend de la longueur de chaîne, du pH et de l'état d'ionisation.",
        "correct": true,
        "explanation": "Il ne se résume pas à une règle unique."
      },
      {
        "content": "La chaîne hydrocarbonée porte habituellement une charge entière négative.",
        "correct": false,
        "explanation": "Elle est essentiellement apolaire."
      },
      {
        "content": "Un acide gras ionisé possède une tête carboxylate chargée.",
        "correct": true,
        "explanation": "Cette ionisation augmente le caractère hydrophile de la tête."
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
    "order": 105,
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
        "content": "Le nombre total de carbones est un critère important.",
        "correct": true,
        "explanation": "Il décrit la longueur de chaîne."
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
      },
      {
        "content": "La couleur en solution est le critère principal.",
        "correct": false,
        "explanation": "Elle n'est pas utilisée pour classer les acides gras."
      }
    ],
    "explanation": "La longueur de chaîne et le degré d'insaturation sont deux axes majeurs de classification.",
    "requiredSelectionCount": 2
  },
  {
    "order": 106,
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
        "content": "Δ9 signifie que la chaîne contient exactement neuf carbones.",
        "correct": false,
        "explanation": "La valeur indique une position de double liaison."
      },
      {
        "content": "Une position Δ9 désigne une double liaison débutant au carbone 9 depuis le carboxyle.",
        "correct": true,
        "explanation": "Elle se situe entre C9 et C10."
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
      }
    ],
    "explanation": "Le carbone carboxylique est C1 ; le carbone adjacent est C2 et correspond au carbone alpha."
  },
  {
    "order": 107,
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
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de saturation et insaturation, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "18:0 décrit un acide gras à 18 doubles liaisons.",
        "correct": false,
        "explanation": "Le premier nombre est le nombre de carbones."
      },
      {
        "content": "Un acide gras polyinsaturé possède au moins deux doubles liaisons C=C.",
        "correct": true,
        "explanation": "Les acides linoléique et alpha-linolénique en sont des exemples."
      },
      {
        "content": "Le nombre après les deux-points donne le nombre d'atomes d'oxygène.",
        "correct": false,
        "explanation": "Il donne le nombre de doubles liaisons."
      },
      {
        "content": "Un acide gras saturé possède au moins une double liaison.",
        "correct": false,
        "explanation": "Il n'en possède aucune."
      },
      {
        "content": "Un acide gras mono-insaturé possède toujours trois doubles liaisons.",
        "correct": false,
        "explanation": "Il en possède une."
      }
    ],
    "explanation": "La notation C:D indique le nombre de carbones puis le nombre de doubles liaisons."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur la parité des acides gras chez les mammifères, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Tous les acides gras biologiques ont obligatoirement un nombre pair de carbones.",
        "correct": false,
        "explanation": "Des chaînes impaires existent."
      },
      {
        "content": "Les acides gras à nombre pair de carbones sont très fréquents chez les mammifères.",
        "correct": true,
        "explanation": "La synthèse et la bêta-oxydation utilisent largement des unités à deux carbones."
      },
      {
        "content": "Un nombre impair de carbones implique automatiquement une double liaison.",
        "correct": false,
        "explanation": "Parité et insaturation sont distinctes."
      },
      {
        "content": "La bêta-oxydation enlève des unités de cinq carbones.",
        "correct": false,
        "explanation": "Elle enlève classiquement des unités à deux carbones."
      },
      {
        "content": "Des acides gras à nombre impair existent néanmoins.",
        "correct": true,
        "explanation": "La règle de parité est une tendance, pas une impossibilité."
      }
    ],
    "explanation": "La prédominance des chaînes paires s'explique par un métabolisme construit autour d'unités à deux carbones."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Il appartient à la série oméga-3.",
        "correct": false,
        "explanation": "Une série oméga concerne les acides gras insaturés."
      },
      {
        "content": "Il est fréquent dans les lipides biologiques.",
        "correct": true,
        "explanation": "C'est un acide gras saturé majeur."
      },
      {
        "content": "Dans 16:0, 16 est le nombre de carbones.",
        "correct": true,
        "explanation": "Le premier nombre décrit la longueur de chaîne."
      },
      {
        "content": "Un symbole :0 décrit un acide gras polyinsaturé.",
        "correct": false,
        "explanation": "Il décrit un saturé."
      },
      {
        "content": "18:1 suffit à distinguer toutes les positions possibles de la double liaison.",
        "correct": false,
        "explanation": "La position doit être précisée."
      },
      {
        "content": "Son nom systématique est acide octadécanoïque.",
        "correct": false,
        "explanation": "C'est celui du stéarique."
      },
      {
        "content": "L'acide palmitique comporte 16 carbones.",
        "correct": true,
        "explanation": "Sa notation est 16:0."
      },
      {
        "content": "Il possède une double liaison Δ9.",
        "correct": false,
        "explanation": "Cela décrit le palmitoléique en C16."
      },
      {
        "content": "Dans 18:0, 0 indique l'absence de double liaison.",
        "correct": true,
        "explanation": "Le second nombre décrit le nombre de doubles liaisons."
      },
      {
        "content": "Son nom systématique est acide hexadécanoïque.",
        "correct": true,
        "explanation": "Hexadéc- correspond à 16 carbones."
      }
    ],
    "explanation": "L'acide palmitique est l'acide hexadécanoïque saturé 16:0. La notation C:D code la longueur puis le nombre de doubles liaisons, mais pas leur position."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la définition biochimique générale des lipides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les lipides sont tous des polymères d'acides aminés.",
        "correct": false,
        "explanation": "Cela décrit les protéines."
      },
      {
        "content": "Certains lipides ont un rôle structural membranaire.",
        "correct": true,
        "explanation": "Phospholipides et cholestérol en sont des exemples."
      },
      {
        "content": "Tous les lipides sont très solubles dans l'eau.",
        "correct": false,
        "explanation": "Beaucoup sont peu solubles ou insolubles."
      },
      {
        "content": "Tous les lipides ont exactement la même structure chimique.",
        "correct": false,
        "explanation": "Le groupe est chimiquement très divers."
      },
      {
        "content": "Les lipides constituent un ensemble chimiquement hétérogène.",
        "correct": true,
        "explanation": "Ils ne partagent pas une structure covalente unique."
      }
    ],
    "explanation": "Les lipides forment un ensemble chimique hétérogène souvent caractérisé par une faible solubilité dans l'eau."
  },
  {
    "order": 112,
    "difficulty": "HARD",
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
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur la structure générale d'un acide gras, sélectionnez exactement les deux exactes.",
    "choices": [
      {
        "content": "La chaîne hydrocarbonée contribue fortement au caractère hydrophobe.",
        "correct": true,
        "explanation": "Elle est essentiellement apolaire."
      },
      {
        "content": "Un acide gras ne contient jamais de fonction carboxylique.",
        "correct": false,
        "explanation": "Cette fonction définit la famille."
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
        "content": "Un acide gras peut être saturé ou insaturé.",
        "correct": true,
        "explanation": "Cela dépend de la présence de doubles liaisons C=C."
      }
    ],
    "explanation": "Un acide gras associe une fonction carboxylique polaire à une chaîne hydrocarbonée hydrophobe.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le caractère amphiphile des acides gras, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La tête carboxylique est hydrophile par rapport à la chaîne hydrocarbonée.",
        "correct": true,
        "explanation": "Elle interagit davantage avec l'eau."
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
      },
      {
        "content": "La chaîne hydrocarbonée est hydrophobe.",
        "correct": true,
        "explanation": "Sa longueur réduit globalement la solubilité aqueuse."
      },
      {
        "content": "La chaîne hydrocarbonée porte habituellement une charge entière négative.",
        "correct": false,
        "explanation": "Elle est essentiellement apolaire."
      }
    ],
    "explanation": "Les acides gras possèdent une tête polaire et une queue hydrophobe ; leur comportement dépend aussi de l'ionisation."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "À propos des critères de classification des acides gras, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "La couleur en solution est le critère principal.",
        "correct": false,
        "explanation": "Elle n'est pas utilisée pour classer les acides gras."
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
      },
      {
        "content": "La longueur de chaîne est sans intérêt.",
        "correct": false,
        "explanation": "Elle influence classification et propriétés."
      }
    ],
    "explanation": "La longueur de chaîne et le degré d'insaturation sont deux axes majeurs de classification."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur la numérotation depuis le carboxyle, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le carbone adjacent au carboxyle est C2.",
        "correct": true,
        "explanation": "Il correspond au carbone alpha de la nomenclature traditionnelle."
      },
      {
        "content": "Le carbone carboxylique est toujours le carbone oméga.",
        "correct": false,
        "explanation": "Oméga désigne l'extrémité méthyle opposée."
      },
      {
        "content": "Une position Δ9 désigne une double liaison débutant au carbone 9 depuis le carboxyle.",
        "correct": true,
        "explanation": "Elle se situe entre C9 et C10."
      },
      {
        "content": "La numérotation Δ et la série oméga utilisent des extrémités différentes.",
        "correct": true,
        "explanation": "Il faut savoir passer de l'une à l'autre."
      },
      {
        "content": "Le carbone du groupement carboxyle est C1.",
        "correct": true,
        "explanation": "La numérotation systématique part de l'extrémité la plus oxydée."
      }
    ],
    "explanation": "Le carbone carboxylique est C1 ; le carbone adjacent est C2 et correspond au carbone alpha."
  },
  {
    "order": 117,
    "difficulty": "HARD",
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
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Son nom systématique est acide hexadécanoïque.",
        "correct": false,
        "explanation": "C'est celui du palmitique."
      },
      {
        "content": "Il est un acide gras à longue chaîne.",
        "correct": true,
        "explanation": "C16 et C18 sont des représentants classiques de cette catégorie."
      },
      {
        "content": "Le nombre après les deux-points donne le nombre d'atomes d'oxygène.",
        "correct": false,
        "explanation": "Il donne le nombre de doubles liaisons."
      },
      {
        "content": "Un acide gras polyinsaturé possède au moins deux doubles liaisons C=C.",
        "correct": true,
        "explanation": "Les acides linoléique et alpha-linolénique en sont des exemples."
      },
      {
        "content": "Un acide gras saturé ne possède pas de double liaison C=C.",
        "correct": true,
        "explanation": "Sa chaîne hydrocarbonée ne comporte que des liaisons simples C-C."
      },
      {
        "content": "Son nom systématique est acide octadécanoïque.",
        "correct": true,
        "explanation": "Octadéc- correspond à 18 carbones."
      },
      {
        "content": "Il est saturé.",
        "correct": true,
        "explanation": "Il ne possède aucune double liaison C=C."
      },
      {
        "content": "Un acide gras saturé possède au moins une double liaison.",
        "correct": false,
        "explanation": "Il n'en possède aucune."
      },
      {
        "content": "18:0 décrit un acide gras à 18 doubles liaisons.",
        "correct": false,
        "explanation": "Le premier nombre est le nombre de carbones."
      },
      {
        "content": "L'acide stéarique est 16:0.",
        "correct": false,
        "explanation": "16:0 correspond au palmitique."
      }
    ],
    "explanation": "La notation C:D indique le nombre de carbones puis le nombre de doubles liaisons. L'acide stéarique est l'acide octadécanoïque saturé 18:0."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur la parité des acides gras chez les mammifères, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La parité permet à elle seule d'identifier le nom commun d'un acide gras.",
        "correct": false,
        "explanation": "Plusieurs structures peuvent partager la même longueur."
      },
      {
        "content": "La parité du nombre de carbones est indépendante de la présence d'une double liaison.",
        "correct": true,
        "explanation": "Un acide gras impair peut être saturé ou insaturé."
      },
      {
        "content": "Les acides gras à nombre pair de carbones sont très fréquents chez les mammifères.",
        "correct": true,
        "explanation": "La synthèse et la bêta-oxydation utilisent largement des unités à deux carbones."
      },
      {
        "content": "La bêta-oxydation enlève des unités de cinq carbones.",
        "correct": false,
        "explanation": "Elle enlève classiquement des unités à deux carbones."
      },
      {
        "content": "Un nombre impair de carbones implique automatiquement une double liaison.",
        "correct": false,
        "explanation": "Parité et insaturation sont distinctes."
      }
    ],
    "explanation": "La prédominance des chaînes paires s'explique par un métabolisme construit autour d'unités à deux carbones."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle notation abrégée correspond à l'acide palmitique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "16:0",
        "C16:0"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'acide palmitique est l'acide hexadécanoïque saturé 16:0."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "À propos de l'acide stéarique, retenez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Il est polyinsaturé.",
        "correct": false,
        "explanation": "Il est saturé."
      },
      {
        "content": "L'acide stéarique est 16:0.",
        "correct": false,
        "explanation": "16:0 correspond au palmitique."
      },
      {
        "content": "Il est saturé.",
        "correct": true,
        "explanation": "Il ne possède aucune double liaison C=C."
      },
      {
        "content": "Son nom systématique est acide hexadécanoïque.",
        "correct": false,
        "explanation": "C'est celui du palmitique."
      },
      {
        "content": "Son nom systématique est acide octadécanoïque.",
        "correct": true,
        "explanation": "Octadéc- correspond à 18 carbones."
      }
    ],
    "explanation": "L'acide stéarique est l'acide octadécanoïque saturé 18:0.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur les catégories de longueur de chaîne, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Tous les domaines de la biochimie utilisent exactement les mêmes seuils sans variation.",
        "correct": false,
        "explanation": "Les conventions de seuil peuvent varier."
      },
      {
        "content": "Les seuils précis peuvent varier légèrement selon les conventions utilisées.",
        "correct": true,
        "explanation": "La catégorie doit donc être interprétée avec son contexte."
      },
      {
        "content": "C16 et C18 sont classiquement des acides gras à longue chaîne.",
        "correct": true,
        "explanation": "Palmitique et stéarique en sont des exemples."
      },
      {
        "content": "Les termes courte, moyenne, longue et très longue chaîne décrivent la longueur du squelette carboné.",
        "correct": true,
        "explanation": "Ils ne décrivent pas le nombre de doubles liaisons."
      },
      {
        "content": "La catégorie de longueur indique directement cis ou trans.",
        "correct": false,
        "explanation": "Ce sont des caractéristiques différentes."
      }
    ],
    "explanation": "Les catégories de longueur sont utiles, mais leurs frontières exactes peuvent varier ; C16-C18 sont des longues chaînes et C24 une très longue chaîne."
  }
];
