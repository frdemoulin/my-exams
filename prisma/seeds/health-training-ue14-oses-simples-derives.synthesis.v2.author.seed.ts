import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.2 – Synthèse
 */

export const UE14_BIOCH_CH2_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels couples ose → caractéristique sont corrects ?",
    "choices": [
      {
        "content": "Glucose → aldose énergétique majeur.",
        "correct": true,
        "explanation": "Rôle et famille."
      },
      {
        "content": "Fructose → cétose présent dans le saccharose.",
        "correct": true,
        "explanation": "Rôle et famille."
      },
      {
        "content": "Ribose → pentose de l'ARN.",
        "correct": true,
        "explanation": "Association."
      },
      {
        "content": "Mannose → épimère C4 du glucose.",
        "correct": false,
        "explanation": "Il est épimère C2."
      }
    ],
    "explanation": "Cette question croise classification et rôles des principaux oses."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels couples transformation → produit sont corrects ?",
    "choices": [
      {
        "content": "Glucose oxydé en C6 → acide glucuronique.",
        "correct": true,
        "explanation": "Oxydation."
      },
      {
        "content": "Glucose réduit → sorbitol.",
        "correct": true,
        "explanation": "Réduction."
      },
      {
        "content": "Mannose réduit → mannitol.",
        "correct": true,
        "explanation": "Réduction."
      },
      {
        "content": "Glucose phosphorylé → glucosamine.",
        "correct": false,
        "explanation": "La glucosamine implique une fonction amine en C2."
      }
    ],
    "explanation": "Les principales transformations fonctionnelles doivent être distinguées."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule glucidique porte NHCOCH3 en C2. Quelles propositions sont compatibles ?",
    "choices": [
      {
        "content": "Il peut s'agir d'une osamine N-acétylée.",
        "correct": true,
        "explanation": "Motif caractéristique."
      },
      {
        "content": "Elle contient de l'azote.",
        "correct": true,
        "explanation": "NH."
      },
      {
        "content": "Elle peut participer à un polymère structural.",
        "correct": true,
        "explanation": "Chitine comme exemple."
      },
      {
        "content": "Elle est obligatoirement un acide uronique.",
        "correct": false,
        "explanation": "Un acide uronique porte une fonction acide terminale."
      }
    ],
    "explanation": "Le motif N-acétylé identifie une famille de dérivés aminés."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un dérivé glucidique fortement négatif peut porter, selon le chapitre :",
    "choices": [
      {
        "content": "Un carboxylate.",
        "correct": true,
        "explanation": "Glucuronate ou NANA ionisé."
      },
      {
        "content": "Un sulfate.",
        "correct": true,
        "explanation": "GAG sulfatés."
      },
      {
        "content": "Un phosphate.",
        "correct": true,
        "explanation": "Oses phosphorylés."
      },
      {
        "content": "Uniquement un groupe méthyle.",
        "correct": false,
        "explanation": "Un méthyle n'explique pas cette charge."
      }
    ],
    "explanation": "Carboxylates, sulfates et phosphates peuvent contribuer aux charges négatives."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la réaction de Fehling :",
    "choices": [
      {
        "content": "Elle met en évidence un pouvoir réducteur.",
        "correct": true,
        "explanation": "Test des sucres réducteurs."
      },
      {
        "content": "Le sucre réducteur est oxydé.",
        "correct": true,
        "explanation": "Bilan redox."
      },
      {
        "content": "Un précipité rouge brique de Cu2O apparaît.",
        "correct": true,
        "explanation": "Observation."
      },
      {
        "content": "Elle transforme le glucose en sorbitol.",
        "correct": false,
        "explanation": "Le sorbitol résulte d'une réduction différente."
      }
    ],
    "explanation": "Fehling est un test redox, à distinguer de la réduction en polyol."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un patient élimine un médicament sous forme glucuronoconjuguée. Quelles conclusions sont cohérentes ?",
    "choices": [
      {
        "content": "L'acide glucuronique participe à la transformation.",
        "correct": true,
        "explanation": "Dérivé concerné."
      },
      {
        "content": "La solubilité du métabolite augmente.",
        "correct": true,
        "explanation": "But."
      },
      {
        "content": "L'élimination est facilitée.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Le médicament est nécessairement converti en mannitol.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "La glucuronoconjugaison est une voie de solubilisation et d'excrétion."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une glycoprotéine de surface riche en acide sialique :",
    "choices": [
      {
        "content": "Peut participer à la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "Peut porter des charges négatives.",
        "correct": true,
        "explanation": "COO−."
      },
      {
        "content": "Peut présenter des chaînes étendues par répulsion électrostatique.",
        "correct": true,
        "explanation": "Modèle du support."
      },
      {
        "content": "Est dépourvue de glucides.",
        "correct": false,
        "explanation": "Une glycoprotéine contient des glycannes."
      }
    ],
    "explanation": "Le NANA contribue aux propriétés de surface des glycoconjugués."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des pentoses phosphorylés des acides nucléiques :",
    "choices": [
      {
        "content": "Ribose-5-phosphate est associé à l'ARN.",
        "correct": true,
        "explanation": "Association."
      },
      {
        "content": "2-désoxyribose-5-phosphate est associé à l'ADN.",
        "correct": true,
        "explanation": "Association."
      },
      {
        "content": "La position C5 est commune aux deux phosphorylations citées.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Ce sont des hexoses.",
        "correct": false,
        "explanation": "Ce sont des pentoses."
      }
    ],
    "explanation": "La phosphorylation C5 relie les pentoses à la synthèse des acides nucléiques."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux dérivés de réduction explicitement issus d'hexoses.",
    "choices": [
      {
        "content": "Mannitol.",
        "correct": true,
        "explanation": "Mannose réduit."
      },
      {
        "content": "Sorbitol.",
        "correct": true,
        "explanation": "Glucose réduit."
      },
      {
        "content": "NANA.",
        "correct": false,
        "explanation": "Dérivé aminé/acide complexe."
      },
      {
        "content": "Acide glucuronique.",
        "correct": false,
        "explanation": "Dérivé oxydé."
      }
    ],
    "explanation": "Mannitol et sorbitol sont les deux polyols d'hexoses du support."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Une osamine peut être N-acétylée.",
        "correct": true,
        "explanation": "Transformation."
      },
      {
        "content": "Un ose peut être phosphorylé.",
        "correct": true,
        "explanation": "Ester phosphorique."
      },
      {
        "content": "Un ose peut être sulfaté.",
        "correct": true,
        "explanation": "Ester sulfurique."
      },
      {
        "content": "Un aldose peut être oxydé lors du test de Fehling.",
        "correct": true,
        "explanation": "Pouvoir réducteur."
      },
      {
        "content": "L'acide ascorbique est un dérivé glucidique cité.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "Toutes ces transformations donnent le même produit.",
        "correct": false,
        "explanation": "Dérivés différents."
      },
      {
        "content": "Le sorbitol est un acide sialique.",
        "correct": false,
        "explanation": "Polyol."
      },
      {
        "content": "Le glucuronate est une osamine.",
        "correct": false,
        "explanation": "Dérivé oxydé."
      },
      {
        "content": "La chitine est un ester phosphorique.",
        "correct": false,
        "explanation": "Polymère d'osamine N-acétylée."
      },
      {
        "content": "La streptomycine est une vitamine.",
        "correct": false,
        "explanation": "Antibiotique."
      }
    ],
    "explanation": "La synthèse PRACTICE distingue les grandes familles de dérivés."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un ose est d'abord oxydé sur un alcool terminal, tandis qu'un autre exemplaire est réduit sur sa fonction carbonyle. Quelles conclusions sont correctes ?",
    "choices": [
      {
        "content": "Le premier peut devenir un acide uronique.",
        "correct": true,
        "explanation": "Exemple du glucose → acide glucuronique."
      },
      {
        "content": "Le second devient un polyol.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Les transformations sont de sens redox opposé.",
        "correct": true,
        "explanation": "Oxydation versus réduction."
      },
      {
        "content": "Les deux produits sont fonctionnellement identiques.",
        "correct": false,
        "explanation": "Acide versus polyol."
      }
    ],
    "explanation": "Le MASTER doit savoir opposer dérivés oxydés et réduits."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé possède à la fois un dérivé aminé et un groupement acétyl lié à l'azote. Quelles propositions sont cohérentes ?",
    "choices": [
      {
        "content": "Il s'agit d'une N-acétylation.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Le motif est compatible avec une osamine N-acétylée.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "La chitine constitue un exemple de polymère lié à ce type de motif.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "La modification correspond à une phosphorylation.",
        "correct": false,
        "explanation": "Ce n'est pas un phosphate."
      }
    ],
    "explanation": "La lecture du motif fonctionnel permet d'identifier la transformation."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On suit la voie D-mannosamine → acide neuraminique → NANA. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'acide pyruvique intervient dans la première transformation.",
        "correct": true,
        "explanation": "Ajout à la D-mannosamine."
      },
      {
        "content": "L'acide neuraminique peut cycliser C2-C6.",
        "correct": true,
        "explanation": "Étape."
      },
      {
        "content": "Une N-acétylation intervient ensuite.",
        "correct": true,
        "explanation": "Formation du NANA."
      },
      {
        "content": "Le produit final est aussi appelé acide sialique.",
        "correct": true,
        "explanation": "Synonyme."
      }
    ],
    "explanation": "La succession des étapes vers le NANA doit être maîtrisée."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une glycoprotéine porte de nombreux NANA ionisés et des chaînes glycaniques étendues. Quel raisonnement est compatible ?",
    "choices": [
      {
        "content": "Les carboxylates COO− se repoussent.",
        "correct": true,
        "explanation": "Charges de même signe."
      },
      {
        "content": "Cette répulsion contribue à l'extension des chaînes.",
        "correct": true,
        "explanation": "Structure en bâtonnet."
      },
      {
        "content": "Les NANA peuvent participer à la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "L'ionisation neutralise toutes les charges.",
        "correct": false,
        "explanation": "Elle crée une charge négative."
      }
    ],
    "explanation": "Le NANA relie chimie acide, électrostatique et biologie cellulaire."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un métabolite est nommé fructose-1,6-bisphosphate. Quelles informations sont directement codées par le nom ?",
    "choices": [
      {
        "content": "Il dérive du fructose.",
        "correct": true,
        "explanation": "Nom."
      },
      {
        "content": "Il possède deux phosphates.",
        "correct": true,
        "explanation": "bis-."
      },
      {
        "content": "Les positions sont C1 et C6.",
        "correct": true,
        "explanation": "Indices."
      },
      {
        "content": "Il s'agit nécessairement d'une osamine.",
        "correct": false,
        "explanation": "Aucune fonction amine n'est indiquée."
      }
    ],
    "explanation": "La nomenclature des esters phosphoriques fournit les positions de substitution."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un GAG porte simultanément une osamine sulfatée et un acide uronique. Quelles propriétés sont cohérentes ?",
    "choices": [
      {
        "content": "Des sulfates peuvent apporter des charges négatives.",
        "correct": true,
        "explanation": "Esters sulfuriques."
      },
      {
        "content": "Le carboxylate de l'acide uronique peut aussi être négatif.",
        "correct": true,
        "explanation": "Forme ionisée."
      },
      {
        "content": "La molécule peut être fortement hydrophile.",
        "correct": true,
        "explanation": "Charges et OH favorisent l'hydratation."
      },
      {
        "content": "Il s'agit nécessairement d'une protéine fibrillaire.",
        "correct": false,
        "explanation": "Un GAG est glucidique."
      }
    ],
    "explanation": "La forte charge de certains GAG vient de plusieurs fonctions ionisables."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel dérivé du glucose, formé par réduction, est cité comme édulcorant et utilisé dans des dentifrices ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sorbitol",
        "le sorbitol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Le sorbitol est le polyol du glucose et possède les usages cités."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de positions phosphorylées distinctes sont indiquées dans le nom fructose-1,6-bisphosphate ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Les phosphates sont portés en C1 et C6."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un dérivé glucidique est décrit comme vitamine C. Quelles propositions sont exactes selon la fiche ?",
    "choices": [
      {
        "content": "Il s'agit de l'acide ascorbique.",
        "correct": true,
        "explanation": "Synonyme."
      },
      {
        "content": "Il provient initialement du L-gulose dans le schéma du support.",
        "correct": true,
        "explanation": "Origine citée."
      },
      {
        "content": "Sa formation implique plusieurs transformations.",
        "correct": true,
        "explanation": "Doubles liaisons/cyclisations."
      },
      {
        "content": "La formule chimique complète doit être mémorisée.",
        "correct": false,
        "explanation": "La fiche dit explicitement le contraire."
      }
    ],
    "explanation": "L'exemple de vitamine C doit être retenu à un niveau fonctionnel, pas structural exhaustif."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une substance est un antibiotique et est présentée comme dérivé glucidique dans la fiche. Laquelle ?",
    "choices": [
      {
        "content": "Streptomycine.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "Acide ascorbique.",
        "correct": false,
        "explanation": "Vitamine C."
      },
      {
        "content": "Mannitol.",
        "correct": false,
        "explanation": "Polyol."
      },
      {
        "content": "Glucuronate.",
        "correct": false,
        "explanation": "Dérivé acide."
      }
    ],
    "explanation": "La streptomycine est l'exemple antibiotique."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelle démarche permet de classer un dérivé d'ose inconnu à partir de sa fonction nouvelle ?",
    "choices": [
      {
        "content": "COOH terminal issu d'une oxydation → dérivé acide/uronique.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Carbonyle réduit en alcool → polyol.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "NH2 en C2 → osamine.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Phosphate ou sulfate sur OH → ose estérifié.",
        "correct": true,
        "explanation": "Repère."
      }
    ],
    "explanation": "Les familles de dérivés peuvent être reconnues par la transformation fonctionnelle."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Glucose → acide glucuronique par oxydation de C6.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Glucose → sorbitol par réduction.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Une osamine porte une amine en C2.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "Le NANA est aussi appelé acide sialique.",
        "correct": true,
        "explanation": "Synonyme."
      },
      {
        "content": "Le ribose peut être phosphorylé en C5 dans le contexte des acides nucléiques.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Mannose → sorbitol par réduction.",
        "correct": false,
        "explanation": "Mannitol."
      },
      {
        "content": "La chitine est un ester sulfurique.",
        "correct": false,
        "explanation": "Polymère N-acétylé."
      },
      {
        "content": "Le NANA ne peut pas être ionisé.",
        "correct": false,
        "explanation": "COOH → COO−."
      },
      {
        "content": "La streptomycine est la vitamine C.",
        "correct": false,
        "explanation": "Antibiotique."
      },
      {
        "content": "Fehling positif correspond à une réduction de l'aldose en polyol.",
        "correct": false,
        "explanation": "L'aldose est oxydé."
      }
    ],
    "explanation": "Le MASTER final croise les transformations et applications essentielles."
  }
];
