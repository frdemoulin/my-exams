import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biologie cellulaire — Ch4 — Section B — Transport vésiculaire, manteaux, adressage et fusion */
export const UE14_BIOCELL_CH4_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les grandes étapes d'un transport vésiculaire ?",
    "choices": [
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
        "content": "La perte du manteau précède généralement l'amarrage et la fusion avec la cible.",
        "correct": true,
        "explanation": "Le déshabillage rend la membrane accessible à la machinerie de fusion."
      },
      {
        "content": "L'amarrage puis la fusion assurent la livraison au compartiment receveur.",
        "correct": true,
        "explanation": "Rab et SNARE contribuent à la spécificité de cette étape."
      },
      {
        "content": "Le bourgeonnement sélectionne une membrane donneuse et forme un transporteur.",
        "correct": true,
        "explanation": "La courbure membranaire et le tri du cargo sont couplés."
      }
    ],
    "explanation": "Le cycle vésiculaire comprend formation, déshabillage, transport, reconnaissance de la cible puis fusion."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant la clathrine, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les adaptateurs sont inutiles pour le tri des cargos dans les puits recouverts.",
        "correct": false,
        "explanation": "Ils jouent un rôle central."
      },
      {
        "content": "La clathrine forme des cages sur la face cytosolique de certaines membranes.",
        "correct": true,
        "explanation": "Elle participe notamment à l'endocytose médiée par récepteurs."
      },
      {
        "content": "Un triskélion comporte une seule chaîne lourde.",
        "correct": false,
        "explanation": "Il en comporte trois."
      },
      {
        "content": "La clathrine est une pompe membranaire utilisant directement l'ATP pour transporter le LDL.",
        "correct": false,
        "explanation": "C'est une protéine de manteau."
      },
      {
        "content": "La clathrine reste nécessairement sur la vésicule jusqu'à la fusion avec l'endosome.",
        "correct": false,
        "explanation": "Elle est retirée rapidement après la scission."
      }
    ],
    "explanation": "La clathrine forme un manteau polyédrique à partir de triskélions et travaille avec des protéines adaptatrices pour concentrer les cargos."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Sur quelle face de la membrane agissent les adaptateurs de clathrine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "face cytosolique",
        "côté cytosolique",
        "cytosol"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les adaptateurs, notamment AP-2 à la membrane plasmique, couplent signaux de cargo, lipides membranaires et assemblage de clathrine."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la dynamine ?",
    "choices": [
      {
        "content": "La dynamine intervient dans l'endocytose clathrine-dépendante.",
        "correct": true,
        "explanation": "Elle peut également participer à la fission de certaines caveolae."
      },
      {
        "content": "La dynamine est une grande GTPase participant à la scission de nombreux bourgeons endocytaires.",
        "correct": true,
        "explanation": "Elle s'assemble autour du col du bourgeon."
      },
      {
        "content": "La dynamine catalyse la fusion finale de la vésicule avec l'endosome.",
        "correct": false,
        "explanation": "Son rôle principal est la scission."
      },
      {
        "content": "La dynamine hydrolyse l'ATP pour retirer la clathrine.",
        "correct": false,
        "explanation": "Elle hydrolyse le GTP ; Hsc70 utilise l'ATP pour le déshabillage."
      },
      {
        "content": "La dynamine est une protéine extracellulaire soluble.",
        "correct": false,
        "explanation": "Elle agit du côté cytosolique."
      }
    ],
    "explanation": "La dynamine est une grande GTPase de fission qui resserre le col des bourgeons endocytaires."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant le déshabillage des vésicules à clathrine, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Le déshabillage permet le recyclage des protéines de manteau.",
        "correct": true,
        "explanation": "Les composants peuvent être réutilisés pour de nouveaux cycles."
      },
      {
        "content": "Le déshabillage se produit après la fusion complète avec le lysosome.",
        "correct": false,
        "explanation": "Il a lieu beaucoup plus tôt."
      },
      {
        "content": "Le manteau de clathrine est retiré rapidement après la scission.",
        "correct": true,
        "explanation": "La vésicule doit devenir compétente pour l'adressage et la fusion."
      },
      {
        "content": "L'auxiline est le ligand extracellulaire du récepteur LDL.",
        "correct": false,
        "explanation": "C'est un cofacteur de déshabillage."
      },
      {
        "content": "La clathrine reste définitivement associée à chaque vésicule internalisée.",
        "correct": false,
        "explanation": "Le manteau est recyclé."
      }
    ],
    "explanation": "Les vésicules à clathrine sont rapidement déshabillées par une machinerie ATP-dépendante impliquant Hsc70 et l'auxiline.",
    "requiredSelectionCount": 2
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'adressage et la fusion des vésicules, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fusion membranaire est réalisée uniquement par la clathrine.",
        "correct": false,
        "explanation": "La clathrine forme un manteau, pas le moteur final de fusion."
      },
      {
        "content": "La spécificité d'une fusion dépend de plusieurs couches de reconnaissance.",
        "correct": true,
        "explanation": "Rab, facteurs d'attachement, lipides et SNAREs coopèrent."
      },
      {
        "content": "Les protéines SNARE participent directement à la fusion des membranes.",
        "correct": true,
        "explanation": "L'appariement de SNAREs rapproche les bicouches."
      },
      {
        "content": "Les Rab sont des protéines de matrice mitochondriale sans rôle dans le trafic.",
        "correct": false,
        "explanation": "Ce sont des GTPases de trafic membranaire."
      },
      {
        "content": "Une vésicule doit généralement perdre son manteau avant la fusion.",
        "correct": true,
        "explanation": "Le manteau gênerait l'accès des protéines de fusion."
      }
    ],
    "explanation": "Rab et SNARE assurent une grande partie de la reconnaissance des cibles et de la fusion, après déshabillage du transporteur."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant le rôle du cytosquelette dans le trafic membranaire, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le cytosquelette ne participe jamais à l'endocytose.",
        "correct": false,
        "explanation": "L'actine peut jouer un rôle majeur."
      },
      {
        "content": "Les microtubules sont constitués de clathrine.",
        "correct": false,
        "explanation": "Ils sont constitués de tubuline."
      },
      {
        "content": "Toutes les étapes de tout trafic utilisent obligatoirement du GTP et jamais d'ATP.",
        "correct": false,
        "explanation": "Les nucléotides utilisés dépendent des protéines impliquées."
      },
      {
        "content": "Le cytosquelette organise des trajectoires intracellulaires mais n'est pas requis de façon identique pour chaque événement vésiculaire.",
        "correct": true,
        "explanation": "Le degré de dépendance varie selon le type cellulaire et la voie."
      },
      {
        "content": "Toutes les vésicules diffusent passivement et aucune n'utilise de moteur moléculaire.",
        "correct": false,
        "explanation": "De nombreuses vésicules utilisent des moteurs."
      }
    ],
    "explanation": "Microtubules, actine et moteurs moléculaires contribuent au transport, mais leur rôle exact varie selon la voie."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle étape terminale permet la continuité membranaire avec le compartiment receveur ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "fusion",
        "fusion membranaire"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le cycle vésiculaire comprend formation, déshabillage, transport, reconnaissance de la cible puis fusion."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le déshabillage permet le recyclage des protéines de manteau.",
        "correct": true,
        "explanation": "Les composants peuvent être réutilisés pour de nouveaux cycles."
      },
      {
        "content": "Un triskélion contient trois chaînes lourdes et des chaînes légères associées.",
        "correct": true,
        "explanation": "Dans la description classique, une chaîne légère accompagne chacune des trois chaînes lourdes."
      },
      {
        "content": "Le déshabillage se produit après la fusion complète avec le lysosome.",
        "correct": false,
        "explanation": "Il a lieu beaucoup plus tôt."
      },
      {
        "content": "La clathrine reste définitivement associée à chaque vésicule internalisée.",
        "correct": false,
        "explanation": "Le manteau est recyclé."
      },
      {
        "content": "L'auxiline est le ligand extracellulaire du récepteur LDL.",
        "correct": false,
        "explanation": "C'est un cofacteur de déshabillage."
      },
      {
        "content": "La perte du manteau précède la fusion avec l'endosome.",
        "correct": true,
        "explanation": "La machinerie de fusion doit accéder à la membrane vésiculaire."
      },
      {
        "content": "Le manteau de clathrine est retiré rapidement après la scission.",
        "correct": true,
        "explanation": "La vésicule doit devenir compétente pour l'adressage et la fusion."
      },
      {
        "content": "Hsc70 utilise le GTP comme source d'énergie principale pour retirer la clathrine.",
        "correct": false,
        "explanation": "Elle est une ATPase."
      },
      {
        "content": "La clathrine forme des cages sur la face cytosolique de certaines membranes.",
        "correct": true,
        "explanation": "Elle participe notamment à l'endocytose médiée par récepteurs."
      },
      {
        "content": "Un triskélion comporte une seule chaîne lourde.",
        "correct": false,
        "explanation": "Il en comporte trois."
      }
    ],
    "explanation": "La clathrine forme un manteau polyédrique à partir de triskélions et travaille avec des protéines adaptatrices pour concentrer les cargos. Les vésicules à clathrine sont rapidement déshabillées par une machinerie ATP-dépendante impliquant Hsc70 et l'auxiline."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les protéines adaptatrices de la clathrine, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Les adaptateurs contribuent à la sélectivité du contenu vésiculaire.",
        "correct": true,
        "explanation": "Le manteau ne constitue donc pas seulement une cage mécanique."
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
        "content": "Elles relient des cargos membranaires au manteau de clathrine.",
        "correct": true,
        "explanation": "Elles reconnaissent des signaux portés par les domaines cytosoliques des cargos."
      },
      {
        "content": "Les adaptateurs se situent du côté cytosolique de la membrane.",
        "correct": true,
        "explanation": "Ils interagissent avec les queues cytosoliques des récepteurs."
      }
    ],
    "explanation": "Les adaptateurs, notamment AP-2 à la membrane plasmique, couplent signaux de cargo, lipides membranaires et assemblage de clathrine."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement les grandes étapes d'un transport vésiculaire ?",
    "choices": [
      {
        "content": "L'amarrage puis la fusion assurent la livraison au compartiment receveur.",
        "correct": true,
        "explanation": "Rab et SNARE contribuent à la spécificité de cette étape."
      },
      {
        "content": "Le bourgeonnement sélectionne une membrane donneuse et forme un transporteur.",
        "correct": true,
        "explanation": "La courbure membranaire et le tri du cargo sont couplés."
      },
      {
        "content": "Une vésicule fusionne avec sa cible tout en gardant nécessairement une cage de clathrine intacte.",
        "correct": false,
        "explanation": "Le manteau est généralement retiré avant la fusion."
      },
      {
        "content": "Le cytosquelette n'a aucun rôle dans le déplacement des transporteurs.",
        "correct": false,
        "explanation": "Il participe fréquemment au transport intracellulaire."
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
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de chaînes lourdes comporte un triskélion de clathrine ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "La clathrine forme un manteau polyédrique à partir de triskélions et travaille avec des protéines adaptatrices pour concentrer les cargos."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les protéines adaptatrices de la clathrine ?",
    "choices": [
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
        "content": "Les adaptateurs contribuent à la sélectivité du contenu vésiculaire.",
        "correct": true,
        "explanation": "Le manteau ne constitue donc pas seulement une cage mécanique."
      },
      {
        "content": "La clathrine possède une spécificité absolue suffisante pour chaque ligand extracellulaire sans récepteur.",
        "correct": false,
        "explanation": "Les récepteurs et adaptateurs assurent le tri."
      },
      {
        "content": "AP-2 est un composant de la matrice mitochondriale.",
        "correct": false,
        "explanation": "C'est un adaptateur de la membrane plasmique."
      }
    ],
    "explanation": "Les adaptateurs, notamment AP-2 à la membrane plasmique, couplent signaux de cargo, lipides membranaires et assemblage de clathrine."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la dynamine, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La dynamine intervient dans l'endocytose clathrine-dépendante.",
        "correct": true,
        "explanation": "Elle peut également participer à la fission de certaines caveolae."
      },
      {
        "content": "La dynamine est une petite GTPase de type Ras qui agit comme récepteur du LDL.",
        "correct": false,
        "explanation": "C'est une grande GTPase de fission membranaire."
      },
      {
        "content": "Son action se situe après la formation du puits et avant la libération complète de la vésicule.",
        "correct": true,
        "explanation": "Elle agit au niveau du col."
      },
      {
        "content": "L'hydrolyse du GTP contribue à la fission de la membrane.",
        "correct": true,
        "explanation": "La dynamine n'est pas une petite protéine G monomérique classique."
      },
      {
        "content": "La dynamine est une protéine extracellulaire soluble.",
        "correct": false,
        "explanation": "Elle agit du côté cytosolique."
      }
    ],
    "explanation": "La dynamine est une grande GTPase de fission qui resserre le col des bourgeons endocytaires."
  },
  {
    "order": 37,
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
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur l'adressage et la fusion des vésicules, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "La spécificité d'une fusion dépend de plusieurs couches de reconnaissance.",
        "correct": true,
        "explanation": "Rab, facteurs d'attachement, lipides et SNAREs coopèrent."
      },
      {
        "content": "Toute vésicule peut fusionner indistinctement avec n'importe quelle membrane.",
        "correct": false,
        "explanation": "La fusion est fortement régulée et spécifique."
      },
      {
        "content": "Les Rab sont des protéines de matrice mitochondriale sans rôle dans le trafic.",
        "correct": false,
        "explanation": "Ce sont des GTPases de trafic membranaire."
      },
      {
        "content": "Les protéines SNARE participent directement à la fusion des membranes.",
        "correct": true,
        "explanation": "L'appariement de SNAREs rapproche les bicouches."
      },
      {
        "content": "La fusion membranaire est réalisée uniquement par la clathrine.",
        "correct": false,
        "explanation": "La clathrine forme un manteau, pas le moteur final de fusion."
      }
    ],
    "explanation": "Rab et SNARE assurent une grande partie de la reconnaissance des cibles et de la fusion, après déshabillage du transporteur.",
    "requiredSelectionCount": 2
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le rôle du cytosquelette dans le trafic membranaire, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Des transporteurs vésiculaires se déplacent le long des microtubules grâce à des moteurs.",
        "correct": true,
        "explanation": "Kinésines et dynéines assurent de nombreux transports à longue distance."
      },
      {
        "content": "Le cytosquelette organise des trajectoires intracellulaires mais n'est pas requis de façon identique pour chaque événement vésiculaire.",
        "correct": true,
        "explanation": "Le degré de dépendance varie selon le type cellulaire et la voie."
      },
      {
        "content": "L'actine participe à plusieurs étapes proches de la membrane plasmique.",
        "correct": true,
        "explanation": "Elle peut contribuer au bourgeonnement, à la scission, à l'endocytose ou à l'exocytose."
      },
      {
        "content": "Le trafic membranaire est couplé à des moteurs moléculaires consommant de l'énergie.",
        "correct": true,
        "explanation": "ATP et GTP interviennent dans des sous-étapes différentes."
      },
      {
        "content": "Toutes les étapes de tout trafic utilisent obligatoirement du GTP et jamais d'ATP.",
        "correct": false,
        "explanation": "Les nucléotides utilisés dépendent des protéines impliquées."
      }
    ],
    "explanation": "Microtubules, actine et moteurs moléculaires contribuent au transport, mais leur rôle exact varie selon la voie."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les grandes étapes d'un transport vésiculaire ?",
    "choices": [
      {
        "content": "Une vésicule fusionne avec sa cible tout en gardant nécessairement une cage de clathrine intacte.",
        "correct": false,
        "explanation": "Le manteau est généralement retiré avant la fusion."
      },
      {
        "content": "L'amarrage précède toujours le bourgeonnement sur la membrane donneuse.",
        "correct": false,
        "explanation": "Le bourgeonnement intervient d'abord."
      },
      {
        "content": "Le transport vésiculaire ne fait intervenir aucune protéine cytosolique.",
        "correct": false,
        "explanation": "De nombreux facteurs cytosoliques participent au bourgeonnement, transport et fusion."
      },
      {
        "content": "Le cytosquelette n'a aucun rôle dans le déplacement des transporteurs.",
        "correct": false,
        "explanation": "Il participe fréquemment au transport intracellulaire."
      },
      {
        "content": "La perte du manteau précède généralement l'amarrage et la fusion avec la cible.",
        "correct": true,
        "explanation": "Le déshabillage rend la membrane accessible à la machinerie de fusion."
      }
    ],
    "explanation": "Le cycle vésiculaire comprend formation, déshabillage, transport, reconnaissance de la cible puis fusion."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la clathrine, quelles propositions sont exactes ?",
    "choices": [
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
      },
      {
        "content": "Un triskélion contient trois chaînes lourdes et des chaînes légères associées.",
        "correct": true,
        "explanation": "Dans la description classique, une chaîne légère accompagne chacune des trois chaînes lourdes."
      }
    ],
    "explanation": "La clathrine forme un manteau polyédrique à partir de triskélions et travaille avec des protéines adaptatrices pour concentrer les cargos."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel complexe adaptateur est classiquement associé à la clathrine à la membrane plasmique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "AP-2",
        "AP2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les adaptateurs, notamment AP-2 à la membrane plasmique, couplent signaux de cargo, lipides membranaires et assemblage de clathrine."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur la dynamine, laquelle est correcte ?",
    "choices": [
      {
        "content": "La dynamine catalyse la fusion finale de la vésicule avec l'endosome.",
        "correct": false,
        "explanation": "Son rôle principal est la scission."
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
        "content": "La dynamine est une petite GTPase de type Ras qui agit comme récepteur du LDL.",
        "correct": false,
        "explanation": "C'est une grande GTPase de fission membranaire."
      },
      {
        "content": "La dynamine hydrolyse l'ATP pour retirer la clathrine.",
        "correct": false,
        "explanation": "Elle hydrolyse le GTP ; Hsc70 utilise l'ATP pour le déshabillage."
      }
    ],
    "explanation": "La dynamine est une grande GTPase de fission qui resserre le col des bourgeons endocytaires."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel nucléotide fournit l'énergie au déshabillage des vésicules à clathrine par Hsc70 ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "ATP",
        "adénosine triphosphate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les vésicules à clathrine sont rapidement déshabillées par une machinerie ATP-dépendante impliquant Hsc70 et l'auxiline."
  }
];
