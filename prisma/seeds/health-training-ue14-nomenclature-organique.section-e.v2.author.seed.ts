import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.8 – E – Molécules polyfonctionnelles et priorités
 * Ordres 89–110 (22 questions)
 * Version éditoriale finale : réponses brassées, nomenclature transversale et contrôle des biais.
 */
export const UE14_CH12_SECTION_E_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 89,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans une molécule qui possède à la fois une fonction alcool et une fonction amine, laquelle est prioritaire pour déterminer le suffixe du nom ?",
    "choices": [
      {
        "content": "La fonction alcool.",
        "correct": true,
        "explanation": "L'alcool est prioritaire sur l'amine : il fournit donc le suffixe -ol."
      },
      {
        "content": "La fonction portée par le carbone ayant le plus grand numéro.",
        "correct": false,
        "explanation": "La priorité fonctionnelle est déterminée avant la numérotation."
      },
      {
        "content": "La fonction amine.",
        "correct": false,
        "explanation": "L'amine est moins prioritaire que l'alcool."
      },
      {
        "content": "Les deux fonctions sont toujours exprimées par deux suffixes.",
        "correct": false,
        "explanation": "Une seule fonction principale fournit le suffixe ; l'autre est exprimée comme fonction secondaire."
      },
      {
        "content": "La fonction située le plus à gauche sur le dessin.",
        "correct": false,
        "explanation": "L'orientation graphique n'intervient pas dans la priorité fonctionnelle."
      }
    ],
    "explanation": "Première étape d'une molécule polyfonctionnelle : comparer les fonctions. L'alcool est prioritaire sur l'amine ; il fournit le suffixe -ol et l'amine est exprimée par le préfixe amino-."
  },
  {
    "order": 90,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "En nomenclature polyfonctionnelle, quelles propositions décrivent correctement le rôle de la fonction principale ?",
    "choices": [
      {
        "content": "Elle est choisie selon l'ordre de priorité des fonctions.",
        "correct": true,
        "explanation": "La fonction principale n'est pas choisie au hasard : elle résulte de l'ordre de priorité."
      },
      {
        "content": "Toutes les autres fonctions doivent être supprimées du nom.",
        "correct": false,
        "explanation": "Les fonctions secondaires restent présentes dans le nom, souvent sous forme de préfixes."
      },
      {
        "content": "Elle intervient dans le choix de la chaîne principale et de la numérotation.",
        "correct": true,
        "explanation": "Le parent doit contenir la fonction principale lorsqu'elle est portée par la chaîne, et sa position guide la numérotation."
      },
      {
        "content": "Elle dépend de la couleur ou de l'orientation de la représentation.",
        "correct": false,
        "explanation": "La priorité est chimique, pas graphique."
      },
      {
        "content": "Elle fournit généralement le suffixe du nom.",
        "correct": true,
        "explanation": "Le suffixe traduit la fonction principale : -ol, -one, -al, -amide, etc."
      }
    ],
    "explanation": "La méthode est : identifier toutes les fonctions → déterminer la fonction principale → choisir le parent → numéroter → exprimer les autres fonctions comme préfixes → assembler le nom."
  },
  {
    "order": 91,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les couples suivants, quelles relations de priorité fonctionnelle sont correctes ?",
    "choices": [
      {
        "content": "Amide > nitrile.",
        "correct": true,
        "explanation": "L'amide est prioritaire sur le nitrile."
      },
      {
        "content": "Aldéhyde > cétone.",
        "correct": true,
        "explanation": "L'aldéhyde est placé avant la cétone."
      },
      {
        "content": "Acide carboxylique > ester.",
        "correct": true,
        "explanation": "L'acide carboxylique est placé au-dessus de l'ester dans l'ordre de priorité."
      },
      {
        "content": "Thiol > alcool.",
        "correct": false,
        "explanation": "L'alcool est prioritaire sur le thiol."
      },
      {
        "content": "Amine > thiol.",
        "correct": false,
        "explanation": "Le thiol est prioritaire sur l'amine."
      }
    ],
    "explanation": "Pour ces fonctions, l'ordre décroissant de priorité est : acide carboxylique > ester > amide > nitrile > aldéhyde > cétone > alcool > thiol > amine."
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Lorsque l'alcool n'est pas la fonction principale d'une molécule polyfonctionnelle, quel préfixe est utilisé ?",
    "choices": [
      {
        "content": "oxo-",
        "correct": false,
        "explanation": "Oxo- traduit un groupe carbonyle secondaire."
      },
      {
        "content": "hydroxy-",
        "correct": true,
        "explanation": "Une fonction alcool secondaire est exprimée par le préfixe hydroxy-."
      },
      {
        "content": "cyano-",
        "correct": false,
        "explanation": "Cyano- correspond à une fonction nitrile lorsqu'elle est exprimée en préfixe."
      },
      {
        "content": "amino-",
        "correct": false,
        "explanation": "Amino- correspond à une fonction amine secondaire."
      },
      {
        "content": "carbamoyl-",
        "correct": false,
        "explanation": "Carbamoyl- correspond à une fonction amide exprimée comme substituant."
      }
    ],
    "explanation": "Quand l'alcool perd son rôle de fonction principale, le suffixe -ol disparaît et la fonction est exprimée par hydroxy-."
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Lorsque l'amine n'est pas la fonction principale, quel préfixe est utilisé ?",
    "choices": [
      {
        "content": "hydroxy-",
        "correct": false,
        "explanation": "Hydroxy- correspond à une fonction alcool secondaire."
      },
      {
        "content": "formyl-",
        "correct": false,
        "explanation": "Formyl- correspond à un aldéhyde exprimé comme substituant."
      },
      {
        "content": "amino-",
        "correct": true,
        "explanation": "Une fonction amine secondaire est exprimée par le préfixe amino-."
      },
      {
        "content": "imino-",
        "correct": false,
        "explanation": "Imino- correspond à une autre fonction azotée."
      },
      {
        "content": "mercapto-",
        "correct": false,
        "explanation": "Mercapto- est le préfixe utilisé pour une fonction thiol secondaire."
      }
    ],
    "explanation": "Le couple à retenir est amine principale → suffixe -amine ; amine secondaire → préfixe amino-."
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Lorsque le groupe thiol $\\ce{-SH}$ n'est pas la fonction principale, quel préfixe est utilisé ?",
    "choices": [
      {
        "content": "thio-",
        "correct": false,
        "explanation": "Ce préfixe ne correspond pas à une fonction thiol secondaire."
      },
      {
        "content": "hydroxy-",
        "correct": false,
        "explanation": "Hydroxy- désigne une fonction alcool secondaire."
      },
      {
        "content": "oxo-",
        "correct": false,
        "explanation": "Oxo- est utilisé pour une fonction carbonylée secondaire."
      },
      {
        "content": "amino-",
        "correct": false,
        "explanation": "Amino- désigne une fonction amine secondaire."
      },
      {
        "content": "mercapto-",
        "correct": true,
        "explanation": "Le groupe $\\ce{-SH}$ secondaire est exprimé par le préfixe mercapto-."
      }
    ],
    "explanation": "Thiol principal → suffixe -thiol ; thiol secondaire → préfixe mercapto-."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "À propos d'une molécule portant à la fois une cétone et un alcool, sélectionnez exactement les deux propositions incorrectes.",
    "choices": [
      {
        "content": "La cétone fournit le suffixe -one.",
        "correct": false,
        "explanation": "Correct : elle est la fonction principale."
      },
      {
        "content": "Les deux fonctions doivent être ignorées pour choisir la numérotation.",
        "correct": true,
        "explanation": "Incorrect : la fonction principale joue précisément un rôle central dans la numérotation."
      },
      {
        "content": "L'alcool secondaire peut être exprimé par hydroxy-.",
        "correct": false,
        "explanation": "Correct : hydroxy- traduit la fonction alcool devenue secondaire."
      },
      {
        "content": "L'alcool doit obligatoirement fournir le suffixe -ol.",
        "correct": true,
        "explanation": "Incorrect : il n'est pas prioritaire sur la cétone."
      },
      {
        "content": "La cétone est prioritaire sur l'alcool.",
        "correct": false,
        "explanation": "Correct : dans l'ordre retenu, cétone > alcool."
      }
    ],
    "explanation": "Pour une hydroxycétone : cétone principale → suffixe -one ; alcool secondaire → hydroxy-. La méthode commence toujours par le classement des fonctions."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Alcool secondaire : amino-.",
        "correct": false,
        "explanation": "Amino- correspond à une amine."
      },
      {
        "content": "Thiol secondaire : oxo-.",
        "correct": false,
        "explanation": "Oxo- correspond à un groupe carbonyle."
      },
      {
        "content": "Cétone secondaire : cyano-.",
        "correct": false,
        "explanation": "Cyano- correspond à un nitrile."
      },
      {
        "content": "Amine secondaire : hydroxy-.",
        "correct": false,
        "explanation": "Hydroxy- correspond à un alcool."
      },
      {
        "content": "Alcool secondaire : hydroxy-.",
        "correct": true,
        "explanation": "Hydroxy- est le préfixe de l'alcool lorsqu'il n'est pas principal."
      },
      {
        "content": "Nitrile secondaire : mercapto-.",
        "correct": false,
        "explanation": "Mercapto- correspond à une fonction thiol secondaire."
      },
      {
        "content": "Nitrile secondaire : cyano-.",
        "correct": true,
        "explanation": "Cyano- est le préfixe correspondant au nitrile lorsqu'il n'est pas la fonction principale."
      },
      {
        "content": "Amine secondaire : amino-.",
        "correct": true,
        "explanation": "Amino- exprime une fonction amine secondaire."
      },
      {
        "content": "Thiol secondaire : mercapto-.",
        "correct": true,
        "explanation": "C'est le préfixe correspondant à une fonction thiol secondaire."
      },
      {
        "content": "Cétone secondaire : oxo-.",
        "correct": true,
        "explanation": "Oxo- permet d'exprimer un groupe carbonyle secondaire."
      }
    ],
    "explanation": "Ce quiz associe chaque fonction secondaire à son préfixe. Il ne suffit pas de reconnaître la fonction : il faut savoir comment son nom change lorsqu'elle n'est plus principale."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "La molécule représentée possède une fonction alcool et une fonction acide carboxylique. Cliquez sur la fonction qui détermine le suffixe principal et l'origine de la numérotation.",
    "image": {
      "src": "/images/training/ue14/chimie/nomenclature-organique/section-e-priority-acid-alcohol-qzone.svg",
      "alt": "Structure simplifiée de l'acide 3-hydroxypropanoïque avec une fonction alcool et une fonction acide carboxylique",
      "width": 1200,
      "height": 500
    },
    "expectedZones": [
      {
        "id": "carboxylic-acid-principal-function",
        "label": "Fonction acide carboxylique prioritaire",
        "x": 0.735,
        "y": 0.56,
        "tolerance": 0.11
      }
    ],
    "explanation": "L'acide carboxylique est prioritaire sur l'alcool. Il fournit la terminaison « acide …oïque » et son carbone constitue C1. Le groupe $\\ce{-OH}$ devient hydroxy-."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une chaîne possède à la fois une fonction alcool et une fonction amine. Quel préfixe exprime l'amine si l'alcool est la fonction principale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "amino",
        "amino-"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "L'alcool est prioritaire sur l'amine. L'alcool fournit le suffixe -ol et l'amine est exprimée par le préfixe amino-."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{HO-CH2-CH(NH2)-CH3}$ ?",
    "choices": [
      {
        "content": "Propan-2-amine-1-ol.",
        "correct": false,
        "explanation": "On n'empile pas ici deux suffixes fonctionnels : une seule fonction est principale."
      },
      {
        "content": "1-hydroxypropan-2-amine.",
        "correct": false,
        "explanation": "Cette proposition traite à tort l'amine comme fonction principale."
      },
      {
        "content": "2-aminopropan-3-ol.",
        "correct": false,
        "explanation": "La numérotation doit donner à la fonction alcool principale le locant 1."
      },
      {
        "content": "2-aminopropan-1-ol.",
        "correct": true,
        "explanation": "L'alcool est prioritaire sur l'amine : parent propan-1-ol et substituant amino en C2."
      },
      {
        "content": "2-hydroxypropan-1-amine.",
        "correct": false,
        "explanation": "L'alcool est prioritaire sur l'amine dans l'ordre utilisé."
      }
    ],
    "explanation": "Méthode complète : alcool > amine → chaîne de trois carbones → alcool en C1 → amino en C2 → 2-aminopropan-1-ol."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-C(=O)-CH(OH)-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "3-hydroxybutan-2-one"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La cétone est prioritaire sur l'alcool. Le carbonyle reçoit le locant 2 et le groupe hydroxyle devient hydroxy- en C3 : 3-hydroxybutan-2-one."
  },
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de $\\ce{CH3-C(=O)-CH(OH)-CH3}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le groupe carbonyle reçoit le locant 2.",
        "correct": true,
        "explanation": "On choisit le sens donnant à la fonction principale le plus petit locant."
      },
      {
        "content": "Le nom doit obligatoirement se terminer par -ol.",
        "correct": false,
        "explanation": "Le suffixe est déterminé par la cétone principale : -one."
      },
      {
        "content": "La cétone est la fonction principale.",
        "correct": true,
        "explanation": "La cétone est prioritaire sur l'alcool dans l'ordre retenu."
      },
      {
        "content": "La chaîne principale comporte quatre carbones.",
        "correct": true,
        "explanation": "Le parent est un butane contenant le groupe carbonyle."
      },
      {
        "content": "Le groupe alcool est exprimé par le préfixe hydroxy-.",
        "correct": true,
        "explanation": "L'alcool est secondaire et devient hydroxy-."
      }
    ],
    "explanation": "Une fois la priorité déterminée, tout s'enchaîne : fonction principale = cétone, suffixe -one, numérotation guidée par le carbonyle, puis hydroxy- pour l'alcool."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{HO-CH2-CH2-CHO}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "3-hydroxypropanal"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "L'aldéhyde est prioritaire sur l'alcool. Le carbone de $\\ce{-CHO}$ est C1 ; le groupe hydroxyle est alors en C3 et devient hydroxy-. Le nom est 3-hydroxypropanal."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{NH2-CH2-CH2-COOH}$ ?",
    "choices": [
      {
        "content": "Propan-3-amine-1-oïque.",
        "correct": false,
        "explanation": "La nomenclature n'utilise pas ici deux suffixes fonctionnels assemblés de cette façon."
      },
      {
        "content": "Acide 3-aminopropanoïque.",
        "correct": true,
        "explanation": "L'acide carboxylique est prioritaire ; son carbone est C1 et le groupe amino se trouve en C3."
      },
      {
        "content": "Acide 1-aminopropanoïque.",
        "correct": false,
        "explanation": "Le groupe amino n'est pas porté par le carbone carboxylique C1."
      },
      {
        "content": "3-carboxypropan-1-amine.",
        "correct": false,
        "explanation": "Cette proposition traite à tort l'amine comme fonction principale."
      },
      {
        "content": "Acide 3-hydroxypropanoïque.",
        "correct": false,
        "explanation": "Le groupe secondaire est $\\ce{-NH2}$, donc amino-, pas hydroxy-."
      }
    ],
    "explanation": "Acide carboxylique > amine. Le nom principal est acide propanoïque et l'amine secondaire devient amino- en C3 : acide 3-aminopropanoïque."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{HO-CH2-CH2-C#N}$ ?",
    "choices": [
      {
        "content": "1-cyanoéthanol.",
        "correct": false,
        "explanation": "Cette proposition ne choisit pas le nitrile comme fonction principale."
      },
      {
        "content": "3-hydroxypropanenitrile.",
        "correct": true,
        "explanation": "Le nitrile est prioritaire sur l'alcool ; son carbone est C1 et le groupe hydroxy est en C3."
      },
      {
        "content": "3-hydroxyéthanenitrile.",
        "correct": false,
        "explanation": "Le carbone du nitrile doit être inclus : le parent compte trois carbones."
      },
      {
        "content": "3-aminopropanenitrile.",
        "correct": false,
        "explanation": "La fonction secondaire est un alcool, pas une amine."
      },
      {
        "content": "Propan-3-ol-1-nitrile.",
        "correct": false,
        "explanation": "On n'utilise pas ici deux suffixes fonctionnels."
      }
    ],
    "explanation": "Nitrile > alcool. Le carbone de $\\ce{C#N}$ est C1, le parent possède trois carbones et l'alcool secondaire devient hydroxy- en C3."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-C(=O)-CH2-COOH}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide 3-oxobutanoïque",
        "acide 3-oxobutanoique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "L'acide carboxylique est prioritaire sur la cétone. Son carbone est C1 ; le second groupe carbonyle est en C3 et devient oxo-. Le nom est acide 3-oxobutanoïque."
  },
  {
    "order": 106,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant $\\ce{CH3-CH(OH)-CH(SH)-CH3}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'alcool est prioritaire sur le thiol.",
        "correct": true,
        "explanation": "L'alcool est prioritaire sur le thiol."
      },
      {
        "content": "Le groupe $\\ce{-SH}$ secondaire est exprimé par mercapto-.",
        "correct": true,
        "explanation": "Un thiol secondaire est exprimé par le préfixe mercapto-."
      },
      {
        "content": "La fonction principale fournit le suffixe -ol.",
        "correct": true,
        "explanation": "L'alcool reste la fonction principale."
      },
      {
        "content": "La numérotation correcte place l'alcool en C2.",
        "correct": true,
        "explanation": "La fonction principale doit recevoir le plus petit locant ; le thiol est alors en C3."
      },
      {
        "content": "Le nom doit se terminer par -thiol parce que le soufre est plus lourd que l'oxygène.",
        "correct": false,
        "explanation": "La priorité de nomenclature ne dépend pas de la masse atomique."
      }
    ],
    "explanation": "Le nom est 3-mercaptobutan-2-ol : l'alcool est principal et le thiol est secondaire."
  },
  {
    "order": 107,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "À propos de la molécule $\\ce{NH2-CH2-C(=O)-NH2}$, sélectionnez exactement les deux propositions incorrectes.",
    "choices": [
      {
        "content": "Le groupe amine secondaire est exprimé par amino-.",
        "correct": false,
        "explanation": "Correct : il se trouve en C2."
      },
      {
        "content": "La fonction amine doit fournir le suffixe -amine parce qu'elle apparaît à gauche sur la formule.",
        "correct": true,
        "explanation": "Incorrect : l'orientation de l'écriture n'intervient pas dans la priorité."
      },
      {
        "content": "La fonction amide est prioritaire sur la fonction amine.",
        "correct": false,
        "explanation": "Correct : l'amide est prioritaire sur l'amine."
      },
      {
        "content": "Le nom doit être 2-carbamoylméthanamine.",
        "correct": true,
        "explanation": "Incorrect : cette formulation traite à tort l'amine comme fonction principale."
      },
      {
        "content": "Le nom systématique attendu est 2-aminoéthanamide.",
        "correct": false,
        "explanation": "Correct : éthanamide est le parent, avec amino- en C2."
      }
    ],
    "explanation": "Le classement des fonctions précède toute lecture graphique : amide > amine. Le parent est éthanamide et le groupe amino est en C2."
  },
  {
    "order": 108,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Dans acide 3-aminopropanoïque, la numérotation commence du côté du groupe amine.",
        "correct": false,
        "explanation": "Elle commence au carbone carboxylique C1."
      },
      {
        "content": "Dans 2-aminopropan-1-ol, l'amine fournit le suffixe principal.",
        "correct": false,
        "explanation": "Elle est secondaire et apparaît comme amino-."
      },
      {
        "content": "Dans 3-hydroxybutan-2-one, hydroxy- indique une fonction cétone secondaire.",
        "correct": false,
        "explanation": "Hydroxy- indique l'alcool secondaire."
      },
      {
        "content": "Dans 2-aminopropan-1-ol, l'alcool est la fonction principale.",
        "correct": true,
        "explanation": "Le suffixe -ol traduit la fonction principale."
      },
      {
        "content": "Dans 3-hydroxypropanenitrile, le carbone du nitrile est inclus dans le parent.",
        "correct": true,
        "explanation": "Le carbone de $\\ce{C#N}$ constitue C1."
      },
      {
        "content": "Dans un nitrile principal, le carbone de $\\ce{C#N}$ est exclu du parent.",
        "correct": false,
        "explanation": "Il est inclus dans le parent."
      },
      {
        "content": "Une molécule polyfonctionnelle doit nécessairement porter deux suffixes fonctionnels.",
        "correct": false,
        "explanation": "Une fonction principale fournit le suffixe ; les autres sont généralement exprimées par des préfixes."
      },
      {
        "content": "Dans acide 3-aminopropanoïque, le carbone du groupe carboxyle est C1.",
        "correct": true,
        "explanation": "L'acide carboxylique fixe l'origine de la numérotation."
      },
      {
        "content": "Dans 3-hydroxybutan-2-one, la cétone est prioritaire sur l'alcool.",
        "correct": true,
        "explanation": "Le suffixe -one confirme que la cétone est principale."
      },
      {
        "content": "Dans acide 3-oxobutanoïque, oxo- traduit une fonction carbonylée secondaire.",
        "correct": true,
        "explanation": "La cétone est secondaire par rapport à l'acide."
      }
    ],
    "explanation": "Ce bilan vérifie la chaîne de raisonnement entière : priorité → fonction principale → parent → numérotation → préfixes secondaires → suffixe."
  },
  {
    "order": 109,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{NH2-CH2-C(=O)-NH2}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "2-aminoéthanamide",
        "2-aminoethanamide"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "L'amide est prioritaire sur l'amine. Le carbone carbonylé de l'amide est C1, le parent est éthanamide et le groupe amino est porté par C2 : 2-aminoéthanamide."
  },
  {
    "order": 110,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelle méthode est la plus sûre pour nommer une molécule organique portant plusieurs fonctions ?",
    "choices": [
      {
        "content": "Identifier toutes les fonctions présentes avant de choisir le suffixe.",
        "correct": true,
        "explanation": "Il faut connaître l'ensemble des fonctions pour déterminer laquelle est prioritaire."
      },
      {
        "content": "Déterminer la fonction principale à partir de l'ordre de priorité.",
        "correct": true,
        "explanation": "Cette étape fixe le suffixe et influence le choix du parent."
      },
      {
        "content": "Commencer par numéroter arbitrairement de gauche à droite puis chercher une justification.",
        "correct": false,
        "explanation": "La numérotation doit résulter des règles de nomenclature, pas de l'orientation du dessin."
      },
      {
        "content": "Transformer les autres fonctions en préfixes adaptés avant d'assembler le nom.",
        "correct": true,
        "explanation": "Hydroxy-, amino-, oxo-, cyano-, mercapto-, etc., permettent d'exprimer les fonctions secondaires."
      },
      {
        "content": "Choisir puis numéroter la chaîne principale en tenant compte de la fonction principale.",
        "correct": true,
        "explanation": "La fonction principale structure le choix du parent et la numérotation."
      }
    ],
    "explanation": "La méthode complète est : fonctions → priorité → fonction principale → chaîne principale → numérotation → fonctions secondaires/préfixes → substituants → suffixe → assemblage et vérification du nom."
  }
];
