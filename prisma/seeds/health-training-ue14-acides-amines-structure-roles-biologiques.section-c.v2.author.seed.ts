import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Acides aminés : structure et rôles biologiques — Section C — Aromatiques, proline, polarité et chiralité */
export const UE14_BIOCH_CH9_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les acides aminés aromatiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La tyrosine ne possède aucun groupement hydroxyle.",
        "correct": false,
        "explanation": "Elle porte un phénol."
      },
      {
        "content": "La tyrosine porte un groupement phénol.",
        "correct": true,
        "explanation": "Elle est plus polaire que la phénylalanine."
      },
      {
        "content": "Les trois aromatiques contribuent exactement de façon égale à l'absorbance à 280 nm.",
        "correct": false,
        "explanation": "Trp et Tyr dominent, Phe est faible."
      },
      {
        "content": "La phénylalanine porte un noyau phényle.",
        "correct": true,
        "explanation": "Sa chaîne latérale est hydrophobe."
      },
      {
        "content": "La phénylalanine est un acide aminé soufré.",
        "correct": false,
        "explanation": "Elle ne contient pas de soufre."
      }
    ],
    "explanation": "Les trois aromatiques classiques sont Phe, Tyr et Trp ; Trp et Tyr dominent l'absorbance à 280 nm."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la proline, laquelle est correcte ?",
    "choices": [
      {
        "content": "La proline donne systématiquement le même violet intense que les amines primaires avec la ninhydrine.",
        "correct": false,
        "explanation": "Elle donne classiquement une coloration jaune."
      },
      {
        "content": "La proline possède une chaîne latérale totalement indépendante de l'azote alpha.",
        "correct": false,
        "explanation": "Elle se referme sur cet azote."
      },
      {
        "content": "Le cycle de la proline est un pyrrole aromatique.",
        "correct": false,
        "explanation": "Il s'agit d'une pyrrolidine saturée."
      },
      {
        "content": "Un résidu de proline rigidifie localement la chaîne polypeptidique.",
        "correct": true,
        "explanation": "Il peut provoquer un coude et perturber certaines hélices alpha."
      },
      {
        "content": "La proline est un acide aminé aromatique.",
        "correct": false,
        "explanation": "Son cycle n'est pas aromatique."
      }
    ],
    "explanation": "La proline contient un cycle pyrrolidine saturé et une amine secondaire ; elle ne doit pas être décrite comme un pyrrole aromatique."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "De quel acide aminé dérive la 4-hydroxyproline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "proline",
        "la proline"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La 4-hydroxyproline est un dérivé post-traductionnel de la proline, particulièrement important dans le collagène."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la polarité des chaînes latérales, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Val, Leu et Ile sont classées parmi les chaînes latérales hydrophobes.",
        "correct": true,
        "explanation": "Leur chaîne aliphatique est apolaire."
      },
      {
        "content": "Ser, Thr, Asn et Gln sont polaires non chargées aux pH physiologiques usuels.",
        "correct": true,
        "explanation": "Elles forment des liaisons hydrogène."
      },
      {
        "content": "Asp et Glu sont négativement chargées aux pH physiologiques usuels.",
        "correct": true,
        "explanation": "Leur carboxylate latéral est déprotoné."
      },
      {
        "content": "Asp et Glu sont hydrophobes non polaires.",
        "correct": false,
        "explanation": "Ils sont acides et chargés négativement."
      },
      {
        "content": "Histidine est toujours totalement positive à pH physiologique.",
        "correct": false,
        "explanation": "Son ionisation dépend sensiblement de l'environnement et du pH."
      }
    ],
    "explanation": "La polarité et la charge des chaînes latérales conditionnent solubilité, interactions et localisation dans les protéines."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la chiralité des acides aminés, laquelle est correcte ?",
    "choices": [
      {
        "content": "La glycine existe comme paire d'énantiomères D et L.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "D/L indique le signe du pouvoir rotatoire.",
        "correct": false,
        "explanation": "D/L est une relation de configuration, pas le signe +/−."
      },
      {
        "content": "Tous les L-acides aminés sont de configuration S sans exception.",
        "correct": false,
        "explanation": "L-cystéine est R."
      },
      {
        "content": "D/L et R/S sont deux systèmes de nomenclature distincts.",
        "correct": true,
        "explanation": "On ne peut pas écrire universellement L=S et D=R sans exception."
      },
      {
        "content": "Les protéines humaines utilisent normalement un mélange aléatoire de D et L pour chaque résidu.",
        "correct": false,
        "explanation": "Les résidus protéinogènes sont de série L."
      }
    ],
    "explanation": "La plupart des L-acides aminés sont S, mais L-cystéine est R ; glycine est achirale."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant la solubilité des acides aminés, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Une chaîne hydrophobe rend toujours la molécule totalement insoluble.",
        "correct": false,
        "explanation": "Les fonctions alpha ionisées restent hydrophiles."
      },
      {
        "content": "Tous les acides aminés ont exactement la même solubilité dans l'eau.",
        "correct": false,
        "explanation": "La chaîne latérale modifie fortement ce paramètre."
      },
      {
        "content": "Une charge ionique empêche toute interaction avec l'eau.",
        "correct": false,
        "explanation": "Elle favorise généralement l'hydratation."
      },
      {
        "content": "Les chaînes hydrophobes tendent à réduire la solubilité aqueuse.",
        "correct": true,
        "explanation": "Cette tendance est modulée par les fonctions alpha ionisées."
      },
      {
        "content": "La solubilité dépend de la chaîne latérale et de l'état d'ionisation.",
        "correct": true,
        "explanation": "Le pH influence donc la solubilité."
      }
    ],
    "explanation": "La solubilité des acides aminés dépend de la polarité de R et de l'état d'ionisation imposé par le pH.",
    "requiredSelectionCount": 2
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type de cycle saturé caractérise la proline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "pyrrolidine",
        "cycle pyrrolidine",
        "noyau pyrrolidine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La proline contient un cycle pyrrolidine saturé ; le terme pyrrole désignerait un hétérocycle aromatique différent."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type de cycle caractérise la proline : pyrrole ou pyrrolidine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "pyrrolidine",
        "cycle pyrrolidine",
        "noyau pyrrolidine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La proline contient un cycle pyrrolidine saturé et une amine secondaire ; elle ne doit pas être décrite comme un pyrrole aromatique."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la 4-hydroxyproline ?",
    "choices": [
      {
        "content": "Sa formation dépend de la vitamine C comme cofacteur de prolyl-hydroxylases.",
        "correct": true,
        "explanation": "Une carence sévère en vitamine C perturbe le collagène."
      },
      {
        "content": "Elle est absente du collagène.",
        "correct": false,
        "explanation": "Elle y est caractéristique."
      },
      {
        "content": "Elle est codée directement par un codon spécifique parmi les vingt standards.",
        "correct": false,
        "explanation": "Elle est formée post-traductionnellement."
      },
      {
        "content": "Sa synthèse est indépendante de toute hydroxylase.",
        "correct": false,
        "explanation": "Une prolyl-hydroxylase est nécessaire."
      },
      {
        "content": "Elle est un dérivé du tryptophane.",
        "correct": false,
        "explanation": "Elle dérive de la proline."
      }
    ],
    "explanation": "La 4-hydroxyproline est un dérivé post-traductionnel de la proline, particulièrement important dans le collagène."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une application de ce principe, concernant la polarité des chaînes latérales, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ser et Thr sont chargées positivement à pH physiologique.",
        "correct": false,
        "explanation": "Leurs OH sont neutres."
      },
      {
        "content": "Ser, Thr, Asn et Gln sont polaires non chargées aux pH physiologiques usuels.",
        "correct": true,
        "explanation": "Elles forment des liaisons hydrogène."
      },
      {
        "content": "Histidine est toujours totalement positive à pH physiologique.",
        "correct": false,
        "explanation": "Son ionisation dépend sensiblement de l'environnement et du pH."
      },
      {
        "content": "Val, Leu et Ile sont fortement hydrophiles.",
        "correct": false,
        "explanation": "Ils sont hydrophobes."
      },
      {
        "content": "Val, Leu et Ile sont classées parmi les chaînes latérales hydrophobes.",
        "correct": true,
        "explanation": "Leur chaîne aliphatique est apolaire."
      }
    ],
    "explanation": "La polarité et la charge des chaînes latérales conditionnent solubilité, interactions et localisation dans les protéines."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les acides aminés aromatiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le tryptophane porte un noyau imidazole.",
        "correct": false,
        "explanation": "L'histidine porte l'imidazole."
      },
      {
        "content": "La tyrosine ne possède aucun groupement hydroxyle.",
        "correct": false,
        "explanation": "Elle porte un phénol."
      },
      {
        "content": "Le tryptophane porte un noyau indole.",
        "correct": true,
        "explanation": "C'est le plus volumineux des trois aromatiques classiques."
      },
      {
        "content": "Les trois aromatiques contribuent exactement de façon égale à l'absorbance à 280 nm.",
        "correct": false,
        "explanation": "Trp et Tyr dominent, Phe est faible."
      },
      {
        "content": "La tyrosine porte un groupement phénol.",
        "correct": true,
        "explanation": "Elle est plus polaire que la phénylalanine."
      }
    ],
    "explanation": "Les trois aromatiques classiques sont Phe, Tyr et Trp ; Trp et Tyr dominent l'absorbance à 280 nm."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de cycle caractérise la proline : pyrrole ou pyrrolidine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "pyrrolidine",
        "cycle pyrrolidine",
        "noyau pyrrolidine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La proline contient un cycle pyrrolidine saturé et une amine secondaire ; elle ne doit pas être décrite comme un pyrrole aromatique."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la 4-hydroxyproline ?",
    "choices": [
      {
        "content": "Sa synthèse est indépendante de toute hydroxylase.",
        "correct": false,
        "explanation": "Une prolyl-hydroxylase est nécessaire."
      },
      {
        "content": "Elle est abondante dans le collagène.",
        "correct": true,
        "explanation": "Elle contribue à la stabilité de la triple hélice."
      },
      {
        "content": "Elle est un dérivé du tryptophane.",
        "correct": false,
        "explanation": "Elle dérive de la proline."
      },
      {
        "content": "Elle est absente du collagène.",
        "correct": false,
        "explanation": "Elle y est caractéristique."
      },
      {
        "content": "Elle est codée directement par un codon spécifique parmi les vingt standards.",
        "correct": false,
        "explanation": "Elle est formée post-traductionnellement."
      }
    ],
    "explanation": "La 4-hydroxyproline est un dérivé post-traductionnel de la proline, particulièrement important dans le collagène."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la polarité des chaînes latérales, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Val, Leu et Ile sont classées parmi les chaînes latérales hydrophobes.",
        "correct": true,
        "explanation": "Leur chaîne aliphatique est apolaire."
      },
      {
        "content": "Asp et Glu sont hydrophobes non polaires.",
        "correct": false,
        "explanation": "Ils sont acides et chargés négativement."
      },
      {
        "content": "Val, Leu et Ile sont fortement hydrophiles.",
        "correct": false,
        "explanation": "Ils sont hydrophobes."
      },
      {
        "content": "Asp et Glu sont négativement chargées aux pH physiologiques usuels.",
        "correct": true,
        "explanation": "Leur carboxylate latéral est déprotoné."
      },
      {
        "content": "Ser, Thr, Asn et Gln sont polaires non chargées aux pH physiologiques usuels.",
        "correct": true,
        "explanation": "Elles forment des liaisons hydrogène."
      }
    ],
    "explanation": "La polarité et la charge des chaînes latérales conditionnent solubilité, interactions et localisation dans les protéines."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la chiralité des acides aminés, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Les acides aminés des protéines humaines sont de série L.",
        "correct": true,
        "explanation": "La série D/L est une nomenclature relative."
      },
      {
        "content": "D/L et R/S sont deux systèmes de nomenclature distincts.",
        "correct": true,
        "explanation": "On ne peut pas écrire universellement L=S et D=R sans exception."
      },
      {
        "content": "Tous les L-acides aminés sont de configuration S sans exception.",
        "correct": false,
        "explanation": "L-cystéine est R."
      },
      {
        "content": "La glycine existe comme paire d'énantiomères D et L.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "D/L indique le signe du pouvoir rotatoire.",
        "correct": false,
        "explanation": "D/L est une relation de configuration, pas le signe +/−."
      }
    ],
    "explanation": "La plupart des L-acides aminés sont S, mais L-cystéine est R ; glycine est achirale.",
    "requiredSelectionCount": 2
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la solubilité des acides aminés ?",
    "choices": [
      {
        "content": "La solubilité dépend de la chaîne latérale et de l'état d'ionisation.",
        "correct": true,
        "explanation": "Le pH influence donc la solubilité."
      },
      {
        "content": "La solubilité peut être minimale près du point isoélectrique pour certains acides aminés ou protéines.",
        "correct": true,
        "explanation": "La charge nette y est minimale."
      },
      {
        "content": "Les formes ioniques interagissent fortement avec l'eau.",
        "correct": true,
        "explanation": "Les fonctions chargées favorisent l'hydratation."
      },
      {
        "content": "Une charge ionique empêche toute interaction avec l'eau.",
        "correct": false,
        "explanation": "Elle favorise généralement l'hydratation."
      },
      {
        "content": "Les chaînes hydrophobes tendent à réduire la solubilité aqueuse.",
        "correct": true,
        "explanation": "Cette tendance est modulée par les fonctions alpha ionisées."
      }
    ],
    "explanation": "La solubilité des acides aminés dépend de la polarité de R et de l'état d'ionisation imposé par le pH."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide aminé aromatique porte un noyau indole ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "tryptophane",
        "Trp",
        "le tryptophane"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les trois aromatiques classiques sont Phe, Tyr et Trp ; Trp et Tyr dominent l'absorbance à 280 nm."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la proline, laquelle est correcte ?",
    "choices": [
      {
        "content": "La proline donne systématiquement le même violet intense que les amines primaires avec la ninhydrine.",
        "correct": false,
        "explanation": "Elle donne classiquement une coloration jaune."
      },
      {
        "content": "Le cycle de la proline est un pyrrole aromatique.",
        "correct": false,
        "explanation": "Il s'agit d'une pyrrolidine saturée."
      },
      {
        "content": "La proline possède une chaîne latérale totalement indépendante de l'azote alpha.",
        "correct": false,
        "explanation": "Elle se referme sur cet azote."
      },
      {
        "content": "La proline est un acide aminé aromatique.",
        "correct": false,
        "explanation": "Son cycle n'est pas aromatique."
      },
      {
        "content": "La proline possède une amine secondaire dans sa forme libre.",
        "correct": true,
        "explanation": "L'azote est lié au Cα et à la chaîne latérale."
      }
    ],
    "explanation": "La proline contient un cycle pyrrolidine saturé et une amine secondaire ; elle ne doit pas être décrite comme un pyrrole aromatique."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la 4-hydroxyproline ?",
    "choices": [
      {
        "content": "Elle est absente du collagène.",
        "correct": false,
        "explanation": "Elle y est caractéristique."
      },
      {
        "content": "Sa synthèse est indépendante de toute hydroxylase.",
        "correct": false,
        "explanation": "Une prolyl-hydroxylase est nécessaire."
      },
      {
        "content": "Elle est un dérivé du tryptophane.",
        "correct": false,
        "explanation": "Elle dérive de la proline."
      },
      {
        "content": "Elle dérive de la proline par hydroxylation post-traductionnelle.",
        "correct": true,
        "explanation": "Cette modification survient sur certains résidus de protéines."
      },
      {
        "content": "Sa formation dépend de la vitamine C comme cofacteur de prolyl-hydroxylases.",
        "correct": true,
        "explanation": "Une carence sévère en vitamine C perturbe le collagène."
      }
    ],
    "explanation": "La 4-hydroxyproline est un dérivé post-traductionnel de la proline, particulièrement important dans le collagène."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La tyrosine porte un groupement phénol.",
        "correct": true,
        "explanation": "Elle est plus polaire que la phénylalanine."
      },
      {
        "content": "Val, Leu et Ile sont fortement hydrophiles.",
        "correct": false,
        "explanation": "Ils sont hydrophobes."
      },
      {
        "content": "Asp et Glu sont hydrophobes non polaires.",
        "correct": false,
        "explanation": "Ils sont acides et chargés négativement."
      },
      {
        "content": "Tyr et Trp contribuent fortement à l'absorbance des protéines autour de 280 nm.",
        "correct": true,
        "explanation": "Phe contribue beaucoup plus faiblement."
      },
      {
        "content": "Lys et Arg sont positivement chargées aux pH physiologiques usuels.",
        "correct": true,
        "explanation": "His a un comportement plus intermédiaire du fait de son pKa."
      },
      {
        "content": "Le tryptophane porte un noyau indole.",
        "correct": true,
        "explanation": "C'est le plus volumineux des trois aromatiques classiques."
      },
      {
        "content": "Les trois aromatiques contribuent exactement de façon égale à l'absorbance à 280 nm.",
        "correct": false,
        "explanation": "Trp et Tyr dominent, Phe est faible."
      },
      {
        "content": "La phénylalanine est un acide aminé soufré.",
        "correct": false,
        "explanation": "Elle ne contient pas de soufre."
      },
      {
        "content": "Val, Leu et Ile sont classées parmi les chaînes latérales hydrophobes.",
        "correct": true,
        "explanation": "Leur chaîne aliphatique est apolaire."
      },
      {
        "content": "La tyrosine ne possède aucun groupement hydroxyle.",
        "correct": false,
        "explanation": "Elle porte un phénol."
      }
    ],
    "explanation": "La polarité et la charge des chaînes latérales conditionnent solubilité, interactions et localisation dans les protéines. Les trois aromatiques classiques sont Phe, Tyr et Trp ; Trp et Tyr dominent l'absorbance à 280 nm."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel acide aminé standard de série L possède une configuration R au carbone alpha ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cystéine",
        "L-cystéine",
        "cysteine",
        "L-cysteine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L-cystéine est R en nomenclature CIP en raison de la priorité élevée du soufre ; la plupart des autres L-acides aminés sont S."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel paramètre acido-basique modifie fortement l'état d'ionisation et donc la solubilité d'un acide aminé ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "pH",
        "le pH"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La solubilité des acides aminés dépend de la polarité de R et de l'état d'ionisation imposé par le pH."
  }
];
