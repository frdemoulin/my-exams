import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Structure des peptides et protéines — Section B — Structure primaire et modifications post-traductionnelles */
export const UE14_BIOCH_CH10_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la structure primaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle correspond à l’ordre linéaire des résidus.",
        "correct": true,
        "explanation": "Exact. La structure primaire est la séquence covalente des résidus d’une chaîne."
      },
      {
        "content": "Elle disparaît automatiquement lors d’une dénaturation sans protéolyse.",
        "correct": false,
        "explanation": "Incorrect. La structure primaire est la séquence covalente des résidus d’une chaîne."
      },
      {
        "content": "Elle est indépendante de la séquence.",
        "correct": false,
        "explanation": "Incorrect. La structure primaire est la séquence covalente des résidus d’une chaîne."
      },
      {
        "content": "Elle désigne uniquement les hélices alpha.",
        "correct": false,
        "explanation": "Incorrect. La structure primaire est la séquence covalente des résidus d’une chaîne."
      },
      {
        "content": "Une substitution d’un seul résidu modifie la structure primaire.",
        "correct": true,
        "explanation": "Exact. La structure primaire est la séquence covalente des résidus d’une chaîne."
      }
    ],
    "explanation": "La structure primaire est la séquence covalente des résidus d’une chaîne."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la structure primaire, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle désigne uniquement les hélices alpha.",
        "correct": false,
        "explanation": "Incorrect. La structure primaire est la séquence covalente des résidus d’une chaîne."
      },
      {
        "content": "Elle disparaît automatiquement lors d’une dénaturation sans protéolyse.",
        "correct": false,
        "explanation": "Incorrect. La structure primaire est la séquence covalente des résidus d’une chaîne."
      },
      {
        "content": "Elle est indépendante de la séquence.",
        "correct": false,
        "explanation": "Incorrect. La structure primaire est la séquence covalente des résidus d’une chaîne."
      },
      {
        "content": "Elle correspond uniquement à l’association de plusieurs sous-unités.",
        "correct": false,
        "explanation": "Incorrect. La structure primaire est la séquence covalente des résidus d’une chaîne."
      },
      {
        "content": "Une substitution d’un seul résidu modifie la structure primaire.",
        "correct": true,
        "explanation": "Exact. La structure primaire est la séquence covalente des résidus d’une chaîne."
      }
    ],
    "explanation": "La structure primaire est la séquence covalente des résidus d’une chaîne."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Autour de quelle liaison du groupe peptidique la rotation est-elle fortement limitée ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "liaison C-N peptidique",
        "C-N",
        "liaison peptidique C-N",
        "C–N"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la rigidité de la liaison peptidique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le groupe peptidique est toujours fortement non plan.",
        "correct": false,
        "explanation": "Incorrect. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      },
      {
        "content": "Les rotations autour de N–Cα et Cα–C’ restent possibles.",
        "correct": true,
        "explanation": "Exact. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      },
      {
        "content": "La liaison C–N peptidique possède un caractère partiellement double.",
        "correct": true,
        "explanation": "Exact. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      },
      {
        "content": "Le groupe peptidique est approximativement plan.",
        "correct": true,
        "explanation": "Exact. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      },
      {
        "content": "La liaison peptidique est ionique.",
        "correct": false,
        "explanation": "Incorrect. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      }
    ],
    "explanation": "La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les angles phi et psi, laquelle est correcte ?",
    "choices": [
      {
        "content": "Psi est le point isoélectrique.",
        "correct": false,
        "explanation": "Incorrect. Phi décrit N–Cα et psi décrit Cα–C’; les contraintes stériques limitent leurs valeurs."
      },
      {
        "content": "Toutes les valeurs de phi et psi sont également favorables.",
        "correct": false,
        "explanation": "Incorrect. Phi décrit N–Cα et psi décrit Cα–C’; les contraintes stériques limitent leurs valeurs."
      },
      {
        "content": "Le diagramme de Ramachandran représente les régions conformationnelles permises.",
        "correct": true,
        "explanation": "Exact. Phi décrit N–Cα et psi décrit Cα–C’; les contraintes stériques limitent leurs valeurs."
      },
      {
        "content": "Phi et psi n’ont aucun lien avec la conformation.",
        "correct": false,
        "explanation": "Incorrect. Phi décrit N–Cα et psi décrit Cα–C’; les contraintes stériques limitent leurs valeurs."
      },
      {
        "content": "Phi correspond à la rotation libre autour du C–N peptidique.",
        "correct": false,
        "explanation": "Incorrect. Phi décrit N–Cα et psi décrit Cα–C’; les contraintes stériques limitent leurs valeurs."
      }
    ],
    "explanation": "Phi décrit N–Cα et psi décrit Cα–C’; les contraintes stériques limitent leurs valeurs."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant les angles phi et psi, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Phi correspond à la rotation libre autour du C–N peptidique.",
        "correct": false,
        "explanation": "Incorrect. Phi décrit N–Cα et psi décrit Cα–C’; les contraintes stériques limitent leurs valeurs."
      },
      {
        "content": "Psi est le point isoélectrique.",
        "correct": false,
        "explanation": "Incorrect. Phi décrit N–Cα et psi décrit Cα–C’; les contraintes stériques limitent leurs valeurs."
      },
      {
        "content": "Toutes les valeurs de phi et psi sont également favorables.",
        "correct": false,
        "explanation": "Incorrect. Phi décrit N–Cα et psi décrit Cα–C’; les contraintes stériques limitent leurs valeurs."
      },
      {
        "content": "Le diagramme de Ramachandran représente les régions conformationnelles permises.",
        "correct": true,
        "explanation": "Exact. Phi décrit N–Cα et psi décrit Cα–C’; les contraintes stériques limitent leurs valeurs."
      },
      {
        "content": "Phi correspond à la rotation autour de N–Cα.",
        "correct": true,
        "explanation": "Exact. Phi décrit N–Cα et psi décrit Cα–C’; les contraintes stériques limitent leurs valeurs."
      }
    ],
    "explanation": "Phi décrit N–Cα et psi décrit Cα–C’; les contraintes stériques limitent leurs valeurs.",
    "requiredSelectionCount": 2
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l’hydroxylation post-traductionnelle, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La proline peut être hydroxylée en hydroxyproline.",
        "correct": true,
        "explanation": "Exact. Proline et lysine peuvent être hydroxylées après traduction; la vitamine C est indispensable à cette maturation du collagène."
      },
      {
        "content": "L’hydroxyproline est directement codée par un codon standard spécifique.",
        "correct": false,
        "explanation": "Incorrect. Proline et lysine peuvent être hydroxylées après traduction; la vitamine C est indispensable à cette maturation du collagène."
      },
      {
        "content": "La lysine peut être hydroxylée en hydroxylysine.",
        "correct": true,
        "explanation": "Exact. Proline et lysine peuvent être hydroxylées après traduction; la vitamine C est indispensable à cette maturation du collagène."
      },
      {
        "content": "La vitamine C est nécessaire au fonctionnement des hydroxylases du collagène.",
        "correct": true,
        "explanation": "Exact. Proline et lysine peuvent être hydroxylées après traduction; la vitamine C est indispensable à cette maturation du collagène."
      },
      {
        "content": "Ces hydroxylations sont importantes dans le collagène.",
        "correct": true,
        "explanation": "Exact. Proline et lysine peuvent être hydroxylées après traduction; la vitamine C est indispensable à cette maturation du collagène."
      }
    ],
    "explanation": "Proline et lysine peuvent être hydroxylées après traduction; la vitamine C est indispensable à cette maturation du collagène."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel acide aminé du collagène est transformé en hydroxyproline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "proline",
        "la proline",
        "Pro"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Proline et lysine peuvent être hydroxylées après traduction; la vitamine C est indispensable à cette maturation du collagène."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la gamma-carboxylation du glutamate ?",
    "choices": [
      {
        "content": "Elle empêche toute fixation du calcium.",
        "correct": false,
        "explanation": "Incorrect. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      },
      {
        "content": "Elle dépend exclusivement de la vitamine C.",
        "correct": false,
        "explanation": "Incorrect. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      },
      {
        "content": "Elle enlève le carboxyle alpha du glutamate.",
        "correct": false,
        "explanation": "Incorrect. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      },
      {
        "content": "Elle transforme le glutamate en glucose.",
        "correct": false,
        "explanation": "Incorrect. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      },
      {
        "content": "Elle forme des résidus gamma-carboxyglutamate.",
        "correct": true,
        "explanation": "Exact. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      }
    ],
    "explanation": "La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la gamma-carboxylation du glutamate, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle enlève le carboxyle alpha du glutamate.",
        "correct": false,
        "explanation": "Incorrect. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      },
      {
        "content": "Elle favorise la liaison de Ca2+ dans plusieurs protéines de coagulation.",
        "correct": true,
        "explanation": "Exact. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      },
      {
        "content": "Il s’agit d’une modification post-traductionnelle.",
        "correct": true,
        "explanation": "Exact. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      },
      {
        "content": "Elle empêche toute fixation du calcium.",
        "correct": false,
        "explanation": "Incorrect. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      },
      {
        "content": "Elle dépend exclusivement de la vitamine C.",
        "correct": false,
        "explanation": "Incorrect. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      }
    ],
    "explanation": "La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on une hydrolyse ciblée de liaison(s) peptidique(s) utilisée pour maturer ou activer un précurseur ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "clivage protéolytique",
        "protéolyse limitée",
        "proteolyse limitee"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le clivage protéolytique est une maturation covalente pouvant activer un précurseur."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nom porte le précurseur inactif de la trypsine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "trypsinogène",
        "trypsinogene"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le clivage protéolytique est une maturation covalente pouvant activer un précurseur."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les ponts disulfure ?",
    "choices": [
      {
        "content": "Ils sont obligatoires dans toutes les protéines.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Ils peuvent être intra-chaîne ou inter-chaînes.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Ils se forment entre deux méthionines.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Ils ne peuvent jamais relier deux chaînes.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Ce sont des liaisons hydrogène.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      }
    ],
    "explanation": "Un pont disulfure est une liaison covalente S–S entre deux cystéines."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les ponts disulfure, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils se forment entre deux méthionines.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Ce sont des liaisons covalentes S–S.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Ils résultent de l’oxydation de deux thiols de cystéine.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Ils sont fréquents dans de nombreuses protéines sécrétées ou extracellulaires.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Ils peuvent être intra-chaîne ou inter-chaînes.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      }
    ],
    "explanation": "Un pont disulfure est une liaison covalente S–S entre deux cystéines."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les ponts disulfure intra-chaîne, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Ils résultent de deux lysines.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure intra-chaîne stabilise des régions éloignées d’une même chaîne."
      },
      {
        "content": "Ils ne modifient jamais la stabilité.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure intra-chaîne stabilise des régions éloignées d’une même chaîne."
      },
      {
        "content": "Ils rapprochent covalemment des segments éloignés dans la séquence.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure intra-chaîne stabilise des régions éloignées d’une même chaîne."
      },
      {
        "content": "Ils sont des liaisons peptidiques supplémentaires.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure intra-chaîne stabilise des régions éloignées d’une même chaîne."
      },
      {
        "content": "Leur réduction peut déstabiliser la structure tertiaire.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure intra-chaîne stabilise des régions éloignées d’une même chaîne."
      }
    ],
    "explanation": "Un pont disulfure intra-chaîne stabilise des régions éloignées d’une même chaîne.",
    "requiredSelectionCount": 2
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les ponts disulfure intra-chaîne ?",
    "choices": [
      {
        "content": "Ils ne modifient jamais la stabilité.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure intra-chaîne stabilise des régions éloignées d’une même chaîne."
      },
      {
        "content": "Ils sont des liaisons peptidiques supplémentaires.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure intra-chaîne stabilise des régions éloignées d’une même chaîne."
      },
      {
        "content": "Leur réduction peut déstabiliser la structure tertiaire.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure intra-chaîne stabilise des régions éloignées d’une même chaîne."
      },
      {
        "content": "Ils relient obligatoirement deux sous-unités différentes.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure intra-chaîne stabilise des régions éloignées d’une même chaîne."
      },
      {
        "content": "Ils peuvent stabiliser une boucle ou un domaine.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure intra-chaîne stabilise des régions éloignées d’une même chaîne."
      }
    ],
    "explanation": "Un pont disulfure intra-chaîne stabilise des régions éloignées d’une même chaîne."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle protéine de la fibrinolyse contient plusieurs domaines Kringle ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "plasminogène",
        "plasminogene",
        "le plasminogène"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les domaines Kringle sont des modules riches en disulfures présents notamment dans le plasminogène."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les domaines Kringle, laquelle est correcte ?",
    "choices": [
      {
        "content": "Un domaine est un module d’une protéine plus grande.",
        "correct": true,
        "explanation": "Exact. Les domaines Kringle sont des modules riches en disulfures présents notamment dans le plasminogène."
      },
      {
        "content": "Il correspond nécessairement à une hélice alpha unique.",
        "correct": false,
        "explanation": "Incorrect. Les domaines Kringle sont des modules riches en disulfures présents notamment dans le plasminogène."
      },
      {
        "content": "Le plasminogène ne contient aucun Kringle.",
        "correct": false,
        "explanation": "Incorrect. Les domaines Kringle sont des modules riches en disulfures présents notamment dans le plasminogène."
      },
      {
        "content": "Un Kringle est un polysaccharide.",
        "correct": false,
        "explanation": "Incorrect. Les domaines Kringle sont des modules riches en disulfures présents notamment dans le plasminogène."
      },
      {
        "content": "Il est dépourvu de cystéines.",
        "correct": false,
        "explanation": "Incorrect. Les domaines Kringle sont des modules riches en disulfures présents notamment dans le plasminogène."
      }
    ],
    "explanation": "Les domaines Kringle sont des modules riches en disulfures présents notamment dans le plasminogène."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant l’insuline et les ponts disulfure ?",
    "choices": [
      {
        "content": "Le peptide C est clivé lors de la maturation de la proinsuline.",
        "correct": true,
        "explanation": "Exact. L’insuline mature possède deux ponts inter-chaînes et un pont intra-chaîne, soit trois au total."
      },
      {
        "content": "L’insuline mature ne possède aucun pont disulfure.",
        "correct": false,
        "explanation": "Incorrect. L’insuline mature possède deux ponts inter-chaînes et un pont intra-chaîne, soit trois au total."
      },
      {
        "content": "L’insuline mature comporte deux chaînes A et B.",
        "correct": true,
        "explanation": "Exact. L’insuline mature possède deux ponts inter-chaînes et un pont intra-chaîne, soit trois au total."
      },
      {
        "content": "L’insuline mature comporte trois chaînes A, B et C permanentes.",
        "correct": false,
        "explanation": "Incorrect. L’insuline mature possède deux ponts inter-chaînes et un pont intra-chaîne, soit trois au total."
      },
      {
        "content": "Les chaînes A et B sont reliées par deux ponts disulfure.",
        "correct": true,
        "explanation": "Exact. L’insuline mature possède deux ponts inter-chaînes et un pont intra-chaîne, soit trois au total."
      }
    ],
    "explanation": "L’insuline mature possède deux ponts inter-chaînes et un pont intra-chaîne, soit trois au total."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sur ce schéma simplifié d’une liaison peptidique, cliquez sur la liaison C–N dont la rotation est fortement limitée par la résonance.",
    "image": {
      "src": "/images/training/ue14/biochimie/structure-peptides-proteines/liaison-peptidique-cn-qzone.svg",
      "alt": "Schéma simplifié d’une liaison peptidique avec la liaison carbone carbonylé–azote",
      "width": 900,
      "height": 420
    },
    "expectedZones": [
      {
        "id": "peptide-cn",
        "label": "Liaison C–N peptidique",
        "x": 0.455,
        "y": 0.5,
        "tolerance": 0.075
      }
    ],
    "explanation": "Le caractère partiellement double de la liaison entre le carbone carbonylé et l’azote limite fortement sa rotation."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant les modifications post-traductionnelles, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Elles surviennent après la synthèse initiale de la chaîne.",
        "correct": true,
        "explanation": "Exact. Les modifications post-traductionnelles diversifient les propriétés d’une même séquence protéique."
      },
      {
        "content": "Elles peuvent modifier activité, localisation ou stabilité.",
        "correct": true,
        "explanation": "Exact. Les modifications post-traductionnelles diversifient les propriétés d’une même séquence protéique."
      },
      {
        "content": "Elles sont toutes réversibles.",
        "correct": false,
        "explanation": "Incorrect. Les modifications post-traductionnelles diversifient les propriétés d’une même séquence protéique."
      },
      {
        "content": "Elles incluent notamment phosphorylation, hydroxylation et glycosylation.",
        "correct": true,
        "explanation": "Exact. Les modifications post-traductionnelles diversifient les propriétés d’une même séquence protéique."
      },
      {
        "content": "Un clivage protéolytique peut constituer une maturation post-traductionnelle.",
        "correct": true,
        "explanation": "Exact. Les modifications post-traductionnelles diversifient les propriétés d’une même séquence protéique."
      }
    ],
    "explanation": "Les modifications post-traductionnelles diversifient les propriétés d’une même séquence protéique."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on les transformations d’une protéine après sa synthèse ribosomale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "modifications post-traductionnelles",
        "modifications post traductionnelles",
        "PTM"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les modifications post-traductionnelles diversifient les propriétés d’une même séquence protéique."
  }
];
