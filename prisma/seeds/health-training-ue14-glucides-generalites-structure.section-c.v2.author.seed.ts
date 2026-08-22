import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.1 – Section C – Isomérie, énantiomérie et épimérie */
export const UE14_BIOCH_CH1_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'isomérie de constitution des oses, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une isomérie de fonction peut distinguer un aldose d'un cétose.",
        "correct": true,
        "explanation": "La nature ou la position du carbonyle diffère."
      },
      {
        "content": "Deux isomères de constitution ont la même formule brute.",
        "correct": true,
        "explanation": "Leur connectivité diffère."
      },
      {
        "content": "Glycéraldéhyde et dihydroxyacétone sont isomères de fonction.",
        "correct": true,
        "explanation": "Ils ont même formule brute mais aldéhyde versus cétone."
      },
      {
        "content": "Une isomérie de fonction ne change jamais la connectivité.",
        "correct": false,
        "explanation": "Elle modifie l'organisation des liaisons."
      },
      {
        "content": "Glycéraldéhyde et dihydroxyacétone sont énantiomères.",
        "correct": false,
        "explanation": "Ils diffèrent par leur fonction."
      }
    ],
    "explanation": "Les isomères de constitution partagent une formule brute mais diffèrent par la connectivité."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de les énantiomères, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les enzymes sont incapables de distinguer des énantiomères.",
        "correct": false,
        "explanation": "Les systèmes biologiques sont chiraux."
      },
      {
        "content": "Deux énantiomères ont des formules brutes différentes.",
        "correct": false,
        "explanation": "Ils ont la même formule brute."
      },
      {
        "content": "Un environnement biologique chiral peut distinguer deux énantiomères.",
        "correct": true,
        "explanation": "Les enzymes et récepteurs sont stéréosélectifs."
      },
      {
        "content": "Glucose et galactose sont énantiomères.",
        "correct": false,
        "explanation": "Ils sont épimères en C4."
      },
      {
        "content": "Deux énantiomères sont toujours superposables.",
        "correct": false,
        "explanation": "La non-superposabilité est essentielle."
      }
    ],
    "explanation": "Les énantiomères sont des images miroir non superposables."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme général désigne deux stéréoisomères non images miroir l'un de l'autre ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "diastéréoisomères",
        "diastereoisomeres",
        "diastéréoisomère",
        "diastereoisomere"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les diastéréoisomères ne sont pas images miroir ; les épimères en sont un cas particulier."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'épimérie, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Deux épimères diffèrent par la configuration d'un seul centre stéréogène.",
        "correct": true,
        "explanation": "Les autres centres comparables restent identiques."
      },
      {
        "content": "Deux épimères diffèrent à tous leurs centres stéréogènes.",
        "correct": false,
        "explanation": "Ils diffèrent à un seul centre."
      },
      {
        "content": "Glucose et fructose sont épimères.",
        "correct": false,
        "explanation": "Ils sont isomères de fonction."
      },
      {
        "content": "D-glucose et D-mannose sont épimères en C2.",
        "correct": true,
        "explanation": "Leur différence porte sur C2."
      },
      {
        "content": "Glucose et mannose sont épimères en C4.",
        "correct": false,
        "explanation": "Ils le sont en C2."
      }
    ],
    "explanation": "L'épimérie ne concerne qu'un centre stéréogène ; mannose C2 et galactose C4 sont les repères majeurs du glucose."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de glucose et galactose, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le galactose est un cétose.",
        "correct": false,
        "explanation": "C'est un aldose."
      },
      {
        "content": "Le lactose associe fructose et galactose.",
        "correct": false,
        "explanation": "Il associe galactose et glucose."
      },
      {
        "content": "Galactose et glucose sont énantiomères.",
        "correct": false,
        "explanation": "Ils sont diastéréoisomères épimères."
      },
      {
        "content": "Le galactose entre dans la composition du lactose.",
        "correct": true,
        "explanation": "Le lactose associe galactose et glucose."
      },
      {
        "content": "Le galactose est épimère C2 du glucose.",
        "correct": false,
        "explanation": "C2 correspond au mannose."
      }
    ],
    "explanation": "Galactose et glucose sont des aldohexoses épimères en C4."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur glucose et mannose, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Mannose et glucose sont énantiomères.",
        "correct": false,
        "explanation": "Ils sont épimères."
      },
      {
        "content": "Le mannose est épimère C4 du glucose.",
        "correct": false,
        "explanation": "C4 correspond au galactose."
      },
      {
        "content": "La réduction du mannose peut conduire au mannitol.",
        "correct": true,
        "explanation": "Le carbonyle est réduit en alcool."
      },
      {
        "content": "Le mannose entre dans des glycoconjugués.",
        "correct": true,
        "explanation": "Il est fréquent dans les oligosaccharides de glycoprotéines."
      },
      {
        "content": "Le mannose est absent de tous les glycoconjugués humains.",
        "correct": false,
        "explanation": "Il est fréquent dans les N-glycanes."
      }
    ],
    "explanation": "Mannose et glucose sont épimères en C2.",
    "requiredSelectionCount": 2
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les épimérases et la galactosémie, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'UDP-galactose 4-épimérase agit au carbone 2.",
        "correct": false,
        "explanation": "Elle agit sur la configuration en C4."
      },
      {
        "content": "Un déficit de cette épimérase peut provoquer une forme de galactosémie.",
        "correct": true,
        "explanation": "Il existe plusieurs causes enzymatiques de galactosémie."
      },
      {
        "content": "L'UDP-galactose 4-épimérase interconvertit UDP-galactose et UDP-glucose.",
        "correct": true,
        "explanation": "Elle agit au niveau du carbone 4."
      },
      {
        "content": "Une épimérase modifie la configuration d'un centre stéréogène sans changer la formule brute.",
        "correct": true,
        "explanation": "Elle catalyse une stéréoisomérisation."
      },
      {
        "content": "La galactosémie classique est le plus souvent liée à un déficit en GALT.",
        "correct": true,
        "explanation": "Il faut distinguer les différents défauts enzymatiques."
      }
    ],
    "explanation": "Les épimérases changent la configuration d'un centre précis ; les galactosémies ont plusieurs causes enzymatiques."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle représentation plane classique permet de comparer la configuration des oses ouverts ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "projection de Fischer",
        "Fischer",
        "représentation de Fischer",
        "representation de Fischer"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La formule brute ne suffit pas à définir la stéréochimie d'un ose."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur l'isomérie de constitution des oses, laquelle est exacte ?",
    "choices": [
      {
        "content": "Glycéraldéhyde et dihydroxyacétone sont énantiomères.",
        "correct": false,
        "explanation": "Ils diffèrent par leur fonction."
      },
      {
        "content": "La formule $\\mathrm{C_6H_{12}O_6}$ identifie uniquement le glucose.",
        "correct": false,
        "explanation": "Fructose, galactose et mannose partagent cette formule."
      },
      {
        "content": "La formule brute seule ne détermine pas l'identité d'un ose.",
        "correct": true,
        "explanation": "Plusieurs isomères peuvent partager la même formule."
      },
      {
        "content": "Une isomérie de fonction ne change jamais la connectivité.",
        "correct": false,
        "explanation": "Elle modifie l'organisation des liaisons."
      },
      {
        "content": "Deux isomères de constitution ont nécessairement des formules brutes différentes.",
        "correct": false,
        "explanation": "Ils ont la même formule brute."
      }
    ],
    "explanation": "Les isomères de constitution partagent une formule brute mais diffèrent par la connectivité."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les énantiomères, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Deux énantiomères sont images l'un de l'autre dans un miroir et non superposables.",
        "correct": true,
        "explanation": "Leurs configurations sont opposées à tous les centres correspondants."
      },
      {
        "content": "D-glucose et L-glucose sont énantiomères.",
        "correct": true,
        "explanation": "Toutes leurs configurations stéréogènes sont inversées."
      },
      {
        "content": "Deux énantiomères ont des formules brutes différentes.",
        "correct": false,
        "explanation": "Ils ont la même formule brute."
      },
      {
        "content": "Deux énantiomères ont des propriétés physiques très proches en milieu achiral.",
        "correct": true,
        "explanation": "Le pouvoir rotatoire présente des signes opposés."
      },
      {
        "content": "Un environnement biologique chiral peut distinguer deux énantiomères.",
        "correct": true,
        "explanation": "Les enzymes et récepteurs sont stéréosélectifs."
      }
    ],
    "explanation": "Les énantiomères sont des images miroir non superposables."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'isomérie de constitution des oses, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Deux isomères de constitution ont la même formule brute.",
        "correct": true,
        "explanation": "Leur connectivité diffère."
      },
      {
        "content": "Une isomérie de fonction peut distinguer un aldose d'un cétose.",
        "correct": true,
        "explanation": "La nature ou la position du carbonyle diffère."
      },
      {
        "content": "Glycéraldéhyde et dihydroxyacétone sont isomères de fonction.",
        "correct": true,
        "explanation": "Ils ont même formule brute mais aldéhyde versus cétone."
      },
      {
        "content": "La formule brute seule ne détermine pas l'identité d'un ose.",
        "correct": true,
        "explanation": "Plusieurs isomères peuvent partager la même formule."
      },
      {
        "content": "Une isomérie de fonction ne change jamais la connectivité.",
        "correct": false,
        "explanation": "Elle modifie l'organisation des liaisons."
      }
    ],
    "explanation": "Les isomères de constitution partagent une formule brute mais diffèrent par la connectivité."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel terme désigne deux stéréoisomères images miroir non superposables ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "énantiomères",
        "enantiomeres",
        "énantiomère",
        "enantiomere"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les énantiomères sont des images miroir non superposables."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur les diastéréoisomères, laquelle est exacte ?",
    "choices": [
      {
        "content": "Tous les diastéréoisomères sont des énantiomères.",
        "correct": false,
        "explanation": "Les deux catégories s'excluent."
      },
      {
        "content": "Les épimères diffèrent à tous les centres stéréogènes.",
        "correct": false,
        "explanation": "Ils diffèrent à un seul."
      },
      {
        "content": "Deux diastéréoisomères doivent différer par leur formule brute.",
        "correct": false,
        "explanation": "Ils ont la même formule brute."
      },
      {
        "content": "D-glucose et L-glucose sont diastéréoisomères.",
        "correct": false,
        "explanation": "Ils sont énantiomères."
      },
      {
        "content": "Deux épimères sont des diastéréoisomères particuliers.",
        "correct": true,
        "explanation": "Ils diffèrent à un seul centre stéréogène."
      }
    ],
    "explanation": "Les diastéréoisomères ne sont pas images miroir ; les épimères en sont un cas particulier."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'épimérie, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "D-glucose et D-mannose sont épimères en C2.",
        "correct": true,
        "explanation": "Leur différence porte sur C2."
      },
      {
        "content": "Glucose et mannose sont épimères en C4.",
        "correct": false,
        "explanation": "Ils le sont en C2."
      },
      {
        "content": "Glucose et galactose sont épimères en C2.",
        "correct": false,
        "explanation": "Ils le sont en C4."
      },
      {
        "content": "Deux épimères diffèrent à tous leurs centres stéréogènes.",
        "correct": false,
        "explanation": "Ils diffèrent à un seul centre."
      },
      {
        "content": "D-glucose et D-galactose sont épimères en C4.",
        "correct": true,
        "explanation": "Leur différence porte sur C4."
      }
    ],
    "explanation": "L'épimérie ne concerne qu'un centre stéréogène ; mannose C2 et galactose C4 sont les repères majeurs du glucose."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de glucose et galactose, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Le galactose est épimère C4 du glucose.",
        "correct": true,
        "explanation": "Un seul centre les distingue."
      },
      {
        "content": "Le galactose entre dans la composition du lactose.",
        "correct": true,
        "explanation": "Le lactose associe galactose et glucose."
      },
      {
        "content": "Le lactose associe fructose et galactose.",
        "correct": false,
        "explanation": "Il associe galactose et glucose."
      },
      {
        "content": "Le galactose est un cétose.",
        "correct": false,
        "explanation": "C'est un aldose."
      },
      {
        "content": "Galactose et glucose sont énantiomères.",
        "correct": false,
        "explanation": "Ils sont diastéréoisomères épimères."
      }
    ],
    "explanation": "Galactose et glucose sont des aldohexoses épimères en C4.",
    "requiredSelectionCount": 2
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur glucose et mannose, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Mannose et glucose sont énantiomères.",
        "correct": false,
        "explanation": "Ils sont épimères."
      },
      {
        "content": "Le mannose est épimère C2 du glucose.",
        "correct": true,
        "explanation": "Un seul centre les distingue."
      },
      {
        "content": "Le mannose est absent de tous les glycoconjugués humains.",
        "correct": false,
        "explanation": "Il est fréquent dans les N-glycanes."
      },
      {
        "content": "Le mannose est un cétose.",
        "correct": false,
        "explanation": "C'est un aldose."
      },
      {
        "content": "La réduction du mannose peut conduire au mannitol.",
        "correct": true,
        "explanation": "Le carbonyle est réduit en alcool."
      }
    ],
    "explanation": "Mannose et glucose sont épimères en C2."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type d'enzyme catalyse l'interconversion de deux épimères ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "épimérase",
        "epimerase",
        "une épimérase",
        "une epimerase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les épimérases changent la configuration d'un centre précis ; les galactosémies ont plusieurs causes enzymatiques."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de la formule brute et la stéréochimie, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Une différence stéréochimique implique nécessairement un atome supplémentaire.",
        "correct": false,
        "explanation": "La composition atomique reste identique."
      },
      {
        "content": "Deux épimères ont la même formule brute.",
        "correct": true,
        "explanation": "Ils ne diffèrent que par configuration."
      },
      {
        "content": "Une formule brute identifie toujours un seul stéréoisomère.",
        "correct": false,
        "explanation": "Plusieurs stéréoisomères partagent la même formule."
      },
      {
        "content": "Les projections de Fischer sont inutiles pour comparer les oses.",
        "correct": false,
        "explanation": "Elles montrent précisément les configurations."
      },
      {
        "content": "Glucose et galactose ont des nombres de carbones différents.",
        "correct": false,
        "explanation": "Ils ont chacun six carbones."
      }
    ],
    "explanation": "La formule brute ne suffit pas à définir la stéréochimie d'un ose."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'isomérie de constitution des oses, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Une isomérie de fonction ne change jamais la connectivité.",
        "correct": false,
        "explanation": "Elle modifie l'organisation des liaisons."
      },
      {
        "content": "Une isomérie de fonction peut distinguer un aldose d'un cétose.",
        "correct": true,
        "explanation": "La nature ou la position du carbonyle diffère."
      },
      {
        "content": "Deux isomères de constitution ont la même formule brute.",
        "correct": true,
        "explanation": "Leur connectivité diffère."
      },
      {
        "content": "Glycéraldéhyde et dihydroxyacétone sont énantiomères.",
        "correct": false,
        "explanation": "Ils diffèrent par leur fonction."
      },
      {
        "content": "La formule $\\mathrm{C_6H_{12}O_6}$ identifie uniquement le glucose.",
        "correct": false,
        "explanation": "Fructose, galactose et mannose partagent cette formule."
      }
    ],
    "explanation": "Les isomères de constitution partagent une formule brute mais diffèrent par la connectivité."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Deux énantiomères ont des formules brutes différentes.",
        "correct": false,
        "explanation": "Ils ont la même formule brute."
      },
      {
        "content": "Le galactose est épimère C2 du glucose.",
        "correct": false,
        "explanation": "C2 correspond au mannose."
      },
      {
        "content": "Glucose et galactose sont énantiomères.",
        "correct": false,
        "explanation": "Ils sont épimères en C4."
      },
      {
        "content": "Le galactose entre dans la composition du lactose.",
        "correct": true,
        "explanation": "Le lactose associe galactose et glucose."
      },
      {
        "content": "Deux énantiomères ont des propriétés physiques très proches en milieu achiral.",
        "correct": true,
        "explanation": "Le pouvoir rotatoire présente des signes opposés."
      },
      {
        "content": "Le lactose associe fructose et galactose.",
        "correct": false,
        "explanation": "Il associe galactose et glucose."
      },
      {
        "content": "Le galactose est épimère C4 du glucose.",
        "correct": true,
        "explanation": "Un seul centre les distingue."
      },
      {
        "content": "Le métabolisme du galactose rejoint celui du glucose après transformations enzymatiques.",
        "correct": true,
        "explanation": "Les voies sont interconnectées."
      },
      {
        "content": "Deux énantiomères sont images l'un de l'autre dans un miroir et non superposables.",
        "correct": true,
        "explanation": "Leurs configurations sont opposées à tous les centres correspondants."
      },
      {
        "content": "Galactose et glucose sont énantiomères.",
        "correct": false,
        "explanation": "Ils sont diastéréoisomères épimères."
      }
    ],
    "explanation": "Les énantiomères sont des images miroir non superposables. Galactose et glucose sont des aldohexoses épimères en C4."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de les diastéréoisomères, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Deux diastéréoisomères sont des stéréoisomères qui ne sont pas images miroir l'un de l'autre.",
        "correct": true,
        "explanation": "Ils diffèrent par une partie seulement de leurs configurations."
      },
      {
        "content": "Deux diastéréoisomères doivent différer par leur formule brute.",
        "correct": false,
        "explanation": "Ils ont la même formule brute."
      },
      {
        "content": "Deux épimères sont des diastéréoisomères particuliers.",
        "correct": true,
        "explanation": "Ils diffèrent à un seul centre stéréogène."
      },
      {
        "content": "Les épimères diffèrent à tous les centres stéréogènes.",
        "correct": false,
        "explanation": "Ils diffèrent à un seul."
      },
      {
        "content": "D-glucose et D-mannose sont diastéréoisomères.",
        "correct": true,
        "explanation": "Ils diffèrent en C2."
      }
    ],
    "explanation": "Les diastéréoisomères ne sont pas images miroir ; les épimères en sont un cas particulier."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À quel carbone le D-mannose est-il épimère du D-glucose ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "L'épimérie ne concerne qu'un centre stéréogène ; mannose C2 et galactose C4 sont les repères majeurs du glucose."
  }
];
