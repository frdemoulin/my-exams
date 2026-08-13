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
        "content": "L'amine est décrite comme un nucléophile.",
        "correct": true,
        "explanation": "Le support le précise."
      },
      {
        "content": "Une élimination d'eau est nécessaire pour que la réaction soit totale dans le modèle de la fiche.",
        "correct": true,
        "explanation": "Point explicitement indiqué."
      },
      {
        "content": "La classe de l'amine influence le produit azoté.",
        "correct": true,
        "explanation": "Amine primaire versus secondaire."
      },
      {
        "content": "Le carbone carbonylé n'intervient pas.",
        "correct": false,
        "explanation": "Il est le centre électrophile attaqué."
      }
    ],
    "explanation": "La réaction carbonyle-amine est une addition/condensation nucléophile dont le produit dépend de la classe de l'amine."
  },
  {
    "order": 58,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un aldéhyde réagit avec une amine primaire. Quel produit la fiche associe-t-elle à cette réaction ?",
    "choices": [
      {
        "content": "Une imine.",
        "correct": true,
        "explanation": "Bilan explicite."
      },
      {
        "content": "Un alcool primaire.",
        "correct": false,
        "explanation": "Ce serait une réduction."
      },
      {
        "content": "Un iminium dans le cas d'une amine primaire.",
        "correct": false,
        "explanation": "Le support réserve l'iminium à l'amine secondaire."
      },
      {
        "content": "Un acide carboxylique.",
        "correct": false,
        "explanation": "Ce serait une oxydation."
      }
    ],
    "explanation": "Amine primaire + aldéhyde → imine, avec élimination d'eau."
  },
  {
    "order": 59,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un aldéhyde réagit avec une amine secondaire. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un iminium est formé.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "L'amine joue le rôle de nucléophile.",
        "correct": true,
        "explanation": "Rôle général."
      },
      {
        "content": "L'élimination d'eau favorise la transformation totale dans le modèle.",
        "correct": true,
        "explanation": "Condition citée."
      },
      {
        "content": "Une imine est le produit spécifique de l'amine secondaire dans la fiche.",
        "correct": false,
        "explanation": "La fiche associe l'imine à l'amine primaire."
      }
    ],
    "explanation": "Amine secondaire + aldéhyde → iminium dans le modèle de la fiche."
  },
  {
    "order": 60,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une cétone réagit avec une amine primaire. Le support prévoit :",
    "choices": [
      {
        "content": "La formation d'une imine.",
        "correct": true,
        "explanation": "Bilan indiqué."
      },
      {
        "content": "L'intervention du caractère nucléophile de l'amine.",
        "correct": true,
        "explanation": "Principe."
      },
      {
        "content": "Une élimination d'eau.",
        "correct": true,
        "explanation": "Condition générale."
      },
      {
        "content": "La formation d'un alcool tertiaire.",
        "correct": false,
        "explanation": "Il faudrait un organomagnésien."
      }
    ],
    "explanation": "Amine primaire + cétone → imine."
  },
  {
    "order": 61,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une cétone réagit avec une amine secondaire. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un iminium est formé.",
        "correct": true,
        "explanation": "Bilan indiqué."
      },
      {
        "content": "L'eau doit être éliminée dans le modèle pour pousser la réaction.",
        "correct": true,
        "explanation": "Précision du support."
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
    "question": "Quel produit azoté est associé à une amine primaire réagissant avec un carbonyle ?",
    "choices": [
      {
        "content": "Imine.",
        "correct": true,
        "explanation": "Association du cours."
      },
      {
        "content": "Iminium.",
        "correct": false,
        "explanation": "Association de l'amine secondaire."
      },
      {
        "content": "Amide.",
        "correct": false,
        "explanation": "Il faudrait un dérivé d'acide activé."
      },
      {
        "content": "Ammonium quaternaire.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan."
      }
    ],
    "explanation": "Amine primaire + aldéhyde ou cétone → imine."
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel produit azoté est associé à une amine secondaire réagissant avec un carbonyle ?",
    "choices": [
      {
        "content": "Iminium.",
        "correct": true,
        "explanation": "Association du cours."
      },
      {
        "content": "Imine.",
        "correct": false,
        "explanation": "Association de l'amine primaire."
      },
      {
        "content": "Ester.",
        "correct": false,
        "explanation": "Pas d'alcool/acide activé."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Amine secondaire + aldéhyde ou cétone → iminium."
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la réaction d'un dérivé carbonylé avec un électrophile dans la fiche :",
    "choices": [
      {
        "content": "Une base forte intervient d'abord.",
        "correct": true,
        "explanation": "Première étape."
      },
      {
        "content": "Elle met en valeur le caractère nucléophile du carbone voisin du carbonyle.",
        "correct": true,
        "explanation": "Centre nucléophile créé au CH2."
      },
      {
        "content": "L'électrophile intervient ensuite.",
        "correct": true,
        "explanation": "Deuxième étape."
      },
      {
        "content": "L'électrophile attaque directement l'oxygène du carbonyle dans le bilan présenté.",
        "correct": false,
        "explanation": "La liaison se forme avec le carbone voisin devenu nucléophile."
      }
    ],
    "explanation": "La fonctionnalisation alpha est présentée en deux étapes : base forte puis électrophile."
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi la base forte est-elle utilisée avant l'électrophile ?",
    "choices": [
      {
        "content": "Pour créer/mettre en valeur un centre nucléophile sur le carbone voisin du carbonyle.",
        "correct": true,
        "explanation": "But explicite."
      },
      {
        "content": "Parce que ce carbone doit porter un hydrogène dans le modèle de la fiche.",
        "correct": true,
        "explanation": "Condition donnée dans les propriétés."
      },
      {
        "content": "Pour transformer le carbone voisin en centre capable de réagir avec E+.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Pour rendre le carbone carbonylé encore plus électrophile et y fixer E+.",
        "correct": false,
        "explanation": "Le support vise le carbone voisin."
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
        "content": "Un aldéhyde peut être oxydé en acide carboxylique.",
        "correct": true,
        "explanation": "Bilan RCHO → RCOOH."
      },
      {
        "content": "Une cétone est décrite comme inerte à l'oxydation dans le modèle de la fiche.",
        "correct": true,
        "explanation": "Point explicite."
      },
      {
        "content": "Dire qu'un aldéhyde est oxydé signifie qu'il peut réduire l'agent d'oxydation.",
        "correct": true,
        "explanation": "Le support fait ce lien redox."
      },
      {
        "content": "Une cétone est décrite comme plus facilement oxydable qu'un aldéhyde.",
        "correct": false,
        "explanation": "C'est l'inverse dans la fiche."
      }
    ],
    "explanation": "L'oxydabilité distingue fortement aldéhydes et cétones dans le modèle enseigné."
  },
  {
    "order": 67,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare méthylamine et diméthylamine face au même aldéhyde. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La méthylamine, amine primaire, conduit à une imine.",
        "correct": true,
        "explanation": "Association du cours."
      },
      {
        "content": "La diméthylamine, amine secondaire, conduit à un iminium.",
        "correct": true,
        "explanation": "Association du cours."
      },
      {
        "content": "L'eau est éliminée dans les deux transformations dans le modèle présenté.",
        "correct": true,
        "explanation": "Condition générale."
      },
      {
        "content": "Les deux amines donnent nécessairement le même type de produit.",
        "correct": false,
        "explanation": "Imine et iminium diffèrent."
      }
    ],
    "explanation": "La classe de l'amine suffit à distinguer le type de produit azoté attendu."
  },
  {
    "order": 68,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare un aldéhyde et une cétone face à une même amine primaire. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux peuvent former une imine.",
        "correct": true,
        "explanation": "Bilan de la fiche."
      },
      {
        "content": "L'amine est nucléophile dans les deux cas.",
        "correct": true,
        "explanation": "Principe commun."
      },
      {
        "content": "L'élimination d'eau intervient dans les deux cas.",
        "correct": true,
        "explanation": "Condition commune."
      },
      {
        "content": "La cétone donne nécessairement un iminium avec une amine primaire.",
        "correct": false,
        "explanation": "Elle donne une imine."
      }
    ],
    "explanation": "Aldéhyde ou cétone + amine primaire → imine."
  },
  {
    "order": 69,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un dérivé aldéhydique comporte un CH2 voisin de la fonction aldéhyde. Après base forte puis ajout d'un électrophile E+, le support prévoit :",
    "choices": [
      {
        "content": "La création d'un centre nucléophile au niveau du CH2.",
        "correct": true,
        "explanation": "Première étape."
      },
      {
        "content": "La formation d'une liaison entre ce carbone voisin et E+.",
        "correct": true,
        "explanation": "Deuxième étape."
      },
      {
        "content": "Une fonctionnalisation de la position alpha.",
        "correct": true,
        "explanation": "Nom de la transformation."
      },
      {
        "content": "Une réduction obligatoire du carbonyle en alcool.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan présenté."
      }
    ],
    "explanation": "La position alpha peut être fonctionnalisée sans que l'objectif principal soit la réduction du carbonyle."
  },
  {
    "order": 70,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles conditions doivent être réunies pour la fonctionnalisation alpha décrite ?",
    "choices": [
      {
        "content": "Un carbone voisin du carbonyle portant un hydrogène.",
        "correct": true,
        "explanation": "Condition de nucléophilie alpha du support."
      },
      {
        "content": "Une base forte.",
        "correct": true,
        "explanation": "Première étape."
      },
      {
        "content": "Un électrophile après l'étape basique.",
        "correct": true,
        "explanation": "Deuxième étape."
      },
      {
        "content": "Un organomagnésien obligatoire.",
        "correct": false,
        "explanation": "Ce n'est pas la voie présentée ici."
      }
    ],
    "explanation": "Le schéma base forte puis électrophile exploite un hydrogène alpha."
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'oxydation d'un aldéhyde :",
    "choices": [
      {
        "content": "Le produit est un acide carboxylique.",
        "correct": true,
        "explanation": "RCHO → RCOOH."
      },
      {
        "content": "L'aldéhyde joue alors le rôle de réducteur vis-à-vis de l'agent d'oxydation.",
        "correct": true,
        "explanation": "Formulation de la fiche."
      },
      {
        "content": "La transformation est une réaction d'oxydo-réduction.",
        "correct": true,
        "explanation": "Précision explicite."
      },
      {
        "content": "La fonction aldéhyde est inerte à l'oxydation.",
        "correct": false,
        "explanation": "Elle est oxydable."
      }
    ],
    "explanation": "L'oxydabilité de l'aldéhyde est la base de son pouvoir réducteur dans le modèle du support."
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la cétone dans la rubrique oxydabilité :",
    "choices": [
      {
        "content": "Elle est décrite comme inerte à l'oxydation.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "Elle ne peut donc pas réduire l'agent d'oxydation dans le modèle présenté.",
        "correct": true,
        "explanation": "Conséquence utilisée ensuite pour les sucres."
      },
      {
        "content": "Elle est oxydée facilement en acide carboxylique.",
        "correct": false,
        "explanation": "Ce n'est pas le modèle de la fiche."
      },
      {
        "content": "Cette différence avec l'aldéhyde sert à l'application aux sucres.",
        "correct": true,
        "explanation": "La section IV s'appuie dessus."
      }
    ],
    "explanation": "Le contraste aldéhyde oxydable / cétone inerte est réutilisé pour classer les sucres dans la fiche."
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel produit obtient-on par oxydation d'un aldéhyde $\\mathrm{RCHO}$ selon la fiche ?",
    "choices": [
      {
        "content": "$\\mathrm{RCOOH}$.",
        "correct": true,
        "explanation": "Acide carboxylique."
      },
      {
        "content": "$\\mathrm{RCH_2OH}$.",
        "correct": false,
        "explanation": "Produit de réduction."
      },
      {
        "content": "$\\mathrm{RCOR'}$.",
        "correct": false,
        "explanation": "Cétone."
      },
      {
        "content": "$\\mathrm{RMgX}$.",
        "correct": false,
        "explanation": "Organomagnésien."
      }
    ],
    "explanation": "Aldéhyde → acide carboxylique par oxydation."
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On souhaite distinguer expérimentalement deux fonctions dans le modèle simplifié de la fiche : un aldéhyde et une cétone. Quel raisonnement est pertinent ?",
    "choices": [
      {
        "content": "L'aldéhyde est oxydable.",
        "correct": true,
        "explanation": "Il peut réduire un agent d'oxydation."
      },
      {
        "content": "La cétone est décrite comme inerte à l'oxydation.",
        "correct": true,
        "explanation": "Contraste."
      },
      {
        "content": "L'oxydabilité peut donc constituer un critère de distinction dans ce modèle.",
        "correct": true,
        "explanation": "Application directe."
      },
      {
        "content": "Les deux fonctions sont nécessairement aussi oxydables l'une que l'autre.",
        "correct": false,
        "explanation": "Le cours les oppose."
      }
    ],
    "explanation": "L'oxydabilité fournit un critère fonctionnel de différenciation dans le cadre enseigné."
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une base forte est ajoutée à une cétone possédant des hydrogènes en alpha. Quelles propositions sont cohérentes avec le support ?",
    "choices": [
      {
        "content": "Un centre nucléophile peut être créé au niveau du carbone alpha.",
        "correct": true,
        "explanation": "Mise en valeur du caractère nucléophile."
      },
      {
        "content": "Un électrophile peut être ajouté ensuite.",
        "correct": true,
        "explanation": "Deuxième étape."
      },
      {
        "content": "Une nouvelle liaison C-E peut se former en alpha.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "L'objectif est nécessairement d'oxyder la cétone.",
        "correct": false,
        "explanation": "Il s'agit d'une fonctionnalisation alpha."
      }
    ],
    "explanation": "Le carbone voisin du carbonyle devient un site de création de liaison avec un électrophile."
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un composé carbonylé ne possède aucun hydrogène sur ses carbones voisins. Dans le modèle de la fiche :",
    "choices": [
      {
        "content": "La voie de fonctionnalisation alpha décrite n'est pas directement applicable à ces positions.",
        "correct": true,
        "explanation": "La présence d'un H est requise."
      },
      {
        "content": "Le carbonyle peut néanmoins rester électrophile.",
        "correct": true,
        "explanation": "Réactivité indépendante."
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
    "question": "Quel produit azoté est formé, selon la fiche, par réaction d'une amine primaire avec un aldéhyde ou une cétone ?",
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
    "explanation": "Le support associe amine primaire + carbonyle à une imine."
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
        "explanation": "Bilan."
      },
      {
        "content": "Amine secondaire + carbonyle → iminium.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Une base forte peut activer le carbone alpha portant H.",
        "correct": true,
        "explanation": "Fonctionnalisation."
      },
      {
        "content": "L'électrophile est ajouté après la base forte.",
        "correct": true,
        "explanation": "Ordre des étapes."
      },
      {
        "content": "Un aldéhyde peut être oxydé en acide carboxylique.",
        "correct": true,
        "explanation": "Oxydabilité."
      },
      {
        "content": "Une cétone est décrite comme facilement oxydable dans la fiche.",
        "correct": false,
        "explanation": "Inerte."
      },
      {
        "content": "L'iminium est le produit spécifique d'une amine primaire.",
        "correct": false,
        "explanation": "Amine secondaire."
      },
      {
        "content": "La fonctionnalisation alpha commence par un organomagnésien obligatoire.",
        "correct": false,
        "explanation": "Base forte."
      },
      {
        "content": "Un aldéhyde est inerte à l'oxydation.",
        "correct": false,
        "explanation": "Il est oxydable."
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
