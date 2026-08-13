import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Les eicosanoïdes — Section A
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH5_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les eicosanoïdes :",
    "choices": [
      {
        "content": "Sont des composés à 20 atomes de carbone dans la définition du support.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Dérivent de l’acide arachidonique ou d’acides gras voisins.",
        "correct": true,
        "explanation": "Origine."
      },
      {
        "content": "Ont d’importantes fonctions biologiques.",
        "correct": true,
        "explanation": "Importance."
      },
      {
        "content": "Sont tous des protéines.",
        "correct": false,
        "explanation": "Ce sont des dérivés lipidiques."
      }
    ],
    "explanation": "Les eicosanoïdes sont des médiateurs lipidiques dérivés d’acides gras à 20 carbones."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les grandes familles d’eicosanoïdes du chapitre comprennent :",
    "choices": [
      {
        "content": "Les prostanoïdes.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "Les leucotriènes.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "Les lipoxines.",
        "correct": true,
        "explanation": "Famille."
      },
      {
        "content": "Les triglycérides uniquement.",
        "correct": false,
        "explanation": "Les triglycérides sont une autre famille lipidique."
      }
    ],
    "explanation": "Prostanoïdes, leucotriènes et lipoxines sont les grandes familles étudiées."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les prostanoïdes regroupent :",
    "choices": [
      {
        "content": "Les prostaglandines.",
        "correct": true,
        "explanation": "Sous-famille."
      },
      {
        "content": "Les thromboxanes.",
        "correct": true,
        "explanation": "Sous-famille."
      },
      {
        "content": "Des produits de la voie COX.",
        "correct": true,
        "explanation": "Voie principale."
      },
      {
        "content": "Uniquement les leucotriènes.",
        "correct": false,
        "explanation": "Les leucotriènes relèvent de la voie lipoxygénase."
      }
    ],
    "explanation": "Les prostaglandines et thromboxanes constituent les prostanoïdes."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L’acide arachidonique :",
    "choices": [
      {
        "content": "Possède 20 carbones.",
        "correct": true,
        "explanation": "20:4."
      },
      {
        "content": "Possède quatre doubles liaisons.",
        "correct": true,
        "explanation": "20:4."
      },
      {
        "content": "Est noté 20:4 Δ5,8,11,14.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "Est un acide gras saturé 20:0.",
        "correct": false,
        "explanation": "Il possède quatre doubles liaisons."
      }
    ],
    "explanation": "L’acide arachidonique est le précurseur central 20:4 Δ5,8,11,14."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À quelle série ω appartient l’acide arachidonique 20:4 Δ5,8,11,14 dans le support ?",
    "choices": [
      {
        "content": "ω6 / n-6.",
        "correct": true,
        "explanation": "Notation du support."
      },
      {
        "content": "ω3 / n-3.",
        "correct": false,
        "explanation": "Autre série."
      },
      {
        "content": "ω9 / n-9.",
        "correct": false,
        "explanation": "Autre série."
      },
      {
        "content": "Il est saturé, donc ω0.",
        "correct": false,
        "explanation": "Il est polyinsaturé."
      }
    ],
    "explanation": "L’acide arachidonique est 20:4 n-6."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Les sources de l’acide arachidonique citées sont :",
    "choices": [
      {
        "content": "L’alimentation.",
        "correct": true,
        "explanation": "Source citée."
      },
      {
        "content": "Le clivage de phospholipides membranaires.",
        "correct": true,
        "explanation": "Source citée."
      },
      {
        "content": "Une disponibilité permettant la synthèse d’eicosanoïdes.",
        "correct": true,
        "explanation": "Rôle de précurseur."
      },
      {
        "content": "La traduction de l’ARNm.",
        "correct": false,
        "explanation": "Sans rapport avec la libération d’un acide gras."
      }
    ],
    "explanation": "Le support relie alimentation et phospholipides membranaires à la disponibilité d’acide arachidonique."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La voie de la cyclo-oxygénase (COX) :",
    "choices": [
      {
        "content": "Utilise l’acide arachidonique comme précurseur.",
        "correct": true,
        "explanation": "Schéma simplifié."
      },
      {
        "content": "Conduit aux prostanoïdes.",
        "correct": true,
        "explanation": "Produit de voie."
      },
      {
        "content": "Conduit donc notamment aux prostaglandines et thromboxanes.",
        "correct": true,
        "explanation": "Sous-familles."
      },
      {
        "content": "Est la voie principale de formation des leucotriènes.",
        "correct": false,
        "explanation": "Les leucotriènes relèvent des lipoxygénases."
      }
    ],
    "explanation": "La voie COX mène aux prostanoïdes."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La voie des lipoxygénases :",
    "choices": [
      {
        "content": "Conduit notamment aux leucotriènes.",
        "correct": true,
        "explanation": "Produit."
      },
      {
        "content": "Conduit notamment aux lipoxines.",
        "correct": true,
        "explanation": "Produit."
      },
      {
        "content": "Est distincte de la voie COX.",
        "correct": true,
        "explanation": "Deux branches du schéma."
      },
      {
        "content": "Produit uniquement des triglycérides.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Les lipoxygénases orientent l’acide arachidonique vers leucotriènes et lipoxines."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le schéma simplifié des eicosanoïdes permet d’associer :",
    "choices": [
      {
        "content": "COX → prostanoïdes.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "Lipoxygénases → leucotriènes/lipoxines.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "Acide arachidonique → précurseur commun majeur.",
        "correct": true,
        "explanation": "Origine."
      },
      {
        "content": "Glycogène → précurseur direct unique des prostaglandines.",
        "correct": false,
        "explanation": "Le glycogène n’est pas le précurseur lipidique."
      }
    ],
    "explanation": "Le schéma de branchement est un repère majeur du chapitre."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le principal précurseur des prostaglandines dans ce chapitre ?",
    "choices": [
      {
        "content": "L’acide arachidonique.",
        "correct": true,
        "explanation": "Précurseur central."
      },
      {
        "content": "Le glucose.",
        "correct": false,
        "explanation": "Glucide."
      },
      {
        "content": "La glycine.",
        "correct": false,
        "explanation": "Acide aminé."
      },
      {
        "content": "Le cholestérol uniquement.",
        "correct": false,
        "explanation": "Autre famille de précurseurs lipidiques."
      }
    ],
    "explanation": "L’acide arachidonique alimente la voie COX vers les prostaglandines."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un phospholipide membranaire libère un acide gras 20:4 n-6. Quelles conclusions sont cohérentes ?",
    "choices": [
      {
        "content": "Il peut s’agir d’acide arachidonique.",
        "correct": true,
        "explanation": "Notation concordante."
      },
      {
        "content": "Il peut servir de précurseur d’eicosanoïdes.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "Il peut alimenter la voie COX ou des lipoxygénases.",
        "correct": true,
        "explanation": "Branches."
      },
      {
        "content": "Il s’agit nécessairement d’un acide gras saturé.",
        "correct": false,
        "explanation": "20:4 = quatre doubles liaisons."
      }
    ],
    "explanation": "Le contexte membranaire relie la structure de l’acide arachidonique aux voies d’eicosanoïdes."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un composé dérivé de l’acide arachidonique est produit par COX. Il appartient potentiellement :",
    "choices": [
      {
        "content": "Aux prostaglandines.",
        "correct": true,
        "explanation": "Prostanoïdes."
      },
      {
        "content": "Aux thromboxanes.",
        "correct": true,
        "explanation": "Prostanoïdes."
      },
      {
        "content": "À la famille des prostanoïdes.",
        "correct": true,
        "explanation": "Voie COX."
      },
      {
        "content": "Aux leucotriènes par définition.",
        "correct": false,
        "explanation": "Les leucotriènes relèvent des lipoxygénases."
      }
    ],
    "explanation": "L’enzyme de voie permet d’orienter la famille attendue."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un composé est produit par une lipoxygénase à partir de l’acide arachidonique. Il peut appartenir :",
    "choices": [
      {
        "content": "Aux leucotriènes.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "Aux lipoxines.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "À une branche distincte des prostanoïdes.",
        "correct": true,
        "explanation": "Schéma."
      },
      {
        "content": "Obligatoirement aux thromboxanes.",
        "correct": false,
        "explanation": "Voie COX."
      }
    ],
    "explanation": "La voie lipoxygénase conduit aux leucotriènes et lipoxines."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d’atomes de carbone possède l’acide arachidonique ?",
    "answer": {
      "type": "number",
      "value": 20,
      "tolerance": 0
    },
    "explanation": "La notation 20:4 indique 20 carbones."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de doubles liaisons possède l’acide arachidonique 20:4 ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Le second nombre de 20:4 indique quatre doubles liaisons."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle enzyme/voie abrégée conduit aux prostanoïdes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cox",
        "cyclooxygenase",
        "cyclo-oxygenase",
        "cyclo-oxygénase",
        "la cox"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit de la cyclo-oxygénase, abrégée COX."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux sous-familles regroupées sous le terme « prostanoïdes ».",
    "choices": [
      {
        "content": "Prostaglandines.",
        "correct": true,
        "explanation": "Sous-famille."
      },
      {
        "content": "Thromboxanes.",
        "correct": true,
        "explanation": "Sous-famille."
      },
      {
        "content": "Leucotriènes.",
        "correct": false,
        "explanation": "Autre famille."
      },
      {
        "content": "Lipoxines.",
        "correct": false,
        "explanation": "Autre famille."
      }
    ],
    "explanation": "Les prostanoïdes regroupent prostaglandines et thromboxanes."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La notation 20:4 Δ5,8,11,14 de l’acide arachidonique signifie :",
    "choices": [
      {
        "content": "20 carbones.",
        "correct": true,
        "explanation": "Premier nombre."
      },
      {
        "content": "4 doubles liaisons.",
        "correct": true,
        "explanation": "Second nombre."
      },
      {
        "content": "Des doubles liaisons repérées en Δ5, Δ8, Δ11 et Δ14.",
        "correct": true,
        "explanation": "Positions."
      },
      {
        "content": "Une molécule à 4 carbones.",
        "correct": false,
        "explanation": "20 carbones."
      }
    ],
    "explanation": "La notation combine longueur, degré d’insaturation et positions Δ."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L’acide arachidonique du support est décrit comme « toutes-cis ». Cela signifie :",
    "choices": [
      {
        "content": "Que les quatre doubles liaisons sont en configuration cis.",
        "correct": true,
        "explanation": "Nom systématique."
      },
      {
        "content": "Que la configuration des doubles liaisons fait partie de sa description.",
        "correct": true,
        "explanation": "Information structurale."
      },
      {
        "content": "Que la molécule reste un acide gras polyinsaturé.",
        "correct": true,
        "explanation": "4 doubles liaisons."
      },
      {
        "content": "Qu’il ne possède aucune double liaison.",
        "correct": false,
        "explanation": "Il en possède quatre."
      }
    ],
    "explanation": "La configuration cis complète la nomenclature du 20:4."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un anti-inflammatoire qui inhibe COX agira en amont de :",
    "choices": [
      {
        "content": "La synthèse des prostanoïdes.",
        "correct": true,
        "explanation": "Voie COX."
      },
      {
        "content": "La synthèse de prostaglandines.",
        "correct": true,
        "explanation": "Sous-famille."
      },
      {
        "content": "La synthèse de thromboxanes.",
        "correct": true,
        "explanation": "Sous-famille."
      },
      {
        "content": "Toute synthèse de leucotriènes via la 5-lipoxygénase par ce seul mécanisme.",
        "correct": false,
        "explanation": "La voie lipoxygénase est distincte."
      }
    ],
    "explanation": "Le raisonnement porte ici uniquement sur le branchement enzymatique du cours."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Schéma général des eicosanoïdes et voies métaboliques : sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Les eicosanoïdes sont des dérivés d’acides gras à 20 carbones.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "L’acide arachidonique est 20:4 n-6.",
        "correct": true,
        "explanation": "Notation."
      },
      {
        "content": "COX conduit aux prostanoïdes.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "Les lipoxygénases conduisent aux leucotriènes.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "Les lipoxygénases conduisent aux lipoxines.",
        "correct": true,
        "explanation": "Voie."
      },
      {
        "content": "Les prostanoïdes sont uniquement les leucotriènes.",
        "correct": false,
        "explanation": "PG/TX."
      },
      {
        "content": "L’acide arachidonique est 18:0.",
        "correct": false,
        "explanation": "20:4."
      },
      {
        "content": "COX est la voie principale des leucotriènes.",
        "correct": false,
        "explanation": "Lipoxygénases."
      },
      {
        "content": "L’acide arachidonique ne peut provenir des membranes.",
        "correct": false,
        "explanation": "Clivage phospholipidique cité."
      },
      {
        "content": "Les eicosanoïdes sont tous des protéines.",
        "correct": false,
        "explanation": "Dérivés lipidiques."
      }
    ],
    "explanation": "Cette QRPL consolide le schéma général des voies."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux origines de l’acide arachidonique citées dans la fiche.",
    "choices": [
      {
        "content": "Alimentation.",
        "correct": true,
        "explanation": "Source."
      },
      {
        "content": "Clivage des phospholipides membranaires.",
        "correct": true,
        "explanation": "Source."
      },
      {
        "content": "Traduction ribosomale.",
        "correct": false,
        "explanation": "Sans rapport."
      },
      {
        "content": "Hydrolyse du glycogène uniquement.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Le support cite l’alimentation et les phospholipides membranaires."
  }
];
