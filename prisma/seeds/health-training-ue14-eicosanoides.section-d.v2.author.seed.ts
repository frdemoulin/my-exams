import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Les eicosanoïdes — Section D — Leucotriènes et lipoxines */
export const UE14_BIOCH_CH5_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 79,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les leucotriènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils sont tous des protéines membranaires.",
        "correct": false,
        "explanation": "Ce sont des médiateurs lipidiques."
      },
      {
        "content": "Ils sont formés uniquement à partir de glucose.",
        "correct": false,
        "explanation": "Ils dérivent d'acides gras polyinsaturés."
      },
      {
        "content": "Ils sont produits notamment par des leucocytes, mastocytes et macrophages.",
        "correct": true,
        "explanation": "Leur rôle est important dans l'inflammation."
      },
      {
        "content": "Ils dérivent de la voie 5-lipoxygénase à partir de l'acide arachidonique.",
        "correct": true,
        "explanation": "La 5-LOX mène à LTA4."
      },
      {
        "content": "Les leucotriènes sont des prostanoïdes cycliques produits par COX.",
        "correct": false,
        "explanation": "Ils relèvent de la voie 5-LOX et sont structurellement distincts."
      }
    ],
    "explanation": "Les leucotriènes dérivent principalement de la voie 5-LOX et participent notamment aux réponses inflammatoires."
  },
  {
    "order": 80,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de LTA4, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "LTA4 est un prostanoïde produit par la thromboxane synthase.",
        "correct": false,
        "explanation": "Il appartient à la voie leucotriène."
      },
      {
        "content": "LTA4 est un produit final très stable stocké pendant des jours.",
        "correct": false,
        "explanation": "C'est un intermédiaire réactif."
      },
      {
        "content": "LTA4 est un époxyde intermédiaire de la voie des leucotriènes.",
        "correct": true,
        "explanation": "Il possède un époxyde entre C5 et C6."
      },
      {
        "content": "Il ne peut donner aucun autre leucotriène.",
        "correct": false,
        "explanation": "Il est un précurseur central."
      },
      {
        "content": "Il est un triglycéride à trois acides gras.",
        "correct": false,
        "explanation": "Structure sans rapport."
      }
    ],
    "explanation": "LTA4 est l'intermédiaire époxyde central de la voie 5-LOX, orientable vers LTB4 ou LTC4."
  },
  {
    "order": 81,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel leucotriène est particulièrement connu pour son chimiotactisme vis-à-vis des neutrophiles ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "LTB4",
        "LTB₄",
        "leucotriène B4",
        "leucotriene B4"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "LTB4 est une branche de LTA4 fortement impliquée dans le recrutement et l'activation des leucocytes."
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les cystéinyl-leucotriènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "LTC4, LTD4 et LTE4 sont des prostacyclines.",
        "correct": false,
        "explanation": "Ils appartiennent aux leucotriènes."
      },
      {
        "content": "LTC4, LTD4 et LTE4 constituent les cystéinyl-leucotriènes majeurs.",
        "correct": true,
        "explanation": "Ils portent des résidus dérivés du glutathion."
      },
      {
        "content": "LTC4 est formé par conjugaison de LTA4 au glutathion.",
        "correct": true,
        "explanation": "La LTC4 synthase réalise cette étape."
      },
      {
        "content": "Le glutathion n'intervient jamais dans leur biosynthèse.",
        "correct": false,
        "explanation": "Il est conjugué à LTA4 pour former LTC4."
      },
      {
        "content": "Ils sont de puissants bronchoconstricteurs.",
        "correct": true,
        "explanation": "Ils jouent un rôle important dans l'asthme."
      }
    ],
    "explanation": "LTC4 initie la branche des cystéinyl-leucotriènes ; LTD4 et LTE4 résultent de clivages successifs."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos du glutathion dans la voie des leucotriènes, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Il n'entre jamais dans la structure de LTC4.",
        "correct": false,
        "explanation": "Il y est conjugué."
      },
      {
        "content": "La perte successive de résidus transforme LTC4 en LTD4 puis LTE4.",
        "correct": true,
        "explanation": "La portion peptidique est progressivement raccourcie."
      },
      {
        "content": "Il transforme directement PGI2 en TXA2.",
        "correct": false,
        "explanation": "Il intervient dans une autre voie."
      },
      {
        "content": "LTD4 contient davantage de résidus peptidiques que LTC4.",
        "correct": false,
        "explanation": "LTD4 résulte d'un clivage de LTC4."
      },
      {
        "content": "Le glutathion est un monosaccharide.",
        "correct": false,
        "explanation": "C'est un tripeptide."
      }
    ],
    "explanation": "Le glutathion est un tripeptide conjugué à LTA4 pour former LTC4, puis progressivement clivé vers LTD4 et LTE4."
  },
  {
    "order": 84,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur la bronchoconstriction liée aux leucotriènes, sélectionnez exactement les deux exactes.",
    "choices": [
      {
        "content": "LTB4 et LTC4 sont strictement identiques.",
        "correct": false,
        "explanation": "Ils diffèrent par structure et fonction."
      },
      {
        "content": "Des antagonistes de leurs récepteurs peuvent être utilisés dans certaines formes d'asthme.",
        "correct": true,
        "explanation": "Le montélukast cible notamment le récepteur CysLT1."
      },
      {
        "content": "Les cystéinyl-leucotriènes favorisent la bronchoconstriction.",
        "correct": true,
        "explanation": "Ils contractent le muscle lisse bronchique."
      },
      {
        "content": "LTC4 et LTD4 sont de puissants bronchodilatateurs.",
        "correct": false,
        "explanation": "Ils sont bronchoconstricteurs."
      },
      {
        "content": "Les leucotriènes n'ont aucun rôle dans l'asthme.",
        "correct": false,
        "explanation": "Ils y participent."
      }
    ],
    "explanation": "Les cystéinyl-leucotriènes sont des bronchoconstricteurs importants et constituent une cible thérapeutique dans l'asthme.",
    "requiredSelectionCount": 2
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les lipoxines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les lipoxines sont des médiateurs issus de voies lipoxygénases.",
        "correct": true,
        "explanation": "Leur biosynthèse peut impliquer plusieurs cellules ou enzymes."
      },
      {
        "content": "Elles participent à la résolution de l'inflammation.",
        "correct": true,
        "explanation": "Elles limitent certains signaux pro-inflammatoires et favorisent le retour à l'homéostasie."
      },
      {
        "content": "Les lipoxines sont produites exclusivement par COX comme TXA2.",
        "correct": false,
        "explanation": "Elles relèvent principalement des voies lipoxygénases."
      },
      {
        "content": "LXA4 est une lipoxine majeure.",
        "correct": true,
        "explanation": "Elle est distincte de LTA4 malgré la proximité des abréviations."
      },
      {
        "content": "Leur rôle fonctionnel diffère de celui des cystéinyl-leucotriènes bronchoconstricteurs.",
        "correct": true,
        "explanation": "Elles sont plutôt associées à la résolution."
      }
    ],
    "explanation": "Les lipoxines sont des médiateurs lipidiques pro-résolutifs issus de réactions lipoxygénases."
  },
  {
    "order": 86,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel intermédiaire commun précède les branches LTB4 et LTC4 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "LTA4",
        "LTA₄",
        "leucotriène A4",
        "leucotriene A4"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "LTA4 se situe au carrefour entre LTB4 chimiotactique et les cystéinyl-leucotriènes bronchoconstricteurs."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur les leucotriènes, laquelle est exacte ?",
    "choices": [
      {
        "content": "Les leucotriènes sont des prostanoïdes cycliques produits par COX.",
        "correct": false,
        "explanation": "Ils relèvent de la voie 5-LOX et sont structurellement distincts."
      },
      {
        "content": "Ils sont tous des protéines membranaires.",
        "correct": false,
        "explanation": "Ce sont des médiateurs lipidiques."
      },
      {
        "content": "Ils n'ont aucun lien avec l'inflammation.",
        "correct": false,
        "explanation": "Ils y jouent des rôles importants."
      },
      {
        "content": "Ils peuvent agir sur muscles lisses et cellules immunitaires.",
        "correct": true,
        "explanation": "Les effets diffèrent selon le leucotriène."
      },
      {
        "content": "Ils sont formés uniquement à partir de glucose.",
        "correct": false,
        "explanation": "Ils dérivent d'acides gras polyinsaturés."
      }
    ],
    "explanation": "Les leucotriènes dérivent principalement de la voie 5-LOX et participent notamment aux réponses inflammatoires."
  },
  {
    "order": 88,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant LTA4, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il ne peut donner aucun autre leucotriène.",
        "correct": false,
        "explanation": "Il est un précurseur central."
      },
      {
        "content": "LTA4 est un époxyde intermédiaire de la voie des leucotriènes.",
        "correct": true,
        "explanation": "Il possède un époxyde entre C5 et C6."
      },
      {
        "content": "Il peut être transformé en LTB4.",
        "correct": true,
        "explanation": "La LTA4 hydrolase catalyse cette branche."
      },
      {
        "content": "LTA4 est un prostanoïde produit par la thromboxane synthase.",
        "correct": false,
        "explanation": "Il appartient à la voie leucotriène."
      },
      {
        "content": "LTA4 est un produit final très stable stocké pendant des jours.",
        "correct": false,
        "explanation": "C'est un intermédiaire réactif."
      }
    ],
    "explanation": "LTA4 est l'intermédiaire époxyde central de la voie 5-LOX, orientable vers LTB4 ou LTC4."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel leucotriène est particulièrement chimiotactique pour les neutrophiles ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "LTB4",
        "LTB₄",
        "leucotriène B4",
        "leucotriene B4"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "LTB4 est un puissant facteur chimiotactique et activateur de leucocytes, notamment les neutrophiles."
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel leucotriène époxyde constitue un carrefour vers LTB4 et LTC4 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "LTA4",
        "LTA₄",
        "leucotriène A4",
        "leucotriene A4"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "LTA4 est l'intermédiaire époxyde central de la voie 5-LOX, orientable vers LTB4 ou LTC4."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur LTB4, laquelle est exacte ?",
    "choices": [
      {
        "content": "LTB4 est principalement un glucide de réserve.",
        "correct": false,
        "explanation": "C'est un médiateur lipidique."
      },
      {
        "content": "LTB4 est formé par conjugaison directe au glutathion.",
        "correct": false,
        "explanation": "Cela mène à LTC4."
      },
      {
        "content": "Il active plusieurs fonctions leucocytaires.",
        "correct": true,
        "explanation": "Il amplifie certaines réponses inflammatoires."
      },
      {
        "content": "LTB4 bloque systématiquement le recrutement des neutrophiles.",
        "correct": false,
        "explanation": "Il est chimiotactique."
      },
      {
        "content": "LTB4 est la prostacycline endothéliale antiagrégante.",
        "correct": false,
        "explanation": "Cela décrit PGI2."
      }
    ],
    "explanation": "LTB4 est une branche de LTA4 fortement impliquée dans le recrutement et l'activation des leucocytes."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les cystéinyl-leucotriènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils sont tous anti-bronchoconstricteurs.",
        "correct": false,
        "explanation": "Ils favorisent la bronchoconstriction."
      },
      {
        "content": "LTD4 puis LTE4 résultent de clivages successifs de la portion peptidique.",
        "correct": true,
        "explanation": "Des acides aminés sont retirés progressivement."
      },
      {
        "content": "LTC4 est formé par conjugaison de LTA4 au glutathion.",
        "correct": true,
        "explanation": "La LTC4 synthase réalise cette étape."
      },
      {
        "content": "Ils sont de puissants bronchoconstricteurs.",
        "correct": true,
        "explanation": "Ils jouent un rôle important dans l'asthme."
      },
      {
        "content": "Le glutathion n'intervient jamais dans leur biosynthèse.",
        "correct": false,
        "explanation": "Il est conjugué à LTA4 pour former LTC4."
      }
    ],
    "explanation": "LTC4 initie la branche des cystéinyl-leucotriènes ; LTD4 et LTE4 résultent de clivages successifs."
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel composé est formé par conjugaison de LTA4 au glutathion ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "LTC4",
        "LTC₄",
        "leucotriène C4",
        "leucotriene C4"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La LTC4 synthase conjugue le glutathion à LTA4 pour former LTC4, précurseur de LTD4 puis LTE4."
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les propositions suivantes sur la bronchoconstriction liée aux leucotriènes, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Les cystéinyl-leucotriènes favorisent la bronchoconstriction.",
        "correct": true,
        "explanation": "Ils contractent le muscle lisse bronchique."
      },
      {
        "content": "Des antagonistes de leurs récepteurs peuvent être utilisés dans certaines formes d'asthme.",
        "correct": true,
        "explanation": "Le montélukast cible notamment le récepteur CysLT1."
      },
      {
        "content": "Ils participent à la physiopathologie de l'asthme.",
        "correct": true,
        "explanation": "Ils augmentent aussi la perméabilité et les sécrétions selon le contexte."
      },
      {
        "content": "Leur rôle respiratoire est distinct de celui de LTB4, surtout chimiotactique.",
        "correct": true,
        "explanation": "Les branches ont des fonctions différentes."
      },
      {
        "content": "Les leucotriènes n'ont aucun rôle dans l'asthme.",
        "correct": false,
        "explanation": "Ils y participent."
      }
    ],
    "explanation": "Les cystéinyl-leucotriènes sont des bronchoconstricteurs importants et constituent une cible thérapeutique dans l'asthme."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel processus inflammatoire les lipoxines favorisent-elles particulièrement ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "résolution de l'inflammation",
        "resolution de l'inflammation",
        "résolution",
        "resolution"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les lipoxines sont des médiateurs lipidiques pro-résolutifs issus de réactions lipoxygénases."
  },
  {
    "order": 96,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de la comparaison LTB4 et cystéinyl-leucotriènes, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "LTB4 est le principal cystéinyl-leucotriène.",
        "correct": false,
        "explanation": "Il n'appartient pas à cette sous-famille."
      },
      {
        "content": "LTC4 est produit directement par PGI2 synthase.",
        "correct": false,
        "explanation": "Il dérive de LTA4 via LTC4 synthase."
      },
      {
        "content": "LTB4 et LTC4 ont exactement la même structure.",
        "correct": false,
        "explanation": "LTC4 comporte une conjugaison au glutathion."
      },
      {
        "content": "Aucun leucotriène n'agit sur les leucocytes.",
        "correct": false,
        "explanation": "LTB4 est un puissant médiateur leucocytaire."
      },
      {
        "content": "LTB4 est particulièrement chimiotactique pour les neutrophiles.",
        "correct": true,
        "explanation": "Il recrute et active des cellules inflammatoires."
      }
    ],
    "explanation": "LTA4 se situe au carrefour entre LTB4 chimiotactique et les cystéinyl-leucotriènes bronchoconstricteurs."
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel antagoniste des récepteurs aux cystéinyl-leucotriènes est couramment utilisé dans certaines prises en charge de l'asthme ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "montélukast",
        "montelukast",
        "le montélukast",
        "le montelukast"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le montélukast bloque notamment le récepteur CysLT1 et s'oppose aux effets de LTD4 et médiateurs voisins."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le rôle du glutathion dans cette voie est distinct de son rôle antioxydant.",
        "correct": true,
        "explanation": "La même molécule peut participer à plusieurs fonctions."
      },
      {
        "content": "Il est un triglycéride à trois acides gras.",
        "correct": false,
        "explanation": "Structure sans rapport."
      },
      {
        "content": "Il n'entre jamais dans la structure de LTC4.",
        "correct": false,
        "explanation": "Il y est conjugué."
      },
      {
        "content": "La perte successive de résidus transforme LTC4 en LTD4 puis LTE4.",
        "correct": true,
        "explanation": "La portion peptidique est progressivement raccourcie."
      },
      {
        "content": "Il est formé en aval de la 5-lipoxygénase.",
        "correct": true,
        "explanation": "Il constitue un carrefour biosynthétique."
      },
      {
        "content": "Il peut aussi être conjugué au glutathion pour former LTC4.",
        "correct": true,
        "explanation": "La LTC4 synthase initie la branche des cystéinyl-leucotriènes."
      },
      {
        "content": "Il transforme directement PGI2 en TXA2.",
        "correct": false,
        "explanation": "Il intervient dans une autre voie."
      },
      {
        "content": "LTA4 est un prostanoïde produit par la thromboxane synthase.",
        "correct": false,
        "explanation": "Il appartient à la voie leucotriène."
      },
      {
        "content": "Il ne peut donner aucun autre leucotriène.",
        "correct": false,
        "explanation": "Il est un précurseur central."
      },
      {
        "content": "Il est conjugué à LTA4 pour former LTC4.",
        "correct": true,
        "explanation": "Cette étape introduit la composante cystéinylée."
      }
    ],
    "explanation": "LTA4 est l'intermédiaire époxyde central de la voie 5-LOX, orientable vers LTB4 ou LTC4. Le glutathion est un tripeptide conjugué à LTA4 pour former LTC4, puis progressivement clivé vers LTD4 et LTE4."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de LTB4, quelles affirmations sont correctes ?",
    "choices": [
      {
        "content": "Il active plusieurs fonctions leucocytaires.",
        "correct": true,
        "explanation": "Il amplifie certaines réponses inflammatoires."
      },
      {
        "content": "LTB4 bloque systématiquement le recrutement des neutrophiles.",
        "correct": false,
        "explanation": "Il est chimiotactique."
      },
      {
        "content": "LTB4 est formé par conjugaison directe au glutathion.",
        "correct": false,
        "explanation": "Cela mène à LTC4."
      },
      {
        "content": "Il n'est pas un cystéinyl-leucotriène.",
        "correct": true,
        "explanation": "Il ne porte pas la chaîne dérivée du glutathion de LTC4/D4/E4."
      },
      {
        "content": "LTB4 est un puissant facteur chimiotactique pour les neutrophiles.",
        "correct": true,
        "explanation": "Il participe au recrutement inflammatoire."
      }
    ],
    "explanation": "LTB4 est une branche de LTA4 fortement impliquée dans le recrutement et l'activation des leucocytes."
  },
  {
    "order": 100,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel leucotriène est formé directement par conjugaison de LTA4 au glutathion ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "LTC4",
        "LTC₄",
        "leucotriène C4",
        "leucotriene C4"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "LTC4 initie la branche des cystéinyl-leucotriènes ; LTD4 et LTE4 résultent de clivages successifs."
  }
];
