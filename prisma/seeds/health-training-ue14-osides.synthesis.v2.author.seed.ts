import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Chapitre 1.3 — Les osides — Synthèse
 * Banque éditoriale auteur — à intégrer via le helper partagé du repo.
 */

export const UE14_BIOCH_CH3_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Associer les diholosides à leurs constituants :",
    "choices": [
      {
        "content": "Lactose → galactose + glucose.",
        "correct": true,
        "explanation": "Composition."
      },
      {
        "content": "Saccharose → glucose + fructose.",
        "correct": true,
        "explanation": "Composition."
      },
      {
        "content": "Maltose → glucose + glucose.",
        "correct": true,
        "explanation": "Composition."
      },
      {
        "content": "Saccharose → galactose + mannose.",
        "correct": false,
        "explanation": "Incorrect."
      }
    ],
    "explanation": "Les trois diholosides se distinguent par leur composition."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Comparer amidon, glycogène et cellulose :",
    "choices": [
      {
        "content": "Amidon : réserve végétale.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "Glycogène : réserve animale.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "Cellulose : structure végétale.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "Cellulose : réserve musculaire humaine.",
        "correct": false,
        "explanation": "Incorrect."
      }
    ],
    "explanation": "Les trois glucanes ont des rôles biologiques différents."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un branchement α(1→6) peut être rencontré dans :",
    "choices": [
      {
        "content": "L’amylopectine.",
        "correct": true,
        "explanation": "Branchements."
      },
      {
        "content": "Le glycogène.",
        "correct": true,
        "explanation": "Branchements."
      },
      {
        "content": "Des glucanes de réserve ramifiés.",
        "correct": true,
        "explanation": "Catégorie."
      },
      {
        "content": "La chaîne de cellulose β(1→4).",
        "correct": false,
        "explanation": "Cellulose non ramifiée dans ce modèle."
      }
    ],
    "explanation": "Les liaisons α1→6 caractérisent les branchements des réserves glucidiques."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les charges des GAG :",
    "choices": [
      {
        "content": "Les carboxylates peuvent apporter des charges négatives.",
        "correct": true,
        "explanation": "Acides uroniques."
      },
      {
        "content": "Les sulfates peuvent apporter des charges négatives.",
        "correct": true,
        "explanation": "GAG sulfatés."
      },
      {
        "content": "La chondroïtine sulfate est décrite comme polyanion.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "L’acide hyaluronique n’a aucune charge car il n’est pas sulfaté.",
        "correct": false,
        "explanation": "Ses COO− apportent des charges."
      }
    ],
    "explanation": "La charge négative peut provenir des carboxylates et/ou des sulfates."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans un contexte de thrombose, le GAG thérapeutique cité est :",
    "choices": [
      {
        "content": "L’héparine.",
        "correct": true,
        "explanation": "Usage anticoagulant."
      },
      {
        "content": "Fortement sulfaté.",
        "correct": true,
        "explanation": "Caractéristique."
      },
      {
        "content": "Proche de l’héparane sulfate.",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "La cellulose.",
        "correct": false,
        "explanation": "Fibre végétale."
      }
    ],
    "explanation": "L’héparine constitue le principal contexte pharmacologique du chapitre."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le contexte de la fécondation :",
    "choices": [
      {
        "content": "La hyaluronidase est citée.",
        "correct": true,
        "explanation": "Enzyme."
      },
      {
        "content": "Elle hydrolyse l’acide hyaluronique.",
        "correct": true,
        "explanation": "Substrat."
      },
      {
        "content": "Cette action participe à la pénétration du spermatozoïde.",
        "correct": true,
        "explanation": "Contexte."
      },
      {
        "content": "Elle hydrolyse spécifiquement le glycogène musculaire.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "Ce contexte physiologique relie une enzyme à un GAG de matrice."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une glycoprotéine de surface peut contribuer :",
    "choices": [
      {
        "content": "À la reconnaissance spécifique.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "Aux interactions cellulaires.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "À la spécificité de groupes sanguins.",
        "correct": true,
        "explanation": "Rôle cité."
      },
      {
        "content": "Uniquement à la réserve énergétique.",
        "correct": false,
        "explanation": "Incorrect."
      }
    ],
    "explanation": "La fraction glucidique des glycoprotéines joue de nombreux rôles de surface."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le polyoside de réserve principal des cellules animales ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glycogene",
        "glycogène",
        "le glycogène",
        "le glycogene"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit du glycogène."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux GAG du chapitre qui se distinguent ici par « non sulfaté » versus « très fortement sulfaté ».",
    "choices": [
      {
        "content": "Acide hyaluronique.",
        "correct": true,
        "explanation": "Non sulfaté."
      },
      {
        "content": "Héparine.",
        "correct": true,
        "explanation": "Très fortement sulfatée."
      },
      {
        "content": "Amylose.",
        "correct": false,
        "explanation": "Pas un GAG."
      },
      {
        "content": "Maltose.",
        "correct": false,
        "explanation": "Diholoside."
      }
    ],
    "explanation": "Acide hyaluronique et héparine représentent deux extrêmes utiles à comparer."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour cette synthèse appliquée des osides, sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Le saccharose est non réducteur.",
        "correct": true,
        "explanation": "Deux centres engagés."
      },
      {
        "content": "Le glycogène est associé à la glycogénine.",
        "correct": true,
        "explanation": "Organisation."
      },
      {
        "content": "La cellulose n’est pas digérée par l’Homme.",
        "correct": true,
        "explanation": "Absence de β-glucosidase adaptée."
      },
      {
        "content": "L’acide hyaluronique participe à l’hydratation tissulaire.",
        "correct": true,
        "explanation": "Fonction."
      },
      {
        "content": "L’héparine est anticoagulante.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Le lactose contient du fructose.",
        "correct": false,
        "explanation": "Galactose + glucose."
      },
      {
        "content": "L’amylose est fortement ramifiée.",
        "correct": false,
        "explanation": "Linéaire."
      },
      {
        "content": "La cellulose est α1→4.",
        "correct": false,
        "explanation": "β1→4."
      },
      {
        "content": "L’acide hyaluronique est fortement sulfaté.",
        "correct": false,
        "explanation": "Non sulfaté."
      },
      {
        "content": "Les glycoprotéines sont dépourvues de glucides.",
        "correct": false,
        "explanation": "Par définition, elles en contiennent."
      }
    ],
    "explanation": "La synthèse PRACTICE couvre les repères centraux du chapitre."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une personne présente une faible activité lactasique et consomme du lait. Quelles notions sont directement mobilisées ?",
    "choices": [
      {
        "content": "Le lactose est le diholoside concerné.",
        "correct": true,
        "explanation": "Sucre du lait."
      },
      {
        "content": "La lactase est une β-galactosidase.",
        "correct": true,
        "explanation": "Enzyme."
      },
      {
        "content": "Les produits d’hydrolyse attendus sont glucose et galactose.",
        "correct": true,
        "explanation": "Produits."
      },
      {
        "content": "Le mécanisme concerne l’hydrolyse de cellulose.",
        "correct": false,
        "explanation": "Autre polymère."
      }
    ],
    "explanation": "Le contexte médical est entièrement résoluble à partir de la digestion du lactose."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une réserve glucidique présente des chaînes α1→4 et de nombreux embranchements α1→6 dans une cellule musculaire. Il s’agit probablement :",
    "choices": [
      {
        "content": "De glycogène.",
        "correct": true,
        "explanation": "Réserve musculaire et architecture."
      },
      {
        "content": "D’un glucane ramifié.",
        "correct": true,
        "explanation": "Nature."
      },
      {
        "content": "D’un polymère associé à la glycogénine.",
        "correct": true,
        "explanation": "Organisation."
      },
      {
        "content": "De cellulose.",
        "correct": false,
        "explanation": "β1→4 structurale végétale."
      }
    ],
    "explanation": "La localisation cellulaire et l’architecture convergent vers le glycogène."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un polysaccharide végétal est β(1→4), hydrophile mais insoluble, et non digéré par l’Homme. Il s’agit :",
    "choices": [
      {
        "content": "De cellulose.",
        "correct": true,
        "explanation": "Tous les indices concordent."
      },
      {
        "content": "D’un polymère de glucose.",
        "correct": true,
        "explanation": "Nature."
      },
      {
        "content": "D’une fibre alimentaire.",
        "correct": true,
        "explanation": "Contexte."
      },
      {
        "content": "D’amylopectine.",
        "correct": false,
        "explanation": "α-glucane ramifié digestible."
      }
    ],
    "explanation": "La cellulose se reconnaît par sa liaison β1→4 et son rôle structural."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un GAG de MEC est non sulfaté, riche en COO− et impliqué dans la viscoélasticité. Il s’agit :",
    "choices": [
      {
        "content": "D’acide hyaluronique.",
        "correct": true,
        "explanation": "Tous les indices concordent."
      },
      {
        "content": "D’un polymère contribuant à l’hydratation.",
        "correct": true,
        "explanation": "Fonction."
      },
      {
        "content": "D’un GAG non lié à une protéine dans le modèle du support.",
        "correct": true,
        "explanation": "Caractéristique."
      },
      {
        "content": "D’héparine.",
        "correct": false,
        "explanation": "Très sulfatée et anticoagulante."
      }
    ],
    "explanation": "Le profil structural et fonctionnel identifie l’acide hyaluronique."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un GAG est stocké dans les granulations mastocytaires et utilisé en thérapeutique pour son activité anticoagulante :",
    "choices": [
      {
        "content": "Il s’agit de l’héparine.",
        "correct": true,
        "explanation": "Identification."
      },
      {
        "content": "Le GAG est fortement sulfaté.",
        "correct": true,
        "explanation": "Caractéristique."
      },
      {
        "content": "Il est proche de l’héparane sulfate.",
        "correct": true,
        "explanation": "Relation."
      },
      {
        "content": "Il s’agit d’un homoglycane de glucose.",
        "correct": false,
        "explanation": "Incorrect."
      }
    ],
    "explanation": "La pharmacologie de l’héparine constitue une application directe du cours."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une glycoprotéine porte des déterminants glucidiques responsables d’une reconnaissance spécifique. Le chapitre permet de relier cela :",
    "choices": [
      {
        "content": "Aux interactions cellulaires.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "À la spécificité de certains groupes sanguins.",
        "correct": true,
        "explanation": "Exemple."
      },
      {
        "content": "À une fraction glucidique pouvant contenir fucose ou NANA.",
        "correct": true,
        "explanation": "Composition."
      },
      {
        "content": "À l’absence totale de ramifications glucidiques.",
        "correct": false,
        "explanation": "La fraction peut être très ramifiée."
      }
    ],
    "explanation": "Les glycannes de surface sont des supports de reconnaissance."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "L’amidon est décrit comme environ 20 % d’amylose et 80 % d’amylopectine. Quelle est la somme de ces proportions, en pourcentage ?",
    "answer": {
      "type": "number",
      "value": 100,
      "tolerance": 0
    },
    "explanation": "Les deux fractions représentent l’ensemble de l’amidon dans cette présentation simplifiée."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel nom porte le dimère de deux β-D-glucoses liés en β(1→4), unité de base mise en avant pour la cellulose ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cellobiose",
        "la cellobiose"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Il s’agit de la cellobiose."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Comparer pouvoir réducteur et hydrolyse :",
    "choices": [
      {
        "content": "Le saccharose est non réducteur mais hydrolysable.",
        "correct": true,
        "explanation": "Deux propriétés distinctes."
      },
      {
        "content": "Le lactose est réducteur et hydrolysable par la lactase.",
        "correct": true,
        "explanation": "Deux propriétés."
      },
      {
        "content": "Le maltose est réducteur et hydrolysable par la maltase.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "« Non réducteur » signifie « impossible à hydrolyser ».",
        "correct": false,
        "explanation": "Les notions sont différentes."
      }
    ],
    "explanation": "Le pouvoir réducteur dépend du centre anomérique libre, pas de la possibilité d’hydrolyse."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Comparer acide hyaluronique et agrégats de protéoglycanes :",
    "choices": [
      {
        "content": "L’acide hyaluronique peut servir de long filament support.",
        "correct": true,
        "explanation": "Organisation."
      },
      {
        "content": "Plusieurs protéoglycanes peuvent s’y fixer.",
        "correct": true,
        "explanation": "Agrégation."
      },
      {
        "content": "Les protéoglycanes possèdent des protéines cœur.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Le filament hyaluronique doit être fortement sulfaté.",
        "correct": false,
        "explanation": "L’acide hyaluronique est non sulfaté."
      }
    ],
    "explanation": "La structure des agrégats est un exemple transversal d’organisation de la MEC."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Sélectionnez exactement les trois associations biologiques ou médicales conformes à la fiche.",
    "choices": [
      {
        "content": "Héparine — anticoagulation.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Hyaluronidase — fécondation.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Glycoprotéines — spécificité des groupes sanguins.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Cellulose — réserve énergétique des neurones.",
        "correct": false,
        "explanation": "Incorrect."
      }
    ],
    "explanation": "Ces associations donnent du sens biologique aux structures glucidiques."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour la synthèse finale de maîtrise des osides, sélectionnez exactement cinq propositions correctes.",
    "choices": [
      {
        "content": "Lactose : galactose + glucose.",
        "correct": true,
        "explanation": "Composition."
      },
      {
        "content": "Amidon : réserve végétale.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "Glycogène : réserve animale.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "Cellulose : liaisons β(1→4).",
        "correct": true,
        "explanation": "Structure."
      },
      {
        "content": "Héparine : anticoagulant fortement sulfaté.",
        "correct": true,
        "explanation": "Application."
      },
      {
        "content": "Saccharose : réducteur.",
        "correct": false,
        "explanation": "Non réducteur."
      },
      {
        "content": "Amylose : ramifiée α1→6.",
        "correct": false,
        "explanation": "Linéaire α1→4."
      },
      {
        "content": "Acide hyaluronique : fortement sulfaté.",
        "correct": false,
        "explanation": "Non sulfaté."
      },
      {
        "content": "Kératane : homoglycane de glucose.",
        "correct": false,
        "explanation": "GAG hétérogène."
      },
      {
        "content": "Protéoglycane : dépourvu de protéine cœur.",
        "correct": false,
        "explanation": "Il en possède une."
      }
    ],
    "explanation": "Le MASTER final mobilise l’ensemble du chapitre sans sortir du support."
  }
];
