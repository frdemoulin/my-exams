import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Les eicosanoïdes — Section A — Eicosanoïdes, acide arachidonique et voies COX/LOX */
export const UE14_BIOCH_CH5_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les eicosanoïdes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils n'ont aucun rôle dans l'inflammation ni l'hémostase.",
        "correct": false,
        "explanation": "Plusieurs eicosanoïdes modulent inflammation, tonus vasculaire et fonction plaquettaire."
      },
      {
        "content": "Ils comprennent notamment prostanoïdes, leucotriènes et lipoxines.",
        "correct": true,
        "explanation": "Ce sont les grandes familles étudiées."
      },
      {
        "content": "Ce sont tous des protéines enzymatiques.",
        "correct": false,
        "explanation": "Ce sont des médiateurs lipidiques."
      },
      {
        "content": "Leurs effets dépendent du médiateur et du tissu cible.",
        "correct": true,
        "explanation": "Des médiateurs proches peuvent avoir des effets opposés."
      },
      {
        "content": "Ils possèdent tous exactement la même structure cyclique.",
        "correct": false,
        "explanation": "Les leucotriènes, par exemple, ne partagent pas le cycle des prostanoïdes."
      }
    ],
    "explanation": "Les eicosanoïdes sont des médiateurs lipidiques issus de précurseurs C20 ou voisins, à action généralement locale et brève."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de l'acide arachidonique, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Il est un acide gras saturé.",
        "correct": false,
        "explanation": "Il possède quatre doubles liaisons."
      },
      {
        "content": "Il ne peut donner aucun médiateur lipidique.",
        "correct": false,
        "explanation": "Il est au contraire un précurseur central."
      },
      {
        "content": "Il appartient à la série n-3.",
        "correct": false,
        "explanation": "Il appartient à n-6."
      },
      {
        "content": "Il est noté 18:3 n-3.",
        "correct": false,
        "explanation": "Cela décrit l'alpha-linolénique."
      },
      {
        "content": "Il comporte 20 carbones et 4 doubles liaisons.",
        "correct": true,
        "explanation": "Sa notation est 20:4."
      }
    ],
    "explanation": "L'acide arachidonique est un acide gras 20:4 Δ5,8,11,14 de la série n-6."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle enzyme peut libérer l'acide arachidonique à partir de phospholipides membranaires ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "phospholipase A2",
        "PLA2",
        "phospholipase A₂"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La phospholipase A2 peut libérer l'acide arachidonique des phospholipides membranaires avant sa transformation en eicosanoïdes."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la voie cyclo-oxygénase COX, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'aspirine et l'ibuprofène inhibent la cyclo-oxygénase.",
        "correct": true,
        "explanation": "Ils diminuent la synthèse de prostanoïdes."
      },
      {
        "content": "Les prostanoïdes ne dérivent jamais de COX.",
        "correct": false,
        "explanation": "Ils en sont les produits majeurs."
      },
      {
        "content": "La voie COX ne produit pas directement les leucotriènes.",
        "correct": true,
        "explanation": "Les leucotriènes relèvent surtout de la voie 5-lipoxygénase."
      },
      {
        "content": "L'aspirine stimule la COX pour augmenter TXA2.",
        "correct": false,
        "explanation": "Elle inhibe la COX."
      },
      {
        "content": "La voie COX transforme l'acide arachidonique en précurseurs de prostanoïdes.",
        "correct": true,
        "explanation": "Prostaglandines, prostacycline et thromboxanes dérivent de cette voie."
      }
    ],
    "explanation": "La cyclo-oxygénase oriente l'acide arachidonique vers les prostanoïdes."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de la voie des lipoxygénases, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Des coopérations entre lipoxygénases peuvent participer à la biosynthèse des lipoxines.",
        "correct": true,
        "explanation": "Les lipoxines sont des médiateurs de résolution."
      },
      {
        "content": "LTA4 est le produit direct majeur de COX.",
        "correct": false,
        "explanation": "Il relève de la voie 5-LOX."
      },
      {
        "content": "La 5-lipoxygénase est une glycosidase digestive.",
        "correct": false,
        "explanation": "Elle oxygène des acides gras."
      },
      {
        "content": "Les lipoxines sont des triglycérides de stockage.",
        "correct": false,
        "explanation": "Ce sont des médiateurs lipidiques."
      },
      {
        "content": "Les lipoxygénases ne peuvent agir que sur des protéines.",
        "correct": false,
        "explanation": "Leurs substrats sont notamment des acides gras polyinsaturés."
      }
    ],
    "explanation": "La 5-lipoxygénase mène à LTA4 ; d'autres réactions lipoxygénases participent notamment à la formation de lipoxines."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur l'orientation du métabolisme de l'acide arachidonique, sélectionnez exactement les deux exactes.",
    "choices": [
      {
        "content": "Un même précurseur peut donc conduire à des médiateurs aux effets très différents.",
        "correct": true,
        "explanation": "C'est une caractéristique importante de la signalisation lipidique."
      },
      {
        "content": "Toutes les cellules transforment l'acide arachidonique en exactement le même médiateur.",
        "correct": false,
        "explanation": "Le profil enzymatique cellulaire est déterminant."
      },
      {
        "content": "COX et 5-LOX sont deux noms pour la même enzyme.",
        "correct": false,
        "explanation": "Ce sont des voies enzymatiques distinctes."
      },
      {
        "content": "La voie 5-LOX mène aux leucotriènes.",
        "correct": true,
        "explanation": "LTA4 est un intermédiaire central."
      },
      {
        "content": "L'acide arachidonique n'est jamais utilisé comme substrat de COX.",
        "correct": false,
        "explanation": "Il est un substrat majeur."
      }
    ],
    "explanation": "Le devenir de l'acide arachidonique dépend des enzymes disponibles : COX vers prostanoïdes, 5-LOX vers leucotriènes.",
    "requiredSelectionCount": 2
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les prostanoïdes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La voie COX ne participe pas à leur biosynthèse.",
        "correct": false,
        "explanation": "Elle en est la voie centrale."
      },
      {
        "content": "Ils regroupent prostaglandines, prostacycline et thromboxanes.",
        "correct": true,
        "explanation": "Ce sont des produits de la voie COX."
      },
      {
        "content": "Le médiateur final dépend des enzymes terminales exprimées par le tissu.",
        "correct": true,
        "explanation": "Plaquettes et endothélium ne produisent pas les mêmes profils."
      },
      {
        "content": "TXA2 et PGI2 ont des effets vasculaires et plaquettaires opposés.",
        "correct": true,
        "explanation": "Le premier est proagrégant/vasoconstricteur, le second antiagrégant/vasodilatateur."
      },
      {
        "content": "Ils partagent un intermédiaire biosynthétique issu de COX.",
        "correct": true,
        "explanation": "PGH2 sert de précurseur à plusieurs synthases terminales."
      }
    ],
    "explanation": "Les prostanoïdes partagent la voie COX puis divergent selon les synthases terminales exprimées."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme décrit une action sur des cellules voisines du site de production ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "paracrine",
        "action paracrine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les eicosanoïdes sont souvent des médiateurs locaux à demi-vie courte, adaptés à une signalisation rapide et spatialement limitée."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur les eicosanoïdes, laquelle est exacte ?",
    "choices": [
      {
        "content": "Leurs effets dépendent du médiateur et du tissu cible.",
        "correct": true,
        "explanation": "Des médiateurs proches peuvent avoir des effets opposés."
      },
      {
        "content": "Ils sont tous stockés durablement dans des vésicules de sécrétion.",
        "correct": false,
        "explanation": "Ils sont souvent synthétisés à la demande."
      },
      {
        "content": "Ils n'ont aucun rôle dans l'inflammation ni l'hémostase.",
        "correct": false,
        "explanation": "Plusieurs eicosanoïdes modulent inflammation, tonus vasculaire et fonction plaquettaire."
      },
      {
        "content": "Ils possèdent tous exactement la même structure cyclique.",
        "correct": false,
        "explanation": "Les leucotriènes, par exemple, ne partagent pas le cycle des prostanoïdes."
      },
      {
        "content": "Ce sont tous des protéines enzymatiques.",
        "correct": false,
        "explanation": "Ce sont des médiateurs lipidiques."
      }
    ],
    "explanation": "Les eicosanoïdes sont des médiateurs lipidiques issus de précurseurs C20 ou voisins, à action généralement locale et brève."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'acide arachidonique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est noté 18:3 n-3.",
        "correct": false,
        "explanation": "Cela décrit l'alpha-linolénique."
      },
      {
        "content": "Il est un acide gras saturé.",
        "correct": false,
        "explanation": "Il possède quatre doubles liaisons."
      },
      {
        "content": "Il ne peut donner aucun médiateur lipidique.",
        "correct": false,
        "explanation": "Il est au contraire un précurseur central."
      },
      {
        "content": "Il comporte 20 carbones et 4 doubles liaisons.",
        "correct": true,
        "explanation": "Sa notation est 20:4."
      },
      {
        "content": "Il est un précurseur majeur des eicosanoïdes de série 2 et de nombreux leucotriènes.",
        "correct": true,
        "explanation": "Il alimente les voies COX et 5-lipoxygénase."
      }
    ],
    "explanation": "L'acide arachidonique est un acide gras 20:4 Δ5,8,11,14 de la série n-6."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les eicosanoïdes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils comprennent notamment prostanoïdes, leucotriènes et lipoxines.",
        "correct": true,
        "explanation": "Ce sont les grandes familles étudiées."
      },
      {
        "content": "Ils agissent souvent localement et ont une durée de vie courte.",
        "correct": true,
        "explanation": "Ils sont produits à la demande plutôt que stockés massivement."
      },
      {
        "content": "Ils sont tous stockés durablement dans des vésicules de sécrétion.",
        "correct": false,
        "explanation": "Ils sont souvent synthétisés à la demande."
      },
      {
        "content": "Ils n'ont aucun rôle dans l'inflammation ni l'hémostase.",
        "correct": false,
        "explanation": "Plusieurs eicosanoïdes modulent inflammation, tonus vasculaire et fonction plaquettaire."
      },
      {
        "content": "Ce sont tous des protéines enzymatiques.",
        "correct": false,
        "explanation": "Ce sont des médiateurs lipidiques."
      }
    ],
    "explanation": "Les eicosanoïdes sont des médiateurs lipidiques issus de précurseurs C20 ou voisins, à action généralement locale et brève."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle notation abrégée correspond à l'acide arachidonique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "20:4 Δ5,8,11,14",
        "20:4 n-6",
        "20:4",
        "20:4 delta 5,8,11,14"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'acide arachidonique est un acide gras 20:4 Δ5,8,11,14 de la série n-6."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la libération de l'acide arachidonique membranaire, laquelle est exacte ?",
    "choices": [
      {
        "content": "L'acide arachidonique est stocké uniquement sous forme de glycogène.",
        "correct": false,
        "explanation": "Le glycogène est un polymère de glucose."
      },
      {
        "content": "La synthèse d'eicosanoïdes ne dépend jamais de la disponibilité du précurseur.",
        "correct": false,
        "explanation": "Elle dépend du substrat accessible."
      },
      {
        "content": "Les membranes ne contiennent jamais d'acide arachidonique estérifié.",
        "correct": false,
        "explanation": "Il peut y être abondant dans certains phospholipides."
      },
      {
        "content": "Une phospholipase A2 synthétise directement du TXA2 sans libérer d'acide gras.",
        "correct": false,
        "explanation": "Elle libère un acide gras du phospholipide."
      },
      {
        "content": "La libération membranaire précède classiquement les voies COX ou lipoxygénases.",
        "correct": true,
        "explanation": "Ces enzymes utilisent l'acide gras libéré."
      }
    ],
    "explanation": "La phospholipase A2 peut libérer l'acide arachidonique des phospholipides membranaires avant sa transformation en eicosanoïdes."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un acide arachidonique est noté 20:4 Δ5,8,11,14. Quelle est la valeur n-x de sa série oméga ?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "On utilise la double liaison la plus proche de l'extrémité méthyle : $20-14=6$, donc série n-6."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de la voie des lipoxygénases, retenez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Des coopérations entre lipoxygénases peuvent participer à la biosynthèse des lipoxines.",
        "correct": true,
        "explanation": "Les lipoxines sont des médiateurs de résolution."
      },
      {
        "content": "Les lipoxygénases ne peuvent agir que sur des protéines.",
        "correct": false,
        "explanation": "Leurs substrats sont notamment des acides gras polyinsaturés."
      },
      {
        "content": "La 5-lipoxygénase participe à la formation de LTA4 à partir de l'acide arachidonique.",
        "correct": true,
        "explanation": "LTA4 est un intermédiaire clé des leucotriènes."
      },
      {
        "content": "Les lipoxines sont des triglycérides de stockage.",
        "correct": false,
        "explanation": "Ce sont des médiateurs lipidiques."
      },
      {
        "content": "LTA4 est le produit direct majeur de COX.",
        "correct": false,
        "explanation": "Il relève de la voie 5-LOX."
      }
    ],
    "explanation": "La 5-lipoxygénase mène à LTA4 ; d'autres réactions lipoxygénases participent notamment à la formation de lipoxines.",
    "requiredSelectionCount": 2
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur l'orientation du métabolisme de l'acide arachidonique, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La voie COX mène aux prostanoïdes.",
        "correct": true,
        "explanation": "Elle inclut prostaglandines, prostacycline et thromboxanes."
      },
      {
        "content": "La voie 5-LOX mène aux leucotriènes.",
        "correct": true,
        "explanation": "LTA4 est un intermédiaire central."
      },
      {
        "content": "Un même précurseur peut donc conduire à des médiateurs aux effets très différents.",
        "correct": true,
        "explanation": "C'est une caractéristique importante de la signalisation lipidique."
      },
      {
        "content": "COX et 5-LOX sont deux noms pour la même enzyme.",
        "correct": false,
        "explanation": "Ce sont des voies enzymatiques distinctes."
      },
      {
        "content": "La nature des enzymes exprimées dans une cellule influence les médiateurs produits.",
        "correct": true,
        "explanation": "Toutes les cellules ne synthétisent pas le même profil."
      }
    ],
    "explanation": "Le devenir de l'acide arachidonique dépend des enzymes disponibles : COX vers prostanoïdes, 5-LOX vers leucotriènes."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel intermédiaire prostanoïde commun est converti par des synthases terminales en différents prostanoïdes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PGH2",
        "PGH₂",
        "prostaglandine H2",
        "prostaglandine H₂"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les prostanoïdes partagent la voie COX puis divergent selon les synthases terminales exprimées."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle enzyme libère classiquement l'acide arachidonique à partir de phospholipides membranaires ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "phospholipase A2",
        "PLA2",
        "phospholipase A₂"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La phospholipase A2 hydrolyse un acide gras en position sn-2 de nombreux phospholipides et peut ainsi libérer l'acide arachidonique."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur les eicosanoïdes, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Ils comprennent notamment prostanoïdes, leucotriènes et lipoxines.",
        "correct": true,
        "explanation": "Ce sont les grandes familles étudiées."
      },
      {
        "content": "Ils n'ont aucun rôle dans l'inflammation ni l'hémostase.",
        "correct": false,
        "explanation": "Plusieurs eicosanoïdes modulent inflammation, tonus vasculaire et fonction plaquettaire."
      },
      {
        "content": "Ils sont des médiateurs lipidiques dérivés d'acides gras à 20 carbones ou de précurseurs voisins.",
        "correct": true,
        "explanation": "Le terme eicosa- renvoie au squelette C20."
      },
      {
        "content": "Ils possèdent tous exactement la même structure cyclique.",
        "correct": false,
        "explanation": "Les leucotriènes, par exemple, ne partagent pas le cycle des prostanoïdes."
      },
      {
        "content": "Ce sont tous des protéines enzymatiques.",
        "correct": false,
        "explanation": "Ce sont des médiateurs lipidiques."
      }
    ],
    "explanation": "Les eicosanoïdes sont des médiateurs lipidiques issus de précurseurs C20 ou voisins, à action généralement locale et brève."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel grand groupe de médiateurs est formé par la voie COX à partir de l'acide arachidonique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "prostanoïdes",
        "prostanoides",
        "prostaglandines et thromboxanes",
        "prostanoïdes : prostaglandines et thromboxanes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La voie cyclo-oxygénase conduit aux prostanoïdes, notamment prostaglandines, prostacycline et thromboxanes."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la libération de l'acide arachidonique membranaire, quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "La disponibilité du précurseur peut limiter la synthèse de médiateurs.",
        "correct": true,
        "explanation": "La production se fait à la demande."
      },
      {
        "content": "L'acide arachidonique est stocké uniquement sous forme de glycogène.",
        "correct": false,
        "explanation": "Le glycogène est un polymère de glucose."
      },
      {
        "content": "L'acide arachidonique peut être estérifié dans des phospholipides membranaires.",
        "correct": true,
        "explanation": "La membrane constitue un réservoir de précurseur."
      },
      {
        "content": "La libération membranaire précède classiquement les voies COX ou lipoxygénases.",
        "correct": true,
        "explanation": "Ces enzymes utilisent l'acide gras libéré."
      },
      {
        "content": "Les membranes ne contiennent jamais d'acide arachidonique estérifié.",
        "correct": false,
        "explanation": "Il peut y être abondant dans certains phospholipides."
      }
    ],
    "explanation": "La phospholipase A2 peut libérer l'acide arachidonique des phospholipides membranaires avant sa transformation en eicosanoïdes."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle voie enzymatique conduit aux prostanoïdes à partir de l'acide arachidonique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cyclo-oxygénase",
        "cyclooxygenase",
        "COX",
        "voie COX"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La cyclo-oxygénase oriente l'acide arachidonique vers les prostanoïdes."
  }
];
