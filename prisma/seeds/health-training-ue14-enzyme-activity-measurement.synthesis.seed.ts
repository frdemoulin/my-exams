import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 5;

export const SYNTHESIS_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "121": [
    "la cinétique enzymatique"
  ],
  "122": [
    "les concentrations E, ES et Et"
  ],
  "123": [
    "les phases de la réaction enzymatique"
  ],
  "124": [
    "la détermination de la vitesse initiale"
  ],
  "125": [
    "la loi de Beer-Lambert appliquée à l’enzymologie"
  ],
  "126": [
    "l’unité internationale d’activité enzymatique"
  ],
  "127": [
    "le katal et les conversions"
  ],
  "128": [
    "la concentration d’activité catalytique"
  ],
  "129": [
    "la constante catalytique Kcat"
  ],
  "130": [
    "l’activité spécifique et l’activité molaire spécifique"
  ],
  "131": [
    "les ordres de réaction"
  ],
  "132": [
    "l’équation de Michaelis-Menten"
  ],
  "133": [
    "la saturation enzymatique et Vm"
  ],
  "134": [
    "la signification de Km"
  ],
  "135": [
    "la représentation de Lineweaver-Burk"
  ],
  "136": [
    "l’effet des concentrations de substrat et d’enzyme"
  ],
  "137": [
    "l’effet du pH et de la température"
  ],
  "138": [
    "l’inhibition compétitive"
  ],
  "139": [
    "les inhibitions non compétitive et incompétitive"
  ],
  "140": [
    "l’inhibition mixte et le pourcentage d’inhibition"
  ]
};

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "mesure-de-activite-enzymatique-synthese-connaissances",
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
    "slug": "mesure-de-activite-enzymatique-synthese-raisonnement",
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
    "question": "Dans une question transversale sur la cinétique enzymatique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-kinetics-overview"
    },
    "choices": [
      "Elle étudie les paramètres susceptibles de modifier cette vitesse.",
      "La vitesse peut être définie par la quantité de substrat transformée par unité de temps.",
      "La disparition du substrat ne reflète jamais l’apparition du produit.",
      "La vitesse ne peut être mesurée qu’à partir de la masse de l’enzyme."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La vitesse enzymatique se mesure par la disparition du substrat ou l’apparition du produit au cours du temps.",
    "choiceExplanations": [
      "Vrai. Elle étudie les paramètres susceptibles de modifier cette vitesse.",
      "Vrai. La vitesse peut être définie par la quantité de substrat transformée par unité de temps.",
      "Faux. Les deux évolutions sont liées dans la réaction.",
      "Faux. Elle peut être suivie par le substrat ou le produit."
    ]
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les concentrations E, ES et Et, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-concentrations"
    },
    "choices": [
      "La concentration d’enzyme libre diminue rapidement au début.",
      "Le substrat est initialement dix fois moins concentré que l’enzyme.",
      "Pendant l’état stationnaire, [ES] reste approximativement constante.",
      "Pendant l’état stationnaire, [ES] augmente sans limite."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’excès de substrat permet l’installation rapide d’un état stationnaire du complexe enzyme-substrat.",
    "choiceExplanations": [
      "Vrai. La concentration d’enzyme libre diminue rapidement au début.",
      "Faux. Il est au moins dix fois plus concentré.",
      "Vrai. Pendant l’état stationnaire, [ES] reste approximativement constante.",
      "Faux. Elle reste approximativement constante."
    ]
  },
  {
    "order": 123,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les phases de la réaction enzymatique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-phases"
    },
    "choices": [
      "La phase stationnaire correspond à une absence totale de formation de produit.",
      "La vitesse initiale est mesurée pendant la phase stationnaire.",
      "La phase stationnaire est approximativement linéaire pour la formation du produit.",
      "La phase préstationnaire dure nécessairement plusieurs jours."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La mesure enzymatique exploite la partie initiale linéaire de la réaction, avant le ralentissement.",
    "choiceExplanations": [
      "Faux. Le produit augmente de façon presque linéaire.",
      "Vrai. La vitesse initiale est mesurée pendant la phase stationnaire.",
      "Vrai. La phase stationnaire est approximativement linéaire pour la formation du produit.",
      "Faux. Elle est très brève."
    ]
  },
  {
    "order": 124,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la détermination de la vitesse initiale, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "initial-rate-slope"
    },
    "choices": [
      "La pente ΔA/Δt permet de suivre l’évolution de l’absorbance.",
      "La vitesse initiale correspond à la pente pendant la phase stationnaire.",
      "ΔA/Δt représente l’ordonnée à l’origine.",
      "Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La vitesse initiale est obtenue à partir de la pente d’un signal mesuré en cinétique.",
    "choiceExplanations": [
      "Vrai. La pente ΔA/Δt permet de suivre l’évolution de l’absorbance.",
      "Vrai. La vitesse initiale correspond à la pente pendant la phase stationnaire.",
      "Faux. Il représente la pente d’absorbance.",
      "Vrai. Les temps d’analyse vont de quelques dizaines de secondes à quelques minutes."
    ]
  },
  {
    "order": 125,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un laboratoire suit la formation d’un produit absorbant par spectrophotométrie pendant la phase linéaire. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "beer-lambert-rate"
    },
    "choices": [
      "l correspond à la largeur de la cuve.",
      "ε est le coefficient d’absorption molaire.",
      "ε représente la concentration totale d’enzyme.",
      "La relation est A = [P]/(ε·l) dans la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Beer-Lambert permet de convertir une pente d’absorbance en vitesse de formation du produit.",
    "choiceExplanations": [
      "Vrai. l correspond à la largeur de la cuve.",
      "Vrai. ε est le coefficient d’absorption molaire.",
      "Faux. C’est le coefficient d’absorption.",
      "Faux. La relation est A = ε·l·[P]."
    ]
  },
  {
    "order": 126,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’unité internationale d’activité enzymatique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal"
    },
    "choices": [
      "L’UI reste très utilisée.",
      "Une UI correspond à 1 nmol par heure.",
      "L’unité UI peut aussi être exprimée à partir de la quantité de produit formée.",
      "Une UI correspond à 1 mole de substrat par seconde."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’UI mesure une quantité de substrat transformée par minute dans des conditions définies.",
    "choiceExplanations": [
      "Vrai. L’UI reste très utilisée.",
      "Faux. Elle vaut 1 µmol par minute.",
      "Vrai. L’unité UI peut aussi être exprimée à partir de la quantité de produit formée.",
      "Faux. Cette définition correspond au katal."
    ]
  },
  {
    "order": 127,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le katal et les conversions, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ui-katal-conversion"
    },
    "choices": [
      "Une UI vaut 16,67 kat.",
      "Un katal est une unité cohérente du Système international.",
      "Un katal correspond à 1 µmol par minute.",
      "Un katal correspond à 1 mole de substrat transformée par seconde."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La conversion UI-katal exige de convertir micromoles en moles et minutes en secondes.",
    "choiceExplanations": [
      "Faux. Elle vaut 16,67 nanokatals.",
      "Vrai. Un katal est une unité cohérente du Système international.",
      "Faux. Cette définition correspond à l’UI.",
      "Vrai. Un katal correspond à 1 mole de substrat transformée par seconde."
    ]
  },
  {
    "order": 128,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la concentration d’activité catalytique, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "catalytic-concentration"
    },
    "choices": [
      "La concentration catalytique rapporte l’activité à un volume de solution enzymatique.",
      "Elle peut s’exprimer en kat·L⁻¹.",
      "Elle peut s’exprimer en UI·L⁻¹.",
      "UI·L⁻¹ est une unité de Kcat."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La concentration catalytique exprime l’activité mesurée dans un volume donné de solution.",
    "choiceExplanations": [
      "Vrai. La concentration catalytique rapporte l’activité à un volume de solution enzymatique.",
      "Vrai. Elle peut s’exprimer en kat·L⁻¹.",
      "Vrai. Elle peut s’exprimer en UI·L⁻¹.",
      "Faux. C’est une unité de concentration catalytique."
    ]
  },
  {
    "order": 129,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la constante catalytique Kcat, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "kcat-turnover"
    },
    "choices": [
      "Kcat s’exprime en mol·L⁻¹.",
      "Kcat s’exprime en s⁻¹.",
      "L’anhydrase carbonique est donnée à environ 10⁶ s⁻¹.",
      "La chymotrypsine a un Kcat supérieur à celui de l’anhydrase carbonique dans les exemples."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Kcat mesure le nombre de cycles catalytiques réalisés par enzyme et par seconde à saturation.",
    "choiceExplanations": [
      "Faux. Elle s’exprime en s⁻¹.",
      "Vrai. Kcat s’exprime en s⁻¹.",
      "Vrai. L’anhydrase carbonique est donnée à environ 10⁶ s⁻¹.",
      "Faux. Son Kcat est bien plus faible."
    ]
  },
  {
    "order": 130,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Au cours d’une purification, un laboratoire compare l’activité par milligramme de protéines entre plusieurs fractions. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "specific-activities"
    },
    "choices": [
      "L’activité molaire spécifique rapporte l’activité à la quantité de matière d’enzyme.",
      "L’activité molaire spécifique s’exprime uniquement en UI·L⁻¹.",
      "UI·mg⁻¹ est une unité de concentration catalytique.",
      "L’activité spécifique rapporte l’activité à la masse d’enzyme."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les activités spécifique et molaire normalisent l’activité par la masse ou la quantité de matière d’enzyme.",
    "choiceExplanations": [
      "Vrai. L’activité molaire spécifique rapporte l’activité à la quantité de matière d’enzyme.",
      "Faux. Elle se rapporte à une mole d’enzyme.",
      "Faux. C’est une unité d’activité spécifique.",
      "Vrai. L’activité spécifique rapporte l’activité à la masse d’enzyme."
    ]
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les ordres de réaction, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "reaction-orders"
    },
    "choices": [
      "Le plateau d’une enzyme saturée correspond à un comportement d’ordre 0 vis-à-vis du substrat.",
      "Une réaction d’ordre 1 vérifie v = k[A][B].",
      "Une réaction d’ordre 0 a une vitesse proportionnelle à [A].",
      "Pour une réaction d’ordre 2 à deux substrats, v = k[A][B]."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "L’ordre exprime la dépendance de la vitesse vis-à-vis des concentrations des réactifs.",
    "choiceExplanations": [
      "Vrai. Le plateau d’une enzyme saturée correspond à un comportement d’ordre 0 vis-à-vis du substrat.",
      "Faux. Cette relation correspond à un cas d’ordre 2.",
      "Faux. Sa vitesse est indépendante de [A].",
      "Vrai. Pour une réaction d’ordre 2 à deux substrats, v = k[A][B]."
    ]
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’équation de Michaelis-Menten, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-equation"
    },
    "choices": [
      "Vm = Kcat·[E]t.",
      "La relation est établie dans les conditions initiales avec [P] négligeable.",
      "L’équation est v₀ = Km·[S]/(Vm + [S]).",
      "L’équation est v₀ = Vm·[S]/(Km + [S])."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "L’équation relie la vitesse initiale à la concentration de substrat, à Km et à Vm.",
    "choiceExplanations": [
      "Vrai. Vm = Kcat·[E]t.",
      "Vrai. La relation est établie dans les conditions initiales avec [P] négligeable.",
      "Faux. Km et Vm sont inversés dans cette proposition.",
      "Vrai. L’équation est v₀ = Vm·[S]/(Km + [S])."
    ]
  },
  {
    "order": 133,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la saturation enzymatique et Vm, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "michaelis-curve"
    },
    "choices": [
      "À forte concentration de substrat, la plupart des sites actifs sont occupés.",
      "Vm diminue obligatoirement lorsque [E]t augmente.",
      "Le plateau signifie que la réaction s’est arrêtée dès le début.",
      "Augmenter encore [S] à saturation modifie peu la vitesse."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La vitesse maximale traduit la capacité catalytique totale de la quantité d’enzyme présente.",
    "choiceExplanations": [
      "Vrai. À forte concentration de substrat, la plupart des sites actifs sont occupés.",
      "Faux. Elle est proportionnelle à [E]t.",
      "Faux. Il traduit la saturation de l’enzyme.",
      "Vrai. Augmenter encore [S] à saturation modifie peu la vitesse."
    ]
  },
  {
    "order": 134,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la signification de Km, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "km-affinity"
    },
    "choices": [
      "Km est une vitesse exprimée en µmol·min⁻¹.",
      "Km est caractéristique d’un couple enzyme-substrat dans des conditions données.",
      "Lorsque [S] = Km, v₀ = Vm/2.",
      "Lorsque [S] = Km, v₀ = Vm."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Km est la concentration de substrat donnant la demi-vitesse maximale et reflète inversement l’affinité.",
    "choiceExplanations": [
      "Faux. Km est une concentration.",
      "Vrai. Km est caractéristique d’un couple enzyme-substrat dans des conditions données.",
      "Vrai. Lorsque [S] = Km, v₀ = Vm/2.",
      "Faux. La vitesse vaut la moitié de Vm."
    ]
  },
  {
    "order": 135,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la représentation de Lineweaver-Burk, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "lineweaver-burk"
    },
    "choices": [
      "L’ordonnée à l’origine vaut Vm.",
      "Elle représente v₀ en fonction de [S] sur une hyperbole.",
      "La pente vaut Km/Vm.",
      "L’ordonnée à l’origine vaut 1/Vm."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La double inversion transforme la courbe de Michaelis en droite et facilite l’estimation de Km et Vm.",
    "choiceExplanations": [
      "Faux. Elle vaut 1/Vm.",
      "Faux. Cela correspond à la représentation de Michaelis.",
      "Vrai. La pente vaut Km/Vm.",
      "Vrai. L’ordonnée à l’origine vaut 1/Vm."
    ]
  },
  {
    "order": 136,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’effet des concentrations de substrat et d’enzyme, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "substrate-enzyme-effects"
    },
    "choices": [
      "Une plus grande concentration d’enzyme permet d’atteindre plus rapidement le même équilibre.",
      "Augmenter la concentration d’enzyme ne modifie pas l’équilibre final de la réaction.",
      "Augmenter [E] diminue proportionnellement v₀.",
      "À conditions identiques, augmenter la concentration d’enzyme augmente la vitesse initiale."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Substrat et enzyme modifient la vitesse, mais l’enzyme ne déplace pas l’équilibre final.",
    "choiceExplanations": [
      "Vrai. Une plus grande concentration d’enzyme permet d’atteindre plus rapidement le même équilibre.",
      "Vrai. Augmenter la concentration d’enzyme ne modifie pas l’équilibre final de la réaction.",
      "Faux. Cela augmente v₀.",
      "Vrai. À conditions identiques, augmenter la concentration d’enzyme augmente la vitesse initiale."
    ]
  },
  {
    "order": 137,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une amplification PCR utilise une polymérase provenant d’une bactérie thermophile. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ph-temperature-effects"
    },
    "choices": [
      "La Taq polymérase est adaptée aux températures élevées et utilisée en PCR.",
      "Toutes les enzymes ont un pH optimal exactement égal à 7,2.",
      "La température n’a aucun effet sur l’activité enzymatique.",
      "Le pH optimal varie selon l’enzyme."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "pH et température modifient l’ionisation, la conformation et donc l’activité des enzymes.",
    "choiceExplanations": [
      "Vrai. La Taq polymérase est adaptée aux températures élevées et utilisée en PCR.",
      "Faux. Le pH optimal varie.",
      "Faux. Elle modifie la vitesse et peut provoquer une dénaturation.",
      "Vrai. Le pH optimal varie selon l’enzyme."
    ]
  },
  {
    "order": 138,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un inhibiteur thérapeutique entre en compétition avec le substrat pour le site actif. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "competitive-inhibition"
    },
    "choices": [
      "Il se fixe nécessairement sur un site totalement distinct du substrat.",
      "L’inhibiteur compétitif se fixe sur l’enzyme libre.",
      "Il diminue le Km apparent.",
      "Le Km apparent augmente."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La compétition réduit l’affinité apparente sans modifier la vitesse maximale accessible à forte concentration de substrat.",
    "choiceExplanations": [
      "Faux. Il dispute le site actif.",
      "Vrai. L’inhibiteur compétitif se fixe sur l’enzyme libre.",
      "Faux. Il l’augmente.",
      "Vrai. Le Km apparent augmente."
    ]
  },
  {
    "order": 139,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les inhibitions non compétitive et incompétitive, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "noncompetitive-uncompetitive"
    },
    "choices": [
      "Dans l’inhibition incompétitive, Km augmente et Vmax ne change pas.",
      "Dans l’inhibition incompétitive, Km et Vmax diminuent dans les mêmes proportions.",
      "L’inhibition non compétitive augmente Vmax.",
      "L’inhibiteur non compétitif se fixe sur E et ES avec la même constante d’inhibition."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les inhibitions non compétitive et incompétitive se distinguent par les formes enzymatiques reconnues et leurs effets cinétiques.",
    "choiceExplanations": [
      "Faux. Les deux paramètres diminuent proportionnellement.",
      "Vrai. Dans l’inhibition incompétitive, Km et Vmax diminuent dans les mêmes proportions.",
      "Faux. Elle la diminue.",
      "Vrai. L’inhibiteur non compétitif se fixe sur E et ES avec la même constante d’inhibition."
    ]
  },
  {
    "order": 140,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une activité passe de 100 à 40 unités en présence d’un inhibiteur. Le pourcentage d’inhibition est de 60 %. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "mixed-inhibition-percent"
    },
    "choices": [
      "Dans l’inhibition mixte, Km et Vmax sont modifiés indépendamment.",
      "Le pourcentage d’inhibition peut se calculer par (v₀ - v₀app)/v₀ × 100.",
      "v₀app correspond à la vitesse initiale mesurée en présence d’inhibiteur.",
      "Une inhibition de 100 % signifie que v₀app = v₀."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "L’inhibition mixte modifie les deux paramètres selon les affinités; le pourcentage quantifie la perte de vitesse.",
    "choiceExplanations": [
      "Vrai. Dans l’inhibition mixte, Km et Vmax sont modifiés indépendamment.",
      "Vrai. Le pourcentage d’inhibition peut se calculer par (v₀ - v₀app)/v₀ × 100.",
      "Vrai. v₀app correspond à la vitesse initiale mesurée en présence d’inhibiteur.",
      "Faux. Elle signifie que la vitesse apparente est nulle."
    ]
  }
];
