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
        "content": "Remplacer le groupe $\\ce{OR'}$ d’un ester par $\\ce{OH}$ conserve la fonction ester.",
        "correct": false,
        "explanation": "Le remplacement de $\\ce{OR'}$ par $\\ce{OH}$ transforme l’ester en acide carboxylique."
      },
      {
        "content": "La fonction ester comporte un groupement carbonyle lié à un oxygène portant un substituant carboné.",
        "correct": true,
        "explanation": "Le motif ester associe un groupe carbonyle à un second oxygène lié à un substituant carboné."
      },
      {
        "content": "Le substituant porté par l'oxygène est carboné dans la définition.",
        "correct": true,
        "explanation": "Dans un ester, l'oxygène est lié à un groupe carboné ; s'il portait un hydrogène, on aurait un acide carboxylique."
      },
      {
        "content": "Si l'oxygène portait H à la place du substituant carboné, on aurait un acide carboxylique.",
        "correct": true,
        "explanation": "Si cet oxygène porte un hydrogène au lieu d’un groupe carboné, le motif devient celui d’un acide carboxylique."
      },
      {
        "content": "Une fonction ester contient nécessairement un atome d'azote.",
        "correct": false,
        "explanation": "L'azote caractérise notamment la fonction amide."
      }
    ],
    "explanation": "Un ester possède le motif $\\ce{R-C(=O)-OR'}$ : l’oxygène simple est lié à un substituant carboné ; s’il porte H, on obtient un acide carboxylique."
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
        "explanation": "Le motif $\\ce{R-OH}$ correspond à un alcool, pas à un ester."
      },
      {
        "content": "Acide carboxylique.",
        "correct": false,
        "explanation": "Un acide carboxylique porte un groupe $\\ce{-OH}$ sur le carbone carbonylé."
      },
      {
        "content": "$\\mathrm{R{-}C(=O){-}OR'}$.",
        "correct": true,
        "explanation": "Le motif $\\ce{R-C(=O)-OR'}$ est celui d’un ester."
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
    "explanation": "Le motif caractéristique d’un ester est $\\ce{R-C(=O)-OR'}$ ; il comporte un carbonyle et un second oxygène lié à un groupe carboné."
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
        "explanation": "Une amide non substituée peut porter deux hydrogènes sur l’azote."
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
        "content": "Une amide simple comporte obligatoirement deux atomes d’oxygène.",
        "correct": false,
        "explanation": "Une amide simple comporte un oxygène carbonylé et un azote ; elle ne possède pas obligatoirement deux oxygènes."
      }
    ],
    "explanation": "Une amide possède un motif $\\ce{C(=O)-N}$ ; l’azote peut porter deux hydrogènes, un hydrogène et un radical, ou deux radicaux."
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
        "explanation": "Dans une amide, l’azote est directement lié au carbone du groupe carbonyle."
      },
      {
        "content": "Éther.",
        "correct": false,
        "explanation": "Un éther comporte un motif $\\ce{R-O-R'}$ sans groupe carbonyle lié à l’azote."
      }
    ],
    "explanation": "Une amide se reconnaît à un atome d’azote directement lié au carbone du groupe carbonyle."
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
        "explanation": "La liaison peptidique reliant deux résidus d’acides aminés est une fonction amide."
      },
      {
        "content": "La fonction amide est absente des biomolécules.",
        "correct": false,
        "explanation": "Les peptides et protéines contiennent des liaisons peptidiques, donc des fonctions amides."
      },
      {
        "content": "La liaison peptidique est un ester.",
        "correct": false,
        "explanation": "La liaison peptidique est une fonction amide, et non une fonction ester."
      },
      {
        "content": "La fonction amide est retrouvée dans les peptides.",
        "correct": true,
        "explanation": "Les peptides contiennent des liaisons peptidiques, qui sont des fonctions amides."
      }
    ],
    "explanation": "La liaison peptidique des peptides et protéines est une fonction amide."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans l'exemple peptidique comportant un résidu proline, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une liaison peptidique correspond à une fonction ester.",
        "correct": false,
        "explanation": "La liaison reliant les résidus d’acides aminés est une amide."
      },
      {
        "content": "On ne peut pas rencontrer des atomes d'azote portant deux substituants et un hydrogène.",
        "correct": false,
        "explanation": "Dans l’exemple peptidique, certains azotes portent deux substituants et un hydrogène ; la proposition qui exclut cette possibilité est donc fausse."
      },
      {
        "content": "On peut rencontrer un azote trisubstitué.",
        "correct": true,
        "explanation": "Le résidu proline peut conduire à un azote amide trisubstitué dans la chaîne peptidique."
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
    "explanation": "Dans un peptide, l’environnement de l’azote amide peut varier ; le résidu proline peut notamment contraindre la chaîne et influencer sa structure secondaire."
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
        "explanation": "L’activation concerne la fonction acide carboxylique, transformée en dérivé plus réactif."
      },
      {
        "content": "L'alcool est remplacé par une amine pour obtenir toujours le même ester.",
        "correct": false,
        "explanation": "Avec une amine, l'acylation par un acide activé conduit à une amide et non à un ester."
      },
      {
        "content": "Un chlorure d’acyle ou un anhydride d’acide peut jouer le rôle d’acide activé.",
        "correct": true,
        "explanation": "Le chlorure d’acyle et l’anhydride d’acide sont deux dérivés activés d’acides carboxyliques."
      },
      {
        "content": "Un acide activé réagit avec un alcool.",
        "correct": true,
        "explanation": "L’alcool réagit avec le carbone acylé de l’acide activé pour former une fonction ester."
      },
      {
        "content": "Le produit organique est un ester.",
        "correct": true,
        "explanation": "L’acylation d’un alcool par un acide activé forme une fonction ester."
      }
    ],
    "explanation": "La synthèse d’un ester associe un acide carboxylique activé et un alcool ; le produit porte le motif ester."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quels dérivés peuvent jouer le rôle d’acides carboxyliques activés ?",
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
        "explanation": "Un alcane n’est pas un dérivé activé d’un acide carboxylique."
      },
      {
        "content": "Alcyne.",
        "correct": false,
        "explanation": "Un alcyne n’est pas un chlorure d’acyle ni un anhydride d’acide."
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
        "explanation": "La formation d’une amide nécessite un partenaire azoté de type amine et un acide activé, pas un alcane et de l’eau."
      },
      {
        "content": "Un acide carboxylique non activé et une amine donnent directement une amide.",
        "correct": false,
        "explanation": "Sans activation, l’acide carboxylique et l’amine donnent d’abord un sel acide-base."
      },
      {
        "content": "Associe un acide activé et une amine.",
        "correct": true,
        "explanation": "La réaction d’un acide activé avec une amine conduit à une fonction amide."
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
    "explanation": "Une amide se prépare à partir d’un acide carboxylique activé et d’une amine ; sans activation, l’acide et l’amine forment d’abord un sel."
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
        "explanation": "Un thioester nécessite un thiol comme partenaire nucléophile ; le mélange acide-amine donne ici un sel."
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
        "explanation": "Un ester se forme à partir d’un acide activé et d’un alcool ; le mélange acide non activé–amine ne suit pas cette voie."
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
        "content": "Avec un alcool, le chlorure d’acyle forme une amide.",
        "correct": false,
        "explanation": "Avec un alcool, le chlorure d’acyle forme un ester et non une amide."
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
        "explanation": "L’alcool et l’amine sont deux nucléophiles différents et conduisent respectivement à un ester et à une amide."
      }
    ],
    "explanation": "À partir d’un même chlorure d’acyle, un alcool conduit à un ester tandis qu’une amine conduit à une amide."
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
        "explanation": "Le motif $\\ce{C(=O)-O-R'}$ caractérise une fonction ester."
      },
      {
        "content": "Un motif C(=O)-N oriente vers une amide.",
        "correct": true,
        "explanation": "Une amide se reconnaît au motif où l’azote est directement lié au carbone du groupe carbonyle."
      },
      {
        "content": "Un motif $\\ce{C(=O)-O-R'}$ oriente vers une amide.",
        "correct": false,
        "explanation": "Le motif $\\ce{C(=O)-O-R'}$ correspond à un ester, pas à une amide."
      },
      {
        "content": "Identifier d'abord le carbone carbonylé.",
        "correct": true,
        "explanation": "Le carbone du groupe carbonyle est commun aux fonctions ester et amide."
      },
      {
        "content": "Regarder l'atome directement lié au carbonyle du côté du substituant hétéroatomique.",
        "correct": true,
        "explanation": "L’atome directement lié au carbonyle est un oxygène dans l’ester et un azote dans l’amide."
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
        "explanation": "L’environnement de l’azote amide dépend des substituants du résidu considéré ; la proline fournit un cas particulier."
      },
      {
        "content": "La proline peut influencer la structure secondaire de la chaîne.",
        "correct": true,
        "explanation": "Le cycle de la proline contraint la géométrie locale de la chaîne peptidique et peut influencer sa structure secondaire."
      },
      {
        "content": "Dans les peptides, la liaison entre deux résidus est une fonction ester.",
        "correct": false,
        "explanation": "La liaison peptidique correspond à une fonction amide, pas à un ester."
      },
      {
        "content": "La proline n’influence jamais la géométrie locale de la chaîne peptidique.",
        "correct": false,
        "explanation": "Le cycle de la proline contraint la géométrie locale de la chaîne et peut influencer sa structure secondaire."
      },
      {
        "content": "La liaison peptidique est une fonction amide.",
        "correct": true,
        "explanation": "La liaison peptidique correspond à une fonction amide reliant deux résidus d’acides aminés."
      }
    ],
    "explanation": "La liaison peptidique est une amide et l’environnement de son azote peut varier ; la proline peut modifier localement la géométrie de la chaîne."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On dispose d’un chlorure d’acyle et de trois partenaires : méthanol, méthylamine et méthanethiol. Quelles associations sont exactes ?",
    "choices": [
      {
        "content": "Le méthanol conduit à une amide.",
        "correct": false,
        "explanation": "Le méthanol est un alcool : avec un chlorure d’acyle, il forme un ester et non une amide."
      },
      {
        "content": "Méthanol → ester.",
        "correct": true,
        "explanation": "Le méthanol apporte l’oxygène du groupe alkoxy de l’ester."
      },
      {
        "content": "Méthylamine → amide.",
        "correct": true,
        "explanation": "La méthylamine apporte l’azote de la fonction amide."
      },
      {
        "content": "Méthanethiol → thioester.",
        "correct": true,
        "explanation": "Le méthanethiol réagit avec le chlorure d’acyle pour former un thioester."
      },
      {
        "content": "Les trois partenaires donnent nécessairement une amide.",
        "correct": false,
        "explanation": "La nature O, N ou S du nucléophile détermine si le produit est un ester, une amide ou un thioester."
      }
    ],
    "explanation": "Avec un même chlorure d’acyle, un alcool, une amine et un thiol conduisent respectivement à un ester, une amide et un thioester."
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
        "content": "L’activation concerne l’alcool et non la fonction acide carboxylique.",
        "correct": false,
        "explanation": "L’activation se rapporte à la fonction acide carboxylique, pas à l’alcool."
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
        "explanation": "Le motif $\\ce{-C(=O)-NH-}$ associe directement un carbonyle à un azote : il correspond à une fonction amide."
      },
      {
        "content": "Alcool.",
        "correct": false,
        "explanation": "Un alcool porte un groupe $\\ce{-OH}$ et non un motif $\\ce{-C(=O)-N}$."
      },
      {
        "content": "Une amine tertiaire.",
        "correct": false,
        "explanation": "Une amine tertiaire ne possède pas le motif $\\ce{-C(=O)-N}$ d’une amide."
      },
      {
        "content": "Un ester.",
        "correct": false,
        "explanation": "Un ester possède un oxygène lié au carbonyle, tandis que le motif proposé comporte un azote."
      },
      {
        "content": "Un thioester.",
        "correct": false,
        "explanation": "Un thioester possède un soufre lié au groupe acyle, et non un azote."
      }
    ],
    "explanation": "Le motif $\\ce{-C(=O)-NH-}$ correspond à une fonction amide."
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
        "content": "Le motif contient un atome d’azote directement lié au carbonyle.",
        "correct": false,
        "explanation": "Le motif $\\ce{-C(=O)-O-CH3}$ ne contient aucun azote ; il ne peut donc pas être une amide."
      },
      {
        "content": "Il s'agit d'un ester.",
        "correct": true,
        "explanation": "Le carbonyle lié à $\\ce{O-CH3}$ correspond au motif d’un ester."
      },
      {
        "content": "Le substituant porté par l'oxygène est carboné.",
        "correct": true,
        "explanation": "$\\ce{CH3}$ est bien un substituant carboné porté par l’oxygène de l’ester."
      },
      {
        "content": "Si O portait H, la fonction deviendrait un acide carboxylique.",
        "correct": true,
        "explanation": "Dans un ester, l’oxygène porte un groupe carboné ; s’il portait un hydrogène, le motif serait celui d’un acide carboxylique."
      }
    ],
    "explanation": "Le motif $\\ce{-C(=O)-O-CH3}$ correspond à un ester : le carbonyle est lié à un oxygène portant un substituant carboné."
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
        "explanation": "Un acide activé réagit avec une amine pour former une amide."
      },
      {
        "content": "Acide non activé + amine → ester.",
        "correct": false,
        "explanation": "Un acide carboxylique non activé et une amine réagissent d’abord par transfert de proton pour former un sel."
      },
      {
        "content": "Alcane + alcool → amide.",
        "correct": false,
        "explanation": "La formation d’une amide nécessite une amine et un acide activé ; un alcane et un alcool ne fournissent pas ce motif."
      },
      {
        "content": "Un acide carboxylique non activé et une amine donnent directement et quantitativement une amide dans les conditions ordinaires décrites.",
        "correct": false,
        "explanation": "Le couple acide non activé/amine conduit d’abord à une réaction acido-basique et à un sel."
      },
      {
        "content": "Acide activé + alcool → ester.",
        "correct": true,
        "explanation": "Un acide activé réagit avec un alcool pour former un ester."
      }
    ],
    "explanation": "Un acide activé réagit avec un alcool pour former un ester et avec une amine pour former une amide."
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
        "explanation": "Le motif $\\ce{C(=O)-O-R'}$ définit la fonction ester."
      },
      {
        "content": "Une amide comporte un motif C(=O)-N.",
        "correct": true,
        "explanation": "Le motif $\\ce{C(=O)-N}$ définit la fonction amide."
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
        "explanation": "Le motif ester contient deux oxygènes et n’exige aucun atome d’azote."
      },
      {
        "content": "Un acide non activé et une amine donnent directement une amide.",
        "correct": false,
        "explanation": "Un acide carboxylique non activé et une amine forment d’abord un sel acide-base."
      },
      {
        "content": "La proline n'a aucun effet sur la chaîne peptidique.",
        "correct": false,
        "explanation": "La proline peut contraindre la géométrie locale de la chaîne peptidique et influencer sa structure secondaire."
      },
      {
        "content": "Un ester ne contient qu'un seul oxygène.",
        "correct": false,
        "explanation": "Le motif ester comporte deux oxygènes : un oxygène carbonylé et un oxygène du groupe $\\ce{OR'}$."
      },
      {
        "content": "Un chlorure d'acyle est un alcane.",
        "correct": false,
        "explanation": "Un chlorure d’acyle est un dérivé activé d’un acide carboxylique, pas un alcane."
      }
    ],
    "explanation": "L’amine attaque le carbone acylé électrophile d’un dérivé activé et forme une fonction amide. Un anhydride d’acide fait partie des dérivés activés d’acides carboxyliques."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de liaison fonctionnelle relie les acides aminés au sein des peptides et protéines ?",
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
