import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';
import { TEX_UNITS, texQuantity } from '../../tex-units';

const U = TEX_UNITS;

/**
 * UE14 — Colle C12 — Grande colle UE14
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 */
export const UE14_COLLE_C12_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les fonctions organiques et leur réactivité, la valence, les liaisons et l’hybridation, ainsi que les hydrocarbures, quelles propositions sont exactes ?",
    "explanation": "À retenir : L’hydrolyse basique d’un ester est appelée saponification. Un alcool comporte un groupe hydroxyle porté par un carbone saturé selon la classification usuelle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:esters"
    ],
    "choices": [
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
        "content": "La réduction d’une cétone conduit obligatoirement à un alcool primaire.",
        "correct": false,
        "explanation": "Elle conduit typiquement à un alcool secondaire."
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
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de liaisons $\\pi$ comporte une triple liaison carbone-carbone ?",
    "explanation": "Une triple liaison comporte une liaison σ et deux liaisons π.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
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
    "question": "Quelle affirmation décrit correctement les fonctions organiques et leur réactivité ?",
    "explanation": "Elle conduit notamment à un carboxylate et un alcool.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:esters"
    ],
    "choices": [
      {
        "content": "L’hydrolyse basique d’un ester est appelée saponification.",
        "correct": true,
        "explanation": "Elle conduit notamment à un carboxylate et un alcool."
      },
      {
        "content": "Une triple liaison C≡C est constituée de trois liaisons sigma.",
        "correct": false,
        "explanation": "Elle comporte une liaison σ et deux liaisons π."
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
    "order": 4,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant les fonctions organiques et leur réactivité.",
    "explanation": "Les deux points à retenir sont les suivants : Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple. Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
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
        "content": "Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple.",
        "correct": true,
        "explanation": "Le carbone carbonylé aldéhydique porte un hydrogène oxydable."
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
    "order": 5,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la valence, les liaisons et l’hybridation, les fonctions organiques et leur réactivité, ainsi que les formules et l’isomérie de constitution, quelles propositions sont exactes ?",
    "explanation": "À retenir : Le carbone d’une triple liaison C≡C est classiquement sp. Le carbone d’une double liaison C=C est classiquement sp2. Un nitrile contient un groupe C≡N.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:hybridation"
    ],
    "choices": [
      {
        "content": "Le carbone d’une triple liaison C≡C est classiquement sp.",
        "correct": true,
        "explanation": "Deux domaines hybridés sp conduisent à une géométrie linéaire."
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
      },
      {
        "content": "Le carbone d’une double liaison C=C est classiquement sp2.",
        "correct": true,
        "explanation": "Il adopte une géométrie trigonale plane et conserve une orbitale p."
      },
      {
        "content": "Un nitrile contient un groupe C≡N.",
        "correct": true,
        "explanation": "Le carbone et l’azote sont liés par une triple liaison."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel est l’état d’hybridation classique d’un carbone engagé dans une double liaison C=C ?",
    "explanation": "Un carbone alcénique est classiquement sp2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
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
    "format": "QRM",
    "question": "Concernant les fonctions organiques et leur réactivité ainsi que les hydrocarbures, quelles propositions sont exactes ?",
    "explanation": "À retenir : L’addition de HX sur un alcène dissymétrique peut suivre la régiosélectivité de Markovnikov dans les conditions usuelles. L’oxygène carbonylé est globalement nucléophile/basicité de Lewis grâce à ses doublets. Le carbone carbonylé d’un aldéhyde ou d’une cétone est électrophile.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:reactivite-alcenes"
    ],
    "choices": [
      {
        "content": "L’addition de HX sur un alcène dissymétrique peut suivre la régiosélectivité de Markovnikov dans les conditions usuelles.",
        "correct": true,
        "explanation": "Le proton et l’halogénure s’ajoutent selon la stabilité relative de l’intermédiaire dans le mécanisme ionique usuel."
      },
      {
        "content": "L’oxygène carbonylé est globalement nucléophile/basicité de Lewis grâce à ses doublets.",
        "correct": true,
        "explanation": "Il peut coordonner un proton ou un électrophile."
      },
      {
        "content": "Le carbone carbonylé d’un aldéhyde ou d’une cétone est électrophile.",
        "correct": true,
        "explanation": "La polarisation C=O appauvrit le carbone en densité électronique."
      },
      {
        "content": "Un thiol comporte le motif –OH.",
        "correct": false,
        "explanation": "–OH caractérise un alcool ; un thiol porte –SH."
      },
      {
        "content": "Une cétone porte nécessairement le carbonyle en extrémité de chaîne avec un hydrogène.",
        "correct": false,
        "explanation": "C’est la description d’un aldéhyde."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant les fonctions organiques et leur réactivité, quelle proposition est exacte ?",
    "explanation": "Le carbone carbonylé aldéhydique porte un hydrogène oxydable.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:aldehydes"
    ],
    "choices": [
      {
        "content": "Une amide et une amine ont exactement la même basicité car leur azote est identique.",
        "correct": false,
        "explanation": "La conjugaison avec le carbonyle rend l’amide beaucoup moins basique."
      },
      {
        "content": "Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple.",
        "correct": true,
        "explanation": "Le carbone carbonylé aldéhydique porte un hydrogène oxydable."
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
        "content": "Le terme correct pour la géométrie sp est « diagonale ».",
        "correct": false,
        "explanation": "Le terme attendu est digonale/linéaire."
      }
    ]
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant la valence, les liaisons et l’hybridation ainsi que les fonctions organiques et leur réactivité.",
    "explanation": "Les deux points à retenir sont les suivants : Un thiol comporte un groupe –SH. Le carbone d’une triple liaison C≡C est classiquement sp.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
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
        "content": "Un thiol comporte un groupe –SH.",
        "correct": true,
        "explanation": "C’est l’analogue soufré d’un alcool."
      },
      {
        "content": "Le terme correct pour la géométrie sp est « diagonale ».",
        "correct": false,
        "explanation": "Le terme attendu est digonale/linéaire."
      },
      {
        "content": "Le carbone d’une triple liaison C≡C est classiquement sp.",
        "correct": true,
        "explanation": "Deux domaines hybridés sp conduisent à une géométrie linéaire."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les fonctions organiques et leur réactivité, quelles propositions sont exactes ?",
    "explanation": "À retenir : Un éther-oxyde présente un motif C–O–C. Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène. Un aldéhyde s’oxyde généralement plus facilement en acide carboxylique qu’une cétone simple. Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
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
        "content": "Un aldéhyde possède un groupe carbonyle terminal portant au moins un hydrogène.",
        "correct": true,
        "explanation": "Le motif est R–CHO."
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
        "content": "Une amine n’est pas une amide : dans une amide, le doublet de l’azote est conjugué au carbonyle.",
        "correct": true,
        "explanation": "Cette conjugaison diminue notamment la basicité de l’azote amidique."
      }
    ]
  },
  {
    "order": 11,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi ces dix propositions portant sur la stéréochimie, les fonctions organiques et leur réactivité, ainsi que la valence, les liaisons et l’hybridation, sélectionnez exactement les cinq exactes.",
    "explanation": "Les cinq points à retenir sont les suivants : Un carbamate contient le motif O–C(=O)–N. Un carbone tétraédrique portant quatre substituants différents est un centre stéréogène classique. Un ammonium quaternaire porte quatre substituants carbonés sur un azote chargé positivement. L’isomérie Z/E nécessite que chacun des deux carbones de la double liaison porte deux substituants différents. Deux énantiomères possèdent les mêmes propriétés dans un environnement achiral, sauf notamment le sens de rotation optique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
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
        "content": "La rotation autour d’une double liaison C=C est libre comme autour d’une liaison simple.",
        "correct": false,
        "explanation": "La rotation romprait le recouvrement π."
      },
      {
        "content": "Un carbamate contient le motif O–C(=O)–N.",
        "correct": true,
        "explanation": "Il combine des éléments structuraux d’un ester et d’une amide."
      },
      {
        "content": "Un nitrile se reconnaît au motif N–N.",
        "correct": false,
        "explanation": "Un nitrile contient C≡N."
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
        "content": "Un carboxylate est moins stabilisé qu’un alcoolate parce que sa charge est localisée sur un seul oxygène.",
        "correct": false,
        "explanation": "La charge du carboxylate est délocalisée par résonance."
      },
      {
        "content": "Deux énantiomères possèdent les mêmes propriétés dans un environnement achiral, sauf notamment le sens de rotation optique.",
        "correct": true,
        "explanation": "Ils diffèrent dans leurs interactions avec des environnements chiraux."
      }
    ]
  },
  {
    "order": 12,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel est l’état d’hybridation classique d’un carbone engagé dans une triple liaison C≡C ?",
    "explanation": "Un carbone alcynique est classiquement sp.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
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
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi ces cinq affirmations sur les fonctions organiques et leur réactivité, laquelle est correcte ?",
    "explanation": "Le groupe combine carbonyle et hydroxyle sur le même carbone.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:acides-carboxyliques"
    ],
    "choices": [
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
        "content": "Un acide carboxylique possède un groupe carboxyle –COOH.",
        "correct": true,
        "explanation": "Le groupe combine carbonyle et hydroxyle sur le même carbone."
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
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les fonctions organiques et leur réactivité, la stéréochimie, ainsi que la valence, les liaisons et l’hybridation, quelles propositions sont exactes ?",
    "explanation": "À retenir : Un ammonium quaternaire porte quatre substituants carbonés sur un azote chargé positivement. L’isomérie Z/E nécessite que chacun des deux carbones de la double liaison porte deux substituants différents. Un carbone tétraédrique portant quatre substituants différents est un centre stéréogène classique. Un thiol comporte un groupe –SH.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
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
        "content": "Un carbone tétraédrique portant quatre substituants différents est un centre stéréogène classique.",
        "correct": true,
        "explanation": "Il peut engendrer une paire d’énantiomères si aucune autre symétrie ne l’annule."
      },
      {
        "content": "Un alcool et un éther sont nécessairement des isomères optiques.",
        "correct": false,
        "explanation": "Ils peuvent être isomères de fonction si leur formule brute coïncide, mais pas nécessairement optiques."
      },
      {
        "content": "Un thiol comporte un groupe –SH.",
        "correct": true,
        "explanation": "C’est l’analogue soufré d’un alcool."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sur les fonctions organiques et leur réactivité, la valence, les liaisons et l’hybridation, ainsi que les hydrocarbures, quelles affirmations sont correctes ?",
    "explanation": "À retenir : L’oxygène carbonylé est globalement nucléophile/basicité de Lewis grâce à ses doublets. L’addition de HX sur un alcène dissymétrique peut suivre la régiosélectivité de Markovnikov dans les conditions usuelles. Le carbone carbonylé d’un aldéhyde ou d’une cétone est électrophile.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:carbonyle"
    ],
    "choices": [
      {
        "content": "L’oxygène carbonylé est globalement nucléophile/basicité de Lewis grâce à ses doublets.",
        "correct": true,
        "explanation": "Il peut coordonner un proton ou un électrophile."
      },
      {
        "content": "L’addition de HX sur un alcène dissymétrique peut suivre la régiosélectivité de Markovnikov dans les conditions usuelles.",
        "correct": true,
        "explanation": "Le proton et l’halogénure s’ajoutent selon la stabilité relative de l’intermédiaire dans le mécanisme ionique usuel."
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
      },
      {
        "content": "Le carbone carbonylé d’un aldéhyde ou d’une cétone est électrophile.",
        "correct": true,
        "explanation": "La polarisation C=O appauvrit le carbone en densité électronique."
      }
    ]
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sélectionnez l’oxygène du groupe carbonyle.",
    "explanation": "La zone attendue correspond à : Oxygène carbonylé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:CHIMIE",
      "theme:qzone"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c12/carbonyl-oxygen-qzone.svg",
      "alt": "Groupe carbonyle",
      "width": 960,
      "height": 560
    },
    "expectedZones": [
      {
        "id": "target",
        "label": "Oxygène carbonylé",
        "x": 0.59,
        "y": 0.24,
        "tolerance": 0.07
      }
    ],
    "defaultTolerance": 0.07
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les lipides ainsi que l’enzymologie, quelles propositions sont exactes ?",
    "explanation": "À retenir : Un triacylglycérol est formé par estérification des trois hydroxyles du glycérol par des acides gras. La liaison peptidique présente un caractère partiel de double liaison.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:sterols"
    ],
    "choices": [
      {
        "content": "Le cholestérol est un triacylglycérol.",
        "correct": false,
        "explanation": "C’est un stérol à noyau stérane."
      },
      {
        "content": "Le glycogène est un polymère linéaire relié exclusivement par des liaisons β(1→4).",
        "correct": false,
        "explanation": "Le glycogène est ramifié, avec liaisons α(1→4) et α(1→6)."
      },
      {
        "content": "L’abscisse à l’origine de Lineweaver-Burk vaut +1/Km.",
        "correct": false,
        "explanation": "Elle vaut −1/Km."
      },
      {
        "content": "Un triacylglycérol est formé par estérification des trois hydroxyles du glycérol par des acides gras.",
        "correct": true,
        "explanation": "Il comporte trois fonctions ester."
      },
      {
        "content": "La liaison peptidique présente un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La résonance limite sa rotation et favorise sa planéité."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide aminé remplace le glutamate en position β6 dans HbS ?",
    "explanation": "La mutation classique est β6 Glu→Val.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "valine",
        "Val",
        "V"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les acides aminés et les protéines ?",
    "explanation": "Elle ne possède pas quatre substituants différents.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:aa-structure"
    ],
    "choices": [
      {
        "content": "Les leucotriènes sont synthétisés principalement par les cyclo-oxygénases.",
        "correct": false,
        "explanation": "Ils dérivent des lipoxygénases."
      },
      {
        "content": "Les feuillets β sont toujours antiparallèles.",
        "correct": false,
        "explanation": "Ils peuvent être parallèles ou antiparallèles."
      },
      {
        "content": "Vmax est indépendante de la concentration totale en enzyme.",
        "correct": false,
        "explanation": "Dans le modèle simple, Vmax = kcat[E]t."
      },
      {
        "content": "La glycine est achirale car son carbone α porte deux hydrogènes.",
        "correct": true,
        "explanation": "Elle ne possède pas quatre substituants différents."
      },
      {
        "content": "La cyclisation d’un ose supprime définitivement toute possibilité de forme ouverte.",
        "correct": false,
        "explanation": "En solution, un équilibre subsiste entre formes cycliques et une faible proportion de forme ouverte."
      }
    ]
  },
  {
    "order": 20,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant les glucides ainsi que les lipides.",
    "explanation": "Les deux points à retenir sont les suivants : Le D-fructose est un cétohexose. L’acide linoléique est un acide gras essentiel de la série n-6.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Les leucotriènes sont synthétisés principalement par les cyclo-oxygénases.",
        "correct": false,
        "explanation": "Ils dérivent des lipoxygénases."
      },
      {
        "content": "Vmax est indépendante de la concentration totale en enzyme.",
        "correct": false,
        "explanation": "Dans le modèle simple, Vmax = kcat[E]t."
      },
      {
        "content": "Les feuillets β sont toujours antiparallèles.",
        "correct": false,
        "explanation": "Ils peuvent être parallèles ou antiparallèles."
      },
      {
        "content": "Le D-fructose est un cétohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction cétone et six carbones."
      },
      {
        "content": "L’acide linoléique est un acide gras essentiel de la série n-6.",
        "correct": true,
        "explanation": "L’humain ne synthétise pas les doubles liaisons nécessaires à sa production de novo."
      }
    ]
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les glucides, les lipides, ainsi que les acides aminés et les protéines, quelles propositions sont exactes ?",
    "explanation": "À retenir : Le saccharose associe un résidu de glucose et un résidu de fructose. L’acide arachidonique est un précurseur majeur d’eicosanoïdes.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:unites"
    ],
    "choices": [
      {
        "content": String.raw`Un katal correspond à $${texQuantity(1, U.MICROMOL_PER_MIN)}$.`,
        "correct": false,
        "explanation": String.raw`Cette définition correspond à $${texQuantity(1, U.ENZYME_UNIT)}$ ; un katal vaut $${texQuantity(1, U.MOL_PER_S)}$.`
      },
      {
        "content": "Le saccharose associe un résidu de glucose et un résidu de fructose.",
        "correct": true,
        "explanation": "Le saccharose est un diholoside glucose-fructose."
      },
      {
        "content": "La glycine possède deux centres stéréogènes.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "La série oméga d’un acide gras est déterminée en numérotant depuis le carbone carboxylique.",
        "correct": false,
        "explanation": "La nomenclature oméga compte depuis l’extrémité méthyle."
      },
      {
        "content": "L’acide arachidonique est un précurseur majeur d’eicosanoïdes.",
        "correct": true,
        "explanation": "Il peut être libéré des phospholipides puis métabolisé par COX/LOX."
      }
    ]
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": String.raw`Quelle est approximativement la périodicité D du collagène I ? Donnez uniquement la valeur numérique, exprimée en $${U.NM}$.`,
    "explanation": String.raw`La périodicité D est d’environ $${texQuantity(67, U.NM)}$.`,
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 67,
      "tolerance": 2,
      "unit": "nm",
      "displayUnit": U.NM
    }
  },
  {
    "order": 23,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les lipides, les acides aminés et les protéines, ainsi que l’enzymologie, quelles propositions sont exactes ?",
    "explanation": "À retenir : Les leucotriènes dérivent de voies lipoxygénases. Km a l’unité d’une concentration. L’hémoglobine adulte HbA est un tétramère α2β2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
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
        "content": "Les leucotriènes dérivent de voies lipoxygénases.",
        "correct": true,
        "explanation": "La 5-lipoxygénase est notamment impliquée dans leur biosynthèse."
      },
      {
        "content": "Km a l’unité d’une concentration.",
        "correct": true,
        "explanation": "Il est ajouté à [S] dans l’équation."
      },
      {
        "content": "Une hélice α est stabilisée principalement par des ponts disulfure entre chaque résidu.",
        "correct": false,
        "explanation": "Les liaisons hydrogène du squelette sont la stabilisation fondamentale de l’hélice."
      },
      {
        "content": "L’hémoglobine adulte HbA est un tétramère α2β2.",
        "correct": true,
        "explanation": "Elle contient quatre sous-unités et quatre groupes hème."
      }
    ]
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les glucides ?",
    "explanation": "Sa forme ouverte possède une fonction cétone et six carbones.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:oses"
    ],
    "choices": [
      {
        "content": "L’état stationnaire signifie qu’aucun produit n’est formé.",
        "correct": false,
        "explanation": "Un flux de produit est précisément mesuré."
      },
      {
        "content": "Le lactose est formé de deux molécules de fructose.",
        "correct": false,
        "explanation": "Le lactose associe galactose et glucose."
      },
      {
        "content": "Les esters de cholestérol sont plus amphiphiles que le cholestérol libre grâce à un OH libre supplémentaire.",
        "correct": false,
        "explanation": "L’estérification masque le OH et augmente l’hydrophobicité."
      },
      {
        "content": "Les laminines et les lamines sont deux noms du même réseau protéique nucléaire.",
        "correct": false,
        "explanation": "Les laminines sont extracellulaires ; les lamines sont nucléaires."
      },
      {
        "content": "Le D-fructose est un cétohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction cétone et six carbones."
      }
    ]
  },
  {
    "order": 25,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Parmi ces cinq affirmations portant sur les glucides ainsi que les lipides, retenez exactement les deux correctes.",
    "explanation": "Les deux points à retenir sont les suivants : La cyclisation du glucose crée un nouveau centre stéréogène : le carbone anomérique. Les triacylglycérols constituent une forme majeure de réserve énergétique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "La cyclisation du glucose crée un nouveau centre stéréogène : le carbone anomérique.",
        "correct": true,
        "explanation": "Le carbone carbonylé devient le carbone anomérique lors de l’hémiacétalisation."
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
        "content": "Le lactose est formé de deux molécules de fructose.",
        "correct": false,
        "explanation": "Le lactose associe galactose et glucose."
      },
      {
        "content": "L’état stationnaire signifie qu’aucun produit n’est formé.",
        "correct": false,
        "explanation": "Un flux de produit est précisément mesuré."
      }
    ]
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les acides aminés et les protéines, les lipides, ainsi que l’enzymologie, quelles propositions sont exactes ?",
    "explanation": "À retenir : Le collagène comporte une triple hélice riche en glycine, proline et hydroxyproline. À [S] ≫ Km, la vitesse tend vers Vmax et devient peu dépendante de [S]. Un ose possède une fonction carbonyle dans sa forme ouverte et plusieurs fonctions alcool. La sphingomyéline contient un groupement phosphocholine ou phosphoéthanolamine selon l’espèce.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:sterols"
    ],
    "choices": [
      {
        "content": "Le cholestérol est un triacylglycérol.",
        "correct": false,
        "explanation": "C’est un stérol à noyau stérane."
      },
      {
        "content": "Le collagène comporte une triple hélice riche en glycine, proline et hydroxyproline.",
        "correct": true,
        "explanation": "La répétition Gly-X-Y est caractéristique."
      },
      {
        "content": "À [S] ≫ Km, la vitesse tend vers Vmax et devient peu dépendante de [S].",
        "correct": true,
        "explanation": "L’ordre apparent en substrat tend vers 0."
      },
      {
        "content": "Un ose possède une fonction carbonyle dans sa forme ouverte et plusieurs fonctions alcool.",
        "correct": true,
        "explanation": "Les oses sont des polyhydroxy-aldéhydes ou polyhydroxy-cétones."
      },
      {
        "content": "La sphingomyéline contient un groupement phosphocholine ou phosphoéthanolamine selon l’espèce.",
        "correct": true,
        "explanation": "Chez les mammifères, la phosphocholine est classique."
      }
    ]
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi ces dix propositions portant sur les glucides, les lipides, ainsi que l’enzymologie, sélectionnez exactement les cinq exactes.",
    "explanation": String.raw`Les cinq points à retenir sont les suivants : un ose possède une fonction carbonyle dans sa forme ouverte et plusieurs fonctions alcool ; un carbone anomérique engagé dans une liaison osidique peut perdre son caractère réducteur ; dans une représentation de Lineweaver-Burk, l’ordonnée à l’origine vaut $1/V_{max}$ ; le cholestérol possède un noyau stérane ; la périodicité D des fibrilles de collagène I est d’environ $${texQuantity(67, U.NM)}$.`,
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "Les anomères α et β sont des énantiomères.",
        "correct": false,
        "explanation": "Ce sont des diastéréoisomères qui diffèrent au carbone anomérique."
      },
      {
        "content": "Un ose possède une fonction carbonyle dans sa forme ouverte et plusieurs fonctions alcool.",
        "correct": true,
        "explanation": "Les oses sont des polyhydroxy-aldéhydes ou polyhydroxy-cétones."
      },
      {
        "content": "Un carbone anomérique engagé dans une liaison osidique peut perdre son caractère réducteur.",
        "correct": true,
        "explanation": "Le pouvoir réducteur nécessite la possibilité d’ouvrir le cycle au niveau du carbone anomérique libre."
      },
      {
        "content": "Dans une représentation de Lineweaver-Burk, l’ordonnée à l’origine vaut 1/Vmax.",
        "correct": true,
        "explanation": "L’équation linéarisée est 1/v = Km/Vmax·1/[S] + 1/Vmax."
      },
      {
        "content": "Les leucotriènes sont synthétisés principalement par les cyclo-oxygénases.",
        "correct": false,
        "explanation": "Ils dérivent des lipoxygénases."
      },
      {
        "content": "Le cholestérol possède un noyau stérane.",
        "correct": true,
        "explanation": "Il appartient aux stérols."
      },
      {
        "content": "Les eicosanoïdes sont stockés en grande quantité dans des vésicules avant leur libération.",
        "correct": false,
        "explanation": "Ils sont généralement synthétisés à la demande à partir de précurseurs lipidiques."
      },
      {
        "content": String.raw`La périodicité D des fibrilles de collagène I est d’environ $${texQuantity(67, U.NM)}$.`,
        "correct": true,
        "explanation": "Elle reflète l’arrangement décalé des molécules de collagène."
      },
      {
        "content": "Une hélice α est stabilisée principalement par des ponts disulfure entre chaque résidu.",
        "correct": false,
        "explanation": "Les liaisons hydrogène du squelette sont la stabilisation fondamentale de l’hélice."
      },
      {
        "content": "Lorsque [S] = Km, v0 = Vmax.",
        "correct": false,
        "explanation": "v0 = Vmax/2."
      }
    ]
  },
  {
    "order": 28,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nom porte le polymère filamentaire formé par l’actine globulaire ?",
    "explanation": "L’actine F correspond au polymère d’actine G.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "F-actine",
        "actine F",
        "F actine"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 29,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant les acides aminés et les protéines, quelle proposition est exacte ?",
    "explanation": "Il ne signifie pas absence de charges internes.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:acido-basique"
    ],
    "choices": [
      {
        "content": "Le point isoélectrique correspond au pH où la charge nette moyenne de l’espèce est nulle.",
        "correct": true,
        "explanation": "Il ne signifie pas absence de charges internes."
      },
      {
        "content": "1 U est exactement égale à 1 kat.",
        "correct": false,
        "explanation": "Les unités diffèrent de nombreux ordres de grandeur."
      },
      {
        "content": "Le D-fructose est un aldopentose.",
        "correct": false,
        "explanation": "Le D-fructose est un cétohexose."
      },
      {
        "content": "La phospholipase A2 coupe la liaison phosphodiester entre phosphate et tête polaire.",
        "correct": false,
        "explanation": "Elle hydrolyse l’ester acyle en sn-2."
      },
      {
        "content": "La liaison peptidique tourne librement comme une liaison simple C–C.",
        "correct": false,
        "explanation": "Son caractère partiel de double liaison limite fortement la rotation."
      }
    ]
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les glucides ainsi que l’enzymologie, quelles propositions sont exactes ?",
    "explanation": "À retenir : Le 2-désoxyribose diffère du ribose par l’absence d’un oxygène en C2. Le ribose est un pentose entrant dans la composition de l’ARN. Le D-glucose et le D-galactose sont épimères en C4. L’actine G est monomérique et l’actine F correspond à un polymère filamentaire.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:unites"
    ],
    "choices": [
      {
        "content": String.raw`Un katal correspond à $${texQuantity(1, U.MICROMOL_PER_MIN)}$.`,
        "correct": false,
        "explanation": String.raw`Cette définition correspond à $${texQuantity(1, U.ENZYME_UNIT)}$ ; un katal vaut $${texQuantity(1, U.MOL_PER_S)}$.`
      },
      {
        "content": "Le 2-désoxyribose diffère du ribose par l’absence d’un oxygène en C2.",
        "correct": true,
        "explanation": "Le carbone 2 porte H à la place de OH."
      },
      {
        "content": "Le ribose est un pentose entrant dans la composition de l’ARN.",
        "correct": true,
        "explanation": "L’ARN contient du β-D-ribofuranose."
      },
      {
        "content": "Le D-glucose et le D-galactose sont épimères en C4.",
        "correct": true,
        "explanation": "Ils ne diffèrent que par la configuration du carbone 4."
      },
      {
        "content": "L’actine G est monomérique et l’actine F correspond à un polymère filamentaire.",
        "correct": true,
        "explanation": "La polymérisation de l’actine forme les microfilaments."
      }
    ]
  },
  {
    "order": 31,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les lipides ?",
    "explanation": "Il comporte trois fonctions ester.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:triacylglycerols"
    ],
    "choices": [
      {
        "content": "Les anomères α et β sont des énantiomères.",
        "correct": false,
        "explanation": "Ce sont des diastéréoisomères qui diffèrent au carbone anomérique."
      },
      {
        "content": "Un triacylglycérol est formé par estérification des trois hydroxyles du glycérol par des acides gras.",
        "correct": true,
        "explanation": "Il comporte trois fonctions ester."
      },
      {
        "content": "Les leucotriènes sont synthétisés principalement par les cyclo-oxygénases.",
        "correct": false,
        "explanation": "Ils dérivent des lipoxygénases."
      },
      {
        "content": "Les feuillets β sont toujours antiparallèles.",
        "correct": false,
        "explanation": "Ils peuvent être parallèles ou antiparallèles."
      },
      {
        "content": "Vmax est indépendante de la concentration totale en enzyme.",
        "correct": false,
        "explanation": "Dans le modèle simple, Vmax = kcat[E]t."
      }
    ]
  },
  {
    "order": 32,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l’enzymologie, les glucides, ainsi que les acides aminés et les protéines, quelles propositions sont exactes ?",
    "explanation": "À retenir : La glycine est achirale car son carbone α porte deux hydrogènes. Dans l’approximation d’état stationnaire, d[ES]/dt est proche de zéro. Le D-glucose est un aldohexose.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:aa-structure"
    ],
    "choices": [
      {
        "content": "La glycine est achirale car son carbone α porte deux hydrogènes.",
        "correct": true,
        "explanation": "Elle ne possède pas quatre substituants différents."
      },
      {
        "content": "Lorsque [S] = Km, v0 = Vmax.",
        "correct": false,
        "explanation": "v0 = Vmax/2."
      },
      {
        "content": "Dans l’approximation d’état stationnaire, d[ES]/dt est proche de zéro.",
        "correct": true,
        "explanation": "La concentration du complexe ES varie peu pendant la mesure initiale."
      },
      {
        "content": "Les anomères α et β sont des énantiomères.",
        "correct": false,
        "explanation": "Ce sont des diastéréoisomères qui diffèrent au carbone anomérique."
      },
      {
        "content": "Le D-glucose est un aldohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction aldéhyde et six carbones."
      }
    ]
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sélectionnez une région Fab de l’anticorps.",
    "explanation": "La zone attendue correspond à : Région Fab.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOCHIMIE",
      "theme:qzone"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c12/antibody-fab-qzone.svg",
      "alt": "Anticorps schématique",
      "width": 960,
      "height": 560
    },
    "expectedZones": [
      {
        "id": "target",
        "label": "Région Fab",
        "x": 0.3,
        "y": 0.18,
        "tolerance": 0.1
      }
    ],
    "defaultTolerance": 0.1
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lamines, laminines et compartiments cellulaires : quelles propositions sont exactes ?",
    "explanation": "Le piège porte sur deux termes proches mais biologiquement distincts : les lamines sont nucléaires, les laminines sont extracellulaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:trap:lamine-laminine"
    ],
    "choices": [
      {
        "content": "Les lamines sont des protéines de filaments intermédiaires de type V de la lamina nucléaire.",
        "correct": true,
        "explanation": "Elles sous-tendent la membrane nucléaire interne."
      },
      {
        "content": "Les laminines sont des glycoprotéines hétérotrimériques de la matrice extracellulaire.",
        "correct": true,
        "explanation": "Elles sont notamment abondantes dans les membranes basales."
      },
      {
        "content": "Les laminines constituent le réseau principal de filaments intermédiaires du noyau.",
        "correct": false,
        "explanation": "Cette fonction revient aux lamines ; les laminines sont extracellulaires."
      },
      {
        "content": "Les lamines A/C sont codées par LMNA.",
        "correct": true,
        "explanation": "LMNA code les lamines A et C."
      },
      {
        "content": "“Lamine” et “laminine” sont deux graphies interchangeables de la même protéine.",
        "correct": false,
        "explanation": "Ce sont deux familles de protéines et deux localisations totalement différentes."
      }
    ]
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel complexe cycline-CDK constitue le MPF classique ?",
    "explanation": "Le MPF classique associe cycline B et CDK1.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cycline B-CDK1",
        "cycline B / CDK1",
        "CDK1-cycline B",
        "CDK1 cycline B"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement l’adressage des protéines et le système endomembranaire ?",
    "explanation": "Il forme un canal membranaire de translocation.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:adressage"
    ],
    "choices": [
      {
        "content": "Le transport actif primaire utilise uniquement un gradient ionique préexistant, sans hydrolyse directe d’ATP.",
        "correct": false,
        "explanation": "C’est le transport actif secondaire qui exploite typiquement un gradient ; le primaire utilise directement une source d’énergie comme l’ATP."
      },
      {
        "content": "Une cellule diploïde en G2 est 4n/4C.",
        "correct": false,
        "explanation": "Après réplication, elle reste 2n/4C tant que les chromatides sœurs ne sont pas séparées en cellules filles."
      },
      {
        "content": "Le translocon permet le passage ou l’insertion de la chaîne polypeptidique au niveau du RE.",
        "correct": true,
        "explanation": "Il forme un canal membranaire de translocation."
      },
      {
        "content": "Wee1 active CDK1 en retirant ses phosphates inhibiteurs.",
        "correct": false,
        "explanation": "Wee1 les ajoute ; Cdc25 les retire."
      },
      {
        "content": "APC/C-Cdc20 stabilise la sécurine afin d’empêcher la séparase d’agir pendant l’anaphase.",
        "correct": false,
        "explanation": "APC/C cible la sécurine pour dégradation."
      }
    ]
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant l’adressage des protéines et le système endomembranaire, le trafic vésiculaire, ainsi que la mitochondrie et la respiration cellulaire.",
    "explanation": "Les deux points à retenir sont les suivants : Les vésicules COPII assurent classiquement le transport antérograde du RE vers le Golgi. L’ADN mitochondrial humain est distinct de l’ADN nucléaire.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "La catalase produit le H2O2 comme unique fonction.",
        "correct": false,
        "explanation": "Elle est surtout impliquée dans sa détoxification, même si les peroxysomes réalisent aussi des oxydations productrices de H2O2."
      },
      {
        "content": "Les vésicules COPII assurent classiquement le transport antérograde du RE vers le Golgi.",
        "correct": true,
        "explanation": "COPII bourgeonne à partir des sites de sortie du RE."
      },
      {
        "content": "L’ADN mitochondrial humain est distinct de l’ADN nucléaire.",
        "correct": true,
        "explanation": "Il constitue une petite fraction du génome cellulaire total."
      },
      {
        "content": "Le nucléole est un organite entouré d’une double membrane.",
        "correct": false,
        "explanation": "Il n’est pas membrané."
      },
      {
        "content": "Une lignée primaire est par définition immortelle.",
        "correct": false,
        "explanation": "Les cultures primaires ont généralement une durée de vie/prolifération limitée."
      }
    ]
  },
  {
    "order": 38,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le cycle cellulaire et ses contrôles, la membrane plasmique et le cytosquelette, ainsi que l’adressage des protéines et le système endomembranaire, quelles propositions sont exactes ?",
    "explanation": "À retenir : Le point de contrôle du fuseau implique des protéines MAD/BUB et retarde l’activation d’APC/C-Cdc20 tant que des kinétochores ne sont pas correctement attachés. APC/C-Cdc20 favorise la dégradation de la sécurine et de la cycline B.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:SAC"
    ],
    "choices": [
      {
        "content": "Le point de contrôle du fuseau implique des protéines MAD/BUB et retarde l’activation d’APC/C-Cdc20 tant que des kinétochores ne sont pas correctement attachés.",
        "correct": true,
        "explanation": "Il prévient une séparation prématurée des chromatides."
      },
      {
        "content": "COPII assure principalement le transport rétrograde Golgi vers RE.",
        "correct": false,
        "explanation": "COPII est principalement antérograde RE→Golgi ; COPI intervient dans le rétrograde."
      },
      {
        "content": "La diffusion facilitée permet toujours de déplacer un soluté contre son gradient sans énergie.",
        "correct": false,
        "explanation": "Contre le gradient, un mécanisme actif ou un couplage énergétique est nécessaire."
      },
      {
        "content": "APC/C-Cdc20 favorise la dégradation de la sécurine et de la cycline B.",
        "correct": true,
        "explanation": "La séparase libérée clive les cohésines et la chute de cycline B favorise la sortie de mitose."
      },
      {
        "content": "Les microtubules sont constitués d’actine globulaire.",
        "correct": false,
        "explanation": "Ils sont constitués de tubuline α/β ; l’actine forme les microfilaments."
      }
    ]
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de copies de chaque histone H2A, H2B, H3 et H4 contient le cœur nucléosomique canonique ?",
    "explanation": "Le cœur est un octamère avec deux copies de chacune des quatre histones.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    }
  },
  {
    "order": 40,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la membrane plasmique et le cytosquelette, l’adressage des protéines et le système endomembranaire, ainsi que la mitochondrie et la respiration cellulaire, quelles propositions sont exactes ?",
    "explanation": "À retenir : La SRP reconnaît un peptide signal hydrophobe de nombreuses protéines destinées au RE. Les phospholipides membranaires sont amphiphiles. Les complexes I, III et IV contribuent au pompage de protons à travers la membrane interne.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:adressage"
    ],
    "choices": [
      {
        "content": "La SRP reconnaît un peptide signal hydrophobe de nombreuses protéines destinées au RE.",
        "correct": true,
        "explanation": "Elle cible le ribosome vers le récepteur de SRP et le translocon."
      },
      {
        "content": "Tout le génome cellulaire humain est contenu dans le noyau sans exception.",
        "correct": false,
        "explanation": "Les mitochondries contiennent leur propre ADN."
      },
      {
        "content": "Les phospholipides membranaires sont amphiphiles.",
        "correct": true,
        "explanation": "Ils possèdent une tête hydrophile et des chaînes hydrophobes."
      },
      {
        "content": "Les complexes I, III et IV contribuent au pompage de protons à travers la membrane interne.",
        "correct": true,
        "explanation": "Le complexe II ne pompe pas directement de protons."
      },
      {
        "content": "L’immunofluorescence directe exige obligatoirement un anticorps secondaire fluorescent.",
        "correct": false,
        "explanation": "En direct, l’anticorps primaire est lui-même marqué."
      }
    ]
  },
  {
    "order": 41,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement l’adressage des protéines et le système endomembranaire ainsi que le trafic vésiculaire ?",
    "explanation": "COPII bourgeonne à partir des sites de sortie du RE.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:coats"
    ],
    "choices": [
      {
        "content": "L’endocytose médiée par récepteur est totalement indépendante de protéines de manteau.",
        "correct": false,
        "explanation": "La clathrine intervient fréquemment dans ce processus."
      },
      {
        "content": "Tout le génome cellulaire humain est contenu dans le noyau sans exception.",
        "correct": false,
        "explanation": "Les mitochondries contiennent leur propre ADN."
      },
      {
        "content": "L’immunofluorescence directe exige obligatoirement un anticorps secondaire fluorescent.",
        "correct": false,
        "explanation": "En direct, l’anticorps primaire est lui-même marqué."
      },
      {
        "content": "Les vésicules COPII assurent classiquement le transport antérograde du RE vers le Golgi.",
        "correct": true,
        "explanation": "COPII bourgeonne à partir des sites de sortie du RE."
      },
      {
        "content": "Les SNARE déterminent la synthèse des phospholipides membranaires.",
        "correct": false,
        "explanation": "Elles participent surtout à l’arrimage/fusion membranaire."
      }
    ]
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle polymérase transcrit le précurseur 45S des ARNr 18S, 5,8S et 28S ?",
    "explanation": "Le précurseur 45S est transcrit par l’ARN polymérase I.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ARN polymérase I",
        "RNA polymerase I",
        "Pol I",
        "ARN pol I"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 43,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sélectionnez la membrane interne mitochondriale.",
    "explanation": "La zone attendue correspond à : Membrane interne mitochondriale.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qzone"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c12/mitochondria-inner-membrane-qzone.svg",
      "alt": "Mitochondrie schématique",
      "width": 960,
      "height": 560
    },
    "expectedZones": [
      {
        "id": "target",
        "label": "Membrane interne mitochondriale",
        "x": 0.5,
        "y": 0.5,
        "tolerance": 0.11
      }
    ],
    "defaultTolerance": 0.11
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la membrane plasmique et le cytosquelette, le trafic vésiculaire, ainsi que le noyau, la chromatine et le nucléole, quelles propositions sont exactes ?",
    "explanation": "À retenir : La clathrine intervient dans l’endocytose médiée par récepteur et dans certains transports depuis le TGN. Un microtubule cytoplasmique comporte typiquement 13 protofilaments. Les pores nucléaires sont constitués de nucléoporines.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:clathrine"
    ],
    "choices": [
      {
        "content": "La clathrine intervient dans l’endocytose médiée par récepteur et dans certains transports depuis le TGN.",
        "correct": true,
        "explanation": "Elle forme des manteaux avec des adaptateurs."
      },
      {
        "content": "Une membrane biologique est un feuillet protéique rigide dépourvu de lipides.",
        "correct": false,
        "explanation": "Elle repose sur une bicouche lipidique associée à des protéines."
      },
      {
        "content": "La cytocinèse animale est assurée par un anneau de tubuline et de dynéine sous la membrane.",
        "correct": false,
        "explanation": "L’anneau contractile est principalement actomyosine II."
      },
      {
        "content": "Un microtubule cytoplasmique comporte typiquement 13 protofilaments.",
        "correct": true,
        "explanation": "C’est l’architecture la plus courante des microtubules cytoplasmiques."
      },
      {
        "content": "Les pores nucléaires sont constitués de nucléoporines.",
        "correct": true,
        "explanation": "Les complexes de pore contrôlent les échanges nucléocytoplasmiques."
      }
    ]
  },
  {
    "order": 45,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant l’adressage des protéines et le système endomembranaire ainsi que le noyau, la chromatine et le nucléole.",
    "explanation": "Les deux points à retenir sont les suivants : L’histone H1 est associée à l’ADN de liaison plutôt qu’au cœur octamérique canonique. Les lysosomes maintiennent un pH luminal acide grâce à des pompes à protons.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "L’hybridation in situ sert uniquement à détecter des protéines.",
        "correct": false,
        "explanation": "Elle détecte des séquences d’acides nucléiques complémentaires."
      },
      {
        "content": "L’histone H1 est associée à l’ADN de liaison plutôt qu’au cœur octamérique canonique.",
        "correct": true,
        "explanation": "Elle contribue à la compaction de la chromatine."
      },
      {
        "content": "Les SNARE déterminent la synthèse des phospholipides membranaires.",
        "correct": false,
        "explanation": "Elles participent surtout à l’arrimage/fusion membranaire."
      },
      {
        "content": "Les pores nucléaires sont constitués principalement de laminine.",
        "correct": false,
        "explanation": "Ils sont formés de nucléoporines ; la laminine est extracellulaire."
      },
      {
        "content": "Les lysosomes maintiennent un pH luminal acide grâce à des pompes à protons.",
        "correct": true,
        "explanation": "Les V-ATPases acidifient la lumière lysosomale."
      }
    ]
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi ces dix propositions portant sur la membrane plasmique et le cytosquelette, le trafic vésiculaire, ainsi que l’adressage des protéines et le système endomembranaire, sélectionnez exactement les cinq exactes.",
    "explanation": "Les cinq points à retenir sont les suivants : Un microtubule cytoplasmique comporte typiquement 13 protofilaments. Les vésicules COPI participent notamment au transport rétrograde Golgi vers RE. L’enveloppe nucléaire comporte deux membranes séparées par un espace périnucléaire. La clathrine intervient dans l’endocytose médiée par récepteur et dans certains transports depuis le TGN. Les microtubules sont constitués d’hétérodimères α/β-tubuline.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "Les filaments intermédiaires possèdent une extrémité + et une extrémité − fortement distinctes.",
        "correct": false,
        "explanation": "Ils n’ont pas de polarité structurale nette comparable à l’actine ou aux microtubules."
      },
      {
        "content": "La clathrine est la protéine motrice qui hydrolyse l’ATP pour déplacer les vésicules sur les microtubules.",
        "correct": false,
        "explanation": "La clathrine est une protéine de manteau ; les moteurs sont notamment kinésines/dynéines."
      },
      {
        "content": "Un microtubule cytoplasmique comporte typiquement 13 protofilaments.",
        "correct": true,
        "explanation": "C’est l’architecture la plus courante des microtubules cytoplasmiques."
      },
      {
        "content": "Les vésicules COPI participent notamment au transport rétrograde Golgi vers RE.",
        "correct": true,
        "explanation": "COPI contribue au recyclage de composants vers le RE."
      },
      {
        "content": "L’enveloppe nucléaire comporte deux membranes séparées par un espace périnucléaire.",
        "correct": true,
        "explanation": "La membrane externe est continue avec le RE."
      },
      {
        "content": "Le complexe II pompe autant de protons que le complexe I.",
        "correct": false,
        "explanation": "Le complexe II ne pompe pas directement de protons."
      },
      {
        "content": "La dynéine cytoplasmique se déplace typiquement vers l’extrémité + des microtubules.",
        "correct": false,
        "explanation": "La dynéine se déplace classiquement vers l’extrémité − ; la plupart des kinésines vers +."
      },
      {
        "content": "Les lysosomes ont un pH luminal fortement alcalin.",
        "correct": false,
        "explanation": "Leur lumière est acide."
      },
      {
        "content": "La clathrine intervient dans l’endocytose médiée par récepteur et dans certains transports depuis le TGN.",
        "correct": true,
        "explanation": "Elle forme des manteaux avec des adaptateurs."
      },
      {
        "content": "Les microtubules sont constitués d’hétérodimères α/β-tubuline.",
        "correct": true,
        "explanation": "Les dimères s’assemblent en protofilaments puis en microtubules."
      }
    ]
  },
  {
    "order": 47,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement le noyau, la chromatine et le nucléole ?",
    "explanation": "Les complexes de pore contrôlent les échanges nucléocytoplasmiques.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:pores"
    ],
    "choices": [
      {
        "content": "La cytocinèse animale est assurée par un anneau de tubuline et de dynéine sous la membrane.",
        "correct": false,
        "explanation": "L’anneau contractile est principalement actomyosine II."
      },
      {
        "content": "Une membrane biologique est un feuillet protéique rigide dépourvu de lipides.",
        "correct": false,
        "explanation": "Elle repose sur une bicouche lipidique associée à des protéines."
      },
      {
        "content": "Toutes les protéines du cytosol traversent obligatoirement le RE avant d’atteindre leur destination.",
        "correct": false,
        "explanation": "De nombreuses protéines restent cytosoliques ou sont adressées directement au noyau, mitochondries ou peroxysomes."
      },
      {
        "content": "La diffusion facilitée permet toujours de déplacer un soluté contre son gradient sans énergie.",
        "correct": false,
        "explanation": "Contre le gradient, un mécanisme actif ou un couplage énergétique est nécessaire."
      },
      {
        "content": "Les pores nucléaires sont constitués de nucléoporines.",
        "correct": true,
        "explanation": "Les complexes de pore contrôlent les échanges nucléocytoplasmiques."
      }
    ]
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la membrane plasmique et le cytosquelette, le noyau, la chromatine et le nucléole, ainsi que les peroxysomes, quelles propositions sont exactes ?",
    "explanation": "À retenir : Les endosomes précoces constituent un compartiment de tri de la voie endocytaire. Le nucléole n’est pas limité par une membrane. La culture primaire conserve souvent davantage de caractéristiques du tissu d’origine qu’une lignée transformée.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:lamine-laminine"
    ],
    "choices": [
      {
        "content": "Les lamines nucléaires sont des glycoprotéines majeures de la membrane basale extracellulaire.",
        "correct": false,
        "explanation": "Ce sont les laminines qui sont extracellulaires ; les lamines sont nucléaires."
      },
      {
        "content": "Les endosomes précoces constituent un compartiment de tri de la voie endocytaire.",
        "correct": true,
        "explanation": "Des récepteurs peuvent être recyclés ou dirigés vers des endosomes plus tardifs."
      },
      {
        "content": "Les peroxysomes possèdent leur propre ADN circulaire comme les mitochondries.",
        "correct": false,
        "explanation": "Ils n’ont pas de génome propre."
      },
      {
        "content": "Le nucléole n’est pas limité par une membrane.",
        "correct": true,
        "explanation": "C’est un condensat nucléaire lié à la biogenèse ribosomique."
      },
      {
        "content": "La culture primaire conserve souvent davantage de caractéristiques du tissu d’origine qu’une lignée transformée.",
        "correct": true,
        "explanation": "Les cellules primaires sont proches du prélèvement mais ont une durée de vie limitée."
      }
    ]
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la membrane plasmique et le cytosquelette, quelles propositions sont exactes ?",
    "explanation": "À retenir : L’immunofluorescence indirecte utilise un anticorps secondaire fluorescent reconnaissant l’anticorps primaire. En G1, une cellule diploïde non répliquée est classiquement décrite 2n/2C. La GFP peut être exprimée dans une cellule vivante à partir d’une construction génétique. L’exocytose régulée nécessite un signal, souvent impliquant une augmentation de Ca2+ cytosolique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:membrane"
    ],
    "choices": [
      {
        "content": "Les membranes sont parfaitement symétriques entre les deux feuillets.",
        "correct": false,
        "explanation": "Les compositions lipidiques et protéiques des deux feuillets sont asymétriques."
      },
      {
        "content": "L’immunofluorescence indirecte utilise un anticorps secondaire fluorescent reconnaissant l’anticorps primaire.",
        "correct": true,
        "explanation": "Ce montage permet notamment une amplification du signal."
      },
      {
        "content": "En G1, une cellule diploïde non répliquée est classiquement décrite 2n/2C.",
        "correct": true,
        "explanation": "Après réplication en G2, elle reste 2n mais passe à 4C."
      },
      {
        "content": "La GFP peut être exprimée dans une cellule vivante à partir d’une construction génétique.",
        "correct": true,
        "explanation": "Une protéine d’intérêt fusionnée à GFP peut être suivie dans des cellules vivantes."
      },
      {
        "content": "L’exocytose régulée nécessite un signal, souvent impliquant une augmentation de Ca2+ cytosolique.",
        "correct": true,
        "explanation": "C’est le cas de nombreuses cellules sécrétrices."
      }
    ]
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Sur le cycle cellulaire et ses contrôles, la membrane plasmique et le cytosquelette, ainsi que l’adressage des protéines et le système endomembranaire, quelles affirmations sont correctes ?",
    "explanation": "À retenir : Le complexe cycline B–CDK1 constitue le MPF classique favorisant l’entrée en mitose. Une protéine transmembranaire n’a pas une orientation N-ter extracellulaire/C-ter cytosolique universelle. L’électroporation provoque transitoirement une perméabilisation de membrane favorisant l’entrée de macromolécules. Les peroxysomes ne font pas partie du système endomembranaire classique malgré certains échanges lipidiques avec le RE.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C12",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:cycle"
    ],
    "choices": [
      {
        "content": "Le complexe cycline B–CDK1 constitue le MPF classique favorisant l’entrée en mitose.",
        "correct": true,
        "explanation": "Son activation déclenche de nombreux événements mitotiques."
      },
      {
        "content": "Une protéine transmembranaire n’a pas une orientation N-ter extracellulaire/C-ter cytosolique universelle.",
        "correct": true,
        "explanation": "La topologie dépend des signaux d’adressage et d’insertion propres à chaque protéine."
      },
      {
        "content": "L’électroporation provoque transitoirement une perméabilisation de membrane favorisant l’entrée de macromolécules.",
        "correct": true,
        "explanation": "Des impulsions électriques créent des pores transitoires."
      },
      {
        "content": "Les peroxysomes ne font pas partie du système endomembranaire classique malgré certains échanges lipidiques avec le RE.",
        "correct": true,
        "explanation": "Ils constituent un compartiment distinct."
      },
      {
        "content": "Une membrane biologique est un feuillet protéique rigide dépourvu de lipides.",
        "correct": false,
        "explanation": "Elle repose sur une bicouche lipidique associée à des protéines."
      }
    ]
  }
];
