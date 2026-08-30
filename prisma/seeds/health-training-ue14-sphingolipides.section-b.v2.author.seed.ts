import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Sphingolipides — Section B — Sphingomyéline et phosphosphingolipides */
export const UE14_BIOCH_CH7_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle est un constituant membranaire important.",
        "correct": true,
        "explanation": "Elle est particulièrement abondante dans la myéline."
      },
      {
        "content": "La tête phosphatée est reliée au C1 par une liaison phosphodiester.",
        "correct": true,
        "explanation": "Le céramide fournit le squelette hydrophobe."
      },
      {
        "content": "Elle est un glycérophospholipide à glycérol.",
        "correct": false,
        "explanation": "Son squelette est un céramide."
      },
      {
        "content": "Elle possède obligatoirement plusieurs oses en C1.",
        "correct": false,
        "explanation": "Cela décrit des glycosphingolipides."
      },
      {
        "content": "Elle ne contient jamais de phosphate.",
        "correct": false,
        "explanation": "Le phosphate est caractéristique."
      }
    ],
    "explanation": "La sphingomyéline est un phosphosphingolipide à noyau céramide et tête phosphocholine."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la sphingomyélinase, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle ajoute un acide gras en C2.",
        "correct": false,
        "explanation": "Elle hydrolyse une tête de sphingomyéline."
      },
      {
        "content": "Elle produit du glycogène.",
        "correct": false,
        "explanation": "Elle agit sur un sphingolipide."
      },
      {
        "content": "Elle est une glycosidase digestive du lactose.",
        "correct": false,
        "explanation": "Aucun rapport."
      },
      {
        "content": "Elle hydrolyse directement le céramide en sphingosine.",
        "correct": false,
        "explanation": "Cela décrit la céramidase."
      },
      {
        "content": "Elle est distincte de la céramidase.",
        "correct": true,
        "explanation": "La céramidase agit en aval sur le céramide."
      }
    ],
    "explanation": "La sphingomyélinase transforme la sphingomyéline en céramide."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle structure nerveuse est particulièrement riche en sphingomyéline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "gaine de myéline",
        "myéline",
        "la myéline"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La sphingomyéline est un sphingolipide membranaire important, notamment dans la gaine de myéline."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la sclérose en plaques comme contexte de démyélinisation, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ce contexte illustre l'importance structurale des sphingolipides nerveux.",
        "correct": true,
        "explanation": "Il ne s'agit pas d'une sphingolipidose lysosomale classique."
      },
      {
        "content": "La perte de myéline perturbe la conduction de l'influx nerveux.",
        "correct": true,
        "explanation": "Les voies neurologiques deviennent moins efficaces."
      },
      {
        "content": "La sphingomyéline est un constituant de la myéline mais la maladie ne se résume pas à un déficit enzymatique de sphingomyéline.",
        "correct": true,
        "explanation": "La physiopathologie est immuno-inflammatoire complexe."
      },
      {
        "content": "Elle est une maladie de surcharge lysosomale en glucosylcéramide.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "Elle n'affecte jamais la myéline.",
        "correct": false,
        "explanation": "La démyélinisation est centrale."
      }
    ],
    "explanation": "La sclérose en plaques sert de contexte clinique de démyélinisation, distinct des sphingolipidoses enzymatiques."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la tête phosphoéthanolamine de sphingolipides, laquelle est correcte ?",
    "choices": [
      {
        "content": "L'éthanolamine est un monosaccharide.",
        "correct": false,
        "explanation": "C'est un aminoalcool."
      },
      {
        "content": "Une phosphoéthanolamine peut constituer une tête phosphatée de certains sphingolipides.",
        "correct": true,
        "explanation": "Elle est moins classique que la phosphocholine dans la sphingomyéline mammalienne."
      },
      {
        "content": "Le céramide disparaît quand une tête phosphatée est ajoutée.",
        "correct": false,
        "explanation": "Il reste le noyau lipidique."
      },
      {
        "content": "Les glycosphingolipides contiennent nécessairement un phosphate.",
        "correct": false,
        "explanation": "Ils sont définis par une tête glucidique."
      },
      {
        "content": "Une phosphoéthanolamine implique obligatoirement un squelette glycérol.",
        "correct": false,
        "explanation": "Des sphingolipides peuvent la porter."
      }
    ],
    "explanation": "Les phosphosphingolipides portent une tête phosphatée sur un noyau céramide ; la phosphocholine domine classiquement chez les mammifères."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle enzyme hydrolyse la sphingomyéline pour libérer un céramide ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sphingomyélinase",
        "sphingomyelinase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La sphingomyélinase hydrolyse la tête phosphatée et produit du céramide."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la sphingomyélinase, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son activité relie structure membranaire et signalisation par le céramide.",
        "correct": true,
        "explanation": "Le produit céramide est bioactif."
      },
      {
        "content": "Elle agit sur la tête phosphatée du sphingolipide.",
        "correct": true,
        "explanation": "La liaison phosphodiester est clivée."
      },
      {
        "content": "Elle hydrolyse la sphingomyéline.",
        "correct": true,
        "explanation": "Cette réaction forme notamment du céramide."
      },
      {
        "content": "Elle produit du glycogène.",
        "correct": false,
        "explanation": "Elle agit sur un sphingolipide."
      },
      {
        "content": "Elle est distincte de la céramidase.",
        "correct": true,
        "explanation": "La céramidase agit en aval sur le céramide."
      }
    ],
    "explanation": "La sphingomyélinase transforme la sphingomyéline en céramide."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans une situation d'application, quelle structure nerveuse est particulièrement riche en sphingomyéline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "gaine de myéline",
        "myéline",
        "la myéline"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La sphingomyéline est un sphingolipide membranaire important, notamment dans la gaine de myéline."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la sclérose en plaques comme contexte de démyélinisation ?",
    "choices": [
      {
        "content": "Elle est due à un déficit en alpha-galactosidase A.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      },
      {
        "content": "La sphingomyéline est un constituant de la myéline mais la maladie ne se résume pas à un déficit enzymatique de sphingomyéline.",
        "correct": true,
        "explanation": "La physiopathologie est immuno-inflammatoire complexe."
      },
      {
        "content": "Elle est une maladie de surcharge lysosomale en glucosylcéramide.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "Elle n'affecte jamais la myéline.",
        "correct": false,
        "explanation": "La démyélinisation est centrale."
      },
      {
        "content": "La sclérose en plaques est une maladie d'accumulation de GM2.",
        "correct": false,
        "explanation": "Cela décrit Tay-Sachs."
      }
    ],
    "explanation": "La sclérose en plaques sert de contexte clinique de démyélinisation, distinct des sphingolipidoses enzymatiques."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la tête phosphoéthanolamine de sphingolipides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le noyau hydrophobe reste fondé sur un céramide.",
        "correct": true,
        "explanation": "Le glycérol n'est pas requis."
      },
      {
        "content": "Une phosphoéthanolamine implique obligatoirement un squelette glycérol.",
        "correct": false,
        "explanation": "Des sphingolipides peuvent la porter."
      },
      {
        "content": "L'éthanolamine est un aminoalcool.",
        "correct": true,
        "explanation": "Elle peut être liée via un phosphate."
      },
      {
        "content": "Les glycosphingolipides contiennent nécessairement un phosphate.",
        "correct": false,
        "explanation": "Ils sont définis par une tête glucidique."
      },
      {
        "content": "L'éthanolamine est un monosaccharide.",
        "correct": false,
        "explanation": "C'est un aminoalcool."
      }
    ],
    "explanation": "Les phosphosphingolipides portent une tête phosphatée sur un noyau céramide ; la phosphocholine domine classiquement chez les mammifères."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la sphingomyéline, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La tête phosphatée est reliée au C1 par une liaison phosphodiester.",
        "correct": true,
        "explanation": "Le céramide fournit le squelette hydrophobe."
      },
      {
        "content": "Elle possède obligatoirement plusieurs oses en C1.",
        "correct": false,
        "explanation": "Cela décrit des glycosphingolipides."
      },
      {
        "content": "L'acide gras est relié à la sphingosine par une liaison ester.",
        "correct": false,
        "explanation": "Il est lié par une amide."
      },
      {
        "content": "Elle est un glycérophospholipide à glycérol.",
        "correct": false,
        "explanation": "Son squelette est un céramide."
      },
      {
        "content": "Elle associe un céramide et une phosphocholine dans sa forme majeure chez les mammifères.",
        "correct": true,
        "explanation": "Le phosphate est porté sur l'alcool C1."
      }
    ],
    "explanation": "La sphingomyéline est un phosphosphingolipide à noyau céramide et tête phosphocholine."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle molécule lipidique est produite lors de l'hydrolyse de la sphingomyéline par une sphingomyélinase ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "céramide",
        "ceramide"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La sphingomyélinase transforme la sphingomyéline en céramide."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la sphingomyéline et la myéline ?",
    "choices": [
      {
        "content": "La démyélinisation accélère toujours la conduction.",
        "correct": false,
        "explanation": "Elle la ralentit ou la bloque."
      },
      {
        "content": "La myéline est constituée uniquement de protéines.",
        "correct": false,
        "explanation": "Elle contient une forte proportion de lipides."
      },
      {
        "content": "Le seul rôle de la sphingomyéline est le stockage calorique.",
        "correct": false,
        "explanation": "C'est surtout un lipide membranaire."
      },
      {
        "content": "La sphingomyéline est absente du tissu nerveux.",
        "correct": false,
        "explanation": "Elle y est particulièrement importante."
      },
      {
        "content": "Elle est présente dans le système nerveux central et périphérique.",
        "correct": true,
        "explanation": "La myéline est riche en sphingolipides."
      }
    ],
    "explanation": "La sphingomyéline est un sphingolipide membranaire important, notamment dans la gaine de myéline."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle maladie inflammatoire du système nerveux central illustre une démyélinisation sans être une sphingolipidose lysosomale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sclérose en plaques",
        "SEP",
        "sclerose en plaques"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La sclérose en plaques est une maladie inflammatoire démyélinisante, distincte des maladies de surcharge lysosomale."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la tête phosphoéthanolamine de sphingolipides, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Les glycosphingolipides contiennent nécessairement un phosphate.",
        "correct": false,
        "explanation": "Ils sont définis par une tête glucidique."
      },
      {
        "content": "L'éthanolamine est un monosaccharide.",
        "correct": false,
        "explanation": "C'est un aminoalcool."
      },
      {
        "content": "Le noyau hydrophobe reste fondé sur un céramide.",
        "correct": true,
        "explanation": "Le glycérol n'est pas requis."
      },
      {
        "content": "L'éthanolamine est un aminoalcool.",
        "correct": true,
        "explanation": "Elle peut être liée via un phosphate."
      },
      {
        "content": "Le céramide disparaît quand une tête phosphatée est ajoutée.",
        "correct": false,
        "explanation": "Il reste le noyau lipidique."
      }
    ],
    "explanation": "Les phosphosphingolipides portent une tête phosphatée sur un noyau céramide ; la phosphocholine domine classiquement chez les mammifères.",
    "requiredSelectionCount": 2
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la sphingomyéline ?",
    "choices": [
      {
        "content": "Elle est un glycérophospholipide à glycérol.",
        "correct": false,
        "explanation": "Son squelette est un céramide."
      },
      {
        "content": "Elle appartient aux phosphosphingolipides.",
        "correct": true,
        "explanation": "Elle contient un phosphate mais pas de squelette glycérol."
      },
      {
        "content": "La tête phosphatée est reliée au C1 par une liaison phosphodiester.",
        "correct": true,
        "explanation": "Le céramide fournit le squelette hydrophobe."
      },
      {
        "content": "Elle est un constituant membranaire important.",
        "correct": true,
        "explanation": "Elle est particulièrement abondante dans la myéline."
      },
      {
        "content": "Elle associe un céramide et une phosphocholine dans sa forme majeure chez les mammifères.",
        "correct": true,
        "explanation": "Le phosphate est porté sur l'alcool C1."
      }
    ],
    "explanation": "La sphingomyéline est un phosphosphingolipide à noyau céramide et tête phosphocholine."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans une situation d'application, quelle molécule lipidique est produite lors de l'hydrolyse de la sphingomyéline par une sphingomyélinase ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "céramide",
        "ceramide"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La sphingomyélinase transforme la sphingomyéline en céramide."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la sphingomyéline et la myéline, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle est présente dans le système nerveux central et périphérique.",
        "correct": true,
        "explanation": "La myéline est riche en sphingolipides."
      },
      {
        "content": "La sphingomyéline est absente du tissu nerveux.",
        "correct": false,
        "explanation": "Elle y est particulièrement importante."
      },
      {
        "content": "La démyélinisation accélère toujours la conduction.",
        "correct": false,
        "explanation": "Elle la ralentit ou la bloque."
      },
      {
        "content": "Le seul rôle de la sphingomyéline est le stockage calorique.",
        "correct": false,
        "explanation": "C'est surtout un lipide membranaire."
      },
      {
        "content": "La myéline est constituée uniquement de protéines.",
        "correct": false,
        "explanation": "Elle contient une forte proportion de lipides."
      }
    ],
    "explanation": "La sphingomyéline est un sphingolipide membranaire important, notamment dans la gaine de myéline."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la sclérose en plaques comme contexte de démyélinisation ?",
    "choices": [
      {
        "content": "Elle est due à un déficit en alpha-galactosidase A.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      },
      {
        "content": "Ce contexte illustre l'importance structurale des sphingolipides nerveux.",
        "correct": true,
        "explanation": "Il ne s'agit pas d'une sphingolipidose lysosomale classique."
      },
      {
        "content": "C'est une maladie inflammatoire démyélinisante du système nerveux central.",
        "correct": true,
        "explanation": "La myéline et les axones peuvent être lésés."
      },
      {
        "content": "La sclérose en plaques est une maladie d'accumulation de GM2.",
        "correct": false,
        "explanation": "Cela décrit Tay-Sachs."
      },
      {
        "content": "Elle est une maladie de surcharge lysosomale en glucosylcéramide.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      }
    ],
    "explanation": "La sclérose en plaques sert de contexte clinique de démyélinisation, distinct des sphingolipidoses enzymatiques."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "L'éthanolamine est un aminoalcool.",
        "correct": true,
        "explanation": "Elle peut être liée via un phosphate."
      },
      {
        "content": "La sphingomyéline est abondante dans les membranes de la gaine de myéline.",
        "correct": true,
        "explanation": "Elle contribue à leurs propriétés physiques."
      },
      {
        "content": "La présence d'un phosphate distingue les phosphosphingolipides des glycosphingolipides.",
        "correct": true,
        "explanation": "La tête polaire n'est alors pas glucidique."
      },
      {
        "content": "Le céramide disparaît quand une tête phosphatée est ajoutée.",
        "correct": false,
        "explanation": "Il reste le noyau lipidique."
      },
      {
        "content": "Le seul rôle de la sphingomyéline est le stockage calorique.",
        "correct": false,
        "explanation": "C'est surtout un lipide membranaire."
      },
      {
        "content": "La sphingomyéline est absente du tissu nerveux.",
        "correct": false,
        "explanation": "Elle y est particulièrement importante."
      },
      {
        "content": "L'éthanolamine est un monosaccharide.",
        "correct": false,
        "explanation": "C'est un aminoalcool."
      },
      {
        "content": "Elle est présente dans le système nerveux central et périphérique.",
        "correct": true,
        "explanation": "La myéline est riche en sphingolipides."
      },
      {
        "content": "Son rôle est structural mais aussi lié à la signalisation membranaire.",
        "correct": true,
        "explanation": "Ses métabolites sont bioactifs."
      },
      {
        "content": "Une phosphoéthanolamine implique obligatoirement un squelette glycérol.",
        "correct": false,
        "explanation": "Des sphingolipides peuvent la porter."
      }
    ],
    "explanation": "Les phosphosphingolipides portent une tête phosphatée sur un noyau céramide ; la phosphocholine domine classiquement chez les mammifères. La sphingomyéline est un sphingolipide membranaire important, notamment dans la gaine de myéline."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant la sphingomyéline, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "L'acide gras est relié à la sphingosine par une liaison ester.",
        "correct": false,
        "explanation": "Il est lié par une amide."
      },
      {
        "content": "Elle appartient aux phosphosphingolipides.",
        "correct": true,
        "explanation": "Elle contient un phosphate mais pas de squelette glycérol."
      },
      {
        "content": "La tête phosphatée est reliée au C1 par une liaison phosphodiester.",
        "correct": true,
        "explanation": "Le céramide fournit le squelette hydrophobe."
      },
      {
        "content": "Elle associe un céramide et une phosphocholine dans sa forme majeure chez les mammifères.",
        "correct": true,
        "explanation": "Le phosphate est porté sur l'alcool C1."
      },
      {
        "content": "Elle est un glycérophospholipide à glycérol.",
        "correct": false,
        "explanation": "Son squelette est un céramide."
      }
    ],
    "explanation": "La sphingomyéline est un phosphosphingolipide à noyau céramide et tête phosphocholine."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans une situation d'application n°2, dans une situation d'application, quelle molécule lipidique est produite lors de l'hydrolyse de la sphingomyéline par une sphingomyélinase ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "céramide",
        "ceramide"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La sphingomyélinase transforme la sphingomyéline en céramide."
  }
];
