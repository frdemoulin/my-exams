import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch7 — Inhibiteurs, rendement, stéroïdes, apoptose, thermogenèse, ROS et pathologies */
export const UE14_BIOCELL_CH7_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les inhibiteurs de la respiration mitochondriale, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Un inhibiteur du complexe IV peut provoquer une chute rapide de la consommation mitochondriale d’O2.",
        "correct": true,
        "explanation": "Le transfert terminal des électrons vers l’oxygène est bloqué."
      },
      {
        "content": "L’oligomycine inhibe l’ATP synthase.",
        "correct": true,
        "explanation": "Elle bloque le passage des protons par F0."
      },
      {
        "content": "L’antimycine A est un découplant physiologique de la graisse brune.",
        "correct": false,
        "explanation": "Elle inhibe le complexe III ; le découplage de la graisse brune est assuré par UCP1."
      },
      {
        "content": "Le cyanure augmente la synthèse d’ATP en accélérant le complexe IV.",
        "correct": false,
        "explanation": "Il bloque le complexe IV et peut interrompre la phosphorylation oxydative."
      },
      {
        "content": "L’oligomycine dissipe directement le gradient protonique comme un protonophore.",
        "correct": false,
        "explanation": "Elle bloque F0 ; elle ne fonctionne pas comme un protonophore."
      }
    ],
    "explanation": "Les inhibiteurs de la chaîne respiratoire ou de l’ATP synthase bloquent des étapes distinctes et permettent de comprendre le couplage bioénergétique."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Laquelle des propositions suivantes décrit correctement le rendement énergétique de la phosphorylation oxydative ?",
    "choices": [
      {
        "content": "Un découplage complet peut maintenir un flux respiratoire sans production efficace d’ATP.",
        "correct": true,
        "explanation": "L’énergie du gradient est alors dissipée, notamment en chaleur."
      },
      {
        "content": "L’oxydation d’un NADH cytosolique par la navette glycérol-3-phosphate procure le même rendement qu’un NADH matriciel entrant au complexe I.",
        "correct": false,
        "explanation": "La navette glycérol-3-phosphate contourne le complexe I et réduit le rendement."
      },
      {
        "content": "Le rendement énergétique ne dépend jamais de la perméabilité protonique de la membrane interne.",
        "correct": false,
        "explanation": "Une fuite de protons diminue le couplage et le rendement."
      },
      {
        "content": "Le bilan ATP d’un glucose chez l’eucaryote est toujours exactement de 30 ATP dans tous les tissus.",
        "correct": false,
        "explanation": "Il est souvent estimé autour de 30 à 32 ATP selon notamment la navette utilisée pour le NADH cytosolique."
      },
      {
        "content": "Les électrons du FADH2 du complexe II entraînent un pompage de protons par le complexe II.",
        "correct": false,
        "explanation": "Le complexe II ne pompe pas de protons."
      }
    ],
    "explanation": "Le rendement dépend du point d’entrée des électrons et de l’intégrité du couplage ; les valeurs conventionnelles sont d’environ 2,5 ATP/NADH et 1,5 ATP/FADH2."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel complexe de la chaîne respiratoire est inhibé par la roténone ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "complexe I",
        "I",
        "complexe 1"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La roténone inhibe le complexe I."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Sur le thème de la force proton-motrice et l’ATP synthase, quelles affirmations sont exactes ?",
    "choices": [
      {
        "content": "La phosphorylation oxydative nécessite un gradient de protons intact.",
        "correct": true,
        "explanation": "La dissipation du gradient découple la respiration de la synthèse d’ATP."
      },
      {
        "content": "Un découplant peut augmenter la consommation d’oxygène tout en diminuant le rendement de synthèse d’ATP.",
        "correct": true,
        "explanation": "Il dissipe la force proton-motrice sous forme de chaleur."
      },
      {
        "content": "L’ATP synthase produit de l’ATP directement à partir de NADH.",
        "correct": false,
        "explanation": "Elle utilise ADP + Pi et l’énergie de la force proton-motrice."
      },
      {
        "content": "L’ATP synthase pompe normalement les protons de la matrice vers l’espace intermembranaire pendant la synthèse d’ATP.",
        "correct": false,
        "explanation": "Pendant la synthèse, le flux de protons est dans le sens espace intermembranaire vers matrice."
      },
      {
        "content": "L’oligomycine bloque le canal F0 de l’ATP synthase.",
        "correct": true,
        "explanation": "Elle empêche le retour des protons et inhibe la synthèse d’ATP."
      }
    ],
    "explanation": "La chaîne respiratoire établit une force proton-motrice utilisée par l’ATP synthase F0F1 pour phosphoryler l’ADP dans la matrice."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Identifiez exactement deux propositions correctes concernant la chaîne respiratoire mitochondriale.",
    "choices": [
      {
        "content": "Le complexe II pompe des protons de la matrice vers l’espace intermembranaire.",
        "correct": false,
        "explanation": "Contrairement aux complexes I, III et IV, le complexe II ne pompe pas de protons."
      },
      {
        "content": "La chaîne respiratoire est localisée dans la membrane externe.",
        "correct": false,
        "explanation": "Elle est localisée dans la membrane interne."
      },
      {
        "content": "L’oxygène est l’accepteur final des électrons au complexe IV.",
        "correct": true,
        "explanation": "Il est réduit en eau."
      },
      {
        "content": "Les complexes I, III et IV contribuent au pompage de protons.",
        "correct": true,
        "explanation": "Ils participent à l’établissement du gradient électrochimique."
      },
      {
        "content": "Les électrons se déplacent spontanément de l’oxygène vers le NADH au cours de la respiration.",
        "correct": false,
        "explanation": "Le flux physiologique va des donneurs réduits vers l’O2."
      }
    ],
    "explanation": "Les complexes I à IV transfèrent les électrons vers l’oxygène ; I, III et IV pompent des protons, tandis que l’ubiquinone et le cytochrome c assurent des transferts mobiles.",
    "requiredSelectionCount": 2
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant les inhibiteurs de la respiration mitochondriale, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La roténone stimule directement l’ATP synthase.",
        "correct": false,
        "explanation": "Elle inhibe le complexe I et réduit l’alimentation de la chaîne en électrons issus du NADH."
      },
      {
        "content": "Le malonate est un inhibiteur compétitif classique de la succinate déshydrogénase, complexe II.",
        "correct": true,
        "explanation": "Sa structure ressemble au succinate."
      },
      {
        "content": "Le monoxyde de carbone peut perturber la cytochrome c oxydase en plus de son effet majeur sur l’hémoglobine.",
        "correct": true,
        "explanation": "Il peut se lier aux centres héminiques et gêner la respiration cellulaire."
      },
      {
        "content": "Le cyanure inhibe fortement le complexe IV.",
        "correct": true,
        "explanation": "Il empêche l’utilisation de l’oxygène par la cytochrome c oxydase."
      },
      {
        "content": "L’antimycine A inhibe le complexe III.",
        "correct": true,
        "explanation": "Elle bloque le cycle Q du complexe III."
      }
    ],
    "explanation": "Les inhibiteurs de la chaîne respiratoire ou de l’ATP synthase bloquent des étapes distinctes et permettent de comprendre le couplage bioénergétique."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est juste à propos du rendement énergétique de la phosphorylation oxydative ?",
    "choices": [
      {
        "content": "La totalité de l’ATP issu du catabolisme du glucose est produite par l’ATP synthase mitochondriale.",
        "correct": false,
        "explanation": "Une petite part est produite par phosphorylation au niveau du substrat dans la glycolyse et le cycle de Krebs."
      },
      {
        "content": "Le rendement de la phosphorylation oxydative dépend du point d’entrée des électrons dans la chaîne.",
        "correct": true,
        "explanation": "Une entrée au complexe I permet davantage de pompage qu’une entrée au niveau de l’ubiquinone."
      },
      {
        "content": "Le bilan ATP d’un glucose chez l’eucaryote est toujours exactement de 30 ATP dans tous les tissus.",
        "correct": false,
        "explanation": "Il est souvent estimé autour de 30 à 32 ATP selon notamment la navette utilisée pour le NADH cytosolique."
      },
      {
        "content": "Les électrons du FADH2 du complexe II entraînent un pompage de protons par le complexe II.",
        "correct": false,
        "explanation": "Le complexe II ne pompe pas de protons."
      },
      {
        "content": "L’oxydation d’un NADH cytosolique par la navette glycérol-3-phosphate procure le même rendement qu’un NADH matriciel entrant au complexe I.",
        "correct": false,
        "explanation": "La navette glycérol-3-phosphate contourne le complexe I et réduit le rendement."
      }
    ],
    "explanation": "Le rendement dépend du point d’entrée des électrons et de l’intégrité du couplage ; les valeurs conventionnelles sont d’environ 2,5 ATP/NADH et 1,5 ATP/FADH2."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel rendement conventionnel retient-on pour l’oxydation d’un NADH mitochondrial ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "2,5 ATP",
        "2.5 ATP",
        "2,5",
        "2.5"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La valeur conventionnelle est d’environ 2,5 ATP par NADH mitochondrial."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRPL",
    "question": "Parmi les dix propositions suivantes sur la force proton-motrice et l’ATP synthase, sélectionnez exactement les cinq exactes.",
    "choices": [
      {
        "content": "Le domaine F1 porte les sites catalytiques de synthèse d’ATP.",
        "correct": true,
        "explanation": "F1 fait saillie du côté matriciel."
      },
      {
        "content": "Le domaine F1 traverse la membrane interne et constitue le principal canal à protons.",
        "correct": false,
        "explanation": "F1 porte les sites catalytiques du côté matriciel ; le canal transmembranaire est F0."
      },
      {
        "content": "Le gradient protonique est créé parce que les complexes respiratoires synthétisent de nouveaux protons.",
        "correct": false,
        "explanation": "Ils déplacent des protons préexistants de la matrice vers l’espace intermembranaire."
      },
      {
        "content": "En conditions particulières, l’ATP synthase peut fonctionner en sens inverse et hydrolyser l’ATP.",
        "correct": true,
        "explanation": "Le fonctionnement réversible peut contribuer au maintien du gradient lorsque la respiration est insuffisante."
      },
      {
        "content": "La phosphorylation oxydative se déroule dans le cytosol.",
        "correct": false,
        "explanation": "Elle dépend de la membrane interne mitochondriale."
      },
      {
        "content": "La force proton-motrice correspond uniquement à une différence de concentration en ATP.",
        "correct": false,
        "explanation": "Elle associe un potentiel électrique et un gradient de protons."
      },
      {
        "content": "Le domaine F0 forme la voie transmembranaire des protons.",
        "correct": true,
        "explanation": "F0 est inséré dans la membrane interne."
      },
      {
        "content": "La force proton-motrice comporte une composante électrique et une composante chimique.",
        "correct": true,
        "explanation": "Elle résulte du potentiel de membrane et du gradient de pH."
      },
      {
        "content": "Les protons reviennent physiologiquement de l’espace intermembranaire vers la matrice à travers l’ATP synthase.",
        "correct": true,
        "explanation": "Ce flux fournit l’énergie mécanique et chimique nécessaire à la synthèse d’ATP."
      },
      {
        "content": "L’ATP synthase pompe normalement les protons de la matrice vers l’espace intermembranaire pendant la synthèse d’ATP.",
        "correct": false,
        "explanation": "Pendant la synthèse, le flux de protons est dans le sens espace intermembranaire vers matrice."
      }
    ],
    "explanation": "La chaîne respiratoire établit une force proton-motrice utilisée par l’ATP synthase F0F1 pour phosphoryler l’ADP dans la matrice.",
    "requiredSelectionCount": 5
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Identifiez les affirmations justes au sujet de la chaîne respiratoire mitochondriale.",
    "choices": [
      {
        "content": "Le cytochrome c transfère des électrons du complexe III au complexe IV.",
        "correct": true,
        "explanation": "C’est un transporteur périphérique de l’espace intermembranaire."
      },
      {
        "content": "Les électrons se déplacent spontanément de l’oxygène vers le NADH au cours de la respiration.",
        "correct": false,
        "explanation": "Le flux physiologique va des donneurs réduits vers l’O2."
      },
      {
        "content": "L’ubiquinone transporte des électrons dans la membrane interne entre les complexes I/II et III.",
        "correct": true,
        "explanation": "La coenzyme Q est un transporteur liposoluble mobile."
      },
      {
        "content": "La chaîne respiratoire est localisée dans la membrane externe.",
        "correct": false,
        "explanation": "Elle est localisée dans la membrane interne."
      },
      {
        "content": "Le complexe IV produit directement de l’ATP.",
        "correct": false,
        "explanation": "Il transfère les électrons à l’O2 et pompe des protons ; l’ATP est synthétisé par l’ATP synthase."
      }
    ],
    "explanation": "Les complexes I à IV transfèrent les électrons vers l’oxygène ; I, III et IV pompent des protons, tandis que l’ubiquinone et le cytochrome c assurent des transferts mobiles."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont correctes concernant la participation mitochondriale à la stéroïdogenèse ?",
    "choices": [
      {
        "content": "La stéroïdogenèse mitochondriale a lieu dans toutes les cellules avec la même intensité.",
        "correct": false,
        "explanation": "Elle est particulièrement développée dans les cellules stéroïdogènes spécialisées."
      },
      {
        "content": "La protéine StAR facilite le transfert du cholestérol vers la membrane interne mitochondriale dans les cellules stéroïdogènes.",
        "correct": true,
        "explanation": "Ce transfert est une étape régulatrice importante de la stéroïdogenèse aiguë."
      },
      {
        "content": "Le complexe IV de la chaîne respiratoire convertit directement le cholestérol en prégnénolone.",
        "correct": false,
        "explanation": "Cette conversion relève de CYP11A1, non du complexe IV."
      },
      {
        "content": "La première étape de la stéroïdogenèse transforme le cholestérol en prégnénolone dans la mitochondrie.",
        "correct": true,
        "explanation": "Cette réaction est catalysée par CYP11A1 dans la membrane interne."
      },
      {
        "content": "Le REL peut intervenir dans des hydroxylations ultérieures de stéroïdes.",
        "correct": true,
        "explanation": "Des enzymes P450 microsomales assurent plusieurs étapes de maturation."
      }
    ],
    "explanation": "Dans les cellules stéroïdogènes, le cholestérol est transféré vers la membrane interne puis converti en prégnénolone par CYP11A1, en coopération avec le REL."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel rendement conventionnel retient-on pour l’oxydation d’un FADH2 dont les électrons entrent au niveau de l’ubiquinone ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "1,5 ATP",
        "1.5 ATP",
        "1,5",
        "1.5"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La valeur conventionnelle est d’environ 1,5 ATP."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi ces affirmations sur la voie intrinsèque de l’apoptose, laquelle est exacte ?",
    "choices": [
      {
        "content": "L’apoptose intrinsèque exige une rupture mécanique explosive de toutes les membranes mitochondriales.",
        "correct": false,
        "explanation": "La MOMP est régulée et ne correspond pas nécessairement à une rupture non contrôlée de l’organite."
      },
      {
        "content": "Le cytochrome c reste dans la matrice mitochondriale au repos.",
        "correct": false,
        "explanation": "Il est localisé principalement dans l’espace intermembranaire, associé à la face externe de la membrane interne."
      },
      {
        "content": "Le cytochrome c libéré dans le cytosol participe à la formation de l’apoptosome.",
        "correct": true,
        "explanation": "Il s’associe notamment à Apaf-1 et favorise l’activation de la procaspase-9."
      },
      {
        "content": "L’apoptosome est un complexe situé dans la lumière du lysosome.",
        "correct": false,
        "explanation": "Il se forme dans le cytosol."
      },
      {
        "content": "La libération du cytochrome c déclenche directement la réplication de l’ADN nucléaire.",
        "correct": false,
        "explanation": "Elle favorise la formation de l’apoptosome et l’activation des caspases."
      }
    ],
    "explanation": "La voie intrinsèque implique la perméabilisation de la membrane externe, la libération de cytochrome c et la formation cytosolique de l’apoptosome."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant le découplage et la thermogenèse mitochondriale, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "UCP1 augmente le rendement de production d’ATP par proton.",
        "correct": false,
        "explanation": "Elle diminue le couplage entre respiration et synthèse d’ATP."
      },
      {
        "content": "UCP1 permet une fuite contrôlée de protons vers la matrice.",
        "correct": true,
        "explanation": "Elle dissipe la force proton-motrice sans passer par l’ATP synthase."
      },
      {
        "content": "UCP1 est aussi appelée thermogénine.",
        "correct": true,
        "explanation": "C’est une protéine découplante caractéristique du tissu adipeux brun."
      },
      {
        "content": "Le tissu adipeux brun est riche en mitochondries.",
        "correct": true,
        "explanation": "Cette abondance contribue à sa couleur et à sa capacité thermogénique."
      },
      {
        "content": "L’activation d’UCP1 favorise la production de chaleur.",
        "correct": true,
        "explanation": "L’énergie du gradient protonique est dissipée sous forme de chaleur."
      }
    ],
    "explanation": "UCP1 dissipe la force proton-motrice dans le tissu adipeux brun, transformant une partie de l’énergie d’oxydation en chaleur plutôt qu’en ATP."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle molécule est le premier stéroïde formé à partir du cholestérol dans la mitochondrie ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "prégnénolone",
        "pregnenolone"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "CYP11A1 convertit le cholestérol en prégnénolone."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sur le thème des espèces réactives de l’oxygène et les défenses antioxydantes, quelles sont les deux affirmations justes ?",
    "choices": [
      {
        "content": "Les peroxyrédoxines participent à la défense antioxydante.",
        "correct": true,
        "explanation": "Elles réduisent notamment des peroxydes."
      },
      {
        "content": "Toute production mitochondriale de ROS est nécessairement pathologique.",
        "correct": false,
        "explanation": "À faible niveau, les ROS peuvent aussi participer à des voies de signalisation."
      },
      {
        "content": "La SOD2 transforme le superoxyde directement en ATP.",
        "correct": false,
        "explanation": "Elle catalyse la dismutation du superoxyde en H2O2."
      },
      {
        "content": "Un excès de ROS peut contribuer au vieillissement cellulaire et à diverses pathologies.",
        "correct": true,
        "explanation": "Le stress oxydant peut altérer les macromolécules et les organites."
      },
      {
        "content": "Une augmentation des ROS améliore toujours la fonction mitochondriale.",
        "correct": false,
        "explanation": "Un excès de ROS provoque un stress oxydant et des lésions."
      }
    ],
    "explanation": "Une fuite d’électrons, notamment aux complexes I et III, peut former du superoxyde ; des systèmes comme SOD2, glutathion peroxydase et peroxyrédoxines limitent le stress oxydant.",
    "requiredSelectionCount": 2
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le rendement énergétique de la phosphorylation oxydative, quelles propositions sont incorrectes ?",
    "choices": [
      {
        "content": "La totalité de l’ATP issu du catabolisme du glucose est produite par l’ATP synthase mitochondriale.",
        "correct": true,
        "explanation": "Une petite part est produite par phosphorylation au niveau du substrat dans la glycolyse et le cycle de Krebs."
      },
      {
        "content": "La consommation d’O2 est directement couplée à l’activité du complexe IV.",
        "correct": false,
        "explanation": "L’O2 y sert d’accepteur final des électrons."
      },
      {
        "content": "L’oxydation d’un NADH cytosolique par la navette glycérol-3-phosphate procure le même rendement qu’un NADH matriciel entrant au complexe I.",
        "correct": true,
        "explanation": "La navette glycérol-3-phosphate contourne le complexe I et réduit le rendement."
      },
      {
        "content": "Le rendement de la phosphorylation oxydative dépend du point d’entrée des électrons dans la chaîne.",
        "correct": false,
        "explanation": "Une entrée au complexe I permet davantage de pompage qu’une entrée au niveau de l’ubiquinone."
      },
      {
        "content": "La phosphorylation au niveau du substrat du cycle de Krebs peut produire du GTP ou de l’ATP selon les tissus.",
        "correct": false,
        "explanation": "La succinyl-CoA synthétase réalise cette phosphorylation au niveau du substrat."
      }
    ],
    "explanation": "Le rendement dépend du point d’entrée des électrons et de l’intégrité du couplage ; les valeurs conventionnelles sont d’environ 2,5 ATP/NADH et 1,5 ATP/FADH2."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Laquelle des propositions suivantes décrit correctement la participation mitochondriale à la stéroïdogenèse ?",
    "choices": [
      {
        "content": "La prégnénolone est synthétisée dans le cytosol par l’ATP synthase.",
        "correct": false,
        "explanation": "Elle est produite à partir du cholestérol par CYP11A1 dans la mitochondrie."
      },
      {
        "content": "Le cholestérol est hydrolysé en prégnénolone par une hydrolase lysosomale.",
        "correct": false,
        "explanation": "La conversion est une réaction d’oxydation/clivage catalysée par CYP11A1."
      },
      {
        "content": "Toutes les étapes de synthèse du cortisol se déroulent exclusivement dans la mitochondrie.",
        "correct": false,
        "explanation": "La biosynthèse implique des étapes mitochondriales et réticulaires."
      },
      {
        "content": "La mitochondrie coopère avec le réticulum endoplasmique lisse pour la synthèse de nombreuses hormones stéroïdes.",
        "correct": true,
        "explanation": "Les étapes enzymatiques alternent entre mitochondrie et REL selon la voie hormonale."
      },
      {
        "content": "Le complexe IV de la chaîne respiratoire convertit directement le cholestérol en prégnénolone.",
        "correct": false,
        "explanation": "Cette conversion relève de CYP11A1, non du complexe IV."
      }
    ],
    "explanation": "Dans les cellules stéroïdogènes, le cholestérol est transféré vers la membrane interne puis converti en prégnénolone par CYP11A1, en coopération avec le REL."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont correctes concernant la voie intrinsèque de l’apoptose ?",
    "choices": [
      {
        "content": "Les caspases effectrices peuvent favoriser la fragmentation de l’ADN via l’activation de nucléases.",
        "correct": true,
        "explanation": "Elles déclenchent un programme coordonné de démantèlement cellulaire."
      },
      {
        "content": "Les procaspases sont principalement libérées de la matrice mitochondriale pour former l’apoptosome.",
        "correct": false,
        "explanation": "La procaspase-9 est cytosolique ; c’est notamment le cytochrome c mitochondrial qui est libéré."
      },
      {
        "content": "La voie intrinsèque dépend de protéines de la famille BCL-2 qui régulent la perméabilisation de la membrane externe.",
        "correct": true,
        "explanation": "Les protéines pro- et anti-apoptotiques de cette famille contrôlent la MOMP."
      },
      {
        "content": "La chute du potentiel mitochondrial peut accompagner la progression de l’apoptose intrinsèque.",
        "correct": true,
        "explanation": "Les altérations bioénergétiques accompagnent souvent la perméabilisation mitochondriale."
      },
      {
        "content": "La voie intrinsèque de l’apoptose est indépendante de toute régulation par la famille BCL-2.",
        "correct": false,
        "explanation": "La famille BCL-2 est un régulateur central de la perméabilisation de la membrane externe."
      }
    ],
    "explanation": "La voie intrinsèque implique la perméabilisation de la membrane externe, la libération de cytochrome c et la formation cytosolique de l’apoptosome."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle protéine mitochondriale libérée dans le cytosol participe à la formation de l’apoptosome ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cytochrome c",
        "cytochrome C"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le cytochrome c cytosolique s’associe notamment à Apaf-1."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Concernant le découplage et la thermogenèse mitochondriale, identifiez exactement cinq affirmations correctes parmi les dix proposées.",
    "choices": [
      {
        "content": "L’activation d’UCP1 favorise la production de chaleur.",
        "correct": true,
        "explanation": "L’énergie du gradient protonique est dissipée sous forme de chaleur."
      },
      {
        "content": "La thermogenèse sans frisson par UCP1 est particulièrement importante chez le nouveau-né.",
        "correct": true,
        "explanation": "Elle contribue au maintien de la température corporelle."
      },
      {
        "content": "Le tissu adipeux brun est riche en mitochondries.",
        "correct": true,
        "explanation": "Cette abondance contribue à sa couleur et à sa capacité thermogénique."
      },
      {
        "content": "UCP1 est aussi appelée thermogénine.",
        "correct": true,
        "explanation": "C’est une protéine découplante caractéristique du tissu adipeux brun."
      },
      {
        "content": "La thermogenèse du tissu adipeux brun dépend d’un pompage supplémentaire des protons vers l’espace intermembranaire par UCP1.",
        "correct": false,
        "explanation": "UCP1 facilite au contraire le retour des protons vers la matrice."
      },
      {
        "content": "UCP1 bloque le complexe IV.",
        "correct": false,
        "explanation": "Elle agit comme voie de fuite protonique dans la membrane interne."
      },
      {
        "content": "UCP1 permet une fuite contrôlée de protons vers la matrice.",
        "correct": true,
        "explanation": "Elle dissipe la force proton-motrice sans passer par l’ATP synthase."
      },
      {
        "content": "UCP1 augmente le rendement de production d’ATP par proton.",
        "correct": false,
        "explanation": "Elle diminue le couplage entre respiration et synthèse d’ATP."
      },
      {
        "content": "UCP1 produit de la chaleur en hydrolysant directement l’ATP dans la matrice.",
        "correct": false,
        "explanation": "UCP1 dissipe le gradient de protons ; elle n’hydrolyse pas directement l’ATP."
      },
      {
        "content": "La thermogénine est une sous-unité catalytique F1 de l’ATP synthase.",
        "correct": false,
        "explanation": "UCP1 est une protéine découplante distincte de l’ATP synthase."
      }
    ],
    "explanation": "UCP1 dissipe la force proton-motrice dans le tissu adipeux brun, transformant une partie de l’énergie d’oxydation en chaleur plutôt qu’en ATP.",
    "requiredSelectionCount": 5
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant les espèces réactives de l’oxygène et les défenses antioxydantes, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le superoxyde mitochondrial peut être converti en H2O2 par une superoxyde dismutase.",
        "correct": true,
        "explanation": "La SOD2 matricielle catalyse cette dismutation."
      },
      {
        "content": "Les mitochondries fabriquent l’ensemble de leurs enzymes antioxydantes à partir de leur propre génome.",
        "correct": false,
        "explanation": "Une grande partie est codée par le noyau puis importée."
      },
      {
        "content": "Les espèces réactives de l’oxygène peuvent endommager lipides, protéines et acides nucléiques.",
        "correct": true,
        "explanation": "Un excès de ROS provoque un stress oxydant."
      },
      {
        "content": "La glutathion peroxydase peut contribuer à éliminer le peroxyde d’hydrogène.",
        "correct": true,
        "explanation": "Elle réduit H2O2 en utilisant le glutathion."
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
    "order": 89,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce schéma simplifié d’une mitochondrie, cliquez dans la matrice mitochondriale, compartiment où se déroule principalement le cycle de Krebs.",
    "image": {
      "src": "/images/training/ue14/biologie-cellulaire/mitochondrie/compartiments-mitochondrie-qzone.svg",
      "alt": "Schéma original simplifié d’une mitochondrie montrant membrane externe, espace intermembranaire, membrane interne et matrice",
      "width": 1200,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "matrice",
        "label": "Matrice mitochondriale",
        "x": 0.61,
        "y": 0.52,
        "tolerance": 0.16
      }
    ],
    "explanation": "Le cycle de Krebs se déroule principalement dans la matrice mitochondriale ; la chaîne respiratoire et l’ATP synthase sont portées par la membrane interne."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel est l’autre nom d’UCP1 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "thermogénine",
        "thermogenine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "UCP1 est la thermogénine du tissu adipeux brun."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant le découplage et la thermogenèse mitochondriale, sélectionnez exactement les deux propositions exactes.",
    "choices": [
      {
        "content": "Le tissu adipeux brun est riche en mitochondries.",
        "correct": true,
        "explanation": "Cette abondance contribue à sa couleur et à sa capacité thermogénique."
      },
      {
        "content": "La thermogenèse du tissu adipeux brun dépend d’un pompage supplémentaire des protons vers l’espace intermembranaire par UCP1.",
        "correct": false,
        "explanation": "UCP1 facilite au contraire le retour des protons vers la matrice."
      },
      {
        "content": "UCP1 augmente le rendement de production d’ATP par proton.",
        "correct": false,
        "explanation": "Elle diminue le couplage entre respiration et synthèse d’ATP."
      },
      {
        "content": "UCP1 bloque le complexe IV.",
        "correct": false,
        "explanation": "Elle agit comme voie de fuite protonique dans la membrane interne."
      },
      {
        "content": "L’activation d’UCP1 favorise la production de chaleur.",
        "correct": true,
        "explanation": "L’énergie du gradient protonique est dissipée sous forme de chaleur."
      }
    ],
    "explanation": "UCP1 dissipe la force proton-motrice dans le tissu adipeux brun, transformant une partie de l’énergie d’oxydation en chaleur plutôt qu’en ATP.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Identifiez les affirmations justes au sujet des espèces réactives de l’oxygène et les défenses antioxydantes.",
    "choices": [
      {
        "content": "Un excès de ROS peut contribuer au vieillissement cellulaire et à diverses pathologies.",
        "correct": true,
        "explanation": "Le stress oxydant peut altérer les macromolécules et les organites."
      },
      {
        "content": "Les peroxyrédoxines participent à la défense antioxydante.",
        "correct": true,
        "explanation": "Elles réduisent notamment des peroxydes."
      },
      {
        "content": "La SOD2 transforme le superoxyde directement en ATP.",
        "correct": false,
        "explanation": "Elle catalyse la dismutation du superoxyde en H2O2."
      },
      {
        "content": "L’O2 moléculaire ne peut jamais être réduit de façon incomplète dans la mitochondrie.",
        "correct": false,
        "explanation": "Une réduction partielle peut former des espèces réactives comme le superoxyde."
      },
      {
        "content": "Le complexe II est toujours la source majeure et exclusive de superoxyde mitochondrial.",
        "correct": false,
        "explanation": "Les complexes I et III sont classiquement des sources majeures, même si d’autres enzymes peuvent aussi produire des ROS."
      }
    ],
    "explanation": "Une fuite d’électrons, notamment aux complexes I et III, peut former du superoxyde ; des systèmes comme SOD2, glutathion peroxydase et peroxyrédoxines limitent le stress oxydant."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Sur le thème des cytopathies mitochondriales, quelle proposition est juste ?",
    "choices": [
      {
        "content": "Les cellules fortement glycolytiques sont toujours les plus sensibles à tout défaut mitochondrial.",
        "correct": false,
        "explanation": "La sensibilité dépend notamment de la dépendance du tissu à la phosphorylation oxydative."
      },
      {
        "content": "Toutes les maladies mitochondriales se manifestent uniquement par une atteinte musculaire.",
        "correct": false,
        "explanation": "Elles peuvent être multisystémiques."
      },
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
        "content": "Un défaut du complexe I peut diminuer la production d’ATP et modifier l’équilibre redox.",
        "correct": true,
        "explanation": "Le transfert des électrons du NADH et le pompage de protons sont alors altérés."
      }
    ],
    "explanation": "Les maladies mitochondriales peuvent résulter de variants de l’ADN mitochondrial ou de gènes nucléaires et touchent volontiers les tissus à forte demande énergétique."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Sur le thème de la voie intrinsèque de l’apoptose, quelles affirmations sont exactes ?",
    "choices": [
      {
        "content": "La chute du potentiel mitochondrial peut accompagner la progression de l’apoptose intrinsèque.",
        "correct": true,
        "explanation": "Les altérations bioénergétiques accompagnent souvent la perméabilisation mitochondriale."
      },
      {
        "content": "Les caspases effectrices peuvent favoriser la fragmentation de l’ADN via l’activation de nucléases.",
        "correct": true,
        "explanation": "Elles déclenchent un programme coordonné de démantèlement cellulaire."
      },
      {
        "content": "La perméabilisation de la membrane externe mitochondriale est un événement majeur de la voie intrinsèque de l’apoptose.",
        "correct": true,
        "explanation": "La MOMP permet la libération de protéines pro-apoptotiques de l’espace intermembranaire."
      },
      {
        "content": "L’apoptose intrinsèque exige une rupture mécanique explosive de toutes les membranes mitochondriales.",
        "correct": false,
        "explanation": "La MOMP est régulée et ne correspond pas nécessairement à une rupture non contrôlée de l’organite."
      },
      {
        "content": "Les procaspases sont principalement libérées de la matrice mitochondriale pour former l’apoptosome.",
        "correct": false,
        "explanation": "La procaspase-9 est cytosolique ; c’est notamment le cytochrome c mitochondrial qui est libéré."
      }
    ],
    "explanation": "La voie intrinsèque implique la perméabilisation de la membrane externe, la libération de cytochrome c et la formation cytosolique de l’apoptosome."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle enzyme matricielle dismute le superoxyde mitochondrial en peroxyde d’hydrogène ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "SOD2",
        "superoxyde dismutase 2",
        "MnSOD",
        "manganese superoxide dismutase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La SOD2 mitochondriale catalyse cette réaction dans la matrice."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "question": "Cinq propositions sont exactes à propos de la participation mitochondriale à la stéroïdogenèse. Sélectionnez-les.",
    "choices": [
      {
        "content": "La protéine StAR facilite le transfert du cholestérol vers la membrane interne mitochondriale dans les cellules stéroïdogènes.",
        "correct": true,
        "explanation": "Ce transfert est une étape régulatrice importante de la stéroïdogenèse aiguë."
      },
      {
        "content": "Toutes les étapes de synthèse du cortisol se déroulent exclusivement dans la mitochondrie.",
        "correct": false,
        "explanation": "La biosynthèse implique des étapes mitochondriales et réticulaires."
      },
      {
        "content": "Le complexe IV de la chaîne respiratoire convertit directement le cholestérol en prégnénolone.",
        "correct": false,
        "explanation": "Cette conversion relève de CYP11A1, non du complexe IV."
      },
      {
        "content": "CYP11A1 est un cytochrome P450 mitochondrial.",
        "correct": true,
        "explanation": "Il catalyse la coupure de la chaîne latérale du cholestérol."
      },
      {
        "content": "La première étape de la stéroïdogenèse transforme le cholestérol en prégnénolone dans la mitochondrie.",
        "correct": true,
        "explanation": "Cette réaction est catalysée par CYP11A1 dans la membrane interne."
      },
      {
        "content": "Le cholestérol est hydrolysé en prégnénolone par une hydrolase lysosomale.",
        "correct": false,
        "explanation": "La conversion est une réaction d’oxydation/clivage catalysée par CYP11A1."
      },
      {
        "content": "La stéroïdogenèse mitochondriale a lieu dans toutes les cellules avec la même intensité.",
        "correct": false,
        "explanation": "Elle est particulièrement développée dans les cellules stéroïdogènes spécialisées."
      },
      {
        "content": "Le REL peut intervenir dans des hydroxylations ultérieures de stéroïdes.",
        "correct": true,
        "explanation": "Des enzymes P450 microsomales assurent plusieurs étapes de maturation."
      },
      {
        "content": "La prégnénolone est le précurseur initial commun des principales hormones stéroïdes.",
        "correct": true,
        "explanation": "Elle alimente ensuite les voies menant aux glucocorticoïdes, minéralocorticoïdes et hormones sexuelles."
      },
      {
        "content": "La prégnénolone est synthétisée dans le cytosol par l’ATP synthase.",
        "correct": false,
        "explanation": "Elle est produite à partir du cholestérol par CYP11A1 dans la mitochondrie."
      }
    ],
    "explanation": "Dans les cellules stéroïdogènes, le cholestérol est transféré vers la membrane interne puis converti en prégnénolone par CYP11A1, en coopération avec le REL.",
    "requiredSelectionCount": 5
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement le découplage et la thermogenèse mitochondriale ?",
    "choices": [
      {
        "content": "L’activation d’UCP1 favorise la production de chaleur.",
        "correct": true,
        "explanation": "L’énergie du gradient protonique est dissipée sous forme de chaleur."
      },
      {
        "content": "La thermogenèse sans frisson par UCP1 est particulièrement importante chez le nouveau-né.",
        "correct": true,
        "explanation": "Elle contribue au maintien de la température corporelle."
      },
      {
        "content": "UCP1 est aussi appelée thermogénine.",
        "correct": true,
        "explanation": "C’est une protéine découplante caractéristique du tissu adipeux brun."
      },
      {
        "content": "UCP1 permet une fuite contrôlée de protons vers la matrice.",
        "correct": true,
        "explanation": "Elle dissipe la force proton-motrice sans passer par l’ATP synthase."
      },
      {
        "content": "La thermogénine est une sous-unité catalytique F1 de l’ATP synthase.",
        "correct": false,
        "explanation": "UCP1 est une protéine découplante distincte de l’ATP synthase."
      }
    ],
    "explanation": "UCP1 dissipe la force proton-motrice dans le tissu adipeux brun, transformant une partie de l’énergie d’oxydation en chaleur plutôt qu’en ATP."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Comment appelle-t-on une maladie due à un dysfonctionnement mitochondrial ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cytopathie mitochondriale",
        "maladie mitochondriale",
        "mitochondriopathie"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les cytopathies mitochondriales regroupent des maladies dues à une altération de fonctions mitochondriales."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Deux affirmations seulement sont exactes à propos des espèces réactives de l’oxygène et les défenses antioxydantes. Lesquelles ?",
    "choices": [
      {
        "content": "Une augmentation des ROS améliore toujours la fonction mitochondriale.",
        "correct": false,
        "explanation": "Un excès de ROS provoque un stress oxydant et des lésions."
      },
      {
        "content": "Les mitochondries fabriquent l’ensemble de leurs enzymes antioxydantes à partir de leur propre génome.",
        "correct": false,
        "explanation": "Une grande partie est codée par le noyau puis importée."
      },
      {
        "content": "Les complexes I et III sont des sites importants de production mitochondriale de superoxyde.",
        "correct": true,
        "explanation": "Une fuite d’électrons vers l’oxygène peut générer O2•−."
      },
      {
        "content": "La glutathion peroxydase peut contribuer à éliminer le peroxyde d’hydrogène.",
        "correct": true,
        "explanation": "Elle réduit H2O2 en utilisant le glutathion."
      },
      {
        "content": "Toute production mitochondriale de ROS est nécessairement pathologique.",
        "correct": false,
        "explanation": "À faible niveau, les ROS peuvent aussi participer à des voies de signalisation."
      }
    ],
    "explanation": "Une fuite d’électrons, notamment aux complexes I et III, peut former du superoxyde ; des systèmes comme SOD2, glutathion peroxydase et peroxyrédoxines limitent le stress oxydant.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Identifiez les affirmations justes au sujet des cytopathies mitochondriales.",
    "choices": [
      {
        "content": "L’absence totale de mitochondries est normale dans les neurones matures.",
        "correct": false,
        "explanation": "Les neurones ont une forte demande énergétique et possèdent de nombreuses mitochondries."
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
      },
      {
        "content": "L’hétéroplasmie contribue à la variabilité d’expression des maladies dues à l’ADN mitochondrial.",
        "correct": true,
        "explanation": "La proportion de génomes mutés peut varier entre tissus et au cours des divisions."
      },
      {
        "content": "La neuropathie optique héréditaire de Leber est un exemple de maladie liée à l’ADN mitochondrial.",
        "correct": true,
        "explanation": "Elle est souvent associée à des variants de gènes mitochondriaux du complexe I."
      }
    ],
    "explanation": "Les maladies mitochondriales peuvent résulter de variants de l’ADN mitochondrial ou de gènes nucléaires et touchent volontiers les tissus à forte demande énergétique."
  }
];
