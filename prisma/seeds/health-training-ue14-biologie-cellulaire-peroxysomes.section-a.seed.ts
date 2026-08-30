import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch6 — Peroxysomes — Identité, morphologie, biogenèse et adressage — V2 active */
export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l’organisation générale et la dynamique des peroxysomes, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Les peroxysomes sont des organites fortement acides comparables aux lysosomes.",
        "correct": false,
        "explanation": "Leur fonction ne repose pas sur un lumen acidifié par V-ATPase comme les lysosomes."
      },
      {
        "content": "Les peroxysomes n’appartiennent pas au système endomembranaire classique.",
        "correct": true,
        "explanation": "Ils ne constituent pas un compartiment de la voie sécrétoire RE–Golgi–endosomes."
      },
      {
        "content": "Un peroxysome est entouré de deux membranes comme une mitochondrie.",
        "correct": false,
        "explanation": "Il est entouré d’une seule membrane."
      },
      {
        "content": "Les peroxysomes possèdent un ADN circulaire autonome.",
        "correct": false,
        "explanation": "Ils ne contiennent pas de génome propre."
      },
      {
        "content": "La forme et le nombre des peroxysomes peuvent varier selon l’état métabolique de la cellule.",
        "correct": true,
        "explanation": "Le réseau peroxysomal est dynamique et s’adapte aux besoins cellulaires."
      }
    ],
    "explanation": "Les peroxysomes sont des organites à membrane unique, sans génome ni ribosomes, dynamiques et distincts du système endomembranaire."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur l’adressage et l’import des protéines peroxysomales, laquelle est exacte ?",
    "choices": [
      {
        "content": "PTS2 est un motif C-terminal reconnu par PEX5.",
        "correct": false,
        "explanation": "PTS2 est N-terminal et reconnu principalement par PEX7."
      },
      {
        "content": "Le récepteur PEX5 est recyclé vers le cytosol après la livraison du cargo.",
        "correct": true,
        "explanation": "Son recyclage dépend d’une machinerie ATP-dépendante impliquant notamment PEX1 et PEX6."
      },
      {
        "content": "L’adressage peroxysomal nécessite une N-glycosylation préalable dans le Golgi.",
        "correct": false,
        "explanation": "Les protéines matricielles sont importées directement depuis le cytosol sans passage obligatoire par le Golgi."
      },
      {
        "content": "PTS1 est un peptide signal N-terminal clivé par la signal peptidase du RE.",
        "correct": false,
        "explanation": "PTS1 est typiquement C-terminal et n’utilise pas la signal peptidase du RE."
      },
      {
        "content": "PEX5 est un récepteur lysosomal du mannose-6-phosphate.",
        "correct": false,
        "explanation": "PEX5 est un récepteur d’import peroxysomal des cargos PTS1."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de membranes délimitent un peroxysome ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "une",
        "1",
        "une membrane",
        "une seule membrane"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le peroxysome est limité par une membrane unique."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le thème suivant — l’adressage et l’import des protéines peroxysomales — quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "PEX19 participe à l’adressage de nombreuses protéines de membrane peroxysomale.",
        "correct": true,
        "explanation": "PEX19 agit comme chaperonne/récepteur de protéines membranaires peroxysomales."
      },
      {
        "content": "PEX19 est une hydrolase de la matrice lysosomale.",
        "correct": false,
        "explanation": "PEX19 intervient dans l’adressage de protéines membranaires peroxysomales."
      },
      {
        "content": "PEX3 constitue un point d’ancrage important pour l’insertion de protéines membranaires peroxysomales.",
        "correct": true,
        "explanation": "PEX3 coopère notamment avec PEX19 dans la biogenèse membranaire."
      },
      {
        "content": "Le récepteur PEX5 reste définitivement piégé dans la matrice après chaque import.",
        "correct": false,
        "explanation": "PEX5 est recyclé vers le cytosol."
      },
      {
        "content": "Le récepteur PEX5 est recyclé vers le cytosol après la livraison du cargo.",
        "correct": true,
        "explanation": "Son recyclage dépend d’une machinerie ATP-dépendante impliquant notamment PEX1 et PEX6."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Pour le thème suivant — l’organisation générale et la dynamique des peroxysomes — identifiez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La dégradation des peroxysomes se fait exclusivement par le protéasome cytosolique.",
        "correct": false,
        "explanation": "L’élimination de l’organite entier peut se faire par pexophagie puis voie lysosomale."
      },
      {
        "content": "Les peroxysomes ne possèdent pas de génome propre.",
        "correct": true,
        "explanation": "Leurs protéines sont codées par le génome nucléaire puis importées."
      },
      {
        "content": "La membrane peroxysomale porte une chaîne respiratoire assurant la phosphorylation oxydative.",
        "correct": false,
        "explanation": "La phosphorylation oxydative est mitochondriale ; le peroxysome ne possède pas de chaîne respiratoire complète."
      },
      {
        "content": "Les peroxysomes ne possèdent pas de ribosomes propres.",
        "correct": true,
        "explanation": "La synthèse de leurs protéines a lieu sur des ribosomes cytosoliques."
      },
      {
        "content": "Les peroxysomes possèdent des crêtes membranaires comparables aux crêtes mitochondriales.",
        "correct": false,
        "explanation": "Ils n’ont pas d’organisation interne en crêtes mitochondriales."
      }
    ],
    "explanation": "Les peroxysomes sont des organites à membrane unique, sans génome ni ribosomes, dynamiques et distincts du système endomembranaire.",
    "requiredSelectionCount": 2
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi ces propositions relatives au thème suivant, lesquelles sont correctes : l’adressage et l’import des protéines peroxysomales ?",
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
        "content": "PEX19 participe à l’adressage de nombreuses protéines de membrane peroxysomale.",
        "correct": true,
        "explanation": "PEX19 agit comme chaperonne/récepteur de protéines membranaires peroxysomales."
      },
      {
        "content": "PEX3 constitue un point d’ancrage important pour l’insertion de protéines membranaires peroxysomales.",
        "correct": true,
        "explanation": "PEX3 coopère notamment avec PEX19 dans la biogenèse membranaire."
      },
      {
        "content": "Le motif SKL est un signal d’adressage vers le noyau.",
        "correct": false,
        "explanation": "SKL est le prototype du PTS1 peroxysomal."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Repérez l’unique affirmation exacte concernant le thème suivant : l’organisation générale et la dynamique des peroxysomes.",
    "choices": [
      {
        "content": "Un peroxysome est limité par une seule membrane.",
        "correct": true,
        "explanation": "Sa membrane unique sépare la matrice peroxysomale du cytosol."
      },
      {
        "content": "Un peroxysome ne peut apparaître que par bourgeonnement d’un lysosome.",
        "correct": false,
        "explanation": "La biogenèse implique la croissance/division de peroxysomes et des voies de novo liées notamment au RE."
      },
      {
        "content": "Les peroxysomes sont des organites statiques dont le nombre ne varie pas.",
        "correct": false,
        "explanation": "Leur nombre et leur morphologie s’adaptent au contexte cellulaire."
      },
      {
        "content": "La dégradation des peroxysomes se fait exclusivement par le protéasome cytosolique.",
        "correct": false,
        "explanation": "L’élimination de l’organite entier peut se faire par pexophagie puis voie lysosomale."
      },
      {
        "content": "La membrane peroxysomale porte une chaîne respiratoire assurant la phosphorylation oxydative.",
        "correct": false,
        "explanation": "La phosphorylation oxydative est mitochondriale ; le peroxysome ne possède pas de chaîne respiratoire complète."
      }
    ],
    "explanation": "Les peroxysomes sont des organites à membrane unique, sans génome ni ribosomes, dynamiques et distincts du système endomembranaire."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Les peroxysomes possèdent-ils un génome propre ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non ils ne possèdent pas de génome",
        "absence de génome"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les protéines peroxysomales sont codées par le génome nucléaire puis importées."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRPL",
    "question": "Identifiez exactement cinq propositions exactes concernant le thème suivant : l’organisation générale et la dynamique des peroxysomes.",
    "choices": [
      {
        "content": "Toutes les cellules eucaryotes, sans exception, conservent des peroxysomes à l’état mature.",
        "correct": false,
        "explanation": "Certaines cellules spécialisées, notamment les hématies humaines matures, n’en possèdent pas."
      },
      {
        "content": "La lumière peroxysomale est en continuité physique directe avec celle du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Les peroxysomes sont des compartiments distincts du RE."
      },
      {
        "content": "Un peroxysome ne peut apparaître que par bourgeonnement d’un lysosome.",
        "correct": false,
        "explanation": "La biogenèse implique la croissance/division de peroxysomes et des voies de novo liées notamment au RE."
      },
      {
        "content": "Les peroxysomes sont des organites statiques dont le nombre ne varie pas.",
        "correct": false,
        "explanation": "Leur nombre et leur morphologie s’adaptent au contexte cellulaire."
      },
      {
        "content": "Les déplacements peroxysomaux utilisent le cytosquelette.",
        "correct": true,
        "explanation": "Leur distribution intracellulaire est couplée aux systèmes de transport cytosquelettiques."
      },
      {
        "content": "La dégradation des peroxysomes se fait exclusivement par le protéasome cytosolique.",
        "correct": false,
        "explanation": "L’élimination de l’organite entier peut se faire par pexophagie puis voie lysosomale."
      },
      {
        "content": "Les hépatocytes peuvent contenir un grand nombre de peroxysomes.",
        "correct": true,
        "explanation": "Le foie possède une activité importante de métabolisme lipidique et de détoxification."
      },
      {
        "content": "Un peroxysome est limité par une seule membrane.",
        "correct": true,
        "explanation": "Sa membrane unique sépare la matrice peroxysomale du cytosol."
      },
      {
        "content": "Les peroxysomes ne possèdent pas de génome propre.",
        "correct": true,
        "explanation": "Leurs protéines sont codées par le génome nucléaire puis importées."
      },
      {
        "content": "Les peroxysomes ne possèdent pas de ribosomes propres.",
        "correct": true,
        "explanation": "La synthèse de leurs protéines a lieu sur des ribosomes cytosoliques."
      }
    ],
    "explanation": "Les peroxysomes sont des organites à membrane unique, sans génome ni ribosomes, dynamiques et distincts du système endomembranaire.",
    "requiredSelectionCount": 5
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour le thème suivant — l’adressage et l’import des protéines peroxysomales — quelles affirmations sont exactes ?",
    "choices": [
      {
        "content": "Le motif SKL constitue un exemple classique de signal PTS1.",
        "correct": true,
        "explanation": "SKL correspond à sérine–lysine–leucine en extrémité C-terminale."
      },
      {
        "content": "La translocation des protéines peroxysomales utilise le canal Sec61 du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Sec61 appartient à la translocation dans le RE, pas à l’import matriciel peroxysomal."
      },
      {
        "content": "Les protéines matricielles peroxysomales doivent obligatoirement être totalement dépliées avant l’import.",
        "correct": false,
        "explanation": "Certaines protéines repliées ou oligomériques peuvent être importées."
      },
      {
        "content": "Le signal PTS2 est N-terminal et reconnu principalement par PEX7.",
        "correct": true,
        "explanation": "PTS2 concerne une sous-population de protéines matricielles peroxysomales."
      },
      {
        "content": "L’import PTS1 est cotraductionnel sur des ribosomes fixés à la membrane peroxysomale.",
        "correct": false,
        "explanation": "Il est essentiellement post-traductionnel à partir de protéines synthétisées dans le cytosol."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions doivent être retenues comme exactes pour le thème suivant : l’organisation générale et la dynamique des peroxysomes ?",
    "choices": [
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
        "content": "Les déplacements peroxysomaux utilisent le cytosquelette.",
        "correct": true,
        "explanation": "Leur distribution intracellulaire est couplée aux systèmes de transport cytosquelettiques."
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
      }
    ],
    "explanation": "Les peroxysomes sont des organites à membrane unique, sans génome ni ribosomes, dynamiques et distincts du système endomembranaire."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans quel compartiment cellulaire sont synthétisées la plupart des protéines matricielles peroxysomales avant leur import ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cytosol",
        "dans le cytosol",
        "cytoplasme"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Elles sont synthétisées sur des ribosomes cytosoliques puis importées post-traductionnellement."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos du thème suivant, quelle proposition est correcte : l’organisation générale et la dynamique des peroxysomes ?",
    "choices": [
      {
        "content": "La forme et le nombre des peroxysomes peuvent varier selon l’état métabolique de la cellule.",
        "correct": true,
        "explanation": "Le réseau peroxysomal est dynamique et s’adapte aux besoins cellulaires."
      },
      {
        "content": "Les peroxysomes possèdent un ADN circulaire autonome.",
        "correct": false,
        "explanation": "Ils ne contiennent pas de génome propre."
      },
      {
        "content": "Les peroxysomes synthétisent leurs protéines grâce à des ribosomes intraperoxysomaux.",
        "correct": false,
        "explanation": "Ils ne possèdent pas de ribosomes ; leurs protéines sont synthétisées dans le cytosol."
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
      }
    ],
    "explanation": "Les peroxysomes sont des organites à membrane unique, sans génome ni ribosomes, dynamiques et distincts du système endomembranaire."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles affirmations sont correctes à propos du thème suivant : l’adressage et l’import des protéines peroxysomales ?",
    "choices": [
      {
        "content": "PTS1 est un peptide signal N-terminal clivé par la signal peptidase du RE.",
        "correct": false,
        "explanation": "PTS1 est typiquement C-terminal et n’utilise pas la signal peptidase du RE."
      },
      {
        "content": "La majorité des protéines matricielles peroxysomales sont synthétisées sur des ribosomes libres du cytosol.",
        "correct": true,
        "explanation": "Elles sont ensuite reconnues par des récepteurs d’import peroxysomaux."
      },
      {
        "content": "Le signal PTS1 est généralement situé à l’extrémité C-terminale de la protéine.",
        "correct": true,
        "explanation": "Le tripeptide de type SKL est le prototype classique du PTS1."
      },
      {
        "content": "PEX5 est le récepteur cytosolique principal des cargos portant un PTS1.",
        "correct": true,
        "explanation": "PEX5 lie le cargo dans le cytosol puis l’amène vers la machinerie d’import membranaire."
      },
      {
        "content": "Le motif SKL constitue un exemple classique de signal PTS1.",
        "correct": true,
        "explanation": "SKL correspond à sérine–lysine–leucine en extrémité C-terminale."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel récepteur reconnaît principalement les protéines portant un signal PTS1 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "PEX5",
        "pex5"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "PEX5 reconnaît les cargos PTS1 dans le cytosol et les adresse au peroxysome."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions scientifiquement correctes pour le thème suivant : l’adressage et l’import des protéines peroxysomales.",
    "choices": [
      {
        "content": "Le récepteur PEX5 est recyclé vers le cytosol après la livraison du cargo.",
        "correct": true,
        "explanation": "Son recyclage dépend d’une machinerie ATP-dépendante impliquant notamment PEX1 et PEX6."
      },
      {
        "content": "L’adressage peroxysomal nécessite une N-glycosylation préalable dans le Golgi.",
        "correct": false,
        "explanation": "Les protéines matricielles sont importées directement depuis le cytosol sans passage obligatoire par le Golgi."
      },
      {
        "content": "PTS1 est un peptide signal N-terminal clivé par la signal peptidase du RE.",
        "correct": false,
        "explanation": "PTS1 est typiquement C-terminal et n’utilise pas la signal peptidase du RE."
      },
      {
        "content": "Le signal PTS1 reste généralement présent dans la protéine mature.",
        "correct": true,
        "explanation": "Contrairement à de nombreux peptides signaux du RE, il n’est pas systématiquement clivé."
      },
      {
        "content": "PEX5 est un récepteur lysosomal du mannose-6-phosphate.",
        "correct": false,
        "explanation": "PEX5 est un récepteur d’import peroxysomal des cargos PTS1."
      }
    ],
    "explanation": "Les protéines matricielles peroxysomales sont synthétisées dans le cytosol puis importées grâce aux signaux PTS et aux peroxines, notamment PEX5 et PEX7.",
    "requiredSelectionCount": 2
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l’organisation générale et la dynamique des peroxysomes, quelles propositions sont incorrectes ?",
    "choices": [
      {
        "content": "Les déplacements peroxysomaux utilisent le cytosquelette.",
        "correct": false,
        "explanation": "Leur distribution intracellulaire est couplée aux systèmes de transport cytosquelettiques."
      },
      {
        "content": "Les peroxysomes sont des citernes spécialisées de l’appareil de Golgi.",
        "correct": true,
        "explanation": "Ils sont distincts du Golgi et du système endomembranaire classique."
      },
      {
        "content": "Les hépatocytes peuvent contenir un grand nombre de peroxysomes.",
        "correct": false,
        "explanation": "Le foie possède une activité importante de métabolisme lipidique et de détoxification."
      },
      {
        "content": "Toutes les cellules eucaryotes, sans exception, conservent des peroxysomes à l’état mature.",
        "correct": true,
        "explanation": "Certaines cellules spécialisées, notamment les hématies humaines matures, n’en possèdent pas."
      },
      {
        "content": "Un peroxysome est limité par une seule membrane.",
        "correct": false,
        "explanation": "Sa membrane unique sépare la matrice peroxysomale du cytosol."
      }
    ],
    "explanation": "Les peroxysomes sont des organites à membrane unique, sans génome ni ribosomes, dynamiques et distincts du système endomembranaire."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi ces cinq affirmations, laquelle est correcte sur le thème suivant : l’adressage et l’import des protéines peroxysomales ?",
    "choices": [
      {
        "content": "Le récepteur PEX5 reste définitivement piégé dans la matrice après chaque import.",
        "correct": false,
        "explanation": "PEX5 est recyclé vers le cytosol."
      },
      {
        "content": "PTS2 est un motif C-terminal reconnu par PEX5.",
        "correct": false,
        "explanation": "PTS2 est N-terminal et reconnu principalement par PEX7."
      },
      {
        "content": "L’adressage peroxysomal nécessite une N-glycosylation préalable dans le Golgi.",
        "correct": false,
        "explanation": "Les protéines matricielles sont importées directement depuis le cytosol sans passage obligatoire par le Golgi."
      },
      {
        "content": "PEX19 participe à l’adressage de nombreuses protéines de membrane peroxysomale.",
        "correct": true,
        "explanation": "PEX19 agit comme chaperonne/récepteur de protéines membranaires peroxysomales."
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
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement le thème suivant : l’organisation générale et la dynamique des peroxysomes ?",
    "choices": [
      {
        "content": "Les peroxysomes ne possèdent pas de génome propre.",
        "correct": true,
        "explanation": "Leurs protéines sont codées par le génome nucléaire puis importées."
      },
      {
        "content": "Les peroxysomes ne possèdent pas de ribosomes propres.",
        "correct": true,
        "explanation": "La synthèse de leurs protéines a lieu sur des ribosomes cytosoliques."
      },
      {
        "content": "La dégradation des peroxysomes se fait exclusivement par le protéasome cytosolique.",
        "correct": false,
        "explanation": "L’élimination de l’organite entier peut se faire par pexophagie puis voie lysosomale."
      },
      {
        "content": "Les peroxysomes sont des organites cytoplasmiques présents dans de nombreux types cellulaires eucaryotes.",
        "correct": true,
        "explanation": "Ils sont particulièrement abondants dans certains tissus métaboliquement actifs, comme le foie."
      },
      {
        "content": "La membrane peroxysomale porte une chaîne respiratoire assurant la phosphorylation oxydative.",
        "correct": false,
        "explanation": "La phosphorylation oxydative est mitochondriale ; le peroxysome ne possède pas de chaîne respiratoire complète."
      }
    ],
    "explanation": "Les peroxysomes sont des organites à membrane unique, sans génome ni ribosomes, dynamiques et distincts du système endomembranaire."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel tripeptide C-terminal est le prototype classique d’un signal PTS1 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "SKL",
        "Ser-Lys-Leu",
        "sérine lysine leucine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le motif SKL est le prototype du PTS1 reconnu par PEX5."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Sur le thème suivant — l’organisation générale et la dynamique des peroxysomes — quelle affirmation est juste ?",
    "choices": [
      {
        "content": "Les peroxysomes sont des organites statiques dont le nombre ne varie pas.",
        "correct": false,
        "explanation": "Leur nombre et leur morphologie s’adaptent au contexte cellulaire."
      },
      {
        "content": "La dégradation des peroxysomes se fait exclusivement par le protéasome cytosolique.",
        "correct": false,
        "explanation": "L’élimination de l’organite entier peut se faire par pexophagie puis voie lysosomale."
      },
      {
        "content": "La membrane peroxysomale porte une chaîne respiratoire assurant la phosphorylation oxydative.",
        "correct": false,
        "explanation": "La phosphorylation oxydative est mitochondriale ; le peroxysome ne possède pas de chaîne respiratoire complète."
      },
      {
        "content": "Un peroxysome est limité par une seule membrane.",
        "correct": true,
        "explanation": "Sa membrane unique sépare la matrice peroxysomale du cytosol."
      },
      {
        "content": "Les peroxysomes possèdent des crêtes membranaires comparables aux crêtes mitochondriales.",
        "correct": false,
        "explanation": "Ils n’ont pas d’organisation interne en crêtes mitochondriales."
      }
    ],
    "explanation": "Les peroxysomes sont des organites à membrane unique, sans génome ni ribosomes, dynamiques et distincts du système endomembranaire."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment nomme-t-on l’autophagie sélective des peroxysomes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "pexophagie",
        "pexophagy"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La pexophagie élimine sélectivement des peroxysomes devenus inutiles ou endommagés."
  }
];

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "peroxysomes-1",
    "title": "Peroxysomes : repères essentiels",
    "description": "Découvrir : peroxysomes : repères essentiels.",
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
    "slug": "peroxysomes-2",
    "title": "Biogenèse et adressage peroxysomal",
    "description": "Approfondir : biogenèse et adressage peroxysomal.",
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
