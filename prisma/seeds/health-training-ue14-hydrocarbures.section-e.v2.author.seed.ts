import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.3 – Section E – Alcynes : structure, nomenclature et réactivité
 */

export const UE14_CH7_SECTION_E_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des alcynes acycliques comportant une seule triple liaison, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ce sont des hydrocarbures insaturés.",
        "correct": true,
        "explanation": "La triple liaison constitue une forte insaturation."
      },
      {
        "content": "Leur formule générale est $\\ce{C_nH_{2n-2}}$.",
        "correct": true,
        "explanation": "Formule donnée dans la fiche."
      },
      {
        "content": "Ils comportent une liaison $\\ce{C#C}$.",
        "correct": true,
        "explanation": "Motif caractéristique."
      },
      {
        "content": "Ils possèdent davantage d'hydrogènes que l'alcane correspondant.",
        "correct": false,
        "explanation": "Ils en possèdent quatre de moins."
      }
    ],
    "explanation": "Une triple liaison correspond à deux degrés d'insaturation par rapport à l'alcane acyclique."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle est la formule brute d'un pentyne acyclique comportant une seule triple liaison ?",
    "choices": [
      {
        "content": "$\\ce{C5H8}$",
        "correct": true,
        "explanation": "Pour n=5, 2n−2=8."
      },
      {
        "content": "$\\ce{C5H10}$",
        "correct": false,
        "explanation": "Alcène ou cyclane."
      },
      {
        "content": "$\\ce{C5H12}$",
        "correct": false,
        "explanation": "Alcane."
      },
      {
        "content": "$\\ce{C4H6}$",
        "correct": false,
        "explanation": "Butyne."
      }
    ],
    "explanation": "Le pentyne suit la formule $\\ce{C_nH_{2n-2}}$."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les premiers alcynes :",
    "choices": [
      {
        "content": "Éthyne, ou acétylène, possède deux carbones.",
        "correct": true,
        "explanation": "C2H2."
      },
      {
        "content": "Propyne possède trois carbones.",
        "correct": true,
        "explanation": "C3H4."
      },
      {
        "content": "Butyne possède quatre carbones.",
        "correct": true,
        "explanation": "C4H6."
      },
      {
        "content": "Le suffixe -yne signale une triple liaison.",
        "correct": true,
        "explanation": "C'est le suffixe de la famille."
      }
    ],
    "explanation": "La racine donne le nombre de carbones et -yne indique la triple liaison."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans la terminologie de la fiche, un « alcyne vrai » :",
    "choices": [
      {
        "content": "Possède une triple liaison en extrémité de chaîne.",
        "correct": true,
        "explanation": "Motif R-C≡C-H."
      },
      {
        "content": "Porte un hydrogène directement sur un carbone de la triple liaison.",
        "correct": true,
        "explanation": "C'est le caractère terminal."
      },
      {
        "content": "Peut être représenté par $\\ce{R-C#C-H}$.",
        "correct": true,
        "explanation": "Formule générique donnée."
      },
      {
        "content": "Possède nécessairement la triple liaison entre deux groupes carbonés.",
        "correct": false,
        "explanation": "Cela décrit un alcyne interne."
      }
    ],
    "explanation": "La fiche appelle « alcyne vrai » un alcyne terminal."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un alcyne interne est représenté par $\\ce{R-C#C-R'}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La triple liaison est située entre deux parties carbonées.",
        "correct": true,
        "explanation": "R et R' sont de part et d'autre."
      },
      {
        "content": "Aucun des deux carbones sp de la triple liaison ne porte nécessairement H dans ce motif générique.",
        "correct": true,
        "explanation": "Ils sont substitués par R et R'."
      },
      {
        "content": "Il s'agit d'un hydrocarbure insaturé.",
        "correct": true,
        "explanation": "Présence de C≡C."
      },
      {
        "content": "C'est obligatoirement un alcane.",
        "correct": false,
        "explanation": "La triple liaison exclut la saturation."
      }
    ],
    "explanation": "La position terminale ou interne de la triple liaison influence certaines réactions, notamment l'hydratation."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'hydrogénation catalytique d'un alcyne :",
    "choices": [
      {
        "content": "Une hydrogénation partielle peut conduire à un alcène.",
        "correct": true,
        "explanation": "Premier stade."
      },
      {
        "content": "Une hydrogénation poursuivie peut conduire à un alcane.",
        "correct": true,
        "explanation": "Second stade."
      },
      {
        "content": "Le choix du catalyseur est important si l'on veut s'arrêter à l'alcène.",
        "correct": true,
        "explanation": "La fiche le souligne."
      },
      {
        "content": "Le nombre de carbones du squelette change nécessairement.",
        "correct": false,
        "explanation": "Le squelette reste conservé."
      }
    ],
    "explanation": "L'alcyne peut être réduit séquentiellement en alcène puis en alcane."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de moles de $\\ce{H2}$ faut-il ajouter au total à une mole d'alcyne comportant une seule triple liaison pour obtenir l'alcane correspondant ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Une triple liaison est réduite en deux étapes : une mole de H2 vers l'alcène, puis une seconde vers l'alcane."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'addition de $\\ce{X2}$ sur un alcyne peut se dérouler en deux étapes. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une première addition peut conduire à un dihalogénoalcène.",
        "correct": true,
        "explanation": "La triple liaison devient double."
      },
      {
        "content": "Une seconde addition peut conduire à un produit tétrahalogéné saturé.",
        "correct": true,
        "explanation": "La double liaison résiduelle est consommée."
      },
      {
        "content": "Une seule mole de X2 suffit pour saturer complètement une triple liaison par halogénation.",
        "correct": false,
        "explanation": "Deux additions sont nécessaires."
      },
      {
        "content": "Le squelette carboné est conservé.",
        "correct": true,
        "explanation": "Il n'y a pas de coupure."
      }
    ],
    "explanation": "Une triple liaison peut fixer successivement deux équivalents de dihalogène."
  },
  {
    "order": 89,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'hydratation d'un alcyne dans la fiche :",
    "choices": [
      {
        "content": "Une forme énol apparaît avant la forme carbonylée.",
        "correct": true,
        "explanation": "L'énol est une forme tautomère."
      },
      {
        "content": "L'énol se tautomérise en cétone dans les cas étudiés.",
        "correct": true,
        "explanation": "C'est le produit stable présenté."
      },
      {
        "content": "La tautomérie intervient dans cette transformation.",
        "correct": true,
        "explanation": "Lien direct avec le chapitre précédent."
      },
      {
        "content": "Le produit final étudié est toujours un alcane.",
        "correct": false,
        "explanation": "Il s'agit d'une cétone."
      }
    ],
    "explanation": "L'hydratation d'un alcyne conduit d'abord à un énol, qui évolue vers une cétone par tautomérie."
  },
  {
    "order": 90,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "L'addition d'eau sur un alcyne vrai $\\ce{R-C#C-H}$ conduit, selon Markovnikov dans la fiche, à :",
    "choices": [
      {
        "content": "Une méthylcétone $\\ce{R-CO-CH3}$.",
        "correct": true,
        "explanation": "C'est le bilan indiqué."
      },
      {
        "content": "Un alcool primaire stable sans tautomérie.",
        "correct": false,
        "explanation": "L'énol intermédiaire se tautomérise."
      },
      {
        "content": "Un alcane.",
        "correct": false,
        "explanation": "Ce serait une hydrogénation complète."
      },
      {
        "content": "Un éther.",
        "correct": false,
        "explanation": "Aucun éther n'est formé."
      }
    ],
    "explanation": "L'auto-évaluation du Tutorat reprend explicitement ce résultat : alcyne vrai + eau → méthylcétone."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On hydrogène progressivement l'éthyne $\\ce{HC#CH}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Après un équivalent de H2, on peut atteindre l'éthène dans des conditions adaptées.",
        "correct": true,
        "explanation": "Réduction partielle."
      },
      {
        "content": "Après deux équivalents de H2 au total, on obtient l'éthane.",
        "correct": true,
        "explanation": "Réduction complète."
      },
      {
        "content": "Le nombre de carbones reste égal à 2.",
        "correct": true,
        "explanation": "Le squelette est conservé."
      },
      {
        "content": "L'hydrogénation introduit un atome d'oxygène.",
        "correct": false,
        "explanation": "Seul H2 est ajouté."
      }
    ],
    "explanation": "L'éthyne illustre simplement la séquence alcyne → alcène → alcane."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une mole de propyne est hydrogénée complètement jusqu'au propane. Combien de moles de $\\ce{H2}$ sont consommées ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Deux équivalents de H2 sont nécessaires pour passer d'une triple liaison à une liaison simple."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On ajoute une mole de $\\ce{Br2}$ à une mole de but-2-yne, puis on arrête la réaction après cette première addition. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La triple liaison est réduite au stade double liaison dans le produit halogéné.",
        "correct": true,
        "explanation": "Une liaison π est consommée."
      },
      {
        "content": "Deux atomes de Br sont incorporés.",
        "correct": true,
        "explanation": "Une mole de Br2."
      },
      {
        "content": "Une seconde addition de Br2 pourrait encore avoir lieu.",
        "correct": true,
        "explanation": "Une double liaison subsiste."
      },
      {
        "content": "Le produit est déjà un alcane sans halogène.",
        "correct": false,
        "explanation": "Il porte deux Br et une double liaison."
      }
    ],
    "explanation": "Une triple liaison peut subir deux additions successives de X2."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de moles de $\\ce{Br2}$ faut-il pour saturer complètement par halogénation une mole d'alcyne comportant une seule triple liaison ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Deux liaisons π doivent être consommées : deux équivalents de Br2."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'hydratation d'un alcyne interne dissymétrique est décrite dans la fiche comme pouvant conduire à deux énols puis à deux cétones. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Deux orientations d'addition peuvent être envisagées.",
        "correct": true,
        "explanation": "La dissymétrie permet deux énols constitutionnels."
      },
      {
        "content": "Les énols sont des tautomères des cétones correspondantes.",
        "correct": true,
        "explanation": "Ils évoluent vers les formes carbonylées."
      },
      {
        "content": "Deux cétones différentes peuvent donc être obtenues.",
        "correct": true,
        "explanation": "Cas dissymétrique."
      },
      {
        "content": "La triple liaison reste intacte dans les produits finaux.",
        "correct": false,
        "explanation": "Elle est consommée."
      }
    ],
    "explanation": "Pour un alcyne interne dissymétrique, la fiche retient la possibilité de deux produits cétoniques après tautomérie."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare un alcyne vrai et un alcyne interne. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'alcyne vrai possède un H terminal sur la triple liaison.",
        "correct": true,
        "explanation": "R-C≡C-H."
      },
      {
        "content": "L'alcyne interne est de type R-C≡C-R'.",
        "correct": true,
        "explanation": "Deux substituants carbonés."
      },
      {
        "content": "L'hydratation de l'alcyne vrai conduit à une méthylcétone dans la fiche.",
        "correct": true,
        "explanation": "Produit Markovnikov."
      },
      {
        "content": "Les deux sont des hydrocarbures saturés.",
        "correct": false,
        "explanation": "Ils sont insaturés."
      }
    ],
    "explanation": "La position de la triple liaison détermine la nomenclature et certaines conséquences de réactivité."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "L'hydratation du propyne $\\ce{CH3-C#CH}$ conduit, après tautomérie, principalement à :",
    "choices": [
      {
        "content": "Propanone.",
        "correct": true,
        "explanation": "C'est la méthylcétone $\\ce{CH3-CO-CH3}$."
      },
      {
        "content": "Propan-1-ol.",
        "correct": false,
        "explanation": "Pas de produit alcool stable retenu."
      },
      {
        "content": "Propane.",
        "correct": false,
        "explanation": "Hydrogénation complète."
      },
      {
        "content": "Propène.",
        "correct": false,
        "explanation": "Hydrogénation partielle."
      }
    ],
    "explanation": "Le propyne est un alcyne vrai ; son hydratation Markovnikov donne la propanone après tautomérie."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une triple liaison $\\ce{C#C}$ par rapport à une double liaison $\\ce{C=C}$ :",
    "choices": [
      {
        "content": "Comporte une insaturation supplémentaire.",
        "correct": true,
        "explanation": "Deux liaisons π contre une."
      },
      {
        "content": "Nécessite un équivalent de H2 supplémentaire pour atteindre l'alcane.",
        "correct": true,
        "explanation": "2 H2 contre 1."
      },
      {
        "content": "Peut fixer deux équivalents de X2 au total.",
        "correct": true,
        "explanation": "Deux additions successives."
      },
      {
        "content": "Contient davantage d'hydrogènes à nombre de carbones égal.",
        "correct": false,
        "explanation": "L'alcyne en a deux de moins que l'alcène."
      }
    ],
    "explanation": "La triple liaison explique les additions successives caractéristiques des alcynes."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare $\\ce{C5H12}$, $\\ce{C5H10}$ et $\\ce{C5H8}$ dans les séries acycliques simples. Quelles associations sont correctes ?",
    "choices": [
      {
        "content": "$\\ce{C5H12}$ peut être un pentane.",
        "correct": true,
        "explanation": "Alcane."
      },
      {
        "content": "$\\ce{C5H10}$ peut être un pentène.",
        "correct": true,
        "explanation": "Alcène."
      },
      {
        "content": "$\\ce{C5H8}$ peut être un pentyne.",
        "correct": true,
        "explanation": "Alcyne."
      },
      {
        "content": "Plus la molécule est insaturée dans cette série, plus elle porte d'hydrogènes.",
        "correct": false,
        "explanation": "C'est l'inverse."
      }
    ],
    "explanation": "À squelette C5 constant, chaque degré supplémentaire d'insaturation retire deux hydrogènes."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une synthèse organique, le choix du catalyseur lors de l'hydrogénation d'un alcyne est déterminant lorsque l'objectif est :",
    "choices": [
      {
        "content": "De s'arrêter au stade alcène.",
        "correct": true,
        "explanation": "La fiche insiste sur ce contrôle."
      },
      {
        "content": "D'éviter une réduction complète jusqu'à l'alcane.",
        "correct": true,
        "explanation": "Sinon le second équivalent de H2 est consommé."
      },
      {
        "content": "De contrôler le degré de saturation final.",
        "correct": true,
        "explanation": "Alcène ou alcane."
      },
      {
        "content": "De créer une fonction acide carboxylique.",
        "correct": false,
        "explanation": "Ce n'est pas une hydrogénation."
      }
    ],
    "explanation": "Le catalyseur et les conditions contrôlent jusqu'où la réduction de la triple liaison est conduite."
  },
  {
    "order": 129,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un alcyne acyclique à une seule triple liaison suit $\\ce{C_nH_{2n-2}}$.",
        "correct": true,
        "explanation": "Formule générale."
      },
      {
        "content": "Éthyne est aussi appelé acétylène.",
        "correct": true,
        "explanation": "Nom usuel."
      },
      {
        "content": "Un alcyne vrai est terminal.",
        "correct": true,
        "explanation": "R-C≡C-H."
      },
      {
        "content": "Une hydrogénation complète d'un alcyne consomme deux équivalents de H2.",
        "correct": true,
        "explanation": "Alcyne → alcène → alcane."
      },
      {
        "content": "L'hydratation d'un alcyne vrai conduit à une méthylcétone dans la fiche.",
        "correct": true,
        "explanation": "Après tautomérie."
      },
      {
        "content": "Un alcyne possède moins d'insaturation qu'un alcène de même squelette.",
        "correct": false,
        "explanation": "Il en possède davantage."
      },
      {
        "content": "Une seule mole de Br2 sature complètement une triple liaison.",
        "correct": false,
        "explanation": "Il en faut deux."
      },
      {
        "content": "Un alcyne interne s'écrit toujours R-C≡C-H.",
        "correct": false,
        "explanation": "C'est un alcyne vrai."
      },
      {
        "content": "L'hydratation d'un alcyne donne directement un alcane.",
        "correct": false,
        "explanation": "Produit carbonylé après énol."
      },
      {
        "content": "La triple liaison possède plus d'hydrogènes que l'alcane correspondant.",
        "correct": false,
        "explanation": "Quatre hydrogènes de moins."
      }
    ],
    "explanation": "Cette sélection rassemble structure, nomenclature et réactivité des alcynes."
  },
  {
    "order": 130,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À nombre de carbones identique, combien d'atomes d'hydrogène un alcyne acyclique à une triple liaison possède-t-il en moins qu'un alcane acyclique saturé ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Alcane : $2n+2$ H ; alcyne : $2n-2$ H ; différence = 4."
  }
];
