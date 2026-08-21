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
        "explanation": "Le support le précise: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une élimination d'eau est nécessaire pour que la réaction soit totale dans le modèle.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "La réaction carbonyle-amine est une addition/condensation nucléophile dont le produit dépend de la classe de l'amine."
  },
  {
    "order": 58,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un aldéhyde réagit avec une amine primaire. Quel produit la associe-t-elle à cette réaction?",
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
        "explanation": "Le support réserve l'iminium à l'amine secondaire."
      },
      {
        "content": "Un acide carboxylique.",
        "correct": false,
        "explanation": "Ce serait une oxydation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une amine primaire peut réagir avec un aldéhyde ou une cétone pour former une imine avec élimination d’eau.",
        "correct": true,
        "explanation": "La condensation de l’amine primaire avec le carbonyle conduit à une imine."
      }
    ],
    "explanation": "Amine primaire + aldéhyde → imine, avec élimination d'eau."
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
        "explanation": "La associe l'imine à l'amine primaire."
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
        "explanation": "Rôle général: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'élimination d'eau favorise la transformation totale dans le modèle.",
        "correct": true,
        "explanation": "Condition citée: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Amine secondaire + aldéhyde → iminium dans le modèle."
  },
  {
    "order": 60,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une cétone réagit avec une amine primaire. Le support prévoit:",
    "choices": [
      {
        "content": "L'intervention du caractère nucléophile de l'amine.",
        "correct": true,
        "explanation": "Principe: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une élimination d'eau.",
        "correct": true,
        "explanation": "Condition générale: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Amine primaire + cétone → imine."
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
        "explanation": "Précision: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Amine secondaire + cétone → iminium."
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
        "explanation": "Association: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Amide.",
        "correct": false,
        "explanation": "Il faudrait un dérivé d'acide activé."
      }
    ],
    "explanation": "Amine primaire + aldéhyde ou cétone → imine."
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
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "Sans rapport: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Iminium.",
        "correct": true,
        "explanation": "Association: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Amine secondaire + aldéhyde ou cétone → iminium."
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
        "explanation": "Première étape: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elle met en valeur le caractère nucléophile du carbone voisin du carbonyle.",
        "correct": true,
        "explanation": "Centre nucléophile créé au CH2."
      },
      {
        "content": "L'électrophile intervient ensuite.",
        "correct": true,
        "explanation": "Deuxième étape: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La fonctionnalisation alpha est présentée en deux étapes: base forte puis électrophile."
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
        "explanation": "Conséquence: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Pour rendre le carbone carbonylé encore plus électrophile et y fixer E+.",
        "correct": false,
        "explanation": "Le support vise le carbone voisin."
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
    "explanation": "La base forte active la position alpha avant l'étape d'électrophile."
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
        "explanation": "Le chapitre souligne au contraire que la fonction acide est plus difficile à réduire."
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
        "explanation": "Le support fait ce lien redox."
      },
      {
        "content": "Une cétone est décrite comme plus facilement oxydable qu'un aldéhyde.",
        "correct": false,
        "explanation": "C'est l'inverse: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "L'oxydabilité distingue fortement aldéhydes et cétones dans le modèle enseigné."
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
        "explanation": "Condition générale: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les deux amines donnent nécessairement le même type de produit.",
        "correct": false,
        "explanation": "Imine et iminium diffèrent: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une amine secondaire donne nécessairement une amide lorsqu’elle réagit avec une cétone.",
        "correct": false,
        "explanation": "Avec une cétone ou un aldéhyde, le produit étudié est un iminium, pas une amide."
      },
      {
        "content": "La méthylamine, amine primaire, conduit à une imine.",
        "correct": true,
        "explanation": "Association: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La diméthylamine, amine secondaire, conduit à un iminium.",
        "correct": true,
        "explanation": "Association: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La classe de l'amine suffit à distinguer le type de produit azoté attendu."
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
        "explanation": "Condition commune: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La cétone donne nécessairement un iminium avec une amine primaire.",
        "correct": false,
        "explanation": "Elle donne une imine: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une amine primaire peut réagir avec un aldéhyde ou une cétone pour former une imine avec élimination d’eau.",
        "correct": true,
        "explanation": "La condensation de l’amine primaire avec le carbonyle conduit à une imine."
      }
    ],
    "explanation": "Aldéhyde ou cétone + amine primaire → imine."
  },
  {
    "order": 69,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un dérivé aldéhydique comporte un CH2 voisin de la fonction aldéhyde. Après base forte puis ajout d'un électrophile E+, le support prévoit:",
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
        "explanation": "Première étape: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La formation d'une liaison entre ce carbone voisin et E+.",
        "correct": true,
        "explanation": "Deuxième étape: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une fonctionnalisation de la position alpha.",
        "correct": true,
        "explanation": "Nom de la transformation: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La position alpha peut être fonctionnalisée sans que l'objectif principal soit la réduction du carbonyle."
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
        "explanation": "Condition de nucléophilie alpha: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le schéma base forte puis électrophile exploite un hydrogène alpha."
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
        "explanation": "Le chapitre souligne au contraire que la fonction acide est plus difficile à réduire."
      },
      {
        "content": "Le produit est un acide carboxylique.",
        "correct": true,
        "explanation": "RCHO → RCOOH: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'aldéhyde joue alors le rôle de réducteur vis-à-vis de l'agent d'oxydation.",
        "correct": true,
        "explanation": "Formulation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La transformation est une réaction d'oxydo-réduction.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "La fonction aldéhyde est inerte à l'oxydation.",
        "correct": false,
        "explanation": "Elle est oxydable: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "L'oxydabilité de l'aldéhyde est la base de son pouvoir réducteur dans le modèle."
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
        "explanation": "La section IV s'appuie dessus."
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
    "explanation": "Le contraste aldéhyde oxydable / cétone inerte est réutilisé pour classer les sucres."
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
        "explanation": "Acide carboxylique: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Aldéhyde → acide carboxylique par oxydation."
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
        "explanation": "Le cours les oppose: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’oxydation d’un alcool secondaire conduit directement à un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool secondaire donne une cétone dans le cadre du chapitre."
      },
      {
        "content": "L'aldéhyde n’est pas oxydable.",
        "correct": false,
        "explanation": "La relation correcte est: « L'aldéhyde est oxydable ». La négation proposée est donc fausse."
      },
      {
        "content": "La cétone est décrite comme inerte à l'oxydation.",
        "correct": true,
        "explanation": "Contraste: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'oxydabilité peut donc constituer un critère de distinction dans ce modèle.",
        "correct": true,
        "explanation": "Application directe: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "L'oxydabilité fournit un critère fonctionnel de différenciation dans le cadre enseigné."
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une base forte est ajoutée à une cétone possédant des hydrogènes en alpha. Quelles propositions sont cohérentes avec le support?",
    "choices": [
      {
        "content": "Un électrophile peut être ajouté ensuite.",
        "correct": true,
        "explanation": "Deuxième étape: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Le carbone voisin du carbonyle devient un site de création de liaison avec un électrophile."
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
        "explanation": "Le support traite la réduction des carbonyles."
      },
      {
        "content": "Une base forte crée automatiquement un centre alpha nucléophile malgré l'absence de H.",
        "correct": false,
        "explanation": "La condition n'est pas remplie."
      }
    ],
    "explanation": "Il faut vérifier séparément la réactivité du carbonyle et celle des positions voisines."
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
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Amine secondaire + carbonyle → iminium.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Une base forte peut activer le carbone alpha portant H.",
        "correct": true,
        "explanation": "Fonctionnalisation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'électrophile est ajouté après la base forte.",
        "correct": true,
        "explanation": "Ordre des étapes : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un aldéhyde peut être oxydé en acide carboxylique.",
        "correct": true,
        "explanation": "Oxydabilité : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une cétone est décrite comme facilement oxydable.",
        "correct": false,
        "explanation": "Inerte : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'iminium est le produit spécifique d'une amine primaire.",
        "correct": false,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée : il s’agit de la classe d’amine attendue."
      },
      {
        "content": "La fonctionnalisation alpha commence par un organomagnésien obligatoire.",
        "correct": false,
        "explanation": "Base forte : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un aldéhyde est inerte à l'oxydation.",
        "correct": false,
        "explanation": "Il est oxydable : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'électrophile se fixe nécessairement sur l'oxygène du carbonyle.",
        "correct": false,
        "explanation": "La liaison se forme avec le carbone alpha dans le schéma."
      }
    ],
    "explanation": "Cette sélection consolide réactions avec les amines, fonctionnalisation alpha et oxydabilité."
  }
];
