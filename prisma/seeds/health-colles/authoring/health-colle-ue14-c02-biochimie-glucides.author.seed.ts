import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C02 — Biochimie — Glucides
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 */
export const UE14_COLLE_C02_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Colle C02 — concernant oses, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:oses"
    ],
    "choices": [
      {
        "content": "Le D-fructose est un aldopentose.",
        "correct": false,
        "explanation": "Le D-fructose est un cétohexose."
      },
      {
        "content": "Le carbone anomérique du glucose correspond au carbone C6.",
        "correct": false,
        "explanation": "Le carbone anomérique du glucose est C1."
      },
      {
        "content": "Le D-glucose et le D-mannose sont épimères en C2.",
        "correct": true,
        "explanation": "Ils ne diffèrent que par la configuration du carbone 2."
      },
      {
        "content": "Le D-glucose et le D-galactose sont épimères en C4.",
        "correct": true,
        "explanation": "Ils ne diffèrent que par la configuration du carbone 4."
      },
      {
        "content": "La série D ou L d’un ose est déterminée par le signe de son pouvoir rotatoire.",
        "correct": false,
        "explanation": "D/L décrit une configuration relative, pas le signe +/− de rotation optique."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de carbones possède un hexose ?",
    "explanation": "Le préfixe hex- indique six carbones.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    }
  },
  {
    "order": 3,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de oses ?",
    "explanation": "Sa forme ouverte possède une fonction aldéhyde et six carbones.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:oses"
    ],
    "choices": [
      {
        "content": "Le D-glucose est un aldohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction aldéhyde et six carbones."
      },
      {
        "content": "Le glycogène est un polymère linéaire relié exclusivement par des liaisons β(1→4).",
        "correct": false,
        "explanation": "Le glycogène est ramifié, avec liaisons α(1→4) et α(1→6)."
      },
      {
        "content": "La cellulose est la principale forme de réserve glucidique du foie humain.",
        "correct": false,
        "explanation": "La réserve glucidique hépatique est le glycogène."
      },
      {
        "content": "Le lactose est formé de deux molécules de fructose.",
        "correct": false,
        "explanation": "Le lactose associe galactose et glucose."
      },
      {
        "content": "Le maltose est non réducteur car ses deux carbones anomériques sont engagés.",
        "correct": false,
        "explanation": "Le maltose conserve un carbone anomérique libre et est réducteur."
      }
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biochimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Le D-fructose est un cétohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction cétone et six carbones."
      },
      {
        "content": "Les anomères α et β sont des énantiomères.",
        "correct": false,
        "explanation": "Ce sont des diastéréoisomères qui diffèrent au carbone anomérique."
      },
      {
        "content": "La cyclisation d’un ose supprime définitivement toute possibilité de forme ouverte.",
        "correct": false,
        "explanation": "En solution, un équilibre subsiste entre formes cycliques et une faible proportion de forme ouverte."
      },
      {
        "content": "Le saccharose possède un carbone anomérique libre et est fortement réducteur.",
        "correct": false,
        "explanation": "Les deux carbones anomériques sont engagés ; le saccharose est non réducteur."
      },
      {
        "content": "Le D-glucose est un aldohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction aldéhyde et six carbones."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C02 — concernant cyclisation, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:cyclisation"
    ],
    "choices": [
      {
        "content": "La cyclisation d’un ose supprime définitivement toute possibilité de forme ouverte.",
        "correct": false,
        "explanation": "En solution, un équilibre subsiste entre formes cycliques et une faible proportion de forme ouverte."
      },
      {
        "content": "Le glycogène est un polymère linéaire relié exclusivement par des liaisons β(1→4).",
        "correct": false,
        "explanation": "Le glycogène est ramifié, avec liaisons α(1→4) et α(1→6)."
      },
      {
        "content": "Deux énantiomères sont images l’un de l’autre dans un miroir et non superposables.",
        "correct": true,
        "explanation": "C’est la définition de l’énantiomérie."
      },
      {
        "content": "Le D-fructose est un cétohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction cétone et six carbones."
      },
      {
        "content": "Le saccharose possède un carbone anomérique libre et est fortement réducteur.",
        "correct": false,
        "explanation": "Les deux carbones anomériques sont engagés ; le saccharose est non réducteur."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le numéro du carbone anomérique du glucose ?",
    "explanation": "Dans un aldose comme le glucose, le carbone carbonylé C1 devient anomérique à la cyclisation.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    }
  },
  {
    "order": 7,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de oses ?",
    "explanation": "Sa forme ouverte possède une fonction cétone et six carbones.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:oses"
    ],
    "choices": [
      {
        "content": "Le maltose est non réducteur car ses deux carbones anomériques sont engagés.",
        "correct": false,
        "explanation": "Le maltose conserve un carbone anomérique libre et est réducteur."
      },
      {
        "content": "Le D-fructose est un cétohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction cétone et six carbones."
      },
      {
        "content": "Tous les carbones d’un hexose sont nécessairement asymétriques.",
        "correct": false,
        "explanation": "Plusieurs carbones, notamment le carbone carbonylé de la forme ouverte et les carbones terminaux, ne sont pas asymétriques."
      },
      {
        "content": "Le ribose est un hexose.",
        "correct": false,
        "explanation": "Le ribose possède cinq carbones : c’est un pentose."
      },
      {
        "content": "La série D ou L d’un ose est déterminée par le signe de son pouvoir rotatoire.",
        "correct": false,
        "explanation": "D/L décrit une configuration relative, pas le signe +/− de rotation optique."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biochimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "La cellulose est la principale forme de réserve glucidique du foie humain.",
        "correct": false,
        "explanation": "La réserve glucidique hépatique est le glycogène."
      },
      {
        "content": "Dans une projection de Fischer d’un D-ose, le groupe OH du carbone asymétrique le plus éloigné du carbonyle est à droite.",
        "correct": true,
        "explanation": "Ce critère définit la série D."
      },
      {
        "content": "Le lactose est formé de deux molécules de fructose.",
        "correct": false,
        "explanation": "Le lactose associe galactose et glucose."
      },
      {
        "content": "Le glycogène est un polymère linéaire relié exclusivement par des liaisons β(1→4).",
        "correct": false,
        "explanation": "Le glycogène est ramifié, avec liaisons α(1→4) et α(1→6)."
      },
      {
        "content": "Deux énantiomères sont images l’un de l’autre dans un miroir et non superposables.",
        "correct": true,
        "explanation": "C’est la définition de l’énantiomérie."
      }
    ]
  },
  {
    "order": 9,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "explanation": "Cette question longue vérifie la capacité à maintenir une lecture précise sur plusieurs notions transversales.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "La cyclisation du glucose crée un nouveau centre stéréogène : le carbone anomérique.",
        "correct": true,
        "explanation": "Le carbone carbonylé devient le carbone anomérique lors de l’hémiacétalisation."
      },
      {
        "content": "Le saccharose possède un carbone anomérique libre et est fortement réducteur.",
        "correct": false,
        "explanation": "Les deux carbones anomériques sont engagés ; le saccharose est non réducteur."
      },
      {
        "content": "Le maltose est non réducteur car ses deux carbones anomériques sont engagés.",
        "correct": false,
        "explanation": "Le maltose conserve un carbone anomérique libre et est réducteur."
      },
      {
        "content": "La cellulose est la principale forme de réserve glucidique du foie humain.",
        "correct": false,
        "explanation": "La réserve glucidique hépatique est le glycogène."
      },
      {
        "content": "Le saccharose associe un résidu de glucose et un résidu de fructose.",
        "correct": true,
        "explanation": "Le saccharose est un diholoside glucose-fructose."
      },
      {
        "content": "Pour le D-glucopyranose, l’anomère α porte classiquement le OH anomérique opposé au groupe CH2OH de référence.",
        "correct": true,
        "explanation": "En Haworth usuelle d’un D-ose, α correspond à une relation trans entre OH anomérique et CH2OH."
      },
      {
        "content": "Dans une projection de Fischer d’un D-ose, le groupe OH du carbone asymétrique le plus éloigné du carbonyle est à droite.",
        "correct": true,
        "explanation": "Ce critère définit la série D."
      },
      {
        "content": "La mutarotation correspond à l’évolution du pouvoir rotatoire liée à l’interconversion des anomères en solution.",
        "correct": true,
        "explanation": "Les formes α et β s’interconvertissent via la forme ouverte."
      },
      {
        "content": "Le glycogène est un polymère linéaire relié exclusivement par des liaisons β(1→4).",
        "correct": false,
        "explanation": "Le glycogène est ramifié, avec liaisons α(1→4) et α(1→6)."
      },
      {
        "content": "Le lactose est formé de deux molécules de fructose.",
        "correct": false,
        "explanation": "Le lactose associe galactose et glucose."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Colle C02 — concernant anomerie, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:anomerie"
    ],
    "choices": [
      {
        "content": "Pour le D-glucopyranose, l’anomère α porte classiquement le OH anomérique opposé au groupe CH2OH de référence.",
        "correct": true,
        "explanation": "En Haworth usuelle d’un D-ose, α correspond à une relation trans entre OH anomérique et CH2OH."
      },
      {
        "content": "Tous les carbones d’un hexose sont nécessairement asymétriques.",
        "correct": false,
        "explanation": "Plusieurs carbones, notamment le carbone carbonylé de la forme ouverte et les carbones terminaux, ne sont pas asymétriques."
      },
      {
        "content": "Le maltose est non réducteur car ses deux carbones anomériques sont engagés.",
        "correct": false,
        "explanation": "Le maltose conserve un carbone anomérique libre et est réducteur."
      },
      {
        "content": "Le lactose est formé de deux molécules de fructose.",
        "correct": false,
        "explanation": "Le lactose associe galactose et glucose."
      },
      {
        "content": "La cyclisation du glucose crée un nouveau centre stéréogène : le carbone anomérique.",
        "correct": true,
        "explanation": "Le carbone carbonylé devient le carbone anomérique lors de l’hémiacétalisation."
      }
    ]
  },
  {
    "order": 11,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel est le numéro du carbone anomérique du fructose ?",
    "explanation": "Le fructose est un cétose dont le carbonyle est en C2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    }
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de stereochimie ?",
    "explanation": "C’est la définition de l’énantiomérie.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:stereochimie"
    ],
    "choices": [
      {
        "content": "La série D ou L d’un ose est déterminée par le signe de son pouvoir rotatoire.",
        "correct": false,
        "explanation": "D/L décrit une configuration relative, pas le signe +/− de rotation optique."
      },
      {
        "content": "Le D-fructose est un aldopentose.",
        "correct": false,
        "explanation": "Le D-fructose est un cétohexose."
      },
      {
        "content": "Deux énantiomères sont images l’un de l’autre dans un miroir et non superposables.",
        "correct": true,
        "explanation": "C’est la définition de l’énantiomérie."
      },
      {
        "content": "Le carbone anomérique du glucose correspond au carbone C6.",
        "correct": false,
        "explanation": "Le carbone anomérique du glucose est C1."
      },
      {
        "content": "Les anomères α et β sont des énantiomères.",
        "correct": false,
        "explanation": "Ce sont des diastéréoisomères qui diffèrent au carbone anomérique."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biochimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Le maltose est non réducteur car ses deux carbones anomériques sont engagés.",
        "correct": false,
        "explanation": "Le maltose conserve un carbone anomérique libre et est réducteur."
      },
      {
        "content": "Le ribose est un hexose.",
        "correct": false,
        "explanation": "Le ribose possède cinq carbones : c’est un pentose."
      },
      {
        "content": "Tous les carbones d’un hexose sont nécessairement asymétriques.",
        "correct": false,
        "explanation": "Plusieurs carbones, notamment le carbone carbonylé de la forme ouverte et les carbones terminaux, ne sont pas asymétriques."
      },
      {
        "content": "Pour le D-glucopyranose, l’anomère α porte classiquement le OH anomérique opposé au groupe CH2OH de référence.",
        "correct": true,
        "explanation": "En Haworth usuelle d’un D-ose, α correspond à une relation trans entre OH anomérique et CH2OH."
      },
      {
        "content": "La cyclisation du glucose crée un nouveau centre stéréogène : le carbone anomérique.",
        "correct": true,
        "explanation": "Le carbone carbonylé devient le carbone anomérique lors de l’hémiacétalisation."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C02 — concernant stereochimie, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:stereochimie"
    ],
    "choices": [
      {
        "content": "La série D ou L d’un ose est déterminée par le signe de son pouvoir rotatoire.",
        "correct": false,
        "explanation": "D/L décrit une configuration relative, pas le signe +/− de rotation optique."
      },
      {
        "content": "Le lactose associe un galactose et un glucose.",
        "correct": true,
        "explanation": "Le lactose est formé de galactose et glucose."
      },
      {
        "content": "Le maltose est constitué de deux résidus de glucose.",
        "correct": true,
        "explanation": "Le maltose est un diholoside glucose-glucose."
      },
      {
        "content": "Le saccharose associe un résidu de glucose et un résidu de fructose.",
        "correct": true,
        "explanation": "Le saccharose est un diholoside glucose-fructose."
      },
      {
        "content": "Le D-fructose est un aldopentose.",
        "correct": false,
        "explanation": "Le D-fructose est un cétohexose."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de résidus osidiques contient un diholoside ?",
    "explanation": "Un diholoside est constitué de deux oses liés.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    }
  },
  {
    "order": 16,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de fischer ?",
    "explanation": "Ce critère définit la série D.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:fischer"
    ],
    "choices": [
      {
        "content": "Les anomères α et β sont des énantiomères.",
        "correct": false,
        "explanation": "Ce sont des diastéréoisomères qui diffèrent au carbone anomérique."
      },
      {
        "content": "La cyclisation d’un ose supprime définitivement toute possibilité de forme ouverte.",
        "correct": false,
        "explanation": "En solution, un équilibre subsiste entre formes cycliques et une faible proportion de forme ouverte."
      },
      {
        "content": "Le saccharose possède un carbone anomérique libre et est fortement réducteur.",
        "correct": false,
        "explanation": "Les deux carbones anomériques sont engagés ; le saccharose est non réducteur."
      },
      {
        "content": "Dans une projection de Fischer d’un D-ose, le groupe OH du carbone asymétrique le plus éloigné du carbonyle est à droite.",
        "correct": true,
        "explanation": "Ce critère définit la série D."
      },
      {
        "content": "Le glycogène est un polymère linéaire relié exclusivement par des liaisons β(1→4).",
        "correct": false,
        "explanation": "Le glycogène est ramifié, avec liaisons α(1→4) et α(1→6)."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Colle C02 — concernant cyclisation, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:cyclisation"
    ],
    "choices": [
      {
        "content": "La cyclisation d’un ose supprime définitivement toute possibilité de forme ouverte.",
        "correct": false,
        "explanation": "En solution, un équilibre subsiste entre formes cycliques et une faible proportion de forme ouverte."
      },
      {
        "content": "L’amylopectine est ramifiée alors que l’amylose est essentiellement linéaire.",
        "correct": true,
        "explanation": "L’amylopectine comporte des branchements α(1→6), contrairement à l’amylose principalement α(1→4)."
      },
      {
        "content": "Le saccharose possède un carbone anomérique libre et est fortement réducteur.",
        "correct": false,
        "explanation": "Les deux carbones anomériques sont engagés ; le saccharose est non réducteur."
      },
      {
        "content": "Le glycogène est un polymère de glucose très ramifié.",
        "correct": true,
        "explanation": "Il comporte des liaisons α(1→4) et des ramifications α(1→6)."
      },
      {
        "content": "La cellulose est constituée de résidus de glucose reliés en β(1→4).",
        "correct": true,
        "explanation": "Ces liaisons β expliquent notamment l’absence de digestion par les enzymes humaines usuelles."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Colle C02 — concernant diholosides, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:diholosides"
    ],
    "choices": [
      {
        "content": "Le lactose est formé de deux molécules de fructose.",
        "correct": false,
        "explanation": "Le lactose associe galactose et glucose."
      },
      {
        "content": "Le saccharose est non réducteur parce que ses deux carbones anomériques sont engagés dans la liaison osidique.",
        "correct": true,
        "explanation": "Aucun carbone anomérique n’est libre pour donner une forme carbonylée réductrice."
      },
      {
        "content": "Un carbone anomérique engagé dans une liaison osidique peut perdre son caractère réducteur.",
        "correct": true,
        "explanation": "Le pouvoir réducteur nécessite la possibilité d’ouvrir le cycle au niveau du carbone anomérique libre."
      },
      {
        "content": "Un ose possède une fonction carbonyle dans sa forme ouverte et plusieurs fonctions alcool.",
        "correct": true,
        "explanation": "Les oses sont des polyhydroxy-aldéhydes ou polyhydroxy-cétones."
      },
      {
        "content": "Le ribose est un pentose entrant dans la composition de l’ARN.",
        "correct": true,
        "explanation": "L’ARN contient du β-D-ribofuranose."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sur le glucopyranose représenté, sélectionnez le carbone anomérique C1.",
    "explanation": "La zone attendue correspond à : Carbone anomérique C1.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:qzone"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c02/glucopyranose-anomeric-carbon-qzone.svg",
      "alt": "Glucopyranose simplifié",
      "width": 960,
      "height": 560
    },
    "expectedZones": [
      {
        "id": "target",
        "label": "Carbone anomérique C1",
        "x": 0.66,
        "y": 0.5,
        "tolerance": 0.07
      }
    ],
    "defaultTolerance": 0.07
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C02 — concernant pentoses, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C02",
      "ec:BIOCHIMIE",
      "theme:pentoses"
    ],
    "choices": [
      {
        "content": "Le 2-désoxyribose diffère du ribose par l’absence d’un oxygène en C2.",
        "correct": true,
        "explanation": "Le carbone 2 porte H à la place de OH."
      },
      {
        "content": "Le D-glucose et le D-mannose sont épimères en C2.",
        "correct": true,
        "explanation": "Ils ne diffèrent que par la configuration du carbone 2."
      },
      {
        "content": "Le ribose est un pentose entrant dans la composition de l’ARN.",
        "correct": true,
        "explanation": "L’ARN contient du β-D-ribofuranose."
      },
      {
        "content": "La série D ou L d’un ose est déterminée par le signe de son pouvoir rotatoire.",
        "correct": false,
        "explanation": "D/L décrit une configuration relative, pas le signe +/− de rotation optique."
      },
      {
        "content": "Le D-glucose et le D-galactose sont épimères en C4.",
        "correct": true,
        "explanation": "Ils ne diffèrent que par la configuration du carbone 4."
      }
    ]
  }
];
