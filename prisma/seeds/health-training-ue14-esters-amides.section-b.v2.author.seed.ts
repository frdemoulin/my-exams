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
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
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
        "explanation": "L'eau est ici réactif, pas produit d'élimination."
      },
      {
        "content": "Un ester est totalement insensible à l’eau quelles que soient les conditions.",
        "correct": false,
        "explanation": "La fonction ester est hydrolysable en milieu acide ou basique dans les conditions appropriées."
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
        "explanation": "Produit issu du groupe OR'."
      },
      {
        "content": "Un ammonium quaternaire.",
        "correct": false,
        "explanation": "Aucun atome d’azote n’est introduit par cette transformation, donc aucune fonction azotée n’est formée."
      },
      {
        "content": "Un organomagnésien.",
        "correct": false,
        "explanation": "Cette proposition est écartée: de mg ne correspond pas au bilan ou à la propriété attendue."
      },
      {
        "content": "Dans un ester, le groupe $\\ce{OR'}$ est remplacé par $\\ce{OH}$ sans changer de fonction.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-C(=O)-OH}$ correspond à un acide carboxylique, pas à un ester."
      },
      {
        "content": "Un acide carboxylique $\\mathrm{RCOOH}$.",
        "correct": true,
        "explanation": "En hydrolyse acide, le fragment acyle de l’ester est retrouvé sous forme d’acide carboxylique $\\ce{RCOOH}$."
      }
    ],
    "explanation": "Produit issu du groupe OR'."
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
        "explanation": "Le milieu basique conduit au carboxylate."
      },
      {
        "content": "Un alcool.",
        "correct": true,
        "explanation": "Le groupe OR' devient l'alcool correspondant."
      },
      {
        "content": "Une saponification.",
        "correct": true,
        "explanation": "La saponification est l’hydrolyse d’un ester en milieu basique."
      },
      {
        "content": "Un acide carboxylique non ionisé comme seul produit acyle en milieu basique.",
        "correct": false,
        "explanation": "La forme mise en avant est le carboxylate."
      }
    ],
    "explanation": "La fonction ester est hydrolysable en milieu acide ou basique dans les conditions appropriées."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans un milieu acide aqueux, quelle espèce acide est rappelée?",
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
        "content": "Dans un ester, le groupe $\\ce{OR'}$ est remplacé par $\\ce{OH}$ sans changer de fonction.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-C(=O)-OH}$ correspond à un acide carboxylique, pas à un ester."
      },
      {
        "content": "$\\ce{H3O+}$.",
        "correct": true,
        "explanation": "$\\ce{H2O + H+ -> H3O+}$."
      },
      {
        "content": "$\\ce{OH-}$ comme seule espèce caractéristique du milieu acide.",
        "correct": false,
        "explanation": "OH− caractérise plutôt le milieu basique."
      }
    ],
    "explanation": "L’eau est un réactif de l’hydrolyse et participe à la rupture de la fonction ester. $\\ce{H2O + H+ -> H3O+}$."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la mobilité autour de la liaison C-O d'un ester:",
    "choices": [
      {
        "content": "Une libre rotation n’est pas indiquée autour de la liaison C-O.",
        "correct": false,
        "explanation": "La relation correcte est: « Une libre rotation est indiquée autour de la liaison C-O ». La négation proposée est donc fausse."
      },
      {
        "content": "Cette propriété contraste avec la liaison C-N d'une amide étudiée plus loin.",
        "correct": true,
        "explanation": "L'amide présente un caractère partiel de double liaison."
      },
      {
        "content": "La liaison C-O est décrite comme totalement bloquée par une double liaison partielle dans l'ester.",
        "correct": false,
        "explanation": "Dans l’ester, la liaison C–O considérée est décrite comme libre en rotation ; le blocage par caractère partiel de double liaison concerne surtout l’amide C–N."
      },
      {
        "content": "Le comportement de rotation fait partie des propriétés structurales du groupe ester.",
        "correct": true,
        "explanation": "Il figure dans la rubrique propriétés."
      },
      {
        "content": "La liaison carbone-azote d’une amide possède un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La délocalisation du doublet de l’azote vers le carbonyle limite la libre rotation autour de la liaison $\\ce{C-N}$."
      }
    ],
    "explanation": "La relation correcte est: « Une libre rotation est indiquée autour de la liaison C-O ». La négation proposée est donc fausse."
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
        "content": "Dans un ester, le groupe $\\ce{OR'}$ est remplacé par $\\ce{OH}$ sans changer de fonction.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-C(=O)-OH}$ correspond à un acide carboxylique, pas à un ester."
      },
      {
        "content": "Deux oxygènes.",
        "correct": true,
        "explanation": "Un oxygène carbonylé et un oxygène du groupe OR'."
      },
      {
        "content": "Un azote et un oxygène.",
        "correct": false,
        "explanation": "Cela évoque plutôt une amide."
      },
      {
        "content": "Deux hétéroatomes au total dans le motif simple.",
        "correct": true,
        "explanation": "Les deux sont des oxygènes."
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
        "explanation": "ester + nucléophile → dérivé acylé."
      },
      {
        "content": "Un caractère uniquement nucléophile.",
        "correct": false,
        "explanation": "Le carbonyle est le centre électrophile."
      },
      {
        "content": "Aucune polarisation.",
        "correct": false,
        "explanation": "L'effet électroattracteur de l'oxygène est central."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Un caractère électrophile.",
        "correct": true,
        "explanation": "L'oxygène attire la densité électronique."
      }
    ],
    "explanation": "ester + nucléophile → dérivé acylé."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le carbone situé à côté du carbonyle d'un ester, lorsqu'il porte des hydrogènes dans l'exemple, peut:",
    "choices": [
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Acquérir un caractère nucléophile selon les conditions.",
        "correct": true,
        "explanation": "Après déprotonation en position alpha, le carbone voisin du carbonyle peut acquérir un caractère nucléophile."
      },
      {
        "content": "Être rendu plus nucléophile par une base forte.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Réagir ensuite avec un électrophile.",
        "correct": true,
        "explanation": "Après déprotonation en alpha, le carbone devenu nucléophile peut former une nouvelle liaison avec un électrophile."
      },
      {
        "content": "Être toujours le centre électrophile principal sans possibilité de changement.",
        "correct": false,
        "explanation": "La distingue carbonyle électrophile et carbone adjacent nucléophile."
      }
    ],
    "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
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
        "explanation": "Ce n'est pas un centre de l'ester initial."
      },
      {
        "content": "Le carbone du carbonyle.",
        "correct": true,
        "explanation": "Il est appauvri en électrons par l'oxygène."
      },
      {
        "content": "Le proton de l'eau.",
        "correct": false,
        "explanation": "La question porte sur l'ester."
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
        "explanation": "Ici le centre visé est le carbonyle."
      },
      {
        "content": "Le produit conserve un groupement acyle lié au nucléophile.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      }
    ],
    "explanation": "Lors de la substitution acyle, le nucléophile attaque le carbone carbonylé et le groupe $\\ce{OR'}$ est remplacé dans le bilan simplifié."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un ester possédant un CH2 en alpha du carbonyle est traité par une base forte puis par un électrophile.:",
    "choices": [
      {
        "content": "Le carbone alpha devient nécessairement électrophile.",
        "correct": false,
        "explanation": "Il devient nucléophile dans les conditions décrites."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "La base forte rend le carbone alpha nucléophile.",
        "correct": true,
        "explanation": "Elle crée un excès de densité électronique sur ce carbone."
      },
      {
        "content": "L'électrophile se fixe ensuite sur ce carbone alpha.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Le carbonyle ne peut pas rester présent.",
        "correct": false,
        "explanation": "La relation correcte est: « Le carbonyle peut rester présent ». La négation proposée est donc fausse."
      }
    ],
    "explanation": "Il devient nucléophile dans les conditions décrites."
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
        "explanation": "Sous l'action d'une base forte."
      },
      {
        "content": "Un nucléophile réagit préférentiellement avec le centre électrophile.",
        "correct": true,
        "explanation": "C'est la logique générale du bilan présenté."
      },
      {
        "content": "Un électrophile peut réagir avec le carbone alpha rendu nucléophile.",
        "correct": true,
        "explanation": "Une base forte peut arracher un hydrogène en position alpha du carbonyle et créer un centre carboné nucléophile."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Carbone carbonylé: électrophile.",
        "correct": true,
        "explanation": "Il peut être attaqué par un nucléophile."
      }
    ],
    "explanation": "Sous l'action d'une base forte."
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
        "explanation": "La relation correcte est: « L'hydrolyse acide conduit à un acide carboxylique ». La négation proposée est donc fausse."
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
        "explanation": "Ce n'est pas une activation."
      },
      {
        "content": "Un organomagnésien.",
        "correct": false,
        "explanation": "Cette proposition est écartée: de mg ne correspond pas au bilan ou à la propriété attendue."
      },
      {
        "content": "Hydrogénation.",
        "correct": false,
        "explanation": "L’hydrogénation ne désigne pas l’hydrolyse basique d’un ester."
      },
      {
        "content": "Un carboxylate.",
        "correct": true,
        "explanation": "Le milieu basique conduit au carboxylate."
      },
      {
        "content": "Une amide.",
        "correct": false,
        "explanation": "Cette proposition est écartée: d'azote ajouté ne correspond pas au bilan ou à la propriété attendue."
      }
    ],
    "explanation": "Ce n'est pas une activation."
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
        "explanation": "La relation correcte est: « Un alcool est libéré ». La négation proposée est donc fausse."
      },
      {
        "content": "Un acide carboxylique est formé.",
        "correct": true,
        "explanation": "En hydrolyse acide d’un ester, le fragment acyle est retrouvé sous forme d’acide carboxylique $\\ce{RCOOH}$."
      },
      {
        "content": "La fonction ester est rompue.",
        "correct": true,
        "explanation": "Par définition, la fonction ester est rompue."
      },
      {
        "content": "Le groupe OR' reste obligatoirement attaché au carbonyle.",
        "correct": false,
        "explanation": "L’hydrolyse ou la substitution acyle rompt précisément la liaison permettant de séparer le groupe $\\ce{OR'}$ du fragment acyle."
      },
      {
        "content": "Dans un ester, le groupe $\\ce{OR'}$ est remplacé par $\\ce{OH}$ sans changer de fonction.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-C(=O)-OH}$ correspond à un acide carboxylique, pas à un ester."
      }
    ],
    "explanation": "La relation correcte est: « Un alcool est libéré ». La négation proposée est donc fausse."
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
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
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
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
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
    "explanation": "La distingue le carbone carbonylé électrophile et le carbone alpha potentiellement nucléophile."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une base forte est ajoutée à un ester possédant un hydrogène en alpha. Quel raisonnement décrit correctement sa réactivité ?",
    "choices": [
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "La densité électronique peut être déplacée vers le carbone alpha.",
        "correct": true,
        "explanation": "La déprotonation en alpha forme un centre carboné riche en électrons qui peut être représenté comme nucléophile."
      },
      {
        "content": "Le carbone alpha peut ensuite attaquer un électrophile.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Le but de cette étape est de rendre le carbone alpha plus nucléophile.",
        "correct": true,
        "explanation": "C'est l'effet de la base forte."
      },
      {
        "content": "La base forte transforme nécessairement l'ester en amide.",
        "correct": false,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée: il s’agit de la classe d’amine attendue."
      }
    ],
    "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
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
        "explanation": "C'est leur intérêt dans le cadre étudié."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Une forme limite peut représenter un déplacement électronique conduisant à une structure avec $\\ce{C=C}$ et $\\ce{OH}$.",
        "correct": true,
        "explanation": "C'est l'une des représentations proposées."
      },
      {
        "content": "Cette structure n'est pas exactement un énol classique en raison de la persistance du groupe $\\ce{OR'}$.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
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
        "explanation": "C'est le centre électrophile attaqué."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
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
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
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
    "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
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
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Les deux expériences illustrent des polarités différentes au sein de la même fonction ester.",
        "correct": true,
        "explanation": "Les deux expériences mettent en évidence des réactivités différentes du carbone carbonylé et du carbone alpha d’un même ester."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
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
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
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
        "content": "Choisir les conditions ne permet pas donc de changer le site de réactivité mobilisé.",
        "correct": false,
        "explanation": "La relation correcte est: « Choisir les conditions permet donc de changer le site de réactivité mobilisé ». La négation proposée est donc fausse."
      },
      {
        "content": "Les deux voies exigent obligatoirement une rupture complète du squelette carboné.",
        "correct": false,
        "explanation": "Ces réactions modifient la fonction ou le carbone alpha sans imposer une rupture complète du squelette carboné."
      }
    ],
    "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
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
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Hydrolyse acide → RCOOH + R'OH.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
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
        "explanation": "Il est décrit comme électrophile."
      },
      {
        "content": "Carbone alpha / toujours électrophile.",
        "correct": false,
        "explanation": "Après déprotonation en alpha, le carbone voisin du carbonyle devient riche en électrons et peut attaquer un électrophile."
      },
      {
        "content": "Oxygène carbonylé / groupe partant principal du bilan R-CO-Nu.",
        "correct": false,
        "explanation": "Le groupe remplacé est OR'."
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
    "explanation": "Il est décrit comme électrophile."
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
        "explanation": "En milieu acide, le fragment carboxylique est majoritairement représenté sous la forme $\ce{RCOOH}$."
      },
      {
        "content": "En milieu basique, la forme RCOO− est mise en avant.",
        "correct": true,
        "explanation": "La perte du proton du groupe carboxyle conduit bien à l’ion carboxylate."
      }
    ],
    "explanation": "Aucun atome d’azote n’est introduit par cette transformation, donc aucune fonction azotée n’est formée."
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
        "content": "Le carbone du groupe carbonyle d’un ester possède un caractère électrophile.",
        "correct": false,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en densité électronique."
      },
      {
        "content": "Le carbone carbonylé est électrophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
      }
    ],
    "explanation": "Après déprotonation en position alpha, ce carbone peut devenir un second site nucléophile de l’ester."
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une base forte agit d'abord sur un ester, puis un électrophile est ajouté. Quelles erreurs faut-il éviter?",
    "choices": [
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Confondre le carbone alpha activé avec le carbone carbonylé électrophile.",
        "correct": true,
        "explanation": "Ce sont deux centres distincts."
      },
      {
        "content": "Oublier que la base forte intervient avant l'électrophile.",
        "correct": true,
        "explanation": "L'ordre est essentiel dans le schéma."
      },
      {
        "content": "Conclure que le nucléophile externe remplace OR' dans cette séquence précise.",
        "correct": true,
        "explanation": "Cette autre réaction correspond à l'attaque d'un nucléophile sur le carbonyle."
      },
      {
        "content": "Considérer que le carbone alpha peut être le site de fixation de l'électrophile.",
        "correct": false,
        "explanation": "C'est précisément le résultat attendu."
      }
    ],
    "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
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
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
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
        "explanation": "C'est une autre voie de réactivité."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Le nucléophile vise le carbone carbonylé.",
        "correct": true,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "Le groupe OR' n’est pas remplacé dans le bilan.",
        "correct": false,
        "explanation": "La relation correcte est: « Le groupe OR' est remplacé dans le bilan ». La négation proposée est donc fausse."
      },
      {
        "content": "Le carbonyle reste un motif du produit R-CO-Nu.",
        "correct": true,
        "explanation": "Le groupe acyle est conservé."
      }
    ],
    "explanation": "C'est une autre voie de réactivité."
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
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Hydrolyse alcaline = saponification.",
        "correct": true,
        "explanation": "Par définition, hydrolyse alcaline = saponification."
      },
      {
        "content": "Le carbone carbonylé d'un ester est électrophile.",
        "correct": true,
        "explanation": "La liaison $\\ce{C=O}$ est polarisée : l’oxygène est riche en électrons et le carbone carbonylé est électrophile."
      },
      {
        "content": "Une base forte peut rendre le carbone alpha nucléophile.",
        "correct": true,
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
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
        "explanation": "Cette proposition est écartée : d'azote ne correspond pas au bilan ou à la propriété attendue."
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
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
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
