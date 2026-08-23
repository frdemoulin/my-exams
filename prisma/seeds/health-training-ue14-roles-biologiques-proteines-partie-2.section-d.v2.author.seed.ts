import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Rôles biologiques des protéines, partie 2 — Section D — Glycoprotéines matricielles et cytosquelette */
export const UE14_BIOCH_CH13_SECTION_D_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les glycoprotéines de la matrice extracellulaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La glycosylation signifie uniquement ajout d'un triacylglycérol.",
        "correct": false,
        "explanation": "Elle correspond à l'ajout de chaînes glucidiques."
      },
      {
        "content": "Toutes les glycoprotéines matricielles ont exactement la même séquence et la même fonction.",
        "correct": false,
        "explanation": "La famille est très diverse."
      },
      {
        "content": "Les glycoprotéines matricielles ne peuvent jamais se lier à des intégrines.",
        "correct": false,
        "explanation": "Fibronectine et laminines possèdent des sites reconnus par des intégrines."
      },
      {
        "content": "Les glycoprotéines matricielles participent aux interactions cellule-matrice.",
        "correct": true,
        "explanation": "Elles relient souvent récepteurs cellulaires et autres constituants de la matrice."
      },
      {
        "content": "Leur partie glucidique peut être portée par des N- ou O-glycosylations.",
        "correct": true,
        "explanation": "La glycosylation dépend de la protéine et du tissu."
      }
    ],
    "explanation": "Les glycoprotéines matricielles sont des protéines extracellulaires modulaires et glycosylées qui organisent les interactions cellule-matrice."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la glycosylation des protéines matricielles ?",
    "choices": [
      {
        "content": "La glycosylation ne peut jamais influencer les interactions protéiques.",
        "correct": false,
        "explanation": "Elle peut fortement les moduler."
      },
      {
        "content": "La O-glycosylation exige toujours une lysine.",
        "correct": false,
        "explanation": "Elle concerne souvent sérine ou thréonine."
      },
      {
        "content": "La N-glycosylation classique se fixe directement sur une glycine sans azote.",
        "correct": false,
        "explanation": "Elle concerne l'asparagine dans des séquences compatibles."
      },
      {
        "content": "Une O-glycosylation classique peut être portée par l'oxygène d'une sérine ou d'une thréonine.",
        "correct": true,
        "explanation": "De nombreuses protéines extracellulaires portent des O-glycanes."
      },
      {
        "content": "Toutes les glycoprotéines possèdent exactement la même chaîne glucidique.",
        "correct": false,
        "explanation": "Les glycannes sont très variables."
      }
    ],
    "explanation": "La N-glycosylation porte classiquement sur Asn et l'O-glycosylation souvent sur Ser/Thr ; les glycannes modulent structure et interactions."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel motif tripeptidique de la fibronectine peut être reconnu par certaines intégrines ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "RGD",
        "Arg-Gly-Asp",
        "arginine-glycine-aspartate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La fibronectine est une glycoprotéine modulaire combinant FNI/FNII/FNIII ; certains modules portent des sites d'interaction avec intégrines et matrice."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la fibronectine et les laminines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Toutes les combinaisons théoriques de chaînes de laminine existent nécessairement in vivo.",
        "correct": false,
        "explanation": "Seul un sous-ensemble de combinaisons est observé."
      },
      {
        "content": "La fibronectine existe sous forme soluble plasmatique et sous forme fibrillaire dans la matrice.",
        "correct": true,
        "explanation": "L'assemblage cellulaire transforme des dimères en réseau fibrillaire."
      },
      {
        "content": "On décrit actuellement 16 hétérotrimères de laminine chez les mammifères dans la nomenclature courante.",
        "correct": true,
        "explanation": "Les combinaisons proviennent de plusieurs chaînes alpha, bêta et gamma."
      },
      {
        "content": "Les laminines sont des hétérotrimères composés d'une chaîne alpha, d'une bêta et d'une gamma.",
        "correct": true,
        "explanation": "Leur assemblage donne une forme globale en croix."
      },
      {
        "content": "Une laminine normale contient deux chaînes alpha et aucune chaîne gamma.",
        "correct": false,
        "explanation": "Une laminine est un hétérotrimère alpha-bêta-gamma."
      }
    ],
    "explanation": "Fibronectine et laminines sont des glycoprotéines matricielles majeures : fibronectine dimérique et modulaire, laminines hétérotrimériques alpha-bêta-gamma des membranes basales."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant les trois grands constituants du cytosquelette, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Les filaments intermédiaires sont des lipides de membrane.",
        "correct": false,
        "explanation": "Ce sont des polymères protéiques."
      },
      {
        "content": "Le cytosquelette est composé uniquement de glycogène.",
        "correct": false,
        "explanation": "Il est formé de polymères protéiques."
      },
      {
        "content": "Le cytosquelette comprend filaments d'actine, filaments intermédiaires et microtubules.",
        "correct": true,
        "explanation": "Ces trois systèmes ont des structures et propriétés complémentaires."
      },
      {
        "content": "Les filaments intermédiaires assurent notamment une résistance mécanique.",
        "correct": true,
        "explanation": "Ils forment des réseaux robustes adaptés au type cellulaire."
      },
      {
        "content": "Le cytosquelette est totalement statique.",
        "correct": false,
        "explanation": "Plusieurs de ses composants sont fortement dynamiques."
      }
    ],
    "explanation": "Le cytosquelette associe actine, filaments intermédiaires et microtubules pour architecture, mécanique, motilité et transport.",
    "requiredSelectionCount": 2
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les fonctions du cytosquelette ?",
    "choices": [
      {
        "content": "Le cytosquelette disparaît complètement dans toutes les cellules différenciées.",
        "correct": false,
        "explanation": "Il reste essentiel dans les cellules vivantes."
      },
      {
        "content": "Il participe à la migration et aux changements de forme cellulaires.",
        "correct": true,
        "explanation": "La dynamique actine-myosine est centrale dans de nombreux mouvements."
      },
      {
        "content": "Les filaments d'actine servent de rails à des myosines.",
        "correct": true,
        "explanation": "La polarité des filaments oriente le mouvement des moteurs."
      },
      {
        "content": "Le cytosquelette contribue à la division cellulaire.",
        "correct": true,
        "explanation": "Microtubules du fuseau et anneau contractile d'actine sont des exemples."
      },
      {
        "content": "Les microtubules servent de rails aux kinésines et dynéines.",
        "correct": true,
        "explanation": "Ces moteurs assurent de nombreux transports intracellulaires."
      }
    ],
    "explanation": "Le cytosquelette porte des forces, organise la forme et sert de réseau de transport pour myosines, kinésines et dynéines."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les pathologies liées au cytosquelette ?",
    "choices": [
      {
        "content": "Une protéine cytosquelettique mutée ne peut avoir aucun effet tissulaire.",
        "correct": false,
        "explanation": "Les conséquences peuvent être importantes."
      },
      {
        "content": "Les maladies cytosquelettiques n'affectent jamais la motilité ou le transport intracellulaire.",
        "correct": false,
        "explanation": "Ces fonctions peuvent être perturbées."
      },
      {
        "content": "Le cytosquelette n'a aucune importance pour le muscle cardiaque.",
        "correct": false,
        "explanation": "Il est crucial pour la mécanique du cardiomyocyte."
      },
      {
        "content": "Toute mutation d'une protéine cytosquelettique entraîne exactement la même maladie.",
        "correct": false,
        "explanation": "Les effets dépendent de la protéine et du tissu."
      },
      {
        "content": "Certaines cardiomyopathies résultent de défauts de protéines liées au cytosquelette ou à son ancrage.",
        "correct": true,
        "explanation": "Le cœur dépend fortement de l'intégrité mécanique cellulaire."
      }
    ],
    "explanation": "Les anomalies du cytosquelette peuvent produire des maladies variées, notamment dystrophies musculaires et cardiomyopathies, selon la protéine et le tissu."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment appelle-t-on l'actine monomérique globulaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "actine G",
        "G-actine",
        "G actine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'actine est une protéine de 375 résidus (~43 kDa) qui lie ATP/ADP et polymérise de G-actine en F-actine polarisée."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRPL",
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Seule l'alpha-tubuline lie un nucléotide ; la bêta n'en lie jamais.",
        "correct": false,
        "explanation": "Les deux lient du GTP/GDP, avec des propriétés différentes."
      },
      {
        "content": "L'extrémité plus expose l'alpha-tubuline.",
        "correct": false,
        "explanation": "Elle expose la bêta-tubuline."
      },
      {
        "content": "Les alpha- et bêta-tubulines lient toutes deux du GTP.",
        "correct": true,
        "explanation": "Le GTP de l'alpha-tubuline est non échangeable, celui de la bêta-tubuline est échangeable et hydrolysable."
      },
      {
        "content": "Les microtubules sont constitués d'actine G.",
        "correct": false,
        "explanation": "Ils sont constitués d'alpha/bêta-tubuline."
      },
      {
        "content": "Les deux extrémités d'un filament d'actine sont structurellement identiques et non polarisées.",
        "correct": false,
        "explanation": "Le filament est polarisé."
      },
      {
        "content": "L'extrémité plus expose la bêta-tubuline et l'extrémité moins l'alpha-tubuline.",
        "correct": true,
        "explanation": "L'orientation uniforme des dimères crée la polarité."
      },
      {
        "content": "Les microtubules ne sont jamais polarisés.",
        "correct": false,
        "explanation": "Ils possèdent des extrémités + et –."
      },
      {
        "content": "De nombreuses protéines associées à l'actine régulent nucléation, élongation, branchement ou dépolymérisation.",
        "correct": true,
        "explanation": "La dynamique cellulaire ne dépend pas de l'actine seule."
      },
      {
        "content": "Les microtubules servent de rails aux kinésines et dynéines.",
        "correct": true,
        "explanation": "Ils assurent de nombreux transports intracellulaires."
      },
      {
        "content": "Les microtubules sont des cylindres creux constitués d'hétérodimères alpha/bêta-tubuline.",
        "correct": true,
        "explanation": "Les dimères s'alignent tête-à-queue dans des protofilaments parallèles."
      }
    ],
    "requiredSelectionCount": 5,
    "explanation": "La polymérisation de l'actine est polarisée et ATP-dépendante ; l'extrémité + croît généralement plus vite et de nombreuses protéines régulent cette dynamique. Les microtubules sont des tubes polarisés, typiquement à 13 protofilaments d'hétérodimères alpha/bêta-tubuline."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les microtubules et la tubuline ?",
    "choices": [
      {
        "content": "L'extrémité plus expose l'alpha-tubuline.",
        "correct": false,
        "explanation": "Elle expose la bêta-tubuline."
      },
      {
        "content": "Les alpha- et bêta-tubulines lient toutes deux du GTP.",
        "correct": true,
        "explanation": "Le GTP de l'alpha-tubuline est non échangeable, celui de la bêta-tubuline est échangeable et hydrolysable."
      },
      {
        "content": "Seule l'alpha-tubuline lie un nucléotide ; la bêta n'en lie jamais.",
        "correct": false,
        "explanation": "Les deux lient du GTP/GDP, avec des propriétés différentes."
      },
      {
        "content": "L'extrémité plus expose la bêta-tubuline et l'extrémité moins l'alpha-tubuline.",
        "correct": true,
        "explanation": "L'orientation uniforme des dimères crée la polarité."
      },
      {
        "content": "Les microtubules sont constitués d'actine G.",
        "correct": false,
        "explanation": "Ils sont constitués d'alpha/bêta-tubuline."
      }
    ],
    "explanation": "Les microtubules sont des tubes polarisés, typiquement à 13 protofilaments d'hétérodimères alpha/bêta-tubuline."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les domaines modulaires de la fibronectine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fibronectine ne contient qu'un seul type de domaine répétitif.",
        "correct": false,
        "explanation": "Elle combine FNI, FNII et FNIII."
      },
      {
        "content": "Le motif RGD est porté dans un module FNIII et peut être reconnu par certaines intégrines.",
        "correct": true,
        "explanation": "Le site cell-binding de fibronectine implique notamment FNIII10."
      },
      {
        "content": "Chaque sous-unité de fibronectine contient des modules de type I, II et III.",
        "correct": true,
        "explanation": "La combinaison de ces modules crée différents sites de liaison."
      },
      {
        "content": "La fibronectine peut se lier à des intégrines et à d'autres composants de matrice.",
        "correct": true,
        "explanation": "Cette polyvalence explique son rôle dans l'assemblage matriciel."
      },
      {
        "content": "Le motif RGD n'est jamais reconnu par une intégrine.",
        "correct": false,
        "explanation": "Plusieurs intégrines le reconnaissent."
      }
    ],
    "explanation": "La fibronectine est une glycoprotéine modulaire combinant FNI/FNII/FNIII ; certains modules portent des sites d'interaction avec intégrines et matrice."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de chaînes polypeptidiques composent une laminine fonctionnelle ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Fibronectine et laminines sont des glycoprotéines matricielles majeures : fibronectine dimérique et modulaire, laminines hétérotrimériques alpha-bêta-gamma des membranes basales."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant les trois grands constituants du cytosquelette, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le cytosquelette est composé uniquement de glycogène.",
        "correct": false,
        "explanation": "Il est formé de polymères protéiques."
      },
      {
        "content": "Les filaments d'actine et les microtubules sont des polymères polarisés et dynamiques.",
        "correct": true,
        "explanation": "Leur dynamique permet la réorganisation cellulaire."
      },
      {
        "content": "Les filaments intermédiaires sont des lipides de membrane.",
        "correct": false,
        "explanation": "Ce sont des polymères protéiques."
      },
      {
        "content": "Il ne contient aucun microtubule.",
        "correct": false,
        "explanation": "Les microtubules sont un de ses trois grands systèmes."
      },
      {
        "content": "Le cytosquelette est totalement statique.",
        "correct": false,
        "explanation": "Plusieurs de ses composants sont fortement dynamiques."
      }
    ],
    "explanation": "Le cytosquelette associe actine, filaments intermédiaires et microtubules pour architecture, mécanique, motilité et transport."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Au sujet des fonctions du cytosquelette, sélectionnez toutes les affirmations exactes.",
    "choices": [
      {
        "content": "Les myosines se déplacent principalement sur les microtubules.",
        "correct": false,
        "explanation": "Elles utilisent l'actine."
      },
      {
        "content": "Il participe à la migration et aux changements de forme cellulaires.",
        "correct": true,
        "explanation": "La dynamique actine-myosine est centrale dans de nombreux mouvements."
      },
      {
        "content": "Le cytosquelette contribue à la division cellulaire.",
        "correct": true,
        "explanation": "Microtubules du fuseau et anneau contractile d'actine sont des exemples."
      },
      {
        "content": "Les filaments d'actine servent de rails à des myosines.",
        "correct": true,
        "explanation": "La polarité des filaments oriente le mouvement des moteurs."
      },
      {
        "content": "Le cytosquelette contribue à la résistance aux déformations.",
        "correct": true,
        "explanation": "Il porte et répartit les contraintes mécaniques."
      }
    ],
    "explanation": "Le cytosquelette porte des forces, organise la forme et sert de réseau de transport pour myosines, kinésines et dynéines."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Pourquoi les phénotypes des maladies liées au cytosquelette peuvent-ils être très variés ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "expression tissulaire différente",
        "expression différente selon les tissus",
        "fonctions différentes selon les protéines",
        "protéines et tissus différents"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les anomalies du cytosquelette peuvent produire des maladies variées, notamment dystrophies musculaires et cardiomyopathies, selon la protéine et le tissu."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant les trois grands constituants du cytosquelette.",
    "choices": [
      {
        "content": "Le cytosquelette organise la forme, le transport intracellulaire et la motilité.",
        "correct": true,
        "explanation": "Il constitue aussi un réseau de déplacement pour des moteurs moléculaires."
      },
      {
        "content": "Les filaments intermédiaires assurent notamment une résistance mécanique.",
        "correct": true,
        "explanation": "Ils forment des réseaux robustes adaptés au type cellulaire."
      },
      {
        "content": "Il ne contient aucun microtubule.",
        "correct": false,
        "explanation": "Les microtubules sont un de ses trois grands systèmes."
      },
      {
        "content": "Le cytosquelette est totalement statique.",
        "correct": false,
        "explanation": "Plusieurs de ses composants sont fortement dynamiques."
      },
      {
        "content": "Les filaments intermédiaires sont des lipides de membrane.",
        "correct": false,
        "explanation": "Ce sont des polymères protéiques."
      }
    ],
    "explanation": "Le cytosquelette associe actine, filaments intermédiaires et microtubules pour architecture, mécanique, motilité et transport.",
    "requiredSelectionCount": 2
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la polymérisation de l'actine ?",
    "choices": [
      {
        "content": "L'extrémité plus a généralement une cinétique d'élongation plus rapide que l'extrémité moins.",
        "correct": true,
        "explanation": "La polarité structurale crée des constantes d'association différentes."
      },
      {
        "content": "De nombreuses protéines associées à l'actine régulent nucléation, élongation, branchement ou dépolymérisation.",
        "correct": true,
        "explanation": "La dynamique cellulaire ne dépend pas de l'actine seule."
      },
      {
        "content": "La polymérisation transforme l'actine en tubuline.",
        "correct": false,
        "explanation": "L'actine reste de l'actine au sein du polymère."
      },
      {
        "content": "L'actine ne peut polymériser qu'en absence totale de nucléotide.",
        "correct": false,
        "explanation": "Le nucléotide est lié à l'actine et influence sa dynamique."
      },
      {
        "content": "Aucune protéine cellulaire ne régule la dynamique de l'actine.",
        "correct": false,
        "explanation": "De nombreuses protéines associées la contrôlent."
      }
    ],
    "explanation": "La polymérisation de l'actine est polarisée et ATP-dépendante ; l'extrémité + croît généralement plus vite et de nombreuses protéines régulent cette dynamique."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant les microtubules et la tubuline, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "L'extrémité plus expose l'alpha-tubuline.",
        "correct": false,
        "explanation": "Elle expose la bêta-tubuline."
      },
      {
        "content": "Les microtubules sont des cylindres creux constitués d'hétérodimères alpha/bêta-tubuline.",
        "correct": true,
        "explanation": "Les dimères s'alignent tête-à-queue dans des protofilaments parallèles."
      },
      {
        "content": "Seule l'alpha-tubuline lie un nucléotide ; la bêta n'en lie jamais.",
        "correct": false,
        "explanation": "Les deux lient du GTP/GDP, avec des propriétés différentes."
      },
      {
        "content": "Les microtubules ne sont jamais polarisés.",
        "correct": false,
        "explanation": "Ils possèdent des extrémités + et –."
      },
      {
        "content": "Les microtubules sont constitués d'actine G.",
        "correct": false,
        "explanation": "Ils sont constitués d'alpha/bêta-tubuline."
      }
    ],
    "explanation": "Les microtubules sont des tubes polarisés, typiquement à 13 protofilaments d'hétérodimères alpha/bêta-tubuline."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'actine, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Un monomère d'actine contient 375 acides aminés et a une masse d'environ 42-43 kDa.",
        "correct": true,
        "explanation": "La valeur est proche de 43 kDa."
      },
      {
        "content": "Les filaments d'actine ne possèdent aucune polarité.",
        "correct": false,
        "explanation": "Ils ont des extrémités + et – distinctes."
      },
      {
        "content": "L'actine possède un site de liaison à un nucléotide ATP/ADP.",
        "correct": true,
        "explanation": "L'état du nucléotide influence la dynamique du filament."
      },
      {
        "content": "L'actine ne lie aucun nucléotide.",
        "correct": false,
        "explanation": "Elle lie ATP ou ADP."
      },
      {
        "content": "L'actine polymérisée en filament est appelée actine F.",
        "correct": true,
        "explanation": "F signifie filamenteuse."
      }
    ],
    "explanation": "L'actine est une protéine de 375 résidus (~43 kDa) qui lie ATP/ADP et polymérise de G-actine en F-actine polarisée."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Citez une glycoprotéine majeure de la matrice extracellulaire.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "fibronectine",
        "laminine",
        "laminines",
        "ténascine",
        "tenascine",
        "thrombospondine",
        "vitronectine",
        "nidogène",
        "nidogene"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les glycoprotéines matricielles sont des protéines extracellulaires modulaires et glycosylées qui organisent les interactions cellule-matrice."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sur ce schéma, cliquez sur l'extrémité + du microtubule, caractérisée par l'exposition de la bêta-tubuline.",
    "image": {
      "src": "/images/training/ue14/biochimie/roles-biologiques-proteines-partie-2/microtubule-plus-end-qzone.svg",
      "alt": "Schéma original de quatre protofilaments parallèles constitués d'alternances alpha- et bêta-tubuline ; l'extrémité B expose la bêta-tubuline",
      "width": 1200,
      "height": 520
    },
    "expectedZones": [
      {
        "id": "plus-end",
        "label": "Extrémité +",
        "x": 0.91,
        "y": 0.52,
        "tolerance": 0.09
      }
    ],
    "explanation": "Dans un microtubule, les hétérodimères alpha/bêta sont orientés de façon parallèle : l'extrémité + expose la bêta-tubuline, tandis que l'extrémité – expose l'alpha-tubuline."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les glycoprotéines de la matrice extracellulaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Fibronectines, laminines, ténascines, thrombospondines, vitronectine et nidogène sont des exemples.",
        "correct": true,
        "explanation": "Ces protéines ont des architectures et fonctions distinctes."
      },
      {
        "content": "Les glycoprotéines matricielles participent aux interactions cellule-matrice.",
        "correct": true,
        "explanation": "Elles relient souvent récepteurs cellulaires et autres constituants de la matrice."
      },
      {
        "content": "Elles sont toutes localisées dans le noyau.",
        "correct": false,
        "explanation": "Elles sont extracellulaires."
      },
      {
        "content": "Leur partie glucidique peut être portée par des N- ou O-glycosylations.",
        "correct": true,
        "explanation": "La glycosylation dépend de la protéine et du tissu."
      },
      {
        "content": "Elles sont souvent modulaires, avec plusieurs domaines de liaison.",
        "correct": true,
        "explanation": "Un même polypeptide peut interagir avec cellules, collagènes, protéoglycanes ou autres ligands."
      }
    ],
    "explanation": "Les glycoprotéines matricielles sont des protéines extracellulaires modulaires et glycosylées qui organisent les interactions cellule-matrice."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les microtubules et la tubuline, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Les microtubules ne sont jamais polarisés.",
        "correct": false,
        "explanation": "Ils possèdent des extrémités + et –."
      },
      {
        "content": "Les microtubules servent de rails aux kinésines et dynéines.",
        "correct": true,
        "explanation": "Ils assurent de nombreux transports intracellulaires."
      },
      {
        "content": "Seule l'alpha-tubuline lie un nucléotide ; la bêta n'en lie jamais.",
        "correct": false,
        "explanation": "Les deux lient du GTP/GDP, avec des propriétés différentes."
      },
      {
        "content": "Les microtubules sont des cylindres creux constitués d'hétérodimères alpha/bêta-tubuline.",
        "correct": true,
        "explanation": "Les dimères s'alignent tête-à-queue dans des protofilaments parallèles."
      },
      {
        "content": "Un microtubule typique est formé de 3 protofilaments.",
        "correct": false,
        "explanation": "Il en comporte le plus souvent 13."
      }
    ],
    "explanation": "Les microtubules sont des tubes polarisés, typiquement à 13 protofilaments d'hétérodimères alpha/bêta-tubuline."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel acide aminé porte classiquement une N-glycosylation ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "asparagine",
        "Asn"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La N-glycosylation porte classiquement sur Asn et l'O-glycosylation souvent sur Ser/Thr ; les glycannes modulent structure et interactions."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant les domaines modulaires de la fibronectine, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Le motif RGD est porté dans un module FNIII et peut être reconnu par certaines intégrines.",
        "correct": true,
        "explanation": "Le site cell-binding de fibronectine implique notamment FNIII10."
      },
      {
        "content": "Tous les modules FNIII sont stabilisés par de nombreux ponts disulfure internes.",
        "correct": false,
        "explanation": "Ils n'en possèdent pas."
      },
      {
        "content": "La fibronectine est un canal ionique ligand-dépendant.",
        "correct": false,
        "explanation": "C'est une glycoprotéine matricielle."
      },
      {
        "content": "La fibronectine peut se lier à des intégrines et à d'autres composants de matrice.",
        "correct": true,
        "explanation": "Cette polyvalence explique son rôle dans l'assemblage matriciel."
      },
      {
        "content": "La fibronectine ne contient qu'un seul type de domaine répétitif.",
        "correct": false,
        "explanation": "Elle combine FNI, FNII et FNIII."
      }
    ],
    "explanation": "La fibronectine est une glycoprotéine modulaire combinant FNI/FNII/FNIII ; certains modules portent des sites d'interaction avec intégrines et matrice.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la fibronectine et les laminines, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "On décrit actuellement 16 hétérotrimères de laminine chez les mammifères dans la nomenclature courante.",
        "correct": true,
        "explanation": "Les combinaisons proviennent de plusieurs chaînes alpha, bêta et gamma."
      },
      {
        "content": "La fibronectine est un monomère de 20 Da dépourvu de pont disulfure interchaîne.",
        "correct": false,
        "explanation": "Elle est généralement dimérique avec des sous-unités de plusieurs centaines de kDa."
      },
      {
        "content": "La fibronectine fonctionnelle est généralement un dimère lié par des ponts disulfure proches des extrémités C-terminales.",
        "correct": true,
        "explanation": "Chaque sous-unité mesure environ 230-270 kDa selon l'isoforme."
      },
      {
        "content": "Les laminines sont absentes des membranes basales.",
        "correct": false,
        "explanation": "Elles en sont des composants majeurs."
      },
      {
        "content": "Les laminines sont des constituants majeurs des membranes basales.",
        "correct": true,
        "explanation": "Elles interagissent avec collagène IV, nidogène, intégrines et autres partenaires."
      }
    ],
    "explanation": "Fibronectine et laminines sont des glycoprotéines matricielles majeures : fibronectine dimérique et modulaire, laminines hétérotrimériques alpha-bêta-gamma des membranes basales."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les trois grands constituants du cytosquelette ?",
    "choices": [
      {
        "content": "Le cytosquelette est totalement statique.",
        "correct": false,
        "explanation": "Plusieurs de ses composants sont fortement dynamiques."
      },
      {
        "content": "Les filaments intermédiaires sont des lipides de membrane.",
        "correct": false,
        "explanation": "Ce sont des polymères protéiques."
      },
      {
        "content": "Le cytosquelette comprend filaments d'actine, filaments intermédiaires et microtubules.",
        "correct": true,
        "explanation": "Ces trois systèmes ont des structures et propriétés complémentaires."
      },
      {
        "content": "Il ne contient aucun microtubule.",
        "correct": false,
        "explanation": "Les microtubules sont un de ses trois grands systèmes."
      },
      {
        "content": "Le cytosquelette est composé uniquement de glycogène.",
        "correct": false,
        "explanation": "Il est formé de polymères protéiques."
      }
    ],
    "explanation": "Le cytosquelette associe actine, filaments intermédiaires et microtubules pour architecture, mécanique, motilité et transport."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Au sujet des fonctions du cytosquelette, sélectionnez toutes les affirmations exactes.",
    "choices": [
      {
        "content": "Les microtubules servent de rails aux kinésines et dynéines.",
        "correct": true,
        "explanation": "Ces moteurs assurent de nombreux transports intracellulaires."
      },
      {
        "content": "Il participe à la migration et aux changements de forme cellulaires.",
        "correct": true,
        "explanation": "La dynamique actine-myosine est centrale dans de nombreux mouvements."
      },
      {
        "content": "Le cytosquelette n'a aucune fonction mécanique.",
        "correct": false,
        "explanation": "Il est essentiel à la mécanique cellulaire."
      },
      {
        "content": "Le cytosquelette contribue à la division cellulaire.",
        "correct": true,
        "explanation": "Microtubules du fuseau et anneau contractile d'actine sont des exemples."
      },
      {
        "content": "Les filaments d'actine servent de rails à des myosines.",
        "correct": true,
        "explanation": "La polarité des filaments oriente le mouvement des moteurs."
      }
    ],
    "explanation": "Le cytosquelette porte des forces, organise la forme et sert de réseau de transport pour myosines, kinésines et dynéines."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Pourquoi les phénotypes des maladies liées au cytosquelette peuvent-ils être très variés ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "expression tissulaire différente",
        "expression différente selon les tissus",
        "fonctions différentes selon les protéines",
        "protéines et tissus différents"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les anomalies du cytosquelette peuvent produire des maladies variées, notamment dystrophies musculaires et cardiomyopathies, selon la protéine et le tissu."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Aucune protéine cellulaire ne régule la dynamique de l'actine.",
        "correct": false,
        "explanation": "De nombreuses protéines associées la contrôlent."
      },
      {
        "content": "De nombreuses protéines associées à l'actine régulent nucléation, élongation, branchement ou dépolymérisation.",
        "correct": true,
        "explanation": "La dynamique cellulaire ne dépend pas de l'actine seule."
      },
      {
        "content": "L'actine monomérique est appelée actine G.",
        "correct": true,
        "explanation": "G signifie globulaire."
      },
      {
        "content": "La polymérisation transforme l'actine en tubuline.",
        "correct": false,
        "explanation": "L'actine reste de l'actine au sein du polymère."
      },
      {
        "content": "L'actine ATP s'incorpore préférentiellement aux extrémités des filaments en croissance.",
        "correct": true,
        "explanation": "L'hydrolyse survient après incorporation."
      },
      {
        "content": "L'actine ne peut polymériser qu'en absence totale de nucléotide.",
        "correct": false,
        "explanation": "Le nucléotide est lié à l'actine et influence sa dynamique."
      },
      {
        "content": "Les filaments d'actine ne possèdent aucune polarité.",
        "correct": false,
        "explanation": "Ils ont des extrémités + et – distinctes."
      },
      {
        "content": "Les filaments d'actine sont polarisés avec une extrémité plus et une extrémité moins.",
        "correct": true,
        "explanation": "Les constantes cinétiques diffèrent aux deux extrémités."
      },
      {
        "content": "L'ATP lié à l'actine peut être hydrolysé après polymérisation.",
        "correct": true,
        "explanation": "Le filament plus ancien devient enrichi en actine-ADP."
      },
      {
        "content": "L'actine ne lie aucun nucléotide.",
        "correct": false,
        "explanation": "Elle lie ATP ou ADP."
      }
    ],
    "requiredSelectionCount": 5,
    "explanation": "L'actine est une protéine de 375 résidus (~43 kDa) qui lie ATP/ADP et polymérise de G-actine en F-actine polarisée. La polymérisation de l'actine est polarisée et ATP-dépendante ; l'extrémité + croît généralement plus vite et de nombreuses protéines régulent cette dynamique."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la polymérisation de l'actine ?",
    "choices": [
      {
        "content": "De nombreuses protéines associées à l'actine régulent nucléation, élongation, branchement ou dépolymérisation.",
        "correct": true,
        "explanation": "La dynamique cellulaire ne dépend pas de l'actine seule."
      },
      {
        "content": "Aucune protéine cellulaire ne régule la dynamique de l'actine.",
        "correct": false,
        "explanation": "De nombreuses protéines associées la contrôlent."
      },
      {
        "content": "Les deux extrémités d'un filament d'actine sont structurellement identiques et non polarisées.",
        "correct": false,
        "explanation": "Le filament est polarisé."
      },
      {
        "content": "L'actine ne peut polymériser qu'en absence totale de nucléotide.",
        "correct": false,
        "explanation": "Le nucléotide est lié à l'actine et influence sa dynamique."
      },
      {
        "content": "L'actine ATP s'incorpore préférentiellement aux extrémités des filaments en croissance.",
        "correct": true,
        "explanation": "L'hydrolyse survient après incorporation."
      }
    ],
    "explanation": "La polymérisation de l'actine est polarisée et ATP-dépendante ; l'extrémité + croît généralement plus vite et de nombreuses protéines régulent cette dynamique."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de protofilaments comporte typiquement un microtubule cytoplasmique ?",
    "answer": {
      "type": "number",
      "value": 13,
      "tolerance": 0
    },
    "explanation": "Les microtubules sont des tubes polarisés, typiquement à 13 protofilaments d'hétérodimères alpha/bêta-tubuline."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur la dynamique des microtubules, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Le GTP de la bêta-tubuline ne peut jamais être hydrolysé.",
        "correct": false,
        "explanation": "Son hydrolyse est centrale dans l'instabilité dynamique."
      },
      {
        "content": "Les microtubules ne connaissent jamais de phases de raccourcissement.",
        "correct": false,
        "explanation": "Ils alternent croissance et raccourcissement."
      },
      {
        "content": "Le GTP de l'alpha-tubuline est le site échangeable principal pilotant l'instabilité dynamique.",
        "correct": false,
        "explanation": "Le site échangeable/hydrolysable fonctionnel est sur la bêta-tubuline."
      },
      {
        "content": "La bêta-tubuline incorpore un GTP échangeable qui peut être hydrolysé après polymérisation.",
        "correct": true,
        "explanation": "L'hydrolyse crée progressivement une paroi enrichie en GDP-tubuline."
      },
      {
        "content": "La dynamique est généralement plus rapide à l'extrémité plus.",
        "correct": true,
        "explanation": "Les extrémités plus et moins ont des cinétiques différentes."
      }
    ],
    "explanation": "L'instabilité dynamique des microtubules dépend de la bêta-tubuline-GTP : coiffe GTP, catastrophe et rescue.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la fibronectine et les laminines ?",
    "choices": [
      {
        "content": "Les laminines sont des constituants majeurs des membranes basales.",
        "correct": true,
        "explanation": "Elles interagissent avec collagène IV, nidogène, intégrines et autres partenaires."
      },
      {
        "content": "Les laminines sont absentes des membranes basales.",
        "correct": false,
        "explanation": "Elles en sont des composants majeurs."
      },
      {
        "content": "Les laminines sont des hétérotrimères composés d'une chaîne alpha, d'une bêta et d'une gamma.",
        "correct": true,
        "explanation": "Leur assemblage donne une forme globale en croix."
      },
      {
        "content": "La fibronectine ne se lie jamais aux intégrines.",
        "correct": false,
        "explanation": "Les intégrines sont des récepteurs majeurs de la fibronectine."
      },
      {
        "content": "La fibronectine fonctionnelle est généralement un dimère lié par des ponts disulfure proches des extrémités C-terminales.",
        "correct": true,
        "explanation": "Chaque sous-unité mesure environ 230-270 kDa selon l'isoforme."
      }
    ],
    "explanation": "Fibronectine et laminines sont des glycoprotéines matricielles majeures : fibronectine dimérique et modulaire, laminines hétérotrimériques alpha-bêta-gamma des membranes basales."
  }
];
