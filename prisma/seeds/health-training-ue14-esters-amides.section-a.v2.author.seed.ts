import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.5 – Section A – Fonctions ester et amide : structure, préparation et intérêt biologique
 */

export const UE14_CH9_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la fonction ester, quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Dans un ester, le groupe $\\ce{OR'}$ est remplacé par $\\ce{OH}$ sans changer de fonction.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-C(=O)-OH}$ correspond à un acide carboxylique, pas à un ester."
      },
      {
        "content": "La fonction ester comporte un groupement carbonyle lié à un oxygène portant un substituant carboné.",
        "correct": true,
        "explanation": "C'est le motif général d'un ester."
      },
      {
        "content": "Le substituant porté par l'oxygène est carboné dans la définition.",
        "correct": true,
        "explanation": "Dans un ester, l'oxygène est lié à un groupe carboné ; s'il portait un hydrogène, on aurait un acide carboxylique."
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
    "explanation": "Le motif $\\ce{R-C(=O)-OH}$ correspond à un acide carboxylique, pas à un ester."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel motif correspond à une fonction ester?",
    "choices": [
      {
        "content": "$\\mathrm{R{-}OH}$.",
        "correct": false,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Acide carboxylique.",
        "correct": false,
        "explanation": "Un acide carboxylique porte un groupe $\\ce{-OH}$ sur le carbone carbonylé."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}OR'}$.",
        "correct": true,
        "explanation": "C'est le motif général de l'ester."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}OH}$.",
        "correct": false,
        "explanation": "Le motif $\mathrm{R{-}C(=O){-}OH}$ correspond à un acide carboxylique et non à un ester."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}NH_2}$.",
        "correct": false,
        "explanation": "Le motif $\mathrm{R{-}C(=O){-}NH_2}$ correspond à une amide et non à un ester."
      }
    ],
    "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la fonction amide:",
    "choices": [
      {
        "content": "La fonction amide comporte un carbonyle lié à un atome d'azote.",
        "correct": true,
        "explanation": "Une amide se caractérise par un azote directement lié au carbone du groupe carbonyle."
      },
      {
        "content": "L'azote peut porter deux hydrogènes.",
        "correct": true,
        "explanation": "Cas d'une amide non substituée."
      },
      {
        "content": "L'azote peut porter un hydrogène et un radical.",
        "correct": true,
        "explanation": "Une amide monosubstituée porte un groupe carboné et un hydrogène sur l’azote."
      },
      {
        "content": "L'azote peut porter deux radicaux.",
        "correct": true,
        "explanation": "Une amide disubstituée porte deux groupes carbonés sur l’azote."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      }
    ],
    "explanation": "Une amide se caractérise par un azote directement lié au carbone du groupe carbonyle."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel motif correspond à une amide?",
    "choices": [
      {
        "content": "$\\mathrm{R{-}C(=O){-}OR'}$.",
        "correct": false,
        "explanation": "Le motif $\mathrm{R{-}C(=O){-}OR'}$ correspond à un ester."
      },
      {
        "content": "$\\mathrm{R{-}SH}$.",
        "correct": false,
        "explanation": "Le motif $\mathrm{R{-}SH}$ correspond à un thiol."
      },
      {
        "content": "$\\mathrm{R{-}X}$.",
        "correct": false,
        "explanation": "Le motif $\mathrm{R{-}X}$ correspond à un dérivé halogéné."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}NR'R''}$.",
        "correct": true,
        "explanation": "Le carbonyle est directement lié à N."
      },
      {
        "content": "Éther.",
        "correct": false,
        "explanation": "Un éther comporte un motif $\\ce{R-O-R'}$ sans groupe carbonyle lié à l’azote."
      }
    ],
    "explanation": "Une amide associe directement le carbone carbonylé à l'azote."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi la fonction amide est-elle importante biologiquement?",
    "choices": [
      {
        "content": "La fonction amide est retrouvée dans les protéines.",
        "correct": true,
        "explanation": "Les peptides contiennent des liaisons peptidiques, qui sont des fonctions amides."
      },
      {
        "content": "La fonction amide constitue la liaison peptidique.",
        "correct": true,
        "explanation": "C'est l'application biologique majeure du rappel."
      },
      {
        "content": "La fonction amide est absente des biomolécules.",
        "correct": false,
        "explanation": "Une fonction amide se reconnaît au motif $\\ce{R-C(=O)-N}$."
      },
      {
        "content": "La liaison peptidique est une fonction ester.",
        "correct": false,
        "explanation": "La liaison peptidique correspond à une fonction amide."
      },
      {
        "content": "La fonction amide est retrouvée dans les peptides.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Les peptides contiennent des liaisons peptidiques, qui sont des fonctions amides."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans l'exemple peptidique comportant un résidu proline, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La liaison peptidique est une fonction ester.",
        "correct": false,
        "explanation": "La liaison peptidique correspond à une fonction amide."
      },
      {
        "content": "On ne peut pas rencontrer des atomes d'azote portant deux substituants et un hydrogène.",
        "correct": false,
        "explanation": "La relation correcte est: « On peut rencontrer des atomes d'azote portant deux substituants et un hydrogène ». La négation proposée est donc fausse."
      },
      {
        "content": "On peut rencontrer un azote trisubstitué.",
        "correct": true,
        "explanation": "Le résidu proline fournit ce cas particulier."
      },
      {
        "content": "Le résidu proline influence la structure secondaire.",
        "correct": true,
        "explanation": "Le cycle de la proline contraint la géométrie locale et peut déformer la chaîne peptidique."
      },
      {
        "content": "Tous les azotes du peptide sont nécessairement identiques.",
        "correct": false,
        "explanation": "Les atomes d'azote d'un peptide peuvent présenter des environnements différents, notamment avec un résidu proline."
      }
    ],
    "explanation": "La liaison peptidique correspond à une fonction amide."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la préparation d'un ester:",
    "choices": [
      {
        "content": "Le terme activation se rapporte à la fonction acide carboxylique.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "L'alcool est remplacé par une amine pour obtenir toujours le même ester.",
        "correct": false,
        "explanation": "Avec une amine, l'acylation par un acide activé conduit à une amide et non à un ester."
      },
      {
        "content": "Un acide activé peut réagir avec une amine pour former une amide.",
        "correct": true,
        "explanation": "L’amine attaque le dérivé acylé activé et le produit possède le motif amide."
      },
      {
        "content": "Un acide activé réagit avec un alcool.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Le produit organique est un ester.",
        "correct": true,
        "explanation": "L’acylation d’un alcool par un acide activé forme une fonction ester."
      }
    ],
    "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quels dérivés sont cités comme acides activés?",
    "choices": [
      {
        "content": "Chlorure d'acyle.",
        "correct": true,
        "explanation": "Un chlorure d’acyle est un dérivé activé d’un acide carboxylique."
      },
      {
        "content": "Anhydride d'acide.",
        "correct": true,
        "explanation": "Un anhydride d’acide est également un dérivé activé d’un acide carboxylique."
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
      },
      {
        "content": "Un acide activé peut réagir avec un alcool pour former un ester.",
        "correct": true,
        "explanation": "Le chlorure d’acyle ou l’anhydride d’acide fournit un dérivé suffisamment réactif pour l’estérification."
      }
    ],
    "explanation": "Le chlorure d’acyle ou l’anhydride d’acide fournit un dérivé suffisamment réactif pour l’estérification."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La préparation d'une amide:",
    "choices": [
      {
        "content": "Associe nécessairement un alcane et de l'eau.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan."
      },
      {
        "content": "La préparation d’un ester étudiée exige nécessairement une amine comme nucléophile.",
        "correct": false,
        "explanation": "L’ester est formé ici à partir d’un alcool et d’un acide activé."
      },
      {
        "content": "Associe un acide activé et une amine.",
        "correct": true,
        "explanation": "Ce bilan reprend directement la transformation attendue dans cette réaction."
      },
      {
        "content": "Peut utiliser un chlorure d'acyle.",
        "correct": true,
        "explanation": "Un chlorure d’acyle est un dérivé activé capable d’acyl­er une amine pour former une amide."
      },
      {
        "content": "Peut utiliser un anhydride d'acide.",
        "correct": true,
        "explanation": "Un anhydride d’acide peut également fournir le groupe acyle nécessaire à la formation d’une amide."
      }
    ],
    "explanation": "Ce n'est pas le bilan."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Si un acide carboxylique non activé réagit avec une amine dans le modèle, quel type de produit est mis en avant?",
    "choices": [
      {
        "content": "Un thioester.",
        "correct": false,
        "explanation": "Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
      },
      {
        "content": "Alcène.",
        "correct": false,
        "explanation": "Cette transformation ne crée pas de double liaison carbone-carbone."
      },
      {
        "content": "Une amide quantitative et immédiate.",
        "correct": false,
        "explanation": "Un acide carboxylique non activé et une amine forment d’abord un sel acide–base ; l’amide n’est pas obtenue quantitativement et immédiatement."
      },
      {
        "content": "Un ester.",
        "correct": false,
        "explanation": "Il faudrait un alcool dans la synthèse d'ester."
      },
      {
        "content": "Un sel acide-base.",
        "correct": true,
        "explanation": "Sans activation préalable de l’acide, le transfert de proton entre l’acide carboxylique et l’amine conduit d’abord à un sel."
      }
    ],
    "explanation": "Sans activation préalable de l’acide, le transfert de proton entre l’acide carboxylique et l’amine conduit d’abord à un sel."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare les synthèses d'un ester et d'une amide à partir du même chlorure d'acyle. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "La préparation d’un ester étudiée exige nécessairement une amine comme nucléophile.",
        "correct": false,
        "explanation": "L’ester est formé ici à partir d’un alcool et d’un acide activé."
      },
      {
        "content": "Avec un alcool, on forme un ester.",
        "correct": true,
        "explanation": "L’oxygène de l’alcool attaque le chlorure d’acyle et conduit à la fonction ester."
      },
      {
        "content": "Avec une amine, on forme une amide.",
        "correct": true,
        "explanation": "L’azote de l’amine attaque le chlorure d’acyle et conduit à la fonction amide."
      },
      {
        "content": "Le chlorure d'acyle joue le rôle d'acide activé dans les deux cas.",
        "correct": true,
        "explanation": "Le même chlorure d’acyle fournit le groupe acyle ; la nature du nucléophile détermine si le produit est un ester ou une amide."
      },
      {
        "content": "Les deux réactions exigent le même nucléophile.",
        "correct": false,
        "explanation": "Alcool et amine sont différents."
      }
    ],
    "explanation": "L’ester est formé ici à partir d’un alcool et d’un acide activé."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel raisonnement permet de distinguer rapidement ester et amide dans une formule développée?",
    "choices": [
      {
        "content": "Un motif C(=O)-O-R' oriente vers un ester.",
        "correct": true,
        "explanation": "Un motif $\ce{C(=O)-O-R'}$ indique une fonction ester."
      },
      {
        "content": "Un motif C(=O)-N oriente vers une amide.",
        "correct": true,
        "explanation": "Une amide se reconnaît au motif où l’azote est directement lié au carbone du groupe carbonyle."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Identifier d'abord le carbone carbonylé.",
        "correct": true,
        "explanation": "Les deux fonctions contiennent C=O."
      },
      {
        "content": "Regarder l'atome directement lié au carbonyle du côté du substituant hétéroatomique.",
        "correct": true,
        "explanation": "O pour l'ester, N pour l'amide."
      }
    ],
    "explanation": "Le couple carbonyle + nature de l'hétéroatome adjacent permet de reconnaître efficacement les deux fonctions."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d'atomes d'oxygène comporte le motif fonctionnel minimal d'un ester?",
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
    "question": "Combien d'atomes d'azote comporte le motif fonctionnel minimal d'une amide simple?",
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
    "question": "Dans un peptide, quelles propositions relient correctement la chimie des amides à la biologie ?",
    "choices": [
      {
        "content": "L'environnement de l'azote amide peut varier selon le résidu.",
        "correct": true,
        "explanation": "Le cas de la proline l'illustre."
      },
      {
        "content": "La proline peut influencer la structure secondaire de la chaîne.",
        "correct": true,
        "explanation": "Le cycle de la proline contraint la géométrie locale de la chaîne peptidique et peut influencer sa structure secondaire."
      },
      {
        "content": "La liaison peptidique est une fonction ester.",
        "correct": false,
        "explanation": "La liaison peptidique correspond à une fonction amide."
      },
      {
        "content": "Dans un ester, le groupe $\\ce{OR'}$ est remplacé par $\\ce{OH}$ sans changer de fonction.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-C(=O)-OH}$ correspond à un acide carboxylique, pas à un ester."
      },
      {
        "content": "La liaison peptidique est une fonction amide.",
        "correct": true,
        "explanation": "La liaison peptidique correspond à une fonction amide reliant deux résidus d’acides aminés."
      }
    ],
    "explanation": "Le cas de la proline l'illustre."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On dispose d’un chlorure d’acyle et de trois partenaires : méthanol, méthylamine et méthanethiol. Quelles associations sont exactes ?",
    "choices": [
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      },
      {
        "content": "Méthanol → ester.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Méthylamine → amide.",
        "correct": true,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée: il s’agit de la classe d’amine attendue."
      },
      {
        "content": "Méthanethiol → thioester.",
        "correct": true,
        "explanation": "Le méthanethiol réagit avec le chlorure d’acyle pour former un thioester."
      },
      {
        "content": "Les trois partenaires donnent nécessairement une amide.",
        "correct": false,
        "explanation": "Le produit dépend de O, N ou S."
      }
    ],
    "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi l’activation d’un acide carboxylique est-elle utile pour former un ester ou une amide ?",
    "choices": [
      {
        "content": "L'anhydride d'acide en est un exemple.",
        "correct": true,
        "explanation": "Un anhydride d’acide est un exemple de dérivé activé d’acide carboxylique."
      },
      {
        "content": "Il désigne simplement un acide carboxylique non modifié mélangé à une amine.",
        "correct": false,
        "explanation": "Un acide carboxylique non activé et une amine réagissent d’abord par transfert de proton pour former un sel."
      },
      {
        "content": "La préparation d’un ester étudiée exige nécessairement une amine comme nucléophile.",
        "correct": false,
        "explanation": "L’ester est formé ici à partir d’un alcool et d’un acide activé."
      },
      {
        "content": "Il désigne une forme plus réactive de la fonction acide carboxylique dans les synthèses présentées.",
        "correct": true,
        "explanation": "L’activation augmente la réactivité du carbone acylé et facilite la formation d’esters ou d’amides avec un nucléophile adapté."
      },
      {
        "content": "Le chlorure d'acyle en est un exemple.",
        "correct": true,
        "explanation": "Le chlorure d’acyle est un exemple classique de dérivé activé utilisé pour former esters ou amides."
      }
    ],
    "explanation": "L’activation augmente la réactivité du carbone acylé et facilite la formation d’esters ou d’amides avec un nucléophile adapté."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Une molécule contient le motif $\\mathrm{-C(=O)-NH-}$. Quelle fonction reconnaît-on?",
    "choices": [
      {
        "content": "Amide.",
        "correct": true,
        "explanation": "Le carbonyle est directement lié à N."
      },
      {
        "content": "Alcool.",
        "correct": false,
        "explanation": "Il faudrait un groupe OH sans ce motif carbonylé."
      },
      {
        "content": "Ammonium quaternaire.",
        "correct": false,
        "explanation": "Un thioester ne se définit pas par un azote tétrasubstitué."
      },
      {
        "content": "Ester.",
        "correct": false,
        "explanation": "Une condensation entre une amine et un aldéhyde ou une cétone ne forme pas un ester."
      },
      {
        "content": "Thioester.",
        "correct": false,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "Le carbonyle est directement lié à N."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule contient le motif $\\mathrm{-C(=O)-O-CH_3}$. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Il s'agit d'une amide.",
        "correct": false,
        "explanation": "Aucun N n'est directement lié au carbonyle."
      },
      {
        "content": "La liaison $\\ce{C-N}$ d’une amide est décrite comme totalement libre en rotation à température ordinaire.",
        "correct": false,
        "explanation": "Le caractère partiel de double liaison perturbe fortement la rotation."
      },
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
        "explanation": "Dans un ester, l’oxygène porte un groupe carboné ; s’il portait un hydrogène, le motif serait celui d’un acide carboxylique."
      }
    ],
    "explanation": "Aucun N n'est directement lié au carbonyle."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux réactions donnant respectivement un ester puis une amide.",
    "choices": [
      {
        "content": "Acide activé + amine → amide.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Acide non activé + amine → ester.",
        "correct": false,
        "explanation": "Un acide carboxylique non activé et une amine réagissent d’abord par transfert de proton pour former un sel."
      },
      {
        "content": "Alcane + alcool → amide.",
        "correct": false,
        "explanation": "Aucun acide activé ni amine adéquate."
      },
      {
        "content": "Un acide carboxylique non activé et une amine donnent directement et quantitativement une amide dans les conditions ordinaires décrites.",
        "correct": false,
        "explanation": "Le couple acide non activé/amine conduit d’abord à une réaction acido-basique et à un sel."
      },
      {
        "content": "Acide activé + alcool → ester.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
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
        "explanation": "Par définition, un ester comporte un motif C(=O)-O-R'."
      },
      {
        "content": "Une amide comporte un motif C(=O)-N.",
        "correct": true,
        "explanation": "Par définition, une amide comporte un motif C(=O)-N."
      },
      {
        "content": "La liaison peptidique est une amide.",
        "correct": true,
        "explanation": "Une liaison peptidique correspond chimiquement à une fonction amide."
      },
      {
        "content": "Chlorure d'acyle et anhydride d'acide sont des acides activés.",
        "correct": true,
        "explanation": "Un anhydride d’acide fait partie des dérivés activés d’acides carboxyliques."
      },
      {
        "content": "Un acide activé et une amine peuvent former une amide.",
        "correct": true,
        "explanation": "L’amine attaque le carbone acylé électrophile d’un dérivé activé et forme une fonction amide."
      },
      {
        "content": "Une fonction ester comporte obligatoirement un azote.",
        "correct": false,
        "explanation": "Aucun atome d’azote n’est introduit par cette transformation, donc aucune fonction azotée n’est formée."
      },
      {
        "content": "Un acide non activé et une amine donnent directement une amide.",
        "correct": false,
        "explanation": "La proposition est fausse : un acide activé et une amine peuvent former une amide."
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
    "explanation": "L’amine attaque le carbone acylé électrophile d’un dérivé activé et forme une fonction amide. Un anhydride d’acide fait partie des dérivés activés d’acides carboxyliques."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de liaison fonctionnelle relie les acides aminés au sein des peptides et protéines dans le cadre?",
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
