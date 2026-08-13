import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.4 – Section C – Amines : structure et réactivité
 */

export const UE14_CH8_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des amines dans la fiche, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une amine primaire peut s'écrire $\\ce{R-NH2}$.",
        "correct": true,
        "explanation": "Un seul substituant carboné sur N."
      },
      {
        "content": "Une amine secondaire peut s'écrire $\\ce{R-R'-NH}$ dans la notation simplifiée du cours.",
        "correct": true,
        "explanation": "Deux groupes carbonés sont liés à l'azote."
      },
      {
        "content": "Une amine tertiaire porte trois substituants carbonés sur l'azote.",
        "correct": true,
        "explanation": "Motif $\\ce{RR'R''N}$."
      },
      {
        "content": "Un ammonium quaternaire est classé comme une amine tertiaire.",
        "correct": false,
        "explanation": "La fiche précise que ce n'est pas une amine."
      }
    ],
    "explanation": "Le support distingue amines primaire, secondaire, tertiaire et ammonium quaternaire."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi l'azote d'une amine est-il nucléophile dans le modèle du cours ?",
    "choices": [
      {
        "content": "Il possède un doublet d'électrons libre.",
        "correct": true,
        "explanation": "C'est l'explication explicitement donnée."
      },
      {
        "content": "Ce doublet peut être donné pour former une nouvelle liaison.",
        "correct": true,
        "explanation": "C'est le comportement nucléophile."
      },
      {
        "content": "Parce que l'azote est dépourvu d'électrons.",
        "correct": false,
        "explanation": "C'est l'inverse."
      },
      {
        "content": "Parce que toute amine est chargée positivement.",
        "correct": false,
        "explanation": "Une amine simple peut être neutre."
      }
    ],
    "explanation": "Le doublet libre de l'azote est la base de la nucléophilie des amines."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle espèce n'est PAS classée comme une amine dans la séquence d'alkylations de la fiche ?",
    "choices": [
      {
        "content": "Ammonium quaternaire.",
        "correct": true,
        "explanation": "La fiche le distingue explicitement des amines."
      },
      {
        "content": "Amine primaire.",
        "correct": false,
        "explanation": "C'est une amine."
      },
      {
        "content": "Amine secondaire.",
        "correct": false,
        "explanation": "C'est une amine."
      },
      {
        "content": "Amine tertiaire.",
        "correct": false,
        "explanation": "C'est une amine."
      }
    ],
    "explanation": "Après trois classes d'amines, l'alkylation supplémentaire conduit à un ammonium quaternaire."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La synthèse d'Hoffman décrite dans la fiche associe ammoniac et dérivé halogéné. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle permet d'obtenir successivement des amines plus substituées.",
        "correct": true,
        "explanation": "Primaire puis secondaire puis tertiaire."
      },
      {
        "content": "Une alkylation supplémentaire conduit à un ammonium quaternaire.",
        "correct": true,
        "explanation": "Dernier terme de la séquence."
      },
      {
        "content": "Le dérivé halogéné apporte un substituant carboné à l'azote.",
        "correct": true,
        "explanation": "C'est le principe de l'alkylation."
      },
      {
        "content": "Elle conduit uniquement à une amine primaire et ne peut pas se poursuivre.",
        "correct": false,
        "explanation": "Le support montre les alkylations successives."
      }
    ],
    "explanation": "L'alkylation successive de l'ammoniac explique la progression jusqu'à l'ammonium quaternaire."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'amidification avec une amine primaire ou secondaire :",
    "choices": [
      {
        "content": "Elle peut utiliser un acide activé.",
        "correct": true,
        "explanation": "Chlorure d'acide ou anhydride d'acide."
      },
      {
        "content": "Le produit est une amide.",
        "correct": true,
        "explanation": "Bilan : amine + acide activé ↔ amide."
      },
      {
        "content": "La fonction amide est retrouvée dans les peptides et protéines.",
        "correct": true,
        "explanation": "Lien biologique explicitement cité."
      },
      {
        "content": "Elle transforme nécessairement l'amine en alcool.",
        "correct": false,
        "explanation": "Le produit attendu est une amide."
      }
    ],
    "explanation": "L'amidification relie la réactivité des amines à la synthèse de fonctions amides présentes dans les peptides et protéines."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel dérivé d'acide est cité parmi les acides activés pour l'amidification ?",
    "choices": [
      {
        "content": "Chlorure d'acide $\\ce{R-COCl}$.",
        "correct": true,
        "explanation": "Cité explicitement."
      },
      {
        "content": "Alcane $\\ce{R-H}$.",
        "correct": false,
        "explanation": "Pas un acide activé."
      },
      {
        "content": "Alcool $\\ce{R-OH}$.",
        "correct": false,
        "explanation": "Pas l'acide activé utilisé."
      },
      {
        "content": "Alcyne $\\ce{R-C#CH}$.",
        "correct": false,
        "explanation": "Pas un dérivé d'acide."
      }
    ],
    "explanation": "Le chlorure d'acide et l'anhydride d'acide sont les deux acides activés rappelés."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une amine primaire réagit avec un aldéhyde ou une cétone dans la fiche. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le produit azoté est une imine.",
        "correct": true,
        "explanation": "Bilan indiqué."
      },
      {
        "content": "Une molécule d'eau est formée.",
        "correct": true,
        "explanation": "Le bilan écrit imine + H2O."
      },
      {
        "content": "La réaction est réversible.",
        "correct": true,
        "explanation": "L'hydrolyse de l'imine est possible."
      },
      {
        "content": "Le produit est un ammonium quaternaire.",
        "correct": false,
        "explanation": "Ce n'est pas une alkylation exhaustive."
      }
    ],
    "explanation": "Amine primaire + composé carbonylé ↔ imine + eau."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une amine secondaire réagit avec un aldéhyde ou une cétone selon la fiche. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le produit azoté est un iminium.",
        "correct": true,
        "explanation": "Bilan indiqué."
      },
      {
        "content": "Une molécule d'eau est formée.",
        "correct": true,
        "explanation": "Condensation avec perte d'eau."
      },
      {
        "content": "La réaction peut être inversée par hydrolyse.",
        "correct": true,
        "explanation": "La fiche précise la réversibilité."
      },
      {
        "content": "Le produit est une imine neutre identique au cas d'une amine primaire.",
        "correct": false,
        "explanation": "La fiche distingue imine et iminium."
      }
    ],
    "explanation": "Amine secondaire + composé carbonylé ↔ iminium + eau."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles associations sont exactes ?",
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
        "content": "Amine primaire ou secondaire + acide activé → amide.",
        "correct": true,
        "explanation": "Amidification."
      },
      {
        "content": "Amine tertiaire + carbonyle → imine selon le tableau.",
        "correct": false,
        "explanation": "Ce cas n'est pas donné dans la fiche."
      }
    ],
    "explanation": "La classe de l'amine détermine le produit de condensation avec un composé carbonylé."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi les réactions imine/iminium sont-elles présentées comme réversibles ?",
    "choices": [
      {
        "content": "Une hydrolyse de l'imine est possible.",
        "correct": true,
        "explanation": "Cité explicitement."
      },
      {
        "content": "Une hydrolyse de l'iminium est possible.",
        "correct": true,
        "explanation": "Cité explicitement."
      },
      {
        "content": "L'eau intervient donc dans le sens inverse.",
        "correct": true,
        "explanation": "Elle permet l'hydrolyse."
      },
      {
        "content": "Parce que toute amide se transforme spontanément en alcane.",
        "correct": false,
        "explanation": "Sans rapport avec cette réversibilité."
      }
    ],
    "explanation": "La fiche indique explicitement la possibilité d'hydrolyser imines et iminium."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On alkyle progressivement $\\ce{NH3}$ avec un dérivé halogéné $\\ce{R-X}$. Quelles étapes sont cohérentes avec la séquence de la fiche ?",
    "choices": [
      {
        "content": "Ammoniac → amine primaire.",
        "correct": true,
        "explanation": "Première alkylation."
      },
      {
        "content": "Amine primaire → amine secondaire.",
        "correct": true,
        "explanation": "Deuxième alkylation."
      },
      {
        "content": "Amine secondaire → amine tertiaire.",
        "correct": true,
        "explanation": "Troisième alkylation."
      },
      {
        "content": "Amine tertiaire → ammonium quaternaire.",
        "correct": true,
        "explanation": "Alkylation supplémentaire."
      }
    ],
    "explanation": "La progression montre que le contrôle du nombre d'alkylations détermine le degré de substitution de l'azote."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de classes d'amines neutres la fiche distingue-t-elle avant l'ammonium quaternaire ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Amines primaire, secondaire et tertiaire."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une amine primaire est engagée dans une synthèse de peptide avec un acide activé. Quelles propositions sont soutenues par la fiche ?",
    "choices": [
      {
        "content": "Une fonction amide peut être formée.",
        "correct": true,
        "explanation": "Bilan d'amidification."
      },
      {
        "content": "La fonction amide est un motif des peptides et protéines.",
        "correct": true,
        "explanation": "Lien biologique explicite."
      },
      {
        "content": "Un chlorure d'acide peut jouer le rôle d'acide activé.",
        "correct": true,
        "explanation": "Exemple du cours."
      },
      {
        "content": "La réaction conduit nécessairement à une fonction alcool.",
        "correct": false,
        "explanation": "Le produit est une amide."
      }
    ],
    "explanation": "Le contexte peptidique illustre directement l'intérêt biologique de l'amidification."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare une amine primaire et une amine secondaire face à une cétone. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'amine primaire conduit à une imine.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "L'amine secondaire conduit à un iminium.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "Les deux réactions libèrent de l'eau.",
        "correct": true,
        "explanation": "Les deux bilans incluent H2O."
      },
      {
        "content": "Les deux produits sont nécessairement identiques.",
        "correct": false,
        "explanation": "Imine et iminium sont distincts."
      }
    ],
    "explanation": "La classe de l'amine se lit dans la nature du produit azoté obtenu avec le carbonyle."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'hydrolyse d'une imine ou d'un iminium dans le cadre du cours :",
    "choices": [
      {
        "content": "Elle correspond au sens inverse de la condensation avec le carbonyle.",
        "correct": true,
        "explanation": "Réaction réversible."
      },
      {
        "content": "Elle peut régénérer les partenaires de départ.",
        "correct": true,
        "explanation": "Principe de l'hydrolyse."
      },
      {
        "content": "Elle nécessite de considérer la présence d'eau.",
        "correct": true,
        "explanation": "L'eau intervient dans le sens inverse."
      },
      {
        "content": "Elle augmente obligatoirement le degré d'alkylation de l'azote.",
        "correct": false,
        "explanation": "Ce n'est pas une alkylation."
      }
    ],
    "explanation": "La réversibilité permet de relier formation et hydrolyse des imines/iminium."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Une cétone réagit avec une amine secondaire. Quel type de produit azoté la fiche prévoit-elle ?",
    "choices": [
      {
        "content": "Un iminium.",
        "correct": true,
        "explanation": "C'est le bilan indiqué."
      },
      {
        "content": "Une amide.",
        "correct": false,
        "explanation": "Il faudrait un acide activé."
      },
      {
        "content": "Un alcool tertiaire.",
        "correct": false,
        "explanation": "Il faudrait un organomagnésien."
      },
      {
        "content": "Un ammonium quaternaire par définition.",
        "correct": false,
        "explanation": "Le produit de condensation est un iminium."
      }
    ],
    "explanation": "Amine secondaire + cétone ↔ iminium + eau."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une amine primaire réagit avec un aldéhyde. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une imine peut se former.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "De l'eau est libérée.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "La réaction peut être hydrolysée.",
        "correct": true,
        "explanation": "Réversibilité."
      },
      {
        "content": "Un organomagnésien est obligatoirement nécessaire.",
        "correct": false,
        "explanation": "Pas dans cette transformation."
      }
    ],
    "explanation": "Le couple amine primaire/aldéhyde est le cas simple de formation d'une imine."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux transformations donnant une fonction contenant un carbonyle dans le produit final.",
    "choices": [
      {
        "content": "Amidification d'une amine avec un acide activé.",
        "correct": true,
        "explanation": "L'amide contient C=O."
      },
      {
        "content": "Oxydation d'un alcool secondaire en cétone.",
        "correct": true,
        "explanation": "La cétone contient C=O."
      },
      {
        "content": "Alkylation de l'ammoniac en amine primaire.",
        "correct": false,
        "explanation": "Pas de carbonyle créé."
      },
      {
        "content": "Formation d'un organomagnésien à partir de RX et Mg.",
        "correct": false,
        "explanation": "Pas de carbonyle."
      }
    ],
    "explanation": "Cette question relie la chimie des amines à la réactivité des alcools sans quitter le périmètre du chapitre."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une stratégie de synthèse, quelles transformations utilisent explicitement le caractère nucléophile de l'azote d'une amine ?",
    "choices": [
      {
        "content": "Alkylation par un dérivé halogéné.",
        "correct": true,
        "explanation": "L'azote attaque le carbone électrophile de RX."
      },
      {
        "content": "Amidification avec un acide activé.",
        "correct": true,
        "explanation": "L'amine réagit sur le carbone acyle électrophile."
      },
      {
        "content": "Réaction avec un aldéhyde ou une cétone.",
        "correct": true,
        "explanation": "Le carbonyle est partenaire électrophile."
      },
      {
        "content": "Hydrogénation d'un alcène par H2.",
        "correct": false,
        "explanation": "Aucune amine n'intervient."
      }
    ],
    "explanation": "Le doublet libre de l'azote explique la diversité des réactions d'addition/substitution de l'amine."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Amine primaire + carbonyle → imine.",
        "correct": true,
        "explanation": "Condensation."
      },
      {
        "content": "Amine secondaire + carbonyle → iminium.",
        "correct": true,
        "explanation": "Condensation."
      },
      {
        "content": "Amine + acide activé → amide.",
        "correct": true,
        "explanation": "Amidification."
      },
      {
        "content": "Ammoniac + RX → amine primaire après une alkylation.",
        "correct": true,
        "explanation": "Séquence d'Hoffman."
      },
      {
        "content": "Amine tertiaire + RX → ammonium quaternaire.",
        "correct": true,
        "explanation": "Alkylation supplémentaire."
      },
      {
        "content": "Amine primaire + carbonyle → ammonium quaternaire.",
        "correct": false,
        "explanation": "Imine."
      },
      {
        "content": "Amine secondaire + acide activé → alcane.",
        "correct": false,
        "explanation": "Amide."
      },
      {
        "content": "Ammonium quaternaire = amine tertiaire neutre.",
        "correct": false,
        "explanation": "La fiche les distingue."
      },
      {
        "content": "Imine = produit spécifique d'une amine secondaire.",
        "correct": false,
        "explanation": "Amine primaire."
      },
      {
        "content": "Iminium = produit spécifique d'une amine primaire.",
        "correct": false,
        "explanation": "Amine secondaire."
      }
    ],
    "explanation": "La sélection consolide la classe d'amine et le produit fonctionnel attendu."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel produit azoté obtient-on selon la fiche lorsqu'une amine primaire réagit avec un aldéhyde ou une cétone ?",
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
    "explanation": "Le bilan est amine primaire + composé carbonylé ↔ imine + eau."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels éléments permettent de choisir entre alkylation, amidification et condensation carbonylée d'une amine ?",
    "choices": [
      {
        "content": "La nature du partenaire : dérivé halogéné, acide activé ou composé carbonylé.",
        "correct": true,
        "explanation": "Chaque partenaire correspond à une réaction différente."
      },
      {
        "content": "La classe primaire ou secondaire de l'amine pour prévoir imine ou iminium.",
        "correct": true,
        "explanation": "Distinction du tableau."
      },
      {
        "content": "Le doublet libre de l'azote, qui explique la nucléophilie.",
        "correct": true,
        "explanation": "Propriété générale."
      },
      {
        "content": "Uniquement la formule brute globale de la molécule.",
        "correct": false,
        "explanation": "L'environnement fonctionnel est indispensable."
      }
    ],
    "explanation": "La réactivité des amines se raisonne d'abord par identification du partenaire électrophile."
  }
];
