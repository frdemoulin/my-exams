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
        "explanation": "Deuxième voie citée: cette relation est conforme à la propriété ou à la transformation décrite."
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
        "explanation": "C'est la définition donnée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elle peut se produire par voie chimique.",
        "correct": true,
        "explanation": "Première voie citée: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "La décarboxylation est définie par la perte de dioxyde de carbone, par voie chimique ou enzymatique."
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
    "explanation": "Décarboxylation = perte de CO2."
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
    "explanation": "La perte du carbone carboxylique sous forme de CO2 réduit le squelette d'une unité."
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
    "explanation": "La présence d'un carbonyle dans l'environnement structural indiqué favorise la décarboxylation."
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
        "explanation": "Citée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Aldéhyde.",
        "correct": true,
        "explanation": "Citée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Autre fonction acide carboxylique.",
        "correct": true,
        "explanation": "Citée: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Ester.",
        "correct": true,
        "explanation": "Cité: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Les fonctions carbonylées citées comme pouvant favoriser la décarboxylation comprennent notamment cétone, aldéhyde, acide carboxylique et ester."
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
        "explanation": "Il s'agit d'une amide: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Le schéma illustre la perte du groupe carboxyle sous forme de CO2."
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
        "explanation": "Définition: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La carboxylation d'un organomagnésien utilise CO2.",
        "correct": true,
        "explanation": "Voie de préparation précédente: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "La décarboxylation diminue le squelette d'un carbone.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "La carboxylation par CO2 diminue aussi le squelette d'un carbone.",
        "correct": false,
        "explanation": "Elle l'augmente: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "L’acide obtenu contient un carbone de plus que le radical carboné de l’organomagnésien.",
        "correct": true,
        "explanation": "Le carbone supplémentaire provient du $\\ce{CO2}$."
      }
    ],
    "explanation": "Les deux transformations ont des bilans carbone opposés."
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
        "explanation": "C'est toujours une décarboxylation: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elle est exclue des organismes vivants par définition.",
        "correct": false,
        "explanation": "Une décarboxylation peut se produire par voie chimique ou par voie enzymatique."
      }
    ],
    "explanation": "Le mécanisme détaillé n'est pas développé, mais la possibilité d'une décarboxylation enzymatique doit être retenue."
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
        "explanation": "Conséquence: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Un carbone provenant de l'extérieur est ajouté.",
        "correct": false,
        "explanation": "Cela décrirait une carboxylation: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "La décarboxylation se suit efficacement par son bilan carboné."
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
        "explanation": "Formation d'une amide: cette relation est conforme à la propriété ou à la transformation décrite."
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
        "explanation": "Hydrolyse basique d'un ester: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Carboxylation et décarboxylation ont des effets opposés sur le nombre de carbones."
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
        "explanation": "Ce serait un gain: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Le comptage des carbones permet de vérifier le bilan.",
        "correct": true,
        "explanation": "Repère simple: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Une décarboxylation unique enlève un carbone du squelette organique."
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
        "explanation": "Produit: cette relation est conforme à la propriété ou à la transformation décrite."
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
        "explanation": "Réactif: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le couple carboxylation/décarboxylation est particulièrement utile pour contrôler le bilan carbone."
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
        "explanation": "Il s'agit d'une décarboxylation: cette relation est conforme à la propriété ou à la transformation décrite."
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
    "explanation": "Certaines structures portant un groupe carbonyle dans un environnement favorable se décarboxylent plus facilement."
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
        "explanation": "Signature: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Produit organique avec un carbone de moins.",
        "correct": true,
        "explanation": "Ce bilan correspond directement à la transformation attendue entre les réactifs et le produit."
      },
      {
        "content": "Fonction acide carboxylique dans le substrat.",
        "correct": true,
        "explanation": "Présente dans les schémas: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Gain d'un carbone grâce à CO2.",
        "correct": false,
        "explanation": "C'est une carboxylation: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Le bilan réactionnel et le comptage des carbones sont les deux indices les plus robustes."
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
    "explanation": "Le schéma montre que le carbonyle voisin peut rester dans le produit tandis que CO2 est éliminé."
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
        "explanation": "Définition: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Pour obtenir un acide à cinq carbones, il faut nécessairement utiliser un organomagnésien à six carbones.",
        "correct": false,
        "explanation": "Le réactif organomagnésien doit comporter un carbone de moins que l’acide final."
      }
    ],
    "explanation": "Le bilan global permet d’identifier une décarboxylation même lorsque le mécanisme enzymatique détaillé n’est pas demandé."
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
        "explanation": "Elle en retire un: cette relation est conforme à la propriété ou à la transformation décrite."
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
        "explanation": "Perte d'un carbone: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Les deux étapes ont des effets opposés sur le bilan carbone.",
        "correct": true,
        "explanation": "+1 puis −1: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette question croise les deux réactions sans supposer qu'elles constituent une voie réelle unique."
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
    "question": "Quel niveau de détail la fournit-elle sur la décarboxylation?",
    "choices": [
      {
        "content": "Une décarboxylation ajoute un atome de carbone provenant de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "L’ajout de $\\ce{CO2}$ intervient au contraire dans la carboxylation d’un organomagnésien."
      },
      {
        "content": "Une définition par perte de CO2.",
        "correct": true,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
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
    "explanation": "Le niveau attendu porte sur la définition de la décarboxylation, le bilan carbone et les structures qui la favorisent."
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
        "explanation": "Gain d'un carbone: cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Décarboxylation.",
        "correct": true,
        "explanation": "Perte d'un carbone: cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Carboxylation et décarboxylation forment le couple opposé du point de vue du bilan carbone."
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
        "explanation": "Définition : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Elle peut être chimique.",
        "correct": true,
        "explanation": "Voie citée : cette relation est conforme à la propriété ou à la transformation décrite."
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
        "explanation": "Elle le diminue : cette relation est conforme à la propriété ou à la transformation décrite."
      },
      {
        "content": "Seules les cétones sont citées comme fonctions carbonylées favorables.",
        "correct": false,
        "explanation": "Aldéhyde, acide et ester sont aussi cités."
      },
      {
        "content": "La voie enzymatique est exclue.",
        "correct": false,
        "explanation": "Ce point constitue l’un des éléments directement utiles pour prévoir la réaction."
      },
      {
        "content": "Le bilan carbone est identique à celui de R-MgX + CO2.",
        "correct": false,
        "explanation": "Les effets sont opposés : cette relation est conforme à la propriété ou à la transformation décrite."
      }
    ],
    "explanation": "Cette sélection consolide définition, contexte structural et bilan carbone."
  }
];
