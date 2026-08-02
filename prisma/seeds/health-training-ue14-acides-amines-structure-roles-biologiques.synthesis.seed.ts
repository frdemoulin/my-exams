import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 5;

export const SYNTHESIS_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "121": [
    "les acides aminés du monde vivant"
  ],
  "122": [
    "la structure commune d’un acide aminé"
  ],
  "123": [
    "la nomenclature des acides aminés"
  ],
  "124": [
    "les acides aminés essentiels"
  ],
  "125": [
    "l’arginine et l’histidine au cours de la croissance"
  ],
  "126": [
    "les acides aminés aliphatiques"
  ],
  "127": [
    "les acides aminés branchés"
  ],
  "128": [
    "les acides aminés hydroxylés"
  ],
  "129": [
    "les acides aminés soufrés"
  ],
  "130": [
    "les acides aminés acides, leurs amides et les basiques"
  ],
  "131": [
    "les acides aminés aromatiques"
  ],
  "132": [
    "la proline et la 4-hydroxyproline"
  ],
  "133": [
    "la classification selon la polarité"
  ],
  "134": [
    "la solubilité des acides aminés"
  ],
  "135": [
    "la chiralité des acides aminés"
  ],
  "136": [
    "les séries L et D en projection de Fischer"
  ],
  "137": [
    "la configuration absolue des acides aminés naturels"
  ],
  "138": [
    "l’absorption ultraviolette des acides aminés"
  ],
  "139": [
    "l’ionisation et le point isoélectrique"
  ],
  "140": [
    "la réaction à la ninhydrine"
  ]
};

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "acides-amines-structure-et-roles-biologiques-synthese-structures-fonctions",
    "title": "Structures et fonctions",
    "description": "Réviser transversalement les structures et leurs conséquences fonctionnelles.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "items": [
      {
        "type": "GROUP",
        "title": "Structure",
        "sharedStatement": "Les questions suivantes portent sur les structures et classifications du chapitre.",
        "questionOrders": [
          121,
          122,
          123
        ]
      },
      {
        "type": "GROUP",
        "title": "Propriétés",
        "sharedStatement": "Les questions suivantes relient structure et propriétés.",
        "questionOrders": [
          124,
          125,
          126
        ]
      },
      {
        "type": "GROUP",
        "title": "Fonctions biologiques",
        "sharedStatement": "Les questions suivantes portent sur les fonctions biologiques et leurs applications.",
        "questionOrders": [
          127,
          128,
          129,
          130
        ]
      }
    ]
  },
  {
    "order": 2,
    "slug": "acides-amines-structure-et-roles-biologiques-synthese-raisonnement",
    "title": "Raisonnement transversal",
    "description": "Résoudre des questions transversales proches de l’esprit de l’examen.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "items": [
      {
        "type": "GROUP",
        "title": "Identification",
        "sharedStatement": "Les questions suivantes demandent d’identifier ou de comparer plusieurs notions.",
        "questionOrders": [
          131,
          132,
          133
        ]
      },
      {
        "type": "GROUP",
        "title": "Mécanismes",
        "sharedStatement": "Les questions suivantes mobilisent des mécanismes moléculaires.",
        "questionOrders": [
          134,
          135,
          136
        ]
      },
      {
        "type": "GROUP",
        "title": "Contextes médicaux",
        "sharedStatement": "Les questions suivantes replacent les notions dans des contextes physiologiques ou pathologiques.",
        "questionOrders": [
          137,
          138,
          139,
          140
        ]
      }
    ]
  }
];

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    "order": 121,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les acides aminés du monde vivant, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-overview"
    },
    "choices": [
      "Les protéines sont les unités de base des acides aminés.",
      "Tous les acides aminés connus sont intégrés aux protéines humaines.",
      "Les acides aminés sont les unités de base des protéines.",
      "Le monde vivant compte environ 500 acides aminés différents."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les protéines sont constituées de résidus provenant d’un ensemble de 20 acides aminés protéinogènes.",
    "choiceExplanations": [
      "Faux. Les acides aminés constituent les protéines.",
      "Faux. Seuls 20 sont protéinogènes dans ce cours.",
      "Vrai. Les acides aminés sont les unités de base des protéines.",
      "Vrai. Le monde vivant compte environ 500 acides aminés différents."
    ]
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure commune d’un acide aminé, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-general-structure"
    },
    "choices": [
      "Le carbone α porte une fonction amine.",
      "Le groupement carboxyle est toujours porté par le radical R.",
      "Le radical R différencie les acides aminés.",
      "Le radical R est identique chez tous les acides aminés."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La structure générale associe autour du carbone α une amine, un carboxyle, un hydrogène et un radical R.",
    "choiceExplanations": [
      "Vrai. Le carbone α porte une fonction amine.",
      "Faux. La fonction carboxylique commune est liée au carbone α.",
      "Vrai. Le radical R différencie les acides aminés.",
      "Faux. La nature du radical R les différencie."
    ]
  },
  {
    "order": 123,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la nomenclature des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-codes"
    },
    "choices": [
      "L’alanine est abrégée Trp.",
      "Une abréviation à trois lettres contient toujours le nom complet.",
      "L’alanine peut être abrégée Ala ou A.",
      "Il peut être désigné par une abréviation à trois lettres."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les séquences utilisent les noms ou les codes à trois et à une lettre.",
    "choiceExplanations": [
      "Faux. Trp désigne le tryptophane.",
      "Faux. Elle est une forme courte, par exemple Ala.",
      "Vrai. L’alanine peut être abrégée Ala ou A.",
      "Vrai. Il peut être désigné par une abréviation à trois lettres."
    ]
  },
  {
    "order": 124,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les acides aminés essentiels, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "Un acide aminé essentiel n’est pas synthétisé par l’Homme en quantité suffisante.",
      "Valine, méthionine, phénylalanine et isoleucine figurent dans la liste du cours.",
      "La glycine est classée essentielle dans la liste donnée.",
      "Un acide aminé essentiel est toujours synthétisé en excès par l’organisme."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le caractère essentiel est une notion nutritionnelle liée à l’incapacité de synthèse suffisante.",
    "choiceExplanations": [
      "Vrai. Un acide aminé essentiel n’est pas synthétisé par l’Homme en quantité suffisante.",
      "Vrai. Valine, méthionine, phénylalanine et isoleucine figurent dans la liste du cours.",
      "Faux. Elle figure parmi les non essentiels dans la fiche.",
      "Faux. Il doit être apporté par l’alimentation."
    ]
  },
  {
    "order": 125,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’arginine et l’histidine au cours de la croissance, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "essential-amino-acids"
    },
    "choices": [
      "L’arginine est essentielle chez le nourrisson et le jeune enfant selon la fiche.",
      "Leur statut dépend de la période de croissance.",
      "L’histidine est un acide gras.",
      "Arginine et histidine ne sont jamais nécessaires à la croissance."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Arginine et histidine ont un statut particulier pendant la croissance.",
    "choiceExplanations": [
      "Vrai. L’arginine est essentielle chez le nourrisson et le jeune enfant selon la fiche.",
      "Vrai. Leur statut dépend de la période de croissance.",
      "Faux. C’est un acide aminé basique.",
      "Faux. Elles sont décrites comme essentielles au cours de la croissance."
    ]
  },
  {
    "order": 126,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les acides aminés aliphatiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-families"
    },
    "choices": [
      "La glycine possède un radical benzyle.",
      "L’alanine possède un radical méthyle.",
      "Les acides aminés aliphatiques possèdent obligatoirement un cycle aromatique.",
      "Leur chaîne latérale est carbonée, ouverte et linéaire ou ramifiée."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les acides aminés aliphatiques sont caractérisés par une chaîne latérale hydrocarbonée ouverte.",
    "choiceExplanations": [
      "Faux. Son radical est un hydrogène.",
      "Vrai. L’alanine possède un radical méthyle.",
      "Faux. Leur chaîne est ouverte.",
      "Vrai. Leur chaîne latérale est carbonée, ouverte et linéaire ou ramifiée."
    ]
  },
  {
    "order": 127,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les acides aminés branchés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "branched-amino-acids"
    },
    "choices": [
      "L’isoleucine est identique à la leucine sans isomérie.",
      "La leucine possède un radical isobutyle.",
      "L’isoleucine est un isomère de la leucine.",
      "Les acides aminés branchés sont sérine, thréonine et cystéine."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Valine, leucine et isoleucine forment la famille des acides aminés à chaîne ramifiée.",
    "choiceExplanations": [
      "Faux. Elles sont isomères.",
      "Vrai. La leucine possède un radical isobutyle.",
      "Vrai. L’isoleucine est un isomère de la leucine.",
      "Faux. La fiche cite valine, leucine et isoleucine."
    ]
  },
  {
    "order": 128,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les acides aminés hydroxylés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "La sérine porte un thioéther.",
      "Le groupement hydroxyle confère un caractère polaire.",
      "Ces chaînes latérales peuvent former des liaisons hydrogène avec l’eau.",
      "La thréonine est dépourvue d’oxygène."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Sérine et thréonine sont polaires grâce à leur fonction alcool.",
    "choiceExplanations": [
      "Faux. Le thioéther caractérise la méthionine.",
      "Vrai. Le groupement hydroxyle confère un caractère polaire.",
      "Vrai. Ces chaînes latérales peuvent former des liaisons hydrogène avec l’eau.",
      "Faux. Elle porte une fonction alcool."
    ]
  },
  {
    "order": 129,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les acides aminés soufrés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "hydroxyl-sulfur-amino-acids"
    },
    "choices": [
      "Les ponts disulfure sont formés entre deux méthionines.",
      "Aucun acide aminé protéinogène ne contient de soufre.",
      "La cystéine peut participer à la formation de ponts disulfure.",
      "La méthionine porte une fonction thioéther."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Cystéine et méthionine diffèrent par la forme chimique du soufre dans leur radical.",
    "choiceExplanations": [
      "Faux. Ils sont formés par oxydation de deux cystéines.",
      "Faux. Cystéine et méthionine en contiennent.",
      "Vrai. La cystéine peut participer à la formation de ponts disulfure.",
      "Vrai. La méthionine porte une fonction thioéther."
    ]
  },
  {
    "order": 130,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les acides aminés acides, leurs amides et les basiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "acid-basic-amino-acids"
    },
    "choices": [
      "L’asparagine dérive de la lysine.",
      "L’acide aspartique et l’acide glutamique possèdent un second carboxyle.",
      "La glutamine est l’amide dérivé de l’acide glutamique.",
      "L’histidine est classée parmi les acides aminés acides chargés négativement."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les acides aspartique et glutamique donnent respectivement asparagine et glutamine; lysine, arginine et histidine sont basiques.",
    "choiceExplanations": [
      "Faux. Elle dérive de l’acide aspartique.",
      "Vrai. L’acide aspartique et l’acide glutamique possèdent un second carboxyle.",
      "Vrai. La glutamine est l’amide dérivé de l’acide glutamique.",
      "Faux. Elle est classée basique chargée positivement."
    ]
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les acides aminés aromatiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "aromatic-amino-acids"
    },
    "choices": [
      "La phénylalanine porte un noyau benzénique.",
      "L’indole associe un noyau benzénique et un cycle pyrrole accolés.",
      "L’indole est un simple alcool aliphatique.",
      "La tyrosine est dépourvue de cycle."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Phénylalanine, tyrosine et tryptophane se distinguent par leurs systèmes aromatiques.",
    "choiceExplanations": [
      "Vrai. La phénylalanine porte un noyau benzénique.",
      "Vrai. L’indole associe un noyau benzénique et un cycle pyrrole accolés.",
      "Faux. C’est un système bicyclique aromatique.",
      "Faux. Elle possède un noyau aromatique phénolique."
    ]
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la proline et la 4-hydroxyproline, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-hydroxyproline"
    },
    "choices": [
      "La proline favorise toujours une hélice parfaitement rectiligne.",
      "La 4-hydroxyproline dérive de l’hydroxylation de la proline.",
      "La proline est classée parmi les acides aminés non polaires dans la fiche.",
      "La proline est un acide aminé acide chargé négativement."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La structure cyclique de la proline explique ses effets particuliers sur les chaînes peptidiques.",
    "choiceExplanations": [
      "Faux. Elle peut provoquer une angulation.",
      "Vrai. La 4-hydroxyproline dérive de l’hydroxylation de la proline.",
      "Vrai. La proline est classée parmi les acides aminés non polaires dans la fiche.",
      "Faux. Elle est non polaire dans la classification donnée."
    ]
  },
  {
    "order": 133,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la classification selon la polarité, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-classes"
    },
    "choices": [
      "La sérine est classée parmi les non polaires.",
      "La lysine est classée non polaire hydrophobe.",
      "Lysine, arginine et histidine sont polaires basiques et chargés positivement.",
      "Aspartate et glutamate sont polaires acides et chargés négativement."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La polarité du radical détermine quatre groupes: non polaires, polaires neutres, acides et basiques.",
    "choiceExplanations": [
      "Faux. Elle est polaire neutre.",
      "Faux. Elle est basique et chargée positivement.",
      "Vrai. Lysine, arginine et histidine sont polaires basiques et chargés positivement.",
      "Vrai. Aspartate et glutamate sont polaires acides et chargés négativement."
    ]
  },
  {
    "order": 134,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la solubilité des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "polarity-solubility"
    },
    "choices": [
      "Une chaîne très hydrophobe augmente toujours la solubilité dans l’eau.",
      "L’eau est citée comme solvant apolaire.",
      "Deux acides aminés différents peuvent avoir des solubilités différentes.",
      "Les chaînes polaires favorisent les interactions avec l’eau."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La polarité du radical conditionne la solubilité dans les solvants polaires.",
    "choiceExplanations": [
      "Faux. Elle tend à la diminuer.",
      "Faux. L’eau est un solvant polaire.",
      "Vrai. Deux acides aminés différents peuvent avoir des solubilités différentes.",
      "Vrai. Les chaînes polaires favorisent les interactions avec l’eau."
    ]
  },
  {
    "order": 135,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la chiralité des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-chirality"
    },
    "choices": [
      "La chiralité signifie qu’une molécule est superposable à son miroir.",
      "Les acides aminés naturels sont des acides α-aminés.",
      "Un objet chiral n’est pas superposable à son image dans un miroir.",
      "Deux énantiomères ont toujours des formules brutes différentes."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "À l’exception de la glycine, le carbone α porte quatre substituants différents et constitue un centre chiral.",
    "choiceExplanations": [
      "Faux. Elle signifie le contraire.",
      "Vrai. Les acides aminés naturels sont des acides α-aminés.",
      "Vrai. Un objet chiral n’est pas superposable à son image dans un miroir.",
      "Faux. Ils ont la même formule mais une disposition spatiale différente."
    ]
  },
  {
    "order": 136,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les séries L et D en projection de Fischer, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "Le carbone α n’apparaît pas dans la projection.",
      "Un NH2 à droite correspond à la série D.",
      "Un NH2 à gauche correspond à la série L.",
      "Un NH2 à gauche correspond toujours à la série D."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La projection de Fischer permet de distinguer les séries L et D par la position du NH2.",
    "choiceExplanations": [
      "Faux. Il occupe la position centrale.",
      "Vrai. Un NH2 à droite correspond à la série D.",
      "Vrai. Un NH2 à gauche correspond à la série L.",
      "Faux. Dans la convention donnée, il correspond à L."
    ]
  },
  {
    "order": 137,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la configuration absolue des acides aminés naturels, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "fischer-amino-acids"
    },
    "choices": [
      "Tous les acides aminés L sont obligatoirement R dans la fiche.",
      "La série D est associée à la configuration R dans la présentation du cours.",
      "Ils sont le plus souvent de configuration S.",
      "Les acides aminés naturels sont toujours de série D."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La série D/L et la configuration R/S sont deux systèmes liés mais distincts.",
    "choiceExplanations": [
      "Faux. Ils sont le plus souvent S.",
      "Vrai. La série D est associée à la configuration R dans la présentation du cours.",
      "Vrai. Ils sont le plus souvent de configuration S.",
      "Faux. Ils sont de série L."
    ]
  },
  {
    "order": 138,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’absorption ultraviolette des acides aminés, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "uv-absorption"
    },
    "choices": [
      "La fiche ajoute l’histidine parmi les exceptions absorbant vers 280 nm.",
      "Les acides aminés aromatiques absorbent vers 280 nm.",
      "L’absorption à 280 nm est due à l’absence de doubles liaisons.",
      "Tous les acides aminés absorbent fortement la lumière visible."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les systèmes aromatiques conjugués expliquent l’absorption UV autour de 280 nm.",
    "choiceExplanations": [
      "Vrai. La fiche ajoute l’histidine parmi les exceptions absorbant vers 280 nm.",
      "Vrai. Les acides aminés aromatiques absorbent vers 280 nm.",
      "Faux. Elle est liée aux cycles et doubles liaisons conjuguées.",
      "Faux. La fiche indique qu’ils n’absorbent pas la lumière visible."
    ]
  },
  {
    "order": 139,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’ionisation et le point isoélectrique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "amino-acid-ionization"
    },
    "choices": [
      "Au point isoélectrique, la charge nette est toujours +2.",
      "Ils sont amphotères.",
      "Au pH isoélectrique, la charge nette est nulle.",
      "Les acides aminés acides ont toujours un pHi supérieur à 10."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’état d’ionisation dépend du pH; le point isoélectrique correspond à une charge nette nulle.",
    "choiceExplanations": [
      "Faux. Elle est nulle.",
      "Vrai. Ils sont amphotères.",
      "Vrai. Au pH isoélectrique, la charge nette est nulle.",
      "Faux. Leur pHi est bas."
    ]
  },
  {
    "order": 140,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la réaction à la ninhydrine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ninhydrin-reaction"
    },
    "choices": [
      "La réaction est utilisée pour la séparation et le dosage des acides aminés.",
      "La ninhydrine ne réagit avec aucun acide aminé.",
      "La ninhydrine est uniquement un médicament.",
      "La ninhydrine réagit avec les acides aminés à amine primaire."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La ninhydrine révèle les acides aminés, avec une réponse particulière des amines secondaires.",
    "choiceExplanations": [
      "Vrai. La réaction est utilisée pour la séparation et le dosage des acides aminés.",
      "Faux. Elle est utilisée pour les détecter.",
      "Faux. Elle sert de réactif analytique.",
      "Vrai. La ninhydrine réagit avec les acides aminés à amine primaire."
    ]
  }
];
