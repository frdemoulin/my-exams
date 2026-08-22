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
        "content": "Un aldéhyde peut être représenté par $\\mathrm{R{-}CHO}$.",
        "correct": true,
        "explanation": "L'écriture $\\mathrm{R{-}CHO}$ met clairement en évidence le groupe aldéhyde terminal."
      },
      {
        "content": "Le carbone carbonylé est situé en bout de chaîne.",
        "correct": true,
        "explanation": "Dans un aldéhyde, le groupe $\\ce{-CHO}$ est terminal : le carbone carbonylé se situe en bout de chaîne."
      },
      {
        "content": "Le suffixe de nomenclature est -al.",
        "correct": true,
        "explanation": "Le suffixe « -al » est utilisé pour nommer les aldéhydes."
      },
      {
        "content": "Un aldéhyde s'écrit de préférence RCOH pour ne pas le confondre avec un alcool.",
        "correct": false,
        "explanation": "L'écriture RCHO est préférable car elle fait apparaître sans ambiguïté le groupe aldéhyde."
      }
    ],
    "explanation": "Un aldéhyde possède un groupe carbonyle terminal dont le carbone est lié à un hydrogène ; sa nomenclature utilise le suffixe « -al »."
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
        "explanation": "Le méthanal est l’aldéhyde le plus simple et son nom usuel est formaldéhyde."
      },
      {
        "content": "L'acide méthanoïque.",
        "correct": false,
        "explanation": "L’acide méthanoïque est un acide carboxylique ; le méthanal est l’aldéhyde correspondant."
      },
      {
        "content": "L'acétone.",
        "correct": false,
        "explanation": "L’acétone est la propanone, une cétone ; elle ne correspond pas au méthanal."
      },
      {
        "content": "La propanone.",
        "correct": false,
        "explanation": "La propanone est une cétone ; le méthanal, lui, est l’aldéhyde à un carbone."
      },
      {
        "content": "L'éthanol.",
        "correct": false,
        "explanation": "L’éthanol est un alcool ; il ne correspond pas au méthanal."
      }
    ],
    "explanation": "Le méthanal, aldéhyde à un carbone, est également appelé formaldéhyde."
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
        "explanation": "Le méthanal est également appelé formaldéhyde."
      },
      {
        "content": "En solution aqueuse, le méthanal est appelé formol.",
        "correct": true,
        "explanation": "Une solution aqueuse de méthanal est appelée formol."
      },
      {
        "content": "Dans RCHO, R est ici un hydrogène.",
        "correct": true,
        "explanation": "Le méthanal est le cas particulier $\\ce{H-CHO}$ : le substituant noté R est donc un hydrogène."
      },
      {
        "content": "C'est une cétone.",
        "correct": false,
        "explanation": "Le méthanal possède un groupe aldéhyde $\\ce{-CHO}$ ; ce n’est pas une cétone."
      },
      {
        "content": "La propanone est un aldéhyde.",
        "correct": false,
        "explanation": "La propanone possède un carbonyle lié à deux groupes carbonés: c’est une cétone."
      }
    ],
    "explanation": "Le méthanal est le cas particulier $\\ce{H-CHO}$ ; le formol est une solution aqueuse de méthanal."
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
        "explanation": "Le carbonyle terminal caractérise l’aldéhyde ; dans une cétone, le carbone carbonylé est lié à deux groupes carbonés."
      },
      {
        "content": "Le carbone du groupe carbonyle présente un caractère électrophile.",
        "correct": true,
        "explanation": "L’oxygène attire la densité électronique de la liaison $\\ce{C=O}$, ce qui appauvrit le carbone."
      },
      {
        "content": "Une cétone ne peut pas être représentée par $\\mathrm{R{-}CO{-}R'}$.",
        "correct": false,
        "explanation": "Une cétone peut être représentée par $\\mathrm{R{-}CO{-}R'}$ : le carbone carbonylé est lié à deux groupes carbonés."
      },
      {
        "content": "R et R' ne peuvent pas être H dans la définition présentée.",
        "correct": true,
        "explanation": "Dans une cétone $\\ce{R-CO-R'}$, le carbone carbonylé est lié à deux groupes carbonés ; ni R ni R’ n’est donc un hydrogène."
      },
      {
        "content": "Le suffixe est -one.",
        "correct": true,
        "explanation": "Le suffixe « -one » est utilisé pour nommer une cétone."
      }
    ],
    "explanation": "Une cétone possède un groupe $\\ce{C=O}$ dont le carbone est lié à deux groupes carbonés et se nomme avec le suffixe « -one »."
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
        "explanation": "L’éthanal porte une fonction aldéhyde et ne correspond pas au nom usuel de la propanone."
      },
      {
        "content": "Acétone.",
        "correct": true,
        "explanation": "L’acétone est le nom usuel de la propanone."
      },
      {
        "content": "Acide propanoïque.",
        "correct": false,
        "explanation": "L’acide propanoïque est un acide carboxylique ; il ne s’agit pas d’un nom usuel de la propanone."
      },
      {
        "content": "Méthanal.",
        "correct": false,
        "explanation": "Le méthanal est le nom systématique du formaldéhyde ; ce n’est pas un nom de la propanone."
      },
      {
        "content": "Formol.",
        "correct": false,
        "explanation": "Le formol est une solution aqueuse de méthanal ; il ne correspond pas à la propanone."
      }
    ],
    "explanation": "La propanone est le nom systématique de l'acétone."
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
        "explanation": "Dans un aldéhyde, le carbone du groupe carbonyle est directement lié à un hydrogène."
      },
      {
        "content": "Dans la cétone, le carbone carbonylé porte deux substituants carbonés.",
        "correct": true,
        "explanation": "Dans une cétone, le carbone du groupe carbonyle est directement lié à deux groupes carbonés."
      },
      {
        "content": "Les deux contiennent un groupe carbonyle C=O.",
        "correct": true,
        "explanation": "Aldéhydes et cétones possèdent tous deux un groupe carbonyle $\ce{C=O}$."
      },
      {
        "content": "La présence d'un carbonyle suffit à conclure qu'il s'agit forcément d'un aldéhyde.",
        "correct": false,
        "explanation": "Un groupe carbonyle est présent dans les aldéhydes comme dans les cétones ; il ne suffit donc pas à les distinguer."
      }
    ],
    "explanation": "Aldéhydes et cétones possèdent un carbonyle, mais l'aldéhyde porte un hydrogène sur le carbone carbonylé alors que la cétone porte deux substituants carbonés."
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
        "explanation": "Lorsqu’une oxydation est trop poussée, l’aldéhyde intermédiaire peut être oxydé plus loin en acide carboxylique."
      },
      {
        "content": "Un alcool primaire oxydé donne directement une cétone.",
        "correct": false,
        "explanation": "Un alcool primaire s’oxyde d’abord en aldéhyde, puis éventuellement en acide carboxylique si l’oxydation est poursuivie."
      },
      {
        "content": "L'aldéhyde constitue un stade d'oxydation intermédiaire entre l'alcool primaire et l'acide carboxylique.",
        "correct": true,
        "explanation": "Un alcool primaire peut être oxydé en aldéhyde puis, si l’oxydation se poursuit, en acide carboxylique."
      },
      {
        "content": "Un alcool primaire peut être oxydé en aldéhyde.",
        "correct": true,
        "explanation": "L’oxydation ménagée d’un alcool primaire transforme le groupe $\\ce{-CH2OH}$ en groupe aldéhyde $\\ce{-CHO}$."
      },
      {
        "content": "Une oxydation trop poussée peut conduire à un acide carboxylique.",
        "correct": true,
        "explanation": "Si l'oxydation d'un alcool primaire est trop poussée, l'aldéhyde intermédiaire peut être oxydé en acide carboxylique."
      }
    ],
    "explanation": "L'oxydation ménagée d'un alcool primaire peut s'arrêter à l'aldéhyde ; une oxydation plus poussée conduit à l'acide carboxylique."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'oxydation d'un alcool secondaire :",
    "choices": [
      {
        "content": "L'oxydation d'un alcool secondaire ne conduit pas à une cétone.",
        "correct": false,
        "explanation": "L'oxydation d'un alcool secondaire conduit à une cétone ; la proposition est donc fausse."
      },
      {
        "content": "La cétone est présentée comme le degré d'oxydation maximal de cette voie.",
        "correct": true,
        "explanation": "Pour l’oxydation d’un alcool secondaire dans le modèle étudié, la cétone constitue le produit carbonylé atteint."
      },
      {
        "content": "Une cétone ne présente pas, dans ce modèle, le même risque de suroxydation qu'un aldéhyde.",
        "correct": true,
        "explanation": "Dans le modèle simplifié, la cétone issue d’un alcool secondaire est considérée comme inerte à une oxydation ultérieure, contrairement à un aldéhyde."
      },
      {
        "content": "Elle conduit d'abord à un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool secondaire s’oxyde directement en cétone, sans passer par un aldéhyde."
      },
      {
        "content": "Le carbone portant $\\ce{-OH}$ devient le carbone du groupe carbonyle.",
        "correct": true,
        "explanation": "Lors de l’oxydation d’un alcool secondaire, le carbone portant $\\ce{-OH}$ est transformé en carbone carbonylé de la cétone."
      }
    ],
    "explanation": "L'oxydation d'un alcool secondaire conduit à une cétone, considérée ici comme le degré d'oxydation maximal de cette voie."
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
        "explanation": "Une oxydation forte d’un alcène rompt la liaison entre les deux carbones de $\\ce{C=C}$."
      },
      {
        "content": "La nature des substituants de la double liaison n'influence pas les produits formés.",
        "correct": false,
        "explanation": "La nature des substituants portés par les carbones de $\\ce{C=C}$ détermine le type de fragments carbonylés obtenus."
      },
      {
        "content": "La double liaison est coupée.",
        "correct": true,
        "explanation": "Une oxydation forte d’un alcène peut rompre la liaison $\\ce{C=C}$ et former des fragments carbonylés."
      },
      {
        "content": "Selon les substituants, on peut former un aldéhyde et/ou une cétone.",
        "correct": true,
        "explanation": "La substitution initiale des carbones de $\\ce{C=C}$ détermine si les fragments carbonylés correspondent à un aldéhyde et/ou à une cétone."
      },
      {
        "content": "Le choix d'un alcène symétrique peut simplifier le nombre de produits.",
        "correct": true,
        "explanation": "Le choix d’un alcène symétrique peut simplifier la synthèse en limitant le nombre de fragments carbonylés différents obtenus après coupure."
      }
    ],
    "explanation": "Une oxydation forte d'un alcène coupe la double liaison et peut former des aldéhydes et/ou des cétones selon les substituants."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel type d'alcène est présenté comme intéressant pour n'obtenir qu'un seul produit lors d'une coupure oxydante forte?",
    "choices": [
      {
        "content": "Un alcène dissymétrique.",
        "correct": false,
        "explanation": "Un alcène dissymétrique peut conduire à plusieurs fragments carbonylés différents."
      },
      {
        "content": "Un alcène portant quatre substituants tous différents.",
        "correct": false,
        "explanation": "Des substituants tous différents ne favorisent pas l’obtention d’un seul type de fragment après coupure."
      },
      {
        "content": "Un alcène symétrique.",
        "correct": true,
        "explanation": "La symétrie peut conduire à des fragments identiques et limiter le nombre de produits carbonylés distincts."
      },
      {
        "content": "N'importe quel alcène, indépendamment de sa symétrie.",
        "correct": false,
        "explanation": "La symétrie de l’alcène est précisément le critère retenu pour limiter le nombre de produits distincts."
      },
      {
        "content": "Un alcène terminal quel que soit son substituant.",
        "correct": false,
        "explanation": "Un alcène terminal n’est pas nécessairement symétrique et peut donner plusieurs produits carbonylés distincts."
      }
    ],
    "explanation": "Un alcène symétrique peut conduire à un seul type de produit carbonylé lors de la coupure oxydante forte."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcool primaire est oxydé dans des conditions ménagées puis, dans une autre expérience, dans des conditions plus fortes. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Des conditions ménagées donnent directement une cétone à partir de l'alcool primaire.",
        "correct": false,
        "explanation": "Un alcool primaire soumis à une oxydation ménagée conduit à un aldéhyde, et non à une cétone."
      },
      {
        "content": "Conditions ménagées: aldéhyde.",
        "correct": true,
        "explanation": "Des conditions d’oxydation ménagées permettent d’arrêter un alcool primaire au stade aldéhyde."
      },
      {
        "content": "Conditions fortes: l'aldéhyde peut être dépassé au profit de l'acide carboxylique.",
        "correct": true,
        "explanation": "Des conditions plus oxydantes peuvent poursuivre l’oxydation de l’aldéhyde jusqu’à l’acide carboxylique."
      },
      {
        "content": "La cétone est l'intermédiaire obligatoire.",
        "correct": false,
        "explanation": "Pour un alcool primaire, la voie retenue passe par un aldéhyde et non par une cétone."
      },
      {
        "content": "Le degré d'oxydation augmente de l'alcool vers l'acide.",
        "correct": true,
        "explanation": "Le passage alcool primaire → aldéhyde → acide carboxylique correspond à une augmentation progressive du degré d’oxydation."
      }
    ],
    "explanation": "Un alcool primaire donne un aldéhyde sous oxydation ménagée et peut être oxydé jusqu'à l'acide carboxylique sous conditions plus fortes."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un alcool secondaire est oxydé. Quelles conclusions sont cohérentes avec cette transformation ?",
    "choices": [
      {
        "content": "Un acide carboxylique est nécessairement formé ensuite.",
        "correct": false,
        "explanation": "Dans le modèle retenu, la cétone issue d’un alcool secondaire n’est pas suroxydée en acide carboxylique."
      },
      {
        "content": "Le substrat n'est pas un alcool primaire.",
        "correct": true,
        "explanation": "Un alcool secondaire est distinct d’un alcool primaire et son oxydation conduit à une cétone."
      },
      {
        "content": "Une cétone est formée.",
        "correct": true,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "Une cétone n’est pas formée.",
        "correct": false,
        "explanation": "Une cétone est précisément le produit attendu de l’oxydation d’un alcool secondaire."
      },
      {
        "content": "Le produit est présenté comme au degré d'oxydation maximal de cette voie.",
        "correct": true,
        "explanation": "Dans la voie issue d’un alcool secondaire, la cétone est considérée ici comme le degré d’oxydation maximal."
      }
    ],
    "explanation": "Un alcool secondaire s'oxyde en cétone ; dans le modèle retenu, cette cétone n'est pas suroxydée."
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
        "explanation": "Lors d’une coupure oxydante d’alcène, la nature des fragments carbonylés dépend des substituants initialement portés par les deux carbones de la double liaison."
      },
      {
        "content": "De la présence ou non d'un hydrogène sur ces carbones.",
        "correct": true,
        "explanation": "La présence d’un hydrogène parmi les substituants d’un carbone de la double liaison participe à déterminer la nature du fragment carbonylé obtenu."
      },
      {
        "content": "De la symétrie éventuelle de l'alcène.",
        "correct": true,
        "explanation": "La symétrie de l’alcène peut conduire à des fragments identiques et réduire le nombre de produits carbonylés distincts."
      },
      {
        "content": "Uniquement du nombre total d'atomes d'oxygène avant réaction.",
        "correct": false,
        "explanation": "La nature des produits dépend de la substitution des deux carbones de la double liaison, pas seulement du nombre total d’atomes d’oxygène."
      },
      {
        "content": "Une oxydation forte d’un alcène conserve toujours intacte la liaison entre les deux carbones de $\\ce{C=C}$.",
        "correct": false,
        "explanation": "La coupure de la double liaison fait partie du bilan retenu."
      }
    ],
    "explanation": "Après coupure oxydante forte d'un alcène, la nature des fragments carbonylés dépend de la substitution initiale des carbones de la double liaison."
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
        "explanation": "L’aldéhyde intermédiaire est difficile à isoler car les conditions fortes nécessaires à la réduction de l’acide peuvent poursuivre jusqu’à l’alcool."
      },
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "La fonction acide carboxylique est plus difficile à réduire que les aldéhydes et les cétones."
      },
      {
        "content": "La fonction acide n’est pas difficile à réduire.",
        "correct": false,
        "explanation": "La fonction acide carboxylique est difficile à réduire et nécessite des conditions fortes."
      },
      {
        "content": "Des conditions fortes sont nécessaires dans le modèle présenté.",
        "correct": true,
        "explanation": "La réduction d'un acide carboxylique nécessite des conditions plus fortes que celle d'un aldéhyde ou d'une cétone."
      },
      {
        "content": "Ces conditions fortes risquent de poursuivre la réduction de l'aldéhyde jusqu'à l'alcool.",
        "correct": true,
        "explanation": "Les conditions fortes peuvent réduire l’aldéhyde intermédiaire jusqu’à l’alcool, ce qui complique son isolement."
      }
    ],
    "explanation": "La réduction directe d'un acide carboxylique exige des conditions fortes qui tendent à poursuivre la réduction de l'aldéhyde jusqu'à l'alcool."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels moyens permettent d'obtenir un aldéhyde à partir d'un dérivé d'acide dans les situations étudiées ?",
    "choices": [
      {
        "content": "Transformer l'acide en acide activé peut permettre une réduction vers l'aldéhyde.",
        "correct": true,
        "explanation": "L’activation de la fonction acide permet d’utiliser un dérivé plus réactif et d’accéder plus sélectivement au stade aldéhyde."
      },
      {
        "content": "Réduire un chlorure d'acyle peut conduire à un aldéhyde.",
        "correct": true,
        "explanation": "La réduction contrôlée d’un chlorure d’acyle permet d’obtenir l’aldéhyde correspondant."
      },
      {
        "content": "Oxydation forte d'une cétone donne systématiquement un aldéhyde.",
        "correct": false,
        "explanation": "Dans le modèle, une cétone est considérée comme inerte à l’oxydation ; une oxydation forte ne la transforme donc pas systématiquement en aldéhyde."
      },
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "La fonction acide carboxylique est plus difficile à réduire que les aldéhydes et les cétones."
      },
      {
        "content": "Certaines enzymes de l'organisme peuvent réduire un acide carboxylique en aldéhyde.",
        "correct": true,
        "explanation": "Certaines enzymes de l’organisme peuvent réduire un acide carboxylique jusqu’au stade aldéhyde."
      }
    ],
    "explanation": "L'accès au stade aldéhyde est facilité par l'activation de l'acide ; un chlorure d'acyle peut notamment être réduit en aldéhyde."
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
        "explanation": "Un alcane n’est pas un dérivé d’acide et ne constitue pas le précurseur demandé."
      },
      {
        "content": "Une amine.",
        "correct": false,
        "explanation": "Une amine n’est pas le dérivé d’acide activé utilisé ici pour accéder à l’aldéhyde."
      },
      {
        "content": "Un alcool tertiaire.",
        "correct": false,
        "explanation": "Un alcool tertiaire n’est pas un dérivé d’acide ; il ne correspond pas au précurseur demandé."
      },
      {
        "content": "Un chlorure d'acyle.",
        "correct": true,
        "explanation": "La réduction contrôlée d’un chlorure d’acyle peut conduire à l’aldéhyde correspondant."
      },
      {
        "content": "Ammonium quaternaire.",
        "correct": false,
        "explanation": "Un ammonium quaternaire n’est pas un dérivé d’acide et n’intervient pas dans la réduction vers l’aldéhyde."
      }
    ],
    "explanation": "Un chlorure d'acyle est un dérivé d'acide activé pouvant être réduit en aldéhyde."
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
        "explanation": "Un dérivé activé de l’acide est plus adapté à une réduction contrôlée vers l’aldéhyde que l’acide carboxylique libre."
      },
      {
        "content": "Les deux précurseurs sont strictement équivalents sans différence de sélectivité.",
        "correct": false,
        "explanation": "Un acide carboxylique libre et un dérivé activé n’ont pas la même réactivité ; l’activation modifie la sélectivité de la réduction."
      },
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "La fonction acide carboxylique est plus difficile à réduire que les aldéhydes et les cétones."
      },
      {
        "content": "L'acide carboxylique est décrit comme difficile à arrêter au stade aldéhyde.",
        "correct": true,
        "explanation": "La réduction directe de l’acide exige des conditions fortes qui tendent à poursuivre la réduction de l’aldéhyde jusqu’à l’alcool."
      },
      {
        "content": "Le chlorure d'acyle peut être réduit en aldéhyde.",
        "correct": true,
        "explanation": "La réduction contrôlée d’un chlorure d’acyle permet d’obtenir l’aldéhyde correspondant."
      }
    ],
    "explanation": "Un acide carboxylique libre est difficile à réduire sélectivement jusqu'à l'aldéhyde, alors qu'un dérivé activé comme un chlorure d'acyle permet un meilleur contrôle."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la préparation d'un aldéhyde à partir d'un alcool primaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Des conditions d'oxydation trop fortes peuvent empêcher d'isoler l'aldéhyde.",
        "correct": true,
        "explanation": "Des conditions trop oxydantes peuvent poursuivre la transformation de l’aldéhyde en acide carboxylique."
      },
      {
        "content": "L'aldéhyde est inerte à toute oxydation.",
        "correct": false,
        "explanation": "Un aldéhyde peut être oxydé en acide carboxylique ; il n’est donc pas inerte à toute oxydation."
      },
      {
        "content": "Le produit d'une oxydation ménagée n'est pas une cétone.",
        "correct": true,
        "explanation": "L’oxydation ménagée d’un alcool primaire conduit à un aldéhyde ; une cétone provient de l’oxydation d’un alcool secondaire."
      },
      {
        "content": "Un alcool primaire ne peut jamais être oxydé.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool primaire est précisément une voie de préparation d’un aldéhyde."
      },
      {
        "content": "Une oxydation trop forte permet toujours d'isoler l'aldéhyde.",
        "correct": false,
        "explanation": "Des conditions trop fortes peuvent poursuivre l’oxydation de l’aldéhyde en acide carboxylique ; elles ne permettent donc pas toujours de l’isoler."
      }
    ],
    "explanation": "Une oxydation ménagée d'un alcool primaire peut fournir un aldéhyde ; des conditions trop fortes risquent de poursuivre l'oxydation jusqu'à l'acide carboxylique."
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
        "explanation": "Une oxydation forte coupe la double liaison même si l’alcène est symétrique."
      },
      {
        "content": "Une oxydation forte d’un alcène conserve toujours intacte la liaison entre les deux carbones de $\\ce{C=C}$.",
        "correct": false,
        "explanation": "La coupure de la double liaison fait partie du bilan retenu."
      },
      {
        "content": "Il peut limiter le nombre de produits carbonylés distincts.",
        "correct": true,
        "explanation": "Un alcène symétrique donne moins de fragments carbonylés différents lors d’une coupure oxydante."
      },
      {
        "content": "Deux fragments identiques peuvent être obtenus.",
        "correct": true,
        "explanation": "Un alcène symétrique peut donner deux fragments identiques lors de la coupure."
      },
      {
        "content": "Il facilite l'identification du produit attendu.",
        "correct": true,
        "explanation": "Un seul type de fragment carbonylé simplifie l’identification du produit attendu."
      }
    ],
    "explanation": "La symétrie de l'alcène peut limiter le nombre de fragments carbonylés distincts obtenus lors de la coupure oxydante."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de dérivé d’acide peut être réduit pour accéder directement à un aldéhyde ?",
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
    "explanation": "La réduction contrôlée d'un chlorure d'acyle permet d'accéder directement à un aldéhyde."
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
        "explanation": "Une oxydation ménagée d’un alcool primaire conduit d’abord à l’aldéhyde correspondant."
      },
      {
        "content": "Alcool secondaire + oxydation → cétone.",
        "correct": true,
        "explanation": "L’oxydation d’un alcool secondaire transforme le carbone portant $\\ce{-OH}$ en carbone carbonylé et donne une cétone."
      },
      {
        "content": "Aldéhyde + oxydation poussée → acide carboxylique.",
        "correct": true,
        "explanation": "Un aldéhyde peut être oxydé en acide carboxylique dans le modèle étudié."
      },
      {
        "content": "Chlorure d'acyle + réduction → aldéhyde.",
        "correct": true,
        "explanation": "La réduction contrôlée d’un chlorure d’acyle permet d’obtenir l’aldéhyde correspondant."
      },
      {
        "content": "Oxydation forte d'un alcène → coupure de C=C.",
        "correct": true,
        "explanation": "Une oxydation forte peut cliver la double liaison $\\ce{C=C}$ et conduire à des composés carbonylés."
      },
      {
        "content": "Alcool primaire + oxydation → cétone.",
        "correct": false,
        "explanation": "Un alcool primaire conduit d’abord à un aldéhyde, pas à une cétone."
      },
      {
        "content": "Cétone + oxydation simple → acide carboxylique.",
        "correct": false,
        "explanation": "Dans le modèle simplifié, une cétone est considérée comme inerte à l’oxydation et ne donne pas directement un acide carboxylique."
      },
      {
        "content": "Acide carboxylique libre + réduction forte permet toujours d'isoler l'aldéhyde.",
        "correct": false,
        "explanation": "Une réduction forte d’un acide carboxylique tend à poursuivre au-delà de l’aldéhyde jusqu’à l’alcool."
      },
      {
        "content": "Le méthanal est une cétone.",
        "correct": false,
        "explanation": "Le méthanal est l’aldéhyde le plus simple ; il ne s’agit pas d’une cétone."
      },
      {
        "content": "Propanone = formaldéhyde.",
        "correct": false,
        "explanation": "La propanone est l’acétone ; le formaldéhyde est le méthanal."
      }
    ],
    "explanation": "Les voies retenues associent alcool primaire → aldéhyde, alcool secondaire → cétone, aldéhyde → acide, chlorure d'acyle → aldéhyde et coupure oxydante d'un alcène."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de grandes voies de préparation d'un aldéhyde sont distinguées avant l'étude de ses propriétés : oxydation d'un alcool, coupure oxydante d'un alcène et réduction d'un dérivé d'acide ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Trois grandes familles de voies sont distinguées : oxydation d'un alcool, coupure oxydante d'un alcène et réduction d'un dérivé d'acide."
  }
];
