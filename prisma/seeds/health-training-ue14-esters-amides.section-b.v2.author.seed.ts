import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.5 – Section B – Esters : hydrolyse, polarisation et réactivité
 */

export const UE14_CH9_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'hydrolyse d'un ester, quelles propositions sont exactes?",
    "choices": [
      {
        "content": "La fonction ester est hydrolysable.",
        "correct": true,
        "explanation": "La fonction ester peut être rompue par hydrolyse lorsque les conditions sont adaptées."
      },
      {
        "content": "L'eau participe à la rupture de la fonction.",
        "correct": true,
        "explanation": "Une hydrolyse consomme de l’eau pour rompre la fonction ester et former les produits hydrolysés."
      },
      {
        "content": "Une hydrolyse acide est réalisée à pH acide.",
        "correct": true,
        "explanation": "Par définition, une hydrolyse acide est réalisée à pH acide."
      },
      {
        "content": "Une hydrolyse alcaline est également appelée saponification.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester en milieu basique est appelée saponification."
      },
      {
        "content": "Un ester est totalement insensible à l’eau quelles que soient les conditions.",
        "correct": false,
        "explanation": "La fonction ester est hydrolysable en milieu acide ou basique dans les conditions appropriées."
      }
    ],
    "explanation": "La fonction ester est hydrolysable en milieu acide ou basique dans des conditions appropriées."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel autre nom donne-t-on à l’hydrolyse alcaline d’un ester ?",
    "choices": [
      {
        "content": "Hydrogénation.",
        "correct": false,
        "explanation": "L’hydrogénation ne désigne pas l’hydrolyse basique d’un ester."
      },
      {
        "content": "Saponification.",
        "correct": true,
        "explanation": "La saponification est l’hydrolyse d’un ester en milieu basique."
      },
      {
        "content": "Amidification.",
        "correct": false,
        "explanation": "L’amidification forme une amide à partir d’un partenaire azoté ; ce n’est pas le nom de l’hydrolyse alcaline d’un ester."
      },
      {
        "content": "Déshydratation.",
        "correct": false,
        "explanation": "Une déshydratation élimine de l’eau ; elle ne désigne pas l’hydrolyse basique d’un ester."
      },
      {
        "content": "Hydrolyse acide.",
        "correct": false,
        "explanation": "L’hydrolyse acide est une autre hydrolyse de l’ester ; elle n’est pas le nom de l’hydrolyse alcaline."
      }
    ],
    "explanation": "La saponification est l’hydrolyse d’un ester en milieu basique."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "En hydrolyse acide d'un ester $\\mathrm{RCOOR'}$, quels produits sont attendus?",
    "choices": [
      {
        "content": "Un alcool $\\mathrm{R'OH}$.",
        "correct": true,
        "explanation": "Le groupe $\\ce{OR'}$ de l’ester est protoné au cours du bilan et conduit à l’alcool $\\ce{R'OH}$."
      },
      {
        "content": "Un ammonium quaternaire.",
        "correct": false,
        "explanation": "Aucun atome d’azote n’est introduit par cette transformation, donc aucune fonction azotée n’est formée."
      },
      {
        "content": "Un organomagnésien.",
        "correct": false,
        "explanation": "Aucun magnésium n’intervient dans l’hydrolyse acide d’un ester ; un organomagnésien n’est donc pas formé."
      },
      {
        "content": "L’hydrolyse acide conserve le motif ester intact.",
        "correct": false,
        "explanation": "L’hydrolyse rompt la fonction ester et forme notamment un acide carboxylique."
      },
      {
        "content": "Un acide carboxylique $\\mathrm{RCOOH}$.",
        "correct": true,
        "explanation": "En hydrolyse acide, le fragment acyle de l’ester est retrouvé sous forme d’acide carboxylique $\\ce{RCOOH}$."
      }
    ],
    "explanation": "L’hydrolyse acide d’un ester $\\ce{RCOOR'}$ conduit à l’acide carboxylique $\\ce{RCOOH}$ et à l’alcool $\\ce{R'OH}$."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l’hydrolyse alcaline d’un ester, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un ester est totalement insensible à l’eau quelles que soient les conditions.",
        "correct": false,
        "explanation": "La fonction ester est hydrolysable en milieu acide ou basique dans les conditions appropriées."
      },
      {
        "content": "Un carboxylate.",
        "correct": true,
        "explanation": "En milieu basique, le fragment acyle est stabilisé sous forme de carboxylate $\\ce{RCOO^-}$."
      },
      {
        "content": "Un alcool.",
        "correct": true,
        "explanation": "Le groupe $\\ce{OR'}$ de l’ester est libéré sous forme d’alcool $\\ce{R'OH}$."
      },
      {
        "content": "Une saponification.",
        "correct": true,
        "explanation": "La saponification est l’hydrolyse d’un ester en milieu basique."
      },
      {
        "content": "Un acide carboxylique non ionisé comme seul produit acyle en milieu basique.",
        "correct": false,
        "explanation": "En milieu basique, la forme carboxylate $\\ce{RCOO^-}$ est privilégiée plutôt que l’acide carboxylique non ionisé."
      }
    ],
    "explanation": "En milieu basique, l’hydrolyse de l’ester est une saponification et conduit à un carboxylate et à un alcool."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du milieu acide aqueux utilisé pour l’hydrolyse d’un ester, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "$\\ce{H2O}$ intervient.",
        "correct": true,
        "explanation": "L’eau est un réactif de l’hydrolyse et participe à la rupture de la fonction ester."
      },
      {
        "content": "Aucun proton n'est impliqué.",
        "correct": false,
        "explanation": "Le milieu étant acide, des espèces protonantes interviennent ; l’absence totale de proton est donc incompatible avec les conditions indiquées."
      },
      {
        "content": "L’hydrolyse acide d’un ester ne fait intervenir aucune molécule d’eau.",
        "correct": false,
        "explanation": "L’eau est un réactif de l’hydrolyse acide ; son absence est donc incompatible avec le bilan."
      },
      {
        "content": "$\\ce{H3O+}$.",
        "correct": true,
        "explanation": "$\\ce{H2O + H+ -> H3O+}$."
      },
      {
        "content": "$\\ce{OH-}$ comme seule espèce caractéristique du milieu acide.",
        "correct": false,
        "explanation": "L’ion $\\ce{OH^-}$ caractérise un milieu basique ; il n’est pas l’espèce caractéristique d’un milieu acide."
      }
    ],
    "explanation": "En milieu acide aqueux, l’eau intervient et la présence de protons conduit notamment à l’ion oxonium $\\ce{H3O+}$."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la mobilité autour de la liaison C-O d'un ester:",
    "choices": [
      {
        "content": "La liaison $\\ce{C-O}$ de l’ester est totalement bloquée en rotation.",
        "correct": false,
        "explanation": "La liaison $\\ce{C-O}$ considérée dans l’ester est décrite comme libre en rotation ; elle n’est donc pas totalement bloquée."
      },
      {
        "content": "Cette propriété contraste avec la liaison C-N d'une amide étudiée plus loin.",
        "correct": true,
        "explanation": "La rotation autour de $\\ce{C-O}$ de l’ester est décrite comme libre, tandis que la liaison $\\ce{C-N}$ de l’amide est rigidifiée par délocalisation."
      },
      {
        "content": "La liaison C-O est décrite comme totalement bloquée par une double liaison partielle dans l'ester.",
        "correct": false,
        "explanation": "Dans l’ester, la liaison C–O considérée est décrite comme libre en rotation ; le blocage par caractère partiel de double liaison concerne surtout l’amide C–N."
      },
      {
        "content": "Le comportement de rotation fait partie des propriétés structurales du groupe ester.",
        "correct": true,
        "explanation": "La mobilité autour de la liaison $\\ce{C-O}$ fait partie des propriétés structurales retenues pour l’ester."
      },
      {
        "content": "La liaison carbone-azote d’une amide possède un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La délocalisation du doublet de l’azote vers le carbonyle limite la libre rotation autour de la liaison $\\ce{C-N}$."
      }
    ],
    "explanation": "La liaison $\\ce{C-O}$ considérée dans l’ester est décrite comme libre en rotation, contrairement à la liaison $\\ce{C-N}$ de l’amide dont la rotation est fortement limitée."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La fonction ester comporte combien d'hétéroatomes et lesquels?",
    "choices": [
      {
        "content": "Aucun hétéroatome.",
        "correct": false,
        "explanation": "Un ester possède deux hétéroatomes, tous deux des oxygènes."
      },
      {
        "content": "Le motif simple d’un ester comporte trois atomes d’oxygène.",
        "correct": false,
        "explanation": "Le motif ester simple comporte deux oxygènes, et non trois."
      },
      {
        "content": "Deux oxygènes.",
        "correct": true,
        "explanation": "Le motif ester contient l’oxygène du carbonyle et l’oxygène du groupe $\\ce{OR'}$."
      },
      {
        "content": "Un azote et un oxygène.",
        "correct": false,
        "explanation": "Un motif comportant un oxygène et un azote évoque une amide plutôt qu’un ester."
      },
      {
        "content": "Deux hétéroatomes au total dans le motif simple.",
        "correct": true,
        "explanation": "Les deux hétéroatomes du motif ester simple sont les deux oxygènes."
      }
    ],
    "explanation": "Un oxygène carbonylé et un oxygène du groupe OR'. Les deux sont des oxygènes."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Selon le modèle électronique, le carbone du carbonyle de l'ester présente:",
    "choices": [
      {
        "content": "Un site pouvant être attaqué par un nucléophile.",
        "correct": true,
        "explanation": "Le carbone carbonylé électrophile peut être attaqué par un nucléophile."
      },
      {
        "content": "Un caractère uniquement nucléophile.",
        "correct": false,
        "explanation": "Le carbone carbonylé de l’ester est électrophile ; il n’a pas un caractère uniquement nucléophile."
      },
      {
        "content": "Aucune polarisation.",
        "correct": false,
        "explanation": "La liaison $\\ce{C=O}$ est polarisée par l’effet électroattracteur de l’oxygène."
      },
      {
        "content": "L’oxygène du carbonyle rend le carbone carbonylé fortement nucléophile.",
        "correct": false,
        "explanation": "L’oxygène attire la densité électronique : le carbone carbonylé devient électrophile, pas nucléophile."
      },
      {
        "content": "Un caractère électrophile.",
        "correct": true,
        "explanation": "L’oxygène du carbonyle attire la densité électronique et rend le carbone carbonylé électrophile."
      }
    ],
    "explanation": "La polarisation du groupe $\\ce{C=O}$ rend le carbone carbonylé de l’ester électrophile et donc attaquable par un nucléophile."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le carbone situé à côté du carbonyle d'un ester, lorsqu'il porte des hydrogènes dans l'exemple, peut:",
    "choices": [
      {
        "content": "Une base forte rend nécessairement le carbone alpha moins riche en électrons.",
        "correct": false,
        "explanation": "Une base forte retire un proton en alpha et augmente le caractère nucléophile de ce carbone ; elle ne l’appauvrit pas en électrons."
      },
      {
        "content": "Acquérir un caractère nucléophile selon les conditions.",
        "correct": true,
        "explanation": "Après déprotonation en position alpha, le carbone voisin du carbonyle peut acquérir un caractère nucléophile."
      },
      {
        "content": "Être rendu plus nucléophile par une base forte.",
        "correct": true,
        "explanation": "La déprotonation par une base forte crée un centre carboné riche en électrons en position alpha."
      },
      {
        "content": "Réagir ensuite avec un électrophile.",
        "correct": true,
        "explanation": "Après déprotonation en alpha, le carbone devenu nucléophile peut former une nouvelle liaison avec un électrophile."
      },
      {
        "content": "Être toujours le centre électrophile principal sans possibilité de changement.",
        "correct": false,
        "explanation": "Le carbone carbonylé est électrophile, tandis que le carbone alpha peut devenir nucléophile après déprotonation."
      }
    ],
    "explanation": "Dans un ester possédant des hydrogènes en alpha, une base forte peut rendre le carbone alpha nucléophile ; il peut alors réagir avec un électrophile."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel centre de l'ester est directement décrit comme électrophile?",
    "choices": [
      {
        "content": "Le carbone alpha rendu nucléophile par une base forte.",
        "correct": false,
        "explanation": "Après déprotonation en alpha, le carbone voisin du carbonyle devient riche en électrons et peut attaquer un électrophile."
      },
      {
        "content": "L'alcool produit après hydrolyse.",
        "correct": false,
        "explanation": "L’alcool n’appartient qu’aux produits d’une hydrolyse ; il n’est pas un centre réactif de l’ester initial."
      },
      {
        "content": "Le carbone du carbonyle.",
        "correct": true,
        "explanation": "La polarisation de $\\ce{C=O}$ appauvrit le carbone carbonylé en densité électronique et le rend électrophile."
      },
      {
        "content": "Le proton de l'eau.",
        "correct": false,
        "explanation": "Le proton de l’eau n’est pas un centre carboné de l’ester."
      },
      {
        "content": "Oxygène uniquement.",
        "correct": false,
        "explanation": "L’attaque nucléophile considérée vise le carbone électrophile du groupe carbonyle."
      }
    ],
    "explanation": "Il est appauvri en électrons par l'oxygène."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un ester est traité par un nucléophile dans le modèle étudié. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le nucléophile attaque le carbone électrophile du carbonyle.",
        "correct": true,
        "explanation": "La polarisation du carbonyle rend son carbone électrophile ; c’est donc ce centre qui est attaqué par le nucléophile."
      },
      {
        "content": "Le groupement OR' est remplacé par le nucléophile dans le bilan simplifié.",
        "correct": true,
        "explanation": "Lors de la substitution acyle, le nucléophile attaque le carbone carbonylé et le groupe $\\ce{OR'}$ est remplacé dans le bilan simplifié."
      },
      {
        "content": "Le carbone alpha est nécessairement le site d'attaque dans cette réaction.",
        "correct": false,
        "explanation": "Sans activation par une base forte, le nucléophile vise le carbone carbonylé électrophile et non le carbone alpha."
      },
      {
        "content": "Le produit conserve un groupement acyle lié au nucléophile.",
        "correct": true,
        "explanation": "Dans le bilan simplifié, le groupe acyle est conservé et le nucléophile remplace le groupe $\\ce{OR'}$."
      },
      {
        "content": "Le carbone carbonylé repousse le nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ attire au contraire le nucléophile vers le carbone carbonylé."
      }
    ],
    "explanation": "Lors de la substitution acyle, le nucléophile attaque le carbone carbonylé et le groupe $\\ce{OR'}$ est remplacé dans le bilan simplifié."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un ester possédant un $\\ce{CH2}$ en alpha du carbonyle est traité par une base forte puis par un électrophile. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone alpha devient nécessairement électrophile.",
        "correct": false,
        "explanation": "Après déprotonation, le carbone alpha devient nucléophile et non électrophile."
      },
      {
        "content": "La base forte rend le carbone carbonylé nucléophile.",
        "correct": false,
        "explanation": "La base forte active le carbone alpha ; le carbone carbonylé reste le centre électrophile de l’autre voie de réactivité."
      },
      {
        "content": "La base forte rend le carbone alpha nucléophile.",
        "correct": true,
        "explanation": "Elle crée un excès de densité électronique sur ce carbone."
      },
      {
        "content": "L'électrophile se fixe ensuite sur ce carbone alpha.",
        "correct": true,
        "explanation": "Le carbone alpha rendu nucléophile réagit avec l’électrophile ajouté ensuite."
      },
      {
        "content": "Le carbonyle ne peut pas rester présent.",
        "correct": false,
        "explanation": "La déprotonation en position alpha n’impose pas la disparition du groupe carbonyle ; celui-ci peut rester présent dans le produit."
      }
    ],
    "explanation": "Une base forte peut déprotoner le carbone alpha de l’ester et le rendre nucléophile ; l’électrophile ajouté ensuite se fixe sur ce carbone."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions distinguent correctement les deux sites de réactivité d'un ester dans le modèle?",
    "choices": [
      {
        "content": "Carbone alpha: peut devenir nucléophile.",
        "correct": true,
        "explanation": "Une base forte peut déprotoner le carbone alpha et lui conférer un caractère nucléophile."
      },
      {
        "content": "Un nucléophile réagit préférentiellement avec le centre électrophile.",
        "correct": true,
        "explanation": "Un nucléophile externe est attiré par le carbone carbonylé électrophile."
      },
      {
        "content": "Un électrophile peut réagir avec le carbone alpha rendu nucléophile.",
        "correct": true,
        "explanation": "Une base forte peut arracher un hydrogène en position alpha du carbonyle et créer un centre carboné nucléophile."
      },
      {
        "content": "Le carbone carbonylé est nucléophile tandis que le carbone alpha est toujours électrophile.",
        "correct": false,
        "explanation": "Le carbone carbonylé est électrophile ; le carbone alpha peut devenir nucléophile après action d’une base forte."
      },
      {
        "content": "Carbone carbonylé: électrophile.",
        "correct": true,
        "explanation": "La polarisation de $\\ce{C=O}$ confère un caractère électrophile au carbone carbonylé."
      }
    ],
    "explanation": "L’ester présente un carbone carbonylé électrophile et, après action d’une base forte, un carbone alpha pouvant devenir nucléophile."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'hydrolyse acide et de la saponification:",
    "choices": [
      {
        "content": "L’hydrolyse acide d’un ester conduit à un acide carboxylique et un alcool.",
        "correct": true,
        "explanation": "L’eau rompt la liaison ester et restitue les deux fonctions correspondantes."
      },
      {
        "content": "Les deux rompent la fonction ester.",
        "correct": true,
        "explanation": "Hydrolyse acide et saponification rompent toutes deux la fonction ester, mais elles diffèrent par le milieu et la forme du produit acyle."
      },
      {
        "content": "L'hydrolyse acide ne conduit pas à un acide carboxylique.",
        "correct": false,
        "explanation": "En milieu acide, l’hydrolyse d’un ester conduit bien à un acide carboxylique et à un alcool."
      },
      {
        "content": "La saponification conduit à un carboxylate.",
        "correct": true,
        "explanation": "En milieu basique, l’ester est hydrolysé vers un carboxylate et un alcool : c’est la saponification."
      },
      {
        "content": "Les deux conduisent nécessairement à une amide.",
        "correct": false,
        "explanation": "Aucun atome d’azote n’est introduit par cette transformation, donc aucune fonction azotée n’est formée."
      }
    ],
    "explanation": "L’eau rompt la liaison ester et restitue les deux fonctions correspondantes."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Un ester est hydrolysé à pH basique. Quelle espèce acyle attend-on dans le bilan?",
    "choices": [
      {
        "content": "Un chlorure d'acyle.",
        "correct": false,
        "explanation": "Un chlorure d’acyle est un dérivé activé ; ce n’est pas le produit de la saponification d’un ester."
      },
      {
        "content": "Un organomagnésien.",
        "correct": false,
        "explanation": "La saponification ne fait intervenir aucun magnésium et ne forme pas d’organomagnésien."
      },
      {
        "content": "Hydrogénation.",
        "correct": false,
        "explanation": "L’hydrogénation ne désigne pas l’hydrolyse basique d’un ester."
      },
      {
        "content": "Un carboxylate.",
        "correct": true,
        "explanation": "En milieu basique, le fragment acyle est obtenu sous forme de carboxylate."
      },
      {
        "content": "Une amide.",
        "correct": false,
        "explanation": "L’hydrolyse basique d’un ester ne crée pas de liaison $\\ce{C-N}$ ; elle ne forme donc pas une amide."
      }
    ],
    "explanation": "À pH basique, l’hydrolyse d’un ester est une saponification et le fragment acyle est obtenu sous forme de carboxylate."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un ester est hydrolysé à pH acide. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Un alcool n’est pas libéré.",
        "correct": false,
        "explanation": "L’hydrolyse acide rompt la fonction ester et libère notamment l’alcool $\\ce{R'OH}$."
      },
      {
        "content": "Un acide carboxylique est formé.",
        "correct": true,
        "explanation": "En hydrolyse acide d’un ester, le fragment acyle est retrouvé sous forme d’acide carboxylique $\\ce{RCOOH}$."
      },
      {
        "content": "La fonction ester est rompue.",
        "correct": true,
        "explanation": "L’hydrolyse rompt la fonction ester pour former les produits acide et alcool."
      },
      {
        "content": "Le groupe OR' reste obligatoirement attaché au carbonyle.",
        "correct": false,
        "explanation": "L’hydrolyse ou la substitution acyle rompt précisément la liaison permettant de séparer le groupe $\\ce{OR'}$ du fragment acyle."
      },
      {
        "content": "L’hydrolyse acide conserve l’ester sans former d’acide carboxylique.",
        "correct": false,
        "explanation": "L’hydrolyse acide rompt l’ester et conduit notamment à un acide carboxylique."
      }
    ],
    "explanation": "En milieu acide, l’hydrolyse rompt l’ester et conduit à un acide carboxylique et à un alcool."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le modèle de polarisation de l'ester présenté permet de prévoir:",
    "choices": [
      {
        "content": "Une absence totale de réactivité électronique.",
        "correct": false,
        "explanation": "Un ester possède des centres réactifs ; une absence totale de réactivité électronique est donc incorrecte."
      },
      {
        "content": "La polarisation du carbonyle rend le carbone carbonylé nucléophile.",
        "correct": false,
        "explanation": "La polarisation appauvrit le carbone carbonylé en électrons et lui confère un caractère électrophile."
      },
      {
        "content": "Une attaque nucléophile au niveau du carbonyle.",
        "correct": true,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "Une réaction avec un électrophile au niveau du carbone alpha préalablement rendu nucléophile.",
        "correct": true,
        "explanation": "Une base forte peut arracher un hydrogène en position alpha du carbonyle et créer un centre carboné nucléophile."
      },
      {
        "content": "Deux comportements dépendant des conditions expérimentales.",
        "correct": true,
        "explanation": "Selon les conditions, on peut exploiter soit l’électrophilie du carbonyle, soit la nucléophilie créée en position alpha."
      }
    ],
    "explanation": "Le carbone carbonylé d’un ester est électrophile et peut être attaqué par un nucléophile."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans le motif fonctionnel d'un ester simple, combien de centres carbonés sont explicitement mis en avant pour leur réactivité: le carbone carbonylé et le carbone alpha?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Deux centres carbonés sont mis en avant : le carbone carbonylé électrophile et le carbone alpha pouvant devenir nucléophile."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une base forte est ajoutée à un ester possédant un hydrogène en alpha. Quel raisonnement décrit correctement sa réactivité ?",
    "choices": [
      {
        "content": "La base forte rend le carbone alpha électrophile.",
        "correct": false,
        "explanation": "Une base forte rend le carbone alpha nucléophile, pas électrophile."
      },
      {
        "content": "La densité électronique peut être déplacée vers le carbone alpha.",
        "correct": true,
        "explanation": "La déprotonation en alpha forme un centre carboné riche en électrons qui peut être représenté comme nucléophile."
      },
      {
        "content": "Le carbone alpha peut ensuite attaquer un électrophile.",
        "correct": true,
        "explanation": "Le carbone alpha devenu nucléophile peut ensuite former une liaison avec l’électrophile."
      },
      {
        "content": "Le but de cette étape est de rendre le carbone alpha plus nucléophile.",
        "correct": true,
        "explanation": "Le rôle de la base forte est de déprotoner la position alpha afin d’y créer un centre nucléophile."
      },
      {
        "content": "La base forte transforme nécessairement l'ester en amide.",
        "correct": false,
        "explanation": "La base forte agit sur la position alpha ; elle n’introduit aucun azote et ne transforme pas l’ester en amide."
      }
    ],
    "explanation": "Une base forte peut déprotoner le carbone alpha d’un ester ; ce carbone riche en électrons peut ensuite attaquer un électrophile."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du motif ressemblant à un énol évoqué pour l'ester:",
    "choices": [
      {
        "content": "Une autre représentation conserve C=O et place un caractère négatif sur le carbone voisin.",
        "correct": true,
        "explanation": "Une forme limite peut conserver le carbonyle tout en représentant un caractère carbanionique sur le carbone alpha."
      },
      {
        "content": "Ces représentations servent à expliquer le caractère nucléophile possible du carbone alpha.",
        "correct": true,
        "explanation": "Ces représentations rendent compte de la possibilité de concentrer de la densité électronique sur le carbone alpha."
      },
      {
        "content": "Les représentations électroniques rendent le carbone carbonylé nucléophile.",
        "correct": false,
        "explanation": "Ces représentations expliquent surtout la nucléophilie possible du carbone alpha ; le carbone carbonylé reste électrophile."
      },
      {
        "content": "Une forme limite peut représenter un déplacement électronique conduisant à une structure avec $\\ce{C=C}$ et $\\ce{OH}$.",
        "correct": true,
        "explanation": "Une représentation proposée déplace les électrons vers une structure comportant $\\ce{C=C}$ et $\\ce{OH}$ tout en conservant le groupe $\\ce{OR'}$."
      },
      {
        "content": "Cette structure n'est pas exactement un énol classique en raison de la persistance du groupe $\\ce{OR'}$.",
        "correct": true,
        "explanation": "La persistance du groupe $\\ce{OR'}$ distingue cette représentation de celle d’un énol classique."
      }
    ],
    "explanation": "Une forme limite peut conserver le carbonyle tout en représentant un caractère carbanionique sur le carbone alpha."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un nucléophile est mis en présence d'un ester sans activation du carbone alpha par base forte. Quel centre est le plus directement désigné comme cible?",
    "choices": [
      {
        "content": "Le carbone du carbonyle.",
        "correct": true,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "Le carbone alpha parce qu'il est toujours électrophile.",
        "correct": false,
        "explanation": "Le carbone alpha est plutôt rendu nucléophile dans l'autre voie."
      },
      {
        "content": "Le nucléophile peut remplacer le groupement OR' dans le bilan simplifié.",
        "correct": true,
        "explanation": "Une attaque nucléophile sur le carbone carbonylé peut conduire au remplacement du groupe $\\ce{OR'}$ dans le bilan simplifié."
      },
      {
        "content": "Le carbonyle ne joue aucun rôle.",
        "correct": false,
        "explanation": "Le carbonyle joue un rôle central : son carbone électrophile est la cible du nucléophile."
      },
      {
        "content": "Le nucléophile est repoussé par le carbone du carbonyle.",
        "correct": false,
        "explanation": "Le carbone carbonylé est électrophile et constitue précisément la cible du nucléophile."
      }
    ],
    "explanation": "Une attaque nucléophile sur le carbone carbonylé peut conduire au remplacement du groupe $\\ce{OR'}$ dans le bilan simplifié."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel rôle joue l'oxygène carbonylé dans la polarisation de l'ester?",
    "choices": [
      {
        "content": "Il rend tous les carbones de la molécule identiquement réactifs.",
        "correct": false,
        "explanation": "L’effet électroattracteur du carbonyle ne rend pas tous les carbones équivalents : il différencie notamment le carbone carbonylé et le carbone alpha."
      },
      {
        "content": "L’oxygène carbonylé enrichit le carbone carbonylé en électrons.",
        "correct": false,
        "explanation": "L’oxygène attire la densité électronique et appauvrit le carbone carbonylé, qui devient électrophile."
      },
      {
        "content": "Il exerce un effet électroattracteur.",
        "correct": true,
        "explanation": "Le groupe carbonyle attire la densité électronique en raison de la forte électronégativité de l’oxygène."
      },
      {
        "content": "Il contribue à rendre le carbone carbonylé électrophile.",
        "correct": true,
        "explanation": "L’effet électroattracteur de l’oxygène polarise $\\ce{C=O}$ et rend le carbone carbonylé électrophile."
      },
      {
        "content": "Il influence aussi la distribution électronique au niveau du carbone alpha.",
        "correct": true,
        "explanation": "Le carbonyle influence aussi les hydrogènes et la densité électronique du carbone alpha, ce qui permet sa déprotonation dans certaines conditions."
      }
    ],
    "explanation": "L’oxygène carbonylé attire la densité électronique : il rend le carbone du carbonyle électrophile et influence également la réactivité du carbone alpha."
  },
  {
    "order": 45,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare deux expériences sur le même ester: A, ajout d'un nucléophile; B, base forte puis électrophile. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Dans B, le carbone alpha est rendu nucléophile.",
        "correct": true,
        "explanation": "Une base forte peut arracher un hydrogène en position alpha du carbonyle et créer un centre carboné nucléophile."
      },
      {
        "content": "Dans B, l'électrophile se fixe au carbone alpha.",
        "correct": true,
        "explanation": "Après déprotonation en alpha, l’électrophile se fixe sur ce carbone nucléophile."
      },
      {
        "content": "Les deux expériences illustrent des polarités différentes au sein de la même fonction ester.",
        "correct": true,
        "explanation": "Les deux expériences mettent en évidence des réactivités différentes du carbone carbonylé et du carbone alpha d’un même ester."
      },
      {
        "content": "Dans l’expérience A, le carbone carbonylé agit comme nucléophile.",
        "correct": false,
        "explanation": "Dans l’expérience A, le carbone carbonylé est l’électrophile attaqué par le nucléophile."
      },
      {
        "content": "Dans A, le carbone carbonylé est le centre électrophile attaqué.",
        "correct": true,
        "explanation": "Dans cette voie, le nucléophile attaque le carbone électrophile du groupe carbonyle."
      }
    ],
    "explanation": "L’ester possède un carbone carbonylé électrophile et un carbone alpha qui peut devenir nucléophile après déprotonation par une base forte."
  },
  {
    "order": 46,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une molécule contient à la fois une fonction ester et un CH2 en alpha du carbonyle. Quelles stratégies sont compatibles avec le modèle?",
    "choices": [
      {
        "content": "Le carbone alpha est le seul centre réactif de l’ester quelles que soient les conditions.",
        "correct": false,
        "explanation": "L’ester peut réagir au niveau du carbone carbonylé ou du carbone alpha selon les conditions ; le carbone alpha n’est donc pas l’unique centre réactif."
      },
      {
        "content": "Utiliser un nucléophile pour viser le carbone carbonylé.",
        "correct": true,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "Utiliser une base forte puis un électrophile pour fonctionnaliser le carbone alpha.",
        "correct": true,
        "explanation": "Après déprotonation en alpha, le carbone voisin du carbonyle devient riche en électrons et peut attaquer un électrophile."
      },
      {
        "content": "Le choix des conditions ne permet pas de changer le site de réactivité mobilisé.",
        "correct": false,
        "explanation": "Le choix entre nucléophile et base forte permet précisément de mobiliser des sites de réactivité différents."
      },
      {
        "content": "Les deux voies exigent obligatoirement une rupture complète du squelette carboné.",
        "correct": false,
        "explanation": "Ces réactions modifient la fonction ou le carbone alpha sans imposer une rupture complète du squelette carboné."
      }
    ],
    "explanation": "Selon les conditions, un ester peut réagir au niveau du carbone carbonylé électrophile ou, après déprotonation par une base forte, au niveau du carbone alpha devenu nucléophile."
  },
  {
    "order": 47,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À partir d'un ester $\\mathrm{RCOOR'}$, quelles transformations sont cohérentes avec la réactivité étudiée ?",
    "choices": [
      {
        "content": "Nucléophile → remplacement de OR' par Nu dans le bilan simplifié.",
        "correct": true,
        "explanation": "Le nucléophile attaque le carbone acylé et remplace le groupe partant ; le squelette acyle est conservé."
      },
      {
        "content": "Base forte puis électrophile → fixation de l'électrophile en alpha.",
        "correct": true,
        "explanation": "La base forte rend le carbone alpha nucléophile ; l’électrophile se fixe ensuite sur cette position."
      },
      {
        "content": "Un nucléophile externe vise prioritairement le carbone alpha sans action d’une base forte.",
        "correct": false,
        "explanation": "Sans activation par une base forte, le carbone alpha n’est pas le site nucléophile visé ; le nucléophile attaque le carbonyle."
      },
      {
        "content": "Hydrolyse acide → RCOOH + R'OH.",
        "correct": true,
        "explanation": "En milieu acide, l’hydrolyse de l’ester conduit à $\\ce{RCOOH}$ et $\\ce{R'OH}$."
      },
      {
        "content": "Hydrolyse basique → RCOO− + R'OH.",
        "correct": true,
        "explanation": "La saponification correspond à l’hydrolyse d’un ester en milieu basique."
      }
    ],
    "explanation": "Le nucléophile attaque le carbone acylé et remplace le groupe partant ; le squelette acyle est conservé."
  },
  {
    "order": 48,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel couple « centre / rôle » est correct pour l'ester dans le modèle étudié?",
    "choices": [
      {
        "content": "Carbone carbonylé / toujours nucléophile.",
        "correct": false,
        "explanation": "Le carbone carbonylé d’un ester est électrophile, pas nucléophile."
      },
      {
        "content": "Carbone alpha / toujours électrophile.",
        "correct": false,
        "explanation": "Après déprotonation en alpha, le carbone voisin du carbonyle devient riche en électrons et peut attaquer un électrophile."
      },
      {
        "content": "Oxygène carbonylé / groupe partant principal du bilan R-CO-Nu.",
        "correct": false,
        "explanation": "Dans le bilan simplifié, c’est le groupe $\\ce{OR'}$ qui est remplacé par le nucléophile, pas l’oxygène carbonylé."
      },
      {
        "content": "Oxygène uniquement.",
        "correct": false,
        "explanation": "L’attaque nucléophile considérée vise le carbone électrophile du groupe carbonyle."
      },
      {
        "content": "Carbone carbonylé / électrophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
      }
    ],
    "explanation": "Le carbone du groupe carbonyle est le centre électrophile de l’ester dans le modèle étudié."
  },
  {
    "order": 49,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pourquoi la saponification et l'hydrolyse acide ne donnent-elles pas exactement la même forme du fragment acide dans les bilans?",
    "choices": [
      {
        "content": "Parce que la saponification remplace le carbone du carbonyle par un azote.",
        "correct": false,
        "explanation": "Aucun atome d’azote n’est introduit par cette transformation, donc aucune fonction azotée n’est formée."
      },
      {
        "content": "La saponification correspond à une hydrolyse d’ester en milieu basique.",
        "correct": true,
        "explanation": "L’hydrolyse alcaline d’un ester est appelée saponification."
      },
      {
        "content": "Le pH diffère.",
        "correct": true,
        "explanation": "L’hydrolyse acide et la saponification se déroulent dans des milieux de pH opposés."
      },
      {
        "content": "En milieu acide, la forme RCOOH est mise en avant.",
        "correct": true,
        "explanation": "En milieu acide, le fragment carboxylique est représenté sous la forme $\\ce{RCOOH}$."
      },
      {
        "content": "En milieu basique, la forme RCOO− est mise en avant.",
        "correct": true,
        "explanation": "La perte du proton du groupe carboxyle conduit bien à l’ion carboxylate."
      }
    ],
    "explanation": "L’hydrolyse acide donne $\\ce{RCOOH}$, tandis que la saponification en milieu basique conduit au carboxylate $\\ce{RCOO^-}$."
  },
  {
    "order": 50,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un étudiant affirme qu'un ester ne possède qu'un seul site réactionnel. Pourquoi cette affirmation est-elle incorrecte ?",
    "choices": [
      {
        "content": "Le carbone alpha peut devenir nucléophile.",
        "correct": true,
        "explanation": "Après déprotonation en position alpha, ce carbone peut devenir un second site nucléophile de l’ester."
      },
      {
        "content": "Les conditions expérimentales déterminent lequel de ces comportements est exploité.",
        "correct": true,
        "explanation": "Selon les conditions, on peut exploiter soit l’électrophilie du carbone carbonylé, soit la nucléophilie créée en position alpha par une base forte."
      },
      {
        "content": "Un ester présente donc au moins deux centres carbonés de réactivité.",
        "correct": true,
        "explanation": "L’ester possède un carbone carbonylé électrophile et, après activation par une base forte, un carbone alpha pouvant devenir nucléophile."
      },
      {
        "content": "Le carbone carbonylé est nucléophile.",
        "correct": false,
        "explanation": "La polarisation de $\\ce{C=O}$ rend le carbone carbonylé électrophile et non nucléophile."
      },
      {
        "content": "Le carbone carbonylé est électrophile.",
        "correct": true,
        "explanation": "Le carbone carbonylé est électrophile en raison de la polarisation de la liaison $\\ce{C=O}$."
      }
    ],
    "explanation": "Un ester peut présenter deux centres carbonés de réactivité : le carbone carbonylé électrophile et le carbone alpha pouvant devenir nucléophile après action d’une base forte."
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Après traitement d’un ester par une base forte puis ajout d’un électrophile, quels raisonnements constituent des erreurs à éviter ?",
    "choices": [
      {
        "content": "Distinguer le carbone alpha du carbone carbonylé.",
        "correct": false,
        "explanation": "Distinguer les deux carbones est au contraire indispensable : le carbonyle est électrophile et le carbone alpha peut devenir nucléophile."
      },
      {
        "content": "Confondre le carbone alpha activé avec le carbone carbonylé électrophile.",
        "correct": true,
        "explanation": "Confondre le carbone alpha activé avec le carbone carbonylé conduit à attribuer la mauvaise réactivité au mauvais site."
      },
      {
        "content": "Oublier que la base forte intervient avant l'électrophile.",
        "correct": true,
        "explanation": "La base forte doit agir avant l’ajout de l’électrophile pour créer le centre nucléophile en alpha."
      },
      {
        "content": "Conclure que le nucléophile externe remplace OR' dans cette séquence précise.",
        "correct": true,
        "explanation": "Dans cette séquence, l’électrophile réagit avec le carbone alpha ; le remplacement de $\\ce{OR'}$ correspond à l’autre voie, l’attaque nucléophile du carbonyle."
      },
      {
        "content": "Considérer que le carbone alpha peut être le site de fixation de l'électrophile.",
        "correct": false,
        "explanation": "Le carbone alpha rendu nucléophile est bien le site attendu pour la fixation de l’électrophile ; ce raisonnement n’est donc pas une erreur."
      }
    ],
    "explanation": "Après traitement d’un ester par une base forte, il faut distinguer le carbone alpha rendu nucléophile du carbone carbonylé qui reste le centre électrophile d’une autre voie de réaction."
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Dans l'ester représenté ci-dessous, cliquez sur le carbone électrophile du carbonyle.",
    "image": {
      "src": "/images/training/ue14/esters-amides/ester-centre-electrophile-qzone.svg",
      "alt": "Schéma original d'un ester de type CH3-CO-OCH3 avec les atomes principaux explicitement représentés",
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
    "explanation": "Dans le modèle, l'oxygène carbonylé attire la densité électronique et confère au carbone du carbonyle un caractère électrophile."
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un ester subit d'abord une attaque nucléophile au carbonyle, tandis qu'un autre échantillon est traité par base forte puis électrophile. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Les deux réactions exploitent des centres différents de la fonction.",
        "correct": true,
        "explanation": "L’attaque sur le carbone carbonylé et la fonctionnalisation du carbone alpha exploitent deux centres réactifs distincts."
      },
      {
        "content": "La première met en jeu le caractère électrophile du carbone carbonylé.",
        "correct": true,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
      },
      {
        "content": "La seconde met en jeu le caractère nucléophile du carbone alpha.",
        "correct": true,
        "explanation": "Une base forte peut arracher un hydrogène en position alpha du carbonyle et créer un centre carboné nucléophile."
      },
      {
        "content": "Ces comportements sont contradictoires et ne peuvent pas coexister dans le même cadre.",
        "correct": false,
        "explanation": "Ces comportements ne sont pas contradictoires : ils apparaissent dans des conditions différentes, notamment selon la présence d’un nucléophile ou d’une base forte."
      },
      {
        "content": "Dans la première expérience, le carbone carbonylé joue le rôle de nucléophile.",
        "correct": false,
        "explanation": "La première expérience exploite au contraire le caractère électrophile du carbone carbonylé."
      }
    ],
    "explanation": "L’ester possède un carbone carbonylé électrophile et un carbone alpha qui peut devenir nucléophile après déprotonation par une base forte."
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de la substitution acyle simplifiée $\\mathrm{ester + Nu \\rightarrow R{-}CO{-}Nu}$ présentée:",
    "choices": [
      {
        "content": "La réaction se résume à une fixation de Nu sur le carbone alpha.",
        "correct": false,
        "explanation": "La fixation sur le carbone alpha correspond à la voie base forte puis électrophile, pas à la substitution acyle par un nucléophile."
      },
      {
        "content": "Le carbone carbonylé repousse le nucléophile dans cette substitution.",
        "correct": false,
        "explanation": "Le carbone carbonylé électrophile attire le nucléophile ; il ne le repousse pas."
      },
      {
        "content": "Le nucléophile vise le carbone carbonylé.",
        "correct": true,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "Le groupe OR' n’est pas remplacé dans le bilan.",
        "correct": false,
        "explanation": "Dans le bilan simplifié de substitution acyle, le nucléophile remplace le groupe $\\ce{OR'}$ ; affirmer que ce groupe reste inchangé est donc faux."
      },
      {
        "content": "Le carbonyle reste un motif du produit R-CO-Nu.",
        "correct": true,
        "explanation": "Le groupe carbonyle reste présent dans le produit simplifié $\\ce{R-CO-Nu}$."
      }
    ],
    "explanation": "Dans la substitution acyle simplifiée, le nucléophile attaque le carbone carbonylé électrophile et le groupe $\\ce{OR'}$ est remplacé."
  },
  {
    "order": 55,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Hydrolyse acide d'un ester → acide carboxylique + alcool.",
        "correct": true,
        "explanation": "L’hydrolyse acide d’un ester conduit à un acide carboxylique et à un alcool."
      },
      {
        "content": "Hydrolyse alcaline = saponification.",
        "correct": true,
        "explanation": "L’hydrolyse basique d’un ester est appelée saponification."
      },
      {
        "content": "Le carbone carbonylé d'un ester est électrophile.",
        "correct": true,
        "explanation": "La liaison $\\ce{C=O}$ est polarisée : l’oxygène est riche en électrons et le carbone carbonylé est électrophile."
      },
      {
        "content": "Une base forte peut rendre le carbone alpha nucléophile.",
        "correct": true,
        "explanation": "Une base forte peut déprotoner le carbone alpha et créer un centre nucléophile."
      },
      {
        "content": "Un nucléophile peut remplacer OR' au niveau du groupe acyle dans le bilan simplifié.",
        "correct": true,
        "explanation": "Une attaque nucléophile sur le carbone carbonylé peut conduire au remplacement du groupe $\\ce{OR'}$ dans le bilan simplifié."
      },
      {
        "content": "Le carbone carbonylé est toujours nucléophile.",
        "correct": false,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "La saponification forme obligatoirement une amide.",
        "correct": false,
        "explanation": "La saponification est une hydrolyse basique de l’ester et ne forme pas une amide."
      },
      {
        "content": "L'ester ne contient qu'un oxygène.",
        "correct": false,
        "explanation": "Le motif ester comporte deux oxygènes : un oxygène carbonylé et un oxygène du groupe $\\ce{OR'}$."
      },
      {
        "content": "La liaison C-O de l'ester est décrite comme totalement bloquée.",
        "correct": false,
        "explanation": "Dans l’ester, la liaison C–O considérée est décrite comme libre en rotation ; le blocage par caractère partiel de double liaison concerne surtout l’amide C–N."
      },
      {
        "content": "Une base forte rend le carbone alpha électrophile.",
        "correct": false,
        "explanation": "Après déprotonation en alpha, le carbone voisin du carbonyle devient riche en électrons et peut attaquer un électrophile."
      }
    ],
    "explanation": "L’ester est hydrolysable en milieu acide ou basique ; son carbone carbonylé est électrophile et son carbone alpha peut devenir nucléophile sous l’action d’une base forte."
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel nom donne-t-on à l'hydrolyse d'un ester en milieu basique?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "saponification",
        "hydrolyse alcaline",
        "hydrolyse basique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "L’hydrolyse d’un ester en milieu basique est appelée saponification."
  }
];
