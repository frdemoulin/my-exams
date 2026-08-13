import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.5 – Section A – Fonctions ester et amide : structure, préparation et intérêt biologique
 */

export const UE14_CH9_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la fonction ester, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle comporte un groupement carbonyle lié à un oxygène portant un substituant carboné.",
        "correct": true,
        "explanation": "C'est le motif général d'un ester."
      },
      {
        "content": "Le substituant porté par l'oxygène est carboné dans la définition de la fiche.",
        "correct": true,
        "explanation": "La fiche précise que ce groupement n'est pas H."
      },
      {
        "content": "Si l'oxygène portait H à la place du substituant carboné, on aurait un acide carboxylique.",
        "correct": true,
        "explanation": "C'est la distinction explicitement donnée."
      },
      {
        "content": "Une fonction ester contient nécessairement un atome d'azote.",
        "correct": false,
        "explanation": "L'azote caractérise notamment la fonction amide."
      }
    ],
    "explanation": "La fonction ester se reconnaît par un carbonyle relié à un oxygène lui-même substitué par un groupe carboné."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel motif correspond à une fonction ester ?",
    "choices": [
      {
        "content": "$\\mathrm{R{-}C(=O){-}OR'}$.",
        "correct": true,
        "explanation": "C'est le motif général de l'ester."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}OH}$.",
        "correct": false,
        "explanation": "C'est un acide carboxylique."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}NH_2}$.",
        "correct": false,
        "explanation": "C'est une amide."
      },
      {
        "content": "$\\mathrm{R{-}OH}$.",
        "correct": false,
        "explanation": "C'est un alcool."
      }
    ],
    "explanation": "Le motif ester comporte deux oxygènes : celui du carbonyle et celui du groupe OR'."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la fonction amide dans le support :",
    "choices": [
      {
        "content": "Elle comporte un carbonyle lié à un atome d'azote.",
        "correct": true,
        "explanation": "C'est le motif caractéristique."
      },
      {
        "content": "L'azote peut porter deux hydrogènes.",
        "correct": true,
        "explanation": "Cas d'une amide non substituée."
      },
      {
        "content": "L'azote peut porter un hydrogène et un radical.",
        "correct": true,
        "explanation": "Cas monosubstitué."
      },
      {
        "content": "L'azote peut porter deux radicaux.",
        "correct": true,
        "explanation": "Cas disubstitué."
      }
    ],
    "explanation": "La fiche présente plusieurs degrés de substitution de l'azote amide."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel motif correspond à une amide ?",
    "choices": [
      {
        "content": "$\\mathrm{R{-}C(=O){-}NR'R''}$.",
        "correct": true,
        "explanation": "Le carbonyle est directement lié à N."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}OR'}$.",
        "correct": false,
        "explanation": "C'est un ester."
      },
      {
        "content": "$\\mathrm{R{-}SH}$.",
        "correct": false,
        "explanation": "C'est un thiol."
      },
      {
        "content": "$\\mathrm{R{-}X}$.",
        "correct": false,
        "explanation": "C'est un dérivé halogéné."
      }
    ],
    "explanation": "Une amide associe directement le carbone carbonylé à l'azote."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi la fonction amide est-elle importante biologiquement dans la fiche ?",
    "choices": [
      {
        "content": "Elle est retrouvée dans les peptides.",
        "correct": true,
        "explanation": "Le support l'indique explicitement."
      },
      {
        "content": "Elle est retrouvée dans les protéines.",
        "correct": true,
        "explanation": "Même raison."
      },
      {
        "content": "Elle constitue la liaison peptidique.",
        "correct": true,
        "explanation": "C'est l'application biologique majeure du rappel."
      },
      {
        "content": "Elle est absente des biomolécules.",
        "correct": false,
        "explanation": "C'est l'inverse."
      }
    ],
    "explanation": "Le lien peptidique est une fonction amide, d'où l'importance biologique de ce motif."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans l'exemple peptidique comportant un résidu proline, quelles propositions sont soutenues par la fiche ?",
    "choices": [
      {
        "content": "On peut rencontrer des atomes d'azote portant deux substituants et un hydrogène.",
        "correct": true,
        "explanation": "La fiche illustre ce cas dans la chaîne peptidique."
      },
      {
        "content": "On peut rencontrer un azote trisubstitué.",
        "correct": true,
        "explanation": "Le résidu proline fournit ce cas particulier."
      },
      {
        "content": "Le résidu proline influence la structure secondaire.",
        "correct": true,
        "explanation": "Le support indique une déformation de la chaîne."
      },
      {
        "content": "Tous les azotes du peptide sont nécessairement identiques.",
        "correct": false,
        "explanation": "Le support compare justement plusieurs environnements d'azote."
      }
    ],
    "explanation": "Le résidu proline sert à montrer qu'une fonction amide peptidique peut avoir des environnements d'azote différents et influencer la conformation de la chaîne."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la préparation d'un ester :",
    "choices": [
      {
        "content": "Un acide activé réagit avec un alcool.",
        "correct": true,
        "explanation": "Bilan de synthèse indiqué."
      },
      {
        "content": "Le produit organique est un ester.",
        "correct": true,
        "explanation": "C'est la fonction formée."
      },
      {
        "content": "Le terme activation se rapporte à la fonction acide carboxylique.",
        "correct": true,
        "explanation": "Précision explicite de la fiche."
      },
      {
        "content": "L'alcool est remplacé par une amine pour obtenir toujours le même ester.",
        "correct": false,
        "explanation": "Avec une amine on forme une amide."
      }
    ],
    "explanation": "La synthèse d'un ester repose ici sur l'acylation d'un alcool par un acide activé."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quels dérivés sont cités comme acides activés ?",
    "choices": [
      {
        "content": "Chlorure d'acyle.",
        "correct": true,
        "explanation": "Cité dans le support."
      },
      {
        "content": "Anhydride d'acide.",
        "correct": true,
        "explanation": "Cité dans le support."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "Ce n'est pas un acide activé."
      },
      {
        "content": "Alcyne.",
        "correct": false,
        "explanation": "Ce n'est pas un dérivé activé de l'acide carboxylique."
      }
    ],
    "explanation": "La fiche retient deux grandes formes d'acide activé : chlorures d'acyle et anhydrides d'acide."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La préparation d'une amide selon la fiche :",
    "choices": [
      {
        "content": "Associe un acide activé et une amine.",
        "correct": true,
        "explanation": "Bilan explicite."
      },
      {
        "content": "Peut utiliser un chlorure d'acyle.",
        "correct": true,
        "explanation": "Acide activé cité."
      },
      {
        "content": "Peut utiliser un anhydride d'acide.",
        "correct": true,
        "explanation": "Autre acide activé cité."
      },
      {
        "content": "Associe nécessairement un alcane et de l'eau.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan."
      }
    ],
    "explanation": "L'acylation d'une amine par un acide activé conduit à une amide."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Si un acide carboxylique non activé réagit avec une amine dans le modèle de la fiche, quel type de produit est mis en avant ?",
    "choices": [
      {
        "content": "Un sel acide-base.",
        "correct": true,
        "explanation": "Le support oppose ce résultat à l'amidification par acide activé."
      },
      {
        "content": "Une amide quantitative et immédiate.",
        "correct": false,
        "explanation": "La fiche insiste sur la nécessité de l'activation pour former l'amide."
      },
      {
        "content": "Un ester.",
        "correct": false,
        "explanation": "Il faudrait un alcool dans la synthèse d'ester."
      },
      {
        "content": "Un thioester.",
        "correct": false,
        "explanation": "Il faudrait un thiol."
      }
    ],
    "explanation": "Sans activation, la réaction acide + amine est présentée comme une réaction acide-base donnant un sel."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare les synthèses d'un ester et d'une amide à partir du même chlorure d'acyle. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Avec un alcool, on forme un ester.",
        "correct": true,
        "explanation": "Acylation de l'oxygène."
      },
      {
        "content": "Avec une amine, on forme une amide.",
        "correct": true,
        "explanation": "Acylation de l'azote."
      },
      {
        "content": "Le chlorure d'acyle joue le rôle d'acide activé dans les deux cas.",
        "correct": true,
        "explanation": "Même fragment acyle activé."
      },
      {
        "content": "Les deux réactions exigent le même nucléophile.",
        "correct": false,
        "explanation": "Alcool et amine sont différents."
      }
    ],
    "explanation": "Un même acide activé peut conduire à plusieurs dérivés selon la nature du partenaire nucléophile."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel raisonnement permet de distinguer rapidement ester et amide dans une formule développée ?",
    "choices": [
      {
        "content": "Identifier d'abord le carbone carbonylé.",
        "correct": true,
        "explanation": "Les deux fonctions contiennent C=O."
      },
      {
        "content": "Regarder l'atome directement lié au carbonyle du côté du substituant hétéroatomique.",
        "correct": true,
        "explanation": "O pour l'ester, N pour l'amide."
      },
      {
        "content": "Un motif C(=O)-O-R' oriente vers un ester.",
        "correct": true,
        "explanation": "Motif ester."
      },
      {
        "content": "Un motif C(=O)-N oriente vers une amide.",
        "correct": true,
        "explanation": "Motif amide."
      }
    ],
    "explanation": "Le couple carbonyle + nature de l'hétéroatome adjacent permet de reconnaître efficacement les deux fonctions."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d'atomes d'oxygène comporte le motif fonctionnel minimal d'un ester ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Un ester comporte l'oxygène du carbonyle et l'oxygène du groupe OR'."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d'atomes d'azote comporte le motif fonctionnel minimal d'une amide simple ?",
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    },
    "explanation": "Le motif amide associe un carbonyle à un unique atome d'azote."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un peptide, quelles propositions relient correctement la chimie du chapitre à la biologie ?",
    "choices": [
      {
        "content": "La liaison peptidique est une fonction amide.",
        "correct": true,
        "explanation": "Point central du rappel."
      },
      {
        "content": "L'environnement de l'azote amide peut varier selon le résidu.",
        "correct": true,
        "explanation": "Le cas de la proline l'illustre."
      },
      {
        "content": "La proline peut influencer la structure secondaire de la chaîne.",
        "correct": true,
        "explanation": "La fiche le précise."
      },
      {
        "content": "La liaison peptidique est une fonction ester.",
        "correct": false,
        "explanation": "C'est une amide."
      }
    ],
    "explanation": "La chimie des amides fournit directement le cadre fonctionnel de la liaison peptidique."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On dispose d'un chlorure d'acyle et de trois partenaires : méthanol, méthylamine et méthanethiol. Quelles associations sont cohérentes avec le chapitre ?",
    "choices": [
      {
        "content": "Méthanol → ester.",
        "correct": true,
        "explanation": "Acide activé + alcool."
      },
      {
        "content": "Méthylamine → amide.",
        "correct": true,
        "explanation": "Acide activé + amine."
      },
      {
        "content": "Méthanethiol → thioester.",
        "correct": true,
        "explanation": "Cette troisième réaction sera étudiée dans la section thioesters."
      },
      {
        "content": "Les trois partenaires donnent nécessairement une amide.",
        "correct": false,
        "explanation": "Le produit dépend de O, N ou S."
      }
    ],
    "explanation": "La nature de l'hétéroatome du partenaire détermine ester, amide ou thioester."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi le terme « acide activé » est-il important dans ce chapitre ?",
    "choices": [
      {
        "content": "Il désigne une forme plus réactive de la fonction acide carboxylique dans les synthèses présentées.",
        "correct": true,
        "explanation": "Le support utilise l'activation pour former esters et amides."
      },
      {
        "content": "Le chlorure d'acyle en est un exemple.",
        "correct": true,
        "explanation": "Cité."
      },
      {
        "content": "L'anhydride d'acide en est un exemple.",
        "correct": true,
        "explanation": "Cité."
      },
      {
        "content": "Il désigne simplement un acide carboxylique non modifié mélangé à une amine.",
        "correct": false,
        "explanation": "Le support distingue précisément ce cas, qui donne un sel."
      }
    ],
    "explanation": "L'activation est le point commun aux synthèses d'esters, d'amides et plus loin de thioesters."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Une molécule contient le motif $\\mathrm{-C(=O)-NH-}$. Quelle fonction reconnaît-on ?",
    "choices": [
      {
        "content": "Amide.",
        "correct": true,
        "explanation": "Le carbonyle est directement lié à N."
      },
      {
        "content": "Ester.",
        "correct": false,
        "explanation": "Il faudrait C(=O)-O."
      },
      {
        "content": "Thioester.",
        "correct": false,
        "explanation": "Il faudrait C(=O)-S."
      },
      {
        "content": "Alcool.",
        "correct": false,
        "explanation": "Il faudrait un groupe OH sans ce motif carbonylé."
      }
    ],
    "explanation": "Le motif C(=O)-N est la signature de l'amide."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule contient le motif $\\mathrm{-C(=O)-O-CH_3}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il s'agit d'un ester.",
        "correct": true,
        "explanation": "Le carbonyle est lié à O-CH3."
      },
      {
        "content": "Le substituant porté par l'oxygène est carboné.",
        "correct": true,
        "explanation": "CH3 est un groupe carboné."
      },
      {
        "content": "Si O portait H, la fonction deviendrait un acide carboxylique.",
        "correct": true,
        "explanation": "Distinction de la fiche."
      },
      {
        "content": "Il s'agit d'une amide.",
        "correct": false,
        "explanation": "Aucun N n'est directement lié au carbonyle."
      }
    ],
    "explanation": "La présence de O-R' après le carbonyle caractérise l'ester."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux réactions donnant respectivement un ester puis une amide.",
    "choices": [
      {
        "content": "Acide activé + alcool → ester.",
        "correct": true,
        "explanation": "Bilan de la fiche."
      },
      {
        "content": "Acide activé + amine → amide.",
        "correct": true,
        "explanation": "Bilan de la fiche."
      },
      {
        "content": "Acide non activé + amine → ester.",
        "correct": false,
        "explanation": "La fiche met en avant la formation d'un sel."
      },
      {
        "content": "Alcane + alcool → amide.",
        "correct": false,
        "explanation": "Aucun acide activé ni amine adéquate."
      }
    ],
    "explanation": "La nature du partenaire — alcool ou amine — sélectionne ester ou amide."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un ester comporte un motif C(=O)-O-R'.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Une amide comporte un motif C(=O)-N.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "La liaison peptidique est une amide.",
        "correct": true,
        "explanation": "Application biologique."
      },
      {
        "content": "Chlorure d'acyle et anhydride d'acide sont des acides activés.",
        "correct": true,
        "explanation": "Deux exemples du support."
      },
      {
        "content": "Un acide activé et une amine peuvent former une amide.",
        "correct": true,
        "explanation": "Préparation."
      },
      {
        "content": "Une fonction ester comporte obligatoirement un azote.",
        "correct": false,
        "explanation": "Aucun azote requis."
      },
      {
        "content": "Un acide non activé et une amine donnent directement une amide selon la fiche.",
        "correct": false,
        "explanation": "Le support met en avant un sel."
      },
      {
        "content": "La proline n'a aucun effet sur la chaîne peptidique.",
        "correct": false,
        "explanation": "Elle influence la structure secondaire."
      },
      {
        "content": "Un ester ne contient qu'un seul oxygène.",
        "correct": false,
        "explanation": "Il en contient deux dans son motif."
      },
      {
        "content": "Un chlorure d'acyle est un alcane.",
        "correct": false,
        "explanation": "C'est un dérivé activé de l'acide."
      }
    ],
    "explanation": "Cette sélection rassemble reconnaissance fonctionnelle, activation et intérêt biologique."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de liaison fonctionnelle relie les acides aminés au sein des peptides et protéines dans le cadre de cette fiche ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "amide",
        "liaison amide",
        "liaison peptidique",
        "peptidique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "La liaison peptidique est une fonction amide."
  }
];
