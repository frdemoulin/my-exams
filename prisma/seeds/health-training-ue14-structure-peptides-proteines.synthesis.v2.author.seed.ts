import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Structure des peptides et protéines — Synthèse — Structure des peptides et protéines */
export const UE14_BIOCH_CH10_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la liaison peptidique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle relie deux fonctions alcool.",
        "correct": false,
        "explanation": "Incorrect. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      },
      {
        "content": "Elle relie le carboxyle alpha d’un résidu à l’amine alpha du suivant.",
        "correct": true,
        "explanation": "Exact. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      },
      {
        "content": "Elle appartient au squelette principal du polypeptide.",
        "correct": true,
        "explanation": "Exact. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      },
      {
        "content": "La séquence conventionnelle d’un peptide s’écrit de N vers C.",
        "correct": true,
        "explanation": "Exact. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      },
      {
        "content": "Elle est une liaison covalente de type amide.",
        "correct": true,
        "explanation": "Exact. La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
      }
    ],
    "explanation": "La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de fonction chimique correspond à la liaison peptidique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "amide",
        "fonction amide",
        "liaison amide"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La liaison peptidique est une liaison amide covalente du squelette polypeptidique."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la dénaturation des protéines ?",
    "choices": [
      {
        "content": "Elle peut diminuer ou abolir l’activité biologique.",
        "correct": true,
        "explanation": "Exact. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      },
      {
        "content": "Elle ne peut jamais être provoquée par la chaleur.",
        "correct": false,
        "explanation": "Incorrect. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      },
      {
        "content": "Elle augmente nécessairement l’activité biologique.",
        "correct": false,
        "explanation": "Incorrect. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      },
      {
        "content": "Elle correspond toujours à l’hydrolyse complète des liaisons peptidiques.",
        "correct": false,
        "explanation": "Incorrect. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      },
      {
        "content": "Elle modifie obligatoirement la séquence codée par le gène.",
        "correct": false,
        "explanation": "Incorrect. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      }
    ],
    "explanation": "La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la dénaturation des protéines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle augmente nécessairement l’activité biologique.",
        "correct": false,
        "explanation": "Incorrect. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      },
      {
        "content": "Elle peut être réversible ou irréversible selon les conditions.",
        "correct": true,
        "explanation": "Exact. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      },
      {
        "content": "Elle ne peut jamais être provoquée par la chaleur.",
        "correct": false,
        "explanation": "Incorrect. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      },
      {
        "content": "Elle modifie obligatoirement la séquence codée par le gène.",
        "correct": false,
        "explanation": "Incorrect. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      },
      {
        "content": "Elle ne nécessite pas la rupture des liaisons peptidiques de la structure primaire.",
        "correct": true,
        "explanation": "Exact. La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
      }
    ],
    "explanation": "La dénaturation touche surtout le repliement et n’implique pas nécessairement une protéolyse."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la rigidité de la liaison peptidique, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "La liaison C–N peptidique tourne librement sans contrainte.",
        "correct": false,
        "explanation": "Incorrect. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      },
      {
        "content": "Aucune liaison du squelette ne peut tourner.",
        "correct": false,
        "explanation": "Incorrect. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      },
      {
        "content": "La liaison peptidique est ionique.",
        "correct": false,
        "explanation": "Incorrect. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      },
      {
        "content": "Le groupe peptidique est approximativement plan.",
        "correct": true,
        "explanation": "Exact. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      },
      {
        "content": "La rotation autour de C–N est fortement limitée.",
        "correct": true,
        "explanation": "Exact. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      }
    ],
    "explanation": "La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la rigidité de la liaison peptidique ?",
    "choices": [
      {
        "content": "La liaison C–N peptidique tourne librement sans contrainte.",
        "correct": false,
        "explanation": "Incorrect. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      },
      {
        "content": "Le groupe peptidique est approximativement plan.",
        "correct": true,
        "explanation": "Exact. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      },
      {
        "content": "Les rotations autour de N–Cα et Cα–C’ restent possibles.",
        "correct": true,
        "explanation": "Exact. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      },
      {
        "content": "La liaison peptidique est ionique.",
        "correct": false,
        "explanation": "Incorrect. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      },
      {
        "content": "La rotation autour de C–N est fortement limitée.",
        "correct": true,
        "explanation": "Exact. La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
      }
    ],
    "explanation": "La résonance confère à C–N un caractère partiellement double qui rigidifie le groupe peptidique."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel ion divalent est efficacement complexé par les résidus gamma-carboxyglutamate ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "calcium",
        "Ca2+",
        "Ca²+"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la gamma-carboxylation du glutamate, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle transforme le glutamate en glucose.",
        "correct": false,
        "explanation": "Incorrect. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      },
      {
        "content": "Elle dépend exclusivement de la vitamine C.",
        "correct": false,
        "explanation": "Incorrect. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      },
      {
        "content": "Il s’agit d’une modification post-traductionnelle.",
        "correct": true,
        "explanation": "Exact. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      },
      {
        "content": "Elle empêche toute fixation du calcium.",
        "correct": false,
        "explanation": "Incorrect. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      },
      {
        "content": "Elle enlève le carboxyle alpha du glutamate.",
        "correct": false,
        "explanation": "Incorrect. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
      }
    ],
    "explanation": "La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide aminé doit être oxydé par paire pour former un pont disulfure ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cystéine",
        "cysteine",
        "Cys"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un pont disulfure est une liaison covalente S–S entre deux cystéines."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Elle forme des résidus gamma-carboxyglutamate.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Ce sont des liaisons hydrogène.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Il s’agit d’une modification post-traductionnelle.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Elle empêche toute fixation du calcium.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Elle enlève le carboxyle alpha du glutamate.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Elle dépend exclusivement de la vitamine C.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Ce sont des liaisons covalentes S–S.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Ils résultent de l’oxydation de deux thiols de cystéine.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Ils sont fréquents dans de nombreuses protéines sécrétées ou extracellulaires.",
        "correct": true,
        "explanation": "Exact. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      },
      {
        "content": "Ils se forment entre deux méthionines.",
        "correct": false,
        "explanation": "Incorrect. Un pont disulfure est une liaison covalente S–S entre deux cystéines."
      }
    ],
    "explanation": "Un pont disulfure est une liaison covalente S–S entre deux cystéines. La gamma-carboxylation vitamine K-dépendante crée des sites de liaison au calcium."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les repères géométriques de l’hélice alpha, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son pas est d’environ 0,54 nm.",
        "correct": true,
        "explanation": "Exact. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      },
      {
        "content": "Ces repères géométriques n’ont aucun lien entre eux.",
        "correct": false,
        "explanation": "Incorrect. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      },
      {
        "content": "Son pas est de 5,4 nm.",
        "correct": false,
        "explanation": "Incorrect. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      },
      {
        "content": "Elle comporte 10 résidus par tour.",
        "correct": false,
        "explanation": "Incorrect. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      },
      {
        "content": "Ces valeurs sont des moyennes structurales.",
        "correct": true,
        "explanation": "Exact. Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
      }
    ],
    "explanation": "Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de résidus compte approximativement un tour d’hélice alpha ?",
    "answer": {
      "type": "number",
      "value": 3.6,
      "tolerance": 0.15
    },
    "explanation": "Une hélice alpha possède environ 3,6 résidus par tour, un pas de 0,54 nm et une progression de 0,15 nm par résidu."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant les feuillets bêta, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Toutes les chaînes latérales sont du même côté.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette."
      },
      {
        "content": "Les brins sont reliés principalement par des liaisons glycosidiques.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette."
      },
      {
        "content": "Tous les brins doivent être parallèles.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette."
      },
      {
        "content": "Les brins peuvent être parallèles ou antiparallèles.",
        "correct": true,
        "explanation": "Exact. Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette."
      },
      {
        "content": "Des segments éloignés dans la séquence peuvent former un même feuillet.",
        "correct": true,
        "explanation": "Exact. Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette."
      }
    ],
    "explanation": "Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les feuillets bêta, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les brins sont reliés principalement par des liaisons glycosidiques.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette."
      },
      {
        "content": "Les chaînes latérales alternent de part et d’autre du feuillet.",
        "correct": true,
        "explanation": "Exact. Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette."
      },
      {
        "content": "Les brins peuvent être parallèles ou antiparallèles.",
        "correct": true,
        "explanation": "Exact. Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette."
      },
      {
        "content": "Ils associent des brins bêta étendus par des liaisons hydrogène du squelette.",
        "correct": true,
        "explanation": "Exact. Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette."
      },
      {
        "content": "Un feuillet bêta est une hélice continue.",
        "correct": false,
        "explanation": "Incorrect. Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette."
      }
    ],
    "explanation": "Les feuillets bêta associent des brins parallèles ou antiparallèles par des liaisons H du squelette."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la structure tertiaire, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle rapproche des résidus éloignés dans la séquence.",
        "correct": true,
        "explanation": "Exact. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle est parfaitement rigide.",
        "correct": false,
        "explanation": "Incorrect. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle exige toujours plusieurs sous-unités.",
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
      }
    ],
    "explanation": "La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la structure tertiaire ?",
    "choices": [
      {
        "content": "Elle exige toujours plusieurs sous-unités.",
        "correct": false,
        "explanation": "Incorrect. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle peut évoluer lors de la fixation d’un ligand.",
        "correct": true,
        "explanation": "Exact. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle rapproche des résidus éloignés dans la séquence.",
        "correct": true,
        "explanation": "Exact. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle organise structures secondaires, boucles et domaines.",
        "correct": true,
        "explanation": "Exact. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      },
      {
        "content": "Elle décrit le repliement tridimensionnel global d’une chaîne.",
        "correct": true,
        "explanation": "Exact. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
      }
    ],
    "explanation": "La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Où se trouvent préférentiellement de nombreux résidus hydrophobes d’une protéine globulaire soluble ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "dans le cœur",
        "vers l’intérieur",
        "au cœur hydrophobe",
        "intérieur de la protéine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Les résidus hydrophobes sont souvent enrichis dans le cœur.",
        "correct": true,
        "explanation": "Exact. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Elle correspond uniquement à la séquence primaire.",
        "correct": false,
        "explanation": "Incorrect. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Les protéines membranaires obéissent à un environnement différent.",
        "correct": true,
        "explanation": "Exact. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Elle ne dépend d’aucune interaction entre chaînes latérales.",
        "correct": false,
        "explanation": "Incorrect. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Elle organise structures secondaires, boucles et domaines.",
        "correct": true,
        "explanation": "Exact. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Les protéines membranaires ont la même distribution de surface que les protéines solubles.",
        "correct": false,
        "explanation": "Incorrect. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Aucun résidu polaire ne peut être enfoui.",
        "correct": false,
        "explanation": "Incorrect. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Elle rapproche des résidus éloignés dans la séquence.",
        "correct": true,
        "explanation": "Exact. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "Cette répartition est une tendance et non une loi absolue.",
        "correct": true,
        "explanation": "Exact. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      },
      {
        "content": "La polarité des chaînes latérales n’influence pas le repliement.",
        "correct": false,
        "explanation": "Incorrect. Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire."
      }
    ],
    "explanation": "Les protéines globulaires solubles possèdent souvent un cœur hydrophobe et une surface plus polaire. La structure tertiaire est le repliement 3D global d’une chaîne et reste dynamique."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la structure quaternaire ?",
    "choices": [
      {
        "content": "Elle est obligatoire pour toute protéine.",
        "correct": false,
        "explanation": "Incorrect. La structure quaternaire associe plusieurs sous-unités qui peuvent être identiques ou différentes."
      },
      {
        "content": "Les interfaces sont souvent stabilisées par des interactions non covalentes.",
        "correct": true,
        "explanation": "Exact. La structure quaternaire associe plusieurs sous-unités qui peuvent être identiques ou différentes."
      },
      {
        "content": "Elle correspond à la seule séquence des résidus.",
        "correct": false,
        "explanation": "Incorrect. La structure quaternaire associe plusieurs sous-unités qui peuvent être identiques ou différentes."
      },
      {
        "content": "Les sous-unités peuvent être identiques ou différentes.",
        "correct": true,
        "explanation": "Exact. La structure quaternaire associe plusieurs sous-unités qui peuvent être identiques ou différentes."
      },
      {
        "content": "Elle correspond à une hélice alpha locale.",
        "correct": false,
        "explanation": "Incorrect. La structure quaternaire associe plusieurs sous-unités qui peuvent être identiques ou différentes."
      }
    ],
    "explanation": "La structure quaternaire associe plusieurs sous-unités qui peuvent être identiques ou différentes."
  },
  {
    "order": 120,
    "difficulty": "HARD",
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
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant l’hémoglobine adulte HbA, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "HbA est un monomère.",
        "correct": false,
        "explanation": "Incorrect. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      },
      {
        "content": "Elle ne peut fixer qu’un O2 au total.",
        "correct": false,
        "explanation": "Incorrect. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      },
      {
        "content": "HbA est un hétérotétramère alpha2bêta2.",
        "correct": true,
        "explanation": "Exact. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      },
      {
        "content": "La quaternarité permet une fixation coopérative de l’oxygène.",
        "correct": true,
        "explanation": "Exact. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      },
      {
        "content": "Elle ne contient aucun hème.",
        "correct": false,
        "explanation": "Incorrect. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      }
    ],
    "explanation": "HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant l’hémoglobine adulte HbA ?",
    "choices": [
      {
        "content": "La quaternarité permet une fixation coopérative de l’oxygène.",
        "correct": true,
        "explanation": "Exact. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      },
      {
        "content": "Elle ne peut fixer qu’un O2 au total.",
        "correct": false,
        "explanation": "Incorrect. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      },
      {
        "content": "HbA est un homotétramère alpha4.",
        "correct": false,
        "explanation": "Incorrect. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      },
      {
        "content": "Chaque sous-unité porte un groupe hème.",
        "correct": true,
        "explanation": "Exact. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      },
      {
        "content": "HbA est un hétérotétramère alpha2bêta2.",
        "correct": true,
        "explanation": "Exact. HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
      }
    ],
    "explanation": "HbA est un hétérotétramère alpha2bêta2 portant quatre groupes hème."
  }
];
