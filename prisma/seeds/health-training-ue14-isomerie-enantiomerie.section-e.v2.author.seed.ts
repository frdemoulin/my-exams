import { TEX_UNITS } from './tex-units';
import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

const U = TEX_UNITS;

/**
 * UE14 – Chimie organique – Chapitre 2.2 – Section E – Pouvoir rotatoire et composition des mélanges
 */

export const UE14_CH6_SECTION_E_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du pouvoir rotatoire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il correspond à la capacité d'une substance à dévier le plan d'une lumière polarisée.",
        "correct": true,
        "explanation": "C'est la définition donnée dans la fiche."
      },
      {
        "content": "Il peut être mesuré à l'aide d'un polarimètre.",
        "correct": true,
        "explanation": "Le polarimètre mesure l'angle de déviation."
      },
      {
        "content": "Le signe de la déviation peut être positif ou négatif.",
        "correct": true,
        "explanation": "Le lecteur indique notamment le sens de rotation."
      },
      {
        "content": "Il permet à lui seul d'attribuer une configuration R ou S.",
        "correct": false,
        "explanation": "Le signe du pouvoir rotatoire n'est pas relié universellement à R/S."
      }
    ],
    "explanation": "Le pouvoir rotatoire est une propriété expérimentale distincte du descripteur structural R/S."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le dispositif de polarimétrie décrit dans le cours comporte notamment :",
    "choices": [
      {
        "content": "Une source de lumière polarisée.",
        "correct": true,
        "explanation": "La fiche cite une lampe au sodium."
      },
      {
        "content": "Une solution contenant la substance étudiée.",
        "correct": true,
        "explanation": "La mesure se fait sur une substance en solution."
      },
      {
        "content": "Un système permettant de mesurer l'angle de déviation.",
        "correct": true,
        "explanation": "C'est la lecture du polarimètre."
      },
      {
        "content": "Obligatoirement un spectromètre de masse.",
        "correct": false,
        "explanation": "Ce n'est pas l'appareil utilisé pour mesurer le pouvoir rotatoire."
      }
    ],
    "explanation": "Le polarimètre impose une lumière polarisée, un trajet dans l'échantillon et une mesure de la rotation du plan de polarisation."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans l'expérience de polarimétrie décrite dans la fiche, quels paramètres peuvent influencer la déviation mesurée ?",
    "choices": [
      {
        "content": "La température.",
        "correct": true,
        "explanation": "Elle est explicitement citée."
      },
      {
        "content": "La nature du solvant.",
        "correct": true,
        "explanation": "Elle est explicitement citée."
      },
      {
        "content": "La longueur du récipient traversé par la lumière.",
        "correct": true,
        "explanation": "Le trajet optique influence la déviation."
      },
      {
        "content": "La couleur du bouchon du récipient.",
        "correct": false,
        "explanation": "Elle n'est pas un paramètre de la mesure."
      }
    ],
    "explanation": "Une valeur de rotation doit être interprétée dans des conditions expérimentales définies."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les signes (+) et (−) du pouvoir rotatoire :",
    "choices": [
      {
        "content": "Ils indiquent le sens de la déviation mesurée.",
        "correct": true,
        "explanation": "Le signe est une propriété expérimentale."
      },
      {
        "content": "Ils ne sont pas synonymes de R et S.",
        "correct": true,
        "explanation": "Configuration absolue et signe de rotation sont indépendants."
      },
      {
        "content": "Une molécule R est toujours (+).",
        "correct": false,
        "explanation": "Il n'existe pas de correspondance générale."
      },
      {
        "content": "Une molécule S est toujours (−).",
        "correct": false,
        "explanation": "Même raison."
      }
    ],
    "explanation": "Il faut distinguer soigneusement R/S, qui décrit la structure, de (+)/(−), qui décrit une mesure optique."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Deux énantiomères purs sont mesurés dans les mêmes conditions et dans un environnement achiral. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Leurs rotations optiques ont des valeurs absolues égales.",
        "correct": true,
        "explanation": "Deux énantiomères purs ont des rotations opposées de même module dans les mêmes conditions."
      },
      {
        "content": "Leurs signes de rotation sont opposés.",
        "correct": true,
        "explanation": "L'un dévie dans un sens, l'autre dans l'autre."
      },
      {
        "content": "Ils possèdent nécessairement les mêmes descripteurs R/S.",
        "correct": false,
        "explanation": "Pour un seul centre, ils portent des configurations opposées."
      },
      {
        "content": "Le signe (+) permet de conclure que l'énantiomère est R.",
        "correct": false,
        "explanation": "Le signe ne détermine pas R/S."
      }
    ],
    "explanation": "Dans des conditions identiques, les contributions optiques de deux énantiomères sont opposées."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un mélange racémique :",
    "choices": [
      {
        "content": "Contient 50 % d'un énantiomère et 50 % de l'autre.",
        "correct": true,
        "explanation": "Définition retenue dans la fiche."
      },
      {
        "content": "A un excès énantiomérique nul.",
        "correct": true,
        "explanation": "Les populations sont égales."
      },
      {
        "content": "Ne présente pas de rotation optique nette dans le modèle du cours.",
        "correct": true,
        "explanation": "Les deux contributions se compensent."
      },
      {
        "content": "Ne contient aucune molécule chirale.",
        "correct": false,
        "explanation": "Les molécules peuvent être chirales ; c'est le mélange qui est optiquement inactif par compensation."
      }
    ],
    "explanation": "Un racémate est un mélange équimolaire de deux énantiomères dont les rotations opposées se compensent."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "L'excès énantiomérique (ee) d'un mélange de deux énantiomères est :",
    "choices": [
      {
        "content": "La différence, en valeur absolue, entre leurs pourcentages.",
        "correct": true,
        "explanation": "Par exemple 75 % − 25 % = 50 %."
      },
      {
        "content": "Toujours égal à 100 %.",
        "correct": false,
        "explanation": "Il vaut 0 % pour un racémate."
      },
      {
        "content": "La somme de leurs pourcentages.",
        "correct": false,
        "explanation": "Cette somme vaut 100 %."
      },
      {
        "content": "Le nombre de centres asymétriques de la molécule.",
        "correct": false,
        "explanation": "Ce sont deux notions distinctes."
      }
    ],
    "explanation": "Dans un mélange binaire R/S, $ee=|\\%\\text{majoritaire}-\\%\\text{minoritaire}|$."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Un mélange contient 75 % d'un énantiomère et 25 % de l'autre. Quel est son excès énantiomérique en pourcentage ?",
    "answer": {
      "type": "number",
      "value": 50,
      "tolerance": 0.01,
      "unit": "%",
      "displayUnit": U.PERCENT
    },
    "explanation": "$ee=75-25=50\\,\\%$."
  },
  {
    "order": 89,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Un mélange racémique contient 50 % de chaque énantiomère. Quel est son excès énantiomérique en pourcentage ?",
    "answer": {
      "type": "number",
      "value": 0,
      "tolerance": 0.01,
      "unit": "%",
      "displayUnit": U.PERCENT
    },
    "explanation": "$ee=50-50=0\\,\\%$."
  },
  {
    "order": 90,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans un mélange ne contenant que deux énantiomères, un excès énantiomérique de 100 % correspond :",
    "choices": [
      {
        "content": "À un seul énantiomère présent.",
        "correct": true,
        "explanation": "Les proportions sont 100/0."
      },
      {
        "content": "À un mélange racémique.",
        "correct": false,
        "explanation": "Un racémate a ee=0 %."
      },
      {
        "content": "À un mélange 75/25.",
        "correct": false,
        "explanation": "Ce mélange a ee=50 %."
      },
      {
        "content": "À une absence totale de substance chirale.",
        "correct": false,
        "explanation": "Un énantiomère pur est chiral."
      }
    ],
    "explanation": "Dans le modèle à deux énantiomères, ee=100 % signifie énantiopureté."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un mélange de deux énantiomères a un excès énantiomérique de 60 %. Quelle est la proportion, en pourcentage, de l'énantiomère majoritaire ?",
    "answer": {
      "type": "number",
      "value": 80,
      "tolerance": 0.01,
      "unit": "%",
      "displayUnit": U.PERCENT
    },
    "explanation": "Si $M+m=100$ et $M-m=60$, alors $2M=160$ et $M=80\\,\\%$."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un mélange contient 90 % de l'énantiomère R et 10 % de l'énantiomère S. Quel est son excès énantiomérique ?",
    "answer": {
      "type": "number",
      "value": 80,
      "tolerance": 0.01,
      "unit": "%",
      "displayUnit": U.PERCENT
    },
    "explanation": "$ee=90-10=80\\,\\%$."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un mélange contient 65 % d'un énantiomère et 35 % de l'autre. Quel est son excès énantiomérique ?",
    "answer": {
      "type": "number",
      "value": 30,
      "tolerance": 0.01,
      "unit": "%",
      "displayUnit": U.PERCENT
    },
    "explanation": "$ee=65-35=30\\,\\%$."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans des conditions fixées, un énantiomère pur donne une rotation de $+20^\\circ$. On suppose la rotation observée proportionnelle à l'excès énantiomérique. Quelle rotation attend-on pour un mélange d'ee = 50 % enrichi dans cet énantiomère ?",
    "answer": {
      "type": "number",
      "value": 10,
      "tolerance": 0.1,
      "unit": "°",
      "displayUnit": U.DEGREE
    },
    "explanation": "La rotation attendue vaut $20\\times0{,}50=+10^\\circ$."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un mélange racémique d'une molécule chirale peut-il être optiquement inactif ?",
    "choices": [
      {
        "content": "Oui, par compensation des rotations opposées des deux énantiomères.",
        "correct": true,
        "explanation": "Le mélange 50/50 donne une rotation nette nulle."
      },
      {
        "content": "Oui, même si chaque énantiomère pur est optiquement actif.",
        "correct": true,
        "explanation": "L'inactivité du mélange est collective."
      },
      {
        "content": "Non, car toute molécule chirale impose une rotation nette dans n'importe quel mélange.",
        "correct": false,
        "explanation": "Le racémate est le contre-exemple."
      },
      {
        "content": "L'inactivité optique prouve à elle seule que les molécules sont achirales.",
        "correct": false,
        "explanation": "Un racémate peut être inactif tout en contenant des molécules chirales."
      }
    ],
    "explanation": "Il faut distinguer l'activité optique d'une espèce pure de la rotation nette d'un mélange."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des couples R/S et (+)/(−), quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "R/S est attribué à partir de la structure et des règles CIP.",
        "correct": true,
        "explanation": "C'est une configuration absolue."
      },
      {
        "content": "(+)/(−) est déterminé expérimentalement par polarimétrie.",
        "correct": true,
        "explanation": "C'est le signe d'une rotation."
      },
      {
        "content": "On ne peut pas déduire universellement le signe optique à partir de R/S.",
        "correct": true,
        "explanation": "Il n'existe pas de relation générale."
      },
      {
        "content": "R signifie toujours dextrogyre.",
        "correct": false,
        "explanation": "R signifie rectus dans la nomenclature CIP, pas rotation positive."
      }
    ],
    "explanation": "Cette distinction constitue un piège classique de stéréochimie."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Deux mesures de rotation optique sont comparées. Pour les interpréter rigoureusement, il est pertinent de vérifier :",
    "choices": [
      {
        "content": "Que la température est comparable.",
        "correct": true,
        "explanation": "La fiche indique qu'elle influence la déviation."
      },
      {
        "content": "Que le solvant est comparable.",
        "correct": true,
        "explanation": "Le solvant influence la mesure."
      },
      {
        "content": "Que la longueur du trajet optique est connue.",
        "correct": true,
        "explanation": "La longueur du récipient intervient."
      },
      {
        "content": "Seulement le nom commercial du composé.",
        "correct": false,
        "explanation": "Il ne définit pas les conditions expérimentales."
      }
    ],
    "explanation": "La polarimétrie exige de contrôler les conditions de mesure avant toute comparaison quantitative."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans un modèle où l'angle observé est proportionnel à la longueur du trajet optique, une solution donne $+8^\\circ$ dans une cuve de longueur $l$. Quelle rotation donnerait-elle dans une cuve de longueur $2l$, toutes choses égales par ailleurs ?",
    "answer": {
      "type": "number",
      "value": 16,
      "tolerance": 0.1,
      "unit": "°",
      "displayUnit": U.DEGREE
    },
    "explanation": "Si la rotation est proportionnelle à la longueur du trajet, doubler $l$ double l'angle : $+16^\\circ$."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le contrôle de qualité d'un principe actif chiral, une mesure de pouvoir rotatoire peut être utile car :",
    "choices": [
      {
        "content": "Elle peut renseigner sur un enrichissement en un énantiomère.",
        "correct": true,
        "explanation": "Une rotation nette traduit un déséquilibre entre les deux formes dans le modèle simple."
      },
      {
        "content": "Elle doit être interprétée dans des conditions expérimentales définies.",
        "correct": true,
        "explanation": "Solvant, température et trajet optique comptent."
      },
      {
        "content": "Elle remplace toujours toute identification structurale.",
        "correct": false,
        "explanation": "La polarimétrie ne fournit pas à elle seule toute l'identité moléculaire."
      },
      {
        "content": "Elle permet de conclure automatiquement R si la rotation est positive.",
        "correct": false,
        "explanation": "Aucune correspondance universelle."
      }
    ],
    "explanation": "Le contexte pharmaceutique illustre l'intérêt pratique du pouvoir rotatoire sans lui attribuer plus d'information qu'il n'en fournit."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un mélange de deux énantiomères présente un excès énantiomérique de 20 %. Quelle est la proportion de l'énantiomère minoritaire ?",
    "answer": {
      "type": "number",
      "value": 40,
      "tolerance": 0.01,
      "unit": "%",
      "displayUnit": U.PERCENT
    },
    "explanation": "Avec $M+m=100$ et $M-m=20$, on obtient $M=60$ et $m=40\\,\\%$."
  },
  {
    "order": 129,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un racémate a un excès énantiomérique nul.",
        "correct": true,
        "explanation": "50/50 → ee 0."
      },
      {
        "content": "Un mélange 80/20 a un ee de 60 %.",
        "correct": true,
        "explanation": "80−20=60."
      },
      {
        "content": "Un ee de 100 % correspond à un seul énantiomère dans un mélange binaire.",
        "correct": true,
        "explanation": "100/0."
      },
      {
        "content": "R/S ne prédit pas le signe (+)/(−) du pouvoir rotatoire.",
        "correct": true,
        "explanation": "Les deux informations sont indépendantes."
      },
      {
        "content": "La température peut influencer la rotation mesurée.",
        "correct": true,
        "explanation": "Paramètre cité dans la fiche."
      },
      {
        "content": "Un racémate ne contient aucune molécule chirale.",
        "correct": false,
        "explanation": "Il contient les deux énantiomères."
      },
      {
        "content": "Un mélange 75/25 a un ee de 75 %.",
        "correct": false,
        "explanation": "Il vaut 50 %."
      },
      {
        "content": "Le signe (+) signifie nécessairement R.",
        "correct": false,
        "explanation": "Pas de relation générale."
      },
      {
        "content": "Le solvant n'a jamais d'effet sur la rotation.",
        "correct": false,
        "explanation": "La fiche indique le contraire."
      },
      {
        "content": "L'excès énantiomérique est la somme des deux pourcentages.",
        "correct": false,
        "explanation": "C'est leur différence."
      }
    ],
    "explanation": "Cette sélection synthétise les règles de calcul et les pièges de vocabulaire de la section."
  },
  {
    "order": 130,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un mélange de deux énantiomères présente un excès énantiomérique de 36 %. Quelle est la proportion de l'énantiomère majoritaire ?",
    "answer": {
      "type": "number",
      "value": 68,
      "tolerance": 0.01,
      "unit": "%",
      "displayUnit": U.PERCENT
    },
    "explanation": "Si $M+m=100$ et $M-m=36$, alors $2M=136$ et $M=68\\,\\%$."
  }
];
