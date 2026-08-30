import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Stérols, stéroïdes et stérides — Section D — Fonctions des corticostéroïdes et hormones sexuelles */
export const UE14_BIOCH_CH8_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'aldostérone, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle diminue la réabsorption rénale de sodium.",
        "correct": false,
        "explanation": "Elle l'augmente."
      },
      {
        "content": "Elle est synthétisée principalement par les cellules de Leydig.",
        "correct": false,
        "explanation": "Elle est corticosurrénalienne."
      },
      {
        "content": "Elle est le principal glucocorticoïde humain.",
        "correct": false,
        "explanation": "Ce rôle revient au cortisol."
      },
      {
        "content": "Elle favorise aussi la sécrétion de protons par certaines cellules intercalaires.",
        "correct": true,
        "explanation": "Elle influence l'équilibre acido-basique."
      },
      {
        "content": "C'est le principal minéralocorticoïde physiologique chez l'être humain.",
        "correct": true,
        "explanation": "Elle est synthétisée dans la zone glomérulée du cortex surrénalien."
      }
    ],
    "explanation": "L'aldostérone augmente la réabsorption de Na+ et favorise l'excrétion de K+ et H+, contribuant au contrôle du volume extracellulaire et de la pression artérielle."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant le cortisol, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le cortisol est une hormone peptidique.",
        "correct": false,
        "explanation": "C'est un stéroïde."
      },
      {
        "content": "C'est le principal glucocorticoïde physiologique humain.",
        "correct": true,
        "explanation": "Il est synthétisé principalement dans la zone fasciculée du cortex surrénalien."
      },
      {
        "content": "Le cortisol est le principal minéralocorticoïde.",
        "correct": false,
        "explanation": "L'aldostérone joue ce rôle."
      },
      {
        "content": "Hydrocortisone est une molécule sans rapport avec le cortisol.",
        "correct": false,
        "explanation": "C'est le même composé."
      },
      {
        "content": "Le cortisol diminue toujours la glycémie.",
        "correct": false,
        "explanation": "Il tend plutôt à l'augmenter dans ses effets métaboliques."
      }
    ],
    "explanation": "Le cortisol/hydrocortisone est le principal glucocorticoïde humain, à effets métaboliques et anti-inflammatoires."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel corticostéroïde est le principal minéralocorticoïde physiologique humain ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "aldostérone",
        "l'aldostérone"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'aldostérone est le principal minéralocorticoïde humain et agit notamment sur le néphron distal."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les œstrogènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'œstradiol est un minéralocorticoïde.",
        "correct": false,
        "explanation": "C'est un œstrogène."
      },
      {
        "content": "Ils participent au maintien de la masse osseuse.",
        "correct": true,
        "explanation": "Leur diminution après la ménopause favorise la perte osseuse."
      },
      {
        "content": "Les œstrogènes sont uniquement produits chez la femme.",
        "correct": false,
        "explanation": "Les hommes en produisent aussi, notamment par aromatisation."
      },
      {
        "content": "Ils modulent la fonction vasculaire et endothéliale.",
        "correct": true,
        "explanation": "Leurs effets cardiovasculaires dépendent du contexte physiologique et clinique."
      },
      {
        "content": "Les œstrogènes participent au développement des caractères sexuels féminins.",
        "correct": true,
        "explanation": "Ils agissent sur de nombreux tissus."
      }
    ],
    "explanation": "L'œstradiol est un œstrogène majeur ; ses effets incluent reproduction, caractères sexuels et maintien osseux."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la progestérone, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle est le principal androgène testiculaire.",
        "correct": false,
        "explanation": "Ce rôle revient à la testostérone."
      },
      {
        "content": "Le placenta devient une source majeure pendant la grossesse.",
        "correct": true,
        "explanation": "La production placentaire soutient la gestation."
      },
      {
        "content": "Elle abaisse systématiquement la température basale après l'ovulation.",
        "correct": false,
        "explanation": "Elle l'élève légèrement."
      },
      {
        "content": "Elle est un stéroïde C18 de type estrane.",
        "correct": false,
        "explanation": "C'est un stéroïde C21."
      },
      {
        "content": "Elle provoque la phase proliférative initiale de l'endomètre en l'absence d'œstrogènes.",
        "correct": false,
        "explanation": "La prolifération est surtout œstrogéno-dépendante."
      }
    ],
    "explanation": "La progestérone C21 est l'hormone majeure de la phase lutéale et transforme l'endomètre en tissu sécrétoire."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant les corticostéroïdes surrénaliens, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "L'aldostérone est le principal glucocorticoïde.",
        "correct": false,
        "explanation": "Elle est minéralocorticoïde."
      },
      {
        "content": "Des différences de fonctions chimiques et d'enzymes biosynthétiques déterminent leurs activités.",
        "correct": true,
        "explanation": "De petites modifications structurales changent la sélectivité des récepteurs."
      },
      {
        "content": "La classification fonctionnelle ne dépend d'aucune différence structurale.",
        "correct": false,
        "explanation": "La structure conditionne l'affinité et la fonction."
      },
      {
        "content": "L'aldostérone est principalement minéralocorticoïde.",
        "correct": true,
        "explanation": "Elle agit fortement sur le rein."
      },
      {
        "content": "Cortisol et aldostérone sont la même molécule.",
        "correct": false,
        "explanation": "Ce sont deux corticostéroïdes distincts."
      }
    ],
    "explanation": "Cortisol et aldostérone sont deux corticostéroïdes C21 aux fonctions dominantes différentes.",
    "requiredSelectionCount": 2
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la relation structure-fonction des hormones stéroïdiennes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les noyaux C18, C19 et C21 donnent un premier repère de classification.",
        "correct": true,
        "explanation": "Ils correspondent respectivement aux grandes familles œstrogénique, androgénique et pregnane."
      },
      {
        "content": "Deux hormones partageant le noyau stéroïdien peuvent avoir des fonctions très différentes.",
        "correct": true,
        "explanation": "Le squelette commun ne suffit pas à prédire l'effet."
      },
      {
        "content": "Des modifications de quelques groupements fonctionnels peuvent changer fortement l'activité hormonale.",
        "correct": true,
        "explanation": "Les récepteurs reconnaissent finement la structure."
      },
      {
        "content": "Le nombre de carbones n'apporte aucune information de classe.",
        "correct": false,
        "explanation": "C18/C19/C21 est un repère utile."
      },
      {
        "content": "La position et l'orientation des hydroxyles ou carbonyles sont importantes.",
        "correct": true,
        "explanation": "La stéréochimie influence la reconnaissance."
      }
    ],
    "explanation": "Les familles hormonales partagent le noyau stéroïdien mais diffèrent par le nombre de carbones et les substituants, ce qui conditionne leur fonction."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel ion est principalement réabsorbé davantage sous l'action de l'aldostérone ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sodium",
        "Na+",
        "Na⁺"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'aldostérone augmente la réabsorption de Na+ et favorise l'excrétion de K+ et H+, contribuant au contrôle du volume extracellulaire et de la pression artérielle."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel corticostéroïde est également appelé hydrocortisone ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cortisol",
        "le cortisol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Cortisol et hydrocortisone désignent la même molécule."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les androgènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'effet physiologique des androgènes se résume à l'agressivité.",
        "correct": false,
        "explanation": "Cette généralisation comportementale n'est pas scientifiquement appropriée."
      },
      {
        "content": "Elle favorise la synthèse protéique dans plusieurs tissus.",
        "correct": true,
        "explanation": "Elle possède un effet anabolisant."
      },
      {
        "content": "Les androgènes sont exclusivement présents chez l'homme.",
        "correct": false,
        "explanation": "Ils sont présents dans les deux sexes."
      },
      {
        "content": "La DHEA est une hormone thyroïdienne iodée.",
        "correct": false,
        "explanation": "C'est un stéroïde."
      },
      {
        "content": "La testostérone participe au développement et au maintien des caractères sexuels masculins.",
        "correct": true,
        "explanation": "Ses effets dépendent de l'âge et du tissu."
      }
    ],
    "explanation": "Les androgènes, dont la testostérone, interviennent dans la différenciation sexuelle, les caractères sexuels secondaires et l'anabolisme."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'aldostérone, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle est le principal glucocorticoïde humain.",
        "correct": false,
        "explanation": "Ce rôle revient au cortisol."
      },
      {
        "content": "Elle provoque toujours une perte de volume extracellulaire.",
        "correct": false,
        "explanation": "Elle favorise la rétention sodée et donc l'expansion du volume extracellulaire."
      },
      {
        "content": "Elle diminue la réabsorption rénale de sodium.",
        "correct": false,
        "explanation": "Elle l'augmente."
      },
      {
        "content": "Elle augmente la réabsorption de sodium dans le néphron distal.",
        "correct": true,
        "explanation": "L'eau suit indirectement le sodium selon le contexte."
      },
      {
        "content": "C'est le principal minéralocorticoïde physiologique chez l'être humain.",
        "correct": true,
        "explanation": "Elle est synthétisée dans la zone glomérulée du cortex surrénalien."
      }
    ],
    "explanation": "L'aldostérone augmente la réabsorption de Na+ et favorise l'excrétion de K+ et H+, contribuant au contrôle du volume extracellulaire et de la pression artérielle."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel glucocorticoïde est également appelé hydrocortisone ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cortisol",
        "le cortisol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le cortisol/hydrocortisone est le principal glucocorticoïde humain, à effets métaboliques et anti-inflammatoires."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les androgènes ?",
    "choices": [
      {
        "content": "L'effet physiologique des androgènes se résume à l'agressivité.",
        "correct": false,
        "explanation": "Cette généralisation comportementale n'est pas scientifiquement appropriée."
      },
      {
        "content": "La testostérone est un œstrogène C18.",
        "correct": false,
        "explanation": "C'est un androgène C19."
      },
      {
        "content": "Les androgènes existent également chez la femme.",
        "correct": true,
        "explanation": "Ils sont produits en quantités plus faibles par ovaires et surrénales."
      },
      {
        "content": "Les androgènes sont exclusivement présents chez l'homme.",
        "correct": false,
        "explanation": "Ils sont présents dans les deux sexes."
      },
      {
        "content": "La DHEA est une hormone thyroïdienne iodée.",
        "correct": false,
        "explanation": "C'est un stéroïde."
      }
    ],
    "explanation": "Les androgènes, dont la testostérone, interviennent dans la différenciation sexuelle, les caractères sexuels secondaires et l'anabolisme."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les œstrogènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils participent au maintien de la masse osseuse.",
        "correct": true,
        "explanation": "Leur diminution après la ménopause favorise la perte osseuse."
      },
      {
        "content": "L'œstradiol est un œstrogène majeur chez la femme en période reproductive.",
        "correct": true,
        "explanation": "Il est principalement synthétisé par l'ovaire."
      },
      {
        "content": "Les œstrogènes sont uniquement produits chez la femme.",
        "correct": false,
        "explanation": "Les hommes en produisent aussi, notamment par aromatisation."
      },
      {
        "content": "L'œstradiol est un minéralocorticoïde.",
        "correct": false,
        "explanation": "C'est un œstrogène."
      },
      {
        "content": "Ils modulent la fonction vasculaire et endothéliale.",
        "correct": true,
        "explanation": "Leurs effets cardiovasculaires dépendent du contexte physiologique et clinique."
      }
    ],
    "explanation": "L'œstradiol est un œstrogène majeur ; ses effets incluent reproduction, caractères sexuels et maintien osseux."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la progestérone, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Elle transforme l'endomètre prolifératif en endomètre sécrétoire.",
        "correct": true,
        "explanation": "Elle prépare la muqueuse à l'implantation."
      },
      {
        "content": "Elle est le principal androgène testiculaire.",
        "correct": false,
        "explanation": "Ce rôle revient à la testostérone."
      },
      {
        "content": "Le placenta devient une source majeure pendant la grossesse.",
        "correct": true,
        "explanation": "La production placentaire soutient la gestation."
      },
      {
        "content": "Elle abaisse systématiquement la température basale après l'ovulation.",
        "correct": false,
        "explanation": "Elle l'élève légèrement."
      },
      {
        "content": "Elle est un stéroïde C18 de type estrane.",
        "correct": false,
        "explanation": "C'est un stéroïde C21."
      }
    ],
    "explanation": "La progestérone C21 est l'hormone majeure de la phase lutéale et transforme l'endomètre en tissu sécrétoire.",
    "requiredSelectionCount": 2
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux effets rénaux caractéristiques de l'aldostérone.",
    "choices": [
      {
        "content": "Hydrolyse directe du glycogène dans l'urine.",
        "correct": false,
        "explanation": "Ce n'est pas une action de l'aldostérone."
      },
      {
        "content": "Diminution de la réabsorption de sodium.",
        "correct": false,
        "explanation": "L'effet est inverse."
      },
      {
        "content": "Augmentation de la sécrétion de potassium.",
        "correct": true,
        "explanation": "Elle favorise l'excrétion urinaire de K+."
      },
      {
        "content": "Blocage complet de la sécrétion de protons.",
        "correct": false,
        "explanation": "L'aldostérone peut au contraire favoriser la sécrétion de H+ par certaines cellules intercalaires."
      },
      {
        "content": "Augmentation de la réabsorption de sodium.",
        "correct": true,
        "explanation": "L'aldostérone augmente l'expression/activité des systèmes de transport du Na+ dans le néphron distal."
      }
    ],
    "explanation": "L'aldostérone favorise la rétention sodée et la sécrétion de potassium, avec des conséquences sur le volume extracellulaire et la pression artérielle.",
    "requiredSelectionCount": 2
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nombre de carbones caractérise classiquement le squelette des androgènes ?",
    "answer": {
      "type": "number",
      "value": 19,
      "tolerance": 0
    },
    "explanation": "Les familles hormonales partagent le noyau stéroïdien mais diffèrent par le nombre de carbones et les substituants, ce qui conditionne leur fonction."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant l'aldostérone, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle est le principal glucocorticoïde humain.",
        "correct": false,
        "explanation": "Ce rôle revient au cortisol."
      },
      {
        "content": "Elle favorise aussi la sécrétion de protons par certaines cellules intercalaires.",
        "correct": true,
        "explanation": "Elle influence l'équilibre acido-basique."
      },
      {
        "content": "Elle est synthétisée principalement par les cellules de Leydig.",
        "correct": false,
        "explanation": "Elle est corticosurrénalienne."
      },
      {
        "content": "Elle provoque toujours une perte de volume extracellulaire.",
        "correct": false,
        "explanation": "Elle favorise la rétention sodée et donc l'expansion du volume extracellulaire."
      },
      {
        "content": "Elle diminue la réabsorption rénale de sodium.",
        "correct": false,
        "explanation": "Elle l'augmente."
      }
    ],
    "explanation": "L'aldostérone augmente la réabsorption de Na+ et favorise l'excrétion de K+ et H+, contribuant au contrôle du volume extracellulaire et de la pression artérielle."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le cortisol ?",
    "choices": [
      {
        "content": "Hydrocortisone est le nom pharmaceutique du cortisol.",
        "correct": true,
        "explanation": "Il s'agit de la même molécule."
      },
      {
        "content": "Hydrocortisone est une molécule sans rapport avec le cortisol.",
        "correct": false,
        "explanation": "C'est le même composé."
      },
      {
        "content": "Il possède des effets anti-inflammatoires et immunomodulateurs.",
        "correct": true,
        "explanation": "Les glucocorticoïdes pharmacologiques exploitent ces propriétés."
      },
      {
        "content": "Le cortisol diminue toujours la glycémie.",
        "correct": false,
        "explanation": "Il tend plutôt à l'augmenter dans ses effets métaboliques."
      },
      {
        "content": "Le cortisol est le principal minéralocorticoïde.",
        "correct": false,
        "explanation": "L'aldostérone joue ce rôle."
      }
    ],
    "explanation": "Le cortisol/hydrocortisone est le principal glucocorticoïde humain, à effets métaboliques et anti-inflammatoires."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "L'aldostérone est principalement minéralocorticoïde.",
        "correct": true,
        "explanation": "Elle agit fortement sur le rein."
      },
      {
        "content": "Les androgènes sont exclusivement présents chez l'homme.",
        "correct": false,
        "explanation": "Ils sont présents dans les deux sexes."
      },
      {
        "content": "L'aldostérone est le principal glucocorticoïde.",
        "correct": false,
        "explanation": "Elle est minéralocorticoïde."
      },
      {
        "content": "Elle favorise la synthèse protéique dans plusieurs tissus.",
        "correct": true,
        "explanation": "Elle possède un effet anabolisant."
      },
      {
        "content": "L'effet physiologique des androgènes se résume à l'agressivité.",
        "correct": false,
        "explanation": "Cette généralisation comportementale n'est pas scientifiquement appropriée."
      },
      {
        "content": "Le cortisol est un androgène C19.",
        "correct": false,
        "explanation": "Il est C21."
      },
      {
        "content": "Le cortisol est principalement glucocorticoïde.",
        "correct": true,
        "explanation": "Il agit fortement sur métabolisme et inflammation."
      },
      {
        "content": "Cortisol et aldostérone sont la même molécule.",
        "correct": false,
        "explanation": "Ce sont deux corticostéroïdes distincts."
      },
      {
        "content": "Des différences de fonctions chimiques et d'enzymes biosynthétiques déterminent leurs activités.",
        "correct": true,
        "explanation": "De petites modifications structurales changent la sélectivité des récepteurs."
      },
      {
        "content": "La testostérone participe au développement et au maintien des caractères sexuels masculins.",
        "correct": true,
        "explanation": "Ses effets dépendent de l'âge et du tissu."
      }
    ],
    "explanation": "Les androgènes, dont la testostérone, interviennent dans la différenciation sexuelle, les caractères sexuels secondaires et l'anabolisme. Cortisol et aldostérone sont deux corticostéroïdes C21 aux fonctions dominantes différentes."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant les œstrogènes, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Ils participent au maintien de la masse osseuse.",
        "correct": true,
        "explanation": "Leur diminution après la ménopause favorise la perte osseuse."
      },
      {
        "content": "Les œstrogènes sont uniquement produits chez la femme.",
        "correct": false,
        "explanation": "Les hommes en produisent aussi, notamment par aromatisation."
      },
      {
        "content": "Les œstrogènes participent au développement des caractères sexuels féminins.",
        "correct": true,
        "explanation": "Ils agissent sur de nombreux tissus."
      },
      {
        "content": "L'œstradiol est un minéralocorticoïde.",
        "correct": false,
        "explanation": "C'est un œstrogène."
      },
      {
        "content": "L'œstradiol est un œstrogène majeur chez la femme en période reproductive.",
        "correct": true,
        "explanation": "Il est principalement synthétisé par l'ovaire."
      }
    ],
    "explanation": "L'œstradiol est un œstrogène majeur ; ses effets incluent reproduction, caractères sexuels et maintien osseux."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle structure ovarienne produit fortement la progestérone pendant la phase lutéale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "corps jaune",
        "le corps jaune",
        "corpus luteum"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La progestérone C21 est l'hormone majeure de la phase lutéale et transforme l'endomètre en tissu sécrétoire."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Dans ce schéma simplifié des sites endocriniens, cliquez sur la corticosurrénale, site de synthèse du cortisol et de l'aldostérone.",
    "image": {
      "src": "/images/training/ue14/biochimie/sterols-steroides-sterides/sites-hormones-steroides-qzone.svg",
      "alt": "Silhouette simplifiée avec corticosurrénales au-dessus des reins, gonades pelviennes et placenta schématique",
      "width": 900,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "corticosurrenale",
        "label": "Corticosurrénale",
        "x": 0.228,
        "y": 0.27,
        "tolerance": 0.075
      }
    ],
    "explanation": "Le cortisol et l'aldostérone sont synthétisés dans le cortex surrénalien, dans des zones différentes."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel glucocorticoïde est également appelé hydrocortisone ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cortisol",
        "le cortisol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le cortisol/hydrocortisone est le principal glucocorticoïde humain, à effets métaboliques et anti-inflammatoires."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant les androgènes, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La testostérone est un œstrogène C18.",
        "correct": false,
        "explanation": "C'est un androgène C19."
      },
      {
        "content": "La testostérone participe au développement et au maintien des caractères sexuels masculins.",
        "correct": true,
        "explanation": "Ses effets dépendent de l'âge et du tissu."
      },
      {
        "content": "La DHEA est une hormone thyroïdienne iodée.",
        "correct": false,
        "explanation": "C'est un stéroïde."
      },
      {
        "content": "Les androgènes sont exclusivement présents chez l'homme.",
        "correct": false,
        "explanation": "Ils sont présents dans les deux sexes."
      },
      {
        "content": "Les androgènes existent également chez la femme.",
        "correct": true,
        "explanation": "Ils sont produits en quantités plus faibles par ovaires et surrénales."
      }
    ],
    "explanation": "Les androgènes, dont la testostérone, interviennent dans la différenciation sexuelle, les caractères sexuels secondaires et l'anabolisme.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Dans une situation d'application n°2, quel glucocorticoïde est également appelé hydrocortisone ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cortisol",
        "le cortisol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le cortisol est l'hydrocortisone."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la progestérone, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle est un stéroïde C18 de type estrane.",
        "correct": false,
        "explanation": "C'est un stéroïde C21."
      },
      {
        "content": "Elle abaisse systématiquement la température basale après l'ovulation.",
        "correct": false,
        "explanation": "Elle l'élève légèrement."
      },
      {
        "content": "Elle est le principal androgène testiculaire.",
        "correct": false,
        "explanation": "Ce rôle revient à la testostérone."
      },
      {
        "content": "Elle augmente la température basale après l'ovulation.",
        "correct": true,
        "explanation": "Cet effet thermogène est utilisé comme repère du cycle."
      },
      {
        "content": "Elle provoque la phase proliférative initiale de l'endomètre en l'absence d'œstrogènes.",
        "correct": false,
        "explanation": "La prolifération est surtout œstrogéno-dépendante."
      }
    ],
    "explanation": "La progestérone C21 est l'hormone majeure de la phase lutéale et transforme l'endomètre en tissu sécrétoire."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les corticostéroïdes surrénaliens ?",
    "choices": [
      {
        "content": "Des différences de fonctions chimiques et d'enzymes biosynthétiques déterminent leurs activités.",
        "correct": true,
        "explanation": "De petites modifications structurales changent la sélectivité des récepteurs."
      },
      {
        "content": "Les deux dérivent du cholestérol.",
        "correct": true,
        "explanation": "Ils sont des stéroïdes C21."
      },
      {
        "content": "La classification fonctionnelle ne dépend d'aucune différence structurale.",
        "correct": false,
        "explanation": "La structure conditionne l'affinité et la fonction."
      },
      {
        "content": "L'aldostérone est le principal glucocorticoïde.",
        "correct": false,
        "explanation": "Elle est minéralocorticoïde."
      },
      {
        "content": "Le cortisol est principalement glucocorticoïde.",
        "correct": true,
        "explanation": "Il agit fortement sur métabolisme et inflammation."
      }
    ],
    "explanation": "Cortisol et aldostérone sont deux corticostéroïdes C21 aux fonctions dominantes différentes."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel nombre de carbones caractérise classiquement le squelette des androgènes ?",
    "answer": {
      "type": "number",
      "value": 19,
      "tolerance": 0
    },
    "explanation": "Les familles hormonales partagent le noyau stéroïdien mais diffèrent par le nombre de carbones et les substituants, ce qui conditionne leur fonction."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle hormone ovarienne augmente typiquement la température basale après l'ovulation ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "progestérone",
        "progesterone",
        "la progestérone"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La progestérone sécrétée pendant la phase lutéale exerce un effet thermogène modeste."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le cortisol ?",
    "choices": [
      {
        "content": "Il possède des effets anti-inflammatoires et immunomodulateurs.",
        "correct": true,
        "explanation": "Les glucocorticoïdes pharmacologiques exploitent ces propriétés."
      },
      {
        "content": "Il augmente la disponibilité énergétique en période de stress.",
        "correct": true,
        "explanation": "Il favorise notamment la néoglucogenèse."
      },
      {
        "content": "Hydrocortisone est une molécule sans rapport avec le cortisol.",
        "correct": false,
        "explanation": "C'est le même composé."
      },
      {
        "content": "Hydrocortisone est le nom pharmaceutique du cortisol.",
        "correct": true,
        "explanation": "Il s'agit de la même molécule."
      },
      {
        "content": "C'est le principal glucocorticoïde physiologique humain.",
        "correct": true,
        "explanation": "Il est synthétisé principalement dans la zone fasciculée du cortex surrénalien."
      }
    ],
    "explanation": "Le cortisol/hydrocortisone est le principal glucocorticoïde humain, à effets métaboliques et anti-inflammatoires."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les effets cardiovasculaires des œstrogènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils garantissent une protection absolue contre toute maladie cardiovasculaire.",
        "correct": false,
        "explanation": "Une telle généralisation est incorrecte et dépend fortement du contexte clinique."
      },
      {
        "content": "Ils peuvent moduler favorablement la fonction endothéliale dans certains contextes physiologiques.",
        "correct": true,
        "explanation": "L'œstradiol peut favoriser notamment la production de NO et la vasodilatation."
      },
      {
        "content": "Ils n'ont aucun effet sur l'endothélium.",
        "correct": false,
        "explanation": "Ils modulent plusieurs fonctions endothéliales."
      },
      {
        "content": "Ils participent à la régulation du tonus vasculaire.",
        "correct": true,
        "explanation": "Les effets vasculaires dépendent du tissu, du récepteur et du contexte."
      },
      {
        "content": "Leur seul effet vasculaire est une vasoconstriction obligatoire.",
        "correct": false,
        "explanation": "Ils peuvent au contraire favoriser la vasodilatation."
      }
    ],
    "explanation": "Les œstrogènes ont des effets vasculaires réels mais ne doivent pas être présentés comme une protection cardiovasculaire universelle."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les œstrogènes, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Les œstrogènes sont uniquement produits chez la femme.",
        "correct": false,
        "explanation": "Les hommes en produisent aussi, notamment par aromatisation."
      },
      {
        "content": "L'œstradiol est un minéralocorticoïde.",
        "correct": false,
        "explanation": "C'est un œstrogène."
      },
      {
        "content": "Les œstrogènes participent au développement des caractères sexuels féminins.",
        "correct": true,
        "explanation": "Ils agissent sur de nombreux tissus."
      },
      {
        "content": "Ils participent au maintien de la masse osseuse.",
        "correct": true,
        "explanation": "Leur diminution après la ménopause favorise la perte osseuse."
      },
      {
        "content": "Ils protègent obligatoirement de toute maladie cardiovasculaire.",
        "correct": false,
        "explanation": "Les effets cardiovasculaires ne se résument pas à une protection universelle."
      }
    ],
    "explanation": "L'œstradiol est un œstrogène majeur ; ses effets incluent reproduction, caractères sexuels et maintien osseux.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la progestérone ?",
    "choices": [
      {
        "content": "Elle abaisse systématiquement la température basale après l'ovulation.",
        "correct": false,
        "explanation": "Elle l'élève légèrement."
      },
      {
        "content": "Elle est le principal androgène testiculaire.",
        "correct": false,
        "explanation": "Ce rôle revient à la testostérone."
      },
      {
        "content": "Elle augmente la température basale après l'ovulation.",
        "correct": true,
        "explanation": "Cet effet thermogène est utilisé comme repère du cycle."
      },
      {
        "content": "Elle provoque la phase proliférative initiale de l'endomètre en l'absence d'œstrogènes.",
        "correct": false,
        "explanation": "La prolifération est surtout œstrogéno-dépendante."
      },
      {
        "content": "Elle transforme l'endomètre prolifératif en endomètre sécrétoire.",
        "correct": true,
        "explanation": "Elle prépare la muqueuse à l'implantation."
      }
    ],
    "explanation": "La progestérone C21 est l'hormone majeure de la phase lutéale et transforme l'endomètre en tissu sécrétoire."
  }
];
