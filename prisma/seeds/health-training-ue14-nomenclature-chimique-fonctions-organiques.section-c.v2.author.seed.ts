import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.1 – Section C – Fonctions azotées et soufrées
 */

export const UE14_CH5_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la fonction amine dans le cadre du cours, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une amine neutre usuelle possède un azote trivalent.",
        "correct": true,
        "explanation": "La fiche présente l'azote des amines comme trivalent."
      },
      {
        "content": "Le motif général peut être noté $\\ce{R_nNH_{3-n}}$ avec $0\\le n\\le3$.",
        "correct": true,
        "explanation": "C'est la notation donnée dans la fiche."
      },
      {
        "content": "Toute molécule contenant de l'azote est une amine.",
        "correct": false,
        "explanation": "Il existe aussi des amides, nitriles, carbamates ou ammoniums quaternaires."
      },
      {
        "content": "La classe primaire, secondaire ou tertiaire dépend du nombre de groupes carbonés liés à l'azote.",
        "correct": true,
        "explanation": "On compte les substituants carbonés directement liés à N."
      }
    ],
    "explanation": "La fonction amine est définie par l'environnement de l'azote, pas par la seule présence d'un atome d'azote."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles associations sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{CH3NH2}$ : amine primaire.",
        "correct": true,
        "explanation": "Un seul groupe carboné est lié à N."
      },
      {
        "content": "$\\ce{(CH3)2NH}$ : amine secondaire.",
        "correct": true,
        "explanation": "Deux groupes carbonés sont liés à N."
      },
      {
        "content": "$\\ce{(CH3)3N}$ : amine tertiaire.",
        "correct": true,
        "explanation": "Trois groupes carbonés sont liés à N."
      },
      {
        "content": "$\\ce{(CH3)4N+}$ : amine tertiaire neutre.",
        "correct": false,
        "explanation": "Il s'agit d'un ammonium quaternaire chargé positivement."
      }
    ],
    "explanation": "Le nombre de substituants carbonés autour de l'azote distingue les classes d'amines ; quatre substituants avec charge positive définissent un ammonium quaternaire."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel critère distingue le mieux un ammonium quaternaire d'une amine tertiaire ?",
    "choices": [
      {
        "content": "L'azote de l'ammonium quaternaire est lié à quatre groupes et porte une charge positive.",
        "correct": true,
        "explanation": "C'est le motif caractéristique."
      },
      {
        "content": "L'ammonium quaternaire ne contient jamais de carbone.",
        "correct": false,
        "explanation": "Il porte justement quatre substituants, souvent carbonés."
      },
      {
        "content": "Une amine tertiaire porte toujours une charge positive.",
        "correct": false,
        "explanation": "Une amine tertiaire simple est neutre."
      },
      {
        "content": "L'ammonium quaternaire possède forcément une liaison triple C≡N.",
        "correct": false,
        "explanation": "Cela correspond à un nitrile."
      }
    ],
    "explanation": "Dans un ammonium quaternaire, l'azote tétravalent est chargé positivement ; il faut le distinguer d'un azote trivalent neutre d'amine."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel motif correspond à une fonction amide ?",
    "choices": [
      {
        "content": "$\\ce{R-C(=O)-NR'R''}$",
        "correct": true,
        "explanation": "L'azote est directement lié au carbone carbonylé."
      },
      {
        "content": "$\\ce{R-NH2}$",
        "correct": false,
        "explanation": "C'est une amine primaire."
      },
      {
        "content": "$\\ce{R-C#N}$",
        "correct": false,
        "explanation": "C'est un nitrile."
      },
      {
        "content": "$\\ce{R-SH}$",
        "correct": false,
        "explanation": "C'est un thiol."
      }
    ],
    "explanation": "Une amide associe un carbonyle et un azote directement lié au carbone carbonylé."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel nom de fonction correspond au motif $\\ce{R-C#N}$ ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "nitrile",
        "fonction nitrile"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Une triple liaison carbone-azote terminale du type R-C≡N définit un nitrile."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'un carbamate (uréthane), quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il comporte un carbonyle.",
        "correct": true,
        "explanation": "Le motif possède C=O."
      },
      {
        "content": "Il comporte à la fois un oxygène simple et un azote liés au carbone carbonylé.",
        "correct": true,
        "explanation": "Le motif est de type RO-C(=O)-NR'R''."
      },
      {
        "content": "Il est identique à un nitrile.",
        "correct": false,
        "explanation": "Un nitrile comporte C≡N."
      },
      {
        "content": "Il peut être distingué d'une amide simple par la présence du groupe oxygéné supplémentaire.",
        "correct": true,
        "explanation": "Le carbonyle porte aussi un substituant OR."
      }
    ],
    "explanation": "Le carbamate peut être vu comme un motif carbonylé associant simultanément une partie oxygénée et une partie azotée."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel nom de fonction correspond au motif $\\ce{R-SH}$ ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "thiol",
        "fonction thiol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Le groupe sulfhydryle R-SH définit une fonction thiol."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux associations correctes.",
    "choices": [
      {
        "content": "$\\ce{R-C#N}$ → nitrile.",
        "correct": true,
        "explanation": "C≡N définit le nitrile."
      },
      {
        "content": "$\\ce{R-SH}$ → thiol.",
        "correct": true,
        "explanation": "SH définit le thiol."
      },
      {
        "content": "$\\ce{R-CO-NH2}$ → amine primaire.",
        "correct": false,
        "explanation": "C'est une amide."
      },
      {
        "content": "$\\ce{R4N+}$ → amine tertiaire neutre.",
        "correct": false,
        "explanation": "C'est un ammonium quaternaire."
      }
    ],
    "explanation": "Les fonctions azotées et soufrées se reconnaissent par l'environnement immédiat de N ou S."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La choline est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède un groupe hydroxyle.",
        "correct": true,
        "explanation": "Un groupe OH terminal est présent."
      },
      {
        "content": "Son azote est un ammonium quaternaire.",
        "correct": true,
        "explanation": "Il est lié à quatre carbones et porte une charge positive."
      },
      {
        "content": "Son azote est une amine tertiaire neutre.",
        "correct": false,
        "explanation": "La charge positive et la quatrième liaison excluent cette classification."
      },
      {
        "content": "Elle possède un nitrile.",
        "correct": false,
        "explanation": "Aucune triple liaison C≡N n'est présente."
      }
    ],
    "explanation": "La choline permet de distinguer nettement ammonium quaternaire et amine tertiaire.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "choline-topological"
    }
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La cystéine est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles fonctions y reconnaît-on ?",
    "choices": [
      {
        "content": "Un thiol.",
        "correct": true,
        "explanation": "Le groupe SH est présent."
      },
      {
        "content": "Une amine.",
        "correct": true,
        "explanation": "Le groupe amino est présent."
      },
      {
        "content": "Un acide carboxylique.",
        "correct": true,
        "explanation": "Le groupe COOH est présent."
      },
      {
        "content": "Un nitrile.",
        "correct": false,
        "explanation": "Aucune liaison C≡N."
      }
    ],
    "explanation": "La cystéine est un exemple simple de molécule polyfonctionnelle associant thiol, amine et acide carboxylique.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "cysteine-topological"
    }
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'acétylcholine est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède une fonction ester.",
        "correct": true,
        "explanation": "Le motif C(=O)-O est présent."
      },
      {
        "content": "Elle possède un ammonium quaternaire.",
        "correct": true,
        "explanation": "L'azote est tétravalent et chargé positivement."
      },
      {
        "content": "Elle possède une amine primaire libre.",
        "correct": false,
        "explanation": "L'azote n'est pas une amine primaire."
      },
      {
        "content": "Elle possède un thiol.",
        "correct": false,
        "explanation": "Aucun groupe SH."
      }
    ],
    "explanation": "L'acétylcholine associe deux motifs importants du chapitre : ester et ammonium quaternaire.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "acetylcholine-topological"
    }
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le paracétamol est représenté ci-dessous : [[QUESTION_DIAGRAM]] Concernant son azote, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il appartient à une fonction amide.",
        "correct": true,
        "explanation": "N est directement lié au carbone carbonylé."
      },
      {
        "content": "Il ne constitue pas une amine libre.",
        "correct": true,
        "explanation": "Son environnement carbonylé le classe comme amide."
      },
      {
        "content": "Il appartient à un nitrile.",
        "correct": false,
        "explanation": "Aucune triple liaison C≡N."
      },
      {
        "content": "La présence d'un N suffit à classer la molécule comme amine.",
        "correct": false,
        "explanation": "Il faut examiner l'environnement de N."
      }
    ],
    "explanation": "Cette molécule illustre un piège fréquent : un azote directement lié à un carbonyle appartient à une amide.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "paracetamol-topological"
    }
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La N-acétylcystéine est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles fonctions sont présentes ?",
    "choices": [
      {
        "content": "Un thiol.",
        "correct": true,
        "explanation": "Le groupe SH est conservé."
      },
      {
        "content": "Une amide.",
        "correct": true,
        "explanation": "L'azote est acétylé et lié à un carbonyle."
      },
      {
        "content": "Un acide carboxylique.",
        "correct": true,
        "explanation": "Le groupe COOH est présent."
      },
      {
        "content": "Une amine primaire libre.",
        "correct": false,
        "explanation": "L'azote appartient à l'amide."
      }
    ],
    "explanation": "La N-acétylcystéine est un bon exercice de lecture polyfonctionnelle : thiol, amide et acide carboxylique.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "n-acetylcysteine-topological"
    }
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "On compare $\\ce{CH3NH2}$ et $\\ce{CH3CONH2}$. Sélectionnez exactement les deux propositions correctes.",
    "choices": [
      {
        "content": "La première molécule est une amine.",
        "correct": true,
        "explanation": "N n'est pas adjacent à un carbonyle."
      },
      {
        "content": "La seconde est une amide.",
        "correct": true,
        "explanation": "N est directement lié au carbone du carbonyle."
      },
      {
        "content": "Les deux sont des nitriles.",
        "correct": false,
        "explanation": "Aucune liaison C≡N."
      },
      {
        "content": "La présence du carbonyle ne change pas la famille de l'azote.",
        "correct": false,
        "explanation": "Elle transforme précisément l'environnement fonctionnel."
      }
    ],
    "explanation": "Amine et amide se distinguent par la présence ou non d'un carbonyle directement lié à l'azote."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{CH3NH2}$ → amine.",
        "correct": true,
        "explanation": "Méthylamine."
      },
      {
        "content": "$\\ce{CH3CONH2}$ → amide.",
        "correct": true,
        "explanation": "Carbonyle lié à N."
      },
      {
        "content": "$\\ce{CH3CN}$ → nitrile.",
        "correct": true,
        "explanation": "C≡N."
      },
      {
        "content": "$\\ce{CH3SH}$ → thiol.",
        "correct": true,
        "explanation": "SH."
      },
      {
        "content": "$\\ce{(CH3)4N+}$ → ammonium quaternaire.",
        "correct": true,
        "explanation": "N+ tétravalent."
      },
      {
        "content": "$\\ce{CH3CONH2}$ → amine primaire libre.",
        "correct": false,
        "explanation": "C'est une amide."
      },
      {
        "content": "$\\ce{CH3CN}$ → amide.",
        "correct": false,
        "explanation": "C'est un nitrile."
      },
      {
        "content": "$\\ce{CH3SH}$ → alcool.",
        "correct": false,
        "explanation": "Le soufre remplace O ; c'est un thiol."
      },
      {
        "content": "$\\ce{(CH3)3N}$ → ammonium quaternaire.",
        "correct": false,
        "explanation": "C'est une amine tertiaire neutre."
      },
      {
        "content": "$\\ce{CH3NH2}$ → nitrile.",
        "correct": false,
        "explanation": "Pas de triple liaison C≡N."
      }
    ],
    "explanation": "La reconnaissance fonctionnelle repose sur le motif local, pas seulement sur l'élément hétéroatomique présent."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la triméthylamine $\\ce{(CH3)3N}$ et du tétraméthylammonium $\\ce{(CH3)4N+}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La triméthylamine est une amine tertiaire.",
        "correct": true,
        "explanation": "Trois groupes carbonés sont liés à N."
      },
      {
        "content": "Le tétraméthylammonium est un ammonium quaternaire.",
        "correct": true,
        "explanation": "Quatre groupes sont liés à N+."
      },
      {
        "content": "Les deux azotes ont exactement la même valence et la même charge.",
        "correct": false,
        "explanation": "L'un est trivalent neutre, l'autre tétravalent positif."
      },
      {
        "content": "Ajouter un quatrième substituant carboné à l'azote change la famille fonctionnelle.",
        "correct": true,
        "explanation": "On passe de l'amine tertiaire à l'ammonium quaternaire."
      }
    ],
    "explanation": "Cette comparaison fixe la distinction structurale entre amine tertiaire et ammonium quaternaire."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le captopril est représenté ci-dessous : [[QUESTION_DIAGRAM]] Quelles fonctions y reconnaît-on ?",
    "choices": [
      {
        "content": "Un thiol.",
        "correct": true,
        "explanation": "Le groupe SH est présent."
      },
      {
        "content": "Un acide carboxylique.",
        "correct": true,
        "explanation": "Le motif COOH est présent."
      },
      {
        "content": "Une amide.",
        "correct": true,
        "explanation": "Le motif carbonyle-azote est présent."
      },
      {
        "content": "Un nitrile.",
        "correct": false,
        "explanation": "Aucune liaison C≡N."
      }
    ],
    "explanation": "Le captopril combine plusieurs fonctions, dont un thiol, un acide carboxylique et une amide.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "captopril-topological"
    }
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans la triméthylamine $\\ce{N(CH3)3}$, combien de groupes carbonés sont directement liés à l'azote ?",
    "answer": {
      "type": "number",
      "value": 3
    },
    "explanation": "Trois groupes méthyle sont directement liés à N ; l'amine est donc tertiaire."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d'un carbamate $\\ce{RO-C(=O)-NR'R''}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il contient un carbonyle.",
        "correct": true,
        "explanation": "C=O."
      },
      {
        "content": "L'azote est directement lié au carbone carbonylé.",
        "correct": true,
        "explanation": "Comme dans une amide."
      },
      {
        "content": "Un oxygène simple est également lié au carbone carbonylé.",
        "correct": true,
        "explanation": "Le groupe RO est présent."
      },
      {
        "content": "Il est identique à une amine simple.",
        "correct": false,
        "explanation": "L'environnement carbonylé est différent."
      }
    ],
    "explanation": "Le carbamate associe des caractéristiques d'ester et d'amide dans un motif fonctionnel propre."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Deux cystéines peuvent former un pont disulfure $\\ce{-S-S-}$ après oxydation. Dans ce contexte, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux groupes thiol initiaux sont impliqués dans la formation du pont.",
        "correct": true,
        "explanation": "Les soufres des deux thiols sont reliés."
      },
      {
        "content": "Le motif final $\\ce{-S-S-}$ n'est plus constitué de deux groupes $\\ce{-SH}$ libres.",
        "correct": true,
        "explanation": "Les hydrogènes des thiols ne sont plus présents sur ces soufres."
      },
      {
        "content": "Un pont disulfure est un nitrile.",
        "correct": false,
        "explanation": "Il ne contient pas de C≡N."
      },
      {
        "content": "Cette transformation illustre la réactivité possible d'une fonction thiol.",
        "correct": true,
        "explanation": "Le thiol peut être oxydé en disulfure."
      }
    ],
    "explanation": "La fonction thiol est le motif de départ ; son oxydation peut conduire à un pont disulfure, notamment dans certaines protéines."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "La formule $\\ce{HS-CH2-CH(NH2)-COOH}$ est celle de la cystéine. Sélectionnez exactement les deux propositions incorrectes.",
    "choices": [
      {
        "content": "Elle contient un nitrile.",
        "correct": true,
        "explanation": "Incorrect : aucune liaison C≡N n'est présente."
      },
      {
        "content": "Elle contient un ammonium quaternaire.",
        "correct": true,
        "explanation": "Incorrect : l'azote est une amine primaire neutre dans cette écriture."
      },
      {
        "content": "Elle contient un thiol.",
        "correct": false,
        "explanation": "Correct : HS- est un thiol."
      },
      {
        "content": "Elle contient un acide carboxylique.",
        "correct": false,
        "explanation": "Correct : COOH est présent."
      }
    ],
    "explanation": "Les deux propositions à sélectionner sont celles qui attribuent à tort un nitrile et un ammonium quaternaire à la cystéine."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles affirmations de synthèse sur les fonctions azotées et soufrées sont exactes ?",
    "choices": [
      {
        "content": "L'environnement immédiat de l'azote est indispensable pour distinguer amine, amide et ammonium.",
        "correct": true,
        "explanation": "Le même élément N appartient à plusieurs fonctions."
      },
      {
        "content": "Une triple liaison $\\ce{C#N}$ signale un nitrile.",
        "correct": true,
        "explanation": "C'est son motif caractéristique."
      },
      {
        "content": "Un groupe $\\ce{-SH}$ signale un thiol.",
        "correct": true,
        "explanation": "C'est le groupe sulfhydryle."
      },
      {
        "content": "Un azote tétravalent chargé positivement est classé ici comme ammonium quaternaire.",
        "correct": true,
        "explanation": "C'est la distinction soulignée par la fiche."
      }
    ],
    "explanation": "La reconnaissance des fonctions azotées et soufrées repose sur des motifs structuraux simples mais qu'il faut lire dans leur contexte."
  }
];
