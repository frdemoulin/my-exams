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
        "content": "Avec le thiol, le chlorure d’acyle forme une amide.",
        "correct": false,
        "explanation": "Avec un thiol, le chlorure d’acyle forme un thioester et non une amide."
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
    "explanation": "Avec un même chlorure d’acyle, un alcool, une amine et un thiol conduisent respectivement à un ester, une amide et un thioester."
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
        "content": "L’amide est la fonction la plus facile à hydrolyser chimiquement.",
        "correct": false,
        "explanation": "Dans les conditions chimiques comparées, l’ester est plus facilement hydrolysé que l’amide."
      },
      {
        "content": "L'ester n’est pas hydrolysable.",
        "correct": false,
        "explanation": "La fonction ester est hydrolysable ; elle est même plus facilement hydrolysée chimiquement que l’amide dans la comparaison retenue."
      },
      {
        "content": "L'amide est hydrolysable mais demande des conditions chimiques plus sévères.",
        "correct": true,
        "explanation": "L’hydrolyse chimique d’une amide nécessite un milieu très acide et du chauffage."
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
        "explanation": "La plus grande fragilité de l’ester permet de l’hydrolyser dans des conditions qui préservent l’amide."
      },
      {
        "content": "L'amide doit être hydrolysée en premier.",
        "correct": false,
        "explanation": "L’amide est plus résistante à l’hydrolyse que l’ester ; elle n’a donc pas à être hydrolysée en premier."
      },
      {
        "content": "Des conditions douces hydrolysent l’amide mais préservent l’ester.",
        "correct": false,
        "explanation": "Les conditions douces permettent l’inverse : hydrolyser l’ester tout en préservant l’amide."
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
        "explanation": "Un alcane n’est pas le nucléophile utilisé pour former une liaison peptidique à partir d’un acide activé."
      },
      {
        "content": "Alcool → amide.",
        "correct": false,
        "explanation": "Un alcool réagit avec un acide activé pour former un ester, pas une amide."
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
    "explanation": "À partir d’un acide activé, un alcool forme un ester, une amine une amide et un thiol un thioester."
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
        "explanation": "Les peptidases/protéases catalysent l’hydrolyse des liaisons amide des peptides."
      },
      {
        "content": "Estérases → hydrolyse de fonctions ester.",
        "correct": true,
        "explanation": "Les estérases catalysent l’hydrolyse sélective des fonctions ester."
      },
      {
        "content": "Acétyl-CoA → thioester du CoA-SH.",
        "correct": true,
        "explanation": "L’acétyl-CoA est le thioester biologique formé à partir du groupe thiol du coenzyme A."
      },
      {
        "content": "L’existence de protéases signifie que l’amide est chimiquement plus fragile que l’ester.",
        "correct": false,
        "explanation": "L’hydrolyse enzymatique des amides ne signifie pas qu’elles sont chimiquement plus fragiles que les esters."
      },
      {
        "content": "Liaison peptidique → fonction amide.",
        "correct": true,
        "explanation": "La liaison peptidique correspond à une fonction amide reliant deux résidus d’acides aminés."
      }
    ],
    "explanation": "Les fonctions ester, amide et thioester ont des exemples biologiques distincts : estérases, liaisons peptidiques/protéases et acétyl-CoA."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des propriétés électroniques des esters et des amides:",
    "choices": [
      {
        "content": "Le carbone alpha d’un ester est toujours électrophile.",
        "correct": false,
        "explanation": "Le carbone alpha de l’ester peut devenir nucléophile après déprotonation ; il n’est pas toujours électrophile."
      },
      {
        "content": "Le carbone carbonylé d'un ester n’est pas électrophile.",
        "correct": false,
        "explanation": "La polarisation de la liaison $\\ce{C=O}$ rend le carbone carbonylé de l’ester électrophile."
      },
      {
        "content": "Le carbone alpha d'un ester peut devenir nucléophile sous l'action d'une base forte.",
        "correct": true,
        "explanation": "Une base forte peut déprotoner la position alpha et créer un centre carboné nucléophile."
      },
      {
        "content": "Le doublet de l'azote d'une amide est délocalisé vers le carbonyle.",
        "correct": true,
        "explanation": "Le doublet de l’azote d’une amide est délocalisé vers le groupe carbonyle."
      },
      {
        "content": "La liaison C-N amide est décrite comme totalement libre en rotation.",
        "correct": false,
        "explanation": "Le caractère partiel de double liaison de $\\ce{C-N}$ limite fortement la rotation de l’amide."
      }
    ],
    "explanation": "Dans un ester, le carbone carbonylé est électrophile et le carbone alpha peut devenir nucléophile ; dans une amide, le doublet de l’azote est délocalisé vers le carbonyle."
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
        "explanation": "L’acétyl-CoA contient bien une liaison thioester entre le groupe acétyle et le soufre du coenzyme A."
      },
      {
        "content": "Son hydrolyse libère CoA-SH et acide acétique.",
        "correct": true,
        "explanation": "L’hydrolyse de l’acétyl-CoA rompt la liaison thioester et libère $\\ce{CoA-SH}$ et l’acide acétique."
      },
      {
        "content": "La réaction inverse peut être réalisée par des enzymes.",
        "correct": true,
        "explanation": "La liaison thioester peut être reformée enzymatiquement à partir des partenaires issus de l’hydrolyse."
      },
      {
        "content": "CoA-SH est un alcool.",
        "correct": false,
        "explanation": "$\\ce{CoA-SH}$ porte une fonction thiol $\\ce{-SH}$ et non une fonction alcool."
      },
      {
        "content": "Un thioester comporte le motif $\\ce{R-C(=O)-SR'}$.",
        "correct": true,
        "explanation": "Le soufre remplace l’oxygène alkoxy d’un ester classique."
      }
    ],
    "explanation": "L’acétyl-CoA contient une liaison thioester ; son hydrolyse libère $\\ce{CoA-SH}$ et l’acide acétique, et la liaison peut être reformée enzymatiquement."
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
        "explanation": "Un alcène n’est pas l’une des deux fonctions comparées pour cette sélectivité d’hydrolyse."
      },
      {
        "content": "Thioester.",
        "correct": false,
        "explanation": "Le thioester est hydrolysable, mais la sélectivité décrite ici compare spécifiquement une fonction ester et une fonction amide présentes dans la même molécule."
      },
      {
        "content": "Ester.",
        "correct": true,
        "explanation": "La fonction ester est la fonction la plus facilement hydrolysable des deux dans la comparaison."
      },
      {
        "content": "Amide.",
        "correct": true,
        "explanation": "La fonction amide est plus résistante à l’hydrolyse et peut rester intacte lors d’une hydrolyse douce de l’ester."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "Un alcane n’est pas une fonction hydrolysable de la comparaison ester/amide."
      }
    ],
    "explanation": "La sélectivité d’hydrolyse considérée repose sur la différence de stabilité entre une fonction ester, plus facile à hydrolyser, et une fonction amide, plus résistante."
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
        "explanation": "Dans les conditions comparées, l’amide est plus résistante à l’hydrolyse chimique que l’ester."
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
        "content": "La première étape doit hydrolyser l’amide avant l’ester.",
        "correct": false,
        "explanation": "La séquence sélective commence par l’ester, plus facilement hydrolysable, puis traite l’amide dans des conditions plus sévères."
      },
      {
        "content": "Étape 1: conditions suffisamment douces pour hydrolyser l'ester.",
        "correct": true,
        "explanation": "Comme l’ester est plus facilement hydrolysable que l’amide, des conditions douces peuvent hydrolyser l’ester tout en préservant l’amide."
      },
      {
        "content": "Étape 2: milieu très acide avec chauffage pour hydrolyser l'amide.",
        "correct": true,
        "explanation": "L’hydrolyse chimique de l’amide nécessite un milieu très acide et un chauffage."
      },
      {
        "content": "L'ordre inverse préserverait nécessairement l'ester pendant l'hydrolyse de l'amide.",
        "correct": false,
        "explanation": "Hydrolyser l’amide exige des conditions sévères qui affecteraient déjà l’ester, plus fragile."
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
        "explanation": "Les trois produits se distinguent par l’hétéroatome lié au carbonyle : O pour l’ester, N pour l’amide et S pour le thioester."
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
        "content": "Dans l’expérience A, le carbone carbonylé repousse le nucléophile.",
        "correct": false,
        "explanation": "Dans l’expérience A, le nucléophile attaque le carbone carbonylé électrophile."
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
        "explanation": "L’ester possède un oxygène lié au carbonyle, tandis que l’amide possède un azote ; les hétéroatomes sont donc différents."
      },
      {
        "content": "La liaison $\\ce{C-N}$ d’une amide est décrite comme totalement libre en rotation à température ordinaire.",
        "correct": false,
        "explanation": "Le caractère partiel de double liaison perturbe fortement la rotation."
      },
      {
        "content": "L'ester n’est pas plus facilement hydrolysé chimiquement.",
        "correct": false,
        "explanation": "Dans les conditions chimiques comparées, l’ester est plus facilement hydrolysé que l’amide."
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
    "explanation": "L’ester et l’amide diffèrent notamment par l’hétéroatome lié au carbonyle et par la mobilité de la liaison correspondante : $\\ce{C-O}$ est plus libre que $\\ce{C-N}$ amide."
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
        "explanation": "Les peptidases/protéases catalysent l’hydrolyse sélective des liaisons amide des peptides."
      },
      {
        "content": "Trypsine, chymotrypsine et pepsine sont des exemples de peptidases digestives.",
        "correct": true,
        "explanation": "Ces trois enzymes sont des protéases capables d’hydrolyser des liaisons peptidiques."
      },
      {
        "content": "L'exemple prouve que l'amide est chimiquement plus fragile que l'ester.",
        "correct": false,
        "explanation": "L'hydrolyse enzymatique ne renverse pas la comparaison chimique."
      },
      {
        "content": "Une protéase est une estérase.",
        "correct": false,
        "explanation": "Une protéase hydrolyse les liaisons peptidiques ; une estérase est associée aux fonctions ester."
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
        "content": "La liaison peptidique ne possède pas de fonction amide.",
        "correct": false,
        "explanation": "La liaison peptidique est précisément une fonction amide."
      },
      {
        "content": "Le doublet de l'azote est délocalisé vers le carbonyle.",
        "correct": true,
        "explanation": "Le doublet de l’azote est délocalisé vers le groupe carbonyle de l’amide."
      },
      {
        "content": "La liaison C-N acquiert un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La délocalisation du doublet de l’azote confère à la liaison $\\ce{C-N}$ un caractère partiel de double liaison."
      },
      {
        "content": "La rotation autour de C-N est donc fortement perturbée.",
        "correct": true,
        "explanation": "Ce caractère partiel de double liaison limite la rotation autour de $\\ce{C-N}$ et rigidifie la liaison peptidique."
      },
      {
        "content": "Le résidu proline peut influencer la structure secondaire de la chaîne.",
        "correct": true,
        "explanation": "Le cycle de la proline contraint la géométrie locale du peptide et peut ainsi influencer sa structure secondaire."
      }
    ],
    "explanation": "La liaison peptidique est une fonction amide : la délocalisation du doublet de l’azote vers le carbonyle confère à $\\ce{C-N}$ un caractère partiel de double liaison et limite sa rotation."
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
        "content": "L’hydrolyse de l’acétyl-CoA ne régénère pas $\\ce{CoA-SH}$.",
        "correct": false,
        "explanation": "L’hydrolyse de l’acétyl-CoA régénère $\\ce{CoA-SH}$."
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
    "question": "Un étudiant affirme : « amine et amide ont le même doublet d’azote disponible ». Quelles propositions corrigent cette affirmation ?",
    "choices": [
      {
        "content": "Le carbonyle adjacent est sans effet sur l'azote.",
        "correct": false,
        "explanation": "Le carbonyle adjacent est précisément à l’origine de la délocalisation du doublet de l’azote."
      },
      {
        "content": "La liaison carbone-azote d’une amide possède un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La délocalisation du doublet de l’azote vers le carbonyle limite la libre rotation autour de la liaison $\\ce{C-N}$."
      },
      {
        "content": "Le doublet de N de l'amide est délocalisé.",
        "correct": true,
        "explanation": "Le doublet de l’azote participe au système délocalisé avec le carbonyle."
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
    "explanation": "Dans une amide, le carbonyle voisin attire et délocalise le doublet de l’azote ; ce doublet est donc moins disponible que dans une amine simple."
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
        "explanation": "Après déprotonation en alpha par la base forte, l’électrophile se fixe sur ce carbone devenu nucléophile."
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
        "content": "La base forte transforme le carbone carbonylé en centre nucléophile.",
        "correct": false,
        "explanation": "La base forte déprotone la position alpha ; elle ne transforme pas le carbone carbonylé en centre nucléophile."
      },
      {
        "content": "La base rend le carbone alpha plus nucléophile.",
        "correct": true,
        "explanation": "Une base forte peut arracher un hydrogène en position alpha du carbonyle et créer un centre carboné nucléophile."
      }
    ],
    "explanation": "Une base forte peut déprotoner le carbone alpha d’un ester et le rendre nucléophile ; l’électrophile ajouté ensuite se fixe sur ce carbone."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des produits d’hydrolyse d’un ester, d’une amide et d’un thioester, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Thioester → acide carboxylique sans formation de thiol.",
        "correct": false,
        "explanation": "L’hydrolyse d’un thioester donne un acide carboxylique et un thiol."
      },
      {
        "content": "Ester acide → acide carboxylique + alcool.",
        "correct": true,
        "explanation": "L’hydrolyse acide d’un ester conduit à un acide carboxylique et à un alcool."
      },
      {
        "content": "Amide en milieu très acide et chauffé → acide carboxylique + amine.",
        "correct": true,
        "explanation": "Dans le bilan simplifié, l’hydrolyse d’une amide conduit à un acide carboxylique et à une amine ; elle nécessite ici un milieu très acide et du chauffage."
      },
      {
        "content": "Thioester → acide carboxylique + thiol.",
        "correct": true,
        "explanation": "L’hydrolyse d’un thioester conduit à un acide carboxylique et à un thiol."
      },
      {
        "content": "Les trois hydrolyses libèrent nécessairement le même partenaire portant l’hétéroatome.",
        "correct": false,
        "explanation": "Les partenaires libérés diffèrent : alcool pour l’ester, composante aminée pour l’amide et thiol pour le thioester."
      }
    ],
    "explanation": "Les hydrolyses libèrent des partenaires différents : ester → alcool, amide → amine, thioester → thiol."
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
        "explanation": "Une base forte peut déprotoner le carbone alpha d’un ester et le rendre nucléophile."
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
        "explanation": "Un acide carboxylique non activé et une amine forment d’abord un sel acide-base, pas directement une amide."
      },
      {
        "content": "Une estérase hydrolyse sélectivement une liaison peptidique dans l'exemple.",
        "correct": false,
        "explanation": "Les liaisons peptidiques sont hydrolysées par des peptidases/protéases ; les estérases sont associées aux esters."
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
