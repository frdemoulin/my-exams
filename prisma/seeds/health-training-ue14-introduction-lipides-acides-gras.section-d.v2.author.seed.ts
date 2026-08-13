import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Introduction générale sur les lipides et acides gras — Section D
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH4_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la densité des acides gras :",
    "choices": [
      {
        "content": "La fiche indique une masse moléculaire souvent autour de 250 à 300 Da pour les exemples étudiés.",
        "correct": true,
        "explanation": "Ordre de grandeur."
      },
      {
        "content": "L’acide palmitique est donné à environ 256 Da.",
        "correct": true,
        "explanation": "Valeur citée."
      },
      {
        "content": "La densité est décrite comme inférieure à celle de l’eau.",
        "correct": true,
        "explanation": "Propriété."
      },
      {
        "content": "Tous les acides gras ont une densité très supérieure à celle de l’eau.",
        "correct": false,
        "explanation": "Le support dit l’inverse."
      }
    ],
    "explanation": "La faible densité contribue au comportement des acides gras en milieu aqueux."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La solubilité des acides gras :",
    "choices": [
      {
        "content": "À partir de 8 carbones, ils sont décrits comme totalement insolubles dans l’eau.",
        "correct": true,
        "explanation": "Seuil du support."
      },
      {
        "content": "Ils sont solubles dans des solvants organiques comme benzène, éther ou chloroforme.",
        "correct": true,
        "explanation": "Exemples."
      },
      {
        "content": "La longue chaîne carbonée contribue à l’insolubilité aqueuse.",
        "correct": true,
        "explanation": "Lien structure/propriété."
      },
      {
        "content": "Ils deviennent tous très solubles dans l’eau au-delà de 8 carbones.",
        "correct": false,
        "explanation": "C’est l’inverse."
      }
    ],
    "explanation": "La longueur de la chaîne renforce le caractère hydrophobe."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "En milieu aqueux, les acides gras :",
    "choices": [
      {
        "content": "Peuvent surnager à la surface de l’eau.",
        "correct": true,
        "explanation": "Densité inférieure."
      },
      {
        "content": "Peuvent former une couche monomoléculaire.",
        "correct": true,
        "explanation": "Comportement décrit."
      },
      {
        "content": "Peuvent former des micelles après agitation, souvent peu stables.",
        "correct": true,
        "explanation": "Comportement cité."
      },
      {
        "content": "Se dissolvent toujours complètement sous forme moléculaire.",
        "correct": false,
        "explanation": "Ils sont peu ou pas solubles selon la longueur."
      }
    ],
    "explanation": "Le comportement interfacial découle des deux pôles de la molécule."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le point de fusion des acides gras :",
    "choices": [
      {
        "content": "Augmente globalement avec le nombre de carbones.",
        "correct": true,
        "explanation": "Premier facteur."
      },
      {
        "content": "Diminue avec la présence de doubles liaisons.",
        "correct": true,
        "explanation": "Deuxième facteur."
      },
      {
        "content": "Dépend donc de la longueur et de l’insaturation.",
        "correct": true,
        "explanation": "Synthèse."
      },
      {
        "content": "Est indépendant de la structure de la chaîne.",
        "correct": false,
        "explanation": "Deux caractères structuraux sont déterminants."
      }
    ],
    "explanation": "Longueur de chaîne et désaturation influencent en sens opposé le point de fusion."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’acide oléique 18:1 est cité comme :",
    "choices": [
      {
        "content": "Liquide à température ambiante.",
        "correct": true,
        "explanation": "Exemple physique."
      },
      {
        "content": "Un acide gras désaturé.",
        "correct": true,
        "explanation": "18:1."
      },
      {
        "content": "Un exemple illustrant l’abaissement du point de fusion par une double liaison.",
        "correct": true,
        "explanation": "Lien propriété."
      },
      {
        "content": "Un acide gras saturé solide à 37 °C.",
        "correct": false,
        "explanation": "Il est monodésaturé."
      }
    ],
    "explanation": "L’oléique illustre l’effet des doubles liaisons sur le point de fusion."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour les acides gras saturés, le support indique :",
    "choices": [
      {
        "content": "C < 5 : liquides à température ambiante.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "5 < C < 10 : solides à température ambiante mais liquides à 37 °C.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "C > 10 : solides à 37 °C.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Tous sont liquides à 37 °C quelle que soit la longueur.",
        "correct": false,
        "explanation": "Le support distingue les longueurs."
      }
    ],
    "explanation": "La longueur de chaîne modifie fortement l’état physique des acides gras saturés."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La réaction d’estérification d’un acide gras :",
    "choices": [
      {
        "content": "Fait réagir sa fonction acide avec une fonction alcool.",
        "correct": true,
        "explanation": "Principe."
      },
      {
        "content": "Conduit à la formation d’un ester.",
        "correct": true,
        "explanation": "Produit."
      },
      {
        "content": "Est décrite comme très fréquente in vivo.",
        "correct": true,
        "explanation": "Importance."
      },
      {
        "content": "Transforme nécessairement l’acide gras en protéine.",
        "correct": false,
        "explanation": "Elle forme un ester lipidique."
      }
    ],
    "explanation": "L’estérification relie ce chapitre aux glycérides et autres lipides complexes."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les rôles biologiques des acides gras cités :",
    "choices": [
      {
        "content": "Rôle structural dans les membranes.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "Rôle énergétique par oxydation et réserve.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "Rôle métabolique comme précurseurs de médiateurs/hormones pour certains acides gras tels que l’arachidonique.",
        "correct": true,
        "explanation": "Rôle du support."
      },
      {
        "content": "Absence totale de rôle cellulaire.",
        "correct": false,
        "explanation": "Plusieurs rôles sont cités."
      }
    ],
    "explanation": "Les acides gras ont des fonctions structurales, énergétiques et métaboliques."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des acides gras trans, la fiche :",
    "choices": [
      {
        "content": "Les associe notamment à des graisses industrielles et produits transformés.",
        "correct": true,
        "explanation": "Contexte."
      },
      {
        "content": "Mentionne des effets délétères pour la santé.",
        "correct": true,
        "explanation": "Position du support."
      },
      {
        "content": "Cite notamment des maladies cardiovasculaires et cancers parmi les risques.",
        "correct": true,
        "explanation": "Exemples du support."
      },
      {
        "content": "Les présente comme toujours indispensables à l’alimentation.",
        "correct": false,
        "explanation": "Ce n’est pas le message du support."
      }
    ],
    "explanation": "Il faut reprendre ce point comme une affirmation du support local, sans extrapoler au-delà."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel changement structural abaisse le point de fusion d’un acide gras selon la fiche ?",
    "choices": [
      {
        "content": "L’introduction d’une ou plusieurs doubles liaisons.",
        "correct": true,
        "explanation": "Effet de la désaturation."
      },
      {
        "content": "L’augmentation du nombre de carbones.",
        "correct": false,
        "explanation": "Elle augmente le point de fusion."
      },
      {
        "content": "La suppression du carboxyle.",
        "correct": false,
        "explanation": "Ce n’est plus le même type de molécule."
      },
      {
        "content": "La conversion en protéine.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "La désaturation abaisse le point de fusion."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer deux acides gras de même longueur, l’un saturé et l’autre désaturé :",
    "choices": [
      {
        "content": "Le désaturé aura tendance à avoir un point de fusion plus bas.",
        "correct": true,
        "explanation": "Effet des doubles liaisons."
      },
      {
        "content": "Le nombre de carbones est contrôlé dans la comparaison.",
        "correct": true,
        "explanation": "Même longueur."
      },
      {
        "content": "La présence de doubles liaisons constitue alors la variable structurale principale.",
        "correct": true,
        "explanation": "Raisonnement."
      },
      {
        "content": "Le désaturé aura forcément un point de fusion plus élevé.",
        "correct": false,
        "explanation": "Le support indique l’inverse."
      }
    ],
    "explanation": "À longueur égale, l’insaturation tend à abaisser le point de fusion."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer deux acides gras saturés de longueurs différentes :",
    "choices": [
      {
        "content": "Le plus long tend à avoir un point de fusion plus élevé.",
        "correct": true,
        "explanation": "Effet de la longueur."
      },
      {
        "content": "Le nombre de carbones est alors le facteur discriminant.",
        "correct": true,
        "explanation": "Comparaison."
      },
      {
        "content": "Cette tendance est cohérente avec le classement des états physiques des saturés.",
        "correct": true,
        "explanation": "Repères du support."
      },
      {
        "content": "Le plus long doit toujours fondre plus bas.",
        "correct": false,
        "explanation": "Le support donne la tendance inverse."
      }
    ],
    "explanation": "La longueur de chaîne augmente globalement le point de fusion."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un acide gras de 12 carbones en milieu aqueux :",
    "choices": [
      {
        "content": "Est au-delà du seuil de 8 carbones cité pour l’insolubilité dans l’eau.",
        "correct": true,
        "explanation": "Seuil."
      },
      {
        "content": "Présente une forte contribution hydrophobe de sa chaîne.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "Peut se comporter à l’interface eau/lipide plutôt que se dissoudre complètement.",
        "correct": true,
        "explanation": "Comportement."
      },
      {
        "content": "Est décrit comme très soluble dans l’eau.",
        "correct": false,
        "explanation": "Le support dit l’inverse au-delà de 8C."
      }
    ],
    "explanation": "La solubilité diminue avec l’importance de la chaîne hydrophobe."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La formation d’une couche monomoléculaire à la surface de l’eau s’explique par :",
    "choices": [
      {
        "content": "La faible densité des acides gras dans le modèle du support.",
        "correct": true,
        "explanation": "Ils surnagent."
      },
      {
        "content": "La coexistence d’un pôle hydrophile et d’une chaîne hydrophobe.",
        "correct": true,
        "explanation": "Orientation interfaciale."
      },
      {
        "content": "Le comportement amphiphile simplifié de la molécule.",
        "correct": true,
        "explanation": "Lien structure/propriété."
      },
      {
        "content": "Une solubilité aqueuse totale de la chaîne hydrocarbonée.",
        "correct": false,
        "explanation": "La chaîne est hydrophobe."
      }
    ],
    "explanation": "Les deux pôles orientent les acides gras à l’interface."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle masse moléculaire approximative, en daltons, est donnée pour l’acide palmitique ?",
    "answer": {
      "type": "number",
      "value": 256,
      "tolerance": 0
    },
    "explanation": "La fiche cite environ 256 Da pour l’acide palmitique."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À partir de combien de carbones la fiche décrit-elle les acides gras comme totalement insolubles dans l’eau ?",
    "answer": {
      "type": "number",
      "value": 8,
      "tolerance": 0
    },
    "explanation": "Le seuil cité est 8 carbones."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une membrane cellulaire, la présence de chaînes d’acides gras illustre surtout :",
    "choices": [
      {
        "content": "Le rôle structural des acides gras.",
        "correct": true,
        "explanation": "Rôle cité."
      },
      {
        "content": "La contribution de leurs chaînes carbonées à l’organisation lipidique.",
        "correct": true,
        "explanation": "Lien structure/fonction."
      },
      {
        "content": "Un contexte biologique direct du chapitre.",
        "correct": true,
        "explanation": "Exemple du support."
      },
      {
        "content": "Un rôle exclusivement glucidique.",
        "correct": false,
        "explanation": "Il s’agit de lipides."
      }
    ],
    "explanation": "Le rôle structural membranaire est un des trois grands rôles biologiques cités."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lorsqu’un acide gras est oxydé pour fournir de l’énergie :",
    "choices": [
      {
        "content": "Cela illustre son rôle énergétique.",
        "correct": true,
        "explanation": "Rôle cité."
      },
      {
        "content": "Le support associe les acides gras à une réserve d’énergie.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "La fonction est distincte de leur rôle structural membranaire.",
        "correct": true,
        "explanation": "Plusieurs fonctions coexistent."
      },
      {
        "content": "Cela prouve que tous les acides gras sont des enzymes.",
        "correct": false,
        "explanation": "Ce sont des substrats énergétiques, pas des enzymes."
      }
    ],
    "explanation": "Les acides gras peuvent être des composants structuraux et des sources d’énergie."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l’acide arachidonique évoqué dans cette fiche :",
    "choices": [
      {
        "content": "Il est cité comme exemple de précurseur métabolique.",
        "correct": true,
        "explanation": "Rôle biologique."
      },
      {
        "content": "Il prépare le lien avec les eicosanoïdes étudiés ensuite.",
        "correct": true,
        "explanation": "Organisation du cours."
      },
      {
        "content": "Ce rôle est distinct du simple stockage énergétique.",
        "correct": true,
        "explanation": "Fonction métabolique."
      },
      {
        "content": "Il est présenté comme une protéine membranaire.",
        "correct": false,
        "explanation": "C’est un acide gras."
      }
    ],
    "explanation": "Le chapitre annonce la fonction de précurseur métabolique de certains acides gras."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les graisses trans, il faut rester fidèle à la fiche :",
    "choices": [
      {
        "content": "Le support les relie aux produits industriels/transformés.",
        "correct": true,
        "explanation": "Contexte cité."
      },
      {
        "content": "Le support les qualifie de délétères pour la santé.",
        "correct": true,
        "explanation": "Affirmation locale."
      },
      {
        "content": "Les risques cités incluent maladies cardiovasculaires et cancers.",
        "correct": true,
        "explanation": "Exemples locaux."
      },
      {
        "content": "Le chapitre fournit un mécanisme clinique détaillé de chaque maladie.",
        "correct": false,
        "explanation": "Il ne développe pas ces mécanismes."
      }
    ],
    "explanation": "La bonne pratique éditoriale est de reprendre le niveau d’affirmation du support sans ajouter de clinique hors programme."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Sélectionnez exactement les trois grands rôles biologiques des acides gras cités dans la fiche.",
    "choices": [
      {
        "content": "Structural.",
        "correct": true,
        "explanation": "Membranes."
      },
      {
        "content": "Énergétique.",
        "correct": true,
        "explanation": "Oxydation/réserve."
      },
      {
        "content": "Métabolique.",
        "correct": true,
        "explanation": "Précurseurs."
      },
      {
        "content": "Rôle de traduction de l’ARNm.",
        "correct": false,
        "explanation": "Fonction protéique/ribosomale, non citée pour les acides gras."
      }
    ],
    "explanation": "Les trois axes sont structural, énergétique et métabolique."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Propriétés physiques, chimiques et biologiques des acides gras : sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Le point de fusion augmente avec la longueur de chaîne.",
        "correct": true,
        "explanation": "Tendance."
      },
      {
        "content": "Les doubles liaisons abaissent le point de fusion.",
        "correct": true,
        "explanation": "Tendance."
      },
      {
        "content": "Les acides gras ≥8C sont décrits comme insolubles dans l’eau.",
        "correct": true,
        "explanation": "Seuil."
      },
      {
        "content": "L’estérification forme un ester avec un alcool.",
        "correct": true,
        "explanation": "Réaction."
      },
      {
        "content": "Les acides gras ont un rôle énergétique.",
        "correct": true,
        "explanation": "Fonction."
      },
      {
        "content": "L’oléique 18:1 est saturé.",
        "correct": false,
        "explanation": "Monodésaturé."
      },
      {
        "content": "Tous les acides gras sont plus denses que l’eau.",
        "correct": false,
        "explanation": "Le support les décrit moins denses."
      },
      {
        "content": "Une double liaison augmente toujours le point de fusion.",
        "correct": false,
        "explanation": "Elle l’abaisse."
      },
      {
        "content": "Les acides gras trans sont présentés comme bénéfiques sans réserve.",
        "correct": false,
        "explanation": "Le support les qualifie de délétères."
      },
      {
        "content": "Les acides gras n’ont aucun rôle membranaire.",
        "correct": false,
        "explanation": "Rôle structural cité."
      }
    ],
    "explanation": "Cette QRPL consolide propriétés physiques, chimiques et biologiques."
  }
];
