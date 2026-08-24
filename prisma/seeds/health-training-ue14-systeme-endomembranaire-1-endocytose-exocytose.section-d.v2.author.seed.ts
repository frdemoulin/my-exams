import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch4 — Section D — LDL, recyclage, exocytose et transcytose */
export const UE14_BIOCELL_CH4_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'entrée cellulaire du LDL, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Le LDL se lie au récepteur LDL à la surface de nombreuses cellules.",
        "correct": true,
        "explanation": "Le récepteur reconnaît notamment l'apoB-100 du LDL."
      },
      {
        "content": "La dynamine est le ligand extracellulaire du récepteur LDL.",
        "correct": false,
        "explanation": "C'est une GTPase cytosolique de scission."
      },
      {
        "content": "Le récepteur LDL est un cargo soluble contenu au centre de la vésicule.",
        "correct": false,
        "explanation": "C'est une protéine transmembranaire."
      },
      {
        "content": "La clathrine reste sur la vésicule jusqu'à sa dégradation lysosomale.",
        "correct": false,
        "explanation": "Le manteau est retiré rapidement."
      },
      {
        "content": "Le manteau de clathrine est retiré avant l'arrivée fonctionnelle à l'endosome précoce.",
        "correct": true,
        "explanation": "Hsc70 et l'auxiline participent au déshabillage."
      }
    ],
    "explanation": "Le complexe LDL–LDL-R est concentré dans des puits à clathrine, scindé avec la dynamine puis rapidement déshabillé."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur le tri du LDL et de son récepteur, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le pH acide de l'endosome favorise la dissociation du LDL et de son récepteur.",
        "correct": true,
        "explanation": "Cette séparation permet des destins distincts."
      },
      {
        "content": "Le LDL ressort normalement intact par exocytose immédiatement après l'endosome précoce.",
        "correct": false,
        "explanation": "Il est dirigé vers la voie dégradative."
      },
      {
        "content": "L'endosome précoce n'a aucun rôle de tri.",
        "correct": false,
        "explanation": "C'est une station de tri centrale."
      },
      {
        "content": "Le récepteur LDL est obligatoirement détruit à chaque cycle d'endocytose.",
        "correct": false,
        "explanation": "Il est majoritairement recyclé."
      },
      {
        "content": "La dissociation LDL-récepteur exige un pH de 7,4 dans l'endosome.",
        "correct": false,
        "explanation": "Elle est favorisée par l'acidification."
      }
    ],
    "explanation": "Le pH endosomal sépare LDL et LDL-R : le récepteur recycle, tandis que le LDL est adressé vers la voie lysosomale."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel lipide est libéré après hydrolyse des esters de cholestérol du LDL dans les lysosomes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cholestérol",
        "cholestérol libre",
        "cholestérol non estérifié"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le LDL fournit du cholestérol après hydrolyse lysosomale ; le LDL-R recycle et l'export du cholestérol implique notamment NPC1/NPC2."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'endocytose du récepteur de la transferrine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le complexe transferrine-récepteur entre par endocytose clathrine-dépendante.",
        "correct": true,
        "explanation": "Le récepteur est recyclé."
      },
      {
        "content": "La transferrine transporte principalement du fer ferrique Fe3+ dans le plasma.",
        "correct": true,
        "explanation": "La forme physiologiquement liée à la transferrine est Fe3+."
      },
      {
        "content": "La transferrine plasmatique transporte physiologiquement surtout Fe2+ libre.",
        "correct": false,
        "explanation": "Elle lie principalement Fe3+."
      },
      {
        "content": "L'acidification endosomale favorise la libération du fer.",
        "correct": true,
        "explanation": "L'apotransferrine reste liée au récepteur à pH acide."
      },
      {
        "content": "L'acidification de l'endosome empêche tout changement du complexe transferrine-récepteur.",
        "correct": false,
        "explanation": "Elle est essentielle au cycle du fer."
      }
    ],
    "explanation": "La transferrine transporte surtout Fe3+ et son récepteur suit un cycle clathrine-endosome-recyclage."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur l'exocytose constitutive, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Elle achemine des cargos depuis le réseau trans-Golgien vers la surface.",
        "correct": true,
        "explanation": "Le flux est permanent en l'absence d'un signal déclencheur spécifique."
      },
      {
        "content": "Elle fonctionne en continu dans pratiquement toutes les cellules eucaryotes.",
        "correct": true,
        "explanation": "Elle renouvelle la membrane plasmique et sécrète des protéines."
      },
      {
        "content": "Elle n'existe que dans les neurones et cellules endocrines.",
        "correct": false,
        "explanation": "La voie constitutive fonctionne très largement."
      },
      {
        "content": "Elle ne modifie jamais la composition de la membrane plasmique.",
        "correct": false,
        "explanation": "Elle apporte des protéines et lipides membranaires."
      },
      {
        "content": "Toute vésicule constitutive est obligatoirement recouverte de caveoline au moment de fusionner.",
        "correct": false,
        "explanation": "Il n'existe pas un manteau universel de ce type pour la fusion constitutive."
      }
    ],
    "explanation": "L'exocytose constitutive assure en continu la livraison de protéines et lipides vers la membrane plasmique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'exocytose régulée ?",
    "choices": [
      {
        "content": "Un signal déclenche la fusion des vésicules compétentes avec la membrane plasmique.",
        "correct": true,
        "explanation": "Une élévation de Ca2+ est un déclencheur fréquent."
      },
      {
        "content": "Les cargos peuvent être stockés dans des vésicules ou grains de sécrétion avant libération.",
        "correct": true,
        "explanation": "Le stockage permet une réponse rapide."
      },
      {
        "content": "Elle fonctionne avec la même intensité en permanence sans signal.",
        "correct": false,
        "explanation": "Cela décrit plutôt la voie constitutive."
      },
      {
        "content": "Les vésicules de sécrétion matures fusionnent après leur tri et leur maturation, sans conserver un manteau de clathrine comme cage de fusion.",
        "correct": true,
        "explanation": "La clathrine peut intervenir dans le tri au TGN ou la maturation de certaines granules, mais pas comme manteau universel de la fusion finale."
      },
      {
        "content": "Elle est particulièrement développée dans les cellules sécrétrices spécialisées.",
        "correct": true,
        "explanation": "Neurones et cellules endocrines en sont des exemples."
      }
    ],
    "explanation": "L'exocytose régulée stocke un cargo puis le libère rapidement en réponse à un signal, souvent une élévation de Ca2+."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur l'équilibre entre endocytose et exocytose, laquelle est correcte ?",
    "choices": [
      {
        "content": "Une cellule ne peut jamais changer sa surface membranaire.",
        "correct": false,
        "explanation": "Elle peut croître, migrer ou remodeler sa membrane."
      },
      {
        "content": "Endocytose et exocytose sont toujours exactement égales à chaque seconde dans toute cellule.",
        "correct": false,
        "explanation": "Le bilan peut varier selon la physiologie."
      },
      {
        "content": "Sur des temps longs, une cellule peut ajuster leurs flux pour maintenir ou modifier sa surface.",
        "correct": true,
        "explanation": "L'équilibre n'est pas nécessairement instantané ni parfait."
      },
      {
        "content": "Endocytose et exocytose sont totalement indépendantes de l'homéostasie membranaire.",
        "correct": false,
        "explanation": "Elles y contribuent ensemble."
      },
      {
        "content": "Toute différence temporaire entre les deux flux est forcément pathologique.",
        "correct": false,
        "explanation": "Des écarts physiologiques sont fréquents."
      }
    ],
    "explanation": "Les flux endocytaire et exocytaire s'équilibrent à l'échelle fonctionnelle, sans imposer une égalité parfaite instantanée."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans quels types cellulaires la transcytose est-elle particulièrement importante ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "cellules épithéliales ou endothéliales",
        "épithéliums",
        "endothélium"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La transcytose transfère un cargo entre deux domaines de surface d'une cellule polarisée par un trajet vésiculaire."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "L'acidification de l'endosome empêche tout changement du complexe transferrine-récepteur.",
        "correct": false,
        "explanation": "Elle est essentielle au cycle du fer."
      },
      {
        "content": "La transferrine plasmatique transporte physiologiquement surtout Fe2+ libre.",
        "correct": false,
        "explanation": "Elle lie principalement Fe3+."
      },
      {
        "content": "Le complexe transferrine-récepteur entre par endocytose clathrine-dépendante.",
        "correct": true,
        "explanation": "Le récepteur est recyclé."
      },
      {
        "content": "Les complexes LDL-récepteur sont internalisés par des puits recouverts de clathrine.",
        "correct": true,
        "explanation": "AP-2 et d'autres adaptateurs participent au tri."
      },
      {
        "content": "Le LDL entre normalement par un puits recouvert de COPII à la membrane plasmique.",
        "correct": false,
        "explanation": "L'endocytose du LDL est classiquement clathrine-dépendante."
      },
      {
        "content": "À la surface cellulaire, le retour à pH neutre favorise la dissociation de l'apotransferrine du récepteur.",
        "correct": true,
        "explanation": "Le cycle peut recommencer."
      },
      {
        "content": "L'acidification endosomale favorise la libération du fer.",
        "correct": true,
        "explanation": "L'apotransferrine reste liée au récepteur à pH acide."
      },
      {
        "content": "La dynamine est le ligand extracellulaire du récepteur LDL.",
        "correct": false,
        "explanation": "C'est une GTPase cytosolique de scission."
      },
      {
        "content": "Le LDL se lie au récepteur LDL à la surface de nombreuses cellules.",
        "correct": true,
        "explanation": "Le récepteur reconnaît notamment l'apoB-100 du LDL."
      },
      {
        "content": "La transferrine entre exclusivement par phagocytose.",
        "correct": false,
        "explanation": "Elle utilise une endocytose médiée par récepteurs."
      }
    ],
    "explanation": "Le complexe LDL–LDL-R est concentré dans des puits à clathrine, scindé avec la dynamine puis rapidement déshabillé. La transferrine transporte surtout Fe3+ et son récepteur suit un cycle clathrine-endosome-recyclage."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le tri du LDL et de son récepteur, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La dissociation LDL-récepteur exige un pH de 7,4 dans l'endosome.",
        "correct": false,
        "explanation": "Elle est favorisée par l'acidification."
      },
      {
        "content": "Le LDL ressort normalement intact par exocytose immédiatement après l'endosome précoce.",
        "correct": false,
        "explanation": "Il est dirigé vers la voie dégradative."
      },
      {
        "content": "L'endosome précoce constitue une station de tri majeure.",
        "correct": true,
        "explanation": "Il sépare notamment la voie de recyclage de la voie dégradative."
      },
      {
        "content": "L'endosome précoce n'a aucun rôle de tri.",
        "correct": false,
        "explanation": "C'est une station de tri centrale."
      },
      {
        "content": "Le pH acide de l'endosome favorise la dissociation du LDL et de son récepteur.",
        "correct": true,
        "explanation": "Cette séparation permet des destins distincts."
      }
    ],
    "explanation": "Le pH endosomal sépare LDL et LDL-R : le récepteur recycle, tandis que le LDL est adressé vers la voie lysosomale."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'entrée cellulaire du LDL, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La dynamine participe à la scission de la vésicule.",
        "correct": true,
        "explanation": "Son activité GTPase contribue au détachement."
      },
      {
        "content": "La dynamine est le ligand extracellulaire du récepteur LDL.",
        "correct": false,
        "explanation": "C'est une GTPase cytosolique de scission."
      },
      {
        "content": "Le manteau de clathrine est retiré avant l'arrivée fonctionnelle à l'endosome précoce.",
        "correct": true,
        "explanation": "Hsc70 et l'auxiline participent au déshabillage."
      },
      {
        "content": "Le LDL se lie au récepteur LDL à la surface de nombreuses cellules.",
        "correct": true,
        "explanation": "Le récepteur reconnaît notamment l'apoB-100 du LDL."
      },
      {
        "content": "Le LDL entre normalement par un puits recouvert de COPII à la membrane plasmique.",
        "correct": false,
        "explanation": "L'endocytose du LDL est classiquement clathrine-dépendante."
      }
    ],
    "explanation": "Le complexe LDL–LDL-R est concentré dans des puits à clathrine, scindé avec la dynamine puis rapidement déshabillé."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel compartiment reçoit le LDL pour sa dégradation finale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lysosome",
        "lysosomes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pH endosomal sépare LDL et LDL-R : le récepteur recycle, tandis que le LDL est adressé vers la voie lysosomale."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant le devenir lysosomal du LDL, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "L'absence de LDL-R diminue nécessairement le LDL plasmatique.",
        "correct": false,
        "explanation": "Elle tend au contraire à l'augmenter."
      },
      {
        "content": "Le cholestérol du LDL reste définitivement piégé dans la lumière lysosomale normale.",
        "correct": false,
        "explanation": "Il est exporté vers d'autres compartiments."
      },
      {
        "content": "Le cholestérol libéré peut quitter le système endolysosomal et alimenter d'autres membranes.",
        "correct": true,
        "explanation": "NPC2 et NPC1 participent au transfert du cholestérol hors du compartiment."
      },
      {
        "content": "Le LDL est internalisé uniquement pour empêcher mécaniquement toute maladie cardiovasculaire.",
        "correct": false,
        "explanation": "La fonction cellulaire principale est l'acquisition et l'homéostasie du cholestérol."
      },
      {
        "content": "Le récepteur LDL hydrolyse lui-même les esters de cholestérol à la membrane plasmique.",
        "correct": false,
        "explanation": "L'hydrolyse a lieu après livraison au compartiment lysosomal."
      }
    ],
    "explanation": "Le LDL fournit du cholestérol après hydrolyse lysosomale ; le LDL-R recycle et l'export du cholestérol implique notamment NPC1/NPC2."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'endocytose du récepteur de la transferrine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La transferrine transporte principalement du fer ferrique Fe3+ dans le plasma.",
        "correct": true,
        "explanation": "La forme physiologiquement liée à la transferrine est Fe3+."
      },
      {
        "content": "Le complexe transferrine-récepteur entre par endocytose clathrine-dépendante.",
        "correct": true,
        "explanation": "Le récepteur est recyclé."
      },
      {
        "content": "La transferrine entre exclusivement par phagocytose.",
        "correct": false,
        "explanation": "Elle utilise une endocytose médiée par récepteurs."
      },
      {
        "content": "L'acidification endosomale favorise la libération du fer.",
        "correct": true,
        "explanation": "L'apotransferrine reste liée au récepteur à pH acide."
      },
      {
        "content": "À la surface cellulaire, le retour à pH neutre favorise la dissociation de l'apotransferrine du récepteur.",
        "correct": true,
        "explanation": "Le cycle peut recommencer."
      }
    ],
    "explanation": "La transferrine transporte surtout Fe3+ et son récepteur suit un cycle clathrine-endosome-recyclage."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel compartiment de Golgi constitue le point de départ majeur du trafic vers la surface ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "réseau trans-Golgien",
        "TGN",
        "trans-Golgi network"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "L'exocytose constitutive assure en continu la livraison de protéines et lipides vers la membrane plasmique."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant l'exocytose régulée.",
    "choices": [
      {
        "content": "Les cargos peuvent être stockés dans des vésicules ou grains de sécrétion avant libération.",
        "correct": true,
        "explanation": "Le stockage permet une réponse rapide."
      },
      {
        "content": "Elle est limitée à l'export de lipides et ne sécrète jamais de protéines.",
        "correct": false,
        "explanation": "Hormones peptidiques, enzymes ou neurotransmetteurs peuvent être libérés."
      },
      {
        "content": "Elle fonctionne avec la même intensité en permanence sans signal.",
        "correct": false,
        "explanation": "Cela décrit plutôt la voie constitutive."
      },
      {
        "content": "Les vésicules de sécrétion matures fusionnent après leur tri et leur maturation, sans conserver un manteau de clathrine comme cage de fusion.",
        "correct": true,
        "explanation": "La clathrine peut intervenir dans le tri au TGN ou la maturation de certaines granules, mais pas comme manteau universel de la fusion finale."
      },
      {
        "content": "Le Ca2+ ne peut jamais déclencher d'exocytose.",
        "correct": false,
        "explanation": "C'est un déclencheur majeur dans de nombreux systèmes."
      }
    ],
    "explanation": "L'exocytose régulée stocke un cargo puis le libère rapidement en réponse à un signal, souvent une élévation de Ca2+.",
    "requiredSelectionCount": 2
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'équilibre entre endocytose et exocytose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Endocytose et exocytose sont totalement indépendantes de l'homéostasie membranaire.",
        "correct": false,
        "explanation": "Elles y contribuent ensemble."
      },
      {
        "content": "Endocytose et exocytose sont toujours exactement égales à chaque seconde dans toute cellule.",
        "correct": false,
        "explanation": "Le bilan peut varier selon la physiologie."
      },
      {
        "content": "Une cellule ne peut jamais changer sa surface membranaire.",
        "correct": false,
        "explanation": "Elle peut croître, migrer ou remodeler sa membrane."
      },
      {
        "content": "Sur des temps longs, une cellule peut ajuster leurs flux pour maintenir ou modifier sa surface.",
        "correct": true,
        "explanation": "L'équilibre n'est pas nécessairement instantané ni parfait."
      },
      {
        "content": "Endocytose et exocytose contribuent ensemble à l'homéostasie de la surface membranaire.",
        "correct": true,
        "explanation": "L'une retire de la membrane, l'autre en ajoute."
      }
    ],
    "explanation": "Les flux endocytaire et exocytaire s'équilibrent à l'échelle fonctionnelle, sans imposer une égalité parfaite instantanée."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant la transcytose, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Elle est impossible dans les cellules polarisées.",
        "correct": false,
        "explanation": "C'est justement un contexte classique."
      },
      {
        "content": "Elle consiste uniquement à dégrader un cargo dans un lysosome.",
        "correct": false,
        "explanation": "Son but est un transfert vers un autre domaine de surface."
      },
      {
        "content": "Elle est particulièrement importante dans les cellules épithéliales ou endothéliales polarisées.",
        "correct": true,
        "explanation": "Elle permet de franchir une barrière cellulaire sans traverser librement le cytosol."
      },
      {
        "content": "Elle ne comporte aucune étape d'endocytose.",
        "correct": false,
        "explanation": "Elle commence par une internalisation."
      },
      {
        "content": "La transcytose signifie diffusion libre d'une protéine à travers la bicouche plasmique.",
        "correct": false,
        "explanation": "Elle est vésiculaire."
      }
    ],
    "explanation": "La transcytose transfère un cargo entre deux domaines de surface d'une cellule polarisée par un trajet vésiculaire."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'entrée cellulaire du LDL, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La clathrine reste sur la vésicule jusqu'à sa dégradation lysosomale.",
        "correct": false,
        "explanation": "Le manteau est retiré rapidement."
      },
      {
        "content": "La dynamine participe à la scission de la vésicule.",
        "correct": true,
        "explanation": "Son activité GTPase contribue au détachement."
      },
      {
        "content": "Le LDL se lie au récepteur LDL à la surface de nombreuses cellules.",
        "correct": true,
        "explanation": "Le récepteur reconnaît notamment l'apoB-100 du LDL."
      },
      {
        "content": "Le manteau de clathrine est retiré avant l'arrivée fonctionnelle à l'endosome précoce.",
        "correct": true,
        "explanation": "Hsc70 et l'auxiline participent au déshabillage."
      },
      {
        "content": "Le LDL entre normalement par un puits recouvert de COPII à la membrane plasmique.",
        "correct": false,
        "explanation": "L'endocytose du LDL est classiquement clathrine-dépendante."
      }
    ],
    "explanation": "Le complexe LDL–LDL-R est concentré dans des puits à clathrine, scindé avec la dynamine puis rapidement déshabillé."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le destin principal du récepteur LDL après dissociation de son ligand dans l'endosome précoce ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "recyclage vers la membrane plasmique",
        "recyclage",
        "retour à la membrane plasmique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pH endosomal sépare LDL et LDL-R : le récepteur recycle, tandis que le LDL est adressé vers la voie lysosomale."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "L'apport de cholestérol par le LDL contribue à l'homéostasie du cholestérol cellulaire.",
        "correct": true,
        "explanation": "Il régule aussi la synthèse endogène et l'expression du LDL-R."
      },
      {
        "content": "Le cholestérol libéré peut quitter le système endolysosomal et alimenter d'autres membranes.",
        "correct": true,
        "explanation": "NPC2 et NPC1 participent au transfert du cholestérol hors du compartiment."
      },
      {
        "content": "Les cargos peuvent être stockés dans des vésicules ou grains de sécrétion avant libération.",
        "correct": true,
        "explanation": "Le stockage permet une réponse rapide."
      },
      {
        "content": "L'absence de LDL-R diminue nécessairement le LDL plasmatique.",
        "correct": false,
        "explanation": "Elle tend au contraire à l'augmenter."
      },
      {
        "content": "Le Ca2+ ne peut jamais déclencher d'exocytose.",
        "correct": false,
        "explanation": "C'est un déclencheur majeur dans de nombreux systèmes."
      },
      {
        "content": "Le LDL est internalisé uniquement pour empêcher mécaniquement toute maladie cardiovasculaire.",
        "correct": false,
        "explanation": "La fonction cellulaire principale est l'acquisition et l'homéostasie du cholestérol."
      },
      {
        "content": "Les esters de cholestérol du LDL sont hydrolysés dans le compartiment lysosomal.",
        "correct": true,
        "explanation": "La lipase acide lysosomale libère du cholestérol non estérifié."
      },
      {
        "content": "Le récepteur LDL hydrolyse lui-même les esters de cholestérol à la membrane plasmique.",
        "correct": false,
        "explanation": "L'hydrolyse a lieu après livraison au compartiment lysosomal."
      },
      {
        "content": "Le cholestérol du LDL reste définitivement piégé dans la lumière lysosomale normale.",
        "correct": false,
        "explanation": "Il est exporté vers d'autres compartiments."
      },
      {
        "content": "Elle est particulièrement développée dans les cellules sécrétrices spécialisées.",
        "correct": true,
        "explanation": "Neurones et cellules endocrines en sont des exemples."
      }
    ],
    "explanation": "Le LDL fournit du cholestérol après hydrolyse lysosomale ; le LDL-R recycle et l'export du cholestérol implique notamment NPC1/NPC2. L'exocytose régulée stocke un cargo puis le libère rapidement en réponse à un signal, souvent une élévation de Ca2+."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'endocytose du récepteur de la transferrine, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Le complexe transferrine-récepteur entre par endocytose clathrine-dépendante.",
        "correct": true,
        "explanation": "Le récepteur est recyclé."
      },
      {
        "content": "L'acidification de l'endosome empêche tout changement du complexe transferrine-récepteur.",
        "correct": false,
        "explanation": "Elle est essentielle au cycle du fer."
      },
      {
        "content": "À la surface cellulaire, le retour à pH neutre favorise la dissociation de l'apotransferrine du récepteur.",
        "correct": true,
        "explanation": "Le cycle peut recommencer."
      },
      {
        "content": "L'acidification endosomale favorise la libération du fer.",
        "correct": true,
        "explanation": "L'apotransferrine reste liée au récepteur à pH acide."
      },
      {
        "content": "La transferrine transporte principalement du fer ferrique Fe3+ dans le plasma.",
        "correct": true,
        "explanation": "La forme physiologiquement liée à la transferrine est Fe3+."
      }
    ],
    "explanation": "La transferrine transporte surtout Fe3+ et son récepteur suit un cycle clathrine-endosome-recyclage."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce schéma de tri endosomal du LDL, cliquez sur la destination principale du récepteur LDL après dissociation de son ligand.",
    "image": {
      "src": "/images/training/ue14/biologie-cellulaire/systeme-endomembranaire-1-endocytose-exocytose/tri-ldl-endosome-qzone.svg",
      "alt": "Schéma original montrant un endosome précoce, le recyclage du LDL-R vers la membrane plasmique et l'acheminement du LDL vers un lysosome",
      "width": 1200,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "recycling-membrane",
        "label": "Membrane plasmique — recyclage du LDL-R",
        "x": 0.86,
        "y": 0.23,
        "tolerance": 0.1
      }
    ],
    "explanation": "Après dissociation du LDL en milieu endosomal acide, le récepteur LDL est majoritairement recyclé vers la membrane plasmique, alors que le LDL poursuit vers la voie endolysosomale."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel est le destin principal du récepteur LDL après dissociation de son ligand dans l'endosome précoce ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "recyclage vers la membrane plasmique",
        "recyclage",
        "retour à la membrane plasmique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pH endosomal sépare LDL et LDL-R : le récepteur recycle, tandis que le LDL est adressé vers la voie lysosomale."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant le devenir lysosomal du LDL, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Le récepteur LDL hydrolyse lui-même les esters de cholestérol à la membrane plasmique.",
        "correct": false,
        "explanation": "L'hydrolyse a lieu après livraison au compartiment lysosomal."
      },
      {
        "content": "Le cholestérol libéré peut quitter le système endolysosomal et alimenter d'autres membranes.",
        "correct": true,
        "explanation": "NPC2 et NPC1 participent au transfert du cholestérol hors du compartiment."
      },
      {
        "content": "Les esters de cholestérol du LDL sont hydrolysés dans le compartiment lysosomal.",
        "correct": true,
        "explanation": "La lipase acide lysosomale libère du cholestérol non estérifié."
      },
      {
        "content": "L'absence de LDL-R diminue nécessairement le LDL plasmatique.",
        "correct": false,
        "explanation": "Elle tend au contraire à l'augmenter."
      },
      {
        "content": "Le cholestérol du LDL reste définitivement piégé dans la lumière lysosomale normale.",
        "correct": false,
        "explanation": "Il est exporté vers d'autres compartiments."
      }
    ],
    "explanation": "Le LDL fournit du cholestérol après hydrolyse lysosomale ; le LDL-R recycle et l'export du cholestérol implique notamment NPC1/NPC2.",
    "requiredSelectionCount": 2
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'endocytose du récepteur de la transferrine, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La transferrine transporte principalement du fer ferrique Fe3+ dans le plasma.",
        "correct": true,
        "explanation": "La forme physiologiquement liée à la transferrine est Fe3+."
      },
      {
        "content": "Le récepteur de la transferrine est systématiquement détruit à chaque cycle.",
        "correct": false,
        "explanation": "Il est largement recyclé."
      },
      {
        "content": "La transferrine entre exclusivement par phagocytose.",
        "correct": false,
        "explanation": "Elle utilise une endocytose médiée par récepteurs."
      },
      {
        "content": "L'acidification endosomale favorise la libération du fer.",
        "correct": true,
        "explanation": "L'apotransferrine reste liée au récepteur à pH acide."
      },
      {
        "content": "La transferrine plasmatique transporte physiologiquement surtout Fe2+ libre.",
        "correct": false,
        "explanation": "Elle lie principalement Fe3+."
      }
    ],
    "explanation": "La transferrine transporte surtout Fe3+ et son récepteur suit un cycle clathrine-endosome-recyclage."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Concernant l'exocytose constitutive, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Elle exige toujours un pic de Ca2+ déclenché par un potentiel d'action.",
        "correct": false,
        "explanation": "Cela caractérise certaines exocytoses régulées."
      },
      {
        "content": "Toute vésicule constitutive est obligatoirement recouverte de caveoline au moment de fusionner.",
        "correct": false,
        "explanation": "Il n'existe pas un manteau universel de ce type pour la fusion constitutive."
      },
      {
        "content": "Elle ne modifie jamais la composition de la membrane plasmique.",
        "correct": false,
        "explanation": "Elle apporte des protéines et lipides membranaires."
      },
      {
        "content": "Elle n'existe que dans les neurones et cellules endocrines.",
        "correct": false,
        "explanation": "La voie constitutive fonctionne très largement."
      },
      {
        "content": "Elle fonctionne en continu dans pratiquement toutes les cellules eucaryotes.",
        "correct": true,
        "explanation": "Elle renouvelle la membrane plasmique et sécrète des protéines."
      }
    ],
    "explanation": "L'exocytose constitutive assure en continu la livraison de protéines et lipides vers la membrane plasmique."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant l'exocytose régulée, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les vésicules de sécrétion matures fusionnent après leur tri et leur maturation, sans conserver un manteau de clathrine comme cage de fusion.",
        "correct": true,
        "explanation": "La clathrine peut intervenir dans le tri au TGN ou la maturation de certaines granules, mais pas comme manteau universel de la fusion finale."
      },
      {
        "content": "Les cargos peuvent être stockés dans des vésicules ou grains de sécrétion avant libération.",
        "correct": true,
        "explanation": "Le stockage permet une réponse rapide."
      },
      {
        "content": "Toute exocytose régulée exige un manteau de clathrine intact au moment de la fusion avec la membrane plasmique.",
        "correct": false,
        "explanation": "La fusion se fait avec une vésicule déshabillée."
      },
      {
        "content": "Elle est limitée à l'export de lipides et ne sécrète jamais de protéines.",
        "correct": false,
        "explanation": "Hormones peptidiques, enzymes ou neurotransmetteurs peuvent être libérés."
      },
      {
        "content": "Un signal déclenche la fusion des vésicules compétentes avec la membrane plasmique.",
        "correct": true,
        "explanation": "Une élévation de Ca2+ est un déclencheur fréquent."
      }
    ],
    "explanation": "L'exocytose régulée stocke un cargo puis le libère rapidement en réponse à un signal, souvent une élévation de Ca2+."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel terme décrit le maintien global d'une surface membranaire adaptée par ajustement des flux entrants et sortants ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "homéostasie membranaire",
        "équilibre membranaire",
        "homéostasie de la membrane"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les flux endocytaire et exocytaire s'équilibrent à l'échelle fonctionnelle, sans imposer une égalité parfaite instantanée."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le LDL est internalisé uniquement pour empêcher mécaniquement toute maladie cardiovasculaire.",
        "correct": false,
        "explanation": "La fonction cellulaire principale est l'acquisition et l'homéostasie du cholestérol."
      },
      {
        "content": "Le récepteur LDL hydrolyse lui-même les esters de cholestérol à la membrane plasmique.",
        "correct": false,
        "explanation": "L'hydrolyse a lieu après livraison au compartiment lysosomal."
      },
      {
        "content": "Le cholestérol libéré peut quitter le système endolysosomal et alimenter d'autres membranes.",
        "correct": true,
        "explanation": "NPC2 et NPC1 participent au transfert du cholestérol hors du compartiment."
      },
      {
        "content": "Elle conserve l'organisation membranaire et utilise la machinerie générale de trafic.",
        "correct": true,
        "explanation": "Le cargo reste dans des compartiments membranaires."
      },
      {
        "content": "Elle consiste uniquement à dégrader un cargo dans un lysosome.",
        "correct": false,
        "explanation": "Son but est un transfert vers un autre domaine de surface."
      },
      {
        "content": "Elle est impossible dans les cellules polarisées.",
        "correct": false,
        "explanation": "C'est justement un contexte classique."
      },
      {
        "content": "Les esters de cholestérol du LDL sont hydrolysés dans le compartiment lysosomal.",
        "correct": true,
        "explanation": "La lipase acide lysosomale libère du cholestérol non estérifié."
      },
      {
        "content": "Elle est particulièrement importante dans les cellules épithéliales ou endothéliales polarisées.",
        "correct": true,
        "explanation": "Elle permet de franchir une barrière cellulaire sans traverser librement le cytosol."
      },
      {
        "content": "Elle transporte un cargo d'un domaine de membrane plasmique vers un autre à travers une cellule.",
        "correct": true,
        "explanation": "Elle associe endocytose, transport intracellulaire puis exocytose."
      },
      {
        "content": "La transcytose signifie diffusion libre d'une protéine à travers la bicouche plasmique.",
        "correct": false,
        "explanation": "Elle est vésiculaire."
      }
    ],
    "explanation": "La transcytose transfère un cargo entre deux domaines de surface d'une cellule polarisée par un trajet vésiculaire. Le LDL fournit du cholestérol après hydrolyse lysosomale ; le LDL-R recycle et l'export du cholestérol implique notamment NPC1/NPC2."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant l'entrée cellulaire du LDL, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le LDL se lie au récepteur LDL à la surface de nombreuses cellules.",
        "correct": true,
        "explanation": "Le récepteur reconnaît notamment l'apoB-100 du LDL."
      },
      {
        "content": "Les complexes LDL-récepteur sont internalisés par des puits recouverts de clathrine.",
        "correct": true,
        "explanation": "AP-2 et d'autres adaptateurs participent au tri."
      },
      {
        "content": "La dynamine participe à la scission de la vésicule.",
        "correct": true,
        "explanation": "Son activité GTPase contribue au détachement."
      },
      {
        "content": "Le récepteur LDL est un cargo soluble contenu au centre de la vésicule.",
        "correct": false,
        "explanation": "C'est une protéine transmembranaire."
      },
      {
        "content": "Le manteau de clathrine est retiré avant l'arrivée fonctionnelle à l'endosome précoce.",
        "correct": true,
        "explanation": "Hsc70 et l'auxiline participent au déshabillage."
      }
    ],
    "explanation": "Le complexe LDL–LDL-R est concentré dans des puits à clathrine, scindé avec la dynamine puis rapidement déshabillé."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel compartiment reçoit le LDL pour sa dégradation finale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lysosome",
        "lysosomes"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le pH endosomal sépare LDL et LDL-R : le récepteur recycle, tandis que le LDL est adressé vers la voie lysosomale."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Dans une autre application, concernant le devenir lysosomal du LDL, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Le cholestérol libéré peut quitter le système endolysosomal et alimenter d'autres membranes.",
        "correct": true,
        "explanation": "NPC2 et NPC1 participent au transfert du cholestérol hors du compartiment."
      },
      {
        "content": "L'absence de LDL-R diminue nécessairement le LDL plasmatique.",
        "correct": false,
        "explanation": "Elle tend au contraire à l'augmenter."
      },
      {
        "content": "Le cholestérol du LDL reste définitivement piégé dans la lumière lysosomale normale.",
        "correct": false,
        "explanation": "Il est exporté vers d'autres compartiments."
      },
      {
        "content": "Le récepteur LDL hydrolyse lui-même les esters de cholestérol à la membrane plasmique.",
        "correct": false,
        "explanation": "L'hydrolyse a lieu après livraison au compartiment lysosomal."
      },
      {
        "content": "Les esters de cholestérol du LDL sont hydrolysés dans le compartiment lysosomal.",
        "correct": true,
        "explanation": "La lipase acide lysosomale libère du cholestérol non estérifié."
      }
    ],
    "explanation": "Le LDL fournit du cholestérol après hydrolyse lysosomale ; le LDL-R recycle et l'export du cholestérol implique notamment NPC1/NPC2.",
    "requiredSelectionCount": 2
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'endocytose du récepteur de la transferrine ?",
    "choices": [
      {
        "content": "Le complexe transferrine-récepteur entre par endocytose clathrine-dépendante.",
        "correct": true,
        "explanation": "Le récepteur est recyclé."
      },
      {
        "content": "L'acidification de l'endosome empêche tout changement du complexe transferrine-récepteur.",
        "correct": false,
        "explanation": "Elle est essentielle au cycle du fer."
      },
      {
        "content": "La transferrine transporte principalement du fer ferrique Fe3+ dans le plasma.",
        "correct": true,
        "explanation": "La forme physiologiquement liée à la transferrine est Fe3+."
      },
      {
        "content": "Le récepteur de la transferrine est systématiquement détruit à chaque cycle.",
        "correct": false,
        "explanation": "Il est largement recyclé."
      },
      {
        "content": "La transferrine entre exclusivement par phagocytose.",
        "correct": false,
        "explanation": "Elle utilise une endocytose médiée par récepteurs."
      }
    ],
    "explanation": "La transferrine transporte surtout Fe3+ et son récepteur suit un cycle clathrine-endosome-recyclage."
  }
];
