import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch6 — Pathologies, comparaisons et intégration */
export const UE14_BIOCELL_CH6_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement le thème suivant : les maladies peroxysomales ?",
    "choices": [
      {
        "content": "Le spectre de Zellweger est habituellement transmis sur un mode lié à l’X.",
        "correct": false,
        "explanation": "Il est généralement autosomique récessif."
      },
      {
        "content": "Une maladie peroxysomale peut résulter d’un défaut d’une seule enzyme ou d’un transporteur.",
        "correct": true,
        "explanation": "Toutes les maladies peroxysomales ne sont pas des défauts globaux de biogenèse."
      },
      {
        "content": "Une atteinte neurologique exclut une maladie peroxysomale.",
        "correct": false,
        "explanation": "Plusieurs maladies peroxysomales provoquent au contraire des atteintes neurologiques sévères."
      },
      {
        "content": "La maladie de Refsum est due à l’absence d’urate oxydase.",
        "correct": false,
        "explanation": "Elle est liée à un défaut d’α-oxydation de l’acide phytanique."
      },
      {
        "content": "Une maladie peroxysomale peut aussi résulter d’un défaut global de biogenèse de l’organite.",
        "correct": true,
        "explanation": "Le spectre de Zellweger en est l’exemple classique."
      }
    ],
    "explanation": "Les maladies peroxysomales comprennent des défauts de biogenèse, comme le spectre de Zellweger, et des défauts de protéines spécifiques, comme l’adrénoleucodystrophie liée à l’X due à ABCD1."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition doit être retenue comme exacte pour le thème suivant : les différences entre peroxysomes, mitochondries, lysosomes et système endomembranaire ?",
    "choices": [
      {
        "content": "La β-oxydation peroxysomale est directement couplée à une chaîne respiratoire située dans la membrane peroxysomale.",
        "correct": false,
        "explanation": "Le peroxysome n’a pas de chaîne respiratoire de phosphorylation oxydative."
      },
      {
        "content": "La mitochondrie est l’organite principal du marquage PTS1/PEX5.",
        "correct": false,
        "explanation": "PTS1/PEX5 correspond à l’adressage peroxysomal."
      },
      {
        "content": "La mitochondrie possède un génome propre alors que le peroxysome n’en possède pas.",
        "correct": true,
        "explanation": "Les protéines peroxysomales sont codées par le noyau."
      },
      {
        "content": "Le lysosome possède normalement un génome autonome codant ses hydrolases.",
        "correct": false,
        "explanation": "Il ne possède pas de génome propre."
      },
      {
        "content": "Les peroxysomes sont uniquement détruits par mitophagie.",
        "correct": false,
        "explanation": "L’autophagie sélective des peroxysomes est appelée pexophagie."
      }
    ],
    "explanation": "Le peroxysome est un organite à membrane unique sans génome, spécialisé notamment dans des oxydations ; il se distingue des mitochondries à double membrane et des lysosomes acides du système endomembranaire."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel récepteur nucléaire est activé par les fibrates ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PPAR alpha",
        "PPARα",
        "PPARA",
        "PPAR-a"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les fibrates sont des agonistes de PPARα, qui régule de nombreux gènes du métabolisme lipidique."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour le thème suivant — les différences entre peroxysomes, mitochondries, lysosomes et système endomembranaire — quelles affirmations sont exactes ?",
    "choices": [
      {
        "content": "Le peroxysome possède une membrane unique alors que la mitochondrie possède deux membranes.",
        "correct": true,
        "explanation": "Cette différence structurale est fondamentale."
      },
      {
        "content": "La mitochondrie possède un génome propre alors que le peroxysome n’en possède pas.",
        "correct": true,
        "explanation": "Les protéines peroxysomales sont codées par le noyau."
      },
      {
        "content": "La catalase est l’hydrolase acide principale du lysosome.",
        "correct": false,
        "explanation": "La catalase est surtout peroxysomale ; les lysosomes contiennent des hydrolases acides."
      },
      {
        "content": "La β-oxydation peroxysomale est directement couplée à une chaîne respiratoire située dans la membrane peroxysomale.",
        "correct": false,
        "explanation": "Le peroxysome n’a pas de chaîne respiratoire de phosphorylation oxydative."
      },
      {
        "content": "Peroxysomes et mitochondries participent tous deux au catabolisme des acides gras.",
        "correct": true,
        "explanation": "Leurs substrats préférentiels et leur couplage énergétique diffèrent."
      }
    ],
    "explanation": "Le peroxysome est un organite à membrane unique sans génome, spécialisé notamment dans des oxydations ; il se distingue des mitochondries à double membrane et des lysosomes acides du système endomembranaire."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Choisissez exactement les deux réponses justes pour le thème suivant : les maladies peroxysomales.",
    "choices": [
      {
        "content": "Le spectre de Zellweger correspond à des troubles de la biogenèse peroxysomale.",
        "correct": true,
        "explanation": "Des mutations de gènes PEX perturbent l’assemblage ou l’import de protéines peroxysomales."
      },
      {
        "content": "L’adrénoleucodystrophie liée à l’X est une maladie autosomique dominante.",
        "correct": false,
        "explanation": "Elle est liée au chromosome X."
      },
      {
        "content": "Le spectre de Zellweger est provoqué par un déficit isolé de catalase sans défaut de biogenèse.",
        "correct": false,
        "explanation": "Il résulte de mutations de gènes PEX impliqués dans la biogenèse peroxysomale."
      },
      {
        "content": "Le spectre de Zellweger est une maladie lysosomale due à LAMP2A.",
        "correct": false,
        "explanation": "Il s’agit d’un trouble de biogenèse peroxysomale."
      },
      {
        "content": "Les troubles du spectre de Zellweger sont le plus souvent transmis sur un mode autosomique récessif.",
        "correct": true,
        "explanation": "Ils sont dus à des variants bialléliques de gènes de biogenèse peroxysomale."
      }
    ],
    "explanation": "Les maladies peroxysomales comprennent des défauts de biogenèse, comme le spectre de Zellweger, et des défauts de protéines spécifiques, comme l’adrénoleucodystrophie liée à l’X due à ABCD1.",
    "requiredSelectionCount": 2
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les cinq affirmations proposées, lesquelles sont justes sur le thème suivant : les différences entre peroxysomes, mitochondries, lysosomes et système endomembranaire ?",
    "choices": [
      {
        "content": "La mitochondrie est le principal siège du cycle de Krebs chez les cellules eucaryotes humaines.",
        "correct": true,
        "explanation": "Le cycle de Krebs se déroule dans la matrice mitochondriale."
      },
      {
        "content": "Le lysosome et le peroxysome sont deux noms pour le même organite.",
        "correct": false,
        "explanation": "Ils ont des fonctions, enzymes et voies de biogenèse distinctes."
      },
      {
        "content": "Le peroxysome ne possède pas de crêtes ni de chaîne respiratoire complète.",
        "correct": true,
        "explanation": "Ces caractéristiques appartiennent à la membrane interne mitochondriale."
      },
      {
        "content": "Le peroxysome possède une membrane unique alors que la mitochondrie possède deux membranes.",
        "correct": true,
        "explanation": "Cette différence structurale est fondamentale."
      },
      {
        "content": "La mitochondrie possède un génome propre alors que le peroxysome n’en possède pas.",
        "correct": true,
        "explanation": "Les protéines peroxysomales sont codées par le noyau."
      }
    ],
    "explanation": "Le peroxysome est un organite à membrane unique sans génome, spécialisé notamment dans des oxydations ; il se distingue des mitochondries à double membrane et des lysosomes acides du système endomembranaire."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos du thème suivant, quelle proposition est correcte : les maladies peroxysomales ?",
    "choices": [
      {
        "content": "ABCD1 code une hydrolase lysosomale du mannose-6-phosphate.",
        "correct": false,
        "explanation": "ABCD1 est un transporteur ABC peroxysomal."
      },
      {
        "content": "Une insuffisance surrénalienne peut faire partie du phénotype de l’adrénoleucodystrophie liée à l’X.",
        "correct": true,
        "explanation": "La corticosurrénale est un tissu fréquemment atteint."
      },
      {
        "content": "Dans l’adrénoleucodystrophie liée à l’X, les acides gras à très longue chaîne sont toujours anormalement bas.",
        "correct": false,
        "explanation": "Ils s’accumulent typiquement dans les tissus et le plasma."
      },
      {
        "content": "L’adrénoleucodystrophie liée à l’X est une maladie autosomique dominante.",
        "correct": false,
        "explanation": "Elle est liée au chromosome X."
      },
      {
        "content": "Le spectre de Zellweger est provoqué par un déficit isolé de catalase sans défaut de biogenèse.",
        "correct": false,
        "explanation": "Il résulte de mutations de gènes PEX impliqués dans la biogenèse peroxysomale."
      }
    ],
    "explanation": "Les maladies peroxysomales comprennent des défauts de biogenèse, comme le spectre de Zellweger, et des défauts de protéines spécifiques, comme l’adrénoleucodystrophie liée à l’X due à ABCD1."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel est le produit final majeur du catabolisme des purines chez l’humain ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide urique",
        "urate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’absence d’urate oxydase fonctionnelle chez l’humain explique l’accumulation terminale d’acide urique/urate."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRPL",
    "question": "Concernant le thème suivant — les maladies peroxysomales — retenez exactement cinq affirmations justes parmi les dix.",
    "choices": [
      {
        "content": "L’adrénoleucodystrophie liée à l’X peut s’accompagner d’une accumulation d’acides gras à très longue chaîne.",
        "correct": true,
        "explanation": "Le défaut de transport peroxysomal altère leur dégradation."
      },
      {
        "content": "L’adrénoleucodystrophie liée à l’X est due à une mutation de l’ADN mitochondrial.",
        "correct": false,
        "explanation": "Elle est due au gène nucléaire ABCD1 situé sur le chromosome X."
      },
      {
        "content": "ABCD1 code une hydrolase lysosomale du mannose-6-phosphate.",
        "correct": false,
        "explanation": "ABCD1 est un transporteur ABC peroxysomal."
      },
      {
        "content": "Dans l’adrénoleucodystrophie liée à l’X, les acides gras à très longue chaîne sont toujours anormalement bas.",
        "correct": false,
        "explanation": "Ils s’accumulent typiquement dans les tissus et le plasma."
      },
      {
        "content": "Certaines formes cérébrales d’adrénoleucodystrophie liée à l’X entraînent une démyélinisation progressive.",
        "correct": true,
        "explanation": "L’atteinte de la substance blanche est une caractéristique majeure des formes cérébrales."
      },
      {
        "content": "Une insuffisance surrénalienne peut faire partie du phénotype de l’adrénoleucodystrophie liée à l’X.",
        "correct": true,
        "explanation": "La corticosurrénale est un tissu fréquemment atteint."
      },
      {
        "content": "L’adrénoleucodystrophie liée à l’X est une maladie autosomique dominante.",
        "correct": false,
        "explanation": "Elle est liée au chromosome X."
      },
      {
        "content": "ABCD1 participe au transport de substrats lipidiques à très longue chaîne vers le peroxysome.",
        "correct": true,
        "explanation": "Son déficit réduit leur entrée efficace dans la voie de β-oxydation peroxysomale."
      },
      {
        "content": "Le spectre de Zellweger correspond à des troubles de la biogenèse peroxysomale.",
        "correct": true,
        "explanation": "Des mutations de gènes PEX perturbent l’assemblage ou l’import de protéines peroxysomales."
      },
      {
        "content": "Le spectre de Zellweger est provoqué par un déficit isolé de catalase sans défaut de biogenèse.",
        "correct": false,
        "explanation": "Il résulte de mutations de gènes PEX impliqués dans la biogenèse peroxysomale."
      }
    ],
    "explanation": "Les maladies peroxysomales comprennent des défauts de biogenèse, comme le spectre de Zellweger, et des défauts de protéines spécifiques, comme l’adrénoleucodystrophie liée à l’X due à ABCD1.",
    "requiredSelectionCount": 5
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le thème suivant — les différences entre peroxysomes, mitochondries, lysosomes et système endomembranaire — quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les peroxysomes ne sont pas des lysosomes spécialisés.",
        "correct": true,
        "explanation": "Ils diffèrent par leur biogenèse, leurs enzymes et leurs fonctions."
      },
      {
        "content": "Toutes les protéines des peroxysomes transitent obligatoirement par le Golgi avant leur import.",
        "correct": false,
        "explanation": "Les protéines matricielles sont importées directement depuis le cytosol."
      },
      {
        "content": "Les lysosomes appartiennent au système endomembranaire, contrairement aux peroxysomes.",
        "correct": true,
        "explanation": "Les lysosomes dérivent de la voie endosome–Golgi, tandis que les peroxysomes ont une biogenèse distincte."
      },
      {
        "content": "Le peroxysome et la mitochondrie possèdent tous deux un ADN circulaire propre.",
        "correct": false,
        "explanation": "Seule la mitochondrie possède un génome propre parmi ces deux organites."
      },
      {
        "content": "Le peroxysome possède deux membranes et des crêtes internes.",
        "correct": false,
        "explanation": "Il a une seule membrane et pas de crêtes mitochondriales."
      }
    ],
    "explanation": "Le peroxysome est un organite à membrane unique sans génome, spécialisé notamment dans des oxydations ; il se distingue des mitochondries à double membrane et des lysosomes acides du système endomembranaire."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les maladies peroxysomales, quelles propositions sont incorrectes ?",
    "choices": [
      {
        "content": "La maladie de Refsum est liée à un défaut du catabolisme peroxysomal de l’acide phytanique.",
        "correct": false,
        "explanation": "Un défaut d’α-oxydation provoque l’accumulation de phytanate."
      },
      {
        "content": "L’adrénoleucodystrophie liée à l’X est due à une mutation de l’ADN mitochondrial.",
        "correct": true,
        "explanation": "Elle est due au gène nucléaire ABCD1 situé sur le chromosome X."
      },
      {
        "content": "La maladie de Refsum classique est habituellement autosomique récessive.",
        "correct": false,
        "explanation": "Elle est souvent liée à des variants bialléliques de PHYH."
      },
      {
        "content": "ABCD1 code une hydrolase lysosomale du mannose-6-phosphate.",
        "correct": true,
        "explanation": "ABCD1 est un transporteur ABC peroxysomal."
      },
      {
        "content": "Dans l’adrénoleucodystrophie liée à l’X, les acides gras à très longue chaîne sont toujours anormalement bas.",
        "correct": true,
        "explanation": "Ils s’accumulent typiquement dans les tissus et le plasma."
      }
    ],
    "explanation": "Les maladies peroxysomales comprennent des défauts de biogenèse, comme le spectre de Zellweger, et des défauts de protéines spécifiques, comme l’adrénoleucodystrophie liée à l’X due à ABCD1."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel gène est muté dans l’adrénoleucodystrophie liée à l’X ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ABCD1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "ABCD1 code un transporteur ABC de la membrane peroxysomale."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Repérez l’unique affirmation exacte concernant le thème suivant : les maladies peroxysomales.",
    "choices": [
      {
        "content": "La maladie de Refsum est due à l’absence d’urate oxydase.",
        "correct": false,
        "explanation": "Elle est liée à un défaut d’α-oxydation de l’acide phytanique."
      },
      {
        "content": "Toutes les maladies peroxysomales ont exactement le même mécanisme moléculaire.",
        "correct": false,
        "explanation": "Elles peuvent toucher la biogenèse, le transport, ou des enzymes métaboliques spécifiques."
      },
      {
        "content": "Un défaut de β-oxydation peroxysomale améliore nécessairement la myélinisation.",
        "correct": false,
        "explanation": "L’accumulation lipidique peut au contraire être associée à une atteinte de la myéline."
      },
      {
        "content": "Les gènes PEX sont portés par le génome peroxysomal.",
        "correct": false,
        "explanation": "Le peroxysome n’a pas de génome ; les gènes PEX sont nucléaires."
      },
      {
        "content": "La maladie de Refsum est liée à un défaut du catabolisme peroxysomal de l’acide phytanique.",
        "correct": true,
        "explanation": "Un défaut d’α-oxydation provoque l’accumulation de phytanate."
      }
    ],
    "explanation": "Les maladies peroxysomales comprennent des défauts de biogenèse, comme le spectre de Zellweger, et des défauts de protéines spécifiques, comme l’adrénoleucodystrophie liée à l’X due à ABCD1."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez toutes les affirmations exactes concernant le thème suivant : les différences entre peroxysomes, mitochondries, lysosomes et système endomembranaire.",
    "choices": [
      {
        "content": "Les peroxysomes sont uniquement détruits par mitophagie.",
        "correct": false,
        "explanation": "L’autophagie sélective des peroxysomes est appelée pexophagie."
      },
      {
        "content": "La β-oxydation mitochondriale est couplée indirectement à la production d’ATP via la chaîne respiratoire.",
        "correct": true,
        "explanation": "Les équivalents réducteurs alimentent la phosphorylation oxydative."
      },
      {
        "content": "La β-oxydation peroxysomale forme du H2O2 lors de la première oxydation.",
        "correct": true,
        "explanation": "L’acyl-CoA oxydase transfère directement les électrons à O2."
      },
      {
        "content": "Les lysosomes sont des compartiments acides riches en hydrolases.",
        "correct": true,
        "explanation": "Leur pH bas est maintenu notamment par la V-ATPase."
      },
      {
        "content": "Les peroxysomes ne sont pas des lysosomes spécialisés.",
        "correct": true,
        "explanation": "Ils diffèrent par leur biogenèse, leurs enzymes et leurs fonctions."
      }
    ],
    "explanation": "Le peroxysome est un organite à membrane unique sans génome, spécialisé notamment dans des oxydations ; il se distingue des mitochondries à double membrane et des lysosomes acides du système endomembranaire."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel transporteur peroxysomal est déficient dans l’adrénoleucodystrophie liée à l’X ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ABCD1",
        "protéine ABCD1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le déficit en ABCD1 perturbe le transport de substrats lipidiques à très longue chaîne vers le peroxysome."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sur le thème suivant, deux affirmations seulement sont exactes ; sélectionnez-les : les différences entre peroxysomes, mitochondries, lysosomes et système endomembranaire.",
    "choices": [
      {
        "content": "La mitochondrie est l’organite principal du marquage PTS1/PEX5.",
        "correct": false,
        "explanation": "PTS1/PEX5 correspond à l’adressage peroxysomal."
      },
      {
        "content": "La mitochondrie possède un génome propre alors que le peroxysome n’en possède pas.",
        "correct": true,
        "explanation": "Les protéines peroxysomales sont codées par le noyau."
      },
      {
        "content": "Le lysosome possède normalement un génome autonome codant ses hydrolases.",
        "correct": false,
        "explanation": "Il ne possède pas de génome propre."
      },
      {
        "content": "Les peroxysomes sont uniquement détruits par mitophagie.",
        "correct": false,
        "explanation": "L’autophagie sélective des peroxysomes est appelée pexophagie."
      },
      {
        "content": "Peroxysomes et mitochondries participent tous deux au catabolisme des acides gras.",
        "correct": true,
        "explanation": "Leurs substrats préférentiels et leur couplage énergétique diffèrent."
      }
    ],
    "explanation": "Le peroxysome est un organite à membrane unique sans génome, spécialisé notamment dans des oxydations ; il se distingue des mitochondries à double membrane et des lysosomes acides du système endomembranaire.",
    "requiredSelectionCount": 2
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions doivent être retenues comme exactes pour le thème suivant : les maladies peroxysomales ?",
    "choices": [
      {
        "content": "Les troubles du spectre de Zellweger sont le plus souvent transmis sur un mode autosomique récessif.",
        "correct": true,
        "explanation": "Ils sont dus à des variants bialléliques de gènes de biogenèse peroxysomale."
      },
      {
        "content": "Le spectre de Zellweger est une maladie lysosomale due à LAMP2A.",
        "correct": false,
        "explanation": "Il s’agit d’un trouble de biogenèse peroxysomale."
      },
      {
        "content": "Le spectre de Zellweger est habituellement transmis sur un mode lié à l’X.",
        "correct": false,
        "explanation": "Il est généralement autosomique récessif."
      },
      {
        "content": "Une atteinte neurologique exclut une maladie peroxysomale.",
        "correct": false,
        "explanation": "Plusieurs maladies peroxysomales provoquent au contraire des atteintes neurologiques sévères."
      },
      {
        "content": "Les formes sévères du spectre de Zellweger sont multisystémiques.",
        "correct": true,
        "explanation": "Elles peuvent associer atteintes neurologiques, hépatiques, rénales et anomalies du développement."
      }
    ],
    "explanation": "Les maladies peroxysomales comprennent des défauts de biogenèse, comme le spectre de Zellweger, et des défauts de protéines spécifiques, comme l’adrénoleucodystrophie liée à l’X due à ABCD1."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi ces propositions relatives au thème suivant, laquelle est correcte : les différences entre peroxysomes, mitochondries, lysosomes et système endomembranaire ?",
    "choices": [
      {
        "content": "La catalase est l’hydrolase acide principale du lysosome.",
        "correct": false,
        "explanation": "La catalase est surtout peroxysomale ; les lysosomes contiennent des hydrolases acides."
      },
      {
        "content": "La β-oxydation peroxysomale est directement couplée à une chaîne respiratoire située dans la membrane peroxysomale.",
        "correct": false,
        "explanation": "Le peroxysome n’a pas de chaîne respiratoire de phosphorylation oxydative."
      },
      {
        "content": "Le peroxysome possède une membrane unique alors que la mitochondrie possède deux membranes.",
        "correct": true,
        "explanation": "Cette différence structurale est fondamentale."
      },
      {
        "content": "La mitochondrie est l’organite principal du marquage PTS1/PEX5.",
        "correct": false,
        "explanation": "PTS1/PEX5 correspond à l’adressage peroxysomal."
      },
      {
        "content": "Le lysosome possède normalement un génome autonome codant ses hydrolases.",
        "correct": false,
        "explanation": "Il ne possède pas de génome propre."
      }
    ],
    "explanation": "Le peroxysome est un organite à membrane unique sans génome, spécialisé notamment dans des oxydations ; il se distingue des mitochondries à double membrane et des lysosomes acides du système endomembranaire."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les maladies peroxysomales, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le spectre de Zellweger correspond à des troubles de la biogenèse peroxysomale.",
        "correct": true,
        "explanation": "Des mutations de gènes PEX perturbent l’assemblage ou l’import de protéines peroxysomales."
      },
      {
        "content": "Le spectre de Zellweger est provoqué par un déficit isolé de catalase sans défaut de biogenèse.",
        "correct": false,
        "explanation": "Il résulte de mutations de gènes PEX impliqués dans la biogenèse peroxysomale."
      },
      {
        "content": "Les troubles du spectre de Zellweger sont le plus souvent transmis sur un mode autosomique récessif.",
        "correct": true,
        "explanation": "Ils sont dus à des variants bialléliques de gènes de biogenèse peroxysomale."
      },
      {
        "content": "Les formes sévères du spectre de Zellweger sont multisystémiques.",
        "correct": true,
        "explanation": "Elles peuvent associer atteintes neurologiques, hépatiques, rénales et anomalies du développement."
      },
      {
        "content": "Le spectre de Zellweger est une maladie lysosomale due à LAMP2A.",
        "correct": false,
        "explanation": "Il s’agit d’un trouble de biogenèse peroxysomale."
      }
    ],
    "explanation": "Les maladies peroxysomales comprennent des défauts de biogenèse, comme le spectre de Zellweger, et des défauts de protéines spécifiques, comme l’adrénoleucodystrophie liée à l’X due à ABCD1."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle famille de gènes est fréquemment impliquée dans le spectre de Zellweger ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PEX",
        "gènes PEX",
        "peroxines"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les gènes PEX codent des peroxines nécessaires à la biogenèse et à l’import peroxysomaux."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Concernant le thème suivant — les maladies peroxysomales — retenez exactement cinq affirmations justes parmi les dix.",
    "choices": [
      {
        "content": "Dans l’adrénoleucodystrophie liée à l’X, les acides gras à très longue chaîne sont toujours anormalement bas.",
        "correct": false,
        "explanation": "Ils s’accumulent typiquement dans les tissus et le plasma."
      },
      {
        "content": "Une insuffisance surrénalienne peut faire partie du phénotype de l’adrénoleucodystrophie liée à l’X.",
        "correct": true,
        "explanation": "La corticosurrénale est un tissu fréquemment atteint."
      },
      {
        "content": "ABCD1 participe au transport de substrats lipidiques à très longue chaîne vers le peroxysome.",
        "correct": true,
        "explanation": "Son déficit réduit leur entrée efficace dans la voie de β-oxydation peroxysomale."
      },
      {
        "content": "Le spectre de Zellweger correspond à des troubles de la biogenèse peroxysomale.",
        "correct": true,
        "explanation": "Des mutations de gènes PEX perturbent l’assemblage ou l’import de protéines peroxysomales."
      },
      {
        "content": "L’adrénoleucodystrophie liée à l’X est une maladie autosomique dominante.",
        "correct": false,
        "explanation": "Elle est liée au chromosome X."
      },
      {
        "content": "Les troubles du spectre de Zellweger sont le plus souvent transmis sur un mode autosomique récessif.",
        "correct": true,
        "explanation": "Ils sont dus à des variants bialléliques de gènes de biogenèse peroxysomale."
      },
      {
        "content": "Le spectre de Zellweger est provoqué par un déficit isolé de catalase sans défaut de biogenèse.",
        "correct": false,
        "explanation": "Il résulte de mutations de gènes PEX impliqués dans la biogenèse peroxysomale."
      },
      {
        "content": "Le spectre de Zellweger est une maladie lysosomale due à LAMP2A.",
        "correct": false,
        "explanation": "Il s’agit d’un trouble de biogenèse peroxysomale."
      },
      {
        "content": "Les formes sévères du spectre de Zellweger sont multisystémiques.",
        "correct": true,
        "explanation": "Elles peuvent associer atteintes neurologiques, hépatiques, rénales et anomalies du développement."
      },
      {
        "content": "Le spectre de Zellweger est habituellement transmis sur un mode lié à l’X.",
        "correct": false,
        "explanation": "Il est généralement autosomique récessif."
      }
    ],
    "explanation": "Les maladies peroxysomales comprennent des défauts de biogenèse, comme le spectre de Zellweger, et des défauts de protéines spécifiques, comme l’adrénoleucodystrophie liée à l’X due à ABCD1.",
    "requiredSelectionCount": 5
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le thème suivant — les différences entre peroxysomes, mitochondries, lysosomes et système endomembranaire — quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Mitochondries et peroxysomes peuvent être éliminés sélectivement par autophagie.",
        "correct": true,
        "explanation": "On parle respectivement de mitophagie et de pexophagie."
      },
      {
        "content": "Les protéines matricielles peroxysomales sont importées depuis le cytosol.",
        "correct": true,
        "explanation": "Elles utilisent des signaux PTS et des peroxines."
      },
      {
        "content": "Le peroxysome possède deux membranes et des crêtes internes.",
        "correct": false,
        "explanation": "Il a une seule membrane et pas de crêtes mitochondriales."
      },
      {
        "content": "La mitochondrie est le principal siège du cycle de Krebs chez les cellules eucaryotes humaines.",
        "correct": true,
        "explanation": "Le cycle de Krebs se déroule dans la matrice mitochondriale."
      },
      {
        "content": "Le peroxysome ne possède pas de crêtes ni de chaîne respiratoire complète.",
        "correct": true,
        "explanation": "Ces caractéristiques appartiennent à la membrane interne mitochondriale."
      }
    ],
    "explanation": "Le peroxysome est un organite à membrane unique sans génome, spécialisé notamment dans des oxydations ; il se distingue des mitochondries à double membrane et des lysosomes acides du système endomembranaire."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce schéma simplifié d’adressage intracellulaire, cliquez sur l’organite qui reçoit directement depuis le cytosol une protéine matricielle portant un signal PTS1.",
    "image": {
      "src": "/images/training/ue14/biologie-cellulaire/peroxysomes/import-pts1-qzone.svg",
      "alt": "Schéma original comparant réticulum endoplasmique, mitochondrie, lysosome et peroxysome dans le cytosol",
      "width": 1200,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "peroxysome",
        "label": "Peroxysome",
        "x": 0.75,
        "y": 0.48,
        "tolerance": 0.11
      }
    ],
    "explanation": "Une protéine matricielle porteuse d’un PTS1 est reconnue dans le cytosol par PEX5 puis importée directement dans le peroxysome, sans transit obligatoire par le RE ou le Golgi."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel est le mode de transmission habituel des troubles du spectre de Zellweger ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "autosomique récessive",
        "autosomique recessive",
        "récessif autosomique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Ils sont généralement dus à des variants bialléliques de gènes PEX."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Retenez exactement deux réponses correctes sur le thème suivant : les différences entre peroxysomes, mitochondries, lysosomes et système endomembranaire.",
    "choices": [
      {
        "content": "Le peroxysome possède une membrane unique alors que la mitochondrie possède deux membranes.",
        "correct": true,
        "explanation": "Cette différence structurale est fondamentale."
      },
      {
        "content": "Toutes les protéines des peroxysomes transitent obligatoirement par le Golgi avant leur import.",
        "correct": false,
        "explanation": "Les protéines matricielles sont importées directement depuis le cytosol."
      },
      {
        "content": "Le peroxysome et la mitochondrie possèdent tous deux un ADN circulaire propre.",
        "correct": false,
        "explanation": "Seule la mitochondrie possède un génome propre parmi ces deux organites."
      },
      {
        "content": "Le peroxysome possède deux membranes et des crêtes internes.",
        "correct": false,
        "explanation": "Il a une seule membrane et pas de crêtes mitochondriales."
      },
      {
        "content": "La mitochondrie possède un génome propre alors que le peroxysome n’en possède pas.",
        "correct": true,
        "explanation": "Les protéines peroxysomales sont codées par le noyau."
      }
    ],
    "explanation": "Le peroxysome est un organite à membrane unique sans génome, spécialisé notamment dans des oxydations ; il se distingue des mitochondries à double membrane et des lysosomes acides du système endomembranaire.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Sélectionnez toutes les affirmations exactes concernant le thème suivant : l’adressage et l’import des protéines peroxysomales.",
    "choices": [
      {
        "content": "PTS2 est un motif C-terminal reconnu par PEX5.",
        "correct": false,
        "explanation": "PTS2 est N-terminal et reconnu principalement par PEX7."
      },
      {
        "content": "L’import matriciel peroxysomal est essentiellement post-traductionnel.",
        "correct": true,
        "explanation": "La protéine est d’abord synthétisée dans le cytosol avant son import."
      },
      {
        "content": "L’adressage peroxysomal nécessite une N-glycosylation préalable dans le Golgi.",
        "correct": false,
        "explanation": "Les protéines matricielles sont importées directement depuis le cytosol sans passage obligatoire par le Golgi."
      },
      {
        "content": "Le peroxysome peut importer certaines protéines déjà repliées, voire oligomériques.",
        "correct": true,
        "explanation": "Cette capacité distingue l’import peroxysomal de plusieurs autres systèmes de translocation."
      },
      {
        "content": "PTS1 est un peptide signal N-terminal clivé par la signal peptidase du RE.",
        "correct": false,
        "explanation": "PTS1 est typiquement C-terminal et n’utilise pas la signal peptidase du RE."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Sur le thème suivant — les fonctions lipidiques des peroxysomes — quelle affirmation est juste ?",
    "choices": [
      {
        "content": "L’acyl-CoA oxydase est une enzyme de la synthèse des protéines ribosomales.",
        "correct": false,
        "explanation": "C’est une enzyme de la β-oxydation peroxysomale."
      },
      {
        "content": "Le peroxysome est l’organite principal du cycle de Krebs.",
        "correct": false,
        "explanation": "Le cycle de Krebs se déroule dans la matrice mitochondriale."
      },
      {
        "content": "L’acide phytanique est un acide gras ramifié.",
        "correct": true,
        "explanation": "Sa structure nécessite une voie d’α-oxydation avant d’autres étapes cataboliques."
      },
      {
        "content": "Un défaut peroxysomal de β-oxydation entraîne nécessairement une diminution des acides gras à très longue chaîne.",
        "correct": false,
        "explanation": "Il peut au contraire provoquer leur accumulation."
      },
      {
        "content": "La β-oxydation peroxysomale est spécialisée exclusivement dans les acides gras à chaîne courte.",
        "correct": false,
        "explanation": "Elle intervient particulièrement pour les acides gras à très longue chaîne."
      }
    ],
    "explanation": "Les peroxysomes raccourcissent notamment les acides gras à très longue chaîne, participent à la synthèse des plasmalogènes et à certaines étapes du métabolisme des acides biliaires."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pour le thème suivant — les oxydases, la catalase et le peroxyde d’hydrogène — quelles affirmations sont exactes ?",
    "choices": [
      {
        "content": "La catalase peut convertir deux molécules de H2O2 en eau et dioxygène.",
        "correct": true,
        "explanation": "La réaction catalatique globale est 2 H2O2 → 2 H2O + O2."
      },
      {
        "content": "Le H2O2 est une espèce réactive de l’oxygène qui doit être contrôlée.",
        "correct": true,
        "explanation": "En excès, il contribue au stress oxydant et peut endommager des macromolécules."
      },
      {
        "content": "L’acyl-CoA oxydase est une enzyme clé de la première étape de la β-oxydation peroxysomale.",
        "correct": true,
        "explanation": "Elle transfère les électrons du FADH2 directement à O2, formant H2O2."
      },
      {
        "content": "La formation de H2O2 prouve que le peroxysome est dépourvu de systèmes antioxydants.",
        "correct": false,
        "explanation": "La catalase et d’autres enzymes antioxydantes limitent précisément son accumulation."
      },
      {
        "content": "Les peroxysomes fonctionnent en absence totale d’oxygène moléculaire.",
        "correct": false,
        "explanation": "De nombreuses réactions oxydatives peroxysomales utilisent O2."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle classe de lipides s’accumule typiquement dans l’adrénoleucodystrophie liée à l’X ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acides gras à très longue chaîne",
        "VLCFA",
        "AG à très longue chaîne"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le défaut d’ABCD1 compromet leur dégradation peroxysomale."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Parmi ces dix propositions, retenez exactement les cinq exactes pour le thème suivant : les différences entre peroxysomes, mitochondries, lysosomes et système endomembranaire.",
    "choices": [
      {
        "content": "La mitochondrie possède un génome propre alors que le peroxysome n’en possède pas.",
        "correct": true,
        "explanation": "Les protéines peroxysomales sont codées par le noyau."
      },
      {
        "content": "Le lysosome possède normalement un génome autonome codant ses hydrolases.",
        "correct": false,
        "explanation": "Il ne possède pas de génome propre."
      },
      {
        "content": "Les peroxysomes sont uniquement détruits par mitophagie.",
        "correct": false,
        "explanation": "L’autophagie sélective des peroxysomes est appelée pexophagie."
      },
      {
        "content": "Le cycle de Krebs est une voie majeure de la matrice peroxysomale.",
        "correct": false,
        "explanation": "Il se déroule dans la matrice mitochondriale."
      },
      {
        "content": "La présence de H2O2 dans le peroxysome signifie que la catalase y est inutile.",
        "correct": false,
        "explanation": "La catalase est précisément essentielle au contrôle du H2O2."
      },
      {
        "content": "Peroxysomes et mitochondries participent tous deux au catabolisme des acides gras.",
        "correct": true,
        "explanation": "Leurs substrats préférentiels et leur couplage énergétique diffèrent."
      },
      {
        "content": "La β-oxydation mitochondriale est couplée indirectement à la production d’ATP via la chaîne respiratoire.",
        "correct": true,
        "explanation": "Les équivalents réducteurs alimentent la phosphorylation oxydative."
      },
      {
        "content": "Toutes les protéines des peroxysomes transitent obligatoirement par le Golgi avant leur import.",
        "correct": false,
        "explanation": "Les protéines matricielles sont importées directement depuis le cytosol."
      },
      {
        "content": "La β-oxydation peroxysomale forme du H2O2 lors de la première oxydation.",
        "correct": true,
        "explanation": "L’acyl-CoA oxydase transfère directement les électrons à O2."
      },
      {
        "content": "Les lysosomes sont des compartiments acides riches en hydrolases.",
        "correct": true,
        "explanation": "Leur pH bas est maintenu notamment par la V-ATPase."
      }
    ],
    "explanation": "Le peroxysome est un organite à membrane unique sans génome, spécialisé notamment dans des oxydations ; il se distingue des mitochondries à double membrane et des lysosomes acides du système endomembranaire.",
    "requiredSelectionCount": 5
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l’adressage et l’import des protéines peroxysomales, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le peroxysome peut importer certaines protéines déjà repliées, voire oligomériques.",
        "correct": true,
        "explanation": "Cette capacité distingue l’import peroxysomal de plusieurs autres systèmes de translocation."
      },
      {
        "content": "Les peroxines sont des protéines impliquées dans la biogenèse et l’import peroxysomaux.",
        "correct": true,
        "explanation": "Le préfixe PEX désigne de nombreuses protéines de cette machinerie."
      },
      {
        "content": "L’import PTS1 est cotraductionnel sur des ribosomes fixés à la membrane peroxysomale.",
        "correct": false,
        "explanation": "Il est essentiellement post-traductionnel à partir de protéines synthétisées dans le cytosol."
      },
      {
        "content": "PEX19 participe à l’adressage de nombreuses protéines de membrane peroxysomale.",
        "correct": true,
        "explanation": "PEX19 agit comme chaperonne/récepteur de protéines membranaires peroxysomales."
      },
      {
        "content": "PEX3 constitue un point d’ancrage important pour l’insertion de protéines membranaires peroxysomales.",
        "correct": true,
        "explanation": "PEX3 coopère notamment avec PEX19 dans la biogenèse membranaire."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel processus affectant la myéline caractérise les formes cérébrales sévères d’adrénoleucodystrophie liée à l’X ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "démyélinisation",
        "demyelinisation"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les formes cérébrales inflammatoires provoquent une démyélinisation progressive de la substance blanche."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant le thème suivant — les oxydases, la catalase et le peroxyde d’hydrogène — retenez exactement deux affirmations justes.",
    "choices": [
      {
        "content": "L’acyl-CoA oxydase est une enzyme clé de la première étape de la β-oxydation peroxysomale.",
        "correct": true,
        "explanation": "Elle transfère les électrons du FADH2 directement à O2, formant H2O2."
      },
      {
        "content": "L’acyl-CoA oxydase peroxysomale transfère ses électrons directement à la chaîne respiratoire mitochondriale.",
        "correct": false,
        "explanation": "Elle transfère directement les électrons à O2 et produit du H2O2."
      },
      {
        "content": "La catalase est une protéine spécifique des lysosomes.",
        "correct": false,
        "explanation": "Elle est emblématique de la matrice peroxysomale."
      },
      {
        "content": "La β-oxydation peroxysomale n’est pas directement couplée à une chaîne respiratoire productrice d’ATP.",
        "correct": true,
        "explanation": "L’énergie de la première oxydation est en partie dissipée sous forme de chaleur via la formation de H2O2."
      },
      {
        "content": "Les transporteurs ABC utilisent exclusivement du GTP.",
        "correct": false,
        "explanation": "Ils utilisent l’ATP."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le thème suivant — les maladies peroxysomales — quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La maladie de Refsum est liée à un défaut du catabolisme peroxysomal de l’acide phytanique.",
        "correct": true,
        "explanation": "Un défaut d’α-oxydation provoque l’accumulation de phytanate."
      },
      {
        "content": "Le spectre de Zellweger est provoqué par un déficit isolé de catalase sans défaut de biogenèse.",
        "correct": false,
        "explanation": "Il résulte de mutations de gènes PEX impliqués dans la biogenèse peroxysomale."
      },
      {
        "content": "Le spectre de Zellweger est une maladie lysosomale due à LAMP2A.",
        "correct": false,
        "explanation": "Il s’agit d’un trouble de biogenèse peroxysomale."
      },
      {
        "content": "Le spectre de Zellweger est habituellement transmis sur un mode lié à l’X.",
        "correct": false,
        "explanation": "Il est généralement autosomique récessif."
      },
      {
        "content": "La maladie de Refsum classique est habituellement autosomique récessive.",
        "correct": true,
        "explanation": "Elle est souvent liée à des variants bialléliques de PHYH."
      }
    ],
    "explanation": "Les maladies peroxysomales comprennent des défauts de biogenèse, comme le spectre de Zellweger, et des défauts de protéines spécifiques, comme l’adrénoleucodystrophie liée à l’X due à ABCD1."
  }
];
