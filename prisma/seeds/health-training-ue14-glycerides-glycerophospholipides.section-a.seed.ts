import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "1": [
    "la définition des glycérides"
  ],
  "2": [
    "la structure du glycérol"
  ],
  "3": [
    "la numérotation du glycérol"
  ],
  "4": [
    "la stéréospécificité du glycérol"
  ],
  "5": [
    "les propriétés du glycérol"
  ],
  "6": [
    "les monoacylglycérols"
  ],
  "7": [
    "les diacylglycérols"
  ],
  "8": [
    "les triacylglycérols"
  ],
  "9": [
    "les triglycérides homogènes et mixtes"
  ],
  "10": [
    "le 1,3-distéaryl-2-oléyl-glycérol"
  ],
  "11": [
    "la définition des glycérides"
  ],
  "12": [
    "la structure du glycérol"
  ],
  "13": [
    "la numérotation du glycérol"
  ],
  "14": [
    "la stéréospécificité du glycérol"
  ],
  "15": [
    "les propriétés du glycérol"
  ],
  "16": [
    "les monoacylglycérols"
  ],
  "17": [
    "les diacylglycérols"
  ],
  "18": [
    "les triacylglycérols"
  ],
  "19": [
    "les triglycérides homogènes et mixtes"
  ],
  "20": [
    "le 1,3-distéaryl-2-oléyl-glycérol"
  ],
  "21": [
    "la définition des glycérides"
  ],
  "22": [
    "la structure du glycérol"
  ],
  "23": [
    "la numérotation du glycérol"
  ],
  "24": [
    "la stéréospécificité du glycérol"
  ],
  "25": [
    "les propriétés du glycérol"
  ],
  "26": [
    "les monoacylglycérols"
  ],
  "27": [
    "les diacylglycérols"
  ],
  "28": [
    "les triacylglycérols"
  ],
  "29": [
    "les triglycérides homogènes et mixtes"
  ],
  "30": [
    "le 1,3-distéaryl-2-oléyl-glycérol"
  ]
};

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "glycerol-acylglycerols-fondamentaux",
    "title": "Glycérol et estérification",
    "description": "Acquérir les notions fondamentales de la section.",
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
    "slug": "glycerol-acylglycerols-applications",
    "title": "Mono-, di- et triacylglycérols",
    "description": "Appliquer et comparer les notions de la section.",
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
    "slug": "glycerol-acylglycerols-raisonnement",
    "title": "Raisonnement sur les acylglycérols",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 1,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères structuraux",
        "sharedStatement": "Les questions suivantes mobilisent les principaux repères structuraux de la section.",
        "questionOrders": [
          21,
          22,
          23
        ]
      },
      {
        "type": "GROUP",
        "title": "Propriétés et fonctions",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          24,
          25,
          26
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques et médicales",
        "sharedStatement": "Les questions suivantes replacent les notions dans leur contexte biologique ou médical.",
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
    "question": "À propos de la définition des glycérides :",
    "choices": [
      "Ils ne contiennent jamais de liaison ester.",
      "Leur formation mobilise les fonctions alcool du glycérol.",
      "Ils représentent une part majeure des lipides de l’organisme.",
      "Les glycérides sont aussi appelés acylglycérols."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les glycérides sont des esters du glycérol par un ou plusieurs acides gras.",
    "choiceExplanations": [
      "Faux. Les liaisons ester les caractérisent.",
      "Vrai. Leur formation mobilise les fonctions alcool du glycérol.",
      "Vrai. Ils représentent une part majeure des lipides de l’organisme.",
      "Vrai. Les glycérides sont aussi appelés acylglycérols."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-overview"
    }
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la structure du glycérol :",
    "choices": [
      "Le glycérol comporte six carbones.",
      "Le glycérol comporte trois atomes de carbone.",
      "Les alcools des C1 et C3 sont primaires.",
      "Il possède trois fonctions alcool."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le glycérol est un trialcool à trois carbones.",
    "choiceExplanations": [
      "Faux. Il en comporte trois.",
      "Vrai. Le glycérol comporte trois atomes de carbone.",
      "Vrai. Les alcools des C1 et C3 sont primaires.",
      "Vrai. Il possède trois fonctions alcool."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-numbering"
    }
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la numérotation du glycérol :",
    "choices": [
      "C1 correspond à α.",
      "C2 correspond à β.",
      "Les carbones sont numérotés de 1 à 3.",
      "La notation traditionnelle ne distingue pas les positions."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La numérotation 1-2-3 correspond à α-β-α′.",
    "choiceExplanations": [
      "Vrai. C1 correspond à α.",
      "Vrai. C2 correspond à β.",
      "Vrai. Les carbones sont numérotés de 1 à 3.",
      "Faux. Elle distingue les trois positions."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-numbering"
    }
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la stéréospécificité du glycérol :",
    "choices": [
      "Les carbones 1 et 3 ne sont pas équivalents dans une représentation tridimensionnelle.",
      "La glycérol kinase phosphoryle le C3 dans la fiche.",
      "Les enzymes agissent toujours au hasard.",
      "Certaines enzymes distinguent les positions du glycérol."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La tridimensionnalité du glycérol permet une reconnaissance enzymatique spécifique.",
    "choiceExplanations": [
      "Vrai. Les carbones 1 et 3 ne sont pas équivalents dans une représentation tridimensionnelle.",
      "Vrai. La glycérol kinase phosphoryle le C3 dans la fiche.",
      "Faux. Elles présentent souvent une spécificité de position.",
      "Vrai. Certaines enzymes distinguent les positions du glycérol."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-numbering"
    }
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les propriétés du glycérol :",
    "choices": [
      "Il forme facilement des esters.",
      "Cette estérification est importante physiologiquement.",
      "Il ne peut jamais être estérifié.",
      "Son point de congélation est bas."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le glycérol forme aisément des esters lipidiques.",
    "choiceExplanations": [
      "Vrai. Il forme facilement des esters.",
      "Vrai. Cette estérification est importante physiologiquement.",
      "Faux. Il forme facilement des esters.",
      "Vrai. Son point de congélation est bas."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-overview"
    }
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les monoacylglycérols :",
    "choices": [
      "L’acide gras peut être fixé en C2.",
      "1-monoacylglycérol et α-monoacylglycérol sont synonymes.",
      "La liaison est une amide.",
      "Un monoacylglycérol porte un seul acide gras."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les monoglycérides résultent de l’estérification d’une seule fonction alcool.",
    "choiceExplanations": [
      "Vrai. L’acide gras peut être fixé en C2.",
      "Vrai. 1-monoacylglycérol et α-monoacylglycérol sont synonymes.",
      "Faux. La liaison est un ester.",
      "Vrai. Un monoacylglycérol porte un seul acide gras."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "acylglycerol-types"
    }
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les diacylglycérols :",
    "choices": [
      "Un diglycéride est un stérol.",
      "Le 1,3-diacylglycérol est estérifié sur les deux alcools primaires.",
      "Un diacylglycérol porte deux acides gras.",
      "Diglycéride et diacylglycérol sont synonymes."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les diglycérides existent notamment sous les formes 1,2 et 1,3.",
    "choiceExplanations": [
      "Faux. C’est un glycéride.",
      "Vrai. Le 1,3-diacylglycérol est estérifié sur les deux alcools primaires.",
      "Vrai. Un diacylglycérol porte deux acides gras.",
      "Vrai. Diglycéride et diacylglycérol sont synonymes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "acylglycerol-types"
    }
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les triacylglycérols :",
    "choices": [
      "Il dérive de la sphingosine.",
      "Les trois fonctions alcool sont estérifiées.",
      "Un triacylglycérol porte trois acides gras.",
      "Triglycéride et triacylglycérol sont synonymes."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les triglycérides correspondent à l’estérification complète du glycérol.",
    "choiceExplanations": [
      "Faux. Il dérive du glycérol.",
      "Vrai. Les trois fonctions alcool sont estérifiées.",
      "Vrai. Un triacylglycérol porte trois acides gras.",
      "Vrai. Triglycéride et triacylglycérol sont synonymes."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "acylglycerol-types"
    }
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les triglycérides homogènes et mixtes :",
    "choices": [
      "Un mixte ne contient qu’un acide gras.",
      "Un triglycéride homogène porte trois acides gras identiques.",
      "La composition en acides gras influence les propriétés.",
      "R1, R2 et R3 représentent les chaînes acyles."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Homogène et mixte décrivent l’identité des trois chaînes acyles.",
    "choiceExplanations": [
      "Faux. Il en contient trois, non tous identiques.",
      "Vrai. Un triglycéride homogène porte trois acides gras identiques.",
      "Vrai. La composition en acides gras influence les propriétés.",
      "Vrai. R1, R2 et R3 représentent les chaînes acyles."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-types"
    }
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le 1,3-distéaryl-2-oléyl-glycérol :",
    "choices": [
      "Il s’agit d’un triglycéride mixte.",
      "Il porte deux stéaryls en C1 et C3.",
      "Il porte un oléyl en C2.",
      "Il ne comporte aucun acide gras saturé."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Cet exemple associe deux chaînes stéaryles et une chaîne oléyle.",
    "choiceExplanations": [
      "Vrai. Il s’agit d’un triglycéride mixte.",
      "Vrai. Il porte deux stéaryls en C1 et C3.",
      "Vrai. Il porte un oléyl en C2.",
      "Faux. Les stéaryls sont saturés."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-example"
    }
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la définition des glycérides, quelles propositions sont exactes ?",
    "choices": [
      "Ils sont des esters d’acides gras et de glycérol.",
      "Ils sont formés uniquement de phosphate et de choline.",
      "Ils sont des protéines.",
      "Les glycérides sont aussi appelés acylglycérols."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les glycérides sont des esters du glycérol par un ou plusieurs acides gras.",
    "choiceExplanations": [
      "Vrai. Ils sont des esters d’acides gras et de glycérol.",
      "Faux. Ils associent glycérol et acides gras.",
      "Faux. Ce sont des lipides.",
      "Vrai. Les glycérides sont aussi appelés acylglycérols."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-overview"
    }
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la structure du glycérol, quelles propositions sont exactes ?",
    "choices": [
      "Le glycérol comporte trois atomes de carbone.",
      "Il possède trois fonctions alcool.",
      "Le glycérol comporte six carbones.",
      "Le glycérol ne possède aucun OH."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le glycérol est un trialcool à trois carbones.",
    "choiceExplanations": [
      "Vrai. Le glycérol comporte trois atomes de carbone.",
      "Vrai. Il possède trois fonctions alcool.",
      "Faux. Il en comporte trois.",
      "Faux. Il possède trois fonctions alcool."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-numbering"
    }
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la numérotation du glycérol, quelles propositions sont exactes ?",
    "choices": [
      "C2 correspond à β.",
      "La notation traditionnelle ne distingue pas les positions.",
      "La numérotation commence à C0.",
      "C1 correspond à α."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La numérotation 1-2-3 correspond à α-β-α′.",
    "choiceExplanations": [
      "Vrai. C2 correspond à β.",
      "Faux. Elle distingue les trois positions.",
      "Faux. Elle commence à C1.",
      "Vrai. C1 correspond à α."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-numbering"
    }
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la stéréospécificité du glycérol, quelles propositions sont exactes ?",
    "choices": [
      "La glycérol kinase phosphoryle exclusivement le C2.",
      "La conformation n’a aucun intérêt biologique.",
      "Les carbones 1 et 3 ne sont pas équivalents dans une représentation tridimensionnelle.",
      "Certaines enzymes distinguent les positions du glycérol."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La tridimensionnalité du glycérol permet une reconnaissance enzymatique spécifique.",
    "choiceExplanations": [
      "Faux. La fiche indique le C3.",
      "Faux. Elle conditionne la reconnaissance enzymatique.",
      "Vrai. Les carbones 1 et 3 ne sont pas équivalents dans une représentation tridimensionnelle.",
      "Vrai. Certaines enzymes distinguent les positions du glycérol."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-numbering"
    }
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les propriétés du glycérol, quelles propositions sont exactes ?",
    "choices": [
      "Le glycérol est un gaz.",
      "Il ne possède aucune fonction alcool.",
      "Cette estérification est importante physiologiquement.",
      "Il forme facilement des esters."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le glycérol forme aisément des esters lipidiques.",
    "choiceExplanations": [
      "Faux. Il est une substance visqueuse.",
      "Faux. Il en possède trois.",
      "Vrai. Cette estérification est importante physiologiquement.",
      "Vrai. Il forme facilement des esters."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-overview"
    }
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les monoacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      "Un monoacylglycérol porte un seul acide gras.",
      "Le 2-monoacylglycérol est estérifié en C3.",
      "L’acide gras peut être fixé en C2.",
      "Le préfixe mono signifie deux acides gras."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les monoglycérides résultent de l’estérification d’une seule fonction alcool.",
    "choiceExplanations": [
      "Vrai. Un monoacylglycérol porte un seul acide gras.",
      "Faux. Il est estérifié en C2.",
      "Vrai. L’acide gras peut être fixé en C2.",
      "Faux. Il signifie un seul acide gras."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "acylglycerol-types"
    }
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les diacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      "Diglycéride et diacylglycérol sont synonymes.",
      "Un diglycéride est un stérol.",
      "Il ne contient aucune liaison ester.",
      "Un diacylglycérol porte deux acides gras."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les diglycérides existent notamment sous les formes 1,2 et 1,3.",
    "choiceExplanations": [
      "Vrai. Diglycéride et diacylglycérol sont synonymes.",
      "Faux. C’est un glycéride.",
      "Faux. Il en contient deux.",
      "Vrai. Un diacylglycérol porte deux acides gras."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "acylglycerol-types"
    }
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les triacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      "Les trois fonctions alcool sont estérifiées.",
      "Il ne contient aucune liaison ester.",
      "Il porte un seul acide gras.",
      "Ils sont les glycérides les plus abondants chez l’Homme."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les triglycérides correspondent à l’estérification complète du glycérol.",
    "choiceExplanations": [
      "Vrai. Les trois fonctions alcool sont estérifiées.",
      "Faux. Il en contient trois.",
      "Faux. Il en porte trois.",
      "Vrai. Ils sont les glycérides les plus abondants chez l’Homme."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "acylglycerol-types"
    }
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les triglycérides homogènes et mixtes, quelles propositions sont exactes ?",
    "choices": [
      "La composition n’influence jamais le point de fusion.",
      "R1, R2 et R3 représentent des phosphates.",
      "R1, R2 et R3 représentent les chaînes acyles.",
      "Un triglycéride homogène porte trois acides gras identiques."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Homogène et mixte décrivent l’identité des trois chaînes acyles.",
    "choiceExplanations": [
      "Faux. Elle l’influence directement.",
      "Faux. Ils représentent les chaînes acyles.",
      "Vrai. R1, R2 et R3 représentent les chaînes acyles.",
      "Vrai. Un triglycéride homogène porte trois acides gras identiques."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-types"
    }
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le 1,3-distéaryl-2-oléyl-glycérol, quelles propositions sont exactes ?",
    "choices": [
      "L’oléyl est en C1 uniquement.",
      "Il porte un oléyl en C2.",
      "Il s’agit d’un monoglycéride.",
      "Il s’agit d’un triglycéride mixte."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Cet exemple associe deux chaînes stéaryles et une chaîne oléyle.",
    "choiceExplanations": [
      "Faux. Il est en C2.",
      "Vrai. Il porte un oléyl en C2.",
      "Faux. Il s’agit d’un triglycéride.",
      "Vrai. Il s’agit d’un triglycéride mixte."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-example"
    }
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la définition des glycérides, quelles propositions sont exactes ?",
    "choices": [
      "Leur formation mobilise les fonctions alcool du glycérol.",
      "Ils dérivent tous de la sphingosine.",
      "Ils sont des esters d’acides gras et de glycérol.",
      "Ils ne contiennent jamais de liaison ester."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les glycérides sont des esters du glycérol par un ou plusieurs acides gras.",
    "choiceExplanations": [
      "Vrai. Leur formation mobilise les fonctions alcool du glycérol.",
      "Faux. Leur squelette est le glycérol.",
      "Vrai. Ils sont des esters d’acides gras et de glycérol.",
      "Faux. Les liaisons ester les caractérisent."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-overview"
    }
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure du glycérol, quelles propositions sont exactes ?",
    "choices": [
      "Le glycérol comporte trois atomes de carbone.",
      "Il possède trois fonctions alcool.",
      "Le C2 porte un alcool primaire.",
      "Le glycérol est un monoalcool."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le glycérol est un trialcool à trois carbones.",
    "choiceExplanations": [
      "Vrai. Le glycérol comporte trois atomes de carbone.",
      "Vrai. Il possède trois fonctions alcool.",
      "Faux. Il porte l’alcool secondaire.",
      "Faux. C’est un trialcool."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-numbering"
    }
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la numérotation du glycérol, quelles propositions sont exactes ?",
    "choices": [
      "Les carbones sont numérotés de 1 à 3.",
      "Les trois carbones sont notés α.",
      "C1 correspond à α.",
      "La notation traditionnelle ne distingue pas les positions."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La numérotation 1-2-3 correspond à α-β-α′.",
    "choiceExplanations": [
      "Vrai. Les carbones sont numérotés de 1 à 3.",
      "Faux. Ils sont distingués α, β et α′.",
      "Vrai. C1 correspond à α.",
      "Faux. Elle distingue les trois positions."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-numbering"
    }
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la stéréospécificité du glycérol, quelles propositions sont exactes ?",
    "choices": [
      "Les enzymes agissent toujours au hasard.",
      "La numérotation est utile à la spécificité enzymatique.",
      "Certaines enzymes distinguent les positions du glycérol.",
      "La conformation n’a aucun intérêt biologique."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La tridimensionnalité du glycérol permet une reconnaissance enzymatique spécifique.",
    "choiceExplanations": [
      "Faux. Elles présentent souvent une spécificité de position.",
      "Vrai. La numérotation est utile à la spécificité enzymatique.",
      "Vrai. Certaines enzymes distinguent les positions du glycérol.",
      "Faux. Elle conditionne la reconnaissance enzymatique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-numbering"
    }
  },
  {
    "order": 25,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les propriétés du glycérol, quelles propositions sont exactes ?",
    "choices": [
      "Son point de congélation est bas.",
      "Il forme facilement des esters.",
      "Le glycérol est un gaz.",
      "Son point de congélation est décrit comme très élevé."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le glycérol forme aisément des esters lipidiques.",
    "choiceExplanations": [
      "Vrai. Son point de congélation est bas.",
      "Vrai. Il forme facilement des esters.",
      "Faux. Il est une substance visqueuse.",
      "Faux. La fiche le décrit comme bas."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "glycerol-overview"
    }
  },
  {
    "order": 26,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les monoacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      "Un monoacylglycérol porte un seul acide gras.",
      "Il porte trois acides gras.",
      "L’acide gras peut être fixé en C1.",
      "La liaison est une amide."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les monoglycérides résultent de l’estérification d’une seule fonction alcool.",
    "choiceExplanations": [
      "Vrai. Un monoacylglycérol porte un seul acide gras.",
      "Faux. Il n’en porte qu’un.",
      "Vrai. L’acide gras peut être fixé en C1.",
      "Faux. La liaison est un ester."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "acylglycerol-types"
    }
  },
  {
    "order": 27,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les diacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      "Un diglycéride est un stérol.",
      "Le 1,3-diacylglycérol est estérifié sur les deux alcools primaires.",
      "Un diacylglycérol porte deux acides gras.",
      "Il ne contient aucune liaison ester."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les diglycérides existent notamment sous les formes 1,2 et 1,3.",
    "choiceExplanations": [
      "Faux. C’est un glycéride.",
      "Vrai. Le 1,3-diacylglycérol est estérifié sur les deux alcools primaires.",
      "Vrai. Un diacylglycérol porte deux acides gras.",
      "Faux. Il en contient deux."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "acylglycerol-types"
    }
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les triacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      "Les trois fonctions alcool sont estérifiées.",
      "Il conserve trois OH libres.",
      "Ils sont les glycérides les plus abondants chez l’Homme.",
      "Il ne contient aucune liaison ester."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les triglycérides correspondent à l’estérification complète du glycérol.",
    "choiceExplanations": [
      "Vrai. Les trois fonctions alcool sont estérifiées.",
      "Faux. Les trois OH sont estérifiés.",
      "Vrai. Ils sont les glycérides les plus abondants chez l’Homme.",
      "Faux. Il en contient trois."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "acylglycerol-types"
    }
  },
  {
    "order": 29,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les triglycérides homogènes et mixtes, quelles propositions sont exactes ?",
    "choices": [
      "La composition n’influence jamais le point de fusion.",
      "R1, R2 et R3 représentent les chaînes acyles.",
      "La composition en acides gras influence les propriétés.",
      "R1, R2 et R3 représentent des phosphates."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Homogène et mixte décrivent l’identité des trois chaînes acyles.",
    "choiceExplanations": [
      "Faux. Elle l’influence directement.",
      "Vrai. R1, R2 et R3 représentent les chaînes acyles.",
      "Vrai. La composition en acides gras influence les propriétés.",
      "Faux. Ils représentent les chaînes acyles."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-types"
    }
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le 1,3-distéaryl-2-oléyl-glycérol, quelles propositions sont exactes ?",
    "choices": [
      "Il porte deux stéaryls en C1 et C3.",
      "L’oléyl est en C1 uniquement.",
      "Les trois chaînes sont identiques.",
      "L’oléyl dérive d’un acide gras à une double liaison."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Cet exemple associe deux chaînes stéaryles et une chaîne oléyle.",
    "choiceExplanations": [
      "Vrai. Il porte deux stéaryls en C1 et C3.",
      "Faux. Il est en C2.",
      "Faux. L’oléyl diffère des stéaryls.",
      "Vrai. L’oléyl dérive d’un acide gras à une double liaison."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "triglyceride-example"
    }
  }
];
