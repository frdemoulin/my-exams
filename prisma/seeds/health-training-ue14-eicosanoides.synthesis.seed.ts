import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 5;

export const SYNTHESIS_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "121": [
    "la classification des eicosanoïdes"
  ],
  "122": [
    "l’acide arachidonique 20:4 n-6"
  ],
  "123": [
    "la distinction COX-lipoxygénases"
  ],
  "124": [
    "le squelette prostanoïde"
  ],
  "125": [
    "la nomenclature PGF₂α"
  ],
  "126": [
    "les séries de prostaglandines"
  ],
  "127": [
    "la voie des prostanoïdes de série 2"
  ],
  "128": [
    "les effets de PGE₁ et PGE₂"
  ],
  "129": [
    "le cas du misoprostol"
  ],
  "130": [
    "l’équilibre TXA₂-PGI₂"
  ],
  "131": [
    "l’aspirine à faible dose"
  ],
  "132": [
    "la structure des leucotriènes"
  ],
  "133": [
    "les cellules et fonctions des leucotriènes"
  ],
  "134": [
    "LTA₄"
  ],
  "135": [
    "les branches issues de LTA₄"
  ],
  "136": [
    "le glutathion dans la voie des leucotriènes"
  ],
  "137": [
    "une bronchoconstriction liée aux eicosanoïdes"
  ],
  "138": [
    "une situation plaquettaire locale"
  ],
  "139": [
    "une situation immunitaire liée aux leucotriènes"
  ],
  "140": [
    "le bilan général des eicosanoïdes"
  ]
};

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "synthese-prostanoides-et-therapeutique",
    "title": "Prostanoïdes et thérapeutique",
    "description": "Croiser précurseur, COX, nomenclature, séries et applications.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "items": [
      {
        "type": "GROUP",
        "title": "Familles et précurseur",
        "sharedStatement": "Les questions suivantes reprennent la classification et l’acide arachidonique.",
        "questionOrders": [
          121,
          122,
          123
        ]
      },
      {
        "type": "GROUP",
        "title": "Structure et nomenclature",
        "sharedStatement": "Les questions suivantes portent sur le squelette et les séries de prostaglandines.",
        "questionOrders": [
          124,
          125,
          126
        ]
      },
      {
        "type": "GROUP",
        "title": "Thérapeutique et vaisseaux",
        "sharedStatement": "Les questions suivantes analysent misoprostol, TXA₂, PGI₂ et aspirine.",
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
    "slug": "synthese-leucotrienes-et-situations-medicales",
    "title": "Leucotriènes et situations médicales",
    "description": "Mobiliser fonctions immunitaires, bronchiques, plaquettaires et voies de LTA₄.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "items": [
      {
        "type": "GROUP",
        "title": "Leucotriènes et LTA₄",
        "sharedStatement": "Les questions suivantes portent sur les cellules, les effets et la structure de LTA₄.",
        "questionOrders": [
          131,
          132,
          133,
          134
        ]
      },
      {
        "type": "GROUP",
        "title": "Situations médicales",
        "sharedStatement": "Les questions suivantes croisent bronchoconstriction, plaquettes et immunité.",
        "questionOrders": [
          135,
          136,
          137,
          138
        ]
      },
      {
        "type": "GROUP",
        "title": "Bilan métabolique",
        "sharedStatement": "Les questions suivantes concluent sur l’architecture des voies et le bilan du chapitre.",
        "questionOrders": [
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
    "question": "Un étudiant analyse la classification des eicosanoïdes. Quelles conclusions sont exactes ?",
    "choices": [
      "Le précurseur majeur présenté est l’acide arachidonique.",
      "Tous les eicosanoïdes sont des protéines enzymatiques.",
      "Les leucotriènes et lipoxines appartiennent aussi aux eicosanoïdes.",
      "Les prostaglandines et thromboxanes sont des prostanoïdes."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les eicosanoïdes regroupent plusieurs familles de médiateurs lipidiques C20.",
    "choiceExplanations": [
      "Vrai. Il se situe en amont des principales voies.",
      "Faux. Ils dérivent de précurseurs lipidiques C20.",
      "Vrai. Elles relèvent des lipoxygénases.",
      "Vrai. Ces deux familles sont regroupées."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-overview"
    }
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse l’acide arachidonique 20:4 n-6. Quelles conclusions sont exactes ?",
    "choices": [
      "Il peut provenir des phospholipides membranaires.",
      "Il appartient à la série n-3.",
      "Il possède quatre doubles liaisons Δ5,8,11,14.",
      "Il possède 20 carbones."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La structure, la série et l’origine membranaire décrivent le précurseur central.",
    "choiceExplanations": [
      "Vrai. Cette origine est citée.",
      "Faux. La fiche le classe dans la série n-6.",
      "Vrai. Les quatre positions sont données.",
      "Vrai. Le premier nombre de la notation l’indique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "arachidonic-acid-20-4"
    }
  },
  {
    "order": 123,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la distinction cox-lipoxygénases. Quelles conclusions sont exactes ?",
    "choices": [
      "La 15-lipoxygénase est associée à la formation de lipoxines.",
      "La COX et la 5-lipoxygénase sont deux noms d’une même enzyme.",
      "La 5-lipoxygénase forme LTA₄.",
      "La COX conduit aux prostanoïdes."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les voies enzymatiques séparent les principales familles d’eicosanoïdes.",
    "choiceExplanations": [
      "Vrai. Elle intervient notamment vers LXA₄.",
      "Faux. Les voies sont distinctes.",
      "Vrai. Cette étape est détaillée.",
      "Vrai. Prostaglandines et thromboxanes appartiennent à cette voie."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-synthesis-pathways"
    }
  },
  {
    "order": 124,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse le squelette prostanoïde. Quelles conclusions sont exactes ?",
    "choices": [
      "Les chaînes en C8 et C12 sont orientées de part et d’autre du plan.",
      "Le noyau central est un benzène aromatique.",
      "Le squelette comporte un cyclopentane entre C8 et C12.",
      "L’acide prostanoïque est une référence structurale."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le squelette prostanoïde C20 sert de base à la compréhension des prostaglandines.",
    "choiceExplanations": [
      "Vrai. La stéréochimie est explicitée.",
      "Faux. Le cycle est un cyclopentane saturé.",
      "Vrai. Le cycle à cinq carbones est décrit.",
      "Vrai. Il n’existe pas à l’état naturel."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostanoic-acid-reference"
    }
  },
  {
    "order": 125,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la nomenclature pgf₂α. Quelles conclusions sont exactes ?",
    "choices": [
      "2 et α indiquent respectivement la série et l’orientation du OH en C9.",
      "Le symbole α indique une série à cinq doubles liaisons.",
      "F indique le groupe du noyau.",
      "PG indique une prostaglandine."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La nomenclature combine famille, groupe, série et stéréochimie.",
    "choiceExplanations": [
      "Vrai. Le chiffre et la lettre grecque ont deux fonctions distinctes.",
      "Faux. α décrit une orientation spatiale.",
      "Vrai. La lettre donne les substituants oxygénés.",
      "Vrai. Le préfixe donne la famille."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-nomenclature"
    }
  },
  {
    "order": 126,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse les séries de prostaglandines. Quelles conclusions sont exactes ?",
    "choices": [
      "La série 3 dérive de l’acide α-linolénique.",
      "Une série 5 majoritaire est décrite.",
      "La série 2 dérive de l’acide arachidonique.",
      "La série 1 dérive de l’acide linoléique."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les séries relient nombre de doubles liaisons et précurseurs.",
    "choiceExplanations": [
      "Vrai. Elle est présentée comme plus rare.",
      "Faux. Seules les séries 1, 2 et 3 sont présentées.",
      "Vrai. Elle est la plus fréquente dans la fiche.",
      "Vrai. C’est le précurseur indiqué."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "prostaglandin-series"
    }
  },
  {
    "order": 127,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la voie des prostanoïdes de série 2. Quelles conclusions sont exactes ?",
    "choices": [
      "Aspirine et ibuprofène sont placés comme inhibiteurs de la COX.",
      "LTA₄ est le seul produit issu de PGH₂.",
      "Plusieurs synthases forment PGI₂, PGD₂, PGE₂, PGF₂α ou TXA₂.",
      "La COX transforme la voie arachidonique en amont de PGH₂."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La voie de série 2 illustre une ramification enzymatique en aval de PGH₂.",
    "choiceExplanations": [
      "Vrai. Les deux traitements sont cités.",
      "Faux. LTA₄ appartient à la voie de la 5-lipoxygénase.",
      "Vrai. Le schéma montre ces branches.",
      "Vrai. PGH₂ est représenté comme intermédiaire central."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cox-series2-pathway"
    }
  },
  {
    "order": 128,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse les effets de pge₁ et pge₂. Quelles conclusions sont exactes ?",
    "choices": [
      "PGE₁ inhibe et PGE₂ stimule l’agrégation plaquettaire.",
      "Les deux sont décrites comme bronchoconstrictrices.",
      "Les deux sont vasodilatatrices dans la comparaison.",
      "PGE₁ est anti-inflammatoire et PGE₂ pro-inflammatoire dans le tableau."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "PGE₁ et PGE₂ partagent certains effets mais s’opposent sur d’autres.",
    "choiceExplanations": [
      "Vrai. Les effets plaquettaires sont opposés.",
      "Faux. Le tableau indique une bronchodilatation.",
      "Vrai. Cet effet est commun.",
      "Vrai. Les effets sont opposés."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pge1-pge2-effects"
    }
  },
  {
    "order": 129,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse le cas du misoprostol. Quelles conclusions sont exactes ?",
    "choices": [
      "Il favorise contraction utérine et assouplissement du col.",
      "Il inhibe toute contraction utérine.",
      "Il facilite le déclenchement de l’accouchement.",
      "Il est analogue synthétique de PGE₁."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le misoprostol illustre l’utilisation thérapeutique d’un analogue de prostaglandine.",
    "choiceExplanations": [
      "Vrai. Ces deux effets sont cités.",
      "Faux. La fiche décrit l’effet inverse.",
      "Vrai. C’est l’indication détaillée.",
      "Vrai. C’est sa nature pharmacologique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "misoprostol-pge1"
    }
  },
  {
    "order": 130,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse l’équilibre txa₂-pgi₂. Quelles conclusions sont exactes ?",
    "choices": [
      "Leurs effets sont antagonistes et leurs demi-vies très courtes.",
      "PGI₂ et TXA₂ stimulent tous deux l’agrégation.",
      "PGI₂ est endothéliale, vasodilatatrice et anti-agrégante.",
      "TXA₂ est plaquettaire, vasoconstricteur et pro-agrégant."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le couple TXA₂-PGI₂ illustre une régulation locale antagoniste.",
    "choiceExplanations": [
      "Vrai. Le cours insiste sur l’antagonisme local.",
      "Faux. PGI₂ l’inhibe.",
      "Vrai. Ces caractéristiques sont données.",
      "Vrai. Ces caractéristiques sont données."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "txa2-pgi2-balance"
    }
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse l’aspirine à faible dose. Quelles conclusions sont exactes ?",
    "choices": [
      "Elle agit sur un médiateur plaquettaire pro-agrégant.",
      "Elle stimule la production de TXA₂.",
      "Elle inhibe la synthèse des thromboxanes.",
      "Elle exerce une action anti-agrégante."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’effet anti-agrégant de l’aspirine à faible dose est relié aux thromboxanes.",
    "choiceExplanations": [
      "Vrai. TXA₂ stimule l’agrégation.",
      "Faux. Elle inhibe la voie des thromboxanes.",
      "Vrai. C’est le mécanisme indiqué.",
      "Vrai. Cet usage est mis en avant."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "txa2-pgi2-balance"
    }
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse la structure des leucotriènes. Quelles conclusions sont exactes ?",
    "choices": [
      "Ils dérivent d’un squelette eicosanoïque C20.",
      "Ils possèdent obligatoirement le cyclopentane des prostanoïdes.",
      "Trois doubles liaisons sont conjuguées.",
      "Ils possèdent quatre doubles liaisons."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les leucotriènes sont des eicosanoïdes C20 caractérisés par un système triénique.",
    "choiceExplanations": [
      "Vrai. Le nombre de carbones est rappelé.",
      "Faux. L’exemple LTA₄ possède une chaîne avec époxyde.",
      "Vrai. Elles forment le système triénique.",
      "Vrai. Le nombre total est donné."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lta4-structure"
    }
  },
  {
    "order": 133,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse les cellules et fonctions des leucotriènes. Quelles conclusions sont exactes ?",
    "choices": [
      "Le chimiotactisme et la cytotoxicité lymphocytaire sont cités.",
      "Les leucotriènes n’ont aucun effet immunitaire.",
      "La bronchoconstriction et la vasoconstriction sont citées.",
      "Leucocytes, mastocytes, plaquettes et macrophages sont cités comme producteurs."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les leucotriènes relient production immunitaire, muscles lisses et fonctions de défense.",
    "choiceExplanations": [
      "Vrai. Ce sont des rôles immunitaires.",
      "Faux. Deux effets immunitaires sont explicitement décrits.",
      "Vrai. Ce sont des effets sur les muscles lisses.",
      "Vrai. Les quatre types figurent dans la fiche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-cells-effects"
    }
  },
  {
    "order": 134,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse lta₄. Quelles conclusions sont exactes ?",
    "choices": [
      "Il possède quatre doubles liaisons dont trois conjuguées.",
      "Il est formé par la thromboxane synthase à partir de PGH₂.",
      "Il possède un époxyde C5-C6.",
      "Il est formé par la 5-lipoxygénase à partir de l’acide arachidonique."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "LTA₄ est l’intermédiaire époxydé central de la voie leucotriène.",
    "choiceExplanations": [
      "Vrai. Le système triénique est présent.",
      "Faux. Cette voie concerne TXA₂.",
      "Vrai. Cette particularité structurelle est donnée.",
      "Vrai. C’est son origine enzymatique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lta4-structure"
    }
  },
  {
    "order": 135,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse les branches issues de lta₄. Quelles conclusions sont exactes ?",
    "choices": [
      "LTA₄ peut conduire à LTC₄, LTD₄ et LTE₄.",
      "LTA₄ ne possède qu’un seul devenir, PGI₂.",
      "LTA₄ peut conduire à LTB₄.",
      "LTA₄ peut conduire à LXA₄ via la 15-lipoxygénase."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "LTA₄ est un carrefour entre lipoxine et plusieurs leucotriènes.",
    "choiceExplanations": [
      "Vrai. La branche au glutathion est détaillée.",
      "Faux. Le schéma montre plusieurs branches et PGI₂ appartient aux prostanoïdes.",
      "Vrai. Une branche directe est montrée.",
      "Vrai. La branche lipoxine est représentée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  },
  {
    "order": 136,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse le glutathion dans la voie des leucotriènes. Quelles conclusions sont exactes ?",
    "choices": [
      "Il est progressivement clivé pour conduire à LTD₄ puis LTE₄.",
      "Le peptide s’allonge progressivement de LTC₄ à LTE₄.",
      "Il intervient dans la formation de LTC₄.",
      "Le glutathion est un tripeptide γ-Glu-Cys-Gly."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La branche LTC₄-LTD₄-LTE₄ repose sur l’ajout puis le clivage du glutathion.",
    "choiceExplanations": [
      "Vrai. Glu puis Gly sont retirés.",
      "Faux. Il se raccourcit.",
      "Vrai. Il est ajouté dans la branche.",
      "Vrai. Les trois résidus sont indiqués."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-lipoxin-pathways"
    }
  },
  {
    "order": 137,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse une bronchoconstriction liée aux eicosanoïdes. Quelles conclusions sont exactes ?",
    "choices": [
      "L’effet concerne le muscle lisse bronchique.",
      "PGE₁ et PGE₂ sont les seules molécules bronchoconstrictrices du tableau.",
      "PGF₂α peut également être bronchoconstrictrice.",
      "Un leucotriène peut être impliqué selon la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Plusieurs eicosanoïdes peuvent agir sur le calibre bronchique avec des effets différents.",
    "choiceExplanations": [
      "Vrai. La fiche classe la bronchoconstriction sous les muscles lisses.",
      "Faux. Elles sont indiquées bronchodilatatrices.",
      "Vrai. Cet exemple est donné.",
      "Vrai. La bronchoconstriction est un effet cité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "pge1-pge2-effects"
    }
  },
  {
    "order": 138,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse une situation plaquettaire locale. Quelles conclusions sont exactes ?",
    "choices": [
      "L’aspirine à faible dose diminue la synthèse des TX.",
      "PGI₂ est le principal médiateur plaquettaire pro-agrégant.",
      "PGI₂ inhibe l’agrégation.",
      "TXA₂ favorise l’agrégation."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La fiche relie médiateurs locaux et pharmacologie de l’agrégation plaquettaire.",
    "choiceExplanations": [
      "Vrai. C’est le mécanisme anti-agrégant présenté.",
      "Faux. PGI₂ est endothéliale et anti-agrégante.",
      "Vrai. L’endothélium produit ce médiateur.",
      "Vrai. Il active et rapproche les plaquettes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "txa2-pgi2-balance"
    }
  },
  {
    "order": 139,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse une situation immunitaire liée aux leucotriènes. Quelles conclusions sont exactes ?",
    "choices": [
      "Des cellules comme les macrophages et mastocytes peuvent produire ces médiateurs.",
      "Les leucotriènes suppriment nécessairement toute activité immunitaire.",
      "L’activité cytotoxique des lymphocytes peut augmenter.",
      "Le chimiotactisme peut être augmenté."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les leucotriènes participent à des fonctions de recrutement et d’activation immunitaire.",
    "choiceExplanations": [
      "Vrai. Elles figurent dans la liste.",
      "Faux. La fiche décrit des effets d’activation.",
      "Vrai. Cet effet est cité.",
      "Vrai. Cet effet est cité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "leukotriene-cells-effects"
    }
  },
  {
    "order": 140,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un étudiant analyse le bilan général des eicosanoïdes. Quelles conclusions sont exactes ?",
    "choices": [
      "Ils ont des fonctions locales nombreuses et parfois antagonistes.",
      "Le chapitre ne contient aucune application thérapeutique.",
      "Leurs voies enzymatiques déterminent des familles distinctes.",
      "Ils dérivent de précurseurs lipidiques C20."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le chapitre relie structure, synthèse, fonctions et applications thérapeutiques.",
    "choiceExplanations": [
      "Vrai. Les couples de médiateurs l’illustrent.",
      "Faux. Aspirine, ibuprofène et misoprostol sont cités.",
      "Vrai. COX et lipoxygénases sont séparées.",
      "Vrai. L’acide arachidonique est le principal exemple."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "eicosanoid-overview"
    }
  }
];
