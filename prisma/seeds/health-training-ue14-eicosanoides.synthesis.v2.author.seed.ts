import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Les eicosanoïdes — Synthèse — Eicosanoïdes */
export const UE14_BIOCH_CH5_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les eicosanoïdes, quelles propositions sont exactes ?",
    "choices": [
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
        "content": "Ils sont tous stockés durablement dans des vésicules de sécrétion.",
        "correct": false,
        "explanation": "Ils sont souvent synthétisés à la demande."
      }
    ],
    "explanation": "Les eicosanoïdes sont des médiateurs lipidiques issus de précurseurs C20 ou voisins, à action généralement locale et brève."
  },
  {
    "order": 102,
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
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la libération de l'acide arachidonique membranaire, laquelle est exacte ?",
    "choices": [
      {
        "content": "Une phospholipase A2 synthétise directement du TXA2 sans libérer d'acide gras.",
        "correct": false,
        "explanation": "Elle libère un acide gras du phospholipide."
      },
      {
        "content": "Les membranes ne contiennent jamais d'acide arachidonique estérifié.",
        "correct": false,
        "explanation": "Il peut y être abondant dans certains phospholipides."
      },
      {
        "content": "La synthèse d'eicosanoïdes ne dépend jamais de la disponibilité du précurseur.",
        "correct": false,
        "explanation": "Elle dépend du substrat accessible."
      },
      {
        "content": "Une phospholipase A2 peut libérer l'acide arachidonique à partir de phospholipides.",
        "correct": true,
        "explanation": "Cette étape fournit le substrat aux voies eicosanoïdes."
      },
      {
        "content": "L'acide arachidonique est stocké uniquement sous forme de glycogène.",
        "correct": false,
        "explanation": "Le glycogène est un polymère de glucose."
      }
    ],
    "explanation": "La phospholipase A2 peut libérer l'acide arachidonique des phospholipides membranaires avant sa transformation en eicosanoïdes."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la voie cyclo-oxygénase COX, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les prostanoïdes ne dérivent jamais de COX.",
        "correct": false,
        "explanation": "Ils en sont les produits majeurs."
      },
      {
        "content": "La COX est l'enzyme principale de synthèse du glycogène.",
        "correct": false,
        "explanation": "Elle oxygène des acides gras précurseurs de prostanoïdes."
      },
      {
        "content": "COX-1 et COX-2 sont deux isoformes majeures chez l'être humain.",
        "correct": true,
        "explanation": "Leur expression et leur régulation diffèrent selon les tissus."
      },
      {
        "content": "La voie COX ne produit pas directement les leucotriènes.",
        "correct": true,
        "explanation": "Les leucotriènes relèvent surtout de la voie 5-lipoxygénase."
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
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de la voie des lipoxygénases, retenez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "La 5-lipoxygénase participe à la formation de LTA4 à partir de l'acide arachidonique.",
        "correct": true,
        "explanation": "LTA4 est un intermédiaire clé des leucotriènes."
      },
      {
        "content": "Les lipoxygénases oxygènent des acides gras polyinsaturés.",
        "correct": true,
        "explanation": "Elles orientent notamment vers leucotriènes et lipoxines."
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
      },
      {
        "content": "La 5-lipoxygénase est une glycosidase digestive.",
        "correct": false,
        "explanation": "Elle oxygène des acides gras."
      }
    ],
    "explanation": "La 5-lipoxygénase mène à LTA4 ; d'autres réactions lipoxygénases participent notamment à la formation de lipoxines.",
    "requiredSelectionCount": 2
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur l'orientation du métabolisme de l'acide arachidonique, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La nature des enzymes exprimées dans une cellule influence les médiateurs produits.",
        "correct": true,
        "explanation": "Toutes les cellules ne synthétisent pas le même profil."
      },
      {
        "content": "Un même précurseur peut donc conduire à des médiateurs aux effets très différents.",
        "correct": true,
        "explanation": "C'est une caractéristique importante de la signalisation lipidique."
      },
      {
        "content": "La voie COX mène aux prostanoïdes.",
        "correct": true,
        "explanation": "Elle inclut prostaglandines, prostacycline et thromboxanes."
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
      }
    ],
    "explanation": "Le devenir de l'acide arachidonique dépend des enzymes disponibles : COX vers prostanoïdes, 5-LOX vers leucotriènes."
  },
  {
    "order": 107,
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
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de l'action locale et la demi-vie des eicosanoïdes, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Ils sont toujours stockés sous forme active dans des granules.",
        "correct": false,
        "explanation": "Ils sont généralement synthétisés à la demande."
      },
      {
        "content": "Tous les eicosanoïdes circulent plusieurs jours sans dégradation.",
        "correct": false,
        "explanation": "Beaucoup ont une durée de vie brève."
      },
      {
        "content": "Une demi-vie courte implique l'absence de tout effet biologique.",
        "correct": false,
        "explanation": "Ils peuvent être très puissants malgré leur brièveté."
      },
      {
        "content": "Leur demi-vie est souvent courte.",
        "correct": true,
        "explanation": "Ils sont rapidement transformés ou inactivés."
      },
      {
        "content": "Ils agissent uniquement comme hormones endocrines à longue distance.",
        "correct": false,
        "explanation": "Ils ont souvent une action locale."
      }
    ],
    "explanation": "Les eicosanoïdes sont souvent des médiateurs locaux à demi-vie courte, adaptés à une signalisation rapide et spatialement limitée."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur le squelette prostanoïde de référence, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le squelette prostanoïde est un cycle benzénique C6 sans chaîne latérale.",
        "correct": false,
        "explanation": "Il est différent."
      },
      {
        "content": "Il comporte 20 carbones.",
        "correct": true,
        "explanation": "Il dérive d'un squelette eicosanoïde."
      },
      {
        "content": "L'acide prostanoïque est le principal thromboxane circulant.",
        "correct": false,
        "explanation": "C'est un squelette de référence."
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
      }
    ],
    "explanation": "Le squelette prostanoïde est un repère C20 comportant un cycle à cinq chaînons et deux chaînes latérales."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Elle est produite notamment par l'endothélium vasculaire.",
        "correct": true,
        "explanation": "Elle participe à l'équilibre local avec TXA2."
      },
      {
        "content": "Les lettres A, B, C, D, E ou F distinguent des motifs d'oxygénation du cycle.",
        "correct": true,
        "explanation": "Elles définissent des groupes structuraux."
      },
      {
        "content": "Toutes les lettres correspondent au nombre de doubles liaisons.",
        "correct": false,
        "explanation": "Le chiffre de série porte cette information."
      },
      {
        "content": "Dans PGI2, I signifie que la molécule appartient à la série 1.",
        "correct": false,
        "explanation": "La série est indiquée par le chiffre 2."
      },
      {
        "content": "La lettre E signifie que la molécule possède cinq carbones.",
        "correct": false,
        "explanation": "La lettre décrit un groupe structural."
      },
      {
        "content": "Elle est produite uniquement par les plaquettes.",
        "correct": false,
        "explanation": "L'endothélium en est une source majeure."
      },
      {
        "content": "PGI2 est principalement proagrégante.",
        "correct": false,
        "explanation": "Elle est antiagrégante."
      },
      {
        "content": "PGF2α appartient au groupe F.",
        "correct": true,
        "explanation": "La lettre F décrit un autre motif du cycle."
      },
      {
        "content": "PGI2 est la prostacycline de série 2.",
        "correct": true,
        "explanation": "La lettre I est une lettre de groupe et non le chiffre 1."
      },
      {
        "content": "La lettre ne donne pas le nombre total de carbones.",
        "correct": true,
        "explanation": "Le squelette reste C20."
      }
    ],
    "explanation": "La lettre des prostaglandines distingue le motif structural du cycle ; le chiffre indique la série. PGI2 est la prostacycline endothéliale vasodilatatrice et antiagrégante de série 2."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les eicosanoïdes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Leurs effets dépendent du médiateur et du tissu cible.",
        "correct": true,
        "explanation": "Des médiateurs proches peuvent avoir des effets opposés."
      },
      {
        "content": "Ils possèdent tous exactement la même structure cyclique.",
        "correct": false,
        "explanation": "Les leucotriènes, par exemple, ne partagent pas le cycle des prostanoïdes."
      },
      {
        "content": "Ils sont tous stockés durablement dans des vésicules de sécrétion.",
        "correct": false,
        "explanation": "Ils sont souvent synthétisés à la demande."
      },
      {
        "content": "Ce sont tous des protéines enzymatiques.",
        "correct": false,
        "explanation": "Ce sont des médiateurs lipidiques."
      },
      {
        "content": "Ils comprennent notamment prostanoïdes, leucotriènes et lipoxines.",
        "correct": true,
        "explanation": "Ce sont les grandes familles étudiées."
      }
    ],
    "explanation": "Les eicosanoïdes sont des médiateurs lipidiques issus de précurseurs C20 ou voisins, à action généralement locale et brève."
  },
  {
    "order": 112,
    "difficulty": "HARD",
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
    "order": 113,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle molécule thérapeutique est un analogue de PGE1 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "misoprostol",
        "le misoprostol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le misoprostol est un analogue synthétique de PGE1."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la voie cyclo-oxygénase COX, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'aspirine stimule la COX pour augmenter TXA2.",
        "correct": false,
        "explanation": "Elle inhibe la COX."
      },
      {
        "content": "COX-1 et COX-2 sont deux isoformes majeures chez l'être humain.",
        "correct": true,
        "explanation": "Leur expression et leur régulation diffèrent selon les tissus."
      },
      {
        "content": "L'aspirine et l'ibuprofène inhibent la cyclo-oxygénase.",
        "correct": true,
        "explanation": "Ils diminuent la synthèse de prostanoïdes."
      },
      {
        "content": "La voie COX ne produit pas directement les leucotriènes.",
        "correct": true,
        "explanation": "Les leucotriènes relèvent surtout de la voie 5-lipoxygénase."
      },
      {
        "content": "COX transforme directement l'acide arachidonique en LTB4.",
        "correct": false,
        "explanation": "LTB4 relève de la voie 5-LOX/LTA4."
      }
    ],
    "explanation": "La cyclo-oxygénase oriente l'acide arachidonique vers les prostanoïdes."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "À propos de la voie des lipoxygénases, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "La 5-lipoxygénase est une glycosidase digestive.",
        "correct": false,
        "explanation": "Elle oxygène des acides gras."
      },
      {
        "content": "LTA4 est le produit direct majeur de COX.",
        "correct": false,
        "explanation": "Il relève de la voie 5-LOX."
      },
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
        "content": "Les lipoxines sont des triglycérides de stockage.",
        "correct": false,
        "explanation": "Ce sont des médiateurs lipidiques."
      }
    ],
    "explanation": "La 5-lipoxygénase mène à LTA4 ; d'autres réactions lipoxygénases participent notamment à la formation de lipoxines."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur l'orientation du métabolisme de l'acide arachidonique, lesquelles sont exactes ?",
    "choices": [
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
        "content": "La voie COX mène aux prostanoïdes.",
        "correct": true,
        "explanation": "Elle inclut prostaglandines, prostacycline et thromboxanes."
      },
      {
        "content": "Toutes les cellules transforment l'acide arachidonique en exactement le même médiateur.",
        "correct": false,
        "explanation": "Le profil enzymatique cellulaire est déterminant."
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
    "order": 117,
    "difficulty": "HARD",
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
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le chiffre de série reflète le nombre de doubles liaisons conservées dans les chaînes latérales du prostanoïde.",
        "correct": true,
        "explanation": "Une série 2 présente deux doubles liaisons latérales."
      },
      {
        "content": "Une demi-vie courte implique l'absence de tout effet biologique.",
        "correct": false,
        "explanation": "Ils peuvent être très puissants malgré leur brièveté."
      },
      {
        "content": "Leur production est souvent stimulée en réponse à un signal.",
        "correct": true,
        "explanation": "Elle est moins comparable à un stockage hormonal massif."
      },
      {
        "content": "La série 2 correspond à deux atomes d'oxygène.",
        "correct": false,
        "explanation": "Elle correspond au nombre de doubles liaisons latérales."
      },
      {
        "content": "Beaucoup d'eicosanoïdes agissent à proximité de leur lieu de synthèse.",
        "correct": true,
        "explanation": "Ils fonctionnent comme médiateurs autocrines ou paracrines."
      },
      {
        "content": "La série 1 dérive directement de l'acide linoléique sans étape métabolique intermédiaire.",
        "correct": false,
        "explanation": "Le précurseur prostanoïde C20 est le DGLA."
      },
      {
        "content": "Ils sont toujours stockés sous forme active dans des granules.",
        "correct": false,
        "explanation": "Ils sont généralement synthétisés à la demande."
      },
      {
        "content": "Leur demi-vie est souvent courte.",
        "correct": true,
        "explanation": "Ils sont rapidement transformés ou inactivés."
      },
      {
        "content": "Les prostanoïdes de série 2 dérivent classiquement de l'acide arachidonique.",
        "correct": true,
        "explanation": "C'est la série majeure issue du 20:4 n-6."
      },
      {
        "content": "Tous les eicosanoïdes circulent plusieurs jours sans dégradation.",
        "correct": false,
        "explanation": "Beaucoup ont une durée de vie brève."
      }
    ],
    "explanation": "Les eicosanoïdes sont souvent des médiateurs locaux à demi-vie courte, adaptés à une signalisation rapide et spatialement limitée. Les séries 1, 2 et 3 dépendent du précurseur C20 et du nombre de doubles liaisons latérales conservées."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur le squelette prostanoïde de référence, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "L'acide prostanoïque est le principal thromboxane circulant.",
        "correct": false,
        "explanation": "C'est un squelette de référence."
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
        "content": "Toutes les prostaglandines sont dépourvues de cycle.",
        "correct": false,
        "explanation": "Le cycle est caractéristique des prostaglandines classiques."
      },
      {
        "content": "Deux chaînes latérales prolongent le cycle.",
        "correct": true,
        "explanation": "Elles portent une partie des doubles liaisons de série."
      }
    ],
    "explanation": "Le squelette prostanoïde est un repère C20 comportant un cycle à cinq chaînons et deux chaînes latérales."
  },
  {
    "order": 120,
    "difficulty": "HARD",
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
    "order": 121,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel médiateur de la voie 5-LOX est un puissant chimiotactique des neutrophiles ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "LTB4",
        "LTB₄",
        "leucotriène B4",
        "leucotriene B4"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "LTB4 relie la voie 5-LOX à une réponse inflammatoire de recrutement leucocytaire."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur PGE2, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Elle appartient à la série 2.",
        "correct": true,
        "explanation": "Elle dérive classiquement de l'acide arachidonique."
      },
      {
        "content": "PGE2 appartient à la voie 5-LOX.",
        "correct": false,
        "explanation": "Elle relève de la voie COX."
      },
      {
        "content": "PGE2 est une prostaglandine du groupe E.",
        "correct": true,
        "explanation": "La lettre E décrit le motif du cycle."
      },
      {
        "content": "Sa structure et ses effets ne se résument pas à ceux de PGF2α.",
        "correct": true,
        "explanation": "Des prostaglandines proches peuvent avoir des actions différentes."
      },
      {
        "content": "PGE2 est obligatoirement un médiateur antiagrégant plaquettaire majeur équivalent à PGI2.",
        "correct": false,
        "explanation": "PGI2 est le repère antiagrégant vasculaire majeur."
      }
    ],
    "explanation": "PGE2 est une prostaglandine du groupe E, de série 2, issue de la voie COX."
  }
];
