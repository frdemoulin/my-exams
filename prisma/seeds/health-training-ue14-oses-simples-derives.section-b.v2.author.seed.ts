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
        "explanation": "L'oxydation d'une fonction aldéhyde ou alcool terminale d'un ose peut former une fonction carboxylique."
      },
      {
        "content": "Une oxydation peut correspondre à une perte d'électron.",
        "correct": true,
        "explanation": "Par définition, une espèce chimique oxydée cède un ou plusieurs électrons."
      },
      {
        "content": "Une oxydation peut correspondre à une perte d'hydrogène ou un gain d'oxygène.",
        "correct": true,
        "explanation": "Dans de nombreuses réactions organiques, la perte d'hydrogène ou le gain d'oxygène traduit une augmentation de l'état d'oxydation."
      },
      {
        "content": "Elle correspond nécessairement à un gain d'hydrogène.",
        "correct": false,
        "explanation": "Cela évoque plutôt une réduction."
      }
    ],
    "explanation": "Une oxydation correspond à une perte d'électrons et peut se traduire, selon la transformation, par une perte d'hydrogène ou un gain d'oxygène."
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
        "explanation": "La fonction alcool primaire CH2OH portée par C6 est oxydée en fonction carboxylique COOH."
      },
      {
        "content": "Transforme un CH2OH terminal en COOH.",
        "correct": true,
        "explanation": "L'oxydation de l'alcool primaire terminal forme une fonction acide carboxylique."
      },
      {
        "content": "Donne un dérivé acide.",
        "correct": true,
        "explanation": "Le produit formé est l'acide glucuronique, qui porte une fonction carboxylique en C6."
      },
      {
        "content": "Transforme C1 en fonction amine.",
        "correct": false,
        "explanation": "La formation de l'acide glucuronique oxyde C6 et n'introduit aucune fonction amine en C1."
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
        "explanation": "L'alcool primaire CH2OH de C6 est oxydé en fonction carboxylique COOH."
      },
      {
        "content": "Une fonction amine.",
        "correct": false,
        "explanation": "Aucun atome d'azote n'est introduit lors de cette oxydation."
      },
      {
        "content": "Une fonction cétone.",
        "correct": false,
        "explanation": "Le produit final en C6 est une fonction carboxylique, et non une cétone."
      },
      {
        "content": "Une fonction phosphate.",
        "correct": false,
        "explanation": "La formation d'acide glucuronique est une oxydation, pas une phosphorylation."
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
        "explanation": "Lorsque la fonction carboxylique est protonée, la molécule correspond à la forme acide non chargée."
      },
      {
        "content": "Sous forme ionisée.",
        "correct": true,
        "explanation": "La déprotonation de la fonction carboxylique forme un anion."
      },
      {
        "content": "Sous forme glucuronate.",
        "correct": true,
        "explanation": "Glucuronate est le nom de la forme carboxylate ionisée de l'acide glucuronique."
      },
      {
        "content": "Uniquement sous forme neutre.",
        "correct": false,
        "explanation": "L'état de protonation de la fonction carboxylique dépend du pH ; sa déprotonation forme l'ion glucuronate."
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
        "explanation": "La déprotonation de la fonction carboxylique de l'acide glucuronique donne l'ion glucuronate."
      },
      {
        "content": "Sorbitol.",
        "correct": false,
        "explanation": "Le sorbitol est le polyol obtenu par réduction du glucose, pas sa forme acide ionisée."
      },
      {
        "content": "Mannitol.",
        "correct": false,
        "explanation": "Le mannitol est le polyol obtenu par réduction du mannose."
      },
      {
        "content": "Glucosamine.",
        "correct": false,
        "explanation": "La glucosamine est une osamine dérivée du glucose par substitution d'un hydroxyle par une fonction amine."
      }
    ],
    "explanation": "Le glucuronate est la forme ionisée de l'acide glucuronique."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la glucuronoconjugaison :",
    "choices": [
      {
        "content": "Un mécanisme important notamment dans le foie.",
        "correct": true,
        "explanation": "De nombreuses UDP-glucuronosyltransférases hépatiques conjuguent des métabolites endogènes et des xénobiotiques."
      },
      {
        "content": "Une voie de solubilisation de substances initialement peu solubles.",
        "correct": true,
        "explanation": "L'ajout d'un groupement glucuronyle polaire augmente généralement l'hydrosolubilité du composé conjugué."
      },
      {
        "content": "Un mécanisme facilitant l'élimination urinaire.",
        "correct": true,
        "explanation": "L'augmentation de polarité favorise souvent l'excrétion urinaire ; certains glucuronides sont aussi éliminés dans la bile."
      },
      {
        "content": "Une réduction du glucose en sorbitol.",
        "correct": false,
        "explanation": "La réduction du glucose en sorbitol est une réaction redox distincte d'une conjugaison avec un groupement glucuronyle."
      }
    ],
    "explanation": "La glucuronoconjugaison augmente la solubilité et facilite l'excrétion."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles molécules peuvent faire l'objet d'une glucuronoconjugaison ?",
    "choices": [
      {
        "content": "La bilirubine.",
        "correct": true,
        "explanation": "La conjugaison de la bilirubine avec l'acide glucuronique augmente sa solubilité et permet son élimination biliaire."
      },
      {
        "content": "Certains médicaments.",
        "correct": true,
        "explanation": "De nombreux médicaments ou leurs métabolites sont transformés en glucuronides plus polaires."
      },
      {
        "content": "Uniquement le saccharose.",
        "correct": false,
        "explanation": "La glucuronoconjugaison concerne de nombreux composés endogènes et xénobiotiques ; elle n'est pas limitée au saccharose."
      },
      {
        "content": "Divers xénobiotiques possédant un groupement fonctionnel accessible à la conjugaison.",
        "correct": true,
        "explanation": "Les UDP-glucuronosyltransférases conjuguent de nombreux xénobiotiques et métabolites endogènes."
      }
    ],
    "explanation": "La glucuronoconjugaison concerne des composés endogènes, comme la bilirubine, et de nombreux médicaments ou autres xénobiotiques."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'acide glucuronique ou sa forme glucuronate entre dans la composition de :",
    "choices": [
      {
        "content": "Plusieurs glycosaminoglycanes.",
        "correct": true,
        "explanation": "Le glucuronate est un constituant de plusieurs GAG, notamment l'hyaluronane et les sulfates de chondroïtine."
      },
      {
        "content": "Chaînes de protéoglycanes.",
        "correct": true,
        "explanation": "Les chaînes de GAG fixées aux protéines des protéoglycanes contiennent fréquemment du glucuronate."
      },
      {
        "content": "Hyaluronane.",
        "correct": true,
        "explanation": "L'hyaluronane alterne des résidus d'acide glucuronique et de N-acétylglucosamine."
      },
      {
        "content": "Sulfates de chondroïtine.",
        "correct": true,
        "explanation": "Les sulfates de chondroïtine contiennent des unités répétées comprenant du glucuronate."
      }
    ],
    "explanation": "Le glucuronate est un constituant important de plusieurs GAG libres ou portés par des protéoglycanes."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un polyol dérivé d'un ose :",
    "choices": [
      {
        "content": "Est obtenu par réduction d'une fonction carbonyle d'un ose en fonction alcool.",
        "correct": true,
        "explanation": "La réduction du carbonyle d'un ose le transforme en hydroxyle et produit un alditol, aussi appelé polyol."
      },
      {
        "content": "Peut provenir d'un aldéhyde en C1.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde en C1 d'un aldose forme un alcool primaire."
      },
      {
        "content": "Peut provenir d'une cétone en C2.",
        "correct": true,
        "explanation": "La réduction de la fonction cétone en C2 d'un cétose forme une fonction alcool secondaire."
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
        "explanation": "La réduction de la fonction aldéhyde du glycéraldéhyde la transforme en alcool primaire et forme le glycérol."
      },
      {
        "content": "Sorbitol.",
        "correct": false,
        "explanation": "Le sorbitol est obtenu par réduction du glucose, qui est un hexose."
      },
      {
        "content": "Mannitol.",
        "correct": false,
        "explanation": "Le mannitol est obtenu par réduction du mannose."
      },
      {
        "content": "Glucuronate.",
        "correct": false,
        "explanation": "Le glucuronate est la forme ionisée d'un produit d'oxydation du glucose."
      }
    ],
    "explanation": "Le glycéraldéhyde réduit donne le glycérol."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du glycérol :",
    "choices": [
      {
        "content": "Il résulte de la réduction du glycéraldéhyde.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde du glycéraldéhyde forme le glycérol."
      },
      {
        "content": "Il constitue la charpente des triglycérides.",
        "correct": true,
        "explanation": "Dans un triglycéride, les trois fonctions alcool du glycérol sont estérifiées par trois acides gras."
      },
      {
        "content": "Il est couramment utilisé comme excipient pharmaceutique et appelé glycérine dans l'usage courant.",
        "correct": true,
        "explanation": "Le glycérol est notamment employé comme humectant, solvant ou excipient dans des préparations pharmaceutiques."
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
        "explanation": "La réduction de la fonction aldéhyde du mannose produit le mannitol."
      },
      {
        "content": "Sorbitol.",
        "correct": false,
        "explanation": "Le sorbitol est obtenu par réduction du glucose, pas du mannose."
      },
      {
        "content": "Glycérol.",
        "correct": false,
        "explanation": "Le glycérol est obtenu par réduction du glycéraldéhyde."
      },
      {
        "content": "Glucuronate.",
        "correct": false,
        "explanation": "Le glucuronate est la forme ionisée d'un produit d'oxydation du glucose."
      }
    ],
    "explanation": "La réduction de la fonction aldéhyde du mannose produit le mannitol."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le mannitol peut être utilisé comme :",
    "choices": [
      {
        "content": "Édulcorant.",
        "correct": true,
        "explanation": "Le mannitol est un polyol au goût sucré employé comme édulcorant dans certains aliments et médicaments."
      },
      {
        "content": "Substitut possible du saccharose.",
        "correct": true,
        "explanation": "Le mannitol est un polyol employé comme édulcorant à la place du saccharose dans certains produits."
      },
      {
        "content": "Agent osmotique administrable par voie intraveineuse dans certaines indications.",
        "correct": true,
        "explanation": "Le mannitol peut être administré comme diurétique osmotique, notamment dans des situations cliniques sélectionnées."
      },
      {
        "content": "Produit d'oxydation du mannose.",
        "correct": false,
        "explanation": "Il résulte d'une réduction."
      }
    ],
    "explanation": "Le mannitol est un polyol utilisé notamment comme édulcorant et, par voie intraveineuse, comme agent osmotique dans certaines indications."
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
        "explanation": "La réduction de la fonction aldéhyde du glucose produit le sorbitol."
      },
      {
        "content": "Mannitol.",
        "correct": false,
        "explanation": "Le mannitol est obtenu par réduction du mannose."
      },
      {
        "content": "Glycérol.",
        "correct": false,
        "explanation": "Le glycérol est obtenu par réduction du glycéraldéhyde."
      },
      {
        "content": "Acide glucuronique.",
        "correct": false,
        "explanation": "L'acide glucuronique résulte d'une oxydation du glucose en C6, et non de sa réduction."
      }
    ],
    "explanation": "La réduction de la fonction aldéhyde du glucose produit le sorbitol."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le sorbitol peut être utilisé comme :",
    "choices": [
      {
        "content": "Édulcorant.",
        "correct": true,
        "explanation": "Le sorbitol possède un goût sucré et peut remplacer tout ou partie du saccharose dans certains produits."
      },
      {
        "content": "Agent humidifiant dans des préparations alimentaires.",
        "correct": true,
        "explanation": "Son caractère hygroscopique permet de retenir l'eau et d'agir comme humectant."
      },
      {
        "content": "Humectant dans certains dentifrices.",
        "correct": true,
        "explanation": "Le sorbitol aide à maintenir l'humidité et la texture de certaines pâtes dentifrices."
      },
      {
        "content": "Acide uronique.",
        "correct": false,
        "explanation": "Le sorbitol est un polyol dépourvu de fonction carboxylique."
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
        "explanation": "L'oxydation de l'alcool primaire porté par C6 forme la fonction carboxylique de l'acide glucuronique."
      },
      {
        "content": "Réduction du carbonyle → sorbitol.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde du glucose en alcool primaire forme le sorbitol."
      },
      {
        "content": "Les deux transformations donnent le même dérivé.",
        "correct": false,
        "explanation": "L'oxydation en C6 donne un acide uronique, tandis que la réduction du carbonyle donne un polyol."
      },
      {
        "content": "L'une crée une fonction acide, l'autre augmente le nombre de fonctions alcool.",
        "correct": true,
        "explanation": "L'oxydation crée une fonction carboxylique ; la réduction transforme le carbonyle en hydroxyle."
      }
    ],
    "explanation": "Le sens redox détermine deux familles de dérivés très différentes."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un médicament devient plus hydrosoluble après une transformation hépatique, ce qui facilite son élimination. Quelle voie est compatible ?",
    "choices": [
      {
        "content": "Glucuronoconjugaison.",
        "correct": true,
        "explanation": "La conjugaison avec un groupement glucuronyle augmente généralement la polarité du médicament ou de son métabolite."
      },
      {
        "content": "Participation de l'acide glucuronique.",
        "correct": true,
        "explanation": "Le groupement glucuronyle transféré provient de l'UDP-acide glucuronique."
      },
      {
        "content": "Augmentation de la solubilité.",
        "correct": true,
        "explanation": "Le glucuronide formé est souvent plus hydrosoluble que le composé initial."
      },
      {
        "content": "Réduction obligatoire en mannitol.",
        "correct": false,
        "explanation": "Le mannitol provient de la réduction du mannose et n'intervient pas obligatoirement dans l'élimination d'un médicament."
      }
    ],
    "explanation": "La conjugaison d'un médicament avec un groupement glucuronyle augmente souvent sa polarité et facilite son élimination urinaire ou biliaire."
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
        "explanation": "L'oxydation de l'alcool primaire en C6 du glucose forme l'acide glucuronique."
      },
      {
        "content": "Glucose réduit → sorbitol.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde du glucose forme le sorbitol."
      },
      {
        "content": "Mannose réduit → mannitol.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde du mannose forme le mannitol."
      },
      {
        "content": "Glycéraldéhyde réduit → glycérol.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde du glycéraldéhyde forme le glycérol."
      }
    ],
    "explanation": "Ces quatre couples structurent la section redox."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux dérivés obtenus par réduction du glucose ou du mannose.",
    "choices": [
      {
        "content": "Mannitol.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde du mannose produit le mannitol."
      },
      {
        "content": "Sorbitol.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde du glucose produit le sorbitol."
      },
      {
        "content": "Acide glucuronique.",
        "correct": false,
        "explanation": "L'acide glucuronique provient de l'oxydation du glucose en C6."
      },
      {
        "content": "Glucuronate.",
        "correct": false,
        "explanation": "Le glucuronate est la forme ionisée de l'acide glucuronique, un dérivé oxydé du glucose."
      }
    ],
    "explanation": "Le mannitol résulte de la réduction du mannose et le sorbitol de la réduction du glucose."
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
        "explanation": "L'alcool primaire en C6 du glucose est oxydé en fonction carboxylique."
      },
      {
        "content": "Le glucuronate est la forme ionisée de l'acide glucuronique.",
        "correct": true,
        "explanation": "La déprotonation de la fonction carboxylique forme l'anion glucuronate."
      },
      {
        "content": "La glucuronoconjugaison peut faciliter l'élimination de médicaments.",
        "correct": true,
        "explanation": "Le glucuronide formé est généralement plus polaire et peut être plus facilement excrété."
      },
      {
        "content": "Le mannitol provient du mannose.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde du mannose forme le mannitol."
      },
      {
        "content": "Le sorbitol provient du glucose.",
        "correct": true,
        "explanation": "La réduction de la fonction aldéhyde du glucose forme le sorbitol."
      },
      {
        "content": "Le glycérol provient de l'oxydation du glycéraldéhyde.",
        "correct": false,
        "explanation": "Le glycérol provient de la réduction, et non de l'oxydation, du glycéraldéhyde."
      },
      {
        "content": "Le sorbitol est un acide uronique.",
        "correct": false,
        "explanation": "Le sorbitol est un polyol dépourvu de fonction carboxylique."
      },
      {
        "content": "La glucuronoconjugaison diminue la solubilité.",
        "correct": false,
        "explanation": "L'ajout d'un groupement glucuronyle polaire augmente généralement l'hydrosolubilité du composé conjugué."
      },
      {
        "content": "L'acide glucuronique est absent des GAG.",
        "correct": false,
        "explanation": "Le glucuronate entre notamment dans la composition de l'hyaluronane et des chondroïtine sulfates."
      },
      {
        "content": "Le mannitol est le produit d'oxydation du mannose.",
        "correct": false,
        "explanation": "Le mannitol est le produit de réduction du mannose."
      }
    ],
    "explanation": "Cette sélection consolide oxydation, polyols et glucuronoconjugaison."
  }
];
