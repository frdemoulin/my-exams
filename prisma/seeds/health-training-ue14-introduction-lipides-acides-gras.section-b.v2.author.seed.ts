import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Chapitre 2.1–2.2 — Lipides et acides gras — Section B — Acides gras saturés et longueurs */
export const UE14_BIOCH_CH4_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la parité des acides gras chez les mammifères, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La parité du nombre de carbones est indépendante de la présence d'une double liaison.",
        "correct": true,
        "explanation": "Un acide gras impair peut être saturé ou insaturé."
      },
      {
        "content": "La parité permet à elle seule d'identifier le nom commun d'un acide gras.",
        "correct": false,
        "explanation": "Plusieurs structures peuvent partager la même longueur."
      },
      {
        "content": "Un nombre impair de carbones implique automatiquement une double liaison.",
        "correct": false,
        "explanation": "Parité et insaturation sont distinctes."
      },
      {
        "content": "L'acétyl-CoA fournit des unités à deux carbones dans de nombreuses voies lipidiques.",
        "correct": true,
        "explanation": "Cela favorise les longueurs paires."
      },
      {
        "content": "La bêta-oxydation enlève des unités de cinq carbones.",
        "correct": false,
        "explanation": "Elle enlève classiquement des unités à deux carbones."
      }
    ],
    "explanation": "La prédominance des chaînes paires s'explique par un métabolisme construit autour d'unités à deux carbones."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de l'acide palmitique, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Il appartient à la série oméga-3.",
        "correct": false,
        "explanation": "Une série oméga concerne les acides gras insaturés."
      },
      {
        "content": "Son nom systématique est acide octadécanoïque.",
        "correct": false,
        "explanation": "C'est celui du stéarique."
      },
      {
        "content": "L'acide palmitique est 18:0.",
        "correct": false,
        "explanation": "18:0 correspond à l'acide stéarique."
      },
      {
        "content": "Il possède une double liaison Δ9.",
        "correct": false,
        "explanation": "Cela décrit le palmitoléique en C16."
      },
      {
        "content": "Il est fréquent dans les lipides biologiques.",
        "correct": true,
        "explanation": "C'est un acide gras saturé majeur."
      }
    ],
    "explanation": "L'acide palmitique est l'acide hexadécanoïque saturé 16:0."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle notation abrégée correspond à l'acide stéarique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "18:0",
        "C18:0"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'acide stéarique est l'acide octadécanoïque saturé 18:0."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les catégories de longueur de chaîne, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un acide gras C24 est classiquement qualifié de très longue chaîne.",
        "correct": true,
        "explanation": "Les très longues chaînes dépassent le domaine des acides gras usuels C16-C18."
      },
      {
        "content": "Une chaîne C18 est classiquement une chaîne courte.",
        "correct": false,
        "explanation": "C18 est une longue chaîne."
      },
      {
        "content": "Les termes courte, moyenne, longue et très longue chaîne décrivent la longueur du squelette carboné.",
        "correct": true,
        "explanation": "Ils ne décrivent pas le nombre de doubles liaisons."
      },
      {
        "content": "Tous les domaines de la biochimie utilisent exactement les mêmes seuils sans variation.",
        "correct": false,
        "explanation": "Les conventions de seuil peuvent varier."
      },
      {
        "content": "C16 et C18 sont classiquement des acides gras à longue chaîne.",
        "correct": true,
        "explanation": "Palmitique et stéarique en sont des exemples."
      }
    ],
    "explanation": "Les catégories de longueur sont utiles, mais leurs frontières exactes peuvent varier ; C16-C18 sont des longues chaînes et C24 une très longue chaîne."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de la lecture du symbole C:D, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Un symbole :0 décrit un acide gras polyinsaturé.",
        "correct": false,
        "explanation": "Il décrit un saturé."
      },
      {
        "content": "16:0 et 18:0 ont la même longueur de chaîne.",
        "correct": false,
        "explanation": "Ils diffèrent de deux carbones."
      },
      {
        "content": "Dans 18:2, le nombre 2 désigne deux atomes d'oxygène.",
        "correct": false,
        "explanation": "Il désigne deux doubles liaisons."
      },
      {
        "content": "Dans 16:0, 16 est le nombre de carbones.",
        "correct": true,
        "explanation": "Le premier nombre décrit la longueur de chaîne."
      },
      {
        "content": "18:1 suffit à distinguer toutes les positions possibles de la double liaison.",
        "correct": false,
        "explanation": "La position doit être précisée."
      }
    ],
    "explanation": "La notation C:D code la longueur puis le nombre de doubles liaisons, mais pas leur position."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur la relation entre longueur de chaîne et propriétés, sélectionnez exactement les deux exactes.",
    "choices": [
      {
        "content": "Un C24 possède toujours un point de fusion inférieur à un C16 de même saturation.",
        "correct": false,
        "explanation": "Une chaîne plus longue tend à augmenter le point de fusion."
      },
      {
        "content": "La comparaison doit se faire à degré d'insaturation comparable.",
        "correct": true,
        "explanation": "Les doubles liaisons modifient aussi fortement le point de fusion."
      },
      {
        "content": "Le degré d'insaturation est sans influence sur la fusion.",
        "correct": false,
        "explanation": "Il est également déterminant."
      },
      {
        "content": "Allonger une chaîne rend toujours l'acide gras plus soluble dans l'eau.",
        "correct": false,
        "explanation": "La tendance est inverse."
      },
      {
        "content": "Une chaîne plus longue renforce globalement la composante hydrophobe.",
        "correct": true,
        "explanation": "La solubilité aqueuse diminue généralement."
      }
    ],
    "explanation": "Une chaîne plus longue renforce généralement les interactions et élève le point de fusion, à insaturation comparable.",
    "requiredSelectionCount": 2
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la nomenclature des acides gras saturés, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les noms communs palmitique et stéarique restent très utilisés en biochimie.",
        "correct": true,
        "explanation": "Ils coexistent avec les noms systématiques."
      },
      {
        "content": "Hexadécanoïque correspond à 16 carbones.",
        "correct": true,
        "explanation": "C'est l'acide palmitique."
      },
      {
        "content": "Les noms communs sont interdits en biochimie.",
        "correct": false,
        "explanation": "Ils restent d'usage courant."
      },
      {
        "content": "Le suffixe -anoïque indique un acide carboxylique saturé dans la nomenclature systématique.",
        "correct": true,
        "explanation": "Aucune double liaison n'est indiquée."
      },
      {
        "content": "Octadécanoïque correspond à 18 carbones.",
        "correct": true,
        "explanation": "C'est l'acide stéarique."
      }
    ],
    "explanation": "Les acides palmitique et stéarique correspondent respectivement aux acides hexadécanoïque 16:0 et octadécanoïque 18:0."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment note-t-on un acide gras à 17 carbones sans double liaison ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "17:0",
        "C17:0"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le symbole C:D reste valable pour les chaînes impaires ; la parité ne renseigne pas sur l'insaturation."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la parité des acides gras chez les mammifères, laquelle est exacte ?",
    "choices": [
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
        "content": "Tous les acides gras biologiques ont obligatoirement un nombre pair de carbones.",
        "correct": false,
        "explanation": "Des chaînes impaires existent."
      },
      {
        "content": "La parité permet à elle seule d'identifier le nom commun d'un acide gras.",
        "correct": false,
        "explanation": "Plusieurs structures peuvent partager la même longueur."
      }
    ],
    "explanation": "La prédominance des chaînes paires s'explique par un métabolisme construit autour d'unités à deux carbones."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'acide palmitique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'acide palmitique est 18:0.",
        "correct": false,
        "explanation": "18:0 correspond à l'acide stéarique."
      },
      {
        "content": "Il possède une double liaison Δ9.",
        "correct": false,
        "explanation": "Cela décrit le palmitoléique en C16."
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
        "content": "Il est saturé.",
        "correct": true,
        "explanation": "Il ne possède aucune double liaison C=C."
      }
    ],
    "explanation": "L'acide palmitique est l'acide hexadécanoïque saturé 16:0."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la parité des acides gras chez les mammifères, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La bêta-oxydation enlève des unités de cinq carbones.",
        "correct": false,
        "explanation": "Elle enlève classiquement des unités à deux carbones."
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
        "content": "Un nombre impair de carbones implique automatiquement une double liaison.",
        "correct": false,
        "explanation": "Parité et insaturation sont distinctes."
      },
      {
        "content": "La parité permet à elle seule d'identifier le nom commun d'un acide gras.",
        "correct": false,
        "explanation": "Plusieurs structures peuvent partager la même longueur."
      }
    ],
    "explanation": "La prédominance des chaînes paires s'explique par un métabolisme construit autour d'unités à deux carbones."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
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
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur l'acide stéarique, laquelle est exacte ?",
    "choices": [
      {
        "content": "Son nom systématique est acide octadécanoïque.",
        "correct": true,
        "explanation": "Octadéc- correspond à 18 carbones."
      },
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
        "content": "Son nom systématique est acide hexadécanoïque.",
        "correct": false,
        "explanation": "C'est celui du palmitique."
      },
      {
        "content": "Il possède obligatoirement une double liaison trans.",
        "correct": false,
        "explanation": "Il ne possède aucune double liaison."
      }
    ],
    "explanation": "L'acide stéarique est l'acide octadécanoïque saturé 18:0."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les catégories de longueur de chaîne, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une très longue chaîne contient nécessairement moins de huit carbones.",
        "correct": false,
        "explanation": "C'est l'inverse."
      },
      {
        "content": "C16 et C18 sont classiquement des acides gras à longue chaîne.",
        "correct": true,
        "explanation": "Palmitique et stéarique en sont des exemples."
      },
      {
        "content": "Un acide gras C24 est classiquement qualifié de très longue chaîne.",
        "correct": true,
        "explanation": "Les très longues chaînes dépassent le domaine des acides gras usuels C16-C18."
      },
      {
        "content": "Les termes courte, moyenne, longue et très longue chaîne décrivent la longueur du squelette carboné.",
        "correct": true,
        "explanation": "Ils ne décrivent pas le nombre de doubles liaisons."
      },
      {
        "content": "Une chaîne C18 est classiquement une chaîne courte.",
        "correct": false,
        "explanation": "C18 est une longue chaîne."
      }
    ],
    "explanation": "Les catégories de longueur sont utiles, mais leurs frontières exactes peuvent varier ; C16-C18 sont des longues chaînes et C24 une très longue chaîne."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de la lecture du symbole C:D, retenez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "18:1 suffit à distinguer toutes les positions possibles de la double liaison.",
        "correct": false,
        "explanation": "La position doit être précisée."
      },
      {
        "content": "La position des doubles liaisons nécessite une information supplémentaire, telle que Δ9.",
        "correct": true,
        "explanation": "Le symbole C:D seul ne donne pas leur emplacement."
      },
      {
        "content": "16:0 et 18:0 ont la même longueur de chaîne.",
        "correct": false,
        "explanation": "Ils diffèrent de deux carbones."
      },
      {
        "content": "Dans 18:1, une seule double liaison est présente.",
        "correct": true,
        "explanation": "Il s'agit d'un acide gras mono-insaturé."
      },
      {
        "content": "Un symbole :0 décrit un acide gras polyinsaturé.",
        "correct": false,
        "explanation": "Il décrit un saturé."
      }
    ],
    "explanation": "La notation C:D code la longueur puis le nombre de doubles liaisons, mais pas leur position.",
    "requiredSelectionCount": 2
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur la relation entre longueur de chaîne et propriétés, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Une chaîne plus longue renforce globalement la composante hydrophobe.",
        "correct": true,
        "explanation": "La solubilité aqueuse diminue généralement."
      },
      {
        "content": "La longueur de chaîne influence l'organisation des lipides dans les membranes.",
        "correct": true,
        "explanation": "Elle modifie les interactions entre chaînes."
      },
      {
        "content": "La comparaison doit se faire à degré d'insaturation comparable.",
        "correct": true,
        "explanation": "Les doubles liaisons modifient aussi fortement le point de fusion."
      },
      {
        "content": "Allonger une chaîne rend toujours l'acide gras plus soluble dans l'eau.",
        "correct": false,
        "explanation": "La tendance est inverse."
      },
      {
        "content": "À degré d'insaturation comparable, une chaîne plus longue tend à avoir un point de fusion plus élevé.",
        "correct": true,
        "explanation": "Les interactions de dispersion augmentent avec la taille."
      }
    ],
    "explanation": "Une chaîne plus longue renforce généralement les interactions et élève le point de fusion, à insaturation comparable."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le nom systématique de l'acide palmitique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide hexadécanoïque",
        "acide hexadecanoique",
        "hexadécanoïque",
        "hexadecanoique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les acides palmitique et stéarique correspondent respectivement aux acides hexadécanoïque 16:0 et octadécanoïque 18:0."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos d'un acide gras impair ou atypique, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Un acide gras à 17 carbones et aucune double liaison s'écrit 17:0.",
        "correct": true,
        "explanation": "Le premier nombre code les carbones, le second les doubles liaisons."
      },
      {
        "content": "Tout acide gras impair est saturé.",
        "correct": false,
        "explanation": "Il peut être saturé ou insaturé."
      },
      {
        "content": "17:0 signifie 17 doubles liaisons.",
        "correct": false,
        "explanation": "Il signifie 17 carbones et zéro double liaison."
      },
      {
        "content": "Les chaînes impaires sont chimiquement impossibles.",
        "correct": false,
        "explanation": "Elles existent."
      },
      {
        "content": "11:1 indique nécessairement une série oméga-3.",
        "correct": false,
        "explanation": "La position de la double liaison est inconnue."
      }
    ],
    "explanation": "Le symbole C:D reste valable pour les chaînes impaires ; la parité ne renseigne pas sur l'insaturation."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur la parité des acides gras chez les mammifères, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La parité permet à elle seule d'identifier le nom commun d'un acide gras.",
        "correct": false,
        "explanation": "Plusieurs structures peuvent partager la même longueur."
      },
      {
        "content": "Tous les acides gras biologiques ont obligatoirement un nombre pair de carbones.",
        "correct": false,
        "explanation": "Des chaînes impaires existent."
      },
      {
        "content": "Des acides gras à nombre impair existent néanmoins.",
        "correct": true,
        "explanation": "La règle de parité est une tendance, pas une impossibilité."
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
      }
    ],
    "explanation": "La prédominance des chaînes paires s'explique par un métabolisme construit autour d'unités à deux carbones."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Dans 18:0, 0 indique l'absence de double liaison.",
        "correct": true,
        "explanation": "Le second nombre décrit le nombre de doubles liaisons."
      },
      {
        "content": "Son nom systématique est acide hexadécanoïque.",
        "correct": true,
        "explanation": "Hexadéc- correspond à 16 carbones."
      },
      {
        "content": "L'acide palmitique comporte 16 carbones.",
        "correct": true,
        "explanation": "Sa notation est 16:0."
      },
      {
        "content": "Dans 18:2, le nombre 2 désigne deux atomes d'oxygène.",
        "correct": false,
        "explanation": "Il désigne deux doubles liaisons."
      },
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
        "content": "L'acide palmitique est 18:0.",
        "correct": false,
        "explanation": "18:0 correspond à l'acide stéarique."
      },
      {
        "content": "La position des doubles liaisons nécessite une information supplémentaire, telle que Δ9.",
        "correct": true,
        "explanation": "Le symbole C:D seul ne donne pas leur emplacement."
      },
      {
        "content": "Il possède une double liaison Δ9.",
        "correct": false,
        "explanation": "Cela décrit le palmitoléique en C16."
      },
      {
        "content": "16:0 et 18:0 ont la même longueur de chaîne.",
        "correct": false,
        "explanation": "Ils diffèrent de deux carbones."
      }
    ],
    "explanation": "L'acide palmitique est l'acide hexadécanoïque saturé 16:0. La notation C:D code la longueur puis le nombre de doubles liaisons, mais pas leur position."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'acide stéarique, quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "Il est un acide gras à longue chaîne.",
        "correct": true,
        "explanation": "C16 et C18 sont des représentants classiques de cette catégorie."
      },
      {
        "content": "Son nom systématique est acide hexadécanoïque.",
        "correct": false,
        "explanation": "C'est celui du palmitique."
      },
      {
        "content": "Il est polyinsaturé.",
        "correct": false,
        "explanation": "Il est saturé."
      },
      {
        "content": "Son nom systématique est acide octadécanoïque.",
        "correct": true,
        "explanation": "Octadéc- correspond à 18 carbones."
      },
      {
        "content": "L'acide stéarique comporte 18 carbones.",
        "correct": true,
        "explanation": "Sa notation est 18:0."
      }
    ],
    "explanation": "L'acide stéarique est l'acide octadécanoïque saturé 18:0."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment qualifie-t-on classiquement un acide gras à 24 carbones ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "très longue chaîne",
        "tres longue chaine",
        "acide gras à très longue chaîne",
        "acide gras a tres longue chaine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les catégories de longueur sont utiles, mais leurs frontières exactes peuvent varier ; C16-C18 sont des longues chaînes et C24 une très longue chaîne."
  }
];
