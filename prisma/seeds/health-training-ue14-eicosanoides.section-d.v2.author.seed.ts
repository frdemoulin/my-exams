import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Les eicosanoïdes — Section D
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH5_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des leucotriènes de série 4 dérivés de l’acide arachidonique :",
    "choices": [
      {
        "content": "Sont des dérivés d’acides eicosanoïques à 20 carbones.",
        "correct": true,
        "explanation": "Structure générale."
      },
      {
        "content": "Contiennent quatre doubles liaisons.",
        "correct": true,
        "explanation": "L'indice 4 correspond au nombre de doubles liaisons."
      },
      {
        "content": "Présentent trois doubles liaisons conjuguées formant un système triénique.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Sont des glucanes de réserve.",
        "correct": false,
        "explanation": "Dérivés lipidiques."
      }
    ],
    "explanation": "Le nom « leucotriène » renvoie historiquement aux leucocytes et au système de trois doubles liaisons conjuguées."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les cellules capables de synthétiser des leucotriènes comprennent :",
    "choices": [
      {
        "content": "Leucocytes.",
        "correct": true,
        "explanation": "Les leucocytes sont les principales cellules de synthèse des leucotriènes."
      },
      {
        "content": "Mastocytes.",
        "correct": true,
        "explanation": "Les mastocytes synthétisent notamment des leucotriènes cystéinylés."
      },
      {
        "content": "Macrophages et granulocytes.",
        "correct": true,
        "explanation": "Ces leucocytes disposent de la machinerie de la voie 5-lipoxygénase."
      },
      {
        "content": "Uniquement les adipocytes.",
        "correct": false,
        "explanation": "La synthèse a lieu principalement dans différentes cellules immunitaires."
      }
    ],
    "explanation": "La synthèse de novo des leucotriènes a lieu surtout dans les leucocytes ; d'autres cellules peuvent participer à des biosynthèses transcellulaires."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les effets des leucotriènes sur les muscles lisses :",
    "choices": [
      {
        "content": "Vasoconstriction.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "Bronchoconstriction.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "Actions sur les muscles lisses.",
        "correct": true,
        "explanation": "Contexte."
      },
      {
        "content": "Vasodilatation obligatoire de tous les leucotriènes.",
        "correct": false,
        "explanation": "Les effets varient selon le leucotriène et le tissu ; les cystéinyl-leucotriènes sont notamment bronchoconstricteurs."
      }
    ],
    "explanation": "Les leucotriènes sont notamment reliés à des effets constricteurs."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les effets immunitaires des leucotriènes :",
    "choices": [
      {
        "content": "Chimiotactisme.",
        "correct": true,
        "explanation": "Effet."
      },
      {
        "content": "Recrutement et activation de leucocytes.",
        "correct": true,
        "explanation": "LTB₄ est notamment un puissant agent chimiotactique des neutrophiles."
      },
      {
        "content": "Participation à des réponses immunitaires.",
        "correct": true,
        "explanation": "Contexte."
      },
      {
        "content": "Suppression obligatoire de toute activité leucocytaire.",
        "correct": false,
        "explanation": "Plusieurs leucotriènes amplifient au contraire des réponses inflammatoires."
      }
    ],
    "explanation": "Les leucotriènes relient lipidologie et réponse immunitaire."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le leucotriène A₄ (LTA₄) :",
    "choices": [
      {
        "content": "Est formé à partir de l’acide arachidonique.",
        "correct": true,
        "explanation": "Précurseur."
      },
      {
        "content": "Fait intervenir la 5-lipoxygénase.",
        "correct": true,
        "explanation": "Enzyme."
      },
      {
        "content": "Possède un pont époxyde en C5–C6.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "Est formé directement par la voie COX.",
        "correct": false,
        "explanation": "Il relève de la lipoxygénase."
      }
    ],
    "explanation": "LTA₄ est un intermédiaire central de la branche leucotriène/lipoxine."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À partir de LTA₄ :",
    "choices": [
      {
        "content": "Des lipoxines peuvent être formées lors d’une coopération enzymatique entre plusieurs cellules.",
        "correct": true,
        "explanation": "La biosynthèse transcellulaire des lipoxines mobilise successivement plusieurs lipoxygénases."
      },
      {
        "content": "LTB₄ peut être formé.",
        "correct": true,
        "explanation": "L'hydrolyse de LTA₄ forme LTB₄."
      },
      {
        "content": "D’autres leucotriènes peuvent être formés.",
        "correct": true,
        "explanation": "Voies en aval."
      },
      {
        "content": "Aucune autre molécule ne peut être obtenue.",
        "correct": false,
        "explanation": "LTA₄ est un précurseur de plusieurs produits."
      }
    ],
    "explanation": "LTA₄ est un carrefour de synthèse pour plusieurs eicosanoïdes."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La voie menant à LTC₄, LTD₄ et LTE₄ :",
    "choices": [
      {
        "content": "Fait intervenir le glutathion.",
        "correct": true,
        "explanation": "La conjugaison de LTA₄ au glutathion forme LTC₄."
      },
      {
        "content": "S’accompagne d’un clivage progressif du motif ajouté.",
        "correct": true,
        "explanation": "Évolution C4→D4→E4."
      },
      {
        "content": "Conduit à plusieurs leucotriènes distincts.",
        "correct": true,
        "explanation": "Produits."
      },
      {
        "content": "Est une voie de synthèse du glycogène.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Le glutathion est un repère structural de la série LTC₄/LTD₄/LTE₄."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle enzyme catalyse les étapes menant de l’acide arachidonique à LTA₄ ?",
    "choices": [
      {
        "content": "5-lipoxygénase.",
        "correct": true,
        "explanation": "La 5-lipoxygénase transforme successivement l'acide arachidonique en 5-HPETE puis LTA₄."
      },
      {
        "content": "COX uniquement.",
        "correct": false,
        "explanation": "Voie prostanoïde."
      },
      {
        "content": "Lactase.",
        "correct": false,
        "explanation": "Enzyme digestive."
      },
      {
        "content": "Glycogène synthase.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "La 5-lipoxygénase conduit à LTA₄."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel eicosanoïde appartient à la famille des lipoxines ?",
    "choices": [
      {
        "content": "LXA₄.",
        "correct": true,
        "explanation": "LXA₄ signifie lipoxine A₄."
      },
      {
        "content": "TXA₂.",
        "correct": false,
        "explanation": "Prostanoïde de voie COX."
      },
      {
        "content": "PGI₂.",
        "correct": false,
        "explanation": "Prostacycline."
      },
      {
        "content": "PGE₁.",
        "correct": false,
        "explanation": "Prostaglandine."
      }
    ],
    "explanation": "LXA₄ est une lipoxine issue de voies séquentielles impliquant plusieurs lipoxygénases."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le système triénique des leucotriènes signifie :",
    "choices": [
      {
        "content": "Trois doubles liaisons conjuguées.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Une alternance de doubles et simples liaisons sur le segment concerné.",
        "correct": true,
        "explanation": "Conjugaison."
      },
      {
        "content": "Un repère structural de la famille.",
        "correct": true,
        "explanation": "Caractéristique."
      },
      {
        "content": "Trois fonctions amines.",
        "correct": false,
        "explanation": "Le terme renvoie aux doubles liaisons."
      }
    ],
    "explanation": "Le « triène » renvoie aux trois doubles liaisons conjuguées."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un médiateur produit par des mastocytes provoque une bronchoconstriction et appartient à une famille à système triénique. Il est cohérent avec :",
    "choices": [
      {
        "content": "Un leucotriène.",
        "correct": true,
        "explanation": "Indices concordants."
      },
      {
        "content": "Un dérivé eicosanoïque C20.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "Un produit d’une voie lipoxygénase.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "Un glucane de réserve.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Les cystéinyl-leucotriènes sont d'importants médiateurs de la bronchoconstriction."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une réponse immunitaire, un eicosanoïde augmente le chimiotactisme. La famille la plus cohérente est :",
    "choices": [
      {
        "content": "Les leucotriènes.",
        "correct": true,
        "explanation": "LTB₄ stimule notamment le chimiotactisme des neutrophiles."
      },
      {
        "content": "Une famille synthétisée notamment par des leucocytes/macrophages.",
        "correct": true,
        "explanation": "Cellules."
      },
      {
        "content": "Une branche des lipoxygénases.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "Les triglycérides alimentaires uniquement.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Le chimiotactisme est une des fonctions immunitaires attribuées aux leucotriènes."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "LTA₄ fonctionne comme un carrefour parce que :",
    "choices": [
      {
        "content": "Il peut conduire à LTB₄.",
        "correct": true,
        "explanation": "Branche."
      },
      {
        "content": "Il peut conduire à LXA₄.",
        "correct": true,
        "explanation": "Une voie transcellulaire peut convertir LTA₄ en lipoxines, notamment via la 12-lipoxygénase plaquettaire."
      },
      {
        "content": "Il participe aussi à une voie menant à LTC₄/LTD₄/LTE₄.",
        "correct": true,
        "explanation": "Branche."
      },
      {
        "content": "Il ne possède aucun produit en aval.",
        "correct": false,
        "explanation": "Plusieurs produits en dérivent."
      }
    ],
    "explanation": "LTA₄ distribue plusieurs branches de la voie lipoxygénase."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La présence de glutathion dans la voie des leucotriènes :",
    "choices": [
      {
        "content": "Concerne notamment LTC₄.",
        "correct": true,
        "explanation": "Conjugaison initiale."
      },
      {
        "content": "Est suivie de clivages progressifs conduisant à LTD₄ puis LTE₄.",
        "correct": true,
        "explanation": "Évolution."
      },
      {
        "content": "Fournit un repère pour distinguer cette branche de LTB₄.",
        "correct": true,
        "explanation": "Comparaison."
      },
      {
        "content": "Transforme directement le leucotriène en glycogène.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "La conjugaison de LTA₄ au glutathion forme LTC₄, précurseur de LTD₄ puis LTE₄."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle enzyme forme LTA₄ à partir de l’acide arachidonique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "5-lipoxygenase",
        "5-lipoxygénase",
        "5 lipoxygenase",
        "5 lipoxygénase",
        "la 5-lipoxygénase"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit de la 5-lipoxygénase."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel tripeptide est incorporé dans la voie menant notamment à LTC₄ ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glutathion",
        "le glutathion"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit du glutathion."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de doubles liaisons conjuguées constituent le système triénique des leucotriènes ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Un triène comporte trois doubles liaisons conjuguées."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer voie COX et voie 5-lipoxygénase :",
    "choices": [
      {
        "content": "COX conduit aux prostanoïdes.",
        "correct": true,
        "explanation": "Branche."
      },
      {
        "content": "5-lipoxygénase conduit à LTA₄.",
        "correct": true,
        "explanation": "Branche."
      },
      {
        "content": "Les deux utilisent l’acide arachidonique comme précurseur dans le schéma.",
        "correct": true,
        "explanation": "Point commun."
      },
      {
        "content": "Les deux conduisent exclusivement au même produit final.",
        "correct": false,
        "explanation": "Branches différentes."
      }
    ],
    "explanation": "L’acide arachidonique est un précurseur commun orienté par des enzymes différentes."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La bronchoconstriction peut être provoquée par :",
    "choices": [
      {
        "content": "Des leucotriènes.",
        "correct": true,
        "explanation": "Effet de famille."
      },
      {
        "content": "De PGF₂α parmi les exemples de prostaglandines.",
        "correct": true,
        "explanation": "Les cystéinyl-leucotriènes peuvent provoquer une bronchoconstriction."
      },
      {
        "content": "De médiateurs lipidiques pouvant avoir des effets sur les muscles lisses.",
        "correct": true,
        "explanation": "Point transversal."
      },
      {
        "content": "Exclusivement de l’acide hyaluronique.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Des familles différentes d’eicosanoïdes peuvent partager certains effets physiologiques."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule comporte quatre doubles liaisons dont trois conjuguées et un pont époxyde C5–C6. Le profil correspond particulièrement à :",
    "choices": [
      {
        "content": "LTA₄.",
        "correct": true,
        "explanation": "LTA₄ contient un époxyde entre C5 et C6."
      },
      {
        "content": "Un leucotriène.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "Un produit de la 5-lipoxygénase.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "PGE₂.",
        "correct": false,
        "explanation": "Prostaglandine de voie COX."
      }
    ],
    "explanation": "LTA₄ est un intermédiaire époxyde instable de la voie de la 5-lipoxygénase."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Sélectionnez exactement les trois produits pouvant être reliés en aval de LTA₄.",
    "choices": [
      {
        "content": "LTB₄.",
        "correct": true,
        "explanation": "Branche."
      },
      {
        "content": "LXA₄.",
        "correct": true,
        "explanation": "Branche."
      },
      {
        "content": "LTC₄ puis LTD₄/LTE₄.",
        "correct": true,
        "explanation": "Branche."
      },
      {
        "content": "Glycogène.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "LTA₄ est un précurseur de plusieurs branches leucotriène/lipoxine."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Leucotriènes, LTA₄ et branche du glutathion : sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Les leucotriènes sont des dérivés C20.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "Les leucotriènes de série 4 possèdent quatre doubles liaisons.",
        "correct": true,
        "explanation": "L'indice de série indique le nombre de doubles liaisons."
      },
      {
        "content": "Trois doubles liaisons sont conjuguées.",
        "correct": true,
        "explanation": "Triène."
      },
      {
        "content": "LTA₄ est formé par la 5-lipoxygénase.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "Le glutathion intervient dans la branche LTC₄/LTD₄/LTE₄.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "LTA₄ est un produit direct de COX.",
        "correct": false,
        "explanation": "5-lipoxygénase."
      },
      {
        "content": "Les leucotriènes n’ont aucun effet sur les muscles lisses.",
        "correct": false,
        "explanation": "Bronchoconstriction/vasoconstriction."
      },
      {
        "content": "Les leucotriènes ne sont jamais produits par des leucocytes.",
        "correct": false,
        "explanation": "Ils le sont."
      },
      {
        "content": "LXA₄ est un thromboxane.",
        "correct": false,
        "explanation": "Lipoxine."
      },
      {
        "content": "Les leucotriènes n’interviennent jamais dans le chimiotactisme.",
        "correct": false,
        "explanation": "LTB₄ est un puissant agent chimiotactique, notamment pour les neutrophiles."
      }
    ],
    "explanation": "Cette QRPL consolide structure, cellules, effets et voies des leucotriènes."
  }
];
