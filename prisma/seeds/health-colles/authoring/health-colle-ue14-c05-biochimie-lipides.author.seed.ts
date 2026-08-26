import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C05 — Biochimie — Lipides
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 */
export const UE14_COLLE_C05_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C05 — concernant acides gras, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:acides-gras"
    ],
    "choices": [
      {
        "content": "Un acide gras saturé possède obligatoirement plusieurs doubles liaisons cis.",
        "correct": false,
        "explanation": "Un acide gras saturé n’a pas de double liaison C=C."
      },
      {
        "content": "La série oméga d’un acide gras est déterminée en numérotant depuis le carbone carboxylique.",
        "correct": false,
        "explanation": "La nomenclature oméga compte depuis l’extrémité méthyle."
      },
      {
        "content": "Les acides gras sont des acides carboxyliques à chaîne hydrocarbonée.",
        "correct": true,
        "explanation": "Ils associent une fonction carboxylique hydrophile et une chaîne carbonée hydrophobe."
      },
      {
        "content": "Un triacylglycérol est un phospholipide contenant nécessairement un phosphate.",
        "correct": false,
        "explanation": "Il s’agit d’un triester du glycérol sans phosphate."
      },
      {
        "content": "Un acide gras saturé ne possède pas de double liaison C=C dans sa chaîne.",
        "correct": true,
        "explanation": "Saturé signifie absence de double liaison carbone-carbone."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de fonctions ester possède un triacylglycérol ?",
    "explanation": "Les trois hydroxyles du glycérol sont estérifiés.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    }
  },
  {
    "order": 3,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de acides gras ?",
    "explanation": "La géométrie cis limite l’empilement régulier.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:acides-gras"
    ],
    "choices": [
      {
        "content": "Les doubles liaisons cis introduisent généralement un coude dans la chaîne d’un acide gras.",
        "correct": true,
        "explanation": "La géométrie cis limite l’empilement régulier."
      },
      {
        "content": "Un céramide est formé de glycérol et de trois acides gras.",
        "correct": false,
        "explanation": "C’est la description d’un triacylglycérol ; le céramide associe sphingosine et acide gras."
      },
      {
        "content": "La sphingomyéline ne contient aucun azote.",
        "correct": false,
        "explanation": "La sphingosine et souvent la phosphocholine contiennent de l’azote."
      },
      {
        "content": "Le cholestérol est un triacylglycérol.",
        "correct": false,
        "explanation": "C’est un stérol à noyau stérane."
      },
      {
        "content": "Le cortisol est un acide gras polyinsaturé.",
        "correct": false,
        "explanation": "Le cortisol est une hormone stéroïde."
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
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Les doubles liaisons cis introduisent généralement un coude dans la chaîne d’un acide gras.",
        "correct": true,
        "explanation": "La géométrie cis limite l’empilement régulier."
      },
      {
        "content": "L’acide linoléique est un acide gras essentiel de la série n-6.",
        "correct": true,
        "explanation": "L’humain ne synthétise pas les doubles liaisons nécessaires à sa production de novo."
      },
      {
        "content": "Les leucotriènes sont synthétisés principalement par les cyclo-oxygénases.",
        "correct": false,
        "explanation": "Ils dérivent des lipoxygénases."
      },
      {
        "content": "Les eicosanoïdes sont stockés en grande quantité dans des vésicules avant leur libération.",
        "correct": false,
        "explanation": "Ils sont généralement synthétisés à la demande à partir de précurseurs lipidiques."
      },
      {
        "content": "La phospholipase A2 coupe la liaison phosphodiester entre phosphate et tête polaire.",
        "correct": false,
        "explanation": "Elle hydrolyse l’ester acyle en sn-2."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Colle C05 — concernant acides gras, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:acides-gras"
    ],
    "choices": [
      {
        "content": "L’acide α-linolénique est un acide gras essentiel de la série n-3.",
        "correct": true,
        "explanation": "Il constitue un précurseur de la famille n-3."
      },
      {
        "content": "Les eicosanoïdes sont stockés en grande quantité dans des vésicules avant leur libération.",
        "correct": false,
        "explanation": "Ils sont généralement synthétisés à la demande à partir de précurseurs lipidiques."
      },
      {
        "content": "Un céramide est formé de glycérol et de trois acides gras.",
        "correct": false,
        "explanation": "C’est la description d’un triacylglycérol ; le céramide associe sphingosine et acide gras."
      },
      {
        "content": "L’acide linoléique est un acide gras essentiel de la série n-6.",
        "correct": true,
        "explanation": "L’humain ne synthétise pas les doubles liaisons nécessaires à sa production de novo."
      },
      {
        "content": "Les leucotriènes sont synthétisés principalement par les cyclo-oxygénases.",
        "correct": false,
        "explanation": "Ils dérivent des lipoxygénases."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle phospholipase libère classiquement l’acide gras en position sn-2 d’un glycérophospholipide ?",
    "explanation": "La PLA2 hydrolyse l’ester en sn-2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "phospholipase A2",
        "PLA2",
        "PLA₂"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 7,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de acides gras ?",
    "explanation": "L’humain ne synthétise pas les doubles liaisons nécessaires à sa production de novo.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:acides-gras"
    ],
    "choices": [
      {
        "content": "Le cortisol est un acide gras polyinsaturé.",
        "correct": false,
        "explanation": "Le cortisol est une hormone stéroïde."
      },
      {
        "content": "L’acide linoléique est un acide gras essentiel de la série n-6.",
        "correct": true,
        "explanation": "L’humain ne synthétise pas les doubles liaisons nécessaires à sa production de novo."
      },
      {
        "content": "Les esters de cholestérol sont plus amphiphiles que le cholestérol libre grâce à un OH libre supplémentaire.",
        "correct": false,
        "explanation": "L’estérification masque le OH et augmente l’hydrophobicité."
      },
      {
        "content": "L’acide arachidonique est un monosaccharide.",
        "correct": false,
        "explanation": "C’est un acide gras polyinsaturé."
      },
      {
        "content": "Un acide gras saturé possède obligatoirement plusieurs doubles liaisons cis.",
        "correct": false,
        "explanation": "Un acide gras saturé n’a pas de double liaison C=C."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biochimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Un céramide est formé de glycérol et de trois acides gras.",
        "correct": false,
        "explanation": "C’est la description d’un triacylglycérol ; le céramide associe sphingosine et acide gras."
      },
      {
        "content": "Le cholestérol est un triacylglycérol.",
        "correct": false,
        "explanation": "C’est un stérol à noyau stérane."
      },
      {
        "content": "Un triacylglycérol est formé par estérification des trois hydroxyles du glycérol par des acides gras.",
        "correct": true,
        "explanation": "Il comporte trois fonctions ester."
      },
      {
        "content": "L’acide α-linolénique est un acide gras essentiel de la série n-3.",
        "correct": true,
        "explanation": "Il constitue un précurseur de la famille n-3."
      },
      {
        "content": "La sphingomyéline ne contient aucun azote.",
        "correct": false,
        "explanation": "La sphingosine et souvent la phosphocholine contiennent de l’azote."
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
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "L’acide arachidonique est un précurseur majeur d’eicosanoïdes.",
        "correct": true,
        "explanation": "Il peut être libéré des phospholipides puis métabolisé par COX/LOX."
      },
      {
        "content": "La sphingomyéline ne contient aucun azote.",
        "correct": false,
        "explanation": "La sphingosine et souvent la phosphocholine contiennent de l’azote."
      },
      {
        "content": "Les triacylglycérols constituent une forme majeure de réserve énergétique.",
        "correct": true,
        "explanation": "Ils sont stockés notamment dans les adipocytes."
      },
      {
        "content": "Le cortisol est un acide gras polyinsaturé.",
        "correct": false,
        "explanation": "Le cortisol est une hormone stéroïde."
      },
      {
        "content": "Un céramide est formé de glycérol et de trois acides gras.",
        "correct": false,
        "explanation": "C’est la description d’un triacylglycérol ; le céramide associe sphingosine et acide gras."
      },
      {
        "content": "Le cholestérol est un triacylglycérol.",
        "correct": false,
        "explanation": "C’est un stérol à noyau stérane."
      },
      {
        "content": "Les leucotriènes sont synthétisés principalement par les cyclo-oxygénases.",
        "correct": false,
        "explanation": "Ils dérivent des lipoxygénases."
      },
      {
        "content": "La phospholipase A2 hydrolyse l’acide gras en position sn-2 des glycérophospholipides.",
        "correct": true,
        "explanation": "Cette position porte souvent un acide gras polyinsaturé comme l’arachidonate."
      },
      {
        "content": "Un triacylglycérol est formé par estérification des trois hydroxyles du glycérol par des acides gras.",
        "correct": true,
        "explanation": "Il comporte trois fonctions ester."
      },
      {
        "content": "Un glycérophospholipide comporte un squelette glycérol, deux chaînes hydrophobes et un phosphate.",
        "correct": true,
        "explanation": "Le phosphate porte la tête polaire avec un alcool substituant."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Colle C05 — concernant sterides, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:sterides"
    ],
    "choices": [
      {
        "content": "Les esters de cholestérol sont plus amphiphiles que le cholestérol libre grâce à un OH libre supplémentaire.",
        "correct": false,
        "explanation": "L’estérification masque le OH et augmente l’hydrophobicité."
      },
      {
        "content": "Le cortisol est un acide gras polyinsaturé.",
        "correct": false,
        "explanation": "Le cortisol est une hormone stéroïde."
      },
      {
        "content": "Les triacylglycérols constituent une forme majeure de réserve énergétique.",
        "correct": true,
        "explanation": "Ils sont stockés notamment dans les adipocytes."
      },
      {
        "content": "Le cholestérol est un triacylglycérol.",
        "correct": false,
        "explanation": "C’est un stérol à noyau stérane."
      },
      {
        "content": "Un glycérophospholipide comporte un squelette glycérol, deux chaînes hydrophobes et un phosphate.",
        "correct": true,
        "explanation": "Le phosphate porte la tête polaire avec un alcool substituant."
      }
    ]
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel lipide simple associe sphingosine et acide gras par une liaison amide ?",
    "explanation": "Le céramide constitue le noyau de nombreux sphingolipides.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "céramide",
        "ceramide"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de acides gras ?",
    "explanation": "Il constitue un précurseur de la famille n-3.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:acides-gras"
    ],
    "choices": [
      {
        "content": "Un acide gras saturé possède obligatoirement plusieurs doubles liaisons cis.",
        "correct": false,
        "explanation": "Un acide gras saturé n’a pas de double liaison C=C."
      },
      {
        "content": "La série oméga d’un acide gras est déterminée en numérotant depuis le carbone carboxylique.",
        "correct": false,
        "explanation": "La nomenclature oméga compte depuis l’extrémité méthyle."
      },
      {
        "content": "L’acide α-linolénique est un acide gras essentiel de la série n-3.",
        "correct": true,
        "explanation": "Il constitue un précurseur de la famille n-3."
      },
      {
        "content": "Un triacylglycérol est un phospholipide contenant nécessairement un phosphate.",
        "correct": false,
        "explanation": "Il s’agit d’un triester du glycérol sans phosphate."
      },
      {
        "content": "La phospholipase A2 coupe la liaison phosphodiester entre phosphate et tête polaire.",
        "correct": false,
        "explanation": "Elle hydrolyse l’ester acyle en sn-2."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biochimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "L’acide arachidonique est un monosaccharide.",
        "correct": false,
        "explanation": "C’est un acide gras polyinsaturé."
      },
      {
        "content": "Un glycérophospholipide comporte un squelette glycérol, deux chaînes hydrophobes et un phosphate.",
        "correct": true,
        "explanation": "Le phosphate porte la tête polaire avec un alcool substituant."
      },
      {
        "content": "Les triacylglycérols constituent une forme majeure de réserve énergétique.",
        "correct": true,
        "explanation": "Ils sont stockés notamment dans les adipocytes."
      },
      {
        "content": "Les esters de cholestérol sont plus amphiphiles que le cholestérol libre grâce à un OH libre supplémentaire.",
        "correct": false,
        "explanation": "L’estérification masque le OH et augmente l’hydrophobicité."
      },
      {
        "content": "Le cortisol est un acide gras polyinsaturé.",
        "correct": false,
        "explanation": "Le cortisol est une hormone stéroïde."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Colle C05 — concernant acides gras, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:acides-gras"
    ],
    "choices": [
      {
        "content": "Un acide gras saturé possède obligatoirement plusieurs doubles liaisons cis.",
        "correct": false,
        "explanation": "Un acide gras saturé n’a pas de double liaison C=C."
      },
      {
        "content": "La série oméga d’un acide gras est déterminée en numérotant depuis le carbone carboxylique.",
        "correct": false,
        "explanation": "La nomenclature oméga compte depuis l’extrémité méthyle."
      },
      {
        "content": "Un triacylglycérol est un phospholipide contenant nécessairement un phosphate.",
        "correct": false,
        "explanation": "Il s’agit d’un triester du glycérol sans phosphate."
      },
      {
        "content": "L’acide arachidonique est un précurseur majeur d’eicosanoïdes.",
        "correct": true,
        "explanation": "Il peut être libéré des phospholipides puis métabolisé par COX/LOX."
      },
      {
        "content": "Les cyclo-oxygénases participent à la formation de prostanoïdes à partir de l’acide arachidonique.",
        "correct": true,
        "explanation": "Elles conduisent aux précurseurs des prostaglandines, prostacycline et thromboxanes."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel stérol est le précurseur des hormones stéroïdes chez l’humain ?",
    "explanation": "Les hormones stéroïdes dérivent du cholestérol.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cholestérol",
        "cholesterol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de triacylglycerols ?",
    "explanation": "Il comporte trois fonctions ester.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:triacylglycerols"
    ],
    "choices": [
      {
        "content": "La phospholipase A2 coupe la liaison phosphodiester entre phosphate et tête polaire.",
        "correct": false,
        "explanation": "Elle hydrolyse l’ester acyle en sn-2."
      },
      {
        "content": "Les eicosanoïdes sont stockés en grande quantité dans des vésicules avant leur libération.",
        "correct": false,
        "explanation": "Ils sont généralement synthétisés à la demande à partir de précurseurs lipidiques."
      },
      {
        "content": "Les leucotriènes sont synthétisés principalement par les cyclo-oxygénases.",
        "correct": false,
        "explanation": "Ils dérivent des lipoxygénases."
      },
      {
        "content": "Un triacylglycérol est formé par estérification des trois hydroxyles du glycérol par des acides gras.",
        "correct": true,
        "explanation": "Il comporte trois fonctions ester."
      },
      {
        "content": "Un céramide est formé de glycérol et de trois acides gras.",
        "correct": false,
        "explanation": "C’est la description d’un triacylglycérol ; le céramide associe sphingosine et acide gras."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biochimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "L’acide arachidonique est un précurseur majeur d’eicosanoïdes.",
        "correct": true,
        "explanation": "Il peut être libéré des phospholipides puis métabolisé par COX/LOX."
      },
      {
        "content": "La phospholipase A2 hydrolyse l’acide gras en position sn-2 des glycérophospholipides.",
        "correct": true,
        "explanation": "Cette position porte souvent un acide gras polyinsaturé comme l’arachidonate."
      },
      {
        "content": "Un acide gras saturé possède obligatoirement plusieurs doubles liaisons cis.",
        "correct": false,
        "explanation": "Un acide gras saturé n’a pas de double liaison C=C."
      },
      {
        "content": "La série oméga d’un acide gras est déterminée en numérotant depuis le carbone carboxylique.",
        "correct": false,
        "explanation": "La nomenclature oméga compte depuis l’extrémité méthyle."
      },
      {
        "content": "Un triacylglycérol est un phospholipide contenant nécessairement un phosphate.",
        "correct": false,
        "explanation": "Il s’agit d’un triester du glycérol sans phosphate."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Colle C05 — concernant sphingolipides, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:sphingolipides"
    ],
    "choices": [
      {
        "content": "La sphingomyéline contient un groupement phosphocholine ou phosphoéthanolamine selon l’espèce.",
        "correct": true,
        "explanation": "Chez les mammifères, la phosphocholine est classique."
      },
      {
        "content": "Les leucotriènes sont synthétisés principalement par les cyclo-oxygénases.",
        "correct": false,
        "explanation": "Ils dérivent des lipoxygénases."
      },
      {
        "content": "La sphingosine est un aminoalcool à longue chaîne.",
        "correct": true,
        "explanation": "Elle constitue le squelette de nombreux sphingolipides."
      },
      {
        "content": "Les eicosanoïdes sont stockés en grande quantité dans des vésicules avant leur libération.",
        "correct": false,
        "explanation": "Ils sont généralement synthétisés à la demande à partir de précurseurs lipidiques."
      },
      {
        "content": "Un céramide associe une sphingosine et un acide gras lié par une liaison amide.",
        "correct": true,
        "explanation": "Le céramide est le noyau de nombreux sphingolipides complexes."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À quelle série oméga appartient l’acide α-linolénique ?",
    "explanation": "L’acide α-linolénique est un acide gras essentiel n-3.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "oméga-3",
        "omega-3",
        "n-3",
        "ω-3"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 20,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de triacylglycerols ?",
    "explanation": "Ils sont stockés notamment dans les adipocytes.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:triacylglycerols"
    ],
    "choices": [
      {
        "content": "Un céramide est formé de glycérol et de trois acides gras.",
        "correct": false,
        "explanation": "C’est la description d’un triacylglycérol ; le céramide associe sphingosine et acide gras."
      },
      {
        "content": "La sphingomyéline ne contient aucun azote.",
        "correct": false,
        "explanation": "La sphingosine et souvent la phosphocholine contiennent de l’azote."
      },
      {
        "content": "Le cholestérol est un triacylglycérol.",
        "correct": false,
        "explanation": "C’est un stérol à noyau stérane."
      },
      {
        "content": "Le cortisol est un acide gras polyinsaturé.",
        "correct": false,
        "explanation": "Le cortisol est une hormone stéroïde."
      },
      {
        "content": "Les triacylglycérols constituent une forme majeure de réserve énergétique.",
        "correct": true,
        "explanation": "Ils sont stockés notamment dans les adipocytes."
      }
    ]
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C05 — concernant sterides, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:sterides"
    ],
    "choices": [
      {
        "content": "Les esters de cholestérol résultent de l’estérification du groupe hydroxyle du cholestérol par un acide gras.",
        "correct": true,
        "explanation": "Ils sont plus hydrophobes que le cholestérol libre."
      },
      {
        "content": "Le cholestérol est un triacylglycérol.",
        "correct": false,
        "explanation": "C’est un stérol à noyau stérane."
      },
      {
        "content": "Le cortisol est un acide gras polyinsaturé.",
        "correct": false,
        "explanation": "Le cortisol est une hormone stéroïde."
      },
      {
        "content": "Le cholestérol possède un noyau stérane.",
        "correct": true,
        "explanation": "Il appartient aux stérols."
      },
      {
        "content": "Le cholestérol est un précurseur des hormones stéroïdes.",
        "correct": true,
        "explanation": "Les stéroïdes hormonaux dérivent du cholestérol."
      }
    ]
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Colle C05 — concernant acides gras, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:acides-gras"
    ],
    "choices": [
      {
        "content": "La série oméga d’un acide gras est déterminée en numérotant depuis le carbone carboxylique.",
        "correct": false,
        "explanation": "La nomenclature oméga compte depuis l’extrémité méthyle."
      },
      {
        "content": "Un acide gras saturé ne possède pas de double liaison C=C dans sa chaîne.",
        "correct": true,
        "explanation": "Saturé signifie absence de double liaison carbone-carbone."
      },
      {
        "content": "Les doubles liaisons cis introduisent généralement un coude dans la chaîne d’un acide gras.",
        "correct": true,
        "explanation": "La géométrie cis limite l’empilement régulier."
      },
      {
        "content": "Les acides gras sont des acides carboxyliques à chaîne hydrocarbonée.",
        "correct": true,
        "explanation": "Ils associent une fonction carboxylique hydrophile et une chaîne carbonée hydrophobe."
      },
      {
        "content": "Un acide gras saturé possède obligatoirement plusieurs doubles liaisons cis.",
        "correct": false,
        "explanation": "Un acide gras saturé n’a pas de double liaison C=C."
      }
    ]
  },
  {
    "order": 23,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C05 — concernant eicosanoides, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:eicosanoides"
    ],
    "choices": [
      {
        "content": "Les eicosanoïdes sont stockés en grande quantité dans des vésicules avant leur libération.",
        "correct": false,
        "explanation": "Ils sont généralement synthétisés à la demande à partir de précurseurs lipidiques."
      },
      {
        "content": "Un triacylglycérol est formé par estérification des trois hydroxyles du glycérol par des acides gras.",
        "correct": true,
        "explanation": "Il comporte trois fonctions ester."
      },
      {
        "content": "Les triacylglycérols constituent une forme majeure de réserve énergétique.",
        "correct": true,
        "explanation": "Ils sont stockés notamment dans les adipocytes."
      },
      {
        "content": "L’acide α-linolénique est un acide gras essentiel de la série n-3.",
        "correct": true,
        "explanation": "Il constitue un précurseur de la famille n-3."
      },
      {
        "content": "L’acide linoléique est un acide gras essentiel de la série n-6.",
        "correct": true,
        "explanation": "L’humain ne synthétise pas les doubles liaisons nécessaires à sa production de novo."
      }
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sélectionnez le groupement phosphate du phospholipide.",
    "explanation": "La zone attendue correspond à : Groupement phosphate.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:qzone"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c05/phospholipid-phosphate-qzone.svg",
      "alt": "Glycérophospholipide schématique",
      "width": 960,
      "height": 560
    },
    "expectedZones": [
      {
        "id": "target",
        "label": "Groupement phosphate",
        "x": 0.54,
        "y": 0.3,
        "tolerance": 0.08
      }
    ],
    "defaultTolerance": 0.08
  },
  {
    "order": 25,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C05 — concernant eicosanoides, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:eicosanoides"
    ],
    "choices": [
      {
        "content": "L’acide arachidonique est un précurseur majeur d’eicosanoïdes.",
        "correct": true,
        "explanation": "Il peut être libéré des phospholipides puis métabolisé par COX/LOX."
      },
      {
        "content": "Les triacylglycérols constituent une forme majeure de réserve énergétique.",
        "correct": true,
        "explanation": "Ils sont stockés notamment dans les adipocytes."
      },
      {
        "content": "Un glycérophospholipide comporte un squelette glycérol, deux chaînes hydrophobes et un phosphate.",
        "correct": true,
        "explanation": "Le phosphate porte la tête polaire avec un alcool substituant."
      },
      {
        "content": "La phospholipase A2 hydrolyse l’acide gras en position sn-2 des glycérophospholipides.",
        "correct": true,
        "explanation": "Cette position porte souvent un acide gras polyinsaturé comme l’arachidonate."
      },
      {
        "content": "Le cholestérol est un triacylglycérol.",
        "correct": false,
        "explanation": "C’est un stérol à noyau stérane."
      }
    ]
  }
];
