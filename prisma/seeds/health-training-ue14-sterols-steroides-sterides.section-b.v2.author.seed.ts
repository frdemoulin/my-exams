import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Stérols, stéroïdes et stérides — Section B — Cholestérol et dérivés */
export const UE14_BIOCH_CH8_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la structure du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il porte un phosphate obligatoire en C3.",
        "correct": false,
        "explanation": "Il porte un hydroxyle."
      },
      {
        "content": "Il possède trois acides gras estérifiés.",
        "correct": false,
        "explanation": "Cela décrit un TAG."
      },
      {
        "content": "Une chaîne latérale est portée par C17.",
        "correct": true,
        "explanation": "Elle contribue au caractère hydrophobe."
      },
      {
        "content": "Il porte un groupement OH en C3.",
        "correct": true,
        "explanation": "Cet OH est le petit pôle hydrophile de la forme libre."
      },
      {
        "content": "Le cholestérol comporte 18 carbones.",
        "correct": false,
        "explanation": "Le noyau estrane est C18 ; le cholestérol est C27."
      }
    ],
    "explanation": "Le cholestérol est un stérol C27 avec OH C3, double liaison C5-C6 et chaîne latérale C17."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant le cholestérol dans les membranes, laquelle est correcte ?",
    "choices": [
      {
        "content": "Il constitue une protéine transmembranaire.",
        "correct": false,
        "explanation": "C'est un lipide."
      },
      {
        "content": "Le cholestérol estérifié est la forme principale insérée dans la bicouche.",
        "correct": false,
        "explanation": "La forme libre avec OH est la forme membranaire adaptée."
      },
      {
        "content": "Le cholestérol est absent des membranes animales.",
        "correct": false,
        "explanation": "Il en est un constituant majeur."
      },
      {
        "content": "Il rend la membrane toujours plus fluide quelle que soit la température.",
        "correct": false,
        "explanation": "Son effet est tampon et dépend du contexte."
      },
      {
        "content": "Il module la fluidité membranaire.",
        "correct": true,
        "explanation": "Son effet dépend notamment de la température et de la composition lipidique."
      }
    ],
    "explanation": "Le cholestérol libre est amphiphile et membranaire ; l'ester de cholestérol est fortement hydrophobe et se stocke dans des phases lipidiques."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de carbones comporte le cholestérol ?",
    "answer": {
      "type": "number",
      "value": 27,
      "tolerance": 0
    },
    "explanation": "Le cholestérol est un stérol C27."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les acides biliaires, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils comportent tous 27 carbones comme le cholestérol.",
        "correct": false,
        "explanation": "Les acides biliaires humains classiques sont C24."
      },
      {
        "content": "Leur caractère amphiphile favorise l'émulsification et la digestion des lipides.",
        "correct": true,
        "explanation": "Ils contribuent à la formation de micelles mixtes intestinales."
      },
      {
        "content": "Ils sont sécrétés dans la bile puis majoritairement réabsorbés dans la circulation entérohépatique.",
        "correct": true,
        "explanation": "Le recyclage limite la synthèse de novo nécessaire."
      },
      {
        "content": "Ils empêchent toute absorption lipidique.",
        "correct": false,
        "explanation": "Ils la facilitent."
      },
      {
        "content": "Ils possèdent un squelette C24 après raccourcissement de la chaîne latérale.",
        "correct": true,
        "explanation": "Le noyau cholane sert de repère structural."
      }
    ],
    "explanation": "Les acides biliaires sont des dérivés C24 du cholestérol synthétisés par le foie et essentiels à la digestion/absorption des lipides."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la vitamine D comme dérivé stéroïdien, laquelle est correcte ?",
    "choices": [
      {
        "content": "La vitamine D favorise spécifiquement l'absorption du potassium à la place du phosphate.",
        "correct": false,
        "explanation": "Le couple majeur est calcium-phosphate."
      },
      {
        "content": "Elle n'a aucun lien avec le cholestérol.",
        "correct": false,
        "explanation": "Son précurseur cutané est un dérivé du cholestérol."
      },
      {
        "content": "Après hydroxylations hépatique puis rénale, sa forme active participe à l'homéostasie phosphocalcique.",
        "correct": true,
        "explanation": "Le calcitriol augmente notamment l'absorption intestinale du calcium et du phosphate."
      },
      {
        "content": "Elle est synthétisée à partir du glycogène cutané.",
        "correct": false,
        "explanation": "Le précurseur est le 7-déhydrocholestérol."
      },
      {
        "content": "Elle est un triacylglycérol.",
        "correct": false,
        "explanation": "C'est un sécostéroïde."
      }
    ],
    "explanation": "La vitamine D3 dérive du 7-déhydrocholestérol ; sa forme active régule surtout calcium et phosphate."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant l'estérification du cholestérol, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "L'estérification porte sur une amine C2.",
        "correct": false,
        "explanation": "Le cholestérol n'en possède pas."
      },
      {
        "content": "LCAT hydrolyse le glycogène.",
        "correct": false,
        "explanation": "Elle intervient dans le métabolisme lipoprotéique."
      },
      {
        "content": "ACAT transforme le cholestérol en acide biliaire en une étape.",
        "correct": false,
        "explanation": "Ce n'est pas sa fonction."
      },
      {
        "content": "Dans les cellules, ACAT/SOAT peut estérifier le cholestérol.",
        "correct": true,
        "explanation": "Cette réaction favorise son stockage intracellulaire."
      },
      {
        "content": "L'estérification porte sur le groupement OH de C3.",
        "correct": true,
        "explanation": "Un acide gras forme alors une liaison ester."
      }
    ],
    "explanation": "L'estérification du OH C3 transforme le cholestérol libre amphiphile en ester de cholestérol fortement hydrophobe.",
    "requiredSelectionCount": 2
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une situation d'application n°2, concernant la structure du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le cholestérol comporte 27 carbones.",
        "correct": true,
        "explanation": "Son squelette inclut le noyau stéroïdien, deux méthyles et une chaîne latérale."
      },
      {
        "content": "Une chaîne latérale est portée par C17.",
        "correct": true,
        "explanation": "Elle contribue au caractère hydrophobe."
      },
      {
        "content": "Il ne possède aucune chaîne latérale.",
        "correct": false,
        "explanation": "Une chaîne est portée en C17."
      },
      {
        "content": "Il possède une double liaison C5-C6.",
        "correct": true,
        "explanation": "C'est un repère structural classique."
      },
      {
        "content": "Il porte un groupement OH en C3.",
        "correct": true,
        "explanation": "Cet OH est le petit pôle hydrophile de la forme libre."
      }
    ],
    "explanation": "Le cholestérol est un stérol C27 avec OH C3, double liaison C5-C6 et chaîne latérale C17."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle forme du cholestérol est adaptée à l'insertion dans une bicouche : libre ou estérifiée ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cholestérol libre",
        "libre",
        "forme libre"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le cholestérol libre est amphiphile et membranaire ; l'ester de cholestérol est fortement hydrophobe et se stocke dans des phases lipidiques."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le transport du cholestérol par les lipoprotéines ?",
    "choices": [
      {
        "content": "HDL signifie que le cholestérol est devenu hydrosoluble par lui-même.",
        "correct": false,
        "explanation": "Le transport repose sur une particule amphiphile."
      },
      {
        "content": "Les esters de cholestérol sont exposés à l'eau à la surface de la particule.",
        "correct": false,
        "explanation": "Ils se placent dans le cœur hydrophobe."
      },
      {
        "content": "LDL est une molécule de cholestérol modifiée chimiquement.",
        "correct": false,
        "explanation": "LDL est une particule lipoprotéique."
      },
      {
        "content": "Le cholestérol ne circule jamais dans le sang.",
        "correct": false,
        "explanation": "Il y circule associé aux lipoprotéines."
      },
      {
        "content": "Le cholestérol libre se localise davantage en surface des lipoprotéines.",
        "correct": true,
        "explanation": "Son OH peut interagir avec le milieu aqueux."
      }
    ],
    "explanation": "Les lipoprotéines transportent cholestérol libre en surface et esters de cholestérol dans leur cœur hydrophobe."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une situation d'application n°2, concernant les acides biliaires, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils comportent tous 27 carbones comme le cholestérol.",
        "correct": false,
        "explanation": "Les acides biliaires humains classiques sont C24."
      },
      {
        "content": "Ils sont sécrétés dans la bile puis majoritairement réabsorbés dans la circulation entérohépatique.",
        "correct": true,
        "explanation": "Le recyclage limite la synthèse de novo nécessaire."
      },
      {
        "content": "Ils sont des protéines digestives.",
        "correct": false,
        "explanation": "Ce sont des dérivés stéroïdiens."
      },
      {
        "content": "Ils sont synthétisés uniquement par le pancréas.",
        "correct": false,
        "explanation": "La synthèse principale est hépatique."
      },
      {
        "content": "Leur caractère amphiphile favorise l'émulsification et la digestion des lipides.",
        "correct": true,
        "explanation": "Ils contribuent à la formation de micelles mixtes intestinales."
      }
    ],
    "explanation": "Les acides biliaires sont des dérivés C24 du cholestérol synthétisés par le foie et essentiels à la digestion/absorption des lipides."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la structure du cholestérol, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il possède trois acides gras estérifiés.",
        "correct": false,
        "explanation": "Cela décrit un TAG."
      },
      {
        "content": "Il ne possède aucune chaîne latérale.",
        "correct": false,
        "explanation": "Une chaîne est portée en C17."
      },
      {
        "content": "Il porte un groupement OH en C3.",
        "correct": true,
        "explanation": "Cet OH est le petit pôle hydrophile de la forme libre."
      },
      {
        "content": "Le cholestérol comporte 27 carbones.",
        "correct": true,
        "explanation": "Son squelette inclut le noyau stéroïdien, deux méthyles et une chaîne latérale."
      },
      {
        "content": "Le cholestérol comporte 18 carbones.",
        "correct": false,
        "explanation": "Le noyau estrane est C18 ; le cholestérol est C27."
      }
    ],
    "explanation": "Le cholestérol est un stérol C27 avec OH C3, double liaison C5-C6 et chaîne latérale C17."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle forme du cholestérol est adaptée à l'insertion dans une bicouche : libre ou estérifiée ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cholestérol libre",
        "libre",
        "forme libre"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le cholestérol libre est amphiphile et membranaire ; l'ester de cholestérol est fortement hydrophobe et se stocke dans des phases lipidiques."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le transport du cholestérol par les lipoprotéines ?",
    "choices": [
      {
        "content": "HDL signifie que le cholestérol est devenu hydrosoluble par lui-même.",
        "correct": false,
        "explanation": "Le transport repose sur une particule amphiphile."
      },
      {
        "content": "Les esters de cholestérol sont exposés à l'eau à la surface de la particule.",
        "correct": false,
        "explanation": "Ils se placent dans le cœur hydrophobe."
      },
      {
        "content": "Le cholestérol circule dans le plasma au sein de lipoprotéines.",
        "correct": true,
        "explanation": "Sa faible solubilité impose un transport organisé."
      },
      {
        "content": "LDL est une molécule de cholestérol modifiée chimiquement.",
        "correct": false,
        "explanation": "LDL est une particule lipoprotéique."
      },
      {
        "content": "Le cholestérol ne circule jamais dans le sang.",
        "correct": false,
        "explanation": "Il y circule associé aux lipoprotéines."
      }
    ],
    "explanation": "Les lipoprotéines transportent cholestérol libre en surface et esters de cholestérol dans leur cœur hydrophobe."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les acides biliaires, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils possèdent un squelette C24 après raccourcissement de la chaîne latérale.",
        "correct": true,
        "explanation": "Le noyau cholane sert de repère structural."
      },
      {
        "content": "Leur caractère amphiphile favorise l'émulsification et la digestion des lipides.",
        "correct": true,
        "explanation": "Ils contribuent à la formation de micelles mixtes intestinales."
      },
      {
        "content": "Ils sont synthétisés à partir du cholestérol dans le foie.",
        "correct": true,
        "explanation": "Le cholestérol est leur précurseur."
      },
      {
        "content": "Ils sont synthétisés uniquement par le pancréas.",
        "correct": false,
        "explanation": "La synthèse principale est hépatique."
      },
      {
        "content": "Ils comportent tous 27 carbones comme le cholestérol.",
        "correct": false,
        "explanation": "Les acides biliaires humains classiques sont C24."
      }
    ],
    "explanation": "Les acides biliaires sont des dérivés C24 du cholestérol synthétisés par le foie et essentiels à la digestion/absorption des lipides."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la vitamine D comme dérivé stéroïdien, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Elle est synthétisée à partir du glycogène cutané.",
        "correct": false,
        "explanation": "Le précurseur est le 7-déhydrocholestérol."
      },
      {
        "content": "Elle n'a aucun lien avec le cholestérol.",
        "correct": false,
        "explanation": "Son précurseur cutané est un dérivé du cholestérol."
      },
      {
        "content": "La vitamine D favorise spécifiquement l'absorption du potassium à la place du phosphate.",
        "correct": false,
        "explanation": "Le couple majeur est calcium-phosphate."
      },
      {
        "content": "Elle contribue à la minéralisation osseuse en assurant une disponibilité adéquate en calcium et phosphate.",
        "correct": true,
        "explanation": "Son effet dépend de l'état physiologique."
      },
      {
        "content": "La vitamine D est un sécostéroïde.",
        "correct": true,
        "explanation": "Un cycle du squelette stéroïdien est ouvert."
      }
    ],
    "explanation": "La vitamine D3 dérive du 7-déhydrocholestérol ; sa forme active régule surtout calcium et phosphate.",
    "requiredSelectionCount": 2
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel dérivé du cholestérol participe directement à l'émulsification et à l'absorption intestinale des lipides ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acides biliaires",
        "sels biliaires",
        "acide biliaire",
        "sel biliaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les acides et sels biliaires, synthétisés à partir du cholestérol, sont amphiphiles et facilitent la digestion/absorption des lipides."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de carbones comporte le cholestérol ?",
    "answer": {
      "type": "number",
      "value": 27,
      "tolerance": 0
    },
    "explanation": "Le cholestérol est un stérol C27 avec OH C3, double liaison C5-C6 et chaîne latérale C17."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant le cholestérol dans les membranes, laquelle est correcte ?",
    "choices": [
      {
        "content": "Il module la fluidité membranaire.",
        "correct": true,
        "explanation": "Son effet dépend notamment de la température et de la composition lipidique."
      },
      {
        "content": "Le cholestérol est absent des membranes animales.",
        "correct": false,
        "explanation": "Il en est un constituant majeur."
      },
      {
        "content": "Il constitue une protéine transmembranaire.",
        "correct": false,
        "explanation": "C'est un lipide."
      },
      {
        "content": "Le cholestérol estérifié est la forme principale insérée dans la bicouche.",
        "correct": false,
        "explanation": "La forme libre avec OH est la forme membranaire adaptée."
      },
      {
        "content": "Il rend la membrane toujours plus fluide quelle que soit la température.",
        "correct": false,
        "explanation": "Son effet est tampon et dépend du contexte."
      }
    ],
    "explanation": "Le cholestérol libre est amphiphile et membranaire ; l'ester de cholestérol est fortement hydrophobe et se stocke dans des phases lipidiques."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le transport du cholestérol par les lipoprotéines ?",
    "choices": [
      {
        "content": "HDL signifie que le cholestérol est devenu hydrosoluble par lui-même.",
        "correct": false,
        "explanation": "Le transport repose sur une particule amphiphile."
      },
      {
        "content": "Les esters de cholestérol sont exposés à l'eau à la surface de la particule.",
        "correct": false,
        "explanation": "Ils se placent dans le cœur hydrophobe."
      },
      {
        "content": "Le cholestérol ne circule jamais dans le sang.",
        "correct": false,
        "explanation": "Il y circule associé aux lipoprotéines."
      },
      {
        "content": "Les esters de cholestérol se trouvent surtout dans le cœur hydrophobe des lipoprotéines.",
        "correct": true,
        "explanation": "Ils n'ont plus d'OH libre."
      },
      {
        "content": "LDL et HDL désignent des classes de particules, pas deux formes chimiques de cholestérol.",
        "correct": true,
        "explanation": "Une même molécule de cholestérol peut être transportée par différentes lipoprotéines."
      }
    ],
    "explanation": "Les lipoprotéines transportent cholestérol libre en surface et esters de cholestérol dans leur cœur hydrophobe."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel couple minéral est principalement concerné par l'action endocrine de la vitamine D active ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "calcium et phosphate",
        "calcium et phosphore",
        "Ca et phosphate",
        "Ca2+ et phosphate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le calcitriol participe surtout à l'homéostasie du calcium et du phosphate ; la mention « potassium » dans une correction étudiante est un piège à ne pas reprendre."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant la vitamine D comme dérivé stéroïdien, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Après hydroxylations hépatique puis rénale, sa forme active participe à l'homéostasie phosphocalcique.",
        "correct": true,
        "explanation": "Le calcitriol augmente notamment l'absorption intestinale du calcium et du phosphate."
      },
      {
        "content": "La vitamine D est un sécostéroïde.",
        "correct": true,
        "explanation": "Un cycle du squelette stéroïdien est ouvert."
      },
      {
        "content": "Elle n'a aucun lien avec le cholestérol.",
        "correct": false,
        "explanation": "Son précurseur cutané est un dérivé du cholestérol."
      },
      {
        "content": "Elle contribue à la minéralisation osseuse en assurant une disponibilité adéquate en calcium et phosphate.",
        "correct": true,
        "explanation": "Son effet dépend de l'état physiologique."
      },
      {
        "content": "Elle est un triacylglycérol.",
        "correct": false,
        "explanation": "C'est un sécostéroïde."
      }
    ],
    "explanation": "La vitamine D3 dérive du 7-déhydrocholestérol ; sa forme active régule surtout calcium et phosphate."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel carbone du cholestérol porte le groupement OH estérifié ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "L'estérification du OH C3 transforme le cholestérol libre amphiphile en ester de cholestérol fortement hydrophobe."
  }
];
