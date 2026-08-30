import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des protéines, partie 1 — Section A — Protection : immunoglobulines */
export const UE14_BIOCH_CH12_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les immunoglobulines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ce sont des glycoprotéines de la réponse immunitaire adaptative.",
        "correct": true,
        "explanation": "Les anticorps appartiennent à la famille des immunoglobulines."
      },
      {
        "content": "Elles reconnaissent des déterminants antigéniques appelés épitopes.",
        "correct": true,
        "explanation": "Un anticorps ne reconnaît qu'une partie précise d'un antigène."
      },
      {
        "content": "Une immunoglobuline reconnaît obligatoirement l'intégralité d'un antigène.",
        "correct": false,
        "explanation": "La reconnaissance porte sur un épitope."
      },
      {
        "content": "Les immunoglobulines sont des triacylglycérols.",
        "correct": false,
        "explanation": "Ce sont des protéines glycosylées."
      },
      {
        "content": "Les immunoglobulines appartiennent à l'immunité innée exclusivement.",
        "correct": false,
        "explanation": "Elles sont des effecteurs majeurs de l'immunité adaptative."
      }
    ],
    "explanation": "Une immunoglobuline reconnaît un épitope précis porté par un antigène."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la structure H2L2 d'une immunoglobuline, laquelle est correcte ?",
    "choices": [
      {
        "content": "L'unité immunoglobuline classique comporte deux chaînes lourdes et deux chaînes légères.",
        "correct": true,
        "explanation": "La structure de base est H2L2."
      },
      {
        "content": "La classe d'Ig est définie par la chaîne légère.",
        "correct": false,
        "explanation": "Elle est définie par la chaîne lourde."
      },
      {
        "content": "L'unité de base comporte trois chaînes lourdes et une légère.",
        "correct": false,
        "explanation": "La structure de base est H2L2."
      },
      {
        "content": "Les quatre chaînes sont reliées uniquement par des liaisons peptidiques continues.",
        "correct": false,
        "explanation": "Les chaînes distinctes sont notamment associées par des ponts disulfure."
      },
      {
        "content": "Une immunoglobuline ne comporte aucune région variable.",
        "correct": false,
        "explanation": "Les régions variables sont essentielles à la reconnaissance antigénique."
      }
    ],
    "explanation": "L'unité de base d'une immunoglobuline est H2L2 : deux chaînes lourdes et deux chaînes légères."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de chaînes polypeptidiques comporte l'unité H2L2 d'une immunoglobuline ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "L'unité de base d'une immunoglobuline est H2L2 : deux chaînes lourdes et deux chaînes légères."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les chaînes légères des immunoglobulines humaines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les seules chaînes légères humaines sont alpha et gamma.",
        "correct": false,
        "explanation": "α et γ sont des chaînes lourdes."
      },
      {
        "content": "La chaîne légère ne possède aucun domaine variable.",
        "correct": false,
        "explanation": "Elle possède un domaine VL."
      },
      {
        "content": "Les chaînes légères comportent un domaine variable et un domaine constant.",
        "correct": true,
        "explanation": "VL et CL composent la chaîne légère classique."
      },
      {
        "content": "Les chaînes légères participent au site de liaison à l'antigène.",
        "correct": true,
        "explanation": "Le domaine VL contribue au paratope."
      },
      {
        "content": "Une même immunoglobuline possède deux chaînes légères de même type.",
        "correct": true,
        "explanation": "Elle ne mélange pas une κ et une λ au sein d'une même molécule."
      }
    ],
    "explanation": "Les chaînes légères humaines sont κ ou λ ; la classe de l'Ig dépend en revanche de la chaîne lourde."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les domaines d'immunoglobuline, laquelle est correcte ?",
    "choices": [
      {
        "content": "Les domaines variables sont situés vers les extrémités N-terminales des chaînes.",
        "correct": true,
        "explanation": "VH et VL forment ensemble les sites de liaison antigénique."
      },
      {
        "content": "Un domaine d'Ig est formé de sept domaines bêta distincts.",
        "correct": false,
        "explanation": "Il s'agit de brins bêta organisés en feuillets, pas de sept domaines."
      },
      {
        "content": "Les domaines variables sont situés exclusivement aux extrémités C-terminales.",
        "correct": false,
        "explanation": "Ils sont N-terminaux."
      },
      {
        "content": "Les domaines d'Ig sont dépourvus de toute structure secondaire bêta.",
        "correct": false,
        "explanation": "Ils sont au contraire riches en brins bêta."
      },
      {
        "content": "Le repliement immunoglobuline est une unique hélice alpha.",
        "correct": false,
        "explanation": "Il s'agit d'un sandwich bêta."
      }
    ],
    "explanation": "Un domaine d'immunoglobuline est un module compact en sandwich bêta, et non une succession de « domaines bêta »."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant les fragments Fab et Fc d'une IgG, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La papaïne produit un seul Fab et deux Fc.",
        "correct": false,
        "explanation": "Elle produit deux Fab et un Fc."
      },
      {
        "content": "Chaque fragment Fab conserve un site de liaison à l'antigène.",
        "correct": true,
        "explanation": "Fab signifie fragment antigen binding."
      },
      {
        "content": "Le Fc peut interagir avec des récepteurs Fc et des éléments du complément selon la classe.",
        "correct": true,
        "explanation": "Il ne porte pas le site antigénique principal."
      },
      {
        "content": "Le Fc contient les deux sites de reconnaissance antigénique.",
        "correct": false,
        "explanation": "Ils se trouvent dans les Fab."
      },
      {
        "content": "Fab signifie fragment activating beta.",
        "correct": false,
        "explanation": "Fab signifie antigen binding."
      }
    ],
    "explanation": "La papaïne clive classiquement une IgG en 2 Fab capables de lier l'antigène et 1 Fc effecteur.",
    "requiredSelectionCount": 2
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les formes moléculaires d'IgA et d'IgM, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'IgA sérique humaine est majoritairement monomérique.",
        "correct": true,
        "explanation": "La forme circulante diffère de la forme sécrétoire."
      },
      {
        "content": "La chaîne J est une chaîne lourde gamma.",
        "correct": false,
        "explanation": "C'est une petite chaîne distincte participant à certains polymères d'Ig."
      },
      {
        "content": "L'IgM membranaire du lymphocyte B est monomérique.",
        "correct": true,
        "explanation": "La forme récepteur membranaire diffère de l'IgM sécrétée."
      },
      {
        "content": "L'IgA sécrétoire est le plus souvent dimérique.",
        "correct": true,
        "explanation": "Deux unités sont reliées notamment par une chaîne J et associées à un composant sécrétoire."
      },
      {
        "content": "L'IgM sécrétée est classiquement pentamérique.",
        "correct": true,
        "explanation": "Une chaîne J participe à l'assemblage des formes sécrétées usuelles."
      }
    ],
    "explanation": "Il faut distinguer l'IgA sérique, surtout monomérique, de l'IgA sécrétoire, surtout dimérique ; l'IgM sécrétée est classiquement pentamérique."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de grandes classes d'immunoglobulines humaines distingue-t-on classiquement ?",
    "answer": {
      "type": "number",
      "value": 5,
      "tolerance": 0
    },
    "explanation": "Les cinq classes IgA, IgD, IgE, IgG et IgM sont définies par leurs chaînes lourdes."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les immunoglobulines ?",
    "choices": [
      {
        "content": "Les immunoglobulines sont des triacylglycérols.",
        "correct": false,
        "explanation": "Ce sont des protéines glycosylées."
      },
      {
        "content": "Un antigène ne peut porter qu'un seul épitope.",
        "correct": false,
        "explanation": "Il peut en porter plusieurs."
      },
      {
        "content": "Une immunoglobuline reconnaît obligatoirement l'intégralité d'un antigène.",
        "correct": false,
        "explanation": "La reconnaissance porte sur un épitope."
      },
      {
        "content": "Ce sont des glycoprotéines de la réponse immunitaire adaptative.",
        "correct": true,
        "explanation": "Les anticorps appartiennent à la famille des immunoglobulines."
      },
      {
        "content": "Les immunoglobulines appartiennent à l'immunité innée exclusivement.",
        "correct": false,
        "explanation": "Elles sont des effecteurs majeurs de l'immunité adaptative."
      }
    ],
    "explanation": "Une immunoglobuline reconnaît un épitope précis porté par un antigène."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la structure H2L2 d'une immunoglobuline, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les quatre chaînes sont reliées uniquement par des liaisons peptidiques continues.",
        "correct": false,
        "explanation": "Les chaînes distinctes sont notamment associées par des ponts disulfure."
      },
      {
        "content": "L'unité de base comporte trois chaînes lourdes et une légère.",
        "correct": false,
        "explanation": "La structure de base est H2L2."
      },
      {
        "content": "Une immunoglobuline ne comporte aucune région variable.",
        "correct": false,
        "explanation": "Les régions variables sont essentielles à la reconnaissance antigénique."
      },
      {
        "content": "L'unité immunoglobuline classique comporte deux chaînes lourdes et deux chaînes légères.",
        "correct": true,
        "explanation": "La structure de base est H2L2."
      },
      {
        "content": "Chaque chaîne possède une région variable et une région constante.",
        "correct": true,
        "explanation": "Les régions variables participent à la reconnaissance de l'antigène."
      }
    ],
    "explanation": "L'unité de base d'une immunoglobuline est H2L2 : deux chaînes lourdes et deux chaînes légères."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les immunoglobulines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles reconnaissent des déterminants antigéniques appelés épitopes.",
        "correct": true,
        "explanation": "Un anticorps ne reconnaît qu'une partie précise d'un antigène."
      },
      {
        "content": "Ce sont des glycoprotéines de la réponse immunitaire adaptative.",
        "correct": true,
        "explanation": "Les anticorps appartiennent à la famille des immunoglobulines."
      },
      {
        "content": "Les antigènes reconnus peuvent être de nature chimique variée.",
        "correct": true,
        "explanation": "Protéines, glycoconjugués ou autres structures peuvent porter des épitopes."
      },
      {
        "content": "Les immunoglobulines sont des triacylglycérols.",
        "correct": false,
        "explanation": "Ce sont des protéines glycosylées."
      },
      {
        "content": "Une immunoglobuline reconnaît obligatoirement l'intégralité d'un antigène.",
        "correct": false,
        "explanation": "La reconnaissance porte sur un épitope."
      }
    ],
    "explanation": "Une immunoglobuline reconnaît un épitope précis porté par un antigène."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de chaînes polypeptidiques comporte l'unité H2L2 d'une immunoglobuline ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "L'unité de base d'une immunoglobuline est H2L2 : deux chaînes lourdes et deux chaînes légères."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les classes d'immunoglobulines humaines ?",
    "choices": [
      {
        "content": "Il existe seulement trois classes d'immunoglobulines humaines.",
        "correct": false,
        "explanation": "On en distingue cinq."
      },
      {
        "content": "IgM est définie par une chaîne lourde kappa.",
        "correct": false,
        "explanation": "κ est un type de chaîne légère."
      },
      {
        "content": "Les cinq grandes classes sont IgA, IgD, IgE, IgG et IgM.",
        "correct": true,
        "explanation": "Elles correspondent à cinq isotypes de chaînes lourdes."
      },
      {
        "content": "IgE est définie par une chaîne lourde bêta.",
        "correct": false,
        "explanation": "IgE possède une chaîne lourde ε."
      },
      {
        "content": "IgG est définie par une chaîne lourde delta.",
        "correct": false,
        "explanation": "δ définit IgD."
      }
    ],
    "explanation": "Les cinq classes IgA, IgD, IgE, IgG et IgM sont définies par leurs chaînes lourdes."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les chaînes légères des immunoglobulines humaines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux types de chaînes légères sont kappa et lambda.",
        "correct": true,
        "explanation": "Une immunoglobuline donnée porte l'un ou l'autre type."
      },
      {
        "content": "Les chaînes légères participent au site de liaison à l'antigène.",
        "correct": true,
        "explanation": "Le domaine VL contribue au paratope."
      },
      {
        "content": "Une même immunoglobuline possède deux chaînes légères de même type.",
        "correct": true,
        "explanation": "Elle ne mélange pas une κ et une λ au sein d'une même molécule."
      },
      {
        "content": "Les chaînes légères définissent les classes IgG, IgM et IgA.",
        "correct": false,
        "explanation": "Ce sont les chaînes lourdes qui définissent la classe."
      },
      {
        "content": "Les chaînes légères comportent un domaine variable et un domaine constant.",
        "correct": true,
        "explanation": "VL et CL composent la chaîne légère classique."
      }
    ],
    "explanation": "Les chaînes légères humaines sont κ ou λ ; la classe de l'Ig dépend en revanche de la chaîne lourde."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle forme moléculaire de l'IgA humaine est majoritaire dans le sérum ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "monomère",
        "monomérique",
        "IgA monomérique",
        "monomerique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Il faut distinguer l'IgA sérique, surtout monomérique, de l'IgA sécrétoire, surtout dimérique ; l'IgM sécrétée est classiquement pentamérique."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les fragments Fab et Fc d'une IgG ?",
    "choices": [
      {
        "content": "La papaïne transforme l'IgG en acides aminés libres uniquement.",
        "correct": false,
        "explanation": "Le clivage limité produit de grands fragments fonctionnels."
      },
      {
        "content": "Le Fc contient les deux sites de reconnaissance antigénique.",
        "correct": false,
        "explanation": "Ils se trouvent dans les Fab."
      },
      {
        "content": "Chaque fragment Fab conserve un site de liaison à l'antigène.",
        "correct": true,
        "explanation": "Fab signifie fragment antigen binding."
      },
      {
        "content": "Le Fc peut interagir avec des récepteurs Fc et des éléments du complément selon la classe.",
        "correct": true,
        "explanation": "Il ne porte pas le site antigénique principal."
      },
      {
        "content": "Fab signifie fragment activating beta.",
        "correct": false,
        "explanation": "Fab signifie antigen binding."
      }
    ],
    "explanation": "La papaïne clive classiquement une IgG en 2 Fab capables de lier l'antigène et 1 Fc effecteur."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle forme moléculaire domine pour l'IgA sécrétoire humaine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "dimère",
        "dimérique",
        "IgA dimérique",
        "dimerique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Il faut distinguer l'IgA sérique, surtout monomérique, de l'IgA sécrétoire, surtout dimérique ; l'IgM sécrétée est classiquement pentamérique."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sur ce schéma simplifié d'une IgG, cliquez sur la région Fc.",
    "image": {
      "src": "/images/training/ue14/biochimie/roles-biologiques-proteines-partie-1/igg-fab-fc-qzone.svg",
      "alt": "Schéma original en Y d'une immunoglobuline G avec les deux bras Fab et la tige Fc",
      "width": 1000,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "fc",
        "label": "Région Fc",
        "x": 0.5,
        "y": 0.73,
        "tolerance": 0.12
      }
    ],
    "explanation": "Le fragment Fc correspond à la tige de l'IgG, formée par les régions C-terminales des deux chaînes lourdes ; les bras portent les fragments Fab."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les immunoglobulines ?",
    "choices": [
      {
        "content": "Un même antigène peut porter plusieurs épitopes différents.",
        "correct": true,
        "explanation": "Plusieurs clones lymphocytaires peuvent donc reconnaître un même antigène."
      },
      {
        "content": "Les antigènes reconnus peuvent être de nature chimique variée.",
        "correct": true,
        "explanation": "Protéines, glycoconjugués ou autres structures peuvent porter des épitopes."
      },
      {
        "content": "Une immunoglobuline reconnaît obligatoirement l'intégralité d'un antigène.",
        "correct": false,
        "explanation": "La reconnaissance porte sur un épitope."
      },
      {
        "content": "Les immunoglobulines appartiennent à l'immunité innée exclusivement.",
        "correct": false,
        "explanation": "Elles sont des effecteurs majeurs de l'immunité adaptative."
      },
      {
        "content": "Ce sont des glycoprotéines de la réponse immunitaire adaptative.",
        "correct": true,
        "explanation": "Les anticorps appartiennent à la famille des immunoglobulines."
      }
    ],
    "explanation": "Une immunoglobuline reconnaît un épitope précis porté par un antigène."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un domaine d'immunoglobuline est un module d'environ une centaine de résidus.",
        "correct": true,
        "explanation": "La longueur exacte varie selon le type de domaine."
      },
      {
        "content": "Les quatre chaînes sont reliées uniquement par des liaisons peptidiques continues.",
        "correct": false,
        "explanation": "Les chaînes distinctes sont notamment associées par des ponts disulfure."
      },
      {
        "content": "Les deux chaînes lourdes d'une même molécule sont de même classe.",
        "correct": true,
        "explanation": "La classe d'Ig est définie par la nature de la chaîne lourde."
      },
      {
        "content": "Les chaînes sont reliées par des ponts disulfure.",
        "correct": true,
        "explanation": "Des liaisons S–S stabilisent l'assemblage."
      },
      {
        "content": "Une immunoglobuline ne comporte aucune région variable.",
        "correct": false,
        "explanation": "Les régions variables sont essentielles à la reconnaissance antigénique."
      },
      {
        "content": "Un pont disulfure intradomaine stabilise de nombreux domaines d'Ig.",
        "correct": true,
        "explanation": "Des cystéines conservées participent à cette stabilisation."
      },
      {
        "content": "L'unité de base comporte trois chaînes lourdes et une légère.",
        "correct": false,
        "explanation": "La structure de base est H2L2."
      },
      {
        "content": "Le repliement immunoglobuline est une unique hélice alpha.",
        "correct": false,
        "explanation": "Il s'agit d'un sandwich bêta."
      },
      {
        "content": "Le repliement immunoglobuline est un sandwich bêta.",
        "correct": true,
        "explanation": "Il comprend typiquement 7 à 9 brins bêta répartis en deux feuillets."
      },
      {
        "content": "Un domaine d'Ig est formé de sept domaines bêta distincts.",
        "correct": false,
        "explanation": "Il s'agit de brins bêta organisés en feuillets, pas de sept domaines."
      }
    ],
    "explanation": "L'unité de base d'une immunoglobuline est H2L2 : deux chaînes lourdes et deux chaînes légères. Un domaine d'immunoglobuline est un module compact en sandwich bêta, et non une succession de « domaines bêta »."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant les classes d'immunoglobulines humaines, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "IgA possède une chaîne lourde alpha.",
        "correct": true,
        "explanation": "La chaîne α définit IgA."
      },
      {
        "content": "IgE est définie par une chaîne lourde bêta.",
        "correct": false,
        "explanation": "IgE possède une chaîne lourde ε."
      },
      {
        "content": "Les cinq grandes classes sont IgA, IgD, IgE, IgG et IgM.",
        "correct": true,
        "explanation": "Elles correspondent à cinq isotypes de chaînes lourdes."
      },
      {
        "content": "IgM possède une chaîne lourde mu.",
        "correct": true,
        "explanation": "La chaîne μ définit IgM."
      },
      {
        "content": "IgG possède une chaîne lourde gamma.",
        "correct": true,
        "explanation": "La chaîne γ définit IgG."
      }
    ],
    "explanation": "Les cinq classes IgA, IgD, IgE, IgG et IgM sont définies par leurs chaînes lourdes."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels sont les deux types de chaînes légères humaines ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "kappa et lambda",
        "κ et λ",
        "kappa/lambda"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les chaînes légères humaines sont κ ou λ ; la classe de l'Ig dépend en revanche de la chaîne lourde."
  }
];
