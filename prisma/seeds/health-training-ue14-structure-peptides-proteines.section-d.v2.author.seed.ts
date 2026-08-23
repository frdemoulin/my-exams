import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Structure des peptides et protéines — Section D — Structure quaternaire et complexes protéiques */
export const UE14_BIOCH_CH10_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les domaines protéiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un domaine n’a aucun rapport avec la fonction.",
        "correct": false,
        "explanation": "Incorrect. Les domaines sont des modules structuraux et fonctionnels réutilisables, avec des variations possibles."
      },
      {
        "content": "Un domaine peut porter une fonction de liaison ou catalytique.",
        "correct": true,
        "explanation": "Exact. Les domaines sont des modules structuraux et fonctionnels réutilisables, avec des variations possibles."
      },
      {
        "content": "Un domaine est obligatoirement une protéine entière séparée.",
        "correct": false,
        "explanation": "Incorrect. Les domaines sont des modules structuraux et fonctionnels réutilisables, avec des variations possibles."
      },
      {
        "content": "Un domaine est une unité structurale compacte d’une protéine.",
        "correct": true,
        "explanation": "Exact. Les domaines sont des modules structuraux et fonctionnels réutilisables, avec des variations possibles."
      },
      {
        "content": "Sa structure est strictement identique au niveau atomique dans toutes les protéines.",
        "correct": false,
        "explanation": "Incorrect. Les domaines sont des modules structuraux et fonctionnels réutilisables, avec des variations possibles."
      }
    ],
    "explanation": "Les domaines sont des modules structuraux et fonctionnels réutilisables, avec des variations possibles."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les domaines protéiques, laquelle est correcte ?",
    "choices": [
      {
        "content": "Un domaine est obligatoirement une protéine entière séparée.",
        "correct": false,
        "explanation": "Incorrect. Les domaines sont des modules structuraux et fonctionnels réutilisables, avec des variations possibles."
      },
      {
        "content": "Toutes les protéines possèdent exactement un domaine.",
        "correct": false,
        "explanation": "Incorrect. Les domaines sont des modules structuraux et fonctionnels réutilisables, avec des variations possibles."
      },
      {
        "content": "Un domaine n’a aucun rapport avec la fonction.",
        "correct": false,
        "explanation": "Incorrect. Les domaines sont des modules structuraux et fonctionnels réutilisables, avec des variations possibles."
      },
      {
        "content": "Un domaine est une unité structurale compacte d’une protéine.",
        "correct": true,
        "explanation": "Exact. Les domaines sont des modules structuraux et fonctionnels réutilisables, avec des variations possibles."
      },
      {
        "content": "Sa structure est strictement identique au niveau atomique dans toutes les protéines.",
        "correct": false,
        "explanation": "Incorrect. Les domaines sont des modules structuraux et fonctionnels réutilisables, avec des variations possibles."
      }
    ],
    "explanation": "Les domaines sont des modules structuraux et fonctionnels réutilisables, avec des variations possibles."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type de structure secondaire domine dans une fermeture éclair à leucine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "hélice alpha",
        "hélices alpha",
        "hélice α",
        "coiled-coil"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La fermeture éclair à leucine est un motif coiled-coil alpha-hélicoïdal de dimérisation."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la fermeture éclair à leucine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est formé d’hélices alpha amphiphiles.",
        "correct": true,
        "explanation": "Exact. La fermeture éclair à leucine est un motif coiled-coil alpha-hélicoïdal de dimérisation."
      },
      {
        "content": "Les leucines sont nécessairement espacées d’un seul résidu.",
        "correct": false,
        "explanation": "Incorrect. La fermeture éclair à leucine est un motif coiled-coil alpha-hélicoïdal de dimérisation."
      },
      {
        "content": "Il s’agit toujours d’une enzyme complète.",
        "correct": false,
        "explanation": "Incorrect. La fermeture éclair à leucine est un motif coiled-coil alpha-hélicoïdal de dimérisation."
      },
      {
        "content": "C’est un motif de dimérisation de type coiled-coil.",
        "correct": true,
        "explanation": "Exact. La fermeture éclair à leucine est un motif coiled-coil alpha-hélicoïdal de dimérisation."
      },
      {
        "content": "On le trouve dans certains facteurs de transcription.",
        "correct": true,
        "explanation": "Exact. La fermeture éclair à leucine est un motif coiled-coil alpha-hélicoïdal de dimérisation."
      }
    ],
    "explanation": "La fermeture éclair à leucine est un motif coiled-coil alpha-hélicoïdal de dimérisation."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les domaines de liaison aux nucléotides, laquelle est correcte ?",
    "choices": [
      {
        "content": "La fixation d’un nucléotide ne peut jamais changer la conformation.",
        "correct": false,
        "explanation": "Incorrect. Les domaines de liaison aux nucléotides sont structurally variés; aucune composition 2α/3β n’est universelle."
      },
      {
        "content": "Des motifs distincts reconnaissent ATP, GTP, NAD ou d’autres nucléotides.",
        "correct": true,
        "explanation": "Exact. Les domaines de liaison aux nucléotides sont structurally variés; aucune composition 2α/3β n’est universelle."
      },
      {
        "content": "Tout domaine liant un nucléotide possède obligatoirement exactement deux hélices alpha et trois brins bêta.",
        "correct": false,
        "explanation": "Incorrect. Les domaines de liaison aux nucléotides sont structurally variés; aucune composition 2α/3β n’est universelle."
      },
      {
        "content": "Ils sont constitués uniquement de lipides.",
        "correct": false,
        "explanation": "Incorrect. Les domaines de liaison aux nucléotides sont structurally variés; aucune composition 2α/3β n’est universelle."
      },
      {
        "content": "Ils ne peuvent lier que l’ATP.",
        "correct": false,
        "explanation": "Incorrect. Les domaines de liaison aux nucléotides sont structurally variés; aucune composition 2α/3β n’est universelle."
      }
    ],
    "explanation": "Les domaines de liaison aux nucléotides sont structurally variés; aucune composition 2α/3β n’est universelle."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant les domaines de liaison aux nucléotides, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La fixation d’un nucléotide ne peut jamais changer la conformation.",
        "correct": false,
        "explanation": "Incorrect. Les domaines de liaison aux nucléotides sont structurally variés; aucune composition 2α/3β n’est universelle."
      },
      {
        "content": "Des motifs distincts reconnaissent ATP, GTP, NAD ou d’autres nucléotides.",
        "correct": true,
        "explanation": "Exact. Les domaines de liaison aux nucléotides sont structurally variés; aucune composition 2α/3β n’est universelle."
      },
      {
        "content": "Ils ne peuvent lier que l’ATP.",
        "correct": false,
        "explanation": "Incorrect. Les domaines de liaison aux nucléotides sont structurally variés; aucune composition 2α/3β n’est universelle."
      },
      {
        "content": "Ils sont constitués uniquement de lipides.",
        "correct": false,
        "explanation": "Incorrect. Les domaines de liaison aux nucléotides sont structurally variés; aucune composition 2α/3β n’est universelle."
      },
      {
        "content": "La fixation d’un nucléotide peut provoquer un changement conformationnel.",
        "correct": true,
        "explanation": "Exact. Les domaines de liaison aux nucléotides sont structurally variés; aucune composition 2α/3β n’est universelle."
      }
    ],
    "explanation": "Les domaines de liaison aux nucléotides sont structurally variés; aucune composition 2α/3β n’est universelle.",
    "requiredSelectionCount": 2
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les zones charnières entre domaines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles ne sont pas nécessairement totalement désordonnées.",
        "correct": true,
        "explanation": "Exact. Les zones charnières apportent une flexibilité fonctionnelle entre domaines."
      },
      {
        "content": "Elles rigidifient obligatoirement toute la protéine.",
        "correct": false,
        "explanation": "Incorrect. Les zones charnières apportent une flexibilité fonctionnelle entre domaines."
      },
      {
        "content": "Elles sont souvent plus flexibles que le cœur des domaines.",
        "correct": true,
        "explanation": "Exact. Les zones charnières apportent une flexibilité fonctionnelle entre domaines."
      },
      {
        "content": "Elles autorisent des mouvements relatifs des domaines.",
        "correct": true,
        "explanation": "Exact. Les zones charnières apportent une flexibilité fonctionnelle entre domaines."
      },
      {
        "content": "Leur flexibilité peut être essentielle à la fonction.",
        "correct": true,
        "explanation": "Exact. Les zones charnières apportent une flexibilité fonctionnelle entre domaines."
      }
    ],
    "explanation": "Les zones charnières apportent une flexibilité fonctionnelle entre domaines."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel rôle principal joue une zone charnière entre deux domaines ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "permettre un mouvement relatif",
        "flexibilité entre domaines",
        "mouvement des domaines"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les zones charnières apportent une flexibilité fonctionnelle entre domaines."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant l’organisation d’une protéine globulaire soluble ?",
    "choices": [
      {
        "content": "Tous les résidus hydrophobes sont obligatoirement à la surface aqueuse.",
        "correct": false,
        "explanation": "Incorrect. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "La polarité des chaînes latérales n’influence pas le repliement.",
        "correct": false,
        "explanation": "Incorrect. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Aucun résidu polaire ne peut être enfoui.",
        "correct": false,
        "explanation": "Incorrect. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Les protéines membranaires obéissent à un environnement différent.",
        "correct": true,
        "explanation": "Exact. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Les protéines membranaires ont la même distribution de surface que les protéines solubles.",
        "correct": false,
        "explanation": "Incorrect. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      }
    ],
    "explanation": "Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l’organisation d’une protéine globulaire soluble, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les résidus polaires et chargés sont souvent exposés au solvant.",
        "correct": true,
        "explanation": "Exact. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Les protéines membranaires ont la même distribution de surface que les protéines solubles.",
        "correct": false,
        "explanation": "Incorrect. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Cette répartition est une tendance et non une loi absolue.",
        "correct": true,
        "explanation": "Exact. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Tous les résidus hydrophobes sont obligatoirement à la surface aqueuse.",
        "correct": false,
        "explanation": "Incorrect. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "La polarité des chaînes latérales n’influence pas le repliement.",
        "correct": false,
        "explanation": "Incorrect. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      }
    ],
    "explanation": "Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel niveau structural est défini par l’association de plusieurs chaînes polypeptidiques ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "structure quaternaire",
        "quaternaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La structure quaternaire associe plusieurs sous-unités qui peuvent être identiques ou différentes."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel niveau structural décrit l’association de plusieurs chaînes polypeptidiques ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "structure quaternaire",
        "quaternaire",
        "la structure quaternaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La structure quaternaire associe plusieurs sous-unités qui peuvent être identiques ou différentes."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les homo- et hétéro-oligomères ?",
    "choices": [
      {
        "content": "Le terme oligomère convient bien aux complexes de quelques sous-unités.",
        "correct": true,
        "explanation": "Exact. Homo/hétéro décrit l’identité des sous-unités; dimère/tétramère décrit leur nombre."
      },
      {
        "content": "Un homodimère contient deux sous-unités différentes.",
        "correct": false,
        "explanation": "Incorrect. Homo/hétéro décrit l’identité des sous-unités; dimère/tétramère décrit leur nombre."
      },
      {
        "content": "Un hétérodimère contient quatre sous-unités.",
        "correct": false,
        "explanation": "Incorrect. Homo/hétéro décrit l’identité des sous-unités; dimère/tétramère décrit leur nombre."
      },
      {
        "content": "Homo/hétéro décrit le nombre total de résidus de chaque chaîne.",
        "correct": false,
        "explanation": "Incorrect. Homo/hétéro décrit l’identité des sous-unités; dimère/tétramère décrit leur nombre."
      },
      {
        "content": "Tout tétramère est un homotétramère.",
        "correct": false,
        "explanation": "Incorrect. Homo/hétéro décrit l’identité des sous-unités; dimère/tétramère décrit leur nombre."
      }
    ],
    "explanation": "Homo/hétéro décrit l’identité des sous-unités; dimère/tétramère décrit leur nombre."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les homo- et hétéro-oligomères, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le terme oligomère convient bien aux complexes de quelques sous-unités.",
        "correct": true,
        "explanation": "Exact. Homo/hétéro décrit l’identité des sous-unités; dimère/tétramère décrit leur nombre."
      },
      {
        "content": "Un homodimère contient deux sous-unités identiques.",
        "correct": true,
        "explanation": "Exact. Homo/hétéro décrit l’identité des sous-unités; dimère/tétramère décrit leur nombre."
      },
      {
        "content": "Un tétramère peut être homo- ou hétérotétramérique.",
        "correct": true,
        "explanation": "Exact. Homo/hétéro décrit l’identité des sous-unités; dimère/tétramère décrit leur nombre."
      },
      {
        "content": "Un hétérodimère contient deux sous-unités différentes.",
        "correct": true,
        "explanation": "Exact. Homo/hétéro décrit l’identité des sous-unités; dimère/tétramère décrit leur nombre."
      },
      {
        "content": "Un homodimère contient deux sous-unités différentes.",
        "correct": false,
        "explanation": "Incorrect. Homo/hétéro décrit l’identité des sous-unités; dimère/tétramère décrit leur nombre."
      }
    ],
    "explanation": "Homo/hétéro décrit l’identité des sous-unités; dimère/tétramère décrit leur nombre."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la créatine kinase CK-MM, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "CK-MM est un homodimère M2.",
        "correct": true,
        "explanation": "Exact. CK-MM est un homodimère M2 particulièrement abondant dans le muscle squelettique."
      },
      {
        "content": "CK-MM est un polysaccharide.",
        "correct": false,
        "explanation": "Incorrect. CK-MM est un homodimère M2 particulièrement abondant dans le muscle squelettique."
      },
      {
        "content": "Elle catalyse la réaction phosphocréatine/ADP réversible.",
        "correct": true,
        "explanation": "Exact. CK-MM est un homodimère M2 particulièrement abondant dans le muscle squelettique."
      },
      {
        "content": "CK-MM est un tétramère alpha2bêta2.",
        "correct": false,
        "explanation": "Incorrect. CK-MM est un homodimère M2 particulièrement abondant dans le muscle squelettique."
      },
      {
        "content": "CK-MM associe une sous-unité M et une B.",
        "correct": false,
        "explanation": "Incorrect. CK-MM est un homodimère M2 particulièrement abondant dans le muscle squelettique."
      }
    ],
    "explanation": "CK-MM est un homodimère M2 particulièrement abondant dans le muscle squelettique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la créatine kinase CK-MM ?",
    "choices": [
      {
        "content": "CK-MM est exclusivement présente dans le cœur.",
        "correct": false,
        "explanation": "Incorrect. CK-MM est un homodimère M2 particulièrement abondant dans le muscle squelettique."
      },
      {
        "content": "CK-MM est un polysaccharide.",
        "correct": false,
        "explanation": "Incorrect. CK-MM est un homodimère M2 particulièrement abondant dans le muscle squelettique."
      },
      {
        "content": "CK-MM associe une sous-unité M et une B.",
        "correct": false,
        "explanation": "Incorrect. CK-MM est un homodimère M2 particulièrement abondant dans le muscle squelettique."
      },
      {
        "content": "Elle est particulièrement abondante dans le muscle squelettique.",
        "correct": true,
        "explanation": "Exact. CK-MM est un homodimère M2 particulièrement abondant dans le muscle squelettique."
      },
      {
        "content": "Elle catalyse la réaction phosphocréatine/ADP réversible.",
        "correct": true,
        "explanation": "Exact. CK-MM est un homodimère M2 particulièrement abondant dans le muscle squelettique."
      }
    ],
    "explanation": "CK-MM est un homodimère M2 particulièrement abondant dans le muscle squelettique."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle composition de sous-unités définit CK-MB ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "M + B",
        "une sous-unité M et une sous-unité B",
        "MB"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "CK-MB est un hétérodimère MB, enrichi dans le myocarde mais non exclusivement cardiaque."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la créatine kinase CK-MB, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle contient quatre sous-unités.",
        "correct": false,
        "explanation": "Incorrect. CK-MB est un hétérodimère MB, enrichi dans le myocarde mais non exclusivement cardiaque."
      },
      {
        "content": "CK-MB est un homodimère M2.",
        "correct": false,
        "explanation": "Incorrect. CK-MB est un hétérodimère MB, enrichi dans le myocarde mais non exclusivement cardiaque."
      },
      {
        "content": "Elle est exclusivement présente dans le cœur.",
        "correct": false,
        "explanation": "Incorrect. CK-MB est un hétérodimère MB, enrichi dans le myocarde mais non exclusivement cardiaque."
      },
      {
        "content": "CK-MB est un hétérodimère MB.",
        "correct": true,
        "explanation": "Exact. CK-MB est un hétérodimère MB, enrichi dans le myocarde mais non exclusivement cardiaque."
      },
      {
        "content": "Elle n’a aucun lien avec le métabolisme phosphocréatine/ATP.",
        "correct": false,
        "explanation": "Incorrect. CK-MB est un hétérodimère MB, enrichi dans le myocarde mais non exclusivement cardiaque."
      }
    ],
    "explanation": "CK-MB est un hétérodimère MB, enrichi dans le myocarde mais non exclusivement cardiaque."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les protéines G hétérotrimériques ?",
    "choices": [
      {
        "content": "Bêta et gamma forment un complexe étroit.",
        "correct": true,
        "explanation": "Exact. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      },
      {
        "content": "Elles couplent de nombreux récepteurs membranaires à des effecteurs.",
        "correct": true,
        "explanation": "Exact. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      },
      {
        "content": "La sous-unité alpha lie GDP ou GTP.",
        "correct": true,
        "explanation": "Exact. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      },
      {
        "content": "Elles sont des homodimères alpha2.",
        "correct": false,
        "explanation": "Incorrect. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      },
      {
        "content": "La sous-unité alpha ne lie aucun nucléotide.",
        "correct": false,
        "explanation": "Incorrect. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      }
    ],
    "explanation": "Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Elle contient quatre sous-unités.",
        "correct": false,
        "explanation": "Incorrect. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      },
      {
        "content": "Ce sont des glucides membranaires.",
        "correct": false,
        "explanation": "Incorrect. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      },
      {
        "content": "Elles comportent les sous-unités alpha, bêta et gamma.",
        "correct": true,
        "explanation": "Exact. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      },
      {
        "content": "Bêta et gamma forment un complexe étroit.",
        "correct": true,
        "explanation": "Exact. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      },
      {
        "content": "Elles sont des homodimères alpha2.",
        "correct": false,
        "explanation": "Incorrect. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      },
      {
        "content": "La sous-unité alpha lie GDP ou GTP.",
        "correct": true,
        "explanation": "Exact. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      },
      {
        "content": "Elle est exclusivement présente dans le cœur.",
        "correct": false,
        "explanation": "Incorrect. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      },
      {
        "content": "Elles couplent de nombreux récepteurs membranaires à des effecteurs.",
        "correct": true,
        "explanation": "Exact. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      },
      {
        "content": "Elle appartient à la famille des créatine kinases.",
        "correct": true,
        "explanation": "Exact. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      },
      {
        "content": "CK-MB est un homodimère M2.",
        "correct": false,
        "explanation": "Incorrect. Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP."
      }
    ],
    "explanation": "Les protéines G hétérotrimériques sont des complexes alpha/bêta/gamma régulés par GDP/GTP. CK-MB est un hétérodimère MB, enrichi dans le myocarde mais non exclusivement cardiaque."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant l’hémoglobine adulte HbA, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La quaternarité permet une fixation coopérative de l’oxygène.",
        "correct": true,
        "explanation": "Exact. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      },
      {
        "content": "HbA est un hétérotétramère alpha2bêta2.",
        "correct": true,
        "explanation": "Exact. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      },
      {
        "content": "Une molécule d’HbA peut fixer jusqu’à quatre O2.",
        "correct": true,
        "explanation": "Exact. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      },
      {
        "content": "Chaque sous-unité porte un groupe hème.",
        "correct": true,
        "explanation": "Exact. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      },
      {
        "content": "Elle ne peut fixer qu’un O2 au total.",
        "correct": false,
        "explanation": "Incorrect. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      }
    ],
    "explanation": "HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle est la composition en chaînes de l’hémoglobine adulte majoritaire HbA ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "α2β2",
        "alpha2beta2",
        "2 alpha et 2 bêta",
        "deux chaînes alpha et deux chaînes bêta"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la hiérarchie des niveaux de structure, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La structure quaternaire concerne plusieurs chaînes.",
        "correct": true,
        "explanation": "Exact. Primaire, secondaire, tertiaire et éventuellement quaternaire décrivent des niveaux emboîtés d’organisation."
      },
      {
        "content": "Toute protéine possède obligatoirement quatre niveaux.",
        "correct": false,
        "explanation": "Incorrect. Primaire, secondaire, tertiaire et éventuellement quaternaire décrivent des niveaux emboîtés d’organisation."
      },
      {
        "content": "La structure primaire correspond à la séquence.",
        "correct": true,
        "explanation": "Exact. Primaire, secondaire, tertiaire et éventuellement quaternaire décrivent des niveaux emboîtés d’organisation."
      },
      {
        "content": "Le tertiaire ne concerne que les glucides.",
        "correct": false,
        "explanation": "Incorrect. Primaire, secondaire, tertiaire et éventuellement quaternaire décrivent des niveaux emboîtés d’organisation."
      },
      {
        "content": "Le secondaire est la séquence du gène.",
        "correct": false,
        "explanation": "Incorrect. Primaire, secondaire, tertiaire et éventuellement quaternaire décrivent des niveaux emboîtés d’organisation."
      }
    ],
    "explanation": "Primaire, secondaire, tertiaire et éventuellement quaternaire décrivent des niveaux emboîtés d’organisation."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel niveau correspond au repliement tridimensionnel d’une chaîne unique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "structure tertiaire",
        "tertiaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Primaire, secondaire, tertiaire et éventuellement quaternaire décrivent des niveaux emboîtés d’organisation."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant la rigidité et la flexibilité du squelette, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Le groupe peptidique C–N est relativement rigide et plan.",
        "correct": true,
        "explanation": "Exact. Le squelette alterne groupes peptidiques rigides et rotations phi/psi autour du Cα."
      },
      {
        "content": "Phi correspond à la rotation autour du C–N peptidique.",
        "correct": false,
        "explanation": "Incorrect. Le squelette alterne groupes peptidiques rigides et rotations phi/psi autour du Cα."
      },
      {
        "content": "La rigidité du groupe peptidique empêche tout repliement.",
        "correct": false,
        "explanation": "Incorrect. Le squelette alterne groupes peptidiques rigides et rotations phi/psi autour du Cα."
      },
      {
        "content": "La proline augmente infiniment la liberté conformationnelle.",
        "correct": false,
        "explanation": "Incorrect. Le squelette alterne groupes peptidiques rigides et rotations phi/psi autour du Cα."
      },
      {
        "content": "Les contraintes stériques limitent les combinaisons d’angles.",
        "correct": true,
        "explanation": "Exact. Le squelette alterne groupes peptidiques rigides et rotations phi/psi autour du Cα."
      }
    ],
    "explanation": "Le squelette alterne groupes peptidiques rigides et rotations phi/psi autour du Cα.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la rigidité et la flexibilité du squelette, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La proline réduit particulièrement la liberté de phi.",
        "correct": true,
        "explanation": "Exact. Le squelette alterne groupes peptidiques rigides et rotations phi/psi autour du Cα."
      },
      {
        "content": "Le groupe peptidique C–N est relativement rigide et plan.",
        "correct": true,
        "explanation": "Exact. Le squelette alterne groupes peptidiques rigides et rotations phi/psi autour du Cα."
      },
      {
        "content": "La proline augmente infiniment la liberté conformationnelle.",
        "correct": false,
        "explanation": "Incorrect. Le squelette alterne groupes peptidiques rigides et rotations phi/psi autour du Cα."
      },
      {
        "content": "N–Cα et Cα–C’ autorisent les rotations phi et psi.",
        "correct": true,
        "explanation": "Exact. Le squelette alterne groupes peptidiques rigides et rotations phi/psi autour du Cα."
      },
      {
        "content": "La rigidité du groupe peptidique empêche tout repliement.",
        "correct": false,
        "explanation": "Incorrect. Le squelette alterne groupes peptidiques rigides et rotations phi/psi autour du Cα."
      }
    ],
    "explanation": "Le squelette alterne groupes peptidiques rigides et rotations phi/psi autour du Cα."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les modifications post-traductionnelles et la fonction, laquelle est correcte ?",
    "choices": [
      {
        "content": "Toutes les modifications sont sans effet fonctionnel.",
        "correct": false,
        "explanation": "Incorrect. Les modifications post-traductionnelles produisent des protéoformes aux propriétés distinctes."
      },
      {
        "content": "Une phosphorylation peut modifier rapidement une activité ou une interaction.",
        "correct": true,
        "explanation": "Exact. Les modifications post-traductionnelles produisent des protéoformes aux propriétés distinctes."
      },
      {
        "content": "Une phosphorylation remplace un acide aminé par un autre.",
        "correct": false,
        "explanation": "Incorrect. Les modifications post-traductionnelles produisent des protéoformes aux propriétés distinctes."
      },
      {
        "content": "Un clivage protéolytique est toujours réversible.",
        "correct": false,
        "explanation": "Incorrect. Les modifications post-traductionnelles produisent des protéoformes aux propriétés distinctes."
      },
      {
        "content": "Elles exigent toutes une mutation du gène.",
        "correct": false,
        "explanation": "Incorrect. Les modifications post-traductionnelles produisent des protéoformes aux propriétés distinctes."
      }
    ],
    "explanation": "Les modifications post-traductionnelles produisent des protéoformes aux propriétés distinctes."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les modifications post-traductionnelles et la fonction ?",
    "choices": [
      {
        "content": "Un clivage peut activer un précurseur.",
        "correct": true,
        "explanation": "Exact. Les modifications post-traductionnelles produisent des protéoformes aux propriétés distinctes."
      },
      {
        "content": "Elles exigent toutes une mutation du gène.",
        "correct": false,
        "explanation": "Incorrect. Les modifications post-traductionnelles produisent des protéoformes aux propriétés distinctes."
      },
      {
        "content": "Une hydroxylation peut modifier stabilité ou interactions.",
        "correct": true,
        "explanation": "Exact. Les modifications post-traductionnelles produisent des protéoformes aux propriétés distinctes."
      },
      {
        "content": "Une même séquence peut donner plusieurs protéoformes.",
        "correct": true,
        "explanation": "Exact. Les modifications post-traductionnelles produisent des protéoformes aux propriétés distinctes."
      },
      {
        "content": "Une phosphorylation peut modifier rapidement une activité ou une interaction.",
        "correct": true,
        "explanation": "Exact. Les modifications post-traductionnelles produisent des protéoformes aux propriétés distinctes."
      }
    ],
    "explanation": "Les modifications post-traductionnelles produisent des protéoformes aux propriétés distinctes."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel effet physicochimique favorise particulièrement la formation d’un cœur apolaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "effet hydrophobe",
        "interactions hydrophobes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La stabilité tertiaire résulte d’interactions coopératives, avec un rôle majeur de l’effet hydrophobe."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Elles exigent toutes une mutation du gène.",
        "correct": false,
        "explanation": "Incorrect. La stabilité tertiaire résulte d’interactions coopératives, avec un rôle majeur de l’effet hydrophobe."
      },
      {
        "content": "La stabilité résulte de la somme de nombreuses interactions.",
        "correct": true,
        "explanation": "Exact. La stabilité tertiaire résulte d’interactions coopératives, avec un rôle majeur de l’effet hydrophobe."
      },
      {
        "content": "Une hydroxylation peut modifier stabilité ou interactions.",
        "correct": true,
        "explanation": "Exact. La stabilité tertiaire résulte d’interactions coopératives, avec un rôle majeur de l’effet hydrophobe."
      },
      {
        "content": "Un clivage protéolytique est toujours réversible.",
        "correct": false,
        "explanation": "Incorrect. La stabilité tertiaire résulte d’interactions coopératives, avec un rôle majeur de l’effet hydrophobe."
      },
      {
        "content": "Une phosphorylation remplace un acide aminé par un autre.",
        "correct": false,
        "explanation": "Incorrect. La stabilité tertiaire résulte d’interactions coopératives, avec un rôle majeur de l’effet hydrophobe."
      },
      {
        "content": "L’effet hydrophobe contribue fortement à la formation d’un cœur apolaire.",
        "correct": true,
        "explanation": "Exact. La stabilité tertiaire résulte d’interactions coopératives, avec un rôle majeur de l’effet hydrophobe."
      },
      {
        "content": "Toutes les modifications sont sans effet fonctionnel.",
        "correct": false,
        "explanation": "Incorrect. La stabilité tertiaire résulte d’interactions coopératives, avec un rôle majeur de l’effet hydrophobe."
      },
      {
        "content": "Les interactions faibles ne contribuent pas à la stabilité.",
        "correct": false,
        "explanation": "Incorrect. La stabilité tertiaire résulte d’interactions coopératives, avec un rôle majeur de l’effet hydrophobe."
      },
      {
        "content": "Un clivage peut activer un précurseur.",
        "correct": true,
        "explanation": "Exact. La stabilité tertiaire résulte d’interactions coopératives, avec un rôle majeur de l’effet hydrophobe."
      },
      {
        "content": "Les liaisons H, ponts salins et Van der Waals affinent la stabilité.",
        "correct": true,
        "explanation": "Exact. La stabilité tertiaire résulte d’interactions coopératives, avec un rôle majeur de l’effet hydrophobe."
      }
    ],
    "explanation": "La stabilité tertiaire résulte d’interactions coopératives, avec un rôle majeur de l’effet hydrophobe. Les modifications post-traductionnelles produisent des protéoformes aux propriétés distinctes."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la comparaison CK-MM, CK-MB et HbA ?",
    "choices": [
      {
        "content": "Ces exemples illustrent plusieurs degrés d’oligomérisation.",
        "correct": true,
        "explanation": "Exact. CK-MM et CK-MB sont des dimères; HbA est un tétramère alpha2bêta2."
      },
      {
        "content": "CK-MB est un hétérodimère MB.",
        "correct": true,
        "explanation": "Exact. CK-MM et CK-MB sont des dimères; HbA est un tétramère alpha2bêta2."
      },
      {
        "content": "HbA est un monomère.",
        "correct": false,
        "explanation": "Incorrect. CK-MM et CK-MB sont des dimères; HbA est un tétramère alpha2bêta2."
      },
      {
        "content": "CK-MB est un homodimère B2.",
        "correct": false,
        "explanation": "Incorrect. CK-MM et CK-MB sont des dimères; HbA est un tétramère alpha2bêta2."
      },
      {
        "content": "Ces complexes ont tous la même composition.",
        "correct": false,
        "explanation": "Incorrect. CK-MM et CK-MB sont des dimères; HbA est un tétramère alpha2bêta2."
      }
    ],
    "explanation": "CK-MM et CK-MB sont des dimères; HbA est un tétramère alpha2bêta2."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Lequel de CK-MM, CK-MB et HbA comporte quatre sous-unités ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "HbA",
        "hémoglobine",
        "hemoglobine",
        "hémoglobine A"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "CK-MM et CK-MB sont des dimères; HbA est un tétramère alpha2bêta2."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la dynamique conformationnelle des protéines, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Des mouvements de domaines peuvent être nécessaires à la fonction.",
        "correct": true,
        "explanation": "Exact. Les protéines sont dynamiques et leurs mouvements réversibles participent à leur fonction."
      },
      {
        "content": "Une protéine native explore un ensemble de conformations proches.",
        "correct": true,
        "explanation": "Exact. Les protéines sont dynamiques et leurs mouvements réversibles participent à leur fonction."
      },
      {
        "content": "Tout changement de conformation est une dénaturation irréversible.",
        "correct": false,
        "explanation": "Incorrect. Les protéines sont dynamiques et leurs mouvements réversibles participent à leur fonction."
      },
      {
        "content": "La fixation d’un ligand ne peut jamais modifier la structure.",
        "correct": false,
        "explanation": "Incorrect. Les protéines sont dynamiques et leurs mouvements réversibles participent à leur fonction."
      },
      {
        "content": "Une protéine native est totalement immobile.",
        "correct": false,
        "explanation": "Incorrect. Les protéines sont dynamiques et leurs mouvements réversibles participent à leur fonction."
      }
    ],
    "explanation": "Les protéines sont dynamiques et leurs mouvements réversibles participent à leur fonction.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la dynamique conformationnelle des protéines ?",
    "choices": [
      {
        "content": "La fixation d’un ligand ne peut jamais modifier la structure.",
        "correct": false,
        "explanation": "Incorrect. Les protéines sont dynamiques et leurs mouvements réversibles participent à leur fonction."
      },
      {
        "content": "Des mouvements de domaines peuvent être nécessaires à la fonction.",
        "correct": true,
        "explanation": "Exact. Les protéines sont dynamiques et leurs mouvements réversibles participent à leur fonction."
      },
      {
        "content": "Une protéine native est totalement immobile.",
        "correct": false,
        "explanation": "Incorrect. Les protéines sont dynamiques et leurs mouvements réversibles participent à leur fonction."
      },
      {
        "content": "Un changement conformationnel fonctionnel n’est pas nécessairement une dénaturation.",
        "correct": true,
        "explanation": "Exact. Les protéines sont dynamiques et leurs mouvements réversibles participent à leur fonction."
      },
      {
        "content": "Une protéine native explore un ensemble de conformations proches.",
        "correct": true,
        "explanation": "Exact. Les protéines sont dynamiques et leurs mouvements réversibles participent à leur fonction."
      }
    ],
    "explanation": "Les protéines sont dynamiques et leurs mouvements réversibles participent à leur fonction."
  }
];
