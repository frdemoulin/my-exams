import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch8 — Organisation générale, enveloppe, morphologie et mitose — V2 active */
export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur « Organisation générale du noyau », laquelle est exacte ?",
    "choices": [
      {
        "content": "Le noyau contient la quasi-totalité de l’information génétique d’une cellule humaine nucléée.",
        "correct": true,
        "explanation": "Une petite fraction du génome cellulaire se trouve dans les mitochondries."
      },
      {
        "content": "Le noyau est limité par une seule bicouche lipidique.",
        "correct": false,
        "explanation": "L’enveloppe nucléaire est formée de deux membranes."
      },
      {
        "content": "Les nucléoles sont des organites cytoplasmiques.",
        "correct": false,
        "explanation": "Les nucléoles sont des domaines du noyau."
      },
      {
        "content": "L’ADN mitochondrial est normalement inclus dans le noyau.",
        "correct": false,
        "explanation": "L’ADN mitochondrial est localisé dans les mitochondries."
      },
      {
        "content": "Le nucléoplasme est un compartiment cytoplasmique extérieur à l’enveloppe nucléaire.",
        "correct": false,
        "explanation": "Le nucléoplasme est à l’intérieur du noyau."
      }
    ],
    "explanation": "Le noyau délimite le nucléoplasme, contient l’essentiel du génome nucléaire sous forme de chromatine et comporte des domaines non membranaires comme les nucléoles."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le thème « Fonctions nucléaires » ?",
    "choices": [
      {
        "content": "La traduction cytosolique des protéines a lieu dans le nucléole.",
        "correct": false,
        "explanation": "La traduction cytosolique a lieu sur les ribosomes du cytoplasme et du RER."
      },
      {
        "content": "La réplication de l’ADN nucléaire se déroule dans le noyau.",
        "correct": true,
        "explanation": "Chez les eucaryotes, la réplication du génome nucléaire a lieu dans le noyau."
      },
      {
        "content": "La membrane nucléaire synthétise directement les ARN ribosomaux.",
        "correct": false,
        "explanation": "Les ARNr sont synthétisés à partir des gènes ribosomaux, principalement au niveau du nucléole."
      },
      {
        "content": "Le noyau participe à la réparation de l’ADN.",
        "correct": true,
        "explanation": "Les systèmes de réparation du génome nucléaire fonctionnent dans le noyau."
      },
      {
        "content": "L’ADN chromosomique doit sortir du noyau pour être transcrit.",
        "correct": false,
        "explanation": "La transcription se déroule dans le noyau sans export préalable de l’ADN."
      }
    ],
    "explanation": "Le noyau est le siège majeur de la réplication et de la réparation de l’ADN, de la transcription et de nombreuses étapes de maturation des ARN."
  },
  {
    "order": 3,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le thème « Enveloppe nucléaire et mitose », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La chromatine reste totalement décondensée pendant la mitose.",
        "correct": false,
        "explanation": "La chromatine se condense en chromosomes mitotiques."
      },
      {
        "content": "La reformation du noyau exige une synthèse de novo de toutes ses membranes à partir d’acides gras libres.",
        "correct": false,
        "explanation": "Les membranes du RE participent à la reconstitution de l’enveloppe."
      },
      {
        "content": "L’enveloppe nucléaire se reconstitue autour des chromosomes en fin de mitose.",
        "correct": true,
        "explanation": "Elle se reforme lors de la télophase."
      },
      {
        "content": "Les lamines sont phosphorylées lors de la désorganisation de la lamina en mitose.",
        "correct": true,
        "explanation": "La phosphorylation des lamines favorise le désassemblage de la lamina."
      },
      {
        "content": "La membrane externe de l’enveloppe nucléaire est continue avec le réticulum endoplasmique.",
        "correct": true,
        "explanation": "La membrane externe et le RE appartiennent à un même continuum membranaire."
      }
    ],
    "explanation": "Lors de la mitose ouverte des cellules animales, l’enveloppe nucléaire se désassemble puis se reconstitue autour des chromosomes en fin de mitose, avec une continuité fonctionnelle avec le RE."
  },
  {
    "order": 4,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Morphologie nucléaire », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La condensation de la chromatine augmente fortement au cours de la différenciation du spermatozoïde.",
        "correct": true,
        "explanation": "Le noyau spermatique devient très compact."
      },
      {
        "content": "La forme du noyau peut être caractéristique d’un type cellulaire.",
        "correct": true,
        "explanation": "Par exemple, les granulocytes possèdent un noyau polylobé."
      },
      {
        "content": "La différenciation cellulaire n’a aucun effet possible sur la morphologie nucléaire.",
        "correct": false,
        "explanation": "De nombreux programmes de différenciation modifient le noyau."
      },
      {
        "content": "Un granulocyte polynucléaire possède en réalité un noyau unique composé de plusieurs lobes reliés.",
        "correct": true,
        "explanation": "Le terme polynucléaire est historique : il s’agit d’un noyau lobulé."
      },
      {
        "content": "La morphologie nucléaire peut évoluer au cours de la différenciation cellulaire.",
        "correct": true,
        "explanation": "La spermiogenèse s’accompagne notamment d’une forte transformation du noyau."
      }
    ],
    "explanation": "La forme et la taille du noyau varient selon le type cellulaire et l’état de différenciation ; ces caractères sont utiles en cytologie et en anatomopathologie."
  },
  {
    "order": 5,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Morphologie nucléaire et anatomopathologie », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Un seul critère nucléaire permet à lui seul d’affirmer un cancer dans tous les cas.",
        "correct": false,
        "explanation": "Le diagnostic repose sur un ensemble de critères morphologiques et contextuels."
      },
      {
        "content": "Des nucléoles volumineux ou irréguliers peuvent contribuer à l’évaluation morphologique d’une tumeur.",
        "correct": true,
        "explanation": "La morphologie nucléolaire fait partie des critères cytologiques."
      },
      {
        "content": "Les nucléoles ne sont jamais examinés en cytologie tumorale.",
        "correct": false,
        "explanation": "Leur nombre, leur taille et leur aspect peuvent être informatifs."
      },
      {
        "content": "Le rapport nucléocytoplasmique compare la surface du nucléole à celle du cytosol.",
        "correct": false,
        "explanation": "Il compare la taille du noyau à celle du cytoplasme."
      },
      {
        "content": "La texture de la chromatine est un élément analysé en anatomopathologie.",
        "correct": true,
        "explanation": "Une chromatine grossière ou irrégulière peut être un signe d’atypie."
      }
    ],
    "explanation": "L’anatomopathologie évalue notamment le rapport nucléocytoplasmique, la taille et la forme des noyaux, la texture de la chromatine et les nucléoles, sans qu’un critère isolé suffise au diagnostic."
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant le thème « Structure de l’enveloppe nucléaire », quelle est l’unique proposition exacte ?",
    "choices": [
      {
        "content": "L’espace périnucléaire est identique au nucléoplasme.",
        "correct": false,
        "explanation": "Le nucléoplasme est à l’intérieur de la membrane interne ; l’espace périnucléaire se trouve entre les deux membranes."
      },
      {
        "content": "L’espace périnucléaire est situé entre les membranes interne et externe de l’enveloppe nucléaire.",
        "correct": true,
        "explanation": "Il sépare les deux membranes nucléaires."
      },
      {
        "content": "La membrane externe est totalement indépendante du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Elle est continue avec le RE."
      },
      {
        "content": "Les pores nucléaires sont des ruptures non protéiques de l’enveloppe.",
        "correct": false,
        "explanation": "Ils sont occupés par de grands complexes protéiques de nucléoporines."
      },
      {
        "content": "La lamina est située sur la face cytosolique de la membrane externe.",
        "correct": false,
        "explanation": "Elle se trouve du côté nucléoplasmique de la membrane interne."
      }
    ],
    "explanation": "L’enveloppe nucléaire comprend deux membranes séparées par l’espace périnucléaire et percées de complexes de pores nucléaires ; sa membrane externe est continue avec le RE."
  },
  {
    "order": 7,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Concernant « Organisation générale du noyau », cinq affirmations sont exactes : sélectionnez-les.",
    "choices": [
      {
        "content": "La transcription des ARN nucléaires se déroule dans le noyau.",
        "correct": true,
        "explanation": "Les ARN sont synthétisés à partir de l’ADN nucléaire dans le noyau."
      },
      {
        "content": "La réplication de l’ADN nucléaire se déroule dans le noyau.",
        "correct": true,
        "explanation": "Chez les eucaryotes, la réplication du génome nucléaire a lieu dans le noyau."
      },
      {
        "content": "L’ADN mitochondrial est normalement inclus dans le noyau.",
        "correct": false,
        "explanation": "L’ADN mitochondrial est localisé dans les mitochondries."
      },
      {
        "content": "Le volume interne délimité par l’enveloppe nucléaire est le nucléoplasme.",
        "correct": true,
        "explanation": "Le nucléoplasme correspond au compartiment interne du noyau."
      },
      {
        "content": "Le noyau contient la quasi-totalité de l’information génétique d’une cellule humaine nucléée.",
        "correct": true,
        "explanation": "Une petite fraction du génome cellulaire se trouve dans les mitochondries."
      },
      {
        "content": "Le noyau est limité par une seule bicouche lipidique.",
        "correct": false,
        "explanation": "L’enveloppe nucléaire est formée de deux membranes."
      },
      {
        "content": "L’ADN chromosomique doit sortir du noyau pour être transcrit.",
        "correct": false,
        "explanation": "La transcription se déroule dans le noyau sans export préalable de l’ADN."
      },
      {
        "content": "Le nucléoplasme est un compartiment cytoplasmique extérieur à l’enveloppe nucléaire.",
        "correct": false,
        "explanation": "Le nucléoplasme est à l’intérieur du noyau."
      },
      {
        "content": "Le noyau est délimité par une enveloppe nucléaire constituée de deux membranes.",
        "correct": true,
        "explanation": "L’enveloppe nucléaire possède une membrane interne et une membrane externe."
      },
      {
        "content": "La traduction cytosolique des protéines a lieu dans le nucléole.",
        "correct": false,
        "explanation": "La traduction cytosolique a lieu sur les ribosomes du cytoplasme et du RER."
      }
    ],
    "explanation": "Le noyau délimite le nucléoplasme, contient l’essentiel du génome nucléaire sous forme de chromatine et comporte des domaines non membranaires comme les nucléoles. Le noyau est le siège majeur de la réplication et de la réparation de l’ADN, de la transcription et de nombreuses étapes de maturation des ARN."
  },
  {
    "order": 8,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Fonctions nucléaires », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "De nombreuses étapes de maturation des ARN ont lieu dans le noyau.",
        "correct": true,
        "explanation": "Épissage, maturation des extrémités et assemblage en ribonucléoprotéines sont notamment nucléaires."
      },
      {
        "content": "L’ADN chromosomique doit sortir du noyau pour être transcrit.",
        "correct": false,
        "explanation": "La transcription se déroule dans le noyau sans export préalable de l’ADN."
      },
      {
        "content": "Le noyau participe à la réparation de l’ADN.",
        "correct": true,
        "explanation": "Les systèmes de réparation du génome nucléaire fonctionnent dans le noyau."
      },
      {
        "content": "La transcription des ARN nucléaires se déroule dans le noyau.",
        "correct": true,
        "explanation": "Les ARN sont synthétisés à partir de l’ADN nucléaire dans le noyau."
      },
      {
        "content": "La glycolyse constitue la fonction principale du noyau.",
        "correct": false,
        "explanation": "La glycolyse est une voie cytosolique."
      }
    ],
    "explanation": "Le noyau est le siège majeur de la réplication et de la réparation de l’ADN, de la transcription et de nombreuses étapes de maturation des ARN."
  },
  {
    "order": 9,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur « Enveloppe nucléaire et mitose », lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La membrane externe de l’enveloppe nucléaire est continue avec le réticulum endoplasmique.",
        "correct": true,
        "explanation": "La membrane externe et le RE appartiennent à un même continuum membranaire."
      },
      {
        "content": "Au début d’une mitose ouverte, l’enveloppe nucléaire se désassemble.",
        "correct": true,
        "explanation": "La rupture de l’enveloppe nucléaire permet l’accès du fuseau mitotique aux chromosomes."
      },
      {
        "content": "L’enveloppe nucléaire se reconstitue autour des chromosomes en fin de mitose.",
        "correct": true,
        "explanation": "Elle se reforme lors de la télophase."
      },
      {
        "content": "Les nucléoles restent morphologiquement inchangés pendant toute la mitose.",
        "correct": false,
        "explanation": "Les nucléoles se désorganisent puis se reforment."
      },
      {
        "content": "Les lamines sont phosphorylées lors de la désorganisation de la lamina en mitose.",
        "correct": true,
        "explanation": "La phosphorylation des lamines favorise le désassemblage de la lamina."
      }
    ],
    "explanation": "Lors de la mitose ouverte des cellules animales, l’enveloppe nucléaire se désassemble puis se reconstitue autour des chromosomes en fin de mitose, avec une continuité fonctionnelle avec le RE."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Concernant « Morphologie nucléaire », cinq affirmations sont exactes : sélectionnez-les.",
    "choices": [
      {
        "content": "Tous les noyaux humains ont une forme sphérique identique.",
        "correct": false,
        "explanation": "La morphologie nucléaire varie beaucoup selon les cellules."
      },
      {
        "content": "Un seul critère nucléaire permet à lui seul d’affirmer un cancer dans tous les cas.",
        "correct": false,
        "explanation": "Le diagnostic repose sur un ensemble de critères morphologiques et contextuels."
      },
      {
        "content": "Un rapport nucléocytoplasmique augmenté peut être observé dans des cellules tumorales.",
        "correct": true,
        "explanation": "De nombreuses cellules malignes présentent un noyau relativement volumineux."
      },
      {
        "content": "La forme du noyau peut être caractéristique d’un type cellulaire.",
        "correct": true,
        "explanation": "Par exemple, les granulocytes possèdent un noyau polylobé."
      },
      {
        "content": "Un granulocyte polynucléaire possède en réalité un noyau unique composé de plusieurs lobes reliés.",
        "correct": true,
        "explanation": "Le terme polynucléaire est historique : il s’agit d’un noyau lobulé."
      },
      {
        "content": "L’anisocaryose signifie une diminution du nombre de mitochondries.",
        "correct": false,
        "explanation": "Elle concerne la taille des noyaux."
      },
      {
        "content": "La morphologie nucléaire peut évoluer au cours de la différenciation cellulaire.",
        "correct": true,
        "explanation": "La spermiogenèse s’accompagne notamment d’une forte transformation du noyau."
      },
      {
        "content": "Un granulocyte polynucléaire contient plusieurs noyaux indépendants.",
        "correct": false,
        "explanation": "Il possède un noyau unique plurilobé."
      },
      {
        "content": "La différenciation cellulaire n’a aucun effet possible sur la morphologie nucléaire.",
        "correct": false,
        "explanation": "De nombreux programmes de différenciation modifient le noyau."
      },
      {
        "content": "L’anisocaryose désigne une variabilité anormale de taille des noyaux.",
        "correct": true,
        "explanation": "L’anisocaryose est un critère morphologique de variabilité nucléaire."
      }
    ],
    "explanation": "La forme et la taille du noyau varient selon le type cellulaire et l’état de différenciation ; ces caractères sont utiles en cytologie et en anatomopathologie. L’anatomopathologie évalue notamment le rapport nucléocytoplasmique, la taille et la forme des noyaux, la texture de la chromatine et les nucléoles, sans qu’un critère isolé suffise au diagnostic."
  },
  {
    "order": 11,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Comment nomme-t-on le compartiment interne délimité par l’enveloppe nucléaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "nucléoplasme",
        "nucleoplasme"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le nucléoplasme est le compartiment interne du noyau, délimité par la membrane nucléaire interne."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur « Morphologie nucléaire et anatomopathologie », laquelle est exacte ?",
    "choices": [
      {
        "content": "Les nucléoles ne sont jamais examinés en cytologie tumorale.",
        "correct": false,
        "explanation": "Leur nombre, leur taille et leur aspect peuvent être informatifs."
      },
      {
        "content": "Un seul critère nucléaire permet à lui seul d’affirmer un cancer dans tous les cas.",
        "correct": false,
        "explanation": "Le diagnostic repose sur un ensemble de critères morphologiques et contextuels."
      },
      {
        "content": "La texture de la chromatine est un élément analysé en anatomopathologie.",
        "correct": true,
        "explanation": "Une chromatine grossière ou irrégulière peut être un signe d’atypie."
      },
      {
        "content": "L’anisocaryose signifie une diminution du nombre de mitochondries.",
        "correct": false,
        "explanation": "Elle concerne la taille des noyaux."
      },
      {
        "content": "Le rapport nucléocytoplasmique compare la surface du nucléole à celle du cytosol.",
        "correct": false,
        "explanation": "Il compare la taille du noyau à celle du cytoplasme."
      }
    ],
    "explanation": "L’anatomopathologie évalue notamment le rapport nucléocytoplasmique, la taille et la forme des noyaux, la texture de la chromatine et les nucléoles, sans qu’un critère isolé suffise au diagnostic."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel terme désigne la variabilité de taille des noyaux observée en cytologie ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "anisocaryose"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’anisocaryose correspond à une variation anormale de la taille des noyaux au sein d’une population cellulaire."
  },
  {
    "order": 14,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on l’espace situé entre les membranes interne et externe de l’enveloppe nucléaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "espace périnucléaire",
        "espace perinucleaire",
        "périnucléaire",
        "perinucleaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’espace périnucléaire sépare les membranes interne et externe et communique avec la lumière du réticulum endoplasmique."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Sur le thème « Structure de l’enveloppe nucléaire », repérez l’unique affirmation correcte.",
    "choices": [
      {
        "content": "La lamina est située sur la face cytosolique de la membrane externe.",
        "correct": false,
        "explanation": "Elle se trouve du côté nucléoplasmique de la membrane interne."
      },
      {
        "content": "L’espace périnucléaire est identique au nucléoplasme.",
        "correct": false,
        "explanation": "Le nucléoplasme est à l’intérieur de la membrane interne ; l’espace périnucléaire se trouve entre les deux membranes."
      },
      {
        "content": "La membrane externe est totalement indépendante du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Elle est continue avec le RE."
      },
      {
        "content": "La lamina est accolée à la face nucléoplasmique de la membrane interne.",
        "correct": true,
        "explanation": "La lamina nucléaire forme un réseau sous-jacent à la membrane interne."
      },
      {
        "content": "Les pores nucléaires sont des ruptures non protéiques de l’enveloppe.",
        "correct": false,
        "explanation": "Ils sont occupés par de grands complexes protéiques de nucléoporines."
      }
    ],
    "explanation": "L’enveloppe nucléaire comprend deux membranes séparées par l’espace périnucléaire et percées de complexes de pores nucléaires ; sa membrane externe est continue avec le RE."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le thème « Organisation générale du noyau », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le nucléoplasme est un compartiment cytoplasmique extérieur à l’enveloppe nucléaire.",
        "correct": false,
        "explanation": "Le nucléoplasme est à l’intérieur du noyau."
      },
      {
        "content": "Le noyau est délimité par une enveloppe nucléaire constituée de deux membranes.",
        "correct": true,
        "explanation": "L’enveloppe nucléaire possède une membrane interne et une membrane externe."
      },
      {
        "content": "Les nucléoles sont des organites cytoplasmiques.",
        "correct": false,
        "explanation": "Les nucléoles sont des domaines du noyau."
      },
      {
        "content": "L’ADN mitochondrial est normalement inclus dans le noyau.",
        "correct": false,
        "explanation": "L’ADN mitochondrial est localisé dans les mitochondries."
      },
      {
        "content": "Les nucléoles sont des domaines nucléaires non entourés d’une membrane propre.",
        "correct": true,
        "explanation": "Le nucléole est un condensat nucléaire spécialisé dans la biogenèse ribosomale."
      }
    ],
    "explanation": "Le noyau délimite le nucléoplasme, contient l’essentiel du génome nucléaire sous forme de chromatine et comporte des domaines non membranaires comme les nucléoles."
  },
  {
    "order": 17,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel organite contient la fraction du génome cellulaire qui n’est pas nucléaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "mitochondrie",
        "mitochondries"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les mitochondries possèdent leur propre ADN ; le noyau contient donc la quasi-totalité, mais pas la totalité, du génome cellulaire."
  },
  {
    "order": 18,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Comment nomme-t-on le réseau protéique situé sous la membrane nucléaire interne ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lamina",
        "lamina nucléaire",
        "lamina nucleaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La lamina est un réseau de lamines, filaments intermédiaires de type V, appliqué contre la face nucléoplasmique de la membrane interne."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel terme désigne le rapport entre la taille du noyau et celle du cytoplasme ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "rapport nucléocytoplasmique",
        "rapport nucleocytoplasmique",
        "rapport noyau cytoplasme"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le rapport nucléocytoplasmique compare la taille du noyau à celle du cytoplasme et fait partie des critères morphologiques étudiés en cytologie."
  },
  {
    "order": 20,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Parmi ces propositions concernant « Fonctions nucléaires », retenez exactement les 2 affirmations justes.",
    "choices": [
      {
        "content": "La transcription des ARN nucléaires se déroule dans le noyau.",
        "correct": true,
        "explanation": "Les ARN sont synthétisés à partir de l’ADN nucléaire dans le noyau."
      },
      {
        "content": "De nombreuses étapes de maturation des ARN ont lieu dans le noyau.",
        "correct": true,
        "explanation": "Épissage, maturation des extrémités et assemblage en ribonucléoprotéines sont notamment nucléaires."
      },
      {
        "content": "L’ADN chromosomique doit sortir du noyau pour être transcrit.",
        "correct": false,
        "explanation": "La transcription se déroule dans le noyau sans export préalable de l’ADN."
      },
      {
        "content": "La glycolyse constitue la fonction principale du noyau.",
        "correct": false,
        "explanation": "La glycolyse est une voie cytosolique."
      },
      {
        "content": "La membrane nucléaire synthétise directement les ARN ribosomaux.",
        "correct": false,
        "explanation": "Les ARNr sont synthétisés à partir des gènes ribosomaux, principalement au niveau du nucléole."
      }
    ],
    "explanation": "Le noyau est le siège majeur de la réplication et de la réparation de l’ADN, de la transcription et de nombreuses étapes de maturation des ARN."
  },
  {
    "order": 21,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 3,
    "question": "Parmi ces propositions concernant « Enveloppe nucléaire et mitose », retenez exactement les 3 affirmations justes.",
    "choices": [
      {
        "content": "Les nucléoles restent morphologiquement inchangés pendant toute la mitose.",
        "correct": false,
        "explanation": "Les nucléoles se désorganisent puis se reforment."
      },
      {
        "content": "Au début d’une mitose ouverte, l’enveloppe nucléaire se désassemble.",
        "correct": true,
        "explanation": "La rupture de l’enveloppe nucléaire permet l’accès du fuseau mitotique aux chromosomes."
      },
      {
        "content": "Les lamines sont phosphorylées lors de la désorganisation de la lamina en mitose.",
        "correct": true,
        "explanation": "La phosphorylation des lamines favorise le désassemblage de la lamina."
      },
      {
        "content": "L’enveloppe nucléaire reste parfaitement intacte pendant toute la mitose des cellules animales.",
        "correct": false,
        "explanation": "Dans la mitose ouverte typique des cellules animales, elle se désassemble."
      },
      {
        "content": "La membrane externe de l’enveloppe nucléaire est continue avec le réticulum endoplasmique.",
        "correct": true,
        "explanation": "La membrane externe et le RE appartiennent à un même continuum membranaire."
      }
    ],
    "explanation": "Lors de la mitose ouverte des cellules animales, l’enveloppe nucléaire se désassemble puis se reconstitue autour des chromosomes en fin de mitose, avec une continuité fonctionnelle avec le RE."
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le thème « Morphologie nucléaire », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La morphologie nucléaire peut évoluer au cours de la différenciation cellulaire.",
        "correct": true,
        "explanation": "La spermiogenèse s’accompagne notamment d’une forte transformation du noyau."
      },
      {
        "content": "Un granulocyte polynucléaire contient plusieurs noyaux indépendants.",
        "correct": false,
        "explanation": "Il possède un noyau unique plurilobé."
      },
      {
        "content": "Tous les noyaux humains ont une forme sphérique identique.",
        "correct": false,
        "explanation": "La morphologie nucléaire varie beaucoup selon les cellules."
      },
      {
        "content": "La forme du noyau peut être caractéristique d’un type cellulaire.",
        "correct": true,
        "explanation": "Par exemple, les granulocytes possèdent un noyau polylobé."
      },
      {
        "content": "Un granulocyte polynucléaire possède en réalité un noyau unique composé de plusieurs lobes reliés.",
        "correct": true,
        "explanation": "Le terme polynucléaire est historique : il s’agit d’un noyau lobulé."
      }
    ],
    "explanation": "La forme et la taille du noyau varient selon le type cellulaire et l’état de différenciation ; ces caractères sont utiles en cytologie et en anatomopathologie."
  }
];

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "noyau-organisation-1",
    "title": "Organisation générale et enveloppe",
    "description": "Repères essentiels sur le noyau et son enveloppe.",
    "stage": "DISCOVER",
    "sectionOrder": 1,
    "questionOrders": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "order": 2,
    "slug": "noyau-organisation-2",
    "title": "Morphologie, mitose et enveloppe",
    "description": "Appliquer les notions d’organisation et de dynamique nucléaire.",
    "stage": "PRACTICE",
    "sectionOrder": 1,
    "questionOrders": [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ]
  }
];
