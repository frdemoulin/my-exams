import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.6 – Section C – Amines, fonctionnalisation alpha et oxydabilité
 */

export const UE14_CH10_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 57,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la réaction d'un aldéhyde ou d'une cétone avec une amine, quelles propositions sont exactes?",
    "choices": [
      {
        "content": "La classe de l'amine influence le produit azoté.",
        "correct": true,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée: il s’agit de la classe d’amine attendue."
      },
      {
        "content": "Le carbone carbonylé n'intervient pas.",
        "correct": false,
        "explanation": "Il est le centre électrophile attaqué."
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
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée: il s’agit de la classe d’amine attendue."
  },
  {
    "order": 58,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un aldéhyde réagit avec une amine primaire. Quel produit azoté est formé ?",
    "choices": [
      {
        "content": "Une imine.",
        "correct": true,
        "explanation": "Ce bilan reprend directement la transformation attendue dans cette réaction."
      },
      {
        "content": "Un alcool primaire.",
        "correct": false,
        "explanation": "La réduction du groupe fonctionnel conduit à la formation du produit correspondant."
      },
      {
        "content": "Un iminium dans le cas d'une amine primaire.",
        "correct": false,
        "explanation": "Une amine primaire conduit à une imine ; l’ion iminium est obtenu avec une amine secondaire dans le bilan étudié."
      },
      {
        "content": "Un acide carboxylique.",
        "correct": false,
        "explanation": "Cette proposition est écartée: d'oxydation ne correspond pas au bilan ou à la propriété attendue."
      },
      {
        "content": "Une amine primaire peut réagir avec un aldéhyde ou une cétone pour former une imine avec élimination d’eau.",
        "correct": true,
        "explanation": "La condensation de l’amine primaire avec le carbonyle conduit à une imine."
      }
    ],
    "explanation": "Ce bilan reprend directement la transformation attendue dans cette réaction."
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
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
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
    "explanation": "Une amine primaire se condense avec un composé carbonylé pour former une imine avec élimination d’eau."
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
        "explanation": "L’addition d’un organomagnésien sur le carbonyle permet d’obtenir le produit correspondant après hydrolyse."
      },
      {
        "content": "Une amine secondaire donne nécessairement une amide lorsqu’elle réagit avec une cétone.",
        "correct": false,
        "explanation": "Avec une cétone ou un aldéhyde, le produit étudié est un iminium, pas une amide."
      },
      {
        "content": "La formation d'une imine.",
        "correct": true,
        "explanation": "Ce bilan correspond à la transformation attendue et relie correctement le substrat au produit."
      }
    ],
    "explanation": "La condensation avec l’amine s’accompagne d’une élimination d’eau ; retirer l’eau favorise le sens de formation du produit."
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
        "explanation": "Ce bilan correspond à la transformation attendue et relie correctement le substrat au produit."
      },
      {
        "content": "L'eau doit être éliminée dans le modèle pour pousser la réaction.",
        "correct": true,
        "explanation": "Comme l’eau est un produit de la condensation, son élimination déplace l’équilibre vers l’imine ou l’iminium."
      },
      {
        "content": "Le carbone carbonylé est le centre électrophile initial.",
        "correct": true,
        "explanation": "Cohérent avec la polarité étudiée."
      },
      {
        "content": "Le produit est une amide.",
        "correct": false,
        "explanation": "Ce n'est pas une acylation d'amine."
      }
    ],
    "explanation": "Avec une cétone ou un aldéhyde, le produit étudié est un iminium, pas une amide."
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel produit azoté est associé à une amine primaire réagissant avec un carbonyle?",
    "choices": [
      {
        "content": "Ammonium quaternaire.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan."
      },
      {
        "content": "Ester.",
        "correct": false,
        "explanation": "La réaction entre une amine et un carbonyle simple ne forme pas un ester."
      },
      {
        "content": "Iminium.",
        "correct": false,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée: il s’agit de la classe d’amine attendue."
      },
      {
        "content": "Imine.",
        "correct": true,
        "explanation": "Une amine primaire réagissant avec un aldéhyde ou une cétone conduit à une imine."
      },
      {
        "content": "Amide.",
        "correct": false,
        "explanation": "Il faudrait un dérivé d'acide activé."
      }
    ],
    "explanation": "Ce n'est pas le bilan."
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel produit azoté est associé à une amine secondaire réagissant avec un carbonyle?",
    "choices": [
      {
        "content": "Une amine secondaire donne nécessairement une amide lorsqu’elle réagit avec une cétone.",
        "correct": false,
        "explanation": "Avec une cétone ou un aldéhyde, le produit étudié est un iminium, pas une amide."
      },
      {
        "content": "Imine.",
        "correct": false,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée: il s’agit de la classe d’amine attendue."
      },
      {
        "content": "Ester.",
        "correct": false,
        "explanation": "Une condensation entre une amine et un aldéhyde ou une cétone ne forme pas un ester."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "Cette proposition ne correspond pas à la transformation ou à la propriété demandée."
      },
      {
        "content": "Iminium.",
        "correct": true,
        "explanation": "Une amine secondaire réagissant avec un composé carbonylé conduit à un ion iminium."
      }
    ],
    "explanation": "Avec une cétone ou un aldéhyde, le produit étudié est un iminium, pas une amide."
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la réaction d'un dérivé carbonylé avec un électrophile:",
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
        "explanation": "Une base forte intervient d'abord. Cette étape intervient en premier dans l’enchaînement réactionnel considéré."
      },
      {
        "content": "Elle met en valeur le caractère nucléophile du carbone voisin du carbonyle.",
        "correct": true,
        "explanation": "Centre nucléophile créé au CH2."
      },
      {
        "content": "L'électrophile intervient ensuite.",
        "correct": true,
        "explanation": "L'électrophile intervient ensuite. Cette étape suit la première transformation de l’enchaînement."
      }
    ],
    "explanation": "La liaison se forme avec le carbone voisin devenu nucléophile."
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi la base forte est-elle utilisée avant l'électrophile?",
    "choices": [
      {
        "content": "Parce que ce carbone doit porter un hydrogène dans le modèle.",
        "correct": true,
        "explanation": "Condition donnée dans les propriétés."
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
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Condition donnée dans les propriétés."
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'oxydabilité des fonctions carbonylées :",
    "choices": [
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "La fonction acide carboxylique est plus difficile à réduire que les aldéhydes et les cétones."
      },
      {
        "content": "Un aldéhyde ne peut pas être oxydé en acide carboxylique.",
        "correct": false,
        "explanation": "La relation correcte est: « Un aldéhyde peut être oxydé en acide carboxylique ». La négation proposée est donc fausse."
      },
      {
        "content": "Une cétone est décrite comme inerte à l'oxydation dans le modèle.",
        "correct": true,
        "explanation": "Cette relation constitue l’un des éléments directement utiles pour prévoir le produit de la réaction."
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
    "explanation": "La fonction acide carboxylique est plus difficile à réduire que les aldéhydes et les cétones."
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
    "explanation": "Les condensations avec une amine primaire ou secondaire s’accompagnent toutes deux d’une élimination d’eau."
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
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "L'amine n’est pas nucléophile dans les deux cas.",
        "correct": false,
        "explanation": "La relation correcte est: « L'amine est nucléophile dans les deux cas ». La négation proposée est donc fausse."
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
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
  },
  {
    "order": 69,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un dérivé aldéhydique comporte un $\\ce{CH2}$ voisin de la fonction aldéhyde. Après base forte puis ajout d’un électrophile E+, quelles transformations sont attendues ?",
    "choices": [
      {
        "content": "Une réduction obligatoire du carbonyle en alcool.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan présenté."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "La création d'un centre nucléophile au niveau du CH2.",
        "correct": true,
        "explanation": "La création d'un centre nucléophile au niveau du CH2. Cette étape intervient en premier dans l’enchaînement réactionnel considéré."
      },
      {
        "content": "La formation d'une liaison entre ce carbone voisin et E+.",
        "correct": true,
        "explanation": "La formation d'une liaison entre ce carbone voisin et E+. Cette étape suit la première transformation de l’enchaînement."
      },
      {
        "content": "Une fonctionnalisation de la position alpha.",
        "correct": true,
        "explanation": "La déprotonation en alpha suivie de l’attaque d’un électrophile correspond à une fonctionnalisation du carbone alpha."
      }
    ],
    "explanation": "Ce n'est pas le bilan présenté."
  },
  {
    "order": 70,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles conditions doivent être réunies pour la fonctionnalisation alpha décrite?",
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
        "explanation": "Ce n'est pas la voie présentée ici."
      },
      {
        "content": "Le carbone du groupe carbonyle présente un caractère électrophile.",
        "correct": true,
        "explanation": "L’oxygène attire la densité électronique de la liaison $\\ce{C=O}$, ce qui appauvrit le carbone."
      },
      {
        "content": "Un carbone voisin du carbonyle portant un hydrogène.",
        "correct": true,
        "explanation": "La formation du centre nucléophile en alpha nécessite qu’un hydrogène puisse être arraché sur le carbone voisin du carbonyle."
      }
    ],
    "explanation": "La base forte arrache d’abord un hydrogène en position alpha et crée un centre carboné nucléophile."
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'oxydation d'un aldéhyde:",
    "choices": [
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "La fonction acide carboxylique est plus difficile à réduire que les aldéhydes et les cétones."
      },
      {
        "content": "Le produit est un acide carboxylique.",
        "correct": true,
        "explanation": "En hydrolyse acide d’un ester, le fragment acyle est retrouvé sous forme d’acide carboxylique $\\ce{RCOOH}$."
      },
      {
        "content": "L'aldéhyde joue alors le rôle de réducteur vis-à-vis de l'agent d'oxydation.",
        "correct": true,
        "explanation": "Un aldéhyde peut être oxydé en acide carboxylique dans le modèle étudié."
      },
      {
        "content": "La transformation est une réaction d'oxydo-réduction.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "La fonction aldéhyde est inerte à l'oxydation.",
        "correct": false,
        "explanation": "Un aldéhyde peut être oxydé en acide carboxylique dans le modèle étudié."
      }
    ],
    "explanation": "La fonction acide carboxylique est plus difficile à réduire que les aldéhydes et les cétones."
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la cétone dans la rubrique oxydabilité:",
    "choices": [
      {
        "content": "Elle est oxydée facilement en acide carboxylique.",
        "correct": false,
        "explanation": "Ce n'est pas le modèle."
      },
      {
        "content": "Cette différence avec l'aldéhyde sert à l'application aux sucres.",
        "correct": true,
        "explanation": "La différence d’oxydabilité entre aldéhyde et cétone est utilisée dans l’application aux sucres."
      },
      {
        "content": "La réduction directe d’un acide carboxylique sous conditions fortes peut poursuivre jusqu’à l’alcool.",
        "correct": true,
        "explanation": "L’aldéhyde intermédiaire est difficile à isoler lorsque les conditions sont suffisamment réductrices."
      },
      {
        "content": "Elle n’est pas décrite comme inerte à l'oxydation.",
        "correct": false,
        "explanation": "La relation correcte est: « Elle est décrite comme inerte à l'oxydation ». La négation proposée est donc fausse."
      },
      {
        "content": "Elle ne peut donc pas réduire l'agent d'oxydation dans le modèle présenté.",
        "correct": true,
        "explanation": "Conséquence utilisée ensuite pour les sucres."
      }
    ],
    "explanation": "Ce n'est pas le modèle."
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
        "explanation": "En hydrolyse acide d’un ester, le fragment acyle est retrouvé sous forme d’acide carboxylique $\\ce{RCOOH}$."
      },
      {
        "content": "$\\mathrm{RCOR'}$.",
        "correct": false,
        "explanation": "Le motif ou le produit considéré correspond bien à une fonction cétone."
      },
      {
        "content": "$\\mathrm{RMgX}$.",
        "correct": false,
        "explanation": "L’addition d’un organomagnésien sur le carbonyle permet d’obtenir le produit correspondant après hydrolyse."
      },
      {
        "content": "Cétone.",
        "correct": false,
        "explanation": "Une cétone porte deux substituants carbonés sur le carbone du carbonyle."
      },
      {
        "content": "$\\mathrm{RCH_2OH}$.",
        "correct": false,
        "explanation": "La réduction du groupe fonctionnel conduit à la formation du produit correspondant."
      }
    ],
    "explanation": "En hydrolyse acide d’un ester, le fragment acyle est retrouvé sous forme d’acide carboxylique $\\ce{RCOOH}$."
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On souhaite distinguer expérimentalement deux fonctions dans le modèle simplifié: un aldéhyde et une cétone. Quel raisonnement est pertinent?",
    "choices": [
      {
        "content": "Les deux fonctions sont nécessairement aussi oxydables l'une que l'autre.",
        "correct": false,
        "explanation": "Dans le modèle étudié, l’aldéhyde est oxydable alors que la cétone est considérée comme inerte à l’oxydation."
      },
      {
        "content": "L’oxydation d’un alcool secondaire conduit directement à un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool secondaire donne une cétone dans le modèle étudié."
      },
      {
        "content": "L'aldéhyde n’est pas oxydable.",
        "correct": false,
        "explanation": "La relation correcte est: « L'aldéhyde est oxydable ». La négation proposée est donc fausse."
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
    "explanation": "La différence d’oxydabilité peut donc être utilisée comme critère fonctionnel pour distinguer aldéhyde et cétone dans ce modèle."
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une base forte est ajoutée à une cétone possédant des hydrogènes en alpha. Quelles propositions décrivent correctement la réactivité obtenue ?",
    "choices": [
      {
        "content": "Un électrophile peut être ajouté ensuite.",
        "correct": true,
        "explanation": "Après déprotonation en alpha, le centre nucléophile formé peut réagir avec un électrophile."
      },
      {
        "content": "Une nouvelle liaison C-E peut se former en alpha.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "L'objectif est nécessairement d'oxyder la cétone.",
        "correct": false,
        "explanation": "Il s'agit d'une fonctionnalisation alpha."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Un centre nucléophile peut être créé au niveau du carbone alpha.",
        "correct": true,
        "explanation": "Mise en valeur du caractère nucléophile."
      }
    ],
    "explanation": "Après déprotonation en alpha, le centre nucléophile formé peut réagir avec un électrophile. Mise en valeur du caractère nucléophile."
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un composé carbonylé ne possède aucun hydrogène sur ses carbones voisins. Dans le modèle:",
    "choices": [
      {
        "content": "Le carbone du groupe carbonyle présente un caractère électrophile.",
        "correct": true,
        "explanation": "L’oxygène attire la densité électronique de la liaison $\\ce{C=O}$, ce qui appauvrit le carbone."
      },
      {
        "content": "La voie de fonctionnalisation alpha décrite n'est pas directement applicable à ces positions.",
        "correct": true,
        "explanation": "La présence d'un H est requise."
      },
      {
        "content": "Le carbonyle ne peut pas néanmoins rester électrophile.",
        "correct": false,
        "explanation": "La relation correcte est: « Le carbonyle peut néanmoins rester électrophile ». La négation proposée est donc fausse."
      },
      {
        "content": "Un hydrure peut toujours être envisagé comme nucléophile au carbonyle selon la famille.",
        "correct": true,
        "explanation": "Un hydrure peut agir comme nucléophile sur le carbone électrophile du carbonyle lors d’une réduction."
      },
      {
        "content": "Une base forte crée automatiquement un centre alpha nucléophile malgré l'absence de H.",
        "correct": false,
        "explanation": "La condition n'est pas remplie."
      }
    ],
    "explanation": "L’oxygène attire la densité électronique de la liaison $\\ce{C=O}$, ce qui appauvrit le carbone."
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
    "explanation": "Une amine primaire se condense avec un aldéhyde ou une cétone pour former une imine avec élimination d'eau."
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
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée : il s’agit de la classe d’amine attendue."
      },
      {
        "content": "La fonctionnalisation alpha commence par un organomagnésien obligatoire.",
        "correct": false,
        "explanation": "Un organomagnésien apporte un fragment carboné nucléophile qui forme une nouvelle liaison carbone–carbone avec un centre électrophile."
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
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
  }
];
