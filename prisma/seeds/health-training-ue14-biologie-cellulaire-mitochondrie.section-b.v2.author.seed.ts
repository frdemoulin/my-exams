import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch7 — Matrice, métabolismes, transporteurs et autonomie mitochondriale */
export const UE14_BIOCELL_CH7_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi ces propositions relatives aux métabolismes de la matrice mitochondriale, lesquelles sont justes ?",
    "choices": [
      {
        "content": "La succinate déshydrogénase appartient à la fois au cycle de Krebs et au complexe II de la chaîne respiratoire.",
        "correct": true,
        "explanation": "Elle relie directement le métabolisme du succinate au transfert d’électrons vers l’ubiquinone."
      },
      {
        "content": "Le cycle de Krebs se déroule dans l’espace intermembranaire.",
        "correct": false,
        "explanation": "Il se déroule principalement dans la matrice."
      },
      {
        "content": "La β-oxydation mitochondriale des acides gras se déroule principalement dans la matrice.",
        "correct": true,
        "explanation": "Elle fournit de l’acétyl-CoA, du NADH et du FADH2."
      },
      {
        "content": "Le cycle de Krebs oxyde l’acétyl-CoA et génère notamment NADH et FADH2.",
        "correct": true,
        "explanation": "Ces coenzymes réduits alimentent ensuite la chaîne respiratoire."
      },
      {
        "content": "Les acides gras à très longue chaîne sont pris en charge préférentiellement par le peroxysome avant un éventuel relais mitochondrial.",
        "correct": true,
        "explanation": "Le peroxysome raccourcit notamment les VLCFA."
      }
    ],
    "explanation": "La matrice héberge notamment la décarboxylation oxydative du pyruvate, le cycle de Krebs et la β-oxydation, qui produisent des coenzymes réduits pour la chaîne respiratoire."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant les navettes et transporteurs mitochondriaux, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le transporteur ADP/ATP échange l’ADP cytosolique contre l’ATP matriciel à travers la membrane interne.",
        "correct": true,
        "explanation": "L’ANT assure cet antiport essentiel."
      },
      {
        "content": "Le NAD+ et le NADH cytosoliques diffusent librement à travers la membrane interne.",
        "correct": false,
        "explanation": "La membrane interne est imperméable à ces coenzymes ; les navettes transfèrent les équivalents réducteurs."
      },
      {
        "content": "La navette glycérol-3-phosphate injecte directement des électrons dans le complexe II.",
        "correct": false,
        "explanation": "Elle réduit l’ubiquinone via une déshydrogénase distincte du complexe II."
      },
      {
        "content": "La navette malate-aspartate impose un rendement identique à celui de la navette glycérol-3-phosphate.",
        "correct": false,
        "explanation": "Le point d’entrée différent dans la chaîne peut modifier le rendement en ATP."
      },
      {
        "content": "Le pyruvate traverse la membrane interne uniquement par diffusion simple.",
        "correct": false,
        "explanation": "Un transporteur mitochondrial du pyruvate intervient."
      }
    ],
    "explanation": "La membrane interne impose des échanges sélectifs : navettes redox et transporteurs permettent le couplage entre métabolisme cytosolique et mitochondrial."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel métabolite est produit par le complexe pyruvate déshydrogénase à partir du pyruvate et entre dans le cycle de Krebs ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acétyl-CoA",
        "acetyl-CoA",
        "acétyl coenzyme A",
        "acetyl coenzyme A"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La décarboxylation oxydative du pyruvate produit notamment de l’acétyl-CoA."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions relient correctement génome mitochondrial, traduction et hétéroplasmie ?",
    "choices": [
      {
        "content": "Le génome mitochondrial humain contient des introns abondants comparables à ceux de nombreux gènes nucléaires.",
        "correct": false,
        "explanation": "Il est très compact et ne présente pas cette organisation riche en introns."
      },
      {
        "content": "Les ribosomes mitochondriaux participent à la traduction des gènes mitochondriaux codant des protéines.",
        "correct": true,
        "explanation": "Ils traduisent les ARN messagers mitochondriaux dans la matrice."
      },
      {
        "content": "L’ADN mitochondrial humain est une grande molécule linéaire organisée en chromosomes homologues.",
        "correct": false,
        "explanation": "Il s’agit d’un petit génome circulaire présent en plusieurs copies."
      },
      {
        "content": "L’expression clinique d’une mutation mitochondriale peut dépendre d’un effet de seuil d’hétéroplasmie.",
        "correct": true,
        "explanation": "La proportion de génomes mutés nécessaire pour altérer une fonction varie selon le tissu et la mutation."
      },
      {
        "content": "L’ADN mitochondrial est enfermé dans une enveloppe nucléaire propre.",
        "correct": false,
        "explanation": "Il se trouve dans la matrice sous forme de nucléoïdes, sans enveloppe nucléaire."
      }
    ],
    "explanation": "Le génome mitochondrial humain est petit, circulaire, transmis habituellement par la mère et ne code qu’une fraction limitée du protéome mitochondrial."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Identifiez exactement deux propositions correctes concernant l’import des protéines mitochondriales.",
    "choices": [
      {
        "content": "Toutes les protéines mitochondriales sont synthétisées sur des ribosomes mitochondriaux.",
        "correct": false,
        "explanation": "La majorité est synthétisée sur des ribosomes cytosoliques puis importée."
      },
      {
        "content": "L’import de protéines dans la matrice est généralement compatible avec une protéine complètement repliée et oligomérique.",
        "correct": false,
        "explanation": "L’import classique via TOM/TIM nécessite en général un état non replié ou partiellement déplié."
      },
      {
        "content": "Une protéine nucléaire destinée à la mitochondrie doit obligatoirement transiter par le Golgi.",
        "correct": false,
        "explanation": "L’import mitochondrial se fait directement depuis le cytosol sans passage obligatoire par le Golgi."
      },
      {
        "content": "Le potentiel électrique de la membrane interne contribue à l’import de nombreuses protéines vers la matrice.",
        "correct": true,
        "explanation": "La composante électrique de la force proton-motrice favorise l’entrée de préséquences chargées positivement."
      },
      {
        "content": "Le complexe SAM participe à l’assemblage de protéines β-tonneau dans la membrane externe.",
        "correct": true,
        "explanation": "SAM signifie Sorting and Assembly Machinery."
      }
    ],
    "explanation": "La majorité des protéines mitochondriales est codée par le noyau, synthétisée dans le cytosol puis importée par des complexes tels que TOM, TIM et SAM.",
    "requiredSelectionCount": 2
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Identifiez les affirmations justes au sujet des métabolismes de la matrice mitochondriale.",
    "choices": [
      {
        "content": "La matrice contient des ions, des enzymes métaboliques, des ribosomes et l’ADN mitochondrial.",
        "correct": true,
        "explanation": "Elle constitue le compartiment interne de la mitochondrie."
      },
      {
        "content": "Le complexe pyruvate déshydrogénase transforme le pyruvate en acétyl-CoA.",
        "correct": true,
        "explanation": "Cette réaction produit aussi du NADH et du CO2."
      },
      {
        "content": "La décarboxylation oxydative du pyruvate produit du lactate comme produit principal.",
        "correct": false,
        "explanation": "Elle produit de l’acétyl-CoA, du NADH et du CO2."
      },
      {
        "content": "Le pyruvate issu de la glycolyse cytosolique peut entrer dans la matrice mitochondriale.",
        "correct": true,
        "explanation": "Le mitochondrial pyruvate carrier permet son passage à travers la membrane interne."
      },
      {
        "content": "Le cycle de Krebs consomme directement de l’oxygène moléculaire à chaque réaction.",
        "correct": false,
        "explanation": "L’O2 est consommé par la chaîne respiratoire, pas directement par le cycle de Krebs."
      }
    ],
    "explanation": "La matrice héberge notamment la décarboxylation oxydative du pyruvate, le cycle de Krebs et la β-oxydation, qui produisent des coenzymes réduits pour la chaîne respiratoire."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Sur le thème des navettes et transporteurs mitochondriaux, quelle proposition est juste ?",
    "choices": [
      {
        "content": "L’ATP synthétisé dans la matrice reste définitivement dans la mitochondrie.",
        "correct": false,
        "explanation": "Il est exporté vers le cytosol via l’ANT."
      },
      {
        "content": "Les acides gras à longue chaîne utilisent notamment la navette carnitine pour accéder à la β-oxydation mitochondriale.",
        "correct": true,
        "explanation": "La carnitine permet le transfert des groupements acyles à travers la membrane interne."
      },
      {
        "content": "Le pyruvate traverse la membrane interne uniquement par diffusion simple.",
        "correct": false,
        "explanation": "Un transporteur mitochondrial du pyruvate intervient."
      },
      {
        "content": "Le NAD+ et le NADH cytosoliques diffusent librement à travers la membrane interne.",
        "correct": false,
        "explanation": "La membrane interne est imperméable à ces coenzymes ; les navettes transfèrent les équivalents réducteurs."
      },
      {
        "content": "La navette glycérol-3-phosphate injecte directement des électrons dans le complexe II.",
        "correct": false,
        "explanation": "Elle réduit l’ubiquinone via une déshydrogénase distincte du complexe II."
      }
    ],
    "explanation": "La membrane interne impose des échanges sélectifs : navettes redox et transporteurs permettent le couplage entre métabolisme cytosolique et mitochondrial."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel complexe du cycle de Krebs est aussi le complexe II de la chaîne respiratoire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "succinate déshydrogénase",
        "succinate dehydrogenase",
        "complexe II"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La succinate déshydrogénase est à la fois enzyme du cycle de Krebs et complexe II."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRPL",
    "question": "Concernant le génome mitochondrial et l’autonomie limitée de l’organite, identifiez exactement cinq affirmations correctes parmi les dix proposées.",
    "choices": [
      {
        "content": "L’ADN mitochondrial humain mesure environ 16,6 kb.",
        "correct": true,
        "explanation": "Sa longueur est d’environ 16 569 paires de bases."
      },
      {
        "content": "Le génome mitochondrial humain contient des introns abondants comparables à ceux de nombreux gènes nucléaires.",
        "correct": false,
        "explanation": "Il est très compact et ne présente pas cette organisation riche en introns."
      },
      {
        "content": "L’ADN mitochondrial humain est circulaire.",
        "correct": true,
        "explanation": "Le génome mitochondrial humain est une petite molécule d’ADN circulaire."
      },
      {
        "content": "La réplication de l’ADN mitochondrial est strictement limitée à la phase S nucléaire.",
        "correct": false,
        "explanation": "La réplication mitochondriale n’est pas couplée de façon stricte à la phase S du cycle nucléaire."
      },
      {
        "content": "Le génome mitochondrial humain code 13 protéines de la phosphorylation oxydative.",
        "correct": true,
        "explanation": "Il code aussi 22 ARNt et 2 ARNr."
      },
      {
        "content": "L’ADN mitochondrial est enfermé dans une enveloppe nucléaire propre.",
        "correct": false,
        "explanation": "Il se trouve dans la matrice sous forme de nucléoïdes, sans enveloppe nucléaire."
      },
      {
        "content": "L’hétéroplasmie signifie qu’une cellule ne contient qu’une seule copie d’ADN mitochondrial.",
        "correct": false,
        "explanation": "Elle désigne la coexistence de génomes mitochondriaux différents."
      },
      {
        "content": "La transmission de l’ADN mitochondrial est habituellement maternelle.",
        "correct": true,
        "explanation": "Chez l’humain, les mitochondries de l’embryon proviennent presque exclusivement de l’ovocyte."
      },
      {
        "content": "L’ADN mitochondrial code toutes les protéines nécessaires à la mitochondrie.",
        "correct": false,
        "explanation": "La très grande majorité du protéome mitochondrial est d’origine nucléaire."
      },
      {
        "content": "Le code génétique mitochondrial humain présente quelques différences par rapport au code nucléaire.",
        "correct": true,
        "explanation": "Certaines correspondances codon–acide aminé diffèrent."
      }
    ],
    "explanation": "Le génome mitochondrial humain est petit, circulaire, transmis habituellement par la mère et ne code qu’une fraction limitée du protéome mitochondrial.",
    "requiredSelectionCount": 5
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant l’import des protéines mitochondriales, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le complexe TOM est situé dans la membrane interne.",
        "correct": false,
        "explanation": "TOM est localisé dans la membrane externe."
      },
      {
        "content": "La peptidase matricielle MPP peut cliver certaines préséquences après import.",
        "correct": true,
        "explanation": "De nombreuses protéines de matrice sont maturées après translocation."
      },
      {
        "content": "La grande majorité des protéines mitochondriales est codée par le génome nucléaire.",
        "correct": true,
        "explanation": "La mitochondrie ne code qu’une petite fraction de son protéome ; la plupart des protéines sont importées."
      },
      {
        "content": "De nombreuses protéines destinées à la matrice portent une préséquence N-terminale amphipathique.",
        "correct": true,
        "explanation": "Cette préséquence peut être reconnue par la machinerie TOM/TIM23 puis clivée dans la matrice."
      },
      {
        "content": "Le complexe TOM constitue une porte d’entrée majeure à travers la membrane externe.",
        "correct": true,
        "explanation": "TOM signifie Translocase of the Outer Membrane."
      }
    ],
    "explanation": "La majorité des protéines mitochondriales est codée par le noyau, synthétisée dans le cytosol puis importée par des complexes tels que TOM, TIM et SAM."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les navettes et transporteurs mitochondriaux, quelles propositions sont incorrectes ?",
    "choices": [
      {
        "content": "Les acides gras à longue chaîne utilisent notamment la navette carnitine pour accéder à la β-oxydation mitochondriale.",
        "correct": false,
        "explanation": "La carnitine permet le transfert des groupements acyles à travers la membrane interne."
      },
      {
        "content": "La navette glycérol-3-phosphate injecte directement des électrons dans le complexe II.",
        "correct": true,
        "explanation": "Elle réduit l’ubiquinone via une déshydrogénase distincte du complexe II."
      },
      {
        "content": "Le NAD+ et le NADH cytosoliques diffusent librement à travers la membrane interne.",
        "correct": true,
        "explanation": "La membrane interne est imperméable à ces coenzymes ; les navettes transfèrent les équivalents réducteurs."
      },
      {
        "content": "Les transporteurs de la membrane interne contribuent au couplage entre métabolisme cytosolique et mitochondrial.",
        "correct": false,
        "explanation": "Ils assurent des échanges sélectifs de métabolites et de nucléotides."
      },
      {
        "content": "Le phosphate inorganique doit aussi être importé dans la matrice pour former de l’ATP.",
        "correct": false,
        "explanation": "Un transporteur de phosphate contribue à fournir Pi à l’ATP synthase."
      }
    ],
    "explanation": "La membrane interne impose des échanges sélectifs : navettes redox et transporteurs permettent le couplage entre métabolisme cytosolique et mitochondrial."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans quel compartiment cellulaire se déroule la glycolyse ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cytosol",
        "cytoplasme",
        "dans le cytosol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La glycolyse est cytosolique ; le pyruvate peut ensuite entrer dans la mitochondrie."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos du génome mitochondrial et l’autonomie limitée de l’organite, quelle affirmation est correcte ?",
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
        "content": "Les ribosomes mitochondriaux participent à la traduction des gènes mitochondriaux codant des protéines.",
        "correct": true,
        "explanation": "Ils traduisent les ARN messagers mitochondriaux dans la matrice."
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
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les métabolismes associés à la matrice mitochondriale ?",
    "choices": [
      {
        "content": "La glycolyse mitochondriale produit directement le pyruvate dans la matrice.",
        "correct": false,
        "explanation": "La glycolyse se déroule dans le cytosol."
      },
      {
        "content": "Les acides gras à très longue chaîne sont pris en charge préférentiellement par le peroxysome avant un éventuel relais mitochondrial.",
        "correct": true,
        "explanation": "Le peroxysome raccourcit notamment les VLCFA."
      },
      {
        "content": "La β-oxydation mitochondriale des acides gras se déroule principalement dans la matrice.",
        "correct": true,
        "explanation": "Elle fournit de l’acétyl-CoA, du NADH et du FADH2."
      },
      {
        "content": "La succinate déshydrogénase appartient à la fois au cycle de Krebs et au complexe II de la chaîne respiratoire.",
        "correct": true,
        "explanation": "Elle relie directement le métabolisme du succinate au transfert d’électrons vers l’ubiquinone."
      },
      {
        "content": "L’acétyl-CoA traverse librement la membrane interne mitochondriale.",
        "correct": false,
        "explanation": "La membrane interne ne laisse pas passer librement l’acétyl-CoA ; des navettes assurent les échanges de carbone selon le contexte."
      }
    ],
    "explanation": "La matrice héberge notamment la décarboxylation oxydative du pyruvate, le cycle de Krebs et la β-oxydation, qui produisent des coenzymes réduits pour la chaîne respiratoire."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle navette transfère les équivalents réducteurs du NADH cytosolique vers du NADH matriciel ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "navette malate-aspartate",
        "malate-aspartate",
        "navette malate aspartate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La navette malate-aspartate permet une entrée des électrons au niveau du complexe I."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sur le thème de l’import des protéines mitochondriales, quelles sont les deux affirmations justes ?",
    "choices": [
      {
        "content": "L’import de protéines dans la matrice est généralement compatible avec une protéine complètement repliée et oligomérique.",
        "correct": false,
        "explanation": "L’import classique via TOM/TIM nécessite en général un état non replié ou partiellement déplié."
      },
      {
        "content": "De nombreuses protéines destinées à la matrice portent une préséquence N-terminale amphipathique.",
        "correct": true,
        "explanation": "Cette préséquence peut être reconnue par la machinerie TOM/TIM23 puis clivée dans la matrice."
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
        "content": "Les protéines de la matrice sont toutes codées par l’ADN mitochondrial.",
        "correct": false,
        "explanation": "La plupart sont codées par le noyau."
      }
    ],
    "explanation": "La majorité des protéines mitochondriales est codée par le noyau, synthétisée dans le cytosol puis importée par des complexes tels que TOM, TIM et SAM.",
    "requiredSelectionCount": 2
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi ces propositions relatives aux navettes et transporteurs mitochondriaux, lesquelles sont justes ?",
    "choices": [
      {
        "content": "La navette malate-aspartate peut transférer les équivalents réducteurs du NADH cytosolique vers du NADH matriciel.",
        "correct": true,
        "explanation": "Les électrons peuvent ensuite entrer dans la chaîne au complexe I."
      },
      {
        "content": "La navette glycérol-3-phosphate transfère des électrons vers l’ubiquinone en contournant le complexe I.",
        "correct": true,
        "explanation": "La glycérol-3-phosphate déshydrogénase mitochondriale utilise FAD et réduit la coenzyme Q."
      },
      {
        "content": "Le transporteur ADP/ATP échange l’ADP cytosolique contre l’ATP matriciel à travers la membrane interne.",
        "correct": true,
        "explanation": "L’ANT assure cet antiport essentiel."
      },
      {
        "content": "La navette malate-aspartate impose un rendement identique à celui de la navette glycérol-3-phosphate.",
        "correct": false,
        "explanation": "Le point d’entrée différent dans la chaîne peut modifier le rendement en ATP."
      },
      {
        "content": "Le NADH cytosolique ne traverse pas librement la membrane interne mitochondriale.",
        "correct": true,
        "explanation": "Ses équivalents réducteurs sont transférés par des navettes."
      }
    ],
    "explanation": "La membrane interne impose des échanges sélectifs : navettes redox et transporteurs permettent le couplage entre métabolisme cytosolique et mitochondrial."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant le génome mitochondrial et l’autonomie limitée de l’organite, quelle proposition est exacte ?",
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
        "content": "L’ADN mitochondrial code toutes les protéines nécessaires à la mitochondrie.",
        "correct": false,
        "explanation": "La très grande majorité du protéome mitochondrial est d’origine nucléaire."
      },
      {
        "content": "L’ADN mitochondrial humain est circulaire.",
        "correct": true,
        "explanation": "Le génome mitochondrial humain est une petite molécule d’ADN circulaire."
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
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les métabolismes de la matrice mitochondriale ?",
    "choices": [
      {
        "content": "Le pyruvate issu de la glycolyse cytosolique peut entrer dans la matrice mitochondriale.",
        "correct": true,
        "explanation": "Le mitochondrial pyruvate carrier permet son passage à travers la membrane interne."
      },
      {
        "content": "Le cycle de Krebs se déroule dans l’espace intermembranaire.",
        "correct": false,
        "explanation": "Il se déroule principalement dans la matrice."
      },
      {
        "content": "Le cycle de Krebs consomme directement de l’oxygène moléculaire à chaque réaction.",
        "correct": false,
        "explanation": "L’O2 est consommé par la chaîne respiratoire, pas directement par le cycle de Krebs."
      },
      {
        "content": "La matrice contient des ions, des enzymes métaboliques, des ribosomes et l’ADN mitochondrial.",
        "correct": true,
        "explanation": "Elle constitue le compartiment interne de la mitochondrie."
      },
      {
        "content": "La décarboxylation oxydative du pyruvate produit du lactate comme produit principal.",
        "correct": false,
        "explanation": "Elle produit de l’acétyl-CoA, du NADH et du CO2."
      }
    ],
    "explanation": "La matrice héberge notamment la décarboxylation oxydative du pyruvate, le cycle de Krebs et la β-oxydation, qui produisent des coenzymes réduits pour la chaîne respiratoire."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Environ quelle est la taille de l’ADN mitochondrial humain ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "16,6 kb",
        "16.6 kb",
        "16,5 kb",
        "16.5 kb",
        "environ 16,6 kb",
        "environ 16.6 kb",
        "16569 pb"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le génome mitochondrial humain mesure environ 16,6 kb."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de l’import des protéines mitochondriales, quelle affirmation est correcte ?",
    "choices": [
      {
        "content": "Une protéine nucléaire destinée à la mitochondrie doit obligatoirement transiter par le Golgi.",
        "correct": false,
        "explanation": "L’import mitochondrial se fait directement depuis le cytosol sans passage obligatoire par le Golgi."
      },
      {
        "content": "Le complexe TOM est situé dans la membrane interne.",
        "correct": false,
        "explanation": "TOM est localisé dans la membrane externe."
      },
      {
        "content": "Toutes les protéines mitochondriales sont synthétisées sur des ribosomes mitochondriaux.",
        "correct": false,
        "explanation": "La majorité est synthétisée sur des ribosomes cytosoliques puis importée."
      },
      {
        "content": "L’import de protéines dans la matrice est généralement compatible avec une protéine complètement repliée et oligomérique.",
        "correct": false,
        "explanation": "L’import classique via TOM/TIM nécessite en général un état non replié ou partiellement déplié."
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
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de protéines de la phosphorylation oxydative sont codées par l’ADN mitochondrial humain ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "13",
        "treize",
        "13 protéines"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le génome mitochondrial humain code 13 protéines de la phosphorylation oxydative."
  }
];
