import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_B_ORDER = 2;

export const SECTION_B_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "31": [
    "les récepteurs cellulaires"
  ],
  "32": [
    "les récepteurs nucléaires"
  ],
  "33": [
    "les récepteurs métabotropiques"
  ],
  "34": [
    "le récepteur à l’insuline"
  ],
  "35": [
    "les RCPG et la rhodopsine"
  ],
  "36": [
    "les récepteurs cellulaires"
  ],
  "37": [
    "les récepteurs nucléaires"
  ],
  "38": [
    "les récepteurs métabotropiques"
  ],
  "39": [
    "le récepteur à l’insuline"
  ],
  "40": [
    "les RCPG et la rhodopsine"
  ],
  "41": [
    "les récepteurs cellulaires"
  ],
  "42": [
    "les récepteurs nucléaires"
  ],
  "43": [
    "les récepteurs métabotropiques"
  ],
  "44": [
    "le récepteur à l’insuline"
  ],
  "45": [
    "les RCPG et la rhodopsine"
  ],
  "46": [
    "les récepteurs cellulaires"
  ],
  "47": [
    "les récepteurs nucléaires"
  ],
  "48": [
    "les récepteurs métabotropiques"
  ],
  "49": [
    "le récepteur à l’insuline"
  ],
  "50": [
    "les RCPG et la rhodopsine"
  ],
  "51": [
    "les récepteurs cellulaires"
  ],
  "52": [
    "les récepteurs nucléaires"
  ],
  "53": [
    "les récepteurs métabotropiques"
  ],
  "54": [
    "le récepteur à l’insuline"
  ],
  "55": [
    "les RCPG et la rhodopsine"
  ],
  "56": [
    "les récepteurs cellulaires"
  ],
  "57": [
    "les récepteurs nucléaires"
  ],
  "58": [
    "les récepteurs métabotropiques"
  ],
  "59": [
    "le récepteur à l’insuline"
  ],
  "60": [
    "les RCPG et la rhodopsine"
  ]
};

export const SECTION_B_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "recepteurs-metabotropiques-1",
    "title": "Récepteurs nucléaires et membranaires",
    "description": "Identifier les notions essentielles.",
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
    "slug": "recepteurs-metabotropiques-2",
    "title": "Récepteur à l’insuline et RCPG",
    "description": "Appliquer et comparer les notions du cours.",
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
    "slug": "recepteurs-metabotropiques-3",
    "title": "Rhodopsine et signalisation",
    "description": "Mobiliser les notions dans des raisonnements transversaux.",
    "stage": "MASTER",
    "sectionOrder": 2,
    "items": [
      {
        "type": "GROUP",
        "title": "Repères essentiels",
        "sharedStatement": "Les questions suivantes portent sur les principaux repères de la section.",
        "questionOrders": [
          51,
          52,
          53
        ]
      },
      {
        "type": "GROUP",
        "title": "Structure et fonction",
        "sharedStatement": "Les questions suivantes relient structure, propriétés et fonctions biologiques.",
        "questionOrders": [
          54,
          55,
          56
        ]
      },
      {
        "type": "GROUP",
        "title": "Applications",
        "sharedStatement": "Les questions suivantes mobilisent les notions dans des situations biologiques ou médicales.",
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
    "question": "À propos de les récepteurs cellulaires :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "receptor-general"
    },
    "choices": [
      "Ils transmettent un message modifiant le comportement cellulaire.",
      "Les récepteurs peuvent être nucléaires, membranaires ou associés à d’autres compartiments.",
      "Tous les récepteurs sont solubles dans le sang.",
      "Ils fixent un ou plusieurs ligands."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les récepteurs convertissent la reconnaissance d’un ligand en réponse cellulaire.",
    "choiceExplanations": [
      "Vrai. Ils transmettent un message modifiant le comportement cellulaire.",
      "Vrai. Les récepteurs peuvent être nucléaires, membranaires ou associés à d’autres compartiments.",
      "Faux. Beaucoup sont membranaires ou intracellulaires.",
      "Vrai. Ils fixent un ou plusieurs ligands."
    ]
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les récepteurs nucléaires :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "nuclear-receptor"
    },
    "choices": [
      "Ils sont exclusivement des canaux ioniques membranaires.",
      "Ils se lient à l’ADN comme facteurs de transcription.",
      "Après fixation du ligand, ils peuvent se dimériser.",
      "Leurs ligands sont nécessairement hydrophiles et incapables de traverser une membrane."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les récepteurs nucléaires régulent directement la transcription après liaison de ligands lipophiles.",
    "choiceExplanations": [
      "Faux. Ils sont intracellulaires.",
      "Vrai. Ils se lient à l’ADN comme facteurs de transcription.",
      "Vrai. Après fixation du ligand, ils peuvent se dimériser.",
      "Faux. Plusieurs ligands sont lipophiles."
    ]
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les récepteurs métabotropiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "metabotropic-receptor"
    },
    "choices": [
      "Certains possèdent une activité enzymatique intrinsèque.",
      "La même molécule assure toujours directement la fonction de canal.",
      "Les fonctions réceptrice et effectrice sont portées par des molécules différentes.",
      "La transmission utilise un second messager chimique ou enzymatique."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les récepteurs métabotropiques activent une cascade distincte de la simple ouverture d’un canal.",
    "choiceExplanations": [
      "Vrai. Certains possèdent une activité enzymatique intrinsèque.",
      "Faux. Cela correspond plutôt aux ionotropiques.",
      "Vrai. Les fonctions réceptrice et effectrice sont portées par des molécules différentes.",
      "Vrai. La transmission utilise un second messager chimique ou enzymatique."
    ]
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le récepteur à l’insuline :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-receptor"
    },
    "choices": [
      "La fixation de l’insuline ne provoque aucune phosphorylation.",
      "La voie IRS/PI3K/PIP3/PKB module le métabolisme et la survie cellulaire.",
      "Le récepteur à l’insuline est un canal chlorure pentamérique.",
      "Il est un hétérotétramère associant deux chaînes α et deux chaînes β."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le récepteur à l’insuline est un récepteur kinase hétérotétramérique.",
    "choiceExplanations": [
      "Faux. Elle déclenche des phosphorylations de tyrosines.",
      "Vrai. La voie IRS/PI3K/PIP3/PKB module le métabolisme et la survie cellulaire.",
      "Faux. C’est un récepteur à activité tyrosine kinase.",
      "Vrai. Il est un hétérotétramère associant deux chaînes α et deux chaînes β."
    ]
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les RCPG et la rhodopsine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "gpcr-rhodopsin"
    },
    "choices": [
      "Ils activent une protéine G dépendante du GTP.",
      "Les RCPG possèdent une seule traversée membranaire.",
      "La rhodopsine contient du 11-cis-rétinal.",
      "Les RCPG possèdent sept traversées membranaires en hélice α."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les RCPG transmettent des signaux très variés; la rhodopsine illustre la phototransduction.",
    "choiceExplanations": [
      "Vrai. Ils activent une protéine G dépendante du GTP.",
      "Faux. Ils en possèdent sept.",
      "Vrai. La rhodopsine contient du 11-cis-rétinal.",
      "Vrai. Les RCPG possèdent sept traversées membranaires en hélice α."
    ]
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les récepteurs cellulaires :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "receptor-general"
    },
    "choices": [
      "Ils fixent un ou plusieurs ligands.",
      "Les récepteurs peuvent être nucléaires, membranaires ou associés à d’autres compartiments.",
      "Un récepteur ne fixe jamais de ligand.",
      "Les récepteurs ne modifient jamais le comportement cellulaire."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les récepteurs convertissent la reconnaissance d’un ligand en réponse cellulaire.",
    "choiceExplanations": [
      "Vrai. Ils fixent un ou plusieurs ligands.",
      "Vrai. Les récepteurs peuvent être nucléaires, membranaires ou associés à d’autres compartiments.",
      "Faux. La fixation du ligand déclenche sa fonction.",
      "Faux. Ils transmettent des signaux régulateurs."
    ]
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les récepteurs nucléaires :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "nuclear-receptor"
    },
    "choices": [
      "Leurs ligands comprennent hormones stéroïdiennes, thyroïdiennes, vitamine D et acide rétinoïque.",
      "Ils se lient à l’ADN comme facteurs de transcription.",
      "Après fixation du ligand, ils peuvent se dimériser.",
      "Tous possèdent un ligand connu."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les récepteurs nucléaires régulent directement la transcription après liaison de ligands lipophiles.",
    "choiceExplanations": [
      "Vrai. Leurs ligands comprennent hormones stéroïdiennes, thyroïdiennes, vitamine D et acide rétinoïque.",
      "Vrai. Ils se lient à l’ADN comme facteurs de transcription.",
      "Vrai. Après fixation du ligand, ils peuvent se dimériser.",
      "Faux. Certains sont dits orphelins."
    ]
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les récepteurs métabotropiques :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "metabotropic-receptor"
    },
    "choices": [
      "Certains possèdent une activité enzymatique intrinsèque.",
      "Les récepteurs à activité tyrosine kinase appartiennent à cette catégorie.",
      "La même molécule assure toujours directement la fonction de canal.",
      "Aucun second messager n’intervient."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les récepteurs métabotropiques activent une cascade distincte de la simple ouverture d’un canal.",
    "choiceExplanations": [
      "Vrai. Certains possèdent une activité enzymatique intrinsèque.",
      "Vrai. Les récepteurs à activité tyrosine kinase appartiennent à cette catégorie.",
      "Faux. Cela correspond plutôt aux ionotropiques.",
      "Faux. Le second messager caractérise la signalisation métabotropique."
    ]
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de le récepteur à l’insuline :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-receptor"
    },
    "choices": [
      "Les chaînes β portent le domaine transmembranaire et tyrosine kinase.",
      "La voie IRS/PI3K/PIP3/PKB module le métabolisme et la survie cellulaire.",
      "La fixation de l’insuline ne provoque aucune phosphorylation.",
      "Les chaînes α sont extracellulaires."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Le récepteur à l’insuline est un récepteur kinase hétérotétramérique.",
    "choiceExplanations": [
      "Vrai. Les chaînes β portent le domaine transmembranaire et tyrosine kinase.",
      "Vrai. La voie IRS/PI3K/PIP3/PKB module le métabolisme et la survie cellulaire.",
      "Faux. Elle déclenche des phosphorylations de tyrosines.",
      "Vrai. Les chaînes α sont extracellulaires."
    ]
  },
  {
    "order": 40,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de les RCPG et la rhodopsine :",
    "questionDiagram": {
      "type": "protein",
      "diagram": "gpcr-rhodopsin"
    },
    "choices": [
      "La rhodopsine est un récepteur nucléaire.",
      "L’absorption d’un photon ne modifie pas la conformation.",
      "Ils activent une protéine G dépendante du GTP.",
      "Les RCPG possèdent sept traversées membranaires en hélice α."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les RCPG transmettent des signaux très variés; la rhodopsine illustre la phototransduction.",
    "choiceExplanations": [
      "Faux. C’est un RCPG des bâtonnets.",
      "Faux. Elle déclenche une isomérisation et une cascade.",
      "Vrai. Ils activent une protéine G dépendante du GTP.",
      "Vrai. Les RCPG possèdent sept traversées membranaires en hélice α."
    ]
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les récepteurs cellulaires, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "receptor-general"
    },
    "choices": [
      "Tous les récepteurs sont solubles dans le sang.",
      "Ils fixent un ou plusieurs ligands.",
      "Un récepteur membranaire possède des domaines extracellulaire, transmembranaire et cytoplasmique.",
      "Le domaine extracellulaire transmet directement le signal au noyau sans autre domaine."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les récepteurs convertissent la reconnaissance d’un ligand en réponse cellulaire.",
    "choiceExplanations": [
      "Faux. Beaucoup sont membranaires ou intracellulaires.",
      "Vrai. Ils fixent un ou plusieurs ligands.",
      "Vrai. Un récepteur membranaire possède des domaines extracellulaire, transmembranaire et cytoplasmique.",
      "Faux. Le récepteur possède plusieurs domaines fonctionnels."
    ]
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les récepteurs nucléaires, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "nuclear-receptor"
    },
    "choices": [
      "Ils sont exclusivement des canaux ioniques membranaires.",
      "Tous possèdent un ligand connu.",
      "Ils se lient à l’ADN comme facteurs de transcription.",
      "Après fixation du ligand, ils peuvent se dimériser."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les récepteurs nucléaires régulent directement la transcription après liaison de ligands lipophiles.",
    "choiceExplanations": [
      "Faux. Ils sont intracellulaires.",
      "Faux. Certains sont dits orphelins.",
      "Vrai. Ils se lient à l’ADN comme facteurs de transcription.",
      "Vrai. Après fixation du ligand, ils peuvent se dimériser."
    ]
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les récepteurs métabotropiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "metabotropic-receptor"
    },
    "choices": [
      "Ils ne sont jamais membranaires.",
      "Les récepteurs à activité tyrosine kinase appartiennent à cette catégorie.",
      "Les fonctions réceptrice et effectrice sont portées par des molécules différentes.",
      "Une activité tyrosine kinase est incompatible avec un récepteur."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les récepteurs métabotropiques activent une cascade distincte de la simple ouverture d’un canal.",
    "choiceExplanations": [
      "Faux. Une grande famille est membranaire.",
      "Vrai. Les récepteurs à activité tyrosine kinase appartiennent à cette catégorie.",
      "Vrai. Les fonctions réceptrice et effectrice sont portées par des molécules différentes.",
      "Faux. Certains récepteurs la portent."
    ]
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le récepteur à l’insuline, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-receptor"
    },
    "choices": [
      "Il ne possède aucun pont disulfure.",
      "Il est un hétérotétramère associant deux chaînes α et deux chaînes β.",
      "Les chaînes β portent le domaine transmembranaire et tyrosine kinase.",
      "La fixation de l’insuline ne provoque aucune phosphorylation."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Le récepteur à l’insuline est un récepteur kinase hétérotétramérique.",
    "choiceExplanations": [
      "Faux. Les chaînes α et β sont reliées par des ponts disulfure.",
      "Vrai. Il est un hétérotétramère associant deux chaînes α et deux chaînes β.",
      "Vrai. Les chaînes β portent le domaine transmembranaire et tyrosine kinase.",
      "Faux. Elle déclenche des phosphorylations de tyrosines."
    ]
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les RCPG et la rhodopsine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "gpcr-rhodopsin"
    },
    "choices": [
      "La rhodopsine contient du 11-cis-rétinal.",
      "Un photon isomérise le rétinal et active la transducine.",
      "Les RCPG possèdent une seule traversée membranaire.",
      "L’absorption d’un photon ne modifie pas la conformation."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les RCPG transmettent des signaux très variés; la rhodopsine illustre la phototransduction.",
    "choiceExplanations": [
      "Vrai. La rhodopsine contient du 11-cis-rétinal.",
      "Vrai. Un photon isomérise le rétinal et active la transducine.",
      "Faux. Ils en possèdent sept.",
      "Faux. Elle déclenche une isomérisation et une cascade."
    ]
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les récepteurs cellulaires, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "receptor-general"
    },
    "choices": [
      "Un récepteur membranaire possède des domaines extracellulaire, transmembranaire et cytoplasmique.",
      "Le domaine extracellulaire transmet directement le signal au noyau sans autre domaine.",
      "Un récepteur ne fixe jamais de ligand.",
      "Ils fixent un ou plusieurs ligands."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les récepteurs convertissent la reconnaissance d’un ligand en réponse cellulaire.",
    "choiceExplanations": [
      "Vrai. Un récepteur membranaire possède des domaines extracellulaire, transmembranaire et cytoplasmique.",
      "Faux. Le récepteur possède plusieurs domaines fonctionnels.",
      "Faux. La fixation du ligand déclenche sa fonction.",
      "Vrai. Ils fixent un ou plusieurs ligands."
    ]
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les récepteurs nucléaires, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "nuclear-receptor"
    },
    "choices": [
      "Tous possèdent un ligand connu.",
      "Ils sont localisés dans le cytosol ou le noyau.",
      "Ils se lient à l’ADN comme facteurs de transcription.",
      "Leurs ligands sont nécessairement hydrophiles et incapables de traverser une membrane."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les récepteurs nucléaires régulent directement la transcription après liaison de ligands lipophiles.",
    "choiceExplanations": [
      "Faux. Certains sont dits orphelins.",
      "Vrai. Ils sont localisés dans le cytosol ou le noyau.",
      "Vrai. Ils se lient à l’ADN comme facteurs de transcription.",
      "Faux. Plusieurs ligands sont lipophiles."
    ]
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les récepteurs métabotropiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "metabotropic-receptor"
    },
    "choices": [
      "Une activité tyrosine kinase est incompatible avec un récepteur.",
      "Les récepteurs à activité tyrosine kinase appartiennent à cette catégorie.",
      "Aucun second messager n’intervient.",
      "La transmission utilise un second messager chimique ou enzymatique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les récepteurs métabotropiques activent une cascade distincte de la simple ouverture d’un canal.",
    "choiceExplanations": [
      "Faux. Certains récepteurs la portent.",
      "Vrai. Les récepteurs à activité tyrosine kinase appartiennent à cette catégorie.",
      "Faux. Le second messager caractérise la signalisation métabotropique.",
      "Vrai. La transmission utilise un second messager chimique ou enzymatique."
    ]
  },
  {
    "order": 49,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant le récepteur à l’insuline, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-receptor"
    },
    "choices": [
      "Les chaînes α sont extracellulaires.",
      "Il ne possède aucun pont disulfure.",
      "Le récepteur à l’insuline est un canal chlorure pentamérique.",
      "Les chaînes β portent le domaine transmembranaire et tyrosine kinase."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le récepteur à l’insuline est un récepteur kinase hétérotétramérique.",
    "choiceExplanations": [
      "Vrai. Les chaînes α sont extracellulaires.",
      "Faux. Les chaînes α et β sont reliées par des ponts disulfure.",
      "Faux. C’est un récepteur à activité tyrosine kinase.",
      "Vrai. Les chaînes β portent le domaine transmembranaire et tyrosine kinase."
    ]
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant les RCPG et la rhodopsine, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "gpcr-rhodopsin"
    },
    "choices": [
      "Ils activent une protéine G dépendante du GTP.",
      "L’absorption d’un photon ne modifie pas la conformation.",
      "La rhodopsine contient du 11-cis-rétinal.",
      "La protéine G fonctionne uniquement avec l’ATP."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les RCPG transmettent des signaux très variés; la rhodopsine illustre la phototransduction.",
    "choiceExplanations": [
      "Vrai. Ils activent une protéine G dépendante du GTP.",
      "Faux. Elle déclenche une isomérisation et une cascade.",
      "Vrai. La rhodopsine contient du 11-cis-rétinal.",
      "Faux. Elle dépend de la fixation du GTP."
    ]
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les récepteurs cellulaires. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "receptor-general"
    },
    "choices": [
      "Les récepteurs ne modifient jamais le comportement cellulaire.",
      "Tous les récepteurs sont solubles dans le sang.",
      "Ils fixent un ou plusieurs ligands.",
      "Ils transmettent un message modifiant le comportement cellulaire."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les récepteurs convertissent la reconnaissance d’un ligand en réponse cellulaire.",
    "choiceExplanations": [
      "Faux. Ils transmettent des signaux régulateurs.",
      "Faux. Beaucoup sont membranaires ou intracellulaires.",
      "Vrai. Ils fixent un ou plusieurs ligands.",
      "Vrai. Ils transmettent un message modifiant le comportement cellulaire."
    ]
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les récepteurs nucléaires. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "nuclear-receptor"
    },
    "choices": [
      "Leurs ligands sont nécessairement hydrophiles et incapables de traverser une membrane.",
      "Ils n’interagissent jamais avec l’ADN.",
      "Leurs ligands comprennent hormones stéroïdiennes, thyroïdiennes, vitamine D et acide rétinoïque.",
      "Ils sont localisés dans le cytosol ou le noyau."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les récepteurs nucléaires régulent directement la transcription après liaison de ligands lipophiles.",
    "choiceExplanations": [
      "Faux. Plusieurs ligands sont lipophiles.",
      "Faux. Ils agissent comme facteurs de transcription.",
      "Vrai. Leurs ligands comprennent hormones stéroïdiennes, thyroïdiennes, vitamine D et acide rétinoïque.",
      "Vrai. Ils sont localisés dans le cytosol ou le noyau."
    ]
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les récepteurs métabotropiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "metabotropic-receptor"
    },
    "choices": [
      "La transmission utilise un second messager chimique ou enzymatique.",
      "Aucun second messager n’intervient.",
      "Les fonctions réceptrice et effectrice sont portées par des molécules différentes.",
      "La même molécule assure toujours directement la fonction de canal."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les récepteurs métabotropiques activent une cascade distincte de la simple ouverture d’un canal.",
    "choiceExplanations": [
      "Vrai. La transmission utilise un second messager chimique ou enzymatique.",
      "Faux. Le second messager caractérise la signalisation métabotropique.",
      "Vrai. Les fonctions réceptrice et effectrice sont portées par des molécules différentes.",
      "Faux. Cela correspond plutôt aux ionotropiques."
    ]
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le récepteur à l’insuline. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-receptor"
    },
    "choices": [
      "Les chaînes β portent le domaine transmembranaire et tyrosine kinase.",
      "Les chaînes α sont extracellulaires.",
      "Le récepteur à l’insuline est un canal chlorure pentamérique.",
      "Les chaînes α portent le domaine kinase cytoplasmique."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Le récepteur à l’insuline est un récepteur kinase hétérotétramérique.",
    "choiceExplanations": [
      "Vrai. Les chaînes β portent le domaine transmembranaire et tyrosine kinase.",
      "Vrai. Les chaînes α sont extracellulaires.",
      "Faux. C’est un récepteur à activité tyrosine kinase.",
      "Faux. Ce domaine est porté par les chaînes β."
    ]
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une anomalie de phototransduction dans les bâtonnets. Quelles propositions sur la rhodopsine sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "gpcr-rhodopsin"
    },
    "choices": [
      "Ils activent une protéine G dépendante du GTP.",
      "La rhodopsine est un récepteur nucléaire.",
      "La protéine G fonctionne uniquement avec l’ATP.",
      "Les RCPG possèdent sept traversées membranaires en hélice α."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les RCPG transmettent des signaux très variés; la rhodopsine illustre la phototransduction.",
    "choiceExplanations": [
      "Vrai. Ils activent une protéine G dépendante du GTP.",
      "Faux. C’est un RCPG des bâtonnets.",
      "Faux. Elle dépend de la fixation du GTP.",
      "Vrai. Les RCPG possèdent sept traversées membranaires en hélice α."
    ]
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les récepteurs cellulaires. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "receptor-general"
    },
    "choices": [
      "Ils transmettent un message modifiant le comportement cellulaire.",
      "Les récepteurs peuvent être nucléaires, membranaires ou associés à d’autres compartiments.",
      "Tous les récepteurs sont solubles dans le sang.",
      "Le domaine extracellulaire transmet directement le signal au noyau sans autre domaine."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les récepteurs convertissent la reconnaissance d’un ligand en réponse cellulaire.",
    "choiceExplanations": [
      "Vrai. Ils transmettent un message modifiant le comportement cellulaire.",
      "Vrai. Les récepteurs peuvent être nucléaires, membranaires ou associés à d’autres compartiments.",
      "Faux. Beaucoup sont membranaires ou intracellulaires.",
      "Faux. Le récepteur possède plusieurs domaines fonctionnels."
    ]
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les récepteurs nucléaires. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "nuclear-receptor"
    },
    "choices": [
      "Leurs ligands sont nécessairement hydrophiles et incapables de traverser une membrane.",
      "Après fixation du ligand, ils peuvent se dimériser.",
      "Tous possèdent un ligand connu.",
      "Ils se lient à l’ADN comme facteurs de transcription."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les récepteurs nucléaires régulent directement la transcription après liaison de ligands lipophiles.",
    "choiceExplanations": [
      "Faux. Plusieurs ligands sont lipophiles.",
      "Vrai. Après fixation du ligand, ils peuvent se dimériser.",
      "Faux. Certains sont dits orphelins.",
      "Vrai. Ils se lient à l’ADN comme facteurs de transcription."
    ]
  },
  {
    "order": 58,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à les récepteurs métabotropiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "metabotropic-receptor"
    },
    "choices": [
      "La transmission utilise un second messager chimique ou enzymatique.",
      "La même molécule assure toujours directement la fonction de canal.",
      "Aucun second messager n’intervient.",
      "Les fonctions réceptrice et effectrice sont portées par des molécules différentes."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les récepteurs métabotropiques activent une cascade distincte de la simple ouverture d’un canal.",
    "choiceExplanations": [
      "Vrai. La transmission utilise un second messager chimique ou enzymatique.",
      "Faux. Cela correspond plutôt aux ionotropiques.",
      "Faux. Le second messager caractérise la signalisation métabotropique.",
      "Vrai. Les fonctions réceptrice et effectrice sont portées par des molécules différentes."
    ]
  },
  {
    "order": 59,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "On mobilise les connaissances relatives à le récepteur à l’insuline. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-receptor"
    },
    "choices": [
      "Les chaînes α sont extracellulaires.",
      "Les chaînes α portent le domaine kinase cytoplasmique.",
      "Il ne possède aucun pont disulfure.",
      "Les chaînes β portent le domaine transmembranaire et tyrosine kinase."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Le récepteur à l’insuline est un récepteur kinase hétérotétramérique.",
    "choiceExplanations": [
      "Vrai. Les chaînes α sont extracellulaires.",
      "Faux. Ce domaine est porté par les chaînes β.",
      "Faux. Les chaînes α et β sont reliées par des ponts disulfure.",
      "Vrai. Les chaînes β portent le domaine transmembranaire et tyrosine kinase."
    ]
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une anomalie de phototransduction dans les bâtonnets. Quelles propositions sur la rhodopsine sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "gpcr-rhodopsin"
    },
    "choices": [
      "La rhodopsine contient du 11-cis-rétinal.",
      "Un photon isomérise le rétinal et active la transducine.",
      "La protéine G fonctionne uniquement avec l’ATP.",
      "La rhodopsine est un récepteur nucléaire."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les RCPG transmettent des signaux très variés; la rhodopsine illustre la phototransduction.",
    "choiceExplanations": [
      "Vrai. La rhodopsine contient du 11-cis-rétinal.",
      "Vrai. Un photon isomérise le rétinal et active la transducine.",
      "Faux. Elle dépend de la fixation du GTP.",
      "Faux. C’est un RCPG des bâtonnets."
    ]
  }
];
