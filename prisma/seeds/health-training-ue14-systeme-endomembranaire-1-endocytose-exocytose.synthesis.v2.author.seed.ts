import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch4 — Synthèse — Système endomembranaire (1) */
export const UE14_BIOCELL_CH4_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le système endomembranaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est caractéristique des cellules eucaryotes.",
        "correct": true,
        "explanation": "Les procaryotes ne possèdent pas le réseau de compartiments membranaires interne typique des eucaryotes."
      },
      {
        "content": "Tous les compartiments du SEM sont physiquement continus entre eux.",
        "correct": false,
        "explanation": "Ils communiquent surtout par trafic membranaire ; la continuité physique n'est pas générale."
      },
      {
        "content": "La lumière des compartiments du SEM est topologiquement équivalente au milieu extracellulaire lors du trafic vésiculaire.",
        "correct": true,
        "explanation": "Une protéine luminale reste du côté non cytosolique lors du bourgeonnement et de la fusion."
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
    "order": 102,
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
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur la topologie d'une cavité endomembranaire, laquelle est correcte ?",
    "choices": [
      {
        "content": "La lumière d'une vésicule est directement continue avec le cytosol.",
        "correct": false,
        "explanation": "Elle en est séparée par la membrane."
      },
      {
        "content": "Une protéine transmembranaire possède des domaines exposés au cytosol et à la lumière du compartiment.",
        "correct": true,
        "explanation": "Son orientation est conservée lors du trafic vésiculaire."
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
        "content": "Une protéine luminale devient automatiquement cytosolique à chaque fusion.",
        "correct": false,
        "explanation": "La topologie est conservée."
      }
    ],
    "explanation": "La topologie est conservée pendant le trafic : la face luminale reste non cytosolique et devient extracellulaire lors de l'exocytose."
  },
  {
    "order": 104,
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
        "content": "Une protéine ne peut porter qu'un seul signal de tri pendant toute sa vie.",
        "correct": false,
        "explanation": "Plusieurs signaux peuvent coexister ou être exposés selon le contexte."
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
    "order": 105,
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
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur les grandes étapes d'un transport vésiculaire, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "L'amarrage précède toujours le bourgeonnement sur la membrane donneuse.",
        "correct": false,
        "explanation": "Le bourgeonnement intervient d'abord."
      },
      {
        "content": "Le cytosquelette n'a aucun rôle dans le déplacement des transporteurs.",
        "correct": false,
        "explanation": "Il participe fréquemment au transport intracellulaire."
      },
      {
        "content": "L'amarrage puis la fusion assurent la livraison au compartiment receveur.",
        "correct": true,
        "explanation": "Rab et SNARE contribuent à la spécificité de cette étape."
      },
      {
        "content": "La perte du manteau précède généralement l'amarrage et la fusion avec la cible.",
        "correct": true,
        "explanation": "Le déshabillage rend la membrane accessible à la machinerie de fusion."
      },
      {
        "content": "Le transport vésiculaire ne fait intervenir aucune protéine cytosolique.",
        "correct": false,
        "explanation": "De nombreux facteurs cytosoliques participent au bourgeonnement, transport et fusion."
      }
    ],
    "explanation": "Le cycle vésiculaire comprend formation, déshabillage, transport, reconnaissance de la cible puis fusion.",
    "requiredSelectionCount": 2
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la clathrine ?",
    "choices": [
      {
        "content": "La clathrine forme des cages sur la face cytosolique de certaines membranes.",
        "correct": true,
        "explanation": "Elle participe notamment à l'endocytose médiée par récepteurs."
      },
      {
        "content": "Les adaptateurs sont inutiles pour le tri des cargos dans les puits recouverts.",
        "correct": false,
        "explanation": "Ils jouent un rôle central."
      },
      {
        "content": "Un triskélion comporte une seule chaîne lourde.",
        "correct": false,
        "explanation": "Il en comporte trois."
      },
      {
        "content": "L'unité d'assemblage est le triskélion.",
        "correct": true,
        "explanation": "Sa forme à trois branches favorise la formation d'un réseau polyédrique."
      },
      {
        "content": "La clathrine est une pompe membranaire utilisant directement l'ATP pour transporter le LDL.",
        "correct": false,
        "explanation": "C'est une protéine de manteau."
      }
    ],
    "explanation": "La clathrine forme un manteau polyédrique à partir de triskélions et travaille avec des protéines adaptatrices pour concentrer les cargos."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les protéines adaptatrices de la clathrine ?",
    "choices": [
      {
        "content": "AP-2 est un composant de la matrice mitochondriale.",
        "correct": false,
        "explanation": "C'est un adaptateur de la membrane plasmique."
      },
      {
        "content": "La clathrine possède une spécificité absolue suffisante pour chaque ligand extracellulaire sans récepteur.",
        "correct": false,
        "explanation": "Les récepteurs et adaptateurs assurent le tri."
      },
      {
        "content": "Les adaptateurs sont des protéines luminales qui hydrolysent le LDL.",
        "correct": false,
        "explanation": "Ils sont cytosoliques et servent au tri."
      },
      {
        "content": "AP-2 est un adaptateur majeur de l'endocytose clathrine-dépendante à la membrane plasmique.",
        "correct": true,
        "explanation": "Il organise le recrutement de cargos et de clathrine."
      },
      {
        "content": "Les adaptateurs ne touchent jamais les cargos.",
        "correct": false,
        "explanation": "Ils reconnaissent des motifs de tri de nombreux cargos."
      }
    ],
    "explanation": "Les adaptateurs, notamment AP-2 à la membrane plasmique, couplent signaux de cargo, lipides membranaires et assemblage de clathrine."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la dynamine, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La dynamine catalyse la fusion finale de la vésicule avec l'endosome.",
        "correct": false,
        "explanation": "Son rôle principal est la scission."
      },
      {
        "content": "La dynamine est une grande GTPase participant à la scission de nombreux bourgeons endocytaires.",
        "correct": true,
        "explanation": "Elle s'assemble autour du col du bourgeon."
      },
      {
        "content": "La dynamine intervient dans l'endocytose clathrine-dépendante.",
        "correct": true,
        "explanation": "Elle peut également participer à la fission de certaines caveolae."
      },
      {
        "content": "La dynamine est une protéine extracellulaire soluble.",
        "correct": false,
        "explanation": "Elle agit du côté cytosolique."
      },
      {
        "content": "Son action se situe après la formation du puits et avant la libération complète de la vésicule.",
        "correct": true,
        "explanation": "Elle agit au niveau du col."
      }
    ],
    "explanation": "La dynamine est une grande GTPase de fission qui resserre le col des bourgeons endocytaires."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle chaperonne ATP-dépendante participe au déshabillage des vésicules à clathrine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Hsc70",
        "HSP70",
        "Hsp70"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les vésicules à clathrine sont rapidement déshabillées par une machinerie ATP-dépendante impliquant Hsc70 et l'auxiline."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le système endomembranaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les peroxysomes sont des compartiments classiques du système endomembranaire.",
        "correct": false,
        "explanation": "Ils sont généralement considérés en dehors du SEM."
      },
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
      }
    ],
    "explanation": "Le système endomembranaire est un réseau eucaryote de compartiments membranaires participant au tri et au transport intracellulaire."
  },
  {
    "order": 112,
    "difficulty": "HARD",
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
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant la topologie d'une cavité endomembranaire, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "La lumière d'une vésicule est directement continue avec le cytosol.",
        "correct": false,
        "explanation": "Elle en est séparée par la membrane."
      },
      {
        "content": "La fusion d'une vésicule avec la membrane plasmique expose son contenu luminal au milieu extracellulaire.",
        "correct": true,
        "explanation": "Cette conservation de topologie explique l'exocytose."
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
      },
      {
        "content": "Une protéine transmembranaire possède des domaines exposés au cytosol et à la lumière du compartiment.",
        "correct": true,
        "explanation": "Son orientation est conservée lors du trafic vésiculaire."
      }
    ],
    "explanation": "La topologie est conservée pendant le trafic : la face luminale reste non cytosolique et devient extracellulaire lors de l'exocytose.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les signaux de tri des cargos ?",
    "choices": [
      {
        "content": "Toutes les protéines sont incorporées au hasard dans toutes les vésicules.",
        "correct": false,
        "explanation": "Le tri est sélectif pour de nombreux cargos."
      },
      {
        "content": "Les signaux d'adressage ne concernent que les lipides.",
        "correct": false,
        "explanation": "Ils sont notamment portés par des protéines."
      },
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
      }
    ],
    "explanation": "Le trafic n'est pas aléatoire : des signaux moléculaires et des récepteurs de cargo orientent les protéines vers leur destination."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les grandes directions du trafic membranaire ?",
    "choices": [
      {
        "content": "Le trafic endocytaire conduit du milieu extracellulaire et de la membrane plasmique vers les endosomes.",
        "correct": true,
        "explanation": "Les endosomes constituent une grande station de tri."
      },
      {
        "content": "Le Golgi ne reçoit jamais de trafic rétrograde.",
        "correct": false,
        "explanation": "Des voies rétrogrades lui ramènent protéines et lipides."
      },
      {
        "content": "Les endosomes n'envoient jamais de matériel vers la membrane plasmique.",
        "correct": false,
        "explanation": "Le recyclage endosomal est majeur."
      },
      {
        "content": "Tout trafic membranaire va uniquement du RE vers la membrane plasmique.",
        "correct": false,
        "explanation": "Il existe des voies rétrogrades et endocytaires."
      },
      {
        "content": "L'endocytose est une voie de sortie du RE vers le Golgi.",
        "correct": false,
        "explanation": "Elle correspond à l'internalisation depuis la surface cellulaire."
      }
    ],
    "explanation": "Le trafic membranaire associe flux biosynthétique-sécrétoire, endocytose, recyclage et voies rétrogrades."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les grandes étapes d'un transport vésiculaire, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "L'amarrage puis la fusion assurent la livraison au compartiment receveur.",
        "correct": true,
        "explanation": "Rab et SNARE contribuent à la spécificité de cette étape."
      },
      {
        "content": "La perte du manteau précède généralement l'amarrage et la fusion avec la cible.",
        "correct": true,
        "explanation": "Le déshabillage rend la membrane accessible à la machinerie de fusion."
      },
      {
        "content": "Le cytosquelette n'a aucun rôle dans le déplacement des transporteurs.",
        "correct": false,
        "explanation": "Il participe fréquemment au transport intracellulaire."
      },
      {
        "content": "Le transport cytoplasmique peut utiliser le cytosquelette et des moteurs moléculaires.",
        "correct": true,
        "explanation": "Microtubules et actine peuvent servir de rails selon la voie."
      },
      {
        "content": "Le transport vésiculaire ne fait intervenir aucune protéine cytosolique.",
        "correct": false,
        "explanation": "De nombreux facteurs cytosoliques participent au bourgeonnement, transport et fusion."
      }
    ],
    "explanation": "Le cycle vésiculaire comprend formation, déshabillage, transport, reconnaissance de la cible puis fusion."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Comment appelle-t-on l'unité d'assemblage à trois branches de la clathrine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "triskélion",
        "triskelion"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La clathrine forme un manteau polyédrique à partir de triskélions et travaille avec des protéines adaptatrices pour concentrer les cargos."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Une vésicule doit généralement perdre son manteau avant la fusion.",
        "correct": true,
        "explanation": "Le manteau gênerait l'accès des protéines de fusion."
      },
      {
        "content": "Les adaptateurs contribuent à la sélectivité du contenu vésiculaire.",
        "correct": true,
        "explanation": "Le manteau ne constitue donc pas seulement une cage mécanique."
      },
      {
        "content": "Les Rab sont des protéines de matrice mitochondriale sans rôle dans le trafic.",
        "correct": false,
        "explanation": "Ce sont des GTPases de trafic membranaire."
      },
      {
        "content": "Elles relient des cargos membranaires au manteau de clathrine.",
        "correct": true,
        "explanation": "Elles reconnaissent des signaux portés par les domaines cytosoliques des cargos."
      },
      {
        "content": "AP-2 est un adaptateur majeur de l'endocytose clathrine-dépendante à la membrane plasmique.",
        "correct": true,
        "explanation": "Il organise le recrutement de cargos et de clathrine."
      },
      {
        "content": "La fusion membranaire est réalisée uniquement par la clathrine.",
        "correct": false,
        "explanation": "La clathrine forme un manteau, pas le moteur final de fusion."
      },
      {
        "content": "Les adaptateurs ne touchent jamais les cargos.",
        "correct": false,
        "explanation": "Ils reconnaissent des motifs de tri de nombreux cargos."
      },
      {
        "content": "Les adaptateurs sont des protéines luminales qui hydrolysent le LDL.",
        "correct": false,
        "explanation": "Ils sont cytosoliques et servent au tri."
      },
      {
        "content": "Les Rab GTPases contribuent à l'identité des compartiments et à l'amarrage des transporteurs.",
        "correct": true,
        "explanation": "Elles recrutent des effecteurs spécifiques."
      },
      {
        "content": "La clathrine possède une spécificité absolue suffisante pour chaque ligand extracellulaire sans récepteur.",
        "correct": false,
        "explanation": "Les récepteurs et adaptateurs assurent le tri."
      }
    ],
    "explanation": "Les adaptateurs, notamment AP-2 à la membrane plasmique, couplent signaux de cargo, lipides membranaires et assemblage de clathrine. Rab et SNARE assurent une grande partie de la reconnaissance des cibles et de la fusion, après déshabillage du transporteur."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la dynamine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La dynamine catalyse la fusion finale de la vésicule avec l'endosome.",
        "correct": false,
        "explanation": "Son rôle principal est la scission."
      },
      {
        "content": "La dynamine est une grande GTPase participant à la scission de nombreux bourgeons endocytaires.",
        "correct": true,
        "explanation": "Elle s'assemble autour du col du bourgeon."
      },
      {
        "content": "Son action se situe après la formation du puits et avant la libération complète de la vésicule.",
        "correct": true,
        "explanation": "Elle agit au niveau du col."
      },
      {
        "content": "La dynamine intervient dans l'endocytose clathrine-dépendante.",
        "correct": true,
        "explanation": "Elle peut également participer à la fission de certaines caveolae."
      },
      {
        "content": "L'hydrolyse du GTP contribue à la fission de la membrane.",
        "correct": true,
        "explanation": "La dynamine n'est pas une petite protéine G monomérique classique."
      }
    ],
    "explanation": "La dynamine est une grande GTPase de fission qui resserre le col des bourgeons endocytaires."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle chaperonne ATP-dépendante participe au déshabillage des vésicules à clathrine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Hsc70",
        "HSP70",
        "Hsp70"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les vésicules à clathrine sont rapidement déshabillées par une machinerie ATP-dépendante impliquant Hsc70 et l'auxiline."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur l'adressage et la fusion des vésicules, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Toute vésicule peut fusionner indistinctement avec n'importe quelle membrane.",
        "correct": false,
        "explanation": "La fusion est fortement régulée et spécifique."
      },
      {
        "content": "Une vésicule doit généralement perdre son manteau avant la fusion.",
        "correct": true,
        "explanation": "Le manteau gênerait l'accès des protéines de fusion."
      },
      {
        "content": "Les Rab sont des protéines de matrice mitochondriale sans rôle dans le trafic.",
        "correct": false,
        "explanation": "Ce sont des GTPases de trafic membranaire."
      },
      {
        "content": "La fusion membranaire est réalisée uniquement par la clathrine.",
        "correct": false,
        "explanation": "La clathrine forme un manteau, pas le moteur final de fusion."
      },
      {
        "content": "La spécificité d'une fusion dépend de plusieurs couches de reconnaissance.",
        "correct": true,
        "explanation": "Rab, facteurs d'attachement, lipides et SNAREs coopèrent."
      }
    ],
    "explanation": "Rab et SNARE assurent une grande partie de la reconnaissance des cibles et de la fusion, après déshabillage du transporteur.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel cytosquelette est particulièrement impliqué dans de nombreux événements proches de la membrane plasmique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "actine",
        "filaments d'actine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Microtubules, actine et moteurs moléculaires contribuent au transport, mais leur rôle exact varie selon la voie."
  }
];
