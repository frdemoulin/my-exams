import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.3 – Section A – Liaisons glycosidiques et diholosides */
export const UE14_BIOCH_CH3_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les osides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Aucune liaison glycosidique n'implique le carbone anomérique.",
        "correct": false,
        "explanation": "C'est précisément le carbone fonctionnel clé."
      },
      {
        "content": "Un hétéroside est dépourvu de tout sucre.",
        "correct": false,
        "explanation": "Il possède au moins une partie glucidique."
      },
      {
        "content": "Un oside comporte au moins une liaison glycosidique impliquant un carbone anomérique.",
        "correct": true,
        "explanation": "Cette liaison relie un ose à un autre groupe."
      },
      {
        "content": "Un oside contient toujours exactement deux oses.",
        "correct": false,
        "explanation": "Les polyosides en contiennent beaucoup."
      },
      {
        "content": "Un hétéroside associe une partie glucidique à un aglycone non glucidique.",
        "correct": true,
        "explanation": "L'aglycone peut être lipidique, protéique ou autre."
      }
    ],
    "explanation": "Les osides sont définis par des liaisons glycosidiques ; holosides et hétérosides se distinguent par la nature des produits d'hydrolyse."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de la liaison O-glycosidique, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Elle implique toujours une liaison peptidique.",
        "correct": false,
        "explanation": "Ce sont des liaisons différentes."
      },
      {
        "content": "Le sens (1→4) signifie qu'il y a quatre oses.",
        "correct": false,
        "explanation": "Il indique les positions carbonées reliées."
      },
      {
        "content": "La configuration alpha ou bêta du carbone anomérique engagé fait partie de sa description.",
        "correct": true,
        "explanation": "Elle influence la reconnaissance enzymatique."
      },
      {
        "content": "Alpha et bêta n'ont aucune influence sur la digestion enzymatique.",
        "correct": false,
        "explanation": "La stéréospécificité enzymatique est importante."
      },
      {
        "content": "Une liaison O-glycosidique ne contient aucun oxygène.",
        "correct": false,
        "explanation": "L'oxygène constitue le pont."
      }
    ],
    "explanation": "Une liaison O-glycosidique est décrite par l'anomérie du carbone donneur et les positions carbonées reliées."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel diholoside glucose-fructose est non réducteur car ses deux carbones anomériques sont engagés ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "saccharose",
        "sucrose",
        "le saccharose"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le caractère réducteur d'un oside dépend de la présence d'un carbone anomérique libre."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le lactose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le lactose associe galactose et glucose.",
        "correct": true,
        "explanation": "Ce sont ses deux résidus."
      },
      {
        "content": "Le lactose est non réducteur parce que ses deux carbones anomériques sont engagés.",
        "correct": false,
        "explanation": "Un seul est engagé."
      },
      {
        "content": "Le lactose est un diholoside réducteur.",
        "correct": true,
        "explanation": "Le carbone anomérique du glucose reste libre."
      },
      {
        "content": "Le lactose associe glucose et fructose.",
        "correct": false,
        "explanation": "Cela décrit le saccharose."
      },
      {
        "content": "La liaison du lactose est alpha(1→4) glucose-glucose.",
        "correct": false,
        "explanation": "Cela décrit le maltose."
      }
    ],
    "explanation": "Le lactose est galactose-bêta(1→4)-glucose et reste réducteur."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de le maltose, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "La maltase produit du fructose à partir du maltose.",
        "correct": false,
        "explanation": "Elle libère du glucose."
      },
      {
        "content": "Le maltose associe galactose et glucose.",
        "correct": false,
        "explanation": "Cela décrit le lactose."
      },
      {
        "content": "Le maltose est formé de glucose et fructose.",
        "correct": false,
        "explanation": "Cela décrit le saccharose."
      },
      {
        "content": "Sa liaison est alpha(1→4).",
        "correct": true,
        "explanation": "Le C1 alpha du premier glucose est lié au C4 du second."
      },
      {
        "content": "Le maltose possède une liaison bêta(1→4).",
        "correct": false,
        "explanation": "Cela correspond à la cellobiose."
      }
    ],
    "explanation": "Le maltose est un diholoside réducteur de deux glucoses liés en alpha(1→4)."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur le saccharose, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Son hydrolyse libère glucose et fructose.",
        "correct": true,
        "explanation": "La sucrase-isomaltase intestinale catalyse cette hydrolyse."
      },
      {
        "content": "Il est un polysaccharide de réserve animale.",
        "correct": false,
        "explanation": "C'est un diholoside alimentaire."
      },
      {
        "content": "Le saccharose est non réducteur.",
        "correct": true,
        "explanation": "Il ne possède pas de carbone anomérique libre."
      },
      {
        "content": "Il possède un carbone anomérique libre facilement ouvrable.",
        "correct": false,
        "explanation": "Les deux sont engagés."
      },
      {
        "content": "Son hydrolyse libère deux mannoses.",
        "correct": false,
        "explanation": "Elle libère glucose et fructose."
      }
    ],
    "explanation": "Le saccharose relie les deux carbones anomériques du glucose et du fructose, ce qui le rend non réducteur.",
    "requiredSelectionCount": 2
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la condensation et l'hydrolyse des osides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'eau est inutile à une réaction d'hydrolyse.",
        "correct": false,
        "explanation": "Elle est un réactif."
      },
      {
        "content": "Des glycosidases catalysent les hydrolyses biologiques.",
        "correct": true,
        "explanation": "Elles sont spécifiques du substrat et de la liaison."
      },
      {
        "content": "La stéréochimie alpha/bêta influence la reconnaissance enzymatique.",
        "correct": true,
        "explanation": "Une enzyme peut hydrolyser alpha mais pas bêta, ou inversement."
      },
      {
        "content": "L'hydrolyse consomme une molécule d'eau pour cliver une liaison glycosidique.",
        "correct": true,
        "explanation": "H et OH sont ajoutés aux produits."
      },
      {
        "content": "La formation formelle d'une liaison glycosidique peut être décrite comme une condensation avec perte d'eau.",
        "correct": true,
        "explanation": "C'est l'écriture inverse de l'hydrolyse."
      }
    ],
    "explanation": "Condensation et hydrolyse sont des transformations inverses de formation et de rupture de liaison glycosidique."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle enzyme intestinale hydrolyse le lactose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lactase",
        "la lactase",
        "beta-galactosidase",
        "β-galactosidase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La digestion des osides dépend de glycosidases très spécifiques de la liaison."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur les osides, laquelle est exacte ?",
    "choices": [
      {
        "content": "Un oside contient toujours exactement deux oses.",
        "correct": false,
        "explanation": "Les polyosides en contiennent beaucoup."
      },
      {
        "content": "Aucune liaison glycosidique n'implique le carbone anomérique.",
        "correct": false,
        "explanation": "C'est précisément le carbone fonctionnel clé."
      },
      {
        "content": "Un hétéroside est dépourvu de tout sucre.",
        "correct": false,
        "explanation": "Il possède au moins une partie glucidique."
      },
      {
        "content": "Les osides peuvent être constitués de deux à de très nombreux résidus.",
        "correct": true,
        "explanation": "Diholosides et polyosides appartiennent à cette famille."
      },
      {
        "content": "Un holoside comporte obligatoirement une protéine.",
        "correct": false,
        "explanation": "Il est constitué uniquement de résidus glucidiques."
      }
    ],
    "explanation": "Les osides sont définis par des liaisons glycosidiques ; holosides et hétérosides se distinguent par la nature des produits d'hydrolyse."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la liaison O-glycosidique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le sens (1→4) signifie qu'il y a quatre oses.",
        "correct": false,
        "explanation": "Il indique les positions carbonées reliées."
      },
      {
        "content": "Les positions des carbones reliés sont indiquées, par exemple (1→4).",
        "correct": true,
        "explanation": "Le premier chiffre correspond au carbone anomérique donneur."
      },
      {
        "content": "Elle peut être hydrolysée avec consommation d'eau.",
        "correct": true,
        "explanation": "L'hydrolyse est l'inverse formel de la condensation."
      },
      {
        "content": "Alpha et bêta n'ont aucune influence sur la digestion enzymatique.",
        "correct": false,
        "explanation": "La stéréospécificité enzymatique est importante."
      },
      {
        "content": "Elle implique l'oxygène d'une fonction alcool comme pont entre résidus.",
        "correct": true,
        "explanation": "Le carbone anomérique d'un ose est engagé."
      }
    ],
    "explanation": "Une liaison O-glycosidique est décrite par l'anomérie du carbone donneur et les positions carbonées reliées."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle enzyme intestinale hydrolyse le lactose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lactase",
        "beta-galactosidase",
        "β-galactosidase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La lactase de la bordure en brosse hydrolyse le lactose en glucose et galactose."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment note-t-on une liaison entre le C1 anomérique d'un glucose et le C4 du résidu suivant en configuration alpha ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alpha(1→4)",
        "α(1→4)",
        "alpha 1-4",
        "α1→4",
        "alpha(1-4)"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Une liaison O-glycosidique est décrite par l'anomérie du carbone donneur et les positions carbonées reliées."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur le caractère réducteur des diholosides, laquelle est exacte ?",
    "choices": [
      {
        "content": "Le saccharose est non réducteur.",
        "correct": true,
        "explanation": "Les deux carbones anomériques sont engagés dans la liaison."
      },
      {
        "content": "Le saccharose possède un carbone anomérique libre.",
        "correct": false,
        "explanation": "Ses deux carbones anomériques sont engagés."
      },
      {
        "content": "Tous les diholosides sont non réducteurs.",
        "correct": false,
        "explanation": "Maltose et lactose sont réducteurs."
      },
      {
        "content": "Un diholoside réducteur ne peut jamais s'ouvrir localement.",
        "correct": false,
        "explanation": "Le résidu à hémiacétal libre peut s'ouvrir."
      },
      {
        "content": "Le pouvoir réducteur dépend uniquement du nombre total de carbones.",
        "correct": false,
        "explanation": "Il dépend de la disponibilité du carbone anomérique."
      }
    ],
    "explanation": "Le caractère réducteur d'un oside dépend de la présence d'un carbone anomérique libre."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le lactose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Sa liaison est bêta(1→4) du galactose vers le glucose.",
        "correct": true,
        "explanation": "Le C1 du galactose est engagé avec C4 du glucose."
      },
      {
        "content": "Le lactose est non réducteur parce que ses deux carbones anomériques sont engagés.",
        "correct": false,
        "explanation": "Un seul est engagé."
      },
      {
        "content": "L'intolérance au lactose est nécessairement une allergie aux protéines du lait.",
        "correct": false,
        "explanation": "Ce sont des mécanismes distincts."
      },
      {
        "content": "La lactase hydrolyse le lactose dans l'intestin grêle.",
        "correct": true,
        "explanation": "Un déficit en lactase favorise l'intolérance au lactose."
      },
      {
        "content": "Le lactose associe glucose et fructose.",
        "correct": false,
        "explanation": "Cela décrit le saccharose."
      }
    ],
    "explanation": "Le lactose est galactose-bêta(1→4)-glucose et reste réducteur."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de le maltose, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Le maltose associe galactose et glucose.",
        "correct": false,
        "explanation": "Cela décrit le lactose."
      },
      {
        "content": "Le maltose est formé de glucose et fructose.",
        "correct": false,
        "explanation": "Cela décrit le saccharose."
      },
      {
        "content": "Sa liaison est alpha(1→4).",
        "correct": true,
        "explanation": "Le C1 alpha du premier glucose est lié au C4 du second."
      },
      {
        "content": "Le maltose associe deux résidus de glucose.",
        "correct": true,
        "explanation": "C'est un diholoside homogène."
      },
      {
        "content": "La maltase produit du fructose à partir du maltose.",
        "correct": false,
        "explanation": "Elle libère du glucose."
      }
    ],
    "explanation": "Le maltose est un diholoside réducteur de deux glucoses liés en alpha(1→4).",
    "requiredSelectionCount": 2
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le saccharose, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La liaison implique C1 anomérique du glucose et C2 anomérique du fructose.",
        "correct": true,
        "explanation": "Les deux carbones anomériques sont engagés."
      },
      {
        "content": "Son hydrolyse libère deux mannoses.",
        "correct": false,
        "explanation": "Elle libère glucose et fructose."
      },
      {
        "content": "Le saccharose est non réducteur.",
        "correct": true,
        "explanation": "Il ne possède pas de carbone anomérique libre."
      },
      {
        "content": "Son hydrolyse libère glucose et fructose.",
        "correct": true,
        "explanation": "La sucrase-isomaltase intestinale catalyse cette hydrolyse."
      },
      {
        "content": "Le saccharose associe un glucose et un fructose.",
        "correct": true,
        "explanation": "Ce sont ses deux résidus."
      }
    ],
    "explanation": "Le saccharose relie les deux carbones anomériques du glucose et du fructose, ce qui le rend non réducteur."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de réaction rompt une liaison glycosidique en utilisant de l'eau ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "hydrolyse",
        "une hydrolyse"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Condensation et hydrolyse sont des transformations inverses de formation et de rupture de liaison glycosidique."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de la spécificité digestive des glycosidases, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "La lactase hydrolyse la cellulose.",
        "correct": false,
        "explanation": "Elle cible le lactose."
      },
      {
        "content": "La lactase hydrolyse la liaison bêta(1→4) du lactose.",
        "correct": true,
        "explanation": "Elle libère glucose et galactose."
      },
      {
        "content": "La maltase hydrolyse le saccharose en glucose et fructose.",
        "correct": false,
        "explanation": "La sucrase est responsable de cette hydrolyse."
      },
      {
        "content": "L'alpha-amylase hydrolyse efficacement les liaisons bêta(1→4) de la cellulose.",
        "correct": false,
        "explanation": "Elle cible les liaisons alpha de l'amidon."
      },
      {
        "content": "Toutes les liaisons glycosidiques ont la même sensibilité enzymatique.",
        "correct": false,
        "explanation": "La stéréochimie et les positions sont déterminantes."
      }
    ],
    "explanation": "La digestion des osides dépend de glycosidases très spécifiques de la liaison."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les osides, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Un oside contient toujours exactement deux oses.",
        "correct": false,
        "explanation": "Les polyosides en contiennent beaucoup."
      },
      {
        "content": "Un oside comporte au moins une liaison glycosidique impliquant un carbone anomérique.",
        "correct": true,
        "explanation": "Cette liaison relie un ose à un autre groupe."
      },
      {
        "content": "Aucune liaison glycosidique n'implique le carbone anomérique.",
        "correct": false,
        "explanation": "C'est précisément le carbone fonctionnel clé."
      },
      {
        "content": "Un holoside ne libère que des oses ou dérivés d'oses après hydrolyse complète.",
        "correct": true,
        "explanation": "Il est entièrement glucidique."
      },
      {
        "content": "Un holoside comporte obligatoirement une protéine.",
        "correct": false,
        "explanation": "Il est constitué uniquement de résidus glucidiques."
      }
    ],
    "explanation": "Les osides sont définis par des liaisons glycosidiques ; holosides et hétérosides se distinguent par la nature des produits d'hydrolyse."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Les positions des carbones reliés sont indiquées, par exemple (1→4).",
        "correct": true,
        "explanation": "Le premier chiffre correspond au carbone anomérique donneur."
      },
      {
        "content": "Elle implique toujours une liaison peptidique.",
        "correct": false,
        "explanation": "Ce sont des liaisons différentes."
      },
      {
        "content": "Elle peut être hydrolysée avec consommation d'eau.",
        "correct": true,
        "explanation": "L'hydrolyse est l'inverse formel de la condensation."
      },
      {
        "content": "Il peut être formé lors de l'hydrolyse de l'amidon.",
        "correct": true,
        "explanation": "Les amylases produisent notamment maltose et dextrines."
      },
      {
        "content": "La configuration alpha ou bêta du carbone anomérique engagé fait partie de sa description.",
        "correct": true,
        "explanation": "Elle influence la reconnaissance enzymatique."
      },
      {
        "content": "Le maltose possède une liaison bêta(1→4).",
        "correct": false,
        "explanation": "Cela correspond à la cellobiose."
      },
      {
        "content": "La maltase produit du fructose à partir du maltose.",
        "correct": false,
        "explanation": "Elle libère du glucose."
      },
      {
        "content": "Le maltose associe galactose et glucose.",
        "correct": false,
        "explanation": "Cela décrit le lactose."
      },
      {
        "content": "Elle implique l'oxygène d'une fonction alcool comme pont entre résidus.",
        "correct": true,
        "explanation": "Le carbone anomérique d'un ose est engagé."
      },
      {
        "content": "Le maltose est formé de glucose et fructose.",
        "correct": false,
        "explanation": "Cela décrit le saccharose."
      }
    ],
    "explanation": "Une liaison O-glycosidique est décrite par l'anomérie du carbone donneur et les positions carbonées reliées. Le maltose est un diholoside réducteur de deux glucoses liés en alpha(1→4)."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de le caractère réducteur des diholosides, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Un diholoside réducteur ne peut jamais s'ouvrir localement.",
        "correct": false,
        "explanation": "Le résidu à hémiacétal libre peut s'ouvrir."
      },
      {
        "content": "Un diholoside est réducteur s'il conserve un carbone anomérique libre capable de s'ouvrir.",
        "correct": true,
        "explanation": "Une fonction hémiacétalique reste disponible."
      },
      {
        "content": "Le pouvoir réducteur dépend uniquement du nombre total de carbones.",
        "correct": false,
        "explanation": "Il dépend de la disponibilité du carbone anomérique."
      },
      {
        "content": "Le lactose est réducteur.",
        "correct": true,
        "explanation": "Le glucose terminal possède un carbone anomérique libre."
      },
      {
        "content": "Le maltose est réducteur.",
        "correct": true,
        "explanation": "Le second glucose conserve un carbone anomérique libre."
      }
    ],
    "explanation": "Le caractère réducteur d'un oside dépend de la présence d'un carbone anomérique libre."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels sont les deux oses constituant le lactose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "galactose et glucose",
        "glucose et galactose",
        "galactose + glucose"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le lactose est galactose-bêta(1→4)-glucose et reste réducteur."
  }
];
