import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch7 — Mitochondrie — Synthèse transversale — V2 active */
export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont correctes concernant l’organisation générale, l’origine et la dynamique mitochondriales ?",
    "choices": [
      {
        "content": "La matrice mitochondriale est séparée du cytosol par deux membranes.",
        "correct": true,
        "explanation": "Pour atteindre la matrice, il faut franchir la membrane externe puis la membrane interne."
      },
      {
        "content": "La membrane interne forme des crêtes qui augmentent sa surface.",
        "correct": true,
        "explanation": "Les crêtes mitochondriales accroissent la surface disponible pour la chaîne respiratoire et l’ATP synthase."
      },
      {
        "content": "Le noyau est le seul compartiment cellulaire entouré de deux bicouches lipidiques.",
        "correct": false,
        "explanation": "Les mitochondries possèdent aussi une double membrane ; chez les végétaux, les chloroplastes également."
      },
      {
        "content": "La mitochondrie est un organite à double membrane.",
        "correct": true,
        "explanation": "Elle possède une membrane externe et une membrane interne distinctes."
      },
      {
        "content": "Il est démontré que l’ancêtre mitochondrial était exactement l’espèce actuelle Rickettsia prowazekii.",
        "correct": false,
        "explanation": "L’ancêtre est rapproché des alphaprotéobactéries, mais il n’est pas identifié à une espèce actuelle unique."
      }
    ],
    "explanation": "La mitochondrie est un organite dynamique à double membrane, issu d’une endosymbiose ancienne et renouvelé par fusion, fission et mitophagie."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel phospholipide est particulièrement caractéristique de la membrane interne mitochondriale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cardiolipine",
        "la cardiolipine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La cardiolipine est abondante dans la membrane interne et soutient l’organisation des complexes respiratoires."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est exacte au sujet de la composition des membranes mitochondriales ?",
    "choices": [
      {
        "content": "La cardiolipine est un phospholipide caractéristique particulièrement abondant dans la membrane interne.",
        "correct": true,
        "explanation": "La cardiolipine contribue à l’organisation et au fonctionnement de protéines de la membrane interne."
      },
      {
        "content": "Les crêtes sont des replis de la membrane externe.",
        "correct": false,
        "explanation": "Les crêtes sont des replis de la membrane interne."
      },
      {
        "content": "La membrane externe est aussi imperméable aux petits métabolites que la membrane interne.",
        "correct": false,
        "explanation": "La membrane externe est relativement perméable aux petites molécules grâce aux VDAC, contrairement à la membrane interne."
      },
      {
        "content": "La membrane interne est librement perméable aux protons.",
        "correct": false,
        "explanation": "Sa faible perméabilité aux H+ est indispensable au maintien de la force proton-motrice."
      },
      {
        "content": "La glycolyse se déroule dans la matrice mitochondriale.",
        "correct": false,
        "explanation": "La glycolyse est cytosolique ; le pyruvate formé peut ensuite entrer dans la mitochondrie."
      }
    ],
    "explanation": "La membrane externe est relativement perméable aux petits métabolites, tandis que la membrane interne, riche en protéines et organisée en crêtes, maintient la force proton-motrice."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions de synthèse décrivent correctement l’import des protéines vers la mitochondrie ?",
    "choices": [
      {
        "content": "Le complexe TOM constitue une porte d’entrée majeure à travers la membrane externe.",
        "correct": true,
        "explanation": "TOM signifie Translocase of the Outer Membrane."
      },
      {
        "content": "Les complexes TIM participent à la translocation de protéines à travers ou dans la membrane interne.",
        "correct": true,
        "explanation": "TIM23 et TIM22 sont des voies majeures de la membrane interne."
      },
      {
        "content": "La grande majorité des protéines mitochondriales est codée par le génome nucléaire.",
        "correct": true,
        "explanation": "La mitochondrie ne code qu’une petite fraction de son protéome ; la plupart des protéines sont importées."
      },
      {
        "content": "Le complexe TOM est situé dans la membrane interne.",
        "correct": false,
        "explanation": "TOM est localisé dans la membrane externe."
      },
      {
        "content": "La peptidase matricielle MPP peut cliver certaines préséquences après import.",
        "correct": true,
        "explanation": "De nombreuses protéines de matrice sont maturées après translocation."
      }
    ],
    "explanation": "La majorité des protéines mitochondriales est codée par le noyau, synthétisée dans le cytosol puis importée par des complexes tels que TOM, TIM et SAM."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel composé à deux carbones alimente directement le cycle de Krebs ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acétyl-CoA",
        "acetyl-CoA",
        "acétyl coenzyme A"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’acétyl-CoA se condense avec l’oxaloacétate au début du cycle."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Identifiez exactement deux propositions correctes concernant le génome mitochondrial et l’autonomie limitée de l’organite.",
    "choices": [
      {
        "content": "L’ADN mitochondrial humain est une grande molécule linéaire organisée en chromosomes homologues.",
        "correct": false,
        "explanation": "Il s’agit d’un petit génome circulaire présent en plusieurs copies."
      },
      {
        "content": "La transmission de l’ADN mitochondrial est habituellement maternelle.",
        "correct": true,
        "explanation": "Chez l’humain, les mitochondries de l’embryon proviennent presque exclusivement de l’ovocyte."
      },
      {
        "content": "L’ADN mitochondrial est enfermé dans une enveloppe nucléaire propre.",
        "correct": false,
        "explanation": "Il se trouve dans la matrice sous forme de nucléoïdes, sans enveloppe nucléaire."
      },
      {
        "content": "Le code génétique mitochondrial humain présente quelques différences par rapport au code nucléaire.",
        "correct": true,
        "explanation": "Certaines correspondances codon–acide aminé diffèrent."
      },
      {
        "content": "Le génome mitochondrial humain contient des introns abondants comparables à ceux de nombreux gènes nucléaires.",
        "correct": false,
        "explanation": "Il est très compact et ne présente pas cette organisation riche en introns."
      }
    ],
    "explanation": "Le génome mitochondrial humain est petit, circulaire, transmis habituellement par la mère et ne code qu’une fraction limitée du protéome mitochondrial.",
    "requiredSelectionCount": 2
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les métabolismes de la matrice mitochondriale, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "La décarboxylation oxydative du pyruvate produit du lactate comme produit principal.",
        "correct": false,
        "explanation": "Elle produit de l’acétyl-CoA, du NADH et du CO2."
      },
      {
        "content": "La glycolyse mitochondriale produit directement le pyruvate dans la matrice.",
        "correct": false,
        "explanation": "La glycolyse se déroule dans le cytosol."
      },
      {
        "content": "La β-oxydation mitochondriale des acides gras se déroule principalement dans la matrice.",
        "correct": true,
        "explanation": "Elle fournit de l’acétyl-CoA, du NADH et du FADH2."
      },
      {
        "content": "Le cycle de Krebs se déroule dans l’espace intermembranaire.",
        "correct": false,
        "explanation": "Il se déroule principalement dans la matrice."
      },
      {
        "content": "Le cycle de Krebs oxyde l’acétyl-CoA et génère notamment NADH et FADH2.",
        "correct": true,
        "explanation": "Ces coenzymes réduits alimentent ensuite la chaîne respiratoire."
      }
    ],
    "explanation": "La matrice héberge notamment la décarboxylation oxydative du pyruvate, le cycle de Krebs et la β-oxydation, qui produisent des coenzymes réduits pour la chaîne respiratoire."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Laquelle des propositions suivantes décrit correctement la chaîne respiratoire mitochondriale ?",
    "choices": [
      {
        "content": "Le complexe II pompe des protons de la matrice vers l’espace intermembranaire.",
        "correct": false,
        "explanation": "Contrairement aux complexes I, III et IV, le complexe II ne pompe pas de protons."
      },
      {
        "content": "Le complexe I reçoit des électrons du NADH.",
        "correct": true,
        "explanation": "La NADH déshydrogénase transfère les électrons vers l’ubiquinone."
      },
      {
        "content": "Le complexe IV produit directement de l’ATP.",
        "correct": false,
        "explanation": "Il transfère les électrons à l’O2 et pompe des protons ; l’ATP est synthétisé par l’ATP synthase."
      },
      {
        "content": "La chaîne respiratoire est localisée dans la membrane externe.",
        "correct": false,
        "explanation": "Elle est localisée dans la membrane interne."
      },
      {
        "content": "Les électrons se déplacent spontanément de l’oxygène vers le NADH au cours de la respiration.",
        "correct": false,
        "explanation": "Le flux physiologique va des donneurs réduits vers l’O2."
      }
    ],
    "explanation": "Les complexes I à IV transfèrent les électrons vers l’oxygène ; I, III et IV pompent des protons, tandis que l’ubiquinone et le cytochrome c assurent des transferts mobiles."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont compatibles avec le fonctionnement des navettes et transporteurs mitochondriaux ?",
    "choices": [
      {
        "content": "Le phosphate inorganique doit aussi être importé dans la matrice pour former de l’ATP.",
        "correct": true,
        "explanation": "Un transporteur de phosphate contribue à fournir Pi à l’ATP synthase."
      },
      {
        "content": "L’ATP synthétisé dans la matrice reste définitivement dans la mitochondrie.",
        "correct": false,
        "explanation": "Il est exporté vers le cytosol via l’ANT."
      },
      {
        "content": "Le pyruvate traverse la membrane interne uniquement par diffusion simple.",
        "correct": false,
        "explanation": "Un transporteur mitochondrial du pyruvate intervient."
      },
      {
        "content": "Les acides gras à longue chaîne utilisent notamment la navette carnitine pour accéder à la β-oxydation mitochondriale.",
        "correct": true,
        "explanation": "La carnitine permet le transfert des groupements acyles à travers la membrane interne."
      },
      {
        "content": "Les transporteurs de la membrane interne contribuent au couplage entre métabolisme cytosolique et mitochondrial.",
        "correct": true,
        "explanation": "Ils assurent des échanges sélectifs de métabolites et de nucléotides."
      }
    ],
    "explanation": "La membrane interne impose des échanges sélectifs : navettes redox et transporteurs permettent le couplage entre métabolisme cytosolique et mitochondrial."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel cytochrome P450 mitochondrial catalyse la conversion du cholestérol en prégnénolone ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "CYP11A1",
        "P450scc",
        "CYP11A1/P450scc"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "CYP11A1, aussi appelé P450scc, catalyse la coupure de la chaîne latérale du cholestérol."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la voie intrinsèque de l’apoptose, quelles propositions sont incorrectes ?",
    "choices": [
      {
        "content": "L’apoptose intrinsèque exige une rupture mécanique explosive de toutes les membranes mitochondriales.",
        "correct": true,
        "explanation": "La MOMP est régulée et ne correspond pas nécessairement à une rupture non contrôlée de l’organite."
      },
      {
        "content": "La voie intrinsèque de l’apoptose est indépendante de toute régulation par la famille BCL-2.",
        "correct": true,
        "explanation": "La famille BCL-2 est un régulateur central de la perméabilisation de la membrane externe."
      },
      {
        "content": "Le cytochrome c reste dans la matrice mitochondriale au repos.",
        "correct": true,
        "explanation": "Il est localisé principalement dans l’espace intermembranaire, associé à la face externe de la membrane interne."
      },
      {
        "content": "Les procaspases sont principalement libérées de la matrice mitochondriale pour former l’apoptosome.",
        "correct": true,
        "explanation": "La procaspase-9 est cytosolique ; c’est notamment le cytochrome c mitochondrial qui est libéré."
      },
      {
        "content": "Les caspases effectrices peuvent favoriser la fragmentation de l’ADN via l’activation de nucléases.",
        "correct": false,
        "explanation": "Elles déclenchent un programme coordonné de démantèlement cellulaire."
      }
    ],
    "explanation": "La voie intrinsèque implique la perméabilisation de la membrane externe, la libération de cytochrome c et la formation cytosolique de l’apoptosome."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Dans quel tissu UCP1 est-elle particulièrement abondante ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "tissu adipeux brun",
        "graisse brune",
        "adipose brun",
        "brown adipose tissue"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "UCP1 est caractéristique du tissu adipeux brun."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Sur le thème du découplage et la thermogenèse mitochondriale, quelles sont les deux affirmations justes ?",
    "choices": [
      {
        "content": "UCP1 augmente le rendement de production d’ATP par proton.",
        "correct": false,
        "explanation": "Elle diminue le couplage entre respiration et synthèse d’ATP."
      },
      {
        "content": "La thermogenèse sans frisson par UCP1 est particulièrement importante chez le nouveau-né.",
        "correct": true,
        "explanation": "Elle contribue au maintien de la température corporelle."
      },
      {
        "content": "UCP1 produit de la chaleur en hydrolysant directement l’ATP dans la matrice.",
        "correct": false,
        "explanation": "UCP1 dissipe le gradient de protons ; elle n’hydrolyse pas directement l’ATP."
      },
      {
        "content": "La thermogenèse du tissu adipeux brun dépend d’un pompage supplémentaire des protons vers l’espace intermembranaire par UCP1.",
        "correct": false,
        "explanation": "UCP1 facilite au contraire le retour des protons vers la matrice."
      },
      {
        "content": "Le tissu adipeux brun est riche en mitochondries.",
        "correct": true,
        "explanation": "Cette abondance contribue à sa couleur et à sa capacité thermogénique."
      }
    ],
    "explanation": "UCP1 dissipe la force proton-motrice dans le tissu adipeux brun, transformant une partie de l’énergie d’oxydation en chaleur plutôt qu’en ATP.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des espèces réactives de l’oxygène et les défenses antioxydantes, sélectionnez les affirmations exactes.",
    "choices": [
      {
        "content": "Une augmentation des ROS améliore toujours la fonction mitochondriale.",
        "correct": false,
        "explanation": "Un excès de ROS provoque un stress oxydant et des lésions."
      },
      {
        "content": "Toute production mitochondriale de ROS est nécessairement pathologique.",
        "correct": false,
        "explanation": "À faible niveau, les ROS peuvent aussi participer à des voies de signalisation."
      },
      {
        "content": "Les mitochondries fabriquent l’ensemble de leurs enzymes antioxydantes à partir de leur propre génome.",
        "correct": false,
        "explanation": "Une grande partie est codée par le noyau puis importée."
      },
      {
        "content": "Un excès de ROS peut contribuer au vieillissement cellulaire et à diverses pathologies.",
        "correct": true,
        "explanation": "Le stress oxydant peut altérer les macromolécules et les organites."
      },
      {
        "content": "Les complexes I et III sont des sites importants de production mitochondriale de superoxyde.",
        "correct": true,
        "explanation": "Une fuite d’électrons vers l’oxygène peut générer O2•−."
      }
    ],
    "explanation": "Une fuite d’électrons, notamment aux complexes I et III, peut former du superoxyde ; des systèmes comme SOD2, glutathion peroxydase et peroxyrédoxines limitent le stress oxydant."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "À propos des cytopathies mitochondriales, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "L’absence totale de mitochondries est normale dans les neurones matures.",
        "correct": false,
        "explanation": "Les neurones ont une forte demande énergétique et possèdent de nombreuses mitochondries."
      },
      {
        "content": "Une mutation de l’ADN mitochondrial suit toujours une transmission mendélienne autosomique.",
        "correct": false,
        "explanation": "L’ADN mitochondrial suit habituellement une transmission maternelle."
      },
      {
        "content": "Une mutation nucléaire affectant TOM ou TIM peut théoriquement perturber l’import mitochondrial.",
        "correct": true,
        "explanation": "Ces complexes sont codés par le noyau et essentiels au protéome mitochondrial."
      },
      {
        "content": "Les cellules fortement glycolytiques sont toujours les plus sensibles à tout défaut mitochondrial.",
        "correct": false,
        "explanation": "La sensibilité dépend notamment de la dépendance du tissu à la phosphorylation oxydative."
      },
      {
        "content": "Toutes les maladies mitochondriales se manifestent uniquement par une atteinte musculaire.",
        "correct": false,
        "explanation": "Elles peuvent être multisystémiques."
      }
    ],
    "explanation": "Les maladies mitochondriales peuvent résulter de variants de l’ADN mitochondrial ou de gènes nucléaires et touchent volontiers les tissus à forte demande énergétique."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Identifiez les affirmations justes au sujet de l’organisation générale, l’origine et la dynamique mitochondriales.",
    "choices": [
      {
        "content": "La membrane interne forme des crêtes qui augmentent sa surface.",
        "correct": true,
        "explanation": "Les crêtes mitochondriales accroissent la surface disponible pour la chaîne respiratoire et l’ATP synthase."
      },
      {
        "content": "Une mitochondrie appartient au système endomembranaire classique RE–Golgi–endosomes.",
        "correct": false,
        "explanation": "La mitochondrie constitue un compartiment distinct du système endomembranaire classique."
      },
      {
        "content": "La matrice mitochondriale est séparée du cytosol par deux membranes.",
        "correct": true,
        "explanation": "Pour atteindre la matrice, il faut franchir la membrane externe puis la membrane interne."
      },
      {
        "content": "La mitochondrie est un organite à double membrane.",
        "correct": true,
        "explanation": "Elle possède une membrane externe et une membrane interne distinctes."
      },
      {
        "content": "Les hématies humaines matures possèdent de nombreuses mitochondries.",
        "correct": false,
        "explanation": "Les hématies humaines matures ont éliminé leurs mitochondries au cours de leur différenciation."
      }
    ],
    "explanation": "La mitochondrie est un organite dynamique à double membrane, issu d’une endosymbiose ancienne et renouvelé par fusion, fission et mitophagie."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel complexe participe à l’assemblage des protéines β-tonneau dans la membrane externe mitochondriale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "SAM",
        "complexe SAM",
        "Sorting and Assembly Machinery"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "SAM assure l’assemblage de nombreuses protéines β-tonneau de la membrane externe."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Parmi les dix propositions suivantes sur les membranes, crêtes et compartiments mitochondriaux, sélectionnez exactement les cinq exactes.",
    "choices": [
      {
        "content": "La cardiolipine est un phospholipide caractéristique particulièrement abondant dans la membrane interne.",
        "correct": true,
        "explanation": "La cardiolipine contribue à l’organisation et au fonctionnement de protéines de la membrane interne."
      },
      {
        "content": "La membrane externe est aussi imperméable aux petits métabolites que la membrane interne.",
        "correct": false,
        "explanation": "La membrane externe est relativement perméable aux petites molécules grâce aux VDAC, contrairement à la membrane interne."
      },
      {
        "content": "La glycolyse se déroule dans la matrice mitochondriale.",
        "correct": false,
        "explanation": "La glycolyse est cytosolique ; le pyruvate formé peut ensuite entrer dans la mitochondrie."
      },
      {
        "content": "Les complexes respiratoires sont principalement localisés dans la membrane interne.",
        "correct": true,
        "explanation": "Les complexes I à IV et l’ATP synthase sont associés à la membrane interne."
      },
      {
        "content": "Le cholestérol est absent de toute membrane mitochondriale.",
        "correct": false,
        "explanation": "Il est peu abondant par rapport à la membrane plasmique mais il peut être présent et sert notamment de substrat à la stéroïdogenèse."
      },
      {
        "content": "La membrane interne est très riche en protéines.",
        "correct": true,
        "explanation": "Elle porte de nombreux transporteurs, les complexes respiratoires et l’ATP synthase."
      },
      {
        "content": "Les crêtes sont des replis de la membrane externe.",
        "correct": false,
        "explanation": "Les crêtes sont des replis de la membrane interne."
      },
      {
        "content": "L’espace intermembranaire se situe entre les membranes externe et interne.",
        "correct": true,
        "explanation": "Il reçoit notamment les protons pompés par la chaîne respiratoire."
      },
      {
        "content": "La membrane externe contient notamment des canaux VDAC, souvent appelés porines mitochondriales.",
        "correct": true,
        "explanation": "VDAC facilite le passage de nombreux petits métabolites à travers la membrane externe."
      },
      {
        "content": "La membrane interne est librement perméable aux protons.",
        "correct": false,
        "explanation": "Sa faible perméabilité aux H+ est indispensable au maintien de la force proton-motrice."
      }
    ],
    "explanation": "La membrane externe est relativement perméable aux petits métabolites, tandis que la membrane interne, riche en protéines et organisée en crêtes, maintient la force proton-motrice.",
    "requiredSelectionCount": 5
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi ces propositions relatives à l’import des protéines mitochondriales, lesquelles sont justes ?",
    "choices": [
      {
        "content": "La peptidase matricielle MPP peut cliver certaines préséquences après import.",
        "correct": true,
        "explanation": "De nombreuses protéines de matrice sont maturées après translocation."
      },
      {
        "content": "Le complexe TOM est situé dans la membrane interne.",
        "correct": false,
        "explanation": "TOM est localisé dans la membrane externe."
      },
      {
        "content": "Le complexe SAM participe à l’assemblage de protéines β-tonneau dans la membrane externe.",
        "correct": true,
        "explanation": "SAM signifie Sorting and Assembly Machinery."
      },
      {
        "content": "Le potentiel électrique de la membrane interne contribue à l’import de nombreuses protéines vers la matrice.",
        "correct": true,
        "explanation": "La composante électrique de la force proton-motrice favorise l’entrée de préséquences chargées positivement."
      },
      {
        "content": "De nombreuses protéines destinées à la matrice portent une préséquence N-terminale amphipathique.",
        "correct": true,
        "explanation": "Cette préséquence peut être reconnue par la machinerie TOM/TIM23 puis clivée dans la matrice."
      }
    ],
    "explanation": "La majorité des protéines mitochondriales est codée par le noyau, synthétisée dans le cytosol puis importée par des complexes tels que TOM, TIM et SAM."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel complexe de la chaîne respiratoire ne pompe pas de protons ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "complexe II",
        "II",
        "complexe 2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le complexe II transfère des électrons à l’ubiquinone sans pomper de H+."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi ces affirmations de synthèse sur l’ADN mitochondrial et l’autonomie de l’organite, sélectionnez exactement les deux exactes.",
    "choices": [
      {
        "content": "L’expression clinique d’une mutation mitochondriale peut dépendre d’un effet de seuil d’hétéroplasmie.",
        "correct": true,
        "explanation": "La proportion de génomes mutés nécessaire pour altérer une fonction varie selon le tissu et la mutation."
      },
      {
        "content": "La réplication de l’ADN mitochondrial est strictement limitée à la phase S nucléaire.",
        "correct": false,
        "explanation": "La réplication mitochondriale n’est pas couplée de façon stricte à la phase S du cycle nucléaire."
      },
      {
        "content": "L’ADN mitochondrial est enfermé dans une enveloppe nucléaire propre.",
        "correct": false,
        "explanation": "Il se trouve dans la matrice sous forme de nucléoïdes, sans enveloppe nucléaire."
      },
      {
        "content": "Les ribosomes mitochondriaux participent à la traduction des gènes mitochondriaux codant des protéines.",
        "correct": true,
        "explanation": "Ils traduisent les ARN messagers mitochondriaux dans la matrice."
      },
      {
        "content": "L’ADN mitochondrial code toutes les protéines nécessaires à la mitochondrie.",
        "correct": false,
        "explanation": "La très grande majorité du protéome mitochondrial est d’origine nucléaire."
      }
    ],
    "explanation": "Le génome mitochondrial humain est petit, circulaire, transmis habituellement par la mère et ne code qu’une fraction limitée du protéome mitochondrial.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quels sont les deux substrats directement utilisés par l’ATP synthase pour former l’ATP ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ADP et phosphate",
        "ADP et Pi",
        "ADP + Pi",
        "ADP phosphate inorganique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L’ATP synthase catalyse la phosphorylation de l’ADP par le phosphate inorganique."
  }
];

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 10,
    "slug": "mitochondrie-10",
    "title": "Synthèse de la mitochondrie",
    "description": "Synthèse : synthèse de la mitochondrie.",
    "stage": "PRACTICE",
    "sectionOrder": 5,
    "questionOrders": [
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110
    ]
  },
  {
    "order": 11,
    "slug": "mitochondrie-11",
    "title": "Maîtriser la mitochondrie",
    "description": "Maîtriser : maîtriser la mitochondrie.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "questionOrders": [
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122
    ]
  }
];
