import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch7 — Structure, membranes, import protéique et génome mitochondrial */
export const UE14_BIOCELL_CH7_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l’organisation générale, l’origine et la dynamique mitochondriales ?",
    "choices": [
      {
        "content": "Il est démontré que l’ancêtre mitochondrial était exactement l’espèce actuelle Rickettsia prowazekii.",
        "correct": false,
        "explanation": "L’ancêtre est rapproché des alphaprotéobactéries, mais il n’est pas identifié à une espèce actuelle unique."
      },
      {
        "content": "La membrane interne forme des crêtes qui augmentent sa surface.",
        "correct": true,
        "explanation": "Les crêtes mitochondriales accroissent la surface disponible pour la chaîne respiratoire et l’ATP synthase."
      },
      {
        "content": "Les hématies humaines matures possèdent de nombreuses mitochondries.",
        "correct": false,
        "explanation": "Les hématies humaines matures ont éliminé leurs mitochondries au cours de leur différenciation."
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
      }
    ],
    "explanation": "La mitochondrie est un organite dynamique à double membrane, issu d’une endosymbiose ancienne et renouvelé par fusion, fission et mitophagie."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Repérez l’unique proposition exacte concernant les membranes, crêtes et compartiments mitochondriaux.",
    "choices": [
      {
        "content": "L’espace intermembranaire se situe entre les membranes externe et interne.",
        "correct": true,
        "explanation": "Il reçoit notamment les protons pompés par la chaîne respiratoire."
      },
      {
        "content": "La glycolyse se déroule dans la matrice mitochondriale.",
        "correct": false,
        "explanation": "La glycolyse est cytosolique ; le pyruvate formé peut ensuite entrer dans la mitochondrie."
      },
      {
        "content": "Le cholestérol est absent de toute membrane mitochondriale.",
        "correct": false,
        "explanation": "Il est peu abondant par rapport à la membrane plasmique mais il peut être présent et sert notamment de substrat à la stéroïdogenèse."
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
      }
    ],
    "explanation": "La membrane externe est relativement perméable aux petits métabolites, tandis que la membrane interne, riche en protéines et organisée en crêtes, maintient la force proton-motrice."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment nomme-t-on l’autophagie sélective des mitochondries ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "mitophagie",
        "mitophagy"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La mitophagie élimine sélectivement des mitochondries endommagées ou devenues inutiles."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Identifiez les affirmations justes au sujet de l’import des protéines mitochondriales.",
    "choices": [
      {
        "content": "Le complexe SAM participe à l’assemblage de protéines β-tonneau dans la membrane externe.",
        "correct": true,
        "explanation": "SAM signifie Sorting and Assembly Machinery."
      },
      {
        "content": "Les protéines de la matrice sont toutes codées par l’ADN mitochondrial.",
        "correct": false,
        "explanation": "La plupart sont codées par le noyau."
      },
      {
        "content": "Le potentiel électrique de la membrane interne contribue à l’import de nombreuses protéines vers la matrice.",
        "correct": true,
        "explanation": "La composante électrique de la force proton-motrice favorise l’entrée de préséquences chargées positivement."
      },
      {
        "content": "Toutes les protéines mitochondriales sont synthétisées sur des ribosomes mitochondriaux.",
        "correct": false,
        "explanation": "La majorité est synthétisée sur des ribosomes cytosoliques puis importée."
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
    "order": 5,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant le génome mitochondrial et l’autonomie limitée de l’organite, sélectionnez exactement les deux propositions exactes.",
    "choices": [
      {
        "content": "L’hétéroplasmie signifie qu’une cellule ne contient qu’une seule copie d’ADN mitochondrial.",
        "correct": false,
        "explanation": "Elle désigne la coexistence de génomes mitochondriaux différents."
      },
      {
        "content": "La réplication de l’ADN mitochondrial est strictement limitée à la phase S nucléaire.",
        "correct": false,
        "explanation": "La réplication mitochondriale n’est pas couplée de façon stricte à la phase S du cycle nucléaire."
      },
      {
        "content": "L’ADN mitochondrial code toutes les protéines nécessaires à la mitochondrie.",
        "correct": false,
        "explanation": "La très grande majorité du protéome mitochondrial est d’origine nucléaire."
      },
      {
        "content": "Une cellule peut contenir simultanément des molécules d’ADN mitochondrial normales et mutées.",
        "correct": true,
        "explanation": "Cette coexistence est appelée hétéroplasmie."
      },
      {
        "content": "L’expression clinique d’une mutation mitochondriale peut dépendre d’un effet de seuil d’hétéroplasmie.",
        "correct": true,
        "explanation": "La proportion de génomes mutés nécessaire pour altérer une fonction varie selon le tissu et la mutation."
      }
    ],
    "explanation": "Le génome mitochondrial humain est petit, circulaire, transmis habituellement par la mère et ne code qu’une fraction limitée du protéome mitochondrial.",
    "requiredSelectionCount": 2
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Sur le thème de l’organisation générale, l’origine et la dynamique mitochondriales, quelles affirmations sont exactes ?",
    "choices": [
      {
        "content": "L’origine mitochondriale est expliquée par une endosymbiose ancienne avec une bactérie apparentée aux alphaprotéobactéries.",
        "correct": true,
        "explanation": "Le modèle endosymbiotique explique notamment le génome propre, les ribosomes et la double membrane."
      },
      {
        "content": "La morphologie mitochondriale peut varier selon le type et l’état physiologique de la cellule.",
        "correct": true,
        "explanation": "Les mitochondries forment un réseau dynamique dont la morphologie dépend notamment des besoins énergétiques."
      },
      {
        "content": "Les mitochondries sont des organites statiques dont le nombre est fixé une fois pour toutes.",
        "correct": false,
        "explanation": "Le réseau mitochondrial est dynamique et subit fusion, fission, transport et renouvellement."
      },
      {
        "content": "La mitochondrie peut se déplacer le long du cytosquelette.",
        "correct": true,
        "explanation": "Des moteurs moléculaires et le cytosquelette participent à sa distribution intracellulaire."
      },
      {
        "content": "La mitophagie participe à l’élimination sélective de mitochondries endommagées.",
        "correct": true,
        "explanation": "La mitophagie est une forme d’autophagie sélective ciblant les mitochondries."
      }
    ],
    "explanation": "La mitochondrie est un organite dynamique à double membrane, issu d’une endosymbiose ancienne et renouvelé par fusion, fission et mitophagie."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi ces affirmations sur les membranes, crêtes et compartiments mitochondriaux, laquelle est exacte ?",
    "choices": [
      {
        "content": "La membrane interne est librement perméable aux protons.",
        "correct": false,
        "explanation": "Sa faible perméabilité aux H+ est indispensable au maintien de la force proton-motrice."
      },
      {
        "content": "La matrice contient les enzymes du cycle de Krebs.",
        "correct": true,
        "explanation": "La plupart des enzymes du cycle de l’acide citrique sont matricielles ; la succinate déshydrogénase est intégrée à la membrane interne."
      },
      {
        "content": "Le cholestérol est absent de toute membrane mitochondriale.",
        "correct": false,
        "explanation": "Il est peu abondant par rapport à la membrane plasmique mais il peut être présent et sert notamment de substrat à la stéroïdogenèse."
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
      }
    ],
    "explanation": "La membrane externe est relativement perméable aux petits métabolites, tandis que la membrane interne, riche en protéines et organisée en crêtes, maintient la force proton-motrice."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle membrane mitochondriale forme les crêtes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "membrane interne",
        "la membrane interne",
        "membrane mitochondriale interne"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les crêtes sont des replis de la membrane interne."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRPL",
    "question": "Parmi les dix propositions suivantes sur l’import des protéines mitochondriales, sélectionnez exactement les cinq exactes.",
    "choices": [
      {
        "content": "Le complexe TOM constitue une porte d’entrée majeure à travers la membrane externe.",
        "correct": true,
        "explanation": "TOM signifie Translocase of the Outer Membrane."
      },
      {
        "content": "Une protéine nucléaire destinée à la mitochondrie doit obligatoirement transiter par le Golgi.",
        "correct": false,
        "explanation": "L’import mitochondrial se fait directement depuis le cytosol sans passage obligatoire par le Golgi."
      },
      {
        "content": "De nombreuses protéines destinées à la matrice portent une préséquence N-terminale amphipathique.",
        "correct": true,
        "explanation": "Cette préséquence peut être reconnue par la machinerie TOM/TIM23 puis clivée dans la matrice."
      },
      {
        "content": "L’import de protéines dans la matrice est généralement compatible avec une protéine complètement repliée et oligomérique.",
        "correct": false,
        "explanation": "L’import classique via TOM/TIM nécessite en général un état non replié ou partiellement déplié."
      },
      {
        "content": "Les complexes TIM participent à la translocation de protéines à travers ou dans la membrane interne.",
        "correct": true,
        "explanation": "TIM23 et TIM22 sont des voies majeures de la membrane interne."
      },
      {
        "content": "Toutes les protéines mitochondriales sont synthétisées sur des ribosomes mitochondriaux.",
        "correct": false,
        "explanation": "La majorité est synthétisée sur des ribosomes cytosoliques puis importée."
      },
      {
        "content": "La grande majorité des protéines mitochondriales est codée par le génome nucléaire.",
        "correct": true,
        "explanation": "La mitochondrie ne code qu’une petite fraction de son protéome ; la plupart des protéines sont importées."
      },
      {
        "content": "Le potentiel électrique de la membrane interne contribue à l’import de nombreuses protéines vers la matrice.",
        "correct": true,
        "explanation": "La composante électrique de la force proton-motrice favorise l’entrée de préséquences chargées positivement."
      },
      {
        "content": "Les protéines de la matrice sont toutes codées par l’ADN mitochondrial.",
        "correct": false,
        "explanation": "La plupart sont codées par le noyau."
      },
      {
        "content": "Le complexe TOM est situé dans la membrane interne.",
        "correct": false,
        "explanation": "TOM est localisé dans la membrane externe."
      }
    ],
    "explanation": "La majorité des protéines mitochondriales est codée par le noyau, synthétisée dans le cytosol puis importée par des complexes tels que TOM, TIM et SAM.",
    "requiredSelectionCount": 5
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du génome mitochondrial et l’autonomie limitée de l’organite, sélectionnez les affirmations exactes.",
    "choices": [
      {
        "content": "L’ADN mitochondrial est enfermé dans une enveloppe nucléaire propre.",
        "correct": false,
        "explanation": "Il se trouve dans la matrice sous forme de nucléoïdes, sans enveloppe nucléaire."
      },
      {
        "content": "Le génome mitochondrial humain code 13 protéines de la phosphorylation oxydative.",
        "correct": true,
        "explanation": "Il code aussi 22 ARNt et 2 ARNr."
      },
      {
        "content": "Le génome mitochondrial humain contient des introns abondants comparables à ceux de nombreux gènes nucléaires.",
        "correct": false,
        "explanation": "Il est très compact et ne présente pas cette organisation riche en introns."
      },
      {
        "content": "L’ADN mitochondrial humain est une grande molécule linéaire organisée en chromosomes homologues.",
        "correct": false,
        "explanation": "Il s’agit d’un petit génome circulaire présent en plusieurs copies."
      },
      {
        "content": "L’ADN mitochondrial humain mesure environ 16,6 kb.",
        "correct": true,
        "explanation": "Sa longueur est d’environ 16 569 paires de bases."
      }
    ],
    "explanation": "Le génome mitochondrial humain est petit, circulaire, transmis habituellement par la mère et ne code qu’une fraction limitée du protéome mitochondrial."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l’import des protéines mitochondriales, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Une protéine nucléaire destinée à la mitochondrie doit obligatoirement transiter par le Golgi.",
        "correct": false,
        "explanation": "L’import mitochondrial se fait directement depuis le cytosol sans passage obligatoire par le Golgi."
      },
      {
        "content": "L’import de protéines dans la matrice est généralement compatible avec une protéine complètement repliée et oligomérique.",
        "correct": false,
        "explanation": "L’import classique via TOM/TIM nécessite en général un état non replié ou partiellement déplié."
      },
      {
        "content": "Le potentiel électrique de la membrane interne contribue à l’import de nombreuses protéines vers la matrice.",
        "correct": true,
        "explanation": "La composante électrique de la force proton-motrice favorise l’entrée de préséquences chargées positivement."
      },
      {
        "content": "La peptidase matricielle MPP peut cliver certaines préséquences après import.",
        "correct": true,
        "explanation": "De nombreuses protéines de matrice sont maturées après translocation."
      },
      {
        "content": "Le complexe SAM participe à l’assemblage de protéines β-tonneau dans la membrane externe.",
        "correct": true,
        "explanation": "SAM signifie Sorting and Assembly Machinery."
      }
    ],
    "explanation": "La majorité des protéines mitochondriales est codée par le noyau, synthétisée dans le cytosol puis importée par des complexes tels que TOM, TIM et SAM."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans quel compartiment mitochondrial se déroule principalement le cycle de Krebs ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "matrice",
        "matrice mitochondriale",
        "dans la matrice"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La plupart des enzymes du cycle de Krebs sont localisées dans la matrice."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Sur le thème du génome mitochondrial et l’autonomie limitée de l’organite, quelle proposition est juste ?",
    "choices": [
      {
        "content": "L’ADN mitochondrial humain est une grande molécule linéaire organisée en chromosomes homologues.",
        "correct": false,
        "explanation": "Il s’agit d’un petit génome circulaire présent en plusieurs copies."
      },
      {
        "content": "L’hétéroplasmie signifie qu’une cellule ne contient qu’une seule copie d’ADN mitochondrial.",
        "correct": false,
        "explanation": "Elle désigne la coexistence de génomes mitochondriaux différents."
      },
      {
        "content": "L’ADN mitochondrial humain est circulaire.",
        "correct": true,
        "explanation": "Le génome mitochondrial humain est une petite molécule d’ADN circulaire."
      },
      {
        "content": "L’ADN mitochondrial code toutes les protéines nécessaires à la mitochondrie.",
        "correct": false,
        "explanation": "La très grande majorité du protéome mitochondrial est d’origine nucléaire."
      },
      {
        "content": "La réplication de l’ADN mitochondrial est strictement limitée à la phase S nucléaire.",
        "correct": false,
        "explanation": "La réplication mitochondriale n’est pas couplée de façon stricte à la phase S du cycle nucléaire."
      }
    ],
    "explanation": "Le génome mitochondrial humain est petit, circulaire, transmis habituellement par la mère et ne code qu’une fraction limitée du protéome mitochondrial."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l’architecture et de la dynamique mitochondriales, quelles affirmations sont exactes ?",
    "choices": [
      {
        "content": "La mitochondrie est un organite à double membrane.",
        "correct": true,
        "explanation": "Elle possède une membrane externe et une membrane interne distinctes."
      },
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
        "content": "Les mitochondries sont des organites statiques dont le nombre est fixé une fois pour toutes.",
        "correct": false,
        "explanation": "Le réseau mitochondrial est dynamique et subit fusion, fission, transport et renouvellement."
      },
      {
        "content": "La mitochondrie peut se déplacer le long du cytosquelette.",
        "correct": true,
        "explanation": "Des moteurs moléculaires et le cytosquelette participent à sa distribution intracellulaire."
      }
    ],
    "explanation": "La mitochondrie est un organite dynamique à double membrane, issu d’une endosymbiose ancienne et renouvelé par fusion, fission et mitophagie."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel complexe constitue la porte d’entrée majeure des protéines à travers la membrane externe mitochondriale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "TOM",
        "complexe TOM",
        "translocase TOM"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "TOM signifie Translocase of the Outer Membrane."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Deux affirmations seulement sont exactes à propos des membranes, crêtes et compartiments mitochondriaux. Lesquelles ?",
    "choices": [
      {
        "content": "La membrane externe est aussi imperméable aux petits métabolites que la membrane interne.",
        "correct": false,
        "explanation": "La membrane externe est relativement perméable aux petites molécules grâce aux VDAC, contrairement à la membrane interne."
      },
      {
        "content": "Le cholestérol est absent de toute membrane mitochondriale.",
        "correct": false,
        "explanation": "Il est peu abondant par rapport à la membrane plasmique mais il peut être présent et sert notamment de substrat à la stéroïdogenèse."
      },
      {
        "content": "Les crêtes sont des replis de la membrane externe.",
        "correct": false,
        "explanation": "Les crêtes sont des replis de la membrane interne."
      },
      {
        "content": "La membrane externe contient notamment des canaux VDAC, souvent appelés porines mitochondriales.",
        "correct": true,
        "explanation": "VDAC facilite le passage de nombreux petits métabolites à travers la membrane externe."
      },
      {
        "content": "Les complexes respiratoires sont principalement localisés dans la membrane interne.",
        "correct": true,
        "explanation": "Les complexes I à IV et l’ATP synthase sont associés à la membrane interne."
      }
    ],
    "explanation": "La membrane externe est relativement perméable aux petits métabolites, tandis que la membrane interne, riche en protéines et organisée en crêtes, maintient la force proton-motrice.",
    "requiredSelectionCount": 2
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l’import des protéines mitochondriales ?",
    "choices": [
      {
        "content": "Les protéines de la matrice sont toutes codées par l’ADN mitochondrial.",
        "correct": false,
        "explanation": "La plupart sont codées par le noyau."
      },
      {
        "content": "De nombreuses protéines destinées à la matrice portent une préséquence N-terminale amphipathique.",
        "correct": true,
        "explanation": "Cette préséquence peut être reconnue par la machinerie TOM/TIM23 puis clivée dans la matrice."
      },
      {
        "content": "Toutes les protéines mitochondriales sont synthétisées sur des ribosomes mitochondriaux.",
        "correct": false,
        "explanation": "La majorité est synthétisée sur des ribosomes cytosoliques puis importée."
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
      }
    ],
    "explanation": "La majorité des protéines mitochondriales est codée par le noyau, synthétisée dans le cytosol puis importée par des complexes tels que TOM, TIM et SAM."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Repérez l’unique proposition exacte concernant le génome mitochondrial et l’autonomie limitée de l’organite.",
    "choices": [
      {
        "content": "L’ADN mitochondrial est enfermé dans une enveloppe nucléaire propre.",
        "correct": false,
        "explanation": "Il se trouve dans la matrice sous forme de nucléoïdes, sans enveloppe nucléaire."
      },
      {
        "content": "Le génome mitochondrial humain contient des introns abondants comparables à ceux de nombreux gènes nucléaires.",
        "correct": false,
        "explanation": "Il est très compact et ne présente pas cette organisation riche en introns."
      },
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
        "content": "L’hétéroplasmie signifie qu’une cellule ne contient qu’une seule copie d’ADN mitochondrial.",
        "correct": false,
        "explanation": "Elle désigne la coexistence de génomes mitochondriaux différents."
      }
    ],
    "explanation": "Le génome mitochondrial humain est petit, circulaire, transmis habituellement par la mère et ne code qu’une fraction limitée du protéome mitochondrial."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l’organisation générale, l’origine et la dynamique mitochondriales, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "L’origine mitochondriale est expliquée par une endosymbiose ancienne avec une bactérie apparentée aux alphaprotéobactéries.",
        "correct": true,
        "explanation": "Le modèle endosymbiotique explique notamment le génome propre, les ribosomes et la double membrane."
      },
      {
        "content": "Une mitochondrie appartient au système endomembranaire classique RE–Golgi–endosomes.",
        "correct": false,
        "explanation": "La mitochondrie constitue un compartiment distinct du système endomembranaire classique."
      },
      {
        "content": "La mitophagie participe à l’élimination sélective de mitochondries endommagées.",
        "correct": true,
        "explanation": "La mitophagie est une forme d’autophagie sélective ciblant les mitochondries."
      },
      {
        "content": "La morphologie mitochondriale peut varier selon le type et l’état physiologique de la cellule.",
        "correct": true,
        "explanation": "Les mitochondries forment un réseau dynamique dont la morphologie dépend notamment des besoins énergétiques."
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
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le mode de transmission habituel de l’ADN mitochondrial humain ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "maternelle",
        "transmission maternelle",
        "maternel"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Chez l’humain, l’ADN mitochondrial est transmis presque exclusivement par l’ovocyte."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Sur le thème des membranes, crêtes et compartiments mitochondriaux, quelle proposition est juste ?",
    "choices": [
      {
        "content": "La glycolyse se déroule dans la matrice mitochondriale.",
        "correct": false,
        "explanation": "La glycolyse est cytosolique ; le pyruvate formé peut ensuite entrer dans la mitochondrie."
      },
      {
        "content": "La membrane interne est librement perméable aux protons.",
        "correct": false,
        "explanation": "Sa faible perméabilité aux H+ est indispensable au maintien de la force proton-motrice."
      },
      {
        "content": "Le cholestérol est absent de toute membrane mitochondriale.",
        "correct": false,
        "explanation": "Il est peu abondant par rapport à la membrane plasmique mais il peut être présent et sert notamment de substrat à la stéroïdogenèse."
      },
      {
        "content": "Les crêtes sont des replis de la membrane externe.",
        "correct": false,
        "explanation": "Les crêtes sont des replis de la membrane interne."
      },
      {
        "content": "La membrane interne est très riche en protéines.",
        "correct": true,
        "explanation": "Elle porte de nombreux transporteurs, les complexes respiratoires et l’ATP synthase."
      }
    ],
    "explanation": "La membrane externe est relativement perméable aux petits métabolites, tandis que la membrane interne, riche en protéines et organisée en crêtes, maintient la force proton-motrice."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment nomme-t-on la coexistence de molécules d’ADN mitochondrial normales et mutées dans une même cellule ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "hétéroplasmie",
        "heteroplasmie",
        "hétéroplasmie mitochondriale"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Cette coexistence est appelée hétéroplasmie."
  }
];
