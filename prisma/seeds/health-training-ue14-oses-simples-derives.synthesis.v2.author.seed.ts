import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.2 – Synthèse */
export const UE14_BIOCH_CH2_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le glucose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La glycémie mesure le galactose sanguin.",
        "correct": false,
        "explanation": "Elle mesure le glucose."
      },
      {
        "content": "Le glucose est un aldohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte contient un aldéhyde et six carbones."
      },
      {
        "content": "Le glucose est exclusivement sous forme ouverte en eau.",
        "correct": false,
        "explanation": "Les formes cycliques dominent."
      },
      {
        "content": "Le glucose est un pentose.",
        "correct": false,
        "explanation": "Il possède six carbones."
      },
      {
        "content": "Le glucose est majoritairement cyclique en solution aqueuse.",
        "correct": true,
        "explanation": "Le glucopyranose domine."
      }
    ],
    "explanation": "Le glucose est l'aldohexose énergétique de référence."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À quel carbone le galactose est-il épimère du glucose ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Le galactose est un aldohexose épimère C4 du glucose."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur le mannose, laquelle est exacte ?",
    "choices": [
      {
        "content": "Le mannose est absent des glycoprotéines.",
        "correct": false,
        "explanation": "Il y est fréquent."
      },
      {
        "content": "Il est fréquent dans les N-glycanes de glycoprotéines.",
        "correct": true,
        "explanation": "Les oligosaccharides N-liés comportent souvent du mannose."
      },
      {
        "content": "Il est épimère C4 du glucose.",
        "correct": false,
        "explanation": "C4 correspond au galactose."
      },
      {
        "content": "Sa réduction donne uniquement du xylitol.",
        "correct": false,
        "explanation": "Le mannitol est le polyol attendu."
      },
      {
        "content": "Le mannose est un cétose.",
        "correct": false,
        "explanation": "C'est un aldose."
      }
    ],
    "explanation": "Le mannose est un aldohexose épimère C2 du glucose."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le fructose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il peut adopter une forme furanose.",
        "correct": true,
        "explanation": "Le fructofuranose est courant dans le saccharose."
      },
      {
        "content": "Il est épimère C4 du glucose.",
        "correct": false,
        "explanation": "Ils diffèrent d'abord par la fonction carbonyle."
      },
      {
        "content": "Le fructose est un aldopentose.",
        "correct": false,
        "explanation": "C'est un cétohexose."
      },
      {
        "content": "Le saccharose ne contient aucun fructose.",
        "correct": false,
        "explanation": "Il en contient un résidu."
      },
      {
        "content": "Il entre dans la composition du saccharose.",
        "correct": true,
        "explanation": "Le saccharose associe glucose et fructose."
      }
    ],
    "explanation": "Le fructose est le cétohexose majeur, présent notamment dans le saccharose."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de le ribose et le 2-désoxyribose, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Le 2-désoxyribose est le sucre de l'ADN.",
        "correct": true,
        "explanation": "Il manque l'OH en C2 par rapport au ribose."
      },
      {
        "content": "La différence ribose/désoxyribose porte sur C5.",
        "correct": false,
        "explanation": "Elle porte sur C2."
      },
      {
        "content": "Le ribose est un cétose.",
        "correct": false,
        "explanation": "C'est un aldopentose."
      },
      {
        "content": "Dans les nucléotides, ces pentoses sont sous forme furanose.",
        "correct": true,
        "explanation": "Le cycle à cinq sommets est la forme structurale usuelle."
      },
      {
        "content": "Le ribose est un hexose.",
        "correct": false,
        "explanation": "Il possède cinq carbones."
      }
    ],
    "explanation": "Ribose et 2-désoxyribose se distinguent par l'OH porté ou non par C2.",
    "requiredSelectionCount": 2
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les propriétés physiques des oses simples, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La cyclisation n'empêche pas la présence de nombreux groupes hydroxyle.",
        "correct": true,
        "explanation": "Les formes cycliques restent polaires."
      },
      {
        "content": "La présence d'OH rend les oses apolaires.",
        "correct": false,
        "explanation": "Elle augmente leur polarité."
      },
      {
        "content": "Les oses sont généralement très hydrophiles.",
        "correct": true,
        "explanation": "Leurs nombreux groupes hydroxyle interagissent avec l'eau."
      },
      {
        "content": "Les oses simples sont souvent très solubles dans l'eau.",
        "correct": true,
        "explanation": "Les liaisons hydrogène favorisent leur solvatation."
      },
      {
        "content": "Les oses sont généralement des solides moléculaires peu volatils.",
        "correct": true,
        "explanation": "Leur réseau de liaisons hydrogène renforce la cohésion."
      }
    ],
    "explanation": "Les nombreux groupes hydroxyle rendent les oses polaires et hydrosolubles."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle couleur caractéristique présente le précipité lors d'un test de Fehling positif ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "rouge brique",
        "rouge",
        "rouge-brique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pouvoir réducteur dépend de l'accessibilité d'une forme carbonylée ; le fructose peut être positif en milieu alcalin par isomérisation."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de les trioses phosphorylés de la glycolyse, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "DHAP est un aldohexose.",
        "correct": false,
        "explanation": "C'est un cétotriose phosphorylé."
      },
      {
        "content": "L'interconversion GAP/DHAP nécessite une transmutation nucléaire.",
        "correct": false,
        "explanation": "C'est une isomérisation enzymatique."
      },
      {
        "content": "Le glycéraldéhyde-3-phosphate est un intermédiaire de la glycolyse.",
        "correct": true,
        "explanation": "Il poursuit la phase de rendement."
      },
      {
        "content": "GAP et DHAP sont étrangers au métabolisme glucidique.",
        "correct": false,
        "explanation": "Ils sont des intermédiaires centraux de la glycolyse."
      },
      {
        "content": "Le glycéraldéhyde-3-phosphate possède six carbones.",
        "correct": false,
        "explanation": "Il en possède trois."
      }
    ],
    "explanation": "Les trioses phosphorylés GAP et DHAP sont des intermédiaires glycolytiques interconvertibles."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'acide glucuronique, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le glucuronate entre dans la composition de glycosaminoglycanes.",
        "correct": true,
        "explanation": "Il est présent dans hyaluronane et chondroïtine sulfate."
      },
      {
        "content": "Le glucuronate est un polyol dépourvu de fonction acide.",
        "correct": false,
        "explanation": "Il porte un carboxylate."
      },
      {
        "content": "Il dérive du glucose par oxydation de l'alcool primaire C6.",
        "correct": true,
        "explanation": "CH2OH devient COOH."
      },
      {
        "content": "À pH physiologique, il est largement sous forme glucuronate.",
        "correct": true,
        "explanation": "La fonction carboxylique est déprotonée."
      },
      {
        "content": "La transformation caractéristique oxyde C2 en amine.",
        "correct": false,
        "explanation": "Elle oxyde C6 en acide carboxylique."
      }
    ],
    "explanation": "L'acide glucuronique est l'acide uronique C6 du glucose."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Elle est importante dans le métabolisme hépatique de nombreux xénobiotiques.",
        "correct": true,
        "explanation": "Des UDP-glucuronosyltransférases catalysent ces réactions."
      },
      {
        "content": "La bilirubine est glucuronoconjuguée avant son excrétion biliaire.",
        "correct": true,
        "explanation": "La conjugaison augmente sa solubilité."
      },
      {
        "content": "Le mannitol est le polyol correspondant au mannose.",
        "correct": true,
        "explanation": "Il résulte de la réduction du carbonyle."
      },
      {
        "content": "Le mannitol peut être utilisé comme agent osmotique en médecine.",
        "correct": true,
        "explanation": "Il est notamment utilisé comme diurétique osmotique dans certaines indications."
      },
      {
        "content": "Le mannitol est obtenu par oxydation du mannose en acide.",
        "correct": false,
        "explanation": "C'est un produit de réduction."
      },
      {
        "content": "Elle détruit le noyau de l'acide glucuronique.",
        "correct": false,
        "explanation": "Le groupement glucuronyle est transféré."
      },
      {
        "content": "Il est plus réduit que le mannose correspondant.",
        "correct": true,
        "explanation": "Le carbonyle a été transformé en alcool."
      },
      {
        "content": "Le mannitol est un peptide.",
        "correct": false,
        "explanation": "C'est un dérivé glucidique."
      },
      {
        "content": "Le mannitol est un cétose.",
        "correct": false,
        "explanation": "Il ne possède plus de carbonyle."
      },
      {
        "content": "Elle consiste à réduire un carbonyle en alcool.",
        "correct": false,
        "explanation": "C'est une réaction de conjugaison."
      }
    ],
    "explanation": "La glucuronoconjugaison est une voie majeure de conjugaison augmentant souvent l'hydrosolubilité et l'élimination. Le mannitol est l'alditol du mannose et possède des usages médicaux osmotiques."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le glucose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le glucose est un substrat énergétique majeur.",
        "correct": true,
        "explanation": "Il alimente notamment la glycolyse."
      },
      {
        "content": "Le glucose est un pentose.",
        "correct": false,
        "explanation": "Il possède six carbones."
      },
      {
        "content": "Le glucose est un aldohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte contient un aldéhyde et six carbones."
      },
      {
        "content": "Le glucose est exclusivement sous forme ouverte en eau.",
        "correct": false,
        "explanation": "Les formes cycliques dominent."
      },
      {
        "content": "Le glucose est majoritairement cyclique en solution aqueuse.",
        "correct": true,
        "explanation": "Le glucopyranose domine."
      }
    ],
    "explanation": "Le glucose est l'aldohexose énergétique de référence."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "À quel carbone le galactose est-il épimère du glucose ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Le galactose est un aldohexose épimère C4 du glucose."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur le mannose, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Le mannose est absent des glycoprotéines.",
        "correct": false,
        "explanation": "Il y est fréquent."
      },
      {
        "content": "Sa réduction donne du mannitol.",
        "correct": true,
        "explanation": "La fonction carbonyle est réduite."
      },
      {
        "content": "Sa réduction donne uniquement du xylitol.",
        "correct": false,
        "explanation": "Le mannitol est le polyol attendu."
      },
      {
        "content": "Le mannose est un aldohexose.",
        "correct": true,
        "explanation": "Il possède une fonction aldéhyde ouverte."
      },
      {
        "content": "Il est épimère C4 du glucose.",
        "correct": false,
        "explanation": "C4 correspond au galactose."
      }
    ],
    "explanation": "Le mannose est un aldohexose épimère C2 du glucose.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le fructose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le D-fructose est lévogyre malgré sa série D.",
        "correct": true,
        "explanation": "Il illustre l'indépendance D/L et +/−."
      },
      {
        "content": "Il peut adopter une forme furanose.",
        "correct": true,
        "explanation": "Le fructofuranose est courant dans le saccharose."
      },
      {
        "content": "Le fructose est un cétohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une cétone en C2."
      },
      {
        "content": "Il entre dans la composition du saccharose.",
        "correct": true,
        "explanation": "Le saccharose associe glucose et fructose."
      },
      {
        "content": "Le saccharose ne contient aucun fructose.",
        "correct": false,
        "explanation": "Il en contient un résidu."
      }
    ],
    "explanation": "Le fructose est le cétohexose majeur, présent notamment dans le saccharose."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "À propos de le ribose et le 2-désoxyribose, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le ribose est un pentose de l'ARN.",
        "correct": true,
        "explanation": "Il entre dans les ribonucléotides."
      },
      {
        "content": "L'ADN contient du ribose non désoxygéné.",
        "correct": false,
        "explanation": "Il contient du 2-désoxyribose."
      },
      {
        "content": "Le ribose est un hexose.",
        "correct": false,
        "explanation": "Il possède cinq carbones."
      },
      {
        "content": "La différence ribose/désoxyribose porte sur C5.",
        "correct": false,
        "explanation": "Elle porte sur C2."
      },
      {
        "content": "Le ribose est un cétose.",
        "correct": false,
        "explanation": "C'est un aldopentose."
      }
    ],
    "explanation": "Ribose et 2-désoxyribose se distinguent par l'OH porté ou non par C2."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les propriétés physiques des oses simples, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Les oses sont généralement des solides moléculaires peu volatils.",
        "correct": true,
        "explanation": "Leur réseau de liaisons hydrogène renforce la cohésion."
      },
      {
        "content": "Les oses sont généralement très lipophiles.",
        "correct": false,
        "explanation": "Leurs nombreux OH les rendent hydrophiles."
      },
      {
        "content": "Les oses simples sont souvent très solubles dans l'eau.",
        "correct": true,
        "explanation": "Les liaisons hydrogène favorisent leur solvatation."
      },
      {
        "content": "La cyclisation n'empêche pas la présence de nombreux groupes hydroxyle.",
        "correct": true,
        "explanation": "Les formes cycliques restent polaires."
      },
      {
        "content": "La présence d'OH rend les oses apolaires.",
        "correct": false,
        "explanation": "Elle augmente leur polarité."
      }
    ],
    "explanation": "Les nombreux groupes hydroxyle rendent les oses polaires et hydrosolubles."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle couleur caractéristique présente le précipité lors d'un test de Fehling positif ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "rouge brique",
        "rouge",
        "rouge-brique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pouvoir réducteur dépend de l'accessibilité d'une forme carbonylée ; le fructose peut être positif en milieu alcalin par isomérisation."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "DHAP est un aldohexose.",
        "correct": false,
        "explanation": "C'est un cétotriose phosphorylé."
      },
      {
        "content": "La dihydroxyacétone phosphate est un intermédiaire de la glycolyse.",
        "correct": true,
        "explanation": "Elle est interconvertie avec le glycéraldéhyde-3-phosphate."
      },
      {
        "content": "La réduction du glycéraldéhyde donne du glycérol.",
        "correct": true,
        "explanation": "Le carbonyle devient alcool."
      },
      {
        "content": "L'interconversion GAP/DHAP nécessite une transmutation nucléaire.",
        "correct": false,
        "explanation": "C'est une isomérisation enzymatique."
      },
      {
        "content": "La réduction du glucose donne du sorbitol.",
        "correct": true,
        "explanation": "Le sorbitol est aussi appelé glucitol."
      },
      {
        "content": "La réduction du glucose donne directement de l'acide glucuronique.",
        "correct": false,
        "explanation": "Cela correspond à une oxydation C6."
      },
      {
        "content": "GAP et DHAP sont étrangers au métabolisme glucidique.",
        "correct": false,
        "explanation": "Ils sont des intermédiaires centraux de la glycolyse."
      },
      {
        "content": "La réduction supprime tous les groupes hydroxyle.",
        "correct": false,
        "explanation": "Elle transforme le carbonyle en hydroxyle."
      },
      {
        "content": "Le glycéraldéhyde-3-phosphate est un intermédiaire de la glycolyse.",
        "correct": true,
        "explanation": "Il poursuit la phase de rendement."
      },
      {
        "content": "Les deux trioses possèdent trois carbones.",
        "correct": true,
        "explanation": "Leur squelette carboné est un triose."
      }
    ],
    "explanation": "Les trioses phosphorylés GAP et DHAP sont des intermédiaires glycolytiques interconvertibles. La réduction du carbonyle d'un ose forme un polyol : glucose→sorbitol, mannose→mannitol."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'acide glucuronique, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le carbone C1 n'est pas celui oxydé lors de sa formation à partir du glucose.",
        "correct": true,
        "explanation": "L'oxydation caractéristique porte sur C6."
      },
      {
        "content": "Le glucuronate est un polyol dépourvu de fonction acide.",
        "correct": false,
        "explanation": "Il porte un carboxylate."
      },
      {
        "content": "Le glucuronate entre dans la composition de glycosaminoglycanes.",
        "correct": true,
        "explanation": "Il est présent dans hyaluronane et chondroïtine sulfate."
      },
      {
        "content": "Il dérive du glucose par oxydation de l'alcool primaire C6.",
        "correct": true,
        "explanation": "CH2OH devient COOH."
      },
      {
        "content": "À pH physiologique, il est largement sous forme glucuronate.",
        "correct": true,
        "explanation": "La fonction carboxylique est déprotonée."
      }
    ],
    "explanation": "L'acide glucuronique est l'acide uronique C6 du glucose."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel nucléotide-sucre activé fournit le groupement glucuronyle lors de la glucuronoconjugaison ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "UDP-acide glucuronique",
        "UDP glucuronate",
        "UDP-glucuronate",
        "UDP-glucuronic acid"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La glucuronoconjugaison est une voie majeure de conjugaison augmentant souvent l'hydrosolubilité et l'élimination."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "À propos de la réduction des oses en polyols, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "La réduction d'une fonction carbonyle d'un ose donne une fonction alcool.",
        "correct": true,
        "explanation": "Le produit est un alditol ou polyol."
      },
      {
        "content": "Le mannitol est le produit d'oxydation C6 du mannose.",
        "correct": false,
        "explanation": "Il est un produit de réduction."
      },
      {
        "content": "La réduction du mannose donne du mannitol.",
        "correct": true,
        "explanation": "Le mannitol est l'alditol correspondant."
      },
      {
        "content": "Un polyol possède obligatoirement une fonction aldéhyde libre.",
        "correct": false,
        "explanation": "Le carbonyle a été réduit."
      },
      {
        "content": "La réduction supprime tous les groupes hydroxyle.",
        "correct": false,
        "explanation": "Elle transforme le carbonyle en hydroxyle."
      }
    ],
    "explanation": "La réduction du carbonyle d'un ose forme un polyol : glucose→sorbitol, mannose→mannitol.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le sorbitol, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le sorbitol est un polyol dérivé du glucose.",
        "correct": true,
        "explanation": "Il est obtenu par réduction du carbonyle."
      },
      {
        "content": "Il peut s'accumuler dans certaines cellules lorsque la voie des polyols est très active.",
        "correct": true,
        "explanation": "Cette accumulation est discutée dans certaines complications du diabète."
      },
      {
        "content": "Le sorbitol est un acide uronique.",
        "correct": false,
        "explanation": "C'est un polyol."
      },
      {
        "content": "Le sorbitol ne possède aucun groupe hydroxyle.",
        "correct": false,
        "explanation": "Il en possède plusieurs."
      },
      {
        "content": "Le sorbitol est le même composé que le glucose.",
        "correct": false,
        "explanation": "La fonction carbonyle a été réduite."
      }
    ],
    "explanation": "Le sorbitol ou glucitol est l'alditol du glucose."
  }
];
