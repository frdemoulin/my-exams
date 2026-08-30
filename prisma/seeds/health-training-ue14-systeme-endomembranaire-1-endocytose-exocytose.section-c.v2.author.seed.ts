import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch4 — Section C — Endocytose : pinocytose, phagocytose, récepteurs et caveolae */
export const UE14_BIOCELL_CH4_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'endocytose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'endocytose n'entraîne aucun mouvement de membrane plasmique.",
        "correct": false,
        "explanation": "Elle implique une invagination et une fission."
      },
      {
        "content": "L'endocytose exporte le contenu des vésicules vers le milieu extracellulaire.",
        "correct": false,
        "explanation": "Cela décrit l'exocytose."
      },
      {
        "content": "Elle internalise une portion de membrane plasmique et du matériel extracellulaire.",
        "correct": true,
        "explanation": "La membrane s'invagine puis se détache vers le cytoplasme."
      },
      {
        "content": "Elle participe au renouvellement de la membrane plasmique.",
        "correct": true,
        "explanation": "Les composants membranaires peuvent être recyclés ou dégradés."
      },
      {
        "content": "Elle alimente le système endosomal.",
        "correct": true,
        "explanation": "Les endosomes trient ensuite les cargos."
      }
    ],
    "explanation": "L'endocytose internalise membrane et cargos extracellulaires puis les remet au système endosomal pour tri."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la pinocytose ?",
    "choices": [
      {
        "content": "Elle n'internalise jamais de liquide extracellulaire.",
        "correct": false,
        "explanation": "C'est précisément son principe."
      },
      {
        "content": "La pinocytose exige l'ingestion d'une cellule entière.",
        "correct": false,
        "explanation": "Cela correspond à la phagocytose."
      },
      {
        "content": "Toute pinocytose utilise exactement des vésicules de moins de 150 nm.",
        "correct": false,
        "explanation": "Il n'existe pas un seuil universel unique pour toutes les formes de pinocytose."
      },
      {
        "content": "Elle est limitée aux macrophages et neutrophiles.",
        "correct": false,
        "explanation": "Elle est beaucoup plus largement distribuée."
      },
      {
        "content": "Elle peut être relativement non sélective selon la voie considérée.",
        "correct": true,
        "explanation": "Elle se distingue d'une capture imposant un ligand spécifique."
      }
    ],
    "explanation": "La pinocytose internalise surtout du liquide et de petits solutés ; sa morphologie varie selon les mécanismes."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Citez un phagocyte professionnel humain.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "macrophage",
        "neutrophile",
        "polynucléaire neutrophile",
        "PNN"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La phagocytose est une endocytose de grosses particules, actine-dépendante, réalisée notamment par les macrophages et neutrophiles."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'endocytose médiée par récepteurs, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Après internalisation, récepteur et ligand peuvent suivre des destins différents.",
        "correct": true,
        "explanation": "Le pH endosomal peut provoquer leur dissociation."
      },
      {
        "content": "Elle concentre efficacement certains cargos par rapport au liquide extracellulaire environnant.",
        "correct": true,
        "explanation": "Le tri permet une internalisation préférentielle."
      },
      {
        "content": "De nombreux récepteurs se concentrent dans des puits recouverts de clathrine.",
        "correct": true,
        "explanation": "Des adaptateurs reconnaissent leurs signaux cytosoliques."
      },
      {
        "content": "Elle permet une capture sélective de ligands extracellulaires.",
        "correct": true,
        "explanation": "Les ligands se lient à des récepteurs transmembranaires spécifiques."
      },
      {
        "content": "Le ligand doit se lier directement à la clathrine extracellulaire.",
        "correct": false,
        "explanation": "La clathrine agit côté cytosolique, via des récepteurs et adaptateurs."
      }
    ],
    "explanation": "L'endocytose médiée par récepteurs couple reconnaissance spécifique du ligand, concentration du cargo et tri endosomal."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur les caveolae, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Le terme « caveosome » n'est plus considéré comme un compartiment endocytaire canonique bien établi.",
        "correct": true,
        "explanation": "Des travaux ultérieurs ont remis en cause l'existence d'un organite distinct de ce nom."
      },
      {
        "content": "Les caveolae ne peuvent jamais communiquer avec les endosomes classiques.",
        "correct": false,
        "explanation": "Des cargos peuvent rejoindre le système endosomal."
      },
      {
        "content": "Le caveosome est aujourd'hui un organite obligatoire et universel de toute endocytose caveolaire.",
        "correct": false,
        "explanation": "Son statut comme compartiment distinct a été remis en cause."
      },
      {
        "content": "Toutes les cellules possèdent de très nombreuses caveolae.",
        "correct": false,
        "explanation": "Leur abondance varie fortement selon le type cellulaire."
      },
      {
        "content": "Elles sont distinctes des puits recouverts de clathrine.",
        "correct": true,
        "explanation": "Leur architecture repose sur des protéines différentes."
      }
    ],
    "explanation": "Les caveolae constituent des domaines membranaires spécialisés ; l'ancien modèle d'un caveosome distinct et obligatoire n'est plus retenu comme dogme.",
    "requiredSelectionCount": 2
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'acidification des endosomes, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "L'endosome précoce a physiologiquement un pH fixe de 7,4.",
        "correct": false,
        "explanation": "Il est acide, souvent autour de 6 à 6,5."
      },
      {
        "content": "Les compartiments endocytaires deviennent globalement plus acides au cours de la maturation.",
        "correct": true,
        "explanation": "Les endosomes tardifs sont plus acides que les précoces."
      },
      {
        "content": "Les endosomes tardifs sont moins acides que les précoces.",
        "correct": false,
        "explanation": "Ils sont généralement plus acides."
      },
      {
        "content": "Le pH endosomal n'a aucun rôle dans le tri des ligands et récepteurs.",
        "correct": false,
        "explanation": "Il influence plusieurs dissociations et étapes de maturation."
      },
      {
        "content": "Le pH acide peut favoriser la dissociation de certains complexes ligand-récepteur.",
        "correct": true,
        "explanation": "C'est le cas classique du LDL et de son récepteur."
      }
    ],
    "explanation": "L'endosome précoce est déjà acidifié par une V-ATPase, et l'acidité augmente globalement au cours de la maturation endolysosomale."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement l'endocytose ?",
    "choices": [
      {
        "content": "Elle internalise une portion de membrane plasmique et du matériel extracellulaire.",
        "correct": true,
        "explanation": "La membrane s'invagine puis se détache vers le cytoplasme."
      },
      {
        "content": "L'endocytose n'entraîne aucun mouvement de membrane plasmique.",
        "correct": false,
        "explanation": "Elle implique une invagination et une fission."
      },
      {
        "content": "Tout cargo endocyté est obligatoirement détruit.",
        "correct": false,
        "explanation": "De nombreux récepteurs et lipides sont recyclés."
      },
      {
        "content": "L'endocytose est absente des cellules eucaryotes.",
        "correct": false,
        "explanation": "C'est un mécanisme majeur des cellules eucaryotes."
      },
      {
        "content": "L'endocytose exporte le contenu des vésicules vers le milieu extracellulaire.",
        "correct": false,
        "explanation": "Cela décrit l'exocytose."
      }
    ],
    "explanation": "L'endocytose internalise membrane et cargos extracellulaires puis les remet au système endosomal pour tri."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "La pinocytose est-elle réservée aux phagocytes professionnels ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, elle est largement répandue"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La pinocytose internalise surtout du liquide et de petits solutés ; sa morphologie varie selon les mécanismes."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "L'acidification des endosomes dépend principalement d'une pompe à GTP.",
        "correct": false,
        "explanation": "Elle dépend d'une V-ATPase."
      },
      {
        "content": "L'actine joue un rôle majeur dans la formation du phagosome.",
        "correct": true,
        "explanation": "Le cytosquelette déforme la membrane autour de la cible."
      },
      {
        "content": "Les endosomes précoces ont un pH acide, typiquement autour de 6 à 6,5 selon les cellules et conditions.",
        "correct": true,
        "explanation": "Ils ne sont pas à pH cytosolique neutre."
      },
      {
        "content": "Le phagosome mature et communique avec le système endolysosomal.",
        "correct": true,
        "explanation": "La fusion avec des compartiments lysosomaux permet la dégradation."
      },
      {
        "content": "Une V-ATPase pompe des protons dans la lumière endosomale.",
        "correct": true,
        "explanation": "Elle utilise l'ATP."
      },
      {
        "content": "Les compartiments endocytaires deviennent globalement plus acides au cours de la maturation.",
        "correct": true,
        "explanation": "Les endosomes tardifs sont plus acides que les précoces."
      },
      {
        "content": "Le phagosome est immédiatement un lysosome mature dès sa fermeture.",
        "correct": false,
        "explanation": "Il subit une maturation progressive."
      },
      {
        "content": "L'endosome précoce a physiologiquement un pH fixe de 7,4.",
        "correct": false,
        "explanation": "Il est acide, souvent autour de 6 à 6,5."
      },
      {
        "content": "Elle ne nécessite aucune réorganisation de l'actine.",
        "correct": false,
        "explanation": "La polymérisation d'actine est centrale."
      },
      {
        "content": "Un seul type universel de CAM est responsable de toute phagocytose.",
        "correct": false,
        "explanation": "De nombreux récepteurs peuvent intervenir : Fc, complément, intégrines ou récepteurs de reconnaissance."
      }
    ],
    "explanation": "La phagocytose est une endocytose de grosses particules, actine-dépendante, réalisée notamment par les macrophages et neutrophiles. L'endosome précoce est déjà acidifié par une V-ATPase, et l'acidité augmente globalement au cours de la maturation endolysosomale."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'endocytose médiée par récepteurs ?",
    "choices": [
      {
        "content": "Elle permet une capture sélective de ligands extracellulaires.",
        "correct": true,
        "explanation": "Les ligands se lient à des récepteurs transmembranaires spécifiques."
      },
      {
        "content": "Le ligand doit se lier directement à la clathrine extracellulaire.",
        "correct": false,
        "explanation": "La clathrine agit côté cytosolique, via des récepteurs et adaptateurs."
      },
      {
        "content": "Après internalisation, récepteur et ligand peuvent suivre des destins différents.",
        "correct": true,
        "explanation": "Le pH endosomal peut provoquer leur dissociation."
      },
      {
        "content": "Elle concentre efficacement certains cargos par rapport au liquide extracellulaire environnant.",
        "correct": true,
        "explanation": "Le tri permet une internalisation préférentielle."
      },
      {
        "content": "Tous les récepteurs endocytés sont systématiquement dégradés dans les lysosomes.",
        "correct": false,
        "explanation": "Beaucoup sont recyclés."
      }
    ],
    "explanation": "L'endocytose médiée par récepteurs couple reconnaissance spécifique du ligand, concentration du cargo et tri endosomal."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'endocytose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle internalise une portion de membrane plasmique et du matériel extracellulaire.",
        "correct": true,
        "explanation": "La membrane s'invagine puis se détache vers le cytoplasme."
      },
      {
        "content": "Elle permet l'entrée de nutriments, ligands et autres cargos.",
        "correct": true,
        "explanation": "Les voies peuvent être sélectives ou non sélectives."
      },
      {
        "content": "Elle participe au renouvellement de la membrane plasmique.",
        "correct": true,
        "explanation": "Les composants membranaires peuvent être recyclés ou dégradés."
      },
      {
        "content": "L'endocytose est absente des cellules eucaryotes.",
        "correct": false,
        "explanation": "C'est un mécanisme majeur des cellules eucaryotes."
      },
      {
        "content": "Elle alimente le système endosomal.",
        "correct": true,
        "explanation": "Les endosomes trient ensuite les cargos."
      }
    ],
    "explanation": "L'endocytose internalise membrane et cargos extracellulaires puis les remet au système endosomal pour tri."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "La pinocytose est-elle réservée aux phagocytes professionnels ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, elle est largement répandue"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La pinocytose internalise surtout du liquide et de petits solutés ; sa morphologie varie selon les mécanismes."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur la phagocytose, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le phagosome mature et communique avec le système endolysosomal.",
        "correct": true,
        "explanation": "La fusion avec des compartiments lysosomaux permet la dégradation."
      },
      {
        "content": "La phagocytose est le mécanisme principal de toutes les cellules pour absorber du liquide.",
        "correct": false,
        "explanation": "Cela décrit plutôt la pinocytose."
      },
      {
        "content": "Elle ne nécessite aucune réorganisation de l'actine.",
        "correct": false,
        "explanation": "La polymérisation d'actine est centrale."
      },
      {
        "content": "Le phagosome est immédiatement un lysosome mature dès sa fermeture.",
        "correct": false,
        "explanation": "Il subit une maturation progressive."
      },
      {
        "content": "Un seul type universel de CAM est responsable de toute phagocytose.",
        "correct": false,
        "explanation": "De nombreux récepteurs peuvent intervenir : Fc, complément, intégrines ou récepteurs de reconnaissance."
      }
    ],
    "explanation": "La phagocytose est une endocytose de grosses particules, actine-dépendante, réalisée notamment par les macrophages et neutrophiles."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'endocytose médiée par récepteurs ?",
    "choices": [
      {
        "content": "Le ligand doit se lier directement à la clathrine extracellulaire.",
        "correct": false,
        "explanation": "La clathrine agit côté cytosolique, via des récepteurs et adaptateurs."
      },
      {
        "content": "Elle concentre efficacement certains cargos par rapport au liquide extracellulaire environnant.",
        "correct": true,
        "explanation": "Le tri permet une internalisation préférentielle."
      },
      {
        "content": "Elle ne permet aucun enrichissement du cargo.",
        "correct": false,
        "explanation": "La concentration dans les puits est un avantage majeur."
      },
      {
        "content": "De nombreux récepteurs se concentrent dans des puits recouverts de clathrine.",
        "correct": true,
        "explanation": "Des adaptateurs reconnaissent leurs signaux cytosoliques."
      },
      {
        "content": "Tous les récepteurs endocytés sont systématiquement dégradés dans les lysosomes.",
        "correct": false,
        "explanation": "Beaucoup sont recyclés."
      }
    ],
    "explanation": "L'endocytose médiée par récepteurs couple reconnaissance spécifique du ligand, concentration du cargo et tri endosomal."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Le « caveosome » est-il aujourd'hui considéré comme un compartiment endocytaire canonique universel ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, son existence comme compartiment distinct est contestée"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les caveolae constituent des domaines membranaires spécialisés ; l'ancien modèle d'un caveosome distinct et obligatoire n'est plus retenu comme dogme."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant l'acidification des endosomes.",
    "choices": [
      {
        "content": "Le pH endosomal n'a aucun rôle dans le tri des ligands et récepteurs.",
        "correct": false,
        "explanation": "Il influence plusieurs dissociations et étapes de maturation."
      },
      {
        "content": "L'acidification des endosomes dépend principalement d'une pompe à GTP.",
        "correct": false,
        "explanation": "Elle dépend d'une V-ATPase."
      },
      {
        "content": "Les endosomes précoces ont un pH acide, typiquement autour de 6 à 6,5 selon les cellules et conditions.",
        "correct": true,
        "explanation": "Ils ne sont pas à pH cytosolique neutre."
      },
      {
        "content": "Le pH acide peut favoriser la dissociation de certains complexes ligand-récepteur.",
        "correct": true,
        "explanation": "C'est le cas classique du LDL et de son récepteur."
      },
      {
        "content": "Les endosomes tardifs sont moins acides que les précoces.",
        "correct": false,
        "explanation": "Ils sont généralement plus acides."
      }
    ],
    "explanation": "L'endosome précoce est déjà acidifié par une V-ATPase, et l'acidité augmente globalement au cours de la maturation endolysosomale.",
    "requiredSelectionCount": 2
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'endocytose ?",
    "choices": [
      {
        "content": "L'endocytose est absente des cellules eucaryotes.",
        "correct": false,
        "explanation": "C'est un mécanisme majeur des cellules eucaryotes."
      },
      {
        "content": "Elle participe au renouvellement de la membrane plasmique.",
        "correct": true,
        "explanation": "Les composants membranaires peuvent être recyclés ou dégradés."
      },
      {
        "content": "L'endocytose exporte le contenu des vésicules vers le milieu extracellulaire.",
        "correct": false,
        "explanation": "Cela décrit l'exocytose."
      },
      {
        "content": "Elle internalise une portion de membrane plasmique et du matériel extracellulaire.",
        "correct": true,
        "explanation": "La membrane s'invagine puis se détache vers le cytoplasme."
      },
      {
        "content": "Elle permet l'entrée de nutriments, ligands et autres cargos.",
        "correct": true,
        "explanation": "Les voies peuvent être sélectives ou non sélectives."
      }
    ],
    "explanation": "L'endocytose internalise membrane et cargos extracellulaires puis les remet au système endosomal pour tri."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur la pinocytose, laquelle est correcte ?",
    "choices": [
      {
        "content": "Toute pinocytose utilise exactement des vésicules de moins de 150 nm.",
        "correct": false,
        "explanation": "Il n'existe pas un seuil universel unique pour toutes les formes de pinocytose."
      },
      {
        "content": "Elle est très répandue dans les cellules eucaryotes.",
        "correct": true,
        "explanation": "De nombreuses cellules prélèvent continuellement du liquide extracellulaire."
      },
      {
        "content": "La pinocytose exige l'ingestion d'une cellule entière.",
        "correct": false,
        "explanation": "Cela correspond à la phagocytose."
      },
      {
        "content": "Elle est limitée aux macrophages et neutrophiles.",
        "correct": false,
        "explanation": "Elle est beaucoup plus largement distribuée."
      },
      {
        "content": "Elle n'internalise jamais de liquide extracellulaire.",
        "correct": false,
        "explanation": "C'est précisément son principe."
      }
    ],
    "explanation": "La pinocytose internalise surtout du liquide et de petits solutés ; sa morphologie varie selon les mécanismes."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la phagocytose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Chez les mammifères, macrophages et neutrophiles sont des phagocytes professionnels.",
        "correct": true,
        "explanation": "Ils utilisent de nombreux récepteurs de reconnaissance ou d'opsonisation."
      },
      {
        "content": "Le phagosome mature et communique avec le système endolysosomal.",
        "correct": true,
        "explanation": "La fusion avec des compartiments lysosomaux permet la dégradation."
      },
      {
        "content": "Elle permet l'ingestion de grosses particules, débris ou microorganismes.",
        "correct": true,
        "explanation": "La membrane entoure progressivement la cible."
      },
      {
        "content": "La phagocytose est le mécanisme principal de toutes les cellules pour absorber du liquide.",
        "correct": false,
        "explanation": "Cela décrit plutôt la pinocytose."
      },
      {
        "content": "L'actine joue un rôle majeur dans la formation du phagosome.",
        "correct": true,
        "explanation": "Le cytosquelette déforme la membrane autour de la cible."
      }
    ],
    "explanation": "La phagocytose est une endocytose de grosses particules, actine-dépendante, réalisée notamment par les macrophages et neutrophiles."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de protéine transmembranaire confère la sélectivité à l'endocytose d'un ligand ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "récepteur",
        "récepteur membranaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'endocytose médiée par récepteurs couple reconnaissance spécifique du ligand, concentration du cargo et tri endosomal."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les caveolae ?",
    "choices": [
      {
        "content": "Les caveolae ne peuvent jamais communiquer avec les endosomes classiques.",
        "correct": false,
        "explanation": "Des cargos peuvent rejoindre le système endosomal."
      },
      {
        "content": "Toutes les cellules possèdent de très nombreuses caveolae.",
        "correct": false,
        "explanation": "Leur abondance varie fortement selon le type cellulaire."
      },
      {
        "content": "Une caveola est un puits de clathrine classique.",
        "correct": false,
        "explanation": "Les manteaux sont différents."
      },
      {
        "content": "Certaines caveolae peuvent s'internaliser de manière dynamine-dépendante.",
        "correct": true,
        "explanation": "La fréquence et les fonctions varient selon le contexte."
      },
      {
        "content": "Le caveosome est aujourd'hui un organite obligatoire et universel de toute endocytose caveolaire.",
        "correct": false,
        "explanation": "Son statut comme compartiment distinct a été remis en cause."
      }
    ],
    "explanation": "Les caveolae constituent des domaines membranaires spécialisés ; l'ancien modèle d'un caveosome distinct et obligatoire n'est plus retenu comme dogme."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Le pH d'un endosome précoce est-il plutôt neutre 7,4 ou acide autour de 6 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide autour de 6",
        "environ 6",
        "6 à 6,5"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'endosome précoce est déjà acidifié par une V-ATPase, et l'acidité augmente globalement au cours de la maturation endolysosomale."
  }
];
