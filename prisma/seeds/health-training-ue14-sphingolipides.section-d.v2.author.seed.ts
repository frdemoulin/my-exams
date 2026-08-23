import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Sphingolipides — Section D — Métabolisme et sphingolipidoses */
export const UE14_BIOCH_CH7_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le métabolisme lysosomal des sphingolipides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les maladies de surcharge peuvent toucher fortement le système nerveux.",
        "correct": true,
        "explanation": "Les sphingolipides y sont abondants."
      },
      {
        "content": "Tous les sphingolipides sont dégradés exclusivement dans le noyau.",
        "correct": false,
        "explanation": "Le lysosome joue un rôle majeur."
      },
      {
        "content": "Une seule enzyme dégrade tous les sphingolipides sans spécificité.",
        "correct": false,
        "explanation": "Les étapes sont spécifiques."
      },
      {
        "content": "Chaque étape peut nécessiter une enzyme spécifique.",
        "correct": true,
        "explanation": "Un déficit bloque la dégradation et entraîne une accumulation."
      },
      {
        "content": "Le catabolisme ne produit jamais de céramide.",
        "correct": false,
        "explanation": "Il converge fréquemment vers lui."
      }
    ],
    "explanation": "Les sphingolipidoses sont des maladies de surcharge lysosomale liées à des défauts enzymatiques spécifiques."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la maladie de Gaucher, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle est due à un déficit en alpha-galactosidase A.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      },
      {
        "content": "Elle est liée à un déficit de l'acide bêta-glucosidase, aussi appelée glucocérébrosidase.",
        "correct": true,
        "explanation": "L'enzyme est codée par GBA1."
      },
      {
        "content": "La maladie est due à l'accumulation de glycogène.",
        "correct": false,
        "explanation": "C'est une sphingolipidose."
      },
      {
        "content": "Le substrat caractéristique est GM2.",
        "correct": false,
        "explanation": "Cela décrit Tay-Sachs."
      },
      {
        "content": "Toutes les formes de Gaucher provoquent obligatoirement une neurodégénérescence infantile.",
        "correct": false,
        "explanation": "Le type 1 n'a pas d'atteinte neurologique primaire."
      }
    ],
    "explanation": "Gaucher associe déficit en glucocérébrosidase et accumulation de glucosylcéramide ; ses manifestations varient selon le type."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle enzyme est déficiente dans la maladie de Fabry ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alpha-galactosidase A",
        "α-galactosidase A",
        "alpha galactosidase A",
        "GLA"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Fabry est une maladie liée à l'X due à un déficit en alpha-galactosidase A, avec accumulation notamment de Gb3."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la maladie de Krabbe, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle est due à un déficit en glucocérébrosidase.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "Elle n'affecte jamais la myéline.",
        "correct": false,
        "explanation": "La démyélinisation est centrale."
      },
      {
        "content": "La maladie provoque une leucodystrophie et une démyélinisation.",
        "correct": true,
        "explanation": "Le système nerveux est particulièrement touché."
      },
      {
        "content": "La psychosine peut s'accumuler fortement.",
        "correct": true,
        "explanation": "Elle est considérée comme un métabolite toxique majeur."
      },
      {
        "content": "Le galactosylcéramide fait partie des substrats de GALC.",
        "correct": true,
        "explanation": "Le bloc catabolique concerne la voie des galactosphingolipides."
      }
    ],
    "explanation": "Krabbe est une leucodystrophie due à un déficit en GALC ; la psychosine est un métabolite toxique clé."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la maladie de Tay-Sachs, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le glucosylcéramide est le principal substrat accumulé.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "Elle est due à un déficit en alpha-galactosidase A.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      },
      {
        "content": "L'hexosaminidase A n'intervient pas dans le catabolisme de GM2.",
        "correct": false,
        "explanation": "Elle y est essentielle."
      },
      {
        "content": "Tay-Sachs est une maladie de démyélinisation inflammatoire auto-immune.",
        "correct": false,
        "explanation": "Cela décrit plutôt la sclérose en plaques."
      },
      {
        "content": "Elle est due à un déficit en bêta-hexosaminidase A.",
        "correct": true,
        "explanation": "Le gène HEXA code la sous-unité alpha de l'enzyme."
      }
    ],
    "explanation": "Tay-Sachs associe déficit en hexosaminidase A et accumulation neuronale de GM2."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant les associations enzyme-substrat-maladie, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Krabbe : GALC — psychosine/galactosylcéramide.",
        "correct": true,
        "explanation": "La psychosine est particulièrement toxique."
      },
      {
        "content": "Fabry : glucocérébrosidase — glucosylcéramide.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "Gaucher : glucocérébrosidase — glucosylcéramide.",
        "correct": true,
        "explanation": "Le défaut touche la dégradation du glucosylcéramide."
      },
      {
        "content": "Tay-Sachs : GALC — psychosine.",
        "correct": false,
        "explanation": "Cela décrit Krabbe."
      },
      {
        "content": "Krabbe : alpha-galactosidase A — Gb3.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      }
    ],
    "explanation": "Les couples enzyme-substrat-maladie sont un axe majeur de mémorisation des sphingolipidoses.",
    "requiredSelectionCount": 2
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la distinction sphingolipidose et démyélinisation inflammatoire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La sclérose en plaques est une maladie inflammatoire démyélinisante, pas une sphingolipidose classique.",
        "correct": true,
        "explanation": "Les mécanismes sont différents."
      },
      {
        "content": "Tay-Sachs est une gangliosidose GM2 lysosomale.",
        "correct": true,
        "explanation": "Elle résulte d'un déficit en hexosaminidase A."
      },
      {
        "content": "Des symptômes neurologiques peuvent donc avoir des mécanismes biochimiques très différents.",
        "correct": true,
        "explanation": "Il faut distinguer surcharge lysosomale et auto-immunité."
      },
      {
        "content": "La sclérose en plaques est une maladie de surcharge en glucosylcéramide.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "Krabbe est une sphingolipidose lysosomale.",
        "correct": true,
        "explanation": "Elle résulte d'un déficit enzymatique GALC."
      }
    ],
    "explanation": "Les sphingolipidoses sont des défauts de catabolisme lysosomal ; la sclérose en plaques est d'une autre nature physiopathologique."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel organite joue un rôle central dans le catabolisme des glycosphingolipides complexes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lysosome",
        "lysosomes",
        "le lysosome"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les sphingolipidoses sont des maladies de surcharge lysosomale liées à des défauts enzymatiques spécifiques."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant la maladie de Gaucher ?",
    "choices": [
      {
        "content": "Le substrat caractéristique est GM2.",
        "correct": false,
        "explanation": "Cela décrit Tay-Sachs."
      },
      {
        "content": "Elle est due à un déficit en alpha-galactosidase A.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      },
      {
        "content": "Certaines formes comportent une atteinte neurologique, mais le type 1 classique n'a pas d'atteinte neurologique primaire.",
        "correct": true,
        "explanation": "La maladie de Gaucher est hétérogène."
      },
      {
        "content": "La maladie est due à l'accumulation de glycogène.",
        "correct": false,
        "explanation": "C'est une sphingolipidose."
      },
      {
        "content": "Toutes les formes de Gaucher provoquent obligatoirement une neurodégénérescence infantile.",
        "correct": false,
        "explanation": "Le type 1 n'a pas d'atteinte neurologique primaire."
      }
    ],
    "explanation": "Gaucher associe déficit en glucocérébrosidase et accumulation de glucosylcéramide ; ses manifestations varient selon le type."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la maladie de Fabry, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La transmission est liée à l'X.",
        "correct": true,
        "explanation": "Les femmes hétérozygotes peuvent aussi être symptomatiques."
      },
      {
        "content": "Elle est due à un déficit en hexosaminidase A.",
        "correct": false,
        "explanation": "Cela décrit Tay-Sachs."
      },
      {
        "content": "Elle entraîne principalement une accumulation de GM2.",
        "correct": false,
        "explanation": "Cela décrit Tay-Sachs."
      },
      {
        "content": "Elle est toujours strictement asymptomatique chez les femmes.",
        "correct": false,
        "explanation": "L'expression clinique est variable."
      },
      {
        "content": "Le globotriaosylcéramide Gb3 s'accumule.",
        "correct": true,
        "explanation": "Le lyso-Gb3 est également un biomarqueur important."
      }
    ],
    "explanation": "Fabry est une maladie liée à l'X due à un déficit en alpha-galactosidase A, avec accumulation notamment de Gb3."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le métabolisme lysosomal des sphingolipides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le catabolisme des sphingolipides complexes est largement lysosomal.",
        "correct": true,
        "explanation": "Des hydrolases retirent successivement les groupes polaires."
      },
      {
        "content": "Une seule enzyme dégrade tous les sphingolipides sans spécificité.",
        "correct": false,
        "explanation": "Les étapes sont spécifiques."
      },
      {
        "content": "Un déficit enzymatique accélère toujours la dégradation du substrat.",
        "correct": false,
        "explanation": "Il l'accumule."
      },
      {
        "content": "Chaque étape peut nécessiter une enzyme spécifique.",
        "correct": true,
        "explanation": "Un déficit bloque la dégradation et entraîne une accumulation."
      },
      {
        "content": "Le catabolisme ne produit jamais de céramide.",
        "correct": false,
        "explanation": "Il converge fréquemment vers lui."
      }
    ],
    "explanation": "Les sphingolipidoses sont des maladies de surcharge lysosomale liées à des défauts enzymatiques spécifiques."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle enzyme est déficiente dans la maladie de Gaucher ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glucocérébrosidase",
        "glucocerebrosidase",
        "acide bêta-glucosidase",
        "beta-glucosidase acide",
        "GBA1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Gaucher associe déficit en glucocérébrosidase et accumulation de glucosylcéramide ; ses manifestations varient selon le type."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle enzyme lysosomale est déficiente dans la maladie de Gaucher ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glucocérébrosidase",
        "glucocerebrosidase",
        "acide bêta-glucosidase",
        "beta-glucosidase acide",
        "GBA1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La maladie de Gaucher résulte d'un déficit en glucocérébrosidase avec accumulation de glucosylcéramide."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la maladie de Krabbe, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle est due à un déficit en galactocérébrosidase GALC.",
        "correct": true,
        "explanation": "Cette enzyme dégrade notamment des galactosphingolipides."
      },
      {
        "content": "Elle est due à un déficit en glucocérébrosidase.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "Le galactosylcéramide fait partie des substrats de GALC.",
        "correct": true,
        "explanation": "Le bloc catabolique concerne la voie des galactosphingolipides."
      },
      {
        "content": "La psychosine peut s'accumuler fortement.",
        "correct": true,
        "explanation": "Elle est considérée comme un métabolite toxique majeur."
      },
      {
        "content": "Elle est principalement une néphropathie liée à Gb3.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      }
    ],
    "explanation": "Krabbe est une leucodystrophie due à un déficit en GALC ; la psychosine est un métabolite toxique clé."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la maladie de Tay-Sachs, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "L'activité de l'hexosaminidase B peut rester normale dans Tay-Sachs.",
        "correct": true,
        "explanation": "Cela aide à distinguer Tay-Sachs de Sandhoff."
      },
      {
        "content": "Le glucosylcéramide est le principal substrat accumulé.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "La forme infantile classique provoque une neurodégénérescence progressive.",
        "correct": true,
        "explanation": "Les neurones sont particulièrement touchés."
      },
      {
        "content": "L'hexosaminidase A n'intervient pas dans le catabolisme de GM2.",
        "correct": false,
        "explanation": "Elle y est essentielle."
      },
      {
        "content": "Tay-Sachs est une maladie de démyélinisation inflammatoire auto-immune.",
        "correct": false,
        "explanation": "Cela décrit plutôt la sclérose en plaques."
      }
    ],
    "explanation": "Tay-Sachs associe déficit en hexosaminidase A et accumulation neuronale de GM2.",
    "requiredSelectionCount": 2
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les associations enzyme-substrat-maladie ?",
    "choices": [
      {
        "content": "Fabry : alpha-galactosidase A — Gb3.",
        "correct": true,
        "explanation": "Le globotriaosylcéramide s'accumule."
      },
      {
        "content": "Krabbe : GALC — psychosine/galactosylcéramide.",
        "correct": true,
        "explanation": "La psychosine est particulièrement toxique."
      },
      {
        "content": "Gaucher : glucocérébrosidase — glucosylcéramide.",
        "correct": true,
        "explanation": "Le défaut touche la dégradation du glucosylcéramide."
      },
      {
        "content": "Gaucher : hexosaminidase A — GM2.",
        "correct": false,
        "explanation": "Cela décrit Tay-Sachs."
      },
      {
        "content": "Tay-Sachs : hexosaminidase A — GM2.",
        "correct": true,
        "explanation": "Le ganglioside GM2 s'accumule."
      }
    ],
    "explanation": "Les couples enzyme-substrat-maladie sont un axe majeur de mémorisation des sphingolipidoses."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle enzyme lysosomale est déficiente dans la maladie de Fabry ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alpha-galactosidase A",
        "α-galactosidase A",
        "GLA"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Fabry est liée à un déficit en alpha-galactosidase A et à l'accumulation notamment de Gb3."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant le métabolisme lysosomal des sphingolipides, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le catabolisme des sphingolipides complexes est largement lysosomal.",
        "correct": true,
        "explanation": "Des hydrolases retirent successivement les groupes polaires."
      },
      {
        "content": "Une seule enzyme dégrade tous les sphingolipides sans spécificité.",
        "correct": false,
        "explanation": "Les étapes sont spécifiques."
      },
      {
        "content": "Tous les sphingolipides sont dégradés exclusivement dans le noyau.",
        "correct": false,
        "explanation": "Le lysosome joue un rôle majeur."
      },
      {
        "content": "Un déficit enzymatique accélère toujours la dégradation du substrat.",
        "correct": false,
        "explanation": "Il l'accumule."
      },
      {
        "content": "Le catabolisme ne produit jamais de céramide.",
        "correct": false,
        "explanation": "Il converge fréquemment vers lui."
      }
    ],
    "explanation": "Les sphingolipidoses sont des maladies de surcharge lysosomale liées à des défauts enzymatiques spécifiques."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la maladie de Gaucher ?",
    "choices": [
      {
        "content": "Elle est due à un déficit en alpha-galactosidase A.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      },
      {
        "content": "Les atteintes hépatiques, spléniques, hématologiques et osseuses sont fréquentes.",
        "correct": true,
        "explanation": "Le phénotype varie selon le type."
      },
      {
        "content": "Le glucosylcéramide s'accumule.",
        "correct": true,
        "explanation": "La glucosylsphingosine peut également augmenter."
      },
      {
        "content": "Toutes les formes de Gaucher provoquent obligatoirement une neurodégénérescence infantile.",
        "correct": false,
        "explanation": "Le type 1 n'a pas d'atteinte neurologique primaire."
      },
      {
        "content": "La maladie est due à l'accumulation de glycogène.",
        "correct": false,
        "explanation": "C'est une sphingolipidose."
      }
    ],
    "explanation": "Gaucher associe déficit en glucocérébrosidase et accumulation de glucosylcéramide ; ses manifestations varient selon le type."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "C'est une glycogénose.",
        "correct": false,
        "explanation": "C'est une sphingolipidose."
      },
      {
        "content": "La transmission est liée à l'X.",
        "correct": true,
        "explanation": "Les femmes hétérozygotes peuvent aussi être symptomatiques."
      },
      {
        "content": "Gaucher : glucocérébrosidase — glucosylcéramide.",
        "correct": true,
        "explanation": "Le défaut touche la dégradation du glucosylcéramide."
      },
      {
        "content": "Elle est due à un déficit en alpha-galactosidase A.",
        "correct": true,
        "explanation": "Le gène GLA est porté par le chromosome X."
      },
      {
        "content": "Le globotriaosylcéramide Gb3 s'accumule.",
        "correct": true,
        "explanation": "Le lyso-Gb3 est également un biomarqueur important."
      },
      {
        "content": "Elle entraîne principalement une accumulation de GM2.",
        "correct": false,
        "explanation": "Cela décrit Tay-Sachs."
      },
      {
        "content": "Fabry : glucocérébrosidase — glucosylcéramide.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "Krabbe : alpha-galactosidase A — Gb3.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      },
      {
        "content": "Elle est toujours strictement asymptomatique chez les femmes.",
        "correct": false,
        "explanation": "L'expression clinique est variable."
      },
      {
        "content": "Le rein, le cœur, la peau et le système nerveux peuvent être atteints.",
        "correct": true,
        "explanation": "C'est une maladie multisystémique."
      }
    ],
    "explanation": "Fabry est une maladie liée à l'X due à un déficit en alpha-galactosidase A, avec accumulation notamment de Gb3. Les couples enzyme-substrat-maladie sont un axe majeur de mémorisation des sphingolipidoses."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel métabolite lysosphingolipidique toxique est particulièrement associé à la maladie de Krabbe ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "psychosine",
        "galactosylsphingosine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La psychosine s'accumule lorsque l'activité GALC est insuffisante et contribue à la démyélinisation."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle enzyme est déficiente dans la maladie de Tay-Sachs ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "bêta-hexosaminidase A",
        "beta-hexosaminidase A",
        "hexosaminidase A",
        "Hex A",
        "HEXA"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Tay-Sachs associe déficit en hexosaminidase A et accumulation neuronale de GM2."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce schéma simplifié du catabolisme, cliquez sur l'étape enzymatique qui transforme la sphingomyéline en céramide.",
    "image": {
      "src": "/images/training/ue14/biochimie/sphingolipides/catabolisme-sphingomyeline-qzone.svg",
      "alt": "Schéma Sphingomyéline vers Céramide vers Sphingosine avec les enzymes entre les étapes",
      "width": 1000,
      "height": 500
    },
    "expectedZones": [
      {
        "id": "sphingomyelinase",
        "label": "Sphingomyélinase",
        "x": 0.385,
        "y": 0.3,
        "tolerance": 0.09
      }
    ],
    "explanation": "La sphingomyélinase hydrolyse la sphingomyéline en céramide ; la céramidase agit ensuite sur le céramide."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle enzyme est déficiente dans la maladie de Gaucher ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glucocérébrosidase",
        "glucocerebrosidase",
        "acide bêta-glucosidase",
        "beta-glucosidase acide",
        "GBA1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Gaucher associe déficit en glucocérébrosidase et accumulation de glucosylcéramide ; ses manifestations varient selon le type."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant la maladie de Fabry, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "C'est une glycogénose.",
        "correct": false,
        "explanation": "C'est une sphingolipidose."
      },
      {
        "content": "Elle est toujours strictement asymptomatique chez les femmes.",
        "correct": false,
        "explanation": "L'expression clinique est variable."
      },
      {
        "content": "La transmission est liée à l'X.",
        "correct": true,
        "explanation": "Les femmes hétérozygotes peuvent aussi être symptomatiques."
      },
      {
        "content": "Le rein, le cœur, la peau et le système nerveux peuvent être atteints.",
        "correct": true,
        "explanation": "C'est une maladie multisystémique."
      },
      {
        "content": "Elle est due à un déficit en hexosaminidase A.",
        "correct": false,
        "explanation": "Cela décrit Tay-Sachs."
      }
    ],
    "explanation": "Fabry est une maladie liée à l'X due à un déficit en alpha-galactosidase A, avec accumulation notamment de Gb3.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle maladie d'accumulation est associée au ganglioside GM2 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Tay-Sachs",
        "maladie de Tay-Sachs",
        "Tay Sachs"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La maladie de Tay-Sachs est liée à un déficit en bêta-hexosaminidase A et à l'accumulation de GM2."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la maladie de Tay-Sachs, laquelle est correcte ?",
    "choices": [
      {
        "content": "Tay-Sachs est une maladie de démyélinisation inflammatoire auto-immune.",
        "correct": false,
        "explanation": "Cela décrit plutôt la sclérose en plaques."
      },
      {
        "content": "Elle est due à un déficit en alpha-galactosidase A.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      },
      {
        "content": "La forme infantile classique provoque une neurodégénérescence progressive.",
        "correct": true,
        "explanation": "Les neurones sont particulièrement touchés."
      },
      {
        "content": "Le glucosylcéramide est le principal substrat accumulé.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "L'hexosaminidase A n'intervient pas dans le catabolisme de GM2.",
        "correct": false,
        "explanation": "Elle y est essentielle."
      }
    ],
    "explanation": "Tay-Sachs associe déficit en hexosaminidase A et accumulation neuronale de GM2."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les associations enzyme-substrat-maladie ?",
    "choices": [
      {
        "content": "Fabry : alpha-galactosidase A — Gb3.",
        "correct": true,
        "explanation": "Le globotriaosylcéramide s'accumule."
      },
      {
        "content": "Tay-Sachs : GALC — psychosine.",
        "correct": false,
        "explanation": "Cela décrit Krabbe."
      },
      {
        "content": "Krabbe : alpha-galactosidase A — Gb3.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      },
      {
        "content": "Krabbe : GALC — psychosine/galactosylcéramide.",
        "correct": true,
        "explanation": "La psychosine est particulièrement toxique."
      },
      {
        "content": "Gaucher : glucocérébrosidase — glucosylcéramide.",
        "correct": true,
        "explanation": "Le défaut touche la dégradation du glucosylcéramide."
      }
    ],
    "explanation": "Les couples enzyme-substrat-maladie sont un axe majeur de mémorisation des sphingolipidoses."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel glycosphingolipide s'accumule principalement dans la maladie de Fabry ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "globotriaosylcéramide",
        "Gb3",
        "GL-3",
        "ceramide trihexoside",
        "trihexosylcéramide"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Fabry entraîne l'accumulation lysosomale de globotriaosylcéramide Gb3 et de dérivés tels que lyso-Gb3."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Les maladies de surcharge peuvent toucher fortement le système nerveux.",
        "correct": true,
        "explanation": "Les sphingolipides y sont abondants."
      },
      {
        "content": "La maladie provoque une leucodystrophie et une démyélinisation.",
        "correct": true,
        "explanation": "Le système nerveux est particulièrement touché."
      },
      {
        "content": "Elle est due à un déficit en glucocérébrosidase.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "Tous les sphingolipides sont dégradés exclusivement dans le noyau.",
        "correct": false,
        "explanation": "Le lysosome joue un rôle majeur."
      },
      {
        "content": "Le catabolisme des sphingolipides complexes est largement lysosomal.",
        "correct": true,
        "explanation": "Des hydrolases retirent successivement les groupes polaires."
      },
      {
        "content": "Elle n'affecte jamais la myéline.",
        "correct": false,
        "explanation": "La démyélinisation est centrale."
      },
      {
        "content": "Une seule enzyme dégrade tous les sphingolipides sans spécificité.",
        "correct": false,
        "explanation": "Les étapes sont spécifiques."
      },
      {
        "content": "Chaque étape peut nécessiter une enzyme spécifique.",
        "correct": true,
        "explanation": "Un déficit bloque la dégradation et entraîne une accumulation."
      },
      {
        "content": "Le galactosylcéramide fait partie des substrats de GALC.",
        "correct": true,
        "explanation": "Le bloc catabolique concerne la voie des galactosphingolipides."
      },
      {
        "content": "GM2 est le substrat emblématique de Krabbe.",
        "correct": false,
        "explanation": "Cela décrit Tay-Sachs."
      }
    ],
    "explanation": "Les sphingolipidoses sont des maladies de surcharge lysosomale liées à des défauts enzymatiques spécifiques. Krabbe est une leucodystrophie due à un déficit en GALC ; la psychosine est un métabolite toxique clé."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la maladie de Gaucher ?",
    "choices": [
      {
        "content": "La maladie est due à l'accumulation de glycogène.",
        "correct": false,
        "explanation": "C'est une sphingolipidose."
      },
      {
        "content": "Les atteintes hépatiques, spléniques, hématologiques et osseuses sont fréquentes.",
        "correct": true,
        "explanation": "Le phénotype varie selon le type."
      },
      {
        "content": "Elle est liée à un déficit de l'acide bêta-glucosidase, aussi appelée glucocérébrosidase.",
        "correct": true,
        "explanation": "L'enzyme est codée par GBA1."
      },
      {
        "content": "Certaines formes comportent une atteinte neurologique, mais le type 1 classique n'a pas d'atteinte neurologique primaire.",
        "correct": true,
        "explanation": "La maladie de Gaucher est hétérogène."
      },
      {
        "content": "Le glucosylcéramide s'accumule.",
        "correct": true,
        "explanation": "La glucosylsphingosine peut également augmenter."
      }
    ],
    "explanation": "Gaucher associe déficit en glucocérébrosidase et accumulation de glucosylcéramide ; ses manifestations varient selon le type."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle enzyme est déficiente dans la maladie de Fabry ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alpha-galactosidase A",
        "α-galactosidase A",
        "alpha galactosidase A",
        "GLA"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Fabry est une maladie liée à l'X due à un déficit en alpha-galactosidase A, avec accumulation notamment de Gb3."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant la maladie de Krabbe, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Elle est due à un déficit en glucocérébrosidase.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "GM2 est le substrat emblématique de Krabbe.",
        "correct": false,
        "explanation": "Cela décrit Tay-Sachs."
      },
      {
        "content": "La maladie provoque une leucodystrophie et une démyélinisation.",
        "correct": true,
        "explanation": "Le système nerveux est particulièrement touché."
      },
      {
        "content": "Elle n'affecte jamais la myéline.",
        "correct": false,
        "explanation": "La démyélinisation est centrale."
      },
      {
        "content": "Elle est due à un déficit en galactocérébrosidase GALC.",
        "correct": true,
        "explanation": "Cette enzyme dégrade notamment des galactosphingolipides."
      }
    ],
    "explanation": "Krabbe est une leucodystrophie due à un déficit en GALC ; la psychosine est un métabolite toxique clé.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la maladie de Tay-Sachs ?",
    "choices": [
      {
        "content": "Elle est due à un déficit en alpha-galactosidase A.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      },
      {
        "content": "La forme infantile classique provoque une neurodégénérescence progressive.",
        "correct": true,
        "explanation": "Les neurones sont particulièrement touchés."
      },
      {
        "content": "Tay-Sachs est une maladie de démyélinisation inflammatoire auto-immune.",
        "correct": false,
        "explanation": "Cela décrit plutôt la sclérose en plaques."
      },
      {
        "content": "Le glucosylcéramide est le principal substrat accumulé.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "Elle est due à un déficit en bêta-hexosaminidase A.",
        "correct": true,
        "explanation": "Le gène HEXA code la sous-unité alpha de l'enzyme."
      }
    ],
    "explanation": "Tay-Sachs associe déficit en hexosaminidase A et accumulation neuronale de GM2."
  }
];
