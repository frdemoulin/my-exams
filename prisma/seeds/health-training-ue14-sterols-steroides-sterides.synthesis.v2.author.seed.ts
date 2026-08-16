import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Stérols, stéroïdes et stérides — Synthèse
 */

export const UE14_BIOCH_CH8_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos du noyau stérane et de ses dérivés :",
    "choices": [
      {
        "content": "Le noyau stérane possède quatre cycles.",
        "correct": true,
        "explanation": "La distinction stérol/stéride repose sur l'estérification du OH C3."
      },
      {
        "content": "Un stérol porte un OH en C3.",
        "correct": true,
        "explanation": "La distinction stérol/stéride repose sur l'estérification du OH C3."
      },
      {
        "content": "Un stéride est un ester de stérol.",
        "correct": true,
        "explanation": "La distinction stérol/stéride repose sur l'estérification du OH C3."
      },
      {
        "content": "Un stéride est un polymère d'oses.",
        "correct": false,
        "explanation": "La distinction stérol/stéride repose sur l'estérification du OH C3."
      }
    ],
    "explanation": "La distinction stérol/stéride repose sur l'estérification du OH C3."
  },
  {
    "order": 102,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle fonction est estérifiée dans un stéride ?",
    "choices": [
      {
        "content": "OH en C3",
        "correct": true,
        "explanation": "La distinction stérol/stéride repose sur l'estérification du OH C3."
      },
      {
        "content": "NH2 en C2",
        "correct": false,
        "explanation": "La distinction stérol/stéride repose sur l'estérification du OH C3."
      },
      {
        "content": "phosphate en C3 du glycérol",
        "correct": false,
        "explanation": "La distinction stérol/stéride repose sur l'estérification du OH C3."
      },
      {
        "content": "OH en C1 de sphingosine",
        "correct": false,
        "explanation": "La distinction stérol/stéride repose sur l'estérification du OH C3."
      }
    ],
    "explanation": "La distinction stérol/stéride repose sur l'estérification du OH C3."
  },
  {
    "order": 103,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos du cholestérol libre et du cholestérol estérifié :",
    "choices": [
      {
        "content": "Le cholestérol libre est amphiphile.",
        "correct": true,
        "explanation": "Le OH libre confère le petit pôle hydrophile."
      },
      {
        "content": "L'estérification masque le OH polaire.",
        "correct": true,
        "explanation": "Le OH libre confère le petit pôle hydrophile."
      },
      {
        "content": "La forme estérifiée est hydrophobe et sert au stockage.",
        "correct": true,
        "explanation": "Le OH libre confère le petit pôle hydrophile."
      },
      {
        "content": "Le cholestérol estérifié devient plus hydrophile que le cholestérol libre.",
        "correct": false,
        "explanation": "Le OH libre confère le petit pôle hydrophile."
      }
    ],
    "explanation": "Le OH libre confère le petit pôle hydrophile."
  },
  {
    "order": 104,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle forme est amphiphile ?",
    "choices": [
      {
        "content": "cholestérol libre",
        "correct": true,
        "explanation": "Le OH libre confère le petit pôle hydrophile."
      },
      {
        "content": "cholestérol estérifié",
        "correct": false,
        "explanation": "Le OH libre confère le petit pôle hydrophile."
      },
      {
        "content": "stéride uniquement sans OH",
        "correct": false,
        "explanation": "Le OH libre confère le petit pôle hydrophile."
      },
      {
        "content": "aucune",
        "correct": false,
        "explanation": "Le OH libre confère le petit pôle hydrophile."
      }
    ],
    "explanation": "Le OH libre confère le petit pôle hydrophile."
  },
  {
    "order": 105,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des dérivés du cholestérol :",
    "choices": [
      {
        "content": "Les acides biliaires participent à la digestion des lipides.",
        "correct": true,
        "explanation": "Le foie produit les acides biliaires dérivés du cholestérol."
      },
      {
        "content": "La vitamine D participe à la minéralisation osseuse.",
        "correct": true,
        "explanation": "Le foie produit les acides biliaires dérivés du cholestérol."
      },
      {
        "content": "Les hormones stéroïdiennes dérivent du cholestérol.",
        "correct": true,
        "explanation": "Le foie produit les acides biliaires dérivés du cholestérol."
      },
      {
        "content": "Le cholestérol est un précurseur direct du glycogène.",
        "correct": false,
        "explanation": "Le foie produit les acides biliaires dérivés du cholestérol."
      }
    ],
    "explanation": "Le foie produit les acides biliaires dérivés du cholestérol."
  },
  {
    "order": 106,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel dérivé est lié à la digestion intestinale des lipides ?",
    "choices": [
      {
        "content": "acides biliaires",
        "correct": true,
        "explanation": "Le foie produit les acides biliaires dérivés du cholestérol."
      },
      {
        "content": "glycogène",
        "correct": false,
        "explanation": "Le foie produit les acides biliaires dérivés du cholestérol."
      },
      {
        "content": "cellulose",
        "correct": false,
        "explanation": "Le foie produit les acides biliaires dérivés du cholestérol."
      },
      {
        "content": "céramide",
        "correct": false,
        "explanation": "Le foie produit les acides biliaires dérivés du cholestérol."
      }
    ],
    "explanation": "Le foie produit les acides biliaires dérivés du cholestérol."
  },
  {
    "order": 107,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des noyaux hormonaux :",
    "choices": [
      {
        "content": "Estrane = 18 C.",
        "correct": true,
        "explanation": "Les principaux corticostéroïdes humains possèdent un squelette à 21 carbones."
      },
      {
        "content": "Androstane = 19 C.",
        "correct": true,
        "explanation": "Les principaux corticostéroïdes humains possèdent un squelette à 21 carbones."
      },
      {
        "content": "Prégnane = 21 C.",
        "correct": true,
        "explanation": "Les principaux corticostéroïdes humains possèdent un squelette à 21 carbones."
      },
      {
        "content": "Le noyau prégnane possède 18 C.",
        "correct": false,
        "explanation": "Les principaux corticostéroïdes humains possèdent un squelette à 21 carbones."
      }
    ],
    "explanation": "Les principaux corticostéroïdes humains possèdent un squelette à 21 carbones."
  },
  {
    "order": 108,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel noyau caractérise cortisol et aldostérone ?",
    "choices": [
      {
        "content": "prégnane",
        "correct": true,
        "explanation": "Les principaux corticostéroïdes humains possèdent un squelette à 21 carbones."
      },
      {
        "content": "estrane",
        "correct": false,
        "explanation": "Les principaux corticostéroïdes humains possèdent un squelette à 21 carbones."
      },
      {
        "content": "androstane",
        "correct": false,
        "explanation": "Les principaux corticostéroïdes humains possèdent un squelette à 21 carbones."
      },
      {
        "content": "cholane",
        "correct": false,
        "explanation": "Les principaux corticostéroïdes humains possèdent un squelette à 21 carbones."
      }
    ],
    "explanation": "Les principaux corticostéroïdes humains possèdent un squelette à 21 carbones."
  },
  {
    "order": 109,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de l’aldostérone et de son action rénale :",
    "choices": [
      {
        "content": "Elle favorise la réabsorption de sodium.",
        "correct": true,
        "explanation": "L'aldostérone agit sur l'homéostasie hydro-électrolytique."
      },
      {
        "content": "Elle favorise l'élimination de potassium.",
        "correct": true,
        "explanation": "L'aldostérone agit sur l'homéostasie hydro-électrolytique."
      },
      {
        "content": "Elle contribue au maintien du volume plasmatique et de la pression artérielle.",
        "correct": true,
        "explanation": "L'aldostérone agit sur l'homéostasie hydro-électrolytique."
      },
      {
        "content": "Elle favorise l’excrétion de sodium et la rétention de potassium.",
        "correct": false,
        "explanation": "L'aldostérone agit sur l'homéostasie hydro-électrolytique."
      }
    ],
    "explanation": "L'aldostérone agit sur l'homéostasie hydro-électrolytique."
  },
  {
    "order": 110,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel ion est réabsorbé ?",
    "choices": [
      {
        "content": "Na+",
        "correct": true,
        "explanation": "L'aldostérone agit sur l'homéostasie hydro-électrolytique."
      },
      {
        "content": "K+",
        "correct": false,
        "explanation": "L'aldostérone agit sur l'homéostasie hydro-électrolytique."
      },
      {
        "content": "H+",
        "correct": false,
        "explanation": "L'aldostérone agit sur l'homéostasie hydro-électrolytique."
      },
      {
        "content": "Fe3+",
        "correct": false,
        "explanation": "L'aldostérone agit sur l'homéostasie hydro-électrolytique."
      }
    ],
    "explanation": "L'aldostérone agit sur l'homéostasie hydro-électrolytique."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos du cortisol :",
    "choices": [
      {
        "content": "Il est hyperglycémiant.",
        "correct": true,
        "explanation": "Le cortisol est un glucocorticoïde aux effets métaboliques et immunitaires."
      },
      {
        "content": "Il a une action anti-inflammatoire.",
        "correct": true,
        "explanation": "Le cortisol est un glucocorticoïde aux effets métaboliques et immunitaires."
      },
      {
        "content": "Il a une action immunosuppressive.",
        "correct": true,
        "explanation": "Le cortisol est un glucocorticoïde aux effets métaboliques et immunitaires."
      },
      {
        "content": "Il est le principal minéralocorticoïde.",
        "correct": false,
        "explanation": "Le cortisol est un glucocorticoïde aux effets métaboliques et immunitaires."
      }
    ],
    "explanation": "Le cortisol est un glucocorticoïde aux effets métaboliques et immunitaires."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel effet du cortisol concerne le système immunitaire ?",
    "choices": [
      {
        "content": "immunosuppression",
        "correct": true,
        "explanation": "Le cortisol est un glucocorticoïde aux effets métaboliques et immunitaires."
      },
      {
        "content": "stimulation obligatoire de tous les lymphocytes",
        "correct": false,
        "explanation": "Le cortisol est un glucocorticoïde aux effets métaboliques et immunitaires."
      },
      {
        "content": "aucun effet",
        "correct": false,
        "explanation": "Le cortisol est un glucocorticoïde aux effets métaboliques et immunitaires."
      },
      {
        "content": "production d'anticorps uniquement",
        "correct": false,
        "explanation": "Le cortisol est un glucocorticoïde aux effets métaboliques et immunitaires."
      }
    ],
    "explanation": "Le cortisol est un glucocorticoïde aux effets métaboliques et immunitaires."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des androgènes :",
    "choices": [
      {
        "content": "La testostérone est un androgène.",
        "correct": true,
        "explanation": "La testostérone est le principal androgène circulant."
      },
      {
        "content": "Ils stimulent notamment la synthèse protéique musculaire.",
        "correct": true,
        "explanation": "Les androgènes stimulent notamment la synthèse protéique musculaire."
      },
      {
        "content": "Ils participent aux caractères sexuels masculins.",
        "correct": true,
        "explanation": "Les androgènes participent au développement des caractères sexuels masculins."
      },
      {
        "content": "L'œstradiol est classé parmi les androgènes.",
        "correct": false,
        "explanation": "L’œstradiol est un œstrogène, et non un androgène."
      }
    ],
    "explanation": "La testostérone est le principal androgène circulant et participe aux caractères sexuels masculins ainsi qu’aux effets anabolisants."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel androgène testiculaire est majeur ?",
    "choices": [
      {
        "content": "testostérone",
        "correct": true,
        "explanation": "La testostérone est le principal exemple."
      },
      {
        "content": "œstradiol",
        "correct": false,
        "explanation": "La testostérone est le principal exemple."
      },
      {
        "content": "cortisol",
        "correct": false,
        "explanation": "La testostérone est le principal exemple."
      },
      {
        "content": "aldostérone",
        "correct": false,
        "explanation": "La testostérone est le principal exemple."
      }
    ],
    "explanation": "La testostérone est le principal exemple."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel est le principal minéralocorticoïde humain ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "aldostérone",
        "aldosterone",
        "l'aldostérone",
        "l'aldosterone"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "L'aldostérone est le minéralocorticoïde de référence."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel effet vasculaire les œstrogènes peuvent-ils favoriser ?",
    "choices": [
      {
        "content": "vasodilatation",
        "correct": true,
        "explanation": "Les œstrogènes ont des effets reproductifs, osseux et vasculaires."
      },
      {
        "content": "vasoconstriction",
        "correct": false,
        "explanation": "Les œstrogènes ont des effets reproductifs, osseux et vasculaires."
      },
      {
        "content": "thrombose",
        "correct": false,
        "explanation": "Les œstrogènes ont des effets reproductifs, osseux et vasculaires."
      },
      {
        "content": "absence d'effet",
        "correct": false,
        "explanation": "Les œstrogènes ont des effets reproductifs, osseux et vasculaires."
      }
    ],
    "explanation": "Les œstrogènes ont des effets reproductifs, osseux et vasculaires."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Sélectionnez exactement les trois classes de noyaux stéroïdiens associées aux hormones du chapitre.",
    "choices": [
      {
        "content": "Estrane",
        "correct": true,
        "explanation": "18 C."
      },
      {
        "content": "Androstane",
        "correct": true,
        "explanation": "19 C."
      },
      {
        "content": "Prégnane",
        "correct": true,
        "explanation": "21 C."
      },
      {
        "content": "Cellobiose",
        "correct": false,
        "explanation": "Diholoside."
      }
    ],
    "explanation": "Estrane, androstane et prégnane structurent la classification hormonale."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle phase du cycle est associée au corps jaune ?",
    "choices": [
      {
        "content": "phase lutéale",
        "correct": true,
        "explanation": "La progestérone est un stéroïde C21 lié à la phase lutéale."
      },
      {
        "content": "phase folliculaire précoce uniquement",
        "correct": false,
        "explanation": "La progestérone est un stéroïde C21 lié à la phase lutéale."
      },
      {
        "content": "aucune phase",
        "correct": false,
        "explanation": "La progestérone est un stéroïde C21 lié à la phase lutéale."
      },
      {
        "content": "phase de digestion",
        "correct": false,
        "explanation": "La progestérone est un stéroïde C21 lié à la phase lutéale."
      }
    ],
    "explanation": "La progestérone est un stéroïde C21 lié à la phase lutéale."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des sites de synthèse :",
    "choices": [
      {
        "content": "Corticosurrénale → cortisol/aldostérone.",
        "correct": true,
        "explanation": "La corticosurrénale synthétise notamment le cortisol et l’aldostérone."
      },
      {
        "content": "Cellules de Leydig → testostérone.",
        "correct": true,
        "explanation": "Les cellules de Leydig du testicule synthétisent la testostérone."
      },
      {
        "content": "Follicule ovarien → œstrogènes.",
        "correct": true,
        "explanation": "Le follicule ovarien synthétise des œstrogènes pendant la phase folliculaire."
      },
      {
        "content": "Le pancréas est le site principal de synthèse de ces trois classes hormonales.",
        "correct": false,
        "explanation": "Le pancréas n’est pas le site principal de synthèse de ces hormones stéroïdiennes."
      }
    ],
    "explanation": "Les hormones stéroïdiennes sont synthétisées par des tissus spécialisés, notamment la corticosurrénale et les gonades."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel site est associé aux glucocorticoïdes ?",
    "choices": [
      {
        "content": "corticosurrénale",
        "correct": true,
        "explanation": "Les sites de synthèse sont des repères classiques du chapitre."
      },
      {
        "content": "thyroïde",
        "correct": false,
        "explanation": "Les sites de synthèse sont des repères classiques du chapitre."
      },
      {
        "content": "rate",
        "correct": false,
        "explanation": "Les sites de synthèse sont des repères classiques du chapitre."
      },
      {
        "content": "moelle osseuse",
        "correct": false,
        "explanation": "Les sites de synthèse sont des repères classiques du chapitre."
      }
    ],
    "explanation": "Les sites de synthèse sont des repères classiques du chapitre."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos du cholestérol et des membranes :",
    "choices": [
      {
        "content": "Le cholestérol libre est amphipathique.",
        "correct": true,
        "explanation": "Le cholestérol est un constituant membranaire majeur."
      },
      {
        "content": "Il contrôle la fluidité membranaire.",
        "correct": true,
        "explanation": "Le cholestérol est un constituant membranaire majeur."
      },
      {
        "content": "Il peut réguler l'activité de protéines membranaires.",
        "correct": true,
        "explanation": "Le cholestérol est un constituant membranaire majeur."
      },
      {
        "content": "Le cholestérol est absent des membranes.",
        "correct": false,
        "explanation": "Le cholestérol est un constituant membranaire majeur."
      }
    ],
    "explanation": "Le cholestérol est un constituant membranaire majeur."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Pour cette synthèse du chapitre sur les stérols, stéroïdes et stérides, sélectionnez exactement les cinq affirmations correctes.",
    "choices": [
      {
        "content": "Le cholestérol libre est amphiphile.",
        "correct": true,
        "explanation": "Propriété."
      },
      {
        "content": "Les stérides sont des esters de stérol.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Les acides biliaires participent à la digestion des lipides.",
        "correct": true,
        "explanation": "Rôle."
      },
      {
        "content": "Le cortisol est un glucocorticoïde.",
        "correct": true,
        "explanation": "Classe."
      },
      {
        "content": "La progestérone est associée à la phase lutéale.",
        "correct": true,
        "explanation": "Physiologie."
      },
      {
        "content": "Le noyau stérane possède 3 cycles.",
        "correct": false,
        "explanation": "4."
      },
      {
        "content": "Le cholestérol porte son OH en C17.",
        "correct": false,
        "explanation": "C3."
      },
      {
        "content": "L'aldostérone est un œstrogène.",
        "correct": false,
        "explanation": "Minéralocorticoïde."
      },
      {
        "content": "La testostérone possède un noyau estrane C18.",
        "correct": false,
        "explanation": "Androstane C19."
      },
      {
        "content": "Les hormones stéroïdiennes sont hydrophiles.",
        "correct": false,
        "explanation": "Lipophiles."
      }
    ],
    "explanation": "MASTER final transversal."
  }
];
