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
        "explanation": "L’oxygène attire la densité électronique de la liaison $\\ce{C=O}$, ce qui confère au carbone carbonylé un caractère électrophile."
      },
      {
        "content": "L'oxygène attire la densité électronique.",
        "correct": true,
        "explanation": "L’oxygène, plus électronégatif, attire la densité électronique de la liaison $\\ce{C=O}$."
      },
      {
        "content": "Cette polarisation permet l'attaque de nucléophiles sur le carbone carbonylé.",
        "correct": true,
        "explanation": "La polarisation du carbonyle explique l’attaque des nucléophiles sur son carbone électrophile."
      },
      {
        "content": "Le carbone du carbonyle est décrit comme nucléophile.",
        "correct": false,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "L'oxygène du carbonyle est moins électronégatif que le carbone.",
        "correct": false,
        "explanation": "L’oxygène est plus électronégatif que le carbone ; il attire la densité électronique de la liaison $\\ce{C=O}$."
      }
    ],
    "explanation": "La polarisation de $\\ce{C=O}$ appauvrit le carbone en électrons : il est électrophile et peut être attaqué par un nucléophile."
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
        "explanation": "L’oxygène du carbonyle est le pôle riche en électrons ; le centre électrophile est le carbone du groupe $\\ce{C=O}$."
      },
      {
        "content": "Tout carbone voisin sans distinction.",
        "correct": false,
        "explanation": "Les carbones voisins du carbonyle ne sont pas tous électrophiles par définition ; le centre électrophile directement décrit est le carbone de $\\ce{C=O}$."
      },
      {
        "content": "Le carbone voisin du carbonyle, dans tous les cas.",
        "correct": false,
        "explanation": "Un carbone alpha peut devenir nucléophile après déprotonation, mais le centre directement électrophile du carbonyle reste son carbone."
      },
      {
        "content": "Le carbone alpha après déprotonation.",
        "correct": false,
        "explanation": "Après déprotonation, le carbone alpha est un centre nucléophile ; le centre électrophile du carbonyle est son carbone."
      },
      {
        "content": "Le carbone du groupement carbonyle.",
        "correct": true,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      }
    ],
    "explanation": "Dans un aldéhyde comme dans une cétone, le centre électrophile directement visé par les nucléophiles est le carbone du carbonyle."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans un aldéhyde possédant un carbone voisin du carbonyle, à quelles conditions ce carbone peut-il acquérir un caractère nucléophile ?",
    "choices": [
      {
        "content": "Il est voisin du carbonyle.",
        "correct": true,
        "explanation": "Le carbone immédiatement voisin du carbonyle correspond à la position alpha, site concerné par la déprotonation décrite."
      },
      {
        "content": "La polarisation du carbonyle contribue à cette réactivité.",
        "correct": true,
        "explanation": "L'effet électroattracteur de l'oxygène du carbonyle contribue à l'acidité du proton en position alpha."
      },
      {
        "content": "Il ne porte jamais d'hydrogène.",
        "correct": false,
        "explanation": "La présence d’un hydrogène sur le carbone alpha est au contraire nécessaire à la déprotonation qui met en valeur son caractère nucléophile."
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
    "explanation": "Un hydrogène porté par le carbone alpha permet sa déprotonation par une base forte et la formation d'un centre nucléophile."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des carbones voisins du carbonyle d'une cétone, quelles propositions sont exactes ?",
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
        "explanation": "La présence d’au moins un hydrogène en alpha est nécessaire pour former le centre nucléophile par déprotonation."
      },
      {
        "content": "Sont identiques au carbone carbonylé.",
        "correct": false,
        "explanation": "Les carbones alpha sont voisins du carbone carbonylé ; ils ne se confondent pas avec lui."
      },
      {
        "content": "Sont tous nécessairement dépourvus d'hydrogène.",
        "correct": false,
        "explanation": "Les carbones alpha peuvent porter des hydrogènes ; leur présence conditionne la réactivité de déprotonation étudiée."
      }
    ],
    "explanation": "Dans une cétone, chacun des carbones alpha portant au moins un hydrogène peut devenir nucléophile après déprotonation."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'ion hydrure, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{NaBH4}$ est cité.",
        "correct": true,
        "explanation": "$\\ce{NaBH4}$ est utilisé ici comme réducteur des aldéhydes et des cétones."
      },
      {
        "content": "Il oxyde l'aldéhyde en acide.",
        "correct": false,
        "explanation": "Un hydrure est un réducteur : il réduit l’aldéhyde en alcool primaire au lieu de l’oxyder."
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
        "explanation": "L’hydrure attaque le carbone carbonylé électrophile et initie la réduction."
      }
    ],
    "explanation": "L'ion hydrure est riche en électrons et agit comme nucléophile sur le carbone carbonylé électrophile ; $\\ce{NaBH4}$ est le réducteur doux cité."
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
        "explanation": "$\\ce{NaBH4}$ est le borohydrure de sodium, réducteur doux cité pour les aldéhydes et cétones."
      },
      {
        "content": "$\\ce{SOCl2}$.",
        "correct": false,
        "explanation": "$\\ce{SOCl2}$ est un agent chlorant des alcools ; ce n’est pas le réducteur doux d’un aldéhyde ou d’une cétone."
      },
      {
        "content": "$\\ce{H3O+}$.",
        "correct": false,
        "explanation": "$\\ce{H3O+}$ correspond à une espèce acide ; ce n’est pas le réducteur doux utilisé pour réduire un carbonyle."
      },
      {
        "content": "$\\ce{Mg}$ seul.",
        "correct": false,
        "explanation": "Le magnésium sert à préparer un organomagnésien à partir d’un dérivé halogéné ; il n’est pas le réducteur doux demandé."
      },
      {
        "content": "Un organomagnésien $\\ce{RMgX}$.",
        "correct": false,
        "explanation": "Un organomagnésien peut s’ajouter au carbonyle, mais le réducteur doux cité pour cette réduction est $\\ce{NaBH4}$."
      }
    ],
    "explanation": "Le borohydrure de sodium $\\ce{NaBH4}$ est le réducteur doux cité pour les aldéhydes et les cétones."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La réduction d'un aldéhyde par un hydrure conduit :",
    "choices": [
      {
        "content": "À un acide carboxylique.",
        "correct": false,
        "explanation": "La réduction d’un aldéhyde conduit à un alcool primaire ; un acide carboxylique correspond au produit d’oxydation de l’aldéhyde."
      },
      {
        "content": "À un alcool secondaire.",
        "correct": false,
        "explanation": "La réduction d’un aldéhyde conduit à un alcool primaire ; l’alcool secondaire correspond à la réduction d’une cétone."
      },
      {
        "content": "À un alcool primaire.",
        "correct": true,
        "explanation": "La réduction d’un aldéhyde transforme $\\ce{-CHO}$ en $\\ce{-CH2OH}$ : le produit est un alcool primaire."
      },
      {
        "content": "À une diminution du degré d'oxydation.",
        "correct": true,
        "explanation": "Le passage de l’aldéhyde à l’alcool primaire diminue le degré d’oxydation du carbone fonctionnel."
      },
      {
        "content": "À une cétone.",
        "correct": false,
        "explanation": "Une réduction d’aldéhyde ne forme pas de cétone ; elle conduit à l’alcool primaire correspondant."
      }
    ],
    "explanation": "La réduction d'un aldéhyde par hydrure transforme le carbonyle en alcool primaire."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La réduction d'une cétone par un hydrure conduit :",
    "choices": [
      {
        "content": "À une diminution du degré d'oxydation.",
        "correct": true,
        "explanation": "Le passage de la cétone à l’alcool secondaire diminue le degré d’oxydation du carbone fonctionnel."
      },
      {
        "content": "À un alcool tertiaire.",
        "correct": false,
        "explanation": "Un organomagnésien avec une cétone peut donner un alcool tertiaire, pas NaBH4."
      },
      {
        "content": "À un aldéhyde.",
        "correct": false,
        "explanation": "La réduction d’une cétone conduit à un alcool secondaire, pas à un aldéhyde."
      },
      {
        "content": "À un alcool primaire.",
        "correct": false,
        "explanation": "La réduction d’une cétone conduit à un alcool secondaire ; un alcool primaire est obtenu par réduction d’un aldéhyde."
      },
      {
        "content": "À un alcool secondaire.",
        "correct": true,
        "explanation": "La réduction d’une cétone conserve ses deux substituants carbonés et donne un alcool secondaire."
      }
    ],
    "explanation": "La réduction d'une cétone par hydrure transforme le carbonyle en alcool secondaire."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la réaction d'un organomagnésien avec un aldéhyde ou une cétone, quelles propositions sont exactes ?",
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
        "explanation": "Le carbone nucléophile de l’organomagnésien peut attaquer le carbone carbonylé électrophile d’un aldéhyde."
      },
      {
        "content": "Il peut réagir avec une cétone.",
        "correct": true,
        "explanation": "Le carbone nucléophile de l’organomagnésien peut attaquer le carbone carbonylé électrophile d’une cétone."
      },
      {
        "content": "Une hydrolyse finale est nécessaire.",
        "correct": true,
        "explanation": "Après l’addition de l’organomagnésien, l’hydrolyse protonne l’intermédiaire et permet d’obtenir l’alcool."
      }
    ],
    "explanation": "Le carbone de l'organomagnésien est nucléophile et attaque le carbone carbonylé électrophile ; une hydrolyse finale donne un alcool secondaire avec un aldéhyde et tertiaire avec une cétone."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel rôle joue le carbone du fragment organomagnésien lors de sa réaction avec une cétone ?",
    "choices": [
      {
        "content": "Uniquement électrophile.",
        "correct": false,
        "explanation": "Le carbone de l’organomagnésien est riche en électrons et agit comme nucléophile, non comme électrophile."
      },
      {
        "content": "Nucléophile.",
        "correct": true,
        "explanation": "Le carbone lié au magnésium est riche en électrons et se comporte comme un nucléophile."
      },
      {
        "content": "Groupe partant.",
        "correct": false,
        "explanation": "Le carbone de l’organomagnésien est le nucléophile de la réaction ; il n’agit pas comme groupe partant."
      },
      {
        "content": "Oxydant.",
        "correct": false,
        "explanation": "La réaction considérée est une addition nucléophile sur un carbonyle ; le carbone de l’organomagnésien n’agit pas comme oxydant."
      },
      {
        "content": "Acide de Brønsted.",
        "correct": false,
        "explanation": "Le carbone de l’organomagnésien agit comme nucléophile dans cette réaction ; il n’est pas décrit ici comme un acide de Brønsted."
      }
    ],
    "explanation": "Le carbone lié au magnésium est riche en électrons et agit comme nucléophile sur le carbone carbonylé électrophile."
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
        "explanation": "$\\ce{NaBH4}$ réduit un aldéhyde en alcool primaire."
      },
      {
        "content": "La cétone donne un alcool secondaire.",
        "correct": true,
        "explanation": "$\\ce{NaBH4}$ réduit une cétone en alcool secondaire."
      },
      {
        "content": "Dans les deux cas, le nucléophile est un hydrure.",
        "correct": true,
        "explanation": "Dans les deux réductions, l’espèce nucléophile transférée est un hydrure $\\ce{H^-}$."
      },
      {
        "content": "La cétone donne un alcool tertiaire avec NaBH4.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ réduit une cétone en alcool secondaire ; un alcool tertiaire est obtenu avec un organomagnésien."
      },
      {
        "content": "$\\ce{NaBH4}$ transforme une cétone directement en acide carboxylique.",
        "correct": false,
        "explanation": "Le borohydrure est un réducteur; le produit attendu est un alcool secondaire."
      }
    ],
    "explanation": "Avec $\\ce{NaBH4}$, un aldéhyde est réduit en alcool primaire et une cétone en alcool secondaire ; dans les deux cas, l'espèce transférée est un hydrure."
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
        "explanation": "Le carbone carbonylé est déficient en électrons en raison de la polarisation de $\\ce{C=O}$ ; il n’est pas chargé négativement."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Il n’est pas électrophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend précisément le carbone carbonylé électrophile."
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
    "explanation": "Le carbone carbonylé est électrophile en raison de la polarisation de $\\ce{C=O}$, tandis que l'hydrure est un nucléophile riche en électrons."
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
        "explanation": "Le fragment carboné de l’organomagnésien s’ajoute au carbone carbonylé et crée une nouvelle liaison carbone–carbone."
      },
      {
        "content": "Le carbone carbonylé est le site d'attaque.",
        "correct": true,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "L'hydrolyse est inutile.",
        "correct": false,
        "explanation": "L’hydrolyse finale est nécessaire pour protoner l’intermédiaire et obtenir l’alcool."
      },
      {
        "content": "Une hydrolyse finale permet d'obtenir l'alcool.",
        "correct": true,
        "explanation": "L’hydrolyse finale protonne l’intermédiaire issu de l’addition de l’organomagnésien et permet d’obtenir l’alcool."
      },
      {
        "content": "Un alcool secondaire est obtenu.",
        "correct": true,
        "explanation": "L’addition d’un organomagnésien sur un aldéhyde conduit, après hydrolyse, à un alcool secondaire."
      }
    ],
    "explanation": "Un organomagnésien attaque le carbone électrophile de l'aldéhyde, crée une liaison C–C puis, après hydrolyse, conduit à un alcool secondaire."
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
        "explanation": "Avec une cétone, l’addition d’un organomagnésien suivie d’une hydrolyse conduit bien à un alcool tertiaire."
      },
      {
        "content": "Une nouvelle liaison C-C est formée.",
        "correct": true,
        "explanation": "Le fragment carboné de l’organomagnésien s’ajoute au carbone carbonylé et crée une nouvelle liaison carbone–carbone."
      },
      {
        "content": "Le carbone du Grignard agit comme nucléophile.",
        "correct": true,
        "explanation": "Le carbone de l’organomagnésien agit comme nucléophile et attaque le carbone carbonylé électrophile."
      },
      {
        "content": "Le produit est un alcool secondaire.",
        "correct": false,
        "explanation": "Une cétone + organomagnésien conduit à un alcool tertiaire ; l’alcool secondaire correspond au cas d’un aldéhyde."
      }
    ],
    "explanation": "L'hydrolyse finale protonne l'intermédiaire issu de l'addition de l'organomagnésien et permet d'obtenir l'alcool."
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
        "explanation": "$\\ce{NaBH4}$ apporte un hydrure, pas un substituant carboné ; il ne crée donc pas de liaison C–C."
      },
      {
        "content": "$\\ce{NaBH4}$ conduit à un alcool tertiaire.",
        "correct": false,
        "explanation": "Sur une cétone, $\\ce{NaBH4}$ conduit à un alcool secondaire ; l’alcool tertiaire est obtenu avec un organomagnésien après hydrolyse."
      },
      {
        "content": "NaBH4 conduit à un alcool secondaire.",
        "correct": true,
        "explanation": "Cette transformation diminue le degré d’oxydation de la fonction concernée: il s’agit bien d’une réduction."
      },
      {
        "content": "L'organomagnésien conduit à un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "L’addition d’un organomagnésien sur une cétone forme, après hydrolyse, un alcool tertiaire."
      }
    ],
    "explanation": "Sur une cétone, $\\ce{NaBH4}$ réduit le carbonyle en alcool secondaire sans ajouter de carbone, tandis qu'un organomagnésien crée une liaison C–C et donne un alcool tertiaire après hydrolyse."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel produit fonctionnel obtient-on après addition d'un organomagnésien sur une cétone puis hydrolyse ?",
    "choices": [
      {
        "content": "Un acide carboxylique.",
        "correct": false,
        "explanation": "Une cétone traitée par un organomagnésien donne un alcool tertiaire après hydrolyse, pas un acide carboxylique."
      },
      {
        "content": "Un alcool secondaire.",
        "correct": false,
        "explanation": "Une cétone traitée par un organomagnésien donne un alcool tertiaire après hydrolyse, pas un alcool secondaire."
      },
      {
        "content": "Un alcool tertiaire.",
        "correct": true,
        "explanation": "Une cétone réagit avec un organomagnésien pour donner, après hydrolyse, un alcool tertiaire."
      },
      {
        "content": "Un alcool primaire.",
        "correct": false,
        "explanation": "Le produit d’une cétone avec un organomagnésien est un alcool tertiaire ; un alcool primaire n’est pas obtenu dans ce cas."
      },
      {
        "content": "Un aldéhyde.",
        "correct": false,
        "explanation": "L’addition d’un organomagnésien sur une cétone transforme le carbonyle en alcool après hydrolyse ; elle ne forme pas un aldéhyde."
      }
    ],
    "explanation": "Une cétone réagissant avec un organomagnésien conduit, après hydrolyse, à un alcool tertiaire."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un carbone voisin du carbonyle ne porte aucun hydrogène. Quelles conséquences en tire-t-on dans le modèle étudié ?",
    "choices": [
      {
        "content": "Le carbone voisin devient automatiquement plus nucléophile.",
        "correct": false,
        "explanation": "Sans hydrogène en alpha, ce carbone ne peut pas être déprotoné selon la voie décrite et ne devient donc pas automatiquement nucléophile."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend au contraire le carbone électrophile."
      },
      {
        "content": "Le caractère nucléophile alpha décrit dans le cadre étudié n'est pas mis en valeur sur ce carbone.",
        "correct": true,
        "explanation": "L’absence d’hydrogène en alpha empêche de mettre en valeur le caractère nucléophile de ce carbone par déprotonation."
      },
      {
        "content": "La condition « carbone voisin lié à H » n'est pas satisfaite.",
        "correct": true,
        "explanation": "L’absence d’hydrogène sur ce carbone signifie que la condition nécessaire à sa déprotonation n’est pas remplie."
      },
      {
        "content": "Le carbone carbonylé reste électrophile.",
        "correct": true,
        "explanation": "L’électrophilie du carbone carbonylé et l’acidité éventuelle d’un hydrogène en alpha sont deux propriétés distinctes d’un même composé carbonylé."
      }
    ],
    "explanation": "Sans hydrogène en alpha, le carbone voisin ne peut pas être déprotoné selon la voie décrite ; le carbone carbonylé reste néanmoins électrophile."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d'une cétone possédant des hydrogènes en alpha de part et d'autre du carbonyle, quelles propositions sont exactes ?",
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
    "explanation": "Une cétone possédant des hydrogènes en alpha présente deux types de réactivité : carbone carbonylé électrophile et carbones alpha potentiellement nucléophiles après déprotonation."
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
    "explanation": "La réduction d'une cétone par $\\ce{NaBH4}$ donne un alcool secondaire."
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
    "explanation": "Un organomagnésien réagissant avec un aldéhyde conduit, après hydrolyse, à un alcool secondaire dans le cas général."
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
        "explanation": "L’organomagnésien apporte un fragment carboné nucléophile et permet d’allonger le squelette."
      },
      {
        "content": "Prévoir une hydrolyse finale.",
        "correct": true,
        "explanation": "Après l’addition de l’organomagnésien, l’hydrolyse protonne l’intermédiaire et permet d’obtenir l’alcool tertiaire."
      },
      {
        "content": "Attendre un alcool tertiaire.",
        "correct": true,
        "explanation": "L’addition d’un organomagnésien sur une cétone donne, après hydrolyse, un alcool tertiaire."
      },
      {
        "content": "Utiliser uniquement NaBH4 si l'objectif est d'ajouter un carbone.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ réduit la cétone mais n’ajoute aucun carbone ; il ne répond donc pas à l’objectif d’allongement du squelette."
      },
      {
        "content": "Après hydrolyse, une cétone et un organomagnésien donnent systématiquement un alcool primaire.",
        "correct": false,
        "explanation": "Une cétone traitée par un organomagnésien conduit à un alcool tertiaire."
      }
    ],
    "explanation": "Pour allonger le squelette carboné d'une cétone tout en formant un alcool, on utilise un organomagnésien puis une hydrolyse ; le produit est un alcool tertiaire."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour prévoir la classe d'alcool formée à partir d'un composé carbonylé, quelles associations faut-il distinguer ?",
    "choices": [
      {
        "content": "Addition de Grignard sur une cétone.",
        "correct": true,
        "explanation": "Une cétone + organomagnésien conduit, après hydrolyse, à un alcool tertiaire."
      },
      {
        "content": "Réduction par hydrure d'une cétone → alcool tertiaire.",
        "correct": false,
        "explanation": "La réduction d’une cétone par hydrure conduit à un alcool secondaire, pas à un alcool tertiaire."
      },
      {
        "content": "Réduction par hydrure d'un aldéhyde.",
        "correct": true,
        "explanation": "Un aldéhyde réduit par un hydrure conduit à un alcool primaire."
      },
      {
        "content": "Réduction par hydrure d'une cétone.",
        "correct": true,
        "explanation": "Une cétone réduite par un hydrure conduit à un alcool secondaire."
      },
      {
        "content": "Addition de Grignard sur un aldéhyde.",
        "correct": true,
        "explanation": "Un aldéhyde + organomagnésien conduit, après hydrolyse, à un alcool secondaire."
      }
    ],
    "explanation": "Hydrure et organomagnésien donnent des classes d'alcools différentes selon que le substrat est un aldéhyde ou une cétone."
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
        "explanation": "L’addition d’un organomagnésien sur un aldéhyde donne, après hydrolyse, un alcool secondaire."
      },
      {
        "content": "Seul l'organomagnésien ajoute un substituant carboné.",
        "correct": true,
        "explanation": "Un organomagnésien apporte un fragment carboné nucléophile qui forme une nouvelle liaison carbone–carbone avec un centre électrophile."
      },
      {
        "content": "Les deux voies donnent nécessairement le même produit.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ et l’organomagnésien ne donnent pas le même produit : ils diffèrent à la fois par l’allongement du squelette et par la classe d’alcool obtenue."
      },
      {
        "content": "$\\ce{NaBH4}$ crée une nouvelle liaison C-C.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ apporte un hydrure et ne crée aucune nouvelle liaison carbone–carbone."
      },
      {
        "content": "NaBH4 donne un alcool primaire.",
        "correct": true,
        "explanation": "$\\ce{NaBH4}$ réduit le groupe aldéhyde en groupe $\\ce{-CH2OH}$ sans ajouter de carbone ; l’alcool obtenu est primaire."
      }
    ],
    "explanation": "Sur l'éthanal, $\\ce{NaBH4}$ donne un alcool primaire sans allonger le squelette, alors qu'un organomagnésien ajoute un groupe carboné et donne un alcool secondaire après hydrolyse."
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
        "explanation": "La réduction d’une cétone par $\\ce{NaBH4}$ conduit bien à un alcool secondaire."
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
        "explanation": "$\\ce{NaBH4}$ apporte un hydrure et ne crée aucune nouvelle liaison carbone–carbone."
      }
    ],
    "explanation": "Sur la propanone, $\\ce{NaBH4}$ donne un alcool secondaire ; un organomagnésien crée une liaison C–C et donne un alcool tertiaire après hydrolyse."
  },
  {
    "order": 47,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé carbonylé réagit avec un nucléophile. Quelles propriétés expliquent cette réaction ?",
    "choices": [
      {
        "content": "La polarisation C=O dirige l'attaque.",
        "correct": true,
        "explanation": "La polarisation de $\\ce{C=O}$ rend le carbone carbonylé électrophile et dirige l’attaque du nucléophile vers ce centre."
      },
      {
        "content": "L'oxygène du carbonyle rend le carbone nucléophile.",
        "correct": false,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et le rend électrophile."},
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
        "explanation": "Un nucléophile est riche en électrons ; c’est le cas d’un hydrure ou du carbone d’un organomagnésien."
      }
    ],
    "explanation": "La polarisation du carbonyle explique l'attaque d'un nucléophile riche en électrons sur son carbone électrophile."
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
        "explanation": "L’addition d’un organomagnésien sur un aldéhyde conduit, après hydrolyse, à un alcool secondaire."
      },
      {
        "content": "Le produit de la cétone est un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Avec une cétone, l’addition du fragment carboné puis l’hydrolyse conduit à un alcool tertiaire."
      },
      {
        "content": "Une liaison C-C est créée dans les deux cas.",
        "correct": true,
        "explanation": "Le fragment carboné de l’organomagnésien s’ajoute au carbone du carbonyle : une nouvelle liaison C–C est créée dans les deux cas."
      },
      {
        "content": "L'hydrolyse finale est indiquée dans les deux cas.",
        "correct": true,
        "explanation": "Après l’addition de l’organomagnésien, une hydrolyse finale est nécessaire dans les deux cas pour former l’alcool."
      },
      {
        "content": "L'aldéhyde et la cétone donnent tous deux un alcool tertiaire.",
        "correct": false,
        "explanation": "Avec un organomagnésien, un aldéhyde donne un alcool secondaire alors qu’une cétone donne un alcool tertiaire."
      }
    ],
    "explanation": "Un organomagnésien donne un alcool secondaire avec un aldéhyde et un alcool tertiaire avec une cétone, après hydrolyse ; une liaison C–C est créée dans les deux cas."
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
    "explanation": "La possibilité de déprotoner une position alpha dépend de la présence d'un hydrogène sur ce carbone ; le carbone carbonylé reste électrophile."
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
    "explanation": "Dans la propanone, le carbone du groupe $\\ce{C=O}$ est le centre électrophile."
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
        "explanation": "Le carbonyle peut recevoir un nucléophile, tandis qu’après déprotonation un carbone alpha peut attaquer un électrophile."
      },
      {
        "content": "La présence d'hydrogènes alpha supprime le carbonyle.",
        "correct": false,
        "explanation": "La présence d’hydrogènes en alpha ne supprime pas la fonction carbonyle."
      }
    ],
    "explanation": "Une cétone portant des hydrogènes en alpha des deux côtés peut être fonctionnalisée en alpha, tout en conservant un carbone carbonylé électrophile."
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles différences permettent de distinguer l'action d'un hydrure de celle d'un organomagnésien sur un composé carbonylé ?",
    "choices": [
      {
        "content": "La classe d'alcool final diffère notamment pour une cétone.",
        "correct": true,
        "explanation": "Avec une cétone, un hydrure conduit à un alcool secondaire tandis qu’un organomagnésien conduit à un alcool tertiaire après hydrolyse."
      },
      {
        "content": "Les deux réactifs sont identiques du point de vue du squelette carboné.",
        "correct": false,
        "explanation": "Seul l’organomagnésien apporte un fragment carboné ; l’hydrure ne modifie pas le nombre de carbones."
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
    "explanation": "Un hydrure réduit le carbonyle sans modifier le nombre de carbones ; un organomagnésien apporte un fragment carboné et crée une liaison C–C."
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un chercheur souhaite former une nouvelle liaison C-C à partir du carbone carbonylé d'un aldéhyde. Quelles propositions décrivent une stratégie adaptée ?",
    "choices": [
      {
        "content": "Addition d'un organomagnésien.",
        "correct": true,
        "explanation": "L’organomagnésien apporte un nucléophile carboné qui attaque le carbonyle et crée la nouvelle liaison C–C recherchée."
      },
      {
        "content": "Hydrolyse finale.",
        "correct": true,
        "explanation": "Après l’addition du fragment carboné de l’organomagnésien, l’hydrolyse permet d’obtenir l’alcool secondaire."
      },
      {
        "content": "Formation d'un alcool secondaire.",
        "correct": true,
        "explanation": "L’addition d’un organomagnésien sur un aldéhyde conduit, après hydrolyse, à un alcool secondaire."
      },
      {
        "content": "Réduction par NaBH4 seule.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ réduit le carbonyle mais ne crée pas de nouvelle liaison carbone–carbone."
      },
      {
        "content": "$\\ce{NaBH4}$ seul permet d'ajouter un groupe carboné à l'aldéhyde.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ apporte un hydrure et ne crée aucune nouvelle liaison carbone–carbone."
      }
    ],
    "explanation": "L'addition d'un organomagnésien sur un aldéhyde crée une nouvelle liaison C–C ; l'hydrolyse finale conduit à un alcool secondaire."
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé donne un alcool tertiaire après réaction avec un organomagnésien puis hydrolyse. Quelles propositions sont cohérentes ?",
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
        "explanation": "Une cétone donne un alcool tertiaire après addition d’un organomagnésien puis hydrolyse."
      },
      {
        "content": "Un aldéhyde dans le cadre général présenté.",
        "correct": false,
        "explanation": "Dans le cadre général présenté, un aldéhyde donne un alcool secondaire avec un organomagnésien, pas un alcool tertiaire."
      },
      {
        "content": "La réaction implique une addition nucléophile carbonée.",
        "correct": true,
        "explanation": "Le réactif organomagnésien apporte un groupe carboné nucléophile qui crée une nouvelle liaison carbone-carbone."
      }
    ],
    "explanation": "Une cétone est cohérente avec la formation d'un alcool tertiaire après addition d'un organomagnésien puis hydrolyse."
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
        "explanation": "$\\ce{NaBH4}$ réduit le groupe aldéhyde $\\ce{-CHO}$ en groupe $\\ce{-CH2OH}$ d’un alcool primaire."
      },
      {
        "content": "$\\ce{NaBH4}$ réduit une cétone en alcool secondaire.",
        "correct": true,
        "explanation": "$\\ce{NaBH4}$ réduit une cétone en alcool secondaire en transformant le groupe $\\ce{C=O}$ en carbone portant $\\ce{-OH}$."
      },
      {
        "content": "Un organomagnésien + aldéhyde donne un alcool secondaire après hydrolyse.",
        "correct": true,
        "explanation": "Un organomagnésien s’ajoute au carbone carbonylé d’un aldéhyde et donne, après hydrolyse, un alcool secondaire."
      },
      {
        "content": "Un organomagnésien + cétone donne un alcool tertiaire après hydrolyse.",
        "correct": true,
        "explanation": "Une cétone réagit avec un organomagnésien pour donner, après hydrolyse, un alcool tertiaire."
      },
      {
        "content": "Le carbone du Grignard est uniquement électrophile.",
        "correct": false,
        "explanation": "Le centre considéré est riche en électrons et peut donc se comporter comme un nucléophile."
      },
      {
        "content": "NaBH4 ajoute un nouveau substituant carboné.",
        "correct": false,
        "explanation": "$\\ce{NaBH4}$ apporte un hydrure et n’introduit aucun nouveau carbone."
      },
      {
        "content": "Une cétone + Grignard donne un alcool primaire.",
        "correct": false,
        "explanation": "Une cétone réagit avec un organomagnésien pour former, après hydrolyse, un alcool tertiaire et non un alcool primaire."
      },
      {
        "content": "Le carbone carbonylé est nucléophile.",
        "correct": false,
        "explanation": "Le centre considéré est déficient en électrons et peut donc être attaqué par un nucléophile."
      },
      {
        "content": "Un carbone alpha sans hydrogène satisfait automatiquement la condition de nucléophilie alpha.",
        "correct": false,
        "explanation": "Sans hydrogène en position alpha, la déprotonation par une base forte ne peut pas créer le centre nucléophile décrit."
      }
    ],
    "explanation": "Le carbone carbonylé est électrophile ; hydrures et organomagnésiens sont des nucléophiles qui conduisent respectivement aux alcools attendus."
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
    "explanation": "Les quatre associations considérées mobilisent les trois classes d'alcools : primaire, secondaire et tertiaire."
  }
];
