import type { SeedQuestion, SeedQuiz } from './health-training-ue13.shared';
export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'La figure suivante compare trois types de cellules musculaires.\n\n![Types musculaires](/images/training/ue13/histologie/tissus-musculaires/types-musculaires.svg)\n\nÀ propos de cette figure :',
    choices: [
      'A évoque un rhabdomyocyte strié, allongé et plurinucléé.',
      'B évoque un cardiomyocyte strié, ramifié et à noyau central.',
      'C évoque un léiomyocyte fusiforme, non strié et à noyau central.',
      'Les trois cellules représentées possèdent nécessairement des sarcomères.'
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: 'Le muscle squelettique et le muscle cardiaque sont striés et possèdent des sarcomères ; le muscle lisse est fusiforme, non strié et sans sarcomère.',
    choiceExplanations: [
      'A reprend les principaux caractères du rhabdomyocyte.',
      'B montre une cellule ramifiée à noyau central, compatible avec un cardiomyocyte.',
      'C représente une cellule fusiforme à noyau central, compatible avec un léiomyocyte.',
      'Le muscle lisse ne possède pas de sarcomère.'
    ],
  },
  {
    order: 2,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Le rhabdomyocyte est multinucléé avec des noyaux périphériques aplatis.',
      'L’excitabilité, la contractilité, l’élasticité et l’extensibilité font partie des propriétés musculaires.',
      'Le muscle strié squelettique est non strié au microscope optique.',
      'Le léiomyocyte est une cellule fusiforme à noyau central sans sarcomère.'
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'C’est la cellule du muscle strié squelettique.',
      'Le cours ajoute aussi tonicité et plasticité.',
      'Il présente des stries liées aux myofibrilles alignées.',
      'Il correspond à la cellule musculaire lisse.'
    ],
  },
  {
    order: 3,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Tous les tissus musculaires sont volontairement contrôlés.',
      'Le muscle cardiaque est un muscle strié involontaire propre au cœur.',
      'L’hyperplasie est la forme d’adaptation principale du myocarde adulte.',
      'Le léiomyocyte contient plusieurs noyaux périphériques aplatis.'
    ],
    correctChoiceIndexes: [1],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Le muscle cardiaque et le muscle lisse sont involontaires.',
      'Il présente une activité rythmique et automatique.',
      'Le cours réserve surtout l’hyperplasie au muscle lisse.',
      'Il possède un noyau unique central, elliptique.'
    ],
  },
  {
    order: 4,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Le cardiomyocyte est la cellule la plus longue de l’organisme, avec des centaines de micromètres et de très nombreux noyaux périphériques.',
      'Une fibre musculaire correspond à une cellule musculaire, appelée myocyte.',
      'Le muscle lisse est toujours plus rapide que les deux autres types musculaires.',
      'Le muscle lisse est non strié, involontaire et présent dans la paroi des organes creux.'
    ],
    correctChoiceIndexes: [1, 3],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Cette description correspond au rhabdomyocyte.',
      'Le cours emploie ces termes comme équivalents.',
      'Sa contraction est lente et soutenue ou rythmique.',
      'Sa contraction est lente et soutenue.'
    ],
  },
  {
    order: 5,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'La contraction musculaire repose sur l’interaction entre des filaments d’actine et de myosine.',
      'Le muscle strié squelettique est volontaire, rapide et inséré sur les os via des tendons.',
      'Le muscle lisse est le plus riche en sarcomères visibles.',
      'La plasticité musculaire correspond à une adaptation structurale à la charge de travail.'
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Le glissement de ces filaments consomme de l’ATP et implique le calcium.',
      'Il assure locomotion, posture et mouvements volontaires.',
      'Il ne possède pas de sarcomères.',
      'Elle peut se traduire par hypertrophie, hyperplasie du muscle lisse ou atrophie.'
    ],
  },
  {
    order: 6,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Le tissu musculaire n’est pas associé à du tissu conjonctif.',
      'Le muscle cardiaque régénère activement grâce à des cellules satellites abondantes.',
      'Le léiomyocyte est une cellule fusiforme à noyau central sans sarcomère.',
      'Le cardiomyocyte possède un noyau unique central.'
    ],
    correctChoiceIndexes: [2, 3],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Les fibres musculaires sont maintenues par du tissu conjonctif.',
      'Sa régénération est considérée comme absente.',
      'Il correspond à la cellule musculaire lisse.',
      'Le tableau comparatif le précise.'
    ],
  },
  {
    order: 7,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Le léiomyocyte contient plusieurs noyaux périphériques aplatis.',
      'La tonicité signifie qu’un muscle est totalement dépourvu de tension au repos.',
      'Le rhabdomyocyte est multinucléé avec des noyaux périphériques aplatis.',
      'Le muscle strié squelettique est non strié au microscope optique.'
    ],
    correctChoiceIndexes: [2],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Il possède un noyau unique central, elliptique.',
      'Elle correspond à un état permanent de tension.',
      'C’est la cellule du muscle strié squelettique.',
      'Il présente des stries liées aux myofibrilles alignées.'
    ],
  },
  {
    order: 8,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'L’excitabilité, la contractilité, l’élasticité et l’extensibilité font partie des propriétés musculaires.',
      'L’hyperplasie est la forme d’adaptation principale du myocarde adulte.',
      'Tous les tissus musculaires sont volontairement contrôlés.',
      'Le muscle cardiaque est un muscle strié involontaire propre au cœur.'
    ],
    correctChoiceIndexes: [0, 3],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Le cours ajoute aussi tonicité et plasticité.',
      'Le cours réserve surtout l’hyperplasie au muscle lisse.',
      'Le muscle cardiaque et le muscle lisse sont involontaires.',
      'Il présente une activité rythmique et automatique.'
    ],
  },
  {
    order: 9,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Une fibre musculaire correspond à une cellule musculaire, appelée myocyte.',
      'Le muscle lisse est non strié, involontaire et présent dans la paroi des organes creux.',
      'La contraction musculaire repose sur l’interaction entre des filaments d’actine et de myosine.',
      'Le muscle strié squelettique est volontaire, rapide et inséré sur les os via des tendons.'
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Le cours emploie ces termes comme équivalents.',
      'Sa contraction est lente et soutenue.',
      'Le glissement de ces filaments consomme de l’ATP et implique le calcium.',
      'Il assure locomotion, posture et mouvements volontaires.'
    ],
  },
  {
    order: 10,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Le muscle cardiaque régénère activement grâce à des cellules satellites abondantes.',
      'Le muscle lisse est le plus riche en sarcomères visibles.',
      'Le muscle lisse est toujours plus rapide que les deux autres types musculaires.',
      'Le cardiomyocyte est la cellule la plus longue de l’organisme, avec des centaines de micromètres et de très nombreux noyaux périphériques.'
    ],
    correctChoiceIndexes: [],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Sa régénération est considérée comme absente.',
      'Il ne possède pas de sarcomères.',
      'Sa contraction est lente et soutenue ou rythmique.',
      'Cette description correspond au rhabdomyocyte.'
    ],
  },
  {
    order: 11,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'La plasticité musculaire correspond à une adaptation structurale à la charge de travail.',
      'Le cardiomyocyte possède un noyau unique central.',
      'Le tissu musculaire n’est pas associé à du tissu conjonctif.',
      'La tonicité signifie qu’un muscle est totalement dépourvu de tension au repos.'
    ],
    correctChoiceIndexes: [0, 1],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Elle peut se traduire par hypertrophie, hyperplasie du muscle lisse ou atrophie.',
      'Le tableau comparatif le précise.',
      'Les fibres musculaires sont maintenues par du tissu conjonctif.',
      'Elle correspond à un état permanent de tension.'
    ],
  },
  {
    order: 12,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Le léiomyocyte est une cellule fusiforme à noyau central sans sarcomère.',
      'L’excitabilité, la contractilité, l’élasticité et l’extensibilité font partie des propriétés musculaires.',
      'Le rhabdomyocyte est multinucléé avec des noyaux périphériques aplatis.',
      'Le muscle strié squelettique est non strié au microscope optique.'
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Il correspond à la cellule musculaire lisse.',
      'Le cours ajoute aussi tonicité et plasticité.',
      'C’est la cellule du muscle strié squelettique.',
      'Il présente des stries liées aux myofibrilles alignées.'
    ],
  },
  {
    order: 13,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Tous les tissus musculaires sont volontairement contrôlés.',
      'Le muscle cardiaque est un muscle strié involontaire propre au cœur.',
      'Le léiomyocyte contient plusieurs noyaux périphériques aplatis.',
      'L’hyperplasie est la forme d’adaptation principale du myocarde adulte.'
    ],
    correctChoiceIndexes: [1],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Le muscle cardiaque et le muscle lisse sont involontaires.',
      'Il présente une activité rythmique et automatique.',
      'Il possède un noyau unique central, elliptique.',
      'Le cours réserve surtout l’hyperplasie au muscle lisse.'
    ],
  },
  {
    order: 14,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Le muscle lisse est non strié, involontaire et présent dans la paroi des organes creux.',
      'Le muscle lisse est toujours plus rapide que les deux autres types musculaires.',
      'Le cardiomyocyte est la cellule la plus longue de l’organisme, avec des centaines de micromètres et de très nombreux noyaux périphériques.',
      'Une fibre musculaire correspond à une cellule musculaire, appelée myocyte.'
    ],
    correctChoiceIndexes: [0, 3],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Sa contraction est lente et soutenue.',
      'Sa contraction est lente et soutenue ou rythmique.',
      'Cette description correspond au rhabdomyocyte.',
      'Le cours emploie ces termes comme équivalents.'
    ],
  },
  {
    order: 15,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Le muscle lisse est le plus riche en sarcomères visibles.',
      'La plasticité musculaire correspond à une adaptation structurale à la charge de travail.',
      'La contraction musculaire repose sur l’interaction entre des filaments d’actine et de myosine.',
      'Le muscle strié squelettique est volontaire, rapide et inséré sur les os via des tendons.'
    ],
    correctChoiceIndexes: [1, 2, 3],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Il ne possède pas de sarcomères.',
      'Elle peut se traduire par hypertrophie, hyperplasie du muscle lisse ou atrophie.',
      'Le glissement de ces filaments consomme de l’ATP et implique le calcium.',
      'Il assure locomotion, posture et mouvements volontaires.'
    ],
  },
  {
    order: 16,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Le cardiomyocyte possède un noyau unique central.',
      'Le tissu musculaire n’est pas associé à du tissu conjonctif.',
      'Le léiomyocyte est une cellule fusiforme à noyau central sans sarcomère.',
      'Le muscle cardiaque régénère activement grâce à des cellules satellites abondantes.'
    ],
    correctChoiceIndexes: [0, 2],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Le tableau comparatif le précise.',
      'Les fibres musculaires sont maintenues par du tissu conjonctif.',
      'Il correspond à la cellule musculaire lisse.',
      'Sa régénération est considérée comme absente.'
    ],
  },
  {
    order: 17,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Le rhabdomyocyte est multinucléé avec des noyaux périphériques aplatis.',
      'Le muscle strié squelettique est non strié au microscope optique.',
      'La tonicité signifie qu’un muscle est totalement dépourvu de tension au repos.',
      'Le léiomyocyte contient plusieurs noyaux périphériques aplatis.'
    ],
    correctChoiceIndexes: [0],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'C’est la cellule du muscle strié squelettique.',
      'Il présente des stries liées aux myofibrilles alignées.',
      'Elle correspond à un état permanent de tension.',
      'Il possède un noyau unique central, elliptique.'
    ],
  },
  {
    order: 18,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'L’hyperplasie est la forme d’adaptation principale du myocarde adulte.',
      'Tous les tissus musculaires sont volontairement contrôlés.',
      'L’excitabilité, la contractilité, l’élasticité et l’extensibilité font partie des propriétés musculaires.',
      'Le muscle cardiaque est un muscle strié involontaire propre au cœur.'
    ],
    correctChoiceIndexes: [2, 3],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Le cours réserve surtout l’hyperplasie au muscle lisse.',
      'Le muscle cardiaque et le muscle lisse sont involontaires.',
      'Le cours ajoute aussi tonicité et plasticité.',
      'Il présente une activité rythmique et automatique.'
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Le muscle lisse est non strié, involontaire et présent dans la paroi des organes creux.',
      'Le cardiomyocyte est la cellule la plus longue de l’organisme, avec des centaines de micromètres et de très nombreux noyaux périphériques.',
      'La contraction musculaire repose sur l’interaction entre des filaments d’actine et de myosine.',
      'Une fibre musculaire correspond à une cellule musculaire, appelée myocyte.'
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Sa contraction est lente et soutenue.',
      'Cette description correspond au rhabdomyocyte.',
      'Le glissement de ces filaments consomme de l’ATP et implique le calcium.',
      'Le cours emploie ces termes comme équivalents.'
    ],
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos des généralités et de la classification des tissus musculaires :',
    choices: [
      'Le muscle lisse est toujours plus rapide que les deux autres types musculaires.',
      'Le muscle strié squelettique est volontaire, rapide et inséré sur les os via des tendons.',
      'Le muscle lisse est le plus riche en sarcomères visibles.',
      'La plasticité musculaire correspond à une adaptation structurale à la charge de travail.'
    ],
    correctChoiceIndexes: [1, 3],
    explanation: 'Le tissu musculaire comprend des myocytes contractiles, organisés en différents types selon leur structure, leur contrôle et leur fonction.',
    choiceExplanations: [
      'Sa contraction est lente et soutenue ou rythmique.',
      'Il assure locomotion, posture et mouvements volontaires.',
      'Il ne possède pas de sarcomères.',
      'Elle peut se traduire par hypertrophie, hyperplasie du muscle lisse ou atrophie.'
    ],
  }
];

export const SECTION_A_QUIZZES: SeedQuiz[] = [
{
  order: 1,
  slug: 'reperes-generaux-des-tissus-musculaires',
  title: 'Repères généraux des tissus musculaires',
  description: 'Définition, propriétés et grandes fonctions du tissu musculaire.',
  stage: 'DISCOVER',
  sectionOrder: 1,
  questionOrders: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
},
{
  order: 2,
  slug: 'comparer-les-trois-types-musculaires',
  title: 'Comparer les trois types musculaires',
  description: 'Comparaison entre muscle strié squelettique, cardiaque et lisse.',
  stage: 'PRACTICE',
  sectionOrder: 1,
  questionOrders: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
}
];
