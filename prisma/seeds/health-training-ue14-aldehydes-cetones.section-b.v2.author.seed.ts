import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.6 – Section B – Polarité du carbonyle, hydrures et organomagnésiens
 */

export const UE14_CH10_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'effet électroattracteur de l'oxygène d'un carbonyle, quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le carbone de C=O présente un caractère électrophile.",
        "correct": true,
        "explanation": "Les aldéhydes et les cétones sont tous deux des composés carbonylés susceptibles d’être réduits par un hydrure."
      },
      {
        "content": "L'oxygène attire la densité électronique.",
        "correct": true,
        "explanation": "C'est l'origine de la polarisation."
      },
      {
        "content": "Cette polarisation permet l'attaque de nucléophiles sur le carbone carbonylé.",
        "correct": true,
        "explanation": "C'est le fil conducteur des réactions suivantes."
      },
      {
        "content": "Le carbone du carbonyle est décrit comme nucléophile.",
        "correct": false,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      }
    ],
    "explanation": "Les aldéhydes et les cétones peuvent être réduits par addition d’un hydrure sur le carbone carbonylé."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel centre est directement décrit comme électrophile dans un aldéhyde ou une cétone?",
    "choices": [
      {
        "content": "L'oxygène du carbonyle.",
        "correct": false,
        "explanation": "L'oxygène est le pôle riche en électrons."
      },
      {
        "content": "Tout carbone voisin sans distinction.",
        "correct": false,
        "explanation": "Le caractère voisin dépend notamment de la présence d'un H."
      },
      {
        "content": "Le proton d'une amine.",
        "correct": false,
        "explanation": "Cette proposition ne correspond pas à la transformation ou à la propriété demandée."
      },
      {
        "content": "Oxygène du carbonyle comme centre électrophile principal.",
        "correct": false,
        "explanation": "Le centre électrophile visé par les nucléophiles est le carbone du carbonyle."
      },
      {
        "content": "Le carbone du groupement carbonyle.",
        "correct": true,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      }
    ],
    "explanation": "L'oxygène est le pôle riche en électrons."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans un aldéhyde possédant un carbone voisin du carbonyle, ce carbone voisin peut présenter un caractère nucléophile si:",
    "choices": [
      {
        "content": "Il est voisin du carbonyle.",
        "correct": true,
        "explanation": "C'est la position alpha mise en avant."
      },
      {
        "content": "La polarisation du carbonyle contribue à cette réactivité.",
        "correct": true,
        "explanation": "L'effet électroattracteur de l'oxygène du carbonyle contribue à l'acidité du proton en position alpha."
      },
      {
        "content": "Il ne porte jamais d'hydrogène.",
        "correct": false,
        "explanation": "La présence d'un H est au contraire requise dans le modèle."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Il est lié à un hydrogène.",
        "correct": true,
        "explanation": "Le carbone en position alpha doit porter un hydrogène pour pouvoir être déprotoné dans le modèle étudié."
      }
    ],
    "explanation": "C'est la position alpha mise en avant."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une cétone, les carbones voisins du carbonyle:",
    "choices": [
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Peuvent être nucléophiles de part et d'autre.",
        "correct": true,
        "explanation": "Lorsqu’un carbone alpha est présent de chaque côté du carbonyle et porte des hydrogènes, chacun de ces sites peut être déprotoné dans le modèle étudié."
      },
      {
        "content": "Doivent porter un hydrogène pour présenter ce caractère dans le modèle.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Sont identiques au carbone carbonylé.",
        "correct": false,
        "explanation": "Ce sont des positions voisines."
      },
      {
        "content": "Sont tous nécessairement dépourvus d'hydrogène.",
        "correct": false,
        "explanation": "Cela empêcherait le caractère décrit."
      }
    ],
    "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l’ion hydrure, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{NaBH4}$ est cité.",
        "correct": true,
        "explanation": "$\\ce{NaBH4}$ est utilisé ici comme réducteur des aldéhydes et des cétones."
      },
      {
        "content": "Il oxyde l'aldéhyde en acide.",
        "correct": false,
        "explanation": "Il le réduit en alcool."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Il est décrit comme riche en électrons.",
        "correct": true,
        "explanation": "L’ion hydrure est riche en électrons et se comporte comme un nucléophile vis-à-vis du carbone carbonylé électrophile."
      },
      {
        "content": "Il joue un rôle nucléophile face au carbonyle.",
        "correct": true,
        "explanation": "Il attaque le carbone électrophile."
      }
    ],
    "explanation": "L’ion hydrure est riche en électrons et se comporte comme un nucléophile vis-à-vis du carbone carbonylé électrophile."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel réactif doux est cité pour réduire aldéhydes et cétones?",
    "choices": [
      {
        "content": "$\\ce{NaBH4}$.",
        "correct": true,
        "explanation": "Le borohydrure de sodium est indiqué."
      },
      {
        "content": "$\\ce{SOCl2}$.",
        "correct": false,
        "explanation": "Il est cité comme agent halogénant des alcools."
      },
      {
        "content": "$\\ce{H3O+}$.",
        "correct": false,
        "explanation": "Un milieu acide contient des espèces protonantes telles que $\\ce{H3O+}$ ; $\\ce{OH^-}$ caractérise au contraire un milieu basique."
      },
      {
        "content": "$\\ce{Mg}$ seul.",
        "correct": false,
        "explanation": "Mg sert à former un organomagnésien."
      },
      {
        "content": "Cétone.",
        "correct": false,
        "explanation": "Une cétone porte deux substituants carbonés sur le carbone du carbonyle."
      }
    ],
    "explanation": "Le borohydrure de sodium est indiqué."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La réduction d'un aldéhyde par hydrure conduit:",
    "choices": [
      {
        "content": "À un acide carboxylique.",
        "correct": false,
        "explanation": "L’hydrolyse d’une amide forme également l’acide carboxylique correspondant."
      },
      {
        "content": "$\\ce{NaBH4}$ transforme une cétone directement en acide carboxylique.",
        "correct": false,
        "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
      },
      {
        "content": "À un alcool primaire.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "À une diminution du degré d'oxydation.",
        "correct": true,
        "explanation": "La réduction du groupe fonctionnel conduit à la formation du produit correspondant."
      },
      {
        "content": "À une cétone.",
        "correct": false,
        "explanation": "Ce n'est pas le produit."
      }
    ],
    "explanation": "La réduction du groupe fonctionnel conduit à la formation du produit correspondant."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La réduction d'une cétone par hydrure conduit:",
    "choices": [
      {
        "content": "À une diminution du degré d'oxydation.",
        "correct": true,
        "explanation": "La réduction du groupe fonctionnel conduit à la formation du produit correspondant."
      },
      {
        "content": "À un alcool tertiaire.",
        "correct": false,
        "explanation": "Un organomagnésien avec une cétone peut donner un alcool tertiaire, pas NaBH4."
      },
      {
        "content": "À un aldéhyde.",
        "correct": false,
        "explanation": "Ce n'est pas la voie retenue."
      },
      {
        "content": "$\\ce{NaBH4}$ transforme une cétone directement en acide carboxylique.",
        "correct": false,
        "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
      },
      {
        "content": "À un alcool secondaire.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "La réduction du groupe fonctionnel conduit à la formation du produit correspondant."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'un organomagnésien:",
    "choices": [
      {
        "content": "Après hydrolyse, une cétone et un organomagnésien donnent systématiquement un alcool primaire.",
        "correct": false,
        "explanation": "Une cétone traitée par un organomagnésien conduit à un alcool tertiaire."
      },
      {
        "content": "Le fragment carboné R''− est nucléophile.",
        "correct": true,
        "explanation": "Le carbone lié au magnésium dans un organomagnésien présente un caractère nucléophile et peut attaquer le carbone électrophile du carbonyle."
      },
      {
        "content": "Il peut réagir avec un aldéhyde.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Il peut réagir avec une cétone.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Une hydrolyse finale est nécessaire.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Une cétone traitée par un organomagnésien conduit à un alcool tertiaire."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel rôle joue le carbone de l'organomagnésien face au carbonyle?",
    "choices": [
      {
        "content": "Uniquement électrophile.",
        "correct": false,
        "explanation": "Le carbone du Grignard est le nucléophile."
      },
      {
        "content": "Nucléophile.",
        "correct": true,
        "explanation": "Il est riche en électrons."
      },
      {
        "content": "Groupe partant.",
        "correct": false,
        "explanation": "Ce n'est pas son rôle."
      },
      {
        "content": "Oxydant.",
        "correct": false,
        "explanation": "La réaction est une addition nucléophile."
      },
      {
        "content": "Oxygène du carbonyle comme centre électrophile principal.",
        "correct": false,
        "explanation": "Le centre électrophile visé par les nucléophiles est le carbone du carbonyle."
      }
    ],
    "explanation": "Le carbone du Grignard est le nucléophile."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On réduit séparément un aldéhyde et une cétone avec $\\ce{NaBH4}$. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'aldéhyde donne un alcool primaire.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "La cétone donne un alcool secondaire.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Dans les deux cas, le nucléophile est un hydrure.",
        "correct": true,
        "explanation": "H− est la particule réactive du modèle."
      },
      {
        "content": "La cétone donne un alcool tertiaire avec NaBH4.",
        "correct": false,
        "explanation": "Ce serait une addition de Grignard."
      },
      {
        "content": "$\\ce{NaBH4}$ transforme une cétone directement en acide carboxylique.",
        "correct": false,
        "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
      }
    ],
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi le carbone carbonylé peut-il être attaqué par un hydrure?",
    "choices": [
      {
        "content": "Parce que le carbone carbonylé est chargé négativement dans le modèle.",
        "correct": false,
        "explanation": "Il est au contraire déficitaire en électrons."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Il n’est pas électrophile.",
        "correct": false,
        "explanation": "La relation correcte est: « Il est électrophile ». La négation proposée est donc fausse."
      },
      {
        "content": "L'hydrure est riche en électrons.",
        "correct": true,
        "explanation": "Le centre considéré est riche en électrons et peut donc se comporter comme un nucléophile."
      },
      {
        "content": "Les polarités sont complémentaires.",
        "correct": true,
        "explanation": "Le nucléophile riche en électrons est attiré par le carbone carbonylé électrophile : leurs polarités sont complémentaires."
      }
    ],
    "explanation": "Il est au contraire déficitaire en électrons."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un aldéhyde réagit avec un organomagnésien puis le milieu est hydrolysé. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Une nouvelle liaison C-C est formée.",
        "correct": true,
        "explanation": "Le fragment carboné du Grignard s'ajoute."
      },
      {
        "content": "Le carbone carbonylé est le site d'attaque.",
        "correct": true,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "L'hydrolyse est inutile.",
        "correct": false,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Un carbone voisin du carbonyle portant un hydrogène peut acquérir un caractère nucléophile après action d’une base forte.",
        "correct": true,
        "explanation": "La déprotonation au voisinage du carbonyle crée un centre carboné riche en électrons."
      },
      {
        "content": "Un alcool secondaire est obtenu.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "Le fragment carboné du Grignard s'ajoute."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une cétone réagit avec un organomagnésien puis hydrolyse. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Un organomagnésien réagit sur le carbone électrophile du carbonyle et crée une nouvelle liaison carbone-carbone.",
        "correct": true,
        "explanation": "Le groupe carboné nucléophile du réactif de Grignard s’ajoute au carbone du groupe $\\ce{C=O}$."
      },
      {
        "content": "Un alcool tertiaire n’est pas obtenu.",
        "correct": false,
        "explanation": "La relation correcte est: « Un alcool tertiaire est obtenu ». La négation proposée est donc fausse."
      },
      {
        "content": "Une nouvelle liaison C-C est formée.",
        "correct": true,
        "explanation": "L’addition ou l’hydratation sur la double liaison constitue une voie d’accès directe à ce produit."
      },
      {
        "content": "Le carbone du Grignard agit comme nucléophile.",
        "correct": true,
        "explanation": "Il attaque le carbone électrophile du carbonyle."
      },
      {
        "content": "Le produit est un alcool secondaire.",
        "correct": false,
        "explanation": "Avec une cétone, le produit est tertiaire."
      }
    ],
    "explanation": "Le groupe carboné nucléophile du réactif de Grignard s’ajoute au carbone du groupe $\\ce{C=O}$."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare NaBH4 et un organomagnésien sur une cétone. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'organomagnésien crée une liaison C-C.",
        "correct": true,
        "explanation": "Un organomagnésien apporte un fragment carboné nucléophile qui forme une nouvelle liaison carbone–carbone avec un centre électrophile."
      },
      {
        "content": "NaBH4 ajoute un nouveau substituant carboné.",
        "correct": false,
        "explanation": "Il apporte un hydrure, pas un groupe carboné."
      },
      {
        "content": "$\\ce{NaBH4}$ transforme une cétone directement en acide carboxylique.",
        "correct": false,
        "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
      },
      {
        "content": "NaBH4 conduit à un alcool secondaire.",
        "correct": true,
        "explanation": "Cette transformation diminue le degré d’oxydation de la fonction concernée: il s’agit bien d’une réduction."
      },
      {
        "content": "L'organomagnésien conduit à un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "L’addition ou l’hydratation sur la double liaison constitue une voie d’accès directe à ce produit."
      }
    ],
    "explanation": "$\\ce{NaBH4}$ réduit le carbonyle sans ajouter de carbone, tandis qu’un organomagnésien crée une nouvelle liaison C–C avant l’hydrolyse finale."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel produit fonctionnel obtient-on après addition d'un organomagnésien sur une cétone puis hydrolyse?",
    "choices": [
      {
        "content": "Un acide carboxylique.",
        "correct": false,
        "explanation": "Cette proposition est écartée: d'oxydation ne correspond pas au bilan ou à la propriété attendue."
      },
      {
        "content": "Ammonium quaternaire.",
        "correct": false,
        "explanation": "La réduction d’un dérivé d’acide ne crée pas un ammonium quaternaire."
      },
      {
        "content": "Un alcool tertiaire.",
        "correct": true,
        "explanation": "L’addition d’un organomagnésien sur le carbonyle permet d’obtenir le produit correspondant après hydrolyse."
      },
      {
        "content": "Un alcool primaire.",
        "correct": false,
        "explanation": "Cette affirmation ne correspond pas à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool secondaire s’oxyde en cétone ; un aldéhyde est obtenu à partir d’un alcool primaire."
      }
    ],
    "explanation": "Cette proposition est écartée: d'oxydation ne correspond pas au bilan ou à la propriété attendue."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un carbone voisin du carbonyle ne porte aucun hydrogène. Dans le modèle:",
    "choices": [
      {
        "content": "Le carbone voisin devient automatiquement plus nucléophile.",
        "correct": false,
        "explanation": "Le modèle exige un H."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Le caractère nucléophile alpha décrit dans le cadre étudié n'est pas mis en valeur sur ce carbone.",
        "correct": true,
        "explanation": "La présence d'un H est requise."
      },
      {
        "content": "La condition « carbone voisin lié à H » n'est pas satisfaite.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Le carbone carbonylé reste électrophile.",
        "correct": true,
        "explanation": "L’électrophilie du carbone carbonylé et l’acidité éventuelle d’un hydrogène en alpha sont deux propriétés distinctes d’un même composé carbonylé."
      }
    ],
    "explanation": "Le modèle exige un H."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d'une cétone possédant des hydrogènes de part et d'autre du carbonyle:",
    "choices": [
      {
        "content": "Le carbone carbonylé reste électrophile.",
        "correct": true,
        "explanation": "L’électrophilie du carbone carbonylé et l’acidité éventuelle d’un hydrogène en alpha sont deux propriétés distinctes d’un même composé carbonylé."
      },
      {
        "content": "La molécule présente donc plusieurs centres de réactivité potentiels dans le modèle.",
        "correct": true,
        "explanation": "Le carbone carbonylé est électrophile, tandis que les carbones alpha peuvent devenir nucléophiles après déprotonation."
      },
      {
        "content": "Aucun nucléophile ne peut attaquer le carbonyle.",
        "correct": false,
        "explanation": "C'est au contraire le site d'attaque des hydrures et Grignard."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Les deux carbones voisins peuvent présenter un caractère nucléophile.",
        "correct": true,
        "explanation": "Si chacun porte un hydrogène en alpha, les deux carbones voisins du carbonyle peuvent être déprotonés et devenir nucléophiles."
      }
    ],
    "explanation": "L’électrophilie du carbone carbonylé et l’acidité éventuelle d’un hydrogène en alpha sont deux propriétés distinctes d’un même composé carbonylé."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type d'alcool obtient-on par réduction d'une cétone avec $\\ce{NaBH4}$?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alcool secondaire",
        "secondaire"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "L’addition d’un hydrure sur une cétone réduit le groupe carbonyle et conduit à un alcool secondaire."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type d'alcool obtient-on après réaction d'un organomagnésien avec un aldéhyde puis hydrolyse?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alcool secondaire",
        "secondaire"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le bilan est organomagnésien + aldéhyde → alcool secondaire."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un intermédiaire de synthèse porte une cétone. On veut augmenter le nombre de carbones et obtenir un alcool. Quelle approche est cohérente ?",
    "choices": [
      {
        "content": "Utiliser un organomagnésien.",
        "correct": true,
        "explanation": "Il apporte un substituant carboné."
      },
      {
        "content": "Prévoir une hydrolyse finale.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Attendre un alcool tertiaire.",
        "correct": true,
        "explanation": "L’addition d’un organomagnésien sur une cétone donne, après hydrolyse, un alcool tertiaire."
      },
      {
        "content": "Utiliser uniquement NaBH4 si l'objectif est d'ajouter un carbone.",
        "correct": false,
        "explanation": "NaBH4 ne crée pas de liaison C-C."
      },
      {
        "content": "Après hydrolyse, une cétone et un organomagnésien donnent systématiquement un alcool primaire.",
        "correct": false,
        "explanation": "Une cétone traitée par un organomagnésien conduit à un alcool tertiaire."
      }
    ],
    "explanation": "Il apporte un substituant carboné."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour prédire la classe d’alcool formée, quels éléments faut-il distinguer ?",
    "choices": [
      {
        "content": "Addition de Grignard sur une cétone.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "La fonction acide carboxylique est plus difficile à réduire que les aldéhydes et les cétones."
      },
      {
        "content": "Réduction par hydrure d'un aldéhyde.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Réduction par hydrure d'une cétone.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Addition de Grignard sur un aldéhyde.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      }
    ],
    "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
  },
  {
    "order": 45,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On traite séparément l'éthanal par $\\ce{NaBH4}$ et par un organomagnésien, puis hydrolyse lorsque nécessaire. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'organomagnésien donne un alcool secondaire.",
        "correct": true,
        "explanation": "L’addition ou l’hydratation sur la double liaison constitue une voie d’accès directe à ce produit."
      },
      {
        "content": "Seul l'organomagnésien ajoute un substituant carboné.",
        "correct": true,
        "explanation": "Un organomagnésien apporte un fragment carboné nucléophile qui forme une nouvelle liaison carbone–carbone avec un centre électrophile."
      },
      {
        "content": "Les deux voies donnent nécessairement le même produit.",
        "correct": false,
        "explanation": "La classe et le squelette peuvent différer."
      },
      {
        "content": "$\\ce{NaBH4}$ transforme une cétone directement en acide carboxylique.",
        "correct": false,
        "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
      },
      {
        "content": "NaBH4 donne un alcool primaire.",
        "correct": true,
        "explanation": "La réduction du groupe fonctionnel conduit à la formation du produit correspondant."
      }
    ],
    "explanation": "L’addition ou l’hydratation sur la double liaison constitue une voie d’accès directe à ce produit."
  },
  {
    "order": 46,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On traite séparément la propanone par $\\ce{NaBH4}$ et par $\\ce{CH3MgX}$ puis hydrolyse. Quelles conclusions sont correctes?",
    "choices": [
      {
        "content": "$\\ce{NaBH4}$ transforme une cétone directement en acide carboxylique.",
        "correct": false,
        "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
      },
      {
        "content": "NaBH4 ne conduit pas à un alcool secondaire.",
        "correct": false,
        "explanation": "La relation correcte est: « NaBH4 conduit à un alcool secondaire ». La négation proposée est donc fausse."
      },
      {
        "content": "$\\ce{CH3MgX}$ conduit à un alcool tertiaire.",
        "correct": true,
        "explanation": "$\\ce{CH3MgX}$ ajoute un groupe méthyle au carbone carbonylé de la cétone ; après hydrolyse, l’alcool obtenu est tertiaire."
      },
      {
        "content": "La voie Grignard crée une nouvelle liaison C-C.",
        "correct": true,
        "explanation": "Un organomagnésien apporte un fragment carboné nucléophile qui forme une nouvelle liaison carbone–carbone avec un centre électrophile."
      },
      {
        "content": "La voie NaBH4 augmente le nombre de carbones.",
        "correct": false,
        "explanation": "Aucun groupe carboné n'est ajouté."
      }
    ],
    "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
  },
  {
    "order": 47,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé carbonylé réagit avec un nucléophile. Quels éléments permettent d'expliquer la réaction?",
    "choices": [
      {
        "content": "La polarisation C=O dirige l'attaque.",
        "correct": true,
        "explanation": "La polarisation de $\\ce{C=O}$ rend le carbone carbonylé électrophile et dirige l’attaque du nucléophile vers ce centre."
      },
      {
        "content": "L'oxygène du carbonyle rend le carbone nucléophile.",
        "correct": false,
        "explanation": "La polarisation de la liaison $\ce{C=O}$ appauvrit le carbone en électrons et le rend électrophile."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Le carbone du carbonyle est électrophile.",
        "correct": true,
        "explanation": "La polarisation de $\\ce{C=O}$ rend le carbone du carbonyle électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "Le nucléophile est riche en électrons.",
        "correct": true,
        "explanation": "Hydrure ou carbone de Grignard."
      }
    ],
    "explanation": "La polarisation de $\\ce{C=O}$ rend le carbone carbonylé électrophile et dirige l’attaque du nucléophile vers ce centre."
  },
  {
    "order": 48,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un aldéhyde et une cétone subissent chacun une addition d'un même organomagnésien. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le produit de l'aldéhyde est un alcool secondaire après hydrolyse.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Le produit de la cétone est un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Une liaison C-C est créée dans les deux cas.",
        "correct": true,
        "explanation": "Le groupe R'' est ajouté."
      },
      {
        "content": "L'hydrolyse finale est indiquée dans les deux cas.",
        "correct": true,
        "explanation": "Après l’addition de l’organomagnésien, une hydrolyse finale est nécessaire dans les deux cas pour former l’alcool."
      },
      {
        "content": "L’oxydation d’un alcool secondaire conduit directement à un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool secondaire donne une cétone dans le modèle étudié."
      }
    ],
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
  },
  {
    "order": 49,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un carbone alpha d'une cétone ne porte aucun hydrogène, tandis que celui de l'autre côté en porte. Dans le modèle:",
    "choices": [
      {
        "content": "Les deux côtés sont obligatoirement équivalents.",
        "correct": false,
        "explanation": "Les deux carbones en alpha d’une cétone peuvent avoir des substitutions différentes et ne sont donc pas nécessairement équivalents."
      },
      {
        "content": "Un carbone voisin du carbonyle portant un hydrogène peut acquérir un caractère nucléophile après action d’une base forte.",
        "correct": true,
        "explanation": "La déprotonation au voisinage du carbonyle crée un centre carboné riche en électrons."
      },
      {
        "content": "Seul le côté portant H satisfait la condition de nucléophilie alpha décrite.",
        "correct": true,
        "explanation": "La déprotonation en position alpha nécessite la présence d'un hydrogène sur le carbone concerné."
      },
      {
        "content": "Le carbone carbonylé reste électrophile.",
        "correct": true,
        "explanation": "L’électrophilie du carbone carbonylé et l’acidité éventuelle d’un hydrogène en alpha sont deux propriétés distinctes d’un même composé carbonylé."
      },
      {
        "content": "La présence de H en alpha est une information utile pour prévoir la réactivité ultérieure avec une base forte.",
        "correct": true,
        "explanation": "La présence d’un hydrogène en alpha conditionne la possibilité d’une déprotonation ultérieure par une base forte."
      }
    ],
    "explanation": "L’électrophilie du carbone carbonylé et l’acidité éventuelle d’un hydrogène en alpha sont deux propriétés distinctes d’un même composé carbonylé."
  },
  {
    "order": 50,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Dans la propanone schématisée ci-dessous, cliquez sur le carbone électrophile du groupement carbonyle.",
    "image": {
      "src": "/images/training/ue14/aldehydes-cetones/propanone-carbone-carbonyle-qzone.svg",
      "alt": "Schéma original de la propanone CH3-CO-CH3 avec le carbone carbonylé au centre",
      "width": 1200,
      "height": 500
    },
    "expectedZones": [
      {
        "id": "carbone-carbonyle",
        "label": "Carbone carbonylé électrophile",
        "x": 0.5,
        "y": 0.5,
        "tolerance": 0.085
      }
    ],
    "explanation": "L'oxygène du C=O attire la densité électronique; le carbone du carbonyle est donc le centre électrophile attaqué par les nucléophiles."
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une cétone porte deux positions alpha comportant chacune au moins un hydrogène. Quelles propositions sont compatibles avec le modèle?",
    "choices": [
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Les deux positions peuvent présenter un caractère nucléophile.",
        "correct": true,
        "explanation": "Dans une cétone portant des hydrogènes en alpha des deux côtés, chacun de ces carbones peut être déprotoné dans les conditions adaptées."
      },
      {
        "content": "Le carbone carbonylé demeure électrophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
      },
      {
        "content": "La molécule peut donc réagir avec des nucléophiles au carbonyle et, dans d'autres conditions, avec des électrophiles en alpha.",
        "correct": true,
        "explanation": "Synthèse des sections B et C."
      },
      {
        "content": "La présence d'hydrogènes alpha supprime le carbonyle.",
        "correct": false,
        "explanation": "Le groupe C=O reste présent."
      }
    ],
    "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelle stratégie permet de distinguer un hydrure d'un organomagnésien dans une question de synthèse?",
    "choices": [
      {
        "content": "La classe d'alcool final diffère notamment pour une cétone.",
        "correct": true,
        "explanation": "Secondaire avec hydrure, tertiaire avec Grignard."
      },
      {
        "content": "Les deux réactifs sont identiques du point de vue du squelette carboné.",
        "correct": false,
        "explanation": "Le Grignard allonge le squelette."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "L'hydrure réduit le carbonyle sans apporter de carbone.",
        "correct": true,
        "explanation": "L’hydrure de $\\ce{NaBH4}$ s’ajoute au carbone du carbonyle et le réduit sans modifier le nombre d’atomes de carbone."
      },
      {
        "content": "L'organomagnésien apporte un groupe carboné.",
        "correct": true,
        "explanation": "Un organomagnésien apporte un fragment carboné nucléophile qui forme une nouvelle liaison carbone–carbone avec un centre électrophile."
      }
    ],
    "explanation": "Secondaire avec hydrure, tertiaire avec Grignard."
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un chercheur souhaite former une nouvelle liaison C-C au niveau du carbone d'un aldéhyde. Quelle réaction répond à cet objectif?",
    "choices": [
      {
        "content": "Addition d'un organomagnésien.",
        "correct": true,
        "explanation": "Le nucléophile carboné s'ajoute au carbonyle."
      },
      {
        "content": "Hydrolyse finale.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Formation d'un alcool secondaire.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Réduction par NaBH4 seule.",
        "correct": false,
        "explanation": "Elle ne crée pas de liaison C-C."
      },
      {
        "content": "$\\ce{NaBH4}$ transforme une cétone directement en acide carboxylique.",
        "correct": false,
        "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
      }
    ],
    "explanation": "Le nucléophile carboné s'ajoute au carbonyle."
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé donne un alcool tertiaire après réaction avec un organomagnésien puis hydrolyse. Quel substrat est cohérent ?",
    "choices": [
      {
        "content": "Le substrat initial possède un carbone carbonylé électrophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Une cétone.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Un aldéhyde dans le cadre général présenté.",
        "correct": false,
        "explanation": "Il donne un alcool secondaire."
      },
      {
        "content": "La réaction implique une addition nucléophile carbonée.",
        "correct": true,
        "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
      }
    ],
    "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le carbone du carbonyle est électrophile.",
        "correct": true,
        "explanation": "La polarisation de $\\ce{C=O}$ rend le carbone du carbonyle électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "$\\ce{NaBH4}$ réduit un aldéhyde en alcool primaire.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "$\\ce{NaBH4}$ réduit une cétone en alcool secondaire.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Un organomagnésien + aldéhyde donne un alcool secondaire après hydrolyse.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Un organomagnésien + cétone donne un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Le carbone du Grignard est uniquement électrophile.",
        "correct": false,
        "explanation": "Le centre considéré est riche en électrons et peut donc se comporter comme un nucléophile."
      },
      {
        "content": "NaBH4 ajoute un nouveau substituant carboné.",
        "correct": false,
        "explanation": "Il apporte un hydrure, pas un groupe carboné."
      },
      {
        "content": "Une cétone + Grignard donne un alcool primaire.",
        "correct": false,
        "explanation": "Un organomagnésien apporte un fragment carboné nucléophile qui forme une nouvelle liaison carbone–carbone avec un centre électrophile."
      },
      {
        "content": "Le carbone carbonylé est nucléophile.",
        "correct": false,
        "explanation": "Le centre considéré est déficient en électrons et peut donc être attaqué par un nucléophile."
      },
      {
        "content": "Un carbone alpha sans hydrogène satisfait automatiquement la condition de nucléophilie alpha.",
        "correct": false,
        "explanation": "Une base forte peut arracher un hydrogène en position alpha du carbonyle et créer un centre carboné nucléophile."
      }
    ],
    "explanation": "La polarisation de $\\ce{C=O}$ rend le carbone du carbonyle électrophile et donc sensible à l’attaque d’un nucléophile."
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de classes d'alcools différentes sont obtenues dans les quatre associations de base considérées (aldéhyde/hydrure, cétone/hydrure, aldéhyde/Grignard, cétone/Grignard): primaire, secondaire, tertiaire?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Les quatre réactions mobilisent au total les trois classes d'alcools: primaire, secondaire et tertiaire."
  }
];
