import type { SeedQuestion, SeedQuiz } from './health-training-ue13.shared';
export const SECTION_D_QUESTIONS: SeedQuestion[] = [
  {
    order: 61,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'La figure suivante compare deux modalités de myélinisation.\n\n![Myélinisation SNC et SNP](/images/training/ue13/histologie/tissus-nerveux/myelinisation-snc-snp.svg)\n\nÀ propos de cette figure :',
    choices: [
      'A évoque un oligodendrocyte du SNC capable de myéliniser plusieurs axones.',
      'B évoque une cellule de Schwann myélinisante du SNP associée à un seul axone.',
      'A et B appartiennent toutes deux au système nerveux périphérique.',
      'La myéline représentée augmente la vitesse de conduction de l’influx nerveux.'
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: 'L’oligodendrocyte myélinise plusieurs axones dans le SNC, tandis qu’une cellule de Schwann myélinisante entoure un seul axone dans le SNP.',
    choiceExplanations: [
      'Le schéma A montre une cellule gliale envoyant plusieurs prolongements vers plusieurs axones.',
      'Le schéma B montre une cellule unique entourant un segment d’un axone périphérique.',
      'L’oligodendrocyte appartient au SNC.',
      'La gaine de myéline favorise une conduction plus rapide, notamment par conduction saltatoire.'
    ],
  },
  {
    order: 62,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'La myéline périphérique ralentit la conduction nerveuse.',
      'Dans le SNP, l’architecture est assurée par un véritable tissu conjonctif.',
      'Une fibre de Remak ne présente pas de couverture myélinique complète.',
      'Les cellules satellites sont au contact des neurones dans les ganglions périphériques.'
    ],
    correctChoiceIndexes: [1, 2, 3],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Elle l’augmente.',
      'Cela distingue le SNP du SNC.',
      'La cellule de Schwann non myélinisante entoure plusieurs axones sans les isoler totalement.',
      'Elles assurent notamment protection et nutrition.'
    ],
  },
  {
    order: 63,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Les cellules satellites sont également des cellules gliales du SNP.',
      'Les fibres de Remak sont les segments de myéline produits par les oligodendrocytes.',
      'Une cellule de Schwann myélinisante peut entourer simultanément plusieurs axones éloignés.',
      'Les cellules satellites bordent les ventricules cérébraux.'
    ],
    correctChoiceIndexes: [0],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Elles entourent les neurones ganglionnaires.',
      'Les fibres de Remak sont des ensembles d’axones entourés par une cellule de Schwann non myélinisante.',
      'Une cellule myélinisante est associée à un seul axone.',
      'Ce rôle revient aux épendymocytes ; les cellules satellites entourent les neurones des ganglions.'
    ],
  },
  {
    order: 64,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Le cours décrit les cellules de Schwann comme des macrophages du SNP.',
      'La myéline périphérique augmente la conduction du flux nerveux.',
      'Le SNP permet de visualiser des fibres de collagène et des noyaux de fibroblastes dans le tissu conjonctif.',
      'Les cellules de Schwann appartiennent au SNC et myélinisent plusieurs axones à la fois.'
    ],
    correctChoiceIndexes: [1, 2],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Leur rôle principal est l’enveloppement des axones et la myélinisation.',
      'Elle protège également les axones.',
      'Le cours oppose ce point au SNC.',
      'Elles appartiennent au SNP et une cellule myélinisante entoure un seul axone.'
    ],
  },
  {
    order: 65,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Une cellule de Schwann non myélinisante peut entourer plusieurs axones : on parle de fibre de Remak.',
      'Une cellule de Schwann myélinisante myélinise un seul axone.',
      'La cellule de Schwann est une cellule gliale du SNP.',
      'Les cellules gliales du SNP sont les astrocytes et les oligodendrocytes.'
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Ces axones ne sont pas totalement isolés.',
      'C’est une différence majeure avec l’oligodendrocyte.',
      'Elle n’appartient pas au SNC.',
      'Ces cellules appartiennent au SNC ; dans le SNP on trouve surtout Schwann et satellites.'
    ],
  },
  {
    order: 66,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Le SNP ne comporte jamais d’axones non myélinisés.',
      'Le SNP est dépourvu de tissu conjonctif.',
      'Une fibre de Remak ne présente pas de couverture myélinique complète.',
      'Les cellules de Schwann entourent les axones dans le système nerveux périphérique.'
    ],
    correctChoiceIndexes: [2, 3],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Les fibres de Remak en sont un exemple.',
      'Il en contient au contraire beaucoup, ce qui structure les nerfs et ganglions.',
      'La cellule de Schwann non myélinisante entoure plusieurs axones sans les isoler totalement.',
      'Elles peuvent former une gaine de myéline ou non.'
    ],
  },
  {
    order: 67,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'La myéline périphérique ralentit la conduction nerveuse.',
      'Les cellules satellites sont les cellules responsables de la contraction des ganglions périphériques.',
      'Une cellule de Schwann myélinisante peut entourer simultanément plusieurs axones éloignés.',
      'Les cellules satellites sont au contact des neurones dans les ganglions périphériques.'
    ],
    correctChoiceIndexes: [3],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Elle l’augmente.',
      'Elles sont des cellules gliales de soutien.',
      'Une cellule myélinisante est associée à un seul axone.',
      'Elles assurent notamment protection et nutrition.'
    ],
  },
  {
    order: 68,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Les cellules satellites sont également des cellules gliales du SNP.',
      'Dans le SNP, l’architecture est assurée par un véritable tissu conjonctif.',
      'Les fibres de Remak sont les segments de myéline produits par les oligodendrocytes.',
      'Les cellules satellites bordent les ventricules cérébraux.'
    ],
    correctChoiceIndexes: [0, 1],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Elles entourent les neurones ganglionnaires.',
      'Cela distingue le SNP du SNC.',
      'Les fibres de Remak sont des ensembles d’axones entourés par une cellule de Schwann non myélinisante.',
      'Ce rôle revient aux épendymocytes ; les cellules satellites entourent les neurones des ganglions.'
    ],
  },
  {
    order: 69,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'La myéline périphérique augmente la conduction du flux nerveux.',
      'Une cellule de Schwann non myélinisante peut entourer plusieurs axones : on parle de fibre de Remak.',
      'La cellule de Schwann est une cellule gliale du SNP.',
      'Le SNP permet de visualiser des fibres de collagène et des noyaux de fibroblastes dans le tissu conjonctif.'
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Elle protège également les axones.',
      'Ces axones ne sont pas totalement isolés.',
      'Elle n’appartient pas au SNC.',
      'Le cours oppose ce point au SNC.'
    ],
  },
  {
    order: 70,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Le SNP est dépourvu de tissu conjonctif.',
      'Les cellules gliales du SNP sont les astrocytes et les oligodendrocytes.',
      'Les cellules de Schwann appartiennent au SNC et myélinisent plusieurs axones à la fois.',
      'Le cours décrit les cellules de Schwann comme des macrophages du SNP.'
    ],
    correctChoiceIndexes: [],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Il en contient au contraire beaucoup, ce qui structure les nerfs et ganglions.',
      'Ces cellules appartiennent au SNC ; dans le SNP on trouve surtout Schwann et satellites.',
      'Elles appartiennent au SNP et une cellule myélinisante entoure un seul axone.',
      'Leur rôle principal est l’enveloppement des axones et la myélinisation.'
    ],
  },
  {
    order: 71,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Les cellules de Schwann entourent les axones dans le système nerveux périphérique.',
      'Une cellule de Schwann myélinisante myélinise un seul axone.',
      'Les cellules satellites sont les cellules responsables de la contraction des ganglions périphériques.',
      'Le SNP ne comporte jamais d’axones non myélinisés.'
    ],
    correctChoiceIndexes: [0, 1],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Elles peuvent former une gaine de myéline ou non.',
      'C’est une différence majeure avec l’oligodendrocyte.',
      'Elles sont des cellules gliales de soutien.',
      'Les fibres de Remak en sont un exemple.'
    ],
  },
  {
    order: 72,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Les cellules satellites sont au contact des neurones dans les ganglions périphériques.',
      'La myéline périphérique ralentit la conduction nerveuse.',
      'Dans le SNP, l’architecture est assurée par un véritable tissu conjonctif.',
      'Une fibre de Remak ne présente pas de couverture myélinique complète.'
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Elles assurent notamment protection et nutrition.',
      'Elle l’augmente.',
      'Cela distingue le SNP du SNC.',
      'La cellule de Schwann non myélinisante entoure plusieurs axones sans les isoler totalement.'
    ],
  },
  {
    order: 73,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Les cellules satellites bordent les ventricules cérébraux.',
      'Une cellule de Schwann myélinisante peut entourer simultanément plusieurs axones éloignés.',
      'Les cellules satellites sont également des cellules gliales du SNP.',
      'Les fibres de Remak sont les segments de myéline produits par les oligodendrocytes.'
    ],
    correctChoiceIndexes: [2],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Ce rôle revient aux épendymocytes ; les cellules satellites entourent les neurones des ganglions.',
      'Une cellule myélinisante est associée à un seul axone.',
      'Elles entourent les neurones ganglionnaires.',
      'Les fibres de Remak sont des ensembles d’axones entourés par une cellule de Schwann non myélinisante.'
    ],
  },
  {
    order: 74,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Le cours décrit les cellules de Schwann comme des macrophages du SNP.',
      'Les cellules de Schwann appartiennent au SNC et myélinisent plusieurs axones à la fois.',
      'La myéline périphérique augmente la conduction du flux nerveux.',
      'Le SNP permet de visualiser des fibres de collagène et des noyaux de fibroblastes dans le tissu conjonctif.'
    ],
    correctChoiceIndexes: [2, 3],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Leur rôle principal est l’enveloppement des axones et la myélinisation.',
      'Elles appartiennent au SNP et une cellule myélinisante entoure un seul axone.',
      'Elle protège également les axones.',
      'Le cours oppose ce point au SNC.'
    ],
  },
  {
    order: 75,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Une cellule de Schwann non myélinisante peut entourer plusieurs axones : on parle de fibre de Remak.',
      'La cellule de Schwann est une cellule gliale du SNP.',
      'Une cellule de Schwann myélinisante myélinise un seul axone.',
      'Les cellules gliales du SNP sont les astrocytes et les oligodendrocytes.'
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Ces axones ne sont pas totalement isolés.',
      'Elle n’appartient pas au SNC.',
      'C’est une différence majeure avec l’oligodendrocyte.',
      'Ces cellules appartiennent au SNC ; dans le SNP on trouve surtout Schwann et satellites.'
    ],
  },
  {
    order: 76,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Les cellules de Schwann entourent les axones dans le système nerveux périphérique.',
      'Le SNP ne comporte jamais d’axones non myélinisés.',
      'Une fibre de Remak ne présente pas de couverture myélinique complète.',
      'Le SNP est dépourvu de tissu conjonctif.'
    ],
    correctChoiceIndexes: [0, 2],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Elles peuvent former une gaine de myéline ou non.',
      'Les fibres de Remak en sont un exemple.',
      'La cellule de Schwann non myélinisante entoure plusieurs axones sans les isoler totalement.',
      'Il en contient au contraire beaucoup, ce qui structure les nerfs et ganglions.'
    ],
  },
  {
    order: 77,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Une cellule de Schwann myélinisante peut entourer simultanément plusieurs axones éloignés.',
      'Les cellules satellites sont au contact des neurones dans les ganglions périphériques.',
      'Les cellules satellites sont les cellules responsables de la contraction des ganglions périphériques.',
      'La myéline périphérique ralentit la conduction nerveuse.'
    ],
    correctChoiceIndexes: [1],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Une cellule myélinisante est associée à un seul axone.',
      'Elles assurent notamment protection et nutrition.',
      'Elles sont des cellules gliales de soutien.',
      'Elle l’augmente.'
    ],
  },
  {
    order: 78,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Les fibres de Remak sont les segments de myéline produits par les oligodendrocytes.',
      'Les cellules satellites bordent les ventricules cérébraux.',
      'Dans le SNP, l’architecture est assurée par un véritable tissu conjonctif.',
      'Les cellules satellites sont également des cellules gliales du SNP.'
    ],
    correctChoiceIndexes: [2, 3],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Les fibres de Remak sont des ensembles d’axones entourés par une cellule de Schwann non myélinisante.',
      'Ce rôle revient aux épendymocytes ; les cellules satellites entourent les neurones des ganglions.',
      'Cela distingue le SNP du SNC.',
      'Elles entourent les neurones ganglionnaires.'
    ],
  },
  {
    order: 79,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'Le SNP permet de visualiser des fibres de collagène et des noyaux de fibroblastes dans le tissu conjonctif.',
      'Une cellule de Schwann non myélinisante peut entourer plusieurs axones : on parle de fibre de Remak.',
      'Le cours décrit les cellules de Schwann comme des macrophages du SNP.',
      'La myéline périphérique augmente la conduction du flux nerveux.'
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Le cours oppose ce point au SNC.',
      'Ces axones ne sont pas totalement isolés.',
      'Leur rôle principal est l’enveloppement des axones et la myélinisation.',
      'Elle protège également les axones.'
    ],
  },
  {
    order: 80,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos de la névroglie du système nerveux périphérique :',
    choices: [
      'La cellule de Schwann est une cellule gliale du SNP.',
      'Les cellules gliales du SNP sont les astrocytes et les oligodendrocytes.',
      'Une cellule de Schwann myélinisante myélinise un seul axone.',
      'Les cellules de Schwann appartiennent au SNC et myélinisent plusieurs axones à la fois.'
    ],
    correctChoiceIndexes: [0, 2],
    explanation: 'Dans le SNP, les cellules de Schwann entourent les axones avec ou sans myéline et les cellules satellites accompagnent les neurones ganglionnaires.',
    choiceExplanations: [
      'Elle n’appartient pas au SNC.',
      'Ces cellules appartiennent au SNC ; dans le SNP on trouve surtout Schwann et satellites.',
      'C’est une différence majeure avec l’oligodendrocyte.',
      'Elles appartiennent au SNP et une cellule myélinisante entoure un seul axone.'
    ],
  }
];

export const SECTION_D_QUIZZES: SeedQuiz[] = [
{
  order: 1,
  slug: 'cellules-de-schwann-et-myelinisation-peripherique',
  title: 'Cellules de Schwann et myélinisation périphérique',
  description: 'Organisation des cellules de Schwann dans le SNP.',
  stage: 'DISCOVER',
  sectionOrder: 4,
  questionOrders: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
},
{
  order: 2,
  slug: 'cellules-satellites-et-distinctions-snc-snp',
  title: 'Cellules satellites et distinctions SNC/SNP',
  description: 'Autres cellules gliales périphériques et grandes différences entre SNC et SNP.',
  stage: 'PRACTICE',
  sectionOrder: 4,
  questionOrders: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
}
];
