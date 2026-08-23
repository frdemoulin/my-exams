import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Stérols, stéroïdes et stérides — Section C — Hormones stéroïdiennes : noyaux et origines */
export const UE14_BIOCH_CH8_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le cholestérol comme précurseur des hormones stéroïdiennes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles sont des peptides hydrosolubles.",
        "correct": false,
        "explanation": "Ce sont des lipides."
      },
      {
        "content": "La prégnénolone n'a aucun lien avec la stéroïdogenèse.",
        "correct": false,
        "explanation": "Elle est un intermédiaire central."
      },
      {
        "content": "Les hormones stéroïdiennes sont lipophiles.",
        "correct": true,
        "explanation": "Elles traversent les membranes et agissent souvent via des récepteurs intracellulaires."
      },
      {
        "content": "La première étape mitochondriale implique le transfert du cholestérol vers la membrane interne.",
        "correct": true,
        "explanation": "La protéine StAR participe à cette étape dans les tissus stéroïdogènes."
      },
      {
        "content": "Les hormones stéroïdiennes sont synthétisées à partir du glycogène sans cholestérol.",
        "correct": false,
        "explanation": "Le cholestérol est leur précurseur."
      }
    ],
    "explanation": "Le cholestérol est converti en prégnénolone puis en diverses hormones stéroïdiennes dans les tissus stéroïdogènes."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant le noyau estrane, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le squelette estrane comporte 18 carbones.",
        "correct": true,
        "explanation": "Il correspond au squelette carboné des œstrogènes."
      },
      {
        "content": "L'œstradiol est un minéralocorticoïde.",
        "correct": false,
        "explanation": "C'est un œstrogène."
      },
      {
        "content": "Le noyau estrane comporte 21 carbones.",
        "correct": false,
        "explanation": "Le noyau pregnane est C21."
      },
      {
        "content": "L'aromatase transforme les œstrogènes en glycogène.",
        "correct": false,
        "explanation": "Elle convertit des androgènes en œstrogènes."
      },
      {
        "content": "La testostérone est un stéroïde C18 de type estrane.",
        "correct": false,
        "explanation": "La testostérone est C19."
      }
    ],
    "explanation": "Le noyau estrane C18 caractérise les œstrogènes."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de carbones comporte le squelette estrane ?",
    "answer": {
      "type": "number",
      "value": 18,
      "tolerance": 0
    },
    "explanation": "Le squelette estrane C18 caractérise les œstrogènes."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le noyau pregnane, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La testostérone est un stéroïde C21.",
        "correct": false,
        "explanation": "Elle est C19."
      },
      {
        "content": "L'œstradiol est un stéroïde pregnane C21.",
        "correct": false,
        "explanation": "Il est C18."
      },
      {
        "content": "La progestérone est un stéroïde C21.",
        "correct": true,
        "explanation": "Elle appartient à la famille des progestagènes."
      },
      {
        "content": "Le squelette pregnane comporte 21 carbones.",
        "correct": true,
        "explanation": "Il caractérise plusieurs corticostéroïdes et progestatifs."
      },
      {
        "content": "L'aldostérone est un minéralocorticoïde C21.",
        "correct": true,
        "explanation": "Elle dérive également du squelette pregnane."
      }
    ],
    "explanation": "Le squelette pregnane C21 est celui de la progestérone, du cortisol et de l'aldostérone."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de carbones comporte le squelette androstane ?",
    "answer": {
      "type": "number",
      "value": 19,
      "tolerance": 0
    },
    "explanation": "Le squelette androstane C19 caractérise les androgènes."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant le caractère lipophile des hormones stéroïdiennes, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Leur synthèse est étroitement régulée et elles ne sont généralement pas stockées comme des peptides dans des granules.",
        "correct": true,
        "explanation": "Elles diffusent après synthèse."
      },
      {
        "content": "Leurs récepteurs classiques sont uniquement des canaux ioniques membranaires.",
        "correct": false,
        "explanation": "Ils sont souvent nucléaires/cytosoliques."
      },
      {
        "content": "Elles sont très hydrosolubles et circulent toujours libres.",
        "correct": false,
        "explanation": "Elles sont lipophiles et souvent liées à des protéines."
      },
      {
        "content": "Elles sont stockées en quantités massives dans des vésicules de sécrétion.",
        "correct": false,
        "explanation": "Elles sont surtout synthétisées à la demande."
      },
      {
        "content": "Leurs récepteurs classiques sont intracellulaires.",
        "correct": true,
        "explanation": "Le complexe hormone-récepteur peut réguler la transcription."
      }
    ],
    "explanation": "Les hormones stéroïdiennes sont lipophiles, circulent souvent liées à des protéines et agissent classiquement via des récepteurs intracellulaires.",
    "requiredSelectionCount": 2
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une situation d'application n°2, concernant le cholestérol comme précurseur des hormones stéroïdiennes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les hormones stéroïdiennes sont synthétisées à partir du glycogène sans cholestérol.",
        "correct": false,
        "explanation": "Le cholestérol est leur précurseur."
      },
      {
        "content": "Les hormones stéroïdiennes sont lipophiles.",
        "correct": true,
        "explanation": "Elles traversent les membranes et agissent souvent via des récepteurs intracellulaires."
      },
      {
        "content": "La première étape mitochondriale implique le transfert du cholestérol vers la membrane interne.",
        "correct": true,
        "explanation": "La protéine StAR participe à cette étape dans les tissus stéroïdogènes."
      },
      {
        "content": "La prégnénolone est un précurseur commun à plusieurs branches hormonales.",
        "correct": true,
        "explanation": "Elle mène notamment aux glucocorticoïdes, minéralocorticoïdes et hormones sexuelles."
      },
      {
        "content": "Toutes les hormones stéroïdiennes humaines dérivent du cholestérol.",
        "correct": true,
        "explanation": "La stéroïdogenèse commence par la conversion du cholestérol en prégnénolone."
      }
    ],
    "explanation": "Le cholestérol est converti en prégnénolone puis en diverses hormones stéroïdiennes dans les tissus stéroïdogènes."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans une situation d'application n°2, combien de carbones comporte le squelette estrane ?",
    "answer": {
      "type": "number",
      "value": 18,
      "tolerance": 0
    },
    "explanation": "Le noyau estrane C18 caractérise les œstrogènes."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de carbones comporte le squelette pregnane ?",
    "answer": {
      "type": "number",
      "value": 21,
      "tolerance": 0
    },
    "explanation": "Le squelette pregnane C21 est celui de la progestérone et des corticostéroïdes."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans une situation d'application n°2, concernant le noyau pregnane, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le cortisol est un glucocorticoïde C21.",
        "correct": true,
        "explanation": "Il dérive d'un squelette pregnane."
      },
      {
        "content": "Le noyau pregnane comporte 19 carbones.",
        "correct": false,
        "explanation": "L'androstane est C19."
      },
      {
        "content": "L'aldostérone est un minéralocorticoïde C21.",
        "correct": true,
        "explanation": "Elle dérive également du squelette pregnane."
      },
      {
        "content": "La testostérone est un stéroïde C21.",
        "correct": false,
        "explanation": "Elle est C19."
      },
      {
        "content": "L'œstradiol est un stéroïde pregnane C21.",
        "correct": false,
        "explanation": "Il est C18."
      }
    ],
    "explanation": "Le squelette pregnane C21 est celui de la progestérone, du cortisol et de l'aldostérone."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le cholestérol comme précurseur des hormones stéroïdiennes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elles sont toutes stockées en grande quantité dans des vésicules avant sécrétion.",
        "correct": false,
        "explanation": "Elles sont en général synthétisées à la demande."
      },
      {
        "content": "La première étape mitochondriale implique le transfert du cholestérol vers la membrane interne.",
        "correct": true,
        "explanation": "La protéine StAR participe à cette étape dans les tissus stéroïdogènes."
      },
      {
        "content": "Les hormones stéroïdiennes sont lipophiles.",
        "correct": true,
        "explanation": "Elles traversent les membranes et agissent souvent via des récepteurs intracellulaires."
      },
      {
        "content": "La prégnénolone n'a aucun lien avec la stéroïdogenèse.",
        "correct": false,
        "explanation": "Elle est un intermédiaire central."
      },
      {
        "content": "Elles sont des peptides hydrosolubles.",
        "correct": false,
        "explanation": "Ce sont des lipides."
      }
    ],
    "explanation": "Le cholestérol est converti en prégnénolone puis en diverses hormones stéroïdiennes dans les tissus stéroïdogènes."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de carbones comporte le squelette estrane ?",
    "answer": {
      "type": "number",
      "value": 18,
      "tolerance": 0
    },
    "explanation": "Le noyau estrane C18 caractérise les œstrogènes."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le noyau androstane ?",
    "choices": [
      {
        "content": "La testostérone est un glucocorticoïde.",
        "correct": false,
        "explanation": "C'est un androgène."
      },
      {
        "content": "La progestérone est un androgène C19.",
        "correct": false,
        "explanation": "C'est un progestatif C21."
      },
      {
        "content": "Le noyau androstane comporte 18 carbones.",
        "correct": false,
        "explanation": "C'est l'estrane."
      },
      {
        "content": "La testostérone est un androgène C19.",
        "correct": true,
        "explanation": "Elle possède notamment un OH en C17β."
      },
      {
        "content": "La DHEA est une hormone peptidique.",
        "correct": false,
        "explanation": "C'est un stéroïde."
      }
    ],
    "explanation": "Le noyau androstane C19 caractérise les androgènes tels que testostérone, DHEA et androstènedione."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel organe endocrine possède une zone glomérulée productrice d'aldostérone et une zone fasciculée productrice de cortisol ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cortex surrénalien",
        "corticosurrénale",
        "glande surrénale",
        "surrénale"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le cortex surrénalien est organisé en zones spécialisées dans différentes branches de stéroïdogenèse."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les sites de stéroïdogenèse, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Toutes les hormones stéroïdiennes proviennent exclusivement d'un seul organe.",
        "correct": false,
        "explanation": "Plusieurs tissus sont stéroïdogènes."
      },
      {
        "content": "Le cortex surrénalien synthétise des corticostéroïdes.",
        "correct": true,
        "explanation": "Il produit notamment cortisol et aldostérone selon les zones."
      },
      {
        "content": "La testostérone est produite uniquement par le foie.",
        "correct": false,
        "explanation": "Les gonades et la surrénale contribuent à la production d'androgènes."
      },
      {
        "content": "Le cortex surrénalien ne synthétise aucun stéroïde.",
        "correct": false,
        "explanation": "Il est un site majeur."
      },
      {
        "content": "Les cellules de Leydig du testicule synthétisent de la testostérone.",
        "correct": true,
        "explanation": "La LH stimule cette fonction."
      }
    ],
    "explanation": "Les principaux sites stéroïdogènes sont cortex surrénalien, gonades et placenta.",
    "requiredSelectionCount": 2
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le caractère lipophile des hormones stéroïdiennes ?",
    "choices": [
      {
        "content": "Leur synthèse est étroitement régulée et elles ne sont généralement pas stockées comme des peptides dans des granules.",
        "correct": true,
        "explanation": "Elles diffusent après synthèse."
      },
      {
        "content": "Leurs récepteurs classiques sont intracellulaires.",
        "correct": true,
        "explanation": "Le complexe hormone-récepteur peut réguler la transcription."
      },
      {
        "content": "Elles traversent facilement la bicouche lipidique.",
        "correct": true,
        "explanation": "Leur squelette est hydrophobe."
      },
      {
        "content": "Elles circulent souvent liées à des protéines plasmatiques.",
        "correct": true,
        "explanation": "Cette liaison augmente leur solubilité apparente et leur demi-vie."
      },
      {
        "content": "Elles sont très hydrosolubles et circulent toujours libres.",
        "correct": false,
        "explanation": "Elles sont lipophiles et souvent liées à des protéines."
      }
    ],
    "explanation": "Les hormones stéroïdiennes sont lipophiles, circulent souvent liées à des protéines et agissent classiquement via des récepteurs intracellulaires."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel stérol constitue le précurseur des hormones stéroïdiennes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cholestérol",
        "cholesterol",
        "le cholestérol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le cholestérol est converti en prégnénolone puis en diverses hormones stéroïdiennes dans les tissus stéroïdogènes."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant le noyau estrane, laquelle est correcte ?",
    "choices": [
      {
        "content": "L'œstradiol est un minéralocorticoïde.",
        "correct": false,
        "explanation": "C'est un œstrogène."
      },
      {
        "content": "La testostérone est un stéroïde C18 de type estrane.",
        "correct": false,
        "explanation": "La testostérone est C19."
      },
      {
        "content": "Le noyau estrane comporte 21 carbones.",
        "correct": false,
        "explanation": "Le noyau pregnane est C21."
      },
      {
        "content": "L'œstradiol est un œstrogène C18.",
        "correct": true,
        "explanation": "C'est l'œstrogène majeur en âge reproductif."
      },
      {
        "content": "L'aromatase transforme les œstrogènes en glycogène.",
        "correct": false,
        "explanation": "Elle convertit des androgènes en œstrogènes."
      }
    ],
    "explanation": "Le noyau estrane C18 caractérise les œstrogènes."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le noyau androstane ?",
    "choices": [
      {
        "content": "L'androstènedione est un précurseur/androgène portant une cétone en C17.",
        "correct": true,
        "explanation": "Elle peut être convertie en testostérone ou en œstrogènes."
      },
      {
        "content": "La testostérone est un glucocorticoïde.",
        "correct": false,
        "explanation": "C'est un androgène."
      },
      {
        "content": "La progestérone est un androgène C19.",
        "correct": false,
        "explanation": "C'est un progestatif C21."
      },
      {
        "content": "La DHEA est une hormone peptidique.",
        "correct": false,
        "explanation": "C'est un stéroïde."
      },
      {
        "content": "Le squelette androstane comporte 19 carbones.",
        "correct": true,
        "explanation": "Il caractérise les androgènes."
      }
    ],
    "explanation": "Le noyau androstane C19 caractérise les androgènes tels que testostérone, DHEA et androstènedione."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Elles sont des peptides hydrosolubles.",
        "correct": false,
        "explanation": "Ce sont des lipides."
      },
      {
        "content": "Elles sont toutes stockées en grande quantité dans des vésicules avant sécrétion.",
        "correct": false,
        "explanation": "Elles sont en général synthétisées à la demande."
      },
      {
        "content": "La testostérone est un stéroïde C21.",
        "correct": false,
        "explanation": "Elle est C19."
      },
      {
        "content": "Le squelette pregnane comporte 21 carbones.",
        "correct": true,
        "explanation": "Il caractérise plusieurs corticostéroïdes et progestatifs."
      },
      {
        "content": "La première étape mitochondriale implique le transfert du cholestérol vers la membrane interne.",
        "correct": true,
        "explanation": "La protéine StAR participe à cette étape dans les tissus stéroïdogènes."
      },
      {
        "content": "Toutes les hormones stéroïdiennes humaines dérivent du cholestérol.",
        "correct": true,
        "explanation": "La stéroïdogenèse commence par la conversion du cholestérol en prégnénolone."
      },
      {
        "content": "L'œstradiol est un stéroïde pregnane C21.",
        "correct": false,
        "explanation": "Il est C18."
      },
      {
        "content": "Les hormones stéroïdiennes sont lipophiles.",
        "correct": true,
        "explanation": "Elles traversent les membranes et agissent souvent via des récepteurs intracellulaires."
      },
      {
        "content": "Le cortisol est un glucocorticoïde C21.",
        "correct": true,
        "explanation": "Il dérive d'un squelette pregnane."
      },
      {
        "content": "Le noyau pregnane comporte 19 carbones.",
        "correct": false,
        "explanation": "L'androstane est C19."
      }
    ],
    "explanation": "Le squelette pregnane C21 est celui de la progestérone, du cortisol et de l'aldostérone. Le cholestérol est converti en prégnénolone puis en diverses hormones stéroïdiennes dans les tissus stéroïdogènes."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant les sites de stéroïdogenèse, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Le placenta synthétise des hormones stéroïdiennes pendant la grossesse.",
        "correct": true,
        "explanation": "Il produit notamment progestérone et œstrogènes."
      },
      {
        "content": "Toutes les hormones stéroïdiennes proviennent exclusivement d'un seul organe.",
        "correct": false,
        "explanation": "Plusieurs tissus sont stéroïdogènes."
      },
      {
        "content": "La testostérone est produite uniquement par le foie.",
        "correct": false,
        "explanation": "Les gonades et la surrénale contribuent à la production d'androgènes."
      },
      {
        "content": "Les cellules de Leydig du testicule synthétisent de la testostérone.",
        "correct": true,
        "explanation": "La LH stimule cette fonction."
      },
      {
        "content": "Le cortex surrénalien synthétise des corticostéroïdes.",
        "correct": true,
        "explanation": "Il produit notamment cortisol et aldostérone selon les zones."
      }
    ],
    "explanation": "Les principaux sites stéroïdogènes sont cortex surrénalien, gonades et placenta."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel type de récepteur est classiquement activé par une hormone stéroïdienne : intracellulaire ou uniquement membranaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "intracellulaire",
        "récepteur intracellulaire",
        "recepteur intracellulaire",
        "nucléaire",
        "récepteur nucléaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les hormones stéroïdiennes sont lipophiles, circulent souvent liées à des protéines et agissent classiquement via des récepteurs intracellulaires."
  }
];
