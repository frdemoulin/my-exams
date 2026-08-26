import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C07 — Chimie — Fonctions et réactivité
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 */
export const UE14_COLLE_C07_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les fonctions organiques ainsi que la réactivité des fonctions organiques, quelles propositions sont exactes ?",
    "explanation": "À retenir : Une formule brute renseigne sur la nature et le nombre des atomes mais pas sur leur enchaînement. Un ester possède le motif R–C(=O)–O–R’.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:esters"
    ],
    "choices": [
      {
        "content": "La saponification d’un ester est une réduction par H2.",
        "correct": false,
        "explanation": "C’est une hydrolyse basique."
      },
      {
        "content": "Une formule brute impose une unique structure développée.",
        "correct": false,
        "explanation": "Plusieurs isomères peuvent partager la même formule brute."
      },
      {
        "content": "Une fonction ester contient nécessairement un atome d’azote.",
        "correct": false,
        "explanation": "Un ester simple ne contient pas d’azote."
      },
      {
        "content": "Une formule brute renseigne sur la nature et le nombre des atomes mais pas sur leur enchaînement.",
        "correct": true,
        "explanation": "Des isomères de constitution peuvent partager une même formule brute."
      },
      {
        "content": "Un ester possède le motif R–C(=O)–O–R’.",
        "correct": true,
        "explanation": "La fonction ester associe un carbonyle et un oxygène alkoxy."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type d’alcool obtient-on typiquement par réduction d’une cétone simple ?",
    "explanation": "La réduction d’une cétone donne un alcool secondaire.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alcool secondaire",
        "secondaire"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 3,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la valence et l’hybridation ?",
    "explanation": "Il forme typiquement quatre liaisons covalentes en respectant l’octet.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
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
        "content": "La réduction d’une cétone conduit obligatoirement à un alcool primaire.",
        "correct": false,
        "explanation": "Elle conduit typiquement à un alcool secondaire."
      },
      {
        "content": "Le terme correct pour la géométrie sp est « diagonale ».",
        "correct": false,
        "explanation": "Le terme attendu est digonale/linéaire."
      },
      {
        "content": "La réduction d’un aldéhyde conduit à une cétone.",
        "correct": false,
        "explanation": "Elle conduit typiquement à un alcool primaire."
      },
      {
        "content": "Une triple liaison C≡C est constituée de trois liaisons sigma.",
        "correct": false,
        "explanation": "Elle comporte une liaison σ et deux liaisons π."
      }
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant la réactivité des fonctions organiques, les fonctions organiques, ainsi que la valence et l’hybridation.",
    "explanation": "Les deux points à retenir sont les suivants : Le carbone est tétravalent dans les représentations organiques usuelles. L’hydrolyse basique d’un ester est appelée saponification.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Le carbone d’un alcène est obligatoirement sp3.",
        "correct": false,
        "explanation": "Les carbones de la double liaison sont classiquement sp2."
      },
      {
        "content": "Le carbone est tétravalent dans les représentations organiques usuelles.",
        "correct": true,
        "explanation": "Il forme typiquement quatre liaisons covalentes en respectant l’octet."
      },
      {
        "content": "L’hydrolyse basique d’un ester est appelée saponification.",
        "correct": true,
        "explanation": "Elle conduit notamment à un carboxylate et un alcool."
      },
      {
        "content": "Un alcool et un éther sont nécessairement des isomères optiques.",
        "correct": false,
        "explanation": "Ils peuvent être isomères de fonction si leur formule brute coïncide, mais pas nécessairement optiques."
      },
      {
        "content": "Une amide et une amine ont exactement la même basicité car leur azote est identique.",
        "correct": false,
        "explanation": "La conjugaison avec le carbonyle rend l’amide beaucoup moins basique."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les fonctions organiques, la réactivité des fonctions organiques, ainsi que la valence et l’hybridation, quelles propositions sont exactes ?",
    "explanation": "À retenir : L’hydrolyse basique d’un ester est appelée saponification. Un alcool comporte un groupe hydroxyle porté par un carbone saturé selon la classification usuelle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:cetones"
    ],
    "choices": [
      {
        "content": "La réduction d’une cétone conduit obligatoirement à un alcool primaire.",
        "correct": false,
        "explanation": "Elle conduit typiquement à un alcool secondaire."
      },
      {
        "content": "L’hydrolyse basique d’un ester est appelée saponification.",
        "correct": true,
        "explanation": "Elle conduit notamment à un carboxylate et un alcool."
      },
      {
        "content": "Une amide et une amine ont exactement la même basicité car leur azote est identique.",
        "correct": false,
        "explanation": "La conjugaison avec le carbonyle rend l’amide beaucoup moins basique."
      },
      {
        "content": "Un alcool comporte un groupe hydroxyle porté par un carbone saturé selon la classification usuelle.",
        "correct": true,
        "explanation": "Le motif caractéristique est C–OH hors cas particuliers comme les énols/phénols."
      },
      {
        "content": "Le carbone d’un alcène est obligatoirement sp3.",
        "correct": false,
        "explanation": "Les carbones de la double liaison sont classiquement sp2."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type d’alcool obtient-on typiquement par réduction d’un aldéhyde ?",
    "explanation": "La réduction d’un aldéhyde donne un alcool primaire.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alcool primaire",
        "primaire"
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
    "question": "Quelle affirmation décrit correctement la réactivité des fonctions organiques ainsi que les fonctions organiques ?",
    "explanation": "Elle conduit notamment à un carboxylate et un alcool.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:esters"
    ],
    "choices": [
      {
        "content": "Une triple liaison C≡C est constituée de trois liaisons sigma.",
        "correct": false,
        "explanation": "Elle comporte une liaison σ et deux liaisons π."
      },
      {
        "content": "L’hydrolyse basique d’un ester est appelée saponification.",
        "correct": true,
        "explanation": "Elle conduit notamment à un carboxylate et un alcool."
      },
      {
        "content": "Un carboxylate est moins stabilisé qu’un alcoolate parce que sa charge est localisée sur un seul oxygène.",
        "correct": false,
        "explanation": "La charge du carboxylate est délocalisée par résonance."
      },
      {
        "content": "La rotation autour d’une double liaison C=C est libre comme autour d’une liaison simple.",
        "correct": false,
        "explanation": "La rotation romprait le recouvrement π."
      },
      {
        "content": "Un nitrile se reconnaît au motif N–N.",
        "correct": false,
        "explanation": "Un nitrile contient C≡N."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant les fonctions organiques.",
    "explanation": "Les deux points à retenir sont les suivants : Un alcool comporte un groupe hydroxyle porté par un carbone saturé selon la classification usuelle. Une amide possède un azote directement lié au carbone d’un groupe carbonyle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "La réduction d’une cétone conduit obligatoirement à un alcool primaire.",
        "correct": false,
        "explanation": "Elle conduit typiquement à un alcool secondaire."
      },
      {
        "content": "Un alcool comporte un groupe hydroxyle porté par un carbone saturé selon la classification usuelle.",
        "correct": true,
        "explanation": "Le motif caractéristique est C–OH hors cas particuliers comme les énols/phénols."
      },
      {
        "content": "Une amide possède un azote directement lié au carbone d’un groupe carbonyle.",
        "correct": true,
        "explanation": "Le motif est R–C(=O)–NR2."
      },
      {
        "content": "Le terme correct pour la géométrie sp est « diagonale ».",
        "correct": false,
        "explanation": "Le terme attendu est digonale/linéaire."
      },
      {
        "content": "La réduction d’un aldéhyde conduit à une cétone.",
        "correct": false,
        "explanation": "Elle conduit typiquement à un alcool primaire."
      }
    ]
  },
  {
    "order": 9,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi ces dix propositions portant sur les fonctions organiques ainsi que la réactivité des fonctions organiques, sélectionnez exactement les cinq exactes.",
    "explanation": "Les cinq points à retenir sont les suivants : Une amide possède un azote directement lié au carbone d’un groupe carbonyle. Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène. Un éther-oxyde présente un motif C–O–C. Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple. Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "Une amide possède un azote directement lié au carbone d’un groupe carbonyle.",
        "correct": true,
        "explanation": "Le motif est R–C(=O)–NR2."
      },
      {
        "content": "La réduction d’un aldéhyde conduit à une cétone.",
        "correct": false,
        "explanation": "Elle conduit typiquement à un alcool primaire."
      },
      {
        "content": "Le terme correct pour la géométrie sp est « diagonale ».",
        "correct": false,
        "explanation": "Le terme attendu est digonale/linéaire."
      },
      {
        "content": "La réduction d’une cétone conduit obligatoirement à un alcool primaire.",
        "correct": false,
        "explanation": "Elle conduit typiquement à un alcool secondaire."
      },
      {
        "content": "Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène.",
        "correct": true,
        "explanation": "Le motif est R–CHO."
      },
      {
        "content": "Un éther-oxyde présente un motif C–O–C.",
        "correct": true,
        "explanation": "L’oxygène relie deux groupes carbonés."
      },
      {
        "content": "Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple.",
        "correct": true,
        "explanation": "Le carbone carbonylé aldéhydique porte un hydrogène oxydable."
      },
      {
        "content": "Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle.",
        "correct": true,
        "explanation": "Cette conjugaison diminue notamment la basicité de l’azote amidique."
      },
      {
        "content": "Une triple liaison C≡C est constituée de trois liaisons sigma.",
        "correct": false,
        "explanation": "Elle comporte une liaison σ et deux liaisons π."
      },
      {
        "content": "Le carbone d’un alcène est obligatoirement sp3.",
        "correct": false,
        "explanation": "Les carbones de la double liaison sont classiquement sp2."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Sur les fonctions organiques ainsi que la réactivité des fonctions organiques, quelles affirmations sont correctes ?",
    "explanation": "À retenir : Un éther-oxyde présente un motif C–O–C. Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:aldehydes"
    ],
    "choices": [
      {
        "content": "La réduction d’un aldéhyde conduit à une cétone.",
        "correct": false,
        "explanation": "Elle conduit typiquement à un alcool primaire."
      },
      {
        "content": "Un éther-oxyde présente un motif C–O–C.",
        "correct": true,
        "explanation": "L’oxygène relie deux groupes carbonés."
      },
      {
        "content": "Un carboxylate est moins stabilisé qu’un alcoolate parce que sa charge est localisée sur un seul oxygène.",
        "correct": false,
        "explanation": "La charge du carboxylate est délocalisée par résonance."
      },
      {
        "content": "Une triple liaison C≡C est constituée de trois liaisons sigma.",
        "correct": false,
        "explanation": "Elle comporte une liaison σ et deux liaisons π."
      },
      {
        "content": "Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle.",
        "correct": true,
        "explanation": "Cette conjugaison diminue notamment la basicité de l’azote amidique."
      }
    ]
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel nom porte l’hydrolyse basique d’un ester ?",
    "explanation": "L’hydrolyse basique d’un ester est appelée saponification.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "saponification"
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
    "question": "Quelle affirmation décrit correctement les fonctions organiques ?",
    "explanation": "Le motif caractéristique est C–OH hors cas particuliers comme les énols/phénols.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:fonctions"
    ],
    "choices": [
      {
        "content": "Un nitrile se reconnaît au motif N–N.",
        "correct": false,
        "explanation": "Un nitrile contient C≡N."
      },
      {
        "content": "Une cétone porte nécessairement le carbonyle en extrémité de chaîne avec un hydrogène.",
        "correct": false,
        "explanation": "C’est la description d’un aldéhyde."
      },
      {
        "content": "Un alcool comporte un groupe hydroxyle porté par un carbone saturé selon la classification usuelle.",
        "correct": true,
        "explanation": "Le motif caractéristique est C–OH hors cas particuliers comme les énols/phénols."
      },
      {
        "content": "Un thiol comporte le motif –OH.",
        "correct": false,
        "explanation": "–OH caractérise un alcool ; un thiol porte –SH."
      },
      {
        "content": "Un alcyne acyclique à une triple liaison suit la formule générale CnH2n+2.",
        "correct": false,
        "explanation": "Pour un monoalcyne acyclique, la formule générale est CnH2n−2."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant les fonctions organiques ainsi que la réactivité des fonctions organiques.",
    "explanation": "Les deux points à retenir sont les suivants : Un éther-oxyde présente un motif C–O–C. Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
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
        "content": "Un éther-oxyde présente un motif C–O–C.",
        "correct": true,
        "explanation": "L’oxygène relie deux groupes carbonés."
      },
      {
        "content": "Un carboxylate est moins stabilisé qu’un alcoolate parce que sa charge est localisée sur un seul oxygène.",
        "correct": false,
        "explanation": "La charge du carboxylate est délocalisée par résonance."
      },
      {
        "content": "Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle.",
        "correct": true,
        "explanation": "Cette conjugaison diminue notamment la basicité de l’azote amidique."
      },
      {
        "content": "La rotation autour d’une double liaison C=C est libre comme autour d’une liaison simple.",
        "correct": false,
        "explanation": "La rotation romprait le recouvrement π."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les propositions suivantes portant sur les fonctions organiques ainsi que la réactivité des fonctions organiques, lesquelles sont exactes ?",
    "explanation": "À retenir : Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple. Une cétone possède un groupe carbonyle lié à deux groupes carbonés.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:thiols"
    ],
    "choices": [
      {
        "content": "Un thiol comporte le motif –OH.",
        "correct": false,
        "explanation": "–OH caractérise un alcool ; un thiol porte –SH."
      },
      {
        "content": "Une cétone porte nécessairement le carbonyle en extrémité de chaîne avec un hydrogène.",
        "correct": false,
        "explanation": "C’est la description d’un aldéhyde."
      },
      {
        "content": "Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple.",
        "correct": true,
        "explanation": "Le carbone carbonylé aldéhydique porte un hydrogène oxydable."
      },
      {
        "content": "Une cétone possède un groupe carbonyle lié à deux groupes carbonés.",
        "correct": true,
        "explanation": "Le motif est R–CO–R’."
      },
      {
        "content": "Un nitrile se reconnaît au motif N–N.",
        "correct": false,
        "explanation": "Un nitrile contient C≡N."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel motif caractérise un nitrile ?",
    "explanation": "Un nitrile contient une liaison triple C≡N.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "C≡N",
        "C#N",
        "CN"
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
    "question": "Concernant les fonctions organiques, quelle proposition est exacte ?",
    "explanation": "Le motif est R–C(=O)–NR2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:amides"
    ],
    "choices": [
      {
        "content": "Un alcyne acyclique à une triple liaison suit la formule générale CnH2n+2.",
        "correct": false,
        "explanation": "Pour un monoalcyne acyclique, la formule générale est CnH2n−2."
      },
      {
        "content": "Un ammonium quaternaire est un azote trivalent neutre portant un doublet libre.",
        "correct": false,
        "explanation": "Il est tétravalent et chargé positivement, sans doublet libre."
      },
      {
        "content": "Deux énantiomères sont superposables après une simple rotation dans l’espace.",
        "correct": false,
        "explanation": "Ils sont non superposables."
      },
      {
        "content": "Une amide possède un azote directement lié au carbone d’un groupe carbonyle.",
        "correct": true,
        "explanation": "Le motif est R–C(=O)–NR2."
      },
      {
        "content": "Un carbamate ne contient aucun carbonyle.",
        "correct": false,
        "explanation": "Le motif carbamate comporte C(=O)."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Parmi ces cinq affirmations portant sur les fonctions organiques ainsi que la réactivité des fonctions organiques, retenez exactement les deux correctes.",
    "explanation": "Les deux points à retenir sont les suivants : Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple. Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
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
        "content": "Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple.",
        "correct": true,
        "explanation": "Le carbone carbonylé aldéhydique porte un hydrogène oxydable."
      },
      {
        "content": "Un nitrile se reconnaît au motif N–N.",
        "correct": false,
        "explanation": "Un nitrile contient C≡N."
      },
      {
        "content": "Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène.",
        "correct": true,
        "explanation": "Le motif est R–CHO."
      },
      {
        "content": "Un thiol comporte le motif –OH.",
        "correct": false,
        "explanation": "–OH caractérise un alcool ; un thiol porte –SH."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les fonctions organiques, la réactivité des fonctions organiques, ainsi que la stéréochimie, quelles propositions sont exactes ?",
    "explanation": "À retenir : Un alcène comporte au moins une double liaison C=C. La réduction d’une cétone conduit typiquement à un alcool secondaire. Un alcane acyclique saturé suit la formule générale CnH2n+2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:stereoisomerie"
    ],
    "choices": [
      {
        "content": "Deux énantiomères sont superposables après une simple rotation dans l’espace.",
        "correct": false,
        "explanation": "Ils sont non superposables."
      },
      {
        "content": "Un alcène comporte au moins une double liaison C=C.",
        "correct": true,
        "explanation": "La double liaison définit la fonction alcène."
      },
      {
        "content": "La réduction d’une cétone conduit typiquement à un alcool secondaire.",
        "correct": true,
        "explanation": "Le carbone carbonylé conserve ses deux substituants carbonés."
      },
      {
        "content": "Un alcane acyclique saturé suit la formule générale CnH2n+2.",
        "correct": true,
        "explanation": "Cette formule s’applique aux alcanes acycliques non substitués."
      },
      {
        "content": "Un ammonium quaternaire est un azote trivalent neutre portant un doublet libre.",
        "correct": false,
        "explanation": "Il est tétravalent et chargé positivement, sans doublet libre."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle charge formelle porte l’azote d’un ammonium quaternaire ?",
    "explanation": "L’azote tétravalent d’un ammonium quaternaire porte une charge +1.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    }
  },
  {
    "order": 20,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les fonctions organiques ainsi que la réactivité des fonctions organiques ?",
    "explanation": "L’oxygène relie deux groupes carbonés.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:fonctions"
    ],
    "choices": [
      {
        "content": "Un carbamate ne contient aucun carbonyle.",
        "correct": false,
        "explanation": "Le motif carbamate comporte C(=O)."
      },
      {
        "content": "Un carbone portant deux substituants identiques est un centre stéréogène tétraédrique classique.",
        "correct": false,
        "explanation": "Quatre substituants différents sont requis."
      },
      {
        "content": "Le carbone du groupe C=O est le pôle nucléophile de la liaison carbonyle.",
        "correct": false,
        "explanation": "Le carbone est le pôle électrophile ; l’oxygène est plus riche en électrons."
      },
      {
        "content": "La règle de Markovnikov décrit une géométrie VSEPR.",
        "correct": false,
        "explanation": "Elle concerne la régiosélectivité d’additions sur des alcènes dissymétriques."
      },
      {
        "content": "Un éther-oxyde présente un motif C–O–C.",
        "correct": true,
        "explanation": "L’oxygène relie deux groupes carbonés."
      }
    ]
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Les fonctions organiques ainsi que la réactivité des fonctions organiques : identifiez les propositions exactes.",
    "explanation": "À retenir : La base conjuguée d’un acide carboxylique est un carboxylate stabilisé par résonance. Un alcyne comporte au moins une triple liaison C≡C. Un acide carboxylique possède un groupe carboxyle –COOH.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:acides-carboxyliques"
    ],
    "choices": [
      {
        "content": "La base conjuguée d’un acide carboxylique est un carboxylate stabilisé par résonance.",
        "correct": true,
        "explanation": "La charge négative est délocalisée sur les deux oxygènes."
      },
      {
        "content": "Le carbone du groupe C=O est le pôle nucléophile de la liaison carbonyle.",
        "correct": false,
        "explanation": "Le carbone est le pôle électrophile ; l’oxygène est plus riche en électrons."
      },
      {
        "content": "La règle de Markovnikov décrit une géométrie VSEPR.",
        "correct": false,
        "explanation": "Elle concerne la régiosélectivité d’additions sur des alcènes dissymétriques."
      },
      {
        "content": "Un alcyne comporte au moins une triple liaison C≡C.",
        "correct": true,
        "explanation": "La triple liaison définit la fonction alcyne."
      },
      {
        "content": "Un acide carboxylique possède un groupe carboxyle –COOH.",
        "correct": true,
        "explanation": "Le groupe combine carbonyle et hydroxyle sur le même carbone."
      }
    ]
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les fonctions organiques ainsi que la valence et l’hybridation, quelles propositions sont exactes ?",
    "explanation": "À retenir : Un thiol comporte un groupe –SH. Un nitrile contient un groupe C≡N. Le carbone d’une triple liaison C≡C est classiquement sp. Le carbone d’une double liaison C=C est classiquement sp2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:thiols"
    ],
    "choices": [
      {
        "content": "Un thiol comporte un groupe –SH.",
        "correct": true,
        "explanation": "C’est l’analogue soufré d’un alcool."
      },
      {
        "content": "Une formule brute impose une unique structure développée.",
        "correct": false,
        "explanation": "Plusieurs isomères peuvent partager la même formule brute."
      },
      {
        "content": "Un nitrile contient un groupe C≡N.",
        "correct": true,
        "explanation": "Le carbone et l’azote sont liés par une triple liaison."
      },
      {
        "content": "Le carbone d’une triple liaison C≡C est classiquement sp.",
        "correct": true,
        "explanation": "Deux domaines hybridés sp conduisent à une géométrie linéaire."
      },
      {
        "content": "Le carbone d’une double liaison C=C est classiquement sp2.",
        "correct": true,
        "explanation": "Il adopte une géométrie trigonale plane et conserve une orbitale p."
      }
    ]
  },
  {
    "order": 23,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les fonctions organiques, la stéréochimie, ainsi que la valence et l’hybridation, quelles propositions sont exactes ?",
    "explanation": "À retenir : Un ammonium quaternaire porte quatre substituants carbonés sur un azote chargé positivement. L’isomérie Z/E nécessite que chacun des deux carbones de la double liaison porte deux substituants différents. Un thiol comporte un groupe –SH. Un carbone tétraédrique portant quatre substituants différents est un centre stéréogène classique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:ammoniums"
    ],
    "choices": [
      {
        "content": "Un ammonium quaternaire porte quatre substituants carbonés sur un azote chargé positivement.",
        "correct": true,
        "explanation": "L’azote possède quatre liaisons et une charge formelle positive."
      },
      {
        "content": "L’isomérie Z/E nécessite que chacun des deux carbones de la double liaison porte deux substituants différents.",
        "correct": true,
        "explanation": "Sinon la configuration E/Z n’est pas définissable."
      },
      {
        "content": "Un thiol comporte un groupe –SH.",
        "correct": true,
        "explanation": "C’est l’analogue soufré d’un alcool."
      },
      {
        "content": "Le carbone d’un alcène est obligatoirement sp3.",
        "correct": false,
        "explanation": "Les carbones de la double liaison sont classiquement sp2."
      },
      {
        "content": "Un carbone tétraédrique portant quatre substituants différents est un centre stéréogène classique.",
        "correct": true,
        "explanation": "Il peut engendrer une paire d’énantiomères si aucune autre symétrie ne l’annule."
      }
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sélectionnez le carbone carbonylé de la fonction ester.",
    "explanation": "La zone attendue correspond à : Carbone carbonylé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:qzone"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c07/ester-carbonyl-carbon-qzone.svg",
      "alt": "Fonction ester schématique",
      "width": 960,
      "height": 560
    },
    "expectedZones": [
      {
        "id": "target",
        "label": "Carbone carbonylé",
        "x": 0.44,
        "y": 0.52,
        "tolerance": 0.07
      }
    ],
    "defaultTolerance": 0.07
  },
  {
    "order": 25,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les fonctions organiques, la stéréochimie, ainsi que la réactivité des fonctions organiques, quelles propositions sont exactes ?",
    "explanation": "À retenir : Un carbamate contient le motif O–C(=O)–N. Deux énantiomères possèdent les mêmes propriétés dans un environnement achiral, sauf notamment le sens de rotation optique. Le carbone carbonylé d’un aldéhyde ou d’une cétone est électrophile. Un carbone tétraédrique portant quatre substituants différents est un centre stéréogène classique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C07",
      "ec:CHIMIE",
      "theme:carbamates"
    ],
    "choices": [
      {
        "content": "Un carbamate contient le motif O–C(=O)–N.",
        "correct": true,
        "explanation": "Il combine des éléments structuraux d’un ester et d’une amide."
      },
      {
        "content": "Deux énantiomères possèdent les mêmes propriétés dans un environnement achiral, sauf notamment le sens de rotation optique.",
        "correct": true,
        "explanation": "Ils diffèrent dans leurs interactions avec des environnements chiraux."
      },
      {
        "content": "Le carbone carbonylé d’un aldéhyde ou d’une cétone est électrophile.",
        "correct": true,
        "explanation": "La polarisation C=O appauvrit le carbone en densité électronique."
      },
      {
        "content": "Une triple liaison C≡C est constituée de trois liaisons sigma.",
        "correct": false,
        "explanation": "Elle comporte une liaison σ et deux liaisons π."
      },
      {
        "content": "Un carbone tétraédrique portant quatre substituants différents est un centre stéréogène classique.",
        "correct": true,
        "explanation": "Il peut engendrer une paire d’énantiomères si aucune autre symétrie ne l’annule."
      }
    ]
  }
];
