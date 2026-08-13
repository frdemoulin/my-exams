import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.2 – Section B – Oxydation, réduction et polyols
 */

export const UE14_BIOCH_CH2_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'oxydation des oses :",
    "choices": [
      {
        "content": "Elle peut donner des dérivés acides.",
        "correct": true,
        "explanation": "Le support introduit ainsi les oses oxydés."
      },
      {
        "content": "Une oxydation peut correspondre à une perte d'électron.",
        "correct": true,
        "explanation": "Définition donnée."
      },
      {
        "content": "Une oxydation peut correspondre à une perte d'hydrogène ou un gain d'oxygène.",
        "correct": true,
        "explanation": "Formulations données."
      },
      {
        "content": "Elle correspond nécessairement à un gain d'hydrogène.",
        "correct": false,
        "explanation": "Cela évoque plutôt une réduction."
      }
    ],
    "explanation": "Le support rappelle plusieurs façons de reconnaître une oxydation."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'oxydation du glucose vers l'acide glucuronique :",
    "choices": [
      {
        "content": "Concerne le carbone C6.",
        "correct": true,
        "explanation": "CH2OH en C6 devient COOH."
      },
      {
        "content": "Transforme un CH2OH terminal en COOH.",
        "correct": true,
        "explanation": "Bilan explicitement indiqué."
      },
      {
        "content": "Donne un dérivé acide.",
        "correct": true,
        "explanation": "Acide glucuronique."
      },
      {
        "content": "Transforme C1 en fonction amine.",
        "correct": false,
        "explanation": "Ce n'est pas la transformation décrite."
      }
    ],
    "explanation": "L'acide glucuronique résulte de l'oxydation de l'alcool primaire C6 du glucose."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle fonction apparaît en C6 lors de la formation d'acide glucuronique à partir du glucose ?",
    "choices": [
      {
        "content": "Une fonction acide carboxylique.",
        "correct": true,
        "explanation": "CH2OH devient COOH."
      },
      {
        "content": "Une fonction amine.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "Une fonction cétone.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "Une fonction phosphate.",
        "correct": false,
        "explanation": "Non."
      }
    ],
    "explanation": "Le carbone C6 porte alors une fonction carboxylique."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "En solution, l'acide glucuronique peut se rencontrer :",
    "choices": [
      {
        "content": "Sous forme non chargée.",
        "correct": true,
        "explanation": "Acide glucuronique."
      },
      {
        "content": "Sous forme ionisée.",
        "correct": true,
        "explanation": "Glucuronate."
      },
      {
        "content": "Sous forme glucuronate.",
        "correct": true,
        "explanation": "Nom de la forme ionisée."
      },
      {
        "content": "Uniquement sous forme neutre.",
        "correct": false,
        "explanation": "La fiche présente deux formes."
      }
    ],
    "explanation": "La fonction acide peut être protonée ou ionisée."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Comment s'appelle la forme ionisée de l'acide glucuronique ?",
    "choices": [
      {
        "content": "Glucuronate.",
        "correct": true,
        "explanation": "Nom indiqué."
      },
      {
        "content": "Sorbitol.",
        "correct": false,
        "explanation": "Polyol du glucose."
      },
      {
        "content": "Mannitol.",
        "correct": false,
        "explanation": "Polyol du mannose."
      },
      {
        "content": "Glucosamine.",
        "correct": false,
        "explanation": "Osamine."
      }
    ],
    "explanation": "Le glucuronate est la forme ionisée de l'acide glucuronique."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La glucuronoconjugaison est présentée comme :",
    "choices": [
      {
        "content": "Un mécanisme important notamment dans le foie.",
        "correct": true,
        "explanation": "Localisation mise en avant."
      },
      {
        "content": "Une voie de solubilisation de substances initialement peu solubles.",
        "correct": true,
        "explanation": "But donné."
      },
      {
        "content": "Un mécanisme facilitant l'élimination urinaire.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Une réduction du glucose en sorbitol.",
        "correct": false,
        "explanation": "C'est une autre transformation."
      }
    ],
    "explanation": "La glucuronoconjugaison augmente la solubilité et facilite l'excrétion."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quels exemples de molécules pouvant être glucuronoconjuguées sont cités ?",
    "choices": [
      {
        "content": "La bilirubine.",
        "correct": true,
        "explanation": "Exemple explicite."
      },
      {
        "content": "Certains médicaments.",
        "correct": true,
        "explanation": "Exemple explicite."
      },
      {
        "content": "Uniquement le saccharose.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "Des substances qu'il faut éviter d'accumuler.",
        "correct": true,
        "explanation": "Raison donnée pour certains médicaments."
      }
    ],
    "explanation": "La fiche illustre la glucuronoconjugaison par la bilirubine et certains médicaments."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'acide glucuronique est aussi cité comme constituant de :",
    "choices": [
      {
        "content": "Glycosaminoglycanes.",
        "correct": true,
        "explanation": "Liste du support."
      },
      {
        "content": "Glycoprotéines.",
        "correct": true,
        "explanation": "Liste du support."
      },
      {
        "content": "Protéoglycanes.",
        "correct": true,
        "explanation": "Liste du support."
      },
      {
        "content": "Glycolipides.",
        "correct": true,
        "explanation": "Liste du support."
      }
    ],
    "explanation": "L'acide glucuronique intervient dans plusieurs grandes familles de glycoconjugués."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un polyol, dans le cadre de cette fiche :",
    "choices": [
      {
        "content": "Est obtenu par réduction d'une fonction carbonyle d'un ose en fonction alcool.",
        "correct": true,
        "explanation": "Définition donnée."
      },
      {
        "content": "Peut provenir d'un aldéhyde en C1.",
        "correct": true,
        "explanation": "Cas des aldoses."
      },
      {
        "content": "Peut provenir d'une cétone en C2.",
        "correct": true,
        "explanation": "Cas des cétoses."
      },
      {
        "content": "Est nécessairement un acide carboxylique.",
        "correct": false,
        "explanation": "C'est au contraire un dérivé réduit."
      }
    ],
    "explanation": "La réduction du carbonyle transforme l'ose en polyol."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel produit obtient-on par réduction du glycéraldéhyde ?",
    "choices": [
      {
        "content": "Glycérol.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "Sorbitol.",
        "correct": false,
        "explanation": "Produit du glucose."
      },
      {
        "content": "Mannitol.",
        "correct": false,
        "explanation": "Produit du mannose."
      },
      {
        "content": "Glucuronate.",
        "correct": false,
        "explanation": "Produit d'oxydation."
      }
    ],
    "explanation": "Le glycéraldéhyde réduit donne le glycérol."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du glycérol dans la fiche :",
    "choices": [
      {
        "content": "Il résulte de la réduction du glycéraldéhyde.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Il constitue la charpente des triglycérides.",
        "correct": true,
        "explanation": "Rôle cité."
      },
      {
        "content": "Il est utilisé comme produit pharmaceutique sous le nom de glycérine.",
        "correct": true,
        "explanation": "Application citée."
      },
      {
        "content": "Il porte une fonction acide carboxylique en C1.",
        "correct": false,
        "explanation": "Le carbonyle a été réduit en alcool."
      }
    ],
    "explanation": "Le glycérol est à la fois un produit de réduction et une molécule biologique/industrielle importante."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel polyol est obtenu par réduction du mannose ?",
    "choices": [
      {
        "content": "Mannitol.",
        "correct": true,
        "explanation": "Couple donné."
      },
      {
        "content": "Sorbitol.",
        "correct": false,
        "explanation": "Couple du glucose."
      },
      {
        "content": "Glycérol.",
        "correct": false,
        "explanation": "Couple du glycéraldéhyde."
      },
      {
        "content": "Glucuronate.",
        "correct": false,
        "explanation": "Produit d'oxydation."
      }
    ],
    "explanation": "Mannose → mannitol."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le mannitol est cité comme :",
    "choices": [
      {
        "content": "Édulcorant.",
        "correct": true,
        "explanation": "Application alimentaire."
      },
      {
        "content": "Substitut possible du saccharose.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "Solution intraveineuse dans certaines circonstances pathologiques.",
        "correct": true,
        "explanation": "Usage cité."
      },
      {
        "content": "Produit d'oxydation du mannose.",
        "correct": false,
        "explanation": "Il résulte d'une réduction."
      }
    ],
    "explanation": "Le mannitol est un polyol aux usages alimentaires et médicaux cités."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel polyol est obtenu par réduction du glucose ?",
    "choices": [
      {
        "content": "Sorbitol.",
        "correct": true,
        "explanation": "Couple donné."
      },
      {
        "content": "Mannitol.",
        "correct": false,
        "explanation": "Mannose."
      },
      {
        "content": "Glycérol.",
        "correct": false,
        "explanation": "Glycéraldéhyde."
      },
      {
        "content": "Acide glucuronique.",
        "correct": false,
        "explanation": "Oxydation du glucose."
      }
    ],
    "explanation": "Glucose → sorbitol."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le sorbitol est cité comme :",
    "choices": [
      {
        "content": "Édulcorant.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Agent humidifiant dans des préparations alimentaires.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Composant utilisé dans des dentifrices pour goût sucré et fraîcheur.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Acide uronique.",
        "correct": false,
        "explanation": "C'est un polyol."
      }
    ],
    "explanation": "Le sorbitol cumule plusieurs usages alimentaires et d'hygiène."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer oxydation et réduction du glucose permet d'affirmer que :",
    "choices": [
      {
        "content": "Oxydation en C6 → acide glucuronique.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Réduction du carbonyle → sorbitol.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Les deux transformations donnent le même dérivé.",
        "correct": false,
        "explanation": "Produits fonctionnellement différents."
      },
      {
        "content": "L'une crée une fonction acide, l'autre augmente le nombre de fonctions alcool.",
        "correct": true,
        "explanation": "Différence fonctionnelle."
      }
    ],
    "explanation": "Le sens redox détermine deux familles de dérivés très différentes."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un médicament est rendu plus hydrosoluble puis éliminé dans les urines après une transformation hépatique. Selon la fiche, quelle voie est compatible ?",
    "choices": [
      {
        "content": "Glucuronoconjugaison.",
        "correct": true,
        "explanation": "Voie de solubilisation/excrétion."
      },
      {
        "content": "Participation de l'acide glucuronique.",
        "correct": true,
        "explanation": "Dérivé concerné."
      },
      {
        "content": "Augmentation de la solubilité.",
        "correct": true,
        "explanation": "But."
      },
      {
        "content": "Réduction obligatoire en mannitol.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "La glucuronoconjugaison est l'application clinique majeure de l'acide glucuronique dans le support."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel polyol provient de la réduction du glucose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sorbitol",
        "le sorbitol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "La réduction du glucose donne le sorbitol."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel polyol provient de la réduction du mannose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "mannitol",
        "le mannitol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "La réduction du mannose donne le mannitol."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels couples transformation → produit sont corrects ?",
    "choices": [
      {
        "content": "Glucose oxydé en C6 → acide glucuronique.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Glucose réduit → sorbitol.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Mannose réduit → mannitol.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Glycéraldéhyde réduit → glycérol.",
        "correct": true,
        "explanation": "Bilan."
      }
    ],
    "explanation": "Ces quatre couples structurent la section redox."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux dérivés obtenus par réduction d'hexoses dans les exemples de la fiche.",
    "choices": [
      {
        "content": "Mannitol.",
        "correct": true,
        "explanation": "Réduction du mannose."
      },
      {
        "content": "Sorbitol.",
        "correct": true,
        "explanation": "Réduction du glucose."
      },
      {
        "content": "Acide glucuronique.",
        "correct": false,
        "explanation": "Oxydation."
      },
      {
        "content": "Glucuronate.",
        "correct": false,
        "explanation": "Forme ionisée d'un dérivé oxydé."
      }
    ],
    "explanation": "Mannitol et sorbitol sont les deux polyols d'hexoses explicitement illustrés."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "L'acide glucuronique provient d'une oxydation du glucose en C6.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Le glucuronate est la forme ionisée de l'acide glucuronique.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "La glucuronoconjugaison peut faciliter l'élimination de médicaments.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Le mannitol provient du mannose.",
        "correct": true,
        "explanation": "Réduction."
      },
      {
        "content": "Le sorbitol provient du glucose.",
        "correct": true,
        "explanation": "Réduction."
      },
      {
        "content": "Le glycérol provient de l'oxydation du glycéraldéhyde.",
        "correct": false,
        "explanation": "Réduction."
      },
      {
        "content": "Le sorbitol est un acide uronique.",
        "correct": false,
        "explanation": "Polyol."
      },
      {
        "content": "La glucuronoconjugaison diminue la solubilité.",
        "correct": false,
        "explanation": "Elle l'augmente."
      },
      {
        "content": "L'acide glucuronique est absent des GAG.",
        "correct": false,
        "explanation": "Il en est un constituant cité."
      },
      {
        "content": "Le mannitol est le produit d'oxydation du mannose.",
        "correct": false,
        "explanation": "Réduction."
      }
    ],
    "explanation": "Cette sélection consolide oxydation, polyols et glucuronoconjugaison."
  }
];
