import type { SeedQuestion, SeedQuiz } from './health-training-ue13.shared';
export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    order: 81,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'La figure suivante compare trois dispositifs membranaires impliqués dans le contrôle calcique musculaire.\n\n![Triade, diade et cavéoles](/images/training/ue13/histologie/tissus-musculaires/triade-diade-caveoles.svg)\n\nÀ propos de cette figure :',
    choices: [
      'A représente une triade du muscle strié squelettique : un tubule T entre deux citernes terminales.',
      'B représente une diade du muscle cardiaque : un tubule T associé à une citerne terminale.',
      'C représente des cavéoles du muscle lisse, qui ne possède pas de tubules T.',
      'Le dispositif A est caractéristique du muscle lisse unitaire.'
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: 'Le muscle squelettique possède des triades, le muscle cardiaque des diades et le muscle lisse des cavéoles sans tubules T.',
    choiceExplanations: [
      'La triade est constituée d’un tubule T encadré par deux citernes terminales.',
      'La diade associe un tubule T à une seule citerne terminale.',
      'Les cavéoles sont de petites invaginations du sarcolemme du léiomyocyte.',
      'Le muscle lisse ne possède pas de triades.'
    ],
  },
  {
    order: 82,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'Pour une révision transversale du chapitre, à propos de la synthèse du chapitre 4 :',
    choices: [
      'Le muscle cardiaque ne régénère pas de façon significative.',
      'La contraction du muscle lisse peut être déclenchée par un influx nerveux, des hormones, l’étirement ou des facteurs locaux.',
      'Les tubules T stockent l’acétylcholine libérée par la plaque motrice.',
      'Le sarcoplasme contient notamment de nombreuses mitochondries et du glycogène.'
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: 'Cette synthèse croise les notions fondamentales du chapitre 4 d’histologie.',
    choiceExplanations: [
      'Le cours le distingue ainsi du muscle squelettique et du muscle lisse.',
      'Il s’agit d’un muscle involontaire très modulable.',
      'Ils conduisent la dépolarisation ; l’acétylcholine est libérée par le neurone.',
      'Ces réserves soutiennent la contraction.'
    ],
  },
  {
    order: 83,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'En synthèse, à propos de la synthèse du chapitre 4 :',
    choices: [
      'Une unité motrice comprend plusieurs neurones moteurs contrôlant une seule fibre.',
      'Le muscle lisse unitaire est le plus abondant, tonique, autorythmique et riche en gap junctions.',
      'Le cardiomyocyte est la cellule la plus longue de l’organisme, avec des centaines de micromètres et de très nombreux noyaux périphériques.',
      'Le muscle lisse est toujours plus rapide que les deux autres types musculaires.'
    ],
    correctChoiceIndexes: [1],
    explanation: 'Cette synthèse croise les notions fondamentales du chapitre 4 d’histologie.',
    choiceExplanations: [
      'C’est un neurone moteur pour plusieurs fibres.',
      'On le retrouve notamment dans la vessie et l’utérus.',
      'Cette description correspond au rhabdomyocyte.',
      'Sa contraction est lente et soutenue ou rythmique.'
    ],
  },
  {
    order: 84,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la synthèse du chapitre 4 :',
    choices: [
      'Le muscle lisse est le plus riche en sarcomères visibles.',
      'Le muscle cardiaque est un muscle strié involontaire propre au cœur.',
      'Le muscle cardiaque possède un endomysium abondant qui comble les espaces intercellulaires.',
      'Le sarcomère n’existe que dans le muscle lisse.'
    ],
    correctChoiceIndexes: [1, 2],
    explanation: 'Cette synthèse croise les notions fondamentales du chapitre 4 d’histologie.',
    choiceExplanations: [
      'Il ne possède pas de sarcomères.',
      'Il présente une activité rythmique et automatique.',
      'Cet élément est souligné dans le cours.',
      'Il caractérise les muscles striés, squelettique et cardiaque.'
    ],
  },
  {
    order: 85,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'Pour une révision transversale du chapitre, à propos de la synthèse du chapitre 4 :',
    choices: [
      'Les disques intercalaires empêchent toute communication électrique entre cellules cardiaques.',
      'Les fibres de type I sont rouges, riches en myoglobine, mitochondries et capillaires.',
      'L’excitabilité, la contractilité, l’élasticité et l’extensibilité font partie des propriétés musculaires.',
      'Les cardiomyocytes sont des fibres courtes, ramifiées et anastomosées entre elles.'
    ],
    correctChoiceIndexes: [1, 2, 3],
    explanation: 'Cette synthèse croise les notions fondamentales du chapitre 4 d’histologie.',
    choiceExplanations: [
      'Ils contiennent au contraire des gap junctions.',
      'Elles sont adaptées aux efforts prolongés.',
      'Le cours ajoute aussi tonicité et plasticité.',
      'Elles s’organisent en faisceaux en Y autour des cavités cardiaques.'
    ],
  },
  {
    order: 86,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'En synthèse, à propos de la synthèse du chapitre 4 :',
    choices: [
      'Les fibres de type I sont blanches, pauvres en myoglobine et adaptées aux efforts brefs.',
      'Le cardiomyocyte possède un noyau unique central.',
      'La plaque motrice est indispensable à la contraction du cardiomyocyte.',
      'Les fibres de type II ont une contraction rapide et une fatigabilité plus élevée.'
    ],
    correctChoiceIndexes: [1, 3],
    explanation: 'Cette synthèse croise les notions fondamentales du chapitre 4 d’histologie.',
    choiceExplanations: [
      'Cette description est celle des fibres de type II.',
      'Le tableau comparatif le précise.',
      'Le cœur ne possède pas de plaque motrice.',
      'Elles sont recrutées pour les efforts brefs et intenses.'
    ],
  },
  {
    order: 87,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la synthèse du chapitre 4 :',
    choices: [
      'La plaque motrice est présente dans le myocarde.',
      'Une triade musculaire associe un tubule T et deux citernes terminales du réticulum sarcoplasmique.',
      'Le muscle strié squelettique est non strié au microscope optique.',
      'Une triade contient deux tubules T entourant une citerne terminale unique.'
    ],
    correctChoiceIndexes: [1],
    explanation: 'Cette synthèse croise les notions fondamentales du chapitre 4 d’histologie.',
    choiceExplanations: [
      'Le muscle cardiaque ne possède pas de plaque motrice.',
      'Il y a deux triades par sarcomère.',
      'Il présente des stries liées aux myofibrilles alignées.',
      'C’est l’inverse : un tubule T et deux citernes terminales.'
    ],
  },
  {
    order: 88,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: 'Pour une révision transversale du chapitre, à propos de la synthèse du chapitre 4 :',
    choices: [
      'Le muscle lisse n’est jamais présent dans les vaisseaux.',
      'La plaque motrice est une synapse entre la terminaison d’un motoneurone et la fibre musculaire striée squelettique.',
      'Les tubules T conduisent l’onde de dépolarisation au sein de la fibre musculaire.',
      'Le rhabdomyocyte ne contient pratiquement pas de mitochondries.'
    ],
    correctChoiceIndexes: [1, 2],
    explanation: 'Cette synthèse croise les notions fondamentales du chapitre 4 d’histologie.',
    choiceExplanations: [
      'Il constitue notamment une grande partie de leur paroi.',
      'L’acétylcholine y est le neurotransmetteur classique.',
      'Ils sont des invaginations du sarcolemme.',
      'Il en contient de nombreuses.'
    ],
  },
  {
    order: 89,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: 'En synthèse, à propos de la synthèse du chapitre 4 :',
    choices: [
      'Le muscle lisse contient des sarcomères très apparents responsables de ses stries.',
      'La plasticité musculaire correspond à une adaptation structurale à la charge de travail.',
      'Le muscle strié squelettique est volontaire, rapide et inséré sur les os via des tendons.',
      'La dystrophine est une protéine structurale importante du sarcolemme.'
    ],
    correctChoiceIndexes: [1, 2, 3],
    explanation: 'Cette synthèse croise les notions fondamentales du chapitre 4 d’histologie.',
    choiceExplanations: [
      'Il est non strié et dépourvu de sarcomères.',
      'Elle peut se traduire par hypertrophie, hyperplasie du muscle lisse ou atrophie.',
      'Il assure locomotion, posture et mouvements volontaires.',
      'Sa mutation est impliquée dans la myopathie de Duchenne.'
    ],
  },
  {
    order: 90,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la synthèse du chapitre 4 :',
    choices: [
      'La tonicité signifie qu’un muscle est totalement dépourvu de tension au repos.',
      'Le muscle lisse est non strié, involontaire et présent dans la paroi des organes creux.',
      'Les cardiomyocytes sont disposés en longs faisceaux parallèles non ramifiés, avec de multiples noyaux périphériques.',
      'Le muscle lisse peut se répartir en petits faisceaux, en tuniques musculaires ou en petits muscles individualisés.'
    ],
    correctChoiceIndexes: [1, 3],
    explanation: 'Cette synthèse croise les notions fondamentales du chapitre 4 d’histologie.',
    choiceExplanations: [
      'Elle correspond à un état permanent de tension.',
      'Sa contraction est lente et soutenue.',
      'Cette description correspond plutôt au muscle strié squelettique.',
      'Le cours cite prostate, intestin, vaisseaux, iris ou trachée.'
    ],
  }
];

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: 'synthese-du-chapitre-4',
    title: 'Synthèse du chapitre 4',
    description: 'Consolidation transversale des notions du chapitre 4',
    stage: 'MASTER',
    sectionOrder: 5,
    questionOrders: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  },
];
