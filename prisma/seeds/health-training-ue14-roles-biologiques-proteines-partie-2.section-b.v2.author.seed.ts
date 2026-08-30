import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des protéines, partie 2 — Section B — Lipoprotéines, énergie et matrice extracellulaire */
export const UE14_BIOCH_CH13_SECTION_B_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les apolipoprotéines ?",
    "choices": [
      {
        "content": "Les apolipoprotéines sont les constituants protéiques des lipoprotéines plasmatiques.",
        "correct": true,
        "explanation": "Elles stabilisent les particules et assurent aussi des fonctions métaboliques."
      },
      {
        "content": "ApoA-I est une apolipoprotéine majeure des HDL.",
        "correct": true,
        "explanation": "Elle joue un rôle structural et fonctionnel dans les HDL."
      },
      {
        "content": "ApoB-100 est absente des LDL.",
        "correct": false,
        "explanation": "Elle en est l'apolipoprotéine structurale principale."
      },
      {
        "content": "ApoB-100 est une apolipoprotéine structurale majeure des VLDL, IDL et LDL.",
        "correct": true,
        "explanation": "Une molécule d'apoB-100 structure ces particules."
      },
      {
        "content": "Certaines apolipoprotéines servent de ligands de récepteurs ou de cofacteurs enzymatiques.",
        "correct": true,
        "explanation": "Elles ne sont pas de simples éléments passifs de la surface."
      }
    ],
    "explanation": "Les apolipoprotéines sont des protéines de surface des lipoprotéines ; selon leur identité, elles ont des rôles structuraux, enzymatiques ou de reconnaissance."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant l'organisation d'une lipoprotéine plasmatique, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les lipoprotéines sont dépourvues de toute protéine.",
        "correct": false,
        "explanation": "Elles contiennent des apolipoprotéines."
      },
      {
        "content": "Toutes les lipoprotéines ont exactement la même composition.",
        "correct": false,
        "explanation": "Leurs proportions diffèrent fortement."
      },
      {
        "content": "Le cœur contient surtout des triacylglycérols et des esters de cholestérol.",
        "correct": true,
        "explanation": "Ces lipides neutres et hydrophobes sont enfouis au centre."
      },
      {
        "content": "Les esters de cholestérol sont majoritairement exposés au milieu aqueux en surface.",
        "correct": false,
        "explanation": "Ils sont hydrophobes et se trouvent surtout dans le cœur."
      },
      {
        "content": "Le cœur d'une lipoprotéine est principalement constitué de phospholipides chargés exposés à l'eau.",
        "correct": false,
        "explanation": "Les phospholipides sont surtout en surface."
      }
    ],
    "explanation": "Une lipoprotéine possède un cœur de lipides neutres hydrophobes entouré d'une monocouche de lipides amphiphiles et d'apolipoprotéines."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Existe-t-il chez l'humain une réserve protéique dédiée comparable au glycogène ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, pas de réserve protéique dédiée",
        "pas de réserve protéique dédiée"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les protéines ne constituent pas une réserve énergétique spécialisée, mais leur catabolisme peut fournir des acides aminés lors de déficit énergétique."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la matrice extracellulaire, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Elle contribue à l'architecture et aux propriétés mécaniques des tissus.",
        "correct": true,
        "explanation": "Les collagènes apportent par exemple une résistance à la traction."
      },
      {
        "content": "La matrice extracellulaire est composée uniquement d'ADN.",
        "correct": false,
        "explanation": "Elle comprend surtout protéines et glycoconjugués."
      },
      {
        "content": "Elle est identique dans tous les tissus.",
        "correct": false,
        "explanation": "Sa composition et son organisation varient."
      },
      {
        "content": "La matrice extracellulaire est un réseau de macromolécules situé autour des cellules.",
        "correct": true,
        "explanation": "Elle organise l'environnement mécanique et biochimique des tissus."
      },
      {
        "content": "Elle n'existe qu'à l'intérieur du noyau.",
        "correct": false,
        "explanation": "Elle se situe dans l'espace extracellulaire."
      }
    ],
    "explanation": "La matrice extracellulaire associe collagènes, élastine, glycoprotéines et protéoglycanes dans un réseau structural et signalétique."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant la durée de vie des protéines matricielles.",
    "choices": [
      {
        "content": "Les collagènes sont nécessairement renouvelés en quelques secondes.",
        "correct": false,
        "explanation": "Leur durée de vie peut être très longue."
      },
      {
        "content": "La matrice extracellulaire n'est jamais remodelée.",
        "correct": false,
        "explanation": "Elle est continuellement remodelée à des vitesses variables."
      },
      {
        "content": "Toutes les protéines matricielles ont exactement la même demi-vie.",
        "correct": false,
        "explanation": "Le renouvellement est très variable."
      },
      {
        "content": "Certains collagènes et l'élastine ont une durée de vie très longue dans les tissus.",
        "correct": true,
        "explanation": "Leur renouvellement peut être beaucoup plus lent que celui de nombreuses protéines intracellulaires."
      },
      {
        "content": "La demi-vie varie fortement selon la protéine matricielle, le tissu et l'état physiologique.",
        "correct": true,
        "explanation": "Il n'existe pas une demi-vie unique de la matrice."
      }
    ],
    "explanation": "Les protéines matricielles n'ont pas toutes la même demi-vie ; certains collagènes et l'élastine sont particulièrement durables.",
    "requiredSelectionCount": 2
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'abondance des collagènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les collagènes constituent la famille protéique la plus abondante de l'organisme humain.",
        "correct": true,
        "explanation": "Ils représentent une fraction importante de la masse protéique corporelle."
      },
      {
        "content": "Les collagènes sont une famille mineure absente des tissus conjonctifs.",
        "correct": false,
        "explanation": "Ils sont majeurs dans de nombreuses matrices."
      },
      {
        "content": "Le collagène de type I est le collagène le plus abondant de l'organisme.",
        "correct": true,
        "explanation": "Il domine notamment dans l'os, la peau et les tendons."
      },
      {
        "content": "Le collagène IV est le seul collagène de l'organisme.",
        "correct": false,
        "explanation": "Il existe 28 types."
      },
      {
        "content": "Tous les collagènes contiennent des domaines en triple hélice.",
        "correct": true,
        "explanation": "La longueur et les interruptions de ces domaines varient selon le type."
      }
    ],
    "explanation": "Les 28 types de collagènes partagent des domaines en triple hélice mais se distinguent par leur organisation et leurs tissus de prédilection."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant les caractères structuraux des collagènes, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les collagènes s'organisent en assemblages supramoléculaires variables.",
        "correct": true,
        "explanation": "Fibrilles, réseaux ou structures d'ancrage dépendent du type."
      },
      {
        "content": "Le motif de base des domaines collagéniques est Ala-Ala-Ala.",
        "correct": false,
        "explanation": "Le motif caractéristique est Gly-X-Y."
      },
      {
        "content": "La triple hélice collagénique contient quatre chaînes.",
        "correct": false,
        "explanation": "Elle en contient trois."
      },
      {
        "content": "Un domaine en triple hélice isolé suffit à classer toute protéine comme collagène.",
        "correct": false,
        "explanation": "Certaines protéines non collagéniques possèdent des domaines collagen-like."
      },
      {
        "content": "La glycine est exclue du centre de la triple hélice.",
        "correct": false,
        "explanation": "Sa petite taille permet précisément le compactage central."
      }
    ],
    "explanation": "Les domaines collagéniques sont fondés sur des répétitions Gly-X-Y assemblées en triple hélice de trois chaînes."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "À quelle fréquence la glycine apparaît-elle dans le motif collagénique régulier ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "tous les trois résidus",
        "un résidu sur trois",
        "une fois tous les trois résidus"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La répétition Gly-X-Y place la glycine tous les trois résidus ; Pro et 4-Hyp sont fréquentes et favorisent la structure collagénique."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRPL",
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Les collagènes I, II, III, V, XI, XXIV et XXVII sont classés parmi les collagènes fibrillaires.",
        "correct": true,
        "explanation": "Ils forment des fibrilles avec une organisation périodique."
      },
      {
        "content": "Les trois chaînes s'enroulent ensemble en une superhélice droite.",
        "correct": true,
        "explanation": "La triple hélice a une chiralité opposée à celle des chaînes individuelles."
      },
      {
        "content": "Les liaisons hydrogène interchaînes impliquent principalement le NH de glycine et le carbonyle d'une chaîne voisine.",
        "correct": true,
        "explanation": "Ces liaisons du squelette contribuent directement à la cohésion."
      },
      {
        "content": "Le collagène VII forme des fibrilles d'ancrage.",
        "correct": true,
        "explanation": "Il joue un rôle particulier au niveau des jonctions épithélio-conjonctives."
      },
      {
        "content": "La superhélice collagénique finale est gauche.",
        "correct": false,
        "explanation": "Elle est droite."
      },
      {
        "content": "Chaque chaîne adopte une hélice gauche de type polyproline II-like.",
        "correct": true,
        "explanation": "Cette conformation n'est pas une hélice alpha classique."
      },
      {
        "content": "Les trois chaînes individuelles sont des hélices alpha droites classiques.",
        "correct": false,
        "explanation": "Elles sont de type polyproline II-like gauche."
      },
      {
        "content": "La glycine se situe à la périphérie la plus encombrée de la triple hélice.",
        "correct": false,
        "explanation": "Elle est enfouie vers l'axe central."
      },
      {
        "content": "Tous les collagènes appartiennent à la même classe supramoléculaire.",
        "correct": false,
        "explanation": "La classification dépend de leur architecture."
      },
      {
        "content": "Le collagène IV forme principalement de longues fibres tendineuses.",
        "correct": false,
        "explanation": "Il forme des réseaux de membranes basales."
      }
    ],
    "requiredSelectionCount": 5,
    "explanation": "Chaque chaîne collagénique est une hélice gauche polyproline-II-like ; trois chaînes forment une superhélice droite stabilisée par des liaisons H du squelette et par la 4-hydroxyproline. Les collagènes se répartissent en familles supramoléculaires distinctes : fibrillaires, réseaux, FACIT, transmembranaires, multiplexines, ancrage ou microfibrilles perlées."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les assemblages supramoléculaires des collagènes, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le collagène VI est un collagène fibrillaire classique identique au type I.",
        "correct": false,
        "explanation": "Il forme plutôt des microfibrilles perlées."
      },
      {
        "content": "Le collagène VII forme des fibrilles d'ancrage.",
        "correct": true,
        "explanation": "Il joue un rôle particulier au niveau des jonctions épithélio-conjonctives."
      },
      {
        "content": "Les collagènes I, II, III, V, XI, XXIV et XXVII sont classés parmi les collagènes fibrillaires.",
        "correct": true,
        "explanation": "Ils forment des fibrilles avec une organisation périodique."
      },
      {
        "content": "Les collagènes IV, VIII et X sont classés comme collagènes formant des réseaux.",
        "correct": true,
        "explanation": "Ils ne forment pas les longues fibrilles typiques du type I."
      },
      {
        "content": "Le collagène VI forme classiquement des microfibrilles perlées.",
        "correct": true,
        "explanation": "Il ne doit pas être rangé avec certitude dans le même groupe que IV/VIII/X."
      }
    ],
    "explanation": "Les collagènes se répartissent en familles supramoléculaires distinctes : fibrillaires, réseaux, FACIT, transmembranaires, multiplexines, ancrage ou microfibrilles perlées."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'utilisation énergétique des protéines, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Les protéines ne peuvent jamais contribuer à la production d'énergie.",
        "correct": false,
        "explanation": "Leurs acides aminés peuvent être catabolisés."
      },
      {
        "content": "Les acides aminés en excès ne sont pas stockés dans un compartiment spécialisé comparable au glycogène ou aux triacylglycérols.",
        "correct": true,
        "explanation": "Ils sont incorporés aux protéines ou catabolisés."
      },
      {
        "content": "Les acides aminés alimentaires excédentaires sont stockés tels quels pendant des mois.",
        "correct": false,
        "explanation": "Il n'existe pas de réserve dédiée d'acides aminés."
      },
      {
        "content": "Le jeûne prolongé augmente indéfiniment la protéolyse sans adaptation.",
        "correct": false,
        "explanation": "L'utilisation accrue des corps cétoniques contribue à l'épargne protéique."
      },
      {
        "content": "L'organisme ne dispose pas d'un stock protéique dédié exclusivement au stockage énergétique.",
        "correct": true,
        "explanation": "Les protéines corporelles ont d'abord des fonctions structurales ou fonctionnelles."
      }
    ],
    "explanation": "Les protéines ne constituent pas une réserve énergétique spécialisée, mais leur catabolisme peut fournir des acides aminés lors de déficit énergétique."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Citez un grand constituant macromoléculaire de la matrice extracellulaire.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "collagène",
        "collagènes",
        "élastine",
        "glycoprotéine",
        "glycoprotéines",
        "protéoglycane",
        "protéoglycanes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La matrice extracellulaire associe collagènes, élastine, glycoprotéines et protéoglycanes dans un réseau structural et signalétique."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la durée de vie des protéines matricielles ?",
    "choices": [
      {
        "content": "Une longue durée de vie favorise l'accumulation de modifications au cours du vieillissement.",
        "correct": true,
        "explanation": "Les protéines peu renouvelées peuvent conserver longtemps des altérations."
      },
      {
        "content": "Toutes les protéines matricielles ont exactement la même demi-vie.",
        "correct": false,
        "explanation": "Le renouvellement est très variable."
      },
      {
        "content": "Une longue durée de vie empêche toute modification chimique de la protéine.",
        "correct": false,
        "explanation": "Elle peut au contraire favoriser l'accumulation de modifications."
      },
      {
        "content": "Les collagènes sont nécessairement renouvelés en quelques secondes.",
        "correct": false,
        "explanation": "Leur durée de vie peut être très longue."
      },
      {
        "content": "La matrice extracellulaire n'est jamais remodelée.",
        "correct": false,
        "explanation": "Elle est continuellement remodelée à des vitesses variables."
      }
    ],
    "explanation": "Les protéines matricielles n'ont pas toutes la même demi-vie ; certains collagènes et l'élastine sont particulièrement durables."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'abondance des collagènes, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "On décrit 28 types de collagènes chez les vertébrés.",
        "correct": true,
        "explanation": "Ils sont numérotés en chiffres romains I à XXVIII."
      },
      {
        "content": "Le collagène de type I est le collagène le plus abondant de l'organisme.",
        "correct": true,
        "explanation": "Il domine notamment dans l'os, la peau et les tendons."
      },
      {
        "content": "Tous les collagènes contiennent des domaines en triple hélice.",
        "correct": true,
        "explanation": "La longueur et les interruptions de ces domaines varient selon le type."
      },
      {
        "content": "Tous les 28 collagènes forment des fibrilles identiques.",
        "correct": false,
        "explanation": "Plusieurs collagènes sont non fibrillaires et forment d'autres assemblages."
      },
      {
        "content": "Chaque type de collagène possède exactement la même organisation supramoléculaire.",
        "correct": false,
        "explanation": "Les assemblages sont variés."
      }
    ],
    "explanation": "Les 28 types de collagènes partagent des domaines en triple hélice mais se distinguent par leur organisation et leurs tissus de prédilection."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel motif tripeptidique répétitif caractérise les domaines collagéniques ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Gly-X-Y",
        "Gly-Xaa-Yaa",
        "glycine-X-Y"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les domaines collagéniques sont fondés sur des répétitions Gly-X-Y assemblées en triple hélice de trois chaînes."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur l'abondance des collagènes, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Le collagène de type I est le collagène le plus abondant de l'organisme.",
        "correct": true,
        "explanation": "Il domine notamment dans l'os, la peau et les tendons."
      },
      {
        "content": "Les collagènes sont une famille mineure absente des tissus conjonctifs.",
        "correct": false,
        "explanation": "Ils sont majeurs dans de nombreuses matrices."
      },
      {
        "content": "Tous les 28 collagènes forment des fibrilles identiques.",
        "correct": false,
        "explanation": "Plusieurs collagènes sont non fibrillaires et forment d'autres assemblages."
      },
      {
        "content": "Le collagène IV est le seul collagène de l'organisme.",
        "correct": false,
        "explanation": "Il existe 28 types."
      },
      {
        "content": "Tous les collagènes contiennent des domaines en triple hélice.",
        "correct": true,
        "explanation": "La longueur et les interruptions de ces domaines varient selon le type."
      }
    ],
    "explanation": "Les 28 types de collagènes partagent des domaines en triple hélice mais se distinguent par leur organisation et leurs tissus de prédilection.",
    "requiredSelectionCount": 2
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la triple hélice du collagène, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Chaque chaîne adopte une hélice gauche de type polyproline II-like.",
        "correct": true,
        "explanation": "Cette conformation n'est pas une hélice alpha classique."
      },
      {
        "content": "Les trois chaînes individuelles sont des hélices alpha droites classiques.",
        "correct": false,
        "explanation": "Elles sont de type polyproline II-like gauche."
      },
      {
        "content": "Les liaisons hydrogène interchaînes impliquent principalement le NH de glycine et le carbonyle d'une chaîne voisine.",
        "correct": true,
        "explanation": "Ces liaisons du squelette contribuent directement à la cohésion."
      },
      {
        "content": "La 4-hydroxyproline stabilise fortement la triple hélice, notamment par des effets conformationnels et d'hydratation.",
        "correct": true,
        "explanation": "Il est trop simpliste d'attribuer cette stabilité uniquement à des liaisons H directes de son OH."
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
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur les assemblages supramoléculaires des collagènes, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le collagène IV forme principalement de longues fibres tendineuses.",
        "correct": false,
        "explanation": "Il forme des réseaux de membranes basales."
      },
      {
        "content": "Tous les collagènes appartiennent à la même classe supramoléculaire.",
        "correct": false,
        "explanation": "La classification dépend de leur architecture."
      },
      {
        "content": "Le collagène VII forme des fibrilles d'ancrage.",
        "correct": true,
        "explanation": "Il joue un rôle particulier au niveau des jonctions épithélio-conjonctives."
      },
      {
        "content": "Le collagène VII est un transporteur plasmatique de lipides.",
        "correct": false,
        "explanation": "C'est un collagène d'ancrage."
      },
      {
        "content": "Le collagène VI est un collagène fibrillaire classique identique au type I.",
        "correct": false,
        "explanation": "Il forme plutôt des microfibrilles perlées."
      }
    ],
    "explanation": "Les collagènes se répartissent en familles supramoléculaires distinctes : fibrillaires, réseaux, FACIT, transmembranaires, multiplexines, ancrage ou microfibrilles perlées."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les apolipoprotéines ?",
    "choices": [
      {
        "content": "ApoB-100 est une apolipoprotéine structurale majeure des VLDL, IDL et LDL.",
        "correct": true,
        "explanation": "Une molécule d'apoB-100 structure ces particules."
      },
      {
        "content": "Certaines apolipoprotéines servent de ligands de récepteurs ou de cofacteurs enzymatiques.",
        "correct": true,
        "explanation": "Elles ne sont pas de simples éléments passifs de la surface."
      },
      {
        "content": "Les apolipoprotéines constituent le cœur hydrophobe neutre des lipoprotéines.",
        "correct": false,
        "explanation": "Elles sont localisées à la surface des particules."
      },
      {
        "content": "ApoB-100 est absente des LDL.",
        "correct": false,
        "explanation": "Elle en est l'apolipoprotéine structurale principale."
      },
      {
        "content": "Toutes les apolipoprotéines ont exactement la même fonction.",
        "correct": false,
        "explanation": "Leurs rôles varient : structure, ligands, cofacteurs, échanges."
      }
    ],
    "explanation": "Les apolipoprotéines sont des protéines de surface des lipoprotéines ; selon leur identité, elles ont des rôles structuraux, enzymatiques ou de reconnaissance."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quels lipides neutres dominent dans le cœur hydrophobe des lipoprotéines ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "triacylglycérols et esters de cholestérol",
        "triglycérides et esters de cholestérol",
        "TAG et esters de cholestérol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Une lipoprotéine possède un cœur de lipides neutres hydrophobes entouré d'une monocouche de lipides amphiphiles et d'apolipoprotéines."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur les apolipoprotéines, laquelle est correcte ?",
    "choices": [
      {
        "content": "ApoA-I est un triacylglycérol.",
        "correct": false,
        "explanation": "C'est une protéine."
      },
      {
        "content": "ApoB-100 est absente des LDL.",
        "correct": false,
        "explanation": "Elle en est l'apolipoprotéine structurale principale."
      },
      {
        "content": "Toutes les apolipoprotéines ont exactement la même fonction.",
        "correct": false,
        "explanation": "Leurs rôles varient : structure, ligands, cofacteurs, échanges."
      },
      {
        "content": "ApoB-100 est une apolipoprotéine structurale majeure des VLDL, IDL et LDL.",
        "correct": true,
        "explanation": "Une molécule d'apoB-100 structure ces particules."
      },
      {
        "content": "Les apolipoprotéines constituent le cœur hydrophobe neutre des lipoprotéines.",
        "correct": false,
        "explanation": "Elles sont localisées à la surface des particules."
      }
    ],
    "explanation": "Les apolipoprotéines sont des protéines de surface des lipoprotéines ; selon leur identité, elles ont des rôles structuraux, enzymatiques ou de reconnaissance."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Complétez le motif caractéristique des domaines collagéniques : Gly–…–…",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "X-Y",
        "X–Y",
        "X et Y",
        "Xaa-Yaa",
        "Xaa–Yaa"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le domaine collagénique régulier repose sur la répétition Gly-X-Y : la glycine revient tous les trois résidus."
  }
];
