import type { SeedQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch3 — Filaments d’actine : structure et dynamique — V2 active */
export const SECTION_C_QUESTIONS: SeedQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on la forme monomérique globulaire de l’actine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "actine G",
        "G-actine",
        "actine globulaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’actine G est la forme monomérique globulaire."
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi ces affirmations concernant « Structure et polarité des filaments d’actine », retenez exactement les 3 justes.",
    "explanation": "L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite.",
    "choices": [
      {
        "content": "Les filaments d’actine sont dépourvus de polarité.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "L’actine G est une protéine fibreuse de 25 nm de diamètre.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "L’actine G est un monomère globulaire capable de lier l’ATP.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "L’actine F correspond à la forme polymérisée en filament.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "Un filament d’actine possède une extrémité barbée dite plus et une extrémité pointue dite moins.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      }
    ],
    "requiredSelectionCount": 3
  },
  {
    "order": 47,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de « Nucléation et polymérisation de l’actine », sélectionnez les affirmations fausses.",
    "explanation": "La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments.",
    "choices": [
      {
        "content": "La nucléation est sans importance et n’est jamais nécessaire à la formation de nouveaux filaments d’actine.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      },
      {
        "content": "La nucléation constitue une étape cinétiquement défavorable de la polymérisation de novo de l’actine.",
        "correct": false,
        "explanation": "Cette affirmation est correcte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      },
      {
        "content": "Arp2/3 polymérise des filaments intermédiaires de kératine.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      },
      {
        "content": "Un petit noyau stable d’actine peut servir de point de départ à l’élongation.",
        "correct": false,
        "explanation": "Cette affirmation est correcte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      },
      {
        "content": "Le complexe Arp2/3 nucléé des réseaux d’actine ramifiés.",
        "correct": false,
        "explanation": "Cette affirmation est correcte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      }
    ]
  },
  {
    "order": 48,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment nomme-t-on la forme polymérisée de l’actine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "actine F",
        "F-actine",
        "filament d'actine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’actine F correspond à l’actine polymérisée."
  },
  {
    "order": 49,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Parmi les dix affirmations suivantes sur « Treadmilling et dynamique de l’actine », cinq sont exactes : sélectionnez-les.",
    "explanation": "Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling.",
    "choices": [
      {
        "content": "Le treadmilling signifie que tout le filament se déplace comme un bloc rigide sans échange de sous-unités.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "Le treadmilling peut associer un ajout net à l’extrémité plus et une perte nette à l’extrémité moins.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "Une longueur moyenne constante implique que les sous-unités du filament sont toutes immobiles.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "L’état nucléotidique des sous-unités influence la dynamique du filament d’actine.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "L’actine F ne peut jamais se dépolymériser.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "Le treadmilling nécessite que les deux extrémités ajoutent exactement le même nombre de sous-unités.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "L’actine-ATP est préférentiellement incorporée dans les zones de croissance rapide.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "Après incorporation, l’ATP de l’actine peut être hydrolysé en ADP.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "L’hydrolyse de l’ATP n’a aucun lien avec le vieillissement des sous-unités d’actine.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "Un filament peut conserver une longueur moyenne stable tout en renouvelant ses sous-unités.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      }
    ],
    "requiredSelectionCount": 5
  },
  {
    "order": 50,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de « Organisation des filaments d’actine en faisceaux et réseaux », repérez la seule affirmation correcte.",
    "explanation": "Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux.",
    "choices": [
      {
        "content": "Les lamellipodes sont dépourvus de filaments d’actine.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      },
      {
        "content": "La fimbrine peut organiser des faisceaux serrés de filaments d’actine.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      },
      {
        "content": "La filamine organise uniquement des centrioles à neuf triplets.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      },
      {
        "content": "La fimbrine est une tubuline qui forme des microtubules de 13 protofilaments.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      },
      {
        "content": "Les microvillosités sont soutenues principalement par un axonème 9+2 de microtubules.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      }
    ]
  },
  {
    "order": 51,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de « Fonctions cellulaires de l’actine », sélectionnez les propositions exactes.",
    "explanation": "L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse.",
    "choices": [
      {
        "content": "Un anneau actomyosine participe à la cytodiérèse des cellules animales.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      },
      {
        "content": "La cytodiérèse animale est assurée exclusivement par les filaments intermédiaires.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      },
      {
        "content": "Les microvillosités sont constituées principalement de microtubules 9+2.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      },
      {
        "content": "L’actine corticale contribue à la forme de la surface cellulaire.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      },
      {
        "content": "Les microvillosités sont soutenues par des faisceaux de filaments d’actine.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      }
    ]
  },
  {
    "order": 52,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Concernant « Structure et polarité des filaments d’actine », choisissez exactement 3 affirmations correctes.",
    "explanation": "L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite.",
    "choices": [
      {
        "content": "Les deux extrémités d’un filament d’actine ont des cinétiques d’assemblage différentes.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "Dans ce contexte, un filament d’actine possède une extrémité barbée dite plus et une extrémité pointue dite moins.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "Les deux extrémités d’un filament d’actine ont toujours des vitesses d’assemblage identiques.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "Dans ce contexte, l’actine F correspond à la forme polymérisée en filament.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "L’actine F est une bicouche de phospholipides.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      }
    ],
    "requiredSelectionCount": 3
  },
  {
    "order": 53,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sur le thème « Nucléation et polymérisation de l’actine », sélectionnez exactement 2 propositions exactes.",
    "explanation": "La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments.",
    "choices": [
      {
        "content": "Dans ce contexte, le complexe Arp2/3 nucléé des réseaux d’actine ramifiés.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      },
      {
        "content": "La polymérisation de l’actine est limitée au noyau cellulaire.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      },
      {
        "content": "Dans ce contexte, un petit noyau stable d’actine peut servir de point de départ à l’élongation.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      },
      {
        "content": "Les formines construisent exclusivement des réseaux d’actine fortement ramifiés à 70 degrés.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      },
      {
        "content": "Aucune protéine cellulaire ne régule la nucléation de l’actine.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      }
    ],
    "requiredSelectionCount": 2
  },
  {
    "order": 54,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nucléotide est lié par l’actine G avant son incorporation préférentielle dans un filament en croissance ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ATP",
        "atp"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’actine G peut lier l’ATP, qui sera hydrolysé après incorporation."
  },
  {
    "order": 55,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel complexe favorise la nucléation de réseaux d’actine ramifiés dans les lamellipodes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Arp2/3",
        "complexe Arp2/3",
        "ARP2/3"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Arp2/3 est un nucléateur majeur des réseaux d’actine ramifiés."
  },
  {
    "order": 56,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Treadmilling et dynamique de l’actine », lesquelles sont exactes ?",
    "explanation": "Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling.",
    "choices": [
      {
        "content": "L’état nucléotidique des sous-unités influence la dynamique du filament d’actine.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "L’actine F ne peut jamais se dépolymériser.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "L’actine-ATP est préférentiellement incorporée dans les zones de croissance rapide.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "L’hydrolyse de l’ATP n’a aucun lien avec le vieillissement des sous-unités d’actine.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "Un filament peut conserver une longueur moyenne stable tout en renouvelant ses sous-unités.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      }
    ]
  },
  {
    "order": 57,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de « Organisation des filaments d’actine en faisceaux et réseaux », sélectionnez les propositions exactes.",
    "explanation": "Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux.",
    "choices": [
      {
        "content": "Les lamellipodes sont dépourvus de filaments d’actine.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      },
      {
        "content": "La filamine favorise des réseaux d’actine tridimensionnels ou orthogonaux.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      },
      {
        "content": "L’alpha-actinine peut réticuler des filaments d’actine dans des faisceaux contractiles.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      },
      {
        "content": "Les microvillosités sont soutenues principalement par un axonème 9+2 de microtubules.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      },
      {
        "content": "L’organisation des filaments dépend des protéines de réticulation qui les associent.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      }
    ]
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans le cadre de « Fonctions cellulaires de l’actine », identifiez l’affirmation correcte.",
    "explanation": "L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse.",
    "choices": [
      {
        "content": "L’actine est absente des cellules non musculaires.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      },
      {
        "content": "L’actine n’intervient jamais dans les phénomènes membranaires.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      },
      {
        "content": "Les filaments d’actine ne participent à aucun changement de forme cellulaire.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      },
      {
        "content": "Les jonctions adhérentes sont reliées uniquement aux microtubules par la dynéine.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      },
      {
        "content": "L’actine corticale contribue à la forme de la surface cellulaire.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      }
    ]
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle famille de protéines favorise la nucléation et l’élongation de filaments d’actine non ramifiés ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "formines",
        "formine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les formines favorisent les filaments d’actine linéaires."
  },
  {
    "order": 60,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Pour « Structure et polarité des filaments d’actine », quelle proposition doit être retenue ?",
    "explanation": "L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite.",
    "choices": [
      {
        "content": "L’actine ne lie aucun nucléotide.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "La polymérisation d’actine forme des microtubules de 13 protofilaments.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "Un filament d’actine possède une extrémité barbée dite plus et une extrémité pointue dite moins.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "L’extrémité pointue est par définition l’extrémité plus.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "Les filaments d’actine sont dépourvus de polarité.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      }
    ]
  },
  {
    "order": 61,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « Nucléation et polymérisation de l’actine » ?",
    "explanation": "La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments.",
    "choices": [
      {
        "content": "L’actine ne peut polymériser qu’après hydrolyse complète de tout l’ATP cytosolique.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      },
      {
        "content": "La nucléation de l’actine est assurée par la gamma-tubuline du centrosome.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      },
      {
        "content": "Le complexe Arp2/3 nucléé des réseaux d’actine ramifiés.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      },
      {
        "content": "Les formines favorisent la nucléation et l’élongation de filaments d’actine non ramifiés.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      },
      {
        "content": "La polymérisation de l’actine est limitée au noyau cellulaire.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. La nucléation est l’étape initiale limitante de l’assemblage de nouveaux filaments d’actine. Des facteurs de nucléation comme Arp2/3 et les formines permettent une production rapide et organisée de filaments."
      }
    ]
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans ce contexte, parmi les affirmations suivantes sur « Treadmilling et dynamique de l’actine », lesquelles sont exactes ?",
    "explanation": "Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling.",
    "choices": [
      {
        "content": "Le filament d’actine ne peut échanger des sous-unités qu’au centre du polymère.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "Dans ce contexte, l’état nucléotidique des sous-unités influence la dynamique du filament d’actine.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "Dans ce contexte, l’actine-ATP est préférentiellement incorporée dans les zones de croissance rapide.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "Le treadmilling nécessite que les deux extrémités ajoutent exactement le même nombre de sous-unités.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      },
      {
        "content": "La dynamique de l’actine est indépendante de toute protéine régulatrice.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Selon les concentrations critiques aux deux extrémités, un filament peut gagner des sous-unités à l’extrémité + et en perdre à l’extrémité − tout en gardant une longueur moyenne stable : c’est le treadmilling."
      }
    ]
  },
  {
    "order": 63,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Comment nomme-t-on le renouvellement d’un filament d’actine avec ajout à une extrémité et perte à l’autre tout en conservant une longueur moyenne stable ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "treadmilling",
        "tapis roulant",
        "phénomène de tapis roulant"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le treadmilling permet un flux de sous-unités à travers un filament de longueur moyenne stable."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant « Organisation des filaments d’actine en faisceaux et réseaux », quelles affirmations sont correctes ?",
    "explanation": "Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux.",
    "choices": [
      {
        "content": "Les lamellipodes sont enrichis en réseaux d’actine ramifiés.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      },
      {
        "content": "Les microvillosités contiennent des faisceaux parallèles de filaments d’actine.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      },
      {
        "content": "Les filopodes sont constitués uniquement de filaments intermédiaires.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      },
      {
        "content": "Dans ce contexte, l’organisation des filaments dépend des protéines de réticulation qui les associent.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      },
      {
        "content": "Dans ce contexte, la filamine favorise des réseaux d’actine tridimensionnels ou orthogonaux.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les filaments d’actine sont réticulés par des protéines distinctes. La fimbrine favorise des faisceaux serrés parallèles, l’alpha-actinine des faisceaux plus espacés pouvant être contractiles, et la filamine des réseaux orthogonaux."
      }
    ]
  },
  {
    "order": 65,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles affirmations décrivent correctement « Fonctions cellulaires de l’actine » ?",
    "explanation": "L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse.",
    "choices": [
      {
        "content": "Les filaments d’actine participent à la migration cellulaire.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      },
      {
        "content": "Les jonctions adhérentes sont reliées au cytosquelette d’actine.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      },
      {
        "content": "Un anneau actomyosine participe à la cytodiérèse des cellules animales.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      },
      {
        "content": "Dans ce contexte, les filaments d’actine ne participent à aucun changement de forme cellulaire.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      },
      {
        "content": "L’actine intervient dans plusieurs étapes de l’endocytose et de l’exocytose.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine corticale soutient la membrane et les microvillosités, participe à l’endocytose/exocytose, à la migration, aux adhérences, à la contraction et à l’anneau contractile de cytodiérèse."
      }
    ]
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans ce contexte, pour « Structure et polarité des filaments d’actine », quelle proposition doit être retenue ?",
    "explanation": "L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite.",
    "choices": [
      {
        "content": "L’actine G est une protéine fibreuse de 25 nm de diamètre.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "Dans ce contexte, les filaments d’actine sont dépourvus de polarité.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "L’actine F est une bicouche de phospholipides.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "Les deux extrémités d’un filament d’actine ont des cinétiques d’assemblage différentes.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      },
      {
        "content": "Dans ce contexte, la polymérisation d’actine forme des microtubules de 13 protofilaments.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. L’actine G globulaire polymérise en actine F, filament hélicoïdal polarisé. L’extrémité barbée (+) et l’extrémité pointue (−) ont des cinétiques différentes ; l’extrémité + s’allonge généralement plus vite."
      }
    ]
  }
];
