import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.6 – Section B – Polarité du carbonyle, hydrures et organomagnésiens
 */

export const UE14_CH10_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'effet électroattracteur de l'oxygène d'un carbonyle, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone de C=O présente un caractère électrophile.",
        "correct": true,
        "explanation": "La fiche l'indique pour aldéhydes et cétones."
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
        "explanation": "Il est électrophile."
      }
    ],
    "explanation": "La polarisation C=O rend le carbone carbonylé déficitaire en électrons et donc électrophile."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel centre est directement décrit comme électrophile dans un aldéhyde ou une cétone ?",
    "choices": [
      {
        "content": "Le carbone du groupement carbonyle.",
        "correct": true,
        "explanation": "C'est le centre électrophile."
      },
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
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Le carbone carbonylé est la cible des nucléophiles étudiés."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans un aldéhyde possédant un carbone voisin du carbonyle, ce carbone voisin peut présenter un caractère nucléophile si :",
    "choices": [
      {
        "content": "Il est lié à un hydrogène.",
        "correct": true,
        "explanation": "Condition explicitement précisée par la fiche."
      },
      {
        "content": "Il est voisin du carbonyle.",
        "correct": true,
        "explanation": "C'est la position alpha mise en avant."
      },
      {
        "content": "La polarisation du carbonyle contribue à cette réactivité.",
        "correct": true,
        "explanation": "Le support relie ce caractère à l'effet électroattracteur de O."
      },
      {
        "content": "Il ne porte jamais d'hydrogène.",
        "correct": false,
        "explanation": "La présence d'un H est au contraire requise dans le modèle."
      }
    ],
    "explanation": "La fiche distingue le carbone carbonylé électrophile et le carbone voisin potentiellement nucléophile."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une cétone, les carbones voisins du carbonyle :",
    "choices": [
      {
        "content": "Peuvent être nucléophiles de part et d'autre.",
        "correct": true,
        "explanation": "Le support le précise."
      },
      {
        "content": "Doivent porter un hydrogène pour présenter ce caractère dans le modèle de la fiche.",
        "correct": true,
        "explanation": "Condition explicite."
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
    "question": "À propos d'un hydrure dans cette section :",
    "choices": [
      {
        "content": "Il est décrit comme riche en électrons.",
        "correct": true,
        "explanation": "La fiche donne H−."
      },
      {
        "content": "Il joue un rôle nucléophile face au carbonyle.",
        "correct": true,
        "explanation": "Il attaque le carbone électrophile."
      },
      {
        "content": "$\\ce{NaBH4}$ est cité.",
        "correct": true,
        "explanation": "Borohydrure de sodium."
      },
      {
        "content": "Il oxyde l'aldéhyde en acide.",
        "correct": false,
        "explanation": "Il le réduit en alcool."
      }
    ],
    "explanation": "Les hydrures sont les nucléophiles réducteurs utilisés pour convertir les carbonyles en alcools."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel réactif doux est cité pour réduire aldéhydes et cétones ?",
    "choices": [
      {
        "content": "$\\ce{NaBH4}$.",
        "correct": true,
        "explanation": "Le borohydrure de sodium est indiqué."
      },
      {
        "content": "$\\ce{SOCl2}$.",
        "correct": false,
        "explanation": "Agent chlorant étudié auparavant."
      },
      {
        "content": "$\\ce{H3O+}$.",
        "correct": false,
        "explanation": "Milieu acide."
      },
      {
        "content": "$\\ce{Mg}$ seul.",
        "correct": false,
        "explanation": "Mg sert à former un organomagnésien."
      }
    ],
    "explanation": "NaBH4 est le réducteur doux cité dans la fiche."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La réduction d'un aldéhyde par hydrure conduit :",
    "choices": [
      {
        "content": "À un alcool primaire.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "À une diminution du degré d'oxydation.",
        "correct": true,
        "explanation": "C'est une réduction."
      },
      {
        "content": "À une cétone.",
        "correct": false,
        "explanation": "Ce n'est pas le produit."
      },
      {
        "content": "À un acide carboxylique.",
        "correct": false,
        "explanation": "Ce serait une oxydation."
      }
    ],
    "explanation": "Aldéhyde → alcool primaire lors d'une réduction par hydrure."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La réduction d'une cétone par hydrure conduit :",
    "choices": [
      {
        "content": "À un alcool secondaire.",
        "correct": true,
        "explanation": "Bilan de la fiche."
      },
      {
        "content": "À une diminution du degré d'oxydation.",
        "correct": true,
        "explanation": "C'est une réduction."
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
      }
    ],
    "explanation": "Cétone → alcool secondaire lors de la réduction par hydrure."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d'un organomagnésien dans la fiche :",
    "choices": [
      {
        "content": "Le fragment carboné R''− est nucléophile.",
        "correct": true,
        "explanation": "Le support insiste sur sa richesse électronique."
      },
      {
        "content": "Il peut réagir avec un aldéhyde.",
        "correct": true,
        "explanation": "Bilan présenté."
      },
      {
        "content": "Il peut réagir avec une cétone.",
        "correct": true,
        "explanation": "Bilan présenté."
      },
      {
        "content": "Une hydrolyse finale est nécessaire.",
        "correct": true,
        "explanation": "Elle est explicitement indiquée."
      }
    ],
    "explanation": "L'organomagnésien ajoute un groupe carboné au carbone électrophile du carbonyle, puis l'hydrolyse conduit à l'alcool."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel rôle joue le carbone de l'organomagnésien face au carbonyle ?",
    "choices": [
      {
        "content": "Nucléophile.",
        "correct": true,
        "explanation": "Il est riche en électrons."
      },
      {
        "content": "Uniquement électrophile.",
        "correct": false,
        "explanation": "Le carbone du Grignard est le nucléophile."
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
      }
    ],
    "explanation": "Le Grignard est un nucléophile carboné."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On réduit séparément un aldéhyde et une cétone avec $\\ce{NaBH4}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'aldéhyde donne un alcool primaire.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "La cétone donne un alcool secondaire.",
        "correct": true,
        "explanation": "Bilan."
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
      }
    ],
    "explanation": "La nature du carbonyle détermine la classe de l'alcool formé par réduction."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi le carbone carbonylé peut-il être attaqué par un hydrure ?",
    "choices": [
      {
        "content": "Il est électrophile.",
        "correct": true,
        "explanation": "Polarisation C=O."
      },
      {
        "content": "L'hydrure est riche en électrons.",
        "correct": true,
        "explanation": "Nucléophile."
      },
      {
        "content": "Les polarités sont complémentaires.",
        "correct": true,
        "explanation": "Nucléophile vers électrophile."
      },
      {
        "content": "Parce que le carbone carbonylé est chargé négativement dans le modèle.",
        "correct": false,
        "explanation": "Il est au contraire déficitaire en électrons."
      }
    ],
    "explanation": "La réduction découle directement de la polarité de la liaison carbonyle."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un aldéhyde réagit avec un organomagnésien puis le milieu est hydrolysé. Quelles propositions sont exactes selon la fiche ?",
    "choices": [
      {
        "content": "Un alcool secondaire est obtenu.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "Une nouvelle liaison C-C est formée.",
        "correct": true,
        "explanation": "Le fragment carboné du Grignard s'ajoute."
      },
      {
        "content": "Le carbone carbonylé est le site d'attaque.",
        "correct": true,
        "explanation": "Centre électrophile."
      },
      {
        "content": "L'hydrolyse est inutile.",
        "correct": false,
        "explanation": "Elle est explicitement nécessaire."
      }
    ],
    "explanation": "Organomagnésien + aldéhyde → alcool secondaire après hydrolyse."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une cétone réagit avec un organomagnésien puis hydrolyse. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un alcool tertiaire est obtenu.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "Une nouvelle liaison C-C est formée.",
        "correct": true,
        "explanation": "Addition du groupe R''."
      },
      {
        "content": "Le carbone du Grignard agit comme nucléophile.",
        "correct": true,
        "explanation": "R''−."
      },
      {
        "content": "Le produit est un alcool secondaire.",
        "correct": false,
        "explanation": "Avec une cétone, le produit est tertiaire."
      }
    ],
    "explanation": "La cétone porte déjà deux substituants carbonés ; l'ajout du Grignard conduit à un carbone alcool tertiaire."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare NaBH4 et un organomagnésien sur une cétone. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "NaBH4 conduit à un alcool secondaire.",
        "correct": true,
        "explanation": "Réduction."
      },
      {
        "content": "L'organomagnésien conduit à un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Addition nucléophile carbonée."
      },
      {
        "content": "L'organomagnésien crée une liaison C-C.",
        "correct": true,
        "explanation": "Le squelette est allongé."
      },
      {
        "content": "NaBH4 ajoute un nouveau substituant carboné.",
        "correct": false,
        "explanation": "Il apporte un hydrure, pas un groupe carboné."
      }
    ],
    "explanation": "La distinction réduction versus addition de Grignard est un objectif majeur de la section."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel produit fonctionnel obtient-on après addition d'un organomagnésien sur une cétone puis hydrolyse ?",
    "choices": [
      {
        "content": "Un alcool tertiaire.",
        "correct": true,
        "explanation": "Bilan de la fiche."
      },
      {
        "content": "Un alcool primaire.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "Un aldéhyde.",
        "correct": false,
        "explanation": "Le carbonyle est consommé."
      },
      {
        "content": "Un acide carboxylique.",
        "correct": false,
        "explanation": "Pas d'oxydation."
      }
    ],
    "explanation": "Cétone + RMgX → alcool tertiaire après hydrolyse."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un carbone voisin du carbonyle ne porte aucun hydrogène. Dans le modèle de la fiche :",
    "choices": [
      {
        "content": "Le caractère nucléophile alpha décrit dans le cours n'est pas mis en valeur sur ce carbone.",
        "correct": true,
        "explanation": "La présence d'un H est requise."
      },
      {
        "content": "La condition « carbone voisin lié à H » n'est pas satisfaite.",
        "correct": true,
        "explanation": "Critère explicite."
      },
      {
        "content": "Le carbone carbonylé reste électrophile.",
        "correct": true,
        "explanation": "Cette propriété est indépendante."
      },
      {
        "content": "Le carbone voisin devient automatiquement plus nucléophile.",
        "correct": false,
        "explanation": "Le modèle exige un H."
      }
    ],
    "explanation": "Le support conditionne la nucléophilie des carbones voisins à la présence d'un hydrogène."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d'une cétone possédant des hydrogènes de part et d'autre du carbonyle :",
    "choices": [
      {
        "content": "Les deux carbones voisins peuvent présenter un caractère nucléophile.",
        "correct": true,
        "explanation": "La fiche l'indique."
      },
      {
        "content": "Le carbone carbonylé reste électrophile.",
        "correct": true,
        "explanation": "Propriété du C=O."
      },
      {
        "content": "La molécule présente donc plusieurs centres de réactivité potentiels dans le modèle.",
        "correct": true,
        "explanation": "Carbonyle et positions voisines."
      },
      {
        "content": "Aucun nucléophile ne peut attaquer le carbonyle.",
        "correct": false,
        "explanation": "C'est au contraire le site d'attaque des hydrures et Grignard."
      }
    ],
    "explanation": "Le modèle met en évidence une réactivité complémentaire du centre carbonylé et des positions alpha."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type d'alcool obtient-on par réduction d'une cétone avec $\\ce{NaBH4}$ ?",
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
    "explanation": "La fiche associe cétone + hydrure à un alcool secondaire."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type d'alcool obtient-on après réaction d'un organomagnésien avec un aldéhyde puis hydrolyse ?",
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
    "explanation": "Le bilan de la fiche est organomagnésien + aldéhyde → alcool secondaire."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un intermédiaire de synthèse porte une cétone. On veut augmenter le nombre de carbones et obtenir un alcool. Quelle approche du chapitre est cohérente ?",
    "choices": [
      {
        "content": "Utiliser un organomagnésien.",
        "correct": true,
        "explanation": "Il apporte un substituant carboné."
      },
      {
        "content": "Prévoir une hydrolyse finale.",
        "correct": true,
        "explanation": "Nécessaire pour l'alcool."
      },
      {
        "content": "Attendre un alcool tertiaire.",
        "correct": true,
        "explanation": "Cétone + Grignard."
      },
      {
        "content": "Utiliser uniquement NaBH4 si l'objectif est d'ajouter un carbone.",
        "correct": false,
        "explanation": "NaBH4 ne crée pas de liaison C-C."
      }
    ],
    "explanation": "Le Grignard est la voie adaptée lorsque l'on souhaite allonger le squelette carboné."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour prédire la classe d'alcool formée par une réaction du chapitre, il faut distinguer :",
    "choices": [
      {
        "content": "Réduction par hydrure d'un aldéhyde.",
        "correct": true,
        "explanation": "→ alcool primaire."
      },
      {
        "content": "Réduction par hydrure d'une cétone.",
        "correct": true,
        "explanation": "→ alcool secondaire."
      },
      {
        "content": "Addition de Grignard sur un aldéhyde.",
        "correct": true,
        "explanation": "→ alcool secondaire."
      },
      {
        "content": "Addition de Grignard sur une cétone.",
        "correct": true,
        "explanation": "→ alcool tertiaire."
      }
    ],
    "explanation": "Les quatre associations doivent être maîtrisées sans confusion."
  },
  {
    "order": 45,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On traite séparément l'éthanal par $\\ce{NaBH4}$ et par un organomagnésien, puis hydrolyse lorsque nécessaire. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "NaBH4 donne un alcool primaire.",
        "correct": true,
        "explanation": "Réduction d'un aldéhyde."
      },
      {
        "content": "L'organomagnésien donne un alcool secondaire.",
        "correct": true,
        "explanation": "Addition sur aldéhyde."
      },
      {
        "content": "Seul l'organomagnésien ajoute un substituant carboné.",
        "correct": true,
        "explanation": "Création C-C."
      },
      {
        "content": "Les deux voies donnent nécessairement le même produit.",
        "correct": false,
        "explanation": "La classe et le squelette peuvent différer."
      }
    ],
    "explanation": "Le même aldéhyde peut être réduit ou allongé selon le nucléophile choisi."
  },
  {
    "order": 46,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On traite séparément la propanone par $\\ce{NaBH4}$ et par $\\ce{CH3MgX}$ puis hydrolyse. Quelles conclusions sont correctes ?",
    "choices": [
      {
        "content": "NaBH4 conduit à un alcool secondaire.",
        "correct": true,
        "explanation": "Réduction."
      },
      {
        "content": "$\\ce{CH3MgX}$ conduit à un alcool tertiaire.",
        "correct": true,
        "explanation": "Grignard sur cétone."
      },
      {
        "content": "La voie Grignard crée une nouvelle liaison C-C.",
        "correct": true,
        "explanation": "Ajout du méthyle."
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
    "question": "Un composé carbonylé réagit avec un nucléophile. Quels éléments du cours permettent d'expliquer la réaction ?",
    "choices": [
      {
        "content": "Le carbone du carbonyle est électrophile.",
        "correct": true,
        "explanation": "Centre attaqué."
      },
      {
        "content": "Le nucléophile est riche en électrons.",
        "correct": true,
        "explanation": "Hydrure ou carbone de Grignard."
      },
      {
        "content": "La polarisation C=O dirige l'attaque.",
        "correct": true,
        "explanation": "Origine électronique."
      },
      {
        "content": "L'oxygène du carbonyle rend le carbone nucléophile.",
        "correct": false,
        "explanation": "Il le rend électrophile."
      }
    ],
    "explanation": "La polarité explique l'ensemble des additions nucléophiles de cette section."
  },
  {
    "order": 48,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un aldéhyde et une cétone subissent chacun une addition d'un même organomagnésien. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le produit de l'aldéhyde est un alcool secondaire après hydrolyse.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Le produit de la cétone est un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Une liaison C-C est créée dans les deux cas.",
        "correct": true,
        "explanation": "Le groupe R'' est ajouté."
      },
      {
        "content": "L'hydrolyse finale est indiquée dans les deux cas.",
        "correct": true,
        "explanation": "Point commun."
      }
    ],
    "explanation": "La nature du carbonyle fixe la classe d'alcool, mais le principe d'addition est commun."
  },
  {
    "order": 49,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un carbone alpha d'une cétone ne porte aucun hydrogène, tandis que celui de l'autre côté en porte. Dans le modèle du support :",
    "choices": [
      {
        "content": "Seul le côté portant H satisfait la condition de nucléophilie alpha décrite.",
        "correct": true,
        "explanation": "La fiche exige un H."
      },
      {
        "content": "Le carbone carbonylé reste électrophile.",
        "correct": true,
        "explanation": "Toujours."
      },
      {
        "content": "La présence de H en alpha est une information utile pour prévoir la réactivité ultérieure avec une base forte.",
        "correct": true,
        "explanation": "Lien avec la section suivante."
      },
      {
        "content": "Les deux côtés sont obligatoirement équivalents.",
        "correct": false,
        "explanation": "Leur substitution peut différer."
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
    "explanation": "L'oxygène du C=O attire la densité électronique ; le carbone du carbonyle est donc le centre électrophile attaqué par les nucléophiles."
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une cétone porte deux positions alpha comportant chacune au moins un hydrogène. Quelles propositions sont compatibles avec le modèle du cours ?",
    "choices": [
      {
        "content": "Les deux positions peuvent présenter un caractère nucléophile.",
        "correct": true,
        "explanation": "La fiche l'indique pour les deux côtés d'une cétone."
      },
      {
        "content": "Le carbone carbonylé demeure électrophile.",
        "correct": true,
        "explanation": "Polarité C=O."
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
    "question": "Quelle stratégie permet de distinguer un hydrure d'un organomagnésien dans une question de synthèse ?",
    "choices": [
      {
        "content": "L'hydrure réduit le carbonyle sans apporter de carbone.",
        "correct": true,
        "explanation": "NaBH4."
      },
      {
        "content": "L'organomagnésien apporte un groupe carboné.",
        "correct": true,
        "explanation": "Création de liaison C-C."
      },
      {
        "content": "La classe d'alcool final diffère notamment pour une cétone.",
        "correct": true,
        "explanation": "Secondaire avec hydrure, tertiaire avec Grignard."
      },
      {
        "content": "Les deux réactifs sont identiques du point de vue du squelette carboné.",
        "correct": false,
        "explanation": "Le Grignard allonge le squelette."
      }
    ],
    "explanation": "Le bilan carboné est un repère particulièrement robuste."
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un chercheur souhaite former une nouvelle liaison C-C au niveau du carbone d'un aldéhyde. Quelle réaction du support répond à cet objectif ?",
    "choices": [
      {
        "content": "Addition d'un organomagnésien.",
        "correct": true,
        "explanation": "Le nucléophile carboné s'ajoute au carbonyle."
      },
      {
        "content": "Hydrolyse finale.",
        "correct": true,
        "explanation": "Elle conduit à l'alcool."
      },
      {
        "content": "Formation d'un alcool secondaire.",
        "correct": true,
        "explanation": "Bilan aldéhyde + Grignard."
      },
      {
        "content": "Réduction par NaBH4 seule.",
        "correct": false,
        "explanation": "Elle ne crée pas de liaison C-C."
      }
    ],
    "explanation": "La réaction de Grignard est l'outil du chapitre pour construire une liaison carbone-carbone au niveau du carbonyle."
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé donne un alcool tertiaire après réaction avec un organomagnésien et hydrolyse. Quel substrat du chapitre est cohérent ?",
    "choices": [
      {
        "content": "Une cétone.",
        "correct": true,
        "explanation": "C'est le bilan général."
      },
      {
        "content": "Un aldéhyde dans le cadre général présenté.",
        "correct": false,
        "explanation": "Il donne un alcool secondaire."
      },
      {
        "content": "La réaction implique une addition nucléophile carbonée.",
        "correct": true,
        "explanation": "Grignard."
      },
      {
        "content": "Le substrat initial possède un carbone carbonylé électrophile.",
        "correct": true,
        "explanation": "Condition de l'attaque."
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
        "explanation": "Polarisation."
      },
      {
        "content": "$\\ce{NaBH4}$ réduit un aldéhyde en alcool primaire.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "$\\ce{NaBH4}$ réduit une cétone en alcool secondaire.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Un organomagnésien + aldéhyde donne un alcool secondaire après hydrolyse.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Un organomagnésien + cétone donne un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Le carbone du Grignard est uniquement électrophile.",
        "correct": false,
        "explanation": "Nucléophile."
      },
      {
        "content": "NaBH4 ajoute un nouveau substituant carboné.",
        "correct": false,
        "explanation": "Hydrure."
      },
      {
        "content": "Une cétone + Grignard donne un alcool primaire.",
        "correct": false,
        "explanation": "Tertiaire."
      },
      {
        "content": "Le carbone carbonylé est nucléophile.",
        "correct": false,
        "explanation": "Électrophile."
      },
      {
        "content": "Un carbone alpha sans hydrogène satisfait automatiquement la condition de nucléophilie alpha.",
        "correct": false,
        "explanation": "La fiche exige un H."
      }
    ],
    "explanation": "Cette sélection résume polarité, réduction et addition des organomagnésiens."
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de classes d'alcools différentes sont obtenues dans les quatre associations de base du chapitre (aldéhyde/hydrure, cétone/hydrure, aldéhyde/Grignard, cétone/Grignard) : primaire, secondaire, tertiaire ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Les quatre réactions mobilisent au total les trois classes d'alcools : primaire, secondaire et tertiaire."
  }
];
