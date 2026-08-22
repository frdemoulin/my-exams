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
        "explanation": "Une décarboxylation libère du $\\ce{CO2}$ et retire une unité carbone au squelette ; elle ne consomme pas de $\\ce{CO2}$."
      },
      {
        "content": "Elle ajoute un carbone provenant de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "Une décarboxylation libère du $\\ce{CO2}$ et retire une unité carbone au squelette ; elle ne consomme pas de $\\ce{CO2}$."
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
    "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
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
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      },
      {
        "content": "$\\ce{H2O}$.",
        "correct": false,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      },
      {
        "content": "$\\ce{O2}$.",
        "correct": false,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      },
      {
        "content": "$\\ce{CO2}$.",
        "correct": true,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      },
      {
        "content": "$\\ce{H2}$.",
        "correct": false,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      }
    ],
    "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
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
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      },
      {
        "content": "Le produit organique possède un carbone de plus que la molécule initiale.",
        "correct": false,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      },
      {
        "content": "Le produit organique possède un carbone de moins que la molécule initiale.",
        "correct": true,
        "explanation": "Le carbone part sous forme de CO2."
      },
      {
        "content": "Le bilan carbone doit tenir compte du carbone du CO2.",
        "correct": true,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      },
      {
        "content": "Le nombre de carbones augmente d'une unité.",
        "correct": false,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      }
    ],
    "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
  },
  {
    "order": 60,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une décarboxylation est particulièrement facile lorsque :",
    "choices": [
      {
        "content": "Le carbonyle voisin ne peut appartenir qu’à une amide.",
        "correct": false,
        "explanation": "Les structures favorables ne se limitent pas à une seule famille : plusieurs fonctions carbonylées peuvent être concernées."
      },
      {
        "content": "Le carbonyle peut appartenir à un aldéhyde.",
        "correct": true,
        "explanation": "Une fonction carbonylée voisine adaptée peut favoriser la décarboxylation ; les exemples cités incluent cétone, aldéhyde, acide et ester."
      },
      {
        "content": "Aucun autre groupe carbonylé n’est présent à proximité de la fonction acide.",
        "correct": false,
        "explanation": "La décarboxylation est favorisée lorsque la fonction acide carboxylique se trouve dans une structure comportant un autre carbonyle adapté, par exemple de type cétone, aldéhyde, acide ou ester."
      },
      {
        "content": "Le carbonyle voisin peut appartenir à un ester.",
        "correct": true,
        "explanation": "Une fonction carbonylée voisine adaptée peut favoriser la décarboxylation ; les exemples cités incluent cétone, aldéhyde, acide et ester."
      },
      {
        "content": "Un même carbone porte une fonction acide carboxylique et un motif carbonylé adapté.",
        "correct": true,
        "explanation": "La fonction acide carboxylique fournit le carbone éliminé sous forme de $\\ce{CO2}$ lors de la décarboxylation."
      }
    ],
    "explanation": "La décarboxylation est favorisée lorsque la fonction acide carboxylique se trouve dans une structure comportant un autre carbonyle adapté, par exemple de type cétone, aldéhyde, acide ou ester."
  },
  {
    "order": 61,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles fonctions carbonylées peuvent participer à une structure favorable à la décarboxylation ?",
    "choices": [
      {
        "content": "Amine dépourvue de groupe carbonyle.",
        "correct": false,
        "explanation": "Les structures favorables ne se limitent pas à une seule famille : plusieurs fonctions carbonylées peuvent être concernées."
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
    "explanation": "La décarboxylation est favorisée lorsque la fonction acide carboxylique se trouve dans une structure comportant un autre carbonyle adapté, par exemple de type cétone, aldéhyde, acide ou ester."
  },
  {
    "order": 62,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel bilan simple correspond à la décarboxylation d’un acide de type $\\mathrm{R{-}CH_2{-}COOH}$ ?",
    "choices": [
      {
        "content": "$\\mathrm{R{-}CONH_2}$.",
        "correct": false,
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
      },
      {
        "content": "$\\mathrm{R{-}CH_2OH}$.",
        "correct": false,
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
      },
      {
        "content": "$\\mathrm{R{-}CH_2{-}COOH + CO_2}$.",
        "correct": false,
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
      },
      {
        "content": "$\\mathrm{R{-}MgX}$.",
        "correct": false,
        "explanation": "Cette proposition ne respecte pas le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ et son gain d’une unité carbone."
      },
      {
        "content": "$\\mathrm{R{-}CH_3 + CO_2}$.",
        "correct": true,
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
      }
    ],
    "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
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
        "explanation": "La décarboxylation se reconnaît à la perte de $\\ce{CO2}$, alors que la carboxylation utilise le $\\ce{CO2}$ comme réactif."
      },
      {
        "content": "La carboxylation d'un organomagnésien utilise CO2.",
        "correct": true,
        "explanation": "Le bilan $\\ce{R-MgX + CO2 -> R-COOH}$ incorpore le carbone du $\\ce{CO2}$ dans la fonction carboxylique."
      },
      {
        "content": "La décarboxylation diminue le squelette d'un carbone.",
        "correct": true,
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
      },
      {
        "content": "La carboxylation par $\\ce{CO2}$ retire un carbone au squelette.",
        "correct": false,
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
      },
      {
        "content": "L’acide obtenu contient un carbone de plus que le radical carboné de l’organomagnésien.",
        "correct": true,
        "explanation": "Lors d’une carboxylation, le carbone du $\\ce{CO2}$ est incorporé : l’acide obtenu possède donc une unité carbone de plus que R."
      }
    ],
    "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
  },
  {
    "order": 64,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos d’une décarboxylation par voie enzymatique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le bilan carbone reste une perte d'un carbone organique.",
        "correct": true,
        "explanation": "Une décarboxylation peut avoir lieu par voie chimique ou enzymatique ; dans les deux cas, le bilan global est une perte de $\\ce{CO2}$."
      },
      {
        "content": "Une décarboxylation correspond à une perte de $\\ce{CO2}$.",
        "correct": true,
        "explanation": "La réaction retire un groupement carboxylé sous forme de dioxyde de carbone."
      },
      {
        "content": "La voie enzymatique est exclue de la définition de la décarboxylation.",
        "correct": false,
        "explanation": "La voie enzymatique fait partie des possibilités indiquées pour une décarboxylation."
      },
      {
        "content": "Elle conduit également à une perte de CO2.",
        "correct": true,
        "explanation": "La perte d’une molécule de $\\ce{CO2}$ constitue le bilan caractéristique d’une décarboxylation."
      },
      {
        "content": "Une décarboxylation enzymatique ne peut pas avoir lieu dans un organisme vivant.",
        "correct": false,
        "explanation": "La voie enzymatique fait partie des possibilités indiquées pour une décarboxylation."
      }
    ],
    "explanation": "Une décarboxylation peut avoir lieu par voie chimique ou enzymatique ; dans les deux cas, le bilan global est une perte de $\\ce{CO2}$."
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
        "explanation": "La perte de $\\ce{CO2}$ constitue le bilan caractéristique d’une décarboxylation."
      },
      {
        "content": "Le produit organique est plus court d'un carbone.",
        "correct": true,
        "explanation": "La libération d’un $\\ce{CO2}$ retire une unité carbone du squelette organique."
      },
      {
        "content": "Un carbone extérieur est ajouté au squelette pendant la décarboxylation.",
        "correct": false,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      },
      {
        "content": "Le $\\ce{CO2}$ est consommé au cours de la décarboxylation.",
        "correct": false,
        "explanation": "Une décarboxylation libère du $\\ce{CO2}$ et retire une unité carbone au squelette ; elle ne consomme pas de $\\ce{CO2}$."
      },
      {
        "content": "Une fonction acide carboxylique est impliquée dans le groupe perdu.",
        "correct": true,
        "explanation": "Le carbone carboxylique part sous forme de CO2 dans les schémas."
      }
    ],
    "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
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
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
      },
      {
        "content": "Saponification.",
        "correct": false,
        "explanation": "La saponification est l’hydrolyse basique d’un ester ; elle ne correspond pas à une décarboxylation."
      }
    ],
    "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
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
        "content": "Le produit organique compte 6 carbones après la perte de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "Le $\\ce{CO2}$ est produit lors d’une décarboxylation, il n’est pas consommé."
      },
      {
        "content": "Le produit organique compte 5 carbones.",
        "correct": true,
        "explanation": "La perte d’une molécule de $\\ce{CO2}$ retire un carbone au squelette organique."
      },
      {
        "content": "Un carbone se retrouve dans CO2.",
        "correct": true,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      }
    ],
    "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
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
    "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
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
        "content": "La réaction A libère du $\\ce{CO2}$.",
        "correct": false,
        "explanation": "Le $\\ce{CO2}$ est produit lors d’une décarboxylation, il n’est pas consommé."
      },
      {
        "content": "A ajoute un carbone à R.",
        "correct": true,
        "explanation": "Une décarboxylation libère du $\\ce{CO2}$ et retire une unité carbone au squelette ; elle ne consomme pas de $\\ce{CO2}$."
      },
      {
        "content": "B retire un carbone au squelette organique.",
        "correct": true,
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
      },
      {
        "content": "CO2 est consommé dans A.",
        "correct": true,
        "explanation": "Dans une carboxylation par $\\ce{CO2}$, celui-ci est un réactif qui apporte une unité carbone."
      }
    ],
    "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
  },
  {
    "order": 70,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule possède une fonction acide carboxylique et un autre carbonyle dans une disposition favorable à la décarboxylation. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbonyle peut appartenir à plusieurs familles fonctionnelles.",
        "correct": true,
        "explanation": "Une fonction carbonylée voisine adaptée peut favoriser la décarboxylation ; les exemples cités incluent cétone, aldéhyde, acide et ester."
      },
      {
        "content": "La présence du carbonyle est mise en avant comme facteur structural favorable.",
        "correct": true,
        "explanation": "Une fonction carbonylée voisine adaptée peut favoriser la décarboxylation ; les exemples cités incluent cétone, aldéhyde, acide et ester."
      },
      {
        "content": "Seule une cétone peut constituer le carbonyle voisin favorable.",
        "correct": false,
        "explanation": "Les structures favorables ne se limitent pas à une seule famille : plusieurs fonctions carbonylées peuvent être concernées."
      },
      {
        "content": "La présence d’un carbonyle voisin empêche la décarboxylation.",
        "correct": false,
        "explanation": "La décarboxylation est favorisée lorsque la fonction acide carboxylique se trouve dans une structure comportant un autre carbonyle adapté, par exemple de type cétone, aldéhyde, acide ou ester."
      },
      {
        "content": "La décarboxylation ne peut pas être particulièrement facile.",
        "correct": false,
        "explanation": "La décarboxylation est favorisée lorsque la fonction acide carboxylique se trouve dans une structure comportant un autre carbonyle adapté, par exemple de type cétone, aldéhyde, acide ou ester."
      }
    ],
    "explanation": "La décarboxylation est favorisée lorsque la fonction acide carboxylique se trouve dans une structure comportant un autre carbonyle adapté, par exemple de type cétone, aldéhyde, acide ou ester."
  },
  {
    "order": 71,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels indices permettent d'identifier une question de décarboxylation?",
    "choices": [
      {
        "content": "Consommation de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "Une décarboxylation libère du $\\ce{CO2}$ et retire une unité carbone au squelette ; elle ne consomme pas de $\\ce{CO2}$."
      },
      {
        "content": "Perte de CO2.",
        "correct": true,
        "explanation": "La perte d’une molécule de $\\ce{CO2}$ constitue le bilan caractéristique d’une décarboxylation."
      },
      {
        "content": "Produit organique avec un carbone de moins.",
        "correct": true,
        "explanation": "La perte d’une molécule de $\\ce{CO2}$ retire un carbone au squelette organique."
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
    "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
  },
  {
    "order": 72,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d’une structure favorable à la décarboxylation, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le produit conserve le groupement carbonylé non perdu.",
        "correct": true,
        "explanation": "La décarboxylation est favorisée lorsque la fonction acide carboxylique se trouve dans une structure comportant un autre carbonyle adapté, par exemple de type cétone, aldéhyde, acide ou ester."
      },
      {
        "content": "Le produit conserve nécessairement le groupe COOH.",
        "correct": false,
        "explanation": "La fonction carboxylique est celle qui est perdue dans la décarboxylation représentée."
      },
      {
        "content": "La décarboxylation libère du $\\ce{CO2}$.",
        "correct": true,
        "explanation": "La perte de $\\ce{CO2}$ constitue le bilan caractéristique d’une décarboxylation."
      },
      {
        "content": "Le substrat est dépourvu de fonction acide carboxylique.",
        "correct": false,
        "explanation": "La décarboxylation est favorisée lorsque la fonction acide carboxylique se trouve dans une structure comportant un autre carbonyle adapté, par exemple de type cétone, aldéhyde, acide ou ester."
      },
      {
        "content": "Un second groupement carbonylé est présent.",
        "correct": true,
        "explanation": "Le schéma montre notamment un motif CO-R'."
      }
    ],
    "explanation": "La décarboxylation est favorisée lorsque la fonction acide carboxylique se trouve dans une structure comportant un autre carbonyle adapté, par exemple de type cétone, aldéhyde, acide ou ester."
  },
  {
    "order": 73,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une voie biochimique transforme un acide organique en un produit plus court avec dégagement de $\\ce{CO2}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il s'agit d'une décarboxylation enzymatique possible.",
        "correct": true,
        "explanation": "Une décarboxylation peut se produire par voie chimique ou enzymatique tout en conservant le même bilan de perte de $\\ce{CO2}$."
      },
      {
        "content": "Le produit possède un carbone de moins si une seule molécule de CO2 est perdue.",
        "correct": true,
        "explanation": "La perte d’une molécule de $\\ce{CO2}$ retire un carbone au squelette organique."
      },
      {
        "content": "La réaction est nécessairement une carboxylation.",
        "correct": false,
        "explanation": "Le dégagement de $\\ce{CO2}$ indique une décarboxylation ; une carboxylation ferait au contraire intervenir le $\\ce{CO2}$ comme réactif."
      },
      {
        "content": "Le terme décarboxylation est approprié.",
        "correct": true,
        "explanation": "Par définition, le terme décarboxylation est approprié."
      },
      {
        "content": "Le produit organique possède un carbone de plus que le substrat.",
        "correct": false,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      }
    ],
    "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
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
        "content": "La décarboxylation consomme une nouvelle molécule de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "Une décarboxylation libère du $\\ce{CO2}$ et retire une unité carbone au squelette ; elle ne consomme pas de $\\ce{CO2}$."
      },
      {
        "content": "Après carboxylation, elle ne peut pas compter 6 carbones.",
        "correct": false,
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
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
    "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
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
    "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions caractérisent correctement une décarboxylation ?",
    "choices": [
      {
        "content": "Consommation de $\\ce{CO2}$.",
        "correct": false,
        "explanation": "Une décarboxylation libère du $\\ce{CO2}$ et retire une unité carbone au squelette ; elle ne consomme pas de $\\ce{CO2}$."
      },
      {
        "content": "Une définition par perte de CO2.",
        "correct": true,
        "explanation": "La perte d’une molécule de $\\ce{CO2}$ constitue le bilan caractéristique d’une décarboxylation."
      },
      {
        "content": "La possibilité de voies chimique et enzymatique.",
        "correct": true,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      },
      {
        "content": "Des structures carbonylées favorables.",
        "correct": true,
        "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
      },
      {
        "content": "Un mécanisme électronique exhaustif avec toutes les étapes élémentaires.",
        "correct": false,
        "explanation": "La question porte sur le bilan et les facteurs structuraux, sans exiger un mécanisme électronique détaillé étape par étape."
      }
    ],
    "explanation": "Une décarboxylation correspond à la perte de $\\ce{CO2}$ et diminue d’une unité le nombre de carbones du produit organique."
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
        "explanation": "L’hydrolyse d’un ester conserve le squelette du fragment acyle et ne correspond ni à une perte de $\\ce{CO2}$ ni à un gain de carbone."
      },
      {
        "content": "Hydrolyse d'une amide.",
        "correct": false,
        "explanation": "Une amide hydrolysée donne un acide et une amine ; elle ne libère pas un alcool comme produit azoté."
      },
      {
        "content": "Oxydation d’un alcool primaire en acide.",
        "correct": false,
        "explanation": "L’oxydation poussée d’un alcool primaire ne nécessite ni nitrile ni ajout de $\\ce{CO2}$."
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
    "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
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
        "explanation": "La perte d’une molécule de $\\ce{CO2}$ constitue le bilan caractéristique d’une décarboxylation."
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
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
      },
      {
        "content": "Un carbonyle dans la structure favorable peut faciliter la réaction.",
        "correct": true,
        "explanation": "La présence d’un groupe carbonyle dans un environnement favorable peut faciliter la décarboxylation."
      },
      {
        "content": "Une décarboxylation consomme CO2.",
        "correct": false,
        "explanation": "Une décarboxylation libère du $\\ce{CO2}$ et retire une unité carbone au squelette ; elle ne consomme pas de $\\ce{CO2}$."
      },
      {
        "content": "Elle augmente toujours le squelette d'un carbone.",
        "correct": false,
        "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
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
    "explanation": "Carboxylation et décarboxylation ont des bilans carbone opposés : la première incorpore le carbone du $\\ce{CO2}$, la seconde élimine un carbone sous forme de $\\ce{CO2}$."
  }
];
