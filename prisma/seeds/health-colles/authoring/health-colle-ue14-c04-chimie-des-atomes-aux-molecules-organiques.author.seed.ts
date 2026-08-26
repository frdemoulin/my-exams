import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C04 — Chimie — Des atomes aux molécules organiques
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 */
export const UE14_COLLE_C04_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C04 — concernant valence, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:valence"
    ],
    "choices": [
      {
        "content": "Le carbone est tétravalent dans les représentations organiques usuelles.",
        "correct": true,
        "explanation": "Il forme typiquement quatre liaisons covalentes en respectant l’octet."
      },
      {
        "content": "Le carbone d’un alcène est obligatoirement sp3.",
        "correct": false,
        "explanation": "Les carbones de la double liaison sont classiquement sp2."
      },
      {
        "content": "Un alcool et un éther sont nécessairement des isomères optiques.",
        "correct": false,
        "explanation": "Ils peuvent être isomères de fonction si leur formule brute coïncide, mais pas nécessairement optiques."
      },
      {
        "content": "Une formule brute renseigne sur la nature et le nombre des atomes mais pas sur leur enchaînement.",
        "correct": true,
        "explanation": "Des isomères de constitution peuvent partager une même formule brute."
      },
      {
        "content": "Une formule brute impose une unique structure développée.",
        "correct": false,
        "explanation": "Plusieurs isomères peuvent partager la même formule brute."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de liaisons $\\pi$ comporte une triple liaison carbone-carbone ?",
    "explanation": "Une triple liaison comporte une liaison σ et deux liaisons π.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    }
  },
  {
    "order": 3,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de fonctions ?",
    "explanation": "Le motif caractéristique est C–OH hors cas particuliers comme les énols/phénols.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:fonctions"
    ],
    "choices": [
      {
        "content": "Un alcool comporte un groupe hydroxyle porté par un carbone saturé selon la classification usuelle.",
        "correct": true,
        "explanation": "Le motif caractéristique est C–OH hors cas particuliers comme les énols/phénols."
      },
      {
        "content": "Une cétone porte nécessairement le carbonyle en extrémité de chaîne avec un hydrogène.",
        "correct": false,
        "explanation": "C’est la description d’un aldéhyde."
      },
      {
        "content": "Un alcyne acyclique à une triple liaison suit la formule générale CnH2n+2.",
        "correct": false,
        "explanation": "Pour un monoalcyne acyclique, la formule générale est CnH2n−2."
      },
      {
        "content": "Deux énantiomères sont superposables après une simple rotation dans l’espace.",
        "correct": false,
        "explanation": "Ils sont non superposables."
      },
      {
        "content": "Un carbone portant deux substituants identiques est un centre stéréogène tétraédrique classique.",
        "correct": false,
        "explanation": "Quatre substituants différents sont requis."
      }
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de chimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Une triple liaison C≡C est constituée de trois liaisons sigma.",
        "correct": false,
        "explanation": "Elle comporte une liaison σ et deux liaisons π."
      },
      {
        "content": "La rotation autour d’une double liaison C=C est libre comme autour d’une liaison simple.",
        "correct": false,
        "explanation": "La rotation romprait le recouvrement π."
      },
      {
        "content": "Un alcool comporte un groupe hydroxyle porté par un carbone saturé selon la classification usuelle.",
        "correct": true,
        "explanation": "Le motif caractéristique est C–OH hors cas particuliers comme les énols/phénols."
      },
      {
        "content": "Le terme correct pour la géométrie sp est « diagonale ».",
        "correct": false,
        "explanation": "Le terme attendu est digonale/linéaire."
      },
      {
        "content": "Un éther-oxyde présente un motif C–O–C.",
        "correct": true,
        "explanation": "L’oxygène relie deux groupes carbonés."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Colle C04 — concernant fonctions, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:fonctions"
    ],
    "choices": [
      {
        "content": "Un éther-oxyde présente un motif C–O–C.",
        "correct": true,
        "explanation": "L’oxygène relie deux groupes carbonés."
      },
      {
        "content": "Une triple liaison C≡C est constituée de trois liaisons sigma.",
        "correct": false,
        "explanation": "Elle comporte une liaison σ et deux liaisons π."
      },
      {
        "content": "La rotation autour d’une double liaison C=C est libre comme autour d’une liaison simple.",
        "correct": false,
        "explanation": "La rotation romprait le recouvrement π."
      },
      {
        "content": "Une cétone porte nécessairement le carbonyle en extrémité de chaîne avec un hydrogène.",
        "correct": false,
        "explanation": "C’est la description d’un aldéhyde."
      },
      {
        "content": "Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène.",
        "correct": true,
        "explanation": "Le motif est R–CHO."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est l’état d’hybridation classique d’un carbone engagé dans une double liaison C=C ?",
    "explanation": "Un carbone alcénique est classiquement sp2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sp2",
        "sp²"
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
    "question": "Quelle proposition est exacte à propos de fonctions ?",
    "explanation": "L’oxygène relie deux groupes carbonés.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:fonctions"
    ],
    "choices": [
      {
        "content": "Un carbone portant deux substituants identiques est un centre stéréogène tétraédrique classique.",
        "correct": false,
        "explanation": "Quatre substituants différents sont requis."
      },
      {
        "content": "Un éther-oxyde présente un motif C–O–C.",
        "correct": true,
        "explanation": "L’oxygène relie deux groupes carbonés."
      },
      {
        "content": "La règle de Markovnikov décrit une géométrie VSEPR.",
        "correct": false,
        "explanation": "Elle concerne la régiosélectivité d’additions sur des alcènes dissymétriques."
      },
      {
        "content": "Une formule brute impose une unique structure développée.",
        "correct": false,
        "explanation": "Plusieurs isomères peuvent partager la même formule brute."
      },
      {
        "content": "Un alcool et un éther sont nécessairement des isomères optiques.",
        "correct": false,
        "explanation": "Ils peuvent être isomères de fonction si leur formule brute coïncide, mais pas nécessairement optiques."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de chimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Une cétone porte nécessairement le carbonyle en extrémité de chaîne avec un hydrogène.",
        "correct": false,
        "explanation": "C’est la description d’un aldéhyde."
      },
      {
        "content": "Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène.",
        "correct": true,
        "explanation": "Le motif est R–CHO."
      },
      {
        "content": "Un alcyne acyclique à une triple liaison suit la formule générale CnH2n+2.",
        "correct": false,
        "explanation": "Pour un monoalcyne acyclique, la formule générale est CnH2n−2."
      },
      {
        "content": "Une cétone possède un groupe carbonyle lié à deux groupes carbonés.",
        "correct": true,
        "explanation": "Le motif est R–CO–R’."
      },
      {
        "content": "Deux énantiomères sont superposables après une simple rotation dans l’espace.",
        "correct": false,
        "explanation": "Ils sont non superposables."
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
      "colle:C04",
      "ec:CHIMIE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "Un alcyne comporte au moins une triple liaison C≡C.",
        "correct": true,
        "explanation": "La triple liaison définit la fonction alcyne."
      },
      {
        "content": "Le carbone d’une double liaison C=C est classiquement sp2.",
        "correct": true,
        "explanation": "Il adopte une géométrie trigonale plane et conserve une orbitale p."
      },
      {
        "content": "Un alcyne acyclique à une triple liaison suit la formule générale CnH2n+2.",
        "correct": false,
        "explanation": "Pour un monoalcyne acyclique, la formule générale est CnH2n−2."
      },
      {
        "content": "Un carbone portant deux substituants identiques est un centre stéréogène tétraédrique classique.",
        "correct": false,
        "explanation": "Quatre substituants différents sont requis."
      },
      {
        "content": "Un alcène comporte au moins une double liaison C=C.",
        "correct": true,
        "explanation": "La double liaison définit la fonction alcène."
      },
      {
        "content": "Une cétone possède un groupe carbonyle lié à deux groupes carbonés.",
        "correct": true,
        "explanation": "Le motif est R–CO–R’."
      },
      {
        "content": "Une cétone porte nécessairement le carbonyle en extrémité de chaîne avec un hydrogène.",
        "correct": false,
        "explanation": "C’est la description d’un aldéhyde."
      },
      {
        "content": "Deux énantiomères sont superposables après une simple rotation dans l’espace.",
        "correct": false,
        "explanation": "Ils sont non superposables."
      },
      {
        "content": "Un alcane acyclique saturé suit la formule générale CnH2n+2.",
        "correct": true,
        "explanation": "Cette formule s’applique aux alcanes acycliques non substitués."
      },
      {
        "content": "La rotation autour d’une double liaison C=C est libre comme autour d’une liaison simple.",
        "correct": false,
        "explanation": "La rotation romprait le recouvrement π."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Colle C04 — concernant reactivite alcenes, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:reactivite-alcenes"
    ],
    "choices": [
      {
        "content": "La règle de Markovnikov décrit une géométrie VSEPR.",
        "correct": false,
        "explanation": "Elle concerne la régiosélectivité d’additions sur des alcènes dissymétriques."
      },
      {
        "content": "Un alcène comporte au moins une double liaison C=C.",
        "correct": true,
        "explanation": "La double liaison définit la fonction alcène."
      },
      {
        "content": "Un carbone portant deux substituants identiques est un centre stéréogène tétraédrique classique.",
        "correct": false,
        "explanation": "Quatre substituants différents sont requis."
      },
      {
        "content": "Un alcane acyclique saturé suit la formule générale CnH2n+2.",
        "correct": true,
        "explanation": "Cette formule s’applique aux alcanes acycliques non substitués."
      },
      {
        "content": "Deux énantiomères sont superposables après une simple rotation dans l’espace.",
        "correct": false,
        "explanation": "Ils sont non superposables."
      }
    ]
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel est l’état d’hybridation classique d’un carbone engagé dans une triple liaison C≡C ?",
    "explanation": "Un carbone alcynique est classiquement sp.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sp"
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
    "question": "Quelle proposition est exacte à propos de fonctions ?",
    "explanation": "Le motif est R–CHO.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:fonctions"
    ],
    "choices": [
      {
        "content": "Un alcool et un éther sont nécessairement des isomères optiques.",
        "correct": false,
        "explanation": "Ils peuvent être isomères de fonction si leur formule brute coïncide, mais pas nécessairement optiques."
      },
      {
        "content": "Le carbone d’un alcène est obligatoirement sp3.",
        "correct": false,
        "explanation": "Les carbones de la double liaison sont classiquement sp2."
      },
      {
        "content": "Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène.",
        "correct": true,
        "explanation": "Le motif est R–CHO."
      },
      {
        "content": "Le terme correct pour la géométrie sp est « diagonale ».",
        "correct": false,
        "explanation": "Le terme attendu est digonale/linéaire."
      },
      {
        "content": "Une triple liaison C≡C est constituée de trois liaisons sigma.",
        "correct": false,
        "explanation": "Elle comporte une liaison σ et deux liaisons π."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de chimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Une formule brute impose une unique structure développée.",
        "correct": false,
        "explanation": "Plusieurs isomères peuvent partager la même formule brute."
      },
      {
        "content": "Un alcane acyclique saturé suit la formule générale CnH2n+2.",
        "correct": true,
        "explanation": "Cette formule s’applique aux alcanes acycliques non substitués."
      },
      {
        "content": "Un carbone portant deux substituants identiques est un centre stéréogène tétraédrique classique.",
        "correct": false,
        "explanation": "Quatre substituants différents sont requis."
      },
      {
        "content": "Un alcène comporte au moins une double liaison C=C.",
        "correct": true,
        "explanation": "La double liaison définit la fonction alcène."
      },
      {
        "content": "La règle de Markovnikov décrit une géométrie VSEPR.",
        "correct": false,
        "explanation": "Elle concerne la régiosélectivité d’additions sur des alcènes dissymétriques."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Colle C04 — concernant hybridation, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:hybridation"
    ],
    "choices": [
      {
        "content": "Le terme correct pour la géométrie sp est « diagonale ».",
        "correct": false,
        "explanation": "Le terme attendu est digonale/linéaire."
      },
      {
        "content": "Un alcool et un éther sont nécessairement des isomères optiques.",
        "correct": false,
        "explanation": "Ils peuvent être isomères de fonction si leur formule brute coïncide, mais pas nécessairement optiques."
      },
      {
        "content": "Le carbone d’une double liaison C=C est classiquement sp2.",
        "correct": true,
        "explanation": "Il adopte une géométrie trigonale plane et conserve une orbitale p."
      },
      {
        "content": "Le carbone d’une triple liaison C≡C est classiquement sp.",
        "correct": true,
        "explanation": "Deux domaines hybridés sp conduisent à une géométrie linéaire."
      },
      {
        "content": "Le carbone d’un alcène est obligatoirement sp3.",
        "correct": false,
        "explanation": "Les carbones de la double liaison sont classiquement sp2."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel terme géométrique correct désigne la disposition à 180° associée à une hybridation sp ?",
    "explanation": "La géométrie est digonale, couramment dite linéaire ; « diagonale » est incorrect.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "digonale",
        "linéaire",
        "lineaire"
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
    "question": "Quelle proposition est exacte à propos de fonctions ?",
    "explanation": "Le motif est R–CO–R’.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:fonctions"
    ],
    "choices": [
      {
        "content": "Une triple liaison C≡C est constituée de trois liaisons sigma.",
        "correct": false,
        "explanation": "Elle comporte une liaison σ et deux liaisons π."
      },
      {
        "content": "La rotation autour d’une double liaison C=C est libre comme autour d’une liaison simple.",
        "correct": false,
        "explanation": "La rotation romprait le recouvrement π."
      },
      {
        "content": "Une cétone porte nécessairement le carbonyle en extrémité de chaîne avec un hydrogène.",
        "correct": false,
        "explanation": "C’est la description d’un aldéhyde."
      },
      {
        "content": "Une cétone possède un groupe carbonyle lié à deux groupes carbonés.",
        "correct": true,
        "explanation": "Le motif est R–CO–R’."
      },
      {
        "content": "Un alcyne acyclique à une triple liaison suit la formule générale CnH2n+2.",
        "correct": false,
        "explanation": "Pour un monoalcyne acyclique, la formule générale est CnH2n−2."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de chimie.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Un alcyne comporte au moins une triple liaison C≡C.",
        "correct": true,
        "explanation": "La triple liaison définit la fonction alcyne."
      },
      {
        "content": "Un alcool et un éther sont nécessairement des isomères optiques.",
        "correct": false,
        "explanation": "Ils peuvent être isomères de fonction si leur formule brute coïncide, mais pas nécessairement optiques."
      },
      {
        "content": "Le carbone d’un alcène est obligatoirement sp3.",
        "correct": false,
        "explanation": "Les carbones de la double liaison sont classiquement sp2."
      },
      {
        "content": "Le terme correct pour la géométrie sp est « diagonale ».",
        "correct": false,
        "explanation": "Le terme attendu est digonale/linéaire."
      },
      {
        "content": "Le carbone d’une double liaison C=C est classiquement sp2.",
        "correct": true,
        "explanation": "Il adopte une géométrie trigonale plane et conserve une orbitale p."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Colle C04 — concernant stereoisomerie, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:stereoisomerie"
    ],
    "choices": [
      {
        "content": "Deux énantiomères possèdent les mêmes propriétés dans un environnement achiral, sauf notamment le sens de rotation optique.",
        "correct": true,
        "explanation": "Ils diffèrent dans leurs interactions avec des environnements chiraux."
      },
      {
        "content": "L’addition de HX sur un alcène dissymétrique peut suivre la régiosélectivité de Markovnikov dans les conditions usuelles.",
        "correct": true,
        "explanation": "Le proton et l’halogénure s’ajoutent selon la stabilité relative de l’intermédiaire dans le mécanisme ionique usuel."
      },
      {
        "content": "Un carbone tétraédrique portant quatre substituants différents est un centre stéréogène classique.",
        "correct": true,
        "explanation": "Il peut engendrer une paire d’énantiomères si aucune autre symétrie ne l’annule."
      },
      {
        "content": "Une cétone porte nécessairement le carbonyle en extrémité de chaîne avec un hydrogène.",
        "correct": false,
        "explanation": "C’est la description d’un aldéhyde."
      },
      {
        "content": "La rotation autour d’une double liaison C=C est libre comme autour d’une liaison simple.",
        "correct": false,
        "explanation": "La rotation romprait le recouvrement π."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de substituants différents doit porter un carbone tétraédrique pour être un centre stéréogène classique ?",
    "explanation": "Quatre substituants différents sont requis.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    }
  },
  {
    "order": 20,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de hydrocarbures ?",
    "explanation": "Cette formule s’applique aux alcanes acycliques non substitués.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:hydrocarbures"
    ],
    "choices": [
      {
        "content": "Un alcyne acyclique à une triple liaison suit la formule générale CnH2n+2.",
        "correct": false,
        "explanation": "Pour un monoalcyne acyclique, la formule générale est CnH2n−2."
      },
      {
        "content": "Deux énantiomères sont superposables après une simple rotation dans l’espace.",
        "correct": false,
        "explanation": "Ils sont non superposables."
      },
      {
        "content": "Un carbone portant deux substituants identiques est un centre stéréogène tétraédrique classique.",
        "correct": false,
        "explanation": "Quatre substituants différents sont requis."
      },
      {
        "content": "La règle de Markovnikov décrit une géométrie VSEPR.",
        "correct": false,
        "explanation": "Elle concerne la régiosélectivité d’additions sur des alcènes dissymétriques."
      },
      {
        "content": "Un alcane acyclique saturé suit la formule générale CnH2n+2.",
        "correct": true,
        "explanation": "Cette formule s’applique aux alcanes acycliques non substitués."
      }
    ]
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C04 — concernant stereoisomerie, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:stereoisomerie"
    ],
    "choices": [
      {
        "content": "Un carbone portant deux substituants identiques est un centre stéréogène tétraédrique classique.",
        "correct": false,
        "explanation": "Quatre substituants différents sont requis."
      },
      {
        "content": "Une formule brute renseigne sur la nature et le nombre des atomes mais pas sur leur enchaînement.",
        "correct": true,
        "explanation": "Des isomères de constitution peuvent partager une même formule brute."
      },
      {
        "content": "La règle de Markovnikov décrit une géométrie VSEPR.",
        "correct": false,
        "explanation": "Elle concerne la régiosélectivité d’additions sur des alcènes dissymétriques."
      },
      {
        "content": "Une hydrogénation catalytique d’un alcène consomme H2 et conduit à un alcane.",
        "correct": true,
        "explanation": "La double liaison est réduite."
      },
      {
        "content": "La géométrie associée à l’hybridation sp est dite digonale ou linéaire.",
        "correct": true,
        "explanation": "Deux directions à 180° ; « diagonale » est un faux ami lexical."
      }
    ]
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Colle C04 — concernant hybridation, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:hybridation"
    ],
    "choices": [
      {
        "content": "Le carbone d’un alcène est obligatoirement sp3.",
        "correct": false,
        "explanation": "Les carbones de la double liaison sont classiquement sp2."
      },
      {
        "content": "Le terme correct pour la géométrie sp est « diagonale ».",
        "correct": false,
        "explanation": "Le terme attendu est digonale/linéaire."
      },
      {
        "content": "Le carbone est tétravalent dans les représentations organiques usuelles.",
        "correct": true,
        "explanation": "Il forme typiquement quatre liaisons covalentes en respectant l’octet."
      },
      {
        "content": "Un éther-oxyde présente un motif C–O–C.",
        "correct": true,
        "explanation": "L’oxygène relie deux groupes carbonés."
      },
      {
        "content": "Un alcool comporte un groupe hydroxyle porté par un carbone saturé selon la classification usuelle.",
        "correct": true,
        "explanation": "Le motif caractéristique est C–OH hors cas particuliers comme les énols/phénols."
      }
    ]
  },
  {
    "order": 23,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C04 — concernant fonctions, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:fonctions"
    ],
    "choices": [
      {
        "content": "Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène.",
        "correct": true,
        "explanation": "Le motif est R–CHO."
      },
      {
        "content": "Une cétone possède un groupe carbonyle lié à deux groupes carbonés.",
        "correct": true,
        "explanation": "Le motif est R–CO–R’."
      },
      {
        "content": "Une cétone porte nécessairement le carbonyle en extrémité de chaîne avec un hydrogène.",
        "correct": false,
        "explanation": "C’est la description d’un aldéhyde."
      },
      {
        "content": "Un alcène comporte au moins une double liaison C=C.",
        "correct": true,
        "explanation": "La double liaison définit la fonction alcène."
      },
      {
        "content": "Un alcane acyclique saturé suit la formule générale CnH2n+2.",
        "correct": true,
        "explanation": "Cette formule s’applique aux alcanes acycliques non substitués."
      }
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sélectionnez la double liaison carbone-carbone.",
    "explanation": "La zone attendue correspond à : Double liaison C=C.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:qzone"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c04/alkene-double-bond-qzone.svg",
      "alt": "Formule topologique avec double liaison",
      "width": 960,
      "height": 560
    },
    "expectedZones": [
      {
        "id": "target",
        "label": "Double liaison C=C",
        "x": 0.5,
        "y": 0.5,
        "tolerance": 0.08
      }
    ],
    "defaultTolerance": 0.08
  },
  {
    "order": 25,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C04 — concernant hybridation, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C04",
      "ec:CHIMIE",
      "theme:hybridation"
    ],
    "choices": [
      {
        "content": "Le carbone d’une double liaison C=C est classiquement sp2.",
        "correct": true,
        "explanation": "Il adopte une géométrie trigonale plane et conserve une orbitale p."
      },
      {
        "content": "Un alcyne comporte au moins une triple liaison C≡C.",
        "correct": true,
        "explanation": "La triple liaison définit la fonction alcyne."
      },
      {
        "content": "Un alcène comporte au moins une double liaison C=C.",
        "correct": true,
        "explanation": "La double liaison définit la fonction alcène."
      },
      {
        "content": "La règle de Markovnikov décrit une géométrie VSEPR.",
        "correct": false,
        "explanation": "Elle concerne la régiosélectivité d’additions sur des alcènes dissymétriques."
      },
      {
        "content": "Le carbone d’une triple liaison C≡C est classiquement sp.",
        "correct": true,
        "explanation": "Deux domaines hybridés sp conduisent à une géométrie linéaire."
      }
    ]
  }
];
