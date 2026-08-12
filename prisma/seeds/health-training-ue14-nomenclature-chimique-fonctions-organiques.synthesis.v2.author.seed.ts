import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.1 – Section Synthèse
 */

export const UE14_CH5_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une molécule a pour formule $\\ce{C3H8O}$. Avec $M_{\\mathrm C}=12$, $M_{\\mathrm H}=1$ et $M_{\\mathrm O}=16$, quelle est sa masse molaire en $\\mathrm{g\\,mol^{-1}}$ ?",
    "answer": {
      "type": "number",
      "value": 60,
      "tolerance": 0.01,
      "unit": "g/mol",
      "acceptedUnits": [
        "g/mol",
        "g·mol-1",
        "g mol-1"
      ]
    },
    "explanation": "$3\\times12+8\\times1+16=60\\,\\mathrm{g\\,mol^{-1}}$."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une formule empirique vaut $\\ce{CH2O}$ et la masse molaire vaut $90\\,\\mathrm{g\\,mol^{-1}}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La masse molaire de l'unité empirique vaut $30\\,\\mathrm{g\\,mol^{-1}}$.",
        "correct": true,
        "explanation": "12+2+16=30."
      },
      {
        "content": "Le facteur multiplicatif vaut 3.",
        "correct": true,
        "explanation": "90/30=3."
      },
      {
        "content": "La formule brute est $\\ce{C3H6O3}$.",
        "correct": true,
        "explanation": "Chaque indice est multiplié par 3."
      },
      {
        "content": "La formule brute est forcément $\\ce{CH2O}$.",
        "correct": false,
        "explanation": "La masse molaire indique un multiple."
      }
    ],
    "explanation": "Le passage formule empirique → formule brute utilise le rapport des masses molaires."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'aspirine est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède une fonction acide carboxylique.",
        "correct": true,
        "explanation": "Le groupe COOH est présent."
      },
      {
        "content": "Elle possède une fonction ester.",
        "correct": true,
        "explanation": "Le motif C(=O)-O est présent."
      },
      {
        "content": "Elle possède un ammonium quaternaire.",
        "correct": false,
        "explanation": "Aucun azote."
      },
      {
        "content": "Elle possède un nitrile.",
        "correct": false,
        "explanation": "Aucune liaison C≡N."
      }
    ],
    "explanation": "Cette question combine reconnaissance de fonctions et lecture d'une structure plus complexe.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "aspirin-topological"
    }
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La cystéine est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle contient C, H, N, O et S.",
        "correct": true,
        "explanation": "Ces éléments sont visibles dans la structure."
      },
      {
        "content": "Elle possède un thiol.",
        "correct": true,
        "explanation": "SH."
      },
      {
        "content": "Elle possède une amine.",
        "correct": true,
        "explanation": "NH2."
      },
      {
        "content": "Elle possède un acide carboxylique.",
        "correct": true,
        "explanation": "COOH."
      }
    ],
    "explanation": "La cystéine rassemble plusieurs éléments et plusieurs fonctions caractéristiques du chapitre.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "cysteine-topological"
    }
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans l'acide lactique $\\ce{CH3-CH(OH)-COOH}$, quelles propositions sont exactes selon les conventions du chapitre ?",
    "choices": [
      {
        "content": "La fonction alcool est secondaire.",
        "correct": true,
        "explanation": "Le carbone portant OH est lié à deux carbones."
      },
      {
        "content": "Le carbone portant OH est qualifié de tertiaire dans la convention locale fondée sur les H.",
        "correct": true,
        "explanation": "Il porte un seul H."
      },
      {
        "content": "Le carbone carboxylique est qualifié de quaternaire dans cette convention locale.",
        "correct": true,
        "explanation": "Il ne porte aucun H."
      },
      {
        "content": "Le groupe OH du carboxyle constitue une deuxième fonction alcool.",
        "correct": false,
        "explanation": "Il appartient à l'acide carboxylique."
      }
    ],
    "explanation": "Cette molécule force à distinguer la classe d'une fonction alcool du degré local attribué à un carbone."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel préfixe de nomenclature correspond à huit carbones ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "oct",
        "oct-"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Huit carbones correspondent au préfixe oct-, comme dans octane."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La N-acétylcystéine est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède un thiol.",
        "correct": true,
        "explanation": "SH."
      },
      {
        "content": "Elle possède une amide.",
        "correct": true,
        "explanation": "N est lié au carbonyle acétyle."
      },
      {
        "content": "Elle possède un acide carboxylique.",
        "correct": true,
        "explanation": "COOH."
      },
      {
        "content": "Elle possède une amine primaire libre.",
        "correct": false,
        "explanation": "L'azote est engagé dans l'amide."
      }
    ],
    "explanation": "La lecture d'une molécule polyfonctionnelle exige de reconnaître les motifs complets plutôt que de repérer seulement les hétéroatomes.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "n-acetylcysteine-topological"
    }
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Dans la représentation simplifiée de l'éthanoate d'éthyle, cliquez sur l'atome d'oxygène engagé en liaison simple avec le carbone carbonylé : c'est l'oxygène du motif ester $\\ce{-C(=O)-O-}$.",
    "image": {
      "src": "/images/training/ue14/chimie/ester-ethanoate-ethyle-qzone.svg",
      "alt": "Schéma simplifié de l'éthanoate d'éthyle montrant le groupe carbonyle et l'oxygène du motif ester",
      "width": 1200,
      "height": 500
    },
    "expectedZones": [
      {
        "id": "ester-single-oxygen",
        "label": "Oxygène en liaison simple du motif ester",
        "x": 0.542,
        "y": 0.52,
        "tolerance": 0.08
      }
    ],
    "explanation": "Dans un ester $\\ce{R-C(=O)-O-R'}$, le carbone carbonylé est lié à deux oxygènes : l'un par une double liaison, l'autre par une liaison simple. C'est ce second oxygène qu'il fallait sélectionner."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes.",
    "choices": [
      {
        "content": "Le propan-1-ol est un alcool primaire.",
        "correct": true,
        "explanation": "Le carbone fonctionnel est lié à un seul carbone."
      },
      {
        "content": "Dans la convention locale de la fiche, ce même carbone CH2 est qualifié de secondaire.",
        "correct": true,
        "explanation": "Il porte deux H."
      },
      {
        "content": "Les termes « alcool primaire » et « carbone primaire » sont toujours synonymes.",
        "correct": false,
        "explanation": "Ils reposent sur deux critères différents."
      },
      {
        "content": "Le groupe OH du propan-1-ol appartient à une fonction acide.",
        "correct": false,
        "explanation": "Il s'agit d'une fonction alcool."
      }
    ],
    "explanation": "La fiche demande explicitement de ne pas confondre degré du carbone et classe de l'alcool."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{R-CHO}$ définit un aldéhyde.",
        "correct": true,
        "explanation": "Carbonyle terminal lié à H."
      },
      {
        "content": "$\\ce{R-CO-R'}$ définit une cétone si R et R' sont carbonés.",
        "correct": true,
        "explanation": "Carbonyle interne."
      },
      {
        "content": "$\\ce{R-SH}$ définit un thiol.",
        "correct": true,
        "explanation": "SH."
      },
      {
        "content": "$\\ce{R-C#N}$ définit un nitrile.",
        "correct": true,
        "explanation": "C≡N."
      },
      {
        "content": "$\\ce{R4N+}$ définit un ammonium quaternaire.",
        "correct": true,
        "explanation": "N+ tétravalent."
      },
      {
        "content": "$\\ce{R-O-R'}$ définit un ester.",
        "correct": false,
        "explanation": "C'est un éther."
      },
      {
        "content": "$\\ce{R-COOH}$ définit une amine.",
        "correct": false,
        "explanation": "C'est un acide carboxylique."
      },
      {
        "content": "$\\ce{R-CONH2}$ définit une amine primaire libre.",
        "correct": false,
        "explanation": "C'est une amide."
      },
      {
        "content": "$\\ce{R-O-O-R'}$ définit un carbonate.",
        "correct": false,
        "explanation": "C'est un peroxyde."
      },
      {
        "content": "$\\ce{R-COO-R'}$ définit une cétone.",
        "correct": false,
        "explanation": "C'est un ester."
      }
    ],
    "explanation": "La synthèse des fonctions repose sur la reconnaissance précise des motifs caractéristiques."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une microanalyse d'un composé contenant seulement C, H et O donne 54,5 % C, 9,1 % H et 36,4 % O. Quelles propositions sont compatibles avec ces données ?",
    "choices": [
      {
        "content": "Pour 100 g, on a environ 4,54 mol de C.",
        "correct": true,
        "explanation": "54,5/12≈4,54."
      },
      {
        "content": "On a environ 9,1 mol de H.",
        "correct": true,
        "explanation": "9,1/1=9,1."
      },
      {
        "content": "On a environ 2,28 mol de O.",
        "correct": true,
        "explanation": "36,4/16≈2,28."
      },
      {
        "content": "Le rapport minimal est proche de $\\ce{C2H4O}$.",
        "correct": true,
        "explanation": "En divisant par 2,28 : ≈2:4:1."
      }
    ],
    "explanation": "Cette question demande de transformer des pourcentages massiques en rapport atomique minimal."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "La formule empirique d'un composé est $\\ce{C2H4O}$ et sa masse molaire vaut $132\\,\\mathrm{g\\,mol^{-1}}$. Quelle valeur prend le facteur multiplicatif entre formule empirique et formule brute ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "$M(\\ce{C2H4O})=44\\,\\mathrm{g\\,mol^{-1}}$ et $132/44=3$."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare la choline et l'acétylcholine représentées ci-dessous. À propos de l'acétylcholine : [[QUESTION_DIAGRAM]]",
    "choices": [
      {
        "content": "Elle comporte un ammonium quaternaire.",
        "correct": true,
        "explanation": "N+ est lié à quatre carbones."
      },
      {
        "content": "Elle comporte une fonction ester.",
        "correct": true,
        "explanation": "Le groupe hydroxyle de la choline a été estérifié dans cette structure."
      },
      {
        "content": "Son azote est une amine tertiaire neutre.",
        "correct": false,
        "explanation": "Il reste un ammonium quaternaire."
      },
      {
        "content": "Elle comporte un nitrile.",
        "correct": false,
        "explanation": "Aucune liaison C≡N."
      }
    ],
    "explanation": "L'acétylcholine permet de mobiliser simultanément les fonctions oxygénées et azotées.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "acetylcholine-topological"
    }
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Le paracétamol est représenté ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son azote appartient à une amide.",
        "correct": true,
        "explanation": "N est directement lié à C=O."
      },
      {
        "content": "Le groupe OH est un phénol et non un alcool aliphatique.",
        "correct": true,
        "explanation": "Il est porté par un carbone aromatique."
      },
      {
        "content": "La molécule possède un ester.",
        "correct": false,
        "explanation": "Pas de motif C(=O)-O-R."
      },
      {
        "content": "La seule présence d'un azote permettrait de conclure à une amine.",
        "correct": false,
        "explanation": "L'environnement de l'azote doit être lu."
      }
    ],
    "explanation": "Une molécule médicamenteuse simple permet de tester les frontières entre fonctions proches.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "paracetamol-topological"
    }
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "La valine est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède une amine et un acide carboxylique.",
        "correct": true,
        "explanation": "NH2 et COOH."
      },
      {
        "content": "Sa chaîne principale contenant le carboxyle comporte quatre carbones.",
        "correct": true,
        "explanation": "Le parent carboné retenu contient quatre carbones."
      },
      {
        "content": "Elle contient cinq carbones au total.",
        "correct": true,
        "explanation": "Le substituant méthyle ajoute un carbone."
      },
      {
        "content": "Le carbone du carboxyle porte trois hydrogènes.",
        "correct": false,
        "explanation": "Il n'en porte aucun."
      }
    ],
    "explanation": "La valine combine reconnaissance des fonctions, comptage des carbones et lecture de la chaîne.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "valine-topological"
    }
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "L'isooctane est représenté ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il contient huit carbones.",
        "correct": true,
        "explanation": "C8."
      },
      {
        "content": "Son parent est un pentane.",
        "correct": true,
        "explanation": "Chaîne principale de cinq carbones."
      },
      {
        "content": "Trois substituants méthyle occupent les positions 2, 2 et 4.",
        "correct": true,
        "explanation": "Structure 2,2,4-triméthylpentane."
      },
      {
        "content": "Il possède une fonction alcool.",
        "correct": false,
        "explanation": "C'est un hydrocarbure."
      }
    ],
    "explanation": "Cet exemple vérifie que le nombre total de carbones et la longueur de la chaîne principale ne sont pas synonymes.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "isooctane-topological"
    }
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux molécules qui comportent un carbonyle mais ne sont ni des aldéhydes ni des cétones.",
    "choices": [
      {
        "content": "$\\ce{CH3COOH}$",
        "correct": true,
        "explanation": "Le carbonyle appartient à un acide carboxylique."
      },
      {
        "content": "$\\ce{CH3COOCH3}$",
        "correct": true,
        "explanation": "Le carbonyle appartient à un ester."
      },
      {
        "content": "$\\ce{CH3CHO}$",
        "correct": false,
        "explanation": "C'est un aldéhyde."
      },
      {
        "content": "$\\ce{CH3COCH3}$",
        "correct": false,
        "explanation": "C'est une cétone."
      }
    ],
    "explanation": "La présence d'un groupe C=O ne suffit pas à conclure aldéhyde ou cétone : il faut lire les substituants du carbone carbonylé."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Acétylcholine → ester + ammonium quaternaire.",
        "correct": true,
        "explanation": "Les deux motifs sont présents."
      },
      {
        "content": "Cystéine → amine + thiol + acide carboxylique.",
        "correct": true,
        "explanation": "Trois fonctions."
      },
      {
        "content": "Paracétamol → amide + phénol.",
        "correct": true,
        "explanation": "Deux motifs principaux."
      },
      {
        "content": "Aspirine → acide carboxylique + ester.",
        "correct": true,
        "explanation": "Deux fonctions oxygénées."
      },
      {
        "content": "N-acétylcystéine → thiol + amide + acide carboxylique.",
        "correct": true,
        "explanation": "Trois fonctions."
      },
      {
        "content": "Choline → nitrile + ester.",
        "correct": false,
        "explanation": "Elle possède notamment un hydroxyle et un ammonium quaternaire."
      },
      {
        "content": "Cystéine → ammonium quaternaire.",
        "correct": false,
        "explanation": "Pas dans la représentation neutre utilisée."
      },
      {
        "content": "Paracétamol → amine primaire libre.",
        "correct": false,
        "explanation": "L'azote est amide."
      },
      {
        "content": "Aspirine → thiol.",
        "correct": false,
        "explanation": "Aucun soufre."
      },
      {
        "content": "N-acétylcystéine → nitrile.",
        "correct": false,
        "explanation": "Aucun C≡N."
      }
    ],
    "explanation": "Les molécules du vivant ou d'intérêt médical servent ici de supports de reconnaissance, sans demander de connaissances thérapeutiques."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "L’aspirine a pour formule brute $\\ce{C9H8O4}$. Combien d’atomes comporte une molécule d’aspirine au total ?",
    "answer": {
      "type": "number",
      "value": 21,
      "tolerance": 0
    },
    "explanation": "La formule contient 9 carbones, 8 hydrogènes et 4 oxygènes : $9+8+4=21$ atomes."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On considère le propan-2-ol $\\ce{CH3-CH(OH)-CH3}$. Quelles propositions sont exactes dans les conventions de la fiche ?",
    "choices": [
      {
        "content": "La fonction alcool est secondaire.",
        "correct": true,
        "explanation": "Le carbone porteur de OH est lié à deux carbones."
      },
      {
        "content": "Le carbone porteur de OH est qualifié de tertiaire selon la convention locale fondée sur les hydrogènes.",
        "correct": true,
        "explanation": "Il porte un H."
      },
      {
        "content": "Les deux groupes CH3 sont des carbones primaires selon cette même convention.",
        "correct": true,
        "explanation": "Trois H chacun."
      },
      {
        "content": "Le mot « secondaire » a exactement le même sens dans « alcool secondaire » et « carbone secondaire ».",
        "correct": false,
        "explanation": "Les critères sont différents."
      }
    ],
    "explanation": "Le chapitre demande explicitement de séparer ces deux systèmes de classification."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions de synthèse sont exactes ?",
    "choices": [
      {
        "content": "Une formule brute ne suffit pas toujours à distinguer des isomères.",
        "correct": true,
        "explanation": "La structure peut différer."
      },
      {
        "content": "Un même atome d'azote peut appartenir à des fonctions différentes selon son environnement.",
        "correct": true,
        "explanation": "Amine, amide, ammonium, etc."
      },
      {
        "content": "Un groupe OH n'est pas toujours une fonction alcool indépendante.",
        "correct": true,
        "explanation": "Dans COOH ou un phénol, le contexte change la classification."
      },
      {
        "content": "Le choix d'une chaîne principale ne se réduit pas au nombre total de carbones de la molécule.",
        "correct": true,
        "explanation": "Les ramifications doivent être distinguées du parent."
      }
    ],
    "explanation": "Les principales difficultés du chapitre viennent de la nécessité de lire les motifs dans leur contexte plutôt que de reconnaître des symboles isolés."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La formule brute décrit la composition d'une molécule.",
        "correct": true,
        "explanation": "Nature et nombre d'atomes."
      },
      {
        "content": "$\\ce{R-COO-R'}$ est un ester.",
        "correct": true,
        "explanation": "Motif ester."
      },
      {
        "content": "$\\ce{R-C#N}$ est un nitrile.",
        "correct": true,
        "explanation": "Motif nitrile."
      },
      {
        "content": "Méth-, éth-, prop- correspondent à 1, 2 et 3 carbones.",
        "correct": true,
        "explanation": "Début de la série."
      },
      {
        "content": "Dans la convention locale de la fiche, un carbone sans H est dit quaternaire.",
        "correct": true,
        "explanation": "C'est la convention enseignée."
      },
      {
        "content": "$\\ce{R-O-R'}$ est un amide.",
        "correct": false,
        "explanation": "C'est un éther."
      },
      {
        "content": "Un ammonium quaternaire est une amine tertiaire neutre.",
        "correct": false,
        "explanation": "Il est tétravalent et positif."
      },
      {
        "content": "La formule brute donne toujours la géométrie.",
        "correct": false,
        "explanation": "Elle ne la donne pas."
      },
      {
        "content": "Un alcool tertiaire possède trois groupes OH.",
        "correct": false,
        "explanation": "Il possède un carbone fonctionnel lié à trois carbones."
      },
      {
        "content": "Déc- correspond à huit carbones.",
        "correct": false,
        "explanation": "Déc- = 10."
      }
    ],
    "explanation": "Ce dernier item rassemble composition, fonctions, nomenclature et convention locale de classification des carbones."
  }
];
