import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.5 – Synthèse
 */

export const UE14_CH9_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On dispose du même chlorure d'acyle et de trois partenaires : un alcool, une amine et un thiol. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Avec l'alcool, on peut former un ester.",
        "correct": true,
        "explanation": "Acide activé + alcool."
      },
      {
        "content": "Avec l'amine, on peut former une amide.",
        "correct": true,
        "explanation": "Acide activé + amine."
      },
      {
        "content": "Avec le thiol, on peut former un thioester.",
        "correct": true,
        "explanation": "Acide activé + thiol."
      },
      {
        "content": "La nature de l'hétéroatome du partenaire détermine la famille du produit.",
        "correct": true,
        "explanation": "O, N ou S."
      }
    ],
    "explanation": "Un même fragment acyle activé peut conduire aux trois familles principales du chapitre."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare les hydrolyses d'un ester, d'une amide et d'un thioester. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'ester est hydrolysable.",
        "correct": true,
        "explanation": "Hydrolyse acide ou alcaline."
      },
      {
        "content": "L'amide est hydrolysable mais demande des conditions chimiques plus sévères.",
        "correct": true,
        "explanation": "Milieu très acide et chauffage."
      },
      {
        "content": "Le thioester est hydrolysable.",
        "correct": true,
        "explanation": "Avec eau ou enzymes."
      },
      {
        "content": "Les trois fonctions sont absolument non hydrolysables.",
        "correct": false,
        "explanation": "La fiche décrit l'hydrolyse des trois."
      }
    ],
    "explanation": "Les trois dérivés sont hydrolysables, mais leur facilité et leurs produits diffèrent."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule porte à la fois une fonction ester et une fonction amide. Elle est traitée dans des conditions d'hydrolyse douces. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'ester peut être hydrolysé sélectivement.",
        "correct": true,
        "explanation": "Il est plus fragile."
      },
      {
        "content": "L'amide peut rester intacte.",
        "correct": true,
        "explanation": "Elle résiste davantage."
      },
      {
        "content": "Cette différence de stabilité permet une sélectivité fonctionnelle.",
        "correct": true,
        "explanation": "Point explicite du support."
      },
      {
        "content": "L'amide doit être hydrolysée en premier.",
        "correct": false,
        "explanation": "C'est l'inverse."
      }
    ],
    "explanation": "La différence de sensibilité ester/amide est une compétence transversale centrale du chapitre."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels couples « fonction / produit de synthèse à partir d'un acide activé » sont corrects ?",
    "choices": [
      {
        "content": "Alcool → ester.",
        "correct": true,
        "explanation": "Acylation de O."
      },
      {
        "content": "Amine → amide.",
        "correct": true,
        "explanation": "Acylation de N."
      },
      {
        "content": "Thiol → thioester.",
        "correct": true,
        "explanation": "Acylation de S."
      },
      {
        "content": "Alcane → liaison peptidique.",
        "correct": false,
        "explanation": "L'alcane n'est pas le partenaire utilisé."
      }
    ],
    "explanation": "La nature du nucléophile commande le dérivé d'acide formé."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un contexte biologique, quelles associations sont soutenues par la fiche ?",
    "choices": [
      {
        "content": "Liaison peptidique → fonction amide.",
        "correct": true,
        "explanation": "Application des amides."
      },
      {
        "content": "Protéases/peptidases → hydrolyse de fonctions amides des peptides.",
        "correct": true,
        "explanation": "Application enzymatique."
      },
      {
        "content": "Estérases → hydrolyse de fonctions ester.",
        "correct": true,
        "explanation": "Application enzymatique."
      },
      {
        "content": "Acétyl-CoA → thioester du CoA-SH.",
        "correct": true,
        "explanation": "Application des thioesters."
      }
    ],
    "explanation": "Le chapitre relie chacune des trois familles à un contexte biologique précis."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des propriétés électroniques des esters et des amides :",
    "choices": [
      {
        "content": "Le carbone carbonylé d'un ester est électrophile.",
        "correct": true,
        "explanation": "Polarisation par l'oxygène."
      },
      {
        "content": "Le carbone alpha d'un ester peut devenir nucléophile sous l'action d'une base forte.",
        "correct": true,
        "explanation": "Deuxième centre de réactivité."
      },
      {
        "content": "Le doublet de l'azote d'une amide est délocalisé vers le carbonyle.",
        "correct": true,
        "explanation": "Origine du caractère partiel de double liaison."
      },
      {
        "content": "La liaison C-N amide est décrite comme totalement libre en rotation.",
        "correct": false,
        "explanation": "La rotation est fortement perturbée."
      }
    ],
    "explanation": "La synthèse doit distinguer polarisation de l'ester et délocalisation de l'amide."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On hydrolyse un ester en milieu acide puis, dans une autre expérience, en milieu basique. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "En milieu acide, le fragment acyle est retrouvé sous forme d'acide carboxylique.",
        "correct": true,
        "explanation": "RCOOH."
      },
      {
        "content": "En milieu basique, il est retrouvé sous forme de carboxylate.",
        "correct": true,
        "explanation": "RCOO−."
      },
      {
        "content": "Dans les deux cas, un alcool peut être libéré.",
        "correct": true,
        "explanation": "R'OH."
      },
      {
        "content": "L'hydrolyse basique est appelée saponification.",
        "correct": true,
        "explanation": "Terminologie du support."
      }
    ],
    "explanation": "Le pH modifie notamment l'état de protonation du fragment carboxylique."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'acétyl-CoA et du CoA-SH :",
    "choices": [
      {
        "content": "L'acétyl-CoA contient une liaison thioester.",
        "correct": true,
        "explanation": "Application principale."
      },
      {
        "content": "Son hydrolyse libère CoA-SH et acide acétique.",
        "correct": true,
        "explanation": "Bilan du support."
      },
      {
        "content": "La réaction inverse peut être réalisée par des enzymes.",
        "correct": true,
        "explanation": "Formation du thioester."
      },
      {
        "content": "CoA-SH est présenté comme un alcool.",
        "correct": false,
        "explanation": "La fonction mise en avant est un thiol."
      }
    ],
    "explanation": "Le couple acétyl-CoA/CoA-SH résume la chimie biologique du thioester étudiée dans la fiche."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux fonctions pour lesquelles la fiche insiste explicitement sur une différence de facilité d'hydrolyse permettant une sélectivité dans une même molécule.",
    "choices": [
      {
        "content": "Ester.",
        "correct": true,
        "explanation": "Fonction la plus fragile dans la comparaison."
      },
      {
        "content": "Amide.",
        "correct": true,
        "explanation": "Fonction plus résistante."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "Pas une fonction hydrolysée dans ce chapitre."
      },
      {
        "content": "Alcène.",
        "correct": false,
        "explanation": "Pas concerné par cette comparaison."
      }
    ],
    "explanation": "La comparaison ester/amide est utilisée pour raisonner sur l'hydrolyse sélective."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un ester contient deux oxygènes dans son motif fonctionnel.",
        "correct": true,
        "explanation": "C=O et O-R'."
      },
      {
        "content": "Une amide contient un carbonyle directement lié à N.",
        "correct": true,
        "explanation": "Motif amide."
      },
      {
        "content": "Un thioester contient le motif C(=O)-S-R'.",
        "correct": true,
        "explanation": "Motif thioester."
      },
      {
        "content": "Une saponification est une hydrolyse basique d'ester.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "L'acétyl-CoA est un thioester.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Une amide est plus facile à hydrolyser chimiquement qu'un ester.",
        "correct": false,
        "explanation": "C'est l'inverse."
      },
      {
        "content": "Le carbone carbonylé d'un ester est toujours nucléophile.",
        "correct": false,
        "explanation": "Il est électrophile."
      },
      {
        "content": "Le doublet de l'azote amide est totalement libre et non délocalisé.",
        "correct": false,
        "explanation": "Il est délocalisé."
      },
      {
        "content": "Un acide non activé + amine donne directement l'amide selon le support.",
        "correct": false,
        "explanation": "Le support met en avant le sel."
      },
      {
        "content": "Un thioester est absolument non hydrolysable.",
        "correct": false,
        "explanation": "Il est hydrolysable."
      }
    ],
    "explanation": "Cette synthèse consolide structures, hydrolyses et propriétés électroniques."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un intermédiaire pharmaceutique contient une fonction ester et une fonction amide. On veut d'abord retirer sélectivement l'ester, puis hydrolyser l'amide. Quel enchaînement est cohérent avec la fiche ?",
    "choices": [
      {
        "content": "Étape 1 : conditions suffisamment douces pour hydrolyser l'ester.",
        "correct": true,
        "explanation": "L'amide peut rester intacte."
      },
      {
        "content": "Étape 2 : milieu très acide avec chauffage pour hydrolyser l'amide.",
        "correct": true,
        "explanation": "Conditions du support."
      },
      {
        "content": "L'ordre inverse préserverait nécessairement l'ester pendant l'hydrolyse de l'amide.",
        "correct": false,
        "explanation": "L'ester, plus fragile, serait affecté."
      },
      {
        "content": "La différence de stabilité permet donc d'organiser la séquence.",
        "correct": true,
        "explanation": "Application de la sélectivité."
      }
    ],
    "explanation": "Cette situation mobilise directement la hiérarchie d'hydrolysabilité des deux fonctions."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un même chlorure d'acyle réagit séparément avec méthanol, méthylamine et méthanethiol. Quelles associations produit/fonction sont exactes ?",
    "choices": [
      {
        "content": "Méthanol → ester.",
        "correct": true,
        "explanation": "O est acylé."
      },
      {
        "content": "Méthylamine → amide.",
        "correct": true,
        "explanation": "N est acylé."
      },
      {
        "content": "Méthanethiol → thioester.",
        "correct": true,
        "explanation": "S est acylé."
      },
      {
        "content": "Les trois produits possèdent le même hétéroatome lié au carbonyle.",
        "correct": false,
        "explanation": "O, N et S diffèrent."
      }
    ],
    "explanation": "Le MASTER compare les trois dérivés d'acide issus d'un même fragment acyle."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un ester possède un CH2 en alpha du carbonyle. On réalise deux expériences : A, ajout d'un nucléophile ; B, base forte puis électrophile. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "A exploite le caractère électrophile du carbone carbonylé.",
        "correct": true,
        "explanation": "Attaque nucléophile."
      },
      {
        "content": "B exploite le caractère nucléophile du carbone alpha après activation.",
        "correct": true,
        "explanation": "Base forte."
      },
      {
        "content": "Les deux centres de réactivité sont distincts.",
        "correct": true,
        "explanation": "Carbonyle versus alpha."
      },
      {
        "content": "Les conditions expérimentales sélectionnent le comportement observé.",
        "correct": true,
        "explanation": "Point clé du support."
      }
    ],
    "explanation": "La fonction ester peut être abordée par son carbonyle ou par son carbone alpha selon les conditions."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare un ester et une amide. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'ester est plus facilement hydrolysé chimiquement.",
        "correct": true,
        "explanation": "Comparaison du support."
      },
      {
        "content": "L'amide possède une liaison C-N à caractère partiel de double liaison.",
        "correct": true,
        "explanation": "Délocalisation."
      },
      {
        "content": "La liaison C-O de l'ester est décrite comme libre en rotation.",
        "correct": true,
        "explanation": "Propriété de l'ester."
      },
      {
        "content": "Les deux fonctions ont exactement la même nature d'hétéroatome lié au carbonyle.",
        "correct": false,
        "explanation": "O pour ester, N pour amide."
      }
    ],
    "explanation": "La comparaison structure/réactivité explique la différence de comportement des deux fonctions."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une protéase digestive hydrolyse une liaison peptidique. Quelles propositions relient correctement cet exemple au chapitre ?",
    "choices": [
      {
        "content": "La liaison peptidique est une amide.",
        "correct": true,
        "explanation": "Rappel fondamental."
      },
      {
        "content": "Les peptidases/protéases réalisent une hydrolyse sélective de fonctions amides.",
        "correct": true,
        "explanation": "Application physiologique."
      },
      {
        "content": "Trypsine, chymotrypsine et pepsine sont citées comme exemples.",
        "correct": true,
        "explanation": "Liste de la fiche."
      },
      {
        "content": "L'exemple prouve que l'amide est chimiquement plus fragile que l'ester.",
        "correct": false,
        "explanation": "L'hydrolyse enzymatique ne renverse pas la comparaison chimique du support."
      }
    ],
    "explanation": "L'enzyme permet l'hydrolyse sélective d'une fonction pourtant résistante chimiquement."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de la rigidité d'une liaison peptidique, quelles propositions sont compatibles avec les propriétés de l'amide enseignées ?",
    "choices": [
      {
        "content": "Le doublet de l'azote est délocalisé vers le carbonyle.",
        "correct": true,
        "explanation": "Origine électronique."
      },
      {
        "content": "La liaison C-N acquiert un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "La rotation autour de C-N est donc fortement perturbée.",
        "correct": true,
        "explanation": "Propriété de la fiche."
      },
      {
        "content": "Le résidu proline peut influencer la structure secondaire de la chaîne.",
        "correct": true,
        "explanation": "Exemple biologique du rappel."
      }
    ],
    "explanation": "Cette question relie la structure électronique de l'amide au contexte peptidique du support."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un thioester de type acétyl-CoA est hydrolysé puis reformé enzymatiquement. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'hydrolyse rompt la liaison thioester.",
        "correct": true,
        "explanation": "Première transformation."
      },
      {
        "content": "CoA-SH est régénéré lors de l'hydrolyse.",
        "correct": true,
        "explanation": "Produit."
      },
      {
        "content": "L'acide acétique est également formé dans le bilan simplifié.",
        "correct": true,
        "explanation": "Produit."
      },
      {
        "content": "La réaction inverse rétablit la fonction thioester.",
        "correct": true,
        "explanation": "Formation enzymatique."
      }
    ],
    "explanation": "Le cycle illustre la réversibilité fonctionnelle formation/hydrolyse du thioester."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Dans la comparaison fonctionnelle ester / amide / thioester, combien de types d'hétéroatomes différents peuvent être directement liés au carbone carbonylé du côté du substituant : O, N ou S ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Les trois familles se distinguent ici par O pour l'ester, N pour l'amide et S pour le thioester."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un étudiant affirme : « amine et amide ont le même doublet d'azote disponible ». Quelles propositions corrigent cette affirmation dans le cadre du cours ?",
    "choices": [
      {
        "content": "Le doublet de N de l'amide est délocalisé.",
        "correct": true,
        "explanation": "Il participe au système carbonylé."
      },
      {
        "content": "Cette délocalisation explique le caractère partiel de double liaison C-N.",
        "correct": true,
        "explanation": "Propriété structurale."
      },
      {
        "content": "Le doublet est donc moins disponible que dans une amine simple.",
        "correct": true,
        "explanation": "Conséquence de l'auto-évaluation du support."
      },
      {
        "content": "Le carbonyle adjacent est sans effet sur l'azote.",
        "correct": false,
        "explanation": "Il est précisément à l'origine de la différence."
      }
    ],
    "explanation": "L'amide ne doit pas être assimilée à une amine portant simplement un carbonyle voisin."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un ester est traité par une base forte, puis un électrophile est ajouté. Quel raisonnement est correct ?",
    "choices": [
      {
        "content": "La base rend le carbone alpha plus nucléophile.",
        "correct": true,
        "explanation": "Modèle du support."
      },
      {
        "content": "L'électrophile se fixe ensuite au niveau de ce carbone.",
        "correct": true,
        "explanation": "Bilan présenté."
      },
      {
        "content": "Le carbone carbonylé reste, dans un autre type de réaction, le centre électrophile attaqué par un nucléophile.",
        "correct": true,
        "explanation": "Deux comportements complémentaires."
      },
      {
        "content": "Le chapitre impose un seul centre de réactivité pour l'ester.",
        "correct": false,
        "explanation": "Il en distingue deux."
      }
    ],
    "explanation": "Le MASTER croise la réactivité alpha avec celle du carbone acyle."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quel tableau comparatif est correct pour les produits d'hydrolyse dans le modèle du chapitre ?",
    "choices": [
      {
        "content": "Ester acide → acide carboxylique + alcool.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Amide en milieu très acide/chauffé → acide carboxylique + composante aminée protonée.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Thioester → acide carboxylique + thiol.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Les trois hydrolyses donnent nécessairement le même hétéroatomique partenaire.",
        "correct": false,
        "explanation": "Alcool, amine protonée ou thiol diffèrent."
      }
    ],
    "explanation": "Les produits permettent de remonter à la nature du dérivé d'acide initial."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le carbone carbonylé d'un ester est électrophile.",
        "correct": true,
        "explanation": "Polarisation."
      },
      {
        "content": "Le carbone alpha d'un ester peut devenir nucléophile avec une base forte.",
        "correct": true,
        "explanation": "Réactivité alpha."
      },
      {
        "content": "La liaison C-N d'une amide possède un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "Délocalisation."
      },
      {
        "content": "Une amide est plus résistante à l'hydrolyse chimique qu'un ester.",
        "correct": true,
        "explanation": "Sélectivité."
      },
      {
        "content": "L'acétyl-CoA est un thioester du CoA-SH.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "La saponification est une hydrolyse acide.",
        "correct": false,
        "explanation": "Elle est basique."
      },
      {
        "content": "Un acide non activé et une amine donnent directement une amide selon la fiche.",
        "correct": false,
        "explanation": "Sel acide-base."
      },
      {
        "content": "Une estérase hydrolyse sélectivement une liaison peptidique dans l'exemple du support.",
        "correct": false,
        "explanation": "Les peptidases/protéases sont associées aux amides."
      },
      {
        "content": "Le doublet de N d'une amide est totalement disponible.",
        "correct": false,
        "explanation": "Il est délocalisé."
      },
      {
        "content": "Le thioester est non hydrolysable.",
        "correct": false,
        "explanation": "Il est hydrolysable."
      }
    ],
    "explanation": "Le MASTER final croise les pièges majeurs des cinq sections."
  }
];
