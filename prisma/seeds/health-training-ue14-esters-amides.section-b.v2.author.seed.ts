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
        "explanation": "C'est le point de départ de la section."
      },
      {
        "content": "L'eau participe à la rupture de la fonction.",
        "correct": true,
        "explanation": "La décrit une rupture en présence d'eau."
      },
      {
        "content": "Une hydrolyse acide est réalisée à pH acide.",
        "correct": true,
        "explanation": "Définition donnée: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "La distingue hydrolyse acide et hydrolyse alcaline des esters."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel autre nom -t-elle à l'hydrolyse alcaline d'un ester?",
    "choices": [
      {
        "content": "Hydrogénation.",
        "correct": false,
        "explanation": "Aucun H2 n'est impliqué: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Saponification.",
        "correct": true,
        "explanation": "C'est le terme indiqué: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Amidification.",
        "correct": false,
        "explanation": "Cela forme une amide: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Hydrolyse basique et saponification désignent ici la même transformation."
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
        "explanation": "Aucun Mg n'intervient: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Dans un ester, le groupe $\\ce{OR'}$ est remplacé par $\\ce{OH}$ sans changer de fonction.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-C(=O)-OH}$ correspond à un acide carboxylique, pas à un ester."
      },
      {
        "content": "Un acide carboxylique $\\mathrm{RCOOH}$.",
        "correct": true,
        "explanation": "Produit acyle: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "L'hydrolyse acide régénère l'acide carboxylique et l'alcool."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "En hydrolyse alcaline d'un ester, la met en avant:",
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
        "explanation": "Nom de la transformation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un acide carboxylique non ionisé comme seul produit acyle en milieu basique.",
        "correct": false,
        "explanation": "La forme mise en avant est le carboxylate."
      }
    ],
    "explanation": "En milieu basique, l'ester donne un carboxylate et un alcool."
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
        "explanation": "L'eau participe à l'hydrolyse: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Aucun proton n'est impliqué.",
        "correct": false,
        "explanation": "Le milieu est acide: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "la formation d'ion oxonium/hydronium dans l'eau acide."
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
        "explanation": "libre rotation: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "une libre rotation autour de C-O pour l'ester."
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
        "explanation": "Les oxygènes sont indispensables: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Le motif ester contient deux oxygènes, ce qui conditionne sa polarisation."
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
    "explanation": "L'effet électroattracteur de l'oxygène rend le carbone carbonylé électrophile."
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
        "explanation": "Le support décrit ce comportement du CH2 adjacent."
      },
      {
        "content": "Être rendu plus nucléophile par une base forte.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Réagir ensuite avec un électrophile.",
        "correct": true,
        "explanation": "Conséquence du caractère nucléophile: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Être toujours le centre électrophile principal sans possibilité de changement.",
        "correct": false,
        "explanation": "La distingue carbonyle électrophile et carbone adjacent nucléophile."
      }
    ],
    "explanation": "La fonction ester possède ainsi deux centres de réactivité complémentaires selon les conditions."
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
        "explanation": "Ce carbone devient nucléophile: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Le carbone carbonylé est le centre électrophile de l'ester."
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
        "explanation": "C'est la réaction décrite: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le groupement OR' est remplacé par le nucléophile dans le bilan simplifié.",
        "correct": true,
        "explanation": "Le support écrit ester + Nu → R-CO-Nu."
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
    "explanation": "une substitution au niveau du carbone acyle par attaque nucléophile."
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
    "explanation": "La base forte permet l'activation nucléophile du carbone voisin du carbonyle."
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
        "explanation": "Deuxième voie présentée: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "La section met en miroir carbonyle électrophile et carbone alpha potentiellement nucléophile."
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
        "explanation": "Ce sont deux hydrolyses: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'hydrolyse acide ne conduit pas à un acide carboxylique.",
        "correct": false,
        "explanation": "La relation correcte est: « L'hydrolyse acide conduit à un acide carboxylique ». La négation proposée est donc fausse."
      },
      {
        "content": "La saponification conduit à un carboxylate.",
        "correct": true,
        "explanation": "Milieu basique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les deux conduisent nécessairement à une amide.",
        "correct": false,
        "explanation": "Aucun atome d’azote n’est introduit par cette transformation, donc aucune fonction azotée n’est formée."
      }
    ],
    "explanation": "Le pH détermine notamment l'état d'ionisation du produit carboxylique."
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
        "explanation": "Produit de la saponification: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une amide.",
        "correct": false,
        "explanation": "Cette proposition est écartée: d'azote ajouté ne correspond pas au bilan ou à la propriété attendue."
      }
    ],
    "explanation": "La saponification forme le carboxylate correspondant."
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
        "explanation": "RCOOH: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La fonction ester est rompue.",
        "correct": true,
        "explanation": "Définition de l'hydrolyse: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le groupe OR' reste obligatoirement attaché au carbonyle.",
        "correct": false,
        "explanation": "Il est justement séparé: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Dans un ester, le groupe $\\ce{OR'}$ est remplacé par $\\ce{OH}$ sans changer de fonction.",
        "correct": false,
        "explanation": "Le motif $\\ce{R-C(=O)-OH}$ correspond à un acide carboxylique, pas à un ester."
      }
    ],
    "explanation": "L'eau scinde l'ester en ses deux partenaires fonctionnels dans le bilan simplifié."
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
        "explanation": "La section porte précisément sur cette réactivité."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Une attaque nucléophile au niveau du carbonyle.",
        "correct": true,
        "explanation": "Carbone électrophile: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une réaction avec un électrophile au niveau du carbone alpha préalablement rendu nucléophile.",
        "correct": true,
        "explanation": "Après base forte: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Deux comportements dépendant des conditions expérimentales.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Le même ester peut donc présenter des comportements complémentaires selon le réactif et les conditions."
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
    "question": "Une base forte est ajoutée à un ester possédant un hydrogène en alpha. Quel raisonnement correspond au support?",
    "choices": [
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "La densité électronique peut être déplacée vers le carbone alpha.",
        "correct": true,
        "explanation": "Le support décrit un caractère carbanionique/nucléophile."
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
    "explanation": "La déprotonation/activation du carbone alpha ouvre une voie de réaction avec des électrophiles."
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
        "explanation": "Autre possibilité décrite: cette relation est conforme à la propriété ou à la transformation décrite."
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
        "content": "La décrit une possibilité de déplacement électronique menant à une structure avec C=C et OH.",
        "correct": true,
        "explanation": "C'est l'une des représentations proposées."
      },
      {
        "content": "Cette structure n'est pas exactement un énol classique en raison de la persistance du groupe $\\ce{OR'}$.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Ces représentations permettent de rendre compte de la réactivité du carbone alpha de l'ester."
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
        "explanation": "Il est électrophile: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone alpha parce qu'il est toujours électrophile.",
        "correct": false,
        "explanation": "Le carbone alpha est plutôt rendu nucléophile dans l'autre voie."
      },
      {
        "content": "Le nucléophile peut remplacer le groupement OR' dans le bilan simplifié.",
        "correct": true,
        "explanation": "R-CO-Nu est formé: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "L'attaque nucléophile vise le carbone acyle de l'ester."
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
        "explanation": "Propriété centrale: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Il contribue à rendre le carbone carbonylé électrophile.",
        "correct": true,
        "explanation": "Conséquence directe: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Il influence aussi la distribution électronique au niveau du carbone alpha.",
        "correct": true,
        "explanation": "Le support relie cet effet au caractère nucléophile du CH2 voisin."
      }
    ],
    "explanation": "L'oxygène carbonylé est au cœur des deux polarités mises en avant."
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
        "explanation": "Activation par base forte: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Dans B, l'électrophile se fixe au carbone alpha.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Les deux expériences illustrent des polarités différentes au sein de la même fonction ester.",
        "correct": true,
        "explanation": "C'est la synthèse de la section."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Dans A, le carbone carbonylé est le centre électrophile attaqué.",
        "correct": true,
        "explanation": "Voie acyle: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le MASTER doit relier les deux centres de réactivité plutôt que les apprendre isolément."
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
        "explanation": "Centre électrophile: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Utiliser une base forte puis un électrophile pour fonctionnaliser le carbone alpha.",
        "correct": true,
        "explanation": "Centre nucléophile après activation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Choisir les conditions ne permet pas donc de changer le site de réactivité mobilisé.",
        "correct": false,
        "explanation": "La relation correcte est: « Choisir les conditions permet donc de changer le site de réactivité mobilisé ». La négation proposée est donc fausse."
      },
      {
        "content": "Les deux voies exigent obligatoirement une rupture complète du squelette carboné.",
        "correct": false,
        "explanation": "Ce n'est pas indiqué: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le choix des conditions oriente la fonction ester vers deux types de réactivité."
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
        "explanation": "Substitution acyle: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Le chapitre présente quatre conséquences directes de la polarisation et de l'hydrolysabilité de l'ester."
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
        "explanation": "Il peut devenir nucléophile: cette relation est conforme à la propriété ou à la transformation décrite."
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
        "explanation": "Couple principal: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le carbone carbonylé est le centre électrophile de l'ester."
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
    "explanation": "L'état de protonation du fragment carboxylique dépend du milieu."
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
        "explanation": "Synthèse du modèle: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone du groupe carbonyle d’un ester possède un caractère électrophile.",
        "correct": false,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en densité électronique."
      },
      {
        "content": "Le carbone carbonylé est électrophile.",
        "correct": true,
        "explanation": "Premier site: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La fonction ester est présentée comme ambivalente du point de vue de ses centres réactifs."
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
    "explanation": "Le MASTER distingue les deux scénarios de réactivité de l'ester."
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
        "explanation": "Carbonyle versus carbone alpha: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La première met en jeu le caractère électrophile du carbone carbonylé.",
        "correct": true,
        "explanation": "Attaque nucléophile: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La seconde met en jeu le caractère nucléophile du carbone alpha.",
        "correct": true,
        "explanation": "Après base forte: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Ces comportements sont contradictoires et ne peuvent pas coexister dans le même cadre.",
        "correct": false,
        "explanation": "La les présente comme dépendants des conditions."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      }
    ],
    "explanation": "Le caractère réactif de l'ester dépend du site et des conditions."
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
        "explanation": "Centre électrophile: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Cette réaction illustre le caractère électrophile du carbone acyle."
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
        "explanation": "Définition : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone carbonylé d'un ester est électrophile.",
        "correct": true,
        "explanation": "Polarisation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une base forte peut rendre le carbone alpha nucléophile.",
        "correct": true,
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
      },
      {
        "content": "Un nucléophile peut remplacer OR' au niveau du groupe acyle dans le bilan simplifié.",
        "correct": true,
        "explanation": "Substitution acyle : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone carbonylé est toujours nucléophile.",
        "correct": false,
        "explanation": "Il est électrophile : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La saponification forme obligatoirement une amide.",
        "correct": false,
        "explanation": "Cette proposition est écartée : d'azote ne correspond pas au bilan ou à la propriété attendue."
      },
      {
        "content": "L'ester ne contient qu'un oxygène.",
        "correct": false,
        "explanation": "Deux oxygènes : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La liaison C-O de l'ester est décrite comme totalement bloquée.",
        "correct": false,
        "explanation": "Libre rotation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une base forte rend le carbone alpha électrophile.",
        "correct": false,
        "explanation": "Elle le rend nucléophile : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette sélection réunit hydrolyse, polarisation et centres réactifs."
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
    "explanation": "La emploie « hydrolyse alcaline = saponification »."
  }
];
