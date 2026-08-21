import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.4 – Section B – Réactivité des alcools
 */

export const UE14_CH8_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'estérification d'un alcool avec un acide activé:",
    "choices": [
      {
        "content": "Un alcool peut réagir avec un chlorure d'acyle.",
        "correct": true,
        "explanation": "Le chlorure d'acyle est l'un des acides activés cités."
      },
      {
        "content": "Un alcool peut réagir avec un anhydride d'acide.",
        "correct": true,
        "explanation": "Cette catégorie de composés constitue l’un des réactifs clés de cette transformation."
      },
      {
        "content": "Le produit organique recherché est un ester.",
        "correct": true,
        "explanation": "Bilan: alcool + acide activé → ester."
      },
      {
        "content": "Une cétone est obligatoirement formée.",
        "correct": false,
        "explanation": "Le bilan donne un ester."
      },
      {
        "content": "L’estérification étudiée transforme l’alcool en ammonium quaternaire.",
        "correct": false,
        "explanation": "La réaction avec un acide activé conduit à un ester et ne quaternise pas un atome d’azote."
      }
    ],
    "explanation": "Les acides activés rendent l'acylation de l'alcool efficace et conduisent à une fonction ester."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel motif correspond à un chlorure d'acyle?",
    "choices": [
      {
        "content": "$\\ce{R-COCl}$.",
        "correct": true,
        "explanation": "C'est la formule indiquée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "$\\ce{R-OH}$.",
        "correct": false,
        "explanation": "Le motif ou le produit considéré correspond bien à une fonction alcool."
      },
      {
        "content": "$\\ce{R-NH2}$.",
        "correct": false,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée: il s’agit de la classe d’amine attendue."
      },
      {
        "content": "$\\ce{R-CHO}$.",
        "correct": false,
        "explanation": "Le motif ou le produit considéré correspond bien à une fonction aldéhyde."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "Un alcane ne correspond pas au produit d’une estérification d’un alcool."
      }
    ],
    "explanation": "Le chlorure d'acyle est l'un des deux acides activés utilisés pour l'estérification et l'amidification."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'un anhydride d'acide:",
    "choices": [
      {
        "content": "Il est classé parmi les acides activés.",
        "correct": true,
        "explanation": "Il est utilisé pour les réactions d'acylation."
      },
      {
        "content": "Il peut réagir avec un alcool pour former un ester.",
        "correct": true,
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
      },
      {
        "content": "Il est identique à un alcane.",
        "correct": false,
        "explanation": "Il contient des carbonyles et un oxygène pontant."
      },
      {
        "content": "L’estérification étudiée transforme l’alcool en ammonium quaternaire.",
        "correct": false,
        "explanation": "La réaction avec un acide activé conduit à un ester et ne quaternise pas un atome d’azote."
      },
      {
        "content": "Il comporte un motif $\\ce{R-CO-O-CO-R'}$.",
        "correct": true,
        "explanation": "C'est la structure générique présentée."
      }
    ],
    "explanation": "L'anhydride d'acide est un dérivé activé du carboxyle permettant notamment l'estérification."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La formation d'un hémiacétal associe:",
    "choices": [
      {
        "content": "La formation d’un hémiacétal exige la disparition de tout atome d’oxygène.",
        "correct": false,
        "explanation": "Le produit hémiacétal conserve des fonctions oxygénées."
      },
      {
        "content": "Un alcool.",
        "correct": true,
        "explanation": "Cette catégorie de composés constitue l’un des réactifs clés de cette transformation."
      },
      {
        "content": "Un aldéhyde.",
        "correct": true,
        "explanation": "Composé carbonylé utilisé: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un hémiacétal comme produit.",
        "correct": true,
        "explanation": "Ce bilan reprend directement la transformation attendue dans cette réaction."
      },
      {
        "content": "Une substitution nucléophile SN2 comme unique description de la réaction.",
        "correct": false,
        "explanation": "Cette réaction correspond à la formation d'un hémiacétal ; elle n'est pas décrite comme une substitution nucléophile SN2."
      }
    ],
    "explanation": "Le bilan à retenir est alcool + aldéhyde → hémiacétal."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi la formation d'hémiacétals est-elle biologiquement pertinente?",
    "choices": [
      {
        "content": "Cette réaction explique la formation des protéines.",
        "correct": false,
        "explanation": "Les protéines sont reliées ici à l'amidification."
      },
      {
        "content": "La formation d'hémiacétals ne concerne aucun composé biologique.",
        "correct": false,
        "explanation": "Les sucres sont précisément cités."
      },
      {
        "content": "La formation d’un hémiacétal exige la disparition de tout atome d’oxygène.",
        "correct": false,
        "explanation": "Le produit hémiacétal conserve des fonctions oxygénées."
      },
      {
        "content": "L’exemple retenu est la cyclisation des sucres.",
        "correct": true,
        "explanation": "La cyclisation des sucres constitue un exemple biologique de formation d'un hémiacétal."
      },
      {
        "content": "La forme hémiacétalique est décrite comme fréquente dans les sucres cyclisés.",
        "correct": true,
        "explanation": "Lien explicite avec la biochimie."
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
        "content": "Une oxydation douce ne conduit pas à un aldéhyde.",
        "correct": false,
        "explanation": "La relation correcte est: « Une oxydation douce conduit à un aldéhyde ». La négation proposée est donc fausse."
      },
      {
        "content": "Une oxydation forte conduit à un acide carboxylique.",
        "correct": true,
        "explanation": "Deuxième niveau: cette relation est conforme à la propriété ou à la transformation décrite."
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
      },
      {
        "content": "Une oxydation douce d’un alcool primaire peut conduire à un aldéhyde.",
        "correct": true,
        "explanation": "L’aldéhyde correspond au premier niveau d’oxydation retenu pour un alcool primaire."
      }
    ],
    "explanation": "L'alcool primaire peut être oxydé au stade aldéhyde puis, plus fortement, au stade acide carboxylique."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'oxydation d'un alcool secondaire conduit :",
    "choices": [
      {
        "content": "À la disparition de la fonction alcool.",
        "correct": true,
        "explanation": "Elle est remplacée par le carbonyle."
      },
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "À une cétone.",
        "correct": true,
        "explanation": "Ce bilan correspond à la transformation attendue et relie correctement le substrat au produit."
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
      }
    ],
    "explanation": "Un alcool secondaire est oxydé en cétone."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'un alcool tertiaire dans le tableau d'oxydation:",
    "choices": [
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
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "Il n’est pas décrit comme insensible à l'oxydation dans le cadre étudié.",
        "correct": false,
        "explanation": "La relation correcte est: « Il est décrit comme insensible à l'oxydation dans le cadre étudié ». La négation proposée est donc fausse."
      }
    ],
    "explanation": "Dans le cadre simplifié, l'alcool tertiaire n'est pas oxydé."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La déshydratation d'un alcool:",
    "choices": [
      {
        "content": "La déshydratation d’un alcool est une addition d’eau sur une double liaison.",
        "correct": false,
        "explanation": "Cette description correspond à l’opération inverse: l’hydratation d’un alcène."
      },
      {
        "content": "Élimine une molécule d'eau.",
        "correct": true,
        "explanation": "Ce bilan correspond à la transformation attendue et relie correctement le substrat au produit."
      },
      {
        "content": "Forme un alcène.",
        "correct": true,
        "explanation": "Une double liaison apparaît: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Est une réaction d'élimination.",
        "correct": true,
        "explanation": "Elle retire H et OH."
      },
      {
        "content": "Forme nécessairement une amide.",
        "correct": false,
        "explanation": "Aucun atome d’azote n’est introduit par cette transformation, donc aucune fonction azotée n’est formée."
      }
    ],
    "explanation": "La déshydratation est le trajet alcool → alcène + eau."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel bilan résume la déshydratation d'un alcool?",
    "choices": [
      {
        "content": "Alcool + $\\ce{H2}$ → alcane.",
        "correct": false,
        "explanation": "Hydrogénation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Alcool → alcène + $\\ce{H2O}$.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Alcool + Mg → organomagnésien.",
        "correct": false,
        "explanation": "Le substrat de Grignard est un dérivé halogéné."
      },
      {
        "content": "Alcool → amine + $\\ce{H2O}$.",
        "correct": false,
        "explanation": "Réaction non enseignée ici: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "$\\ce{NaBH4}$.",
        "correct": false,
        "explanation": "Le borohydrure est utilisé comme réducteur des composés carbonylés, pas comme réactif d’hydratation d’un alcène."
      }
    ],
    "explanation": "La déshydratation crée une double liaison par élimination d'eau."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcool primaire est soumis d'abord à une oxydation douce, puis le produit à une oxydation plus forte. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le premier produit est un aldéhyde.",
        "correct": true,
        "explanation": "Une oxydation douce d'un alcool primaire conduit d'abord à un aldéhyde."
      },
      {
        "content": "Le produit final est un acide carboxylique.",
        "correct": true,
        "explanation": "Oxydation forte: cette relation est conforme à la propriété ou à la transformation décrite."
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
      },
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      }
    ],
    "explanation": "une progression nette alcool primaire → aldéhyde → acide."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Le propan-2-ol est un alcool secondaire. Quel produit fonctionnel attend-on lors de son oxydation dans le modèle?",
    "choices": [
      {
        "content": "Un ammonium quaternaire.",
        "correct": false,
        "explanation": "Cette proposition est écartée: d'azote ne correspond pas au bilan ou à la propriété attendue."
      },
      {
        "content": "Amide.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool ne crée pas de fonction amide."
      },
      {
        "content": "Une cétone.",
        "correct": true,
        "explanation": "Un alcool secondaire donne une cétone."
      },
      {
        "content": "Un aldéhyde.",
        "correct": false,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Un acide carboxylique directement.",
        "correct": false,
        "explanation": "Non dans le tableau: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le propan-2-ol conduit à la propanone."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare propan-1-ol, propan-2-ol et 2-méthylpropan-2-ol. Quelles propositions sont exactes selon la réactivité?",
    "choices": [
      {
        "content": "Le deuxième peut donner une cétone.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Le troisième est décrit comme insensible à l'oxydation.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Les trois donnent le même produit d'oxydation.",
        "correct": false,
        "explanation": "Leur classe modifie la réactivité."
      },
      {
        "content": "La réduction d’un aldéhyde conduit à un alcool primaire.",
        "correct": true,
        "explanation": "Le carbone du groupe aldéhyde devient le carbone portant le groupe hydroxyle de l’alcool primaire."
      },
      {
        "content": "Le premier peut donner un aldéhyde par oxydation douce.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      }
    ],
    "explanation": "La classe de l'alcool détermine sa réponse à l'oxydation."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'estérification avec un chlorure d'acyle:",
    "choices": [
      {
        "content": "Un alcool peut réagir avec un acide activé pour former un ester.",
        "correct": true,
        "explanation": "Le chlorure d’acyle ou l’anhydride d’acide fournit un carbone acylé suffisamment réactif pour former l’ester."
      },
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
        "content": "Le produit organique n’est pas un ester.",
        "correct": false,
        "explanation": "La relation correcte est: « Le produit organique est un ester ». La négation proposée est donc fausse."
      },
      {
        "content": "Le produit est une amine.",
        "correct": false,
        "explanation": "Aucun N n'est introduit: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette réaction convertit un alcool en ester grâce à un acide activé."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un étudiant hésite entre estérification et formation d'hémiacétal. Quels repères permettent de les distinguer?",
    "choices": [
      {
        "content": "Les deux utilisent un alcool comme partenaire.",
        "correct": true,
        "explanation": "Point commun: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les deux conduisent nécessairement au même groupe fonctionnel.",
        "correct": false,
        "explanation": "Ester et hémiacétal sont différents."
      },
      {
        "content": "L’estérification étudiée transforme l’alcool en ammonium quaternaire.",
        "correct": false,
        "explanation": "La réaction avec un acide activé conduit à un ester et ne quaternise pas un atome d’azote."
      },
      {
        "content": "L'estérification utilise un acide activé.",
        "correct": true,
        "explanation": "Un chlorure d'acyle ou un anhydride d'acide peut acyler l'alcool pour former l'ester."
      },
      {
        "content": "La formation d'hémiacétal utilise un aldéhyde.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "Identifier le second réactif permet de choisir la transformation."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un contexte biochimique, la cyclisation d'un sucre en forme hémiacétalique illustre:",
    "choices": [
      {
        "content": "Une réaction entre une fonction alcool et une fonction aldéhyde au sein ou entre fragments adaptés.",
        "correct": true,
        "explanation": "C'est le principe fonctionnel rappelé."
      },
      {
        "content": "La formation d'un hémiacétal.",
        "correct": true,
        "explanation": "Exemple donné: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une hydrogénation catalytique.",
        "correct": false,
        "explanation": "Aucun H2 n'est ajouté: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une oxydation forte.",
        "correct": false,
        "explanation": "La réaction n'est pas présentée comme une oxydation."
      },
      {
        "content": "La formation d’un hémiacétal exige la disparition de tout atome d’oxygène.",
        "correct": false,
        "explanation": "Le produit hémiacétal conserve des fonctions oxygénées."
      }
    ],
    "explanation": "Le chapitre fournit ici un pont direct avec la cyclisation des oses étudiée en biochimie."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La déshydratation d'un alcool peut être vue comme l'inverse conceptuel de quelle préparation étudiée auparavant?",
    "choices": [
      {
        "content": "L'alkylation d'une amine.",
        "correct": false,
        "explanation": "Cette proposition est écartée: d'azote ne correspond pas au bilan ou à la propriété attendue."
      },
      {
        "content": "L’hydratation d’un alcène consomme la double liaison et conduit à un alcool.",
        "correct": true,
        "explanation": "Les éléments de l’eau s’ajoutent de part et d’autre de la double liaison, qui disparaît."
      },
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
        "explanation": "Mg et RX interviennent: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Hydratation et déshydratation relient directement alcène et alcool."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle famille fonctionnelle obtient-on par oxydation d'un alcool secondaire?",
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
    "explanation": "Le tableau associe alcool secondaire et cétone."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On dispose d'un alcool et l'on souhaite préparer un dérivé plus oxydé. Quelles associations sont exactes?",
    "choices": [
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "Alcool primaire + oxydation douce → aldéhyde.",
        "correct": true,
        "explanation": "Premier stade: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Alcool primaire + oxydation forte → acide carboxylique.",
        "correct": true,
        "explanation": "Stade plus oxydé: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
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
        "explanation": "Cette transformation conduit à une fonction ester à partir d’un alcool et d’un dérivé acylé adapté."
      },
      {
        "content": "Alcool + anhydride d'acide → ester.",
        "correct": true,
        "explanation": "Cette transformation conduit à une fonction ester à partir d’un alcool et d’un dérivé acylé adapté."
      },
      {
        "content": "Alcool + aldéhyde → hémiacétal.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Alcool primaire + oxydation douce → aldéhyde.",
        "correct": true,
        "explanation": "Cette transformation augmente le degré d’oxydation de la fonction concernée."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "Cette transformation augmente le degré d’oxydation de la fonction concernée."
      },
      {
        "content": "Alcool tertiaire + oxydation → aldéhyde.",
        "correct": false,
        "explanation": "Aucune transformation de ce type n’est attendue dans le cadre simplifié considéré."
      },
      {
        "content": "Alcool + déshydratation → amine.",
        "correct": false,
        "explanation": "Alcène : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Alcool primaire + oxydation forte → alcène.",
        "correct": false,
        "explanation": "Acide carboxylique : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Hémiacétal → produit d'une hydrogénation.",
        "correct": false,
        "explanation": "Il vient de l'addition alcool/aldéhyde."
      },
      {
        "content": "Déshydratation → addition d'eau.",
        "correct": false,
        "explanation": "Elle élimine l'eau : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette sélection consolide les grandes réactions des alcools."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de grandes classes d'alcools le tableau d'oxydation distingue-t-il explicitement?",
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
    "question": "Pour choisir le comportement d'un alcool dans ce chapitre, quelles informations sont particulièrement utiles?",
    "choices": [
      {
        "content": "Uniquement sa couleur à température ambiante.",
        "correct": false,
        "explanation": "Aucune valeur réactionnelle ici: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La formation d’un hémiacétal exige la disparition de tout atome d’oxygène.",
        "correct": false,
        "explanation": "Le produit hémiacétal conserve des fonctions oxygénées."
      },
      {
        "content": "Sa classe primaire, secondaire ou tertiaire.",
        "correct": true,
        "explanation": "Déterminante pour l'oxydation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le type de réactif: acide activé, oxydant ou conditions de déshydratation.",
        "correct": true,
        "explanation": "Chaque famille de réactifs oriente une transformation."
      },
      {
        "content": "La présence d'une autre fonction carbonylée lors d'une formation d'hémiacétal.",
        "correct": true,
        "explanation": "Cette catégorie de composés constitue l’un des réactifs clés de cette transformation."
      }
    ],
    "explanation": "La réactivité des alcools se raisonne à partir de leur classe et du type de partenaire réactionnel."
  }
];
