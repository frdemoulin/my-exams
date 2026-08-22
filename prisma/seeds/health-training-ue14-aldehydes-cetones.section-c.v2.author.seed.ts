import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.6 – Section C – Amines, fonctionnalisation alpha et oxydabilité
 */

export const UE14_CH10_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 57,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la réaction d'un aldéhyde ou d'une cétone avec une amine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La classe de l'amine influence le produit azoté.",
        "correct": true,
        "explanation": "Une amine primaire conduit à une imine, tandis qu’une amine secondaire conduit à un ion iminium."
      },
      {
        "content": "Le carbone carbonylé n'intervient pas.",
        "correct": false,
        "explanation": "Le carbone carbonylé est précisément le centre électrophile attaqué par le doublet nucléophile de l’amine."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "L'amine est décrite comme un nucléophile.",
        "correct": true,
        "explanation": "Le doublet libre de l’azote permet à l’amine d’attaquer le carbone électrophile du groupe carbonyle."
      },
      {
        "content": "Une élimination d'eau est nécessaire pour que la réaction soit totale dans le modèle.",
        "correct": true,
        "explanation": "La condensation forme de l’eau ; son élimination favorise la formation de l’imine ou de l’iminium."
      }
    ],
    "explanation": "L'amine agit comme nucléophile sur le carbonyle ; une amine primaire conduit à une imine et une amine secondaire à un iminium, avec élimination d'eau."
  },
  {
    "order": 58,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un aldéhyde réagit avec une amine primaire. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une imine est formée.",
        "correct": true,
        "explanation": "Une amine primaire se condense avec le carbonyle pour former une imine."
      },
      {
        "content": "Un alcool primaire est formé.",
        "correct": false,
        "explanation": "La condensation d’une amine primaire avec un aldéhyde conduit à une imine, pas à un alcool primaire."
      },
      {
        "content": "Un iminium est formé avec l'amine primaire.",
        "correct": false,
        "explanation": "Une amine primaire conduit à une imine ; l’ion iminium est obtenu avec une amine secondaire dans le bilan étudié."
      },
      {
        "content": "Une amide est formée.",
        "correct": false,
        "explanation": "La condensation d’une amine primaire avec un aldéhyde forme une imine ; une amide nécessiterait une acylation."
      },
      {
        "content": "Une amine primaire peut réagir avec un aldéhyde ou une cétone pour former une imine avec élimination d’eau.",
        "correct": true,
        "explanation": "La condensation de l’amine primaire avec le carbonyle conduit à une imine."
      }
    ],
    "explanation": "Une amine primaire se condense avec un aldéhyde pour former une imine avec élimination d'eau."
  },
  {
    "order": 59,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un aldéhyde réagit avec une amine secondaire. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Une imine est le produit spécifique de l'amine secondaire.",
        "correct": false,
        "explanation": "Une amine primaire conduit à une imine, tandis qu’une amine secondaire conduit à un ion iminium dans le bilan simplifié."
      },
      {
        "content": "Une amine secondaire donne nécessairement une amide lorsqu’elle réagit avec une cétone.",
        "correct": false,
        "explanation": "Avec une cétone ou un aldéhyde, le produit étudié est un iminium, pas une amide."
      },
      {
        "content": "Un iminium est formé.",
        "correct": true,
        "explanation": "Une amine secondaire se condense avec le composé carbonylé pour former un ion iminium."
      },
      {
        "content": "L'amine joue le rôle de nucléophile.",
        "correct": true,
        "explanation": "Le doublet non liant de l’azote permet à l’amine d’attaquer le carbone électrophile du groupe carbonyle."
      },
      {
        "content": "L'élimination d'eau favorise la transformation totale dans le modèle.",
        "correct": true,
        "explanation": "La condensation avec l’amine s’accompagne d’une élimination d’eau ; retirer l’eau favorise le sens de formation du produit."
      }
    ],
    "explanation": "Une amine secondaire se condense avec un aldéhyde pour former un iminium avec élimination d'eau."
  },
  {
    "order": 60,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une cétone réagit avec une amine primaire. Quelles propositions décrivent correctement cette condensation ?",
    "choices": [
      {
        "content": "L'intervention du caractère nucléophile de l'amine.",
        "correct": true,
        "explanation": "Le doublet non liant de l’azote permet à l’amine d’attaquer le carbone électrophile du groupe carbonyle."
      },
      {
        "content": "Une élimination d'eau.",
        "correct": true,
        "explanation": "La condensation avec l’amine s’accompagne d’une élimination d’eau ; retirer l’eau favorise le sens de formation du produit."
      },
      {
        "content": "La formation d'un alcool tertiaire.",
        "correct": false,
        "explanation": "Un alcool tertiaire serait obtenu par addition d’un organomagnésien sur la cétone, pas par condensation avec une amine primaire."
      },
      {
        "content": "Une amine secondaire donne nécessairement une amide lorsqu’elle réagit avec une cétone.",
        "correct": false,
        "explanation": "Avec une cétone ou un aldéhyde, le produit étudié est un iminium, pas une amide."
      },
      {
        "content": "La formation d'une imine.",
        "correct": true,
        "explanation": "Une amine primaire se condense avec une cétone pour former une imine avec élimination d’eau."
      }
    ],
    "explanation": "Une amine primaire se condense avec une cétone pour former une imine ; l'amine attaque comme nucléophile et de l'eau est éliminée."
  },
  {
    "order": 61,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une cétone réagit avec une amine secondaire. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Une amine secondaire donne nécessairement une amide lorsqu’elle réagit avec une cétone.",
        "correct": false,
        "explanation": "Avec une cétone ou un aldéhyde, le produit étudié est un iminium, pas une amide."
      },
      {
        "content": "Un iminium est formé.",
        "correct": true,
        "explanation": "Une amine secondaire se condense avec le composé carbonylé pour former un ion iminium."
      },
      {
        "content": "L'eau doit être éliminée dans le modèle pour pousser la réaction.",
        "correct": true,
        "explanation": "Comme l’eau est un produit de la condensation, son élimination déplace l’équilibre vers l’imine ou l’iminium."
      },
      {
        "content": "Le carbone carbonylé est le centre électrophile initial.",
        "correct": true,
        "explanation": "La polarisation de $\\ce{C=O}$ rend le carbone carbonylé électrophile ; c’est le centre attaqué initialement par l’amine."
      },
      {
        "content": "Le produit est une amide.",
        "correct": false,
        "explanation": "La réaction d’une amine secondaire avec une cétone forme ici un iminium, pas une amide."
      }
    ],
    "explanation": "Une amine secondaire se condense avec une cétone pour former un iminium avec élimination d'eau."
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel produit azoté est associé à une amine primaire réagissant avec un aldéhyde ou une cétone ?",
    "choices": [
      {
        "content": "Ammonium quaternaire.",
        "correct": false,
        "explanation": "Une amine primaire réagissant avec un carbonyle forme une imine, pas un ammonium quaternaire."
      },
      {
        "content": "Ester.",
        "correct": false,
        "explanation": "La réaction entre une amine et un carbonyle simple ne forme pas un ester."
      },
      {
        "content": "Iminium.",
        "correct": false,
        "explanation": "L’iminium est associé à une amine secondaire ; une amine primaire conduit à une imine."
      },
      {
        "content": "Imine.",
        "correct": true,
        "explanation": "Une amine primaire réagissant avec un aldéhyde ou une cétone conduit à une imine."
      },
      {
        "content": "Amide.",
        "correct": false,
        "explanation": "Une amide se forme par acylation d’une amine avec un dérivé d’acide, pas par condensation avec un carbonyle simple."
      }
    ],
    "explanation": "Une amine primaire réagissant avec un aldéhyde ou une cétone forme une imine."
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel produit azoté est associé à une amine secondaire réagissant avec un aldéhyde ou une cétone ?",
    "choices": [
      {
        "content": "Amide.",
        "correct": false,
        "explanation": "Une amide résulte d’une acylation d’amine ; avec un aldéhyde ou une cétone, une amine secondaire forme ici un iminium."
      },
      {
        "content": "Imine.",
        "correct": false,
        "explanation": "L’imine est le produit d’une amine primaire ; une amine secondaire conduit à un iminium."
      },
      {
        "content": "Ester.",
        "correct": false,
        "explanation": "Une condensation entre une amine et un aldéhyde ou une cétone ne forme pas un ester."
      },
      {
        "content": "Un alcool tertiaire.",
        "correct": false,
        "explanation": "La condensation d’une amine secondaire avec un carbonyle forme un iminium, pas un alcool tertiaire."
      },
      {
        "content": "Iminium.",
        "correct": true,
        "explanation": "Une amine secondaire réagissant avec un composé carbonylé conduit à un ion iminium."
      }
    ],
    "explanation": "Une amine secondaire réagissant avec un aldéhyde ou une cétone forme un ion iminium."
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la fonctionnalisation en position alpha d'un dérivé carbonylé par un électrophile, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'électrophile attaque directement l'oxygène du carbonyle dans le bilan présenté.",
        "correct": false,
        "explanation": "La liaison se forme avec le carbone voisin devenu nucléophile."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Une base forte intervient d'abord.",
        "correct": true,
        "explanation": "La base forte intervient avant l’électrophile afin de déprotoner la position alpha et de créer le centre nucléophile."
      },
      {
        "content": "Elle met en valeur le caractère nucléophile du carbone voisin du carbonyle.",
        "correct": true,
        "explanation": "La base forte déprotone le carbone alpha et crée un centre carboné nucléophile."
      },
      {
        "content": "L'électrophile intervient ensuite.",
        "correct": true,
        "explanation": "Après formation du centre nucléophile en alpha, l’électrophile est ajouté et réagit avec ce carbone."
      }
    ],
    "explanation": "La fonctionnalisation en alpha se déroule en deux étapes : une base forte crée le centre nucléophile, puis celui-ci réagit avec l'électrophile."
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi une base forte est-elle utilisée avant l'ajout de l'électrophile dans la fonctionnalisation en position alpha ?",
    "choices": [
      {
        "content": "Parce que ce carbone doit porter un hydrogène dans le modèle.",
        "correct": true,
        "explanation": "La déprotonation nécessite la présence d’un hydrogène sur le carbone alpha."
      },
      {
        "content": "Pour transformer le carbone voisin en centre capable de réagir avec E+.",
        "correct": true,
        "explanation": "La base forte déprotone le carbone alpha et le transforme en centre nucléophile capable d’attaquer l’électrophile $\\ce{E+}$."
      },
      {
        "content": "Pour rendre le carbone carbonylé encore plus électrophile et y fixer E+.",
        "correct": false,
        "explanation": "La base forte agit sur un hydrogène en alpha du carbonyle afin de créer un centre nucléophile sur le carbone voisin."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Pour créer/mettre en valeur un centre nucléophile sur le carbone voisin du carbonyle.",
        "correct": true,
        "explanation": "La base forte déprotone le carbone alpha et crée un centre carboné nucléophile."
      }
    ],
    "explanation": "La base forte arrache un hydrogène en alpha et crée un centre carboné nucléophile capable de réagir ensuite avec $\\ce{E+}$."
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'oxydabilité des aldéhydes et des cétones, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une cétone est oxydée facilement en acide carboxylique.",
        "correct": false,
        "explanation": "Dans le modèle simplifié, la cétone est considérée comme inerte à l’oxydation ; elle n’est pas transformée facilement en acide carboxylique."
      },
      {
        "content": "Un aldéhyde ne peut pas être oxydé en acide carboxylique.",
        "correct": false,
        "explanation": "Un aldéhyde est oxydable en acide carboxylique dans le modèle étudié."
      },
      {
        "content": "Une cétone est décrite comme inerte à l'oxydation dans le modèle.",
        "correct": true,
        "explanation": "Dans le modèle simplifié, la cétone est considérée comme inerte à l’oxydation."
      },
      {
        "content": "Dire qu'un aldéhyde est oxydé signifie qu'il peut réduire l'agent d'oxydation.",
        "correct": true,
        "explanation": "Si l’aldéhyde est oxydé, il cède des électrons à l’agent oxydant et joue donc le rôle de réducteur."
      },
      {
        "content": "Une cétone est décrite comme plus facilement oxydable qu'un aldéhyde.",
        "correct": false,
        "explanation": "Dans le modèle simplifié, l’aldéhyde est oxydable alors que la cétone est considérée comme inerte à l’oxydation."
      }
    ],
    "explanation": "Dans le modèle étudié, un aldéhyde est oxydable en acide carboxylique alors qu'une cétone est considérée comme inerte à l'oxydation."
  },
  {
    "order": 67,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare méthylamine et diméthylamine face au même aldéhyde. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'eau est éliminée dans les deux transformations dans le modèle présenté.",
        "correct": true,
        "explanation": "Les condensations avec une amine primaire ou secondaire s’accompagnent toutes deux d’une élimination d’eau."
      },
      {
        "content": "Les deux amines donnent nécessairement le même type de produit.",
        "correct": false,
        "explanation": "Une amine primaire donne une imine, tandis qu’une amine secondaire donne un ion iminium ; les produits sont donc différents."
      },
      {
        "content": "Une amine secondaire donne nécessairement une amide lorsqu’elle réagit avec une cétone.",
        "correct": false,
        "explanation": "Avec une cétone ou un aldéhyde, le produit étudié est un iminium, pas une amide."
      },
      {
        "content": "La méthylamine, amine primaire, conduit à une imine.",
        "correct": true,
        "explanation": "Une amine primaire comme la méthylamine se condense avec le carbonyle pour former une imine."
      },
      {
        "content": "La diméthylamine, amine secondaire, conduit à un iminium.",
        "correct": true,
        "explanation": "Une amine secondaire comme la diméthylamine conduit à un ion iminium dans le bilan étudié."
      }
    ],
    "explanation": "Une amine primaire donne une imine et une amine secondaire un iminium ; les deux condensations s'accompagnent d'une élimination d'eau."
  },
  {
    "order": 68,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare un aldéhyde et une cétone face à une même amine primaire. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Les deux peuvent former une imine.",
        "correct": true,
        "explanation": "Avec une amine primaire, un aldéhyde comme une cétone peut former une imine."
      },
      {
        "content": "L'amine n’est pas nucléophile dans les deux cas.",
        "correct": false,
        "explanation": "Une amine possède un doublet non liant et agit comme nucléophile face au carbone carbonylé électrophile."
      },
      {
        "content": "L'élimination d'eau intervient dans les deux cas.",
        "correct": true,
        "explanation": "La formation d’une imine comme celle d’un iminium s’accompagne d’une élimination d’eau dans le bilan simplifié."
      },
      {
        "content": "La cétone donne nécessairement un iminium avec une amine primaire.",
        "correct": false,
        "explanation": "Une amine primaire réagissant avec une cétone conduit à une imine, pas à un iminium."
      },
      {
        "content": "Une amine primaire peut réagir avec un aldéhyde ou une cétone pour former une imine avec élimination d’eau.",
        "correct": true,
        "explanation": "La condensation de l’amine primaire avec le carbonyle conduit à une imine."
      }
    ],
    "explanation": "Avec une même amine primaire, un aldéhyde comme une cétone peut donner une imine avec élimination d'eau."
  },
  {
    "order": 69,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un dérivé aldéhydique comporte un $\\ce{CH2}$ voisin de la fonction aldéhyde. Après action d'une base forte puis ajout d'un électrophile $\\ce{E+}$, quelles transformations sont attendues ?",
    "choices": [
      {
        "content": "Une réduction obligatoire du carbonyle en alcool.",
        "correct": false,
        "explanation": "La fonctionnalisation alpha ne nécessite pas de réduire le groupe carbonyle en alcool."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "La création d'un centre nucléophile au niveau du CH2.",
        "correct": true,
        "explanation": "La base forte arrache un hydrogène au $\\ce{CH2}$ en alpha du carbonyle et crée à cet endroit un centre carboné nucléophile."
      },
      {
        "content": "La formation d'une liaison entre ce carbone voisin et E+.",
        "correct": true,
        "explanation": "Le centre nucléophile formé en alpha attaque ensuite $\\ce{E+}$ et crée une nouvelle liaison carbone–électrophile."
      },
      {
        "content": "Une fonctionnalisation de la position alpha.",
        "correct": true,
        "explanation": "La déprotonation en alpha suivie de l’attaque d’un électrophile correspond à une fonctionnalisation du carbone alpha."
      }
    ],
    "explanation": "La base forte crée d'abord un centre nucléophile au carbone alpha, qui forme ensuite une liaison avec l'électrophile."
  },
  {
    "order": 70,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles conditions sont nécessaires à la fonctionnalisation en position alpha décrite ?",
    "choices": [
      {
        "content": "Une base forte.",
        "correct": true,
        "explanation": "La base forte arrache d’abord un hydrogène en position alpha et crée un centre carboné nucléophile."
      },
      {
        "content": "Un électrophile après l'étape basique.",
        "correct": true,
        "explanation": "Le centre nucléophile formé en position alpha peut ensuite réagir avec un électrophile."
      },
      {
        "content": "Un organomagnésien obligatoire.",
        "correct": false,
        "explanation": "La voie décrite utilise une base forte puis un électrophile ; un organomagnésien n’est pas obligatoire."
      },
      {
        "content": "Le carbone alpha doit pouvoir être déprotoné.",
        "correct": true,
        "explanation": "La base forte doit pouvoir arracher un hydrogène en alpha pour créer le centre nucléophile avant l’ajout de l’électrophile."
      },
      {
        "content": "Un carbone voisin du carbonyle portant un hydrogène.",
        "correct": true,
        "explanation": "La formation du centre nucléophile en alpha nécessite qu’un hydrogène puisse être arraché sur le carbone voisin du carbonyle."
      }
    ],
    "explanation": "La fonctionnalisation alpha nécessite un hydrogène en alpha, une base forte puis un électrophile."
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'oxydation d'un aldéhyde:",
    "choices": [
      {
        "content": "L'oxydation transforme l'aldéhyde en alcool primaire.",
        "correct": false,
        "explanation": "L’oxydation d’un aldéhyde conduit à un acide carboxylique ; l’alcool primaire est au contraire obtenu par réduction."
      },
      {
        "content": "Le produit est un acide carboxylique.",
        "correct": true,
        "explanation": "L’oxydation de $\\ce{RCHO}$ conduit à l’acide carboxylique correspondant $\\ce{RCOOH}$."
      },
      {
        "content": "L'aldéhyde joue alors le rôle de réducteur vis-à-vis de l'agent d'oxydation.",
        "correct": true,
        "explanation": "L’aldéhyde est oxydé et cède des électrons à l’agent oxydant ; il joue donc le rôle de réducteur."
      },
      {
        "content": "La transformation est une réaction d'oxydo-réduction.",
        "correct": true,
        "explanation": "L’aldéhyde est oxydé tandis que l’agent oxydant est réduit : il s’agit d’une réaction d’oxydo-réduction."
      },
      {
        "content": "La fonction aldéhyde est inerte à l'oxydation.",
        "correct": false,
        "explanation": "Un aldéhyde peut être oxydé en acide carboxylique dans le modèle étudié."
      }
    ],
    "explanation": "Un aldéhyde peut être oxydé en acide carboxylique ; il joue alors le rôle de réducteur vis-à-vis de l'agent oxydant."
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'oxydabilité d'une cétone dans le modèle étudié, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La cétone est oxydée facilement en acide carboxylique.",
        "correct": false,
        "explanation": "La cétone est considérée comme inerte à l’oxydation dans le modèle, contrairement à l’aldéhyde."
      },
      {
        "content": "Cette différence avec l'aldéhyde sert à l'application aux sucres.",
        "correct": true,
        "explanation": "La différence d’oxydabilité entre aldéhyde et cétone est utilisée dans l’application aux sucres."
      },
      {
        "content": "À l'inverse, un aldéhyde peut être oxydé en acide carboxylique.",
        "correct": true,
        "explanation": "À l’inverse d’une cétone, un aldéhyde peut être oxydé en acide carboxylique dans le modèle étudié."
      },
      {
        "content": "La cétone n’est pas décrite comme inerte à l'oxydation.",
        "correct": false,
        "explanation": "La cétone est précisément décrite comme inerte à l’oxydation dans le modèle simplifié."
      },
      {
        "content": "La cétone ne peut donc pas réduire l'agent d'oxydation dans le modèle présenté.",
        "correct": true,
        "explanation": "Une cétone considérée comme non oxydable ne peut pas réduire l’agent oxydant dans ce modèle ; cette propriété est utilisée pour les sucres."
      }
    ],
    "explanation": "Dans le modèle simplifié, une cétone est considérée comme inerte à l'oxydation et ne réduit donc pas l'agent oxydant."
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel produit obtient-on par oxydation d'un aldéhyde $\\mathrm{RCHO}$?",
    "choices": [
      {
        "content": "$\\mathrm{RCOOH}$.",
        "correct": true,
        "explanation": "L’oxydation du groupe $\\ce{RCHO}$ conduit au groupe acide carboxylique $\\ce{RCOOH}$."
      },
      {
        "content": "$\\mathrm{RCOR'}$.",
        "correct": false,
        "explanation": "Un groupe cétone $\\ce{RCOR'}$ n’est pas le produit de l’oxydation d’un aldéhyde ; le produit attendu est $\\ce{RCOOH}$."
      },
      {
        "content": "$\\mathrm{RMgX}$.",
        "correct": false,
        "explanation": "$\\ce{RMgX}$ est un organomagnésien ; ce n’est pas le produit de l’oxydation d’un aldéhyde."
      },
      {
        "content": "$\\mathrm{RCHO}$.",
        "correct": false,
        "explanation": "$\\ce{RCHO}$ est l’aldéhyde de départ ; son oxydation conduit au groupe acide carboxylique $\\ce{RCOOH}$."
      },
      {
        "content": "$\\mathrm{RCH_2OH}$.",
        "correct": false,
        "explanation": "$\\ce{RCH2OH}$ est le produit de réduction d’un aldéhyde, pas son produit d’oxydation."
      }
    ],
    "explanation": "L'oxydation d'un aldéhyde $\\ce{RCHO}$ conduit à l'acide carboxylique correspondant $\\ce{RCOOH}$."
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le modèle simplifié, quelles propriétés permettent de distinguer un aldéhyde d'une cétone par leur oxydabilité ?",
    "choices": [
      {
        "content": "Les deux fonctions sont nécessairement aussi oxydables l'une que l'autre.",
        "correct": false,
        "explanation": "Dans le modèle étudié, l’aldéhyde est oxydable alors que la cétone est considérée comme inerte à l’oxydation."
      },
      {
        "content": "Une cétone est facilement oxydée en acide carboxylique dans ce modèle.",
        "correct": false,
        "explanation": "La cétone est au contraire considérée comme inerte à l’oxydation dans le modèle simplifié."
      },
      {
        "content": "L'aldéhyde n’est pas oxydable.",
        "correct": false,
        "explanation": "Un aldéhyde est oxydable en acide carboxylique dans le modèle étudié."
      },
      {
        "content": "La cétone est décrite comme inerte à l'oxydation.",
        "correct": true,
        "explanation": "L’inertie de la cétone à l’oxydation, dans ce modèle, la distingue de l’aldéhyde oxydable."
      },
      {
        "content": "L'oxydabilité peut donc constituer un critère de distinction dans ce modèle.",
        "correct": true,
        "explanation": "La différence d’oxydabilité peut donc être utilisée comme critère fonctionnel pour distinguer aldéhyde et cétone dans ce modèle."
      }
    ],
    "explanation": "L'aldéhyde est oxydable alors que la cétone est considérée comme inerte à l'oxydation ; cette différence permet de les distinguer dans ce modèle."
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une base forte est ajoutée à une cétone possédant des hydrogènes en alpha. Quelles propositions décrivent la réactivité obtenue ?",
    "choices": [
      {
        "content": "Un électrophile peut être ajouté ensuite.",
        "correct": true,
        "explanation": "Après déprotonation en alpha, le centre nucléophile formé peut réagir avec un électrophile."
      },
      {
        "content": "Une nouvelle liaison C-E peut se former en alpha.",
        "correct": true,
        "explanation": "Le carbone alpha nucléophile attaque l’électrophile et forme une liaison entre C et E."
      },
      {
        "content": "L'objectif est nécessairement d'oxyder la cétone.",
        "correct": false,
        "explanation": "La séquence base forte puis électrophile correspond à une fonctionnalisation en alpha, pas à une oxydation de la cétone."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Un centre nucléophile peut être créé au niveau du carbone alpha.",
        "correct": true,
        "explanation": "La base forte peut arracher un hydrogène en alpha et créer un centre carboné nucléophile."
      }
    ],
    "explanation": "Une base forte peut déprotoner un carbone alpha portant un hydrogène ; le centre nucléophile obtenu peut ensuite réagir avec un électrophile."
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un composé carbonylé ne possède aucun hydrogène sur ses carbones voisins. Quelles conséquences en tire-t-on ?",
    "choices": [
      {
        "content": "Le carbone du groupe carbonyle présente un caractère électrophile.",
        "correct": true,
        "explanation": "L’oxygène attire la densité électronique de la liaison $\\ce{C=O}$, ce qui appauvrit le carbone."
      },
      {
        "content": "La voie de fonctionnalisation alpha décrite n'est pas directement applicable à ces positions.",
        "correct": true,
        "explanation": "Sans hydrogène en alpha, la déprotonation par une base forte ne peut pas créer le centre nucléophile décrit."
      },
      {
        "content": "Le carbonyle ne peut pas néanmoins rester électrophile.",
        "correct": false,
        "explanation": "L’absence d’hydrogène en alpha n’empêche pas le carbone du carbonyle de rester électrophile."
      },
      {
        "content": "Le carbone carbonylé reste susceptible d'être attaqué par un hydrure.",
        "correct": true,
        "explanation": "L’absence d’hydrogène en alpha n’empêche pas un hydrure nucléophile d’attaquer le carbone carbonylé électrophile."
      },
      {
        "content": "Une base forte crée automatiquement un centre alpha nucléophile malgré l'absence de H.",
        "correct": false,
        "explanation": "Sans hydrogène en alpha, une base forte ne peut pas créer automatiquement un centre carboné nucléophile par déprotonation."
      }
    ],
    "explanation": "L'absence d'hydrogène en alpha empêche la fonctionnalisation alpha par déprotonation, sans supprimer l'électrophilie du carbone carbonylé."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel produit azoté est formé par réaction d'une amine primaire avec un aldéhyde ou une cétone ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "imine",
        "une imine"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Une amine primaire se condense avec un aldéhyde ou une cétone pour former une imine."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Amine primaire + carbonyle → imine.",
        "correct": true,
        "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
      },
      {
        "content": "Amine secondaire + carbonyle → iminium.",
        "correct": true,
        "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
      },
      {
        "content": "Une base forte peut activer le carbone alpha portant H.",
        "correct": true,
        "explanation": "Une base forte peut arracher un hydrogène en position alpha du carbonyle et créer un centre carboné nucléophile."
      },
      {
        "content": "L'électrophile est ajouté après la base forte.",
        "correct": true,
        "explanation": "La base forte crée d’abord le centre nucléophile en alpha ; l’électrophile est ajouté ensuite pour former la nouvelle liaison."
      },
      {
        "content": "Un aldéhyde peut être oxydé en acide carboxylique.",
        "correct": true,
        "explanation": "Un aldéhyde peut être oxydé en acide carboxylique dans le modèle étudié."
      },
      {
        "content": "Une cétone est décrite comme facilement oxydable.",
        "correct": false,
        "explanation": "Dans le modèle simplifié retenu, la cétone est considérée comme inerte à l’oxydation, contrairement à l’aldéhyde."
      },
      {
        "content": "L'iminium est le produit spécifique d'une amine primaire.",
        "correct": false,
        "explanation": "L’iminium est le produit associé à une amine secondaire ; une amine primaire conduit à une imine."
      },
      {
        "content": "La fonctionnalisation alpha commence par un organomagnésien obligatoire.",
        "correct": false,
        "explanation": "La fonctionnalisation en alpha débute par l’action d’une base forte sur un hydrogène alpha ; un organomagnésien n’est pas une étape obligatoire."
      },
      {
        "content": "Un aldéhyde est inerte à l'oxydation.",
        "correct": false,
        "explanation": "Un aldéhyde peut être oxydé en acide carboxylique dans le modèle étudié."
      },
      {
        "content": "L'électrophile se fixe nécessairement sur l'oxygène du carbonyle.",
        "correct": false,
        "explanation": "La liaison se forme avec le carbone alpha dans le schéma."
      }
    ],
    "explanation": "Les réactions étudiées associent condensation des amines, fonctionnalisation alpha en deux étapes et oxydation sélective de l'aldéhyde."
  }
];
