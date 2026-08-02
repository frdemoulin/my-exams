import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 5;

export const SYNTHESIS_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "121": [
    "la liaison peptidique"
  ],
  "122": [
    "la taille des peptides et protéines"
  ],
  "123": [
    "les extrémités N- et C-terminales"
  ],
  "124": [
    "la proline dans une chaîne peptidique"
  ],
  "125": [
    "la dénaturation et la classification des protéines"
  ],
  "126": [
    "la structure primaire"
  ],
  "127": [
    "la rigidité de la liaison peptidique"
  ],
  "128": [
    "les angles phi et psi"
  ],
  "129": [
    "les hydroxylations et carboxylations"
  ],
  "130": [
    "le clivage protéolytique et les ponts disulfure"
  ],
  "131": [
    "l’hélice alpha"
  ],
  "132": [
    "les acides aminés de l’hélice alpha"
  ],
  "133": [
    "les feuillets plissés beta"
  ],
  "134": [
    "les coudes et la structure tertiaire"
  ],
  "135": [
    "les domaines et l’organisation globulaire"
  ],
  "136": [
    "la structure quaternaire"
  ],
  "137": [
    "les homo- et hétéropolymères"
  ],
  "138": [
    "les créatine kinases CK-MM et CK-MB"
  ],
  "139": [
    "les protéines G hétérotrimériques"
  ],
  "140": [
    "les tétramères LDH et hémoglobine"
  ]
};

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "structure-des-peptides-et-proteines-synthese-structures-fonctions",
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
    "slug": "structure-des-peptides-et-proteines-synthese-raisonnement",
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
    "question": "Dans une question transversale sur la liaison peptidique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond"
    },
    "choices": [
      "Peptides et protéines comportent des liaisons peptidiques.",
      "La fonction amine du premier acide aminé reste toujours sans réaction.",
      "La composition en acides aminés n’influence jamais la fonction.",
      "Elle relie le carboxyle d’un acide aminé à l’amine du suivant."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La liaison peptidique relie les résidus et construit la chaîne polypeptidique.",
    "choiceExplanations": [
      "Vrai. Peptides et protéines comportent des liaisons peptidiques.",
      "Faux. Elle peut participer à une liaison avec l’acide aminé précédent.",
      "Faux. Elle participe à la déterminer.",
      "Vrai. Elle relie le carboxyle d’un acide aminé à l’amine du suivant."
    ]
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la taille des peptides et protéines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-size"
    },
    "choices": [
      "La fiche place les peptides entre plus de 2 et moins de 100 acides aminés.",
      "Un tripeptide contient trois résidus.",
      "Un peptide possède toujours plus de 1000 acides aminés.",
      "Un tripeptide ne comporte aucune liaison peptidique."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La taille et le nombre de chaînes permettent une distinction pratique entre peptides et protéines.",
    "choiceExplanations": [
      "Vrai. La fiche place les peptides entre plus de 2 et moins de 100 acides aminés.",
      "Vrai. Un tripeptide contient trois résidus.",
      "Faux. La fiche retient une taille inférieure à 100.",
      "Faux. Il comporte deux liaisons peptidiques."
    ]
  },
  {
    "order": 123,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les extrémités N- et C-terminales, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-termini"
    },
    "choices": [
      "Les codes à une ou trois lettres peuvent écrire la séquence.",
      "L’extrémité C-terminale porte toujours une amine libre.",
      "L’extrémité C-terminale possède une fonction carboxyle libre.",
      "Les abréviations d’acides aminés ne peuvent pas servir à écrire une séquence."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les deux extrémités sont chimiquement distinctes et donnent un sens à la chaîne.",
    "choiceExplanations": [
      "Vrai. Les codes à une ou trois lettres peuvent écrire la séquence.",
      "Faux. Elle porte le carboxyle libre.",
      "Vrai. L’extrémité C-terminale possède une fonction carboxyle libre.",
      "Faux. Elles sont utilisées pour cela."
    ]
  },
  {
    "order": 124,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la proline dans une chaîne peptidique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "proline-peptide-kink"
    },
    "choices": [
      "Les chaînes latérales sont toutes orientées du même côté.",
      "La proline peut perturber une structure régulière.",
      "Les chaînes latérales alternent de part et d’autre de la chaîne.",
      "La proline possède une chaîne latérale totalement flexible et linéaire."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La proline constitue une exception structurale capable d’anguler la chaîne.",
    "choiceExplanations": [
      "Faux. Elles alternent dans la représentation décrite.",
      "Vrai. La proline peut perturber une structure régulière.",
      "Vrai. Les chaînes latérales alternent de part et d’autre de la chaîne.",
      "Faux. Elle est cyclique."
    ]
  },
  {
    "order": 125,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la dénaturation et la classification des protéines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-denaturation-classification"
    },
    "choices": [
      "Une hétéroprotéine ne contient aucun acide aminé.",
      "La dénaturation peut être réversible ou irréversible.",
      "Elle dépend notamment du pH, de la température et de la force ionique.",
      "La dénaturation modifie nécessairement la séquence primaire par hydrolyse complète."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La conformation est fragile et la composition distingue holo- et hétéroprotéines.",
    "choiceExplanations": [
      "Faux. Elle contient une chaîne protéique et une partie non protéique.",
      "Vrai. La dénaturation peut être réversible ou irréversible.",
      "Vrai. Elle dépend notamment du pH, de la température et de la force ionique.",
      "Faux. Elle modifie surtout la conformation."
    ]
  },
  {
    "order": 126,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure primaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "four-levels-primary"
    },
    "choices": [
      "L’ordre dépend de l’information génétique.",
      "Elle correspond à l’enchaînement des acides aminés.",
      "La séquence n’a aucun effet sur la fonction.",
      "La structure primaire correspond uniquement à une hélice α."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La structure primaire est la séquence génétiquement déterminée des résidus.",
    "choiceExplanations": [
      "Vrai. L’ordre dépend de l’information génétique.",
      "Vrai. Elle correspond à l’enchaînement des acides aminés.",
      "Faux. Elle influence conformation et activité.",
      "Faux. Elle correspond à la séquence."
    ]
  },
  {
    "order": 127,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la rigidité de la liaison peptidique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "peptide-bond-rigidity"
    },
    "choices": [
      "La liaison peptidique est plane.",
      "Elle est une liaison ionique sans résonance.",
      "Elle est rigide.",
      "La rigidité provient uniquement d’un pont disulfure."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La délocalisation électronique donne à la liaison peptidique une géométrie plane et rigide.",
    "choiceExplanations": [
      "Vrai. La liaison peptidique est plane.",
      "Faux. La résonance explique sa rigidité.",
      "Vrai. Elle est rigide.",
      "Faux. Elle provient de la résonance C–N."
    ]
  },
  {
    "order": 128,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les angles phi et psi, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "phi-psi-angles"
    },
    "choices": [
      "Les angles φ et ψ mesurent uniquement la longueur de la chaîne.",
      "L’angle ψ concerne la liaison Cα–CO.",
      "L’angle φ concerne la liaison peptidique C–N elle-même.",
      "L’angle φ concerne la liaison N–Cα."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La conformation du squelette dépend des rotations φ et ψ autour du carbone α.",
    "choiceExplanations": [
      "Faux. Ils décrivent des rotations conformationnelles.",
      "Vrai. L’angle ψ concerne la liaison Cα–CO.",
      "Faux. Il concerne N–Cα.",
      "Vrai. L’angle φ concerne la liaison N–Cα."
    ]
  },
  {
    "order": 129,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les hydroxylations et carboxylations, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "posttranslational-modifications"
    },
    "choices": [
      "La proline peut devenir 4-hydroxyproline.",
      "L’hydroxylation retire un groupement OH.",
      "Le γ-carboxyglutamate participe à la fixation du calcium en coagulation.",
      "La carboxylation retire tout COOH."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les modifications des chaînes latérales créent des résidus spécialisés comme hydroxyproline et γ-carboxyglutamate.",
    "choiceExplanations": [
      "Vrai. La proline peut devenir 4-hydroxyproline.",
      "Faux. Elle ajoute un groupement hydroxyle.",
      "Vrai. Le γ-carboxyglutamate participe à la fixation du calcium en coagulation.",
      "Faux. Elle ajoute un groupement carboxyle."
    ]
  },
  {
    "order": 130,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le clivage protéolytique et les ponts disulfure, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "disulfide-proteolysis"
    },
    "choices": [
      "Un pont disulfure résulte de l’oxydation de deux cystéines.",
      "Les ponts disulfure sont toujours non covalents.",
      "Un pont disulfure est formé entre deux glycines.",
      "Un clivage protéolytique peut activer un précurseur."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Clivage et ponts disulfure sont deux modifications majeures de maturation et stabilisation.",
    "choiceExplanations": [
      "Vrai. Un pont disulfure résulte de l’oxydation de deux cystéines.",
      "Faux. Ce sont des liaisons covalentes.",
      "Faux. Il est formé entre deux cystéines.",
      "Vrai. Un clivage protéolytique peut activer un précurseur."
    ]
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’hélice alpha, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "Elle comporte environ 3,6 acides aminés par tour.",
      "L’hélice α du cours est orientée vers la gauche.",
      "Sa stabilité repose sur des liaisons hydrogène parallèles à l’axe.",
      "Sa stabilité dépend uniquement de liaisons disulfure."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’hélice α est une structure secondaire droite stabilisée par un réseau de liaisons hydrogène.",
    "choiceExplanations": [
      "Vrai. Elle comporte environ 3,6 acides aminés par tour.",
      "Faux. Elle est orientée vers la droite.",
      "Vrai. Sa stabilité repose sur des liaisons hydrogène parallèles à l’axe.",
      "Faux. Les liaisons hydrogène sont essentielles."
    ]
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les acides aminés de l’hélice alpha, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "alpha-helix"
    },
    "choices": [
      "La myoglobine ne comporte aucune hélice.",
      "Alanine, leucine, glutamate et méthionine sont fréquemment retrouvés.",
      "La myoglobine comporte huit hélices.",
      "Les immunoglobulines sont entièrement constituées d’hélices α."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La composition en résidus favorise ou défavorise la formation d’une hélice α.",
    "choiceExplanations": [
      "Faux. La fiche en indique huit.",
      "Vrai. Alanine, leucine, glutamate et méthionine sont fréquemment retrouvés.",
      "Vrai. La myoglobine comporte huit hélices.",
      "Faux. Elles sont riches en feuillets β."
    ]
  },
  {
    "order": 133,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les feuillets plissés beta, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "beta-sheet"
    },
    "choices": [
      "Ils sont formés de brins reliés par des liaisons hydrogène.",
      "Les immunoglobulines ne comportent aucun feuillet β.",
      "Les brins ne peuvent jamais être antiparallèles.",
      "Les immunoglobulines sont riches en feuillets β."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les feuillets β associent des brins parallèles ou antiparallèles stabilisés par des liaisons hydrogène.",
    "choiceExplanations": [
      "Vrai. Ils sont formés de brins reliés par des liaisons hydrogène.",
      "Faux. Elles en comportent beaucoup.",
      "Faux. Les deux orientations sont possibles.",
      "Vrai. Les immunoglobulines sont riches en feuillets β."
    ]
  },
  {
    "order": 134,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les coudes et la structure tertiaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tertiary-structure"
    },
    "choices": [
      "La proline et la glycine sont exclues des coudes.",
      "Les coudes permettent un changement de direction de la chaîne.",
      "Elle est stabilisée par interactions non covalentes et ponts disulfure.",
      "Les coudes prolongent toujours la chaîne sans angulation."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La structure tertiaire organise les éléments secondaires grâce à plusieurs types d’interactions.",
    "choiceExplanations": [
      "Faux. Elles y sont fréquentes.",
      "Vrai. Les coudes permettent un changement de direction de la chaîne.",
      "Vrai. Elle est stabilisée par interactions non covalentes et ponts disulfure.",
      "Faux. Ils changent sa direction."
    ]
  },
  {
    "order": 135,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les domaines et l’organisation globulaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-domains"
    },
    "choices": [
      "Les zones charnières permettent des mouvements entre domaines.",
      "Les résidus hydrophobes sont tous exposés à l’eau.",
      "Dans une protéine globulaire, les résidus hydrophobes sont plutôt internes et les polaires périphériques.",
      "Les zones charnières rendent toute mobilité impossible."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les domaines modulaires et leur dynamique permettent la fonction des protéines globulaires.",
    "choiceExplanations": [
      "Vrai. Les zones charnières permettent des mouvements entre domaines.",
      "Faux. Ils sont préférentiellement enfouis.",
      "Vrai. Dans une protéine globulaire, les résidus hydrophobes sont plutôt internes et les polaires périphériques.",
      "Faux. Elles permettent le mouvement."
    ]
  },
  {
    "order": 136,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure quaternaire, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-structure"
    },
    "choices": [
      "La structure quaternaire est la simple séquence d’une chaîne.",
      "L’assemblage forme un complexe fonctionnel.",
      "Elle détruit nécessairement toute fonction.",
      "Elle associe plusieurs chaînes polypeptidiques."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La structure quaternaire décrit l’association fonctionnelle de plusieurs sous-unités.",
    "choiceExplanations": [
      "Faux. Cela correspond à la structure primaire.",
      "Vrai. L’assemblage forme un complexe fonctionnel.",
      "Faux. Elle peut être indispensable à la fonction.",
      "Vrai. Elle associe plusieurs chaînes polypeptidiques."
    ]
  },
  {
    "order": 137,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les homo- et hétéropolymères, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "quaternary-assemblies"
    },
    "choices": [
      "Le préfixe hétéro renseigne sur leur diversité.",
      "Un homopolymère comporte des sous-unités identiques.",
      "Un hétéropolymère ne comporte qu’une seule chaîne.",
      "Un homopolymère comporte obligatoirement des sous-unités différentes."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La composition en sous-unités permet de distinguer homo- et hétéro-assemblages.",
    "choiceExplanations": [
      "Vrai. Le préfixe hétéro renseigne sur leur diversité.",
      "Vrai. Un homopolymère comporte des sous-unités identiques.",
      "Faux. Il comporte plusieurs sous-unités différentes.",
      "Faux. Ses sous-unités sont identiques."
    ]
  },
  {
    "order": 138,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les créatine kinases CK-MM et CK-MB, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ck-dimers"
    },
    "choices": [
      "CK-MM comporte une sous-unité M et une B.",
      "CK-MB associe deux sous-unités B uniquement.",
      "CK-MB associe une sous-unité M et une sous-unité B.",
      "CK-MM est un homodimère."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les isoformes CK illustrent la distinction entre homo- et hétérodimères.",
    "choiceExplanations": [
      "Faux. Cette composition correspond à CK-MB.",
      "Faux. Elle associe M et B.",
      "Vrai. CK-MB associe une sous-unité M et une sous-unité B.",
      "Vrai. CK-MM est un homodimère."
    ]
  },
  {
    "order": 139,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les protéines G hétérotrimériques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "protein-g-trimer"
    },
    "choices": [
      "Elle ne possède aucune structure quaternaire.",
      "Les sous-unités sont α, β et γ.",
      "Les trois sous-unités sont différentes.",
      "Une protéine G hétérotrimérique ne possède que deux sous-unités."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les protéines G illustrent un hétérotrimère αβγ.",
    "choiceExplanations": [
      "Faux. L’association des trois sous-unités constitue cette structure.",
      "Vrai. Les sous-unités sont α, β et γ.",
      "Vrai. Les trois sous-unités sont différentes.",
      "Faux. Elle en possède trois."
    ]
  },
  {
    "order": 140,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les tétramères LDH et hémoglobine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "tetramer-examples"
    },
    "choices": [
      "La LDH est un monomère unique.",
      "LD M4 comporte uniquement des sous-unités H.",
      "LD M4 est une isoforme hépatique et musculaire.",
      "LD H4 est une isoforme cardiaque."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "LDH et hémoglobine illustrent plusieurs compositions tétramériques.",
    "choiceExplanations": [
      "Faux. Elle est formée de quatre sous-unités.",
      "Faux. Elle comporte quatre sous-unités M.",
      "Vrai. LD M4 est une isoforme hépatique et musculaire.",
      "Vrai. LD H4 est une isoforme cardiaque."
    ]
  }
];
