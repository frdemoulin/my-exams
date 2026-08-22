import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.3 – Section B – Alcènes : structure, nomenclature et préparation
 */

export const UE14_CH7_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 21,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des alcènes acycliques comportant une seule double liaison, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un alcène acyclique comportant une seule double liaison suit $\\ce{C_nH_{2n+2}}$.",
        "correct": false,
        "explanation": "Il suit $\\ce{C_nH_{2n}}$."
      },
      {
        "content": "Leur formule générale est $\\ce{C_nH_{2n}}$.",
        "correct": true,
        "explanation": "C'est la formule donnée dans le modèle étudié."
      },
      {
        "content": "Ils comportent une liaison $\\ce{C=C}$.",
        "correct": true,
        "explanation": "C'est leur motif caractéristique."
      },
      {
        "content": "Ils sont tous saturés.",
        "correct": false,
        "explanation": "Ils sont insaturés."
      },
      {
        "content": "Un alcène acyclique comportant une seule double liaison suit $\\ce{C_nH_{2n-2}}$.",
        "correct": false,
        "explanation": "Avec une seule double liaison et sans cycle, la formule générale est $\\ce{C_nH_{2n}}$."
      }
    ],
    "explanation": "Un alcène mono-insaturé acyclique possède une double liaison et suit $\\ce{C_nH_{2n}}$."
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle est la formule brute de l'hexène acyclique comportant une seule double liaison ?",
    "choices": [
      {
        "content": "$\\ce{C6H12}$",
        "correct": true,
        "explanation": "Pour n=6, H=2n=12."
      },
      {
        "content": "$\\ce{C6H16}$.",
        "correct": false,
        "explanation": "Un hexène acyclique monounsaturé a pour formule $\\ce{C6H12}$."
      },
      {
        "content": "$\\ce{C6H14}$",
        "correct": false,
        "explanation": "Hexane."
      },
      {
        "content": "$\\ce{C6H10}$",
        "correct": false,
        "explanation": "Alcyne à une triple liaison."
      },
      {
        "content": "$\\ce{C5H10}$",
        "correct": false,
        "explanation": "Pentène."
      }
    ],
    "explanation": "Un hexène mono-insaturé acyclique répond à la formule $\\ce{C6H12}$."
  },
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la nomenclature élémentaire des alcènes :",
    "choices": [
      {
        "content": "Propène possède 3 carbones.",
        "correct": true,
        "explanation": "Prop- = 3."
      },
      {
        "content": "Butène possède 4 carbones.",
        "correct": true,
        "explanation": "But- = 4."
      },
      {
        "content": "Le suffixe -ène signale la présence d'une double liaison.",
        "correct": true,
        "explanation": "C'est le suffixe de la famille."
      },
      {
        "content": "Le pentène comporte quatre atomes de carbone.",
        "correct": false,
        "explanation": "Le préfixe pent- correspond à cinq carbones."
      },
      {
        "content": "Éthène possède 2 carbones.",
        "correct": true,
        "explanation": "Éth- = 2."
      }
    ],
    "explanation": "La racine indique le nombre de carbones et le suffixe -ène la double liaison."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des diènes et triènes :",
    "choices": [
      {
        "content": "Un triène possède une double liaison de plus qu’un diène.",
        "correct": true,
        "explanation": "Un diène comporte deux doubles liaisons et un triène en comporte trois."
      },
      {
        "content": "Un diène comporte deux doubles liaisons.",
        "correct": true,
        "explanation": "Définition donnée."
      },
      {
        "content": "Un triène comporte trois doubles liaisons.",
        "correct": true,
        "explanation": "Définition donnée."
      },
      {
        "content": "Le préfixe di- ou tri- renseigne sur le nombre de doubles liaisons.",
        "correct": true,
        "explanation": "Il quantifie les insaturations du même type."
      },
      {
        "content": "Un diène est nécessairement un alcyne.",
        "correct": false,
        "explanation": "Il comporte des doubles liaisons, pas une triple."
      }
    ],
    "explanation": "Le modèle étudié rappelle la terminologie diène/triène pour plusieurs doubles liaisons."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi une double liaison $\\ce{C=C}$ peut-elle conduire à une isomérie géométrique ?",
    "choices": [
      {
        "content": "Les priorités des substituants peuvent être utilisées pour distinguer E et Z.",
        "correct": true,
        "explanation": "Le modèle étudié renvoie à l'isomérie géométrique."
      },
      {
        "content": "Toute double liaison donne obligatoirement E et Z.",
        "correct": false,
        "explanation": "Il faut des substituants différents sur chaque carbone."
      },
      {
        "content": "Une configuration E/Z peut être attribuée même si l’un des carbones de la double liaison porte deux substituants identiques.",
        "correct": false,
        "explanation": "Pour définir E/Z, chacun des deux carbones de la double liaison doit porter deux substituants différents."
      },
      {
        "content": "La géométrie E/Z dépend du nombre total de carbones de la molécule plutôt que de la nature des substituants.",
        "correct": false,
        "explanation": "E/Z dépend de la disposition relative des substituants prioritaires autour de la double liaison."
      },
      {
        "content": "La disposition relative des substituants peut donc être figée.",
        "correct": true,
        "explanation": "Deux configurations distinctes peuvent exister."
      }
    ],
    "explanation": "La rigidité de C=C rend possible l'isomérie E/Z lorsque les conditions de substitution sont réunies."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle transformation prépare un alcène à partir d'un alcool dans le modèle étudié ?",
    "choices": [
      {
        "content": "Une hydrogénation complète d’un alcène.",
        "correct": false,
        "explanation": "L’hydrogénation complète consomme une double liaison ; elle ne prépare pas un alcène à partir d’un alcool."
      },
      {
        "content": "Une déshydratation.",
        "correct": true,
        "explanation": "L'alcool élimine H2O et forme C=C."
      },
      {
        "content": "Une hydratation.",
        "correct": false,
        "explanation": "L'hydratation consomme un alcène pour former un alcool."
      },
      {
        "content": "Une hydrogénation complète.",
        "correct": false,
        "explanation": "Elle sature une liaison multiple."
      },
      {
        "content": "Une oxydation forte.",
        "correct": false,
        "explanation": "Elle conduit à une coupure carbonylée."
      }
    ],
    "explanation": "La déshydratation d'un alcool est une réaction d'élimination formant une double liaison."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la déshydrohalogénation utilisée pour préparer un alcène :",
    "choices": [
      {
        "content": "Elle ajoute deux hydrogènes sur une double liaison.",
        "correct": false,
        "explanation": "Ce serait une hydrogénation."
      },
      {
        "content": "La transformation consomme du dihydrogène sans éliminer de composé halogéné.",
        "correct": false,
        "explanation": "Une déshydrohalogénation élimine HX et forme une double liaison."
      },
      {
        "content": "Une déshydrohalogénation ajoute une molécule HX sur une double liaison.",
        "correct": false,
        "explanation": "Elle élimine HX et forme une double liaison."
      },
      {
        "content": "La transformation élimine HX.",
        "correct": true,
        "explanation": "Une double liaison est créée."
      },
      {
        "content": "Il s'agit d'une voie de préparation d'un alcène.",
        "correct": true,
        "explanation": "La déshydrohalogénation élimine $\\ce{HX}$ et crée une liaison $\\ce{C=C}$ : elle constitue donc une voie de préparation d’un alcène."}
    ],
    "explanation": "La déshydrohalogénation est une élimination de HX créant une liaison C=C."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "L'hydrogénation partielle d'un alcyne peut conduire à un alcène. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le choix du catalyseur et des conditions est important.",
        "correct": true,
        "explanation": "Le modèle étudié souligne la difficulté à s'arrêter au stade alcène."
      },
      {
        "content": "Une hydrogénation poursuivie peut donner l'alcane.",
        "correct": true,
        "explanation": "La réduction peut continuer."
      },
      {
        "content": "Elle transforme directement l'alcyne en alcool.",
        "correct": false,
        "explanation": "Ce n'est pas une hydratation."
      },
      {
        "content": "Si la réduction se poursuit au-delà du stade alcène, un alcane peut être obtenu.",
        "correct": true,
        "explanation": "Une hydrogénation plus poussée réduit aussi la double liaison de l’alcène intermédiaire."
      },
      {
        "content": "Elle consomme une quantité limitée de dihydrogène.",
        "correct": true,
        "explanation": "On réduit la triple liaison au stade double."
      }
    ],
    "explanation": "Le stade alcène est intermédiaire entre alcyne et alcane lors de l'hydrogénation."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Lequel des composés suivants peut présenter une isomérie E/Z ?",
    "choices": [
      {
        "content": "$\\ce{CH2=CH2}$",
        "correct": false,
        "explanation": "Chaque carbone porte deux H identiques."
      },
      {
        "content": "$\\ce{CH3-CH=CH2}$",
        "correct": false,
        "explanation": "Le carbone terminal porte deux H."
      },
      {
        "content": "$\\ce{CH3-CH=CH-CH3}$",
        "correct": true,
        "explanation": "Chaque carbone de la double liaison porte H et CH3."
      },
      {
        "content": "$\\ce{CH3-CH2-CH3}$",
        "correct": false,
        "explanation": "Aucune double liaison."
      },
      {
        "content": "$\\ce{CH3-C(CH3)=CH2}$.",
        "correct": false,
        "explanation": "Le carbone terminal $\\ce{CH2}$ porte deux hydrogènes identiques ; cette double liaison ne définit pas E/Z."
      }
    ],
    "explanation": "Le but-2-ène est l'exemple simple d'un alcène pouvant exister sous deux configurations géométriques."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions distinguent correctement alcène et cyclane ?",
    "choices": [
      {
        "content": "Le cyclane étudié ne comporte pas de double liaison.",
        "correct": true,
        "explanation": "Il est saturé mais cyclique."
      },
      {
        "content": "La formule brute seule suffit toujours à les distinguer.",
        "correct": false,
        "explanation": "Il faut connaître la structure."
      },
      {
        "content": "Connaître seulement la formule brute peut ne pas suffire à décider s’il s’agit d’un cyclane ou d’un alcène.",
        "correct": true,
        "explanation": "Les deux familles peuvent partager la formule générale $\\ce{C_nH_{2n}}$."
      },
      {
        "content": "Ils peuvent partager la même formule générale $\\ce{C_nH_{2n}}$.",
        "correct": true,
        "explanation": "Un alcène mono-insaturé et un cyclane monocyclique saturé ont cette formule."
      },
      {
        "content": "L'alcène comporte une double liaison.",
        "correct": true,
        "explanation": "Motif C=C."
      }
    ],
    "explanation": "La formule $\\ce{C_nH_{2n}}$ n'identifie pas à elle seule la nature de l'insaturation."
  },
  {
    "order": 31,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors d'une déshydratation d'un alcool vers un alcène :",
    "choices": [
      {
        "content": "Une déshydratation ajoute une molécule d’eau au substrat.",
        "correct": false,
        "explanation": "Elle élimine une molécule d’eau."
      },
      {
        "content": "Une double liaison se forme.",
        "correct": true,
        "explanation": "Le produit est un alcène."
      },
      {
        "content": "La transformation appartient aux réactions d'élimination.",
        "correct": true,
        "explanation": "On retire des éléments portés par deux carbones voisins."
      },
      {
        "content": "Le nombre de carbones du squelette change nécessairement.",
        "correct": false,
        "explanation": "Le squelette carboné peut rester identique."
      },
      {
        "content": "La déshydratation augmente le nombre d’atomes d’oxygène du produit organique.",
        "correct": false,
        "explanation": "Une déshydratation élimine une molécule d’eau et forme une double liaison."
      }
    ],
    "explanation": "La déshydratation retire H et OH sous forme d'eau et crée C=C."
  },
  {
    "order": 32,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La déshydrohalogénation de $\\ce{R-CHX-CH2-R'}$ peut donner $\\ce{R-CH=CH-R'}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Deux halogènes sont ajoutés au produit.",
        "correct": false,
        "explanation": "Ce serait une halogénation."
      },
      {
        "content": "Le produit de déshydrohalogénation est nécessairement plus saturé que le substrat et dépourvu de $\\ce{C=C}$.",
        "correct": false,
        "explanation": "La réaction forme précisément une double liaison carbone-carbone."
      },
      {
        "content": "X représente un halogène.",
        "correct": true,
        "explanation": "X désigne un halogène dans la notation $\\ce{R-CHX-CH2-R'}$."},
      {
        "content": "HX est éliminé.",
        "correct": true,
        "explanation": "Bilan d'élimination."
      },
      {
        "content": "Le produit possède une double liaison.",
        "correct": true,
        "explanation": "Alcène."
      }
    ],
    "explanation": "Cette voie prépare un alcène par perte d'un hydracide halogéné."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On souhaite préparer un alcène à partir d'un alcyne. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le catalyseur doit être choisi pour limiter la réduction.",
        "correct": true,
        "explanation": "Le contrôle du stade est important."
      },
      {
        "content": "Une hydrogénation complète donnerait un alcane.",
        "correct": true,
        "explanation": "Le stade alcène serait dépassé."
      },
      {
        "content": "La réaction ajoute un atome d'oxygène.",
        "correct": false,
        "explanation": "Il s'agit d'une hydrogénation."
      },
      {
        "content": "Une hydrogénation partielle d’un alcyne consomme deux équivalents de $\\ce{H2}$ et donne immédiatement l’alcane.",
        "correct": false,
        "explanation": "Le stade alcène correspond à une réduction partielle ; une réduction supplémentaire conduit à l’alcane."
      },
      {
        "content": "Une hydrogénation partielle est possible.",
        "correct": true,
        "explanation": "L'alcyne est réduit au stade alcène."
      }
    ],
    "explanation": "Une hydrogénation partielle contrôlée réduit un alcyne au stade alcène ; une réduction supplémentaire conduit à l’alcane."},
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle transformation est l'inverse conceptuel de l'hydrogénation d'un alcène vers un alcane parmi les choix suivants ?",
    "choices": [
      {
        "content": "Une coupure oxydante forte de la double liaison.",
        "correct": false,
        "explanation": "Une coupure oxydante détruit une double liaison ; elle n’est pas l’opération inverse conceptuelle d’une hydrogénation."
      },
      {
        "content": "L'addition de $\\ce{H2}$.",
        "correct": false,
        "explanation": "C'est l'hydrogénation elle-même."
      },
      {
        "content": "L'addition de $\\ce{Br2}$.",
        "correct": false,
        "explanation": "C'est une addition électrophile."
      },
      {
        "content": "La création d'une double liaison par élimination.",
        "correct": true,
        "explanation": "Une élimination peut restaurer une insaturation."
      },
      {
        "content": "L'hydratation.",
        "correct": false,
        "explanation": "Elle ajoute H et OH."
      }
    ],
    "explanation": "Hydrogéner sature C=C ; une réaction d'élimination peut au contraire former C=C."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la formule $\\ce{C4H8}$ :",
    "choices": [
      {
        "content": "Elle ne correspond pas à l'alcane butane.",
        "correct": true,
        "explanation": "Butane = C4H10."
      },
      {
        "content": "Elle impose une structure unique.",
        "correct": false,
        "explanation": "Plusieurs isomères sont possibles."
      },
      {
        "content": "$\\ce{C4H8}$ correspond nécessairement au butane.",
        "correct": false,
        "explanation": "Le butane est $\\ce{C4H10}$ ; $\\ce{C4H8}$ peut notamment correspondre à un butène ou à un cyclobutane."
      },
      {
        "content": "Elle peut correspondre à un butène acyclique mono-insaturé.",
        "correct": true,
        "explanation": "Alcène C_nH_2n."
      },
      {
        "content": "Elle peut correspondre à un cyclobutane saturé.",
        "correct": true,
        "explanation": "Cyclane C_nH_2n."
      }
    ],
    "explanation": "La formule brute ne suffit pas à distinguer cycle, position de double liaison ou autres isomères."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare but-1-ène et but-2-ène. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le but-1-ène et le but-2-ène possèdent des formules brutes différentes.",
        "correct": false,
        "explanation": "Ils sont des isomères de position de même formule brute."
      },
      {
        "content": "Ils diffèrent par la position de la double liaison.",
        "correct": true,
        "explanation": "Position 1 contre 2."
      },
      {
        "content": "Ils sont isomères de position.",
        "correct": true,
        "explanation": "Même fonction alcène, même chaîne de quatre carbones."
      },
      {
        "content": "Ils sont énantiomères.",
        "correct": false,
        "explanation": "La connectivité diffère par la position de la double liaison."
      },
      {
        "content": "Le but-1-ène et le but-2-ène ont des formules brutes différentes.",
        "correct": false,
        "explanation": "Ils ont la même formule brute ; seule la position de la double liaison change."
      }
    ],
    "explanation": "La nomenclature localise la double liaison et permet de distinguer les isomères de position."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le but-2-ène peut exister sous formes E et Z. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux formes s'interconvertissent par simple rotation libre autour de C=C.",
        "correct": false,
        "explanation": "La rotation est bloquée."
      },
      {
        "content": "Les formes E et Z du but-2-ène ont des formules brutes différentes.",
        "correct": false,
        "explanation": "E et Z décrivent deux configurations de même formule brute et de même connectivité."
      },
      {
        "content": "La double liaison bloque la rotation libre.",
        "correct": true,
        "explanation": "Condition structurale."
      },
      {
        "content": "Chaque carbone sp2 porte deux substituants différents.",
        "correct": true,
        "explanation": "H et CH3."
      },
      {
        "content": "E/Z décrit la géométrie relative des substituants prioritaires.",
        "correct": true,
        "explanation": "Règles CIP."
      }
    ],
    "explanation": "L'isomérie géométrique est une conséquence directe de la rigidité de la double liaison."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un alcène mono-insaturé acyclique possède 18 hydrogènes. Combien possède-t-il de carbones ?",
    "answer": {
      "type": "number",
      "value": 9,
      "tolerance": 0
    },
    "explanation": "Pour un alcène, $2n=18$, donc $n=9$ : nonène."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le nom de l'alcène acyclique mono-insaturé à huit carbones ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "octène",
        "octene"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "L'alcène à huit carbones porte la racine oct- et le suffixe -ène."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une stratégie de synthèse, quelles voies permettent directement de créer une double liaison $\\ce{C=C}$ ?",
    "choices": [
      {
        "content": "Hydrogénation partielle d'un alcyne.",
        "correct": true,
        "explanation": "Réduction contrôlée de C≡C en C=C."
      },
      {
        "content": "Hydrogénation complète d'un alcène.",
        "correct": false,
        "explanation": "Elle détruit C=C pour donner un alcane."
      },
      {
        "content": "L’hydratation d’un alcène est une méthode de formation directe d’une nouvelle liaison $\\ce{C=C}$.",
        "correct": false,
        "explanation": "L’hydratation est une addition sur la double liaison ; elle la consomme."
      },
      {
        "content": "L’hydratation d’un alcène constitue une méthode directe de création d’une liaison $\\ce{C=C}$.",
        "correct": false,
        "explanation": "L’hydratation consomme une double liaison."
      },
      {
        "content": "Déshydrohalogénation.",
        "correct": true,
        "explanation": "Élimination de HX."
      }
    ],
    "explanation": "Trois voies de préparation de l'alcène sont présentées dans le modèle étudié."
  },
  {
    "order": 123,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Éthène possède 2 carbones.",
        "correct": true,
        "explanation": "Éth- = 2."
      },
      {
        "content": "Un alcène mono-insaturé acyclique suit $\\ce{C_nH_{2n}}$.",
        "correct": true,
        "explanation": "Formule générale."
      },
      {
        "content": "Un diène possède deux doubles liaisons.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Une déshydratation d'alcool peut former un alcène.",
        "correct": true,
        "explanation": "Voie de préparation."
      },
      {
        "content": "Une hydrogénation partielle d'alcyne peut donner un alcène.",
        "correct": true,
        "explanation": "Voie de préparation."
      },
      {
        "content": "Le propane est un alcène.",
        "correct": false,
        "explanation": "C'est un alcane."
      },
      {
        "content": "Toute formule $\\ce{C_nH_{2n}}$ décrit nécessairement un alcène.",
        "correct": false,
        "explanation": "Un cyclane est possible."
      },
      {
        "content": "Une double liaison possède une rotation libre complète.",
        "correct": false,
        "explanation": "La rotation est bloquée."
      },
      {
        "content": "Un triène possède deux doubles liaisons.",
        "correct": false,
        "explanation": "Il en possède trois."
      },
      {
        "content": "L'hydrogénation complète d'un alcène crée une nouvelle double liaison.",
        "correct": false,
        "explanation": "Elle la sature."
      }
    ],
    "explanation": "Cette sélection consolide structure, nomenclature et préparation des alcènes."
  },
  {
    "order": 124,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un triène acyclique contient trois doubles liaisons. Par rapport à l'alcane acyclique de même squelette carboné, combien d'atomes d'hydrogène en moins comporte-t-il ?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "Chaque double liaison correspond à deux hydrogènes de moins par rapport au squelette saturé : $3\\times2=6$."
  }
];
