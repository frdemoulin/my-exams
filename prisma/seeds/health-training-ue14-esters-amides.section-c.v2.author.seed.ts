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
        "explanation": "Autre exemple cité: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un acide carboxylique non activé et une amine donnent directement l'amide dans le modèle.",
        "correct": false,
        "explanation": "Le support met en avant la formation d'un sel."
      },
      {
        "content": "La préparation d’un ester étudiée exige nécessairement une amine comme nucléophile.",
        "correct": false,
        "explanation": "L’ester est formé ici à partir d’un alcool et d’un acide activé."
      },
      {
        "content": "Un acide activé peut réagir avec une amine.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Un chlorure d'acyle peut jouer le rôle d'acide activé.",
        "correct": true,
        "explanation": "Exemple cité: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "L'amidification nécessite ici l'activation de la fonction acide carboxylique."
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
        "explanation": "C'est le contraste présenté avec l'amidification."
      },
      {
        "content": "Un organomagnésien.",
        "correct": false,
        "explanation": "Aucun Mg n'intervient: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Alcène.",
        "correct": false,
        "explanation": "Cette transformation ne crée pas de double liaison carbone-carbone."
      },
      {
        "content": "Un ester.",
        "correct": false,
        "explanation": "Il faudrait un alcool et un acide activé."
      },
      {
        "content": "Un thioester.",
        "correct": false,
        "explanation": "Il faudrait un thiol: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Sans activation, la réaction acide + amine est présentée comme une neutralisation acide-base."
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
        "explanation": "C'est l'inverse: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      },
      {
        "content": "Elle est plus difficile que celle d'un ester.",
        "correct": true,
        "explanation": "Cette relation constitue l’un des éléments directement utiles pour prévoir le produit de la réaction."
      },
      {
        "content": "Elle nécessite un milieu très acide dans le modèle présenté.",
        "correct": true,
        "explanation": "Condition donnée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elle nécessite du chauffage.",
        "correct": true,
        "explanation": "Deuxième condition donnée: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La fonction amide est hydrolysable, mais demande des conditions plus sévères que l'ester."
  },
  {
    "order": 60,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Lors de l'hydrolyse acide d'une amide $\\mathrm{RCONHR'}$ dans le modèle:",
    "choices": [
      {
        "content": "La partie amine est retrouvée sous forme protonée en milieu acide.",
        "correct": true,
        "explanation": "Le schéma donne un ammonium."
      },
      {
        "content": "La liaison acyle-azote est rompue.",
        "correct": true,
        "explanation": "C'est le principe de l'hydrolyse de l'amide."
      },
      {
        "content": "Une fonction ester est nécessairement créée.",
        "correct": false,
        "explanation": "Ce n'est pas le bilan."
      },
      {
        "content": "Une fonction ester comporte un groupe carbonyle et un oxygène lié à un groupe carboné.",
        "correct": true,
        "explanation": "Le motif général d’un ester est $\\ce{R-C(=O)-OR'}$."
      },
      {
        "content": "Un acide carboxylique n’est pas formé.",
        "correct": false,
        "explanation": "La relation correcte est: « Un acide carboxylique est formé ». La négation proposée est donc fausse."
      }
    ],
    "explanation": "L'hydrolyse acide de l'amide libère l'acide carboxylique et la composante aminée protonée."
  },
  {
    "order": 61,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une molécule possède à la fois une fonction ester et une fonction amide. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      },
      {
        "content": "Des conditions suffisamment douces peuvent hydrolyser l'ester sans toucher à l'amide.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "L'ester est plus fragile vis-à-vis de l'hydrolyse chimique.",
        "correct": true,
        "explanation": "C'est la base de la sélectivité."
      },
      {
        "content": "Des conditions capables d'hydrolyser chimiquement l'amide auront déjà affecté l'ester.",
        "correct": true,
        "explanation": "Le support l'indique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'amide s'hydrolyse toujours avant l'ester.",
        "correct": false,
        "explanation": "L'ordre est inverse: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La différence de sensibilité ester/amide permet une hydrolyse sélective."
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Physiologiquement, quelles associations enzyme → fonction hydrolysée sont indiquées?",
    "choices": [
      {
        "content": "Trypsine → fonction amide des peptides/protéines.",
        "correct": true,
        "explanation": "Exemple de peptidase/protéase digestive cité."
      },
      {
        "content": "Chymotrypsine → ester uniquement.",
        "correct": false,
        "explanation": "Elle est citée comme protéase/peptidase."
      },
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      },
      {
        "content": "Estérases → esters.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Peptidases/protéases → amides.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Le support distingue hydrolyse enzymatique des esters et hydrolyse sélective des fonctions amides des peptides."
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les enzymes suivantes, lesquelles sont citées comme peptidases digestives?",
    "choices": [
      {
        "content": "Trypsine.",
        "correct": true,
        "explanation": "Citée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Chymotrypsine.",
        "correct": true,
        "explanation": "Citée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Pepsine.",
        "correct": true,
        "explanation": "Citée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Estérase uniquement.",
        "correct": false,
        "explanation": "Les estérases sont associées aux esters, pas présentées comme peptidases."
      },
      {
        "content": "Dans une molécule portant une amide et un ester, des conditions douces peuvent hydrolyser l’ester sans hydrolyser l’amide.",
        "correct": true,
        "explanation": "La fonction ester est plus fragile que la fonction amide."
      }
    ],
    "explanation": "Trypsine, chymotrypsine et pepsine sont les trois exemples donnés."
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien d'exemples de peptidases digestives sont explicitement cités: trypsine, chymotrypsine et pepsine?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Trois enzymes sont citées: trypsine, chymotrypsine et pepsine."
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
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Une rotation demande de l'énergie et la évoque un chauffage.",
        "correct": true,
        "explanation": "Le support relie la rotation à un apport énergétique."
      },
      {
        "content": "Elle se comporte exactement comme une simple liaison C-N d'amine sans délocalisation.",
        "correct": false,
        "explanation": "La délocalisation du doublet distingue l'amide."
      },
      {
        "content": "La liaison $\\ce{C-N}$ d’une amide est décrite comme totalement libre en rotation à température ordinaire.",
        "correct": false,
        "explanation": "Le caractère partiel de double liaison perturbe fortement la rotation."
      },
      {
        "content": "Elle possède un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "Propriété centrale: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le caractère partiel de double liaison rigidifie la fonction amide."
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelle origine électronique -t-elle au caractère partiel de double liaison de l'amide?",
    "choices": [
      {
        "content": "La liaison $\\ce{C-N}$ d’une amide est décrite comme totalement libre en rotation à température ordinaire.",
        "correct": false,
        "explanation": "Le caractère partiel de double liaison perturbe fortement la rotation."
      },
      {
        "content": "L'oxygène du carbonyle n’est pas électroattracteur.",
        "correct": false,
        "explanation": "La relation correcte est: « L'oxygène du carbonyle est électroattracteur ». La négation proposée est donc fausse."
      },
      {
        "content": "Le doublet libre de l'azote est attiré/délocalisé vers le système carbonylé.",
        "correct": true,
        "explanation": "Explication fournie: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Cette délocalisation réduit la disponibilité du doublet de l'azote.",
        "correct": true,
        "explanation": "Conséquence cohérente avec le modèle et son auto-évaluation."
      },
      {
        "content": "L'azote ne possède aucun doublet électronique.",
        "correct": false,
        "explanation": "Il en possède un, mais il est engagé dans la délocalisation."
      }
    ],
    "explanation": "La délocalisation du doublet de N vers le carbonyle explique la liaison C-N partiellement double."
  },
  {
    "order": 67,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare une amine et une amide vis-à-vis de leur doublet d'azote. Quelles propositions sont soutenues par le chapitre?",
    "choices": [
      {
        "content": "L'amide et l'amine ont exactement la même réactivité vis-à-vis des électrophiles.",
        "correct": false,
        "explanation": "La fait précisément distinguer les deux."
      },
      {
        "content": "La présence du carbonyle adjacent explique cette différence.",
        "correct": true,
        "explanation": "C'est l'origine de la délocalisation."
      },
      {
        "content": "Le carbone carbonylé d’un ester est décrit comme fortement nucléophile et repousse tous les nucléophiles.",
        "correct": false,
        "explanation": "Le carbone du carbonyle est au contraire le centre électrophile attaqué par un nucléophile."
      },
      {
        "content": "Dans l'amide, le doublet de l'azote est délocalisé.",
        "correct": true,
        "explanation": "Il participe au caractère partiel de double liaison."
      },
      {
        "content": "Il est donc moins disponible pour une réaction avec un électrophile que dans une amine simple.",
        "correct": true,
        "explanation": "Conséquence mise en avant par l'auto-évaluation."
      }
    ],
    "explanation": "Le carbonyle modifie fortement la disponibilité électronique de l'azote amide."
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
        "explanation": "La relation correcte est: « L'ester peut être hydrolysé sélectivement ». La négation proposée est donc fausse."
      },
      {
        "content": "L'amide peut rester intacte.",
        "correct": true,
        "explanation": "Elle est plus résistante: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Cette différence peut être exploitée en synthèse.",
        "correct": true,
        "explanation": "Application logique de la sélectivité explicitement décrite."
      },
      {
        "content": "L'amide doit obligatoirement s'hydrolyser avant l'ester.",
        "correct": false,
        "explanation": "C'est l'inverse: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’hydrolyse d’une amide est plus difficile que celle d’un ester dans les conditions comparées.",
        "correct": true,
        "explanation": "La fonction amide est plus résistante et nécessite des conditions plus sévères pour l’hydrolyse chimique."
      }
    ],
    "explanation": "L'ester est le groupe le plus sensible aux conditions douces d'hydrolyse."
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
        "explanation": "C'est l'inverse: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      },
      {
        "content": "Les conditions sont compatibles avec l'hydrolyse de l'amide.",
        "correct": true,
        "explanation": "Très acide + chauffage: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La fonction ester, plus fragile, aura été affectée avant ou au cours de ce traitement.",
        "correct": true,
        "explanation": "Cette relation constitue l’un des éléments directement utiles pour prévoir le produit de la réaction."
      },
      {
        "content": "On ne peut pas espérer conserver intact l'ester tout en hydrolysant chimiquement l'amide dans ce modèle.",
        "correct": true,
        "explanation": "Conséquence de la sélectivité: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La hiérarchie de sensibilité impose l'ordre des transformations."
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
        "explanation": "La relation correcte est: « Le doublet de N est délocalisé vers le carbonyle ». La négation proposée est donc fausse."
      },
      {
        "content": "Rompre temporairement cette conjugaison pour tourner demande de l'énergie.",
        "correct": true,
        "explanation": "La évoque un chauffage: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Parce que l'amide contient deux atomes de soufre.",
        "correct": false,
        "explanation": "Elle contient O et N."
      },
      {
        "content": "La liaison $\\ce{C-N}$ d’une amide est décrite comme totalement libre en rotation à température ordinaire.",
        "correct": false,
        "explanation": "Le caractère partiel de double liaison perturbe fortement la rotation."
      },
      {
        "content": "La liaison C-N possède un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "Cause directe: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La rigidité de l'amide découle de sa délocalisation électronique."
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des hétéroatomes de la fonction amide:",
    "choices": [
      {
        "content": "La liaison peptidique est une fonction ester.",
        "correct": false,
        "explanation": "La liaison peptidique correspond à une fonction amide."
      },
      {
        "content": "Elle comporte un oxygène.",
        "correct": true,
        "explanation": "O du carbonyle: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elle comporte un azote.",
        "correct": true,
        "explanation": "N directement lié au carbonyle."
      },
      {
        "content": "L'effet électroattracteur de l'oxygène influence le doublet de l'azote.",
        "correct": true,
        "explanation": "Explication: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elle comporte obligatoirement deux oxygènes comme l'ester.",
        "correct": false,
        "explanation": "L'amide simple contient un O et un N."
      }
    ],
    "explanation": "La comparaison ester/amide repose aussi sur la nature des hétéroatomes adjacents au carbonyle."
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel mécanisme structural explique le mieux,, que le doublet de l'azote d'une amide soit moins disponible?",
    "choices": [
      {
        "content": "L'absence totale de doublet sur N.",
        "correct": false,
        "explanation": "Le doublet existe: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Sa délocalisation vers le carbonyle.",
        "correct": true,
        "explanation": "C'est l'explication enseignée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La présence obligatoire d'un ion Mg.",
        "correct": false,
        "explanation": "Sans rapport: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une saponification permanente.",
        "correct": false,
        "explanation": "La saponification concerne les esters."
      },
      {
        "content": "Hydrogénation.",
        "correct": false,
        "explanation": "L’hydrogénation ne désigne pas l’hydrolyse basique d’un ester."
      }
    ],
    "explanation": "La résonance/délocalisation au sein de la fonction amide réduit la disponibilité du doublet de N."
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un contexte digestif, quelles propositions sont cohérentes avec la?",
    "choices": [
      {
        "content": "Des protéases peuvent hydrolyser sélectivement des fonctions amides des peptides.",
        "correct": true,
        "explanation": "L’exemple retenu est les peptidases/protéases."
      },
      {
        "content": "Trypsine, chymotrypsine et pepsine sont données comme exemples.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Les estérases sont, elles, associées aux fonctions ester.",
        "correct": true,
        "explanation": "Autre association enzymatique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Toutes les hydrolyses physiologiques exigent un milieu très acide et un chauffage externe.",
        "correct": false,
        "explanation": "Les enzymes permettent des hydrolyses sélectives dans l'organisme."
      },
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      }
    ],
    "explanation": "Le support oppose les conditions chimiques sévères de l'amide à l'hydrolyse enzymatique physiologique."
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
        "explanation": "Elle l'est, mais plus difficilement."
      },
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      },
      {
        "content": "Elle demande des conditions chimiques plus sévères.",
        "correct": true,
        "explanation": "Très acide + chauffage: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un ester ne peut pas être hydrolysé sans toucher à l'amide dans des conditions adaptées.",
        "correct": false,
        "explanation": "La relation correcte est: « Un ester peut être hydrolysé sans toucher à l'amide dans des conditions adaptées ». La négation proposée est donc fausse."
      },
      {
        "content": "L'inverse sélectif est beaucoup plus difficile dans le modèle présenté.",
        "correct": true,
        "explanation": "L'ester s'hydrolyse d'abord: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "« Plus stable » ne signifie pas « non hydrolysable »: la décrit les conditions nécessaires."
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel terme générique la emploie-t-elle pour les enzymes qui hydrolysent sélectivement les fonctions amides des peptides?",
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
    "explanation": "Le support parle de peptidases, c'est-à-dire de protéases."
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la liaison peptidique, quelles propositions sont exactes dans le cadre de cette section?",
    "choices": [
      {
        "content": "L’hydrolyse d’une amide est plus difficile que celle d’un ester dans les conditions comparées.",
        "correct": true,
        "explanation": "La fonction amide est plus résistante et nécessite des conditions plus sévères pour l’hydrolyse chimique."
      },
      {
        "content": "C'n’est pas une liaison amide.",
        "correct": false,
        "explanation": "La relation correcte est: « C'est une liaison amide ». La négation proposée est donc fausse."
      },
      {
        "content": "Son caractère partiel de double liaison limite la rotation.",
        "correct": true,
        "explanation": "Propriété de la fonction amide."
      },
      {
        "content": "Des protéases/peptidases peuvent l'hydrolyser.",
        "correct": true,
        "explanation": "Application physiologique: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elle se comporte comme une liaison C-N totalement libre sans effet électronique du carbonyle.",
        "correct": false,
        "explanation": "C'est précisément ce que le caractère partiel de double liaison exclut."
      }
    ],
    "explanation": "La structure électronique de l'amide éclaire la rigidité de la liaison peptidique et son hydrolyse enzymatique."
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
        "explanation": "Hiérarchie : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'hydrolyse chimique de l'amide nécessite un milieu très acide.",
        "correct": true,
        "explanation": "Condition citée : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le chauffage est également cité.",
        "correct": true,
        "explanation": "Condition citée : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La liaison C-N d'une amide a un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "Propriété : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le doublet de N est délocalisé.",
        "correct": true,
        "explanation": "Origine électronique : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une amide est absolument non hydrolysable.",
        "correct": false,
        "explanation": "Elle est hydrolysable : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L'ester est toujours plus résistant que l'amide.",
        "correct": false,
        "explanation": "C'est l'inverse : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Une estérase est l'exemple principal donné pour hydrolyser une liaison peptidique.",
        "correct": false,
        "explanation": "Les protéases/peptidases sont associées aux amides."
      },
      {
        "content": "La libre rotation C-N est totale et sans coût énergétique.",
        "correct": false,
        "explanation": "Elle est fortement perturbée : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Amine et amide ont nécessairement la même disponibilité du doublet d'azote.",
        "correct": false,
        "explanation": "La délocalisation les distingue : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette sélection regroupe hydrolyse, sélectivité, enzymes et structure électronique."
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
        "explanation": "Association: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Peptidases/protéases → hydrolyse de fonctions amide des peptides.",
        "correct": true,
        "explanation": "Association: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Trypsine → hydrolyse exclusive de thioesters.",
        "correct": false,
        "explanation": "Elle est citée comme peptidase digestive."
      },
      {
        "content": "Pepsine → estérase.",
        "correct": false,
        "explanation": "Elle est citée comme peptidase/protéase."
      },
      {
        "content": "Une amide s’hydrolyse toujours avant un ester soumis aux mêmes conditions.",
        "correct": false,
        "explanation": "L’ester est plus facilement hydrolysé que l’amide."
      }
    ],
    "explanation": "Les deux familles enzymatiques sont explicitement distinguées."
  }
];
