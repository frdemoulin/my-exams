import type { SeedQuestion, SeedQuiz } from './health-training-ue13.shared';
export const SECTION_C_QUESTIONS: SeedQuestion[] = [
  {
    order: 41,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'La figure suivante propose six organisations épithéliales simplifiées.\n\n![Classification des épithéliums](/images/training/ue13/histologie/epitheliums/classification-epitheliums.svg)\n\nÀ propos de cette figure :',
    choices: [
      'Le schéma A représente un épithélium simple pavimenteux.',
      'Le schéma D représente un épithélium pseudostratifié : les noyaux sont décalés mais les cellules reposent sur la lame basale.',
      'Le schéma E représente un épithélium simple cylindrique.',
      'Le schéma F évoque un épithélium de transition à cellules superficielles bombées.'
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: 'La classification repose sur le nombre de couches et la forme des cellules superficielles. Le schéma E est pluristratifié pavimenteux, alors que F évoque un urothélium.',
    choiceExplanations: [
      'A ne comporte qu’une couche de cellules aplaties.',
      'D montre des noyaux à hauteurs différentes dans une seule assise reposant sur la lame basale.',
      'E comporte plusieurs couches et des cellules superficielles aplaties.',
      'F présente une assise superficielle bombée typique de l’épithélium de transition.'
    ],
  },
  {
    order: 42,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'Une cellule cubique est aussi haute que large.',
      'Dans un épithélium pseudostratifié, toutes les cellules touchent la lame basale mais leurs noyaux ne sont pas alignés.',
      'Un épithélium simple est nécessairement kératinisé.',
      'L’endothélium reste un épithélium, même s’il porte un nom spécialisé.'
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'C’est le critère morphologique de base.',
      'Ce décalage des noyaux explique l’aspect faussement pluristratifié.',
      'La kératinisation concerne surtout certains pluristratifiés pavimenteux.',
      'Il désigne l’épithélium des vaisseaux.'
    ],
  },
  {
    order: 43,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'L’épithélium de transition est un épithélium glandulaire.',
      'L’épithélium respiratoire est l’exemple typique d’un épithélium malpighien kératinisé.',
      'La forme à considérer pour classer un épithélium est celle des cellules posées sur la lame basale.',
      'L’épiderme est un épithélium malpighien kératinisé.'
    ],
    correctChoiceIndexes: [3],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'Il appartient aux épithéliums de revêtement.',
      'Le cours l’oppose à ce type et le présente comme pseudostratifié cilié.',
      'On observe surtout les cellules les plus éloignées de la lame basale.',
      'C’est l’exemple classique du cours.'
    ],
  },
  {
    order: 44,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'Une cellule pavimenteuse est peu haute et très étalée.',
      'Un épithélium simple comporte une seule couche cellulaire.',
      'L’épiderme est un épithélium simple cylindrique.',
      'Une cellule pavimenteuse est toujours plus haute que large.'
    ],
    correctChoiceIndexes: [0, 1],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'Le cours la compare à un œuf au plat.',
      'Il est aussi dit monocouche.',
      'C’est un malpighien kératinisé.',
      'Elle est au contraire aplatie.'
    ],
  },
  {
    order: 45,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'Une cellule cylindrique ou prismatique est plus haute que large.',
      'Dans un épithélium pseudostratifié, seules quelques cellules touchent la lame basale.',
      'Un épithélium malpighien est un épithélium pluristratifié pavimenteux.',
      'La classification des épithéliums de revêtement prend en compte le nombre de couches et la forme des cellules les plus éloignées de la lame basale.'
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'C’est la troisième grande forme épithéliale.',
      'Toutes la touchent dans cette variété.',
      'Il peut être kératinisé ou non kératinisé.',
      'C’est le double critère central du cours.'
    ],
  },
  {
    order: 46,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'Le terme endothélium désigne un tissu conjonctif vasculaire.',
      'Un épithélium cubique simple présente plusieurs couches de cellules.',
      'L’endothélium reste un épithélium, même s’il porte un nom spécialisé.',
      'L’épithélium de transition se reconnaît par l’aspect particulier de sa couche superficielle.'
    ],
    correctChoiceIndexes: [2, 3],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'Il s’agit d’un épithélium spécialisé des vaisseaux.',
      'Le terme simple implique une seule couche.',
      'Il désigne l’épithélium des vaisseaux.',
      'C’est l’un des types de pluristratifiés.'
    ],
  },
  {
    order: 47,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'La forme à considérer pour classer un épithélium est celle des cellules posées sur la lame basale.',
      'La peau ne contient aucun épithélium.',
      'Dans un épithélium pseudostratifié, toutes les cellules touchent la lame basale mais leurs noyaux ne sont pas alignés.',
      'Un épithélium simple est nécessairement kératinisé.'
    ],
    correctChoiceIndexes: [2],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'On observe surtout les cellules les plus éloignées de la lame basale.',
      'La surface cutanée est justement revêtue par l’épiderme.',
      'Ce décalage des noyaux explique l’aspect faussement pluristratifié.',
      'La kératinisation concerne surtout certains pluristratifiés pavimenteux.'
    ],
  },
  {
    order: 48,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'L’épithélium respiratoire est l’exemple typique d’un épithélium malpighien kératinisé.',
      'L’épiderme est un épithélium malpighien kératinisé.',
      'Une cellule cubique est aussi haute que large.',
      'L’épithélium de transition est un épithélium glandulaire.'
    ],
    correctChoiceIndexes: [1, 2],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'Le cours l’oppose à ce type et le présente comme pseudostratifié cilié.',
      'C’est l’exemple classique du cours.',
      'C’est le critère morphologique de base.',
      'Il appartient aux épithéliums de revêtement.'
    ],
  },
  {
    order: 49,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'Un épithélium malpighien est un épithélium pluristratifié pavimenteux.',
      'Une cellule cylindrique ou prismatique est plus haute que large.',
      'Une cellule pavimenteuse est peu haute et très étalée.',
      'Un épithélium simple comporte une seule couche cellulaire.'
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'Il peut être kératinisé ou non kératinisé.',
      'C’est la troisième grande forme épithéliale.',
      'Le cours la compare à un œuf au plat.',
      'Il est aussi dit monocouche.'
    ],
  },
  {
    order: 50,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'L’épiderme est un épithélium simple cylindrique.',
      'Dans un épithélium pseudostratifié, seules quelques cellules touchent la lame basale.',
      'Une cellule pavimenteuse est toujours plus haute que large.',
      'Le terme endothélium désigne un tissu conjonctif vasculaire.'
    ],
    correctChoiceIndexes: [],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'C’est un malpighien kératinisé.',
      'Toutes la touchent dans cette variété.',
      'Elle est au contraire aplatie.',
      'Il s’agit d’un épithélium spécialisé des vaisseaux.'
    ],
  },
  {
    order: 51,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'La peau ne contient aucun épithélium.',
      'La classification des épithéliums de revêtement prend en compte le nombre de couches et la forme des cellules les plus éloignées de la lame basale.',
      'Un épithélium cubique simple présente plusieurs couches de cellules.',
      'L’épithélium de transition se reconnaît par l’aspect particulier de sa couche superficielle.'
    ],
    correctChoiceIndexes: [1, 3],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'La surface cutanée est justement revêtue par l’épiderme.',
      'C’est le double critère central du cours.',
      'Le terme simple implique une seule couche.',
      'C’est l’un des types de pluristratifiés.'
    ],
  },
  {
    order: 52,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'Un épithélium simple est nécessairement kératinisé.',
      'Dans un épithélium pseudostratifié, toutes les cellules touchent la lame basale mais leurs noyaux ne sont pas alignés.',
      'L’endothélium reste un épithélium, même s’il porte un nom spécialisé.',
      'Une cellule cubique est aussi haute que large.'
    ],
    correctChoiceIndexes: [1, 2, 3],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'La kératinisation concerne surtout certains pluristratifiés pavimenteux.',
      'Ce décalage des noyaux explique l’aspect faussement pluristratifié.',
      'Il désigne l’épithélium des vaisseaux.',
      'C’est le critère morphologique de base.'
    ],
  },
  {
    order: 53,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'L’épiderme est un épithélium malpighien kératinisé.',
      'L’épithélium de transition est un épithélium glandulaire.',
      'L’épithélium respiratoire est l’exemple typique d’un épithélium malpighien kératinisé.',
      'La forme à considérer pour classer un épithélium est celle des cellules posées sur la lame basale.'
    ],
    correctChoiceIndexes: [0],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'C’est l’exemple classique du cours.',
      'Il appartient aux épithéliums de revêtement.',
      'Le cours l’oppose à ce type et le présente comme pseudostratifié cilié.',
      'On observe surtout les cellules les plus éloignées de la lame basale.'
    ],
  },
  {
    order: 54,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'Un épithélium simple comporte une seule couche cellulaire.',
      'L’épiderme est un épithélium simple cylindrique.',
      'Une cellule pavimenteuse est toujours plus haute que large.',
      'Une cellule pavimenteuse est peu haute et très étalée.'
    ],
    correctChoiceIndexes: [0, 3],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'Il est aussi dit monocouche.',
      'C’est un malpighien kératinisé.',
      'Elle est au contraire aplatie.',
      'Le cours la compare à un œuf au plat.'
    ],
  },
  {
    order: 55,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'Un épithélium malpighien est un épithélium pluristratifié pavimenteux.',
      'La classification des épithéliums de revêtement prend en compte le nombre de couches et la forme des cellules les plus éloignées de la lame basale.',
      'Dans un épithélium pseudostratifié, seules quelques cellules touchent la lame basale.',
      'Une cellule cylindrique ou prismatique est plus haute que large.'
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'Il peut être kératinisé ou non kératinisé.',
      'C’est le double critère central du cours.',
      'Toutes la touchent dans cette variété.',
      'C’est la troisième grande forme épithéliale.'
    ],
  },
  {
    order: 56,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'Un épithélium cubique simple présente plusieurs couches de cellules.',
      'Le terme endothélium désigne un tissu conjonctif vasculaire.',
      'L’endothélium reste un épithélium, même s’il porte un nom spécialisé.',
      'L’épithélium de transition se reconnaît par l’aspect particulier de sa couche superficielle.'
    ],
    correctChoiceIndexes: [2, 3],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'Le terme simple implique une seule couche.',
      'Il s’agit d’un épithélium spécialisé des vaisseaux.',
      'Il désigne l’épithélium des vaisseaux.',
      'C’est l’un des types de pluristratifiés.'
    ],
  },
  {
    order: 57,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'Un épithélium simple est nécessairement kératinisé.',
      'La forme à considérer pour classer un épithélium est celle des cellules posées sur la lame basale.',
      'La peau ne contient aucun épithélium.',
      'Dans un épithélium pseudostratifié, toutes les cellules touchent la lame basale mais leurs noyaux ne sont pas alignés.'
    ],
    correctChoiceIndexes: [3],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'La kératinisation concerne surtout certains pluristratifiés pavimenteux.',
      'On observe surtout les cellules les plus éloignées de la lame basale.',
      'La surface cutanée est justement revêtue par l’épiderme.',
      'Ce décalage des noyaux explique l’aspect faussement pluristratifié.'
    ],
  },
  {
    order: 58,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'L’épithélium respiratoire est l’exemple typique d’un épithélium malpighien kératinisé.',
      'L’épithélium de transition est un épithélium glandulaire.',
      'Une cellule cubique est aussi haute que large.',
      'L’épiderme est un épithélium malpighien kératinisé.'
    ],
    correctChoiceIndexes: [2, 3],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'Le cours l’oppose à ce type et le présente comme pseudostratifié cilié.',
      'Il appartient aux épithéliums de revêtement.',
      'C’est le critère morphologique de base.',
      'C’est l’exemple classique du cours.'
    ],
  },
  {
    order: 59,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'Une cellule cylindrique ou prismatique est plus haute que large.',
      'L’épiderme est un épithélium simple cylindrique.',
      'Un épithélium simple comporte une seule couche cellulaire.',
      'Une cellule pavimenteuse est peu haute et très étalée.'
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'C’est la troisième grande forme épithéliale.',
      'C’est un malpighien kératinisé.',
      'Il est aussi dit monocouche.',
      'Le cours la compare à un œuf au plat.'
    ],
  },
  {
    order: 60,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des épithéliums de revêtement :',
    choices: [
      'Dans un épithélium pseudostratifié, seules quelques cellules touchent la lame basale.',
      'Un épithélium malpighien est un épithélium pluristratifié pavimenteux.',
      'La classification des épithéliums de revêtement prend en compte le nombre de couches et la forme des cellules les plus éloignées de la lame basale.',
      'Une cellule pavimenteuse est toujours plus haute que large.'
    ],
    correctChoiceIndexes: [1, 2],
    explanation: 'Les épithéliums de revêtement se classent d’après le nombre d’assises cellulaires et la forme des cellules les plus superficielles.',
    choiceExplanations: [
      'Toutes la touchent dans cette variété.',
      'Il peut être kératinisé ou non kératinisé.',
      'C’est le double critère central du cours.',
      'Elle est au contraire aplatie.'
    ],
  }
];

export const SECTION_C_QUIZZES: SeedQuiz[] = [
{
  order: 1,
  slug: 'classer-un-epithelium-de-revetement',
  title: 'Classer un épithélium de revêtement',
  description: 'Classification des épithéliums simples, pluristratifiés et pseudostratifiés.',
  stage: 'DISCOVER',
  sectionOrder: 3,
  questionOrders: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
},
{
  order: 2,
  slug: 'reconnaissance-et-nomenclature',
  title: 'Reconnaissance et nomenclature',
  description: 'Repérage des principales dénominations spécialisées et des exemples d’épithéliums.',
  stage: 'PRACTICE',
  sectionOrder: 3,
  questionOrders: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
}
];
