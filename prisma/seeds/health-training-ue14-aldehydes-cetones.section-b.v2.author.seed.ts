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
        "explanation": "La l'indique pour aldéhydes et cétones."
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
        "explanation": "Il est électrophile: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      }
    ],
    "explanation": "La polarisation C=O rend le carbone carbonylé déficitaire en électrons et donc électrophile."
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
        "explanation": "Sans rapport: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Oxygène du carbonyle comme centre électrophile principal.",
        "correct": false,
        "explanation": "Le centre électrophile visé par les nucléophiles est le carbone du carbonyle."
      },
      {
        "content": "Le carbone du groupement carbonyle.",
        "correct": true,
        "explanation": "C'est le centre électrophile: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le carbone carbonylé est la cible des nucléophiles étudiés."
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
    "explanation": "La distingue le carbone carbonylé électrophile et le carbone voisin potentiellement nucléophile."
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
        "explanation": "Le support le précise: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Une cétone peut présenter deux positions alpha réactives si elles portent des hydrogènes."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'un hydrure dans cette section:",
    "choices": [
      {
        "content": "$\\ce{NaBH4}$ est cité.",
        "correct": true,
        "explanation": "Borohydrure de sodium: cette relation est conforme à la propriété ou à la transformation décrite."
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
        "explanation": "H−: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Il joue un rôle nucléophile face au carbonyle.",
        "correct": true,
        "explanation": "Il attaque le carbone électrophile."
      }
    ],
    "explanation": "Les hydrures sont les nucléophiles réducteurs utilisés pour convertir les carbonyles en alcools."
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
        "explanation": "Agent chlorant étudié auparavant: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "$\\ce{H3O+}$.",
        "correct": false,
        "explanation": "Milieu acide: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "NaBH4 est le réducteur doux cité."
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
        "explanation": "Ce serait une oxydation: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Aldéhyde → alcool primaire lors d'une réduction par hydrure."
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
    "explanation": "Cétone → alcool secondaire lors de la réduction par hydrure."
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
        "explanation": "Le support insiste sur sa richesse électronique."
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
    "explanation": "L'organomagnésien ajoute un groupe carboné au carbone électrophile du carbonyle, puis l'hydrolyse conduit à l'alcool."
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
    "explanation": "Le Grignard est un nucléophile carboné."
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
    "explanation": "La nature du carbonyle détermine la classe de l'alcool formé par réduction."
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
        "explanation": "Nucléophile vers électrophile: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La réduction découle directement de la polarité de la liaison carbonyle."
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
        "explanation": "Centre électrophile: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Organomagnésien + aldéhyde → alcool secondaire après hydrolyse."
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
        "explanation": "R''−: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le produit est un alcool secondaire.",
        "correct": false,
        "explanation": "Avec une cétone, le produit est tertiaire."
      }
    ],
    "explanation": "La cétone porte déjà deux substituants carbonés; l'ajout du Grignard conduit à un carbone alcool tertiaire."
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
        "explanation": "Le squelette est allongé: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "La distinction réduction versus addition de Grignard est un objectif majeur de la section."
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
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Un alcool primaire.",
        "correct": false,
        "explanation": "Cette affirmation ne correspond pas à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un aldéhyde.",
        "correct": false,
        "explanation": "Le carbonyle est consommé: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cétone + RMgX → alcool tertiaire après hydrolyse."
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
        "explanation": "Cette propriété est indépendante: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le support conditionne la nucléophilie des carbones voisins à la présence d'un hydrogène."
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
        "explanation": "Propriété du C=O: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La molécule présente donc plusieurs centres de réactivité potentiels dans le modèle.",
        "correct": true,
        "explanation": "Carbonyle et positions voisines: cette relation est conforme à la propriété ou à la transformation décrite."
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
        "explanation": "La l'indique: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le modèle met en évidence une réactivité complémentaire du centre carbonylé et des positions alpha."
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
    "explanation": "La associe cétone + hydrure à un alcool secondaire."
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
    "question": "Un intermédiaire de synthèse porte une cétone. On veut augmenter le nombre de carbones et obtenir un alcool. Quelle approche du chapitre est cohérente?",
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
        "explanation": "Cétone + Grignard: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Le Grignard est la voie adaptée lorsque l'on souhaite allonger le squelette carboné."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour prédire la classe d'alcool formée par une réaction du chapitre, il faut distinguer:",
    "choices": [
      {
        "content": "Addition de Grignard sur une cétone.",
        "correct": true,
        "explanation": "Le groupe hydroxyle conditionne la réactivité et la classe de l’alcool considéré."
      },
      {
        "content": "Un acide carboxylique est toujours plus facile à réduire qu’un aldéhyde.",
        "correct": false,
        "explanation": "Le chapitre souligne au contraire que la fonction acide est plus difficile à réduire."
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
    "explanation": "Les quatre associations doivent être maîtrisées sans confusion."
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
        "explanation": "Création C-C: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Le même aldéhyde peut être réduit ou allongé selon le nucléophile choisi."
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
        "explanation": "Grignard sur cétone: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La voie Grignard crée une nouvelle liaison C-C.",
        "correct": true,
        "explanation": "Ajout du méthyle: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La voie NaBH4 augmente le nombre de carbones.",
        "correct": false,
        "explanation": "Aucun groupe carboné n'est ajouté."
      }
    ],
    "explanation": "Cette comparaison distingue réduction et synthèse carbonée."
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
        "explanation": "Origine électronique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'oxygène du carbonyle rend le carbone nucléophile.",
        "correct": false,
        "explanation": "Il le rend électrophile: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Le carbone du carbonyle est électrophile.",
        "correct": true,
        "explanation": "Centre attaqué: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le nucléophile est riche en électrons.",
        "correct": true,
        "explanation": "Hydrure ou carbone de Grignard."
      }
    ],
    "explanation": "La polarité explique l'ensemble des additions nucléophiles de cette section."
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
        "explanation": "Point commun: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’oxydation d’un alcool secondaire conduit directement à un aldéhyde.",
        "correct": false,
        "explanation": "Un alcool secondaire donne une cétone dans le cadre du chapitre."
      }
    ],
    "explanation": "La nature du carbonyle fixe la classe d'alcool, mais le principe d'addition est commun."
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
        "explanation": "Leur substitution peut différer: cette relation est conforme à la propriété ou à la transformation décrite."
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
        "explanation": "Toujours: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La présence de H en alpha est une information utile pour prévoir la réactivité ultérieure avec une base forte.",
        "correct": true,
        "explanation": "Lien avec la section suivante."
      }
    ],
    "explanation": "La condition de présence d'un H en alpha prépare la compréhension de la fonctionnalisation par base forte."
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
        "explanation": "La l'indique pour les deux côtés d'une cétone."
      },
      {
        "content": "Le carbone carbonylé demeure électrophile.",
        "correct": true,
        "explanation": "Polarité C=O: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "La molécule possède des centres réactifs complémentaires dépendant des conditions."
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
        "explanation": "NaBH4: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'organomagnésien apporte un groupe carboné.",
        "correct": true,
        "explanation": "Création de liaison C-C: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le bilan carboné est un repère particulièrement robuste."
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
    "explanation": "La réaction de Grignard est l'outil du chapitre pour construire une liaison carbone-carbone au niveau du carbonyle."
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé donne un alcool tertiaire après réaction avec un organomagnésien et hydrolyse. Quel substrat du chapitre est cohérent?",
    "choices": [
      {
        "content": "Le substrat initial possède un carbone carbonylé électrophile.",
        "correct": true,
        "explanation": "Condition de l'attaque: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Le type de produit permet de remonter au type de carbonyle initial."
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
        "explanation": "Polarisation : cette relation est conforme à la propriété ou à la transformation décrite."
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
        "explanation": "Hydrure : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une cétone + Grignard donne un alcool primaire.",
        "correct": false,
        "explanation": "Tertiaire : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone carbonylé est nucléophile.",
        "correct": false,
        "explanation": "Le centre considéré est déficient en électrons et peut donc être attaqué par un nucléophile."
      },
      {
        "content": "Un carbone alpha sans hydrogène satisfait automatiquement la condition de nucléophilie alpha.",
        "correct": false,
        "explanation": "La exige un H : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette sélection résume polarité, réduction et addition des organomagnésiens."
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de classes d'alcools différentes sont obtenues dans les quatre associations de base du chapitre (aldéhyde/hydrure, cétone/hydrure, aldéhyde/Grignard, cétone/Grignard): primaire, secondaire, tertiaire?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Les quatre réactions mobilisent au total les trois classes d'alcools: primaire, secondaire et tertiaire."
  }
];
