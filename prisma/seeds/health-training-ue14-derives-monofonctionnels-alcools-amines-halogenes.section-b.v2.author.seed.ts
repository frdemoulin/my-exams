import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.4 – Section B – Réactivité des alcools
 */

export const UE14_CH8_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'estérification d'un alcool avec un acide activé dans la fiche :",
    "choices": [
      {
        "content": "Un alcool peut réagir avec un chlorure d'acyle.",
        "correct": true,
        "explanation": "Le chlorure d'acyle est l'un des acides activés cités."
      },
      {
        "content": "Un alcool peut réagir avec un anhydride d'acide.",
        "correct": true,
        "explanation": "Deuxième famille citée."
      },
      {
        "content": "Le produit organique recherché est un ester.",
        "correct": true,
        "explanation": "Bilan : alcool + acide activé → ester."
      },
      {
        "content": "Une cétone est obligatoirement formée.",
        "correct": false,
        "explanation": "Le bilan du cours donne un ester."
      }
    ],
    "explanation": "Les acides activés rendent l'acylation de l'alcool efficace et conduisent à une fonction ester."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel motif correspond à un chlorure d'acyle dans la fiche ?",
    "choices": [
      {
        "content": "$\\ce{R-COCl}$.",
        "correct": true,
        "explanation": "C'est la formule indiquée."
      },
      {
        "content": "$\\ce{R-OH}$.",
        "correct": false,
        "explanation": "Alcool."
      },
      {
        "content": "$\\ce{R-NH2}$.",
        "correct": false,
        "explanation": "Amine primaire."
      },
      {
        "content": "$\\ce{R-CHO}$.",
        "correct": false,
        "explanation": "Aldéhyde."
      }
    ],
    "explanation": "Le chlorure d'acyle est l'un des deux acides activés utilisés pour l'estérification et l'amidification."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'un anhydride d'acide dans la fiche :",
    "choices": [
      {
        "content": "Il comporte un motif $\\ce{R-CO-O-CO-R'}$.",
        "correct": true,
        "explanation": "C'est la structure générique présentée."
      },
      {
        "content": "Il est classé parmi les acides activés du cours.",
        "correct": true,
        "explanation": "Il est utilisé pour les réactions d'acylation."
      },
      {
        "content": "Il peut réagir avec un alcool pour former un ester.",
        "correct": true,
        "explanation": "Réactivité des alcools."
      },
      {
        "content": "Il est identique à un alcane.",
        "correct": false,
        "explanation": "Il contient des carbonyles et un oxygène pontant."
      }
    ],
    "explanation": "L'anhydride d'acide est un dérivé activé du carboxyle permettant notamment l'estérification."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La formation d'un hémiacétal dans la fiche associe :",
    "choices": [
      {
        "content": "Un alcool.",
        "correct": true,
        "explanation": "Premier partenaire."
      },
      {
        "content": "Un aldéhyde.",
        "correct": true,
        "explanation": "Composé carbonylé utilisé."
      },
      {
        "content": "Un hémiacétal comme produit.",
        "correct": true,
        "explanation": "Bilan explicite."
      },
      {
        "content": "Une substitution nucléophile SN2 comme unique description de la réaction.",
        "correct": false,
        "explanation": "Le support la présente simplement comme formation d'hémiacétal."
      }
    ],
    "explanation": "Le bilan à retenir est alcool + aldéhyde → hémiacétal."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi la formation d'hémiacétals est-elle biologiquement pertinente dans le support ?",
    "choices": [
      {
        "content": "La fiche cite la cyclisation des sucres.",
        "correct": true,
        "explanation": "C'est l'exemple donné."
      },
      {
        "content": "La forme hémiacétalique est décrite comme fréquente dans les sucres cyclisés.",
        "correct": true,
        "explanation": "Lien explicite avec la biochimie."
      },
      {
        "content": "Cette réaction explique la formation des protéines.",
        "correct": false,
        "explanation": "Les protéines sont reliées ici à l'amidification."
      },
      {
        "content": "Elle ne concerne aucun composé biologique.",
        "correct": false,
        "explanation": "Les sucres sont précisément cités."
      }
    ],
    "explanation": "La cyclisation de nombreux oses met en jeu une forme hémiacétalique, ce qui relie la chimie organique à la biochimie."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'oxydation d'un alcool primaire $\\ce{R-CH2OH}$ :",
    "choices": [
      {
        "content": "Une oxydation douce conduit à un aldéhyde.",
        "correct": true,
        "explanation": "Premier niveau de la fiche."
      },
      {
        "content": "Une oxydation forte conduit à un acide carboxylique.",
        "correct": true,
        "explanation": "Deuxième niveau."
      },
      {
        "content": "Une oxydation douce donne nécessairement une cétone.",
        "correct": false,
        "explanation": "La cétone est issue d'un alcool secondaire."
      },
      {
        "content": "La classe de l'alcool influence donc le produit.",
        "correct": true,
        "explanation": "C'est le principe du tableau."
      }
    ],
    "explanation": "L'alcool primaire peut être oxydé au stade aldéhyde puis, plus fortement, au stade acide carboxylique."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'oxydation d'un alcool secondaire conduit, selon la fiche :",
    "choices": [
      {
        "content": "À une cétone.",
        "correct": true,
        "explanation": "Bilan indiqué."
      },
      {
        "content": "À un aldéhyde.",
        "correct": false,
        "explanation": "Produit de l'alcool primaire en oxydation douce."
      },
      {
        "content": "À un acide carboxylique directement dans le tableau.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan présenté."
      },
      {
        "content": "À la disparition de la fonction alcool.",
        "correct": true,
        "explanation": "Elle est remplacée par le carbonyle."
      }
    ],
    "explanation": "Un alcool secondaire est oxydé en cétone."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'un alcool tertiaire dans le tableau d'oxydation :",
    "choices": [
      {
        "content": "Il est décrit comme insensible à l'oxydation dans le cadre du cours.",
        "correct": true,
        "explanation": "La fiche indique « rien »."
      },
      {
        "content": "Il ne donne pas l'aldéhyde correspondant.",
        "correct": true,
        "explanation": "Aucun tel produit n'est prévu."
      },
      {
        "content": "Il ne donne pas la cétone correspondante dans ce modèle.",
        "correct": true,
        "explanation": "Le tableau ne prévoit pas d'oxydation."
      },
      {
        "content": "Il est toujours converti en acide carboxylique.",
        "correct": false,
        "explanation": "C'est explicitement exclu."
      }
    ],
    "explanation": "Dans le cadre simplifié du support, l'alcool tertiaire n'est pas oxydé."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La déshydratation d'un alcool :",
    "choices": [
      {
        "content": "Élimine une molécule d'eau.",
        "correct": true,
        "explanation": "Bilan indiqué."
      },
      {
        "content": "Forme un alcène.",
        "correct": true,
        "explanation": "Une double liaison apparaît."
      },
      {
        "content": "Est une réaction d'élimination.",
        "correct": true,
        "explanation": "Elle retire H et OH."
      },
      {
        "content": "Forme nécessairement une amide.",
        "correct": false,
        "explanation": "Aucun azote n'intervient."
      }
    ],
    "explanation": "La déshydratation est le trajet alcool → alcène + eau."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel bilan résume la déshydratation d'un alcool ?",
    "choices": [
      {
        "content": "Alcool → alcène + $\\ce{H2O}$.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "Alcool + $\\ce{H2}$ → alcane.",
        "correct": false,
        "explanation": "Hydrogénation."
      },
      {
        "content": "Alcool + Mg → organomagnésien.",
        "correct": false,
        "explanation": "Le substrat de Grignard est un dérivé halogéné."
      },
      {
        "content": "Alcool → amine + $\\ce{H2O}$.",
        "correct": false,
        "explanation": "Réaction non enseignée ici."
      }
    ],
    "explanation": "La déshydratation crée une double liaison par élimination d'eau."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcool primaire est soumis d'abord à une oxydation douce, puis le produit à une oxydation plus forte. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le premier produit est un aldéhyde.",
        "correct": true,
        "explanation": "Oxydation douce."
      },
      {
        "content": "Le produit final est un acide carboxylique.",
        "correct": true,
        "explanation": "Oxydation forte."
      },
      {
        "content": "La séquence augmente progressivement le degré d'oxydation.",
        "correct": true,
        "explanation": "Alcool → aldéhyde → acide."
      },
      {
        "content": "Une cétone est l'intermédiaire obligatoire.",
        "correct": false,
        "explanation": "Pas pour un alcool primaire."
      }
    ],
    "explanation": "La fiche présente une progression nette alcool primaire → aldéhyde → acide."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Le propan-2-ol est un alcool secondaire. Quel produit fonctionnel attend-on lors de son oxydation dans le modèle de la fiche ?",
    "choices": [
      {
        "content": "Une cétone.",
        "correct": true,
        "explanation": "Un alcool secondaire donne une cétone."
      },
      {
        "content": "Un aldéhyde.",
        "correct": false,
        "explanation": "Alcool primaire."
      },
      {
        "content": "Un acide carboxylique directement.",
        "correct": false,
        "explanation": "Non dans le tableau."
      },
      {
        "content": "Un ammonium quaternaire.",
        "correct": false,
        "explanation": "Pas d'azote."
      }
    ],
    "explanation": "Le propan-2-ol conduit à la propanone."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare propan-1-ol, propan-2-ol et 2-méthylpropan-2-ol. Quelles propositions sont exactes selon la réactivité du cours ?",
    "choices": [
      {
        "content": "Le premier peut donner un aldéhyde par oxydation douce.",
        "correct": true,
        "explanation": "Alcool primaire."
      },
      {
        "content": "Le deuxième peut donner une cétone.",
        "correct": true,
        "explanation": "Alcool secondaire."
      },
      {
        "content": "Le troisième est décrit comme insensible à l'oxydation.",
        "correct": true,
        "explanation": "Alcool tertiaire."
      },
      {
        "content": "Les trois donnent le même produit d'oxydation.",
        "correct": false,
        "explanation": "Leur classe modifie la réactivité."
      }
    ],
    "explanation": "La classe de l'alcool détermine sa réponse à l'oxydation."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'estérification avec un chlorure d'acyle :",
    "choices": [
      {
        "content": "Le groupe alcool fournit l'oxygène simple de l'ester.",
        "correct": true,
        "explanation": "Le motif RO-CO-R' est formé."
      },
      {
        "content": "Le carbone du chlorure d'acyle appartient au carbonyle de l'ester final.",
        "correct": true,
        "explanation": "Le fragment acyle est conservé."
      },
      {
        "content": "Le produit organique est un ester.",
        "correct": true,
        "explanation": "Bilan du cours."
      },
      {
        "content": "Le produit est une amine.",
        "correct": false,
        "explanation": "Aucun N n'est introduit."
      }
    ],
    "explanation": "Cette réaction convertit un alcool en ester grâce à un acide activé."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un étudiant hésite entre estérification et formation d'hémiacétal. Quels repères permettent de les distinguer ?",
    "choices": [
      {
        "content": "L'estérification de la fiche utilise un acide activé.",
        "correct": true,
        "explanation": "Chlorure d'acyle ou anhydride."
      },
      {
        "content": "La formation d'hémiacétal utilise un aldéhyde.",
        "correct": true,
        "explanation": "Bilan alcool + aldéhyde."
      },
      {
        "content": "Les deux utilisent un alcool comme partenaire.",
        "correct": true,
        "explanation": "Point commun."
      },
      {
        "content": "Les deux conduisent nécessairement au même groupe fonctionnel.",
        "correct": false,
        "explanation": "Ester et hémiacétal sont différents."
      }
    ],
    "explanation": "Identifier le second réactif permet de choisir la transformation."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un contexte biochimique, la cyclisation d'un sucre en forme hémiacétalique illustre :",
    "choices": [
      {
        "content": "Une réaction entre une fonction alcool et une fonction aldéhyde au sein ou entre fragments adaptés.",
        "correct": true,
        "explanation": "C'est le principe fonctionnel rappelé."
      },
      {
        "content": "La formation d'un hémiacétal.",
        "correct": true,
        "explanation": "Exemple donné."
      },
      {
        "content": "Une hydrogénation catalytique.",
        "correct": false,
        "explanation": "Aucun H2 n'est ajouté."
      },
      {
        "content": "Une oxydation forte.",
        "correct": false,
        "explanation": "La réaction n'est pas présentée comme une oxydation."
      }
    ],
    "explanation": "Le chapitre fournit ici un pont direct avec la cyclisation des oses étudiée en biochimie."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La déshydratation d'un alcool peut être vue comme l'inverse conceptuel de quelle préparation étudiée auparavant ?",
    "choices": [
      {
        "content": "L'hydratation d'un alcène.",
        "correct": true,
        "explanation": "Alcène + eau ↔ alcool, selon le sens de réaction considéré."
      },
      {
        "content": "La réduction d'une cétone.",
        "correct": false,
        "explanation": "Ce n'est pas une addition/élimination d'eau."
      },
      {
        "content": "La formation d'un organomagnésien.",
        "correct": false,
        "explanation": "Mg et RX interviennent."
      },
      {
        "content": "L'alkylation d'une amine.",
        "correct": false,
        "explanation": "Pas d'azote."
      }
    ],
    "explanation": "Hydratation et déshydratation relient directement alcène et alcool."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle famille fonctionnelle obtient-on par oxydation d'un alcool secondaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cétone",
        "cetone",
        "fonction cétone",
        "fonction cetone"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le tableau de la fiche associe alcool secondaire et cétone."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On dispose d'un alcool et l'on souhaite préparer un dérivé plus oxydé. Quelles associations sont exactes ?",
    "choices": [
      {
        "content": "Alcool primaire + oxydation douce → aldéhyde.",
        "correct": true,
        "explanation": "Premier stade."
      },
      {
        "content": "Alcool primaire + oxydation forte → acide carboxylique.",
        "correct": true,
        "explanation": "Stade plus oxydé."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Alcool tertiaire + oxydation simple → aldéhyde.",
        "correct": false,
        "explanation": "Pas de réaction dans le modèle."
      }
    ],
    "explanation": "Le choix du substrat et de l'intensité d'oxydation détermine la famille obtenue."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Alcool + chlorure d'acyle → ester.",
        "correct": true,
        "explanation": "Estérification."
      },
      {
        "content": "Alcool + anhydride d'acide → ester.",
        "correct": true,
        "explanation": "Estérification."
      },
      {
        "content": "Alcool + aldéhyde → hémiacétal.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Alcool primaire + oxydation douce → aldéhyde.",
        "correct": true,
        "explanation": "Oxydation."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "Oxydation."
      },
      {
        "content": "Alcool tertiaire + oxydation → aldéhyde.",
        "correct": false,
        "explanation": "Pas de réaction selon la fiche."
      },
      {
        "content": "Alcool + déshydratation → amine.",
        "correct": false,
        "explanation": "Alcène."
      },
      {
        "content": "Alcool primaire + oxydation forte → alcène.",
        "correct": false,
        "explanation": "Acide carboxylique."
      },
      {
        "content": "Hémiacétal → produit d'une hydrogénation.",
        "correct": false,
        "explanation": "Il vient de l'addition alcool/aldéhyde."
      },
      {
        "content": "Déshydratation → addition d'eau.",
        "correct": false,
        "explanation": "Elle élimine l'eau."
      }
    ],
    "explanation": "Cette sélection consolide les grandes réactions des alcools."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de grandes classes d'alcools le tableau d'oxydation distingue-t-il explicitement ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Le support distingue alcools primaire, secondaire et tertiaire."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour choisir le comportement d'un alcool dans ce chapitre, quelles informations sont particulièrement utiles ?",
    "choices": [
      {
        "content": "Sa classe primaire, secondaire ou tertiaire.",
        "correct": true,
        "explanation": "Déterminante pour l'oxydation."
      },
      {
        "content": "Le type de réactif : acide activé, oxydant ou conditions de déshydratation.",
        "correct": true,
        "explanation": "Chaque famille de réactifs oriente une transformation."
      },
      {
        "content": "La présence d'une autre fonction carbonylée lors d'une formation d'hémiacétal.",
        "correct": true,
        "explanation": "Le partenaire aldéhyde compte."
      },
      {
        "content": "Uniquement sa couleur à température ambiante.",
        "correct": false,
        "explanation": "Aucune valeur réactionnelle ici."
      }
    ],
    "explanation": "La réactivité des alcools se raisonne à partir de leur classe et du type de partenaire réactionnel."
  }
];
