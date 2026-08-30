import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch6 — Synthèse transversale */
export const UE14_BIOCELL_CH6_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Identifiez les affirmations justes sur le thème suivant : les différences entre peroxysomes, mitochondries, lysosomes et système endomembranaire.",
    "choices": [
      {
        "content": "La β-oxydation mitochondriale est couplée indirectement à la production d’ATP via la chaîne respiratoire.",
        "correct": true,
        "explanation": "Les équivalents réducteurs alimentent la phosphorylation oxydative."
      },
      {
        "content": "Le peroxysome appartient à la voie sécrétoire RE–Golgi au même titre qu’un lysosome.",
        "correct": false,
        "explanation": "Il ne fait pas partie du système endomembranaire classique."
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
        "content": "La catalase est l’hydrolase acide principale du lysosome.",
        "correct": false,
        "explanation": "La catalase est surtout peroxysomale ; les lysosomes contiennent des hydrolases acides."
      }
    ],
    "explanation": "Le peroxysome est un organite à membrane unique sans génome, spécialisé notamment dans des oxydations ; il se distingue des mitochondries à double membrane et des lysosomes acides du système endomembranaire."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Le peroxysome possède-t-il un ADN propre comme la mitochondrie ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "À la différence de la mitochondrie, le peroxysome ne possède pas de génome."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Repérez l’unique affirmation exacte concernant le thème suivant : l’adressage et l’import des protéines peroxysomales.",
    "choices": [
      {
        "content": "PEX5 est un récepteur lysosomal du mannose-6-phosphate.",
        "correct": false,
        "explanation": "PEX5 est un récepteur d’import peroxysomal des cargos PTS1."
      },
      {
        "content": "PEX7 reconnaît principalement le motif KDEL.",
        "correct": false,
        "explanation": "PEX7 reconnaît le signal PTS2 ; KDEL concerne la récupération de protéines du RE."
      },
      {
        "content": "Toutes les protéines peroxysomales sont codées par un ADN peroxysomal.",
        "correct": false,
        "explanation": "Le peroxysome n’a pas de génome propre."
      },
      {
        "content": "La translocation des protéines peroxysomales utilise le canal Sec61 du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Sec61 appartient à la translocation dans le RE, pas à l’import matriciel peroxysomal."
      },
      {
        "content": "Le signal PTS1 est généralement situé à l’extrémité C-terminale de la protéine.",
        "correct": true,
        "explanation": "Le tripeptide de type SKL est le prototype classique du PTS1."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sélectionnez toutes les affirmations exactes concernant le thème suivant : les oxydases, la catalase et le peroxyde d’hydrogène.",
    "choices": [
      {
        "content": "La β-oxydation peroxysomale n’est pas directement couplée à une chaîne respiratoire productrice d’ATP.",
        "correct": true,
        "explanation": "L’énergie de la première oxydation est en partie dissipée sous forme de chaleur via la formation de H2O2."
      },
      {
        "content": "La catalase peut aussi exercer une activité peroxydatique sur certains substrats.",
        "correct": true,
        "explanation": "Elle peut utiliser H2O2 pour oxyder certains donneurs d’électrons."
      },
      {
        "content": "La catalase a pour rôle principal de produire du H2O2 à partir d’eau.",
        "correct": false,
        "explanation": "Elle consomme surtout le H2O2 et le convertit en eau et O2."
      },
      {
        "content": "Chez l’humain, l’alcool déshydrogénase et CYP2E1 sont des voies majeures du métabolisme de l’éthanol.",
        "correct": true,
        "explanation": "La contribution de la catalase existe mais n’est pas la voie quantitativement principale habituelle."
      },
      {
        "content": "La compartimentation peroxysomale rapproche enzymes productrices et consommatrices de H2O2.",
        "correct": true,
        "explanation": "Cette organisation favorise le contrôle local des espèces réactives de l’oxygène."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Les hématies humaines matures possèdent-elles des peroxysomes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les hématies matures ont perdu leurs organites intracellulaires."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sur le thème suivant, deux affirmations seulement sont exactes ; sélectionnez-les : les autres fonctions métaboliques et leur régulation.",
    "choices": [
      {
        "content": "PPARα est un récepteur nucléaire impliqué dans la régulation de gènes du métabolisme lipidique.",
        "correct": true,
        "explanation": "Son activation modifie la transcription de nombreux gènes d’oxydation des acides gras."
      },
      {
        "content": "Tous les mammifères sont dépourvus d’urate oxydase.",
        "correct": false,
        "explanation": "De nombreuses espèces mammifères possèdent une uricase fonctionnelle."
      },
      {
        "content": "Chez l’humain, l’urate oxydase convertit normalement l’acide urique en allantoïne.",
        "correct": false,
        "explanation": "L’humain ne possède pas d’urate oxydase fonctionnelle."
      },
      {
        "content": "Les fibrates sont des agonistes pharmacologiques de PPARα.",
        "correct": true,
        "explanation": "Ils sont utilisés notamment pour réduire les triglycérides plasmatiques."
      },
      {
        "content": "L’adénine et la guanine sont des bases pyrimidiques.",
        "correct": false,
        "explanation": "Ce sont des bases puriques."
      }
    ],
    "explanation": "Les peroxysomes participent à plusieurs voies métaboliques ; chez l’humain, l’absence d’urate oxydase fait de l’acide urique le produit final majeur du catabolisme des purines, et PPARα régule de nombreux gènes du métabolisme lipidique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions doivent être retenues comme exactes pour le thème suivant : les maladies peroxysomales ?",
    "choices": [
      {
        "content": "La maladie de Refsum est liée à un défaut du catabolisme peroxysomal de l’acide phytanique.",
        "correct": true,
        "explanation": "Un défaut d’α-oxydation provoque l’accumulation de phytanate."
      },
      {
        "content": "Un défaut de β-oxydation peroxysomale améliore nécessairement la myélinisation.",
        "correct": false,
        "explanation": "L’accumulation lipidique peut au contraire être associée à une atteinte de la myéline."
      },
      {
        "content": "La maladie de Refsum classique est habituellement autosomique récessive.",
        "correct": true,
        "explanation": "Elle est souvent liée à des variants bialléliques de PHYH."
      },
      {
        "content": "Les gènes PEX sont portés par le génome peroxysomal.",
        "correct": false,
        "explanation": "Le peroxysome n’a pas de génome ; les gènes PEX sont nucléaires."
      },
      {
        "content": "L’adrénoleucodystrophie liée à l’X est due à une mutation de l’ADN mitochondrial.",
        "correct": false,
        "explanation": "Elle est due au gène nucléaire ABCD1 situé sur le chromosome X."
      }
    ],
    "explanation": "Les maladies peroxysomales comprennent des défauts de biogenèse, comme le spectre de Zellweger, et des défauts de protéines spécifiques, comme l’adrénoleucodystrophie liée à l’X due à ABCD1."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi ces propositions relatives au thème suivant, laquelle est correcte : les différences entre peroxysomes, mitochondries, lysosomes et système endomembranaire ?",
    "choices": [
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
        "content": "Le peroxysome et la mitochondrie possèdent tous deux un ADN circulaire propre.",
        "correct": false,
        "explanation": "Seule la mitochondrie possède un génome propre parmi ces deux organites."
      }
    ],
    "explanation": "Le peroxysome est un organite à membrane unique sans génome, spécialisé notamment dans des oxydations ; il se distingue des mitochondries à double membrane et des lysosomes acides du système endomembranaire."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l’organisation générale et la dynamique des peroxysomes, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La dégradation des peroxysomes se fait exclusivement par le protéasome cytosolique.",
        "correct": false,
        "explanation": "L’élimination de l’organite entier peut se faire par pexophagie puis voie lysosomale."
      },
      {
        "content": "Une biogenèse de novo à partir de précurseurs membranaires liés notamment au RE est possible.",
        "correct": true,
        "explanation": "La biogenèse ne dépend pas exclusivement de la division d’un peroxysome préexistant."
      },
      {
        "content": "Les peroxysomes peuvent être éliminés sélectivement par pexophagie.",
        "correct": true,
        "explanation": "La pexophagie est une forme d’autophagie sélective dirigée contre les peroxysomes."
      },
      {
        "content": "La membrane peroxysomale porte une chaîne respiratoire assurant la phosphorylation oxydative.",
        "correct": false,
        "explanation": "La phosphorylation oxydative est mitochondriale ; le peroxysome ne possède pas de chaîne respiratoire complète."
      },
      {
        "content": "Les déplacements peroxysomaux utilisent le cytosquelette.",
        "correct": true,
        "explanation": "Leur distribution intracellulaire est couplée aux systèmes de transport cytosquelettiques."
      }
    ],
    "explanation": "Les peroxysomes sont des organites à membrane unique, sans génome ni ribosomes, dynamiques et distincts du système endomembranaire."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel récepteur reconnaît principalement les cargos porteurs d’un signal PTS2 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PEX7",
        "pex7"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "PEX7 reconnaît le signal PTS2 N-terminal de certaines protéines matricielles."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Sélectionnez les propositions exactes sur le thème suivant : les oxydases, la catalase et le peroxyde d’hydrogène.",
    "choices": [
      {
        "content": "La β-oxydation peroxysomale n’est pas directement couplée à une chaîne respiratoire productrice d’ATP.",
        "correct": true,
        "explanation": "L’énergie de la première oxydation est en partie dissipée sous forme de chaleur via la formation de H2O2."
      },
      {
        "content": "La catalase peut aussi exercer une activité peroxydatique sur certains substrats.",
        "correct": true,
        "explanation": "Elle peut utiliser H2O2 pour oxyder certains donneurs d’électrons."
      },
      {
        "content": "Chez l’humain, l’alcool déshydrogénase et CYP2E1 sont des voies majeures du métabolisme de l’éthanol.",
        "correct": true,
        "explanation": "La contribution de la catalase existe mais n’est pas la voie quantitativement principale habituelle."
      },
      {
        "content": "La compartimentation peroxysomale rapproche enzymes productrices et consommatrices de H2O2.",
        "correct": true,
        "explanation": "Cette organisation favorise le contrôle local des espèces réactives de l’oxygène."
      },
      {
        "content": "Chez l’humain, la catalase assure à elle seule la quasi-totalité du catabolisme hépatique de l’éthanol.",
        "correct": false,
        "explanation": "L’alcool déshydrogénase et CYP2E1 ont des rôles majeurs ; la catalase est minoritaire."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle propriété remarquable distingue l’import matriciel peroxysomal concernant l’état de repliement du cargo ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "import de protéines repliées",
        "protéines repliées",
        "peut importer des protéines repliées",
        "import de protéines déjà repliées"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le système d’import peroxysomal peut accepter certaines protéines déjà repliées, voire oligomériques."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Pour le thème suivant — les autres fonctions métaboliques et leur régulation — identifiez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "L’effet des fibrates se résume à fabriquer mécaniquement des milliers de peroxysomes chez l’humain.",
        "correct": false,
        "explanation": "Leur effet clinique repose surtout sur la régulation transcriptionnelle du métabolisme lipidique ; la prolifération massive est surtout observée chez certains rongeurs."
      },
      {
        "content": "L’urate est un produit du catabolisme des pyrimidines uniquement.",
        "correct": false,
        "explanation": "Il provient principalement du catabolisme des purines."
      },
      {
        "content": "PPARα est un récepteur nucléaire impliqué dans la régulation de gènes du métabolisme lipidique.",
        "correct": true,
        "explanation": "Son activation modifie la transcription de nombreux gènes d’oxydation des acides gras."
      },
      {
        "content": "Les fibrates sont des agonistes pharmacologiques de PPARα.",
        "correct": true,
        "explanation": "Ils sont utilisés notamment pour réduire les triglycérides plasmatiques."
      },
      {
        "content": "Une hyperuricémie protège de la formation de cristaux articulaires.",
        "correct": false,
        "explanation": "Elle augmente au contraire le risque de dépôts d’urate et de goutte."
      }
    ],
    "explanation": "Les peroxysomes participent à plusieurs voies métaboliques ; chez l’humain, l’absence d’urate oxydase fait de l’acide urique le produit final majeur du catabolisme des purines, et PPARα régule de nombreux gènes du métabolisme lipidique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les maladies peroxysomales, quelles propositions sont incorrectes ?",
    "choices": [
      {
        "content": "Un défaut de β-oxydation peroxysomale améliore nécessairement la myélinisation.",
        "correct": true,
        "explanation": "L’accumulation lipidique peut au contraire être associée à une atteinte de la myéline."
      },
      {
        "content": "ABCD1 participe au transport de substrats lipidiques à très longue chaîne vers le peroxysome.",
        "correct": false,
        "explanation": "Son déficit réduit leur entrée efficace dans la voie de β-oxydation peroxysomale."
      },
      {
        "content": "Les gènes PEX sont portés par le génome peroxysomal.",
        "correct": true,
        "explanation": "Le peroxysome n’a pas de génome ; les gènes PEX sont nucléaires."
      },
      {
        "content": "Le spectre de Zellweger correspond à des troubles de la biogenèse peroxysomale.",
        "correct": false,
        "explanation": "Des mutations de gènes PEX perturbent l’assemblage ou l’import de protéines peroxysomales."
      },
      {
        "content": "Les troubles du spectre de Zellweger sont le plus souvent transmis sur un mode autosomique récessif.",
        "correct": false,
        "explanation": "Ils sont dus à des variants bialléliques de gènes de biogenèse peroxysomale."
      }
    ],
    "explanation": "Les maladies peroxysomales comprennent des défauts de biogenèse, comme le spectre de Zellweger, et des défauts de protéines spécifiques, comme l’adrénoleucodystrophie liée à l’X due à ABCD1."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Repérez l’unique affirmation exacte concernant le thème suivant : les différences entre peroxysomes, mitochondries, lysosomes et système endomembranaire.",
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
        "content": "La mitochondrie est l’organite principal du marquage PTS1/PEX5.",
        "correct": false,
        "explanation": "PTS1/PEX5 correspond à l’adressage peroxysomal."
      },
      {
        "content": "La β-oxydation mitochondriale est couplée indirectement à la production d’ATP via la chaîne respiratoire.",
        "correct": true,
        "explanation": "Les équivalents réducteurs alimentent la phosphorylation oxydative."
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
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Sélectionnez toutes les affirmations exactes concernant le thème suivant : l’organisation générale et la dynamique des peroxysomes.",
    "choices": [
      {
        "content": "Une biogenèse de novo à partir de précurseurs membranaires liés notamment au RE est possible.",
        "correct": true,
        "explanation": "La biogenèse ne dépend pas exclusivement de la division d’un peroxysome préexistant."
      },
      {
        "content": "Les peroxysomes sont des citernes spécialisées de l’appareil de Golgi.",
        "correct": false,
        "explanation": "Ils sont distincts du Golgi et du système endomembranaire classique."
      },
      {
        "content": "Toutes les cellules eucaryotes, sans exception, conservent des peroxysomes à l’état mature.",
        "correct": false,
        "explanation": "Certaines cellules spécialisées, notamment les hématies humaines matures, n’en possèdent pas."
      },
      {
        "content": "Les peroxysomes peuvent être éliminés sélectivement par pexophagie.",
        "correct": true,
        "explanation": "La pexophagie est une forme d’autophagie sélective dirigée contre les peroxysomes."
      },
      {
        "content": "Les déplacements peroxysomaux utilisent le cytosquelette.",
        "correct": true,
        "explanation": "Leur distribution intracellulaire est couplée aux systèmes de transport cytosquelettiques."
      }
    ],
    "explanation": "Les peroxysomes sont des organites à membrane unique, sans génome ni ribosomes, dynamiques et distincts du système endomembranaire."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel métabolite s’accumule dans la maladie de Refsum classique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide phytanique",
        "phytanate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un défaut d’α-oxydation peroxysomale provoque l’accumulation d’acide phytanique."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Sur le thème suivant, cinq affirmations seulement sont exactes ; sélectionnez-les : les oxydases, la catalase et le peroxyde d’hydrogène.",
    "choices": [
      {
        "content": "Les oxydases peroxysomales détruisent toutes le H2O2 sans en former.",
        "correct": false,
        "explanation": "Plusieurs oxydases en génèrent au cours de leur réaction."
      },
      {
        "content": "Le H2O2 est chimiquement inerte et ne participe jamais au stress oxydant.",
        "correct": false,
        "explanation": "C’est une espèce réactive de l’oxygène pouvant contribuer aux dommages oxydatifs."
      },
      {
        "content": "La β-oxydation peroxysomale alimente directement une ATP synthase située dans la membrane peroxysomale.",
        "correct": false,
        "explanation": "Le peroxysome ne possède pas de phosphorylation oxydative comparable à la mitochondrie."
      },
      {
        "content": "La β-oxydation peroxysomale n’est pas directement couplée à une chaîne respiratoire productrice d’ATP.",
        "correct": true,
        "explanation": "L’énergie de la première oxydation est en partie dissipée sous forme de chaleur via la formation de H2O2."
      },
      {
        "content": "La catalase peut aussi exercer une activité peroxydatique sur certains substrats.",
        "correct": true,
        "explanation": "Elle peut utiliser H2O2 pour oxyder certains donneurs d’électrons."
      },
      {
        "content": "Chez l’humain, l’alcool déshydrogénase et CYP2E1 sont des voies majeures du métabolisme de l’éthanol.",
        "correct": true,
        "explanation": "La contribution de la catalase existe mais n’est pas la voie quantitativement principale habituelle."
      },
      {
        "content": "La compartimentation peroxysomale rapproche enzymes productrices et consommatrices de H2O2.",
        "correct": true,
        "explanation": "Cette organisation favorise le contrôle local des espèces réactives de l’oxygène."
      },
      {
        "content": "L’acyl-CoA oxydase peroxysomale transfère ses électrons directement à la chaîne respiratoire mitochondriale.",
        "correct": false,
        "explanation": "Elle transfère directement les électrons à O2 et produit du H2O2."
      },
      {
        "content": "Les transporteurs ABC de la membrane peroxysomale utilisent l’énergie de l’ATP.",
        "correct": true,
        "explanation": "ABC signifie ATP-Binding Cassette."
      },
      {
        "content": "La catalase est une protéine spécifique des lysosomes.",
        "correct": false,
        "explanation": "Elle est emblématique de la matrice peroxysomale."
      }
    ],
    "explanation": "Les oxydases peroxysomales transfèrent des électrons à l’oxygène et peuvent former du H2O2 ; la catalase le consomme et limite sa toxicité.",
    "requiredSelectionCount": 5
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions doivent être retenues comme exactes pour le thème suivant : les fonctions lipidiques des peroxysomes ?",
    "choices": [
      {
        "content": "La β-oxydation peroxysomale prend en charge préférentiellement des acides gras à très longue chaîne.",
        "correct": true,
        "explanation": "Elle raccourcit des substrats que la mitochondrie oxyde moins efficacement au départ."
      },
      {
        "content": "La β-oxydation peroxysomale raccourcit les chaînes carbonées par cycles successifs.",
        "correct": true,
        "explanation": "Elle produit des acyl-CoA plus courts et de l’acétyl-CoA."
      },
      {
        "content": "L’acétyl-CoA peut être produit lors de la β-oxydation peroxysomale.",
        "correct": true,
        "explanation": "Chaque cycle libère une unité à deux carbones sous forme d’acétyl-CoA."
      },
      {
        "content": "La β-oxydation peroxysomale est spécialisée exclusivement dans les acides gras à chaîne courte.",
        "correct": false,
        "explanation": "Elle intervient particulièrement pour les acides gras à très longue chaîne."
      },
      {
        "content": "Des produits raccourcis de la β-oxydation peroxysomale peuvent être transférés vers la mitochondrie.",
        "correct": true,
        "explanation": "La mitochondrie peut alors poursuivre leur oxydation énergétique."
      }
    ],
    "explanation": "Les peroxysomes raccourcissent notamment les acides gras à très longue chaîne, participent à la synthèse des plasmalogènes et à certaines étapes du métabolisme des acides biliaires."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel organite est éliminé lors de la pexophagie ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "peroxysome",
        "peroxysomes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La pexophagie est l’autophagie sélective des peroxysomes."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Sur le thème suivant — les maladies peroxysomales — choisissez exactement les deux propositions exactes.",
    "choices": [
      {
        "content": "Les gènes PEX sont portés par le génome peroxysomal.",
        "correct": false,
        "explanation": "Le peroxysome n’a pas de génome ; les gènes PEX sont nucléaires."
      },
      {
        "content": "L’adrénoleucodystrophie liée à l’X est due à une mutation de l’ADN mitochondrial.",
        "correct": false,
        "explanation": "Elle est due au gène nucléaire ABCD1 situé sur le chromosome X."
      },
      {
        "content": "La maladie de Refsum est liée à un défaut du catabolisme peroxysomal de l’acide phytanique.",
        "correct": true,
        "explanation": "Un défaut d’α-oxydation provoque l’accumulation de phytanate."
      },
      {
        "content": "La maladie de Refsum classique est habituellement autosomique récessive.",
        "correct": true,
        "explanation": "Elle est souvent liée à des variants bialléliques de PHYH."
      },
      {
        "content": "ABCD1 code une hydrolase lysosomale du mannose-6-phosphate.",
        "correct": false,
        "explanation": "ABCD1 est un transporteur ABC peroxysomal."
      }
    ],
    "explanation": "Les maladies peroxysomales comprennent des défauts de biogenèse, comme le spectre de Zellweger, et des défauts de protéines spécifiques, comme l’adrénoleucodystrophie liée à l’X due à ABCD1.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel organite assure les premières étapes de biosynthèse des plasmalogènes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "peroxysome",
        "peroxysomes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les premières réactions de la synthèse des plasmalogènes ont lieu dans le peroxysome avant relais par le RE."
  }
];
