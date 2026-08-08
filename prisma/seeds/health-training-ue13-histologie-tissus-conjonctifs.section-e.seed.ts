import type { SeedQuestion, SeedQuiz } from './health-training-ue13.shared';
export const SECTION_E_QUESTIONS: SeedQuestion[] = [
  {
    order: 81,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'La figure suivante schématise un ostéon en coupe transversale.\n\n![Ostéon](/images/training/ue13/histologie/tissus-conjonctifs/osteon.svg)\n\nÀ propos de cette organisation :',
    choices: [
      'Le repère 1 correspond au canal de Havers central.',
      'Les anneaux concentriques représentent les lamelles osseuses.',
      'Les petites logettes ovalaires peuvent contenir des ostéocytes.',
      'Un ostéon est une unité caractéristique de l’os lamellaire spongieux uniquement.'
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: 'L’ostéon est l’unité cylindrique de l’os compact, constituée de lamelles concentriques autour d’un canal de Havers et contenant des ostéocytes dans des ostéoplastes.',
    choiceExplanations: [
      'Le canal central contient vaisseaux et nerfs.',
      'Les lamelles s’organisent concentriquement autour du canal.',
      'Les ostéocytes siègent dans des ostéoplastes reliés par des canalicules.',
      'L’ostéon caractérise surtout l’os lamellaire compact.'
    ],
  },
  {
    order: 82,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'Le canal de Havers contient des vaisseaux et des nerfs.',
      'Les ostéoblastes sont les cellules de synthèse de la matrice osseuse situées en bordure de l’os.',
      'Le renouvellement osseux n’a aucun rôle métabolique dans l’homéostasie calcique.',
      'La matrice organique osseuse contient majoritairement du collagène de type I.'
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'C’est l’axe central de l’ostéon.',
      'Au repos, ils deviennent des cellules bordantes.',
      'Il participe au maintien de l’équilibre phosphocalcique.',
      'Elle renferme aussi GAG, acide hyaluronique et glycoprotéines spécifiques.'
    ],
  },
  {
    order: 83,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'Le périoste est une enveloppe cartilagineuse avasculaire.',
      'Le tissu osseux est un tissu conjonctif spécialisé à substance fondamentale solide minéralisée.',
      'L’os spongieux est exclusivement périphérique et forme la corticale.',
      'Les ostéocytes ne peuvent communiquer entre eux car l’os est dépourvu de canalicules.'
    ],
    correctChoiceIndexes: [1],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'Il est fibreux et vascularisé.',
      'Les minéraux lui confèrent rigidité et dureté.',
      'C’est l’os compact qui est périphérique.',
      'Ils sont reliés par de longues expansions dans les canalicules.'
    ],
  },
  {
    order: 84,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'L’os tissé constitue la forme osseuse adulte définitive la plus organisée.',
      'Le périoste comporte une couche fibreuse externe et une couche cellulaire interne.',
      'Les ostéoclastes sont de grandes cellules multinucléées résorbant la matrice osseuse.',
      'Les ostéoblastes résident au centre des ostéoplastes et résorbent l’os.'
    ],
    correctChoiceIndexes: [1, 2],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'Il est immature et transitoire.',
      'Il recouvre l’os sauf au niveau des surfaces articulaires.',
      'Ils dérivent de la fusion de monocytes.',
      'La résorption relève des ostéoclastes ; les ostéoblastes sont en bordure.'
    ],
  },
  {
    order: 85,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'Le tissu osseux est pauvrement vascularisé et non innervé, comme le cartilage.',
      'Le remodelage osseux contribue à l’équilibre phosphocalcique et à l’adaptation mécanique.',
      'L’os tissé est un os immature, provisoire, présent dans l’ossification et la réparation des fractures.',
      'Les cristaux d’hydroxyapatite constituent la composante minérale de l’os.'
    ],
    correctChoiceIndexes: [1, 2, 3],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'C’est l’inverse : l’os est richement vascularisé et innervé.',
      'Il repose sur l’activité des ostéoclastes et ostéoblastes.',
      'Ses fibres de collagène sont désorganisées.',
      'Ils sont faits de phosphate et de calcium.'
    ],
  },
  {
    order: 86,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'Un ostéon est une cavité contenant uniquement de la moelle osseuse, sans lamelles.',
      'Les ostéocytes occupent des logettes appelées ostéoplastes et communiquent par des canalicules.',
      'L’ossification endochondrale assure la croissance en épaisseur à partir du périoste.',
      'L’os lamellaire spongieux s’organise en travées entourant des espaces contenant de la moelle hématopoïétique.'
    ],
    correctChoiceIndexes: [1, 3],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'Il s’agit d’un cylindre de lamelles concentriques autour d’un canal central.',
      'Ils correspondent aux formes osseuses plus quiescentes.',
      'La croissance en épaisseur relève surtout de l’ossification périostique.',
      'Il est situé en interne, notamment dans les épiphyses.'
    ],
  },
  {
    order: 87,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'L’os spongieux est exclusivement périphérique et forme la corticale.',
      'L’os lamellaire compact est constitué d’ostéons ou systèmes de Havers.',
      'Le renouvellement osseux n’a aucun rôle métabolique dans l’homéostasie calcique.',
      'La matrice osseuse adulte est surtout faite de collagène de type II.'
    ],
    correctChoiceIndexes: [1],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'C’est l’os compact qui est périphérique.',
      'Chaque ostéon contient un canal de Havers central.',
      'Il participe au maintien de l’équilibre phosphocalcique.',
      'Le collagène majoritaire est le type I.'
    ],
  },
  {
    order: 88,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'Le périoste est une enveloppe cartilagineuse avasculaire.',
      'La matrice organique osseuse contient majoritairement du collagène de type I.',
      'Le canal de Havers contient des vaisseaux et des nerfs.',
      'Les ostéocytes ne peuvent communiquer entre eux car l’os est dépourvu de canalicules.'
    ],
    correctChoiceIndexes: [1, 2],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'Il est fibreux et vascularisé.',
      'Elle renferme aussi GAG, acide hyaluronique et glycoprotéines spécifiques.',
      'C’est l’axe central de l’ostéon.',
      'Ils sont reliés par de longues expansions dans les canalicules.'
    ],
  },
  {
    order: 89,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'Le périoste comporte une couche fibreuse externe et une couche cellulaire interne.',
      'Le tissu osseux est un tissu conjonctif spécialisé à substance fondamentale solide minéralisée.',
      'Les ostéoclastes sont de grandes cellules multinucléées résorbant la matrice osseuse.',
      'Les ostéoblastes sont les cellules de synthèse de la matrice osseuse situées en bordure de l’os.'
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'Il recouvre l’os sauf au niveau des surfaces articulaires.',
      'Les minéraux lui confèrent rigidité et dureté.',
      'Ils dérivent de la fusion de monocytes.',
      'Au repos, ils deviennent des cellules bordantes.'
    ],
  },
  {
    order: 90,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'L’ossification endochondrale assure la croissance en épaisseur à partir du périoste.',
      'Les ostéoblastes résident au centre des ostéoplastes et résorbent l’os.',
      'Le tissu osseux est pauvrement vascularisé et non innervé, comme le cartilage.',
      'L’os tissé constitue la forme osseuse adulte définitive la plus organisée.'
    ],
    correctChoiceIndexes: [],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'La croissance en épaisseur relève surtout de l’ossification périostique.',
      'La résorption relève des ostéoclastes ; les ostéoblastes sont en bordure.',
      'C’est l’inverse : l’os est richement vascularisé et innervé.',
      'Il est immature et transitoire.'
    ],
  },
  {
    order: 91,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'Les cristaux d’hydroxyapatite constituent la composante minérale de l’os.',
      'La matrice osseuse adulte est surtout faite de collagène de type II.',
      'Un ostéon est une cavité contenant uniquement de la moelle osseuse, sans lamelles.',
      'Le remodelage osseux contribue à l’équilibre phosphocalcique et à l’adaptation mécanique.'
    ],
    correctChoiceIndexes: [0, 3],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'Ils sont faits de phosphate et de calcium.',
      'Le collagène majoritaire est le type I.',
      'Il s’agit d’un cylindre de lamelles concentriques autour d’un canal central.',
      'Il repose sur l’activité des ostéoclastes et ostéoblastes.'
    ],
  },
  {
    order: 92,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'L’os tissé est un os immature, provisoire, présent dans l’ossification et la réparation des fractures.',
      'L’os lamellaire spongieux s’organise en travées entourant des espaces contenant de la moelle hématopoïétique.',
      'Les ostéocytes occupent des logettes appelées ostéoplastes et communiquent par des canalicules.',
      'Le renouvellement osseux n’a aucun rôle métabolique dans l’homéostasie calcique.'
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'Ses fibres de collagène sont désorganisées.',
      'Il est situé en interne, notamment dans les épiphyses.',
      'Ils correspondent aux formes osseuses plus quiescentes.',
      'Il participe au maintien de l’équilibre phosphocalcique.'
    ],
  },
  {
    order: 93,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'L’os lamellaire compact est constitué d’ostéons ou systèmes de Havers.',
      'L’os spongieux est exclusivement périphérique et forme la corticale.',
      'Le périoste est une enveloppe cartilagineuse avasculaire.',
      'Les ostéocytes ne peuvent communiquer entre eux car l’os est dépourvu de canalicules.'
    ],
    correctChoiceIndexes: [0],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'Chaque ostéon contient un canal de Havers central.',
      'C’est l’os compact qui est périphérique.',
      'Il est fibreux et vascularisé.',
      'Ils sont reliés par de longues expansions dans les canalicules.'
    ],
  },
  {
    order: 94,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'Les ostéoblastes résident au centre des ostéoplastes et résorbent l’os.',
      'L’os tissé constitue la forme osseuse adulte définitive la plus organisée.',
      'Le canal de Havers contient des vaisseaux et des nerfs.',
      'La matrice organique osseuse contient majoritairement du collagène de type I.'
    ],
    correctChoiceIndexes: [2, 3],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'La résorption relève des ostéoclastes ; les ostéoblastes sont en bordure.',
      'Il est immature et transitoire.',
      'C’est l’axe central de l’ostéon.',
      'Elle renferme aussi GAG, acide hyaluronique et glycoprotéines spécifiques.'
    ],
  },
  {
    order: 95,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'Les ostéoclastes sont de grandes cellules multinucléées résorbant la matrice osseuse.',
      'Les ostéoblastes sont les cellules de synthèse de la matrice osseuse situées en bordure de l’os.',
      'Le tissu osseux est pauvrement vascularisé et non innervé, comme le cartilage.',
      'Le tissu osseux est un tissu conjonctif spécialisé à substance fondamentale solide minéralisée.'
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'Ils dérivent de la fusion de monocytes.',
      'Au repos, ils deviennent des cellules bordantes.',
      'C’est l’inverse : l’os est richement vascularisé et innervé.',
      'Les minéraux lui confèrent rigidité et dureté.'
    ],
  },
  {
    order: 96,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'Le périoste comporte une couche fibreuse externe et une couche cellulaire interne.',
      'Un ostéon est une cavité contenant uniquement de la moelle osseuse, sans lamelles.',
      'Le remodelage osseux contribue à l’équilibre phosphocalcique et à l’adaptation mécanique.',
      'L’ossification endochondrale assure la croissance en épaisseur à partir du périoste.'
    ],
    correctChoiceIndexes: [0, 2],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'Il recouvre l’os sauf au niveau des surfaces articulaires.',
      'Il s’agit d’un cylindre de lamelles concentriques autour d’un canal central.',
      'Il repose sur l’activité des ostéoclastes et ostéoblastes.',
      'La croissance en épaisseur relève surtout de l’ossification périostique.'
    ],
  },
  {
    order: 97,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'Les cristaux d’hydroxyapatite constituent la composante minérale de l’os.',
      'Le renouvellement osseux n’a aucun rôle métabolique dans l’homéostasie calcique.',
      'L’os spongieux est exclusivement périphérique et forme la corticale.',
      'La matrice osseuse adulte est surtout faite de collagène de type II.'
    ],
    correctChoiceIndexes: [0],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'Ils sont faits de phosphate et de calcium.',
      'Il participe au maintien de l’équilibre phosphocalcique.',
      'C’est l’os compact qui est périphérique.',
      'Le collagène majoritaire est le type I.'
    ],
  },
  {
    order: 98,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'L’os lamellaire spongieux s’organise en travées entourant des espaces contenant de la moelle hématopoïétique.',
      'L’os tissé est un os immature, provisoire, présent dans l’ossification et la réparation des fractures.',
      'Les ostéocytes ne peuvent communiquer entre eux car l’os est dépourvu de canalicules.',
      'Le périoste est une enveloppe cartilagineuse avasculaire.'
    ],
    correctChoiceIndexes: [0, 1],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'Il est situé en interne, notamment dans les épiphyses.',
      'Ses fibres de collagène sont désorganisées.',
      'Ils sont reliés par de longues expansions dans les canalicules.',
      'Il est fibreux et vascularisé.'
    ],
  },
  {
    order: 99,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'Le canal de Havers contient des vaisseaux et des nerfs.',
      'Les ostéocytes occupent des logettes appelées ostéoplastes et communiquent par des canalicules.',
      'L’os lamellaire compact est constitué d’ostéons ou systèmes de Havers.',
      'Les ostéoblastes résident au centre des ostéoplastes et résorbent l’os.'
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'C’est l’axe central de l’ostéon.',
      'Ils correspondent aux formes osseuses plus quiescentes.',
      'Chaque ostéon contient un canal de Havers central.',
      'La résorption relève des ostéoclastes ; les ostéoblastes sont en bordure.'
    ],
  },
  {
    order: 100,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: 'À propos du tissu osseux :',
    choices: [
      'La matrice organique osseuse contient majoritairement du collagène de type I.',
      'L’os tissé constitue la forme osseuse adulte définitive la plus organisée.',
      'Le tissu osseux est pauvrement vascularisé et non innervé, comme le cartilage.',
      'Les ostéoblastes sont les cellules de synthèse de la matrice osseuse situées en bordure de l’os.'
    ],
    correctChoiceIndexes: [0, 3],
    explanation: 'Le tissu osseux est un tissu conjonctif spécialisé minéralisé, riche en collagène I, renouvelé par l’activité conjointe des ostéoblastes et des ostéoclastes.',
    choiceExplanations: [
      'Elle renferme aussi GAG, acide hyaluronique et glycoprotéines spécifiques.',
      'Il est immature et transitoire.',
      'C’est l’inverse : l’os est richement vascularisé et innervé.',
      'Au repos, ils deviennent des cellules bordantes.'
    ],
  }
];

export const SECTION_E_QUIZZES: SeedQuiz[] = [
{
  order: 1,
  slug: 'cellules-et-matrice-osseuses',
  title: 'Cellules et matrice osseuses',
  description: 'Ostéoblastes, ostéocytes, ostéoclastes, composition de la matrice et périoste.',
  stage: 'DISCOVER',
  sectionOrder: 5,
  questionOrders: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
},
{
  order: 2,
  slug: 'os-tisse-os-lamellaire-et-osteon',
  title: 'Os tissé, os lamellaire et ostéon',
  description: 'Organisation de l’os tissé, de l’os lamellaire spongieux et compact, et principes d’ossification.',
  stage: 'PRACTICE',
  sectionOrder: 5,
  questionOrders: [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
}
];
