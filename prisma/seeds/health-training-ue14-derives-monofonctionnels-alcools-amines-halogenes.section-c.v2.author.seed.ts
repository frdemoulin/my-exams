import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.4 – Section C – Amines : structure et réactivité
 */

export const UE14_CH8_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des amines, quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Une amine secondaire peut s'écrire $\\ce{R-R'-NH}$ dans la notation simplifiée.",
        "correct": true,
        "explanation": "Deux groupes carbonés sont liés à l'azote."
      },
      {
        "content": "Une amine tertiaire porte trois substituants carbonés sur l'azote.",
        "correct": true,
        "explanation": "Une amine tertiaire possède trois substituants carbonés liés à l’azote et conserve un doublet non liant."
      },
      {
        "content": "Un ammonium quaternaire est classé comme une amine tertiaire.",
        "correct": false,
        "explanation": "ce n'est pas une amine."
      },
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
      },
      {
        "content": "Une amine primaire peut s'écrire $\\ce{R-NH2}$.",
        "correct": true,
        "explanation": "Un seul substituant carboné sur N."
      }
    ],
    "explanation": "Deux groupes carbonés sont liés à l'azote."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi l'azote d'une amine est-il nucléophile dans le modèle étudié?",
    "choices": [
      {
        "content": "Un ammonium quaternaire est une amine tertiaire neutre.",
        "correct": false,
        "explanation": "L’ammonium quaternaire possède quatre substituants sur l’azote et porte une charge positive; ce n’est pas une amine neutre."
      },
      {
        "content": "Il possède un doublet d'électrons libre.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Ce doublet peut être donné pour former une nouvelle liaison.",
        "correct": true,
        "explanation": "Le don du doublet non liant de l’azote permet la formation d’une nouvelle liaison et explique le caractère nucléophile de l’amine."
      },
      {
        "content": "Parce que l'azote est dépourvu d'électrons.",
        "correct": false,
        "explanation": "L’azote d’une amine possède au contraire un doublet non liant, à l’origine de sa nucléophilie."
      },
      {
        "content": "Parce que toute amine est chargée positivement.",
        "correct": false,
        "explanation": "Une amine simple peut être neutre."
      }
    ],
    "explanation": "L’ammonium quaternaire possède quatre substituants sur l’azote et porte une charge positive; ce n’est pas une amine neutre."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle espèce n'est PAS classée comme une amine dans la séquence d'alkylations?",
    "choices": [
      {
        "content": "Ester.",
        "correct": false,
        "explanation": "Une condensation entre une amine et un aldéhyde ou une cétone ne forme pas un ester."
      },
      {
        "content": "Amine primaire.",
        "correct": false,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée: il s’agit de la classe d’amine attendue."
      },
      {
        "content": "Amine secondaire.",
        "correct": false,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée: il s’agit de la classe d’amine attendue."
      },
      {
        "content": "Ammonium quaternaire.",
        "correct": true,
        "explanation": "Les voies d’hydrolyse et d’oxydation décrites ne visent pas la formation d’un ammonium quaternaire."
      },
      {
        "content": "Amine tertiaire.",
        "correct": false,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée: il s’agit de la classe d’amine attendue."
      }
    ],
    "explanation": "Une condensation entre une amine et un aldéhyde ou une cétone ne forme pas un ester."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La synthèse d'Hoffman décrite associe ammoniac et dérivé halogéné. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Elle ne permet pas d'obtenir successivement des amines plus substituées.",
        "correct": false,
        "explanation": "La relation correcte est: « Elle permet d'obtenir successivement des amines plus substituées ». La négation proposée est donc fausse."
      },
      {
        "content": "Une alkylation supplémentaire conduit à un ammonium quaternaire.",
        "correct": true,
        "explanation": "Dernier terme de la séquence."
      },
      {
        "content": "Le dérivé halogéné apporte un substituant carboné à l'azote.",
        "correct": true,
        "explanation": "C'est le principe de l'alkylation."
      },
      {
        "content": "L'alkylation de l'ammoniac conduit uniquement à une amine primaire et ne peut pas se poursuivre.",
        "correct": false,
        "explanation": "Des alkylations successives peuvent conduire à des amines de plus en plus substituées puis à un ammonium quaternaire."
      },
      {
        "content": "L’azote d’une amine est nucléophile grâce à son doublet non liant.",
        "correct": true,
        "explanation": "Le doublet libre de l’azote peut être engagé dans une réaction avec un centre électrophile."
      }
    ],
    "explanation": "La relation correcte est: « Elle permet d'obtenir successivement des amines plus substituées ». La négation proposée est donc fausse."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'amidification avec une amine primaire ou secondaire:",
    "choices": [
      {
        "content": "L'amidification transforme nécessairement l'amine en alcool.",
        "correct": false,
        "explanation": "Le produit attendu est une amide."
      },
      {
        "content": "Une amine primaire réagissant avec un aldéhyde ou une cétone peut conduire à une imine avec élimination d’eau.",
        "correct": true,
        "explanation": "La condensation d’une amine primaire avec un composé carbonylé forme une imine et libère de l’eau."
      },
      {
        "content": "L'amidification peut utiliser un acide activé.",
        "correct": true,
        "explanation": "Un chlorure d'acide ou un anhydride d'acide peut fournir le groupe acyle nécessaire à l'amidification."
      },
      {
        "content": "Le produit est une amide.",
        "correct": true,
        "explanation": "Une amine réagit avec un acide activé pour former une fonction amide."
      },
      {
        "content": "La fonction amide est retrouvée dans les peptides et protéines.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Le produit attendu est une amide."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel dérivé d'acide est cité parmi les acides activés pour l'amidification?",
    "choices": [
      {
        "content": "Alcyne $\\ce{R-C#CH}$.",
        "correct": false,
        "explanation": "Cette proposition est écartée: un dérivé d'acide ne correspond pas au bilan ou à la propriété attendue."
      },
      {
        "content": "Alcane.",
        "correct": false,
        "explanation": "Un alcane ne correspond pas au produit d’une estérification d’un alcool."
      },
      {
        "content": "Alcane $\\ce{R-H}$.",
        "correct": false,
        "explanation": "Cette proposition est écartée: un acide activé ne correspond pas au bilan ou à la propriété attendue."
      },
      {
        "content": "Alcool $\\ce{R-OH}$.",
        "correct": false,
        "explanation": "Cette proposition est écartée: l'acide activé utilisé ne correspond pas au bilan ou à la propriété attendue."
      },
      {
        "content": "Chlorure d'acide $\\ce{R-COCl}$.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Cette proposition est écartée: un dérivé d'acide ne correspond pas au bilan ou à la propriété attendue."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une amine primaire réagit avec un aldéhyde ou une cétone. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
      },
      {
        "content": "Le produit azoté est une imine.",
        "correct": true,
        "explanation": "Ce bilan correspond à la transformation attendue et relie correctement le substrat au produit."
      },
      {
        "content": "Une molécule d'eau est formée.",
        "correct": true,
        "explanation": "Le bilan écrit imine + H2O."
      },
      {
        "content": "La réaction est réversible.",
        "correct": true,
        "explanation": "L'hydrolyse de l'imine est possible."
      },
      {
        "content": "Le produit est un ammonium quaternaire.",
        "correct": false,
        "explanation": "Ce n'est pas une alkylation exhaustive."
      }
    ],
    "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une amine secondaire réagit avec un aldéhyde ou une cétone. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "La réaction peut être inversée par hydrolyse.",
        "correct": true,
        "explanation": "L’hydrolyse est la réaction inverse de la condensation et peut régénérer le composé carbonylé et l’amine."
      },
      {
        "content": "Le produit est une imine neutre identique au cas d'une amine primaire.",
        "correct": false,
        "explanation": "La distingue imine et iminium."
      },
      {
        "content": "Une amine primaire réagissant avec un aldéhyde ou une cétone peut conduire à une imine avec élimination d’eau.",
        "correct": true,
        "explanation": "La condensation d’une amine primaire avec un composé carbonylé forme une imine et libère de l’eau."
      },
      {
        "content": "Le produit azoté n’est pas un iminium.",
        "correct": false,
        "explanation": "La relation correcte est: « Le produit azoté est un iminium ». La négation proposée est donc fausse."
      },
      {
        "content": "Une molécule d'eau est formée.",
        "correct": true,
        "explanation": "Le bilan écrit imine + H2O."
      }
    ],
    "explanation": "L’hydrolyse est la réaction inverse de la condensation et peut régénérer le composé carbonylé et l’amine."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles associations sont exactes?",
    "choices": [
      {
        "content": "Amine primaire + carbonyle → imine.",
        "correct": true,
        "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
      },
      {
        "content": "Amine secondaire + carbonyle → iminium.",
        "correct": true,
        "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
      },
      {
        "content": "Amine primaire ou secondaire + acide activé → amide.",
        "correct": true,
        "explanation": "Cette transformation forme une fonction amide à partir d’une amine et d’un dérivé acylé adapté."
      },
      {
        "content": "Amine tertiaire + carbonyle → imine dans le modèle étudié.",
        "correct": false,
        "explanation": "Ce cas n'est pas donné."
      },
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
      }
    ],
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi les réactions imine/iminium sont-elles présentées comme réversibles?",
    "choices": [
      {
        "content": "Parce que toute amide se transforme spontanément en alcane.",
        "correct": false,
        "explanation": "Sans rapport avec cette réversibilité."
      },
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
      },
      {
        "content": "Une hydrolyse de l'imine n’est pas possible.",
        "correct": false,
        "explanation": "La relation correcte est: « Une hydrolyse de l'imine est possible ». La négation proposée est donc fausse."
      },
      {
        "content": "Une hydrolyse de l'iminium est possible.",
        "correct": true,
        "explanation": "L’hydrolyse d’un iminium permet de revenir au composé carbonylé et à l’amine correspondante."
      },
      {
        "content": "L'eau intervient donc dans le sens inverse.",
        "correct": true,
        "explanation": "L’eau intervient dans le sens inverse de la condensation en permettant l’hydrolyse de l’imine ou de l’iminium."
      }
    ],
    "explanation": "Sans rapport avec cette réversibilité."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On alkyle progressivement $\\ce{NH3}$ avec un dérivé halogéné $\\ce{R-X}$. Quelles étapes sont cohérentes avec la séquence?",
    "choices": [
      {
        "content": "Amine primaire → amine secondaire.",
        "correct": true,
        "explanation": "Une nouvelle alkylation d’une amine primaire ajoute un second substituant carboné sur l’azote et forme une amine secondaire."
      },
      {
        "content": "Amine secondaire → amine tertiaire.",
        "correct": true,
        "explanation": "Une alkylation supplémentaire d’une amine secondaire conduit à une amine tertiaire."
      },
      {
        "content": "Amine tertiaire → ammonium quaternaire.",
        "correct": true,
        "explanation": "Une alkylation supplémentaire de l’amine tertiaire conduit à un ammonium quaternaire."
      },
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
      },
      {
        "content": "Ammoniac → amine primaire.",
        "correct": true,
        "explanation": "Une première alkylation de l’ammoniac conduit à une amine primaire."
      }
    ],
    "explanation": "Une nouvelle alkylation d’une amine primaire ajoute un second substituant carboné sur l’azote et forme une amine secondaire."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de classes d’amines neutres distingue-t-on avant l’ammonium quaternaire ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Amines primaire, secondaire et tertiaire."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une amine primaire est engagée dans une synthèse de peptide avec un acide activé. Quelles propositions sont soutenues par la?",
    "choices": [
      {
        "content": "Un chlorure d'acide peut jouer le rôle d'acide activé.",
        "correct": true,
        "explanation": "Un chlorure d’acide est un dérivé activé dont le carbone acylé peut être attaqué par une amine pour former une amide."
      },
      {
        "content": "La réaction conduit nécessairement à une fonction alcool.",
        "correct": false,
        "explanation": "Le produit est une amide."
      },
      {
        "content": "L’estérification étudiée transforme l’alcool en ammonium quaternaire.",
        "correct": false,
        "explanation": "La réaction avec un acide activé conduit à un ester et ne quaternise pas un atome d’azote."
      },
      {
        "content": "Une fonction amide peut être formée.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "La fonction amide est un motif des peptides et protéines.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      }
    ],
    "explanation": "Une amine attaque le carbone acylé électrophile d’un dérivé activé pour former une fonction amide."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare une amine primaire et une amine secondaire face à une cétone. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "L'amine primaire ne conduit pas à une imine.",
        "correct": false,
        "explanation": "La relation correcte est: « L'amine primaire conduit à une imine ». La négation proposée est donc fausse."
      },
      {
        "content": "L'amine secondaire conduit à un iminium.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Les deux réactions libèrent de l'eau.",
        "correct": true,
        "explanation": "Les deux bilans incluent H2O."
      },
      {
        "content": "Les deux produits sont nécessairement identiques.",
        "correct": false,
        "explanation": "Imine et iminium sont distincts."
      },
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
      }
    ],
    "explanation": "La relation correcte est: « L'amine primaire conduit à une imine ». La négation proposée est donc fausse."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'hydrolyse d'une imine ou d'un iminium dans le cadre étudié:",
    "choices": [
      {
        "content": "Elle augmente obligatoirement le degré d'alkylation de l'azote.",
        "correct": false,
        "explanation": "Ce n'est pas une alkylation."
      },
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
      },
      {
        "content": "Elle correspond au sens inverse de la condensation avec le carbonyle.",
        "correct": true,
        "explanation": "L’hydrolyse est la réaction inverse de la condensation et peut régénérer le composé carbonylé et l’amine."
      },
      {
        "content": "Elle peut régénérer les partenaires de départ.",
        "correct": true,
        "explanation": "L’hydrolyse est la réaction inverse de la condensation et peut régénérer le composé carbonylé et l’amine."
      },
      {
        "content": "Elle nécessite de considérer la présence d'eau.",
        "correct": true,
        "explanation": "L'eau intervient dans le sens inverse."
      }
    ],
    "explanation": "Ce n'est pas une alkylation."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Une cétone réagit avec une amine secondaire. Quel type de produit azoté est formé ?",
    "choices": [
      {
        "content": "Un iminium.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Une amide.",
        "correct": false,
        "explanation": "Il faudrait un acide activé."
      },
      {
        "content": "Un alcool tertiaire.",
        "correct": false,
        "explanation": "L’addition d’un organomagnésien sur le carbonyle permet d’obtenir le produit correspondant après hydrolyse."
      },
      {
        "content": "Un ammonium quaternaire par définition.",
        "correct": false,
        "explanation": "Le produit de condensation est un iminium."
      },
      {
        "content": "Ester.",
        "correct": false,
        "explanation": "Une condensation entre une amine et un aldéhyde ou une cétone ne forme pas un ester."
      }
    ],
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une amine primaire réagit avec un aldéhyde. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
      },
      {
        "content": "Une imine peut se former.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "De l'eau est libérée.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "La réaction peut être hydrolysée.",
        "correct": true,
        "explanation": "L’hydrolyse est la réaction inverse de la condensation et peut régénérer le composé carbonylé et l’amine."
      },
      {
        "content": "Un organomagnésien est obligatoirement nécessaire.",
        "correct": false,
        "explanation": "Cette proposition est écartée: dans cette transformation ne correspond pas au bilan ou à la propriété attendue."
      }
    ],
    "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux transformations donnant une fonction contenant un carbonyle dans le produit final.",
    "choices": [
      {
        "content": "Alkylation de l'ammoniac en amine primaire.",
        "correct": false,
        "explanation": "Cette transformation ne crée pas de groupe carbonyle dans le produit considéré."
      },
      {
        "content": "Formation d'un organomagnésien à partir de RX et Mg.",
        "correct": false,
        "explanation": "Cette transformation ne crée pas de groupe carbonyle dans le produit considéré."
      },
      {
        "content": "Un alcool secondaire s’oxyde en aldéhyde dans le modèle étudié.",
        "correct": false,
        "explanation": "L’oxydation d’un alcool secondaire conduit à une cétone."
      },
      {
        "content": "Amidification d'une amine avec un acide activé.",
        "correct": true,
        "explanation": "L’amidification d’une amine par un dérivé d’acide activé forme une liaison amide contenant un groupe carbonyle."
      },
      {
        "content": "Oxydation d'un alcool secondaire en cétone.",
        "correct": true,
        "explanation": "L’oxydation d’un alcool secondaire transforme le carbone portant $\\ce{-OH}$ en carbone carbonylé et donne une cétone."
      }
    ],
    "explanation": "Cette transformation ne crée pas de groupe carbonyle dans le produit considéré."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une stratégie de synthèse, quelles transformations utilisent explicitement le caractère nucléophile de l'azote d'une amine?",
    "choices": [
      {
        "content": "Alkylation par un dérivé halogéné.",
        "correct": true,
        "explanation": "L'azote attaque le carbone électrophile de RX."
      },
      {
        "content": "Amidification avec un acide activé.",
        "correct": true,
        "explanation": "L'amine réagit sur le carbone acyle électrophile."
      },
      {
        "content": "Réaction avec un aldéhyde ou une cétone.",
        "correct": true,
        "explanation": "Le carbonyle est partenaire électrophile."
      },
      {
        "content": "Hydrogénation d'un alcène par H2.",
        "correct": false,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée: il s’agit de la classe d’amine attendue."
      },
      {
        "content": "Dans un dérivé halogéné $\\ce{R-X}$, le carbone lié à l’halogène présente un caractère électrophile.",
        "correct": true,
        "explanation": "La polarisation de la liaison carbone-halogène rend ce carbone sensible à l’attaque d’un nucléophile."
      }
    ],
    "explanation": "L'azote attaque le carbone électrophile de RX."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Amine primaire + carbonyle → imine.",
        "correct": true,
        "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
      },
      {
        "content": "Amine secondaire + carbonyle → iminium.",
        "correct": true,
        "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
      },
      {
        "content": "Amine + acide activé → amide.",
        "correct": true,
        "explanation": "Cette transformation forme une fonction amide à partir d’une amine et d’un dérivé acylé adapté."
      },
      {
        "content": "Ammoniac + RX → amine primaire après une alkylation.",
        "correct": true,
        "explanation": "La première alkylation de l’ammoniac par un dérivé halogéné conduit à une amine primaire."
      },
      {
        "content": "Amine tertiaire + RX → ammonium quaternaire.",
        "correct": true,
        "explanation": "Une alkylation supplémentaire d’une amine tertiaire conduit à un ammonium quaternaire."
      },
      {
        "content": "Amine primaire + carbonyle → ammonium quaternaire.",
        "correct": false,
        "explanation": "Le produit considéré correspond bien à une imine."
      },
      {
        "content": "Amine secondaire + acide activé → alcane.",
        "correct": false,
        "explanation": "Le motif ou le produit considéré correspond bien à une fonction amide."
      },
      {
        "content": "Ammonium quaternaire = amine tertiaire neutre.",
        "correct": false,
        "explanation": "Une amine tertiaire est neutre et porte trois substituants carbonés ; un ammonium quaternaire en porte quatre et est chargé positivement."
      },
      {
        "content": "Imine = produit spécifique d'une amine secondaire.",
        "correct": false,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée : il s’agit de la classe d’amine attendue."
      },
      {
        "content": "Iminium = produit spécifique d'une amine primaire.",
        "correct": false,
        "explanation": "Le composé comporte un groupe amino lié à la chaîne carbonée : il s’agit de la classe d’amine attendue."
      }
    ],
    "explanation": "La réaction de condensation associe les deux fonctions et s’accompagne ici d’une élimination d’eau."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel produit azoté obtient-on lorsqu'une amine primaire réagit avec un aldéhyde ou une cétone?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "imine",
        "une imine"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le bilan est amine primaire + composé carbonylé ↔ imine + eau."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels éléments permettent de choisir entre alkylation, amidification et condensation carbonylée d'une amine?",
    "choices": [
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
      },
      {
        "content": "La nature du partenaire: dérivé halogéné, acide activé ou composé carbonylé.",
        "correct": true,
        "explanation": "Chaque partenaire correspond à une réaction différente."
      },
      {
        "content": "La classe primaire ou secondaire de l'amine pour prévoir imine ou iminium.",
        "correct": true,
        "explanation": "Une amine primaire conduit à une imine, tandis qu’une amine secondaire conduit à un ion iminium dans le bilan étudié."
      },
      {
        "content": "Le doublet libre de l'azote, qui explique la nucléophilie.",
        "correct": true,
        "explanation": "Le doublet non liant de l’azote peut être engagé dans une nouvelle liaison, ce qui explique le caractère nucléophile d’une amine."
      },
      {
        "content": "Uniquement la formule brute globale de la molécule.",
        "correct": false,
        "explanation": "La formule brute ne suffit pas : la nature du partenaire réactionnel et la classe de l’amine déterminent la transformation."
      }
    ],
    "explanation": "Le produit retenu pour une amine secondaire est un ion iminium."
  }
];
