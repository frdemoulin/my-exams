import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.6 – Section A – Aldéhydes et cétones : reconnaissance et préparation
 */

export const UE14_CH10_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'un aldéhyde, quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Il peut être représenté par $\\mathrm{R{-}CHO}$.",
        "correct": true,
        "explanation": "C'est l'écriture recommandée par la."
      },
      {
        "content": "Le carbone carbonylé est situé en bout de chaîne.",
        "correct": true,
        "explanation": "Le motif aldéhydique est terminal."
      },
      {
        "content": "Le suffixe de nomenclature est -al.",
        "correct": true,
        "explanation": "nom de l'hydrocarbure + -al."
      },
      {
        "content": "Il s'écrit de préférence RCOH pour ne pas le confondre avec un alcool.",
        "correct": false,
        "explanation": "La recommande au contraire RCHO afin d'éviter la confusion avec un alcool."
      }
    ],
    "explanation": "L'aldéhyde se reconnaît par un carbonyle terminal portant H et s'écrit RCHO."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel composé correspond au méthanal?",
    "choices": [
      {
        "content": "Le formaldéhyde.",
        "correct": true,
        "explanation": "Le méthanal est aussi appelé formaldéhyde."
      },
      {
        "content": "L'acide méthanoïque.",
        "correct": false,
        "explanation": "C'est un acide carboxylique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Cétone.",
        "correct": false,
        "explanation": "Une cétone porte deux substituants carbonés sur le carbone du carbonyle."
      },
      {
        "content": "La propanone.",
        "correct": false,
        "explanation": "C'est l'acétone: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'éthanol.",
        "correct": false,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      }
    ],
    "explanation": "Le méthanal est le formaldéhyde; en solution aqueuse, la mentionne le formol."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du méthanal:",
    "choices": [
      {
        "content": "Son nom usuel est formaldéhyde.",
        "correct": true,
        "explanation": "Synonyme indiqué: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "En solution aqueuse, la emploie le terme formol.",
        "correct": true,
        "explanation": "Précision donnée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Dans RCHO, R est ici un hydrogène.",
        "correct": true,
        "explanation": "Cas particulier du méthanal: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "C'est une cétone.",
        "correct": false,
        "explanation": "Le méthanal est l'aldéhyde le plus simple."
      },
      {
        "content": "La propanone est un aldéhyde.",
        "correct": false,
        "explanation": "La propanone possède un carbonyle lié à deux groupes carbonés: c’est une cétone."
      }
    ],
    "explanation": "Le méthanal est un cas particulier d'aldéhyde où le substituant R est lui-même H."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'une cétone:",
    "choices": [
      {
        "content": "Son carbone carbonylé est obligatoirement en bout de chaîne.",
        "correct": false,
        "explanation": "C'est l'aldéhyde qui possède un carbonyle terminal."
      },
      {
        "content": "Le carbone du groupe carbonyle présente un caractère électrophile.",
        "correct": true,
        "explanation": "L’oxygène attire la densité électronique de la liaison $\\ce{C=O}$, ce qui appauvrit le carbone."
      },
      {
        "content": "Elle ne peut pas être représentée par $\\mathrm{R{-}CO{-}R'}$.",
        "correct": false,
        "explanation": "La relation correcte est: « Elle peut être représentée par $\\mathrm{R{-}CO{-}R'}$ ». La négation proposée est donc fausse."
      },
      {
        "content": "R et R' ne peuvent pas être H dans la définition présentée.",
        "correct": true,
        "explanation": "Le carbonyle est interne: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le suffixe est -one.",
        "correct": true,
        "explanation": "Nomenclature indiquée: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Une cétone possède un carbonyle interne lié à deux substituants carbonés."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom usuel de la propanone?",
    "choices": [
      {
        "content": "Éthanal.",
        "correct": false,
        "explanation": "C'est un aldéhyde: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Acétone.",
        "correct": true,
        "explanation": "Cas usuel cité: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Acide propanoïque.",
        "correct": false,
        "explanation": "C'est un acide carboxylique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une cétone possède nécessairement un hydrogène directement lié au carbone carbonylé.",
        "correct": false,
        "explanation": "La présence d’un hydrogène sur le carbone carbonylé caractérise un aldéhyde, pas une cétone."
      },
      {
        "content": "Formol.",
        "correct": false,
        "explanation": "Formol désigne le méthanal en solution aqueuse."
      }
    ],
    "explanation": "La propanone est l'acétone : cette relation est conforme à la propriété ou à la transformation décrite."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions permettent de distinguer aldéhyde et cétone?",
    "choices": [
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Dans l'aldéhyde, le carbone carbonylé porte un hydrogène.",
        "correct": true,
        "explanation": "Motif R-CO-H: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Dans la cétone, le carbone carbonylé porte deux substituants carbonés.",
        "correct": true,
        "explanation": "Motif R-CO-R': cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les deux contiennent un groupe carbonyle C=O.",
        "correct": true,
        "explanation": "Point commun: cette relation est conforme à la propriété ou à la transformation décrite."
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
        "content": "L'aldéhyde peut ne pas être isolé si les conditions sont trop fortes.",
        "correct": true,
        "explanation": "Précision: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un alcool primaire oxydé donne directement une cétone.",
        "correct": false,
        "explanation": "Il donne un aldéhyde, puis éventuellement un acide."
      },
      {
        "content": "L’oxydation d’un alcool secondaire conduit à une cétone.",
        "correct": true,
        "explanation": "Le carbone portant $\\ce{-OH}$ devient le carbone du groupe carbonyle."
      },
      {
        "content": "Un alcool primaire peut être oxydé en aldéhyde.",
        "correct": true,
        "explanation": "Voie de préparation donnée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une oxydation trop poussée peut conduire à un acide carboxylique.",
        "correct": true,
        "explanation": "La parle de suroxydation: cette relation est conforme à la propriété ou à la transformation décrite."
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
        "content": "Elle ne conduit pas à une cétone.",
        "correct": false,
        "explanation": "La relation correcte est: « Elle conduit à une cétone ». La négation proposée est donc fausse."
      },
      {
        "content": "La cétone est présentée comme le degré d'oxydation maximal de cette voie.",
        "correct": true,
        "explanation": "Le support l'indique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La ne prévoit pas de risque de suroxydation comparable à celui de l'aldéhyde.",
        "correct": true,
        "explanation": "C'est le contraste donné: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elle conduit d'abord à un aldéhyde.",
        "correct": false,
        "explanation": "L'alcool secondaire donne une cétone."
      },
      {
        "content": "L’oxydation ménagée d’un alcool primaire peut conduire à un aldéhyde.",
        "correct": true,
        "explanation": "L’aldéhyde correspond au premier produit d’oxydation retenu avant la sur-oxydation en acide."
      }
    ],
    "explanation": "Alcool secondaire → cétone, sans suroxydation dans le modèle."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'oxydation forte d'un alcène peut préparer des composés carbonylés. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "La double liaison reste intacte.",
        "correct": false,
        "explanation": "Elle est rompue en conditions d'oxydation forte."
      },
      {
        "content": "Une oxydation forte d’un alcène conserve toujours intacte la liaison entre les deux carbones de $\\ce{C=C}$.",
        "correct": false,
        "explanation": "La coupure de la double liaison fait partie du bilan retenu."
      },
      {
        "content": "La double liaison est coupée.",
        "correct": true,
        "explanation": "C'est le principe présenté: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Selon les substituants, on peut former un aldéhyde et/ou une cétone.",
        "correct": true,
        "explanation": "Le produit dépend de l'environnement des carbones de C=C."
      },
      {
        "content": "Le choix d'un alcène symétrique peut simplifier le nombre de produits.",
        "correct": true,
        "explanation": "La recommande la symétrie pour l'intérêt préparatif."
      }
    ],
    "explanation": "La coupure oxydante d'un alcène permet d'accéder à des aldéhydes et/ou cétones."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel type d'alcène est présenté comme intéressant pour n'obtenir qu'un seul produit lors d'une coupure oxydante forte?",
    "choices": [
      {
        "content": "Un alcyne uniquement.",
        "correct": false,
        "explanation": "La question porte sur l'oxydation d'un alcène."
      },
      {
        "content": "Hydrogénation sans coupure.",
        "correct": false,
        "explanation": "Cette description ne correspond pas à l’oxydation forte de l’alcène."
      },
      {
        "content": "Un alcène symétrique dans le modèle.",
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
      }
    ],
    "explanation": "Le support conseille un alcène symétrique pour simplifier la préparation."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcool primaire est oxydé dans des conditions ménagées puis, dans une autre expérience, dans des conditions plus fortes. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L’oxydation d’un alcool secondaire conduit directement à un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool secondaire donne une cétone dans le cadre du chapitre."
      },
      {
        "content": "Conditions ménagées: aldéhyde.",
        "correct": true,
        "explanation": "Premier degré d'oxydation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Conditions fortes: l'aldéhyde peut être dépassé au profit de l'acide carboxylique.",
        "correct": true,
        "explanation": "Suroxydation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La cétone est l'intermédiaire obligatoire.",
        "correct": false,
        "explanation": "Ce n'est pas la voie de l'alcool primaire."
      },
      {
        "content": "Le degré d'oxydation augmente de l'alcool vers l'acide.",
        "correct": true,
        "explanation": "C'est le raisonnement: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La maîtrise de l'intensité d'oxydation permet de comprendre la difficulté d'isoler certains aldéhydes."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcool secondaire est oxydé. Quelles conclusions sont cohérentes avec la?",
    "choices": [
      {
        "content": "Un acide carboxylique est nécessairement formé ensuite.",
        "correct": false,
        "explanation": "l'absence de risque de suroxydation."
      },
      {
        "content": "Le substrat n'est pas un alcool primaire.",
        "correct": true,
        "explanation": "La classe d'alcool détermine le produit."
      },
      {
        "content": "L’oxydation ménagée d’un alcool primaire peut conduire à un aldéhyde.",
        "correct": true,
        "explanation": "L’aldéhyde correspond au premier produit d’oxydation retenu avant la sur-oxydation en acide."
      },
      {
        "content": "Une cétone n’est pas formée.",
        "correct": false,
        "explanation": "La relation correcte est: « Une cétone est formée ». La négation proposée est donc fausse."
      },
      {
        "content": "Le produit est présenté comme au degré d'oxydation maximal de cette voie.",
        "correct": true,
        "explanation": "Cette proposition est écartée: de suroxydation retenue ne correspond pas au bilan ou à la propriété attendue."
      }
    ],
    "explanation": "Alcool secondaire et cétone constituent le couple d'oxydoréduction retenu."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors d'une coupure oxydante forte d'un alcène, le type de carbonyle formé dépend:",
    "choices": [
      {
        "content": "Des substituants portés par les carbones de la double liaison.",
        "correct": true,
        "explanation": "C'est le critère donné: cette relation est conforme à la propriété ou à la transformation décrite."
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
      },
      {
        "content": "Une oxydation forte d’un alcène conserve toujours intacte la liaison entre les deux carbones de $\\ce{C=C}$.",
        "correct": false,
        "explanation": "La coupure de la double liaison fait partie du bilan retenu."
      }
    ],
    "explanation": "La structure locale de l'alcène prédit les fragments carbonylés."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la réduction d'un acide carboxylique vers un aldéhyde:",
    "choices": [
      {
        "content": "L'aldéhyde est toujours facilement isolé dans ces conditions.",
        "correct": false,
        "explanation": "C'est précisément la difficulté évoquée."
      },
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "Le chapitre souligne au contraire que la fonction acide est plus difficile à réduire."
      },
      {
        "content": "La fonction acide n’est pas difficile à réduire.",
        "correct": false,
        "explanation": "La relation correcte est: « La fonction acide est difficile à réduire ». La négation proposée est donc fausse."
      },
      {
        "content": "Des conditions fortes sont nécessaires dans le modèle présenté.",
        "correct": true,
        "explanation": "Le support le précise: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Ces conditions fortes risquent de poursuivre la réduction de l'aldéhyde jusqu'à l'alcool.",
        "correct": true,
        "explanation": "D'où la difficulté à isoler l'aldéhyde."
      }
    ],
    "explanation": "La réduction directe de l'acide est peu sélective vers l'aldéhyde dans le modèle étudié."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "cependant deux moyens/contexte permettant d'obtenir un aldéhyde à partir d'un dérivé d'acide. Lesquels?",
    "choices": [
      {
        "content": "Transformer l'acide en acide activé peut permettre une réduction vers l'aldéhyde.",
        "correct": true,
        "explanation": "Voie préparative citée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Réduire un chlorure d'acyle peut conduire à un aldéhyde.",
        "correct": true,
        "explanation": "Section suivante: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Oxydation forte d'une cétone donne systématiquement un aldéhyde.",
        "correct": false,
        "explanation": "La cétone est présentée comme inerte à l'oxydation."
      },
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "Le chapitre souligne au contraire que la fonction acide est plus difficile à réduire."
      },
      {
        "content": "Certaines enzymes de l'organisme peuvent réduire un acide carboxylique en aldéhyde.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Le support distingue la difficulté de l'acide libre et la possibilité de passer par un dérivé activé."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel dérivé d'acide est explicitement présenté comme réductible en aldéhyde?",
    "choices": [
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
        "explanation": "Sans rapport: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un chlorure d'acyle.",
        "correct": true,
        "explanation": "La écrit chlorure d'acyle → aldéhyde."
      },
      {
        "content": "Ammonium quaternaire.",
        "correct": false,
        "explanation": "La réduction d’un dérivé d’acide ne crée pas un ammonium quaternaire."
      }
    ],
    "explanation": "La réduction contrôlée d'un chlorure d'acyle est une voie d'accès à l'aldéhyde."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare acide carboxylique et chlorure d'acyle comme précurseurs d'aldéhyde. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'activation de l'acide facilite l'accès au stade aldéhyde.",
        "correct": true,
        "explanation": "Conclusion: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les deux précurseurs sont strictement équivalents sans différence de sélectivité.",
        "correct": false,
        "explanation": "La insiste sur leur différence."
      },
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "Le chapitre souligne au contraire que la fonction acide est plus difficile à réduire."
      },
      {
        "content": "L'acide carboxylique est décrit comme difficile à arrêter au stade aldéhyde.",
        "correct": true,
        "explanation": "Les conditions fortes poursuivent vers l'alcool."
      },
      {
        "content": "Le chlorure d'acyle peut être réduit en aldéhyde.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "La notion d'acide activé explique la stratégie de préparation plus sélective de l'aldéhyde."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une séquence de synthèse vise un aldéhyde à partir d'un alcool primaire. Quels pièges faut-il éviter?",
    "choices": [
      {
        "content": "Utiliser des conditions d'oxydation trop fortes.",
        "correct": true,
        "explanation": "Elles peuvent mener à l'acide."
      },
      {
        "content": "Oublier que l'aldéhyde n’est pas lui-même oxydable.",
        "correct": false,
        "explanation": "La relation correcte est: « Oublier que l'aldéhyde est lui-même oxydable ». La négation proposée est donc fausse."
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
      },
      {
        "content": "L’oxydation d’un alcool secondaire conduit directement à un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool secondaire donne une cétone dans le cadre du chapitre."
      }
    ],
    "explanation": "Le contrôle des conditions est essentiel pour isoler l'aldéhyde."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcène symétrique est soumis à une coupure oxydante forte. Pourquoi ce choix peut-il être intéressant?",
    "choices": [
      {
        "content": "Il empêche toute coupure de la double liaison.",
        "correct": false,
        "explanation": "La coupure a bien lieu."
      },
      {
        "content": "Une oxydation forte d’un alcène conserve toujours intacte la liaison entre les deux carbones de $\\ce{C=C}$.",
        "correct": false,
        "explanation": "La coupure de la double liaison fait partie du bilan retenu."
      },
      {
        "content": "Il peut limiter le nombre de produits carbonylés distincts.",
        "correct": true,
        "explanation": "Intérêt préparatif indiqué: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Deux fragments identiques peuvent être obtenus.",
        "correct": true,
        "explanation": "Conséquence possible de la symétrie."
      },
      {
        "content": "Il facilite l'identification du produit attendu.",
        "correct": true,
        "explanation": "Intérêt pédagogique et préparatif cohérent avec la."
      }
    ],
    "explanation": "La symétrie simplifie le bilan de la coupure oxydante."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de dérivé d'acide la propose-t-elle de réduire pour accéder directement à un aldéhyde?",
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
    "explanation": "explicitement: chlorure d'acyle → aldéhyde."
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
        "explanation": "Préparation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "Préparation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Aldéhyde + oxydation poussée → acide carboxylique.",
        "correct": true,
        "explanation": "Suroxydation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Chlorure d'acyle + réduction → aldéhyde.",
        "correct": true,
        "explanation": "Voie citée : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Oxydation forte d'un alcène → coupure de C=C.",
        "correct": true,
        "explanation": "Préparation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Alcool primaire + oxydation → cétone.",
        "correct": false,
        "explanation": "Le motif ou le produit considéré correspond bien à une fonction aldéhyde."
      },
      {
        "content": "Cétone + oxydation simple → acide carboxylique.",
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
        "explanation": "Le motif ou le produit considéré correspond bien à une fonction aldéhyde."
      },
      {
        "content": "Propanone = formaldéhyde.",
        "correct": false,
        "explanation": "Propanone = acétone : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette sélection consolide reconnaissance et principales voies de préparation."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de grandes voies de préparation d'un aldéhyde sont explicitement distinguées avant la partie propriétés: oxydation d'un alcool, coupure oxydante d'un alcène, réduction d'un dérivé d'acide?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "ces trois familles de voies, avec plusieurs variantes pour la réduction des dérivés d'acide."
  }
];
