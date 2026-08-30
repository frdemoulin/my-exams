import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Structure des peptides et protéines — Section C — Structures secondaire et tertiaire */
export const UE14_BIOCH_CH10_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la structure secondaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une protéine ne peut contenir qu’un seul type de structure secondaire.",
        "correct": false,
        "explanation": "Incorrect. La structure secondaire comprend notamment hélices alpha et feuillets bêta, stabilisés par des liaisons H du squelette."
      },
      {
        "content": "Elle est stabilisée uniquement par des ponts disulfure.",
        "correct": false,
        "explanation": "Incorrect. La structure secondaire comprend notamment hélices alpha et feuillets bêta, stabilisés par des liaisons H du squelette."
      },
      {
        "content": "Elle correspond uniquement à plusieurs sous-unités.",
        "correct": false,
        "explanation": "Incorrect. La structure secondaire comprend notamment hélices alpha et feuillets bêta, stabilisés par des liaisons H du squelette."
      },
      {
        "content": "Elle dépend des angles phi et psi.",
        "correct": true,
        "explanation": "Exact. La structure secondaire comprend notamment hélices alpha et feuillets bêta, stabilisés par des liaisons H du squelette."
      },
      {
        "content": "Elle est stabilisée surtout par des liaisons hydrogène du squelette.",
        "correct": true,
        "explanation": "Exact. La structure secondaire comprend notamment hélices alpha et feuillets bêta, stabilisés par des liaisons H du squelette."
      }
    ],
    "explanation": "La structure secondaire comprend notamment hélices alpha et feuillets bêta, stabilisés par des liaisons H du squelette."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la structure secondaire, laquelle est correcte ?",
    "choices": [
      {
        "content": "Une protéine ne peut contenir qu’un seul type de structure secondaire.",
        "correct": false,
        "explanation": "Incorrect. La structure secondaire comprend notamment hélices alpha et feuillets bêta, stabilisés par des liaisons H du squelette."
      },
      {
        "content": "Elle est stabilisée uniquement par des ponts disulfure.",
        "correct": false,
        "explanation": "Incorrect. La structure secondaire comprend notamment hélices alpha et feuillets bêta, stabilisés par des liaisons H du squelette."
      },
      {
        "content": "Elle correspond à la séquence primaire.",
        "correct": false,
        "explanation": "Incorrect. La structure secondaire comprend notamment hélices alpha et feuillets bêta, stabilisés par des liaisons H du squelette."
      },
      {
        "content": "Elle correspond uniquement à plusieurs sous-unités.",
        "correct": false,
        "explanation": "Incorrect. La structure secondaire comprend notamment hélices alpha et feuillets bêta, stabilisés par des liaisons H du squelette."
      },
      {
        "content": "Hélices alpha et feuillets bêta en sont les principaux motifs réguliers.",
        "correct": true,
        "explanation": "Exact. La structure secondaire comprend notamment hélices alpha et feuillets bêta, stabilisés par des liaisons H du squelette."
      }
    ],
    "explanation": "La structure secondaire comprend notamment hélices alpha et feuillets bêta, stabilisés par des liaisons H du squelette."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Entre quels résidus se forme la liaison hydrogène typique d’une hélice alpha ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "i et i+4",
        "résidu i et résidu i+4",
        "i/i+4"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’hélice alpha est une hélice droite stabilisée par des liaisons H C=O(i)…H–N(i+4)."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l’hélice alpha, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les liaisons hydrogène typiques relient C=O(i) à N–H(i+4).",
        "correct": true,
        "explanation": "Exact. L’hélice alpha est une hélice droite stabilisée par des liaisons H C=O(i)…H–N(i+4)."
      },
      {
        "content": "Elle est stabilisée par des liaisons glycosidiques.",
        "correct": false,
        "explanation": "Incorrect. L’hélice alpha est une hélice droite stabilisée par des liaisons H C=O(i)…H–N(i+4)."
      },
      {
        "content": "La proline est obligatoirement au centre de toute hélice.",
        "correct": false,
        "explanation": "Incorrect. L’hélice alpha est une hélice droite stabilisée par des liaisons H C=O(i)…H–N(i+4)."
      },
      {
        "content": "Les chaînes latérales pointent vers l’extérieur.",
        "correct": true,
        "explanation": "Exact. L’hélice alpha est une hélice droite stabilisée par des liaisons H C=O(i)…H–N(i+4)."
      },
      {
        "content": "La proline est souvent défavorable au milieu d’une longue hélice régulière.",
        "correct": true,
        "explanation": "Exact. L’hélice alpha est une hélice droite stabilisée par des liaisons H C=O(i)…H–N(i+4)."
      }
    ],
    "explanation": "L’hélice alpha est une hélice droite stabilisée par des liaisons H C=O(i)…H–N(i+4)."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les repères géométriques de l’hélice alpha, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle comporte 10 résidus par tour.",
        "correct": false,
        "explanation": "Incorrect. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      },
      {
        "content": "Ces repères géométriques n’ont aucun lien entre eux.",
        "correct": false,
        "explanation": "Incorrect. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      },
      {
        "content": "Ces valeurs sont des moyennes structurales.",
        "correct": true,
        "explanation": "Exact. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      },
      {
        "content": "La progression par résidu est de 1,5 nm.",
        "correct": false,
        "explanation": "Incorrect. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      },
      {
        "content": "Son pas est de 5,4 nm.",
        "correct": false,
        "explanation": "Incorrect. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      }
    ],
    "explanation": "Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant les repères géométriques de l’hélice alpha, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Son pas est de 5,4 nm.",
        "correct": false,
        "explanation": "Incorrect. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      },
      {
        "content": "Elle comporte environ 3,6 résidus par tour.",
        "correct": true,
        "explanation": "Exact. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      },
      {
        "content": "La progression par résidu est de 1,5 nm.",
        "correct": false,
        "explanation": "Incorrect. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      },
      {
        "content": "Ces repères géométriques n’ont aucun lien entre eux.",
        "correct": false,
        "explanation": "Incorrect. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      },
      {
        "content": "Son pas est d’environ 0,54 nm.",
        "correct": true,
        "explanation": "Exact. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      }
    ],
    "explanation": "Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu.",
    "requiredSelectionCount": 2
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la stabilité de l’hélice alpha, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les chaînes latérales n’influencent jamais la stabilité.",
        "correct": false,
        "explanation": "Incorrect. Les liaisons H du squelette sont le principal déterminant de l’hélice alpha."
      },
      {
        "content": "Les interactions entre chaînes latérales peuvent aussi la moduler.",
        "correct": true,
        "explanation": "Exact. Les liaisons H du squelette sont le principal déterminant de l’hélice alpha."
      },
      {
        "content": "La stabilité dépend de la séquence et de l’environnement.",
        "correct": true,
        "explanation": "Exact. Les liaisons H du squelette sont le principal déterminant de l’hélice alpha."
      },
      {
        "content": "Elle repose surtout sur des liaisons hydrogène du squelette.",
        "correct": true,
        "explanation": "Exact. Les liaisons H du squelette sont le principal déterminant de l’hélice alpha."
      },
      {
        "content": "La proline interne est souvent déstabilisante.",
        "correct": true,
        "explanation": "Exact. Les liaisons H du squelette sont le principal déterminant de l’hélice alpha."
      }
    ],
    "explanation": "Les liaisons H du squelette sont le principal déterminant de l’hélice alpha."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type d’interaction stabilise principalement l’hélice alpha ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "liaisons hydrogène",
        "liaison hydrogène",
        "liaisons H"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les liaisons H du squelette sont le principal déterminant de l’hélice alpha."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la myoglobine ?",
    "choices": [
      {
        "content": "C’est une protéine fibreuse du collagène.",
        "correct": false,
        "explanation": "Incorrect. La myoglobine est un monomère globulaire à huit hélices alpha principales et un groupe hème."
      },
      {
        "content": "Elle ne contient aucun groupe prosthétique.",
        "correct": false,
        "explanation": "Incorrect. La myoglobine est un monomère globulaire à huit hélices alpha principales et un groupe hème."
      },
      {
        "content": "C’est un tétramère alpha2bêta2.",
        "correct": false,
        "explanation": "Incorrect. La myoglobine est un monomère globulaire à huit hélices alpha principales et un groupe hème."
      },
      {
        "content": "C’est une protéine globulaire monomérique.",
        "correct": true,
        "explanation": "Exact. La myoglobine est un monomère globulaire à huit hélices alpha principales et un groupe hème."
      },
      {
        "content": "Elle est constituée uniquement de feuillets bêta.",
        "correct": false,
        "explanation": "Incorrect. La myoglobine est un monomère globulaire à huit hélices alpha principales et un groupe hème."
      }
    ],
    "explanation": "La myoglobine est un monomère globulaire à huit hélices alpha principales et un groupe hème."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la myoglobine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "C’est un tétramère alpha2bêta2.",
        "correct": false,
        "explanation": "Incorrect. La myoglobine est un monomère globulaire à huit hélices alpha principales et un groupe hème."
      },
      {
        "content": "Elle fixe l’oxygène grâce à un groupe hème.",
        "correct": true,
        "explanation": "Exact. La myoglobine est un monomère globulaire à huit hélices alpha principales et un groupe hème."
      },
      {
        "content": "C’est une protéine fibreuse du collagène.",
        "correct": false,
        "explanation": "Incorrect. La myoglobine est un monomère globulaire à huit hélices alpha principales et un groupe hème."
      },
      {
        "content": "Elle est constituée uniquement de feuillets bêta.",
        "correct": false,
        "explanation": "Incorrect. La myoglobine est un monomère globulaire à huit hélices alpha principales et un groupe hème."
      },
      {
        "content": "Son repliement classique comprend huit hélices principales.",
        "correct": true,
        "explanation": "Exact. La myoglobine est un monomère globulaire à huit hélices alpha principales et un groupe hème."
      }
    ],
    "explanation": "La myoglobine est un monomère globulaire à huit hélices alpha principales et un groupe hème."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels deux arrangements directionnels de brins bêta peut-on rencontrer dans un feuillet ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "parallèle et antiparallèle",
        "parallèles et antiparallèles",
        "parallel et antiparallel"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels arrangements directionnels peut-on rencontrer entre les brins d’un feuillet bêta ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "parallèle et antiparallèle",
        "parallèles et antiparallèles",
        "parallel et antiparallel"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les chaînes latérales dans les feuillets bêta ?",
    "choices": [
      {
        "content": "Elles alternent au-dessus et au-dessous du plan moyen.",
        "correct": true,
        "explanation": "Exact. Dans un brin bêta, les chaînes latérales alternent de part et d’autre du squelette étendu."
      },
      {
        "content": "Seule la glycine est permise.",
        "correct": false,
        "explanation": "Incorrect. Dans un brin bêta, les chaînes latérales alternent de part et d’autre du squelette étendu."
      },
      {
        "content": "La nature des chaînes latérales n’influence jamais le repliement.",
        "correct": false,
        "explanation": "Incorrect. Dans un brin bêta, les chaînes latérales alternent de part et d’autre du squelette étendu."
      },
      {
        "content": "Toutes les chaînes latérales pointent dans la même direction.",
        "correct": false,
        "explanation": "Incorrect. Dans un brin bêta, les chaînes latérales alternent de part et d’autre du squelette étendu."
      },
      {
        "content": "Les chaînes latérales forment les liaisons peptidiques du squelette.",
        "correct": false,
        "explanation": "Incorrect. Dans un brin bêta, les chaînes latérales alternent de part et d’autre du squelette étendu."
      }
    ],
    "explanation": "Dans un brin bêta, les chaînes latérales alternent de part et d’autre du squelette étendu."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les chaînes latérales dans les feuillets bêta, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La nature des chaînes latérales n’influence jamais le repliement.",
        "correct": false,
        "explanation": "Incorrect. Dans un brin bêta, les chaînes latérales alternent de part et d’autre du squelette étendu."
      },
      {
        "content": "Des résidus aromatiques peuvent aussi s’y rencontrer.",
        "correct": true,
        "explanation": "Exact. Dans un brin bêta, les chaînes latérales alternent de part et d’autre du squelette étendu."
      },
      {
        "content": "Valine et isoleucine sont compatibles avec les brins bêta.",
        "correct": true,
        "explanation": "Exact. Dans un brin bêta, les chaînes latérales alternent de part et d’autre du squelette étendu."
      },
      {
        "content": "La polarité des chaînes influence leur exposition au solvant.",
        "correct": true,
        "explanation": "Exact. Dans un brin bêta, les chaînes latérales alternent de part et d’autre du squelette étendu."
      },
      {
        "content": "Elles alternent au-dessus et au-dessous du plan moyen.",
        "correct": true,
        "explanation": "Exact. Dans un brin bêta, les chaînes latérales alternent de part et d’autre du squelette étendu."
      }
    ],
    "explanation": "Dans un brin bêta, les chaînes latérales alternent de part et d’autre du squelette étendu."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les immunoglobulines et les feuillets bêta, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Ce sont des triacylglycérols.",
        "correct": false,
        "explanation": "Incorrect. Les domaines d’immunoglobuline illustrent un repliement globulaire riche en feuillets bêta."
      },
      {
        "content": "Les immunoglobulines sont dépourvues de feuillets bêta.",
        "correct": false,
        "explanation": "Incorrect. Les domaines d’immunoglobuline illustrent un repliement globulaire riche en feuillets bêta."
      },
      {
        "content": "Les domaines d’immunoglobuline sont riches en feuillets bêta.",
        "correct": true,
        "explanation": "Exact. Les domaines d’immunoglobuline illustrent un repliement globulaire riche en feuillets bêta."
      },
      {
        "content": "Des ponts disulfure stabilisent de nombreux domaines d’immunoglobuline.",
        "correct": true,
        "explanation": "Exact. Les domaines d’immunoglobuline illustrent un repliement globulaire riche en feuillets bêta."
      },
      {
        "content": "Aucun pont disulfure n’existe dans les immunoglobulines.",
        "correct": false,
        "explanation": "Incorrect. Les domaines d’immunoglobuline illustrent un repliement globulaire riche en feuillets bêta."
      }
    ],
    "explanation": "Les domaines d’immunoglobuline illustrent un repliement globulaire riche en feuillets bêta.",
    "requiredSelectionCount": 2
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les immunoglobulines et les feuillets bêta ?",
    "choices": [
      {
        "content": "Les domaines d’immunoglobuline sont riches en feuillets bêta.",
        "correct": true,
        "explanation": "Exact. Les domaines d’immunoglobuline illustrent un repliement globulaire riche en feuillets bêta."
      },
      {
        "content": "Des ponts disulfure stabilisent de nombreux domaines d’immunoglobuline.",
        "correct": true,
        "explanation": "Exact. Les domaines d’immunoglobuline illustrent un repliement globulaire riche en feuillets bêta."
      },
      {
        "content": "Aucun pont disulfure n’existe dans les immunoglobulines.",
        "correct": false,
        "explanation": "Incorrect. Les domaines d’immunoglobuline illustrent un repliement globulaire riche en feuillets bêta."
      },
      {
        "content": "Les immunoglobulines sont dépourvues de feuillets bêta.",
        "correct": false,
        "explanation": "Incorrect. Les domaines d’immunoglobuline illustrent un repliement globulaire riche en feuillets bêta."
      },
      {
        "content": "Leur structure est uniquement une longue hélice alpha.",
        "correct": false,
        "explanation": "Incorrect. Les domaines d’immunoglobuline illustrent un repliement globulaire riche en feuillets bêta."
      }
    ],
    "explanation": "Les domaines d’immunoglobuline illustrent un repliement globulaire riche en feuillets bêta."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de résidus comporte typiquement un coude bêta classique ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Un coude bêta classique implique souvent quatre résidus; les boucles sont plus variables."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les coudes bêta et les boucles, laquelle est correcte ?",
    "choices": [
      {
        "content": "Une boucle est nécessairement une hélice alpha complète.",
        "correct": false,
        "explanation": "Incorrect. Un coude bêta classique implique souvent quatre résidus; les boucles sont plus variables."
      },
      {
        "content": "Proline et glycine sont interdites dans les coudes.",
        "correct": false,
        "explanation": "Incorrect. Un coude bêta classique implique souvent quatre résidus; les boucles sont plus variables."
      },
      {
        "content": "Toutes les boucles sont stabilisées par une unique liaison H entre résidus éloignés.",
        "correct": false,
        "explanation": "Incorrect. Un coude bêta classique implique souvent quatre résidus; les boucles sont plus variables."
      },
      {
        "content": "Tout coude implique exactement deux résidus.",
        "correct": false,
        "explanation": "Incorrect. Un coude bêta classique implique souvent quatre résidus; les boucles sont plus variables."
      },
      {
        "content": "Une liaison H peut relier le résidu i au résidu i+3 dans un coude bêta.",
        "correct": true,
        "explanation": "Exact. Un coude bêta classique implique souvent quatre résidus; les boucles sont plus variables."
      }
    ],
    "explanation": "Un coude bêta classique implique souvent quatre résidus; les boucles sont plus variables."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la structure tertiaire ?",
    "choices": [
      {
        "content": "Elle organise structures secondaires, boucles et domaines.",
        "correct": true,
        "explanation": "Exact. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle est parfaitement rigide.",
        "correct": false,
        "explanation": "Incorrect. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle correspond uniquement à la séquence primaire.",
        "correct": false,
        "explanation": "Incorrect. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle décrit le repliement tridimensionnel global d’une chaîne.",
        "correct": true,
        "explanation": "Exact. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle rapproche des résidus éloignés dans la séquence.",
        "correct": true,
        "explanation": "Exact. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      }
    ],
    "explanation": "La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Elle est parfaitement rigide.",
        "correct": false,
        "explanation": "Incorrect. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle rapproche des résidus éloignés dans la séquence.",
        "correct": true,
        "explanation": "Exact. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Proline et glycine sont fréquentes dans les coudes.",
        "correct": true,
        "explanation": "Exact. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Tout coude implique exactement deux résidus.",
        "correct": false,
        "explanation": "Incorrect. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle correspond uniquement à la séquence primaire.",
        "correct": false,
        "explanation": "Incorrect. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle ne dépend d’aucune interaction entre chaînes latérales.",
        "correct": false,
        "explanation": "Incorrect. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Une liaison H peut relier le résidu i au résidu i+3 dans un coude bêta.",
        "correct": true,
        "explanation": "Exact. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Les boucles peuvent être plus longues et participer à la reconnaissance moléculaire.",
        "correct": true,
        "explanation": "Exact. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle décrit le repliement tridimensionnel global d’une chaîne.",
        "correct": true,
        "explanation": "Exact. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Toutes les boucles sont stabilisées par une unique liaison H entre résidus éloignés.",
        "correct": false,
        "explanation": "Incorrect. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      }
    ],
    "explanation": "La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique. Un coude bêta classique implique souvent quatre résidus; les boucles sont plus variables."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant les interactions stabilisant la structure tertiaire, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Les liaisons hydrogène participent à la stabilité.",
        "correct": true,
        "explanation": "Exact. Effet hydrophobe, liaisons H, interactions ioniques, Van der Waals et parfois disulfures stabilisent le tertiaire."
      },
      {
        "content": "Les interactions ioniques sont indépendantes du pH.",
        "correct": false,
        "explanation": "Incorrect. Effet hydrophobe, liaisons H, interactions ioniques, Van der Waals et parfois disulfures stabilisent le tertiaire."
      },
      {
        "content": "Des ponts disulfure peuvent apporter une stabilisation covalente.",
        "correct": true,
        "explanation": "Exact. Effet hydrophobe, liaisons H, interactions ioniques, Van der Waals et parfois disulfures stabilisent le tertiaire."
      },
      {
        "content": "L’effet hydrophobe favorise l’enfouissement des chaînes apolaires dans une protéine soluble.",
        "correct": true,
        "explanation": "Exact. Effet hydrophobe, liaisons H, interactions ioniques, Van der Waals et parfois disulfures stabilisent le tertiaire."
      },
      {
        "content": "Des interactions ioniques peuvent se former entre groupes chargés.",
        "correct": true,
        "explanation": "Exact. Effet hydrophobe, liaisons H, interactions ioniques, Van der Waals et parfois disulfures stabilisent le tertiaire."
      }
    ],
    "explanation": "Effet hydrophobe, liaisons H, interactions ioniques, Van der Waals et parfois disulfures stabilisent le tertiaire."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel phénomène lié à l’eau favorise l’enfouissement des résidus apolaires ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "effet hydrophobe",
        "interaction hydrophobe",
        "hydrophobic effect"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Effet hydrophobe, liaisons H, interactions ioniques, Van der Waals et parfois disulfures stabilisent le tertiaire."
  }
];
