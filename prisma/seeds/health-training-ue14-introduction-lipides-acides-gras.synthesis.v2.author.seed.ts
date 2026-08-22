import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Introduction générale sur les lipides et acides gras — Synthèse
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH4_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule R–COOH à longue chaîne :",
    "choices": [
      {
        "content": "Peut être un acide gras.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Possède un pôle hydrophile au niveau du carboxyle.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "Possède une chaîne hydrophobe.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "Est nécessairement une protéine.",
        "correct": false,
        "explanation": "C’est un lipide simple dans cette classification."
      }
    ],
    "explanation": "Un acide gras associe une fonction carboxylique hydrophile à une chaîne hydrocarbonée hydrophobe."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer palmitique et stéarique :",
    "choices": [
      {
        "content": "Palmitique = 16:0.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Stéarique = 18:0.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Les deux sont saturés.",
        "correct": true,
        "explanation": "0 double liaison."
      },
      {
        "content": "Les deux sont ω3.",
        "correct": false,
        "explanation": "La série ω n’est pas définie ainsi pour ces saturés."
      }
    ],
    "explanation": "Palmitique et stéarique sont les repères saturés majeurs."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer oléique et palmitoléique :",
    "choices": [
      {
        "content": "Les deux sont monodésaturés Δ9.",
        "correct": true,
        "explanation": "Point commun."
      },
      {
        "content": "Oléique = 18:1 ω9.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Palmitoléique = 16:1 ω7.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Ils ont la même série ω.",
        "correct": false,
        "explanation": "ω9 versus ω7."
      }
    ],
    "explanation": "Une même position Δ peut correspondre à une série ω différente."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer acides linoléique et α-linolénique :",
    "choices": [
      {
        "content": "Les deux sont polyinsaturés.",
        "correct": true,
        "explanation": "2 et 3 DL."
      },
      {
        "content": "Le linoléique est ω6.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "L’acide α-linolénique est ω3.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Les deux sont saturés.",
        "correct": false,
        "explanation": "Ils sont désaturés."
      }
    ],
    "explanation": "Les acides linoléique et α-linolénique sont les précurseurs indispensables des familles ω6 et ω3."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un contexte nutritionnel, la notion d’acide gras indispensable signifie :",
    "choices": [
      {
        "content": "Que l’organisme mammifère ne peut pas le synthétiser dans le cadre étudié.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Qu’un apport alimentaire est nécessaire.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Que les acides linoléique et α-linolénique en sont des exemples.",
        "correct": true,
        "explanation": "Ces deux acides gras polyinsaturés doivent être apportés par l’alimentation."
      },
      {
        "content": "Qu’il s’agit nécessairement d’un acide gras saturé.",
        "correct": false,
        "explanation": "Les exemples sont polyinsaturés."
      }
    ],
    "explanation": "Le contexte santé reste strictement relié à l’indispensabilité enseignée."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour un acide gras, une augmentation du nombre de carbones :",
    "choices": [
      {
        "content": "Tend à augmenter le point de fusion.",
        "correct": true,
        "explanation": "Propriété."
      },
      {
        "content": "Renforce la contribution de la chaîne hydrophobe.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "Peut s’accompagner d’une moindre solubilité aqueuse.",
        "correct": true,
        "explanation": "Tendance cohérente."
      },
      {
        "content": "Transforme automatiquement un saturé en polyinsaturé.",
        "correct": false,
        "explanation": "Longueur et insaturation sont indépendantes."
      }
    ],
    "explanation": "Longueur et insaturation sont deux paramètres distincts aux effets différents."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La présence de doubles liaisons :",
    "choices": [
      {
        "content": "Classe l’acide gras comme désaturé.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Tend à abaisser son point de fusion.",
        "correct": true,
        "explanation": "Propriété."
      },
      {
        "content": "Peut être décrite par des positions Δ et une série ω.",
        "correct": true,
        "explanation": "Nomenclature."
      },
      {
        "content": "Augmente obligatoirement le nombre total de carbones.",
        "correct": false,
        "explanation": "Le nombre de carbones est indépendant."
      }
    ],
    "explanation": "La désaturation intervient dans la nomenclature comme dans les propriétés physiques."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide gras est noté 18:2 Δ9,12 et appartient à la série ω6 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide linoleique",
        "acide linoléique",
        "linoleique",
        "linoléique",
        "l'acide linoléique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit de l’acide linoléique."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux facteurs structuraux majeurs qui déterminent le point de fusion d’un acide gras.",
    "choices": [
      {
        "content": "Nombre de carbones.",
        "correct": true,
        "explanation": "La longueur augmente le point de fusion."
      },
      {
        "content": "Présence de doubles liaisons.",
        "correct": true,
        "explanation": "Les doubles liaisons l’abaissent."
      },
      {
        "content": "Nombre de fonctions amines.",
        "correct": false,
        "explanation": "Non pertinent."
      },
      {
        "content": "Présence d’un noyau stérane.",
        "correct": false,
        "explanation": "Autre famille."
      }
    ],
    "explanation": "Longueur de chaîne et désaturation sont les deux facteurs retenus."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour cette synthèse appliquée des lipides et acides gras, sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Palmitique = 16:0.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Stéarique = 18:0.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Oléique = 18:1 ω9.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Linoléique = 18:2 ω6.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Linolénique = 18:3 ω3.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Palmitoléique = 18:1.",
        "correct": false,
        "explanation": "16:1."
      },
      {
        "content": "Le carboxyle est le pôle hydrophobe.",
        "correct": false,
        "explanation": "Hydrophile."
      },
      {
        "content": "La série ω se compte depuis le carboxyle.",
        "correct": false,
        "explanation": "Depuis l’extrémité ω."
      },
      {
        "content": "Les doubles liaisons augmentent le point de fusion.",
        "correct": false,
        "explanation": "Elles l’abaissent."
      },
      {
        "content": "Les acides gras n’ont aucun rôle énergétique.",
        "correct": false,
        "explanation": "L'oxydation des acides gras fournit de l'énergie."
      }
    ],
    "explanation": "La synthèse PRACTICE rassemble les principaux repères structuraux et fonctionnels."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "L’acide oléique 18:1 Δ9 est liquide à température ambiante. Cette observation est cohérente avec :",
    "choices": [
      {
        "content": "L’identification de l’acide oléique.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "La présence d’une double liaison.",
        "correct": true,
        "explanation": "Désaturation."
      },
      {
        "content": "L’abaissement du point de fusion par l’insaturation.",
        "correct": true,
        "explanation": "Lien propriété."
      },
      {
        "content": "Le caractère saturé 18:0.",
        "correct": false,
        "explanation": "Ce serait l’acide stéarique."
      }
    ],
    "explanation": "La structure du 18:1 explique sa propriété physique relative."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un acide gras 16:1 Δ9 est comparé à un 18:1 Δ9. Quelles différences sont attendues ?",
    "choices": [
      {
        "content": "Le premier est palmitoléique, le second oléique.",
        "correct": true,
        "explanation": "Noms."
      },
      {
        "content": "Leurs séries ω sont respectivement 7 et 9.",
        "correct": true,
        "explanation": "Conversion."
      },
      {
        "content": "Ils ont chacun une seule double liaison.",
        "correct": true,
        "explanation": "Notation :1."
      },
      {
        "content": "Ils ont la même longueur de chaîne.",
        "correct": false,
        "explanation": "16 versus 18 carbones."
      }
    ],
    "explanation": "Cette question combine nomenclature, longueur et série ω."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un acide gras indispensable 18:3 Δ9,12,15 doit être apporté par l’alimentation. On peut l’identifier comme :",
    "choices": [
      {
        "content": "Acide α-linolénique.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Acide gras polyinsaturé.",
        "correct": true,
        "explanation": "Trois doubles liaisons."
      },
      {
        "content": "Acide gras de série ω3.",
        "correct": true,
        "explanation": "Série."
      },
      {
        "content": "Acide stéarique.",
        "correct": false,
        "explanation": "18:0."
      }
    ],
    "explanation": "L’acide α-linolénique combine une structure 18:3 n-3 avec un caractère nutritionnel indispensable."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un acide gras 18:2 Δ9,12 indispensable est identifié. On peut conclure :",
    "choices": [
      {
        "content": "Il s’agit du linoléique.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Il appartient à la série ω6.",
        "correct": true,
        "explanation": "Série."
      },
      {
        "content": "Il possède deux doubles liaisons.",
        "correct": true,
        "explanation": "18:2."
      },
      {
        "content": "Il est saturé.",
        "correct": false,
        "explanation": "Il est polyinsaturé."
      }
    ],
    "explanation": "Le linoléique est le second exemple d’acide gras indispensable."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une molécule lipidique flotte à la surface de l’eau et forme une couche monomoléculaire. Cela est cohérent avec :",
    "choices": [
      {
        "content": "Une densité inférieure à celle de l’eau.",
        "correct": true,
        "explanation": "Propriété."
      },
      {
        "content": "Une tête hydrophile et une chaîne hydrophobe.",
        "correct": true,
        "explanation": "Architecture."
      },
      {
        "content": "Un comportement interfacial des acides gras.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Une solubilité complète de la longue chaîne dans l’eau.",
        "correct": false,
        "explanation": "La chaîne est hydrophobe."
      }
    ],
    "explanation": "Les propriétés physiques découlent directement de la structure bipolaire simplifiée."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un produit transformé contient des acides gras trans. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Certains procédés industriels et produits transformés peuvent en constituer une source.",
        "correct": true,
        "explanation": "Source."
      },
      {
        "content": "Une consommation élevée augmente le risque cardiovasculaire.",
        "correct": true,
        "explanation": "Source."
      },
      {
        "content": "L’OMS recommande de limiter leur apport à moins de 1 % de l’apport énergétique total.",
        "correct": true,
        "explanation": "Source."
      },
      {
        "content": "Ils sont indispensables et doivent représenter une part importante de l’apport énergétique.",
        "correct": false,
        "explanation": "Il n’entre pas dans ce niveau clinique."
      }
    ],
    "explanation": "Les acides gras trans n’ont pas de bénéfice nutritionnel connu et leur consommation augmente le risque cardiovasculaire."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Un acide gras saturé à 18 carbones est comparé à un acide gras saturé à 16 carbones. Combien de carbones supplémentaires possède le premier ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "18 − 16 = 2 carbones."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel est le terme utilisé pour le carbone terminal opposé au carboxyle ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "omega",
        "oméga",
        "carbone omega",
        "carbone oméga",
        "ω"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit du carbone oméga."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un acide gras joue un rôle à la fois membranaire et énergétique. Cela illustre :",
    "choices": [
      {
        "content": "La pluralité des rôles biologiques des acides gras.",
        "correct": true,
        "explanation": "Plusieurs fonctions."
      },
      {
        "content": "Un rôle structural dans les membranes.",
        "correct": true,
        "explanation": "Les chaînes acyles contribuent à la structure des lipides membranaires."
      },
      {
        "content": "Un rôle énergétique via l’oxydation/réserve.",
        "correct": true,
        "explanation": "L'oxydation et le stockage sous forme de triacylglycérols illustrent le rôle énergétique."
      },
      {
        "content": "Une contradiction rendant la molécule impossible.",
        "correct": false,
        "explanation": "Une même famille peut avoir plusieurs rôles."
      }
    ],
    "explanation": "Un même acide gras peut contribuer à la structure membranaire et servir de substrat énergétique."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "L’estérification d’un acide gras permet de former des lipides complexes parce que :",
    "choices": [
      {
        "content": "La fonction carboxylique peut réagir avec un alcool.",
        "correct": true,
        "explanation": "Principe."
      },
      {
        "content": "Un ester est formé.",
        "correct": true,
        "explanation": "Produit."
      },
      {
        "content": "De nombreux lipides physiologiques comportent des liaisons ester.",
        "correct": true,
        "explanation": "Lien pédagogique."
      },
      {
        "content": "La réaction supprime tous les atomes de carbone.",
        "correct": false,
        "explanation": "Impossible."
      }
    ],
    "explanation": "L’estérification est une charnière entre acides gras et lipides dérivés."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Synthèse finale : sélectionnez exactement les trois associations complètes correctes.",
    "choices": [
      {
        "content": "18:1 Δ9 — oléique — ω9.",
        "correct": true,
        "explanation": "Association."
      },
      {
        "content": "18:2 Δ9,12 — linoléique — ω6.",
        "correct": true,
        "explanation": "Association."
      },
      {
        "content": "18:3 Δ9,12,15 — α-linolénique — ω3.",
        "correct": true,
        "explanation": "Association."
      },
      {
        "content": "16:0 — stéarique — ω3.",
        "correct": false,
        "explanation": "16:0 est palmitique, saturé."
      }
    ],
    "explanation": "La notation Δ, le nom usuel et la série ω décrivent de façon complémentaire un acide gras."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour la synthèse finale de maîtrise des lipides et acides gras, sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Le C1 est le carbone carboxylique.",
        "correct": true,
        "explanation": "Numérotation."
      },
      {
        "content": "Le carbone α est C2.",
        "correct": true,
        "explanation": "Numérotation."
      },
      {
        "content": "Palmitique = 16:0.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Oléique = 18:1 ω9.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Linolénique = 18:3 ω3.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Le carbone ω est le carbone carboxylique.",
        "correct": false,
        "explanation": "Extrémité opposée."
      },
      {
        "content": "Stéarique = 16:0.",
        "correct": false,
        "explanation": "18:0."
      },
      {
        "content": "Linoléique = ω3.",
        "correct": false,
        "explanation": "ω6."
      },
      {
        "content": "Les doubles liaisons augmentent le point de fusion.",
        "correct": false,
        "explanation": "Elles l’abaissent."
      },
      {
        "content": "Les acides gras sont tous très solubles dans l’eau au-delà de 8C.",
        "correct": false,
        "explanation": "Ils sont décrits comme insolubles."
      }
    ],
    "explanation": "Le MASTER final mobilise nomenclature, propriétés et rôles biologiques."
  }
];
