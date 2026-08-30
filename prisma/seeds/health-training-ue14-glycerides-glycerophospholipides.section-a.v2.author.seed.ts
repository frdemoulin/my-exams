import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Glycérides et glycérophospholipides — Section A — Glycérol et acylglycérols */
export const UE14_BIOCH_CH6_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le glycérol, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il possède trois atomes de carbone.",
        "correct": true,
        "explanation": "Le glycérol est un triol C3."
      },
      {
        "content": "Il porte trois fonctions alcool.",
        "correct": true,
        "explanation": "Les carbones terminaux portent des alcools primaires et C2 un alcool secondaire."
      },
      {
        "content": "C2 porte une fonction acide carboxylique.",
        "correct": false,
        "explanation": "C2 porte un alcool secondaire."
      },
      {
        "content": "Le glycérol libre est un acide gras.",
        "correct": false,
        "explanation": "C'est un triol."
      },
      {
        "content": "Il ne porte qu'une fonction alcool.",
        "correct": false,
        "explanation": "Il en porte trois."
      }
    ],
    "explanation": "Le glycérol est un triol à trois carbones ; la nomenclature sn permet de distinguer ses positions en biochimie."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la nomenclature stéréospécifique sn du glycérol, laquelle est correcte ?",
    "choices": [
      {
        "content": "sn-2 désigne le groupement phosphate.",
        "correct": false,
        "explanation": "sn-2 est une position carbonée du glycérol."
      },
      {
        "content": "Toutes les enzymes hydrolysent indifféremment sn-1, sn-2 et sn-3.",
        "correct": false,
        "explanation": "Beaucoup sont régiospécifiques."
      },
      {
        "content": "sn-1 et sn-3 sont les deux doubles liaisons d'un acide gras.",
        "correct": false,
        "explanation": "Ce sont des positions sur le glycérol."
      },
      {
        "content": "La nomenclature sn ne peut jamais être appliquée aux glycérophospholipides.",
        "correct": false,
        "explanation": "Elle y est très utilisée."
      },
      {
        "content": "De nombreuses enzymes reconnaissent une position précise du squelette glycérol.",
        "correct": true,
        "explanation": "La régiospécificité est importante en biochimie."
      }
    ],
    "explanation": "La nomenclature sn distingue les positions du squelette glycérol et évite d'assimiler les deux extrémités dans un lipide substitué."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type de liaison relie un acide gras au glycérol dans un acylglycérol ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "liaison ester",
        "ester",
        "liaison estérifiée",
        "liaison esterifiée"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les acylglycérols résultent de l'estérification d'une à trois fonctions alcool du glycérol par des acides gras."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les monoacylglycérols, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un 1-monoacylglycérol porte l'acyle sur une position terminale du glycérol.",
        "correct": true,
        "explanation": "Il s'agit d'une position sn-1 ou équivalente selon la convention utilisée."
      },
      {
        "content": "Un 2-monoacylglycérol porte deux acides gras.",
        "correct": false,
        "explanation": "Il n'en porte qu'un."
      },
      {
        "content": "Ils possèdent une seule chaîne acyle.",
        "correct": true,
        "explanation": "Deux fonctions alcool restent libres."
      },
      {
        "content": "Un 2-monoacylglycérol porte l'acyle sur le carbone central.",
        "correct": true,
        "explanation": "La position sn-2 est le carbone central."
      },
      {
        "content": "Le carbone central du glycérol est sn-3.",
        "correct": false,
        "explanation": "Il est sn-2."
      }
    ],
    "explanation": "Les monoacylglycérols diffèrent notamment par la position sn-1 ou sn-2 de leur unique chaîne acyle."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les diacylglycérols, laquelle est correcte ?",
    "choices": [
      {
        "content": "Un diacylglycérol contient deux liaisons ester acyle-glycérol.",
        "correct": true,
        "explanation": "Chaque acide gras est relié par une liaison ester."
      },
      {
        "content": "Le DAG ne contient aucune fonction alcool libre.",
        "correct": false,
        "explanation": "Une fonction alcool reste libre."
      },
      {
        "content": "Tout DAG contient obligatoirement une tête choline.",
        "correct": false,
        "explanation": "La choline caractérise notamment la phosphatidylcholine."
      },
      {
        "content": "Un diacylglycérol porte obligatoirement trois acides gras.",
        "correct": false,
        "explanation": "Il en porte deux."
      },
      {
        "content": "1,2-DAG et 1,3-DAG sont synonymes.",
        "correct": false,
        "explanation": "Ils diffèrent par les positions estérifiées."
      }
    ],
    "explanation": "Un DAG comporte deux chaînes acyles ; les principaux isomères de position sont 1,2-DAG et 1,3-DAG."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant les triacylglycérols, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Ils comportent trois chaînes acyles estérifiées au glycérol.",
        "correct": true,
        "explanation": "Les trois fonctions alcool sont estérifiées."
      },
      {
        "content": "Ils contiennent obligatoirement un groupement phosphate.",
        "correct": false,
        "explanation": "Ce n'est pas nécessaire."
      },
      {
        "content": "Un triacylglycérol homogène possède trois résidus acyles identiques.",
        "correct": true,
        "explanation": "R1=R2=R3 dans cette définition."
      },
      {
        "content": "Ils possèdent toujours une tête fortement chargée.",
        "correct": false,
        "explanation": "Les TAG sont globalement neutres et hydrophobes."
      },
      {
        "content": "Ils sont des constituants obligatoires de la bicouche membranaire.",
        "correct": false,
        "explanation": "Les glycérophospholipides sont les principaux lipides structuraux étudiés ici."
      }
    ],
    "explanation": "Un triacylglycérol est le triester du glycérol ; il peut être homogène ou mixte.",
    "requiredSelectionCount": 2
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant un triacylglycérol 1,3-distéaroyl-2-oléoyl, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il porte un résidu oléoyl en position 2.",
        "correct": true,
        "explanation": "Ce résidu dérive de l'acide oléique 18:1."
      },
      {
        "content": "Il possède trois liaisons ester entre glycérol et acides gras.",
        "correct": true,
        "explanation": "Chaque chaîne acyle est estérifiée."
      },
      {
        "content": "Il porte deux résidus stéaroyl en positions 1 et 3.",
        "correct": true,
        "explanation": "Ces chaînes dérivent de l'acide stéarique 18:0."
      },
      {
        "content": "Il ne possède qu'une chaîne acyle.",
        "correct": false,
        "explanation": "Il en possède trois."
      },
      {
        "content": "Il s'agit d'un triacylglycérol mixte.",
        "correct": true,
        "explanation": "Au moins deux types de résidus acyles sont présents."
      }
    ],
    "explanation": "Le 1,3-distéaroyl-2-oléoyl-glycérol est un TAG mixte illustrant la nomenclature par positions."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel produit est formé par phosphorylation du glycérol par la glycérol kinase ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glycérol-3-phosphate",
        "glycerol-3-phosphate",
        "sn-glycérol-3-phosphate",
        "glycerol 3 phosphate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La glycérol kinase forme le glycérol-3-phosphate, intermédiaire central du métabolisme des glycérolipides."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le glycérol ?",
    "choices": [
      {
        "content": "Il possède six carbones.",
        "correct": false,
        "explanation": "Il en possède trois."
      },
      {
        "content": "Les carbones terminaux peuvent être distingués par la nomenclature stéréospécifique sn.",
        "correct": true,
        "explanation": "Le glycérol libre est prochiral et les positions sn-1 et sn-3 sont distinguées en biochimie."
      },
      {
        "content": "Le glycérol libre est un acide gras.",
        "correct": false,
        "explanation": "C'est un triol."
      },
      {
        "content": "Il ne porte qu'une fonction alcool.",
        "correct": false,
        "explanation": "Il en porte trois."
      },
      {
        "content": "C2 porte une fonction acide carboxylique.",
        "correct": false,
        "explanation": "C2 porte un alcool secondaire."
      }
    ],
    "explanation": "Le glycérol est un triol à trois carbones ; la nomenclature sn permet de distinguer ses positions en biochimie."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la nomenclature stéréospécifique sn du glycérol, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "De nombreuses enzymes reconnaissent une position précise du squelette glycérol.",
        "correct": true,
        "explanation": "La régiospécificité est importante en biochimie."
      },
      {
        "content": "Toutes les enzymes hydrolysent indifféremment sn-1, sn-2 et sn-3.",
        "correct": false,
        "explanation": "Beaucoup sont régiospécifiques."
      },
      {
        "content": "La nomenclature sn ne peut jamais être appliquée aux glycérophospholipides.",
        "correct": false,
        "explanation": "Elle y est très utilisée."
      },
      {
        "content": "sn-1 et sn-3 sont les deux doubles liaisons d'un acide gras.",
        "correct": false,
        "explanation": "Ce sont des positions sur le glycérol."
      },
      {
        "content": "sn-2 correspond au carbone central du glycérol.",
        "correct": true,
        "explanation": "C'est le carbone portant l'alcool secondaire dans le glycérol."
      }
    ],
    "explanation": "La nomenclature sn distingue les positions du squelette glycérol et évite d'assimiler les deux extrémités dans un lipide substitué."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le glycérol, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il possède trois atomes de carbone.",
        "correct": true,
        "explanation": "Le glycérol est un triol C3."
      },
      {
        "content": "C2 porte une fonction acide carboxylique.",
        "correct": false,
        "explanation": "C2 porte un alcool secondaire."
      },
      {
        "content": "Il ne porte qu'une fonction alcool.",
        "correct": false,
        "explanation": "Il en porte trois."
      },
      {
        "content": "Il possède six carbones.",
        "correct": false,
        "explanation": "Il en possède trois."
      },
      {
        "content": "C2 porte une fonction alcool secondaire.",
        "correct": true,
        "explanation": "C2 est le carbone central."
      }
    ],
    "explanation": "Le glycérol est un triol à trois carbones ; la nomenclature sn permet de distinguer ses positions en biochimie."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel préfixe de nomenclature est utilisé pour numéroter stéréospécifiquement le glycérol en biochimie ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sn",
        "sn-",
        "nomenclature sn"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La nomenclature sn distingue les positions du squelette glycérol et évite d'assimiler les deux extrémités dans un lipide substitué."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant l'estérification du glycérol par des acides gras ?",
    "choices": [
      {
        "content": "Un diacylglycérol possède deux acides gras estérifiés.",
        "correct": true,
        "explanation": "Une fonction alcool du glycérol reste libre."
      },
      {
        "content": "Un diacylglycérol ne contient jamais de liaison ester.",
        "correct": false,
        "explanation": "Il en contient deux."
      },
      {
        "content": "Un monoacylglycérol porte trois acides gras.",
        "correct": false,
        "explanation": "Il n'en porte qu'un."
      },
      {
        "content": "Un triacylglycérol possède nécessairement un phosphate.",
        "correct": false,
        "explanation": "Le phosphate caractérise les glycérophospholipides, pas les TAG."
      },
      {
        "content": "L'estérification forme une liaison peptidique.",
        "correct": false,
        "explanation": "Elle forme une liaison ester."
      }
    ],
    "explanation": "Les acylglycérols résultent de l'estérification d'une à trois fonctions alcool du glycérol par des acides gras."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de liaisons ester acyle-glycérol comporte un triacylglycérol complètement estérifié ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Chaque chaîne acyle est reliée au glycérol par une liaison ester : un TAG en possède donc trois."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les diacylglycérols, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Un 1,3-diacylglycérol porte les chaînes acyles sur les deux carbones terminaux.",
        "correct": true,
        "explanation": "Les positions sont sn-1 et sn-3."
      },
      {
        "content": "Un 1,2-diacylglycérol porte des chaînes acyles sur deux carbones adjacents.",
        "correct": true,
        "explanation": "Les positions sont sn-1 et sn-2."
      },
      {
        "content": "Le DAG ne contient aucune fonction alcool libre.",
        "correct": false,
        "explanation": "Une fonction alcool reste libre."
      },
      {
        "content": "Tout DAG contient obligatoirement une tête choline.",
        "correct": false,
        "explanation": "La choline caractérise notamment la phosphatidylcholine."
      },
      {
        "content": "1,2-DAG et 1,3-DAG sont synonymes.",
        "correct": false,
        "explanation": "Ils diffèrent par les positions estérifiées."
      }
    ],
    "explanation": "Un DAG comporte deux chaînes acyles ; les principaux isomères de position sont 1,2-DAG et 1,3-DAG.",
    "requiredSelectionCount": 2
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les triacylglycérols ?",
    "choices": [
      {
        "content": "Un triacylglycérol homogène possède trois résidus acyles identiques.",
        "correct": true,
        "explanation": "R1=R2=R3 dans cette définition."
      },
      {
        "content": "Ils contiennent obligatoirement un groupement phosphate.",
        "correct": false,
        "explanation": "Ce n'est pas nécessaire."
      },
      {
        "content": "Un triacylglycérol mixte contient au moins deux résidus acyles différents.",
        "correct": true,
        "explanation": "C'est le cas fréquent dans les lipides naturels."
      },
      {
        "content": "Ils constituent une forme majeure de stockage des acides gras dans le tissu adipeux.",
        "correct": true,
        "explanation": "Ils sont des réserves énergétiques neutres."
      },
      {
        "content": "Ils comportent trois chaînes acyles estérifiées au glycérol.",
        "correct": true,
        "explanation": "Les trois fonctions alcool sont estérifiées."
      }
    ],
    "explanation": "Un triacylglycérol est le triester du glycérol ; il peut être homogène ou mixte."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel résidu acyle occupe la position 2 dans le 1,3-distéaroyl-2-oléoyl-glycérol ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "oléoyl",
        "oleoyl",
        "résidu oléoyl",
        "residu oleoyl"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le 1,3-distéaroyl-2-oléoyl-glycérol est un TAG mixte illustrant la nomenclature par positions."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel isomère de diacylglycérol porte des chaînes acyles sur les deux carbones terminaux du glycérol ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "1,3-diacylglycérol",
        "1,3-DAG",
        "1,3-diglycéride",
        "1,3 diacylglycerol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le 1,3-DAG porte des acyles en sn-1 et sn-3 ; le 1,2-DAG les porte sur deux carbones adjacents."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le glycérol ?",
    "choices": [
      {
        "content": "Il porte trois fonctions alcool.",
        "correct": true,
        "explanation": "Les carbones terminaux portent des alcools primaires et C2 un alcool secondaire."
      },
      {
        "content": "Le glycérol libre est un acide gras.",
        "correct": false,
        "explanation": "C'est un triol."
      },
      {
        "content": "Il ne porte qu'une fonction alcool.",
        "correct": false,
        "explanation": "Il en porte trois."
      },
      {
        "content": "Les carbones terminaux peuvent être distingués par la nomenclature stéréospécifique sn.",
        "correct": true,
        "explanation": "Le glycérol libre est prochiral et les positions sn-1 et sn-3 sont distinguées en biochimie."
      },
      {
        "content": "C2 porte une fonction acide carboxylique.",
        "correct": false,
        "explanation": "C2 porte un alcool secondaire."
      }
    ],
    "explanation": "Le glycérol est un triol à trois carbones ; la nomenclature sn permet de distinguer ses positions en biochimie."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Certains diacylglycérols membranaires peuvent participer à la signalisation.",
        "correct": true,
        "explanation": "Le DAG produit à partir de PIP2 est un second messager."
      },
      {
        "content": "Toutes les enzymes hydrolysent indifféremment sn-1, sn-2 et sn-3.",
        "correct": false,
        "explanation": "Beaucoup sont régiospécifiques."
      },
      {
        "content": "De nombreuses enzymes reconnaissent une position précise du squelette glycérol.",
        "correct": true,
        "explanation": "La régiospécificité est importante en biochimie."
      },
      {
        "content": "Elle permet de distinguer les positions sn-1, sn-2 et sn-3.",
        "correct": true,
        "explanation": "Cette nomenclature est utile pour les lipides glycérolés."
      },
      {
        "content": "Un 1,2-diacylglycérol porte des chaînes acyles sur deux carbones adjacents.",
        "correct": true,
        "explanation": "Les positions sont sn-1 et sn-2."
      },
      {
        "content": "Le DAG ne contient aucune fonction alcool libre.",
        "correct": false,
        "explanation": "Une fonction alcool reste libre."
      },
      {
        "content": "1,2-DAG et 1,3-DAG sont synonymes.",
        "correct": false,
        "explanation": "Ils diffèrent par les positions estérifiées."
      },
      {
        "content": "Un diacylglycérol porte obligatoirement trois acides gras.",
        "correct": false,
        "explanation": "Il en porte deux."
      },
      {
        "content": "sn-2 correspond au carbone central du glycérol.",
        "correct": true,
        "explanation": "C'est le carbone portant l'alcool secondaire dans le glycérol."
      },
      {
        "content": "sn-2 désigne le groupement phosphate.",
        "correct": false,
        "explanation": "sn-2 est une position carbonée du glycérol."
      }
    ],
    "explanation": "La nomenclature sn distingue les positions du squelette glycérol et évite d'assimiler les deux extrémités dans un lipide substitué. Un DAG comporte deux chaînes acyles ; les principaux isomères de position sont 1,2-DAG et 1,3-DAG."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant l'estérification du glycérol par des acides gras, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Un diacylglycérol ne contient jamais de liaison ester.",
        "correct": false,
        "explanation": "Il en contient deux."
      },
      {
        "content": "Un monoacylglycérol possède un seul acide gras estérifié au glycérol.",
        "correct": true,
        "explanation": "Deux fonctions alcool restent libres."
      },
      {
        "content": "Un diacylglycérol possède deux acides gras estérifiés.",
        "correct": true,
        "explanation": "Une fonction alcool du glycérol reste libre."
      },
      {
        "content": "L'estérification forme une liaison peptidique.",
        "correct": false,
        "explanation": "Elle forme une liaison ester."
      },
      {
        "content": "Un triacylglycérol possède trois acides gras estérifiés.",
        "correct": true,
        "explanation": "Les trois fonctions alcool du glycérol sont acylées."
      }
    ],
    "explanation": "Les acylglycérols résultent de l'estérification d'une à trois fonctions alcool du glycérol par des acides gras."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel carbone du glycérol porte l'acyle dans un 2-monoacylglycérol ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Les monoacylglycérols diffèrent notamment par la position sn-1 ou sn-2 de leur unique chaîne acyle."
  }
];
