import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch3 — Structures et fonctions des microtubules */
export const UE14_CELL_CH3_SECTION_B_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant « Centrioles, corpuscules basaux et axonèmes », choisissez exactement 3 affirmations correctes.",
    "explanation": "Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels.",
    "choices": [
      {
        "content": "Un centriole canonique contient neuf triplets de microtubules arrangés en cylindre.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Un centriole canonique est formé de neuf doublets seulement.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Un corpuscule basal a une organisation apparentée à celle d’un centriole.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Le corpuscule basal ancre et organise l’axonème d’un cil ou d’un flagelle.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Le cil primaire classique possède obligatoirement une paire centrale comme un axonème 9+2.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      }
    ],
    "requiredSelectionCount": 3
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de triplets de microtubules comporte un centriole canonique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "9",
        "neuf",
        "9 triplets",
        "neuf triplets"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un centriole contient neuf triplets de microtubules."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement « Mouvement des cils et flagelles » ?",
    "explanation": "Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème.",
    "choices": [
      {
        "content": "La dynéine axonémale est une ATPase motrice associée aux doublets de microtubules.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "Le mouvement du flagelle du spermatozoïde repose uniquement sur les filaments intermédiaires.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "Les doublets microtubulaires d’un axonème restent totalement immobiles les uns par rapport aux autres.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "La dynéine axonémale polymérise directement l’ADN pour faire bouger le cil.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "Le battement des cils mobiles est assuré exclusivement par la myosine II sur des filaments d’actine.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      }
    ]
  },
  {
    "order": 26,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment note-t-on l’organisation canonique de nombreux cils mobiles avec neuf doublets périphériques et une paire centrale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "9+2",
        "9 + 2",
        "organisation 9+2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’axonème mobile classique est de type 9+2."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Sur le thème « Kinésines et dynéines cytoplasmiques », sélectionnez exactement 2 propositions exactes.",
    "explanation": "Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines.",
    "choices": [
      {
        "content": "La dynéine cytoplasmique se déplace vers l’extrémité moins des microtubules.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      },
      {
        "content": "Les moteurs microtubulaires produisent un mouvement sans hydrolyser de nucléotide.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      },
      {
        "content": "La dynéine cytoplasmique se déplace typiquement vers l’extrémité plus du microtubule.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      },
      {
        "content": "Les kinésines sont des pompes membranaires qui transportent des ions à travers la bicouche.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      },
      {
        "content": "La plupart des kinésines de transport se déplacent vers l’extrémité plus des microtubules.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      }
    ],
    "requiredSelectionCount": 2
  },
  {
    "order": 28,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes concernant « Microtubules et fuseau mitotique », lesquelles sont incorrectes ?",
    "explanation": "Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent.",
    "choices": [
      {
        "content": "Les microtubules constituent l’armature du fuseau mitotique.",
        "correct": false,
        "explanation": "Cette affirmation est correcte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      },
      {
        "content": "Les chromosomes s’alignent sans aucune interaction avec les microtubules.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      },
      {
        "content": "Des microtubules du fuseau s’attachent aux kinétochores des chromosomes.",
        "correct": false,
        "explanation": "Cette affirmation est correcte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      },
      {
        "content": "Le fuseau contribue à aligner les chromosomes avant l’anaphase.",
        "correct": false,
        "explanation": "Cette affirmation est correcte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      },
      {
        "content": "Le fuseau mitotique est constitué uniquement de filaments intermédiaires.",
        "correct": true,
        "explanation": "Cette affirmation est incorrecte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      }
    ]
  },
  {
    "order": 29,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de « Protéines associées et régulation des microtubules », repérez la seule affirmation correcte.",
    "explanation": "De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global.",
    "choices": [
      {
        "content": "La concentration globale de GTP est l’unique régulateur de la dynamique des microtubules.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      },
      {
        "content": "La gamma-tubuline est une myosine spécialisée dans la contraction musculaire.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      },
      {
        "content": "Des protéines +TIP suivent les extrémités plus en croissance de nombreux microtubules.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      },
      {
        "content": "Les extrémités des microtubules sont insensibles à toute protéine régulatrice.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      },
      {
        "content": "Les protéines associées aux microtubules ne peuvent jamais modifier leur stabilité.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      }
    ]
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant « Centrioles, corpuscules basaux et axonèmes », quelles affirmations sont correctes ?",
    "explanation": "Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels.",
    "choices": [
      {
        "content": "De nombreux cils mobiles possèdent un axonème de type 9+2.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Dans ce contexte, un corpuscule basal a une organisation apparentée à celle d’un centriole.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Dans ce contexte, le corpuscule basal ancre et organise l’axonème d’un cil ou d’un flagelle.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Un axonème est une structure faite exclusivement d’actine.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Le corpuscule basal est constitué de filaments intermédiaires et non de microtubules.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      }
    ]
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel moteur microtubulaire se dirige typiquement vers l’extrémité moins ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "dynéine",
        "dyneine",
        "dynéine cytoplasmique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La dynéine cytoplasmique est un moteur dirigé vers l’extrémité −."
  },
  {
    "order": 32,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Concernant « Mouvement des cils et flagelles », sélectionnez exactement les cinq propositions exactes parmi les dix proposées.",
    "explanation": "Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème.",
    "choices": [
      {
        "content": "Le battement ciliaire de l’épithélium respiratoire contribue à la clairance mucociliaire.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "L’hydrolyse d’ATP fournit l’énergie nécessaire à l’activité de la dynéine axonémale.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "Dans ce contexte, les doublets microtubulaires d’un axonème restent totalement immobiles les uns par rapport aux autres.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "Les cils respiratoires déplacent le noyau plutôt que le mucus péricellulaire.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "Une absence de dynéine axonémale augmente nécessairement la fréquence de battement.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "La motilité ciliaire ne consomme aucune énergie chimique.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "Dans ce contexte, le mouvement du flagelle du spermatozoïde repose uniquement sur les filaments intermédiaires.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "Le flagelle du spermatozoïde contient un axonème microtubulaire.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "Le glissement relatif des doublets axonémaux contribue au battement des cils mobiles.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "Des structures de liaison transforment le glissement des doublets en courbure de l’axonème.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      }
    ],
    "requiredSelectionCount": 5
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle famille de moteurs assure le plus souvent un transport vers l’extrémité plus des microtubules ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "kinésines",
        "kinesines",
        "kinésine",
        "kinesine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La plupart des kinésines de transport se déplacent vers l’extrémité +."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « Kinésines et dynéines cytoplasmiques » ?",
    "explanation": "Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines.",
    "choices": [
      {
        "content": "Le transport des vésicules par microtubules est purement diffusif et ne peut être directionnel.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      },
      {
        "content": "La dynéine cytoplasmique se déplace vers l’extrémité moins des microtubules.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      },
      {
        "content": "Les moteurs microtubulaires hydrolysent l’ATP pour produire un mouvement dirigé.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      },
      {
        "content": "Toutes les kinésines ont exactement la même direction et la même fonction biologique.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      },
      {
        "content": "Les moteurs microtubulaires produisent un mouvement sans hydrolyser de nucléotide.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      }
    ]
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel événement désigne le passage brutal d’une phase de croissance à une dépolymérisation rapide d’un microtubule ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "catastrophe",
        "catastrophe microtubulaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La catastrophe est la transition croissance → raccourcissement rapide."
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de « Microtubules et fuseau mitotique », sélectionnez les propositions exactes.",
    "explanation": "Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent.",
    "choices": [
      {
        "content": "Les microtubules disparaissent totalement dès l’entrée en mitose.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      },
      {
        "content": "Le fuseau contribue à aligner les chromosomes avant l’anaphase.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      },
      {
        "content": "La dynamique des microtubules participe à la capture et au positionnement des chromosomes.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      },
      {
        "content": "Les kinétochores sont des organites membranaires qui synthétisent de l’ATP.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      },
      {
        "content": "Des microtubules du fuseau s’attachent aux kinétochores des chromosomes.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      }
    ]
  },
  {
    "order": 37,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant « Protéines associées et régulation des microtubules », quelles affirmations sont correctes ?",
    "explanation": "De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global.",
    "choices": [
      {
        "content": "Des protéines peuvent favoriser les catastrophes ou les sauvetages microtubulaires.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      },
      {
        "content": "La gamma-tubuline est une myosine spécialisée dans la contraction musculaire.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      },
      {
        "content": "La dynamique des microtubules est régulée par l’état du GTP et par de nombreuses protéines associées.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      },
      {
        "content": "Des MAP peuvent stabiliser ou organiser les microtubules.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      },
      {
        "content": "La gamma-tubuline participe à la nucléation plutôt qu’au transport de cargos.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      }
    ]
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions ci-dessous relatives à « Centrioles, corpuscules basaux et axonèmes », laquelle est correcte ?",
    "explanation": "Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels.",
    "choices": [
      {
        "content": "Tous les cils 9+0 sont nécessairement totalement immobiles dans tous les tissus.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Les cils mobiles humains sont dépourvus de protéines motrices associées aux microtubules.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Le corpuscule basal ancre et organise l’axonème d’un cil ou d’un flagelle.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Un centriole canonique est formé de neuf doublets seulement.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Le motif 9+2 décrit neuf filaments d’actine entourant deux filaments intermédiaires.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      }
    ]
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel terme désigne la reprise de croissance d’un microtubule après une phase de raccourcissement ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sauvetage",
        "rescue",
        "sauvetage microtubulaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le sauvetage est la transition raccourcissement → croissance."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant « Mouvement des cils et flagelles » ?",
    "explanation": "Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème.",
    "choices": [
      {
        "content": "Le flagelle du spermatozoïde contient un axonème microtubulaire.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "L’hydrolyse d’ATP fournit l’énergie nécessaire à l’activité de la dynéine axonémale.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "Le battement ciliaire de l’épithélium respiratoire contribue à la clairance mucociliaire.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "La motilité ciliaire ne consomme aucune énergie chimique.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      },
      {
        "content": "Des structures de liaison transforment le glissement des doublets en courbure de l’axonème.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Le battement des cils mobiles repose sur la dynéine axonémale qui utilise l’ATP pour provoquer un glissement entre doublets de microtubules, converti en courbure par les contraintes de l’axonème."
      }
    ]
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de « Kinésines et dynéines cytoplasmiques », repérez la seule affirmation correcte.",
    "explanation": "Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines.",
    "choices": [
      {
        "content": "Dans ce contexte, toutes les kinésines ont exactement la même direction et la même fonction biologique.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      },
      {
        "content": "Dans ce contexte, les moteurs microtubulaires hydrolysent l’ATP pour produire un mouvement dirigé.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      },
      {
        "content": "La fixation d’un moteur à un cargo empêche tout mouvement intracellulaire.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      },
      {
        "content": "La dynéine cytoplasmique utilise des filaments d’actine comme rail principal.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      },
      {
        "content": "La dynéine cytoplasmique se déplace typiquement vers l’extrémité plus du microtubule.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Les moteurs sur microtubules hydrolysent l’ATP. La plupart des kinésines motrices se dirigent vers l’extrémité +, alors que la dynéine cytoplasmique se dirige vers l’extrémité −. Il existe des exceptions parmi les familles de kinésines."
      }
    ]
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Concernant « Microtubules et fuseau mitotique », choisissez exactement 2 affirmations correctes.",
    "explanation": "Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent.",
    "choices": [
      {
        "content": "Dans ce contexte, le fuseau contribue à aligner les chromosomes avant l’anaphase.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      },
      {
        "content": "Dans ce contexte, la dynamique des microtubules participe à la capture et au positionnement des chromosomes.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      },
      {
        "content": "Les microtubules du fuseau ne participent jamais à la ségrégation des chromosomes.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      },
      {
        "content": "Les pôles du fuseau sont formés par des lysosomes fusionnés.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      },
      {
        "content": "La dynamique des microtubules est inutile à la capture des chromosomes.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Lors de la mitose, un fuseau de microtubules organise l’attachement aux kinétochores, le positionnement des chromosomes et la séparation des chromatides. Plusieurs classes de microtubules du fuseau coopèrent."
      }
    ],
    "requiredSelectionCount": 2
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans ce contexte, concernant « Protéines associées et régulation des microtubules », quelles affirmations sont correctes ?",
    "explanation": "De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global.",
    "choices": [
      {
        "content": "Dans ce contexte, la dynamique des microtubules est régulée par l’état du GTP et par de nombreuses protéines associées.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      },
      {
        "content": "Toutes les MAP ont exactement la même fonction dans tous les tissus.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      },
      {
        "content": "Le cycle cellulaire ne modifie jamais l’organisation du réseau de microtubules.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      },
      {
        "content": "Dans ce contexte, des protéines peuvent favoriser les catastrophes ou les sauvetages microtubulaires.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      },
      {
        "content": "Dans ce contexte, la gamma-tubuline participe à la nucléation plutôt qu’au transport de cargos.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. De nombreuses protéines associées aux microtubules contrôlent nucléation, stabilité, catastrophe, sauvetage, ancrage et interactions avec les cargos. La dynamique ne dépend donc pas d’un seul paramètre chimique global."
      }
    ]
  },
  {
    "order": 44,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour le thème « Centrioles, corpuscules basaux et axonèmes », quelles propositions doivent être retenues ?",
    "explanation": "Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels.",
    "choices": [
      {
        "content": "De nombreux cils mobiles possèdent un axonème de type 9+2.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Le cil primaire classique possède généralement neuf doublets périphériques sans paire centrale, soit une organisation 9+0.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Les doublets axonémaux dérivent des triplets du corpuscule basal.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "La classification 9+2 ou 9+0 décrit l’organisation des microtubules axonémaux.",
        "correct": true,
        "explanation": "Cette affirmation est correcte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      },
      {
        "content": "Dans ce contexte, le motif 9+2 décrit neuf filaments d’actine entourant deux filaments intermédiaires.",
        "correct": false,
        "explanation": "Cette affirmation est incorrecte. Un centriole ou corpuscule basal comporte neuf triplets de microtubules. Les axonèmes de cils mobiles sont le plus souvent 9+2, tandis que le cil primaire classique est 9+0. Des exceptions existent, donc ces motifs ne sont pas des absolus universels."
      }
    ]
  }
];
