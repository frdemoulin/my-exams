import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "1": [
    "Définition des lipides"
  ],
  "2": [
    "Classification générale des lipides"
  ],
  "3": [
    "Objectifs du chapitre"
  ],
  "4": [
    "Définition d’un acide gras"
  ],
  "5": [
    "Caractère amphiphile"
  ],
  "6": [
    "Critères de classification"
  ],
  "7": [
    "Saturation et désaturation"
  ],
  "8": [
    "Numérotation officielle"
  ],
  "9": [
    "Nomenclature traditionnelle"
  ],
  "10": [
    "Représentation topologique et formule"
  ],
  "11": [
    "Définition des lipides"
  ],
  "12": [
    "Classification générale des lipides"
  ],
  "13": [
    "Objectifs du chapitre"
  ],
  "14": [
    "Définition d’un acide gras"
  ],
  "15": [
    "Caractère amphiphile"
  ],
  "16": [
    "Critères de classification"
  ],
  "17": [
    "Saturation et désaturation"
  ],
  "18": [
    "Numérotation officielle"
  ],
  "19": [
    "Nomenclature traditionnelle"
  ],
  "20": [
    "Représentation topologique et formule"
  ],
  "21": [
    "Définition des lipides"
  ],
  "22": [
    "Classification générale des lipides"
  ],
  "23": [
    "Objectifs du chapitre"
  ],
  "24": [
    "Définition d’un acide gras"
  ],
  "25": [
    "Caractère amphiphile"
  ],
  "26": [
    "Critères de classification"
  ],
  "27": [
    "Saturation et désaturation"
  ],
  "28": [
    "Numérotation officielle"
  ],
  "29": [
    "Nomenclature traditionnelle"
  ],
  "30": [
    "Représentation topologique et formule"
  ]
};

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "classification-definition-acides-gras",
    "title": "Classification et définition des acides gras",
    "description": "Dix questions ciblées sur cette partie du chapitre.",
    "stage": "DISCOVER",
    "sectionOrder": 1,
    "questionOrders": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "order": 2,
    "slug": "structure-poles-numerotation",
    "title": "Structure, pôles et numérotation",
    "description": "Dix questions ciblées sur cette partie du chapitre.",
    "stage": "PRACTICE",
    "sectionOrder": 1,
    "questionOrders": [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "order": 3,
    "slug": "raisonnement-structural",
    "title": "Raisonnement structural",
    "description": "Dix questions ciblées sur cette partie du chapitre.",
    "stage": "MASTER",
    "sectionOrder": 1,
    "items": [
      {
        "type": "GROUP",
        "title": "Analyse 1",
        "sharedStatement": "Les questions suivantes partagent un même axe de raisonnement.",
        "questionOrders": [
          21,
          22,
          23
        ]
      },
      {
        "type": "GROUP",
        "title": "Analyse 2",
        "sharedStatement": "Les questions suivantes croisent plusieurs notions de la section.",
        "questionOrders": [
          24,
          25,
          26
        ]
      },
      {
        "type": "GROUP",
        "title": "Analyse 3",
        "sharedStatement": "Les questions suivantes concluent le travail transversal.",
        "questionOrders": [
          27,
          28,
          29,
          30
        ]
      }
    ]
  }
];

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de définition des lipides :",
    "choices": [
      "Les lipides forment un groupe hétérogène de composés.",
      "La solubilité complète dans l’eau définit les lipides.",
      "Les graisses et les huiles appartiennent aux lipides.",
      "Les stéroïdes sont présentés comme des glucides."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les lipides sont un groupe hétérogène caractérisé ici par l’insolubilité dans l’eau.",
    "choiceExplanations": [
      "Vrai. La fiche insiste sur leur hétérogénéité.",
      "Faux. Faux : la fiche retient l’insolubilité.",
      "Vrai. Elles sont citées dans l’introduction.",
      "Faux. Faux : ils sont rattachés aux lipides."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lipid-classification"
    }
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de classification générale des lipides :",
    "choices": [
      "Les eicosanoïdes sont rattachés aux protéines.",
      "Les sphingolipides sont classés parmi les lipides complexes.",
      "Les glycérides sont classés comme acides nucléiques.",
      "Les glycérides sont classés parmi les lipides simples."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le schéma distingue lipides simples, lipides complexes et autres familles.",
    "choiceExplanations": [
      "Faux. Faux : ils dérivent d’acides gras.",
      "Vrai. Ils figurent dans cette branche.",
      "Faux. Faux : ils appartiennent aux lipides simples.",
      "Vrai. Ils figurent dans cette branche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lipid-classification"
    }
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de objectifs du chapitre :",
    "choices": [
      "Ces bases préparent les aspects métaboliques et physicochimiques.",
      "Le chapitre demande de mémoriser toutes les voies métaboliques détaillées.",
      "Connaître les principales propriétés des lipides est un objectif.",
      "La structure des lipides n’a aucun lien avec leurs propriétés."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le chapitre vise structure, nomenclature, propriétés et intérêt clinique ou biologique.",
    "choiceExplanations": [
      "Vrai. La fiche le précise.",
      "Faux. Faux : il pose les bases structurales et physicochimiques.",
      "Vrai. Cet objectif est explicitement annoncé.",
      "Faux. Faux : le chapitre établit ce lien."
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de définition d’un acide gras :",
    "choices": [
      "Un acide gras ne contient jamais de carbone.",
      "Le groupement COOH constitue la fonction acide.",
      "La chaîne R disparaît lors de la définition de l’acide gras.",
      "Un acide gras est un acide carboxylique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Un acide gras associe une fonction carboxylique à une longue chaîne carbonée.",
    "choiceExplanations": [
      "Faux. Faux : il possède une chaîne carbonée.",
      "Vrai. Il s’agit de la fonction carboxylique.",
      "Faux. Faux : elle est une partie structurale majeure.",
      "Vrai. La fonction COOH le définit."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-amphiphile"
    }
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de caractère amphiphile :",
    "choices": [
      "Le pôle hydrophobe peut être représenté par une ligne.",
      "La chaîne carbonée constitue le pôle le plus hydrophile.",
      "La chaîne carbonée correspond au pôle hydrophobe.",
      "Un acide gras possède deux chaînes hydrophiles."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La tête carboxylique est hydrophile alors que la chaîne carbonée est hydrophobe.",
    "choiceExplanations": [
      "Vrai. Cette convention graphique est donnée.",
      "Faux. Faux : elle est hydrophobe.",
      "Vrai. Elle est dite non mouillable.",
      "Faux. Faux : il possède une tête hydrophile et une chaîne hydrophobe."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-amphiphile"
    }
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de critères de classification :",
    "choices": [
      "Seul le nombre d’atomes d’oxygène permet la classification.",
      "Le nombre de doubles liaisons est pris en compte.",
      "Tous les acides gras appartiennent à une seule classe de longueur.",
      "Le nombre d’atomes de carbone est un critère de classification."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les acides gras sont classés selon leur longueur de chaîne et leur désaturation.",
    "choiceExplanations": [
      "Faux. Faux : longueur et doubles liaisons sont retenues.",
      "Vrai. Il distingue mono- et polydésaturés.",
      "Faux. Faux : quatre classes sont distinguées.",
      "Vrai. Il définit courte, moyenne, longue et très longue chaîne."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de saturation et désaturation :",
    "choices": [
      "Un polydésaturé possède plusieurs doubles liaisons.",
      "Une double liaison rend l’acide gras plus saturé.",
      "Un acide gras désaturé possède une ou plusieurs doubles liaisons.",
      "Un polydésaturé est dépourvu de double liaison."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’absence ou la présence de doubles liaisons distingue saturés et désaturés.",
    "choiceExplanations": [
      "Vrai. Poly- signifie plusieurs.",
      "Faux. Faux : elle le désature.",
      "Vrai. C’est la définition donnée.",
      "Faux. Faux : il en possède plusieurs."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cis-trans-double-bond"
    }
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de numérotation officielle :",
    "choices": [
      "Le carbone terminal méthyle est toujours le carbone 1.",
      "Les carbones suivants sont numérotés le long de la chaîne.",
      "Tous les carbones portent le numéro 1.",
      "Le dernier numéro dépend du nombre total de carbones."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La numérotation officielle part du carbone carboxylique, le plus oxydé.",
    "choiceExplanations": [
      "Faux. Faux : le C1 est carboxylique.",
      "Vrai. La numérotation se poursuit successivement.",
      "Faux. Faux : ils sont numérotés successivement.",
      "Vrai. Il varie avec la longueur de chaîne."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "carbon-numbering"
    }
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de nomenclature traditionnelle :",
    "choices": [
      "Le carbone ω conserve ce nom quelle que soit la longueur de la chaîne.",
      "Le carbone terminal n’a jamais de nom traditionnel.",
      "Le carbone α correspond au carbone 2 officiel.",
      "Le carbone ω est toujours le carbone 2."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La nomenclature grecque utilise les repères α, β, γ et ω.",
    "choiceExplanations": [
      "Vrai. C’est une convention.",
      "Faux. Faux : il est appelé ω.",
      "Vrai. Il est adjacent au COOH.",
      "Faux. Faux : ω est le dernier carbone."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "carbon-numbering"
    }
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de représentation topologique et formule :",
    "choices": [
      "Chaque sommet représente un atome d’oxygène.",
      "Les liaisons C–H ne sont généralement pas représentées.",
      "Le symbole 18:1 signifie 18 doubles liaisons et un carbone.",
      "Le symbole C:DL indique carbones puis doubles liaisons."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les formules topologiques rendent implicites carbones et hydrogènes liés au carbone.",
    "choiceExplanations": [
      "Faux. Faux : il représente un carbone.",
      "Vrai. Elles sont implicites.",
      "Faux. Faux : l’ordre est inversé.",
      "Vrai. C’est la convention utilisée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant définition des lipides :",
    "choices": [
      "Les cires et les stéroïdes sont également cités.",
      "Les huiles sont exclues de la famille des lipides.",
      "Une propriété physique commune peut réunir des structures chimiques différentes.",
      "Leur propriété physique commune est l’insolubilité dans l’eau."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les lipides sont un groupe hétérogène caractérisé ici par l’insolubilité dans l’eau.",
    "choiceExplanations": [
      "Vrai. Ils figurent parmi les lipides ou substances apparentées.",
      "Faux. Faux : elles sont explicitement incluses.",
      "Vrai. Cela explique la notion de groupe hétérogène.",
      "Vrai. C’est la propriété commune retenue."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lipid-classification"
    }
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant classification générale des lipides :",
    "choices": [
      "Les acides gras sont exclus des lipides.",
      "Les acides gras sont classés parmi les lipides simples.",
      "Les phospholipides sont classés parmi les lipides complexes.",
      "Les eicosanoïdes sont présentés comme des dérivés d’acides gras."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le schéma distingue lipides simples, lipides complexes et autres familles.",
    "choiceExplanations": [
      "Faux. Faux : ils sont une famille de lipides simples.",
      "Vrai. Ils figurent dans cette branche.",
      "Vrai. Ils figurent dans cette branche.",
      "Vrai. Le schéma les rattache aux acides gras."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lipid-classification"
    }
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant objectifs du chapitre :",
    "choices": [
      "Connaître la nomenclature est un objectif.",
      "Connaître des lipides d’intérêt clinique et biologique est un objectif.",
      "Comprendre la structure des principaux lipides est un objectif.",
      "Le cours porte uniquement sur les protéines."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le chapitre vise structure, nomenclature, propriétés et intérêt clinique ou biologique.",
    "choiceExplanations": [
      "Vrai. Cet objectif est explicitement annoncé.",
      "Vrai. Cet objectif est explicitement annoncé.",
      "Vrai. Cet objectif est explicitement annoncé.",
      "Faux. Faux : il porte sur les lipides."
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant définition d’un acide gras :",
    "choices": [
      "La chaîne R contribue au caractère « gras ».",
      "Il possède une longue chaîne carbonée.",
      "La fonction caractéristique d’un acide gras est une amine.",
      "Sa formule générique peut s’écrire R–COOH."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Un acide gras associe une fonction carboxylique à une longue chaîne carbonée.",
    "choiceExplanations": [
      "Vrai. La fiche relie la chaîne à l’insolubilité.",
      "Vrai. La chaîne R est une caractéristique essentielle.",
      "Faux. Faux : c’est une fonction carboxylique.",
      "Vrai. C’est la formule donnée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-amphiphile"
    }
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant caractère amphiphile :",
    "choices": [
      "La molécule présente deux régions de comportements opposés vis-à-vis de l’eau.",
      "Le groupement carboxylique est la partie non mouillable.",
      "Le pôle hydrophile peut être représenté par un cercle.",
      "La fonction acide correspond au pôle hydrophile."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La tête carboxylique est hydrophile alors que la chaîne carbonée est hydrophobe.",
    "choiceExplanations": [
      "Vrai. C’est le principe du schéma.",
      "Faux. Faux : il est mouillable.",
      "Vrai. Cette convention graphique est donnée.",
      "Vrai. Elle est dite mouillable."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-amphiphile"
    }
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant critères de classification :",
    "choices": [
      "La présence d’une fonction amine distingue les acides gras saturés.",
      "Longueur et désaturation sont deux critères distincts.",
      "La présence de doubles liaisons est un critère de classification.",
      "Une chaîne peut être courte, moyenne, longue ou très longue."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les acides gras sont classés selon leur longueur de chaîne et leur désaturation.",
    "choiceExplanations": [
      "Faux. Faux : la saturation dépend des doubles liaisons.",
      "Vrai. Un même nombre de carbones peut exister avec différents degrés de désaturation.",
      "Vrai. Elle distingue saturés et désaturés.",
      "Vrai. Ces quatre classes sont données."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant saturation et désaturation :",
    "choices": [
      "Un acide gras saturé ne possède pas de double liaison carbonée.",
      "Un monodésaturé possède une double liaison.",
      "Le degré de désaturation augmente avec le nombre de doubles liaisons.",
      "La saturation dépend uniquement de la longueur de chaîne."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "L’absence ou la présence de doubles liaisons distingue saturés et désaturés.",
    "choiceExplanations": [
      "Vrai. C’est la définition donnée.",
      "Vrai. Mono- signifie une.",
      "Vrai. Il dépend de leur nombre.",
      "Faux. Faux : elle dépend des doubles liaisons."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cis-trans-double-bond"
    }
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant numérotation officielle :",
    "choices": [
      "Le carbone 2 est voisin du COOH.",
      "Le carbone de la fonction COOH est le carbone 1.",
      "Le carbone 2 se situe à l’extrémité méthyle.",
      "La numérotation part du carbone le plus oxydé."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La numérotation officielle part du carbone carboxylique, le plus oxydé.",
    "choiceExplanations": [
      "Vrai. Il suit immédiatement le C1.",
      "Vrai. La numérotation officielle commence par lui.",
      "Faux. Faux : il est adjacent au COOH.",
      "Vrai. C’est le principe rappelé."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "carbon-numbering"
    }
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant nomenclature traditionnelle :",
    "choices": [
      "Après α viennent notamment β puis γ.",
      "Le carbone du COOH est appelé carbone α.",
      "Le carbone ω est le dernier carbone de la chaîne.",
      "Les nomenclatures officielle et traditionnelle décrivent la même chaîne."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La nomenclature grecque utilise les repères α, β, γ et ω.",
    "choiceExplanations": [
      "Vrai. Les lettres suivent la chaîne.",
      "Faux. Faux : α est le carbone suivant.",
      "Vrai. Il correspond à l’extrémité méthyle.",
      "Vrai. Elles utilisent des repères différents."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "carbon-numbering"
    }
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant représentation topologique et formule :",
    "choices": [
      "Chaque liaison C–H doit être dessinée dans une formule topologique.",
      "La formule R–COOH sépare chaîne carbonée et fonction acide.",
      "Chaque sommet d’une ligne brisée représente un carbone.",
      "La fonction COOH peut être écrite explicitement."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les formules topologiques rendent implicites carbones et hydrogènes liés au carbone.",
    "choiceExplanations": [
      "Faux. Faux : elles sont omises.",
      "Vrai. R et COOH ont des rôles distincts.",
      "Vrai. C’est la convention rappelée.",
      "Vrai. La fonction caractéristique reste visible."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à définition des lipides :",
    "choices": [
      "Un lipide est nécessairement une protéine.",
      "La solubilité complète dans l’eau définit les lipides.",
      "Les huiles sont exclues de la famille des lipides.",
      "Une propriété physique commune peut réunir des structures chimiques différentes."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "Les lipides sont un groupe hétérogène caractérisé ici par l’insolubilité dans l’eau.",
    "choiceExplanations": [
      "Faux. Faux : aucune telle définition n’est donnée.",
      "Faux. Faux : la fiche retient l’insolubilité.",
      "Faux. Faux : elles sont explicitement incluses.",
      "Vrai. Cela explique la notion de groupe hétérogène."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lipid-classification"
    }
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à classification générale des lipides :",
    "choices": [
      "Les eicosanoïdes sont rattachés aux protéines.",
      "Les acides gras sont exclus des lipides.",
      "Les acides gras sont classés parmi les lipides simples.",
      "Les phospholipides sont des lipides simples."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "Le schéma distingue lipides simples, lipides complexes et autres familles.",
    "choiceExplanations": [
      "Faux. Faux : ils dérivent d’acides gras.",
      "Faux. Faux : ils sont une famille de lipides simples.",
      "Vrai. Ils figurent dans cette branche.",
      "Faux. Faux : ils sont classés complexes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lipid-classification"
    }
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à objectifs du chapitre :",
    "choices": [
      "Le cours porte uniquement sur les protéines.",
      "Connaître la nomenclature est un objectif.",
      "La nomenclature est exclue des objectifs.",
      "La structure des lipides n’a aucun lien avec leurs propriétés."
    ],
    "correctChoiceIndexes": [
      1
    ],
    "explanation": "Le chapitre vise structure, nomenclature, propriétés et intérêt clinique ou biologique.",
    "choiceExplanations": [
      "Faux. Faux : il porte sur les lipides.",
      "Vrai. Cet objectif est explicitement annoncé.",
      "Faux. Faux : elle est explicitement visée.",
      "Faux. Faux : le chapitre établit ce lien."
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à définition d’un acide gras :",
    "choices": [
      "Sa formule générique peut s’écrire R–COOH.",
      "La formule générique d’un acide gras est R–NH₂.",
      "La chaîne R disparaît lors de la définition de l’acide gras.",
      "La fonction caractéristique d’un acide gras est une amine."
    ],
    "correctChoiceIndexes": [
      0
    ],
    "explanation": "Un acide gras associe une fonction carboxylique à une longue chaîne carbonée.",
    "choiceExplanations": [
      "Vrai. C’est la formule donnée.",
      "Faux. Faux : la formule est R–COOH.",
      "Faux. Faux : elle est une partie structurale majeure.",
      "Faux. Faux : c’est une fonction carboxylique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-amphiphile"
    }
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à caractère amphiphile :",
    "choices": [
      "La représentation par un cercle correspond obligatoirement au carbone oméga.",
      "La chaîne carbonée constitue le pôle le plus hydrophile.",
      "Le groupement carboxylique est la partie non mouillable.",
      "Le pôle hydrophile peut être représenté par un cercle."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "La tête carboxylique est hydrophile alors que la chaîne carbonée est hydrophobe.",
    "choiceExplanations": [
      "Faux. Faux : elle schématise la tête acide.",
      "Faux. Faux : elle est hydrophobe.",
      "Faux. Faux : il est mouillable.",
      "Vrai. Cette convention graphique est donnée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-amphiphile"
    }
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à critères de classification :",
    "choices": [
      "Seul le nombre d’atomes d’oxygène permet la classification.",
      "La présence d’une fonction amine distingue les acides gras saturés.",
      "Longueur et désaturation sont deux critères distincts.",
      "Le nombre de carbones n’intervient jamais."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "Les acides gras sont classés selon leur longueur de chaîne et leur désaturation.",
    "choiceExplanations": [
      "Faux. Faux : longueur et doubles liaisons sont retenues.",
      "Faux. Faux : la saturation dépend des doubles liaisons.",
      "Vrai. Un même nombre de carbones peut exister avec différents degrés de désaturation.",
      "Faux. Faux : c’est le premier critère."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 27,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à saturation et désaturation :",
    "choices": [
      "La saturation dépend uniquement de la longueur de chaîne.",
      "Un acide gras saturé ne possède pas de double liaison carbonée.",
      "Un acide gras saturé possède obligatoirement trois doubles liaisons.",
      "Un polydésaturé est dépourvu de double liaison."
    ],
    "correctChoiceIndexes": [
      1
    ],
    "explanation": "L’absence ou la présence de doubles liaisons distingue saturés et désaturés.",
    "choiceExplanations": [
      "Faux. Faux : elle dépend des doubles liaisons.",
      "Vrai. C’est la définition donnée.",
      "Faux. Faux : il n’en possède aucune.",
      "Faux. Faux : il en possède plusieurs."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cis-trans-double-bond"
    }
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à numérotation officielle :",
    "choices": [
      "La numérotation part du carbone le plus oxydé.",
      "La numérotation officielle part du carbone oméga.",
      "Tous les carbones portent le numéro 1.",
      "Le carbone 2 se situe à l’extrémité méthyle."
    ],
    "correctChoiceIndexes": [
      0
    ],
    "explanation": "La numérotation officielle part du carbone carboxylique, le plus oxydé.",
    "choiceExplanations": [
      "Vrai. C’est le principe rappelé.",
      "Faux. Faux : elle part du COOH.",
      "Faux. Faux : ils sont numérotés successivement.",
      "Faux. Faux : il est adjacent au COOH."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "carbon-numbering"
    }
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à nomenclature traditionnelle :",
    "choices": [
      "La lettre β précède α en partant du COOH.",
      "Le carbone terminal n’a jamais de nom traditionnel.",
      "Le carbone du COOH est appelé carbone α.",
      "Le carbone ω est le dernier carbone de la chaîne."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "La nomenclature grecque utilise les repères α, β, γ et ω.",
    "choiceExplanations": [
      "Faux. Faux : α précède β.",
      "Faux. Faux : il est appelé ω.",
      "Faux. Faux : α est le carbone suivant.",
      "Vrai. Il correspond à l’extrémité méthyle."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "carbon-numbering"
    }
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à représentation topologique et formule :",
    "choices": [
      "Chaque sommet représente un atome d’oxygène.",
      "Chaque liaison C–H doit être dessinée dans une formule topologique.",
      "La formule R–COOH sépare chaîne carbonée et fonction acide.",
      "La fonction COOH est absente de tous les acides gras."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "Les formules topologiques rendent implicites carbones et hydrogènes liés au carbone.",
    "choiceExplanations": [
      "Faux. Faux : il représente un carbone.",
      "Faux. Faux : elles sont omises.",
      "Vrai. R et COOH ont des rôles distincts.",
      "Faux. Faux : elle les définit."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  }
];
