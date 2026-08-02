import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 5;

export const SYNTHESIS_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "121": [
    "les antigènes et épitopes"
  ],
  "122": [
    "la structure H2L2 des immunoglobulines"
  ],
  "123": [
    "les classes d’immunoglobulines"
  ],
  "124": [
    "les formes monomériques et multimériques"
  ],
  "125": [
    "les domaines et fragments Fab/Fc"
  ],
  "126": [
    "les récepteurs cellulaires"
  ],
  "127": [
    "les récepteurs nucléaires"
  ],
  "128": [
    "les récepteurs métabotropiques"
  ],
  "129": [
    "le récepteur à l’insuline"
  ],
  "130": [
    "les RCPG et la rhodopsine"
  ],
  "131": [
    "les récepteurs ionotropiques"
  ],
  "132": [
    "les récepteurs 5-HT3 et GABAA"
  ],
  "133": [
    "la pompe Na+/K+-ATPase"
  ],
  "134": [
    "les transporteurs ABC et la P-glycoprotéine"
  ],
  "135": [
    "le canal CFTR"
  ],
  "136": [
    "les familles de molécules d’adhérence"
  ],
  "137": [
    "les sélectines et cadhérines"
  ],
  "138": [
    "les Ig-CAM"
  ],
  "139": [
    "les intégrines et plaques d’adhésion focale"
  ],
  "140": [
    "les connexines et connexons"
  ]
};

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "roles-biologiques-proteines-partie-1-synthese-structures-fonctions",
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
    "slug": "roles-biologiques-proteines-partie-1-synthese-raisonnement",
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
    "question": "Dans une question transversale sur les antigènes et épitopes, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-epitope"
    },
    "choices": [
      "Un même antigène peut comporter plusieurs épitopes.",
      "Un antigène ne peut être qu’une protéine.",
      "Un anticorps reconnaît nécessairement l’intégralité d’un antigène.",
      "Un épitope est la partie reconnue par l’anticorps."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "La reconnaissance immunitaire repose sur la liaison d’un anticorps à un épitope.",
    "choiceExplanations": [
      "Vrai. Un même antigène peut comporter plusieurs épitopes.",
      "Faux. Il peut aussi être un acide nucléique ou un glycane.",
      "Faux. Il reconnaît un épitope.",
      "Vrai. Un épitope est la partie reconnue par l’anticorps."
    ]
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la structure H2L2 des immunoglobulines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-h2l2"
    },
    "choices": [
      "Les chaînes sont unies uniquement par des liaisons osidiques.",
      "La structure est H1L3.",
      "Elle comporte deux chaînes légères identiques.",
      "Une immunoglobuline comporte deux chaînes lourdes identiques."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Les anticorps possèdent une architecture symétrique de deux chaînes lourdes et deux légères.",
    "choiceExplanations": [
      "Faux. Des ponts disulfure les relient.",
      "Faux. La structure générale est H2L2.",
      "Vrai. Elle comporte deux chaînes légères identiques.",
      "Vrai. Une immunoglobuline comporte deux chaînes lourdes identiques."
    ]
  },
  {
    "order": 123,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les classes d’immunoglobulines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-classes"
    },
    "choices": [
      "La classe dépend de la chaîne lourde.",
      "Il n’existe que deux classes d’immunoglobulines.",
      "La classe dépend exclusivement de la chaîne légère.",
      "Les chaînes lourdes correspondantes sont α, δ, ε, γ et μ."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les classes d’anticorps sont définies par la nature de leur chaîne lourde.",
    "choiceExplanations": [
      "Vrai. La classe dépend de la chaîne lourde.",
      "Faux. La fiche en cite cinq.",
      "Faux. Elle dépend de la chaîne lourde.",
      "Vrai. Les chaînes lourdes correspondantes sont α, δ, ε, γ et μ."
    ]
  },
  {
    "order": 124,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les formes monomériques et multimériques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-multimers"
    },
    "choices": [
      "Le peptide J coupe les immunoglobulines.",
      "IgD, IgE et IgG sont monomériques.",
      "IgG est décrite comme un pentamère.",
      "IgA peut être dimérique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les classes diffèrent aussi par leur état d’association.",
    "choiceExplanations": [
      "Faux. Il relie les sous-unités multimériques.",
      "Vrai. IgD, IgE et IgG sont monomériques.",
      "Faux. Elle est monomérique.",
      "Vrai. IgA peut être dimérique."
    ]
  },
  {
    "order": 125,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un laboratoire utilise un fragment d’anticorps pour révéler une protéine en Western blot. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "antibody-fab-fc"
    },
    "choices": [
      "Le fragment Fc intervient dans le complément et la fixation cellulaire.",
      "La papaïne produit uniquement quatre fragments Fc.",
      "Les régions V sont variables et les régions C constantes.",
      "Le Fc est constitué des parties N-terminales des chaînes légères."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le clivage par la papaïne sépare les fonctions de reconnaissance Fab des fonctions effectrices Fc.",
    "choiceExplanations": [
      "Vrai. Le fragment Fc intervient dans le complément et la fixation cellulaire.",
      "Faux. Elle produit deux Fab et un Fc.",
      "Vrai. Les régions V sont variables et les régions C constantes.",
      "Faux. Il est formé par les parties C-terminales des chaînes lourdes."
    ]
  },
  {
    "order": 126,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les récepteurs cellulaires, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "receptor-general"
    },
    "choices": [
      "Tous les récepteurs sont solubles dans le sang.",
      "Ils fixent un ou plusieurs ligands.",
      "Les récepteurs ne modifient jamais le comportement cellulaire.",
      "Un récepteur membranaire possède des domaines extracellulaire, transmembranaire et cytoplasmique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les récepteurs convertissent la reconnaissance d’un ligand en réponse cellulaire.",
    "choiceExplanations": [
      "Faux. Beaucoup sont membranaires ou intracellulaires.",
      "Vrai. Ils fixent un ou plusieurs ligands.",
      "Faux. Ils transmettent des signaux régulateurs.",
      "Vrai. Un récepteur membranaire possède des domaines extracellulaire, transmembranaire et cytoplasmique."
    ]
  },
  {
    "order": 127,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les récepteurs nucléaires, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "nuclear-receptor"
    },
    "choices": [
      "Leurs ligands sont nécessairement hydrophiles et incapables de traverser une membrane.",
      "Ils sont localisés dans le cytosol ou le noyau.",
      "Ils n’interagissent jamais avec l’ADN.",
      "Ils se lient à l’ADN comme facteurs de transcription."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les récepteurs nucléaires régulent directement la transcription après liaison de ligands lipophiles.",
    "choiceExplanations": [
      "Faux. Plusieurs ligands sont lipophiles.",
      "Vrai. Ils sont localisés dans le cytosol ou le noyau.",
      "Faux. Ils agissent comme facteurs de transcription.",
      "Vrai. Ils se lient à l’ADN comme facteurs de transcription."
    ]
  },
  {
    "order": 128,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les récepteurs métabotropiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "metabotropic-receptor"
    },
    "choices": [
      "Une activité tyrosine kinase est incompatible avec un récepteur.",
      "Les fonctions réceptrice et effectrice sont portées par des molécules différentes.",
      "La transmission utilise un second messager chimique ou enzymatique.",
      "La même molécule assure toujours directement la fonction de canal."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les récepteurs métabotropiques activent une cascade distincte de la simple ouverture d’un canal.",
    "choiceExplanations": [
      "Faux. Certains récepteurs la portent.",
      "Vrai. Les fonctions réceptrice et effectrice sont portées par des molécules différentes.",
      "Vrai. La transmission utilise un second messager chimique ou enzymatique.",
      "Faux. Cela correspond plutôt aux ionotropiques."
    ]
  },
  {
    "order": 129,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur le récepteur à l’insuline, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "insulin-receptor"
    },
    "choices": [
      "Le récepteur à l’insuline est un canal chlorure pentamérique.",
      "La fixation de l’insuline ne provoque aucune phosphorylation.",
      "La voie IRS/PI3K/PIP3/PKB module le métabolisme et la survie cellulaire.",
      "Les chaînes β portent le domaine transmembranaire et tyrosine kinase."
    ],
    "correctChoiceIndexes": [
      2,
      3
    ],
    "explanation": "Le récepteur à l’insuline est un récepteur kinase hétérotétramérique.",
    "choiceExplanations": [
      "Faux. C’est un récepteur à activité tyrosine kinase.",
      "Faux. Elle déclenche des phosphorylations de tyrosines.",
      "Vrai. La voie IRS/PI3K/PIP3/PKB module le métabolisme et la survie cellulaire.",
      "Vrai. Les chaînes β portent le domaine transmembranaire et tyrosine kinase."
    ]
  },
  {
    "order": 130,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un patient présente une anomalie de phototransduction dans les bâtonnets. Quelles propositions sur la rhodopsine sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "gpcr-rhodopsin"
    },
    "choices": [
      "L’absorption d’un photon ne modifie pas la conformation.",
      "Un photon isomérise le rétinal et active la transducine.",
      "Les RCPG possèdent une seule traversée membranaire.",
      "La rhodopsine contient du 11-cis-rétinal."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les RCPG transmettent des signaux très variés; la rhodopsine illustre la phototransduction.",
    "choiceExplanations": [
      "Faux. Elle déclenche une isomérisation et une cascade.",
      "Vrai. Un photon isomérise le rétinal et active la transducine.",
      "Faux. Ils en possèdent sept.",
      "Vrai. La rhodopsine contient du 11-cis-rétinal."
    ]
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les récepteurs ionotropiques, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "ionotropic-channel"
    },
    "choices": [
      "Ils sont des récepteurs nucléaires.",
      "La même molécule assure les fonctions réceptrice et effectrice.",
      "Ils ne possèdent aucun domaine transmembranaire.",
      "Le flux suit le gradient électrochimique."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les récepteurs ionotropiques couplent directement liaison du ligand et ouverture du canal.",
    "choiceExplanations": [
      "Faux. Ils sont membranaires.",
      "Vrai. La même molécule assure les fonctions réceptrice et effectrice.",
      "Faux. Ils forment un pore membranaire.",
      "Vrai. Le flux suit le gradient électrochimique."
    ]
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les récepteurs 5-HT3 et GABAA, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "serotonin-gaba-channels"
    },
    "choices": [
      "Le GABA est décrit comme un neurotransmetteur excitateur principal.",
      "Le récepteur GABAA permet une entrée de Cl−.",
      "Il permet une entrée de Na+ et une dépolarisation.",
      "Le GABAA est un récepteur stimulant une entrée massive de Na+."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "Les deux canaux illustrent des effets électriques opposés selon l’ion transporté.",
    "choiceExplanations": [
      "Faux. Il est inhibiteur.",
      "Vrai. Le récepteur GABAA permet une entrée de Cl−.",
      "Vrai. Il permet une entrée de Na+ et une dépolarisation.",
      "Faux. Il ouvre un canal chlorure."
    ]
  },
  {
    "order": 133,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur la pompe Na+/K+-ATPase, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "sodium-potassium-pump"
    },
    "choices": [
      "Elle suit passivement le gradient comme un canal.",
      "Elle utilise l’énergie de l’ATP.",
      "Elle expulse trois Na+ et fait entrer deux K+.",
      "Elle fonctionne sans aucune énergie."
    ],
    "correctChoiceIndexes": [
      1,
      2
    ],
    "explanation": "La Na+/K+-ATPase restaure les gradients ioniques au prix d’ATP.",
    "choiceExplanations": [
      "Faux. Elle effectue un transport actif.",
      "Vrai. Elle utilise l’énergie de l’ATP.",
      "Vrai. Elle expulse trois Na+ et fait entrer deux K+.",
      "Faux. Elle hydrolyse l’ATP."
    ]
  },
  {
    "order": 134,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Une tumeur surexprime la P-glycoprotéine et devient résistante à plusieurs cytotoxiques. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "abc-pgp"
    },
    "choices": [
      "La P-glycoprotéine augmente toujours l’accumulation intracellulaire des cytotoxiques.",
      "Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "Les transporteurs ABC sont des canaux passifs sans ATP.",
      "La P-glycoprotéine peut excréter des médicaments."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les transporteurs ABC participent à l’efflux des xénobiotiques et à la pharmacorésistance.",
    "choiceExplanations": [
      "Faux. Elle peut les expulser.",
      "Vrai. Ces transporteurs utilisent l’hydrolyse de l’ATP.",
      "Faux. Ils sont des transporteurs actifs.",
      "Vrai. La P-glycoprotéine peut excréter des médicaments."
    ]
  },
  {
    "order": 135,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un enfant présente une mucoviscidose liée à la mutation ΔF508. Quelles propositions sur CFTR sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "cftr-channel"
    },
    "choices": [
      "CFTR transporte des ions chlorure.",
      "La mucoviscidose n’a aucun lien génétique.",
      "CFTR est un récepteur nucléaire aux stéroïdes.",
      "Les mutations de CFTR sont à l’origine de la mucoviscidose."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "CFTR est un transporteur chlorure dont les mutations provoquent la mucoviscidose.",
    "choiceExplanations": [
      "Vrai. CFTR transporte des ions chlorure.",
      "Faux. Elle résulte de mutations de CFTR.",
      "Faux. C’est un canal/transporteur membranaire de Cl−.",
      "Vrai. Les mutations de CFTR sont à l’origine de la mucoviscidose."
    ]
  },
  {
    "order": 136,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les familles de molécules d’adhérence, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "adhesion-families"
    },
    "choices": [
      "Les quatre familles citées sont sélectines, cadhérines, Ig-CAM et intégrines.",
      "Il n’existe qu’une seule famille.",
      "La matrice extracellulaire ne possède aucun ligand d’adhérence.",
      "Elles participent à la migration cellulaire."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les molécules d’adhérence organisent les contacts entre cellules et matrice.",
    "choiceExplanations": [
      "Vrai. Les quatre familles citées sont sélectines, cadhérines, Ig-CAM et intégrines.",
      "Faux. La fiche en distingue quatre.",
      "Faux. Les intégrines s’y fixent.",
      "Vrai. Elles participent à la migration cellulaire."
    ]
  },
  {
    "order": 137,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les sélectines et cadhérines, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "selectin-cadherin"
    },
    "choices": [
      "Les cadhérines réalisent des interactions homotypiques.",
      "Une interaction homotypique associe des récepteurs différents.",
      "La cadhérine E n’a aucun intérêt en cancérologie.",
      "E-, L- et P-sélectines correspondent à endothélium, leucocytes et plaquettes."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Sélectines et cadhérines utilisent des mécanismes de reconnaissance différents.",
    "choiceExplanations": [
      "Vrai. Les cadhérines réalisent des interactions homotypiques.",
      "Faux. Elle associe des récepteurs identiques.",
      "Faux. Elle peut servir de marqueur tumoral.",
      "Vrai. E-, L- et P-sélectines correspondent à endothélium, leucocytes et plaquettes."
    ]
  },
  {
    "order": 138,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les Ig-CAM, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "igcam"
    },
    "choices": [
      "Ig-CAM signifie Immunoglobulin-Cell Adhesion Molecules.",
      "ICAM-1 participe aux interactions leucocyte-endothélium.",
      "Les Ig-CAM sont des immunoglobulines circulantes uniquement.",
      "ICAM-1 empêche toute interaction leucocytaire."
    ],
    "correctChoiceIndexes": [
      0,
      1
    ],
    "explanation": "Les Ig-CAM utilisent des domaines apparentés aux immunoglobulines pour l’adhérence.",
    "choiceExplanations": [
      "Vrai. Ig-CAM signifie Immunoglobulin-Cell Adhesion Molecules.",
      "Vrai. ICAM-1 participe aux interactions leucocyte-endothélium.",
      "Faux. Ce sont des molécules d’adhérence.",
      "Faux. Elle participe à leur adhérence endothéliale."
    ]
  },
  {
    "order": 139,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Dans une question transversale sur les intégrines et plaques d’adhésion focale, quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "integrin-focal-adhesion"
    },
    "choices": [
      "Une intégrine est un hétérodimère αβ.",
      "Les plaques focales ne contiennent aucune protéine de signalisation.",
      "Les intégrines sont des homotétramères sans domaine transmembranaire.",
      "Chaque sous-unité possède une traversée membranaire."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les intégrines couplent la matrice extracellulaire au cytosquelette et à la signalisation.",
    "choiceExplanations": [
      "Vrai. Une intégrine est un hétérodimère αβ.",
      "Faux. Elles recrutent kinases et protéines de structure.",
      "Faux. Ce sont des hétérodimères αβ transmembranaires.",
      "Vrai. Chaque sous-unité possède une traversée membranaire."
    ]
  },
  {
    "order": 140,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Un nouveau-né présente une surdité congénitale liée à une mutation de connexine. Quelles propositions sont exactes ?",
    "questionDiagram": {
      "type": "protein",
      "diagram": "connexin-gap-junction"
    },
    "choices": [
      "Une connexine possède quatre domaines transmembranaires.",
      "Le canal de jonction est formé dans une seule membrane sans partenaire.",
      "Une connexine possède sept traversées et active une protéine G.",
      "Des mutations de connexines peuvent provoquer des surdités congénitales."
    ],
    "correctChoiceIndexes": [
      0,
      3
    ],
    "explanation": "Les jonctions communicantes résultent de l’assemblage de connexines en deux connexons appariés.",
    "choiceExplanations": [
      "Vrai. Une connexine possède quatre domaines transmembranaires.",
      "Faux. Deux connexons s’alignent entre deux cellules.",
      "Faux. Elle possède quatre traversées.",
      "Vrai. Des mutations de connexines peuvent provoquer des surdités congénitales."
    ]
  }
];
