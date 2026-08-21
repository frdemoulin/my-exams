import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.5 – Synthèse
 */

export const UE14_CH9_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On dispose du même chlorure d'acyle et de trois partenaires: un alcool, une amine et un thiol. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      },
      {
        "content": "Avec l'alcool, on peut former un ester.",
        "correct": true,
        "explanation": "L'oxygène de l'alcool attaque le dérivé acylé activé ; le produit formé est un ester."
      },
      {
        "content": "Avec l'amine, on peut former une amide.",
        "correct": true,
        "explanation": "L'azote de l'amine attaque le dérivé acylé activé ; le produit formé est une amide."
      },
      {
        "content": "Avec le thiol, on peut former un thioester.",
        "correct": true,
        "explanation": "Le soufre du thiol réagit avec le dérivé acylé activé ; le produit formé est un thioester."
      },
      {
        "content": "La nature de l'hétéroatome du partenaire détermine la famille du produit.",
        "correct": true,
        "explanation": "Selon que le nucléophile apporte O, N ou S, le dérivé acylé formé est respectivement un ester, une amide ou un thioester."
      }
    ],
    "explanation": "Un même fragment acyle activé peut conduire aux trois familles principales du chapitre."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare les hydrolyses d'un ester, d'une amide et d'un thioester. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le thioester est hydrolysable.",
        "correct": true,
        "explanation": "Avec eau ou enzymes: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les trois fonctions sont absolument non hydrolysables.",
        "correct": false,
        "explanation": "Les fonctions ester, amide et thioester sont toutes hydrolysables, mais dans des conditions et avec des facilités différentes."
      },
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      },
      {
        "content": "L'ester n’est pas hydrolysable.",
        "correct": false,
        "explanation": "La relation correcte est: « L'ester est hydrolysable ». La négation proposée est donc fausse."
      },
      {
        "content": "L'amide est hydrolysable mais demande des conditions chimiques plus sévères.",
        "correct": true,
        "explanation": "Milieu très acide et chauffage."
      }
    ],
    "explanation": "Les trois dérivés sont hydrolysables, mais leur facilité et leurs produits diffèrent."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule porte à la fois une fonction ester et une fonction amide. Elle est traitée dans des conditions d'hydrolyse douces. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'ester peut être hydrolysé sélectivement.",
        "correct": true,
        "explanation": "Il est plus fragile: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'amide peut rester intacte.",
        "correct": true,
        "explanation": "Elle résiste davantage: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Cette différence de stabilité permet une sélectivité fonctionnelle.",
        "correct": true,
        "explanation": "Cette relation constitue l’un des éléments directement utiles pour prévoir le produit de la réaction."
      },
      {
        "content": "L'amide doit être hydrolysée en premier.",
        "correct": false,
        "explanation": "C'est l'inverse: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      }
    ],
    "explanation": "La différence de sensibilité ester/amide est une compétence transversale centrale du chapitre."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels couples « fonction / produit de synthèse à partir d'un acide activé » sont corrects?",
    "choices": [
      {
        "content": "Alcane → liaison peptidique.",
        "correct": false,
        "explanation": "L'alcane n'est pas le partenaire utilisé."
      },
      {
        "content": "La préparation d’un ester étudiée exige nécessairement une amine comme nucléophile.",
        "correct": false,
        "explanation": "L’ester est formé ici à partir d’un alcool et d’un acide activé."
      },
      {
        "content": "Alcool → ester.",
        "correct": true,
        "explanation": "Acylation de O: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Amine → amide.",
        "correct": true,
        "explanation": "Acylation de N: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Thiol → thioester.",
        "correct": true,
        "explanation": "Acylation de S: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La nature du nucléophile commande le dérivé d'acide formé."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un contexte biologique, quelles associations sont exactes ?",
    "choices": [
      {
        "content": "Protéases/peptidases → hydrolyse de fonctions amides des peptides.",
        "correct": true,
        "explanation": "Application enzymatique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Estérases → hydrolyse de fonctions ester.",
        "correct": true,
        "explanation": "Application enzymatique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Acétyl-CoA → thioester du CoA-SH.",
        "correct": true,
        "explanation": "Application des thioesters: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      },
      {
        "content": "Liaison peptidique → fonction amide.",
        "correct": true,
        "explanation": "Application des amides: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le chapitre relie chacune des trois familles à un contexte biologique précis."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des propriétés électroniques des esters et des amides:",
    "choices": [
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Le carbone carbonylé d'un ester n’est pas électrophile.",
        "correct": false,
        "explanation": "La relation correcte est: « Le carbone carbonylé d'un ester est électrophile ». La négation proposée est donc fausse."
      },
      {
        "content": "Le carbone alpha d'un ester peut devenir nucléophile sous l'action d'une base forte.",
        "correct": true,
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
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
    "question": "On hydrolyse un ester en milieu acide puis, dans une autre expérience, en milieu basique. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Dans les deux cas, un alcool peut être libéré.",
        "correct": true,
        "explanation": "R'OH: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'hydrolyse basique est appelée saponification.",
        "correct": true,
        "explanation": "Terminologie: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un ester est totalement insensible à l’eau quelles que soient les conditions.",
        "correct": false,
        "explanation": "La fonction ester est hydrolysable en milieu acide ou basique dans les conditions appropriées."
      },
      {
        "content": "En milieu acide, le fragment acyle est retrouvé sous forme d'acide carboxylique.",
        "correct": true,
        "explanation": "RCOOH: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "En milieu basique, il est retrouvé sous forme de carboxylate.",
        "correct": true,
        "explanation": "RCOO−: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le pH modifie notamment l'état de protonation du fragment carboxylique."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'acétyl-CoA et du CoA-SH:",
    "choices": [
      {
        "content": "L'acétyl-CoA ne contient pas une liaison thioester.",
        "correct": false,
        "explanation": "La relation correcte est: « L'acétyl-CoA contient une liaison thioester ». La négation proposée est donc fausse."
      },
      {
        "content": "Son hydrolyse libère CoA-SH et acide acétique.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "La réaction inverse peut être réalisée par des enzymes.",
        "correct": true,
        "explanation": "Formation du thioester: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "CoA-SH est présenté comme un alcool.",
        "correct": false,
        "explanation": "La fonction mise en avant est un thiol."
      },
      {
        "content": "Un thioester comporte le motif $\\ce{R-C(=O)-SR'}$.",
        "correct": true,
        "explanation": "Le soufre remplace l’oxygène alkoxy d’un ester classique."
      }
    ],
    "explanation": "Le couple acétyl-CoA/CoA-SH résume la chimie biologique du thioester étudiée."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux fonctions dont la différence de facilité d'hydrolyse permet une sélectivité dans une même molécule.",
    "choices": [
      {
        "content": "Alcène.",
        "correct": false,
        "explanation": "Pas concerné par cette comparaison."
      },
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      },
      {
        "content": "Ester.",
        "correct": true,
        "explanation": "Fonction la plus fragile dans la comparaison."
      },
      {
        "content": "Amide.",
        "correct": true,
        "explanation": "Fonction plus résistante: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "Pas une fonction hydrolysée dans ce chapitre."
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
        "explanation": "C=O et O-R' : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une amide contient un carbonyle directement lié à N.",
        "correct": true,
        "explanation": "Motif amide : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un thioester contient le motif C(=O)-S-R'.",
        "correct": true,
        "explanation": "Motif thioester : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une saponification est une hydrolyse basique d'ester.",
        "correct": true,
        "explanation": "Définition : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'acétyl-CoA est un thioester.",
        "correct": true,
        "explanation": "Application : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une amide est plus facile à hydrolyser chimiquement qu'un ester.",
        "correct": false,
        "explanation": "C'est l'inverse : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone carbonylé d'un ester est toujours nucléophile.",
        "correct": false,
        "explanation": "Il est électrophile : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le doublet de l'azote amide est totalement libre et non délocalisé.",
        "correct": false,
        "explanation": "Il est délocalisé : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un acide non activé + amine donne directement l'amide.",
        "correct": false,
        "explanation": "Un acide carboxylique non activé et une amine réagissent d'abord par transfert de proton pour former un sel."
      },
      {
        "content": "Un thioester est absolument non hydrolysable.",
        "correct": false,
        "explanation": "Il est hydrolysable : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette synthèse consolide structures, hydrolyses et propriétés électroniques."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un intermédiaire pharmaceutique contient une fonction ester et une fonction amide. On veut d'abord hydrolyser sélectivement l'ester, puis l'amide. Quel enchaînement est cohérent ?",
    "choices": [
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      },
      {
        "content": "Étape 1: conditions suffisamment douces pour hydrolyser l'ester.",
        "correct": true,
        "explanation": "L'amide peut rester intacte: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Étape 2: milieu très acide avec chauffage pour hydrolyser l'amide.",
        "correct": true,
        "explanation": "Conditions: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'ordre inverse préserverait nécessairement l'ester pendant l'hydrolyse de l'amide.",
        "correct": false,
        "explanation": "L'ester, plus fragile, serait affecté."
      },
      {
        "content": "La différence de stabilité permet donc d'organiser la séquence.",
        "correct": true,
        "explanation": "Application de la sélectivité: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette situation mobilise directement la hiérarchie d'hydrolysabilité des deux fonctions."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un même chlorure d'acyle réagit séparément avec méthanol, méthylamine et méthanethiol. Quelles associations produit/fonction sont exactes?",
    "choices": [
      {
        "content": "Méthanethiol → thioester.",
        "correct": true,
        "explanation": "S est acylé: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les trois produits possèdent le même hétéroatome lié au carbonyle.",
        "correct": false,
        "explanation": "O, N et S diffèrent."
      },
      {
        "content": "Un thioester comporte le motif $\\ce{R-C(=O)-SR'}$.",
        "correct": true,
        "explanation": "Le soufre remplace l’oxygène alkoxy d’un ester classique."
      },
      {
        "content": "Méthanol → ester.",
        "correct": true,
        "explanation": "O est acylé: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Méthylamine → amide.",
        "correct": true,
        "explanation": "N est acylé: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le MASTER compare les trois dérivés d'acide issus d'un même fragment acyle."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un ester possède un CH2 en alpha du carbonyle. On réalise deux expériences: A, ajout d'un nucléophile; B, base forte puis électrophile. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "A exploite le caractère électrophile du carbone carbonylé.",
        "correct": true,
        "explanation": "Attaque nucléophile: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "B exploite le caractère nucléophile du carbone alpha après activation.",
        "correct": true,
        "explanation": "Base forte: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les deux centres de réactivité sont distincts.",
        "correct": true,
        "explanation": "Carbonyle versus alpha: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les conditions expérimentales sélectionnent le comportement observé.",
        "correct": true,
        "explanation": "Point clé: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      }
    ],
    "explanation": "La fonction ester peut être abordée par son carbonyle ou par son carbone alpha selon les conditions."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare un ester et une amide. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Les deux fonctions ont exactement la même nature d'hétéroatome lié au carbonyle.",
        "correct": false,
        "explanation": "O pour ester, N pour amide."
      },
      {
        "content": "La liaison $\\ce{C-N}$ d’une amide est décrite comme totalement libre en rotation à température ordinaire.",
        "correct": false,
        "explanation": "Le caractère partiel de double liaison perturbe fortement la rotation."
      },
      {
        "content": "L'ester n’est pas plus facilement hydrolysé chimiquement.",
        "correct": false,
        "explanation": "La relation correcte est: « L'ester est plus facilement hydrolysé chimiquement ». La négation proposée est donc fausse."
      },
      {
        "content": "L'amide possède une liaison C-N à caractère partiel de double liaison.",
        "correct": true,
        "explanation": "Délocalisation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La liaison C-O de l'ester est décrite comme libre en rotation.",
        "correct": true,
        "explanation": "Propriété de l'ester: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La comparaison structure/réactivité explique la différence de comportement des deux fonctions."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une protéase digestive hydrolyse une liaison peptidique. Quelles propositions relient correctement cet exemple au chapitre?",
    "choices": [
      {
        "content": "Les peptidases/protéases réalisent une hydrolyse sélective de fonctions amides.",
        "correct": true,
        "explanation": "Application physiologique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Trypsine, chymotrypsine et pepsine sont citées comme exemples.",
        "correct": true,
        "explanation": "La trypsine, la chymotrypsine et la pepsine sont des exemples de protéases capables d’hydrolyser des liaisons peptidiques."
      },
      {
        "content": "L'exemple prouve que l'amide est chimiquement plus fragile que l'ester.",
        "correct": false,
        "explanation": "L'hydrolyse enzymatique ne renverse pas la comparaison chimique."
      },
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      },
      {
        "content": "La liaison peptidique est une amide.",
        "correct": true,
        "explanation": "Une liaison peptidique correspond chimiquement à une fonction amide."
      }
    ],
    "explanation": "L'enzyme permet l'hydrolyse sélective d'une fonction pourtant résistante chimiquement."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de la rigidité d'une liaison peptidique, quelles propositions sont compatibles avec les propriétés de l'amide enseignées?",
    "choices": [
      {
        "content": "La liaison peptidique est une fonction ester.",
        "correct": false,
        "explanation": "La liaison peptidique correspond à une fonction amide."
      },
      {
        "content": "Le doublet de l'azote est délocalisé vers le carbonyle.",
        "correct": true,
        "explanation": "Le doublet de l’azote est délocalisé vers le groupe carbonyle de l’amide."
      },
      {
        "content": "La liaison C-N acquiert un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "Cette délocalisation confère à la liaison $\ce{C-N}$ un caractère partiel de double liaison."
      },
      {
        "content": "La rotation autour de C-N est donc fortement perturbée.",
        "correct": true,
        "explanation": "Le caractère partiel de double liaison limite la rotation autour de $\ce{C-N}$ et rigidifie la liaison peptidique."
      },
      {
        "content": "Le résidu proline peut influencer la structure secondaire de la chaîne.",
        "correct": true,
        "explanation": "Exemple biologique du rappel: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette question relie la structure électronique de l'amide au contexte peptidique."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un thioester de type acétyl-CoA est hydrolysé puis reformé enzymatiquement. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'acide acétique est également formé dans le bilan simplifié.",
        "correct": true,
        "explanation": "L’hydrolyse de l’acétyl-CoA libère notamment le fragment acétyle sous forme d’acide acétique dans le bilan simplifié."
      },
      {
        "content": "La réaction inverse rétablit la fonction thioester.",
        "correct": true,
        "explanation": "La réaction inverse reforme enzymatiquement la liaison thioester de l’acétyl-CoA."
      },
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      },
      {
        "content": "L'hydrolyse rompt la liaison thioester.",
        "correct": true,
        "explanation": "Première transformation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "CoA-SH est régénéré lors de l'hydrolyse.",
        "correct": true,
        "explanation": "Produit: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le cycle illustre la réversibilité fonctionnelle formation/hydrolyse du thioester."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Dans la comparaison fonctionnelle ester / amide / thioester, combien de types d'hétéroatomes différents peuvent être directement liés au carbone carbonylé du côté du substituant: O, N ou S?",
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
    "question": "Un étudiant affirme: « amine et amide ont le même doublet d'azote disponible ». Quelles propositions corrigent cette affirmation dans le cadre étudié?",
    "choices": [
      {
        "content": "Le carbonyle adjacent est sans effet sur l'azote.",
        "correct": false,
        "explanation": "Il est précisément à l'origine de la différence."
      },
      {
        "content": "La liaison carbone-azote d’une amide possède un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La délocalisation du doublet de l’azote vers le carbonyle limite la libre rotation autour de la liaison $\\ce{C-N}$."
      },
      {
        "content": "Le doublet de N de l'amide est délocalisé.",
        "correct": true,
        "explanation": "Il participe au système carbonylé."
      },
      {
        "content": "Cette délocalisation explique le caractère partiel de double liaison C-N.",
        "correct": true,
        "explanation": "Propriété structurale: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le doublet est donc moins disponible que dans une amine simple.",
        "correct": true,
        "explanation": "Conséquence de l'auto-évaluation: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "L'amide ne doit pas être assimilée à une amine portant simplement un carbonyle voisin."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un ester est traité par une base forte, puis un électrophile est ajouté. Quel raisonnement est correct?",
    "choices": [
      {
        "content": "L'électrophile se fixe ensuite au niveau de ce carbone.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Le carbone carbonylé reste, dans un autre type de réaction, le centre électrophile attaqué par un nucléophile.",
        "correct": true,
        "explanation": "Deux comportements complémentaires: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le chapitre impose un seul centre de réactivité pour l'ester.",
        "correct": false,
        "explanation": "Il en distingue deux: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "La base rend le carbone alpha plus nucléophile.",
        "correct": true,
        "explanation": "Modèle: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le MASTER croise la réactivité alpha avec celle du carbone acyle."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quel tableau comparatif est correct pour les produits d'hydrolyse dans le modèle du chapitre?",
    "choices": [
      {
        "content": "L’hydrolyse d’un thioester ne peut jamais régénérer un thiol.",
        "correct": false,
        "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
      },
      {
        "content": "Ester acide → acide carboxylique + alcool.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Amide en milieu très acide/chauffé → acide carboxylique + composante aminée protonée.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Thioester → acide carboxylique + thiol.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
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
        "explanation": "Polarisation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le carbone alpha d'un ester peut devenir nucléophile avec une base forte.",
        "correct": true,
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
      },
      {
        "content": "La liaison C-N d'une amide possède un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "Délocalisation : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une amide est plus résistante à l'hydrolyse chimique qu'un ester.",
        "correct": true,
        "explanation": "Sélectivité : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'acétyl-CoA est un thioester du CoA-SH.",
        "correct": true,
        "explanation": "Application : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La saponification est une hydrolyse acide.",
        "correct": false,
        "explanation": "Elle est basique : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un acide non activé et une amine donnent directement une amide.",
        "correct": false,
        "explanation": "Sel acide-base : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une estérase hydrolyse sélectivement une liaison peptidique dans l'exemple.",
        "correct": false,
        "explanation": "Les peptidases/protéases sont associées aux amides."
      },
      {
        "content": "Le doublet de N d'une amide est totalement disponible.",
        "correct": false,
        "explanation": "Il est délocalisé : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le thioester est non hydrolysable.",
        "correct": false,
        "explanation": "Il est hydrolysable : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le MASTER final croise les pièges majeurs des cinq sections."
  }
];
