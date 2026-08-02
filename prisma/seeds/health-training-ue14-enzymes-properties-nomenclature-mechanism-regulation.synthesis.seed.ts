import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 5;

export const SYNTHESIS_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "121": [
    "les catalyseurs"
  ],
  "122": [
    "la nature des enzymes"
  ],
  "123": [
    "la puissance catalytique"
  ],
  "124": [
    "la spécificité des protéases"
  ],
  "125": [
    "l’affinité enzyme-substrat"
  ],
  "126": [
    "les cofacteurs et l’holoenzyme"
  ],
  "127": [
    "les groupements prosthétiques et cofacteurs labiles"
  ],
  "128": [
    "les vitamines précurseurs de coenzymes"
  ],
  "129": [
    "la nomenclature et les classes EC"
  ],
  "130": [
    "les isoenzymes CK et LDH"
  ],
  "131": [
    "les modèles de Fisher et Koshland"
  ],
  "132": [
    "l’énergie d’activation"
  ],
  "133": [
    "les complexes ES et EP"
  ],
  "134": [
    "le site de fixation et le site catalytique"
  ],
  "135": [
    "la chymotrypsine et sa triade catalytique"
  ],
  "136": [
    "l’allostérie"
  ],
  "137": [
    "la régulation de la PKA par l’AMPc"
  ],
  "138": [
    "la régulation par modification covalente"
  ],
  "139": [
    "l’ubiquitination et le protéasome"
  ],
  "140": [
    "la protéolyse limitée et les zymogènes"
  ]
};

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "enzymes-proprietes-nomenclature-mecanisme-action-regulation-synthese-connaissances",
    "title": "Propriétés, mécanismes et paramètres",
    "description": "Réviser transversalement les notions et relations du chapitre.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "items": [
      {
        "type": "GROUP",
        "title": "Définitions et classifications",
        "sharedStatement": "Les questions suivantes portent sur les définitions et classifications fondamentales.",
        "questionOrders": [
          121,
          122,
          123
        ]
      },
      {
        "type": "GROUP",
        "title": "Mécanismes",
        "sharedStatement": "Les questions suivantes portent sur les mécanismes enzymatiques.",
        "questionOrders": [
          124,
          125,
          126
        ]
      },
      {
        "type": "GROUP",
        "title": "Paramètres et applications",
        "sharedStatement": "Les questions suivantes relient paramètres, régulation et applications.",
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
    "slug": "enzymes-proprietes-nomenclature-mecanisme-action-regulation-synthese-raisonnement",
    "title": "Raisonnement transversal",
    "description": "Résoudre des questions proches de l’esprit de l’examen.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "items": [
      {
        "type": "GROUP",
        "title": "Analyse de schémas",
        "sharedStatement": "Les questions suivantes s’appuient sur les schémas et relations du chapitre.",
        "questionOrders": [
          131,
          132,
          133
        ]
      },
      {
        "type": "GROUP",
        "title": "Comparaisons",
        "sharedStatement": "Les questions suivantes demandent de comparer plusieurs mécanismes ou paramètres.",
        "questionOrders": [
          134,
          135,
          136
        ]
      },
      {
        "type": "GROUP",
        "title": "Situations biologiques et analytiques",
        "sharedStatement": "Les questions suivantes exploitent des situations biologiques, thérapeutiques ou de laboratoire.",
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
    "question": "Dans une question transversale sur les catalyseurs, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalyst-types"
    },
    "choices": [
      "Le nickel et le platine sont des ribozymes.",
      "Les catalyseurs insolubles relèvent d’une catalyse hétérogène.",
      "Les catalyseurs peuvent être minéraux ou organiques.",
      "Un catalyseur impose nécessairement une réaction impossible thermodynamiquement."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les catalyseurs accélèrent les réactions; leur solubilité permet de distinguer catalyses homogène et hétérogène.",
    "choiceExplanations": [
      "Faux. Ce sont des catalyseurs minéraux solides.",
      "Vrai. Les catalyseurs insolubles relèvent d’une catalyse hétérogène.",
      "Vrai. Les catalyseurs peuvent être minéraux ou organiques.",
      "Faux. Il accélère une réaction possible sans modifier sa faisabilité thermodynamique."
    ]
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la nature des enzymes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nature"
    },
    "choices": [
      "Les enzymes possèdent un pouvoir catalytique élevé.",
      "Un ribozyme est une protéine contenant du ribose.",
      "Une enzyme est consommée stœchiométriquement à chaque réaction.",
      "Les ribozymes sont des ARN catalytiques."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les enzymes sont des catalyseurs biologiques, principalement protéiques, capables de reconnaître sélectivement leurs substrats.",
    "choiceExplanations": [
      "Vrai. Les enzymes possèdent un pouvoir catalytique élevé.",
      "Faux. C’est un ARN doté d’une activité catalytique.",
      "Faux. Elle agit comme catalyseur et peut participer à plusieurs cycles.",
      "Vrai. Les ribozymes sont des ARN catalytiques."
    ]
  },
  {
    "order": 123,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la puissance catalytique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-power"
    },
    "choices": [
      "L’OMP décarboxylase est donnée comme exemple d’une accélération de 10¹⁷.",
      "L’anhydrase carbonique est donnée comme exemple d’un facteur 10⁻⁶.",
      "Les enzymes accélèrent les réactions biologiques d’un facteur au moins égal à 10⁶ selon la fiche.",
      "Les enzymes n’ont qu’un effet négligeable sur la vitesse."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La catalyse enzymatique peut accélérer une réaction de plusieurs millions à plusieurs milliards de milliards de fois.",
    "choiceExplanations": [
      "Vrai. L’OMP décarboxylase est donnée comme exemple d’une accélération de 10¹⁷.",
      "Faux. La valeur indiquée est 10⁶.",
      "Vrai. Les enzymes accélèrent les réactions biologiques d’un facteur au moins égal à 10⁶ selon la fiche.",
      "Faux. Leur pouvoir catalytique peut être considérable."
    ]
  },
  {
    "order": 124,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la spécificité des protéases, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "protease-specificity"
    },
    "choices": [
      "La spécificité enzymatique est relative et varie selon l’enzyme.",
      "La subtilisine ne peut couper qu’une liaison Arg-Gly.",
      "La subtilisine peut couper entre deux acides aminés quelconques dans l’exemple du cours.",
      "La trypsine clive après une arginine ou une lysine."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les protéases illustrent un continuum allant d’une spécificité large à une reconnaissance très précise.",
    "choiceExplanations": [
      "Vrai. La spécificité enzymatique est relative et varie selon l’enzyme.",
      "Faux. Cet exemple correspond à la thrombine.",
      "Vrai. La subtilisine peut couper entre deux acides aminés quelconques dans l’exemple du cours.",
      "Vrai. La trypsine clive après une arginine ou une lysine."
    ]
  },
  {
    "order": 125,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’affinité enzyme-substrat, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-substrate-affinity"
    },
    "choices": [
      "L’affinité et la spécificité sont sans lien avec la structure tridimensionnelle.",
      "L’affinité dépend uniquement de liaisons covalentes irréversibles.",
      "Des interactions hydrophobes peuvent participer à la fixation.",
      "La complémentarité du site actif contribue à l’affinité."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La somme de nombreuses interactions faibles permet une fixation efficace et sélective du substrat.",
    "choiceExplanations": [
      "Faux. La géométrie et les interactions du site actif sont déterminantes.",
      "Faux. De nombreuses interactions non covalentes participent à la fixation.",
      "Vrai. Des interactions hydrophobes peuvent participer à la fixation.",
      "Vrai. La complémentarité du site actif contribue à l’affinité."
    ]
  },
  {
    "order": 126,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les cofacteurs et l’holoenzyme, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "apoenzyme-holoenzyme"
    },
    "choices": [
      "La partie non protéique nécessaire est appelée cofacteur.",
      "Tous les cofacteurs sont des protéines.",
      "Une holoenzyme est une enzyme privée de son cofacteur.",
      "L’association apoenzyme-cofacteur constitue l’holoenzyme."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Certaines enzymes ne deviennent pleinement fonctionnelles qu’après association de leur apoenzyme à un cofacteur.",
    "choiceExplanations": [
      "Vrai. La partie non protéique nécessaire est appelée cofacteur.",
      "Faux. Ils sont non protéiques.",
      "Faux. Elle associe apoenzyme et cofacteur.",
      "Vrai. L’association apoenzyme-cofacteur constitue l’holoenzyme."
    ]
  },
  {
    "order": 127,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les groupements prosthétiques et cofacteurs labiles, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "prosthetic-labile"
    },
    "choices": [
      "Le NAD⁺ est décrit comme fixé en permanence à l’aldose réductase.",
      "Un cofacteur labile ne peut jamais être régénéré.",
      "Un cofacteur labile est mobile et peut être libéré après la réaction.",
      "Le NAD⁺ est cité comme coenzyme labile associé à l’aldose réductase."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La permanence de la liaison à l’enzyme distingue groupements prosthétiques et cofacteurs labiles.",
    "choiceExplanations": [
      "Faux. Il est présenté comme un cofacteur labile.",
      "Faux. Il est libéré puis régénéré.",
      "Vrai. Un cofacteur labile est mobile et peut être libéré après la réaction.",
      "Vrai. Le NAD⁺ est cité comme coenzyme labile associé à l’aldose réductase."
    ]
  },
  {
    "order": 128,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les vitamines précurseurs de coenzymes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "coenzyme-vitamins"
    },
    "choices": [
      "Le FAD dérive de la vitamine B12 dans la fiche.",
      "Le phosphate de pyridoxal dérive de la vitamine B6.",
      "Les coenzymes flaviniques dérivent de la vitamine B2.",
      "La biotine correspond à la vitamine B8 et intervient dans les transferts de CO₂."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Plusieurs vitamines hydrosolubles sont les précurseurs de coenzymes indispensables au métabolisme.",
    "choiceExplanations": [
      "Faux. Il dérive de la vitamine B2.",
      "Vrai. Le phosphate de pyridoxal dérive de la vitamine B6.",
      "Vrai. Les coenzymes flaviniques dérivent de la vitamine B2.",
      "Vrai. La biotine correspond à la vitamine B8 et intervient dans les transferts de CO₂."
    ]
  },
  {
    "order": 129,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la nomenclature et les classes EC, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nomenclature-ec"
    },
    "choices": [
      "Les hydrolases créent une liaison entre deux molécules avec consommation d’ATP.",
      "La nomenclature fonctionnelle associe le substrat, le type de réaction et le suffixe -ase.",
      "Les ligases ne nécessitent jamais d’énergie.",
      "Le premier nombre EC indique le grand type de réaction catalysée."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La nomenclature fonctionnelle décrit le substrat et la réaction; la nomenclature EC classe officiellement l’enzyme.",
    "choiceExplanations": [
      "Faux. Elles coupent une liaison par hydrolyse.",
      "Vrai. La nomenclature fonctionnelle associe le substrat, le type de réaction et le suffixe -ase.",
      "Faux. Elles utilisent généralement l’hydrolyse d’ATP ou d’un nucléotide.",
      "Vrai. Le premier nombre EC indique le grand type de réaction catalysée."
    ]
  },
  {
    "order": 130,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une analyse compare les isoenzymes de créatine kinase et de lactate déshydrogénase dans plusieurs tissus. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "isoenzymes-ck-ldh"
    },
    "choices": [
      "Des isoenzymes ont des structures différentes mais catalysent la même réaction.",
      "LDH1 est surtout hépatique et musculaire dans la fiche.",
      "La LDH ne possède qu’une seule combinaison de sous-unités.",
      "La LDH possède quatre sous-unités H ou M et cinq isoenzymes possibles."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les profils d’isoenzymes reflètent des structures et expressions tissulaires différentes pour une même activité catalytique.",
    "choiceExplanations": [
      "Vrai. Des isoenzymes ont des structures différentes mais catalysent la même réaction.",
      "Faux. LDH1 est surtout cardiaque.",
      "Faux. Les sous-unités H et M permettent cinq isoenzymes.",
      "Vrai. La LDH possède quatre sous-unités H ou M et cinq isoenzymes possibles."
    ]
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les modèles de Fisher et Koshland, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "fisher-koshland"
    },
    "choices": [
      "Il suppose une complémentarité géométrique préexistante.",
      "Le modèle de Fisher est le modèle clé-serrure.",
      "Le modèle de Fisher décrit une enzyme qui change toujours de forme après fixation.",
      "Le modèle actuellement admis exclut tout changement conformationnel."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le modèle de l’ajustement induit complète le modèle clé-serrure en intégrant la plasticité de l’enzyme.",
    "choiceExplanations": [
      "Vrai. Il suppose une complémentarité géométrique préexistante.",
      "Vrai. Le modèle de Fisher est le modèle clé-serrure.",
      "Faux. Il suppose une adaptation parfaite dès le départ.",
      "Faux. L’ajustement induit repose sur ce changement."
    ]
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’énergie d’activation, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "activation-energy"
    },
    "choices": [
      "Sans enzyme, le substrat doit franchir une barrière d’énergie d’activation.",
      "L’enzyme diminue l’énergie d’activation.",
      "L’enzyme modifie obligatoirement le bilan énergétique global entre substrat et produit.",
      "La voie enzymatique comporte plusieurs étapes de plus faible amplitude énergétique."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "L’enzyme accélère une réaction en proposant un chemin réactionnel à plus faible énergie d’activation.",
    "choiceExplanations": [
      "Vrai. Sans enzyme, le substrat doit franchir une barrière d’énergie d’activation.",
      "Vrai. L’enzyme diminue l’énergie d’activation.",
      "Faux. Elle modifie la barrière cinétique, pas le bilan global.",
      "Vrai. La voie enzymatique comporte plusieurs étapes de plus faible amplitude énergétique."
    ]
  },
  {
    "order": 133,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les complexes ES et EP, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "es-ep-cycle"
    },
    "choices": [
      "Le produit peut rester transitoirement associé dans un complexe EP.",
      "Le produit a toujours une affinité supérieure au substrat.",
      "La libération du produit régénère l’enzyme.",
      "L’enzyme disparaît définitivement après la réaction."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le cycle catalytique passe par des complexes transitoires puis restitue l’enzyme.",
    "choiceExplanations": [
      "Vrai. Le produit peut rester transitoirement associé dans un complexe EP.",
      "Faux. La fiche indique qu’elle est souvent plus faible.",
      "Vrai. La libération du produit régénère l’enzyme.",
      "Faux. Elle est régénérée."
    ]
  },
  {
    "order": 134,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le site de fixation et le site catalytique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "active-site-parts"
    },
    "choices": [
      "Le site actif est toujours constitué uniquement d’un cofacteur minéral.",
      "Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Le site actif regroupe les fonctions de fixation et de catalyse.",
      "Le site de fixation ne participe pas à la spécificité."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La spécificité et la catalyse reposent sur des fonctions complémentaires du site actif.",
    "choiceExplanations": [
      "Faux. Des résidus protéiques y jouent un rôle central.",
      "Vrai. Ces fonctions reposent sur des résidus d’acides aminés de la partie protéique.",
      "Vrai. Le site actif regroupe les fonctions de fixation et de catalyse.",
      "Faux. Il contribue à la reconnaissance."
    ]
  },
  {
    "order": 135,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la chymotrypsine et sa triade catalytique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "chymotrypsin-mechanism"
    },
    "choices": [
      "Sa triade catalytique associe glycine, valine et leucine.",
      "Elle clive notamment les liaisons Phe-X et Trp-X.",
      "Le mécanisme passe par un intermédiaire acyl-enzyme puis l’intervention d’une molécule d’eau.",
      "Le mécanisme ne libère qu’un seul peptide inchangé."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La chymotrypsine est une sérine-protéase dont la triade Ser-His-Asp permet l’hydrolyse d’une liaison peptidique.",
    "choiceExplanations": [
      "Faux. Elle associe Ser, His et Asp.",
      "Vrai. Elle clive notamment les liaisons Phe-X et Trp-X.",
      "Vrai. Le mécanisme passe par un intermédiaire acyl-enzyme puis l’intervention d’une molécule d’eau.",
      "Faux. Le substrat peptidique est clivé en deux produits."
    ]
  },
  {
    "order": 136,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’allostérie, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "allosteric-regulation"
    },
    "choices": [
      "La fixation de l’effecteur modifie la conformation de l’enzyme.",
      "Une enzyme peut alterner entre formes active et inactive.",
      "L’allostérie ne modifie jamais la conformation.",
      "Une enzyme allostérique possède un site régulateur distinct du site actif."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "L’allostérie couple la fixation d’un effecteur à un changement de conformation et d’activité.",
    "choiceExplanations": [
      "Vrai. La fixation de l’effecteur modifie la conformation de l’enzyme.",
      "Vrai. Une enzyme peut alterner entre formes active et inactive.",
      "Faux. La modification conformationnelle transmet la régulation.",
      "Vrai. Une enzyme allostérique possède un site régulateur distinct du site actif."
    ]
  },
  {
    "order": 137,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la régulation de la PKA par l’AMPc, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "pka-camp"
    },
    "choices": [
      "La sous-unité régulatrice catalyse directement toutes les phosphorylations.",
      "Une seule molécule d’AMPc est indiquée pour l’ensemble du complexe.",
      "La libération rend les sites actifs accessibles.",
      "La PKA inactive associe sous-unités régulatrices et catalytiques."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’AMPc active la PKA en dissociant le complexe régulateur-catalytique.",
    "choiceExplanations": [
      "Faux. La catalyse est portée par les sous-unités catalytiques.",
      "Faux. Le schéma en indique quatre.",
      "Vrai. La libération rend les sites actifs accessibles.",
      "Vrai. La PKA inactive associe sous-unités régulatrices et catalytiques."
    ]
  },
  {
    "order": 138,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la régulation par modification covalente, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "covalent-regulation"
    },
    "choices": [
      "Adénylation, uridylation, ADP-ribosylation et acétylation sont citées.",
      "La PKA inactive directement la glycogène phosphorylase sans cascade.",
      "Les modifications covalentes sont nécessairement irréversibles.",
      "Une modification covalente ajoute un groupement sur la partie protéique de l’enzyme."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les modifications covalentes et les cascades de phosphorylation amplifient la régulation métabolique.",
    "choiceExplanations": [
      "Vrai. Adénylation, uridylation, ADP-ribosylation et acétylation sont citées.",
      "Faux. La fiche décrit une cascade de phosphorylations.",
      "Faux. Elles peuvent être réversibles selon les systèmes.",
      "Vrai. Une modification covalente ajoute un groupement sur la partie protéique de l’enzyme."
    ]
  },
  {
    "order": 139,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’ubiquitination et le protéasome, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ubiquitin-proteasome"
    },
    "choices": [
      "La polyubiquitination protège toujours définitivement l’enzyme de la dégradation.",
      "L’ubiquitine est une protéine de 76 acides aminés dans la fiche.",
      "Les enzymes E1, E2 et E3 participent à l’ubiquitination.",
      "Le protéasome synthétise les enzymes dénaturées."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La stabilité de l’enzyme constitue un niveau de régulation grâce au ciblage ubiquitine-protéasome.",
    "choiceExplanations": [
      "Faux. Elle peut la cibler vers le protéasome.",
      "Vrai. L’ubiquitine est une protéine de 76 acides aminés dans la fiche.",
      "Vrai. Les enzymes E1, E2 et E3 participent à l’ubiquitination.",
      "Faux. Il participe à leur dégradation."
    ]
  },
  {
    "order": 140,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans l’intestin, l’entéropeptidase déclenche une cascade d’activation d’enzymes digestives. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "zymogen-cascade"
    },
    "choices": [
      "Un zymogène est un précurseur enzymatique inactif.",
      "L’entéropeptidase active le trypsinogène en trypsine.",
      "La protéolyse limitée hydrolyse un petit nombre de liaisons peptidiques.",
      "Les enzymes digestives sont toutes synthétisées directement sous forme active."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "L’activation en cascade des zymogènes digestifs permet une régulation par protéolyse limitée.",
    "choiceExplanations": [
      "Vrai. Un zymogène est un précurseur enzymatique inactif.",
      "Vrai. L’entéropeptidase active le trypsinogène en trypsine.",
      "Vrai. La protéolyse limitée hydrolyse un petit nombre de liaisons peptidiques.",
      "Faux. Plusieurs sont synthétisées comme zymogènes."
    ]
  }
];
