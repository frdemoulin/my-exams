import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';
import { TEX_UNITS, texQuantity } from '../../tex-units';

const U = TEX_UNITS;

/**
 * UE14 — Colle C10 — Chimie — Colle cumulative EC
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 */
export const UE14_COLLE_C10_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les fonctions organiques et leur réactivité ainsi que les formules et l’isomérie de constitution, quelles propositions sont exactes ?",
    "explanation": "À retenir : Une formule brute renseigne sur la nature et le nombre des atomes mais pas sur leur enchaînement. Un ester possède le motif R–C(=O)–O–R’.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:formule-brute"
    ],
    "choices": [
      {
        "content": "Une formule brute renseigne sur la nature et le nombre des atomes mais pas sur leur enchaînement.",
        "correct": true,
        "explanation": "Des isomères de constitution peuvent partager une même formule brute."
      },
      {
        "content": "Un ester possède le motif R–C(=O)–O–R’.",
        "correct": true,
        "explanation": "La fonction ester associe un carbonyle et un oxygène alkoxy."
      },
      {
        "content": "Une fonction ester contient nécessairement un atome d’azote.",
        "correct": false,
        "explanation": "Un ester simple ne contient pas d’azote."
      },
      {
        "content": "Une formule brute impose une unique structure développée.",
        "correct": false,
        "explanation": "Plusieurs isomères peuvent partager la même formule brute."
      },
      {
        "content": "La saponification d’un ester est une réduction par H2.",
        "correct": false,
        "explanation": "C’est une hydrolyse basique."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de liaisons $\\pi$ comporte une triple liaison carbone-carbone ?",
    "explanation": "Une triple liaison comporte une liaison σ et deux liaisons π.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
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
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la valence, les liaisons et l’hybridation ?",
    "explanation": "Il forme typiquement quatre liaisons covalentes en respectant l’octet.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
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
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant les fonctions organiques et leur réactivité ainsi que la valence, les liaisons et l’hybridation.",
    "explanation": "Les deux points à retenir sont les suivants : L’hydrolyse basique d’un ester est appelée saponification. Le carbone est tétravalent dans les représentations organiques usuelles.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Une amide et une amine ont exactement la même basicité car leur azote est identique.",
        "correct": false,
        "explanation": "La conjugaison avec le carbonyle rend l’amide beaucoup moins basique."
      },
      {
        "content": "L’hydrolyse basique d’un ester est appelée saponification.",
        "correct": true,
        "explanation": "Elle conduit notamment à un carboxylate et un alcool."
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
        "content": "Le carbone est tétravalent dans les représentations organiques usuelles.",
        "correct": true,
        "explanation": "Il forme typiquement quatre liaisons covalentes en respectant l’octet."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les fonctions organiques et leur réactivité, la valence, les liaisons et l’hybridation, ainsi que les hydrocarbures, quelles propositions sont exactes ?",
    "explanation": "À retenir : Un alcool comporte un groupe hydroxyle porté par un carbone saturé selon la classification usuelle. L’hydrolyse basique d’un ester est appelée saponification.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:amides"
    ],
    "choices": [
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
      },
      {
        "content": "La réduction d’une cétone conduit obligatoirement à un alcool primaire.",
        "correct": false,
        "explanation": "Elle conduit typiquement à un alcool secondaire."
      },
      {
        "content": "L’hydrolyse basique d’un ester est appelée saponification.",
        "correct": true,
        "explanation": "Elle conduit notamment à un carboxylate et un alcool."
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
      "colle:C10",
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
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les fonctions organiques et leur réactivité ?",
    "explanation": "Elle conduit notamment à un carboxylate et un alcool.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
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
    "question": "Sélectionnez exactement les deux propositions exactes concernant les fonctions organiques et leur réactivité.",
    "explanation": "Les deux points à retenir sont les suivants : Une amide possède un azote directement lié au carbone d’un groupe carbonyle. Un alcool comporte un groupe hydroxyle porté par un carbone saturé selon la classification usuelle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
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
        "content": "Un alcool comporte un groupe hydroxyle porté par un carbone saturé selon la classification usuelle.",
        "correct": true,
        "explanation": "Le motif caractéristique est C–OH hors cas particuliers comme les énols/phénols."
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
    "question": "Parmi ces dix propositions portant sur les fonctions organiques et leur réactivité, sélectionnez exactement les cinq exactes.",
    "explanation": "Les cinq points à retenir sont les suivants : Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène. Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle. Un éther-oxyde présente un motif C–O–C. Une amide possède un azote directement lié au carbone d’un groupe carbonyle. Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène.",
        "correct": true,
        "explanation": "Le motif est R–CHO."
      },
      {
        "content": "Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle.",
        "correct": true,
        "explanation": "Cette conjugaison diminue notamment la basicité de l’azote amidique."
      },
      {
        "content": "Un éther-oxyde présente un motif C–O–C.",
        "correct": true,
        "explanation": "L’oxygène relie deux groupes carbonés."
      },
      {
        "content": "Une amide possède un azote directement lié au carbone d’un groupe carbonyle.",
        "correct": true,
        "explanation": "Le motif est R–C(=O)–NR2."
      },
      {
        "content": "Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple.",
        "correct": true,
        "explanation": "Le carbone carbonylé aldéhydique porte un hydrogène oxydable."
      },
      {
        "content": "La réduction d’une cétone conduit obligatoirement à un alcool primaire.",
        "correct": false,
        "explanation": "Elle conduit typiquement à un alcool secondaire."
      },
      {
        "content": "Une triple liaison C≡C est constituée de trois liaisons sigma.",
        "correct": false,
        "explanation": "Elle comporte une liaison σ et deux liaisons π."
      },
      {
        "content": "La réduction d’un aldéhyde conduit à une cétone.",
        "correct": false,
        "explanation": "Elle conduit typiquement à un alcool primaire."
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
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les fonctions organiques et leur réactivité ainsi que la valence, les liaisons et l’hybridation, quelles propositions sont exactes ?",
    "explanation": "À retenir : Un éther-oxyde présente un motif C–O–C. Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:acides-carboxyliques"
    ],
    "choices": [
      {
        "content": "Un carboxylate est moins stabilisé qu’un alcoolate parce que sa charge est localisée sur un seul oxygène.",
        "correct": false,
        "explanation": "La charge du carboxylate est délocalisée par résonance."
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
      },
      {
        "content": "Un éther-oxyde présente un motif C–O–C.",
        "correct": true,
        "explanation": "L’oxygène relie deux groupes carbonés."
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
    "question": "Quel est l’état d’hybridation classique d’un carbone engagé dans une triple liaison C≡C ?",
    "explanation": "Un carbone alcynique est classiquement sp.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
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
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Concernant les fonctions organiques et leur réactivité, quelle proposition est exacte ?",
    "explanation": "Le motif caractéristique est C–OH hors cas particuliers comme les énols/phénols.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
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
    "question": "Parmi ces cinq affirmations portant sur les fonctions organiques et leur réactivité, retenez exactement les deux correctes.",
    "explanation": "Les deux points à retenir sont les suivants : Un éther-oxyde présente un motif C–O–C. Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:selection-precise"
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
        "content": "Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle.",
        "correct": true,
        "explanation": "Cette conjugaison diminue notamment la basicité de l’azote amidique."
      },
      {
        "content": "La rotation autour d’une double liaison C=C est libre comme autour d’une liaison simple.",
        "correct": false,
        "explanation": "La rotation romprait le recouvrement π."
      },
      {
        "content": "Un carboxylate est moins stabilisé qu’un alcoolate parce que sa charge est localisée sur un seul oxygène.",
        "correct": false,
        "explanation": "La charge du carboxylate est délocalisée par résonance."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les fonctions organiques et leur réactivité, quelles propositions sont exactes ?",
    "explanation": "À retenir : Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple. Une cétone possède un groupe carbonyle lié à deux groupes carbonés.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:aldehydes"
    ],
    "choices": [
      {
        "content": "Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple.",
        "correct": true,
        "explanation": "Le carbone carbonylé aldéhydique porte un hydrogène oxydable."
      },
      {
        "content": "Un thiol comporte le motif –OH.",
        "correct": false,
        "explanation": "–OH caractérise un alcool ; un thiol porte –SH."
      },
      {
        "content": "Un nitrile se reconnaît au motif N–N.",
        "correct": false,
        "explanation": "Un nitrile contient C≡N."
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
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": String.raw`Quel terme géométrique correct désigne la disposition à $${texQuantity(180, U.DEGREE)}$ associée à une hybridation $sp$ ?`,
    "explanation": "La géométrie est digonale, couramment dite linéaire ; « diagonale » est incorrect.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
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
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi ces cinq affirmations sur les fonctions organiques et leur réactivité, laquelle est correcte ?",
    "explanation": "Le motif est R–C(=O)–NR2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
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
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Deux propositions concernant les fonctions organiques et leur réactivité sont exactes. Sélectionnez-les.",
    "explanation": "Les deux points à retenir sont les suivants : Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple. Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
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
        "content": "Un thiol comporte le motif –OH.",
        "correct": false,
        "explanation": "–OH caractérise un alcool ; un thiol porte –SH."
      },
      {
        "content": "Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène.",
        "correct": true,
        "explanation": "Le motif est R–CHO."
      },
      {
        "content": "Une cétone porte nécessairement le carbonyle en extrémité de chaîne avec un hydrogène.",
        "correct": false,
        "explanation": "C’est la description d’un aldéhyde."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi ces dix propositions portant sur les fonctions organiques et leur réactivité, les hydrocarbures, ainsi que la valence, les liaisons et l’hybridation, sélectionnez exactement les cinq exactes.",
    "explanation": "Les cinq points à retenir sont les suivants : La réduction d’un aldéhyde conduit typiquement à un alcool primaire. Une cétone possède un groupe carbonyle lié à deux groupes carbonés. La réduction d’une cétone conduit typiquement à un alcool secondaire. Un alcène comporte au moins une double liaison C=C. Un alcane acyclique saturé suit la formule générale CnH2n+2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "Une cétone porte nécessairement le carbonyle en extrémité de chaîne avec un hydrogène.",
        "correct": false,
        "explanation": "C’est la description d’un aldéhyde."
      },
      {
        "content": "La réduction d’un aldéhyde conduit typiquement à un alcool primaire.",
        "correct": true,
        "explanation": "Le carbonyle terminal devient CH2OH."
      },
      {
        "content": "La rotation autour d’une double liaison C=C est libre comme autour d’une liaison simple.",
        "correct": false,
        "explanation": "La rotation romprait le recouvrement π."
      },
      {
        "content": "Un thiol comporte le motif –OH.",
        "correct": false,
        "explanation": "–OH caractérise un alcool ; un thiol porte –SH."
      },
      {
        "content": "Un nitrile se reconnaît au motif N–N.",
        "correct": false,
        "explanation": "Un nitrile contient C≡N."
      },
      {
        "content": "Une cétone possède un groupe carbonyle lié à deux groupes carbonés.",
        "correct": true,
        "explanation": "Le motif est R–CO–R’."
      },
      {
        "content": "La réduction d’une cétone conduit typiquement à un alcool secondaire.",
        "correct": true,
        "explanation": "Le carbone carbonylé conserve ses deux substituants carbonés."
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
      },
      {
        "content": "Un carboxylate est moins stabilisé qu’un alcoolate parce que sa charge est localisée sur un seul oxygène.",
        "correct": false,
        "explanation": "La charge du carboxylate est délocalisée par résonance."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les fonctions organiques et leur réactivité, les hydrocarbures, ainsi que la stéréochimie, quelles propositions sont exactes ?",
    "explanation": "À retenir : La réduction d’une cétone conduit typiquement à un alcool secondaire. Un alcane acyclique saturé suit la formule générale CnH2n+2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:carbamates"
    ],
    "choices": [
      {
        "content": "Un carbamate ne contient aucun carbonyle.",
        "correct": false,
        "explanation": "Le motif carbamate comporte C(=O)."
      },
      {
        "content": "La réduction d’une cétone conduit typiquement à un alcool secondaire.",
        "correct": true,
        "explanation": "Le carbone carbonylé conserve ses deux substituants carbonés."
      },
      {
        "content": "Un ammonium quaternaire est un azote trivalent neutre portant un doublet libre.",
        "correct": false,
        "explanation": "Il est tétravalent et chargé positivement, sans doublet libre."
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
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de substituants différents doit porter un carbone tétraédrique pour être un centre stéréogène classique ?",
    "explanation": "Quatre substituants différents sont requis.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
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
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Les fonctions organiques et leur réactivité : quelle affirmation est juste ?",
    "explanation": "L’oxygène relie deux groupes carbonés.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
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
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sur les fonctions organiques et leur réactivité, la valence, les liaisons et l’hybridation, ainsi que les hydrocarbures, quelles affirmations sont correctes ?",
    "explanation": "À retenir : Un acide carboxylique possède un groupe carboxyle –COOH. Un alcyne comporte au moins une triple liaison C≡C. La base conjuguée d’un acide carboxylique est un carboxylate stabilisé par résonance.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:acides-carboxyliques"
    ],
    "choices": [
      {
        "content": "Un acide carboxylique possède un groupe carboxyle –COOH.",
        "correct": true,
        "explanation": "Le groupe combine carbonyle et hydroxyle sur le même carbone."
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
        "content": "Le carbone du groupe C=O est le pôle nucléophile de la liaison carbonyle.",
        "correct": false,
        "explanation": "Le carbone est le pôle électrophile ; l’oxygène est plus riche en électrons."
      },
      {
        "content": "La base conjuguée d’un acide carboxylique est un carboxylate stabilisé par résonance.",
        "correct": true,
        "explanation": "La charge négative est délocalisée sur les deux oxygènes."
      }
    ]
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Une molécule a pour formule $\\ce{C3H8O}$. Quelle est sa masse molaire ? Donnez uniquement la valeur numérique, exprimée en $G_PER_MOL$.\n\nDonnées : $M_{\\mathrm C}=12 G_PER_MOL$, $M_{\\mathrm H}=1 G_PER_MOL$ et $M_{\\mathrm O}=16 G_PER_MOL$.",
    "explanation": String.raw`$3\times12+8\times1+16=${texQuantity(60, U.G_PER_MOL)}$.`,
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:calcul-masse-molaire"
    ],
    "answer": {
      "type": "number",
      "value": 60,
      "tolerance": 0,
      "unit": "g/mol",
      "displayUnit": U.G_PER_MOL
    }
  },
  {
    "order": 24,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est correcte concernant les fonctions organiques et leur réactivité ?",
    "explanation": "Cette conjugaison diminue notamment la basicité de l’azote amidique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:amides"
    ],
    "choices": [
      {
        "content": "Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle.",
        "correct": true,
        "explanation": "Cette conjugaison diminue notamment la basicité de l’azote amidique."
      },
      {
        "content": "La règle de Markovnikov décrit une géométrie VSEPR.",
        "correct": false,
        "explanation": "Elle concerne la régiosélectivité d’additions sur des alcènes dissymétriques."
      },
      {
        "content": "Une cétone possède toujours un hydrogène directement lié au carbone carbonylé.",
        "correct": false,
        "explanation": "Cela caractérise un aldéhyde."
      },
      {
        "content": "Une fonction ester contient nécessairement un atome d’azote.",
        "correct": false,
        "explanation": "Un ester simple ne contient pas d’azote."
      },
      {
        "content": "Une formule brute impose une unique structure développée.",
        "correct": false,
        "explanation": "Plusieurs isomères peuvent partager la même formule brute."
      }
    ]
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la valence, les liaisons et l’hybridation, les fonctions organiques et leur réactivité, ainsi que les formules et l’isomérie de constitution, quelles propositions sont exactes ?",
    "explanation": "À retenir : Le carbone d’une triple liaison C≡C est classiquement sp. Le carbone d’une double liaison C=C est classiquement sp2. Un nitrile contient un groupe C≡N.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:formule-brute"
    ],
    "choices": [
      {
        "content": "Une formule brute impose une unique structure développée.",
        "correct": false,
        "explanation": "Plusieurs isomères peuvent partager la même formule brute."
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
      },
      {
        "content": "La saponification d’un ester est une réduction par H2.",
        "correct": false,
        "explanation": "C’est une hydrolyse basique."
      },
      {
        "content": "Un nitrile contient un groupe C≡N.",
        "correct": true,
        "explanation": "Le carbone et l’azote sont liés par une triple liaison."
      }
    ]
  },
  {
    "order": 26,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes portant sur les fonctions organiques et leur réactivité, la valence, les liaisons et l’hybridation, ainsi que les hydrocarbures, lesquelles sont exactes ?",
    "explanation": "À retenir : Un ammonium quaternaire porte quatre substituants carbonés sur un azote chargé positivement. L’isomérie Z/E nécessite que chacun des deux carbones de la double liaison porte deux substituants différents. Un thiol comporte un groupe –SH.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
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
        "content": "Le carbone d’un alcène est obligatoirement sp3.",
        "correct": false,
        "explanation": "Les carbones de la double liaison sont classiquement sp2."
      },
      {
        "content": "Un thiol comporte un groupe –SH.",
        "correct": true,
        "explanation": "C’est l’analogue soufré d’un alcool."
      },
      {
        "content": "La réduction d’une cétone conduit obligatoirement à un alcool primaire.",
        "correct": false,
        "explanation": "Elle conduit typiquement à un alcool secondaire."
      }
    ]
  },
  {
    "order": 27,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les fonctions organiques et leur réactivité, la stéréochimie, ainsi que la valence, les liaisons et l’hybridation, quelles propositions sont exactes ?",
    "explanation": "À retenir : Le carbone carbonylé d’un aldéhyde ou d’une cétone est électrophile. Un carbone tétraédrique portant quatre substituants différents est un centre stéréogène classique. Un carbamate contient le motif O–C(=O)–N. Deux énantiomères possèdent les mêmes propriétés dans un environnement achiral, sauf notamment le sens de rotation optique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:carbonyle"
    ],
    "choices": [
      {
        "content": "Le carbone carbonylé d’un aldéhyde ou d’une cétone est électrophile.",
        "correct": true,
        "explanation": "La polarisation C=O appauvrit le carbone en densité électronique."
      },
      {
        "content": "Un carbone tétraédrique portant quatre substituants différents est un centre stéréogène classique.",
        "correct": true,
        "explanation": "Il peut engendrer une paire d’énantiomères si aucune autre symétrie ne l’annule."
      },
      {
        "content": "Une triple liaison C≡C est constituée de trois liaisons sigma.",
        "correct": false,
        "explanation": "Elle comporte une liaison σ et deux liaisons π."
      },
      {
        "content": "Un carbamate contient le motif O–C(=O)–N.",
        "correct": true,
        "explanation": "Il combine des éléments structuraux d’un ester et d’une amide."
      },
      {
        "content": "Deux énantiomères possèdent les mêmes propriétés dans un environnement achiral, sauf notamment le sens de rotation optique.",
        "correct": true,
        "explanation": "Ils diffèrent dans leurs interactions avec des environnements chiraux."
      }
    ]
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les fonctions organiques et leur réactivité ainsi que les hydrocarbures, quelles propositions sont exactes ?",
    "explanation": "À retenir : Le carbone carbonylé d’un aldéhyde ou d’une cétone est électrophile. L’oxygène carbonylé est globalement nucléophile/basicité de Lewis grâce à ses doublets. L’addition de HX sur un alcène dissymétrique peut suivre la régiosélectivité de Markovnikov dans les conditions usuelles. Une hydrogénation catalytique d’un alcène consomme H2 et conduit à un alcane.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:carbonyle"
    ],
    "choices": [
      {
        "content": "Le carbone carbonylé d’un aldéhyde ou d’une cétone est électrophile.",
        "correct": true,
        "explanation": "La polarisation C=O appauvrit le carbone en densité électronique."
      },
      {
        "content": "L’oxygène carbonylé est globalement nucléophile/basicité de Lewis grâce à ses doublets.",
        "correct": true,
        "explanation": "Il peut coordonner un proton ou un électrophile."
      },
      {
        "content": "Une cétone porte nécessairement le carbonyle en extrémité de chaîne avec un hydrogène.",
        "correct": false,
        "explanation": "C’est la description d’un aldéhyde."
      },
      {
        "content": "L’addition de HX sur un alcène dissymétrique peut suivre la régiosélectivité de Markovnikov dans les conditions usuelles.",
        "correct": true,
        "explanation": "Le proton et l’halogénure s’ajoutent selon la stabilité relative de l’intermédiaire dans le mécanisme ionique usuel."
      },
      {
        "content": "Une hydrogénation catalytique d’un alcène consomme H2 et conduit à un alcane.",
        "correct": true,
        "explanation": "La double liaison est réduite."
      }
    ]
  },
  {
    "order": 29,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sélectionnez le carbone stéréogène.",
    "explanation": "La zone attendue correspond à : Carbone stéréogène.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
      "ec:CHIMIE",
      "theme:qzone"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c10/stereogenic-carbon-qzone.svg",
      "alt": "Molécule organique avec centre stéréogène",
      "width": 960,
      "height": 560
    },
    "expectedZones": [
      {
        "id": "target",
        "label": "Carbone stéréogène",
        "x": 0.45,
        "y": 0.5,
        "tolerance": 0.08
      }
    ],
    "defaultTolerance": 0.08
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la valence, les liaisons et l’hybridation, les hydrocarbures, ainsi que les fonctions organiques et leur réactivité, quelles propositions sont exactes ?",
    "explanation": "À retenir : Une formule brute renseigne sur la nature et le nombre des atomes mais pas sur leur enchaînement. Une hydrogénation catalytique d’un alcène consomme H2 et conduit à un alcane. Une substitution nucléophile sur un dérivé d’acide implique souvent un mécanisme addition–élimination au carbonyle. La géométrie associée à l’hybridation sp est dite digonale ou linéaire.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C10",
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
        "content": "Une formule brute renseigne sur la nature et le nombre des atomes mais pas sur leur enchaînement.",
        "correct": true,
        "explanation": "Des isomères de constitution peuvent partager une même formule brute."
      },
      {
        "content": "Une hydrogénation catalytique d’un alcène consomme H2 et conduit à un alcane.",
        "correct": true,
        "explanation": "La double liaison est réduite."
      },
      {
        "content": "Une substitution nucléophile sur un dérivé d’acide implique souvent un mécanisme addition–élimination au carbonyle.",
        "correct": true,
        "explanation": "Le nucléophile s’additionne puis un groupe partant est éliminé."
      },
      {
        "content": "La géométrie associée à l’hybridation sp est dite digonale ou linéaire.",
        "correct": true,
        "explanation": String.raw`Deux directions séparées de $${texQuantity(180, U.DEGREE)}$ ; « diagonale » est un faux ami lexical.`
      }
    ]
  }
];
