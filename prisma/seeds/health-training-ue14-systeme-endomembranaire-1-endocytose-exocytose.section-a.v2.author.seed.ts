import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch4 — Section A — Définition, compartiments et grandes directions du trafic */
export const UE14_BIOCELL_CH4_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le système endomembranaire, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Les mitochondries font partie du système endomembranaire.",
        "correct": false,
        "explanation": "Elles constituent un compartiment distinct du SEM."
      },
      {
        "content": "Il regroupe des compartiments limités par une membrane et échangeant du matériel par trafic membranaire.",
        "correct": true,
        "explanation": "Ces compartiments communiquent par vésicules ou tubules selon les voies considérées."
      },
      {
        "content": "Tous les compartiments du SEM sont physiquement continus entre eux.",
        "correct": false,
        "explanation": "Ils communiquent surtout par trafic membranaire ; la continuité physique n'est pas générale."
      },
      {
        "content": "Le SEM n'existe que chez les procaryotes.",
        "correct": false,
        "explanation": "Il est une caractéristique des cellules eucaryotes."
      },
      {
        "content": "Il est caractéristique des cellules eucaryotes.",
        "correct": true,
        "explanation": "Les procaryotes ne possèdent pas le réseau de compartiments membranaires interne typique des eucaryotes."
      }
    ],
    "explanation": "Le système endomembranaire est un réseau eucaryote de compartiments membranaires participant au tri et au transport intracellulaire."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant les compartiments du système endomembranaire, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "L'appareil de Golgi appartient au système endomembranaire.",
        "correct": true,
        "explanation": "Il reçoit et redistribue de nombreux cargos provenant du RE."
      },
      {
        "content": "L'appareil de Golgi est physiquement continu avec le réticulum endoplasmique comme une seule citerne.",
        "correct": false,
        "explanation": "Ils sont distincts et communiquent par trafic membranaire."
      },
      {
        "content": "Les mitochondries sont une sous-région du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Ce sont des organites distincts."
      },
      {
        "content": "Les endosomes sont des structures extracellulaires.",
        "correct": false,
        "explanation": "Ce sont des compartiments intracellulaires."
      },
      {
        "content": "Les lysosomes n'ont aucune relation avec le trafic vésiculaire.",
        "correct": false,
        "explanation": "Ils reçoivent de nombreux cargos par les voies endocytaires et biosynthétiques."
      }
    ],
    "explanation": "RE, Golgi, endosomes, lysosomes et enveloppe nucléaire s'intègrent au réseau endomembranaire, tandis que mitochondries et peroxysomes en sont distincts."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Lors d'une exocytose, vers quel milieu est finalement exposé le contenu luminal d'une vésicule ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "milieu extracellulaire",
        "espace extracellulaire",
        "MEC"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La topologie est conservée pendant le trafic : la face luminale reste non cytosolique et devient extracellulaire lors de l'exocytose."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les signaux de tri des cargos, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Un signal de rétention ou de récupération peut empêcher la perte durable d'une protéine résidente.",
        "correct": true,
        "explanation": "Ce type de signal permet de conserver ou de récupérer une protéine résidente dans son compartiment."
      },
      {
        "content": "De nombreuses protéines portent des signaux permettant leur adressage vers un compartiment ou une voie.",
        "correct": true,
        "explanation": "Ces signaux sont reconnus par des protéines de tri."
      },
      {
        "content": "Une protéine soluble luminale est toujours reconnue directement par une protéine cytosolique sans intermédiaire.",
        "correct": false,
        "explanation": "Un récepteur transmembranaire de cargo peut être nécessaire."
      },
      {
        "content": "Une protéine ne peut porter qu'un seul signal de tri pendant toute sa vie.",
        "correct": false,
        "explanation": "Plusieurs signaux peuvent coexister ou être exposés selon le contexte."
      },
      {
        "content": "Des récepteurs de cargo permettent de concentrer certaines protéines solubles dans des transporteurs.",
        "correct": true,
        "explanation": "Ils relient le cargo luminal à la machinerie cytosolique de tri."
      }
    ],
    "explanation": "Le trafic n'est pas aléatoire : des signaux moléculaires et des récepteurs de cargo orientent les protéines vers leur destination."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant les grandes directions du trafic membranaire.",
    "choices": [
      {
        "content": "Les endosomes n'envoient jamais de matériel vers la membrane plasmique.",
        "correct": false,
        "explanation": "Le recyclage endosomal est majeur."
      },
      {
        "content": "Le trafic endocytaire conduit du milieu extracellulaire et de la membrane plasmique vers les endosomes.",
        "correct": true,
        "explanation": "Les endosomes constituent une grande station de tri."
      },
      {
        "content": "Tout trafic membranaire va uniquement du RE vers la membrane plasmique.",
        "correct": false,
        "explanation": "Il existe des voies rétrogrades et endocytaires."
      },
      {
        "content": "Des voies rétrogrades ramènent aussi certains composants vers le Golgi ou le RE.",
        "correct": true,
        "explanation": "Le trafic intracellulaire est bidirectionnel."
      },
      {
        "content": "L'endocytose est une voie de sortie du RE vers le Golgi.",
        "correct": false,
        "explanation": "Elle correspond à l'internalisation depuis la surface cellulaire."
      }
    ],
    "explanation": "Le trafic membranaire associe flux biosynthétique-sécrétoire, endocytose, recyclage et voies rétrogrades.",
    "requiredSelectionCount": 2
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le système endomembranaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La lumière des compartiments du SEM est topologiquement équivalente au milieu extracellulaire lors du trafic vésiculaire.",
        "correct": true,
        "explanation": "Une protéine luminale reste du côté non cytosolique lors du bourgeonnement et de la fusion."
      },
      {
        "content": "Il est caractéristique des cellules eucaryotes.",
        "correct": true,
        "explanation": "Les procaryotes ne possèdent pas le réseau de compartiments membranaires interne typique des eucaryotes."
      },
      {
        "content": "Il regroupe des compartiments limités par une membrane et échangeant du matériel par trafic membranaire.",
        "correct": true,
        "explanation": "Ces compartiments communiquent par vésicules ou tubules selon les voies considérées."
      },
      {
        "content": "Le SEM organise le tri, la maturation et le transport de nombreuses protéines et lipides.",
        "correct": true,
        "explanation": "RE, Golgi, endosomes et lysosomes participent à ces fonctions."
      },
      {
        "content": "Le SEM n'existe que chez les procaryotes.",
        "correct": false,
        "explanation": "Il est une caractéristique des cellules eucaryotes."
      }
    ],
    "explanation": "Le système endomembranaire est un réseau eucaryote de compartiments membranaires participant au tri et au transport intracellulaire."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans une autre application, concernant les compartiments du système endomembranaire, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les lysosomes n'ont aucune relation avec le trafic vésiculaire.",
        "correct": false,
        "explanation": "Ils reçoivent de nombreux cargos par les voies endocytaires et biosynthétiques."
      },
      {
        "content": "Les mitochondries sont une sous-région du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Ce sont des organites distincts."
      },
      {
        "content": "La membrane plasmique participe aux échanges avec le SEM par endocytose et exocytose.",
        "correct": true,
        "explanation": "Elle est une interface majeure du trafic membranaire."
      },
      {
        "content": "Les endosomes sont des structures extracellulaires.",
        "correct": false,
        "explanation": "Ce sont des compartiments intracellulaires."
      },
      {
        "content": "L'appareil de Golgi est physiquement continu avec le réticulum endoplasmique comme une seule citerne.",
        "correct": false,
        "explanation": "Ils sont distincts et communiquent par trafic membranaire."
      }
    ],
    "explanation": "RE, Golgi, endosomes, lysosomes et enveloppe nucléaire s'intègrent au réseau endomembranaire, tandis que mitochondries et peroxysomes en sont distincts."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Comment appelle-t-on l'espace aqueux interne d'un compartiment du SEM ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "lumière",
        "lumen",
        "lumière du compartiment"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La topologie est conservée pendant le trafic : la face luminale reste non cytosolique et devient extracellulaire lors de l'exocytose."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La membrane plasmique participe aux échanges avec le SEM par endocytose et exocytose.",
        "correct": true,
        "explanation": "Elle est une interface majeure du trafic membranaire."
      },
      {
        "content": "L'appareil de Golgi est physiquement continu avec le réticulum endoplasmique comme une seule citerne.",
        "correct": false,
        "explanation": "Ils sont distincts et communiquent par trafic membranaire."
      },
      {
        "content": "De nombreuses protéines portent des signaux permettant leur adressage vers un compartiment ou une voie.",
        "correct": true,
        "explanation": "Ces signaux sont reconnus par des protéines de tri."
      },
      {
        "content": "Des récepteurs de cargo permettent de concentrer certaines protéines solubles dans des transporteurs.",
        "correct": true,
        "explanation": "Ils relient le cargo luminal à la machinerie cytosolique de tri."
      },
      {
        "content": "Toutes les protéines sont incorporées au hasard dans toutes les vésicules.",
        "correct": false,
        "explanation": "Le tri est sélectif pour de nombreux cargos."
      },
      {
        "content": "Une protéine soluble luminale est toujours reconnue directement par une protéine cytosolique sans intermédiaire.",
        "correct": false,
        "explanation": "Un récepteur transmembranaire de cargo peut être nécessaire."
      },
      {
        "content": "Le réticulum endoplasmique appartient au système endomembranaire.",
        "correct": true,
        "explanation": "Il comprend des régions lisses et rugueuses selon leur organisation."
      },
      {
        "content": "Les endosomes sont des structures extracellulaires.",
        "correct": false,
        "explanation": "Ce sont des compartiments intracellulaires."
      },
      {
        "content": "Les signaux d'adressage ne concernent que les lipides.",
        "correct": false,
        "explanation": "Ils sont notamment portés par des protéines."
      },
      {
        "content": "L'appareil de Golgi appartient au système endomembranaire.",
        "correct": true,
        "explanation": "Il reçoit et redistribue de nombreux cargos provenant du RE."
      }
    ],
    "explanation": "Le trafic n'est pas aléatoire : des signaux moléculaires et des récepteurs de cargo orientent les protéines vers leur destination. RE, Golgi, endosomes, lysosomes et enveloppe nucléaire s'intègrent au réseau endomembranaire, tandis que mitochondries et peroxysomes en sont distincts."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les grandes directions du trafic membranaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le Golgi ne reçoit jamais de trafic rétrograde.",
        "correct": false,
        "explanation": "Des voies rétrogrades lui ramènent protéines et lipides."
      },
      {
        "content": "Le trafic biosynthétique-sécrétoire conduit globalement du RE vers le Golgi puis vers des destinations comme la membrane plasmique, les endosomes ou les lysosomes.",
        "correct": true,
        "explanation": "Il correspond au flux sortant vers la surface ou d'autres compartiments."
      },
      {
        "content": "Tout trafic membranaire va uniquement du RE vers la membrane plasmique.",
        "correct": false,
        "explanation": "Il existe des voies rétrogrades et endocytaires."
      },
      {
        "content": "Des voies de recyclage ramènent des composants endocytés vers la membrane plasmique.",
        "correct": true,
        "explanation": "Le LDL-R en fournit un exemple classique."
      },
      {
        "content": "Les endosomes n'envoient jamais de matériel vers la membrane plasmique.",
        "correct": false,
        "explanation": "Le recyclage endosomal est majeur."
      }
    ],
    "explanation": "Le trafic membranaire associe flux biosynthétique-sécrétoire, endocytose, recyclage et voies rétrogrades."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le système endomembranaire, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Il est caractéristique des cellules eucaryotes.",
        "correct": true,
        "explanation": "Les procaryotes ne possèdent pas le réseau de compartiments membranaires interne typique des eucaryotes."
      },
      {
        "content": "Les peroxysomes sont des compartiments classiques du système endomembranaire.",
        "correct": false,
        "explanation": "Ils sont généralement considérés en dehors du SEM."
      },
      {
        "content": "Il regroupe des compartiments limités par une membrane et échangeant du matériel par trafic membranaire.",
        "correct": true,
        "explanation": "Ces compartiments communiquent par vésicules ou tubules selon les voies considérées."
      },
      {
        "content": "Le SEM organise le tri, la maturation et le transport de nombreuses protéines et lipides.",
        "correct": true,
        "explanation": "RE, Golgi, endosomes et lysosomes participent à ces fonctions."
      },
      {
        "content": "Les mitochondries font partie du système endomembranaire.",
        "correct": false,
        "explanation": "Elles constituent un compartiment distinct du SEM."
      }
    ],
    "explanation": "Le système endomembranaire est un réseau eucaryote de compartiments membranaires participant au tri et au transport intracellulaire."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel compartiment est physiquement continu avec la membrane externe de l'enveloppe nucléaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "réticulum endoplasmique",
        "RE",
        "réticulum endoplasmique rugueux"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "RE, Golgi, endosomes, lysosomes et enveloppe nucléaire s'intègrent au réseau endomembranaire, tandis que mitochondries et peroxysomes en sont distincts."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la topologie d'une cavité endomembranaire ?",
    "choices": [
      {
        "content": "Une protéine luminale devient automatiquement cytosolique à chaque fusion.",
        "correct": false,
        "explanation": "La topologie est conservée."
      },
      {
        "content": "La lumière d'une vésicule est directement continue avec le cytosol.",
        "correct": false,
        "explanation": "Elle en est séparée par la membrane."
      },
      {
        "content": "Les deux faces d'une membrane s'inversent lors du bourgeonnement.",
        "correct": false,
        "explanation": "L'orientation membranaire est conservée."
      },
      {
        "content": "Une protéine transmembranaire ne peut jamais être transportée dans une vésicule.",
        "correct": false,
        "explanation": "Les protéines membranaires constituent une part importante du cargo."
      },
      {
        "content": "Un compartiment endomembranaire possède une membrane et une lumière.",
        "correct": true,
        "explanation": "La membrane sépare la lumière du cytosol."
      }
    ],
    "explanation": "La topologie est conservée pendant le trafic : la face luminale reste non cytosolique et devient extracellulaire lors de l'exocytose."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les signaux de tri des cargos, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "De nombreuses protéines portent des signaux permettant leur adressage vers un compartiment ou une voie.",
        "correct": true,
        "explanation": "Ces signaux sont reconnus par des protéines de tri."
      },
      {
        "content": "Des récepteurs de cargo permettent de concentrer certaines protéines solubles dans des transporteurs.",
        "correct": true,
        "explanation": "Ils relient le cargo luminal à la machinerie cytosolique de tri."
      },
      {
        "content": "Les protéines membranaires et les protéines solubles peuvent toutes deux être triées.",
        "correct": true,
        "explanation": "Le mode de reconnaissance diffère selon la topologie du cargo."
      },
      {
        "content": "Une protéine soluble luminale est toujours reconnue directement par une protéine cytosolique sans intermédiaire.",
        "correct": false,
        "explanation": "Un récepteur transmembranaire de cargo peut être nécessaire."
      },
      {
        "content": "Un signal de rétention ou de récupération peut empêcher la perte durable d'une protéine résidente.",
        "correct": true,
        "explanation": "Ce type de signal permet de conserver ou de récupérer une protéine résidente dans son compartiment."
      }
    ],
    "explanation": "Le trafic n'est pas aléatoire : des signaux moléculaires et des récepteurs de cargo orientent les protéines vers leur destination."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel compartiment constitue une station centrale de tri de nombreux cargos endocytés ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "endosome précoce",
        "endosome",
        "endosomes précoces"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le trafic membranaire associe flux biosynthétique-sécrétoire, endocytose, recyclage et voies rétrogrades."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Concernant le système endomembranaire, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Il est caractéristique des cellules eucaryotes.",
        "correct": true,
        "explanation": "Les procaryotes ne possèdent pas le réseau de compartiments membranaires interne typique des eucaryotes."
      },
      {
        "content": "La lumière des compartiments du SEM est topologiquement équivalente au milieu extracellulaire lors du trafic vésiculaire.",
        "correct": true,
        "explanation": "Une protéine luminale reste du côté non cytosolique lors du bourgeonnement et de la fusion."
      },
      {
        "content": "Les mitochondries font partie du système endomembranaire.",
        "correct": false,
        "explanation": "Elles constituent un compartiment distinct du SEM."
      },
      {
        "content": "Le SEM n'existe que chez les procaryotes.",
        "correct": false,
        "explanation": "Il est une caractéristique des cellules eucaryotes."
      },
      {
        "content": "Tous les compartiments du SEM sont physiquement continus entre eux.",
        "correct": false,
        "explanation": "Ils communiquent surtout par trafic membranaire ; la continuité physique n'est pas générale."
      }
    ],
    "explanation": "Le système endomembranaire est un réseau eucaryote de compartiments membranaires participant au tri et au transport intracellulaire.",
    "requiredSelectionCount": 2
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les compartiments du système endomembranaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les endosomes sont des structures extracellulaires.",
        "correct": false,
        "explanation": "Ce sont des compartiments intracellulaires."
      },
      {
        "content": "Les mitochondries sont une sous-région du réticulum endoplasmique.",
        "correct": false,
        "explanation": "Ce sont des organites distincts."
      },
      {
        "content": "Le réticulum endoplasmique appartient au système endomembranaire.",
        "correct": true,
        "explanation": "Il comprend des régions lisses et rugueuses selon leur organisation."
      },
      {
        "content": "L'appareil de Golgi appartient au système endomembranaire.",
        "correct": true,
        "explanation": "Il reçoit et redistribue de nombreux cargos provenant du RE."
      },
      {
        "content": "L'appareil de Golgi est physiquement continu avec le réticulum endoplasmique comme une seule citerne.",
        "correct": false,
        "explanation": "Ils sont distincts et communiquent par trafic membranaire."
      }
    ],
    "explanation": "RE, Golgi, endosomes, lysosomes et enveloppe nucléaire s'intègrent au réseau endomembranaire, tandis que mitochondries et peroxysomes en sont distincts."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant la topologie d'une cavité endomembranaire, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Une protéine transmembranaire ne peut jamais être transportée dans une vésicule.",
        "correct": false,
        "explanation": "Les protéines membranaires constituent une part importante du cargo."
      },
      {
        "content": "La fusion d'une vésicule avec la membrane plasmique expose son contenu luminal au milieu extracellulaire.",
        "correct": true,
        "explanation": "Cette conservation de topologie explique l'exocytose."
      },
      {
        "content": "La lumière d'une vésicule est directement continue avec le cytosol.",
        "correct": false,
        "explanation": "Elle en est séparée par la membrane."
      },
      {
        "content": "Une protéine luminale devient automatiquement cytosolique à chaque fusion.",
        "correct": false,
        "explanation": "La topologie est conservée."
      },
      {
        "content": "Les deux faces d'une membrane s'inversent lors du bourgeonnement.",
        "correct": false,
        "explanation": "L'orientation membranaire est conservée."
      }
    ],
    "explanation": "La topologie est conservée pendant le trafic : la face luminale reste non cytosolique et devient extracellulaire lors de l'exocytose."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les signaux de tri des cargos ?",
    "choices": [
      {
        "content": "Un signal de rétention ou de récupération peut empêcher la perte durable d'une protéine résidente.",
        "correct": true,
        "explanation": "Ce type de signal permet de conserver ou de récupérer une protéine résidente dans son compartiment."
      },
      {
        "content": "Toutes les protéines sont incorporées au hasard dans toutes les vésicules.",
        "correct": false,
        "explanation": "Le tri est sélectif pour de nombreux cargos."
      },
      {
        "content": "Les protéines membranaires et les protéines solubles peuvent toutes deux être triées.",
        "correct": true,
        "explanation": "Le mode de reconnaissance diffère selon la topologie du cargo."
      },
      {
        "content": "De nombreuses protéines portent des signaux permettant leur adressage vers un compartiment ou une voie.",
        "correct": true,
        "explanation": "Ces signaux sont reconnus par des protéines de tri."
      },
      {
        "content": "Une protéine ne peut porter qu'un seul signal de tri pendant toute sa vie.",
        "correct": false,
        "explanation": "Plusieurs signaux peuvent coexister ou être exposés selon le contexte."
      }
    ],
    "explanation": "Le trafic n'est pas aléatoire : des signaux moléculaires et des récepteurs de cargo orientent les protéines vers leur destination."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment appelle-t-on le retour de récepteurs endocytés vers la membrane plasmique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "recyclage",
        "recyclage endosomal"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le trafic membranaire associe flux biosynthétique-sécrétoire, endocytose, recyclage et voies rétrogrades."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant le système endomembranaire, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les mitochondries font partie du système endomembranaire.",
        "correct": false,
        "explanation": "Elles constituent un compartiment distinct du SEM."
      },
      {
        "content": "Les peroxysomes sont des compartiments classiques du système endomembranaire.",
        "correct": false,
        "explanation": "Ils sont généralement considérés en dehors du SEM."
      },
      {
        "content": "Le SEM n'existe que chez les procaryotes.",
        "correct": false,
        "explanation": "Il est une caractéristique des cellules eucaryotes."
      },
      {
        "content": "Il est caractéristique des cellules eucaryotes.",
        "correct": true,
        "explanation": "Les procaryotes ne possèdent pas le réseau de compartiments membranaires interne typique des eucaryotes."
      },
      {
        "content": "Tous les compartiments du SEM sont physiquement continus entre eux.",
        "correct": false,
        "explanation": "Ils communiquent surtout par trafic membranaire ; la continuité physique n'est pas générale."
      }
    ],
    "explanation": "Le système endomembranaire est un réseau eucaryote de compartiments membranaires participant au tri et au transport intracellulaire."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Citez un compartiment du SEM impliqué dans le tri endocytaire.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "endosome",
        "endosomes",
        "endosome précoce"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "RE, Golgi, endosomes, lysosomes et enveloppe nucléaire s'intègrent au réseau endomembranaire, tandis que mitochondries et peroxysomes en sont distincts."
  }
];
