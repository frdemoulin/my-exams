import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.3 – Synthèse */
export const UE14_BIOCH_CH3_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les osides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un oside contient toujours exactement deux oses.",
        "correct": false,
        "explanation": "Les polyosides en contiennent beaucoup."
      },
      {
        "content": "Les osides peuvent être constitués de deux à de très nombreux résidus.",
        "correct": true,
        "explanation": "Diholosides et polyosides appartiennent à cette famille."
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
        "content": "Un holoside ne libère que des oses ou dérivés d'oses après hydrolyse complète.",
        "correct": true,
        "explanation": "Il est entièrement glucidique."
      }
    ],
    "explanation": "Les osides sont définis par des liaisons glycosidiques ; holosides et hétérosides se distinguent par la nature des produits d'hydrolyse."
  },
  {
    "order": 102,
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
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur le caractère réducteur des diholosides, laquelle est exacte ?",
    "choices": [
      {
        "content": "Un diholoside réducteur ne peut jamais s'ouvrir localement.",
        "correct": false,
        "explanation": "Le résidu à hémiacétal libre peut s'ouvrir."
      },
      {
        "content": "Le saccharose possède un carbone anomérique libre.",
        "correct": false,
        "explanation": "Ses deux carbones anomériques sont engagés."
      },
      {
        "content": "Le pouvoir réducteur dépend uniquement du nombre total de carbones.",
        "correct": false,
        "explanation": "Il dépend de la disponibilité du carbone anomérique."
      },
      {
        "content": "Tous les diholosides sont non réducteurs.",
        "correct": false,
        "explanation": "Maltose et lactose sont réducteurs."
      },
      {
        "content": "Le lactose est réducteur.",
        "correct": true,
        "explanation": "Le glucose terminal possède un carbone anomérique libre."
      }
    ],
    "explanation": "Le caractère réducteur d'un oside dépend de la présence d'un carbone anomérique libre."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le lactose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le lactose associe glucose et fructose.",
        "correct": false,
        "explanation": "Cela décrit le saccharose."
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
        "content": "La liaison du lactose est alpha(1→4) glucose-glucose.",
        "correct": false,
        "explanation": "Cela décrit le maltose."
      },
      {
        "content": "La lactase hydrolyse le lactose dans l'intestin grêle.",
        "correct": true,
        "explanation": "Un déficit en lactase favorise l'intolérance au lactose."
      }
    ],
    "explanation": "Le lactose est galactose-bêta(1→4)-glucose et reste réducteur."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel GAG très sulfaté est utilisé pour son activité anticoagulante ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "héparine",
        "heparine",
        "l'héparine",
        "l'heparine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'héparine est un GAG fortement sulfaté qui potentialise notamment l'antithrombine."
  },
  {
    "order": 106,
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
        "content": "Son hydrolyse libère glucose et fructose.",
        "correct": true,
        "explanation": "La sucrase-isomaltase intestinale catalyse cette hydrolyse."
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
    "explanation": "Le saccharose relie les deux carbones anomériques du glucose et du fructose, ce qui le rend non réducteur."
  },
  {
    "order": 107,
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
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de la spécificité digestive des glycosidases, quelle proposition est exacte ?",
    "choices": [
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
        "content": "La lactase hydrolyse la cellulose.",
        "correct": false,
        "explanation": "Elle cible le lactose."
      },
      {
        "content": "Toutes les liaisons glycosidiques ont la même sensibilité enzymatique.",
        "correct": false,
        "explanation": "La stéréochimie et les positions sont déterminantes."
      },
      {
        "content": "L'alpha-amylase hydrolyse efficacement les liaisons bêta(1→4) de la cellulose.",
        "correct": false,
        "explanation": "Elle cible les liaisons alpha de l'amidon."
      }
    ],
    "explanation": "La digestion des osides dépend de glycosidases très spécifiques de la liaison."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les polyosides, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Un homoglycane répète un seul type de monosaccharide.",
        "correct": true,
        "explanation": "Amidon, glycogène et cellulose sont des glucanes."
      },
      {
        "content": "Un hétéroglycane comporte plusieurs types de résidus.",
        "correct": true,
        "explanation": "De nombreux GAG sont hétéroglycanes."
      },
      {
        "content": "Les polyosides peuvent avoir des rôles de réserve ou de structure.",
        "correct": true,
        "explanation": "Amidon/glycogène versus cellulose."
      },
      {
        "content": "Un polyoside est constitué d'un grand nombre de résidus d'oses ou dérivés.",
        "correct": true,
        "explanation": "Il s'agit d'un polymère glucidique."
      },
      {
        "content": "Un homoglycane contient de nombreux types d'oses différents.",
        "correct": false,
        "explanation": "Il répète un seul type."
      }
    ],
    "explanation": "Les polyosides peuvent être homogènes ou hétérogènes et remplir des fonctions de réserve ou de structure."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le glycogène est un polymère bêta(1→4) de glucose.",
        "correct": false,
        "explanation": "Cela décrit la cellulose."
      },
      {
        "content": "Le glycogène est la réserve végétale majeure.",
        "correct": false,
        "explanation": "Il est la réserve animale."
      },
      {
        "content": "La glycogénine sert de protéine amorce au centre d'une particule de glycogène.",
        "correct": true,
        "explanation": "Elle initie la synthèse."
      },
      {
        "content": "Le glycogène est la principale réserve glucidique animale.",
        "correct": true,
        "explanation": "Il est particulièrement abondant dans le foie et le muscle."
      },
      {
        "content": "L'amylose peut adopter une conformation hélicoïdale.",
        "correct": true,
        "explanation": "La chaîne s'enroule."
      },
      {
        "content": "Il est constitué de glucose en alpha(1→4) avec branches alpha(1→6).",
        "correct": true,
        "explanation": "Son architecture ressemble à une amylopectine plus ramifiée."
      },
      {
        "content": "L'amylose est la composante la plus ramifiée du glycogène.",
        "correct": false,
        "explanation": "Elle est essentiellement linéaire."
      },
      {
        "content": "Les glucoses sont reliés principalement par des liaisons alpha(1→4).",
        "correct": true,
        "explanation": "Cette liaison construit la chaîne."
      },
      {
        "content": "Il ne possède aucun branchement.",
        "correct": false,
        "explanation": "Il est fortement ramifié."
      },
      {
        "content": "Elle est constituée de fructose uniquement.",
        "correct": false,
        "explanation": "Elle est constituée de glucose."
      }
    ],
    "explanation": "L'amylose est un glucane essentiellement linéaire en alpha(1→4). Le glycogène est un glucane de réserve animale très ramifié, construit autour de la glycogénine."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les osides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un holoside comporte obligatoirement une protéine.",
        "correct": false,
        "explanation": "Il est constitué uniquement de résidus glucidiques."
      },
      {
        "content": "Un oside comporte au moins une liaison glycosidique impliquant un carbone anomérique.",
        "correct": true,
        "explanation": "Cette liaison relie un ose à un autre groupe."
      },
      {
        "content": "Un hétéroside associe une partie glucidique à un aglycone non glucidique.",
        "correct": true,
        "explanation": "L'aglycone peut être lipidique, protéique ou autre."
      },
      {
        "content": "Les osides peuvent être constitués de deux à de très nombreux résidus.",
        "correct": true,
        "explanation": "Diholosides et polyosides appartiennent à cette famille."
      },
      {
        "content": "Un holoside ne libère que des oses ou dérivés d'oses après hydrolyse complète.",
        "correct": true,
        "explanation": "Il est entièrement glucidique."
      }
    ],
    "explanation": "Les osides sont définis par des liaisons glycosidiques ; holosides et hétérosides se distinguent par la nature des produits d'hydrolyse."
  },
  {
    "order": 112,
    "difficulty": "HARD",
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
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur le caractère réducteur des diholosides, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Le pouvoir réducteur dépend uniquement du nombre total de carbones.",
        "correct": false,
        "explanation": "Il dépend de la disponibilité du carbone anomérique."
      },
      {
        "content": "Le saccharose possède un carbone anomérique libre.",
        "correct": false,
        "explanation": "Ses deux carbones anomériques sont engagés."
      },
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
        "content": "Le saccharose est non réducteur.",
        "correct": true,
        "explanation": "Les deux carbones anomériques sont engagés dans la liaison."
      }
    ],
    "explanation": "Le caractère réducteur d'un oside dépend de la présence d'un carbone anomérique libre.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le lactose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Sa liaison est bêta(1→4) du galactose vers le glucose.",
        "correct": true,
        "explanation": "Le C1 du galactose est engagé avec C4 du glucose."
      },
      {
        "content": "Le lactose est un diholoside réducteur.",
        "correct": true,
        "explanation": "Le carbone anomérique du glucose reste libre."
      },
      {
        "content": "Le lactose associe galactose et glucose.",
        "correct": true,
        "explanation": "Ce sont ses deux résidus."
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
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "À propos du maltose, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le maltose possède une liaison bêta(1→4).",
        "correct": false,
        "explanation": "Cela correspond à la cellobiose."
      },
      {
        "content": "Le maltose associe galactose et glucose.",
        "correct": false,
        "explanation": "Cela décrit le lactose."
      },
      {
        "content": "Le maltose associe deux résidus de glucose.",
        "correct": true,
        "explanation": "C'est un diholoside homogène."
      },
      {
        "content": "Le maltose est formé de glucose et fructose.",
        "correct": false,
        "explanation": "Cela décrit le saccharose."
      },
      {
        "content": "La maltase produit du fructose à partir du maltose.",
        "correct": false,
        "explanation": "Elle libère du glucose."
      }
    ],
    "explanation": "Le maltose est un diholoside réducteur de deux glucoses liés en alpha(1→4)."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le saccharose, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le saccharose associe deux galactoses.",
        "correct": false,
        "explanation": "Il associe glucose et fructose."
      },
      {
        "content": "Il possède un carbone anomérique libre facilement ouvrable.",
        "correct": false,
        "explanation": "Les deux sont engagés."
      },
      {
        "content": "Il est un polysaccharide de réserve animale.",
        "correct": false,
        "explanation": "C'est un diholoside alimentaire."
      },
      {
        "content": "Son hydrolyse libère glucose et fructose.",
        "correct": true,
        "explanation": "La sucrase-isomaltase intestinale catalyse cette hydrolyse."
      },
      {
        "content": "La liaison implique C1 anomérique du glucose et C2 anomérique du fructose.",
        "correct": true,
        "explanation": "Les deux carbones anomériques sont engagés."
      }
    ],
    "explanation": "Le saccharose relie les deux carbones anomériques du glucose et du fructose, ce qui le rend non réducteur."
  },
  {
    "order": 117,
    "difficulty": "HARD",
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
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La lactase hydrolyse la cellulose.",
        "correct": false,
        "explanation": "Elle cible le lactose."
      },
      {
        "content": "La maltase hydrolyse des liaisons alpha du maltose.",
        "correct": true,
        "explanation": "Elle libère du glucose."
      },
      {
        "content": "L'amylopectine est un polymère strictement linéaire.",
        "correct": false,
        "explanation": "Elle est ramifiée."
      },
      {
        "content": "Ses chaînes utilisent des liaisons alpha(1→4).",
        "correct": true,
        "explanation": "Elles forment les segments linéaires."
      },
      {
        "content": "Elle est moins densément ramifiée que le glycogène.",
        "correct": true,
        "explanation": "Le glycogène possède des branches plus fréquentes."
      },
      {
        "content": "L'alpha-amylase hydrolyse efficacement les liaisons bêta(1→4) de la cellulose.",
        "correct": false,
        "explanation": "Elle cible les liaisons alpha de l'amidon."
      },
      {
        "content": "Ses branches utilisent des liaisons bêta(1→4).",
        "correct": false,
        "explanation": "Elles utilisent alpha(1→6)."
      },
      {
        "content": "Toutes les liaisons glycosidiques ont la même sensibilité enzymatique.",
        "correct": false,
        "explanation": "La stéréochimie et les positions sont déterminantes."
      },
      {
        "content": "La lactase hydrolyse la liaison bêta(1→4) du lactose.",
        "correct": true,
        "explanation": "Elle libère glucose et galactose."
      },
      {
        "content": "L'être humain ne possède pas de cellulase digestive efficace contre la cellulose bêta(1→4).",
        "correct": true,
        "explanation": "La cellulose est donc une fibre."
      }
    ],
    "explanation": "La digestion des osides dépend de glycosidases très spécifiques de la liaison. L'amylopectine est la fraction ramifiée de l'amidon, avec chaînes alpha(1→4) et branches alpha(1→6)."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les polyosides, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Tous les polyosides sont de réserve.",
        "correct": false,
        "explanation": "La cellulose est structurale."
      },
      {
        "content": "Un polyoside contient toujours exactement deux résidus.",
        "correct": false,
        "explanation": "Cela décrit un diholoside."
      },
      {
        "content": "Un polyoside est constitué d'un grand nombre de résidus d'oses ou dérivés.",
        "correct": true,
        "explanation": "Il s'agit d'un polymère glucidique."
      },
      {
        "content": "Un homoglycane répète un seul type de monosaccharide.",
        "correct": true,
        "explanation": "Amidon, glycogène et cellulose sont des glucanes."
      },
      {
        "content": "Les polyosides sont des protéines.",
        "correct": false,
        "explanation": "Ce sont des glucides."
      }
    ],
    "explanation": "Les polyosides peuvent être homogènes ou hétérogènes et remplir des fonctions de réserve ou de structure."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle liaison glycosidique principale relie les glucoses de l'amylose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alpha(1→4)",
        "α(1→4)",
        "alpha 1-4",
        "α1→4"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'amylose est un glucane essentiellement linéaire en alpha(1→4)."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "À propos de l'amylopectine, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Elle est composée de galactose et fructose alternés.",
        "correct": false,
        "explanation": "C'est un homoglycane de glucose."
      },
      {
        "content": "Ses branches utilisent des liaisons bêta(1→4).",
        "correct": false,
        "explanation": "Elles utilisent alpha(1→6)."
      },
      {
        "content": "Elle est la réserve animale principale.",
        "correct": false,
        "explanation": "L'amidon est végétal ; le glycogène est animal."
      },
      {
        "content": "Les points de branchement utilisent des liaisons alpha(1→6).",
        "correct": true,
        "explanation": "Le C1 d'un glucose se lie au C6 d'un autre."
      },
      {
        "content": "L'amylopectine est un glucane ramifié.",
        "correct": true,
        "explanation": "Elle constitue la fraction ramifiée de l'amidon."
      }
    ],
    "explanation": "L'amylopectine est la fraction ramifiée de l'amidon, avec chaînes alpha(1→4) et branches alpha(1→6).",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'amidon, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "L'amidon est une réserve glucidique végétale.",
        "correct": true,
        "explanation": "Il stocke des résidus de glucose."
      },
      {
        "content": "La cuisson dans l'eau peut provoquer une gélatinisation de l'amidon.",
        "correct": true,
        "explanation": "Les granules absorbent l'eau et se désorganisent."
      },
      {
        "content": "Les alpha-amylases hydrolysent des liaisons alpha(1→4) de l'amidon.",
        "correct": true,
        "explanation": "Elles produisent notamment des dextrines et du maltose."
      },
      {
        "content": "Il associe amylose et amylopectine.",
        "correct": true,
        "explanation": "Les proportions varient selon l'origine végétale."
      },
      {
        "content": "L'amidon est uniquement bêta(1→4).",
        "correct": false,
        "explanation": "Ses liaisons principales sont alpha."
      }
    ],
    "explanation": "L'amidon est une réserve végétale combinant amylose linéaire et amylopectine ramifiée."
  }
];
