import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.5 – Section B – Esters : hydrolyse, polarisation et réactivité
 */

export const UE14_CH9_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'hydrolyse d'un ester, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fonction ester est hydrolysable.",
        "correct": true,
        "explanation": "C'est le point de départ de la section."
      },
      {
        "content": "L'eau participe à la rupture de la fonction.",
        "correct": true,
        "explanation": "La fiche décrit une rupture en présence d'eau."
      },
      {
        "content": "Une hydrolyse acide est réalisée à pH acide.",
        "correct": true,
        "explanation": "Définition donnée."
      },
      {
        "content": "Une hydrolyse alcaline est également appelée saponification.",
        "correct": true,
        "explanation": "Équivalence explicite."
      }
    ],
    "explanation": "La fiche distingue hydrolyse acide et hydrolyse alcaline des esters."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel autre nom la fiche donne-t-elle à l'hydrolyse alcaline d'un ester ?",
    "choices": [
      {
        "content": "Saponification.",
        "correct": true,
        "explanation": "C'est le terme indiqué."
      },
      {
        "content": "Hydrogénation.",
        "correct": false,
        "explanation": "Aucun H2 n'est impliqué."
      },
      {
        "content": "Amidification.",
        "correct": false,
        "explanation": "Cela forme une amide."
      },
      {
        "content": "Déshydratation.",
        "correct": false,
        "explanation": "L'eau est ici réactif, pas produit d'élimination."
      }
    ],
    "explanation": "Hydrolyse basique et saponification désignent ici la même transformation."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "En hydrolyse acide d'un ester $\\mathrm{RCOOR'}$, quels produits sont attendus selon la fiche ?",
    "choices": [
      {
        "content": "Un acide carboxylique $\\mathrm{RCOOH}$.",
        "correct": true,
        "explanation": "Produit acyle."
      },
      {
        "content": "Un alcool $\\mathrm{R'OH}$.",
        "correct": true,
        "explanation": "Produit issu du groupe OR'."
      },
      {
        "content": "Un ammonium quaternaire.",
        "correct": false,
        "explanation": "Aucun azote n'intervient."
      },
      {
        "content": "Un organomagnésien.",
        "correct": false,
        "explanation": "Aucun Mg n'intervient."
      }
    ],
    "explanation": "L'hydrolyse acide régénère l'acide carboxylique et l'alcool."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "En hydrolyse alcaline d'un ester, la fiche met en avant :",
    "choices": [
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
        "explanation": "Nom de la transformation."
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
    "question": "Dans un milieu acide aqueux, quelle espèce acide est rappelée dans la fiche ?",
    "choices": [
      {
        "content": "$\\ce{H3O+}$.",
        "correct": true,
        "explanation": "Le support rappelle $\\ce{H2O + H+ -> H3O+}$."
      },
      {
        "content": "$\\ce{OH-}$ comme seule espèce caractéristique du milieu acide.",
        "correct": false,
        "explanation": "OH− caractérise plutôt le milieu basique."
      },
      {
        "content": "$\\ce{H2O}$ intervient.",
        "correct": true,
        "explanation": "L'eau participe à l'hydrolyse."
      },
      {
        "content": "Aucun proton n'est impliqué.",
        "correct": false,
        "explanation": "Le milieu est acide."
      }
    ],
    "explanation": "La fiche rappelle la formation d'ion oxonium/hydronium dans l'eau acide."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la mobilité autour de la liaison C-O d'un ester dans la fiche :",
    "choices": [
      {
        "content": "Une libre rotation est indiquée autour de la liaison C-O.",
        "correct": true,
        "explanation": "Propriété explicitement donnée."
      },
      {
        "content": "Cette propriété contraste avec la liaison C-N d'une amide étudiée plus loin.",
        "correct": true,
        "explanation": "L'amide présente un caractère partiel de double liaison."
      },
      {
        "content": "La liaison C-O est décrite comme totalement bloquée par une double liaison partielle dans l'ester.",
        "correct": false,
        "explanation": "La fiche indique libre rotation."
      },
      {
        "content": "Le comportement de rotation fait partie des propriétés structurales du groupe ester.",
        "correct": true,
        "explanation": "Il figure dans la rubrique propriétés."
      }
    ],
    "explanation": "Le support retient une libre rotation autour de C-O pour l'ester."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La fonction ester comporte combien d'hétéroatomes et lesquels ?",
    "choices": [
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
      },
      {
        "content": "Aucun hétéroatome.",
        "correct": false,
        "explanation": "Les oxygènes sont indispensables."
      }
    ],
    "explanation": "Le motif ester contient deux oxygènes, ce qui conditionne sa polarisation."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Selon le modèle électronique de la fiche, le carbone du carbonyle de l'ester présente :",
    "choices": [
      {
        "content": "Un caractère électrophile.",
        "correct": true,
        "explanation": "L'oxygène attire la densité électronique."
      },
      {
        "content": "Un site pouvant être attaqué par un nucléophile.",
        "correct": true,
        "explanation": "Le support donne ester + nucléophile → dérivé acylé."
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
      }
    ],
    "explanation": "L'effet électroattracteur de l'oxygène rend le carbone carbonylé électrophile."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le carbone situé à côté du carbonyle d'un ester, lorsqu'il porte des hydrogènes dans l'exemple de la fiche, peut :",
    "choices": [
      {
        "content": "Acquérir un caractère nucléophile selon les conditions.",
        "correct": true,
        "explanation": "Le support décrit ce comportement du CH2 adjacent."
      },
      {
        "content": "Être rendu plus nucléophile par une base forte.",
        "correct": true,
        "explanation": "C'est le cas explicite de la fiche."
      },
      {
        "content": "Réagir ensuite avec un électrophile.",
        "correct": true,
        "explanation": "Conséquence du caractère nucléophile."
      },
      {
        "content": "Être toujours le centre électrophile principal sans possibilité de changement.",
        "correct": false,
        "explanation": "La fiche distingue carbonyle électrophile et carbone adjacent nucléophile."
      }
    ],
    "explanation": "La fonction ester possède ainsi deux centres de réactivité complémentaires selon les conditions."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel centre de l'ester est directement décrit comme électrophile dans la fiche ?",
    "choices": [
      {
        "content": "Le carbone du carbonyle.",
        "correct": true,
        "explanation": "Il est appauvri en électrons par l'oxygène."
      },
      {
        "content": "Le carbone alpha rendu nucléophile par une base forte.",
        "correct": false,
        "explanation": "Ce carbone devient nucléophile."
      },
      {
        "content": "L'alcool produit après hydrolyse.",
        "correct": false,
        "explanation": "Ce n'est pas un centre de l'ester initial."
      },
      {
        "content": "Le proton de l'eau.",
        "correct": false,
        "explanation": "La question porte sur l'ester."
      }
    ],
    "explanation": "Le carbone carbonylé est le centre électrophile de l'ester."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un ester est traité par un nucléophile dans le modèle du cours. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le nucléophile attaque le carbone électrophile du carbonyle.",
        "correct": true,
        "explanation": "C'est la réaction décrite."
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
        "explanation": "Bilan R-CO-Nu."
      }
    ],
    "explanation": "La fiche présente une substitution au niveau du carbone acyle par attaque nucléophile."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un ester possédant un CH2 en alpha du carbonyle est traité par une base forte puis par un électrophile. Selon la fiche :",
    "choices": [
      {
        "content": "La base forte rend le carbone alpha nucléophile.",
        "correct": true,
        "explanation": "Elle crée un excès de densité électronique sur ce carbone."
      },
      {
        "content": "L'électrophile se fixe ensuite sur ce carbone alpha.",
        "correct": true,
        "explanation": "C'est le bilan indiqué."
      },
      {
        "content": "Le carbonyle peut rester présent.",
        "correct": true,
        "explanation": "La fiche décrit notamment une forme carbanion conservant C=O."
      },
      {
        "content": "Le carbone alpha devient nécessairement électrophile.",
        "correct": false,
        "explanation": "Il devient nucléophile dans les conditions décrites."
      }
    ],
    "explanation": "La base forte permet l'activation nucléophile du carbone voisin du carbonyle."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions distinguent correctement les deux sites de réactivité d'un ester dans le modèle du support ?",
    "choices": [
      {
        "content": "Carbone carbonylé : électrophile.",
        "correct": true,
        "explanation": "Il peut être attaqué par un nucléophile."
      },
      {
        "content": "Carbone alpha : peut devenir nucléophile.",
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
        "explanation": "Deuxième voie présentée."
      }
    ],
    "explanation": "La section met en miroir carbonyle électrophile et carbone alpha potentiellement nucléophile."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'hydrolyse acide et de la saponification :",
    "choices": [
      {
        "content": "Les deux rompent la fonction ester.",
        "correct": true,
        "explanation": "Ce sont deux hydrolyses."
      },
      {
        "content": "L'hydrolyse acide conduit à un acide carboxylique.",
        "correct": true,
        "explanation": "Forme protonée."
      },
      {
        "content": "La saponification conduit à un carboxylate.",
        "correct": true,
        "explanation": "Milieu basique."
      },
      {
        "content": "Les deux conduisent nécessairement à une amide.",
        "correct": false,
        "explanation": "Aucun azote n'est introduit."
      }
    ],
    "explanation": "Le pH détermine notamment l'état d'ionisation du produit carboxylique."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Un ester est hydrolysé à pH basique. Quelle espèce acyle attend-on dans le bilan du support ?",
    "choices": [
      {
        "content": "Un carboxylate.",
        "correct": true,
        "explanation": "Produit de la saponification."
      },
      {
        "content": "Une amide.",
        "correct": false,
        "explanation": "Pas d'azote ajouté."
      },
      {
        "content": "Un chlorure d'acyle.",
        "correct": false,
        "explanation": "Ce n'est pas une activation."
      },
      {
        "content": "Un organomagnésien.",
        "correct": false,
        "explanation": "Pas de Mg."
      }
    ],
    "explanation": "La saponification forme le carboxylate correspondant."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un ester est hydrolysé à pH acide. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un alcool est libéré.",
        "correct": true,
        "explanation": "R'OH."
      },
      {
        "content": "Un acide carboxylique est formé.",
        "correct": true,
        "explanation": "RCOOH."
      },
      {
        "content": "La fonction ester est rompue.",
        "correct": true,
        "explanation": "Définition de l'hydrolyse."
      },
      {
        "content": "Le groupe OR' reste obligatoirement attaché au carbonyle.",
        "correct": false,
        "explanation": "Il est justement séparé."
      }
    ],
    "explanation": "L'eau scinde l'ester en ses deux partenaires fonctionnels dans le bilan simplifié."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le modèle de polarisation de l'ester présenté dans la fiche permet de prévoir :",
    "choices": [
      {
        "content": "Une attaque nucléophile au niveau du carbonyle.",
        "correct": true,
        "explanation": "Carbone électrophile."
      },
      {
        "content": "Une réaction avec un électrophile au niveau du carbone alpha préalablement rendu nucléophile.",
        "correct": true,
        "explanation": "Après base forte."
      },
      {
        "content": "Deux comportements dépendant des conditions expérimentales.",
        "correct": true,
        "explanation": "C'est explicitement indiqué."
      },
      {
        "content": "Une absence totale de réactivité électronique.",
        "correct": false,
        "explanation": "La section porte précisément sur cette réactivité."
      }
    ],
    "explanation": "Le même ester peut donc présenter des comportements complémentaires selon le réactif et les conditions."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans le motif fonctionnel d'un ester simple, combien de centres carbonés sont explicitement mis en avant dans la fiche pour leur réactivité : le carbone carbonylé et le carbone alpha ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "La fiche distingue le carbone carbonylé électrophile et le carbone alpha potentiellement nucléophile."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une base forte est ajoutée à un ester possédant un hydrogène en alpha. Quel raisonnement correspond au support ?",
    "choices": [
      {
        "content": "La densité électronique peut être déplacée vers le carbone alpha.",
        "correct": true,
        "explanation": "Le support décrit un caractère carbanionique/nucléophile."
      },
      {
        "content": "Le carbone alpha peut ensuite attaquer un électrophile.",
        "correct": true,
        "explanation": "Bilan présenté."
      },
      {
        "content": "Le but de cette étape est de rendre le carbone alpha plus nucléophile.",
        "correct": true,
        "explanation": "C'est l'effet de la base forte."
      },
      {
        "content": "La base forte transforme nécessairement l'ester en amide.",
        "correct": false,
        "explanation": "Aucune amine n'intervient."
      }
    ],
    "explanation": "La déprotonation/activation du carbone alpha ouvre une voie de réaction avec des électrophiles."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du motif ressemblant à un énol évoqué dans la fiche pour l'ester :",
    "choices": [
      {
        "content": "La fiche décrit une possibilité de déplacement électronique menant à une structure avec C=C et OH.",
        "correct": true,
        "explanation": "C'est l'une des représentations proposées."
      },
      {
        "content": "Elle précise que cette structure n'est pas exactement un énol classique en raison de la persistance du groupe OR'.",
        "correct": true,
        "explanation": "Nuance explicite du support."
      },
      {
        "content": "Une autre représentation conserve C=O et place un caractère négatif sur le carbone voisin.",
        "correct": true,
        "explanation": "Autre possibilité décrite."
      },
      {
        "content": "Ces représentations servent à expliquer le caractère nucléophile possible du carbone alpha.",
        "correct": true,
        "explanation": "C'est leur intérêt dans le cours."
      }
    ],
    "explanation": "Le support emploie ces représentations pour rendre compte de la réactivité du carbone alpha de l'ester."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un nucléophile est mis en présence d'un ester sans activation du carbone alpha par base forte. Quel centre est le plus directement désigné comme cible dans la fiche ?",
    "choices": [
      {
        "content": "Le carbone du carbonyle.",
        "correct": true,
        "explanation": "Il est électrophile."
      },
      {
        "content": "Le carbone alpha parce qu'il est toujours électrophile.",
        "correct": false,
        "explanation": "Le carbone alpha est plutôt rendu nucléophile dans l'autre voie."
      },
      {
        "content": "Le nucléophile peut remplacer le groupement OR' dans le bilan simplifié.",
        "correct": true,
        "explanation": "R-CO-Nu est formé."
      },
      {
        "content": "Le carbonyle ne joue aucun rôle.",
        "correct": false,
        "explanation": "C'est le centre électrophile attaqué."
      }
    ],
    "explanation": "L'attaque nucléophile vise le carbone acyle de l'ester."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel rôle joue l'oxygène carbonylé dans la polarisation de l'ester selon la fiche ?",
    "choices": [
      {
        "content": "Il exerce un effet électroattracteur.",
        "correct": true,
        "explanation": "Propriété centrale."
      },
      {
        "content": "Il contribue à rendre le carbone carbonylé électrophile.",
        "correct": true,
        "explanation": "Conséquence directe."
      },
      {
        "content": "Il influence aussi la distribution électronique au niveau du carbone alpha.",
        "correct": true,
        "explanation": "Le support relie cet effet au caractère nucléophile du CH2 voisin."
      },
      {
        "content": "Il rend tous les carbones de la molécule identiquement réactifs.",
        "correct": false,
        "explanation": "La réactivité est localisée."
      }
    ],
    "explanation": "L'oxygène carbonylé est au cœur des deux polarités mises en avant."
  },
  {
    "order": 45,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare deux expériences sur le même ester : A, ajout d'un nucléophile ; B, base forte puis électrophile. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Dans A, le carbone carbonylé est le centre électrophile attaqué.",
        "correct": true,
        "explanation": "Voie acyle."
      },
      {
        "content": "Dans B, le carbone alpha est rendu nucléophile.",
        "correct": true,
        "explanation": "Activation par base forte."
      },
      {
        "content": "Dans B, l'électrophile se fixe au carbone alpha.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "Les deux expériences illustrent des polarités différentes au sein de la même fonction ester.",
        "correct": true,
        "explanation": "C'est la synthèse de la section."
      }
    ],
    "explanation": "Le MASTER doit relier les deux centres de réactivité plutôt que les apprendre isolément."
  },
  {
    "order": 46,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une molécule contient à la fois une fonction ester et un CH2 en alpha du carbonyle. Quelles stratégies sont compatibles avec le modèle de la fiche ?",
    "choices": [
      {
        "content": "Utiliser un nucléophile pour viser le carbone carbonylé.",
        "correct": true,
        "explanation": "Centre électrophile."
      },
      {
        "content": "Utiliser une base forte puis un électrophile pour fonctionnaliser le carbone alpha.",
        "correct": true,
        "explanation": "Centre nucléophile après activation."
      },
      {
        "content": "Choisir les conditions permet donc de changer le site de réactivité mobilisé.",
        "correct": true,
        "explanation": "Point central de la fiche."
      },
      {
        "content": "Les deux voies exigent obligatoirement une rupture complète du squelette carboné.",
        "correct": false,
        "explanation": "Ce n'est pas indiqué."
      }
    ],
    "explanation": "Le choix des conditions oriente la fonction ester vers deux types de réactivité."
  },
  {
    "order": 47,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À partir d'un ester $\\mathrm{RCOOR'}$, quelles transformations sont directement soutenues par la fiche ?",
    "choices": [
      {
        "content": "Hydrolyse acide → RCOOH + R'OH.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Hydrolyse basique → RCOO− + R'OH.",
        "correct": true,
        "explanation": "Saponification."
      },
      {
        "content": "Nucléophile → remplacement de OR' par Nu dans le bilan simplifié.",
        "correct": true,
        "explanation": "Substitution acyle."
      },
      {
        "content": "Base forte puis électrophile → fixation de l'électrophile en alpha.",
        "correct": true,
        "explanation": "Réactivité du carbone alpha."
      }
    ],
    "explanation": "Le chapitre présente quatre conséquences directes de la polarisation et de l'hydrolysabilité de l'ester."
  },
  {
    "order": 48,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel couple « centre / rôle » est correct pour l'ester dans le modèle du cours ?",
    "choices": [
      {
        "content": "Carbone carbonylé / électrophile.",
        "correct": true,
        "explanation": "Couple principal."
      },
      {
        "content": "Carbone carbonylé / toujours nucléophile.",
        "correct": false,
        "explanation": "Il est décrit comme électrophile."
      },
      {
        "content": "Carbone alpha / toujours électrophile.",
        "correct": false,
        "explanation": "Il peut devenir nucléophile."
      },
      {
        "content": "Oxygène carbonylé / groupe partant principal du bilan R-CO-Nu.",
        "correct": false,
        "explanation": "Le groupe remplacé est OR'."
      }
    ],
    "explanation": "Le carbone carbonylé est le centre électrophile de l'ester."
  },
  {
    "order": 49,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pourquoi la saponification et l'hydrolyse acide ne donnent-elles pas exactement la même forme du fragment acide dans les bilans du support ?",
    "choices": [
      {
        "content": "Le pH diffère.",
        "correct": true,
        "explanation": "Acide contre basique."
      },
      {
        "content": "En milieu acide, la forme RCOOH est mise en avant.",
        "correct": true,
        "explanation": "Acide carboxylique."
      },
      {
        "content": "En milieu basique, la forme RCOO− est mise en avant.",
        "correct": true,
        "explanation": "Carboxylate."
      },
      {
        "content": "Parce que la saponification remplace le carbone du carbonyle par un azote.",
        "correct": false,
        "explanation": "Aucun azote n'intervient."
      }
    ],
    "explanation": "L'état de protonation du fragment carboxylique dépend du milieu."
  },
  {
    "order": 50,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un étudiant affirme qu'un ester ne possède qu'un seul site réactionnel. Pourquoi cette affirmation est-elle incorrecte dans le cadre de la fiche ?",
    "choices": [
      {
        "content": "Le carbone carbonylé est électrophile.",
        "correct": true,
        "explanation": "Premier site."
      },
      {
        "content": "Le carbone alpha peut devenir nucléophile.",
        "correct": true,
        "explanation": "Deuxième site."
      },
      {
        "content": "Les conditions expérimentales déterminent lequel de ces comportements est exploité.",
        "correct": true,
        "explanation": "Nucléophile ou base forte/électrophile."
      },
      {
        "content": "La fiche décrit donc au moins deux centres carbonés de réactivité.",
        "correct": true,
        "explanation": "Synthèse du modèle."
      }
    ],
    "explanation": "La fonction ester est présentée comme ambivalente du point de vue de ses centres réactifs."
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une base forte agit d'abord sur un ester, puis un électrophile est ajouté. Quelles erreurs faut-il éviter ?",
    "choices": [
      {
        "content": "Confondre le carbone alpha activé avec le carbone carbonylé électrophile.",
        "correct": true,
        "explanation": "Ce sont deux centres distincts."
      },
      {
        "content": "Oublier que la base forte intervient avant l'électrophile.",
        "correct": true,
        "explanation": "L'ordre est essentiel dans le schéma du support."
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
    "explanation": "Dans le modèle de la fiche, l'oxygène carbonylé attire la densité électronique et confère au carbone du carbonyle un caractère électrophile."
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un ester subit d'abord une attaque nucléophile au carbonyle, tandis qu'un autre échantillon est traité par base forte puis électrophile. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux réactions exploitent des centres différents de la fonction.",
        "correct": true,
        "explanation": "Carbonyle versus carbone alpha."
      },
      {
        "content": "La première met en jeu le caractère électrophile du carbone carbonylé.",
        "correct": true,
        "explanation": "Attaque nucléophile."
      },
      {
        "content": "La seconde met en jeu le caractère nucléophile du carbone alpha.",
        "correct": true,
        "explanation": "Après base forte."
      },
      {
        "content": "Ces comportements sont contradictoires et ne peuvent pas coexister dans le même cadre.",
        "correct": false,
        "explanation": "La fiche les présente comme dépendants des conditions."
      }
    ],
    "explanation": "Le caractère réactif de l'ester dépend du site et des conditions."
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de la substitution acyle simplifiée $\\mathrm{ester + Nu \\rightarrow R{-}CO{-}Nu}$ présentée dans la fiche :",
    "choices": [
      {
        "content": "Le nucléophile vise le carbone carbonylé.",
        "correct": true,
        "explanation": "Centre électrophile."
      },
      {
        "content": "Le groupe OR' est remplacé dans le bilan.",
        "correct": true,
        "explanation": "C'est la transformation dessinée."
      },
      {
        "content": "Le carbonyle reste un motif du produit R-CO-Nu.",
        "correct": true,
        "explanation": "Le groupe acyle est conservé."
      },
      {
        "content": "La réaction se résume à une fixation de Nu sur le carbone alpha.",
        "correct": false,
        "explanation": "C'est une autre voie de réactivité."
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
        "explanation": "Bilan."
      },
      {
        "content": "Hydrolyse alcaline = saponification.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Le carbone carbonylé d'un ester est électrophile.",
        "correct": true,
        "explanation": "Polarisation."
      },
      {
        "content": "Une base forte peut rendre le carbone alpha nucléophile.",
        "correct": true,
        "explanation": "Réactivité alpha."
      },
      {
        "content": "Un nucléophile peut remplacer OR' au niveau du groupe acyle dans le bilan simplifié.",
        "correct": true,
        "explanation": "Substitution acyle."
      },
      {
        "content": "Le carbone carbonylé est toujours nucléophile.",
        "correct": false,
        "explanation": "Il est électrophile."
      },
      {
        "content": "La saponification forme obligatoirement une amide.",
        "correct": false,
        "explanation": "Pas d'azote."
      },
      {
        "content": "L'ester ne contient qu'un oxygène.",
        "correct": false,
        "explanation": "Deux oxygènes."
      },
      {
        "content": "La liaison C-O de l'ester est décrite comme totalement bloquée.",
        "correct": false,
        "explanation": "Libre rotation dans le support."
      },
      {
        "content": "Une base forte rend le carbone alpha électrophile.",
        "correct": false,
        "explanation": "Elle le rend nucléophile."
      }
    ],
    "explanation": "Cette sélection réunit hydrolyse, polarisation et centres réactifs."
  },
  {
    "order": 56,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel nom donne-t-on à l'hydrolyse d'un ester en milieu basique dans la fiche ?",
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
    "explanation": "La fiche emploie « hydrolyse alcaline = saponification »."
  }
];
