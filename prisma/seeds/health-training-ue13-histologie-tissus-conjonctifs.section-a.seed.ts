import type { SeedQuestion, SeedQuiz } from './health-training-ue13.shared';
export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'La figure suivante représente quatre cellules rencontrées dans les tissus conjonctifs.\n\n![Cellules conjonctives](/images/training/ue13/histologie/tissus-conjonctifs/cellules-conjonctives.svg)\n\nÀ propos de cette figure :',
    choices: [
      'A évoque un fibrocyte fusiforme à noyau allongé.',
      'B évoque un adipocyte blanc à vacuole lipidique unique et noyau périphérique.',
      'C évoque un macrophage à noyau réniforme et pseudopodes.',
      'D évoque un lymphocyte au cytoplasme très peu développé.'
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: 'Le fibrocyte est fusiforme, l’adipocyte blanc possède une grande vacuole, le macrophage présente des pseudopodes et un noyau réniforme, tandis que D schématise un mastocyte granuleux.',
    choiceExplanations: [
      'La forme allongée et le noyau dense sont compatibles avec un fibrocyte.',
      'La grande vacuole optiquement vide refoule le noyau en périphérie.',
      'La forme irrégulière, les prolongements et le noyau réniforme correspondent au macrophage.',
      'D montre de nombreux granules cytoplasmiques, ce qui évoque plutôt un mastocyte.'
    ],
  },
  {
    order: 2,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Le plasmocyte est un lymphocyte B activé producteur d’anticorps.',
      'L’adipocyte blanc contient une vacuole lipidique unique et un noyau refoulé en périphérie.',
      'Les granulocytes basophiles sont typiquement les plus abondants lors d’infection bactérienne.',
      'Les fibroblastes et les adipocytes sont des cellules résidentes d’origine mésenchymateuse.'
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Il se caractérise par un noyau excentré et un appareil de synthèse développé.',
      'C’est la cellule du tissu adipeux blanc.',
      'Ce rôle revient aux neutrophiles.',
      'Le cours les oppose aux cellules étrangères d’origine sanguine.'
    ],
  },
  {
    order: 3,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Les fibroblastes sont des cellules jointives organisées en épithélium.',
      'L’adipocyte brun contient de nombreuses petites vacuoles et beaucoup de mitochondries.',
      'L’adipocyte brun sert surtout de réserve énergétique majeure chez l’adulte.',
      'Les adipocytes blancs sont riches en multiples petites vacuoles lipidiques centrales.'
    ],
    correctChoiceIndexes: [1],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Ils sont au contraire dispersés dans la matrice extracellulaire.',
      'Il produit de la chaleur, surtout chez le nouveau-né.',
      'Son rôle principal est la thermogenèse, surtout chez le nouveau-né.',
      'Cette description est celle de l’adipocyte brun.'
    ],
  },
  {
    order: 4,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Les myofibroblastes se transforment librement en adipocytes bruns.',
      'Le fibrocyte correspond à une forme plus quiescente du fibroblaste.',
      'Le macrophage ne peut pas phagocyter de mélanine, de lipides ou de fer.',
      'Les granulocytes neutrophiles apparaissent volontiers lors d’infections bactériennes.'
    ],
    correctChoiceIndexes: [1, 3],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Ils sont une catégorie à part impliquée dans la cicatrisation.',
      'Il est fusiforme avec un noyau allongé et dense.',
      'Il peut devenir mélanophage, lipophage ou sidérophage.',
      'Le cours distingue neutrophiles, éosinophiles et basophiles selon le contexte.'
    ],
  },
  {
    order: 5,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Le myofibroblaste intervient dans la cicatrisation et le rapprochement des berges.',
      'Le fibroblaste est la cellule principale des tissus conjonctifs.',
      'Le fibrocyte est la forme la plus active du fibroblaste.',
      'Le mastocyte joue un rôle important dans les réactions allergiques via la libération d’histamine.'
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Il possède des caractères de cellule contractile.',
      'Il est présent dans tous les types de tissus conjonctifs.',
      'La forme active est le fibroblaste ; le fibrocyte est au repos.',
      'L’histamine favorise notamment la vasodilatation et l’œdème.'
    ],
  },
  {
    order: 6,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Les lymphocytes sont des cellules géantes multinucléées.',
      'Les mastocytes ont une durée de vie très brève et ne participent pas aux allergies.',
      'Le macrophage dérive du monocyte sanguin et possède une activité phagocytaire.',
      'Le fibroblaste synthétise et dégrade des composants de la matrice extracellulaire.'
    ],
    correctChoiceIndexes: [2, 3],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Ce sont de petites cellules à noyau volumineux et cytoplasme peu abondant.',
      'Ils vivent longtemps dans les tissus et libèrent de l’histamine.',
      'Dans le tissu conjonctif, il est aussi appelé histiocyte.',
      'Il produit notamment fibres, protéoglycanes, glycoprotéines et métalloprotéinases.'
    ],
  },
  {
    order: 7,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Les adipocytes blancs sont riches en multiples petites vacuoles lipidiques centrales.',
      'Le macrophage possède typiquement un noyau sphérique central occupant toute la cellule.',
      'Le xylène utilisé lors de la préparation des lames dissout les lipides et rend les vacuoles optiquement vides.',
      'Les granulocytes basophiles sont typiquement les plus abondants lors d’infection bactérienne.'
    ],
    correctChoiceIndexes: [2],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Cette description est celle de l’adipocyte brun.',
      'Il a plutôt un noyau réniforme et des pseudopodes.',
      'C’est pourquoi les adipocytes paraissent vides en HES.',
      'Ce rôle revient aux neutrophiles.'
    ],
  },
  {
    order: 8,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Les fibroblastes et les adipocytes sont des cellules résidentes d’origine mésenchymateuse.',
      'L’adipocyte brun sert surtout de réserve énergétique majeure chez l’adulte.',
      'Les fibroblastes sont des cellules jointives organisées en épithélium.',
      'Le plasmocyte est un lymphocyte B activé producteur d’anticorps.'
    ],
    correctChoiceIndexes: [0, 3],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Le cours les oppose aux cellules étrangères d’origine sanguine.',
      'Son rôle principal est la thermogenèse, surtout chez le nouveau-né.',
      'Ils sont au contraire dispersés dans la matrice extracellulaire.',
      'Il se caractérise par un noyau excentré et un appareil de synthèse développé.'
    ],
  },
  {
    order: 9,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'L’adipocyte blanc contient une vacuole lipidique unique et un noyau refoulé en périphérie.',
      'L’adipocyte brun contient de nombreuses petites vacuoles et beaucoup de mitochondries.',
      'Le fibrocyte correspond à une forme plus quiescente du fibroblaste.',
      'Les granulocytes neutrophiles apparaissent volontiers lors d’infections bactériennes.'
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'C’est la cellule du tissu adipeux blanc.',
      'Il produit de la chaleur, surtout chez le nouveau-né.',
      'Il est fusiforme avec un noyau allongé et dense.',
      'Le cours distingue neutrophiles, éosinophiles et basophiles selon le contexte.'
    ],
  },
  {
    order: 10,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Les mastocytes ont une durée de vie très brève et ne participent pas aux allergies.',
      'Le fibrocyte est la forme la plus active du fibroblaste.',
      'Le macrophage ne peut pas phagocyter de mélanine, de lipides ou de fer.',
      'Les myofibroblastes se transforment librement en adipocytes bruns.'
    ],
    correctChoiceIndexes: [],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Ils vivent longtemps dans les tissus et libèrent de l’histamine.',
      'La forme active est le fibroblaste ; le fibrocyte est au repos.',
      'Il peut devenir mélanophage, lipophage ou sidérophage.',
      'Ils sont une catégorie à part impliquée dans la cicatrisation.'
    ],
  },
  {
    order: 11,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Le myofibroblaste intervient dans la cicatrisation et le rapprochement des berges.',
      'Le fibroblaste est la cellule principale des tissus conjonctifs.',
      'Les lymphocytes sont des cellules géantes multinucléées.',
      'Le macrophage possède typiquement un noyau sphérique central occupant toute la cellule.'
    ],
    correctChoiceIndexes: [0, 1],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Il possède des caractères de cellule contractile.',
      'Il est présent dans tous les types de tissus conjonctifs.',
      'Ce sont de petites cellules à noyau volumineux et cytoplasme peu abondant.',
      'Il a plutôt un noyau réniforme et des pseudopodes.'
    ],
  },
  {
    order: 12,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Le mastocyte joue un rôle important dans les réactions allergiques via la libération d’histamine.',
      'Le macrophage dérive du monocyte sanguin et possède une activité phagocytaire.',
      'Le fibroblaste synthétise et dégrade des composants de la matrice extracellulaire.',
      'Les granulocytes basophiles sont typiquement les plus abondants lors d’infection bactérienne.'
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'L’histamine favorise notamment la vasodilatation et l’œdème.',
      'Dans le tissu conjonctif, il est aussi appelé histiocyte.',
      'Il produit notamment fibres, protéoglycanes, glycoprotéines et métalloprotéinases.',
      'Ce rôle revient aux neutrophiles.'
    ],
  },
  {
    order: 13,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Les fibroblastes sont des cellules jointives organisées en épithélium.',
      'Le xylène utilisé lors de la préparation des lames dissout les lipides et rend les vacuoles optiquement vides.',
      'Les adipocytes blancs sont riches en multiples petites vacuoles lipidiques centrales.',
      'L’adipocyte brun sert surtout de réserve énergétique majeure chez l’adulte.'
    ],
    correctChoiceIndexes: [1],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Ils sont au contraire dispersés dans la matrice extracellulaire.',
      'C’est pourquoi les adipocytes paraissent vides en HES.',
      'Cette description est celle de l’adipocyte brun.',
      'Son rôle principal est la thermogenèse, surtout chez le nouveau-né.'
    ],
  },
  {
    order: 14,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Le plasmocyte est un lymphocyte B activé producteur d’anticorps.',
      'Le macrophage ne peut pas phagocyter de mélanine, de lipides ou de fer.',
      'Les myofibroblastes se transforment librement en adipocytes bruns.',
      'Les fibroblastes et les adipocytes sont des cellules résidentes d’origine mésenchymateuse.'
    ],
    correctChoiceIndexes: [0, 3],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Il se caractérise par un noyau excentré et un appareil de synthèse développé.',
      'Il peut devenir mélanophage, lipophage ou sidérophage.',
      'Ils sont une catégorie à part impliquée dans la cicatrisation.',
      'Le cours les oppose aux cellules étrangères d’origine sanguine.'
    ],
  },
  {
    order: 15,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Le fibrocyte est la forme la plus active du fibroblaste.',
      'Le fibrocyte correspond à une forme plus quiescente du fibroblaste.',
      'L’adipocyte blanc contient une vacuole lipidique unique et un noyau refoulé en périphérie.',
      'L’adipocyte brun contient de nombreuses petites vacuoles et beaucoup de mitochondries.'
    ],
    correctChoiceIndexes: [1, 2, 3],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'La forme active est le fibroblaste ; le fibrocyte est au repos.',
      'Il est fusiforme avec un noyau allongé et dense.',
      'C’est la cellule du tissu adipeux blanc.',
      'Il produit de la chaleur, surtout chez le nouveau-né.'
    ],
  },
  {
    order: 16,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Les granulocytes neutrophiles apparaissent volontiers lors d’infections bactériennes.',
      'Les lymphocytes sont des cellules géantes multinucléées.',
      'Le myofibroblaste intervient dans la cicatrisation et le rapprochement des berges.',
      'Les mastocytes ont une durée de vie très brève et ne participent pas aux allergies.'
    ],
    correctChoiceIndexes: [0, 2],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Le cours distingue neutrophiles, éosinophiles et basophiles selon le contexte.',
      'Ce sont de petites cellules à noyau volumineux et cytoplasme peu abondant.',
      'Il possède des caractères de cellule contractile.',
      'Ils vivent longtemps dans les tissus et libèrent de l’histamine.'
    ],
  },
  {
    order: 17,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Le fibroblaste est la cellule principale des tissus conjonctifs.',
      'Les granulocytes basophiles sont typiquement les plus abondants lors d’infection bactérienne.',
      'Le macrophage possède typiquement un noyau sphérique central occupant toute la cellule.',
      'Les adipocytes blancs sont riches en multiples petites vacuoles lipidiques centrales.'
    ],
    correctChoiceIndexes: [0],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Il est présent dans tous les types de tissus conjonctifs.',
      'Ce rôle revient aux neutrophiles.',
      'Il a plutôt un noyau réniforme et des pseudopodes.',
      'Cette description est celle de l’adipocyte brun.'
    ],
  },
  {
    order: 18,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'L’adipocyte brun sert surtout de réserve énergétique majeure chez l’adulte.',
      'Les fibroblastes sont des cellules jointives organisées en épithélium.',
      'Le mastocyte joue un rôle important dans les réactions allergiques via la libération d’histamine.',
      'Le fibroblaste synthétise et dégrade des composants de la matrice extracellulaire.'
    ],
    correctChoiceIndexes: [2, 3],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Son rôle principal est la thermogenèse, surtout chez le nouveau-né.',
      'Ils sont au contraire dispersés dans la matrice extracellulaire.',
      'L’histamine favorise notamment la vasodilatation et l’œdème.',
      'Il produit notamment fibres, protéoglycanes, glycoprotéines et métalloprotéinases.'
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Le xylène utilisé lors de la préparation des lames dissout les lipides et rend les vacuoles optiquement vides.',
      'Les myofibroblastes se transforment librement en adipocytes bruns.',
      'Les fibroblastes et les adipocytes sont des cellules résidentes d’origine mésenchymateuse.',
      'Le macrophage dérive du monocyte sanguin et possède une activité phagocytaire.'
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'C’est pourquoi les adipocytes paraissent vides en HES.',
      'Ils sont une catégorie à part impliquée dans la cicatrisation.',
      'Le cours les oppose aux cellules étrangères d’origine sanguine.',
      'Dans le tissu conjonctif, il est aussi appelé histiocyte.'
    ],
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des cellules des tissus conjonctifs :',
    choices: [
      'Le macrophage ne peut pas phagocyter de mélanine, de lipides ou de fer.',
      'Le plasmocyte est un lymphocyte B activé producteur d’anticorps.',
      'Le fibrocyte est la forme la plus active du fibroblaste.',
      'L’adipocyte blanc contient une vacuole lipidique unique et un noyau refoulé en périphérie.'
    ],
    correctChoiceIndexes: [1, 3],
    explanation: 'Les tissus conjonctifs associent des cellules résidentes d’origine mésenchymateuse et des cellules issues du sang.',
    choiceExplanations: [
      'Il peut devenir mélanophage, lipophage ou sidérophage.',
      'Il se caractérise par un noyau excentré et un appareil de synthèse développé.',
      'La forme active est le fibroblaste ; le fibrocyte est au repos.',
      'C’est la cellule du tissu adipeux blanc.'
    ],
  }
];

export const SECTION_A_QUIZZES: SeedQuiz[] = [
{
  order: 1,
  slug: 'cellules-residentes-des-tissus-conjonctifs',
  title: 'Cellules résidentes des tissus conjonctifs',
  description: 'Fibroblastes, fibrocytes, myofibroblastes et adipocytes.',
  stage: 'DISCOVER',
  sectionOrder: 1,
  questionOrders: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
},
{
  order: 2,
  slug: 'cellules-immunitaires-et-de-soutien-conjonctif',
  title: 'Cellules immunitaires et de soutien conjonctif',
  description: 'Macrophages, lymphocytes, plasmocytes, granulocytes et mastocytes.',
  stage: 'PRACTICE',
  sectionOrder: 1,
  questionOrders: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
}
];
