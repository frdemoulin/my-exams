import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.3 – Section C – Liaisons multiples, carbone et aromaticité */
export const UE14_CH3_MULTIPLES_CARBONE_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 41,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les liaisons multiples entre deux carbones, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une double liaison contient deux sigma.",
        "correct": false,
        "explanation": "Une seule composante est sigma."
      },
      {
        "content": "Une triple liaison contient trois sigma.",
        "correct": false,
        "explanation": "Elle ne contient qu'une sigma."
      },
      {
        "content": "Une triple liaison contient une sigma et deux pi.",
        "correct": true,
        "explanation": "Deux recouvrements latéraux complètent la sigma."
      },
      {
        "content": "Une liaison simple contient une sigma.",
        "correct": true,
        "explanation": "Elle ne possède pas de pi."
      },
      {
        "content": "Une double liaison contient une sigma et une pi.",
        "correct": true,
        "explanation": "C'est le modèle local standard."
      }
    ],
    "explanation": "Le décompte sigma/pi prépare directement l'identification de l'hybridation des carbones."
  },
  {
    "order": 42,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'éthylène $\\ce{H2C=CH2}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Chaque carbone est sp3.",
        "correct": false,
        "explanation": "Une double liaison est incompatible avec sp3 local."
      },
      {
        "content": "Chaque carbone conserve une orbitale p non hybridée.",
        "correct": true,
        "explanation": "Les deux orbitales p forment la pi."
      },
      {
        "content": "Chaque carbone est sp2.",
        "correct": true,
        "explanation": "Chaque carbone possède trois directions sigma."
      },
      {
        "content": "Les six atomes sont approximativement coplanaires.",
        "correct": true,
        "explanation": "La géométrie autour de chaque carbone est trigonale plane."
      },
      {
        "content": "La liaison C=C est formée de deux sigma.",
        "correct": false,
        "explanation": "Elle contient sigma + pi."
      }
    ],
    "explanation": "L'éthylène est l'exemple canonique d'un système sp2–sp2 avec une liaison pi."
  },
  {
    "order": 43,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de liaisons $\\sigma$ contient l'éthylène $\\ce{H2C=CH2}$ ?",
    "answer": {
      "type": "number",
      "value": 5,
      "tolerance": 0
    },
    "explanation": "Quatre liaisons C–H et la composante sigma de C=C donnent cinq sigma."
  },
  {
    "order": 44,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Pourquoi la rotation autour de la liaison C=C de l'éthylène est-elle fortement limitée ?",
    "choices": [
      {
        "content": "Parce que les hydrogènes deviennent des ions.",
        "correct": false,
        "explanation": "La limitation est orbitale."
      },
      {
        "content": "Parce que le carbone devient automatiquement sp3.",
        "correct": false,
        "explanation": "La rotation ne provoque pas spontanément une réhybridation."
      },
      {
        "content": "Parce que la liaison sigma seule interdit toute rotation.",
        "correct": false,
        "explanation": "Une sigma seule permet généralement une rotation."
      },
      {
        "content": "Parce que les noyaux fusionnent pendant la rotation.",
        "correct": false,
        "explanation": "Aucune transformation nucléaire."
      },
      {
        "content": "Parce qu'elle désalignerait les orbitales p et détruirait le recouvrement pi.",
        "correct": true,
        "explanation": "La liaison pi impose le maintien du parallélisme."
      }
    ],
    "explanation": "La rigidité des doubles liaisons explique notamment l'existence d'isomères géométriques."
  },
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'acétylène $\\ce{HC#CH}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Chaque carbone est sp.",
        "correct": true,
        "explanation": "Deux directions sigma."
      },
      {
        "content": "Chaque carbone conserve deux orbitales p non hybridées.",
        "correct": true,
        "explanation": "Elles forment deux liaisons pi."
      },
      {
        "content": "La molécule est linéaire.",
        "correct": true,
        "explanation": "Les hybrides sp sont opposés."
      },
      {
        "content": "Chaque carbone est sp3.",
        "correct": false,
        "explanation": "Cela exclurait les deux pi."
      },
      {
        "content": "La triple liaison contient trois sigma.",
        "correct": false,
        "explanation": "Elle contient une sigma et deux pi."
      }
    ],
    "explanation": "L'acétylène relie parfaitement hybridation sp, linéarité et deux composantes pi."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien d'orbitales p non hybridées reste-t-il sur un carbone sp ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Une orbitale s et une p sont hybridées ; deux p restent non hybridées."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le carbone peut adopter différents états d'hybridation. Quelles associations sont exactes ?",
    "choices": [
      {
        "content": "Tout carbone est toujours sp3.",
        "correct": false,
        "explanation": "L'hybridation dépend de l'environnement local."
      },
      {
        "content": "Carbone saturé tétraédrique : sp3.",
        "correct": true,
        "explanation": "Quatre directions sigma."
      },
      {
        "content": "Carbone d'une double liaison : sp2.",
        "correct": true,
        "explanation": "Trois directions sigma et une p."
      },
      {
        "content": "Carbone d'une triple liaison : sp.",
        "correct": true,
        "explanation": "Deux directions sigma et deux p."
      },
      {
        "content": "Un carbone sp possède quatre domaines sigma.",
        "correct": false,
        "explanation": "Il n'en possède que deux."
      }
    ],
    "explanation": "La diversité des hybridations explique la variété géométrique du squelette carboné."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le benzène $\\ce{C6H6}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le benzène comporte trois doubles liaisons totalement indépendantes et localisées dans la structure réelle.",
        "correct": false,
        "explanation": "Les formes de Kekulé sont des représentations limites."
      },
      {
        "content": "Le système pi est délocalisé sur l'ensemble du cycle.",
        "correct": true,
        "explanation": "C'est une caractéristique essentielle de l'aromaticité."
      },
      {
        "content": "Le cycle benzénique est fortement non plan.",
        "correct": false,
        "explanation": "Il est plan."
      },
      {
        "content": "Chaque carbone possède une orbitale p perpendiculaire au plan du cycle.",
        "correct": true,
        "explanation": "Ces orbitales constituent le système pi."
      },
      {
        "content": "Les six carbones sont sp2.",
        "correct": true,
        "explanation": "Chaque carbone forme trois liaisons sigma."
      }
    ],
    "explanation": "Le benzène est mieux décrit par un système pi délocalisé que par trois doubles liaisons figées."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux centres carbonés $\\mathrm{sp}^2$.",
    "choices": [
      {
        "content": "Un carbone du méthane.",
        "correct": false,
        "explanation": "Il est sp3."
      },
      {
        "content": "Le carbone du nitrile de HCN.",
        "correct": false,
        "explanation": "Il est sp."
      },
      {
        "content": "Un carbone de l'éthane.",
        "correct": false,
        "explanation": "Il est sp3."
      },
      {
        "content": "Le carbone carbonylé de $\\ce{CH3CHO}$.",
        "correct": true,
        "explanation": "Un carbonyle est localement trigonale plan."
      },
      {
        "content": "Un carbone du benzène.",
        "correct": true,
        "explanation": "Tous les carbones du benzène sont sp2."
      }
    ],
    "explanation": "La présence d'une double liaison ou d'un système aromatique conduit typiquement à sp2."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Une triple liaison C≡C contient trois composantes sigma.",
        "correct": false,
        "explanation": "Elle contient sigma + 2 pi."
      },
      {
        "content": "Un carbone sp2 conserve deux orbitales p non hybridées.",
        "correct": false,
        "explanation": "Il n'en conserve qu'une."
      },
      {
        "content": "$\\ce{CO2}$ : carbone central sp3.",
        "correct": false,
        "explanation": "Il est sp."
      },
      {
        "content": "Carbone carbonylé : généralement sp2.",
        "correct": true,
        "explanation": "Le groupe C=O est trigonale plan autour du carbone."
      },
      {
        "content": "$\\ce{CH2=CH2}$ : carbones sp2.",
        "correct": true,
        "explanation": "La double liaison exige une orbitale p."
      },
      {
        "content": "$\\ce{CH3-CH3}$ : carbones sp3.",
        "correct": true,
        "explanation": "L'éthane ne possède que des liaisons simples."
      },
      {
        "content": "$\\ce{HC#CH}$ : carbones sp.",
        "correct": true,
        "explanation": "La triple liaison exige deux orbitales p."
      },
      {
        "content": "$\\ce{CH4}$ : carbone sp.",
        "correct": false,
        "explanation": "Il est sp3."
      },
      {
        "content": "Benzène : six carbones sp2.",
        "correct": true,
        "explanation": "Le cycle est plan et conjugué."
      },
      {
        "content": "Un carbone sp conserve zéro orbitale p non hybridée.",
        "correct": false,
        "explanation": "Il en conserve deux."
      }
    ],
    "explanation": "Cette synthèse relie saturation, liaisons multiples, aromaticité et hybridation."
  }
];
