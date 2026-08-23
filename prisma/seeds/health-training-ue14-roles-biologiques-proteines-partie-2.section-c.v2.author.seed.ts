import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des protéines, partie 2 — Section C — Collagènes I et IV */
export const UE14_BIOCH_CH13_SECTION_C_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Au sujet de la triple hélice du collagène, sélectionnez toutes les affirmations exactes.",
    "choices": [
      {
        "content": "La superhélice collagénique finale est gauche.",
        "correct": false,
        "explanation": "Elle est droite."
      },
      {
        "content": "Les liaisons hydrogène interchaînes impliquent principalement le NH de glycine et le carbonyle d'une chaîne voisine.",
        "correct": true,
        "explanation": "Ces liaisons du squelette contribuent directement à la cohésion."
      },
      {
        "content": "La triple hélice est stabilisée uniquement par des liaisons H directes des OH d'hydroxyproline.",
        "correct": false,
        "explanation": "Les liaisons interchaînes du squelette et d'autres effets sont essentiels."
      },
      {
        "content": "Chaque chaîne adopte une hélice gauche de type polyproline II-like.",
        "correct": true,
        "explanation": "Cette conformation n'est pas une hélice alpha classique."
      },
      {
        "content": "Les trois chaînes s'enroulent ensemble en une superhélice droite.",
        "correct": true,
        "explanation": "La triple hélice a une chiralité opposée à celle des chaînes individuelles."
      }
    ],
    "explanation": "Chaque chaîne collagénique est une hélice gauche polyproline-II-like ; trois chaînes forment une superhélice droite stabilisée par des liaisons H du squelette et par la 4-hydroxyproline."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur le tropocollagène de type I, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le tropocollagène est un lipide neutre.",
        "correct": false,
        "explanation": "C'est un protomère protéique triple hélicoïdal."
      },
      {
        "content": "Le collagène I normal est toujours un homotrimère α2(I)3.",
        "correct": false,
        "explanation": "La forme la plus courante est [α1(I)]2α2(I)."
      },
      {
        "content": "Une seule chaîne alpha constitue un tropocollagène complet.",
        "correct": false,
        "explanation": "Il en faut trois."
      },
      {
        "content": "Le tropocollagène est plus court qu'un seul acide aminé.",
        "correct": false,
        "explanation": "Il mesure environ 300 nm."
      },
      {
        "content": "Le collagène I est généralement un hétérotrimère [α1(I)]2α2(I).",
        "correct": true,
        "explanation": "Deux chaînes alpha1(I) et une alpha2(I) forment le protomère habituel."
      }
    ],
    "explanation": "Le protomère du collagène I est habituellement [α1(I)]2α2(I), une triple hélice d'environ 300 nm qui s'assemble en fibrilles."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "En nanomètres, quelle est approximativement la périodicité D d'une fibrille de collagène I ?",
    "answer": {
      "type": "number",
      "value": 67,
      "tolerance": 1
    },
    "explanation": "Le décalage axial des molécules de collagène I crée la striation caractéristique de période D proche de 67 nm."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les liaisons croisées du collagène I ?",
    "choices": [
      {
        "content": "La lysyl-oxydase hydrolyse directement l'ATP pour lier deux glycines.",
        "correct": false,
        "explanation": "Elle oxyde des lysines/hydroxylysines."
      },
      {
        "content": "Les liaisons croisées renforcent mécaniquement les fibrilles de collagène.",
        "correct": true,
        "explanation": "Elles augmentent la stabilité du réseau fibrillaire."
      },
      {
        "content": "La lysyl-oxydase initie la formation de liaisons croisées covalentes.",
        "correct": true,
        "explanation": "Elle oxyde certains résidus lysine ou hydroxylysine en aldéhydes réactifs."
      },
      {
        "content": "La lysyl-oxydase agit dans le compartiment extracellulaire.",
        "correct": true,
        "explanation": "Les liaisons croisées maturent après sécrétion du collagène."
      },
      {
        "content": "La lysyl-oxydase est une enzyme dépendante du cuivre.",
        "correct": true,
        "explanation": "Le cuivre est un cofacteur essentiel de son activité."
      }
    ],
    "explanation": "La lysyl-oxydase, enzyme extracellulaire dépendante du cuivre, transforme certaines lysines/hydroxylysines et initie des liaisons croisées qui renforcent les fibrilles."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur l'organisation fibrilles–fibres–faisceaux du collagène I, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Les fibrilles se forment par polymérisation de phospholipides.",
        "correct": false,
        "explanation": "Elles résultent de l'assemblage de collagènes."
      },
      {
        "content": "Les protomères de collagène I s'assemblent en fibrilles.",
        "correct": true,
        "explanation": "La fibrille est le premier grand niveau supramoléculaire fibrillaire."
      },
      {
        "content": "Des fibres peuvent à leur tour être organisées en faisceaux dans certains tissus.",
        "correct": true,
        "explanation": "Cette organisation est particulièrement visible dans les tissus riches en collagène I."
      },
      {
        "content": "Les fibres de collagène I ne contiennent aucune fibrille.",
        "correct": false,
        "explanation": "Elles sont formées d'assemblages de fibrilles."
      },
      {
        "content": "Les faisceaux sont plus petits que les protomères individuels.",
        "correct": false,
        "explanation": "Ils correspondent à un niveau supérieur d'organisation."
      }
    ],
    "explanation": "Le collagène I s'organise hiérarchiquement : protomères → fibrilles → fibres, puis parfois faisceaux.",
    "requiredSelectionCount": 2
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le collagène de type I, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Ses fibrilles présentent une périodicité D proche de 67 nm.",
        "correct": true,
        "explanation": "Le décalage axial ordonné produit cette striation."
      },
      {
        "content": "Il ne forme jamais de fibrilles.",
        "correct": false,
        "explanation": "Il est le prototype des collagènes fibrillaires."
      },
      {
        "content": "Le collagène I est un collagène fibrillaire.",
        "correct": true,
        "explanation": "Il forme de longues fibrilles striées."
      },
      {
        "content": "Le collagène I est le collagène principal des réseaux de membrane basale.",
        "correct": false,
        "explanation": "Cette fonction caractérise surtout le collagène IV."
      },
      {
        "content": "Il est absent des tendons.",
        "correct": false,
        "explanation": "Les tendons en sont très riches."
      }
    ],
    "explanation": "Le collagène I est le collagène fibrillaire majeur de nombreux tissus conjonctifs comme os, peau et tendons."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur le collagène de type IV, laquelle est correcte ?",
    "choices": [
      {
        "content": "Son domaine collagénique est parfaitement continu sans interruption.",
        "correct": false,
        "explanation": "Il comporte de nombreuses interruptions."
      },
      {
        "content": "Les domaines NC1 et 7S participent à l'assemblage du réseau.",
        "correct": true,
        "explanation": "Ils assurent des interactions terminales entre protomères."
      },
      {
        "content": "Les domaines NC1 et 7S empêchent toute interaction entre protomères.",
        "correct": false,
        "explanation": "Ils contribuent au contraire au réseau."
      },
      {
        "content": "Il n'existe qu'une seule chaîne alpha IV.",
        "correct": false,
        "explanation": "Il en existe six."
      },
      {
        "content": "Le collagène IV est le principal collagène fibrillaire des tendons.",
        "correct": false,
        "explanation": "Il est surtout un collagène en réseau des membranes basales."
      }
    ],
    "explanation": "Le collagène IV forme des réseaux de membranes basales ; six chaînes alpha existent et les domaines NC1/7S contribuent à l'assemblage."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel domaine se situe vers l'extrémité N-terminale du collagène IV ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "7S",
        "domaine 7S"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le collagène IV assemble son réseau notamment par ses domaines terminaux 7S (N-terminal) et NC1 (C-terminal)."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRPL",
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le collagène IV est absent des membranes basales.",
        "correct": false,
        "explanation": "Il en est un constituant essentiel."
      },
      {
        "content": "Le collagène IV est caractéristique des membranes basales.",
        "correct": true,
        "explanation": "Il forme un réseau en association avec d'autres constituants matriciels."
      },
      {
        "content": "Le collagène I possède un long domaine collagénique très régulier.",
        "correct": true,
        "explanation": "Le type IV contient davantage d'interruptions du motif Gly-X-Y."
      },
      {
        "content": "Le collagène I est exclusivement localisé aux membranes basales.",
        "correct": false,
        "explanation": "Cette localisation caractérise surtout le type IV."
      },
      {
        "content": "Le collagène I est abondant dans les tendons ; le collagène IV dans les membranes basales.",
        "correct": true,
        "explanation": "La localisation reflète leur organisation."
      },
      {
        "content": "Le collagène I est dépourvu de triple hélice.",
        "correct": false,
        "explanation": "La triple hélice est une caractéristique majeure."
      },
      {
        "content": "Le collagène IV est exclusivement intracellulaire.",
        "correct": false,
        "explanation": "C'est une protéine de matrice extracellulaire."
      },
      {
        "content": "Le collagène IV est notamment important dans les membranes basales rénales et pulmonaires.",
        "correct": true,
        "explanation": "Ces tissus contiennent des réseaux spécialisés de collagène IV."
      },
      {
        "content": "Le collagène I est fibrillaire tandis que le collagène IV forme un réseau.",
        "correct": true,
        "explanation": "Leurs architectures supramoléculaires répondent à des fonctions distinctes."
      },
      {
        "content": "Le collagène IV est le principal collagène fibrillaire des tendons.",
        "correct": false,
        "explanation": "Cette fonction revient au type I."
      }
    ],
    "requiredSelectionCount": 5,
    "explanation": "Collagène I et IV partagent la triple hélice mais divergent fortement : fibrilles striées pour I, réseau des membranes basales pour IV. Le collagène I domine dans les tissus conjonctifs fibrillaires ; le collagène IV forme le réseau des membranes basales."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la localisation des collagènes I et IV, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Le collagène I est également majeur dans l'os et la peau.",
        "correct": true,
        "explanation": "Il forme des fibrilles résistantes."
      },
      {
        "content": "Le collagène I est absent de l'os.",
        "correct": false,
        "explanation": "Il y est très abondant."
      },
      {
        "content": "Le collagène I est particulièrement abondant dans les tendons.",
        "correct": true,
        "explanation": "Il contribue à leur résistance à la traction."
      },
      {
        "content": "Le collagène IV est le collagène principal des fibres tendineuses.",
        "correct": false,
        "explanation": "Le tendon est surtout riche en collagène I."
      },
      {
        "content": "Le collagène IV est caractéristique des membranes basales.",
        "correct": true,
        "explanation": "Il forme un réseau en association avec d'autres constituants matriciels."
      }
    ],
    "explanation": "Le collagène I domine dans les tissus conjonctifs fibrillaires ; le collagène IV forme le réseau des membranes basales."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la périodicité des fibrilles de collagène I ?",
    "choices": [
      {
        "content": "La valeur de 67 nm correspond à une période répétitive de la fibrille, pas à la longueur totale du protomère.",
        "correct": true,
        "explanation": "Le protomère mesure environ 300 nm."
      },
      {
        "content": "La périodicité D est d'environ 67 nm.",
        "correct": true,
        "explanation": "Elle est visible comme une striation périodique en microscopie électronique."
      },
      {
        "content": "L'organisation ordonnée des protomères contribue aux propriétés mécaniques des fibrilles.",
        "correct": true,
        "explanation": "L'architecture supramoléculaire est essentielle à la résistance."
      },
      {
        "content": "La périodicité D est de 67 micromètres.",
        "correct": false,
        "explanation": "Elle est d'environ 67 nanomètres."
      },
      {
        "content": "Les molécules de collagène I sont décalées axialement dans les fibrilles.",
        "correct": true,
        "explanation": "Cet arrangement produit des zones de recouvrement et de lacune."
      }
    ],
    "explanation": "Le décalage axial des molécules de collagène I crée la striation caractéristique de période D proche de 67 nm."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel métal est un cofacteur de la lysyl-oxydase ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cuivre",
        "Cu2+",
        "Cu²+"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La lysyl-oxydase, enzyme extracellulaire dépendante du cuivre, transforme certaines lysines/hydroxylysines et initie des liaisons croisées qui renforcent les fibrilles."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de l'organisation fibrilles–fibres–faisceaux du collagène I, quelle proposition doit être retenue ?",
    "choices": [
      {
        "content": "Les faisceaux sont plus petits que les protomères individuels.",
        "correct": false,
        "explanation": "Ils correspondent à un niveau supérieur d'organisation."
      },
      {
        "content": "Les fibres de collagène I ne contiennent aucune fibrille.",
        "correct": false,
        "explanation": "Elles sont formées d'assemblages de fibrilles."
      },
      {
        "content": "Les fibrilles se forment par polymérisation de phospholipides.",
        "correct": false,
        "explanation": "Elles résultent de l'assemblage de collagènes."
      },
      {
        "content": "La hiérarchie supramoléculaire n'influence jamais les propriétés mécaniques.",
        "correct": false,
        "explanation": "Elle est déterminante."
      },
      {
        "content": "La hiérarchie d'assemblage contribue à la résistance mécanique du tissu.",
        "correct": true,
        "explanation": "La propriété finale dépend de l'organisation à plusieurs échelles."
      }
    ],
    "explanation": "Le collagène I s'organise hiérarchiquement : protomères → fibrilles → fibres, puis parfois faisceaux."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement le collagène de type I ?",
    "choices": [
      {
        "content": "Le collagène I est le collagène principal des réseaux de membrane basale.",
        "correct": false,
        "explanation": "Cette fonction caractérise surtout le collagène IV."
      },
      {
        "content": "Le collagène I est un collagène fibrillaire.",
        "correct": true,
        "explanation": "Il forme de longues fibrilles striées."
      },
      {
        "content": "Il est constitué exclusivement de six chaînes alpha différentes.",
        "correct": false,
        "explanation": "Un protomère contient trois chaînes."
      },
      {
        "content": "Ses fibrilles présentent une périodicité D proche de 67 nm.",
        "correct": true,
        "explanation": "Le décalage axial ordonné produit cette striation."
      },
      {
        "content": "Il est absent des tendons.",
        "correct": false,
        "explanation": "Les tendons en sont très riches."
      }
    ],
    "explanation": "Le collagène I est le collagène fibrillaire majeur de nombreux tissus conjonctifs comme os, peau et tendons."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de chaînes alpha de collagène IV différentes sont connues chez l'humain ?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "Le collagène IV forme des réseaux de membranes basales ; six chaînes alpha existent et les domaines NC1/7S contribuent à l'assemblage."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Concernant la périodicité des fibrilles de collagène I, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La périodicité D est de 67 micromètres.",
        "correct": false,
        "explanation": "Elle est d'environ 67 nanomètres."
      },
      {
        "content": "Le protomère entier de collagène I mesure seulement 67 nm.",
        "correct": false,
        "explanation": "La période D est ~67 nm, tandis que le protomère est ~300 nm."
      },
      {
        "content": "Les molécules de collagène I sont décalées axialement dans les fibrilles.",
        "correct": true,
        "explanation": "Cet arrangement produit des zones de recouvrement et de lacune."
      },
      {
        "content": "L'organisation ordonnée des protomères contribue aux propriétés mécaniques des fibrilles.",
        "correct": true,
        "explanation": "L'architecture supramoléculaire est essentielle à la résistance."
      },
      {
        "content": "La striation des fibrilles est due à des noyaux cellulaires enchâssés.",
        "correct": false,
        "explanation": "Elle provient de l'organisation périodique des molécules de collagène."
      }
    ],
    "explanation": "Le décalage axial des molécules de collagène I crée la striation caractéristique de période D proche de 67 nm.",
    "requiredSelectionCount": 2
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la comparaison des collagènes I et IV, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Le collagène I est fibrillaire tandis que le collagène IV forme un réseau.",
        "correct": true,
        "explanation": "Leurs architectures supramoléculaires répondent à des fonctions distinctes."
      },
      {
        "content": "Les deux types partagent le principe d'une triple hélice collagénique.",
        "correct": true,
        "explanation": "Ils appartiennent à la même superfamille malgré leurs différences."
      },
      {
        "content": "Le collagène IV est le principal collagène fibrillaire des tendons.",
        "correct": false,
        "explanation": "Cette fonction revient au type I."
      },
      {
        "content": "Le collagène I est abondant dans les tendons ; le collagène IV dans les membranes basales.",
        "correct": true,
        "explanation": "La localisation reflète leur organisation."
      },
      {
        "content": "Le collagène I est dépourvu de triple hélice.",
        "correct": false,
        "explanation": "La triple hélice est une caractéristique majeure."
      }
    ],
    "explanation": "Collagène I et IV partagent la triple hélice mais divergent fortement : fibrilles striées pour I, réseau des membranes basales pour IV."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la localisation des collagènes I et IV ?",
    "choices": [
      {
        "content": "Le collagène IV est exclusivement intracellulaire.",
        "correct": false,
        "explanation": "C'est une protéine de matrice extracellulaire."
      },
      {
        "content": "Le collagène I est également majeur dans l'os et la peau.",
        "correct": true,
        "explanation": "Il forme des fibrilles résistantes."
      },
      {
        "content": "Le collagène I est absent de l'os.",
        "correct": false,
        "explanation": "Il y est très abondant."
      },
      {
        "content": "Le collagène I est exclusivement localisé aux membranes basales.",
        "correct": false,
        "explanation": "Cette localisation caractérise surtout le type IV."
      },
      {
        "content": "Le collagène IV est le collagène principal des fibres tendineuses.",
        "correct": false,
        "explanation": "Le tendon est surtout riche en collagène I."
      }
    ],
    "explanation": "Le collagène I domine dans les tissus conjonctifs fibrillaires ; le collagène IV forme le réseau des membranes basales."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la triple hélice du collagène, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La 4-hydroxyproline stabilise fortement la triple hélice, notamment par des effets conformationnels et d'hydratation.",
        "correct": true,
        "explanation": "Il est trop simpliste d'attribuer cette stabilité uniquement à des liaisons H directes de son OH."
      },
      {
        "content": "Les trois chaînes s'enroulent ensemble en une superhélice droite.",
        "correct": true,
        "explanation": "La triple hélice a une chiralité opposée à celle des chaînes individuelles."
      },
      {
        "content": "Chaque chaîne adopte une hélice gauche de type polyproline II-like.",
        "correct": true,
        "explanation": "Cette conformation n'est pas une hélice alpha classique."
      },
      {
        "content": "La superhélice collagénique finale est gauche.",
        "correct": false,
        "explanation": "Elle est droite."
      },
      {
        "content": "Les liaisons hydrogène interchaînes impliquent principalement le NH de glycine et le carbonyle d'une chaîne voisine.",
        "correct": true,
        "explanation": "Ces liaisons du squelette contribuent directement à la cohésion."
      }
    ],
    "explanation": "Chaque chaîne collagénique est une hélice gauche polyproline-II-like ; trois chaînes forment une superhélice droite stabilisée par des liaisons H du squelette et par la 4-hydroxyproline."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nom donne-t-on au protomère triple hélicoïdal qui s'assemble en fibrilles ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "tropocollagène",
        "tropocollagene"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le protomère du collagène I est habituellement [α1(I)]2α2(I), une triple hélice d'environ 300 nm qui s'assemble en fibrilles."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Il est constitué exclusivement de six chaînes alpha différentes.",
        "correct": false,
        "explanation": "Un protomère contient trois chaînes."
      },
      {
        "content": "L'organisation ordonnée des protomères contribue aux propriétés mécaniques des fibrilles.",
        "correct": true,
        "explanation": "L'architecture supramoléculaire est essentielle à la résistance."
      },
      {
        "content": "Ses fibrilles présentent une périodicité D proche de 67 nm.",
        "correct": true,
        "explanation": "Le décalage axial ordonné produit cette striation."
      },
      {
        "content": "Le collagène I est un collagène fibrillaire.",
        "correct": true,
        "explanation": "Il forme de longues fibrilles striées."
      },
      {
        "content": "Le protomère entier de collagène I mesure seulement 67 nm.",
        "correct": false,
        "explanation": "La période D est ~67 nm, tandis que le protomère est ~300 nm."
      },
      {
        "content": "Il est abondant dans l'os, la peau et les tendons.",
        "correct": true,
        "explanation": "Ces tissus nécessitent une forte résistance à la traction."
      },
      {
        "content": "Le collagène I est le collagène principal des réseaux de membrane basale.",
        "correct": false,
        "explanation": "Cette fonction caractérise surtout le collagène IV."
      },
      {
        "content": "La valeur de 67 nm correspond à une période répétitive de la fibrille, pas à la longueur totale du protomère.",
        "correct": true,
        "explanation": "Le protomère mesure environ 300 nm."
      },
      {
        "content": "Il ne forme jamais de fibrilles.",
        "correct": false,
        "explanation": "Il est le prototype des collagènes fibrillaires."
      },
      {
        "content": "Les molécules sont toutes superposées sans aucun décalage axial.",
        "correct": false,
        "explanation": "Le décalage est à l'origine de la striation."
      }
    ],
    "requiredSelectionCount": 5,
    "explanation": "Le décalage axial des molécules de collagène I crée la striation caractéristique de période D proche de 67 nm. Le collagène I est le collagène fibrillaire majeur de nombreux tissus conjonctifs comme os, peau et tendons."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Citez un tissu particulièrement riche en collagène I.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "os",
        "peau",
        "tendon",
        "tendons"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le collagène I est le collagène fibrillaire majeur de nombreux tissus conjonctifs comme os, peau et tendons."
  }
];
