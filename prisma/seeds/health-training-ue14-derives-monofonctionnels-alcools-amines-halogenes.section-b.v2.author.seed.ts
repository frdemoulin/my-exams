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
        "explanation": "Un chlorure d’acyle est un acide activé qui peut acyler un alcool et conduire à un ester."
      },
      {
        "content": "Un alcool peut réagir avec un anhydride d'acide.",
        "correct": true,
        "explanation": "Un anhydride d’acide est un acide activé capable d’acyl­er un alcool pour former un ester."
      },
      {
        "content": "Le produit organique recherché est un ester.",
        "correct": true,
        "explanation": "L’alcool réagit avec le dérivé acylé activé et le produit porte une fonction ester."
      },
      {
        "content": "Une cétone est obligatoirement formée.",
        "correct": false,
        "explanation": "L’estérification d’un alcool par un acide activé forme un ester ; une cétone n’est pas le produit attendu."
      },
      {
        "content": "L’estérification étudiée transforme l’alcool en ammonium quaternaire.",
        "correct": false,
        "explanation": "La réaction avec un acide activé conduit à un ester et ne quaternise pas un atome d’azote."
      }
    ],
    "explanation": "Un alcool peut réagir avec un chlorure d’acyle ou un anhydride d’acide pour former un ester."
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
        "explanation": "Le motif $\\ce{R-COCl}$ correspond à un chlorure d’acyle : le chlore est directement lié au carbone du carbonyle."
      },
      {
        "content": "$\\ce{R-OH}$.",
        "correct": false,
        "explanation": "$\\ce{R-OH}$ correspond à une fonction alcool et ne contient ni carbonyle ni chlore acylé."
      },
      {
        "content": "$\\ce{R-NH2}$.",
        "correct": false,
        "explanation": "$\\ce{R-NH2}$ correspond à une amine primaire, pas à un chlorure d’acyle."
      },
      {
        "content": "$\\ce{R-CHO}$.",
        "correct": false,
        "explanation": "$\\ce{R-CHO}$ correspond à un aldéhyde ; un chlorure d’acyle possède le motif $\\ce{R-COCl}$."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "Un alcane ne possède pas le groupe $\\ce{-COCl}$ caractéristique d’un chlorure d’acyle."
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
        "explanation": "L’anhydride d’acide appartient aux acides activés utilisés pour les réactions d’acylation."
      },
      {
        "content": "Il peut réagir avec un alcool pour former un ester.",
        "correct": true,
        "explanation": "L’anhydride d’acide peut transférer un groupe acyle à l’alcool et former un ester."
      },
      {
        "content": "Il est identique à un alcane.",
        "correct": false,
        "explanation": "Un anhydride d’acide contient deux groupes carbonyle reliés par un oxygène ; sa structure n’est donc pas celle d’un alcane."
      },
      {
        "content": "Il ne peut pas réagir avec un alcool pour former un ester.",
        "correct": false,
        "explanation": "Un anhydride d’acide peut acyler un alcool et conduire à un ester ; la proposition affirme l’inverse."
      },
      {
        "content": "Il comporte un motif $\\ce{R-CO-O-CO-R'}$.",
        "correct": true,
        "explanation": "Le motif d’un anhydride d’acide comporte deux groupes acyle reliés par un oxygène : $\\ce{R-CO-O-CO-R'}$."
      }
    ],
    "explanation": "Un anhydride d’acide est un acide activé ; il peut acyler un alcool pour former un ester."
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
        "explanation": "La fonction alcool apporte l’oxygène qui participe à la formation de l’hémiacétal."
      },
      {
        "content": "Un aldéhyde.",
        "correct": true,
        "explanation": "L’aldéhyde fournit le carbone carbonylé attaqué par la fonction alcool."
      },
      {
        "content": "Un hémiacétal comme produit.",
        "correct": true,
        "explanation": "L’addition d’une fonction alcool sur une fonction aldéhyde conduit au produit hémiacétalique."
      },
      {
        "content": "Une substitution nucléophile SN2 comme unique description de la réaction.",
        "correct": false,
        "explanation": "Cette réaction correspond à la formation d'un hémiacétal ; elle n'est pas décrite comme une substitution nucléophile SN2."
      }
    ],
    "explanation": "La formation d’un hémiacétal associe une fonction alcool et une fonction aldéhyde pour former un produit qui conserve des fonctions oxygénées."
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
        "explanation": "La formation des protéines est reliée à l’amidification ; la formation d’un hémiacétal est illustrée ici par la cyclisation des sucres."
      },
      {
        "content": "La formation d'hémiacétals ne concerne aucun composé biologique.",
        "correct": false,
        "explanation": "La cyclisation des sucres constitue précisément un exemple biologique de formation d’hémiacétal."
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
        "explanation": "La cyclisation de nombreux sucres passe par la formation intramoléculaire d’un hémiacétal."
      }
    ],
    "explanation": "La cyclisation des sucres illustre la formation d’un hémiacétal, forme fréquemment rencontrée pour les sucres cyclisés."
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
        "explanation": "Une oxydation douce d’un alcool primaire conduit à un aldéhyde ; la proposition affirme l’inverse."
      },
      {
        "content": "Une oxydation forte conduit à un acide carboxylique.",
        "correct": true,
        "explanation": "Si l’oxydation d’un alcool primaire est poursuivie au-delà de l’aldéhyde, le produit devient un acide carboxylique."
      },
      {
        "content": "Une oxydation douce donne nécessairement une cétone.",
        "correct": false,
        "explanation": "Une oxydation douce d’un alcool primaire donne un aldéhyde ; une cétone provient de l’oxydation d’un alcool secondaire."
      },
      {
        "content": "La classe de l'alcool influence donc le produit.",
        "correct": true,
        "explanation": "La nature primaire, secondaire ou tertiaire de l’alcool détermine le type de produit accessible par oxydation dans ce modèle."
      },
      {
        "content": "Une oxydation douce d’un alcool primaire peut conduire à un aldéhyde.",
        "correct": true,
        "explanation": "L’aldéhyde correspond au premier produit d’oxydation d’un alcool primaire lorsque l’oxydation est douce."
      }
    ],
    "explanation": "Un alcool primaire donne un aldéhyde par oxydation douce et un acide carboxylique lorsque l’oxydation est plus poussée."
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
        "explanation": "Lors de l’oxydation d’un alcool secondaire, le carbone portant $\\ce{-OH}$ devient le carbone d’un groupe carbonyle."},
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "À une cétone.",
        "correct": true,
        "explanation": "L’oxydation d’un alcool secondaire transforme le carbone portant $\\ce{-OH}$ en carbone carbonylé : le produit est une cétone."
      },
      {
        "content": "À un aldéhyde.",
        "correct": false,
        "explanation": "Un aldéhyde est obtenu par oxydation douce d’un alcool primaire ; l’alcool secondaire donne une cétone."
      },
      {
        "content": "À un acide carboxylique directement.",
        "correct": false,
        "explanation": "Dans le modèle étudié, l’oxydation d’un alcool secondaire s’arrête au stade cétone et ne conduit pas directement à un acide carboxylique."
      }
    ],
    "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l’oxydation d’un alcool tertiaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il ne donne pas l'aldéhyde correspondant.",
        "correct": true,
        "explanation": "Dans le modèle étudié, l’alcool tertiaire est insensible à l’oxydation considérée et ne donne donc pas l’aldéhyde correspondant."
      },
      {
        "content": "Il ne donne pas la cétone correspondante dans ce modèle.",
        "correct": true,
        "explanation": "Dans le modèle simplifié, un alcool tertiaire ne donne pas la cétone correspondante par cette oxydation."
      },
      {
        "content": "Il est toujours converti en acide carboxylique.",
        "correct": false,
        "explanation": "Dans le modèle étudié, un alcool tertiaire ne donne pas directement l’acide carboxylique correspondant par cette oxydation."
      },
      {
        "content": "Il se comporte comme un alcool primaire vis-à-vis de l’oxydation.",
        "correct": false,
        "explanation": "Un alcool tertiaire ne suit pas le comportement d’un alcool primaire : dans le modèle étudié, il est insensible à l’oxydation considérée."
      },
      {
        "content": "Il n’est pas décrit comme insensible à l'oxydation dans le cadre étudié.",
        "correct": false,
        "explanation": "L’alcool tertiaire est précisément décrit comme insensible à l’oxydation considérée dans ce modèle."
      }
    ],
    "explanation": "Dans le modèle étudié, un alcool tertiaire est insensible à l’oxydation considérée."
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
        "explanation": "La déshydratation retire les éléments de l’eau de l’alcool et libère une molécule de $\\ce{H2O}$."
      },
      {
        "content": "Forme un alcène.",
        "correct": true,
        "explanation": "L’élimination de $\\ce{H}$ et de $\\ce{OH}$ conduit à la formation d’une double liaison $\\ce{C=C}$."},
      {
        "content": "Est une réaction d'élimination.",
        "correct": true,
        "explanation": "La déshydratation est une élimination : elle retire H et OH sous forme d’eau et crée une double liaison."
      },
      {
        "content": "Forme nécessairement une amide.",
        "correct": false,
        "explanation": "Aucun atome d’azote n’est introduit par cette transformation, donc aucune fonction azotée n’est formée."
      }
    ],
    "explanation": "La déshydratation d’un alcool élimine une molécule d’eau et forme un alcène ; elle est l’inverse conceptuel de l’hydratation d’un alcène."
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
        "explanation": "L’addition de $\\ce{H2}$ correspond à une hydrogénation ; ce n’est pas le bilan de déshydratation d’un alcool."},
      {
        "content": "Alcool → alcène + $\\ce{H2O}$.",
        "correct": true,
        "explanation": "La déshydratation d’un alcool conduit à un alcène avec élimination d’une molécule d’eau."
      },
      {
        "content": "Alcool + Mg → organomagnésien.",
        "correct": false,
        "explanation": "Le magnésium réagit avec un dérivé halogéné pour former un organomagnésien ; il ne transforme pas directement un alcool en $\\ce{R-X}$."
      },
      {
        "content": "Alcool → amine + $\\ce{H2O}$.",
        "correct": false,
        "explanation": "La déshydratation d’un alcool forme un alcène et de l’eau ; elle ne transforme pas l’alcool en amine."
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
        "explanation": "Une oxydation suffisamment poussée d’un alcool primaire conduit à un acide carboxylique."
      },
      {
        "content": "La séquence augmente progressivement le degré d'oxydation.",
        "correct": true,
        "explanation": "Le degré d’oxydation augmente successivement de l’alcool primaire à l’aldéhyde puis à l’acide carboxylique."
      },
      {
        "content": "Une cétone est l'intermédiaire obligatoire.",
        "correct": false,
        "explanation": "Pour un alcool primaire, l’intermédiaire d’une oxydation progressive est un aldéhyde, pas une cétone."
      },
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      }
    ],
    "explanation": "Une oxydation douce d'un alcool primaire conduit d'abord à un aldéhyde."
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
        "explanation": "L’oxydation du propan-2-ol n’introduit aucun atome d’azote ; un ammonium quaternaire ne peut donc pas être formé."
      },
      {
        "content": "Amide.",
        "correct": false,
        "explanation": "L’oxydation du propan-2-ol conduit à une cétone et n’introduit aucun atome d’azote ; une amide n’est donc pas formée."
      },
      {
        "content": "Une cétone.",
        "correct": true,
        "explanation": "Le propan-2-ol étant un alcool secondaire, son oxydation conduit à une cétone."
      },
      {
        "content": "Un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool secondaire s’oxyde en cétone ; un aldéhyde est obtenu à partir d’un alcool primaire."
      },
      {
        "content": "Un acide carboxylique directement.",
        "correct": false,
        "explanation": "Dans le modèle étudié, le propan-2-ol s’oxyde en propanone et non directement en acide carboxylique."
      }
    ],
    "explanation": "Le propan-2-ol est un alcool secondaire ; son oxydation conduit donc à une cétone."
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
        "explanation": "Le propan-2-ol est un alcool secondaire ; son oxydation conduit à une cétone."
      },
      {
        "content": "Le troisième est décrit comme insensible à l'oxydation.",
        "correct": true,
        "explanation": "Le 2-méthylpropan-2-ol est tertiaire ; dans le modèle étudié, il est insensible à l’oxydation considérée."
      },
      {
        "content": "Les trois donnent le même produit d'oxydation.",
        "correct": false,
        "explanation": "Les trois alcools n’appartiennent pas à la même classe ; leurs produits d’oxydation ne sont donc pas identiques."
      },
      {
        "content": "Le propan-1-ol est un alcool primaire.",
        "correct": true,
        "explanation": "Le propan-1-ol porte le groupe $\\ce{-OH}$ sur un carbone terminal : il appartient à la classe des alcools primaires."
      },
      {
        "content": "Le premier peut donner un aldéhyde par oxydation douce.",
        "correct": true,
        "explanation": "Le propan-1-ol est primaire ; une oxydation douce peut donc conduire à un aldéhyde."
      }
    ],
    "explanation": "Le propan-1-ol, le propan-2-ol et le 2-méthylpropan-2-ol sont respectivement primaire, secondaire et tertiaire, ce qui explique leurs comportements différents à l’oxydation."
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
        "explanation": "Le chlorure d’acyle et l’anhydride d’acide sont les deux acides activés utilisés pour former un ester à partir d’un alcool."
      },
      {
        "content": "Le groupe alcool fournit l'oxygène simple de l'ester.",
        "correct": true,
        "explanation": "Dans l’ester formé, l’oxygène provenant de l’alcool constitue l’oxygène simple du motif $\\ce{R-O-CO-R'}$."
      },
      {
        "content": "Le carbone du chlorure d'acyle appartient au carbonyle de l'ester final.",
        "correct": true,
        "explanation": "Le groupe acyle du chlorure d’acyle est conservé dans la fonction ester formée."
      },
      {
        "content": "Le produit organique n’est pas un ester.",
        "correct": false,
        "explanation": "La réaction d’un alcool avec un chlorure d’acyle forme bien un ester ; la proposition nie ce produit."
      },
      {
        "content": "Le produit est une amine.",
        "correct": false,
        "explanation": "Aucun atome d’azote n’est introduit par cette transformation ; une fonction azotée ne peut donc pas être formée."
      }
    ],
    "explanation": "Un alcool peut réagir avec un chlorure d’acyle ou un anhydride d’acide, deux acides activés, pour former un ester."
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
        "explanation": "L’estérification comme la formation d’un hémiacétal utilisent une fonction alcool, mais leurs autres partenaires et leurs produits diffèrent."
      },
      {
        "content": "Les deux conduisent nécessairement au même groupe fonctionnel.",
        "correct": false,
        "explanation": "L’estérification forme un ester alors que la réaction alcool–aldéhyde forme un hémiacétal ; les fonctions finales sont différentes."
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
        "explanation": "Une fonction aldéhyde peut réagir avec une fonction alcool pour former un hémiacétal."
      }
    ],
    "explanation": "L’estérification comme la formation d’un hémiacétal utilisent une fonction alcool, mais leurs autres partenaires et leurs produits diffèrent."
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
        "explanation": "Une fonction alcool peut attaquer une fonction aldéhyde ; lorsqu’elles appartiennent à la même molécule, cette réaction peut conduire à une cyclisation hémiacétalique."
      },
      {
        "content": "La formation d'un hémiacétal.",
        "correct": true,
        "explanation": "La cyclisation considérée illustre précisément la formation intramoléculaire d’un hémiacétal."
      },
      {
        "content": "Une hydrogénation catalytique.",
        "correct": false,
        "explanation": "La formation d’un hémiacétal n’utilise pas de dihydrogène ; il ne s’agit donc pas d’une hydrogénation."
      },
      {
        "content": "Une oxydation forte.",
        "correct": false,
        "explanation": "La formation d’un hémiacétal est une addition d’alcool sur un aldéhyde, pas une oxydation forte."
      },
      {
        "content": "La formation d’un hémiacétal exige la disparition de tout atome d’oxygène.",
        "correct": false,
        "explanation": "Le produit hémiacétal conserve des fonctions oxygénées."
      }
    ],
    "explanation": "La cyclisation considérée résulte d’une réaction entre une fonction alcool et une fonction aldéhyde et conduit à un hémiacétal."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions relient correctement la déshydratation d’un alcool et l’hydratation d’un alcène ?",
    "choices": [
      {
        "content": "L'alkylation d'une amine.",
        "correct": false,
        "explanation": "L’alkylation d’une amine par un dérivé halogéné ne constitue pas l’inverse d’une déshydratation d’alcool."
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
        "explanation": "La réduction d’une cétone transforme un carbonyle en alcool ; elle n’est pas l’inverse d’une élimination d’eau."
      },
      {
        "content": "La formation d'un organomagnésien.",
        "correct": false,
        "explanation": "La formation d’un organomagnésien à partir de $\\ce{R-X}$ et Mg est distincte de l’équilibre hydratation/déshydratation d’un alcool."
      }
    ],
    "explanation": "La déshydratation transforme un alcool en alcène avec élimination d’eau ; l’hydratation réalise la transformation inverse en ajoutant les éléments de l’eau sur l’alcène."
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
    "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
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
        "explanation": "Une oxydation ménagée d’un alcool primaire conduit d’abord à l’aldéhyde correspondant."
      },
      {
        "content": "Alcool primaire + oxydation forte → acide carboxylique.",
        "correct": true,
        "explanation": "Une oxydation plus poussée d’un alcool primaire conduit à l’acide carboxylique correspondant."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "L’oxydation d’un alcool secondaire transforme le carbone portant $\\ce{-OH}$ en carbone carbonylé et donne une cétone."
      },
      {
        "content": "Alcool tertiaire + oxydation simple → aldéhyde.",
        "correct": false,
        "explanation": "Un alcool tertiaire ne donne pas d’aldéhyde par l’oxydation considérée ; il est décrit comme insensible à cette transformation."
      }
    ],
    "explanation": "L’oxydation dépend de la classe de l’alcool : primaire vers aldéhyde puis acide, secondaire vers cétone, tertiaire sans réaction dans le modèle."
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
        "explanation": "Une fonction alcool réagit avec une fonction aldéhyde pour former un hémiacétal."
      },
      {
        "content": "Alcool primaire + oxydation douce → aldéhyde.",
        "correct": true,
        "explanation": "L’oxydation douce d’un alcool primaire augmente son degré d’oxydation et conduit à un aldéhyde."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "L’oxydation d’un alcool secondaire transforme la fonction alcool en fonction cétone."
      },
      {
        "content": "Alcool tertiaire + oxydation → aldéhyde.",
        "correct": false,
        "explanation": "Un alcool tertiaire est décrit comme insensible à l’oxydation considérée ; il ne donne donc pas un aldéhyde."
      },
      {
        "content": "Alcool + déshydratation → amine.",
        "correct": false,
        "explanation": "La déshydratation d’un alcool élimine une molécule d’eau et forme un alcène."
      },
      {
        "content": "Alcool primaire + oxydation forte → alcène.",
        "correct": false,
        "explanation": "Une oxydation forte d’un alcool primaire conduit à un acide carboxylique, pas à un alcène."
      },
      {
        "content": "Hémiacétal → produit d'une hydrogénation.",
        "correct": false,
        "explanation": "Un hémiacétal provient de l’addition d’une fonction alcool sur une fonction aldéhyde, pas d’une hydrogénation."
      },
      {
        "content": "Déshydratation → addition d'eau.",
        "correct": false,
        "explanation": "Une déshydratation élimine une molécule d’eau ; elle ne correspond donc pas à une addition d’eau."
      }
    ],
    "explanation": "Les transformations correctes associent ici estérification, formation d’un hémiacétal et oxydation des alcools ; la déshydratation conduit au contraire à un alcène."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de grandes classes d’alcools distingue-t-on pour prévoir leur comportement à l’oxydation ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Les alcools sont classés en primaire, secondaire ou tertiaire selon le nombre de groupes carbonés liés au carbone portant $\\ce{-OH}$."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour choisir le comportement d'un alcool dans les transformations étudiées, quelles informations sont particulièrement utiles?",
    "choices": [
      {
        "content": "Uniquement sa couleur à température ambiante.",
        "correct": false,
        "explanation": "La couleur ne permet pas de prévoir la réactivité d’un alcool ; sa classe et les réactifs présents sont les informations pertinentes."
      },
      {
        "content": "La classe primaire, secondaire ou tertiaire de l’alcool est sans importance pour son oxydation.",
        "correct": false,
        "explanation": "La classe de l’alcool est au contraire déterminante : primaire, secondaire et tertiaire n’ont pas le même comportement à l’oxydation."
      },
      {
        "content": "Sa classe primaire, secondaire ou tertiaire.",
        "correct": true,
        "explanation": "La classe de l’alcool détermine son comportement à l’oxydation et la nature du produit accessible dans le modèle étudié."
      },
      {
        "content": "Le type de réactif: acide activé, oxydant ou conditions de déshydratation.",
        "correct": true,
        "explanation": "Un acide activé oriente vers l’estérification, un oxydant vers l’oxydation et des conditions de déshydratation vers la formation d’un alcène."
      },
      {
        "content": "La présence d'une autre fonction carbonylée lors d'une formation d'hémiacétal.",
        "correct": true,
        "explanation": "La formation d’un hémiacétal nécessite la présence d’une fonction carbonylée de type aldéhyde en plus de la fonction alcool."
      }
    ],
    "explanation": "La classe de l’alcool détermine son comportement à l’oxydation et la nature du produit accessible dans le modèle étudié."
  }
];
