import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

export const UE14_CELL_CH3_SYNTHESIS_V2: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « les trois types de structures du cytosquelette » et « l’axonème des cils et flagelles mobiles selon la fiche ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fiche distingue microtubules, microfilaments d’actine et filaments intermédiaires.",
        "correct": true,
        "explanation": "Le cytosquelette comprend trois grands réseaux protéiques."
      },
      {
        "content": "Elle décrit un doublet central.",
        "correct": true,
        "explanation": "La banque reprend explicitement le modèle local de la fiche : 9 doublets périphériques et 1 doublet central."
      },
      {
        "content": "La fiche ne distingue que deux réseaux du cytosquelette.",
        "correct": false,
        "explanation": "Le cytosquelette comprend trois grands réseaux protéiques."
      },
      {
        "content": "Elle indique l’absence de toute structure centrale.",
        "correct": false,
        "explanation": "La banque reprend explicitement le modèle local de la fiche : 9 doublets périphériques et 1 doublet central."
      }
    ],
    "explanation": "Le cytosquelette comprend trois grands réseaux protéiques. La banque reprend explicitement le modèle local de la fiche : 9 doublets périphériques et 1 doublet central."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « les microtubules chez les cellules humaines » et « la polymérisation des microtubules ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Chez l’Homme, elle les décrit dans toutes les cellules sauf les hématies.",
        "correct": true,
        "explanation": "Le support fait de l’hématie l’exception humaine pour la présence de microtubules."
      },
      {
        "content": "La feuille se replie pour former un microtubule de 13 protofilaments.",
        "correct": true,
        "explanation": "La fiche décrit un assemblage ordonné protofilaments → feuille → tube."
      },
      {
        "content": "Aucune cellule eucaryote ne possède de microtubules.",
        "correct": false,
        "explanation": "Le support fait de l’hématie l’exception humaine pour la présence de microtubules."
      },
      {
        "content": "Le microtubule final ne contient qu’un protofilament.",
        "correct": false,
        "explanation": "La fiche décrit un assemblage ordonné protofilaments → feuille → tube."
      }
    ],
    "explanation": "Le support fait de l’hématie l’exception humaine pour la présence de microtubules. La fiche décrit un assemblage ordonné protofilaments → feuille → tube."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « les cils primaires selon la fiche » et « la kinésine et la dynéine ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fiche indique qu’ils sont présents en un seul exemplaire à la surface de nombreuses cellules.",
        "correct": true,
        "explanation": "Le cil primaire est distingué du cil mobile par son organisation et son immobilité."
      },
      {
        "content": "La kinésine est associée au sens antérograde dans la fiche.",
        "correct": true,
        "explanation": "La fiche oppose kinésine antérograde et dynéine rétrograde."
      },
      {
        "content": "La cellule en porte obligatoirement plusieurs centaines.",
        "correct": false,
        "explanation": "Le cil primaire est distingué du cil mobile par son organisation et son immobilité."
      },
      {
        "content": "La kinésine est uniquement rétrograde dans la fiche.",
        "correct": false,
        "explanation": "La fiche oppose kinésine antérograde et dynéine rétrograde."
      }
    ],
    "explanation": "Le cil primaire est distingué du cil mobile par son organisation et son immobilité. La fiche oppose kinésine antérograde et dynéine rétrograde."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « le rôle du GTP dans la polymérisation des microtubules » et « la localisation des microfilaments d’actine ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une forte concentration de GTP favorise l’association ordonnée de tubuline dans le modèle présenté.",
        "correct": true,
        "explanation": "Le GTP intervient dans l’assemblage et la dynamique des microtubules."
      },
      {
        "content": "Ils sont particulièrement présents en sous-membranaire.",
        "correct": true,
        "explanation": "Le réseau d’actine est particulièrement important au cortex cellulaire."
      },
      {
        "content": "Le GTP ne se fixe à aucune tubuline.",
        "correct": false,
        "explanation": "Le GTP intervient dans l’assemblage et la dynamique des microtubules."
      },
      {
        "content": "Ils sont absents des microvillosités.",
        "correct": false,
        "explanation": "Le réseau d’actine est particulièrement important au cortex cellulaire."
      }
    ],
    "explanation": "Le GTP intervient dans l’assemblage et la dynamique des microtubules. Le réseau d’actine est particulièrement important au cortex cellulaire."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « la structure simplifiée des moteurs microtubulaires » et « la structure des microfilaments d’actine ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ces têtes lient le microtubule et hydrolysent l’ATP.",
        "correct": true,
        "explanation": "La structure simplifiée relie têtes motrices, ATP et cargaison."
      },
      {
        "content": "Ils possèdent une polarité structurale et fonctionnelle.",
        "correct": true,
        "explanation": "Les MFA sont des polymères torsadés d’actine, distincts des microtubules."
      },
      {
        "content": "Ils se fixent uniquement à l’ADN.",
        "correct": false,
        "explanation": "La structure simplifiée relie têtes motrices, ATP et cargaison."
      },
      {
        "content": "Ils sont dépourvus de polarité.",
        "correct": false,
        "explanation": "Les MFA sont des polymères torsadés d’actine, distincts des microtubules."
      }
    ],
    "explanation": "La structure simplifiée relie têtes motrices, ATP et cargaison. Les MFA sont des polymères torsadés d’actine, distincts des microtubules."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « l’abondance de l’actine » et « les fonctions dynamiques de l’actine ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L’actine est donc particulièrement abondante dans le muscle.",
        "correct": true,
        "explanation": "Les repères 5 % et 15–20 % soulignent la forte abondance musculaire."
      },
      {
        "content": "La fiche relie l’actine à l’endocytose et à l’exocytose.",
        "correct": true,
        "explanation": "Le réseau d’actine joue des rôles structuraux, contractiles et de remodelage."
      },
      {
        "content": "Son abondance est strictement identique dans tous les types cellulaires.",
        "correct": false,
        "explanation": "Les repères 5 % et 15–20 % soulignent la forte abondance musculaire."
      },
      {
        "content": "L’actine est décrite comme un réseau uniquement passif.",
        "correct": false,
        "explanation": "Le réseau d’actine joue des rôles structuraux, contractiles et de remodelage."
      }
    ],
    "explanation": "Les repères 5 % et 15–20 % soulignent la forte abondance musculaire. Le réseau d’actine joue des rôles structuraux, contractiles et de remodelage."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « la nucléation de l’actine selon la fiche » et « la zone de rétraction ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fiche indique qu’elle n’est pas indispensable.",
        "correct": true,
        "explanation": "Le support présente la nucléation comme facilitatrice et utilise un noyau de trois actines."
      },
      {
        "content": "La thymosine limite la repolymérisation locale.",
        "correct": true,
        "explanation": "La rétraction arrière s’accompagne d’un recyclage des constituants d’actine."
      },
      {
        "content": "La nucléation est obligatoire sans exception selon la fiche.",
        "correct": false,
        "explanation": "Le support présente la nucléation comme facilitatrice et utilise un noyau de trois actines."
      },
      {
        "content": "La thymosine stabilise irréversiblement tous les filaments arrière.",
        "correct": false,
        "explanation": "La rétraction arrière s’accompagne d’un recyclage des constituants d’actine."
      }
    ],
    "explanation": "Le support présente la nucléation comme facilitatrice et utilise un noyau de trois actines. La rétraction arrière s’accompagne d’un recyclage des constituants d’actine."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Synthèse — croisez « les contextes physiologiques de migration cellulaire » et « les grandes protéines de filaments intermédiaires citées ». Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle cite l’inflammation avec macrophages et lymphocytes.",
        "correct": true,
        "explanation": "La migration intervient dans développement, inflammation et réparation tissulaire."
      },
      {
        "content": "Les neurofilaments sont cités dans les neurones et les lamines dans le noyau.",
        "correct": true,
        "explanation": "La composition des FI varie selon les cellules et compartiments."
      },
      {
        "content": "La cicatrisation ne fait intervenir aucune migration cellulaire.",
        "correct": false,
        "explanation": "La migration intervient dans développement, inflammation et réparation tissulaire."
      },
      {
        "content": "Les lamines sont des phospholipides membranaires.",
        "correct": false,
        "explanation": "La composition des FI varie selon les cellules et compartiments."
      }
    ],
    "explanation": "La migration intervient dans développement, inflammation et réparation tissulaire. La composition des FI varie selon les cellules et compartiments."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Synthèse — sélectionnez exactement les trois affirmations correctes.",
    "requiredSelectionCount": 3,
    "choices": [
      {
        "content": "Ils sont strictement cytoplasmiques dans la description de cette section.",
        "correct": true,
        "explanation": "Le réseau d’actine est particulièrement important au cortex cellulaire."
      },
      {
        "content": "Elle indique environ 15 à 20 % dans une cellule musculaire.",
        "correct": true,
        "explanation": "Les repères 5 % et 15–20 % soulignent la forte abondance musculaire."
      },
      {
        "content": "Les classes β ou γ sont citées dans les autres types cellulaires.",
        "correct": true,
        "explanation": "L’actine G est la forme monomérique globulaire."
      },
      {
        "content": "L’actine G fixe exclusivement le GTP.",
        "correct": false,
        "explanation": "La fiche décrit l’actine G comme une ATPase."
      },
      {
        "content": "La fiche parle d’extrémités α et β comme pour la tubuline.",
        "correct": false,
        "explanation": "Les extrémités pointue et barbue rendent le filament d’actine polarisé."
      },
      {
        "content": "Ils sont dépourvus de polarité.",
        "correct": false,
        "explanation": "Les MFA sont des polymères torsadés d’actine, distincts des microtubules."
      }
    ],
    "explanation": "Cette question croise plusieurs repères de la section."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Synthèse — sélectionnez exactement les cinq affirmations correctes.",
    "requiredSelectionCount": 5,
    "choices": [
      {
        "content": "L’actine G peut fixer l’ATP.",
        "correct": true,
        "explanation": "La fiche décrit l’actine G comme une ATPase."
      },
      {
        "content": "Elle distingue une extrémité barbue.",
        "correct": true,
        "explanation": "Les extrémités pointue et barbue rendent le filament d’actine polarisé."
      },
      {
        "content": "Ils possèdent une polarité structurale et fonctionnelle.",
        "correct": true,
        "explanation": "Les MFA sont des polymères torsadés d’actine, distincts des microtubules."
      },
      {
        "content": "La fiche indique qu’elle n’est pas indispensable.",
        "correct": true,
        "explanation": "Le support présente la nucléation comme facilitatrice et utilise un noyau de trois actines."
      },
      {
        "content": "Elles illustrent une spécialisation du cortex cellulaire.",
        "correct": true,
        "explanation": "Les microvillosités font partie des localisations spécialisées de l’actine."
      },
      {
        "content": "L’anneau apparaît seulement après séparation complète des cellules.",
        "correct": false,
        "explanation": "L’actine participe à la séparation cytoplasmique lors de la division."
      },
      {
        "content": "Le sarcomère est constitué uniquement de microtubules.",
        "correct": false,
        "explanation": "Le modèle de glissement actine-myosine explique le raccourcissement du sarcomère."
      },
      {
        "content": "Elle n’a aucun lien avec la membrane plasmique.",
        "correct": false,
        "explanation": "Le réseau d’actine joue des rôles structuraux, contractiles et de remodelage."
      }
    ],
    "explanation": "La sélection longue vérifie plusieurs notions de la section simultanément."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « le diamètre des microtubules », « les microtubules chez les cellules humaines » et « la polarité des microtubules ».",
    "choices": [
      {
        "content": "La fiche donne environ 24 nm pour les microtubules.",
        "correct": true,
        "explanation": "Le repère local est environ 24 nm."
      },
      {
        "content": "Chez l’Homme, elle les décrit dans toutes les cellules sauf les hématies.",
        "correct": true,
        "explanation": "Le support fait de l’hématie l’exception humaine pour la présence de microtubules."
      },
      {
        "content": "L’extrémité + est toujours ancrée au centrosome dans la fiche.",
        "correct": false,
        "explanation": "La polarité structure le réseau centrosome-périphérie."
      },
      {
        "content": "Ils sont les plus fins des trois réseaux.",
        "correct": false,
        "explanation": "Le repère local est environ 24 nm."
      }
    ],
    "explanation": "Le repère local est environ 24 nm. Le support fait de l’hématie l’exception humaine pour la présence de microtubules. La polarité structure le réseau centrosome-périphérie."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « les structures à microtubules stabilisés », « le rôle des microtubules dans les cils respiratoires » et « l’abondance de l’actine ».",
    "choices": [
      {
        "content": "Les corpuscules basaux contiennent aussi 9 triplets.",
        "correct": true,
        "explanation": "Le support oppose MT cytosoliques instables à plusieurs structures stabilisées."
      },
      {
        "content": "Le mucus piège poussières et micro-organismes avant leur élimination.",
        "correct": true,
        "explanation": "Les cils associent architecture microtubulaire et fonction de clairance."
      },
      {
        "content": "L’actine est décrite comme absente des cellules musculaires.",
        "correct": false,
        "explanation": "Les repères 5 % et 15–20 % soulignent la forte abondance musculaire."
      },
      {
        "content": "Les centrioles comportent 13 doublets périphériques.",
        "correct": false,
        "explanation": "Le support oppose MT cytosoliques instables à plusieurs structures stabilisées."
      }
    ],
    "explanation": "Le support oppose MT cytosoliques instables à plusieurs structures stabilisées. Les cils associent architecture microtubulaire et fonction de clairance. Les repères 5 % et 15–20 % soulignent la forte abondance musculaire."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « le rôle du GTP dans la polymérisation des microtubules », « l’activité ATPase de l’actine G » et « la zone intermédiaire de la cellule migrante ».",
    "choices": [
      {
        "content": "Le passage GTP vers GDP libère de l’énergie dans la fiche.",
        "correct": true,
        "explanation": "Le GTP intervient dans l’assemblage et la dynamique des microtubules."
      },
      {
        "content": "L’actine G peut fixer l’ATP.",
        "correct": true,
        "explanation": "La fiche décrit l’actine G comme une ATPase."
      },
      {
        "content": "Les filaments y sont exclusivement organisés en axonème.",
        "correct": false,
        "explanation": "La filamine est associée au réseau d’actine intermédiaire."
      },
      {
        "content": "La polymérisation dépend exclusivement d’ATP sur la tubuline α.",
        "correct": false,
        "explanation": "Le GTP intervient dans l’assemblage et la dynamique des microtubules."
      }
    ],
    "explanation": "Le GTP intervient dans l’assemblage et la dynamique des microtubules. La fiche décrit l’actine G comme une ATPase. La filamine est associée au réseau d’actine intermédiaire."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « l’énergie des moteurs moléculaires sur microtubules », « la zone intermédiaire de la cellule migrante » et « la localisation des microtubules ».",
    "choices": [
      {
        "content": "L’hydrolyse de l’ATP fournit l’énergie au déplacement.",
        "correct": true,
        "explanation": "Le transport motorisé convertit l’énergie de l’ATP en déplacement."
      },
      {
        "content": "La filamine participe à cette organisation en réseau.",
        "correct": true,
        "explanation": "La filamine est associée au réseau d’actine intermédiaire."
      },
      {
        "content": "Les microtubules sont localisés exclusivement dans le noyau.",
        "correct": false,
        "explanation": "Le réseau de microtubules cytosoliques est organisé autour du centrosome."
      },
      {
        "content": "Le mouvement de la cargaison est indépendant du moteur.",
        "correct": false,
        "explanation": "Le transport motorisé convertit l’énergie de l’ATP en déplacement."
      }
    ],
    "explanation": "Le transport motorisé convertit l’énergie de l’ATP en déplacement. La filamine est associée au réseau d’actine intermédiaire. Le réseau de microtubules cytosoliques est organisé autour du centrosome."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « la structure des microfilaments d’actine », « le diamètre des microfilaments d’actine » et « le flagelle du spermatozoïde ».",
    "choices": [
      {
        "content": "Ils comprennent deux chapelets de monomères sphériques.",
        "correct": true,
        "explanation": "Les MFA sont des polymères torsadés d’actine, distincts des microtubules."
      },
      {
        "content": "Leurs monomères sont globulaires.",
        "correct": true,
        "explanation": "Les microfilaments d’actine sont les structures les plus fines du tableau introductif."
      },
      {
        "content": "Le flagelle est décrit comme immobile.",
        "correct": false,
        "explanation": "Le flagelle est l’exemple de motilité cellulaire dépendant des microtubules."
      },
      {
        "content": "Ils sont de grands cylindres creux à 13 protofilaments.",
        "correct": false,
        "explanation": "Les MFA sont des polymères torsadés d’actine, distincts des microtubules."
      }
    ],
    "explanation": "Les MFA sont des polymères torsadés d’actine, distincts des microtubules. Les microfilaments d’actine sont les structures les plus fines du tableau introductif. Le flagelle est l’exemple de motilité cellulaire dépendant des microtubules."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « les plaques d’adhérence pendant la migration », « la tubuline α et la tubuline β » et « la nucléation de l’actine selon la fiche ».",
    "choices": [
      {
        "content": "Les plaques arrière se rétractent au cours du déplacement.",
        "correct": true,
        "explanation": "La migration combine adhésion à l’avant et désengagement à l’arrière."
      },
      {
        "content": "La tubuline est présentée comme un hétérodimère α + β.",
        "correct": true,
        "explanation": "Le support distingue les propriétés des deux sous-unités de tubuline."
      },
      {
        "content": "La nucléation empêche toute polymérisation.",
        "correct": false,
        "explanation": "Le support présente la nucléation comme facilitatrice et utilise un noyau de trois actines."
      },
      {
        "content": "Les nouvelles plaques apparaissent uniquement derrière la cellule.",
        "correct": false,
        "explanation": "La migration combine adhésion à l’avant et désengagement à l’arrière."
      }
    ],
    "explanation": "La migration combine adhésion à l’avant et désengagement à l’arrière. Le support distingue les propriétés des deux sous-unités de tubuline. Le support présente la nucléation comme facilitatrice et utilise un noyau de trois actines."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Maîtrise de synthèse — Quel moteur moléculaire est associé au transport rétrograde le long des microtubules dans la fiche ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "dynéine",
        "dyneine",
        "la dynéine"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "La fiche oppose kinésine antérograde et dynéine rétrograde."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « les filaments intermédiaires dans le tableau général », « les contextes physiologiques de migration cellulaire » et « l’axonème des cils et flagelles mobiles selon la fiche ».",
    "choices": [
      {
        "content": "Leurs monomères sont décrits comme fibreux.",
        "correct": true,
        "explanation": "Les filaments intermédiaires ont un diamètre intermédiaire et une composition protéique hétérogène."
      },
      {
        "content": "Elle cite la cicatrisation avec fibroblastes et cellules épithéliales.",
        "correct": true,
        "explanation": "La migration intervient dans développement, inflammation et réparation tissulaire."
      },
      {
        "content": "Elle indique l’absence de toute structure centrale.",
        "correct": false,
        "explanation": "La banque reprend explicitement le modèle local de la fiche : 9 doublets périphériques et 1 doublet central."
      },
      {
        "content": "Le diamètre indiqué est de 80 à 100 nm.",
        "correct": false,
        "explanation": "Les filaments intermédiaires ont un diamètre intermédiaire et une composition protéique hétérogène."
      }
    ],
    "explanation": "Les filaments intermédiaires ont un diamètre intermédiaire et une composition protéique hétérogène. La migration intervient dans développement, inflammation et réparation tissulaire. La banque reprend explicitement le modèle local de la fiche : 9 doublets périphériques et 1 doublet central."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « les cils primaires selon la fiche », « les filaments intermédiaires en pathologie » et « l’énergie des moteurs moléculaires sur microtubules ».",
    "choices": [
      {
        "content": "La fiche indique qu’ils sont présents en un seul exemplaire à la surface de nombreuses cellules.",
        "correct": true,
        "explanation": "Le cil primaire est distingué du cil mobile par son organisation et son immobilité."
      },
      {
        "content": "La fiche indique que leur hétérogénéité aide à définir la nature de cellules tumorales.",
        "correct": true,
        "explanation": "L’hétérogénéité des FI constitue un repère de caractérisation des tumeurs."
      },
      {
        "content": "Le mouvement de la cargaison est indépendant du moteur.",
        "correct": false,
        "explanation": "Le transport motorisé convertit l’énergie de l’ATP en déplacement."
      },
      {
        "content": "Ils sont toujours mobiles.",
        "correct": false,
        "explanation": "Le cil primaire est distingué du cil mobile par son organisation et son immobilité."
      }
    ],
    "explanation": "Le cil primaire est distingué du cil mobile par son organisation et son immobilité. L’hétérogénéité des FI constitue un repère de caractérisation des tumeurs. Le transport motorisé convertit l’énergie de l’ATP en déplacement."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Maîtrise de synthèse — croisez « le flagelle du spermatozoïde », « les cils primaires selon la fiche » et « les contextes physiologiques de migration cellulaire ».",
    "choices": [
      {
        "content": "La fiche attribue le déplacement du spermatozoïde au mouvement ondulatoire de son flagelle.",
        "correct": true,
        "explanation": "Le flagelle est l’exemple de motilité cellulaire dépendant des microtubules."
      },
      {
        "content": "Ils sont décrits comme immobiles.",
        "correct": true,
        "explanation": "Le cil primaire est distingué du cil mobile par son organisation et son immobilité."
      },
      {
        "content": "La migration est présentée comme propre aux hématies uniquement.",
        "correct": false,
        "explanation": "La migration intervient dans développement, inflammation et réparation tissulaire."
      },
      {
        "content": "Le flagelle ne contient aucune structure du cytosquelette.",
        "correct": false,
        "explanation": "Le flagelle est l’exemple de motilité cellulaire dépendant des microtubules."
      }
    ],
    "explanation": "Le flagelle est l’exemple de motilité cellulaire dépendant des microtubules. Le cil primaire est distingué du cil mobile par son organisation et son immobilité. La migration intervient dans développement, inflammation et réparation tissulaire."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Maîtrise de synthèse — sélectionnez exactement les trois affirmations correctes.",
    "requiredSelectionCount": 3,
    "choices": [
      {
        "content": "Ils participent à la forme de certaines expansions cellulaires.",
        "correct": true,
        "explanation": "Le chapitre illustre plusieurs fonctions structurales et dynamiques des microtubules."
      },
      {
        "content": "Ils sont particulièrement présents en sous-membranaire.",
        "correct": true,
        "explanation": "Le réseau d’actine est particulièrement important au cortex cellulaire."
      },
      {
        "content": "L’actine est donc particulièrement abondante dans le muscle.",
        "correct": true,
        "explanation": "Les repères 5 % et 15–20 % soulignent la forte abondance musculaire."
      },
      {
        "content": "L’actine G est un filament polymérisé complet.",
        "correct": false,
        "explanation": "L’actine G est la forme monomérique globulaire."
      },
      {
        "content": "Elle ne peut hydrolyser aucun nucléotide.",
        "correct": false,
        "explanation": "La fiche décrit l’actine G comme une ATPase."
      },
      {
        "content": "L’actine est non polarisée.",
        "correct": false,
        "explanation": "Les extrémités pointue et barbue rendent le filament d’actine polarisé."
      }
    ],
    "explanation": "Cette question croise plusieurs repères de la section."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Maîtrise de synthèse — sélectionnez exactement les cinq affirmations correctes.",
    "requiredSelectionCount": 5,
    "choices": [
      {
        "content": "La fiche indique qu’elle n’est pas indispensable.",
        "correct": true,
        "explanation": "Le support présente la nucléation comme facilitatrice et utilise un noyau de trois actines."
      },
      {
        "content": "Elles illustrent une spécialisation du cortex cellulaire.",
        "correct": true,
        "explanation": "Les microvillosités font partie des localisations spécialisées de l’actine."
      },
      {
        "content": "Il illustre une fonction contractile du réseau d’actine.",
        "correct": true,
        "explanation": "L’actine participe à la séparation cytoplasmique lors de la division."
      },
      {
        "content": "Le sarcomère associe filaments d’actine et filaments bipolaires de myosine II.",
        "correct": true,
        "explanation": "Le modèle de glissement actine-myosine explique le raccourcissement du sarcomère."
      },
      {
        "content": "Elle la relie à des prolongements comme filopodes et lamellipodes.",
        "correct": true,
        "explanation": "Le réseau d’actine joue des rôles structuraux, contractiles et de remodelage."
      },
      {
        "content": "L’inflammation exclut tout déplacement de cellules immunitaires.",
        "correct": false,
        "explanation": "La migration intervient dans développement, inflammation et réparation tissulaire."
      },
      {
        "content": "La migration exige la disparition de toute adhérence à la matrice.",
        "correct": false,
        "explanation": "La migration combine adhésion à l’avant et désengagement à l’arrière."
      },
      {
        "content": "Ils sont constitués exclusivement de filaments intermédiaires.",
        "correct": false,
        "explanation": "Le front migratoire repose sur le remodelage et la polymérisation de l’actine."
      }
    ],
    "explanation": "La sélection longue vérifie plusieurs notions de la section simultanément."
  }
];
