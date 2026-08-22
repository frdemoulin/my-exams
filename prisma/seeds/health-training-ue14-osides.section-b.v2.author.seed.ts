import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.3 – Section B – Amidon et glycogène */
export const UE14_BIOCH_CH3_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les polyosides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un polyoside est constitué d'un grand nombre de résidus d'oses ou dérivés.",
        "correct": true,
        "explanation": "Il s'agit d'un polymère glucidique."
      },
      {
        "content": "Un homoglycane répète un seul type de monosaccharide.",
        "correct": true,
        "explanation": "Amidon, glycogène et cellulose sont des glucanes."
      },
      {
        "content": "Les polyosides peuvent avoir des rôles de réserve ou de structure.",
        "correct": true,
        "explanation": "Amidon/glycogène versus cellulose."
      },
      {
        "content": "Les polyosides sont des protéines.",
        "correct": false,
        "explanation": "Ce sont des glucides."
      },
      {
        "content": "Un homoglycane contient de nombreux types d'oses différents.",
        "correct": false,
        "explanation": "Il répète un seul type."
      }
    ],
    "explanation": "Les polyosides peuvent être homogènes ou hétérogènes et remplir des fonctions de réserve ou de structure."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de l'amylose, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "L'amylose est un polymère bêta(1→4) de glucose.",
        "correct": false,
        "explanation": "Cela décrit la cellulose."
      },
      {
        "content": "Elle est constituée de fructose uniquement.",
        "correct": false,
        "explanation": "Elle est constituée de glucose."
      },
      {
        "content": "L'amylose est une protéine.",
        "correct": false,
        "explanation": "C'est un glucane."
      },
      {
        "content": "L'amylose est la composante la plus ramifiée du glycogène.",
        "correct": false,
        "explanation": "Elle est essentiellement linéaire."
      },
      {
        "content": "Elle constitue une fraction de l'amidon.",
        "correct": true,
        "explanation": "L'amidon associe amylose et amylopectine."
      }
    ],
    "explanation": "L'amylose est un glucane essentiellement linéaire en alpha(1→4)."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle liaison forme les points de branchement de l'amylopectine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alpha(1→6)",
        "α(1→6)",
        "alpha 1-6",
        "α1→6"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'amylopectine est la fraction ramifiée de l'amidon, avec chaînes alpha(1→4) et branches alpha(1→6)."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'amidon, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les alpha-amylases hydrolysent des liaisons alpha(1→4) de l'amidon.",
        "correct": true,
        "explanation": "Elles produisent notamment des dextrines et du maltose."
      },
      {
        "content": "L'amidon est constitué de cellulose uniquement.",
        "correct": false,
        "explanation": "Il contient amylose et amylopectine."
      },
      {
        "content": "Il associe amylose et amylopectine.",
        "correct": true,
        "explanation": "Les proportions varient selon l'origine végétale."
      },
      {
        "content": "L'amidon est uniquement bêta(1→4).",
        "correct": false,
        "explanation": "Ses liaisons principales sont alpha."
      },
      {
        "content": "Les amylases humaines hydrolysent directement toutes les branches alpha(1→6).",
        "correct": false,
        "explanation": "Des activités débranchantes spécifiques sont nécessaires."
      }
    ],
    "explanation": "L'amidon est une réserve végétale combinant amylose linéaire et amylopectine ramifiée."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de le glycogène, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "La glycogénine est une enzyme digestive intestinale du lactose.",
        "correct": false,
        "explanation": "C'est une protéine amorce du glycogène."
      },
      {
        "content": "Le glycogène est la réserve végétale majeure.",
        "correct": false,
        "explanation": "Il est la réserve animale."
      },
      {
        "content": "Le glycogène est la principale réserve glucidique animale.",
        "correct": true,
        "explanation": "Il est particulièrement abondant dans le foie et le muscle."
      },
      {
        "content": "Le glycogène est un polymère bêta(1→4) de glucose.",
        "correct": false,
        "explanation": "Cela décrit la cellulose."
      },
      {
        "content": "Il ne possède aucun branchement.",
        "correct": false,
        "explanation": "Il est fortement ramifié."
      }
    ],
    "explanation": "Le glycogène est un glucane de réserve animale très ramifié, construit autour de la glycogénine."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur la comparaison glycogène-amylopectine, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Les deux polymères possèdent des chaînes alpha(1→4).",
        "correct": true,
        "explanation": "Le squelette linéaire est comparable."
      },
      {
        "content": "Une ramification élevée augmente le nombre d'extrémités non réductrices accessibles aux enzymes.",
        "correct": true,
        "explanation": "Cela favorise une mobilisation rapide."
      },
      {
        "content": "Les deux polymères sont constitués principalement de fructose.",
        "correct": false,
        "explanation": "Ils sont des glucanes."
      },
      {
        "content": "Le glycogène est strictement linéaire.",
        "correct": false,
        "explanation": "Il est très ramifié."
      },
      {
        "content": "Une ramification plus forte diminue le nombre d'extrémités.",
        "correct": false,
        "explanation": "Elle l'augmente."
      }
    ],
    "explanation": "Glycogène et amylopectine partagent les liaisons alpha(1→4)/alpha(1→6), mais le glycogène est plus ramifié.",
    "requiredSelectionCount": 2
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la digestion de l'amidon, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La cuisson dans l'eau peut provoquer une gélatinisation de l'amidon.",
        "correct": true,
        "explanation": "Les granules absorbent l'eau et se désorganisent."
      },
      {
        "content": "Les alpha-amylases hydrolysent des liaisons alpha(1→4) de l'amidon.",
        "correct": true,
        "explanation": "Elles produisent notamment des dextrines et du maltose."
      },
      {
        "content": "L'amidon est la réserve glucidique principale du muscle humain.",
        "correct": false,
        "explanation": "Le muscle stocke du glycogène."
      },
      {
        "content": "Il associe amylose et amylopectine.",
        "correct": true,
        "explanation": "Les proportions varient selon l'origine végétale."
      },
      {
        "content": "Les amylases humaines hydrolysent directement toutes les branches alpha(1→6).",
        "correct": false,
        "explanation": "Des activités débranchantes spécifiques sont nécessaires."
      }
    ],
    "explanation": "L'amidon est une réserve végétale combinant amylose linéaire et amylopectine ramifiée."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Citez les deux principaux tissus de stockage du glycogène chez l'être humain.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "foie et muscle",
        "muscle et foie",
        "foie et muscles",
        "muscles et foie"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le foie et le muscle sont les principaux réservoirs de glycogène, avec des finalités métaboliques différentes."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur les polyosides, laquelle est exacte ?",
    "choices": [
      {
        "content": "Un polyoside est constitué d'un grand nombre de résidus d'oses ou dérivés.",
        "correct": true,
        "explanation": "Il s'agit d'un polymère glucidique."
      },
      {
        "content": "Tous les polyosides sont de réserve.",
        "correct": false,
        "explanation": "La cellulose est structurale."
      },
      {
        "content": "Les polyosides sont des protéines.",
        "correct": false,
        "explanation": "Ce sont des glucides."
      },
      {
        "content": "Un homoglycane contient de nombreux types d'oses différents.",
        "correct": false,
        "explanation": "Il répète un seul type."
      },
      {
        "content": "Un polyoside contient toujours exactement deux résidus.",
        "correct": false,
        "explanation": "Cela décrit un diholoside."
      }
    ],
    "explanation": "Les polyosides peuvent être homogènes ou hétérogènes et remplir des fonctions de réserve ou de structure."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'amylose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'amylose est la composante la plus ramifiée du glycogène.",
        "correct": false,
        "explanation": "Elle est essentiellement linéaire."
      },
      {
        "content": "Les glucoses sont reliés principalement par des liaisons alpha(1→4).",
        "correct": true,
        "explanation": "Cette liaison construit la chaîne."
      },
      {
        "content": "Elle est constituée de fructose uniquement.",
        "correct": false,
        "explanation": "Elle est constituée de glucose."
      },
      {
        "content": "Elle constitue une fraction de l'amidon.",
        "correct": true,
        "explanation": "L'amidon associe amylose et amylopectine."
      },
      {
        "content": "L'amylose est une protéine.",
        "correct": false,
        "explanation": "C'est un glucane."
      }
    ],
    "explanation": "L'amylose est un glucane essentiellement linéaire en alpha(1→4)."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les polyosides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Tous les polyosides sont de réserve.",
        "correct": false,
        "explanation": "La cellulose est structurale."
      },
      {
        "content": "Un homoglycane contient de nombreux types d'oses différents.",
        "correct": false,
        "explanation": "Il répète un seul type."
      },
      {
        "content": "Les polyosides sont des protéines.",
        "correct": false,
        "explanation": "Ce sont des glucides."
      },
      {
        "content": "Les polyosides peuvent avoir des rôles de réserve ou de structure.",
        "correct": true,
        "explanation": "Amidon/glycogène versus cellulose."
      },
      {
        "content": "Un polyoside est constitué d'un grand nombre de résidus d'oses ou dérivés.",
        "correct": true,
        "explanation": "Il s'agit d'un polymère glucidique."
      }
    ],
    "explanation": "Les polyosides peuvent être homogènes ou hétérogènes et remplir des fonctions de réserve ou de structure."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle liaison glycosidique principale relie les glucoses de l'amylose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alpha(1→4)",
        "α(1→4)",
        "alpha 1-4",
        "α1→4"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'amylose est un glucane essentiellement linéaire en alpha(1→4)."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur l'amylopectine, laquelle est exacte ?",
    "choices": [
      {
        "content": "Les points de branchement utilisent des liaisons alpha(1→6).",
        "correct": true,
        "explanation": "Le C1 d'un glucose se lie au C6 d'un autre."
      },
      {
        "content": "L'amylopectine est un polymère strictement linéaire.",
        "correct": false,
        "explanation": "Elle est ramifiée."
      },
      {
        "content": "Ses branches utilisent des liaisons bêta(1→4).",
        "correct": false,
        "explanation": "Elles utilisent alpha(1→6)."
      },
      {
        "content": "Elle est la réserve animale principale.",
        "correct": false,
        "explanation": "L'amidon est végétal ; le glycogène est animal."
      },
      {
        "content": "Elle est composée de galactose et fructose alternés.",
        "correct": false,
        "explanation": "C'est un homoglycane de glucose."
      }
    ],
    "explanation": "L'amylopectine est la fraction ramifiée de l'amidon, avec chaînes alpha(1→4) et branches alpha(1→6)."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'amidon, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'amidon est uniquement bêta(1→4).",
        "correct": false,
        "explanation": "Ses liaisons principales sont alpha."
      },
      {
        "content": "Les alpha-amylases hydrolysent des liaisons alpha(1→4) de l'amidon.",
        "correct": true,
        "explanation": "Elles produisent notamment des dextrines et du maltose."
      },
      {
        "content": "L'amidon est la réserve glucidique principale du muscle humain.",
        "correct": false,
        "explanation": "Le muscle stocke du glycogène."
      },
      {
        "content": "Il associe amylose et amylopectine.",
        "correct": true,
        "explanation": "Les proportions varient selon l'origine végétale."
      },
      {
        "content": "La cuisson dans l'eau peut provoquer une gélatinisation de l'amidon.",
        "correct": true,
        "explanation": "Les granules absorbent l'eau et se désorganisent."
      }
    ],
    "explanation": "L'amidon est une réserve végétale combinant amylose linéaire et amylopectine ramifiée."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de le glycogène, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Il ne possède aucun branchement.",
        "correct": false,
        "explanation": "Il est fortement ramifié."
      },
      {
        "content": "Le glycogène est un polymère bêta(1→4) de glucose.",
        "correct": false,
        "explanation": "Cela décrit la cellulose."
      },
      {
        "content": "La glycogénine sert de protéine amorce au centre d'une particule de glycogène.",
        "correct": true,
        "explanation": "Elle initie la synthèse."
      },
      {
        "content": "Le glycogène est la réserve végétale majeure.",
        "correct": false,
        "explanation": "Il est la réserve animale."
      },
      {
        "content": "Le glycogène est la principale réserve glucidique animale.",
        "correct": true,
        "explanation": "Il est particulièrement abondant dans le foie et le muscle."
      }
    ],
    "explanation": "Le glycogène est un glucane de réserve animale très ramifié, construit autour de la glycogénine.",
    "requiredSelectionCount": 2
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la comparaison glycogène-amylopectine, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "L'amylopectine utilise uniquement des liaisons bêta.",
        "correct": false,
        "explanation": "Elle utilise des liaisons alpha."
      },
      {
        "content": "Le glycogène est généralement plus ramifié.",
        "correct": true,
        "explanation": "Ses branches sont plus rapprochées."
      },
      {
        "content": "Les deux possèdent des branches alpha(1→6).",
        "correct": true,
        "explanation": "Les points de branchement ont la même nature."
      },
      {
        "content": "Les deux polymères sont constitués principalement de fructose.",
        "correct": false,
        "explanation": "Ils sont des glucanes."
      },
      {
        "content": "Une ramification plus forte diminue le nombre d'extrémités.",
        "correct": false,
        "explanation": "Elle l'augmente."
      }
    ],
    "explanation": "Glycogène et amylopectine partagent les liaisons alpha(1→4)/alpha(1→6), mais le glycogène est plus ramifié."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle enzyme pancréatique hydrolyse les liaisons alpha(1→4) de l'amidon ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alpha-amylase",
        "α-amylase",
        "amylase pancréatique",
        "alpha amylase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La digestion de l'amidon associe alpha-amylases et enzymes de bordure en brosse."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de la localisation des réserves de glycogène, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le glycogène musculaire libère directement de grandes quantités de glucose libre dans le sang.",
        "correct": false,
        "explanation": "Le muscle ne possède pas de glucose-6-phosphatase fonctionnelle pour cette fonction systémique."
      },
      {
        "content": "Le glycogène est stocké dans le noyau sous forme de chromosomes.",
        "correct": false,
        "explanation": "Il est cytosolique."
      },
      {
        "content": "Le glycogène est stocké uniquement dans le tissu adipeux.",
        "correct": false,
        "explanation": "Foie et muscle sont majeurs."
      },
      {
        "content": "Les neurones sont le principal site de stockage massif de glycogène.",
        "correct": false,
        "explanation": "Le stockage neuronal est très faible."
      },
      {
        "content": "Les réserves de glycogène sont limitées par rapport aux réserves lipidiques.",
        "correct": true,
        "explanation": "Le stockage glucidique est moins dense énergétiquement."
      }
    ],
    "explanation": "Le foie et le muscle sont les principaux réservoirs de glycogène, avec des finalités métaboliques différentes."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les polyosides, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Les polyosides peuvent avoir des rôles de réserve ou de structure.",
        "correct": true,
        "explanation": "Amidon/glycogène versus cellulose."
      },
      {
        "content": "Un polyoside contient toujours exactement deux résidus.",
        "correct": false,
        "explanation": "Cela décrit un diholoside."
      },
      {
        "content": "Un polyoside est constitué d'un grand nombre de résidus d'oses ou dérivés.",
        "correct": true,
        "explanation": "Il s'agit d'un polymère glucidique."
      },
      {
        "content": "Un homoglycane répète un seul type de monosaccharide.",
        "correct": true,
        "explanation": "Amidon, glycogène et cellulose sont des glucanes."
      },
      {
        "content": "Un hétéroglycane comporte plusieurs types de résidus.",
        "correct": true,
        "explanation": "De nombreux GAG sont hétéroglycanes."
      }
    ],
    "explanation": "Les polyosides peuvent être homogènes ou hétérogènes et remplir des fonctions de réserve ou de structure."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "L'amylose est un polymère bêta(1→4) de glucose.",
        "correct": false,
        "explanation": "Cela décrit la cellulose."
      },
      {
        "content": "Il est généralement plus densément ramifié que l'amylopectine.",
        "correct": true,
        "explanation": "Cette architecture multiplie les extrémités non réductrices."
      },
      {
        "content": "Il ne possède aucun branchement.",
        "correct": false,
        "explanation": "Il est fortement ramifié."
      },
      {
        "content": "Le glycogène est un polymère bêta(1→4) de glucose.",
        "correct": false,
        "explanation": "Cela décrit la cellulose."
      },
      {
        "content": "Le glycogène est la principale réserve glucidique animale.",
        "correct": true,
        "explanation": "Il est particulièrement abondant dans le foie et le muscle."
      },
      {
        "content": "Elle constitue une fraction de l'amidon.",
        "correct": true,
        "explanation": "L'amidon associe amylose et amylopectine."
      },
      {
        "content": "Il est constitué de glucose en alpha(1→4) avec branches alpha(1→6).",
        "correct": true,
        "explanation": "Son architecture ressemble à une amylopectine plus ramifiée."
      },
      {
        "content": "La glycogénine est une enzyme digestive intestinale du lactose.",
        "correct": false,
        "explanation": "C'est une protéine amorce du glycogène."
      },
      {
        "content": "L'amylose est essentiellement une chaîne linéaire de résidus de glucose.",
        "correct": true,
        "explanation": "Elle est peu ou pas ramifiée."
      },
      {
        "content": "Elle est constituée de fructose uniquement.",
        "correct": false,
        "explanation": "Elle est constituée de glucose."
      }
    ],
    "explanation": "L'amylose est un glucane essentiellement linéaire en alpha(1→4). Le glycogène est un glucane de réserve animale très ramifié, construit autour de la glycogénine."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'amylopectine, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Ses chaînes utilisent des liaisons alpha(1→4).",
        "correct": true,
        "explanation": "Elles forment les segments linéaires."
      },
      {
        "content": "Ses branches utilisent des liaisons bêta(1→4).",
        "correct": false,
        "explanation": "Elles utilisent alpha(1→6)."
      },
      {
        "content": "L'amylopectine est un glucane ramifié.",
        "correct": true,
        "explanation": "Elle constitue la fraction ramifiée de l'amidon."
      },
      {
        "content": "Elle est moins densément ramifiée que le glycogène.",
        "correct": true,
        "explanation": "Le glycogène possède des branches plus fréquentes."
      },
      {
        "content": "Elle est composée de galactose et fructose alternés.",
        "correct": false,
        "explanation": "C'est un homoglycane de glucose."
      }
    ],
    "explanation": "L'amylopectine est la fraction ramifiée de l'amidon, avec chaînes alpha(1→4) et branches alpha(1→6)."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelles sont les deux grandes fractions glucidiques de l'amidon ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "amylose et amylopectine",
        "amylopectine et amylose"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'amidon est une réserve végétale combinant amylose linéaire et amylopectine ramifiée."
  }
];
