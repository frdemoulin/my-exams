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
        "content": "Une amine secondaire peut s’écrire $\\ce{R-NH-R'}$ dans la notation simplifiée.",
        "correct": true,
        "explanation": "Une amine secondaire porte deux substituants carbonés sur l’azote et peut s’écrire $\\ce{R-NH-R'}$."
      },
      {
        "content": "Une amine tertiaire porte trois substituants carbonés sur l'azote.",
        "correct": true,
        "explanation": "Une amine tertiaire possède trois substituants carbonés liés à l’azote et conserve un doublet non liant."
      },
      {
        "content": "Un ammonium quaternaire est classé comme une amine tertiaire.",
        "correct": false,
        "explanation": "L’ammonium quaternaire porte quatre substituants carbonés et une charge positive ; il n’est pas classé comme amine tertiaire neutre."
      },
      {
        "content": "Une amine secondaire porte trois substituants carbonés sur l’azote.",
        "correct": false,
        "explanation": "Une amine secondaire porte deux substituants carbonés sur l’azote ; trois substituants caractérisent une amine tertiaire."
      },
      {
        "content": "Une amine primaire peut s'écrire $\\ce{R-NH2}$.",
        "correct": true,
        "explanation": "Une amine primaire porte un seul substituant carboné sur l’azote et peut s’écrire $\\ce{R-NH2}$."
      }
    ],
    "explanation": "Les amines neutres sont primaires, secondaires ou tertiaires selon le nombre de substituants carbonés liés à l’azote."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi l'azote d'une amine est-il nucléophile dans le modèle étudié?",
    "choices": [
      {
        "content": "La nucléophilie de l’azote vient d’une charge positive permanente portée par l’amine.",
        "correct": false,
        "explanation": "Une amine neutre est nucléophile grâce au doublet libre de l’azote, et non grâce à une charge positive permanente."
      },
      {
        "content": "Il possède un doublet d'électrons libre.",
        "correct": true,
        "explanation": "Le doublet non liant de l’azote fournit les électrons qui permettent à l’amine de former une nouvelle liaison avec un centre électrophile."
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
        "explanation": "Une amine peut être neutre ; sa nucléophilie vient du doublet libre de l’azote, pas d’une charge positive permanente."
      }
    ],
    "explanation": "L’azote d’une amine est nucléophile parce qu’il possède un doublet d’électrons libre susceptible de former une nouvelle liaison."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel produit est obtenu après une alkylation supplémentaire d’une amine tertiaire par un dérivé halogéné ?",
    "choices": [
      {
        "content": "Une amine primaire.",
        "correct": false,
        "explanation": "Une amine primaire correspond au premier niveau d’alkylation de l’ammoniac, pas au produit d’une alkylation supplémentaire d’une amine tertiaire."
      },
      {
        "content": "Une amine secondaire.",
        "correct": false,
        "explanation": "Une amine secondaire est obtenue à une étape antérieure de la séquence d’alkylations."
      },
      {
        "content": "Une imine.",
        "correct": false,
        "explanation": "Une imine provient de la condensation d’une amine primaire avec un composé carbonylé, pas de l’alkylation d’une amine tertiaire."
      },
      {
        "content": "Ammonium quaternaire.",
        "correct": true,
        "explanation": "Une amine tertiaire alkylée une fois de plus porte quatre substituants carbonés et devient un ammonium quaternaire."
      },
      {
        "content": "Une amide.",
        "correct": false,
        "explanation": "Une amide est formée par amidification avec un acide activé, pas par alkylation d’une amine tertiaire."
      }
    ],
    "explanation": "Une alkylation supplémentaire d’une amine tertiaire conduit à un ammonium quaternaire, qui porte quatre substituants carbonés sur l’azote."
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
        "explanation": "Des alkylations successives permettent au contraire de passer de l’ammoniac aux amines primaire, secondaire et tertiaire puis à l’ammonium quaternaire."
      },
      {
        "content": "Une alkylation supplémentaire conduit à un ammonium quaternaire.",
        "correct": true,
        "explanation": "Après les amines primaire, secondaire et tertiaire, une alkylation supplémentaire conduit à l’ammonium quaternaire."
      },
      {
        "content": "Le dérivé halogéné apporte un substituant carboné à l'azote.",
        "correct": true,
        "explanation": "Lors de l’alkylation, le dérivé halogéné fournit le groupe carboné qui se fixe sur l’azote."
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
    "explanation": "Des alkylations successives de l’ammoniac par un dérivé halogéné conduisent à une amine primaire, puis secondaire, tertiaire et enfin à un ammonium quaternaire."
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
        "explanation": "L’amidification forme une fonction amide à partir de l’amine ; elle ne transforme pas l’amine en alcool."
      },
      {
        "content": "Une amine secondaire peut elle aussi être amidifiée par un acide activé.",
        "correct": true,
        "explanation": "L’amidification considérée concerne les amines primaires comme les amines secondaires réagissant avec un acide activé."
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
        "explanation": "La liaison amide constitue le motif de la liaison peptidique ; les peptides et protéines contiennent donc des fonctions amides."
      }
    ],
    "explanation": "Une amine primaire ou secondaire peut réagir avec un acide activé pour former une amide ; la fonction amide est présente dans les peptides et les protéines."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel dérivé d'acide est cité parmi les acides activés pour l'amidification?",
    "choices": [
      {
        "content": "Acide carboxylique non activé $\\ce{R-COOH}$.",
        "correct": false,
        "explanation": "Un acide carboxylique non activé n’est pas l’un des dérivés activés cités ; l’amidification considérée utilise notamment un chlorure d’acide ou un anhydride."
      },
      {
        "content": "Aldéhyde $\\ce{R-CHO}$.",
        "correct": false,
        "explanation": "Un aldéhyde $\\ce{R-CHO}$ est un composé carbonylé, mais ce n’est pas l’un des acides activés utilisés pour l’amidification."
      },
      {
        "content": "Cétone $\\ce{R-CO-R'}$.",
        "correct": false,
        "explanation": "Une cétone $\\ce{R-CO-R'}$ n’est pas un acide activé ; les dérivés retenus sont notamment le chlorure d’acide et l’anhydride."
      },
      {
        "content": "Alcool $\\ce{R-OH}$.",
        "correct": false,
        "explanation": "Un alcool n’est pas l’acide activé utilisé pour l’amidification ; le chlorure d’acide et l’anhydride d’acide sont les dérivés retenus."
      },
      {
        "content": "Chlorure d'acide $\\ce{R-COCl}$.",
        "correct": true,
        "explanation": "Le chlorure d’acide $\\ce{R-COCl}$ est l’un des acides activés utilisés pour former une amide avec une amine."
      }
    ],
    "explanation": "Parmi les acides activés utilisés pour l’amidification figurent le chlorure d’acide $\\ce{R-COCl}$ et l’anhydride d’acide."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une amine primaire réagit avec un aldéhyde ou une cétone. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le produit azoté est un ion iminium.",
        "correct": false,
        "explanation": "Une amine primaire conduit à une imine ; l’ion iminium est associé à la réaction d’une amine secondaire avec le carbonyle."
      },
      {
        "content": "Le produit azoté est une imine.",
        "correct": true,
        "explanation": "Une amine primaire réagissant avec un aldéhyde ou une cétone donne une imine."
      },
      {
        "content": "Une molécule d'eau est formée.",
        "correct": true,
        "explanation": "Le bilan de condensation d’une amine primaire avec un carbonyle fait apparaître une imine et une molécule d’eau."
      },
      {
        "content": "La réaction est réversible.",
        "correct": true,
        "explanation": "La réaction est réversible car l’imine peut être hydrolysée pour régénérer l’amine et le composé carbonylé."
      },
      {
        "content": "Le produit est un ammonium quaternaire.",
        "correct": false,
        "explanation": "Un ammonium quaternaire résulte d’alkylations successives ; la condensation d’une amine primaire avec un carbonyle forme une imine."
      }
    ],
    "explanation": "Une amine primaire réagit avec un aldéhyde ou une cétone pour former une imine et de l’eau ; l’hydrolyse permet la réaction inverse."
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
        "explanation": "Une amine secondaire forme un iminium avec un composé carbonylé ; l’imine neutre est associée à une amine primaire."
      },
      {
        "content": "Le produit azoté formé est un ion iminium.",
        "correct": true,
        "explanation": "Une amine secondaire réagissant avec un aldéhyde ou une cétone conduit à un ion iminium dans le bilan étudié."
      },
      {
        "content": "Le produit azoté n’est pas un iminium.",
        "correct": false,
        "explanation": "Le produit azoté est bien un iminium ; la proposition nie donc le produit attendu."
      },
      {
        "content": "Une molécule d'eau est formée.",
        "correct": true,
        "explanation": "Le bilan avec une amine secondaire fait apparaître un iminium et une molécule d’eau."
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
        "explanation": "Une amine primaire ou secondaire peut réagir avec un acide activé pour former une fonction amide."
      },
      {
        "content": "Amine tertiaire + carbonyle → imine dans le modèle étudié.",
        "correct": false,
        "explanation": "Dans le cadre étudié, la formation d’une imine est associée à une amine primaire ; ce cas n’est pas attribué à une amine tertiaire."
      },
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Une amine secondaire forme un ion iminium avec un composé carbonylé, et non une imine neutre."
      }
    ],
    "explanation": "Une amine primaire avec un carbonyle forme une imine, une amine secondaire forme un iminium, et une amine avec un acide activé peut former une amide."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi les réactions imine/iminium sont-elles présentées comme réversibles?",
    "choices": [
      {
        "content": "Parce que l’alkylation de l’azote est la réaction inverse de la condensation.",
        "correct": false,
        "explanation": "La réversibilité considérée vient de l’hydrolyse de l’imine ou de l’iminium, pas d’une réaction d’alkylation de l’azote."
      },
      {
        "content": "Parce qu’aucune molécule d’eau ne peut intervenir dans le sens inverse.",
        "correct": false,
        "explanation": "L’eau intervient précisément dans l’hydrolyse, qui constitue le sens inverse de la formation de l’imine ou de l’iminium."
      },
      {
        "content": "Une hydrolyse de l'imine n’est pas possible.",
        "correct": false,
        "explanation": "Une imine peut être hydrolysée pour régénérer l’amine et le composé carbonylé ; la réaction est donc réversible."
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
    "explanation": "Les imines et les ions iminium peuvent être hydrolysés : l’eau permet de régénérer le composé carbonylé et l’amine."
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
        "content": "Une amine tertiaire ne peut pas être alkylée davantage.",
        "correct": false,
        "explanation": "Une amine tertiaire peut subir une alkylation supplémentaire et former un ammonium quaternaire."
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
    "explanation": "Trois classes d’amines neutres sont distinguées avant l’ammonium quaternaire : primaire, secondaire et tertiaire."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une amine primaire est engagée dans une synthèse de peptide avec un acide activé. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un chlorure d'acide peut jouer le rôle d'acide activé.",
        "correct": true,
        "explanation": "Le chlorure d’acide fait partie des acides activés utilisés pour former une amide avec une amine."
      },
      {
        "content": "La réaction conduit nécessairement à une fonction alcool.",
        "correct": false,
        "explanation": "L’amidification avec un acide activé conduit à une fonction amide et non à une fonction alcool."
      },
      {
        "content": "Un aldéhyde est indispensable à cette amidification.",
        "correct": false,
        "explanation": "L’amidification nécessite une amine et un acide activé ; un aldéhyde intervient dans la formation d’une imine, pas dans cette réaction."
      },
      {
        "content": "Une fonction amide peut être formée.",
        "correct": true,
        "explanation": "L’attaque de l’amine sur l’acide activé conduit à la formation d’une fonction amide."
      },
      {
        "content": "La fonction amide est un motif des peptides et protéines.",
        "correct": true,
        "explanation": "Les peptides et protéines comportent des liaisons amides ; l’amidification est donc directement pertinente pour leur synthèse."
      }
    ],
    "explanation": "Une amine primaire ou secondaire peut réagir avec un acide activé, notamment un chlorure d’acide ou un anhydride, pour former une amide."
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
        "explanation": "Une amine primaire conduit bien à une imine avec une cétone ; la proposition nie cette transformation."
      },
      {
        "content": "L'amine secondaire conduit à un iminium.",
        "correct": true,
        "explanation": "Une amine secondaire réagissant avec une cétone conduit à un ion iminium."
      },
      {
        "content": "Les deux réactions libèrent de l'eau.",
        "correct": true,
        "explanation": "Les deux condensations, avec amine primaire ou secondaire, font apparaître une molécule d’eau dans le bilan."
      },
      {
        "content": "Les deux produits sont nécessairement identiques.",
        "correct": false,
        "explanation": "Les produits sont différents : l’amine primaire conduit à une imine, l’amine secondaire à un iminium."
      },
      {
        "content": "Une amine secondaire réagissant avec un composé carbonylé conduit à une imine neutre dans le bilan étudié.",
        "correct": false,
        "explanation": "Une amine secondaire conduit à un iminium, et non à une imine neutre."
      }
    ],
    "explanation": "Avec une cétone, une amine primaire forme une imine tandis qu’une amine secondaire forme un iminium ; les deux bilans font apparaître de l’eau."
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
        "explanation": "L’hydrolyse d’une imine ou d’un iminium inverse la condensation ; elle n’augmente pas le degré d’alkylation de l’azote."
      },
      {
        "content": "L’hydrolyse d’un iminium conduit nécessairement à une imine neutre.",
        "correct": false,
        "explanation": "L’hydrolyse d’un iminium régénère le composé carbonylé et l’amine secondaire ; elle ne donne pas nécessairement une imine."
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
        "explanation": "L’eau est le réactif du sens hydrolytique qui permet de revenir vers l’amine et le composé carbonylé."
      }
    ],
    "explanation": "L’hydrolyse est le sens inverse de la condensation et peut régénérer l’amine et le composé carbonylé."
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
        "explanation": "Une amine secondaire se condense avec la cétone pour former un ion iminium."
      },
      {
        "content": "Une amide.",
        "correct": false,
        "explanation": "Une amide est obtenue par réaction d’une amine avec un acide activé ; une cétone avec une amine secondaire forme un iminium."
      },
      {
        "content": "Une imine.",
        "correct": false,
        "explanation": "Une amine secondaire forme un iminium avec une cétone ; l’imine est le produit associé à une amine primaire."
      },
      {
        "content": "Un ammonium quaternaire par définition.",
        "correct": false,
        "explanation": "Le produit de condensation avec une amine secondaire est un iminium ; un ammonium quaternaire appartient à la séquence d’alkylations."
      },
      {
        "content": "Ester.",
        "correct": false,
        "explanation": "Une condensation entre une amine et un aldéhyde ou une cétone ne forme pas un ester."
      }
    ],
    "explanation": "Une cétone réagissant avec une amine secondaire conduit à un ion iminium et à de l’eau dans le bilan étudié."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une amine primaire réagit avec un aldéhyde. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Une amine primaire forme un iminium avec l’aldéhyde.",
        "correct": false,
        "explanation": "Une amine primaire conduit à une imine ; l’iminium est associé à une amine secondaire."
      },
      {
        "content": "Une imine peut se former.",
        "correct": true,
        "explanation": "Une amine primaire réagissant avec un aldéhyde peut former une imine."
      },
      {
        "content": "De l'eau est libérée.",
        "correct": true,
        "explanation": "Le bilan de condensation d’une amine primaire avec un aldéhyde fait apparaître une molécule d’eau parmi les produits."
      },
      {
        "content": "La réaction peut être hydrolysée.",
        "correct": true,
        "explanation": "L’hydrolyse est la réaction inverse de la condensation et peut régénérer le composé carbonylé et l’amine."
      },
      {
        "content": "Un organomagnésien est obligatoirement nécessaire.",
        "correct": false,
        "explanation": "La condensation d’une amine primaire avec un aldéhyde ne nécessite pas d’organomagnésien."
      }
    ],
    "explanation": "Une amine primaire se condense avec un aldéhyde pour former une imine et de l’eau ; cette transformation est réversible par hydrolyse."
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
        "explanation": "L’alkylation de l’ammoniac forme une amine primaire et ne crée pas de groupe carbonyle."
      },
      {
        "content": "Formation d'un organomagnésien à partir de RX et Mg.",
        "correct": false,
        "explanation": "La formation de $\\ce{RMgX}$ à partir de $\\ce{R-X}$ et Mg ne crée pas de groupe carbonyle."
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
    "explanation": "Parmi les transformations proposées, l’amidification forme une amide carbonylée et l’oxydation d’un alcool secondaire forme une cétone."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une stratégie de synthèse, quelles transformations utilisent le caractère nucléophile de l'azote d'une amine ?",
    "choices": [
      {
        "content": "Alkylation par un dérivé halogéné.",
        "correct": true,
        "explanation": "L’amine nucléophile réagit avec un dérivé halogéné lors de la séquence d’alkylations."
      },
      {
        "content": "Amidification avec un acide activé.",
        "correct": true,
        "explanation": "Une amine primaire ou secondaire peut réagir avec un acide activé pour former une amide."
      },
      {
        "content": "Réaction avec un aldéhyde ou une cétone.",
        "correct": true,
        "explanation": "Une amine primaire ou secondaire peut réagir avec un aldéhyde ou une cétone pour former respectivement une imine ou un iminium."
      },
      {
        "content": "Hydrogénation d'un alcène par H2.",
        "correct": false,
        "explanation": "L’hydrogénation d’un alcène par $\\ce{H2}$ ne met pas en jeu le doublet nucléophile d’une amine."
      },
      {
        "content": "Formation d’un ammonium quaternaire par alkylation d’une amine tertiaire.",
        "correct": true,
        "explanation": "Une amine tertiaire peut utiliser son doublet libre pour attaquer un dérivé halogéné et former un ammonium quaternaire."
      }
    ],
    "explanation": "Le doublet libre de l’azote explique la nucléophilie des amines, mobilisée dans leurs réactions avec les dérivés halogénés, les acides activés et les composés carbonylés."
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
        "explanation": "Une amine réagissant avec un acide activé forme une amide, qui conserve le groupe carbonyle acyle."
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
        "explanation": "Une amine primaire avec un composé carbonylé forme une imine, pas un ammonium quaternaire."
      },
      {
        "content": "Amine secondaire + acide activé → alcane.",
        "correct": false,
        "explanation": "Une amine secondaire avec un acide activé forme une amide, pas un alcane."
      },
      {
        "content": "Ammonium quaternaire = amine tertiaire neutre.",
        "correct": false,
        "explanation": "Une amine tertiaire est neutre et porte trois substituants carbonés ; un ammonium quaternaire en porte quatre et est chargé positivement."
      },
      {
        "content": "Imine = produit spécifique d’une amine secondaire avec un composé carbonylé.",
        "correct": false,
        "explanation": "Une imine est obtenue avec une amine primaire ; une amine secondaire conduit à un iminium dans le bilan étudié."
      },
      {
        "content": "Iminium = produit spécifique d’une amine primaire avec un composé carbonylé.",
        "correct": false,
        "explanation": "Un iminium est obtenu avec une amine secondaire ; une amine primaire conduit à une imine."
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
        "explanation": "Une amine secondaire réagissant avec un composé carbonylé conduit à un ion iminium, et non à une imine neutre."
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
    "explanation": "La nature du partenaire réactionnel et la classe de l’amine permettent de distinguer alkylation, amidification et formation d’imine ou d’iminium."
  }
];
