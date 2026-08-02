import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "91": [
    "l’allostérie"
  ],
  "92": [
    "la régulation de la PKA par l’AMPc"
  ],
  "93": [
    "la régulation par modification covalente"
  ],
  "94": [
    "l’ubiquitination et le protéasome"
  ],
  "95": [
    "la protéolyse limitée et les zymogènes"
  ],
  "96": [
    "l’allostérie"
  ],
  "97": [
    "la régulation de la PKA par l’AMPc"
  ],
  "98": [
    "la régulation par modification covalente"
  ],
  "99": [
    "l’ubiquitination et le protéasome"
  ],
  "100": [
    "la protéolyse limitée et les zymogènes"
  ],
  "101": [
    "l’allostérie"
  ],
  "102": [
    "la régulation de la PKA par l’AMPc"
  ],
  "103": [
    "la régulation par modification covalente"
  ],
  "104": [
    "l’ubiquitination et le protéasome"
  ],
  "105": [
    "la protéolyse limitée et les zymogènes"
  ],
  "106": [
    "l’allostérie"
  ],
  "107": [
    "la régulation de la PKA par l’AMPc"
  ],
  "108": [
    "la régulation par modification covalente"
  ],
  "109": [
    "l’ubiquitination et le protéasome"
  ],
  "110": [
    "la protéolyse limitée et les zymogènes"
  ],
  "111": [
    "l’allostérie"
  ],
  "112": [
    "la régulation de la PKA par l’AMPc"
  ],
  "113": [
    "la régulation par modification covalente"
  ],
  "114": [
    "l’ubiquitination et le protéasome"
  ],
  "115": [
    "la protéolyse limitée et les zymogènes"
  ],
  "116": [
    "l’allostérie"
  ],
  "117": [
    "la régulation de la PKA par l’AMPc"
  ],
  "118": [
    "la régulation par modification covalente"
  ],
  "119": [
    "l’ubiquitination et le protéasome"
  ],
  "120": [
    "la protéolyse limitée et les zymogènes"
  ]
};

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "regulation-activite-1",
    "title": "Allostérie et sous-unités régulatrices",
    "description": "Identifier les notions fondamentales de la section.",
    "stage": "DISCOVER",
    "sectionOrder": 4,
    "questionOrders": [
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100
    ]
  },
  {
    "order": 2,
    "slug": "regulation-activite-2",
    "title": "Modifications covalentes et stabilité",
    "description": "Appliquer les définitions, classifications et relations du cours.",
    "stage": "PRACTICE",
    "sectionOrder": 4,
    "questionOrders": [
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110
    ]
  },
  {
    "order": 3,
    "slug": "regulation-activite-3",
    "title": "Zymogènes et cascades d’activation",
    "description": "Mobiliser les notions dans des raisonnements transversaux et des situations biologiques.",
    "stage": "MASTER",
    "sectionOrder": 4,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères fondamentaux",
        "sharedStatement": "Les questions suivantes mobilisent les repères essentiels de la section.",
        "questionOrders": [
          111,
          112,
          113
        ]
      },
      {
        "type": "GROUP",
        "title": "Mécanismes et relations",
        "sharedStatement": "Les questions suivantes relient les notions et mécanismes de la section.",
        "questionOrders": [
          114,
          115,
          116
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques",
        "sharedStatement": "Les questions suivantes replacent les notions dans une situation biologique, analytique ou médicale.",
        "questionOrders": [
          117,
          118,
          119,
          120
        ]
      }
    ]
  }
];

export const SECTION_D_QUESTIONS: SeedQuestion[] = [
  {
    "order": 91,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’allostérie :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "allosteric-regulation"
    },
    "choices": [
      "Un effecteur allostérique peut être activateur ou inhibiteur.",
      "Tous les effecteurs allostériques sont activateurs.",
      "Une enzyme peut alterner entre formes active et inactive.",
      "Une enzyme allostérique possède un site régulateur distinct du site actif."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’allostérie couple la fixation d’un effecteur à un changement de conformation et d’activité.",
    "choiceExplanations": [
      "Vrai. Un effecteur allostérique peut être activateur ou inhibiteur.",
      "Faux. Ils peuvent aussi être inhibiteurs.",
      "Vrai. Une enzyme peut alterner entre formes active et inactive.",
      "Vrai. Une enzyme allostérique possède un site régulateur distinct du site actif."
    ]
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la régulation de la PKA par l’AMPc :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "pka-camp"
    },
    "choices": [
      "L’AMPc bloque irréversiblement les sites catalytiques de la PKA.",
      "La PKA est activée par dégradation immédiate de ses sous-unités.",
      "Quatre molécules d’AMPc se fixent aux sous-unités régulatrices dans le schéma du cours.",
      "La PKA inactive associe sous-unités régulatrices et catalytiques."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’AMPc active la PKA en dissociant le complexe régulateur-catalytique.",
    "choiceExplanations": [
      "Faux. Il libère les sous-unités catalytiques.",
      "Faux. Elle est activée par dissociation régulée.",
      "Vrai. Quatre molécules d’AMPc se fixent aux sous-unités régulatrices dans le schéma du cours.",
      "Vrai. La PKA inactive associe sous-unités régulatrices et catalytiques."
    ]
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la régulation par modification covalente :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "covalent-regulation"
    },
    "choices": [
      "L’acétylation utilise exclusivement le NADH comme donneur d’acétyle.",
      "Une modification covalente ajoute un groupement sur la partie protéique de l’enzyme.",
      "La phosphorylation est réalisée par une kinase.",
      "La cascade PKA-phosphorylase kinase-glycogène phosphorylase favorise la mobilisation du glycogène."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les modifications covalentes et les cascades de phosphorylation amplifient la régulation métabolique.",
    "choiceExplanations": [
      "Faux. L’acétyl-CoA est cité.",
      "Vrai. Une modification covalente ajoute un groupement sur la partie protéique de l’enzyme.",
      "Vrai. La phosphorylation est réalisée par une kinase.",
      "Vrai. La cascade PKA-phosphorylase kinase-glycogène phosphorylase favorise la mobilisation du glycogène."
    ]
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’ubiquitination et le protéasome :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ubiquitin-proteasome"
    },
    "choices": [
      "L’ubiquitine est un polysaccharide.",
      "E1, E2 et E3 sont les trois sous-unités de la chymotrypsine.",
      "La dégradation d’une enzyme diminue sa quantité et donc son activité globale.",
      "Les enzymes E1, E2 et E3 participent à l’ubiquitination."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La stabilité de l’enzyme constitue un niveau de régulation grâce au ciblage ubiquitine-protéasome.",
    "choiceExplanations": [
      "Faux. C’est une petite protéine.",
      "Faux. Elles participent à la cascade d’ubiquitination.",
      "Vrai. La dégradation d’une enzyme diminue sa quantité et donc son activité globale.",
      "Vrai. Les enzymes E1, E2 et E3 participent à l’ubiquitination."
    ]
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la protéolyse limitée et les zymogènes :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "zymogen-cascade"
    },
    "choices": [
      "La trypsine active notamment chymotrypsinogène, proélastase et procarboxypeptidase.",
      "La protéolyse limitée hydrolyse un petit nombre de liaisons peptidiques.",
      "Les enzymes digestives sont toutes synthétisées directement sous forme active.",
      "Un zymogène est un précurseur enzymatique inactif."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "L’activation en cascade des zymogènes digestifs permet une régulation par protéolyse limitée.",
    "choiceExplanations": [
      "Vrai. La trypsine active notamment chymotrypsinogène, proélastase et procarboxypeptidase.",
      "Vrai. La protéolyse limitée hydrolyse un petit nombre de liaisons peptidiques.",
      "Faux. Plusieurs sont synthétisées comme zymogènes.",
      "Vrai. Un zymogène est un précurseur enzymatique inactif."
    ]
  },
  {
    "order": 96,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’allostérie :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "allosteric-regulation"
    },
    "choices": [
      "Une enzyme peut alterner entre formes active et inactive.",
      "La fixation de l’effecteur modifie la conformation de l’enzyme.",
      "Tous les effecteurs allostériques sont activateurs.",
      "L’allostérie ne modifie jamais la conformation."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "L’allostérie couple la fixation d’un effecteur à un changement de conformation et d’activité.",
    "choiceExplanations": [
      "Vrai. Une enzyme peut alterner entre formes active et inactive.",
      "Vrai. La fixation de l’effecteur modifie la conformation de l’enzyme.",
      "Faux. Ils peuvent aussi être inhibiteurs.",
      "Faux. La modification conformationnelle transmet la régulation."
    ]
  },
  {
    "order": 97,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la régulation de la PKA par l’AMPc :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "pka-camp"
    },
    "choices": [
      "Quatre molécules d’AMPc se fixent aux sous-unités régulatrices dans le schéma du cours.",
      "L’AMPc bloque irréversiblement les sites catalytiques de la PKA.",
      "La fixation de l’AMPc libère les sous-unités catalytiques.",
      "La PKA inactive associe sous-unités régulatrices et catalytiques."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’AMPc active la PKA en dissociant le complexe régulateur-catalytique.",
    "choiceExplanations": [
      "Vrai. Quatre molécules d’AMPc se fixent aux sous-unités régulatrices dans le schéma du cours.",
      "Faux. Il libère les sous-unités catalytiques.",
      "Vrai. La fixation de l’AMPc libère les sous-unités catalytiques.",
      "Vrai. La PKA inactive associe sous-unités régulatrices et catalytiques."
    ]
  },
  {
    "order": 98,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la régulation par modification covalente :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "covalent-regulation"
    },
    "choices": [
      "La PKA inactive directement la glycogène phosphorylase sans cascade.",
      "Une modification covalente ajoute un groupement sur la partie protéique de l’enzyme.",
      "La phosphorylation est réalisée par une kinase.",
      "Une phosphorylation retire toujours un phosphate."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les modifications covalentes et les cascades de phosphorylation amplifient la régulation métabolique.",
    "choiceExplanations": [
      "Faux. La fiche décrit une cascade de phosphorylations.",
      "Vrai. Une modification covalente ajoute un groupement sur la partie protéique de l’enzyme.",
      "Vrai. La phosphorylation est réalisée par une kinase.",
      "Faux. Une kinase ajoute un phosphate."
    ]
  },
  {
    "order": 99,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de l’ubiquitination et le protéasome :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ubiquitin-proteasome"
    },
    "choices": [
      "Les enzymes E1, E2 et E3 participent à l’ubiquitination.",
      "L’ubiquitine est une protéine de 76 acides aminés dans la fiche.",
      "E1, E2 et E3 sont les trois sous-unités de la chymotrypsine.",
      "La dégradation d’une enzyme diminue sa quantité et donc son activité globale."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "La stabilité de l’enzyme constitue un niveau de régulation grâce au ciblage ubiquitine-protéasome.",
    "choiceExplanations": [
      "Vrai. Les enzymes E1, E2 et E3 participent à l’ubiquitination.",
      "Vrai. L’ubiquitine est une protéine de 76 acides aminés dans la fiche.",
      "Faux. Elles participent à la cascade d’ubiquitination.",
      "Vrai. La dégradation d’une enzyme diminue sa quantité et donc son activité globale."
    ]
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la protéolyse limitée et les zymogènes :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "zymogen-cascade"
    },
    "choices": [
      "L’entéropeptidase active le trypsinogène en trypsine.",
      "L’entéropeptidase transforme la trypsine en trypsinogène.",
      "Un zymogène est un précurseur enzymatique inactif.",
      "Les enzymes digestives sont toutes synthétisées directement sous forme active."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’activation en cascade des zymogènes digestifs permet une régulation par protéolyse limitée.",
    "choiceExplanations": [
      "Vrai. L’entéropeptidase active le trypsinogène en trypsine.",
      "Faux. Elle réalise la transformation inverse.",
      "Vrai. Un zymogène est un précurseur enzymatique inactif.",
      "Faux. Plusieurs sont synthétisées comme zymogènes."
    ]
  },
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’allostérie, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "allosteric-regulation"
    },
    "choices": [
      "L’allostérie ne modifie jamais la conformation.",
      "Une enzyme peut alterner entre formes active et inactive.",
      "La fixation de l’effecteur modifie la conformation de l’enzyme.",
      "Un ligand allostérique se fixe obligatoirement dans le site actif."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "L’allostérie couple la fixation d’un effecteur à un changement de conformation et d’activité.",
    "choiceExplanations": [
      "Faux. La modification conformationnelle transmet la régulation.",
      "Vrai. Une enzyme peut alterner entre formes active et inactive.",
      "Vrai. La fixation de l’effecteur modifie la conformation de l’enzyme.",
      "Faux. Il se fixe sur un site régulateur distinct."
    ]
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la régulation de la PKA par l’AMPc, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "pka-camp"
    },
    "choices": [
      "La PKA est activée par dégradation immédiate de ses sous-unités.",
      "L’AMPc bloque irréversiblement les sites catalytiques de la PKA.",
      "Quatre molécules d’AMPc se fixent aux sous-unités régulatrices dans le schéma du cours.",
      "La sous-unité régulatrice catalyse directement toutes les phosphorylations."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "L’AMPc active la PKA en dissociant le complexe régulateur-catalytique.",
    "choiceExplanations": [
      "Faux. Elle est activée par dissociation régulée.",
      "Faux. Il libère les sous-unités catalytiques.",
      "Vrai. Quatre molécules d’AMPc se fixent aux sous-unités régulatrices dans le schéma du cours.",
      "Faux. La catalyse est portée par les sous-unités catalytiques."
    ]
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la régulation par modification covalente, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "covalent-regulation"
    },
    "choices": [
      "Adénylation, uridylation, ADP-ribosylation et acétylation sont citées.",
      "Une phosphorylation retire toujours un phosphate.",
      "La PKA inactive directement la glycogène phosphorylase sans cascade.",
      "La cascade PKA-phosphorylase kinase-glycogène phosphorylase favorise la mobilisation du glycogène."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les modifications covalentes et les cascades de phosphorylation amplifient la régulation métabolique.",
    "choiceExplanations": [
      "Vrai. Adénylation, uridylation, ADP-ribosylation et acétylation sont citées.",
      "Faux. Une kinase ajoute un phosphate.",
      "Faux. La fiche décrit une cascade de phosphorylations.",
      "Vrai. La cascade PKA-phosphorylase kinase-glycogène phosphorylase favorise la mobilisation du glycogène."
    ]
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’ubiquitination et le protéasome, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ubiquitin-proteasome"
    },
    "choices": [
      "Les enzymes E1, E2 et E3 participent à l’ubiquitination.",
      "La polyubiquitination permet la reconnaissance par le protéasome.",
      "E1, E2 et E3 sont les trois sous-unités de la chymotrypsine.",
      "Le protéasome synthétise les enzymes dénaturées."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La stabilité de l’enzyme constitue un niveau de régulation grâce au ciblage ubiquitine-protéasome.",
    "choiceExplanations": [
      "Vrai. Les enzymes E1, E2 et E3 participent à l’ubiquitination.",
      "Vrai. La polyubiquitination permet la reconnaissance par le protéasome.",
      "Faux. Elles participent à la cascade d’ubiquitination.",
      "Faux. Il participe à leur dégradation."
    ]
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la protéolyse limitée et les zymogènes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "zymogen-cascade"
    },
    "choices": [
      "Les enzymes digestives sont toutes synthétisées directement sous forme active.",
      "La protéolyse limitée détruit toujours complètement l’enzyme.",
      "L’entéropeptidase active le trypsinogène en trypsine.",
      "La trypsine est la forme inactive du trypsinogène."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "L’activation en cascade des zymogènes digestifs permet une régulation par protéolyse limitée.",
    "choiceExplanations": [
      "Faux. Plusieurs sont synthétisées comme zymogènes.",
      "Faux. Elle active le précurseur par quelques clivages.",
      "Vrai. L’entéropeptidase active le trypsinogène en trypsine.",
      "Faux. Le trypsinogène est le précurseur inactif."
    ]
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’allostérie, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "allosteric-regulation"
    },
    "choices": [
      "La fixation de l’effecteur modifie la conformation de l’enzyme.",
      "Un effecteur allostérique peut être activateur ou inhibiteur.",
      "Un ligand allostérique se fixe obligatoirement dans le site actif.",
      "Une enzyme monomérique ne peut jamais être allostérique."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "L’allostérie couple la fixation d’un effecteur à un changement de conformation et d’activité.",
    "choiceExplanations": [
      "Vrai. La fixation de l’effecteur modifie la conformation de l’enzyme.",
      "Vrai. Un effecteur allostérique peut être activateur ou inhibiteur.",
      "Faux. Il se fixe sur un site régulateur distinct.",
      "Faux. La fiche présente un exemple monomérique."
    ]
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la régulation de la PKA par l’AMPc, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "pka-camp"
    },
    "choices": [
      "La PKA inactive associe sous-unités régulatrices et catalytiques.",
      "La PKA est activée par dégradation immédiate de ses sous-unités.",
      "Quatre molécules d’AMPc se fixent aux sous-unités régulatrices dans le schéma du cours.",
      "La sous-unité régulatrice catalyse directement toutes les phosphorylations."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’AMPc active la PKA en dissociant le complexe régulateur-catalytique.",
    "choiceExplanations": [
      "Vrai. La PKA inactive associe sous-unités régulatrices et catalytiques.",
      "Faux. Elle est activée par dissociation régulée.",
      "Vrai. Quatre molécules d’AMPc se fixent aux sous-unités régulatrices dans le schéma du cours.",
      "Faux. La catalyse est portée par les sous-unités catalytiques."
    ]
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la régulation par modification covalente, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "covalent-regulation"
    },
    "choices": [
      "Les modifications covalentes sont nécessairement irréversibles.",
      "L’acétylation utilise exclusivement le NADH comme donneur d’acétyle.",
      "Une modification covalente ajoute un groupement sur la partie protéique de l’enzyme.",
      "Une phosphorylation retire toujours un phosphate."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "Les modifications covalentes et les cascades de phosphorylation amplifient la régulation métabolique.",
    "choiceExplanations": [
      "Faux. Elles peuvent être réversibles selon les systèmes.",
      "Faux. L’acétyl-CoA est cité.",
      "Vrai. Une modification covalente ajoute un groupement sur la partie protéique de l’enzyme.",
      "Faux. Une kinase ajoute un phosphate."
    ]
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant l’ubiquitination et le protéasome, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ubiquitin-proteasome"
    },
    "choices": [
      "L’ubiquitine est une protéine de 76 acides aminés dans la fiche.",
      "La polyubiquitination permet la reconnaissance par le protéasome.",
      "E1, E2 et E3 sont les trois sous-unités de la chymotrypsine.",
      "La polyubiquitination protège toujours définitivement l’enzyme de la dégradation."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La stabilité de l’enzyme constitue un niveau de régulation grâce au ciblage ubiquitine-protéasome.",
    "choiceExplanations": [
      "Vrai. L’ubiquitine est une protéine de 76 acides aminés dans la fiche.",
      "Vrai. La polyubiquitination permet la reconnaissance par le protéasome.",
      "Faux. Elles participent à la cascade d’ubiquitination.",
      "Faux. Elle peut la cibler vers le protéasome."
    ]
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la protéolyse limitée et les zymogènes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "zymogen-cascade"
    },
    "choices": [
      "L’entéropeptidase transforme la trypsine en trypsinogène.",
      "La protéolyse limitée détruit toujours complètement l’enzyme.",
      "La trypsine active notamment chymotrypsinogène, proélastase et procarboxypeptidase.",
      "Un zymogène est un précurseur enzymatique inactif."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’activation en cascade des zymogènes digestifs permet une régulation par protéolyse limitée.",
    "choiceExplanations": [
      "Faux. Elle réalise la transformation inverse.",
      "Faux. Elle active le précurseur par quelques clivages.",
      "Vrai. La trypsine active notamment chymotrypsinogène, proélastase et procarboxypeptidase.",
      "Vrai. Un zymogène est un précurseur enzymatique inactif."
    ]
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’allostérie. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "allosteric-regulation"
    },
    "choices": [
      "Un ligand allostérique se fixe obligatoirement dans le site actif.",
      "Tous les effecteurs allostériques sont activateurs.",
      "Une enzyme allostérique possède un site régulateur distinct du site actif.",
      "La fixation de l’effecteur modifie la conformation de l’enzyme."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "L’allostérie couple la fixation d’un effecteur à un changement de conformation et d’activité.",
    "choiceExplanations": [
      "Faux. Il se fixe sur un site régulateur distinct.",
      "Faux. Ils peuvent aussi être inhibiteurs.",
      "Vrai. Une enzyme allostérique possède un site régulateur distinct du site actif.",
      "Vrai. La fixation de l’effecteur modifie la conformation de l’enzyme."
    ]
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la régulation de la PKA par l’AMPc. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "pka-camp"
    },
    "choices": [
      "La PKA est activée par dégradation immédiate de ses sous-unités.",
      "La libération rend les sites actifs accessibles.",
      "Quatre molécules d’AMPc se fixent aux sous-unités régulatrices dans le schéma du cours.",
      "La fixation de l’AMPc libère les sous-unités catalytiques."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’AMPc active la PKA en dissociant le complexe régulateur-catalytique.",
    "choiceExplanations": [
      "Faux. Elle est activée par dissociation régulée.",
      "Vrai. La libération rend les sites actifs accessibles.",
      "Vrai. Quatre molécules d’AMPc se fixent aux sous-unités régulatrices dans le schéma du cours.",
      "Vrai. La fixation de l’AMPc libère les sous-unités catalytiques."
    ]
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la régulation par modification covalente. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "covalent-regulation"
    },
    "choices": [
      "Les modifications covalentes sont nécessairement irréversibles.",
      "La PKA inactive directement la glycogène phosphorylase sans cascade.",
      "La phosphorylation est réalisée par une kinase.",
      "Adénylation, uridylation, ADP-ribosylation et acétylation sont citées."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les modifications covalentes et les cascades de phosphorylation amplifient la régulation métabolique.",
    "choiceExplanations": [
      "Faux. Elles peuvent être réversibles selon les systèmes.",
      "Faux. La fiche décrit une cascade de phosphorylations.",
      "Vrai. La phosphorylation est réalisée par une kinase.",
      "Vrai. Adénylation, uridylation, ADP-ribosylation et acétylation sont citées."
    ]
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’ubiquitination et le protéasome. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ubiquitin-proteasome"
    },
    "choices": [
      "E1, E2 et E3 sont les trois sous-unités de la chymotrypsine.",
      "La dégradation d’une enzyme diminue sa quantité et donc son activité globale.",
      "L’ubiquitine est une protéine de 76 acides aminés dans la fiche.",
      "Le protéasome synthétise les enzymes dénaturées."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La stabilité de l’enzyme constitue un niveau de régulation grâce au ciblage ubiquitine-protéasome.",
    "choiceExplanations": [
      "Faux. Elles participent à la cascade d’ubiquitination.",
      "Vrai. La dégradation d’une enzyme diminue sa quantité et donc son activité globale.",
      "Vrai. L’ubiquitine est une protéine de 76 acides aminés dans la fiche.",
      "Faux. Il participe à leur dégradation."
    ]
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans l’intestin, l’entéropeptidase déclenche une cascade d’activation d’enzymes digestives. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "zymogen-cascade"
    },
    "choices": [
      "La trypsine est la forme inactive du trypsinogène.",
      "Un zymogène est un précurseur enzymatique inactif.",
      "L’entéropeptidase transforme la trypsine en trypsinogène.",
      "La protéolyse limitée hydrolyse un petit nombre de liaisons peptidiques."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’activation en cascade des zymogènes digestifs permet une régulation par protéolyse limitée.",
    "choiceExplanations": [
      "Faux. Le trypsinogène est le précurseur inactif.",
      "Vrai. Un zymogène est un précurseur enzymatique inactif.",
      "Faux. Elle réalise la transformation inverse.",
      "Vrai. La protéolyse limitée hydrolyse un petit nombre de liaisons peptidiques."
    ]
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’allostérie. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "allosteric-regulation"
    },
    "choices": [
      "La fixation de l’effecteur modifie la conformation de l’enzyme.",
      "Une enzyme monomérique ne peut jamais être allostérique.",
      "Un effecteur allostérique peut être activateur ou inhibiteur.",
      "Une enzyme peut alterner entre formes active et inactive."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "L’allostérie couple la fixation d’un effecteur à un changement de conformation et d’activité.",
    "choiceExplanations": [
      "Vrai. La fixation de l’effecteur modifie la conformation de l’enzyme.",
      "Faux. La fiche présente un exemple monomérique.",
      "Vrai. Un effecteur allostérique peut être activateur ou inhibiteur.",
      "Vrai. Une enzyme peut alterner entre formes active et inactive."
    ]
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la régulation de la PKA par l’AMPc. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "pka-camp"
    },
    "choices": [
      "La PKA est activée par dégradation immédiate de ses sous-unités.",
      "La fixation de l’AMPc libère les sous-unités catalytiques.",
      "L’AMPc bloque irréversiblement les sites catalytiques de la PKA.",
      "Quatre molécules d’AMPc se fixent aux sous-unités régulatrices dans le schéma du cours."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’AMPc active la PKA en dissociant le complexe régulateur-catalytique.",
    "choiceExplanations": [
      "Faux. Elle est activée par dissociation régulée.",
      "Vrai. La fixation de l’AMPc libère les sous-unités catalytiques.",
      "Faux. Il libère les sous-unités catalytiques.",
      "Vrai. Quatre molécules d’AMPc se fixent aux sous-unités régulatrices dans le schéma du cours."
    ]
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la régulation par modification covalente. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "covalent-regulation"
    },
    "choices": [
      "La cascade PKA-phosphorylase kinase-glycogène phosphorylase favorise la mobilisation du glycogène.",
      "Adénylation, uridylation, ADP-ribosylation et acétylation sont citées.",
      "Une phosphorylation retire toujours un phosphate.",
      "L’acétylation utilise exclusivement le NADH comme donneur d’acétyle."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les modifications covalentes et les cascades de phosphorylation amplifient la régulation métabolique.",
    "choiceExplanations": [
      "Vrai. La cascade PKA-phosphorylase kinase-glycogène phosphorylase favorise la mobilisation du glycogène.",
      "Vrai. Adénylation, uridylation, ADP-ribosylation et acétylation sont citées.",
      "Faux. Une kinase ajoute un phosphate.",
      "Faux. L’acétyl-CoA est cité."
    ]
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à l’ubiquitination et le protéasome. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "ubiquitin-proteasome"
    },
    "choices": [
      "La polyubiquitination permet la reconnaissance par le protéasome.",
      "La polyubiquitination protège toujours définitivement l’enzyme de la dégradation.",
      "Les enzymes E1, E2 et E3 participent à l’ubiquitination.",
      "E1, E2 et E3 sont les trois sous-unités de la chymotrypsine."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La stabilité de l’enzyme constitue un niveau de régulation grâce au ciblage ubiquitine-protéasome.",
    "choiceExplanations": [
      "Vrai. La polyubiquitination permet la reconnaissance par le protéasome.",
      "Faux. Elle peut la cibler vers le protéasome.",
      "Vrai. Les enzymes E1, E2 et E3 participent à l’ubiquitination.",
      "Faux. Elles participent à la cascade d’ubiquitination."
    ]
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans l’intestin, l’entéropeptidase déclenche une cascade d’activation d’enzymes digestives. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "zymogen-cascade"
    },
    "choices": [
      "Les enzymes digestives sont toutes synthétisées directement sous forme active.",
      "L’entéropeptidase active le trypsinogène en trypsine.",
      "La protéolyse limitée hydrolyse un petit nombre de liaisons peptidiques.",
      "Un zymogène est un précurseur enzymatique inactif."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "L’activation en cascade des zymogènes digestifs permet une régulation par protéolyse limitée.",
    "choiceExplanations": [
      "Faux. Plusieurs sont synthétisées comme zymogènes.",
      "Vrai. L’entéropeptidase active le trypsinogène en trypsine.",
      "Vrai. La protéolyse limitée hydrolyse un petit nombre de liaisons peptidiques.",
      "Vrai. Un zymogène est un précurseur enzymatique inactif."
    ]
  }
];
