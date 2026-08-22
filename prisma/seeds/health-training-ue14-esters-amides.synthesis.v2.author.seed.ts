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
    "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
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
        "explanation": "L’hydrolyse d’un thioester rompt la liaison acyle–soufre et régénère notamment un thiol."
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
    "explanation": "L’ester est plus facilement hydrolysable que l’amide ; cette différence de stabilité permet une hydrolyse sélective dans des conditions adaptées."
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
        "explanation": "La fonction ester est plus facilement hydrolysable que l’amide, ce qui permet une hydrolyse sélective dans des conditions adaptées."
      },
      {
        "content": "L'amide peut rester intacte.",
        "correct": true,
        "explanation": "La fonction ester est plus facilement hydrolysable que l’amide, ce qui permet une hydrolyse sélective dans des conditions adaptées."
      },
      {
        "content": "Cette différence de stabilité permet une sélectivité fonctionnelle.",
        "correct": true,
        "explanation": "Cette relation constitue l’un des éléments directement utiles pour prévoir le produit de la réaction."
      },
      {
        "content": "L'amide doit être hydrolysée en premier.",
        "correct": false,
        "explanation": "L’hydrolyse rompt la liaison amide et conduit, dans le bilan simplifié, à un acide carboxylique et à une amine."
      },
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      }
    ],
    "explanation": "L’ester est plus facilement hydrolysable que l’amide ; cette différence de stabilité permet une hydrolyse sélective dans des conditions adaptées."
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
        "explanation": "L’oxygène de l’alcool attaque le carbone acylé électrophile et forme la liaison ester."
      },
      {
        "content": "Amine → amide.",
        "correct": true,
        "explanation": "L’azote de l’amine attaque le carbone acylé électrophile et forme la liaison amide."
      },
      {
        "content": "Thiol → thioester.",
        "correct": true,
        "explanation": "Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
      }
    ],
    "explanation": "L'alcane n'est pas le partenaire utilisé."
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
        "explanation": "L’hydrolyse rompt la liaison amide et conduit, dans le bilan simplifié, à un acide carboxylique et à une amine."
      },
      {
        "content": "Estérases → hydrolyse de fonctions ester.",
        "correct": true,
        "explanation": "Les estérases catalysent l’hydrolyse sélective des fonctions ester."
      },
      {
        "content": "Acétyl-CoA → thioester du CoA-SH.",
        "correct": true,
        "explanation": "Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
      },
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      },
      {
        "content": "Liaison peptidique → fonction amide.",
        "correct": true,
        "explanation": "La liaison peptidique correspond à une fonction amide reliant deux résidus d’acides aminés."
      }
    ],
    "explanation": "L’hydrolyse rompt la liaison amide et conduit, dans le bilan simplifié, à un acide carboxylique et à une amine."
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
    "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
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
        "explanation": "Le groupe $\\ce{OR'}$ de l’ester donne l’alcool $\\ce{R'OH}$ après hydrolyse."
      },
      {
        "content": "L'hydrolyse basique est appelée saponification.",
        "correct": true,
        "explanation": "L’hydrolyse d’un ester en milieu basique est appelée saponification."
      },
      {
        "content": "Un ester est totalement insensible à l’eau quelles que soient les conditions.",
        "correct": false,
        "explanation": "La fonction ester est hydrolysable en milieu acide ou basique dans les conditions appropriées."
      },
      {
        "content": "En milieu acide, le fragment acyle est retrouvé sous forme d'acide carboxylique.",
        "correct": true,
        "explanation": "En hydrolyse acide d’un ester, le fragment acyle est retrouvé sous forme d’acide carboxylique $\\ce{RCOOH}$."
      },
      {
        "content": "En milieu basique, il est retrouvé sous forme de carboxylate.",
        "correct": true,
        "explanation": "En milieu basique, l’acide carboxylique formé est déprotoné et se retrouve sous forme de carboxylate $\\ce{RCOO^-}$."
      }
    ],
    "explanation": "En milieu basique, l’acide carboxylique formé est déprotoné et se retrouve sous forme de carboxylate $\\ce{RCOO^-}$."
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
        "explanation": "La liaison thioester peut être reformée enzymatiquement à partir des partenaires issus de l’hydrolyse."
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
    "explanation": "La relation correcte est: « L'acétyl-CoA contient une liaison thioester ». La négation proposée est donc fausse."
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
        "explanation": "L’oxydation d’un alcool ne crée pas de fonction amide."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "Pas une fonction hydrolysée dans les transformations étudiées."
      }
    ],
    "explanation": "Pas concerné par cette comparaison."
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
        "explanation": "Le motif ester comporte deux oxygènes : celui du carbonyle et celui du groupe $\\ce{OR'}$."
      },
      {
        "content": "Une amide contient un carbonyle directement lié à N.",
        "correct": true,
        "explanation": "Une amide se reconnaît au motif où l’azote est directement lié au carbone du groupe carbonyle."
      },
      {
        "content": "Un thioester contient le motif C(=O)-S-R'.",
        "correct": true,
        "explanation": "Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
      },
      {
        "content": "Une saponification est une hydrolyse basique d'ester.",
        "correct": true,
        "explanation": "Par définition, une saponification est une hydrolyse basique d'ester."
      },
      {
        "content": "L'acétyl-CoA est un thioester.",
        "correct": true,
        "explanation": "Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
      },
      {
        "content": "Une amide est plus facile à hydrolyser chimiquement qu'un ester.",
        "correct": false,
        "explanation": "L’hydrolyse rompt la liaison amide et conduit, dans le bilan simplifié, à un acide carboxylique et à une amine."
      },
      {
        "content": "Le carbone carbonylé d'un ester est toujours nucléophile.",
        "correct": false,
        "explanation": "La polarisation du groupe carbonyle rend le carbone carbonylé électrophile et donc sensible à l’attaque d’un nucléophile."
      },
      {
        "content": "Le doublet de l'azote amide est totalement libre et non délocalisé.",
        "correct": false,
        "explanation": "Le doublet de l’azote est au contraire délocalisé vers le carbonyle dans une amide."
      },
      {
        "content": "Un acide non activé + amine donne directement l'amide.",
        "correct": false,
        "explanation": "Un acide carboxylique non activé et une amine réagissent d'abord par transfert de proton pour former un sel."
      },
      {
        "content": "Un thioester est absolument non hydrolysable.",
        "correct": false,
        "explanation": "L’hydrolyse d’un thioester rompt la liaison acyle–soufre et régénère notamment un thiol."
      }
    ],
    "explanation": "Une amide se reconnaît au motif où l’azote est directement lié au carbone du groupe carbonyle. Le motif ester comporte deux oxygènes : celui du carbonyle et celui du groupe $\\ce{OR'}$."
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
        "explanation": "Comme l’ester est plus facilement hydrolysable que l’amide, des conditions douces peuvent hydrolyser l’ester tout en préservant l’amide."
      },
      {
        "content": "Étape 2: milieu très acide avec chauffage pour hydrolyser l'amide.",
        "correct": true,
        "explanation": "L’hydrolyse rompt la liaison amide et conduit, dans le bilan simplifié, à un acide carboxylique et à une amine."
      },
      {
        "content": "L'ordre inverse préserverait nécessairement l'ester pendant l'hydrolyse de l'amide.",
        "correct": false,
        "explanation": "L'ester, plus fragile, serait affecté."
      },
      {
        "content": "La différence de stabilité permet donc d'organiser la séquence.",
        "correct": true,
        "explanation": "La plus grande résistance de l’amide permet d’ordonner les étapes et d’exploiter une hydrolyse sélective de l’ester."
      }
    ],
    "explanation": "L’ester est plus facilement hydrolysé que l’amide."
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
        "explanation": "Le soufre du méthanethiol est acylé par le chlorure d’acyle, ce qui forme un thioester."
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
        "explanation": "L’oxygène du méthanol est acylé et le produit obtenu porte une fonction ester."
      },
      {
        "content": "Méthylamine → amide.",
        "correct": true,
        "explanation": "L’azote de la méthylamine est acylé et le produit obtenu porte une fonction amide."
      }
    ],
    "explanation": "Le soufre du méthanethiol est acylé par le chlorure d’acyle, ce qui forme un thioester. L’azote de la méthylamine est acylé et le produit obtenu porte une fonction amide."
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
        "explanation": "Dans l’expérience A, le nucléophile attaque le carbone électrophile du groupe carbonyle."
      },
      {
        "content": "B exploite le caractère nucléophile du carbone alpha après activation.",
        "correct": true,
        "explanation": "Dans l’expérience B, la base forte déprotone le carbone alpha et crée un centre nucléophile."
      },
      {
        "content": "Les deux centres de réactivité sont distincts.",
        "correct": true,
        "explanation": "Le carbone carbonylé est électrophile, tandis que le carbone alpha peut devenir nucléophile après déprotonation."
      },
      {
        "content": "Les conditions expérimentales sélectionnent le comportement observé.",
        "correct": true,
        "explanation": "Le site réactionnel exploité dépend des conditions : nucléophile au carbonyle ou base forte pour activer le carbone alpha."
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
        "explanation": "La délocalisation du doublet de l’azote vers le carbonyle donne à la liaison $\\ce{C-N}$ un caractère partiel de double liaison."
      },
      {
        "content": "La liaison C-O de l'ester est décrite comme libre en rotation.",
        "correct": true,
        "explanation": "La liaison C–O de l’ester reste plus libre en rotation que la liaison C–N d’une amide, fortement contrainte par délocalisation."
      }
    ],
    "explanation": "O pour ester, N pour amide."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une protéase digestive hydrolyse une liaison peptidique. Quelles propositions relient correctement cet exemple à la chimie des amides ?",
    "choices": [
      {
        "content": "Les peptidases/protéases réalisent une hydrolyse sélective de fonctions amides.",
        "correct": true,
        "explanation": "L’hydrolyse rompt la liaison amide et conduit, dans le bilan simplifié, à un acide carboxylique et à une amine."
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
    "explanation": "La trypsine, la chymotrypsine et la pepsine sont des exemples de protéases capables d’hydrolyser des liaisons peptidiques."
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
        "explanation": "Le cycle de la proline contraint la géométrie locale du peptide et peut ainsi influencer sa structure secondaire."
      }
    ],
    "explanation": "La liaison peptidique correspond à une fonction amide."
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
        "explanation": "L’hydrolyse d’un thioester rompt la liaison acyle–soufre et régénère notamment un thiol."
      },
      {
        "content": "CoA-SH est régénéré lors de l'hydrolyse.",
        "correct": true,
        "explanation": "L’hydrolyse de la liaison thioester de l’acétyl-CoA régénère le coenzyme A sous forme $\\ce{CoA-SH}$."
      }
    ],
    "explanation": "L’hydrolyse de l’acétyl-CoA libère notamment le fragment acétyle sous forme d’acide acétique dans le bilan simplifié."
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
        "explanation": "La délocalisation du doublet de l’azote vers le carbonyle donne à la liaison $\\ce{C-N}$ un caractère partiel de double liaison."
      },
      {
        "content": "Le doublet est donc moins disponible que dans une amine simple.",
        "correct": true,
        "explanation": "La délocalisation du doublet de l’azote vers le carbonyle diminue sa disponibilité par rapport à celui d’une amine simple."
      }
    ],
    "explanation": "Il est précisément à l'origine de la différence."
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
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ appauvrit le carbone en électrons et lui confère un caractère électrophile."
      },
      {
        "content": "Un ester ne possède qu’un seul centre carboné de réactivité.",
        "correct": false,
        "explanation": "L’ester présente au moins deux centres carbonés de réactivité : le carbone carbonylé électrophile et le carbone alpha activable par une base forte."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "La base rend le carbone alpha plus nucléophile.",
        "correct": true,
        "explanation": "Une base forte peut arracher un hydrogène en position alpha du carbonyle et créer un centre carboné nucléophile."
      }
    ],
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les bilans proposés, lequel compare correctement les produits d’hydrolyse ?",
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
    "explanation": "L’hydrolyse conduit à l’acide carboxylique et au thiol correspondant."
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
        "explanation": "La liaison $\\ce{C=O}$ est polarisée : l’oxygène est riche en électrons et le carbone carbonylé est électrophile."
      },
      {
        "content": "Le carbone alpha d'un ester peut devenir nucléophile avec une base forte.",
        "correct": true,
        "explanation": "La présence du groupe fonctionnel conditionne la réactivité et les propriétés de cette famille."
      },
      {
        "content": "La liaison C-N d'une amide possède un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La délocalisation du doublet de l’azote vers le carbonyle donne à la liaison $\\ce{C-N}$ un caractère partiel de double liaison."
      },
      {
        "content": "Une amide est plus résistante à l'hydrolyse chimique qu'un ester.",
        "correct": true,
        "explanation": "La fonction amide est plus résistante à l’hydrolyse que la fonction ester et nécessite des conditions plus sévères."
      },
      {
        "content": "L'acétyl-CoA est un thioester du CoA-SH.",
        "correct": true,
        "explanation": "Un thioester est l’analogue soufré d’un ester et possède le motif $\\ce{R-C(=O)-S-R'}$."
      },
      {
        "content": "La saponification est une hydrolyse acide.",
        "correct": false,
        "explanation": "La proposition est fausse : une saponification est une hydrolyse basique d'ester."
      },
      {
        "content": "Un acide non activé et une amine donnent directement une amide.",
        "correct": false,
        "explanation": "La proposition est fausse : une amide contient un carbonyle directement lié à N."
      },
      {
        "content": "Une estérase hydrolyse sélectivement une liaison peptidique dans l'exemple.",
        "correct": false,
        "explanation": "Les peptidases/protéases sont associées aux amides."
      },
      {
        "content": "Le doublet de N d'une amide est totalement disponible.",
        "correct": false,
        "explanation": "Le doublet de l’azote d’une amide est délocalisé vers le carbonyle et n’est donc pas totalement disponible."
      },
      {
        "content": "Le thioester est non hydrolysable.",
        "correct": false,
        "explanation": "L’hydrolyse d’un thioester rompt la liaison acyle–soufre et régénère notamment un thiol."
      }
    ],
    "explanation": "La délocalisation du doublet de l’azote vers le carbonyle donne à la liaison $\\ce{C-N}$ un caractère partiel de double liaison."
  }
];
