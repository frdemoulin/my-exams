import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.6 – Section A – Aldéhydes et cétones : reconnaissance et préparation
 */

export const UE14_CH10_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'un aldéhyde dans la fiche, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il peut être représenté par $\\mathrm{R{-}CHO}$.",
        "correct": true,
        "explanation": "C'est l'écriture recommandée par la fiche."
      },
      {
        "content": "Le carbone carbonylé est situé en bout de chaîne.",
        "correct": true,
        "explanation": "Le motif aldéhydique est terminal."
      },
      {
        "content": "Le suffixe de nomenclature est -al.",
        "correct": true,
        "explanation": "La fiche indique nom de l'hydrocarbure + -al."
      },
      {
        "content": "Il s'écrit de préférence RCOH pour ne pas le confondre avec un alcool.",
        "correct": false,
        "explanation": "La fiche recommande au contraire RCHO afin d'éviter la confusion avec un alcool."
      }
    ],
    "explanation": "L'aldéhyde se reconnaît par un carbonyle terminal portant H et s'écrit RCHO."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel composé correspond au méthanal ?",
    "choices": [
      {
        "content": "Le formaldéhyde.",
        "correct": true,
        "explanation": "Le méthanal est aussi appelé formaldéhyde."
      },
      {
        "content": "La propanone.",
        "correct": false,
        "explanation": "C'est l'acétone."
      },
      {
        "content": "L'éthanol.",
        "correct": false,
        "explanation": "C'est un alcool."
      },
      {
        "content": "L'acide méthanoïque.",
        "correct": false,
        "explanation": "C'est un acide carboxylique."
      }
    ],
    "explanation": "Le méthanal est le formaldéhyde ; en solution aqueuse, la fiche mentionne le formol."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du méthanal selon la fiche :",
    "choices": [
      {
        "content": "Son nom usuel est formaldéhyde.",
        "correct": true,
        "explanation": "Synonyme indiqué."
      },
      {
        "content": "En solution aqueuse, la fiche emploie le terme formol.",
        "correct": true,
        "explanation": "Précision donnée."
      },
      {
        "content": "Dans RCHO, R est ici un hydrogène.",
        "correct": true,
        "explanation": "Cas particulier du méthanal."
      },
      {
        "content": "C'est une cétone.",
        "correct": false,
        "explanation": "Le méthanal est l'aldéhyde le plus simple."
      }
    ],
    "explanation": "Le méthanal est un cas particulier d'aldéhyde où le substituant R est lui-même H."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'une cétone dans la fiche :",
    "choices": [
      {
        "content": "Elle peut être représentée par $\\mathrm{R{-}CO{-}R'}$.",
        "correct": true,
        "explanation": "Motif général."
      },
      {
        "content": "R et R' ne peuvent pas être H dans la définition présentée.",
        "correct": true,
        "explanation": "Le carbonyle est interne."
      },
      {
        "content": "Le suffixe est -one.",
        "correct": true,
        "explanation": "Nomenclature indiquée."
      },
      {
        "content": "Son carbone carbonylé est obligatoirement en bout de chaîne.",
        "correct": false,
        "explanation": "C'est l'aldéhyde qui possède un carbonyle terminal."
      }
    ],
    "explanation": "Une cétone possède un carbonyle interne lié à deux substituants carbonés."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom usuel de la propanone ?",
    "choices": [
      {
        "content": "Acétone.",
        "correct": true,
        "explanation": "Cas usuel cité dans la fiche."
      },
      {
        "content": "Formol.",
        "correct": false,
        "explanation": "Formol désigne le méthanal en solution aqueuse."
      },
      {
        "content": "Éthanal.",
        "correct": false,
        "explanation": "C'est un aldéhyde."
      },
      {
        "content": "Acide propanoïque.",
        "correct": false,
        "explanation": "C'est un acide carboxylique."
      }
    ],
    "explanation": "La propanone est l'acétone."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions permettent de distinguer aldéhyde et cétone ?",
    "choices": [
      {
        "content": "Dans l'aldéhyde, le carbone carbonylé porte un hydrogène.",
        "correct": true,
        "explanation": "Motif R-CO-H."
      },
      {
        "content": "Dans la cétone, le carbone carbonylé porte deux substituants carbonés.",
        "correct": true,
        "explanation": "Motif R-CO-R'."
      },
      {
        "content": "Les deux contiennent un groupe carbonyle C=O.",
        "correct": true,
        "explanation": "Point commun."
      },
      {
        "content": "La présence d'un carbonyle suffit à conclure qu'il s'agit forcément d'un aldéhyde.",
        "correct": false,
        "explanation": "Une cétone contient aussi un carbonyle."
      }
    ],
    "explanation": "Il faut regarder l'environnement du carbone carbonylé."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la préparation d'un aldéhyde par oxydation d'un alcool primaire :",
    "choices": [
      {
        "content": "Un alcool primaire peut être oxydé en aldéhyde.",
        "correct": true,
        "explanation": "Voie de préparation donnée."
      },
      {
        "content": "Une oxydation trop poussée peut conduire à un acide carboxylique.",
        "correct": true,
        "explanation": "La fiche parle de suroxydation."
      },
      {
        "content": "L'aldéhyde peut ne pas être isolé si les conditions sont trop fortes.",
        "correct": true,
        "explanation": "Précision du support."
      },
      {
        "content": "Un alcool primaire oxydé donne directement une cétone.",
        "correct": false,
        "explanation": "Il donne un aldéhyde, puis éventuellement un acide."
      }
    ],
    "explanation": "L'oxydation doit être contrôlée si l'on veut isoler l'aldéhyde."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'oxydation d'un alcool secondaire :",
    "choices": [
      {
        "content": "Elle conduit à une cétone.",
        "correct": true,
        "explanation": "Voie de préparation indiquée."
      },
      {
        "content": "La cétone est présentée comme le degré d'oxydation maximal de cette voie.",
        "correct": true,
        "explanation": "Le support l'indique."
      },
      {
        "content": "La fiche ne prévoit pas de risque de suroxydation comparable à celui de l'aldéhyde.",
        "correct": true,
        "explanation": "C'est le contraste donné."
      },
      {
        "content": "Elle conduit d'abord à un aldéhyde.",
        "correct": false,
        "explanation": "L'alcool secondaire donne une cétone."
      }
    ],
    "explanation": "Alcool secondaire → cétone, sans suroxydation dans le modèle de la fiche."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'oxydation forte d'un alcène peut préparer des composés carbonylés. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La double liaison est coupée.",
        "correct": true,
        "explanation": "C'est le principe présenté."
      },
      {
        "content": "Selon les substituants, on peut former un aldéhyde et/ou une cétone.",
        "correct": true,
        "explanation": "Le produit dépend de l'environnement des carbones de C=C."
      },
      {
        "content": "Le choix d'un alcène symétrique peut simplifier le nombre de produits.",
        "correct": true,
        "explanation": "La fiche recommande la symétrie pour l'intérêt préparatif."
      },
      {
        "content": "La double liaison reste intacte.",
        "correct": false,
        "explanation": "Elle est rompue en conditions d'oxydation forte."
      }
    ],
    "explanation": "La coupure oxydante d'un alcène permet d'accéder à des aldéhydes et/ou cétones."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel type d'alcène est présenté comme intéressant pour n'obtenir qu'un seul produit lors d'une coupure oxydante forte ?",
    "choices": [
      {
        "content": "Un alcène symétrique dans le modèle de la fiche.",
        "correct": true,
        "explanation": "La symétrie limite la diversité des fragments."
      },
      {
        "content": "N'importe quel alcène dissymétrique.",
        "correct": false,
        "explanation": "Il peut donner plusieurs produits."
      },
      {
        "content": "Un alcane.",
        "correct": false,
        "explanation": "Il n'a pas de double liaison à couper."
      },
      {
        "content": "Un alcyne uniquement.",
        "correct": false,
        "explanation": "La question porte sur l'oxydation d'un alcène."
      }
    ],
    "explanation": "Le support conseille un alcène symétrique pour simplifier la préparation."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcool primaire est oxydé dans des conditions ménagées puis, dans une autre expérience, dans des conditions plus fortes. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Conditions ménagées : aldéhyde.",
        "correct": true,
        "explanation": "Premier degré d'oxydation."
      },
      {
        "content": "Conditions fortes : l'aldéhyde peut être dépassé au profit de l'acide carboxylique.",
        "correct": true,
        "explanation": "Suroxydation."
      },
      {
        "content": "La cétone est l'intermédiaire obligatoire.",
        "correct": false,
        "explanation": "Ce n'est pas la voie de l'alcool primaire."
      },
      {
        "content": "Le degré d'oxydation augmente de l'alcool vers l'acide.",
        "correct": true,
        "explanation": "C'est le raisonnement du support."
      }
    ],
    "explanation": "La maîtrise de l'intensité d'oxydation permet de comprendre la difficulté d'isoler certains aldéhydes."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcool secondaire est oxydé. Quelles conclusions sont cohérentes avec la fiche ?",
    "choices": [
      {
        "content": "Une cétone est formée.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Le produit est présenté comme au degré d'oxydation maximal de cette voie.",
        "correct": true,
        "explanation": "Pas de suroxydation retenue."
      },
      {
        "content": "Un acide carboxylique est nécessairement formé ensuite.",
        "correct": false,
        "explanation": "La fiche indique l'absence de risque de suroxydation."
      },
      {
        "content": "Le substrat n'est pas un alcool primaire.",
        "correct": true,
        "explanation": "La classe d'alcool détermine le produit."
      }
    ],
    "explanation": "Alcool secondaire et cétone constituent le couple d'oxydoréduction retenu."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors d'une coupure oxydante forte d'un alcène, le type de carbonyle formé dépend :",
    "choices": [
      {
        "content": "Des substituants portés par les carbones de la double liaison.",
        "correct": true,
        "explanation": "C'est le critère donné."
      },
      {
        "content": "De la présence ou non d'un hydrogène sur ces carbones.",
        "correct": true,
        "explanation": "Cela distingue notamment aldéhyde et cétone dans le modèle."
      },
      {
        "content": "De la symétrie éventuelle de l'alcène.",
        "correct": true,
        "explanation": "Elle influence le nombre de produits distincts."
      },
      {
        "content": "Uniquement du nombre total d'atomes d'oxygène avant réaction.",
        "correct": false,
        "explanation": "Le support raisonne sur les substituants de C=C."
      }
    ],
    "explanation": "La structure locale de l'alcène prédit les fragments carbonylés."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la réduction d'un acide carboxylique vers un aldéhyde dans la fiche :",
    "choices": [
      {
        "content": "La fonction acide est difficile à réduire.",
        "correct": true,
        "explanation": "Point explicite."
      },
      {
        "content": "Des conditions fortes sont nécessaires dans le modèle présenté.",
        "correct": true,
        "explanation": "Le support le précise."
      },
      {
        "content": "Ces conditions fortes risquent de poursuivre la réduction de l'aldéhyde jusqu'à l'alcool.",
        "correct": true,
        "explanation": "D'où la difficulté à isoler l'aldéhyde."
      },
      {
        "content": "L'aldéhyde est toujours facilement isolé dans ces conditions.",
        "correct": false,
        "explanation": "C'est précisément la difficulté évoquée."
      }
    ],
    "explanation": "La réduction directe de l'acide est peu sélective vers l'aldéhyde dans le modèle du cours."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La fiche indique cependant deux moyens/contexte permettant d'obtenir un aldéhyde à partir d'un dérivé d'acide. Lesquels ?",
    "choices": [
      {
        "content": "Certaines enzymes de l'organisme peuvent réduire un acide carboxylique en aldéhyde.",
        "correct": true,
        "explanation": "Contexte biologique explicitement cité."
      },
      {
        "content": "Transformer l'acide en acide activé peut permettre une réduction vers l'aldéhyde.",
        "correct": true,
        "explanation": "Voie préparative citée."
      },
      {
        "content": "Réduire un chlorure d'acyle peut conduire à un aldéhyde.",
        "correct": true,
        "explanation": "Section suivante."
      },
      {
        "content": "Oxydation forte d'une cétone donne systématiquement un aldéhyde.",
        "correct": false,
        "explanation": "La cétone est présentée comme inerte à l'oxydation."
      }
    ],
    "explanation": "Le support distingue la difficulté de l'acide libre et la possibilité de passer par un dérivé activé."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel dérivé d'acide est explicitement présenté comme réductible en aldéhyde ?",
    "choices": [
      {
        "content": "Un chlorure d'acyle.",
        "correct": true,
        "explanation": "La fiche écrit chlorure d'acyle → aldéhyde."
      },
      {
        "content": "Un alcane.",
        "correct": false,
        "explanation": "Ce n'est pas un dérivé d'acide."
      },
      {
        "content": "Une amine.",
        "correct": false,
        "explanation": "Ce n'est pas la voie décrite."
      },
      {
        "content": "Un alcool tertiaire.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "La réduction contrôlée d'un chlorure d'acyle est une voie d'accès à l'aldéhyde."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare acide carboxylique et chlorure d'acyle comme précurseurs d'aldéhyde. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'acide carboxylique est décrit comme difficile à arrêter au stade aldéhyde.",
        "correct": true,
        "explanation": "Les conditions fortes poursuivent vers l'alcool."
      },
      {
        "content": "Le chlorure d'acyle peut être réduit en aldéhyde.",
        "correct": true,
        "explanation": "Voie explicite."
      },
      {
        "content": "L'activation de l'acide facilite l'accès au stade aldéhyde.",
        "correct": true,
        "explanation": "Conclusion du support."
      },
      {
        "content": "Les deux précurseurs sont strictement équivalents sans différence de sélectivité.",
        "correct": false,
        "explanation": "La fiche insiste sur leur différence."
      }
    ],
    "explanation": "La notion d'acide activé explique la stratégie de préparation plus sélective de l'aldéhyde."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une séquence de synthèse vise un aldéhyde à partir d'un alcool primaire. Quels pièges faut-il éviter ?",
    "choices": [
      {
        "content": "Utiliser des conditions d'oxydation trop fortes.",
        "correct": true,
        "explanation": "Elles peuvent mener à l'acide."
      },
      {
        "content": "Oublier que l'aldéhyde est lui-même oxydable.",
        "correct": true,
        "explanation": "Il peut être suroxydé."
      },
      {
        "content": "Confondre le produit attendu avec une cétone.",
        "correct": true,
        "explanation": "Un alcool primaire ne donne pas une cétone dans ce tableau."
      },
      {
        "content": "Considérer qu'un alcool primaire ne peut jamais être oxydé.",
        "correct": false,
        "explanation": "C'est une voie majeure de préparation."
      }
    ],
    "explanation": "Le contrôle des conditions est essentiel pour isoler l'aldéhyde."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcène symétrique est soumis à une coupure oxydante forte. Pourquoi ce choix peut-il être intéressant ?",
    "choices": [
      {
        "content": "Il peut limiter le nombre de produits carbonylés distincts.",
        "correct": true,
        "explanation": "Intérêt préparatif indiqué."
      },
      {
        "content": "Deux fragments identiques peuvent être obtenus.",
        "correct": true,
        "explanation": "Conséquence possible de la symétrie."
      },
      {
        "content": "Il facilite l'identification du produit attendu.",
        "correct": true,
        "explanation": "Intérêt pédagogique et préparatif cohérent avec la fiche."
      },
      {
        "content": "Il empêche toute coupure de la double liaison.",
        "correct": false,
        "explanation": "La coupure a bien lieu."
      }
    ],
    "explanation": "La symétrie simplifie le bilan de la coupure oxydante."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de dérivé d'acide la fiche propose-t-elle de réduire pour accéder directement à un aldéhyde ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "chlorure d'acyle",
        "chlorure acyle",
        "chlorure d acyle"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "La fiche indique explicitement : chlorure d'acyle → aldéhyde."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Alcool primaire + oxydation ménagée → aldéhyde.",
        "correct": true,
        "explanation": "Préparation."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "Préparation."
      },
      {
        "content": "Aldéhyde + oxydation poussée → acide carboxylique.",
        "correct": true,
        "explanation": "Suroxydation."
      },
      {
        "content": "Chlorure d'acyle + réduction → aldéhyde.",
        "correct": true,
        "explanation": "Voie citée."
      },
      {
        "content": "Oxydation forte d'un alcène → coupure de C=C.",
        "correct": true,
        "explanation": "Préparation."
      },
      {
        "content": "Alcool primaire + oxydation → cétone.",
        "correct": false,
        "explanation": "Aldéhyde."
      },
      {
        "content": "Cétone + oxydation simple → acide carboxylique dans la fiche.",
        "correct": false,
        "explanation": "La cétone est donnée inerte à l'oxydation."
      },
      {
        "content": "Acide carboxylique libre + réduction forte permet toujours d'isoler l'aldéhyde.",
        "correct": false,
        "explanation": "La réduction se poursuit vers l'alcool."
      },
      {
        "content": "Le méthanal est une cétone.",
        "correct": false,
        "explanation": "Aldéhyde."
      },
      {
        "content": "Propanone = formaldéhyde.",
        "correct": false,
        "explanation": "Propanone = acétone."
      }
    ],
    "explanation": "Cette sélection consolide reconnaissance et principales voies de préparation."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de grandes voies de préparation d'un aldéhyde sont explicitement distinguées dans la fiche avant la partie propriétés : oxydation d'un alcool, coupure oxydante d'un alcène, réduction d'un dérivé d'acide ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "La fiche présente ces trois familles de voies, avec plusieurs variantes pour la réduction des dérivés d'acide."
  }
];
