import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.1 – Section B – Fonctions oxygénées
 */

export const UE14_CH5_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la fonction alcool, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle comporte un groupe hydroxyle $\\ce{-OH}$.",
        "correct": true,
        "explanation": "C'est le motif caractéristique."
      },
      {
        "content": "Dans le cadre du cours, le groupe OH est porté par une chaîne carbonée.",
        "correct": true,
        "explanation": "R représente un radical carboné dans la fonction R-OH."
      },
      {
        "content": "Toute molécule contenant O est un alcool.",
        "correct": false,
        "explanation": "Il existe de nombreuses autres fonctions oxygénées."
      },
      {
        "content": "L'eau est classée ici comme alcool organique.",
        "correct": false,
        "explanation": "Si R=H, on obtient l'eau, exclue des molécules organiques considérées."
      }
    ],
    "explanation": "Une fonction alcool est décrite par un motif R-OH et doit être distinguée des autres fonctions oxygénées."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les classes d'alcools, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un alcool primaire possède un carbone fonctionnel lié à au plus un autre carbone dans les cas usuels.",
        "correct": true,
        "explanation": "Le motif-type est R-CH2-OH ; le méthanol est le cas limite."
      },
      {
        "content": "Un alcool secondaire possède un carbone fonctionnel lié à deux carbones.",
        "correct": true,
        "explanation": "Motif R-CH(OH)-R'."
      },
      {
        "content": "Un alcool tertiaire possède un carbone fonctionnel lié à trois carbones.",
        "correct": true,
        "explanation": "Motif R3C-OH."
      },
      {
        "content": "Le mot tertiaire signifie qu'il y a trois groupes OH.",
        "correct": false,
        "explanation": "Il décrit l'environnement carboné du carbone porteur de OH."
      }
    ],
    "explanation": "La classe de l'alcool dépend du nombre de voisins carbonés du carbone portant le groupe hydroxyle."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "$\\ce{CH3-CH(OH)-CH3}$ est :",
    "choices": [
      {
        "content": "Un alcool secondaire.",
        "correct": true,
        "explanation": "Le carbone portant OH est lié à deux carbones."
      },
      {
        "content": "Un alcool primaire.",
        "correct": false,
        "explanation": "Il n'est pas lié à un seul carbone."
      },
      {
        "content": "Un alcool tertiaire.",
        "correct": false,
        "explanation": "Il n'est pas lié à trois carbones."
      },
      {
        "content": "Un éther.",
        "correct": false,
        "explanation": "L'oxygène n'est pas inséré entre deux groupes carbonés."
      }
    ],
    "explanation": "Le propan-2-ol est l'exemple classique d'un alcool secondaire."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles associations motif → fonction sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{R-COOH}$ → acide carboxylique.",
        "correct": true,
        "explanation": "Le motif carboxyle définit la fonction acide."
      },
      {
        "content": "$\\ce{R-O-R'}$ → éther.",
        "correct": true,
        "explanation": "L'oxygène relie deux groupes."
      },
      {
        "content": "$\\ce{R-COO-R'}$ → ester.",
        "correct": true,
        "explanation": "Le motif carbonyle-O-alkyle est un ester."
      },
      {
        "content": "$\\ce{R-CO-R'}$ → cétone lorsque R et R' sont carbonés.",
        "correct": true,
        "explanation": "Le carbonyle est interne."
      }
    ],
    "explanation": "La reconnaissance des fonctions repose d'abord sur quelques motifs structuraux caractéristiques."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle formule représente un aldéhyde ?",
    "choices": [
      {
        "content": "$\\ce{R-CHO}$",
        "correct": true,
        "explanation": "Le carbonyle est terminal et lié à H."
      },
      {
        "content": "$\\ce{R-CO-R'}$",
        "correct": false,
        "explanation": "C'est une cétone."
      },
      {
        "content": "$\\ce{R-O-R'}$",
        "correct": false,
        "explanation": "C'est un éther."
      },
      {
        "content": "$\\ce{R-COO-R'}$",
        "correct": false,
        "explanation": "C'est un ester."
      }
    ],
    "explanation": "L'aldéhyde comporte un carbonyle terminal portant un hydrogène."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux motifs contenant une liaison O-O.",
    "choices": [
      {
        "content": "Peroxyde $\\ce{R-O-O-R'}$.",
        "correct": true,
        "explanation": "La liaison O-O définit le motif peroxyde."
      },
      {
        "content": "Peroxyde d'hydrogène $\\ce{H-O-O-H}$.",
        "correct": true,
        "explanation": "Il contient aussi O-O."
      },
      {
        "content": "Éther $\\ce{R-O-R'}$.",
        "correct": false,
        "explanation": "Un seul oxygène relie les groupes."
      },
      {
        "content": "Ester $\\ce{R-COO-R'}$.",
        "correct": false,
        "explanation": "Les deux oxygènes ne sont pas liés directement entre eux."
      }
    ],
    "explanation": "Un peroxyde se reconnaît par une liaison directe entre deux atomes d'oxygène."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la fonction carbonate organique présentée dans la fiche, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle comporte un carbonyle.",
        "correct": true,
        "explanation": "Le carbone central est doublement lié à O."
      },
      {
        "content": "Elle peut être représentée par $\\ce{RO-C(=O)-OR'}$.",
        "correct": true,
        "explanation": "C'est le motif donné."
      },
      {
        "content": "Elle est identique à un éther simple.",
        "correct": false,
        "explanation": "Un carbonate contient un carbonyle et plusieurs oxygènes."
      },
      {
        "content": "Elle contient deux oxygènes liés au carbone carbonylé par des liaisons simples.",
        "correct": true,
        "explanation": "Les groupes OR et OR' encadrent le carbonyle."
      }
    ],
    "explanation": "Le carbonate se distingue d'un ester simple par la présence de deux groupes oxygénés autour du carbonyle central."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les molécules suivantes, quelles associations sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{CH3CH2OH}$ : alcool.",
        "correct": true,
        "explanation": "Présence de OH sur carbone saturé."
      },
      {
        "content": "$\\ce{CH3COCH3}$ : cétone.",
        "correct": true,
        "explanation": "Carbonyle interne."
      },
      {
        "content": "$\\ce{CH3CHO}$ : aldéhyde.",
        "correct": true,
        "explanation": "Carbonyle terminal lié à H."
      },
      {
        "content": "$\\ce{CH3OCH3}$ : éther.",
        "correct": true,
        "explanation": "O entre deux groupes méthyle."
      }
    ],
    "explanation": "Ces quatre molécules simples illustrent quatre fonctions oxygénées différentes."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel nom de fonction correspond au motif $\\ce{R-COO-R'}$ ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ester",
        "fonction ester"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Le motif $\\ce{R-C(=O)-O-R'}$ définit une fonction ester."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel nom de fonction correspond au motif $\\ce{R-CHO}$ ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "aldéhyde",
        "aldehyde",
        "fonction aldéhyde",
        "fonction aldehyde"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Un carbonyle terminal portant un hydrogène définit un aldéhyde."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le paracétamol est représenté ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il possède un groupe hydroxyle phénolique.",
        "correct": true,
        "explanation": "Le OH est directement porté par le cycle aromatique."
      },
      {
        "content": "Il possède une fonction amide.",
        "correct": true,
        "explanation": "Le motif N-C(=O) est présent."
      },
      {
        "content": "Il possède une fonction ester.",
        "correct": false,
        "explanation": "Aucun motif C(=O)-O-R n'est présent."
      },
      {
        "content": "Son azote appartient à une amine libre.",
        "correct": false,
        "explanation": "L'azote est directement lié au carbonyle de l'amide."
      }
    ],
    "explanation": "Le paracétamol est une molécule polyfonctionnelle ; la reconnaissance correcte exige de lire l'environnement de chaque hétéroatome.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "paracetamol-topological"
    }
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'aspirine est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles fonctions oxygénées y reconnaît-on ?",
    "choices": [
      {
        "content": "Un acide carboxylique.",
        "correct": true,
        "explanation": "Le motif COOH est présent."
      },
      {
        "content": "Un ester.",
        "correct": true,
        "explanation": "Le groupe acétyloxy contient C(=O)-O."
      },
      {
        "content": "Une cétone libre.",
        "correct": false,
        "explanation": "Les carbonyles appartiennent à l'acide et à l'ester."
      },
      {
        "content": "Un alcool libre.",
        "correct": false,
        "explanation": "Le OH appartient au carboxyle ; il n'y a pas de fonction alcool."
      }
    ],
    "explanation": "L'aspirine associe principalement une fonction acide carboxylique et une fonction ester.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "aspirin-topological"
    }
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux molécules comportant une fonction alcool au sens du chapitre.",
    "choices": [
      {
        "content": "$\\ce{CH3CH2OH}$",
        "correct": true,
        "explanation": "L'éthanol est un alcool."
      },
      {
        "content": "$\\ce{CH3CH(OH)CH3}$",
        "correct": true,
        "explanation": "Le propan-2-ol est un alcool."
      },
      {
        "content": "$\\ce{CH3COOH}$",
        "correct": false,
        "explanation": "OH appartient au carboxyle."
      },
      {
        "content": "$\\ce{CH3OCH3}$",
        "correct": false,
        "explanation": "C'est un éther."
      }
    ],
    "explanation": "Il faut distinguer un hydroxyle d'alcool du groupe OH inclus dans une fonction acide carboxylique."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare $\\ce{CH3CHO}$ et $\\ce{CH3COCH3}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La première molécule est un aldéhyde.",
        "correct": true,
        "explanation": "Son carbonyle est terminal et lié à H."
      },
      {
        "content": "La seconde est une cétone.",
        "correct": true,
        "explanation": "Son carbonyle est entre deux carbones."
      },
      {
        "content": "Les deux contiennent un groupe carbonyle.",
        "correct": true,
        "explanation": "C=O est commun aux deux familles."
      },
      {
        "content": "Les deux sont des esters.",
        "correct": false,
        "explanation": "Aucun motif C(=O)-O-R n'est présent."
      }
    ],
    "explanation": "Aldéhyde et cétone partagent le carbonyle, mais diffèrent par les substituants du carbone carbonylé."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans la formule semi-développée $\\ce{HO-CH2-CH2-OH}$, combien de fonctions alcool sont présentes ?",
    "answer": {
      "type": "number",
      "value": 2
    },
    "explanation": "Chaque groupe OH lié à un carbone saturé correspond à une fonction alcool : l'éthane-1,2-diol en possède deux."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de $\\ce{CH3COOCH3}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La molécule possède une fonction ester.",
        "correct": true,
        "explanation": "Motif C(=O)-O-C."
      },
      {
        "content": "Elle contient deux atomes d'oxygène.",
        "correct": true,
        "explanation": "Un carbonyle et un oxygène simple."
      },
      {
        "content": "Elle possède une fonction éther indépendante.",
        "correct": false,
        "explanation": "L'oxygène simple fait partie de l'ester."
      },
      {
        "content": "Elle possède une fonction acide carboxylique.",
        "correct": false,
        "explanation": "Il n'y a pas de groupe COOH."
      }
    ],
    "explanation": "Une fonction complexe ne doit pas être découpée artificiellement en plusieurs fonctions plus simples."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le peroxyde d'hydrogène $\\ce{H2O2}$ est utilisé comme oxydant et antiseptique dans certaines préparations. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il contient une liaison O-O.",
        "correct": true,
        "explanation": "C'est le motif peroxyde."
      },
      {
        "content": "Il n'est pas un éther.",
        "correct": true,
        "explanation": "Un éther relie deux groupes carbonés par un seul O."
      },
      {
        "content": "Il contient une fonction ester.",
        "correct": false,
        "explanation": "Aucun carbonyle n'est présent."
      },
      {
        "content": "Sa formule brute contient deux oxygènes.",
        "correct": true,
        "explanation": "H2O2."
      }
    ],
    "explanation": "Le motif O-O permet de reconnaître immédiatement un peroxyde."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le propofol, anesthésique, est représenté ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il comporte un groupe hydroxyle porté par un cycle aromatique.",
        "correct": true,
        "explanation": "Le OH est directement lié au noyau benzénique."
      },
      {
        "content": "Ce groupe est un phénol plutôt qu'un alcool aliphatique au sens strict.",
        "correct": true,
        "explanation": "Le carbone porteur de OH est aromatique."
      },
      {
        "content": "Il possède une fonction ester.",
        "correct": false,
        "explanation": "Pas de motif ester."
      },
      {
        "content": "Il possède une fonction amide.",
        "correct": false,
        "explanation": "Aucun azote n'est présent."
      }
    ],
    "explanation": "La lecture de la structure permet de distinguer un phénol d'un alcool aliphatique.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "propofol-topological"
    }
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{CH3OH}$ → alcool.",
        "correct": true,
        "explanation": "Méthanol."
      },
      {
        "content": "$\\ce{CH3OCH3}$ → éther.",
        "correct": true,
        "explanation": "O entre deux carbones."
      },
      {
        "content": "$\\ce{CH3COOH}$ → acide carboxylique.",
        "correct": true,
        "explanation": "COOH."
      },
      {
        "content": "$\\ce{CH3COCH3}$ → cétone.",
        "correct": true,
        "explanation": "Carbonyle interne."
      },
      {
        "content": "$\\ce{CH3CHO}$ → aldéhyde.",
        "correct": true,
        "explanation": "Carbonyle terminal."
      },
      {
        "content": "$\\ce{CH3COOCH3}$ → éther simple.",
        "correct": false,
        "explanation": "C'est un ester."
      },
      {
        "content": "$\\ce{H2O2}$ → alcool.",
        "correct": false,
        "explanation": "C'est un peroxyde."
      },
      {
        "content": "$\\ce{CH3CH2OH}$ → cétone.",
        "correct": false,
        "explanation": "C'est un alcool."
      },
      {
        "content": "$\\ce{CH3OCH3}$ → ester.",
        "correct": false,
        "explanation": "C'est un éther."
      },
      {
        "content": "$\\ce{CH3COCH3}$ → aldéhyde.",
        "correct": false,
        "explanation": "C'est une cétone."
      }
    ],
    "explanation": "Cette sélection rassemble les principaux motifs oxygénés étudiés."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une même molécule peut-elle contenir plusieurs fonctions oxygénées ?",
    "choices": [
      {
        "content": "Oui, une molécule polyfonctionnelle peut combiner plusieurs motifs.",
        "correct": true,
        "explanation": "C'est fréquent dans les molécules biologiques."
      },
      {
        "content": "L'aspirine associe par exemple acide carboxylique et ester.",
        "correct": true,
        "explanation": "Les deux motifs sont présents."
      },
      {
        "content": "La présence d'un ester interdit toute autre fonction.",
        "correct": false,
        "explanation": "Aucune règle de ce type n'existe."
      },
      {
        "content": "Il faut analyser chaque groupe caractéristique dans son environnement.",
        "correct": true,
        "explanation": "Cela évite les faux découpages."
      }
    ],
    "explanation": "La reconnaissance fonctionnelle devient transversale dès qu'une molécule comporte plusieurs groupes caractéristiques."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nom de fonction correspond à $\\ce{R-O-R'}$ avec R et R' carbonés ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "éther",
        "ether",
        "fonction éther",
        "fonction ether"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Un oxygène inséré entre deux groupes carbonés définit un éther."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un ester $\\ce{R-C(=O)-O-R'}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone carbonylé est doublement lié à un oxygène.",
        "correct": true,
        "explanation": "C=O."
      },
      {
        "content": "Un second oxygène est lié par liaison simple au carbone carbonylé.",
        "correct": true,
        "explanation": "C-O-R'."
      },
      {
        "content": "Le motif comprend une liaison O-O.",
        "correct": false,
        "explanation": "Les deux oxygènes ne sont pas liés entre eux."
      },
      {
        "content": "Le groupe est différent d'un acide carboxylique.",
        "correct": true,
        "explanation": "L'acide porte OH à la place de OR'."
      }
    ],
    "explanation": "Ester et acide carboxylique partagent un carbonyle mais diffèrent par le substituant oxygéné."
  }
];
