import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "31": [
    "les cofacteurs et l’holoenzyme"
  ],
  "32": [
    "les groupements prosthétiques et cofacteurs labiles"
  ],
  "33": [
    "les vitamines précurseurs de coenzymes"
  ],
  "34": [
    "la nomenclature et les classes EC"
  ],
  "35": [
    "les isoenzymes CK et LDH"
  ],
  "36": [
    "les cofacteurs et l’holoenzyme"
  ],
  "37": [
    "les groupements prosthétiques et cofacteurs labiles"
  ],
  "38": [
    "les vitamines précurseurs de coenzymes"
  ],
  "39": [
    "la nomenclature et les classes EC"
  ],
  "40": [
    "les isoenzymes CK et LDH"
  ],
  "41": [
    "les cofacteurs et l’holoenzyme"
  ],
  "42": [
    "les groupements prosthétiques et cofacteurs labiles"
  ],
  "43": [
    "les vitamines précurseurs de coenzymes"
  ],
  "44": [
    "la nomenclature et les classes EC"
  ],
  "45": [
    "les isoenzymes CK et LDH"
  ],
  "46": [
    "les cofacteurs et l’holoenzyme"
  ],
  "47": [
    "les groupements prosthétiques et cofacteurs labiles"
  ],
  "48": [
    "les vitamines précurseurs de coenzymes"
  ],
  "49": [
    "la nomenclature et les classes EC"
  ],
  "50": [
    "les isoenzymes CK et LDH"
  ],
  "51": [
    "les cofacteurs et l’holoenzyme"
  ],
  "52": [
    "les groupements prosthétiques et cofacteurs labiles"
  ],
  "53": [
    "les vitamines précurseurs de coenzymes"
  ],
  "54": [
    "la nomenclature et les classes EC"
  ],
  "55": [
    "les isoenzymes CK et LDH"
  ],
  "56": [
    "les cofacteurs et l’holoenzyme"
  ],
  "57": [
    "les groupements prosthétiques et cofacteurs labiles"
  ],
  "58": [
    "les vitamines précurseurs de coenzymes"
  ],
  "59": [
    "la nomenclature et les classes EC"
  ],
  "60": [
    "les isoenzymes CK et LDH"
  ]
};

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "cofacteurs-nomenclature-isoenzymes-1",
    "title": "Cofacteurs et coenzymes",
    "description": "Identifier les notions fondamentales de la section.",
    "stage": "DISCOVER",
    "sectionOrder": 2,
    "questionOrders": [
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40
    ]
  },
  {
    "order": 2,
    "slug": "cofacteurs-nomenclature-isoenzymes-2",
    "title": "Nomenclature et classification EC",
    "description": "Appliquer les définitions, classifications et relations du cours.",
    "stage": "PRACTICE",
    "sectionOrder": 2,
    "questionOrders": [
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50
    ]
  },
  {
    "order": 3,
    "slug": "cofacteurs-nomenclature-isoenzymes-3",
    "title": "Isoenzymes et applications tissulaires",
    "description": "Mobiliser les notions dans des raisonnements transversaux et des situations biologiques.",
    "stage": "MASTER",
    "sectionOrder": 2,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères fondamentaux",
        "sharedStatement": "Les questions suivantes mobilisent les repères essentiels de la section.",
        "questionOrders": [
          51,
          52,
          53
        ]
      },
      {
        "type": "GROUP",
        "title": "Mécanismes et relations",
        "sharedStatement": "Les questions suivantes relient les notions et mécanismes de la section.",
        "questionOrders": [
          54,
          55,
          56
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications biologiques",
        "sharedStatement": "Les questions suivantes replacent les notions dans une situation biologique, analytique ou médicale.",
        "questionOrders": [
          57,
          58,
          59,
          60
        ]
      }
    ]
  }
];

export const SECTION_B_QUESTIONS: SeedQuestion[] = [
  {
    "order": 31,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les cofacteurs et l’holoenzyme :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "apoenzyme-holoenzyme"
    },
    "choices": [
      "L’association apoenzyme-cofacteur constitue l’holoenzyme.",
      "L’apoenzyme désigne le cofacteur métallique.",
      "La partie protéique seule est appelée apoenzyme.",
      "La partie non protéique nécessaire est appelée cofacteur."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Certaines enzymes ne deviennent pleinement fonctionnelles qu’après association de leur apoenzyme à un cofacteur.",
    "choiceExplanations": [
      "Vrai. L’association apoenzyme-cofacteur constitue l’holoenzyme.",
      "Faux. Elle correspond à la partie protéique.",
      "Vrai. La partie protéique seule est appelée apoenzyme.",
      "Vrai. La partie non protéique nécessaire est appelée cofacteur."
    ]
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les groupements prosthétiques et cofacteurs labiles :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "prosthetic-labile"
    },
    "choices": [
      "Un groupement prosthétique est toujours libéré après chaque cycle.",
      "Le FAD est un ion métallique.",
      "Le FAD est cité comme groupement prosthétique de la cholestérol oxydase.",
      "Un cofacteur labile est mobile et peut être libéré après la réaction."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "La permanence de la liaison à l’enzyme distingue groupements prosthétiques et cofacteurs labiles.",
    "choiceExplanations": [
      "Faux. Il reste fixé à l’enzyme.",
      "Faux. C’est un coenzyme organique.",
      "Vrai. Le FAD est cité comme groupement prosthétique de la cholestérol oxydase.",
      "Vrai. Un cofacteur labile est mobile et peut être libéré après la réaction."
    ]
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les vitamines précurseurs de coenzymes :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "coenzyme-vitamins"
    },
    "choices": [
      "Les coenzymes NADH et NADPH dérivent de la vitamine B3 ou PP.",
      "Les coenzymes flaviniques dérivent de la vitamine B2.",
      "La biotine correspond à la vitamine B8 et intervient dans les transferts de CO₂.",
      "Le NADH est un dérivé de la vitamine B8."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Plusieurs vitamines hydrosolubles sont les précurseurs de coenzymes indispensables au métabolisme.",
    "choiceExplanations": [
      "Vrai. Les coenzymes NADH et NADPH dérivent de la vitamine B3 ou PP.",
      "Vrai. Les coenzymes flaviniques dérivent de la vitamine B2.",
      "Vrai. La biotine correspond à la vitamine B8 et intervient dans les transferts de CO₂.",
      "Faux. Il dérive de la vitamine B3 ou PP."
    ]
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la nomenclature et les classes EC :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nomenclature-ec"
    },
    "choices": [
      "Le premier nombre EC indique le grand type de réaction catalysée.",
      "Le suffixe habituel des enzymes est -ose.",
      "Le premier nombre EC désigne uniquement le tissu d’expression.",
      "La nomenclature fonctionnelle associe le substrat, le type de réaction et le suffixe -ase."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La nomenclature fonctionnelle décrit le substrat et la réaction; la nomenclature EC classe officiellement l’enzyme.",
    "choiceExplanations": [
      "Vrai. Le premier nombre EC indique le grand type de réaction catalysée.",
      "Faux. Le suffixe est -ase.",
      "Faux. Il désigne le type de réaction.",
      "Vrai. La nomenclature fonctionnelle associe le substrat, le type de réaction et le suffixe -ase."
    ]
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les isoenzymes CK et LDH :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "isoenzymes-ck-ldh"
    },
    "choices": [
      "CK-MB est associée au muscle cardiaque et CK-MM aux muscles squelettiques.",
      "La LDH possède quatre sous-unités H ou M et cinq isoenzymes possibles.",
      "CK-BB est préférentiellement exprimée dans les tissus nerveux.",
      "CK-MM associe une sous-unité M et une sous-unité B."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les profils d’isoenzymes reflètent des structures et expressions tissulaires différentes pour une même activité catalytique.",
    "choiceExplanations": [
      "Vrai. CK-MB est associée au muscle cardiaque et CK-MM aux muscles squelettiques.",
      "Vrai. La LDH possède quatre sous-unités H ou M et cinq isoenzymes possibles.",
      "Vrai. CK-BB est préférentiellement exprimée dans les tissus nerveux.",
      "Faux. Elle associe deux sous-unités M."
    ]
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les cofacteurs et l’holoenzyme :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "apoenzyme-holoenzyme"
    },
    "choices": [
      "Un cofacteur organique est appelé coenzyme.",
      "La partie protéique seule est appelée apoenzyme.",
      "L’apoenzyme désigne le cofacteur métallique.",
      "Une holoenzyme est une enzyme privée de son cofacteur."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Certaines enzymes ne deviennent pleinement fonctionnelles qu’après association de leur apoenzyme à un cofacteur.",
    "choiceExplanations": [
      "Vrai. Un cofacteur organique est appelé coenzyme.",
      "Vrai. La partie protéique seule est appelée apoenzyme.",
      "Faux. Elle correspond à la partie protéique.",
      "Faux. Elle associe apoenzyme et cofacteur."
    ]
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les groupements prosthétiques et cofacteurs labiles :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "prosthetic-labile"
    },
    "choices": [
      "Le FAD est cité comme groupement prosthétique de la cholestérol oxydase.",
      "Un cofacteur labile est mobile et peut être libéré après la réaction.",
      "Un groupement prosthétique reste fixé en permanence à l’enzyme.",
      "Un groupement prosthétique est toujours libéré après chaque cycle."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La permanence de la liaison à l’enzyme distingue groupements prosthétiques et cofacteurs labiles.",
    "choiceExplanations": [
      "Vrai. Le FAD est cité comme groupement prosthétique de la cholestérol oxydase.",
      "Vrai. Un cofacteur labile est mobile et peut être libéré après la réaction.",
      "Vrai. Un groupement prosthétique reste fixé en permanence à l’enzyme.",
      "Faux. Il reste fixé à l’enzyme."
    ]
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les vitamines précurseurs de coenzymes :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "coenzyme-vitamins"
    },
    "choices": [
      "Les coenzymes flaviniques dérivent de la vitamine B2.",
      "Le FAD dérive de la vitamine B12 dans la fiche.",
      "Le PLP dérive de la vitamine B1.",
      "Le phosphate de pyridoxal dérive de la vitamine B6."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Plusieurs vitamines hydrosolubles sont les précurseurs de coenzymes indispensables au métabolisme.",
    "choiceExplanations": [
      "Vrai. Les coenzymes flaviniques dérivent de la vitamine B2.",
      "Faux. Il dérive de la vitamine B2.",
      "Faux. Il dérive de la vitamine B6.",
      "Vrai. Le phosphate de pyridoxal dérive de la vitamine B6."
    ]
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de la nomenclature et les classes EC :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nomenclature-ec"
    },
    "choices": [
      "Le suffixe habituel des enzymes est -ose.",
      "La nomenclature fonctionnelle associe le substrat, le type de réaction et le suffixe -ase.",
      "Le numéro EC comporte quatre nombres.",
      "Le premier nombre EC indique le grand type de réaction catalysée."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La nomenclature fonctionnelle décrit le substrat et la réaction; la nomenclature EC classe officiellement l’enzyme.",
    "choiceExplanations": [
      "Faux. Le suffixe est -ase.",
      "Vrai. La nomenclature fonctionnelle associe le substrat, le type de réaction et le suffixe -ase.",
      "Vrai. Le numéro EC comporte quatre nombres.",
      "Vrai. Le premier nombre EC indique le grand type de réaction catalysée."
    ]
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les isoenzymes CK et LDH :",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "isoenzymes-ck-ldh"
    },
    "choices": [
      "La LDH possède quatre sous-unités H ou M et cinq isoenzymes possibles.",
      "CK-MM associe une sous-unité M et une sous-unité B.",
      "La LDH ne possède qu’une seule combinaison de sous-unités.",
      "CK-MB est associée au muscle cardiaque et CK-MM aux muscles squelettiques."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les profils d’isoenzymes reflètent des structures et expressions tissulaires différentes pour une même activité catalytique.",
    "choiceExplanations": [
      "Vrai. La LDH possède quatre sous-unités H ou M et cinq isoenzymes possibles.",
      "Faux. Elle associe deux sous-unités M.",
      "Faux. Les sous-unités H et M permettent cinq isoenzymes.",
      "Vrai. CK-MB est associée au muscle cardiaque et CK-MM aux muscles squelettiques."
    ]
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les cofacteurs et l’holoenzyme, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "apoenzyme-holoenzyme"
    },
    "choices": [
      "Le terme coenzyme est réservé aux ions métalliques.",
      "L’apoenzyme désigne le cofacteur métallique.",
      "L’association apoenzyme-cofacteur constitue l’holoenzyme.",
      "La partie non protéique nécessaire est appelée cofacteur."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Certaines enzymes ne deviennent pleinement fonctionnelles qu’après association de leur apoenzyme à un cofacteur.",
    "choiceExplanations": [
      "Faux. Il désigne les cofacteurs organiques.",
      "Faux. Elle correspond à la partie protéique.",
      "Vrai. L’association apoenzyme-cofacteur constitue l’holoenzyme.",
      "Vrai. La partie non protéique nécessaire est appelée cofacteur."
    ]
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les groupements prosthétiques et cofacteurs labiles, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "prosthetic-labile"
    },
    "choices": [
      "Un cofacteur labile ne peut jamais être régénéré.",
      "Le NAD⁺ est décrit comme fixé en permanence à l’aldose réductase.",
      "Le FAD est cité comme groupement prosthétique de la cholestérol oxydase.",
      "Le FAD est un ion métallique."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "La permanence de la liaison à l’enzyme distingue groupements prosthétiques et cofacteurs labiles.",
    "choiceExplanations": [
      "Faux. Il est libéré puis régénéré.",
      "Faux. Il est présenté comme un cofacteur labile.",
      "Vrai. Le FAD est cité comme groupement prosthétique de la cholestérol oxydase.",
      "Faux. C’est un coenzyme organique."
    ]
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les vitamines précurseurs de coenzymes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "coenzyme-vitamins"
    },
    "choices": [
      "Le PLP dérive de la vitamine B1.",
      "Le phosphate de pyridoxal dérive de la vitamine B6.",
      "Les coenzymes flaviniques dérivent de la vitamine B2.",
      "Le NADH est un dérivé de la vitamine B8."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Plusieurs vitamines hydrosolubles sont les précurseurs de coenzymes indispensables au métabolisme.",
    "choiceExplanations": [
      "Faux. Il dérive de la vitamine B6.",
      "Vrai. Le phosphate de pyridoxal dérive de la vitamine B6.",
      "Vrai. Les coenzymes flaviniques dérivent de la vitamine B2.",
      "Faux. Il dérive de la vitamine B3 ou PP."
    ]
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la nomenclature et les classes EC, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nomenclature-ec"
    },
    "choices": [
      "Le premier nombre EC indique le grand type de réaction catalysée.",
      "Le suffixe habituel des enzymes est -ose.",
      "La nomenclature fonctionnelle associe le substrat, le type de réaction et le suffixe -ase.",
      "Les ligases ne nécessitent jamais d’énergie."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La nomenclature fonctionnelle décrit le substrat et la réaction; la nomenclature EC classe officiellement l’enzyme.",
    "choiceExplanations": [
      "Vrai. Le premier nombre EC indique le grand type de réaction catalysée.",
      "Faux. Le suffixe est -ase.",
      "Vrai. La nomenclature fonctionnelle associe le substrat, le type de réaction et le suffixe -ase.",
      "Faux. Elles utilisent généralement l’hydrolyse d’ATP ou d’un nucléotide."
    ]
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les isoenzymes CK et LDH, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "isoenzymes-ck-ldh"
    },
    "choices": [
      "La LDH possède quatre sous-unités H ou M et cinq isoenzymes possibles.",
      "CK-MM associe une sous-unité M et une sous-unité B.",
      "LDH1 est surtout hépatique et musculaire dans la fiche.",
      "Des isoenzymes catalysent nécessairement des réactions différentes."
    ],
    "correctChoiceIndexes": [
      0
    ],
    "explanation": "Les profils d’isoenzymes reflètent des structures et expressions tissulaires différentes pour une même activité catalytique.",
    "choiceExplanations": [
      "Vrai. La LDH possède quatre sous-unités H ou M et cinq isoenzymes possibles.",
      "Faux. Elle associe deux sous-unités M.",
      "Faux. LDH1 est surtout cardiaque.",
      "Faux. Elles catalysent la même réaction."
    ]
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les cofacteurs et l’holoenzyme, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "apoenzyme-holoenzyme"
    },
    "choices": [
      "Tous les cofacteurs sont des protéines.",
      "La partie non protéique nécessaire est appelée cofacteur.",
      "La partie protéique seule est appelée apoenzyme.",
      "Le terme coenzyme est réservé aux ions métalliques."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Certaines enzymes ne deviennent pleinement fonctionnelles qu’après association de leur apoenzyme à un cofacteur.",
    "choiceExplanations": [
      "Faux. Ils sont non protéiques.",
      "Vrai. La partie non protéique nécessaire est appelée cofacteur.",
      "Vrai. La partie protéique seule est appelée apoenzyme.",
      "Faux. Il désigne les cofacteurs organiques."
    ]
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les groupements prosthétiques et cofacteurs labiles, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "prosthetic-labile"
    },
    "choices": [
      "Un cofacteur labile ne peut jamais être régénéré.",
      "Un cofacteur labile est mobile et peut être libéré après la réaction.",
      "Un groupement prosthétique est toujours libéré après chaque cycle.",
      "Le NAD⁺ est cité comme coenzyme labile associé à l’aldose réductase."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La permanence de la liaison à l’enzyme distingue groupements prosthétiques et cofacteurs labiles.",
    "choiceExplanations": [
      "Faux. Il est libéré puis régénéré.",
      "Vrai. Un cofacteur labile est mobile et peut être libéré après la réaction.",
      "Faux. Il reste fixé à l’enzyme.",
      "Vrai. Le NAD⁺ est cité comme coenzyme labile associé à l’aldose réductase."
    ]
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les vitamines précurseurs de coenzymes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "coenzyme-vitamins"
    },
    "choices": [
      "Le FAD dérive de la vitamine B12 dans la fiche.",
      "Le PLP dérive de la vitamine B1.",
      "Le NADH est un dérivé de la vitamine B8.",
      "Les coenzymes flaviniques dérivent de la vitamine B2."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "Plusieurs vitamines hydrosolubles sont les précurseurs de coenzymes indispensables au métabolisme.",
    "choiceExplanations": [
      "Faux. Il dérive de la vitamine B2.",
      "Faux. Il dérive de la vitamine B6.",
      "Faux. Il dérive de la vitamine B3 ou PP.",
      "Vrai. Les coenzymes flaviniques dérivent de la vitamine B2."
    ]
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant la nomenclature et les classes EC, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nomenclature-ec"
    },
    "choices": [
      "Les six classes du cours sont oxydoréductases, transférases, hydrolases, lyases, isomérases et ligases.",
      "Les ligases ne nécessitent jamais d’énergie.",
      "Le numéro EC comporte quatre nombres.",
      "Les hydrolases créent une liaison entre deux molécules avec consommation d’ATP."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La nomenclature fonctionnelle décrit le substrat et la réaction; la nomenclature EC classe officiellement l’enzyme.",
    "choiceExplanations": [
      "Vrai. Les six classes du cours sont oxydoréductases, transférases, hydrolases, lyases, isomérases et ligases.",
      "Faux. Elles utilisent généralement l’hydrolyse d’ATP ou d’un nucléotide.",
      "Vrai. Le numéro EC comporte quatre nombres.",
      "Faux. Elles coupent une liaison par hydrolyse."
    ]
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les isoenzymes CK et LDH, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "isoenzymes-ck-ldh"
    },
    "choices": [
      "La LDH possède quatre sous-unités H ou M et cinq isoenzymes possibles.",
      "LDH1 est surtout hépatique et musculaire dans la fiche.",
      "Des isoenzymes ont des structures différentes mais catalysent la même réaction.",
      "Des isoenzymes catalysent nécessairement des réactions différentes."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les profils d’isoenzymes reflètent des structures et expressions tissulaires différentes pour une même activité catalytique.",
    "choiceExplanations": [
      "Vrai. La LDH possède quatre sous-unités H ou M et cinq isoenzymes possibles.",
      "Faux. LDH1 est surtout cardiaque.",
      "Vrai. Des isoenzymes ont des structures différentes mais catalysent la même réaction.",
      "Faux. Elles catalysent la même réaction."
    ]
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les cofacteurs et l’holoenzyme. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "apoenzyme-holoenzyme"
    },
    "choices": [
      "Une holoenzyme est une enzyme privée de son cofacteur.",
      "Tous les cofacteurs sont des protéines.",
      "La partie protéique seule est appelée apoenzyme.",
      "L’association apoenzyme-cofacteur constitue l’holoenzyme."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Certaines enzymes ne deviennent pleinement fonctionnelles qu’après association de leur apoenzyme à un cofacteur.",
    "choiceExplanations": [
      "Faux. Elle associe apoenzyme et cofacteur.",
      "Faux. Ils sont non protéiques.",
      "Vrai. La partie protéique seule est appelée apoenzyme.",
      "Vrai. L’association apoenzyme-cofacteur constitue l’holoenzyme."
    ]
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les groupements prosthétiques et cofacteurs labiles. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "prosthetic-labile"
    },
    "choices": [
      "Un cofacteur labile est mobile et peut être libéré après la réaction.",
      "Un groupement prosthétique reste fixé en permanence à l’enzyme.",
      "Le NAD⁺ est cité comme coenzyme labile associé à l’aldose réductase.",
      "Le FAD est un ion métallique."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "La permanence de la liaison à l’enzyme distingue groupements prosthétiques et cofacteurs labiles.",
    "choiceExplanations": [
      "Vrai. Un cofacteur labile est mobile et peut être libéré après la réaction.",
      "Vrai. Un groupement prosthétique reste fixé en permanence à l’enzyme.",
      "Vrai. Le NAD⁺ est cité comme coenzyme labile associé à l’aldose réductase.",
      "Faux. C’est un coenzyme organique."
    ]
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les vitamines précurseurs de coenzymes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "coenzyme-vitamins"
    },
    "choices": [
      "La biotine correspond à la vitamine B8 et intervient dans les transferts de CO₂.",
      "Le NADH est un dérivé de la vitamine B8.",
      "Le phosphate de pyridoxal dérive de la vitamine B6.",
      "Le FAD dérive de la vitamine B12 dans la fiche."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Plusieurs vitamines hydrosolubles sont les précurseurs de coenzymes indispensables au métabolisme.",
    "choiceExplanations": [
      "Vrai. La biotine correspond à la vitamine B8 et intervient dans les transferts de CO₂.",
      "Faux. Il dérive de la vitamine B3 ou PP.",
      "Vrai. Le phosphate de pyridoxal dérive de la vitamine B6.",
      "Faux. Il dérive de la vitamine B2."
    ]
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la nomenclature et les classes EC. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nomenclature-ec"
    },
    "choices": [
      "Les six classes du cours sont oxydoréductases, transférases, hydrolases, lyases, isomérases et ligases.",
      "Le premier nombre EC indique le grand type de réaction catalysée.",
      "Le premier nombre EC désigne uniquement le tissu d’expression.",
      "Les hydrolases créent une liaison entre deux molécules avec consommation d’ATP."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "La nomenclature fonctionnelle décrit le substrat et la réaction; la nomenclature EC classe officiellement l’enzyme.",
    "choiceExplanations": [
      "Vrai. Les six classes du cours sont oxydoréductases, transférases, hydrolases, lyases, isomérases et ligases.",
      "Vrai. Le premier nombre EC indique le grand type de réaction catalysée.",
      "Faux. Il désigne le type de réaction.",
      "Faux. Elles coupent une liaison par hydrolyse."
    ]
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une analyse compare les isoenzymes de créatine kinase et de lactate déshydrogénase dans plusieurs tissus. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "isoenzymes-ck-ldh"
    },
    "choices": [
      "LDH1 est surtout hépatique et musculaire dans la fiche.",
      "Des isoenzymes ont des structures différentes mais catalysent la même réaction.",
      "CK-MM associe une sous-unité M et une sous-unité B.",
      "CK-MB est associée au muscle cardiaque et CK-MM aux muscles squelettiques."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les profils d’isoenzymes reflètent des structures et expressions tissulaires différentes pour une même activité catalytique.",
    "choiceExplanations": [
      "Faux. LDH1 est surtout cardiaque.",
      "Vrai. Des isoenzymes ont des structures différentes mais catalysent la même réaction.",
      "Faux. Elle associe deux sous-unités M.",
      "Vrai. CK-MB est associée au muscle cardiaque et CK-MM aux muscles squelettiques."
    ]
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les cofacteurs et l’holoenzyme. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "apoenzyme-holoenzyme"
    },
    "choices": [
      "Un cofacteur organique est appelé coenzyme.",
      "La partie protéique seule est appelée apoenzyme.",
      "La partie non protéique nécessaire est appelée cofacteur.",
      "Le terme coenzyme est réservé aux ions métalliques."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Certaines enzymes ne deviennent pleinement fonctionnelles qu’après association de leur apoenzyme à un cofacteur.",
    "choiceExplanations": [
      "Vrai. Un cofacteur organique est appelé coenzyme.",
      "Vrai. La partie protéique seule est appelée apoenzyme.",
      "Vrai. La partie non protéique nécessaire est appelée cofacteur.",
      "Faux. Il désigne les cofacteurs organiques."
    ]
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les groupements prosthétiques et cofacteurs labiles. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "prosthetic-labile"
    },
    "choices": [
      "Un groupement prosthétique reste fixé en permanence à l’enzyme.",
      "Un groupement prosthétique est toujours libéré après chaque cycle.",
      "Le FAD est un ion métallique.",
      "Le FAD est cité comme groupement prosthétique de la cholestérol oxydase."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La permanence de la liaison à l’enzyme distingue groupements prosthétiques et cofacteurs labiles.",
    "choiceExplanations": [
      "Vrai. Un groupement prosthétique reste fixé en permanence à l’enzyme.",
      "Faux. Il reste fixé à l’enzyme.",
      "Faux. C’est un coenzyme organique.",
      "Vrai. Le FAD est cité comme groupement prosthétique de la cholestérol oxydase."
    ]
  },
  {
    "order": 58,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les vitamines précurseurs de coenzymes. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "coenzyme-vitamins"
    },
    "choices": [
      "Le NADH est un dérivé de la vitamine B8.",
      "Les coenzymes flaviniques dérivent de la vitamine B2.",
      "Les coenzymes NADH et NADPH dérivent de la vitamine B3 ou PP.",
      "Le PLP dérive de la vitamine B1."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Plusieurs vitamines hydrosolubles sont les précurseurs de coenzymes indispensables au métabolisme.",
    "choiceExplanations": [
      "Faux. Il dérive de la vitamine B3 ou PP.",
      "Vrai. Les coenzymes flaviniques dérivent de la vitamine B2.",
      "Vrai. Les coenzymes NADH et NADPH dérivent de la vitamine B3 ou PP.",
      "Faux. Il dérive de la vitamine B6."
    ]
  },
  {
    "order": 59,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à la nomenclature et les classes EC. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "enzyme-nomenclature-ec"
    },
    "choices": [
      "Les hydrolases créent une liaison entre deux molécules avec consommation d’ATP.",
      "Les six classes du cours sont oxydoréductases, transférases, hydrolases, lyases, isomérases et ligases.",
      "Le premier nombre EC désigne uniquement le tissu d’expression.",
      "Le premier nombre EC indique le grand type de réaction catalysée."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La nomenclature fonctionnelle décrit le substrat et la réaction; la nomenclature EC classe officiellement l’enzyme.",
    "choiceExplanations": [
      "Faux. Elles coupent une liaison par hydrolyse.",
      "Vrai. Les six classes du cours sont oxydoréductases, transférases, hydrolases, lyases, isomérases et ligases.",
      "Faux. Il désigne le type de réaction.",
      "Vrai. Le premier nombre EC indique le grand type de réaction catalysée."
    ]
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une analyse compare les isoenzymes de créatine kinase et de lactate déshydrogénase dans plusieurs tissus. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "enzyme",
      "diagram": "isoenzymes-ck-ldh"
    },
    "choices": [
      "CK-BB est préférentiellement exprimée dans les tissus nerveux.",
      "La LDH possède quatre sous-unités H ou M et cinq isoenzymes possibles.",
      "Des isoenzymes catalysent nécessairement des réactions différentes.",
      "Des isoenzymes ont des structures différentes mais catalysent la même réaction."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les profils d’isoenzymes reflètent des structures et expressions tissulaires différentes pour une même activité catalytique.",
    "choiceExplanations": [
      "Vrai. CK-BB est préférentiellement exprimée dans les tissus nerveux.",
      "Vrai. La LDH possède quatre sous-unités H ou M et cinq isoenzymes possibles.",
      "Faux. Elles catalysent la même réaction.",
      "Vrai. Des isoenzymes ont des structures différentes mais catalysent la même réaction."
    ]
  }
];
