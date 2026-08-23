import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Glycérides et glycérophospholipides — Section C — Acide phosphatidique et classes de glycérophospholipides */
export const UE14_BIOCH_CH6_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'acide phosphatidique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est dépourvu de glycérol.",
        "correct": false,
        "explanation": "Le glycérol constitue son squelette."
      },
      {
        "content": "Il est un intermédiaire de biosynthèse important pour TAG et glycérophospholipides.",
        "correct": true,
        "explanation": "Sa concentration tissulaire reste relativement faible."
      },
      {
        "content": "Un groupement phosphate est lié en sn-3.",
        "correct": true,
        "explanation": "Il forme la base de nombreux glycérophospholipides."
      },
      {
        "content": "Il est uniquement un produit terminal sans rôle de précurseur.",
        "correct": false,
        "explanation": "C'est un intermédiaire majeur."
      },
      {
        "content": "Le phosphate est porté par sn-2 et les deux acides gras par sn-1 et sn-3.",
        "correct": false,
        "explanation": "Dans l'acide phosphatidique classique, les acyles sont sn-1/sn-2 et le phosphate sn-3."
      }
    ],
    "explanation": "L'acide phosphatidique est un diacylglycérol-3-phosphate et constitue une charnière biosynthétique."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la tête polaire des glycérophospholipides, laquelle est correcte ?",
    "choices": [
      {
        "content": "La nature de la tête ne change jamais le nom de la classe.",
        "correct": false,
        "explanation": "Elle est au contraire déterminante."
      },
      {
        "content": "La nature du groupement polaire permet de définir plusieurs classes.",
        "correct": true,
        "explanation": "Choline, éthanolamine, sérine, glycérol ou inositol sont des exemples."
      },
      {
        "content": "La tête polaire est constituée uniquement des deux acides gras.",
        "correct": false,
        "explanation": "Ce sont les queues hydrophobes."
      },
      {
        "content": "Le phosphate est sans influence sur la polarité.",
        "correct": false,
        "explanation": "Il contribue fortement à la tête hydrophile."
      },
      {
        "content": "Les glycérophospholipides sont entièrement apolaires.",
        "correct": false,
        "explanation": "Ils sont amphiphiles."
      }
    ],
    "explanation": "Les glycérophospholipides sont amphiphiles : tête phosphatée polaire et deux chaînes acyles hydrophobes."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel acide aminé constitue la tête polaire de la phosphatidylsérine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sérine",
        "serine",
        "la sérine",
        "la serine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La phosphatidylsérine est le glycérophospholipide à tête sérine."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la phosphatidyléthanolamine PE, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "PE possède une tête inositol.",
        "correct": false,
        "explanation": "Cela décrit PI."
      },
      {
        "content": "PE est fréquente dans les membranes biologiques.",
        "correct": true,
        "explanation": "Elle est souvent enrichie dans le feuillet cytosolique."
      },
      {
        "content": "L'éthanolamine est un acide gras.",
        "correct": false,
        "explanation": "C'est un aminoalcool."
      },
      {
        "content": "Sa tête polaire est l'éthanolamine.",
        "correct": true,
        "explanation": "La classe est définie par cette tête."
      },
      {
        "content": "Elle peut constituer la tête polaire de nombreux plasmalogènes.",
        "correct": true,
        "explanation": "Les plasmalogènes à éthanolamine sont fréquents."
      }
    ],
    "explanation": "La phosphatidyléthanolamine est un glycérophospholipide à tête éthanolamine."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la phosphatidylcholine PC, laquelle est correcte ?",
    "choices": [
      {
        "content": "Lécithine désigne uniquement un triacylglycérol.",
        "correct": false,
        "explanation": "Le terme est historiquement associé à la phosphatidylcholine."
      },
      {
        "content": "PC est dépourvue de phosphate.",
        "correct": false,
        "explanation": "Elle est un glycérophospholipide."
      },
      {
        "content": "La choline est un acide gras saturé.",
        "correct": false,
        "explanation": "C'est un aminoalcool quaternisé."
      },
      {
        "content": "PC possède une tête sérine.",
        "correct": false,
        "explanation": "Cela décrit PS."
      },
      {
        "content": "Sa tête polaire est la choline.",
        "correct": true,
        "explanation": "La choline est un ammonium quaternaire."
      }
    ],
    "explanation": "La phosphatidylcholine est un glycérophospholipide majeur à tête choline, historiquement appelé lécithine."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant le phosphatidylglycérol PG, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "PG est un triacylglycérol sans phosphate.",
        "correct": false,
        "explanation": "Il est phospholipidique."
      },
      {
        "content": "PG appartient aux glycérophospholipides.",
        "correct": true,
        "explanation": "Il conserve le squelette diacylglycérol-phosphate."
      },
      {
        "content": "PG est identique au glycérol libre.",
        "correct": false,
        "explanation": "Il s'agit d'un phospholipide à tête glycérol."
      },
      {
        "content": "Il sert notamment de précurseur à la cardiolipine.",
        "correct": true,
        "explanation": "Cette voie est importante dans les membranes mitochondriales."
      },
      {
        "content": "PG possède une tête choline.",
        "correct": false,
        "explanation": "Cela décrit PC."
      }
    ],
    "explanation": "Le phosphatidylglycérol possède une tête glycérol et constitue notamment un précurseur de la cardiolipine.",
    "requiredSelectionCount": 2
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le phosphatidylinositol PI, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Sa tête polaire est un inositol cyclique.",
        "correct": true,
        "explanation": "L'inositol possède six carbones et plusieurs fonctions alcool."
      },
      {
        "content": "PIP2 et PIP3 sont des phosphoinositides dérivés de PI.",
        "correct": true,
        "explanation": "Des phosphates supplémentaires sont portés par l'inositol."
      },
      {
        "content": "Le groupement phosphatidyle est lié à l'inositol par une liaison phosphodiester.",
        "correct": true,
        "explanation": "La tête est connectée via le phosphate."
      },
      {
        "content": "PI est un constituant minoritaire mais fonctionnellement important des membranes.",
        "correct": true,
        "explanation": "Ses dérivés phosphorylés participent à la signalisation."
      },
      {
        "content": "L'inositol est une chaîne linéaire de trois carbones.",
        "correct": false,
        "explanation": "C'est un cycle à six carbones."
      }
    ],
    "explanation": "Le phosphatidylinositol est un glycérophospholipide à tête inositol, précurseur de phosphoinositides de signalisation."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de chaînes acyles possède classiquement un lysophospholipide ?",
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    },
    "explanation": "Un lysophospholipide est un glycérophospholipide monoacylé ; PLA2 peut le former en hydrolysant l'acyle sn-2."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de chaînes acyles comporte l'acide phosphatidique classique ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "L'acide phosphatidique comporte deux chaînes acyles en sn-1 et sn-2 et un phosphate en sn-3."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la tête polaire des glycérophospholipides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La nature du groupement polaire permet de définir plusieurs classes.",
        "correct": true,
        "explanation": "Choline, éthanolamine, sérine, glycérol ou inositol sont des exemples."
      },
      {
        "content": "Le phosphate est sans influence sur la polarité.",
        "correct": false,
        "explanation": "Il contribue fortement à la tête hydrophile."
      },
      {
        "content": "Les glycérophospholipides sont entièrement apolaires.",
        "correct": false,
        "explanation": "Ils sont amphiphiles."
      },
      {
        "content": "Cette architecture rend les glycérophospholipides amphiphiles.",
        "correct": true,
        "explanation": "Ils possèdent une tête polaire et des queues hydrophobes."
      },
      {
        "content": "La nature de la tête ne change jamais le nom de la classe.",
        "correct": false,
        "explanation": "Elle est au contraire déterminante."
      }
    ],
    "explanation": "Les glycérophospholipides sont amphiphiles : tête phosphatée polaire et deux chaînes acyles hydrophobes."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'acide phosphatidique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est dépourvu de glycérol.",
        "correct": false,
        "explanation": "Le glycérol constitue son squelette."
      },
      {
        "content": "Il est uniquement un produit terminal sans rôle de précurseur.",
        "correct": false,
        "explanation": "C'est un intermédiaire majeur."
      },
      {
        "content": "Il est un intermédiaire de biosynthèse important pour TAG et glycérophospholipides.",
        "correct": true,
        "explanation": "Sa concentration tissulaire reste relativement faible."
      },
      {
        "content": "Il possède trois acides gras et aucun phosphate.",
        "correct": false,
        "explanation": "Cela décrit un TAG."
      },
      {
        "content": "Un groupement phosphate est lié en sn-3.",
        "correct": true,
        "explanation": "Il forme la base de nombreux glycérophospholipides."
      }
    ],
    "explanation": "L'acide phosphatidique est un diacylglycérol-3-phosphate et constitue une charnière biosynthétique."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel caractère physicochimique résulte de la coexistence d'une tête polaire et de deux chaînes hydrophobes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "amphiphile",
        "amphipathique",
        "amphiphilie"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les glycérophospholipides sont amphiphiles : tête phosphatée polaire et deux chaînes acyles hydrophobes."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la phosphatidylsérine PS ?",
    "choices": [
      {
        "content": "PS est un triacylglycérol neutre.",
        "correct": false,
        "explanation": "Elle porte un phosphate et une tête sérine."
      },
      {
        "content": "La sérine n'est jamais liée à un phosphate dans PS.",
        "correct": false,
        "explanation": "Elle constitue précisément la tête polaire."
      },
      {
        "content": "Sa tête polaire contient de la sérine.",
        "correct": true,
        "explanation": "La sérine est liée au phosphate."
      },
      {
        "content": "PS est exclusivement localisée dans le feuillet externe de toutes les cellules vivantes.",
        "correct": false,
        "explanation": "Elle est généralement enrichie côté cytosolique."
      },
      {
        "content": "PS possède une tête choline.",
        "correct": false,
        "explanation": "Cela décrit PC."
      }
    ],
    "explanation": "La phosphatidylsérine est le glycérophospholipide à tête sérine."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la phosphatidyléthanolamine PE, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "PE ne peut jamais contenir de liaison éther.",
        "correct": false,
        "explanation": "Les plasmalogènes d'éthanolamine en sont des exemples."
      },
      {
        "content": "Elle peut constituer la tête polaire de nombreux plasmalogènes.",
        "correct": true,
        "explanation": "Les plasmalogènes à éthanolamine sont fréquents."
      },
      {
        "content": "L'éthanolamine est un acide gras.",
        "correct": false,
        "explanation": "C'est un aminoalcool."
      },
      {
        "content": "Sa tête polaire est l'éthanolamine.",
        "correct": true,
        "explanation": "La classe est définie par cette tête."
      },
      {
        "content": "PE est fréquente dans les membranes biologiques.",
        "correct": true,
        "explanation": "Elle est souvent enrichie dans le feuillet cytosolique."
      }
    ],
    "explanation": "La phosphatidyléthanolamine est un glycérophospholipide à tête éthanolamine."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la phosphatidylcholine PC, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Sa tête polaire est la choline.",
        "correct": true,
        "explanation": "La choline est un ammonium quaternaire."
      },
      {
        "content": "Lécithine désigne uniquement un triacylglycérol.",
        "correct": false,
        "explanation": "Le terme est historiquement associé à la phosphatidylcholine."
      },
      {
        "content": "PC est dépourvue de phosphate.",
        "correct": false,
        "explanation": "Elle est un glycérophospholipide."
      },
      {
        "content": "La choline est un dérivé triméthylé de l'éthanolamine.",
        "correct": true,
        "explanation": "La méthylation transforme l'amine en ammonium quaternaire."
      },
      {
        "content": "La choline est un acide gras saturé.",
        "correct": false,
        "explanation": "C'est un aminoalcool quaternisé."
      }
    ],
    "explanation": "La phosphatidylcholine est un glycérophospholipide majeur à tête choline, historiquement appelé lécithine.",
    "requiredSelectionCount": 2
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le phosphatidylglycérol PG ?",
    "choices": [
      {
        "content": "Il sert notamment de précurseur à la cardiolipine.",
        "correct": true,
        "explanation": "Cette voie est importante dans les membranes mitochondriales."
      },
      {
        "content": "La tête glycérol le distingue de PC, PE, PS et PI.",
        "correct": true,
        "explanation": "La nature de la tête définit la classe."
      },
      {
        "content": "PG appartient aux glycérophospholipides.",
        "correct": true,
        "explanation": "Il conserve le squelette diacylglycérol-phosphate."
      },
      {
        "content": "Sa tête polaire contient un glycérol supplémentaire.",
        "correct": true,
        "explanation": "Ce glycérol est lié au phosphate."
      },
      {
        "content": "PG possède une tête choline.",
        "correct": false,
        "explanation": "Cela décrit PC."
      }
    ],
    "explanation": "Le phosphatidylglycérol possède une tête glycérol et constitue notamment un précurseur de la cardiolipine."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle tête polaire définit la phosphatidylcholine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "choline",
        "la choline"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La phosphatidylcholine possède une tête choline ; elle est aussi historiquement appelée lécithine."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les lysophospholipides, laquelle est correcte ?",
    "choices": [
      {
        "content": "Il est dépourvu de phosphate par définition.",
        "correct": false,
        "explanation": "Il conserve la tête phospholipidique."
      },
      {
        "content": "Un lysophospholipide possède obligatoirement trois chaînes acyles.",
        "correct": false,
        "explanation": "Il n'en possède qu'une."
      },
      {
        "content": "La phospholipase A2 peut générer un lysophospholipide en retirant l'acyle sn-2.",
        "correct": true,
        "explanation": "Le produit conserve l'acyle sn-1."
      },
      {
        "content": "Un lysophospholipide est identique à un TAG.",
        "correct": false,
        "explanation": "Leurs structures sont très différentes."
      },
      {
        "content": "PLA2 ajoute un acide gras en sn-2 pour le former.",
        "correct": false,
        "explanation": "PLA2 hydrolyse l'acyle sn-2."
      }
    ],
    "explanation": "Un lysophospholipide est un glycérophospholipide monoacylé ; PLA2 peut le former en hydrolysant l'acyle sn-2."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant l'acide phosphatidique ?",
    "choices": [
      {
        "content": "Il est uniquement un produit terminal sans rôle de précurseur.",
        "correct": false,
        "explanation": "C'est un intermédiaire majeur."
      },
      {
        "content": "Il possède un squelette glycérol.",
        "correct": true,
        "explanation": "Le glycérol organise les positions sn-1, sn-2 et sn-3."
      },
      {
        "content": "Il possède trois acides gras et aucun phosphate.",
        "correct": false,
        "explanation": "Cela décrit un TAG."
      },
      {
        "content": "Deux acides gras sont estérifiés en sn-1 et sn-2.",
        "correct": true,
        "explanation": "Ils constituent les deux chaînes hydrophobes."
      },
      {
        "content": "Il est dépourvu de glycérol.",
        "correct": false,
        "explanation": "Le glycérol constitue son squelette."
      }
    ],
    "explanation": "L'acide phosphatidique est un diacylglycérol-3-phosphate et constitue une charnière biosynthétique."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La nature du groupement polaire permet de définir plusieurs classes.",
        "correct": true,
        "explanation": "Choline, éthanolamine, sérine, glycérol ou inositol sont des exemples."
      },
      {
        "content": "Elle comprend le phosphate et le groupement polaire qui lui est lié.",
        "correct": true,
        "explanation": "Le glycérol participe aussi à l'interface hydrophile."
      },
      {
        "content": "Lécithine désigne uniquement un triacylglycérol.",
        "correct": false,
        "explanation": "Le terme est historiquement associé à la phosphatidylcholine."
      },
      {
        "content": "PC est dépourvue de phosphate.",
        "correct": false,
        "explanation": "Elle est un glycérophospholipide."
      },
      {
        "content": "Les deux chaînes acyles constituent la région hydrophobe.",
        "correct": true,
        "explanation": "Elles sont portées en sn-1 et sn-2."
      },
      {
        "content": "La choline est un acide gras saturé.",
        "correct": false,
        "explanation": "C'est un aminoalcool quaternisé."
      },
      {
        "content": "La tête polaire est constituée uniquement des deux acides gras.",
        "correct": false,
        "explanation": "Ce sont les queues hydrophobes."
      },
      {
        "content": "PC est un composant majeur de nombreuses membranes.",
        "correct": true,
        "explanation": "Elle est souvent abondante dans le feuillet externe."
      },
      {
        "content": "Les glycérophospholipides sont entièrement apolaires.",
        "correct": false,
        "explanation": "Ils sont amphiphiles."
      },
      {
        "content": "La choline est un dérivé triméthylé de l'éthanolamine.",
        "correct": true,
        "explanation": "La méthylation transforme l'amine en ammonium quaternaire."
      }
    ],
    "explanation": "Les glycérophospholipides sont amphiphiles : tête phosphatée polaire et deux chaînes acyles hydrophobes. La phosphatidylcholine est un glycérophospholipide majeur à tête choline, historiquement appelé lécithine."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant la phosphatidylsérine PS, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "PS est enrichie dans le feuillet cytosolique de nombreuses membranes plasmatiques.",
        "correct": true,
        "explanation": "Son externalisation est un signal cellulaire important."
      },
      {
        "content": "PS est un triacylglycérol neutre.",
        "correct": false,
        "explanation": "Elle porte un phosphate et une tête sérine."
      },
      {
        "content": "Sa tête polaire contient de la sérine.",
        "correct": true,
        "explanation": "La sérine est liée au phosphate."
      },
      {
        "content": "Elle appartient aux glycérophospholipides.",
        "correct": true,
        "explanation": "Elle possède classiquement deux chaînes acyles."
      },
      {
        "content": "La sérine n'est jamais liée à un phosphate dans PS.",
        "correct": false,
        "explanation": "Elle constitue précisément la tête polaire."
      }
    ],
    "explanation": "La phosphatidylsérine est le glycérophospholipide à tête sérine."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle tête polaire définit la phosphatidyléthanolamine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "éthanolamine",
        "ethanolamine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La phosphatidyléthanolamine est un glycérophospholipide à tête éthanolamine."
  }
];
