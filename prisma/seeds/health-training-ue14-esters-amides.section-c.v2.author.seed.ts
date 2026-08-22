import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.5 – Section C – Amides : hydrolyse, sélectivité et propriétés électroniques
 */

export const UE14_CH9_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 57,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la préparation d'une amide:",
    "choices": [
      {
        "content": "Un anhydride d'acide peut jouer le rôle d'acide activé.",
        "correct": true,
        "explanation": "Un anhydride d’acide fait partie des dérivés activés d’acides carboxyliques."
      },
      {
        "content": "Un acide carboxylique non activé et une amine donnent directement l'amide dans le modèle.",
        "correct": false,
        "explanation": "Sans activation préalable, l’acide carboxylique et l’amine forment d’abord un sel acide-base."
      },
      {
        "content": "Un alcool est le nucléophile nécessaire à la formation d’une amide.",
        "correct": false,
        "explanation": "Une amide se forme avec une amine ; un alcool conduit plutôt à un ester."
      },
      {
        "content": "Un acide activé peut réagir avec une amine.",
        "correct": true,
        "explanation": "L’amine attaque le carbone acylé d’un dérivé activé pour former une amide."
      },
      {
        "content": "Un chlorure d'acyle peut jouer le rôle d'acide activé.",
        "correct": true,
        "explanation": "Un chlorure d’acyle est un dérivé activé de l’acide carboxylique et peut servir à former une amide."
      }
    ],
    "explanation": "Un chlorure d’acyle est un dérivé activé de l’acide carboxylique et peut servir à former une amide."
  },
  {
    "order": 58,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel produit est mis en avant lorsque l'on mélange un acide carboxylique non activé et une amine?",
    "choices": [
      {
        "content": "Un sel acide-base.",
        "correct": true,
        "explanation": "Le transfert de proton entre l’acide carboxylique et l’amine conduit au sel acide-base."
      },
      {
        "content": "Un organomagnésien.",
        "correct": false,
        "explanation": "La réaction acide-amine ne fait intervenir aucun magnésium et ne forme pas d’organomagnésien."
      },
      {
        "content": "Alcène.",
        "correct": false,
        "explanation": "Cette transformation ne crée pas de double liaison carbone-carbone."
      },
      {
        "content": "Un ester.",
        "correct": false,
        "explanation": "La formation d’un ester nécessite un alcool et un acide activé, ce qui n’est pas le couple considéré."
      },
      {
        "content": "Un thioester.",
        "correct": false,
        "explanation": "Un thioester se forme avec un partenaire soufré de type thiol ; ce n’est pas le produit de la réaction acide-amine considérée."
      }
    ],
    "explanation": "Un acide carboxylique non activé et une amine donnent d’abord un sel par réaction acido-basique, et non directement une amide."
  },
  {
    "order": 59,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'hydrolyse chimique d'une amide:",
    "choices": [
      {
        "content": "Elle est décrite comme plus facile que l'hydrolyse d'un ester.",
        "correct": false,
        "explanation": "Une amide est plus résistante à l’hydrolyse qu’un ester dans les conditions comparées."
      },
      {
        "content": "L’amide est plus facile à hydrolyser chimiquement que l’ester.",
        "correct": false,
        "explanation": "Dans les conditions comparées, l’amide est plus résistante à l’hydrolyse chimique que l’ester."
      },
      {
        "content": "L'hydrolyse d'une amide est plus difficile que celle d'un ester.",
        "correct": true,
        "explanation": "Cette différence de réactivité permet d’hydrolyser plus facilement un ester tout en laissant une amide intacte dans des conditions douces."
      },
      {
        "content": "L’hydrolyse chimique d’une amide nécessite un milieu très acide.",
        "correct": true,
        "explanation": "L’hydrolyse chimique d’une amide exige des conditions acides fortes, associées à un chauffage."
      },
      {
        "content": "L'hydrolyse chimique d'une amide nécessite du chauffage.",
        "correct": true,
        "explanation": "Le chauffage fournit l’énergie nécessaire aux conditions sévères retenues pour l’hydrolyse chimique d’une amide."
      }
    ],
    "explanation": "L’hydrolyse d’une amide rompt la liaison acyle–azote et conduit, dans le bilan simplifié, à un acide carboxylique et à une amine."
  },
  {
    "order": 60,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Lors de l'hydrolyse acide d'une amide $\\mathrm{RCONHR'}$ dans le modèle:",
    "choices": [
      {
        "content": "Une amine fait partie des produits d’hydrolyse.",
        "correct": true,
        "explanation": "Dans le bilan simplifié, l’hydrolyse d’une amide conduit à un acide carboxylique et à une amine."
      },
      {
        "content": "La liaison acyle-azote est rompue.",
        "correct": true,
        "explanation": "L’hydrolyse rompt la liaison entre le groupe acyle et l’azote."
      },
      {
        "content": "Une fonction ester est nécessairement créée.",
        "correct": false,
        "explanation": "L’hydrolyse d’une amide forme un acide carboxylique et une composante aminée ; elle ne crée pas nécessairement un ester."
      },
      {
        "content": "L’acide carboxylique correspondant est formé.",
        "correct": true,
        "explanation": "Le fragment acyle est converti en acide carboxylique au cours de l’hydrolyse."
      },
      {
        "content": "Un acide carboxylique n’est pas formé.",
        "correct": false,
        "explanation": "Le fragment acyle de l’amide est converti en acide carboxylique au cours de l’hydrolyse."
      }
    ],
    "explanation": "L’hydrolyse chimique d’une amide rompt la liaison acyle–azote et conduit à un acide carboxylique ainsi qu’à une amine."
  },
  {
    "order": 61,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une molécule possède à la fois une fonction ester et une fonction amide. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Dans des conditions douces, l’amide est hydrolysée tandis que l’ester reste intact.",
        "correct": false,
        "explanation": "C’est l’ester, plus fragile, qui peut être hydrolysé dans des conditions laissant l’amide intacte."
      },
      {
        "content": "Des conditions suffisamment douces peuvent hydrolyser l'ester sans toucher à l'amide.",
        "correct": true,
        "explanation": "L’ester, plus facilement hydrolysable, peut être rompu dans des conditions qui laissent l’amide intacte."
      },
      {
        "content": "L'ester est plus fragile vis-à-vis de l'hydrolyse chimique.",
        "correct": true,
        "explanation": "La fonction ester est plus facilement hydrolysée que la fonction amide dans les conditions comparées."
      },
      {
        "content": "Des conditions capables d'hydrolyser chimiquement l'amide auront déjà affecté l'ester.",
        "correct": true,
        "explanation": "Des conditions assez sévères pour hydrolyser l’amide auront déjà hydrolysé l’ester, plus fragile."
      },
      {
        "content": "L'amide s'hydrolyse toujours avant l'ester.",
        "correct": false,
        "explanation": "C’est l’ester qui est hydrolysé le plus facilement ; l’amide est plus résistante."
      }
    ],
    "explanation": "L’ester est plus facilement hydrolysé que l’amide."
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Physiologiquement, quelles associations enzyme → fonction hydrolysée sont correctes ?",
    "choices": [
      {
        "content": "Trypsine → fonction amide des peptides/protéines.",
        "correct": true,
        "explanation": "La trypsine fait partie des peptidases/protéases digestives et hydrolyse des liaisons peptidiques."
      },
      {
        "content": "Chymotrypsine → ester uniquement.",
        "correct": false,
        "explanation": "La chymotrypsine est une peptidase/protéase digestive qui hydrolyse des liaisons peptidiques, et non uniquement des esters."
      },
      {
        "content": "Pepsine → fonction ester uniquement.",
        "correct": false,
        "explanation": "La pepsine est une peptidase/protéase digestive qui hydrolyse des liaisons peptidiques, et non uniquement des esters."
      },
      {
        "content": "Estérases → esters.",
        "correct": true,
        "explanation": "Les estérases catalysent l’hydrolyse des fonctions ester."
      },
      {
        "content": "Peptidases/protéases → amides.",
        "correct": true,
        "explanation": "Les peptidases et protéases catalysent l’hydrolyse des liaisons amide des peptides."
      }
    ],
    "explanation": "Les estérases hydrolysent les esters, tandis que les peptidases ou protéases hydrolysent les liaisons amide des peptides."
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des peptidases digestives, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Trypsine.",
        "correct": true,
        "explanation": "La trypsine est une protéase capable d’hydrolyser des liaisons peptidiques."
      },
      {
        "content": "Chymotrypsine.",
        "correct": true,
        "explanation": "La chymotrypsine est une protéase capable d’hydrolyser des liaisons peptidiques."
      },
      {
        "content": "Pepsine.",
        "correct": true,
        "explanation": "La pepsine est une protéase capable d’hydrolyser des liaisons peptidiques."
      },
      {
        "content": "Estérase uniquement.",
        "correct": false,
        "explanation": "Une estérase hydrolyse des fonctions ester ; elle n’est pas classée ici parmi les peptidases digestives."
      },
      {
        "content": "Les peptidases/protéases hydrolysent des liaisons peptidiques.",
        "correct": true,
        "explanation": "Les liaisons peptidiques sont des fonctions amides pouvant être hydrolysées par des peptidases ou protéases."
      }
    ],
    "explanation": "La trypsine, la chymotrypsine et la pepsine sont des peptidases/protéases digestives qui hydrolysent des liaisons peptidiques."
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de peptidases digestives comporte la liste suivante : trypsine, chymotrypsine et pepsine ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "La liste comporte trois enzymes : trypsine, chymotrypsine et pepsine."
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la liaison C-N d'une amide dans le modèle étudié:",
    "choices": [
      {
        "content": "La libre rotation y est fortement perturbée.",
        "correct": true,
        "explanation": "Le caractère partiel de double liaison de $\\ce{C-N}$ limite fortement la rotation autour de cette liaison."
      },
      {
        "content": "La rotation autour de la liaison $\\ce{C-N}$ demande un apport d'énergie ; un chauffage peut la favoriser.",
        "correct": true,
        "explanation": "Le caractère partiel de double liaison de $\\ce{C-N}$ crée une barrière de rotation qui peut être franchie grâce à un apport d'énergie."
      },
      {
        "content": "Elle se comporte exactement comme une simple liaison C-N d'amine sans délocalisation.",
        "correct": false,
        "explanation": "La liaison $\\ce{C-N}$ de l’amide est influencée par la délocalisation du doublet de l’azote ; elle ne se comporte pas comme une simple liaison d’amine."
      },
      {
        "content": "La liaison $\\ce{C-N}$ d’une amide est décrite comme totalement libre en rotation à température ordinaire.",
        "correct": false,
        "explanation": "Le caractère partiel de double liaison perturbe fortement la rotation."
      },
      {
        "content": "Elle possède un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La délocalisation du doublet de l’azote vers le carbonyle confère à la liaison $\\ce{C-N}$ un caractère partiel de double liaison."
      }
    ],
    "explanation": "La liaison $\\ce{C-N}$ de l’amide possède un caractère partiel de double liaison, ce qui limite fortement sa rotation et crée une barrière énergétique."
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelle origine électronique explique le caractère partiel de double liaison de l’amide ?",
    "choices": [
      {
        "content": "La liaison $\\ce{C-N}$ d’une amide est décrite comme totalement libre en rotation à température ordinaire.",
        "correct": false,
        "explanation": "Le caractère partiel de double liaison perturbe fortement la rotation."
      },
      {
        "content": "L'oxygène du carbonyle n’est pas électroattracteur.",
        "correct": false,
        "explanation": "L’oxygène du carbonyle exerce un effet électroattracteur qui favorise la délocalisation du doublet de l’azote."
      },
      {
        "content": "Le doublet libre de l'azote est attiré/délocalisé vers le système carbonylé.",
        "correct": true,
        "explanation": "Dans une amide, le doublet de l’azote est délocalisé vers le groupe carbonyle, ce qui confère à $\\ce{C-N}$ un caractère partiel de double liaison."
      },
      {
        "content": "Cette délocalisation réduit la disponibilité du doublet de l'azote.",
        "correct": true,
        "explanation": "La délocalisation du doublet vers le carbonyle le rend moins disponible sur l’azote."
      },
      {
        "content": "L'azote ne possède aucun doublet électronique.",
        "correct": false,
        "explanation": "L’azote possède bien un doublet non liant ; celui-ci est simplement délocalisé vers le carbonyle."
      }
    ],
    "explanation": "La délocalisation du doublet de l’azote vers le carbonyle donne à la liaison $\\ce{C-N}$ un caractère partiel de double liaison."
  },
  {
    "order": 67,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare une amine et une amide vis-à-vis de leur doublet d’azote. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'amide et l'amine ont exactement la même réactivité vis-à-vis des électrophiles.",
        "correct": false,
        "explanation": "Une amine et une amide n’ont pas la même réactivité : dans l’amide, le doublet de l’azote est délocalisé vers le carbonyle."
      },
      {
        "content": "La présence du carbonyle adjacent explique cette différence.",
        "correct": true,
        "explanation": "Le carbonyle adjacent permet la délocalisation du doublet de l’azote et explique la différence avec une amine."
      },
      {
        "content": "Le doublet de l’azote de l’amide reste totalement localisé sur l’azote.",
        "correct": false,
        "explanation": "Dans une amide, le doublet de l’azote est délocalisé vers le carbonyle ; il n’est donc pas totalement localisé sur N."
      },
      {
        "content": "Dans l'amide, le doublet de l'azote est délocalisé.",
        "correct": true,
        "explanation": "Le doublet de l’azote participe à la délocalisation qui confère à $\\ce{C-N}$ un caractère partiel de double liaison."
      },
      {
        "content": "Il est donc moins disponible pour une réaction avec un électrophile que dans une amine simple.",
        "correct": true,
        "explanation": "La délocalisation diminue la disponibilité du doublet de l’azote par rapport à celui d’une amine simple."
      }
    ],
    "explanation": "Dans une amide, le doublet de l’azote est délocalisé vers le carbonyle et devient moins disponible que dans une amine simple."
  },
  {
    "order": 68,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule bifonctionnelle contient un ester et une amide. Elle est soumise à une hydrolyse douce. Quelles conclusions sont cohérentes?",
    "choices": [
      {
        "content": "L'ester ne peut pas être hydrolysé sélectivement.",
        "correct": false,
        "explanation": "La fonction ester est plus facilement hydrolysable que l’amide, ce qui permet une hydrolyse sélective dans des conditions adaptées."
      },
      {
        "content": "L'amide peut rester intacte.",
        "correct": true,
        "explanation": "La fonction ester est plus facilement hydrolysable que l’amide, ce qui permet une hydrolyse sélective dans des conditions adaptées."
      },
      {
        "content": "Cette différence peut être exploitée en synthèse.",
        "correct": true,
        "explanation": "La différence de facilité d’hydrolyse permet de cibler l’ester tout en préservant l’amide dans des conditions adaptées."
      },
      {
        "content": "L'amide doit obligatoirement s'hydrolyser avant l'ester.",
        "correct": false,
        "explanation": "L’amide est plus résistante que l’ester ; elle ne s’hydrolyse donc pas obligatoirement avant lui."
      },
      {
        "content": "L’hydrolyse d’une amide est plus difficile que celle d’un ester dans les conditions comparées.",
        "correct": true,
        "explanation": "La fonction amide est plus résistante et nécessite des conditions plus sévères pour l’hydrolyse chimique."
      }
    ],
    "explanation": "Dans une molécule portant un ester et une amide, des conditions douces peuvent hydrolyser l’ester plus fragile tout en laissant l’amide intacte."
  },
  {
    "order": 69,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La même molécule ester + amide est maintenant chauffée en milieu très acide pour hydrolyser l'amide. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'ester est plus résistant que l'amide.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide ; il est donc moins résistant dans les conditions comparées."
      },
      {
        "content": "L’ester peut rester intact pendant l’hydrolyse chimique de l’amide.",
        "correct": false,
        "explanation": "Des conditions assez sévères pour hydrolyser l’amide auront déjà affecté l’ester, plus fragile."
      },
      {
        "content": "Les conditions sont compatibles avec l'hydrolyse de l'amide.",
        "correct": true,
        "explanation": "Un milieu très acide associé à un chauffage fournit les conditions sévères nécessaires à l’hydrolyse chimique d’une amide."
      },
      {
        "content": "La fonction ester, plus facilement hydrolysable, aura été affectée avant ou pendant ce traitement.",
        "correct": true,
        "explanation": "Comme l’ester est plus facilement hydrolysé, il ne peut pas être supposé intact après un traitement suffisamment sévère pour hydrolyser l’amide."
      },
      {
        "content": "On ne peut pas espérer conserver intact l'ester tout en hydrolysant chimiquement l'amide dans ce modèle.",
        "correct": true,
        "explanation": "Les conditions nécessaires à l’hydrolyse de l’amide sont assez sévères pour affecter auparavant la fonction ester."
      }
    ],
    "explanation": "L’ester est plus facilement hydrolysable que l’amide ; cette différence de stabilité permet une hydrolyse sélective dans des conditions adaptées."
  },
  {
    "order": 70,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pourquoi la liaison amide perturbe-t-elle la libre rotation?",
    "choices": [
      {
        "content": "Le doublet de N n’est pas délocalisé vers le carbonyle.",
        "correct": false,
        "explanation": "Le doublet de l’azote est au contraire délocalisé vers le carbonyle dans une amide."
      },
      {
        "content": "Rompre temporairement cette conjugaison pour tourner demande de l'énergie.",
        "correct": true,
        "explanation": "La rotation autour de $\\ce{C-N}$ nécessite de franchir la barrière liée à la délocalisation électronique ; un apport d’énergie la favorise."
      },
      {
        "content": "Parce que l'amide contient deux atomes de soufre.",
        "correct": false,
        "explanation": "Une amide simple comporte un oxygène et un azote, pas deux atomes de soufre."
      },
      {
        "content": "La liaison $\\ce{C-N}$ d’une amide est décrite comme totalement libre en rotation à température ordinaire.",
        "correct": false,
        "explanation": "Le caractère partiel de double liaison perturbe fortement la rotation."
      },
      {
        "content": "La liaison C-N possède un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La délocalisation du doublet de l’azote vers le carbonyle confère à la liaison $\\ce{C-N}$ un caractère partiel de double liaison."
      }
    ],
    "explanation": "La délocalisation du doublet de l’azote vers le carbonyle confère à la liaison $\\ce{C-N}$ un caractère partiel de double liaison, ce qui limite sa rotation."
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des hétéroatomes de la fonction amide:",
    "choices": [
      {
        "content": "Une liaison peptidique relie les résidus par un motif ester.",
        "correct": false,
        "explanation": "La liaison peptidique est un motif amide comportant un azote lié au carbonyle."
      },
      {
        "content": "La fonction amide comporte un atome d'oxygène.",
        "correct": true,
        "explanation": "L’oxygène de la fonction amide est celui du groupe carbonyle $\\ce{C=O}$."
      },
      {
        "content": "La fonction amide comporte un atome d'azote.",
        "correct": true,
        "explanation": "L’azote est directement lié au carbone du groupe carbonyle dans une amide."
      },
      {
        "content": "L'effet électroattracteur de l'oxygène influence le doublet de l'azote.",
        "correct": true,
        "explanation": "Le carbonyle favorise la délocalisation du doublet de l’azote, ce qui diminue sa disponibilité électronique."
      },
      {
        "content": "La fonction amide comporte obligatoirement deux oxygènes comme l'ester.",
        "correct": false,
        "explanation": "Une amide simple comporte un oxygène carbonylé et un azote, tandis qu’un ester comporte deux oxygènes."
      }
    ],
    "explanation": "Une amide comporte un oxygène carbonylé et un azote directement lié au carbonyle ; l’oxygène attire le doublet de l’azote."
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel mécanisme structural explique le mieux que le doublet de l’azote d’une amide soit moins disponible ?",
    "choices": [
      {
        "content": "L'absence totale de doublet sur N.",
        "correct": false,
        "explanation": "L’azote possède bien un doublet ; c’est sa délocalisation vers le carbonyle qui réduit sa disponibilité."
      },
      {
        "content": "Sa délocalisation vers le carbonyle.",
        "correct": true,
        "explanation": "La délocalisation du doublet de l’azote vers le carbonyle explique le caractère partiel de double liaison de $\\ce{C-N}$."
      },
      {
        "content": "La présence obligatoire d'un ion Mg.",
        "correct": false,
        "explanation": "Aucun ion magnésium n’est nécessaire pour expliquer la délocalisation électronique d’une fonction amide."
      },
      {
        "content": "Une rotation totalement libre autour de la liaison $\\ce{C-N}$.",
        "correct": false,
        "explanation": "La rotation n’est pas totalement libre : le caractère partiel de double liaison de $\\ce{C-N}$ la limite fortement."
      },
      {
        "content": "L’absence de tout groupe carbonyle.",
        "correct": false,
        "explanation": "Le groupe carbonyle est précisément nécessaire à la délocalisation du doublet de l’azote."
      }
    ],
    "explanation": "La délocalisation du doublet de l’azote vers le carbonyle explique le caractère partiel de double liaison de $\\ce{C-N}$."
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un contexte digestif, quelles propositions sont cohérentes avec l’hydrolyse des liaisons peptidiques ?",
    "choices": [
      {
        "content": "Des protéases peuvent hydrolyser sélectivement des fonctions amides des peptides.",
        "correct": true,
        "explanation": "Les protéases ou peptidases catalysent l’hydrolyse des liaisons amide des peptides."
      },
      {
        "content": "Trypsine, chymotrypsine et pepsine sont des exemples de peptidases digestives.",
        "correct": true,
        "explanation": "Ces trois enzymes sont des protéases digestives capables d’hydrolyser des liaisons peptidiques."
      },
      {
        "content": "Les estérases sont, elles, associées aux fonctions ester.",
        "correct": true,
        "explanation": "Les estérases catalysent l’hydrolyse des fonctions ester."
      },
      {
        "content": "Toutes les hydrolyses physiologiques exigent un milieu très acide et un chauffage externe.",
        "correct": false,
        "explanation": "Les enzymes permettent des hydrolyses sélectives dans l'organisme."
      },
      {
        "content": "Les liaisons amide des peptides sont chimiquement plus faciles à hydrolyser que les esters.",
        "correct": false,
        "explanation": "Chimiquement, l’amide est plus résistante à l’hydrolyse que l’ester ; les enzymes permettent une hydrolyse physiologique sélective."
      }
    ],
    "explanation": "Les peptidases ou protéases hydrolysent les liaisons peptidiques ; la trypsine, la chymotrypsine et la pepsine en sont des exemples."
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une amide est décrite comme « plus stable à l'hydrolyse » qu'un ester. Quelles conséquences en découlent?",
    "choices": [
      {
        "content": "L'amide est absolument non hydrolysable.",
        "correct": false,
        "explanation": "Une amide peut être hydrolysée, mais elle nécessite des conditions plus sévères qu’un ester."
      },
      {
        "content": "La plus grande stabilité de l’amide signifie qu’elle s’hydrolyse avant l’ester.",
        "correct": false,
        "explanation": "Une plus grande stabilité signifie au contraire que l’amide s’hydrolyse plus difficilement que l’ester."
      },
      {
        "content": "Elle demande des conditions chimiques plus sévères.",
        "correct": true,
        "explanation": "Une amide est plus résistante à l’hydrolyse qu’un ester et nécessite donc des conditions chimiques plus sévères."
      },
      {
        "content": "Un ester ne peut pas être hydrolysé sans toucher à l'amide dans des conditions adaptées.",
        "correct": false,
        "explanation": "Des conditions douces peuvent hydrolyser l’ester, plus fragile, tout en laissant l’amide intacte."
      },
      {
        "content": "Hydrolyser chimiquement l’amide tout en conservant l’ester intact est beaucoup plus difficile.",
        "correct": true,
        "explanation": "Les conditions sévères nécessaires à l’hydrolyse de l’amide affectent aussi l’ester, plus fragile."
      }
    ],
    "explanation": "Une amide reste hydrolysable, mais elle nécessite des conditions chimiques plus sévères qu’un ester."
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel terme générique désigne les enzymes qui hydrolysent sélectivement les fonctions amides des peptides ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "peptidases",
        "proteases",
        "protéases",
        "peptidase",
        "protease",
        "protéase"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Les peptidases, ou protéases, catalysent l’hydrolyse des liaisons peptidiques."
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la liaison peptidique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L’hydrolyse d’une amide est plus difficile que celle d’un ester dans les conditions comparées.",
        "correct": true,
        "explanation": "La fonction amide est plus résistante et nécessite des conditions plus sévères pour l’hydrolyse chimique."
      },
      {
        "content": "Ce n’est pas une liaison amide.",
        "correct": false,
        "explanation": "La liaison peptidique est bien une fonction amide."
      },
      {
        "content": "Son caractère partiel de double liaison limite la rotation.",
        "correct": true,
        "explanation": "Le caractère partiel de double liaison de $\\ce{C-N}$ limite la rotation de la liaison peptidique."
      },
      {
        "content": "Des protéases/peptidases peuvent l'hydrolyser.",
        "correct": true,
        "explanation": "Les peptidases et protéases catalysent l’hydrolyse des liaisons amide des peptides."
      },
      {
        "content": "Elle se comporte comme une liaison C-N totalement libre sans effet électronique du carbonyle.",
        "correct": false,
        "explanation": "La délocalisation du doublet de l’azote donne à $\\ce{C-N}$ un caractère partiel de double liaison ; cette liaison n’est donc pas totalement libre en rotation."
      }
    ],
    "explanation": "La liaison peptidique est une fonction amide : sa liaison $\\ce{C-N}$ à caractère partiel de double liaison limite la rotation et peut être hydrolysée par des protéases."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Une amide est plus difficile à hydrolyser chimiquement qu'un ester.",
        "correct": true,
        "explanation": "Une amide est chimiquement plus résistante à l’hydrolyse qu’un ester dans les conditions comparées."
      },
      {
        "content": "L'hydrolyse chimique de l'amide nécessite un milieu très acide.",
        "correct": true,
        "explanation": "L’hydrolyse chimique d’une amide nécessite des conditions acides fortes dans le modèle étudié."
      },
      {
        "content": "L’hydrolyse chimique d’une amide nécessite également un chauffage.",
        "correct": true,
        "explanation": "Le chauffage apporte l’énergie nécessaire aux conditions sévères utilisées pour hydrolyser chimiquement une amide."
      },
      {
        "content": "La liaison C-N d'une amide a un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La liaison $\ce{C-N}$ de l’amide possède un caractère partiel de double liaison dû à la délocalisation électronique."
      },
      {
        "content": "Le doublet de N est délocalisé.",
        "correct": true,
        "explanation": "Le doublet de l’azote est délocalisé vers le groupe carbonyle, ce qui explique le caractère partiel de double liaison."
      },
      {
        "content": "Une amide est absolument non hydrolysable.",
        "correct": false,
        "explanation": "Une amide peut être hydrolysée, mais elle nécessite des conditions plus sévères qu’un ester."
      },
      {
        "content": "L'ester est toujours plus résistant que l'amide.",
        "correct": false,
        "explanation": "Dans les conditions comparées, l’ester est plus facilement hydrolysé que l’amide."
      },
      {
        "content": "Une estérase hydrolyse sélectivement une liaison peptidique.",
        "correct": false,
        "explanation": "Les liaisons peptidiques sont hydrolysées par des peptidases/protéases, tandis que les estérases hydrolysent les esters."
      },
      {
        "content": "La libre rotation C-N est totale et sans coût énergétique.",
        "correct": false,
        "explanation": "Le caractère partiel de double liaison limite fortement la rotation autour de la liaison $\ce{C-N}$."
      },
      {
        "content": "Amine et amide ont nécessairement la même disponibilité du doublet d'azote.",
        "correct": false,
        "explanation": "Dans une amide, le doublet de l’azote est délocalisé vers le carbonyle et est moins disponible que dans une amine."
      }
    ],
    "explanation": "Une amide est chimiquement plus résistante à l’hydrolyse qu’un ester dans les conditions comparées."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux associations correctes.",
    "choices": [
      {
        "content": "Estérases → hydrolyse de fonctions ester.",
        "correct": true,
        "explanation": "Les estérases catalysent l’hydrolyse des fonctions ester."
      },
      {
        "content": "Peptidases/protéases → hydrolyse de fonctions amide des peptides.",
        "correct": true,
        "explanation": "Les peptidases et protéases catalysent l’hydrolyse des liaisons amide des peptides."
      },
      {
        "content": "Trypsine → hydrolyse exclusive de thioesters.",
        "correct": false,
        "explanation": "La trypsine est une peptidase/protéase digestive qui hydrolyse des liaisons peptidiques, et non exclusivement des thioesters."
      },
      {
        "content": "Pepsine → estérase.",
        "correct": false,
        "explanation": "La pepsine est une peptidase/protéase digestive et non une estérase."
      },
      {
        "content": "Une estérase est nécessaire pour hydrolyser une liaison peptidique.",
        "correct": false,
        "explanation": "Les liaisons peptidiques sont hydrolysées par des peptidases/protéases, pas par une estérase dans cette association."
      }
    ],
    "explanation": "Les peptidases et protéases catalysent l’hydrolyse des liaisons amide des peptides."
  }
];
