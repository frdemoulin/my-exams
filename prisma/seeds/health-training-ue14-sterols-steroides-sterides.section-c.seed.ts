import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "61": [
    "l’origine des hormones stéroïdiennes"
  ],
  "62": [
    "la lipophilie des hormones stéroïdiennes"
  ],
  "63": [
    "le noyau estrane"
  ],
  "64": [
    "le noyau androstane"
  ],
  "65": [
    "le noyau prégnane"
  ],
  "66": [
    "les glandes corticosurrénales"
  ],
  "67": [
    "les gonades"
  ],
  "68": [
    "les minéralocorticoïdes"
  ],
  "69": [
    "les glucocorticoïdes"
  ],
  "70": [
    "les stéroïdes sexuels"
  ],
  "71": [
    "l’origine des hormones stéroïdiennes"
  ],
  "72": [
    "la lipophilie des hormones stéroïdiennes"
  ],
  "73": [
    "le noyau estrane"
  ],
  "74": [
    "le noyau androstane"
  ],
  "75": [
    "le noyau prégnane"
  ],
  "76": [
    "les glandes corticosurrénales"
  ],
  "77": [
    "les gonades"
  ],
  "78": [
    "les minéralocorticoïdes"
  ],
  "79": [
    "les glucocorticoïdes"
  ],
  "80": [
    "les stéroïdes sexuels"
  ],
  "81": [
    "l’origine des hormones stéroïdiennes"
  ],
  "82": [
    "la lipophilie des hormones stéroïdiennes"
  ],
  "83": [
    "le noyau estrane"
  ],
  "84": [
    "le noyau androstane"
  ],
  "85": [
    "le noyau prégnane"
  ],
  "86": [
    "les glandes corticosurrénales"
  ],
  "87": [
    "les gonades"
  ],
  "88": [
    "les minéralocorticoïdes"
  ],
  "89": [
    "les glucocorticoïdes"
  ],
  "90": [
    "les stéroïdes sexuels"
  ]
};

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "steroid-hormones-general-fondamentaux",
    "title": "Origine et lipophilie",
    "description": "Acquérir les notions fondamentales de la section.",
    "stage": "DISCOVER",
    "sectionOrder": 3,
    "questionOrders": [
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70
    ]
  },
  {
    "order": 2,
    "slug": "steroid-hormones-general-applications",
    "title": "Noyaux estrane, androstane et prégnane",
    "description": "Appliquer et comparer les notions de la section.",
    "stage": "PRACTICE",
    "sectionOrder": 3,
    "questionOrders": [
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80
    ]
  },
  {
    "order": 3,
    "slug": "steroid-hormones-general-raisonnement",
    "title": "Raisonnement sur les familles hormonales",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 3,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères structuraux",
        "sharedStatement": "Les questions suivantes mobilisent les principaux repères structuraux de la section.",
        "questionOrders": [
          81,
          82,
          83
        ]
      },
      {
        "type": "GROUP",
        "title": "Propriétés et fonctions",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          84,
          85,
          86
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques et médicales",
        "sharedStatement": "Les questions suivantes replacent les notions dans leur contexte biologique ou médical.",
        "questionOrders": [
          87,
          88,
          89,
          90
        ]
      }
    ]
  }
];

export const SECTION_C_QUESTIONS: SeedQuestion[] = [
  {
    "order": 61,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’origine des hormones stéroïdiennes :",
    "choices": [
      "Le placenta peut produire certaines hormones sexuelles.",
      "Elles dérivent du cholestérol.",
      "Elles sont synthétisées dans les gonades.",
      "Elles dérivent toutes d’acides aminés aromatiques."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le cholestérol est le précurseur commun des hormones stéroïdiennes.",
    "choiceExplanations": [
      "Vrai. Le placenta peut produire certaines hormones sexuelles.",
      "Vrai. Elles dérivent du cholestérol.",
      "Vrai. Elles sont synthétisées dans les gonades.",
      "Faux. Elles dérivent du cholestérol."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la lipophilie des hormones stéroïdiennes :",
    "choices": [
      "Elles agissent uniquement sur des récepteurs de surface.",
      "Elles peuvent traverser les membranes.",
      "Elles dérivent d’un noyau hydrocarboné.",
      "Elles sont lipophiles."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La structure stéroïdienne confère lipophilie et action intracellulaire.",
    "choiceExplanations": [
      "Faux. Elles peuvent agir via des récepteurs intracellulaires.",
      "Vrai. Elles peuvent traverser les membranes.",
      "Vrai. Elles dérivent d’un noyau hydrocarboné.",
      "Vrai. Elles sont lipophiles."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le noyau estrane :",
    "choices": [
      "Il comporte 18 carbones.",
      "Il porte un méthyle en C13β dans la fiche.",
      "Il comporte 21 carbones.",
      "Œstradiol, œstrone et œstriol appartiennent à cette famille."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le noyau estrane C18 caractérise les œstrogènes.",
    "choiceExplanations": [
      "Vrai. Il comporte 18 carbones.",
      "Vrai. Il porte un méthyle en C13β dans la fiche.",
      "Faux. Le prégnane en comporte 21.",
      "Vrai. Œstradiol, œstrone et œstriol appartiennent à cette famille."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "steroid-nuclei"
    }
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le noyau androstane :",
    "choices": [
      "La testostérone appartient à cette famille.",
      "Il ne contient aucun méthyle.",
      "Il porte des méthyles en C10β et C13β.",
      "Il caractérise les androgènes."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le noyau androstane C19 caractérise les androgènes.",
    "choiceExplanations": [
      "Vrai. La testostérone appartient à cette famille.",
      "Faux. Il en porte deux.",
      "Vrai. Il porte des méthyles en C10β et C13β.",
      "Vrai. Il caractérise les androgènes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "steroid-nuclei"
    }
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le noyau prégnane :",
    "choices": [
      "Il comporte 21 carbones.",
      "Il caractérise l’aldostérone.",
      "Il ne possède aucun maillon en C17.",
      "Il caractérise la progestérone."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le prégnane C21 est commun aux progestagènes et corticostéroïdes.",
    "choiceExplanations": [
      "Vrai. Il comporte 21 carbones.",
      "Vrai. Il caractérise l’aldostérone.",
      "Faux. Il comporte un maillon dicarboné en C17β.",
      "Vrai. Il caractérise la progestérone."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "steroid-nuclei"
    }
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les glandes corticosurrénales :",
    "choices": [
      "Elles produisent des glucocorticoïdes.",
      "Elles produisent des minéralocorticoïdes.",
      "L’aldostérone est uniquement ovarienne.",
      "Aldostérone et cortisol sont surrénaliens."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La corticosurrénale produit plusieurs classes de stéroïdes.",
    "choiceExplanations": [
      "Vrai. Elles produisent des glucocorticoïdes.",
      "Vrai. Elles produisent des minéralocorticoïdes.",
      "Faux. Elle est surrénalienne.",
      "Vrai. Aldostérone et cortisol sont surrénaliens."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 67,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les gonades :",
    "choices": [
      "Les testicules produisent la testostérone.",
      "Les ovaires produisent des œstrogènes.",
      "Les testicules produisent uniquement l’aldostérone.",
      "Les ovaires produisent de la progestérone."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les gonades transforment le cholestérol en hormones sexuelles.",
    "choiceExplanations": [
      "Vrai. Les testicules produisent la testostérone.",
      "Vrai. Les ovaires produisent des œstrogènes.",
      "Faux. Ils produisent surtout des androgènes.",
      "Vrai. Les ovaires produisent de la progestérone."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les minéralocorticoïdes :",
    "choices": [
      "L’aldostérone est le principal.",
      "Ils régulent eau et sels minéraux.",
      "Ils n’ont aucun effet rénal.",
      "Ils sont d’origine surrénalienne."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les minéralocorticoïdes régulent l’équilibre hydro-électrolytique.",
    "choiceExplanations": [
      "Vrai. L’aldostérone est le principal.",
      "Vrai. Ils régulent eau et sels minéraux.",
      "Faux. L’aldostérone agit au rein.",
      "Vrai. Ils sont d’origine surrénalienne."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les glucocorticoïdes :",
    "choices": [
      "Il possède un noyau prégnane C21.",
      "Il est d’origine surrénalienne.",
      "Le cortisol est le principal.",
      "Il n’a aucun effet immunitaire."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Le cortisol est le glucocorticoïde majeur.",
    "choiceExplanations": [
      "Vrai. Il possède un noyau prégnane C21.",
      "Vrai. Il est d’origine surrénalienne.",
      "Vrai. Le cortisol est le principal.",
      "Faux. Il est immunosuppresseur."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les stéroïdes sexuels :",
    "choices": [
      "Ils sont surtout produits par les gonades.",
      "Le placenta peut produire œstrogènes et progestérone.",
      "Ils interviennent dans reproduction et caractères sexuels.",
      "Ils n’ont aucun effet sur les organes génitaux."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les stéroïdes sexuels regroupent androgènes, œstrogènes et progestagènes.",
    "choiceExplanations": [
      "Vrai. Ils sont surtout produits par les gonades.",
      "Vrai. Le placenta peut produire œstrogènes et progestérone.",
      "Vrai. Ils interviennent dans reproduction et caractères sexuels.",
      "Faux. Ils participent à leur développement."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’origine des hormones stéroïdiennes, quelles propositions sont exactes ?",
    "choices": [
      "Les gonades n’en produisent aucune.",
      "Elles dérivent toutes d’acides aminés aromatiques.",
      "Elles sont synthétisées dans les gonades.",
      "Elles sont synthétisées dans les corticosurrénales."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le cholestérol est le précurseur commun des hormones stéroïdiennes.",
    "choiceExplanations": [
      "Faux. Elles produisent les hormones sexuelles.",
      "Faux. Elles dérivent du cholestérol.",
      "Vrai. Elles sont synthétisées dans les gonades.",
      "Vrai. Elles sont synthétisées dans les corticosurrénales."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la lipophilie des hormones stéroïdiennes, quelles propositions sont exactes ?",
    "choices": [
      "Leur noyau est fortement ionique.",
      "Elles dérivent d’un noyau hydrocarboné.",
      "Elles sont toutes très hydrosolubles.",
      "Leur transport sanguin peut nécessiter des protéines porteuses."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La structure stéroïdienne confère lipophilie et action intracellulaire.",
    "choiceExplanations": [
      "Faux. Il est majoritairement hydrophobe.",
      "Vrai. Elles dérivent d’un noyau hydrocarboné.",
      "Faux. Elles sont lipophiles.",
      "Vrai. Leur transport sanguin peut nécessiter des protéines porteuses."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le noyau estrane, quelles propositions sont exactes ?",
    "choices": [
      "Il caractérise l’aldostérone.",
      "Il caractérise les œstrogènes.",
      "Il caractérise la testostérone.",
      "Œstradiol, œstrone et œstriol appartiennent à cette famille."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le noyau estrane C18 caractérise les œstrogènes.",
    "choiceExplanations": [
      "Faux. L’aldostérone est prégnane.",
      "Vrai. Il caractérise les œstrogènes.",
      "Faux. La testostérone est androstane.",
      "Vrai. Œstradiol, œstrone et œstriol appartiennent à cette famille."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "steroid-nuclei"
    }
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le noyau androstane, quelles propositions sont exactes ?",
    "choices": [
      "Il caractérise la progestérone.",
      "Il caractérise les androgènes.",
      "Il comporte 19 carbones.",
      "Il caractérise la vitamine D."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le noyau androstane C19 caractérise les androgènes.",
    "choiceExplanations": [
      "Faux. La progestérone est prégnane.",
      "Vrai. Il caractérise les androgènes.",
      "Vrai. Il comporte 19 carbones.",
      "Faux. La vitamine D n’est pas un androgène."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "steroid-nuclei"
    }
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le noyau prégnane, quelles propositions sont exactes ?",
    "choices": [
      "Il caractérise exclusivement les œstrogènes.",
      "Il comporte 21 carbones.",
      "Il ne possède aucun maillon en C17.",
      "Il caractérise l’aldostérone."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le prégnane C21 est commun aux progestagènes et corticostéroïdes.",
    "choiceExplanations": [
      "Faux. Les œstrogènes sont estranes.",
      "Vrai. Il comporte 21 carbones.",
      "Faux. Il comporte un maillon dicarboné en C17β.",
      "Vrai. Il caractérise l’aldostérone."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "steroid-nuclei"
    }
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les glandes corticosurrénales, quelles propositions sont exactes ?",
    "choices": [
      "Elles ne produisent aucun androgène.",
      "Aldostérone et cortisol sont surrénaliens.",
      "Elles produisent des minéralocorticoïdes.",
      "Elles ne produisent aucun cortisol."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La corticosurrénale produit plusieurs classes de stéroïdes.",
    "choiceExplanations": [
      "Faux. La zone réticulée en produit.",
      "Vrai. Aldostérone et cortisol sont surrénaliens.",
      "Vrai. Elles produisent des minéralocorticoïdes.",
      "Faux. Le cortisol est leur glucocorticoïde majeur."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les gonades, quelles propositions sont exactes ?",
    "choices": [
      "Les ovaires produisent des œstrogènes.",
      "Le cholestérol n’intervient pas.",
      "Les testicules produisent uniquement l’aldostérone.",
      "Les hormones sexuelles dérivent du cholestérol."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les gonades transforment le cholestérol en hormones sexuelles.",
    "choiceExplanations": [
      "Vrai. Les ovaires produisent des œstrogènes.",
      "Faux. Il est leur précurseur.",
      "Faux. Ils produisent surtout des androgènes.",
      "Vrai. Les hormones sexuelles dérivent du cholestérol."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les minéralocorticoïdes, quelles propositions sont exactes ?",
    "choices": [
      "L’aldostérone est le principal.",
      "Ils n’ont aucun effet rénal.",
      "Ils sont produits uniquement dans les testicules.",
      "Ils influencent volume plasmatique et pression artérielle."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les minéralocorticoïdes régulent l’équilibre hydro-électrolytique.",
    "choiceExplanations": [
      "Vrai. L’aldostérone est le principal.",
      "Faux. L’aldostérone agit au rein.",
      "Faux. Ils sont surrénaliens.",
      "Vrai. Ils influencent volume plasmatique et pression artérielle."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les glucocorticoïdes, quelles propositions sont exactes ?",
    "choices": [
      "Il est produit uniquement par le pancréas.",
      "Il n’a aucun effet immunitaire.",
      "Il a des effets métaboliques et anti-inflammatoires.",
      "Il est d’origine surrénalienne."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le cortisol est le glucocorticoïde majeur.",
    "choiceExplanations": [
      "Faux. Il est surrénalien.",
      "Faux. Il est immunosuppresseur.",
      "Vrai. Il a des effets métaboliques et anti-inflammatoires.",
      "Vrai. Il est d’origine surrénalienne."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les stéroïdes sexuels, quelles propositions sont exactes ?",
    "choices": [
      "Ils sont dépourvus de noyau stéroïde.",
      "Ils interviennent dans reproduction et caractères sexuels.",
      "Ils incluent testostérone, œstrogènes et progestérone.",
      "Ils incluent uniquement l’aldostérone."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les stéroïdes sexuels regroupent androgènes, œstrogènes et progestagènes.",
    "choiceExplanations": [
      "Faux. Ce sont des hormones stéroïdiennes.",
      "Vrai. Ils interviennent dans reproduction et caractères sexuels.",
      "Vrai. Ils incluent testostérone, œstrogènes et progestérone.",
      "Faux. L’aldostérone est un minéralocorticoïde."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 81,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur l’origine des hormones stéroïdiennes, quelles propositions sont exactes ?",
    "choices": [
      "Elles sont synthétisées uniquement dans le foie.",
      "Elles dérivent du cholestérol.",
      "Le placenta ne synthétise aucune hormone.",
      "Le placenta peut produire certaines hormones sexuelles."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le cholestérol est le précurseur commun des hormones stéroïdiennes.",
    "choiceExplanations": [
      "Faux. Plusieurs glandes les produisent.",
      "Vrai. Elles dérivent du cholestérol.",
      "Faux. Il peut produire œstrogènes et progestérone.",
      "Vrai. Le placenta peut produire certaines hormones sexuelles."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la lipophilie des hormones stéroïdiennes, quelles propositions sont exactes ?",
    "choices": [
      "Elles sont toutes très hydrosolubles.",
      "Elles peuvent traverser les membranes.",
      "Leur transport sanguin peut nécessiter des protéines porteuses.",
      "Leur noyau est fortement ionique."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La structure stéroïdienne confère lipophilie et action intracellulaire.",
    "choiceExplanations": [
      "Faux. Elles sont lipophiles.",
      "Vrai. Elles peuvent traverser les membranes.",
      "Vrai. Leur transport sanguin peut nécessiter des protéines porteuses.",
      "Faux. Il est majoritairement hydrophobe."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 83,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le noyau estrane, quelles propositions sont exactes ?",
    "choices": [
      "Il porte un méthyle en C13β dans la fiche.",
      "Il possède deux chaînes C8.",
      "Il caractérise la testostérone.",
      "Il caractérise les œstrogènes."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le noyau estrane C18 caractérise les œstrogènes.",
    "choiceExplanations": [
      "Vrai. Il porte un méthyle en C13β dans la fiche.",
      "Faux. Il est le plus court des trois noyaux.",
      "Faux. La testostérone est androstane.",
      "Vrai. Il caractérise les œstrogènes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "steroid-nuclei"
    }
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le noyau androstane, quelles propositions sont exactes ?",
    "choices": [
      "Il comporte 18 carbones.",
      "Il porte des méthyles en C10β et C13β.",
      "Il ne contient aucun méthyle.",
      "Il comporte 19 carbones."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le noyau androstane C19 caractérise les androgènes.",
    "choiceExplanations": [
      "Faux. Cela correspond à l’estrane.",
      "Vrai. Il porte des méthyles en C10β et C13β.",
      "Faux. Il en porte deux.",
      "Vrai. Il comporte 19 carbones."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "steroid-nuclei"
    }
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le noyau prégnane, quelles propositions sont exactes ?",
    "choices": [
      "Il est dépourvu de méthyles C10 et C13.",
      "Il caractérise le cortisol.",
      "Il comporte 18 carbones.",
      "Il comporte 21 carbones."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le prégnane C21 est commun aux progestagènes et corticostéroïdes.",
    "choiceExplanations": [
      "Faux. La fiche en mentionne deux.",
      "Vrai. Il caractérise le cortisol.",
      "Faux. Il en comporte 21.",
      "Vrai. Il comporte 21 carbones."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "steroid-nuclei"
    }
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les glandes corticosurrénales, quelles propositions sont exactes ?",
    "choices": [
      "Elles ne produisent aucun cortisol.",
      "Elles ne produisent aucun androgène.",
      "Elles peuvent produire des androgènes.",
      "Aldostérone et cortisol sont surrénaliens."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La corticosurrénale produit plusieurs classes de stéroïdes.",
    "choiceExplanations": [
      "Faux. Le cortisol est leur glucocorticoïde majeur.",
      "Faux. La zone réticulée en produit.",
      "Vrai. Elles peuvent produire des androgènes.",
      "Vrai. Aldostérone et cortisol sont surrénaliens."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les gonades, quelles propositions sont exactes ?",
    "choices": [
      "Les testicules produisent uniquement l’aldostérone.",
      "Les testicules produisent la testostérone.",
      "Les hormones sexuelles sont des protéines.",
      "Les ovaires produisent des œstrogènes."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les gonades transforment le cholestérol en hormones sexuelles.",
    "choiceExplanations": [
      "Faux. Ils produisent surtout des androgènes.",
      "Vrai. Les testicules produisent la testostérone.",
      "Faux. Ce sont des stéroïdes.",
      "Vrai. Les ovaires produisent des œstrogènes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les minéralocorticoïdes, quelles propositions sont exactes ?",
    "choices": [
      "Ils régulent eau et sels minéraux.",
      "Ils influencent volume plasmatique et pression artérielle.",
      "Ils sont produits uniquement dans les testicules.",
      "Ils régulent exclusivement la glycémie."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les minéralocorticoïdes régulent l’équilibre hydro-électrolytique.",
    "choiceExplanations": [
      "Vrai. Ils régulent eau et sels minéraux.",
      "Vrai. Ils influencent volume plasmatique et pression artérielle.",
      "Faux. Ils sont surrénaliens.",
      "Faux. Ils régulent l’homéostasie hydro-sodée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les glucocorticoïdes, quelles propositions sont exactes ?",
    "choices": [
      "Il n’a aucun effet immunitaire.",
      "Il est produit uniquement par le pancréas.",
      "Il possède un noyau prégnane C21.",
      "Il est d’origine surrénalienne."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le cortisol est le glucocorticoïde majeur.",
    "choiceExplanations": [
      "Faux. Il est immunosuppresseur.",
      "Faux. Il est surrénalien.",
      "Vrai. Il possède un noyau prégnane C21.",
      "Vrai. Il est d’origine surrénalienne."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "aldosterone-cortisol"
    }
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les stéroïdes sexuels, quelles propositions sont exactes ?",
    "choices": [
      "Ils incluent testostérone, œstrogènes et progestérone.",
      "Ils sont dépourvus de noyau stéroïde.",
      "Ils n’ont aucun effet sur les organes génitaux.",
      "Ils interviennent dans reproduction et caractères sexuels."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les stéroïdes sexuels regroupent androgènes, œstrogènes et progestagènes.",
    "choiceExplanations": [
      "Vrai. Ils incluent testostérone, œstrogènes et progestérone.",
      "Faux. Ce sont des hormones stéroïdiennes.",
      "Faux. Ils participent à leur développement.",
      "Vrai. Ils interviennent dans reproduction et caractères sexuels."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "hormone-origins"
    }
  }
];
