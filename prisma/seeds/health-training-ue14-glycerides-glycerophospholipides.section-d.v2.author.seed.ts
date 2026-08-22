import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Glycérides et glycérophospholipides — Section D
 */

export const UE14_BIOCH_CH6_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de l'amphiphilie des phospholipides :",
    "choices": [
      {
        "content": "La tête contient glycérol, phosphate et alcool de tête.",
        "correct": true,
        "explanation": "Les chaînes acyles sont hydrophobes, la tête phosphate-alcool est hydrophile."
      },
      {
        "content": "Les acides gras forment les bras hydrophobes.",
        "correct": true,
        "explanation": "Les chaînes acyles sont hydrophobes, la tête phosphate-alcool est hydrophile."
      },
      {
        "content": "Cette organisation permet la formation de bicouches en milieu aqueux.",
        "correct": true,
        "explanation": "Les chaînes acyles sont hydrophobes, la tête phosphate-alcool est hydrophile."
      },
      {
        "content": "Les deux chaînes d'acides gras constituent la tête hydrophile.",
        "correct": false,
        "explanation": "Les chaînes acyles sont hydrophobes, la tête phosphate-alcool est hydrophile."
      }
    ],
    "explanation": "Les chaînes acyles sont hydrophobes, la tête phosphate-alcool est hydrophile."
  },
  {
    "order": 68,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle partie constitue les bras hydrophobes ?",
    "choices": [
      {
        "content": "les acides gras",
        "correct": true,
        "explanation": "Les chaînes acyles sont hydrophobes, la tête phosphate-alcool est hydrophile."
      },
      {
        "content": "le phosphate seul",
        "correct": false,
        "explanation": "Les chaînes acyles sont hydrophobes, la tête phosphate-alcool est hydrophile."
      },
      {
        "content": "l'alcool de tête seul",
        "correct": false,
        "explanation": "Les chaînes acyles sont hydrophobes, la tête phosphate-alcool est hydrophile."
      },
      {
        "content": "l'eau",
        "correct": false,
        "explanation": "Les chaînes acyles sont hydrophobes, la tête phosphate-alcool est hydrophile."
      }
    ],
    "explanation": "Les chaînes acyles sont hydrophobes, la tête phosphate-alcool est hydrophile."
  },
  {
    "order": 69,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des bicouches phospholipidiques :",
    "choices": [
      {
        "content": "Elles sont très stables en milieu aqueux.",
        "correct": true,
        "explanation": "La bicouche est stable mais dynamique."
      },
      {
        "content": "Elles restent fluides et déformables.",
        "correct": true,
        "explanation": "La bicouche est stable mais dynamique."
      },
      {
        "content": "Elles constituent la base des membranes cellulaires.",
        "correct": true,
        "explanation": "La bicouche est stable mais dynamique."
      },
      {
        "content": "Elles sont obligatoirement rigides et cristallines.",
        "correct": false,
        "explanation": "La bicouche est stable mais dynamique."
      }
    ],
    "explanation": "La bicouche est stable mais dynamique."
  },
  {
    "order": 70,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle propriété mécanique est conservée malgré leur stabilité ?",
    "choices": [
      {
        "content": "fluidité et déformabilité",
        "correct": true,
        "explanation": "La bicouche est stable mais dynamique."
      },
      {
        "content": "rigidité absolue",
        "correct": false,
        "explanation": "La bicouche est stable mais dynamique."
      },
      {
        "content": "solubilité totale",
        "correct": false,
        "explanation": "La bicouche est stable mais dynamique."
      },
      {
        "content": "absence de mouvement",
        "correct": false,
        "explanation": "La bicouche est stable mais dynamique."
      }
    ],
    "explanation": "La bicouche est stable mais dynamique."
  },
  {
    "order": 71,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des liposomes :",
    "choices": [
      {
        "content": "Ils peuvent se former à partir de phospholipides.",
        "correct": true,
        "explanation": "Le caractère amphiphile permet la formation de vésicules utilisables comme vecteurs."
      },
      {
        "content": "Ce sont des vésicules délimitées par une ou plusieurs bicouches lipidiques.",
        "correct": true,
        "explanation": "Un liposome possède un compartiment aqueux entouré d'une bicouche lipidique."
      },
      {
        "content": "Ils peuvent servir de véhicules pour médicaments ou substances actives.",
        "correct": true,
        "explanation": "Le caractère amphiphile permet la formation de vésicules utilisables comme vecteurs."
      },
      {
        "content": "Ils sont des enzymes qui hydrolysent le PIP2.",
        "correct": false,
        "explanation": "Le caractère amphiphile permet la formation de vésicules utilisables comme vecteurs."
      }
    ],
    "explanation": "Le caractère amphiphile permet la formation de vésicules utilisables comme vecteurs."
  },
  {
    "order": 72,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel usage biomédical peut être fait des liposomes ?",
    "choices": [
      {
        "content": "véhicules de médicaments",
        "correct": true,
        "explanation": "Le caractère amphiphile permet la formation de vésicules utilisables comme vecteurs."
      },
      {
        "content": "synthèse d'ADN",
        "correct": false,
        "explanation": "Le caractère amphiphile permet la formation de vésicules utilisables comme vecteurs."
      },
      {
        "content": "réserve de glycogène",
        "correct": false,
        "explanation": "Le caractère amphiphile permet la formation de vésicules utilisables comme vecteurs."
      },
      {
        "content": "production d'hémoglobine",
        "correct": false,
        "explanation": "Le caractère amphiphile permet la formation de vésicules utilisables comme vecteurs."
      }
    ],
    "explanation": "Le caractère amphiphile permet la formation de vésicules utilisables comme vecteurs."
  },
  {
    "order": 73,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de la phospholipase A1 :",
    "choices": [
      {
        "content": "Elle hydrolyse la fonction ester en C1.",
        "correct": true,
        "explanation": "La nomenclature A1 correspond à l'acyle en position 1."
      },
      {
        "content": "C'est une hydrolase spécifique de position.",
        "correct": true,
        "explanation": "La nomenclature A1 correspond à l'acyle en position 1."
      },
      {
        "content": "Son action retire l'acyle de C1.",
        "correct": true,
        "explanation": "La nomenclature A1 correspond à l'acyle en position 1."
      },
      {
        "content": "Elle coupe la liaison entre l'alcool de tête et le phosphate.",
        "correct": false,
        "explanation": "La nomenclature A1 correspond à l'acyle en position 1."
      }
    ],
    "explanation": "La nomenclature A1 correspond à l'acyle en position 1."
  },
  {
    "order": 74,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle position est hydrolysée par la phospholipase A1 ?",
    "choices": [
      {
        "content": "C1",
        "correct": true,
        "explanation": "La nomenclature A1 correspond à l'acyle en position 1."
      },
      {
        "content": "C2",
        "correct": false,
        "explanation": "La nomenclature A1 correspond à l'acyle en position 1."
      },
      {
        "content": "C3 du PIP2",
        "correct": false,
        "explanation": "La nomenclature A1 correspond à l'acyle en position 1."
      },
      {
        "content": "le noyau stérane",
        "correct": false,
        "explanation": "La nomenclature A1 correspond à l'acyle en position 1."
      }
    ],
    "explanation": "La nomenclature A1 correspond à l'acyle en position 1."
  },
  {
    "order": 75,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de la phospholipase A2 :",
    "choices": [
      {
        "content": "Elle hydrolyse la fonction ester en C2.",
        "correct": true,
        "explanation": "La PLA2 libère l'acide gras porté en C2, souvent arachidonique dans le contexte inflammatoire."
      },
      {
        "content": "Elle peut libérer de l'acide arachidonique.",
        "correct": true,
        "explanation": "La PLA2 libère l'acide gras porté en C2, souvent arachidonique dans le contexte inflammatoire."
      },
      {
        "content": "Elle forme aussi un lysophospholipide.",
        "correct": true,
        "explanation": "La PLA2 libère l'acide gras porté en C2, souvent arachidonique dans le contexte inflammatoire."
      },
      {
        "content": "Elle hydrolyse spécifiquement la liaison alcool-phosphate de la tête polaire.",
        "correct": false,
        "explanation": "La PLA2 libère l'acide gras porté en C2, souvent arachidonique dans le contexte inflammatoire."
      }
    ],
    "explanation": "La PLA2 libère l'acide gras porté en C2, souvent arachidonique dans le contexte inflammatoire."
  },
  {
    "order": 76,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle position est hydrolysée par la phospholipase A2 ?",
    "choices": [
      {
        "content": "C2",
        "correct": true,
        "explanation": "La PLA2 libère l'acide gras porté en C2, souvent arachidonique dans le contexte inflammatoire."
      },
      {
        "content": "C1",
        "correct": false,
        "explanation": "La PLA2 libère l'acide gras porté en C2, souvent arachidonique dans le contexte inflammatoire."
      },
      {
        "content": "le C17 du cholestérol",
        "correct": false,
        "explanation": "La PLA2 libère l'acide gras porté en C2, souvent arachidonique dans le contexte inflammatoire."
      },
      {
        "content": "le C1 de l'inositol uniquement",
        "correct": false,
        "explanation": "La PLA2 libère l'acide gras porté en C2, souvent arachidonique dans le contexte inflammatoire."
      }
    ],
    "explanation": "La PLA2 libère l'acide gras porté en C2, souvent arachidonique dans le contexte inflammatoire."
  },
  {
    "order": 77,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de la phospholipase C :",
    "choices": [
      {
        "content": "Elle hydrolyse la liaison qui fixe le phosphate au glycérol.",
        "correct": true,
        "explanation": "La PLC clive le PIP2 en diacylglycérol et inositol-1,4,5-trisphosphate."
      },
      {
        "content": "Sur le PIP2, elle conduit à DAG et IP3.",
        "correct": true,
        "explanation": "La PLC clive le PIP2 en diacylglycérol et inositol-1,4,5-trisphosphate."
      },
      {
        "content": "DAG et IP3 sont des seconds messagers.",
        "correct": true,
        "explanation": "La PLC clive le PIP2 en diacylglycérol et inositol-1,4,5-trisphosphate."
      },
      {
        "content": "Elle retire uniquement l'acide gras de C2.",
        "correct": false,
        "explanation": "La PLC clive le PIP2 en diacylglycérol et inositol-1,4,5-trisphosphate."
      }
    ],
    "explanation": "La PLC clive le PIP2 en diacylglycérol et inositol-1,4,5-trisphosphate."
  },
  {
    "order": 78,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quels seconds messagers sont libérés à partir du PIP2 par PLC ?",
    "choices": [
      {
        "content": "DAG et IP3",
        "correct": true,
        "explanation": "La PLC clive le PIP2 en diacylglycérol et inositol-1,4,5-trisphosphate."
      },
      {
        "content": "ATP et ADP",
        "correct": false,
        "explanation": "La PLC clive le PIP2 en diacylglycérol et inositol-1,4,5-trisphosphate."
      },
      {
        "content": "cholestérol et cortisol",
        "correct": false,
        "explanation": "La PLC clive le PIP2 en diacylglycérol et inositol-1,4,5-trisphosphate."
      },
      {
        "content": "glucose et galactose",
        "correct": false,
        "explanation": "La PLC clive le PIP2 en diacylglycérol et inositol-1,4,5-trisphosphate."
      }
    ],
    "explanation": "La PLC clive le PIP2 en diacylglycérol et inositol-1,4,5-trisphosphate."
  },
  {
    "order": 79,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de la phospholipase D :",
    "choices": [
      {
        "content": "Elle hydrolyse la liaison entre l'alcool de tête et l'acide phosphorique.",
        "correct": true,
        "explanation": "La PLD sépare l'alcool de tête du phosphate."
      },
      {
        "content": "Elle est spécifique d'une liaison différente de PLA1/PLA2.",
        "correct": true,
        "explanation": "La PLD sépare l'alcool de tête du phosphate."
      },
      {
        "content": "Son site d'action se situe dans la tête polaire.",
        "correct": true,
        "explanation": "La PLD sépare l'alcool de tête du phosphate."
      },
      {
        "content": "Elle hydrolyse l'acide gras de C2 comme la PLA2.",
        "correct": false,
        "explanation": "La PLD sépare l'alcool de tête du phosphate."
      }
    ],
    "explanation": "La PLD sépare l'alcool de tête du phosphate."
  },
  {
    "order": 80,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle liaison est ciblée par la phospholipase D ?",
    "choices": [
      {
        "content": "liaison alcool de tête–phosphate",
        "correct": true,
        "explanation": "La PLD sépare l'alcool de tête du phosphate."
      },
      {
        "content": "ester de C1",
        "correct": false,
        "explanation": "La PLD sépare l'alcool de tête du phosphate."
      },
      {
        "content": "ester de C2",
        "correct": false,
        "explanation": "La PLD sépare l'alcool de tête du phosphate."
      },
      {
        "content": "liaison amide de la sphingosine",
        "correct": false,
        "explanation": "La PLD sépare l'alcool de tête du phosphate."
      }
    ],
    "explanation": "La PLD sépare l'alcool de tête du phosphate."
  },
  {
    "order": 81,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos du PIP2 :",
    "choices": [
      {
        "content": "Il s'agit de phosphatidylinositol-4,5-bisphosphate.",
        "correct": true,
        "explanation": "Le PIP2 est un phosphoinositide du feuillet cytosolique."
      },
      {
        "content": "Il est retrouvé sur le feuillet interne de la membrane plasmique.",
        "correct": true,
        "explanation": "Le PIP2 est un phosphoinositide du feuillet cytosolique."
      },
      {
        "content": "Les deux phosphates supplémentaires sont fixés sur deux fonctions alcool distinctes.",
        "correct": true,
        "explanation": "Le PIP2 est un phosphoinositide du feuillet cytosolique."
      },
      {
        "content": "Le terme correct est diphosphate parce que les deux phosphates sont liés entre eux.",
        "correct": false,
        "explanation": "Le PIP2 est un phosphoinositide du feuillet cytosolique."
      }
    ],
    "explanation": "Le PIP2 est un phosphoinositide du feuillet cytosolique."
  },
  {
    "order": 82,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Sur quel feuillet de la membrane plasmique le PIP₂ est-il principalement situé ?",
    "choices": [
      {
        "content": "feuillet interne",
        "correct": true,
        "explanation": "Le PIP2 est un phosphoinositide du feuillet cytosolique."
      },
      {
        "content": "feuillet externe uniquement",
        "correct": false,
        "explanation": "Le PIP2 est un phosphoinositide du feuillet cytosolique."
      },
      {
        "content": "dans le noyau uniquement",
        "correct": false,
        "explanation": "Le PIP2 est un phosphoinositide du feuillet cytosolique."
      },
      {
        "content": "dans la matrice mitochondriale uniquement",
        "correct": false,
        "explanation": "Le PIP2 est un phosphoinositide du feuillet cytosolique."
      }
    ],
    "explanation": "Le PIP2 est un phosphoinositide du feuillet cytosolique."
  },
  {
    "order": 83,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos du DAG produit à partir du PIP2 :",
    "choices": [
      {
        "content": "Il reste associé à la membrane.",
        "correct": true,
        "explanation": "Le DAG membranaire participe à la signalisation via PKC."
      },
      {
        "content": "Il peut activer des protéines kinases C.",
        "correct": true,
        "explanation": "Le DAG membranaire participe à la signalisation via PKC."
      },
      {
        "content": "Il agit comme second messager.",
        "correct": true,
        "explanation": "Le DAG membranaire participe à la signalisation via PKC."
      },
      {
        "content": "Il déclenche directement la synthèse de cellulose.",
        "correct": false,
        "explanation": "Le DAG membranaire participe à la signalisation via PKC."
      }
    ],
    "explanation": "Le DAG membranaire participe à la signalisation via PKC."
  },
  {
    "order": 84,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle famille de kinases peut être activée par le DAG membranaire ?",
    "choices": [
      {
        "content": "protéines kinases C (PKC)",
        "correct": true,
        "explanation": "Le DAG membranaire participe à la signalisation via PKC."
      },
      {
        "content": "glycérol kinase uniquement",
        "correct": false,
        "explanation": "Le DAG membranaire participe à la signalisation via PKC."
      },
      {
        "content": "hexokinase uniquement",
        "correct": false,
        "explanation": "Le DAG membranaire participe à la signalisation via PKC."
      },
      {
        "content": "ARN polymérase",
        "correct": false,
        "explanation": "Le DAG membranaire participe à la signalisation via PKC."
      }
    ],
    "explanation": "Le DAG membranaire participe à la signalisation via PKC."
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de l'IP3 produit à partir du PIP2 :",
    "choices": [
      {
        "content": "C'est l'inositol-1,4,5-trisphosphate.",
        "correct": true,
        "explanation": "L'IP3 est un messager soluble associé à la mobilisation du calcium."
      },
      {
        "content": "Il agit comme second messager.",
        "correct": true,
        "explanation": "L'IP3 est un messager soluble associé à la mobilisation du calcium."
      },
      {
        "content": "Il peut déclencher la libération de Ca²⁺ depuis le réticulum endoplasmique.",
        "correct": true,
        "explanation": "L'IP₃ active des canaux calciques du réticulum endoplasmique."
      },
      {
        "content": "Il reste une chaîne d'acide gras hydrophobe insérée dans la membrane.",
        "correct": false,
        "explanation": "L'IP3 est un messager soluble associé à la mobilisation du calcium."
      }
    ],
    "explanation": "L'IP3 est un messager soluble associé à la mobilisation du calcium."
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel ion est libéré du réticulum endoplasmique sous l’action de l’IP₃ ?",
    "choices": [
      {
        "content": "Ca2+",
        "correct": true,
        "explanation": "L'IP3 est un messager soluble associé à la mobilisation du calcium."
      },
      {
        "content": "Na+ uniquement",
        "correct": false,
        "explanation": "L'IP3 est un messager soluble associé à la mobilisation du calcium."
      },
      {
        "content": "Fe3+",
        "correct": false,
        "explanation": "L'IP3 est un messager soluble associé à la mobilisation du calcium."
      },
      {
        "content": "Cl− uniquement",
        "correct": false,
        "explanation": "L'IP3 est un messager soluble associé à la mobilisation du calcium."
      }
    ],
    "explanation": "L'IP3 est un messager soluble associé à la mobilisation du calcium."
  },
  {
    "order": 87,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de la voie PI3K–AKT :",
    "choices": [
      {
        "content": "PI3K ajoute un phosphate en C3 du PIP2.",
        "correct": true,
        "explanation": "La PI3K forme le phosphatidylinositol-3,4,5-trisphosphate."
      },
      {
        "content": "Le produit est PIP3.",
        "correct": true,
        "explanation": "La PI3K forme le phosphatidylinositol-3,4,5-trisphosphate."
      },
      {
        "content": "PIP3 permet le recrutement d'AKT à la membrane.",
        "correct": true,
        "explanation": "La PI3K forme le phosphatidylinositol-3,4,5-trisphosphate."
      },
      {
        "content": "PI3K transforme directement PIP2 en acide arachidonique.",
        "correct": false,
        "explanation": "La PI3K forme le phosphatidylinositol-3,4,5-trisphosphate."
      }
    ],
    "explanation": "La PI3K forme le phosphatidylinositol-3,4,5-trisphosphate."
  },
  {
    "order": 88,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel lipide est formé par PI3K à partir de PIP2 ?",
    "choices": [
      {
        "content": "PIP3",
        "correct": true,
        "explanation": "La PI3K forme le phosphatidylinositol-3,4,5-trisphosphate."
      },
      {
        "content": "DAG",
        "correct": false,
        "explanation": "La PI3K forme le phosphatidylinositol-3,4,5-trisphosphate."
      },
      {
        "content": "IP3",
        "correct": false,
        "explanation": "La PI3K forme le phosphatidylinositol-3,4,5-trisphosphate."
      },
      {
        "content": "céramide",
        "correct": false,
        "explanation": "La PI3K forme le phosphatidylinositol-3,4,5-trisphosphate."
      }
    ],
    "explanation": "La PI3K forme le phosphatidylinositol-3,4,5-trisphosphate."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce glycérophospholipide simplifié, cliquez sur la liaison ester en C2 ciblée par une phospholipase A2.",
    "image": {
      "src": "/images/training/ue14/biochimie/glycerides-glycerophospholipides/phospholipase-a2-c2-qzone.svg",
      "alt": "Schéma original d'un glycérophospholipide avec glycérol vertical, chaînes acyles en C1 et C2 et phosphate en C3",
      "width": 1000,
      "height": 650
    },
    "expectedZones": [
      {
        "id": "ester-c2",
        "label": "Liaison ester de C2",
        "x": 0.455,
        "y": 0.48,
        "tolerance": 0.075
      }
    ],
    "explanation": "La phospholipase A2 hydrolyse spécifiquement la liaison ester qui porte l'acide gras en C2."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel sens de réaction est associé à PTEN ?",
    "choices": [
      {
        "content": "PIP3 vers PIP2",
        "correct": true,
        "explanation": "PTEN réalise le chemin inverse de PI3K pour le phosphate en C3."
      },
      {
        "content": "PIP2 vers PIP3",
        "correct": false,
        "explanation": "PTEN réalise le chemin inverse de PI3K pour le phosphate en C3."
      },
      {
        "content": "DAG vers triglycéride",
        "correct": false,
        "explanation": "PTEN réalise le chemin inverse de PI3K pour le phosphate en C3."
      },
      {
        "content": "cholestérol vers cortisol",
        "correct": false,
        "explanation": "PTEN réalise le chemin inverse de PI3K pour le phosphate en C3."
      }
    ],
    "explanation": "PTEN réalise le chemin inverse de PI3K pour le phosphate en C3."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des plasmalogènes :",
    "choices": [
      {
        "content": "Ils constituent une sous-classe de glycérophospholipides à liaison éther.",
        "correct": true,
        "explanation": "Les plasmalogènes sont des glycérophospholipides éther."
      },
      {
        "content": "En sn-1, ils portent une chaîne alk-1′-ényl liée par une liaison vinyl-éther.",
        "correct": true,
        "explanation": "La liaison vinyl-éther en sn-1 est la signature structurale des plasmalogènes."
      },
      {
        "content": "Leur liaison vinyl-éther est chimiquement distincte d’une liaison ester et sensible à l’oxydation.",
        "correct": true,
        "explanation": "Le vinyl-éther est notamment acidolabile et sensible aux espèces oxydantes."
      },
      {
        "content": "Leur C1 porte obligatoirement un acide gras par liaison amide.",
        "correct": false,
        "explanation": "Le substituant de sn-1 est relié par un vinyl-éther, pas par une liaison amide."
      }
    ],
    "explanation": "Les plasmalogènes se distinguent par une liaison vinyl-éther en sn-1 du glycérol."
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quels sont les deux seconds messagers libérés par hydrolyse du PIP2 par la phospholipase C ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "DAG et IP3",
        "IP3 et DAG",
        "diacylglycérol et inositol-1,4,5-trisphosphate"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "La PLC sur PIP2 produit DAG et IP3."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des localisations des plasmalogènes :",
    "choices": [
      {
        "content": "Ils sont présents dans le muscle.",
        "correct": true,
        "explanation": "Les plasmalogènes sont abondants dans plusieurs tissus musculaires."
      },
      {
        "content": "Ils sont présents dans le cerveau.",
        "correct": true,
        "explanation": "Le cerveau est particulièrement riche en plasmalogènes."
      },
      {
        "content": "Ils sont présents dans la rétine.",
        "correct": true,
        "explanation": "La rétine contient notamment des plasmalogènes riches en acides gras polyinsaturés."
      },
      {
        "content": "Ils sont absents de tous les tissus humains.",
        "correct": false,
        "explanation": "Ils sont largement distribués, notamment dans le cerveau, le cœur et le muscle."
      }
    ],
    "explanation": "Les plasmalogènes sont largement distribués et particulièrement abondants dans certains tissus nerveux et musculaires."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel tissu sensoriel contient des plasmalogènes ?",
    "choices": [
      {
        "content": "rétine",
        "correct": true,
        "explanation": "La rétine contient des plasmalogènes."
      },
      {
        "content": "émail dentaire",
        "correct": false,
        "explanation": "L'émail dentaire est un tissu minéralisé et non un tissu riche en plasmalogènes."
      },
      {
        "content": "ongle uniquement",
        "correct": false,
        "explanation": "L'ongle est une structure kératinisée."
      },
      {
        "content": "cartilage uniquement",
        "correct": false,
        "explanation": "La rétine est le tissu sensoriel attendu."
      }
    ],
    "explanation": "La rétine est un tissu sensoriel contenant des plasmalogènes."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos du PAF :",
    "choices": [
      {
        "content": "PAF signifie Platelet Activating Factor.",
        "correct": true,
        "explanation": "PAF est l'abréviation de Platelet-Activating Factor."
      },
      {
        "content": "C’est un phospholipide à liaison alkyl-éther en sn-1.",
        "correct": true,
        "explanation": "Contrairement aux plasmalogènes, le PAF porte un alkyl-éther non vinylique en sn-1."
      },
      {
        "content": "Il peut être sécrété par des plaquettes ou des leucocytes.",
        "correct": true,
        "explanation": "Des leucocytes, des cellules endothéliales et des plaquettes peuvent produire du PAF."
      },
      {
        "content": "PAF désigne une enzyme de synthèse du cholestérol.",
        "correct": false,
        "explanation": "Le PAF est un médiateur phospholipidique, pas une enzyme."
      }
    ],
    "explanation": "Le PAF est un médiateur à alkyl-éther en sn-1, acétyle en sn-2 et phosphocholine en sn-3."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Que signifie PAF ?",
    "choices": [
      {
        "content": "Platelet Activating Factor",
        "correct": true,
        "explanation": "PAF signifie Platelet-Activating Factor."
      },
      {
        "content": "Phosphatidic Acid Factor",
        "correct": false,
        "explanation": "L'abréviation PAF ne désigne pas l'acide phosphatidique."
      },
      {
        "content": "Protein Assembly Fragment",
        "correct": false,
        "explanation": "PAF désigne un médiateur lipidique et non un fragment protéique."
      },
      {
        "content": "Plasma Apo Factor",
        "correct": false,
        "explanation": "PAF signifie Platelet-Activating Factor."
      }
    ],
    "explanation": "PAF est l'abréviation de Platelet-Activating Factor."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux produits directs de l'action de PLA2 sur un phospholipide portant de l'acide arachidonique en C2.",
    "choices": [
      {
        "content": "Acide arachidonique",
        "correct": true,
        "explanation": "Libéré de C2."
      },
      {
        "content": "Lysophospholipide",
        "correct": true,
        "explanation": "Phospholipide privé de C2."
      },
      {
        "content": "IP3",
        "correct": false,
        "explanation": "Produit de PLC sur PIP2."
      },
      {
        "content": "PIP3",
        "correct": false,
        "explanation": "Produit de PI3K."
      }
    ],
    "explanation": "PLA2 produit un acide gras libre et un lysophospholipide."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Combien de carbones comporte une chaîne octadécyle parfois présente en sn-1 du PAF ?",
    "choices": [
      {
        "content": "18",
        "correct": true,
        "explanation": "Le préfixe octadécyl désigne une chaîne à 18 carbones."
      },
      {
        "content": "3",
        "correct": false,
        "explanation": "Une chaîne octadécyle comporte 18 carbones."
      },
      {
        "content": "8",
        "correct": false,
        "explanation": "Une chaîne octadécyle comporte 18 carbones."
      },
      {
        "content": "27",
        "correct": false,
        "explanation": "Une chaîne octadécyle comporte 18 carbones."
      }
    ],
    "explanation": "Une chaîne octadécyle comporte 18 carbones ; d'autres espèces moléculaires de PAF portent notamment une chaîne hexadécyle."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de la libération d'acide arachidonique :",
    "choices": [
      {
        "content": "Elle peut résulter de l'action de PLA2 sur un phospholipide.",
        "correct": true,
        "explanation": "La PLA2 est le lien direct entre phospholipides membranaires et précurseurs eicosanoïdes."
      },
      {
        "content": "Elle s'accompagne de la formation d'un lysophospholipide.",
        "correct": true,
        "explanation": "La PLA2 est le lien direct entre phospholipides membranaires et précurseurs eicosanoïdes."
      },
      {
        "content": "L'acide arachidonique est un précurseur d'eicosanoïdes impliqués dans l'inflammation.",
        "correct": true,
        "explanation": "La PLA2 est le lien direct entre phospholipides membranaires et précurseurs eicosanoïdes."
      },
      {
        "content": "Elle résulte de l'action spécifique de la phospholipase D sur le cholestérol.",
        "correct": false,
        "explanation": "La PLA2 est le lien direct entre phospholipides membranaires et précurseurs eicosanoïdes."
      }
    ],
    "explanation": "La PLA2 est le lien direct entre phospholipides membranaires et précurseurs eicosanoïdes."
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "À propos de la signalisation phospholipidique et des plasmalogènes, sélectionnez exactement les cinq affirmations correctes.",
    "choices": [
      {
        "content": "PLC peut produire DAG et IP3.",
        "correct": true,
        "explanation": "PIP2."
      },
      {
        "content": "PI3K produit PIP3.",
        "correct": true,
        "explanation": "Phosphorylation."
      },
      {
        "content": "PTEN permet PIP3 → PIP2.",
        "correct": true,
        "explanation": "Inverse."
      },
      {
        "content": "Les plasmalogènes portent une liaison vinyl-éther en sn-1.",
        "correct": true,
        "explanation": "Le vinyl-éther en sn-1 est leur signature structurale."
      },
      {
        "content": "Le PAF peut être produit par des plaquettes ou des leucocytes.",
        "correct": true,
        "explanation": "Plusieurs cellules hématopoïétiques produisent ce médiateur."
      },
      {
        "content": "PLA2 coupe le phosphate du glycérol.",
        "correct": false,
        "explanation": "C2."
      },
      {
        "content": "IP₃ active directement la PKC.",
        "correct": false,
        "explanation": "DAG/PKC."
      },
      {
        "content": "PIP2 est sur le feuillet externe.",
        "correct": false,
        "explanation": "Interne."
      },
      {
        "content": "Plasmalogènes = triacylglycérols homogènes.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "PTEN forme PIP3 à partir de PIP2.",
        "correct": false,
        "explanation": "Inverse."
      }
    ],
    "explanation": "Cette QRPL clôt la section la plus transversale."
  }
];
