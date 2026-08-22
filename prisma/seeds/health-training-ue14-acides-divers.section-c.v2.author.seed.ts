import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.7 – Section C – Décarboxylation
 */

export const UE14_CH11_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 57,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la décarboxylation:",
    "choices": [
      {
        "content": "Elle peut se produire par voie enzymatique.",
        "correct": true,
        "explanation": "Une décarboxylation peut être catalysée par une enzyme tout en conservant le bilan global de libération de $\\ce{CO2}$."
      },
      {
        "content": "Elle correspond à un gain de deux carbones.",
        "correct": false,
        "explanation": "Elle entraîne au contraire une perte carbonée."
      },
      {
        "content": "Une décarboxylation ajoute un atome de carbone provenant de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "L’ajout de $\\ce{CO2}$ intervient au contraire dans la carboxylation d’un organomagnésien."
      },
      {
        "content": "Elle correspond à une perte de $\\ce{CO2}$.",
        "correct": true,
        "explanation": "La perte d’une molécule de $\\ce{CO2}$ constitue le bilan caractéristique d’une décarboxylation."
      },
      {
        "content": "Elle peut se produire par voie chimique.",
        "correct": true,
        "explanation": "Une décarboxylation peut également se produire par voie chimique lorsque la structure du substrat la favorise."
      }
    ],
    "explanation": "La carboxylation par $\\ce{CO2}$ ajoute une unité carbone au squelette, tandis que la décarboxylation en retire une sous forme de $\\ce{CO2}$."
  },
  {
    "order": 58,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel gaz est perdu lors d'une décarboxylation?",
    "choices": [
      {
        "content": "$\\ce{NH3}$.",
        "correct": false,
        "explanation": "Ce n'est pas une décarboxylation."
      },
      {
        "content": "$\\ce{H2O}$ uniquement.",
        "correct": false,
        "explanation": "L’eau seule n’apporte pas le carbone supplémentaire nécessaire à la carboxylation."
      },
      {
        "content": "$\\ce{O2}$.",
        "correct": false,
        "explanation": "Ce n'est pas la définition."
      },
      {
        "content": "$\\ce{CO2}$.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "$\\ce{H2}$.",
        "correct": false,
        "explanation": "Ce n'est pas le gaz perdu."
      }
    ],
    "explanation": "Ce n'est pas une décarboxylation."
  },
  {
    "order": 59,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quel effet la décarboxylation a-t-elle sur le nombre de carbones du produit organique?",
    "choices": [
      {
        "content": "La réaction peut être suivie en comptant les carbones avant et après.",
        "correct": true,
        "explanation": "C'est un repère simple du bilan."
      },
      {
        "content": "Pour obtenir un acide à cinq carbones, il faut nécessairement utiliser un organomagnésien à six carbones.",
        "correct": false,
        "explanation": "Le réactif organomagnésien doit comporter un carbone de moins que l’acide final."
      },
      {
        "content": "Le produit organique possède un carbone de moins que la molécule initiale.",
        "correct": true,
        "explanation": "Le carbone part sous forme de CO2."
      },
      {
        "content": "Le bilan carbone doit tenir compte du carbone du CO2.",
        "correct": true,
        "explanation": "Il quitte le squelette organique."
      },
      {
        "content": "Le nombre de carbones augmente d'une unité.",
        "correct": false,
        "explanation": "Cela correspondrait plutôt à la carboxylation par CO2."
      }
    ],
    "explanation": "C'est un repère simple du bilan."
  },
  {
    "order": 60,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "qu'une décarboxylation est particulièrement facile lorsque:",
    "choices": [
      {
        "content": "Le carbonyle ne peut pas appartenir à une cétone.",
        "correct": false,
        "explanation": "La relation correcte est: « Le carbonyle peut appartenir à une cétone ». La négation proposée est donc fausse."
      },
      {
        "content": "Le carbonyle peut appartenir à un aldéhyde.",
        "correct": true,
        "explanation": "La présence d’un groupe carbonyle voisin fait partie des situations structurales associées à une décarboxylation facilitée."
      },
      {
        "content": "Aucune fonction carbonylée n'est présente à proximité.",
        "correct": false,
        "explanation": "Un groupe carbonyle voisin peut stabiliser la structure impliquée et favoriser la décarboxylation dans le modèle étudié."
      },
      {
        "content": "Un acide carboxylique peut céder le proton de son groupe $\\ce{-COOH}$ pour former un carboxylate.",
        "correct": true,
        "explanation": "La déprotonation conduit au motif $\\ce{R-COO^-}$, dont la charge est délocalisée sur les deux oxygènes."
      },
      {
        "content": "Un même carbone porte une fonction acide carboxylique et un motif carbonylé adapté.",
        "correct": true,
        "explanation": "Condition structurale mise en avant."
      }
    ],
    "explanation": "La relation correcte est: « Le carbonyle peut appartenir à une cétone ». La négation proposée est donc fausse."
  },
  {
    "order": 61,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quels types de fonctions carbonylées sont cités comme pouvant favoriser la décarboxylation dans la configuration décrite?",
    "choices": [
      {
        "content": "Une décarboxylation ajoute un atome de carbone provenant de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "L’ajout de $\\ce{CO2}$ intervient au contraire dans la carboxylation d’un organomagnésien."
      },
      {
        "content": "Cétone.",
        "correct": true,
        "explanation": "Cétone fait partie des fonctions carbonylées pouvant, dans l’environnement structural étudié, favoriser une décarboxylation."
      },
      {
        "content": "Aldéhyde.",
        "correct": true,
        "explanation": "Aldéhyde fait partie des fonctions carbonylées pouvant, dans l’environnement structural étudié, favoriser une décarboxylation."
      },
      {
        "content": "Autre fonction acide carboxylique.",
        "correct": true,
        "explanation": "Autre fonction acide carboxylique fait partie des fonctions carbonylées pouvant, dans l’environnement structural étudié, favoriser une décarboxylation."
      },
      {
        "content": "Ester.",
        "correct": true,
        "explanation": "Ester fait partie des fonctions carbonylées pouvant, dans l’environnement structural étudié, favoriser une décarboxylation."
      }
    ],
    "explanation": "L’ajout de $\\ce{CO2}$ intervient au contraire dans la carboxylation d’un organomagnésien."
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel bilan simple illustre une décarboxylation d'un acide de type $\\mathrm{R{-}CH_2{-}COOH}$ dans le schéma?",
    "choices": [
      {
        "content": "$\\mathrm{R{-}CONH_2}$.",
        "correct": false,
        "explanation": "La proposition est fausse : $\\mathrm{R{-}CH_3 + CO_2}$."
      },
      {
        "content": "$\\ce{H2}$.",
        "correct": false,
        "explanation": "La décarboxylation ne se définit pas par une perte de dihydrogène."
      },
      {
        "content": "$\\mathrm{R{-}CH_2{-}COOH + CO_2}$.",
        "correct": false,
        "explanation": "Ce serait un gain de CO2."
      },
      {
        "content": "$\\mathrm{R{-}MgX}$.",
        "correct": false,
        "explanation": "L’addition d’un organomagnésien sur le carbonyle permet d’obtenir le produit correspondant après hydrolyse."
      },
      {
        "content": "$\\mathrm{R{-}CH_3 + CO_2}$.",
        "correct": true,
        "explanation": "C'est le schéma simplifié représenté."
      }
    ],
    "explanation": "La carboxylation par $\\ce{CO2}$ ajoute une unité carbone au squelette, tandis que la décarboxylation en retire une sous forme de $\\ce{CO2}$."
  },
  {
    "order": 63,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une décarboxylation peut donc être distinguée d'une carboxylation par CO2 car:",
    "choices": [
      {
        "content": "La décarboxylation perd CO2.",
        "correct": true,
        "explanation": "Par définition, la décarboxylation perd CO2."
      },
      {
        "content": "La carboxylation d'un organomagnésien utilise CO2.",
        "correct": true,
        "explanation": "Un organomagnésien apporte un fragment carboné nucléophile qui forme une nouvelle liaison carbone–carbone avec un centre électrophile."
      },
      {
        "content": "La décarboxylation diminue le squelette d'un carbone.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "La carboxylation par CO2 diminue aussi le squelette d'un carbone.",
        "correct": false,
        "explanation": "La proposition est fausse : la décarboxylation diminue le squelette d'un carbone."
      },
      {
        "content": "L’acide obtenu contient un carbone de plus que le radical carboné de l’organomagnésien.",
        "correct": true,
        "explanation": "Le carbone supplémentaire provient du $\\ce{CO2}$."
      }
    ],
    "explanation": "La carboxylation par $\\ce{CO2}$ ajoute une unité carbone au squelette, tandis que la décarboxylation en retire une sous forme de $\\ce{CO2}$."
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la voie enzymatique de décarboxylation:",
    "choices": [
      {
        "content": "Le bilan carbone reste une perte d'un carbone organique.",
        "correct": true,
        "explanation": "Le CO2 emporte un carbone."
      },
      {
        "content": "Une décarboxylation correspond à une perte de $\\ce{CO2}$.",
        "correct": true,
        "explanation": "La réaction retire un groupement carboxylé sous forme de dioxyde de carbone."
      },
      {
        "content": "Elle n’est pas explicitement mentionnée.",
        "correct": false,
        "explanation": "La relation correcte est: « Elle est explicitement mentionnée ». La négation proposée est donc fausse."
      },
      {
        "content": "Elle conduit également à une perte de CO2.",
        "correct": true,
        "explanation": "La perte d’une molécule de $\\ce{CO2}$ constitue le bilan caractéristique d’une décarboxylation."
      },
      {
        "content": "Elle est exclue des organismes vivants par définition.",
        "correct": false,
        "explanation": "Une décarboxylation peut se produire par voie chimique ou par voie enzymatique."
      }
    ],
    "explanation": "Le CO2 emporte un carbone."
  },
  {
    "order": 65,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Lors d'une décarboxylation, quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Du dioxyde de carbone est dégagé.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Le produit organique est plus court d'un carbone.",
        "correct": true,
        "explanation": "La libération d’un $\\ce{CO2}$ retire une unité carbone du squelette organique."
      },
      {
        "content": "Un carbone provenant de l'extérieur est ajouté.",
        "correct": false,
        "explanation": "La proposition est fausse : du dioxyde de carbone est dégagé."
      },
      {
        "content": "Pour obtenir un acide à cinq carbones, il faut nécessairement utiliser un organomagnésien à six carbones.",
        "correct": false,
        "explanation": "Le réactif organomagnésien doit comporter un carbone de moins que l’acide final."
      },
      {
        "content": "Une fonction acide carboxylique est impliquée dans le groupe perdu.",
        "correct": true,
        "explanation": "Le carbone carboxylique part sous forme de CO2 dans les schémas."
      }
    ],
    "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
  },
  {
    "order": 66,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel mot décrit le mieux la transformation inverse, du point de vue du bilan carbone, de l'utilisation de CO2 avec un organomagnésien?",
    "choices": [
      {
        "content": "Décarboxylation.",
        "correct": true,
        "explanation": "Elle retire un carbone sous forme de CO2."
      },
      {
        "content": "Amidification.",
        "correct": false,
        "explanation": "Une amidification forme une amide ; elle ne correspond pas à une réaction ajoutant ou retirant un carbone au squelette."
      },
      {
        "content": "$\\ce{H2O}$ uniquement.",
        "correct": false,
        "explanation": "L’eau seule n’apporte pas le carbone supplémentaire nécessaire à la carboxylation."
      },
      {
        "content": "Hydrolyse.",
        "correct": false,
        "explanation": "Ce n'est pas l'opposition de bilan carbone recherchée."
      },
      {
        "content": "Saponification.",
        "correct": false,
        "explanation": "La saponification est l’hydrolyse basique d’un ester ; elle ne correspond pas à une décarboxylation."
      }
    ],
    "explanation": "Elle retire un carbone sous forme de CO2."
  },
  {
    "order": 67,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule à 6 carbones subit une décarboxylation simple correspondant à la perte d'un seul CO2. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "Le produit organique compte 7 carbones.",
        "correct": false,
        "explanation": "La perte d’un $\\ce{CO2}$ retire un carbone : une molécule à six carbones donne donc un produit organique à cinq carbones."
      },
      {
        "content": "Le comptage des carbones permet de vérifier le bilan.",
        "correct": true,
        "explanation": "Une décarboxylation retire exactement le carbone du $\\ce{CO2}$ éliminé ; le comptage du squelette permet donc de vérifier le bilan."
      },
      {
        "content": "Une décarboxylation ajoute un atome de carbone provenant de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "L’ajout de $\\ce{CO2}$ intervient au contraire dans la carboxylation d’un organomagnésien."
      },
      {
        "content": "Le produit organique compte 5 carbones.",
        "correct": true,
        "explanation": "Une unité carbone est perdue."
      },
      {
        "content": "Un carbone se retrouve dans CO2.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      }
    ],
    "explanation": "La carboxylation par $\\ce{CO2}$ ajoute une unité carbone au squelette, tandis que la décarboxylation en retire une sous forme de $\\ce{CO2}$."
  },
  {
    "order": 68,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une molécule organique à 9 carbones perd une seule molécule de CO2 par décarboxylation. Combien de carbones reste-t-il dans le produit organique?",
    "answer": {
      "type": "number",
      "value": 8,
      "tolerance": 0
    },
    "explanation": "Une décarboxylation simple fait perdre un carbone au squelette organique."
  },
  {
    "order": 69,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare deux réactions: A, $\\mathrm{R{-}MgX + CO_2 \\rightarrow R{-}COOH}$; B, décarboxylation d'un acide. Quelles propositions sont exactes?",
    "choices": [
      {
        "content": "CO2 est produit dans B.",
        "correct": true,
        "explanation": "Dans une décarboxylation, le $\\ce{CO2}$ apparaît parmi les produits."
      },
      {
        "content": "Pour obtenir un acide à cinq carbones, il faut nécessairement utiliser un organomagnésien à six carbones.",
        "correct": false,
        "explanation": "Le réactif organomagnésien doit comporter un carbone de moins que l’acide final."
      },
      {
        "content": "A ajoute un carbone à R.",
        "correct": true,
        "explanation": "Le carbone vient de CO2."
      },
      {
        "content": "B retire un carbone au squelette organique.",
        "correct": true,
        "explanation": "Le carbone part dans CO2."
      },
      {
        "content": "CO2 est consommé dans A.",
        "correct": true,
        "explanation": "Dans une carboxylation par $\\ce{CO2}$, celui-ci est un réactif qui apporte une unité carbone."
      }
    ],
    "explanation": "La carboxylation par $\\ce{CO2}$ ajoute une unité carbone au squelette, tandis que la décarboxylation en retire une sous forme de $\\ce{CO2}$."
  },
  {
    "order": 70,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une structure possède une fonction acide carboxylique et un carbonyle dans un environnement favorable à la décarboxylation. Quelles conclusions sont exactes ?",
    "choices": [
      {
        "content": "Le carbonyle peut appartenir à plusieurs familles fonctionnelles.",
        "correct": true,
        "explanation": "Cétone, aldéhyde, acide ou ester sont cités."
      },
      {
        "content": "La présence du carbonyle est mise en avant comme facteur structural favorable.",
        "correct": true,
        "explanation": "C'est l'intérêt de la rubrique."
      },
      {
        "content": "La réaction devient obligatoirement une hydrolyse de nitrile.",
        "correct": false,
        "explanation": "L’hydrolyse d’un nitrile passe par une amide intermédiaire avant d’aboutir à l’acide carboxylique."
      },
      {
        "content": "L’hydrolyse d’un nitrile conduit directement à un alcane sans intermédiaire fonctionnel.",
        "correct": false,
        "explanation": "Le bilan présenté passe par une amide avant d’aboutir à l’acide."
      },
      {
        "content": "La décarboxylation ne peut pas être particulièrement facile.",
        "correct": false,
        "explanation": "La relation correcte est: « La décarboxylation peut être particulièrement facile ». La négation proposée est donc fausse."
      }
    ],
    "explanation": "Cétone, aldéhyde, acide ou ester sont cités."
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels indices permettent d'identifier une question de décarboxylation?",
    "choices": [
      {
        "content": "Une décarboxylation ajoute un atome de carbone provenant de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "L’ajout de $\\ce{CO2}$ intervient au contraire dans la carboxylation d’un organomagnésien."
      },
      {
        "content": "Perte de CO2.",
        "correct": true,
        "explanation": "La perte d’une molécule de $\\ce{CO2}$ constitue le bilan caractéristique d’une décarboxylation."
      },
      {
        "content": "Produit organique avec un carbone de moins.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Fonction acide carboxylique dans le substrat.",
        "correct": true,
        "explanation": "Une décarboxylation nécessite qu’un groupe carboxyle soit présent dans le substrat afin de pouvoir être éliminé sous forme de $\\ce{CO2}$."
      },
      {
        "content": "Gain d'un carbone grâce à CO2.",
        "correct": false,
        "explanation": "Un gain de carbone par $\\ce{CO2}$ correspond à une carboxylation ; une décarboxylation provoque au contraire une perte de carbone."
      }
    ],
    "explanation": "L’ajout de $\\ce{CO2}$ intervient au contraire dans la carboxylation d’un organomagnésien."
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du schéma favorable à la décarboxylation présenté:",
    "choices": [
      {
        "content": "Le produit conserve le groupement carbonylé non perdu.",
        "correct": true,
        "explanation": "Le schéma montre R-CH2-CO-R' après perte de CO2."
      },
      {
        "content": "Le produit conserve nécessairement le groupe COOH.",
        "correct": false,
        "explanation": "La fonction carboxylique est celle qui est perdue dans la décarboxylation représentée."
      },
      {
        "content": "Un acide carboxylique peut céder le proton de son groupe $\\ce{-COOH}$ pour former un carboxylate.",
        "correct": true,
        "explanation": "La déprotonation conduit au motif $\\ce{R-COO^-}$, dont la charge est délocalisée sur les deux oxygènes."
      },
      {
        "content": "Le substrat ne contient pas une fonction acide carboxylique.",
        "correct": false,
        "explanation": "La relation correcte est: « Le substrat contient une fonction acide carboxylique ». La négation proposée est donc fausse."
      },
      {
        "content": "Un second groupement carbonylé est présent.",
        "correct": true,
        "explanation": "Le schéma montre notamment un motif CO-R'."
      }
    ],
    "explanation": "Le schéma montre R-CH2-CO-R' après perte de CO2."
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une voie biochimique est décrite comme transformant un acide organique en un produit plus court avec dégagement de CO2. Quelles propositions sont cohérentes avec la?",
    "choices": [
      {
        "content": "Il s'agit d'une décarboxylation enzymatique possible.",
        "correct": true,
        "explanation": "La voie enzymatique est explicitement citée."
      },
      {
        "content": "Le produit possède un carbone de moins si une seule molécule de CO2 est perdue.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "La réaction est nécessairement une carboxylation.",
        "correct": false,
        "explanation": "Le CO2 est produit, pas consommé."
      },
      {
        "content": "Le terme décarboxylation est approprié.",
        "correct": true,
        "explanation": "Par définition, le terme décarboxylation est approprié."
      },
      {
        "content": "Pour obtenir un acide à cinq carbones, il faut nécessairement utiliser un organomagnésien à six carbones.",
        "correct": false,
        "explanation": "Le réactif organomagnésien doit comporter un carbone de moins que l’acide final."
      }
    ],
    "explanation": "La voie enzymatique est explicitement citée."
  },
  {
    "order": 74,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule possédant 5 carbones est carboxylée par CO2 dans une première étape puis décarboxylée dans une seconde étape unique. Si l'on ne considère que le bilan carbone de ces deux opérations:",
    "choices": [
      {
        "content": "La décarboxylation ajoute encore un carbone.",
        "correct": false,
        "explanation": "Une décarboxylation correspond à la perte d’un groupe carboxyle sous forme de $\\ce{CO2}$."
      },
      {
        "content": "Une décarboxylation ajoute un atome de carbone provenant de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "L’ajout de $\\ce{CO2}$ intervient au contraire dans la carboxylation d’un organomagnésien."
      },
      {
        "content": "Après carboxylation, elle ne peut pas compter 6 carbones.",
        "correct": false,
        "explanation": "La relation correcte est: « Après carboxylation, elle peut compter 6 carbones ». La négation proposée est donc fausse."
      },
      {
        "content": "Après une décarboxylation unique, elle revient à 5 carbones.",
        "correct": true,
        "explanation": "Une décarboxylation retire une unité carbone du squelette sous forme de $\\ce{CO2}$."
      },
      {
        "content": "Les deux étapes ont des effets opposés sur le bilan carbone.",
        "correct": true,
        "explanation": "La carboxylation ajoute un carbone par $\\ce{CO2}$, tandis qu’une décarboxylation en retire un sous forme de $\\ce{CO2}$."
      }
    ],
    "explanation": "La carboxylation ajoute un carbone par $\\ce{CO2}$, tandis qu’une décarboxylation en retire un sous forme de $\\ce{CO2}$."
  },
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel gaz caractérise une décarboxylation?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "CO2",
        "dioxyde de carbone",
        "co2"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "La décarboxylation correspond à une perte de dioxyde de carbone."
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles informations suffisent pour caractériser une décarboxylation au niveau attendu ?",
    "choices": [
      {
        "content": "Une décarboxylation ajoute un atome de carbone provenant de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "L’ajout de $\\ce{CO2}$ intervient au contraire dans la carboxylation d’un organomagnésien."
      },
      {
        "content": "Une définition par perte de CO2.",
        "correct": true,
        "explanation": "La perte d’une molécule de $\\ce{CO2}$ constitue le bilan caractéristique d’une décarboxylation."
      },
      {
        "content": "La possibilité de voies chimique et enzymatique.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Des structures carbonylées favorables.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Un mécanisme électronique exhaustif avec toutes les étapes élémentaires.",
        "correct": false,
        "explanation": "La question porte sur le bilan et les facteurs structuraux, sans exiger un mécanisme électronique détaillé étape par étape."
      }
    ],
    "explanation": "L’ajout de $\\ce{CO2}$ intervient au contraire dans la carboxylation d’un organomagnésien."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux transformations aux effets opposés sur le nombre de carbones.",
    "choices": [
      {
        "content": "Hydrolyse d'un ester.",
        "correct": false,
        "explanation": "Pas de changement de squelette acyle dans le bilan simplifié."
      },
      {
        "content": "Hydrolyse d'une amide.",
        "correct": false,
        "explanation": "Pas de gain/perte d'un carbone dans le bilan donné."
      },
      {
        "content": "Pour obtenir un acide à cinq carbones, il faut nécessairement utiliser un organomagnésien à six carbones.",
        "correct": false,
        "explanation": "Le réactif organomagnésien doit comporter un carbone de moins que l’acide final."
      },
      {
        "content": "Carboxylation d'un organomagnésien par CO2.",
        "correct": true,
        "explanation": "Lors d’une carboxylation d’un organomagnésien, le carbone du $\\ce{CO2}$ devient celui du groupe carboxyle et allonge le squelette d’une unité."
      },
      {
        "content": "Décarboxylation.",
        "correct": true,
        "explanation": "Une décarboxylation retire une unité carbone du squelette sous forme de $\\ce{CO2}$."
      }
    ],
    "explanation": "Pas de changement de squelette acyle dans le bilan simplifié."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Une décarboxylation libère CO2.",
        "correct": true,
        "explanation": "Par définition, une décarboxylation libère CO2."
      },
      {
        "content": "Elle peut être chimique.",
        "correct": true,
        "explanation": "Une décarboxylation peut également se produire par voie chimique lorsque la structure du substrat la favorise."
      },
      {
        "content": "Elle peut être enzymatique.",
        "correct": true,
        "explanation": "Une décarboxylation peut être réalisée par une voie enzymatique dans le contexte biologique considéré."
      },
      {
        "content": "Une décarboxylation unique diminue le produit organique d'un carbone.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Un carbonyle dans la structure favorable peut faciliter la réaction.",
        "correct": true,
        "explanation": "La présence d’un groupe carbonyle dans un environnement favorable peut faciliter la décarboxylation."
      },
      {
        "content": "Une décarboxylation consomme CO2.",
        "correct": false,
        "explanation": "Une décarboxylation libère du $\ce{CO2}$ ; elle ne le consomme pas."
      },
      {
        "content": "Elle augmente toujours le squelette d'un carbone.",
        "correct": false,
        "explanation": "La proposition est fausse : une décarboxylation unique diminue le produit organique d'un carbone."
      },
      {
        "content": "Seules les cétones sont citées comme fonctions carbonylées favorables.",
        "correct": false,
        "explanation": "Aldéhyde, acide et ester sont aussi cités."
      },
      {
        "content": "La voie enzymatique est exclue.",
        "correct": false,
        "explanation": "Une décarboxylation peut être catalysée par une enzyme tout en conservant le bilan global de libération de $\\ce{CO2}$."
      },
      {
        "content": "Le bilan carbone est identique à celui de R-MgX + CO2.",
        "correct": false,
        "explanation": "La carboxylation par $\\ce{CO2}$ ajoute un carbone, tandis que la décarboxylation en retire un ; leurs bilans carbone sont opposés."
      }
    ],
    "explanation": "Une décarboxylation peut également se produire par voie chimique lorsque la structure du substrat la favorise."
  }
];
