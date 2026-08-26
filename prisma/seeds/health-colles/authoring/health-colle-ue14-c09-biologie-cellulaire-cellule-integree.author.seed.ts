import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C09 — Biologie cellulaire — Cellule intégrée
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 */
export const UE14_COLLE_C09_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C09 — concernant genome mito, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:genome-mito"
    ],
    "choices": [
      {
        "content": "Tout le génome cellulaire humain est contenu dans le noyau sans exception.",
        "correct": false,
        "explanation": "Les mitochondries contiennent leur propre ADN."
      },
      {
        "content": "La chaîne respiratoire est située dans la membrane mitochondriale externe.",
        "correct": false,
        "explanation": "Elle est dans la membrane interne."
      },
      {
        "content": "La mitochondrie possède une membrane externe et une membrane interne distinctes.",
        "correct": true,
        "explanation": "La membrane interne forme des crêtes et délimite la matrice."
      },
      {
        "content": "La chaîne respiratoire mitochondriale est localisée dans la membrane interne.",
        "correct": true,
        "explanation": "Les complexes I à IV et l’ATP synthase y sont insérés."
      },
      {
        "content": "Le complexe II pompe autant de protons que le complexe I.",
        "correct": false,
        "explanation": "Le complexe II ne pompe pas directement de protons."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel complexe de la chaîne respiratoire ne pompe pas directement de protons : I, II, III ou IV ?",
    "explanation": "Le complexe II transfère des électrons sans pompage protonique direct.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "II",
        "2",
        "complexe II",
        "complexe 2"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 3,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de respiration ?",
    "explanation": "Le complexe II ne pompe pas directement de protons.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:respiration"
    ],
    "choices": [
      {
        "content": "Les complexes I, III et IV contribuent au pompage de protons à travers la membrane interne.",
        "correct": true,
        "explanation": "Le complexe II ne pompe pas directement de protons."
      },
      {
        "content": "Le nucléole est un organite entouré d’une double membrane.",
        "correct": false,
        "explanation": "Il n’est pas membrané."
      },
      {
        "content": "L’ARN polymérase III transcrit le précurseur 45S des ARNr majeurs.",
        "correct": false,
        "explanation": "Le 45S est transcrit par Pol I ; Pol III transcrit notamment l’ARNr 5S."
      },
      {
        "content": "Une cellule diploïde en G2 est 4n/4C.",
        "correct": false,
        "explanation": "Après réplication, elle reste 2n/4C tant que les chromatides sœurs ne sont pas séparées en cellules filles."
      },
      {
        "content": "Wee1 active CDK1 en retirant ses phosphates inhibiteurs.",
        "correct": false,
        "explanation": "Wee1 les ajoute ; Cdc25 les retire."
      }
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biologie_cellulaire.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "L’histone H1 fait partie des huit histones du cœur nucléosomique canonique.",
        "correct": false,
        "explanation": "Le cœur contient H2A/H2B/H3/H4 ; H1 est une histone de liaison."
      },
      {
        "content": "Le complexe II de la chaîne respiratoire ne pompe pas directement de protons.",
        "correct": true,
        "explanation": "Il transfère des électrons vers l’ubiquinone sans translocation protonique couplée."
      },
      {
        "content": "Les complexes I, III et IV contribuent au pompage de protons à travers la membrane interne.",
        "correct": true,
        "explanation": "Le complexe II ne pompe pas directement de protons."
      },
      {
        "content": "Les pores nucléaires sont constitués principalement de laminine.",
        "correct": false,
        "explanation": "Ils sont formés de nucléoporines ; la laminine est extracellulaire."
      },
      {
        "content": "Les lamines nucléaires sont des glycoprotéines majeures de la membrane basale extracellulaire.",
        "correct": false,
        "explanation": "Ce sont les laminines qui sont extracellulaires ; les lamines sont nucléaires."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Colle C09 — concernant lamine laminine, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:lamine-laminine"
    ],
    "choices": [
      {
        "content": "Les lamines nucléaires sont des glycoprotéines majeures de la membrane basale extracellulaire.",
        "correct": false,
        "explanation": "Ce sont les laminines qui sont extracellulaires ; les lamines sont nucléaires."
      },
      {
        "content": "Le nucléole est un organite entouré d’une double membrane.",
        "correct": false,
        "explanation": "Il n’est pas membrané."
      },
      {
        "content": "L’ATP synthase exploite le gradient électrochimique de protons pour synthétiser de l’ATP.",
        "correct": true,
        "explanation": "La force proton-motrice couple respiration et phosphorylation."
      },
      {
        "content": "Le complexe II de la chaîne respiratoire ne pompe pas directement de protons.",
        "correct": true,
        "explanation": "Il transfère des électrons vers l’ubiquinone sans translocation protonique couplée."
      },
      {
        "content": "L’histone H1 fait partie des huit histones du cœur nucléosomique canonique.",
        "correct": false,
        "explanation": "Le cœur contient H2A/H2B/H3/H4 ; H1 est une histone de liaison."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel complexe cycline-CDK constitue le MPF classique ?",
    "explanation": "Le MPF classique associe cycline B et CDK1.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cycline B-CDK1",
        "cycline B / CDK1",
        "CDK1-cycline B",
        "CDK1 cycline B"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 7,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de respiration ?",
    "explanation": "Il transfère des électrons vers l’ubiquinone sans translocation protonique couplée.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:respiration"
    ],
    "choices": [
      {
        "content": "Wee1 active CDK1 en retirant ses phosphates inhibiteurs.",
        "correct": false,
        "explanation": "Wee1 les ajoute ; Cdc25 les retire."
      },
      {
        "content": "Le complexe II de la chaîne respiratoire ne pompe pas directement de protons.",
        "correct": true,
        "explanation": "Il transfère des électrons vers l’ubiquinone sans translocation protonique couplée."
      },
      {
        "content": "APC/C-Cdc20 stabilise la sécurine afin d’empêcher la séparase d’agir pendant l’anaphase.",
        "correct": false,
        "explanation": "APC/C cible la sécurine pour dégradation."
      },
      {
        "content": "La cytocinèse animale est assurée par un anneau de tubuline et de dynéine sous la membrane.",
        "correct": false,
        "explanation": "L’anneau contractile est principalement actomyosine II."
      },
      {
        "content": "Le complexe II pompe autant de protons que le complexe I.",
        "correct": false,
        "explanation": "Le complexe II ne pompe pas directement de protons."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biologie_cellulaire.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "L’ADN mitochondrial humain est distinct de l’ADN nucléaire.",
        "correct": true,
        "explanation": "Il constitue une petite fraction du génome cellulaire total."
      },
      {
        "content": "Le nucléole est un organite entouré d’une double membrane.",
        "correct": false,
        "explanation": "Il n’est pas membrané."
      },
      {
        "content": "L’ARN polymérase III transcrit le précurseur 45S des ARNr majeurs.",
        "correct": false,
        "explanation": "Le 45S est transcrit par Pol I ; Pol III transcrit notamment l’ARNr 5S."
      },
      {
        "content": "Une cellule diploïde en G2 est 4n/4C.",
        "correct": false,
        "explanation": "Après réplication, elle reste 2n/4C tant que les chromatides sœurs ne sont pas séparées en cellules filles."
      },
      {
        "content": "L’ATP synthase exploite le gradient électrochimique de protons pour synthétiser de l’ATP.",
        "correct": true,
        "explanation": "La force proton-motrice couple respiration et phosphorylation."
      }
    ]
  },
  {
    "order": 9,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "explanation": "Cette question longue vérifie la capacité à maintenir une lecture précise sur plusieurs notions transversales.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "Wee1 active CDK1 en retirant ses phosphates inhibiteurs.",
        "correct": false,
        "explanation": "Wee1 les ajoute ; Cdc25 les retire."
      },
      {
        "content": "L’histone H1 fait partie des huit histones du cœur nucléosomique canonique.",
        "correct": false,
        "explanation": "Le cœur contient H2A/H2B/H3/H4 ; H1 est une histone de liaison."
      },
      {
        "content": "L’ADN mitochondrial humain est distinct de l’ADN nucléaire.",
        "correct": true,
        "explanation": "Il constitue une petite fraction du génome cellulaire total."
      },
      {
        "content": "Le nucléole est un organite entouré d’une double membrane.",
        "correct": false,
        "explanation": "Il n’est pas membrané."
      },
      {
        "content": "Les pores nucléaires sont constitués de nucléoporines.",
        "correct": true,
        "explanation": "Les complexes de pore contrôlent les échanges nucléocytoplasmiques."
      },
      {
        "content": "Les lamines A/C sont codées par le gène LMNA.",
        "correct": true,
        "explanation": "Elles font partie de la lamina nucléaire."
      },
      {
        "content": "Une cellule diploïde en G2 est 4n/4C.",
        "correct": false,
        "explanation": "Après réplication, elle reste 2n/4C tant que les chromatides sœurs ne sont pas séparées en cellules filles."
      },
      {
        "content": "L’ARN polymérase III transcrit le précurseur 45S des ARNr majeurs.",
        "correct": false,
        "explanation": "Le 45S est transcrit par Pol I ; Pol III transcrit notamment l’ARNr 5S."
      },
      {
        "content": "L’enveloppe nucléaire comporte deux membranes séparées par un espace périnucléaire.",
        "correct": true,
        "explanation": "La membrane externe est continue avec le RE."
      },
      {
        "content": "Les signaux de localisation nucléaire sont souvent riches en lysine et arginine.",
        "correct": true,
        "explanation": "Les NLS classiques sont fréquemment basiques, sans séquence universelle unique."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Colle C09 — concernant APC, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:APC"
    ],
    "choices": [
      {
        "content": "APC/C-Cdc20 stabilise la sécurine afin d’empêcher la séparase d’agir pendant l’anaphase.",
        "correct": false,
        "explanation": "APC/C cible la sécurine pour dégradation."
      },
      {
        "content": "Une cellule diploïde en G2 est 4n/4C.",
        "correct": false,
        "explanation": "Après réplication, elle reste 2n/4C tant que les chromatides sœurs ne sont pas séparées en cellules filles."
      },
      {
        "content": "L’enveloppe nucléaire comporte deux membranes séparées par un espace périnucléaire.",
        "correct": true,
        "explanation": "La membrane externe est continue avec le RE."
      },
      {
        "content": "Les pores nucléaires sont constitués de nucléoporines.",
        "correct": true,
        "explanation": "Les complexes de pore contrôlent les échanges nucléocytoplasmiques."
      },
      {
        "content": "Wee1 active CDK1 en retirant ses phosphates inhibiteurs.",
        "correct": false,
        "explanation": "Wee1 les ajoute ; Cdc25 les retire."
      }
    ]
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de copies de chaque histone H2A, H2B, H3 et H4 contient le cœur nucléosomique canonique ?",
    "explanation": "Le cœur est un octamère avec deux copies de chacune des quatre histones.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    }
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de respiration ?",
    "explanation": "La force proton-motrice couple respiration et phosphorylation.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:respiration"
    ],
    "choices": [
      {
        "content": "Le complexe II pompe autant de protons que le complexe I.",
        "correct": false,
        "explanation": "Le complexe II ne pompe pas directement de protons."
      },
      {
        "content": "La chaîne respiratoire est située dans la membrane mitochondriale externe.",
        "correct": false,
        "explanation": "Elle est dans la membrane interne."
      },
      {
        "content": "L’ATP synthase exploite le gradient électrochimique de protons pour synthétiser de l’ATP.",
        "correct": true,
        "explanation": "La force proton-motrice couple respiration et phosphorylation."
      },
      {
        "content": "Tout le génome cellulaire humain est contenu dans le noyau sans exception.",
        "correct": false,
        "explanation": "Les mitochondries contiennent leur propre ADN."
      },
      {
        "content": "Les pores nucléaires sont constitués principalement de laminine.",
        "correct": false,
        "explanation": "Ils sont formés de nucléoporines ; la laminine est extracellulaire."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biologie_cellulaire.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Wee1 active CDK1 en retirant ses phosphates inhibiteurs.",
        "correct": false,
        "explanation": "Wee1 les ajoute ; Cdc25 les retire."
      },
      {
        "content": "APC/C-Cdc20 stabilise la sécurine afin d’empêcher la séparase d’agir pendant l’anaphase.",
        "correct": false,
        "explanation": "APC/C cible la sécurine pour dégradation."
      },
      {
        "content": "L’enveloppe nucléaire comporte deux membranes séparées par un espace périnucléaire.",
        "correct": true,
        "explanation": "La membrane externe est continue avec le RE."
      },
      {
        "content": "Les pores nucléaires sont constitués de nucléoporines.",
        "correct": true,
        "explanation": "Les complexes de pore contrôlent les échanges nucléocytoplasmiques."
      },
      {
        "content": "La cytocinèse animale est assurée par un anneau de tubuline et de dynéine sous la membrane.",
        "correct": false,
        "explanation": "L’anneau contractile est principalement actomyosine II."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Colle C09 — concernant genome mito, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:genome-mito"
    ],
    "choices": [
      {
        "content": "Tout le génome cellulaire humain est contenu dans le noyau sans exception.",
        "correct": false,
        "explanation": "Les mitochondries contiennent leur propre ADN."
      },
      {
        "content": "Le complexe II pompe autant de protons que le complexe I.",
        "correct": false,
        "explanation": "Le complexe II ne pompe pas directement de protons."
      },
      {
        "content": "Un nucléosome canonique contient un octamère d’histones avec deux copies de H2A, H2B, H3 et H4.",
        "correct": true,
        "explanation": "Environ 147 pb d’ADN s’enroulent autour de cet octamère."
      },
      {
        "content": "La chaîne respiratoire est située dans la membrane mitochondriale externe.",
        "correct": false,
        "explanation": "Elle est dans la membrane interne."
      },
      {
        "content": "Les lamines A/C sont codées par le gène LMNA.",
        "correct": true,
        "explanation": "Elles font partie de la lamina nucléaire."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle polymérase transcrit le précurseur 45S des ARNr 18S, 5,8S et 28S ?",
    "explanation": "Le précurseur 45S est transcrit par l’ARN polymérase I.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ARN polymérase I",
        "RNA polymerase I",
        "Pol I",
        "ARN pol I"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de genome mito ?",
    "explanation": "Il constitue une petite fraction du génome cellulaire total.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:genome-mito"
    ],
    "choices": [
      {
        "content": "Les pores nucléaires sont constitués principalement de laminine.",
        "correct": false,
        "explanation": "Ils sont formés de nucléoporines ; la laminine est extracellulaire."
      },
      {
        "content": "Les lamines nucléaires sont des glycoprotéines majeures de la membrane basale extracellulaire.",
        "correct": false,
        "explanation": "Ce sont les laminines qui sont extracellulaires ; les lamines sont nucléaires."
      },
      {
        "content": "L’histone H1 fait partie des huit histones du cœur nucléosomique canonique.",
        "correct": false,
        "explanation": "Le cœur contient H2A/H2B/H3/H4 ; H1 est une histone de liaison."
      },
      {
        "content": "L’ADN mitochondrial humain est distinct de l’ADN nucléaire.",
        "correct": true,
        "explanation": "Il constitue une petite fraction du génome cellulaire total."
      },
      {
        "content": "Le nucléole est un organite entouré d’une double membrane.",
        "correct": false,
        "explanation": "Il n’est pas membrané."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions correctes dans cette mise en relation de notions de biologie_cellulaire.",
    "explanation": "Deux propositions seulement sont exactes ; le nombre attendu est volontairement imposé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Tout le génome cellulaire humain est contenu dans le noyau sans exception.",
        "correct": false,
        "explanation": "Les mitochondries contiennent leur propre ADN."
      },
      {
        "content": "Les signaux de localisation nucléaire sont souvent riches en lysine et arginine.",
        "correct": true,
        "explanation": "Les NLS classiques sont fréquemment basiques, sans séquence universelle unique."
      },
      {
        "content": "Le complexe II pompe autant de protons que le complexe I.",
        "correct": false,
        "explanation": "Le complexe II ne pompe pas directement de protons."
      },
      {
        "content": "Les lamines A/C sont codées par le gène LMNA.",
        "correct": true,
        "explanation": "Elles font partie de la lamina nucléaire."
      },
      {
        "content": "La chaîne respiratoire est située dans la membrane mitochondriale externe.",
        "correct": false,
        "explanation": "Elle est dans la membrane interne."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Colle C09 — concernant nucleole, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:nucleole"
    ],
    "choices": [
      {
        "content": "L’ARN polymérase I transcrit le précurseur 45S des ARNr 18S, 5,8S et 28S.",
        "correct": true,
        "explanation": "Le 5S est transcrit séparément par l’ARN polymérase III."
      },
      {
        "content": "Les lamines nucléaires sont des glycoprotéines majeures de la membrane basale extracellulaire.",
        "correct": false,
        "explanation": "Ce sont les laminines qui sont extracellulaires ; les lamines sont nucléaires."
      },
      {
        "content": "L’histone H1 fait partie des huit histones du cœur nucléosomique canonique.",
        "correct": false,
        "explanation": "Le cœur contient H2A/H2B/H3/H4 ; H1 est une histone de liaison."
      },
      {
        "content": "Le nucléole n’est pas limité par une membrane.",
        "correct": true,
        "explanation": "C’est un condensat nucléaire lié à la biogenèse ribosomique."
      },
      {
        "content": "En G1, une cellule diploïde non répliquée est classiquement décrite 2n/2C.",
        "correct": true,
        "explanation": "Après réplication en G2, elle reste 2n mais passe à 4C."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "En G2, quelle quantité d’ADN C possède classiquement une cellule diploïde ?",
    "explanation": "Après réplication, la cellule est 2n/4C.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "4C",
        "4 C"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 20,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle proposition est exacte à propos de noyau ?",
    "explanation": "La membrane externe est continue avec le RE.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:noyau"
    ],
    "choices": [
      {
        "content": "Le nucléole est un organite entouré d’une double membrane.",
        "correct": false,
        "explanation": "Il n’est pas membrané."
      },
      {
        "content": "L’ARN polymérase III transcrit le précurseur 45S des ARNr majeurs.",
        "correct": false,
        "explanation": "Le 45S est transcrit par Pol I ; Pol III transcrit notamment l’ARNr 5S."
      },
      {
        "content": "Une cellule diploïde en G2 est 4n/4C.",
        "correct": false,
        "explanation": "Après réplication, elle reste 2n/4C tant que les chromatides sœurs ne sont pas séparées en cellules filles."
      },
      {
        "content": "Wee1 active CDK1 en retirant ses phosphates inhibiteurs.",
        "correct": false,
        "explanation": "Wee1 les ajoute ; Cdc25 les retire."
      },
      {
        "content": "L’enveloppe nucléaire comporte deux membranes séparées par un espace périnucléaire.",
        "correct": true,
        "explanation": "La membrane externe est continue avec le RE."
      }
    ]
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C09 — concernant cycle, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:cycle"
    ],
    "choices": [
      {
        "content": "Le complexe cycline B–CDK1 constitue le MPF classique favorisant l’entrée en mitose.",
        "correct": true,
        "explanation": "Son activation déclenche de nombreux événements mitotiques."
      },
      {
        "content": "Wee1 phosphoryle CDK1 sur des sites inhibiteurs alors que Cdc25 retire ces phosphates inhibiteurs.",
        "correct": true,
        "explanation": "Leur antagonisme contrôle l’activation du MPF."
      },
      {
        "content": "En G2, une cellule diploïde après réplication est classiquement 2n/4C.",
        "correct": true,
        "explanation": "La quantité d’ADN a doublé sans changement du nombre de lots chromosomiques."
      },
      {
        "content": "Wee1 active CDK1 en retirant ses phosphates inhibiteurs.",
        "correct": false,
        "explanation": "Wee1 les ajoute ; Cdc25 les retire."
      },
      {
        "content": "Une cellule diploïde en G2 est 4n/4C.",
        "correct": false,
        "explanation": "Après réplication, elle reste 2n/4C tant que les chromatides sœurs ne sont pas séparées en cellules filles."
      }
    ]
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Colle C09 — concernant respiration, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:respiration"
    ],
    "choices": [
      {
        "content": "Le complexe II pompe autant de protons que le complexe I.",
        "correct": false,
        "explanation": "Le complexe II ne pompe pas directement de protons."
      },
      {
        "content": "APC/C-Cdc20 favorise la dégradation de la sécurine et de la cycline B.",
        "correct": true,
        "explanation": "La séparase libérée clive les cohésines et la chute de cycline B favorise la sortie de mitose."
      },
      {
        "content": "Le point de contrôle du fuseau implique des protéines MAD/BUB et retarde l’activation d’APC/C-Cdc20 tant que des kinétochores ne sont pas correctement attachés.",
        "correct": true,
        "explanation": "Il prévient une séparation prématurée des chromatides."
      },
      {
        "content": "La chaîne respiratoire est située dans la membrane mitochondriale externe.",
        "correct": false,
        "explanation": "Elle est dans la membrane interne."
      },
      {
        "content": "La cytocinèse animale implique un anneau contractile d’actine et de myosine II.",
        "correct": true,
        "explanation": "Il forme le sillon de division."
      }
    ]
  },
  {
    "order": 23,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C09 — concernant respiration, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:respiration"
    ],
    "choices": [
      {
        "content": "La chaîne respiratoire mitochondriale est localisée dans la membrane interne.",
        "correct": true,
        "explanation": "Les complexes I à IV et l’ATP synthase y sont insérés."
      },
      {
        "content": "Les lamines nucléaires sont des glycoprotéines majeures de la membrane basale extracellulaire.",
        "correct": false,
        "explanation": "Ce sont les laminines qui sont extracellulaires ; les lamines sont nucléaires."
      },
      {
        "content": "La mitochondrie possède une membrane externe et une membrane interne distinctes.",
        "correct": true,
        "explanation": "La membrane interne forme des crêtes et délimite la matrice."
      },
      {
        "content": "Le complexe II de la chaîne respiratoire ne pompe pas directement de protons.",
        "correct": true,
        "explanation": "Il transfère des électrons vers l’ubiquinone sans translocation protonique couplée."
      },
      {
        "content": "Les complexes I, III et IV contribuent au pompage de protons à travers la membrane interne.",
        "correct": true,
        "explanation": "Le complexe II ne pompe pas directement de protons."
      }
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sélectionnez la plaque métaphasique.",
    "explanation": "La zone attendue correspond à : Plaque métaphasique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qzone"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c09/metaphase-plate-qzone.svg",
      "alt": "Cellule en métaphase",
      "width": 960,
      "height": 560
    },
    "expectedZones": [
      {
        "id": "target",
        "label": "Plaque métaphasique",
        "x": 0.5,
        "y": 0.5,
        "tolerance": 0.1
      }
    ],
    "defaultTolerance": 0.1
  },
  {
    "order": 25,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Colle C09 — concernant genome mito, quelles propositions sont exactes ?",
    "explanation": "Les propositions doivent être appréciées séparément : les formulations absolues ou les confusions de concepts proches constituent ici des distracteurs volontaires.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C09",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:genome-mito"
    ],
    "choices": [
      {
        "content": "L’ADN mitochondrial humain est distinct de l’ADN nucléaire.",
        "correct": true,
        "explanation": "Il constitue une petite fraction du génome cellulaire total."
      },
      {
        "content": "L’ATP synthase exploite le gradient électrochimique de protons pour synthétiser de l’ATP.",
        "correct": true,
        "explanation": "La force proton-motrice couple respiration et phosphorylation."
      },
      {
        "content": "L’enveloppe nucléaire comporte deux membranes séparées par un espace périnucléaire.",
        "correct": true,
        "explanation": "La membrane externe est continue avec le RE."
      },
      {
        "content": "Une cellule diploïde en G2 est 4n/4C.",
        "correct": false,
        "explanation": "Après réplication, elle reste 2n/4C tant que les chromatides sœurs ne sont pas séparées en cellules filles."
      },
      {
        "content": "Le complexe II de la chaîne respiratoire ne pompe pas directement de protons.",
        "correct": true,
        "explanation": "Il transfère des électrons vers l’ubiquinone sans translocation protonique couplée."
      }
    ]
  }
];
