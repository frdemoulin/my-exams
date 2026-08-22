import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.2 – Section B – Oxydation, réduction et polyols */
export const UE14_BIOCH_CH2_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'acide glucuronique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le glucuronate entre dans la composition de glycosaminoglycanes.",
        "correct": true,
        "explanation": "Il est présent dans hyaluronane et chondroïtine sulfate."
      },
      {
        "content": "À pH physiologique, il est largement sous forme glucuronate.",
        "correct": true,
        "explanation": "La fonction carboxylique est déprotonée."
      },
      {
        "content": "Il dérive du glucose par oxydation de l'alcool primaire C6.",
        "correct": true,
        "explanation": "CH2OH devient COOH."
      },
      {
        "content": "Le carbone C1 n'est pas celui oxydé lors de sa formation à partir du glucose.",
        "correct": true,
        "explanation": "L'oxydation caractéristique porte sur C6."
      },
      {
        "content": "Le glucuronate est un polyol dépourvu de fonction acide.",
        "correct": false,
        "explanation": "Il porte un carboxylate."
      }
    ],
    "explanation": "L'acide glucuronique est l'acide uronique C6 du glucose."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de la glucuronoconjugaison, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Elle rend toujours un composé plus lipophile.",
        "correct": false,
        "explanation": "Elle augmente généralement la polarité."
      },
      {
        "content": "Le donneur activé est l'UDP-acide glucuronique.",
        "correct": true,
        "explanation": "Il fournit le groupement glucuronyle."
      },
      {
        "content": "Elle détruit le noyau de l'acide glucuronique.",
        "correct": false,
        "explanation": "Le groupement glucuronyle est transféré."
      },
      {
        "content": "Elle ne concerne jamais les médicaments.",
        "correct": false,
        "explanation": "De nombreux médicaments sont glucuronidés."
      },
      {
        "content": "Elle consiste à réduire un carbonyle en alcool.",
        "correct": false,
        "explanation": "C'est une réaction de conjugaison."
      }
    ],
    "explanation": "La glucuronoconjugaison est une voie majeure de conjugaison augmentant souvent l'hydrosolubilité et l'élimination."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel polyol obtient-on classiquement par réduction du glucose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sorbitol",
        "glucitol",
        "le sorbitol",
        "le glucitol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La réduction du carbonyle d'un ose forme un polyol : glucose→sorbitol, mannose→mannitol."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le sorbitol, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est aussi appelé glucitol.",
        "correct": true,
        "explanation": "Les deux noms désignent le même polyol."
      },
      {
        "content": "Le sorbitol est un acide uronique.",
        "correct": false,
        "explanation": "C'est un polyol."
      },
      {
        "content": "Il peut s'accumuler dans certaines cellules lorsque la voie des polyols est très active.",
        "correct": true,
        "explanation": "Cette accumulation est discutée dans certaines complications du diabète."
      },
      {
        "content": "Le sorbitol est obtenu par oxydation de C6.",
        "correct": false,
        "explanation": "Cela donne du glucuronate."
      },
      {
        "content": "Il ne possède plus la fonction aldéhyde du glucose ouvert.",
        "correct": true,
        "explanation": "Elle a été réduite en alcool."
      }
    ],
    "explanation": "Le sorbitol ou glucitol est l'alditol du glucose."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de le mannitol, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le mannitol ne contient aucun oxygène.",
        "correct": false,
        "explanation": "Il possède plusieurs OH."
      },
      {
        "content": "Le mannitol est un cétose.",
        "correct": false,
        "explanation": "Il ne possède plus de carbonyle."
      },
      {
        "content": "Le mannitol est le polyol correspondant au mannose.",
        "correct": true,
        "explanation": "Il résulte de la réduction du carbonyle."
      },
      {
        "content": "Le mannitol est obtenu par oxydation du mannose en acide.",
        "correct": false,
        "explanation": "C'est un produit de réduction."
      },
      {
        "content": "Le mannitol est un peptide.",
        "correct": false,
        "explanation": "C'est un dérivé glucidique."
      }
    ],
    "explanation": "Le mannitol est l'alditol du mannose et possède des usages médicaux osmotiques."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur le glycérol, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Il ne contient aucun groupe hydroxyle.",
        "correct": false,
        "explanation": "Il en possède trois."
      },
      {
        "content": "Il possède six carbones.",
        "correct": false,
        "explanation": "Il en possède trois."
      },
      {
        "content": "Le glycérol est un triol à trois carbones.",
        "correct": true,
        "explanation": "Il porte trois fonctions alcool."
      },
      {
        "content": "Il est très hydrophile.",
        "correct": true,
        "explanation": "Ses trois OH forment des liaisons hydrogène avec l'eau."
      },
      {
        "content": "Le glycérol est un acide gras.",
        "correct": false,
        "explanation": "C'est un polyol."
      }
    ],
    "explanation": "Le glycérol est un triol à trois carbones, central dans de nombreux lipides.",
    "requiredSelectionCount": 2
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la réduction du fructose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La réduction supprime le carbonyle libre.",
        "correct": true,
        "explanation": "Il est converti en alcool."
      },
      {
        "content": "Deux alditols peuvent apparaître parce que la réduction crée un nouveau centre stéréogène.",
        "correct": true,
        "explanation": "Les deux orientations conduisent à deux produits."
      },
      {
        "content": "Le fructose est un cétose avant réduction.",
        "correct": true,
        "explanation": "Son carbonyle est en C2."
      },
      {
        "content": "La réduction du fructose donne uniquement de l'acide glucuronique.",
        "correct": false,
        "explanation": "Cela n'est pas une réduction du carbonyle."
      },
      {
        "content": "La réduction du fructose peut produire du sorbitol et du mannitol.",
        "correct": true,
        "explanation": "La cétone C2 devient un nouvel alcool stéréogène."
      }
    ],
    "explanation": "La réduction du fructose peut conduire à deux polyols stéréoisomères, sorbitol et mannitol."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel type de réaction transforme le glucose en sorbitol ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "réduction",
        "reduction",
        "une réduction",
        "une reduction"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Oxydation et réduction modifient le degré d'oxydation des fonctions de l'ose et conduisent à des familles distinctes."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur l'acide glucuronique, laquelle est exacte ?",
    "choices": [
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
        "content": "Il est obtenu par réduction du glucose.",
        "correct": false,
        "explanation": "Il est obtenu par oxydation."
      },
      {
        "content": "La transformation caractéristique oxyde C2 en amine.",
        "correct": false,
        "explanation": "Elle oxyde C6 en acide carboxylique."
      },
      {
        "content": "Il n'existe pas dans les GAG.",
        "correct": false,
        "explanation": "Il est fréquent dans plusieurs GAG."
      }
    ],
    "explanation": "L'acide glucuronique est l'acide uronique C6 du glucose."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la glucuronoconjugaison, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La bilirubine est glucuronoconjuguée avant son excrétion biliaire.",
        "correct": true,
        "explanation": "La conjugaison augmente sa solubilité."
      },
      {
        "content": "Elle consiste à réduire un carbonyle en alcool.",
        "correct": false,
        "explanation": "C'est une réaction de conjugaison."
      },
      {
        "content": "Le donneur activé est l'UDP-acide glucuronique.",
        "correct": true,
        "explanation": "Il fournit le groupement glucuronyle."
      },
      {
        "content": "Elle est importante dans le métabolisme hépatique de nombreux xénobiotiques.",
        "correct": true,
        "explanation": "Des UDP-glucuronosyltransférases catalysent ces réactions."
      },
      {
        "content": "Elle augmente souvent l'hydrosolubilité d'un composé.",
        "correct": true,
        "explanation": "L'ajout d'un glucuronide facilite fréquemment l'élimination."
      }
    ],
    "explanation": "La glucuronoconjugaison est une voie majeure de conjugaison augmentant souvent l'hydrosolubilité et l'élimination."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'acide glucuronique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il n'existe pas dans les GAG.",
        "correct": false,
        "explanation": "Il est fréquent dans plusieurs GAG."
      },
      {
        "content": "Il dérive du glucose par oxydation de l'alcool primaire C6.",
        "correct": true,
        "explanation": "CH2OH devient COOH."
      },
      {
        "content": "Le carbone C1 n'est pas celui oxydé lors de sa formation à partir du glucose.",
        "correct": true,
        "explanation": "L'oxydation caractéristique porte sur C6."
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
    "order": 34,
    "difficulty": "MEDIUM",
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
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la réduction des oses en polyols, laquelle est exacte ?",
    "choices": [
      {
        "content": "La réduction du glucose donne directement de l'acide glucuronique.",
        "correct": false,
        "explanation": "Cela correspond à une oxydation C6."
      },
      {
        "content": "La réduction supprime tous les groupes hydroxyle.",
        "correct": false,
        "explanation": "Elle transforme le carbonyle en hydroxyle."
      },
      {
        "content": "La réduction du mannose donne du mannitol.",
        "correct": true,
        "explanation": "Le mannitol est l'alditol correspondant."
      },
      {
        "content": "Le mannitol est le produit d'oxydation C6 du mannose.",
        "correct": false,
        "explanation": "Il est un produit de réduction."
      },
      {
        "content": "Un polyol possède obligatoirement une fonction aldéhyde libre.",
        "correct": false,
        "explanation": "Le carbonyle a été réduit."
      }
    ],
    "explanation": "La réduction du carbonyle d'un ose forme un polyol : glucose→sorbitol, mannose→mannitol."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le sorbitol, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le sorbitol est le même composé que le glucose.",
        "correct": false,
        "explanation": "La fonction carbonyle a été réduite."
      },
      {
        "content": "Il ne possède plus la fonction aldéhyde du glucose ouvert.",
        "correct": true,
        "explanation": "Elle a été réduite en alcool."
      },
      {
        "content": "Le sorbitol est un polyol dérivé du glucose.",
        "correct": true,
        "explanation": "Il est obtenu par réduction du carbonyle."
      },
      {
        "content": "Le sorbitol ne possède aucun groupe hydroxyle.",
        "correct": false,
        "explanation": "Il en possède plusieurs."
      },
      {
        "content": "Le sorbitol est un acide uronique.",
        "correct": false,
        "explanation": "C'est un polyol."
      }
    ],
    "explanation": "Le sorbitol ou glucitol est l'alditol du glucose."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de le mannitol, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Le mannitol est un cétose.",
        "correct": false,
        "explanation": "Il ne possède plus de carbonyle."
      },
      {
        "content": "Le mannitol est obtenu par oxydation du mannose en acide.",
        "correct": false,
        "explanation": "C'est un produit de réduction."
      },
      {
        "content": "Le mannitol est le polyol correspondant au mannose.",
        "correct": true,
        "explanation": "Il résulte de la réduction du carbonyle."
      },
      {
        "content": "Le mannitol est un peptide.",
        "correct": false,
        "explanation": "C'est un dérivé glucidique."
      },
      {
        "content": "Il est plus réduit que le mannose correspondant.",
        "correct": true,
        "explanation": "Le carbonyle a été transformé en alcool."
      }
    ],
    "explanation": "Le mannitol est l'alditol du mannose et possède des usages médicaux osmotiques.",
    "requiredSelectionCount": 2
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le glycérol, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Il est très hydrophile.",
        "correct": true,
        "explanation": "Ses trois OH forment des liaisons hydrogène avec l'eau."
      },
      {
        "content": "Il ne contient aucun groupe hydroxyle.",
        "correct": false,
        "explanation": "Il en possède trois."
      },
      {
        "content": "Le glycérol est un triol à trois carbones.",
        "correct": true,
        "explanation": "Il porte trois fonctions alcool."
      },
      {
        "content": "Le glycérol est un acide gras.",
        "correct": false,
        "explanation": "C'est un polyol."
      },
      {
        "content": "Il possède six carbones.",
        "correct": false,
        "explanation": "Il en possède trois."
      }
    ],
    "explanation": "Le glycérol est un triol à trois carbones, central dans de nombreux lipides."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Citez un des deux polyols pouvant résulter de la réduction du fructose.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sorbitol",
        "mannitol",
        "glucitol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La réduction du fructose peut conduire à deux polyols stéréoisomères, sorbitol et mannitol."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de oxydation et réduction en chimie des oses, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "L'oxydation de C6 du glucose forme un acide uronique.",
        "correct": true,
        "explanation": "L'alcool primaire devient acide carboxylique."
      },
      {
        "content": "La réduction du glucose en sorbitol crée une fonction acide carboxylique.",
        "correct": false,
        "explanation": "Elle crée un alcool."
      },
      {
        "content": "Une oxydation correspond nécessairement à un gain d'hydrogène.",
        "correct": false,
        "explanation": "Cela correspond plutôt à une réduction."
      },
      {
        "content": "Oxydation et réduction sont synonymes.",
        "correct": false,
        "explanation": "Ce sont des transformations opposées."
      },
      {
        "content": "L'oxydation C6 du glucose forme du mannitol.",
        "correct": false,
        "explanation": "Elle forme l'acide glucuronique."
      }
    ],
    "explanation": "Oxydation et réduction modifient le degré d'oxydation des fonctions de l'ose et conduisent à des familles distinctes."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'acide glucuronique, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Il dérive du glucose par oxydation de l'alcool primaire C6.",
        "correct": true,
        "explanation": "CH2OH devient COOH."
      },
      {
        "content": "Le glucuronate entre dans la composition de glycosaminoglycanes.",
        "correct": true,
        "explanation": "Il est présent dans hyaluronane et chondroïtine sulfate."
      },
      {
        "content": "Il est obtenu par réduction du glucose.",
        "correct": false,
        "explanation": "Il est obtenu par oxydation."
      },
      {
        "content": "La transformation caractéristique oxyde C2 en amine.",
        "correct": false,
        "explanation": "Elle oxyde C6 en acide carboxylique."
      },
      {
        "content": "Le glucuronate est un polyol dépourvu de fonction acide.",
        "correct": false,
        "explanation": "Il porte un carboxylate."
      }
    ],
    "explanation": "L'acide glucuronique est l'acide uronique C6 du glucose."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le mannitol est un peptide.",
        "correct": false,
        "explanation": "C'est un dérivé glucidique."
      },
      {
        "content": "Le mannitol est le polyol correspondant au mannose.",
        "correct": true,
        "explanation": "Il résulte de la réduction du carbonyle."
      },
      {
        "content": "Le mannitol possède plusieurs fonctions alcool.",
        "correct": true,
        "explanation": "C'est un polyol."
      },
      {
        "content": "Le mannitol est obtenu par oxydation du mannose en acide.",
        "correct": false,
        "explanation": "C'est un produit de réduction."
      },
      {
        "content": "Elle augmente souvent l'hydrosolubilité d'un composé.",
        "correct": true,
        "explanation": "L'ajout d'un glucuronide facilite fréquemment l'élimination."
      },
      {
        "content": "Elle rend toujours un composé plus lipophile.",
        "correct": false,
        "explanation": "Elle augmente généralement la polarité."
      },
      {
        "content": "Le mannitol peut être utilisé comme agent osmotique en médecine.",
        "correct": true,
        "explanation": "Il est notamment utilisé comme diurétique osmotique dans certaines indications."
      },
      {
        "content": "Le donneur activé est l'UDP-acide glucuronique.",
        "correct": true,
        "explanation": "Il fournit le groupement glucuronyle."
      },
      {
        "content": "Le mannitol ne contient aucun oxygène.",
        "correct": false,
        "explanation": "Il possède plusieurs OH."
      },
      {
        "content": "Elle détruit le noyau de l'acide glucuronique.",
        "correct": false,
        "explanation": "Le groupement glucuronyle est transféré."
      }
    ],
    "explanation": "La glucuronoconjugaison est une voie majeure de conjugaison augmentant souvent l'hydrosolubilité et l'élimination. Le mannitol est l'alditol du mannose et possède des usages médicaux osmotiques."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la réduction des oses en polyols, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "La réduction du glycéraldéhyde donne du glycérol.",
        "correct": true,
        "explanation": "Le carbonyle devient alcool."
      },
      {
        "content": "La réduction du mannose donne du mannitol.",
        "correct": true,
        "explanation": "Le mannitol est l'alditol correspondant."
      },
      {
        "content": "La réduction du glucose donne du sorbitol.",
        "correct": true,
        "explanation": "Le sorbitol est aussi appelé glucitol."
      },
      {
        "content": "Le mannitol est le produit d'oxydation C6 du mannose.",
        "correct": false,
        "explanation": "Il est un produit de réduction."
      },
      {
        "content": "La réduction d'une fonction carbonyle d'un ose donne une fonction alcool.",
        "correct": true,
        "explanation": "Le produit est un alditol ou polyol."
      }
    ],
    "explanation": "La réduction du carbonyle d'un ose forme un polyol : glucose→sorbitol, mannose→mannitol."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel autre nom chimique est donné au sorbitol ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glucitol",
        "le glucitol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le sorbitol ou glucitol est l'alditol du glucose."
  }
];
